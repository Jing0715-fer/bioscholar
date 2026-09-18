// ============================================================
// digest.ts — 输出指定小节的「科学依据」供作图使用（全学科通用）
// 用法：bun scripts/draw/digest.ts <sectionId> [<sectionId> ...]
//   支持完整 id（如 biochemistry-ch1-s3 / virology-ch12-s2）
// 输出：章题、节题、keyPoints、术语、H2 结构、表格标题、定量语句
// ============================================================
import { subjects } from '../../src/data/biology'

function extractH2(content: string): string[] {
  const out: string[] = []
  for (const m of content.matchAll(/^##[^\n]*$/gm)) {
    out.push(m[0].replace(/^#+\s*/, ''))
  }
  return out
}

function extractTables(content: string): string[] {
  const out: string[] = []
  const lines = content.split('\n')
  for (let i = 1; i < lines.length; i++) {
    if (/^\|/.test(lines[i]) && !/^\|/.test(lines[i - 1] || '')) {
      const header = lines[i]
        .split('|')
        .map((c) => c.trim())
        .filter(Boolean)
        .join(' | ')
      out.push(header)
    }
  }
  return out
}

function digest(sectionId: string): string | null {
  for (const subj of subjects) {
    for (const ch of subj.chapters) {
      const sec = ch.sections.find((s) => s.id === sectionId)
      if (sec) {
        const parts: string[] = []
        parts.push(`■ ${sectionId} —— ${ch.title} / ${sec.title}`)
        parts.push(`KEY POINTS:`)
        sec.keyPoints?.forEach((k: string) => parts.push(`  · ${k}`))
        if (sec.terms?.length) {
          parts.push(`TERMS: ${(sec.terms as string[]).join('、')}`)
        }
        if (sec.summary) parts.push(`SUMMARY: ${sec.summary}`)
        const h2 = extractH2(sec.content)
        if (h2.length) parts.push(`H2 结构: ${h2.join(' / ')}`)
        const tables = extractTables(sec.content)
        if (tables.length) parts.push(`表格(${tables.length}): ${tables.slice(0, 3).join(' ⊕ ')}`)
        const numSentences = sec.content
          .split(/[。；\n]/)
          .filter((s: string) => /\d+(\.\d+)?\s*(%|μmol|mmol|nm|μm|kDa|kcal|kJ|°C|mV|mM|×10|个|bp|kb|Mb|种|条|倍|年|s⁻¹|Da)/.test(s))
          .slice(0, 6)
        if (numSentences.length) {
          parts.push(`定量语句:`)
          numSentences.forEach((s: string) => parts.push(`  ≈ ${s.trim().slice(0, 110)}`))
        }
        return parts.join('\n')
      }
    }
  }
  return null
}

const args = process.argv.slice(2)
if (!args.length) {
  console.error('用法: bun scripts/draw/digest.ts <sectionId> [...]')
  process.exit(1)
}
for (const id of args) {
  const d = digest(id)
  console.log(d ?? `未找到小节 ${id}`)
  console.log('')
}
