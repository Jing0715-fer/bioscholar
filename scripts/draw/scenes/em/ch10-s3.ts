// em ch10-s3 MicroED 的原理与实践（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、诞生：2013 溶菌酶 ============
  b.panel(30, 132, 660, 412, { title: '一、诞生：材料学前置与 2013 年溶菌酶' })
  const evs: [number, string, string, boolean][] = [
    [0.08, '2010 年前后', 'ADT（Kolb）与 RED（Zou）打通无机亚微米晶', true],
    [0.5, '2013 年', 'Shi 等（Gonen 组）溶菌酶 2.9 Å', false],
    [0.85, '2014 年', '连续旋转方案推到约 1.7 Å', true],
  ]
  b.timelineH(80, 300, 540, evs.map(([at, label, sub, above]) => ({ at, label, sub, above })), { title: '' })
  b.wtext(50, 386, '结晶滴里长出的微晶在光学显微镜下形似沉淀、从未被 X 射线晶体学当回事——MicroED 把「太小太少长不大」的晶体第一次变成数据。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(230, 442, '溶菌酶 2.9 Å：首个 MicroED 蛋白结构（eLife）', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(530, 442, '连续旋转：每秒百分之几度到十分之几度', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(360, 496, '样品台连续匀速倾转，衍射几何与 X 射线旋转法完全同构，单颗晶体即得完整数据集', { size: 10, fill: C.mute })

  // ============ 二、Ewald 球近平面 ============
  b.panel(710, 132, 660, 412, { title: '二、Ewald 球近平面：电子的几何红利' })
  // X 射线：强弯曲
  b.ctext(880, 186, 'X 射线（Cu Kα，λ = 1.54 Å）', { size: 10.5, weight: 700, fill: C.sub })
  b.path('M 760,330 A 130,130 0 0 1 1000,330', { fill: 'none', stroke: C.rna, sw: 2.4 })
  for (let i = -2; i <= 2; i++) for (let j = -1; j <= 1; j++) {
    b.circle(880 + i * 26, 268 + j * 26, 3, { fill: C.mute })
  }
  b.circle(880, 330, 3.5, { fill: C.ink })
  b.line(880, 330, 962, 258, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(920, 316, '2 Å 衍射：布拉格角约 23°', { size: 9.5, fill: C.enzD })
  // 电子：近平面
  b.ctext(1190, 186, '电子（200 kV，λ = 0.025 Å）', { size: 10.5, weight: 700, fill: C.sub })
  b.path('M 1060,332 Q 1190,326 1320,332', { fill: 'none', stroke: C.acc, sw: 2.4 })
  for (let i = -2; i <= 2; i++) for (let j = -1; j <= 1; j++) {
    b.circle(1190 + i * 26, 268 + j * 26, 3, { fill: C.accD })
  }
  b.circle(1190, 332, 3.5, { fill: C.ink })
  b.line(1190, 332, 1266, 300, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.ctext(1230, 350, '不足半度：单帧近整层激发', { size: 9.5, fill: C.okD })
  b.tag(1040, 420, '波长比 Cu Kα 短约 60 倍，Ewald 球曲率半径大 60 倍、近于平面', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 10 })
  b.ctext(1040, 462, '倒易点阵整层同时落在反射条件上——一张照片收一层，旋转几度即换一层', { size: 10, fill: C.sub })
  b.ctext(1040, 500, '（灰点＝倒易格点；曲线＝Ewald 球截面）', { size: 9.5, fill: C.mute })

  // ============ 三、核心参数 ============
  b.panel(30, 572, 660, 398, { title: '三、装备与剂量：核心参数卡' })
  const card = (x: number, y: number, t: string, v: string, s: string) => {
    b.rect(x, y, 300, 88, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 8 })
    b.text(x + 16, y + 24, t, { size: 11.5, weight: 700, fill: C.ink })
    b.text(x + 16, y + 48, v, { size: 13, weight: 700, fill: C.accD })
    b.text(x + 16, y + 70, s, { size: 9.5, fill: C.mute })
  }
  card(50, 612, '可用晶体尺寸', '0.1–4 μm', '同步辐射要 10 μm 级以上才衍射得动')
  card(370, 612, '束流与总剂量', '0.01–0.1 e^{-}/Å^{2}/s；单晶约 1 e^{-}/Å^{2}', 'XFEL 吃微米晶但须大科学装置')
  card(50, 712, '探测器', '混合像素，数百到数千帧每秒', '连续旋转下逐帧记录衍射')
  card(370, 712, '旋转速率', '每秒百分之几度到十分之几度', '曝光期间连续匀速倾转')
  b.tag(360, 840, '剂量比常规电子成像低一到两个数量级', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.ctext(360, 900, '散射截面比 X 射线高 10^{3} 至 10^{5} 倍：小晶体、低束流也能攒够光子数', { size: 10, fill: C.sub })

  // ============ 四、软件栈与动力学散射 ============
  b.panel(710, 572, 660, 398, { title: '四、软件栈复用与动力学散射的边界' })
  const chain = ['XDS 指标化（波长 0.0251 Å）', 'SHELX / phenix 精修', 'Peng 等 1996 电子散射因子表']
  chain.forEach((s, i) => {
    b.tag(890 + i * 0, 620 + i * 46, s, { fill: i === 2 ? C.rnaL : C.accL, stroke: i === 2 ? C.rna : C.acc, size: 10.5, weight: 600, tfill: i === 2 ? C.rnaD : C.accD, pad: 9 })
  })
  b.arrow(1040, 648, 1040, 660, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(1040, 694, 1040, 706, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(1040, 760, '运动学精修 R 因子约 0.2——X 射线软件栈几乎原样复用', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 10 })
  b.wtext(730, 812, '边界：动力学散射使强度偏离 |F|^{2}——厚约一二百纳米以内运动学近似成立，更厚须 FIB 减薄或动力学精修（本章第 4 节、第 12 章）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(1040, 906, '「复用」是 MicroED 扩散快的关键：晶体学家的工具链不必重学', { size: 10, fill: C.mute })
}

export default scene({
  title: 'MicroED 的原理与实践：微晶、低剂量与连续旋转',
  subtitle: '2013 年溶菌酶 2.9 Å、2014 年连续旋转约 1.7 Å；晶体 0.1–4 μm、束流 0.01–0.1 e⁻/Å²/s、单晶总剂量约 1 e⁻/Å²；200 kV 波长 0.025 Å 使 Ewald 球近平面，2 Å 布拉格角不足半度（X 射线约 23 度）',
  draw,
})
