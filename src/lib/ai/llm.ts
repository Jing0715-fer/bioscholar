// ============================================================
// BioScholar AI 助教 — 统一 LLM 流式调用器
// 参考 pdb-tracker-web-v5 的 openai-compat-adapter 设计：
// - zai（内置）：走 z-ai-web-dev-sdk（自带鉴权）
// - 其他供应商：直接 fetch OpenAI 兼容 /chat/completions（SSE 流）
// 对外暴露一个 AsyncGenerator<string>（文本增量），
// /api/chat 与 /api/assistant/figure-explain 统一消费。
// ============================================================

import ZAI from 'z-ai-web-dev-sdk'
import { getProviderProfile } from './providers'
import {
  resolveActiveProvider,
  resolveApiKey,
  resolveBaseURL,
  resolveModel,
} from './credentials'

export interface LlmMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface StreamLlmOptions {
  messages: LlmMessage[]
  /** 强制指定供应商 id（缺省走当前默认） */
  providerId?: string
  /** 中止信号（透传给 fetch） */
  signal?: AbortSignal
}

export interface ActiveLlmInfo {
  providerId: string
  displayName: string
  model: string
}

/** 当前生效的供应商信息（供路由/前端展示） */
export function getActiveLlmInfo(): ActiveLlmInfo {
  const p = resolveActiveProvider()
  return {
    providerId: p.id,
    displayName: p.displayName,
    model: resolveModel(p.id) ?? p.defaultModel,
  }
}

/* ---------- SSE 解析工具 ---------- */

/** 将字节流转为 SSE 行流 */
async function* sseLines(
  stream: ReadableStream<Uint8Array>
): AsyncGenerator<string> {
  const reader = stream.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  try {
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''
      for (const line of lines) yield line
    }
    if (buffer.trim()) yield buffer
  } finally {
    reader.releaseLock()
  }
}

/** 从 SSE 行流中提取文本增量（OpenAI 增量格式） */
async function* deltasFromSseLines(
  lines: AsyncGenerator<string>
): AsyncGenerator<string> {
  for await (const raw of lines) {
    const line = raw.trim()
    if (!line.startsWith('data:')) continue
    const payload = line.slice(5).trim()
    if (!payload || payload === '[DONE]') continue
    try {
      const json = JSON.parse(payload) as {
        choices?: Array<{
          delta?: { content?: unknown }
          message?: { content?: unknown }
        }>
      }
      const delta =
        json?.choices?.[0]?.delta?.content ??
        json?.choices?.[0]?.message?.content
      if (typeof delta === 'string' && delta) yield delta
    } catch {
      // 忽略无法解析的行（心跳/注释等）
    }
  }
}

/** 截断错误文本用于展示 */
function truncate(text: string, max = 200): string {
  const t = text.trim()
  return t.length <= max ? t : `${t.slice(0, max)}…`
}

/* ---------- 统一流式入口 ---------- */

/**
 * 统一流式对话补全：按当前默认供应商路由。
 * - zai → z-ai-web-dev-sdk
 * - 其他 → OpenAI 兼容 fetch SSE
 * 抛出的 Error 会带人类可读的中文说明（含供应商名与排查提示）。
 */
