// xc ch4-s3 布拉格定律与倒易点阵（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、布拉格定律几何 ============
  b.panel(30, 132, 660, 300, { title: '一、布拉格定律：把衍射当反射处理' })
  const planes = [210, 270, 330, 390]
  planes.forEach(py => {
    b.line(100, py, 560, py, { stroke: C.sub, sw: 2 })
    for (let i = 0; i <= 11; i++) b.circle(108 + i * 41, py, 2.4, { fill: C.mute })
  })
  b.line(585, 270, 585, 330, { stroke: C.enz, sw: 1.8, markerStart: 'enz', marker: 'enz' })
  b.ctext(600, 304, 'd', { size: 13, weight: 700, fill: C.enz, italic: true })
  b.arrow(140, 160, 320, 270, { stroke: C.warn, sw: 2.6, marker: 'warn' })
  b.arrow(320, 270, 500, 160, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.line(320, 270, 413, 330, { stroke: C.warn, sw: 1.8, dash: '6 4' })
  b.arrow(413, 330, 593, 220, { stroke: C.enz, sw: 1.8, dash: '6 4', marker: 'enz' })
  b.path('M 284,254 A 38,38 0 0 1 291,270', { fill: 'none', stroke: C.bad, sw: 1.6 })
  b.ctext(272, 246, 'θ', { size: 12, weight: 700, fill: C.bad, italic: true })
  b.path('M 349,254 A 38,38 0 0 0 342,270', { fill: 'none', stroke: C.bad, sw: 1.6 })
  b.ctext(368, 246, 'θ', { size: 12, weight: 700, fill: C.bad, italic: true })
  b.ctext(230, 188, '入射', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(438, 188, '反射', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(372, 316, 'θ', { size: 11, weight: 700, fill: C.bad, italic: true })
  b.ctext(330, 420, '2d sinθ = nλ', { size: 19, weight: 700, fill: C.ink })
  b.wtext(430, 408, '相邻两面「反射」的程差恰为波长整数倍时相干加强；「镜面反射」是全体电子散射干涉相长的几何近似', { size: 10, fill: C.sub, maxW: 236, lh: 14 })

  // ============ 二、数量级与高级反射 ============
  b.panel(710, 132, 660, 300, { title: '二、布拉格角数量级与高级反射' })
  b.table(730, 202, 296, {
    title: 'λ = 1 Å 的算例',
    headers: ['d（Å）', 'θ', '要点'],
    colW: [76, 70, 150],
    rowH: 32,
    fontSize: 12,
    rows: [
      ['2.0', '14.5°', '中分辨率'],
      ['1.0', '30.0°', '原子分辨率'],
      ['0.8', '38.7°', '高角区'],
    ],
  })
  b.wtext(730, 372, '高分辨率数据天然住在高角区——探测器须后撤或 2θ 偏移才能接住（第 5 章）。倒易格矢长度 1/d = |g| = 2 sinθ/λ。', { size: 10.5, fill: C.sub, maxW: 286, lh: 15 })
  b.text(1060, 200, '高级反射：', { size: 12, weight: 700, fill: C.ink })
  b.wtext(1060, 222, '(hkl) 的一级反射与 (2h 2k 2l) 的「一级」指向同一方向（后者面间距恰为 d/2）——级数吸收进指数，统一写作 2d_{hkl} sinθ = λ。', { size: 10.5, fill: C.sub, maxW: 286, lh: 15 })
  b.text(1060, 292, '谐波污染：', { size: 12, weight: 700, fill: C.ink })
  b.wtext(1060, 314, '单色光混有 λ/2 分量时，会以同一布拉格角在探测器上冒充「更高等」反射——家用源靠镍滤波片与石墨单色器、同步辐射靠单色器谐波抑制设计压住。', { size: 10.5, fill: C.sub, maxW: 286, lh: 15 })

  // ============ 三、Ewald 反射球构造 ============
  b.panel(30, 452, 660, 520, { title: '三、埃瓦尔德反射球：衍射条件的几何化（五步作图）' })
  const Ox = 240, Oy = 700, R = 180
  b.circle(Ox, Oy, R, { fill: C.accL, fillOp: 0.28, stroke: C.acc, sw: 2.4 })
  b.arrow(58, Oy, Ox - 8, Oy, { stroke: C.warn, sw: 2.6, marker: 'warn' })
  b.ctext(120, 684, '入射波矢 k_{in}', { size: 11, weight: 700, fill: C.warnD })
  b.ctext(Ox, Oy + 22, '晶体 O（球心）', { size: 11, weight: 700, fill: C.sub })
  b.circle(420, Oy, 5, { fill: C.bad })
  b.ctext(420, Oy + 24, '倒易原点 L', { size: 11, weight: 700, fill: C.bad })
  b.ctext(330, 724, '球半径 1/λ', { size: 10.5, fill: C.accD })
  // 倒易格子点阵
  for (let k = 0; k <= 7; k++) for (let m = 0; m <= 5; m++) {
    if (k === 0 && m === 0) continue
    b.circle(420 - 36 * k, Oy - 36 * m, 2.8, { fill: C.mute })
  }
  const G: [number, number] = [384, Oy - 108]
  b.circle(G[0], G[1], 5.5, { fill: C.acc, stroke: '#ffffff', sw: 1.4 })
  b.arrow(Ox, Oy, G[0], G[1], { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.ctext(296, 626, '衍射束 k_{out}', { size: 11, weight: 700, fill: C.enzD })
  b.arrow(420, Oy, G[0], G[1], { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(452, 640, 'g = h b_{1} + k b_{2} + l b_{3}', { size: 11, weight: 700, fill: C.bad })
  b.ctext(452, 658, '|g| = 1/d_{hkl}', { size: 10.5, fill: C.bad })
  b.ctext(388, 566, '落在球面即衍射', { size: 10.5, weight: 700, fill: C.accD })
  b.text(462, 530, '① 取一点 O 为晶体（球心）', { size: 10, fill: C.sub })
  b.text(462, 548, '② 自 O 沿入射方向取长度 1/λ 得 L', { size: 10, fill: C.sub })
  b.text(462, 566, '③ 以 O 为心、1/λ 为半径作球', { size: 10, fill: C.sub })
  b.text(462, 584, '④ 把倒易点阵原点置于 L', { size: 10, fill: C.sub })
  b.wtext(462, 602, '⑤ 旋转晶体＝倒易点阵绕过 L 的轴旋转——格点扫过球面的瞬间即产生衍射斑', { size: 10, fill: C.sub, maxW: 196, lh: 14 })
  b.wtext(462, 668, '盲区：紧贴转轴的格点永远贴不上球面——单轴旋转天然留下锥形盲区，须靠等效反射（高对称群）或第二个晶体取向补足。', { size: 10, fill: C.mute, maxW: 196, lh: 14 })
  b.wtext(60, 906, '数量级：λ≈1 Å → 球半径 1 Å^{-1}；晶胞 100 Å 的倒易格点间距仅约 0.01 Å^{-1}——球面相对格点阵近乎平直，静止晶体几乎不出斑，旋转法由此成为必然。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 四、限制球与立方律 ============
  b.panel(710, 452, 660, 520, { title: '四、限制球 2/λ 与反射数立方律' })
  b.circle(960, 730, 200, { fill: C.badL, fillOp: 0.3, stroke: C.bad, sw: 2.2, dash: '8 5' })
  b.circle(960, 730, 100, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 2.2 })
  b.circle(960, 730, 50, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 2.2 })
  b.circle(960, 730, 4, { fill: C.ink })
  b.ctext(960, 692, 'd_{min}=2 Å', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(960, 708, '|g| ≤ 0.5 Å^{-1}', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(960, 620, 'd_{min}=1 Å', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(960, 636, '|g| ≤ 1 Å^{-1}', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(960, 552, '限制球 |g| ≤ 2/λ = 2 Å^{-1}（λ=1 Å，背散射极限）', { size: 11, weight: 700, fill: C.bad })
  b.wtext(1178, 590, 'd_{min} 从 2 Å 推到 1 Å：倒易球半径翻倍、反射数约增 8 倍（立方律）——10⁶ Å³ 晶胞到 2 Å 约 5×10⁵ 个反射、到 1 Å 约 4×10⁶ 个；2 Å 分辨率球体积仅占限制球 1/64，1 Å 时升至 1/8。', { size: 10.5, fill: C.sub, maxW: 176, lh: 15 })
  b.wtext(730, 906, '正交晶胞 a=80、b=100、c=120 Å 的倒易格点间距分别为 0.0125、0.0100、0.0083 Å^{-1}——球面随便哪个方向都排七八十个格点，长晶胞衍射图拥挤由此而来（大晶胞须小转角、远距离）。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '布拉格定律、倒易点阵与埃瓦尔德反射球',
  subtitle: '2d sinθ = nλ（λ=1 Å：d=2.0/1.0/0.8 Å → θ=14.5°/30.0°/38.7°）；倒易格矢 |g|=1/d；Ewald 球半径 1/λ、五步作图；限制球 2/λ=2 Å^{-1}；d_{min} 2→1 Å 反射数×8',
  draw,
})
