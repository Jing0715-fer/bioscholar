// bc ch11-s3 碳骨架、生糖生酮氨基酸与一碳单位（39-a 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、碳骨架的汇入点 ============
  b.panel(30, 132, 700, 430, { title: '一、碳骨架（α-酮酸）的去路：汇入代谢主流' })
  b.wtext(46, 176, '氨基酸脱氨后的碳骨架经各自途径进入代谢主流——汇入点为丙酮酸、乙酰CoA / 乙酰乙酰CoA 及多种 TCA 中间物：', { size: 11, fill: C.sub, maxW: 660, lh: 16 })
  b.table(46, 222, 654, {
    headers: ['汇入点', '代表氨基酸'],
    colW: [220, 434],
    rowH: 33,
    fontSize: 11,
    rows: [
      ['丙酮酸', 'Ala · Gly · Ser · Cys · Thr'],
      ['乙酰CoA / 乙酰乙酰CoA', 'Ile · Leu · Lys ·（Phe · Tyr · Trp）'],
      ['α-酮戊二酸', 'Glu · Gln · Pro · Arg · His'],
      ['草酰乙酸', 'Asp · Asn'],
      ['琥珀酰CoA', 'Met · Val ·（Ile）'],
      ['延胡索酸', 'Phe · Tyr（部分）'],
    ],
  })
  b.rect(46, 478, 654, 42, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(62, 504, '碳架三个去向：氧化供能（入 TCA）· 糖异生（生糖氨基酸）· 生酮或合成脂类', { size: 11.5, weight: 700, fill: C.accD })

  // ============ 二、生糖与生酮氨基酸 ============
  b.panel(750, 132, 620, 430, { title: '二、生糖与生酮氨基酸：仅 2 种纯生酮' })
  b.rect(766, 186, 190, 130, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.8, rx: 9 })
  b.ctext(861, 212, '纯生酮（仅 2 种）', { size: 12.5, weight: 700, fill: C.bad })
  b.tag(830, 260, 'Leu 亮氨酸', { fill: '#ffffff', stroke: C.bad, size: 11, weight: 700, tfill: C.bad, pad: 5 })
  b.tag(900, 260, 'Lys 赖氨酸', { fill: '#ffffff', stroke: C.bad, size: 11, weight: 700, tfill: C.bad, pad: 5 })
  b.wtext(782, 296, '只生成乙酰CoA / 乙酰乙酰CoA', { size: 10, fill: C.sub, maxW: 160, lh: 13 })
  b.rect(976, 186, 190, 130, { fill: C.warnL, fillOp: 0.55, stroke: C.warn, sw: 1.8, rx: 9 })
  b.ctext(1071, 212, '生糖兼生酮（4 种）', { size: 12.5, weight: 700, fill: '#78350f' })
  b.tag(1006, 260, 'Ile', { fill: '#ffffff', stroke: C.warn, size: 11, weight: 700, tfill: '#78350f', pad: 5 })
  b.tag(1056, 260, 'Phe', { fill: '#ffffff', stroke: C.warn, size: 11, weight: 700, tfill: '#78350f', pad: 5 })
  b.tag(1106, 260, 'Tyr', { fill: '#ffffff', stroke: C.warn, size: 11, weight: 700, tfill: '#78350f', pad: 5 })
  b.tag(1156, 260, 'Trp', { fill: '#ffffff', stroke: C.warn, size: 11, weight: 700, tfill: '#78350f', pad: 5 })
  b.wtext(992, 296, '既产酮体又产糖', { size: 10, fill: C.sub, maxW: 160, lh: 13 })
  b.rect(766, 332, 400, 62, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.8, rx: 9 })
  b.ctext(966, 356, '其余全部为生糖氨基酸', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(966, 378, '（碳架可经糖异生生成葡萄糖）', { size: 10.5, fill: C.sub })
  // 芳香族氨基酸遗传病
  b.text(766, 424, '芳香族氨基酸的遗传病：', { size: 12, weight: 700, fill: C.ink })
  b.rect(766, 440, 400, 78, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(780, 462, '苯丙氨酸 →（苯丙氨酸羟化酶 · BH₄ 辅因子）→ 酪氨酸：酶缺陷 → 苯丙酮尿症 PKU（血苯丙氨酸↑，经转氨生成苯丙酮酸随尿排出，智力发育障碍；新生儿筛查 + 低苯丙氨酸饮食治疗）。', { size: 10, fill: C.sub, maxW: 372, lh: 14 })
  b.rect(1182, 440, 174, 78, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.4, rx: 8 })
  b.text(1194, 462, '酪氨酸代谢缺陷', { size: 10.5, weight: 700, fill: C.bad })
  b.text(1194, 482, '尿黑酸症（尿黑酸氧化酶）', { size: 9.5, fill: C.sub })
  b.text(1194, 502, '白化病（酪氨酸酶）', { size: 9.5, fill: C.sub })
  b.wtext(766, 536, '「糖或酮」取决于碳骨架断裂后落在产能网络的哪一侧。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 三、一碳单位 ============
  b.panel(30, 566, 700, 414, { title: '三、一碳单位：由四氢叶酸（THF）N⁵ / N¹⁰ 携带' })
  b.table(46, 620, 654, {
    headers: ['一碳单位', 'THF 结合形式', '来源氨基酸'],
    colW: [140, 260, 254],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['甲基 −CH₃', 'N⁵-CH₃-THF', '不可逆「甲炔→甲基」'],
      ['甲烯基 −CH₂−', 'N⁵,N¹⁰-CH₂-THF', 'Ser · Gly'],
      ['甲炔基 =CH−', 'N⁵,N¹⁰=CH-THF', 'Ser / Gly（氧化）'],
      ['甲酰基 −CHO', 'N¹⁰-CHO-THF', 'Trp · His · Gly'],
      ['亚氨甲基 −CH=NH', 'N⁵-CH=NH-THF', 'His'],
    ],
  })
  b.rect(46, 824, 654, 84, { fill: C.rnaL, fillOp: 0.45, stroke: C.rna, sw: 1.6, rx: 9 })
  b.wtext(62, 848, '生理意义：嘌呤 C2 与 C8、dTMP（胸苷酸）的 C5 均来自一碳单位——dTMP 合成由 N⁵,N¹⁰-甲烯 THF 供甲基；叶酸 / B₁₂ 缺乏 → dTMP 合成受阻 → 巨幼红细胞贫血（DNA 复制延迟）。', { size: 10.5, weight: 700, fill: C.rnaD, maxW: 622, lh: 15 })
  b.wtext(46, 930, '除 N⁵-甲基外各形式可氧化还原互变；N⁵-CH₃-THF 的甲基只能经 B₁₂ 依赖的蛋氨酸合酶转移（「甲基陷阱」）。', { size: 10.5, fill: C.sub, maxW: 654, lh: 15 })

  // ============ 四、SAM 活性蛋氨酸 ============
  b.panel(750, 566, 620, 414, { title: '四、S-腺苷甲硫氨酸（SAM）：通用甲基供体' })
  b.rect(770, 624, 120, 44, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(830, 642, '蛋氨酸', { size: 12, weight: 700, fill: C.ink })
  b.ctext(830, 658, 'Met', { size: 9.5, fill: C.mute })
  b.arrow(892, 646, 952, 646, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(922, 632, '＋ ATP', { size: 10, fill: C.mute })
  b.rect(954, 624, 150, 44, { fill: C.rnaL, fillOp: 0.6, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(1029, 642, 'SAM', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(1029, 658, '（活性蛋氨酸）', { size: 9.5, fill: C.mute })
  b.arrow(1106, 646, 1166, 646, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.rect(1168, 624, 190, 44, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(1263, 642, '甲基化产物', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1263, 658, '＋ SAH', { size: 9.5, fill: C.mute })
  b.ctext(922, 676, 'ATP 水解驱动', { size: 9.5, weight: 700, fill: C.rnaD })
  b.wtext(766, 706, 'SAM → SAH 后经甲硫氨酸循环再生 Met，持续供甲基。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.text(766, 748, '接受甲基的受体：', { size: 12, weight: 700, fill: C.ink })
  const rcv = ['肾上腺素', '肌酸', '胆碱', '核酸（DNA / RNA 甲基化）']
  rcv.forEach((s, i) => {
    b.tag(830 + i * 148, 782, s, { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 5 })
  })
  b.wtext(766, 830, 'SAM 是体内甲基化反应的通用甲基供体——「一碳单位的另一条豪华通道」，与 THF 系统分工互补。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(766, 878, '甲基化修饰调控基因表达、神经递质与膜脂组成，SAM 供给状况直接影响之。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })
  b.ctext(1060, 946, 'THF 一碳单位 → 核苷酸合成 · SAM 甲基 → 甲基化修饰', { size: 11, weight: 700, fill: C.ink })
}

export default scene({
  title: '碳骨架去路、生糖生酮氨基酸与一碳单位',
  subtitle: '碳架汇入丙酮酸 / 乙酰CoA / TCA 中间物；纯生酮仅 Leu 与 Lys，生糖兼生酮为 Ile·Phe·Tyr·Trp；一碳单位由 THF 携带（Ser·Gly·His·Trp 供给），SAM 为通用甲基供体',
  draw,
})
