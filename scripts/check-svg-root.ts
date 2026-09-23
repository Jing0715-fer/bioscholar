// 诊断：检查 public/images 下所有 SVG 根标签是否带固有 width/height
// 用法：bun run scripts/check-svg-root.ts
import { readdirSync, readFileSync, statSync } from 'fs'
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

const files = walk('public/images')
const noSize: string[] = []
for (const p of files) {
  const c = readFileSync(p, 'utf8')
  const m = /<svg[^>]*>/s.exec(c)
  if (!m) { noSize.push(`${p} [NO ROOT TAG]`); continue }
  if (!/\swidth="/.test(m[0]) || !/\sheight="/.test(m[0])) noSize.push(p)
}
console.log(`svg total: ${files.length}, root missing width/height: ${noSize.length}`)
noSize.forEach(p => console.log(p))
process.exit(noSize.length ? 1 : 0)
