// mb ch10-s3 比较基因组学与功能基因组学（39-c 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、直系 vs 旁系（左上） ============
  b.panel(30, 132, 760, 300, { title: '一、直系同源 vs 旁系同源：功能转移的判断依据' })
  // —— 直系同源树 ——
  b.rect(120, 182, 100, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 5 })
  b.ctext(170, 197, '祖先基因', { size: 11.5, weight: 600, fill: C.dnaD })
  b.line(170, 204, 170, 222, { stroke: C.sub, sw: 1.8 })
  b.circle(170, 228, 7, { fill: C.ink })
  b.line(170, 228, 110, 266, { stroke: C.sub, sw: 1.8 })
  b.line(170, 228, 230, 266, { stroke: C.sub, sw: 1.8 })
  b.text(186, 232, '物种形成', { size: 10.5, fill: C.mute })
  b.rect(60, 268, 104, 24, { fill: '#ffffff', stroke: C.sub, sw: 1.4, rx: 5 })
  b.ctext(112, 284, '人 β-珠蛋白', { size: 11, weight: 600, fill: C.ink })
  b.rect(178, 268, 116, 24, { fill: '#ffffff', stroke: C.sub, sw: 1.4, rx: 5 })
  b.ctext(236, 284, '小鼠 β-珠蛋白', { size: 11, weight: 600, fill: C.ink })
  b.ctext(170, 322, '功能通常保守', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(170, 344, '功能转移的首选依据', { size: 11, fill: C.mute })
  b.tag(170, 166, '直系同源', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 7 })
  // —— 旁系同源树 ——
  b.rect(470, 182, 100, 22, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 5 })
  b.ctext(520, 197, '祖先基因', { size: 11.5, weight: 600, fill: C.enzD })
  b.line(520, 204, 520, 222, { stroke: C.sub, sw: 1.8 })
  b.circle(520, 228, 7, { fill: C.enz })
  b.line(520, 228, 460, 266, { stroke: C.sub, sw: 1.8 })
  b.line(520, 228, 580, 266, { stroke: C.sub, sw: 1.8 })
  b.text(536, 232, '基因复制', { size: 10.5, fill: C.mute })
  b.rect(408, 268, 104, 24, { fill: '#ffffff', stroke: C.sub, sw: 1.4, rx: 5 })
  b.ctext(460, 284, '人 β-珠蛋白', { size: 11, weight: 600, fill: C.ink })
  b.rect(528, 268, 104, 24, { fill: '#ffffff', stroke: C.sub, sw: 1.4, rx: 5 })
  b.ctext(580, 284, '人 δ-珠蛋白', { size: 11, weight: 600, fill: C.ink })
  b.ctext(520, 322, '常发生功能分化', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(520, 344, '亚功能化 / 新功能化', { size: 11, fill: C.mute })
  b.tag(520, 166, '旁系同源', { fill: C.enzL, stroke: C.enz, size: 12, weight: 700, tfill: C.enzD, pad: 7 })
  // —— 底部警示 ——
  b.rect(46, 366, 690, 46, { fill: C.warnL, stroke: '#b45309', sw: 1.3, rx: 9, fillOp: 0.5 })
  b.ctext(391, 394, '判断常靠系统发生树而非单纯相似度——「最相似 ≠ 直系同源」是常见误读', { size: 12.5, weight: 600, fill: C.rnaD })

  // ============ 二、共线性与基因组进化（右上） ============
  b.panel(810, 132, 560, 300, { title: '二、共线性（synteny）与基因组进化' })
  b.text(826, 180, '人 17 号 ↔ 小鼠 11 号：Hox 簇共线', { size: 12.5, weight: 700, fill: C.ink })
  const hoxC = [C.dna, C.rna, C.pro, C.enz, C.acc]
  b.rect(886, 188, 320, 16, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.rect(886, 258, 320, 16, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 5; i++) {
    b.rect(890 + i * 64, 190, 44, 12, { fill: hoxC[i], opacity: 0.8, rx: 3 })
    b.rect(898 + i * 64, 260, 40, 12, { fill: hoxC[i], opacity: 0.8, rx: 3 })
    b.line(912 + i * 64, 204, 918 + i * 64, 256, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  }
  b.etext(878, 200, '人 chr17', { size: 11, weight: 700, fill: C.sub })
  b.etext(878, 270, '小鼠 chr11', { size: 11, weight: 700, fill: C.sub })
  b.wtext(826, 300, '基因顺序保守的 syntenic block：跨物种基因 ID 映射 · 重现祖先染色体结构', { size: 11, fill: C.mute, maxW: 528 })
  b.text(826, 330, '· 基因组以全基因组加倍（鱼类 / 植物常见）· 节段重复 · 染色体重排演化', { size: 11.5, fill: C.sub })
  b.text(826, 354, '· 中性进化：小鼠-人约每 2 个中性位点 1 个固定差异', { size: 11.5, fill: C.sub })
  b.wtext(826, 378, '· 必需基因可由跨物种保守性预测；泛基因组在细菌与植物中重新定义「物种的基因组」', { size: 11.5, fill: C.sub, maxW: 528 })
  b.text(826, 412, 'Ka/Ks 比值：', { size: 12, weight: 700, fill: C.ink })
  b.tag(980, 408, '≪ 1 纯化选择', { fill: C.okL, stroke: C.ok, size: 11.5, tfill: C.ok, pad: 8 })
  b.tag(1130, 408, '≈ 1 中性', { fill: C.panelB, stroke: C.mute, size: 11.5, tfill: C.sub, pad: 8 })
  b.tag(1268, 408, '> 1 正选择', { fill: C.badL, stroke: C.bad, size: 11.5, tfill: C.bad, pad: 8 })

  // ============ 三、功能基因组学手段（下，全宽） ============
  b.panel(30, 452, 1340, 508, { title: '三、功能基因组学：逐基因扰动 + 单细胞与原位解析' })
  const cards: [string, string, string][] = [
    ['基因敲除 / 敲低', 'CRISPR-Cas9 突变文库 → 全基因组筛选（正筛 / 负筛）', C.enz],
    ['RNAi 文库筛选', '以 dsRNA / shRNA 文库系统性敲低', C.rna],
    ['单细胞 RNA-seq', '10x 微流控分选单细胞建库；t-SNE / UMAP 聚类识别细胞类型与发育轨迹', C.acc],
    ['空间转录组', '保留组织学位置的表达谱——连接形态与分子', C.pro],
    ['Perturb-seq', 'CRISPR 扰动 × 单细胞转录读出偶联', C.dna],
  ]
  cards.forEach(([t, s, c], i) => {
    const x = 56 + i * 270
    b.rect(x, 496, 250, 122, { fill: '#ffffff', stroke: c, sw: 1.6, rx: 10 })
    b.ctext(x + 125, 522, t, { size: 14, weight: 700, fill: c })
    b.wtext(x + 125, 548, s, { size: 11.5, fill: C.sub, maxW: 222, lh: 17, anchor: 'middle' })
    if (i < 4) b.arrow(x + 252, 556, x + 266, 556, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  // —— 网络示意（左下） ——
  b.text(56, 660, '网络拓扑与动态：表型的「第二套遗传学」', { size: 14.5, weight: 700, fill: C.ink })
  const nodes: [number, number, string][] = [
    [120, 700, C.pro], [220, 672, C.acc], [320, 690, C.dna], [420, 668, C.pro], [520, 696, C.acc],
    [160, 780, C.dna], [260, 760, C.pro], [360, 788, C.acc], [470, 770, C.dna],
    [200, 860, C.acc], [310, 840, C.pro], [430, 856, C.pro],
  ]
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [2, 7], [3, 8], [4, 8],
    [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 10], [8, 11], [10, 11], [9, 10],
  ]
  for (const [i, j] of edges) b.line(nodes[i][0], nodes[i][1], nodes[j][0], nodes[j][1], { stroke: C.line, sw: 1.6 })
  nodes.forEach(([x, y, c]) => b.circle(x, y, 12, { fill: c, opacity: 0.75, stroke: C.sub, sw: 1.4 }))
  b.legend(80, 916, [['基因调控网络', C.pro], ['代谢网络', C.acc], ['蛋白互作组', C.dna]], { size: 12 })
  // —— 系统生物学叙述（右下） ——
  b.rect(630, 656, 726, 292, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 10 })
  b.text(646, 684, '系统生物学：从零件清单到「整机电路图」', { size: 15, weight: 700, fill: C.ink })
  b.text(646, 716, '· 生命的信息不仅存于零件清单（基因目录），更存于网络拓扑与动态', { size: 12, fill: C.sub })
  b.text(646, 748, '· 蛋白互作组：酵母双杂交 / 亲和纯化-质谱（AP-MS）绘制复合物图谱', { size: 12, fill: C.sub })
  b.text(646, 780, '· 比较基因组学提供零件的同源关系；功能基因组学提供删除表型', { size: 12, fill: C.sub })
  b.wtext(646, 814, '· 系统生物学整合二者去读「整机电路图」——基因调控网络 · 代谢网络 · 蛋白互作组共同构成表型的「第二套遗传学」', { size: 12, fill: C.sub, maxW: 690, lh: 20 })
  b.rect(646, 886, 694, 44, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 8, fillOp: 0.4 })
  b.ctext(993, 913, '比较基因组学＝同源关系 ｜ 功能基因组学＝删除表型 ｜ 系统生物学＝整机电路图', { size: 12.5, weight: 600, fill: C.accD })
}

export default scene({
  title: '比较基因组学与功能基因组学',
  subtitle: '直系 / 旁系同源与共线性（synteny）——CRISPR 文库 · scRNA-seq · 空间转录组 · Perturb-seq 与网络时代的系统生物学',
  draw,
})
