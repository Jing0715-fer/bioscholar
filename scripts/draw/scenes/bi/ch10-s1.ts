// bi ch10-s1 质谱原理与蛋白质鉴定（39-i 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、软电离与质量阶梯 ============
  b.panel(30, 132, 660, 420, { title: '一、软电离（2002 年诺贝尔化学奖）与肽段质量阶梯' })
  b.rect(60, 186, 300, 84, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 9, fillOp: 0.55 })
  b.ctext(210, 214, 'ESI 电喷雾电离', { size: 13.5, weight: 700, fill: C.accD })
  b.ctext(210, 240, '多电荷离子雾化 · 与液相色谱在线耦合', { size: 11, fill: C.sub })
  b.rect(360, 186, 300, 84, { fill: C.proL, stroke: C.pro, sw: 1.7, rx: 9, fillOp: 0.55 })
  b.ctext(510, 214, 'MALDI 基质辅助激光解吸', { size: 13.5, weight: 700, fill: C.proD })
  b.ctext(510, 240, '单电荷离子 · 常配 TOF 分析器', { size: 11, fill: C.sub })
  b.wtext(60, 296, '两项「软电离」让大分子带电进入气相而不被打碎——分享 2002 年诺贝尔化学奖。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.text(60, 336, 'MS1 选母离子 → 碎裂 → MS2 读 b / y 离子质量阶梯', { size: 13, weight: 700, fill: C.ink })
  b.line(80, 464, 640, 464, { stroke: C.sub, sw: 1.8 })
  const peaks: Array<[number, number, string]> = [
    [110, 55, 'y1'], [175, 80, 'y2'], [240, 68, 'y3'], [305, 95, 'y4'], [370, 75, 'y5'], [435, 110, 'y6'], [500, 88, 'y7'],
  ]
  peaks.forEach(([x, h, lab]) => {
    b.line(x, 464, x, 464 - h, { stroke: C.enz, sw: 2.6 })
    b.circle(x, 464 - h, 3.6, { fill: C.enz })
    b.ctext(x, 484, lab, { size: 10, fill: C.mute })
  })
  b.text(552, 380, '相邻峰质量差', { size: 11, weight: 600, fill: C.enzD })
  b.text(552, 398, '＝ 残基质量', { size: 11, weight: 600, fill: C.enzD })
  b.text(552, 416, '→ 推出序列', { size: 11, weight: 600, fill: C.enzD })
  b.wtext(60, 512, '可被可靠鉴定的肽段多在 7–25 个残基（太短特异性不足、太长碎片谱难解读）；胰酶特异性高，搜索允许 0–2 个漏切。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、分析器谱系与 DDA ============
  b.panel(710, 132, 660, 420, { title: '二、分析器谱系与 DDA 采集' })
  b.table(740, 188, 600, {
    headers: ['分析器', '工作原理 / 强项', '典型角色'],
    colW: [130, 300, 170],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['四极杆', '射频电场作滤门', '母离子筛选'],
      ['离子阱', '可多级碎裂（MSⁿ）', '深度碎裂'],
      ['Orbitrap', '十万级分辨率 · ppm 精度', '精测质量'],
      ['TOF', '质量范围宽', '快速检测'],
    ],
  })
  b.wtext(740, 420, '混合仪器「筛选 ＋ 精测」：四极杆选离子，Orbitrap / TOF 精测质量。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(740, 452, 'DDA：每张一级谱后挑最强若干母离子碎裂——高效但随机偏向高丰度，低丰度肽被遗漏；PSM（肽段–谱图匹配）是搜索的基本单元，开放搜索可捕获意外修饰。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、数据库搜索与靶-诱饵 ============
  b.panel(30, 576, 660, 404, { title: '三、数据库搜索与靶-诱饵策略' })
  b.rect(60, 630, 160, 44, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.ctext(140, 657, '实测谱图', { size: 12.5, weight: 700, fill: C.accD })
  b.arrow(220, 652, 254, 652, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(256, 630, 230, 44, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.ctext(371, 657, '理论谱比对（PSM）', { size: 12.5, weight: 700, fill: C.accD })
  b.arrow(486, 652, 520, 652, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(522, 630, 150, 44, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.ctext(597, 657, '打分排序', { size: 12.5, weight: 700, fill: C.accD })
  b.rect(60, 700, 280, 120, { fill: C.bg, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(200, 724, '靶库（真实蛋白序列）', { size: 12, weight: 700, fill: C.dnaD })
  for (let i = 0; i < 5; i++) b.line(84, 744 + i * 14, 316, 744 + i * 14, { stroke: C.line, sw: 1.4 })
  b.circle(120, 751, 4.5, { fill: C.enz })
  b.circle(262, 793, 4.5, { fill: C.enz })
  b.rect(360, 700, 280, 120, { fill: C.bg, stroke: C.bad, sw: 1.8, rx: 8, dash: '7 5' })
  b.ctext(500, 724, '诱饵库（打乱 / 反转的假序列）', { size: 12, weight: 700, fill: C.bad })
  for (let i = 0; i < 5; i++) b.line(384, 744 + i * 14, 616, 744 + i * 14, { stroke: C.line, sw: 1.4 })
  b.circle(470, 765, 4.5, { fill: C.bad })
  b.ctext(340, 852, 'FDR ≈ 诱饵命中数 ÷ 靶命中数（或经公式修正的估计）', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(340, 888, '谱级 · 肽级 · 蛋白级 FDR 各 ≤ 1% —— 行业默认门槛', { fill: C.okL, stroke: C.ok, size: 12, weight: 700, tfill: '#065f46', pad: 10 })
  b.wtext(60, 930, '搜索的两大暗礁：可变修饰扩张搜索空间；共享肽段无法唯一归属同源蛋白。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 四、动态范围 ============
  b.panel(710, 576, 660, 404, { title: '四、动态范围：七个数量级的根本瓶颈' })
  b.axis(760, 880, 300, 240, {
    ylabel: '蛋白种类数',
    title: '丰度谱（示意）',
    xticks: [[0, '低'], [1, '高']],
    yticks: [[0, '0'], [1, '↑']],
  })
  b.curve(760, 880, 300, 240, [
    [0, 0.9], [0.15, 0.72], [0.3, 0.55], [0.45, 0.38], [0.6, 0.24], [0.75, 0.13], [0.9, 0.06], [1, 0.02],
  ], { stroke: C.dna, sw: 3, smooth: true })
  b.text(800, 652, '低丰度：种类多', { size: 10.5, weight: 600, fill: C.dnaD })
  b.etext(1040, 780, '高丰度：种类少', { size: 10.5, weight: 600, fill: C.dnaD })
  b.braceH(760, 902, 300, { label: '动态范围横跨约七个数量级', fill: C.bad })
  b.wtext(1090, 660, '高丰度蛋白掩盖低丰度信号——动态范围是质谱的根本瓶颈。', { size: 11, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(1090, 732, '由此而生「发现（DDA 扫描）＋ 验证（靶向）」的两段式工作流。', { size: 11, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(1090, 800, '肽指纹（PMF）只比母离子质量集——早期方案，已被串联质谱取代。', { size: 11, fill: C.mute, maxW: 250, lh: 15 })
}

export default scene({
  title: '质谱原理与蛋白质鉴定：软电离、质量阶梯与靶-诱饵 FDR',
  subtitle: 'ESI 与 MALDI 两项软电离分享 2002 年诺贝尔化学奖；四类分析器分工——四极杆滤门、离子阱多级碎裂、Orbitrap 十万级分辨率加 ppm 精度、TOF 质量范围宽；MS1 选母离子、MS2 读 b/y 离子质量阶梯推序列，可鉴肽段多在 7–25 残基、漏切允许 0–2 个；靶-诱饵策略以假目标标定假阳性，谱/肽/蛋白三级各控 FDR 约 1%；动态范围约七个数量级是根本瓶颈',
  draw,
})
