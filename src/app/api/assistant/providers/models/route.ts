// ============================================================
// POST /api/assistant/providers/models — 自动检测供应商可用模型
// 触发时机：用户在配置面板输入 API Key 后自动/手动检测。
// 两种调用方式：
//   1. body 携带 apiKey（尚未保存的即时检测，不落盘）
//   2. body 不带 apiKey → 使用已保存配置 / 环境变量中的 Key
// 策略：
//   - zai → 返回内置目录模型（SDK 无 /models 端点）
//   - 其余 → GET {baseURL}/models 解析 OpenAI 兼容格式
//     （data: [{id}] / 顶层数组 / models: [{name|id}] 三种变体）
//   - 与 PROVIDER_CATALOG 合并：已知模型补全 name / contextWindow
// 超时 10s，返回 { ok, models: [{id, name, contextWindow?}], source }
// ============================================================

import { NextRequest } from 'next/server'
import { getProviderProfile, type ProviderModel } from '@/lib/ai/providers'
import { resolveApiKey, resolveBaseURL } from '@/lib/ai/credentials'

export const runtime = 'nodejs'
export const maxDuration = 30
export const dynamic = 'force-dynamic'

const TIMEOUT_MS = 10000

/** 单次检测返回的模型上限（防超长列表拖垮 UI） */
const MAX_MODELS = 200

function truncate(text: string, max = 160): string {
  const t = text.trim()
  return t.length <= max ? t : `${t.slice(0, max)}…`
}

/** 从 /models 响应 JSON 中尽力解析出模型 id 列表（兼容多种变体） */
function extractModelIds(raw: unknown): string[] {
  if (!raw || typeof raw !== 'object') return []
  const obj = raw as Record<string, unknown>

  // 变体一：{ data: [{ id: "..." }, ...] }（OpenAI 标准）
  if (Array.isArray(obj.data)) {
    return obj.data
      .map((m) =>
        m && typeof m === 'object'
          ? String((m as Record<string, unknown>).id ?? '')
          : ''
      )
      .filter(Boolean)
  }
  // 变体二：顶层直接是数组 [{ id } | { name }]
  if (Array.isArray(raw)) {
    return (raw as unknown[])
      .map((m) => {
        if (!m || typeof m !== 'object') return ''
        const rec = m as Record<string, unknown>
        return String(rec.id ?? rec.name ?? '')
      })
      .filter(Boolean)
  }
  // 变体三：{ models: [{ name | id }] }（部分本地/自定义服务）
  if (Array.isArray(obj.models)) {
    return obj.models
      .map((m) => {
        if (!m || typeof m !== 'object') return ''
        const rec = m as Record<string, unknown>
        return String(rec.name ?? rec.id ?? '')
      })
      .filter(Boolean)
  }
  return []
}

/** 用目录元数据补全检测到的模型（name / contextWindow） */
function mergeWithCatalog(
  providerId: string,
  ids: string[]
): ProviderModel[] {
  const profile = getProviderProfile(providerId)
  const catalog = new Map(
    (profile?.models ?? []).map((m) => [m.id, m] as const)
  )
  const seen = new Set<string>()
  const merged: ProviderModel[] = []
  for (const id of ids) {
    if (seen.has(id)) continue
    seen.add(id)
    const known = catalog.get(id)
    merged.push({
      id,
      name: known?.name ?? id,
      ...(known?.contextWindow ? { contextWindow: known.contextWindow } : {}),
    })
    if (merged.length >= MAX_MODELS) break
  }
  return merged
}

/** 模型排序：目录默认模型置顶，已知模型次之，其余按 API 顺序 */
function sortModels(
  providerId: string,
  models: ProviderModel[]
): ProviderModel[] {
  const profile = getProviderProfile(providerId)
  const preferred = new Set((profile?.models ?? []).map((m) => m.id))
  const preferredDefault = profile?.defaultModel
  return [...models].sort((a, b) => {
    if (a.id === preferredDefault) return -1
    if (b.id === preferredDefault) return 1
    const pa = preferred.has(a.id) ? 0 : 1
    const pb = preferred.has(b.id) ? 0 : 1
    return pa - pb
  })
}

