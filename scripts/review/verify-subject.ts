// ============================================================
// 41 系列：单学科审校验证工具（供修复子代理迭代使用）
// 用法：bun scripts/review/verify-subject.ts <abbr>
//   abbr ∈ bc | mb | cb | bp | mi | im | ne | bi | vi | legacy
// 输出该学科全部 drawn SVG 的确认问题（像素级真值）：
//   /tmp/drawn-audit/truth-<abbr>.json
// 退出码 0 = 无问题，1 = 仍有问题
// ============================================================
import sharp from 'sharp'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { textW } from '../draw/lib'

const ABBRS = ['bc', 'mb', 'cb', 'bp', 'mi', 'im', 'ne', 'bi', 'vi', 'legacy']
const abbr = process.argv[2]
if (!ABBRS.includes(abbr)) { console.error(`用法: bun scripts/review/verify-subject.ts <${ABBRS.join('|')}>`); process.exit(2) }

const SRC = resolve(import.meta.dir, '../../public/images/bio/drawn')
const W = 1400, H = 1000
const all = readdirSync(SRC).filter(f => f.endsWith('.svg')).sort()
const scenePattern = /^(bc|mb|cb|bp|mi|im|ne|bi|vi)-ch\d+-s\d+/
const files = abbr === 'legacy' ? all.filter(f => !scenePattern.test(f)) : all.filter(f => f.startsWith(`${abbr}-ch`))

interface TextEl { x: number; y: number; size: number; anchor: string; weight: number; italic: boolean; ls: number | null; opacity: number | null; s: string; raw: string }

function parseTexts(svg: string): TextEl[] {
  const out: TextEl[] = []
  const re = /<text ([^>]*)>([^<]*)<\/text>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg))) {
    const attrs = m[1]
    const g = (name: string) => { const r = new RegExp(`${name}="([^"]*)"`).exec(attrs); return r ? r[1] : null }
    out.push({
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

async function renderAlone(t: TextEl): Promise<Buffer> {
  const esc = t.raw.replace(/^<text [^>]*>/, '').replace(/<\/text>$/, '')
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Noto Serif SC, LXGW WenKai, Songti SC, serif">
  <rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>
  <text x="${t.x}" y="${t.y}" font-size="${t.size}"${t.anchor !== 'start' ? ` text-anchor="${t.anchor}"` : ''}${t.weight !== 400 ? ` font-weight="${t.weight}"` : ''}${t.italic ? ' font-style="italic"' : ''}${t.ls != null ? ` letter-spacing="${t.ls}"` : ''}${t.opacity != null ? ` opacity="${t.opacity}"` : ''} fill="#000000">${esc}</text>
</svg>`
  return sharp(Buffer.from(svg), { density: 96 }).resize(W, H).png().toBuffer()
}

async function measureInk(t: TextEl): Promise<{ x0: number; y0: number; x1: number; y1: number } | null> {
  const { data, info } = await sharp(await renderAlone(t)).raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels
    if (data[i] < 200) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y }
  }
  return x1 < 0 ? null : { x0, y0, x1, y1 }
}

async function main() {
  const confirmed: Array<{ file: string; type: string; detail: string }> = []
  for (const file of files) {
    const svg = readFileSync(resolve(SRC, file), 'utf-8')
    const texts = parseTexts(svg)
    // 1) 截断：真实墨迹贴边（<2 或 >W-2）即报告
    for (const t of texts) {
      const bb = await measureInk(t)
      if (!bb) continue
      if (bb.x0 < 2) confirmed.push({ file, type: 'TRUNC-LEFT', detail: `"${t.s.slice(0, 26)}" 墨迹左缘 ${bb.x0} @(x=${t.x},y=${t.y})` })
      if (bb.x1 > W - 2) confirmed.push({ file, type: 'TRUNC-RIGHT', detail: `"${t.s.slice(0, 26)}" 墨迹右缘 ${bb.x1} @(x=${t.x},y=${t.y})` })
      if (bb.y0 < 2) confirmed.push({ file, type: 'TRUNC-TOP', detail: `"${t.s.slice(0, 26)}" 墨迹上缘 ${bb.y0} @(x=${t.x},y=${t.y})` })
      if (bb.y1 > H - 2) confirmed.push({ file, type: 'TRUNC-BOTTOM', detail: `"${t.s.slice(0, 26)}" 墨迹下缘 ${bb.y1} @(x=${t.x},y=${t.y})` })
    }
    // 2) 文字-文字重叠：估算预筛 + 像素级验证（阈值 15px）
    const boxes = texts.map(t => {
      const wEst = textW(t.s, t.size, t.weight)
      let x0 = t.x, x1 = t.x + wEst
      if (t.anchor === 'middle') { x0 = t.x - wEst / 2; x1 = t.x + wEst / 2 }
      else if (t.anchor === 'end') { x0 = t.x - wEst; x1 = t.x }
      return { t, x0, x1, y0: t.y - t.size * 0.82, y1: t.y + t.size * 0.22 }
    })
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], b = boxes[j]
      const ox = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)
      const oy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0)
      if (ox > 4 && oy > 2 && !(a.t.s === b.t.s && Math.abs(a.t.y - b.t.y) < 1 && Math.abs(a.t.x - b.t.x) < 1)) {
        const A = await sharp(await renderAlone(texts[i])).raw().toBuffer({ resolveWithObject: true })
        const Bm = await sharp(await renderAlone(texts[j])).raw().toBuffer({ resolveWithObject: true })
        let n = 0
        for (let p = 0; p < A.data.length; p += 3) if (A.data[p] < 200 && Bm.data[p] < 200) n++
        if (n > 15) confirmed.push({
          file, type: 'TEXT-OVERLAP',
          detail: `"${texts[i].s.slice(0, 20)}"@(x=${texts[i].x},y=${texts[i].y}) × "${texts[j].s.slice(0, 20)}"@(x=${texts[j].x},y=${texts[j].y}) 交叠 ${n}px`,
        })
      }
    }
  }
  writeFileSync(`/tmp/drawn-audit/truth-${abbr}.json`, JSON.stringify(confirmed, null, 2))
  const byFile: Record<string, number> = {}
  for (const c of confirmed) byFile[c.file] = (byFile[c.file] ?? 0) + 1
  console.log(`[${abbr}] ${files.length} 张 SVG，确认真问题 ${confirmed.length} 处（${Object.keys(byFile).length} 张图）`)
  for (const f of Object.keys(byFile).sort()) {
    console.log(`  ${f}: ${byFile[f]} 处`)
    for (const c of confirmed.filter(x => x.file === f)) console.log(`    [${c.type}] ${c.detail.slice(0, 130)}`)
  }
  process.exit(confirmed.length ? 1 : 0)
}
main()
