// sb ch7-s4 相位改进与初始电子密度图（Task 4-b）
import { scene, C, B } from '../../lib'

// ============ 数值演示：相位噪声前后的真实傅里叶合成 ============
const N = 24, R = 7
const blobs: Array<[number, number, number, number]> = [
  [7, 6, 1.3, 1.5], [10, 5, 1.1, 1.4], [13, 6, 1.2, 1.5], [15, 9, 1.0, 1.4], [14, 12, 1.2, 1.5],
  [11, 13, 1.1, 1.4], [8, 12, 1.2, 1.5], [6, 9, 1.1, 1.4], [9, 8, 0.6, 1.2], [12, 9, 0.5, 1.2], [10, 10, 0.7, 1.3],
]
function rho0(x: number, y: number): number {
  let v = 0
  for (const [cx, cy, w, s] of blobs) {
    const d2 = ((x - cx) ** 2 + (y - cy) ** 2) / (2 * s * s)
    if (d2 < 12) v += w * Math.exp(-d2)
  }
  return v
}
const Famp: number[][] = [], Fph: number[][] = []
for (let h = 0; h < N; h++) {
  Famp[h] = []; Fph[h] = []
  for (let k = 0; k < N; k++) {
    let re = 0, im = 0
    if (Math.min(h, N - h) <= R && Math.min(k, N - k) <= R) {
      for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) {
        const a = (2 * Math.PI * (h * x + k * y)) / N
        const v = rho0(x, y)
        re += v * Math.cos(a); im += v * Math.sin(a)
      }
    }
    Famp[h][k] = Math.hypot(re, im); Fph[h][k] = Math.atan2(im, re)
  }
}
let seed = 7654321
const rnd01 = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296 }
const gauss = () => Math.sqrt(-2 * Math.log(rnd01() + 1e-12)) * Math.cos(2 * Math.PI * rnd01())
/** 生成共轭对称的相位噪声表（度） */
function noiseTab(sigmaDeg: number): number[][] {
  const s = sigmaDeg / 180 * Math.PI
  const tab: number[][] = Array.from({ length: N }, () => Array(N).fill(0))
  for (let h = 0; h < N; h++) for (let k = 0; k < N; k++) {
    if (tab[h][k] !== 0 || (h === 0 && k === 0)) continue
    const ph = (N - h) % N, pk = (N - k) % N
    const n = (ph === h && pk === k) ? 0 : gauss() * s
    tab[h][k] = n === 0 ? 1e-9 : n
    tab[ph][pk] = -n === 0 ? -1e-9 : -n
  }
  return tab
}
function synth(phTab: number[][]): number[][] {
  const rho: number[][] = []
  for (let x = 0; x < N; x++) {
    rho[x] = []
    for (let y = 0; y < N; y++) {
      let v = 0
      for (let h = 0; h < N; h++) for (let k = 0; k < N; k++) {
        if (Famp[h][k] === 0) continue
        v += Famp[h][k] * Math.cos((2 * Math.PI * (h * x + k * y)) / N + Fph[h][k] + phTab[h][k])
      }
      rho[x][y] = v
    }
  }
  return rho
}
const tabInit = noiseTab(65) // 初始相位噪声约 65 度（FOM 约 0.5）
const tabFine = noiseTab(25) // 修饰后约 25 度（FOM 约 0.9）
const rhoInit = synth(tabInit), rhoFine = synth(tabFine), rhoRef = synth(Array.from({ length: N }, () => Array(N).fill(1e-9)))

