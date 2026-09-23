// ============================================================
// 渲染全部 SVG（自绘 + 外部）到 /tmp/vlm-sweep，建立索引清单
// 用法: bun scripts/draw/render-all-sweep.ts
// 输出: /tmp/vlm-sweep/manifest.json  { index: {file, w, h} }
// ============================================================
import { readdirSync, mkdirSync, writeFileSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import sharp from 'sharp'

const ROOT = resolve(process.cwd(), 'public/images/bio')
const OUT = '/tmp/vlm-sweep'
mkdirSync(OUT, { recursive: true })

// 目录优先级：drawn 优先（核心教材图），其后外部 SVG 组
const DIRS = ['drawn', 'terms', 'structures', 'covers', 'commons']

function listSvg(dir: string): string[] {
  const abs = join(ROOT, dir)
  return readdirSync(abs)
    .filter((f) => f.endsWith('.svg'))
    .map((f) => join(abs, f))
}

const manifest: Record<string, { file: string; w: number; h: number }> = {}
let idx = 0
let failed = 0

for (const dir of DIRS) {
  const files = listSvg(dir)
  console.log(`[${dir}] ${files.length} 张`)
  for (const f of files.sort()) {
    idx++
    const name = String(idx).padStart(4, '0') + '.png'
    try {
      const meta = await sharp(f, { density: 72 }).resize({ width: 900, withoutEnlargement: false }).png().toFile(join(OUT, name))
      manifest[String(idx)] = { file: relative(process.cwd(), f), w: meta.width, h: Math.round(meta.height) }
    } catch {
      failed++
      console.log(`  渲染失败: ${f}`)
    }
  }
}

writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1))
console.log(`\n完成：${idx} 张渲染，失败 ${failed}`)
console.log(`清单: /tmp/vlm-sweep/manifest.json`)
if (statSync(join(OUT, 'manifest.json')) && failed > 0) process.exit(1)
