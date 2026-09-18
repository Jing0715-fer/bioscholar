// bp ch1-s2 水的物理性质与生命现象（39-e 批1）
import { scene, C, B } from '../../lib'

// 画一个水分子：O 圆 + 2 个 H 圆（H 沿给定方向）
const water = (b: B, cx: number, cy: number, dirs: Array<[number, number]>) => {
  b.circle(cx, cy, 11, { fill: '#fee2e2', stroke: C.bad, sw: 1.6 })
  b.ctext(cx, cy + 3.5, 'O', { size: 9, weight: 700, fill: C.bad })
  for (const [dx, dy] of dirs) {
    const L = Math.hypot(dx, dy)
    const hx = cx + (dx / L) * 15, hy = cy + (dy / L) * 15
    b.line(cx + (dx / L) * 11, cy + (dy / L) * 11, hx, hy, { stroke: C.sub, sw: 1.8 })
    b.circle(hx, hy, 5, { fill: '#ffffff', stroke: C.sub, sw: 1.4 })
    b.ctext(hx, hy + 2.5, 'H', { size: 6.5, weight: 700, fill: C.sub })
  }
}

// 正六边形（非极性分子）
const hex = (b: B, cx: number, cy: number, r: number) => {
  const pts: Array<[number, number]> = []
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
  }
  b.polygon(pts, { fill: C.rnaL, stroke: C.rna, sw: 2 })
}