export async function* streamLlmDeltas(
  opts: StreamLlmOptions
): AsyncGenerator<string> {
  const provider = opts.providerId
    ? getProviderProfile(opts.providerId)
    : resolveActiveProvider()
  if (!provider) {
    throw new Error('未知的 LLM 供应商，请到「供应商配置」中检查设置')
  }

  /* ----- 内置 zai 供应商：SDK 直连 ----- */
  if (provider.id === 'zai') {
    const zai = await ZAI.create()
    const stream = (await zai.chat.completions.create({
      messages: opts.messages,
      stream: true,
      thinking: { type: 'disabled' },
    })) as unknown as ReadableStream<Uint8Array> | null
    if (!stream) throw new Error('LLM 未返回流，请稍后重试')
    yield* deltasFromSseLines(sseLines(stream))
    return
  }

  /* ----- OpenAI 兼容供应商：fetch SSE ----- */
  const apiKey = resolveApiKey(provider.id)
  if (!apiKey) {
    throw new Error(
      `尚未配置 ${provider.displayName} 的 API Key——请点击助手页顶部的「供应商配置」填入 Key，或切换回内置 Z.ai`
    )
  }
  const baseURL = resolveBaseURL(provider.id)
  if (!baseURL) {
    throw new Error(
      `${provider.displayName} 缺少 Base URL——请在「供应商配置」中填写服务地址`
    )
  }
  const model = resolveModel(provider.id)
  if (!model) {
    throw new Error(
      `${provider.displayName} 未设置模型 ID——请在「供应商配置」中选择或填写模型`
    )
  }

  const authHeader = provider.authHeader ?? 'Authorization'
  const authPrefix = provider.authPrefix ?? 'Bearer '
  const headers: Record<string, string> = {
    [authHeader]: `${authPrefix}${apiKey}`,
    'Content-Type': 'application/json',
    ...(provider.extraHeaders ?? {}),
  }

  const url = `${baseURL.replace(/\/+$/, '')}/chat/completions`
  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages: opts.messages,
        stream: true,
      }),
      signal: opts.signal,
    })
  } catch (e) {
    const aborted = opts.signal?.aborted
    if (aborted) return
    throw new Error(
      `连接 ${provider.displayName} 失败（${e instanceof Error ? e.message : String(e)}）——请检查 Base URL 与网络`
    )
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    let hint = ''
    if (res.status === 401 || res.status === 403) {
      hint = 'API Key 无效或无权限，请检查 Key 是否正确'
    } else if (res.status === 404) {
      hint = '接口路径不存在，请检查 Base URL（一般以 /v1 结尾）'
    } else if (res.status === 429) {
      hint = '请求过于频繁或额度不足，请稍后重试'
    }
    throw new Error(
      `${provider.displayName} 返回 HTTP ${res.status}${hint ? `——${hint}` : ''}${text ? `（${truncate(text)}）` : ''}`
    )
  }

  if (!res.body) {
    throw new Error(`${provider.displayName} 未返回数据流`)
  }
  yield* deltasFromSseLines(sseLines(res.body))
}

/* ---------- 统一视觉（看图）调用 ---------- */

/**
 * 统一看图讲解（非流式）：
 * - zai → SDK createVision（glm-5v-turbo）
 * - 其他 → OpenAI 兼容 chat/completions（多模态 content 数组）
 */
export async function completeVision(
  prompt: string,
  imageDataUrl: string
): Promise<string> {
  const provider = resolveActiveProvider()

  /* ----- 内置 zai：SDK 视觉模型 ----- */
  if (provider.id === 'zai') {
    const zai = await ZAI.create()
    const completion = await zai.chat.completions.createVision({
      model: 'glm-5v-turbo',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text' as const, text: prompt },
            { type: 'image_url' as const, image_url: { url: imageDataUrl } },
          ],
        },
      ],
      thinking: { type: 'disabled' },
    })
    return completion.choices[0]?.message?.content ?? ''
  }

  /* ----- OpenAI 兼容供应商：多模态 chat ----- */
  const apiKey = resolveApiKey(provider.id)
  if (!apiKey) {
    throw new Error(
      `尚未配置 ${provider.displayName} 的 API Key——请到 AI 助教页顶部的「供应商配置」填入，或切换回内置 Z.ai`
    )
  }
  const baseURL = resolveBaseURL(provider.id)
  if (!baseURL) {
    throw new Error(`${provider.displayName} 缺少 Base URL`)
  }
  const model = resolveModel(provider.id)
  if (!model) {
    throw new Error(`${provider.displayName} 未设置模型 ID`)
  }

  const authHeader = provider.authHeader ?? 'Authorization'
  const authPrefix = provider.authPrefix ?? 'Bearer '
  const headers: Record<string, string> = {
    [authHeader]: `${authPrefix}${apiKey}`,
    'Content-Type': 'application/json',
    ...(provider.extraHeaders ?? {}),
  }

  const res = await fetch(
    `${baseURL.replace(/\/+$/, '')}/chat/completions`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: imageDataUrl } },
            ],
          },
        ],
      }),
    }
  )

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(
      `${provider.displayName} 返回 HTTP ${res.status}${text ? `（${truncate(text)}）` : ''}——请确认所用模型支持视觉输入`
    )
  }
  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: unknown } }>
  }
  const content = data?.choices?.[0]?.message?.content
  if (typeof content === 'string' && content) return content
  throw new Error(`${provider.displayName} 未返回讲解内容`)
}
