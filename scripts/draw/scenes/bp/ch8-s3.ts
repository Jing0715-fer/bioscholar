// bp ch8-s3 单通道行为与马尔可夫模型（39-e 收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、单通道记录：随机构象跃迁子 ============
  b.panel(30, 132, 660, 420, { title: '一、单通道记录：通道是「随机构象跃迁子」' })
  b.axis(70, 360, 560, 170, {
    xlabel: '时间 t（s）——恒定电压、恒定配体',
    yticks: [[0, '0'], [1, 'i']],
    xticks: [[0, '0'], [0.25, '1'], [0.5, '2'], [0.75, '3'], [1, '4']],
  })
  const trace: [number, number][] = [
    [0, 0], [0.06, 0], [0.06, 1], [0.16, 1], [0.16, 0], [0.21, 0], [0.21, 1], [0.235, 1], [0.235, 0], [0.34, 0],
    [0.34, 1], [0.42, 1], [0.42, 0], [0.45, 0], [0.45, 1], [0.58, 1], [0.58, 0], [0.62, 0], [0.62, 1], [0.635, 1],
    [0.635, 0], [0.75, 0], [0.75, 1], [0.9, 1], [0.9, 0], [1, 0],
  ]
  b.curve(70, 360, 560, 170, trace, { stroke: C.enz, sw: 2.2 })
  b.ctext(668, 216, '开放', { size: 9.5, weight: 700, fill: C.enzD })
  b.ctext(668, 352, '关闭', { size: 9.5, weight: 700, fill: C.mute })
  b.text(70, 432, '开放与关闭的时长随机分布——但服从确定的统计规律（单通道电导 g = i/V 是家族「指纹」）', { size: 10, weight: 600, fill: C.sub })
  b.tag(330, 470, '开放概率 P_o：长时间记录中开放时间的占比，可从 0 到 >0.9', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 10 })
  b.tag(330, 512, 'I = N·P_o·g·(V − E_rev)', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 12 })
  b.wtext(70, 540, '宏观电流与单分子行为的桥梁：全细胞电流的任何变化都可分解为 N（通道数）、P_o 或 g 的变化——药理学、遗传学与生物物理记在同一张账上。', { size: 9.5, fill: C.mute, maxW: 560, lh: 13 })

  // ============ 二、马尔可夫状态图 ============
  b.panel(710, 132, 660, 420, { title: '二、马尔可夫状态图：离散状态 + 速率常数 k_ij 跃迁' })
  const st: Array<[number, string, string, string, string]> = [
    [770, 'C₂', '关闭', C.panelB, C.sub],
    [910, 'C₁', '关闭', C.panelB, C.sub],
    [1050, 'O', '开放', C.okL, C.ok],
    [1190, 'I', '失活', C.panelB, C.mute],
  ]
  for (const [x, lab, sub, fill, stroke] of st) {
    b.circle(x, 240, 30, { fill, stroke, sw: 2.4 })
    b.ctext(x, 245, lab, { size: 14, weight: 700, fill: stroke === C.ok ? C.okD : C.ink })
    b.ctext(x, 292, sub, { size: 9.5, fill: C.mute })
  }
  // 跃迁箭头（正向上弧 / 返向下弧）
  b.arrow(802, 228, 878, 228, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(878, 252, 802, 252, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(942, 228, 1018, 228, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(1018, 252, 942, 252, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(1082, 228, 1158, 228, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(1160, 252, 1090, 252, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.path('M 1214,268 C 1300,330 850,340 776,270', { stroke: C.mute, sw: 1.8, marker: 'mute', dash: '5 4', fill: 'none' })
  b.ctext(995, 322, '失活 → 复活', { size: 9, fill: C.mute })
  b.text(730, 350, '某状态的驻留时间分布为指数；多个指数之和 → 多个串行关闭态', { size: 10.5, weight: 600, fill: C.ink })
  b.text(730, 362, 'HH 模型的 m³h、n⁴ 门控即隐式马尔可夫模型；速率图可由单通道记录以最大似然法直接估计——突变 / 药物即改写个别 k_ij', { size: 9.5, fill: C.sub })
  // 驻留时间直方图（指数）
  b.axis(740, 528, 260, 135, {
    title: '驻留时间分布（指数衰减）',
    xticks: [[0, '0'], [1, '驻留时长 →']],
    yticks: [[0, '0'], [1, '频数']],
  })
  b.curve(740, 528, 260, 135, [
    [0.02, 1], [0.08, 0.62], [0.15, 0.4], [0.22, 0.26], [0.32, 0.16], [0.45, 0.09], [0.6, 0.05], [0.8, 0.025], [1, 0.015],
  ], { stroke: C.enz, sw: 2.6, smooth: true })
  // 家族电导柱状图
  b.text(1040, 384, '单通道电导 g（pS）：家族「指纹」', { size: 10.5, weight: 700, fill: C.ink })
  b.bars(1030, 528, 300, 135, [30, 20, 250], {
    labels: ['Kir', 'K_v', 'BK'],
    vlabels: ['10–30', '10–20', '~250'],
    max: 260, fill: C.dnaL, stroke: C.dna,
  })

  // ============ 三、P_o–电压 S 形曲线与通道噪声 ============
  b.panel(30, 572, 1340, 408, { title: '三、开放概率–电压 S 形（Boltzmann）曲线与通道噪声' })
  b.axis(80, 890, 560, 250, {
    xlabel: '膜电位 V（去极化方向 →）',
    yticks: [[0, '0'], [0.5, '0.5'], [1, '1.0']],
    xticks: [[0, '超极化'], [1, '去极化']],
  })
  b.text(96, 700, '开放概率 P_o', { size: 12, weight: 600, fill: C.sub })
  b.curve(80, 890, 560, 250, [
    [0, 0.02], [0.1, 0.04], [0.2, 0.08], [0.3, 0.16], [0.38, 0.28], [0.44, 0.42], [0.5, 0.5], [0.56, 0.58],
    [0.62, 0.72], [0.7, 0.84], [0.8, 0.92], [0.9, 0.96], [1, 0.98],
  ], { stroke: C.dna, sw: 3 })
  b.curve(80, 890, 560, 250, [
    [0.18, 0.02], [0.28, 0.04], [0.38, 0.08], [0.48, 0.16], [0.56, 0.28], [0.62, 0.42], [0.68, 0.5], [0.74, 0.58],
    [0.8, 0.72], [0.88, 0.84], [1, 0.92],
  ], { stroke: C.enz, sw: 2.6, dash: '7 5' })
  b.line(360, 640, 360, 890, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.line(80, 765, 640, 765, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.ctext(250, 790, 'V₁/₂（P_o = 0.5）', { size: 10, weight: 700, fill: C.sub })
  b.line(305, 786, 348, 770, { stroke: C.mute, sw: 1.2, dash: '4 3' })
  b.legend(120, 668, [['基础曲线', C.dna], ['突变 / 药物 / 配体调制（P_o 可 0 → >0.9）', C.enz]], { size: 10, gap: 16 })
  // 右卡：通道噪声
  b.rect(700, 610, 640, 340, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(716, 638, '通道噪声：从涨落到功能', { size: 13, weight: 700, fill: C.ink })
  const noise: Array<[string, number]> = [
    ['离子通道随机开合产生的膜噪声，设定神经元阈下信号检测的极限', 672],
    ['内耳毛细胞「听」到热噪声——布朗运动放大到可闻阈的物理背景', 704],
    ['随机共振：适度噪声反而提高弱信号检出率', 736],
  ]
  noise.forEach(([t, y]) => {
    b.circle(734, y - 4, 4, { fill: C.enz })
    b.text(746, y, t, { size: 10.5, weight: 600, fill: C.sub })
  })
  b.wtext(716, 790, '通道噪声并非「缺陷」而是功能资源：用速率常数写成的马尔可夫图，正是神经元膜上亿万个随机门共同演奏的总谱——单分子统计物理与神经科学的接口正在此处。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })
}

export default scene({
  title: '单通道行为与马尔可夫模型：随机构象跃迁子',
  subtitle: 'I = N·P_o·g·(V−E_rev) 连接单分子与全细胞；驻留时间指数分布 ↔ 马尔可夫状态图（HH 的 m³h、n⁴ 即隐式马尔可夫）；P_o–电压 S 形曲线（P_o 可 0 → >0.9）；膜噪声设定检测极限',
  draw,
})
