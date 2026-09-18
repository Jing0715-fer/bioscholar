// bc ch12-s1 主要器官的代谢分工（39-a 最终收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、六大器官对照表 ============
  b.panel(30, 132, 1340, 490, { title: '一、六大器官的燃料偏好与特有功能对照' })
  b.table(64, 186, 1272, {
    headers: ['器官', '主要燃料', '特有 / 关键功能'],
    colW: [170, 330, 772],
    rowH: 60,
    fontSize: 13.5,
    rows: [
      ['肝（代谢中枢）', '脂肪酸 · 氨基酸', '糖异生主场所；唯一生成酮体与尿素；组装 VLDL；不利用酮体（缺 SCOT）'],
      ['脑', '葡萄糖（长期饥饿加用酮体）', '日耗糖 100~120 g（占全身 60% 以上）；不能用长链脂肪酸；血糖 < 2 mmol/L 即昏迷'],
      ['心肌', '脂肪酸 ＞ 酮体 / 乳酸', '线粒体密度高、有氧氧化为主，耐力型氧化代谢；极少依赖无氧酵解'],
      ['骨骼肌', '视运动强度（静息脂肪酸 / 剧烈运动糖酵解）', '缺 G6P 磷酸酶 → 肌糖原不直接补血糖，经 Cori 循环间接输出碳与氮'],
      ['脂肪组织', '—（储而不耗）', 'LPL 储脂 · HSL 动员；TAG 储库 + 内分泌器官（瘦素 · 脂联素 · 抵抗素）'],
      ['红细胞', '葡萄糖（仅糖酵解）', '无线粒体，糖酵解唯一产能途径；2,3-BPG 旁路调节血红蛋白运氧；NADPH 维持 GSH'],
    ],
  })
  b.ctext(710, 612, '三句口诀：肝是唯一生成酮体与尿素的器官 · 脑不能用脂肪酸 · 红细胞只靠糖酵解。', { size: 11.5, weight: 600, fill: C.ink })

  // ============ 二、器官间协作：Cori 循环与葡萄糖-丙氨酸循环 ============
  b.panel(30, 634, 700, 346, { title: '二、器官间协作：Cori 循环与葡萄糖-丙氨酸循环' })
  // 肝
  b.rect(56, 706, 180, 210, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 10 })
  b.ctext(146, 738, '肝', { size: 17, weight: 700, fill: C.accD })
  b.ctext(146, 766, '糖异生 · 尿素 · 酮体', { size: 10, fill: C.sub })
  b.ctext(146, 788, 'VLDL · 血糖缓冲器', { size: 10, fill: C.sub })
  b.ctext(146, 810, '葡糖激酶 Km≈10 mmol/L', { size: 9, fill: C.mute })
  b.ctext(146, 832, '不利用酮体（缺 SCOT）', { size: 9, fill: C.mute })
  b.ctext(146, 854, '胆固醇合成 70%~80%', { size: 9, fill: C.mute })
  // 骨骼肌
  b.rect(500, 706, 170, 210, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.8, rx: 10 })
  b.ctext(585, 738, '骨骼肌', { size: 17, weight: 700, fill: C.proD })
  b.ctext(585, 766, '静息：脂肪酸氧化', { size: 10, fill: C.sub })
  b.ctext(585, 788, '剧烈运动：糖酵解', { size: 10, fill: C.sub })
  b.ctext(585, 810, '缺 G6P 磷酸酶', { size: 9, fill: C.mute })
  b.ctext(585, 832, '支链 AA（Leu·Ile·Val）', { size: 9, fill: C.mute })
  b.ctext(585, 854, '主要在肌内氧化供能', { size: 9, fill: C.mute })
  // Cori 循环两支
  b.arrow(492, 752, 246, 752, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(368, 736, '乳酸', { size: 11, weight: 700, fill: C.accD })
  b.ctext(368, 772, '肌糖原经糖酵解', { size: 9, fill: C.mute })
  b.arrow(244, 806, 490, 806, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(368, 790, '葡萄糖', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(368, 826, '肝糖异生回输', { size: 9, fill: C.mute })
  b.braceH(250, 848, 240, { label: 'Cori 循环' })
  // 葡萄糖-丙氨酸循环
  b.arrow(492, 910, 246, 910, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(368, 894, '丙氨酸（碳 + 氮）', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(368, 930, '葡萄糖-丙氨酸循环 · 氮 → 尿素', { size: 9, fill: C.mute })
  b.ctext(368, 954, '肌缺 G6P 酶 → 肌糖原不直接升血糖，间接输出碳与氮', { size: 9.5, weight: 600, fill: C.sub })

  // ============ 三、三个「极端」器官的关键数字 ============
  b.panel(750, 634, 620, 346, { title: '三、三个「极端」器官的关键数字' })
  b.tag(790, 703, '脑', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 8 })
  b.wtext(838, 690, '日耗葡萄糖 100~120 g（占全身 60% 以上），不能用长链脂肪酸；长期饥饿时酮体满足 50%~70% 需要（节约肌肉蛋白）；血糖 < 2 mmol/L 即低血糖昏迷。', { size: 10.5, fill: C.sub, maxW: 480, lh: 15 })
  b.line(770, 733, 1350, 733, { stroke: C.line, sw: 1 })
  b.tag(790, 758, '肝', { fill: C.accL, stroke: C.acc, size: 13, weight: 700, tfill: C.accD, pad: 8 })
  b.wtext(838, 745, '胆固醇合成占全身 70%~80%；氧化脂肪酸「挥霍」供能而不利用酮体（缺 SCOT）；一般不完整氧化葡萄糖（优先输出）——代谢中枢「改造厂」。', { size: 10.5, fill: C.sub, maxW: 480, lh: 15 })
  b.line(770, 788, 1350, 788, { stroke: C.line, sw: 1 })
  b.tag(790, 813, '红细胞', { fill: C.badL, stroke: C.bad, size: 13, weight: 700, tfill: C.bad, pad: 8 })
  b.wtext(838, 800, '无线粒体，糖酵解为唯一产能途径；2,3-BPG 旁路调节血红蛋白氧亲和力；PPP 产 NADPH 维持 GSH，抗氧化护膜。', { size: 10.5, fill: C.sub, maxW: 480, lh: 15 })
  b.rect(766, 862, 588, 92, { fill: C.panelB, fillOp: 0.8, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(782, 886, '「中枢-外周」燃料互补', { size: 12, weight: 700, fill: C.ink })
  b.wtext(782, 910, '肝输出葡萄糖 / 酮体 / VLDL 供脑与外周；外周回输乳酸 · 丙氨酸 · 甘油 · FFA 作肝原料——血糖与燃料池由此恒定。', { size: 10.5, fill: C.sub, maxW: 540, lh: 15 })
}

export default scene({
  title: '六大器官的代谢分工：燃料偏好与特有功能',
  subtitle: '肝唯一生成酮体与尿素且不利用酮体；脑日耗糖 100~120 g 不能用脂肪酸；心肌偏爱脂肪酸；肌缺 G6P 酶经 Cori 循环补糖；红细胞仅糖酵解（2,3-BPG 调运氧）',
  draw,
})
