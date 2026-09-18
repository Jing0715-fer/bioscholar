// bc ch11-s1 氨基酸的脱氨基作用与氨的转运（39-a 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、转氨基作用 ============
  b.panel(30, 132, 660, 430, { title: '一、转氨基作用：PLP 辅酶与可逆的氨基转移' })
  b.rect(56, 186, 118, 32, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(115, 206, 'α-氨基酸', { size: 11.5, fill: C.ink })
  b.ctext(190, 206, '＋', { size: 13, fill: C.sub })
  b.rect(210, 186, 128, 32, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 7 })
  b.ctext(274, 206, 'α-酮戊二酸', { size: 11.5, weight: 700, fill: C.accD })
  b.line(170, 226, 170, 268, { stroke: C.sub, sw: 2.2, marker: 'ink', markerStart: 'ink' })
  b.rect(56, 276, 118, 32, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(115, 296, 'α-酮酸', { size: 11.5, fill: C.ink })
  b.ctext(190, 296, '＋', { size: 13, fill: C.sub })
  b.rect(210, 276, 128, 32, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(274, 296, '谷氨酸', { size: 11.5, weight: 700, fill: C.rnaD })
  b.tag(452, 246, '转氨酶（辅酶 PLP）', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 6 })
  b.ctext(452, 274, '反应可逆 · 平衡常数≈1', { size: 10, fill: C.mute })
  b.wtext(390, 196, 'PLP 与氨基酸形成 Schiff 碱（醛亚胺），经「醛醇」互变完成氨基转移，PLP ⇌ PMP 循环周转。', { size: 10.5, fill: C.sub, maxW: 280, lh: 15 })
  // ALT / AST
  b.table(56, 336, 612, {
    headers: ['转氨酶', '催化的反应', '含量最高器官'],
    colW: [128, 312, 172],
    rowH: 34,
    fontSize: 10.5,
    rows: [
      ['ALT / GPT', '丙氨酸 + α-KG ⇌ 丙酮酸 + Glu', '肝'],
      ['AST / GOT', '天冬氨酸 + α-KG ⇌ OAA + Glu', '心肌'],
    ],
  })
  b.rect(56, 470, 612, 40, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.5, rx: 8 })
  b.text(72, 494, '血清转氨酶升高是肝细胞 / 心肌损伤的灵敏指标（急性肝炎 ALT↑↑）', { size: 11, weight: 700, fill: C.bad })
  b.wtext(56, 530, '转氨只转移氨基、并未净脱氨——净脱氨需与谷氨酸脱氢酶配合。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 二、联合脱氨基与嘌呤核苷酸循环 ============
  b.panel(750, 132, 660, 430, { title: '二、联合脱氨基（主要方式）与嘌呤核苷酸循环' })
  b.rect(770, 186, 140, 36, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(840, 208, '各种氨基酸', { size: 11.5, fill: C.ink })
  b.arrow(912, 204, 1000, 204, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(960, 184, '转氨酶', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 4 })
  b.rect(1002, 186, 120, 36, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(1062, 208, '谷氨酸', { size: 12, weight: 700, fill: C.rnaD })
  b.arrow(1124, 204, 1212, 204, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.rect(1214, 176, 136, 56, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(1282, 198, 'α-酮戊二酸', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1282, 216, '＋ NH₄⁺', { size: 11, weight: 700, fill: C.bad })
  b.tag(1170, 160, 'L-谷氨酸脱氢酶 GDH（限速关键）', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.wtext(766, 262, 'GDH 位于线粒体基质，辅酶 NAD⁺ 或 NADP⁺：谷氨酸 + NAD(P)⁺ + H₂O ⇌ α-KG + NH₄⁺ + NAD(P)H。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
  b.wtext(766, 300, '受 ADP / GDP 激活、ATP / GTP 抑制（能量状态调控）。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
  b.rect(766, 330, 340, 44, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.6, rx: 8 })
  b.wtext(782, 350, '联合脱氨基 = 转氨 + GDH：体内氨基酸脱氨的主要方式，可逆——其逆过程即非必需氨基酸合成的主要途径。', { size: 10.5, weight: 700, fill: '#065f46', maxW: 312, lh: 14 })
  b.rect(1126, 330, 224, 118, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(1142, 354, '肌肉的替代方案：', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(1142, 376, '骨骼肌与心肌 GDH 活性低，改走嘌呤核苷酸循环脱氨：AMP → IMP + NH₄⁺。', { size: 10, fill: C.sub, maxW: 196, lh: 14 })
  b.wtext(766, 494, '「转氨收集氨基 → GDH 集中释放」的分工，使各类氨基酸共享一套脱氨机具。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })
  b.wtext(766, 530, 'α-酮戊二酸既是共同氨基受体，又是 TCA 中间物——转氨与产能枢纽重叠。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 三、氨的无毒运输 ============
  b.panel(30, 566, 700, 414, { title: '三、氨的转运：谷氨酰胺与丙氨酸两种「无毒载体」' })
  // 谷氨酰胺路线
  b.text(46, 618, '① 谷氨酰胺（脑 · 肌肉 → 肝 / 肾）：', { size: 12, weight: 700, fill: C.ink })
  b.cell(120, 690, 56, 40, { label: '脑 · 肌' })
  b.rect(210, 668, 130, 44, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.6, rx: 8 })
  b.ctext(275, 684, '谷氨酰胺 Gln', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(275, 702, '（无毒载氨）', { size: 9.5, fill: C.mute })
  b.arrow(178, 690, 206, 690, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(280, 648, '谷氨酰胺合成酶（耗 ATP）：Glu + NH₄⁺ → Gln', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 600, tfill: C.enzD, pad: 4 })
  b.arrow(340, 690, 430, 690, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(385, 676, '血', { size: 10, fill: C.mute })
  b.cell(500, 690, 56, 40, { label: '肝 · 肾' })
  b.arrow(558, 690, 626, 690, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(560, 648, '谷氨酰胺酶水解释放 NH₄⁺', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 600, tfill: C.enzD, pad: 4 })
  b.rect(628, 668, 96, 44, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(676, 684, 'NH₄⁺', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(676, 702, '尿素 / 排酸', { size: 9, fill: C.mute })
  b.wtext(46, 744, '肝内 NH₄⁺ 入尿素循环解毒；肾内以 NH₄⁺ 形式泌 H⁺ 排酸（兼运输与酸碱调节）。', { size: 10.5, fill: C.sub, maxW: 660, lh: 15 })
  // 丙氨酸路线
  b.text(46, 786, '② 丙氨酸（葡萄糖-丙氨酸循环，肌肉 → 肝）：', { size: 12, weight: 700, fill: C.ink })
  b.cell(120, 860, 56, 40, { label: '肌肉' })
  b.rect(210, 838, 130, 44, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(275, 854, '丙氨酸 Ala', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(275, 872, '（氨 + 碳架同运）', { size: 9.5, fill: C.mute })
  b.arrow(178, 860, 206, 860, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(280, 818, '丙酮酸接受氨基 → 丙氨酸', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 600, tfill: C.enzD, pad: 4 })
  b.arrow(340, 860, 430, 860, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.ctext(385, 846, '血', { size: 10, fill: C.mute })
  b.cell(500, 860, 56, 40, { label: '肝' })
  b.arrow(558, 860, 626, 860, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.tag(588, 818, '脱氨 → 丙酮酸 → 糖异生', { fill: C.accL, stroke: C.acc, size: 9.5, weight: 600, tfill: C.accD, pad: 4 })
  b.rect(628, 838, 96, 44, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.5, rx: 8 })
  b.ctext(676, 854, '葡萄糖', { size: 11.5, weight: 700, fill: '#065f46' })
  b.ctext(676, 872, '→ 回肌肉', { size: 9, fill: C.mute })
  b.wtext(46, 914, '肌肉氨基酸的氨基以无毒丙氨酸运至肝脱氨，碳架经糖异生成葡萄糖运回肌肉——运氨兼运碳。', { size: 10.5, fill: C.sub, maxW: 660, lh: 15 })
  b.wtext(46, 952, '血氨有毒（脑最敏感），必须以 Gln / Ala 形式「押运」。', { size: 11, weight: 700, fill: C.ink, maxW: 660, lh: 15 })

  // ============ 四、高血氨与肝性脑病 ============
  b.panel(750, 566, 620, 414, { title: '四、高血氨的毒性：肝性脑病的生化机制' })
  const chain = [
    ['NH₄⁺ 进入脑组织', C.badL, C.bad],
    ['与 α-KG 结合生成谷氨酸（消耗 NADH）', C.warnL, C.warn],
    ['谷氨酰胺合成（消耗 ATP）', C.warnL, C.warn],
    ['TCA 中间物耗竭 · 能量危机 · 渗透压失衡', C.badL, C.bad],
    ['星形胶质细胞肿胀 → 肝性脑病', C.badL, C.bad],
  ]
  chain.forEach(([t, fl, st], i) => {
    const y = 612 + i * 62
    b.rect(790, y, 360, 40, { fill: fl, fillOp: 0.55, stroke: st, sw: 1.6, rx: 8 })
    b.ctext(970, y + 24, t, { size: 11.5, weight: 700, fill: st === C.warn ? '#78350f' : C.bad })
    if (i < 4) b.arrow(970, y + 40, 970, y + 58, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  })
  b.rect(1170, 612, 176, 130, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 8 })
  b.ctext(1258, 638, '临床处置', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(1182, 662, '· 限制蛋白质摄入', { size: 10.5, fill: C.sub, maxW: 152, lh: 16 })
  b.wtext(1182, 690, '· 乳果糖酸化肠道，减少氨吸收', { size: 10.5, fill: C.sub, maxW: 152, lh: 16 })
  b.wtext(766, 942, '氨把脑的「产能机器」与「渗透平衡」同时拖垮——肝功能衰竭时解毒中断。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })
}

export default scene({
  title: '氨基酸的脱氨基作用与氨的转运',
  subtitle: '转氨（PLP/Schiff 碱）+ L-谷氨酸脱氢酶组成联合脱氨基（主要方式，肌肉改走嘌呤核苷酸循环）；血氨以谷氨酰胺与丙氨酸双载体无毒运输——Gln 供脑肌→肝肾、Ala 偶联葡萄糖-丙氨酸循环',
  draw,
})
