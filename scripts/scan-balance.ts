// 整段级配平检查：提取所有 content/解释文本字符串，检查 （）、「」、** 的配平
import { readFileSync, readdirSync, statSync } from 'node:fs'

const files: string[] = []
function walk(d: string) {
  for (const f of readdirSync(d)) {
    const p = d + '/' + f
    const s = statSync(p)
    if (s.isDirectory()) walk(p)
    else if (f.endsWith('.ts')) files.push(p)
  }
}
walk('src/data')

let hits = 0
for (const f of files) {
  const s = readFileSync(f, 'utf8')
  // 提取模板字符串（content 与词条解释）与长单引号字符串
  const chunks: Array<{ text: string; at: number }> = []
  for (const m of s.matchAll(/`([\s\S]*?)`/g)) chunks.push({ text: m[1], at: m.index! })
  for (const m of s.matchAll(/'([^'\\]{200,})'/g)) chunks.push({ text: m[1], at: m.index! })
  // 计算行号
  const lineOf = (idx: number) => s.slice(0, idx).split('\n').length
  for (const ch of chunks) {
    const t = ch.text
    const checks: Array<[string, RegExp, RegExp]> = [
      ['（）', /（/g, /）/g],
      ['「」', /「/g, /」/g],
      ['**', /\*\*/g, /\*\*/g],
    ]
    for (const [name, re, re2] of checks) {
      const o = (t.match(re) || []).length
      const c = (t.match(re2) || []).length
      if (o !== c) {
        const lines = t.split('\n').length
        console.log(`[${name} o=${o} c=${c}] ${f}:${lineOf(ch.at)} (${lines}行片段)`)
        hits++
        break
      }
    }
  }
}
console.log('共', hits, '个片段存在配平问题')
