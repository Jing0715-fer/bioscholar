// bp ch5-s3 氧化还原电位与电子传递（39-e 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、E°′ 阶梯：电子沿呼吸链下落 ============
  b.panel(30, 132, 1340, 322, { title: '一、E°′「能级阶梯」：电子沿呼吸链从 NADH 逐级下落至 O₂' })

  // 纵向 E°′ 轴（负在上 = 电子能量高）
  const ay = (E: number) => 186 + ((E + 0.4) / 1.3) * 222
  b.ctext(140, 176, 'E°′ (V)', { size: 11, weight: 600, fill: C.sub })
  b.line(175, 186, 175, 408, { stroke: C.sub, sw: 1.8 })
  for (const E of [-0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]) {
    b.line(169, ay(E), 175, ay(E), { stroke: C.sub, sw: 1.8 })
    b.etext(163, ay(E) + 4, E.toFixed(1), { size: 10.5, fill: C.mute })
  }

  // 阶梯平台：电对 + E°′ 值
  type Step = { name: string; x: number; cy: number; fill: string; stroke: string; tfill: string; dash?: string }
  const steps: Step[] = [
    { name: 'NAD⁺/NADH   −0.320 V', x: 205, cy: ay(-0.32), fill: C.dnaL, stroke: C.dna, tfill: C.dnaD },
    { name: 'FAD/FADH₂（游离） −0.219 V', x: 205, cy: ay(-0.219), fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, dash: '6 4' },
    { name: 'Q / QH₂   +0.045 V', x: 455, cy: ay(0.045), fill: C.accL, stroke: C.acc, tfill: C.accD },
    { name: 'cyt c（Fe³⁺/Fe²⁺）   +0.254 V', x: 705, cy: ay(0.254), fill: C.proL, stroke: C.pro, tfill: C.proD },
    { name: '½O₂ / H₂O   +0.816 V', x: 955, cy: ay(0.816), fill: C.badL, stroke: C.bad, tfill: C.bad },
  ]
  steps.forEach(s => {
    b.rect(s.x, s.cy - 8, 200, 16, { fill: s.fill, stroke: s.stroke, sw: 1.8, rx: 4, dash: s.dash })
    b.ctext(s.x + 100, s.cy + 3.5, s.name, { size: 10, weight: 700, fill: s.tfill })
  })

  // 电子下落箭头 + 复合物标签
  b.arrow(407, ay(-0.32) + 4, 453, ay(0.045) - 6, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.ctext(432, 218, '2e⁻', { size: 9.5, weight: 700, fill: C.enzD })
  b.arrow(407, ay(-0.219) + 4, 453, ay(0.045) - 3, { stroke: C.rna, sw: 2, marker: 'rna', dash: '6 4' })
  b.tag(430, 288, '复合物 I', { fill: C.panelB, stroke: C.sub, size: 10, weight: 700, tfill: C.ink, pad: 7 })
  b.arrow(655, ay(0.045) + 4, 703, ay(0.254) - 6, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.tag(680, 240, '复合物 III', { fill: C.panelB, stroke: C.sub, size: 10, weight: 700, tfill: C.ink, pad: 7 })
  b.arrow(905, ay(0.254) + 4, 953, ay(0.816) - 6, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.tag(935, 318, '复合物 IV', { fill: C.panelB, stroke: C.sub, size: 10, weight: 700, tfill: C.ink, pad: 7 })
  b.ctext(912, 352, '2e⁻', { size: 9.5, weight: 700, fill: C.enzD })

  // 总落差双箭头
  b.line(1185, ay(-0.32), 1185, ay(0.816), { stroke: C.bad, sw: 2.4, marker: 'bad', markerStart: 'bad' })
  b.text(1198, 282, 'ΔE°′ = 1.136 V', { size: 13.5, weight: 700, fill: C.bad })
  b.text(1198, 306, '（n = 2 个电子）', { size: 10.5, fill: C.sub })

  b.ctext(690, 436, '电子自发地从电位更负的还原剂（供体）流向电位更正的氧化剂（受体）——把各电对按 E°′ 排成一列，流动方向与能量收益一目了然', { size: 10.5, fill: C.mute })

  // ============ 二、Nernst 方程与自由能结算 ============
  b.panel(30, 470, 1340, 232, { title: '二、Nernst 方程：实际电位随浓度比移动；ΔG°′ = −nF·ΔE°′' })

  // 左：Nernst 公式卡
  b.rect(50, 494, 450, 190, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.ctext(275, 522, 'E = E°′ − (RT/nF)·ln([还原型]/[氧化型])', { size: 15, weight: 700, fill: C.ink })
  b.line(70, 540, 480, 540, { stroke: C.line, sw: 1 })
  const nernst: Array<[string, number]> = [
    ['F = 96 485 C/mol；n 为转移电子数', 566],
    ['标准态：pH 7、25 °C（相对标准氢电极）', 592],
    ['ΔG°′ = −nF·ΔE°′，ΔE°′ = E°′(受体) − E°′(供体)', 618],
    ['ΔE°′ > 0 ⇔ ΔG°′ < 0：电子自发流动', 644],
  ]
  nernst.forEach(([t, y]) => {
    b.circle(82, y - 4, 4, { fill: C.acc })
    b.text(94, y, t, { size: 11, weight: 600, fill: C.sub })
  })

  // 中：NADH→O₂ 结算卡
  b.rect(520, 494, 400, 190, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.4, rx: 8 })
  b.ctext(720, 522, 'NADH → O₂ 的能量结算', { size: 13.5, weight: 700, fill: C.accD })
  b.ctext(720, 554, 'ΔE°′ = 0.816 − (−0.320) = 1.136 V', { size: 14, weight: 700, fill: C.ink })
  b.ctext(720, 580, 'ΔG°′ = −2 × 96 485 × 1.136 / 1000', { size: 12, fill: C.sub })
  b.ctext(720, 610, '≈ −219 kJ/mol', { size: 18, weight: 700, fill: C.enzD })
  b.ctext(720, 638, '细胞内 ATP「价格」≈ 50 kJ/mol', { size: 10.5, fill: C.sub })
  b.ctext(720, 660, '→ 足以合成数个 ATP', { size: 12, weight: 700, fill: C.ok })

  // 右：换算速查 + Nernst 移动
  b.rect(940, 494, 400, 190, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(960, 522, '换算速查与电位移动', { size: 13.5, weight: 700, fill: C.ink })
  b.text(960, 550, '37 °C 时 RT/F ≈ 26.7 mV', { size: 11.5, weight: 600, fill: C.sub })
  b.text(960, 574, '每 0.1 V 电位差 ≈ 每电子 9.6 kJ/mol', { size: 11.5, weight: 600, fill: C.sub })
  b.line(960, 634, 1320, 634, { stroke: C.sub, sw: 1.8, marker: 'mute', markerStart: 'mute' })
  b.text(964, 620, '更负', { size: 9.5, fill: C.mute })
  b.etext(1316, 620, '更正', { size: 9.5, fill: C.mute })
  b.circle(1180, 634, 5, { fill: C.sub })
  b.circle(1060, 634, 5, { fill: C.enz })
  b.arrow(1174, 616, 1068, 616, { stroke: C.enz, sw: 1.8, marker: 'enz', dash: '5 4' })
  b.ctext(1120, 600, '[还原型]/[氧化型] ↑ ⇒ E 变负', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(1180, 658, 'E°′', { size: 9.5, fill: C.mute })
  b.ctext(1060, 658, 'E', { size: 9.5, weight: 700, fill: C.enzD })

  // ============ 三、电位轴 = 海拔图：呼吸下落，光合上坡 ============
  b.panel(30, 718, 1340, 262, { title: '三、电位轴 = 生物能量学的「海拔图」：呼吸下落，光合并上坡' })

  // 两条海拔基准线
  b.line(60, 796, 1340, 796, { stroke: C.faint, sw: 1.2, dash: '8 6' })
  b.line(60, 926, 1340, 926, { stroke: C.faint, sw: 1.2, dash: '8 6' })
  b.etext(1340, 788, '高处：负电位 · 电子能量高', { size: 10, weight: 700, fill: C.sub })
  b.text(60, 950, '低处：正电位 · 电子能量低', { size: 10, weight: 700, fill: C.sub })

  // 左：呼吸（下落）
  b.tag(85, 920, '食物', { fill: C.proL, stroke: C.pro, size: 10, weight: 700, tfill: C.proD, pad: 8 })
  b.arrow(115, 912, 196, 812, { stroke: C.dna, sw: 2.2, marker: 'dna', dash: '6 4' })
  b.text(140, 862, '脱氢', { size: 9.5, weight: 700, fill: C.dnaD })
  b.polyline([[210, 796], [272, 840], [334, 840], [396, 884], [458, 884], [520, 926]], { stroke: C.enz, sw: 3 })
  b.circle(210, 796, 9, { fill: C.rnaL, stroke: C.rna, sw: 2.2 })
  b.ctext(210, 776, 'NADH', { size: 10.5, weight: 700, fill: C.rnaD })
  b.circle(520, 926, 9, { fill: C.badL, stroke: C.bad, sw: 2.2 })
  b.ctext(520, 950, 'O₂', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(370, 812, '呼吸：沿台阶逐级下落（总落差 1.136 V）', { size: 10, weight: 700, fill: C.enzD })
  b.tag(585, 866, 'ATP 合酶：势能 → ATP 的银行', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 8 })
  b.arrow(452, 882, 500, 870, { stroke: C.mute, sw: 1.6, marker: 'mute', dash: '4 3' })

  // 右：光合（上坡）
  b.polyline([[760, 926], [830, 900], [900, 900], [970, 872], [1040, 872], [1110, 844], [1180, 844], [1250, 796]], { stroke: C.ok, sw: 3 })
  b.circle(760, 926, 9, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(760, 950, 'H₂O', { size: 10.5, weight: 700, fill: C.accD })
  b.circle(1250, 796, 9, { fill: C.okL, stroke: C.ok, sw: 2.2 })
  b.ctext(1250, 776, 'NADP⁺', { size: 10.5, weight: 700, fill: '#065f46' })
  b.circle(990, 778, 11, { fill: C.warnL, stroke: C.warn, sw: 2 })
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2
    b.line(990 + 15 * Math.cos(a), 778 + 15 * Math.sin(a), 990 + 21 * Math.cos(a), 778 + 21 * Math.sin(a), { stroke: C.warn, sw: 1.8 })
  }
  b.arrow(990, 794, 990, 860, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.text(1012, 830, '光子 hv', { size: 10, weight: 700, fill: C.warn })
  b.ctext(1000, 904, '光合：光把电子从 H₂O「泵」上 NADP⁺ 高能级', { size: 10, weight: 700, fill: '#065f46' })

  b.ctext(700, 970, '电位轴就是生物能量学的「海拔图」——食物经脱氢把电子抬上高处，呼吸下落、光合并上坡；ATP 合酶把势能兑换为化学能', { size: 10.5, fill: C.mute })
}

export default scene({
  title: '氧化还原电位与电子传递：E°′ 阶梯与 Nernst 方程',
  subtitle: 'E°′：NAD⁺/NADH −0.320 → Q +0.045 → cyt c +0.254 → ½O₂/H₂O +0.816 V；ΔE°′ = 1.136 V、n = 2 → ΔG°′ = −2×96485×1.136 ≈ −219 kJ/mol（ATP 价格 ≈ 50 kJ/mol）；37 °C 时 RT/F ≈ 26.7 mV',
  draw,
})
