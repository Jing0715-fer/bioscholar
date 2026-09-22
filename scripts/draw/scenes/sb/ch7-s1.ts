// sb ch7-s1 结构因子与相位问题（Task 4-b）
import { scene, C, B } from '../../lib'

// ============ 思想实验的数值演示：连续「分子」的真实二维傅里叶合成 ============
const N = 24, R = 7 // R 为分辨率截断（|h|,|k| ≤ R）
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
/** 按给定 (振幅, 相位) 表做逆傅里叶合成，返回实密度 */
function synth(mod: (h: number, k: number) => [number, number]): number[][] {
  const rho: number[][] = []
  for (let x = 0; x < N; x++) {
    rho[x] = []
    for (let y = 0; y < N; y++) {
      let v = 0
      for (let h = 0; h < N; h++) for (let k = 0; k < N; k++) {
        if (Famp[h][k] === 0) continue
        const [a, ph] = mod(h, k)
        v += a * Math.cos((2 * Math.PI * (h * x + k * y)) / N + ph)
      }
      rho[x][y] = v
    }
  }
  return rho
}
// 固定种子随机相位（保持共轭对称，密度为实）
let seed = 1234567
const rnd01 = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296 }
const phR: number[][] = Array.from({ length: N }, () => Array(N).fill(0))
for (let h = 0; h < N; h++) for (let k = 0; k < N; k++) {
  if (phR[h][k] !== 0 || (h === 0 && k === 0)) continue
  const ph = (N - h) % N, pk = (N - k) % N
  const a = (ph === h && pk === k) ? (rnd01() < 0.5 ? 0 : Math.PI) : rnd01() * Math.PI * 2
  phR[h][k] = a === 0 ? 1e-9 : a
  phR[ph][pk] = -a === 0 ? -1e-9 : -a
}
let sm = 0, cnt = 0
for (let h = 0; h < N; h++) for (let k = 0; k < N; k++)
  if (!(h === 0 && k === 0) && Famp[h][k] > 0) { sm += Famp[h][k]; cnt++ }
const ampC = sm / cnt // 常数振幅取非直流项平均值
const rhoOK = synth((h, k) => [Famp[h][k], Fph[h][k]])                        // 正确 (|F|, φ)
const rhoConstA = synth((h, k) => [h === 0 && k === 0 ? Famp[0][0] : ampC, Fph[h][k]]) // 振幅换常数
const rhoRandP = synth((h, k) => [Famp[h][k], h === 0 && k === 0 ? 0 : phR[h][k]])     // 相位随机

/** 渲染一张密度图（正密度墨色分 4 档、负密度红色），各档合成一条 path */
function drawMap(b: B, x0: number, y0: number, cell: number, rho: number[][]) {
  let vAbs = 0
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) vAbs = Math.max(vAbs, Math.abs(rho[i][j]))
  const bins: Array<[number, number, string]> = [[0.55, 0.85, C.ink], [0.34, 0.55, C.ink], [0.18, 0.34, C.ink], [0.08, 0.18, C.ink]]
  const dPos = bins.map(() => ''), dNeg: string[] = []
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const v = rho[i][j] / vAbs
    const px = (x0 + i * cell).toFixed(1), py = (y0 + j * cell).toFixed(1)
    if (v > 0.08) {
      for (let t = 0; t < bins.length; t++) if (v > bins[t][0]) { dPos[t] += `M${px},${py}h${cell}v${cell}h-${cell}z`; break }
    } else if (v < -0.08) dNeg.push(`M${px},${py}h${cell}v${cell}h-${cell}z`)
  }
  b.rect(x0 - 2, y0 - 2, N * cell + 4, N * cell + 4, { fill: '#ffffff', stroke: C.line, sw: 1.3, rx: 3 })
  for (let t = bins.length - 1; t >= 0; t--) {
    if (!dPos[t]) continue
    b.path(dPos[t], { fill: bins[t][2], fillOp: t === 0 ? 0.88 : 0.62 - t * 0.13, stroke: 'none' })
  }
  if (dNeg.length) b.path(dNeg.join(''), { fill: C.bad, fillOp: 0.4, stroke: 'none' })
}

