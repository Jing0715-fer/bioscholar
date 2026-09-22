// sb ch8-s3 结构精修的原理（Task 4-b）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、精修循环 ============
  b.panel(30, 132, 660, 330, { title: '一、精修循环：模型与数据的往复对话' })
  const steps: Array<[number, number, string, string]> = [
    [140, 232, '① 模型参数', '坐标 x,y,z + B 因子 + 占有率', C.pro],
    [330, 232, '② 计算 F_{c}', '结构因子 + bulk 溶剂校正', C.acc],
    [330, 356, '③ 目标函数', '数据项 + 几何项 + 权重', C.dna],
    [140, 356, '④ 最小化更新', '梯度下降或多轮精修策略', C.enz],
  ]
  for (const [cx, cy, txt, sub, c] of steps) {
    b.tag(cx, cy, txt, { fill: `${c}18`, stroke: c, size: 11, weight: 700, tfill: C.ink, pad: 9, minh: 42 })
    b.ctext(cx, cy + 34, sub, { size: 9, fill: C.mute })
  }
  b.arrow(218, 232, 252, 232, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(330, 276, 330, 312, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(252, 356, 218, 356, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.arrow(140, 312, 140, 276, { stroke: C.mute, sw: 1.8, marker: 'ink' })
  b.ctext(235, 300, '循环至收敛', { size: 10, weight: 700, fill: C.sub })
  b.tag(560, 250, '经典：Σ w (F_{o} − F_{c})^{2}', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(560, 310, '现代：最大似然（refmac5、phenix.refine）', { fill: C.accL, stroke: C.acc, size: 9.5, weight: 700, tfill: C.accD, pad: 7 })
  b.wtext(460, 356, '把测量误差与模型不完备性显式纳入，对「部分错、部分对」的中间态更宽容，收敛更稳。', { size: 9.5, fill: C.sub, maxW: 195, lh: 13.5 })
  b.wtext(56, 418, '调整参数使计算衍射与观测之差最小——但权重系数决定「听数据的」还是「听化学的」：程序按分辨率自动调节；权重过大则图跟不上，过小则几何崩坏。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 二、欠定问题与 restraints ============
  b.panel(710, 132, 660, 330, { title: '二、欠定问题：restraints 是「虚拟观测」' })
  const bars: Array<[string, number, string, string]> = [
    ['待精修参数', 0.42, '300 残基约 2,400 原子：坐标 7,200 + 各向同性 B 2,400，近万', C.pro],
    ['独立反射观测', 0.5, '2 Å 数据的独立反射典型数万——与参数同量级', C.acc],
    ['加 restraints 后', 1.0, '数千条化学「虚拟观测」，把体系从欠定拉回超定', C.ok],
  ]
  let byy = 220
  for (const [lab, v, desc, c] of bars) {
    b.text(730, byy + 6, lab, { size: 11, weight: 700, fill: c })
    b.rect(730 + textWq(lab, 11) + 12, byy - 6, v * 380, 24, { fill: `${c}26`, stroke: c, sw: 1.6, rx: 4 })
    b.wtext(730, byy + 30, desc, { size: 9.5, fill: C.sub, maxW: 600, lh: 13 })
    byy += 64
  }
  b.tag(890, 404, 'Engh 与 Huber 1991：键长 σ 约 0.02 Å · 键角 σ 约 2°', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 8 })
  b.wtext(730, 432, '每个键长键角约束都是一条虚拟观测；分辨率越低观测越少，几何先验权重必须越大——低分辨率的模型更多「由化学写成」。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })

  // ============ 三、B 因子、TLS 与 bulk 溶剂 ============
  b.panel(30, 482, 660, 400, { title: '三、B 因子参数化：从原子到刚体' })
  // 衰减曲线
  const ax = 56, ay = 660, aw = 300, ah = 130
  b.ctext(ax + aw / 2, 524, 'exp(−B sin^{2}θ/λ^{2})：B 对高分辨率的衰减', { size: 12, weight: 700, fill: C.ink })
  b.axis(ax, ay, aw, ah, {
    xticks: [[0.02, '0'], [0.5, '0.25（2 Å）'], [1, '0.5（1 Å）']],
    yticks: [[0.05, ''], [0.95, '']],
  })
  const bs: Array<[number, string, Array<[number, number]>]> = [
    [10, C.ok, [[0, 1], [0.25, 0.88], [0.5, 0.54], [0.75, 0.25], [1, 0.08]]],
    [30, C.warn, [[0, 1], [0.25, 0.63], [0.5, 0.15], [0.75, 0.016], [1, 0.002]]],
    [60, C.bad, [[0, 1], [0.25, 0.39], [0.5, 0.024], [0.75, 0.001], [1, 0]]],
  ]
  for (const [Bv, c, pts] of bs) {
    b.curve(ax, ay, aw, ah, pts, { stroke: c, sw: 2.4 })
    b.text(ax + 6, ay - ah * pts[1][1] - 8, `B=${Bv}`, { size: 9.5, weight: 700, fill: c })
  }
  b.wtext(56, 690, 'B = 8π^{2}⟨u^{2}⟩：位移均方的放大镜。B 大到 80 以上的原子，高分辨率反射几乎不贡献信息。', { size: 10, fill: C.sub, maxW: 330, lh: 14.5 })
  // TLS 图标
  const tx = 490, ty = 590
  b.rect(400, 512, 280, 180, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(540, 532, 'TLS 刚体参数化（Schomaker 与 Trueblood 1968）', { size: 10.5, weight: 700, fill: C.ink })
  b.ellipse(tx, ty, 58, 34, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 2 })
  b.arrow(tx - 20, ty - 10, tx + 12, ty - 34, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.text(tx + 16, ty - 38, 'T 平移', { size: 10, weight: 700, fill: C.accD })
  b.path(`M ${tx + 58},${ty + 6} a 30 30 0 0 1 -18 26`, { stroke: C.warn, sw: 2.2, fill: 'none', marker: 'warn' })
  b.text(tx + 46, ty + 42, 'L 摆动', { size: 10, weight: 700, fill: C.warnD })
  b.path(`M ${tx - 40},${ty + 18} q 10 -26 30 -18 q 16 6 10 -18`, { stroke: C.enz, sw: 2, fill: 'none', marker: 'enz' })
  b.text(tx - 76, ty + 30, 'S 螺旋耦合', { size: 10, weight: 700, fill: C.enz })
  b.wtext(410, 662, '每集团仅 20 参数即描述整体振动；中低分辨率的省参数利器。策略：优于 2 Å 用个别 B；2–3 Å TLS 加个别 B；3–3.5 Å group B 加 TLS 加强 NCS。', { size: 10, fill: C.sub, maxW: 265, lh: 14 })
  // bulk 溶剂
  b.tag(360, 842, 'bulk 溶剂校正：Babinet 原则——低角整体衰减，平坦溶剂加掩膜统一校正（Jiang 与 Brünger 1994）', { fill: C.accL, stroke: C.acc, size: 9.5, weight: 700, tfill: C.accD, pad: 8 })

  // ============ 四、策略阶梯与模拟退火 ============
  b.panel(710, 482, 660, 400, { title: '四、策略阶梯与模拟退火' })
  b.table(730, 528, 620, {
    headers: ['数据分辨率', '推荐策略', '典型程序选项'],
    colW: [140, 250, 230],
    rowH: 34,
    fontSize: 9.5,
    rows: [
      ['优于 1.2 Å', '各向异性 B、riding 氢', 'phenix.refine 个体各向异性'],
      ['1.5–2.0 Å', '个别 B、逐个加水、全 restraints', 'refmac5 加权约束精修'],
      ['2.0–2.5 Å', 'TLS 加个别 B', 'phenix TLS 加个体 B 交替'],
      ['2.5–3.5 Å', 'group B 加 TLS、强 NCS', 'refmac5 jelly-body 加 NCS'],
      ['更低', '域级刚体、二级结构强约束', '刚体精修、外置几何约束'],
    ],
  })
  // 模拟退火景观
  const lx = 760, ly = 800
  b.ctext(1000, 756, '模拟退火：跳出局部极小（Brünger、Kuriyan 与 Karplus 1987）', { size: 10.5, weight: 700, fill: C.ink })
  b.path('M 750,790 q 30,-46 62,-18 q 24,22 44,-4 q 26,-32 60,-16 q 40,20 90,-8 q 40,-24 74,10 q 22,20 60,6', { stroke: C.mute, sw: 2, fill: 'none' })
  b.circle(812, 774, 5.5, { fill: C.bad })
  b.ctext(812, 760, '局部极小', { size: 9, weight: 700, fill: C.badD })
  b.circle(1010, 760, 5.5, { fill: C.ok })
  b.ctext(1010, 746, '全局极小', { size: 9, weight: 700, fill: C.okD })
  b.path('M 820,768 q 60,-40 180,-2', { stroke: C.warn, sw: 2, dash: '6 4', fill: 'none', marker: 'warn' })
  b.ctext(905, 738, '高温扰动', { size: 9.5, weight: 700, fill: C.warnD })
  b.wtext(730, 836, '给坐标一个高温再缓慢降温的动力学扰动，使其有机会跃出局部极小——经典场景是 MR 模型偏差大、普通最小化推不动的骨架。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })

  // 底部收束
  b.ctext(700, 946, '精修是在观测与化学之间找平衡——restraints 补足方程，Rfree（第 4 节）守住不作弊的底线', { size: 12, weight: 600, fill: C.mute })
}

/** 简易文本宽（用于条形图标签跟随） */
function textWq(s: string, size: number): number {
  let w = 0
  for (const ch of s) w += /[\u2E80-\u9FFF]/.test(ch) ? size : size * 0.55
  return w + 6
}

export default scene({
  title: '结构精修的原理：目标函数、restraints 与参数化',
  subtitle: '目标函数 Σw(F_{o}−F_{c})^{2} 加几何项，现代程序改用最大似然；300 残基近万参数对同量级反射，restraints 以数千条虚拟观测拉回超定（Engh 与 Huber：键长 σ 约 0.02 Å、键角约 2°）；B=8π^{2}⟨u^{2}⟩；TLS 每集团 20 参数；模拟退火跳出局部极小',
  draw,
})
