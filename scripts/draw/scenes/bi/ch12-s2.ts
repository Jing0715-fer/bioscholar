// bi ch12-s2 深度学习与序列、结构与图像（39-i 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、表示先行：序列如何变成张量 ============
  b.panel(30, 132, 660, 420, { title: '一、表示先行：序列如何变成张量' })
  const seq1 = ['A', 'C', 'G', 'T', 'A', 'T']
  seq1.forEach((ch, c) => b.ctext(82 + c * 26, 208, ch, { size: 12, weight: 700, fill: C.dnaD }))
  const rows1 = ['A', 'C', 'G', 'T']
  rows1.forEach((r, ri) => b.etext(64, 234 + ri * 20, r, { size: 10.5, fill: C.mute }))
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 4; r++) {
      const hit = rows1[r] === seq1[c]
      b.rect(70 + c * 26, 220 + r * 20, 24, 18, {
        fill: hit ? C.dnaL : C.bg, stroke: hit ? C.dna : C.line, sw: hit ? 1.5 : 1,
      })
    }
  }
  b.text(70, 326, 'one-hot：无损、无假设，但稀疏、无先验', { size: 11, fill: C.sub })
  b.text(300, 196, '预训练嵌入（上下文向量）', { size: 12.5, weight: 700, fill: C.ink })
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 8; r++) {
      b.rect(300 + c * 18, 214 + r * 13, 16, 12, { fill: C.acc, fillOp: 0.18 + (((c * 7 + r * 3) % 8) / 12) })
    }
  }
  b.text(300, 344, '化学相似性被学进向量空间', { size: 11, fill: C.sub })
  b.text(470, 196, '多通道表示', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(470, 220, 175, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(557, 237, '序列 one-hot 通道', { size: 10.5, fill: C.dnaD })
  b.rect(470, 252, 175, 26, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.ctext(557, 269, '保守性轨道', { size: 10.5, fill: '#065f46' })
  b.rect(470, 284, 175, 26, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(557, 301, '嵌入通道', { size: 10.5, fill: C.accD })
  b.ctext(557, 338, '叠加 → 卷积输入', { size: 11, fill: C.sub })
  b.wtext(60, 396, 'one-hot 无损无假设但稀疏无先验；预训练嵌入把化学相似性学进向量空间；多通道可叠加保守性等语境轨道。', { size: 11, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 二、卷积网络：滑动的基序探测器 ============
  b.panel(710, 132, 660, 420, { title: '二、卷积核 = 滑动的位置权重矩阵（PWM）' })
  const seq2 = ['A', 'C', 'C', 'G', 'G', 'T', 'A', 'A', 'T', 'G', 'C', 'T']
  seq2.forEach((ch, c) => {
    b.rect(740 + c * 36, 230, 34, 34, { fill: C.panelB, stroke: C.line, sw: 1.2 })
    b.ctext(757 + c * 36, 253, ch, { size: 13, weight: 700, fill: C.sub })
  })
  b.rect(848, 224, 178, 46, { fill: 'none', stroke: C.enz, sw: 2.5 })
  b.text(740, 182, '卷积核学到的 PWM（示意）', { size: 11, fill: C.mute })
  const motifH = [[5, 5, 28, 5], [5, 5, 28, 5], [5, 5, 5, 24], [26, 5, 5, 5], [26, 5, 5, 5]]
  const baseCols = [C.acc, C.dna, C.pro, C.rna]
  motifH.forEach((hs, c) => hs.forEach((h, k) => {
    if (h > 6) b.rect(851 + c * 36 + k * 6.5, 218 - h, 5.5, h, { fill: baseCols[k], stroke: baseCols[k], sw: 0.8 })
  }))
  b.arrow(937, 274, 937, 326, { stroke: C.enz, sw: 1.6, marker: 'enz', dash: '4 3' })
  b.axis(740, 440, 430, 110, { xlabel: '窗口位置 →' })
  b.curve(740, 440, 430, 110, [[0, 0.06], [0.14, 0.1], [0.28, 0.14], [0.43, 0.95], [0.57, 0.15], [0.71, 0.08], [0.85, 0.1], [1, 0.06]], {
    stroke: C.enz, sw: 2.4, label: '命中基序 → 高激活', labelAt: [0.6, 0.8],
  })
  b.wtext(1200, 210, '卷积核与 PWM 同构：滑动窗口 × 权重矩阵，命中处高激活；深层组合捕捉远程语法（增强子）。', { size: 11, fill: C.sub, maxW: 150, lh: 15 })
  b.wtext(1200, 300, '表格数据上，梯度提升树常胜深度网络。', { size: 11, fill: C.sub, maxW: 150, lh: 15 })
  b.wtext(740, 508, '同一卷积核沿全序列滑动、参数共享：基序出现在何处都能检出（平移不变）。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 三、RNN 与自注意力 ============
  b.panel(30, 576, 660, 404, { title: '三、RNN 与自注意力：上下文的两种解法' })
  b.text(60, 616, 'RNN（循环网络）', { size: 12.5, weight: 700, fill: C.accD })
  const rnnX = [110, 190, 270, 350]
  rnnX.forEach((x, i) => {
    b.circle(x, 700, 17, { fill: C.accL, stroke: C.acc, sw: 1.8 })
    b.ctext(x, 704, `h${i + 1}`, { size: 11, weight: 700, fill: C.accD })
    if (i < 3) b.arrow(x + 20, 700, x + 60, 700, { stroke: C.acc, sw: 1.8, marker: 'acc' })
    b.rect(x - 22, 740, 44, 26, { fill: C.panelB, stroke: C.line, sw: 1.4 })
    b.ctext(x, 757, ['A', 'C', 'G', 'T'][i], { size: 11.5, fill: C.sub })
    b.arrow(x, 738, x, 721, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  })
  b.path('M 350,678 C 320,636 140,636 110,678', { fill: 'none', stroke: C.bad, sw: 1.5, dash: '5 4', marker: 'bad' })
  b.ctext(230, 668, '梯度衰减 · 串行', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(60, 800, '隐藏状态逐步携带上下文：串行计算、梯度随步数衰减。', { size: 11, fill: C.sub, maxW: 350, lh: 15 })
  b.text(420, 616, '自注意力（Transformer）', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(540, 640, '全位置两两加权', { size: 11, weight: 700, fill: C.ink })
  const att: Array<[number, number]> = [[470, 680], [610, 680], [470, 780], [610, 780]]
  const attE: Array<[number, number, number]> = [[0, 1, 2.2], [0, 2, 1.2], [1, 3, 1.2], [2, 3, 2.2], [0, 3, 1.2], [1, 2, 1.2]]
  attE.forEach(([i, j, sw]) => b.line(att[i][0], att[i][1], att[j][0], att[j][1], { stroke: sw > 1.5 ? C.enz : C.faint, sw, opacity: sw > 1.5 ? 0.9 : 0.8 }))
  att.forEach(([x, y], i) => {
    b.circle(x, y, 17, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
    b.ctext(x, y + 4, `x${i + 1}`, { size: 11, weight: 700, fill: C.enzD })
  })
  b.wtext(420, 830, '每个位置直接「看到」所有位置：可并行、梯度直达；代价是显存随长度平方增长。', { size: 11, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(60, 890, '取舍：注意力全位置两两加权，显存与计算随长度平方增长；RNN 线性于长度，但串行且梯度衰减。', { size: 11, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 四、蛋白质预测史 ============
  b.panel(710, 576, 660, 404, { title: '四、蛋白质预测史：CASP13 到 CASP14 与三启示' })
  b.text(740, 640, 'CASP 得分（中位数）', { size: 12.5, weight: 700, fill: C.ink })
  b.bars(760, 810, 240, 130, [0.58, 0.924], {
    labels: ['CASP13', 'CASP14'], vlabels: ['中位约 58', '约 92.4'],
    max: 1.05, fill: C.accL, stroke: C.acc,
  })
  b.wtext(740, 866, 'CASP13（2018）深度距离分布，中位约 58 分；CASP14（2020）注意力＋结构模块，达约 92.4 分。', { size: 11, fill: C.sub, maxW: 270, lh: 15 })
  b.text(1050, 636, '方法论三启示', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(1050, 660, '① 领域知识配通用架构；② 双盲基准驱动研发；③ 方法有半衰期，而表示–评价–验证三把抓手不变。', { size: 11, fill: C.sub, maxW: 300, lh: 15 })
  b.timelineH(1050, 800, 280, [
    { at: 0.1, label: '2018', sub: '距离分布', above: true, c: C.sub },
    { at: 0.5, label: '2020', sub: '注意力＋结构', above: false, c: C.acc },
    { at: 0.9, label: '同届', sub: 'RoseTTAFold', above: true, c: C.pro },
  ], { title: '蛋白预测主线' })
}

export default scene({
  title: '深度学习与序列、结构与图像：表示、卷积、注意力与 AlphaFold 谱系',
  subtitle: '卷积核与 PWM 同构；RNN 串行梯度衰减 vs 自注意力并行但显存∝长度²；CASP13 中位约 58 分 → CASP14 约 92.4 分',
  draw,
})
