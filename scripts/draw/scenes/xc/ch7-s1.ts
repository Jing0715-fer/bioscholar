// xc ch7-s1 相位问题的本质：一维傅里叶合成演示（Task 4-d）
import { scene, C, B } from '../../lib'

// ---------- 一维傅里叶合成演示的真实计算 ----------
// 两个高斯「原子」位于一维晶胞 x=0.32（f=1.0）与 x=0.68（f=0.7），σ=0.045
// F(h) 为其解析傅里叶系数；重构 ρ(x) = F(0) + 2Σ_{h=1..5} A_h·cos(2πhx + φ_h)
const ATOMS: [number, number][] = [[0.32, 1.0], [0.68, 0.7]]
const SIG = 0.045
const H = 5
const FC: [number, number][] = []
for (let h = 0; h <= H; h++) {
  let re = 0, im = 0
  for (const [xj, fj] of ATOMS) {
    const amp = fj * Math.exp(-2 * Math.PI * Math.PI * h * h * SIG * SIG)
    const ph = 2 * Math.PI * h * xj
    re += amp * Math.cos(ph); im += amp * Math.sin(ph)
  }
  FC.push([re, im])
}
const mag = (h: number) => Math.hypot(FC[h][0], FC[h][1])
const arg = (h: number) => Math.atan2(FC[h][1], FC[h][0])
const CAMP = mag(1) // 常数振幅取 h=1 的量级
let seed = 7
const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648 }
const gauss = () => { let u = 0, v = 0; while (u === 0) u = rnd(); while (v === 0) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) }
function recon(mode: 'ok' | 'const' | 'random' | 'noise', noiseDeg = 0): number[] {
  const out: number[] = []
  for (let i = 0; i <= 200; i++) {
    const x = i / 200
    let s = FC[0][0]
    for (let h = 1; h <= H; h++) {
      const A = mode === 'const' ? CAMP : mag(h)
      let ph = arg(h)
      if (mode === 'random') ph = rnd() * 2 * Math.PI
      else if (mode === 'noise') ph += gauss() * noiseDeg * Math.PI / 180
      s += 2 * A * Math.cos(2 * Math.PI * h * x + ph)
    }
    out.push(s)
  }
  return out
}

