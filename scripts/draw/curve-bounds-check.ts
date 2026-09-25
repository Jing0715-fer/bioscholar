// 45-b/45-c：曲线出框几何检测（SVG 产物级）
// 检测逻辑：axis() 轴框 = fill #ffffff + stroke #475569；曲线 = path/polyline 坐标点
// 若一条曲线 ≥2 点严格在某轴框内（距边 >4px）且 ≥1 点在框外（距边 >5px）
// 且框外点不属于其它轴框 → 报告「曲线穿出轴框」
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const ROOT = resolve(import.meta.dir, '../../public/images/bio')
const DIRS = ['drawn', 'terms', 'structures', 'covers', 'commons']

type Pt = [number, number]
interface Frame { x: number; y: number; w: number; h: number }

function parsePathPoints(d: string): Pt[] {
  const pts: Pt[] = []
  const re = /([MLCQSTAZ])(?:\s*)([-\d.]+(?:\s*,\s*[-\d.]+)*)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(d)) !== null) {
    const cmd = m[1]
    if (cmd === 'Z') continue
    const nums = m[2].split(/[\s,]+/).map(Number)
    if (cmd === 'H') { for (const n of nums) pts.push([n, NaN]) ; continue }
    if (cmd === 'V') { for (const n of nums) pts.push([NaN, n]) ; continue }
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]])
  }
  return pts
}

function rectsIn(svg: string): Frame[] {
  const out: Frame[] = []
  const re = /<rect [^>]*>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg)) !== null) {
    const tag = m[0]
    if (!/fill="#ffffff"/i.test(tag) || !/stroke="#475569"/i.test(tag)) continue
    const x = parseFloat(/x="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    const y = parseFloat(/y="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    const w = parseFloat(/width="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    const h = parseFloat(/height="([-\d.]+)"/.exec(tag)?.[1] ?? '0')
    if (w >= 60 && h >= 50) out.push({ x, y, w, h })
  }
  return out
}

function curvesIn(svg: string): Pt[][] {
  // strip defs (markers)
  const body = svg.replace(/<defs>[\s\S]*?<\/defs>/g, '')
  const out: Pt[][] = []
  const re = /<(path|polyline)\b[^>]*>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(body)) !== null) {
    const tag = m[0]
    if (/fill="(?!none)[^"]+"/.test(tag) && !/fill="none"/.test(tag)) continue // 只看描边曲线
    const d = /d="([^"]+)"/.exec(tag)?.[1] ?? /points="([^"]+)"/.exec(tag)?.[1]
    if (!d) continue
    let pts: Pt[] = tag.startsWith('<polyline')
      ? d.trim().split(/\s+/).map((p) => p.split(',').map(Number) as Pt)
      : parsePathPoints(d)
    pts = pts.filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y))
    if (pts.length >= 3) out.push(pts)
  }
  return out
}

function inFrame([x, y]: Pt, f: Frame, margin: number): boolean {
  return x >= f.x + margin && x <= f.x + f.w - margin && y >= f.y + margin && y <= f.y + f.h - margin
}

function distOutside([x, y]: Pt, f: Frame): number {
  const dx = Math.max(f.x - x, 0, x - (f.x + f.w))
  const dy = Math.max(f.y - y, 0, y - (f.y + f.h))
  return Math.hypot(dx, dy)
}

const report: string[] = []
let filesScanned = 0
for (const dir of DIRS) {
  const dp = join(ROOT, dir)
  let files: string[] = []
  try { files = readdirSync(dp).filter((f) => f.endsWith('.svg')) } catch { continue }
  for (const f of files) {
    filesScanned++
    const svg = readFileSync(join(dp, f), 'utf-8')
    const frames = rectsIn(svg)
    if (!frames.length) continue
    const curves = curvesIn(svg)
    if (!curves.length) continue
    for (const pts of curves) {
      // 该曲线的主轴框：框内点最多的框
      let best: Frame | null = null
      let bestCount = 0
      for (const fr of frames) {
        const c = pts.filter((p) => inFrame(p, fr, 3)).length
        if (c > bestCount) { bestCount = c; best = fr }
      }
      if (!best || bestCount < 2) continue
      // 框外且远离其它轴框的点
      const outside = pts.filter((p) => {
        if (inFrame(p, best, 3)) return false
        if (distOutside(p, best) <= 5) return false
        return !frames.some((fr) => fr !== best && inFrame(p, fr, 3))
      })
      if (outside.length >= 1) {
        const ids = outside.map(([x, y]) => `(${x.toFixed(0)},${y.toFixed(0)})`).join(' ')
        report.push(`${dir}/${f}  frame(${best.x},${best.y},${best.w}×${best.h}) in=${bestCount}/${pts.length} OUT[${ids}]`)
      }
    }
  }
}

console.log(`scanned ${filesScanned} files`)
console.log(`=== ${report.length} suspected curve-out-of-frame ===`)
for (const r of report) console.log(r)
