// bi ch9-s3 差异表达分析（39-i 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、过度离散 ============
  b.panel(30, 132, 660, 420, { title: '一、过度离散：从泊松到负二项' })
  b.axis(90, 460, 380, 260, {
    xlabel: '平均计数 μ →',
    ylabel: '方差',
    title: '均值–方差关系（示意）',
    xticks: [[0, '0'], [1, '增大 →']],
    yticks: [[0, '0'], [1, '增大 →']],
  })
  b.curve(90, 460, 380, 260, [[0, 0], [1, 0.625]], { stroke: C.faint, sw: 2.4, dash: '7 6' })
  b.curve(90, 460, 380, 260, [
    [0, 0], [0.2, 0.1375], [0.4, 0.3], [0.6, 0.4875], [0.8, 0.7], [1, 0.9375],
  ], { stroke: C.enz, sw: 3.2, smooth: true })
  b.text(250, 396, '泊松：方差 = μ', { size: 11.5, weight: 600, fill: C.mute })
  b.text(255, 224, '负二项：方差 = μ + αμ²', { size: 12.5, weight: 700, fill: C.enzD })
  b.rect(500, 190, 178, 132, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 9, fillOp: 0.5 })
  b.ctext(589, 214, '忽视过度离散', { size: 13, weight: 700, fill: C.bad })
  b.wtext(512, 238, '方差被系统性低估 → p 值虚小 → 假阳性泛滥——RNA-seq 统计的第一课。', { size: 10.5, fill: C.bad, maxW: 154, lh: 15 })
  b.rect(500, 342, 178, 96, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(589, 366, '设计原则', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(512, 388, '无生物学重复的设计，原则上不可检验。', { size: 10.5, fill: C.sub, maxW: 154, lh: 15 })
  b.wtext(60, 524, '负二项分布以方差 μ + αμ² 吸收结构性超额方差——技术重复近似泊松，生物学重复存在过度离散；DESeq2 / edgeR 的输入须为未归一化计数。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、设计矩阵与流程 ============
  b.panel(710, 132, 660, 420, { title: '二、设计矩阵先行：DESeq2 / edgeR 的估计–压缩流程' })
  b.table(740, 190, 600, {
    headers: ['生物学问题', '设计矩阵写法'],
    colW: [280, 320],
    rowH: 36,
    fontSize: 12,
    rows: [
      ['批次 + 条件', '~ batch + condition'],
      ['配对设计（个体）', '~ individual + treatment'],
      ['多水平因子', '似然比检验（LRT）'],
      ['背景依赖效应', '加入交互项检验'],
    ],
  })
  const chain = (x: number, s: string) => {
    b.rect(x, 396, 106, 58, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.6 })
    b.wtext(x + 8, 418, s, { size: 10.5, weight: 600, fill: C.accD, maxW: 92, lh: 13.5 })
  }
  chain(740, '未归一化计数')
  chain(860, '离散度估计·向趋势收缩')
  chain(980, '负二项 GLM 拟合')
  chain(1100, 'Cook 距离＋独立过滤')
  chain(1220, 'BH 校正 → padj')
  for (const x of [848, 968, 1088, 1208]) b.arrow(x, 425, x + 12, 425, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(740, 484, '经验离散度向全基因组趋势收缩——压缩离群、稳定方差；Cook 距离与独立过滤是两道自动保险。通行阈值：padj < 0.05 且 |log₂FC| > 1；显著基因数跨研究不可比。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、火山图 ============
  b.panel(30, 576, 660, 404, { title: '三、火山图：效应与证据的权衡' })
  b.axis(90, 910, 540, 280, {
    xlabel: 'log₂FC（效应）',
    ylabel: '−log₁₀ p',
    title: '差异基因火山图（示意）',
    xticks: [[0, '-4'], [0.25, '-2'], [0.5, '0'], [0.75, '+2'], [1, '+4']],
    yticks: [[0, '0'], [0.5, '4'], [1, '8']],
  })
  b.line(90 + 0.375 * 540, 630, 90 + 0.375 * 540, 910, { stroke: C.mute, sw: 1.4, dash: '6 5' })
  b.line(90 + 0.625 * 540, 630, 90 + 0.625 * 540, 910, { stroke: C.mute, sw: 1.4, dash: '6 5' })
  b.line(90, 910 - 0.1625 * 280, 630, 910 - 0.1625 * 280, { stroke: C.mute, sw: 1.4, dash: '6 5' })
  const ns: Array<[number, number]> = [
    [0.42, 0.06], [0.47, 0.1], [0.52, 0.05], [0.57, 0.09], [0.44, 0.16], [0.5, 0.14], [0.55, 0.18],
    [0.6, 0.12], [0.39, 0.22], [0.63, 0.24], [0.46, 0.26], [0.53, 0.3], [0.58, 0.28], [0.36, 0.1], [0.66, 0.08],
  ]
  const up: Array<[number, number]> = [
    [0.66, 0.34], [0.7, 0.44], [0.74, 0.38], [0.78, 0.52], [0.82, 0.47], [0.76, 0.62], [0.86, 0.58],
    [0.9, 0.66], [0.84, 0.74], [0.93, 0.82], [0.88, 0.9], [0.96, 0.95],
  ]
  up.forEach(([fx, fy]) => b.circle(90 + fx * 540, 910 - fy * 280, 4.5, { fill: C.dna, fillOp: 0.7 }))
  up.forEach(([fx, fy]) => b.circle(90 + (1 - fx) * 540, 910 - fy * 280, 4.5, { fill: C.enz, fillOp: 0.7 }))
  ns.forEach(([fx, fy]) => b.circle(90 + fx * 540, 910 - fy * 280, 4, { fill: C.faint, fillOp: 0.65 }))
  b.ctext(90 + 0.81 * 540, 910 - 0.88 * 280, '上调候选', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(90 + 0.19 * 540, 910 - 0.88 * 280, '下调候选', { size: 13, weight: 700, fill: C.enzD })
  b.ctext(360, 892, '不显著', { size: 12, fill: C.mute })
  b.legend(90, 970, [
    ['上调 log₂FC > 1', C.dna], ['不显著', C.faint], ['下调 log₂FC < −1', C.enz],
  ], { size: 11, gap: 14 })

  // ============ 四、MA 图与热图 ============
  b.panel(710, 576, 660, 404, { title: '四、MA 图与热图：收缩与样本结构' })
  b.axis(760, 880, 280, 230, {
    xlabel: '平均表达 A →',
    ylabel: 'log₂FC（M）',
    title: 'MA 图（示意）',
    xticks: [[0, '低'], [1, '高']],
    yticks: [[0, '-2'], [0.5, '0'], [1, '+2']],
  })
  b.line(760, 880 - 0.5 * 230, 1040, 880 - 0.5 * 230, { stroke: C.faint, sw: 1.4, dash: '5 5' })
  const ma: Array<[number, number]> = [
    [0.05, 0.15], [0.08, 0.85], [0.1, 0.3], [0.12, 0.7], [0.15, 0.1], [0.16, 0.9], [0.18, 0.42],
    [0.2, 0.58], [0.25, 0.28], [0.28, 0.72], [0.3, 0.38], [0.33, 0.62], [0.4, 0.44], [0.45, 0.56],
    [0.55, 0.47], [0.6, 0.53], [0.7, 0.48], [0.8, 0.51], [0.9, 0.5],
  ]
  ma.forEach(([fx, fy]) => b.circle(760 + fx * 280, 880 - fy * 230, 3.6, { fill: C.mute, fillOp: 0.65 }))
  b.arrow(800, 686, 880, 780, { stroke: C.enz, sw: 1.6, marker: 'enz', dash: '4 4' })
  b.text(812, 672, '低表达的极端 FC 被收缩', { size: 10.5, weight: 600, fill: C.enzD })
  b.ctext(1210, 648, '热图（示意）：样本结构 × 共表达', { size: 12, weight: 700, fill: C.ink })
  const heat = ['1110112', '1110112', '1110112', '0111011', '0111011', '0111011']
  heat.forEach((row, r) => {
    row.split('').forEach((ch, c) => {
      const match = ch === '1'
      b.rect(1090 + c * 34, 668 + r * 33, 32, 31, {
        fill: match ? (r + c) % 2 ? '#99f6e4' : '#ccfbf1' : '#eef2f7', stroke: C.line, sw: 0.5,
      })
    })
  })
  b.line(1090 + 3 * 34, 668, 1090 + 3 * 34, 668 + 6 * 33, { stroke: C.sub, sw: 1.4, dash: '5 4' })
  b.line(1090, 668 + 3 * 33, 1090 + 7 * 34, 668 + 3 * 33, { stroke: C.sub, sw: 1.4, dash: '5 4' })
  b.ctext(1209, 894, '样本（两群）', { size: 11, fill: C.mute })
  b.wtext(740, 946, 'MA 图看收缩与均值–方差趋势、热图看样本结构与共表达模块——两者绘制前均须做方差稳定变换（如 vst / rlog）。BH 程序控制错误发现率并输出 padj。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '差异表达分析：负二项模型、设计矩阵与火山图三件套',
  subtitle: '生物学重复存在过度离散，负二项分布以方差 μ + αμ² 吸收超额方差，忽视则 p 值虚小假阳性泛滥；设计矩阵先行（批次+条件、配对写个体+处理、多水平用 LRT）；DESeq2/edgeR 输入未归一化计数，经验离散度向全基因组趋势收缩；BH 控制 FDR，通行阈值 padj < 0.05 且 |log₂FC| > 1；火山图看权衡、MA 图看收缩、热图看结构',
  draw,
})
