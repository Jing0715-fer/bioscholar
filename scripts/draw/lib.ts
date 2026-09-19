// ============================================================
// BioScholar 自绘插图 SVG 构建库（39 系列配图工程）
// 风格基准：与 public/images/bio/drawn/ 既有自绘图一致——
//   1400×1000 画布、白底、墨线 + 淡彩、衬线中文字体、色标箭头
// 用法（场景文件）：
//   import { scene, C } from '../../lib'
//   export default scene({ title, subtitle, draw(b) { b.text(...) } })
// ============================================================

/** 教学图功能调色板（深色为描边/文字，浅色为面板填充） */
export const C = {
  // 中性墨线
  ink: '#1e293b', sub: '#475569', mute: '#64748b', faint: '#94a3b8',
  bg: '#ffffff', panel: '#f8fafc', panelB: '#f1f5f9', line: '#cbd5e1',
  // DNA / 基因元件（青绿）
  dna: '#0f766e', dnaL: '#ccfbf1', dnaD: '#134e4a',
  // RNA（琥珀）
  rna: '#b45309', rnaL: '#fef3c7', rnaD: '#78350f',
  // 蛋白 / 转录因子（紫）
  pro: '#6d28d9', proL: '#ede9fe', proD: '#4c1d95',
  // 酶 / 工具分子（玫红）
  enz: '#be185d', enzL: '#fce7f3', enzD: '#831843',
  // 技术流程 / 数据（天蓝）
  acc: '#0369a1', accL: '#e0f2fe', accD: '#075985',
  // 状态色
  ok: '#059669', okL: '#d1fae5', okD: '#065f46',
  warn: '#d97706', warnL: '#fef3c7', warnD: '#92400e',
  bad: '#dc2626', badL: '#fee2e2', badD: '#991b1b',
  rose: '#be123c',
} as const

