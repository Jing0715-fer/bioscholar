// mt ch3-s2 植物钾通道（拟南芥 Shaker 九成员岗位图/KAT1 内向整流机制/CBL-CIPK23 级联/保卫细胞蓝光开放链）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、拟南芥 Shaker 九成员岗位图 ============
  b.panel(30, 132, 1340, 300, { title: '一、拟南芥 Shaker 家族九成员：一张按器官与膜电位排定的岗位表' })
  b.table(45, 184, 603, {
    headers: ['通道', '方向', '主要表达部位', '生理职务'],
    rows: [
      ['KAT1/KAT2', '内向', '保卫细胞', '气孔开放吸纳 K^{+} 的主力'],
      ['AKT1', '内向', '根表皮与皮层', '根部营养性 K^{+} 吸收'],
      ['AKT2', '弱双向', '韧皮部伴胞', '伴胞 K^{+} 装卸·膜电位调节'],
      ['GORK', '外向', '普遍（保卫细胞富）', '去极化外排复极·助气孔关闭'],
      ['SKOR', '外向', '根中柱', '专职向木质部装载 K^{+}'],
      ['KC1', '无孔', '根（与 AKT1 组装）', '调节亚基·收窄门控窗口'],
    ],
    rowH: 31, fontSize: 12, colW: [95, 58, 150, 300],
  })
  b.text(45, 429, '其余 AKT5/AKT6 主要在花药与花粉表达——动物 Kv 按「何时开放」分工，植物按「何地、朝哪个方向」分工', { size: 10, fill: C.mute })
  // —— 右：整株示意（岗位定点） ——
  b.text(665, 185, '拟南芥整株示意：同一 6TMS＋带电 S4 骨架，相反的接法', { size: 11, weight: 700, fill: C.dnaD })
  b.ellipse(850, 225, 82, 28, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ellipse(1120, 218, 68, 22, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ellipse(822, 250, 13, 8, { fill: C.bg, stroke: C.okD, sw: 1.8 })
  b.ellipse(850, 250, 13, 8, { fill: C.bg, stroke: C.okD, sw: 1.8 })
  b.ion(836, 222, 'K^{+}', { r: 7, size: 7.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(836, 231, 830, 241, { stroke: C.ok, sw: 1.4, marker: 'ok' })
  b.arrow(836, 231, 843, 241, { stroke: C.ok, sw: 1.4, marker: 'ok' })
  b.circle(985, 186, 9, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.rect(978, 196, 14, 144, { fill: '#d9f99d', stroke: C.ok, sw: 2 })
  b.rect(981, 200, 4, 138, { fill: C.acc })
  b.rect(987, 200, 4, 138, { fill: C.pro })
  b.circle(985, 350, 11, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.path('M 985 340 L 935 388', { stroke: C.dna, sw: 3 })
  b.path('M 985 345 L 1045 392', { stroke: C.dna, sw: 3 })
  b.path('M 985 345 L 980 412', { stroke: C.dna, sw: 3 })
  b.text(670, 285, 'KAT1/KAT2（内向）：气孔开放吸钾主力', { size: 11, weight: 600, fill: C.okD })
  b.line(790, 279, 825, 257, { stroke: C.faint, sw: 1.2 })
  b.text(670, 312, 'GORK（外向）：普遍表达·助气孔关闭', { size: 11, weight: 600, fill: C.badD })
  b.line(790, 306, 847, 257, { stroke: C.faint, sw: 1.2 })
  b.text(1065, 250, 'AKT2（双向）：韧皮部伴胞装卸', { size: 11, weight: 600, fill: C.proD })
  b.line(1060, 255, 993, 272, { stroke: C.faint, sw: 1.2 })
  b.text(1065, 322, 'SKOR（外向）：根中柱 → 木质部装载', { size: 11, weight: 600, fill: C.accD })
  b.line(1060, 327, 998, 350, { stroke: C.faint, sw: 1.2 })
  b.text(670, 360, 'AKT1±KC1（内向）：根表皮营养吸收', { size: 11, weight: 600, fill: C.dnaD })
  b.line(910, 354, 950, 376, { stroke: C.faint, sw: 1.2 })
  b.text(1065, 186, '花药/花粉：AKT5/AKT6', { size: 11, weight: 600, fill: C.enzD })
  b.text(670, 405, '木质部（蓝）蒸腾流上行·韧皮部（紫）糖-钾同行', { size: 10, fill: C.mute })

  // ============ 二、KAT1 与 Kir：同题两解 ============
  b.panel(30, 444, 1340, 262, { title: '二、KAT1 的内向整流：胞外 K^{+} 依赖门控 vs 动物 Kir 多胺阻塞' })
  b.text(48, 490, '植物 KAT1：门控本身依赖胞外 K^{+} 的结合', { size: 12, weight: 700, fill: C.dnaD })
  b.bilayer(70, 560, 420)
  b.text(75, 552, '质外体（胞外）', { size: 9, fill: C.mute })
  b.text(75, 600, '细胞质', { size: 9, fill: C.mute })
  b.rect(230, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(318, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(266, 546, 9, 34, { fill: C.proL, stroke: C.pro, sw: 1.2, opacity: 0.4 })
  b.rect(292, 546, 9, 34, { fill: C.proL, stroke: C.pro, sw: 1.2, opacity: 0.4 })
  b.path('M 238 548 Q 280 526 322 548', { stroke: C.enz, sw: 2.2 })
  b.ion(262, 522, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ion(298, 522, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(262, 532, 272, 545, { stroke: C.ok, sw: 1.4, marker: 'ok' })
  b.arrow(298, 532, 288, 545, { stroke: C.ok, sw: 1.4, marker: 'ok' })
  b.ion(280, 618, 'K^{+}', { r: 9, size: 9, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(280, 545, 280, 606, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.text(340, 528, '胞外 K^{+} 结合位（门控的组成部分）', { size: 10, fill: C.okD })
  b.wtext(340, 585, '超极化（−120～−200 mV，H^{+}-ATPase 泵出）下「开」态稳定，内向吸收顺势兑现', { size: 10, fill: C.sub, maxW: 310, lh: 18 })
  b.wtext(48, 640, '门控依赖胞外 K^{+}：胞外钾降低时开放态难以维持——「胞外底物依赖性门控」；保卫细胞另以胞吞改变膜上 KAT1 拷贝数（结构＋数量双旋钮）', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.rect(48, 672, 620, 28, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 6 })
  b.text(62, 690, '克隆史：1992 年 Anderson 等以拟南芥 cDNA 文库补钾缺陷酵母、低钾筛选——钓出 KAT1（首个克隆的植物离子通道）', { size: 9.5, fill: C.sub })
  // —— 右：动物 Kir 对照 ——
  b.text(710, 490, '动物 Kir（对照）：胞内多胺/Mg^{2+} 塞孔口', { size: 12, weight: 700, fill: C.proD })
  b.bilayer(760, 560, 300)
  b.text(765, 552, '胞外', { size: 9, fill: C.mute })
  b.text(765, 600, '胞内', { size: 9, fill: C.mute })
  b.rect(880, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(950, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.path('M 888 548 Q 920 528 952 548', { stroke: C.enz, sw: 2.2 })
  b.ellipse(915, 588, 15, 9, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.etext(897, 592, '多胺·Mg^{2+}', { size: 9.5, fill: C.enzD })
  b.ion(915, 634, 'K^{+}', { r: 9, size: 9, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.arrow(915, 624, 915, 602, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.line(908, 587, 922, 601, { stroke: C.bad, sw: 2 })
  b.line(922, 587, 908, 601, { stroke: C.bad, sw: 2 })
  b.wtext(1085, 520, '去极化电位下，Mg^{2+} 与多胺堵塞孔道内口——「塞子」守门而非闸门关水；超极化时松脱，只容内向电流', { size: 10.5, fill: C.sub, maxW: 270, lh: 18 })
  b.rect(710, 656, 645, 40, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 8 })
  b.ctext(1032, 680, '趋同的功能（内向整流）·迥异的机制（门控 vs 塞子）——同一道题，进化备有两份答案', { size: 11, weight: 600, fill: C.accD })

  // ============ 三、AKT1 钙开关与保卫细胞蓝光开放链 ============
  b.panel(30, 718, 1340, 267, { title: '三、AKT1 的钙开关与保卫细胞的蓝光开放链' })
  b.text(48, 762, '低钾响应：CBL1/9–CIPK23 磷酸化激活 AKT1（Li 等 2006，Cell）', { size: 12, weight: 700, fill: C.dnaD })
  const chain: [string, string][] = [
    ['低钾胁迫', C.warnL],
    ['根尖 Ca^{2+} 信号', C.enzL],
    ['CBL1/9 钙感受器', C.enzL],
    ['CIPK23 激酶', C.proL],
    ['磷酸化并激活 AKT1', C.okL],
  ]
  let x = 60
  chain.forEach(([s, fc], i) => {
    const w = textW(s, 10.5) + 30
    b.tag(x + w / 2, 788, s, { size: 10.5, fill: fc, stroke: C.line, tfill: C.ink })
    x += w
    if (i < chain.length - 1) {
      b.arrow(x + 4, 788, x + 22, 788, { stroke: C.sub, sw: 1.6 })
      x += 26
    }
  })
  b.bilayer(60, 856, 600)
  b.rect(250, 838, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(318, 838, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.path('M 258 844 Q 290 824 322 844', { stroke: C.enz, sw: 2.2 })
  b.ion(290, 806, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(290, 816, 290, 892, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ion(290, 904, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.circle(256, 884, 7, { fill: C.ok, stroke: C.okD, sw: 1.2 })
  b.ctext(256, 887, 'P', { size: 8, weight: 700, fill: '#ffffff' })
  b.text(72, 848, '质外体', { size: 9, fill: C.mute })
  b.text(72, 896, '细胞质', { size: 9, fill: C.mute })
  b.text(72, 822, 'AKT1（毫摩尔级低亲和吸收）', { size: 10.5, weight: 600, fill: C.dnaD })
  b.rect(352, 846, 10, 26, { fill: C.panelB, stroke: C.mute, sw: 1.4, dash: '4 3' })
  b.text(372, 890, 'KC1 无孔亚基：异源四聚化收窄门控、抑制泄漏', { size: 10, fill: C.mute })
  b.wtext(48, 946, '固定结构（KAT1 整流写进孔道）与动态级联（AKT1 翻译后遥控）两种策略并存于同一株植物的根部——磷酸化数分钟起效、快而经济', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  // —— 右：保卫细胞蓝光开放链 ——
  b.text(700, 762, '保卫细胞蓝光开放链（气孔「日循环」上半场）', { size: 12, weight: 700, fill: C.accD })
  const steps = [
    '蓝光激活 phot1/phot2',
    '磷酸化 H^{+}-ATPase·结合 14-3-3',
    '质子外泵 → 膜超极化',
    'KAT1/KAT2 开放·K^{+} 内流',
    '苹果酸·Cl^{-} 补足电荷，渗透势下降',
    '水内渗·膨压升高 → 气孔开放',
  ]
  steps.forEach((s, i) => {
    const y = 786 + i * 29
    b.rect(700, y - 13, 285, 24, { fill: i === 5 ? C.okL : C.panelB, stroke: i === 5 ? C.ok : C.line, sw: 1.4, rx: 6 })
    b.ctext(842, y + 3.5, s, { size: 10.5, fill: i === 5 ? C.okD : C.sub })
    if (i < 5) b.arrow(842, y + 12, 842, y + 15, { stroke: C.sub, sw: 1.4 })
  })
  // 气孔器示意
  b.ellipse(1150, 850, 36, 18, { fill: C.okL, stroke: C.okD, sw: 2 })
  b.ellipse(1240, 850, 36, 18, { fill: C.okL, stroke: C.okD, sw: 2 })
  b.ellipse(1195, 850, 12, 17, { fill: C.bg, stroke: C.okD, sw: 2 })
  b.circle(1140, 850, 4, { fill: C.pro })
  b.circle(1250, 850, 4, { fill: C.pro })
  b.ion(1105, 800, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(1105, 810, 1128, 832, { stroke: C.ok, sw: 1.5, marker: 'ok' })
  b.ion(1285, 800, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(1285, 810, 1262, 832, { stroke: C.ok, sw: 1.5, marker: 'ok' })
  b.ctext(1195, 892, '气孔开放', { size: 11, weight: 700, fill: C.okD })
  b.wtext(1020, 928, '开放态保卫细胞 K^{+} 可由关闭态约 100 mM 升至数百 mM（渗透搭档：苹果酸与 Cl^{-}）——气孔是钾的最大日常消耗户', { size: 10, fill: C.sub, maxW: 345, lh: 18 })
}

export default scene({
  title: '植物钾通道：拟南芥 Shaker 家族九成员',
  subtitle:
    '与动物 Kv 同源的 6TMS＋带电 S4 骨架，门控方向整体反转：超极化激活的内向通道把 H^{+}-ATPase 泵至 −120～−200 mV 的膜电位兑现为吸钾驱动力；KAT1 胞外钾依赖门控（1992 酵母互补克隆）、AKT1 受 CBL1/9–CIPK23 钙依赖磷酸化即时激活，保卫细胞蓝光级联开放气孔',
  draw,
})
