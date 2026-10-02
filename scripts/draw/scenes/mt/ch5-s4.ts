// mt ch5-s4 动植物糖流对照：稳态语法双栏 | Münch 压力流 | 趋同演化与驱动离子 | 五家族对照表
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、动物糖稳态 vs 植物源-库流 ============
  b.panel(30, 132, 1340, 382, { title: '一、动物糖稳态 vs 植物源-库流：两种稳态语法' })
  b.line(690, 176, 690, 496, { stroke: C.faint, sw: 1.2, dash: '5 5' })

  // —— 左栏：动物（集中供糖·浓度即信号） ——
  b.text(50, 184, '动物：把糖钉在毫摩尔刻度上（集中供糖）', { size: 12, weight: 700, fill: C.badD })
  // 血糖刻度尺
  b.rect(206.5, 222, 77, 32, { fill: C.okL, stroke: C.ok, sw: 1.5 })
  b.arrow(70, 238, 428, 238, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  ;[0, 2, 4, 6, 8, 10].forEach(v => {
    const x = 70 + v * 35
    b.line(x, 232, x, 244, { stroke: C.sub, sw: 1.5 })
    b.ctext(x, 260, String(v), { size: 8.5, fill: C.mute })
  })
  b.ctext(245, 214, '空腹 3.9–6.1', { size: 9, weight: 700, fill: C.okD })
  b.line(343, 220, 343, 246, { stroke: C.warn, sw: 1.6, dash: '4 3' })
  b.ctext(343, 214, '餐后 < 7.8', { size: 8.5, weight: 600, fill: C.warnD })
  b.ctext(245, 284, '血糖（mmol/L）——餐后两小时期望回落至 7.8 以下', { size: 9, fill: C.sub })
  b.text(50, 308, '血液约 5 L 的糖池常备葡萄糖仅 4–5 g，全身日周转约 250 g——池小流大，进出分钟级匹配', { size: 9.5, fill: C.sub })
  // 器官流：肠 → 血 → 肝 / 肌脂
  b.rect(60, 328, 122, 88, { fill: C.accL, stroke: C.acc, sw: 2, rx: 8 })
  b.ctext(121, 348, '小肠上皮', { size: 10, weight: 700, fill: C.accD })
  b.ctext(121, 366, '顶膜 SGLT1', { size: 8.5, fill: C.sub })
  b.ctext(121, 382, '2 Na^{+}∶1 葡萄糖', { size: 7.5, fill: C.sub })
  b.ctext(121, 398, '基侧 GLUT2', { size: 8.5, fill: C.sub })
  b.arrow(186, 372, 228, 372, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(230, 328, 118, 88, { fill: C.badL, stroke: C.bad, sw: 2, rx: 8 })
  b.ctext(289, 350, '血液糖池', { size: 10, weight: 700, fill: C.badD })
  b.ctext(289, 370, '浓度即信号', { size: 9, fill: C.badD })
  b.ctext(289, 388, '激素反馈闭环', { size: 8.5, fill: C.sub })
  b.rect(400, 328, 122, 44, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 8 })
  b.ctext(461, 346, '肝：糖原＋糖异生托底', { size: 9.5, weight: 700, fill: C.rnaD })
  b.rect(400, 380, 122, 44, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(461, 398, '肌·脂肪：缓冲库', { size: 9.5, weight: 700, fill: C.proD })
  b.ctext(461, 416, 'GLUT4 餐后扩容', { size: 8.5, fill: C.sub })
  b.arrow(352, 350, 396, 350, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(352, 402, 396, 402, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(60, 436, '高糖负荷时顶膜瞬时招募 GLUT2「溢流通道」扩容；三级接力（肠→肝→肌脂）把糖峰削成平缓曲线', { size: 8.5, fill: C.mute })
  b.text(60, 458, 'GLUT1/3 常开保基础供糖；胰岛素／胰高血糖素拮抗调度', { size: 9, fill: C.sub })

  // —— 右栏：植物（源-库分配·改道调度） ——
  b.text(710, 184, '植物：没有血糖的源-库流（改道调度）', { size: 12, weight: 700, fill: C.okD })
  b.rect(710, 206, 132, 112, { fill: C.okL, stroke: C.ok, sw: 2, rx: 10 })
  b.ctext(776, 228, '源：成熟叶', { size: 10, weight: 700, fill: C.okD })
  b.chloro(776, 272, 84, 48, {})
  b.ctext(776, 314, '叶绿体→胞质蔗糖', { size: 8.5, weight: 600, fill: C.okD })
  b.text(854, 224, '① 共质体：胞间连丝扩散直达', { size: 8.5, weight: 600, fill: C.dnaD })
  b.arrow(854, 238, 1002, 238, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(928, 254, '顺浓度梯度', { size: 7.5, fill: C.mute })
  b.text(854, 272, '② 质外体：SWEET 外泌＋SUC2 泵回', { size: 8.5, weight: 600, fill: C.enzD })
  b.arrow(854, 286, 1002, 286, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(928, 302, '「外溢-回收」组合', { size: 7.5, fill: C.mute })
  b.rect(1008, 206, 122, 112, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 10 })
  b.ctext(1069, 228, '筛管', { size: 11, weight: 700, fill: C.rnaD })
  b.arrow(1020, 262, 1116, 262, { stroke: C.rna, sw: 2.5, marker: 'rna' })
  b.ion(1046, 288, 'Suc', { r: 7, size: 6, fill: C.bg, stroke: C.rna, tfill: C.rnaD })
  b.ion(1094, 288, 'Suc', { r: 7, size: 6, fill: C.bg, stroke: C.rna, tfill: C.rnaD })
  b.ctext(1069, 314, '长距离干线', { size: 8.5, weight: 600, fill: C.rnaD })
  b.arrow(1134, 262, 1150, 262, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(1152, 206, 150, 112, { fill: C.proL, stroke: C.pro, sw: 2, rx: 10 })
  b.ctext(1227, 228, '库：根·果实·生长点', { size: 10, weight: 700, fill: C.proD })
  b.ctext(1227, 250, '净输入', { size: 9, fill: C.sub })
  b.ctext(1227, 268, '库强决定产量', { size: 8.5, fill: C.sub })
  b.ctext(1227, 286, '块茎·籽粒·果实', { size: 8, fill: C.mute })
  b.ctext(1227, 304, '（驯化更强的「库」）', { size: 8, fill: C.mute })
  b.text(710, 352, '两条途径在不同物种、不同组织中并行或分工，最终都汇入筛管干线', { size: 9.5, fill: C.sub })
  b.text(710, 376, '调控不是把血糖钉在刻度上，而是改道：库强此消彼长时，糖流改投他处', { size: 9.5, fill: C.sub })
  b.text(710, 400, '实验判据：环剥剥去树皮阻断筛管——剥口上方因糖积聚而膨大；同位素标记 CO_{2} 喂叶绘出源库时序地图', { size: 9.5, fill: C.sub })
  b.text(710, 424, '植物没有循环糖浓度的设定点——分配格局随发育与胁迫动态改道', { size: 9.5, fill: C.sub })
  b.tag(700, 472, '同一张考卷两种答法：动物把分配权交给激素，植物把分配权交给源-库相对强度', { size: 10.5, weight: 700, fill: C.panelB, stroke: C.line, tfill: C.ink, pad: 16 })

  // ============ 二、Münch 压力流学说 ============
  b.panel(30, 526, 690, 459, { title: '二、Münch 压力流学说（1930）：一个渗透压推动全树' })
  b.ctext(140, 562, '源端（成熟叶·伴胞）', { size: 11, weight: 700, fill: C.accD })
  b.rect(55, 572, 170, 56, { fill: C.accL, stroke: C.acc, sw: 2, rx: 8 })
  b.ctext(140, 592, '伴胞', { size: 10, weight: 700, fill: C.accD })
  b.ctext(140, 612, 'SUC2＋H^{+}-ATPase', { size: 8, weight: 600, fill: C.accD })
  b.ion(140, 648, 'Suc', { r: 7, size: 6, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.arrow(140, 657, 140, 676, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.text(158, 650, '① 逆数十倍浓度泵入蔗糖（筛管汁 0.3–1 M）', { size: 8.5, weight: 600, fill: C.ink })
  b.ctext(612, 662, '库端（根·果实·生长点）', { size: 11, weight: 700, fill: C.proD })
  // 筛管干线
  b.rect(50, 680, 620, 58, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 12 })
  b.ctext(360, 698, '筛管：汁液整体单向流动', { size: 8.5, weight: 600, fill: C.rnaD })
  b.ctext(612, 698, '筛管汁蔗糖 0.3–1 M', { size: 8.5, weight: 700, fill: C.rnaD })
  ;[[75, 148], [225, 298], [375, 448], [525, 598]].forEach(([x1, x2]) =>
    b.arrow(x1, 710, x2, 710, { stroke: C.rna, sw: 2.2, marker: 'rna' }))
  ;[110, 260, 410, 560].forEach(x => b.ion(x, 728, 'Suc', { r: 7, size: 6, fill: C.bg, stroke: C.rna, tfill: C.rnaD }))
  b.ctext(360, 758, '② 渗透吸水——源端膨压升高', { size: 9.5, weight: 700, fill: C.ink })
  b.ctext(360, 782, '两端压差推动汁液整体流动：实测流速约 0.5–1.5 m/h', { size: 9.5, fill: C.sub })
  // 库端卸载
  b.arrow(580, 740, 580, 764, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ion(580, 776, 'Suc', { r: 7, size: 6, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.ctext(580, 800, '③ 卸糖失水——膨压回落', { size: 9.5, weight: 700, fill: C.ink })
  // 木质部水回路
  b.rect(50, 806, 620, 30, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 10, dash: '5 4' })
  b.ctext(360, 826, '木质部水回路', { size: 9, weight: 600, fill: C.accD })
  b.arrow(85, 802, 85, 742, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(100, 776, '渗透吸水', { size: 8.5, weight: 600, fill: C.accD })
  b.arrow(655, 742, 655, 802, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(664, 770, '水外渗', { size: 8.5, weight: 600, fill: C.accD })
  // 注记
  b.text(50, 860, '筛分子为流让路：成熟时自拆细胞核与大部分细胞器，把管腔完整让给流', { size: 10, fill: C.sub })
  b.text(50, 886, '检验妙法：蚜虫口针刺入单根筛管、截断虫体留下持续渗出的「天然取样器」——数十年来为学说供数', { size: 10, fill: C.sub })
  b.wtext(50, 912, '争议集中于筛板阻力与胞间连丝的参与方式——Münch 框架至今仍是无可替代的一级近似：用渗透压差与半透膜解释几十米的糖运输，简洁得近乎奢侈', { size: 10, fill: C.sub, maxW: 650, lh: 18 })
  b.text(50, 956, '没有任何泵直接「推」液体——静水压当传送带，把糖送上几十米高的树冠', { size: 10, fill: C.sub })

  // ============ 三、趋同演化、驱动离子与五家族对照 ============
  b.panel(740, 526, 630, 459, { title: '三、趋同演化、驱动离子与五家族对照' })
  b.text(760, 574, '动物 GLUT（MFS 12 TMS）与植物 SWEET（7 TMS 双半重复）没有同源关系——不同家族、不同折叠解决同一问题', { size: 10, fill: C.sub })
  // GLUT 12 TMS 拓扑条
  b.ctext(890, 600, 'GLUT：MFS 12 TMS（N 束 6＋C 束 6）', { size: 9, weight: 700, fill: C.proD })
  b.bilayer(770, 620, 240)
  for (let i = 0; i < 12; i++) b.rect(782 + i * 15, 610, 9, 24, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 3 })
  b.braceH(780, 656, 88, { label: 'N 束（TMS 1–6）', size: 8.5, fill: C.proD })
  b.braceH(870, 656, 88, { label: 'C 束（TMS 7–12）', size: 8.5, fill: C.proD })
  b.ctext(1024, 622, 'vs', { size: 11, weight: 700, fill: C.mute })
  // SWEET 7 TMS 拓扑条
  b.ctext(1117, 600, 'SWEET：7 TMS（3＋连接＋3）', { size: 9, weight: 700, fill: C.enzD })
  b.bilayer(1040, 620, 220)
  ;[1054, 1074, 1094, 1114, 1134, 1154, 1174].forEach((x, i) =>
    b.rect(x, 610, 10, 24, { fill: i === 3 ? C.rnaL : C.proL, stroke: i === 3 ? C.rna : C.pro, sw: 1.6, rx: 3 }))
  b.braceH(1052, 656, 52, { label: '半重复①', size: 8.5, fill: C.proD })
  b.braceH(1132, 656, 52, { label: '半重复②', size: 8.5, fill: C.proD })
  b.tag(955, 700, '趋同演化（convergent evolution）写在膜上', { size: 9.5, weight: 700, fill: C.panelB, stroke: C.line, tfill: C.ink, pad: 14 })
  // 驱动离子之别
  b.text(760, 734, '驱动离子之别：SGLT 用 Na^{+} 梯度、SUC 用 H^{+} 梯度——同为二级同向转运而「货币」不同', { size: 10, fill: C.sub })
  b.tag(880, 762, '动物：Na^{+}/K^{+} 泵发行 Na^{+} 币', { size: 9.5, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD, pad: 12 })
  b.tag(1150, 762, '植物：H^{+}-ATPase 发行 H^{+} 币', { size: 9.5, weight: 700, fill: C.warnL, stroke: C.warn, tfill: C.warnD, pad: 12 })
  b.text(760, 790, '货币发行权握在各自的主引擎（第 6 章）；动物以血液为糖路、浓度毫摩尔计，植物以筛管汁为糖路、蔗糖 0.3–1 M——浓度差约三个数量级，K_{m} 随之分档', { size: 9.5, fill: C.sub })
  // 五家族大对照表
  b.table(760, 812, 588, {
    headers: ['家族', '界', '跨膜拓扑', '能量学', '调控代表'],
    colW: [100, 52, 130, 158, 148],
    fontSize: 11,
    rowH: 25,
    rows: [
      ['GLUT（SLC2A）', '动物', 'MFS 12 TMS', '易化扩散（单转运）', 'GLUT4 转位'],
      ['SGLT（SLC5）', '动物', '14 TMS', 'Na^{+} 同向（次级主动）', '顶端膜招募'],
      ['STP', '植物', 'MFS 12 TMS', 'H^{+} 同向（次级主动）', '转录诱导'],
      ['SUC/SUT', '植物', 'MFS 12 TMS', 'H^{+} 同向（次级主动）', 'SUC2 组成型'],
      ['SWEET', '植物', '7 TMS 双半重复', '易化扩散（双向）', '病原劫持'],
    ],
  })
}

export default scene({
  title: '动植物糖流对照：稳态语法与压力流',
  subtitle: '动物以空腹 3.9–6.1 mmol/L 血糖集中供糖——肠 SGLT1＋GLUT2 吸收、GLUT4 餐后缓冲、肝糖原托底；植物无血糖而以源-库分配调度，蔗糖经共质体/质外体双途径装载；Münch 压力流（1930）以渗透压差驱动筛管流——流速约 0.5–1.5 m/h、蔗糖 0.3–1 M；GLUT（MFS 12 TMS）与 SWEET（7 TMS）趋同演化，SGLT 用 Na^{+} 梯度、SUC 用 H^{+} 梯度',
  draw,
})
