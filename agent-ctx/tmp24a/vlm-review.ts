/**
 * VLM 科学审校脚本（Task 24-a）
 * 用 z-ai-web-dev-sdk（glm-5v-turbo）对每张 Commons 配图做中文定制审校。
 * 用法: bun /home/z/my-project/agent-ctx/tmp24a/vlm-review.ts <plan.json>
 * plan 条目: { file, label, checklist }
 */
import ZAI from 'z-ai-web-dev-sdk'
import { readFile } from 'node:fs/promises'

interface Item {
  file: string
  label: string
  checklist: string
}

const MIME: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
}

async function review(item: Item): Promise<{ verdict: string; comment: string }> {
  const buf = await readFile(item.file)
  const ext = item.file.slice(item.file.lastIndexOf('.')).toLowerCase()
  const dataUrl = `data:${MIME[ext] ?? 'image/png'};base64,${buf.toString('base64')}`
  const zai = await ZAI.create()
  const text = [
    '你是一位严谨的微生物学教材插图审校专家。请对下图执行逐项审校：',
    item.checklist,
    '同时检查：图内文字标注有无乱码或错别字、整体结构是否完整、作为中文微生物学教材配图是否合适。',
    '请先给出一段简短客观描述（不超过 120 字），再给出最终结论行，格式严格为：',
    '结论：通过 或 结论：不通过（附一句理由）。',
  ].join('\n')
  const completion = await zai.chat.completions.createVision({
    model: 'glm-5v-turbo',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text' as const, text },
          { type: 'image_url' as const, image_url: { url: dataUrl } },
        ],
      },
    ],
    thinking: { type: 'disabled' },
  })
  const content = completion.choices[0]?.message?.content ?? ''
  const pass = /结论[:：]\s*通过/.test(content) && !/结论[:：]\s*不通过/.test(content)
  return {
    verdict: pass ? '通过' : '不通过',
    comment: content.replace(/\s+/g, ' ').trim().slice(0, 1200),
  }
}

async function main() {
  const plan: Item[] = JSON.parse(await readFile(process.argv[2], 'utf-8'))
  const results: Record<string, { verdict: string; comment: string }> = {}
  for (const item of plan) {
    try {
      const r = await review(item)
      results[item.label] = r
      console.log(`[${r.verdict}] ${item.label}`)
      console.log(`  ${r.comment.slice(0, 300)}`)
    } catch (e) {
      results[item.label] = { verdict: 'ERROR', comment: String(e).slice(0, 300) }
      console.log(`[ERROR] ${item.label}: ${e}`)
    }
    await new Promise((r) => setTimeout(r, 2000))
  }
  const out = process.argv[2].replace('.json', '-result.json')
  await Bun.write(out, JSON.stringify(results, null, 1))
  console.log(`saved -> ${out}`)
}

main()
