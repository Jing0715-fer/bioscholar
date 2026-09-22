// sb ch12-s2 整合结构生物学方法（Task SB-4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、SAXS 三读数 ============
  b.panel(30, 132, 660, 300, { title: '一、SAXS：溶液中的整体形状账' })
  const qx0 = 70, qyB = 380, qyT = 180, qw = 330
  const qpx = (lg: number) => qx0 + ((lg + 2) / 1.7) * qw
  const qpy = (lgI: number) => qyB - ((lgI + 0.5) / 6.5) * (qyB - qyT)
  // Guinier 区底衬
  b.rect(qx0, qyT, qpx(-0.49) - qx0, qyB - qyT, { fill: C.okL, fillOp: 0.45 })
  // 散射曲线（对数-对数）
  const saxsPts: Array<[number, number]> = [
    [-2, 6], [-1.7, 5.7], [-1.5, 5.35], [-1.3, 4.75], [-1.1, 3.85], [-0.95, 3.05],
    [-0.8, 2.2], [-0.65, 1.45], [-0.5, 0.8], [-0.35, 0.2], [-0.3, 0],
  ].map(([lg, lgI]) => [qpx(lg), qpy(lgI)]) as Array<[number, number]>
  b.spline(saxsPts, { stroke: C.dna, sw: 2.8 })
  b.line(qx0, qyB, qx0 + qw + 12, qyB, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(qx0, qyB, qx0, qyT, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  for (const lg of [-2, -1.5, -1, -0.5]) {
    b.line(qpx(lg), qyB, qpx(lg), qyB - 6, { stroke: C.sub, sw: 1.3 })
    b.ctext(qpx(lg), qyB + 15, `10^{${lg.toFixed(1)}}`, { size: 9, fill: C.mute })
  }
  b.ctext(qx0 + qw / 2, qyB + 32, '散射矢量 q（nm^{-1}，对数）', { size: 10, weight: 600, fill: C.sub })
  b.ctext(qx0 - 32, (qyT + qyB) / 2, 'I(q)（对数）', { size: 10, weight: 600, fill: C.sub, rotate: -90 })
  b.ctext((qx0 + qpx(-0.49)) / 2, qyT + 14, 'Guinier 区（q·Rg 小于 1.3）', { size: 10, weight: 700, fill: C.okD })
  b.ctext(qpx(-0.42), 300, '斜率给 Rg', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(qpx(-0.62), 250, 'Porod 区 q^{-4}', { size: 9.5, weight: 700, fill: C.dnaD })
  // 右栏三读数
  b.text(430, 178, '三个核心读数', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(430, 200, 'Rg——Guinier 区以 ln I 对 q² 作图，直线斜率读出质量分布的紧凑度。', { size: 10, fill: C.sub, maxW: 235, lh: 14 })
  b.wtext(430, 244, 'Dmax——P(r) 距离分布经间接傅里叶反演（GNOM），从衰减到零处读出。', { size: 10, fill: C.sub, maxW: 235, lh: 14 })
  b.wtext(430, 288, '分子量——零角外推 I(0) 与 Porod 体积估算，判别单体与寡聚。', { size: 10, fill: C.sub, maxW: 235, lh: 14 })
  b.wtext(430, 330, 'DAMMIN/DAMMIF 珠子包络：约 20 次独立计算取平均，精度约 1–2 nm。', { size: 10, fill: C.sub, maxW: 235, lh: 14 })
  b.rect(430, 356, 240, 46, { fill: C.warnL, stroke: C.warn, sw: 1.2, rx: 7, fillOp: 0.4 })
  b.wtext(440, 374, '标度律诊断：无序链 Rg 约随残基数 0.5 次幂（Kohn 等 2004），快于折叠球的约 0.38 次幂。', { size: 9.5, fill: C.sub, maxW: 222, lh: 13 })
  b.wtext(50, 420, '实验纪律：浓度 1–10 mg/mL 做系列稀释扣除颗粒间干涉、缓冲液空白严格相减、重复曝光监测辐射损伤；CRYSOL 对拍高分辨结构检验溶液构象。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 二、距离量程尺 ============
  b.panel(710, 132, 660, 300, { title: '二、距离量程尺：多方法互补矩阵' })
  const lx = (v: number) => 860 + ((Math.log10(v) + 1) / 3) * 480
  b.line(860, 182, 1348, 182, { stroke: C.sub, sw: 2, marker: 'ink' })
  for (const v of [0.1, 1, 10, 100]) {
    b.line(lx(v), 182, lx(v), 188, { stroke: C.sub, sw: 1.6 })
    b.ctext(lx(v), 172, `${v} nm`, { size: 10, fill: C.mute })
    b.line(lx(v), 196, lx(v), 400, { stroke: C.faint, sw: 0.8, dash: '3 5', opacity: 0.5 })
  }
  const spans: Array<[string, number, number, string, string, string]> = [
    ['晶体学与电镜', 0.1, 0.5, '埃级锚点', C.ink, ''],
    ['XL-MS', 0.1, 3, '约 30 Å 上限', C.dna, ''],
    ['PRE', 1.5, 3.5, '15–35 Å', C.enz, ''],
    ['DEER', 1.5, 8, '1.5–8 nm', C.pro, ''],
    ['smFRET', 3, 8, '3–8 nm', C.rna, ''],
    ['SAXS', 1, 100, 'Rg 约 1–100 nm、Dmax', C.acc, ''],
  ]
  spans.forEach(([name, lo, hi, lab, c], i) => {
    const y = 216 + i * 32
    b.text(726, y + 4, name, { size: 11, weight: 700, fill: C.ink })
    const x1 = lx(lo), x2 = lx(hi)
    b.rect(x1, y - 8, x2 - x1, 16, { fill: `${c}22`, stroke: c, sw: 1.6, rx: 8 })
    if (x2 - x1 > textWSafe(lab, 9.5) + 16) b.ctext((x1 + x2) / 2, y + 3.5, lab, { size: 9.5, weight: 700, fill: c })
    else b.text(x2 + 8, y + 3.5, lab, { size: 9.5, weight: 700, fill: c })
  })
  b.wtext(726, 414, '样品量级：SAXS mg 级溶液；smFRET nM 级单分子（R0 约 5–6 nm）；DEER 冻结玻璃态读距离分布；XL-MS 与 HDX-MS μg 级、不挑分子量。', { size: 9.5, fill: C.sub, maxW: 630, lh: 13 })

  // ============ 三、IMP 四步与核孔复合物 ============
  b.panel(30, 452, 1340, 252, { title: '三、IMP 整合建模四步与核孔复合物成名作' })
  const imp: Array<[string, string]> = [
    ['① 表征', '把体系拆成刚体结构域与柔性串珠，各数据源映射到各自分辨率'],
    ['② 评分', '交联 30 Å 上限、SAXS 曲线、电镜密度、FRET 距离各写成概率项，加权求和成总分'],
    ['③ 采样', '蒙特卡洛及其变体在构象空间搜索高分布区'],
    ['④ 分析', '聚类、占据频次图，以留出数据交叉验证'],
  ]
  imp.forEach(([t, s], i) => {
    const y = 494 + i * 42
    b.tag(100, y, t, { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 9 })
    b.wtext(165, y - 4, s, { size: 10.5, fill: C.sub, maxW: 460, lh: 14 })
    if (i < 3) b.arrow(100, y + 15, 100, y + 27, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  })
  b.wtext(60, 668, '产出常不是单一坐标，而是一族满足约束的排布及其定位精度——「亚基 X 位于此区域、精度约 2 nm」（IMP：Sali 实验室，Russel 等 2012）。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  // 核孔复合物环
  b.circle(950, 585, 92, { fill: C.proL, stroke: C.pro, sw: 2.6, fillOp: 0.35 })
  b.circle(950, 585, 46, { fill: '#ffffff', stroke: C.pro, sw: 1.8 })
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2
    b.line(950 + 46 * Math.cos(a), 585 + 46 * Math.sin(a), 950 + 92 * Math.cos(a), 585 + 92 * Math.sin(a), { stroke: C.pro, sw: 1.6, opacity: 0.6 })
    b.circle(950 + 92 * Math.cos(a), 585 + 92 * Math.sin(a), 11, { fill: C.pro, stroke: '#ffffff', sw: 1.4 })
  }
  b.ctext(950, 590, '核孔复合物', { size: 12, weight: 700, fill: C.proD })
  b.ctext(950, 608, '酵母约 55 MDa', { size: 10, fill: C.sub })
  b.ctext(950, 624, '人约 110 MDa', { size: 10, fill: C.sub })
  b.wtext(1075, 500, '单一方法吞不下的巨物：Alber 等 2007 年把免疫电镜定位、冷冻电镜外形与各类距离数据交给 IMP，整合出约 5 nm 精度的整体排布——整合建模的成名之作。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(1075, 586, '此后交联质谱拓扑与各核孔蛋白结构域的晶体结构陆续拼入；2022 年数项互补研究把人源环区推至埃级。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(1075, 646, '拼图要义：每块拼图的精度须与声称的分辨率匹配——约 30 Å 的交联钉不住埃级细节。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })

  // ============ 四、XL-MS 与 HDX-MS ============
  b.panel(30, 724, 1340, 178, { title: '四、XL-MS 与 HDX-MS：质谱加入结构生物学的两个入口' })
  // XL-MS
  b.rect(50, 748, 610, 138, { fill: C.dnaL, stroke: C.dna, sw: 1.3, rx: 8, fillOp: 0.35 })
  b.ellipse(140, 806, 62, 34, { fill: '#ffffff', stroke: C.dna, sw: 1.8 })
  b.ctext(140, 810, '亚基 A', { size: 11, weight: 700, fill: C.dnaD })
  b.ellipse(395, 806, 62, 34, { fill: '#ffffff', stroke: C.dna, sw: 1.8 })
  b.ctext(395, 810, '亚基 B', { size: 11, weight: 700, fill: C.dnaD })
  b.circle(198, 794, 8, { fill: C.enz })
  b.ctext(198, 776, 'K', { size: 10, weight: 700, fill: C.enz })
  b.circle(340, 816, 8, { fill: C.enz })
  b.ctext(340, 838, 'K', { size: 10, weight: 700, fill: C.enz })
  b.line(198, 794, 340, 816, { stroke: C.enz, sw: 2, dash: '6 4' })
  b.ctext(269, 782, 'Cα–Cα 上限约 30 Å', { size: 10.5, weight: 700, fill: C.enz })
  b.tag(269, 856, 'DSS/BS³ 间隔臂约 11.4 Å', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: C.warnD, pad: 7 })
  b.wtext(480, 780, 'NHS 酯进攻赖氨酸 ε-氨基与蛋白 N 端；交联蛋白酶解后以 LC-MS/MS 鉴定（假发现率约百分之一量级）——「哪个赖氨酸挨着哪个赖氨酸」即拓扑约束网。', { size: 10, fill: C.sub, maxW: 168, lh: 13.5 })
  // HDX-MS
  b.rect(680, 748, 650, 138, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 8, fillOp: 0.35 })
  b.text(698, 770, 'HDX-MS 保护图谱（逐肽氘掺入）', { size: 12, weight: 700, fill: C.accD })
  const hdxH = [34, 40, 46, 42, 36, 28, 22, 12, 8, 6, 9, 14, 24, 32, 40, 44, 38, 30, 20, 12]
  hdxH.forEach((h, i) => {
    b.rect(700 + i * 30, 838 - h, 24, h, { fill: h < 12 ? C.bad : C.acc, fillOp: 0.75, stroke: C.accD, sw: 1, rx: 3 })
  })
  b.line(698, 838, 1308, 838, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(906, 842, 122, 16, { fill: 'none', stroke: C.bad, sw: 1.4, dash: '4 3', rx: 4 })
  b.ctext(967, 856, '表位：氘进不来', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(1004, 858, '氘掺入时间窗：秒至小时', { size: 9.5, fill: C.mute })
  b.wtext(1130, 782, '骤冷猝灭、蛋白酶水解、逐肽读出——保护图谱定位表位与变构传导路径。', { size: 10, fill: C.sub, maxW: 186, lh: 13.5 })
  b.ctext(700, 934, '一个量「谁挨着谁」、一个量「谁被保护」——质谱从两个入口加入结构生物学，再交由整合建模拼合', { size: 11, weight: 600, fill: C.mute })
}

/** 估算文本宽（避免引入非导出符号） */
function textWSafe(s: string, size: number): number {
  let w = 0
  for (const ch of s) w += /[\u2E80-\u9FFF]/.test(ch) ? size : size * 0.55
  return w
}

export default scene({
  title: '整合结构生物学：距离量程尺与概率拼图',
  subtitle: 'SAXS 三读数、包络约 1–2 nm；无序链 Rg 按残基数 0.5 次幂；smFRET 3–8 nm；DEER 1.5–8 nm；交联 Cα 上限约 30 Å；IMP 整合',
  draw,
})
