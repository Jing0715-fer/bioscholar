// bp ch8-s2 电压门控与配体门控机制（39-e 收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、电压门控：S4 荷电桨叶的外移旋转与门控电流 ============
  b.panel(30, 132, 1340, 430, { title: '一、电压门控：S4 荷电桨叶的外移旋转与门控电流（Armstrong–Bezanilla，1973）' })

  // 左：S4 螺旋旋出模型
  b.text(60, 188, 'S4 电压传感器：螺旋旋出（helical screw）', { size: 13, weight: 700, fill: C.ink })
  b.text(60, 210, '每隔 3 个残基一个精氨酸（Arg），4–7 个正电荷沿螺旋成列——浸在跨膜电场中的「分子电压计」', { size: 10, fill: C.sub })
  b.bilayer(70, 300, 560, { h: 34 })
  b.text(96, 288, '胞外', { size: 10, weight: 700, fill: C.mute })
  b.text(96, 364, '胞内', { size: 10, weight: 700, fill: C.mute })

  // 静息态 S4
  b.rect(172, 262, 18, 104, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  for (const y of [272, 299, 326, 353]) {
    b.circle(181, y, 7.5, { fill: C.badL, stroke: C.bad, sw: 1.4 })
    b.ctext(181, y + 3, '+', { size: 9, weight: 700, fill: C.bad })
  }
  b.ctext(181, 388, '静息', { size: 10, weight: 700, fill: C.sub })

  // 去极化态 S4（外移 + 旋转）
  b.rect(322, 230, 18, 104, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  for (const y of [240, 267, 294, 321]) {
    b.circle(331, y, 7.5, { fill: C.badL, stroke: C.bad, sw: 1.4 })
    b.ctext(331, y + 3, '+', { size: 9, weight: 700, fill: C.bad })
  }
  b.ctext(331, 360, '去极化', { size: 10, weight: 700, fill: C.bad })
  b.path('M 350,244 A 30,30 0 1 1 350,286', { stroke: C.enz, sw: 2.2, marker: 'enz', fill: 'none' })
  b.text(392, 268, '外移 + 旋转', { size: 10, weight: 700, fill: C.enzD })

  // 状态间箭头
  b.arrow(214, 332, 306, 298, { stroke: C.acc, sw: 2.6, marker: 'acc' })
  b.ctext(260, 302, '去极化', { size: 10, weight: 700, fill: C.accD })

  b.tag(360, 400, '净效应：每通道约 12–16 个元电荷跨膜移动（Shaker K⁺ 实测 ≈ 13 e₀）', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 10 })

  // 失活机制：球–链 + IFM
  b.text(60, 434, '失活的分子机制', { size: 12, weight: 700, fill: C.ink })
  b.line(110, 450, 200, 450, { stroke: C.mute, sw: 3 })
  b.line(110, 514, 200, 514, { stroke: C.mute, sw: 3 })
  b.line(128, 450, 128, 514, { stroke: C.sub, sw: 3 })
  b.line(182, 450, 182, 514, { stroke: C.sub, sw: 3 })
  b.circle(155, 494, 14, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(155, 498, '+', { size: 10, weight: 700, fill: C.enzD })
  b.path('M 155,548 q 9,-11 0,-22 q -9,-11 0,-22', { stroke: C.enz, sw: 1.8, dash: '4 3', fill: 'none' })
  b.text(214, 466, 'N 型（球–链）：带正电的球', { size: 9.5, weight: 700, fill: C.enzD })
  b.wtext(214, 486, '经柔性链摆入胞内口塞孔（Armstrong 蛋白酶实验推论）', { size: 9.5, fill: C.sub, maxW: 240, lh: 13 })
  b.text(470, 462, 'Na⁺ 通道更快：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(562, 462, 'IFM 基序', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 8 })
  b.wtext(470, 492, 'III–IV 连接环的异亮氨酸–苯丙氨酸–蛋氨酸塞入失活受体', { size: 9.5, fill: C.sub, maxW: 200, lh: 13 })

  // 右：门控电流
  b.text(700, 188, '门控电流：门控电荷移动产生的瞬态电容电流', { size: 13, weight: 700, fill: C.ink })
  b.wtext(700, 214, '在 TTX 阻断离子流、仔细扣除线性电容后，分离出微小的非线性电流——直接证实「带电粒子在电场中位移」。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
  b.axis(740, 500, 570, 160, {
    title: '门控电流先于离子电流——先动传感器、后开孔',
    xlabel: '去极化后时间（ms）',
    yticks: [[0, '0'], [1, '归一化']],
    xticks: [[0, '0'], [0.25, '1'], [0.5, '2'], [0.75, '3'], [1, '4']],
  })
  b.curve(740, 500, 570, 160, [
    [0.02, 0.02], [0.045, 0.3], [0.07, 0.34], [0.1, 0.3], [0.15, 0.22], [0.22, 0.13], [0.3, 0.08], [0.45, 0.05], [0.7, 0.04], [1, 0.04],
  ], { stroke: C.enz, sw: 2.6 })
  b.curve(740, 500, 570, 160, [
    [0.02, 0.02], [0.15, 0.03], [0.22, 0.07], [0.3, 0.16], [0.38, 0.32], [0.46, 0.5], [0.55, 0.65], [0.65, 0.76], [0.8, 0.84], [1, 0.89],
  ], { stroke: C.acc, sw: 2.8 })
  b.legend(770, 360, [['门控电流 I_g（先）', C.enz], ['离子电流 I_ion（后）', C.acc]], { size: 9.5, gap: 14 })

  // ============ 二、配体门控：nAChR 五聚体别构转换 ============
  b.panel(30, 582, 1340, 378, { title: '二、配体门控：nAChR 五聚体的别构转换（关闭 ~3 Å → 开放 ~7–8 Å，电导 ~40 pS）' })

  // 卡①：五聚体俯视
  b.rect(50, 610, 400, 330, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(66, 638, '① 五聚体俯视（肌肉型 α₂βγδ）', { size: 12.5, weight: 700, fill: C.ink })
  const cx = 240, cy = 795, R = 72
  const subs: Array<[number, string, string]> = [
    [90, 'α', C.dna], [18, 'γ', C.pro], [306, 'δ', C.pro], [234, 'α', C.dna], [162, 'β', C.pro],
  ]
  for (const [deg, lab, col] of subs) {
    const a = (deg * Math.PI) / 180
    const px = cx + R * Math.cos(a), py = cy - R * Math.sin(a)
    b.circle(px, py, 32, { fill: col === C.dna ? C.dnaL : C.proL, stroke: col, sw: 2 })
    b.ctext(px, py + 5, lab, { size: 15, weight: 700, fill: col === C.dna ? C.dnaD : C.proD })
  }
  b.circle(cx, cy, 19, { fill: C.bg, stroke: C.mute, sw: 1.8 })
  b.ctext(cx, cy + 4, '孔', { size: 10, weight: 700, fill: C.mute })
  for (const deg of [54, 198]) {
    const a = (deg * Math.PI) / 180
    const px = cx + R * Math.cos(a), py = cy - R * Math.sin(a)
    b.circle(px, py, 9, { fill: C.okL, stroke: C.ok, sw: 1.8 })
    b.ctext(px + (deg === 54 ? 22 : -22), py + (deg === 54 ? -14 : 14), 'ACh', { size: 8.5, weight: 700, fill: C.okD })
  }
  b.text(322, 690, 'ACh 位点：', { size: 9.5, weight: 700, fill: C.okD })
  b.text(322, 706, '胞外 α/非 α', { size: 9.5, weight: 700, fill: C.okD })
  b.text(322, 722, '界面 ×2', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(240, 918, '每亚基 4 个跨膜螺旋（M1–M4），M2 围成孔内衬', { size: 10, fill: C.sub })

  // 卡②：孔道三态剖面
  b.rect(470, 610, 420, 330, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(486, 638, '② 孔道三态剖面', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(540, 654, '上：胞外 / 下：胞内', { size: 9, fill: C.mute })
  for (const tx of [540, 660, 780]) {
    b.rect(tx - 30, 665, 60, 190, { fill: C.bg, stroke: C.sub, sw: 2, rx: 28 })
  }
  b.line(500, 665, 580, 665, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.line(750, 665, 830, 665, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.line(500, 855, 580, 855, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.line(750, 855, 830, 855, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  // 关闭态：疏水收缩
  b.circle(522, 762, 12, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.circle(558, 762, 12, { fill: C.warnL, stroke: C.warn, sw: 2 })
  // 开放态：阳离子通过
  for (const y of [700, 740, 780, 820]) {
    b.circle(660, y, 6.5, { fill: C.warn, stroke: '#78350f', sw: 1 })
  }
  // 脱敏态：闸门关闭 + 配体仍结合
  b.circle(762, 762, 12, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.circle(798, 762, 12, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.circle(768, 692, 8, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.circle(792, 692, 8, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.arrow(578, 760, 622, 760, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(600, 748, '别构扭转', { size: 9, weight: 700, fill: C.accD })
  b.arrow(698, 760, 742, 760, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(720, 748, '持续暴露', { size: 9, weight: 700, fill: C.badD })
  b.ctext(540, 888, '关闭态', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(660, 888, '开放态', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(780, 888, '脱敏态', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(540, 912, '疏水闸门 ≈3 Å', { size: 9, fill: C.mute })
  b.ctext(660, 912, '≈7–8 Å · ~40 pS', { size: 9, fill: C.mute })
  b.ctext(780, 912, '配体仍结合、孔关闭', { size: 9, fill: C.mute })

  // 卡③：别构的物理本质
  b.rect(910, 610, 440, 330, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(926, 638, '③ 别构的物理本质', { size: 12.5, weight: 700, fill: C.ink })
  const allo: Array<[string, number]> = [
    ['配体结合 → 胞外域「扭转」经 M2 传递到跨膜区 → 疏水闸门张开', 672],
    ['持续暴露配体则进入脱敏态：配体仍结合、孔道关闭', 704],
  ]
  allo.forEach(([t, y]) => {
    b.circle(934, y - 4, 4, { fill: C.pro })
    b.text(946, y, t, { size: 10, weight: 600, fill: C.sub })
  })
  b.tag(1120, 750, '化学结合能 → 偿付孔道开启的构象能', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 10 })
  b.wtext(926, 790, '「用分子结合做功的机械」——配体门控把分子结合能经亚基界面传递、转化为孔道开启的机械功。', { size: 10, fill: C.sub, maxW: 410, lh: 14 })
  b.tag(1130, 860, '脱敏（desensitization）', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 9 })
}

export default scene({
  title: '电压门控与配体门控：S4 螺旋旋出与 nAChR 别构转换',
  subtitle: 'S4 每 3 残基一个 Arg（4–7 个正电荷），去极化外移旋转、门控电荷 ≈13 e₀/通道，门控电流先于离子电流；nAChR（α₂βγδ）经别构转换张开疏水闸门（~3 Å → ~7–8 Å，~40 pS）并具脱敏态',
  draw,
})
