// ph ch11-s3 尿的浓缩与稀释：髓质渗透梯度、逆流倍增、直血管、尿素再循环与 ADH
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、髓质渗透梯度与逆流倍增 ============
  b.panel(30, 132, 660, 400, { title: '一、髓质渗透梯度与逆流倍增' })
  b.text(60, 176, '间质渗透压（mOsm/kg）', { size: 11, fill: C.mute })
  const bands: [number, number, string, number][] = [
    [184, 75, '皮质 300', 0.12],
    [256, 150, '外髓 600', 0.28],
    [328, 225, '内髓 900', 0.45],
    [400, 300, '内髓乳头 1200', 0.62],
  ]
  for (const [y, w, lab, op] of bands) {
    b.rect(60, y, w, 72, { fill: C.acc, fillOp: op, stroke: C.accD, sw: 1.4 })
    b.text(70, y + 30, lab, { size: 11, weight: 700, fill: C.accD })
  }
  // 亨利襻发夹：降支（透水）/ 升支（NKCC2 抽盐）
  b.line(460, 190, 460, 440, { stroke: C.acc, sw: 3.5 })
  b.line(530, 190, 530, 440, { stroke: C.rna, sw: 3.5 })
  b.path('M460,440 Q495,470 530,440', { stroke: C.sub, sw: 3.5, fill: 'none' })
  b.ctext(460, 180, '降支', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(530, 180, '升支', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(460, 240, 460, 268, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(530, 268, 530, 240, { stroke: C.rna, sw: 2, marker: 'rna' })
  for (const y of [235, 300, 365, 425]) b.arrow(524, y, 486, y, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(454, 330, 420, 330, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.wtext(558, 222, '升支粗段 NKCC2 单向抽盐：单效应 ≈200 mOsm', { size: 10.5, fill: C.rnaD, maxW: 112, lh: 15 })
  b.wtext(558, 292, '降支透水不透盐：管液下行渐浓', { size: 10.5, fill: C.accD, maxW: 112, lh: 15 })
  b.wtext(558, 352, '发夹对流级联放大', { size: 10.5, fill: C.sub, maxW: 112, lh: 15 })
  b.wtext(50, 494, '逆流倍增：襻升支一次「抽盐」的单效应（200 mOsm）被发夹几何沿髓质纵深级联放大——皮质 300 一路放大至内髓乳头约 1200 mOsm/kg（4 倍）。', { size: 11, fill: C.sub, maxW: 620, lh: 16.5 })

  // ============ 二、直血管逆流交换与尿素再循环 ============
  b.panel(710, 132, 660, 400, { title: '二、直血管逆流交换与尿素再循环' })
  b.ctext(840, 178, '直血管 vasa recta（发夹·极慢流）', { size: 11, weight: 700, fill: C.sub })
  b.line(805, 200, 805, 405, { stroke: C.bad, sw: 3 })
  b.line(875, 200, 875, 405, { stroke: C.bad, sw: 3 })
  b.path('M805,405 Q840,435 875,405', { stroke: C.bad, sw: 3, fill: 'none' })
  b.arrow(805, 250, 805, 278, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(875, 278, 875, 250, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(812, 330, 868, 330, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(868, 362, 812, 362, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(840, 318, '溶质渗回', { size: 9.5, fill: C.warnD })
  b.ctext(840, 350, '水入降支', { size: 9.5, fill: C.accD })
  b.ctext(840, 452, '被动逆流交换·守梯度不耗能', { size: 11, weight: 600, fill: C.badD })
  b.tag(840, 486, '髓质血流仅占小部分·低流低氧', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 10 })
  b.wtext(730, 510, '急性肾损伤先打击 S₃ 段与襻升支上皮', { size: 10, fill: C.mute, maxW: 230, lh: 13 })
  // 右列：尿素再循环
  b.tag(1175, 180, '尿素再循环（UT-A1/UT-A3）', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700 })
  b.rect(1075, 205, 180, 48, { fill: C.bg, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(1165, 225, '内髓集合管', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1165, 243, 'ADH 上调 UT-A 开门', { size: 10, fill: C.mute })
  b.arrow(1165, 255, 1165, 288, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.text(1175, 275, '尿素入间质', { size: 10.5, fill: C.proD })
  b.rect(1040, 290, 250, 56, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1165, 312, '内髓间质', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(1165, 332, '尿素贡献内髓渗透压近一半', { size: 10.5, fill: C.sub })
  b.arrow(1100, 348, 1055, 382, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.etext(1048, 372, '渗入襻细段', { size: 10.5, fill: C.proD })
  b.rect(985, 384, 175, 48, { fill: C.bg, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(1072, 404, '襻细段（透尿素）', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1072, 422, '随管液再下行', { size: 10, fill: C.mute })
  b.path('M1160,408 C1245,408 1245,229 1253,229', { stroke: C.pro, sw: 2, dash: '6 4', marker: 'pro', fill: 'none' })
  b.text(1262, 330, '尿素再循环', { size: 10.5, fill: C.proD })
  b.tag(1175, 465, '「尿素是髓质梯度的另一半」', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11, weight: 700, pad: 12 })
  b.tag(1175, 498, '低蛋白饮食→最大尿渗透压下降', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 10 })

  // ============ 三、ADH 作用链：V2-cAMP-AQP2 ============
  b.panel(30, 548, 660, 437, { title: '三、ADH 作用链：V_{2}–cAMP–AQP2' })
  b.tag(200, 586, '血浆高渗 / 低容量', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 11.5, weight: 700, pad: 12 })
  b.arrow(200, 600, 200, 622, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(105, 624, 190, 42, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(200, 642, '下丘脑视上核·室旁核', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(200, 659, '合成 ADH 前体', { size: 10, fill: C.mute })
  b.arrow(200, 670, 200, 692, { stroke: C.sub, sw: 2 })
  b.text(210, 686, '轴突运输·酶切', { size: 10, fill: C.mute })
  b.rect(105, 694, 190, 42, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(200, 712, '神经垂体贮存·释放', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(200, 729, 'Ca^{2+} 依赖胞吐', { size: 10, fill: C.mute })
  b.arrow(200, 740, 200, 762, { stroke: C.sub, sw: 2 })
  b.rect(105, 764, 190, 40, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(200, 781, '血循环 ADH', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(200, 797, '大剂量经 V_{1} 收缩血管', { size: 10, fill: C.mute })
  b.arrow(200, 808, 200, 830, { stroke: C.sub, sw: 2 })
  b.rect(95, 832, 210, 46, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(200, 852, '集合管基侧膜 V_{2} 受体', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(200, 870, 'G_{s}–cAMP–PKA 磷酸化 AQP2', { size: 10, fill: C.mute })
  b.arrow(200, 882, 200, 904, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(90, 906, 220, 46, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(200, 925, 'AQP2 囊泡插入顶膜', { size: 12, weight: 700, fill: C.accD })
  b.ctext(200, 943, '水通道开门·水顺梯度重吸收', { size: 10, fill: C.sub })
  b.wtext(50, 972, '长期 ADH 另上调 AQP2 基因转录——「开门」升级为「多装门」', { size: 10.5, fill: C.mute, maxW: 400, lh: 14 })
  // 右列：主细胞水通道示意
  b.tag(545, 592, '集合管主细胞：ADH 效应', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 10 })
  b.text(442, 626, '管腔', { size: 10.5, fill: C.mute })
  b.rect(440, 661, 220, 195, { fill: C.panel, stroke: C.mute, sw: 1.5, dash: '5 4', rx: 6 })
  b.bilayer(440, 648, 220, { tint: C.acc })
  for (const x of [475, 540, 605]) b.rect(x - 9, 645, 18, 18, { fill: C.bg, stroke: C.acc, sw: 1.8, rx: 3 })
  b.ctext(605, 626, 'AQP2', { size: 9.5, weight: 700, fill: C.accD })
  for (const x of [475, 540, 605]) b.arrow(x, 632, x, 684, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.vesicle(508, 795, 15, { fill: C.accL, stroke: C.acc })
  b.vesicle(575, 818, 15, { fill: C.accL, stroke: C.acc })
  b.vesicle(640, 785, 15, { fill: C.accL, stroke: C.acc })
  b.arrow(508, 779, 508, 664, { stroke: C.acc, sw: 1.8, dash: '4 3', marker: 'acc' })
  b.arrow(575, 802, 575, 664, { stroke: C.acc, sw: 1.8, dash: '4 3', marker: 'acc' })
  b.arrow(640, 769, 640, 664, { stroke: C.acc, sw: 1.8, dash: '4 3', marker: 'acc' })
  b.bilayer(440, 856, 220, { tint: C.dna })
  for (const x of [490, 555, 620]) b.rect(x - 9, 853, 18, 18, { fill: C.bg, stroke: C.dna, sw: 1.8, rx: 3 })
  b.text(632, 850, 'AQP3/4', { size: 9.5, fill: C.dnaD })
  for (const x of [490, 555, 620]) b.arrow(x, 838, x, 882, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(442, 896, '血液·间质（高渗梯）', { size: 10.5, fill: C.mute })
  b.arrow(307, 855, 436, 855, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(372, 843, 'ADH 结合', { size: 10.5, fill: C.accD })
  b.tag(500, 935, '速效：囊泡膜插入', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 9 })
  b.tag(614, 935, '长效：转录上调', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5, weight: 700, pad: 9 })

  // ============ 四、浓缩与稀释两极与尿崩症 ============
  b.panel(710, 548, 660, 437, { title: '四、浓缩与稀释两极与尿崩症鉴别' })
  b.ctext(865, 610, '终尿渗透压两极（mOsm/kg）', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(760, 620, 210, 230, { fill: C.bg, stroke: C.sub, sw: 1.8 })
  for (const [v, lab] of [[300, '300'], [600, '600'], [900, '900'], [1200, '1200']] as [number, string][]) {
    const y = 850 - (v / 1250) * 230
    b.line(760, y, 970, y, { stroke: C.faint, sw: 0.9, dash: '4 5', opacity: 0.6 })
    b.etext(752, y + 4, lab, { size: 10.5, fill: C.mute })
  }
  b.line(760, 794.8, 970, 794.8, { stroke: C.warn, sw: 1.6, dash: '7 4' })
  b.text(975, 798, '血浆 300', { size: 10, fill: C.warnD })
  b.rect(795, 629.2, 50, 220.8, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(820, 648, '1200', { size: 12, weight: 700, fill: C.enzD })
  b.rect(890, 840.8, 50, 9.2, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(915, 832, '50', { size: 12, weight: 700, fill: C.accD })
  b.ctext(820, 872, 'ADH 有', { size: 11, weight: 700, fill: C.ink })
  b.ctext(915, 872, 'ADH 无', { size: 11, weight: 700, fill: C.ink })
  b.ctext(820, 890, '浓缩尿 ≤0.5 L/日', { size: 10, fill: C.mute })
  b.ctext(915, 890, '稀释尿 可达十余升/日', { size: 10, fill: C.mute })
  b.wtext(740, 915, '渴阈 280–290 mOsm 同启渴觉与 ADH——饮水与保水双重防线；每日必排溶质约 600 mOsm：浓缩至 1200 需至少 0.5 L，只能到 300 则需 2 L。', { size: 10.5, fill: C.sub, maxW: 235, lh: 14.5 })
  // 右列：尿崩症鉴别
  b.text(1040, 605, '多尿-多饮鉴别（禁水 + 加压素试验）', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(1040, 620, 320, 62, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.ctext(1200, 641, '中枢性尿崩症', { size: 12, weight: 700, fill: C.badD })
  b.ctext(1200, 660, 'ADH 缺乏；加压素后尿渗显著↑（有反应）', { size: 10, fill: C.sub })
  b.rect(1040, 696, 320, 62, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(1200, 717, '肾性尿崩症', { size: 12, weight: 700, fill: C.proD })
  b.ctext(1200, 736, 'V_{2}/AQP2 缺陷（遗传·锂剂）；无反应', { size: 10, fill: C.sub })
  b.rect(1040, 772, 320, 62, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1200, 793, '精神性烦渴', { size: 12, weight: 700, fill: C.accD })
  b.ctext(1200, 812, '饮水过多在先；血渗偏低，禁水可浓缩', { size: 10, fill: C.sub })
  b.tag(1200, 866, 'SIADH＝对立面：ADH 不当分泌→稀释性低钠', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 10.5, weight: 700, pad: 10 })
  b.wtext(1040, 900, '第四类为渗透性利尿（糖尿·甘露醇）：尿渗反高于血浆。新生儿襻短、尿素循环未充分运转，浓缩仅 ≈700 mOsm/kg；老人最大尿渗透压逐年下滑。', { size: 10, fill: C.sub, maxW: 320, lh: 14 })
}

export default scene({
  title: '尿的浓缩与稀释：逆流倍增·直血管·尿素再循环与 ADH',
  subtitle: '逆流倍增把髓质间质由 300 级联放大至约 1200 mOsm/kg；直血管发夹慢流守梯度、尿素再循环补内髓近半，ADH 经 V_{2}-cAMP-AQP2 决定终尿 1200 与 50 mOsm/kg 两极',
  draw,
})
