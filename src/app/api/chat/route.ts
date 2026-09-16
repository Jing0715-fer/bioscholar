import { NextRequest } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'
import { getSection, getSubject, getChapter } from '@/data/biology'
import { glossary } from '@/data/glossary'
import type { SubjectId } from '@/lib/types'

export const runtime = 'nodejs'
export const maxDuration = 120

/** 生物学家教人设 */
function buildSystemPrompt(ctx?: {
  subjectId?: string
  chapterId?: string
  sectionId?: string
  sectionTitle?: string
}): string {
  let prompt = `你是"BioScholar 智能生物助教"，一位精通生物化学、分子生物学、细胞生物学、生物物理学与微生物学的资深教授。

你的知识体系基于中国教育部"101计划"生物学核心课程及经典教材（王镜岩《生物化学》、朱玉贤《现代分子生物学》、翟中和/丁明孝《细胞生物学》、周德庆《微生物学教程》、沈萍《微生物学》、Lehninger《Principles of Biochemistry》、Alberts《Molecular Biology of the Cell》等）。

回答要求：
1. **专业准确**：使用规范的中文生物学术语，首次出现时标注英文；化学式用规范写法（如 NAD⁺、H₂O、CO₂）。
2. **结构清晰**：适当使用 Markdown 标题、要点列表与表格组织答案；推理过程分步骤呈现。
3. **教学导向**：优先给出概念的本质理解而非死记硬背；适时联系经典实验、科学家与诺贝尔奖工作；主动指出常见易混淆点。
4. **实事求是**：不确定的内容要明确说明；区分"教材主流观点"与"前沿争议"。
5. 回答末尾如合适，可用一句话总结核心要点。`

  // 注入阅读上下文
  if (ctx?.subjectId && ctx?.chapterId && ctx?.sectionId) {
    const subject = getSubject(ctx.subjectId as SubjectId)
    const chapter = getChapter(ctx.subjectId as SubjectId, ctx.chapterId)
    const section = getSection(
      ctx.subjectId as SubjectId,
      ctx.chapterId,
      ctx.sectionId
    )
    if (subject && chapter && section) {
      const excerpt = section.content.slice(0, 2400)
      prompt += `

## 当前学习上下文
学生正在学习【${subject.name}】第 ${chapter.number} 章「${chapter.title}」的「${section.title}」小节。以下是该小节的教材内容摘要，回答时应优先与此教材体系保持一致：

<教材内容>
${excerpt}
</教材内容>

回答时可以自然地结合该上下文，例如承接学生正在阅读的内容进行讲解或拓展。`
    }
  }
  return prompt
}

/** 从用户消息中匹配术语词典，增强回答准确性 */
function findRelevantTerms(userMessage: string): string {
  const hits = glossary.filter(
    (g) =>
      userMessage.includes(g.term) ||
      (g.abbreviation && userMessage.includes(g.abbreviation)) ||
      (g.english && userMessage.toLowerCase().includes(g.english.toLowerCase()))
  )
  if (hits.length === 0) return ''
  return (
    '\n\n## 相关术语（平台词典）\n' +
    hits
      .slice(0, 8)
      .map((g) => `- ${g.term}（${g.english}${g.abbreviation ? '，' + g.abbreviation : ''}）：${g.definition}`)
      .join('\n')
  )
}

/** SSE 编码辅助 */
function sseEncode(data: unknown): string {
  return `data: ${JSON.stringify(data)}\n\n`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      sessionId,
      message,
      context,
    }: {
      sessionId: string
      message: string
      context?: {
        subjectId?: string
        chapterId?: string
        sectionId?: string
        sectionTitle?: string
      }
    } = body

    if (!sessionId || typeof message !== 'string' || !message.trim()) {
      return new Response(JSON.stringify({ error: '参数不完整' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // 保存用户消息
    await db.chatMessage.create({
      data: {
        sessionId,
        role: 'user',
        content: message.trim(),
        context: context ? JSON.stringify(context) : null,
      },
    })

    // 取最近历史（最多 20 条）构建对话
    const history = await db.chatMessage.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'asc' },
      take: 24,
    })
    // 若刚好取满 24 条，去掉最早的几条避免截断感
    const trimmed = history.length >= 24 ? history.slice(-20) : history

    const systemPrompt =
      buildSystemPrompt(context) + findRelevantTerms(message)

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...trimmed.map((m) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    ]

    // 调用 LLM（流式）
    const zai = await ZAI.create()
    const stream = (await zai.chat.completions.create({
      messages,
      stream: true,
      thinking: { type: 'disabled' },
    })) as unknown as ReadableStream<Uint8Array> | null

    if (!stream) {
      throw new Error('LLM 未返回流')
    }

    // 转发 SSE，同时累计完整回复
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
    let fullReply = ''

    const transformed = new ReadableStream({
      async start(controller) {
        const reader = stream.getReader()
        let buffer = ''
        try {
          for (;;) {
            const { done, value } = await reader.read()
            if (done) break
            buffer += decoder.decode(value, { stream: true })
            // 解析 SSE 行
            const lines = buffer.split('\n')
            buffer = lines.pop() ?? ''
            for (const line of lines) {
              const trimmedLine = line.trim()
              if (!trimmedLine.startsWith('data:')) continue
              const payload = trimmedLine.slice(5).trim()
              if (payload === '[DONE]') continue
              try {
                const json = JSON.parse(payload)
                const delta: string | undefined =
                  json?.choices?.[0]?.delta?.content ??
                  json?.choices?.[0]?.message?.content
                if (delta) {
                  fullReply += delta
                  controller.enqueue(encoder.encode(sseEncode({ delta })))
                }
              } catch {
                // 忽略无法解析的行
              }
            }
          }
          // 完成：保存助手消息
          if (fullReply.trim()) {
            await db.chatMessage.create({
              data: {
                sessionId,
                role: 'assistant',
                content: fullReply,
                context: context ? JSON.stringify(context) : null,
              },
            })
          }
          controller.enqueue(encoder.encode(sseEncode({ done: true })))
        } catch (e) {
          console.error('chat stream error:', e)
          controller.enqueue(
            encoder.encode(sseEncode({ error: '生成回复时出错，请重试' }))
          )
        } finally {
          controller.close()
        }
      },
    })

    return new Response(transformed, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'X-Accel-Buffering': 'no',
      },
    })
  } catch (e) {
    console.error('POST /api/chat error:', e)
    return new Response(JSON.stringify({ error: '服务内部错误' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

/** 获取会话历史 */
export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get('sessionId')
    if (!sessionId) {
      return Response.json({ messages: [] })
    }
    const messages = await db.chatMessage.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'asc' },
      take: 100,
    })
    return Response.json({
      messages: messages.map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
        createdAt: m.createdAt.toISOString(),
        context: m.context ? JSON.parse(m.context) : null,
      })),
    })
  } catch (e) {
    console.error('GET /api/chat error:', e)
    return Response.json({ messages: [] })
  }
}

/** 清空会话 */
export async function DELETE(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get('sessionId')
    if (!sessionId) {
      return Response.json({ error: 'sessionId required' }, { status: 400 })
    }
    await db.chatMessage.deleteMany({ where: { sessionId } })
    return Response.json({ ok: true })
  } catch (e) {
    console.error('DELETE /api/chat error:', e)
    return Response.json({ error: 'internal error' }, { status: 500 })
  }
}
