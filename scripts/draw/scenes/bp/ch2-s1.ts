// bp ch2-s1 Anfinsen 实验与折叠的自组织原理（39-e 批1）
import { scene, C, B } from '../../lib'

const walk = (cx: number, cy: number, n: number, step: number, maxR: number, seed: number): Array<[number, number]> => {
  let sd = seed
  const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647 }
  let x = 0, y = 0
  const pts: Array<[number, number]> = [[cx, cy]]
  for (let i = 0; i < n; i++) {
    let a = rnd() * Math.PI * 2
    if (Math.hypot(x, y) > maxR) a = Math.atan2(-y, -x) + (rnd() - 0.5) * 1.5
    x += step * Math.cos(a); y += step * Math.sin(a)
    pts.push([cx + x, cy + y])
  }
  return pts
}

// 二硫键（S–S）标记
const ss = (b: B, x: number, y: number) => {
  b.circle(x - 5, y, 4, { fill: '#fef3c7', stroke: '#b45309', sw: 1.3 })
  b.circle(x + 5, y, 4, { fill: '#fef3c7', stroke: '#b45309', sw: 1.3 })
  b.line(x - 1.2, y, x + 1.2, y, { stroke: '#b45309', sw: 2.2 })
}

const draw = (b: B) => {
  // ============ 一、RNase A 变性—复性实验 ============
  b.panel(30, 132, 1340, 400, { title: '一、Anfinsen 实验：RNase A 的变性—复性（获 1972 年诺贝尔化学奖）' })
  // 三个阶段区
  b.rect(60, 185, 340, 230, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.4, rx: 10 })
  b.rect(460, 185, 340, 230, { fill: C.badL, fillOp: 0.38, stroke: C.bad, sw: 1.4, rx: 10 })
  b.rect(860, 185, 470, 230, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.4, rx: 10 })
  b.ctext(230, 212, '① 天然态（有活性）', { size: 12, weight: 700, fill: C.ok })
  b.ctext(630, 212, '② 完全去折叠、失活', { size: 12, weight: 700, fill: C.bad })
  b.ctext(1095, 212, '③ 复性：自发重新氧化', { size: 12, weight: 700, fill: C.ok })
  // 阶段 1：天然球
  b.ellipse(230, 290, 55, 42, { fill: C.proL, stroke: C.pro, sw: 2.4 })
  b.ctext(230, 287, 'RNase A', { size: 12, weight: 700, fill: C.proD })
  b.ctext(230, 305, '124 个氨基酸', { size: 9.5, fill: C.sub })
  ss(b, 196, 272); ss(b, 265, 265); ss(b, 197, 315); ss(b, 263, 312)
  b.ctext(230, 350, 'S–S × 4（链内二硫键）', { size: 9.5, fill: '#78350f' })
  // 阶段 2：去折叠链
  const wu = walk(630, 295, 55, 11, 58, 5)
  b.polyline(wu, { stroke: C.bad, sw: 1.8 })
  wu.forEach(([px, py], i) => { if (i % 7 === 3) b.circle(px, py, 4, { fill: '#fef3c7', stroke: '#b45309', sw: 1.2 }) })
  // 阶段 3：复性球
  b.ellipse(1095, 290, 55, 42, { fill: C.okL, stroke: C.ok, sw: 2.4 })
  b.ctext(1095, 287, '天然构象', { size: 12, weight: 700, fill: C.ok })
  b.ctext(1095, 305, '自发重氧化', { size: 9.5, fill: C.sub })
  ss(b, 1061, 272); ss(b, 1130, 265); ss(b, 1062, 315); ss(b, 1128, 312)
  b.tag(1095, 350, '几乎全部催化活性恢复', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 7 })
  // 转移箭头
  b.arrow(406, 290, 452, 290, { stroke: C.ink, sw: 3, marker: 'ink' })
  b.ctext(428, 268, '8 mol/L 尿素', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(428, 318, '＋β-巯基乙醇', { size: 9.5, fill: C.bad })
  b.arrow(806, 290, 852, 290, { stroke: C.ink, sw: 3, marker: 'ink' })
  b.ctext(830, 268, '透析去除', { size: 9.5, weight: 700, fill: C.ok })
  b.ctext(830, 318, '变性剂', { size: 9.5, fill: C.ok })
  // 阶段说明
  b.ctext(230, 388, '牛胰核糖核酸酶', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(230, 406, '含 4 个链内二硫键', { size: 10, fill: C.mute })
  b.ctext(630, 388, '二硫键还原为游离 –SH', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(630, 406, '非共价相互作用被破坏', { size: 10, fill: C.mute })
  b.ctext(1095, 388, '无需模板或外部指令', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(1095, 406, '自由能极小的自组织结果', { size: 10, fill: C.mute })
  // 底部两个结论框
  b.rect(60, 438, 640, 76, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.4, rx: 9 })
  b.text(76, 462, '热力学假说（Anfinsen）', { size: 12, weight: 700, fill: C.dnaD })
  b.text(76, 484, '天然三维结构由氨基酸一级序列唯一决定，是体系自由能的极小状态；', { size: 10.5, fill: C.sub })
  b.text(76, 502, '折叠是自组织（self-organization）过程，不需要额外模板或外部指令。', { size: 10.5, fill: C.sub })
  b.rect(720, 438, 620, 76, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.4, rx: 9 })
  b.text(736, 462, '体内折叠需要酶学辅助', { size: 12, weight: 700, fill: '#78350f' })
  b.text(736, 484, '随机氧化会产生二硫键错配的 scrambled 中间体；', { size: 10.5, fill: C.sub })
  b.text(736, 502, '需蛋白质二硫键异构酶（PDI）等催化校正，以避免错配与聚集。', { size: 10.5, fill: C.sub })

  // ============ 二、Levinthal 悖论 ============
  b.panel(30, 552, 660, 410, { title: '二、Levinthal 悖论（1969）：折叠不可能是随机搜索' })
  b.wtext(60, 608, 'Cyrus Levinthal 算了一笔账：设每个氨基酸仅有 3 种构象状态，一条 100 肽的构象总数即为——', { size: 11, fill: C.sub, maxW: 600, lh: 16 })
  b.text(60, 672, '3¹⁰⁰ ≈ 10⁴⁸ 种构象', { size: 18, weight: 700, fill: C.ink })
  b.text(60, 700, '即使每尝试一个构象仅需 10⁻¹³ s，遍历全部构象也需要约 10³⁵ s：', { size: 11, fill: C.sub })
  // 三个时间尺度对比框
  b.rect(60, 725, 190, 60, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 9 })
  b.ctext(155, 750, '≈ 10³⁵ s', { size: 14, weight: 700, fill: C.bad })
  b.ctext(155, 772, '10⁴⁸ 构象 × 10⁻¹³ s', { size: 9, fill: C.mute })
  b.ctext(277, 756, '≫', { size: 22, weight: 700, fill: C.ink })
  b.rect(300, 725, 170, 60, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 9 })
  b.ctext(385, 750, '≈ 10¹⁷ s', { size: 14, weight: 700, fill: C.rna })
  b.ctext(385, 772, '宇宙年龄', { size: 9.5, fill: C.mute })
  b.ctext(497, 756, '≫', { size: 22, weight: 700, fill: C.ink })
  b.rect(520, 725, 170, 60, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 9 })
  b.ctext(605, 750, '10⁻³ – 1 s', { size: 14, weight: 700, fill: C.ok })
  b.ctext(605, 772, '实际折叠（毫秒—秒级）', { size: 9, fill: C.mute })
  // 结论框
  b.rect(60, 820, 630, 120, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(76, 848, '结论：折叠必须沿「下坡」通道进行', { size: 13, weight: 700, fill: C.ink })
  b.wtext(76, 874, '折叠不可能是盲目随机搜索，而必须沿能量面上大幅收窄的「下坡」通道进行——这一悖论直接催生了能量景观理论（右图漏斗）。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(76, 918, '随机搜索远超宇宙年龄，真实折叠仅需毫秒—秒级，两者相差数十个数量级。', { size: 10.5, fill: C.mute, maxW: 590, lh: 15 })

  // ============ 三、能量漏斗 ============
  b.panel(710, 552, 660, 410, { title: '三、折叠能量漏斗：从 10⁴⁸ 构象到唯一天然态' })
  b.ctext(1040, 622, '去折叠态集合：~10⁴⁸ 个构象（高构象熵、高自由能）', { size: 11.5, weight: 700, fill: C.proD })
  // 漏斗主体
  b.path('M 770,655 C 830,770 950,855 1035,890 L 1045,890 C 1130,855 1250,770 1310,655 Z', { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 2.4 })
  b.ellipse(1040, 655, 270, 17, { fill: C.proL, stroke: C.pro, sw: 2 })
  // 等能环（自上而下变窄）
  b.ellipse(1040, 708, 235, 12, { fill: 'none', stroke: C.pro, sw: 1.3, dash: '5 4', opacity: 0.65 })
  b.ellipse(1040, 758, 185, 10, { fill: 'none', stroke: C.pro, sw: 1.3, dash: '5 4', opacity: 0.65 })
  b.ellipse(1040, 808, 128, 8, { fill: 'none', stroke: C.pro, sw: 1.3, dash: '5 4', opacity: 0.65 })
  b.ellipse(1040, 852, 62, 6, { fill: 'none', stroke: C.pro, sw: 1.3, dash: '5 4', opacity: 0.65 })
  // 下坡通道
  b.polyline([[1040, 675], [975, 710], [1085, 750], [995, 790], [1055, 832], [1040, 878]], { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.text(860, 780, '下坡通道', { size: 10.5, weight: 700, fill: C.enzD, anchor: 'end' })
  b.line(864, 776, 992, 788, { stroke: C.enz, sw: 1.2, dash: '3 3' })
  b.tag(880, 672, '构象熵大', { fill: C.bg, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 6 })
  // 自由能轴
  b.arrow(733, 640, 733, 895, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.text(722, 768, '自由能 G', { size: 11, weight: 700, fill: C.sub, anchor: 'end' })
  // 天然态
  b.circle(1040, 893, 8, { fill: C.ok, stroke: C.ok, sw: 1.5 })
  b.ctext(1040, 925, '天然态：唯一自由能极小', { size: 11.5, weight: 700, fill: C.ok })
  b.wtext(730, 950, 'Anfinsen 原理是结构生物学的理论基石：由序列预测结构、由结构解释功能；朊病毒为序列相同而构象可遗传的例外。', { size: 10, fill: C.mute, maxW: 630, lh: 13 })
}

export default scene({
  title: 'Anfinsen 实验与折叠自组织：从序列到唯一天然态',
  subtitle: 'RNase A（124 aa、4 个二硫键）经 8 mol/L 尿素+β-巯基乙醇变性后透析复性、活性几乎全恢复（1972 诺奖）；Levinthal 悖论 3¹⁰⁰≈10⁴⁸ 构象 vs 毫秒级折叠 → 能量漏斗下坡通道',
  draw,
})
