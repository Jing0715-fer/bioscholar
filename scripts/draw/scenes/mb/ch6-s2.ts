// mb ch6-s2 密码子的特性：简并性、摆动与例外（39-b2 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、简并性 ============
  b.panel(30, 132, 660, 280, { title: '一、简并性：同义密码子多在第三位不同' })
  b.text(60, 186, 'Leu 的 6 个密码子', { size: 12.5, weight: 700, fill: C.ink })
  const leu = ['UUA', 'UUG', 'CUU', 'CUC', 'CUA', 'CUG']
  leu.forEach((c, i) => {
    b.rect(60 + i * 84, 198, 76, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 4 })
    b.ctext(98 + i * 84, 215, c, { size: 11.5, weight: 700, fill: C.dnaD })
  })
  b.ctext(310, 244, '第 1、2 位固定，第 3 位「摆动」', { size: 11, fill: C.mute })
  b.text(60, 272, 'Gly 的 4 个密码子（GGX）', { size: 12.5, weight: 700, fill: C.ink })
  const gly = ['GGU', 'GGC', 'GGA', 'GGG']
  gly.forEach((c, i) => {
    b.rect(270 + i * 84, 284, 76, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 4 })
    b.ctext(308 + i * 84, 301, c, { size: 11.5, weight: 700, fill: C.rnaD })
  })
  b.wtext(60, 336, '· 点突变第三位多不改变氨基酸（同义突变），显著降低突变的表型效应；AUG（Met）与 UGG（Trp）为无简并例外。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(60, 366, '· 简并并非均匀：第 1、2 位决定氨基酸化学性质（如 UXU / UxC 编码疏水氨基酸），使错误掺入代价最小化。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、摆动配对几何 ============
  b.panel(710, 132, 660, 280, { title: '二、摆动配对几何：密码子第 3 位 × 反密码子 5′ 位' })
  // 反平行几何（UUG / 3′-AAC-5′）
  b.text(730, 190, '反平行配对', { size: 12.5, weight: 700, fill: C.ink })
  const cod = ['U', 'U', 'G']
  cod.forEach((s, i) => {
    b.rect(770 + i * 60, 200, 52, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 5 })
    b.ctext(796 + i * 60, 220, s, { size: 14, weight: 700, fill: C.dnaD })
  })
  b.text(950, 214, '密码子（mRNA 5′→3′）', { size: 10.5, fill: C.sub })
  const antic = ['A', 'A', 'C']
  antic.forEach((s, i) => {
    b.rect(770 + i * 60, 262, 52, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 5 })
    b.ctext(796 + i * 60, 282, s, { size: 14, weight: 700, fill: C.rnaD })
  })
  b.text(950, 284, '反密码子（3′→5′）', { size: 10.5, fill: C.sub })
  b.line(796, 232, 796, 260, { stroke: C.ok, sw: 2 })
  b.line(856, 232, 856, 260, { stroke: C.ok, sw: 2 })
  b.ctext(756, 250, '严格配对', { size: 9.5, fill: C.ok, anchor: 'end' })
  b.line(916, 232, 916, 260, { stroke: C.bad, sw: 2.2, dash: '5 4' })
  b.ctext(756, 290, '摆动位', { size: 9.5, weight: 700, fill: C.bad, anchor: 'end' })
  b.wtext(730, 320, '密码子第 3 位与反密码子 5′ 位（第 1 位）的配对允许非经典几何构型；其余两位仍严格沃森-克里克配对。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })
  // 一读三
  b.text(730, 356, '含肌苷（I）的反密码子一个可读三个密码子：', { size: 11.5, weight: 700, fill: C.ink })
  const three = ['UUU', 'UUC', 'UUA']
  three.forEach((c, i) => {
    b.rect(1010 + i * 66, 344, 60, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.4, rx: 4 })
    b.ctext(1040 + i * 66, 359, c, { size: 10.5, weight: 700, fill: C.dnaD })
    b.line(1040 + i * 66, 368, 1108, 388, { stroke: C.faint, sw: 1.4 })
  })
  b.ellipse(1108, 394, 16, 13, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1108, 398, 'I', { size: 11, weight: 700, fill: '#991b1b' })
  b.wtext(1135, 396, 'I 读 U / C / A', { size: 10.5, weight: 700, fill: C.bad, maxW: 200, lh: 14 })

  // ============ 三、摆动规则表 ============
  b.panel(30, 432, 660, 280, { title: '三、Crick 摆动规则（1966）与 tRNA 数目' })
  b.table(60, 476, 620, {
    headers: ['反密码子 5′ 位', '可配对的密码子第 3 位'],
    colW: [280, 340],
    rowH: 30,
    fontSize: 12,
    rows: [
      ['C', 'G'],
      ['A', 'U'],
      ['U', 'A 或 G'],
      ['G', 'U 或 C'],
      ['I（肌苷）', 'U、C 或 A'],
    ],
  })
  b.wtext(60, 686, 'tRNA 数量可少于 61 种：大肠杆菌约 40～50 种有效 tRNA，人线粒体仅 22 种。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、通用性例外 ============
  b.panel(710, 432, 660, 280, { title: '四、通用性的系统例外与功能性再定义' })
  b.table(730, 476, 620, {
    headers: ['体系', '改变'],
    colW: [250, 370],
    rowH: 30,
    fontSize: 11,
    rows: [
      ['人 / 脊椎动物线粒体', 'UGA→Trp；AGA/AGG→终止；AUA→Met'],
      ['酵母线粒体', 'CUN→Thr'],
      ['某些纤毛虫', 'UAA/UAG→Gln'],
      ['支原体等', 'CGG→无（不含 Arg）'],
      ['赭球菌 / 甲烷菌', 'UAG→吡咯赖氨酸（Pyl）'],
    ],
  })
  b.wtext(730, 686, '功能性再定义：UGA 在 SECIS 元件配合下插入硒代半胱氨酸（第 21 种氨基酸，SELB / eEFSec 系统）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 五、读码框与移码 ============
  b.panel(30, 732, 1340, 238, { title: '五、读码框：三联体连续、无重叠、无逗号' })
  const trip = (x: number, y: number, s: string, fill: string, stroke: string, w = 72) => {
    b.rect(x, y, w, 26, { fill, stroke, sw: 1.5, rx: 4 })
    b.ctext(x + w / 2, y + 17, s, { size: 11.5, weight: 700, fill: stroke })
  }
  b.text(60, 780, '正常读框（自起始 AUG 起连续读取）', { size: 12, weight: 700, fill: C.ink })
  const normal = ['AUG', 'UUU', 'CCA', 'GGG', 'UCA', 'AAU']
  normal.forEach((t, i) => trip(60 + i * 78, 792, t, C.dnaL, C.dnaD))
  b.text(60, 846, '插入 1 个碱基 C：', { size: 12, weight: 700, fill: C.bad })
  trip(60, 858, 'AUG', C.dnaL, C.dnaD)
  trip(138, 858, 'C', C.badL, '#991b1b', 20)
  const rest = ['UUU', 'CCA', 'GGG', 'UCA', 'AAU']
  rest.forEach((t, i) => trip(166 + i * 78, 858, t, '#ffffff', C.faint))
  b.text(60, 910, '新读框（整体移位，肽链序列彻底改变）：', { size: 12, weight: 700, fill: C.sub })
  trip(320, 922, 'AUG', C.dnaL, C.dnaD)
  const shifted = ['CUU', 'UCC', 'AGG', 'GUC', 'AAA', 'U…']
  shifted.forEach((t, i) => trip(398 + i * 78, 922, t, '#ffffff', C.faint))
  b.wtext(660, 788, '插入 / 缺失非 3 倍数核苷酸引起移码突变——Brenner 等用 T4 rII 移码突变首次证明三联体阅读方式。', { size: 11, fill: C.sub, maxW: 700, lh: 15 })
  b.wtext(660, 838, '部分病毒基因用程序性核糖体移码（-1 frameshift）以一个基因产出两种蛋白（如逆转录病毒的 gag-pol 融合）——「框架」也可被 RNA 结构主动调控。', { size: 11, fill: C.sub, maxW: 700, lh: 15 })
  b.wtext(660, 900, '密码子在绝大多数生物中通用，是生命同源性的有力证据，使异源表达与进化比较成为可能。', { size: 11, fill: C.mute, maxW: 700, lh: 15 })
}

export default scene({
  title: '密码子的特性：简并性、摆动与例外',
  subtitle: '同义密码子多在第三位不同（Leu 6 个 / Gly 4 个）——反密码子 5′ 位与密码子第 3 位摆动配对（I 读 U/C/A，一读三）；线粒体 UGA→Trp 等系统例外与 UGA→Sec 的功能性再定义',
  draw,
})
