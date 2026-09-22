// em ch2-s1 电子束源与亮度（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、发射的物理：温度与隧穿的竞争 ============
  b.panel(30, 132, 700, 420, { title: '一、发射的物理：温度与隧穿的竞争' })
  b.tag(145, 192, '热发射（理查森-杜什曼）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 12.5, weight: 700, pad: 9 })
  b.path('M 120,262 L 145,294 L 170,262', { stroke: C.bad, sw: 3.5 })
  b.path('M 118,252 a 27,27 0 0 1 54,0', { stroke: C.warn, sw: 1.2, opacity: 0.65 })
  b.path('M 128,262 a 17,17 0 0 1 34,0', { stroke: C.warn, sw: 1.2, opacity: 0.45 })
  b.arrow(132, 252, 116, 222, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(158, 252, 174, 222, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.circle(145, 208, 3, { fill: C.acc })
  b.ctext(145, 330, '钨丝约 2700 K（近熔点）', { size: 11.5, fill: C.sub })
  b.ctext(145, 352, '功函数 W 约 4.5 eV', { size: 11.5, fill: C.sub })
  b.ctext(145, 374, '寿命数十至百小时', { size: 11.5, fill: C.mute })
  b.ctext(145, 404, 'J = A·T^{2}·exp(−W/kT)', { size: 12.5, weight: 700, fill: C.badD })

  b.tag(365, 192, '场发射（Fowler-Nordheim）', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 12.5, weight: 700, pad: 9 })
  b.rect(315, 268, 18, 24, { fill: C.sub })
  b.polygon([[333, 268], [333, 292], [368, 280]], { fill: C.sub })
  b.line(405, 235, 405, 266, { stroke: C.sub, sw: 4 })
  b.line(405, 294, 405, 325, { stroke: C.sub, sw: 4 })
  b.arrow(398, 246, 342, 265, { stroke: C.mute, sw: 1.4, dash: '4 4', marker: 'mute' })
  b.arrow(398, 316, 342, 297, { stroke: C.mute, sw: 1.4, dash: '4 4', marker: 'mute' })
  b.circle(368, 280, 3, { fill: C.acc })
  b.arrow(372, 280, 396, 280, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.ctext(365, 330, '针尖半径约百纳米', { size: 11.5, fill: C.sub })
  b.ctext(365, 352, '强场压薄势垒，室温隧穿', { size: 11.5, fill: C.sub })
  b.ctext(365, 374, '发射面积亚纳米量级', { size: 11.5, fill: C.mute })
  b.ctext(365, 404, '须约 10^{-8} Pa 超高真空', { size: 12.5, weight: 700, fill: C.dnaD })

  b.tag(585, 192, '肖特基发射（热场协同）', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 12.5, weight: 700, pad: 9 })
  b.rect(535, 268, 18, 24, { fill: C.sub })
  b.polygon([[553, 268], [553, 292], [588, 280]], { fill: C.sub })
  b.path('M 538,254 a 20,20 0 0 1 40,0', { stroke: C.warn, sw: 1.3, opacity: 0.7 })
  b.path('M 546,260 a 12,12 0 0 1 24,0', { stroke: C.warn, sw: 1.3, opacity: 0.5 })
  b.line(625, 235, 625, 266, { stroke: C.sub, sw: 4 })
  b.line(625, 294, 625, 325, { stroke: C.sub, sw: 4 })
  b.arrow(618, 246, 562, 265, { stroke: C.mute, sw: 1.4, dash: '4 4', marker: 'mute' })
  b.arrow(618, 316, 562, 297, { stroke: C.mute, sw: 1.4, dash: '4 4', marker: 'mute' })
  b.circle(588, 280, 3, { fill: C.acc })
  b.arrow(592, 280, 616, 280, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.ctext(585, 330, 'ZrO 涂覆 W 尖，约 1800 K', { size: 11.5, fill: C.sub })
  b.ctext(585, 352, '热助长 + 场聚焦', { size: 11.5, fill: C.sub })
  b.ctext(585, 374, '发射稳定，可自动合轴', { size: 11.5, fill: C.mute })
  b.ctext(585, 404, '亮度 10^{12}–10^{13} 量级', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(50, 452, '电流对温度指数敏感、对功函数更苛刻：LaB_{6} 功函数约 2.7 eV，1800 K 即获约十倍于钨丝的亮度。三种机制的取舍，框定了全部商用电子枪的谱系。', { size: 11.5, fill: C.sub, maxW: 660, lh: 18 })
  b.tag(200, 512, '肖特基：现代冷冻电镜的标配', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11.5, weight: 700, pad: 9 })
  b.tag(530, 512, '冷场：极限单色，高端 EELS / 低电压', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11.5, weight: 700, pad: 9 })

  // ============ 二、四代电子枪参数对照 ============
  b.panel(750, 132, 620, 420, { title: '二、四代电子枪参数对照' })
  b.table(770, 192, 580, {
    headers: ['参数', '钨丝', 'LaB_{6}', '肖特基场发射', '冷场发射'],
    colW: [92, 96, 110, 142, 140], rowH: 33, fontSize: 11,
    rows: [
      ['工作温度', '约 2700 K', '约 1800 K', '约 1800 K', '室温'],
      ['相对亮度', '1', '约 10', '约 10^{3}', '约 10^{3}–10^{4}'],
      ['能量展宽', '2–3 eV', '约 1–2 eV', '约 0.5–1 eV', '约 0.3 eV'],
      ['源尺寸', '数十 μm', '数 μm', '亚 μm', '约 10 nm 级'],
      ['真空要求', '约 10^{-3} Pa', '10^{-4}–10^{-5} Pa', '10^{-7}–10^{-8} Pa', '约 10^{-8} Pa'],
      ['典型用户', '教学、常规', '中端多用途', 'cryo-EM 标配', '高端 EELS、低电压'],
    ],
  })
  b.wtext(770, 470, '时间相干性由能量展宽 ΔE 决定、空间相干性由有效源尺寸与照明半角决定——二者共同构成第 3 章 CTF 的包络；这正是冷冻电镜偏爱肖特基枪的原因之一。', { size: 11.5, fill: C.sub, maxW: 580, lh: 18 })
  b.tag(900, 526, '单色器把 ΔE 再砍至 0.1 eV 以下', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700, pad: 9 })
  b.tag(1180, 526, '代价：损失大部分束流', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 11.5, weight: 700, pad: 9 })

  // ============ 三、亮度：电子枪的硬通货 ============
  b.panel(30, 572, 700, 410, { title: '三、亮度：电子枪的硬通货（对数阶梯）' })
  b.tag(250, 626, 'β = I/(πr^{2}·πα^{2})，单位 A·m^{-2}·sr^{-1}', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 13, weight: 700, pad: 10 })
  b.tag(560, 626, '亮度与加速电压近似成正比', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700, pad: 9 })
  const by = 930, bh = 280
  const ly = (v: number) => by - ((v - 8) / 6) * bh
  for (let e = 8; e <= 14; e++) {
    b.line(100, ly(e), 520, ly(e), { stroke: C.faint, sw: 0.9, dash: '3 5', opacity: 0.6 })
    b.text(92, ly(e) + 4, `10^{${e}}`, { size: 10.5, fill: C.mute, anchor: 'end' })
  }
  const bars: Array<[number, number, number, string, string, string]> = [
    [140, 9, 0, '钨丝', '10^{9}', C.sub],
    [245, 10, 0, 'LaB_{6}', '约 10^{10}', C.warn],
    [350, 12, 13, '肖特基', '10^{12}–10^{13}', C.acc],
    [455, 13, 14, '冷场发射', '约 10^{13}–10^{14}', C.dna],
  ]
  bars.forEach(([x, v0, v1, label, vl, c]) => {
    b.rect(x - 30, ly(v0), 60, by - ly(v0), { fill: c, fillOp: 0.35, stroke: c, sw: 1.8, rx: 3 })
    if (v1) b.rect(x - 30, ly(v1), 60, ly(v0) - ly(v1), { fill: c, fillOp: 0.15, stroke: c, sw: 1.2, dash: '4 3', rx: 3 })
    b.ctext(x, by + 24, label, { size: 12.5, weight: 700, fill: C.sub })
    b.ctext(x, ly(v1 || v0) - 10, vl, { size: 11, weight: 700, fill: c })
  })
  b.line(100, by, 520, by, { stroke: C.sub, sw: 2 })
  b.wtext(545, 700, '亮度守恒：沿无像差光路不增，透镜只能重新分配 r 与 α', { size: 11, fill: C.sub, maxW: 175, lh: 16 })
  b.wtext(545, 780, 'STEM 探针电流 I_p ≈ β·(πr_p^{2})(πα_p^{2})：探针越小、会聚角越大，能塞进去的电流由 β 拍板', { size: 11, fill: C.sub, maxW: 175, lh: 16 })
  b.wtext(545, 880, '同一支枪从 100 kV 升到 300 kV，亮度提升约三倍', { size: 11, fill: C.sub, maxW: 175, lh: 16 })

  // ============ 四、束流、剂量率与剂量的换算 ============
  b.panel(750, 572, 620, 410, { title: '四、束流、剂量率与剂量的换算' })
  b.tag(1060, 630, '1 pA ≈ 6.2×10^{6} 个电子每秒', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 15, weight: 700, pad: 12 })
  const step = (x: number, t: string, s: string) => {
    b.tag(x, 700, t, { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 12.5, weight: 700, pad: 9 })
    b.ctext(x, 728, s, { size: 10.5, fill: C.mute })
  }
  step(860, '束流', '数十至数百 pA')
  step(1060, '剂量率', '1–20 e^{-}/Å^{2}·s^{-1}')
  step(1270, '总剂量', '预算 50–100 e^{-}/Å^{2}')
  b.arrow(918, 700, 975, 700, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(1138, 700, 1195, 700, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.wtext(770, 770, '以直径约 1 μm 的照明区折算：cryo-EM 典型剂量率约 1–20 e^{-}/Å^{2}·s^{-1}，样品处束流约数十至数百 pA——比材料成像常用的 nA 级低成百上千倍，这正是低剂量技术的含义。', { size: 11.5, fill: C.sub, maxW: 580, lh: 18 })
  b.rect(770, 850, 580, 92, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(790, 880, '算例：60 e^{-}/Å^{2} 总量、10 e^{-}/Å^{2}·s^{-1} 剂量率', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(790, 902, '即约 6 s 曝光；电影模式切成数十帧，以便做束致运动校正（第 8 章）。剂量与剂量率严格区分：总剂量除以帧数得每帧剂量。', { size: 11, fill: C.sub, maxW: 545, lh: 16 })
}

export default scene({
  title: '电子束源与亮度：四代电子枪的谱系',
  subtitle: '钨丝约 10^{9}、LaB_{6} 约 10^{10}、肖特基 10^{12}–10^{13}、冷场 10^{13}–10^{14} A·m^{-2}·sr^{-1}；能量展宽 2–3 eV 收窄至约 0.3 eV；1 pA 约 6.2×10^{6} e^{-}/s',
  draw,
})
