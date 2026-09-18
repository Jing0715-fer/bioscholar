// bi ch4-s3 BLAST 的统计显著性（39-i 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、极值分布与 E 值 ============
  b.panel(30, 132, 780, 480, { title: '一、随机高分服从极值分布（Karlin-Altschul，1990）' })
  b.axis(150, 490, 560, 280, {
    xlabel: '随机序列的最高局部比对分 S →',
    title: '最高局部比对分的分布形状',
    xticks: [[0.06, '低'], [0.3, '峰值'], [0.62, '高分尾部'], [0.95, '极高']],
    yticks: [[0.5, '0.2'], [1, '0.37']],
  })
  // Gumbel 极值分布密度（真实形状）
  b.curve(150, 490, 560, 280, [
    [0.02, 0.001], [0.06, 0.035], [0.10, 0.068], [0.15, 0.17], [0.20, 0.58], [0.25, 0.80],
    [0.30, 0.92], [0.35, 0.86], [0.40, 0.70], [0.45, 0.55], [0.50, 0.39], [0.55, 0.29],
    [0.60, 0.21], [0.65, 0.15], [0.70, 0.078], [0.75, 0.055], [0.80, 0.035], [0.85, 0.025],
    [0.90, 0.017], [0.95, 0.011], [1, 0.007],
  ], { stroke: C.dna, sw: 3, smooth: true })
  // 尾部标注
  b.line(505, 210, 505, 490, { stroke: C.bad, sw: 1.4, dash: '6 5', opacity: 0.8 })
  b.wtext(518, 250, '尾部按 e^(−λS) 指数衰减：分数越高越罕见，衰减速度由 λ 决定', { size: 11.5, weight: 700, fill: C.bad, maxW: 180, lh: 16 })
  // 公式区
  b.rect(90, 545, 660, 54, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(110, 568, 'E ≈ K·m·N·e^(−λS)', { size: 15, weight: 700, fill: C.ink })
  b.text(330, 568, 'bit 分 S′ = (λS − lnK)/ln2', { size: 12.5, weight: 700, fill: C.accD })
  b.text(330, 590, 'P = 1 − e^(−E)：E 与 P 经此换算', { size: 11.5, fill: C.sub })

  // ============ 二、规模效应与 bit 分 ============
  b.panel(830, 132, 540, 480, { title: '二、数据库规模效应与 bit 归一' })
  b.text(860, 196, 'E 值 ∝ m·N：库翻倍，E 翻倍', { size: 13, weight: 700, fill: C.ink })
  b.rect(880, 322, 70, 60, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.rect(990, 262, 70, 120, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(915, 250, 'E ×1', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(1025, 250, 'E ×2', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(915, 350, '库 N', { size: 11.5, fill: C.mute })
  b.ctext(1025, 350, '库 2N', { size: 11.5, fill: C.mute })
  b.arrow(958, 292, 984, 292, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.wtext(1100, 300, '同一分数、同一查询：数据库规模翻倍，E 值近似翻倍', { size: 11, fill: C.sub, maxW: 130, lh: 15 })
  b.text(860, 400, 'bit 分：每 +1 bit，随机几率约减半', { size: 13, weight: 700, fill: C.ink })
  const bl: Array<[number, number, string]> = [
    [880, 150, '2⁰'], [948, 75, '2⁻¹'], [1016, 38, '2⁻²'], [1084, 19, '2⁻³'], [1152, 10, '2⁻⁴'],
  ]
  bl.forEach(([x, h, lab], i) => {
    b.rect(x, 590 - h, 44, h, { fill: i === 0 ? C.dnaL : C.dna, fillOp: i === 0 ? 1 : 0.75, stroke: C.dna, sw: 1.6 })
    b.ctext(x + 22, 590 - h - 10, lab, { size: 11, weight: 700, fill: C.dnaD })
  })
  b.ctext(1030, 612, 'bit 分经 λ 与 K 归一，跨打分体系可比', { size: 11, fill: C.mute })

  // ============ 三、判读纪律 ============
  b.panel(30, 640, 1340, 320, { title: '三、判读纪律：显著不等于同源' })
  const cards: Array<[string, string, string]> = [
    ['显著 ≠ 同源', '趋同演化、组成偏性与随机巧合都可制造显著命中', C.bad],
    ['不显著 ≠ 非同源', '暮区内的远缘同源可能落在阈值之外——换打分方案或多序列联合证据', C.warn],
    ['跨搜索比较用 bit 分', '原始分受打分体系影响；bit 分经 λ、K 归一后方可比较', C.acc],
  ]
  cards.forEach(([t, s, st], i) => {
    const x = 60 + i * 430
    b.rect(x, 700, 400, 120, { fill: C.panel, stroke: st, sw: 1.8, rx: 10 })
    b.ctext(x + 200, 732, t, { size: 15, weight: 700, fill: st })
    b.wtext(x + 200, 764, s, { size: 11.5, fill: C.sub, maxW: 368, lh: 17, anchor: 'middle' })
  })
  b.rect(60, 850, 1280, 62, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 8, fillOp: 0.5 })
  b.wtext(80, 872, '经验惯例：蛋白搜索常以 E < 0.01 为显著。E 值依赖数据库规模与打分体系——报告搜索结果时应交代口径。', { size: 12.5, weight: 600, fill: '#065f46', maxW: 1240, lh: 17 })
}

export default scene({
  title: 'BLAST 统计显著性：极值分布、E 值与 bit 分',
  subtitle: '随机序列最高局部比对分服从极值分布，尾部按 e 的负 λS 次方指数衰减；E ≈ K·m·N·e^(−λS) 为期望假命中次数，与 P 值经 P = 1 − e^(−E) 换算；数据库翻倍则 E 近似翻倍，跨搜索比较应使用 bit 分；蛋白搜索常以 E < 0.01 为显著惯例',
  draw,
})
