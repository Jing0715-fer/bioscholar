// bp ch6-s4 单通道记录与单分子实验的统计学（39-e 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、膜片钳：GΩ 封接隔离单通道 ============
  b.panel(30, 132, 1340, 300, { title: '一、膜片钳：GΩ 封接把几 μm² 膜片上的单个通道与全细胞背景隔离' })

  // 左：仪器示意
  b.polygon([[235, 178], [305, 178], [290, 310], [250, 310]], { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.text(320, 200, '抛光玻璃微吸管', { size: 10, weight: 600, fill: C.sub })
  b.polyline([[270, 178], [270, 190], [420, 218]], { stroke: C.sub, sw: 2 })
  b.rect(430, 196, 140, 44, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(500, 222, 'pA 级电流放大', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(500, 262, '配合电压钳命令', { size: 9.5, fill: C.mute })
  b.bilayer(120, 330, 360, { h: 14, tint: C.dna })
  b.line(250, 312, 290, 312, { stroke: C.warn, sw: 5 })
  b.tag(386, 318, 'GΩ 级高阻封接', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: '#78350f', pad: 8 })
  b.rect(262, 322, 16, 30, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(270, 378, '单个离子通道', { size: 10, weight: 700, fill: C.proD })
  b.tag(170, 402, '1 pA ≈ 6×10⁶ 个单价离子/s', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(440, 402, 'Neher & Sakmann（1991 诺贝尔奖）', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 9 })

  // 右：单通道随机方波
  b.ctext(970, 208, '单通道电流记录：开–关随机跳变（示意）', { size: 12.5, weight: 700, fill: C.ink })
  b.axis(620, 340, 700, 120, {
    yticks: [[0, '关 C'], [1, '开 O']],
    xticks: [[0.97, '时间 →']],
  })
  const sq: [number, number][] = [
    [0, 0], [0.04, 0], [0.04, 1], [0.1, 1], [0.1, 0], [0.16, 0], [0.16, 1], [0.24, 1], [0.24, 0],
    [0.3, 0], [0.3, 1], [0.34, 1], [0.34, 0], [0.42, 0], [0.42, 1], [0.52, 1], [0.52, 0],
    [0.56, 0], [0.56, 1], [0.6, 1], [0.6, 0], [0.68, 0], [0.68, 1], [0.76, 1], [0.76, 0],
    [0.84, 0], [0.84, 1], [0.9, 1], [0.9, 0], [1, 0],
  ]
  b.curve(620, 340, 700, 120, sq, { stroke: C.enz, sw: 2.2 })
  b.wtext(620, 386, '驻留时间（dwell time）服从指数或指数和分布——与马尔可夫状态模型直接对应；各状态平均寿命 = 离开速率之和的倒数。', { size: 10.5, fill: C.sub, maxW: 690, lh: 14 })

  // ============ 二、电导指纹、P_o 与马尔可夫模型 ============
  b.panel(30, 448, 1340, 280, { title: '二、单通道电导是「指纹」；P_o 与马尔可夫模型连接单分子与宏观电流' })

  // 左：电导柱状图
  b.ctext(250, 486, '单通道电导 g（pS）——通道的「指纹」', { size: 12.5, weight: 700, fill: C.ink })
  b.line(80, 660, 420, 660, { stroke: C.sub, sw: 1.8 })
  const cond: Array<[number, number, number, string, string, string]> = [
    // x中心, vMin, vMax, 颜色, 值标签, 名称
    [135, 4, 20, C.acc, '4–20', 'K⁺ 通道'],
    [235, 40, 40, C.dna, '≈ 40', 'nAChR'],
    [335, 250, 250, C.pro, '≈ 250', 'BK 通道'],
  ]
  cond.forEach(([cx, v0, v1, col, vl, name], i) => {
    const y = (v: number) => 660 - (v / 287.5) * 170
    const fills = [C.accL, C.dnaL, C.proL]
    b.rect(cx - 25, y(v1), 50, 660 - y(v1), { fill: fills[i], stroke: col, sw: 1.8, rx: 3 })
    if (v0 !== v1) {
      b.line(cx, y(v0), cx, y(v1), { stroke: col, sw: 2.4 })
      b.line(cx - 9, y(v0), cx + 9, y(v0), { stroke: col, sw: 2 })
      b.line(cx - 9, y(v1), cx + 9, y(v1), { stroke: col, sw: 2 })
    }
    b.ctext(cx, y(v1) - 10, vl, { size: 11, weight: 700, fill: C.ink })
    b.ctext(cx, 678, name, { size: 11, fill: C.mute })
  })
  b.wtext(80, 700, '从 I–V 关系得单通道电导：I = g·(V − E_rev)', { size: 10.5, fill: C.sub, maxW: 360, lh: 13 })

  // 中：P_o 卡
  b.rect(460, 486, 420, 220, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(480, 512, '开放概率 P_o：核心读出', { size: 13, weight: 700, fill: C.ink })
  b.ctext(670, 544, 'P_o = T_open / (T_open + T_closed)', { size: 13.5, weight: 700, fill: C.ink })
  b.rect(480, 570, 120, 20, { fill: C.enz, stroke: C.enzD, sw: 1 })
  b.rect(600, 570, 80, 20, { fill: C.panel, stroke: C.line, sw: 1 })
  b.rect(680, 570, 60, 20, { fill: C.enz, stroke: C.enzD, sw: 1 })
  b.rect(740, 570, 120, 20, { fill: C.panel, stroke: C.line, sw: 1 })
  b.ctext(540, 562, '开放', { size: 9.5, weight: 700, fill: C.enzD })
  b.ctext(640, 562, '关闭', { size: 9.5, fill: C.mute })
  b.ctext(860, 562, '时间 →', { size: 9.5, fill: C.mute })
  b.wtext(480, 626, '从成千上万个事件提取的开放概率，是通道药理与生理调节的核心读出。', { size: 10.5, fill: C.sub, maxW: 380, lh: 14 })
  b.ctext(670, 692, '全细胞电流 I = N·P_o·g·(V − E_rev)', { size: 13, weight: 700, fill: C.accD })

  // 右：马尔可夫状态图
  b.rect(900, 486, 440, 220, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(920, 512, '马尔可夫状态模型', { size: 13, weight: 700, fill: C.ink })
  b.circle(990, 574, 26, { fill: C.panel, stroke: C.sub, sw: 2.2 })
  b.ctext(990, 578, 'C₁', { size: 13, weight: 700, fill: C.sub })
  b.circle(1130, 574, 26, { fill: C.panel, stroke: C.sub, sw: 2.2 })
  b.ctext(1130, 578, 'C₂', { size: 13, weight: 700, fill: C.sub })
  b.circle(1268, 574, 24, { fill: C.enzL, stroke: C.enz, sw: 2.4 })
  b.ctext(1268, 578, 'O', { size: 13.5, weight: 700, fill: C.enzD })
  b.arrow(1018, 564, 1102, 564, { stroke: C.enz, sw: 2 })
  b.arrow(1102, 586, 1018, 586, { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute' })
  b.arrow(1158, 564, 1242, 564, { stroke: C.enz, sw: 2 })
  b.arrow(1242, 586, 1158, 586, { stroke: C.mute, sw: 1.8, dash: '5 4', marker: 'mute' })
  b.wtext(920, 640, '门控本质是分子构象的随机跃迁；驻留时间分布与模型预测直接对应。', { size: 10.5, fill: C.sub, maxW: 400, lh: 14 })
  b.ctext(1120, 690, '各状态平均寿命 = 1 / Σ(离开速率)', { size: 12.5, weight: 700, fill: C.proD })

  // ============ 三、单分子实验的统计学 ============
  b.panel(30, 744, 1340, 236, { title: '三、单分子实验的统计学：泊松极限 1/√N、遍历性与测量扰动' })

  // 左：1/√N 曲线
  b.axis(100, 936, 540, 158, {
    xticks: [[0, '1'], [0.25, '10'], [0.5, '10²'], [0.75, '10³'], [1, '10⁴']],
    yticks: [[0, '0'], [0.5, '50%'], [1, '100%']],
  })
  b.ctext(54, 810, '相对误差', { size: 13, weight: 600, fill: C.sub })
  const pois: [number, number][] = []
  for (let i = 0; i <= 40; i++) {
    const fx = i / 40
    pois.push([fx, 1 / Math.sqrt(Math.pow(10, fx * 4))])
  }
  b.curve(100, 936, 540, 158, pois, { stroke: C.enz, sw: 3 })
  b.ctext(390, 800, '泊松计数极限：相对统计误差 ~ 1/√N', { size: 11.5, weight: 700, fill: C.enzD })
  b.circle(370, 936 - 0.1 * 158, 4.5, { fill: C.enz })
  b.ctext(370, 902, 'N = 100 → 10%', { size: 9.5, weight: 700, fill: C.sub })
  b.circle(640, 936 - 0.01 * 158, 4.5, { fill: C.enz })
  b.etext(628, 916, 'N = 10⁴ → 1%', { size: 9.5, weight: 700, fill: C.sub })
  b.ctext(370, 974, '事件数 N（对数刻度）——罕见事件需长时间采样', { size: 11.5, weight: 600, fill: C.sub })

  // 右：五条戒律
  b.rect(660, 770, 680, 196, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(680, 796, '单分子实验的五条统计戒律', { size: 13, weight: 700, fill: C.ink })
  const rules: Array<[string, number]> = [
    ['单事件随机、系综可预测——须用速率常数与分布函数描述', 826],
    ['泊松计数极限 ~ 1/√N：罕见事件（错误折叠、背步）需长时间采样', 858],
    ['最大似然 / 贝叶斯拟合：马尔可夫模型与力谱分析的标准工具', 890],
    ['遍历性在活细胞常被打破（时间平均 ≠ 系综平均）——非平衡标志', 922],
    ['测量反作用（光损伤、探针力）：「无损单分子观测」是工程折中', 954],
  ]
  rules.forEach(([t, y]) => {
    b.circle(694, y - 4, 4, { fill: C.acc })
    b.text(706, y, t, { size: 10.5, weight: 600, fill: C.sub })
  })
}

export default scene({
  title: '单通道记录与单分子统计：从 pA 方波到 P_o 与 1/√N',
  subtitle: 'GΩ 封接隔离几 μm² 膜片（1 pA ≈ 6×10⁶ 离子/s）；电导指纹：K⁺ 4–20 pS、nAChR ≈ 40 pS、BK ≈ 250 pS；P_o = T_open/(T_open+T_closed)，I = N·P_o·g·(V−E_rev)；泊松误差 ~ 1/√N',
  draw,
})