// ---------------- 文本宽度估算（用于自动定宽，防溢出） ----------------
const CJK = /[\u2E80-\u9FFF\uF900-\uFAFF\u3000-\u303F\uFF00-\uFFEF]/
const WIDE = /[A-Z0-9Ａ-Ｚ０-９]/
const THIN = /[·,.:;'"()\[\]{}?!\/|ilj I1]/  // 注意含空格
const SUBSUP = /[\u2070-\u209F\u00B2\u00B3\u00B9]/
/** 估算字符串渲染宽度（px）。size 为字号。 */
export function textW(s: string, size: number, weight = 400): number {
  let w = 0
  for (const ch of s) {
    if (CJK.test(ch)) w += size
    else if (SUBSUP.test(ch)) w += size * 0.55
    else if (WIDE.test(ch)) w += size * 0.62
    else if (THIN.test(ch)) w += size * 0.32
    else if ('→←↔↑↓⇌≥≤≈×±'.includes(ch)) w += size * 0.85
    else w += size * 0.52
  }
  return w * (weight >= 600 ? 1.03 : 1)
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// ---------------- 选项类型 ----------------
export interface TextOpt {
  size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'
  weight?: number; italic?: boolean; ls?: number; opacity?: number; family?: string
}
export interface ShapeOpt {
  fill?: string; stroke?: string; sw?: number; rx?: number; dash?: string
  opacity?: number; fillOp?: number
}
export interface LineOpt {
  stroke?: string; sw?: number; dash?: string; marker?: MarkerKey; opacity?: number
  markerStart?: MarkerKey
}
export type MarkerKey = 'ink' | 'dna' | 'rna' | 'pro' | 'enz' | 'acc' | 'ok' | 'warn' | 'bad' | 'mute'

const MARKER_PATH = 'M0,0 L10,5 L0,10 z'
const MARKER_FILL: Record<MarkerKey, string> = {
  ink: '#334155', dna: C.dna, rna: C.rna, pro: C.pro, enz: C.enz,
  acc: C.acc, ok: C.ok, warn: '#b45309', bad: C.bad, mute: '#94a3b8',
}

// ---------------- 构建器 ----------------
export class B {
  els: string[] = []

  private a(o: TextOpt = {}) {
    const s = ` font-size="${o.size ?? 18}"`
    return (
      s +
      (o.fill ? ` fill="${o.fill}"` : '') +
      (o.anchor ? ` text-anchor="${o.anchor}"` : '') +
      (o.weight && o.weight !== 400 ? ` font-weight="${o.weight}"` : '') +
      (o.italic ? ` font-style="italic"` : '') +
      (o.ls ? ` letter-spacing="${o.ls}"` : '') +
      (o.opacity != null ? ` opacity="${o.opacity}"` : '')
    )
  }
  private sh(o: ShapeOpt = {}) {
    return (
      (o.fill && o.fill !== 'none' ? ` fill="${o.fill}"` : ' fill="none"') +
      (o.fillOp != null ? ` fill-opacity="${o.fillOp}"` : '') +
      (o.stroke ? ` stroke="${o.stroke}"` : '') +
      (o.sw != null ? ` stroke-width="${o.sw ?? 1.5}"` : '') +
      (o.dash ? ` stroke-dasharray="${o.dash}"` : '') +
      (o.opacity != null ? ` opacity="${o.opacity}"` : '')
    )
  }
  private lh(o: LineOpt = {}) {
    const mk = o.marker ? ` marker-end="url(#arr-${o.marker})"` : ''
    const ms = o.markerStart ? ` marker-start="url(#arr-${o.markerStart})"` : ''
    return (
      ` stroke="${o.stroke ?? '#334155'}"` +
      (o.sw != null ? ` stroke-width="${o.sw ?? 1.5}"` : '') +
      (o.dash ? ` stroke-dasharray="${o.dash}"` : '') +
      (o.opacity != null ? ` opacity="${o.opacity}"` : '') +
      mk + ms
    )
  }

  /** 文本（默认左对齐，y 为基线） */
  text(x: number, y: number, s: string, o: TextOpt = {}): this {
    this.els.push(`<text x="${x}" y="${y}"${this.a(o)}>${esc(s)}</text>`)
    return this
  }
  /** 居中文本 */
  ctext(x: number, y: number, s: string, o: TextOpt = {}): this {
    return this.text(x, y, s, { ...o, anchor: 'middle' })
  }
  /** 右对齐文本 */
  etext(x: number, y: number, s: string, o: TextOpt = {}): this {
    return this.text(x, y, s, { ...o, anchor: 'end' })
  }
  /** 自动换行的文本块（按估算宽度断行），返回下一行基线 y */
  wtext(x: number, y: number, s: string, o: TextOpt & { maxW?: number; lh?: number } = {}): number {
    const size = o.size ?? 17
    const maxW = o.maxW ?? 260
    const lh = o.lh ?? size * 1.5
    const lines: string[] = []
    let cur = ''
    for (const word of s.split(/(?<=[，。；：、！？）])|(?=[（])/)) {
      if (cur && textW(cur + word, size) > maxW) { lines.push(cur); cur = word }
      else cur += word
    }
    if (cur) lines.push(cur)
    lines.forEach((ln, i) => this.text(x, y + i * lh, ln, o))
    return y + lines.length * lh
  }

  rect(x: number, y: number, w: number, h: number, o: ShapeOpt = {}): this {
    this.els.push(
      `<rect x="${x}" y="${y}" width="${w}" height="${h}"${o.rx != null ? ` rx="${o.rx}"` : ''}${this.sh(o)}/>`
    )
    return this
  }
  /** 圆角面板（默认浅底 + 细边） */
  panel(x: number, y: number, w: number, h: number, o: ShapeOpt & { title?: string; tsize?: number; tfill?: string } = {}): this {
    const { title, tsize = 19, tfill, ...rest } = o
    this.rect(x, y, w, h, { fill: rest.fill ?? C.panel, stroke: rest.stroke ?? C.line, sw: rest.sw ?? 1.5, rx: rest.rx ?? 10, dash: rest.dash, opacity: rest.opacity })
    if (title) this.text(x + 16, y + 16 + tsize * 0.36, title, { size: tsize, weight: 700, fill: tfill ?? C.sub })
    return this
  }
  circle(cx: number, cy: number, r: number, o: ShapeOpt = {}): this {
    this.els.push(`<circle cx="${cx}" cy="${cy}" r="${r}"${this.sh(o)}/>`)
    return this
  }
  ellipse(cx: number, cy: number, rx: number, ry: number, o: ShapeOpt = {}): this {
    this.els.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${this.sh(o)}/>`)
    return this
  }
  /** pts: [[x,y],...] */
  polygon(pts: [number, number][], o: ShapeOpt = {}): this {
    this.els.push(`<polygon points="${pts.map(p => p.join(',')).join(' ')}"${this.sh(o)}/>`)
    return this
  }
  polyline(pts: [number, number][], o: LineOpt = {}): this {
    this.els.push(`<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none"${this.lh(o)}/>`)
    return this
  }
  line(x1: number, y1: number, x2: number, y2: number, o: LineOpt = {}): this {
    this.els.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"${this.lh(o)}/>`)
    return this
  }
  /** 带箭头的连线（marker 自动取描边色系） */
  arrow(x1: number, y1: number, x2: number, y2: number, o: LineOpt = {}): this {
    return this.line(x1, y1, x2, y2, { ...o, marker: o.marker ?? 'ink' })
  }
  path(d: string, o: (ShapeOpt & LineOpt) = {}): this {
    this.els.push(
      `<path d="${d}"${this.sh({ fill: o.fill, fillOp: o.fillOp, opacity: o.opacity })}` +
      (o.stroke ? ` stroke="${o.stroke}"` : o.fill ? '' : ' stroke="#334155"') +
      (o.sw != null ? ` stroke-width="${o.sw ?? 1.5}"` : '') +
      (o.dash ? ` stroke-dasharray="${o.dash}"` : '') +
      (o.marker ? ` marker-end="url(#arr-${o.marker})"` : '') +
      (o.markerStart ? ` marker-start="url(#arr-${o.markerStart})"` : '') +
      `/>`
    )
    return this
  }
  /** 平滑曲线（Catmull-Rom → Bezier），pts 至少 2 点 */
  spline(pts: [number, number][], o: (ShapeOpt & LineOpt) = {}): this {
    const d = catmullRom(pts)
    return this.path(d, o)
  }

  /** 自动定宽标签盒（cx,cy 为盒心）。返回盒宽。tfill 为文字色（区别于盒填充 fill）。 */
  tag(cx: number, cy: number, s: string, o: TextOpt & ShapeOpt & { pad?: number; minh?: number; tfill?: string } = {}): number {
    const size = o.size ?? 17
    const w = textW(s, size, o.weight ?? 400) + (o.pad ?? 16) * 2
    const h = o.minh ?? size * 1.7
    this.rect(cx - w / 2, cy - h / 2, w, h, {
      fill: o.fill ?? C.accL, stroke: o.stroke, sw: o.sw ?? 1.5, rx: o.rx ?? 7, dash: o.dash, opacity: o.opacity,
    })
    this.text(cx, cy + size * 0.36, s, { size, fill: o.tfill ?? C.ink, weight: o.weight, anchor: 'middle' })
    return w
  }
  /** 图例（色块 + 文字横排），返回总宽 */
  legend(x: number, y: number, items: [string, string][], o: { size?: number; gap?: number; stroke?: boolean } = {}): number {
    const size = o.size ?? 15
    const gap = o.gap ?? 22
    let cx = x
    for (const [label, color] of items) {
      this.rect(cx, y - size * 0.42, size * 1.1, size * 0.84, { fill: color, stroke: o.stroke === false ? undefined : C.line, sw: 1, rx: 3 })
      this.text(cx + size * 1.1 + 8, y + size * 0.36, label, { size, fill: C.sub })
      cx += size * 1.1 + 8 + textW(label, size) + gap
    }
    return cx - x - gap
  }

  // -------- 生物学常用构件 --------
  /** 水平双链 DNA 示意：两条相位相反的正弦链 + 碱基横档 */
  dna(x: number, y: number, w: number, o: { amp?: number; period?: number; stroke?: string; sw?: number; rung?: boolean; rungC?: string; opacity?: number } = {}): this {
    const amp = o.amp ?? 9
    const period = o.period ?? 46
    const top: string[] = [`M${x},${y}`]
    const bot: string[] = [`M${x},${y}`]
    let phase = 0
    for (let t = 0; t <= w; t += 2) {
      const dy = amp * Math.sin((2 * Math.PI * t) / period)
      if (t % 2 === 0) {
        top.push(`L${(x + t).toFixed(1)},${(y - dy).toFixed(1)}`)
        bot.push(`L${(x + t).toFixed(1)},${(y + dy).toFixed(1)}`)
      }
      phase = dy
    }
    const stroke = o.stroke ?? C.dna
    this.els.push(`<path d="${top.join('')}" fill="none" stroke="${stroke}" stroke-width="${o.sw ?? 2.6}"${o.opacity != null ? ` opacity="${o.opacity}"` : ''}/>`)
    this.els.push(`<path d="${bot.join('')}" fill="none" stroke="${stroke}" stroke-width="${o.sw ?? 2.6}"${o.opacity != null ? ` opacity="${o.opacity}"` : ''}/>`)
    if (o.rung !== false) {
      for (let t = period / 4; t < w; t += period / 2) {
        const dy = amp * Math.sin((2 * Math.PI * t) / period)
        this.line(x + t, y - dy, x + t, y + dy, { stroke: o.rungC ?? stroke, sw: 1.4, opacity: 0.55 })
      }
    }
    void phase
    return this
  }
  /** 基因簇轨道：在基线上排布基因方块并标注 */
  genes(x: number, y: number, w: number, list: { label: string; frac: number; fill?: string; stroke?: string; h?: number; up?: boolean; size?: number }[]): this {
    let cx = x
    this.line(x, y, x + w, y, { stroke: C.faint, sw: 1.6 })
    for (const g of list) {
      const gw = w * g.frac
      const h = g.h ?? 30
      this.rect(cx + 1, y - h / 2, Math.max(gw - 2, 6), h, { fill: g.fill ?? C.dnaL, stroke: g.stroke ?? C.dna, sw: 1.6, rx: 4 })
      const size = g.size ?? (gw > textW(g.label, 15) + 12 ? 15 : 13)
      this.ctext(cx + gw / 2, g.up ? y - h / 2 - 12 : y + h / 2 + 18, g.label, { size, weight: 600, fill: C.sub })
      cx += gw
    }
    return this
  }
  /** 泳道式凝胶图（孔在上、梯度带）。bands: [相对迁移(0顶-1底), 颜色, 标签?] */
  gel(x: number, y: number, w: number, h: number, lanes: { label: string; bands: [number, string][] }[], o: { size?: number } = {}): this {
    const size = o.size ?? 14
    const n = lanes.length
    const lw = (w - 40) / n
    this.rect(x, y, w, h, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 4 })
    lanes.forEach((lane, i) => {
      const lx = x + 20 + i * lw
      // 上样孔
      this.rect(lx + lw * 0.18, y + 10, lw * 0.64, 7, { fill: C.ink, rx: 2 })
      // 条带
      for (const [rf, color] of lane.bands) {
        const by = y + 26 + rf * (h - 40)
        this.rect(lx + lw * 0.14, by - 4.5, lw * 0.72, 9, { fill: color, opacity: 0.9, rx: 2 })
      }
      this.ctext(lx + lw / 2, y + h + 20, lane.label, { size, fill: C.sub })
    })
    return this
  }
  /** 阶梯/台阶图（用于容量分级、范式演进等）。items 自动等分宽度。 */
  stairs(x: number, y: number, w: number, h: number, items: string[], o: { fill?: string; stroke?: string; size?: number } = {}): this {
    const n = items.length
    const swStep = w / n
    const shStep = h / n
    items.forEach((s, i) => {
      const bx = x + i * swStep
      const by = y + h - (i + 1) * shStep
      this.rect(bx, by, swStep - 6, shStep, { fill: o.fill ?? C.accL, stroke: o.stroke ?? C.acc, sw: 1.6, rx: 5 })
      this.wtext(bx + 14, by + 24, s, { size: o.size ?? 15, fill: C.ink, maxW: swStep - 24, lh: 21 })
    })
    return this
  }
  /** 大括号标注（右侧），label 放在括号尖角处 */
  brace(x: number, y1: number, y2: number, label: string, o: { size?: number; fill?: string; side?: 'left' | 'right' } = {}): this {
    const mid = (y1 + y2) / 2
    const d = y2 > y1 ? 14 : -14
    const dir = o.side === 'left' ? -1 : 1
    const p = `M${x + dir * 6},${y1} q${-dir * 12},0 ${-dir * 12},${d / 2} L${x + dir * 6},${mid - d / 3} q${-dir * 4},${d / 6} ${dir * 6},${d / 3} q${dir * 10},${d / 6} ${dir * 6},${d / 3} L${x + dir * 6},${y2} q${-dir * 12},0 ${-dir * 12},${-d / 2}`
    this.path(p, { stroke: o.fill ?? C.mute, sw: 1.8 })
    this.text(x + dir * 26, mid + 6, label, { size: o.size ?? 15, fill: o.fill ?? C.mute, anchor: o.side === 'left' ? 'end' : 'start' })
    return this
  }
  /** 细胞示意（圆角胶囊），可选双层膜 */
  cell(cx: number, cy: number, rx: number, ry: number, o: ShapeOpt & { label?: string; double?: boolean } = {}): this {
    const { label, double, ...rest } = o
    this.ellipse(cx, cy, rx, ry, { fill: rest.fill ?? C.panel, stroke: rest.stroke ?? C.sub, sw: rest.sw ?? 2, dash: rest.dash, opacity: rest.opacity })
    if (double) this.ellipse(cx, cy, rx - 7, ry - 7, { fill: 'none', stroke: rest.stroke ?? C.sub, sw: 1.2, opacity: 0.6 })
    if (label) this.ctext(cx, cy, label, { size: 18, weight: 600, fill: C.sub })
    return this
  }
  /** 茎环（发夹）结构：茎自 (x,y) 向上，顶部半圆环 */
  stemLoop(x: number, y: number, o: { h?: number; r?: number; stroke?: string; sw?: number; label?: string; fill?: string; lsize?: number; dash?: string } = {}): this {
    const h = o.h ?? 52
    const r = o.r ?? 16
    const stroke = o.stroke ?? C.rna
    const sw = o.sw ?? 2.2
    const d = `M${x - 6},${y} L${x - 6},${y - h} A${r},${r} 0 0 1 ${x + 6},${y - h} L${x + 6},${y}`
    this.path(d, { stroke, sw, dash: o.dash })
    if (o.label) this.ctext(x, y - h - r - 10, o.label, { size: o.lsize ?? 14, weight: 600, fill: stroke })
    return this
  }
  /** 蛋白结构域条（圆角矩形分段 + 域标签） */
  domains(x: number, y: number, h: number, list: { label: string; frac: number; fill?: string; stroke?: string; sub?: string }[]): this {
    let cx = x
    let totalFrac = 0
    for (const d of list) totalFrac += d.frac
    void totalFrac
    for (const d of list) {
      const w = d.frac
      this.rect(cx, y, w, h, { fill: d.fill ?? C.proL, stroke: d.stroke ?? C.pro, sw: 1.6, rx: 6 })
      const size = w > textW(d.label, 14) + 10 ? 14 : 12
      this.ctext(cx + w / 2, y + h / 2 + (d.sub ? -4 : 5), d.label, { size, weight: 600, fill: C.proD })
      if (d.sub) this.ctext(cx + w / 2, y + h / 2 + 14, d.sub, { size: 11.5, fill: C.mute })
      cx += w
    }
    return this
  }

  // ================= 通用科研图原语（39 系列扩展） =================

  /** 带标签的分区底色 */
  zone(x: number, y: number, w: number, h: number, o: ShapeOpt & { label?: string; sub?: string; lfill?: string; rx?: number } = {}): this {
    this.rect(x, y, w, h, { fill: o.fill ?? '#f1f5f9', fillOp: o.fillOp ?? 0.45, stroke: o.stroke, sw: o.sw, dash: o.dash, rx: o.rx ?? 10 })
    if (o.label) this.text(x + 16, y + 26, o.label, { size: 18, weight: 700, fill: o.lfill ?? C.sub })
    if (o.sub) this.text(x + 16, y + 48, o.sub, { size: 13.5, fill: C.mute })
    return this
  }

  /** 坐标轴框（y 为轴底；grid 是否画网格） */
  axis(x: number, y: number, w: number, h: number, o: {
    xlabel?: string; ylabel?: string; title?: string; grid?: boolean
    xticks?: Array<[number, string]>; yticks?: Array<[number, string]>
  } = {}): this {
    this.rect(x, y - h, w, h, { fill: C.bg, stroke: C.sub, sw: 1.8 })
    if (o.grid !== false) {
      for (let i = 1; i < 4; i++) {
        this.line(x, y - (h * i) / 4, x + w, y - (h * i) / 4, { stroke: C.faint, sw: 0.9, dash: '4 5', opacity: 0.55 })
        this.line(x + (w * i) / 4, y, x + (w * i) / 4, y - h, { stroke: C.faint, sw: 0.9, dash: '4 5', opacity: 0.55 })
      }
    }
    o.xticks?.forEach(([fx, label]) => {
      const tx = x + fx * w
      this.line(tx, y, tx, y + 6, { stroke: C.sub, sw: 1.8 })
      if (label) this.ctext(tx, y + 22, label, { size: 13, fill: C.mute })
    })
    o.yticks?.forEach(([fy, label]) => {
      const ty = y - fy * h
      this.line(x - 6, ty, x, ty, { stroke: C.sub, sw: 1.8 })
      if (label) this.text(x - 10, ty + 4, label, { size: 13, fill: C.mute, anchor: 'end' })
    })
    if (o.xlabel) this.ctext(x + w / 2, y + 44, o.xlabel, { size: 15, weight: 600, fill: C.sub })
    if (o.ylabel) this.ctext(x - 46, y - h / 2, o.ylabel, { size: 15, weight: 600, fill: C.sub })
    if (o.title) this.ctext(x + w / 2, y - h - 12, o.title, { size: 16, weight: 700, fill: C.ink })
    return this
  }

  /** axis 内画数据曲线（归一化坐标 [0..1]²；pts 绝对像素亦可） */
  curve(ax: number, ay: number, aw: number, ah: number, pts: Array<[number, number]>, o: LineOpt & { smooth?: boolean; label?: string; labelAt?: [number, number] } = {}): this {
    const px = pts.map(([fx, fy]): [number, number] => [ax + fx * aw, ay - fy * ah])
    const d = o.smooth ? catmullRom(px) : px.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')
    this.path(d, { fill: 'none', stroke: o.stroke ?? C.dna, sw: o.sw ?? 3, dash: o.dash, marker: o.marker })
    if (o.label) {
      const at = o.labelAt ?? pts[pts.length - 1]
      this.text(ax + at[0] * aw + 8, ay - at[1] * ah, o.label, { size: 14, weight: 700, fill: o.stroke ?? C.dna })
    }
    return this
  }

  /** 柱状图（y 为基线；values 归一化到 max） */
  bars(x: number, y: number, w: number, h: number, values: number[], o: { labels?: string[]; fill?: string; stroke?: string; max?: number; vlabels?: string[] } = {}): this {
    const max = o.max ?? Math.max(...values) * 1.15
    const bw = w / values.length
    values.forEach((v, i) => {
      const bh = (v / max) * h
      this.rect(x + i * bw + bw * 0.18, y - bh, bw * 0.64, bh, { fill: o.fill ?? C.dnaL, stroke: o.stroke ?? C.dna, sw: 1.6, rx: 4 })
      if (o.vlabels?.[i]) this.ctext(x + i * bw + bw / 2, y - bh - 9, o.vlabels[i], { size: 12.5, weight: 600, fill: C.sub })
      if (o.labels?.[i]) this.ctext(x + i * bw + bw / 2, y + 20, o.labels[i], { size: 12.5, fill: C.mute })
    })
    return this
  }

  /** 对照表（headers + rows；返回底边 y） */
  table(x: number, y: number, w: number, o: {
    headers: string[]; rows: string[][]; title?: string; rowH?: number; colW?: number[]
    headFill?: string; fontSize?: number; headFillTxt?: string; zebra?: boolean
  } = {}): number {
    const ncol = o.headers.length
    const rowH = o.rowH ?? 42
    const fs = o.fontSize ?? 14
    const headFill = o.headFill ?? C.panelB
    const colW = o.colW ?? Array(ncol).fill(w / ncol)
    const headH = 44
    if (o.title) this.ctext(x + w / 2, y - 12, o.title, { size: 17, weight: 700, fill: C.ink })
    let cx = x
    o.headers.forEach((hd, i) => {
      this.rect(cx, y, colW[i], headH, { fill: headFill, stroke: C.faint, sw: 1.3 })
      this.ctext(cx + colW[i] / 2, y + headH / 2 + 5.5, hd, { size: fs + 1, weight: 700, fill: C.ink })
      cx += colW[i]
    })
    o.rows.forEach((row, ri) => {
      const ry = y + headH + ri * rowH
      if (o.zebra !== false && ri % 2 === 1) this.rect(x, ry, w, rowH, { fill: '#f8fafc', fillOp: 0.85 })
      let rx = x
      row.forEach((cell, ci) => {
        this.rect(rx, ry, colW[ci], rowH, { stroke: C.faint, sw: 1.3 })
        this.ctext(rx + colW[ci] / 2, ry + rowH / 2 + 5.5, cell, { size: fs, weight: ci === 0 ? 700 : 500, fill: ci === 0 ? C.ink : C.sub })
        rx += colW[ci]
      })
    })
    return y + headH + o.rows.length * rowH
  }

  /** 水平时间线（events.at ∈ [0,1]；above 上/下方交错） */
  timelineH(x: number, y: number, w: number, events: Array<{ at: number; label: string; sub?: string; above?: boolean; c?: string }>, o: { title?: string } = {}): this {
    if (o.title) this.ctext(x + w / 2, y - 34, o.title, { size: 16, weight: 700, fill: C.ink })
    this.line(x, y, x + w, y, { stroke: C.sub, sw: 3, marker: 'ink' })
    events.forEach(ev => {
      const ex = x + ev.at * w
      const ec = ev.c ?? C.bad
      this.circle(ex, y, 6.5, { fill: ec })
      const dir = ev.above ? -1 : 1
      this.line(ex, y + dir * 9, ex, y + dir * 30, { stroke: ec, sw: 1.7 })
      this.ctext(ex, y + dir * 50, ev.label, { size: 14, weight: 700, fill: C.ink })
      if (ev.sub) this.ctext(ex, y + dir * 70, ev.sub, { size: 12, fill: C.mute })
    })
    return this
  }

  /** 离子/小分子球 */
  ion(cx: number, cy: number, label: string, o: { r?: number; fill?: string; stroke?: string; tfill?: string; size?: number } = {}): this {
    const r = o.r ?? 16
    this.circle(cx, cy, r, { fill: o.fill ?? C.warnL, stroke: o.stroke ?? C.warn, sw: 1.6 })
    this.ctext(cx, cy + (o.size ?? 14) * 0.36, label, { size: o.size ?? 14, weight: 700, fill: o.tfill ?? '#78350f' })
    return this
  }

  /** 磷脂双层条带 */
  bilayer(x: number, y: number, w: number, o: { h?: number; tint?: string; op?: number } = {}): this {
    const h = o.h ?? 13
    const tint = o.tint ?? C.dna
    const step = 24
    const n = Math.floor(w / step)
    const parts: string[] = []
    for (let i = 0; i <= n; i++) {
      const px = x + i * step
      parts.push(`<circle cx="${px}" cy="${y}" r="5.5" fill="${tint}" fill-opacity="${o.op ?? 0.85}"/>`)
      parts.push(`<line x1="${px}" y1="${y + 4}" x2="${px}" y2="${y + h - 4}" stroke="${tint}" stroke-width="1.5" stroke-opacity="0.7"/>`)
      parts.push(`<circle cx="${px}" cy="${y + h}" r="5.5" fill="${tint}" fill-opacity="${o.op ?? 0.85}"/>`)
    }
    this.els.push(`<g>${parts.join('')}</g>`)
    return this
  }

  /** 膜囊泡（coat 可选 'clathrin'|'cop'） */
  vesicle(cx: number, cy: number, r: number, o: ShapeOpt & { label?: string; double?: boolean; coat?: 'clathrin' | 'cop' | null; lsize?: number } = {}): this {
    this.circle(cx, cy, r, { fill: o.fill ?? C.bg, stroke: o.stroke ?? C.dna, sw: 2.4 })
    if (o.double) this.circle(cx, cy, r - 6, { stroke: (o.stroke ?? C.dna), sw: 1.2, opacity: 0.65 })
    if (o.coat === 'clathrin') this.circle(cx, cy, r + 7, { stroke: C.warn, sw: 1.9, dash: '5 4' })
    else if (o.coat === 'cop') this.circle(cx, cy, r + 7, { stroke: C.bad, sw: 1.9, dash: '5 4' })
    if (o.label) this.ctext(cx, cy + (o.lsize ?? 13.5) * 0.36, o.label, { size: o.lsize ?? 13.5, weight: 600, fill: C.ink })
    return this
  }

  /** 细胞核（核仁 + 染色质纹） */
  nucleusU(cx: number, cy: number, r: number, o: { label?: string; fill?: string; stroke?: string } = {}): this {
    this.circle(cx, cy, r, { fill: o.fill ?? C.proL, fillOp: 0.9, stroke: o.stroke ?? C.pro, sw: 2.2 })
    this.circle(cx + r * 0.35, cy - r * 0.25, r * 0.22, { fill: o.stroke ?? C.pro, fillOp: 0.4 })
    for (let i = 0; i < 3; i++) {
      const a = 0.6 + i * 1.9
      this.path(`M ${cx - r * 0.7 * Math.cos(a)},${cy + r * 0.55 * Math.sin(a)} q ${r * 0.3},${-r * 0.25} ${r * 0.6},0`, { stroke: o.stroke ?? C.pro, sw: 1.8, opacity: 0.45 })
    }
    if (o.label) this.ctext(cx, cy + r + 22, o.label, { size: 13.5, weight: 700, fill: o.stroke ?? C.pro })
    return this
  }

  /** 线粒体（嵴） */
  mito(cx: number, cy: number, w: number, h: number, o: { label?: string; fill?: string; stroke?: string } = {}): this {
    const rx = w / 2; const ry = h / 2
    const st = o.stroke ?? C.warn
    this.ellipse(cx, cy, rx, ry, { fill: o.fill ?? '#ffedd5', stroke: st, sw: 2.4 })
    const n = Math.max(3, Math.floor(w / 32))
    let d = ''
    for (let i = 0; i < n; i++) {
      const px = cx - rx + 14 + (i * (w - 28)) / (n - 1)
      d += `M ${px - 7},${cy - ry * 0.55} L ${px},${cy} L ${px + 7},${cy - ry * 0.55} `
    }
    this.path(d, { stroke: st, sw: 1.8, opacity: 0.8 })
    if (o.label) this.ctext(cx, cy + ry + 20, o.label, { size: 13.5, weight: 700, fill: st })
    return this
  }

  /** 内质网（波浪 + 核糖体点） */
  erU(x: number, y: number, w: number, h: number, o: { ribo?: boolean; label?: string; stroke?: string } = {}): this {
    const n = Math.max(4, Math.floor(w / 56))
    const amp = h * 0.3
    const st = o.stroke ?? C.dna
    let d = `M ${x},${y}`
    const step = w / n
    for (let i = 0; i < n; i++) d += ` q ${step / 2},${i % 2 === 0 ? -amp * 2 : amp * 2} ${step},0`
    this.path(d, { stroke: st, sw: 4.4, opacity: 0.75 })
    if (o.ribo !== false) {
      for (let i = 0; i <= n * 2; i++) {
        const px = x + (i * step) / 2
        const py = y + (i % 2 === 0 ? -amp * 1.1 - 5 : amp * 0.4 + 2)
        this.circle(px, py, 3.1, { fill: C.bad })
      }
    }
    if (o.label) this.ctext(x + w / 2, y - h - 6, o.label, { size: 13.5, weight: 700, fill: st })
    return this
  }

  /** 高尔基体（叠层囊） */
  golgi(cx: number, y: number, w: number, o: { label?: string; layers?: number; stroke?: string } = {}): this {
    const layers = o.layers ?? 5
    const st = o.stroke ?? C.acc
    for (let i = 0; i < layers; i++) {
      const lw = w * (0.42 + (0.58 * i) / (layers - 1))
      const ly = y + i * 13
      this.path(`M ${cx - lw / 2},${ly} q ${lw / 4},${i % 2 === 0 ? -14 : 14} ${lw / 2},0 q ${lw / 4},${i % 2 === 0 ? 14 : -14} ${lw / 2},0`, { fill: i % 2 === 0 ? '#e0f2fe' : C.bg, fillOp: 0.9, stroke: st, sw: 2 })
    }
    if (o.label) this.ctext(cx, y + layers * 13 + 22, o.label, { size: 13.5, weight: 700, fill: st })
    return this
  }

  /** 溶酶体（颗粒小球） */
  lysosome(cx: number, cy: number, r: number, o: { label?: string; fill?: string; stroke?: string } = {}): this {
    const st = o.stroke ?? C.bad
    this.circle(cx, cy, r, { fill: o.fill ?? '#fee2e2', stroke: st, sw: 2.2 })
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2
      this.circle(cx + r * 0.55 * Math.cos(a), cy + r * 0.55 * Math.sin(a), 3.3, { fill: st, fillOp: 0.7 })
    }
    if (o.label) this.ctext(cx, cy + r + 20, o.label, { size: 13.5, weight: 700, fill: st })
    return this
  }

  /** 叶绿体（类囊体垛叠） */
  chloro(cx: number, cy: number, w: number, h: number, o: { label?: string } = {}): this {
    const rx = w / 2; const ry = h / 2
    this.ellipse(cx, cy, rx, ry, { fill: '#ecfccb', stroke: C.ok, sw: 2.4 })
    for (let i = 0; i < 5; i++) {
      const px = cx - rx * 0.55 + (i * rx) / 2.6
      this.rect(px, cy - (ry * 0.62) / 2, rx / 5.2, ry * 0.62, { fill: C.ok, fillOp: 0.5, stroke: C.ok, sw: 1.3, rx: 3 })
    }
    if (o.label) this.ctext(cx, cy + ry + 20, o.label, { size: 13.5, weight: 700, fill: C.ok })
    return this
  }

  /** 核糖体（大小亚基） */
  ribo(cx: number, cy: number, o: { scale?: number; label?: string } = {}): this {
    const k = o.scale ?? 1
    this.path(`M ${cx - 15 * k},${cy + 4 * k} a ${15 * k} ${10 * k} 0 0 1 ${30 * k},0 z`, { fill: '#fee2e2', stroke: C.bad, sw: 1.9 })
    this.path(`M ${cx - 10 * k},${cy + 5 * k} a ${10 * k} ${7.5 * k} 0 0 0 ${20 * k},0 z`, { fill: '#fee2e2', stroke: C.bad, sw: 1.9 })
    if (o.label) this.ctext(cx, cy + 26 * k, o.label, { size: 12, weight: 700, fill: C.bad })
    return this
  }

  /** RNA 波浪单链 */
  rnaW(x: number, y: number, w: number, o: { amp?: number; stroke?: string; label?: string } = {}): this {
    const amp = o.amp ?? 12
    const st = o.stroke ?? C.ok
    const n = Math.max(4, Math.round(w / 38))
    let d = `M ${x},${y}`
    for (let i = 0; i < n; i++) d += ` q ${w / n / 2},${i % 2 === 0 ? -amp * 2 : amp * 2} ${w / n},0`
    this.path(d, { stroke: st, sw: 3.2, opacity: 0.8 })
    if (o.label) this.ctext(x + w / 2, y + amp + 22, o.label, { size: 13.5, weight: 700, fill: st })
    return this
  }

  /** 环状质粒（带基因标注） */
  plasmid(cx: number, cy: number, r: number, o: { label?: string; stroke?: string; genes?: string[] } = {}): this {
    const st = o.stroke ?? C.pro
    this.circle(cx, cy, r, { stroke: st, sw: 6, opacity: 0.85 })
    ;(o.genes ?? []).forEach((g, i) => {
      const a = (i / (o.genes ?? []).length) * Math.PI * 2 - Math.PI / 2
      this.ctext(cx + (r + 22) * Math.cos(a), cy + (r + 22) * Math.sin(a) + 4, g, { size: 12.5, weight: 700, fill: st })
      this.line(cx + r * Math.cos(a), cy + r * Math.sin(a), cx + (r + 11) * Math.cos(a), cy + (r + 11) * Math.sin(a), { stroke: st, sw: 1.5 })
    })
    if (o.label) this.ctext(cx, cy - r - 14, o.label, { size: 14, weight: 700, fill: st })
    return this
  }

  /** 细菌形态（flagella: none|mono|lopho|peri） */
  bacterium(cx: number, cy: number, w: number, h: number, o: {
    shape?: 'rod' | 'coccus' | 'spirillum' | 'vibrio'; label?: string
    flagella?: 'none' | 'mono' | 'lopho' | 'peri'; fill?: string; stroke?: string
  } = {}): this {
    const shape = o.shape ?? 'rod'
    const fill = o.fill ?? '#d1fae5'
    const st = o.stroke ?? '#134e4a'
    if (shape === 'rod') {
      this.rect(cx - w / 2, cy - h / 2, w, h, { fill, stroke: st, sw: 2.2, rx: h / 2 })
    } else if (shape === 'coccus') {
      this.circle(cx, cy, w / 2, { fill, stroke: st, sw: 2.2 })
    } else if (shape === 'vibrio') {
      this.path(`M ${cx - w / 2},${cy} q ${w / 4},${-h} ${w / 2},0 q ${w / 4},${h} ${w / 2},0`, { stroke: st, sw: h, opacity: 1 })
    } else {
      let d = `M ${cx - w / 2},${cy}`
      const n = 3
      for (let i = 0; i < n; i++) d += ` q ${w / n / 2},${-h * 1.6} ${w / n},0 q ${w / n / 2},${h * 1.6} ${w / n},0`
      this.path(d, { stroke: st, sw: h })
    }
    if (o.flagella && o.flagella !== 'none') {
      const flag = (fx: number, fy: number, dir: number) => {
        let d = `M ${fx},${fy}`
        for (let i = 0; i < 4; i++) d += ` q ${11 * dir},${i % 2 === 0 ? -11 : 11} ${22 * dir},0`
        this.path(d, { stroke: C.mute, sw: 1.9 })
      }
      if (o.flagella === 'mono') flag(cx + w / 2, cy, 1)
      else if (o.flagella === 'lopho') { flag(cx + w / 2, cy - h / 3, 1); flag(cx + w / 2, cy + h / 3, 1) }
      else for (let i = 0; i < 5; i++) flag(cx - w / 2, cy - h / 2 + (i * h) / 4, -1)
    }
    if (o.label) this.ctext(cx, cy + h / 2 + 26, o.label, { size: 14.5, weight: 700, fill: st })
    return this
  }

  /** 病毒颗粒（icosahedral|enveloped|helical|bullet） */
  virion(cx: number, cy: number, r: number, o: {
    shape?: 'icosahedral' | 'enveloped' | 'helical' | 'bullet'; label?: string; fill?: string; stroke?: string
  } = {}): this {
    const shape = o.shape ?? 'icosahedral'
    const st = o.stroke ?? C.bad
    const fill = o.fill ?? '#fee2e2'
    if (shape === 'icosahedral') {
      const pts: string[] = []
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2
        pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
      }
      this.els.push(`<polygon points="${pts.join(' ')}" fill="${fill}" fill-opacity="0.9" stroke="${st}" stroke-width="2.4"/>`)
      this.line(cx - r * 0.5, cy - r * 0.62, cx + r * 0.5, cy - r * 0.62, { stroke: st, sw: 1.5, opacity: 0.55 })
      this.line(cx - r * 0.87, cy, cx + r * 0.87, cy, { stroke: st, sw: 1.5, opacity: 0.55 })
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        this.line(cx + r * Math.cos(a), cy + r * Math.sin(a), cx + (r + 8) * Math.cos(a), cy + (r + 8) * Math.sin(a), { stroke: st, sw: 1.9 })
        this.circle(cx + (r + 10) * Math.cos(a), cy + (r + 10) * Math.sin(a), 3.1, { fill: st })
      }
    } else if (shape === 'enveloped') {
      this.circle(cx, cy, r, { fill, fillOp: 0.5, stroke: st, sw: 2.4 })
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2
        const x1 = cx + r * Math.cos(a); const y1 = cy + r * Math.sin(a)
        const x2 = cx + (r + 12) * Math.cos(a); const y2 = cy + (r + 12) * Math.sin(a)
        this.line(x1, y1, x2, y2, { stroke: st, sw: 2.4 })
        this.circle(x2, y2, 4.6, { fill: st })
      }
      let d = ''
      for (let i = 0; i <= 16; i++) {
        const px = cx - r * 0.55 + (i * r * 1.1) / 16
        const py = cy + r * 0.42 * Math.sin(i * 0.9)
        d += `${i === 0 ? 'M' : 'L'} ${px.toFixed(1)},${py.toFixed(1)} `
      }
      this.path(d, { stroke: st, sw: 4.4, opacity: 0.85 })
    } else if (shape === 'bullet') {
      const bw = r * 1.1; const bh = r * 1.9
      this.path(`M ${cx - bw / 2},${cy + bh / 2 - bw / 2} a ${bw / 2},${bw / 2} 0 0 1 ${bw},0 L ${cx + bw / 2},${cy - bh / 2 + bw * 0.35} q 0,${-bw * 0.35} ${-bw / 2},${-bw * 0.35} q ${-bw / 2},0 ${-bw / 2},${bw * 0.35} Z`, { fill, fillOp: 0.55, stroke: st, sw: 2.4 })
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 1.4 - Math.PI * 0.2
        const x1 = cx + (bw / 2) * Math.cos(a)
        const y1 = cy + (bh / 2 - bw * 0.3) * Math.sin(a) + bh * 0.12
        this.line(x1, y1, x1 + 11 * Math.cos(a), y1 + 11 * Math.sin(a), { stroke: st, sw: 2 })
      }
      let d = ''
      for (let i = 0; i <= 12; i++) {
        const px = cx - bw * 0.32 + (i * bw * 0.64) / 12
        const py = cy + bh * 0.1 + bw * 0.28 * Math.sin(i * 1.1)
        d += `${i === 0 ? 'M' : 'L'} ${px.toFixed(1)},${py.toFixed(1)} `
      }
      this.path(d, { stroke: st, sw: 4.2, opacity: 0.85 })
    } else {
      const bw = r * 0.9; const bh = r * 2.6
      this.rect(cx - bw / 2, cy - bh / 2, bw, bh, { fill, fillOp: 0.6, stroke: st, sw: 2.2, rx: bw / 4 })
      for (let i = 0; i < 9; i++) {
        const py = cy - bh / 2 + 9 + (i * (bh - 18)) / 8
        this.path(`M ${cx - bw / 2},${py.toFixed(1)} q ${bw / 4},${bw * 0.28} ${bw / 2},0 q ${bw / 4},${-bw * 0.28} ${bw / 2},0`, { stroke: st, sw: 2.4 })
      }
      this.line(cx, cy - bh / 2 - 9, cx, cy + bh / 2 + 9, { stroke: st, sw: 2.2, dash: '6 5' })
    }
    if (o.label) this.ctext(cx, cy + r * 2.4 + (shape === 'helical' ? r * 0.9 : 0) + 20, o.label, { size: 14.5, weight: 700, fill: st })
    return this
  }

  /** 水平花括号 + 标注 */
  braceH(x: number, y: number, w: number, o: { label?: string; flip?: boolean; fill?: string; size?: number } = {}): this {
    const c = o.fill ?? C.mute
    const dir = o.flip ? -1 : 1
    const k = 9
    this.path(`M ${x},${y + dir * k} Q ${x},${y} ${x + k},${y} M ${x + w - k},${y} Q ${x + w},${y} ${x + w},${y + dir * k}`, { stroke: c, sw: 1.7 })
    this.line(x + k, y, x + w - k, y, { stroke: c, sw: 1.7 })
    if (o.label) this.ctext(x + w / 2, y + dir * (k + 15), o.label, { size: o.size ?? 14, weight: 600, fill: c })
    return this
  }

  /** 垂直花括号 + 标注 */
  braceV(x: number, y: number, h: number, o: { label?: string; left?: boolean; fill?: string } = {}): this {
    const c = o.fill ?? C.mute
    const k = 9
    const dir = o.left ? -1 : 1
    this.path(`M ${x + dir * k},${y} Q ${x},${y} ${x},${y + k} M ${x},${y + h - k} Q ${x},${y + h} ${x + dir * k},${y + h}`, { stroke: c, sw: 1.7 })
    this.line(x, y + k, x, y + h - k, { stroke: c, sw: 1.7 })
    if (o.label) this.text(x + dir * (k + 9), y + h / 2, o.label, { size: 14, weight: 600, fill: c, anchor: o.left ? 'end' : 'start' })
    return this
  }
}