/** 渲染密度图（正密度墨色 4 档、负密度红色） */
function drawMap(b: B, x0: number, y0: number, cell: number, rho: number[][]) {
  let vAbs = 0
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) vAbs = Math.max(vAbs, Math.abs(rho[i][j]))
  const bins = [0.55, 0.34, 0.18, 0.08]
  const dPos = bins.map(() => '')
  let dNeg = ''
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const v = rho[i][j] / vAbs
    const px = (x0 + i * cell).toFixed(1), py = (y0 + j * cell).toFixed(1)
    if (v > 0.08) { for (let t = 0; t < bins.length; t++) if (v > bins[t]) { dPos[t] += `M${px},${py}h${cell}v${cell}h-${cell}z`; break } }
    else if (v < -0.08) dNeg += `M${px},${py}h${cell}v${cell}h-${cell}z`
  }
  b.rect(x0 - 2, y0 - 2, N * cell + 4, N * cell + 4, { fill: '#ffffff', stroke: C.line, sw: 1.3, rx: 3 })
  for (let t = bins.length - 1; t >= 0; t--) {
    if (!dPos[t]) continue
    b.path(dPos[t], { fill: C.ink, fillOp: t === 0 ? 0.88 : 0.6 - t * 0.13, stroke: 'none' })
  }
  if (dNeg) b.path(dNeg, { fill: C.bad, fillOp: 0.38, stroke: 'none' })
}

