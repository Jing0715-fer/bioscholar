// mt ch7-s1 V-ATPase 结构与机制：V1/V0 总装 · 旋转催化与质子井 · H+/ATP 比 · 可逆解离
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、V1/V0 双旋转马达总装 =================
  b.panel(30, 132, 660, 470, { title: '一、V1/V0 双旋转马达总装' })
  // 囊泡腔（顶）
  b.text(60, 174, '囊泡腔', { size: 10.5, fill: C.mute })
  b.ion(196, 170, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ion(224, 177, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.tag(566, 174, '腔内 pH 4.5–5.0', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10, weight: 700 })
  // 膜
  b.bilayer(60, 195, 560, { h: 40 })
  // V0：e / c 环 / a / d
  b.rect(268, 200, 14, 34, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 4 })
  b.ctext(275, 221, 'e', { size: 9, weight: 700, fill: C.dnaD })
  b.rect(292, 186, 92, 64, { fill: C.rnaL, stroke: C.rna, sw: 2.2, rx: 9 })
  for (let i = 0; i < 6; i++) b.line(306 + i * 13, 192, 306 + i * 13, 244, { stroke: C.rna, sw: 1, opacity: 0.45 })
  b.rect(384, 184, 44, 68, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 6 })
  b.ctext(406, 226, 'a', { size: 14, weight: 700, fill: C.proD })
  b.rect(324, 250, 30, 18, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(339, 264, 'd', { size: 9.5, weight: 700, fill: C.accD })
  // 中央转子轴 D/F
  b.rect(332, 268, 10, 130, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.text(356, 300, 'D·F 中央转子轴', { size: 9.5, weight: 600, fill: C.accD })
  b.line(353, 296, 344, 288, { stroke: C.faint, sw: 1 })
  // V1 六聚体 A3B3
  const hexV: [number, number, string][] = [
    [406, 402, 'B'], [372, 343, 'A'], [304, 343, 'B'], [270, 402, 'A'], [304, 461, 'B'], [372, 461, 'A'],
  ]
  for (const [cx, cy, t] of hexV) {
    const isA = t === 'A'
    b.circle(cx, cy, 27, { fill: isA ? C.enzL : C.accL, stroke: isA ? C.enz : C.acc, sw: 2 })
    b.ctext(cx, cy + 5, t, { size: 15, weight: 700, fill: isA ? C.enzD : C.accD })
  }
  // 催化位点（3 个 A/B 界面）
  for (const [dx, dy] of [[389, 372], [287, 372], [338, 461]] as [number, number][]) {
    b.circle(dx, dy, 5, { fill: C.enz, stroke: C.enzD, sw: 1 })
  }
  b.text(450, 372, '催化位点 ×3', { size: 9.5, weight: 700, fill: C.enzD })
  b.text(450, 390, '（A/B 界面）', { size: 9.5, fill: C.sub })
  b.line(446, 369, 396, 372, { stroke: C.faint, sw: 1 })
  // 外周柄（定子）与 C、H 亚基
  b.spline([[262, 372], [216, 320], [216, 254]], { stroke: C.pro, sw: 3 })
  b.spline([[414, 372], [460, 320], [452, 256]], { stroke: C.pro, sw: 3 })
  b.rect(203, 232, 26, 24, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(216, 248, 'C', { size: 11, weight: 700, fill: C.proD })
  b.rect(439, 232, 26, 24, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(452, 248, 'H', { size: 11, weight: 700, fill: C.proD })
  // a 亚基两条半通道 + H+ 装货/卸货
  b.path('M 420,250 Q 414,238 402,228', { stroke: C.warn, sw: 1.6, dash: '4 3' })
  b.path('M 392,214 Q 386,204 396,190', { stroke: C.warn, sw: 1.6, dash: '4 3' })
  b.circle(386, 226, 4.5, { fill: C.enz, stroke: C.enzD, sw: 1 })
  b.ion(472, 286, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(457, 278, 428, 261, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(398, 188, 424, 176, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(436, 169, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.text(480, 300, '装货（胞质侧）', { size: 9, weight: 600, fill: C.warnD })
  b.text(456, 154, '卸货（腔侧）', { size: 9, weight: 600, fill: C.warnD })
  b.text(445, 200, 'a 亚基', { size: 10, weight: 700, fill: C.proD })
  b.text(445, 218, '两条半通道', { size: 9.5, fill: C.sub })
  b.line(443, 215, 429, 219, { stroke: C.faint, sw: 1 })
  // 左侧注记
  b.text(46, 216, 'V0（膜内）', { size: 10.5, weight: 700, fill: C.sub })
  b.text(66, 258, 'c 环 ×10（酵母）', { size: 9.5, fill: C.rnaD, weight: 600 })
  b.wtext(46, 322, 'E_{3}G_{3} 外周柄与 C、H 构成定子网络（弹性棘轮，吸收转子反冲矩）', { size: 9.5, fill: C.sub, maxW: 150, lh: 18 })
  b.text(46, 386, 'V1（胞质侧）', { size: 10.5, weight: 700, fill: C.sub })
  b.text(46, 404, 'ATP 水解马达', { size: 9.5, fill: C.mute })
  b.text(46, 530, '细胞质（pH≈7.2）', { size: 10, fill: C.mute })
  // ATP 供能
  b.tag(150, 430, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700 })
  b.arrow(183, 424, 278, 377, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.tag(526, 430, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700 })
  b.arrow(516, 424, 397, 377, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  // 底部总结
  b.wtext(46, 560, '亚基命名冠 VHA- 前缀、基因名 ATP6V1（编码 V1）/ATP6V0（编码 V0）；每个 c 亚基带一个可质子化的 Glu，经 a 的两条半通道「装货—卸货」过膜（Mitchell 质子井），使 H^{+} 深入膜中部完成交接', { size: 9.5, fill: C.sub, maxW: 620, lh: 23 })

  // ================= 二、旋转催化与质子井半通道 =================
  b.panel(710, 132, 660, 470, { title: '二、旋转催化与质子井半通道' })
  // —— 左：三位点轮换 ——
  b.text(726, 184, '三个催化位点轮换（旋转催化）', { size: 12, weight: 700, fill: C.enzD })
  b.circle(860, 315, 80, { fill: C.bg, stroke: C.line, sw: 1.6 })
  b.circle(860, 235, 26, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(860, 240, 'ATP', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(860, 198, '结合 ATP', { size: 9.5, weight: 600, fill: C.rnaD })
  b.circle(793, 354, 26, { fill: '#ffffff', stroke: C.line, sw: 1.8 })
  b.ctext(793, 358, '空置', { size: 10.5, weight: 700, fill: C.mute })
  b.ctext(793, 398, '待结合', { size: 9.5, fill: C.mute })
  b.circle(927, 354, 26, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(927, 358, 'ADP+Pi', { size: 9, weight: 700, fill: C.accD })
  b.ctext(927, 398, '产物卸下', { size: 9.5, fill: C.accD })
  b.circle(860, 315, 22, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(860, 312, 'D·F', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(860, 329, '转子轴', { size: 8, fill: C.proD })
  b.path('M 912,315 A 52,52 0 0 0 886,270', { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.text(946, 300, '120°/步', { size: 9.5, weight: 700, fill: C.proD })
  b.wtext(726, 428, '每水解 1 分子 ATP，D/F 中央轴转过 120° 并带动 c 环转动——位点轮换供能、转子旋转做功，与 F 型完全同源而能量流向相反', { size: 9.5, fill: C.sub, maxW: 262, lh: 23 })
  b.wtext(726, 500, '产物 ADP 偶尔滞留位点、短暂锁停旋转（「喘息」调节）：既防空转烧 ATP，也参与稳态速率调节', { size: 9.5, fill: C.sub, maxW: 262, lh: 23 })
  // —— 右：质子井 ——
  b.text(1014, 184, '质子井：两条半通道＋旋转位点', { size: 12, weight: 700, fill: C.accD })
  b.bilayer(1026, 302, 310, { h: 38 })
  b.text(1032, 284, '囊泡腔', { size: 10, fill: C.mute })
  b.text(1032, 368, '细胞质', { size: 10, fill: C.mute })
  b.rect(1090, 296, 46, 46, { fill: C.rnaL, stroke: C.rna, sw: 2.2, rx: 8 })
  for (let i = 0; i < 3; i++) b.line(1102 + i * 12, 300, 1102 + i * 12, 338, { stroke: C.rna, sw: 1, opacity: 0.45 })
  b.rect(1148, 294, 46, 50, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 5 })
  b.ctext(1171, 323, 'a', { size: 13, weight: 700, fill: C.proD })
  b.spline([[1078, 352], [1113, 367], [1146, 352]], { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(1112, 390, 'c 环旋转', { size: 9.5, weight: 700, fill: C.rnaD })
  b.circle(1141, 320, 4.5, { fill: C.enz, stroke: C.enzD, sw: 1 })
  b.ctext(1141, 360, 'Glu 位点', { size: 9, weight: 600, fill: C.enzD })
  b.path('M 1186,356 Q 1192,336 1170,324', { stroke: C.warn, sw: 1.7, dash: '4 3', marker: 'warn' })
  b.path('M 1156,308 Q 1144,300 1152,284', { stroke: C.warn, sw: 1.7, dash: '4 3', marker: 'warn' })
  b.ion(1218, 382, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(1205, 373, 1190, 360, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(1128, 264, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(1148, 282, 1136, 272, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.text(1244, 352, '胞质半通道（装货）', { size: 9, weight: 600, fill: C.warnD })
  b.line(1240, 349, 1192, 350, { stroke: C.faint, sw: 1 })
  b.text(1244, 292, '腔侧半通道（卸货）', { size: 9, weight: 600, fill: C.warnD })
  b.line(1240, 289, 1198, 292, { stroke: C.faint, sw: 1 })
  // c 环俯视小图
  b.circle(1246, 452, 46, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  for (let i = 0; i < 10; i++) {
    const a = (i * Math.PI * 2) / 10
    b.line(1246, 452, 1246 + 46 * Math.cos(a), 452 + 46 * Math.sin(a), { stroke: C.rna, sw: 1.2, opacity: 0.55 })
  }
  b.circle(1246, 452, 8, { fill: C.rna })
  b.ctext(1246, 516, 'c 环俯视：10 拷贝', { size: 9.5, weight: 600, fill: C.rnaD })
  b.wtext(1026, 538, '半通道向膜中部下探、内衬极性与带电残基（质子井）；两条半通道互不贯通，靠旋转的质子化位点拼成完整跨膜通路', { size: 9.5, fill: C.sub, maxW: 330, lh: 23 })

  // ================= 三、c 环拷贝数决定 H+/ATP 比 =================
  b.panel(30, 617, 660, 368, { title: '三、c 环拷贝数决定 H^{+}/ATP 比' })
  b.rect(46, 660, 274, 42, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(183, 687, 'V1 每圈水解 3 ATP', { size: 11.5, weight: 600, fill: C.ink })
  b.arrow(183, 702, 183, 714, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(46, 716, 274, 42, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(183, 743, 'c 环每圈转位 10 H^{+}', { size: 11.5, weight: 600, fill: C.ink })
  b.arrow(183, 758, 183, 770, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(46, 772, 274, 54, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 8 })
  b.ctext(183, 796, 'H^{+}/ATP ≈ 10 ÷ 3', { size: 13.5, weight: 700, fill: C.enzD })
  b.ctext(183, 816, '≈ 3.3 H^{+}/ATP（酵母口径）', { size: 10.5, weight: 600, fill: C.enzD })
  b.wtext(46, 852, '拷贝数多→步幅小→单步做功少，可泵的极限质子动力势更高；拷贝数少→单步做功大、对既有梯度抽吸力强——V 型与 F 型都用这一几何参数调校所在膜的能量环境', { size: 9.5, fill: C.sub, maxW: 276, lh: 23 })
  b.wtext(46, 935, '泵入与漏出的平衡点通常落在腔内 pH 4.5–5.0：多数溶酶体止步于此，并非巧合', { size: 9.5, fill: C.sub, maxW: 276, lh: 23 })
  // —— 右：条形图 ——
  b.text(362, 668, 'c 环拷贝数 → H^{+}/ATP', { size: 12, weight: 700, fill: C.sub })
  b.text(362, 692, 'V 型本节（酵母 10 拷贝）；F 型三例第四节对照展开', { size: 9, fill: C.mute })
  b.ctext(515, 714, '单位：H^{+}/ATP', { size: 9.5, fill: C.mute })
  b.line(368, 915, 368, 726, { stroke: C.sub, sw: 1.8 })
  b.line(368, 915, 660, 915, { stroke: C.sub, sw: 2, marker: 'ink' })
  const ty = (v: number) => 915 - (v / 5.2) * 189
  ;[0, 2, 4].forEach(v => {
    b.line(362, ty(v), 368, ty(v), { stroke: C.sub, sw: 1.5 })
    b.etext(358, ty(v) + 3.5, String(v), { size: 9, fill: C.mute })
  })
  const bars: [number, number, string, string, string, string][] = [
    [386, 3.3, '≈3.3', 'V·酵母', 'c 环 10', 'enz'],
    [466, 2.7, '≈2.7', 'F·哺乳', 'c 环 8', 'acc'],
    [534, 3.3, '≈3.3', 'F·酵母', 'c 环 10', 'acc'],
    [602, 4.7, '≈4.7', 'F·叶绿', 'c 环 14', 'acc'],
  ]
  for (const [bx, v, vl, lb, lb2, key] of bars) {
    const h = (v / 5.2) * 189
    const col = key === 'enz' ? C.enz : C.acc
    const colL = key === 'enz' ? C.enzL : C.accL
    const colD = key === 'enz' ? C.enzD : C.accD
    b.rect(bx, 915 - h, 42, h, { fill: colL, stroke: col, sw: 2, rx: 4 })
    b.ctext(bx + 21, 915 - h - 9, vl, { size: 11, weight: 700, fill: colD })
    b.ctext(bx + 21, 937, lb, { size: 10, weight: 700, fill: C.ink })
    b.ctext(bx + 21, 955, lb2, { size: 9, fill: C.mute })
  }

  // ================= 四、可逆解离：节能开关与单向保险 =================
  b.panel(710, 617, 660, 368, { title: '四、可逆解离：节能开关与单向保险' })
  const miniHex = (cx: number, cy: number, r: number, rad: number) => {
    const pos: [number, number, string][] = [
      [cx + rad, cy, 'B'], [cx + rad / 2, cy - rad * 0.87, 'A'], [cx - rad / 2, cy - rad * 0.87, 'B'],
      [cx - rad, cy, 'A'], [cx - rad / 2, cy + rad * 0.87, 'B'], [cx + rad / 2, cy + rad * 0.87, 'A'],
    ]
    for (const [px, py, t] of pos) {
      const isA = t === 'A'
      b.circle(px, py, r, { fill: isA ? C.enzL : C.accL, stroke: isA ? C.enz : C.acc, sw: 1.6 })
      b.ctext(px, py + 3.5, t, { size: 9, weight: 700, fill: isA ? C.enzD : C.accD })
    }
  }
  // —— 状态①：整泵工作 ——
  b.text(726, 668, '① 葡萄糖充足 → 整泵工作', { size: 11, weight: 700, fill: C.okD })
  b.bilayer(744, 700, 240, { h: 22 })
  b.rect(826, 694, 44, 32, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 7 })
  b.rect(843, 726, 10, 22, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  miniHex(848, 780, 12, 27)
  b.ion(900, 684, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.arrow(866, 692, 888, 686, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.tag(768, 764, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10, weight: 700 })
  b.arrow(793, 762, 807, 772, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  // —— 解离箭头 ——
  b.arrow(848, 820, 848, 840, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.text(862, 834, '数分钟内解离', { size: 9, weight: 600, fill: C.badD })
  // —— 状态②：V1 脱离 V0 ——
  b.text(726, 858, '② 葡萄糖缺乏 → V1 整体脱离 V0', { size: 11, weight: 700, fill: C.badD })
  b.bilayer(744, 888, 240, { h: 22 })
  b.rect(826, 880, 44, 32, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 7 })
  b.line(818, 876, 878, 876, { stroke: C.bad, sw: 2.2, dash: '5 4' })
  b.text(892, 892, 'V0 通路封闭', { size: 9, weight: 600, fill: C.badD })
  miniHex(800, 948, 10, 23)
  b.tag(884, 940, 'H 亚基＝刹车', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9.5, weight: 700 })
  b.text(846, 972, '游离 V1 被锁、不再水解 ATP', { size: 9, fill: C.sub })
  // RAVE 重装
  b.spline([[978, 902], [1010, 800], [978, 722]], { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.etext(994, 806, 'RAVE 复合体重装', { size: 9.5, weight: 700, fill: C.okD })
  // —— 右：为什么只水解不合成 ——
  b.text(1030, 670, '为什么 V 型生理上只水解、不合成？', { size: 12, weight: 700, fill: C.enzD })
  b.rect(1030, 686, 322, 96, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(1044, 710, '① 末端抑制（结构保险）', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(1044, 732, '游离或解离态下 H 亚基换位充当「刹车」，锁住 V1 的水解活动、防空转烧 ATP；催化机器对水解方向作动力学优化，合成方向能垒远高于 F 型', { size: 9.5, fill: C.sub, maxW: 294, lh: 21 })
  b.rect(1030, 794, 322, 88, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(1044, 818, '② 动力学不可逆性（能量保险）', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(1044, 840, '内体与溶酶体膜的质子动力势通常不足 200 mV，远不足以把 V 型推回合成方向', { size: 9.5, fill: C.sub, maxW: 294, lh: 21 })
  b.rect(1030, 894, 322, 84, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 8 })
  b.text(1044, 916, '※ 并非分子层面的绝对禁令', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(1044, 938, '体外施加远超生理的 PMF，V-ATPase 可反向旋转并合成可观测的 ATP——方向设定写在动力学常数与调控件上', { size: 9.5, fill: C.enzD, maxW: 294, lh: 21 })
}

export default scene({
  title: 'V 型 ATPase 的结构与机制',
  subtitle: 'V1（胞质侧 A3B3 水解马达＋E3G3/C/H 定子网络）与 V0（膜内 a·c 环·d·e 质子通路）组成双旋转马达：三位点旋转催化推动 D/F 中央轴与 c 环，a 亚基两条互不贯通的半通道（质子井）装货—卸货；酵母 c 环 10 拷贝 → 约 3.3 H^{+}/ATP；末端抑制＋动力学不可逆双保险钉死水解方向，葡萄糖缺乏数分钟触发 V1 可逆解离、由 RAVE 复合体重装',
  draw,
})
