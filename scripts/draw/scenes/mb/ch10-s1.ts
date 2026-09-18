// mb ch10-s1 人类基因组计划（39-c 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、时间轴（上，全宽） ============
  b.panel(30, 132, 1340, 240, { title: '一、HGP 时间轴：1990 启动 → 2003 完成图 → 2022 T2T' })
  b.tag(300, 172, '六国公共联盟（美 · 英 · 日 · 法 · 德 · 中）', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 600, tfill: C.dnaD, pad: 9 })
  b.tag(930, 172, 'ELSI：预算 3%–5% 专设伦理 · 法律与社会影响研究', { fill: C.rnaL, stroke: C.rna, size: 12.5, weight: 600, tfill: C.rnaD, pad: 9 })
  b.ctext(700, 208, '目标：测定人类基因组全部 30 亿碱基对 · 定位全部基因 · 同步完成大肠杆菌 / 酵母 / 线虫 / 果蝇 / 小鼠等模式生物基因组', { size: 12.5, fill: C.sub })
  // 时间轴
  b.arrow(70, 268, 1330, 268, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  const miles: [number, string, string][] = [
    [160, '1990', 'HGP 启动'],
    [380, '1998', 'Venter 的 Celera 以全基因组鸟枪法加入竞争，完成时间表提前'],
    [600, '2000.6', '两大阵营共同宣布完成工作框架图'],
    [830, '2001.2', 'Nature 与 Science 分别发表（历时约 11 年 · 耗资约 27 亿美元）'],
    [1050, '2003.4', '完成图：常染色质区覆盖 >99% · 准确率 99.99%'],
    [1250, '2022', 'T2T 联盟：真正「端粒到端粒」的完整序列'],
  ]
  miles.forEach(([x, yr, desc]) => {
    b.circle(x, 268, 6, { fill: C.ink })
    b.ctext(x, 250, yr, { size: 15, weight: 700, fill: C.ink })
    b.wtext(x, 288, desc, { size: 11, fill: C.sub, maxW: 196, lh: 16, anchor: 'middle' })
  })

  // ============ 二、两种测序战略（左中） ============
  b.panel(30, 386, 700, 290, { title: '二、两种测序战略：由图到序 vs 直接打碎' })
  b.tag(220, 428, '公共联盟 · 分级战略（BAC-by-BAC）', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 9 })
  const s1 = ['遗传图', '物理图（STS 标锚定 BAC 重叠群）', '逐克隆鸟枪测序', '逐级装配']
  s1.forEach((s, i) => {
    const x = 56 + i * 164
    b.rect(x, 442, 152, 64, { fill: '#ffffff', stroke: C.dna, sw: 1.5, rx: 8 })
    b.wtext(x + 76, 466, s, { size: 11.5, fill: C.sub, maxW: 138, lh: 16, anchor: 'middle' })
    if (i < 3) b.arrow(x + 154, 474, x + 162, 474, { stroke: C.dna, sw: 2, marker: 'dna' })
  })
  b.text(56, 526, '优：顺序可靠 · 重复区段定位准确　｜　难：周期长 · 组织庞大', { size: 11.5, fill: C.mute })
  b.tag(200, 560, 'Celera · 全基因组鸟枪法（WGS）', { fill: C.enzL, stroke: C.enz, size: 13, weight: 700, tfill: C.enzD, pad: 9 })
  const s2 = ['全基因组随机 2–10 kb 文库', '高冗余测序', '计算机装配']
  s2.forEach((s, i) => {
    const x = 56 + i * 190
    b.rect(x, 574, 152, 64, { fill: '#ffffff', stroke: C.enz, sw: 1.5, rx: 8 })
    b.wtext(x + 76, 598, s, { size: 11.5, fill: C.sub, maxW: 138, lh: 16, anchor: 'middle' })
    if (i < 2) b.arrow(x + 154, 606, x + 186, 606, { stroke: C.enz, sw: 2, marker: 'enz' })
  })
  b.text(56, 658, '优：快捷 · 成本低 · 不需前期图谱　｜　难：重复序列致错拼 · 缺口多', { size: 11.5, fill: C.mute })

  // ============ 三、核心发现（右中） ============
  b.panel(740, 386, 630, 290, { title: '三、核心发现：3.1 Gb 基因组的「意外」' })
  // 饼图
  b.path('M860,510 L860,444 A66,66 0 0 1 866.1,444.3 Z', { fill: C.enz })
  b.path('M860,510 L866.1,444.3 A66,66 0 1 1 833.9,570.6 Z', { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.path('M860,510 L833.9,570.6 A66,66 0 0 1 860,444 Z', { fill: C.panelB, stroke: C.line, sw: 1.5 })
  b.ctext(860, 506, '3.1 Gb', { size: 15, weight: 700, fill: C.ink })
  b.ctext(860, 528, '人类基因组', { size: 11, fill: C.mute })
  b.arrow(866, 442, 900, 425, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.text(906, 421, '编码序列 ~1.5%', { size: 11.5, weight: 700, fill: C.enzD })
  b.legend(786, 608, [['编码序列 ~1.5%', C.enz], ['重复序列 >50%', C.dna], ['其他非编码', C.panelB]], { size: 11.5 })
  // 事实清单
  const facts = [
    ['· 蛋白编码基因约 2 万个——远低于预期的 5–10 万', C.ink],
    ['　与葡萄等植物相当甚至更少', C.mute],
    ['· 编码序列仅约 1.5%，一半以上为重复序列', C.ink],
    ['· 基因分布极不均匀：chr19 密集，chr13 / 18 稀疏', C.ink],
    ['· 任意两人 DNA 差异约 0.1%（约 300 万位点）', C.ink],
  ]
  facts.forEach(([s, col], i) => b.text(966, 480 + i * 28, s, { size: 11.5, fill: col }))

  // ============ 四、延伸与遗产（下，全宽） ============
  b.panel(30, 690, 1340, 270, { title: '四、HGP 的延伸与遗产：从 HapMap 到 T2T' })
  const plans: [string, string, string][] = [
    ['HapMap · 1000 Genomes', '人类遗传变异图谱', C.dna, C.dnaL],
    ['ENCODE', '功能元件百科全书', C.acc, C.accL],
    ['TCGA', '肿瘤基因组图谱', C.bad, C.badL],
    ['T2T 联盟（2022）', '端粒到端粒完整序列——补上高度重复的着丝粒与卫星区', C.pro, C.proL],
  ]
  plans.forEach(([t, s, st, fl], i) => {
    const x = 56 + i * 320
    b.rect(x, 730, 300, 100, { fill: fl, stroke: st, sw: 1.6, rx: 10, fillOp: 0.5 })
    b.ctext(x + 150, 756, t, { size: 14.5, weight: 700, fill: st })
    b.wtext(x + 150, 782, s, { size: 11.5, fill: C.sub, maxW: 276, lh: 17, anchor: 'middle' })
    if (i < 3) b.arrow(x + 302, 780, x + 318, 780, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  b.text(56, 856, '制度与文化遗产：', { size: 14, weight: 700, fill: C.ink })
  const legacy = [
    ['百慕大原则', '数据即时公开共享的规范'],
    ['测序工业', '自动化高通量测序产业'],
    ['学科与人才', '「基因组学」由愿景变为常规学科'],
  ]
  legacy.forEach(([t, s], i) => {
    const x = 70 + i * 410
    b.rect(x, 868, 390, 62, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 8 })
    b.text(x + 16, 894, t, { size: 13, weight: 700, fill: C.sub })
    b.wtext(x + 16, 918, s, { size: 11.5, fill: C.mute, maxW: 360 })
  })
}

export default scene({
  title: '人类基因组计划：两种战略与大科学遗产',
  subtitle: '1990–2003 测定 30 亿碱基对——分级战略与全基因组鸟枪法的竞争、约 2 万基因的核心发现与 HapMap / ENCODE / TCGA / T2T 的延续',
  draw,
})
