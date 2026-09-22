// xc ch12-s2 室温晶体学与时间分辨（Task XC-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、回到室温 ============
  b.panel(30, 132, 660, 430, { title: '一、回到室温：被冷冻藏起的构象系综' })
  b.rect(56, 180, 296, 150, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 9 })
  b.text(74, 204, '冷冻的代价（1980 年代末起成标准）', { size: 11.5, weight: 700, fill: C.badD })
  b.wtext(74, 228, '镶嵌度普遍从百分之几度涨到十分之几度；晶格收缩改变分子堆积，表面溶剂重新有序化；更本质的是构象冻结——低温把柔性环区「选择」成单一构象，室温下本应共存的交替构象被藏了起来。', { size: 9.5, fill: C.sub, maxW: 262, lh: 13.5 })
  b.rect(368, 180, 296, 150, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 9 })
  b.text(386, 204, '室温数据的独立价值', { size: 11.5, weight: 700, fill: C.okD })
  b.wtext(386, 228, '构象系综更接近生理温度的真实涨落；催化残基的活性取向、配体的真实占位、通道水的动态都以室温图为准；分子动力学模拟的系综与实验的对照，只有在室温才有意义。', { size: 9.5, fill: C.sub, maxW: 262, lh: 13.5 })
  // RT 实践两条
  b.rect(56, 342, 296, 60, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.text(72, 364, '衰减器＋快速收集', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(72, 382, '室温损伤显著快于低温：压通量、快门一体逐帧读出抢时间。', { size: 9, fill: C.sub, maxW: 268, lh: 12 })
  b.rect(368, 342, 296, 60, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.text(384, 364, '多晶低剂量合并', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(384, 382, '数十颗晶体的部分数据合并成套，每颗剂量压在 MGy 级以下。', { size: 9, fill: C.sub, maxW: 268, lh: 12 })
  // 镶嵌度账单
  b.text(56, 432, '镶嵌度账单（液氮冷冻前后）', { size: 10.5, weight: 700, fill: C.ink })
  b.etext(148, 454, '冻结前', { size: 9.5, fill: C.sub })
  b.rect(158, 442, 22, 16, { fill: C.okL, stroke: C.ok, sw: 1.5 })
  b.text(188, 454, '百分之几度', { size: 9.5, fill: C.sub })
  b.etext(148, 482, '冻结后', { size: 9.5, fill: C.sub })
  b.rect(158, 470, 220, 16, { fill: C.badL, stroke: C.bad, sw: 1.5 })
  b.text(386, 482, '十分之几度（涨约一个数量级）', { size: 9.5, weight: 700, fill: C.badD })
  b.wtext(56, 512, '晶格收缩还会改变分子堆积——同一颗晶体冷冻前后的衍射性格判若两人。', { size: 9, fill: C.mute, maxW: 290, lh: 12.5 })
  b.wtext(350, 432, '历史在此画了一个圈：从布拉格的盐到菲利普斯的溶菌酶，学科最早的全部结构都是室温数据，冷冻只是对抗剂量损伤的权宜。串晶以室温射流、每晶一发，把「默认室温」还给了晶体学——室温结构的生产效率从此与冷冻持平。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13.5 })

  // ============ 二、Laue 白光法 ============
  b.panel(710, 132, 660, 430, { title: '二、Laue 白光法：时间分辨的第一代主力' })
  // 白光光束 + 静止晶体 + 探测器
  b.text(740, 188, '同步辐射白光（全谱一次点亮大量反射）', { size: 9.5, fill: C.sub })
  b.line(740, 200, 950, 200, { stroke: C.acc, sw: 3 })
  b.line(740, 208, 950, 208, { stroke: C.accD, sw: 3 })
  b.line(740, 216, 950, 216, { stroke: C.dna, sw: 3 })
  b.text(740, 234, '不同波长激发的斑点在低角密集重叠（λ 与 λ/2 谐波）', { size: 9, fill: C.mute })
  b.polygon([[970, 204], [988, 186], [1006, 204], [988, 222]], { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(988, 240, '晶体无需旋转', { size: 9, weight: 700, fill: C.dnaD })
  b.rect(1080, 150, 64, 110, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 4 })
  ;[[1092, 168], [1116, 176], [1128, 192], [1098, 206], [1122, 214], [1106, 230], [1130, 238], [1088, 190], [1114, 250]].forEach(([x, y]) => b.circle(x, y, 3, { fill: C.ink, opacity: 0.85 }))
  b.ctext(1112, 278, '探测器：单次曝光即得整套数据', { size: 9, fill: C.sub })
  b.tag(1236, 204, '时间窗 ms–ns', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700, pad: 10 })
  // 触发两路
  b.rect(736, 300, 288, 56, { fill: C.rnaL, stroke: C.rna, sw: 1.7, rx: 8 })
  b.text(752, 322, '自带发色团：激光直接激发', { size: 10.5, weight: 700, fill: C.rnaD })
  b.wtext(752, 340, '视黄醛、血红素配体——光解量子产率就是触发效率。', { size: 9, fill: C.sub, maxW: 258, lh: 12 })
  b.rect(1040, 300, 284, 56, { fill: C.proL, stroke: C.pro, sw: 1.7, rx: 8 })
  b.text(1056, 322, '笼状化合物：紫外闪光释放', { size: 10.5, weight: 700, fill: C.proD })
  b.wtext(1056, 340, '底物被光不稳定基团封存，反应在晶体内部同步起跑。', { size: 9, fill: C.sub, maxW: 254, lh: 12 })
  // 经典战例
  const mile = (y: number, yr: string, s: string) => {
    b.rect(736, y, 60, 20, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 5 })
    b.ctext(766, y + 14, yr, { size: 10, weight: 700, fill: C.accD })
    b.text(806, y + 14, s, { size: 9.5, fill: C.sub })
  }
  mile(372, '1996', '肌红蛋白 CO 解离的纳秒级中间态（Srajer 等）——开创蛋白质时间分辨先河')
  mile(400, '1990', '笼状 GTP 释放后 Ras 的 GTP 酶时间进程（Schlichting 等）——「笼装底物＋白光」范式确立')
  // 技术债
  b.rect(736, 430, 588, 118, { fill: C.badL, stroke: C.bad, sw: 1.7, rx: 8 })
  b.text(752, 452, '技术债：Laue 为何让位于串晶', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(752, 472, '① 斑点低角密集重叠——空间重叠与谐波重叠，波长归一化（λ 与 λ/2 贡献的分离）是数据处理的专门功课；', { size: 9.5, fill: C.sub, maxW: 556, lh: 13 })
  b.wtext(752, 502, '② 单晶多次曝光剂量叠加——每个时间点都在花同一颗晶体的预算，这是让位于串晶的根本原因；', { size: 9.5, fill: C.sub, maxW: 556, lh: 13 })
  b.wtext(752, 528, '③ 「单张策略」：每晶只曝光一次、多晶拼出时间点——这套省剂量算术正是串晶思想的前身。', { size: 9.5, fill: C.sub, maxW: 556, lh: 13 })

  // ============ 三、串晶时代的时间分辨 ============
  b.panel(30, 572, 660, 390, { title: '三、串晶时代的时间分辨：混合-喷射与光激发' })
  // 混合-喷射管线
  b.rect(56, 592, 96, 40, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(104, 616, '酶微晶流', { size: 10.5, weight: 700, fill: C.accD })
  b.rect(56, 648, 96, 40, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(104, 672, '底物流', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(152, 612, 194, 622, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(152, 668, 194, 658, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(196, 600, 110, 80, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(251, 628, '混合器', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(251, 648, '几何与流速', { size: 9, fill: C.sub })
  b.ctext(251, 664, '设定延迟', { size: 9, fill: C.sub })
  b.arrow(306, 640, 338, 640, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(340, 600, 120, 80, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(400, 626, '扩散入晶', { size: 11, weight: 700, fill: C.accD })
  b.wtext(400, 646, '毫秒级（晶体通道允许底物进入）', { size: 8.8, fill: C.sub, maxW: 106, lh: 11.5, anchor: 'middle' })
  b.arrow(460, 640, 492, 640, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(494, 600, 150, 80, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(569, 626, 'XFEL 光斑', { size: 11.5, weight: 700, fill: C.badD })
  b.wtext(569, 646, '每晶一发＝一个时间切片，中间态当场成像', { size: 8.8, fill: C.sub, maxW: 134, lh: 11.5, anchor: 'middle' })
  // 光激发里程碑（对数时标）
  b.arrow(100, 758, 640, 758, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  ;[[100, 'fs'], [208, 'ps'], [316, 'ns'], [424, 'μs'], [532, 'ms'], [628, 's']].forEach(([x, s]) => {
    b.line(x as number, 752, x as number, 764, { stroke: C.sub, sw: 1.8 })
    b.ctext(x as number, 776, s as string, { size: 9.5, fill: C.mute })
  })
  const ev = (x: number, above: boolean, lab: string, sub: string, c: string) => {
    b.circle(x, 758, 5, { fill: c })
    b.line(x, 758 + (above ? -9 : 9), x, 758 + (above ? -30 : 30), { stroke: c, sw: 1.6 })
    b.ctext(x, 758 + (above ? -46 : 54), lab, { size: 9.5, weight: 700, fill: C.ink })
    b.ctext(x, 758 + (above ? -62 : 70), sub, { size: 8.8, fill: C.mute })
  }
  ev(116, true, 'Nogly 2018', '视黄醛异构化', C.pro)
  ev(200, false, 'Pande 2016', 'PYP 键运动 fs–ps', C.pro)
  ev(330, true, 'Nango 2016', 'bR ns–ms 三维电影', C.pro)
  ev(500, false, 'Tenboer 2014', 'bR 毫秒首发', C.pro)
  ev(588, true, 'Kern 2018', 'PSII S_{2} 至 S_{3}', C.pro)
  b.wtext(56, 850, '光激发路线以激光泵浦、X 射线探测：细菌视紫红质系列横跨整个时标，PSII 的 S 态循环逐级点亮放氧催化剂——基态、中间态、过渡态各有其结构，飞秒泵浦-探测把时间分辨推入化学键运动的世界。', { size: 9.5, fill: C.sub, maxW: 610, lh: 13 })
  b.wtext(56, 894, '混合-喷射代表战例：β 内酰胺酶与头孢类抗生素——扩散、结合、酰化、水解各阶段在同一条管线上依次捕集；扩散时标与晶体尺寸的平方同增，串晶偏爱小晶体又多了一条理由：微晶既省剂量，也让毫秒化学触手可及。', { size: 9.5, fill: C.sub, maxW: 610, lh: 13 })
  b.wtext(56, 940, '混合器与喷射器的衔接流速把「反应时间」翻译成「飞行距离」——时间轴的标定由此成为机械加工问题。', { size: 9.5, fill: C.mute, maxW: 610, lh: 13 })

  // ============ 四、实验设计三角与答卷 ============
  b.panel(710, 572, 660, 390, { title: '四、实验设计三角与时间分辨的答卷' })
  b.polygon([[890, 640], [790, 792], [990, 792]], { fill: C.enzL, fillOp: 0.55, stroke: C.enz, sw: 2.2 })
  b.circle(890, 640, 5.5, { fill: C.enz })
  b.circle(790, 792, 5.5, { fill: C.enz })
  b.circle(990, 792, 5.5, { fill: C.enz })
  b.ctext(890, 626, '触发效率', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(778, 810, '时间零点同步', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(1002, 810, '剂量窗口', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(890, 728, '互相牵制', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(890, 746, '无同时最优', { size: 9, fill: C.sub })
  b.wtext(1024, 614, '① 触发效率：光解量子产率、泵浦光穿透深度、混合扩散均匀性——任一不足，中间态即被稀释成基态与终态的混合物。', { size: 9.5, fill: C.sub, maxW: 308, lh: 13 })
  b.wtext(1024, 668, '② 时间零点同步：激光与 X 射线到达时刻存在抖动，须实时监测、事后分箱——飞秒实验中，抖动本身就是时间分辨率的下限。', { size: 9.5, fill: C.sub, maxW: 308, lh: 13 })
  b.wtext(1024, 724, '③ 剂量窗口：每个时间点需 10^{4} 至 10^{5} 张图案才有统计效力；泵浦与探测剂量分开记账——加大泵浦先撞剂量角，收窄延迟窗则牺牲占有率与信噪。', { size: 9.5, fill: C.sub, maxW: 308, lh: 13 })
  b.wtext(736, 834, '答卷：各时间点与基态参照图作差值分析（第 9 章差值图的时间维推广），中间态占有率随时间的演化须与全局动力学模型拟合——「结构＋动力学」联解；时间分辨实验的第一颗晶体，永远留给基态参照。', { size: 9.5, fill: C.sub, maxW: 560, lh: 13 })
  b.text(736, 884, '方案对照（分工而非替代）', { size: 10, weight: 700, fill: C.ink })
  const route = (x: number, t: string, s: string) => {
    b.rect(x, 894, 142, 50, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.ctext(x + 71, 914, t, { size: 9.8, weight: 700, fill: C.ink })
    b.ctext(x + 71, 934, s, { size: 8.5, fill: C.sub })
  }
  route(736, 'Laue 白光', 'ms–ns · 单晶多次曝光')
  route(886, '混合-喷射串晶', 'ms–s · 每晶一发')
  route(1036, '光激发串晶', 'fs–ms · 每晶一发')
  route(1186, '室温多晶合并', '静态系综 · 数十至数百晶')
}

export default scene({
  title: '室温晶体学与时间分辨',
  subtitle: '冷冻使镶嵌度从百分之几度涨到十分之几度；Laue 白光覆盖毫秒至纳秒；混合-喷射以毫秒扩散捕集中间态，光激发横跨 fs 至 ms；每时间点需 10^{4}–10^{5} 张图案',
  draw,
})
