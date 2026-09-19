// bc ch8-s4 穿梭系统、P/O 比与能量核算（39-a 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、甘油-α-磷酸穿梭 ============
  b.panel(30, 132, 660, 430, { title: '一、甘油-α-磷酸穿梭（肌肉 · 脑）：NADH → FADH₂' })
  b.tag(120, 186, '胞质', { fill: C.panelB, stroke: C.line, size: 11, weight: 700, tfill: C.sub, pad: 7 })
  b.ion(110, 240, 'NADH', { r: 24, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5 })
  b.arrow(140, 240, 186, 240, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(188, 222, 128, 36, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(252, 244, '磷酸二羟丙酮', { size: 11.5, fill: C.ink })
  b.arrow(318, 240, 364, 240, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.rect(366, 222, 128, 36, { fill: C.rnaL, fillOp: 0.6, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(430, 244, '甘油-α-磷酸', { size: 11.5, weight: 700, fill: C.rnaD })
  b.tag(252, 292, '胞质 3-磷酸甘油脱氢酶（辅酶 NAD⁺）', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 600, tfill: C.enzD, pad: 6 })
  b.arrow(430, 260, 430, 336, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(472, 306, '扩散至内膜外侧', { size: 10, fill: C.mute })
  b.bilayer(56, 352, 580, { h: 12, tint: C.dna })
  b.ctext(96, 340, '线粒体内膜', { size: 9.5, fill: C.mute })
  b.tag(330, 372, '内膜结合甘油-α-磷酸脱氢酶（辅基 FAD）', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 600, tfill: C.enzD, pad: 6 })
  b.ion(560, 372, 'CoQ', { r: 19, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5 })
  b.arrow(452, 386, 452, 424, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ion(452, 452, 'FADH₂', { r: 24, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 10.5 })
  b.arrow(478, 452, 530, 452, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ctext(556, 448, '电子入', { size: 10, fill: C.mute })
  b.ctext(556, 462, '琥珀酸链', { size: 10, fill: C.mute })
  b.rect(56, 424, 330, 60, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(72, 448, '净得：1 个胞质 NADH → FADH₂', { size: 11.5, weight: 700, fill: '#065f46' })
  b.text(72, 470, '→ 约 1.5 ATP（P/O ~1.5）', { size: 11.5, weight: 700, fill: '#065f46' })
  b.ctext(430, 510, '特性：不可逆 · 速度快 · 产能低', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(56, 534, '甘油-α-磷酸不能穿回胞质侧，故穿梭不可逆；肌肉与脑借此快速处理糖酵解产生的还原当量。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 二、苹果酸-天冬氨酸穿梭 ============
  b.panel(710, 132, 660, 430, { title: '二、苹果酸-天冬氨酸穿梭（肝 · 心 · 肾）：保持 NADH' })
  b.tag(762, 186, '胞质', { fill: C.panelB, stroke: C.line, size: 11, weight: 700, tfill: C.sub, pad: 7 })
  b.tag(762, 402, '线粒体基质', { fill: '#ffedd5', stroke: C.warn, size: 11, weight: 700, tfill: '#78350f', pad: 7 })
  // 胞质侧：NADH + 草酰乙酸 → 苹果酸
  b.ion(780, 238, 'NADH', { r: 23, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10 })
  b.arrow(806, 238, 878, 238, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(880, 222, 124, 34, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(942, 243, '草酰乙酸', { size: 11.5, fill: C.ink })
  b.tag(942, 281, '胞质苹果酸脱氢酶（NADH→NAD⁺）', { fill: C.enzL, stroke: C.enz, size: 10, weight: 600, tfill: C.enzD, pad: 5 })
  b.arrow(942, 256, 942, 333, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(976, 300, '苹果酸 ↓', { size: 9.5, weight: 700, fill: C.rnaD })
  // 膜与转运蛋白
  b.bilayer(736, 312, 580, { h: 12, tint: C.dna })
  b.tag(942, 312, '苹果酸 ⇄ α-酮戊二酸', { fill: C.dnaL, stroke: C.dna, size: 9.5, weight: 700, tfill: C.dnaD, pad: 4 })
  b.tag(1245, 312, '天冬氨酸 ⇄ 谷氨酸', { fill: C.dnaL, stroke: C.dna, size: 9.5, weight: 700, tfill: C.dnaD, pad: 4 })
  // 基质侧：苹果酸 → 草酰乙酸 + NADH → 复合物 I
  b.rect(880, 335, 124, 34, { fill: C.rnaL, fillOp: 0.6, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(942, 356, '苹果酸', { size: 11.5, weight: 700, fill: C.rnaD })
  b.tag(1096, 356, '基质苹果酸脱氢酶', { fill: C.enzL, stroke: C.enz, size: 10, weight: 600, tfill: C.enzD, pad: 5 })
  b.arrow(942, 369, 942, 396, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(838, 398, 208, 36, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(942, 420, '草酰乙酸 + 基质 NADH', { size: 11, weight: 700, fill: C.ink })
  b.arrow(942, 434, 942, 458, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.tag(942, 480, '复合物 I 氧化', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 5 })
  // 回路：基质 OAA → 转氨基 → 天冬氨酸 → 胞质
  b.path('M1046,416 L1245,416 L1245,389', { stroke: C.pro, sw: 2, marker: 'pro', fill: 'none' })
  b.ctext(1144, 440, '转氨基', { size: 9.5, weight: 700, fill: C.proD })
  b.rect(1180, 355, 130, 34, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.5, rx: 7 })
  b.ctext(1245, 376, '天冬氨酸', { size: 11.5, weight: 700, fill: C.proD })
  b.arrow(1245, 355, 1245, 297, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.rect(1180, 222, 130, 34, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.5, rx: 7 })
  b.ctext(1245, 243, '天冬氨酸', { size: 11.5, weight: 700, fill: C.proD })
  b.arrow(1180, 238, 1008, 238, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(1092, 226, '转氨基', { size: 9.5, weight: 700, fill: C.proD })
  // 结果
  b.rect(1030, 452, 320, 58, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(1046, 476, '净得：1 个胞质 NADH → 基质 NADH', { size: 11.5, weight: 700, fill: '#065f46' })
  b.text(1046, 498, '→ 复合物 I → 约 2.5 ATP（P/O ~2.5）', { size: 11.5, weight: 700, fill: '#065f46' })
  b.ctext(942, 524, '特性：可逆 · 产能高 · 苹果酸 / 天冬氨酸对向往返', { size: 11, weight: 700, fill: C.sub })
  b.wtext(736, 548, '内膜对 NADH（NAD⁺）不通透，穿梭以「代谢物换还原当量」间接接入呼吸链。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 三、P/O 比 ============
  b.panel(30, 566, 660, 414, { title: '三、P/O 比的现代测定值（磷氧比）' })
  b.wtext(56, 612, 'P/O 比：一对电子经呼吸链传给 ½O₂（每消耗 1 个氧原子）所磷酸化的 ADP 分子数。', { size: 11.5, fill: C.sub, maxW: 610, lh: 16 })
  b.table(56, 646, 608, {
    headers: ['底物', '进入点', 'P/O（ATP）'],
    colW: [236, 180, 192],
    rowH: 38,
    fontSize: 11,
    rows: [
      ['NADH（基质）', '复合物 I', '~2.5（旧教材 3）'],
      ['FADH₂（琥珀酸）', '复合物 II / CoQ', '~1.5（旧教材 2）'],
      ['胞质 NADH · 甘油磷酸穿梭', 'CoQ', '~1.5'],
      ['胞质 NADH · 苹果酸穿梭', '复合物 I', '~2.5'],
    ],
  })
  b.wtext(56, 858, '旧值 3/2 的由来：当时认为 c 环含 12 个 c 亚基、每合成 1 ATP 需 4 H⁺；哺乳类 c₈ 环修正为每 ATP 约 2.7 H⁺，加上 ATP/ADP 转位酶消耗约 1 H⁺ 当量 → NADH ~2.5、FADH₂ ~1.5。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })
  b.wtext(56, 918, 'ATP 经腺苷酸转位酶（ANT）以 ATP⁴⁻ ↔ ADP³⁻ 对向运出基质（耗质子动力势）；磷酸根以 H₂PO₄⁻/H⁺ 同向协同转运进入基质。', { size: 11, fill: C.mute, maxW: 610, lh: 16 })

  // ============ 四、能量核算 ============
  b.panel(710, 566, 660, 414, { title: '四、葡萄糖彻底氧化的能量核算：30 或 32 ATP' })
  b.table(726, 618, 628, {
    headers: ['阶段', '直接产能', '折合 ATP'],
    colW: [148, 262, 218],
    rowH: 38,
    fontSize: 11,
    rows: [
      ['糖酵解', '2 ATP + 2 NADH（胞质）', '2 + 3~5'],
      ['丙酮酸氧化脱羧', '2 NADH（线粒体）', '5'],
      ['三羧酸循环（2 轮）', '6 NADH + 2 FADH₂ + 2 GTP', '15 + 3 + 2'],
    ],
  })
  b.tag(1040, 812, '合计：30 或 32 ATP', { fill: C.okL, stroke: C.ok, size: 13, weight: 700, tfill: '#065f46', pad: 8 })
  const rows: [string, number, string, boolean][] = [
    ['甘油-α-磷酸穿梭（肌 · 脑）', 30, '30 ATP', false],
    ['苹果酸-天冬氨酸穿梭（肝 · 心）', 32, '32 ATP', false],
    ['旧教材计法（3 / 2）', 38, '36 / 38 ATP', true],
  ]
  rows.forEach(([lab, v, val, dash], i) => {
    const y = 852 + i * 38
    b.etext(960, y + 14, lab, { size: 10.5, fill: C.sub })
    const bw = (v / 38) * 330
    b.rect(972, y, bw, 22, { fill: dash ? 'none' : i === 1 ? C.ok : C.acc, stroke: dash ? C.mute : undefined, sw: 1.4, rx: 4, dash: dash ? '6 4' : undefined, fillOp: dash ? undefined : 0.85 })
    b.text(972 + bw + 10, y + 15, val, { size: 11, weight: 700, fill: dash ? C.mute : C.accD })
  })
  b.wtext(726, 962, '两条穿梭的选择决定 2 个胞质 NADH 折合 3 还是 5 ATP；苹果酸穿梭得 32、甘油磷酸穿梭得 30。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '线粒体穿梭系统、P/O 比与能量核算',
  subtitle: '内膜对 NADH 不通透：甘油-α-磷酸穿梭（肌·脑）产 FADH₂ 约 1.5 ATP，苹果酸-天冬氨酸穿梭（肝·心）保 NADH 约 2.5 ATP——P/O 新值 2.5/1.5，葡萄糖净得 30 或 32 ATP',
  draw,
})
