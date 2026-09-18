// bi ch7-s1 蛋白质二级结构预测（39-i 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Q3 阶梯 ============
  b.panel(30, 132, 660, 430, { title: '一、Q3 准确率的三次台阶' })
  b.axis(100, 460, 560, 270, {
    xlabel: '方法（按年代）',
    title: '残基级三状态准确率 Q3',
    xticks: [],
    yticks: [[0, '0%'], [0.25, '25%'], [0.5, '50%'], [0.75, '75%'], [1, '100%']],
  })
  b.bars(170, 460, 420, 270, [55, 62.5, 77.5], {
    labels: ['Chou-Fasman（1974）', 'GOR（1980s）', 'PSIPRED'],
    vlabels: ['50–60%', '60–65%', '75–80%'],
    fill: C.accL, stroke: C.acc, max: 100,
  })
  b.line(100, 325, 660, 325, { stroke: C.mute, sw: 1.4, dash: '7 5', opacity: 0.9 })
  b.etext(652, 318, '「全卷曲」基线 ≈ 50%', { size: 11, weight: 700, fill: C.mute })
  b.wtext(60, 540, 'DSSP（1983）以主链氢键的周期性指派二级结构，是预测准确率的口径来源；评估须分状态统计。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16 })

  // ============ 二、三代方法 ============
  b.panel(710, 132, 660, 430, { title: '二、三代方法的核心思想' })
  const gens: Array<[string, string, string, string, string]> = [
    ['Chou-Fasman（1974）', '残基构象参数 + 成核规则；Pro 与 Gly 是典型的螺旋破坏者。', C.dna, C.dnaL, C.dnaD],
    ['GOR（1980s）', '以 17 个残基的窗口为上下文的信息论框架，显式刻画预测的不确定性。', C.rna, C.rnaL, C.rnaD],
    ['PSIPRED', 'PSI-BLAST 多序列比对概型 + 双层神经网络——确立「进化信息 + 机器学习」范式。', C.pro, C.proL, C.proD],
  ]
  gens.forEach(([t, s, st, fl, tf], i) => {
    const y = 190 + i * 118
    b.rect(740, y, 580, 100, { fill: fl, stroke: st, sw: 1.8, rx: 10, fillOp: 0.5 })
    b.text(762, y + 32, t, { size: 15, weight: 700, fill: tf })
    b.wtext(762, y + 60, s, { size: 11.5, fill: C.sub, maxW: 540, lh: 16 })
  })

  // ============ 三、Q3/Q8 与上限 ============
  b.panel(30, 576, 1340, 384, { title: '三、Q3 / Q8 口径与预测的原理性上限' })
  b.text(60, 648, 'Q3（三状态）', { size: 12.5, weight: 700, fill: C.ink })
  const q3: Array<[number, string]> = [[100, 'H 螺旋'], [280, 'E 片层'], [460, 'C 卷曲']]
  q3.forEach(([x, t]) => {
    b.rect(x, 664, 90, 46, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
    b.ctext(x + 45, 692, t, { size: 12, weight: 700, fill: C.accD })
  })
  b.text(60, 762, 'Q8（八状态）', { size: 12.5, weight: 700, fill: C.ink })
  const q8: Array<[string, string]> = [['H', 'α 螺旋'], ['G', '3₁₀'], ['I', 'π 螺旋'], ['E', 'β 链'], ['B', '桥'], ['T', '转角'], ['S', '弯'], ['C', '卷曲']]
  q8.forEach(([c, s], i) => {
    const x = 70 + i * 70
    b.rect(x, 778, 56, 46, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 6 })
    b.ctext(x + 28, 800, c, { size: 13, weight: 700, fill: C.sub })
    b.ctext(x + 28, 816, s, { size: 8.5, fill: C.mute })
  })
  // 映射线：H→H,G,I；E→E,B；C→T,S,C
  b.line(145, 710, 98, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.line(145, 710, 168, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.line(145, 710, 238, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.line(325, 710, 348, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.line(325, 710, 418, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.line(505, 710, 558, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.line(505, 710, 628, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.line(505, 710, 698, 778, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.wtext(60, 856, 'Q8 信息量更大而数值更低——同一模型换口径，分数自然下降；报告准确率必须先报口径。', { size: 11.5, fill: C.sub, maxW: 580, lh: 16 })
  b.rect(700, 640, 640, 100, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 8, fillOp: 0.45 })
  b.text(720, 668, '原理性上限', { size: 13, weight: 700, fill: '#92400e' })
  b.wtext(720, 694, '局部氢键模式使预测部分可行；远距离相互作用决定其无法完全确定——内在无序区不存在固定二级结构，Q3 存在上限。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.rect(700, 756, 640, 96, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(720, 784, '评估纪律', { size: 13, weight: 700, fill: C.ink })
  b.wtext(720, 810, '「全卷曲」基线即可得约五成准确率——评估须分状态（H/E/C）统计，混淆矩阵比单一数字诚实。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '二级结构预测：从局部倾向到进化信息的三次台阶',
  subtitle: 'Chou-Fasman 以构象参数与成核规则达约 50%–60%（Pro 与 Gly 是螺旋破坏者）；GOR 以 17 残基窗口的信息论框架达约 60%–65%；PSIPRED 融合 PSI-BLAST 概型与双层神经网络达约 75%–80%；DSSP（1983）以氢键周期性指派为口径；Q8 信息量更大而数值更低，无序区使 Q3 有原理性上限',
  draw,
})
