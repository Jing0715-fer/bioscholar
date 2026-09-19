// bi ch11-s2 蛋白质相互作用网络（39-i 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Y2H ============
  b.panel(30, 132, 660, 420, { title: '一、酵母双杂交（Y2H）：核内的直接配对读出' })
  b.rect(110, 230, 120, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 7 })
  b.ctext(170, 255, 'BD · 结合域', { size: 12.5, weight: 700, fill: C.proD })
  b.line(230, 250, 244, 250, { stroke: C.pro, sw: 2 })
  b.rect(244, 230, 130, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 7, fillOp: 0.6 })
  b.ctext(309, 255, '诱饵蛋白', { size: 12.5, weight: 700, fill: C.proD })
  b.rect(110, 310, 120, 40, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(170, 335, 'AD · 激活域', { size: 12.5, weight: 700, fill: C.enzD })
  b.line(230, 330, 244, 330, { stroke: C.enz, sw: 2 })
  b.rect(244, 310, 130, 40, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7, fillOp: 0.6 })
  b.ctext(309, 335, '猎物蛋白', { size: 12.5, weight: 700, fill: C.enzD })
  b.line(309, 270, 309, 310, { stroke: C.bad, sw: 2.4 })
  b.text(330, 296, '互作？', { size: 11.5, weight: 700, fill: C.bad })
  b.arrow(160, 272, 200, 396, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(160, 352, 216, 396, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.rect(196, 398, 44, 38, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.ctext(218, 422, 'UAS', { size: 10.5, weight: 700, fill: C.proD })
  b.rect(240, 398, 210, 38, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 4 })
  b.ctext(345, 422, '报告基因', { size: 12.5, weight: 700, fill: '#065f46' })
  b.rect(410, 230, 250, 120, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(535, 256, '读出逻辑', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(425, 280, '互作 ⇒ BD 与 AD 相邻 ⇒ 报告基因表达；不互作 ⇒ 无读出。测的是直接配对（Fields 与 Song，1989 创建）。', { size: 11, fill: C.sub, maxW: 220, lh: 15 })
  b.wtext(60, 466, '假阳性：自激活、过表达强迫互作；假阴性：膜蛋白 / 分泌蛋白难入核——高通量屏幕的假阳性比例被估在数成量级。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、AP-MS 与置信分层 ============
  b.panel(710, 132, 660, 420, { title: '二、亲和纯化质谱（AP-MS）与置信度分层' })
  b.rect(740, 190, 190, 60, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.55 })
  b.ctext(835, 214, '标签蛋白 pull-down', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(835, 236, '亲和纯化＋空标签对照', { size: 10.5, fill: C.sub })
  b.arrow(930, 220, 960, 220, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(962, 190, 190, 60, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.55 })
  b.ctext(1057, 214, '质谱鉴定共存蛋白', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(1057, 236, 'SAINT / CompPASS 打分', { size: 10.5, fill: C.sub })
  b.arrow(1152, 220, 1182, 220, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(1184, 190, 156, 60, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.55 })
  b.ctext(1262, 214, '复合物成员名单', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(1262, 236, '「同复合物」', { size: 10.5, fill: C.sub })
  b.wtext(740, 278, 'AP-MS 回答「同复合物」而非「直接接触」；空标签对照与 SAINT / CompPASS 打分是去噪关键。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.text(740, 326, '互作数据的置信度分层', { size: 13, weight: 700, fill: C.ink })
  b.rect(740, 342, 600, 32, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 6, fillOp: 0.5 })
  b.ctext(1040, 364, '低通量文献验证（金标准）', { size: 12, weight: 700, fill: '#065f46' })
  b.rect(790, 382, 500, 32, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 6, fillOp: 0.5 })
  b.ctext(1040, 404, '高通量屏幕（Y2H / AP-MS）', { size: 12, weight: 700, fill: '#92400e' })
  b.rect(840, 422, 400, 32, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 6 })
  b.ctext(1040, 444, '计算预测（转移 / 共演化）', { size: 12, weight: 600, fill: C.sub })
  b.wtext(740, 486, '多源独立证据才升高置信；黏性蛋白是常见污染源，互作具细胞类型与条件特异性——跨条件平移须核对实验注释。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、复合物展开与 hub 必需性 ============
  b.panel(30, 576, 660, 404, { title: '三、复合物展开两口径与 hub-必需基因相关' })
  b.text(170, 640, '团块全连（clique）', { size: 12.5, weight: 700, fill: C.ink })
  const C1: Array<[number, number]> = [[130, 690], [200, 664], [225, 724], [160, 744], [105, 720]]
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) b.line(C1[i][0], C1[i][1], C1[j][0], C1[j][1], { stroke: C.faint, sw: 1.2 })
  C1.forEach(([x, y]) => b.circle(x, y, 9, { fill: C.proL, stroke: C.pro, sw: 1.6 }))
  b.text(450, 640, 'spokes（辐条）', { size: 12.5, weight: 700, fill: C.ink })
  const S1: Array<[number, number]> = [[390, 680], [390, 740], [450, 660], [450, 748], [510, 704]]
  S1.forEach(([x, y]) => b.line(450, 704, x, y, { stroke: C.faint, sw: 1.2 }))
  S1.forEach(([x, y]) => b.circle(x, y, 9, { fill: C.accL, stroke: C.acc, sw: 1.6 }))
  b.circle(450, 704, 11, { fill: C.enz, fillOp: 0.8 })
  b.wtext(60, 780, '同一复合物两种展开口径：全连团块或以诱饵为辐条——同一数据长出不同的「度」。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.text(60, 830, 'hub 与必需基因（Jeong 等 2001）', { size: 13, weight: 700, fill: C.ink })
  b.bars(90, 928, 200, 76, [0.38, 0.78], { labels: ['低度数档', '高度数档'], fill: C.proL, stroke: C.pro, max: 1 })
  b.ctext(190, 868, '必需基因比例（相对示意）', { size: 10.5, fill: C.mute })
  b.wtext(320, 856, '酵母互作网络：按度分层后，最高度数档的必需基因比例显著高于低度档。', { size: 11, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(320, 906, '但该相关受表达量与研究偏差混杂——「富裕联系」不等于「因果命脉」。', { size: 11, fill: C.bad, maxW: 300, lh: 15 })

  // ============ 四、时间线与合成致死 ============
  b.panel(710, 576, 660, 404, { title: '四、里程碑时间线与网络的价值' })
  b.timelineH(760, 690, 560, [
    { at: 0.05, label: '1989', sub: 'Fields–Song 创建 Y2H', above: true, c: C.sub },
    { at: 0.4, label: '2000 前后', sub: '基因组规模 Y2H 互作图谱', above: false, c: C.acc },
    { at: 0.68, label: '2006', sub: '两大 AP-MS 计划同期发表', above: true, c: C.pro },
    { at: 0.95, label: '启示', sub: '复合物边界不一致 → 条件依赖', above: false, c: C.warn },
  ])
  b.text(760, 780, '合成致死：冗余通路的交叉点', { size: 13, weight: 700, fill: C.ink })
  b.rect(760, 800, 190, 40, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.ctext(855, 825, '通路 A（基因 a）', { size: 12, weight: 700, fill: C.accD })
  b.rect(760, 876, 190, 40, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.ctext(855, 901, '通路 B（基因 b）', { size: 12, weight: 700, fill: C.accD })
  b.rect(1160, 838, 170, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1245, 863, '核心功能', { size: 12.5, weight: 700, fill: C.proD })
  b.arrow(950, 820, 1160, 848, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(950, 896, 1160, 868, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(760, 930, '单独失活任一条 → 另一条代偿，细胞存活；两条同时失活 → 合成致死。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(760, 962, '网络拓扑 × 合成致死等遗传筛选是靶点发现的高产策略——网络的价值在提出可检验的因果假设。', { size: 11.5, weight: 600, fill: C.mute, maxW: 600, lh: 16 })
}

export default scene({
  title: '蛋白质相互作用网络：Y2H 与 AP-MS 的互补、置信分层与合成致死',
  subtitle: 'Y2H（Fields 与 Song 1989）把互作翻译为报告基因读出、测直接配对，但受自激活等假阳性（高通量被估在数成量级）与膜/分泌蛋白难入核的假阴性双重困扰；AP-MS 以标签 pull-down 加质谱回答「同复合物」，空标签对照与 SAINT/CompPASS 打分去噪；数据须分层置信，多源独立证据才升高置信；复合物展开分团块全连与 spokes 两口径；Jeong 等 2001 发现高度数 hub 更可能必需但相关受混杂；网络拓扑与合成致死等遗传筛选交叉是靶点发现的高产策略',
  draw,
})
