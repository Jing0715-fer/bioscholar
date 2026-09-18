// ne ch6-s3 突触可塑性与学习记忆 / 长时程抑制与可塑性规则（39-h 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、小脑平行纤维 LTD ============
  b.panel(30, 132, 660, 430, { title: '一、小脑平行纤维 LTD：运动学习的计算基底（Ito 1982）' })
  // Purkinje 细胞（大胞体+树突）
  b.ellipse(180, 330, 34, 30, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 2 })
  b.ctext(180, 335, 'Purkinje', { size: 10.5, weight: 700, fill: C.proD })
  b.path('M180,300 C170,250 150,230 130,205', { stroke: C.pro, sw: 2 })
  b.path('M180,300 C192,250 212,228 234,204', { stroke: C.pro, sw: 2 })
  b.path('M180,300 L180,240', { stroke: C.pro, sw: 2 })
  // 平行纤维（横线）
  b.line(100, 236, 420, 236, { stroke: C.dna, sw: 2.4 })
  b.ctext(330, 222, '平行纤维 PF（颗粒细胞）', { size: 11, weight: 700, fill: C.dnaD })
  b.circle(180, 236, 5, { fill: C.dna })
  b.ctext(180, 258, 'PF–Purkinje 突触', { size: 10, fill: C.mute })
  // 爬行纤维
  b.path('M470,430 C450,380 420,360 320,352 C260,348 220,345 205,345', { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(490, 418, '爬行纤维 CF', { size: 11, weight: 700, fill: C.bad })
  b.ctext(490, 434, '（下橄榄核 · 误差信号）', { size: 10, fill: C.mute })
  // 联合刺激协议
  b.rect(100, 442, 560, 88, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(118, 468, '经典协议：PF 与 CF 按约 1 Hz 联合刺激数分钟', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(118, 490, 'PF 宜先于 CF 数十毫秒 → 平行纤维-Purkinje 突触的 AMPA 反应长时程下降——爬行纤维带来的误差信号「教会」Purkinje 细胞下调此前活跃的输入。', { size: 11, fill: C.sub, maxW: 520, lh: 16 })
  // 分子级联
  b.rect(440, 190, 236, 118, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.6, rx: 9 })
  b.text(456, 214, 'mGluR1–IP3–Ca²⁺ 汇合–PKC', { size: 12.5, weight: 700, fill: C.enzD })
  b.wtext(456, 236, 'mGluR1 → IP3 → 内质网释钙 → 与 PF 去极化钙汇合 → PKC 激活 → AMPA 受体内吞 → 突触电流长时程下降。', { size: 10.5, fill: C.sub, maxW: 204, lh: 15 })
  b.arrow(360, 244, 440, 248, { stroke: C.enz, sw: 2, marker: 'enz' })

  // ============ 二、海马双向开关 ============
  b.panel(710, 132, 660, 430, { title: '二、同一 NMDA 受体，双向开关：钙信号波形定方向' })
  b.tag(1040, 200, 'NMDA 受体（同一分子）', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 10 })
  // 两分支
  b.arrow(960, 226, 860, 276, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.arrow(1120, 226, 1220, 276, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.rect(740, 282, 260, 60, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(870, 304, '钙信号大而快', { size: 12.5, weight: 700, fill: '#065f46' })
  b.ctext(870, 324, '→ CaMKII 激酶路线', { size: 12, weight: 700, fill: '#065f46' })
  b.rect(1080, 282, 260, 60, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1210, 304, '钙信号小而慢', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(1210, 324, '→ 钙神经素–PP1 磷酸酶路线', { size: 12, weight: 700, fill: C.bad })
  b.arrow(870, 342, 870, 366, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.arrow(1210, 342, 1210, 366, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.tag(870, 396, 'LTP（增强）', { fill: C.okL, stroke: C.ok, size: 13.5, weight: 700, tfill: '#065f46', pad: 10 })
  b.tag(1210, 396, 'LTD（抑制）', { fill: C.badL, stroke: C.bad, size: 13.5, weight: 700, tfill: C.bad, pad: 10 })
  b.wtext(740, 448, 'Dudek 与 Bear 1992：以 1 Hz、约 900 个脉冲（约 15 分钟）刺激 Schaffer 侧枝，稳定诱出 CA1 突触反应的长时程下降——高频强直则走 LTP。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(740, 508, 'BCM 理论（1982）：修饰量是突触后活动的函数，低于滑动阈值 θm 诱发抑制、高于阈值诱发增强；阈值随平均活动滑动，防止单向发散。', { size: 11, fill: C.mute, maxW: 590, lh: 16 })

  // ============ 三、STDP ============
  b.panel(30, 578, 690, 396, { title: '三、峰时依赖可塑性：±20 ms 时间窗里的因果律' })
  b.axis(120, 880, 520, 260, {
    xlabel: 'Δt = t_post − t_pre（ms）',
    ylabel: '突触权重变化 ΔW',
    xticks: [[0, '−40'], [0.125, '−30'], [0.25, '−20'], [0.375, '−10'], [0.5, '0'], [0.625, '+10'], [0.75, '+20'], [0.875, '+30'], [1, '+40']],
    yticks: [[0.1, '−100%'], [0.3, '−50%'], [0.5, '0'], [0.7, '+50%'], [0.9, '+100%']],
  })
  // 零线
  b.line(120, 750, 640, 750, { stroke: C.mute, sw: 1.3, dash: '5 4', opacity: 0.8 })
  // LTP 支（pre 先于 post，Δt>0；A₊=1、τ₊≈20 ms）
  b.curve(120, 880, 520, 260, [
    [0.5, 0.9], [0.5625, 0.812], [0.625, 0.744], [0.6875, 0.689], [0.75, 0.648],
    [0.8125, 0.617], [0.875, 0.589], [0.9375, 0.568], [1.0, 0.554],
  ], { stroke: C.ok, sw: 3, smooth: true })
  // LTD 支（post 先于 pre，Δt<0；A₋≈0.5、τ₋≈40 ms）
  b.curve(120, 880, 520, 260, [
    [0, 0.404], [0.0625, 0.397], [0.125, 0.388], [0.1875, 0.383], [0.25, 0.378],
    [0.3125, 0.355], [0.375, 0.344], [0.4375, 0.323], [0.4875, 0.306], [0.5, 0.30],
  ], { stroke: C.bad, sw: 3, smooth: true })
  b.wtext(448, 612, 'pre 先于 post：先因后果 → 增强', { size: 12, weight: 700, fill: '#065f46', maxW: 200, lh: 16 })
  b.wtext(140, 612, '次序颠倒 → 抑制', { size: 12, weight: 700, fill: C.bad, maxW: 140, lh: 16 })
  b.ctext(640, 940, 'Bi 与 Poo 1998 于海马培养神经元系统测量；窗口以 ±20 ms 为典型量级', { size: 11, fill: C.mute })

  // ============ 四、突触标签与稳态可塑性 ============
  b.panel(740, 578, 630, 396, { title: '四、突触标签与稳态可塑性：不许失控' })
  b.text(760, 646, '突触标签假说：局部标签 + 全局货物', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(760, 668, '弱刺激只在突触上留下可逆的「局部标签」；强刺激驱动 PKA 入核、CREB 转录，产出「全局货物」随扩散送达。在时间窗内标签捕捉到货物，弱输入即可搭便车转为长时增强——突触特异性与核基因表达由此调和。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.rect(760, 742, 180, 44, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 8 })
  b.ctext(850, 762, '弱输入：设标签', { size: 11.5, weight: 700, fill: '#92400e' })
  b.ctext(850, 778, '（仅磷酸化 · 可逆）', { size: 10, fill: C.mute })
  b.rect(980, 742, 180, 44, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(1070, 762, '强输入：产货物', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(1070, 778, '（PKA·CREB·新蛋白）', { size: 10, fill: C.mute })
  b.arrow(940, 764, 980, 764, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(960, 748, '搭便车', { size: 10.5, weight: 700, fill: C.sub })
  b.text(760, 826, '稳态可塑性：把活动拉回设定点', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(760, 848, 'Hebb 正反馈若无刹车将发散失控。多级闸门：① 突触缩放——Turrigiano 等 1998 年用河豚毒素阻断活动一至两天后，培养神经元整体上调突触强度以补偿；② 内在兴奋性调节（离子通道表达的慢调整）；③ 睡眠去权——整体减弱 synaptic 权重，为次日学习腾出容量。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
}

export default scene({
  title: '长时程抑制与可塑性规则：双向开关、±20 ms 因果窗与稳态刹车',
  subtitle: '同一 NMDA 受体以钙信号波形定方向；STDP 把因果律写进毫秒级时序；稳态可塑性防 Hebb 正反馈发散',
  draw,
})
