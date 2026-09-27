// ph ch9-s2 肺换气与 V/Q：肺容积容量、肺泡通气与死腔、V/Q 三区模型与 Fick 扩散
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、肺容积与肺容量 ============
  b.panel(30, 132, 660, 430, { title: '一、四个容积与四个容量：呼吸计量的积木' })
  b.arrow(120, 480, 120, 152, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(120, 480, 260, 480, { stroke: C.sub, sw: 1.8 })
  b.text(130, 172, '容积 (ml)', { size: 10, fill: C.sub })
  for (const [v, lb] of [[0, '0'], [2000, '2000'], [4000, '4000'], [6000, '6000']] as [number, string][]) {
    const ty = 480 - v * 0.052
    b.line(114, ty, 120, ty, { stroke: C.sub, sw: 1.6 })
    b.etext(110, ty + 4, lb, { size: 9.5, fill: C.mute })
  }
  // 堆叠柱：RV / ERV / TV / IRV（5800 ml 总量）
  b.rect(150, 417.6, 80, 62.4, { fill: '#e2e8f0', stroke: C.faint, sw: 1.6 })
  b.rect(150, 355.2, 80, 62.4, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.rect(150, 329.2, 80, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.rect(150, 178.4, 80, 150.8, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(190, 252, '补吸气量', { size: 9.5, weight: 600, fill: C.dnaD })
  b.ctext(190, 268, 'IRV 3000', { size: 9.5, fill: C.mute })
  b.ctext(190, 345, 'TV 500', { size: 8.5, weight: 600, fill: C.rnaD })
  b.ctext(190, 380, '补呼气量', { size: 9.5, weight: 600, fill: C.accD })
  b.ctext(190, 396, 'ERV 1200', { size: 9.5, fill: C.mute })
  b.ctext(190, 445, '残气量', { size: 9.5, weight: 600, fill: C.sub })
  b.ctext(190, 461, 'RV 1200', { size: 9.5, fill: C.mute })
  b.text(46, 331, '潮气量 TV', { size: 9.5, weight: 600, fill: C.rnaD })
  b.text(46, 345, '500 ml', { size: 9.5, fill: C.mute })
  b.line(94, 342, 148, 342, { stroke: C.rna, sw: 1.3 })
  // 平静呼气末基线（FRC 位）
  b.line(110, 355.2, 665, 355.2, { stroke: C.faint, sw: 1, dash: '5 5' })
  b.text(450, 349, '平静呼气末基线（FRC 位）', { size: 9, fill: C.mute })
  // 容量括号
  b.line(240, 178.4, 240, 480, { stroke: C.mute, sw: 1.2 })
  b.line(234, 178.4, 246, 178.4, { stroke: C.mute, sw: 1.2 })
  b.line(234, 480, 246, 480, { stroke: C.mute, sw: 1.2 })
  b.text(252, 320, '肺总量 TLC', { size: 10, weight: 700, fill: C.sub })
  b.text(252, 336, '≈5800 ml', { size: 9.5, fill: C.mute })
  b.line(340, 178.4, 340, 355.2, { stroke: C.acc, sw: 1.4 })
  b.line(334, 178.4, 346, 178.4, { stroke: C.acc, sw: 1.4 })
  b.line(334, 355.2, 346, 355.2, { stroke: C.acc, sw: 1.4 })
  b.text(352, 250, '肺活量 VC', { size: 10, weight: 700, fill: C.accD })
  b.text(352, 266, 'IRV+TV+ERV', { size: 9.5, fill: C.mute })
  b.text(352, 282, '≈4600 ml', { size: 9.5, fill: C.mute })
  b.line(340, 355.2, 340, 480, { stroke: C.enz, sw: 1.4 })
  b.line(334, 355.2, 346, 355.2, { stroke: C.enz, sw: 1.4 })
  b.line(334, 480, 346, 480, { stroke: C.enz, sw: 1.4 })
  b.text(352, 400, '功能残气量 FRC', { size: 10, weight: 700, fill: C.enzD })
  b.text(352, 416, 'ERV+RV', { size: 9.5, fill: C.mute })
  b.text(352, 432, '≈2400–2500 ml', { size: 9.5, fill: C.mute })
  // 右侧注释
  b.wtext(450, 210, '残气量与含残气量的容量（FRC、TLC）无法被普通肺活量计直接测出——受试者永远吹不出最后约 1200 ml，须氦气稀释法或体描法间接推算。', { size: 9.5, fill: C.sub, maxW: 215, lh: 14.5 })
  b.wtext(450, 280, 'FRC 是呼气末「蓄水池」：以约 2400 ml 稀释每次 500 ml 新鲜空气，使肺泡气 PO_{2}、PCO_{2} 的呼吸周期波动被摊薄；FRC 过小（新生儿、ARDS）→肺泡气近乎「推倒重来」。', { size: 9.5, fill: C.sub, maxW: 215, lh: 14.5 })
  b.wtext(46, 508, '两个及以上容积相加构成容量：VC=IRV+TV+ERV、FRC=ERV+RV、IC=TV+IRV；1846 年 Hutchinson 以水封式肺活量计用肺活量预测投保人寿命，远见后被流行病学充分证实。', { size: 9.5, fill: C.sub, maxW: 610, lh: 14.5 })

  // ============ 二、肺泡通气量：死腔的折扣 ============
  b.panel(710, 132, 660, 430, { title: '二、肺泡通气量：死腔的折扣' })
  b.text(726, 176, 'V_{A} =（TV − V_{D}）× f', { size: 14, weight: 700, fill: C.ink })
  b.text(920, 176, '解剖死腔 V_{D} ≈ 150 ml：鼻腔→终末细支气管，只传导、不换气', { size: 9.5, fill: C.mute })
  // 卡片 A：深慢
  b.rect(726, 220, 300, 170, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.text(740, 244, '深慢呼吸：TV 500 × f 12', { size: 11, weight: 700, fill: C.accD })
  b.ctext(797, 260, '死腔 150', { size: 9, fill: C.mute })
  b.ctext(922, 260, '入肺泡 350 ml', { size: 9, fill: C.okD })
  b.rect(760, 268, 75, 18, { fill: '#e2e8f0', stroke: C.faint, sw: 1.4 })
  b.rect(835, 268, 175, 18, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.text(760, 304, 'V_E = 6.0 L/min', { size: 9.5, fill: C.mute })
  b.text(760, 322, 'V_A =（500−150）×12', { size: 9.5, fill: C.sub })
  b.text(760, 345, '= 4.2 L/min', { size: 12, weight: 700, fill: C.okD })
  b.text(760, 366, '死腔占比 30%', { size: 9.5, fill: C.mute })
  // 卡片 B：浅快
  b.rect(1050, 220, 306, 170, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.text(1064, 244, '浅快呼吸：TV 250 × f 24', { size: 11, weight: 700, fill: C.badD })
  b.ctext(1121, 260, '死腔 150', { size: 9, fill: C.mute })
  b.ctext(1184, 260, '入肺泡 100', { size: 9, fill: C.warnD })
  b.rect(1084, 268, 75, 18, { fill: '#e2e8f0', stroke: C.faint, sw: 1.4 })
  b.rect(1159, 268, 50, 18, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.text(1084, 304, 'V_E = 6.0 L/min（不变！）', { size: 9.5, fill: C.mute })
  b.text(1084, 322, 'V_A =（250−150）×24', { size: 9.5, fill: C.sub })
  b.text(1084, 345, '= 2.4 L/min', { size: 12, weight: 700, fill: C.badD })
  b.text(1084, 366, '死腔占比 60%', { size: 9.5, fill: C.mute })
  b.wtext(726, 412, '同样的分钟通气量 V_E，浅快呼吸的有效肺泡通气近乎腰斩——发热与代谢性酸中毒时中枢选择加深呼吸（Kussmaul 呼吸）的算术原因。', { size: 9.5, fill: C.sub, maxW: 630, lh: 14.5 })
  b.wtext(726, 448, 'Bohr 方程：生理死腔 V_{D}/V_{T} =（PaCO_{2} − P_{E}CO_{2}）/PaCO_{2}；正常人肺泡死腔≈0、生理死腔≈解剖死腔，比值升高即提示换气效率受损。', { size: 9.5, fill: C.sub, maxW: 630, lh: 14.5 })
  b.wtext(726, 492, '肺泡气方程：P_{AO2} ≈ P_{IO2} − P_{ACO2}/R ≈ 150 − 40/0.8 = 100 mmHg——通气率是肺泡 PO_{2} 的「阀门」，CO_{2} 则是被控变量（第 4 节）。', { size: 9.5, fill: C.sub, maxW: 630, lh: 14.5 })

  // ============ 三、V/Q 三区模型 ============
  b.panel(30, 582, 660, 390, { title: '三、通气/血流比：理想 0.8 与两个极端' })
  b.ctext(143, 630, '① 理想 V/Q≈0.8', { size: 10, weight: 700, fill: C.okD })
  b.ctext(349, 630, '② 死腔样 V/Q→∞', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(555, 630, '③ 分流样 V/Q→0', { size: 10, weight: 700, fill: C.badD })
  // ① 理想
  b.arrow(143, 640, 143, 653, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.circle(143, 690, 34, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(143, 694, '肺泡', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(88, 745, 110, 22, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 11 })
  for (const bx of [115, 143, 171]) b.circle(bx, 756, 5, { fill: C.bad, fillOp: 0.8 })
  b.arrow(60, 756, 84, 756, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.arrow(202, 756, 226, 756, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  // ② 死腔样
  b.arrow(349, 640, 349, 653, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.circle(349, 690, 34, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(349, 694, '肺泡', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(294, 745, 110, 22, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 11 })
  b.circle(349, 756, 9, { fill: '#7f1d1d' })
  b.ctext(349, 738, '栓子', { size: 9, weight: 700, fill: C.badD })
  b.arrow(266, 756, 290, 756, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.line(392, 748, 408, 764, { stroke: C.badD, sw: 2.5 })
  b.line(408, 748, 392, 764, { stroke: C.badD, sw: 2.5 })
  b.ctext(400, 782, '血流断绝', { size: 8.5, fill: C.badD })
  // ③ 分流样
  b.ctext(555, 645, '通气归零', { size: 9, fill: C.faint })
  b.circle(555, 690, 26, { fill: C.badL, stroke: C.bad, sw: 2, dash: '4 3' })
  b.ctext(555, 694, '塌陷', { size: 9, weight: 700, fill: C.badD })
  b.rect(500, 745, 110, 22, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 11 })
  for (const bx of [527, 555, 583]) b.circle(bx, 756, 5, { fill: C.bad, fillOp: 0.8 })
  b.arrow(472, 756, 496, 756, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.arrow(614, 756, 638, 756, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  // 三列注释
  b.wtext(46, 806, '通气 4 L/min ∶ 血流 5 L/min。O_{2} 有 Hb 储备库撑腰、CO_{2} 清除更依赖持续灌流——通气略「欠配」。', { size: 9, fill: C.sub, maxW: 190, lh: 13.5 })
  b.wtext(252, 806, '肺栓塞：照常通气、无血可氧合——通气被「浪费」，Bohr 测得生理死腔扩大。', { size: 9, fill: C.sub, maxW: 190, lh: 13.5 })
  b.wtext(458, 806, '肺不张/实变：静脉血未经氧合直入动脉＝肺内右向左分流。', { size: 9, fill: C.sub, maxW: 190, lh: 13.5 })
  b.rect(46, 862, 610, 62, { fill: C.panelB, rx: 8 })
  b.wtext(60, 880, '吸纯氧可鉴别两极端：死腔样与低 V/Q 区反应良好，真分流区低氧顽固；低氧性肺血管收缩（HPV）把血流从低通气区转向通气良好区——高原全肺性 HPV 则成肺动脉高压与高原肺水肿之源。', { size: 9.5, fill: C.sub, maxW: 585, lh: 14.5 })

  // ============ 四、Fick 扩散定律 ============
  b.panel(710, 582, 660, 390, { title: '四、Fick 扩散定律与 CO_{2} 的 20 倍优势' })
  b.text(726, 632, '扩散量 ∝ 面积 × 分压差 × 溶解度 /（膜厚度 × √分子量）', { size: 11.5, weight: 700, fill: C.ink })
  // 呼吸膜示意
  b.rect(900, 655, 100, 90, { fill: C.accL, fillOp: 0.5 })
  b.rect(1000, 655, 8, 90, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.rect(1008, 655, 100, 90, { fill: C.badL, fillOp: 0.4 })
  b.ctext(950, 720, '肺泡气', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(1058, 720, '毛细血管血', { size: 9.5, weight: 700, fill: C.badD })
  b.arrow(930, 680, 1080, 680, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(1000, 671, 'O_{2}', { size: 9.5, weight: 700, fill: C.accD })
  b.arrow(1075, 702, 925, 702, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ctext(1000, 715, 'CO_{2}', { size: 9.5, weight: 700, fill: C.warnD })
  b.text(900, 772, '呼吸膜厚 0.2–0.6 μm、总交换面积 ≈70 m²——「薄而广」', { size: 9.5, fill: C.sub })
  // 扩散能力对比柱
  b.text(1190, 616, '扩散能力对比', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(1215, 707, 24, 13, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(1227, 700, '1', { size: 9.5, weight: 600, fill: C.accD })
  b.rect(1272, 625, 24, 95, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.ctext(1284, 617, '≈20×', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(1227, 740, 'O_{2}', { size: 9.5, fill: C.sub })
  b.ctext(1284, 740, 'CO_{2}', { size: 9.5, fill: C.sub })
  b.wtext(1190, 768, '溶解度高 20 余倍；分子量 44 对 32 仅小幅拖累', { size: 9, fill: C.mute, maxW: 170, lh: 13.5 })
  b.wtext(726, 806, '病理次序：呼吸膜增厚或面积缩小（肺纤维化、肺水肿）→低氧血症先于 CO_{2} 潴留出现——O_{2} 先「输」在扩散慢。', { size: 9.5, fill: C.sub, maxW: 630, lh: 14.5 })
  b.wtext(726, 830, '灌注限制 vs 扩散限制：正常 O_{2} 流经肺毛细血管 0.75 s、0.25 s 即平衡（灌注限制）；运动缩短通过时间或膜病变→转扩散限制。CO 与 Hb 亲和极强、分压差不耗竭→纯扩散限制探针（DLCO 测定）。', { size: 9.5, fill: C.sub, maxW: 630, lh: 14.5 })
  b.wtext(726, 876, 'A-a 梯度＝P_{AO2}−P_{aO2}：健康青年 5–15 mmHg、随年龄加宽；正常＝低通气或吸入气因素，扩大＝V/Q 失调、分流、扩散障碍。', { size: 9.5, fill: C.sub, maxW: 630, lh: 14.5 })
  b.wtext(726, 912, '师生之争：Christian Bohr 主张肺泡主动「分泌」O_{2}，其学生 Krogh 以精密分压测量证明被动扩散足以解释全部交换（1920 诺贝尔奖）。', { size: 9.5, fill: C.mute, maxW: 630, lh: 14.5 })
}

export default scene({
  title: '肺换气与通气/血流比：容积计量、死腔折扣与 V/Q 匹配',
  subtitle: '潮气量 500 ml 中仅（TV−V_{D}）×f 有效（解剖死腔约 150 ml），同样 6 L/min 分钟通气量浅快呼吸的 V_{A} 从 4.2 跌至 2.4 L/min；总体 V/Q≈0.8（通气 4∶血流 5 L/min），死腔样→∞（肺栓塞）与分流样→0（肺不张）为两极端；CO_{2} 扩散能力约为 O_{2} 的 20 倍',
  draw,
})