const draw = (b: B) => {
  // ============ 一、氢键网络 ============
  b.panel(30, 132, 660, 420, { title: '一、氢键网络：动态四面体与温度缓冲' })
  b.text(60, 182, '每个水分子最多与 4 个近邻连接', { size: 11, weight: 700, fill: C.ink })
  b.text(60, 199, '氢键在皮秒尺度不断断裂重组', { size: 10, fill: C.mute })
  // 中心水 + 4 个邻居（四面体投影）
  const CX = 195, CY = 330
  const nb: Array<[number, number]> = [[135, 268], [255, 268], [135, 392], [255, 392]]
  for (const [nx, ny] of nb) {
    b.line(CX, CY, nx, ny, { stroke: C.acc, sw: 1.6, dash: '5 4' })
  }
  water(b, CX, CY, nb.map(([nx, ny]) => [nx - CX, ny - CY]))
  for (const [nx, ny] of nb) {
    const dx = nx - CX, dy = ny - CY
    const a = Math.atan2(dy, dx)
    water(b, nx, ny, [[Math.cos(a - 0.7), Math.sin(a - 0.7)], [Math.cos(a + 0.7), Math.sin(a + 0.7)]])
  }
  b.tag(95, 305, '氢键 ≈ 20 kJ/mol', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 7 })
  // 右：键能对比 + 比热
  b.bars(400, 322, 230, 120, [460, 20], {
    labels: ['O–H 共价键', '氢键（1/20）'], vlabels: ['≈460 kJ/mol', '≈20 kJ/mol'],
    fill: C.accL, stroke: C.acc, max: 520,
  })
  b.tag(520, 378, '比热容 4.18 J·g⁻¹·K⁻¹', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 8 })
  b.ctext(520, 406, '高比热容与汽化热 → 温度缓冲', { size: 10.5, fill: C.sub })
  b.ctext(520, 424, '水的液态范围恰好覆盖', { size: 10.5, fill: C.sub })
  b.ctext(520, 442, '生命活动的温度区间', { size: 10.5, fill: C.sub })
  // 底部：结构基元
  b.line(50, 456, 670, 456, { stroke: C.line, sw: 1 })
  b.text(60, 476, '氢键决定生物结构基元', { size: 11.5, weight: 700, fill: C.ink })
  const pair = (x: number, n: number, l1: string, l2: string, f1: string, s1: string, f2: string, s2: string, lab: string) => {
    b.rect(x, 488, 26, 44, { fill: f1, stroke: s1, sw: 1.6, rx: 8 })
    b.rect(x + 42, 488, 26, 44, { fill: f2, stroke: s2, sw: 1.6, rx: 8 })
    b.ctext(x + 13, 514, l1, { size: 13, weight: 700, fill: s1 })
    b.ctext(x + 55, 514, l2, { size: 13, weight: 700, fill: s2 })
    for (let i = 0; i < n; i++) {
      b.line(x + 27, 495 + i * (36 / Math.max(n - 1, 1)), x + 41, 495 + i * (36 / Math.max(n - 1, 1)), { stroke: C.mute, sw: 1.6, dash: '3 3' })
    }
    b.ctext(x + 34, 548, lab, { size: 10, weight: 700, fill: C.sub })
  }
  pair(110, 2, 'A', 'T', C.dnaL, C.dna, C.proL, C.pro, 'A = T（2 条氢键）')
  pair(300, 3, 'G', 'C', C.rnaL, C.rna, C.enzL, C.enz, 'G ≡ C（3 条氢键）')
  b.wtext(450, 497, '碱基配对、α 螺旋与 β 折叠的骨架氢键、水化壳对离子通道选择性的贡献——本质上都是氢键物理。', { size: 10.5, fill: C.sub, maxW: 210, lh: 15 })

  // ============ 二、高介电常数与德拜屏蔽 ============
  b.panel(710, 132, 660, 420, { title: '二、高介电常数与静电屏蔽：ε ≈ 80 与德拜长度' })
  b.text(730, 192, '库仑定律 F = q₁q₂/(4πεr²) ∝ 1/ε —— 水将离子间静电作用削弱约 80 倍', { size: 11.5, weight: 700, fill: C.ink })
  // (a) 真空
  b.ion(795, 258, 'Na⁺', { r: 14, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 10 })
  b.ion(875, 258, 'Cl⁻', { r: 14, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10 })
  b.arrow(812, 252, 858, 252, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.arrow(858, 266, 812, 266, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.ctext(835, 306, '真空中（ε ≈ 1）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(835, 322, '静电吸引强', { size: 9.5, fill: C.mute })
  // (b) 水中
  b.ion(975, 258, 'Na⁺', { r: 14, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 10 })
  b.ion(1055, 258, 'Cl⁻', { r: 14, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10 })
  for (let i = 0; i < 6; i++) {
    const a = 0.45 + (i * (Math.PI * 2 - 0.9)) / 5
    b.circle(975 + 25 * Math.cos(a), 258 + 25 * Math.sin(a), 5, { fill: C.accL, stroke: C.acc, sw: 1.1 })
    b.circle(1055 + 25 * Math.cos(a), 258 + 25 * Math.sin(a), 5, { fill: C.accL, stroke: C.acc, sw: 1.1 })
  }
  b.circle(1003, 252, 5, { fill: C.accL, stroke: C.acc, sw: 1.1 })
  b.circle(1015, 264, 5, { fill: C.accL, stroke: C.acc, sw: 1.1 })
  b.arrow(996, 228, 1014, 228, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.arrow(1034, 228, 1016, 228, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.ctext(1015, 210, '削弱后', { size: 9, fill: C.mute })
  b.ctext(1015, 306, '水中（ε ≈ 80）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(1015, 322, '作用削弱约 80 倍', { size: 9.5, fill: C.mute })
  // 右列
  b.tag(1175, 232, 'ε ≈ 80（室温）', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(1175, 264, 'F ∝ 1/ε', { fill: C.panelB, stroke: C.sub, size: 11, weight: 700, tfill: C.sub, pad: 8 })
  b.wtext(1105, 295, 'Na⁺、Cl⁻、ATP⁴⁻ 等带电物种得以在水溶液中自由存在。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  // 德拜屏蔽曲线
  b.axis(800, 480, 480, 115, {
    xlabel: '距电荷距离 r（nm）', ylabel: '电位 φ(r)', title: '电位的指数屏蔽：φ(r) ∝ e^(−r/λD)/r',
    xticks: [[0, '0'], [0.125, '1'], [0.25, '2'], [0.375, '3'], [0.5, '4'], [0.625, '5'], [0.75, '6'], [0.875, '7'], [1, '8']],
    yticks: [[0, '0'], [1, '高']],
  })
  const debye: Array<[number, number]> = [[0.03, 1], [0.06, 0.42], [0.09, 0.22], [0.125, 0.13], [0.19, 0.05], [0.25, 0.024], [0.38, 0.006], [0.55, 0.002]]
  b.curve(800, 480, 480, 115, debye, { stroke: C.acc, sw: 3 })
  b.line(860, 365, 860, 480, { stroke: C.warn, sw: 1.8, dash: '6 4' })
  b.tag(965, 380, '德拜长度 λD ≈ 1 nm', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: '#78350f', pad: 7 })
  b.wtext(740, 543, '0.1 mol/L 单价电解质中 λD ≈ 1 nm（生理盐水约 0.15 mol/L）→ 细胞内静电相互作用本质上是短程的。', { size: 10, fill: C.sub, maxW: 610, lh: 13 })

  // ============ 三、疏水效应 ============
  b.panel(30, 592, 1340, 368, { title: '三、疏水效应：水的熵增驱动折叠与自组装（非「疏水键」）' })
  // 左：分散态
  b.text(60, 648, '分散的非极性分子', { size: 11.5, weight: 700, fill: C.ink })
  b.text(60, 665, '周围水被迫形成有序「笼状」结构 → 水熵 ↓', { size: 10, fill: C.mute })
  for (const [cx, cy] of [[200, 745], [420, 745]] as Array<[number, number]>) {
    hex(b, cx, cy, 30)
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      const wx = cx + 54 * Math.cos(a), wy = cy + 54 * Math.sin(a)
      b.circle(wx, wy, 7, { fill: C.accL, stroke: C.acc, sw: 1.3 })
      b.line(wx - 5 * Math.cos(a), wy - 5 * Math.sin(a), wx + 5 * Math.cos(a), wy + 5 * Math.sin(a), { stroke: C.acc, sw: 1.2 })
    }
  }
  b.ctext(310, 848, '非极性分子（烃链、苯环）', { size: 9.5, fill: C.rnaD })
  // 中：箭头
  b.arrow(545, 745, 665, 745, { stroke: C.ink, sw: 3.2, marker: 'ink' })
  b.ctext(605, 722, '疏水效应', { size: 12, weight: 700, fill: C.ink })
  b.ctext(605, 782, 'ΔG = ΔH − TΔS', { size: 11, weight: 700, fill: C.pro })
  b.ctext(605, 800, '熵项主导', { size: 9.5, fill: C.mute })
  // 右：聚集态
  b.text(720, 648, '非极性基团聚拢', { size: 11.5, weight: 700, fill: C.ink })
  b.text(720, 665, '暴露的水界面减少，水被释放恢复自由 → 水熵 ↑', { size: 10, fill: C.mute })
  hex(b, 880, 730, 26)
  hex(b, 955, 712, 26)
  hex(b, 920, 782, 26)
  hex(b, 985, 765, 26)
  for (const [wx, wy, dx, dy] of [
    [1120, 690, 30, -12], [1175, 745, 34, 6], [1120, 800, 30, 14], [1235, 700, 26, -18], [1240, 790, 24, 16],
  ] as Array<[number, number, number, number]>) {
    b.circle(wx, wy, 7, { fill: C.accL, stroke: C.acc, sw: 1.3 })
    b.arrow(wx + 9, wy, wx + 9 + dx, wy + dy, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  }
  b.ctext(1160, 852, '水熵 ↑（主要驱动力）', { size: 10, weight: 700, fill: C.accD })
  // 底部结论
  b.wtext(60, 895, '疏水效应主要是熵驱动：蛋白质折叠时埋藏疏水残基、磷脂自组装成双分子层，自由能收益主要来自水的熵增，而非存在「疏水键」这种特殊吸引力；疏水相互作用强度随温度升高而增大，约在 60–80 °C 达到极大。', { size: 11, fill: C.sub, maxW: 1270, lh: 16 })
}

export default scene({
  title: '水的物理性质：氢键网络、介电屏蔽与疏水效应',
  subtitle: '氢键 ≈20 kJ/mol（O–H 共价键的 1/20）皮秒级断裂重组；ε ≈ 80 削弱静电 80 倍；0.1 mol/L 下德拜长度 ≈ 1 nm；疏水效应由水熵增驱动（60–80 °C 极大），是折叠与膜自组装的主要驱动力',
  draw,
})
