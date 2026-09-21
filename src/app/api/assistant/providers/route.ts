// ============================================================
// GET    /api/assistant/providers        — 列出全部供应商与配置状态
// POST   /api/assistant/providers        — 保存/更新配置 或 设为默认
// DELETE /api/assistant/providers?providerId=xxx — 删除配置
// 参考 pdb-tracker-web-v5 的 /api/agent/providers 契约。
// ============================================================

import { NextRequest } from 'next/server'
import { PROVIDER_CATALOG } from '@/lib/ai/providers'
import {
  deleteProviderConfig,
  listProviderStatuses,
  saveProviderConfig,
  setDefaultProvider,
} from '@/lib/ai/credentials'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** 列出供应商 + 默认供应商 */
export async function GET() {
  try {
    return Response.json(listProviderStatuses())
  } catch (e) {
    console.error('GET /api/assistant/providers error:', e)
    return Response.json({ error: '服务内部错误' }, { status: 500 })
  }
}

interface PostBody {
  providerId?: string
  apiKey?: string
  baseURL?: string
  defaultModel?: string
  enabled?: boolean
  setDefault?: boolean
}

/** 保存配置 / 设默认 */
export async function POST(req: NextRequest) {
  let body: PostBody
  try {
    body = (await req.json()) as PostBody
  } catch {
    return Response.json({ error: '无效的 JSON 请求体' }, { status: 400 })
  }

  // 校验 providerId 合法性（防任意字符串写入配置）
  if (
    body.providerId !== undefined &&
    !PROVIDER_CATALOG.some((p) => p.id === body.providerId)
  ) {
    return Response.json(
      {
        error: `providerId 必须是以下之一：${PROVIDER_CATALOG.map((p) => p.id).join(', ')}`,
      },
      { status: 400 }
    )
  }

  try {
    // 设为默认供应商
    if (body.setDefault && body.providerId) {
      const ok = setDefaultProvider(body.providerId)
      if (!ok) {
        return Response.json({ error: '设置默认供应商失败' }, { status: 500 })
      }
      return Response.json({ ok: true })
    }

    if (!body.providerId) {
      return Response.json({ error: 'providerId 必填' }, { status: 400 })
    }

    // 自定义接口必须带 baseURL
    const profile = PROVIDER_CATALOG.find((p) => p.id === body.providerId)
    if (profile?.customBaseURL) {
      const existingBaseURL = body.baseURL?.trim()
      if (!existingBaseURL) {
        return Response.json(
          { error: '自定义供应商必须提供 Base URL' },
          { status: 400 }
        )
      }
    }

    const ok = saveProviderConfig(body.providerId, {
      apiKey: body.apiKey?.trim() || undefined,
      baseURL: body.baseURL?.trim() || undefined,
      defaultModel: body.defaultModel?.trim() || undefined,
      enabled: body.enabled,
    })
    if (!ok) {
      return Response.json({ error: '保存配置失败' }, { status: 500 })
    }
    return Response.json({ ok: true })
  } catch (e) {
    console.error('POST /api/assistant/providers error:', e)
    return Response.json({ error: '服务内部错误' }, { status: 500 })
  }
}

/** 删除配置（内置 zai 不可删） */
export async function DELETE(req: NextRequest) {
  const providerId = req.nextUrl.searchParams.get('providerId')
  if (!providerId) {
    return Response.json(
      { error: '缺少 providerId 查询参数' },
      { status: 400 }
    )
  }
  if (providerId === 'zai') {
    return Response.json(
      { error: '内置供应商不可删除' },
      { status: 400 }
    )
  }
  try {
    const ok = deleteProviderConfig(providerId)
    if (!ok) {
      return Response.json({ error: '删除配置失败' }, { status: 500 })
    }
    return Response.json({ ok: true })
  } catch (e) {
    console.error('DELETE /api/assistant/providers error:', e)
    return Response.json({ error: '服务内部错误' }, { status: 500 })
  }
}
