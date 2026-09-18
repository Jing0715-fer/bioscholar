// ============================================================
// 41 系列：像素级真值测量
//   对静态检查标记的 TRUNC / TEXT-OVERLAP 逐元素单独渲染，
//   用 sharp.trim() 取真实墨迹包围盒 → 判定是否真截断/真重叠
// 用法：bun scripts/review/measure-truth.ts
// 输出：/tmp/drawn-audit/truth.json
// ============================================================
import sharp from 'sharp'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SRC = resolve(import.meta.dir, '../../public/images/bio/drawn')
const W = 1400, H = 1000
const staticIssues: Array<{ file: string; type: string; detail: string }> = JSON.parse(readFileSync('/tmp/drawn-audit/static.json', 'utf-8'))

interface TextEl {
  file: string; idx: number; x: number; y: number; size: number; anchor: string
  weight: number; italic: boolean; ls: number | null; opacity: number | null
  s: string; raw: string
}

function parseTexts(file: string, svg: string): TextEl[] {
  const out: TextEl[] = []
  const re = /<text ([^>]*)>([^<]*)<\/text>/g
  let m: RegExpExecArray | null; let idx = 0
  while ((m = re.exec(svg))) {
    const attrs = m[1]
    const g = (name: string) => { const r = new RegExp(`${name}="([^"]*)"`).exec(attrs); return r ? r[1] : null }
    out.push({
      file, idx: idx++,
      x: Number(g('x')), y: Number(g('y')),
      size: Number(g('font-size') ?? 18),
      anchor: g('text-anchor') ?? 'start',
      weight: Number(g('font-weight') ?? 400),
      italic: g('font-style') === 'italic',
      ls: g('letter-spacing') ? Number(g('letter-spacing')) : null,
      opacity: g('opacity') ? Number(g('opacity')) : null,
      s: m[2].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'),
      raw: m[0],
    })
  }
  return out
}

/** 单独渲染一个文本元素，返回真实墨迹包围盒（null = 无墨迹） */
async function measureInk(t: TextEl): Promise<{ x0: number; y0: number; x1: number; y1: number } | null> {
  const esc = t.raw.startsWith('<text ') ? t.raw.replace(/^<text [^>]*>/, '').replace(/<\/text>$/, '') : t.s
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Noto Serif SC, LXGW WenKai, Songti SC, serif">
  <rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>
  <text x="${t.x}" y="${t.y}" font-size="${t.size}"${t.anchor !== 'start' ? ` text-anchor="${t.anchor}"` : ''}${t.weight !== 400 ? ` font-weight="${t.weight}"` : ''}${t.italic ? ' font-style="italic"' : ''}${t.ls != null ? ` letter-spacing="${t.ls}"` : ''}${t.opacity != null ? ` opacity="${t.opacity}"` : ''} fill="#000000">${esc}</text>
</svg>`
  const buf = await sharp(Buffer.from(svg), { density: 96 }).resize(W, H).png().toBuffer()
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  // trim 逻辑：找非白像素范围
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels
      if (data[i] < 200) { // 黑色墨迹阈值
        if (x < x0) x0 = x; if (x > x1) x1 = x
        if (y < y0) y0 = y; if (y > y1) y1 = y
      }
    }
  }
  if (x1 < 0) return null
  return { x0, y0, x1, y1 }
}

/** 两个文本元素的真实墨迹相交像素数 */
async function overlapPixels(a: TextEl, b: TextEl): Promise<number> {
  const mk = async (t: TextEl) => {
    const esc = t.raw.replace(/^<text [^>]*>/, '').replace(/<\/text>$/, '')
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Noto Serif SC, LXGW WenKai, Songti SC, serif">
  <rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>
  <text x="${t.x}" y="${t.y}" font-size="${t.size}"${t.anchor !== 'start' ? ` text-anchor="${t.anchor}"` : ''}${t.weight !== 400 ? ` font-weight="${t.weight}"` : ''}${t.italic ? ' font-style="italic"' : ''}${t.ls != null ? ` letter-spacing="${t.ls}"` : ''}${t.opacity != null ? ` opacity="${t.opacity}"` : ''} fill="#000000">${esc}</text>
</svg>`
    const buf = await sharp(Buffer.from(svg), { density: 96 }).resize(W, H).png().toBuffer()
    const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true })
    return { data, w: info.width, h: info.height }
  }
  const A = await mk(a), Bm = await mk(b)
  // 先包围盒相交快速排除
  // （已在调用处用估算包围盒预筛，这里直接像素 AND）
  let n = 0
  for (let y = 0; y < A.h; y++) {
    for (let x = 0; x < A.w; x++) {
      const i = (y * A.w + x) * 3
      if (A.data[i] < 200 && Bm.data[i] < 200) n++
    }
  }
  return n
}

