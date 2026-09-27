// ph ch8-s4 循环整合：运动、失血与直立的三场景调节接力
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、运动：心泵极限与血流再分配 ============
  b.panel(30, 132, 680, 425, { title: '一、运动：把心泵开到极限，把血流重新洗牌' })
  b.text(46, 190, '心输出量 (L/min)', { size: 10, weight: 600, fill: C.sub })
  b.bars(60, 330, 150, 150, [5, 22.5], { labels: ['静息', '剧烈运动'], vlabels: ['5', '20–25'], max: 26, fill: C.accL, stroke: C.acc })
  b.wtext(46, 390, 'HR 升至 170–190 次/分、搏出量约 100 ml（EDV 略增、ESV 锐减——Starling＋儿茶酚胺并用）；训练有素者 CO 可达 30 L/min 以上。', { size: 9.5, fill: C.sub, maxW: 250, lh: 13.5 })
  b.wtext(46, 450, '中枢命令先行：运动皮层下行激活心血管中枢，CO 在代谢产物蓄积前已爬升；III/IV 类传入（代谢性反射）接力放大；压力感受器工作点上移重调定——较高血压成为运动新常态。', { size: 9.5, fill: C.sub, maxW: 250, lh: 13.5 })
  b.text(46, 528, '等长收缩时肌内血管受挤压、代谢反射更强，血压飙升更陡。', { size: 9, fill: C.mute })
  // 右：血流再分配条形对比
  b.text(310, 190, '血流再分配 (L/min)', { size: 10, weight: 600, fill: C.sub })
  b.legend(560, 190, [['静息', C.acc], ['运动', C.bad]], { size: 9 })
  const rows: Array<[string, number, number, string, string]> = [
    ['肌肉', 1.0, 20, '1', '20 · 占 75%–80%'],
    ['皮肤', 0.25, 3, '0.25', '3（先缩后散热）'],
    ['内脏·肾', 2.8, 1.2, '2.8', '1.2（绝对量收缩）'],
    ['脑', 0.75, 0.75, '0.75', '0.75（恒定）'],
    ['冠脉', 0.25, 1.0, '0.25', '1（3–4 倍）'],
  ]
  rows.forEach(([lab, rest, ex, v1, v2], i) => {
    const y = 205 + i * 47
    b.text(310, y + 15, lab, { size: 9.5, weight: 600, fill: C.ink })
    b.rect(362, y, Math.max(rest * 13, 3), 10, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 2 })
    b.text(362 + Math.max(rest * 13, 3) + 5, y + 9, v1, { size: 8.5, fill: C.accD })
    b.rect(362, y + 13, Math.max(ex * 13, 3), 10, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 2 })
    b.text(362 + Math.max(ex * 13, 3) + 5, y + 22, v2, { size: 8.5, fill: C.badD })
  })
  b.wtext(310, 438, '肌肉泵与静脉容量库：骨骼肌节律收缩挤压深静脉、静脉瓣单向导流，回心血量成倍增加；交感性静脉容量血管同步收缩动员储血。', { size: 9, fill: C.sub, maxW: 168, lh: 13 })
  b.wtext(310, 502, '「高心输、低阻力」：收缩压升至 160–200 mmHg、舒张压微降，SVR 总体降近 3/4；舒张压反而大升＝异常反应信号。', { size: 9, fill: C.sub, maxW: 168, lh: 13 })
  // 肌肉泵示意
  b.ctext(571, 420, '回心血量↑', { size: 9, weight: 700, fill: C.accD })
  b.rect(558, 428, 26, 112, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.rect(492, 430, 34, 108, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 6 })
  b.rect(628, 430, 34, 108, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 6 })
  b.arrow(571, 532, 571, 438, { stroke: C.acc, sw: 2.4 })
  b.path('M 561,462 L 571,454 L 581,462', { stroke: C.dna, sw: 1.8, fill: 'none' })
  b.path('M 561,510 L 571,502 L 581,510', { stroke: C.dna, sw: 1.8, fill: 'none' })
  b.arrow(528, 484, 556, 484, { stroke: C.bad, sw: 1.8 })
  b.arrow(626, 484, 588, 484, { stroke: C.bad, sw: 1.8 })
  b.ctext(577, 556, '肌肉泵：收缩挤压深静脉 · 静脉瓣单向导流', { size: 9, fill: C.sub })

  // ============ 二、直立：抗重力工程 ============
  b.panel(730, 132, 640, 425, { title: '二、直立：每时每刻的抗重力工程' })
  b.rect(756, 186, 170, 74, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(841, 212, '胸腔（心肺）', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(841, 234, '血量锐减', { size: 9.5, fill: C.sub })
  b.ctext(841, 252, 'SV↓近40% · CO↓约20%', { size: 9, fill: C.sub })
  b.arrow(841, 268, 841, 318, { stroke: C.bad, sw: 2.2 })
  b.text(852, 298, '重力', { size: 9, weight: 700, fill: C.badD })
  b.rect(756, 326, 170, 112, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(841, 348, '下肢静脉坠积', { size: 10.5, weight: 700, fill: C.badD })
  for (const [px, py, r] of [[788, 384, 9], [828, 390, 8], [868, 382, 9], [806, 410, 8], [856, 412, 8]] as [number, number, number][]) {
    b.circle(px, py, r, { fill: C.bad, fillOp: 0.4 })
  }
  b.ctext(841, 432, '500–700 ml', { size: 9.5, weight: 700, fill: C.badD })
  b.text(756, 462, '跨壁压↑静脉膨胀：踝部静脉压骤增近 90 mmHg', { size: 9, fill: C.sub })
  // 右：压力反射代偿流程
  b.tag(1140, 200, '起立：重力画出差', { size: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.tag(1140, 248, '胸腔血量锐减：SV↓·CO↓', { size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(1140, 296, 'MAP 一过性下降', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.tag(1140, 362, '压力感受器反射（数秒级）', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(1140, 418, '1 分钟内 MAP 重建', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(1140, 210, 1140, 238, { stroke: C.sub, sw: 1.6 })
  b.arrow(1140, 258, 1140, 286, { stroke: C.sub, sw: 1.6 })
  b.arrow(1140, 306, 1140, 350, { stroke: C.sub, sw: 1.6 })
  b.arrow(1140, 372, 1140, 406, { stroke: C.sub, sw: 1.6 })
  b.wtext(1250, 356, 'HR↑ 10–20 次/分；阻力血管收缩；静脉张力↑', { size: 8.5, fill: C.sub, maxW: 115, lh: 12 })
  b.text(975, 448, '代偿缺席→数秒内晕厥（脑灌注跌破自身调节下限）', { size: 9, fill: C.mute })
  b.wtext(756, 492, '直立不耐受：血管迷走性晕厥＝静脉回流骤降触发强力心室收缩→心室机械感受器 C 纤维（Bezold-Jarisch 型）报警→迷走爆发＋交感突然撤除（扩血管＋心动过缓），平卧即「复位重启」；POTS＝站 10 min 内 HR 持续↑≥30 次/分（青少年≥40）不伴低血压。', { size: 9, fill: C.sub, maxW: 276, lh: 13 })
  b.wtext(1060, 492, '头部高于心约 35 cm：脑动脉承受约 25 mmHg 静水折扣，脑灌注靠 MAP 足额＋自身调节下限兜底。持续维持靠肌肉泵（踱步者无恙、静立者晕厥）·呼吸泵·ADH/RAAS 保水；长期卧床/失重→立位耐力不良。', { size: 9, fill: C.sub, maxW: 280, lh: 13 })

  // ============ 三、失血：三级时序与休克警戒线 ============
  b.panel(30, 575, 680, 405, { title: '三、失血：三级时序代偿与休克警戒线' })
  b.tag(140, 610, '失血 <10%', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.wtext(46, 634, '献血量级：容量血管轻度收缩即可维持回心血量，静卧几无感觉。', { size: 9, fill: C.sub, maxW: 186, lh: 13 })
  b.tag(350, 610, '失血 10%–20%', { size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.wtext(254, 634, '完整三级时序登场（下方三区）——交感、RAAS、ADH、自身输液与 EPO 依次接力。', { size: 9, fill: C.sub, maxW: 186, lh: 13 })
  b.tag(570, 610, '失血 >30%–40%', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.wtext(466, 634, '失代偿——灌不住也堵不住：滑向休克恶性循环（下方红框）。', { size: 9, fill: C.sub, maxW: 186, lh: 13 })
  // 时间轴
  b.ctext(145, 678, '秒级', { size: 10, weight: 600, fill: C.ink })
  b.ctext(353, 678, '分钟–小时', { size: 10, weight: 600, fill: C.ink })
  b.ctext(576, 678, '天–数月', { size: 10, weight: 600, fill: C.ink })
  b.line(46, 690, 685, 690, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  for (const tx of [145, 353, 576]) b.line(tx, 684, tx, 696, { stroke: C.sub, sw: 1.8 })
  // 三区
  b.rect(46, 700, 198, 130, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 8 })
  b.tag(145, 722, '① 秒级 · 神经反射', { size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 700 })
  b.wtext(60, 748, '压力感受器反射全力：HR↑、心肌收缩力↑、阻力与容量血管收缩——皮肤苍白、冷汗、脉细速；静脉容量库动员保回心血量；末位升压机制（化学感受器·脑缺血反应）待命。', { size: 9, fill: C.sub, maxW: 170, lh: 13 })
  b.rect(254, 700, 198, 130, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.5, rx: 8 })
  b.tag(353, 722, '② 分钟–小时 · 体液', { size: 10, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, weight: 700 })
  b.wtext(268, 748, 'RAAS 全面激活（Ang II 缩血管＋醛固酮保钠）；ADH 因低压感受器去抑制而大量分泌；毛细血管重吸收「自身输液」：1–2 h 显著、24–48 h 血浆容量重建（Hct↓、血液稀释）。', { size: 9, fill: C.sub, maxW: 170, lh: 13 })
  b.rect(462, 700, 228, 130, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 8 })
  b.tag(576, 722, '③ 天级 · 红系重建', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD, weight: 700 })
  b.wtext(476, 748, '肾小管周细胞在低氧驱动下分泌 EPO；骨髓 3–5 天出现网织红细胞高峰，红细胞数周至数月恢复——三级代偿至此收尾。', { size: 9, fill: C.sub, maxW: 200, lh: 13 })
  // 休克恶性循环
  b.rect(46, 850, 644, 122, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(62, 872, '失血 >30%–40%：休克的恶性循环', { size: 11.5, weight: 700, fill: C.badD })
  b.tag(88, 898, '灌注不足', { size: 9, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.arrow(124, 898, 140, 898, { stroke: C.sub, sw: 1.5 })
  b.tag(186, 898, '缺氧·酸中毒', { size: 9, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.arrow(228, 898, 236, 898, { stroke: C.sub, sw: 1.5 })
  b.tag(285, 898, '血管瘫痪·淤滞', { size: 9, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.arrow(332, 898, 348, 898, { stroke: C.sub, sw: 1.5 })
  b.tag(395, 898, '回心血量锐减', { size: 9, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.arrow(440, 898, 449, 898, { stroke: C.sub, sw: 1.5 })
  b.tag(496, 898, '血压进一步跌落', { size: 9, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.path('M 496,906 C 460,938 140,938 96,910', { stroke: C.bad, sw: 1.6, dash: '5 4', fill: 'none', marker: 'bad' })
  b.ctext(300, 948, '越缺血越瘫 · 越瘫越缺血——仅靠内源性代偿难以逆转', { size: 9.5, weight: 700, fill: C.badD })
  b.text(62, 967, '治疗第一原则：及时恢复容量（晶体液·血液制品）重建前负荷——「先容量、后血管活性」。', { size: 9.5, fill: C.sub })

  // ============ 四、三场景合观：快慢接力 ============
  b.panel(730, 575, 640, 405, { title: '四、三场景合观：快慢接力的通用架构' })
  b.table(746, 635, 608, {
    headers: ['场景', '秒级（神经）', '分钟–小时（体液）', '天以上（长期）'],
    colW: [72, 168, 180, 188], rowH: 40, fontSize: 9,
    rows: [
      ['运动', '中枢命令·压力反射重调·代谢性反射', '儿茶酚胺·散热性皮肤舒张', '血浆量扩充·心与骨骼肌重塑'],
      ['失血', '压力感受器·化学感受器·脑缺血反应', 'RAAS·ADH·间质液回流', 'EPO 红系重建·血量恢复'],
      ['直立', '压力感受器反射（起身即刻）', '肌肉泵/呼吸泵持续·ADH/RAAS', '立位耐力（卧床则去适应）'],
    ],
  })
  b.tag(838, 828, '神经 · 秒级', { size: 10.5, fill: C.proL, stroke: C.pro, tfill: C.proD, weight: 700 })
  b.arrow(879, 828, 987, 828, { stroke: C.sub, sw: 1.8 })
  b.tag(1040, 828, '体液 · 分钟–小时', { size: 10.5, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 700 })
  b.arrow(1093, 828, 1205, 828, { stroke: C.sub, sw: 1.8 })
  b.tag(1246, 828, '肾脏 · 天级', { size: 10.5, fill: C.okL, stroke: C.ok, tfill: C.okD, weight: 700 })
  b.wtext(746, 862, '神经打头阵、体液接棒、肾脏以天收尾——快慢搭配、层层接力，正是稳态调节的标准范式；运动、失血、直立是同一架构的三场考试。', { size: 9, fill: C.sub, maxW: 290, lh: 13 })
  b.wtext(1060, 862, '长期训练重塑：静息 HR 降至 50–60 次/分、血浆容量 +10%–20%（改善 Starling 储备）、生理性离心性肥大、骨骼肌毛细血管与线粒体密度↑——VO_{2}max 由中央（CO）与外周（摄氧）两端共同抬升。', { size: 9, fill: C.sub, maxW: 290, lh: 13 })
  b.wtext(746, 925, '从 Harvey 的结扎线到 Guyton 的曲线：泵、管道、容量与调节共同回答「血液为何循环、又为何恒定」。', { size: 9.5, fill: C.mute, maxW: 600, lh: 13 })
}

export default scene({
  title: '循环整合：运动、失血与直立',
  subtitle: '运动时 CO 由 5 升至 20–25 L/min（肌肉占 75%–80%、皮肤先缩后扩散热、SVR 降近 3/4）；失血三级时序＝神经秒级→RAAS/ADH 分钟-小时→自身输液与 EPO 天级，失血 >30%–40% 滑向休克恶性循环；直立坠积下肢 500–700 ml、压力反射数秒代偿——神经打头阵、体液接棒、肾脏收尾',
  draw,
})
