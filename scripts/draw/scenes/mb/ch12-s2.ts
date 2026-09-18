// mb ch12-s2 原癌基因的分类、功能与激活机制（39-b2 收尾轮）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、原癌基因：生长信号网络的放大器节点 ============
  b.panel(30, 132, 1340, 240, { title: '一、原癌基因按产物定位分类：增殖–存活信号网络的放大器节点' })
  b.wtext(46, 180, '原癌基因编码增殖、分化、存活信号的正调控组分——激活突变几乎都是功能获得（gain-of-function）且显性：一个等位基因激活即可生效。', { size: 11, fill: C.sub, maxW: 1290, lh: 15 })
  const nodes: [string, string, string, string, string][] = [
    ['分泌生长因子', 'SIS（PDGF-B 链）', '自分泌促增殖', C.rnaL, C.rnaD],
    ['受体酪氨酸激酶', 'erbB（EGFR）· HER2 · fms', '接收促增殖信号', C.proL, C.proD],
    ['信号转导分子', 'src · abl ｜ Ras（H/K/N）', '激酶中继·GTP 开关', C.enzL, C.enzD],
    ['丝/苏氨酸激酶', 'raf（MAPKKK）', '级联中继', C.accL, C.accD],
    ['转录因子', 'myc · jun · fos · rel', '基因表达程序', C.dnaL, C.dnaD],
    ['凋亡与周期调控', 'bcl-2 · cyclin D1 · CDK4', 'G1/S 推进·抗凋亡', C.badL, '#991b1b'],
  ]
  nodes.forEach(([cls, genes, fn, fill, stroke], i) => {
    const x = 46 + i * 223
    b.rect(x, 196, 195, 100, { fill, stroke: C.line, sw: 1.4, rx: 8, fillOp: 0.55 })
    b.rect(x, 196, 195, 30, { fill, stroke: C.line, sw: 1.2, rx: 8 })
    b.ctext(x + 97, 216, cls, { size: 11.5, weight: 700, fill: stroke })
    b.ctext(x + 97, 252, genes, { size: 9.5, weight: 600, fill: C.sub })
    b.ctext(x + 97, 278, fn, { size: 9.5, fill: C.mute })
    if (i < 5) b.arrow(x + 197, 246, x + 221, 246, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  b.wtext(46, 320, '网络成员相互连接——一个成员的激活常足以拉动整条通路，肿瘤因此高度依赖某个「驱动」癌基因（oncogene addiction，癌基因依赖）。', { size: 11, fill: C.sub, maxW: 1290, lh: 15 })

  // ============ 二、激活的四条路线 ============
  b.panel(30, 392, 1340, 430, { title: '二、原癌基因激活的四条路线（各附示意）' })
  b.tag(201, 448, '① 点突变', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 10 })
  b.tag(534, 448, '② 基因扩增', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 10 })
  b.tag(867, 448, '③ 染色体易位', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 10 })
  b.tag(1200, 448, '④ 插入激活', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 10 })
  // —— ① 点突变：Ras 开关 ——
  b.rect(60, 486, 86, 36, { fill: '#f1f5f9', stroke: C.faint, sw: 1.5, rx: 6 })
  b.ctext(103, 508, 'Ras·GDP', { size: 10, weight: 600, fill: C.mute })
  b.rect(222, 486, 96, 36, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 6 })
  b.ctext(270, 508, 'Ras·GTP', { size: 10.5, weight: 700, fill: '#78350f' })
  b.arrow(146, 494, 222, 494, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.ctext(184, 486, 'GEF 置换', { size: 8.5, fill: C.mute })
  b.arrow(222, 522, 146, 522, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ctext(184, 540, 'GAP 水解', { size: 8.5, fill: C.ok })
  b.line(174, 514, 194, 530, { stroke: C.bad, sw: 3 })
  b.line(194, 514, 174, 530, { stroke: C.bad, sw: 3 })
  b.ctext(184, 560, 'G12V：GTP 水解失灵', { size: 9.5, weight: 700, fill: '#991b1b' })
  b.arrow(318, 504, 350, 504, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.wtext(60, 590, 'Gly12 / Gly13 / Gln61 突变（如 G12V）使 GTP 水解失灵——Ras 锁定 GTP 态，持续向 RAF–MEK–ERK 发送增殖信号。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.wtext(60, 655, 'Ras 是人类肿瘤中突变最广的癌基因（约 30%）；KRAS G12D 见于约 90% 胰腺导管腺癌。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  // —— ② 基因扩增 ——
  b.line(400, 512, 640, 512, { stroke: C.dna, sw: 5 })
  b.ctext(400, 540, 'chr', { size: 9, fill: C.mute })
  b.rect(430, 498, 80, 28, { fill: C.dna, stroke: C.dnaD, sw: 1.5, rx: 3 })
  b.ctext(470, 516, 'MYCN×N', { size: 9, weight: 700, fill: '#ffffff' })
  b.ctext(470, 490, 'HSR 均染区', { size: 8.5, weight: 600, fill: C.dnaD })
  b.circle(560, 545, 11, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.circle(590, 535, 11, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.circle(575, 562, 11, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.ctext(575, 590, 'DM 双微体', { size: 8.5, weight: 600, fill: C.dnaD })
  b.wtext(394, 620, '基因拷贝数局部增加——双微体（DM）或均染区（HSR）使产物过量表达。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.wtext(394, 675, 'MYCN 扩增于神经母细胞瘤（预后指标）；HER2 / ERBB2 扩增于 20%～30% 乳腺癌（赫赛汀的靶点）；MYC 扩增见于多种肿瘤。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  // —— ③ 染色体易位 ——
  b.rect(740, 500, 74, 32, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 6 })
  b.ctext(777, 520, 'BCR', { size: 11, weight: 700, fill: C.proD })
  b.ctext(777, 490, 'chr22', { size: 9, fill: C.mute })
  b.rect(856, 500, 74, 32, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 6 })
  b.ctext(893, 520, 'ABL', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(893, 490, 'chr9', { size: 9, fill: C.mute })
  b.arrow(777, 532, 830, 560, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.arrow(893, 532, 890, 560, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.rect(778, 562, 168, 34, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 6 })
  b.ctext(862, 584, 'BCR-ABL（p210）', { size: 10.5, weight: 700, fill: '#991b1b' })
  b.ctext(862, 616, '费城染色体 t(9;22)', { size: 10, weight: 600, fill: C.bad })
  b.wtext(726, 645, 't(9;22) BCR-ABL → CML；t(8;14) c-MYC × IgH 增强子 → 伯基特淋巴瘤；t(14;18) BCL-2 × IgH → 滤泡性淋巴瘤；t(15;17) PML-RARα → 急性早幼粒白血病 APL。', { size: 10, fill: C.sub, maxW: 296, lh: 14.5 })
  // —— ④ 插入激活 ——
  b.line(1060, 512, 1330, 512, { stroke: C.dna, sw: 3 })
  b.rect(1150, 498, 76, 28, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
  b.ctext(1188, 516, 'ALV LTR', { size: 9, weight: 700, fill: C.rnaD })
  b.rect(1262, 498, 60, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 4 })
  b.ctext(1292, 516, 'c-myc', { size: 9.5, weight: 700, fill: C.dnaD })
  b.arrow(1226, 512, 1260, 512, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(1243, 538, '激活', { size: 8.5, weight: 700, fill: C.bad })
  b.wtext(1059, 570, '不含 onc 的逆转录病毒（ALV）随机整合，前病毒 LTR 充当启动子 / 增强子激活旁侧原癌基因', { size: 10.5, fill: C.sub, maxW: 296, lh: 15 })
  b.wtext(1059, 600, '——插入诱变是发现新癌基因的遗传学工具。', { size: 10.5, fill: C.sub, maxW: 296, lh: 15 })
  b.wtext(1059, 645, '与转导（RSV 捕获 c-src 成 v-src）同为逆转录病毒的激活路线——两条路线殊途同归。', { size: 10.5, fill: C.sub, maxW: 296, lh: 15 })

  // ============ 三、靶向治疗的逻辑起点 ============
  b.panel(30, 842, 1340, 138, { title: '三、靶向治疗的逻辑起点：从驱动基因到药物' })
  const thers: [string, string][] = [
    ['伊马替尼（Gleevec，2001）', 'ATP 竞争性抑制 BCR-ABL → CML 五年生存率超 90%——开启分子靶向治疗时代'],
    ['赫赛汀（trastuzumab）', '抗 HER2 抗体治疗 HER2 扩增乳腺癌（20%～30% 患者群）'],
    ['ATRA + 砼剂（APL）', '降解 PML-RARα、诱导分化治愈——「分化治疗」典范'],
  ]
  thers.forEach(([t, s], i) => {
    const x = 46 + i * 440
    b.rect(x, 880, 420, 66, { fill: '#ffffff', stroke: C.ok, sw: 1.5, rx: 8 })
    b.text(x + 16, 902, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(x + 16, 922, s, { size: 10, fill: C.sub, maxW: 390, lh: 14 })
  })
  b.ctext(700, 968, '四条激活路线本质相同：使生长信号的强度、时序或位置脱离正常调控。', { size: 11.5, weight: 600, fill: C.accD })
}

export default scene({
  title: '原癌基因的分类、功能与激活机制',
  subtitle: '生长因子（SIS）→ 受体（HER2/EGFR）→ 信号转导（src/abl/Ras）→ 转录因子（myc）→ 周期（cyclin D1/CDK4）——点突变（Ras G12V，约 30% 肿瘤）、扩增（MYCN/HER2）、易位（费城染色体 BCR-ABL）、LTR 插入四路线；伊马替尼使 CML 五年生存率超 90%',
  draw,
})
