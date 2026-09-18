// im ch3-s2 树突状细胞：抗原提呈的哨兵（39-g 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、未成熟 → 成熟 ============
  b.panel(30, 132, 1340, 402, { title: '一、未成熟 DC 与成熟 DC：成熟与否决定免疫或耐受的方向' })

  // 左：未成熟 DC
  b.rect(60, 176, 400, 130, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 9 })
  b.text(76, 202, '未成熟 DC —— 全身哨兵', { size: 14, weight: 700, fill: C.ink })
  b.wtext(76, 226, '广布皮肤、呼吸道、肠道与结缔组织的上皮之下，持续采样外界抗原；', { size: 11, fill: C.sub, maxW: 368, lh: 16 })
  b.wtext(76, 258, '高摄取 · 低 MHC · 低共刺激——提呈倾向诱导耐受。', { size: 11, fill: C.sub, maxW: 368, lh: 16 })
  // 上皮 + 采样示意
  b.bilayer(300, 286, 130, { tint: C.dna, op: 0.5 })
  b.circle(255, 279, 11, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  ;[[243, 269], [267, 269], [244, 288]].forEach(([x, y]) => b.circle(x, y, 2.6, { fill: C.bad }))
  b.circle(340, 270, 3.5, { fill: C.bad })
  b.ctext(300, 320, '上皮下持续采样', { size: 9.5, fill: C.mute })

  // 中：成熟箭头
  b.arrow(470, 236, 566, 236, { stroke: C.bad, sw: 3, marker: 'bad' })
  b.ctext(518, 214, 'PRR 识别 PAMP/DAMP', { size: 11, weight: 700, fill: C.bad })
  b.ctext(518, 260, '危险信号（TNF · IL-1）', { size: 11, fill: C.bad })

  // 右：成熟 DC
  b.rect(570, 176, 400, 130, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(586, 202, '成熟 DC —— 迁徙的信使', { size: 14, weight: 700, fill: C.dnaD })
  b.wtext(586, 226, '下调摄取；上调并稳定 MHC-肽与共刺激分子 CD80/86；', { size: 11, fill: C.sub, maxW: 368, lh: 16 })
  b.wtext(586, 258, '循 CCR7–CCL19/21 梯度迁入引流淋巴结 T 区。', { size: 11, fill: C.sub, maxW: 368, lh: 16 })
  b.circle(830, 284, 11, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.arrow(845, 284, 900, 284, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.circle(930, 284, 20, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(930, 288, 'T', { size: 12, weight: 700, fill: C.rnaD })
  b.ctext(880, 320, '淋巴结 T 区激活初始 T 细胞', { size: 9.5, fill: C.mute })

  // 表
  b.table(1000, 176, 340, {
    headers: ['两态对照', '要点'],
    colW: [130, 210],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['摄取能力', '高 → 下调'],
      ['MHC-肽', '低 → 上调且稳定'],
      ['CD80/86', '低 → 上调'],
      ['效应方向', '耐受 → 免疫'],
    ],
  })

  b.table(60, 336, 1280, {
    headers: ['比较项', '未成熟 DC', '成熟 DC'],
    colW: [200, 520, 560],
    rowH: 38,
    fontSize: 12,
    rows: [
      ['分布与去向', '广布全身上皮下（外周血单个核细胞中不足 1%）', '循 CCR7–CCL19/21 梯度迁入引流淋巴结 T 区'],
      ['摄取 / 提呈', '持续采样、高摄取；低 MHC 与共刺激', '下调摄取；MHC-肽与 CD80/86 上调而稳定'],
      ['免疫学效应', '提呈倾向诱导耐受（成熟与否决定方向）', '唯一能高效激活初始 T 细胞的专职 APC'],
    ],
  })

  // ============ 二、DC 亚群 ============
  b.panel(30, 550, 1340, 190, { title: '二、DC 的亚群：cDC 与 pDC 的分工' })
  const subs: Array<[number, number, string, string, string, string, string, string]> = [
    [60, 380, 'cDC1', '交叉提呈擅长者', '分泌 IL-12', '启动 CD8⁺ T 与 Th1 应答', C.dna, C.dnaD],
    [470, 380, 'cDC2', '免疫应答引导者', '提呈并极化', '引导 Th2 / Th17 应答方向', C.pro, C.proD],
    [880, 440, 'pDC（浆细胞样 DC）', 'I 型干扰素工厂', '经 TLR7 / TLR9', '大量分泌 I 型干扰素（IFN-α/β）', C.acc, C.accD],
  ]
  subs.forEach(([x, w, name, role, mid, func, col, colD]) => {
    b.rect(x, 588, w, 120, { fill: col, fillOp: 0.08, stroke: col, sw: 1.7, rx: 9 })
    b.text(x + 18, 612, name, { size: 14, weight: 700, fill: colD })
    b.text(x + 18, 636, role, { size: 11, fill: C.mute })
    b.text(x + 18, 660, mid, { size: 11.5, weight: 600, fill: colD })
    b.text(x + 18, 684, func, { size: 11.5, fill: C.sub })
  })

  // ============ 三、交叉提呈与历史地位 ============
  b.panel(30, 756, 1340, 222, { title: '三、交叉提呈：最强的抗原提呈细胞与它的发现者' })
  const flow: Array<[number, string, string]> = [
    [60, '外源抗原', '病毒 / 肿瘤抗原'],
    [222, 'DC 摄取', '吞噬 / 内吞'],
    [384, '送入 MHC I 类通路', '「交叉」之处'],
    [546, '提呈给 CD8⁺ T', 'MHC-肽 + CD80/86'],
    [708, '启动 CTL 应答', '杀伤感染与肿瘤细胞'],
  ]
  flow.forEach(([x, t, s], i) => {
    b.rect(x, 792, 150, 62, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 8 })
    b.ctext(x + 75, 816, t, { size: 11.5, weight: 700, fill: C.accD })
    b.ctext(x + 75, 838, s, { size: 9.5, fill: C.mute })
    if (i < 4) b.arrow(x + 152, 823, x + 160, 823, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  })
  b.ctext(460, 888, '交叉提呈把外源抗原送入 MHC I 类通路以启动 CD8 应答——抗病毒与抗肿瘤疫苗免疫的核心机制', { size: 11.5, weight: 600, fill: C.ink })
  b.ctext(460, 914, '未成熟 DC 低共刺激的提呈则诱导耐受：同一 APC 决定免疫或耐受的方向', { size: 11, fill: C.mute })

  b.rect(900, 792, 460, 130, { fill: C.rnaL, fillOp: 0.35, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(918, 818, '历史与地位', { size: 13.5, weight: 700, fill: C.rnaD })
  b.wtext(918, 842, '1973 年 Steinman 在小鼠脾脏中发现树突状细胞并证明其为独立谱系；2011 年诺贝尔奖一半授予 Steinman，另一半授予发现 Toll 样受体识别作用的 Beutler 与 Hoffmann。', { size: 11, fill: C.sub, maxW: 424, lh: 16 })
  b.wtext(918, 906, '外周血单个核细胞中不足 1% 的 DC，却是激活初始 T 细胞的最强 APC。', { size: 11, weight: 600, fill: C.rnaD, maxW: 424, lh: 16 })
}

export default scene({
  title: '树突状细胞：从全身哨兵到最强抗原提呈细胞',
  subtitle: '未成熟 DC 广布上皮下持续采样、低 MHC 与共刺激倾向诱导耐受；识别 PAMP/DAMP 后成熟，上调 MHC-肽与 CD80/86 并循 CCR7-CCL19/21 迁入淋巴结 T 区；cDC1 擅长交叉提呈与 IL-12、cDC2 引导 Th2/Th17、pDC 经 TLR7/9 分泌 I 型干扰素；1973 年 Steinman 发现 DC，2011 年获诺贝尔奖',
  draw,
})
