// mt ch7-s3 植物液泡双引擎：V-ATPase＋V-PPase · 液泡 pH 与花色 · 离子库 · AVP1 与逆境农艺
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、液泡双引擎总装：V-ATPase＋V-PPase =================
  b.panel(30, 132, 660, 455, { title: '一、液泡双引擎总装：V-ATPase＋V-PPase' })
  // 液泡腔（顶）
  b.text(60, 186, '液泡腔', { size: 10.5, fill: C.mute })
  b.ion(120, 172, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.tag(310, 176, '液泡 pH≈5.5', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 12, weight: 700 })
  b.text(146, 192, 'c 环', { size: 9, weight: 600, fill: C.rnaD })
  // 液泡膜（tonoplast）
  b.bilayer(60, 200, 560, { h: 40 })
  b.line(100, 258, 100, 244, { stroke: C.faint, sw: 1 })
  b.text(60, 262, '液泡膜（tonoplast）', { size: 9, fill: C.mute })
  b.text(60, 286, '细胞质 pH≈7.0–7.2', { size: 10, fill: C.mute })
  // —— 左引擎：V-ATPase ——
  b.rect(150, 204, 72, 48, { fill: C.rnaL, stroke: C.rna, sw: 2.2, rx: 9 })
  for (let i = 0; i < 5; i++) b.line(162 + i * 13, 210, 162 + i * 13, 246, { stroke: C.rna, sw: 1, opacity: 0.45 })
  b.rect(224, 202, 40, 52, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 6 })
  b.ctext(244, 232, 'a', { size: 13, weight: 700, fill: C.proD })
  b.rect(184, 252, 9, 78, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.spline([[236, 266], [246, 300], [222, 336]], { stroke: C.pro, sw: 2.5 })
  b.text(254, 300, '外周柄 E_{3}G_{3}', { size: 8.5, weight: 600, fill: C.proD })
  const hexV: [number, number, string][] = [
    [222, 360, 'B'], [205, 331, 'A'], [171, 331, 'B'], [154, 360, 'A'], [171, 389, 'B'], [205, 389, 'A'],
  ]
  for (const [cx, cy, t] of hexV) {
    const isA = t === 'A'
    b.circle(cx, cy, 17, { fill: isA ? C.enzL : C.accL, stroke: isA ? C.enz : C.acc, sw: 1.8 })
    b.ctext(cx, cy + 4, t, { size: 11, weight: 700, fill: isA ? C.enzD : C.accD })
  }
  b.tag(108, 322, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700 })
  b.arrow(140, 318, 162, 344, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.ion(300, 264, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(286, 258, 266, 242, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(244, 202, 244, 182, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(244, 168, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.text(60, 432, 'V-ATPase（VHA 基因家族）', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(60, 452, 'VHA-a2/a3 定位液泡膜（a1 驻高尔基体/TGN）——全酶的亚细胞定位由 VHA-a 异构体决定', { size: 9, fill: C.sub, maxW: 286, lh: 18 })
  // —— 右引擎：V-PPase ——
  b.rect(452, 206, 36, 48, { fill: C.dnaL, stroke: C.dna, sw: 2.2, rx: 7 })
  b.rect(492, 206, 36, 48, { fill: C.dnaL, stroke: C.dna, sw: 2.2, rx: 7 })
  b.ctext(470, 226, 'AVP1', { size: 7.5, weight: 700, fill: C.dnaD })
  b.ctext(510, 226, 'AVP1', { size: 7.5, weight: 700, fill: C.dnaD })
  b.arrow(490, 202, 490, 182, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(490, 170, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.tag(560, 180, 'ΔG≈−27 kJ/mol', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 9.5, weight: 700 })
  b.tag(415, 322, 'PPi', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10, weight: 700 })
  b.arrow(435, 310, 463, 258, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.arrow(513, 258, 537, 310, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.tag(555, 322, '2 Pi', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10, weight: 700 })
  b.text(415, 360, 'V-PPase（基因 AVP1）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(415, 380, '同源二聚体·约 77 kDa 单肽 ×2', { size: 9, fill: C.sub })
  b.wtext(415, 400, '动物以可溶性焦磷酸酶就地拆解 PPi，基因组从无膜上 V-PPase——双引擎是植物独门配置', { size: 9, fill: C.badD, maxW: 246, lh: 17 })
  // 廉价能源注记
  b.rect(390, 430, 272, 106, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(404, 452, '「廉价能源」：废能回收', { size: 11, weight: 700, fill: C.sub })
  b.wtext(404, 474, 'PPi 是纤维素、蛋白质、核酸等合成反应的副产品，清除它本身就是必需——积累将抑制合成代谢；把水解偶联上泵氢，等于把「废能」回收成梯度，不额外花一个 ATP', { size: 9, fill: C.sub, maxW: 244, lh: 19 })
  // 底部分工总结
  b.wtext(46, 552, '两引擎分工：幼根、茎尖等旺盛合成 PPi 之处 V-PPase 出力多，胁迫使 V-ATPase 占主导；V-ATPase 液泡亚基突变与 avp1 突变各有严重生长缺陷，双突变在拟南芥致死——液泡酸化是不可谈判的生命线', { size: 9.5, fill: C.sub, maxW: 620, lh: 21 })

  // ================= 二、液泡 pH 与花色 =================
  b.panel(710, 132, 660, 455, { title: '二、液泡 pH 与花色：花色素苷的仪表盘' })
  b.text(726, 184, '花色素苷颜色随液泡 pH 移动', { size: 11, weight: 700, fill: C.enzD })
  // pH-花色梯度条
  const segs: [number, string, string][] = [
    [210, C.bad, '3'], [250, C.rose, '4'], [290, C.enz, '5'], [330, C.pro, '6'], [370, C.acc, '7'],
  ]
  for (const [sy, col] of segs) b.rect(756, sy, 44, 40, { fill: col })
  b.rect(756, 210, 44, 200, { fill: 'none', stroke: C.sub, sw: 1.5 })
  for (const [sy, , lb] of segs) {
    b.line(746, sy, 756, sy, { stroke: C.sub, sw: 1.4 })
    b.etext(742, sy + 3.5, lb, { size: 9, fill: C.mute })
  }
  b.line(756, 410, 756, 410, { stroke: C.sub, sw: 1.4 })
  b.etext(742, 413.5, 'pH', { size: 8, fill: C.mute })
  b.text(816, 240, '偏酸趋红（pH≈3–4）', { size: 9.5, weight: 700, fill: C.badD })
  b.text(816, 385, '偏碱转蓝（pH≥6）', { size: 9.5, weight: 700, fill: C.accD })
  b.line(756, 310, 800, 310, { stroke: C.ink, sw: 1.2, dash: '3 3' })
  b.line(800, 310, 836, 310, { stroke: C.faint, sw: 1 })
  b.tag(888, 310, '典型液泡 pH≈5.5', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 9.5, weight: 700 })
  b.wtext(726, 440, '花色的三条杠杆：液泡 pH 之外，共色效应（与黄酮类共色）与金属螯合亦修饰呈色——pH 却是最容易育种上手的一条：蓝色系月季与绣球的商品化多为液泡酸碱度的精细微调', { size: 9.5, fill: C.sub, maxW: 214, lh: 21 })
  // —— 右：牵牛花蓝变细胞 ——
  b.text(968, 184, '牵牛花蓝变：液泡适度碱化', { size: 11, weight: 700, fill: C.accD })
  b.circle(1090, 310, 92, { fill: C.panel, stroke: C.sub, sw: 2.2 })
  b.circle(1090, 310, 64, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.tag(1090, 250, '液泡 pH↑ 转蓝', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 9.5, weight: 700 })
  b.rect(1150, 288, 44, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 5 })
  b.ctext(1172, 305, 'NHX1', { size: 9, weight: 700, fill: C.dnaD })
  b.ctext(1172, 320, 'Na^{+}/H^{+}', { size: 7.5, fill: C.dnaD })
  b.ion(1240, 340, 'Na^{+}', { r: 11, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8 })
  b.arrow(1226, 334, 1198, 318, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(1240, 360, 'Na^{+} 入泡', { size: 8.5, weight: 600, fill: C.dnaD })
  b.arrow(1198, 296, 1226, 282, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(1240, 276, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ctext(1240, 262, 'H^{+} 出泡', { size: 8.5, weight: 600, fill: C.warnD })
  b.ctext(1090, 396, '花冠细胞', { size: 10.5, weight: 700, fill: C.sub })
  b.text(1180, 378, 'NHX1 活性改变→液泡「调碱」', { size: 9, weight: 600, fill: C.dnaD })
  b.wtext(968, 440, '典型液泡 pH≈5.5 比溶酶体温和，却足以驱动液泡膜上成排的 H^{+} 偶联转运体（次级转运的主角）；NHX1 型 Na^{+}/H^{+} 反向转运体活性改变让液泡「调碱」，蓝色随之显影；绣球花的蓝变同样伴随液泡碱化，另有铝离子与色素的配合成蓝', { size: 9.5, fill: C.sub, maxW: 380, lh: 21 })
  b.wtext(726, 520, '液泡内容物随细胞命运高度分型：柠檬果汁细胞 pH≈2.5、甜菜根囤红甜菜素、盐生植物设「盐泡」——同一区室的 pH 可在约 2.5–7 间随物种与组织重塑，是可调参数而非常数；成熟植物细胞中液泡可占体积 80%–90%', { size: 9.5, fill: C.sub, maxW: 620, lh: 21 })

  // ================= 三、液泡：离子库与营养库 =================
  b.panel(30, 602, 660, 383, { title: '三、液泡：离子库与营养库' })
  b.text(46, 676, '细胞质', { size: 9.5, fill: C.mute })
  b.circle(230, 790, 95, { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(231, 791, '液泡', { size: 11.5, weight: 700, fill: C.accD })
  b.ion(180, 730, 'K^{+}', { r: 14, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10 })
  b.ctext(180, 760, '气孔膨压', { size: 8.5, fill: C.sub })
  b.ion(282, 730, 'Na^{+}', { r: 14, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 9 })
  b.ctext(282, 760, '盐分隔离', { size: 8.5, fill: C.sub })
  b.ion(180, 822, 'Ca^{2+}', { r: 14, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 9 })
  b.ctext(180, 852, '多余封存', { size: 8.5, fill: C.sub })
  b.ion(282, 822, 'NO_{3}^{-}', { r: 15, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5 })
  b.ctext(282, 852, '氮素银行', { size: 8.5, fill: C.sub })
  // AtCLCa 反向装填
  b.rect(318, 768, 46, 46, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 6 })
  b.ctext(341, 786, 'AtCLCa', { size: 8, weight: 700, fill: C.dnaD })
  b.ctext(341, 800, 'NO_{3}^{-}/H^{+}', { size: 7, fill: C.dnaD })
  b.ctext(358, 830, '硝酸盐/H^{+} 反向装填', { size: 8.5, weight: 600, fill: C.dnaD })
  b.ion(408, 792, 'NO_{3}^{-}', { r: 13, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5 })
  b.arrow(392, 790, 366, 788, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(364, 766, 392, 750, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(408, 744, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  // 右上注记
  b.wtext(470, 660, 'AtCLCa 属 CLC「通道」家族，却以硝酸盐/H^{+} 反向转运体的方式工作——通道家族演化为转运体的活例', { size: 9, fill: C.sub, maxW: 200, lh: 18 })
  // 白天/夜间氮素班表
  b.rect(470, 716, 206, 76, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.circle(500, 748, 10, { fill: C.warn })
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4
    b.line(500 + 12 * Math.cos(a), 748 + 12 * Math.sin(a), 500 + 16 * Math.cos(a), 748 + 16 * Math.sin(a), { stroke: C.warn, sw: 1.6 })
  }
  b.text(518, 746, '白天：光合满负荷', { size: 10, weight: 700, fill: C.warnD })
  b.wtext(482, 768, '吸收的硝酸盐边同化边入库', { size: 9, fill: C.warnD, maxW: 182, lh: 17 })
  b.arrow(560, 798, 560, 812, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(586, 812, 586, 798, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(612, 808, '光暗循环', { size: 8.5, fill: C.mute })
  b.rect(470, 818, 206, 80, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 8 })
  b.circle(500, 849, 10, { fill: '#94a3b8' })
  b.circle(505, 845, 8.5, { fill: C.panelB })
  b.text(518, 847, '夜间：光合停摆', { size: 10, weight: 700, fill: C.sub })
  b.wtext(482, 869, '液泡硝酸盐回吐胞质——「夜间氮素回流」，班表与光暗同步', { size: 9, fill: C.sub, maxW: 182, lh: 17 })
  // 底部注释
  b.wtext(46, 912, 'K^{+} 囤于泡内备用，气孔保卫细胞的膨压开关即靠它；盐胁迫下 Na^{+} 被封入液泡，使胞质酶免于钠害；Ca^{2+} 作为信号分子须把胞质浓度压在 10^{-7}–10^{-6} mol/L 量级，多余者入泡封存', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  b.wtext(370, 912, '硝酸盐是「氮素银行」：浓度可达数十毫摩尔、占全株可溶性氮相当份额，昼夜间歇仍稳定同化；CAM 植物把液泡用作「酸电池」——夜间囤苹果酸（pH 可降至约 3）、白天释放脱羧', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })

  // ================= 四、逆境与农艺：AVP1 的多重身份 =================
  b.panel(710, 602, 660, 383, { title: '四、逆境与农艺：AVP1 的多重身份' })
  // 左：盐胁迫下液泡膜 mini
  b.text(740, 652, '液泡', { size: 9.5, fill: C.mute })
  b.bilayer(740, 672, 230, { h: 24 })
  b.ion(778, 648, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.arrow(778, 666, 778, 659, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.ion(870, 648, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.arrow(870, 666, 870, 659, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.tag(824, 644, 'ΔpH↑', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 9, weight: 700 })
  b.rect(760, 668, 36, 32, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 6 })
  for (let i = 0; i < 3; i++) b.line(768 + i * 10, 672, 768 + i * 10, 696, { stroke: C.rna, sw: 1, opacity: 0.45 })
  b.rect(798, 666, 28, 36, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.rect(775, 698, 7, 10, { fill: C.accL, stroke: C.acc, sw: 1.2 })
  const hexM: [number, number, string][] = [
    [795, 730, 'B'], [787, 715, 'A'], [769, 715, 'B'], [761, 730, 'A'], [769, 745, 'B'], [787, 745, 'A'],
  ]
  for (const [cx, cy, t] of hexM) {
    const isA = t === 'A'
    b.circle(cx, cy, 10, { fill: isA ? C.enzL : C.accL, stroke: isA ? C.enz : C.acc, sw: 1.4 })
    b.ctext(cx, cy + 3, t, { size: 7.5, weight: 700, fill: isA ? C.enzD : C.accD })
  }
  b.tag(730, 700, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 700 })
  b.arrow(748, 704, 764, 720, { stroke: C.rna, sw: 1.4, marker: 'rna' })
  b.rect(850, 668, 40, 32, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(870, 688, 'AVP1', { size: 8.5, weight: 700, fill: C.dnaD })
  b.tag(852, 736, 'PPi', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8.5, weight: 700 })
  b.arrow(862, 726, 868, 704, { stroke: C.enz, sw: 1.4, marker: 'enz' })
  b.rect(905, 668, 44, 32, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(927, 680, 'NHX1', { size: 8.5, weight: 700, fill: C.proD })
  b.ctext(927, 693, 'Na^{+}/H^{+}', { size: 7, fill: C.proD })
  b.ion(952, 730, 'Na^{+}', { r: 11, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8 })
  b.arrow(942, 721, 934, 702, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.arrow(918, 702, 908, 718, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.ion(902, 730, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.text(740, 768, '细胞质', { size: 9.5, fill: C.mute })
  // 右：盐胁迫能账
  b.text(1000, 648, '盐胁迫的能账：ΔpH 为 NHX1 供能', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(1000, 672, '盐胁迫下液泡酸化进一步增强：V-ATPase 占主导、AVP1 表达上调（战时增供），双泵一起把 ΔpH 再抬一档', { size: 9.5, fill: C.sub, maxW: 350, lh: 21 })
  b.wtext(1000, 723, 'ΔpH 越陡，NHX1 把 Na^{+} 隔离入泡的能力越强——细胞得以「以钠代钾」维持渗透压而不伤胞质酶，这是植物耐盐叙事的分子起点', { size: 9.5, fill: C.sub, maxW: 350, lh: 21 })
  // 底部双框
  b.rect(726, 790, 300, 124, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(740, 812, 'avp1 突变体的三重受挫', { size: 11, weight: 700, fill: C.badD })
  b.wtext(740, 836, '液泡酸化与耐盐受挫；生长素极性运输亦受损——质子梯度为 PIN 蛋白的内体循环供力、PPi 清除为膜融合扫障；生长、向性与逆境响应汇于同一台泵', { size: 9.5, fill: C.badD, maxW: 272, lh: 21 })
  b.rect(1046, 790, 308, 124, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(1060, 812, 'AVP1 过表达：抗旱耐盐证据', { size: 11, weight: 700, fill: C.okD })
  b.wtext(1060, 836, '转基因拟南芥、番茄与棉花在干旱与盐渍下普遍更耐——膨压维持、离子区隔与气孔调控全面受益；「加强液泡引擎」由此成为抗旱耐盐育种的可行抓手', { size: 9.5, fill: C.okD, maxW: 280, lh: 21 })
  b.text(726, 950, 'NHX1 转基因耐盐品系的田间表现，也多与液泡泵力的增强互为表里', { size: 9.5, weight: 600, fill: C.sub })
}

export default scene({
  title: '植物液泡的双引擎：V-ATPase 与 V-PPase',
  subtitle: '植物液泡装两台引擎：与动物同源的 V-ATPase（VHA 基因家族全套亚基）之外，独有水解焦磷酸的 V-PPase（AVP1，约 77 kDa 同源二聚体）——把合成反应副产物 PPi（ΔG 约 −27 kJ/mol）回收为跨膜 H^{+} 梯度的「廉价能源」；液泡 pH 约 5.5 驱动花色素苷呈色与离子库装填（AtCLCa 反向装填、夜间氮素回流），盐胁迫下酸化增强为 NHX1 供能，AVP1 过表达抗旱耐盐',
  draw,
})