async function main() {
  const byFile = new Map<string, typeof staticIssues>()
  for (const i of staticIssues) {
    if (i.type === 'SUSPECT-CHAR') continue
    const arr = byFile.get(i.file) ?? []; arr.push(i); byFile.set(i.file, arr)
  }
  const confirmed: Array<{ file: string; type: string; detail: string }> = []
  let checkedTrunc = 0, checkedPairs = 0
  const inkCache = new Map<string, { x0: number; y0: number; x1: number; y1: number } | null>()

  for (const [file, issues] of byFile) {
    const svg = readFileSync(resolve(SRC, file), 'utf-8')
    const texts = parseTexts(file, svg)
    const need = new Set<number>()
    const pairs: Array<[number, number]> = []
    for (const i of issues) {
      if (i.type.startsWith('TRUNC')) need.add(-1) // 标记：需要全量截断检查？不——仅标记静态版文本
    }
    // 静态 TRUNC：重新按真实墨迹逐文本判定（只查静态标记过的文件中的所有文本，量可控）
    if (issues.some(i => i.type.startsWith('TRUNC'))) {
      for (const t of texts) {
        const key = `${file}#${t.idx}`
        if (!inkCache.has(key)) { inkCache.set(key, await measureInk(t)); checkedTrunc++ }
        const bb = inkCache.get(key)!
        if (!bb) continue
        if (bb.x0 < 2) confirmed.push({ file, type: 'TRUNC-LEFT', detail: `"${t.s.slice(0, 26)}" 真实墨迹左缘 ${bb.x0}` })
        if (bb.x1 > W - 2) confirmed.push({ file, type: 'TRUNC-RIGHT', detail: `"${t.s.slice(0, 26)}" 真实墨迹右缘 ${bb.x1}（> ${W - 2}）` })
        if (bb.y0 < 2) confirmed.push({ file, type: 'TRUNC-TOP', detail: `"${t.s.slice(0, 26)}" 真实墨迹上缘 ${bb.y0}` })
        if (bb.y1 > H - 2) confirmed.push({ file, type: 'TRUNC-BOTTOM', detail: `"${t.s.slice(0, 26)}" 真实墨迹下缘 ${bb.y1}（> ${H - 2}）` })
      }
    }
    // 静态 TEXT-OVERLAP：重算估算包围盒 → 像素级验证
    const overlapIssues = issues.filter(i => i.type === 'TEXT-OVERLAP')
    if (overlapIssues.length) {
      const { textW } = await import('../draw/lib')
      const boxes = texts.map(t => {
        const wEst = textW(t.s, t.size, t.weight)
        let x0 = t.x, x1 = t.x + wEst
        if (t.anchor === 'middle') { x0 = t.x - wEst / 2; x1 = t.x + wEst / 2 }
        else if (t.anchor === 'end') { x0 = t.x - wEst; x1 = t.x }
        return { t, x0, x1, y0: t.y - t.size * 0.82, y1: t.y + t.size * 0.22 }
      })
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i], b = boxes[j]
          const ox = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)
          const oy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0)
          if (ox > 4 && oy > 2 && !(a.t.s === b.t.s && Math.abs(a.t.y - b.t.y) < 1 && Math.abs(a.t.x - b.t.x) < 1)) {
            pairs.push([i, j])
          }
        }
      }
      for (const [i, j] of pairs) {
        checkedPairs++
        const n = await overlapPixels(texts[i], texts[j])
        if (n > 25) {
          confirmed.push({
            file, type: 'TEXT-OVERLAP',
            detail: `"${texts[i].s.slice(0, 20)}" × "${texts[j].s.slice(0, 20)}" 像素交叠 ${n}px @(${texts[i].x},${texts[i].y})/(${texts[j].x},${texts[j].y})`,
          })
        }
      }
    }
  }
  writeFileSync('/tmp/drawn-audit/truth.json', JSON.stringify(confirmed, null, 2))
  const byType: Record<string, number> = {}
  for (const c of confirmed) byType[c.type] = (byType[c.type] ?? 0) + 1
  const files = new Set(confirmed.map(c => c.file))
  console.log(`真值测量：截断检查 ${checkedTrunc} 文本、重叠验证 ${checkedPairs} 对`)
  console.log(`确认真问题：${confirmed.length} 处，涉及 ${files.size} 张图 ${JSON.stringify(byType)}`)
  for (const f of [...files].sort()) {
    console.log(`  ${f}: ${confirmed.filter(c => c.file === f).length} 处`)
    for (const c of confirmed.filter(c => c.file === f).slice(0, 8)) console.log(`    [${c.type}] ${c.detail.slice(0, 110)}`)
  }
}
main()
