// bp ch9-s2 荧光蛋白与标记技术（39-e 收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、GFP：β 桶与自催化发色团 ============
  b.panel(30, 132, 660, 430, { title: '一、GFP：β 桶包埋自催化成熟的发色团' })
  b.ctext(190, 192, 'GFP（绿色荧光蛋白，238 个氨基酸）', { size: 11, weight: 700, fill: C.ink })
  // β 桶
  b.path('M 100,220 L 100,420 A 90,20 0 0 0 280,420 L 280,220 Z', { fill: C.panelB, stroke: C.dna, sw: 2.2 })
  b.ellipse(190, 220, 90, 20, { fill: C.bg, stroke: C.dna, sw: 2.2 })
  for (let i = 0; i < 9; i++) {
    const sx = 108 + i * 20.5
    b.line(sx, 228, sx + (i % 2 === 0 ? 5 : -5), 414, { stroke: C.dna, sw: 1.5, opacity: 0.65 })
  }
  // 桶心生色团
  b.circle(190, 320, 26, { fill: C.okL, fillOp: 0.5 })
  b.circle(178, 320, 6, { fill: C.ok, stroke: C.okD, sw: 1 })
  b.circle(190, 311, 6, { fill: C.ok, stroke: C.okD, sw: 1 })
  b.circle(202, 320, 6, { fill: C.ok, stroke: C.okD, sw: 1 })
  b.line(184, 314, 178, 317, { stroke: C.okD, sw: 1.4 })
  b.line(196, 314, 202, 317, { stroke: C.okD, sw: 1.4 })
  b.ctext(190, 460, '11 条 β 折叠围成桶状结构', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(190, 482, '生色团包埋于桶心：Ser65–Tyr66–Gly67', { size: 10, fill: C.sub })
  b.ctext(190, 504, '桶壁保护发色团免遭淬灭、锁定刚性 → 量子产额高', { size: 10, fill: C.sub })
  b.tag(190, 535, '来自维多利亚多管水母 · 无需任何外源辅因子', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 9 })
  // 右：成熟三步 + 光谱
  b.text(305, 200, '生色团自催化成熟：环化 → 氧化 → 脱水', { size: 12, weight: 700, fill: C.ink })
  b.tag(475, 240, '① 环化', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.arrow(475, 258, 475, 280, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(475, 300, '② 氧化', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.arrow(475, 318, 475, 340, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(475, 360, '③ 脱水', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.arrow(216, 340, 382, 406, { stroke: C.ok, sw: 1.8, marker: 'ok', dash: '5 4' })
  b.tag(475, 412, 'HBI 发色团（对羟苄基咪唑啉酮）', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.text(330, 438, '天然 GFP 光谱：激发 395 / 475 nm、发射 509 nm', { size: 10.5, weight: 700, fill: C.ink })
  b.axis(330, 530, 300, 85, {
    xticks: [[0.317, '395'], [0.583, '475'], [0.697, '509']],
    yticks: [],
  })
  b.curve(330, 530, 300, 85, [
    [0.05, 0.05], [0.2, 0.22], [0.317, 0.85], [0.38, 0.5], [0.45, 0.3], [0.583, 0.55], [0.65, 0.35], [0.72, 0.15], [0.85, 0.08], [1, 0.05],
  ], { stroke: C.acc, sw: 2.4 })
  b.curve(330, 530, 300, 85, [
    [0.45, 0.02], [0.55, 0.1], [0.63, 0.45], [0.697, 1], [0.76, 0.6], [0.85, 0.25], [1, 0.08],
  ], { stroke: C.ok, sw: 2.4 })
  b.text(360, 470, '激发', { size: 9.5, weight: 700, fill: C.accD })
  b.text(580, 470, '发射', { size: 9.5, weight: 700, fill: C.okD })

  // ============ 二、FRET 分子尺 ============
  b.panel(710, 132, 660, 430, { title: '二、FRET：E = 1/(1+(r/R₀)⁶)——纳米级「分子尺」' })
  b.circle(800, 225, 24, { fill: C.proL, stroke: C.pro, sw: 2.5 })
  b.ctext(800, 229, '供体 D', { size: 10, weight: 700, fill: C.proD })
  b.circle(1060, 225, 24, { fill: C.enzL, stroke: C.enz, sw: 2.5 })
  b.ctext(1060, 229, '受体 A', { size: 10, weight: 700, fill: C.enzD })
  b.line(828, 225, 1032, 225, { stroke: C.mute, sw: 1.6, dash: '6 4', marker: 'mute', markerStart: 'mute' })
  b.ctext(944, 208, 'r', { size: 13, weight: 700, italic: true, fill: C.ink })
  b.path('M 832,198 C 890,180 970,180 1028,198', { stroke: C.ok, sw: 2.2, marker: 'ok', fill: 'none' })
  b.ctext(944, 174, '能量转移（偶极–偶极）', { size: 9.5, weight: 700, fill: C.okD })
  b.tag(1040, 292, 'E = 1 / (1 + (r/R₀)⁶)', { fill: C.accL, stroke: C.acc, size: 13, weight: 700, tfill: C.accD, pad: 12 })
  b.axis(740, 520, 580, 210, {
    ylabel: 'FRET 效率 E',
    xlabel: '供体–受体间距 r（以 Förster 半径 R₀ 为单位）',
    yticks: [[0, '0'], [0.5, '0.5'], [1, '1.0']],
    xticks: [[0.333, 'R₀'], [0.667, '2R₀'], [1, '3R₀']],
  })
  const fret: Array<[number, number]> = []
  for (let i = 0; i <= 40; i++) {
    const x = (i / 40) * 3
    fret.push([x / 3, 1 / (1 + Math.pow(x, 6))])
  }
  b.curve(740, 520, 580, 210, fret, { stroke: C.dna, sw: 3 })
  b.line(933, 310, 933, 520, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.line(740, 415, 933, 415, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.circle(933, 415, 5, { fill: C.dnaD })
  b.tag(1064, 398, 'r = R₀ 时 E = 50%', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.line(996, 402, 940, 412, { stroke: C.mute, sw: 1.2 })
  b.text(730, 552, 'E ∝ r⁻⁶：距离稍增、效率陡降——环化 FRET 传感器可读出活细胞内的构象与活性。', { size: 10, weight: 600, fill: C.sub })

  // ============ 三、调色板与标记工具折中 ============
  b.panel(30, 592, 1340, 388, { title: '三、荧光蛋白调色板与标记工具的物理折中' })
  b.text(50, 628, '蛋白质工程改造出整套调色板：', { size: 12.5, weight: 700, fill: C.ink })
  const palette: Array<[string, string]> = [
    ['EBFP', '#4a6fd0'], ['CFP', '#6ec6e0'], ['GFP', '#22a55e'], ['YFP', '#e6c94c'], ['mCherry', '#d0453e'],
  ]
  palette.forEach(([lab, col], i) => {
    const px = 60 + i * 96
    b.rect(px, 648, 88, 40, { fill: col, fillOp: 0.85, stroke: C.line, sw: 1, rx: 6 })
    b.ctext(px + 44, 706, lab, { size: 10.5, weight: 700, fill: C.sub })
  })
  b.tag(150, 748, '光激活 PA-GFP', { fill: C.accL, stroke: C.acc, size: 9.5, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(330, 748, '光转换 Kaede / Eos（绿→红）', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 8 })
  b.text(50, 784, '天然 GFP：395 / 475 nm 激发、509 nm 发射；YFP＝T203Y', { size: 10, fill: C.sub })
  b.text(50, 806, 'mCherry / mPlum 源自珊瑚 Discosoma 的 DsRed 经单体化改造', { size: 10, fill: C.sub })
  b.tag(210, 838, '光激活 / 光转换变体——超分辨显微的原料', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 9 })
  b.tag(190, 872, '2008 年诺贝尔化学奖：下村脩 · Chalfie · 钱永健', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 10 })
  b.wtext(50, 908, 'GFP 与目标蛋白基因融合，使「在活细胞中看指定分子」成为常规操作；量子点（2–10 nm）发射峰随晶粒尺寸可调（量子限制效应：晶粒越小、带隙越宽、发射越蓝），光稳定性远超有机染料——但体积大、间歇闪烁、潜在重金属毒性。', { size: 10, fill: C.mute, maxW: 620, lh: 14 })
  // 右表
  b.ctext(1005, 630, '标记技术的物理化学折中', { size: 13, weight: 700, fill: C.ink })
  b.table(680, 650, 650, {
    headers: ['标签', '典型尺寸', '亮度与稳定性', '可编码', '主要应用'],
    colW: [110, 120, 160, 80, 180],
    fontSize: 11,
    rowH: 46,
    rows: [
      ['有机荧光染料', '~1 nm', '极亮、易漂白', '否', '免疫染色、单分子 FRET'],
      ['荧光蛋白', '~4 nm×2.5 nm', '中等', '是', '活细胞融合表达'],
      ['量子点', '5–10 nm', '极稳定、宽吸收', '否', '长时程追踪、多重标记'],
    ],
  })
  b.wtext(680, 872, '标记选择＝亮度—光稳定性—尺寸—特异性—功能干扰的多目标折中；免疫荧光以一抗识别抗原、荧光二抗放大信号，可定位内源蛋白（多重染色 3–4 种目标），但需固定、无法活体观察。', { size: 10, fill: C.sub, maxW: 640, lh: 14 })
}

export default scene({
  title: '荧光蛋白与标记技术：GFP β 桶、FRET 分子尺与工具折中',
  subtitle: 'GFP 238 aa、11 条 β 折叠成桶，S65–Y66–G67 自催化（环化→氧化→脱水）成 HBI；激发 395/475 nm、发射 509 nm；FRET 效率 E=1/(1+(r/R₀)⁶)，r=R₀ 时 E=50%；染料 ~1 nm / 荧光蛋白 ~4 nm / 量子点 5–10 nm',
  draw,
})
