// vi ch4-s3 脱壳与基因组递送（39-j 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、流感：M2 质子通道与酸化脱壳 ============
  b.panel(30, 132, 660, 430, { title: '一、流感：M2 质子通道与酸化脱壳' })
  b.circle(240, 340, 122, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(240, 208, '内体（pH 酸化）', { size: 12, weight: 700, fill: C.accD })
  b.ion(140, 240, 'H⁺', { r: 13, fill: C.warnL, stroke: C.warn })
  b.ion(150, 292, 'H⁺', { r: 13, fill: C.warnL, stroke: C.warn })
  b.arrow(160, 250, 208, 280, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.virion(215, 316, 30, { shape: 'enveloped', stroke: C.bad })
  b.rect(206, 330, 14, 12, { fill: C.enz, stroke: C.enzD, sw: 1.2, rx: 3 })
  b.ctext(213, 368, 'M2 通道', { size: 10, weight: 700, fill: C.enzD })
  b.rnaW(260, 380, 70, { stroke: C.rna, amp: 6 })
  b.ctext(295, 412, 'vRNP 释放', { size: 11, weight: 700, fill: C.rna })
  b.arrow(300, 416, 340, 416, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.tag(470, 340, 'M1 与 vRNP 解离', { fill: C.rnaL, stroke: C.rna, size: 11.5, tfill: C.rnaD, pad: 9 })
  b.wtext(400, 396, 'M2 质子通道把内体的酸导入毒粒核心：酸化使 M1（基质）与 vRNP 分家，核糖核蛋白才得以释放、入核转录。', { size: 11, fill: C.sub, maxW: 270, lh: 16 })
  b.wtext(400, 456, '金刚烷胺类即 M2 通道抑制剂——最早的抗流感药之一，现已普遍耐药。', { size: 11, fill: C.mute, maxW: 270, lh: 16 })
  b.wtext(50, 496, '脱壳须等待明确信号（此处为内体酸化），时机与场所均受精确控制。', { size: 11, fill: C.sub, maxW: 300, lh: 16 })

  // ============ 二、腺病毒：内体破裂与核孔输入 ============
  b.panel(710, 132, 660, 430, { title: '二、腺病毒：内体破裂、微管运输与核孔输入' })
  const adSteps: [string, string, number][] = [
    ['① 吸附', '纤维 knob 结合受体', 730],
    ['② 内吞', '五邻体基板结合整合素', 890],
    ['③ 破膜而出', '酸化变构释放蛋白 VI 裂解内体膜', 1050],
  ]
  adSteps.forEach(([t, s, x]) => {
    b.rect(x, 176, 150, 52, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.ctext(x + 75, 198, t, { size: 12, weight: 700, fill: C.accD })
    b.ctext(x + 75, 218, s, { size: 9.5, fill: C.sub })
  })
  b.arrow(882, 202, 888, 202, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1042, 202, 1048, 202, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  // 微管运输
  b.line(740, 330, 1120, 330, { stroke: C.pro, sw: 3, dash: '10 6' })
  b.ctext(930, 312, '微管', { size: 10.5, weight: 700, fill: C.proD })
  b.rect(980, 306, 46, 34, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 6 })
  b.ctext(1003, 328, '壳层', { size: 10, weight: 700, fill: C.bad })
  b.arrow(976, 324, 890, 324, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.tag(1010, 372, '动力蛋白（dynein）· 每秒约数微米', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 8 })
  b.wtext(730, 412, '此时衣壳已先后丢弃纤维与五邻体，剩余六邻体壳层携约 36 kb 基因组沿微管逆行，运抵核孔复合体（NPC）。', { size: 11, fill: C.sub, maxW: 400, lh: 16 })
  // 核孔输入
  b.circle(1240, 330, 88, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(1240, 326, '细胞核', { size: 12.5, weight: 700, fill: C.proD })
  b.rect(1160, 318, 14, 24, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(1167, 358, 'NPC', { size: 9.5, weight: 700, fill: C.enzD })
  b.dna(1180, 330, 46, { stroke: C.dna, amp: 7, period: 40 })
  b.wtext(1140, 412, '壳层在核孔处解体，基因组经核孔入核。', { size: 11, fill: C.sub, maxW: 220, lh: 16 })
  b.wtext(730, 490, '递送终点由基因组而定：DNA 病毒入核，多数 RNA 病毒留在胞质。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 三、两阶段脱壳与机械注射 ============
  b.panel(30, 586, 660, 394, { title: '三、痘病毒两阶段脱壳与噬菌体机械注射' })
  b.text(50, 646, '痘病毒：两阶段脱壳', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(70, 668, 96, 60, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 12 })
  b.rect(88, 682, 60, 32, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 6 })
  b.ctext(118, 702, '核心', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(118, 744, '完整核心', { size: 10.5, fill: C.mute })
  b.arrow(176, 700, 216, 700, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(196, 684, '早期转录', { size: 9.5, fill: C.enzD })
  b.rnaW(224, 690, 56, { stroke: C.rna, amp: 6 })
  b.ctext(252, 716, '早期 mRNA 自核心释出', { size: 9.5, fill: C.mute })
  b.arrow(300, 700, 340, 700, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(344, 668, 96, 60, { fill: '#ffffff', stroke: C.enz, sw: 2, rx: 12, dash: '6 4' })
  b.dna(360, 698, 64, { stroke: C.dna, amp: 7, period: 38 })
  b.ctext(392, 744, '核心瓦解', { size: 10.5, fill: C.mute })
  b.wtext(70, 780, '第一阶段在完整核心内转录早期 mRNA；核心瓦解后方开始胞质复制——「病毒工厂」就地开工。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.text(470, 646, 'T4：机械注射', { size: 12.5, weight: 700, fill: C.ink })
  b.bacterium(590, 700, 120, 46, { shape: 'rod', stroke: C.accD })
  b.ctext(590, 762, '细菌', { size: 10.5, fill: C.mute })
  b.rect(562, 616, 34, 34, { fill: C.badL, stroke: C.bad, sw: 2, rx: 6 })
  b.rect(566, 650, 26, 14, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.line(579, 664, 579, 688, { stroke: C.bad, sw: 4 })
  b.ctext(579, 600, '尾鞘收缩', { size: 10, weight: 700, fill: C.bad })
  b.arrow(579, 688, 579, 706, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.ctext(579, 726, 'DNA 注入', { size: 9.5, weight: 700, fill: C.dnaD })
  b.wtext(470, 780, '以尾鞘收缩把基因组直接注射入菌——脱壳与侵入一步完成，衣壳根本不进细胞。', { size: 10.5, fill: C.sub, maxW: 210, lh: 15 })

  // ============ 四、脱壳＝基因组递送的时空调控程序 ============
  b.panel(710, 586, 660, 394, { title: '四、脱壳＝基因组递送的时空调控程序' })
  b.text(730, 646, '逐级触发的信号：', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(790, 680, '内体酸化', { fill: C.accL, stroke: C.acc, size: 11.5, tfill: C.accD, pad: 9 })
  b.tag(936, 680, '受体结合', { fill: C.dnaL, stroke: C.dna, size: 11.5, tfill: C.dnaD, pad: 9 })
  b.tag(1074, 680, '核孔锚定', { fill: C.proL, stroke: C.pro, size: 11.5, tfill: C.proD, pad: 9 })
  b.arrow(1160, 680, 1200, 680, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.rect(1210, 652, 130, 56, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(1275, 674, '逐级触发', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(1275, 696, '时机·场所精确控制', { size: 10, fill: C.sub })
  b.text(730, 746, '脱壳时机与先天免疫的博弈：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(760, 768, 120, 84, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(820, 796, '渐进解体', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(820, 816, '的衣壳', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(820, 838, '遮蔽基因组', { size: 9.5, fill: C.sub })
  b.circle(960, 800, 24, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(960, 804, '先天', { size: 9, weight: 700, fill: '#065f46' })
  b.ctext(960, 830, '免疫传感器', { size: 10.5, fill: C.sub })
  b.line(892, 800, 926, 800, { stroke: C.bad, sw: 2, dash: '5 4', marker: 'bad' })
  b.ctext(908, 784, '够不着', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(1030, 776, '基因组在最后一刻才暴露——脱壳太快会被传感器「看见」，太慢则复制落后。', { size: 10.5, fill: C.sub, maxW: 310, lh: 15 })
  b.wtext(730, 902, '现代病毒学把脱壳理解为「基因组递送的时空调控程序」：信号、路径、终点三位一体，而非简单的「脱衣服」。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
}

export default scene({
  title: '脱壳与基因组递送：M2 通道、核孔输入与机械注射',
  subtitle: '流感 M2 导酸脱壳（金刚烷胺靶点、已普遍耐药）；腺病毒破膜后沿微管每秒约数微米抵达 NPC；痘病毒两阶段脱壳；T4 尾鞘收缩把脱壳与侵入并为一步',
  draw,
})
