// bc ch3-s3 肽键与生物活性肽（39-a 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、肽键的形成与肽平面 ============
  b.panel(30, 132, 660, 436, { title: '一、肽键的形成与肽平面' })
  // 缩合反应
  b.rect(56, 176, 190, 52, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(151, 198, 'H₂N–CHR₁–COOH', { size: 12.5, fill: C.ink })
  b.ctext(151, 218, '（氨基酸 1）', { size: 10.5, fill: C.mute })
  b.ctext(266, 202, '+', { size: 16, weight: 700, fill: C.sub })
  b.rect(286, 176, 190, 52, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(381, 198, 'H₂N–CHR₂–COOH', { size: 12.5, fill: C.ink })
  b.ctext(381, 218, '（氨基酸 2）', { size: 10.5, fill: C.mute })
  b.arrow(494, 202, 560, 202, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(527, 186, '脱水缩合', { size: 10.5, fill: C.enzD })
  b.ctext(527, 226, '– H₂O', { size: 11, weight: 700, fill: C.enzD })
  b.text(56, 262, 'H₂N–CHR₁–CO–NH–CHR₂–COOH（二肽）', { size: 13, weight: 600, fill: C.ink })
  b.braceH(150, 274, 96, { label: '肽键（酰胺键）', fill: C.enz, size: 11 })

  // 肽平面结构图
  b.rect(222, 292, 124, 156, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.4, dash: '5 4', rx: 6 })
  b.ctext(284, 284, '肽平面：六原子共面', { size: 11, weight: 700, fill: C.accD })
  b.line(176, 372, 240, 352, { stroke: C.ink, sw: 2.2 }) // Cα1–C
  b.line(252, 348, 310, 388, { stroke: C.enz, sw: 3.6 }) // C–N 肽键
  b.line(322, 384, 386, 366, { stroke: C.ink, sw: 2.2 }) // N–Cα2
  b.circle(176, 374, 13, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(176, 378, 'Cα', { size: 9.5, weight: 700, fill: C.proD })
  b.circle(246, 350, 10, { fill: C.ink })
  b.ctext(246, 354, 'C', { size: 9, fill: '#ffffff', weight: 700 })
  b.circle(316, 386, 10, { fill: C.ink })
  b.ctext(316, 390, 'N', { size: 9, fill: '#ffffff', weight: 700 })
  b.circle(390, 368, 13, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(390, 372, 'Cα', { size: 9.5, weight: 700, fill: C.proD })
  // C=O 双键与 N–H
  b.line(243, 340, 243, 312, { stroke: C.ink, sw: 2 })
  b.line(249, 340, 249, 312, { stroke: C.ink, sw: 2 })
  b.circle(246, 306, 9, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.ctext(246, 310, 'O', { size: 9, weight: 700, fill: C.bad })
  b.line(316, 396, 316, 420, { stroke: C.ink, sw: 2 })
  b.circle(316, 428, 8, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.ctext(316, 431, 'H', { size: 9, weight: 700, fill: '#065f46' })
  // φ / ψ 旋转弧
  b.path('M186,344 a15,15 0 1 1 22,4', { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(196, 336, 'ψ', { size: 12, weight: 700, italic: true, fill: C.enzD })
  b.path('M352,352 a15,15 0 1 0 -20,8', { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(366, 344, 'φ', { size: 12, weight: 700, italic: true, fill: C.enzD })
  b.ctext(284, 458, 'C–N 键长 0.133 nm', { size: 11.5, weight: 700, fill: C.enzD })
  b.text(56, 496, '部分双键性质（介于单键 0.147 与双键 0.127 nm 之间）→ 不能自由旋转。', { size: 11.5, fill: C.sub })
  b.text(56, 524, '构象自由度来自 Cα 两侧单键的二面角 φ 与 ψ；肽键通常反式，X-Pro 可顺式（约 6%）。', { size: 11.5, fill: C.sub })

  // ============ 二、Ramachandran 图 ============
  b.panel(710, 132, 660, 436, { title: '二、Ramachandran 图：φ–ψ 允许区' })
  b.axis(760, 500, 540, 320, {
    xlabel: 'φ (°)', ylabel: 'ψ (°)',
    xticks: [[0, '−180'], [0.25, '−90'], [0.5, '0'], [0.75, '90'], [1, '180']],
    yticks: [[0, '−180'], [0.25, '−90'], [0.5, '0'], [0.75, '90'], [1, '180']],
  })
  // β 折叠区
  b.ellipse(760 + 0.167 * 540, 500 - 0.861 * 320, 58, 40, { fill: C.accL, fillOp: 0.85, stroke: C.acc, sw: 1.8 })
  b.ctext(760 + 0.167 * 540, 500 - 0.861 * 320 + 4, 'β 折叠', { size: 12, weight: 700, fill: C.accD })
  // 右手 α 螺旋区
  b.ellipse(760 + 0.342 * 540, 500 - 0.369 * 320, 44, 36, { fill: C.proL, fillOp: 0.85, stroke: C.pro, sw: 1.8 })
  b.ctext(760 + 0.342 * 540, 500 - 0.369 * 320 + 4, 'α 螺旋', { size: 12, weight: 700, fill: C.proD })
  // 左手 α 区（小）
  b.ellipse(760 + 0.658 * 540, 500 - 0.369 * 320, 26, 22, { fill: C.rnaL, fillOp: 0.85, stroke: C.rna, sw: 1.8 })
  b.ctext(760 + 0.658 * 540, 500 - 0.369 * 320 - 34, '左手 α', { size: 11, weight: 700, fill: C.rnaD })
  b.wtext(1052, 286, '每个残基的构象由一对 (φ, ψ) 决定；肽平面刚性使多数稳定二级结构集中于 α 螺旋与 β 折叠允许区。', { size: 11, fill: C.mute, maxW: 220, lh: 16 })
  b.text(760, 540, '书写方向：N 端（左）→ C 端（右），如 Ala-Gly-Ser', { size: 11.5, fill: C.sub })

  // ============ 三、生物活性肽 ============
  b.panel(30, 588, 1340, 384, { title: '三、生物活性肽：γ-肽键、环肽与神经肽' })
  // 左：谷胱甘肽
  b.tag(230, 632, '谷胱甘肽（GSH）', { fill: C.rnaL, stroke: C.rna, size: 13, weight: 700, tfill: C.rnaD, pad: 8 })
  b.text(56, 660, 'γ-谷氨酰-半胱氨酰-甘氨酸：第一个肽键由 Glu 的 γ-羧基形成（非 α-羧基）', { size: 11, fill: C.mute })
  b.circle(110, 740, 20, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(110, 744, 'Glu', { size: 11, weight: 700, fill: C.rnaD })
  b.circle(250, 740, 20, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(250, 744, 'Cys', { size: 11, weight: 700, fill: C.rnaD })
  b.circle(380, 740, 20, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(380, 744, 'Gly', { size: 11, weight: 700, fill: C.rnaD })
  b.path('M110,720 C110,688 250,688 250,720', { stroke: C.enz, sw: 3 })
  b.tag(180, 682, 'γ-肽键', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 6 })
  b.line(270, 740, 360, 740, { stroke: C.mute, sw: 2.4 })
  b.text(250, 782, '–SH', { size: 11.5, weight: 700, fill: C.warn })
  b.wtext(56, 822, 'GSH ↔ GSSG：细胞内最重要的巯基抗氧化剂——清除 H₂O₂、维持蛋白质巯基还原态。', { size: 11.5, fill: C.sub, maxW: 400, lh: 17 })
  // 中：九肽环（催产素/加压素）
  b.tag(700, 632, '催产素 / 加压素（下丘脑九肽）', { fill: C.proL, stroke: C.pro, size: 13, weight: 700, tfill: C.proD, pad: 8 })
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * Math.PI * 2 - Math.PI / 2
    const x = 700 + 46 * Math.cos(a), y = 736 + 46 * Math.sin(a)
    const isCys = k === 0 || k === 8
    b.circle(x, y, 7.5, { fill: isCys ? C.warnL : C.proL, stroke: isCys ? C.warn : C.pro, sw: 1.6 })
    if (k < 8) {
      const a2 = ((k + 1) / 9) * Math.PI * 2 - Math.PI / 2
      b.line(700 + 46 * Math.cos(a), 736 + 46 * Math.sin(a), 700 + 46 * Math.cos(a2), 736 + 46 * Math.sin(a2), { stroke: C.pro, sw: 1.8 })
    }
  }
  b.path('M670,700 Q685,660 700,690', { stroke: C.warn, sw: 2.4 })
  b.ctext(685, 654, '二硫键（—S—S—）', { size: 10, weight: 700, fill: C.warn })
  b.ctext(700, 740, '九肽环', { size: 11, weight: 700, fill: C.proD })
  b.wtext(560, 822, '均为下丘脑合成的九肽，含二硫键环；肽键可被蛋白酶水解或 6 mol/L HCl 化学裂解。', { size: 11.5, fill: C.sub, maxW: 300, lh: 17 })
  // 右：其他活性肽
  b.tag(1130, 632, '更多生物活性肽', { fill: C.accL, stroke: C.acc, size: 13, weight: 700, tfill: C.accD, pad: 8 })
  b.rect(930, 656, 420, 176, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 10 })
  const peptides: [string, string][] = [
    ['脑啡肽 · 内啡肽', '神经递质 / 神经调质'],
    ['短杆菌肽 S · 缬氨霉素', '微生物环肽抗菌剂'],
    ['TRH（三肽）', '促甲状腺素释放激素'],
    ['抗利尿激素类似物', '肽类激素'],
  ]
  peptides.forEach(([t, s], i) => {
    const y = 688 + i * 36
    b.text(950, y, t, { size: 12, weight: 700, fill: C.ink })
    b.text(1130, y, s, { size: 11, fill: C.sub })
  })
  b.wtext(56, 928, '多肽按 N 端 → C 端书写；专一性裂解（蛋白酶 / 化学法）构成蛋白质一级结构测定「碎片化」策略的基础。', { size: 11.5, fill: C.mute, maxW: 1290, lh: 16 })
}

export default scene({
  title: '肽键与生物活性肽：刚性平面与可旋转二面角',
  subtitle: 'C–N 键 0.133 nm 的部分双键使六原子共面，构象自由度来自 φ/ψ；GSH 的 γ-肽键、催产素九肽二硫键环与环肽抗菌剂',
  draw,
})
