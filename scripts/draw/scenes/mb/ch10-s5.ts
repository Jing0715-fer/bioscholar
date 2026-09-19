// mb ch10-s5 表观基因组学、ENCODE 与生物信息学（39-c 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、表观基因组学四大技术（上，全宽四联卡） ============
  b.panel(30, 132, 1340, 430, { title: '一、表观基因组学：在全基因组尺度绘制「非序列调控状态」' })
  // —— 卡 1：ChIP-seq ——
  b.rect(46, 178, 312, 368, { fill: '#ffffff', stroke: C.pro, sw: 1.5, rx: 10 })
  b.ctext(202, 204, 'ChIP-seq', { size: 16, weight: 700, fill: C.proD })
  b.wtext(62, 226, '转录因子结合位点与组蛋白修饰图谱（详见第 9 章）', { size: 11.5, fill: C.sub, maxW: 284, lh: 17 })
  // 核小体行：两个活跃 + 一个抑制
  for (const [nx, mark, col, colL] of [[112, 'H3K4me3', C.ok, C.okL], [202, 'H3K27ac', C.ok, C.okL], [292, 'H3K27me3', C.bad, C.badL]] as [number, string, string, string][]) {
    b.circle(nx, 316, 26, { fill: C.panelB, stroke: C.dna, sw: 2 })
    b.line(nx - 26, 316, nx + 26, 316, { stroke: C.dna, sw: 1.4 })
    b.line(nx, 290, nx, 272, { stroke: C.sub, sw: 1.8 })
    b.tag(nx, 264, mark, { fill: colL, stroke: col, size: 10, weight: 700, tfill: col, pad: 6 })
  }
  b.ctext(202, 364, '组蛋白八聚体 + 尾部修饰', { size: 10.5, fill: C.mute })
  b.wtext(62, 396, 'H3K4me3 / H3K27ac 标活跃启动子 / 增强子；H3K27me3 标被抑制区——组合标记定义染色质状态（chromatin states）', { size: 11.5, fill: C.sub, maxW: 284, lh: 18 })
  b.ctext(202, 514, '一份参考基因组 · 多份表观参考', { size: 11.5, weight: 600, fill: C.proD })

  // —— 卡 2：重亚硫酸盐测序 ——
  b.rect(374, 178, 312, 368, { fill: '#ffffff', stroke: C.dna, sw: 1.5, rx: 10 })
  b.ctext(530, 204, '重亚硫酸盐测序 BS-seq', { size: 16, weight: 700, fill: C.dnaD })
  b.text(390, 228, '甲基化链：', { size: 11.5, weight: 600, fill: C.sub })
  const mrow = ['C', '5mC', 'G', 'C', '5mC']
  mrow.forEach((c, i) => b.ctext(452 + i * 40, 228, c, { size: 12, weight: 700, fill: /5mC/.test(c) ? C.ok : C.dnaD }))
  b.ctext(640, 252, '→ 读作 C（保持）', { size: 10.5, fill: C.ok })
  b.text(390, 284, '未甲基化链：', { size: 11.5, weight: 600, fill: C.sub })
  const urow = ['C', 'C', 'G', 'C', 'C']
  urow.forEach((c, i) => b.ctext(452 + i * 40, 284, c, { size: 12, weight: 700, fill: C.dnaD }))
  b.ctext(640, 308, '→ U → 读作 T', { size: 10.5, fill: C.bad })
  b.tag(530, 336, 'NaHSO₃ 处理', { fill: C.warnL, stroke: '#b45309', size: 11.5, weight: 700, tfill: C.rnaD, pad: 8 })
  b.arrow(530, 350, 530, 366, { stroke: '#b45309', sw: 1.8, marker: 'rna' })
  b.wtext(390, 388, '未甲基化 C → U（扩增后读作 T）而 5mC 保持 C——测序比对即得单碱基分辨率甲基化图谱', { size: 11.5, fill: C.sub, maxW: 284, lh: 18 })
  b.text(390, 452, 'WGBS 全基因组 · RRBS 酶切富集降成本', { size: 11, fill: C.mute })
  b.wtext(390, 476, '环境（饮食 · 压力 · 毒素）经表观基因组刻画细胞记忆', { size: 11, fill: C.mute, maxW: 284 })

  // —— 卡 3：ATAC-seq ——
  b.rect(702, 178, 312, 368, { fill: '#ffffff', stroke: C.enz, sw: 1.5, rx: 10 })
  b.ctext(858, 204, 'ATAC-seq', { size: 16, weight: 700, fill: C.enzD })
  b.wtext(718, 226, 'Tn5 转座酶插入开放染色质——快速绘制可及性图谱', { size: 11.5, fill: C.sub, maxW: 284, lh: 17 })
  // 染色质条：致密-开放-致密
  b.rect(718, 296, 84, 26, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 4 })
  for (let i = 0; i < 4; i++) b.circle(730 + i * 20, 309, 9, { fill: C.dnaL, stroke: C.dna, sw: 1.2 })
  b.rect(810, 296, 96, 26, { fill: '#ffffff', stroke: C.enz, sw: 1.8, rx: 4, dash: '5 4' })
  b.ctext(858, 313, '开放', { size: 11, weight: 700, fill: C.enzD })
  b.rect(914, 296, 84, 26, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 4 })
  for (let i = 0; i < 4; i++) b.circle(926 + i * 20, 309, 9, { fill: C.dnaL, stroke: C.dna, sw: 1.2 })
  // Tn5 插入
  b.polygon([[836, 352], [856, 344], [876, 352], [876, 372], [856, 380], [836, 372]], { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(856, 369, 'Tn5', { size: 11, weight: 700, fill: C.enzD })
  b.arrow(844, 346, 834, 326, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(868, 346, 878, 326, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(858, 408, '插入位点 = 可及性读出', { size: 11, fill: C.mute })
  b.wtext(718, 442, '已成为替代 DNase-seq 的标准：微量细胞即可获得开放染色质全景', { size: 11.5, fill: C.sub, maxW: 284, lh: 18 })

  // —— 卡 4：Hi-C 与 TAD ——
  b.rect(1030, 178, 312, 368, { fill: '#ffffff', stroke: C.acc, sw: 1.5, rx: 10 })
  b.ctext(1186, 204, 'Hi-C 与 TAD', { size: 16, weight: 700, fill: C.accD })
  b.wtext(1046, 226, '近端连接捕获全基因组三维接触', { size: 11.5, fill: C.sub, maxW: 284 })
  // 两个 TAD 框
  b.rect(1046, 268, 128, 96, { fill: C.accL, stroke: C.acc, sw: 2, rx: 8, fillOp: 0.4 })
  b.ctext(1110, 288, 'TAD A', { size: 12, weight: 700, fill: C.accD })
  b.rect(1196, 268, 128, 96, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8, fillOp: 0.4 })
  b.ctext(1260, 288, 'TAD B', { size: 12, weight: 700, fill: C.proD })
  // 增强子-启动子（同 TAD 内连接）
  b.circle(1078, 340, 8, { fill: C.enz })
  b.circle(1150, 340, 8, { fill: C.ok })
  b.path('M1078,332 C1090,300 1140,300 1150,332', { stroke: C.ok, sw: 2.2, dash: '5 4', fill: 'none' })
  b.text(1062, 368, '增强子', { size: 10, fill: C.enzD })
  b.text(1136, 368, '启动子', { size: 10, fill: C.ok })
  // 跨 TAD 被阻断
  b.circle(1232, 340, 8, { fill: C.pro, opacity: 0.5 })
  b.line(1188, 328, 1216, 352, { stroke: C.bad, sw: 2.4 })
  b.line(1216, 328, 1188, 352, { stroke: C.bad, sw: 2.4 })
  b.wtext(1046, 404, '发现拓扑关联结构域（TAD）与区室（compartment）——增强子-启动子互作被约束于同一 TAD 内', { size: 11.5, fill: C.sub, maxW: 284, lh: 18 })

  // ============ 二、ENCODE 计划（左下） ============
  b.panel(30, 578, 700, 382, { title: '二、ENCODE：DNA 元件百科全书（2003–2007 试点 → 2007–2012 生产 → 三期）' })
  // 时间轴
  b.arrow(70, 646, 690, 646, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  const encMiles: [number, string, string][] = [
    [130, '2003–2007', '试点阶段'],
    [340, '2007–2012', '生产阶段'],
    [560, '三期', '约 150 种细胞 / 组织类型'],
  ]
  encMiles.forEach(([x, yr, d]) => {
    b.circle(x, 646, 6, { fill: C.ink })
    b.ctext(x, 628, yr, { size: 13.5, weight: 700, fill: C.ink })
    b.ctext(x, 672, d, { size: 11, fill: C.mute })
  })
  // 技术矩阵
  b.tag(380, 712, '动用 8+ 技术：RNA-seq · ChIP-seq · DNase · BS-seq · Hi-C 等', { fill: C.accL, stroke: C.acc, size: 11.5, tfill: C.accD, pad: 8 })
  // 80% 结论
  b.rect(56, 742, 648, 100, { fill: C.warnL, stroke: '#b45309', sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(72, 768, '2012 年主论文：约 80% 的基因组具生化活性', { size: 14, weight: 700, fill: C.rnaD })
  b.wtext(72, 792, '「活性 ≠ 功能」引发争论，但其数据资产（开放下载 · 统一 pipeline）重塑了调控生物学研究范式', { size: 11.5, fill: C.sub, maxW: 616, lh: 18 })
  b.text(72, 824, '从「垃圾 DNA」到「调控暗物质」——ENCODE 完成了概念转变', { size: 12, weight: 600, fill: C.rnaD })
  // GWAS
  b.rect(56, 856, 648, 86, { fill: C.dnaL, stroke: C.dna, sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(72, 882, '结合 GWAS：约 90% 以上疾病相关 SNP 位于非编码区', { size: 13.5, weight: 700, fill: C.dnaD })
  b.wtext(72, 908, 'ENCODE 图谱正是解读这些非编码变异的关键——先测绘全景、再精查节点', { size: 11.5, fill: C.sub, maxW: 616 })

  // ============ 三、生物信息学基础（右下） ============
  b.panel(740, 578, 630, 382, { title: '三、生物信息学基础：数据库 · BLAST · 流程化' })
  // INSDC 三库
  b.text(756, 626, '国际核酸数据库联盟（INSDC）——每日交换数据：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(756, 640, 180, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(846, 658, 'GenBank', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(846, 676, 'NCBI', { size: 10.5, fill: C.mute })
  b.rect(966, 640, 180, 44, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1056, 658, 'EMBL-EBI', { size: 13, weight: 700, fill: C.accD })
  b.ctext(1056, 676, '欧洲', { size: 10.5, fill: C.mute })
  b.rect(1176, 640, 172, 44, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8 })
  b.ctext(1262, 658, 'DDBJ', { size: 13, weight: 700, fill: C.rnaD })
  b.ctext(1262, 676, '日本', { size: 10.5, fill: C.mute })
  b.arrow(940, 654, 962, 654, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(962, 672, 940, 672, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1150, 654, 1172, 654, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1172, 672, 1150, 672, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(756, 704, 'UniProt（蛋白）· PDB（结构）各司其职', { size: 11.5, fill: C.mute })
  // BLAST
  b.text(756, 738, 'BLAST：局部比对搜索（seed-延伸）', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(756, 752, 592, 16, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(900, 752, 120, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(960, 764, 'seed 命中', { size: 10, weight: 700, fill: C.enzD })
  b.arrow(960, 778, 860, 778, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(960, 778, 1060, 778, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(960, 796, '查询序列切段命中 → 向两侧延伸并评分', { size: 10.5, fill: C.mute })
  b.wtext(756, 822, '报告比对得分 · 一致性 · 覆盖度与 E 值（随机命中的期望次数）；BLASTn（核酸）· BLASTp（蛋白）· BLASTx（翻译比对）', { size: 11.5, fill: C.sub, maxW: 592, lh: 18 })
  // 建树与流程化
  b.wtext(756, 872, '多序列比对（Clustal / MUSCLE）→ 距离法 / 最大似然法建树；Galaxy · Snakemake / Nextflow · 容器化环境与 notebook 使「湿-干实验」接口标准化', { size: 11.5, fill: C.sub, maxW: 592, lh: 18 })
  b.rect(756, 912, 592, 34, { fill: C.accL, stroke: C.acc, sw: 1.2, rx: 8, fillOp: 0.4 })
  b.ctext(1052, 934, '知识生产：「假设驱动」单轨 → 「假设 + 数据」双轨', { size: 12, weight: 600, fill: C.accD })
}

export default scene({
  title: '表观基因组学、ENCODE 与生物信息学',
  subtitle: 'ChIP-seq · BS-seq · ATAC-seq · Hi-C 绘制调控状态——ENCODE 的 80% 活性结论与数据库 / BLAST 干实验底座',
  draw,
})