const draw = (b: B) => {
  // ============ 一、溶剂平坦化迭代 ============
  b.panel(30, 132, 660, 330, { title: '一、溶剂平坦化：最强先验的迭代打磨（Wang 1985）' })
  // 晶胞截面
  b.rect(66, 208, 240, 172, { fill: C.accL, fillOp: 0.35, stroke: C.sub, sw: 2, rx: 4 })
  b.text(76, 226, '晶胞截面：溶剂区 40–60%', { size: 10.5, weight: 700, fill: C.accD })
  b.ellipse(150, 300, 44, 34, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(190, 330, 30, 24, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(120, 330, 22, 17, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(160, 322, '蛋白区', { size: 11, weight: 700, fill: C.dnaD })
  b.circle(160, 312, 52, { fill: 'none', stroke: C.warn, sw: 1.8, dash: '6 5' })
  b.text(76, 396, 'Wang 半径 8–10 Å 滑动平均划界', { size: 9.5, weight: 700, fill: C.warnD })
  // 迭代循环
  const steps: Array<[number, number, string, string]> = [
    [495, 232, '① 带噪声的初始图', C.bad],
    [612, 300, '② 划分蛋白区/溶剂区', C.warn],
    [495, 368, '③ 溶剂区压平到均值', C.acc],
    [378, 300, '④ 傅里叶回收相位', C.dna],
  ]
  for (const [cx, cy, txt, c] of steps) {
    b.tag(cx, cy, txt, { fill: `${c}18`, stroke: c, size: 10.5, weight: 700, tfill: C.ink, pad: 9, minh: 40 })
  }
  b.arrow(556, 250, 596, 272, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(596, 330, 556, 350, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(434, 350, 394, 330, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(394, 272, 434, 250, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.ctext(495, 294, '迭代 5–20 轮', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(495, 312, '至相位收敛', { size: 10, fill: C.mute })
  b.wtext(56, 412, '直觉：约六成晶胞体积的「已知答案」是最强先验。直方图匹配与之交替：给定分辨率下蛋白密度分布近乎普适，逐点规整削噪扶正；溶剂含量可在 30–65% 区间扫描，取图对比度最高的值——真实溶剂含量常由此反推得比 Matthews 估计（V_{m} 1.7–3.5 Å^{3}/Da，溶剂约 27–65%）更准。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 二、修饰前后数值对比 ============
  b.panel(710, 132, 660, 330, { title: '二、修饰前后：真实傅里叶合成的对照' })
  const cell = 7.2
  const mw = N * cell
  const mapY = 196
  drawMap(b, 736, mapY, cell, rhoInit)
  drawMap(b, 964, mapY, cell, rhoFine)
  drawMap(b, 1192, mapY, cell, rhoRef)
  b.ctext(736 + mw / 2, 184, '修饰前（σ 约 65°）', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(964 + mw / 2, 184, '修饰后（σ 约 25°）', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(1192 + mw / 2, 184, '参照：相位正确', { size: 10.5, weight: 700, fill: C.okD })
  b.tag(736 + mw / 2, mapY + mw + 24, 'FOM 约 0.5', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.badD, pad: 7 })
  b.tag(964 + mw / 2, mapY + mw + 24, 'FOM 约 0.9', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 7 })
  b.tag(1192 + mw / 2, mapY + mw + 24, '精修级', { fill: C.panelB, stroke: C.mute, size: 10, weight: 700, tfill: C.sub, pad: 7 })
  b.arrow(890, mapY + mw + 24, 954, mapY + mw + 24, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(922, mapY + mw + 10, '修饰', { size: 9.5, weight: 700, fill: C.enz })
  b.arrow(1118, mapY + mw + 24, 1182, mapY + mw + 24, { stroke: C.mute, sw: 1.6, marker: 'ink' })
  b.wtext(730, 424, '同一「分子」、同一振幅，只有相位噪声不同：初始图断续难辨（对应 60° 档），修饰后主链连续、口袋清晰。FOM（相位余弦期望）实验定相后典型 0.4–0.6，修饰后应大于 0.7；但 FOM 高不必然等于图好——修饰可以「美化」指标。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })

  // ============ 三、NCS 平均与相位外推 ============
  b.panel(30, 482, 660, 400, { title: '三、NCS 平均与相位外推：多拷贝降噪、逐壳爬坡' })
  // 左：四拷贝平均示意
  const cops: Array<[number, number, number]> = [[66, 540, 11], [150, 540, 23], [66, 624, 31], [150, 624, 7]]
  for (const [cx, cy, s0] of cops) {
    b.rect(cx, cy, 76, 76, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 4 })
    b.ellipse(cx + 38, cy + 40, 22, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
    b.ellipse(cx + 52, cy + 52, 12, 14, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
    let sd = s0
    const rr = () => { sd = (sd * 1664525 + 1013904223) % 4294967296; return sd / 4294967296 }
    for (let i = 0; i < 14; i++) b.circle(cx + 8 + rr() * 60, cy + 8 + rr() * 60, 1.8, { fill: C.bad, fillOp: 0.55, stroke: 'none' })
  }
  b.ctext(146, 526, '四个相同拷贝：各自独立携带噪声', { size: 10, weight: 700, fill: C.sub })
  b.arrow(238, 578, 268, 578, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.rect(278, 540, 92, 92, { fill: '#d1fae5', fillOp: 0.4, stroke: C.ok, sw: 1.8, rx: 4 })
  b.ellipse(324, 578, 26, 30, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(340, 592, 14, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(324, 644, '对齐叠合取平均', { size: 10, weight: 700, fill: C.okD })
  b.wtext(56, 668, '噪声按拷贝数的平方根缩减：60 重二十面体对称的病毒颗粒可把噪声压到约八分之一，图对比度陡升。前提是拷贝间构象真的一致——叠合比较后，差异区应排除在平均之外。', { size: 10, fill: C.sub, maxW: 330, lh: 14.5 })
  // 右：相位外推阶梯
  const gx = 420, gy = 700, gw = 230, gh = 150
  b.axis(gx, gy, gw, gh, {
    xlabel: '逐壳层放开分辨率', title: '相位外推：先猜后修',
    xticks: [[0.02, '6 Å'], [0.3, '5 Å'], [0.55, '4 Å'], [0.8, '3 Å'], [1, '2.5 Å']],
    yticks: [[0.1, ''], [0.9, '']],
  })
  b.curve(gx, gy, gw, gh, [[0, 0.42], [0.1, 0.46], [0.22, 0.58], [0.34, 0.66], [0.46, 0.74], [0.58, 0.8], [0.72, 0.86], [0.86, 0.89], [1, 0.91]], { stroke: C.dna, sw: 3 })
  b.curve(gx, gy, gw, gh, [[0.46, 0.74], [0.58, 0.68], [0.72, 0.52]], { stroke: C.bad, sw: 2.2, dash: '6 4' })
  b.ctext(gx + gw * 0.66, gy - gh * 0.45, '步子过大：掉头向下', { size: 9.5, weight: 700, fill: C.badD })
  b.wtext(420, 726, '每次放开一两个壳层，新壳层相位先「猜」后「修」；对比度须单调上升，一旦掉头即退回上一壳层。经典战绩：病毒从 10 Å 级推到 3 Å 以内；普通蛋白 SAD 常从 3.5 Å 起步逐壳推到 2 Å。', { size: 10, fill: C.sub, maxW: 240, lh: 14.5 })
  b.tag(360, 852, '外推与 NCS/溶剂先验接力：先验越强，「猜」得越准', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 8 })

  // ============ 四、判据、组合与流水线 ============
  b.panel(710, 482, 660, 400, { title: '四、判据、SIGMAA 组合与自动流水线' })
  b.table(730, 528, 620, {
    headers: ['平均相位误差', '图的样貌', '可操作性'],
    colW: [140, 250, 230],
    rowH: 32,
    fontSize: 10,
    rows: [
      ['约 20°', '接近精修后水平', '轻松追踪、侧链清晰'],
      ['约 40°', '主链连续、侧链可辨', '可手工建模（合格线）'],
      ['约 60°', '断续、噪声斑块多', '难下手，须密度修饰续命'],
      ['约 90°', '与随机相位无异', '基本不可读，定相失败'],
    ],
  })
  // SIGMAA 钟形
  const sx = 740, sy = 760, sw2 = 220
  b.ctext(sx + sw2 / 2, 722, 'SIGMAA 相位组合（Read 1986）', { size: 11, weight: 700, fill: C.ink })
  const bell = (cx: number, wdt: number, hgt: number) => {
    const pts: Array<[number, number]> = []
    for (let t = -3; t <= 3; t += 0.5) pts.push([0.5 + t * wdt / 2 / sw2 * 0.32, hgt * Math.exp(-t * t / 1.2)])
    return pts
  }
  b.curve(sx, sy, sw2, 90, bell(0.5, 1, 0.55), { stroke: C.dna, sw: 2.2, dash: '6 4' })
  b.curve(sx, sy, sw2, 90, bell(0.62, 0.45, 0.9), { stroke: C.acc, sw: 2.2 })
  b.curve(sx, sy, sw2, 90, bell(0.585, 0.4, 1), { stroke: C.ink, sw: 3 })
  b.line(sx, sy, sx + sw2, sy, { stroke: C.sub, sw: 1.6 })
  b.ctext(sx + sw2 * 0.5, sy + 18, '实验相位（宽）', { size: 9, fill: C.dnaD })
  b.ctext(sx + sw2 * 0.78, sy + 18, '模型相位（窄）', { size: 9, fill: C.accD })
  b.ctext(sx + sw2 * 0.63, sy - 96, '合并（逐反射加权）', { size: 9.5, weight: 700, fill: C.ink })
  b.wtext(730, 800, '模型可信处模型相位权重大，模型存疑处实验相位掌舵；部分模型与实验相位互为保险，常与外推配套。', { size: 10, fill: C.sub, maxW: 240, lh: 14.5 })
  // 流水线
  b.tag(1130, 742, 'autoSHARP：SHARP 精修重原子', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 7 })
  b.tag(1130, 772, '密度修饰 + NCS 平均', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 7 })
  b.tag(1130, 802, '自动建模（第 8 章）', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 7 })
  b.arrow(1130, 752, 1130, 762, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.arrow(1130, 782, 1130, 792, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.wtext(1000, 838, 'CRANK2 从原始数据到可建模图一键贯通；SHELXE 把相位改进与片段追踪交替——追踪相关系数高于约 30% 即提示定相成功（Thorn 与 Sheldrick 经验判据）。陷阱：溶剂含量低于约 30% 收益有限；过度修饰会把模型偏差固化——永远并排保留修饰前后两版图。', { size: 10, fill: C.sub, maxW: 360, lh: 14.5 })

  // 底部收束
  b.ctext(700, 946, '密度修饰的终点是一张够格的图与相位 MTZ——下一步把密度翻译成原子坐标，再把坐标与强度互相打磨（第 8 章）', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '相位改进与初始电子密度图：从带噪初值到可建模',
  subtitle: '溶剂平坦化以 8–10 Å Wang 半径划界、迭代 5–20 轮；NCS 平均把噪声按拷贝数平方根缩减（60 重病毒约八分之一）；相位外推每次一两个壳层；FOM 从 0.4–0.6 升至 0.7 以上；SHELXE CC 大于约 30% 判定相成功',
  draw,
})
