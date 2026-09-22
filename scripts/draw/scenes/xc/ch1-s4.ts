// xc ch1-s4 结构基因组学与蛋白质数据库时代（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、PDB 增长曲线 ============
  b.panel(30, 132, 660, 412, { title: '一、PDB：从 13 个条目到二十万' })
  b.axis(70, 460, 560, 250, {
    xlabel: '年份', ylabel: 'PDB 条目数（对数轴）',
    title: '条目数呈长指数增长（1971 年布鲁克海文建库，首批 7 个结构共 13 条）',
    xticks: [[0.018, '1971'], [0.327, '1988'], [0.527, '1999'], [0.8, '2014'], [0.964, '2023']],
    yticks: [[0, '1'], [1 / 6, '10'], [2 / 6, '10^{2}'], [3 / 6, '10^{3}'], [4 / 6, '10^{4}'], [5 / 6, '10^{5}'], [1, '10^{6}']],
  })
  const pts: Array<[number, number]> = [[0.018, 0.186], [0.327, 0.333], [0.527, 0.667], [0.8, 0.833], [0.964, 0.884]]
  b.curve(70, 460, 560, 250, pts, { smooth: true, stroke: C.acc, sw: 3 })
  const labels = ['13', '约 100', '1 万', '10 万', '超 20 万']
  pts.forEach(([fx, fy], i) => {
    b.circle(70 + fx * 560, 460 - fy * 250, 5, { fill: C.acc, stroke: '#ffffff', sw: 1.6 })
    b.ctext(70 + fx * 560, 460 - fy * 250 - 14, labels[i], { size: 11.5, weight: 700, fill: C.accD })
  })
  b.wtext(60, 516, 'X射线晶体学长期贡献约 85% 条目，近年冷冻电镜与计算预测模型份额持续上升。1998 年管理权移交 RCSB；2003 年与欧洲 PDBe、日本 PDBj 组成 wwPDB 联盟（其后 BMRB 加入），统一负责全球结构的注记与存档。', { size: 10.5, fill: C.sub, maxW: 600, lh: 13.5 })

  // ============ 二、结构基因组学流水线 ============
  b.panel(710, 132, 660, 412, { title: '二、结构基因组学：把结晶变成流水线' })
  const steps = ['基因组序列', '克隆表达', '纯化', '结晶筛选', '数据收集', '结构解析']
  steps.forEach((s, i) => {
    const bx = 730 + i * 104
    b.rect(bx, 196, 82, 34, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
    b.ctext(bx + 41, 217, s, { size: 11.5, weight: 700, fill: C.accD })
    if (i < steps.length - 1) b.arrow(bx + 82, 213, bx + 104, 213, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.arrow(815, 230, 815, 286, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  // 96 孔板
  b.rect(740, 290, 150, 92, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  const hitWells = ['2,3', '7,1', '10,5', '4,6', '11,2', '5,0']
  for (let i = 0; i < 12; i++) for (let j = 0; j < 8; j++) {
    const wx = 748 + i * 11.7, wy = 298 + j * 10.4
    const isHit = hitWells.includes(`${i},${j}`)
    b.circle(wx, wy, 3.1, { fill: isHit ? C.enz : '#e2e8f0' })
  }
  b.wtext(740, 398, '96 孔板：一板一条件矩阵；纳升级移液机器人与高通量筛选成为标配。红色为「命中」孔。', { size: 10.5, fill: C.sub, maxW: 170, lh: 14 })
  // 目标到结构漏斗
  const fun = [
    { w: 400, t: '目标基因（成批）', fill: '#f1f5f9', st: C.line },
    { w: 310, t: '可表达', fill: '#e0f2fe', st: C.acc },
    { w: 235, t: '可溶', fill: '#ccfbf1', st: C.dna },
    { w: 165, t: '得到晶体', fill: '#d1fae5', st: C.ok },
    { w: 105, t: '结构', fill: '#fee2e2', st: C.bad },
  ]
  fun.forEach((f, i) => {
    b.rect(1125 - f.w / 2, 285 + i * 30, f.w, 22, { fill: f.fill, stroke: f.st, sw: 1.4, rx: 4 })
    b.ctext(1125, 301 + i * 30, f.t, { size: 11, weight: 700, fill: C.ink })
  })
  b.ctext(1125, 452, '「目标到结构」漏斗：各层产率被统计管理', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(730, 478, '1998–2008 年 NIH 与多国基金会资助 JCSG、NYSGXRC、SGC、RIKEN、SPINE 等中心：数千个新结构把折叠空间的覆盖速度提高数倍，未知折叠比例显著下降；SGC 沉淀数十万种质粒与公开协议，「结构先行、功能后证」的逆向蛋白质学获得第一批可复盘的工程数据。', { size: 10.5, fill: C.mute, maxW: 616, lh: 14 })

  // ============ 三、里程碑结构与药物 ============
  b.panel(30, 558, 660, 412, { title: '三、里程碑结构：药物靶点与分子机器' })
  b.timelineH(70, 636, 580, [
    { at: 0.03, label: '1983', sub: '神经氨酸酶结构', above: true, c: C.acc },
    { at: 0.16, label: '1989', sub: 'HIV 蛋白酶结构', c: C.dna },
    { at: 0.30, label: '1995', sub: '沙奎那韦获批', above: true, c: C.bad },
    { at: 0.43, label: '1998', sub: 'KcsA 钾通道', c: C.dna },
    { at: 0.56, label: '2000', sub: '核糖体亚基', above: true, c: C.acc },
    { at: 0.69, label: '2001', sub: '伊马替尼获批', c: C.enz },
    { at: 0.85, label: '2007', sub: 'β2 受体（GPCR）', above: true, c: C.pro },
  ])
  const chain: Array<[string, string]> = [
    ['靶点结构', '1989 年 HIV 蛋白酶（天冬氨酸蛋白酶同源二聚体）'],
    ['基于结构的抑制剂设计', '坐标公开即可被全球检验与复用'],
    ['沙奎那韦 1995', '首个 HIV 蛋白酶抑制剂'],
    ['联合疗法', '与逆转录酶抑制剂联用改写病程'],
  ]
  chain.forEach(([t, s], i) => {
    const bx = 60 + i * 154
    b.rect(bx, 716, 126, 56, { fill: i === 2 ? C.badL : C.panelB, stroke: i === 2 ? C.bad : C.line, sw: 1.5, rx: 7 })
    b.ctext(bx + 63, 736, t, { size: 11.5, weight: 700, fill: i === 2 ? C.badD : C.ink })
    b.wtext(bx + 9, 750, s, { size: 9.5, fill: C.mute, maxW: 110, lh: 12 })
    if (i < chain.length - 1) b.arrow(bx + 126, 744, bx + 154, 744, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.tag(170, 810, 'KcsA（1998）·2003 诺奖', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD })
  b.tag(360, 810, '核糖体（2000）·2009 诺奖', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD })
  b.tag(548, 810, 'β2 受体（2007）·2012 诺奖', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD })
  b.wtext(60, 852, '「从结构到药物」的链条此后被反复复制：奥司他韦（1999 年获批，基于 1983 年发表的流感病毒神经氨酸酶结构）、伊马替尼（2001 年获批的激酶抑制剂）等相继把晶体结构作为设计出发点；2011–2012 年借助胆固醇与脂立方相条件的 GPCR 结构密集问世（第 3 章）。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14.5 })

  // ============ 四、中国的结构晶体学 ============
  b.panel(710, 558, 660, 412, { title: '四、中国的结构晶体学' })
  b.timelineH(730, 660, 600, [
    { at: 0.06, label: '1965', sub: '结晶牛胰岛素全合成', above: true, c: C.bad },
    { at: 0.28, label: '1971', sub: '猪胰岛素 2.5 Å', c: C.dna },
    { at: 0.60, label: '2015–16', sub: '剪接体（依托冷冻电镜）', above: true, c: C.acc },
    { at: 0.88, label: '2020', sub: '新冠主蛋白酶', c: C.enz },
  ])
  b.wtext(730, 744, '1965 年 9 月钮经义、龚岳亭、邹承鲁等完成结晶牛胰岛素的全合成——世界首次人工全合成具有生物活性的蛋白质结晶，「结晶」二字正是活性与纯度的凭证；1971 年起北京的胰岛素晶体结构组（梁栋材等，与霍奇金实验室保持学术往来）完成猪胰岛素 2.5 Å 及更高分辨率的结构测定与精修，阐明二聚体、六聚体缔合规律。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14.5 })
  b.tag(880, 838, '上海光源（SSRF）同步辐射线站', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD })
  b.tag(1170, 838, '国家蛋白质设施（北京、上海）', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD })
  b.tag(1010, 874, '清华大学、中科院生物物理所、上海科技大学形成集群', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD })
  b.wtext(730, 906, '改革开放后梁栋材主持的研究体系与林政炯等的植物病毒结构工作持续积累人才；2013 年以来冷冻电镜「分辨率革命」与晶体学在中国并行发展；2020 年前后解析的新冠病毒主蛋白酶等结构直接服务于药物筛选——结构生物学作为基础设施学科的公共价值得到当代印证。', { size: 10.5, fill: C.mute, maxW: 616, lh: 14.5 })
}

export default scene({
  title: 'PDB 增长曲线与结构基因组学流水线',
  subtitle: 'PDB 1971 年 13 条；1988 约 100、1999 破万、2014 破十万、2023 超 20 万（晶体学约 85%）；结构基因组学以 96 孔板把结晶流水线化；HIV 蛋白酶催生 1995 年沙奎那韦；KcsA、核糖体、β2 受体对应三届诺奖',
  draw,
})
