// bp ch5-s4 非平衡态热力学与耗散结构（39-e 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、分岔图：从平衡走向远离平衡 ============
  b.panel(30, 132, 1340, 320, { title: '一、从平衡走向远离平衡：驱动强度跨过 λc 后涨落放大、分岔出有序' })

  // 左：分岔图
  b.axis(110, 396, 560, 215, {
    ylabel: '状态变量 X',
    xticks: [[0.04, '平衡'], [0.35, '线性区'], [0.62, 'λc（分岔点）'], [0.96, '强驱动']],
    yticks: [[0.5, '0']],
  })
  b.ctext(390, 440, '驱动强度（离平衡的距离）→', { size: 12.5, weight: 600, fill: C.sub })
  // λc 竖线
  b.line(110 + 0.62 * 560, 181, 110 + 0.62 * 560, 396, { stroke: C.bad, sw: 1.4, dash: '6 4' })
  // 热力学分支（稳定 → 失稳）
  b.curve(110, 396, 560, 215, [[0, 0.5], [0.2, 0.51], [0.4, 0.53], [0.62, 0.555]], { stroke: C.acc, sw: 3 })
  b.curve(110, 396, 560, 215, [[0.62, 0.555], [0.8, 0.58], [0.97, 0.6]], { stroke: C.acc, sw: 2.4, dash: '6 5' })
  // 耗散结构分支
  b.curve(110, 396, 560, 215, [[0.62, 0.555], [0.75, 0.68], [0.85, 0.8], [0.97, 0.9]], { stroke: C.enz, sw: 3.2 })
  b.text(130, 205, '线性区', { size: 10.5, weight: 700, fill: C.ok })
  b.text(130, 222, '（最小熵产生，稳定）', { size: 9.5, fill: C.mute })
  b.text(480, 188, '非线性区（远离平衡）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(250, 262, '热力学分支（稳定 → 失稳）', { size: 10.5, weight: 700, fill: C.accD })
  b.text(500, 244, '涨落被放大 → 分岔', { size: 10, weight: 700, fill: C.bad })
  b.etext(648, 192, '耗散结构分支', { size: 11, weight: 700, fill: C.enzD })

  // 右：两条原理卡
  b.rect(720, 176, 620, 250, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(740, 202, '两条原理的分工：近平衡 vs 远平衡', { size: 13.5, weight: 700, fill: C.ink })
  b.rect(740, 216, 580, 96, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.4, rx: 8 })
  b.text(756, 240, '最小熵产生原理（线性区）', { size: 12, weight: 700, fill: '#065f46' })
  b.wtext(756, 262, 'Onsager 倒易关系（1931；1968 年诺贝尔化学奖）。靠近平衡的定态熵产生率最小，扰动后自动回归——稳定、可预测。', { size: 10.5, fill: C.sub, maxW: 545, lh: 14 })
  b.rect(740, 324, 580, 96, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.4, rx: 8 })
  b.text(756, 348, '耗散结构（Prigogine，1977 年诺贝尔化学奖）', { size: 12, weight: 700, fill: C.enzD })
  b.wtext(756, 370, '持续强驱动、超出线性区：涨落不再被衰减而被放大，系统自发「结晶」出新的时空有序结构。', { size: 10.5, fill: C.sub, maxW: 545, lh: 14 })
  b.ctext(1030, 440, '有序以足够的熵产生为代价，且只在开放、远离平衡的条件下出现', { size: 11, weight: 700, fill: C.ink })

  // ============ 二、三个层次的耗散结构例证 ============
  b.panel(30, 468, 1340, 292, { title: '二、三个层次的耗散结构例证：对流、振荡、时空波' })

  // 卡① 物理：贝纳尔对流
  b.rect(50, 506, 420, 238, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(66, 532, '① 物理：贝纳尔对流', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(80, 560, 180, 8, { fill: C.acc, stroke: C.acc, sw: 1 })
  b.ctext(170, 554, '冷却面（冷）', { size: 9.5, weight: 600, fill: C.accD })
  b.rect(80, 668, 180, 8, { fill: C.bad, stroke: C.bad, sw: 1 })
  b.ctext(170, 692, '加热面（热）', { size: 9.5, weight: 600, fill: C.bad })
  b.circle(125, 618, 40, { stroke: C.faint, sw: 1.4, dash: '4 4' })
  b.arrow(105, 660, 105, 578, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(145, 578, 145, 660, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.circle(215, 618, 40, { stroke: C.faint, sw: 1.4, dash: '4 4' })
  b.arrow(195, 578, 195, 660, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(235, 660, 235, 578, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  const hexPts = (cx: number, cy: number, r: number): [number, number][] => {
    const p: [number, number][] = []
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 6) + (i * Math.PI) / 3
      p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
    }
    return p
  }
  b.polygon(hexPts(320, 590, 26), { fill: C.enzL, fillOp: 0.55, stroke: C.enz, sw: 1.8 })
  b.polygon(hexPts(372, 616, 26), { fill: C.enzL, fillOp: 0.55, stroke: C.enz, sw: 1.8 })
  b.polygon(hexPts(320, 642, 26), { fill: C.enzL, fillOp: 0.55, stroke: C.enz, sw: 1.8 })
  b.ctext(360, 690, '顶面观：六角涡胞', { size: 9.5, weight: 600, fill: C.sub })
  b.wtext(66, 724, '温度梯度持续驱动 → 流体自组织出规则对流胞', { size: 10, fill: C.mute, maxW: 390, lh: 13 })

  // 卡② 化学：振荡
  b.rect(490, 506, 420, 238, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(506, 532, '② 化学：糖酵解振荡与 BZ 反应', { size: 12.5, weight: 700, fill: C.ink })
  b.axis(520, 690, 190, 105, { yticks: [[0, '0'], [1, '—']] })
  b.ctext(615, 573, 'NADH 荧光强度', { size: 11, weight: 600, fill: C.sub })
  const osc: [number, number][] = []
  for (let i = 0; i <= 60; i++) {
    const fx = i / 60
    osc.push([fx, 0.5 + 0.32 * Math.sin(3 * Math.PI * 2 * fx)])
  }
  b.curve(520, 690, 190, 105, osc, { stroke: C.enz, sw: 2.6 })
  b.ctext(615, 716, '时间 →', { size: 10, fill: C.mute })
  b.wtext(725, 606, '酵母糖酵解：NADH 周期性荧光振荡', { size: 10, fill: C.sub, maxW: 170, lh: 13 })
  b.wtext(725, 660, 'BZ 反应：颜色周期切换', { size: 10, fill: C.sub, maxW: 170, lh: 13 })
  b.wtext(506, 728, '代谢振荡 = 分子水平的耗散结构', { size: 10, fill: C.mute, maxW: 390, lh: 13 })

  // 卡③ 生物：时空波
  b.rect(930, 506, 420, 238, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(946, 532, '③ 生物：螺旋波与同步', { size: 12.5, weight: 700, fill: C.ink })
  const spiral: string[] = []
  for (let i = 0; i <= 90; i++) {
    const th = 0.6 + (i / 90) * 6.2
    const r = 3 + 9.2 * th
    spiral.push(`${(i === 0 ? 'M' : 'L')}${(1010 + r * Math.cos(th)).toFixed(1)},${(628 + r * Math.sin(th)).toFixed(1)}`)
  }
  b.path(spiral.join(''), { stroke: C.bad, sw: 3, fill: 'none' })
  b.circle(1010, 628, 66, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.ctext(1010, 712, '螺旋波（示意）', { size: 9.5, fill: C.mute })
  const waves: Array<[string, number]> = [
    ['黏菌聚集的螺旋波', 592],
    ['心肌电螺旋波', 626],
    ['心脏起搏与纤毛同步摆动', 660],
  ]
  waves.forEach(([t, y]) => {
    b.circle(1108, y - 3.5, 3.5, { fill: C.bad })
    b.text(1118, y, t, { size: 10.5, weight: 600, fill: C.sub })
  })
  b.wtext(946, 728, '反应–扩散方程描述的时空自组织', { size: 10, fill: C.mute, maxW: 390, lh: 13 })

  // ============ 三、MEPP 与随机热力学 ============
  b.panel(30, 784, 1340, 196, { title: '三、最小 vs 最大熵产生并不矛盾；随机热力学把第二定律推广到单分子' })

  b.table(50, 856, 640, {
    title: '近平衡 vs 远平衡：两条原理的分工',
    headers: ['', '最小熵产生', '最大熵产生（MEPP）'],
    colW: [90, 260, 290],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['适用区', '线性区（近平衡）', '强驱动区（远离平衡）'],
      ['地位', '定理（Onsager 倒易关系）', '猜想性假说（Kleidon、Dewar）'],
      ['预言', '熵产生率取极小', '熵产生率取极大（有条件）'],
    ],
  })

  b.rect(710, 826, 620, 150, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(730, 852, '单分子尺度的非平衡：随机热力学', { size: 13, weight: 700, fill: C.ink })
  b.wtext(730, 878, '涨落定理与 Jarzynski/Crooks 关系把第二定律推广到小系统、短时间的涨落尺度，其修正项可在光镊拉伸、分子马达做功等单分子实验中直接验证。', { size: 10.5, fill: C.sub, maxW: 575, lh: 14.5 })
  b.wtext(730, 934, '生命恰恰运行在这个尺度上——非平衡物理与生物学在此合流，为「什么是活的」提供越来越定量的回答。', { size: 10.5, fill: C.mute, maxW: 575, lh: 14.5 })
}

export default scene({
  title: '非平衡态热力学与耗散结构：从最小熵产生到时空自组织',
  subtitle: '线性区：最小熵产生（Onsager 1931，1968 诺奖）；跨过 λc：涨落放大、分岔出耗散结构（Prigogine 1977 诺奖）——贝纳尔六角涡胞、糖酵解 NADH 振荡、黏菌/心电螺旋波；MEPP 为强驱动区猜想；涨落定理推广到单分子',
  draw,
})
