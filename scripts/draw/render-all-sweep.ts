// ============================================================
// 全量 SVG 视觉扫查流水线（渲染器）
// 用法: bun scripts/draw/render-all-sweep.ts
// 渲染 public/images/bio 全部 SVG 到 /tmp/vlm-sweep（900px 宽）
// 输出 manifest.json 索引 { 序号: {file,w,h} }
// ============================================================
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import sharp from 'sharp'

const ROOT = resolve(process.cwd(), 'public/images/bio')
const OUT = '/tmp/vlm-sweep'
mkdirSync(OUT, { recursive: true })

const DIRS = ['drawn', 'terms', 'structures', 'covers', 'commons']

const manifest: Record<string, { file: string; w: number; h: number }> = {}
let idx = 0
let failed = 0

for (const dir of DIRS) {
  const files = readdirSync(join(ROOT, dir)).filter((f) => f.endsWith('.svg')).map((f) => join(ROOT, dir, f))
  console.log(`[${dir}] ${files.length} 张`)
  for (const f of files.sort()) {
    idx++
    try {
      const meta = await sharp(f, { density: 72 }).resize({ width: 900 }).png().toFile(join(OUT, String(idx).padStart(4, '0') + '.png'))
      manifest[String(idx)] = { file: relative(process.cwd(), f), w: meta.width, h: Math.round(meta.height) }
    } catch {
      failed++
      console.log(`  渲染失败: ${f}`)
    }
  }
}

writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1))
console.log(`\n完成：${idx} 张渲染，失败 ${failed}`)
