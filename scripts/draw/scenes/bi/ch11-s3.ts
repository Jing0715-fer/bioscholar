// bi ch11-s3 基因调控网络与通路建模（39-i 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、调控边的证据分层 ============
  b.panel(30, 132, 660, 420, { title: '一、调控边从哪里来：三类证据交集验证' })
  const ev: Array<[string, string, string, string]> = [
    ['ChIP-seq', '物理结合位点', C.dnaL, C.dna],
    ['表达扰动', '敲除 / 过表达 → 表型', C.accL, C.acc],
    ['基序富集', '启动子序列线索', C.proL, C.pro],
  ]
  ev.forEach(([t, s, f, st], i) => {
    b.rect(60, 190 + i * 78, 200, 58, { fill: f, stroke: st, sw: 1.7, rx: 8 })
    b.ctext(160, 214 + i * 78, t, { size: 13, weight: 700, fill: C.ink })
    b.ctext(160, 236 + i * 78, s, { size: 10.5, fill: C.sub })
  })
  b.arrow(262, 219, 346, 272, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.arrow(262, 297, 342, 297, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.arrow(262, 375, 346, 322, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.circle(390, 297, 42, { fill: C.panelB, stroke: C.sub, sw: 2.2 })
  b.ctext(390, 292, '三类证据', { size: 12, weight: 700, fill: C.ink })
  b.ctext(390, 310, '交集', { size: 12, weight: 700, fill: C.ink })
  b.arrow(436, 297, 478, 297, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.rect(482, 265, 176, 64, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(570, 289, '高置信调控边', { size: 13, weight: 700, fill: '#065f46' })
  b.ctext(570, 311, 'TF → 靶基因 · 方向明确', { size: 10.5, fill: C.sub })
  b.wtext(60, 442, '结合 ≠ 调控：ChIP-seq 只证物理结合、基序只给序列线索，须与扰动表型交集互证，才能为调控边赋予方向与置信度。', { size: 11.5, fill: C.sub, maxW: 608, lh: 16 })

  // ============ 二、布尔网络与吸引子 ============
  b.panel(710, 132, 660, 420, { title: '二、布尔网络：吸引子即细胞类型（Kauffman，1969）' })
  b.ctext(945, 192, '状态空间地形：整张网络的状态转移最终落入某个吸引子', { size: 11.5, fill: C.mute })
  b.curve(740, 430, 410, 170, [
    [0, 0.5], [0.06, 0.62], [0.13, 0.12], [0.22, 0.3], [0.3, 0.66], [0.5, 0.72],
    [0.7, 0.66], [0.78, 0.3], [0.87, 0.12], [0.94, 0.62], [1, 0.5],
  ], { stroke: C.dna, sw: 2.4, smooth: true })
  // 状态在盆内滚落（沿地形下方滑向谷底）
  b.arrow(850, 318, 824, 372, { stroke: C.mute, sw: 1.4, marker: 'mute', dash: '5 4' })
  b.arrow(1040, 318, 1066, 372, { stroke: C.mute, sw: 1.4, marker: 'mute', dash: '5 4' })
  b.circle(793, 402, 7, { fill: C.ok, stroke: C.ok, sw: 1.5 })
  b.circle(1097, 402, 7, { fill: C.acc, stroke: C.acc, sw: 1.5 })
  b.path('M 812,388 Q 945,180 1082,388', { fill: 'none', stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(945, 258, '分化 = 吸引子间跃迁', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(793, 452, '吸引子 1', { size: 11, weight: 700, fill: C.ink })
  b.ctext(793, 468, '细胞类型 A', { size: 10.5, fill: C.mute })
  b.ctext(1097, 452, '吸引子 2', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1097, 468, '细胞类型 B', { size: 10.5, fill: C.mute })
  b.wtext(1180, 200, 'Kauffman（1969）：细胞类型即吸引子，分化即吸引子间的跃迁。', { size: 11, fill: C.sub, maxW: 165, lh: 15 })
  b.wtext(1180, 288, '平均连接数 K=2–3：网络处于「有序边缘」，可承载多吸引子而不失稳。', { size: 11, fill: C.sub, maxW: 165, lh: 15 })
  b.wtext(1180, 376, '更新规则 = 邻居状态的逻辑函数，用 AND / OR / NOT 组合。', { size: 11, fill: C.sub, maxW: 165, lh: 15 })
  b.wtext(740, 506, '布尔网络把每个基因当作开关（0 / 1）：吸引子对应稳定表达态，是离散逻辑的动力学。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、布尔网络 vs ODE ============
  b.panel(30, 576, 660, 404, { title: '三、布尔网络 vs ODE：两种建模范式' })
  b.table(60, 626, 610, {
    headers: ['维度', '布尔网络', 'ODE 模型'],
    colW: [100, 235, 275],
    rowH: 34,
    fontSize: 11.5,
    rows: [
      ['状态取值', '离散 0 / 1 开关', '连续浓度（速率方程）'],
      ['能回答', '吸引子、稳定态、定性趋势', '振荡、双稳态、切换的定量轨迹'],
      ['主要瓶颈', '无时间刻度、过于定性', '参数饥渴、可辨识性差'],
    ],
  })
  b.axis(70, 930, 190, 118, {
    title: '双稳态：S 形切换',
    xticks: [[0, '低'], [1, '高']],
    xlabel: '诱导信号 →',
  })
  b.curve(70, 930, 190, 118, [
    [0, 0.05], [0.18, 0.09], [0.34, 0.3], [0.5, 0.5], [0.66, 0.72], [0.82, 0.93], [1, 0.97],
  ], { stroke: C.dna, sw: 2.4 })
  b.wtext(300, 812, 'ODE 以速率方程刻画连续浓度动力学，可定量再现双稳态（左图）、振荡与切换；但参数多而数据少（参数饥渴）、可辨识性差——敏感性分析用来定位最值得干预的「把手」参数。', { size: 11, fill: C.sub, maxW: 355, lh: 15 })

  // ============ 四、阻遏振荡器 ============
  b.panel(710, 576, 660, 404, { title: '四、阻遏振荡器：干预测、湿验证（Elowitz 与 Leibler，2000）' })
  const inh = (a: [number, number], t: [number, number]) => {
    const dx = t[0] - a[0], dy = t[1] - a[1]
    const len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len
    const sx = a[0] + ux * 40, sy = a[1] + uy * 40
    const ex = t[0] - ux * 44, ey = t[1] - uy * 44
    b.line(sx, sy, ex, ey, { stroke: C.bad, sw: 2 })
    const px = -uy, py = ux
    b.line(ex - px * 8, ey - py * 8, ex + px * 8, ey + py * 8, { stroke: C.bad, sw: 2.4 })
  }
  const tetR: [number, number] = [900, 668]
  const lacI: [number, number] = [800, 800]
  const cIp: [number, number] = [1000, 800]
  inh(tetR, lacI)
  inh(lacI, cIp)
  inh(cIp, tetR)
  const nodes: Array<[[number, number], string]> = [[tetR, 'TetR'], [lacI, 'lacI'], [cIp, 'cI']]
  nodes.forEach(([p, s]) => {
    b.circle(p[0], p[1], 34, { fill: C.dnaL, stroke: C.dna, sw: 2 })
    b.ctext(p[0], p[1] + 4, s, { size: 13, weight: 700, fill: C.dnaD })
  })
  b.ctext(838, 716, '抑制', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(900, 782, '抑制', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(975, 724, '抑制', { size: 10.5, weight: 700, fill: C.bad })
  b.axis(1080, 880, 250, 150, {
    title: '报告荧光随时间振荡',
    xticks: [[0, '时间 →']],
  })
  b.curve(1080, 880, 250, 150, [
    [0, 0.5], [0.09, 0.95], [0.18, 0.05], [0.27, 0.95], [0.36, 0.05], [0.45, 0.95],
    [0.54, 0.05], [0.63, 0.95], [0.72, 0.05], [0.81, 0.95], [0.9, 0.05], [1, 0.5],
  ], { stroke: C.enz, sw: 2.2, smooth: true })
  b.wtext(1080, 946, '周期与幅度受表达噪声扰动', { size: 10.5, fill: C.mute, maxW: 250, lh: 14 })
  b.wtext(724, 880, 'TetR 抑制 lacI、lacI 抑制 cI、cI 抑制 TetR——环形互抑驱动周期振荡，并暴露表达噪声。', { size: 11, fill: C.sub, maxW: 330, lh: 15 })
  b.wtext(724, 938, '「干预测、湿验证」：模型预测干预效果 → 湿实验回验 → 数据回流修正模型。', { size: 11, fill: C.sub, maxW: 330, lh: 15 })
}

export default scene({
  title: '基因调控网络建模：布尔吸引子、ODE 动力学与阻遏振荡器',
  subtitle: '三类证据交集成边；布尔吸引子对应细胞类型（Kauffman 1969）；ODE 再现振荡与双稳态；阻遏振荡器（2000）干预测、湿验证',
  draw,
})
