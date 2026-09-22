// sb ch8-s2 模型搭建的实践（Task 4-b）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Coot 工作流 ============
  b.panel(30, 132, 660, 330, { title: '一、Coot 工作流：从骨架到全原子（Emsley 与 Cowtan 2004）' })
  // ① 骨架化
  b.rect(56, 222, 140, 110, { fill: C.bg, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(126, 240, '① 骨架化（bones）', { size: 10.5, weight: 700, fill: C.ink })
  for (const [cx, cy] of [[90, 285], [125, 300], [160, 280]]) b.ellipse(cx, cy, 20, 14, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.2 })
  b.polyline([[76, 290], [100, 278], [126, 296], [150, 282], [176, 272]], { stroke: C.bad, sw: 2 })
  b.ctext(126, 322, 'Greer 1974「骨头」网络', { size: 9, fill: C.mute })
  // ② baton 接力
  b.rect(216, 222, 140, 110, { fill: C.bg, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(286, 240, '② baton 接力搭建', { size: 10.5, weight: 700, fill: C.ink })
  b.polyline([[232, 300], [258, 282], [284, 296], [310, 278], [336, 290]], { stroke: C.faint, sw: 1.2, dash: '4 4' })
  for (const [x1, y1, x2, y2] of [[232, 300, 258, 282], [258, 282, 284, 296], [284, 296, 310, 278], [310, 278, 336, 290]] as Array<[number, number, number, number]>)
    b.line(x1, y1, x2, y2, { stroke: C.acc, sw: 4.5 })
  b.circle(258, 282, 3.4, { fill: C.accD, stroke: 'none' })
  b.circle(284, 296, 3.4, { fill: C.accD, stroke: 'none' })
  b.ctext(286, 322, '每跳一步预置一个残基', { size: 9, fill: C.mute })
  // ③ mutate + rotamer
  b.rect(376, 222, 140, 110, { fill: C.bg, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(446, 240, '③ mutate 与 fit rotamer', { size: 10.5, weight: 700, fill: C.ink })
  b.circle(410, 288, 6, { fill: C.panelB, stroke: C.mute, sw: 1.6 })
  b.arrow(424, 288, 444, 288, { stroke: C.mute, sw: 1.6, marker: 'ink' })
  b.circle(462, 288, 6, { fill: C.dna, stroke: C.dnaD, sw: 1.6 })
  b.line(462, 288, 478, 272, { stroke: C.dnaD, sw: 2.2 })
  b.line(462, 288, 480, 294, { stroke: C.faint, sw: 1.4, dash: '4 3' })
  b.line(462, 288, 474, 304, { stroke: C.faint, sw: 1.4, dash: '4 3' })
  b.ctext(446, 322, '虚线=候选构象，实线=最贴合', { size: 9, fill: C.mute })
  // ④ real space refine
  b.rect(536, 222, 140, 110, { fill: C.bg, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(606, 240, '④ real space refine zone', { size: 10, weight: 700, fill: C.ink })
  b.ellipse(600, 292, 44, 16, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 1.3 })
  b.path('M 566,300 q 16,-18 32,-6 q 14,10 34,-8', { stroke: C.bad, sw: 2, dash: '5 4', fill: 'none' })
  b.path('M 566,296 q 18,-6 34,2 q 16,8 32,-4', { stroke: C.ok, sw: 2.4, fill: 'none' })
  b.arrow(592, 312, 592, 298, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(606, 322, '选区贴密度同时保持几何', { size: 9, fill: C.mute })
  b.arrow(196, 277, 216, 277, { stroke: C.mute, sw: 1.6, marker: 'ink' })
  b.arrow(356, 277, 376, 277, { stroke: C.mute, sw: 1.6, marker: 'ink' })
  b.arrow(516, 277, 536, 277, { stroke: C.mute, sw: 1.6, marker: 'ink' })
  b.wtext(56, 356, '核心逻辑：把「看图、改模、验证」压缩进同一界面。加减残基接续断链、mutate 把暂放残基换成序列指定类型；rotamer 从 Richardson 系统计库挑最贴合密度者，是防止「怪构象」的第一道闸。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 二、peptide flip 与操作时机 ============
  b.panel(710, 132, 660, 330, { title: '二、peptide flip 与操作时机速查' })
  // flip 前
  b.rect(740, 206, 180, 84, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.4, rx: 6 })
  b.ctext(830, 222, 'flip 前：O 装反', { size: 10, weight: 700, fill: C.badD })
  b.circle(790, 262, 5, { fill: C.accD, stroke: 'none' })
  b.line(790, 262, 830, 262, { stroke: C.sub, sw: 2 })
  b.circle(830, 262, 5, { fill: C.dnaD, stroke: 'none' })
  b.line(830, 262, 830, 240, { stroke: C.bad, sw: 2.2 })
  b.circle(830, 238, 3.5, { fill: C.bad, stroke: 'none' })
  b.line(830, 262, 872, 262, { stroke: C.sub, sw: 2 })
  b.circle(872, 262, 5, { fill: C.accD, stroke: 'none' })
  b.ctext(830, 284, 'φ/ψ 落 Ramachandran 禁区', { size: 9, fill: C.mute })
  // 翻转箭头
  b.tag(955, 248, '肽平面旋转 180°', { fill: C.warnL, stroke: C.warn, size: 9.5, weight: 700, tfill: C.warnD, pad: 7 })
  // flip 后
  b.rect(1040, 206, 180, 84, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.4, rx: 6 })
  b.ctext(1130, 222, 'flip 后：羰基归位', { size: 10, weight: 700, fill: C.okD })
  b.circle(1090, 258, 5, { fill: C.accD, stroke: 'none' })
  b.line(1090, 258, 1130, 258, { stroke: C.sub, sw: 2 })
  b.circle(1130, 258, 5, { fill: C.dnaD, stroke: 'none' })
  b.line(1130, 258, 1130, 280, { stroke: C.ok, sw: 2.2 })
  b.circle(1130, 282, 3.5, { fill: C.ok, stroke: 'none' })
  b.line(1130, 258, 1172, 258, { stroke: C.sub, sw: 2 })
  b.circle(1172, 258, 5, { fill: C.accD, stroke: 'none' })
  b.ctext(1130, 236, 'φ/ψ 回到优势区', { size: 9, fill: C.mute })
  b.arrow(925, 248, 1035, 248, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.table(730, 306, 620, {
    headers: ['操作', '目的', '常用时机'],
    colW: [186, 200, 234],
    rowH: 26,
    fontSize: 9.5,
    rows: [
      ['骨架化加 baton 搭建', '沿密度走廊延伸主链', '从零建模、断链重接'],
      ['加减残基、mutate', '对齐序列与密度', 'register 校正之后'],
      ['fit rotamer', '侧链按统计先验换构象', '密度与几何冲突时'],
      ['real space refine zone', '选区实空间贴密度优化', '每次改动后、全局精修前'],
      ['peptide flip', '翻正肽平面', '成对正负峰伴越界时'],
    ],
  })

  // ============ 三、自动建模流水线 ============
  b.panel(30, 482, 660, 400, { title: '三、自动建模流水线：分工与门槛' })
  const autos: Array<[string, string, string, string, string]> = [
    ['ARP/wARP', 'Perrakis 等 1999', '自由原子反复「播种—连接—重评」，拼主链再挂序列', '要求优于约 1.7 Å；数十分钟产出九成以上正确全原子', C.acc],
    ['Buccaneer', 'Cowtan 2006', '从密度特征直接预测主链片段与残基类型，逐步拉长链条', '面向 2–3.5 Å 中低分辨率，长链蛋白尤其受益', C.dna],
    ['Phenix AutoBuild', 'Terwilliger 等 2008', '定相、修饰、建模、精修组成循环', '每一轮重建都以最新相位为底', C.pro],
    ['AlphaFold 初稿', '2021 年后的新实践', '预测模型按密度对接为骨架参考，任务变「逐段校」', '低置信环区仍须手工，工作量普遍减半', C.enz],
  ]
  let ay = 522
  for (const [name, yr, what, req, c] of autos) {
    b.rect(56, ay - 18, 600, 82, { fill: `${c}14`, stroke: c, sw: 1.4, rx: 8 })
    b.text(72, ay + 4, name, { size: 12, weight: 700, fill: c })
    b.text(72 + textWw(name, 12), ay + 4, '（' + yr + '）', { size: 9.5, fill: C.mute })
    b.wtext(240, ay + 2, what, { size: 10, fill: C.sub, maxW: 260, lh: 13.5 })
    b.wtext(240, ay + 34, req, { size: 9.5, fill: C.mute, maxW: 400, lh: 13 })
    ay += 88
  }
  b.text(56, 870, '自动与手工衔接：自动程序先交七八成骨架，建模员在 Coot 处理环区、侧链与配体，再进全局精修', { size: 10, fill: C.sub })

  // ============ 四、水、配体与双色球导航 ============
  b.panel(710, 482, 660, 400, { title: '四、水、配体与双色球导航' })
  // 水三判据
  b.rect(730, 516, 340, 142, { fill: C.accL, fillOp: 0.3, stroke: C.acc, sw: 1.4, rx: 8 })
  b.ctext(900, 534, '水分子三判据（缺一不可）', { size: 11, weight: 700, fill: C.accD })
  b.ellipse(820, 590, 26, 17, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.circle(900, 590, 5, { fill: C.acc, stroke: C.accD, sw: 1.2 })
  b.ellipse(975, 592, 26, 17, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.line(843, 585, 893, 588, { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.line(907, 590, 952, 590, { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.ctext(868, 574, '2.6–3.0 Å', { size: 9, weight: 700, fill: C.mute })
  b.ctext(930, 574, '2.6–3.0 Å', { size: 9, weight: 700, fill: C.mute })
  b.text(742, 624, '① Fo−Fc 不低于约 3σ（稳妥 2.5σ 配主图）', { size: 9.5, fill: C.sub })
  b.text(742, 638, '② 氢键 2.6–3.0 Å、几何不荒谬（孤立水不放）', { size: 9.5, fill: C.sub })
  b.text(742, 652, '③ B 因子与邻居相当——B 飙过 80 多半在占噪声位', { size: 9.5, fill: C.sub })
  // 配体流程
  b.rect(1090, 516, 260, 130, { fill: C.proL, fillOp: 0.35, stroke: C.pro, sw: 1.4, rx: 8 })
  b.ctext(1220, 534, '配体建模四步', { size: 11, weight: 700, fill: C.proD })
  const lig = ['GRADE/eLBOW 生成约束字典', '按密度摆放与旋转', 'polder 图判定存在性', '占有率与 B 因子成对检验']
  let ly = 560
  for (const t of lig) {
    b.circle(1108, ly, 3, { fill: C.pro, stroke: 'none' })
    b.text(1118, ly + 4, t, { size: 9.5, fill: C.sub })
    ly += 22
  }
  // 水数与分辨率
  b.tag(900, 688, '2 Å：数百个水（约与残基同量级）', { fill: C.okL, stroke: C.ok, size: 9.5, weight: 700, tfill: C.okD, pad: 7 })
  b.tag(1170, 688, '3 Å：零星 · 6 Å：一个不留', { fill: C.warnL, stroke: C.warn, size: 9.5, weight: 700, tfill: C.warnD, pad: 7 })
  b.wtext(730, 716, 'find waters 自动放水只当候选，逐个过三判据再收编；活性位点的水参与催化与配体识别，优先级最高。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })
  // 双色球导航
  b.rect(730, 756, 620, 78, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(1040, 776, '双色球导航：验证项逐个清零', { size: 11, weight: 700, fill: C.ink })
  const nav: Array<[string, string, string]> = [['Ramachandran', '优势区大于 96%', C.dna], ['rotamer', '离群接近零', C.acc], ['clash', '冲突逐项清零', C.bad]]
  let nx = 800
  for (const [t, sub, c] of nav) {
    b.circle(nx, 804, 8, { fill: `${c}44`, stroke: c, sw: 2 })
    b.circle(nx, 804, 3, { fill: c, stroke: 'none' })
    b.text(nx + 16, 800, t, { size: 10, weight: 700, fill: c })
    b.text(nx + 16, 816, sub, { size: 9, fill: C.mute })
    nx += 190
  }
  b.ctext(760, 804, '三件套', { size: 10, weight: 700, fill: C.sub })
  b.wtext(730, 854, '清零之后再进入全局精修——几何与密度轮流把关，是省心与严谨的分界线。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })

  // 底部收束
  b.ctext(700, 946, '建模是把密度翻译成坐标的手艺——自动流水线管量产，Coot 管手笔，双色球管纪律', { size: 12, weight: 600, fill: C.mute })
}

/** 简易文本宽（用于行内跟随排版） */
function textWw(s: string, size: number): number {
  let w = 0
  for (const ch of s) w += /[\u2E80-\u9FFF]/.test(ch) ? size : size * 0.55
  return w + 6
}

export default scene({
  title: '模型搭建的实践：Coot 工作流与自动流水线',
  subtitle: 'Coot（Emsley 与 Cowtan 2004）：骨架化、baton 接力、mutate、fit rotamer、real space refine、peptide flip；ARP/wARP 要求优于约 1.7 Å、Buccaneer 面向 2–3.5 Å；水三判据（3σ、氢键 2.6–3.0 Å、B 相当）；配体先造字典再过 polder 图',
  draw,
})
