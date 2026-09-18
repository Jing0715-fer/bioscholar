// 扫描 mi 场景 subtitle 长度（grep 提取 + textW 校验，画布 1400 需 ≤1340）
import { textW } from './lib'
import { readdirSync, readFileSync } from 'fs'

const dir = new URL('.', import.meta.url).pathname + 'scenes/mi'
let bad = 0
for (const f of readdirSync(dir).filter(x => x.endsWith('.ts') && x !== 'index.ts').sort()) {
  const src = readFileSync(`${dir}/${f}`, 'utf-8')
  const m = src.match(/subtitle:\s*'([^']+)'/)
  if (!m) { console.log(`${f}: NO SUBTITLE`); continue }
  const w = Math.round(textW(m[1], 19))
  const flag = w > 1340 ? ' ✗超宽' : ' ✓'
  if (w > 1340) bad++
  console.log(`${f}: ${w}px${flag}`)
}
console.log(bad === 0 ? '全部合格' : `${bad} 张超宽`)
