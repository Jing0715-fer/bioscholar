// mt ch6-s4 主引擎对照：动物 Na⁺ 循环 vs 植物 H⁺ 循环（学科招牌对照图）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、两台引擎并排剖面 =================
  b.panel(30, 132, 1340, 358, { title: '一、两台引擎并排剖面：同构而不同币' })
  b.line(700, 180, 700, 470, { stroke: C.faint, sw: 1.3, dash: '7 6' })
  b.circle(700, 300, 28, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(700, 306, 'vs', { size: 13, weight: 700, fill: C.sub })
  b.ctext(700, 172, '同为 P 型泵·同 10 TMS·同生电（各净 −1）', { size: 10.5, weight: 700, fill: C.mute })
  // —— 左：动物 Na⁺/K⁺-ATPase ——
  b.text(60, 188, '动物：Na^{+}/K^{+}-ATPase（P2C）', { size: 12.5, weight: 700, fill: C.accD })
  b.bilayer(70, 322, 590)
  b.text(70, 308, '细胞外', { size: 10, fill: C.mute })
  b.text(70, 360, '细胞质', { size: 10, fill: C.mute })
  // β 亚基
  b.circle(477, 266, 4.5, { fill: C.ok })
  b.circle(495, 260, 4.5, { fill: C.ok })
  b.circle(513, 266, 4.5, { fill: C.ok })
  b.rect(470, 277, 50, 76, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(495, 308, 'β', { size: 12, weight: 700, fill: C.okD })
  b.ctext(495, 328, '糖蛋白', { size: 8.5, fill: C.okD })
  // α 催化亚基
  b.rect(280, 264, 170, 100, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 12 })
  b.ctext(365, 294, 'α 催化亚基', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(365, 316, '10 TMS·生电', { size: 9.5, fill: C.sub })
  b.ctext(365, 336, '约 110 kDa', { size: 9.5, fill: C.mute })
  // 离子通道虚线路径
  b.line(320, 240, 320, 388, { stroke: C.bad, sw: 1, dash: '4 4', opacity: 0.45 })
  b.line(420, 240, 420, 388, { stroke: C.acc, sw: 1, dash: '4 4', opacity: 0.45 })
  // 3 Na⁺ 出
  b.arrow(320, 386, 320, 368, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(320, 262, 320, 244, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ion(290, 400, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(325, 407, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(360, 400, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(290, 228, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(325, 221, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(360, 228, 'Na^{+}', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ctext(320, 200, '3 Na^{+} 出', { size: 11, weight: 700, fill: C.badD })
  // 2 K⁺ 入
  b.arrow(420, 242, 420, 260, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(420, 368, 420, 386, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ion(390, 228, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ion(450, 228, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ion(390, 400, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ion(450, 400, 'K^{+}', { r: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.ctext(420, 200, '2 K^{+} 入', { size: 11, weight: 700, fill: C.accD })
  // 乌本苷位点
  b.polygon([[250, 238], [262, 250], [250, 262], [238, 250]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(200, 226, '乌本苷（抑制）', { size: 9, weight: 600, fill: C.enzD })
  b.line(262, 250, 276, 262, { stroke: C.enz, sw: 1.2, dash: '3 3' })
  // ATP
  b.tag(585, 400, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700 })
  b.arrow(556, 390, 458, 355, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  // 梯度与账单条
  b.rect(90, 424, 285, 26, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 13 })
  b.ctext(232, 441, 'Na^{+} 梯度：外 145 → 内约 12 mM', { size: 10, weight: 700, fill: C.badD })
  b.rect(90, 456, 285, 26, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 13 })
  b.ctext(232, 473, '膜电位约 −90 mV（静息支柱）', { size: 10, weight: 700, fill: C.accD })
  b.rect(400, 424, 260, 26, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 13 })
  b.ctext(530, 441, '静息 ATP 约 25%·肾 70%', { size: 10, weight: 600, fill: C.sub })
  b.rect(400, 456, 260, 26, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 13 })
  b.ctext(530, 473, 'αβ 组装·人 4 个 α 亚型', { size: 10, weight: 600, fill: C.sub })
  // —— 右：植物 H⁺-ATPase ——
  b.text(740, 188, '植物：质膜 H^{+}-ATPase（P3A·AHA）', { size: 12.5, weight: 700, fill: C.okD })
  b.bilayer(740, 322, 590)
  b.text(740, 308, '质外体（细胞外）', { size: 10, fill: C.mute })
  b.text(740, 360, '细胞质', { size: 10, fill: C.mute })
  b.rect(950, 264, 150, 100, { fill: C.okL, stroke: C.ok, sw: 2.2, rx: 12 })
  b.ctext(1025, 294, 'AHA', { size: 13, weight: 700, fill: C.okD })
  b.ctext(1025, 316, '单亚基·约 100 kDa', { size: 9.5, fill: C.sub })
  b.ctext(1025, 336, '10 TMS·生电', { size: 9.5, fill: C.mute })
  // 1 H⁺ 出
  b.line(1025, 240, 1025, 388, { stroke: C.warn, sw: 1, dash: '4 4', opacity: 0.45 })
  b.arrow(1025, 386, 1025, 368, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.arrow(1025, 262, 1025, 244, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ion(1025, 400, 'H^{+}', { r: 12, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ion(1025, 228, 'H^{+}', { r: 12, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ctext(1025, 200, '1 H^{+} 出 / ATP', { size: 11, weight: 700, fill: C.warnD })
  // 糠菌素位点
  b.polygon([[880, 238], [892, 250], [880, 262], [868, 250]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(880, 226, '糠菌素（锁死激活态）', { size: 9, weight: 600, fill: C.enzD })
  b.line(892, 250, 948, 262, { stroke: C.enz, sw: 1.2, dash: '3 3' })
  // ATP
  b.tag(1180, 400, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700 })
  b.arrow(1151, 390, 1104, 355, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  // 梯度与账单条
  b.rect(760, 424, 330, 26, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 13 })
  b.ctext(925, 441, 'H^{+} 梯度：ΔpH ≈ 1.7（7.2 vs 5.5）', { size: 10, weight: 700, fill: C.warnD })
  b.rect(760, 456, 330, 26, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 13 })
  b.ctext(925, 473, 'Δψ −120 ~ −250 mV → PMF ≈ −200 mV', { size: 10, weight: 700, fill: C.proD })
  b.rect(1110, 424, 240, 26, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 13 })
  b.ctext(1230, 441, '11 个 AHA·按场景并联', { size: 10, weight: 600, fill: C.sub })
  b.rect(1110, 456, 240, 26, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 13 })
  b.ctext(1230, 473, 'Thr947–14-3-3 开关·光/激素', { size: 10, weight: 600, fill: C.sub })

  // ================= 二、双决策树：为什么选 Na⁺ / H⁺ =================
  b.panel(30, 504, 1340, 232, { title: '二、为什么动物选 Na^{+}、植物选 H^{+}——环境化学的双决策树' })
  b.rect(580, 544, 240, 34, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 17 })
  b.ctext(700, 565, '环境化学的约束', { size: 12, weight: 700, fill: C.ink })
  b.arrow(640, 578, 420, 592, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(760, 578, 980, 592, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(250, 594, 200, 32, { fill: C.accL, stroke: C.acc, sw: 2, rx: 16 })
  b.ctext(350, 614, '动物界 → 选 Na^{+}', { size: 12.5, weight: 700, fill: C.accD })
  b.rect(950, 594, 200, 32, { fill: C.okL, stroke: C.ok, sw: 2, rx: 16 })
  b.ctext(1050, 614, '植物界 → 选 H^{+}', { size: 12.5, weight: 700, fill: C.okD })
  const reason = (x: number, y: number, txt: string, c: string) => {
    b.circle(x, y - 4, 4.5, { fill: c })
    b.text(x + 12, y, txt, { size: 10.5, fill: C.sub })
  }
  reason(80, 644, '海水起源：外液 Na^{+} 约 145 mM——「稀释海水」的遗产，现成而充沛', C.acc)
  reason(80, 670, '毒性低：上百 mmol/L 量级对多数蛋白无明显毒性 → 可兼作信号语言', C.acc)
  reason(80, 696, '落选者：Ca^{2+} 微摩尔即毒（只配当信使）；H^{+} 在体液摆幅太窄（pH 7.4 窄带）', C.acc)
  reason(780, 644, '土壤贫 Na^{+}：蒸腾富集即成毒害——盐渍化是全球农业第一逆境', C.ok)
  reason(780, 670, 'H^{+} 取之不尽：代谢每时每刻产酸，泵出 H^{+} 同时就是排酸稳 pH', C.ok)
  reason(780, 696, '一泵三得：pH 稳态 ＋ PMF ＋ 酸生长；液泡为多余 H^{+} 备好「金库」', C.ok)
  b.tag(350, 720, 'Na^{+} ＝ 能量货币兼信号文字', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11.5, weight: 700 })
  b.tag(1060, 720, 'H^{+} ＝ 代谢废料铸成的通用货币', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 11.5, weight: 700 })

  // ================= 三、下游后果对照与例外互渗 =================
  b.panel(30, 750, 1340, 232, { title: '三、下游后果对照与例外互渗' })
  b.table(46, 806, 620, {
    title: '两大界的下游产业（谁拥有梯度，谁才有资格发信号）',
    headers: ['项目', '动物（Na^{+} 驱动）', '植物（H^{+} 驱动）'],
    colW: [88, 258, 274], rowH: 42, fontSize: 11.5,
    rows: [
      ['次级转运', 'SGLT·NHE·NCX（Na^{+} 梯度）', 'NRT/PHT/SULTR/AMT/SUC 全 H^{+} 耦联'],
      ['电信号', 'Nav/Cav 电压门控（Na^{+} 斜坡雪崩）', 'Cl^{-}/K^{+} 电压门控＋Ca^{2+} 波'],
      ['渗透语言', '血 Na^{+} 135–145 mmol/L 窄带', 'K^{+}＋脯氨酸/甜菜碱等有机渗透物'],
    ],
  })
  b.text(700, 796, '例外与互渗：格局并非铁板', { size: 12, weight: 700, fill: C.enzD })
  b.text(700, 822, '动物侧：各处 NHE 以 Na^{+} 梯度排 H^{+}（反读即 H^{+} 驱动）；V-ATPase 专区酸化（第 7 章）', { size: 10.5, fill: C.sub })
  b.text(700, 848, '植物侧：耐盐植物 SOS1 排 Na^{+}、HKT1 回收隔离——能量仍最终出自 H^{+} 泵', { size: 10.5, fill: C.sub })
  b.text(700, 874, '通道层：电压感受域本自同源——「引擎先于车辆」，分家后才各自改接电源', { size: 10.5, fill: C.sub })
  b.rect(700, 894, 640, 80, { fill: C.enzL, fillOp: 0.6, stroke: C.enz, sw: 1.8, rx: 10 })
  b.ctext(1020, 924, '「驱动离子的选择是环境化学的镜像」', { size: 14, weight: 700, fill: C.enzD })
  b.ctext(1020, 950, '动物把海水装进血管，植物把代谢酸铸成货币——同一套 P 型泵机械，泵出两套生命经济学', { size: 10, fill: C.sub })
}

export default scene({
  title: '主引擎对照：动物 Na^{+} 循环 vs 植物 H^{+} 循环',
  subtitle: '同为 P 型泵、同 10 TMS、同生电：动物以 3 Na^{+} : 2 K^{+}/ATP 建起 Na^{+} 梯度（外 145 对内约 12 mM）与约 −90 mV 膜电位，乌本苷可抑；植物以 1 H^{+}/ATP 铸出 ΔpH 约 1.7 与 −120~−250 mV 的 PMF，糠菌素可锁；动物继承海水丰钠、植物选代谢产酸易得的 H⁺——驱动离子的选择是环境化学的镜像',
  draw,
})
