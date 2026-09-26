// 确定性文案缺陷扫描：异常空格 / 引号括号不配平
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
  const lines = readFileSync(f, 'utf8').split('\n')
  lines.forEach((L, i) => {
    const ln = i + 1
    // 1. 中文夹多个空格（非表格行）
    if (/[\u4e00-\u9fff] {2,}[\u4e00-\u9fff]/.test(L) && !/^\s*\|/.test(L.trimStart() === L ? L : L.trimStart())) {
      console.log(`[空格] ${f}:${ln} ${L.slice(0, 60)}`)
      hits++
    }
    // 2. 「」不配平（跳过表格行、字符串属性行首）
    if (/^\s*(\||')/.test(L)) return
    const o = (L.match(/「/g) || []).length
    const c = (L.match(/」/g) || []).length
    if (o !== c && o + c > 0) {
      console.log(`[「」] ${f}:${ln} o=${o} c=${c} ${L.slice(0, 50)}`)
      hits++
    }
    const po = (L.match(/（/g) || []).length
    const pc = (L.match(/）/g) || []).length
    if (po !== pc && po + pc > 0 && Math.abs(po - pc) <= 2) {
      console.log(`[（）] ${f}:${ln} o=${po} c=${pc} ${L.slice(0, 50)}`)
      hits++
    }
  })
}
console.log('共', hits, '处')
