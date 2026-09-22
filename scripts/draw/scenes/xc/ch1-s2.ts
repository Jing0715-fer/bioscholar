// xc ch1-s2 劳厄实验与布拉格定律的诞生（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、劳厄实验布局（1912） ============
  b.panel(30, 132, 660, 310, { title: '一、劳厄实验（1912）：两件「未知」互为判据' })
  b.wtext(60, 186, '若X射线是波，波长须短至 10^{-10} m（1 Å）量级，普通刻线光栅无能为力；而晶体原子间距恰为 10^{-10} m——劳厄意识到晶体正是天然三维衍射光栅，两件未知互相成为对方的判据。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // 光路：X 射线管 - 光阑 - 晶体 - 底片
  b.rect(60, 268, 88, 54, { fill: '#f1f5f9', stroke: C.sub, sw: 1.8, rx: 12 })
  b.line(74, 280, 74, 306, { stroke: C.ink, sw: 3.5 })
  b.line(132, 272, 118, 316, { stroke: C.warn, sw: 4 })
  b.ctext(104, 344, 'X 射线管', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(140, 295, 244, 295, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.rect(250, 281, 6, 28, { fill: C.ink })
  b.rect(268, 281, 6, 28, { fill: C.ink })
  b.ctext(262, 344, '铅光阑（准直）', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(274, 295, 368, 295, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.polygon([[400, 272], [426, 295], [400, 318], [374, 295]], { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(400, 344, '闪锌矿晶体', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(426, 295, 549, 295, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ctext(488, 283, '直射束', { size: 9.5, fill: C.mute })
  b.arrow(426, 289, 562, 254, { stroke: C.warn, sw: 1.5, marker: 'warn' })
  b.arrow(426, 301, 562, 336, { stroke: C.warn, sw: 1.5, marker: 'warn' })
  // 底片（面朝读者，显影后）
  b.rect(555, 210, 116, 172, { fill: '#1e293b', stroke: C.line, sw: 1.5, rx: 4 })
  const fc: [number, number] = [613, 296]
  const base: [number, number, number][] = [[22, -22, 2.6], [44, -10, 2.1], [10, -44, 2.1], [48, -34, 1.6], [34, -34, 1.8]]
  for (const [dx, dy, r] of base) {
    const rot: [number, number][] = [[dx, dy], [-dy, dx], [-dx, -dy], [dy, -dx]]
    for (const [qx, qy] of rot) b.circle(fc[0] + qx, fc[1] + qy, r, { fill: '#e6edf5' })
  }
  b.circle(fc[0], fc[1], 4.5, { fill: '#ffffff' })
  b.ctext(613, 234, '四重对称', { size: 10, weight: 700, fill: '#94a3b8' })
  b.ctext(613, 398, '底片（显影后）', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(60, 412, '1912 年春弗里德里希与尼平以硫酸铜晶体首获斑点；改用闪锌矿的衍射图显示清晰四重对称，与晶体方形外形对应。斑点位置由劳厄方程（三条一维光栅方程联立）描述，只携带点阵信息。', { size: 10.5, fill: C.sub, maxW: 470, lh: 14 })

  // ============ 二、布拉格定律与电离分光计 ============
  b.panel(710, 132, 660, 310, { title: '二、布拉格定律与电离分光计' })
  b.tag(890, 186, '2d sinθ = nλ（W.L. 布拉格，1912–1913）', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 12 })
  b.rect(726, 245, 74, 54, { fill: '#f1f5f9', stroke: C.sub, sw: 1.8, rx: 10 })
  b.line(738, 256, 738, 288, { stroke: C.ink, sw: 3 })
  b.line(788, 250, 776, 292, { stroke: C.warn, sw: 3.5 })
  b.ctext(763, 318, 'X 射线管', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(800, 272, 876, 272, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.rect(880, 258, 5, 28, { fill: C.ink })
  b.rect(896, 258, 5, 28, { fill: C.ink })
  b.arrow(901, 272, 976, 272, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.polygon([[1000, 249], [1024, 272], [1000, 295], [976, 272]], { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ellipse(1000, 302, 44, 11, { fill: '#e0f2fe', stroke: C.acc, sw: 1.6 })
  b.ctext(1000, 330, '晶体（置于转台）', { size: 10.5, weight: 700, fill: C.sub })
  b.path('M 1000,224 A 48,48 0 0 0 1000,320', { fill: 'none', stroke: C.acc, sw: 1.7, marker: 'acc' })
  b.etext(946, 236, 'θ 转台', { size: 10.5, weight: 700, fill: C.accD })
  b.line(1024, 272, 1130, 272, { stroke: C.mute, sw: 1.4, dash: '5 4' })
  b.arrow(1024, 272, 1120, 235, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.path('M 1056,272 A 32,32 0 0 0 1053.8,260.5', { fill: 'none', stroke: C.bad, sw: 1.7 })
  b.ctext(1068, 254, '2θ', { size: 11, weight: 700, fill: C.bad })
  b.rect(1124, 213, 100, 44, { fill: '#e0f2fe', stroke: C.acc, sw: 2.2, rx: 21 })
  b.ctext(1174, 239, '电离室', { size: 12, weight: 700, fill: C.accD })
  b.ctext(1174, 278, '（探测器，逐点定量测强度）', { size: 10, fill: C.mute })
  b.wtext(730, 360, 'W.H. 布拉格制成X射线电离分光计：晶体置于转台、电离室绕同轴转动接收反射束，逐点定量测量衍射强度与X射线谱线。父子分工——小布拉格在剑桥解决几何与结构，老布拉格在利兹改进仪器与谱学，以每周通信推进。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14.5 })
  b.wtext(730, 408, '级数 n 并入指数（(nh nk nl) 面族的一级反射），得工程口径 2d sinθ = λ——「测斑点位置」即「测面间距」。', { size: 10.5, fill: C.mute, maxW: 616, lh: 14 })

  // ============ 三、氯化钠结构 ============
  b.panel(30, 456, 660, 510, { title: '三、氯化钠：第一个原子级结构（1913）' })
  const O: [number, number] = [130, 780]
  const A: [number, number] = [310, 780]
  const Bp: [number, number] = [180, 825]
  const AB: [number, number] = [360, 825]
  const Cc: [number, number] = [130, 610]
  const AC: [number, number] = [310, 610]
  const BC: [number, number] = [180, 655]
  const ABC: [number, number] = [360, 655]
  const edge = (p: [number, number], q: [number, number], dash?: string) =>
    b.line(p[0], p[1], q[0], q[1], { stroke: C.sub, sw: dash ? 1.2 : 1.7, dash })
  edge(O, A); edge(O, Bp); edge(A, AB); edge(Bp, AB)
  edge(O, Cc); edge(A, AC); edge(Cc, AC)
  edge(Bp, BC, '5 4'); edge(AB, ABC, '5 4'); edge(Cc, BC, '5 4'); edge(AC, ABC, '5 4'); edge(BC, ABC, '5 4')
  const mid = (p: [number, number], q: [number, number]): [number, number] => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]
  const cen = (...ps: [number, number][]): [number, number] => [ps.reduce((s, p) => s + p[0], 0) / ps.length, ps.reduce((s, p) => s + p[1], 0) / ps.length]
  const body = cen(O, A, Bp, AB, Cc, AC, BC, ABC)
  const cl = (p: [number, number]) => b.circle(p[0], p[1], 13, { fill: '#fef3c7', stroke: C.warn, sw: 2 })
  const na = (p: [number, number]) => b.circle(p[0], p[1], 9, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  for (const p of [O, A, Bp, AB, Cc, AC, BC, ABC, cen(O, A, AB, Bp), cen(O, Bp, BC, Cc), cen(Cc, AC, ABC, BC)]) cl(p)
  for (const p of [mid(O, A), mid(O, Bp), mid(O, Cc), mid(A, AB), mid(Bp, AB), mid(A, AC), mid(Cc, AC), body]) na(p)
  b.line(139, 610, 211, 610, { stroke: C.enz, sw: 1.8, markerStart: 'enz', marker: 'enz' })
  b.ctext(175, 594, 'Na–Cl 2.82 Å', { size: 11, weight: 700, fill: C.enzD })
  b.circle(150, 884, 12, { fill: '#fef3c7', stroke: C.warn, sw: 2 })
  b.text(170, 889, 'Cl^{-}（面心）', { size: 12, weight: 700, fill: C.warnD })
  b.circle(285, 884, 8.5, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  b.text(303, 889, 'Na^{+}（棱心＋体心）', { size: 12, weight: 700, fill: C.accD })
  b.wtext(60, 922, 'Na^{+} 与 Cl^{-} 各自构成面心立方格子、彼此穿插——固态盐以离子而非分子存在，化学史上首个原子层面的证明。', { size: 10.5, fill: C.sub, maxW: 310, lh: 14 })
  // 右：八面体配位
  b.ctext(525, 585, '体心 Na^{+} 的八面体配位', { size: 12, weight: 700, fill: C.sub })
  const OX = 525, OY = 660
  const oct: [number, number][] = [[OX + 62, OY], [OX - 62, OY], [OX, OY - 62], [OX, OY + 62], [OX + 28, OY - 16], [OX - 28, OY + 16]]
  for (const p of oct) b.line(OX, OY, p[0], p[1], { stroke: C.faint, sw: 1.3 })
  for (const p of oct) cl(p)
  na([OX, OY])
  b.ctext(525, 752, '每个离子被 6 个异号离子八面体式包围（配位 6:6）', { size: 10.5, weight: 700, fill: C.sub })
  b.table(380, 780, 270, {
    headers: ['项目', '数值与结论'],
    colW: [110, 160],
    rowH: 38,
    fontSize: 11.5,
    rows: [
      ['Na–Cl 最近距离', '2.82 Å'],
      ['配位数', '6:6（八面体式）'],
      ['晶格归属', '两套面心立方穿插'],
    ],
  })
  b.wtext(380, 954, '金刚石（1913）、黄铁矿、萤石、闪锌矿等结构接踵而至。', { size: 10.5, fill: C.mute, maxW: 260, lh: 14 })

  // ============ 四、时间线与波长标定 ============
  b.panel(710, 456, 660, 510, { title: '四、从衍射到原子坐标：诺贝尔链条与波长标定' })
  b.timelineH(740, 600, 600, [
    { at: 0.04, label: '1895', sub: '伦琴发现X射线', above: true, c: C.warn },
    { at: 0.18, label: '1912', sub: '劳厄斑（硫酸铜）', c: C.dna },
    { at: 0.32, label: '1912–13', sub: '布拉格定律', above: true, c: C.acc },
    { at: 0.46, label: '1913', sub: 'NaCl/KCl 结构', c: C.dna },
    { at: 0.60, label: '1914', sub: '劳厄诺贝尔奖', above: true, c: C.enz },
    { at: 0.74, label: '1915', sub: '父子诺贝尔奖', c: C.bad },
    { at: 0.90, label: '1924', sub: '西格班谱学奖', above: true, c: C.pro },
  ])
  b.wtext(730, 790, '莫塞莱 1913–1914 年用晶体衍射测量各元素X射线标识谱：频率平方根与原子序数严格线性，「原子序数」取代原子量成为周期表坐标。西格班以精密晶体谱仪把波长绝对测量推进到千分位精度——波长与晶面间距互为标定，晶体学参数共享同一把以米为基准的量尺。', { size: 10.5, fill: C.sub, maxW: 320, lh: 14.5 })
  b.axis(1075, 920, 255, 155, {
    xlabel: '原子序数 Z', ylabel: '√ν', title: '莫塞莱定律（标识谱）',
  })
  const mp: Array<[number, number]> = [[0.06, 0.08], [0.26, 0.30], [0.46, 0.51], [0.66, 0.72], [0.86, 0.93]]
  b.curve(1075, 920, 255, 155, mp, { stroke: C.dna, sw: 2.4 })
  for (const [fx, fy] of mp) b.circle(1075 + fx * 255, 920 - fy * 155, 4, { fill: C.dna })
  b.ctext(1200, 795, '√ν 与 Z 严格线性', { size: 11, weight: 700, fill: C.dnaD })
  b.tag(890, 895, 'W.L. 布拉格 25 岁获 1915 年诺贝尔奖：史上最年轻', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.badD, pad: 11 })
}

export default scene({
  title: '劳厄实验、布拉格定律与电离分光计',
  subtitle: '1912 年硫酸铜晶体得劳厄斑、闪锌矿图显四重对称；2d sinθ = nλ 把斑点翻译为面间距；1913 年 NaCl：两套面心立方穿插、Na-Cl 2.82 Å、配位 6:6',
  draw,
})
