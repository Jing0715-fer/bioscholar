// mb ch9-s5 分子标记与基因表达研究技术（39-c 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三类分子标记（左上） ============
  b.panel(30, 132, 760, 408, { title: '一、三类分子标记：以多态性位点「标记」染色体区段' })
  // —— RFLP 卡 ——
  b.rect(46, 174, 728, 92, { fill: '#ffffff', stroke: C.line, sw: 1.3, rx: 9 })
  b.rect(56, 184, 120, 72, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  const rflpBands: [number, number][] = [[72, 200], [72, 232], [104, 194], [104, 240], [136, 216]]
  for (const [x, y] of rflpBands) b.rect(x, y, 22, 7, { fill: C.dna, opacity: 0.8, rx: 2 })
  b.ctext(116, 250, ' Southern 杂交', { size: 9.5, fill: C.mute })
  b.tag(216, 200, 'RFLP', { fill: C.dnaL, stroke: C.dna, size: 14, weight: 700, tfill: C.dnaD, pad: 10 })
  b.text(216, 230, '多态性来源：限制位点有无 / 片段长度差异', { size: 11.5, fill: C.sub })
  b.text(216, 254, '检测：Southern 印迹 ｜ 特点：共显性 · 需 DNA 量大', { size: 11.5, fill: C.sub })
  // —— SSR 卡 ——
  b.rect(46, 276, 728, 92, { fill: '#ffffff', stroke: C.line, sw: 1.3, rx: 9 })
  for (let i = 0; i < 5; i++) b.rect(62 + i * 14, 292, 10, 9, { fill: C.rnaL, stroke: C.rna, sw: 1.2, rx: 2 })
  for (let i = 0; i < 8; i++) b.rect(62 + i * 14, 320, 10, 9, { fill: C.rnaL, stroke: C.rna, sw: 1.2, rx: 2 })
  b.text(136, 300, 'n=5', { size: 9.5, fill: C.rnaD })
  b.text(178, 328, 'n=8', { size: 9.5, fill: C.rnaD })
  b.ctext(120, 352, '等位间 (CA)ₙ 重复数不同', { size: 9.5, fill: C.mute })
  b.tag(216, 302, 'SSR / 微卫星', { fill: C.rnaL, stroke: C.rna, size: 14, weight: 700, tfill: C.rnaD, pad: 10 })
  b.text(216, 330, '多态性来源：(CA)ₙ 等重复数变异', { size: 11.5, fill: C.sub })
  b.text(216, 354, '检测：PCR + 电泳 ｜ 特点：多等位 · 共显性 · 基因组中丰富', { size: 11.5, fill: C.sub })
  // —— SNP 卡 ——
  b.rect(46, 378, 728, 92, { fill: '#ffffff', stroke: C.line, sw: 1.3, rx: 9 })
  const snpT = ['A', 'C', 'G', 'T', 'A']
  const snpB = ['A', 'C', 'G', 'T', 'G']
  snpT.forEach((c, i) => b.ctext(66 + i * 22, 400, c, { size: 12, weight: 700, fill: i === 4 ? C.bad : C.dnaD }))
  snpB.forEach((c, i) => b.ctext(66 + i * 22, 424, c, { size: 12, weight: 700, fill: i === 4 ? C.bad : C.dnaD }))
  b.circle(154, 395, 10, { fill: 'none', stroke: C.bad, sw: 1.6 })
  b.circle(154, 419, 10, { fill: 'none', stroke: C.bad, sw: 1.6 })
  b.ctext(110, 452, '同一位置单碱基不同', { size: 9.5, fill: C.mute })
  b.tag(216, 404, 'SNP', { fill: C.enzL, stroke: C.enz, size: 14, weight: 700, tfill: C.enzD, pad: 10 })
  b.text(216, 430, '多态性来源：单碱基变异', { size: 11.5, fill: C.sub })
  b.text(216, 454, '检测：芯片 / 测序 ｜ 特点：数量最多（千万级）· 二等位为主', { size: 11.5, fill: C.sub })
  // —— 用途条 ——
  b.rect(46, 478, 728, 54, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 8, fillOp: 0.4 })
  b.text(60, 502, '用途：遗传连锁图构建 · QTL 定位 · GWAS · 法医 DNA 指纹 · 亲缘与群体遗传分析', { size: 12, fill: C.accD })
  b.text(60, 524, 'SNP 芯片使全基因组关联研究（GWAS）常规化', { size: 11, fill: C.mute })

  // ============ 二、酵母双杂交（右上） ============
  b.panel(810, 132, 560, 408, { title: '二、酵母双杂交（Y2H）：体内检测蛋白-蛋白互作' })
  // —— Gal4 拆分 ——
  b.rect(836, 156, 96, 30, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(884, 176, 'BD 结合域', { size: 12, weight: 700, fill: C.proD })
  b.ctext(943, 176, '＋', { size: 15, weight: 700, fill: C.mute })
  b.rect(950, 156, 96, 30, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 6 })
  b.ctext(998, 176, 'AD 激活域', { size: 12, weight: 700, fill: C.enzD })
  b.wtext(1068, 172, '转录因子 Gal4 拆分为两个可独立融合的结构域', { size: 11.5, fill: C.sub, maxW: 280, lh: 17 })
  // —— 主体示意 ——
  b.line(840, 430, 1340, 430, { stroke: C.dna, sw: 3 })
  b.rect(884, 416, 56, 28, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 3 })
  b.ctext(912, 434, 'UAS', { size: 10.5, weight: 700, fill: C.proD })
  b.rect(976, 416, 240, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 3 })
  b.ctext(1096, 434, '报告基因（HIS3 / ADE2 / lacZ）', { size: 11, weight: 600, fill: C.dnaD })
  b.rect(886, 372, 50, 26, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(911, 389, 'BD', { size: 11.5, weight: 700, fill: C.proD })
  b.rect(944, 372, 92, 26, { fill: '#ffffff', stroke: C.pro, sw: 1.6, rx: 5 })
  b.ctext(990, 389, '诱饵蛋白 X', { size: 11.5, weight: 600, fill: C.ink })
  b.arrow(911, 398, 911, 414, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.rect(1082, 300, 92, 26, { fill: '#ffffff', stroke: C.rna, sw: 1.6, rx: 5 })
  b.ctext(1128, 317, '猎物蛋白 Y', { size: 11.5, weight: 600, fill: C.ink })
  b.rect(1182, 300, 50, 26, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 5 })
  b.ctext(1207, 317, 'AD', { size: 11.5, weight: 700, fill: C.enzD })
  b.line(1174, 313, 1182, 313, { stroke: C.mute, sw: 2 })
  b.line(1038, 384, 1078, 322, { stroke: C.sub, sw: 2.2, dash: '6 4' })
  b.ctext(1028, 344, 'X–Y 互作？', { size: 11.5, weight: 700, fill: C.sub })
  b.path('M1207,330 C1160,384 1080,402 986,414', { stroke: C.enz, sw: 2, dash: '5 4', fill: 'none', marker: 'enz' })
  b.ctext(1170, 388, 'AD 随互作归位 → 激活', { size: 11, weight: 600, fill: C.enzD })
  b.arrow(1010, 460, 1290, 460, { stroke: C.rna, sw: 2.6, marker: 'rna' })
  b.ctext(1150, 450, '报告基因表达', { size: 11.5, weight: 600, fill: C.rnaD })
  b.tag(1150, 490, '缺陷培养基上生长＝互作阳性（可筛 cDNA 文库）', { fill: C.okL, stroke: C.ok, size: 11.5, tfill: C.ok, pad: 9 })
  b.rect(836, 502, 514, 34, { fill: C.badL, stroke: C.bad, sw: 1.2, rx: 7, fillOp: 0.4 })
  b.wtext(848, 523, '局限：假阳性（自激活 / 黏性蛋白）· 假阴性（核外 / 需修饰互作）——需共免疫沉淀等验证', { size: 10.5, fill: C.bad, maxW: 496 })

  // ============ 三、EMSA 与 ChIP（左下） ============
  b.panel(30, 554, 860, 406, { title: '三、DNA-蛋白互作验证：EMSA（体外）与 ChIP（体内）' })
  // —— EMSA ——
  b.ctext(250, 596, 'EMSA：凝胶迁移阻滞', { size: 14.5, weight: 700, fill: C.ink })
  b.gel(56, 604, 240, 232, [
    { label: '游离探针', bands: [[0.80, C.rna]] },
    { label: '+ 蛋白', bands: [[0.44, C.rna], [0.80, '#e7c998']] },
    { label: '+ 蛋白 + 抗体', bands: [[0.16, C.rna]] },
  ], { size: 11 })
  b.text(302, 670, '← 超迁移（抗体）', { size: 11.5, weight: 700, fill: C.enzD })
  b.text(302, 724, '← 阻滞带（复合物）', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(56, 878, '① 标记 DNA 探针与蛋白结合 → 复合物在非变性凝胶中迁移变慢（阻滞带）', { size: 11.5, fill: C.sub, maxW: 400, lh: 19 })
  b.wtext(56, 916, '② 加入特异性抗体产生「超迁移」确认蛋白身份——体外验证 DNA-蛋白互作', { size: 11.5, fill: C.sub, maxW: 400, lh: 19 })
  // —— ChIP ——
  b.ctext(680, 596, 'ChIP：染色质免疫沉淀', { size: 14.5, weight: 700, fill: C.ink })
  const chipSteps = [
    '甲醛交联蛋白-DNA',
    '超声打断染色质（200–500 bp）',
    '特异抗体免疫沉淀（组蛋白修饰 / 转录因子）',
    '逆转交联 → 纯化 DNA',
    'qPCR（ChIP-qPCR）或测序（ChIP-seq）',
  ]
  chipSteps.forEach((s, i) => {
    const y = 604 + i * 64
    b.rect(478, y, 400, 48, { fill: i === 4 ? C.accL : C.panel, stroke: i === 4 ? C.acc : C.line, sw: 1.5, rx: 8 })
    b.ctext(678, y + 29, s, { size: 12.5, fill: i === 4 ? C.accD : C.sub, weight: i === 4 ? 600 : 400 })
    if (i < 4) b.arrow(678, y + 50, 678, y + 62, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.ctext(678, 938, '体内捕捉真实染色质环境中的蛋白-DNA 关联', { size: 11.5, fill: C.mute })

  // ============ 四、报告基因系统（右下） ============
  b.panel(910, 554, 460, 406, { title: '四、报告基因系统：量化启动子 / 增强子活性' })
  b.wtext(926, 596, '将调控元件克隆于报告基因上游，以报告分子活性读出元件强度：', { size: 11.5, fill: C.sub, maxW: 430 })
  // —— GFP ——
  b.rect(926, 600, 430, 100, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(942, 624, 'GFP 绿色荧光蛋白', { size: 13.5, weight: 700, fill: C.ok })
  b.wtext(942, 648, '来自水母，238 aa；Ser65-Tyr66-Gly67 自催化生色', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.wtext(942, 676, '无需底物 · 活细胞动态观测 · mCherry 等多色变体（2008 诺贝尔化学奖）', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.circle(1314, 646, 15, { fill: C.ok })
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [0.7, 0.7], [-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7]] as [number, number][]) {
    b.line(1314 + dx * 19, 646 + dy * 19, 1314 + dx * 27, 646 + dy * 27, { stroke: C.ok, sw: 1.4 })
  }
  // —— 荧光素酶 ——
  b.rect(926, 712, 430, 100, { fill: C.warnL, stroke: '#b45309', sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(942, 736, '荧光素酶（luciferase）', { size: 13.5, weight: 700, fill: C.rnaD })
  b.wtext(942, 760, '虫荧光素 + ATP + O₂ → 氧化虫荧光素 + 光（560 nm）', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.wtext(942, 788, '灵敏 · 线性范围宽 · 双荧光素酶（Firefly + Renilla）内参归一化', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.circle(1314, 758, 15, { fill: '#b45309' })
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [0.7, 0.7], [-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7]] as [number, number][]) {
    b.line(1314 + dx * 19, 758 + dy * 19, 1314 + dx * 27, 758 + dy * 27, { stroke: '#b45309', sw: 1.4 })
  }
  // —— lacZ ——
  b.rect(926, 824, 430, 100, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(942, 848, 'lacZ / β-半乳糖苷酶', { size: 13.5, weight: 700, fill: C.accD })
  b.wtext(942, 872, 'X-gal 显色 · 组织化学定位经典', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.wtext(942, 900, 'GFP 融合蛋白：把「定位 - 动态 - 互作」带入活细胞时代', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.rect(1302, 856, 24, 24, { fill: C.acc, rx: 5 })
  b.ctext(1314, 873, 'Z', { size: 12, weight: 700, fill: '#ffffff' })
  // —— 收束 ——
  b.wtext(926, 942, '报告基因与启动子缺失 / 突变分析结合＝顺式元件功能鉴定的标准流程；组学与测序给全景——现代分子生物学即「证据链的编织术」。', { size: 10, fill: C.mute, maxW: 430, lh: 15 })
}

export default scene({
  title: '分子标记与基因表达研究技术',
  subtitle: 'RFLP / SSR / SNP 三类标记，Y2H · EMSA · ChIP · 报告基因——互作与活性的证据链',
  draw,
})
