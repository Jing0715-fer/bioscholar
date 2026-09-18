// ============================================================
// digest.ts — 输出指定小节的「科学依据」供作图使用
// 用法：bun scripts/draw/digest.ts <sectionId>
//   sectionId 支持完整 id（molecular-biology-ch7-s2）或短码（ch7-s2，默认 mb）
// 输出：章题、节题、keyPoints、术语表、正文全文（作图数字/名称以此为据）
// ============================================================
import { molecularBiology } from '../../src/data/subjects/molecular-biology'

const arg = process.argv[2]
if (!arg) {
  console.error('用法: bun scripts/draw/digest.ts <sectionId|molecular-biology-chN-sM>')
  process.exit(1)
}
const id = /^molecular-biology-/.test(arg) ? arg : `molecular-biology-${arg}`

const ch = molecularBiology.chapters.find(c => c.sections.some(s => s.id === id))
const sec = ch?.sections.find(s => s.id === id)
if (!ch || !sec) {
  console.error(`未找到小节 ${id}（可用：${molecularBiology.chapters.flatMap(c => c.sections.map(s => s.id)).join(', ')}）`)
  process.exit(1)
}

console.log('='.repeat(72))
console.log(`【${ch.number}】${ch.title}`)
console.log(`【${id}】${sec.title}`)
console.log('='.repeat(72))
console.log('\n── 要点（keyPoints）──')
for (const k of sec.keyPoints) console.log('  · ' + k)
console.log('\n── 术语 ──')
for (const t of sec.terms) console.log(`  · ${t}`)
console.log('\n── 正文全文（数字/名称以此为据，不得编造）──\n')
console.log(sec.content)
console.log('\n' + '='.repeat(72))
console.log(`（字数 ${(sec.content ?? '').length}；作图时凡数字、基因名、物种、年份均须与上文一致）`)
