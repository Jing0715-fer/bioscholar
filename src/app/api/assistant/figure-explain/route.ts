import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const maxDuration = 60

export async function POST(req: NextRequest) {
  try {
    const { src, caption, question } = await req.json()
    if (typeof src !== 'string' || !src.startsWith('/images/bio/')) {
      return NextResponse.json({ error: 'invalid src' }, { status: 400 })
    }
    const filePath = path.join(process.cwd(), 'public', src)
    const buf = await readFile(filePath)
    const mime = src.endsWith('.svg')
      ? 'image/svg+xml'
      : src.endsWith('.jpg') || src.endsWith('.jpeg')
        ? 'image/jpeg'
        : 'image/png'
    const dataUrl = `data:${mime};base64,${buf.toString('base64')}`

    const zai = await ZAI.create()
    const completion = await zai.chat.completions.createVision({
      model: 'glm-4.5v',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `你是教材插图讲解助教。下面是本平台教材的一张配图，图注为：「${caption ?? ''}」。学习者提问：「${question ?? '请讲解这张图。'}」请用中文详细讲解图中的结构与过程要点，指出与教材知识点的联系，300 字以内。`,
            },
            { type: 'image_url', image_url: { url: dataUrl } },
          ],
        },
      ],
      thinking: { type: 'disabled' },
    })

    const answer =
      completion.choices?.[0]?.message?.content ??
      '（视觉模型暂未返回内容，请稍后重试。）'
    return NextResponse.json({ answer })
  } catch {
    return NextResponse.json({ error: 'figure explain failed' }, { status: 500 })
  }
}
