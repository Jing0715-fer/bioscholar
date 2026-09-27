// ph ch5-s2 基底节回路与小脑误差校正
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、基底节回路 ============
  b.panel(30, 132, 790, 440, { title: '一、基底节回路：直接通路 Go 与间接通路 NoGo' })
  const box = (x: number, y: number, w: number, h: number, f: string, s: string, tf: string, size = 10.5) => {
    b.rect(x, y, w, h, { fill: f, stroke: C.line, sw: 1.8, rx: 8 })
    b.ctext(x + w / 2, y + h / 2 + 4, s, { size, weight: 700, fill: tf })
  }
  box(240, 176, 170, 40, C.accL, '大脑皮层（Glu）', C.accD)
  box(120, 260, 160, 44, C.proL, '纹状体', C.proD, 11)
  b.ctext(200, 300, 'D1（直接）· D2（间接）', { size: 8.5, fill: C.mute })
  box(560, 260, 150, 44, C.badL, 'GPi / SNr（输出）', C.badD)
  box(560, 176, 150, 40, C.okL, '丘脑 VA/VL', C.okD)
  box(120, 360, 130, 40, C.warnL, 'GPe', C.warnD)
  box(430, 360, 130, 40, C.warnL, 'STN（Glu）', C.warnD)
  b.circle(320, 400, 26, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(320, 448, 'SNc 黑质致密部（多巴胺）', { size: 10, weight: 700, fill: C.dnaD })
  // 连接
  b.arrow(320, 216, 240, 258, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(262, 232, 'Glu', { size: 9.5, fill: C.accD })
  b.arrow(280, 272, 558, 272, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.text(380, 262, '直接通路：D1-GABA 抑制 GPi', { size: 10, weight: 700, fill: C.badD })
  b.arrow(190, 304, 190, 358, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.text(206, 336, 'GABA', { size: 9, fill: C.badD })
  b.arrow(250, 380, 428, 380, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.text(310, 372, 'GABA', { size: 9, fill: C.badD })
  b.arrow(520, 356, 612, 306, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.text(580, 340, 'Glu', { size: 9.5, fill: C.okD })
  b.arrow(635, 258, 635, 218, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.text(648, 242, 'GABA', { size: 9, fill: C.badD })
  b.arrow(558, 196, 412, 196, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.text(480, 188, '兴奋皮层运动区（Go）', { size: 10, weight: 700, fill: C.okD })
  b.arrow(310, 376, 184, 308, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.arrow(336, 376, 258, 308, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.text(172, 322, '−', { size: 12, weight: 700, fill: C.badD })
  b.text(262, 322, '+', { size: 12, weight: 700, fill: C.okD })
  b.text(268, 352, 'DA：D1(+) · D2(−)', { size: 10, weight: 700, fill: C.rnaD })
  b.wtext(50, 470, '直接通路：纹状体 D1 抑制 GPi → 丘脑去抑制 → 皮层兴奋（运动易化）；间接通路：D2 抑制 GPe → STN 解除抑制 → GPi 增强对丘脑的抑制（NoGo）', { size: 10.5, fill: C.sub, maxW: 750, lh: 18 })
  b.tag(250, 522, '帕金森病：SNc 多巴胺神经元退变 → 运动减少·僵直·静止性震颤', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 9 })
  b.tag(600, 522, '亨廷顿病：纹状体间接通路神经元退变 → 舞蹈样运动过多', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 9 })

  // ============ 二、小脑三分区 ============
  b.panel(840, 132, 530, 440, { title: '二、小脑三个功能分区' })
  b.table(856, 186, 498, {
    headers: ['分区（结构）', '主要连接', '功能', '损伤表现'],
    colW: [118, 108, 138, 134], rowH: 52, fontSize: 9.5,
    rows: [
      ['前庭小脑（绒球小结叶）', '前庭神经核', '平衡与眼动（前庭-眼反射）', '眩晕、眼震、躯干共济失调'],
      ['脊髓小脑（蚓部+中间）', '脊髓上/下行', '监控进行中运动、步态', '共济失调、肌张力低下'],
      ['大脑小脑（半球外侧）', '皮层-脑桥-齿状核', '运动计划、时序与灵巧动作', '意向性震颤、轮替不能'],
    ],
  })
  b.wtext(856, 404, '小脑不直接发起运动，而是比较「意图」与「实际执行」，经丘脑-皮层与红核通路输出校正——运动的误差校正引擎', { size: 10.5, fill: C.sub, maxW: 490, lh: 18 })
  b.wtext(856, 448, '传出对应：前庭小脑 → 前庭核；脊髓小脑 → 快核与间置核；大脑小脑 → 齿状核 → 丘脑 VA/VL → 皮层运动区', { size: 10.5, fill: C.sub, maxW: 490, lh: 18 })
  b.tag(1090, 512, '小脑损伤不影响肌力，只损害协调与时序', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5, weight: 700, pad: 9 })

  // ============ 三、小脑皮层微回路 ============
  b.panel(30, 584, 1340, 400, { title: '三、小脑皮层微回路：苔藓/攀缘纤维—浦肯野细胞误差校正' })
  b.tag(200, 680, '平行纤维-浦肯野突触的 LTD = 运动学习', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 9 })
  // 颗粒细胞与苔藓纤维
  b.arrow(60, 856, 96, 892, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(60, 846, '苔藓纤维（多源兴奋）', { size: 10.5, weight: 700, fill: C.accD })
  for (let i = 0; i < 5; i++) {
    const gx = 100 + i * 50
    b.circle(gx, 900, 6, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
    b.line(gx, 894, gx, 860, { stroke: C.dna, sw: 1.8 })
  }
  b.line(95, 860, 380, 860, { stroke: C.dna, sw: 2 })
  b.text(250, 850, '平行纤维', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(100, 940, '颗粒细胞（小脑神经元数量的绝大多数）', { size: 10.5, fill: C.sub })
  // 浦肯野细胞
  b.line(430, 894, 430, 760, { stroke: C.pro, sw: 2.4 })
  b.line(430, 760, 370, 720, { stroke: C.pro, sw: 2 })
  b.line(430, 760, 490, 720, { stroke: C.pro, sw: 2 })
  b.line(370, 720, 330, 690, { stroke: C.pro, sw: 1.5 })
  b.line(370, 720, 410, 688, { stroke: C.pro, sw: 1.5 })
  b.line(490, 720, 460, 688, { stroke: C.pro, sw: 1.5 })
  b.line(490, 720, 530, 690, { stroke: C.pro, sw: 1.5 })
  b.circle(430, 806, 12, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.text(430, 834, '浦肯野细胞', { size: 10.5, weight: 700, fill: C.proD })
  b.arrow(378, 852, 415, 816, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  // 深部核团输出
  b.arrow(430, 820, 430, 866, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ellipse(430, 888, 36, 18, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(430, 893, '深部核团', { size: 10, weight: 700, fill: C.warnD })
  // 攀缘纤维 + 下橄榄核
  b.spline([[590, 905], [556, 868], [610, 840], [556, 812], [518, 796], [505, 778]], { stroke: C.rna, sw: 2.2 })
  b.ellipse(606, 922, 40, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(606, 958, '下橄榄核', { size: 10.5, weight: 700, fill: C.rnaD })
  b.text(620, 846, '攀缘纤维（1:1 强兴奋）', { size: 10.5, weight: 700, fill: C.rnaD })
  b.text(620, 874, '复杂放电 = 错误/教学信号', { size: 10.5, fill: C.rnaD })
  // 右列注解
  b.wtext(720, 630, '苔藓纤维：携带运动指令副本（经脑桥）与感觉信息，经颗粒细胞-平行纤维以高频简单放电驱动浦肯野细胞', { size: 10.5, fill: C.sub, maxW: 580, lh: 18 })
  b.wtext(720, 672, '攀缘纤维：发自下橄榄核，每个浦肯野细胞仅接收 1 条，强去极化触发复杂放电（约 1 次/秒）——作为误差教学信号', { size: 10.5, fill: C.sub, maxW: 580, lh: 18 })
  b.wtext(720, 714, '两者同时激活 → 平行纤维-浦肯野突触长时程抑制（LTD）：下调造成误差的输入权重——小脑运动学习的细胞基础', { size: 10.5, fill: C.sub, maxW: 580, lh: 18 })
  b.wtext(720, 756, '浦肯野细胞是小脑皮层唯一输出（GABA，抑制深部核团）；深部核团为小脑唯一传出（兴奋性）', { size: 10.5, fill: C.sub, maxW: 580, lh: 18 })
  b.tag(1000, 812, '人小脑：颗粒细胞约 690 亿、浦肯野细胞约 1500 万', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 9 })
  b.wtext(720, 866, '前庭-眼反射的适应性增益调节、兔眨眼条件反射与技能习得（乐器、骑行）均为该回路可塑性的经典实证', { size: 10.5, fill: C.sub, maxW: 580, lh: 18 })
}

export default scene({
  title: '基底节与小脑：运动的筛选、放大与误差校正',
  subtitle: '直接通路 D1-Go 与间接通路 D2-NoGo 相互拮抗，黑质多巴胺同时兴奋前者（D1）、抑制后者（D2）；小脑颗粒细胞约 690 亿，浦肯野细胞为唯一皮层输出',
  draw,
})
