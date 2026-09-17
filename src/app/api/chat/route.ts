import { NextRequest } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export const maxDuration = 60

export async function POST(req: NextRequest) {
  try {
    const { messages, context } = await req.json()

    let prompt = `你是"BioScholar 智能生物助教"，一位精通生物化学、分子生物学、细胞生物学、生物物理学、微生物学、免疫学、神经生物学与生物信息学的资深教授。
你的知识体系基于中国教育部"101计划"生物学核心课程及经典教材（王镜岩《生物化学》、朱玉贤《现代分子生物学》、翟中和/丁明孝《细胞生物学》、周德庆《微生物学教程》、曹雪涛《医学免疫学》、寿天德《神经生物学》、Kandel《Principles of Neural Science》、Pevzner《Bioinformatics Algorithms》、Lehninger《Principles of Biochemistry》、Alberts《Molecular Biology of the Cell》等）。
回答要求：
1. 用中文回答，学术严谨、条理清晰；术语首现标注英文，必要时给出数值与教材口径。
2. 概念辨析优先用对照方式说明；机制类问题分步骤讲清因果链。
3. 适当联系学科交叉与前沿进展；不确定的内容明确说明，不编造数据。
4. 回答保持精炼，避免冗长铺陈；可用序号与短段落组织。`

    if (context?.subjectId) {
      const names: Record<string, string> = {
        biochemistry: '生物化学',
        'molecular-biology': '分子生物学',
        'cell-biology': '细胞生物学',
        biophysics: '生物物理学',
        microbiology: '微生物学',
        immunology: '免疫学',
        neurobiology: '神经生物学',
        bioinformatics: '生物信息学',
      }
      const subjectName = names[context.subjectId] ?? context.subjectId
      prompt += `\n当前学习者正在研读${subjectName}教材${context.chapterId ? '（章节：' + context.chapterId + '）' : ''}，请优先结合该学科的知识体系作答。`
    }

    const formatted = (messages ?? []).map(
      (m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content,
      })
    )

    const zai = await ZAI.create()
    const stream = await zai.chat.completions.create({
      model: 'glm-4.5',
      messages: [{ role: 'system', content: prompt }, ...formatted],
      stream: true,
      temperature: 0.6,
      max_tokens: 2048,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices?.[0]?.delta?.content ?? ''
            if (delta) controller.enqueue(encoder.encode(delta))
          }
        } catch {
          controller.enqueue(encoder.encode('（回复中断，请重试）'))
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (e) {
    return new Response('AI 助教暂时不可用，请稍后重试。', { status: 500 })
  }
}
