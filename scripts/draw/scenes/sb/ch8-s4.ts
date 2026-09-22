// sb ch8-s4 精修的评估与收敛（Task 4-b）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Rwork 与 Rfree 收敛曲线 ============
  b.panel(30, 132, 660, 330, { title: '一、Rwork 与 Rfree：交叉验证制度（Brünger 1992）' })
  const ax = 70, ay = 408, aw = 380, ah = 200
  b.axis(ax, ay, aw, ah, {
    xlabel: '精修轮次', title: '2 Å 数据的典型收敛（含过拟合反例）',
    xticks: [[0.02, '0'], [0.24, '2'], [0.48, '4'], [0.72, '6'], [0.96, '10']],
    yticks: [[0.05, '0.12'], [0.36, '0.24'], [0.68, '0.37'], [0.97, '0.49']],
  })
  // 健康曲线（R 值区间 0.1–0.5 映射为 fy）
  const fy = (R: number) => (R - 0.1) / 0.4
  const rw: Array<[number, number]> = [[0, fy(0.33)], [0.12, fy(0.26)], [0.25, fy(0.235)], [0.38, fy(0.215)], [0.52, fy(0.20)], [0.72, fy(0.195)], [1, fy(0.19)]]
  const rf: Array<[number, number]> = [[0, fy(0.36)], [0.12, fy(0.31)], [0.25, fy(0.285)], [0.38, fy(0.265)], [0.52, fy(0.255)], [0.72, fy(0.245)], [1, fy(0.24)]]
  b.curve(ax, ay, aw, ah, rw, { stroke: C.acc, sw: 3 })
  b.curve(ax, ay, aw, ah, rf, { stroke: C.dna, sw: 3 })
  // 过拟合反例
  b.curve(ax, ay, aw, ah, [[0, fy(0.33)], [0.15, fy(0.22)], [0.3, fy(0.15)], [0.5, fy(0.13)], [0.7, fy(0.12)], [1, fy(0.12)]], { stroke: C.bad, sw: 2, dash: '7 4' })
  b.curve(ax, ay, aw, ah, [[0, fy(0.36)], [0.15, fy(0.33)], [0.3, fy(0.315)], [0.5, fy(0.31)], [0.7, fy(0.305)], [1, fy(0.30)]], { stroke: C.warn, sw: 2, dash: '7 4' })
  b.ctext(ax + aw * 0.78, ay - ah * fy(0.19) - 10, 'R_{work} 0.19', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(ax + aw * 0.78, ay - ah * fy(0.24) + 18, 'R_{free} 0.24', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(ax + aw * 0.86, ay - ah * fy(0.12) + 14, '0.12', { size: 9, weight: 700, fill: C.badD })
  b.ctext(ax + aw * 0.86, ay - ah * fy(0.30) - 10, '0.30', { size: 9, weight: 700, fill: C.warnD })
  b.tag(490, 250, 'gap = R_{free} − R_{work}', { fill: C.panelB, stroke: C.mute, size: 10.5, weight: 700, tfill: C.sub, pad: 8 })
  b.wtext(470, 282, '健康区间 2–5%；大于 7% 即过拟合警告——塞无效水、低分辨率开个别 B、把噪声建成交替构象。', { size: 9.5, fill: C.sub, maxW: 175, lh: 13.5 })
  b.wtext(470, 346, 'gap 小于 1% 反而可疑：自由集泄漏或数据冗余过高。', { size: 9.5, fill: C.sub, maxW: 175, lh: 13.5 })
  b.wtext(56, 440, 'R = Σ|F_{o}−F_{c}|/Σ|F_{o}|。Rfree：随机剥离约 5% 反射组成自由集，全程不可见、不进目标函数，一经划定不得重划；低分辨率可放宽到 10%（须注明）。数量级锚点（2 Å）：Rwork 0.18–0.22、Rfree 0.22–0.26；分辨率越低 R 越高属常态。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 二、Ramachandran 与几何三件套 ============
  b.panel(710, 132, 660, 330, { title: '二、Ramachandran 图与几何三件套' })
  const rx0 = 760, ry0 = 218, rw2 = 300, rh2 = 210
  b.rect(rx0, ry0, rw2, rh2, { fill: C.bg, stroke: C.sub, sw: 1.8 })
  const px = (phi: number) => rx0 + ((phi + 180) / 360) * rw2
  const py = (psi: number) => ry0 + ((180 - psi) / 360) * rh2
  // 优势区（示意轮廓）
  b.ellipse(px(-120), py(130), 48, 28, { fill: C.dnaL, fillOp: 0.7, stroke: C.dna, sw: 1.4 })
  b.ellipse(px(-63), py(-43), 34, 24, { fill: C.dnaL, fillOp: 0.7, stroke: C.dna, sw: 1.4 })
  b.ellipse(px(57), py(40), 21, 13, { fill: C.dnaL, fillOp: 0.7, stroke: C.dna, sw: 1.4 })
  b.ctext(px(-120), py(130) - 34, 'β 区', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(px(-63), py(-43) + 38, 'α_{R} 螺旋', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(px(57), py(40) - 20, 'L_{α}', { size: 10, weight: 700, fill: C.dnaD })
  // 数据点（确定性伪随机）
  let sd = 20240707
  const rr = () => { sd = (sd * 1664525 + 1013904223) % 4294967296; return sd / 4294967296 }
  for (const [cx, cy, ex, ey] of [[-120, 130, 40, 22], [-63, -43, 28, 18], [57, 40, 16, 9]] as Array<[number, number, number, number]>) {
    for (let i = 0; i < 9; i++) {
      const a = rr() * Math.PI * 2, k = Math.sqrt(rr())
      b.circle(px(cx + Math.cos(a) * ex * k), py(cy + Math.sin(a) * ey * k), 2.6, { fill: C.ink, fillOp: 0.75, stroke: 'none' })
    }
  }
  b.circle(px(55), py(-75), 4.2, { fill: C.bad })
  b.text(px(55) + 8, py(-75) + 4, 'outlier：须能说出理由', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(rx0 + rw2 / 2, ry0 + rh2 + 40, '横轴 φ（度）· 纵轴 ψ（度）', { size: 12, weight: 600, fill: C.sub })
  b.text(rx0 - 12, ry0 + 14, '180', { size: 11, fill: C.mute, anchor: 'end' })
  b.text(rx0 - 12, ry0 + rh2 / 2 + 4, '0', { size: 11, fill: C.mute, anchor: 'end' })
  b.text(rx0 - 12, ry0 + rh2, '−180', { size: 11, fill: C.mute, anchor: 'end' })
  b.text(rx0 + rw2 / 2, ry0 - 8, 'Ramachandran 图（每点一个残基）', { size: 11, weight: 600, fill: C.sub, anchor: 'middle' })
  b.ctext(910, 462, 'Ramachandran 1963；MolProbity（Richardson 2010）动态分区：优势区大于 96%、离群接近零', { size: 9.5, fill: C.mute })
  // 三件套
  b.tag(1150, 250, 'rotamer 验证', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.wtext(1080, 280, '侧链构象落在统计库离群区，提示构象错放或密度不足。', { size: 9.5, fill: C.sub, maxW: 260, lh: 13.5 })
  b.tag(1150, 340, 'clashscore', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 8 })
  b.wtext(1080, 370, '每千原子中非键原子对过近的冲突数：小于 5 为合格线，以同分辨率百分位报告（95 百分位以上更佳）。', { size: 9.5, fill: C.sub, maxW: 260, lh: 13.5 })

  // ============ 三、B 因子分布与水数 ============
  b.panel(30, 482, 660, 400, { title: '三、B 因子分布与水分子合理性' })
  const bx = 56, by = 660, bw = 320, bh = 130
  b.ctext(bx + bw / 2, 524, 'B 因子沿序列的折线（示意）', { size: 12, weight: 700, fill: C.ink })
  b.axis(bx, by, bw, bh, {
    xlabel: '残基序号',
    xticks: [[0.02, '1'], [0.5, '150'], [0.98, '300']],
    yticks: [[0.06, '5'], [0.47, '38'], [0.9, '72']],
  })
  const bpts: Array<[number, number]> = [[0, 0.42], [0.05, 0.5], [0.1, 0.34], [0.15, 0.44], [0.2, 0.3], [0.25, 0.56], [0.3, 0.38], [0.36, 0.31], [0.42, 0.58], [0.48, 0.4], [0.54, 0.33], [0.6, 0.35], [0.66, 0.31], [0.72, 0.55], [0.78, 0.37], [0.84, 0.32], [0.9, 0.5], [1, 0.44]]
  b.curve(bx, by, bw, bh, bpts, { stroke: C.dna, sw: 2.2 })
  b.circle(bx + 0.42 * bw, by - 0.58 * bh, 4, { fill: C.bad })
  b.arrow(bx + 0.42 * bw, by - 0.58 * bh - 14, bx + 0.42 * bw, by - 0.58 * bh - 4, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.ctext(bx + 0.42 * bw, by - 0.58 * bh - 26, '孤立尖峰', { size: 9, weight: 700, fill: C.badD })
  b.wtext(56, 690, '表面残基高、埋藏核心低、沿序列连续平滑。孤立尖峰常见原因：序列 register 错误、侧链构象错放或辐射损伤的特异性位点。', { size: 10, fill: C.sub, maxW: 330, lh: 14.5 })
  // 水数卡片
  const cards: Array<[string, string, string, string]> = [
    ['2 Å', '数百个水', '约与残基数同量级', C.ok],
    ['3 Å', '零星几个', '只放活性位点附近', C.warn],
    ['6 Å', '一个不留', '水数超载=给噪声建模', C.bad],
  ]
  let cx2 = 420
  for (const [res, num, sub, c] of cards) {
    b.rect(cx2, 528, 82, 92, { fill: `${c}14`, stroke: c, sw: 1.6, rx: 8 })
    b.ctext(cx2 + 41, 552, res, { size: 13, weight: 700, fill: c })
    b.ctext(cx2 + 41, 578, num, { size: 11, weight: 700, fill: C.ink })
    b.wtext(cx2 + 6, 596, sub, { size: 9, fill: C.mute, maxW: 70, lh: 11.5 })
    cx2 += 96
  }
  b.wtext(420, 656, '删水检验：删去可疑水后 Rfree 若不升反降，删除就是对的——每个多余参数都在侵蚀 Rfree。', { size: 10, fill: C.sub, maxW: 240, lh: 14.5 })
  b.tag(360, 810, 'B 因子各向异性（TLS 张量）应与晶格堆积的物理直觉一致', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 8 })
  b.wtext(56, 842, '活性位点的水参与催化与配体识别，建模优先级最高；表面水次之；溶剂壳之外、密度又弱又孤立的一律不建。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 四、收敛判据与投递前检查 ============
  b.panel(710, 482, 660, 400, { title: '四、收敛判据与投递前最后一道工序' })
  const crit: Array<[string, string, string]> = [
    ['① ΔR 小于约 0.1%', '再修不动了', C.acc],
    ['② 几何 outlier 清零', 'Ramachandran、rotamer、clash 逐项为零', C.dna],
    ['③ 差值图无 ±4σ 峰', '再没有密度大喊「缺人」或「多了人」', C.pro],
  ]
  let cxx = 810
  for (const [t, s, c] of crit) {
    b.tag(cxx, 524, t, { fill: `${c}18`, stroke: c, size: 10, weight: 700, tfill: C.ink, pad: 8 })
    b.wtext(cxx - 78, 552, s, { size: 9, fill: C.mute, maxW: 160, lh: 12 })
    cxx += 190
  }
  b.table(730, 588, 620, {
    headers: ['检查项', '达标线', '工具'],
    colW: [200, 250, 170],
    rowH: 30,
    fontSize: 9.5,
    rows: [
      ['Rwork 与 Rfree', '与分辨率匹配（2 Å 约 0.18–0.22 与 0.22–0.26）', '精修日志'],
      ['Rfree − Rwork', '2–5%，大于 7% 须整改', '精修日志'],
      ['Ramachandran', '优势区大于 96%、outlier 接近零', 'MolProbity'],
      ['clashscore', '小于 5（同分辨率 95 百分位更佳）', 'MolProbity'],
      ['差值图', '无 ±4σ 遗留峰', 'FFT 差值图'],
      ['键长键角 RMSD', '约 0.01 Å 与约 1–2°', '精修日志'],
    ],
  })
  b.wtext(730, 818, '四大陷阱：无效水（删水后 gap 收窄是铁证）；低分辨率幻觉构象（问一句「polder 图在哪里」便现形）；孪晶欠账（须启用孪晶精修协议并重估自由集）；过早的完美（多为 MR 模型偏差回声，用 omit 图抽查活性位点）。共同解药：交叉验证与无偏图，让数据有机会说「不」。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })
  b.ctext(1040, 866, '投递前过 MolProbity 全项检查；PDB 验证报告以同分辨率百分位表述模型质量', { size: 10, weight: 600, fill: C.mute })

  // 底部收束
  b.ctext(700, 946, 'rebuild、refine、validate 的螺旋走到收敛——留下的精修日志就是论文答辩与验证报告的底稿', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '精修的评估与收敛：Rfree、几何三件套与投递检查',
  subtitle: 'Rfree 以约 5% 自由集全程不可见守住交叉验证；2 Å 典型 Rwork 0.18–0.22、Rfree 0.22–0.26，gap 2–5% 健康、大于 7% 过拟合警告；Ramachandran 优势区大于 96%、clashscore 小于 5；收敛判据 ΔR 小于约 0.1%、差值图无 ±4σ 峰',
  draw,
})
