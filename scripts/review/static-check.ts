// ============================================================
// 41 系列：SVG 静态几何检查
//   1) 文字越界（超出 1400×1000 画布 → 截断）
//   2) 文字-文字包围盒重叠（估算宽度，容差 4px）
//   3) 特殊字符检测（字体覆盖存疑的码点）
// 用法：bun scripts/review/static-check.ts
// 输出：/tmp/drawn-audit/static.json + 控制台摘要
// ============================================================
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { textW } from '../draw/lib'

const SRC = resolve(import.meta.dir, '../../public/images/bio/drawn')
const W = 1400, H = 1000, TOL = 4

interface TextEl { x: number; y: number; size: number; anchor: string; s: string; x0: number; x1: number; y0: number; y1: number }

function parseTexts(svg: string): TextEl[] {
  const out: TextEl[] = []
  const re = /<text x="([\d.-]+)" y="([\d.-]+)"([^>]*)>([^<]*)<\/text>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg))) {
    const x = Number(m[1]), y = Number(m[2])
    const attrs = m[3]
    const content = m[4]
    const sizeM = /font-size="([\d.]+)"/.exec(attrs)
    const anchorM = /text-anchor="(start|middle|end)"/.exec(attrs)
    const size = sizeM ? Number(sizeM[1]) : 18
    const anchor = anchorM ? anchorM[1] : 'start'
    const s = content.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    const w = textW(s, size)
    let x0 = x, x1 = x + w
    if (anchor === 'middle') { x0 = x - w / 2; x1 = x + w / 2 }
    else if (anchor === 'end') { x0 = x - w; x1 = x }
    out.push({ x, y, size, anchor, s, x0, x1, y0: y - size * 0.82, y1: y + size * 0.22 })
  }
  return out
}

// 字体覆盖存疑码点（sharp/librsvg 环境与浏览器渲染差异 + 常见缺字形）
const SUSPECT_CHARS = new Set('⚖⚙⌀⟩⟨⟩⇒⇔∂∇∮≈‰※†‡§¶⊕⊗⊖⊙∅∈∉∝∴∵'.split(''))

interface Issue { file: string; type: string; detail: string }
const issues: Issue[] = []

const files = readdirSync(SRC).filter(f => f.endsWith('.svg')).sort()
for (const f of files) {
  const svg = readFileSync(resolve(SRC, f), 'utf-8')
  const texts = parseTexts(svg)

  // 1) 越界截断
  for (const t of texts) {
    if (t.x0 < -TOL) issues.push({ file: f, type: 'TRUNC-LEFT', detail: `"${t.s.slice(0, 24)}" 左缘 ${t.x0.toFixed(0)} 越界` })
    if (t.x1 > W + TOL) issues.push({ file: f, type: 'TRUNC-RIGHT', detail: `"${t.s.slice(0, 24)}" 右缘 ${t.x1.toFixed(0)} 越界（宽 ${W}）` })
    if (t.y0 < -TOL) issues.push({ file: f, type: 'TRUNC-TOP', detail: `"${t.s.slice(0, 24)}" 上缘 ${t.y0.toFixed(0)} 越界` })
    if (t.y1 > H + TOL) issues.push({ file: f, type: 'TRUNC-BOTTOM', detail: `"${t.s.slice(0, 24)}" 下缘 ${t.y1.toFixed(0)} 越界（高 ${H}）` })
  }

  // 2) 文字-文字重叠（同一文件内包围盒显著相交）
  for (let i = 0; i < texts.length; i++) {
    for (let j = i + 1; j < texts.length; j++) {
      const a = texts[i], b = texts[j]
      const ox = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)
      const oy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0)
      if (ox > TOL && oy > 2) {
        // 忽略：内容完全相同（叠写强调）或一方为另一方前缀且 y 差 < 1（罕见）
        if (a.s === b.s && Math.abs(a.y - b.y) < 1 && Math.abs(a.x - b.x) < 1) continue
        issues.push({
          file: f, type: 'TEXT-OVERLAP',
          detail: `"${a.s.slice(0, 18)}"(${a.x0.toFixed(0)},${a.y.toFixed(0)}) × "${b.s.slice(0, 18)}"(${b.x0.toFixed(0)},${b.y.toFixed(0)}) 交叠 ${ox.toFixed(0)}×${oy.toFixed(0)}px`,
        })
      }
    }
  }

  // 3) 特殊字符
  for (const t of texts) {
    for (const ch of t.s) {
      if (SUSPECT_CHARS.has(ch)) issues.push({ file: f, type: 'SUSPECT-CHAR', detail: `"${t.s.slice(0, 20)}" 含存疑字符 ${ch}` })
    }
  }
}

writeFileSync('/tmp/drawn-audit/static.json', JSON.stringify(issues, null, 2))

// 汇总
const byFile = new Map<string, Issue[]>()
for (const i of issues) { const arr = byFile.get(i.file) ?? []; arr.push(i); byFile.set(i.file, arr) }
const byType: Record<string, number> = {}
for (const i of issues) byType[i.type] = (byType[i.type] ?? 0) + 1
console.log(`静态检查完成：${files.length} 张，问题 ${issues.length} 处，涉及 ${byFile.size} 张图`)
console.log('按类型：', JSON.stringify(byType))
for (const [f, arr] of [...byFile.entries()].sort((a, b) => b[1].length - a[1].length).slice(0, 40)) {
  console.log(`  ${f}: ${arr.length} 处 [${arr.map(a => a.type).join(',')}]`)
}
