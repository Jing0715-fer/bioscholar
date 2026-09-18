// bp ch1-s1 生物物理学的研究对象、尺度与分支体系（39-e 批1）
import { scene, C, B } from '../../lib'

// 对数空间轴：0.1 nm → 1 m（10 个数量级）
const X0 = 90, X1 = 1310
const DEC = (X1 - X0) / 10
const sx = (nm: number) => X0 + Math.log10(nm / 0.1) * DEC

const draw = (b: B) => {
  // ============ 一、空间尺度谱 ============
  b.panel(30, 132, 1340, 300, { title: '一、空间尺度谱：从原子（0.1 nm）到组织器官（米级）——跨 10 个数量级' })
  const AY = 352 // 轴线 y

  // -- 轴 --
  b.line(X0 - 6, AY, X1 + 14, AY, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(1320, AY - 8, '', { size: 1 })
  const decades = ['0.1 nm', '1 nm', '10 nm', '100 nm', '1 μm', '10 μm', '100 μm', '1 mm', '1 cm', '0.1 m', '1 m']
  decades.forEach((d, i) => {
    const x = X0 + i * DEC
    b.line(x, AY, x, AY + 6, { stroke: C.sub, sw: 1.8 })
    b.ctext(x, AY + 22, d, { size: 11, fill: C.mute })
  })

  // -- 层级色带 --
  const bands: Array<[number, number, string, string, string]> = [
    [90, 212, '原子与化学键', C.badL, C.bad],
    [212, 334, '生物大分子', C.dnaL, C.dna],
    [334, 456, '大分子复合物', C.proL, C.pro],
    [456, 700, '细胞器与细胞（0.1–10 μm）', C.accL, C.acc],
    [944, 1310, '组织与器官（mm–m）', C.rnaL, C.rna],
  ]
  bands.forEach(([x1, x2, lb, f, st]) => {
    b.rect(x1 + 2, 390, x2 - x1 - 4, 28, { fill: f, stroke: st, sw: 1.2, rx: 6 })
    b.ctext((x1 + x2) / 2, 408, lb, { size: 11, weight: 700, fill: st })
  })

  // -- Tier A 图标（cy=205，标签 y=233/248）--
  // 1. 原子·化学键
  b.circle(90, 205, 7, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.circle(78, 196, 3, { fill: C.bad })
  b.circle(103, 214, 3, { fill: C.bad })
  b.ctext(90, 233, '原子·化学键', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(90, 248, '0.1 nm（1 Å）', { size: 9.5, fill: C.mute })
  b.line(90, 254, 90, AY - 3, { stroke: C.faint, sw: 1.2 })
  // 2. DNA 双螺旋（直径 2 nm）
  b.dna(228, 205, 44, { amp: 6, period: 20, sw: 1.6, rung: true, rungC: C.dnaD })
  b.ctext(250, 233, 'DNA 双螺旋', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(250, 248, '直径 2 nm', { size: 9.5, fill: C.mute })
  b.line(250, 254, 250, AY - 3, { stroke: C.faint, sw: 1.2 })
  // 3. 核糖体（约 25 nm）
  b.ellipse(390, 213, 21, 12, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ellipse(390, 194, 15, 9, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(390, 233, '核糖体', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(390, 248, '约 25 nm', { size: 9.5, fill: C.mute })
  b.line(390, 254, 390, AY - 3, { stroke: C.faint, sw: 1.2 })
  // 4. 红细胞（直径约 8 μm）
  b.cell(690, 205, 24, 14, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(690, 233, '红细胞', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(690, 248, '直径约 8 μm', { size: 9.5, fill: C.mute })
  b.line(690, 254, 690, AY - 3, { stroke: C.faint, sw: 1.2 })
  // 5. 肌肉·神经束（mm–m）
  for (let i = 0; i < 4; i++) {
    b.line(1096 + i * 14, 190, 1112 + i * 14, 222, { stroke: C.rna, sw: 3.2 })
  }
  b.ellipse(1124, 206, 14, 24, { fill: 'none', stroke: C.rna, sw: 1.8 })
  b.ctext(1124, 233, '肌肉·神经束', { size: 10.5, weight: 700, fill: C.rnaD })
  b.ctext(1124, 248, 'mm–m', { size: 9.5, fill: C.mute })
  b.line(1124, 254, 1124, AY - 3, { stroke: C.faint, sw: 1.2 })

  // -- Tier B 图标（cy=285，标签 y=313/328）--
  b.ellipse(308, 285, 18, 13, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(308, 313, '蛋白质结构域', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(308, 328, '1–10 nm', { size: 9.5, fill: C.mute })
  b.line(308, 332, 308, AY - 3, { stroke: C.faint, sw: 1.2 })
  // 病毒衣壳
  b.circle(462, 285, 13, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2
    b.line(462 + 13 * Math.cos(a), 285 + 13 * Math.sin(a), 462 + 19 * Math.cos(a), 285 + 19 * Math.sin(a), { stroke: C.enz, sw: 1.6 })
  }
  b.ctext(462, 313, '病毒衣壳', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(462, 328, '10–100 nm', { size: 9.5, fill: C.mute })
  b.line(462, 332, 462, AY - 3, { stroke: C.faint, sw: 1.2 })
  // 线粒体
  b.mito(575, 285, 46, 26, {})
  b.ctext(575, 313, '线粒体', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(575, 328, '0.1–10 μm', { size: 9.5, fill: C.mute })
  b.line(575, 332, 575, AY - 3, { stroke: C.faint, sw: 1.2 })

  // ============ 二、时间尺度谱 ============
  b.panel(30, 452, 1340, 196, { title: '二、时间尺度谱：飞秒键振动 → 毫秒酶催化 → 小时级细胞分裂（跨十余个数量级）' })
  const TY = 560
  b.line(X0 - 6, TY, X1 + 14, TY, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  const tdec = ['10⁻¹⁵ s', '10⁻¹² s', '10⁻⁹ s', '10⁻⁶ s', '10⁻³ s', '1 s', '10³ s']
  tdec.forEach((d, i) => {
    const x = X0 + (i * (X1 - X0)) / 6
    b.line(x, TY, x, TY + 6, { stroke: C.sub, sw: 1.8 })
    b.ctext(x, TY + 22, d, { size: 11, fill: C.mute })
  })
  // 事件（markers）
  const ev: Array<[number, string, string, string]> = [
    [90, '化学键振动', '飞秒级（10⁻¹⁵ s）', C.bad],
    [790, '蛋白质折叠', '微秒—毫秒（10⁻⁶–10⁻³ s）', C.pro],
    [903, '酶催化', '毫秒级（10⁻³ s）', C.enz],
    [1242, '细胞分裂与发育', '分钟—小时级', C.acc],
  ]
  ev.forEach(([x, name, sub, col]) => {
    b.circle(x, TY, 5.5, { fill: col })
    b.line(x, TY - 8, x, TY - 26, { stroke: col, sw: 1.6 })
    b.ctext(x, TY - 56, name, { size: 11.5, weight: 700, fill: col })
    b.ctext(x, TY - 40, sub, { size: 9.5, fill: C.mute })
  })
  // 折叠范围横线（μs–ms）
  b.line(700, 622, 903, 622, { stroke: C.pro, sw: 1.6, dash: '4 3' })
  b.ctext(800, 637, '蛋白折叠时间窗', { size: 9, fill: C.mute })
  b.wtext(80, 606, '纳米尺度的分子事件如何逐级放大为微米尺度的细胞行为——跨尺度是生物物理研究的基本特征。', { size: 10.5, fill: C.sub, maxW: 560, lh: 14 })

  // ============ 三、分支体系与核心问题 ============
  b.panel(30, 666, 1340, 304, { title: '三、核心问题与五大分支体系' })
  // -- 左：核心三问 --
  b.text(50, 712, '生物物理学的三个核心问题', { size: 12.5, weight: 700, fill: C.ink })
  const qs: Array<[string, string, string]> = [
    ['相互作用', '生命系统由什么物理相互作用维系？', C.dna],
    ['结构形态', '结构为何呈现特定的物理形态？', C.pro],
    ['能量/信息', '能量与信息如何流动与转换？', C.enz],
  ]
  qs.forEach(([t, q, col], i) => {
    const y = 726 + i * 58
    b.rect(50, y, 400, 48, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
    b.tag(102, y + 24, t, { fill: C.bg, stroke: col, size: 11.5, weight: 700, tfill: col, pad: 7 })
    b.text(168, y + 29, q, { size: 11, fill: C.sub })
  })
  // -- 右：五大分支 --
  b.text(500, 712, '五大分支', { size: 12.5, weight: 700, fill: C.ink })
  const br: Array<[string, string, string]> = [
    ['分子生物物理', '蛋白质、核酸等大分子的结构、折叠与相互作用', C.dna],
    ['膜与细胞生物物理', '生物膜的相行为、弹性与细胞力学性质', C.acc],
    ['神经与电生理生物物理', '生物电现象与离子通道物理', C.pro],
    ['理论生物物理', '统计物理、非线性动力学与信息论为生命过程建模', C.rna],
    ['生物物理技术', '单分子操控、成像、光谱与计算方法学', C.enz],
  ]
  br.forEach(([t, d, col], i) => {
    const y = 724 + i * 40
    b.rect(500, y, 560, 34, { fill: C.panelB, stroke: C.line, sw: 1, rx: 7 })
    b.rect(508, y + 6, 5, 22, { fill: col, rx: 2 })
    b.text(522, y + 22, t, { size: 11.5, weight: 700, fill: col })
    b.text(700, y + 22, d, { size: 10.5, fill: C.sub })
  })
  // -- 右侧：里程碑 --
  b.text(1090, 712, '里程碑（物理学×生物学）', { size: 12.5, weight: 700, fill: C.ink })
  const ms: Array<[string, string]> = [
    ['DNA 双螺旋', 'X 射线衍射解析'],
    ['肌红蛋白/血红蛋白', '晶体结构解析'],
    ['肌肉收缩', '滑动丝学说'],
    ['动作电位', '离子学说'],
  ]
  ms.forEach(([t, d], i) => {
    const y = 726 + i * 44
    b.circle(1100, y + 12, 4, { fill: C.warn })
    b.text(1114, y + 16, t, { size: 11, weight: 700, fill: C.ink })
    b.text(1114, y + 32, d, { size: 10, fill: C.mute })
  })
  // -- 底部方法论 --
  b.wtext(50, 944, '方法论内核——简化与定量：把复杂系统还原为可测量的物理量（力、电流、荧光强度），用最少参数建立可检验模型，再回到活体环境检验；单分子操控与成像技术是当代生物物理方法学的两大支柱。', { size: 10.5, fill: C.sub, maxW: 1240, lh: 15 })
}

export default scene({
  title: '生物物理学的研究对象：跨 10 个数量级的尺度层级',
  subtitle: '空间 0.1 nm 原子 → 2 nm DNA → 25 nm 核糖体 → 8 μm 红细胞 → 米级组织；时间从飞秒键振动到小时级细胞分裂；五大分支与「相互作用—结构形态—能量信息」三问',
  draw,
})
