// 校验器：比对 scenes 登记表输出与 public/images/bio/drawn 成品 SVG
// 用法: bun scripts/draw/sync-check.ts              全量比对（输出不一致清单）
//       bun scripts/draw/sync-check.ts --only <slug> 单图比对
// 说明: 不一致 = 成品含手工修复而绘图代码（scenes/<subj>/chN-sN.ts）未回同步。
//       gen.ts 默认跳过这些条目（--force 才覆盖），故不构成数据丢失风险，
//       但若要更新场景代码，需把手工修复的坐标移植进对应 scene 文件。
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const args = process.argv.slice(2)
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : undefined

const SUBJECTS = ['bc', 'mb', 'cb', 'bp', 'mi', 'im', 'ne', 'bi', 'vi', 'sb', 'xc', 'em']
const OUT = resolve(import.meta.dir, '../../public/images/bio/drawn')

async function load(subj: string): Promise<Record<string, string>> {
  const merged: Record<string, string> = {}
  for (const idx of ['index.ts', 'index-2.ts']) {
    try {
      const mod = await import(`./scenes/${subj}/${idx.replace('.ts', '')}.ts`)
      Object.assign(merged, (mod.default ?? mod.scenes) as Record<string, string>)
    } catch { /* skip */ }
  }
  return merged
}

let diff = 0
let same = 0
for (const subj of SUBJECTS) {
  const scenes = await load(subj)
  for (const [slug, svg] of Object.entries(scenes)) {
    if (only && slug !== only) continue
    let live: string
    try {
      live = readFileSync(resolve(OUT, `${slug}.svg`), 'utf8')
    } catch {
      console.log(`✗ ${slug}: 成品文件不存在`)
      continue
    }
    if (live !== svg) {
      diff++
      console.log(`≠ ${slug} (${svg.length} → ${live.length} 字节，成品含手工修复)`)
    } else same++
  }
}
console.log(`\n一致 ${same} · 不一致（待代码回同步） ${diff}`)
