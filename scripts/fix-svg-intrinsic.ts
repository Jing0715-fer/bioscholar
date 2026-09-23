// 修复：给缺固有尺寸的 SVG 根标签补写 width/height（与 viewBox 等比）
// 用法：bun run scripts/fix-svg-intrinsic.ts
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join } from 'path'

function walk(dir: string): string[] {
  const out: string[] = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...walk(p))
    else if (name.endsWith('.svg')) out.push(p)
  }
  return out
}

let fixed = 0
for (const path of walk('public/images')) {
  let c = readFileSync(path, 'utf8')
  const tagMatch = /<svg[^>]*>/s.exec(c)
  if (!tagMatch) continue
  const tag = tagMatch[0]
  if (/\swidth="/.test(tag) && /\sheight="/.test(tag)) continue
  const vb = /viewBox="([^"]+)"/.exec(tag)?.[1]?.trim().split(/[\s,]+/).map(Number)
  if (!vb || vb.length !== 4) { console.log(`SKIP (no viewBox): ${path}`); continue }
  const [, , vw, vh] = vb
  let newTag = tag
  if (!/\swidth="/.test(newTag)) newTag = newTag.replace(/viewBox="[^"]+"/, `$& width="${vw}"`)
  if (!/\sheight="/.test(newTag)) newTag = newTag.replace(/viewBox="[^"]+"/, `$& height="${vh}"`)
  if (newTag === tag) continue
  c = c.replace(tag, newTag)
  writeFileSync(path, c)
  fixed++
  console.log(`FIXED: ${path} (+width=${vw} height=${vh})`)
}
console.log(`\ntotal fixed: ${fixed}`)