const draw = (b: B) => {
  // ============ 一、傅里叶对偶 ============
  b.panel(30, 132, 660, 330, { title: '一、傅里叶对偶：电子密度与结构因子' })
  b.tag(240, 176, 'ρ(x) = (1/V) Σ F(h) exp(−2πi h·x)', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 10 })
  b.tag(500, 176, 'F(h) = Σ f_{j} exp(2πi h·x_{j})', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 10 })
  // 实空间晶胞
  b.rect(70, 215, 170, 130, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 4 })
  b.ctext(155, 233, '实空间：晶胞与原子', { size: 11, weight: 700, fill: C.ink })
  for (const [x, y, w, s] of blobs) {
    b.circle(78 + (x / N) * 152, 248 + (y / N) * 82, 1.6 + s * 2.1, { fill: C.dna, fillOp: 0.8, stroke: 'none' })
  }
  b.text(70, 358, '原子坐标 x_{j} 与散射因子 f_{j}（Z 越重贡献越大）', { size: 10, fill: C.mute })
  // 倒易空间斑点阵（|F| 半径的真实数值，仅低频 15×15）
  b.rect(340, 215, 170, 130, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 4 })
  b.ctext(425, 233, '倒易空间：衍射斑点 |F(hkl)|', { size: 11, weight: 700, fill: C.ink })
  let aMax = 0
  for (let h = -R; h <= R; h++) for (let k = -R; k <= R; k++)
    aMax = Math.max(aMax, Famp[(h + N) % N][(k + N) % N])
  for (let h = -R; h <= R; h++) for (let k = -R; k <= R; k++) {
    const a = Famp[(h + N) % N][(k + N) % N]
    const r = (a / aMax) * 4.4
    if (r > 0.5) b.circle(378 + (h / R) * 47, 262 + (k / R) * 47, r, { fill: C.acc, fillOp: 0.2 + (r / 4.4) * 0.72, stroke: 'none' })
  }
  b.text(340, 358, '斑点大小按左图分子的真实 |F| 数值绘制', { size: 10, fill: C.mute })
  // 双向箭头
  b.arrow(248, 262, 332, 262, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(290, 252, '正变换', { size: 10.5, weight: 700, fill: C.enz })
  b.arrow(332, 300, 248, 300, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext(290, 290, '逆变换合成密度图', { size: 10.5, weight: 700, fill: C.ok })
  // 相位子（phasor）
  b.circle(600, 280, 44, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.line(600, 280, 644, 280, { stroke: C.faint, sw: 1.1, dash: '4 4' })
  b.line(600, 280, 600, 236, { stroke: C.faint, sw: 1.1, dash: '4 4' })
  b.arrow(600, 280, 636, 254, { stroke: C.pro, sw: 2.6, marker: 'pro' })
  b.ctext(600, 338, 'F = |F| e^{iφ}_{h}', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(600, 358, '振幅 |F| 定强弱，相位 φ_{h} 定步调', { size: 10, fill: C.mute })
  b.wtext(56, 400, '「解出结构」= 为每个 hkl 求得一对 (|F|, φ)，再做一次逆变换把级数加和成密度图。级数里缺任何一个系数，图中都会出现系统性纹路与鬼影——数据完整度大于 95% 的纪律（第 6 章）在解析端得到回响。', { size: 10.5, fill: C.sub, maxW: 615, lh: 16 })

  // ============ 二、相位问题：实验只交出振幅 ============
  b.panel(710, 132, 660, 330, { title: '二、相位问题：探测器只交出振幅' })
  // 可见光显微镜（透镜存在）
  b.rect(740, 210, 240, 150, { fill: C.okL, fillOp: 0.55, stroke: C.ok, sw: 1.5, rx: 8 })
  b.ctext(860, 230, '可见光显微镜：透镜在场', { size: 11.5, weight: 700, fill: C.okD })
  b.circle(790, 285, 9, { fill: C.warn, stroke: 'none' })
  b.ctext(790, 310, '物', { size: 10, fill: C.mute })
  b.ellipse(860, 285, 12, 34, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.arrow(806, 285, 845, 285, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(878, 285, 920, 285, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.circle(940, 285, 11, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(940, 310, '像', { size: 10, fill: C.mute })
  b.wtext(748, 334, '物镜把散射波按原始相位重新叠加，当场「算」出像。', { size: 10, fill: C.sub, maxW: 225, lh: 14 })
  // X 射线（无透镜）
  b.rect(1000, 210, 340, 150, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(1170, 230, 'X 射线晶体学：没有透镜', { size: 11.5, weight: 700, fill: C.badD })
  b.rect(1030, 252, 26, 56, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 3 })
  b.ctext(1043, 250, '晶体', { size: 9.5, fill: C.mute })
  for (let i = 0; i < 5; i++) {
    const dy = 258 + i * 11
    b.arrow(1062, dy, 1112, dy + (i - 2) * 5, { stroke: C.enz, sw: 1.4, marker: 'enz' })
  }
  b.rect(1122, 252, 90, 56, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 3; i++) for (let j = 0; j < 5; j++)
    b.circle(1134 + j * 16, 262 + i * 17, 2.6, { fill: C.enz })
  b.ctext(1167, 322, '探测器逐点光子计数', { size: 10, fill: C.sub })
  b.wtext(1000, 338, 'I(h) = |F(h)|^{2}，开方得振幅；相位在远快于探测响应的时间尺度内随机涨落，单次测量即被平均抹平。', { size: 10, fill: C.sub, maxW: 330, lh: 14 })
  b.tag(900, 392, 'X 射线折射率与 1 仅差约 10^{−6}，造不出有效透镜', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 9 })
  b.wtext(730, 424, '对照：电子显微镜里磁透镜恰好存在，故冷冻电镜不经历晶体学式的相位问题（第 9、10 章）。「合唱队每个人的音量都测准了，却没人知道谁先开口、谁慢半拍。」', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 三、相位主导：数值演示 ============
  b.panel(30, 482, 660, 400, { title: '三、相位主导原则：振幅错图变糊，相位错图变脸' })
  const cell = 7.4
  const mw = N * cell
  const mapY = 548
  drawMap(b, 56, mapY, cell, rhoOK)
  drawMap(b, 264, mapY, cell, rhoConstA)
  drawMap(b, 472, mapY, cell, rhoRandP)
  b.ctext(56 + mw / 2, 536, '① (|F|, φ) 全部正确', { size: 11, weight: 700, fill: C.okD })
  b.ctext(264 + mw / 2, 536, '② 振幅换成常数、相位保留', { size: 11, weight: 700, fill: C.accD })
  b.ctext(472 + mw / 2, 536, '③ 相位随机、振幅保留', { size: 11, weight: 700, fill: C.badD })
  b.wtext(56, mapY + mw + 16, '分子与其口袋轮廓清晰，峰位锐利。', { size: 9.5, fill: C.sub, maxW: 178, lh: 13 })
  b.wtext(264, mapY + mw + 16, '图变「糊」但轮廓、螺旋片层乃至口袋仍认得出。', { size: 9.5, fill: C.sub, maxW: 178, lh: 13 })
  b.wtext(472, mapY + mw + 16, '彻底噪声、分子无影无踪，还混入鬼影与负密度（红）。', { size: 9.5, fill: C.sub, maxW: 178, lh: 13 })
  b.legend(56, 792, [['正密度（墨，4 档）', C.ink], ['负密度/鬼影（红）', C.bad]], { size: 10 })
  b.wtext(330, 788, '三图均由同一个「分子」（11 个高斯团块）的二维傅里叶级数真实合成，分辨率截断 |h|,|k| ≤ 7，各以自身最大值归一。', { size: 9.5, fill: C.mute, maxW: 340, lh: 13 })
  // 相位误差标尺（水平条）
  b.text(46, 824, '图质量随相位均方根误差陡降：', { size: 10.5, weight: 700, fill: C.ink })
  const ladder: Array<[string, number, string, string]> = [
    ['20°', 0.96, '接近精修后水平', C.ok], ['40°', 0.66, '主链尚可追踪（可建模线）', C.acc],
    ['60°', 0.34, '断续难辨', C.warn], ['90°', 0.07, '与随机无异', C.bad],
  ]
  let lyy = 838
  for (const [lab, v, txt, c] of ladder) {
    b.text(46, lyy, lab, { size: 10, weight: 700, fill: c })
    b.rect(84, lyy - 9, v * 200, 11, { fill: `${c}30`, stroke: c, sw: 1.4, rx: 3 })
    b.text(84 + v * 200 + 8, lyy, txt, { size: 9.5, fill: C.sub })
    lyy += 17
  }
  b.wtext(440, 826, '敏感度差一个量级以上：给振幅叠 10% 噪声、相位保持正确，图几乎无损；给相位叠同等噪声，图即面目全非。工程目标：把平均相位误差压进 40° 以内，第 8 章建模才能下手。', { size: 9.5, fill: C.sub, maxW: 235, lh: 13 })

  // ============ 四、三大定相路径 ============
  b.panel(710, 482, 660, 400, { title: '四、三大定相路径总览（当代占比）' })
  b.table(730, 528, 620, {
    headers: ['定相路径', '前提条件', '典型对象'],
    colW: [168, 240, 212],
    rowH: 44,
    fontSize: 10.5,
    rows: [
      ['分子置换 MR', '同源或预测模型可用（一致性约 20% 以上更稳）', '有亲戚的蛋白、突变体、复合物'],
      ['同晶置换 MIR/SIR', '重原子浸泡后保持同晶（晶胞变化小于 1%）', '无模型可借的全新折叠'],
      ['反常散射 SAD/MAD', 'SeMet 掺入、天然金属或硫的 Bijvoet 差异', '硒代蛋白、金属酶、含硫蛋白'],
      ['直接法', '原子分辨率（约 1.2 Å 以内）、原子数约数百', '小分子；个别特小高分辨蛋白'],
    ],
  })
  // 占比条
  const py = 764, pw = 620
  b.rect(730, py, pw * 0.85, 26, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.rect(730 + pw * 0.85, py, pw * 0.15, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
  b.ctext(730 + pw * 0.425, py + 17, '分子置换 约 85%', { size: 11, weight: 700, fill: C.accD })
  b.ctext(730 + pw * 0.925, py + 17, '实验定相+直接法', { size: 9, weight: 700, fill: C.rnaD })
  b.ctext(1040, py + 48, '三者常组合：先试分子置换，失败转实验定相；MR 解出后再以 MR-SAD 校正模型偏差', { size: 10, fill: C.mute })
  b.wtext(730, 830, '直接法纯凭强度分布的统计规律推相位（Hauptman 与 Karle，1985 年诺贝尔化学奖）；同晶置换由 Perutz 学派建立（1962 年诺贝尔化学奖）。任何定相方案都必须保留相位概率分布供后续加权——只输出单值的程序早已不合格。', { size: 10, fill: C.sub, maxW: 620, lh: 15 })

  // 底部收束
  b.ctext(700, 946, '相位一栏填好的那一刻，结构解析就从物理问题转入统计与手艺的联合作业——本章余下三节即三条填法', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '结构因子与相位问题：傅里叶对偶与相位主导原则',
  subtitle: 'ρ(x)=(1/V)ΣF(h)exp(−2πih·x) 互为傅里叶变换对；探测器只测 I=|F|^{2}，折射率与 1 仅差 10^{−6} 故无透镜；数值演示：振幅换常数轮廓仍在、相位随机只剩噪声；分子置换约八成五',
  draw,
})
