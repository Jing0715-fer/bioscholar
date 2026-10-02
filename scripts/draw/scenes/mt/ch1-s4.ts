// mt ch1-s4 研究方法
// 面板：一、膜片钳四构型（1976 Neher–Sakmann，1991 诺奖；吉欧封接、pS 级电导）
//       二、爪蟾卵母细胞表达克隆（SGLT1 1987、AQP1 1992 Agre）+ Ussing 室 + 蛋白脂质体
//       三、结构里程碑时间轴（KcsA 1998、SERCA1a 2000、cryo-EM 2017 诺奖）
//       四、植物手段（MIFE、共聚焦钙成像、拟南芥 SOS 筛选、酵母 trk1 trk2 互补）
// Task ID: 46-c1
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、膜片钳四构型 ============
  b.panel(30, 132, 660, 420, { title: '一、膜片钳四构型（Neher–Sakmann，1976）' })
  b.text(60, 192, '吉欧级（10^{9} Ω）高阻封接，电极下约 1 μm^{2} 的膜片被电学隔离', { size: 11, fill: C.sub })
  // 四个 mini：电极抛光吸在膜上 → 撕下或打穿
  const pip = (cx: number, tipY: number) => {
    b.polygon([[cx - 5, tipY], [cx + 5, tipY], [cx + 16, 172], [cx - 16, 172]], { fill: C.accL, stroke: C.acc, sw: 1.8 })
    b.line(cx, 172, cx, 162, { stroke: C.acc, sw: 2 })
    b.circle(cx, 158, 4, { fill: C.acc })
  }
  // ① 细胞吸附
  pip(120, 219)
  b.circle(120, 265, 46, { fill: C.panel, stroke: C.sub, sw: 2 })
  b.circle(120, 219, 4, { fill: C.pro })
  // ② 全细胞（穿孔）
  pip(285, 243)
  b.circle(285, 265, 46, { fill: C.panel, stroke: C.sub, sw: 2 })
  b.ellipse(285, 243, 10, 7, { stroke: C.pro, sw: 1.4, dash: '3 3' })
  b.arrow(252, 286, 243, 298, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.arrow(318, 286, 327, 298, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  // ③ 内面向外
  pip(450, 240)
  b.circle(441, 240, 4, { fill: C.dna })
  b.circle(459, 240, 4, { fill: C.dna })
  b.line(441, 244, 459, 244, { stroke: C.dna, sw: 3 })
  b.text(425, 292, '胞内侧朝灌流液', { size: 9.5, fill: C.mute })
  // ④ 外面向外
  pip(615, 240)
  b.circle(606, 240, 4, { fill: C.dna })
  b.circle(624, 240, 4, { fill: C.dna })
  b.line(606, 244, 624, 244, { stroke: C.dna, sw: 3 })
  b.circle(615, 228, 3, { fill: C.ok })
  b.text(588, 292, '胞外侧朝灌流液', { size: 9.5, fill: C.mute })
  // 构型名与注释
  b.ctext(120, 336, '① 细胞吸附', { size: 12, weight: 700, fill: C.ink })
  b.ctext(120, 358, '保留胞内环境', { size: 9.5, fill: C.mute })
  b.ctext(120, 376, '单通道记录的主力构型', { size: 9.5, fill: C.mute })
  b.ctext(285, 336, '② 全细胞', { size: 12, weight: 700, fill: C.ink })
  b.ctext(285, 358, '打穿孔，测宏电流', { size: 9.5, fill: C.mute })
  b.ctext(285, 376, '胞液与电极液互通', { size: 9.5, fill: C.mute })
  b.ctext(450, 336, '③ 内面向外', { size: 12, weight: 700, fill: C.ink })
  b.ctext(450, 358, '胞内侧暴露于灌流液', { size: 9.5, fill: C.mute })
  b.ctext(450, 376, '胞内配体门控一测便知', { size: 9.5, fill: C.mute })
  b.ctext(615, 336, '④ 外面向外', { size: 12, weight: 700, fill: C.ink })
  b.ctext(615, 358, '胞外侧暴露于浴液', { size: 9.5, fill: C.mute })
  b.ctext(615, 376, '测胞外侧药物 / 毒素', { size: 9.5, fill: C.mute })
  // 底部：判读 + 单通道电流方波
  b.text(60, 412, '皮安级（10^{-12} A）电流 ÷ 驱动电压 = 单通道电导（以 pS 计）', { size: 11, fill: C.sub })
  b.wtext(60, 440, '门控由哪一侧、由什么化学物质控制，从此成为可拆解的实验问题', { size: 10.5, fill: C.sub, maxW: 360, lh: 18 })
  b.text(60, 464, '超低噪声放大器分辨皮安级单通道电流', { size: 10.5, fill: C.sub })
  b.text(60, 488, 'Neher 与 Sakmann 获 1991 年诺贝尔生理学或医学奖', { size: 10.5, fill: C.sub })
  b.curve(450, 470, 200, 45, [[0, 1], [0.1, 1], [0.1, 0.28], [0.26, 0.28], [0.26, 1], [0.38, 1], [0.38, 0.08], [0.62, 0.08], [0.62, 1], [0.8, 1], [0.8, 0.35], [0.92, 0.35], [0.92, 1], [1, 1]], { stroke: C.dna, sw: 2 })
  b.text(450, 496, '单通道电流记录：方波样开合（pA 级）', { size: 10, fill: C.mute })

  // ============ 二、爪蟾卵母细胞：让表型替基因说话 ============
  b.panel(710, 132, 660, 420, { title: '二、爪蟾卵母细胞：让表型替基因说话' })
  b.circle(880, 295, 88, { fill: C.panel, stroke: C.sub, sw: 2.6 })
  b.circle(912, 268, 15, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.rect(958, 262, 9, 16, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ellipse(952, 300, 8, 12, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.arrow(778, 198, 835, 242, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.text(738, 188, '注射 mRNA / cRNA', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(880, 408, '直径约 1 mm · 内源性通道背景低', { size: 10.5, fill: C.sub })
  b.ctext(880, 430, 'cRNA 忠实翻译，蛋白送上质膜', { size: 10, fill: C.mute })
  // 右侧两张里程碑卡
  b.rect(1050, 190, 310, 108, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 10 })
  b.text(1066, 216, '1987 · SGLT1（Hediger）', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(1066, 240, '注射兔小肠 mRNA，以同位素标记葡萄糖类似物的摄取为读出', { size: 10.5, fill: C.sub, maxW: 280, lh: 18 })
  b.text(1066, 282, '首个拿到初级序列的继发性主动转运体', { size: 10.5, weight: 600, fill: C.sub })
  b.rect(1050, 312, 310, 108, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 10 })
  b.text(1066, 338, '1992 · AQP1（Agre，CHIP28）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.text(1066, 362, 'cRNA 注入卵母细胞，低渗液中细胞迅速胀破', { size: 10.5, fill: C.sub })
  b.text(1066, 386, '水通道一锤定音——2003 年诺贝尔化学奖', { size: 10.5, weight: 600, fill: C.dnaD })
  // 底部两框：Ussing 室 / 蛋白脂质体
  b.rect(730, 442, 305, 96, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(746, 468, 'Ussing 灌流室（1951）', { size: 12, weight: 700, fill: C.sub })
  b.text(746, 492, '上皮夹在两室，电压钳钳制跨上皮电位为零', { size: 10.5, fill: C.sub })
  b.text(746, 516, '测得电流 = 净主动离子流（蛙皮 Na^{+} 吸收）', { size: 10.5, fill: C.sub })
  b.rect(1055, 442, 305, 96, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(1071, 468, '蛋白脂质体 + 同位素示踪', { size: 12, weight: 700, fill: C.sub })
  b.text(1071, 492, '纯化蛋白重组进人工脂质体，梯度人为设定', { size: 10.5, fill: C.sub })
  b.text(1071, 514, '^{36}Cl^{-} 测氯转运 · ^{86}Rb^{+} 代钾测摄取', { size: 10.5, fill: C.sub })
  b.text(1071, 534, '泵的化学计量与耦联比多由此测定', { size: 10, fill: C.mute })

  // ============ 三、结构解析接力：从 KcsA 到冷冻电镜 ============
  b.panel(30, 567, 660, 418, { title: '三、结构解析接力：从 KcsA 到冷冻电镜' })
  b.text(60, 612, '膜蛋白结晶曾被视为不可能任务——两亲性分子既亲水又疏水，晶体学长期束手无策', { size: 11, fill: C.sub })
  b.timelineH(60, 705, 600, [
    { at: 0.09, label: '1998 · KcsA', sub: '3.2 Å，选择性滤器', above: true, c: C.bad },
    { at: 0.22, label: '2000 · SERCA1a', sub: 'P 型泵原子坐标', above: false, c: C.warn },
    { at: 0.38, label: '2003 · 诺奖', sub: 'MacKinnon / Agre', above: true, c: C.dna },
    { at: 0.72, label: '2013 · 直接电子探测', sub: '相机引爆分辨率革命', above: false, c: C.acc },
    { at: 0.92, label: '2017 · cryo-EM 诺奖', sub: 'GLUT / SWEET / Piezo', above: true, c: C.ok },
  ])
  let sy = b.wtext(60, 815, 'KcsA：TVGYG 主链羰基排成四个 K^{+} 位点的氧笼——几何与能量双双讲清「为什么是钾」', { size: 10.5, fill: C.sub, maxW: 620, lh: 23 })
  sy = b.wtext(60, sy + 10, 'SERCA1a：P 型 ATPase 的 E1/E2 构象循环第一次有了原子坐标（Toyoshima，2000）', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  sy = b.wtext(60, sy + 10, 'X 射线相继攻克 aquaporin、LeuT、β 肾上腺素受体；cryo-EM 革命不再需要结晶——GLUT1/3、SWEET、Piezo 等大而软的分子接连成像', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  sy = b.wtext(60, sy + 12, '电生理与结构生物学从此能在同一个分子上会师', { size: 11, weight: 600, fill: C.sub, maxW: 620, lh: 18 })
  b.wtext(60, sy + 12, '方法分工：膜片钳问多快、卵母细胞与酵母问是什么、Ussing 问净多少、结构问长什么样、脂质体问搬几个、MIFE 与突变体问在活植物里干什么', { size: 10, fill: C.mute, maxW: 620, lh: 18 })

  // ============ 四、植物特有手段：在活植物里提问 ============
  b.panel(710, 567, 660, 418, { title: '四、植物特有手段：在活植物里提问' })
  // Q1 MIFE
  b.rect(730, 596, 305, 180, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(746, 624, 'MIFE 离子流测定', { size: 12.5, weight: 700, fill: C.accD })
  b.polygon([[788, 650], [812, 650], [801, 760]], { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.line(784, 690, 776, 687, { stroke: C.dna, sw: 1, opacity: 0.6 })
  b.line(784, 706, 775, 704, { stroke: C.dna, sw: 1, opacity: 0.6 })
  b.line(784, 722, 776, 721, { stroke: C.dna, sw: 1, opacity: 0.6 })
  b.line(822, 648, 818, 670, { stroke: C.acc, sw: 1.8 })
  b.line(844, 648, 846, 670, { stroke: C.acc, sw: 1.8 })
  b.line(820, 664, 844, 664, { stroke: C.acc, sw: 1.6, marker: 'acc', markerStart: 'acc' })
  b.text(850, 656, '离子选择微电极贴根表两点间振动', { size: 10, fill: C.sub })
  b.text(850, 678, '由浓度差反推净离子流', { size: 10, fill: C.sub })
  b.text(850, 700, 'K^{+} · H^{+} · Ca^{2+} · NH_{4}^{+}', { size: 10, fill: C.sub })
  b.text(850, 722, '不进细胞即可连续测定', { size: 10, fill: C.sub })
  b.text(850, 744, '根系吸收动力学标准仪器', { size: 10, fill: C.sub })
  // Q2 共聚焦钙成像
  b.rect(1055, 596, 305, 180, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(1071, 624, '共聚焦钙成像', { size: 12.5, weight: 700, fill: C.proD })
  b.circle(1140, 698, 42, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.circle(1140, 698, 20, { stroke: C.bad, sw: 1.4, dash: '4 3', opacity: 0.7 })
  b.circle(1140, 698, 32, { stroke: C.bad, sw: 1.2, dash: '4 3', opacity: 0.4 })
  b.circle(1128, 686, 3, { fill: C.bad })
  b.circle(1154, 690, 3, { fill: C.bad })
  b.circle(1136, 714, 3, { fill: C.bad })
  b.circle(1152, 712, 3, { fill: C.bad })
  b.ctext(1140, 702, 'Ca^{2+}', { size: 10, weight: 700, fill: C.badD })
  b.text(1200, 656, '荧光指示剂或转基因钙传感器', { size: 10, fill: C.sub })
  b.text(1200, 678, '追踪胞质 Ca^{2+} 时空波动', { size: 10, fill: C.sub })
  b.text(1200, 700, 'GLR / CNGC 介导的信号', { size: 10, fill: C.sub })
  b.text(1200, 722, '多以钙波现形', { size: 10, fill: C.sub })
  b.text(1200, 744, '无需电极，可活体长时观测', { size: 10, fill: C.sub })
  // Q3 拟南芥 SOS 筛选
  b.rect(730, 792, 305, 180, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(746, 820, '拟南芥 SOS 正向遗传筛选', { size: 12.5, weight: 700, fill: C.warnD })
  b.circle(850, 888, 36, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.circle(840, 878, 2.5, { fill: C.ok })
  b.circle(858, 884, 2.5, { fill: C.ok })
  b.circle(850, 896, 2.5, { fill: C.ok })
  b.ctext(850, 942, '盐 / 低钾筛选平板', { size: 9.5, fill: C.mute })
  b.line(775, 898, 775, 862, { stroke: C.ok, sw: 2 })
  b.ellipse(765, 866, 9, 5, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.ellipse(785, 866, 9, 5, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.wtext(896, 850, '在盐 / 低钾 / 缺氮下筛生长缺陷株', { size: 10, fill: C.sub, maxW: 132, lh: 18 })
  b.text(896, 890, 'sos 突变体 → 克隆致病基因', { size: 10, fill: C.sub })
  b.wtext(896, 912, 'SOS1 = 质膜 Na^{+}/H^{+} 反向转运体', { size: 10, fill: C.sub, maxW: 132, lh: 23 })
  b.text(896, 958, 'SOS2 激酶 · SOS3 钙感受器', { size: 10, fill: C.sub })
  // Q4 酵母互补
  b.rect(1055, 792, 305, 180, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(1071, 820, '酵母 trk1 trk2 互补', { size: 12.5, weight: 700, fill: C.enzD })
  b.circle(1100, 890, 30, { fill: C.panel, stroke: C.sub, sw: 2 })
  b.circle(1092, 882, 2.5, { fill: C.sub })
  b.circle(1108, 896, 2.5, { fill: C.sub })
  b.circle(1172, 890, 30, { fill: C.enzL, stroke: C.enz, sw: 2 })
  const cols: [number, number][] = [[1160, 878], [1176, 876], [1184, 888], [1164, 890], [1172, 900], [1156, 896], [1180, 902], [1168, 868]]
  cols.forEach(([x, y]) => b.circle(x, y, 2.5, { fill: C.ok }))
  b.ctext(1100, 938, '低钾不长', { size: 9.5, fill: C.sub })
  b.ctext(1172, 938, '+ cDNA 恢复', { size: 9.5, fill: C.enzD })
  b.text(1230, 850, 'trk1 trk2 双突变体', { size: 10, fill: C.sub })
  b.text(1230, 872, '低钾培养基上不生长', { size: 10, fill: C.sub })
  b.text(1230, 894, '转入拟南芥 cDNA', { size: 10, fill: C.sub })
  b.text(1230, 916, '即恢复生长', { size: 10, fill: C.sub })
  b.text(1230, 938, 'AKT1、KAT1 由此到手', { size: 10, fill: C.sub })
}

export default scene({
  title: '研究方法：从膜片钳到冷冻电镜',
  subtitle:
    '膜片钳（1976，1991 诺奖）以吉欧级高阻封接测皮安级单通道电流；爪蟾卵母细胞表达克隆鉴定 SGLT1（1987）与 AQP1（1992）；KcsA（1998）与 SERCA1a（2000）开启结构时代，cryo-EM（2017 诺奖）解锁 GLUT/SWEET/Piezo；植物侧另有 MIFE、钙成像与 SOS 突变体筛选',
  draw,
})
