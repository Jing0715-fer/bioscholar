// ============================================================
// 39 系列自绘插图生成器
// 用法：bun scripts/draw/gen.ts <subject>
//   subject ∈ bc | mb | cb | bp | mi | im | ne | bi | vi | all
// mb 特殊：index.ts（ch1–6，39-b）与 index-2.ts（ch7–12，39-c）合并读取
// 输出 SVG 到 public/images/bio/drawn/
// ============================================================
import { writeFileSync, statSync, readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const OUT = resolve(import.meta.dir, '../../public/images/bio/drawn')
const SUBJECTS = ['bc', 'mb', 'cb', 'bp', 'mi', 'im', 'ne', 'bi', 'vi', 'sb', 'xc', 'em'] as const

async function load(subj: string): Promise<Record<string, string>> {
  const merged: Record<string, string> = {}
  for (const idx of ['index.ts', 'index-2.ts']) {
    try {
      const mod = await import(`./scenes/${subj}/${idx.replace('.ts', '')}.ts`)
      Object.assign(merged, (mod.default ?? mod.scenes) as Record<string, string>)
    } catch { /* 该登记表不存在则跳过 */ }
  }
  return merged
}

const args = process.argv.slice(2)
const targets = args[0] === 'all' || !args[0] ? [...SUBJECTS] : [args[0]]
// --only <slug>：只重生成指定场景
// --force：覆盖与登记表不一致的成品（默认跳过，防回滚手工修复）
const onlyIdx = args.indexOf('--only')
const onlySlug = onlyIdx >= 0 ? args[onlyIdx + 1] : undefined
const force = args.includes('--force')
if (onlySlug) { targets.length = 0; targets.push(...SUBJECTS) } // --only 时扫全部登记表找该 slug

let ok = 0
let fail = 0
let skip = 0
for (const subj of targets) {
  const scenes = await load(subj)
  const entries = Object.entries(scenes)
  if (!entries.length) { console.log(`[${subj}] 0 个场景，跳过`); continue }
  for (const [slug, svg] of entries) {
    if (onlySlug && slug !== onlySlug) continue
    try {
      if (typeof svg !== 'string' || !svg.startsWith('<?xml') || svg.length < 500) {
        throw new Error(`SVG 内容异常（${typeof svg}，${String(svg).length} 字节）`)
      }
      const outPath = resolve(OUT, `${slug}.svg`)
      if (!force && existsSync(outPath)) {
        const live = readFileSync(outPath, 'utf8')
        if (live !== svg) {
          console.log(`  ⚠ ${slug}.svg 与登记表不一致（含手工修复），跳过——如确要覆盖请加 --force`)
          skip++
          continue
        }
      }
      writeFileSync(outPath, svg, 'utf-8')
      console.log(`  ✓ ${slug}.svg (${(statSync(resolve(OUT, slug + '.svg')).size / 1024).toFixed(1)} KB)`)
      ok++
    } catch (e) {
      console.log(`  ✗ ${slug}.svg → ${(e as Error).message}`)
      fail++
    }
  }
  console.log(`[${subj}] 完成`)
}
console.log(`\n生成 ${ok} 张，失败 ${fail} 张，跳过（防回滚） ${skip} 张`)
if (fail) process.exit(1)
