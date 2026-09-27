// ph ch10-s3 能量代谢：间接测热、呼吸商、BMR 与能量平衡
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、间接测热原理 ============
  b.panel(30, 132, 660, 398, { title: '一、间接测热：从气体交换到 Weir 公式' })
  b.tag(330, 192, '三大营养素体内氧化', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 12.5, weight: 700, pad: 12 })
  b.arrow(300, 204, 232, 236, { stroke: C.sub, sw: 2 })
  b.arrow(385, 204, 448, 236, { stroke: C.sub, sw: 2 })
  b.rect(150, 240, 160, 44, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(230, 266, 'O_{2} 消耗（VO_{2}）', { size: 12, weight: 700, fill: C.accD })
  b.rect(370, 240, 160, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(450, 266, 'CO_{2} 产生（VCO_{2}）', { size: 12, weight: 700, fill: C.badD })
  b.arrow(230, 286, 310, 328, { stroke: C.sub, sw: 2 })
  b.arrow(450, 286, 390, 328, { stroke: C.sub, sw: 2 })
  b.rect(260, 330, 180, 46, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(350, 358, '呼吸气体分析（代谢车）', { size: 11.5, weight: 700, fill: C.sub })
  b.arrow(350, 378, 350, 400, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.rect(90, 402, 460, 62, { fill: C.bg, stroke: C.acc, sw: 2, rx: 10 })
  b.text(110, 428, '产热(kcal/d) = (3.9×VO_{2} + 1.1×VCO_{2}) × 1440', { size: 14, weight: 700, fill: C.accD })
  b.text(110, 452, '（VO_{2}、VCO_{2} 以 L/min 计；与量热舱直接测热相差 <1–2%）', { size: 11.5, fill: C.sub })
  b.wtext(50, 490, '氧热价（每升 O_{2} 的产热）：糖 5.05、混合膳食 4.825、蛋白 4.60、脂肪 4.69 kcal/L——间接测热据此把气体交换换算为能量，无需密闭量热舱。', { size: 12, fill: C.sub, maxW: 620, lh: 19 })

  // ============ 二、呼吸商标尺 ============
  b.panel(710, 132, 660, 398, { title: '二、呼吸商（RQ）标尺：底物决定产 CO₂ 比例' })
  b.ctext(1040, 195, 'RQ = VCO_{2} / VO_{2}', { size: 15, weight: 700, fill: C.ink })
  b.arrow(740, 300, 1340, 300, { stroke: C.sub, sw: 2.4 })
  const ticks: Array<[number, string]> = [[750, '0.70'], [840, '0.75'], [930, '0.80'], [1020, '0.85'], [1110, '0.90'], [1200, '0.95'], [1290, '1.00']]
  ticks.forEach(([x, s]) => {
    b.line(x, 300, x, 306, { stroke: C.sub, sw: 1.8 })
    b.ctext(x, 322, s, { size: 11.5, fill: C.mute })
  })
  b.tag(760, 245, '脂肪 0.70', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 11.5, weight: 700, pad: 8 })
  b.line(760, 255, 760, 294, { stroke: C.warn, sw: 1.6, dash: '5 4' })
  b.tag(930, 215, '蛋白 0.80', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700, pad: 8 })
  b.line(930, 225, 930, 294, { stroke: C.pro, sw: 1.6, dash: '5 4' })
  b.tag(1020, 245, '混合膳食 0.85', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11.5, weight: 700, pad: 8 })
  b.line(1020, 255, 1020, 294, { stroke: C.acc, sw: 1.6, dash: '5 4' })
  b.tag(1290, 245, '糖 1.00', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11.5, weight: 700, pad: 8 })
  b.line(1290, 255, 1290, 294, { stroke: C.dna, sw: 1.6, dash: '5 4' })
  b.ctext(850, 352, '← 脂类底物', { size: 11, fill: C.mute })
  b.ctext(1230, 352, '糖类底物 →', { size: 11, fill: C.mute })
  b.wtext(730, 395, 'RQ 由氧化底物决定：糖「含氧充足」，每耗 1 分子 O_{2} 即产 1 分子 CO_{2}；脂的碳氢长链需额外耗氧，产 CO_{2} 较少。非底物因素：过度通气或酸中毒（缓冲碱放出 CO_{2}）可令 RQ>1；长期饥饿、糖异生旺盛时可低于 0.70。', { size: 12, fill: C.sub, maxW: 620, lh: 19 })

  // ============ 三、BMR ============
  b.panel(30, 546, 660, 439, { title: '三、基础代谢率：条件与影响因素' })
  b.text(50, 618, '测定条件', { size: 14, weight: 700, fill: C.sub })
  const cond = (y: number, s: string) => {
    b.rect(48, y - 11, 11, 11, { fill: C.okL, stroke: C.ok, sw: 1.4 })
    b.text(66, y, s, { size: 12, fill: C.sub })
  }
  cond(650, '清晨清醒、静卧（肌松）')
  cond(678, '禁食 12–14 h（排除 SDA）')
  cond(706, '室温 20–25 ℃')
  cond(734, '情绪安定、无应激')
  b.text(300, 618, '影响因素', { size: 14, weight: 700, fill: C.sub })
  b.wtext(300, 646, '① 体表面积律：BMR 与体表面积成正比（同体重下瘦高者高于矮胖者）；② 甲状腺激素是 BMR 最主要的内源性驱动；③ 年龄递减、男性略高于女性；④ 体温每升高 1 ℃ 代谢率约增 13%。', { size: 12, fill: C.sub, maxW: 360, lh: 19 })
  b.wtext(50, 770, 'BMR 常以体表面积归一（kcal/m^{2}·h）；甲状腺功能检查是 BMR 异常的第一筛查方向。', { size: 11.5, fill: C.sub, maxW: 220, lh: 17 })
  // 甲亢/甲减条图
  b.tag(505, 755, '甲状腺激素为主导因素', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11.5, weight: 700, pad: 10 })
  b.line(320, 880, 650, 880, { stroke: C.sub, sw: 2 })
  b.rect(478, 810, 44, 70, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(500, 800, '+40–60%', { size: 11.5, weight: 700, fill: C.badD })
  b.ctext(500, 905, '甲亢', { size: 12, weight: 700, fill: C.badD })
  b.line(400, 873, 400, 887, { stroke: C.sub, sw: 2.6 })
  b.ctext(400, 905, '正常 100%', { size: 11.5, weight: 700, fill: C.sub })
  b.rect(568, 880, 44, 50, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(590, 948, '−40–60%', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(590, 972, '甲减', { size: 12, weight: 700, fill: C.accD })
  b.ctext(470, 936, 'BMR（相对正常值幅度）', { size: 11.5, fill: C.mute })

  // ============ 四、SDA 与能量平衡 ============
  b.panel(710, 546, 660, 439, { title: '四、食物特殊动力效应与能量平衡' })
  b.ctext(910, 600, '食物特殊动力效应（SDA）', { size: 15, weight: 700, fill: C.sub })
  b.wtext(740, 628, '进食后额外产热（占摄入能百分比）：蛋白质最显著——氨基酸脱氨与尿素合成耗能。', { size: 11.5, fill: C.sub, maxW: 340, lh: 17 })
  b.arrow(760, 830, 760, 655, { stroke: C.sub, sw: 2, marker: 'ink' })
  const yt: Array<[number, string]> = [[830, '0'], [778, '10'], [726, '20'], [674, '30']]
  yt.forEach(([y, s]) => {
    b.line(754, y, 760, y, { stroke: C.sub, sw: 1.8 })
    b.etext(748, y + 4, s, { size: 11, fill: C.mute })
  })
  b.etext(748, 648, '额外产热（%）', { size: 11.5, weight: 600, fill: C.sub })
  b.rect(778, 674, 56, 156, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(806, 664, '~30%', { size: 11.5, weight: 700, fill: C.badD })
  b.rect(853, 799, 56, 31, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(881, 789, '~6%', { size: 11.5, weight: 700, fill: C.dnaD })
  b.rect(928, 809, 56, 21, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(956, 799, '~4%', { size: 11.5, weight: 700, fill: C.dnaD })
  b.rect(1003, 778, 56, 52, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(1031, 768, '~10%', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(806, 852, '蛋白质', { size: 11.5, fill: C.sub })
  b.ctext(881, 852, '糖类', { size: 11.5, fill: C.sub })
  b.ctext(956, 852, '脂肪', { size: 11.5, fill: C.sub })
  b.ctext(1031, 852, '混合膳食', { size: 11.5, fill: C.sub })
  b.wtext(740, 880, 'BMR 测定须禁食 12 h 以上，正是为排除 SDA 干扰；高蛋白餐后代谢率可升高约 30% 并持续数小时。', { size: 11.5, fill: C.sub, maxW: 320, lh: 17 })
  b.rect(1080, 615, 285, 95, { fill: C.bg, stroke: C.acc, sw: 2, rx: 10 })
  b.ctext(1222, 648, '摄入能量', { size: 15, weight: 700, fill: C.ink })
  b.ctext(1222, 676, '= 输出能量 + 贮存变动', { size: 13, weight: 600, fill: C.accD })
  b.wtext(1080, 735, '输出 = 外做功（机械功）+ 产热（基础代谢 + SDA + 肌肉活动生热）；贮存变动 = 脂肪与糖原的净增减——长期正平衡则增重、负平衡则减重，肥胖的本质是长期正平衡。', { size: 12, fill: C.sub, maxW: 285, lh: 19 })
  b.wtext(1080, 840, '衡量指标：体质指数 BMI = 体重(kg)/身高(m)^{2}；基础状态下产热几乎全部转化为体热，外做功近零。', { size: 11.5, fill: C.sub, maxW: 285, lh: 17 })
}

export default scene({
  title: '能量代谢：间接测热、呼吸商与基础代谢率',
  subtitle: 'Weir 公式以 VO_{2}/VCO_{2} 换算产热；呼吸商糖 1.00、混合膳食 0.85、蛋白 0.80、脂肪 0.70；甲亢/甲减时 BMR 变动可达 ±40–60%，蛋白质特殊动力效应约 30%',
  draw,
})
