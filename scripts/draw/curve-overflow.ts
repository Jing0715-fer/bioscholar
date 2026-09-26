// ============================================================
// 曲线越界检测器：检测自绘 SVG 中 path/polyline 曲线坐标
// 是否超出其所在绘图框（白底 axis 框）或画布边界
// 用法: bun scripts/draw/curve-overflow.ts [文件|目录]
// ============================================================
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const args = process.argv.slice(2)
const root = resolve(process.cwd(), args[0] ?? 'public/images/bio/drawn')
const single = statSync(root).isFile()
const files = single ? [root] : readdirSync(root).filter((f) => f.endsWith('.svg')).map((f) => join(root, f))

/** 提取 path 的所有锚点坐标（M/L/T 与 Q/C/S 的端点；忽略 A 弧参数） */
function pathPoints(d: string): Array<[number, number]> {
  const pts: Array<[number, number]> = []
  const re = /([MLQTCSAZmlqtcsaz])((?:[^MLQTCSAZmlqtcsaz]*)?)/g
  let m: RegExpExecArray | null
  const nums: number[] = []
  let cur: 'M' | 'm' | null = null
  let cx = 0, cy = 0
  while ((m = re.exec(d))) {
    const cmd = m[1]
    const params = (m[2].match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? []).map(Number)
    if (cmd === 'M' || cmd === 'm' || cmd === 'L' || cmd === 'l' || cmd === 'T' || cmd === 't') {
      for (let i = 0; i + 1 < params.length; i += 2) {
        const x = cmd === cmd.toUpperCase() ? params[i] : cx + params[i]
        const y = cmd === cmd.toUpperCase() ? params[i + 1] : cy + params[i + 1]
        pts.push([x, y]); cx = x; cy = y
        if (cmd === 'M' || cmd === 'm') cur = cmd as 'M' | 'm'
      }
    } else if (cmd === 'Q' || cmd === 'q' || cmd === 'S' || cmd === 's') {
      for (let i = 0; i + 3 < params.length; i += 4) {
        const x = cmd === cmd.toUpperCase() ? params[i + 2] : cx + params[i + 2]
        const y = cmd === cmd.toUpperCase() ? params[i + 3] : cy + params[i + 3]
        pts.push([x, y]); cx = x; cy = y
      }
    } else if (cmd === 'C' || cmd === 'c') {
      for (let i = 0; i + 5 < params.length; i += 6) {
        const x = cmd === cmd.toUpperCase() ? params[i + 4] : cx + params[i + 4]
        const y = cmd === cmd.toUpperCase() ? params[i + 5] : cy + params[i + 5]
        pts.push([x, y]); cx = x; cy = y
      }
    } else if (cmd === 'A' || cmd === 'a') {
      for (let i = 0; i + 6 < params.length; i += 7) {
        const x = cmd === cmd.toUpperCase() ? params[i + 5] : cx + params[i + 5]
        const y = cmd === cmd.toUpperCase() ? params[i + 6] : cy + params[i + 6]
        pts.push([x, y]); cx = x; cy = y
      }
    } else if (cmd === 'Z' || cmd === 'z') { /* 闭合，无新点 */ }
    void cur; void nums
  }
  return pts
}

const flagged: string[] = []
let checked = 0

