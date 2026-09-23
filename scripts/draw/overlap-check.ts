// ============================================================
// 矢量图文字重叠检测器（解析式）
// 用法：bun scripts/draw/overlap-check.ts [目录]
// 检测两类缺陷：
//   1. text-vs-text：两个 <text> 的估算包围盒显著相交（重叠面积占小者 > 25%）
//   2. 画布溢出：文字超出 viewBox 边界（右/下溢出 > 4px，左/上溢出 > 2px）
// 宽度估算与 scripts/draw/lib.ts rawW 同源，保证口径一致
// ============================================================
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const CJK = /[\u2E80-\u9FFF\uF900-\uFAFF\u3000-\u303F\uFF00-\uFFEF]/
const WIDE = /[A-Z0-9Ａ-Ｚ０-９]/
const THIN = /[·,.:;'"()\[\]{}?!\/|ilj I1]/
const SUBSUP = /[\u2070-\u209F\u00B2\u00B3\u00B9]/

function rawW(s: string, size: number): number {
  let w = 0
  for (const ch of s) {
    if (CJK.test(ch)) w += size
    else if (SUBSUP.test(ch)) w += size * 0.55
    else if (WIDE.test(ch)) w += size * 0.62
    else if (THIN.test(ch)) w += size * 0.32
    else if ('→←↔↑↓⇌≥≤≈×±'.includes(ch)) w += size * 0.85
    else w += size * 0.52
  }
  return w
}

interface TextBox {
  x0: number; y0: number; x1: number; y1: number
  content: string
}

/** 从 SVG 中提取全部 <text> 的估算包围盒 */
function extractTexts(svg: string): { texts: TextBox[]; vw: number; vh: number; vx: number; vy: number } {
  const vb = /viewBox="([^"]+)"/.exec(svg)?.[1]?.trim().split(/[\s,]+/).map(Number) ?? [0, 0, 1400, 1000]
  const [vx, vy, vw, vh] = vb
  const texts: TextBox[] = []
  // 逐个 <text> 标签解析（机器生成格式规整）
  const re = /<text\s([^>]*)>([\s\S]*?)<\/text>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg))) {
    const attrs = m[1]
    const body = m[2]
    const x = Number(/(?:^|\s)x="([^"]+)"/.exec(attrs)?.[1] ?? NaN)
    const y = Number(/(?:^|\s)y="([^"]+)"/.exec(attrs)?.[1] ?? NaN)
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue
    const size = Number(/font-size="([^"]+)"/.exec(attrs)?.[1] ?? 18)
    const anchor = /text-anchor="([^"]+)"/.exec(attrs)?.[1] ?? 'start'
    const weight = Number(/font-weight="([^"]+)"/.exec(attrs)?.[1] ?? 400)
    // 拼接文本内容（忽略 tspan 标记本身）；tspan dy 偏移量记录用于纵向扩展
    let content = ''
    let minDy = 0, maxDy = 0
    const ts = /<tspan([^>]*)>([^<]*)<\/tspan>/g
    let t: RegExpExecArray | null
    const plain = body.replace(/<tspan[^>]*>|<\/tspan>/g, '')
    content = plain.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim()
    while ((t = ts.exec(body))) {
      const dy = Number(/dy="([^"]+)"/.exec(t[1])?.[1] ?? 0)
      if (dy < minDy) minDy = dy
      if (dy > maxDy) maxDy = dy
    }
    if (!content) continue
    const w = rawW(content, size) * (weight >= 600 ? 1.03 : 1)
    // 锚点 → 左边缘
    const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x
    const x1 = x0 + w
    // 基线 → 包围盒（CJK 上升 ~0.86、下降 ~0.14；tspan 上下标扩展）
    const yTop = y - 0.86 * size + Math.min(0, minDy)
    const yBot = y + 0.16 * size + Math.max(0, maxDy)
    texts.push({ x0, y0: yTop, x1, y1: yBot, content })
  }
  return { texts, vw, vh, vx, vy }
}

/** 两盒相交面积占小者比例 */
function overlapRatio(a: TextBox, b: TextBox): number {
  const ix = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)
  const iy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0)
  if (ix <= 0 || iy <= 0) return 0
  const inter = ix * iy
  const aA = (a.x1 - a.x0) * (a.y1 - a.y0)
  const bA = (b.x1 - b.x0) * (b.y1 - b.y0)
  return inter / Math.min(aA, bA)
}

function walk(dir: string): string[] {
  const out: string[] = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...walk(p))
    else if (name.endsWith('.svg')) out.push(p)
  }
  return out
}

// ---------------- 主流程 ----------------
const root = resolve(import.meta.dir, '../../public/images')
const arg = process.argv[2]
const target = arg
  ? arg.startsWith('/') ? arg : resolve(arg)
  : join(root, 'bio/drawn')
const files = statSync(target).isDirectory() ? walk(target) : [target]
console.log(`扫描 ${files.length} 个 SVG（${target}）\n`)

const TEXT_TEXT_THRESHOLD = 0.22 // 重叠占小文本盒 22% 以上才报告（过滤紧邻标签的假阳性）
let flagged = 0
for (const f of files) {
  const svg = readFileSync(f, 'utf-8')
  const { texts, vw, vh, vx, vy } = extractTexts(svg)
  const issues: string[] = []

  // 1) text-vs-text
  for (let i = 0; i < texts.length; i++) {
    for (let j = i + 1; j < texts.length; j++) {
      const r = overlapRatio(texts[i], texts[j])
      if (r > TEXT_TEXT_THRESHOLD) {
        issues.push(
          `TEXT×TEXT ${(r * 100).toFixed(0)}%：「${texts[i].content.slice(0, 18)}」(${texts[i].x0.toFixed(0)},${texts[i].y0.toFixed(0)}) × 「${texts[j].content.slice(0, 18)}」(${texts[j].x0.toFixed(0)},${texts[j].y0.toFixed(0)})`
        )
      }
    }
  }
  // 2) 画布溢出
  for (const t of texts) {
    if (t.x1 > vx + vw + 4) issues.push(`溢出右缘 ${Math.round(t.x1 - (vx + vw))}px：「${t.content.slice(0, 22)}」`)
    if (t.y1 > vy + vh + 2) issues.push(`溢出下缘 ${Math.round(t.y1 - (vy + vh))}px：「${t.content.slice(0, 22)}」`)
    if (t.x0 < vx - 3) issues.push(`溢出左缘 ${Math.round(vx - t.x0)}px：「${t.content.slice(0, 22)}」`)
    if (t.y0 < vy - 3) issues.push(`溢出上缘 ${Math.round(vy - t.y0)}px：「${t.content.slice(0, 22)}」`)
  }

  if (issues.length) {
    flagged++
    console.log(`✗ ${f.replace(root + '/', '')}`)
    issues.slice(0, 6).forEach(s => console.log(`    ${s}`))
    if (issues.length > 6) console.log(`    …另有 ${issues.length - 6} 项`)
  }
}
console.log(`\n共 ${flagged}/${files.length} 个文件被标记`)
