// ne ch4-s4 突触与突触传递 / 电突触与突触传递的调制（39-h 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、缝隙连接 ============
  b.panel(30, 132, 700, 430, { title: '一、电突触：缝隙连接的直通电路' })
  b.rect(60, 176, 640, 130, { fill: C.accL, fillOp: 0.2, stroke: 'none', rx: 8 })
  b.text(76, 200, '细胞 A（胞浆）', { size: 13, weight: 700, fill: C.accD })
  b.bilayer(60, 306, 640, { tint: C.dna })
  b.bilayer(60, 349, 640, { tint: C.dna })
  b.rect(60, 362, 640, 90, { fill: '#f1f5f9', fillOp: 0.8, stroke: 'none', rx: 8 })
  b.text(76, 386, '细胞 B（胞浆）', { size: 13, weight: 700, fill: C.sub })
  b.etext(692, 340, '间隙约 3.5 nm', { size: 11.5, weight: 700, fill: C.mute })
  // 两个半通道（各 6 个连接蛋白亚基）
  const hemi = (cy: number) => {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2
      b.circle(380 + 19 * Math.cos(a), cy + 10 * Math.sin(a), 6, { fill: C.proL, stroke: C.pro, sw: 1.6 })
    }
  }
  hemi(312)
  hemi(355)
  b.line(380, 296, 380, 372, { stroke: C.pro, sw: 1.6, dash: '4 3' })
  b.ctext(380, 288, '孔径约 1.5–2 nm', { size: 11, weight: 700, fill: C.proD })
  // 双向电流
  b.arrow(330, 268, 330, 402, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.arrow(430, 402, 430, 268, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.ctext(500, 340, '双向 · 近零延迟', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(60, 470, '每一侧膜上嵌着由六个连接蛋白亚基围成的半通道（connexon），两侧半通道对接即成缝隙连接；Cx36 介导 PV 阳性中间神经元网络的伽马同步。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、电突触 vs 化学突触 ============
  b.panel(740, 132, 630, 430, { title: '二、电突触 vs 化学突触：全面分野，协同分工' })
  b.table(770, 190, 570, {
    headers: ['项目', '电突触（缝隙连接）', '化学突触'],
    colW: [110, 220, 240],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['间隙宽度', '约 3.5 nm（半通道对接）', '约 20–40 nm'],
      ['速度', '近零延迟（电学耦合）', '约 0.5 ms 突触延迟'],
      ['方向', '多为双向', '单向（突触前 → 后）'],
      ['可塑性', '较有限', '丰富（长 / 短时程可塑性）'],
      ['代谢成本', '低', '高（囊泡循环 · 递质重合成）'],
    ],
  })
  b.wtext(770, 486, '两者常在同一回路中协同分工：电突触保同步与速度，化学突触保可塑与特异性。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })

  // ============ 三、调制的旋钮 ============
  b.panel(30, 576, 1340, 402, { title: '三、调制的旋钮：突触前抑制 · 易化 · 短时程可塑性 · 递质清除' })
  // 左：轴-轴突触
  b.ctext(265, 636, '突触前抑制与易化（轴-轴突触）', { size: 13, weight: 700, fill: C.ink })
  b.ellipse(150, 690, 42, 24, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  ;[135, 150, 165].forEach(vx => b.circle(vx, 690, 4, { fill: C.rna }))
  b.ctext(150, 654, '传入 A 末梢', { size: 11.5, weight: 700, fill: C.rnaD })
  b.arrow(192, 702, 246, 728, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.tag(258, 688, 'GABA_B', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 7 })
  b.ellipse(300, 750, 55, 28, { fill: C.proL, stroke: C.pro, sw: 2 })
  ;[280, 295, 310].forEach(vx => b.circle(vx, 750, 4, { fill: C.pro }))
  b.ctext(300, 708, '末梢 B', { size: 11.5, weight: 700, fill: C.proD })
  b.rect(352, 770, 8, 18, { fill: C.bg, stroke: C.bad, sw: 1.6 })
  b.rect(362, 770, 8, 18, { fill: C.bg, stroke: C.bad, sw: 1.6 })
  b.text(358, 764, '✕', { size: 13, weight: 700, fill: C.bad, anchor: 'middle' })
  b.text(420, 800, 'Ca²⁺ 通道被抑制', { size: 10.5, weight: 700, fill: C.bad })
  b.line(230, 830, 460, 830, { stroke: C.acc, sw: 5, opacity: 0.55 })
  b.ctext(345, 854, '突触后树突', { size: 11, weight: 700, fill: C.accD })
  b.arrow(300, 780, 300, 822, { stroke: C.pro, sw: 1.8, dash: '4 3', marker: 'pro' })
  ;[292, 300, 308].forEach(vx => b.circle(vx, 802, 3, { fill: C.pro }))
  b.wtext(70, 884, 'GABA_B 抑制末梢钙通道 → 只压制这一路输入，而不改变突触后膜兴奋性；突触前易化：调质升高 cAMP → 释放概率 ↑。', { size: 11, fill: C.sub, maxW: 390, lh: 15 })

  // 中：PPF / PPD
  b.ctext(625, 636, '短时程可塑性：频率的滤波器', { size: 13, weight: 700, fill: C.ink })
  b.axis(500, 742, 230, 100, { xticks: [[0.15, '①'], [0.55, '②']], yticks: [[0.1, '0'], [0.9, '大']] })
  b.curve(500, 742, 230, 100, [
    [0.15, 0.08], [0.2, 0.35], [0.3, 0.22], [0.4, 0.12], [0.55, 0.12], [0.62, 0.62], [0.75, 0.4], [0.9, 0.18],
  ], { stroke: C.dna, sw: 2.2, smooth: true })
  b.wtext(500, 780, 'PPF：残留 Ca²⁺ → 第二脉冲释放概率 ↑（易化）', { size: 10.5, fill: C.dnaD, maxW: 240, lh: 14 })
  b.axis(500, 900, 230, 100, { xticks: [[0.15, '①'], [0.55, '②']], yticks: [[0.1, '0'], [0.9, '大']] })
  b.curve(500, 900, 230, 100, [
    [0.15, 0.08], [0.2, 0.7], [0.3, 0.45], [0.4, 0.25], [0.55, 0.25], [0.62, 0.35], [0.75, 0.22], [0.9, 0.1],
  ], { stroke: C.warn, sw: 2.2, smooth: true })
  b.wtext(500, 920, 'PPD：可释放池耗竭 → 第二脉冲变小（压抑）', { size: 10.5, fill: '#92400e', maxW: 240, lh: 14 })

  // 右：递质清除
  b.ctext(1070, 636, '递质清除：各走各路', { size: 13, weight: 700, fill: C.ink })
  const rows: Array<[number, string, string, string, string, string, string]> = [
    [690, 'ACh', C.rna, C.rnaL, 'AChE 水解', '清除失效 → 胆碱能危象', C.bad],
    [758, '谷氨酸', C.dna, C.dnaL, 'EAAT 摄取（胶质）', '清除失效 → 兴奋性毒性', C.bad],
    [826, '单胺类', C.enz, C.enzL, 'NET / DAT / SERT', '清除失效 → 递质堆积（药靶）', C.warn],
  ]
  rows.forEach(([y, name, col, colL, mech, fail, fc]) => {
    b.tag(812, y, name, { fill: colL, stroke: col, size: 12, weight: 700, tfill: col === C.rna ? C.rnaD : col === C.dna ? C.dnaD : C.enzD, pad: 9 })
    b.arrow(862, y, 958, y, { stroke: C.mute, sw: 2, marker: 'mute' })
    b.ctext(910, y - 12, mech, { size: 10.5, weight: 600, fill: C.sub })
    b.rect(978, y - 24, 342, 48, { fill: fc === C.bad ? C.badL : C.warnL, fillOp: 0.45, stroke: fc, sw: 1.4, rx: 8 })
    b.text(996, y + 5, fail, { size: 11.5, weight: 700, fill: fc })
  })
  b.wtext(790, 892, '递质清除各走各路：清除速度决定信号的时长——清除失效即病理。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
}

export default scene({
  title: '电突触与突触传递的调制：缝隙连接、轴-轴突触与短时程可塑性',
  subtitle: '缝隙连接由两侧各一个连接蛋白六聚体半通道对接而成，孔径约 1.5–2 nm、双向、近零延迟，间隙约 3.5 nm（化学突触 20–40 nm）；Cx36 介导 PV 阳性中间神经元网络的伽马同步；突触前抑制经轴-轴突触 GABA_B 压制末梢钙通道、突触前易化经 cAMP 升高释放概率；PPF 主因残留钙、PPD 主因池耗竭；AChE 水解 ACh、EAAT 摄取谷氨酸、NET/DAT/SERT 再摄取单胺——清除失效即病理',
  draw,
})
