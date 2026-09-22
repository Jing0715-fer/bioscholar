// SB-5 专用：场景模块文本越界 + 文本互叠体检
import { textW } from '../draw/lib'

const mod = process.argv[2]
const svg = (await import(mod)).default as string
const re = /<text ([^>]*)>([\s\S]*?)<\/text>/g
interface Box { x0: number; x1: number; y0: number; y1: number; t: string }
const boxes: Box[] = []
let m: RegExpExecArray | null
let issues = 0
while ((m = re.exec(svg))) {
  const attrs = m[1]
  const body = m[2]
  const xm = attrs.match(/x="([\d.-]+)"/)
  const ym = attrs.match(/y="([\d.-]+)"/)
  const am = attrs.match(/text-anchor="(\w+)"/)
  const sm = attrs.match(/font-size="([\d.]+)"/)
  const wm = attrs.match(/font-weight="(\d+)"/)
  if (!xm || !ym) continue
  const x = parseFloat(xm[1]), y = parseFloat(ym[1])
  const size = sm ? parseFloat(sm[1]) : 18
  const weight = wm ? parseInt(wm[1]) : 400
  const anchor = am ? am[1] : 'start'
  const txt = body.replace(/<tspan[^>]*>/g, '').replace(/<\/tspan>/g, '')
  const w = textW(txt, size, weight)
  let x0 = x, x1 = x + w
  if (anchor === 'middle') { x0 = x - w / 2; x1 = x + w / 2 }
  if (anchor === 'end') { x0 = x - w; x1 = x }
  const y0 = y - size * 0.82, y1 = y + size * 0.24
  if (x1 > 1396 || x0 < 4 || y > 996 || y < 14) {
    issues++
    console.log(`OVERFLOW @(${x},${y}) anchor=${anchor} [${x0.toFixed(0)},${x1.toFixed(0)}]: ${txt.slice(0, 40)}`)
  }
  boxes.push({ x0, x1, y0, y1, t: txt })
}
let overlaps = 0
for (let i = 0; i < boxes.length; i++) {
  for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i], c = boxes[j]
    const ox = Math.min(a.x1, c.x1) - Math.max(a.x0, c.x0)
    const oy = Math.min(a.y1, c.y1) - Math.max(a.y0, c.y0)
    if (ox > 3 && oy > 2.5) {
      overlaps++
      console.log(`TEXT-OVERLAP (${ox.toFixed(0)}x${oy.toFixed(1)}px): "${a.t.slice(0, 26)}" @(${a.x0.toFixed(0)},${a.y0.toFixed(0)}) vs "${c.t.slice(0, 26)}" @(${c.x0.toFixed(0)},${c.y0.toFixed(0)})`)
    }
  }
}
console.log(`${mod}: ${boxes.length} texts, ${issues} overflow, ${overlaps} overlaps`)
