// mt ch4-s3 植物水通道：拟南芥 35 个 MIP 四亚科树、PIP 异源四聚化与 Ser283 开关、NIP 硼硅通道、TIP 膨压与调控四式
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、拟南芥 35 个 MIP：四亚科树 ============
  b.panel(30, 132, 660, 428, { title: '一、拟南芥 35 个 MIP：四亚科版图（树）' })
  b.text(52, 318, 'MIP 祖先', { size: 9.5, fill: C.mute })
  b.circle(76, 336, 5, { fill: C.sub })
  b.line(82, 336, 140, 336, { stroke: C.sub, sw: 2 })
  b.line(140, 210, 140, 462, { stroke: C.sub, sw: 2 })
  const clades: [string, string, string, number, string, string, string][] = [
    ['PIP · 质膜内在蛋白', '质膜——跨质膜水交换主力（磷酸化／胞吞调控）', '13 个', 178, C.okL, C.ok, C.okD],
    ['TIP · 液泡膜内在蛋白', '液泡膜——液泡-胞质快速水交换与膨压调节', '10 个', 262, C.accL, C.acc, C.accD],
    ['NIP · nodulin26 类', '质膜等——硼酸、硅酸等类金属营养特化通道', '9 个', 346, C.rnaL, C.rna, C.rnaD],
    ['SIP · 小而碱性内在蛋白', '内质网——腔内水与渗透稳态（低导度）', '3 个', 430, C.proL, C.pro, C.proD],
  ]
  clades.forEach(([name, desc, n, y, fill, stroke, dfill]) => {
    const cy = y + 32
    b.line(140, cy, 200, cy, { stroke: C.sub, sw: 2 })
    b.rect(200, y, 400, 64, { fill, stroke, sw: 1.8, rx: 8 })
    b.text(216, y + 26, name, { size: 12.5, weight: 700, fill: dfill })
    b.text(216, y + 48, desc, { size: 9.5, fill: C.sub })
    b.etext(584, y + 44, n, { size: 15, weight: 700, fill: dfill })
  })
  b.text(60, 520, '拟南芥 35 个 = PIP 13 + TIP 10 + NIP 9 + SIP 3；苔藓等另有第五亚科 XIP（底物未定）', { size: 10, fill: C.sub })
  b.text(60, 542, '动物以「器官」组织分工，植物以「膜区室＋底物特化」组织——因有液泡与硼硅营养清单', { size: 10, fill: C.sub })

  // ============ 二、PIP 上膜与 Ser283 磷酸开关 ============
  b.panel(710, 132, 660, 428, { title: '二、PIP 上膜与开关：异源四聚化 × Ser283' })
  b.text(730, 186, 'PIP1–PIP2 异源四聚化：亚基互助上膜', { size: 12, weight: 700, fill: C.okD })
  b.text(730, 210, '① 多数 PIP1 单独表达：导水弱、滞留内质网', { size: 10, fill: C.sub })
  b.erU(735, 258, 250, 30)
  b.rect(760, 218, 13, 26, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.rect(884, 218, 13, 26, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.text(905, 232, 'PIP1', { size: 8.5, weight: 700, fill: C.enzD })
  b.text(730, 330, '② PIP1 与 PIP2 共表达：异源四聚体被带上质膜', { size: 10, fill: C.sub })
  b.bilayer(735, 368, 250, { h: 11 })
  b.rect(810, 360, 16, 26, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.rect(832, 360, 16, 26, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.rect(854, 360, 16, 26, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.rect(876, 360, 16, 26, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.arrow(851, 336, 851, 402, { stroke: C.acc, sw: 2, marker: 'acc', dash: '4 3' })
  b.text(868, 348, 'H_{2}O', { size: 9, weight: 700, fill: C.accD })
  b.legend(735, 404, [['PIP1 亚基', C.enz], ['PIP2 亚基', C.ok]], { size: 9 })
  b.wtext(730, 432, '亚基互助是质膜水导的又一调节层级；也解释转基因实验中 PIP1 常需 PIP2 陪伴才显效果的旧谜', { size: 9.5, maxW: 280, lh: 18, fill: C.sub })
  b.wtext(730, 480, '拟南芥 PIP2;1 以磷酸化与胞吞双轨调节，是研究最深的成员之一', { size: 9.5, maxW: 280, lh: 18, fill: C.sub })
  // —— 右：Ser283 开关 ——
  b.text(1030, 186, 'Ser283 磷酸开关（菠菜 SoPIP2;1）', { size: 12, weight: 700, fill: C.proD })
  b.text(1030, 214, '磷酸化（Ser283＋P）→ 孔道开放', { size: 10, weight: 600, fill: C.okD })
  b.bilayer(1040, 252, 290, { h: 11 })
  b.rect(1150, 245, 15, 24, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1182, 245, 15, 24, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.arrow(1173, 222, 1173, 288, { stroke: C.acc, sw: 2, marker: 'acc', dash: '4 3' })
  b.circle(1206, 272, 7.5, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.ctext(1206, 275, 'P', { size: 8.5, weight: 700, fill: C.warnD })
  b.line(1199, 269, 1190, 266, { stroke: C.warn, sw: 1.2 })
  b.text(1216, 276, 'Ser283＋P', { size: 8.5, weight: 700, fill: C.warnD })
  b.text(1030, 330, '去磷酸化 → loop D 落下封孔', { size: 10, weight: 600, fill: C.badD })
  b.bilayer(1040, 368, 290, { h: 11 })
  b.rect(1150, 361, 15, 24, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1182, 361, 15, 24, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.arrow(1173, 338, 1173, 352, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.line(1166, 368, 1180, 382, { stroke: C.bad, sw: 2.2 })
  b.line(1180, 368, 1166, 382, { stroke: C.bad, sw: 2.2 })
  b.rect(1146, 385, 55, 11, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 4 })
  b.text(1208, 394, 'loop D 封孔', { size: 8.5, weight: 700, fill: C.badD })
  b.wtext(1030, 430, '干旱相关的胞质 Ca^{2+} 升高与酸化促其关闭——土壤水势低于细胞时，高水导等于漏水，关闭才是保命', { size: 9.5, maxW: 300, lh: 23, fill: C.sub })
  b.wtext(730, 530, '拟南芥 PIP2;1 同样以磷酸化与胞吞双轨调节；钙依赖蛋白激酶（CDPK）可与丝氨酸位点对接——第 3 章 AKT1 钙开关范式在 PIP 上同样找得到接点', { size: 9.5, maxW: 600, lh: 18, fill: C.sub })

  // ============ 三、NIP：为硼与硅而生的营养通道 ============
  b.panel(30, 572, 660, 413, { title: '三、NIP：为硼与硅而生的营养通道' })
  // —— 卡 1：根 NIP5;1 ——
  b.rect(60, 616, 193, 190, { fill: '#fef3c7', fillOp: 0.35, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(72, 638, '根 · NIP5;1（硼通道）', { size: 11, weight: 700, fill: C.rnaD })
  b.rect(72, 650, 169, 22, { fill: '#fef3c7', fillOp: 0.6, stroke: C.line, sw: 1 })
  b.text(78, 665, '土壤', { size: 8.5, fill: C.mute })
  ;[[110, 661], [140, 658], [170, 661]].forEach(([bx, by]) => b.circle(bx, by, 4.5, { fill: '#ffffff', stroke: C.rna, sw: 1.2 }))
  b.bilayer(72, 676, 169, { h: 9 })
  b.rect(148, 670, 16, 20, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.arrow(156, 656, 156, 700, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(72, 687, 169, 44, { fill: '#f8fafc', stroke: C.line, sw: 1 })
  b.text(80, 701, '根细胞', { size: 8.5, fill: C.mute })
  ;[[120, 715], [160, 722]].forEach(([bx, by]) => b.circle(bx, by, 4.5, { fill: '#ffffff', stroke: C.rna, sw: 1.2 }))
  b.text(82, 674, 'B(OH)_{3}', { size: 8.5, weight: 700, fill: C.rnaD })
  b.wtext(72, 748, '缺硼胁迫强烈上调 NIP5;1——「抢在病症前自救」的转录应答', { size: 9, maxW: 170, lh: 18, fill: C.sub })
  b.wtext(72, 788, '硼移动性有限，缺症先见于幼嫩组织', { size: 9, maxW: 170, lh: 18, fill: C.sub })
  // —— 卡 2：幼叶 NIP6;1 ——
  b.rect(261, 616, 193, 190, { fill: '#fef3c7', fillOp: 0.35, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(273, 638, '幼叶 · NIP6;1（硼卸载）', { size: 11, weight: 700, fill: C.rnaD })
  b.ellipse(357, 684, 52, 26, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.rect(315, 679, 84, 9, { fill: C.accL, stroke: C.acc, sw: 1.2 })
  b.text(318, 674, '木质部', { size: 8, weight: 700, fill: C.accD })
  b.rect(330, 700, 54, 34, { fill: '#f8fafc', stroke: C.ok, sw: 1.4 })
  b.rect(350, 694, 14, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.arrow(357, 688, 357, 726, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.text(338, 750, '生长组织', { size: 8.5, fill: C.mute })
  b.wtext(273, 770, '硼自木质部向生长组织卸载；果胶 RG-II 交联必需——缺硼生长点首先坏死', { size: 9, maxW: 172, lh: 18, fill: C.sub })
  // —— 卡 3：水稻 Lsi1 ——
  b.rect(460, 616, 200, 190, { fill: '#fef3c7', fillOp: 0.35, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(472, 638, '水稻 · Lsi1（OsNIP2;1 硅通道）', { size: 11, weight: 700, fill: C.rnaD })
  b.line(560, 716, 560, 652, { stroke: C.ok, sw: 5 })
  b.path('M560,664 q26,-20 54,-4', { stroke: C.ok, sw: 2.5 })
  b.path('M560,664 q-26,-20 -54,-4', { stroke: C.ok, sw: 2.5 })
  ;[[554, 664], [566, 678], [552, 692], [568, 700], [555, 708]].forEach(([sx, sy]) => b.circle(sx, sy, 3.5, { fill: C.mute }))
  b.text(585, 664, '硅化层', { size: 8.5, weight: 600, fill: C.okD })
  b.bilayer(480, 724, 160, { h: 9 })
  b.rect(515, 718, 14, 18, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.rect(590, 718, 14, 18, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.arrow(522, 738, 522, 696, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(597, 714, 597, 690, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.ctext(522, 752, 'Lsi1', { size: 8, weight: 700, fill: C.rnaD })
  b.ctext(597, 752, 'Lsi2', { size: 8, weight: 700, fill: C.accD })
  b.wtext(472, 770, '专透单硅酸 Si(OH)_{4}：Lsi1 入根、Lsi2 装船入木质部——双转运体接力上行茎叶', { size: 9, maxW: 180, lh: 23, fill: C.sub })
  // —— 底注 ——
  b.wtext(60, 826, 'NIP 亚科名自大豆根瘤共生体膜上的 nodulin26，却在矿质营养上大放异彩——同一个 ar/R 关卡，被演化分别调成透水、透甘油、透硼酸、透硅酸的谱系', { size: 10, maxW: 610, lh: 18, fill: C.sub })
  b.wtext(60, 868, '水稻吸硅可达地上部干重的约 10% 量级（硅的超富集作物）——硅沉积增强机械强度（抗倒伏）与对病菌昆虫的抗性，硅肥地位由此而来', { size: 10, maxW: 610, lh: 18, fill: C.sub })
  b.text(60, 918, '缺硼总是先写在幼嫩组织上——土壤补硼与叶面诊断须赶在症状之前', { size: 10, fill: C.sub })
  b.text(60, 944, 'NIP5;1 缺硼强上调、水稻 Lsi1 缺硅上调，都是「缺素转录诱导」的档位', { size: 10, fill: C.sub })

  // ============ 四、TIP 与膨压 + 调控四式 ============
  b.panel(710, 572, 660, 413, { title: '四、TIP 膨压快车道 × 调控四重奏' })
  b.text(730, 614, 'TIP：液泡-胞质的膨压快车道', { size: 12, weight: 700, fill: C.accD })
  // 植物细胞（细胞壁 + 大液泡）
  b.rect(760, 630, 240, 176, { fill: '#f8fafc', stroke: C.ok, sw: 3, rx: 12 })
  b.rect(774, 644, 212, 148, { fill: C.accL, fillOp: 0.65, stroke: C.acc, sw: 2.2, rx: 14 })
  b.ctext(880, 712, '液泡', { size: 15, weight: 700, fill: C.accD })
  b.ctext(880, 734, '≈90% 细胞体积', { size: 9.5, fill: C.accD })
  ;[668, 700, 732, 764].forEach(y => {
    b.rect(770, y - 8, 8, 16, { fill: C.acc, stroke: C.accD, sw: 1.2 })
    b.rect(982, y - 8, 8, 16, { fill: C.acc, stroke: C.accD, sw: 1.2 })
  })
  b.arrow(742, 684, 788, 684, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(788, 714, 742, 714, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(734, 660, '液泡⇌胞质', { size: 9.5, weight: 700, fill: C.accD })
  // 膨压外向箭头
  ;[[830, 810, 830, 834], [880, 810, 880, 834], [930, 810, 930, 834]].forEach(([x1, y1, x2, y2]) =>
    b.arrow(x1, y1, x2, y2, { stroke: C.warn, sw: 1.8, marker: 'warn' }))
  b.text(790, 852, '膨压（turgor）即时应答', { size: 9.5, weight: 700, fill: C.warnD })
  b.text(734, 876, '气孔运动、含羞草快速闭合、细胞伸长皆系于此', { size: 9.5, fill: C.sub })
  b.text(734, 898, '若干 TIP 同源体是液泡区室标记蛋白', { size: 9.5, fill: C.sub })
  b.text(734, 920, 'TIP2;1 兼透氨 NH_{3}——为液泡氮库开一扇小门', { size: 9.5, fill: C.sub })
  // —— 右：调控四重奏 ——
  b.text(1040, 614, '植物水通道的调控四重奏', { size: 12, weight: 700, fill: C.okD })
  const rules: [string, string][] = [
    ['磷酸化／去磷酸化', 'Ser283 等位点直接控制 SoPIP2;1 类通道开关，也参与亚细胞定位'],
    ['pH 与 ROS 关闭', '胞质酸化使 loop D 组氨酸质子化而关闭；活性氧氧化半胱氨酸而关闭（涝渍与伤害快闸）'],
    ['干旱胞吞降解', 'PIP 被泛素标记→网格蛋白途径内吞撤膜→送入液泡降解，质膜水导系统性下调'],
    ['转录层', '干旱与 ABA 下调多数 PIP；缺硼强上调 NIP5;1、缺硅上调水稻 Lsi1'],
  ]
  rules.forEach(([t, s], i) => {
    const y = 648 + i * 68
    b.circle(1048, y - 4, 9, { fill: C.okL, stroke: C.ok, sw: 1.6 })
    b.ctext(1048, y - 0.5, String(i + 1), { size: 9, weight: 700, fill: C.okD })
    b.text(1064, y, t, { size: 10.5, weight: 700, fill: C.ink })
    b.wtext(1064, y + 20, s, { size: 9, maxW: 265, lh: 18, fill: C.sub })
  })
  b.text(1040, 920, '汞抑制（结合 Cys 封孔）是实验工具而非生理调控', { size: 9, fill: C.mute })
  b.wtext(730, 948, '根的水力导度随昼夜涨落：清晨气孔开张前上调、夜间回落——PIP 表达与磷酸化同步涨落（「根系水阀」与「冠层需求」遥相呼应）', { size: 9.5, maxW: 620, lh: 18, fill: C.sub })
}

export default scene({
  title: '植物水通道：拟南芥 35 个 MIP 的四亚科版图',
  subtitle:
    'PIP 13 驻质膜、TIP 10 守液泡、NIP 9 司硼硅营养、SIP 3 留内质网——PIP1 需与 PIP2 异源四聚化方能高效上膜，SoPIP2;1 以 Ser283 磷酸化为开关；液泡占成熟细胞体积约 90%，膨压的秒级调节系于 TIP 快车道',
  draw,
})
