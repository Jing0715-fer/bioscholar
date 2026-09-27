// ph ch11-s4 肾对酸碱与钾平衡的调节：三道防线、排酸两路径、代偿表与血钾
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三道防线：秒·分钟·小时至天 ============
  b.panel(30, 132, 660, 400, { title: '一、三道防线：秒·分钟·小时至天' })
  b.tag(350, 190, 'pH 7.35–7.45：三道防线接力维护', { fill: C.panelB, stroke: C.mute, tfill: C.ink, size: 11.5, weight: 700 })
  b.line(60, 232, 640, 232, { stroke: C.sub, sw: 3, marker: 'ink' })
  for (const [x, t, c] of [[145, '秒', C.acc], [350, '分钟', C.dna], [555, '小时→天', C.rna]] as [number, string, string][]) {
    b.circle(x, 232, 6.5, { fill: c })
    b.ctext(x, 226, t, { size: 11, weight: 700, fill: C.sub })
    b.line(x, 238, x, 268, { stroke: C.sub, sw: 1.6, dash: '4 3' })
  }
  const def = (x: number, fill: string, stroke: string, tfill: string, t1: string, t2: string, body: string) => {
    b.rect(x, 272, 190, 100, { fill, stroke, sw: 1.8, rx: 10 })
    b.ctext(x + 95, 296, t1, { size: 12.5, weight: 700, fill: tfill })
    b.ctext(x + 95, 316, t2, { size: 10.5, fill: C.mute })
    b.wtext(x + 22, 336, body, { size: 9.5, fill: C.sub, maxW: 150, lh: 13.5 })
  }
  def(50, C.accL, C.acc, C.accD, '① 化学缓冲', '秒级', 'HCO_{3}^{-}/H_{2}CO_{3}·磷酸盐·蛋白·骨')
  def(255, C.dnaL, C.dna, C.dnaD, '② 呼吸调节', '分钟级', '化学感受器→通气排 CO_{2}（分母）')
  def(460, C.rnaL, C.rna, C.rnaD, '③ 肾脏调节', '小时至天级', '回收·新生成 HCO_{3}^{-}·排 NH_{4}^{+}（分子）')
  b.rect(90, 396, 460, 58, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10 })
  b.ctext(320, 420, 'pH = 6.1 + log [HCO_{3}^{-}] / (0.03 × PCO_{2})', { size: 15, weight: 700, fill: C.accD })
  b.ctext(320, 442, '亨德森-哈塞尔巴尔赫方程：呼吸掐分母、肾脏执掌分子', { size: 10.5, fill: C.sub })
  b.wtext(50, 478, '每日酸负荷：挥发性 CO_{2} 约 15000 mmol 由肺排出；固定酸 50–100 mEq 由肾中和。碳酸氢盐缓冲对因肺随时排 CO_{2} 成开放系统、效力最强。', { size: 11, fill: C.sub, maxW: 620, lh: 16.5 })

  // ============ 二、HCO3- 回收与净酸排泄两路径 ============
  b.panel(710, 132, 660, 400, { title: '二、HCO_{3}^{-} 回收与净酸排泄两路径' })
  b.tag(855, 180, 'HCO_{3}^{-} 回收（近端 80–85%）', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 10 })
  b.rect(740, 205, 230, 52, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(855, 226, '滤过 HCO_{3}^{-} ≈4300 mmol/日', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(855, 245, '24 mmol/L × 180 L', { size: 10, fill: C.mute })
  b.arrow(855, 259, 855, 282, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(740, 284, 230, 58, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(855, 305, '近端小管回收 80–85%', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(855, 323, 'NHE3 泌 H^{+}·CA IV/II', { size: 10, fill: C.sub })
  b.arrow(855, 344, 855, 366, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(740, 368, 230, 58, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(855, 389, '远端闰细胞回收余 15%', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(855, 407, 'H^{+}-ATP 酶·管腔 pH 低至 4.4', { size: 10, fill: C.sub })
  b.wtext(740, 450, '泌 1 个 H^{+} 换回 1 个 HCO_{3}^{-}——把不通透的 HCO_{3}^{-} 翻译成可通透的 CO_{2}（乙酰唑胺即卡断此环）', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  // 右列：两路径
  b.tag(1180, 180, '净酸排泄两路径', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11.5, weight: 700 })
  b.rect(1010, 205, 340, 56, { fill: C.bg, stroke: C.rna, sw: 1.6, rx: 8 })
  b.ctext(1180, 226, '可滴定酸（约占 1/3）', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(1180, 246, 'H^{+} 由磷酸盐缓冲对接住（pK_{a}≈6.8）', { size: 10, fill: C.sub })
  b.tag(1180, 290, '受滤过磷酸盐封顶·几无上调余地', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 10.5, weight: 700, pad: 10 })
  b.rect(1010, 318, 340, 56, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(1180, 339, '铵 NH_{4}^{+}（约占 2/3·可上调）', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(1180, 359, '谷氨酰胺 → 2 NH_{4}^{+} + 2 HCO_{3}^{-}', { size: 10, fill: C.sub })
  b.tag(1180, 404, '慢性酸中毒谷氨酰胺酶诱导·数倍放大', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 10 })
  b.wtext(1010, 442, 'NH_{3} 弥散入酸性管腔被 H^{+} 捕获为不通透的 NH_{4}^{+}（扩散捕获）；襻升支 NH_{4}^{+} 顶替 K^{+} 搭 NKCC2 车回髓质浓集。', { size: 10.5, fill: C.sub, maxW: 340, lh: 23 })
  b.tag(855, 507, '净酸排泄 ＝ 可滴定酸 + NH_{4}^{+} − HCO_{3}^{-}', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700 })

  // ============ 三、四种酸碱紊乱的代偿方向 ============
  b.panel(30, 548, 660, 437, { title: '三、四种酸碱紊乱的代偿方向' })
  b.table(50, 598, 620, {
    headers: ['紊乱类型', '原发改变', '代偿方向与时程'],
    colW: [165, 130, 325],
    rowH: 52,
    fontSize: 11.5,
    rows: [
      ['代谢性酸中毒', 'HCO_{3}^{-} ↓', '呼吸深快降 PCO_{2}（Winter 公式校验）'],
      ['代谢性碱中毒', 'HCO_{3}^{-} ↑', '呼吸变浅升 PCO_{2}（常被缺氧刺激钳制）'],
      ['呼吸性酸中毒', 'PCO_{2} ↑', '急性靠缓冲；肾升 HCO_{3}^{-}，3–5 天达坪'],
      ['呼吸性碱中毒', 'PCO_{2} ↓', '肾减泌 H^{+}·降 HCO_{3}^{-}，数日完成'],
    ],
  })
  b.tag(230, 888, 'Winter：预期 PCO_{2} = 1.5×[HCO_{3}^{-}] + 8 ± 2 mmHg', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 12 })
  b.tag(540, 888, '阴离子间隙 AG 正常 8–12 mEq/L', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11, weight: 700, pad: 12 })
  b.wtext(50, 925, 'AG ＝ [Na^{+}] − ([Cl^{−}] + [HCO_{3}^{-}])：AG 升高＝新酸蓄积（乳酸·酮体·MUDPILES 谱）；AG 正常＝丢 HCO_{3}^{-}（腹泻·肾小管酸中毒→高氯性）。代偿从不矫枉过正——偏离预期值即提示混合型紊乱。', { size: 11, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 四、血钾平衡：98% 在细胞内 ============
  b.panel(710, 548, 660, 437, { title: '四、血钾平衡：98% 在细胞内' })
  b.rect(740, 610, 220, 170, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 12 })
  b.ctext(850, 665, '细胞内 98%', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(850, 687, 'K^{+} ≈ 140 mmol/L', { size: 11.5, fill: C.dnaD })
  b.ctext(850, 708, '总钾 ≈ 3500 mmol', { size: 10.5, fill: C.sub })
  b.rect(1010, 610, 56, 170, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.arrow(964, 670, 1006, 670, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.arrow(1006, 720, 964, 720, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.text(1030, 668, '细胞外 2%', { size: 12, weight: 700, fill: C.warnD })
  b.text(1030, 690, 'K^{+} ≈ 4 mmol/L（仅 70 mmol）', { size: 10.5, fill: C.warnD })
  b.text(1030, 710, '1–2% 挪动即改写血钾', { size: 10, fill: C.mute })
  b.rect(740, 800, 290, 72, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(885, 822, '促入胞', { size: 12, weight: 700, fill: C.okD })
  b.wtext(752, 840, '胰岛素（Na^{+}-K^{+} 泵↑）·β_{2} 激动剂·碱中毒', { size: 10, fill: C.sub, maxW: 268, lh: 13.5 })
  b.rect(1060, 800, 290, 72, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.ctext(1205, 822, '促出胞', { size: 12, weight: 700, fill: C.badD })
  b.wtext(1072, 840, '矿物性酸中毒·剧烈运动·高渗·细胞崩解（溶血·肌溶）', { size: 10, fill: C.sub, maxW: 268, lh: 13.5 })
  b.arrow(872, 798, 852, 782, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(942, 782, 1072, 798, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(740, 888, 610, 52, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 8 })
  b.ctext(1045, 908, '肾远端泌钾 ＝ 血钾最终出口', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1045, 928, '三杠杆：醛固酮·小管流率·酸碱；结肠泌钾受醛固酮调控（慢性肾衰代偿）', { size: 10, fill: C.sub })
  b.tag(890, 965, '高钾 ECG：T 波高尖→QRS 增宽→正弦波', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 10 })
  b.tag(1180, 965, '低钾：U 波·乏力搐搦', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 10 })
}

export default scene({
  title: '肾对酸碱与钾平衡的调节：三道防线与排酸排钾',
  subtitle: '缓冲（秒级）—呼吸（分钟级）—肾脏（小时至天级）三道防线接力；近端回收 HCO_{3}^{-} 80–85%，净酸排泄＝可滴定酸＋NH_{4}^{+}−HCO_{3}^{-}（铵约占 2/3 且可数倍上调）；血钾 98% 居细胞内',
  draw,
})