const draw = (b: B) => {
  // ============ 一、一维傅里叶合成 ============
  b.panel(30, 132, 660, 430, { title: '一、一维傅里叶合成：振幅与相位谁说了算' })
  const px = 96, pw = 530 // 每行图区
  const row = (y0: number, data: number[], color: string, head: string, foot: string) => {
    b.text(60, y0 - 12, head, { size: 11, weight: 700, fill: color })
    const base = y0 + 62 // 基线（0 密度）
    // 零线与图框
    b.line(px, base, px + pw, base, { stroke: C.faint, sw: 1.1 })
    b.line(px, y0 - 4, px, base + 6, { stroke: C.mute, sw: 1.4 })
    const lo = -5.2, hi = 8.8
    const pts: [number, number][] = data.map((v, i) => [px + (i / 200) * pw, base - ((v - lo) / (hi - lo)) * 58])
    b.polyline(pts, { stroke: color, sw: 2.2 })
    b.text(px + pw + 6, y0 + 8, foot, { size: 9.5, fill: C.mute })
  }
  row(196, recon('ok'), C.dna, '① 正确振幅＋正确相位', '原子重现')
  row(286, recon('const'), C.warn, '② 振幅一律换常数·相位保留', '峰位仍可辨')
  row(376, recon('random'), C.bad, '③ 完美振幅·相位随机化', '纯噪声')
  row(466, recon('noise', 45), C.enz, '④ 平均相位误差约 45°', '淹没于涨落')
  b.ctext(px + pw / 2, 546, '位置 x（一维晶胞）——5 个衍射级 h = 0…5 的余弦级数求和', { size: 10, fill: C.mute })
  b.wtext(60, 168, '一维模拟：两个「原子」（x = 0.32 与 0.68）。左列结论即相位主导原则——振幅错了图还在，相位错了图没了。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 二、矢量算术与误差刻度 ============
  b.panel(710, 132, 660, 430, { title: '二、不对称的账目：为何相位更要命' })
  // 复平面矢量图
  const ox = 880, oy = 300
  b.line(ox - 130, oy, ox + 150, oy, { stroke: C.faint, sw: 1.2 })
  b.line(ox, oy + 60, ox, oy - 130, { stroke: C.faint, sw: 1.2 })
  b.ctext(ox, 132 + 62, '复平面：一个反射的 F(h)', { size: 10.5, weight: 700, fill: C.sub })
  const L = 118, th = -0.42
  // 正确 F
  b.arrow(ox, oy, ox + L * Math.cos(th), oy + L * Math.sin(th), { stroke: C.dna, sw: 3, marker: 'dna' })
  // 振幅 -30%
  const th2 = th + 0.55
  b.arrow(ox, oy, ox + L * 0.7 * Math.cos(th2), oy + L * 0.7 * Math.sin(th2), { stroke: C.warn, sw: 3, marker: 'warn' })
  // 相位差 45°
  const th3 = th + Math.PI / 4
  b.arrow(ox, oy, ox + L * Math.cos(th3), oy + L * Math.sin(th3), { stroke: C.bad, sw: 3, marker: 'bad' })
  b.path(`M ${ox + 74 * Math.cos(th)},${oy + 74 * Math.sin(th)} A 74,74 0 0 0 ${ox + 74 * Math.cos(th3)},${oy + 74 * Math.sin(th3)}`, { fill: 'none', stroke: C.bad, sw: 1.6 })
  b.ctext(ox + 92, oy - 66, '45°', { size: 11, weight: 700, fill: C.bad })
  b.legend(740, 372, [['正确 F', C.dna], ['振幅扰动 30%', C.warn], ['相位误差 45°', C.bad]], { size: 10.5 })
  b.wtext(730, 404, '振幅扰动 30% 只把复数矢量缩短三成、方向不变；45° 的相位误差把矢量转到近正交的方向。在数百个反射的矢量求和里，前者是可容忍的缩放噪声，后者是破坏性干涉——相位误差伤在方向上。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // FOM 刻度条
  b.text(730, 486, 'figure of merit（FOM = 〈cosΔφ〉，相位误差余弦的期望）：', { size: 11, weight: 700, fill: C.ink })
  const f0 = 760, fw = 540
  b.rect(f0, 502, fw * 0.7, 26, { fill: C.badL, stroke: C.bad, sw: 1.3 })
  b.rect(f0 + fw * 0.7, 502, fw * 0.15, 26, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.rect(f0 + fw * 0.85, 502, fw * 0.15, 26, { fill: C.okL, stroke: C.ok, sw: 1.3 })
  ;[0, 0.5, 0.7, 0.85, 1].forEach(v => b.ctext(f0 + v * fw, 544, String(v), { size: 10.5, fill: C.mute }))
  b.ctext(f0 + fw * 0.35, 517, '0.7＝45° 须密度修饰抢救', { size: 10, weight: 700, fill: C.badD })
  b.ctext(f0 + fw * 0.775, 517, '0.85 舒适', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(f0 + fw * 0.925, 517, '建模', { size: 10, weight: 700, fill: C.okD })
  b.wtext(730, 168, '相位误差的实用刻度：平均约 45° 图已难解读；降到 30° 以内主链方可连续追踪；10° 以内侧链细节清楚。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 三、探测器的原理性盲区 ============
  b.panel(30, 572, 660, 390, { title: '三、探测器为何天然丢相位' })
  // 波列 + 探测器
  const wy = 660
  let d = `M 70,${wy}`
  for (let i = 0; i <= 360; i += 4) d += ` L ${70 + i * 0.72},${wy - 26 * Math.sin(i * Math.PI / 24)}`
  b.path(d, { fill: 'none', stroke: C.acc, sw: 2.4 })
  b.rect(360, 616, 14, 88, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(367, 726, '探测器', { size: 10, fill: C.mute })
  b.arrow(390, 660, 470, 660, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.tag(530, 648, '逐像素光子计数', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(530, 684, 'I ∝ |F|^{2}', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 8 })
  b.wtext(60, 760, '波长 1 Å 的 X 射线频率约 3×10^{18} Hz：一次 0.1 秒的曝光里波场完成 3×10^{17} 个周期的振荡。光子计数正比于局域强度，而强度是波幅平方的时间平均——所有与相位有关的快速振荡项在 3×10^{17} 个周期的平均里彼此抵消，干净得像从未存在。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(60, 852, '补相位的物理出路只有与相干参考波干涉（全息思路）；X 射线折射率近乎 1、无透镜可用，「聚焦成像」对硬 X 射线封死——相位复原注定是计算与推理的事业，任何后处理都无法越过这条记录原理上的边界。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 四、三条复原路径 ============
  b.panel(710, 572, 660, 390, { title: '四、赎回相位的三条路径' })
  b.table(730, 626, 620, {
    headers: ['路径', '依赖的先验', '适用对象', '代表工具'],
    colW: [104, 178, 176, 162],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['分子置换', '同源结构或预测模型', '有可搜索模型的蛋白', 'Phaser、Molrep'],
      ['实验相位', '重原子亚结构信号', '新折叠、低同源蛋白', 'SAD／MAD、MIR'],
      ['直接法', '等重原子统计约束', '小分子（数百原子内）', 'SHELXD／SHELXT'],
    ],
  })
  b.wtext(730, 792, '直接法由豪普特曼与卡尔勒在 1950 年代建立、1985 年获诺贝尔化学奖；蛋白约 2500–3000 个非氢原子的轻重搭配让统计矩信息稀释，直接法失势——但重原子亚结构恰回到其势力范围，SHELXD 定位重原子是它的续命岗（第 8 章）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 872, '分子置换以数量取胜：PDB 二十余万条实验结构（2023 年破二十万）加 AlphaFold 数据库 2022 年公开约两亿条预测模型——「已知相似结构」从稀缺变为过剩；一次典型 MR 从 MTZ 到候选解常在半小时内，效率是第一路径地位的另一半。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '相位问题的本质：强度可测、相位蒸发',
  subtitle: '实验只交付 I∝|F|^{2}；一维合成示振幅换常数图仍可辨、相位随机化即噪声；平均相位误差 45° 难解读、30° 主链连续、10° 侧链清楚；FOM 0.7 须抢救、0.85 舒适建模',
  draw,
})
