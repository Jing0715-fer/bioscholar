// bp 遗留重绘：静息膜电位的离子基础（原手绘 SVG 重构为 scene 化，slug: resting-membrane-potential）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、跨膜区：细胞外液 / 膜 / 细胞质 ============
  b.rect(30, 146, 1340, 268, { fill: C.accL, fillOp: 0.4, rx: 10 })
  b.text(46, 176, '细胞外液（组织液 / 血浆）', { size: 16, weight: 700, fill: C.accD })
  b.text(46, 200, '高 Na⁺ · 高 Cl⁻ · 低 K⁺', { size: 13, fill: C.mute })

  b.rect(30, 502, 1340, 262, { fill: C.rnaL, fillOp: 0.5, rx: 10 })
  b.text(46, 532, '细胞质（细胞内液）', { size: 16, weight: 700, fill: C.rnaD })
  b.text(46, 556, '高 K⁺ · 低 Na⁺ · 富含不可通透阴离子 A⁻（蛋白质、磷酸化中间物）', { size: 13, fill: C.mute })

  // 磷脂双层（膜）
  b.bilayer(30, 428, 1340, { h: 44, tint: C.dna })
  b.etext(1382, 497, '膜（磷脂双层）', { size: 11.5, fill: C.mute })

  // ---- K⁺ 漏通道（左，x≈420）----
  b.rect(352, 408, 34, 84, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 8 })
  b.rect(454, 408, 34, 84, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 8 })
  b.tag(420, 296, 'K⁺ 漏通道（孔道开放）', { fill: '#ffffff', stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD, pad: 7 })
  // 孔道内 K⁺ 逐个上移
  b.ion(420, 496, 'K⁺', { r: 12, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11 })
  b.arrow(420, 480, 420, 452, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ion(420, 438, 'K⁺', { r: 12, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11 })
  b.arrow(420, 422, 420, 394, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ion(420, 380, 'K⁺', { r: 12, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11 })
  b.arrow(420, 364, 420, 340, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ion(420, 326, 'K⁺', { r: 12, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11 })

  // ---- Na⁺/K⁺-ATP 酶（右，x≈880）----
  b.rect(740, 404, 280, 92, { fill: C.enzL, stroke: C.enz, sw: 2.4, rx: 18 })
  b.ctext(880, 460, 'Na⁺/K⁺-ATP 酶', { size: 13, weight: 700, fill: C.enzD })
  b.ctext(880, 484, 'ATP → ADP + Pi', { size: 10, fill: C.sub })
  // 3 Na⁺ 泵出（向上三箭头，腺体左侧）
  for (const dx of [24, 50, 76]) {
    b.arrow(740 + dx, 498, 740 + dx, 386, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  }
  b.ion(764, 368, 'Na⁺', { r: 11, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 10.5 })
  b.ion(790, 368, 'Na⁺', { r: 11, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 10.5 })
  b.ion(816, 368, 'Na⁺', { r: 11, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 10.5 })
  b.ctext(790, 340, '3 Na⁺ 泵出', { size: 12.5, weight: 700, fill: '#78350f' })
  // 2 K⁺ 泵入（向下两箭头，腺体右侧）
  for (const dx of [210, 250]) {
    b.arrow(740 + dx, 386, 740 + dx, 498, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  }
  b.ion(950, 514, 'K⁺', { r: 11, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5 })
  b.ion(990, 514, 'K⁺', { r: 11, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5 })
  b.ctext(970, 544, '2 K⁺ 泵入', { size: 12.5, weight: 700, fill: C.dnaD })

  // ---- 散布离子（避开通道 340-520 与泵 780-1070 区域）----
  const naPos: [number, number][] = [[80, 240], [140, 300], [220, 250], [300, 320], [560, 250], [640, 310], [700, 240], [1120, 250], [1200, 310], [1280, 250], [1330, 330], [90, 350]]
  for (const [x, y] of naPos) b.ion(x, y, 'Na⁺', { r: 13, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 11 })
  const clPos: [number, number][] = [[60, 300], [180, 350], [260, 300], [600, 340], [680, 280], [1140, 340], [1240, 290], [1310, 370], [130, 240]]
  for (const [x, y] of clPos) b.ion(x, y, 'Cl⁻', { r: 13, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11 })
  const kOut: [number, number][] = [[340, 350], [700, 390], [1100, 380]]
  for (const [x, y] of kOut) b.ion(x, y, 'K⁺', { r: 13, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11 })
  const kIn: [number, number][] = [[100, 690], [190, 680], [270, 700], [560, 640], [640, 700], [740, 660], [1120, 640], [1200, 690], [1280, 630], [1330, 700]]
  for (const [x, y] of kIn) b.ion(x, y, 'K⁺', { r: 13, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11 })
  // 不可通透阴离子 A⁻（紫色大颗粒）
  const aPos: [number, number][] = [[190, 720], [420, 690], [660, 620], [900, 640], [1160, 700], [1330, 660]]
  for (const [x, y] of aPos) {
    b.ellipse(x, y, 30, 17, { fill: C.proL, stroke: C.pro, sw: 1.6 })
    b.ctext(x, y + 5, 'A⁻', { size: 12, weight: 700, fill: C.proD })
  }

  // ---- 左侧机制注释（胞质区）----
  b.wtext(56, 600, '膜对 K⁺ 的本底通透性最高：K⁺ 经漏通道顺浓度梯度外流（正电荷净外移），膜内侧净负电荷积累。', { size: 11.5, fill: C.sub, maxW: 240, lh: 17 })
  // ---- 右侧机制注释 ----
  b.wtext(1110, 570, '每水解 1 ATP 泵出 3 Na⁺、泵入 2 K⁺——净外移 1 个正电荷（生电性泵），维持离子梯度。', { size: 11.5, fill: C.sub, maxW: 240, lh: 17 })

  // ============ 二、底部：电位标尺与结论 ============
  b.panel(30, 786, 560, 190, { title: '膜电位标尺（内负外正）' })
  b.line(150, 830, 150, 950, { stroke: C.sub, sw: 2 })
  // 0 mV（膜外）
  b.line(142, 836, 158, 836, { stroke: C.acc, sw: 3 })
  b.text(168, 840, '0 mV（膜外）', { size: 12.5, weight: 700, fill: C.accD })
  // −70 mV（静息，膜内）
  b.line(142, 912, 158, 912, { stroke: C.bad, sw: 3 })
  b.text(168, 916, '−70 mV（静息电位，膜内）', { size: 12.5, weight: 700, fill: C.bad })
  // −90 mV（E_K，虚线）
  b.line(142, 937, 158, 937, { stroke: C.dna, sw: 2.5, dash: '5 4' })
  b.text(168, 941, 'E_K ≈ −90 mV（K⁺ 平衡电位）', { size: 12, fill: C.dna })
  // 膜内外示意
  b.rect(60, 836, 60, 101, { fill: C.accL, fillOp: 0.5 })
  b.rect(60, 836, 60, 76, { fill: C.badL, fillOp: 0.6 })
  b.ctext(90, 826, '膜', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(320, 874, '静息电位接近但不等于 E_K：差值来自 Na⁺ 少量内漏与泵的生电贡献。', { size: 11.5, fill: C.sub, maxW: 250, lh: 17 })

  b.panel(620, 786, 750, 190, { title: '要点串联' })
  b.wtext(644, 830, '① 离子分布不均由 Na⁺/K⁺ 泵维持：胞外高 Na⁺/Cl⁻，胞内高 K⁺ 与不可通透的 A⁻；', { size: 12.5, fill: C.ink, maxW: 700, lh: 20 })
  b.wtext(644, 872, '② K⁺ 漏通道本底通透性最高 → K⁺ 外流建立内负外正的扩散电位；', { size: 12.5, fill: C.ink, maxW: 700, lh: 20 })
  b.wtext(644, 914, '③ 生电性 Na⁺/K⁺-ATP 酶（3:2 比例）叠加泵流——两者共同建立约 −70 mV 静息电位。', { size: 12.5, fill: C.ink, maxW: 700, lh: 20 })
}

export default scene({
  title: '静息膜电位的离子基础',
  subtitle: '离子分布不均 + K⁺ 漏通道外流 + Na⁺/K⁺-ATP 酶生电性泵 → 外正内负 ≈ −70 mV',
  draw,
})
