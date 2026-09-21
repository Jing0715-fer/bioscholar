// mb ch10-s4 转录组学与蛋白质组学（39-c 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RNA-seq（左上） ============
  b.panel(30, 132, 700, 380, { title: '一、转录组学：RNA-seq 定量全转录本' })
  const steps: [string, string][] = [
    ['总 RNA 提取', '样品总 RNA'],
    ['富集 / 去除', 'poly(A) 富集或 rRNA 去除'],
    ['片段化 + RT', '片段化 → 反转录 cDNA 文库'],
    ['NGS 测序', '高通量读段产出'],
    ['回贴 / 定量', '读段回贴基因组或转录本 → 定量'],
  ]
  steps.forEach(([t, s], i) => {
    const x = 46 + i * 134
    b.rect(x, 176, 120, 100, { fill: '#ffffff', stroke: C.rna, sw: 1.5, rx: 8 })
    b.ctext(x + 60, 198, t, { size: 12, weight: 700, fill: C.rnaD })
    b.wtext(x + 60, 218, s, { size: 10.5, fill: C.sub, maxW: 104, lh: 15, anchor: 'middle' })
    if (i < 4) b.arrow(x + 122, 226, x + 130, 226, { stroke: C.rna, sw: 2, marker: 'rna' })
  })
  // 定量指标
  b.rect(46, 296, 330, 96, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(60, 318, '定量指标', { size: 13, weight: 700, fill: C.ink })
  b.wtext(60, 342, 'RPKM / FPKM：每百万读段中每 kb 外显子的片段数', { size: 11, fill: C.sub, maxW: 300, lh: 16 })
  b.wtext(60, 362, 'TPM：转模标准化——先按基因长度归一（r/长度），再按总量归一；跨样本比较更适合', { size: 11, fill: C.sub, maxW: 300, lh: 16 })
  // 差异分析
  b.rect(390, 296, 324, 96, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(404, 318, '差异表达分析', { size: 13, weight: 700, fill: C.ink })
  b.wtext(404, 342, 'DESeq2 / edgeR：负二项分布模型', { size: 11, fill: C.sub, maxW: 294, lh: 16 })
  b.wtext(404, 362, '报告 log2FC 与 FDR 校正 P 值', { size: 11, fill: C.sub, maxW: 294, lh: 16 })
  // 拓展发现
  b.rect(46, 404, 668, 88, { fill: C.rnaL, stroke: C.rna, sw: 1.3, rx: 8, fillOp: 0.4 })
  b.text(60, 428, 'RNA-seq 还能发现：', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(60, 452, '新转录本与 lncRNA · 选择性剪接事件（rMATS 等）· 融合基因（肿瘤诊断）· 等位特异性表达 · RNA 编辑位点', { size: 11.5, fill: C.sub, maxW: 636, lh: 18 })

  // ============ 二、蛋白质组学（右上） ============
  b.panel(730, 132, 640, 380, { title: '二、蛋白质组学：翻译后现实' })
  // —— 2D-PAGE ——
  b.text(746, 180, '二维电泳（2D-PAGE）', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(770, 300, 1010, 300, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(770, 300, 770, 194, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const dots: [number, number][] = [
    [790, 280], [810, 265], [830, 275], [850, 250], [870, 260], [890, 240], [910, 255], [930, 230],
    [950, 245], [970, 225], [800, 235], [825, 215], [855, 225], [880, 205], [915, 215], [945, 200],
    [965, 210], [840, 290], [880, 282], [925, 272], [960, 285],
  ]
  dots.forEach(([x, y], i) => b.circle(x, y, i % 3 === 0 ? 4.5 : 3.5, { fill: C.pro, opacity: 0.55 }))
  b.text(746, 194, '第一向：pI ↑', { size: 10.5, fill: C.mute })
  b.ctext(890, 318, '第二向：SDS-PAGE（分子量）→', { size: 10.5, fill: C.mute })
  b.ctext(890, 336, '复杂蛋白混合物铺展为千余点阵', { size: 10.5, fill: C.mute })
  // —— LC-MS/MS ——
  b.text(1030, 180, 'LC-MS/MS 鉴定', { size: 12.5, weight: 700, fill: C.ink })
  const msSteps = ['胰蛋白酶酶解 → 肽段', '一级 MS：测定肽段质量', '二级 MS/MS：CID / HCD 碎裂 → b / y 离子', '数据库检索匹配蛋白']
  msSteps.forEach((s, i) => {
    const y = 192 + i * 28
    b.rect(1030, y, 324, 24, { fill: '#ffffff', stroke: C.pro, sw: 1.3, rx: 6 })
    b.ctext(1192, y + 16, s, { size: 10.5, fill: C.sub })
    if (i < 3) b.arrow(1192, y + 25, 1192, y + 27, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  })
  b.ctext(1192, 316, 'ESI 电喷雾 · MALDI 离子化（2002 诺贝尔化学奖）', { size: 10.5, fill: C.mute })
  // —— 定量与修饰 ——
  b.rect(746, 348, 608, 144, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(760, 370, '定量与修饰蛋白质组', { size: 13, weight: 700, fill: C.ink })
  b.wtext(760, 394, '标记定量：SILAC（代谢掺入重标氨基酸）· iTRAQ / TMT（同重标签报告离子）', { size: 11.5, fill: C.sub, maxW: 578, lh: 17 })
  b.wtext(760, 416, '无标记定量（label-free）：谱计数 / 峰面积', { size: 11.5, fill: C.sub, maxW: 578, lh: 17 })
  b.wtext(760, 438, '修饰组学：TiO₂ / IMAC 富集磷酸肽 → 磷酸化网络；乙酰化 · 泛素化同理', { size: 11.5, fill: C.sub, maxW: 578, lh: 17 })
  b.wtext(760, 460, '互作组：亲和纯化-质谱（AP-MS）绘制蛋白复合物图谱', { size: 11.5, fill: C.sub, maxW: 578, lh: 17 })

  // ============ 三、转录组 vs 蛋白质组（下，全宽） ============
  b.panel(30, 532, 1340, 428, { title: '三、转录组 vs 蛋白质组：相关性有限，必须互补' })
  // —— 散点图 ——
  b.text(56, 574, 'mRNA-蛋白相关性有限', { size: 13.5, weight: 700, fill: C.ink })
  b.arrow(80, 792, 80, 596, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(80, 792, 400, 792, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(56, 592, '蛋白丰度 ↑', { size: 10.5, fill: C.sub })
  b.ctext(240, 814, 'mRNA 丰度 →', { size: 10.5, fill: C.sub })
  const pts: [number, number][] = [
    [110, 750], [140, 720], [160, 740], [180, 690], [200, 710], [220, 660], [240, 690], [260, 640],
    [280, 670], [300, 620], [320, 660], [340, 600], [200, 762], [260, 722], [320, 700], [360, 640],
  ]
  b.line(100, 762, 372, 588, { stroke: C.dna, sw: 2, dash: '7 5' })
  pts.forEach(([x, y]) => b.circle(x, y, 5, { fill: C.acc, opacity: 0.6, stroke: C.accD, sw: 1 }))
  b.text(334, 662, 'r ≈ 0.4–0.6', { size: 13.5, weight: 700, fill: C.dnaD })
  // —— 对照表 ——
  const tCols = [140, 170, 190]
  const tX = 440
  const tRows = [
    ['项目', 'RNA-seq', '蛋白质组'],
    ['测量对象', 'mRNA 丰度', '蛋白丰度 / 修饰 / 互作'],
    ['动态范围', '极宽', '受检测限约束'],
    ['定量模型', '读段计数统计', '峰面积 / 同位素比'],
    ['与表型的距离', '间接（受翻译调控）', '直接'],
  ]
  tRows.forEach((row, r) => {
    const y = 590 + r * 46
    b.rect(tX, y, 500, 42, { fill: r === 0 ? C.panelB : r % 2 ? '#ffffff' : C.panel, stroke: C.line, sw: 1, rx: 5 })
    let cx = tX
    row.forEach((cell, i) => {
      b.ctext(cx + tCols[i] / 2, y + 26, cell, { size: i === 0 ? 12 : 11.5, weight: i === 0 || r === 0 ? 700 : 400, fill: i === 1 ? C.rnaD : i === 2 ? C.proD : C.sub })
      cx += tCols[i]
    })
  })
  // —— 互补结论 ——
  b.rect(970, 570, 380, 232, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 10 })
  b.text(986, 598, '为什么必须互补？', { size: 14, weight: 700, fill: C.ink })
  b.text(986, 624, '翻译效率 · 降解 · 修饰的解释力必须由蛋白质组补齐', { size: 11.5, fill: C.sub })
  b.text(986, 642, '——mRNA 丰度无法替代「翻译后现实」。', { size: 11.5, fill: C.sub })
  // 拼图示意
  b.rect(1000, 690, 150, 70, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(1075, 730, 'RNA-seq', { size: 13, weight: 700, fill: C.rnaD })
  b.circle(1150, 725, 13, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.rect(1162, 690, 150, 70, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1237, 730, '蛋白质组', { size: 13, weight: 700, fill: C.proD })
  b.ctext(1160, 780, '互补拼接 → 逼近「细胞状态」', { size: 11.5, weight: 600, fill: C.sub })
  // —— 底部收束 ——
  b.rect(46, 830, 1292, 104, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 10, fillOp: 0.35 })
  b.wtext(692, 862, 'mRNA 与蛋白相关性通常仅 0.4–0.6——翻译效率、降解与修饰的解释力必须由蛋白质组补齐；', { size: 13, fill: C.accD, maxW: 1200, lh: 22, anchor: 'middle' })
  b.wtext(692, 892, '两套组学互补拼接，才能逼近「细胞状态」的完整描述。', { size: 13, weight: 600, fill: C.accD, maxW: 1200, lh: 22, anchor: 'middle' })
}

export default scene({
  title: '转录组学与蛋白质组学',
  subtitle: 'RNA-seq（TPM 定量 · 负二项差异检验）与 2D 电泳 / LC-MS/MS（b / y 离子 · SILAC / iTRAQ）——相关性 0.4–0.6 的互补拼接',
  draw,
})
