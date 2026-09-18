// mb ch11-s1 限制修饰系统与重组 DNA 技术的奠基（39-c 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、限制修饰（R-M）系统：细菌的分子免疫 ============
  b.panel(30, 132, 1340, 252, { title: '一、限制修饰（R-M）系统：「自身甲基化保护、外源切割」' })
  // 左：自身 DNA 甲基化保护
  b.rect(56, 168, 560, 176, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 10, fillOp: 0.4 })
  b.ctext(336, 196, '自身 DNA：甲基转移酶先行修饰', { size: 14, weight: 700, fill: C.ok })
  b.dna(96, 250, 480, { amp: 8, period: 48, sw: 2.6 })
  for (let i = 0; i < 6; i++) b.circle(120 + i * 90, 236, 6, { fill: C.ok })
  b.ctext(336, 292, '识别序列中的 A 或 C 被甲基化（m⁶A / m⁵C）', { size: 12, fill: C.sub })
  b.tag(336, 318, '限制酶不切割 → 免疫', { fill: '#ffffff', stroke: C.ok, size: 12.5, weight: 700, tfill: C.ok, pad: 8 })
  // 右：噬菌体 DNA 未甲基化被切割
  b.rect(648, 168, 560, 176, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 10, fillOp: 0.4 })
  b.ctext(928, 196, '入侵噬菌体 DNA：未甲基化即被切割', { size: 14, weight: 700, fill: C.bad })
  b.dna(688, 250, 480, { amp: 8, period: 48, sw: 2.6 })
  b.line(820, 226, 820, 274, { stroke: C.enz, sw: 2.2, dash: '5 4' })
  b.line(952, 226, 952, 274, { stroke: C.enz, sw: 2.2, dash: '5 4' })
  b.ctext(886, 216, 'EcoRI 识别 5′-GAATTC-3′ 回文序列', { size: 11.5, fill: C.enzD })
  b.tag(928, 318, '限制酶定点切割 → 降解', { fill: '#ffffff', stroke: C.bad, size: 12.5, weight: 700, tfill: C.bad, pad: 8 })
  // 底注
  b.ctext(700, 364, 'II 型 R-M 酶识别回文序列并于固定位点切割，恰好满足体外「定点手术」需求——Arber · Smith 与 Nathans 获 1978 年诺贝尔奖', { size: 12.5, fill: C.sub })

  // ============ 二、重组 DNA 技术的诞生（左中） ============
  b.panel(30, 400, 660, 276, { title: '二、1973 Cohen-Boyer 实验：重组 DNA 技术元年' })
  // 两个质粒
  b.ellipse(130, 462, 40, 26, { fill: C.dnaL, stroke: C.dna, sw: 2.2 })
  b.ctext(130, 467, 'Ampᴿ', { size: 11, weight: 700, fill: C.dnaD })
  b.ellipse(250, 462, 40, 26, { fill: C.rnaL, stroke: C.rna, sw: 2.2 })
  b.ctext(250, 467, 'Tetᴿ', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(190, 510, '两种抗性质粒经 EcoRI 切割', { size: 11, fill: C.mute })
  // 连接 → 重组质粒
  b.ellipse(420, 462, 46, 30, { fill: C.proL, stroke: C.pro, sw: 2.4 })
  b.ctext(420, 458, 'Ampᴿ+Tetᴿ', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(420, 474, '重组质粒', { size: 10, fill: C.mute })
  b.arrow(310, 462, 360, 462, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(335, 448, '连接', { size: 11, fill: C.sub })
  // 转化 → 双抗菌落
  b.ellipse(560, 462, 40, 26, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(560, 467, '大肠杆菌', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(480, 462, 508, 462, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.rect(56, 508, 300, 30, { fill: '#ffffff', stroke: C.acc, sw: 1.4, rx: 6 })
  b.ctext(206, 528, '涂布双抗平板 → 双抗菌落＝功能表达', { size: 11.5, fill: C.sub })
  b.arrow(206, 496, 206, 504, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  // Asilomar
  b.rect(56, 552, 300, 104, { fill: C.warnL, stroke: '#b45309', sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(72, 578, '1975 年 Asilomar 会议', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(72, 602, '自觉制定重组 DNA 安全规范——「技术先于风险、伦理同步跟上」的科技治理范式；Berg 获 1980 年诺贝尔奖', { size: 11.5, fill: C.sub, maxW: 268, lh: 18 })
  b.rect(372, 552, 292, 104, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 9 })
  b.text(388, 578, '工具箱三件套', { size: 13, weight: 700, fill: C.ink })
  b.wtext(388, 602, '酶：限制酶 · T4 连接酶 · Klenow · 碱性磷酸酶 · 多核苷酸激酶 · 反转录酶；载体与宿主见第 9 章；筛选：抗生素 + 蓝白斑 + 菌落 PCR / Sanger', { size: 11, fill: C.sub, maxW: 260, lh: 17 })

  // ============ 三、表达工程蛋白（右中） ============
  b.panel(710, 400, 660, 276, { title: '三、表达工程蛋白的经典路线（分子克隆 → 生物药）' })
  const steps = ['目的基因（常自 cDNA）', '表达载体装配', '大肠杆菌 BL21(DE3) 诱导', '亲和纯化 → 复性 / 去标签']
  const subs: string[][] = [
    ['反转录获得编码序列'],
    ['T7/lac 启动子 + RBS +', 'His₆ 标签 + 终止子'],
    ['携 T7 RNAP 基因 ·', 'IPTG 诱导'],
    ['Ni 柱捕获 His₆ → 产物'],
  ]
  steps.forEach((s, i) => {
    const x = 726 + i * 156
    b.rect(x, 444, 142, 122, { fill: '#ffffff', stroke: i === 1 ? C.enz : C.acc, sw: 1.5, rx: 9 })
    b.wtext(x + 71, 470, s, { size: 12, weight: 700, fill: i === 1 ? C.enzD : C.accD, maxW: 126, lh: 17, anchor: 'middle' })
    subs[i].forEach((ln, j) => b.text(x + 71, 508 + j * 15, ln, { size: 10.5, fill: C.sub, anchor: 'middle' }))
    if (i < 3) b.arrow(x + 144, 505, x + 154, 505, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.rect(726, 580, 604, 56, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 9 })
  b.wtext(742, 602, '标签体系：His₆（Ni 柱）· GST（谷胱甘肽柱）——亲和纯化后经蛋白酶切去标签；', { size: 11.5, fill: C.sub, maxW: 572, lh: 17 })
  b.wtext(742, 622, '包涵体复性 → 折叠质检 → 工程蛋白', { size: 11.5, fill: C.mute, maxW: 572 })
  b.rect(726, 644, 604, 24, { fill: C.okL, stroke: C.ok, sw: 1.2, rx: 7, fillOp: 0.4 })
  b.ctext(1028, 660, '胰岛素 · 干扰素 · 乙肝疫苗抗原 · 生长激素相继产业化', { size: 11.5, weight: 600, fill: C.ok })

  // ============ 四、从重组到编辑（下，全宽） ============
  b.panel(30, 694, 1340, 266, { title: '四、从「重组」到「编辑」：三代核酸酶的共同逻辑——引入 DSB，借用修复机器' })
  const gens: [string, string, string, string, string][] = [
    ['ZFN（1996–）', '锌指核酸酶', '蛋白模块识别：每指约 3 bp', 'FokI 二聚切割'],
    ['TALEN（2010–）', '类转录激活子效应子核酸酶', 'TALE 重复模块：每重复 1 bp', 'FokI 二聚切割'],
    ['CRISPR-Cas9（2012–）', '向导 RNA 识别', 'sgRNA 与靶 DNA 互补配对', '可编程性最高'],
  ]
  gens.forEach(([era, name, recog, cut], i) => {
    const x = 56 + i * 436
    b.rect(x, 738, 416, 130, { fill: i === 2 ? C.enzL : C.panel, stroke: i === 2 ? C.enz : C.line, sw: i === 2 ? 2 : 1.4, rx: 10, fillOp: i === 2 ? 0.45 : 1 })
    b.ctext(x + 208, 764, era, { size: 14.5, weight: 700, fill: i === 2 ? C.enzD : C.ink })
    b.ctext(x + 208, 788, name, { size: 11.5, fill: C.mute })
    b.text(x + 24, 820, '识别：' + recog, { size: 12.5, fill: C.sub })
    b.text(x + 24, 846, '切割：' + cut + ' → 靶位点 DSB', { size: 12.5, fill: C.sub })
    if (i < 2) b.arrow(x + 420, 802, x + 432, 802, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  })
  b.rect(56, 886, 1288, 56, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 10, fillOp: 0.4 })
  b.ctext(700, 910, '共同逻辑：向靶位点引入双链断裂（DSB），借用细胞自身修复机器实现定点突变 / 插入——理解 DSB 修复是理解基因编辑的前提', { size: 13, weight: 600, fill: C.accD })
  b.ctext(700, 932, '经典基因工程的外源插入位点是随机的；「定点改写基因组」的需求推动三代技术迭代', { size: 11.5, fill: C.mute })
}

export default scene({
  title: '限制修饰系统与重组 DNA 技术的奠基',
  subtitle: 'R-M 系统→EcoRI→1973 Cohen-Boyer 重组 DNA——酶 + 载体 + 宿主三件套与 ZFN / TALEN / CRISPR 的 DSB 共同逻辑',
  draw,
})
