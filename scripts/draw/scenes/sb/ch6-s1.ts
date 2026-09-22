// sb ch6-s1 X射线源与衍射几何（Task 6-sb）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、布拉格定律几何 ============
  b.panel(30, 132, 660, 300, { title: '一、布拉格定律：把衍射当反射处理' })
  // 晶面族三层
  b.line(90, 250, 320, 250, { stroke: C.acc, sw: 2.2 })
  b.line(90, 290, 320, 290, { stroke: C.acc, sw: 2.2 })
  b.line(90, 330, 320, 330, { stroke: C.acc, sw: 2.2 })
  b.ctext(340, 250, '晶面族 (hkl)', { size: 10.5, fill: C.mute })
  // 入射束与反射束
  b.arrow(110, 380, 200, 252, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.arrow(200, 252, 290, 380, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(140, 366, '入射 θ', { size: 10.5, fill: C.dnaD })
  b.ctext(262, 366, '衍射 θ', { size: 10.5, fill: C.dnaD })
  // 面间距 d
  b.line(330, 250, 330, 290, { stroke: C.warn, sw: 1.4, dash: '3 3' })
  b.line(330, 290, 330, 330, { stroke: C.warn, sw: 1.4, dash: '3 3' })
  b.ctext(348, 272, 'd', { size: 12, weight: 700, fill: C.warnD })
  // 程差标注
  b.path('M 148,338 A 44 44 0 0 1 178,316', { fill: 'none', stroke: C.mute, sw: 1 })
  b.ctext(196, 322, '相邻面反射程差 = 2d sinθ', { size: 10.5, fill: C.sub })
  // 公式
  b.tag(470, 200, '2d sinθ = nλ', { fill: C.accL, stroke: C.acc, size: 15, weight: 700, tfill: C.accD, pad: 13 })
  b.wtext(400, 236, '程差为波长整数倍时各面反射相干叠加成衍射斑。λ = 1 Å 时：d = 2.0/1.0/0.8 Å 对应 θ = 14.5°/30.0°/38.7°；d_{min} = λ/(2 sinθ_{max}) 给出分辨率极限。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })
  // 光源标注
  b.wtext(70, 400, '实验室源：Cu Kα = 1.5418 Å、Mo Kα = 0.7107 Å（密封管/旋转阳极/微焦源）；同步辐射波长连续可调——反常散射定相的先决条件。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 二、Ewald 反射球五步作图 ============
  b.panel(30, 452, 660, 330, { title: '二、Ewald 反射球：旋转晶体的衍射罗盘' })
  // 球
  const cx = 250, cy = 640, R = 120
  b.circle(cx, cy, R, { fill: C.accL, stroke: C.acc, sw: 2.4, fillOpacity: 0.35 })
  b.ctext(cx, cy + 26, '反射球（半径 1/λ）', { size: 10.5, fill: C.accD })
  // 晶体（球心）
  b.circle(cx, cy, 5, { fill: C.bad, stroke: 'none' })
  b.ctext(cx + 14, cy - 12, '晶体', { size: 10.5, weight: 700, fill: C.badD })
  // 入射束
  b.arrow(cx - 210, cy - 170, cx - 2, cy - 2, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(cx - 178, cy - 152, '入射波矢 k_{0}（长度 1/λ）', { size: 10.5, fill: C.dnaD })
  // 衍射束
  b.arrow(cx, cy, cx + 116, cy + 32, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(cx + 92, cy + 54, '衍射束 k', { size: 10.5, fill: C.dnaD })
  // 倒易格点
  const pts: Array<[number, number]> = [[cx + 116, cy + 32], [cx + 132, cy + 62], [cx + 96, cy + 62], [cx + 150, cy + 92], [cx + 178, cy + 10], [cx + 150, cy - 18]]
  for (const [px, py] of pts) {
    const on = Math.abs(Math.hypot(px - cx, py - cy) - R) < 6
    b.circle(px, py, on ? 4 : 2.6, { fill: on ? C.bad : C.faint, stroke: 'none' })
  }
  b.ctext(cx + 152, cy + 118, '倒易格点：落在球面上即满足布拉格条件', { size: 10, fill: C.sub })
  // 五步
  b.wtext(430, 486, '五步作图：① 画半径 1/λ 的球，晶体置于球心；② 入射方向指向球面；③ 倒易点阵原点取在出射束与球面交点；④ 晶体旋转时倒易点阵同步旋转；⑤ 格点扫过球面的一瞬产生衍射斑。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(430, 592, '限制球半径 2/λ 圈定可及的倒易空间；分辨率从 2 Å 提高到 1 Å，反射数约增 8 倍——高分辨率数据代价陡增的几何根源。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
  b.ctext(360, 766, '旋转法（每帧 0.1–1.0°）的几何解释见第 6 章第 2 节', { size: 10, fill: C.mute })

  // ============ 三、光源亮度阶梯 ============
  b.panel(710, 132, 660, 220, { title: '三、光源亮度阶梯（单位 ph/s/mm²/mrad²/0.1%bw）' })
  const rows = [
    ['密封管/旋转阳极', '约 10^{8}–10^{9}', 'Cu Kα 1.5418 Å，家用日常'],
    ['弯铁同步辐射', '约 10^{12}–10^{13}', '第一代与二代光源主力'],
    ['波荡器（三代）', '约 10^{15}–10^{17}', '准单色谐波、能量可调'],
    ['低发射度扩散源', '约 10^{18}–10^{22}', 'MAX IV 首创，束流更亮更稳'],
  ]
  b.table(730, 172, 620, {
    headers: ['光源', '亮度量级', '特征'],
    colW: [170, 150, 300],
    rowH: 34,
    fontSize: 11,
    rows,
  })
  b.ctext(1040, 336, '上海光源 SSRF（3.5 GeV）与北京高能光源 HEPS 服务国内结构生物学', { size: 10.5, fill: C.mute })

  // ============ 四、波长选择策略 ============
  b.panel(710, 372, 660, 190, { title: '四、波长选择的战场' })
  b.wtext(730, 412, '常规收数取 0.9–1.0 Å（损伤与吸收的平衡点）；SeMet 反常定相需在 Se 吸收边 0.9795 Å 附近微调（峰/拐点/远边三波长，见第 7 章）；短波长 0.5 Å 削弱吸收与角度依赖的损伤——串行晶体学常用；家用 1.5418 Å 便利但吸收强。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 490, '光束准直：光斑 20–100 μm 与晶体尺寸匹配；单色器带宽 ΔE/E 约 10^{−4} 保持衍射斑锐利。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 五、底部收束 ============
  b.wtext(30, 620, '亮度每上一个台阶，可用晶体尺寸就小一号、曝光就短一截、数据就精一分——从劳厄的硫酸铜到波荡器上的微晶，几何定律未曾改变，改变的只是把格点推上球面的力量。', { size: 11.5, weight: 600, fill: C.ink, maxW: 1340, lh: 17 })
}

export default scene({
  title: 'X 射线源与衍射几何：布拉格定律与 Ewald 反射球',
  subtitle: '2d sinθ = nλ（λ = 1 Å：d = 2.0/1.0/0.8 Å 对应 θ = 14.5°/30.0°/38.7°）；Ewald 球半径 1/λ 五步作图；亮度阶梯 10^{8} 到 10^{22}；Cu Kα 1.5418 Å / Se 边 0.9795 Å / 短波 0.5 Å',
  draw,
})
