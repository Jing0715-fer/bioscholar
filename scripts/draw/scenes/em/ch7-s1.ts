// em ch7-s1 中心截面定理（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  const blob = (cx: number, cy: number, r: number, seed: number, fill: string, stroke: string, sw = 2) => {
    const pts: [number, number][] = []
    for (let i = 0; i < 11; i++) {
      const a = (i / 11) * Math.PI * 2
      const rr = r * (0.78 + 0.38 * Math.abs(Math.sin(seed * 3.7 + i * 2.3)))
      pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)])
    }
    b.polygon(pts, { fill, stroke, sw })
  }

  // ============ 一、实空间：投影 ============
  b.panel(30, 132, 690, 440, { title: '一、实空间：投影＝三维密度沿视线的积分' })
  b.text(50, 184, 'p(x_{r}, y_{r}) = ∫ ρ(x_{r}, y_{r}, z_{r}) dz_{r}（Radon 1917，平行束特例）', { size: 13.5, weight: 700, fill: C.ink })
  const setups: [number, string, string][] = [
    [150, '取向 1（沿轴）', 'ellipse'],
    [360, '取向 2（侧向）', 'rect'],
    [570, '取向 3（斜向）', 'tri'],
  ]
  setups.forEach(([cx, label, kind]) => {
    b.arrow(cx, 192, cx, 224, { stroke: C.sub, sw: 2, marker: 'ink' })
    b.text(cx + 8, 208, 'e^{-}', { size: 10, fill: C.sub })
    blob(cx, 272, 34, cx, C.panelB, C.sub, 2)
    b.circle(cx + 8, 266, 7, { fill: C.proL, stroke: C.pro, sw: 1.4 })
    b.arrow(cx, 312, cx, 326, { stroke: C.mute, sw: 1.8, marker: 'mute' })
    b.rect(cx - 45, 332, 90, 74, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 4 })
    if (kind === 'ellipse') b.ellipse(cx, 369, 33, 25, { fill: C.dnaL, stroke: C.dna, sw: 2 })
    else if (kind === 'rect') b.rect(cx - 34, 353, 68, 32, { fill: C.proL, stroke: C.pro, sw: 2, rx: 12 })
    else b.polygon([[cx - 28, 384], [cx + 32, 376], [cx + 8, 346]], { fill: C.enzL, stroke: C.enz, sw: 2 })
    b.ctext(cx, 426, label, { size: 10.5, weight: 600, fill: C.sub })
  })
  b.wtext(50, 452, '同一结构的大量拷贝以随机取向分散于薄冰，电子束平行穿过——每个颗粒影子都是一次积分投影；一维自由度被「抹平」，二维像独立携带振幅与相位。', { size: 10.5, fill: C.sub, maxW: 650, lh: 15 })
  b.tag(360, 508, 'Crowther 判据：D = 100 Å、d = 4 Å → 约需 πD/d ≈ 80 个均匀视角', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 10 })
  b.ctext(360, 544, '判据只算几何账；考虑噪声后每个视角还须重复测量，实际颗粒数高出几个数量级（10⁵ 级数据集的由来）', { size: 10, fill: C.mute })

  // ============ 二、傅里叶空间：中心截面 ============
  b.panel(740, 132, 630, 440, { title: '二、傅里叶空间：中心截面拼成三维体积' })
  b.ctext(940, 176, '分辨率壳层（1/d）', { size: 10, fill: C.mute })
  b.circle(940, 320, 125, { fill: 'none', stroke: C.acc, sw: 2, dash: '6 5' })
  const angles = [8, 34, 60, 90, 116, 142, 168]
  const cols = [C.dna, C.pro, C.enz, C.acc, C.rna, C.ok, C.warn]
  angles.forEach((deg, i) => {
    const a = (deg * Math.PI) / 180
    b.line(940 - 110 * Math.cos(a), 320 - 110 * Math.sin(a), 940 + 110 * Math.cos(a), 320 + 110 * Math.sin(a), { stroke: cols[i], sw: 3, opacity: 0.75 })
  })
  b.circle(940, 320, 5, { fill: C.ink })
  b.arrow(1160, 235, 1010, 272, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.text(1168, 233, '中心截面（法向＝投影方向）', { size: 10.5, fill: C.sub })
  b.arrow(1078, 320, 1168, 320, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(1122, 303, '逆 3D FT', { size: 10.5, weight: 700, fill: C.sub })
  blob(1225, 320, 46, 7.3, C.proL, C.pro, 2.2)
  b.ctext(1225, 392, '三维密度复原', { size: 11, weight: 700, fill: C.proD })
  b.wtext(760, 468, '投影的二维傅里叶变换＝三维傅里叶体积中过原点、以投影方向为法向的中心截面（Z = 0 时相位因子处处为 1）。成千上万个随机取向的切片稠密铺满体积，逆变换即复原三维密度——无须如衍射般攻坚相位问题。', { size: 10.5, fill: C.sub, maxW: 570, lh: 15 })
  b.tag(1000, 552, '切片足够多、足够匀 → 重构可行', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 10 })

  // ============ 三、欧拉角 ============
  b.panel(30, 596, 690, 200, { title: '三、欧拉角（ZYZ 约定）：φ、θ、ψ' })
  b.line(170, 730, 170, 645, { stroke: C.ink, sw: 2, marker: 'ink' })
  b.text(176, 652, 'z', { size: 11, weight: 700, fill: C.ink })
  b.line(170, 730, 285, 730, { stroke: C.ink, sw: 2, marker: 'ink' })
  b.text(292, 734, 'x', { size: 11, weight: 700, fill: C.ink })
  b.path('M 140,655 A 30,11 0 0 1 200,655', { fill: 'none', stroke: C.acc, sw: 1.8 })
  b.text(206, 650, 'φ', { size: 12, weight: 700, fill: C.acc })
  b.line(170, 730, 255, 660, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.text(262, 655, '投影方向', { size: 10, fill: C.proD })
  b.path('M 170,680 A 50,50 0 0 1 202,692', { fill: 'none', stroke: C.dna, sw: 2 })
  b.text(146, 678, 'θ', { size: 12, weight: 700, fill: C.dna })
  b.path('M 200,672 A 14,6 0 0 1 224,688', { fill: 'none', stroke: C.rna, sw: 2 })
  b.text(228, 668, 'ψ', { size: 12, weight: 700, fill: C.rna })
  b.wtext(360, 640, 'θ 决定投影方向（中心截面法向与 z 轴的夹角）；ψ 仅面内自旋、不改变截面位置。取向搜索由粗到细：7.5°–15° 粗网格全局 → 0.5°–2° 局部精化；θ 趋零时 φ 与 ψ 退化（万向锁）。', { size: 11, fill: C.sub, maxW: 320, lh: 17 })
  b.ctext(520, 770, 'RELION（rot / tilt / psi）与 cryoSPARC 参数化等价，跨程序交换须显式换算', { size: 10, fill: C.mute })

  // ============ 四、同一数学，三条脉络 ============
  b.panel(740, 596, 630, 200, { title: '四、同一数学、三条脉络；理想与真实的三重缺口' })
  b.tag(870, 648, '医学 CT（1979 诺奖）', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(1042, 648, '电子断层（第 9 章）', { fill: C.rnaL, stroke: C.rna, size: 11, tfill: C.rnaD, pad: 9 })
  b.tag(1214, 648, '单颗粒分析（第 7–8 章）', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 9 })
  b.wtext(760, 686, 'Radon 1917 建立积分几何；1968 年 DeRosier 与 Klug 借螺旋对称重构 TMV（Klug 1982 年诺贝尔化学奖）；Cormack 与 Hounsfield 因 CT 共享 1979 年诺贝尔生理学或医学奖。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.text(760, 742, '真实投影的三重非理想性：', { size: 11, weight: 700, fill: C.ink })
  b.tag(880, 772, 'CTF 调制（零点湮灭）', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 8 })
  b.tag(1050, 772, '束致运动（电影可校正）', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 8 })
  b.tag(1220, 772, '低剂量噪声（SNR < 0.1）', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.badD, pad: 8 })
}

export default scene({
  title: '中心截面定理：从二维投影到三维重构',
  subtitle: 'p(x, y) = ∫ρ dz 的二维傅里叶变换＝三维傅里叶体积中过原点、以投影方向为法向的中心截面；欧拉角 φ/θ/ψ 参数化取向，θ 定法向、ψ 仅面内自旋',
  draw,
})