for (const f of files) {
  checked++
  const src = readFileSync(f, 'utf8')
  // 1) 画布边界
  const vb = /viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/.exec(src)
  const W = vb ? Number(vb[1]) : 1400, H = vb ? Number(vb[2]) : 1000

  // 2) 白底绘图框（axis 框）：fill="#ffffff" 且带 stroke
  const plots: Array<{ x: number; y: number; w: number; h: number }> = []
  for (const rm of src.matchAll(/<rect\s[^>]*>/g)) {
    const tag = rm[0]
    if (!/fill="#ffffff"/.test(tag) || !/stroke=/.test(tag)) continue
    const x = Number(/x="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    const y = Number(/y="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    const w = Number(/width="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    const h = Number(/height="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    if (w > 80 && h > 60) plots.push({ x, y, w, h })
  }

  // 3) 面板（浅灰底）：fill="#f8fafc"
  const panels: Array<{ x: number; y: number; w: number; h: number }> = []
  for (const rm of src.matchAll(/<rect\s[^>]*>/g)) {
    const tag = rm[0]
    if (!/fill="#f8fafc"/.test(tag)) continue
    const x = Number(/x="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    const y = Number(/y="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    const w = Number(/width="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    const h = Number(/height="([\d.]+)"/.exec(tag)?.[1] ?? 0)
    if (w > 200 && h > 100) panels.push({ x, y, w, h })
  }

  const issues: string[] = []
  // 4) path 曲线越界检测（仅统计折线/曲线型 path：点数≥3 且非填充形状）
  for (const pm of src.matchAll(/<path\s[^>]*d="([^"]+)"[^>]*>/g)) {
    const d = pm[1]
    const tag = pm[0]
    if (/fill="(?!none)[^"]*"/.test(tag)) continue // 只查不填充的曲线
    const pts = pathPoints(d)
    if (pts.length < 3) continue
    // 4a) 画布越界
    for (const [x, y] of pts) {
      if (x < -2 || y < -2 || x > W + 2 || y > H + 2) {
        issues.push(`曲线越出画布: 点(${x.toFixed(0)},${y.toFixed(0)}) 超 1400×1000 画布`)
        break
      }
    }
    // 4b) 绘图框越界：曲线起点落在某白底框内，但后续点越出该框 >6px
    const [sx, sy] = pts[0]
    for (const p of plots) {
      if (sx >= p.x && sx <= p.x + p.w && sy >= p.y && sy <= p.y + p.h) {
        for (const [x, y] of pts) {
          const out =
            x < p.x - 6 || x > p.x + p.w + 6 || y < p.y - 6 || y > p.y + p.h + 6
          if (out) {
            issues.push(`曲线越出绘图框(${p.x},${p.y},${p.w}×${p.h}): 点(${x.toFixed(0)},${y.toFixed(0)})`)
            break
          }
        }
        break
      }
    }
  }
  // 5) polyline 越界
  for (const pm of src.matchAll(/<polyline\s[^>]*points="([^"]+)"[^>]*>/g)) {
    const pts = pm[1].trim().split(/\s+/).map((p) => p.split(',').map(Number) as [number, number])
    if (pts.length < 3) continue
    for (const [x, y] of pts) {
      if (x < -2 || y < -2 || x > W + 2 || y > H + 2) {
        issues.push(`polyline 越出画布: 点(${x},${y})`)
        break
      }
    }
    const [sx, sy] = pts[0]
    for (const p of plots) {
      if (sx >= p.x && sx <= p.x + p.w && sy >= p.y && sy <= p.y + p.h) {
        for (const [x, y] of pts) {
          if (x < p.x - 6 || x > p.x + p.w + 6 || y < p.y - 6 || y > p.y + p.h + 6) {
            issues.push(`polyline 越出绘图框(${p.x},${p.y},${p.w}×${p.h}): 点(${x},${y})`)
            break
          }
        }
        break
      }
    }
  }
  // 6) 面板级：白色绘图框本身越出其所在面板（结构性错位）
  for (const p of plots) {
    const cx = p.x + p.w / 2, cy = p.y + p.h / 2
    const host = panels.find((q) => cx >= q.x && cx <= q.x + q.w && cy >= q.y && cy <= q.y + q.h)
    if (host && (p.x < host.x - 2 || p.y < host.y - 2 || p.x + p.w > host.x + host.w + 2 || p.y + p.h > host.y + host.h + 2)) {
      issues.push(`绘图框(${p.x},${p.y},${p.w}×${p.h}) 越出其面板`)
    }
  }

  if (issues.length) {
    flagged.push(`${single ? '' : f.replace(resolve(process.cwd()) + '/', '')}\n    ${issues.join('\n    ')}`)
  }
}

console.log(`\n检测 ${checked} 个文件，标记 ${flagged.length} 个：`)
for (const f of flagged) console.log('  ' + f)
if (flagged.length) process.exit(1)
