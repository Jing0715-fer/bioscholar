// ph ch8-s1 动脉血压的神经调节：压力感受器反射与第二梯队
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、感受器解剖位置 ============
  b.panel(30, 132, 430, 430, { title: '一、感受器解剖：颈动脉窦与主动脉弓' })
  b.ellipse(225, 200, 52, 38, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(225, 204, '脑', { size: 12.5, weight: 700, fill: C.sub })
  b.rect(196, 244, 58, 26, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 9 })
  b.tag(225, 257, 'NTS', { size: 10, fill: C.proL, stroke: C.pro, tfill: C.proD, weight: 700 })
  b.text(262, 260, '延髓', { size: 9.5, fill: C.mute })
  // 颈动脉分叉与窦
  b.path('M 170,306 L 170,254 C 170,236 184,230 198,234', { stroke: C.acc, sw: 3.5, fill: 'none' })
  b.path('M 170,306 C 174,292 182,280 194,272', { stroke: C.sub, sw: 2.5, fill: 'none' })
  b.line(170, 306, 170, 348, { stroke: C.acc, sw: 3.5 })
  b.ellipse(170, 296, 9, 14, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.circle(188, 300, 6.5, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.path('M 163,288 C 150,272 170,258 196,258', { stroke: C.enz, sw: 1.8, dash: '5 4', fill: 'none', marker: 'enz' })
  b.text(120, 272, 'CN IX', { size: 9.5, weight: 700, fill: C.enzD })
  b.text(52, 288, '颈动脉窦', { size: 10, weight: 700, fill: C.accD })
  b.arrow(96, 288, 158, 292, { stroke: C.acc, sw: 1.3, marker: 'acc' })
  b.text(215, 320, '颈动脉体', { size: 9.5, weight: 700, fill: C.warnD })
  b.arrow(212, 316, 196, 303, { stroke: C.warn, sw: 1.3, marker: 'warn' })
  b.text(215, 336, '（PaO_{2}·PaCO_{2}·pH）', { size: 8.5, fill: C.mute })
  // 心脏与主动脉弓
  b.path('M 300,398 C 282,384 266,374 266,358 C 266,346 278,340 288,346 C 294,350 298,356 300,362 C 302,356 306,350 312,346 C 322,340 334,346 334,358 C 334,374 318,384 300,398 Z', { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(300, 372, '心', { size: 10.5, weight: 700, fill: C.badD })
  b.path('M 288,364 C 286,338 300,324 316,324 C 332,324 346,340 348,364', { stroke: C.bad, sw: 4.5, fill: 'none' })
  b.circle(332, 330, 5.5, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.path('M 318,328 C 300,300 280,278 256,262', { stroke: C.enz, sw: 1.8, dash: '5 4', fill: 'none', marker: 'enz' })
  b.text(310, 296, 'CN X', { size: 9.5, weight: 700, fill: C.enzD })
  b.text(368, 302, '主动脉体', { size: 9.5, weight: 700, fill: C.warnD })
  b.arrow(364, 306, 336, 328, { stroke: C.warn, sw: 1.3, marker: 'warn' })
  b.text(366, 352, '主动脉弓', { size: 10, weight: 700, fill: C.accD })
  b.arrow(362, 348, 350, 358, { stroke: C.acc, sw: 1.3, marker: 'acc' })
  b.wtext(46, 448, '压力感受器＝血管外膜内的牵张感受器：对每一心搏的搏动性牵张随节放电，感受的是壁牵张而非压强本身；颈动脉窦传入经 Hering 神经并入 CN IX，主动脉弓传入行走于 CN X（兔的主动脉神经独立成束，是经典实验解剖的便利）。', { size: 9.5, fill: C.sub, maxW: 380, lh: 15 })
  b.wtext(46, 516, '两条传入同归延髓孤束核（NTS）：一路兴奋迷走背核与疑核，一路抑制 RVLM（交感缩血管中枢的引擎）。', { size: 9.5, fill: C.sub, maxW: 380, lh: 15 })

  // ============ 二、降压反射闭环 ============
  b.panel(470, 132, 900, 430, { title: '二、降压反射：秒级负反馈闭环' })
  b.tag(1250, 175, 'MAP＝CO×SVR', { size: 10.5, fill: C.panelB, stroke: C.sub, tfill: C.sub, weight: 700 })
  b.tag(560, 200, '血压骤升（MAP↑）', { size: 11, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.tag(745, 200, '窦·弓牵张↑', { size: 11, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(920, 200, '传入频率↑（CN IX/X）', { size: 11, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(1090, 200, 'NTS 整合', { size: 11, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.arrow(622, 200, 701, 200, { stroke: C.sub, sw: 1.8 })
  b.arrow(789, 200, 847, 200, { stroke: C.sub, sw: 1.8 })
  b.arrow(993, 200, 1052, 200, { stroke: C.sub, sw: 1.8 })
  b.arrow(1090, 214, 1090, 305, { stroke: C.sub, sw: 1.8 })
  b.tag(1110, 320, '迷走↑·交感↓（抑 RVLM）', { size: 11, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.ctext(1110, 352, '（迷走背核·疑核兴奋；抑制延髓头端腹外侧区）', { size: 9, fill: C.mute })
  b.path('M 1031,326 C 995,350 960,375 933,393', { stroke: C.sub, sw: 1.8, fill: 'none', marker: 'ink' })
  b.tag(860, 400, 'HR·收缩力↓＋血管舒张', { size: 11, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(610, 400, 'CO↓·SVR↓→MAP 回落', { size: 11, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(787, 400, 682, 400, { stroke: C.sub, sw: 1.8 })
  b.path('M 612,386 C 612,335 565,255 561,216', { stroke: C.ok, sw: 2, dash: '6 4', fill: 'none', marker: 'ok' })
  b.circle(495, 300, 13, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.line(488, 300, 502, 300, { stroke: C.okD, sw: 2.2 })
  b.text(515, 304, '负反馈·数秒', { size: 10, weight: 700, fill: C.okD })
  b.wtext(486, 470, '全程数秒——机体最快的血压防线；切断「缓冲神经」后血压均值尚存、逐搏波动剧增：压力感受器更像「减震器」而非「恒压器」。', { size: 9.5, fill: C.sub, maxW: 860, lh: 15 })
  b.wtext(486, 498, '双向运转：血压骤降时同一闭环反向加压（HR↑·血管收缩）；临床反向利用——颈动脉窦按摩终止阵发性室上速。', { size: 9.5, fill: C.sub, maxW: 860, lh: 15 })
  b.wtext(486, 526, '库欣反射：颅内压↑→脑灌注压（MAP−ICP）↓→交感风暴升压→压力感受器对骤升血压回报心动过缓（详见第四面板）。', { size: 9.5, fill: C.mute, maxW: 860, lh: 15 })

  // ============ 三、压力感受器重调定 ============
  b.panel(30, 575, 430, 405, { title: '三、压力感受器重调定：治不了高血压' })
  b.text(60, 625, '血压持续升高 1–2 天内，感受器工作点上移——在新的高压水平上重新「尽职」。', { size: 9.5, fill: C.sub })
  b.text(60, 648, '故该反射不承担长期降压任务；慢性高血压成因须到体液-肾脏层面寻找。', { size: 9.5, fill: C.sub })
  b.text(112, 674, '放电频率 (imp/s)', { size: 10, weight: 600, fill: C.sub })
  b.axis(110, 900, 290, 220, {
    xticks: [[0, '40'], [0.5, '100'], [1, '160']], yticks: [[0, '0'], [0.5, '50'], [1, '100']], grid: false,
    xlabel: 'MAP (mmHg)',
  })
  b.curve(110, 900, 290, 220, [[0, 0.02], [0.17, 0.08], [0.33, 0.28], [0.46, 0.5], [0.58, 0.72], [0.75, 0.92], [1, 0.98]], { smooth: true, stroke: C.acc, sw: 2.8 })
  b.curve(110, 900, 290, 220, [[0.25, 0.02], [0.42, 0.08], [0.58, 0.28], [0.71, 0.5], [0.83, 0.72], [0.98, 0.92]], { smooth: true, stroke: C.bad, sw: 2.4, dash: '7 5' })
  b.circle(243, 790, 4.5, { fill: C.acc })
  b.circle(316, 790, 4.5, { fill: C.bad })
  b.arrow(249, 790, 308, 790, { stroke: C.bad, sw: 1.6, dash: '4 4', marker: 'bad' })
  b.text(252, 814, '工作点右移 ≈+30 mmHg', { size: 9, weight: 700, fill: C.badD })
  b.text(356, 676, '正常', { size: 10, weight: 700, fill: C.accD })
  b.text(356, 712, '重调定', { size: 10, weight: 700, fill: C.badD })
  b.text(60, 968, '当代再评价：重调定不完全，慢性期仍有缓冲贡献；颈动脉窦电刺激已用于顽固性高血压。', { size: 9.5, fill: C.sub })

  // ============ 四、第二梯队 ============
  b.panel(470, 575, 900, 405, { title: '四、化学感受器、心肺容量感受器与脑缺血反应' })
  b.line(778, 602, 778, 955, { stroke: C.line, sw: 1 })
  b.line(1048, 602, 1048, 955, { stroke: C.line, sw: 1 })
  // 化学感受器
  b.text(486, 616, '① 化学感受器（颈/主动脉体）', { size: 12, weight: 700, fill: C.warnD })
  b.text(500, 648, '放电频率', { size: 9.5, weight: 600, fill: C.sub })
  b.axis(500, 830, 250, 170, {
    xticks: [[0, '0'], [0.4, '40'], [0.6, '60'], [1, '100']], yticks: [[0, '0'], [1, '↑']], grid: false,
    xlabel: 'PaO_{2} (mmHg)',
  })
  b.curve(500, 830, 250, 170, [[0, 0.95], [0.2, 0.75], [0.4, 0.35], [0.6, 0.18], [0.8, 0.1], [1, 0.06]], { smooth: true, stroke: C.warn, sw: 2.6 })
  b.line(650, 660, 650, 830, { stroke: C.bad, sw: 1.2, dash: '4 4' })
  b.text(656, 676, 'PaO_{2}<60', { size: 9, weight: 700, fill: C.badD })
  b.wtext(486, 900, '平时不作「氧报警」（Hb 氧离曲线平台）；PaO_{2} 低于 60 mmHg 后血氧含量陡降、放电才陡升；兼测 PaCO_{2} 升高与 pH 下降。主要使命在呼吸调节；循环效应＝交感缩血管＋心率增快。', { size: 9.5, fill: C.sub, maxW: 280, lh: 14 })
  // 心肺容量感受器
  b.text(790, 616, '② 心肺容量感受器（低压系统）', { size: 12, weight: 700, fill: C.okD })
  b.tag(880, 650, '心房·心室·肺血管容量↑', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(880, 662, 880, 684, { stroke: C.sub, sw: 1.6 })
  b.tag(880, 700, 'B 型感受器放电↑（CN X）', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(880, 712, 880, 739, { stroke: C.sub, sw: 1.6 })
  b.tag(880, 752, '↓ADH 释放', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.arrow(880, 763, 880, 772, { stroke: C.sub, sw: 1.4 })
  b.tag(880, 784, '↓肾素·↑ANP', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.arrow(880, 795, 880, 804, { stroke: C.sub, sw: 1.4 })
  b.tag(880, 816, '肾脏排水排钠', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.wtext(790, 856, '感受血容量而非血压——血量的长期调节由此入门；1915 年 Bainbridge 房压升高致心率加快反射同属此家族。', { size: 9.5, fill: C.sub, maxW: 270, lh: 14 })
  // 脑缺血反应
  b.text(1080, 616, '③ 脑缺血反应（末位防线）', { size: 12, weight: 700, fill: C.badD })
  b.tag(1180, 652, '脑血流严重不足', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.arrow(1180, 664, 1180, 686, { stroke: C.sub, sw: 1.6 })
  b.tag(1180, 702, '脑干 CO_{2}·H^{+} 积聚', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.arrow(1180, 714, 1180, 736, { stroke: C.sub, sw: 1.6 })
  b.tag(1180, 752, '强大交感放电·MAP↑↑', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.rect(1090, 786, 250, 88, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.5, rx: 8 })
  b.ctext(1215, 806, '库欣反射（Cushing）', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(1215, 830, '血压升高·心动过缓·呼吸不规则', { size: 10, fill: C.warnD })
  b.ctext(1215, 850, '（三联征＝颅内压迫近动脉压的危象）', { size: 9, fill: C.mute })
  b.wtext(1080, 902, '颅内压↑使脑灌注压（MAP−ICP）下降触发；压力感受器又对骤升的血压回报反射性心动过缓。', { size: 9.5, fill: C.sub, maxW: 270, lh: 14 })
}

export default scene({
  title: '动脉血压的神经调节：压力感受器反射与第二梯队',
  subtitle: 'MAP＝CO×SVR（安静约 120/80 mmHg、MAP 约 93 mmHg）；颈动脉窦/主动脉弓牵张感受器经 CN IX/X 传入孤束核，迷走↑＋交感↓构成秒级降压闭环；持续高压 1–2 天内重调定故不承担长期降压；化学感受器 PaO₂<60 mmHg 才兴奋，心肺容量感受器开启血量长期调节，脑缺血反应为末位升压防线',
  draw,
})
