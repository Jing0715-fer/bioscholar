// ============================================================
// 插图挂载全量校验（39 系列）
// 用法：bun scripts/check-ill.ts
// ============================================================
import { existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { getIllustrations, illustrations } from '../src/data/illustrations'
import { microIllustrations } from '../src/data/micro-illustrations'
import { immunoIllustrations } from '../src/data/immuno-illustrations'
import { neuroIllustrations } from '../src/data/neuro-illustrations'
import { bioinfoIllustrations } from '../src/data/bioinfo-illustrations'
import { viroIllustrations } from '../src/data/viro-illustrations'
import { subjects } from '../src/data/biology'

// Round 4 挂载（存在才导入）
type Rec = Record<string, { src: string; caption: string; credit?: string }[]>
const files: Rec[] = [illustrations, microIllustrations, immunoIllustrations, neuroIllustrations, bioinfoIllustrations, viroIllustrations]
for (const ab of ['bc', 'mb', 'cb', 'bp', 'mi', 'im', 'ne', 'bi', 'vi']) {
  try {
    const m: any = await import(`../src/data/draw-${ab}-r4.ts`)
    const rec: Rec = Object.values(m)[0]
    if (rec && Object.keys(rec).length) files.push(rec)
  } catch { /* 尚未创建 */ }
}

const ROOT = resolve(import.meta.dir, '..')
const allIds = new Set<string>()
for (const subj of subjects) for (const ch of subj.chapters) for (const sec of ch.sections) allIds.add(sec.id)

let total = 0
const missing: string[] = []
const badSec: string[] = []
const badLen: string[] = []

for (const rec of files) {
  for (const [secId, items] of Object.entries(rec)) {
    if (!allIds.has(secId)) badSec.push(secId)
    for (const it of items) {
      total++
      const p = resolve(ROOT, 'public', it.src.replace(/^\//, ''))
      if (!existsSync(p)) missing.push(`${secId} → ${it.src}`)
      else if (statSync(p).size < 300) missing.push(`${secId} → ${it.src}（${statSync(p).size}B 过小）`)
      const len = [...it.caption].length
      if (len < 100 || len > 330) badLen.push(`${secId}（${len} 字）`)
    }
  }
}

const covered = [...allIds].filter((id) => getIllustrations(id).length > 0)
console.log(`总挂载插图：${total} 张`)
console.log(`小节覆盖：${covered.length}/${allIds.size}（${((100 * covered.length) / allIds.size).toFixed(1)}%）`)
console.log(`文件缺失：${missing.length}`)
missing.forEach((m) => console.log('  ✗ ' + m))
console.log(`无效 sectionId：${badSec.length}`)
badSec.forEach((m) => console.log('  ✗ ' + m))
console.log(`图注长度异常（<100 或 >330 字）：${badLen.length}`)
badLen.slice(0, 8).forEach((m) => console.log('  ⚠ ' + m))
if (badLen.length > 8) console.log(`  … 共 ${badLen.length} 条`)
for (const subj of subjects) {
  const ids: string[] = []
  for (const ch of subj.chapters) for (const sec of ch.sections) ids.push(sec.id)
  const cov = ids.filter((id) => getIllustrations(id).length > 0)
  console.log(`  ${subj.id}: ${cov.length}/${ids.length}`)
}
if (missing.length || badSec.length) process.exit(1)
console.log('\n✓ 校验完成（缺失与无效为 0）')
