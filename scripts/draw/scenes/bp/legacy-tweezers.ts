// bp 遗留重绘：光镊原理（梯度势阱 + 光线追迹 + 单分子力测量）（slug: optical-tweezers）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、光路与梯度势阱 ============
  b.panel(30, 150, 660, 560, { title: '一、光路：强会聚激光形成三维梯度势阱' })
  // 激光器
  b.rect(60, 186, 96, 44, { fill: C.badL, stroke: C.bad, sw: 2, rx: 8 })
  b.ctext(108, 212, '激光器', { size: 12.5, weight: 700, fill: C.bad })
  b.text(60, 252, '近红外 ~1064 nm（活样品光损伤小）', { size: 11, fill: C.mute })
  // 光束 → 二向色镜
  b.line(156, 208, 330, 208, { stroke: C.bad, sw: 3, dash: '10 6' })
  b.tag(240, 190, '二向色镜', { fill: '#ffffff', stroke: C.sub, size: 10.5, weight: 700, tfill: C.sub, pad: 6 })
  b.line(306, 178, 354, 232, { stroke: C.sub, sw: 4 })
  // 反射向下 → 物镜
  b.line(330, 208, 330, 268, { stroke: C.bad, sw: 3, dash: '10 6' })
  // 高 NA 油浸物镜（梯形）
  b.polygon([[292, 268], [368, 268], [352, 340], [308, 340]], { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.etext(282, 296, '高 NA 油浸物镜', { size: 12, weight: 700, fill: C.accD })
  b.etext(282, 316, 'NA ≥ 1.2 会聚角大', { size: 10.5, fill: C.mute })
  // 样品池
  b.rect(190, 400, 330, 150, { fill: C.accL, fillOp: 0.25, stroke: C.sub, sw: 1.8, dash: '7 5', rx: 10 })
  b.text(200, 392, '样品池（水溶液介质，折射率 n₀ ≈ 1.33）', { size: 11, fill: C.mute })
  // 会聚光锥
  b.polygon([[308, 340], [352, 340], [336, 470], [324, 470]], { fill: C.warn, fillOp: 0.22 })
  // 焦点处的介电微珠
  b.circle(330, 470, 22, { fill: C.enzL, stroke: C.enz, sw: 2.4 })
  b.ctext(330, 475, '珠', { size: 11, weight: 700, fill: C.enzD })
  b.text(380, 448, '介电微珠（直径 ~1 μm）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(380, 468, '折射率 n₁ ≈ 1.5 > 介质 n₀ ≈ 1.33（聚苯乙烯/石英）', { size: 10.5, fill: C.mute, maxW: 280, lh: 15 })
  // 力箭头
  b.arrow(330, 442, 330, 408, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.text(352, 421, 'F梯度：指向焦点', { size: 11, weight: 700, fill: C.dna })
  b.arrow(330, 498, 330, 532, { stroke: C.enz, sw: 2.6, marker: 'enz' })
  b.text(344, 522, 'F散射：沿光传播方向', { size: 11, weight: 700, fill: C.enz })
  b.wtext(200, 570, '两力平衡 → 微珠稳定于焦点附近；微珠偶联单个生物分子（马达蛋白 / RNA 聚合酶 / DNA…），pN 级牵引力使珠偏离焦点、位移与力成正比。', { size: 11, fill: C.sub, maxW: 460, lh: 16 })

  // ============ 二、光线追迹 ============
  b.panel(720, 150, 650, 560, { title: '二、光线追迹：折射与动量传递解释力源' })
  // 微珠
  b.circle(1010, 360, 78, { fill: '#ffffff', stroke: C.enz, sw: 2.6 })
  // 法线
  b.line(1010, 250, 1010, 470, { stroke: C.mute, sw: 1.4, dash: '6 5' })
  b.ctext(1010, 240, '法线', { size: 10.5, fill: C.mute })
  // 三对光线：入射 → 珠内折射（向法线偏折）→ 出射
  const rays: Array<[[number, number], [number, number], [number, number]]> = [
    [[850, 282], [952, 326], [1060, 402]],
    [[880, 250], [975, 306], [1076, 438]],
    [[826, 330], [940, 348], [1030, 462]],
  ]
  for (const [a, m, e] of rays) {
    b.line(a[0], a[1], m[0], m[1], { stroke: C.bad, sw: 2.2 })
    b.line(m[0], m[1], e[0], e[1], { stroke: C.warn, sw: 2.2, marker: 'warn' })
  }
  b.tag(850, 230, '会聚激光束', { fill: '#ffffff', stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 6 })
  // 出射光动量方向改变 → Δp 向下 → 反推珠向上
  b.arrow(1060, 420, 1060, 470, { stroke: C.warn, sw: 2.4, marker: 'warn' })
  b.text(1082, 430, '出射光动量方向改变', { size: 11, fill: C.sub })
  b.text(1082, 448, '→ 光子动量变化 Δp 向下', { size: 11, fill: C.sub })
  b.text(1082, 466, '→ 珠获得向上的反作用力', { size: 11, fill: C.sub })
  // 净合力
  b.arrow(1010, 276, 1010, 226, { stroke: C.dna, sw: 3, marker: 'dna' })
  b.wtext(1030, 250, '净合力指向光强更大处（焦点）＝梯度力来源', { size: 11, weight: 700, fill: C.dnaD, maxW: 250, lh: 16 })
  b.wtext(750, 560, '微珠折射率高于介质 → 光线穿珠向法线偏折 → 动量沿光传播方向向下传递 → 反推微珠指向焦点；焦上焦下光线不对称度决定阱刚度。', { size: 11, fill: C.sub, maxW: 580, lh: 17 })

  // ============ 三、底部：简谐势阱 + 应用 ============
  b.panel(30, 740, 660, 236, { title: '三、小位移近似：简谐势阱' })
  // 墙 + 弹簧 + 珠
  b.rect(70, 800, 12, 100, { fill: C.sub })
  const seg: [number, number][] = []
  for (let i = 0; i <= 8; i++) seg.push([82 + i * 14, i % 2 === 0 ? 836 : 862])
  b.polyline(seg, { stroke: C.mute, sw: 2 })
  b.circle(236, 850, 20, { fill: C.enzL, stroke: C.enz, sw: 2.2 })
  b.ctext(236, 855, '珠', { size: 10.5, weight: 700, fill: C.enzD })
  b.arrow(320, 850, 262, 850, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.text(330, 842, 'F = −k·Δx', { size: 13, weight: 700, fill: C.dnaD })
  b.text(330, 864, '（回复力指向焦点）', { size: 10.5, fill: C.mute })
  b.wtext(100, 910, 'k 为阱刚度（典型 ~0.1 pN/nm）；珠偏离焦点量与分子牵引力成正比，经标定实时输出 pN 级力曲线——力分辨率 ~0.1 pN、位移分辨率 ~nm。', { size: 11, fill: C.sub, maxW: 570, lh: 17 })

  b.panel(720, 740, 650, 236, { title: '四、典型应用（单分子力谱）' })
  b.wtext(744, 790, '① 单分子马达步进：驱动蛋白 / 肌球蛋白的 8 nm 台阶与动力冲程；', { size: 12, fill: C.ink, maxW: 600, lh: 20 })
  b.wtext(744, 830, '② RNA 聚合酶转录停顿与回溯的力依赖行为；', { size: 12, fill: C.ink, maxW: 600, lh: 20 })
  b.wtext(744, 870, '③ DNA / 蛋白质去折叠力学谱：解链、结构域展开的中间态；', { size: 12, fill: C.ink, maxW: 600, lh: 20 })
  b.wtext(744, 910, '④ 与荧光显微联用实现「看得见 + 拉得动」的杂合测量（1997–2018 多届诺贝尔奖相关技术）。', { size: 12, fill: C.ink, maxW: 600, lh: 20 })
}

export default scene({
  title: '光镊：强会聚激光的梯度势阱与单分子力测量',
  subtitle: '梯度力（指向焦点）与散射力（沿传播方向）平衡俘获介电微珠；F = −k·Δx 实现 pN 级力谱',
  draw,
})
