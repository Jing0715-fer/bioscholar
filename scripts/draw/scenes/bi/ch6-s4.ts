// bi ch6-s4 贝叶斯推断与树的评估（39-i 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、贝叶斯与 MCMC ============
  b.panel(30, 132, 660, 430, { title: '一、贝叶斯推断：后验即答案' })
  b.rect(60, 172, 580, 98, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.ctext(350, 198, '后验 ∝ 似然 × 先验', { size: 15, weight: 700, fill: C.ink })
  b.ctext(350, 224, '输出树与参数的后验分布；分支后验概率 = 采样树中含该分支的比例', { size: 11.5, fill: C.sub })
  b.ctext(350, 250, 'MCMC 以「提议—接受」采样逼近后验（MrBayes / BEAST 等实现）', { size: 11.5, fill: C.mute })
  b.axis(100, 500, 520, 200, {
    xlabel: 'MCMC 迭代 →',
    title: '链的轨迹：老化后收敛到平稳分布',
    xticks: [[0, '0'], [0.5, '中期'], [1, '后期']],
    yticks: [],
  })
  b.curve(100, 500, 520, 200, [
    [0, 0.5], [0.02, 0.72], [0.05, 0.34], [0.08, 0.65], [0.11, 0.4], [0.14, 0.78], [0.17, 0.52],
    [0.2, 0.34], [0.24, 0.6], [0.28, 0.48], [0.32, 0.55], [0.36, 0.46], [0.4, 0.52], [0.45, 0.49],
    [0.5, 0.53], [0.55, 0.5], [0.6, 0.52], [0.65, 0.49], [0.7, 0.51], [0.75, 0.5], [0.8, 0.53],
    [0.85, 0.5], [0.9, 0.51], [0.95, 0.5], [1, 0.52],
  ], { stroke: C.dna, sw: 2.2, smooth: true })
  b.rect(100, 300, 104, 200, { fill: C.badL, stroke: 'none', fillOp: 0.45 })
  b.wtext(104, 486, '老化段丢弃', { size: 10.5, weight: 700, fill: C.bad, maxW: 60, lh: 13 })
  b.tag(480, 350, 'ESS > 200 才可信', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: '#065f46', pad: 8 })
  b.tag(480, 382, '多链并行起点不同', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })

  // ============ 二、自展支持率 ============
  b.panel(710, 132, 660, 430, { title: '二、自展支持率：以重抽样度量稳健度' })
  const bflow: Array<[number, number, string]> = [
    [740, 130, '原比对（N 列）'],
    [890, 160, '有放回重抽 N 列'],
    [1070, 100, '建树'],
    [1190, 130, '重复数百次'],
  ]
  bflow.forEach(([x, w, t], i) => {
    b.rect(x, 196, w, 64, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.6 })
    b.wtext(x + w / 2, 224, t, { size: 11.5, weight: 700, fill: C.accD, maxW: w - 16, lh: 15, anchor: 'middle' })
    if (i < 3) b.arrow(x + w + 4, 228, x + w + 18, 228, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  // 带支持率的迷你树
  b.line(860, 420, 880, 340, { stroke: C.sub, sw: 1.8 })
  b.line(980, 420, 880, 340, { stroke: C.sub, sw: 1.8 })
  b.line(1060, 420, 1140, 340, { stroke: C.sub, sw: 1.8 })
  b.line(1180, 420, 1140, 340, { stroke: C.sub, sw: 1.8 })
  b.line(880, 340, 1140, 340, { stroke: C.sub, sw: 1.8 })
  b.circle(880, 340, 5, { fill: C.sub })
  b.circle(1140, 340, 5, { fill: C.sub })
  ;[920, 980, 1060, 1120, 1180].forEach(x => b.circle(x, 420, 4.5, { fill: C.ink }))
  b.ctext(920, 444, 'A', { size: 11, fill: C.mute })
  b.ctext(980, 444, 'B', { size: 11, fill: C.mute })
  b.ctext(1060, 444, 'C', { size: 11, fill: C.mute })
  b.ctext(1120, 444, 'D', { size: 11, fill: C.mute })
  b.ctext(1180, 444, 'E', { size: 11, fill: C.mute })
  b.ctext(880, 326, '98', { size: 12, weight: 700, fill: C.proD })
  b.ctext(1010, 326, '70', { size: 12, weight: 700, fill: '#92400e' })
  b.ctext(1140, 326, '62', { size: 12, weight: 700, fill: C.mute })
  b.ctext(1000, 478, '分支上数字 = 重复建树中含该分支的比例（示意值）', { size: 11, fill: C.mute })
  b.rect(740, 500, 590, 56, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 8, fillOp: 0.5 })
  b.wtext(758, 522, '惯例：不低于 70% 视为可接受（严格场合取 80% 或 95%）；UFBoot 把成本大幅降低。', { size: 11.5, fill: '#065f46', maxW: 556, lh: 16 })
  b.wtext(740, 296, '位点重抽：以数据自身的扰动', { size: 11.5, weight: 700, fill: C.ink })

  // ============ 三、长枝吸引与分子钟 ============
  b.panel(30, 576, 1340, 384, { title: '三、长枝吸引与分子钟定标：两个解读陷阱' })
  // 真树
  b.rect(60, 636, 330, 260, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 10 })
  b.ctext(225, 664, '真树：短短姊妹 + 长长姊妹', { size: 12.5, weight: 700, fill: C.ink })
  b.line(210, 690, 140, 820, { stroke: C.sub, sw: 2 })
  b.line(210, 690, 290, 700, { stroke: C.sub, sw: 2 })
  b.line(140, 820, 100, 860, { stroke: C.sub, sw: 2 })
  b.line(140, 820, 180, 860, { stroke: C.sub, sw: 2 })
  b.line(290, 700, 250, 860, { stroke: C.sub, sw: 2 })
  b.line(290, 700, 330, 860, { stroke: C.sub, sw: 2 })
  ;[100, 180, 250, 330].forEach(x => b.circle(x, 860, 4.5, { fill: C.ink }))
  b.ctext(100, 884, '短', { size: 11, weight: 700, fill: C.mute })
  b.ctext(180, 884, '短', { size: 11, weight: 700, fill: C.mute })
  b.ctext(250, 884, '长', { size: 11, weight: 700, fill: C.bad })
  b.ctext(330, 884, '长', { size: 11, weight: 700, fill: C.bad })
  // 假树
  b.rect(410, 636, 330, 260, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 10, fillOp: 0.4 })
  b.ctext(575, 664, '假树：长短配对——简约法常偏好', { size: 12.5, weight: 700, fill: C.bad })
  b.line(560, 690, 490, 760, { stroke: C.sub, sw: 2 })
  b.line(560, 690, 630, 760, { stroke: C.sub, sw: 2 })
  b.line(490, 760, 450, 860, { stroke: C.sub, sw: 2 })
  b.line(490, 760, 530, 860, { stroke: C.sub, sw: 2 })
  b.line(630, 760, 590, 860, { stroke: C.sub, sw: 2 })
  b.line(630, 760, 670, 860, { stroke: C.sub, sw: 2 })
  ;[450, 530, 590, 670].forEach(x => b.circle(x, 860, 4.5, { fill: C.ink }))
  b.ctext(450, 884, '短', { size: 11, weight: 700, fill: C.mute })
  b.ctext(530, 884, '长', { size: 11, weight: 700, fill: C.bad })
  b.ctext(590, 884, '短', { size: 11, weight: 700, fill: C.mute })
  b.ctext(670, 884, '长', { size: 11, weight: 700, fill: C.bad })
  b.wtext(60, 916, 'Felsenstein（1978）：快演化谱系被虚假拉拢。对策——加分类群、剔除高变位点、用充分的替换模型。', { size: 11.5, fill: C.sub, maxW: 660, lh: 16 })
  // 分子钟
  b.text(790, 664, '分歧时间：化石定标 + 宽松分子钟', { size: 12.5, weight: 700, fill: C.ink })
  b.line(860, 850, 900, 760, { stroke: C.dna, sw: 2 })
  b.line(980, 850, 900, 760, { stroke: C.dna, sw: 2 })
  b.line(900, 760, 1080, 700, { stroke: C.dna, sw: 2 })
  b.line(1090, 780, 1080, 700, { stroke: C.dna, sw: 2 })
  b.line(1190, 850, 1090, 780, { stroke: C.dna, sw: 2 })
  b.line(1010, 850, 1090, 780, { stroke: C.dna, sw: 2 })
  ;[860, 980, 1010, 1190].forEach(x => b.circle(x, 850, 4.5, { fill: C.ink }))
  b.polygon([[1080, 692], [1088, 700], [1080, 708], [1072, 700]], { fill: C.warn })
  b.text(1096, 704, '化石定标先验', { size: 11, weight: 700, fill: '#92400e' })
  b.arrow(1300, 860, 1300, 680, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(1300, 880, '现在', { size: 10.5, fill: C.mute })
  b.ctext(1300, 668, '过去', { size: 10.5, fill: C.mute })
  b.wtext(790, 900, '宽松钟允许速率在分支间波动；分歧时间的结果须做先验敏感性检验。', { size: 11.5, fill: C.sub, maxW: 490, lh: 16 })
}

export default scene({
  title: '贝叶斯推断与树的评估：MCMC、自展与长枝吸引',
  subtitle: '贝叶斯输出树与参数的后验分布，分支后验概率即采样树中含该分支的比例，MCMC 须老化、多链并行并核查 ESS 高于 200；自展以位点重抽度量信号稳健度、不低于 70% 为可接受惯例、UFBoot 大幅降本；长枝吸引把快演化谱系虚假拉拢（Felsenstein 1978）；分歧时间靠化石定标与宽松钟',
  draw,
})