/** Catmull-Rom 平滑曲线 → cubic bezier path */
function catmullRom(pts: [number, number][]): string {
  if (pts.length < 2) return ''
  if (pts.length === 2) return `M${pts[0][0]},${pts[0][1]} L${pts[1][0]},${pts[1][1]}`
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(pts.length - 1, i + 2)]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0]},${p2[1]}`
  }
  return d
}

// ---------------- 场景装配 ----------------
export interface SceneOpt {
  title: string
  subtitle?: string
  w?: number
  h?: number
  /** 标题区高度（正文从该 y 开始） */
  head?: number
  draw: (b: B) => void
}

/** 按估算宽度把字符串断成 ≤maxLines 行（CJK 逐字断行，拉丁按词） */
function wrapLines(s: string, size: number, maxW: number, maxLines: number): string[] {
  const lines: string[] = []
  let cur = ''
  const tokens = s.split(/(?<=[，。；：、！？）,;:])\s*|(?<=[^，。；：、！？）,;:\s])\s+/)
  for (const tk of tokens.length > 1 ? tokens : s.split('')) {
    const cand = cur + tk
    if (cur && textW(cand, size) > maxW) { lines.push(cur); cur = tk } else cur = cand
  }
  if (cur) lines.push(cur)
  if (lines.length > maxLines) { // 压缩失败 → 均分
    const per = Math.ceil(s.length / maxLines)
    return Array.from({ length: maxLines }, (_, i) => s.slice(i * per, (i + 1) * per)).filter(Boolean)
  }
  return lines
}

export function scene(o: SceneOpt): string {
  const w = o.w ?? 1400
  const h = o.h ?? 1000
  const head = o.head ?? 122
  const b = new B()
  o.draw(b)
  const markers = (Object.keys(MARKER_FILL) as MarkerKey[])
    .map(k => `<marker id="arr-${k}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="${MARKER_PATH}" fill="${MARKER_FILL[k]}"/></marker>`)
    .join('\n    ')
  // ---- 标题自适应：过宽则缩字号（下限 24）----
  let tsize = 33
  if (o.title) {
    const tw = textW(o.title, tsize, 700)
    if (tw > w - 100) tsize = Math.max(24, Math.floor(((w - 100) / tw) * tsize))
  }
  // ---- 副标题自适应：过宽优先两行（字号 17–19），仍溢出则缩字号（下限 13）----
  let subLines: string[] = []
  let ssize = 19
  if (o.subtitle) {
    const maxW = w - 90
    if (textW(o.subtitle, ssize) <= maxW) subLines = [o.subtitle]
    else {
      ssize = 17
      subLines = wrapLines(o.subtitle, ssize, maxW, 2)
      while (subLines.some(ln => textW(ln, ssize) > maxW) && ssize > 13) {
        ssize--
        subLines = wrapLines(o.subtitle, ssize, maxW, 2)
      }
    }
  }
  const two = subLines.length > 1
  const tBaseline = two ? head - 84 : head - 66
  const title = o.title
    ? `<text x="${w / 2}" y="${tBaseline}" text-anchor="middle" font-size="${tsize}" font-weight="700" fill="${C.ink}">${esc(o.title)}</text>`
    : ''
  const sub = subLines.length
    ? (two
        ? `<text x="${w / 2}" y="${head - 48}" text-anchor="middle" font-size="${ssize}" fill="${C.mute}">${esc(subLines[0])}</text>\n  <text x="${w / 2}" y="${head - 22}" text-anchor="middle" font-size="${ssize}" fill="${C.mute}">${esc(subLines[1] ?? '')}</text>`
        : `<text x="${w / 2}" y="${head - 32}" text-anchor="middle" font-size="${ssize}" fill="${C.mute}">${esc(subLines[0])}</text>`)
    : ''
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Noto Serif SC, LXGW WenKai, Songti SC, serif">
  <defs>
    ${markers}
  </defs>
  <rect x="0" y="0" width="${w}" height="${h}" fill="${C.bg}"/>
  ${title}
  ${sub}
  ${b.els.join('\n  ')}
</svg>`
}

export { esc }
