// em ch3-s2 CTF 与 Thon 环（6-em）
import { scene, C, B } from '../../lib'

// 300 kV（λ=0.00197 nm）、Cs=1.2 mm、Δf=−2.0 μm
const LAM = 0.00197, CS = 1.2e6, DF = -2000 // nm
const chi = (g: number) => Math.PI * LAM * g * g * (DF - 0.5 * LAM * LAM * g * g * CS)
const env = (g: number) => Math.exp(-0.9 * Math.pow(g / 0.8, 2))

const draw = (b: B) => {
  // ============ 一、CTF 曲线 ============
  b.panel(30, 132, 700, 430, { title: '一、CTF 曲线：χ、−sin χ 与零点盲区' })
  b.text(50, 182, 'χ(g) = πλg^{2}(Δf − 0.5λ^{2}g^{2}Cs)，CTF(g) = −sin χ', { size: 15, weight: 700, fill: C.ink })
  b.text(95, 200, '代入 300 kV（λ = 0.00197 nm）、Cs = 1.2 mm、Δf = −2.0 μm（欠焦取负）', { size: 11, fill: C.sub })
  const ax = 80, ay = 500, aw = 620, ah = 290, gmax = 1.2
  const X = (g: number) => ax + (g / gmax) * aw
  const Y = (v: number) => ay - ((v + 1) / 2) * ah
  // 零点（−sin χ 过零）
  const zeros: number[] = []
  let prev = -Math.sin(chi(0))
  for (let g = 0.005; g <= gmax; g += 0.005) {
    const cur = -Math.sin(chi(g))
    if (prev !== 0 && Math.sign(cur) !== Math.sign(prev)) zeros.push(g - 0.005 * (cur / (cur - prev)))
    prev = cur
  }
  b.axis(ax, ay, aw, ah, {
    grid: false, xlabel: '空间频率 g（nm⁻¹）',
    xticks: [[0, '0'], ...zeros.map(g => [g / gmax, `g_{${zeros.indexOf(g) + 1}} ${g.toFixed(2)}`] as [number, string])],
    yticks: [[1, '+1'], [0.5, '0'], [0, '−1']],
  })
  // 零点标记
  zeros.forEach(g => {
    b.line(X(g), ay - ah, X(g), ay, { stroke: C.bad, sw: 1.2, dash: '4 4', opacity: 0.65 })
    b.circle(X(g), Y(0), 4, { fill: C.bad })
  })
  // 三条曲线：理想 CTF、包络衰减后、包络 ±E
  let d1 = '', d2 = '', d3 = '', d4 = ''
  for (let g = 0; g <= gmax + 1e-9; g += 0.01) {
    const c = -Math.sin(chi(g)), e = env(g)
    const tag = g < 0.005 ? 'M' : 'L'
    d1 += `${tag}${X(g).toFixed(1)},${Y(c).toFixed(1)}`
    d2 += `${tag}${X(g).toFixed(1)},${Y(c * e).toFixed(1)}`
    d3 += `${tag}${X(g).toFixed(1)},${Y(e).toFixed(1)}`
    d4 += `${tag}${X(g).toFixed(1)},${Y(-e).toFixed(1)}`
  }
  b.path(d3, { fill: 'none', stroke: C.faint, sw: 1.4, dash: '2 4' })
  b.path(d4, { fill: 'none', stroke: C.faint, sw: 1.4, dash: '2 4' })
  b.path(d2, { fill: 'none', stroke: C.dna, sw: 2.4, dash: '7 4' })
  b.path(d1, { fill: 'none', stroke: C.acc, sw: 2.6 })
  b.text(545, 236, '实线 −sin χ（理想）', { size: 10, fill: C.accD })
  b.text(545, 254, '虚线 包络衰减后', { size: 10, fill: C.dna })
  b.text(545, 272, '点线 ±包络 E(g)', { size: 10, fill: C.mute })
  b.ctext(180, 470, '低频通带（强传递）', { size: 10, fill: C.accD })
  b.ctext(400, 470, '负衬度区（黑白反转）', { size: 10, fill: C.bad })
  b.ctext(390, 250, 'χ(g_{1}) ≈ −π', { size: 10, weight: 600, fill: C.bad })

  // ============ 二、Thon 环 ============
  b.panel(750, 132, 620, 430, { title: '二、Thon 环：功率谱的可见指纹' })
  const px = 800, py = 195, ps = 340, pcx = px + ps / 2, pcy = py + ps / 2
  const R = (g: number) => (g / gmax) * (ps / 2)
  b.rect(px, py, ps, ps, { fill: C.ink, rx: 4 })
  // 通带亮环（环心位于相邻零点之间）
  ;([[0.33, 13, 0.85], [0.60, 11, 0.6], [0.79, 9, 0.42], [0.94, 8, 0.3], [1.12, 7, 0.2]] as [number, number, number][]).forEach(([g, sw, op]) => {
    b.circle(pcx, pcy, R(g), { stroke: '#e2e8f0', sw, opacity: op })
  })
  // 零点暗带（虚线示位）
  zeros.forEach(g => b.circle(pcx, pcy, R(g), { stroke: '#94a3b8', sw: 1, dash: '3 4', opacity: 0.5 }))
  b.circle(pcx, pcy, 16, { fill: '#f8fafc', fillOp: 0.25 })
  b.circle(pcx, pcy, 8, { fill: '#f8fafc' })
  // 底边零点刻度
  zeros.forEach(g => b.line(pcx + R(g), py + ps, pcx + R(g), py + ps + 6, { stroke: C.sub, sw: 1.5 }))
  b.arrow(1160, 252, 1005, 262, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.text(1168, 250, '亮环＝通带', { size: 11, fill: C.sub })
  b.arrow(1160, 330, 1080, 358, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.text(1168, 328, '暗带＝CTF 零点', { size: 11, fill: C.bad })
  b.arrow(1160, 470, 990, 390, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.text(1168, 468, '中心束斑', { size: 11, fill: C.sub })
  b.ctext(pcx, 560, '零点：0.50 / 0.71 / 0.87 / 1.01 nm⁻¹（Δf = −2 μm）— CTFFIND4 / GCTF 拟合 → 欠焦与像散', { size: 10, fill: C.sub })

  // ============ 三、欠焦-零点-分辨率表 ============
  b.panel(30, 586, 660, 260, { title: '三、欠焦–零点–分辨率（300 kV，Cs = 1.2 mm）' })
  b.text(50, 626, '第一零点 g₁ ≈ (1/λ|Δf|)^{1/2}：欠焦越大，首零越向低频内移——分辨率潜力与低频可视性此消彼长', { size: 10.5, fill: C.sub })
  b.table(50, 638, 620, {
    headers: ['欠焦 Δf', '第一零点 g₁', '对应周期 d', '特点'],
    colW: [110, 150, 130, 230], rowH: 36, fontSize: 12.5,
    rows: [
      ['−0.5 μm', '约 1.01 nm⁻¹', '约 0.99 nm', '高频通带宽，低频衬度弱'],
      ['−1.0 μm', '约 0.71 nm⁻¹', '约 1.40 nm', '常用折中'],
      ['−2.0 μm', '约 0.50 nm⁻¹', '约 1.98 nm', '低频强，首零明显内移'],
      ['−3.0 μm', '约 0.41 nm⁻¹', '约 2.43 nm', '适合小分子或极低衬度样品'],
    ],
  })

  // ============ 四、混合衬度与包络 ============
  b.panel(710, 586, 660, 260, { title: '四、混合衬度与三种包络' })
  b.text(730, 630, 'CTF_{total}(g) = −[sin χ + Q·cos χ]，Q ≈ 0.1–0.2', { size: 14.5, weight: 700, fill: C.ink })
  b.text(730, 650, '振幅项 cos χ 集中于低频，填补 −sin χ 的空档——冷冻像「低频轮廓尚可辨认」的出处', { size: 10.5, fill: C.sub })
  const envs: [string, string, string, string][] = [
    ['空间相干包络', '照明束有限发散角：各入射方向 χ 不同，高频指数衰减', C.accL, C.acc],
    ['时间相干包络', '能量展宽 ΔE 与 ΔV/V、ΔI/I（10^{-6} 级）等效焦距展宽', C.proL, C.pro],
    ['漂移振动包络', '1 nm/s 漂移 × 1 s 曝光 → 1 nm 信息被拉成拖影', C.warnL, C.warn],
  ]
  envs.forEach(([t, s, f, st], i) => {
    const x = 730 + i * 220
    b.rect(x, 660, 200, 96, { fill: f, stroke: st, sw: 1.5, rx: 7 })
    b.ctext(x + 100, 680, t, { size: 11.5, weight: 700, fill: st })
    b.wtext(x + 12, 700, s, { size: 9.5, fill: C.sub, maxW: 178, lh: 13 })
  })
  b.wtext(730, 782, 'Scherzer 欠焦 Δf_{S} = −1.2(Csλ)^{1/2} 给出最宽同号通带，最小衬度像用于对焦定位；信息极限由包络决定（场发射约 0.1 nm），未校正 300 kV 点分辨率约 0.2 nm——两者之差即后处理可挖掘的空间。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '离焦成像与衬度传递函数：CTF、Thon 环与包络衰减',
  subtitle: '300 kV、Cs = 1.2 mm、Δf = −2.0 μm：第一零点约 0.50 nm⁻¹（周期约 2 nm）、其后依次约 0.71 / 0.87 / 1.01 nm⁻¹；混合 CTF = −[sin χ + Q·cos χ]，Q ≈ 0.1–0.2',
  draw,
})
