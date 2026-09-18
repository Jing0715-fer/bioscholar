// bp ch7-s4 电缆理论与神经元信息整合（39-e 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、被动电缆方程：V(x)=V₀e^(−x/λ) ============
  b.panel(30, 132, 1340, 320, { title: '一、被动电缆方程：V(x) = V₀·e^(−x/λ)，电位沿突起指数衰减' })

  // 左：指数衰减曲线
  b.axis(90, 410, 620, 210, {
    ylabel: 'V(x)',
    xticks: [[0, '0'], [0.2, 'λ'], [0.4, '2λ'], [0.6, '3λ'], [0.8, '4λ'], [1, '5λ']],
    yticks: [[0, '0'], [0.37, '0.37'], [1, 'V₀']],
  })
  const expo: [number, number][] = []
  for (let i = 0; i <= 50; i++) {
    const fx = i / 50
    expo.push([fx, Math.exp(-5 * fx)])
  }
  b.curve(90, 410, 620, 210, expo, { stroke: C.acc, sw: 3 })
  b.line(90 + 0.2 * 620, 410, 90 + 0.2 * 620, 410 - 0.368 * 210, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.line(90, 410 - 0.368 * 210, 90 + 0.2 * 620, 410 - 0.368 * 210, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.circle(90 + 0.2 * 620, 410 - 0.368 * 210, 5, { fill: C.accD })
  b.ctext(350, 245, 'x = λ 处 V = 0.37·V₀（衰减至 37%）', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(400, 448, '沿被动突起的距离 x', { size: 11.5, weight: 600, fill: C.sub })

  // 右：集总参数电路
  b.text(760, 222, '被动电缆的集总电路（每单位长度）', { size: 13, weight: 700, fill: C.ink })
  b.tag(880, 244, 'λ = √(r_m / r_i)', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(1130, 244, 'τ = r_m · c_m', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 8 })
  // 轴向：V₀ 源 + r_i 链
  b.circle(760, 300, 14, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(760, 305, 'V₀', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(760, 276, '注入', { size: 9.5, fill: C.mute })
  b.line(774, 300, 820, 300, { stroke: C.sub, sw: 2 })
  b.ctext(890, 278, 'r_i（轴向电阻）', { size: 10, weight: 700, fill: C.proD })
  for (const [x1, x2] of [[820, 960], [960, 1100], [1100, 1240]] as [number, number][]) {
    b.path(`M ${x1 + 4},300 l 12,-12 l 18,24 l 18,-24 l 18,24 l 18,-24 l 18,24 l 12,-12`, { stroke: C.pro, sw: 2, fill: 'none' })
    void x2
  }
  // 节点与膜支路：r_m（820、1100）与 c_m（960、1240）
  for (const nx of [820, 960, 1100, 1240]) b.circle(nx, 300, 5, { fill: C.ink })
  const zigV = (x: number, y1: number, y2: number) => {
    const n = 6
    const dy = (y2 - y1) / n
    let d = `M ${x},${y1}`
    for (let i = 0; i < n; i++) d += ` l ${i % 2 === 0 ? 10 : -10},${dy}`
    d += ` L ${x},${y2}`
    return d
  }
  for (const nx of [820, 1100]) {
    b.path(zigV(nx, 306, 372), { stroke: C.dna, sw: 2, fill: 'none' })
    b.line(nx, 372, nx, 400, { stroke: C.sub, sw: 2 })
    b.etext(nx - 16, 346, 'r_m', { size: 10, weight: 700, fill: C.dnaD })
  }
  for (const nx of [960, 1240]) {
    b.line(nx, 306, nx, 345, { stroke: C.sub, sw: 2 })
    b.line(nx - 16, 345, nx + 16, 345, { stroke: C.rna, sw: 2.6 })
    b.line(nx - 16, 357, nx + 16, 357, { stroke: C.rna, sw: 2.6 })
    b.line(nx, 357, nx, 400, { stroke: C.sub, sw: 2 })
    b.text(nx + 24, 354, 'c_m', { size: 10, weight: 700, fill: C.rnaD })
  }
  b.line(780, 400, 1300, 400, { stroke: C.mute, sw: 2 })
  for (let i = 0; i < 18; i++) b.line(792 + i * 28, 400, 784 + i * 28, 410, { stroke: C.mute, sw: 1.2 })
  b.etext(1300, 418, '胞外（0 电位）', { size: 9.5, fill: C.mute })
  b.text(760, 432, 'τ = r_m·c_m：典型 5–20 ms——时间积分窗口', { size: 10.5, weight: 600, fill: C.sub })
  b.text(760, 450, 'λ = √(r_m/r_i)：典型 0.1–1 mm——空间整合范围', { size: 10.5, weight: 600, fill: C.sub })

  // ============ 二、λ 与 τ 划定时空整合窗 ============
  b.panel(30, 468, 1340, 280, { title: '二、λ 与 τ 划定时空整合窗：空间叠加 + 时间积分 → 泄漏积分–发放' })

  // 左：空间整合
  b.rect(50, 494, 640, 240, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(70, 522, '空间整合：突触电流加权汇于轴丘', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(70, 548, '线性电缆上简单叠加；门控通道引入非线性（局部尖峰、树突 Na/Ca 放大）', { size: 10, fill: C.mute, maxW: 560, lh: 13 })
  // 树突主干（透明度分段 = 衰减）
  b.line(90, 620, 250, 620, { stroke: C.pro, sw: 5, opacity: 1 })
  b.line(250, 620, 410, 620, { stroke: C.pro, sw: 5, opacity: 0.6 })
  b.line(410, 620, 486, 620, { stroke: C.pro, sw: 5, opacity: 0.3 })
  b.polyline([[200, 620], [260, 585], [320, 565]], { stroke: C.pro, sw: 3.5 })
  b.polyline([[300, 620], [360, 655], [420, 675]], { stroke: C.pro, sw: 3.5 })
  b.polyline([[390, 620], [450, 590], [510, 575]], { stroke: C.pro, sw: 3.5 })
  for (const [sx, sy] of [[90, 620], [320, 565], [420, 675], [510, 575]] as [number, number][]) {
    b.circle(sx, sy, 6, { fill: C.warnL, stroke: C.warn, sw: 2 })
  }
  b.circle(520, 620, 34, { fill: C.proL, stroke: C.pro, sw: 2.5 })
  b.circle(520, 620, 9, { fill: C.pro, fillOp: 0.4 })
  b.polygon([[554, 606], [590, 613], [554, 634]], { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.line(590, 620, 640, 620, { stroke: C.enz, sw: 4 })
  b.polyline([[600, 620], [610, 596], [618, 640], [626, 620]], { stroke: C.bad, sw: 2.4 })
  b.ctext(600, 588, '轴丘', { size: 9.5, weight: 700, fill: C.enzD })
  b.line(140, 690, 440, 690, { stroke: C.acc, sw: 1.8, marker: 'acc', markerStart: 'acc', dash: '6 4' })
  b.ctext(290, 710, '远处输入按 e^(−x/λ) 衰减；λ 典型 0.1–1 mm', { size: 10, weight: 700, fill: C.accD })

  // 右：时间整合（LIF）
  b.rect(680, 494, 640, 240, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(700, 522, '时间整合：泄漏积分–发放器（LIF）', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(700, 548, '膜时间常数 τ = r_m·c_m（典型 5–20 ms）：时间整合窗口', { size: 10, fill: C.mute, maxW: 560, lh: 13 })
  b.axis(710, 706, 300, 150, {
    yticks: [[0, '0'], [0.8, '阈值']],
    xticks: [[0.97, '时间 →']],
  })
  b.line(710, 706 - 0.8 * 150, 1010, 706 - 0.8 * 150, { stroke: C.bad, sw: 1.6, dash: '6 4' })
  const lif: [number, number][] = [
    [0, 0], [0.08, 0], [0.1, 0.3], [0.18, 0.22], [0.25, 0.22], [0.27, 0.5], [0.35, 0.42],
    [0.4, 0.42], [0.42, 0.66], [0.5, 0.58], [0.55, 0.79], [0.565, 0.98], [0.58, 0.02], [0.6, 0],
    [0.7, 0], [0.75, 0.2], [0.85, 0.12], [1, 0.05],
  ]
  b.curve(710, 706, 300, 150, lif, { stroke: C.enz, sw: 2.6 })
  b.wtext(1030, 580, '短于 τ 的连续突触输入在膜电容上积分叠加', { size: 10.5, fill: C.sub, maxW: 280, lh: 14 })
  b.wtext(1030, 624, '超过阈值 → 发放并复位：泄漏积分–发放', { size: 10.5, fill: C.sub, maxW: 280, lh: 14 })
  b.wtext(1030, 668, 'τ ~ 10 ms 的记忆保持 + λ ~ 0.5 mm 的可达范围，划定单个神经元「同时看到什么、记得多久」', { size: 10, fill: C.mute, maxW: 280, lh: 13 })

  // ============ 三、几何决定 λ；从被动到主动 ============
  b.panel(30, 764, 1340, 216, { title: '三、几何与髓鞘决定 λ；主动电导使树突成为「非线性电缆」' })

  // 左：参数学
  b.rect(50, 790, 630, 170, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(70, 816, 'λ 与 τ 的参数学', { size: 13, weight: 700, fill: C.ink })
  const geo: Array<[string, number]> = [
    ['λ = √(r_m/r_i)：大直径（r_i 小）、高膜阻（r_m 大）→ λ 大 → 信号传得远', 848],
    ['髓鞘：r_m 增大几个数量级、c_m 减小数倍 → λ 延长到 cm 级（跳跃传导）', 880],
    ['起源：Kelvin 为海底电报电缆发展的方程，被 Hodgkin 等移植到神经突起', 912],
  ]
  geo.forEach(([t, y]) => {
    b.circle(88, y - 4, 4, { fill: C.acc })
    b.text(100, y, t, { size: 10.5, weight: 600, fill: C.sub })
  })

  // 右：从被动到主动
  b.rect(700, 790, 640, 170, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(720, 816, '从被动到主动', { size: 13, weight: 700, fill: C.ink })
  b.wtext(720, 846, '真实树突布满电压门控通道，被动电缆只是零阶近似；带主动电导的「非线性电缆」可支持树突局部放电、反向传播的 AP 与平台电位。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14.5 })
  b.wtext(720, 894, '但线性 λ–τ 框架仍是理解神经元几何—功能关系（树突长度、分叉自相似、髓鞘周期）的第一语言，也是计算神经科学所有精细模型的底座。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14.5 })
}

export default scene({
  title: '电缆理论与神经元信息整合：λ–τ 划定时空窗口',
  subtitle: 'V(x) = V₀e^(−x/λ)（x = λ 处衰减至 37%）；τ = r_m·c_m 典型 5–20 ms、λ = √(r_m/r_i) 典型 0.1–1 mm（髓鞘 → cm 级）；神经元 ≈ 泄漏积分–发放器',
  draw,
})
