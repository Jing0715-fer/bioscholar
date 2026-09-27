// ph ch11-s1 肾小球滤过与肾血流调节：肾单位、滤过屏障、净滤过压与清除率
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、肾单位：两型结构与球旁器 ============
  b.panel(30, 132, 430, 430, { title: '一、肾单位：两型结构与球旁器' })
  b.rect(46, 185, 254, 115, { fill: C.accL, fillOp: 0.3, rx: 8 })
  b.rect(46, 308, 254, 232, { fill: C.rnaL, fillOp: 0.25, rx: 8 })
  b.text(54, 203, '皮质', { size: 10, weight: 700, fill: C.accD })
  b.text(54, 326, '髓质', { size: 10, weight: 700, fill: C.rnaD })
  // 肾小体
  b.ellipse(140, 245, 30, 34, { fill: C.bg, stroke: C.sub, sw: 2.2 })
  b.circle(140, 245, 19, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.text(60, 215, '肾小球', { size: 8.5, weight: 700, fill: C.badD })
  b.text(172, 218, 'Bowman 囊', { size: 8, fill: C.sub })
  b.circle(140, 245, 44, { fill: 'none', stroke: C.pro, sw: 1.3, dash: '4 3' })
  b.text(186, 208, '球旁器', { size: 8.5, weight: 700, fill: C.proD })
  // 小管各段
  b.path('M 168,262 C 196,272 192,296 178,312 C 166,326 148,326 146,350', { stroke: C.dna, sw: 5, fill: 'none' })
  b.text(196, 292, '近端小管', { size: 8.5, weight: 700, fill: C.dnaD })
  b.path('M 146,350 C 138,385 138,420 150,438 C 162,420 162,385 156,350', { stroke: C.rna, sw: 4, fill: 'none' })
  b.text(84, 400, '亨利襻', { size: 8.5, weight: 700, fill: C.rnaD })
  b.text(84, 428, '降支·透水', { size: 8, fill: C.rnaD })
  b.text(168, 428, '升支·抽盐', { size: 8, fill: C.rnaD })
  b.path('M 156,350 C 172,340 186,332 200,328 C 215,322 228,318 238,318', { stroke: C.pro, sw: 4, fill: 'none' })
  b.text(180, 318, '远曲小管', { size: 8.5, weight: 700, fill: C.proD })
  b.rect(238, 240, 20, 300, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 7 })
  b.text(232, 232, '集合管', { size: 9, weight: 700, fill: C.dnaD })
  b.text(70, 532, '乳头 ~1200 mOsm/kg', { size: 8, fill: C.rnaD })
  // 右栏：两型对比与球旁器
  b.text(316, 210, '两型肾单位', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(385, 236, '皮质型 ~85%', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 700 })
  b.wtext(316, 258, '短襻（仅入外髓）；出球小动脉绕成皮质毛细血管网，完成绝大部分滤过与重吸收。', { size: 8.5, fill: C.sub, maxW: 140, lh: 11.5 })
  b.tag(385, 316, '近髓型 ~15%', { size: 9.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, weight: 700 })
  b.wtext(316, 338, '长襻深达内髓乳头；出球小动脉发夹状直血管，构筑并维持髓质高渗梯度（浓缩骨架）。', { size: 8.5, fill: C.sub, maxW: 140, lh: 11.5 })
  b.text(316, 396, '球旁器（JGA）', { size: 10.5, weight: 700, fill: C.proD })
  b.wtext(316, 418, '入球小动脉颗粒细胞（肾素）＋致密斑（感受远曲起始段 NaCl）＋系膜细胞，把血管端与小管端焊为反馈单元。', { size: 8.5, fill: C.sub, maxW: 140, lh: 11.5 })
  b.wtext(316, 476, '每肾约 100 万个肾单位，出生后不再补充、成年后缓慢折损（每年数千个）。', { size: 8.5, fill: C.sub, maxW: 140, lh: 11.5 })
  b.wtext(316, 522, 'Richards 微穿刺（1920s）：囊腔液＝无蛋白血浆超滤液，滤过说的钉证。', { size: 8.5, fill: C.mute, maxW: 140, lh: 11.5 })
  b.text(46, 556, '集合管胚胎来源另属集合管系统，功能上与肾单位一体（数个肾单位共享一条）。', { size: 9, fill: C.mute })

  // ============ 二、滤过屏障三层 ============
  b.panel(480, 132, 430, 430, { title: '二、滤过屏障：三层结构与双重排斥' })
  b.rect(620, 195, 280, 55, { fill: C.badL, fillOp: 0.3, stroke: C.bad, sw: 1.6 })
  b.rect(620, 255, 280, 26, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  for (let x = 632; x <= 884; x += 22) b.circle(x, 268, 3.5, { fill: C.bg, stroke: C.acc, sw: 1.1 })
  b.rect(620, 286, 280, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  for (let x = 636; x <= 884; x += 28) b.text(x, 301, '−', { size: 9, weight: 700, fill: C.proD })
  b.rect(620, 313, 280, 30, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(620, 313, 280, 11, { fill: C.pro, fillOp: 0.25 })
  for (let x = 628; x <= 868; x += 20) {
    b.rect(x, 324, 10, 17, { fill: C.bg, stroke: C.pro, sw: 1.1 })
    if (x + 20 <= 868) b.line(x + 10, 332, x + 20, 332, { stroke: C.enz, sw: 1.8 })
  }
  b.rect(620, 348, 280, 40, { fill: C.accL, fillOp: 0.2, stroke: C.acc, sw: 1.5 })
  b.etext(612, 225, '毛细血管腔', { size: 9.5, weight: 600, fill: C.sub })
  b.etext(612, 271, '① 有孔内皮 70–100 nm 窗孔', { size: 9.5, fill: C.sub })
  b.etext(612, 300, '② GBM·IV 型胶原（带负电）', { size: 9.5, fill: C.sub })
  b.etext(612, 328, '③ 足细胞足突＋裂孔膜', { size: 9.5, fill: C.sub })
  b.etext(612, 368, '④ Bowman 囊腔（超滤液）', { size: 9.5, fill: C.sub })
  for (const ly of [225, 271, 300, 328, 368]) b.arrow(613, ly, 619, ly, { stroke: C.sub, sw: 1.2 })
  b.ctext(700, 190, '滤过方向 ↓', { size: 8.5, weight: 700, fill: C.accD })
  b.arrow(700, 200, 700, 385, { stroke: C.acc, sw: 2.4 })
  b.text(706, 235, '水·小分子自由通过', { size: 8, fill: C.accD })
  b.arrow(800, 200, 800, 253, { stroke: C.bad, sw: 2.2 })
  b.circle(800, 275, 9, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.text(796, 278, '−', { size: 8, weight: 700, fill: C.badD })
  b.text(812, 240, '白蛋白 69 kDa·带负电', { size: 8, fill: C.badD })
  b.text(812, 262, '双重排斥被拦下', { size: 8, fill: C.badD })
  b.wtext(496, 412, '尺寸选择性＋电荷选择性：白蛋白 69 kDa、直径数纳米已近几何上限，等电点偏酸带负电——又撞上 GBM 与裂孔膜的负电屏障，被双重排斥拦下。', { size: 9, fill: C.sub, maxW: 400, lh: 13 })
  b.wtext(496, 448, '临床注脚：微小病变＝足突广泛融合、负电屏障丢失→选择性白蛋白尿；nephrin 突变（芬兰型先天性肾病综合征）从反面证明裂孔膜不可替代。', { size: 9, fill: C.sub, maxW: 400, lh: 13 })
  b.wtext(496, 484, '滤过系数 Kf ≈12.5 ml/(min·mmHg)；任何一层失守都表现为蛋白尿——三道关卡一损俱损。', { size: 9, fill: C.sub, maxW: 400, lh: 13 })

  // ============ 三、净滤过压与 GFR ============
  b.panel(930, 132, 440, 430, { title: '三、净滤过压与 GFR：每天 180 L 的经济账' })
  b.text(946, 190, 'Starling 力 (mmHg)', { size: 10.5, weight: 700, fill: C.sub })
  b.text(946, 200, '← 对抗滤过', { size: 8.5, weight: 700, fill: C.accD })
  b.text(1240, 200, '促进滤过 →', { size: 8.5, weight: 700, fill: C.badD })
  b.line(1100, 205, 1100, 320, { stroke: C.sub, sw: 1.6 })
  b.text(1093, 199, '0', { size: 8.5, fill: C.mute })
  b.text(946, 217, '毛细血管静水压', { size: 9, weight: 600, fill: C.ink })
  b.rect(1100, 208, 132, 12, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 2 })
  b.ctext(1166, 217, '60', { size: 9, weight: 700, fill: C.badD })
  b.text(946, 247, '血浆胶体渗透压', { size: 9, weight: 600, fill: C.ink })
  b.rect(1030, 238, 70, 12, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 2 })
  b.ctext(1065, 247, '32', { size: 9, weight: 700, fill: C.accD })
  b.text(946, 277, '囊内压', { size: 9, weight: 600, fill: C.ink })
  b.rect(1060, 268, 40, 12, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 2 })
  b.ctext(1080, 277, '18', { size: 9, weight: 700, fill: C.accD })
  b.text(946, 307, '净滤过压', { size: 9, weight: 600, fill: C.ink })
  b.rect(1100, 298, 22, 12, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 2 })
  b.ctext(1111, 307, '≈10', { size: 9, weight: 700, fill: C.okD })
  b.tag(1100, 345, 'NFP ＝ 60 − 32 − 18 ≈ 10 mmHg', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD, weight: 700 })
  b.tag(1100, 380, 'GFR ＝ Kf × NFP ≈ 125 ml/min', { size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 700 })
  b.text(946, 415, '每日滤过 180 L → 终尿仅 ~1.5 L', { size: 9.5, weight: 700, fill: C.sub })
  b.rect(946, 425, 390, 18, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 3 })
  b.rect(949, 428, 384, 12, { fill: C.acc, fillOp: 0.5 })
  b.rect(1330, 425, 6, 18, { fill: C.bad })
  b.text(952, 438, '重吸收 99%（约 178.5 L）', { size: 8.5, fill: C.accD })
  b.text(1240, 447, '终尿 1.5 L（约 1%）', { size: 8.5, weight: 700, fill: C.badD })
  b.text(946, 466, '「粗滤＋精收」：奢侈灌注海量超滤，回收环节锱铢必较。', { size: 9, fill: C.mute })
  b.text(946, 492, '两根小动脉各拿捏一端：', { size: 9.5, weight: 700, fill: C.sub })
  b.wtext(946, 514, '入球收缩→GFR 与血流同降；出球收缩把血「憋」在球内→球内压↑、GFR 反可升而血流降——Ang II 低浓度优先缩出球，正是低血压时保 GFR 的精细手段。', { size: 9, fill: C.sub, maxW: 410, lh: 13 })
  b.wtext(946, 545, '入球端胶渗 32 → 出球端 36（水滤出、蛋白浓缩）：NFP 沿毛细血管衰减，出球前滤过自然「熄火」。', { size: 9, fill: C.sub, maxW: 410, lh: 13 })

  // ============ 四、自身调节、清除率与奢侈灌注 ============
  b.panel(30, 575, 1340, 405, { title: '四、自身调节与清除率：把肾功能变成数字' })
  b.text(66, 612, '肾血流量 / GFR（相对值）', { size: 9, weight: 600, fill: C.sub })
  b.axis(70, 800, 380, 180, {
    xticks: [[0, '20'], [0.333, '80'], [0.889, '180'], [1, '200']], yticks: [[0, '0'], [0.5, '50%'], [1, '100%']], grid: false,
    xlabel: 'MAP (mmHg)',
  })
  b.rect(196, 620, 212, 180, { fill: C.okL, fillOp: 0.3, rx: 4 })
  b.curve(70, 800, 380, 180, [[0, 0.12], [0.15, 0.45], [0.333, 0.62], [0.5, 0.65], [0.7, 0.65], [0.889, 0.62], [0.95, 0.75], [1, 0.9]], { smooth: true, stroke: C.acc, sw: 2.8 })
  b.ctext(302, 638, '自身调节平台 80–180 mmHg', { size: 9.5, weight: 700, fill: C.okD })
  b.wtext(46, 875, '肌源性机制：牵张激活阳离子通道→Ca^{2+} 入→入球小动脉收缩（数秒内、压力谱全程起效）；管球反馈（TGF）：致密斑监测 NaCl 负荷——偏高释 ATP/腺苷缩入球，偏低促前列腺素与肾素。', { size: 9, fill: C.sub, maxW: 400, lh: 13 })
  b.text(46, 915, 'GFR 稳 → 滤过负荷稳 → 排泄可预测——尿成分不随心跳起舞。', { size: 9, fill: C.mute })
  b.text(46, 940, '自身调节意义远不止护肾：为各段小管的重吸收通量铺好稳定地基。', { size: 9, fill: C.mute })
  b.text(500, 612, '清除率 C ＝ U×V/P：每分钟完全清空该物质的血浆容积', { size: 10.5, weight: 700, fill: C.sub })
  b.table(500, 640, 460, {
    headers: ['物质', '肾内命运', '清除率', '意义'], colW: [70, 160, 90, 140], rowH: 38, fontSize: 9,
    rows: [
      ['菊粉', '自由滤过·不吸收不分泌', '125 ml/min', 'GFR 金标准'],
      ['肌酐', '自由滤过＋少量分泌', '略高 10–20%', '临床近似'],
      ['PAH', '滤过＋近端大量分泌', '585 ml/min', '≈ERPF（提取率 90%）'],
    ],
  })
  b.wtext(500, 830, '真实肾血浆流量约 625 ml/min（以提取率校正）；滤过分数 FF ＝ GFR/RPF ＝ 125/625 ＝ 20%——流经肾的血浆每 5 ml 有 1 ml 被滤出（FF↑ 为近端重吸收埋伏笔）。', { size: 9, fill: C.sub, maxW: 450, lh: 13 })
  b.wtext(500, 875, '自由水清除率 C_{H2O} ＝ V − C_{osm}：衡量肾脏「造纯水」的能力（正＝稀释尿·负＝浓缩尿）。', { size: 9, fill: C.sub, maxW: 450, lh: 13 })
  b.text(500, 920, 'Homer Smith（1930s）以菊粉确立清除率——把结构问题化为可测数字。', { size: 9, fill: C.mute })
  b.text(500, 945, '临床以 eGFR 公式（肌酐·年龄·性别）日常估算，无需留尿。', { size: 9, fill: C.mute })
  b.text(990, 612, '奢侈灌注（luxury perfusion）', { size: 10.5, weight: 700, fill: C.accD })
  b.tag(1070, 645, '占体重 ~0.4%', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 700 })
  b.text(1120, 649, '两肾共重约 300 g', { size: 9, fill: C.sub })
  b.tag(1070, 685, '占 CO 20–25%', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 700 })
  b.text(1124, 689, '安静约 1100–1200 ml/min', { size: 9, fill: C.sub })
  b.tag(1070, 725, 'RPF ≈625 ml/min', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 700 })
  b.text(1140, 729, '按 Hct 0.45 折算', { size: 9, fill: C.sub })
  b.wtext(990, 760, '氧提取率远低于心脑——高血流服务于滤过与精调：一昼夜滤 180 L 并选择性回收；流量微变即被放大为排泄之变，调节灵敏而连续。', { size: 9, fill: C.sub, maxW: 360, lh: 13 })
  b.wtext(990, 800, '微穿刺证据：囊腔液葡萄糖、尿素与无机盐浓度＝去蛋白血浆——肾小球滤过液就是血浆的超滤液（Richards）。', { size: 9, fill: C.sub, maxW: 360, lh: 13 })
  b.text(990, 850, '从 Bowman 组织学 → Richards 微穿刺 → 清除率数学', { size: 9.5, weight: 600, fill: C.sub })
  b.wtext(990, 880, '结构问题→功能问题→数学：肾生理学史一再演示同一逻辑。', { size: 9, fill: C.mute, maxW: 360, lh: 13 })
}

export default scene({
  title: '肾小球滤过与肾血流调节',
  subtitle: '皮质肾单位约 85% 短襻主滤过、近髓约 15% 长襻筑髓质梯度；滤过屏障三层（有孔内皮-GBM-足细胞裂孔膜）以尺寸＋电荷双重排斥拦下白蛋白；NFP＝60−32−18≈10 mmHg、Kf≈12.5 ml/(min·mmHg)→GFR 约 125 ml/min＝180 L/日，99% 被回收、终尿约 1.5 L；清除率 C＝U×V/P：菊粉金标准、肌酐临床近似、PAH 测有效肾血浆流量；肌源性＋管球反馈稳住 MAP 80–180 mmHg 平台',
  draw,
})
