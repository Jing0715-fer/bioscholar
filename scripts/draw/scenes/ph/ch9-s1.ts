// ph ch9-s1 通气力学：呼吸泵与胸膜腔负压、P-V 曲线、表面活性物质与气道阻力
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、呼吸泵与胸膜腔负压偶联 ============
  b.panel(30, 132, 660, 430, { title: '一、呼吸泵与胸膜腔负压：液压传动式偶联' })
  // 左：正常偶联示意
  b.rect(70, 172, 250, 235, { fill: 'none', stroke: C.sub, sw: 2.5, rx: 16 })
  b.rect(80, 182, 230, 215, { fill: C.accL, fillOp: 0.45, stroke: 'none' })
  b.text(78, 165, '胸膜腔（浆液 10–20 ml）', { size: 9.5, fill: C.accD, weight: 600 })
  b.arrow(112, 170, 128, 196, { stroke: C.acc, sw: 1.4, marker: 'acc' })
  // 肺（双叶形状）
  b.path('M 185,212 C 140,212 114,256 111,314 C 109,356 134,382 158,382 C 175,382 180,368 185,352 C 190,368 195,382 212,382 C 236,382 261,356 259,314 C 256,256 230,212 185,212 Z', { fill: '#ffffff', stroke: C.dna, sw: 2.4 })
  b.ctext(185, 262, '肺弹性回缩', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(185, 282, '（肺本身无肌肉）', { size: 9, fill: C.mute })
  b.arrow(122, 248, 150, 272, { stroke: C.dna, sw: 1.5, marker: 'dna' })
  b.arrow(248, 248, 220, 272, { stroke: C.dna, sw: 1.5, marker: 'dna' })
  // 膈肌穹顶
  b.path('M 84,398 Q 185,348 286,398', { fill: 'none', stroke: C.enz, sw: 3 })
  b.arrow(185, 356, 185, 392, { stroke: C.enz, sw: 1.5, marker: 'enz' })
  b.ctext(300, 396, '膈肌', { size: 9.5, fill: C.enzD, weight: 600 })
  // 胸廓外弹箭头
  b.arrow(66, 232, 42, 232, { stroke: C.sub, sw: 1.5, marker: 'ink' })
  b.arrow(66, 316, 42, 316, { stroke: C.sub, sw: 1.5, marker: 'ink' })
  b.arrow(324, 232, 348, 232, { stroke: C.sub, sw: 1.5, marker: 'ink' })
  b.arrow(324, 316, 348, 316, { stroke: C.sub, sw: 1.5, marker: 'ink' })
  b.ctext(336, 212, '胸廓外弹', { size: 9.5, fill: C.sub, weight: 600 })
  b.wtext(70, 424, '膈肌供平静吸气约 70% 做功（下降 1–2 cm，深吸气 7–10 cm）；肋间外肌上抬肋骨；膈神经 C3–C5。', { size: 9.5, fill: C.mute, maxW: 300, lh: 14 })
  // 右：气胸
  b.text(386, 185, '气胸：偶联断裂', { size: 12, weight: 700, fill: C.badD })
  b.rect(400, 200, 230, 200, { fill: 'none', stroke: C.sub, sw: 2.2, rx: 12 })
  b.arrow(405, 213, 442, 240, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.text(398, 208, '破口进气', { size: 9, fill: C.badD })
  b.ctext(505, 218, '胸膜腔负压归零', { size: 9.5, weight: 700, fill: C.badD })
  for (const [cx, cy] of [[432, 262], [462, 250], [560, 258], [578, 288], [440, 356], [568, 352]] as [number, number][]) {
    b.circle(cx, cy, 7, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  }
  b.ellipse(505, 322, 42, 34, { fill: C.badL, stroke: C.bad, sw: 2.2 })
  b.ctext(505, 326, '塌陷肺', { size: 9.5, weight: 700, fill: C.badD })
  b.rect(582, 248, 26, 110, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.ctext(595, 240, '纵隔', { size: 9, fill: C.warnD, weight: 600 })
  b.arrow(556, 303, 578, 303, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.ctext(551, 372, '→ 健侧', { size: 8.5, fill: C.warnD })
  b.wtext(386, 430, '张力性气胸（活瓣破口）：腔压进行性升高并超过大气压→纵隔受压、静脉回流锐减，需紧急穿刺减压；胸腔闭式引流重建负压后肺即复张。', { size: 9.5, fill: C.sub, maxW: 285, lh: 14.5 })
  b.wtext(46, 470, '力传导链：胸廓扩张→胸膜腔压更负→跨肺压（肺泡内压−胸膜腔内压）增大→不含肌肉的肺被动撑开。平静呼气末 P_pl≈−5 cmH_{2}O、吸气末≈−7.5 cmH_{2}O——两股相反弹性力（肺向内、胸廓向外）隔着浆液对峙所致。', { size: 10, fill: C.sub, maxW: 610, lh: 15.5 })
  b.wtext(46, 524, '临床：胸壁穿通伤或肺大疱破裂→空气闯入胸膜腔→负压归零、肺塌陷为致密团块（肺不张），胸廓外弹、纵隔被推向健侧。', { size: 10, fill: C.sub, maxW: 610, lh: 15.5 })

  // ============ 二、肺压力-容积曲线 ============
  b.panel(710, 132, 660, 430, { title: '二、肺压力-容积曲线：顺应性与滞后环' })
  b.arrow(790, 470, 1312, 470, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(790, 470, 790, 190, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(800, 186, '肺容积 (ml)', { size: 10, fill: C.sub })
  for (const [tx, lb] of [[790, '0'], [875, '5'], [960, '10'], [1045, '15'], [1130, '20'], [1215, '25'], [1300, '30']] as [number, string][]) {
    b.line(tx, 470, tx, 476, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 492, lb, { size: 9.5, fill: C.mute })
  }
  for (const [v, lb] of [[0, '0'], [1000, '1000'], [2000, '2000'], [3000, '3000']] as [number, string][]) {
    const ty = 470 - v * 0.09167
    b.line(784, ty, 790, ty, { stroke: C.sub, sw: 1.6 })
    b.etext(780, ty + 4, lb, { size: 9.5, fill: C.mute })
  }
  b.ctext(1045, 514, '跨肺压 (cmH_{2}O)', { size: 10.5, weight: 600, fill: C.sub })
  // 空气充气支 / 放气支（滞后环）
  b.polyline([[790, 470], [875, 442.5], [926, 405.8], [960, 378.3], [1011, 323.3], [1062, 277.5], [1130, 231.7], [1198, 208.9], [1300, 196.8]], { stroke: C.acc, sw: 3 })
  b.polyline([[1300, 196.8], [1215, 207.1], [1130, 225], [1045, 261.7], [960, 313.3], [875, 382.9], [824, 437.9], [790, 470]], { stroke: C.dna, sw: 3 })
  // 盐水充盈（虚线）
  b.polyline([[790, 470], [841, 415], [875, 369.2], [926, 295.8], [960, 250], [1011, 209.6], [1062, 198.8], [1130, 196], [1300, 195]], { stroke: C.warn, sw: 2.2, dash: '7 5' })
  // 顺应性切线
  b.line(953, 385, 1047, 284, { stroke: C.mute, sw: 1.4, dash: '5 4' })
  b.text(1055, 296, '顺应性 ≈ 200 ml/cmH_{2}O', { size: 9.5, weight: 600, fill: C.sub })
  // 曲线标注
  b.text(830, 425, '充气支', { size: 10, weight: 700, fill: C.acc })
  b.arrow(855, 412, 880, 395, { stroke: C.acc, sw: 1.3, marker: 'acc' })
  b.text(1000, 258, '放气支', { size: 10, weight: 700, fill: C.dna })
  b.text(985, 315, '滞后环', { size: 9.5, weight: 700, fill: C.sub })
  b.text(798, 340, '盐水充盈', { size: 10, weight: 700, fill: C.warnD })
  b.arrow(815, 346, 838, 412, { stroke: C.warn, sw: 1.3, marker: 'warn' })
  b.wtext(726, 526, 'von Neergaard（1929）：充以生理盐水消除气-液界面→滞后环几近消失、充气压大降——肺弹性回缩约 2/3 来自表面张力、1/3 来自弹性纤维与胶原。', { size: 10, fill: C.sub, maxW: 630, lh: 14 })
  b.wtext(726, 554, '肺纤维化、肺水肿、ARDS→顺应性↓（肺变「硬」）；肺气肿→顺应性↑（回缩无力、呼气塌陷）。', { size: 10, fill: C.sub, maxW: 630, lh: 14 })

  // ============ 三、表面活性物质 ============
  b.panel(30, 582, 660, 390, { title: '三、表面活性物质：Laplace 定律的解药' })
  b.text(46, 642, 'Laplace：P = 2T / r', { size: 11.5, weight: 700, fill: C.ink })
  b.circle(110, 706, 46, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 2.4 })
  b.ctext(110, 710, 'P 低', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(110, 772, 'r 大', { size: 9.5, fill: C.sub })
  b.circle(225, 738, 23, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 2.2 })
  b.ctext(225, 742, 'P 高', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(225, 772, 'r 小', { size: 9.5, fill: C.sub })
  b.arrow(200, 730, 164, 718, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(183, 694, '气流', { size: 9, weight: 600, fill: C.badD })
  b.wtext(46, 806, '同一 T 下小泡内压更高（r 减半→P 翻倍），气体被持续压入大泡→小泡进行性塌缩、呼气末全肺萎缩。', { size: 9.5, fill: C.sub, maxW: 285, lh: 14.5 })
  b.wtext(46, 856, 'DPPC 之解：肺泡缩小→表面分子挤密→小泡 T 更小→大小肺泡回缩压相近→彼此稳定，并保持肺泡相对干燥。', { size: 9.5, fill: C.sub, maxW: 285, lh: 14.5 })
  // 右：DPPC 单分子层
  b.text(380, 642, '肺泡内壁液面与 DPPC 单分子层', { size: 11, weight: 700, fill: C.sub })
  b.text(382, 662, '亲水头插入液膜、疏水尾翘出气相', { size: 9, fill: C.mute })
  b.rect(390, 690, 270, 26, { fill: C.accL, fillOp: 0.5, stroke: 'none' })
  b.line(390, 690, 660, 690, { stroke: C.acc, sw: 2 })
  b.ctext(525, 708, '肺泡液（纯水表面张力≈70 dyn/cm）', { size: 8.5, fill: C.accD })
  for (const hx of [420, 465, 510, 555, 600]) {
    b.circle(hx, 690, 6, { fill: C.proL, stroke: C.pro, sw: 1.5 })
    b.line(hx - 3, 684, hx - 8, 666, { stroke: C.pro, sw: 1.2 })
    b.line(hx + 3, 684, hx + 8, 666, { stroke: C.pro, sw: 1.2 })
  }
  b.wtext(380, 748, 'II 型肺泡上皮细胞合成分泌，主要成分为 DPPC；肺泡缩小时被挤压变密，T 可降至个位数 dyn/cm；SP-A/B/C/D 协助铺展，SP-A、SP-D 兼任免疫防御。', { size: 9.5, fill: C.sub, maxW: 280, lh: 14.5 })
  b.wtext(380, 812, '新生儿呼吸窘迫综合征（NRDS）：早产儿 II 型细胞未成熟（约孕 34 周后才大量合成）→肺进行性塌陷、换气衰竭。', { size: 9.5, fill: C.sub, maxW: 280, lh: 14.5 })
  b.rect(46, 894, 614, 50, { fill: C.panelB, rx: 8 })
  b.wtext(60, 914, '「从一条物理定律到一套疗法」：Avery 与 Mead（1959）证明 NRDS 本质即表面活性物质缺乏——产前糖皮质激素促肺成熟＋生后外源性替代治疗，使死亡率大幅下降。', { size: 9.5, fill: C.sub, maxW: 585, lh: 14.5 })

  // ============ 四、气道阻力分布与等压点 ============
  b.panel(710, 582, 660, 390, { title: '四、气道阻力分布与等压点：呼气用力悖论' })
  b.text(726, 642, '阻力分布（Raw 1–2 cmH_{2}O/(L·s)，经鼻呼吸）', { size: 10.5, weight: 700, fill: C.sub })
  b.text(726, 676, '鼻腔', { size: 10, fill: C.sub })
  b.rect(800, 664, 110, 16, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.text(918, 676, '≈ 一半', { size: 9.5, weight: 600, fill: C.accD })
  b.text(726, 706, '中等支气管', { size: 10, fill: C.sub })
  b.rect(800, 694, 95, 16, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.text(903, 706, '其余主要部分', { size: 9.5, weight: 600, fill: C.accD })
  b.text(726, 736, '细支气管', { size: 10, fill: C.sub })
  b.rect(800, 724, 14, 16, { fill: C.okL, stroke: C.ok, sw: 1.5 })
  b.text(822, 736, '并联总横截面积巨大→合阻力很小', { size: 9.5, weight: 600, fill: C.okD })
  b.wtext(726, 770, '「最细的管道不是最大的障碍」；迷走 ACh–M_{3} 收缩、交感与儿茶酚胺经 β_{2} 受体舒张——哮喘痉挛与 β_{2} 激动剂的治疗逻辑。', { size: 9.5, fill: C.sub, maxW: 300, lh: 14.5 })
  // 等压点示意
  b.text(1050, 642, '等压点与动态压缩', { size: 10.5, weight: 700, fill: C.sub })
  b.ellipse(1082, 722, 26, 30, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(1082, 726, '肺泡', { size: 9, weight: 700, fill: C.accD })
  b.rect(1106, 706, 74, 36, { fill: '#ffffff', stroke: C.sub, sw: 2 })
  b.path('M 1180,706 L 1195,714 L 1210,706', { fill: 'none', stroke: C.bad, sw: 2.2 })
  b.path('M 1180,742 L 1195,734 L 1210,742', { fill: 'none', stroke: C.bad, sw: 2.2 })
  b.rect(1210, 706, 90, 36, { fill: '#ffffff', stroke: C.sub, sw: 2 })
  b.line(1195, 682, 1195, 762, { stroke: C.bad, sw: 1.2, dash: '4 4' })
  b.ctext(1195, 674, '等压点（P_{气道}=P_{pl}）', { size: 9, weight: 700, fill: C.badD })
  b.arrow(1255, 692, 1255, 702, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.arrow(1255, 756, 1255, 746, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.ctext(1255, 682, 'P_pl 挤压', { size: 8.5, weight: 600, fill: C.badD })
  b.ctext(1255, 774, '口侧', { size: 9, fill: C.mute })
  b.arrow(1130, 690, 1112, 700, { stroke: C.acc, sw: 1.3, marker: 'acc' })
  b.text(1054, 688, 'P 递减', { size: 8.5, fill: C.accD })
  b.wtext(1050, 800, '用力呼气：气道内压自肺泡向口侧衰减，至与胸膜腔压相等处以口侧受净外压而动态压缩；肺气肿回缩力弱→等压点向小气道移位→小气道提前塌陷。', { size: 9.5, fill: C.sub, maxW: 300, lh: 14.5 })
  b.wtext(1050, 852, '缩唇呼吸：提高口侧压、把等压点外移——「再用力反更不通气」的呼气用力悖论的代偿解。', { size: 9.5, fill: C.sub, maxW: 300, lh: 14.5 })
  b.rect(726, 894, 628, 62, { fill: C.panelB, rx: 8 })
  b.wtext(740, 914, '呼吸功＝弹性功（约与潮气量平方成正比）＋阻力功（约与气流量平方成正比），安静时仅占全身能耗 3%–5%；浅快省弹性功但阻力功与死腔占比陡增，深慢相反——机体自发落于约 12–16 次/分的省功区间；COPD 倾向深慢、肺纤维化倾向浅快。', { size: 9.5, fill: C.sub, maxW: 600, lh: 14.5 })
}

export default scene({
  title: '通气力学：呼吸泵、胸膜腔负压与肺的弹性',
  subtitle: '胸膜腔压平静呼气末 −5、吸气末 −7.5 cmH_{2}O 偶联胸廓与肺（气胸即偶联断裂）；肺顺应性约 200 ml/cmH_{2}O、回缩力约 2/3 源于气-液界面表面张力；DPPC 化解 Laplace 小泡塌缩，等压点动态压缩解释呼气用力悖论',
  draw,
})
