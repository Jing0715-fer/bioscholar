// mt ch7-s2 动物 V-ATPase：溶酶体酸化 · 内体阶梯 · 破骨细胞 · 肾闰细胞 · 两端延伸
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、溶酶体酸化：泵＋ClC-7 分流 =================
  b.panel(30, 132, 660, 455, { title: '一、溶酶体酸化：V 型泵＋ClC-7 电荷分流' })
  // 溶酶体大圆
  b.circle(200, 350, 118, { fill: '#fee2e2', stroke: C.bad, sw: 2.5 })
  b.tag(200, 262, 'pH 4.5–5.0', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 12, weight: 700 })
  const enzDots: [number, number][] = [[160, 300], [200, 292], [240, 300], [170, 330], [230, 330], [200, 355]]
  for (const [dx, dy] of enzDots) b.circle(dx, dy, 4, { fill: C.bad, fillOp: 0.55 })
  b.ctext(200, 390, '约 60 种酸性水解酶（最适 pH≈5）', { size: 9.5, fill: C.badD, weight: 600 })
  b.ctext(200, 492, '溶酶体', { size: 12, weight: 700, fill: C.badD })
  // 放大镜连线
  b.line(286, 268, 366, 246, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.line(318, 352, 366, 286, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  // 局部放大：膜上泵＋交换体
  b.text(368, 226, '囊泡腔', { size: 10, fill: C.mute })
  b.bilayer(366, 240, 280, { h: 36 })
  b.text(368, 300, '细胞质 pH≈7.2', { size: 10, fill: C.mute })
  // V-ATPase 小样
  b.text(368, 316, 'V-ATPase', { size: 10.5, weight: 700, fill: C.accD })
  b.rect(430, 234, 44, 44, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 8 })
  for (let i = 0; i < 3; i++) b.line(441 + i * 11, 238, 441 + i * 11, 274, { stroke: C.rna, sw: 1, opacity: 0.45 })
  b.rect(474, 232, 30, 48, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 4 })
  b.ctext(489, 260, 'a', { size: 10, weight: 700, fill: C.proD })
  b.rect(447, 278, 8, 22, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  const hexA: [number, number, string][] = [
    [475, 336, 'B'], [463, 315, 'A'], [439, 315, 'B'], [427, 336, 'A'], [439, 357, 'B'], [463, 357, 'A'],
  ]
  for (const [cx, cy, t] of hexA) {
    const isA = t === 'A'
    b.circle(cx, cy, 11, { fill: isA ? C.enzL : C.accL, stroke: isA ? C.enz : C.acc, sw: 1.5 })
    b.ctext(cx, cy + 3.5, t, { size: 8.5, weight: 700, fill: isA ? C.enzD : C.accD })
  }
  b.tag(420, 400, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10, weight: 700 })
  b.arrow(432, 390, 446, 372, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  // H+ 经 a 半通道入腔
  b.ion(540, 320, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.arrow(526, 310, 494, 286, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.path('M 490,284 Q 482,264 488,248', { stroke: C.warn, sw: 1.5, dash: '4 3' })
  b.arrow(486, 246, 470, 220, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(460, 208, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  // ClC-7 反向转运体
  b.rect(566, 238, 54, 44, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 6 })
  b.ctext(593, 254, 'ClC-7', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(593, 272, '2Cl^{-}:1H^{+}', { size: 8, weight: 600, fill: C.dnaD })
  b.arrow(578, 306, 578, 288, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.arrow(598, 306, 598, 288, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.arrow(612, 288, 612, 306, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(578, 322, 'Cl^{-}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.ion(598, 322, 'Cl^{-}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.ion(612, 322, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ion(578, 218, 'Cl^{-}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.ion(598, 218, 'Cl^{-}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.ion(612, 218, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  // 电荷分流注释
  b.wtext(368, 420, '泵入 H^{+} 不伴随阴离子 → 腔内正电位反过来顶住泵；ClC-7 以约 2Cl^{-}:1H^{+} 放入 Cl^{-} 泄掉电压，净积累接近电中性 HCl，酸化得以持续推进', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  b.tag(520, 520, '酸化缺陷 → 溶酶体贮积病', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 9.5, weight: 700 })
  b.wtext(46, 530, '偶有水解酶漏入 pH≈7.2 的胞质便迅速失活——酸化既是激活开关也是安全锁；泵速远高于固有漏出，几分钟内腔内 pH 即到位', { size: 9.5, fill: C.sub, maxW: 280, lh: 21 })

  // ================= 二、内体阶梯酸化：pH 作为分选条码 =================
  b.panel(710, 132, 660, 455, { title: '二、内体阶梯酸化：pH 作为分选条码' })
  b.text(726, 184, 'pH 阶梯：从质膜内吞到溶酶体', { size: 11.5, weight: 700, fill: C.sub })
  b.text(726, 208, '内吞', { size: 9, fill: C.mute })
  b.arrow(752, 202, 768, 226, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  // 三级囊泡
  b.circle(790, 260, 42, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(790, 252, '早期内体', { size: 10, weight: 700, fill: C.accD })
  b.ctext(790, 274, 'pH≈6.0', { size: 10.5, weight: 700, fill: C.accD })
  b.circle(960, 260, 42, { fill: C.warnL, stroke: C.warn, sw: 2.2 })
  b.ctext(960, 252, '晚期内体', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(960, 274, 'pH≈5.0', { size: 10.5, weight: 700, fill: C.warnD })
  b.circle(1130, 260, 46, { fill: C.badL, stroke: C.bad, sw: 2.2 })
  b.ctext(1130, 252, '溶酶体', { size: 10, weight: 700, fill: C.badD })
  b.ctext(1130, 274, 'pH 4.5–5.0', { size: 10.5, weight: 700, fill: C.badD })
  b.arrow(834, 260, 916, 260, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(875, 246, '成熟', { size: 9, fill: C.mute })
  b.arrow(1004, 260, 1082, 260, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(1043, 246, '成熟', { size: 9, fill: C.mute })
  // 各站小泵
  b.rect(778, 294, 24, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.rect(783, 310, 14, 12, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.rect(948, 294, 24, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.rect(953, 310, 14, 12, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.rect(1118, 298, 24, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.rect(1123, 314, 14, 12, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.wtext(726, 332, '囊泡成熟过程中 V-ATPase 持续加码；Rab 蛋白与效应器把囊泡运往下一站', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  // M6PR 押运与逃逸回收
  b.rect(736, 404, 120, 46, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(796, 432, '高尔基体', { size: 11, weight: 700, fill: C.accD })
  b.arrow(858, 406, 922, 282, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(798, 368, 'M6PR 押运新酶', { size: 9, weight: 600, fill: C.accD })
  b.ctext(960, 336, '低 pH 卸货', { size: 9, weight: 700, fill: C.badD })
  b.spline([[948, 306], [890, 390], [848, 442]], { stroke: C.ok, sw: 2, marker: 'ok' })
  b.text(896, 412, '逃逸回收（retromer）', { size: 9, weight: 600, fill: C.okD })
  // 右侧注释
  b.wtext(1050, 336, 'LDL 与受体在 pH≈6 解离、受体回收再用；转铁蛋白受体在 pH≈5.5–6 释铁后整体回收', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  b.wtext(1050, 408, '流感血凝素在晚期内体 pH≈5 构象翻转、暴露融合肽——阶梯酸化也是病原体可乘的定时器', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  b.rect(1050, 470, 300, 70, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(1064, 492, '工具药：巴弗洛霉素 A1（V0 特异抑制）', { size: 10, weight: 700, fill: C.badD })
  b.wtext(1064, 512, '抹平阶梯 → 分选全线瘫痪：酶被误分泌、受体被误送入溶酶体降解', { size: 9, fill: C.badD, maxW: 272, lh: 18 })

  // ================= 三、破骨细胞褶皱缘：把泵搬上质膜 =================
  b.panel(30, 602, 660, 383, { title: '三、破骨细胞褶皱缘：把泵搬上质膜' })
  b.rect(50, 648, 400, 122, { fill: C.panel, stroke: C.sub, sw: 2.2, rx: 18 })
  b.ctext(140, 674, '破骨细胞', { size: 12, weight: 700, fill: C.sub })
  b.circle(120, 708, 24, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(120, 712, '核', { size: 10, weight: 700, fill: C.proD })
  const vesc: [number, number][] = [[230, 690], [260, 700], [290, 688], [320, 700], [350, 690]]
  for (const [vx, vy] of vesc) b.circle(vx, vy, 5, { fill: C.accL, stroke: C.acc, sw: 1.2 })
  // 褶皱缘（锯齿）
  const zig: [number, number][] = []
  for (let i = 0; i <= 11; i++) {
    zig.push([180 + i * 20, i % 2 === 0 ? 752 : 792])
  }
  b.polyline(zig, { stroke: C.sub, sw: 2 })
  b.line(50, 770, 50, 812, { stroke: C.sub, sw: 2 })
  b.line(450, 770, 450, 812, { stroke: C.sub, sw: 2 })
  b.ctext(95, 778, '密封区', { size: 8.5, fill: C.mute })
  // 褶皱缘上的泵与 ClC-7
  for (const px of [210, 280, 350]) {
    b.rect(px - 16, 706, 32, 20, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 5 })
    b.rect(px - 4, 726, 8, 12, { fill: C.accL, stroke: C.acc, sw: 1.2 })
    b.rect(px - 14, 738, 28, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 6 })
    b.arrow(px, 772, px, 794, { stroke: C.warn, sw: 1.8, marker: 'warn' })
    b.ion(px, 806, 'H^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  }
  b.rect(376, 742, 26, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.ctext(389, 734, 'ClC-7', { size: 8.5, weight: 700, fill: C.dnaD })
  b.arrow(389, 770, 389, 794, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ion(389, 806, 'Cl^{-}', { r: 8, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7 })
  b.tag(132, 803, '溶蚀腔 pH≈4.5', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10, weight: 700 })
  // 骨基质
  b.rect(50, 812, 400, 58, { fill: C.panelB, stroke: C.sub, sw: 2 })
  for (let i = 0; i < 9; i++) b.line(70 + i * 42, 868, 102 + i * 42, 814, { stroke: C.faint, sw: 1, opacity: 0.5 })
  b.text(66, 838, '骨基质（羟基磷灰石＋胶原）', { size: 10, fill: C.sub })
  b.text(66, 858, 'H^{+} 溶解矿物；组织蛋白酶 K 于酸性环境降解胶原', { size: 9.5, fill: C.warnD })
  // 右侧：基因与疾病
  b.text(468, 664, '基因与疾病', { size: 11.5, weight: 700, fill: C.badD })
  b.wtext(468, 688, '褶皱缘 V-ATPase 的 V0 采用 a3 异构体（基因 TCIRG1）；ClC-7（CLCN7）或其伴侣 OSTM1 护送缺陷 → 溶蚀腔无法酸化', { size: 9.5, fill: C.sub, maxW: 205, lh: 21 })
  b.rect(462, 756, 214, 84, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(474, 778, '石骨症', { size: 11.5, weight: 700, fill: C.badD })
  b.wtext(474, 798, '骨吸收停摆：旧骨不清而新骨堆砌，骨质致密如石却脆；髓腔消失连累造血与免疫', { size: 9, fill: C.badD, maxW: 190, lh: 19 })
  b.text(474, 858, '泵、分流、护送——三件缺一不可', { size: 9.5, weight: 600, fill: C.badD })

  // ================= 四、肾闰细胞泌 H+ 与两端延伸 =================
  b.panel(710, 602, 660, 383, { title: '四、肾闰细胞泌 H^{+} 与酸化的两端延伸' })
  b.text(736, 660, '管腔（尿）', { size: 10, weight: 700, fill: C.accD })
  b.bilayer(736, 668, 250)
  b.rect(738, 682, 246, 168, { fill: C.panel, stroke: C.sub, sw: 2.2, rx: 10 })
  b.bilayer(738, 850, 246)
  b.text(736, 884, '血液（基底侧）', { size: 10, weight: 700, fill: C.proD })
  // 顶端膜 V-ATPase
  b.ion(802, 646, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.arrow(802, 664, 802, 657, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(852, 648, '泌 H^{+}', { size: 9.5, weight: 700, fill: C.warnD })
  b.rect(788, 658, 30, 30, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 6 })
  b.rect(798, 688, 8, 14, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  const hexR: [number, number, string][] = [
    [826, 734, 'B'], [814, 713, 'A'], [790, 713, 'B'], [778, 734, 'A'], [790, 755, 'B'], [814, 755, 'A'],
  ]
  for (const [cx, cy, t] of hexR) {
    const isA = t === 'A'
    b.circle(cx, cy, 11, { fill: isA ? C.enzL : C.accL, stroke: isA ? C.enz : C.acc, sw: 1.5 })
    b.ctext(cx, cy + 3.5, t, { size: 8.5, weight: 700, fill: isA ? C.enzD : C.accD })
  }
  b.text(750, 694, '顶端膜 V-ATPase', { size: 9.5, weight: 700, fill: C.accD })
  b.text(858, 706, 'V1：B1 亚基', { size: 9, fill: C.sub })
  b.text(858, 724, 'V0：a4 亚基', { size: 9, fill: C.sub })
  b.text(846, 752, 'ATP6V1B1·ATP6V0A4', { size: 8.5, fill: C.mute })
  b.ctext(860, 800, 'A 型闰细胞', { size: 11, weight: 700, fill: C.sub })
  // 基底侧 kAE1
  b.rect(898, 840, 40, 34, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 5 })
  b.ctext(918, 862, 'kAE1', { size: 9, weight: 700, fill: C.dnaD })
  b.arrow(900, 880, 900, 866, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ion(878, 886, 'Cl^{-}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.arrow(936, 866, 936, 880, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ion(958, 886, 'HCO_{3}^{-}', { r: 11, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7 })
  b.text(890, 908, 'kAE1 回收 HCO_{3}^{-}', { size: 9, fill: C.dnaD })
  b.wtext(736, 930, '闰细胞泵极性可整体翻转（B 型反向装泵泌碱）；碳酸酐酶与管腔侧 Cl^{-}/HCO_{3}^{-} 交换完成配套——可调档的终末段阀门', { size: 9, fill: C.sub, maxW: 280, lh: 18 })
  // 右侧三框：dRTA / 肿瘤 / mTORC1
  b.rect(1020, 648, 332, 100, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(1034, 670, 'ATP6V1B1 / ATP6V0A4 突变', { size: 11, weight: 700, fill: C.badD })
  b.wtext(1034, 692, '泵力不足 → 远端肾小管酸中毒（dRTA）：血液酸化而尿液反常偏碱——分子部件的部署决定疾病表型', { size: 9.5, fill: C.badD, maxW: 304, lh: 21 })
  b.rect(1020, 762, 332, 124, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(1034, 784, '肿瘤酸化微环境', { size: 11, weight: 700, fill: C.warnD })
  b.wtext(1034, 806, '质膜 V-ATPase 外排 H^{+}，细胞外 pH≈6.5–6.8：侵袭酶激活、迁移受益；弱碱性化疗药被酸性溶酶体质子化滞留——「溶酶体隔离」参与多重耐药', { size: 9.5, fill: C.warnD, maxW: 304, lh: 21 })
  b.rect(1020, 896, 332, 88, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.text(1034, 916, 'mTORC1 看门人', { size: 11, weight: 700, fill: C.accD })
  b.wtext(1034, 936, 'Ragulator-Rag 须挂靠 V-ATPase 方能工作：腔内氨基酸经 SLC38A9 传出信号，泵的构象状态为生长信号盖章放行', { size: 9, fill: C.accD, maxW: 304, lh: 19 })
}

export default scene({
  title: '动物细胞的 V-ATPase：酸化岗位全景',
  subtitle: '溶酶体 pH 4.5–5.0 由 V-ATPase 与 ClC-7（约 2Cl^{-}:1H^{+}）电荷分流协同达成；内体阶梯酸化（早期约 6.0 → 晚期约 5.0）是货物分选条码，M6PR 经 retromer 逃逸回收；破骨细胞褶皱缘把泵搬上质膜、溶蚀腔酸化至约 4.5（TCIRG1/CLCN7 突变致石骨症）；肾闰细胞顶端泌 H^{+}（ATP6V1B1/ATP6V0A4 突变致 dRTA）；肿瘤酸化微环境与 mTORC1 看门人为两端延伸',
  draw,
})
