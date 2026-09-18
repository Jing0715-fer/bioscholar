// ne ch8-s4 视觉系统 / 视觉中枢通路（39-h 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、从视网膜到 V1 ============
  b.panel(30, 132, 660, 430, { title: '一、从视网膜到 V1：半野交叉与 LGN 分层' })
  // 视野（左右）
  b.rect(60, 210, 90, 90, { fill: C.bg, stroke: C.sub, sw: 1.8 })
  b.ctext(105, 250, '左视野', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(105, 270, '颞侧→右眼', { size: 9.5, fill: C.mute })
  b.ctext(105, 285, '鼻侧→左眼', { size: 9.5, fill: C.mute })
  b.rect(170, 210, 90, 90, { fill: C.bg, stroke: C.sub, sw: 1.8 })
  b.ctext(215, 250, '右视野', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(215, 270, '颞侧→左眼', { size: 9.5, fill: C.mute })
  b.ctext(215, 285, '鼻侧→右眼', { size: 9.5, fill: C.mute })
  // 视交叉示意（对称交叉）
  b.line(105, 300, 215, 360, { stroke: C.dna, sw: 2.2 })
  b.line(215, 300, 105, 360, { stroke: C.bad, sw: 2.2 })
  b.tag(160, 385, '视交叉：鼻侧半交叉', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 8 })
  // LGN 六层
  b.rect(310, 330, 150, 80, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 7 })
  const layers = [['1', C.acc], ['2', C.acc], ['3', C.pro], ['4', C.pro], ['5', C.pro], ['6', C.pro]]
  layers.forEach(([n, c], i) => {
    b.rect(318 + i * 22, 344, 16, 56, { fill: c as string, fillOp: 0.45, stroke: c as string, sw: 1.2, rx: 3 })
    b.ctext(326 + i * 22, 414, n as string, { size: 9, fill: C.mute })
  })
  b.ctext(385, 322, 'LGN 六层', { size: 11, weight: 700, fill: C.ink })
  b.ctext(385, 436, '1–2 大细胞（M）', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(385, 452, '3–6 小细胞（P）', { size: 10.5, weight: 700, fill: C.proD })
  // 视辐射到 V1
  b.arrow(460, 370, 556, 370, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.rect(562, 342, 110, 56, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 2, rx: 8 })
  b.ctext(617, 364, 'V1', { size: 14, weight: 700, fill: C.dnaD })
  b.ctext(617, 382, '（17 区 · 纹状）', { size: 9, fill: C.mute })
  b.ctext(617, 424, '双眼信息至 V1 才汇合', { size: 10.5, fill: C.mute })
  b.wtext(60, 490, '视交叉的「半交叉」设计把对侧视野的左右眼信息送进同一半球：每侧半球管理对侧视野，左半球看右半视野；LGN 并非简单中继——注意与眼动的门控在此汇入。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、V1 的功能构筑 ============
  b.panel(710, 132, 660, 430, { title: '二、V1：简单→复杂细胞的特征检测层级' })
  // 简单细胞：同心圆感受野线性排列
  b.ctext(880, 200, '简单细胞：方位选择性', { size: 12.5, weight: 700, fill: C.ink })
  const rf: Array<[number, number]> = [[770, 250], [820, 250], [870, 250], [920, 250]]
  rf.forEach(([x, y]) => {
    b.circle(x, y, 13, { fill: C.dna, fillOp: 0.25, stroke: C.dna, sw: 1.6 })
    b.circle(x, y, 6, { fill: C.dna, fillOp: 0.7 })
  })
  b.arrow(960, 250, 1010, 250, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.rect(1020, 222, 130, 56, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(1085, 244, '汇聚成', { size: 10.5, fill: C.mute })
  b.ctext(1085, 262, '「亮条」检测器', { size: 11.5, weight: 700, fill: C.dnaD })
  b.wtext(1180, 236, 'LGN 同心圆感受野线性排列汇聚而来。', { size: 10, fill: C.sub, maxW: 160, lh: 14 })
  // 复杂细胞
  b.ctext(880, 330, '复杂细胞：位置不变性', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(770, 352, 250, 34, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(895, 373, '同样的方位，无论落在感受野何处', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(1050, 356, '再汇聚一层即得；V1 以方位柱与眼优势柱的冰模马赛克组织。', { size: 10, fill: C.sub, maxW: 290, lh: 14 })
  // Hubel & Wiesel
  b.rect(740, 430, 600, 74, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.wtext(760, 454, 'Hubel 与 Wiesel 以特征检测系列研究获 1981 年诺贝尔奖（与 Sperry 分享）；其单眼剥夺实验开创关键期可塑性研究——幼猫单眼缝合数周即令其眼优势柱大幅萎缩。', { size: 11, fill: C.sub, maxW: 560, lh: 16 })

  // ============ 三、双流假说 ============
  b.panel(30, 578, 1340, 396, { title: '三、腹侧流与背侧流：是什么 vs 在哪里/怎么做' })
  // 腹侧流
  b.rect(90, 660, 560, 120, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.8, rx: 10 })
  b.text(110, 688, '腹侧流（是什么）', { size: 14, weight: 700, fill: C.dnaD })
  const vent = ['V1', 'V2', 'V4', '颞下皮层']
  vent.forEach((v, i) => {
    b.tag(180 + i * 130, 726, v, { fill: '#ffffff', stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 8 })
  })
  b.arrow(215, 726, 285, 726, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.arrow(335, 726, 415, 726, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.arrow(465, 726, 530, 726, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.wtext(110, 762, '形状、颜色、纹理、物体类别；慢而细、意识表征清晰——损伤致视觉失认症、面孔失认。', { size: 10.5, fill: C.sub, maxW: 520, lh: 15 })
  // 背侧流
  b.rect(700, 660, 590, 120, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.8, rx: 10 })
  b.text(720, 688, '背侧流（在哪里/怎么做）', { size: 14, weight: 700, fill: C.accD })
  const dors = ['V1', 'V2', 'MT', '顶叶']
  dors.forEach((v, i) => {
    b.tag(790 + i * 130, 726, v, { fill: '#ffffff', stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 8 })
  })
  b.arrow(825, 726, 895, 726, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(945, 726, 1025, 726, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1075, 726, 1155, 726, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.wtext(720, 762, '运动、位置、深度、光流；快而粗、可无意识引导动作——损伤致视觉共济失调、运动知觉丧失。', { size: 10.5, fill: C.sub, maxW: 550, lh: 15 })
  // 专家模块
  b.ctext(700, 824, '高级视觉的「专家模块」', { size: 13, weight: 700, fill: C.ink })
  b.rect(90, 844, 400, 100, { fill: C.proL, fillOp: 0.4, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(110, 870, '梭状回面孔区（FFA）', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(110, 892, '对面孔最适刺激选择性反应；损伤致面孔失认症——认得出是脸，认不出是谁的脸。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.rect(510, 844, 400, 100, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(530, 870, '旁海马回位置区（PPA）', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(530, 892, '对场景与布局敏感；与 FFA 共同展示高级视觉的领域特异性与经验可塑性——象棋专家的「棋盘模块」亦循此理。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.rect(930, 844, 410, 100, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.wtext(950, 870, '双流假说的临床证据：视觉失认症患者能准确把信投进邮筒（背侧流完好）却说不出邮筒是什么（腹侧流受损）——「完好的视觉引导动作 + 缺失的视觉意识」。', { size: 10.5, fill: C.sub, maxW: 370, lh: 15 })
}

export default scene({
  title: '视觉中枢通路：半交叉、LGN 分层、特征检测层级与双流假说',
  subtitle: '鼻侧半交叉使每侧半球管理对侧视野；腹侧流管「是什么」、背侧流管「在哪里/怎么做」',
  draw,
})
