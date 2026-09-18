// bc ch5-s5 别构酶与酶活性的调节（39-a 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、S 形动力学 ============
  b.panel(30, 132, 700, 420, { title: '一、S 形动力学：别构酶 vs 米氏酶' })
  b.axis(80, 486, 560, 270, {
    xlabel: '[S]', ylabel: 'v₀',
    xticks: [[0, '0'], [0.45, 'K₀.₅'], [0.8, ''], [1, '[S]→']],
    yticks: [[1, 'Vmax'], [0.5, '0.5 Vmax']],
  })
  b.line(80, 486 - 270, 640, 486 - 270, { stroke: C.mute, sw: 1.2, dash: '6 5' })
  // 米氏双曲线（无协同）
  b.curve(80, 486, 560, 270, [[0, 0], [0.05, 0.31], [0.1, 0.475], [0.2, 0.64], [0.3, 0.71], [0.4, 0.76], [0.6, 0.82], [1, 0.86]], { stroke: C.mute, sw: 2.4 })
  // 别构 S 形（正协同，n≈2.8）
  b.curve(80, 486, 560, 270, [[0, 0], [0.08, 0.03], [0.15, 0.07], [0.2, 0.12], [0.28, 0.21], [0.35, 0.33], [0.45, 0.5], [0.55, 0.64], [0.7, 0.78], [0.85, 0.85], [1, 0.9]], { stroke: C.enz, sw: 3 })
  // 效应剂：激活左移（细虚线）/ 抑制右移（细虚线）
  b.curve(80, 486, 560, 270, [[0, 0], [0.04, 0.05], [0.08, 0.13], [0.12, 0.24], [0.16, 0.36], [0.22, 0.5], [0.3, 0.64], [0.45, 0.78], [0.7, 0.87], [1, 0.92]], { stroke: C.ok, sw: 1.8, dash: '7 5' })
  b.curve(80, 486, 560, 270, [[0, 0], [0.12, 0.02], [0.22, 0.06], [0.34, 0.15], [0.45, 0.26], [0.56, 0.4], [0.62, 0.5], [0.72, 0.62], [0.85, 0.74], [1, 0.81]], { stroke: C.bad, sw: 1.8, dash: '7 5' })
  const leg: [string, string][] = [
    ['米氏酶（双曲线）', C.mute],
    ['别构酶（S 形 · 正协同）', C.enz],
    ['激活剂（左移）', C.ok],
    ['抑制剂（右移）', C.bad],
  ]
  leg.forEach(([s, col], i) => {
    b.rect(100, 224 + i * 26 - 8, 14, 14, { fill: col, rx: 3 })
    b.text(122, 224 + i * 26 + 4, s, { size: 11, fill: C.sub })
  })
  b.wtext(80, 530, '底物自身作为正效应剂产生正协同，曲线呈 S 形；负协同则低于双曲线。效应剂使 S 形曲线左移（激活）或右移（抑制）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、MWC 齐变 vs KNF 序变 ============
  b.panel(750, 132, 620, 420, { title: '二、两种协同模型：MWC 齐变 vs KNF 序变' })
  b.text(766, 196, 'MWC（Monod-Wyman-Changeux，齐变/对称）模型：', { size: 12, weight: 700, fill: C.ink })
  // T 态（全灰）⇌ R 态（全彩）
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    b.rect(836 + i * 40, 220 + j * 40, 34, 34, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 6 })
  }
  b.ctext(876, 312, 'T 态（紧张 · 低活性）', { size: 10.5, fill: C.sub })
  b.line(940, 270, 1000, 270, { stroke: C.enz, sw: 2.2, marker: 'enz', markerStart: 'enz' })
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    b.rect(1010 + i * 40, 220 + j * 40, 34, 34, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 6 })
  }
  b.ctext(1050, 312, 'R 态（松弛 · 高活性）', { size: 10.5, fill: C.enzD })
  b.wtext(766, 340, '所有亚基同时处于 T 或 R 两种状态之一，配体只与其中一种结合，别构转换保持对称。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.text(766, 392, 'KNF（Koshland-Némethy-Filmer，序变）模型：', { size: 12, weight: 700, fill: C.ink })
  const knf = [0, 1, 2, 4]
  knf.forEach((n, k) => {
    const x0 = 780 + k * 140
    for (let i = 0; i < 4; i++) {
      const filled = i < n
      b.rect(x0 + (i % 2) * 38, 412 + Math.floor(i / 2) * 38, 32, 32, { fill: filled ? C.enzL : C.panelB, stroke: filled ? C.enz : C.sub, sw: 1.8, rx: 6 })
    }
    if (k < 3) b.arrow(x0 + 84, 448, x0 + 128, 448, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.ctext(820, 500, '配体逐个诱导亚基构象变化，亚基间可不对称', { size: 10.5, fill: C.sub })
  b.wtext(766, 528, '血红蛋白结合 O₂ 符合 MWC 模型。', { size: 11.5, weight: 700, fill: C.ink })

  // ============ 三、ATCase：反馈抑制经典 ============
  b.panel(30, 564, 700, 416, { title: '三、ATCase：终产物反馈抑制的经典范例' })
  // 通路
  b.rect(56, 620, 130, 44, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(121, 640, '氨甲酰磷酸 + 天冬氨酸', { size: 10.5, fill: C.ink, maxW: 118, lh: 14, anchor: 'middle' })
  b.arrow(190, 642, 250, 642, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(310, 642, 'ATCase', { fill: C.enzL, stroke: C.enz, size: 12.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.arrow(372, 642, 432, 642, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(432, 620, 130, 44, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(497, 638, '嘧啶合成', { size: 11.5, fill: C.ink })
  b.ctext(497, 656, '第一步', { size: 10.5, fill: C.mute })
  b.rect(610, 620, 100, 44, { fill: C.badL, fillOp: 0.6, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(660, 638, 'CTP', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(660, 656, '（终产物）', { size: 10, fill: C.mute })
  b.arrow(562, 642, 606, 642, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 反馈抑制弧线
  b.path('M660,614 L660,596 Q660,584 640,584 L340,584 Q318,584 318,620', { stroke: C.bad, sw: 2.2, dash: '7 5', marker: 'bad' })
  b.ctext(490, 576, '反馈抑制（终产物抑制）', { size: 11.5, weight: 700, fill: C.bad })
  // ATP 激活
  b.ion(240, 596, 'ATP', { r: 17, fill: C.okL, stroke: C.ok, tfill: '#065f46', size: 10 })
  b.arrow(258, 596, 296, 618, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ctext(240, 632, '激活', { size: 9.5, fill: C.ok })
  // ATCase 结构：上/下两个催化三聚体 + 6 个调节亚基
  b.ctext(190, 700, '结构：6 调节亚基 + 6 催化亚基', { size: 12, weight: 700, fill: C.ink })
  for (const [cx, cy] of [[156, 732], [190, 718], [224, 732], [156, 800], [190, 814], [224, 800]] as [number, number][]) {
    b.circle(cx, cy, 13, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  }
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6
    b.circle(190 + 62 * Math.cos(a), 766 + 30 * Math.sin(a), 8.5, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  }
  b.ctext(190, 850, '催化亚基 c ×6（玫红）', { size: 10.5, weight: 700, fill: C.enzD })
  b.text(310, 772, '调节亚基 r ×6（蓝）', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(56, 890, '大肠杆菌嘧啶合成第一步酶：底物氨甲酰磷酸/天冬氨酸产生正协同（S 形），终产物 CTP 为别构抑制剂、ATP 为别构激活剂。', { size: 11.5, fill: C.sub, maxW: 660, lh: 17 })
  b.wtext(56, 940, '别构调节微秒-毫秒级响应、不耗能。', { size: 11.5, fill: C.mute, maxW: 660, lh: 16 })

  // ============ 四、酶活性的快速调节 ============
  b.panel(750, 564, 620, 416, { title: '四、酶活性调节的四种方式' })
  const regs: [string, string][] = [
    ['① 别构调节', '微秒-毫秒级响应，不耗能（如 ATCase）'],
    ['② 共价修饰', '磷酸化/脱磷酸化最普遍：蛋白激酶/磷酸酶催化，靶 Ser/Thr/Tyr，耗 ATP，级联放大显著；另有腺苷酰化（谷氨酰胺合成酶）等'],
    ['③ 酶原激活', '水解切除一段肽暴露活性中心——不可逆的「放大装置」：胰蛋白酶原切 N 端六肽（Val-Asp-Asp-Asp-Asp-Lys）后级联激活；凝血级联放大近千倍；急性胰腺炎即酶原提前激活'],
    ['④ 酶含量调节', '诱导与阻遏（基因表达水平），小时级慢调节'],
  ]
  const regY = [604, 674, 744, 862]
  regs.forEach(([t, s], i) => {
    b.text(766, regY[i], t, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(766, regY[i] + 20, s, { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  })
  b.wtext(766, 924, '总原则：快调活性（别构/共价修饰，秒-分级），慢调数量（合成降解，小时级）；关键酶处于代谢途径的「入口」与不可逆步骤。', { size: 11.5, weight: 700, fill: C.ink, maxW: 590, lh: 17 })
}

export default scene({
  title: '别构酶与酶活性的调节：S 形曲线与级联放大',
  subtitle: '正协同产生 S 形动力学，MWC 齐变（T⇌R 对称转换）与 KNF 序变两模型；ATCase 受 CTP 反馈抑制、ATP 激活；共价修饰与酶原激活构成级联放大',
  draw,
})
