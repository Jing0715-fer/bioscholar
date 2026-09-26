// xc ch4-s2 X 射线与物质的相互作用（6-xc）
import { scene, C, B } from '../../lib'

/** 沿直线的波浪光子路径（无 Unicode 箭头，marker 由 b.path 提供） */
function wavy(b: B, x1: number, y1: number, x2: number, y2: number, stroke: string, amp = 6) {
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy)
  const n = Math.max(3, Math.round(len / 24))
  const px = dx / n, py = dy / n
  const nx = (-dy / len) * amp, ny = (dx / len) * amp
  let d = `M ${x1},${y1}`
  for (let i = 0; i < n; i++) {
    const cx = x1 + px * (i + 0.5) + nx * (i % 2 === 0 ? 1 : -1)
    const cy = y1 + py * (i + 0.5) + ny * (i % 2 === 0 ? 1 : -1)
    d += ` q ${(cx - (x1 + px * i)).toFixed(1)},${(cy - (y1 + py * i)).toFixed(1)} ${px.toFixed(1)},${py.toFixed(1)}`
  }
  b.path(d, { fill: 'none', stroke, sw: 2.2 })
}

const draw = (b: B) => {
  // ============ 一、三条相互作用通道 ============
  b.panel(30, 132, 660, 412, { title: '一、X 射线进入晶体后的三条通道' })
  // 汤姆逊散射
  b.ctext(155, 180, '汤姆逊散射（相干）', { size: 11, weight: 700, fill: C.accD })
  wavy(b, 72, 206, 138, 206, C.warn)
  b.arrow(138, 206, 148, 206, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ctext(105, 194, '入射光子', { size: 8.5, fill: C.warnD })
  b.circle(160, 240, 10, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  b.ctext(160, 244, 'e^{-}', { size: 9, weight: 700, fill: C.accD })
  b.arrow(152, 212, 158, 228, { stroke: C.warn, sw: 1.4, dash: '4 3', marker: 'warn' })
  for (const [r, op] of [[16, 0.95], [24, 0.65], [32, 0.4]] as [number, number][]) {
    const a = 60 * (Math.PI / 180)
    b.path(`M ${160 - r * Math.cos(a)},${240 - r * Math.sin(a)} A ${r},${r} 0 0 1 ${160 + r * Math.cos(a)},${240 - r * Math.sin(a)}`, { fill: 'none', stroke: C.acc, sw: 1.8, opacity: op })
  }
  b.ctext(155, 296, '弹性：同频、相位关系确定', { size: 9, fill: C.sub })
  b.ctext(155, 310, '大量电子的散射可互相干涉', { size: 9, fill: C.sub })
  // 光电吸收
  b.ctext(355, 180, '光电吸收', { size: 11, weight: 700, fill: C.bad })
  wavy(b, 272, 206, 322, 222, C.warn)
  b.arrow(322, 222, 330, 226, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ctext(282, 194, '入射光子（整个交给原子）', { size: 8.5, fill: C.warnD })
  b.circle(355, 240, 26, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.circle(355, 240, 11, { fill: 'none', stroke: C.pro, sw: 1.2, dash: '3 3' })
  b.circle(355, 240, 2.5, { fill: C.proD })
  b.ctext(355, 284, 'K 层电子被击出、外层回填', { size: 8.5, fill: C.mute })
  b.arrow(378, 224, 430, 198, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(432, 194, '光电子', { size: 8.5, weight: 700, fill: C.bad })
  wavy(b, 380, 254, 430, 278, C.enz, 5)
  b.arrow(430, 278, 438, 282, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(442, 290, '特征荧光', { size: 8.5, weight: 700, fill: C.enzD })
  b.ctext(355, 308, '次级电离级联＝辐射损伤起点', { size: 9, fill: C.sub })
  // 康普顿散射
  b.ctext(565, 180, '康普顿散射（非相干）', { size: 11, weight: 700, fill: C.rnaD })
  wavy(b, 480, 206, 540, 224, C.warn)
  b.arrow(540, 224, 548, 228, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ctext(496, 194, '入射光子', { size: 8.5, fill: C.warnD })
  b.circle(560, 240, 10, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  b.ctext(560, 244, 'e^{-}', { size: 9, weight: 700, fill: C.accD })
  wavy(b, 580, 226, 640, 200, C.rna, 8)
  b.arrow(640, 200, 648, 197, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(620, 186, '散射光子 λ′>λ', { size: 8.5, weight: 700, fill: C.rnaD })
  b.arrow(580, 254, 640, 282, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.etext(660, 292, '反冲电子', { size: 8.5, weight: 700, fill: C.proD })
  b.ctext(565, 308, '非弹性碰撞、相位被打乱', { size: 9, fill: C.sub })
  b.table(60, 330, 600, {
    headers: ['相互作用', '光子去向', '相干性', '对实验的意义'],
    colW: [96, 190, 76, 238],
    rowH: 30,
    fontSize: 10,
    rows: [
      ['汤姆逊散射', '弹性再辐射', '相干', '衍射信号唯一来源'],
      ['光电吸收', '被原子吸收、击出内层电子', '无', '衰减、荧光背景、辐射损伤'],
      ['康普顿散射', '非弹性碰撞后波长变长', '非相干', '弥散背景、剂量次要来源'],
    ],
  })
  b.wtext(60, 490, '三种过程同时发生：衍射只「用」第一条通道，却要为后两条「付账」——光电吸收造成衰减与损伤（第 5 章），荧光与康普顿散射抬高背景。衍射图因此可以读作「晶体电子分布的傅里叶照片」。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 二、原子散射因子 ============
  b.panel(710, 132, 660, 412, { title: '二、原子散射因子 f_{0}：电子云的签名' })
  b.legend(786, 186, [
    ['碳 C', C.rna], ['氮 N', C.pro], ['氧 O', C.acc], ['硫 S', C.bad],
  ], { size: 10, gap: 12 })
  const ax = 800, ay = 390, aw = 300, ah = 190
  b.axis(ax, ay, aw, ah, {
    xlabel: 'sinθ/λ（Å^{-1}）', ylabel: 'f_{0}（电子数）',
    xticks: [[0, '0'], [0.25, '0.25'], [0.5, '0.5'], [0.75, '0.75'], [1, '1.0']],
    yticks: [[0, '0'], [0.25, '4'], [0.75, '12'], [1, '16']],
  })
  // f₀ 数值取国际晶体学表 Cromer–Mann 系数近似口径；s∈[0,1] 完整落在轴量程内
  const FX: Array<[string, string, Array<[number, number]>]> = [
    ['C', C.rna, [[0, 6], [0.1, 4.9], [0.2, 4.0], [0.3, 3.4], [0.4, 2.9], [0.5, 2.5], [0.6, 2.1], [0.7, 1.8], [0.8, 1.5], [0.9, 1.3], [1, 1.1]]],
    ['N', C.pro, [[0, 7], [0.1, 5.8], [0.2, 4.8], [0.3, 4.0], [0.4, 3.4], [0.5, 2.9], [0.6, 2.5], [0.7, 2.2], [0.8, 1.9], [0.9, 1.7], [1, 1.5]]],
    ['O', C.acc, [[0, 8], [0.1, 6.6], [0.2, 5.5], [0.3, 4.6], [0.4, 3.9], [0.5, 3.4], [0.6, 2.9], [0.7, 2.5], [0.8, 2.2], [0.9, 1.9], [1, 1.7]]],
    ['S', C.bad, [[0, 16], [0.1, 12.8], [0.2, 10.4], [0.3, 8.6], [0.4, 7.2], [0.5, 6.1], [0.6, 5.3], [0.7, 4.6], [0.8, 4.0], [0.9, 3.5], [1, 3.1]]],
  ]
  // 横轴域 sinθ/λ∈[0,1]（数据 s 即物理值，直接归一映射，勿再除以 0.7——曾致曲线越框 128px）
  const fx = (v: number) => ax + v * aw
  const fy = (v: number) => ay - (v / 16) * ah
  for (const [name, col, pts] of FX) {
    b.curve(ax, ay, aw, ah, pts.map(([s, v]) => [s, v / 16] as [number, number]), { smooth: true, stroke: col, sw: 2.4 })
    b.ctext(fx(0) + 14, fy(pts[0][1]) + 3, name, { size: 10, weight: 700, fill: col })
  }
  for (const [name, col, pts] of FX) {
    const v = pts[5][1] // s=0.71 处：碳 1.7 / 氮 1.9 / 氧 2.0 / 硫 5.3
    b.circle(fx(0.71), fy(v), 4, { fill: col, stroke: '#ffffff', sw: 1.2 })
  }
  b.ctext(fx(0.71) + 8, fy(2.2), '碳约 1.7', { size: 8.5, weight: 700, fill: C.rnaD })
  b.ctext(fx(0.71) + 8, fy(5.6), '硫约 5.3', { size: 8.5, weight: 700, fill: C.bad })
  b.wtext(730, 446, '零散射角处所有电子同相，f_{0}＝Z；随 sinθ/λ 增大，电子云的有限尺寸使各部分散射波出现相位差，f_{0} 单调下降——碳在 0.7 Å^{-1}（约对应 d＝0.7 Å）处只剩约 1.7 个电子，同处氧约 2.0、氮约 1.9、硫约 5.3（自 16 降）。轻原子高角的「声量」只剩零角时的两三成，重原子的相对优势愈发醒目——这是衍射强度随分辨率衰减的普遍趋势之一（另一贡献来自温度因子，本章第 4 节）。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  // 反常修正卡
  b.rect(1110, 200, 240, 176, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.6, rx: 9 })
  b.ctext(1230, 224, '反常修正：f = f_{0} + f′ + if″', { size: 11.5, weight: 700, fill: C.enzD })
  b.wtext(1122, 248, '吸收边附近实部 f′（色散项）与虚部 f″（吸收项）剧变，正是 MAD/SAD 定相的物理支点（第 8 章）。以 Se 为例，峰处 f″ 约 4 个电子——相当于凭空多出的一枚「虚部原子」。', { size: 9.5, fill: C.sub, maxW: 216, lh: 13 })
  b.wtext(1122, 330, '蛋白主要轻元素远离吸收边（C 约 284 eV、O 约 532 eV，而常规工作能量 8–13 keV），修正小而平缓；Se、Br、Zn、Fe 反常显著、可资利用。', { size: 9.5, fill: C.mute, maxW: 216, lh: 13 })

  // ============ 三、吸收随波长变化与背景控制 ============
  b.panel(30, 558, 660, 412, { title: '三、吸收随波长增长：边、衰减与背景' })
  b.text(70, 594, 'Se 的 μ–λ 曲线（μ 近似随 Z^{4}λ^{3} 增长，示意）', { size: 10.5, weight: 700, fill: C.sub })
  const mx = 70, my = 780, mw = 280, mh = 180
  b.axis(mx, my, mw, mh, {
    xlabel: '波长 λ（Å）',
    xticks: [[0, '0.5'], [0.25, '1.0'], [0.5, '1.5'], [0.75, '2.0'], [1, '2.5']],
    yticks: [[0.5, '中'], [0.9, '高']],
  })
  b.curve(mx, my, mw, mh, [[0, 0.1], [0.08, 0.13], [0.16, 0.17], [0.24, 0.21]], { smooth: true, stroke: C.acc, sw: 2.6 })
  b.line(mx + 0.24 * mw, my - 0.21 * mh, mx + 0.24 * mw, my - 0.62 * mh, { stroke: C.bad, sw: 2.6 })
  b.curve(mx, my, mw, mh, [[0.24, 0.62], [0.4, 0.7], [0.6, 0.8], [0.8, 0.89], [1, 0.95]], { smooth: true, stroke: C.acc, sw: 2.6 })
  b.ctext(mx + 0.24 * mw, 608, 'K 吸收边', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(mx + 0.24 * mw, 620, '12.66 keV（λ≈0.98 Å）', { size: 8.5, fill: C.bad })
  b.ctext(mx + 0.62 * mw, my - 0.4 * mh, '边以上：吸收剧烈', { size: 9, weight: 700, fill: C.accD })
  b.ctext(mx + 0.1 * mw, my - 0.4 * mh, '边以下', { size: 9, fill: C.mute })
  // 指数衰减
  b.text(420, 594, '穿过厚度 t 后的强度衰减', { size: 10.5, weight: 700, fill: C.sub })
  const ix = 420, iy = 780, iw = 240, ih = 180
  b.axis(ix, iy, iw, ih, {
    xlabel: '穿行厚度 t',
    yticks: [[1, 'I_{0}'], [0.37, '1/e'], [0, '0']],
  })
  b.curve(ix, iy, iw, ih, [[0, 1], [0.15, 0.85], [0.3, 0.68], [0.45, 0.52], [0.6, 0.38], [0.75, 0.26], [0.9, 0.16], [1, 0.11]], { smooth: true, stroke: C.bad, sw: 3 })
  b.ctext(ix + 0.62 * iw, iy - 0.52 * ih, 'I = I_{0}·e^{-μt}', { size: 11, weight: 700, fill: C.bad })
  b.wtext(60, 838, '吸收边与荧光的因果链：K 空位由外层电子回填，多出的能量以该元素特征荧光发出（或以俄歇电子交出）——入射能量高于边才能击出 K 电子，故荧光是「边以上」的现象。Cu Kα（8.05 keV）高于 P（约 2.15）、S（约 2.47）、Ca（约 4.04 keV）的 K 边，会在蛋白晶体里激发荧光铺垫背景；Se 的 K 边约 12.66 keV 高于 Cu Kα——家用源既做不了 Se 反常，也因此免了 Se 荧光之扰。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  b.wtext(60, 886, '背景控制：空气散射与挡板散射是低角背景主源——挡板要贴近样品又遮住直射光；直径太大封顶最低分辨率、太小则漏光再散射。缩短样品至挡板距离、限束准直管、氦气盒或真空管道是主药；母液、冷冻保护剂、尼龙环与冰壳同样记入背景预算——低角数据决定电子密度图的「形状」，损失常被低估（第 6 章）。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })
  b.tag(330, 940, '含重原子或波长偏长的数据，吸收修正是「信不过」与「信得过」的分界线', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 10 })

  // ============ 四、数量级直觉 ============
  b.panel(710, 558, 660, 412, { title: '四、数量级直觉：强源与灵敏探测器的刚需' })
  b.rect(730, 606, 262, 32, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(861, 626, '入射通量 10^{12} ph/s（同步辐射束）', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(998, 622, 1072, 622, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.rect(1078, 612, 148, 20, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 6 })
  b.ctext(1152, 626, '单个反射 10^{2}–10^{4}', { size: 9.5, weight: 700, fill: C.bad })
  b.tag(1038, 668, '入射光子进入单个衍射斑的概率仅 10^{-8}–10^{-10}', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 10 })
  b.wtext(1286, 616, '计数统计涨落直接进入强度', { size: 8.5, fill: C.mute, maxW: 118, lh: 11, anchor: 'middle' })
  b.wtext(730, 700, '一颗 100 μm 见方的蛋白晶体，晶胞体积按 10^{5}–10^{6} Å^{3} 计，约含 10^{6}–10^{7} 个晶胞；即便如此，通量摊到每个反射常不过 10^{2}–10^{4} 个光子——泊松计数噪声直接进入强度。这把「更强的光源」（同步辐射，本章第 1 节）与「零噪声的探测器」（单光子计数 PAD，第 5 章）变成刚需。', { size: 10, fill: C.sub, maxW: 616, lh: 13.5 })
  b.table(730, 766, 616, {
    headers: ['项目', 'X 射线衍射', '电子衍射（MicroED）'],
    colW: [80, 200, 336],
    rowH: 30,
    fontSize: 9.5,
    rows: [
      ['散射能力', '较弱', '原子对电子的散射约强三个数量级'],
      ['晶体尺寸', '数十微米以上为舒适区', '1–5 μm 即可'],
      ['Ewald 球', '半径 1/λ，旋转逐帧扫球', '200 kV 电子 λ＝0.0251 Å，半径放大约 40 倍、近乎平面'],
      ['剂量', '辐射损伤须低温与剂量管理', '能量沉积迅猛，天生低剂量作业'],
    ],
  })
  b.wtext(730, 944, 'X 射线以数十微米以上晶体为舒适区、MicroED 有 1–5 μm 即可——两者对晶体体积的需求差约两个数量级，正是散射强度差在实验尺寸上的投影（第 12 章）；「一图全收」与「逐帧扫球」的对照也由此而来。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })
}

export default scene({
  title: 'X 射线与物质的相互作用：散射、吸收与数量级',
  subtitle: '汤姆逊截面 6.65×10^{-29} m^{2} 为衍射唯一来源；光电吸收 ∝ Z^{4}λ^{3}；f_{0} 随 sinθ/λ 下降（碳 6 至 1.7）；I＝I_{0}e^{-μt}；单斑概率 10^{-8}–10^{-10}；电子散射强千倍',
  draw,
})
