/**
 * 将多张 RCSB CCD 结构 SVG 合成为一张多联组图（nested SVG + 中文标签）
 *
 * 产出：public/images/bio/structures/composite-{name}.svg
 * 每个面板为 2500×2500 的 CCD 渲染，下方为分类配色标签。
 *
 * 用法：bun scripts/compose-figure-panels.ts
 */
import { readFile, writeFile } from 'node:fs/promises'

const DIR = 'public/images/bio/structures'

/** 单个面板定义 */
interface Panel {
  code: string
  label: string
  color?: string
}

/** 组图定义 */
interface Composite {
  name: string
  cols: number
  panels: Panel[]
}

/** 标签类别色（与站点学科色系一致的学术低饱和色） */
const C = {
  nonpolar: '#57534e', // 非极性（石岩灰）
  polar: '#0f766e', // 极性不带电（深青）
  acid: '#be123c', // 酸性（玫红）
  base: '#6d28d9', // 碱性（深紫）
  plain: '#1c1917', // 中性标签
}

const COMPOSITES: Composite[] = [
  // ================= 生物化学 ch1 单糖 =================
  {
    name: 'glucose-anomers',
    cols: 3,
    panels: [
      { code: 'GLC', label: 'α-D-吡喃葡萄糖', color: C.plain },
      { code: 'BGC', label: 'β-D-吡喃葡萄糖', color: C.plain },
      { code: 'FRU', label: 'β-D-呋喃果糖', color: C.plain },
    ],
  },
  {
    name: 'common-monosaccharides',
    cols: 4,
    panels: [
      { code: 'GAL', label: 'β-D-半乳糖', color: C.plain },
      { code: 'MAN', label: 'α-D-甘露糖', color: C.plain },
      { code: 'RIB', label: 'α-D-核糖', color: C.plain },
      { code: 'XYS', label: 'α-D-木糖', color: C.plain },
    ],
  },
  // ================= 生物化学 ch2 脂质 =================
  {
    name: 'fatty-acids',
    cols: 3,
    panels: [
      { code: 'MYR', label: '豆蔻酸 14:0', color: C.nonpolar },
      { code: 'PLM', label: '棕榈酸 16:0', color: C.nonpolar },
      { code: 'STE', label: '硬脂酸 18:0', color: C.nonpolar },
      { code: 'PAM', label: '棕榈油酸 16:1', color: C.polar },
      { code: 'OLA', label: '油酸 18:1 Δ9', color: C.polar },
    ],
  },
  {
    name: 'membrane-lipids',
    cols: 3,
    panels: [
      { code: 'PCW', label: '甘油磷脂（磷脂酰胆碱）', color: C.plain },
      { code: 'SPH', label: '鞘氨醇', color: C.plain },
      { code: 'CLR', label: '胆固醇', color: C.plain },
    ],
  },
  // ================= 生物化学 ch3 氨基酸（5×4 分类网格） =================
  {
    name: 'amino-acids-grid',
    cols: 5,
    panels: [
      { code: 'GLY', label: '甘氨酸 Gly', color: C.nonpolar },
      { code: 'ALA', label: '丙氨酸 Ala', color: C.nonpolar },
      { code: 'VAL', label: '缬氨酸 Val', color: C.nonpolar },
      { code: 'LEU', label: '亮氨酸 Leu', color: C.nonpolar },
      { code: 'ILE', label: '异亮氨酸 Ile', color: C.nonpolar },
      { code: 'MET', label: '甲硫氨酸 Met', color: C.nonpolar },
      { code: 'PHE', label: '苯丙氨酸 Phe', color: C.nonpolar },
      { code: 'TRP', label: '色氨酸 Trp', color: C.nonpolar },
      { code: 'PRO', label: '脯氨酸 Pro', color: C.nonpolar },
      { code: 'SER', label: '丝氨酸 Ser', color: C.polar },
      { code: 'THR', label: '苏氨酸 Thr', color: C.polar },
      { code: 'CYS', label: '半胱氨酸 Cys', color: C.polar },
      { code: 'ASN', label: '天冬酰胺 Asn', color: C.polar },
      { code: 'GLN', label: '谷氨酰胺 Gln', color: C.polar },
      { code: 'TYR', label: '酪氨酸 Tyr', color: C.polar },
      { code: 'ASP', label: '天冬氨酸 Asp', color: C.acid },
      { code: 'GLU', label: '谷氨酸 Glu', color: C.acid },
      { code: 'LYS', label: '赖氨酸 Lys', color: C.base },
      { code: 'ARG', label: '精氨酸 Arg', color: C.base },
      { code: 'HIS', label: '组氨酸 His', color: C.base },
    ],
  },
  // ================= 生物化学 ch6 维生素与辅酶 =================
  {
    name: 'vitamins-b1-b2-b3-b5',
    cols: 4,
    panels: [
      { code: 'TPP', label: '焦磷酸硫胺素（B1 辅酶）', color: C.plain },
      { code: 'RBF', label: '核黄素（B2）', color: C.plain },
      { code: 'NCA', label: '烟酰胺（B3）', color: C.plain },
      { code: 'COA', label: '辅酶 A（含泛酸 B5）', color: C.plain },
    ],
  },
  {
    name: 'vitamins-b6-b7-b9-b12-c',
    cols: 5,
    panels: [
      { code: 'PLP', label: '磷酸吡哆醛（B6）', color: C.plain },
      { code: 'BTN', label: '生物素（B7）', color: C.plain },
      { code: 'FOL', label: '叶酸（B9）', color: C.plain },
      { code: 'B12', label: '钴胺素（B12）', color: C.plain },
      { code: 'ASC', label: '抗坏血酸（C）', color: C.plain },
    ],
  },
  {
    name: 'vitamins-fat-soluble',
    cols: 5,
    panels: [
      { code: 'BCR', label: 'β-胡萝卜素（A 原）', color: C.plain },
      { code: 'RTL', label: '视黄醇（A）', color: C.plain },
      { code: 'VDY', label: '骨化三醇（D 活性形式）', color: C.plain },
      { code: 'VIT', label: '生育酚（E）', color: C.plain },
      { code: 'PQN', label: '叶绿醌（K1）', color: C.plain },
    ],
  },
  // ================= 生物化学 ch7 核酸化学 =================
  {
    name: 'nitrogenous-bases',
    cols: 5,
    panels: [
      { code: 'ADE', label: '腺嘌呤 A', color: C.polar },
      { code: 'GUN', label: '鸟嘌呤 G', color: C.polar },
      { code: 'CYT', label: '胞嘧啶 C', color: C.acid },
      { code: 'URA', label: '尿嘧啶 U', color: C.acid },
      { code: 'TDR', label: '胸腺嘧啶 T', color: C.acid },
    ],
  },
  {
    name: 'nucleoside-to-nucleotide',
    cols: 2,
    panels: [
      { code: 'ADN', label: '腺苷（核苷 = 碱基 + 核糖）', color: C.plain },
      { code: 'AMP', label: '腺苷酸（核苷酸 = 核苷 + 磷酸）', color: C.plain },
    ],
  },
  // ================= 生物化学 ch8 辅酶与高能化合物 =================
  {
    name: 'redox-coenzymes',
    cols: 3,
    panels: [
      { code: 'NAD', label: 'NAD⁺（氧化型）', color: C.polar },
      { code: 'NAI', label: 'NADH（还原型）', color: C.base },
      { code: 'FAD', label: 'FAD', color: C.plain },
    ],
  },
]

