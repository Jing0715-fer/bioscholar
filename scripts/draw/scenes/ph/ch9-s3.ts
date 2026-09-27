// ph ch9-s3 气体运输：氧解离曲线、位移因素、CO₂ 三形态与氯转移/何尔登效应
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、氧解离曲线主图 ============
  b.panel(30, 132, 700, 530, { title: '一、氧合血红蛋白解离曲线：S 形的装卸设计' })
  b.arrow(110, 555, 655, 555, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(110, 555, 110, 180, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(120, 177, '血氧饱和度 (%)', { size: 10, fill: C.sub })
  for (const [p, lb] of [[0, '0'], [20, '20'], [40, '40'], [60, '60'], [80, '80'], [100, '100']] as [number, string][]) {
    const tx = 110 + p * 4.818
    b.line(tx, 555, tx, 561, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 575, String(lb), { size: 9.5, fill: C.mute })
  }
  for (const [s, lb] of [[0, '0'], [25, '25'], [50, '50'], [75, '75'], [100, '100']] as [number, string][]) {
    const ty = 555 - s * 3.7
    b.line(104, ty, 110, ty, { stroke: C.sub, sw: 1.6 })
    b.etext(100, ty + 4, String(lb), { size: 9.5, fill: C.mute })
  }
  b.ctext(380, 599, 'PO_{2} (mmHg)', { size: 10.5, weight: 600, fill: C.sub })
  // S 形主曲线
  b.spline([[110, 555], [158.2, 506.9], [206.4, 425.5], [237.7, 370], [254.5, 344.1], [302.7, 277.5], [350.9, 244.2], [399.1, 222], [447.3, 209.1], [495.5, 200.5], [543.6, 196.1], [591.8, 192.4], [640, 190.6]], { stroke: C.bad, sw: 3 })
  // 肌红蛋白曲线（虚线）
  b.polyline([[110, 555], [119.6, 444], [124.5, 370], [134.1, 277.5], [148.5, 222], [167.8, 196.1], [187.1, 188.7]], { stroke: C.pro, sw: 1.8, dash: '6 4' })
  b.text(175, 245, '肌红蛋白 P_{50}≈3', { size: 9, fill: C.proD, weight: 600 })
  // 肺点
  b.line(591.8, 555, 591.8, 192.4, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(110, 192.4, 591.8, 192.4, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.circle(591.8, 192.4, 5, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.text(495, 182, '肺点：100→98%', { size: 9.5, weight: 700, fill: C.badD })
  // 组织点
  b.line(302.7, 555, 302.7, 277.5, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(110, 277.5, 302.7, 277.5, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.circle(302.7, 277.5, 5, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.text(330, 300, '组织点 40→75%（安静卸载约四分之一）', { size: 9.5, weight: 700, fill: C.enzD })
  b.text(330, 318, '运动组织 15–20 mmHg → 卸载超 80%', { size: 9, fill: C.mute })
  // P50
  b.line(237.7, 555, 237.7, 370, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(110, 370, 237.7, 370, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.text(150, 357, 'P_{50} 26–27', { size: 9.5, weight: 700, fill: C.sub })
  // 平台与陡坡
  b.text(160, 225, '平台＝装载保险（60→90%）', { size: 9.5, weight: 600, fill: C.sub })
  b.arrow(250, 230, 420, 209, { stroke: C.mute, sw: 1.3, marker: 'mute' })
  b.text(130, 430, '陡坡＝卸载利器', { size: 9.5, weight: 600, fill: C.sub })
  b.arrow(198, 428, 240, 396, { stroke: C.mute, sw: 1.3, marker: 'mute' })
  b.wtext(46, 624, 'S 形根源：Hb 四聚体变构协同（Hill 系数≈2.8）——首个 O_{2} 结合促 T→R 态转换、后续亚基亲和力逐个升高。', { size: 9.5, fill: C.sub, maxW: 660, lh: 14 })
  b.wtext(46, 644, '溶解态仅 1.5%（0.003 ml/dL/mmHg）却握有 PO_{2}「所有权」；结合态 98.5%＝1.34 ml O_{2}/g Hb × 15 g/dL ≈ 20 ml/dL 储备。', { size: 9.5, fill: C.sub, maxW: 660, lh: 14 })

  // ============ 二、曲线位移：波尔效应与镜像 ============
  b.panel(750, 132, 620, 530, { title: '二、曲线位移：波尔效应与它的镜像' })
  b.text(766, 186, '左移（P_{50}↓，卸氧吝啬）', { size: 11, weight: 700, fill: C.accD })
  b.text(1060, 186, '右移（P_{50}↑，卸氧增强）', { size: 11, weight: 700, fill: C.badD })
  const li = [
    'pH↑（碱中毒）/ 低温',
    '2,3-DPG↓（贮存血）',
    '胎儿 Hb：γ 链与 2,3-DPG 亲和弱——胎盘逆向取氧',
    'CO 中毒：亲和力 200–250 倍、剩余位点左移',
  ]
  const ri = [
    'pH↓、PCO_{2}↑——波尔效应本体',
    '温度↑（运动组织产热）',
    '2,3-DPG↑：高原适应、慢性缺氧',
    '酸、热与 CO_{2} 在需氧最大处就地促卸氧',
  ]
  li.forEach((s, i) => {
    b.circle(772, 218 + i * 27 - 3.5, 2.6, { fill: C.acc })
    b.wtext(782, 218 + i * 27, s, { size: 9.5, fill: C.sub, maxW: 268, lh: 14 })
  })
  ri.forEach((s, i) => {
    b.circle(1066, 218 + i * 27 - 3.5, 2.6, { fill: C.bad })
    b.wtext(1076, 218 + i * 27, s, { size: 9.5, fill: C.sub, maxW: 268, lh: 14 })
  })
  // 左右移迷你曲线（虚线＝正常，实线＝移位后）
  b.arrow(790, 455, 968, 455, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.arrow(790, 455, 790, 355, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.polyline([[790, 455], [810.4, 426.5], [832.5, 402.75], [866.5, 379], [909, 366.65], [960, 363.15]], { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.polyline([[790, 455], [801.9, 421.75], [815.5, 398], [841, 374.25], [875, 365.7], [917.5, 362.1]], { stroke: C.acc, sw: 2.2 })
  b.line(809, 407.5, 827, 407.5, { stroke: C.acc, sw: 1.3, marker: 'acc', markerStart: 'acc' })
  b.text(831, 421, 'P_{50}↓', { size: 8.5, weight: 600, fill: C.accD })
  b.ctext(875, 477, '左移（实线）vs 正常（虚线）', { size: 8.5, fill: C.mute })
  b.arrow(1084, 455, 1262, 455, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.arrow(1084, 455, 1084, 355, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.polyline([[1084, 455], [1104.4, 426.5], [1126.5, 402.75], [1160.5, 379], [1203, 366.65], [1254, 363.15]], { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.polyline([[1084, 455], [1114.6, 426.5], [1143.5, 402.75], [1186, 379], [1228.5, 366.65], [1254, 363.15]], { stroke: C.bad, sw: 2.2 })
  b.line(1121, 407.5, 1138, 407.5, { stroke: C.bad, sw: 1.3, marker: 'bad', markerStart: 'bad' })
  b.text(1142, 421, 'P_{50}↑', { size: 8.5, weight: 600, fill: C.badD })
  b.ctext(1169, 477, '右移（实线）vs 正常（虚线）', { size: 8.5, fill: C.mute })
  b.wtext(766, 508, '波尔效应（1904，C. Bohr）：H^{+}/CO_{2} 降低 Hb 氧亲和力——酸、热与 CO_{2} 在需氧最大处就地促卸氧（负反馈式「按需投递」）；2,3-DPG 由红细胞糖酵解 Rapoport-Luebering 旁路生成、与脱氧 Hb 中央腔结合，高原数小时至数天进行性升高。', { size: 9.5, fill: C.sub, maxW: 590, lh: 14.5 })
  b.rect(766, 578, 590, 55, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.5, rx: 8 })
  b.wtext(780, 598, 'CO 中毒：亲和力≈O_{2} 的 200–250 倍且剩余位点左移——樱桃红假象＋脉搏血氧仪读数假性正常；治疗＝脱离接触＋高浓度乃至高压氧把 CO 挤出位点竞争。', { size: 9.5, fill: C.sub, maxW: 565, lh: 14.5 })
  b.wtext(766, 650, '发绀取决于还原 Hb>5 g/dL（非 SaO_{2}）：重度贫血缺氧深重却面色苍白；真性红细胞增多症血氧正常亦可发绀。', { size: 9.5, fill: C.mute, maxW: 590, lh: 14.5 })

  // ============ 三、CO₂ 三形态饼图 + 氯转移 ============
  b.panel(30, 682, 700, 300, { title: '三、CO_{2} 的三种形态与氯转移' })
  // 饼图（自 12 点顺时针：HCO3- 70%、氨基甲酸 23%、溶解 7%）
  b.path('M 150,830 L 150,752 A 78,78 0 1 1 75.8,854.1 Z', { fill: C.accL, stroke: C.acc, sw: 2 })
  b.path('M 150,830 L 75.8,854.1 A 78,78 0 0 1 116.8,759.4 Z', { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.path('M 150,830 L 116.8,759.4 A 78,78 0 0 1 150,752 Z', { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.text(46, 730, '运输形态占比', { size: 10.5, weight: 700, fill: C.sub })
  b.text(215, 893, '碳酸氢盐 HCO_{3}^{-} 70%', { size: 9.5, weight: 600, fill: C.accD })
  b.text(30, 758, '氨基甲酸 Hb', { size: 9.5, weight: 600, fill: C.rnaD })
  b.text(30, 773, '23%', { size: 9.5, weight: 600, fill: C.rnaD })
  b.text(96, 745, '溶解 7%', { size: 9.5, weight: 600, fill: C.warnD })
  // 氯转移示意（组织端毛细血管内红细胞）
  b.rect(358, 720, 345, 200, { fill: C.rnaL, fillOp: 0.3, stroke: C.rose, sw: 1.8, rx: 18 })
  b.text(370, 742, '血浆', { size: 9.5, fill: C.rnaD, weight: 600 })
  b.ellipse(490, 830, 112, 78, { fill: '#ffffff', stroke: C.sub, sw: 2.2 })
  b.ctext(490, 758, '红细胞', { size: 10, weight: 700, fill: C.sub })
  b.tag(490, 793, '碳酸酐酶（限速阀门）', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 9, weight: 700 })
  b.text(405, 830, 'CO_{2}＋H_{2}O → H^{+}＋HCO_{3}^{-}', { size: 10, weight: 600, fill: C.ink })
  b.text(430, 863, 'Hb＋CO_{2} → 氨基甲酸 Hb（23%）', { size: 8.5, fill: C.rnaD })
  b.text(430, 880, 'H^{+} → Hb 组氨酸缓冲', { size: 8, fill: C.mute })
  b.rect(378, 840, 10, 40, { fill: C.pro, rx: 3 })
  b.arrow(400, 855, 370, 855, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(395, 845, 'HCO_{3}^{-} 出', { size: 8.5, weight: 600, fill: C.accD })
  b.arrow(370, 872, 400, 872, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.text(395, 890, 'Cl^{-} 入（氯转移）', { size: 8.5, weight: 600, fill: C.warnD })
  b.line(358, 898, 378, 884, { stroke: C.mute, sw: 1 })
  b.text(330, 902, 'AE1（带 3 蛋白）', { size: 8.5, fill: C.proD })
  b.circle(640, 815, 12, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.ctext(640, 818, 'CO_{2}', { size: 7.5, weight: 700, fill: C.warnD })
  b.arrow(627, 815, 606, 815, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.text(612, 782, '自组织扩散入', { size: 9, fill: C.mute })
  b.wtext(46, 935, '碳酸酐酶把水合反应提速数个数量级＝整个运输体系的限速阀门；氯转移维持电中性并把 HCO_{3}^{-} 仓库由红细胞扩展至整个血浆。', { size: 9.5, fill: C.sub, maxW: 660, lh: 14 })
  b.wtext(46, 955, 'CO_{2} 溶解度高：仅 7% 溶解态已承担部分运输与全部分压信号；脱氧 Hb 是更弱的酸＝更好的质子受体（何尔登效应伏笔）。', { size: 9.5, fill: C.sub, maxW: 660, lh: 14 })

  // ============ 四、何尔登效应与 CO₂ 解离曲线 ============
  b.panel(750, 682, 620, 300, { title: '四、何尔登效应与线性的 CO_{2} 解离曲线' })
  b.arrow(820, 920, 1112, 920, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(820, 920, 820, 725, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(830, 738, 'CO_{2} 含量 (ml/dL)', { size: 9.5, fill: C.sub })
  for (const [p, lb] of [[20, '20'], [40, '40'], [60, '60']] as [number, string][]) {
    const tx = 820 + p * 4.667
    b.line(tx, 920, tx, 926, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 940, String(lb), { size: 9, fill: C.mute })
  }
  for (const [c, lb] of [[44, '44'], [48, '48'], [52, '52'], [56, '56']] as [number, string][]) {
    const ty = 920 - (c - 40) * 11.875
    b.line(814, ty, 820, ty, { stroke: C.sub, sw: 1.6 })
    b.etext(810, ty + 4, String(lb), { size: 9, fill: C.mute })
  }
  b.ctext(965, 960, 'PCO_{2} (mmHg)', { size: 9.5, weight: 600, fill: C.sub })
  b.polyline([[913.3, 854.8], [960, 825.1], [1006.7, 795.4], [1053.3, 765.7], [1100, 736]], { stroke: C.enz, sw: 2.6 })
  b.polyline([[913.3, 896.3], [960, 866.6], [1006.7, 837], [1053.3, 807.3], [1100, 777.6]], { stroke: C.acc, sw: 2.6 })
  b.text(1108, 740, '脱氧血', { size: 9.5, weight: 700, fill: C.enzD })
  b.text(1108, 782, '氧合血', { size: 9.5, weight: 700, fill: C.accD })
  b.circle(1034.7, 766.6, 4.5, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.text(950, 752, '静脉点 46 / 52 ml/dL', { size: 9, weight: 600, fill: C.enzD })
  b.circle(1006.7, 837, 4.5, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.text(1015, 856, '动脉点 40 / 48', { size: 9, weight: 600, fill: C.accD })
  b.arrow(1030, 772, 1010, 830, { stroke: C.sub, sw: 1.6, dash: '4 3' })
  b.text(890, 800, '功能环：卸碳≈4 ml/dL', { size: 8.5, weight: 600, fill: C.sub })
  b.text(1160, 735, '何尔登效应', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(1160, 760, '肺端 Hb 摄 O_{2} → 对 CO_{2} 与 H^{+} 亲和力双降：H^{+} 释出推动碳酸氢盐池逆反应、氨基甲酸键解离——氧合促成卸碳。', { size: 9.5, fill: C.sub, maxW: 195, lh: 14 })
  b.wtext(1160, 812, '与波尔效应（CO_{2} 促卸氧）互为镜像：同一别构机器上 O_{2}、H^{+}、CO_{2} 三种配体偶联的两面。', { size: 9.5, fill: C.sub, maxW: 195, lh: 14 })
  b.wtext(1160, 864, '曲线线性无平台→通气改变对 CO_{2} 含量「立竿见影」：过度通气速排 CO_{2}（呼碱）、通气不足速积（呼酸）——须分钟级呼吸调节，慢性代偿交给肾。', { size: 9.5, fill: C.sub, maxW: 195, lh: 14 })
}

export default scene({
  title: '气体运输：氧解离曲线、波尔效应与 CO_{2} 的三形态',
  subtitle: 'P_{50} 26–27 mmHg，肺点 PO_{2} 100→SaO_{2} 98%、组织点 40→75%；右移＝H^{+}/CO_{2}/温度/2,3-DPG 升高（波尔效应）；CO_{2} 以 HCO_{3}^{-} 70%、氨基甲酸 Hb 23%、溶解 7% 三形态运输，氯转移扩展仓库、何尔登效应促肺端卸碳',
  draw,
})
