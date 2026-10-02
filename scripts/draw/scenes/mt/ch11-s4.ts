// mt ch11-s4 气体交换与离子流的动植物汇流：肺 vs 气孔、CO₂ 响应与地质记录、共同执行器与趋同演化、AQP 争议与整流经济学
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、两张答卷：内折的肺 vs 外摊的气孔 =================
  b.panel(30, 132, 660, 455, { title: '一、两张答卷：内折的肺 vs 外摊的气孔' })
  // —— 左：肺 ——
  b.ctext(148, 170, '肺泡腔', { size: 10.5, fill: C.mute })
  b.path('M 56,250 A 92,105 0 0 1 240,250 Z', { fill: C.accL, fillOp: 0.55, stroke: C.sub, sw: 1.8 })
  b.ion(110, 226, 'O_{2}', { r: 8, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.arrow(110, 236, 110, 272, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ion(186, 230, 'CO_{2}', { r: 8, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.arrow(186, 276, 186, 242, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  // 呼吸膜四层
  b.rect(56, 250, 184, 4, { fill: '#bae6fd' })
  b.rect(56, 254, 184, 5, { fill: '#fecdd3' })
  b.rect(56, 259, 184, 4, { fill: '#ddd6fe' })
  b.rect(56, 263, 184, 5, { fill: '#e2e8f0' })
  b.rect(56, 250, 184, 18, { fill: 'none', stroke: C.sub, sw: 1.4 })
  b.braceV(246, 248, 22, { label: '呼吸膜 0.2–0.6 μm', fill: C.sub })
  // 毛细血管与红细胞
  b.ellipse(148, 292, 92, 22, { fill: '#fee2e2', stroke: C.bad, sw: 2 })
  b.ellipse(100, 292, 16, 9, { fill: '#fecdd3', stroke: C.badD, sw: 1.4 })
  b.ellipse(196, 292, 16, 9, { fill: '#fecdd3', stroke: C.badD, sw: 1.4 })
  b.ellipse(148, 292, 17, 10, { fill: '#fca5a5', stroke: C.badD, sw: 1.6 })
  b.ctext(148, 296, 'Hb', { size: 8, weight: 700, fill: C.badD })
  b.tag(148, 332, '总面积约 70 m^{2}', { size: 10, weight: 700, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.wtext(46, 362, '溶解态 O_{2} 仅占血氧约 1.5%——血红蛋白以变构结合持续卸走溶解 O_{2}，使跨膜分压差「不封顶」', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(46, 412, '红细胞过毛细血管全程约 0.75 s，扩散平衡在最初约 0.25 s 内完成——安全余量三倍', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(46, 462, 'CO_{2} 以碳酸氢盐形式经碳酸酐酶与 AE1 氯转移打包运输，物理扩散＋化学耦联', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(46, 500, 'Fick 定律：扩散速率 ∝ 面积×分压差×溶解度 ÷ 厚度——O_{2}/CO_{2} 脂溶性足够高，跨呼吸膜无需任何转运蛋白；纯扩散会因血液饱和而衰竭，化学耦合续上接力', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  // —— 右：气孔 ——
  b.rect(370, 195, 280, 14, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.text(380, 206, '上表皮', { size: 8, fill: C.okD })
  b.rect(370, 209, 280, 74, { fill: '#ecfccb', stroke: C.ok, sw: 1.4 })
  for (const x of [400, 440, 480, 520, 560, 600]) b.circle(x, 228, 14, { fill: '#d9f99d', stroke: C.ok, sw: 1.4 })
  for (const x of [400, 445, 575, 620]) b.circle(x, 262, 16, { fill: '#d9f99d', stroke: C.ok, sw: 1.4 })
  b.text(378, 250, '叶肉细胞', { size: 8.5, fill: C.okD })
  b.ctext(515, 258, '气孔下腔', { size: 8.5, fill: C.sub })
  b.rect(370, 283, 118, 14, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.rect(517, 283, 133, 14, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.text(380, 294, '下表皮', { size: 8, fill: C.okD })
  b.ellipse(490, 290, 9, 11, { fill: C.ok, fillOp: 0.7, stroke: C.okD, sw: 1.2 })
  b.ellipse(515, 290, 9, 11, { fill: C.ok, fillOp: 0.7, stroke: C.okD, sw: 1.2 })
  b.ctext(502, 272, '气孔', { size: 8.5, weight: 700, fill: C.okD })
  b.ion(470, 326, 'CO_{2}', { r: 8, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.arrow(470, 318, 470, 278, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ion(540, 326, 'H_{2}O', { r: 9, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.arrow(540, 278, 540, 318, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(470, 344, 'CO_{2} 入', { size: 8.5, fill: C.dnaD })
  b.ctext(540, 344, 'H_{2}O 出', { size: 8.5, fill: C.accD })
  b.tag(515, 372, '蒸腾比 400–800（C_{3}）', { size: 10, weight: 700, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.ctext(515, 396, 'C_{4} 约 250–350——每同化 1 mol CO_{2} 的水账单', { size: 9.5, fill: C.sub })
  b.wtext(360, 420, '蒸腾并非纯浪费：驱动木质部上行水流、为叶面降温、把矿质随蒸腾流送上山；干热中午气孔常午间部分关闭', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(360, 470, 'ABA、CO_{2} 与蓝光三路联合调门：蓝光「日出开工」、CO_{2}「碳足可歇」、ABA「缺水关闸」', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(360, 518, '气孔下腔水汽近饱和，叶内外水汽压差越大失水越快；叶肉阻力已成光合主要瓶颈，叶肉导度是作物改良新靶标', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })

  // ================= 二、气孔的 CO₂ 响应与地质记录 =================
  b.panel(710, 132, 660, 455, { title: '二、气孔的 CO_{2} 响应与地质「古气压计」' })
  b.tag(880, 195, '叶内 CO_{2} 升高', { size: 10.5, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.tag(880, 241, '胞外碳酸酐酶 → HCO_{3}^{−}', { size: 10.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(880, 287, 'HT1（Raf 样激酶）/ MPK12 级联', { size: 10.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.tag(880, 333, '汇聚于 SLAC1（与 ABA 共用执行器）', { size: 10.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.tag(880, 379, '气孔部分关闭', { size: 10.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  for (const [y0, y1] of [[207, 229], [253, 275], [299, 321], [345, 367]] as [number, number][]) {
    b.arrow(880, y0, 880, y1, { stroke: C.mute, sw: 1.7, marker: 'mute' })
  }
  b.wtext(726, 412, '与 ABA 通路共用 SLAC1 执行器、只在传感段分岔——两条信号在此合流；高 CO_{2} 使气孔部分关闭', { size: 9.5, fill: C.sub, maxW: 310, lh: 16 })
  // 气孔指数 vs CO₂ 小图
  b.axis(1090, 336, 240, 130, {
    grid: false, title: '气孔指数 vs 大气 CO_{2}',
    xticks: [[0, '低 CO_{2}'], [1, '高 CO_{2}']], yticks: [[0.08, '低'], [0.92, '高']],
  })
  b.curve(1090, 336, 240, 130, [[0.03, 0.88], [0.3, 0.7], [0.55, 0.45], [0.8, 0.25], [0.97, 0.12]], { smooth: true, stroke: C.dna, sw: 2.6, label: '气孔指数', labelAt: [0.42, 0.66] })
  b.tag(1210, 404, '古气压计', { size: 9.5, weight: 700, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.wtext(1060, 430, '化石叶片（银杏等）的气孔记录用于重建古大气 CO_{2}：温室期高 CO_{2}、低气孔指数，冰期反之，多个地层序列互证', { size: 9, fill: C.sub, maxW: 290, lh: 15 })
  // 地质时间线
  b.timelineH(726, 520, 600, [
    { at: 0.12, label: '白垩纪温室（高 CO_{2}）', above: true },
    { at: 0.42, label: '新生代冰期（低 CO_{2}）' },
    { at: 0.75, label: '工业革命 CO_{2} 上升', above: true },
    { at: 0.95, label: '现代气孔密度降低' },
  ], { title: '一个分子级膜事件，接上行星尺度的气候史' })
  b.text(726, 578, '化石记录与活体观测在同一页上对齐', { size: 9.5, fill: C.mute })

  // ================= 三、共同执行器与趋同演化 =================
  b.panel(30, 602, 660, 383, { title: '三、共同执行器（K⁺/阴离子通道）与趋同演化' })
  b.text(46, 655, 'K^{+}/阴离子通道：两界共同执行器', { size: 12, weight: 700, fill: C.ink })
  b.text(46, 684, '动物：神经元 Kv 复极', { size: 10.5, weight: 600, fill: C.sub })
  b.bilayer(60, 720, 260)
  b.rect(180, 712, 40, 24, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 5 })
  b.ctext(200, 728, 'Kv', { size: 9, weight: 700, fill: C.accD })
  b.ion(200, 672, 'K^{+}', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(200, 682, 200, 706, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.text(60, 714, '胞外', { size: 8.5, fill: C.mute })
  b.text(60, 750, '胞内', { size: 8.5, fill: C.mute })
  b.tag(190, 770, '同属 Shaker 超家族', { size: 10, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.text(46, 800, '植物：GORK/SKOR 排 K^{+}', { size: 10.5, weight: 600, fill: C.sub })
  b.bilayer(60, 836, 260)
  b.rect(180, 828, 44, 24, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(202, 844, 'GORK', { size: 8.5, weight: 700, fill: C.proD })
  b.ion(202, 790, 'K^{+}', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(202, 800, 202, 822, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.text(60, 830, '胞外', { size: 8.5, fill: C.mute })
  b.text(60, 866, '胞内', { size: 8.5, fill: C.mute })
  b.wtext(46, 900, '动物神经元以 Kv 复极，保卫细胞以 GORK/SKOR 排钾，同属 Shaker 超家族——微观执行器两界同源', { size: 9.5, fill: C.sub, maxW: 300, lh: 16 })
  // —— 右：趋同演化 ——
  b.text(360, 655, '昆虫气管 vs 植物气孔：开放式气体交换', { size: 12, weight: 700, fill: C.ink })
  b.rect(380, 692, 130, 36, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 18 })
  b.text(380, 684, '昆虫：气门→气管→微气管', { size: 10, weight: 600, fill: C.sub })
  b.circle(516, 710, 6, { fill: C.ink })
  b.text(528, 690, '气门（括约肌）', { size: 8.5, fill: C.sub })
  b.line(522, 710, 585, 695, { stroke: C.dna, sw: 3.5 })
  b.line(585, 695, 625, 688, { stroke: C.dna, sw: 2 })
  b.line(585, 695, 620, 712, { stroke: C.dna, sw: 2 })
  b.line(522, 710, 590, 725, { stroke: C.dna, sw: 3.5 })
  b.line(590, 725, 625, 722, { stroke: C.dna, sw: 2 })
  b.ellipse(650, 705, 17, 22, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(650, 748, '组织细胞', { size: 9, fill: C.sub })
  b.tag(556, 766, '微气管亚微米·液面接口', { size: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.wtext(360, 790, '大体型昆虫以腹部气门的顺序开合做「通气泵」——体型越大，扩散越不够用', { size: 9, fill: C.sub, maxW: 300, lh: 15 })
  b.path('M 465,852 A 30,30 0 1 0 465,918', { stroke: C.ok, sw: 14, fill: 'none', opacity: 0.35 })
  b.path('M 465,852 A 30,30 0 1 0 465,918', { stroke: C.ok, sw: 2, fill: 'none' })
  b.path('M 485,852 A 30,30 0 1 1 485,918', { stroke: C.ok, sw: 14, fill: 'none', opacity: 0.35 })
  b.path('M 485,852 A 30,30 0 1 1 485,918', { stroke: C.ok, sw: 2, fill: 'none' })
  b.text(360, 845, '植物：气孔控制叶内空间', { size: 10, weight: 600, fill: C.sub })
  b.ctext(475, 932, 'CO_{2} ⇄ H_{2}O', { size: 9, fill: C.sub })
  b.wtext(530, 862, '昆虫以气门括约肌控制气管网的空气直送组织，植物以气孔控制叶内空间的气体吞吐——都以可开关的孔在取气与失水之间权衡', { size: 9, fill: C.sub, maxW: 140, lh: 15 })
  b.wtext(360, 952, '同一权衡（取气 vs 失水）、同一解法（可开关的孔）、不同谱系——趋同演化最干净的例证之一', { size: 9.5, fill: C.sub, maxW: 300, lh: 16 })

  // ================= 四、AQP 的 CO₂ 争议与整流的电压经济学 =================
  b.panel(710, 602, 660, 383, { title: '四、AQP 的 CO_{2} 争议与整流的电压经济学' })
  b.text(726, 655, 'AQP 的 CO_{2} 通道争议', { size: 12, weight: 700, fill: C.ink })
  b.bilayer(740, 700, 260)
  b.rect(850, 692, 36, 30, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(868, 710, 'AQP', { size: 8.5, weight: 700, fill: C.accD })
  b.ion(800, 680, 'CO_{2}', { r: 8, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.arrow(812, 684, 846, 702, { stroke: C.dna, sw: 1.6, marker: 'dna', dash: '5 4' })
  b.arrow(886, 702, 922, 684, { stroke: C.dna, sw: 1.6, marker: 'dna', dash: '5 4' })
  b.ion(936, 680, 'CO_{2}', { r: 8, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.arrow(968, 692, 968, 722, { stroke: C.mute, sw: 1.5, marker: 'mute', dash: '4 3' })
  b.text(960, 740, '脂相扩散', { size: 9, fill: C.mute })
  b.text(726, 740, 'AQP1（红细胞）/ PIP1;2（烟草）', { size: 9, fill: C.sub })
  b.rect(726, 758, 290, 96, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(740, 780, '支持的证据', { size: 11.5, weight: 700, fill: C.okD })
  b.wtext(740, 802, 'AQP1 与 PIP1;2 在爪蟾卵与红细胞肿胀实验中显著加快 CO_{2} 摄取；PIP1;2 影响气孔导度与叶内 CO_{2} 传导', { size: 9, fill: C.okD, maxW: 262, lh: 15 })
  b.rect(726, 866, 290, 88, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(740, 888, '反对的证据', { size: 11.5, weight: 700, fill: C.badD })
  b.wtext(740, 910, '基因敲除表型温和；理论计算表明 CO_{2} 的脂相扩散似已够用；但水通道多功能化已是事实——甘油、尿素乃至砷酸根都有专属亚型在运', { size: 9, fill: C.badD, maxW: 262, lh: 15 })
  b.text(726, 966, '一个「通道新功能」的成立，需电生理、同位素通量、体内表型三线证据咬合——悬而未决的科学进行时标本', { size: 9.5, fill: C.mute })
  // —— 右：整流经济学 ——
  b.text(1046, 655, '整流的电压经济学：逆势不开门', { size: 12, weight: 700, fill: C.ink })
  b.axis(1070, 780, 120, 100, { grid: false, title: '内向整流（Kir/KAT1）', xticks: [[0.05, '超极化'], [0.95, '去极化']] })
  b.curve(1070, 780, 120, 100, [[0.03, 0.08], [0.3, 0.15], [0.5, 0.48], [0.7, 0.52], [0.97, 0.55]], { smooth: true, stroke: C.pro, sw: 2.4, label: 'I', labelAt: [0.1, 0.14] })
  b.axis(1225, 780, 120, 100, { grid: false, title: '外向整流（Kv/GORK）', xticks: [[0.05, '超极化'], [0.95, '去极化']] })
  b.curve(1225, 780, 120, 100, [[0.03, 0.45], [0.3, 0.48], [0.5, 0.5], [0.7, 0.85], [0.97, 0.92]], { smooth: true, stroke: C.dna, sw: 2.4, label: 'I', labelAt: [0.86, 0.75] })
  b.wtext(1046, 850, '心肌 Kir2.1 把静息电位钳在 K^{+} 平衡电位附近；KAT1 只在泵超极化后放 K^{+} 入胞；SKOR 只在木质部装卸有利时放 K^{+} 出胞', { size: 9, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(1046, 894, '分子实现两套：Kir 靠胞内 Mg^{2+} 与多胺在去极化时堵孔，KAT1 靠电压依赖门控本身——殊途同归，把同一经济学写进两种生物', { size: 9, fill: C.sub, maxW: 300, lh: 15 })
  b.tag(1200, 948, '逆势不开门：门控窗口匹配梯度方向', { size: 10, weight: 700, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.text(1046, 972, '动物的解＝内折表面＋循环运输；植物的解＝外摊表面＋蒸腾流兼任运输降温', { size: 9.5, fill: C.sub })
}

export default scene({
  title: '气体交换与离子流的动植物汇流',
  subtitle: '人肺呼吸膜仅 0.2–0.6 μm、总面积约 70 m²，红细胞 0.75 s 过境而 0.25 s 即达扩散平衡，血红蛋白化学耦合使分压差不封顶；植物气孔承担蒸腾比约 400–800 mol H₂O/mol CO₂（C₃）的工程折衷；高 CO₂ 经 HT1/MPK12 使气孔部分关闭并写进化石「古气压计」；K⁺/阴离子通道为两界共同执行器，昆虫气管与气孔趋同演化；AQP1/PIP1;2 的 CO₂ 通透性悬而未决，内向/外向整流以「逆势不开门」收束',
  draw,
})
