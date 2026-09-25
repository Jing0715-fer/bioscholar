// 45-c 补充：曲线穿出面板（panel）检测——宽松版
// 面板特征：fill #f8fafc + stroke #cbd5e1（圆角卡片）；曲线跨出所在面板且落在面板外白底
import { readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const ROOT = resolve(import.meta.dir, '../../public/images/bio')
const DIRS = ['drawn', 'terms', 'structures']

type Pt = [number, number]
interface Frame { x: number; y: number; w: number; h: number }

function parsePathPoints(d: string): Pt[] {
  const pts: Pt[] = []
  const re = /([MLCQSTAZ])(?:\s*)([-\d.]+(?:\s*,\s*[-\d.]+)*)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(d)) !== null) {
    if (m[1] === 'Z') continue
    const nums = m[2].split(/[\s,]+/).map(Number)
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]])
  }
  return pts
}

function panelsIn(svg: string): Frame[] {
  const out: Frame[] = []
  const re = /<rect [^>]*>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg)) !== null) {
    const tag = m[0]
    if (!/fill="#f8fafc"/i.test(tag) || !/stroke="#cbd5e1"/i.test(tag)) continue
    if (/rx=/.test(tag) === false) continue // panel 有圆角
    const x = parseFloat(/x="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    const y = parseFloat(/y="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    const w = parseFloat(/width="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    const h = parseFloat(/height="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    if (w >= 200 && h >= 150) out.push({ x, y, w, h })
  }
  return out
}

function curvesIn(svg: string): Pt[][] {
  const body = svg.replace(/<defs>[\s\S]*?<\/defs>/g, '')
  const out: Pt[][] = []
  const re = /<(path|polyline)\b[^>]*fill="none"[^>]*>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(body)) !== null) {
    const tag = m[0]
    const d = /d="([^"]+)"/.exec(tag)?.[1] ?? /points="([^"]+)"/.exec(tag)?.[1]
    if (!d) continue
    let pts: Pt[] = tag.startsWith('<polyline')
      ? d.trim().split(/\s+/).map((p) => p.split(',').map(Number) as Pt)
      : parsePathPoints(d)
    pts = pts.filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y))
    if (pts.length >= 4) out.push(pts)
  }
  return out
}

const inF = ([x, y]: Pt, f: Frame, m = 4): boolean =>
  x >= f.x + m && x <= f.x + f.w - m && y >= f.y + m && y <= f.y + f.h - m

const report: string[] = []
let n = 0
for (const dir of DIRS) {
  const dp = join(ROOT, dir)
  let files: string[] = []
  try { files = readdirSync(dp).filter((f) => f.endsWith('.svg')) } catch { continue }
  for (const f of files) {
    n++
    const svg = readFileSync(join(dp, f), 'utf-8')
    const panels = panelsIn(svg)
    if (panels.length < 2) continue // 单面板整图（曲线常画在面板之间）不适用
    for (const pts of curvesIn(svg)) {
      // 主面板：包含点最多者
      let best: Frame | null = null
      let bestC = 0
      for (const p of panels) {
        const c = pts.filter((q) => inF(q, p)).length
        if (c > bestC) { bestC = c; best = p }
      }
      if (!best || bestC < 3) continue
      const out = pts.filter((q) => !inF(q, best, 4))
      if (out.length >= 2) {
        const ids = out.map(([x, y]) => `(${x.toFixed(0)},${y.toFixed(0)})`).join(' ')
        report.push(`${dir}/${f} panel(${best.x},${best.y},${best.w}×${best.h}) in=${bestC}/${pts.length} OUT[${ids}]`)
      }
    }
  }
}
console.log(`scanned ${n} files, panels>=2 only`)
console.log(`=== ${report.length} suspected cross-panel curves ===`)
for (const r of report) console.log(r)
