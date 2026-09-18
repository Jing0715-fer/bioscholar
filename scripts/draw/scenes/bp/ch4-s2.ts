// bp ch4-s2 单分子马达的随机步进：布朗棘轮与能量冲程（39-e 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、过程性与恒定步长 ============
  b.panel(30, 132, 1340, 280, { title: '一、过程性与恒定步长：kinesin-1 的 1:1 机械化学耦合' })

  // -- 左：微管上的双手交替马达 --
  const ty = 300 // 微管轴线
  b.line(90, ty, 660, ty, { stroke: C.sub, sw: 3 })
  for (let i = 0; i < 15; i++) {
    const x = 90 + i * 40
    b.line(x, ty, x, ty + 8, { stroke: C.sub, sw: 2 })
  }
  b.ctext(375, 342, '微管：原聚体周期 8 nm', { size: 10.5, fill: C.mute })
  // 前头（结合轨道）与后头（翘起待迈）
  b.circle(430, 287, 13, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.circle(350, 258, 13, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.line(360, 264, 419, 279, { stroke: C.pro, sw: 2.4 })
  b.line(430, 274, 430, 210, { stroke: C.pro, sw: 2.8 })
  b.rect(398, 182, 64, 28, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 6 })
  b.ctext(430, 200, '货物', { size: 11.5, weight: 700, fill: C.rnaD })
  // 步进箭头（后头将迈向下一个 8 nm 位点）
  b.arrow(350, 230, 470, 230, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.ctext(410, 216, '步进 8 nm（恒定）', { size: 11, weight: 700, fill: C.enzD })
  b.tag(190, 240, '每步水解 1 个 ATP（1:1）', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 8 })
  b.ctext(472, 320, '前头（结合）', { size: 9.5, fill: C.proD })
  b.ctext(322, 320, '后头（迈向下一位点）', { size: 9.5, fill: C.mute })
  b.wtext(70, 378, '双手交替、两头上总有一头结合轨道：平均连续走 ~100 步、行程约 1 μm；低 ATP 浓度下步进频率严格正比于 [ATP]。', { size: 10.5, fill: C.sub, maxW: 640, lh: 14 })

  // -- 右：位置–时间台阶记录 --
  b.axis(820, 330, 500, 140, {
    title: '光镊位置记录：8 nm 台阶',
    xticks: [[0, '0'], [1, 't']],
    yticks: [[0, '0'], [0.5, '4 nm'], [1, '8 nm']],
    ylabel: '位置',
  })
  b.curve(820, 330, 500, 140, [
    [0, 0], [0.1, 0], [0.1, 0.17], [0.24, 0.17], [0.24, 0.34], [0.38, 0.34],
    [0.38, 0.5], [0.52, 0.5], [0.52, 0.67], [0.66, 0.67], [0.66, 0.84], [0.8, 0.84], [0.8, 1], [1, 1],
  ], { stroke: C.acc, sw: 3 })
  b.wtext(830, 388, 'myosin V：沿肌动蛋白双螺旋每 36 nm 步进（半个螺旋周期），沿丝的中线「走钢丝」；myosin II：占空比仅 ~4%，单体不能过程行走——肌肉中靠数百个头「接力」。', { size: 10.5, fill: C.sub, maxW: 500, lh: 14 })

  // ============ 二、两类驱动机制 ============
  b.panel(30, 436, 1340, 262, { title: '二、两种驱动极限：布朗棘轮 vs 能量冲程（真实马达多为杂化）' })

  // -- 左卡：布朗棘轮 --
  b.rect(50, 470, 610, 158, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.2, rx: 8 })
  b.text(70, 496, '布朗棘轮（Brownian ratchet）', { size: 13, weight: 700, fill: C.enzD })
  // 锯齿势 + 布朗粒子 + 选择性锁定
  b.path('M 90,560 L 150,514 L 150,560 L 210,514 L 210,560 L 270,514 L 270,560', { stroke: C.enz, sw: 2.4, fill: 'none' })
  b.circle(180, 537, 7, { fill: C.ink })
  b.arrow(158, 502, 176, 502, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(176, 502, 194, 502, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.line(150, 560, 150, 588, { stroke: C.bad, sw: 2.6 })
  b.ctext(168, 600, 'Pi 释放：选择性锁住前进态', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(330, 528, '做功来自对扩散的选择性捕获：先由热涨落产生随机小步（前 / 后皆可），化学反应「选择性锁住」前进态；步进与化学事件不必一一同步。', { size: 10.5, fill: C.sub, maxW: 310, lh: 14 })

  // -- 右卡：能量冲程 --
  b.rect(700, 470, 650, 158, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.2, rx: 8 })
  b.text(720, 496, '能量冲程（power stroke）', { size: 13, weight: 700, fill: C.accD })
  // 肌动蛋白丝 + 杠杆臂摆动
  b.line(720, 560, 1000, 560, { stroke: C.bad, sw: 3 })
  b.line(720, 566, 1000, 566, { stroke: C.bad, sw: 3 })
  b.circle(860, 548, 12, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.line(848, 540, 812, 508, { stroke: C.acc, sw: 4 })
  b.line(872, 540, 908, 512, { stroke: C.accD, sw: 4 })
  b.path('M 826,534 Q 852,492 896,522', { stroke: C.enz, sw: 2, dash: '5 4', marker: 'enz', fill: 'none' })
  b.ctext(780, 524, '预存应变（上弦）', { size: 9.5, fill: C.accD })
  b.ctext(935, 524, '冲程后', { size: 9.5, fill: C.accD })
  b.wtext(1040, 528, '化学态变化直接引发马达结构的大幅构象摆动（如杠杆臂偏转），像释放的弹簧一样定向做功。', { size: 10.5, fill: C.sub, maxW: 290, lh: 14 })
  b.wtext(720, 598, '杂化实例：kinesin 前头结合微管后，颈部连接 docking 提供约 15 pN·nm 的前向偏置（冲程成分）；前头还要经历 ~8 nm 的受限扩散才能捕获下一个结合位点（棘轮成分）。', { size: 10, fill: C.mute, maxW: 610, lh: 13.5 })

  // Feynman 注
  b.wtext(50, 666, 'Feynman 棘轮–棘爪早已证明：与单一热源平衡且无耗散的装置不能定向做功。马达定向性的物理本质是 ATP 水解的不可逆性（远离平衡）打破细致平衡——以化学自由能的耗散为代价，从热噪声中「采购」定向运动。', { size: 10.5, fill: C.sub, maxW: 1280, lh: 14 })

  // ============ 三、步进统计 ============
  b.panel(30, 722, 1340, 258, { title: '三、步进统计：步长直方图与 F₁ 的 120° 台阶' })

  // -- 左：步长直方图 --
  b.axis(90, 930, 560, 140, {
    title: 'kinesin 步长直方图（横轴：步长 / nm）',
    yticks: [[0, '0'], [1, '计数']],
    ylabel: '频数',
    grid: false,
  })
  b.bars(110, 930, 520, 140, [3, 14, 2, 56, 5], { labels: ['−16', '−8', '0', '+8', '+16'], fill: C.accL, stroke: C.acc, max: 70 })
  b.ctext(474, 810, '主峰 +8 nm', { size: 11, weight: 700, fill: C.accD })
  b.ctext(266, 894, '背步 −8 nm', { size: 10, weight: 700, fill: C.bad })

  // -- 右：F₁ 旋转台阶 --
  b.axis(740, 930, 560, 140, {
    title: 'F₁-ATP 合酶旋转角（低 ATP）',
    xticks: [[0, '0'], [1, 't']],
    yticks: [[0, '0°'], [0.333, '120°'], [0.667, '240°'], [1, '360°']],
    ylabel: '角度',
    grid: false,
  })
  b.curve(740, 930, 560, 140, [
    [0, 0], [0.06, 0], [0.06, 0.222], [0.14, 0.222], [0.14, 0.333], [0.26, 0.333],
    [0.26, 0.555], [0.34, 0.555], [0.34, 0.667], [0.46, 0.667], [0.46, 0.889], [0.54, 0.889], [0.54, 1], [0.92, 1],
  ], { stroke: C.acc, sw: 3 })
  b.ctext(796, 890, '80°', { size: 10, weight: 700, fill: C.accD })
  b.ctext(851, 874, '40°', { size: 10, weight: 700, fill: C.enzD })
  b.legend(790, 958, [['ATP 结合 → 80°', C.acc], ['水解 / 产物释放 → 40°', C.enz]], { size: 10.5, gap: 18 })
  b.wtext(90, 972, '驻留时间涨落明显：低 ATP 下步进间隔近似泊松过程（随机度 ~1）；高 ATP 下 F₁ 接近匀速——「马达的钟表」在分子尺度其实是统计规律。', { size: 9.5, fill: C.sub, maxW: 1240, lh: 12 })
}

export default scene({
  title: '分子马达的随机步进：布朗棘轮与能量冲程',
  subtitle: 'kinesin-1 恒定 8 nm 步长、与 ATP 水解 1:1 耦合；棘轮 = 选择性捕获热涨落，冲程 = 构象摆动直接做功（kinesin 杂化：15 pN·nm 偏置 + ~8 nm 受限扩散）；F₁ 台阶 120° = 80° + 40°',
  draw,
})
