// bi ch5-s1 多序列比对的渐进法与迭代法（39-i 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、MSA 与列的保守性 ============
  b.panel(30, 132, 660, 500, { title: '一、多序列比对：列揭示家族保守性' })
  const conserved = new Set([1, 4, 7, 10])
  const rows = [
    ['A', 'V', 'L', 'S', 'D', 'K', 'A', 'V', 'L', 'S', 'D', 'K'],
    ['A', 'I', 'V', 'N', 'D', 'R', 'A', 'I', 'V', 'N', 'D', 'R'],
    ['A', 'V', 'I', 'T', 'D', 'Q', 'A', 'V', 'I', 'T', 'D', 'Q'],
    ['A', 'L', 'V', 'S', 'D', 'K', 'A', 'L', 'V', 'S', 'D', 'K'],
    ['A', 'I', 'L', 'N', 'D', 'H', 'A', 'I', 'L', 'N', 'D', 'H'],
  ]
  rows.forEach((seq, r) => {
    seq.forEach((ch, c) => {
      const x = 70 + c * 30
      const y = 210 + r * 32
      if (conserved.has(c)) b.rect(x - 2, y - 14, 26, 26, { fill: C.proL, stroke: C.pro, sw: 1.2 })
      b.ctext(x + 11, y + 4, ch, { size: 13, weight: conserved.has(c) ? 700 : 400, fill: conserved.has(c) ? C.proD : C.sub })
    })
  })
  ;[1, 4, 7, 10].forEach(c => {
    b.ctext(70 + c * 30 + 11, 386, '★', { size: 13, fill: C.pro })
  })
  b.text(70, 412, '★ 保守列（全家族一致）', { size: 11, weight: 700, fill: C.pro })
  b.wtext(70, 448, '一列 = 家族的一个演化位置：保守列指向功能约束；列的统计是 profile、HMM 与系统树的共同入口。', { size: 12, fill: C.sub, maxW: 560, lh: 18 })
  b.wtext(70, 496, '最优 MSA 是 NP 完全问题——精确求解不可行，实用工具皆为启发式。', { size: 12, fill: C.mute, maxW: 560, lh: 18 })

  // ============ 二、Clustal W 三步 ============
  b.panel(710, 132, 660, 500, { title: '二、Clustal W 三步与渐进法的命门' })
  const steps: Array<[string, string]> = [
    ['① 两两比对 → 距离', '算出所有序列两两距离，构建引导树'],
    ['② 按树为序列加权', '压制近缘冗余，降低重复计票'],
    ['③ 沿树渐进比对', '从最相似开始，profile 对 profile 逐层合并'],
  ]
  steps.forEach(([t, s], i) => {
    const x = 740 + i * 200
    b.rect(x, 200, 184, 108, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10, fillOp: 0.6 })
    b.wtext(x + 92, 228, t, { size: 12.5, weight: 700, fill: C.accD, maxW: 164, lh: 17, anchor: 'middle' })
    b.wtext(x + 92, 262, s, { size: 11, fill: C.sub, maxW: 164, lh: 15, anchor: 'middle' })
    if (i < 2) b.arrow(x + 188, 254, x + 196, 254, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.rect(740, 340, 580, 66, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 8, fillOp: 0.5 })
  b.wtext(758, 362, '「once a gap, always a gap」：渐进法的失误不可撤销——分歧大的序列集，准确率系统性下降。', { size: 12, fill: C.bad, maxW: 548, lh: 17 })
  b.rect(740, 424, 580, 96, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(758, 450, '两条补救路线', { size: 13, weight: 700, fill: C.ink })
  b.wtext(758, 476, '· T-Coffee：先把所有两两比对并入一致性库，再驱动渐进——慢而准。', { size: 11.5, fill: C.sub, maxW: 548, lh: 16 })
  b.wtext(758, 500, '· MUSCLE：迭代细化 + 对数期望分数，用速度换轮次。', { size: 11.5, fill: C.sub, maxW: 548, lh: 16 })

  // ============ 三、迭代法与评价 ============
  b.panel(30, 656, 1340, 304, { title: '三、工具格局、SP 分数与质量评价' })
  b.table(60, 716, 600, {
    headers: ['工具', '核心思想', '定位'],
    colW: [130, 320, 150],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['Clustal W', '引导树 + 渐进比对', '经典基线'],
      ['T-Coffee', '两两比对库一致性驱动', '慢而准'],
      ['MUSCLE', '迭代细化 + 对数期望分数', '快'],
    ],
  })
  b.rect(700, 712, 640, 92, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(720, 740, 'SP 分数的偏倚：冗余不设防', { size: 13, weight: 700, fill: C.ink })
  b.wtext(720, 766, '一列 N 条序列有 N(N−1)/2 个残基对——近缘序列间的对会重复计票同一次演化事件，与「序列加权」要压制的问题互为镜像。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.rect(700, 820, 640, 84, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(720, 848, '质量评价', { size: 13, weight: 700, fill: C.ink })
  b.wtext(720, 874, '依赖 BAliBASE 类基准集与口径声明——「准确率」离开了基准集与统计口径就没有意义。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '多序列比对：渐进法三步、命门与迭代补救',
  subtitle: 'MSA 的列揭示家族保守性、是 profile / HMM / 系统树的共同入口，而最优 MSA 为 NP 完全问题；Clustal W 按「两两距离建引导树 → 加权 → 渐进 profile 比对」三步走，「once a gap, always a gap」不可撤销；T-Coffee 以一致性库、MUSCLE 以迭代细化补救；SP 分数逐对求和、冗余重复计票',
  draw,
})
