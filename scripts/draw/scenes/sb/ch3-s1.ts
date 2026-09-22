// sb ch3-s1 层析分离的物理化学基础（Task 4-a）
import { scene, C, B } from '../../lib'

/** 高斯峰路径（色谱图用） */
const gauss = (mu: number, sig: number, amp: number, base: number) => {
  const segs: string[] = []
  for (let x = mu - 3.2 * sig; x <= mu + 3.2 * sig; x += 3) {
    segs.push(`${x.toFixed(1)},${(base - amp * Math.exp(-((x - mu) ** 2) / (2 * sig * sig))).toFixed(1)}`)
  }
  return `M ${mu - 3.2 * sig},${base} L ${segs.join(' L ')} L ${mu + 3.2 * sig},${base} Z`
}

const draw = (b: B) => {
  // ============ 一、保留与分配 ============
  b.panel(30, 132, 660, 430, { title: '一、保留与分配：层析的基本语言' })
  b.wtext(50, 170, '层析由携带样品流动的流动相与固定在柱内的固定相构成，分子在两相间反复分配。分配系数 K_{d} 越大，滞留越久、保留体积 V_{e} 越大：', { maxW: 610, lh: 15, size: 10.5, fill: C.sub })
  b.arrow(66, 204, 334, 204, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(200, 196, '流动相（洗脱液）', { size: 9.5, fill: C.mute })
  b.rect(60, 216, 280, 60, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 8 })
  for (let bx = 74; bx <= 326; bx += 25) {
    for (let by = 230; by <= 264; by += 17) b.circle(bx, by, 6.5, { fill: '#ffffff', stroke: C.faint, sw: 1.2 })
  }
  b.circle(105, 247, 5.5, { fill: C.enz })
  b.circle(185, 247, 5.5, { fill: C.dna })
  b.ctext(140, 294, '溶质 A：K_{d} 小，先流出', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(285, 294, '溶质 B：K_{d} 大，后流出', { size: 10, weight: 700, fill: C.dnaD })
  b.tag(150, 322, 'V_{e} = V_{0} + K_{d}·V_{s}', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(360, 322, 'R_{s} = 2(V_{2} − V_{1})/(w_{1} + w_{2})', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 8 })
  b.tag(565, 322, 'k′ = (V_{e} − V_{0})/V_{0}', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  // 色谱图
  b.axis(60, 470, 590, 130, {
    xlabel: '流出体积（柱体积 CV）',
    xticks: [[0.06, 'V_{0}'], [0.28, 'V_{1}'], [0.63, 'V_{2}'], [0.95, 'V_{t}']],
  })
  b.path(gauss(225, 30, 62, 468), { fill: '#e2e8f0', stroke: C.mute, sw: 1.8 })
  b.path(gauss(418, 34, 92, 468), { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(225, 392, '峰 1（杂质）', { size: 10.5, weight: 700, fill: C.mute })
  b.ctext(418, 360, '峰 2（目标蛋白）', { size: 11, weight: 700, fill: C.accD })
  b.tag(560, 420, 'R_{s} 达 1.5＝基线分离', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 7 })
  b.line(165, 508, 285, 508, { stroke: C.mute, sw: 1.4 })
  b.line(165, 502, 165, 514, { stroke: C.mute, sw: 1.4 })
  b.line(285, 502, 285, 514, { stroke: C.mute, sw: 1.4 })
  b.ctext(225, 528, 'w_{1}', { size: 9.5, fill: C.mute })
  b.line(310, 508, 526, 508, { stroke: C.mute, sw: 1.4 })
  b.line(310, 502, 310, 514, { stroke: C.mute, sw: 1.4 })
  b.line(526, 502, 526, 514, { stroke: C.mute, sw: 1.4 })
  b.ctext(418, 528, 'w_{2}', { size: 9.5, fill: C.mute })
  b.wtext(50, 548, 'R_{s} 达 1.5 视为基线分离，1.0 时仍有约 2% 交叉污染；k′ 以 1 至 10 为优，选择性 α = k′_{2}/k′_{1}。优化顺序：先改选择性（换机理、换 pH），再补柱效（加长柱），最后才调流速。', { maxW: 620, lh: 13, size: 10, fill: C.sub })

  // ============ 二、塔板理论与 van Deemter ============
  b.panel(710, 132, 660, 430, { title: '二、塔板理论与 van Deemter 三项权衡' })
  b.tag(870, 164, 'N = 16(t_{R}/w_{b})^{2}', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(1130, 164, 'HETP = L/N', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 8 })
  b.ctext(855, 188, '同一根柱：t_{R} = 30 min', { size: 10, weight: 700, fill: C.ink })
  b.bars(740, 276, 230, 80, [14400, 3600], { labels: ['w_{b} 1 min', 'w_{b} 2 min'], vlabels: ['N = 14400', 'N = 3600'], fill: C.dnaL, stroke: C.dna })
  b.wtext(740, 322, '峰宽自 1 分钟增至 2 分钟，塔板数跌至四分之一——分辨率几乎腰斩；装填质量与操作纪律立竿见影。', { maxW: 280, lh: 14, size: 10, fill: C.sub })
  b.axis(740, 513, 290, 150, {
    title: 'H = A + B/u + C·u',
    xlabel: '线性流速 u', ylabel: '塔板高度 H',
    xticks: [[0.12, '低'], [0.5, '中'], [0.9, '高']],
    yticks: [[0, '0'], [1, '']],
  })
  b.curve(740, 513, 290, 150, [[0.03, 0.86], [0.1, 0.5], [0.2, 0.32], [0.35, 0.22], [0.5, 0.26], [0.7, 0.4], [0.92, 0.6]], { smooth: true, stroke: C.acc, sw: 2.6 })
  b.line(841, 513, 841, 383, { stroke: C.mute, sw: 1.2, dash: '5 4' })
  b.ctext(841, 452, 'u_{opt} = (B/C)^{1/2}', { size: 10, weight: 700, fill: C.accD })
  b.ctext(790, 412, 'B/u 纵向扩散', { size: 9.5, weight: 700, fill: C.mute })
  b.ctext(1000, 408, 'C·u 传质阻力', { size: 9.5, weight: 700, fill: C.mute })
  b.line(745, 490, 1025, 490, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.ctext(885, 505, 'A 涡流扩散（正比粒径）', { size: 9, fill: C.mute })
  b.wtext(1060, 188, '蛋白扩散系数仅约 10^{-6} cm^{2}/s，比小分子低一至两个数量级，C 项传质阻力对蛋白尤其苛刻——常规琼脂糖介质宜在约 30 至 150 cm/h 低线速运行，只有足够细的介质才配得上高流速。', { maxW: 280, lh: 14, size: 10, fill: C.sub })
  b.tag(1205, 288, '冷间 4–8 °C：标称流速再降三至五成', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 8 })
  b.wtext(1060, 320, '优质分析柱每米可达数万至十余万塔板；一支 30 cm 排阻柱通常给出约一万至两万塔板。塔板数正比柱长、反比粒径平方——加长柱或换细介质都提高分辨率，后者幅度大得多。', { maxW: 280, lh: 14, size: 10, fill: C.sub })
  b.wtext(1060, 412, '流程经济学：细介质更贵、更怕堵塞，捕获用的粗介质反而耐用——把贵介质留给最后的精纯。', { maxW: 280, lh: 14, size: 10, fill: C.sub })
  b.tag(1205, 496, '柱外展宽：管路与检测池尽量短细', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })

  // ============ 三、流速、柱压与粒径谱系 ============
  b.panel(30, 578, 660, 380, { title: '三、流速换算、柱压与粒径谱系' })
  b.tag(350, 618, '体积流速（mL/min）= 线性流速 × 柱截面积 ÷ 60', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(185, 652, '内径 16 mm＝截面积约 2 cm^{2}', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.tag(480, 652, '5 mL 柱在 150 cm/h 对应约 5 mL/min', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.table(50, 690, 620, {
    headers: ['介质粒径', '典型代表', '定位与反压'],
    colW: [120, 190, 310],
    rowH: 40,
    fontSize: 10.5,
    rows: [
      ['60–90 μm', 'Sepharose Fast Flow 级', '捕获：数百 cm/h，反压低'],
      ['20–45 μm', 'High Performance 级', '精纯：约 100–300 cm/h，反压中等'],
      ['约 10 μm 及更细', '分析级与 UPLC 填料（1.7–5 μm）', '超高柱效，需 10–100 MPa 耐压系统'],
    ],
  })
  b.wtext(50, 874, '反压与流速、粘度、柱长成正比而与粒径平方成反比；细介质、长柱、低温三者都推高压降。常规中低压系统约 0.5–5 MPa，高端可至 20 MPa，超高效液相要求 100 MPa 以上；超压运行把软胶基压实变形——初学者最常见也最昂贵的错误。', { maxW: 620, lh: 14, size: 10, fill: C.sub })
  b.tag(350, 938, '柱体积 CV 是流程语言：平衡 5–10 CV · 洗脱梯度 10–20 CV · 再生 3 CV', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })

  // ============ 四、结合容量与三段式分工 ============
  b.panel(710, 578, 660, 380, { title: '四、结合容量与三段式分工' })
  b.table(730, 618, 620, {
    headers: ['阶段', '目标', '容量利用', '分辨率', '流速'],
    colW: [90, 220, 130, 90, 90],
    rowH: 42,
    fontSize: 10.5,
    rows: [
      ['捕获', '从粗提液快速浓缩并脱杂质', '高，上样至近饱和', '中', '高'],
      ['中间纯化', '去除大部分杂蛋白与核酸', '中', '高', '中'],
      ['精纯', '去除痕量杂质与聚合体', '低', '极高', '低'],
    ],
  })
  b.wtext(730, 790, '吸附型层析上样控制在动态结合容量（DBC）的 70–80% 以内：IMAC 约 10–50 mg/mL，离子交换数十至逾百 mg/mL；样品电导过高时先稀释或脱盐。SEC 是唯一例外——不靠吸附而靠筛分，上样量以柱体积的 0.5–2% 计，上样体积本身就是分辨率的决定变量。', { maxW: 610, lh: 14, size: 10, fill: C.sub })
  b.tag(1030, 878, '算例：1 mL 镍介质标称 DBC 30 mg/mL，八折可结合约 24 mg；粗提液 2 mg/mL 时一次上样约 12 mL', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.wtext(730, 916, '峰形是诊断工具：拖尾峰提示过载、次级相互作用或柱头塌陷——出现即须排查根因而非硬调参数；第 2 章的亲和标签正是「捕获」的理想入口。', { maxW: 610, lh: 14, size: 10, fill: C.mute })
}

export default scene({
  title: '层析分离的物理化学基础',
  subtitle: 'V_{e} = V_{0} + K_{d}·V_{s} 与 R_{s} = 2(V_{2}−V_{1})/(w_{1}+w_{2})；N = 16(t_{R}/w_{b})^{2}，塔板数正比柱长、反比粒径平方；van Deemter 三项权衡决定蛋白层析宜低线速（约 30–150 cm/h）',
  draw,
})
