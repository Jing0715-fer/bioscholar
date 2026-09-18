// ne ch2-s1 静息膜电位 / 静息电位的离子基础（39-h 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、离子不对称分布 ============
  b.panel(30, 132, 1340, 400, { title: '一、离子的不对称分布：膜内比膜外负 70 ～ 65 mV' })
  // 细胞外液
  b.rect(60, 180, 1280, 140, { fill: C.accL, fillOp: 0.3, stroke: 'none', rx: 8 })
  b.text(76, 206, '细胞外液', { size: 14.5, weight: 700, fill: C.accD })
  b.ion(180, 255, 'Na⁺', { r: 15, fill: '#fee2e2', stroke: C.bad, tfill: '#991b1b' })
  b.ion(280, 235, 'Na⁺', { r: 13, fill: '#fee2e2', stroke: C.bad, tfill: '#991b1b' })
  b.ctext(230, 300, 'Na⁺ 145 mM', { size: 13, weight: 700, fill: C.bad })
  b.ion(450, 255, 'Ca²⁺', { r: 15, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.ctext(450, 300, 'Ca²⁺ 毫摩尔级', { size: 13, weight: 700, fill: C.proD })
  // 极化标记
  ;[600, 690, 780].forEach(px => b.text(px, 318, '+', { size: 15, weight: 700, fill: C.bad, anchor: 'middle' }))
  ;[600, 690, 780].forEach(px => b.text(px, 368, '−', { size: 15, weight: 700, fill: C.acc, anchor: 'middle' }))
  // 双分子层
  b.bilayer(60, 330, 1280, { tint: C.dna })
  // 胞质
  b.rect(60, 348, 1280, 152, { fill: '#f1f5f9', fillOp: 0.8, stroke: 'none', rx: 8 })
  b.text(76, 376, '胞质（膜内）', { size: 14.5, weight: 700, fill: C.sub })
  b.ion(180, 420, 'K⁺', { r: 15, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.ion(270, 400, 'K⁺', { r: 13, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.ion(350, 435, 'K⁺', { r: 12, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.ctext(270, 470, 'K⁺ 140 mM', { size: 13, weight: 700, fill: C.dnaD })
  b.ion(520, 420, 'Na⁺', { r: 13, fill: '#fee2e2', stroke: C.bad, tfill: '#991b1b' })
  b.ctext(520, 470, 'Na⁺ 5–15 mM', { size: 13, weight: 700, fill: C.bad })
  b.ion(700, 420, 'Ca²⁺', { r: 13, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.ctext(700, 470, 'Ca²⁺ 游离≈0.0001 mM', { size: 13, weight: 700, fill: C.proD })
  b.ion(960, 420, 'A⁻', { r: 15, fill: C.badL, stroke: C.bad, tfill: C.bad })
  b.ctext(960, 470, '固定阴离子（蛋白 · 有机磷酸物）不能过膜', { size: 12, weight: 700, fill: C.bad })
  // K 漏通道
  b.rect(1006, 320, 9, 34, { fill: C.bg, stroke: C.dna, sw: 1.8 })
  b.rect(1033, 320, 9, 34, { fill: C.bg, stroke: C.dna, sw: 1.8 })
  b.ctext(1015, 384, 'K⁺ 漏通道', { size: 11.5, weight: 700, fill: C.dnaD })
  // Na/K 泵
  b.circle(1120, 336, 19, { fill: C.warnL, stroke: C.warn, sw: 2.2 })
  b.text(1120, 341, '泵', { size: 11.5, weight: 700, fill: '#92400e', anchor: 'middle' })
  b.arrow(1098, 323, 1082, 309, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(1142, 349, 1158, 363, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(1148, 388, 'Na⁺/K⁺-ATPase', { size: 11.5, weight: 700, fill: '#92400e' })
  // 电压表
  b.circle(1230, 250, 22, { fill: C.bg, stroke: C.ink, sw: 2.2 })
  b.ctext(1230, 256, 'V', { size: 16, weight: 700, fill: C.ink })
  b.line(1214, 264, 1180, 302, { stroke: C.ink, sw: 1.6 })
  b.circle(1180, 308, 4, { fill: C.ink })
  b.line(1230, 272, 1230, 412, { stroke: C.ink, sw: 1.6 })
  b.circle(1230, 418, 4.5, { fill: C.ink })
  b.ctext(1230, 448, 'V_rest = −70 ～ −65 mV', { size: 13.5, weight: 700, fill: C.bad })
  b.ctext(560, 522, '电荷分离仅涉及膜两侧极薄的离子层——膜电容小，可快速充放电', { size: 12, fill: C.sub })

  // ============ 二、驱动力 ============
  b.panel(30, 546, 700, 432, { title: '二、电化学驱动力：静息时谁想往哪儿流' })
  b.ctext(290, 594, '静息时的驱动力（mV，0 = 膜电位 −70 mV）', { size: 13, weight: 700, fill: C.ink })
  b.line(130, 640, 460, 640, { stroke: C.sub, sw: 1.8 })
  const ticks1: Array<[number, string]> = [[140, '−200'], [270, '−100'], [400, '0']]
  ticks1.forEach(([tx, lab]) => {
    b.line(tx, 634, tx, 646, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx, 624, lab, { size: 11.5, fill: C.mute })
  })
  b.line(400, 648, 400, 800, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.ctext(195, 662, '← 内向电流', { size: 11, fill: C.mute })
  b.ctext(432, 662, '外向电流 →', { size: 11, fill: C.mute })
  // K⁺
  b.rect(400, 679, 26, 22, { fill: C.ok, stroke: C.ok, sw: 1.4, rx: 3 })
  b.text(442, 688, 'K⁺：驱动力 ≈ +20 mV', { size: 12.5, weight: 700, fill: '#065f46' })
  b.text(442, 708, '外向（驱 K⁺ 外流）', { size: 11.5, fill: C.sub })
  // Na⁺
  b.rect(231, 724, 169, 22, { fill: C.bad, stroke: C.bad, sw: 1.4, rx: 3 })
  b.text(442, 733, 'Na⁺：驱动力 ≈ −130 mV', { size: 12.5, weight: 700, fill: C.bad })
  b.text(442, 753, '强大内向（内流汹涌）', { size: 11.5, fill: C.sub })
  // Ca²⁺
  b.rect(140, 769, 260, 22, { fill: C.pro, stroke: C.pro, sw: 1.4, rx: 3 })
  b.text(442, 778, 'Ca²⁺：驱动力逾 −200 mV', { size: 12.5, weight: 700, fill: C.proD })
  b.text(442, 798, '内向最猛（势能最饱满的信号离子）', { size: 11.5, fill: C.sub })
  b.wtext(70, 836, 'Ca²⁺ 的悬殊梯度（胞外毫摩尔级 vs 胞内游离约 0.0001 mM）带来近 200 mV 的电化学驱动力——每一个打开的钙通道都像一次放电。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })
  b.wtext(70, 890, '静息电位与阈值相距 10–15 mV：一切调制兴奋性的药物与机制，归根结底都在拨动这段距离。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })

  // ============ 三、Donnan 与电池比喻 ============
  b.panel(740, 546, 630, 432, { title: '三、固定阴离子与 Donnan 平衡：静息为何天然偏负' })
  b.rect(770, 620, 250, 86, { fill: C.accL, fillOp: 0.3, stroke: 'none', rx: 8 })
  b.text(786, 646, '细胞外', { size: 12.5, weight: 700, fill: C.accD })
  b.bilayer(770, 708, 250, { tint: C.dna })
  b.rect(770, 724, 250, 104, { fill: '#f1f5f9', fillOp: 0.8, stroke: 'none', rx: 8 })
  b.text(786, 750, '胞内', { size: 12.5, weight: 700, fill: C.sub })
  b.ion(830, 678, 'Na⁺', { r: 11, fill: '#fee2e2', stroke: C.bad, tfill: '#991b1b', size: 11 })
  b.ion(950, 678, 'Cl⁻', { r: 11, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11 })
  b.ion(830, 784, 'K⁺', { r: 11, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11 })
  b.ion(950, 784, 'A⁻', { r: 13, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 11 })
  b.ctext(950, 816, '不能过膜', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(1048, 640, 'Donnan 平衡式的逻辑：不通透的固定阴离子（蛋白质、有机磷酸物）被困胞内 → 可透离子重新分布 → 膜内负离子过剩，膜电位天然偏负，并带来渗透挑战（水有内流倾向）。', { size: 11.5, fill: C.sub, maxW: 296, lh: 17 })
  b.ctext(1050, 846, '静息膜是一枚已充能的电池：', { size: 12.5, weight: 700, fill: C.ink })
  const cards: Array<[number, string, string, string, string]> = [
    [770, '势能库', '浓度梯度：Na⁺ / K⁺ / Ca²⁺ 落差', C.dna, C.dnaL],
    [965, '开闸放电', '动作电位：Na⁺ 雪崩内流', C.bad, C.badL],
    [1160, '水泵回充', 'Na⁺/K⁺ 泵：3 Na⁺ 出 · 2 K⁺ 入', C.warn, C.warnL],
  ]
  cards.forEach(([x, t, s, col, colL]) => {
    b.rect(x, 862, 175, 92, { fill: colL, fillOp: 0.5, stroke: col, sw: 1.6, rx: 9 })
    b.text(x + 87, 892, t, { size: 14, weight: 700, fill: col, anchor: 'middle' })
    b.wtext(x + 14, 916, s, { size: 10.5, fill: C.sub, maxW: 150, lh: 14 })
  })
  b.arrow(947, 908, 963, 908, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(1142, 908, 1158, 908, { stroke: C.mute, sw: 2, marker: 'mute' })
}

export default scene({
  title: '静息电位的离子基础：不对称分布、驱动力与 Donnan 平衡',
  subtitle: '静息膜电位 −70 ～ −65 mV；Na⁺ 胞外 145 mM 对胞内 5–15 mM，K⁺ 胞内 140 mM 对胞外 5 mM，Ca²⁺ 胞外毫摩尔级对胞内游离约 0.0001 mM；静息驱动力 K⁺ 约 +20 mV 外向、Na⁺ 约 −130 mV 内向、Ca²⁺ 逾 −200 mV；固定阴离子经 Donnan 逻辑使膜电位天然偏负',
  draw,
})
