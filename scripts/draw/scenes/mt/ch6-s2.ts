// mt ch6-s2 动物的 P 型泵：钠钾泵全景 · 能量账单 · 地高辛级联 · 其他泵速览
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、Na⁺/K⁺-ATPase 全景 =================
  b.panel(30, 132, 760, 437, { title: '一、Na^{+}/K^{+}-ATPase 全景：梯度的总管家' })
  // α 亚型清单（右上角）
  b.text(575, 200, 'α 亚型：同一引擎·不同档位', { size: 11, weight: 700, fill: C.ink })
  b.text(575, 224, 'α1 几乎无处不在', { size: 10, fill: C.sub })
  b.text(575, 246, 'α2 骨骼肌·心肌·星形胶质', { size: 10, fill: C.sub })
  b.text(575, 268, 'α3 神经元', { size: 10, fill: C.sub })
  b.text(575, 292, 'ATP1A2 → 家族性偏瘫型偏头痛', { size: 9.5, fill: C.mute })
  b.text(575, 312, 'ATP1A3 → 快速起病肌张力障碍', { size: 9.5, fill: C.mute })
  // 膜
  b.bilayer(70, 320, 660)
  b.text(70, 306, '细胞外', { size: 10.5, fill: C.mute })
  b.text(70, 356, '细胞质', { size: 10.5, fill: C.mute })
  // β 亚基（糖蛋白）
  b.circle(477, 264, 4.5, { fill: C.ok })
  b.circle(496, 258, 4.5, { fill: C.ok })
  b.circle(515, 264, 4.5, { fill: C.ok })
  b.rect(470, 275, 52, 78, { fill: C.okL, stroke: C.ok, sw: 2, rx: 8 })
  b.ctext(496, 306, 'β', { size: 12, weight: 700, fill: C.okD })
  b.ctext(496, 326, '糖蛋白', { size: 9, fill: C.okD })
  b.ctext(496, 368, '折叠·定向·质控', { size: 9, fill: C.mute })
  // FXYD（γ）磷调节蛋白
  b.rect(215, 292, 26, 46, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 5 })
  b.ctext(228, 366, 'FXYD', { size: 8.5, weight: 700, fill: C.warnD })
  b.ctext(228, 380, '磷调节蛋白', { size: 8.5, fill: C.warnD })
  // α 催化亚基
  b.rect(280, 262, 170, 100, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 12 })
  b.ctext(365, 292, 'α 催化亚基', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(365, 314, '约 110 kDa · 10 TMS', { size: 9.5, fill: C.sub })
  b.ctext(365, 334, '承载全部催化机器', { size: 9.5, fill: C.mute })
  // 离子通道（穿过泵的虚线路径）
  b.line(320, 240, 320, 388, { stroke: C.bad, sw: 1, dash: '4 4', opacity: 0.45 })
  b.line(420, 240, 420, 388, { stroke: C.acc, sw: 1, dash: '4 4', opacity: 0.45 })
  // 3 Na⁺ 出
  b.arrow(320, 386, 320, 368, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(320, 260, 320, 242, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ion(285, 400, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(320, 407, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(355, 400, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(285, 226, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(320, 218, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(355, 226, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ctext(320, 198, '3 Na^{+} 出', { size: 11, weight: 700, fill: C.badD })
  // 2 K⁺ 入
  b.arrow(420, 242, 420, 260, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(420, 368, 420, 386, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ion(395, 226, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ion(445, 226, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ion(395, 402, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ion(445, 396, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ctext(420, 198, '2 K^{+} 入', { size: 11, weight: 700, fill: C.accD })
  // 乌本苷/地高辛位点
  b.polygon([[250, 232], [262, 244], [250, 256], [238, 244]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(200, 226, '乌本苷·地高辛', { size: 9.5, weight: 600, fill: C.enzD })
  b.line(262, 246, 276, 262, { stroke: C.enz, sw: 1.2, dash: '3 3' })
  // ATP 供能
  b.tag(600, 400, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700 })
  b.arrow(568, 390, 458, 355, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  // 计量结论
  b.ctext(345, 448, '每 ATP：3 Na^{+} 出 ＋ 2 K^{+} 入 ＝ 净外移 1 个正电荷 → 生电性（electrogenic）', { size: 11, weight: 700, fill: C.ink })
  b.wtext(46, 474, '循环细节：胞内 3 个 Na^{+} 依次结合才触发磷酸化、胞外 2 个 K^{+} 依次结合才触发脱磷酸——序贯结合使计量恒为 3:2，绝不「找零」；乌本苷恰堵住胞外 K^{+} 位点，故把泵锁死在 E2-P', { size: 10, fill: C.sub, maxW: 710, lh: 23 })
  b.wtext(46, 522, 'β 亚基护卫 α 的折叠与质膜转运；FXYD 家族（旧称 γ 亚基）微调离子亲和力；1785 年 Withering 出版《毛地黄》，1953 年 Schatzmann 指认钠泵靶点——「先有药、后有靶」的倒叙经典', { size: 10, fill: C.sub, maxW: 710, lh: 23 })

  // ================= 二、能量账单与地高辛级联 =================
  b.panel(810, 132, 560, 437, { title: '二、能量账单与地高辛级联' })
  b.text(826, 190, '静息 ATP 花在钠泵上的份额', { size: 11.5, weight: 700, fill: C.ink })
  // 饼图（扇形）
  const pie = (cx: number, cy: number, r: number, a0: number, a1: number, fill: string, stroke: string) => {
    const rad = (d: number) => (d * Math.PI) / 180
    const x0 = cx + r * Math.cos(rad(a0)); const y0 = cy + r * Math.sin(rad(a0))
    const x1 = cx + r * Math.cos(rad(a1)); const y1 = cy + r * Math.sin(rad(a1))
    const large = a1 - a0 > 180 ? 1 : 0
    b.path(`M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z`, { fill, stroke, sw: 1.6 })
  }
  pie(950, 248, 50, 0, 270, C.panelB, C.sub)
  pie(950, 248, 50, -90, 0, C.acc, C.accD)
  b.ctext(971, 230, '25%', { size: 10.5, weight: 700, fill: '#ffffff' })
  b.ctext(927, 274, '其他 75%', { size: 9.5, fill: C.sub })
  b.ctext(950, 322, '全身（静息）', { size: 11.5, weight: 700, fill: C.sub })
  pie(1200, 248, 50, 162, 270, C.panelB, C.sub)
  pie(1200, 248, 50, -90, 162, C.bad, C.badD)
  b.ctext(1224, 269, '70%', { size: 10.5, weight: 700, fill: '#ffffff' })
  b.ctext(1172, 231, '其他 30%', { size: 9.5, fill: C.sub })
  b.ctext(1200, 322, '肾脏（重吸收任务）', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(826, 352, '梯度是存款、利息以 ATP 结算——「主动转运是有代价的秩序」的最好注脚', { size: 10, fill: C.sub, maxW: 520, lh: 18 })
  // 地高辛三级级联
  b.text(826, 388, '地高辛级联：抑制一个泵、放慢一个交换体、富集一种离子', { size: 11.5, weight: 700, fill: C.enzD })
  const cas = (y: number, txt: string, fill: string, stroke: string, tfill: string) => {
    b.rect(846, y, 490, 30, { fill, stroke, sw: 1.6, rx: 7 })
    b.ctext(1091, y + 20, txt, { size: 10.5, weight: 600, fill: tfill })
  }
  cas(402, '① 地高辛特异抑制 Na^{+}/K^{+}-ATPase（α 亚基地高辛位点）', C.enzL, C.enz, C.enzD)
  b.arrow(1091, 434, 1091, 443, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  cas(446, '② 胞内 Na^{+} 浓度升高', C.badL, C.bad, C.badD)
  b.arrow(1091, 478, 1091, 487, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  cas(490, '③ NCX（3 Na^{+} 入 : 1 Ca^{2+} 出）排钙减弱 → 胞内 Ca^{2+} 升高', C.warnL, C.warn, C.warnD)
  b.arrow(1091, 522, 1091, 531, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  cas(534, '④ 肌浆网储钙与收缩力升高（正性肌力）；过量即致心律失常', C.okL, C.ok, C.okD)

  // ================= 三、其他 P 型泵速览 =================
  b.panel(30, 582, 1340, 400, { title: '三、动物的其他 P 型泵速览' })
  const card = (x: number, chip: string, chipC: [string, string, string], name: string, full: string) => {
    const y = 622
    b.rect(x, y, 250, 265, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 8 })
    b.rect(x + 12, y + 12, 46, 22, { fill: chipC[0], stroke: chipC[1], sw: 1.5, rx: 5 })
    b.ctext(x + 35, y + 27, chip, { size: 10.5, weight: 700, fill: chipC[2] })
    b.text(x + 68, y + 27, name, { size: 12, weight: 700, fill: C.ink })
    b.text(x + 12, y + 50, full, { size: 9, fill: C.mute })
    return y
  }
  const topBot = (x: number, y: number, top: string) => {
    b.bilayer(x + 15, y + 92, 220)
    b.text(x + 15, y + 70, top, { size: 8.5, fill: C.mute })
    b.text(x + 15, y + 122, '胞质', { size: 8.5, fill: C.mute })
    b.rect(x + 95, y + 80, 58, 50, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  }
  // —— 卡 1：SERCA
  {
    const x = 46; const y = card(x, 'P2A', [C.accL, C.acc, C.accD], 'SERCA', '肌浆网/内质网 Ca^{2+} 泵（SERCA2a）')
    topBot(x, y, '网腔')
    b.ion(x + 80, y + 120, 'Ca', { r: 11, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
    b.ion(x + 168, y + 120, 'Ca', { r: 11, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
    b.arrow(x + 80, y + 107, x + 80, y + 76, { stroke: C.pro, sw: 1.6, marker: 'pro' })
    b.arrow(x + 168, y + 107, x + 168, y + 76, { stroke: C.pro, sw: 1.6, marker: 'pro' })
    b.ctext(x + 124, y + 68, '2 Ca^{2+} / ATP', { size: 8.5, weight: 600, fill: C.proD })
    b.rect(x + 172, y + 88, 40, 20, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 5 })
    b.ctext(x + 192, y + 101, 'PLN', { size: 8, weight: 700, fill: C.warnD })
    b.line(x + 153, y + 98, x + 170, y + 98, { stroke: C.warn, sw: 1.2, dash: '3 3' })
    b.wtext(x + 12, y + 142, '每 ATP 泵 2 Ca^{2+} 回网腔；心肌 SERCA2a 受「受磷蛋白」手刹抑制，PLN 被 PKA 磷酸化即松刹提速，每次钙瞬变约七成由它收回。工具药：毒胡萝卜素。', { size: 9.5, fill: C.sub, maxW: 224, lh: 23 })
  }
  // —— 卡 2：PMCA
  {
    const x = 306; const y = card(x, 'P2B', [C.accL, C.acc, C.accD], 'PMCA', '质膜 Ca^{2+} 泵（PMCA1–4）')
    topBot(x, y, '胞外')
    b.ion(x + 125, y + 120, 'Ca', { r: 11, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
    b.arrow(x + 125, y + 107, x + 125, y + 76, { stroke: C.pro, sw: 1.6, marker: 'pro' })
    b.ctext(x + 169, y + 68, '1 Ca^{2+} / ATP', { size: 8.5, weight: 600, fill: C.proD })
    b.ellipse(x + 186, y + 115, 24, 14, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
    b.ctext(x + 186, y + 118, 'CaM', { size: 8, weight: 700, fill: C.rnaD })
    b.line(x + 153, y + 112, x + 162, y + 114, { stroke: C.rna, sw: 1.2, dash: '3 3' })
    b.wtext(x + 12, y + 142, '每 ATP 排 1 Ca^{2+} 出细胞；高亲和、低容量，把残余钙精修回约 100 nM 的静息底噪；C 端自抑制被钙调蛋白结合解除，属「精度轨道」。', { size: 9.5, fill: C.sub, maxW: 224, lh: 23 })
  }
  // —— 卡 3：胃 H⁺/K⁺ 泵
  {
    const x = 566; const y = card(x, 'P2C', [C.accL, C.acc, C.accD], '胃 H^{+}/K^{+} 泵', '壁细胞顶膜 H^{+}/K^{+}-ATPase')
    topBot(x, y, '胃腔')
    b.rect(x + 95, y + 80, 58, 50, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
    b.ion(x + 105, y + 120, 'H^{+}', { r: 11, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
    b.arrow(x + 105, y + 107, x + 105, y + 76, { stroke: C.warn, sw: 1.6, marker: 'warn' })
    b.ion(x + 150, y + 56, 'K^{+}', { r: 11, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
    b.arrow(x + 150, y + 68, x + 150, y + 78, { stroke: C.acc, sw: 1.6, marker: 'acc' })
    b.ctext(x + 188, y + 70, '1:1 电中性', { size: 8.5, weight: 600, fill: C.accD })
    b.wtext(x + 12, y + 142, '1 H^{+} 出 : 1 K^{+} 入，电中性；腔内 pH 低至 1–2，H^{+} 浓缩百万倍以上；奥美拉唑＝酸活化前药，在酸性管腔共价修饰泵的半胱氨酸。「质子泵抑制剂」得名于此。', { size: 9.5, fill: C.sub, maxW: 224, lh: 23 })
  }
  // —— 卡 4：P4 翻转酶
  {
    const x = 826; const y = card(x, 'P4', [C.accL, C.acc, C.accD], '磷脂翻转酶', 'Flippase（P4 亚类）')
    b.bilayer(x + 15, y + 92, 220)
    b.text(x + 15, y + 70, '外叶', { size: 8.5, fill: C.mute })
    b.text(x + 15, y + 122, '胞质叶', { size: 8.5, fill: C.mute })
    b.rect(x + 150, y + 82, 42, 36, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 7 })
    b.ctext(x + 171, y + 103, 'P4', { size: 9, weight: 700, fill: C.proD })
    b.circle(x + 111, y + 92, 7, { fill: C.enz, stroke: C.enzD, sw: 1.2 })
    b.text(x + 88, y + 95, 'PS', { size: 8, weight: 700, fill: C.enzD })
    b.arrow(x + 111, y + 84, x + 111, y + 104, { stroke: C.enz, sw: 1.8, marker: 'enz' })
    b.wtext(x + 12, y + 142, '运磷脂不运离子：把 PS/PE 从外叶翻回胞质叶、维持膜脂不对称；PS 外翻是凝血与凋亡「吃我」信号的共同语法，翻转酶失职等于写乱膜的表面语言。', { size: 9.5, fill: C.sub, maxW: 224, lh: 23 })
  }
  // —— 卡 5：ATP7A/B 铜泵
  {
    const x = 1086; const y = card(x, 'P1B', [C.accL, C.acc, C.accD], 'ATP7A/7B', '铜转运 ATP 酶（P1B 亚类）')
    topBot(x, y, '高尔基腔')
    b.rect(x + 95, y + 80, 58, 50, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
    b.ion(x + 80, y + 120, 'Cu^{+}', { r: 11, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 7.5 })
    b.ion(x + 160, y + 120, 'Cu^{+}', { r: 11, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 7.5 })
    b.arrow(x + 80, y + 107, x + 80, y + 76, { stroke: C.rna, sw: 1.6, marker: 'rna' })
    b.arrow(x + 160, y + 107, x + 160, y + 76, { stroke: C.rna, sw: 1.6, marker: 'rna' })
    b.wtext(x + 12, y + 142, '把胞内 Cu^{+} 送入高尔基腔装配铜蓝蛋白；超载时「搬家」转位执行外排；ATP7A 突变→Menkes（进不来）、ATP7B→Wilson（排不出），互补的一对遗传病（详见第 10 章）。', { size: 9.5, fill: C.sub, maxW: 224, lh: 23 })
  }
  // 底部双轨说明
  b.text(46, 916, '钙清除双轨制：SERCA 容量轨道（每次钙瞬变约七成）＋ PMCA 精度轨道（精修至约 100 nM 底噪）＋ NCX 两成分流', { size: 10.5, weight: 600, fill: C.sub })
  b.text(46, 944, '同族共性：全部循 Post-Albers 循环、共用 DKTGT 天冬氨酸账房——「换业务不换账房」；各泵化学计量与临床镜像详见正文表格', { size: 10.5, fill: C.sub })
}

export default scene({
  title: '动物的 P 型泵：钠钾泵、能量账单与地高辛级联',
  subtitle: 'Na^{+}/K^{+}-ATPase 以 αβ（＋FXYD）组装，每 ATP 泵出 3 Na^{+}、泵入 2 K^{+}（净 -1·生电），静息全身约 25% 的 ATP 供钠泵、肾高达 70%；地高辛三级级联以「抑泵→Na^{+}↑→NCX 排钙减弱→Ca^{2+}↑→正性肌力」治病；SERCA-受磷蛋白、PMCA-CaM、胃 H^{+}/K^{+} 泵-奥美拉唑、P4 翻转酶与 ATP7A/7B 铜泵速览',
  draw,
})
