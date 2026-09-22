// sb ch3-s3 离子交换层析原理（Task 6-sb）
import { scene, C, B } from '../../lib'

const gauss = (mu: number, sig: number, amp: number, base: number) => {
  const segs: string[] = []
  for (let x = mu - 3.2 * sig; x <= mu + 3.2 * sig; x += 3) {
    segs.push(`${x.toFixed(1)},${(base - amp * Math.exp(-((x - mu) ** 2) / (2 * sig * sig))).toFixed(1)}`)
  }
  return `M ${mu - 3.2 * sig},${base} L ${segs.join(' L ')} L ${mu + 3.2 * sig},${base} Z`
}

const draw = (b: B) => {
  // ============ 一、净电荷随 pH ============
  b.panel(30, 132, 660, 340, { title: '一、净电荷随 pH 变化：pI 两侧的交换剂选择' })
  b.axis(90, 390, 530, 195, {
    xlabel: '缓冲液 pH', ylabel: '净电荷',
    xticks: [[0, '3'], [0.25, '5'], [0.5, '7'], [0.75, '9'], [1, '11']],
    yticks: [[1, '+40'], [0.5, '0'], [0, '-40']],
  })
  b.line(90, 292.5, 620, 292.5, { stroke: C.faint, sw: 1.2, dash: '6 5' })
  const pts: [number, number][] = []
  for (let pH = 3; pH <= 11.001; pH += 0.5) {
    const q = 40 * (1 - 2 / (1 + Math.exp(-(pH - 7.2) / 0.9)))
    pts.push([(pH - 3) / 8, (q + 40) / 80])
  }
  b.curve(90, 390, 530, 195, pts, { stroke: C.ink, sw: 2.6, smooth: true })
  // pI 标记
  b.line(368, 195, 368, 390, { stroke: C.bad, sw: 1.6, dash: '5 4' })
  b.ctext(368, 212, 'pI', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(368, 228, '净电荷＝0，溶解度最低', { size: 10, fill: C.badD })
  b.text(200, 240, 'pH ＜ pI：带正电', { size: 11.5, weight: 700, fill: C.proD })
  b.text(500, 384, 'pH ＞ pI：带负电', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(50, 412, 'pH 低于 pI：蛋白带正电 → 阳离子交换剂 SP（磺丙基·强型）／CM（羧甲基·弱型）捕获；pH 高于 pI：带负电 → 阴离子交换剂 Q（季铵基·强型）／DEAE（二乙氨乙基·弱型）。', { maxW: 620, lh: 15, size: 11, fill: C.sub })
  b.wtext(50, 443, '结合 pH 应偏离 pI 至少 1 个单位；Asn→Asp 去酰胺化使 pI 下移约 0.1——储存样品的「多峰洗脱」多为电荷异质性的显影。', { maxW: 620, lh: 15, size: 11, fill: C.sub })

  // ============ 二、交换剂选择决策 ============
  b.panel(710, 132, 660, 340, { title: '二、交换剂选择决策与缓冲液「同号」原则' })
  b.rect(730, 172, 620, 50, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.wtext(742, 192, '由序列估算 pI → 设定缓冲液 pH：偏离 pI ≥ 1 个单位；缓冲离子 pKa 落在目标 pH ±1 以内。', { maxW: 596, lh: 14, size: 11, fill: C.ink })
  b.arrow(880, 222, 880, 258, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(1195, 222, 1195, 258, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(730, 262, 300, 84, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(880, 288, 'pH ＞ pI（蛋白带负电）', { size: 12, weight: 700, fill: C.accD })
  b.wtext(745, 308, '阴离子交换剂：Q（强型）／DEAE（弱型），固定相带正电', { maxW: 272, lh: 13.5, size: 10.5, fill: C.accD })
  b.rect(1060, 262, 290, 84, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1205, 288, 'pH ＜ pI（蛋白带正电）', { size: 12, weight: 700, fill: C.proD })
  b.wtext(1075, 308, '阳离子交换剂：SP（强型）／CM（弱型），固定相带负电', { maxW: 262, lh: 13.5, size: 10.5, fill: C.proD })
  b.wtext(730, 366, '强型 Q／SP 在宽 pH 范围保持满电荷、工艺稳健；弱型 DEAE／CM 电荷随 pH 漂移，有时恰好提供精细选择性。', { maxW: 620, lh: 14, size: 10.5, fill: C.sub })
  b.wtext(730, 398, '「同号」原则：阳离子交换剂选阴离子缓冲体系（醋酸根、磷酸根、柠檬酸根）；阴离子交换剂选 Tris、Bis-Tris 等阳离子体系——「Tris 慎用于阳离子交换」即此推论。', { maxW: 620, lh: 14, size: 10.5, fill: C.sub })
  b.tag(800, 448, 'Tris 7.5–8.5', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.tag(965, 448, 'HEPES 6.8–8.2', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.tag(1128, 448, '醋酸 4.0–5.2', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.tag(1290, 448, '磷酸盐 6.0–8.0', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })

  // ============ 三、NaCl 线性梯度洗脱 ============
  b.panel(30, 482, 1340, 270, { title: '三、NaCl 线性梯度洗脱：电荷谱在盐轴上展开' })
  b.axis(70, 655, 720, 135, {
    xlabel: '洗脱体积（柱体积 CV）', ylabel: 'A_{280}',
    xticks: [[0, '0'], [0.5, '10'], [1, '20']],
  })
  b.line(75, 650, 785, 520, { stroke: C.warn, sw: 2, dash: '7 5' })
  b.text(95, 640, '0', { size: 10, weight: 700, fill: C.warnD })
  b.etext(770, 514, '500 mM NaCl', { size: 10, weight: 700, fill: C.warnD })
  b.path(gauss(250, 28, 42, 651), { fill: '#e2e8f0', stroke: C.mute, sw: 1.8 })
  b.path(gauss(330, 24, 26, 651), { fill: '#e2e8f0', stroke: C.mute, sw: 1.8 })
  b.path(gauss(490, 45, 95, 651), { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.path(gauss(680, 30, 30, 651), { fill: '#e2e8f0', stroke: C.mute, sw: 1.8 })
  b.ctext(290, 580, '弱结合杂蛋白', { size: 10.5, fill: C.mute })
  b.ctext(490, 536, '目标蛋白', { size: 12, weight: 700, fill: C.accD })
  b.ctext(490, 553, '电荷密度高 → 洗脱盐高', { size: 10, fill: C.accD })
  b.ctext(680, 604, '晚出组分', { size: 10.5, fill: C.mute })
  const bullets: [string, number][] = [
    ['梯度 0–500 mM NaCl 跨 10–20 个柱体积；洗脱位置由净电荷密度与配基密度共同决定。', 518],
    ['梯度体积加倍 → 分离度约提升四成（Rs 随梯度体积的平方根增长）；聚焦效应压缩带宽——上样体积几乎不影响峰形，大体积稀样品的捕获利器。', 552],
    ['动态结合容量数十至逾百 mg/mL；上样前稀释或经 G-25 脱盐至电导约 5 mS/cm 以下。', 590],
    ['聚焦色谱（chromatofocusing）：以 pH 梯度让各蛋白恰在 pI 处聚焦洗出，可分 pI 差 0.05 的变体。', 624],
    ['K^{+} 置换能力强于 Na^{+}——钾盐缓冲液中蛋白保留更弱，比较文献条件须计入。', 658],
    ['IEX 高盐洗脱组分（0.3–0.5 M NaCl）补加硫酸铵至约 1 M 即可直接上 HIC——「上一步的洗脱即下一步的上样」。', 692],
  ]
  for (const [t, y] of bullets) {
    b.rect(830, y - 9, 7, 7, { fill: C.acc })
    b.wtext(846, y, t, { maxW: 490, lh: 15, size: 10.5, fill: C.sub })
  }

  // ============ 四、流程位置与故障速查 ============
  b.panel(30, 762, 1340, 208, { title: '四、流程位置与故障速查' })
  b.wtext(50, 800, '流程位置：标签蛋白流程中居于亲和捕获与酶切之后——切标签混合物电荷性质各异，一次梯度即可重新排队，兼收去标签与精纯之效；天然无标签蛋白以 IEX 为捕获主力，「不依赖任何标签」是它对亲和层析的结构性优势。流穿模式（目标不挂柱）在抗体精纯中常用于去 DNA 与内毒素。', { maxW: 470, lh: 15, size: 10.5, fill: C.sub })
  b.table(560, 796, 790, {
    headers: ['症状', '常见根因', '处置'],
    colW: [140, 260, 390],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['蛋白不挂柱', 'pH 落在 pI 错误一侧或电导过高', '复核 pH／pI；脱盐或稀释至约 5 mS/cm 以下'],
      ['分辨率不足', '梯度过陡、上样过载', '梯度体积加倍；上样降至容量三成以内'],
      ['柱内出现沉淀', 'pH 逼近 pI、局部浓度过高', '偏离 pI 至少 1 个单位；稀释上样'],
      ['回收率偏低', '疏水次级相互作用作祟', '缓冲液加 5% 甘油或 0.05% 非离子去垢剂'],
    ],
  })
}

export default scene({
  title: '离子交换层析：净电荷的语言与 NaCl 梯度展开',
  subtitle: 'pH 高于 pI 结合 Q／DEAE、低于 pI 结合 SP／CM，结合 pH 偏离 pI 至少 1 个单位；0–500 mM NaCl 线性梯度跨 10–20 个柱体积，梯度越长分辨率越高',
  draw,
})
