// bc ch10-s3 脂肪酸的从头合成（39-a 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、原料与限速反应 ============
  b.panel(30, 132, 660, 430, { title: '一、原料准备与限速反应：乙酰CoA 羧化酶（ACC）' })
  // 线粒体 → 胞质 穿梭
  b.zone(46, 172, 618, 150, { label: '柠檬酸-丙酮酸穿梭：乙酰CoA 出线粒体', fill: C.panelB, fillOp: 0.5 })
  b.rect(70, 246, 108, 34, { fill: '#ffedd5', stroke: C.warn, sw: 1.5, rx: 7 })
  b.ctext(124, 267, '线粒体', { size: 10.5, weight: 700, fill: '#78350f' })
  b.rect(190, 246, 110, 34, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(245, 267, '乙酰CoA', { size: 11, weight: 700, fill: C.ink })
  b.arrow(300, 263, 360, 263, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(362, 246, 90, 34, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(407, 267, '柠檬酸', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(407, 236, '＋OAA 缩合跨膜', { size: 9, fill: C.mute })
  b.arrow(452, 263, 512, 263, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(482, 250, '柠檬酸裂解酶', { size: 8.5, fill: C.mute })
  b.rect(514, 246, 90, 34, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(559, 267, '乙酰CoA', { size: 11, weight: 700, fill: C.ink })
  b.ctext(559, 236, '（胞质）', { size: 9, fill: C.mute })
  b.wtext(70, 310, '胞质 OAA 经苹果酸酶氧化脱羧 → 丙酮酸 + NADPH；NADPH 另来自磷酸戊糖途径。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  // ACC 限速反应
  b.rect(46, 352, 618, 118, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.8, rx: 10 })
  b.tag(160, 384, 'ACC（限速酶 · 生物素辅基 · Mn²⁺）', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 6 })
  b.text(70, 420, '乙酰CoA + HCO₃⁻ + ATP → 丙二酰CoA + ADP + Pi', { size: 12, weight: 700, fill: C.ink })
  b.wtext(70, 444, '柠檬酸别构激活（聚合为活性丝状体）；长链脂酰CoA 反馈抑制；AMPK 磷酸化使其失活（能量不足停合成）。胰岛素去磷酸化激活、胰高血糖素 cAMP-PKA 抑制。', { size: 10, fill: C.sub, maxW: 575, lh: 14 })
  b.ctext(560, 384, '二碳供体由此备好', { size: 10.5, weight: 700, fill: C.enzD })

  // ============ 二、FAS 七轮循环 ============
  b.panel(710, 132, 660, 430, { title: '二、脂肪酸合酶（FAS）：缩合四步循环 × 7 轮 → 棕榈酸' })
  b.wtext(726, 174, '哺乳动物 FAS 为同二聚体多功能酶（含 7 种活性），ACP（4′-磷酸泛酰巯基乙胺臂）是转位「机械手」；大肠杆菌为可解离多酶体系。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // 循环四步（环形）
  const cyc: [string, string, string, number, number][] = [
    ['① 缩合', 'β-酮脂酰-ACP 合酶', '脂酰 + 丙二酰 → β-酮脂酰（释 CO₂ 推动缩合）', 890, 240],
    ['② 还原（NADPH）', '', 'β-酮脂酰 → β-羟脂酰', 1150, 240],
    ['③ 脱水', '', 'β-羟脂酰 → 烯脂酰', 1150, 380],
    ['④ 再还原（NADPH）', '', '烯脂酰 → 饱和脂酰-ACP（延长 2C）', 890, 380],
  ]
  cyc.forEach(([t, enz, s, x, y]) => {
    b.rect(x - 108, y - 26, 216, 62, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 9 })
    b.ctext(x, y - 8, t, { size: 12, weight: 700, fill: C.ink })
    if (enz) b.ctext(x, y + 6, enz, { size: 9, weight: 700, fill: C.enzD })
    b.wtext(x, y + (enz ? 20 : 12), s, { size: 9.5, fill: C.sub, maxW: 200, lh: 12, anchor: 'middle' })
  })
  b.arrow(1002, 258, 1036, 258, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.arrow(1150, 306, 1150, 342, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.arrow(1036, 400, 1002, 400, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.arrow(890, 342, 890, 306, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.ctext(1020, 320, '× 7 轮', { size: 13, weight: 700, fill: C.enzD })
  // 产物
  b.arrow(998, 232, 1212, 196, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.tag(1100, 236, '硫酯酶水解释放', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 600, tfill: C.enzD, pad: 5 })
  b.rect(1216, 168, 132, 40, { fill: C.okL, fillOp: 0.6, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(1282, 186, '棕榈酸', { size: 13, weight: 700, fill: '#065f46' })
  b.ctext(1282, 200, '（16:0）', { size: 10, fill: C.mute })
  b.rect(726, 452, 620, 62, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(742, 474, '总反应：8 乙酰CoA + 7 ATP + 14 NADPH + 14 H⁺ → 棕榈酸 + 8 CoA + 7 ADP + 7 Pi + 14 NADP⁺ + 6 H₂O', { size: 11, weight: 700, fill: C.ink, maxW: 590, lh: 16 })
  b.wtext(726, 532, '部位：胞质。与 β 氧化互为开关：丙二酰CoA 抑制 CPT-I，关掉「氧化门」。', { size: 10.5, fill: C.mute, maxW: 620, lh: 14 })

  // ============ 三、从头合成 vs β 氧化 ============
  b.panel(30, 566, 660, 414, { title: '三、从头合成与 β 氧化：镜像对照' })
  b.table(56, 624, 608, {
    headers: ['项目', '从头合成', 'β 氧化'],
    colW: [130, 244, 234],
    rowH: 42,
    fontSize: 11,
    rows: [
      ['部位', '胞质', '线粒体基质'],
      ['酰基载体', 'ACP（泛酰巯基乙胺）', 'CoA'],
      ['二碳单位', '丙二酰CoA（缩合供体）', '切下乙酰CoA'],
      ['氢载体', 'NADPH', 'FAD · NAD⁺'],
      ['限速酶', '乙酰CoA 羧化酶（ACC）', 'CPT-I（肉碱穿梭）'],
      ['方向', '还原（耗能）', '氧化（产能）'],
    ],
  })
  b.wtext(56, 954, '同一脂肪酸「合成时还原、分解时氧化」，两条途径分区、分酶、分载体，避免无效循环。', { size: 11, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 四、延长与去饱和 ============
  b.panel(710, 566, 660, 414, { title: '四、延长与去饱和：必需脂肪酸的由来' })
  b.rect(746, 624, 150, 44, { fill: C.okL, fillOp: 0.6, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(821, 644, '棕榈酸 16:0', { size: 12, weight: 700, fill: '#065f46' })
  b.ctext(821, 660, '（FAS 产物）', { size: 9.5, fill: C.mute })
  b.arrow(896, 646, 946, 646, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(1060, 646, '延长酶系（内质网 / 线粒体）', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 5 })
  b.ctext(1060, 672, '丙二酰CoA 或乙酰CoA 供二碳 · NADPH 供氢', { size: 9.5, fill: C.mute })
  b.arrow(1174, 668, 1174, 700, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1094, 702, 160, 40, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(1174, 718, '18C 以上', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(1174, 732, '硬脂酸等长链', { size: 9.5, fill: C.mute })
  // 去饱和
  b.arrow(821, 668, 821, 704, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(746, 706, 180, 40, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(836, 730, '去饱和酶（Δ⁹ 等）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(746, 776, '可引入顺式双键，但人体缺乏 Δ12 与 Δ15 去饱和酶——不能在 C-9 与甲基端之间引入双键。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.rect(1094, 776, 240, 84, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(1110, 800, '必需脂肪酸（必须由膳食供给）', { size: 11.5, weight: 700, fill: C.bad })
  b.text(1110, 824, '· 亚油酸（18:2 Δ9,12）', { size: 11, fill: C.sub })
  b.text(1110, 846, '· α-亚麻酸（18:3 Δ9,12,15）', { size: 11, fill: C.sub })
  b.wtext(726, 890, '因此，含 Δ12 / Δ15 双键的多不饱和脂肪酸人体无法自造，必须由膳食供给。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
  b.wtext(726, 930, '合成原料四要素：乙酰CoA（碳源）· ATP · HCO₃⁻（CO₂）· NADPH（供氢）。', { size: 11, weight: 700, fill: C.ink, maxW: 620, lh: 16 })
}

export default scene({
  title: '脂肪酸的从头合成：ACC 限速与 FAS 七轮循环',
  subtitle: '胞质进行：乙酰CoA 经柠檬酸-丙酮酸穿梭出线粒体，ACC（生物素）产丙二酰CoA 为二碳供体，FAS 四步循环 7 轮耗 14 NADPH 产棕榈酸；人体缺 Δ12/Δ15 去饱和酶故亚油酸、α-亚麻酸为必需脂肪酸',
  draw,
})
