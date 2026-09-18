// bp ch1-s3 生物大分子链的统计性质（39-e 批1）
import { scene, C, B } from '../../lib'

// 确定性伪随机（保证每次生成同一张图）
const walk = (cx: number, cy: number, n: number, step: number, maxR: number, seed: number): Array<[number, number]> => {
  let sd = seed
  const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647 }
  let x = 0, y = 0
  const pts: Array<[number, number]> = [[cx, cy]]
  for (let i = 0; i < n; i++) {
    let a = rnd() * Math.PI * 2
    if (Math.hypot(x, y) > maxR) a = Math.atan2(-y, -x) + (rnd() - 0.5) * 1.5
    x += step * Math.cos(a); y += step * Math.sin(a)
    pts.push([cx + x, cy + y])
  }
  return pts
}

const draw = (b: B) => {
  // ============ 一、自由连接链 = 无规行走 ============
  b.panel(30, 132, 660, 420, { title: '一、自由连接链：三维无规行走与末端距' })
  b.text(60, 184, 'N 个长为 b 的刚性链段（Kuhn 链段），相邻取向随机', { size: 10.5, weight: 700, fill: C.ink })
  b.text(60, 201, '——末端距矢量 R 为各链段矢量之和', { size: 10, fill: C.mute })
  const w1 = walk(220, 330, 46, 21, 80, 7)
  b.polyline(w1, { stroke: C.dna, sw: 1.8 })
  const st = w1[0], en = w1[w1.length - 1]
  b.circle(st[0], st[1], 5, { fill: C.ink })
  b.circle(en[0], en[1], 5, { fill: C.pro })
  b.arrow(st[0], st[1], en[0], en[1], { stroke: C.pro, sw: 2.4, dash: '7 5', marker: 'pro' })
  const mx = (st[0] + en[0]) / 2, my = (st[1] + en[1]) / 2
  const dx = en[0] - st[0], dy = en[1] - st[1]
  const L0 = Math.hypot(dx, dy) || 1
  b.ctext(mx - (dy / L0) * 24, my + (dx / L0) * 24, 'R', { size: 13, weight: 700, fill: C.pro })
  b.text(st[0] - 12, st[1] + 26, '起点', { size: 9.5, fill: C.mute })
  b.text(en[0] + 8, en[1] - 10, '终点', { size: 9.5, fill: C.mute })
  // 链段示意
  b.line(90, 488, 152, 488, { stroke: C.dna, sw: 4.5 })
  b.text(168, 492, '链段（Kuhn 链段）长 b', { size: 10.5, fill: C.sub })
  b.text(60, 524, '⟨R⟩ = 0，但均方末端距 ⟨R²⟩ = Nb² ≠ 0', { size: 11, weight: 700, fill: C.dnaD })
  // 右列：两种极端
  b.text(410, 225, '同一根链的两种极端', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(525, 255, '完全伸展：L = Nb', { size: 10.5, weight: 700, fill: C.dnaD })
  b.line(415, 272, 635, 272, { stroke: C.dna, sw: 3.5 })
  b.line(415, 264, 415, 280, { stroke: C.dna, sw: 2 })
  b.line(635, 264, 635, 280, { stroke: C.dna, sw: 2 })
  b.ctext(525, 296, '（轮廓长度）', { size: 9.5, fill: C.mute })
  const w2 = walk(525, 375, 40, 11, 48, 23)
  b.polyline(w2, { stroke: C.pro, sw: 1.6 })
  b.ctext(525, 455, '无规行走线团', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(525, 473, 'R ~ b·N^(1/2) ≪ L = Nb', { size: 10, fill: C.sub })
  b.tag(525, 505, '⟨R²⟩ = Nb²', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.ctext(525, 538, '高斯链：末端距服从高斯分布（右图）', { size: 9.5, fill: C.mute })

  // ============ 二、末端距分布与尺寸涨落 ============
  b.panel(710, 132, 660, 420, { title: '二、末端距分布：高斯型曲线与 ~1/√N 涨落' })
  b.axis(750, 430, 560, 240, {
    xlabel: '末端距 R（单位 b√N）', ylabel: '概率密度 P(R)', title: '高斯链末端距分布 P(R) ∝ R²·e^(−3R²/2Nb²)',
    xticks: [[0, '0'], [0.4, 'b√N'], [0.8, '2b√N']],
    yticks: [[0, '0'], [1, '峰']],
  })
  const gauss: Array<[number, number]> = [
    [0, 0], [0.08, 0.154], [0.16, 0.51], [0.24, 0.85], [0.33, 1], [0.4, 0.9], [0.48, 0.67],
    [0.56, 0.42], [0.64, 0.23], [0.72, 0.105], [0.8, 0.04], [0.88, 0.014], [1, 0.004],
  ]
  b.curve(750, 430, 560, 240, gauss, { stroke: C.pro, sw: 3, smooth: true })
  b.line(974, 190, 974, 430, { stroke: C.mute, sw: 1.6, dash: '6 4' })
  b.text(982, 201, '⟨R²⟩^1/2 = b√N', { size: 10.5, weight: 700, fill: C.sub })
  b.line(806, 300, 1060, 300, { stroke: C.warn, sw: 1.6, marker: 'warn', markerStart: 'warn' })
  b.ctext(935, 288, '分布宽度与均值同量级', { size: 9.5, weight: 700, fill: C.warn })
  b.ctext(935, 316, '相对涨落 ~ 1/√N', { size: 9.5, fill: C.mute })
  b.wtext(730, 500, '单条高斯链的尺寸并非定值：N ~ 10³ 的链涨落仍达百分之几——单分子实验中 DNA 长度不断「呼吸」。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
  b.wtext(730, 532, '凝胶电泳与排阻色谱能够按链长分离分子，其物理基础正是链尺寸的统计规律。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 三、持续长度与回转半径 ============
  b.panel(30, 572, 1340, 390, { title: '三、持续长度 p、Kuhn 长度 b 与回转半径 Rg' })
  b.line(448, 610, 448, 940, { stroke: C.line, sw: 1.2 })
  b.line(918, 610, 918, 940, { stroke: C.line, sw: 1.2 })
  // -- A：持续长度 --
  b.text(60, 628, '持续长度 p：取向关联尺度', { size: 12, weight: 700, fill: C.ink })
  const chainA: Array<[number, number]> = [[80, 730], [160, 714], [240, 704], [320, 690], [400, 680]]
  b.spline(chainA, { stroke: C.acc, sw: 2.8 })
  b.arrow(85, 728, 117, 710, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(243, 704, 275, 697, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(362, 685, 394, 678, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.text(70, 675, 't(s)', { size: 10, weight: 700, fill: C.enz })
  b.text(382, 662, 't(s+Δs)', { size: 10, weight: 700, fill: C.enz })
  b.braceH(85, 748, 120, { label: '弧长 ≈ p', size: 10 })
  b.text(60, 792, '取向关联按弧长指数衰减：', { size: 10.5, weight: 700, fill: C.sub })
  b.text(60, 815, '⟨t(s)·t(s+Δs)⟩ ≈ e^(−Δs/p)', { size: 12, weight: 700, fill: C.accD })
  b.text(60, 842, '链段（Kuhn）长度 b ≈ 2p', { size: 11, weight: 700, fill: C.dnaD })
  b.wtext(60, 872, 'p 度量化学骨架决定的弯曲刚性：弧长约超过 p，链的取向即失去关联。', { size: 10, fill: C.mute, maxW: 360, lh: 14 })
  // -- B：刚柔对比 --
  b.text(470, 628, '半柔性链与柔性链', { size: 12, weight: 700, fill: C.ink })
  b.spline([[480, 695], [600, 655], [760, 690], [880, 655]], { stroke: C.dna, sw: 3 })
  b.ctext(680, 725, '双链 DNA：p ≈ 50 nm（约 150 bp），b ≈ 100 nm', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(680, 743, '（半柔性链）', { size: 9.5, fill: C.mute })
  const w3 = walk(680, 810, 34, 13, 52, 91)
  b.polyline(w3, { stroke: C.pro, sw: 1.6 })
  b.ctext(680, 890, '变性蛋白链 / 单链 RNA：p ≈ 1 nm', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(680, 908, '（柔性链）', { size: 9.5, fill: C.mute })
  b.ctext(680, 935, '同为链状大分子，弯曲刚度相差约 50 倍', { size: 10, fill: C.mute })
  // -- C：回转半径 --
  b.text(940, 628, '回转半径 Rg', { size: 12, weight: 700, fill: C.ink })
  b.text(940, 660, 'Rg = b·√(N/6)（理想高斯链）', { size: 12.5, weight: 700, fill: C.dnaD })
  const w4 = walk(1130, 775, 40, 12, 52, 55)
  b.polyline(w4, { stroke: C.dna, sw: 1.5 })
  const gpts = w4.filter((_, i) => i % 5 === 0)
  for (const [gx, gy] of gpts) b.line(1130, 775, gx, gy, { stroke: C.faint, sw: 1, dash: '3 3' })
  b.circle(1130, 775, 6, { fill: C.warn, stroke: '#78350f', sw: 1.2 })
  b.ctext(1130, 800, '质心', { size: 9, fill: '#78350f' })
  b.arrow(1130, 775, 1188, 748, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ctext(1178, 760, 'Rg', { size: 11, weight: 700, fill: C.warn })
  b.wtext(940, 872, 'Rg：各单体到质心距离的方均根，散射实验的标准尺寸量度。', { size: 10, fill: C.sub, maxW: 380, lh: 14 })
  b.wtext(940, 902, '静态光散射与小角 X 射线散射（SAXS）测得的 Rg 若偏离 b√(N/6)，即指示溶剂条件的影响 → Flory 指数（下节）。', { size: 10, fill: C.mute, maxW: 380, lh: 14 })
}

export default scene({
  title: '大分子链的统计性质：无规行走、持续长度与回转半径',
  subtitle: '自由连接链 ⟨R²⟩=Nb²（R~b·N^1/2）；持续长度 p 与 Kuhn 长度 b≈2p（DNA p≈50 nm ≈150 bp）；Rg=b√(N/6)；相对涨落 ~1/√N',
  draw,
})