export async function POST(req: NextRequest) {
  let body: {
    providerId?: string
    apiKey?: string
    baseURL?: string
  }
  try {
    body = (await req.json()) as typeof body
  } catch {
    return Response.json(
      { ok: false, error: '无效的 JSON 请求体' },
      { status: 400 }
    )
  }

  const providerId = body.providerId ?? ''
  if (!providerId) {
    return Response.json(
      { ok: false, error: '缺少 providerId' },
      { status: 400 }
    )
  }

  const profile = getProviderProfile(providerId)
  if (!profile) {
    return Response.json(
      { ok: false, error: `未知供应商：${providerId}` },
      { status: 404 }
    )
  }

  // zai 走 SDK 内置鉴权，无公开 /models 端点 → 直接返回目录模型
  if (providerId === 'zai') {
    return Response.json({
      ok: true,
      source: 'catalog',
      models: profile.models.map((m) => ({ ...m })),
      note: 'z.ai SDK 内置鉴权，返回预设模型列表',
    })
  }

  // Key 解析优先级：请求体直传（未保存场景）→ 已保存配置 → 环境变量
  const inlineKey = body.apiKey?.trim()
  const apiKey = inlineKey || resolveApiKey(providerId)
  if (!apiKey) {
    return Response.json({
      ok: false,
      error: '请先输入 API Key 再检测模型',
    })
  }

  // Base URL 解析优先级：请求体直传 → 已保存覆盖 → 档案默认
  const inlineBase = body.baseURL?.trim()
  const baseURL = inlineBase || resolveBaseURL(providerId)
  if (!baseURL) {
    return Response.json({
      ok: false,
      error: `${profile.displayName} 缺少 Base URL${profile.customBaseURL ? '（自定义接口必须填写）' : ''}`,
    })
  }

  const authHeader = profile.authHeader ?? 'Authorization'
  const authPrefix = profile.authPrefix ?? 'Bearer '
  const headers: Record<string, string> = {
    [authHeader]: `${authPrefix}${apiKey}`,
    'Content-Type': 'application/json',
    ...(profile.extraHeaders ?? {}),
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const modelsUrl = `${baseURL.replace(/\/+$/, '')}/models`
    let resp: Response
    try {
      resp = await fetch(modelsUrl, {
        method: 'GET',
        headers,
        signal: controller.signal,
      })
    } catch (e) {
      return Response.json({
        ok: false,
        error: `连接失败（${e instanceof Error ? e.message : String(e)}）——请检查 Base URL 与网络可达性`,
      })
    }

    const rawText = await resp.text().catch(() => '')

    // 打到了网页上
    if (rawText.trimStart().startsWith('<')) {
      return Response.json({
        ok: false,
        error: `返回了 HTML 页面而非模型列表，请检查 Base URL 是否正确：${baseURL}`,
      })
    }

    if (resp.status === 401 || resp.status === 403) {
      let detail = ''
      try {
        const j = JSON.parse(rawText) as { error?: { message?: string } }
        detail = j?.error?.message ?? ''
      } catch {
        detail = truncate(rawText)
      }
      return Response.json({
        ok: false,
        error: `API Key 无效（HTTP ${resp.status}）${detail ? `——${truncate(detail, 120)}` : ''}`,
      })
    }

    if (!resp.ok) {
      // /models 不被支持（404/405 等）→ 明确告知可手动填写模型 ID
      if (resp.status === 404 || resp.status === 405) {
        return Response.json({
          ok: false,
          unsupported: true,
          error: `${profile.displayName} 不支持模型列表接口（HTTP ${resp.status}），可从预设列表选择或手动输入模型 ID`,
        })
      }
      return Response.json({
        ok: false,
        error: `HTTP ${resp.status}${rawText ? `——${truncate(rawText)}` : ''}`,
      })
    }

    // 200 → 解析模型列表
    let parsed: unknown
    try {
      parsed = JSON.parse(rawText)
    } catch {
      return Response.json({
        ok: false,
        unsupported: true,
        error: '模型列表返回了非 JSON 内容，可手动输入模型 ID',
      })
    }

    const ids = extractModelIds(parsed)
    if (ids.length === 0) {
      return Response.json({
        ok: false,
        unsupported: true,
        error: '未从响应中解析到模型 ID，可手动输入模型 ID',
      })
    }

    const models = sortModels(providerId, mergeWithCatalog(providerId, ids))
    return Response.json({
      ok: true,
      source: 'live',
      models,
    })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    if (controller.signal.aborted) {
      return Response.json({
        ok: false,
        error: `请求超时（${TIMEOUT_MS / 1000}s）——供应商未响应`,
      })
    }
    return Response.json({ ok: false, error: `检测失败：${msg}` })
  } finally {
    clearTimeout(timer)
  }
}
