// ph ch4-s1 化学突触传递与神经递质系统
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、突触超微结构与递质释放链 ============
  b.panel(30, 132, 790, 440, { title: '一、突触超微结构与递质释放链' })
  // 突触前末梢（圆角囊）
  b.arrow(38, 240, 84, 240, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.text(40, 226, 'AP', { size: 11, weight: 700, fill: C.accD })
  b.rect(60, 176, 420, 146, { fill: C.panel, stroke: C.sub, sw: 2.2, rx: 24 })
  b.ctext(270, 200, '突触前末梢', { size: 12, weight: 700, fill: C.sub })
  // 储备囊泡
  const ves = (cx: number, cy: number, r: number) => {
    b.circle(cx, cy, r, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
    b.circle(cx - r * 0.35, cy - r * 0.3, 2.2, { fill: C.rna })
    b.circle(cx + r * 0.35, cy - r * 0.15, 2.2, { fill: C.rna })
    b.circle(cx, cy + r * 0.4, 2.2, { fill: C.rna })
  }
  ves(120, 240, 12); ves(170, 225, 12); ves(225, 245, 12); ves(280, 228, 12); ves(330, 248, 12)
  // 胞吐中的囊泡
  b.circle(360, 294, 12, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(360, 298, 'ACh', { size: 8, weight: 700, fill: C.rnaD })
  // 锚定囊泡 + SNARE
  ves(150, 300, 10); ves(200, 298, 10); ves(250, 300, 10)
  b.line(150, 310, 150, 322, { stroke: C.pro, sw: 1.4, dash: '3 2' })
  b.line(200, 308, 200, 322, { stroke: C.pro, sw: 1.4, dash: '3 2' })
  b.line(250, 310, 250, 322, { stroke: C.pro, sw: 1.4, dash: '3 2' })
  b.text(262, 285, 'SNARE 复合体', { size: 10.5, weight: 700, fill: C.proD })
  // 活性区（突触前膜增厚）
  b.rect(130, 318, 240, 7, { fill: C.acc })
  b.text(380, 326, '活性区', { size: 10.5, weight: 700, fill: C.accD })
  // Ca2+ 通道与内流
  b.rect(384, 310, 12, 24, { fill: C.warn, stroke: C.warnD, sw: 1.2 })
  b.text(404, 302, 'Ca^{2+} 通道', { size: 10.5, weight: 700, fill: C.warnD })
  b.ion(420, 352, 'Ca^{2+}', { r: 13, size: 9 })
  b.arrow(416, 344, 394, 314, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  // 突触间隙与递质弥散
  b.rect(60, 368, 420, 6, { fill: C.sub })
  b.text(66, 352, '突触间隙 20–40 nm', { size: 10.5, fill: C.mute })
  b.arrow(330, 320, 318, 364, { stroke: C.warn, sw: 1.4, dash: '4 3', marker: 'warn' })
  b.arrow(352, 320, 340, 364, { stroke: C.warn, sw: 1.4, dash: '4 3', marker: 'warn' })
  // 突触后：受体与致密区
  b.rect(60, 374, 420, 96, { fill: C.panel, stroke: C.sub, sw: 2, rx: 20 })
  for (const rx of [150, 182, 214, 246, 278, 310, 342]) {
    b.rect(rx, 372, 20, 16, { fill: C.okL, stroke: C.ok, sw: 1.3 })
  }
  b.text(380, 386, '离子型受体', { size: 10.5, weight: 700, fill: C.okD })
  b.rect(140, 392, 260, 6, { fill: C.enz })
  b.text(66, 428, 'PSD 突触后致密区', { size: 10.5, weight: 700, fill: C.enzD })
  b.arrow(270, 474, 270, 514, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(270, 540, '突触后电位（EPSP / IPSP）', { size: 11.5, weight: 700, fill: C.enzD })
  // 右列：释放级联
  const steps: [string, string][] = [
    ['① AP 到达末梢', C.accL],
    ['② 电压门控 Ca^{2+} 通道开放', C.warnL],
    ['③ Ca^{2+} 内流形成微域', C.warnL],
    ['④ SNARE 介导囊泡融合（胞吐）', C.rnaL],
    ['⑤ 递质弥散过间隙', C.rnaL],
    ['⑥ 受体结合 → EPSP / IPSP', C.okL],
  ]
  steps.forEach(([s, f], i) => {
    const cy = 190 + i * 50
    b.tag(650, cy, s, { fill: f, stroke: C.line, tfill: C.ink, size: 11.5, weight: 700, pad: 10 })
    if (i < steps.length - 1) b.arrow(650, cy + 14, 650, cy + 36, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  })
  b.wtext(520, 486, '量子式释放：1 个囊泡 = 1 个量子；自发释放单个量子形成微终板电位 MEPP，幅度约 0.4–0.6 mV', { size: 10.5, fill: C.sub, maxW: 280, lh: 18 })

  // ============ 二、EPSP/IPSP 的时空总和与轴突始段点火 ============
  b.panel(850, 132, 520, 440, { title: '二、EPSP/IPSP 整合与轴突始段点火' })
  b.text(878, 216, '膜电位', { size: 12, weight: 600, fill: C.sub })
  b.arrow(950, 470, 950, 186, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(950, 470, 1330, 470, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.etext(944, 434, '-70 mV', { size: 11.5, fill: C.mute })
  b.etext(944, 324, '-55 mV', { size: 11.5, fill: C.badD })
  b.line(950, 430, 1310, 430, { stroke: C.faint, sw: 1, dash: '2 4' })
  b.line(950, 320, 1310, 320, { stroke: C.bad, sw: 1.2, dash: '6 4' })
  b.text(1052, 312, '阈电位（AIS 处最低）', { size: 10.5, weight: 700, fill: C.badD })
  // 时间总和 + AP 尖峰
  b.polyline([[950, 430], [988, 430], [1005, 404], [1024, 421], [1050, 392], [1072, 407], [1096, 352], [1120, 372], [1146, 318], [1158, 290], [1176, 232], [1190, 246], [1206, 420], [1224, 448], [1250, 430], [1310, 430]], { stroke: C.dna, sw: 2.6 })
  b.text(966, 360, '时间总和', { size: 10.5, weight: 700, fill: C.dna })
  b.text(1225, 294, '总和达阈 → 点燃 AP', { size: 10.5, weight: 700, fill: C.dnaD })
  // IPSP 小插图（右下）
  b.polyline([[1240, 430], [1258, 452], [1272, 448], [1290, 430]], { stroke: C.bad, sw: 2.2, dash: '5 4' })
  b.ctext(1130, 496, '时间', { size: 12, weight: 600, fill: C.sub })
  b.text(1270, 496, 'IPSP（超极化）', { size: 10.5, fill: C.badD })
  b.text(1120, 208, '空间总和：多个突触输入叠加', { size: 10.5, fill: C.sub })
  b.wtext(870, 524, 'IPSP：Cl^{-} 内流或 K^{+} 外流 → 超极化，使轴突始段（AIS）远离阈电位——兴奋与抑制的最终裁决在 AIS', { size: 10.5, fill: C.sub, maxW: 470, lh: 18 })

  // ============ 三、主要神经递质系统一览 ============
  b.panel(30, 584, 1340, 400, { title: '三、主要神经递质系统一览' })
  b.table(60, 640, 1280, {
    headers: ['递质', '主要受体类型', '主要功能定位', '药理与临床备注'],
    colW: [130, 250, 420, 480], rowH: 40, fontSize: 11.5,
    rows: [
      ['ACh 乙酰胆碱', 'N（离子型）/ M_{1}–M_{5}（代谢型）', '神经-肌接头、自主神经节与副交感节后、脑干上行（警觉与记忆）', '箭毒阻断 N 受体（肌松剂）、阿托品阻断 M 受体；阿尔茨海默病基底前脑退变'],
      ['NE 去甲肾上腺素', 'α_{1}/α_{2}、β_{1}/β_{2}/β_{3}（GPCR）', '交感节后纤维、脑干蓝斑（觉醒、注意、应激反应）', '效应由受体亚型决定：同一递质在不同器官产生相反效应'],
      ['DA 多巴胺', 'D_{1}–D_{5}（D1 样 / D2 样 GPCR）', '基底节运动控制、奖赏与动机、垂体催乳素抑制', '黑质纹状体束退变 → 帕金森病；中脑边缘通路与成瘾相关'],
      ['5-HT 血清素', '5-HT_{1}–5-HT_{7}（约 14 种亚型）', '情绪与睡眠节律、食欲、痛觉下行调制', 'SSRI 类抗抑郁药阻断再摄取，升高突触间隙浓度'],
      ['Glu 谷氨酸', '离子型 NMDA/AMPA/KA；代谢型 mGluR', '中枢最主要兴奋性递质：皮层投射、学习记忆（LTP/LTD）', 'NMDA 需配体+去极化双重条件解锁；过度释放 → 兴奋性毒性'],
      ['GABA', 'GABA_{A}（Cl^{-} 通道）/ GABA_{B}（K^{+} GPCR）', '中枢最主要抑制性递质（脊髓中为甘氨酸）', '苯二氮类增强 GABA_{A} 功能；拮抗剂致惊厥'],
      ['神经肽类', 'SP、CGRP、脑啡肽等（GPCR）', '慢而持久的调制：痛觉（SP）、血管舒张（CGRP）、镇痛（阿片肽）', '胞体合成前体、轴浆运输至末梢，常与经典递质共释放'],
    ],
  })
}

export default scene({
  title: '化学突触传递：从量子释放到递质系统',
  subtitle: '突触前 AP 开启电压门控 Ca^{2+} 通道、Ca^{2+} 内流经 SNARE 触发量子式胞吐（MEPP 约 0.4–0.6 mV）；EPSP 与 IPSP 在轴突始段时空总和决定是否点燃动作电位',
  draw,
})
