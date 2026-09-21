// ============================================================
// 41 系列：SVG → PNG 批量栅格化（供 VLM 审校）
// 用法：bun scripts/review/rasterize.ts [宽像素，默认1200]
// 输出：/tmp/drawn-png/<slug>.png
// ============================================================
import sharp from 'sharp'
import { readdirSync, mkdirSync, statSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const SRC = resolve(import.meta.dir, '../../public/images/bio/drawn')
const OUT = '/tmp/drawn-png'
mkdirSync(OUT, { recursive: true })
const WIDTH = Number(process.argv[2] ?? 1200)

const files = readdirSync(SRC).filter(f => f.endsWith('.svg')).sort()
let ok = 0, skip = 0, fail = 0
for (const f of files) {
  const outPath = resolve(OUT, f.replace('.svg', '.png'))
  const srcMtime = statSync(resolve(SRC, f)).mtimeMs
  if (existsSync(outPath) && statSync(outPath).mtimeMs > srcMtime) { skip++; continue }
  try {
    await sharp(resolve(SRC, f), { density: 96 }).resize({ width: WIDTH }).png({ compressionLevel: 9 }).toFile(outPath)
    ok++
  } catch (e) {
    console.log(`  ✗ ${f}: ${(e as Error).message}`)
    fail++
  }
}
console.log(`栅格化完成：${ok} 新建 / ${skip} 跳过 / ${fail} 失败（共 ${files.length} 张，宽 ${WIDTH}px）`)
if (fail) process.exit(1)
