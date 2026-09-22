// 临时自检：文本-文本重叠检测（XC-2 用后即删）
const CJK = /[\u2E80-\u9FFF\uF900-\uFAFF\u3000-\u303F\uFF00-\uFFEF]/
const WIDE = /[A-Z0-9]/
const THIN = /[·,.:;'"()[\]{}?!/|ilj I1]/
function rawW(s: string, size: number): number {
  let w = 0
  for (const ch of s) {
    if (CJK.test(ch)) w += size
    else if (WIDE.test(ch)) w += size * 0.62
    else if (THIN.test(ch)) w += size * 0.32
    else w += size * 0.52
  }
  return w
}

interface Box { x0: number; y0: number; x1: number; y1: number; body: string }

for (const f of ['ch11-s2', 'ch11-s3', 'ch11-s4']) {
  const svg = (await import(`../draw/scenes/xc/${f}.ts`)).default as string
  const boxes: Box[] = []
  const re = /<text x="([\d.]+)" y="([\d.]+)"([^>]*)>([\s\S]*?)<\/text>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg))) {
    const x = +m[1], y = +m[2], attrs = m[3], body = m[4].replace(/<[^>]+>/g, '')
    if (!body.trim()) continue
    const size = +(attrs.match(/font-size="([\d.]+)"/)?.[1] ?? 18)
    const weight = +(attrs.match(/font-weight="(\d+)"/)?.[1] ?? 400)
    const anchor = attrs.match(/text-anchor="(\w+)"/)?.[1] ?? 'start'
    const w = rawW(body, size) * (weight >= 600 ? 1.03 : 1)
    let x0 = x, x1 = x + w
    if (anchor === 'middle') { x0 = x - w / 2; x1 = x + w / 2 }
    if (anchor === 'end') { x0 = x - w; x1 = x }
    boxes.push({ x0, y0: y - size * 0.8, x1, y1: y + size * 0.25, body })
  }
  const hits: string[] = []
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], c = boxes[j]
      const ox = Math.min(a.x1, c.x1) - Math.max(a.x0, c.x0)
      const oy = Math.min(a.y1, c.y1) - Math.max(a.y0, c.y0)
      if (ox > 6 && oy > 4) {
        hits.push(`「${a.body.slice(0, 16)}」与「${c.body.slice(0, 16)}」重叠 ${ox.toFixed(0)}×${oy.toFixed(0)}px @(${a.x0.toFixed(0)},${a.y0.toFixed(0)})`)
      }
    }
  }
  console.log(f, 'text-text overlaps:', hits.length ? '\n  ' + hits.join('\n  ') : 'none')
}
