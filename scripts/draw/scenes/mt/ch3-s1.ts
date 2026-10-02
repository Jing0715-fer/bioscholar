// mt ch3-s1 动物钾通道四大家族（Kv 家族树/Kir 六亚家族与 K_ATP/KCa 与 K2P/GYG 滤器与疾病名片）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、四大家族版图 + Kv 拓扑 ============
  b.panel(30, 132, 1340, 290, { title: '一、四大家族版图：同一滤器，四台「发动机」' })
  b.text(45, 176, '人类钾通道基因数居各类离子通道之首：Kv 约 40 基因·12 亚族；Kir 7 亚家族 15+ 基因；K2P 15 基因', { size: 11, fill: C.mute })
  b.table(45, 190, 645, {
    headers: ['家族', '拓扑与组装', '门控方式', '代表成员与标签'],
    rows: [
      ['Kv', '4×(6TMS+P)', '去极化开放', 'Shaker·hERG·KCNQ1 → LQT1/LQT2'],
      ['Kir', '4×(2TMS+P)', '超极化·多胺阻塞', 'Kir2.1·ROMK·Kir6.2 → I_{K1}·Bartter'],
      ['KCa', '6TMS（BK 7TMS）', '胞内 Ca^{2+}', 'BK·SK·IK → 平滑肌张力'],
      ['K2P', '2×(4TMS+2P) 二聚', '常开背景漏流', 'TASK·TREK → 设定静息电位'],
    ],
    rowH: 46, fontSize: 12.5, colW: [62, 152, 138, 293],
  })
  // —— 右：Kv 单亚基拓扑 ——
  b.text(710, 176, 'Kv 单亚基：6 跨膜螺旋＋T1 域＋N 型失活球（名号源自果蝇 Shaker「发抖」突变体）', { size: 11, fill: C.mute })
  b.text(745, 252, '细胞外', { size: 10, weight: 700, fill: C.sub })
  b.bilayer(730, 285, 400)
  b.text(745, 378, '细胞质', { size: 10, weight: 700, fill: C.sub })
  for (let i = 0; i < 6; i++) {
    const sx = 775 + i * 52
    const isS4 = i === 3
    b.rect(sx, 264, 16, 42, { fill: isS4 ? C.warnL : C.proL, stroke: isS4 ? C.warn : C.pro, sw: 1.8 })
    b.ctext(sx + 8, 322, `S${i + 1}`, { size: 10.5, fill: isS4 ? C.warnD : C.proD })
    if (isS4) {
      b.ctext(sx + 8, 278, '+', { size: 9, weight: 700, fill: C.warnD })
      b.ctext(sx + 8, 292, '+', { size: 9, weight: 700, fill: C.warnD })
      b.ctext(sx + 8, 306, '+', { size: 9, weight: 700, fill: C.warnD })
    }
  }
  b.path('M 991 278 Q 1009 250 1027 278', { stroke: C.enz, sw: 2.4 })
  b.ctext(1009, 242, 'P 环（GYG）', { size: 10, fill: C.enzD })
  b.line(1009, 306, 1009, 324, { stroke: C.bad, sw: 1.6, dash: '3 3' })
  b.circle(1009, 334, 9, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.text(1026, 330, 'N 型失活球', { size: 10, weight: 600, fill: C.badD })
  b.text(1026, 346, '「球-链」堵孔内口', { size: 9.5, fill: C.badD })
  b.rect(775, 358, 270, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(910, 382, 'T1 域（四聚化·亚家族特异）', { size: 11, weight: 600, fill: C.proD })
  // 四聚体顶视 + Kvβ
  b.ctext(1215, 190, '4 亚基顶视·中央孔', { size: 10, weight: 600, fill: C.sub })
  for (const [tx, ty] of [[1175, 215], [1255, 215], [1175, 285], [1255, 285]] as [number, number][]) {
    b.circle(tx, ty, 19, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  }
  b.circle(1215, 250, 9, { fill: C.bg, stroke: C.proD, sw: 2 })
  b.line(1274, 250, 1306, 250, { stroke: C.mute, sw: 1.4 })
  b.circle(1320, 250, 14, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(1320, 253, 'Kvβ', { size: 9, weight: 600, fill: C.enzD })
  b.text(1140, 330, 'Kvβ：加速/赋予失活', { size: 9.5, fill: C.sub })
  b.text(1140, 348, '（醛酮还原酶·耦联氧化还原）', { size: 9.5, fill: C.sub })
  b.text(710, 412, '去极化时 S4 外移旋转、牵开 S6 交联闸门；Kv1 只与 Kv1 装配——「亚基语法」由 T1 写成', { size: 10, fill: C.sub })

  // ============ 二、Kir：孔口阻塞的整流与 K_ATP ============
  b.panel(30, 434, 1340, 272, { title: '二、Kir：孔口阻塞的整流与 K_{ATP} 代谢传感' })
  b.text(48, 492, 'Kir：4×(2TMS+P)·无 S4——「塞子」守门，而非闸门关水', { size: 12, weight: 700, fill: C.proD })
  // 左 mini：超极化开放
  b.text(65, 520, '超极化（E_{K} 附近）', { size: 10.5, weight: 600, fill: C.okD })
  b.bilayer(70, 560, 260)
  b.text(75, 552, '胞外', { size: 9, fill: C.mute })
  b.text(75, 600, '胞内', { size: 9, fill: C.mute })
  b.rect(160, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(250, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(196, 546, 9, 34, { fill: C.proL, stroke: C.pro, sw: 1.2, opacity: 0.4 })
  b.rect(222, 546, 9, 34, { fill: C.proL, stroke: C.pro, sw: 1.2, opacity: 0.4 })
  b.path('M 168 548 Q 205 528 242 548', { stroke: C.enz, sw: 2.2 })
  b.ion(205, 510, 'K^{+}', { r: 9, size: 9, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(205, 521, 205, 588, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ion(205, 602, 'K^{+}', { r: 9, size: 9, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.text(65, 658, '内向电流通行——I_{K1} 把静息电位钳在 E_{K} 附近', { size: 10.5, fill: C.sub })
  // 右 mini：去极化阻塞
  b.text(375, 520, '去极化', { size: 10.5, weight: 600, fill: C.badD })
  b.bilayer(375, 560, 260)
  b.rect(465, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(555, 542, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(501, 546, 9, 34, { fill: C.proL, stroke: C.pro, sw: 1.2, opacity: 0.4 })
  b.rect(527, 546, 9, 34, { fill: C.proL, stroke: C.pro, sw: 1.2, opacity: 0.4 })
  b.path('M 473 548 Q 510 528 547 548', { stroke: C.enz, sw: 2.2 })
  b.ellipse(510, 588, 15, 9, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.etext(498, 592, 'Mg^{2+}·多胺', { size: 9.5, fill: C.enzD })
  b.ion(510, 632, 'K^{+}', { r: 9, size: 9, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.arrow(510, 622, 510, 601, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.line(503, 587, 517, 601, { stroke: C.bad, sw: 2 })
  b.line(517, 587, 503, 601, { stroke: C.bad, sw: 2 })
  b.text(375, 658, '外向电流被塞——整流是孔口阻塞，并非门控性质', { size: 10.5, fill: C.sub })
  b.wtext(48, 678, 'Kir2.1 构成心肌 I_{K1}；GIRK（Kir3.x）由 Gβγ 直接门控——迷走神经减慢心率的离子机制；ROMK（Kir1.1）驻肾髓襻升支，突变 → Bartter 综合征', { size: 10.5, fill: C.sub, maxW: 630, lh: 18 })
  // —— 右：K_ATP 八聚体 ——
  b.text(705, 492, 'K_{ATP}＝4×Kir6.2 孔道亚基＋4×SUR1 调节亚基（4+4 八聚体）', { size: 12, weight: 700, fill: C.proD })
  for (const [kx, ky] of [[869.6, 535.4], [790.4, 535.4], [790.4, 614.6], [869.6, 614.6]] as [number, number][]) {
    b.circle(kx, ky, 17, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.ctext(kx, ky + 3, 'Kir6.2', { size: 8.5, weight: 600, fill: C.proD })
  }
  for (const [sx, sy] of [[886, 575], [830, 519], [774, 575], [830, 631]] as [number, number][]) {
    b.rect(sx - 18, sy - 15, 36, 30, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
    b.ctext(sx, sy + 3, 'SUR1', { size: 9, weight: 600, fill: C.accD })
  }
  b.circle(830, 575, 8, { fill: C.bg, stroke: C.proD, sw: 2 })
  b.text(945, 515, '· ATP 结合 Kir6.2 → 通道关闭', { size: 10.5, fill: C.enzD })
  b.text(945, 538, '· ADP 结合 SUR1 → 通道开放', { size: 10.5, fill: C.okD })
  b.text(945, 561, '· 实时读取 ATP/ADP 比值——代谢写进门控', { size: 10.5, fill: C.sub })
  b.text(945, 584, '· 心肌/神经元 K_{ATP} 缺血时打开＝「熔断器」', { size: 10.5, fill: C.sub })
  b.wtext(945, 607, '· 格列本脲等磺脲类结合 SUR1 强制关闭——2 型糖尿病经典口服降糖药的分子靶点', { size: 10.5, fill: C.sub, maxW: 400, lh: 18 })
  b.text(705, 652, '胰岛 β 细胞的血糖译码：', { size: 10, weight: 600, fill: C.accD })
  b.tag(745, 678, '血糖↑', { size: 10.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.arrow(776, 678, 806, 678, { stroke: C.sub, sw: 1.6 })
  b.tag(870, 678, 'ATP/ADP↑', { size: 10.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.arrow(916, 678, 946, 678, { stroke: C.sub, sw: 1.6 })
  b.tag(990, 678, 'K_{ATP} 关', { size: 10.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.arrow(1023, 678, 1061, 678, { stroke: C.sub, sw: 1.6 })
  b.tag(1140, 678, '去极化·Ca^{2+} 内流', { size: 10.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.arrow(1214, 678, 1252, 678, { stroke: C.sub, sw: 1.6 })
  b.tag(1300, 678, '胰岛素胞吐', { size: 10.5, fill: C.okL, stroke: C.ok, tfill: C.okD })

  // ============ 三、KCa、K2P 与 GYG 分子筛 ============
  b.panel(30, 718, 1340, 267, { title: '三、KCa、K2P 与共享的 GYG 分子筛' })
  // —— 列 A：KCa ——
  b.text(48, 765, 'KCa：给孔配 Ca^{2+} 传感器', { size: 12, weight: 700, fill: C.enzD })
  b.text(48, 792, 'BK（Slo1）：7TMS＋庞大胞内域', { size: 10.5, weight: 600, fill: C.sub })
  b.bilayer(60, 826, 200)
  for (let i = 0; i < 7; i++) {
    const sx = 70 + i * 27
    const isS4 = i === 3
    b.rect(sx, 812, 9, 42, { fill: isS4 ? C.warnL : C.proL, stroke: isS4 ? C.warn : C.pro, sw: 1.6 })
    if (isS4) b.ctext(sx + 4.5, 838, '+', { size: 8, weight: 700, fill: C.warnD })
  }
  b.rect(66, 866, 190, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(161, 890, '胞内域（Ca^{2+} 结合）', { size: 10, weight: 600, fill: C.proD })
  b.ion(100, 866, 'Ca^{2+}', { r: 9, size: 8, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.ion(222, 866, 'Ca^{2+}', { r: 9, size: 8, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.wtext(48, 944, '电导高达 100–300 pS——唯一受电压与 Ca^{2+} 双重门控；Ca^{2+} 结合使激活曲线大幅负移（血管平滑肌舒缩·耳蜗毛细胞电调谐）', { size: 10, fill: C.sub, maxW: 430, lh: 18 })
  b.wtext(48, 978, 'SK：数 pS·常驻钙调蛋白感受亚微摩尔钙（后超极化）；IK 电导居中（红细胞·上皮）', { size: 10, fill: C.sub, maxW: 430, lh: 18 })
  // —— 列 B：K2P ——
  b.text(508, 765, 'K2P：常开的背景漏流', { size: 12, weight: 700, fill: C.accD })
  b.text(508, 792, '亚基 2×(4TMS＋2P)·两亚基拼一孔', { size: 10.5, weight: 600, fill: C.sub })
  b.bilayer(515, 826, 340)
  for (let i = 0; i < 8; i++) {
    b.rect(525 + i * 42, 812, 9, 42, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  }
  b.path('M 575 818 Q 588 798 601 818', { stroke: C.enz, sw: 2.2 })
  b.path('M 743 818 Q 756 798 769 818', { stroke: C.enz, sw: 2.2 })
  b.ion(760, 785, 'K^{+}', { r: 8, size: 8, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.arrow(760, 796, 760, 860, { stroke: C.acc, sw: 1.6, marker: 'acc', dash: '5 4' })
  b.wtext(508, 944, '15 个基因（KCNK 簇）：生理电位范围内常开，为膜提供稳定「暗电流」，直接设定静息电位水平', { size: 10, fill: C.sub, maxW: 360, lh: 18 })
  b.wtext(508, 978, 'TASK 随胞外酸度关闭；TREK/TRAAK 感受机械牵张与温度', { size: 10, fill: C.sub, maxW: 360, lh: 18 })
  // —— 列 C：GYG 滤器 + 疾病名片 ——
  b.text(898, 760, 'GYG 滤器：四家共享的分子筛', { size: 12, weight: 700, fill: C.dnaD })
  b.rect(1005, 790, 12, 70, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1075, 790, 12, 70, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  for (const cy of [803, 821, 839, 857]) {
    b.line(1017, cy, 1075, cy, { stroke: C.enz, sw: 1.6, dash: '4 3' })
  }
  b.text(1100, 826, '主链羰基氧笼×4', { size: 9.5, fill: C.enzD })
  b.ion(1046, 782, 'K^{+}', { r: 9, size: 9, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(1046, 793, 1046, 862, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ion(1046, 874, 'K^{+}', { r: 9, size: 9, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ion(1150, 772, 'Na^{+}', { r: 8, size: 8, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.arrow(1141, 776, 1078, 790, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.line(1056, 781, 1070, 795, { stroke: C.bad, sw: 2 })
  b.line(1070, 781, 1056, 795, { stroke: C.bad, sw: 2 })
  b.ctext(1150, 800, 'Na^{+} 偏小被拒', { size: 9.5, fill: C.badD })
  b.wtext(898, 908, 'K^{+} 脱水壳换「通道水壳」近零代价；Na^{+} 半径偏小、无法同时贴合氧笼两侧——选择性达万倍量级（KcsA 1998；MacKinnon 2003 诺奖）', { size: 10, fill: C.sub, maxW: 460, lh: 18 })
  b.tag(985, 952, 'LQT1＝KCNQ1（I_{Ks}）', { size: 10.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.tag(1150, 952, 'LQT2＝hERG（I_{Kr}）', { size: 10.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.tag(1300, 952, 'Bartter＝ROMK', { size: 10.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.text(898, 980, '心肌：I_{K1} 钉住静息电位，I_{Kr}/I_{Ks} 携手复极平台；特非那定阻断 hERG 被撤市', { size: 9.5, fill: C.sub })
}

export default scene({
  title: '动物钾通道：Kv、Kir、KCa 与 K2P',
  subtitle:
    '四大家族共享 GYG 选择性滤器，差别在给孔配的「发动机」——S4 电压感受器、G 蛋白、Ca^{2+} 传感器或常开漏流；Kv 约 40 基因·12 亚族带 N 型失活球，Kir 以多胺塞孔实现整流，K_ATP 把 ATP/ADP 比值写进门控（磺脲类靶点），BK 以 100–300 pS 电导受 Ca^{2+}＋电压双门控',
  draw,
})
