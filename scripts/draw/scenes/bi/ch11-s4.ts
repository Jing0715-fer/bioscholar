// bi ch11-s4 多组学数据整合（39-i 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、整合的动机：层间错位 ============
  b.panel(30, 132, 660, 420, { title: '一、整合的动机：mRNA 与蛋白仅弱相关' })
  b.rect(60, 196, 96, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(108, 223, 'DNA', { size: 13, weight: 700, fill: C.dnaD })
  b.arrow(160, 218, 198, 218, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(179, 200, '转录', { size: 10.5, fill: C.mute })
  b.rect(202, 196, 106, 44, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 7 })
  b.ctext(255, 223, 'mRNA', { size: 13, weight: 700, fill: C.rnaD })
  b.arrow(312, 218, 350, 218, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.ctext(331, 200, '翻译', { size: 10.5, fill: C.mute })
  b.rect(354, 196, 84, 44, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 7 })
  b.ctext(396, 223, '蛋白', { size: 13, weight: 700, fill: C.proD })
  b.text(60, 282, '层间缓冲与放大：', { size: 12, weight: 700, fill: C.ink })
  b.wtext(60, 306, '翻译效率、降解速率与翻译后修饰，使 mRNA 丰度不能线性预测蛋白丰度。', { size: 11, fill: C.sub, maxW: 380, lh: 15 })
  b.tag(200, 380, '单层分析 = 结构性盲区', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.bad, pad: 9 })
  b.wtext(60, 428, '整合的目的：把被层间缓冲、放大掩盖的调控信号，在多层证据中重新定位。', { size: 11, fill: C.sub, maxW: 380, lh: 15 })
  b.text(460, 200, 'mRNA ↔ 蛋白相关系数', { size: 13, weight: 700, fill: C.ink })
  b.wtext(460, 224, '量级仅 0.4–0.6，远低于同层的测量可信度。', { size: 11, fill: C.sub, maxW: 205, lh: 15 })
  b.line(465, 340, 655, 340, { stroke: C.sub, sw: 2 })
  ;[465, 560, 655].forEach(x => b.line(x, 334, x, 346, { stroke: C.sub, sw: 1.8 }))
  b.ctext(465, 364, '0', { size: 11, fill: C.mute })
  b.ctext(560, 364, '0.5', { size: 11, fill: C.mute })
  b.ctext(655, 364, '1.0', { size: 11, fill: C.mute })
  b.line(541, 340, 579, 340, { stroke: C.enz, sw: 8 })
  b.ctext(560, 318, '典型 r = 0.4–0.6', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(460, 428, '配对设计：同一受试者、同源样本分测各层，是整合的第一设计原则；独立样本只能做结论层对照。', { size: 10.5, fill: C.sub, maxW: 205, lh: 15 })

  // ============ 二、MOFA：共享潜因子 ============
  b.panel(710, 132, 660, 420, { title: '二、MOFA：共享潜因子解释跨层方差' })
  const layers: Array<[string, string, string, string]> = [
    ['转录组', 'mRNA 丰度', C.rnaL, C.rna],
    ['蛋白组', '蛋白丰度', C.proL, C.pro],
    ['代谢组', '代谢物浓度', C.accL, C.acc],
  ]
  layers.forEach(([t, s, f, st], i) => {
    b.rect(740, 196 + i * 76, 180, 56, { fill: f, stroke: st, sw: 1.7, rx: 8 })
    b.ctext(830, 218 + i * 76, t, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(830, 240 + i * 76, s, { size: 10.5, fill: C.sub })
  })
  b.text(1065, 200, '共享潜因子', { size: 11.5, weight: 700, fill: C.accD })
  const fcy = [236, 332]
  ;[224, 300, 376].forEach(ly => fcy.forEach(fy =>
    b.line(920, ly, 1000, fy, { stroke: C.faint, sw: 1.1, opacity: 0.85 })))
  b.rect(1000, 216, 130, 40, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(1065, 241, '因子 1', { size: 12.5, weight: 700, fill: C.accD })
  b.rect(1000, 312, 130, 40, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(1065, 337, '因子 2', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(1065, 390, '……更多因子', { size: 12, fill: C.mute })
  b.ctext(1250, 208, '因子 1 在各层的负载', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1250, 226, '（示意）', { size: 10, fill: C.mute })
  b.bars(1180, 410, 180, 110, [1, 0.33, 0.11], { max: 1.15, fill: C.accL, stroke: C.acc })
  b.ctext(1202, 291, '高', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(1262, 365, '低', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(1322, 389, '≈ 0', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(1202, 430, '转录组', { size: 11, fill: C.mute })
  b.ctext(1262, 430, '蛋白组', { size: 11, fill: C.mute })
  b.ctext(1322, 430, '代谢组', { size: 11, fill: C.mute })
  b.wtext(740, 466, 'MOFA（多因子分析）在多视图间学共享潜因子：每个因子在每一层各有一个负载向量；层间负载的悬殊，直接指出「调控发生在哪一层」——转录层独高提示转录调控、蛋白层独高提示翻译后调控。', { size: 11, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 三、eQTL–pQTL 错位定位 ============
  b.panel(30, 576, 660, 404, { title: '三、eQTL–pQTL 错位：定位调控层级' })
  b.text(100, 634, '纵向：对蛋白（pQTL）；横向：对 mRNA（eQTL）', { size: 11, fill: C.mute })
  const cells: Array<[number, number, string, string, string, string, string]> = [
    [100, 655, '转录调控', '变异→mRNA→蛋白同向', C.dnaL, C.dna, ''],
    [275, 655, '蛋白稳定性 / 修饰', '只调蛋白、不调 RNA', C.proL, C.pro, ''],
    [100, 765, '翻译 / 降解调控', '调 RNA、不调蛋白', C.rnaL, C.rna, ''],
    [275, 765, '无效应（背景）', '非调控变异', C.panelB, C.line, '6 5'],
  ]
  cells.forEach(([x, y, t, s, f, st, dash]) => {
    b.rect(x, y, 175, 110, { fill: f, stroke: st, sw: 1.8, rx: 8, dash: dash || undefined })
    b.ctext(x + 87, y + 49, t, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(x + 87, y + 73, s, { size: 10, fill: C.sub })
  })
  b.etext(94, 710, 'pQTL ＋', { size: 11.5, weight: 700, fill: C.sub })
  b.etext(94, 820, 'pQTL －', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(187, 892, 'eQTL ＋', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(362, 892, 'eQTL －', { size: 11.5, weight: 700, fill: C.sub })
  b.text(470, 650, '错位即信息', { size: 13, weight: 700, fill: C.ink })
  b.wtext(470, 676, '错位组合定位调控层级：调 RNA 不调蛋白，提示翻译或降解；只调蛋白，提示稳定性或修饰。', { size: 11, fill: C.sub, maxW: 200, lh: 15 })
  b.wtext(470, 756, '核糖体分析可进一步区分：翻译效率的变化与 mRNA 降解的变化。', { size: 11, fill: C.sub, maxW: 200, lh: 15 })

  // ============ 四、实务三难与闭环 ============
  b.panel(710, 576, 660, 404, { title: '四、实务三难与整合的本义' })
  const hard: Array<[string, string, number]> = [
    ['① 批量效应', '各层自带技术偏差', 730],
    ['② 样本对齐', '谁是同一个体', 940],
    ['③ 维度灾难', '特征远多于样本', 1150],
  ]
  hard.forEach(([t, s, x]) => {
    b.rect(x, 630, 190, 60, { fill: C.warnL, stroke: C.warn, sw: 1.7, rx: 8 })
    b.ctext(x + 95, 654, t, { size: 12.5, weight: 700, fill: '#92400e' })
    b.ctext(x + 95, 676, s, { size: 10.5, fill: C.sub })
  })
  b.tag(1040, 722, '入场券：先层内归一、再统一量纲', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 9 })
  b.text(730, 762, '整合的闭环：', { size: 12, weight: 700, fill: C.ink })
  const loop: Array<[number, string, string, string, string]> = [
    [730, '整合发现', '多层证据交叉', C.accL, C.acc],
    [940, '独立复现', '外部队列、平台', C.okL, C.ok],
    [1150, '靶向验证', '湿实验回验', C.enzL, C.enz],
  ]
  loop.forEach(([x, t, s, f, st]) => {
    b.rect(x, 782, 170, 60, { fill: f, stroke: st, sw: 1.8, rx: 8 })
    b.ctext(x + 85, 806, t, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(x + 85, 828, s, { size: 10.5, fill: C.sub })
  })
  b.arrow(902, 812, 936, 812, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1112, 812, 1146, 812, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.path('M 1235,848 C 1235,906 815,906 815,850', { fill: 'none', stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(1025, 914, '数据回流', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(730, 946, '发现须独立复现并靶向验证——「互为证词」而非「拼贴幻灯」才是整合的本义。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
}

export default scene({
  title: '多组学数据整合：层间错位、MOFA 潜因子与 eQTL–pQTL 错位定位',
  subtitle: 'mRNA–蛋白相关仅 0.4–0.6；MOFA 共享潜因子解释跨层方差；eQTL–pQTL 错位定位调控层级；配对设计是第一原则',
  draw,
})
