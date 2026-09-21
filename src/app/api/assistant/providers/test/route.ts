// ============================================================
// POST /api/assistant/providers/test — 测试供应商连通性
// 策略（参考 pdb-tracker-web-v5）：
// 1. zai → SDK 内置鉴权，直接返回 ok
// 2. 先 GET {baseURL}/models（最廉价、大多数供应商支持）
// 3. 若 /models 404/405 → 回退 POST /chat/completions（max_tokens=1 的
//    最小请求）验证 Key 与模型可用性
// 超时 8s，返回 { ok, error?, models? }
// ============================================================

import { NextRequest } from 'next/server'
import { getProviderProfile } from '@/lib/ai/providers'
import { resolveApiKey, resolveBaseURL, resolveModel } from '@/lib/ai/credentials'

export const runtime = 'nodejs'
export const maxDuration = 30
export const dynamic = 'force-dynamic'

const TIMEOUT_MS = 8000

function truncate(text: string, max = 160): string {
  const t = text.trim()
  return t.length <= max ? t : `${t.slice(0, max)}…`
}

export async function POST(req: NextRequest) {
  let providerId: string
  try {
    const body = (await req.json()) as { providerId?: string }
    providerId = body.providerId ?? ''
  } catch {
    return Response.json(
      { ok: false, error: '无效的 JSON 请求体' },
      { status: 400 }
    )
  }

  if (!providerId) {
    return Response.json(
      { ok: false, error: '缺少 providerId' },
      { status: 400 }
    )
  }

  // zai 走 SDK 内置鉴权，视为始终可用
  if (providerId === 'zai') {
    return Response.json({
      ok: true,
      models: 0,
      note: 'z.ai SDK 内置鉴权，无需 API Key',
    })
  }

  const profile = getProviderProfile(providerId)
  if (!profile) {
    return Response.json(
      { ok: false, error: `未知供应商：${providerId}` },
      { status: 404 }
    )
  }

  const apiKey = resolveApiKey(providerId)
  if (!apiKey) {
    return Response.json({
      ok: false,
      error: `尚未配置 ${profile.displayName} 的 API Key`,
    })
  }
  const baseURL = resolveBaseURL(providerId)
  if (!baseURL) {
    return Response.json({
      ok: false,
      error: `${profile.displayName} 缺少 Base URL`,
    })
  }
  const model = resolveModel(providerId) ?? profile.defaultModel

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
    /* ---- 策略一：GET /models ---- */
    const modelsUrl = `${baseURL.replace(/\/+$/, '')}/models`
    let modelsResp: Response
    try {
      modelsResp = await fetch(modelsUrl, {
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

    const rawText = await modelsResp.text().catch(() => '')

    if (modelsResp.ok) {
      // 返回 HTML → URL 打到了网页上
      if (rawText.trimStart().startsWith('<')) {
        return Response.json({
          ok: false,
          error: `${profile.displayName} 返回了 HTML 页面，请检查 Base URL 是否正确：${baseURL}`,
        })
      }
      try {
        const data = JSON.parse(rawText) as { data?: unknown[] }
        const modelCount = Array.isArray(data?.data)
          ? data.data.length
          : 0
        return Response.json({ ok: true, models: modelCount })
      } catch {
        // 200 但非 JSON —— Key 大概率有效
        return Response.json({ ok: true, models: 0, note: 'API Key 有效' })
      }
    }

    if (modelsResp.status === 401 || modelsResp.status === 403) {
      let detail = ''
      if (rawText && !rawText.trimStart().startsWith('<')) {
        try {
          const j = JSON.parse(rawText) as { error?: { message?: string } }
          detail = j?.error?.message ?? ''
        } catch {
          detail = truncate(rawText)
        }
      }
      return Response.json({
        ok: false,
        error: `API Key 无效（HTTP ${modelsResp.status}）${detail ? `——${truncate(detail, 120)}` : ''}`,
      })
    }

    /* ---- 策略二：/models 不支持 → 最小 chat 请求 ---- */
    if (modelsResp.status === 404 || modelsResp.status === 405) {
      if (!model) {
        return Response.json({
          ok: false,
          error: `${profile.displayName} 未设置模型 ID，无法发起回退测试`,
        })
      }
      const chatUrl = `${baseURL.replace(/\/+$/, '')}/chat/completions`
      let chatResp: Response
      try {
        chatResp = await fetch(chatUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            model,
            messages: [{ role: 'user', content: 'ping' }],
            max_tokens: 1,
            stream: false,
          }),
          signal: controller.signal,
        })
      } catch (e) {
        return Response.json({
          ok: false,
          error: `连接失败（${e instanceof Error ? e.message : String(e)}）`,
        })
      }
      if (chatResp.ok) {
        return Response.json({
          ok: true,
          models: 0,
          note: 'chat/completions 验证通过',
        })
      }
      const chatText = await chatResp.text().catch(() => '')
      let detail = ''
      if (chatText && !chatText.trimStart().startsWith('<')) {
        try {
          const j = JSON.parse(chatText) as { error?: { message?: string } }
          detail = j?.error?.message ?? truncate(chatText)
        } catch {
          detail = truncate(chatText)
        }
      }
      if (chatResp.status === 401 || chatResp.status === 403) {
        return Response.json({
          ok: false,
          error: `API Key 无效（HTTP ${chatResp.status}）${detail ? `——${truncate(detail, 120)}` : ''}`,
        })
      }
      if (chatResp.status === 404) {
        return Response.json({
          ok: false,
          error: `模型不存在（HTTP 404）——请检查模型 ID「${model}」${detail ? `：${truncate(detail, 120)}` : ''}`,
        })
      }
      return Response.json({
        ok: false,
        error: `HTTP ${chatResp.status}${detail ? `——${truncate(detail, 120)}` : ''}`,
      })
    }

    return Response.json({
      ok: false,
      error: `HTTP ${modelsResp.status}${rawText ? `——${truncate(rawText)}` : ''}`,
    })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    if (controller.signal.aborted) {
      return Response.json({
        ok: false,
        error: `请求超时（${TIMEOUT_MS / 1000}s）——供应商未响应，请检查网络或换用其他供应商`,
      })
    }
    return Response.json({ ok: false, error: `测试失败：${msg}` })
  } finally {
    clearTimeout(timer)
  }
}