const CELL = 2500 // CCD viewBox
const LABEL_H = 330 // 标签区高度
const GAP_X = 90
const GAP_Y = 60
const PAD = 40

const FONT =
  "Georgia, 'Times New Roman', 'Songti SC', 'Noto Serif SC', 'SimSun', serif"

/** 提取 CCD SVG 的内部内容（去掉 XML 声明/DOCTYPE），返回可嵌套片段 */
function innerSvg(svgText: string): string {
  const start = svgText.indexOf('<svg')
  const end = svgText.lastIndexOf('</svg>')
  if (start < 0 || end < 0) throw new Error('malformed svg')
  const openEnd = svgText.indexOf('>', start) + 1
  return svgText.slice(openEnd, end)
}

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

async function main() {
  for (const comp of COMPOSITES) {
    const { name, cols, panels } = comp
    const rows = Math.ceil(panels.length / cols)
    const W = cols * CELL + (cols - 1) * GAP_X + PAD * 2
    const H = rows * (CELL + LABEL_H) + (rows - 1) * GAP_Y + PAD * 2

    let body = ''
    for (let i = 0; i < panels.length; i++) {
      const p = panels[i]
      const col = i % cols
      const row = Math.floor(i / cols)
      const x = PAD + col * (CELL + GAP_X)
      const y = PAD + row * (CELL + LABEL_H + GAP_Y)

      const raw = await readFile(`${DIR}/${p.code}.svg`, 'utf-8')
      const inner = innerSvg(raw)
      body += `  <svg x="${x}" y="${y}" width="${CELL}" height="${CELL}" viewBox="0 0 ${CELL} ${CELL}">${inner}</svg>\n`
      // 面板标签
      const labelY = y + CELL + 230
      body += `  <text x="${x + CELL / 2}" y="${labelY}" text-anchor="middle" font-family="${FONT}" font-size="210" fill="${p.color ?? C.plain}">${esc(p.label)}</text>\n`
    }

    const out = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="${FONT}">
 <rect width="${W}" height="${H}" fill="#ffffff"/>
${body}</svg>
`
    await writeFile(`${DIR}/composite-${name}.svg`, out, 'utf-8')
    console.log(
      `✓ composite-${name}.svg  ${panels.length} 面板 ${cols}×${rows}  (${W}×${H})`
    )
  }
}

main()
