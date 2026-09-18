// cb ch2-s3 被动运输：简单扩散与协助扩散（39-d 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、通透性规律 ============
  b.panel(30, 132, 1340, 190, { title: '一、通透性规律：谁能自发穿过脂双层？' })
  b.rect(56, 168, 610, 132, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(76, 198, '易通过（可自发穿膜）', { size: 13, weight: 700, fill: C.ok })
  b.wtext(76, 226, '脂溶性小分子：O₂、CO₂、N₂、类固醇激素；小而不带电的极性分子（较慢）：水、尿素、甘油。', { size: 11.5, fill: C.sub, maxW: 570, lh: 17 })
  b.rect(700, 168, 644, 132, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(720, 198, '不能自发穿膜（离子水化层使跨膜自由能极高）', { size: 13, weight: 700, fill: C.bad })
  b.wtext(720, 226, '大的极性分子：葡萄糖、蔗糖；一切离子：Na⁺、K⁺、Ca²⁺、Cl⁻——必须依赖通道或载体蛋白协助。', { size: 11.5, fill: C.sub, maxW: 600, lh: 17 })

  // ============ 二、简单扩散与载体 ============
  b.panel(30, 338, 660, 420, { title: '二、简单扩散与载体介导的协助扩散' })
  b.text(56, 372, '① 简单扩散（直接穿脂双层）', { size: 12.5, weight: 700, fill: C.ink })
  b.text(56, 396, '胞外（高）', { size: 10.5, fill: C.mute })
  b.bilayer(80, 430, 220)
  b.circle(150, 398, 7, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.circle(210, 392, 7, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.circle(270, 402, 7, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(210, 384, 'O₂ / CO₂', { size: 10, fill: C.accD })
  b.arrow(160, 412, 160, 468, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(220, 412, 220, 468, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(56, 478, '胞质（低）', { size: 10.5, fill: C.mute })
  b.wtext(350, 382, '顺浓度梯度直接穿过脂双层：不需膜蛋白、不消耗代谢能、无饱和性；净流量与浓度梯度成正比（O₂、CO₂、乙醇、尿素）。', { size: 11, fill: C.sub, maxW: 310, lh: 16 })
  b.text(56, 508, '② 载体蛋白（GLUT 家族）：构象变化转运', { size: 12.5, weight: 700, fill: C.ink })
  // 状态 A：向外开口
  b.bilayer(80, 585, 170)
  b.path('M 115,598 L 115,570 Q 150,552 185,570 L 185,598', { stroke: C.pro, sw: 5, fill: 'none' })
  b.polygon([[150, 532], [159, 537], [159, 548], [150, 553], [141, 548], [141, 537]], { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(150, 524, '葡萄糖', { size: 10.5, fill: C.enzD })
  b.ctext(165, 632, 'A 向外开口（结合）', { size: 11, weight: 600, fill: C.sub })
  b.arrow(270, 585, 340, 585, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(305, 570, '构象变化', { size: 10.5, weight: 600, fill: C.proD })
  // 状态 B：向内开口
  b.bilayer(360, 585, 170)
  b.path('M 395,572 L 395,598 Q 430,615 465,598 L 465,572', { stroke: C.pro, sw: 5, fill: 'none' })
  b.polygon([[430, 630], [439, 635], [439, 646], [430, 651], [421, 646], [421, 635]], { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.arrow(430, 612, 430, 624, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(445, 560, 'B 向内开口（释放）', { size: 11, weight: 600, fill: C.sub })
  b.wtext(56, 690, 'GLUT1 泛在表达、执行基础摄取；GLUT4 储存于胞内囊泡，受胰岛素信号转位至质膜——实现餐后骨骼肌与脂肪组织的快速摄取。', { size: 11, fill: C.sub, maxW: 610, lh: 15.5 })

  // ============ 三、通道蛋白 ============
  b.panel(710, 338, 660, 420, { title: '三、通道蛋白：离子通道与水通道' })
  b.text(736, 372, '① 离子通道：门控高速（10⁶–10⁸ 个/秒）', { size: 12.5, weight: 700, fill: C.ink })
  b.bilayer(740, 470, 280)
  b.rect(830, 438, 18, 66, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.rect(900, 438, 18, 66, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.rect(848, 438, 52, 14, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
  b.etext(822, 448, '选择性滤器（TVGYG）', { size: 10.5, weight: 600, fill: C.rnaD })
  b.ion(874, 398, 'K⁺', { r: 12, size: 10.5 })
  b.circle(874, 460, 6, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.circle(874, 478, 6, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.circle(874, 496, 6, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.line(848, 512, 900, 512, { stroke: C.pro, sw: 1.8, dash: '4 4' })
  b.etext(824, 516, '门控', { size: 10.5, fill: C.proD })
  b.arrow(874, 525, 874, 558, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.wtext(736, 585, '选择性滤器：保守 TVGYG 基序的主链羰基氧排布成 4 个 K⁺ 结合位点，以「尺寸匹配」区分 K⁺ 与 Na⁺（MacKinnon，2003 年诺贝尔化学奖）。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.tag(795, 656, '电压门控', { fill: C.panelB, stroke: C.sub, size: 11, tfill: C.ink, pad: 8 })
  b.tag(905, 656, '配体门控', { fill: C.panelB, stroke: C.sub, size: 11, tfill: C.ink, pad: 8 })
  b.tag(1015, 656, '机械门控', { fill: C.panelB, stroke: C.sub, size: 11, tfill: C.ink, pad: 8 })
  // ② 水通道
  b.text(1070, 372, '② 水通道蛋白（AQP）', { size: 12.5, weight: 700, fill: C.ink })
  b.bilayer(1052, 466, 250, { op: 0.4 })
  b.bilayer(1052, 494, 250, { op: 0.4 })
  b.rect(1078, 415, 60, 60, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10 })
  b.rect(1146, 415, 60, 60, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10 })
  b.rect(1078, 483, 60, 60, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10 })
  b.rect(1146, 483, 60, 60, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10 })
  b.circle(1142, 479, 8, { fill: '#ffffff', stroke: C.bad, sw: 2 })
  const wfile = [430, 455, 479, 503, 528]
  wfile.forEach(y => b.circle(1142, y, 4.5, { fill: C.dnaL, stroke: C.dna, sw: 1.4 }))
  b.arrow(1142, 408, 1142, 388, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(1168, 396, 'H₂O 单列通过', { size: 10.5, weight: 600, fill: C.dnaD })
  b.ctext(1142, 565, '每亚基 6 个跨膜 α 螺旋', { size: 10.5, weight: 600, fill: C.accD })
  b.wtext(1060, 612, '孔道中央带正电的精氨酸与组氨酸排斥 H₃O⁺，只允许水分子单列、快速、选择性通过。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(1060, 676, 'AQP1 由 Agre 从红细胞膜纯化鉴定（2003 年诺贝尔化学奖）；AQP2 受 ADH 调控插入肾集合管顶膜——突变致肾性尿崩症；AQP0 突变致先天性白内障。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })

  // ============ 四、三方式比较 ============
  b.panel(30, 774, 1340, 206, { title: '四、被动运输三种方式比较' })
  b.table(56, 812, 1288, {
    headers: ['方式', '驱动力', '膜蛋白', '饱和性', '典型例子'],
    colW: [210, 190, 200, 170, 518],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['简单扩散', '浓度梯度', '无', '无', 'O₂、CO₂、尿素'],
      ['载体介导协助扩散', '电化学梯度', '载体蛋白', '有', '葡萄糖（GLUT1 / GLUT4）'],
      ['通道介导协助扩散', '电化学梯度', '通道蛋白', '受门控控制', 'K⁺ 通道、水通道（AQP）'],
    ],
  })
}

export default scene({
  title: '被动运输：简单扩散与协助扩散',
  subtitle: '简单扩散不需蛋白、不耗能、无饱和性；载体经构象变化转运（GLUT4 受胰岛素调控）；通道以门控控制离子每秒 10⁶–10⁸ 个高速流过——K⁺ 滤器与 AQP 拒 H₃O⁺ 均获 2003 年诺贝尔化学奖',
  draw,
})
