// em ch6-s1 水的玻璃化原理（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、水的相图（示意） ============
  b.panel(30, 132, 700, 300, { title: '一、水的相图（示意）：冰 Ih、冰 III 与玻璃态' })
  b.rect(90, 186, 570, 197, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.polygon([[90, 245], [567, 245], [609, 383], [90, 383]], { fill: C.dnaL, fillOp: 0.5 })
  b.polygon([[90, 186], [540, 186], [567, 245], [90, 245]], { fill: C.rnaL, fillOp: 0.45 })
  b.polygon([[609, 383], [660, 383], [660, 186], [540, 186], [567, 245]], { fill: C.accL, fillOp: 0.55 })
  b.path('M 609,383 C 595,332 580,288 567,245', { stroke: C.acc, sw: 2.6 })
  b.path('M 567,245 C 558,225 549,205 540,186', { stroke: C.acc, sw: 1.6, dash: '5 4' })
  b.line(90, 245, 567, 245, { stroke: C.sub, sw: 1.2, dash: '4 4' })
  b.text(84, 386, '1', { size: 9.5, fill: C.mute, anchor: 'end' })
  b.text(84, 249, '约 2100', { size: 9.5, fill: C.mute, anchor: 'end' })
  b.text(84, 190, '3000', { size: 9.5, fill: C.mute, anchor: 'end' })
  b.text(92, 176, '压力 P（bar）', { size: 10.5, fill: C.sub })
  b.line(536, 186, 536, 383, { stroke: C.bad, sw: 1.6, dash: '6 4' })
  b.ctext(536, 176, 'T_{H} ≈ 235 K', { size: 10, weight: 700, fill: C.badD })
  b.line(348, 186, 348, 383, { stroke: C.enz, sw: 1.6, dash: '6 4' })
  b.ctext(348, 176, 'T_{g} ≈ 136 K', { size: 10, weight: 700, fill: C.enzD })
  b.rect(90, 186, 258, 197, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.5, dash: '7 5' })
  b.text(100, 208, '玻璃态（非平衡，急冷可及）', { size: 10, weight: 700, fill: C.enzD })
  b.text(455, 200, '冰 III（高压稳定相）', { size: 10, weight: 700, fill: C.rnaD, anchor: 'middle' })
  b.text(470, 231, 'HPF：约 2100 bar，冰点约 −22 °C', { size: 9.5, weight: 700, fill: C.warnD, anchor: 'middle' })
  b.circle(567, 245, 5, { fill: C.warn, stroke: '#78350f', sw: 1.2 })
  b.ctext(442, 290, '过冷与「无人区」：136–235 K', { size: 10, fill: C.sub })
  b.text(505, 340, '冰 I_h（六方冰）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(628, 335, '液态水', { size: 10.5, weight: 700, fill: C.accD })
  b.line(90, 383, 672, 383, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(348, 400, '136', { size: 9.5, fill: C.mute })
  b.ctext(536, 400, '235', { size: 9.5, fill: C.mute })
  b.ctext(609, 400, '273', { size: 9.5, fill: C.mute })
  b.text(672, 400, 'T（K）', { size: 9.5, fill: C.sub, anchor: 'end' })
  b.wtext(90, 422, '慢冷落入冰 I_h、高压落入冰 III；急冷跳过成核动力学直抵 T_{g} 以下——玻璃化是「绕过结晶」而非平衡第四相。', { size: 9.5, fill: C.sub, maxW: 570, lh: 13 })

  // ============ 二、临界冷却速率：跳过无人区 ============
  b.panel(750, 132, 620, 300, { title: '二、临界冷却速率：跳过「无人区」的跳栏' })
  b.rect(790, 178, 250, 205, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.rect(790, 222, 250, 61, { fill: C.badL, fillOp: 0.3 })
  b.ctext(970, 268, '「无人区」', { size: 9.5, weight: 700, fill: C.sub })
  b.line(790, 222, 1040, 222, { stroke: C.bad, sw: 1.5, dash: '6 4' })
  b.text(1036, 216, 'T_{H} ≈ 235 K', { size: 9.5, fill: C.badD, anchor: 'end' })
  b.line(790, 283, 1040, 283, { stroke: C.enz, sw: 1.5, dash: '6 4' })
  b.text(1036, 277, 'T_{g} ≈ 136 K', { size: 9.5, fill: C.enzD, anchor: 'end' })
  b.curve(790, 383, 250, 205, [[0.03, 0.91], [0.15, 0.87], [0.3, 0.82], [0.45, 0.78]], { stroke: C.bad, sw: 2.4, smooth: true })
  b.polygon([[895, 222], [902, 215], [909, 222], [902, 229]], { fill: C.bad })
  b.ctext(902, 246, '慢冷：成核结晶（冰 I_h / I_c）', { size: 9.5, weight: 600, fill: C.badD })
  b.curve(790, 383, 250, 205, [[0.02, 0.9], [0.08, 0.66], [0.14, 0.45], [0.2, 0.27], [0.26, 0.13], [0.32, 0.05]], { stroke: C.dna, sw: 3, smooth: true })
  b.text(860, 316, '急冷：跳过无人区', { size: 10, weight: 700, fill: C.dnaD })
  b.line(784, 196, 790, 196, { stroke: C.sub, sw: 1.5 })
  b.text(780, 200, '273 K', { size: 9.5, fill: C.mute, anchor: 'end' })
  b.line(784, 222, 790, 222, { stroke: C.sub, sw: 1.5 })
  b.text(780, 226, '235', { size: 9.5, fill: C.mute, anchor: 'end' })
  b.line(784, 283, 790, 283, { stroke: C.sub, sw: 1.5 })
  b.text(780, 287, '136', { size: 9.5, fill: C.mute, anchor: 'end' })
  b.line(790, 383, 1050, 383, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(915, 404, '时间（对数示意）', { size: 10, fill: C.sub })
  b.tag(1205, 200, '纯水门槛：大于约 10^{6}–10^{7} K/s', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(1060, 232, '悬液里的盐、缓冲组分与蛋白是天然抗成核剂；薄膜内成核体积小、统计上难被命中——门槛被压到 10^{5}–10^{6} K/s 的实测可及范围。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.tag(1205, 296, '液氮 77 K：Leidenfrost 气膜掐断热流', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10, weight: 700, pad: 8 })
  b.tag(1205, 328, '液态乙烷约 90 K：液-液接触，换热高约一个数量级', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10, weight: 700, pad: 8 })
  b.wtext(1060, 366, '丙烷（熔点约 86 K、液态温区更宽）同样胜任；制冷剂的选择是传热的工程，而非温度的算术。', { size: 10, fill: C.mute, maxW: 290, lh: 14 })

  // ============ 三、形态判据：衍射指纹 ============
  b.panel(30, 456, 1340, 300, { title: '三、形态判据：衍射指纹与四形态对照' })
  b.circle(185, 590, 66, { stroke: C.enz, sw: 16, opacity: 0.28 })
  b.circle(185, 590, 66, { stroke: C.enz, sw: 2 })
  b.circle(185, 590, 4, { fill: C.ink })
  b.text(258, 545, '约 2.8 Å', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(185, 700, '玻璃冰：宽弥散晕环、绝无锐环', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(185, 718, '极大位置约 2.8 Å，随受热历史移向 3.7 Å', { size: 9.5, fill: C.sub })
  b.ctext(330, 594, 'vs', { size: 13, weight: 700, fill: C.mute })
  b.circle(475, 590, 48, { stroke: C.bad, sw: 2.4 })
  b.circle(475, 590, 78, { stroke: C.bad, sw: 2.4 })
  b.circle(475, 590, 4, { fill: C.ink })
  b.text(516, 556, '3.67 Å', { size: 9.5, weight: 700, fill: C.badD })
  b.text(536, 528, '1.92 Å', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(475, 700, '结晶冰：尖锐环（六方与立方共有强反射位置）', { size: 11, weight: 700, fill: C.badD })
  b.ctext(475, 718, '出现 3.67、1.92 Å 锐环即判定结晶', { size: 9.5, fill: C.sub })
  b.ctext(185, 740, '晕环位置的漂移是一次「温度履历」体检', { size: 9.5, fill: C.mute })
  b.table(620, 500, 730, {
    headers: ['形态', '形成条件', '衍射特征', '对样品'],
    colW: [110, 205, 225, 190], rowH: 33, fontSize: 10.5,
    rows: [
      ['玻璃冰', '约 10^{6} K/s 量级急冷', '约 2.8 Å 宽晕环、无锐环', '结构原样封存'],
      ['立方冰 I_c', '冷却不充分或退火', '尖锐环', '轻度畸变'],
      ['六方冰 I_h', '慢冷或升温重结晶', '3.67、1.92 Å 等锐环', '机械损伤、畸变'],
      ['回温的玻璃', '升至 T_g 以上软化', '晕环渐变', '流动破坏'],
    ],
  })
  b.wtext(620, 706, '反玻璃化的温度阶梯：越过约 136 K 玻璃先软化、晕环向低密度形态移动；约 160 K 上下立方冰锐环在晕环上发芽，数十秒内完成重结晶；继续退火转相六方——链路红线约 130 K 正是安全裕度。', { size: 10.5, fill: C.sub, maxW: 720, lh: 15 })

  // ============ 四、两条路线与 Dubochet 遗产 ============
  b.panel(30, 766, 1340, 212, { title: '四、两条玻璃化路线与 Dubochet 的方法论遗产' })
  b.rect(50, 800, 300, 150, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(66, 824, '无保护剂薄冰', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(66, 848, '小于 1 μm 水膜乙烷急冷；衬度干净、剂量负担最小；单颗粒分析的正规路线（20–60 e^{-}/Å^{2} 常规预算）。', { size: 10, fill: C.sub, maxW: 268, lh: 14 })
  b.tag(200, 906, '用速度与薄度换纯度', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 9.5, weight: 700, pad: 6 })
  b.rect(370, 800, 300, 150, { fill: C.warnL, fillOp: 0.6, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(386, 824, '深冷冻保护剂', { size: 12.5, weight: 700, fill: C.warnD })
  b.wtext(386, 848, '高浓度甘油或蔗糖玻璃化厚样品（组织块、细胞团）；代价是背景散射与剂量负担、渗透环境改变。', { size: 10, fill: C.sub, maxW: 268, lh: 14 })
  b.tag(520, 906, '用化学换深度', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 9.5, weight: 700, pad: 6 })
  b.wtext(50, 968, '两条路线的剂量账：1 μm 薄冰与 200 μm 高压冷冻样品的散射厚度相差约两百倍——后者须经 CEMOVIS 低温切片或冷冻替代才进透射窗口。', { size: 10, fill: C.mute, maxW: 620, lh: 13 })
  b.rect(700, 800, 640, 150, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(716, 824, 'Dubochet 1982：方法论闭环', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(716, 848, '薄液膜的制备、双侧急冷、液态乙烷制冷、低温转移与玻璃化程度检查（电子衍射验收：弥散晕环、绝无锐环）——完整闭环与 Lepault、Freeman 等发表于《Journal of Microscopy》。', { size: 10, fill: C.sub, maxW: 608, lh: 14 })
  b.wtext(716, 884, '同批图像里玻璃冰中的病毒与膜泡形态完好，证明急冷本身不伤样品；2017 年诺贝尔化学奖表彰 Dubochet、Frank 与 Henderson 三人，Dubochet 的获奖点正是「水的玻璃化及其在电镜中的应用」。', { size: 10, fill: C.sub, maxW: 608, lh: 14 })
  b.tag(1000, 934, '此后「原生水合状态」成为可日常操作的对象', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10, weight: 700, pad: 8 })
}

export default scene({
  title: '水的玻璃化原理：绕过结晶的第四条路',
  subtitle: 'T_{g} 约 136 K、均相成核 235 K 之间「无人区」；纯水需 10^{6}–10^{7} K/s、实测 10^{5}–10^{6}；玻璃冰判据 2.8 Å 晕环、无锐环',
  draw,
})
