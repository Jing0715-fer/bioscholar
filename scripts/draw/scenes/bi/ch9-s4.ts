// bi ch9-s4 功能富集分析（39-i 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、ORA 与超几何检验 ============
  b.panel(30, 132, 660, 420, { title: '一、ORA 与超几何检验：背景集是第一守门规则' })
  b.rect(70, 190, 400, 232, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 14, fillOp: 0.28 })
  b.text(90, 218, '背景集：实际检测到的基因（共 N）', { size: 12.5, weight: 700, fill: C.accD })
  b.ellipse(190, 322, 100, 82, { fill: C.dnaL, stroke: C.dna, sw: 1.8, fillOp: 0.6 })
  b.ctext(158, 316, '目标名单', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(158, 336, '(n 个基因)', { size: 11, fill: C.dnaD })
  b.ellipse(340, 322, 100, 82, { fill: C.rnaL, stroke: C.rna, sw: 1.8, fillOp: 0.6 })
  b.ctext(372, 316, '通路基因集', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(372, 336, '(M 个)', { size: 11, fill: C.rnaD })
  b.ctext(265, 322, '交叠 k', { size: 11.5, weight: 700, fill: C.bad })
  b.rect(500, 190, 170, 196, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(585, 214, '超几何检验', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(512, 238, 'P(X ≥ k) ＝ Σ C(M, i)·C(N−M, n−i) ÷ C(N, n)（i = k…n）', { size: 10.5, fill: C.sub, maxW: 146, lh: 15 })
  b.wtext(512, 302, '问：名单中该类别的占比，是否显著超出背景期望？', { size: 10.5, fill: C.mute, maxW: 146, lh: 15 })
  b.wtext(60, 452, '背景集必须与名单出自同一检测空间——用「实际检测到的基因」而非「全基因组」作背景，是富集的第一守门规则。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 500, '常见输入：一份带阈值的差异基因名单（如 padj < 0.05 且 |log₂FC| > 1）。', { size: 11.5, fill: C.mute, maxW: 600, lh: 16 })

  // ============ 二、GSEA ============
  b.panel(710, 132, 660, 420, { title: '二、GSEA：不设阈值的全基因排序检验' })
  b.ctext(1040, 178, '全基因排序（按与表型的关联程度）', { size: 12, weight: 700, fill: C.ink })
  b.rect(740, 190, 600, 26, { fill: C.bg, stroke: C.line, sw: 1.4 })
  for (let i = 0; i < 3; i++) b.rect(740 + i * 60, 190, 60, 26, { fill: C.bad, fillOp: 0.85 - i * 0.25 })
  for (let i = 0; i < 4; i++) b.rect(920 + i * 55, 190, 55, 26, { fill: C.panelB })
  for (let i = 0; i < 3; i++) b.rect(1140 + i * 60, 190, 60, 26, { fill: C.acc, fillOp: 0.35 + i * 0.25 })
  b.text(740, 246, '上调端', { size: 10.5, weight: 700, fill: C.bad })
  b.etext(1340, 246, '下调端', { size: 10.5, weight: 700, fill: C.acc })
  const hits = [760, 785, 800, 822, 848, 873, 905, 940, 990, 1050, 1120, 1200, 1270, 1310]
  hits.forEach(x => b.line(x, 222, x, 236, { stroke: C.enz, sw: 2 }))
  b.text(740, 288, '基因集成员命中', { size: 10.5, fill: C.sub })
  b.axis(740, 470, 600, 150, {
    ylabel: '运行和 ES',
    title: '富集分曲线（示意）',
    xticks: [[0, '排序前端'], [1, '末端']],
    yticks: [[0, '0'], [1, 'ES']],
  })
  b.curve(740, 470, 600, 150, [
    [0, 0.02], [0.05, 0.1], [0.1, 0.2], [0.14, 0.35], [0.18, 0.55], [0.22, 0.72], [0.28, 0.85],
    [0.35, 0.92], [0.45, 0.88], [0.6, 0.7], [0.75, 0.45], [0.9, 0.2], [1, 0.05],
  ], { stroke: C.enz, sw: 3, smooth: true })
  b.ctext(950, 294, '领先集', { size: 11.5, weight: 700, fill: C.enzD })
  b.line(950, 320, 950, 470, { stroke: C.mute, sw: 1.4, dash: '6 5' })
  b.text(1090, 336, 'ES ＝ 曲线偏离零线的最大值', { size: 10.5, weight: 600, fill: C.enzD })
  b.wtext(740, 500, 'GSEA 不设阈值：对全基因排序检验基因集成员的系统性偏移，以富集分（ES）加标签置换检验打分，领先集揭示核心贡献成员。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、GO 本体 ============
  b.panel(30, 576, 660, 404, { title: '三、GO 本体：三分支与真路径规则' })
  b.tag(150, 636, '分子功能 MF', { fill: C.proL, stroke: C.pro, size: 12, weight: 700, tfill: C.proD, pad: 10 })
  b.tag(360, 636, '生物过程 BP', { fill: C.rnaL, stroke: C.rna, size: 12, weight: 700, tfill: C.rnaD, pad: 10 })
  b.tag(570, 636, '细胞组分 CC', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 10 })
  const lvl = (y: number, s: string) => {
    b.rect(260, y, 200, 36, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 7 })
    b.ctext(360, y + 23, s, { size: 12, weight: 600, fill: C.sub })
  }
  lvl(680, '顶层术语（宽泛）')
  lvl(740, '中层术语（信息量高）')
  lvl(800, '末端术语（特异 · 稀疏）')
  b.arrow(360, 740, 360, 718, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(360, 800, 360, 778, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(360, 650, 360, 680, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.text(470, 700, '← 顶层：必然富集（汇总使然）', { size: 11, fill: C.mute })
  b.text(470, 760, '← 中层：信息量高，富集首选', { size: 11, fill: C.mute })
  b.text(470, 820, '← 末端：特异但覆盖稀疏', { size: 11, fill: C.mute })
  b.wtext(60, 862, 'GO 为有向无环图：真路径规则下，任一节点的注释沿边向上传播到其所有祖先——顶层术语必然富集，信息量在中层；GO slim 是精简版本体，供全景报告。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 918, '示例：注释到「过氧化物酶体」的基因，在其祖先「细胞器」与根术语「细胞组分」处同时可见——这正是真路径规则。', { size: 11.5, fill: C.mute, maxW: 600, lh: 16 })

  // ============ 四、数据库与陷阱 ============
  b.panel(710, 576, 660, 404, { title: '四、通路数据库与解读陷阱' })
  b.table(740, 630, 600, {
    headers: ['维度', 'ORA（超几何）', 'GSEA'],
    colW: [120, 240, 240],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['输入', '阈值基因名单', '全基因排序列表'],
      ['统计核心', '超几何检验', '富集分 ＋ 标签置换'],
      ['方向性', '分上下调检验', '可做带方向的检验'],
    ],
  })
  b.tag(865, 836, 'KEGG 手工通路图', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 600, tfill: C.rnaD, pad: 9 })
  b.tag(1070, 836, 'Reactome 开放友好', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 600, tfill: C.accD, pad: 9 })
  b.tag(1268, 836, 'MSigDB 标准总库', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 600, tfill: C.proD, pad: 9 })
  b.wtext(740, 872, 'KEGG 以手工通路图见长但须核对许可版本；Reactome 反应层级开放友好；MSigDB 是 GSEA 的标准基因集总库——标识符转换丢基因是高频实操事故。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(740, 920, '解读陷阱：背景集不当 · 集合冗余 · 方向失明 · 把富集当因果 · 输入泄漏——分上下调检验或带方向的 GSEA 可治方向失明；富集结果是假设发生器，而非结论本身。', { size: 11.5, fill: C.bad, maxW: 600, lh: 16 })
}

export default scene({
  title: '功能富集分析：超几何检验、GSEA 排序检验与解读陷阱',
  subtitle: 'ORA 以超几何检验问「名单中某功能类别的占比是否显著超出背景期望」，背景集须与名单出自同一检测空间（第一守门规则）；GO 三分支以真路径规则相连，顶层必然富集、信息量在中层；GSEA 不设阈值，对全基因排序以富集分加标签置换检验，领先集揭示核心贡献成员；KEGG、Reactome 与 MSigDB 各有侧重——富集结果是假设发生器而非结论本身',
  draw,
})
