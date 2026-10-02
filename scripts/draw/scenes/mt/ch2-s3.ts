// mt ch2-s3 通道超家族分类（VGL 6TMS 树 + Cys-loop 五聚体/谷氨酸受体 + Kir/K2P + 七门第总表 + ClC/间隙连接）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、VGL 超家族：4×6TMS 标准骨架 ============
  b.panel(30, 132, 660, 330, { title: '一、电压门控样超家族（VGL）：4×6TMS 标准骨架' })
  // —— 左：单亚基 6TMS 拓扑 ——
  b.ctext(185, 192, '单亚基 6TMS 拓扑', { size: 12.5, weight: 700, fill: C.sub })
  b.bilayer(65, 262, 255)
  b.rect(75, 240, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(110, 240, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(145, 240, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(182, 240, 12, 54, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.rect(225, 240, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(268, 240, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.path('M236,244 L236,261 Q250,275 264,261 L264,244', { stroke: C.dna, sw: 2.4 })
  const sL: Array<[number, string]> = [[80, 'S1'], [115, 'S2'], [150, 'S3'], [188, 'S4'], [230, 'S5'], [273, 'S6']]
  sL.forEach(([x, s]) => b.ctext(x, 234, s, { size: 9, fill: C.mute }))
  ;[248, 262, 276, 290].forEach(y => b.ion(188, y, '+', { r: 4.5, fill: C.bad, stroke: C.bad, tfill: '#ffffff', size: 8 }))
  b.text(48, 250, '胞外', { size: 10, fill: C.mute })
  b.text(48, 312, '胞内', { size: 10, fill: C.mute })
  // 域括注
  b.line(75, 304, 194, 304, { stroke: C.faint, sw: 1.2 })
  b.ctext(134, 320, 'S1–S4 传感器域', { size: 10.5, weight: 600, fill: C.accD })
  b.line(225, 304, 278, 304, { stroke: C.faint, sw: 1.2 })
  b.ctext(251, 320, 'S5–P 环–S6 孔道域', { size: 10.5, weight: 600, fill: C.dnaD })
  // —— 左下：四聚体顶视 ——
  b.ctext(184, 336, '四聚体顶视（各出一 P 环）', { size: 10.5, weight: 600, fill: C.sub })
  const tet: Array<[number, number]> = [[150, 358], [218, 358], [150, 410], [218, 410]]
  tet.forEach(([x, y]) => b.circle(x, y, 17, { fill: C.proL, stroke: C.pro, sw: 1.8 }))
  b.circle(184, 384, 9, { fill: C.accL, stroke: C.acc, sw: 2 })
  ;[[163, 369, 176, 379], [205, 369, 192, 379], [163, 399, 176, 389], [205, 399, 192, 389]].forEach(([x1, y1, x2, y2]) =>
    b.line(x1, y1, x2, y2, { stroke: C.faint, sw: 1.2 })
  )
  ;[[166, 366], [202, 366], [166, 402], [202, 402]].forEach(([x, y]) => b.circle(x, y, 3, { fill: C.dna }))
  b.ctext(184, 442, 'Nav/Cav 为单肽四重复域；Kv 为真四聚体', { size: 10.5, fill: C.mute })
  // —— 右：六大支系树 ——
  b.ctext(507, 192, '六大支系：同一底盘、各自发动机', { size: 12.5, weight: 700, fill: C.sub })
  b.line(358, 210, 358, 356, { stroke: C.sub, sw: 2.2 })
  const branches: Array<[string, string, string]> = [
    ['Nav', 'Na^{+} 通道 · 四重复域单肽', C.acc],
    ['Cav', 'Ca^{2+} 通道 · 同构四重复域', C.bad],
    ['Kv', '真四聚体 · Shaker 原型（果蝇筛选）', C.dna],
    ['CNG/HCN', '环核苷酸门控 · 孔区反转', C.pro],
    ['TRP', '动物约 28 个成员 · 植物缺乏', C.warn],
    ['TPC', '6TMS 折半×2 · 液泡/溶酶体', C.enz],
  ]
  branches.forEach(([name, desc, col], i) => {
    const y = 226 + i * 26
    b.circle(358, y, 3.5, { fill: C.sub })
    b.line(362, y, 370, y, { stroke: C.faint, sw: 1.4 })
    b.text(376, y + 4, name, { size: 12, weight: 700, fill: col })
    b.text(470, y + 4, desc, { size: 11, fill: C.sub })
  })
  b.text(360, 392, 'Kv 命名源于果蝇饱和突变筛选，膜转运遗传学的黄金遗产。', { size: 10.5, fill: C.mute })
  b.wtext(360, 414, 'GYG 签名与两道闸反复重演，传感器灵敏度与失活速率在各支系自由演化——同一底盘、不同发动机与变速箱。', { size: 10.5, fill: C.sub, maxW: 300, lh: 18 })

  // ============ 二、Cys-loop 五聚体与谷氨酸受体 ============
  b.panel(710, 132, 660, 330, { title: '二、Cys-loop 五聚体与谷氨酸受体：快突触与再就业' })
  // —— 左：Cys-loop 五聚体顶视 ——
  b.ctext(845, 190, 'Cys-loop 五聚体（5×4TMS）', { size: 12.5, weight: 700, fill: C.proD })
  b.tag(965, 188, '动物独有', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, pad: 10, minh: 19 })
  const pent: Array<[number, number]> = [
    [860, 236], [896.1, 268.3], [882.3, 310.7], [837.7, 310.7], [823.9, 268.3],
  ]
  pent.forEach(([x, y]) => b.circle(x, y, 16, { fill: C.proL, stroke: C.pro, sw: 1.8 }))
  b.circle(860, 272, 9, { fill: C.accL, stroke: C.acc, sw: 2 })
  ;[[889.4, 231.6], [907.5, 287.5], [860, 322], [812.5, 287.5], [830.6, 231.6]].forEach(([x, y]) =>
    b.circle(x, y, 3.5, { fill: C.enz })
  )
  b.text(935, 234, '二硫环', { size: 9.5, fill: C.enzD })
  b.line(932, 237, 894, 233, { stroke: C.faint, sw: 1 })
  b.text(726, 344, '每亚基 4TMS · N 端胞外域因保守二硫环得名', { size: 11, fill: C.sub })
  b.text(726, 366, '闸门＝五个 M2 螺旋中央的疏水环', { size: 11, fill: C.sub })
  b.text(726, 388, '配体结合令亚基扭转约 15°——数十 μs 孔开（快突触）', { size: 11, fill: C.sub })
  b.text(726, 411, 'nAChR · 5-HT_{3}——阳离子 · 兴奋性', { size: 11, fill: C.sub })
  b.text(726, 434, 'GABA_{A} · GlyR——Cl^{-} · 抑制性', { size: 11, fill: C.sub })
  b.text(726, 457, '植物没有此家族——快信号改走 GLR 与电位传播', { size: 11, fill: C.okD, weight: 600 })
  // —— 右：谷氨酸受体 3TMS＋P 环 ——
  b.ctext(1190, 190, '谷氨酸受体家族（3TMS＋P 环）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.bilayer(1060, 264, 250)
  b.rect(1090, 242, 11, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1150, 242, 11, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1210, 242, 11, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.path('M1113,246 L1113,262 Q1126,276 1139,262 L1139,246', { stroke: C.dna, sw: 2.4 })
  b.ellipse(1126, 222, 24, 12, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.text(1180, 226, '配体结合域', { size: 10, fill: C.proD })
  b.line(1176, 223, 1152, 222, { stroke: C.faint, sw: 1 })
  const mL: Array<[number, string]> = [[1095, 'M1'], [1126, 'P 环'], [1155, 'M3'], [1215, 'M4']]
  mL.forEach(([x, s]) => b.ctext(x, 308, s, { size: 9.5, fill: C.mute }))
  b.text(1030, 252, '胞外', { size: 10, fill: C.mute })
  b.text(1030, 318, '胞内', { size: 10, fill: C.mute })
  b.ctext(1185, 328, '四聚体组装（省料设计）', { size: 10, fill: C.mute })
  b.wtext(1026, 350, '亚基仅 3 个跨膜段：M1 与 M3 之间的肽链折返回折两次、不跨膜，与 M2 一起构成 P 环——省料设计、四聚体组装', { size: 11, fill: C.sub, maxW: 322, lh: 18 })
  b.text(1026, 392, '动物 iGluR 三型：AMPA（Na^{+}/K^{+} 通透 · 快电流主力）、KA', { size: 11, fill: C.sub })
  b.text(1026, 415, 'NMDA——甘氨酸共激动；Mg^{2+} 堵孔需去极化解除、Ca^{2+} 通透', { size: 11, fill: C.sub })
  b.text(1026, 438, '（电压＋配体双重门控：学习记忆的分子枢纽）', { size: 11, fill: C.sub })
  b.text(1026, 459, '植物 GLR：配体谱放宽到多种氨基酸——防御钙信号与根尖发育', { size: 11, fill: C.okD, weight: 600 })

  // ============ 三、Kir 与 K2P ============
  b.panel(30, 477, 660, 275, { title: '三、Kir 与 K2P：K^{+} 专用小骨架——极简与加倍' })
  // —— 左列：Kir ——
  b.text(46, 523, '① Kir：内向整流 K^{+} 通道（4×2TMS）', { size: 13, weight: 700, fill: C.proD })
  b.text(46, 546, '每亚基 M1–P 环–M2 · 无电压传感器', { size: 11, fill: C.mute })
  b.bilayer(60, 610, 170)
  b.rect(100, 588, 11, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(170, 588, 11, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.path('M117,592 L117,609 Q131,623 145,609 L145,592', { stroke: C.dna, sw: 2.4 })
  const kL: Array<[number, string]> = [[105, 'M1'], [131, 'P 环'], [175, 'M2']]
  kL.forEach(([x, s]) => b.ctext(x, 583, s, { size: 9.5, fill: C.mute }))
  b.text(48, 598, '胞外', { size: 10, fill: C.mute })
  b.text(48, 653, '胞内', { size: 10, fill: C.mute })
  b.ion(115, 670, 'Mg^{2+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.tag(163, 670, '多胺', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10, pad: 9, minh: 18 })
  b.arrow(118, 658, 128, 646, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(158, 658, 142, 646, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.text(46, 693, 'Mg^{2+}/多胺从胞内堵孔＝内向整流（整流≠门控）', { size: 11, fill: C.sub })
  b.text(46, 716, 'Kir2.x 锚定静息电位 · K_{ATP}＋SUR 译代谢为电', { size: 11, fill: C.sub })
  b.text(46, 739, '植物没有 Kir——锚定任务交给 H^{+} 泵与 Shaker', { size: 11, fill: C.okD, weight: 600 })
  // —— 右列：K2P ——
  b.text(340, 523, '② K2P：双孔区背景漏通道（2×4TMS）', { size: 13, weight: 700, fill: C.proD })
  b.text(340, 546, '每亚基 4TMS 含两个 P 环 · 二聚体拼四 P 环', { size: 11, fill: C.mute })
  b.bilayer(360, 610, 280)
  b.rect(400, 588, 10, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(445, 588, 10, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(505, 588, 10, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(550, 588, 10, 54, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.path('M415,592 L415,609 Q428,623 441,609 L441,592', { stroke: C.dna, sw: 2.4 })
  b.path('M515,592 L515,609 Q528,623 541,609 L541,592', { stroke: C.dna, sw: 2.4 })
  const tL: Array<[number, string]> = [[405, 'T1'], [450, 'T2'], [510, 'T3'], [555, 'T4']]
  tL.forEach(([x, s]) => b.ctext(x, 583, s, { size: 9.5, fill: C.mute }))
  b.ctext(428, 656, 'P_{1}', { size: 9.5, fill: C.dnaD })
  b.ctext(528, 656, 'P_{2}', { size: 9.5, fill: C.dnaD })
  b.text(348, 598, '胞外', { size: 10, fill: C.mute })
  b.text(348, 653, '胞内', { size: 10, fill: C.mute })
  b.ion(428, 572, 'K^{+}', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(428, 581, 428, 594, { stroke: C.pro, sw: 1.4, dash: '4 3', marker: 'pro' })
  b.ion(528, 572, 'K^{+}', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(528, 581, 528, 594, { stroke: C.pro, sw: 1.4, dash: '4 3', marker: 'pro' })
  b.text(340, 693, '多数常开——背景漏通道，负责设定静息电位', { size: 11, fill: C.sub })
  b.text(340, 716, 'TREK-1 · TRAAK 随温度与机械刺激调门（温痛觉新贵）', { size: 11, fill: C.sub })
  b.text(340, 739, '植物同源 TPK：驻扎液泡膜管理 K^{+} 平衡', { size: 11, fill: C.okD, weight: 600 })

  // ============ 四、七个门第总表 ============
  b.panel(710, 477, 660, 275, { title: '四、七个门第总表：拓扑学分类' })
  b.table(726, 512, 628, {
    headers: ['超家族', '拓扑', '代表成员', '动植物格局'],
    colW: [120, 112, 236, 160],
    rowH: 24,
    fontSize: 11.5,
    rows: [
      ['VGL', '4×6TMS', 'Nav/Cav/Kv/CNG/HCN/TRP/TPC', '共有，组成各异'],
      ['Cys-loop', '5×4TMS', 'nAChR/GABA_{A}/甘氨酸/5-HT_{3}', '动物独有'],
      ['谷氨酸受体', '3TMS＋P 环', 'AMPA/NMDA/KA 与植物 GLR', '同源分化'],
      ['Kir', '4×2TMS', 'Kir2.x、K_{ATP}', '动物主力，植物缺'],
      ['K2P', '2×4TMS', 'TREK/TRAAK 与植物 TPK', '同源，定位用法不同'],
      ['ClC', '2×约 18 螺旋', 'ClC-0/ClC-K 与 AtCLCa', '共有，部分已转运体化'],
      ['间隙连接', '6×4TMS', 'connexin 与胞间连丝', '功能对应，结构不同源'],
    ],
  })
  b.text(726, 736, '两条演化路线：模块重复（VGL 四重复域、K2P 双 P 环）×寡聚协作（Cys-loop 五聚体）', { size: 10.5, fill: C.sub })

  // ============ 五、ClC 与间隙连接：另类解法 ============
  b.panel(30, 767, 1340, 218, { title: '五、ClC 与间隙连接：通道的另类解法' })
  // —— ClC：双孔二聚体 ——
  b.ctext(258, 812, 'ClC：双孔二聚体（每亚基约 18 螺旋）', { size: 12.5, weight: 700, fill: C.sub })
  b.bilayer(60, 890, 180)
  b.rect(85, 862, 62, 88, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 20 })
  b.rect(160, 862, 62, 88, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 20 })
  b.polygon([[106, 862], [126, 862], [122, 884], [122, 928], [126, 950], [106, 950], [110, 928], [110, 884]], { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.polygon([[181, 862], [201, 862], [197, 884], [197, 928], [201, 950], [181, 950], [185, 928], [185, 884]], { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ion(116, 848, 'Cl^{-}', { r: 8, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.ion(191, 848, 'Cl^{-}', { r: 8, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.arrow(116, 858, 116, 955, { stroke: C.acc, sw: 1.4, dash: '5 4', marker: 'acc' })
  b.arrow(191, 858, 191, 955, { stroke: C.acc, sw: 1.4, dash: '5 4', marker: 'acc' })
  b.ctext(150, 968, '二聚体＝双独立孔', { size: 10.5, fill: C.mute })
  b.text(260, 845, '动物 9 个基因：ClC-0（电鳐电器官）', { size: 10.5, fill: C.sub })
  b.text(260, 866, '　ClC-1（骨肌膜）· ClC-K（肾髓质浓缩）', { size: 10.5, fill: C.sub })
  b.text(260, 889, '改行：动物 ClC-3/4/5 与植物 AtCLCa', { size: 10.5, fill: C.warnD, weight: 600 })
  b.text(260, 912, '实为 Cl^{-}/H^{+} 或 NO_{3}^{-}/H^{+} 反向转运体', { size: 10.5, fill: C.warnD })
  b.text(260, 935, '——通道与转运体的边界被进化亲手抹掉', { size: 10.5, fill: C.warnD })
  b.text(260, 957, '与「多亚基围一孔」的方案背道而驰', { size: 10.5, fill: C.mute })
  // —— 间隙连接 ——
  b.ctext(685, 812, '间隙连接：半通道对接成电突触', { size: 12.5, weight: 700, fill: C.accD })
  b.bilayer(500, 880, 180)
  b.bilayer(500, 916, 180)
  b.polygon([[575, 870], [630, 870], [620, 903], [585, 903]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[585, 907], [620, 907], [630, 940], [575, 940]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(597, 868, 10, 76, { fill: '#ffffff', stroke: C.acc, sw: 1.3 })
  b.ion(602, 854, 'K^{+}', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(602, 864, 602, 944, { stroke: C.pro, sw: 1.4, dash: '4 3', marker: 'pro' })
  b.text(505, 868, '细胞 A', { size: 9.5, fill: C.mute })
  b.text(505, 946, '细胞 B', { size: 9.5, fill: C.mute })
  b.text(632, 902, '间隙 2–4 nm', { size: 9.5, fill: C.mute })
  b.line(628, 899, 612, 903, { stroke: C.faint, sw: 1 })
  b.ctext(602, 958, 'connexin 6×4TMS ×2', { size: 10, fill: C.mute })
  b.wtext(700, 845, '人类 21 个基因；半通道两两对接', { size: 10.5, fill: C.sub, maxW: 185, lh: 18 })
  b.wtext(700, 868, '电突触让相邻细胞直通电流与小分子，细胞群同步放电', { size: 10.5, fill: C.sub, maxW: 185, lh: 18 })
  b.wtext(700, 910, '植物的对应结构是胞间连丝（右）——结构不同源', { size: 10.5, fill: C.okD, maxW: 185, lh: 18 })
  // —— 胞间连丝 ——
  b.ctext(1127, 812, '植物对应：胞间连丝（plasmodesmata）', { size: 12.5, weight: 700, fill: C.okD })
  b.rect(925, 845, 105, 108, { fill: C.panelB, fillOp: 0.6, stroke: C.line, sw: 1.2 })
  b.rect(1220, 845, 105, 108, { fill: C.panelB, fillOp: 0.6, stroke: C.line, sw: 1.2 })
  b.rect(1030, 845, 190, 108, { fill: '#fef3c7', fillOp: 0.8, stroke: C.warn, sw: 1.8 })
  b.rect(960, 884, 330, 34, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 17 })
  b.rect(960, 893, 330, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.2, rx: 8 })
  b.path('M925,901 q9,-7 18,0 q9,7 18,0', { stroke: C.rna, sw: 2.2 })
  b.path('M1290,901 q9,-7 18,0 q9,7 18,0', { stroke: C.rna, sw: 2.2 })
  b.ctext(977, 868, '细胞 A', { size: 9.5, fill: C.mute })
  b.ctext(1272, 868, '细胞 B', { size: 9.5, fill: C.mute })
  b.ctext(1125, 868, '细胞壁', { size: 9.5, fill: C.warnD })
  b.tag(1000, 963, '胞间连丝', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, pad: 10, minh: 19 })
  b.text(1040, 968, '内质网穿过成鞘（desmotubule）· 细胞壁改造', { size: 10, fill: C.sub })
}

export default scene({
  title: '通道超家族分类：七个门第的拓扑谱系',
  subtitle: 'VGL 4×6TMS（S1–S4 传感器＋S5–P 环–S6 孔道）涵盖 Nav/Cav/Kv/CNG/HCN/TRP/TPC，TRP 动物扩张约 28 个而植物缺乏；Cys-loop 五聚体 5×4TMS 全为神经递质门控、动物独有；谷氨酸受体 3TMS＋P 环省料设计，动物 AMPA/NMDA/KA 与植物 GLR 同源分化；Kir 4×2TMS 无传感器靠 Mg^{2+}/多胺整流、K2P 2×4TMS 双 P 环常开；ClC 双孔二聚体部分成员已转运体化；connexin 间隙连接对植物胞间连丝——模块重复与寡聚协作两条演化路线',
  draw,
})
