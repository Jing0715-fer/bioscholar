// ne ch5-s1 神经递质与受体 / 递质的鉴定标准与分类（39-h 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、四条标准 ============
  b.panel(30, 132, 660, 430, { title: '一、鉴定递质的四条标准' })
  const crit: Array<[number, number, string, string]> = [
    [60, 190, '① 突触前存在与合成', '突触前区内有递质前体与合成酶'],
    [370, 190, '② 钙依赖的释放', '突触前 Ca²⁺ 内流触发量子化释放'],
    [60, 336, '③ 受体复现与取消', '外源施加递质复现突触反应；特异拮抗剂取消之'],
    [370, 336, '④ 明确的清除机制', '酶解、再摄取或扩散——信号必须能被关掉'],
  ]
  crit.forEach(([x, y, t, s]) => {
    b.rect(x, y, 290, 130, { fill: C.accL, fillOp: 0.35, stroke: C.acc, sw: 1.6, rx: 9 })
    b.text(x + 145, y + 34, t, { size: 14.5, weight: 700, fill: C.accD, anchor: 'middle' })
    b.wtext(x + 24, y + 64, s, { size: 11.5, fill: C.sub, maxW: 246, lh: 17 })
  })
  b.wtext(60, 492, '直到 1960 年代，主流仍怀疑哺乳动物中枢的快传递是否真用化学递质——理由是化学「太慢」，赶不上中枢突触的毫秒级延迟；四条标准正是这场争论沉淀的判据。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、五大类 ============
  b.panel(720, 132, 650, 430, { title: '二、递质的化学分类：五大类' })
  b.table(750, 190, 590, {
    headers: ['类别', '代表成员', '储存方式', '受体类型', '终止方式'],
    colW: [72, 118, 132, 128, 140],
    rowH: 46,
    fontSize: 11.5,
    rows: [
      ['乙酰胆碱', 'ACh', '小清亮囊泡', 'nAChR / mAChR', 'AChE 水解'],
      ['单胺', 'DA · NE · 5-HT', '小清亮囊泡', 'GPCR', '再摄取（转运体）'],
      ['氨基酸', 'Glu · GABA · Gly', '小清亮囊泡', '离子型 + GPCR', 'EAAT 摄取 / 扩散'],
      ['神经肽', 'P 物质 · NPY 等', '大致密核心囊泡', 'GPCR', '酶解（无再摄取）'],
      ['气体信使', 'NO · CO', '不储存，即制即用', 'sGC（胞内）', '扩散 + 代谢'],
    ],
  })
  b.wtext(750, 486, '小清亮囊泡就近释放、快；大致密核心囊泡需高频高钙才释放——快慢搭配按活动频率分级动用。', { size: 11.5, fill: C.sub, maxW: 580, lh: 16 })

  // ============ 三、Dale 原则与 NO ============
  b.panel(30, 576, 1340, 402, { title: '三、Dale 原则的现代理解与 NO：即制即用的逆行信使' })
  b.ctext(340, 636, 'Dale 原则：同一组递质', { size: 13, weight: 700, fill: C.ink })
  b.circle(160, 760, 30, { fill: C.bg, stroke: C.ink, sw: 2.4 })
  b.circle(160, 760, 11, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.line(190, 760, 400, 760, { stroke: C.ink, sw: 2.6 })
  ;[220, 268, 316, 364].forEach(mx => b.rect(mx, 748, 32, 24, { fill: C.bg, stroke: C.ink, sw: 1.4, rx: 9 }))
  b.path('M400,760 q26,-32 46,-52', { stroke: C.ink, sw: 2.2, marker: 'ink' })
  b.path('M400,760 q26,32 46,52', { stroke: C.ink, sw: 2.2, marker: 'ink' })
  b.ellipse(470, 700, 38, 20, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ellipse(470, 820, 38, 20, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.tag(470, 660, '同一组递质', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.tag(470, 862, '同一组递质', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.ctext(160, 812, '胞体', { size: 11.5, fill: C.sub })
  b.wtext(60, 900, 'Dale（1935）原意：同一神经元的所有末梢释放同一组相同的递质；递质共存普遍——快递质装在小清亮囊泡、低频即释放，神经肽装在大致密核心囊泡、需高频高钙——按活动频率分级释放。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })

  b.ctext(1030, 636, 'NO：即制即用的气体信使', { size: 13, weight: 700, fill: C.ink })
  b.rect(720, 656, 240, 46, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 8 })
  b.ctext(840, 684, '突触前末梢：谷氨酸释放', { size: 12, weight: 700, fill: C.accD })
  b.arrow(840, 702, 840, 728, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(720, 732, 240, 56, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.5, rx: 8 })
  b.ctext(840, 766, '突触后：受体 → Ca²⁺ ↑', { size: 12, weight: 700, fill: C.dnaD })
  b.arrow(960, 760, 994, 760, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.tag(1024, 760, 'NO', { fill: C.badL, stroke: C.bad, size: 13, weight: 700, tfill: C.bad, pad: 10 })
  b.arrow(1058, 760, 1082, 760, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(1086, 732, 264, 56, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.5, rx: 8 })
  b.ctext(1218, 757, 'sGC → cGMP', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(1218, 776, '（NO 的受体通路）', { size: 10.5, fill: C.sub })
  b.path('M1016,778 C950,820 760,812 842,708', { stroke: C.bad, sw: 1.8, dash: '5 4', marker: 'bad' })
  b.ctext(915, 814, '逆行弥散 · 不储存、即制即放', { size: 10.5, weight: 700, fill: C.bad })
  b.rect(720, 836, 630, 96, { fill: C.okL, fillOp: 0.35, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(740, 862, '临床与药理', { size: 13.5, weight: 700, fill: '#065f46' })
  b.wtext(740, 886, 'NO 即「血管内皮衍生舒张因子」（EDRF）——为 Furchgott、Ignarro 与 Murad 赢得 1998 年诺贝尔奖；西地那非抑制 PDE5 延长 cGMP 信号，与硝酸酯合用有低血压风险。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16 })
}

export default scene({
  title: '递质的鉴定标准与分类：四条判据、五大类与气体信使 NO',
  subtitle: '鉴定四标准：突触前存在与合成、钙依赖释放、受体复现与拮抗剂取消、明确清除机制；五大类：乙酰胆碱 / 单胺 / 氨基酸（小清亮囊泡）、神经肽（大致密核心囊泡，需高频高钙）、气体信使（即制即用）；Dale 原则：同一神经元各末梢释放同一组递质，快慢搭配按频率分级；NO 经 nNOS 即制即放、以 sGC-cGMP 为受体通路（EDRF，1998 诺奖），西地那非抑制 PDE5、与硝酸酯合用有低血压风险',
  draw,
})
