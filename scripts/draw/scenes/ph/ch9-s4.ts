// ph ch9-s4 呼吸调节：中枢分层、化学感受器、CO₂-通气反应与陈施呼吸
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、呼吸中枢分层 ============
  b.panel(30, 132, 700, 430, { title: '一、呼吸中枢：延髓起搏、脑桥修饰、皮层覆盖' })
  b.ellipse(140, 195, 62, 26, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(140, 199, '皮层（随意）', { size: 9.5, weight: 700, fill: C.proD })
  b.line(140, 221, 140, 253, { stroke: C.pro, sw: 1.4, dash: '3 3' })
  b.rect(90, 255, 120, 55, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 10 })
  b.ctext(150, 273, '呼吸调整中枢', { size: 9, weight: 700, fill: C.warnD })
  b.ctext(150, 291, '长吸中枢', { size: 9, fill: C.mute })
  b.rect(90, 330, 120, 95, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10 })
  b.ctext(150, 352, 'DRG', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(150, 370, 'VRG', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(96, 380, 108, 22, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.ctext(150, 394, 'pre-Bötzinger', { size: 8.5, weight: 700, fill: C.badD })
  b.ctext(150, 416, '延髓', { size: 9.5, weight: 700, fill: C.accD })
  b.arrow(150, 310, 150, 328, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(150, 425, 150, 443, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.rect(130, 445, 40, 70, { fill: C.panelB, stroke: C.sub, sw: 1.8 })
  b.ctext(150, 483, '脊髓', { size: 9, fill: C.sub })
  // 随意通路（皮质脊髓束，绕过脑干）
  b.path('M 200,195 C 260,210 265,240 265,300 L 265,440 C 265,470 230,485 172,490', { fill: 'none', stroke: C.pro, sw: 1.8, dash: '6 4' })
  b.text(272, 340, '皮质脊髓束', { size: 9, weight: 600, fill: C.proD })
  b.text(272, 354, '（随意）', { size: 9, fill: C.proD })
  b.arrow(150, 515, 150, 531, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.text(162, 528, '膈神经 C3–C5', { size: 8.5, weight: 600, fill: C.enzD })
  b.rect(80, 533, 140, 24, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 12 })
  b.ctext(150, 548, '膈肌与肋间肌', { size: 9, weight: 700, fill: C.enzD })
  // 右列注释
  b.wtext(385, 190, 'pre-Bötzinger（1991，Smith）：具内源性爆发特性的起搏神经元，与网络分离后仍能节律放电——节律＝「起搏＋网络振荡」混合机制。', { size: 9.5, fill: C.sub, maxW: 290, lh: 14 })
  b.wtext(385, 228, 'DRG（孤束核腹侧）：吸气神经元为主，接收迷走/舌咽化学与机械传入＝通气反射「接线盒」；VRG 平静时沉默，用力呼吸时驱动主动呼气。', { size: 9.5, fill: C.sub, maxW: 290, lh: 14 })
  b.wtext(385, 280, '脑桥：呼吸调整中枢在吸气达阈时提前「切断」吸气、调节吸-呼切换与频率；长吸中枢被其与迷走传入抑制。', { size: 9.5, fill: C.sub, maxW: 290, lh: 14 })
  b.rect(385, 315, 300, 100, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.5, rx: 8 })
  b.wtext(398, 335, 'Ondine 呼吸诅咒（先天中枢性低通气，PHOX2B）：随意通路完好、自动通路缺位——清醒凭意志呼吸，入睡后随意通路离线、呼吸停摆，须终身夜间机械通气。', { size: 9.5, fill: C.sub, maxW: 275, lh: 14 })
  b.wtext(385, 438, '机械与防御反射：Hering-Breuer 肺扩张反射（迷走传入、防过度充气）；肌梭本体感受在负荷骤增时维持潮气量；咳嗽＝一次「气道清创」；J 感受器感肺间质水肿（心衰呼吸困难的外周起源）。', { size: 9.5, fill: C.sub, maxW: 290, lh: 14 })

  // ============ 二、化学感受器双面板 ============
  b.panel(750, 132, 620, 430, { title: '二、化学感受器：中枢 H^{+} 与外周 PO_{2}' })
  // 中枢
  b.rect(766, 175, 285, 250, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.text(778, 197, '中枢（延髓腹外侧浅表）', { size: 10.5, weight: 700, fill: C.accD })
  b.rect(770, 212, 118, 140, { fill: C.badL, fillOp: 0.25 })
  b.rect(892, 212, 150, 140, { fill: C.accL, fillOp: 0.3 })
  b.ctext(829, 228, '血液', { size: 9, weight: 600, fill: C.badD })
  b.ctext(967, 228, '脑组织液 / CSF', { size: 8.5, weight: 600, fill: C.accD })
  b.line(890, 212, 890, 352, { stroke: C.pro, sw: 2, dash: '6 4' })
  b.circle(820, 262, 14, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(820, 266, 'CO_{2}', { size: 8, weight: 700, fill: C.warnD })
  b.arrow(838, 262, 948, 262, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.text(852, 254, '自由弥散', { size: 8, fill: C.warnD })
  b.text(925, 282, 'CA 水合 → H^{+}', { size: 8.5, weight: 600, fill: C.accD })
  b.circle(965, 305, 13, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(965, 309, 'H^{+}', { size: 8, weight: 700, fill: C.enzD })
  b.circle(832, 312, 11, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(832, 316, 'H^{+}', { size: 7.5, weight: 700, fill: C.enzD })
  b.arrow(848, 312, 876, 312, { stroke: C.enz, sw: 1.4, marker: 'enz' })
  b.line(884, 305, 896, 319, { stroke: C.bad, sw: 2 })
  b.line(896, 305, 884, 319, { stroke: C.bad, sw: 2 })
  b.rect(915, 330, 88, 24, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 10 })
  b.ctext(959, 345, '中枢化学感受器', { size: 8.5, weight: 700, fill: C.accD })
  b.arrow(965, 319, 962, 328, { stroke: C.enz, sw: 1.4, marker: 'enz' })
  b.text(1010, 345, '→通气↑', { size: 8.5, weight: 700, fill: C.accD })
  b.wtext(778, 375, '真正配体＝脑脊液/组织液 H^{+}：CSF 几无蛋白、缓冲薄弱→H^{+} 变化被放大；血中代谢性 H^{+} 难透屏障。贡献 CO_{2} 通气驱动的 70%–80%。', { size: 9, fill: C.sub, maxW: 258, lh: 13.5 })
  // 外周
  b.rect(1056, 175, 300, 250, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.text(1068, 197, '外周：颈动脉体与主动脉体', { size: 10.5, weight: 700, fill: C.badD })
  b.line(1090, 290, 1090, 250, { stroke: C.bad, sw: 5 })
  b.line(1090, 250, 1070, 222, { stroke: C.bad, sw: 4 })
  b.line(1090, 250, 1110, 222, { stroke: C.bad, sw: 4 })
  b.circle(1090, 245, 11, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(1090, 305, '颈总动脉', { size: 8.5, fill: C.badD })
  b.text(1115, 228, 'I 型球细胞', { size: 8, weight: 600, fill: C.badD })
  b.path('M 1101,243 C 1130,233 1150,250 1170,240', { fill: 'none', stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.text(1175, 243, '舌咽神经→延髓', { size: 8.5, fill: C.enzD })
  b.arrow(1210, 320, 1345, 320, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.arrow(1210, 320, 1210, 222, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.ctext(1218, 230, '放电', { size: 8, fill: C.mute })
  b.polyline([[1210, 230], [1250, 245], [1275, 275], [1288, 295], [1310, 302], [1340, 305]], { stroke: C.bad, sw: 2.4 })
  b.line(1288, 225, 1288, 320, { stroke: C.bad, sw: 1.1, dash: '4 4' })
  b.line(1288, 320, 1288, 326, { stroke: C.sub, sw: 1.6 })
  b.ctext(1288, 340, '60', { size: 8, weight: 600, fill: C.sub })
  b.ctext(1310, 360, 'PaO_{2} (mmHg)', { size: 8, weight: 600, fill: C.mute })
  b.text(1213, 285, 'PO_{2}<60 陡增', { size: 8.5, weight: 700, fill: C.badD })
  b.wtext(1068, 385, '感 PO_{2}（弥散到细胞的分压）而非血氧含量：贫血、CO 中毒含量骤降而 PO_{2} 不变→沉默不报；CO_{2}/H^{+} 亦增敏、潜伏期比中枢短。', { size: 9, fill: C.sub, maxW: 272, lh: 13.5 })
  // 底部注释
  b.wtext(766, 440, '安静时 PaO_{2}≥60 mmHg 区间低氧驱动≈0——恰卡在氧离曲线平台失守的临界点；颈动脉体单位重量血流量居全身之首、代谢率高。', { size: 9.5, fill: C.sub, maxW: 590, lh: 14.5 })
  b.wtext(766, 480, '慢性 CO_{2} 潴留：数日后脉络丛与胶质把 HCO_{3}^{-} 转入 CSF、H^{+} 归位→中枢脱敏，低 O_{2} 转为重要驱动——吸氧过浓→低氧驱动骤减、通气塌陷（控制性低浓度氧疗，目标 SpO_{2} 88%–92%）。', { size: 9.5, fill: C.sub, maxW: 590, lh: 14.5 })
  b.wtext(766, 524, 'Haldane 与 Priestley（1905）以吸入 CO_{2} 混合气的自身实验确立「CO_{2} 是呼吸的正常刺激物」。', { size: 9.5, fill: C.mute, maxW: 590, lh: 14.5 })

  // ============ 三、CO₂-通气反应曲线 ============
  b.panel(30, 582, 700, 400, { title: '三、CO_{2}-通气反应：被控变量直接驱动控制器' })
  b.arrow(110, 925, 655, 925, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(110, 925, 110, 710, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(122, 706, '通气量 (L/min)', { size: 9.5, fill: C.sub })
  for (const [p, lb] of [[30, '30'], [40, '40'], [50, '50'], [60, '60'], [70, '70']] as [number, string][]) {
    const tx = 110 + (p - 30) * 13.25
    b.line(tx, 925, tx, 931, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 945, String(lb), { size: 9, fill: C.mute })
  }
  for (const [v, lb] of [[0, '0'], [20, '20'], [40, '40'], [60, '60'], [80, '80']] as [number, string][]) {
    const ty = 925 - v * 2.625
    b.line(104, ty, 110, ty, { stroke: C.sub, sw: 1.6 })
    b.etext(100, ty + 4, String(lb), { size: 9, fill: C.mute })
  }
  b.ctext(377, 968, 'PaCO_{2} (mmHg)', { size: 10, weight: 600, fill: C.sub })
  // 正常反应线
  b.polyline([[149.75, 925], [216.5, 914.5], [282.75, 883], [349, 851.5], [415.25, 820], [481.5, 788.5], [547.75, 757], [614, 725.5]], { stroke: C.acc, sw: 3 })
  // 低氧时（更陡、左移）
  b.polyline([[149.75, 925], [216, 883], [282.75, 841], [349, 799], [415.25, 757], [481.5, 725.5]], { stroke: C.bad, sw: 2.4, dash: '7 5' })
  b.text(430, 720, '低 O_{2} 时更陡（虚线）', { size: 9, weight: 600, fill: C.badD })
  b.text(618, 745, '正常（PO_{2} 100）', { size: 9, fill: C.sub })
  // 设定点
  b.circle(242.5, 901.9, 5, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.line(242.5, 901.9, 242.5, 925, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(110, 901.9, 242.5, 901.9, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.text(252, 920, '设定点 40 mmHg', { size: 9, weight: 600, fill: C.sub })
  b.text(130, 880, '安静通气由 PaCO_{2} 设定', { size: 9, weight: 600, fill: C.sub })
  b.text(330, 892, '斜率：每升 1 mmHg → 通气 +2–3 L/min', { size: 9.5, weight: 600, fill: C.sub })
  b.wtext(130, 745, 'CO_{2} 既是通气产物、又恰是被精确恒定的变量——被控变量直接驱动控制器；O_{2} 仅在 <60 mmHg 时出面接管。', { size: 9.5, fill: C.sub, maxW: 225, lh: 14.5 })

  // ============ 四、异常呼吸模式 ============
  b.panel(750, 582, 620, 400, { title: '四、异常呼吸模式：负反馈失稳的控制论' })
  // 陈施呼吸波形（渐强-渐弱-暂停循环）
  b.arrow(800, 800, 1338, 800, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(800, 800, 800, 622, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(808, 632, '通气量', { size: 8.5, fill: C.mute })
  b.rect(947, 686, 33, 114, { fill: C.badL, fillOp: 0.35 })
  b.rect(1122, 686, 33, 114, { fill: C.badL, fillOp: 0.35 })
  b.rect(1297, 686, 33, 114, { fill: C.badL, fillOp: 0.35 })
  const wf: [number, number][] = []
  const x0 = 805, base = 800, cyc = 175
  for (let x = 0; x <= 525; x += 2) {
    const ph = x % cyc
    let amp = 0
    if (ph < 70) amp = ph / 70
    else if (ph < 140) amp = 1 - (ph - 70) / 70
    const breath = Math.pow(Math.abs(Math.sin((Math.PI * x) / 23)), 1.2)
    wf.push([x0 + x, base - amp * 58 * breath])
  }
  b.polyline(wf, { stroke: C.acc, sw: 2.2 })
  b.ctext(840, 700, '渐强', { size: 9, weight: 600, fill: C.sub })
  b.ctext(910, 700, '渐弱', { size: 9, weight: 600, fill: C.sub })
  b.ctext(963, 678, '呼吸暂停', { size: 8.5, weight: 700, fill: C.badD })
  b.line(805, 825, 980, 825, { stroke: C.mute, sw: 1.3, marker: 'mute', markerStart: 'mute' })
  b.ctext(892, 845, '一个周期 30–60 s（心衰）', { size: 8.5, fill: C.mute })
  b.ctext(1255, 818, '时间 →', { size: 8.5, fill: C.mute })
  // 负反馈环路
  b.rect(820, 862, 100, 26, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(870, 878, '延髓控制器', { size: 9, weight: 700, fill: C.accD })
  b.rect(1000, 862, 90, 26, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1045, 878, '通气', { size: 9, weight: 700, fill: C.accD })
  b.rect(1000, 925, 90, 26, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1045, 941, 'PaCO_{2}', { size: 9, weight: 700, fill: C.accD })
  b.rect(820, 925, 100, 26, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(870, 941, '化学感受器', { size: 9, weight: 700, fill: C.accD })
  b.arrow(920, 875, 998, 875, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(1045, 888, 1045, 923, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(998, 938, 922, 938, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(870, 923, 870, 890, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.text(925, 908, '负反馈', { size: 9, fill: C.mute })
  b.text(782, 905, '增益↑', { size: 8, weight: 700, fill: C.badD })
  b.ctext(960, 958, '循环延迟：数秒→数十秒', { size: 8, weight: 700, fill: C.badD })
  // 右侧注释
  b.text(1105, 855, '陈施呼吸＝环路振荡', { size: 9.5, weight: 700, fill: C.sub })
  b.wtext(1105, 872, '心衰同时满足两条件：循环延迟（感受器读到「过期数据」）＋增益过高——恰满足振荡的工程条件→通气围绕设定点等幅振荡；纠正＝缩短循环时间（治心衰）、降增益。', { size: 9, fill: C.sub, maxW: 250, lh: 13.5 })
  b.wtext(1105, 918, '睡眠呼吸暂停：阻塞型（咽气道在肌张力下降时反复塌陷，鼾声-暂停交替）与中枢型（驱动间歇缺失）；间歇低氧→交感过度激活→高血压，已升格为独立心血管风险。', { size: 9, fill: C.sub, maxW: 250, lh: 13.5 })
}

export default scene({
  title: '呼吸运动的调节：中枢起源、化学感受与异常模式',
  subtitle: '节律源于延髓前包钦格复合体；中枢化学感受器（配体为脑内 H^{+}）贡献 CO_{2} 通气驱动的 70%–80%，外周颈动脉体在 PaO_{2}<60 mmHg 后放电陡增；PaCO_{2} 每升 1 mmHg 通气约增 2–3 L/min；陈施呼吸＝循环延迟＋增益过高的负反馈失稳',
  draw,
})
