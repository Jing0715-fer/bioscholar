// mt ch11-s3 植物特化细胞：保卫细胞开闭级联、根吸收区分区带、盐腺盐泡与韧皮部装载双模式
import { scene, C, B } from '../../lib'

/** 保卫细胞对（两条厚弧夹气孔）；gapHalf 为半孔隙，r 为弧半径 */
const gcPair = (b: B, cx: number, top: number, bot: number, gapHalf: number, r: number) => {
  const arc = (d: string, w: number, op: number) => b.path(d, { stroke: C.ok, sw: w, fill: 'none', opacity: op })
  arc(`M ${cx - gapHalf},${top} A ${r},${r} 0 1 0 ${cx - gapHalf},${bot}`, 18, 0.35)
  arc(`M ${cx - gapHalf},${top} A ${r},${r} 0 1 0 ${cx - gapHalf},${bot}`, 2, 0.95)
  arc(`M ${cx + gapHalf},${top} A ${r},${r} 0 1 1 ${cx + gapHalf},${bot}`, 18, 0.35)
  arc(`M ${cx + gapHalf},${top} A ${r},${r} 0 1 1 ${cx + gapHalf},${bot}`, 2, 0.95)
}

const draw = (b: B) => {
  // ================= 一、开放级联：蓝光 → 超极化 → 吸水张开 =================
  b.panel(30, 132, 660, 455, { title: '一、开放级联：蓝光 → 超极化 → 吸水张开' })
  // 级联梯
  b.tag(190, 190, '蓝光（phot1/phot2 向光素）', { size: 10.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(190, 236, 'H^{+}-ATPase：Thr 磷酸化＋14-3-3', { size: 10.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.tag(190, 282, '泵活性数倍上调·超极化约 −100 mV', { size: 10.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.tag(190, 328, 'KAT1/KAT2 内向 K^{+}＋Cl^{−} 摄入', { size: 10.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.tag(190, 374, 'PEPC 合成苹果酸＋淀粉降解添蔗糖', { size: 10.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.tag(190, 420, '渗透势↓数百 mOsm·PIP 涌水', { size: 10.5, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  for (const [y0, y1] of [[202, 224], [248, 270], [294, 316], [340, 362], [386, 408]] as [number, number][]) {
    b.arrow(190, y0, 190, y1, { stroke: C.mute, sw: 1.7, marker: 'mute' })
  }
  // 保卫细胞对（开放）
  gcPair(b, 530, 180, 290, 20, 60)
  b.ctext(530, 232, '气孔开', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(530, 318, '一对保卫细胞（肾形）', { size: 10, fill: C.sub })
  b.ion(430, 185, 'K^{+}', { r: 9, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5 })
  b.arrow(440, 192, 466, 210, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.ion(630, 185, 'Cl^{−}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8.5 })
  b.arrow(620, 192, 594, 210, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.ion(415, 270, 'H_{2}O', { r: 9, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.arrow(426, 272, 450, 268, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.ion(645, 270, 'H_{2}O', { r: 9, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.arrow(634, 272, 610, 268, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.tag(530, 350, '膨压升高·气孔张开', { size: 10.5, weight: 700, fill: C.okL, stroke: C.ok, tfill: C.okD })
  // 底注
  b.wtext(46, 462, '三种渗透货币的配比随物种而异：禾本科以苹果酸为主币、某些单子叶以 Cl^{−} 为主币、阴生植物几乎只用糖——汇率差异由系统发育决定', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(46, 510, 'Thr 残基磷酸化后招募 14-3-3 二聚体，泵活性数倍上调，膜电位超极化到约 −100 mV——为内向整流通道开门', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(370, 462, '苹果酸由 PEPC 固定 CO_{2} 合成，淀粉降解再添蔗糖——胞内渗透势可下降数百 mOsm，水经 PIP/TIP 水通道涌入', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.wtext(370, 510, '叶面每平方毫米约数十至数百枚气孔；双子叶形似一对肾，单子叶的像哑铃', { size: 9.5, fill: C.sub, maxW: 300, lh: 17 })
  b.text(46, 560, '膨压在开与闭之间相差约 1–2 MPa——「植物的单细胞肾」以 H^{+}-ATPase 为引擎、K^{+}/Cl^{−}/苹果酸为渗透货币', { size: 9.5, fill: C.sub })

  // ================= 二、关闭级联：ABA → SLAC1 → 去极化关闭 =================
  b.panel(710, 132, 660, 455, { title: '二、关闭级联：ABA → SLAC1 → 去极化关闭' })
  b.tag(900, 190, 'ABA（根源干旱信号）', { size: 10.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.tag(900, 236, 'PYR/PYL/RCAR 结合·扣押 PP2C', { size: 10.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.tag(900, 282, 'OST1/SnRK2.6 释放并自磷酸化', { size: 10.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.tag(900, 328, '磷酸化 SLAC1/SLAH 阴离子通道', { size: 10.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.tag(900, 374, 'Cl^{−}/苹果酸外流 → 膜去极化', { size: 10.5, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.tag(900, 420, 'GORK 排 K^{+} → 膨压下降', { size: 10.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  for (const [y0, y1] of [[202, 224], [248, 270], [294, 316], [340, 362], [386, 408]] as [number, number][]) {
    b.arrow(900, y0, 900, y1, { stroke: C.mute, sw: 1.7, marker: 'mute' })
  }
  // 保卫细胞对（关闭，孔近闭）
  gcPair(b, 1206, 185, 275, 7, 52)
  b.ctext(1206, 172, '气孔关闭', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(1206, 312, '保卫细胞', { size: 10, fill: C.sub })
  b.ion(1150, 180, 'Cl^{−}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8.5 })
  b.arrow(1142, 190, 1122, 172, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.ion(1262, 180, 'K^{+}', { r: 9, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5 })
  b.arrow(1270, 190, 1290, 172, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.ion(1148, 300, 'Cl^{−}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8.5 })
  b.arrow(1156, 294, 1176, 276, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.ion(1264, 300, 'K^{+}', { r: 9, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5 })
  b.arrow(1256, 294, 1236, 276, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.tag(1206, 348, '溶质出走·膨压下降', { size: 10.5, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD })
  // 底部双框
  b.rect(726, 450, 300, 112, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8 })
  b.text(740, 474, 'Ca^{2+} 校验：防误关的配比', { size: 12, weight: 700, fill: C.proD })
  b.wtext(740, 498, 'ABA 亦经胞质 Ca^{2+} 升高激活 CPK 直接磷酸化 SLAC1；CBL1/9-CIPK23 复合物则施加抑制性磷酸化——网络配比构成校验，防止气孔在误报下轻易关门', { size: 9, fill: C.proD, maxW: 272, lh: 16 })
  b.rect(1046, 450, 308, 112, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(1060, 474, '快关与深关：时间尺度', { size: 12, weight: 700, fill: C.sub })
  b.wtext(1060, 498, '阴离子外流在数分钟内启动「快关」；K^{+} 与苹果酸的清空持续数十分钟完成「深关」；傍晚的关闭还部分依赖蔗糖的撤出而非 ABA', { size: 9, fill: C.sub, maxW: 280, lh: 16 })
  b.text(726, 578, '渗透货币随昼夜换币——气孔像一个节俭的中央银行', { size: 9.5, fill: C.mute })

  // ================= 三、根吸收区：分区带表达 =================
  b.panel(30, 602, 660, 383, { title: '三、根吸收区：沿纵轴的分区带表达' })
  b.ctext(122, 640, '分生区', { size: 11, weight: 700, fill: C.sub })
  b.ctext(266, 640, '伸长区', { size: 11, weight: 700, fill: C.sub })
  b.ctext(435, 640, '根毛区', { size: 11, weight: 700, fill: C.sub })
  b.rect(46, 665, 144, 70, { fill: C.dnaL, stroke: C.sub, sw: 1.5 })
  b.rect(190, 665, 140, 70, { fill: C.accL, stroke: C.sub, sw: 1.5 })
  b.rect(330, 665, 196, 70, { fill: C.okL, stroke: C.sub, sw: 1.5 })
  b.line(190, 660, 190, 735, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(330, 660, 330, 735, { stroke: C.faint, sw: 1, dash: '4 4' })
  for (let x = 342; x <= 512; x += 14) {
    b.line(x, 665, x, 648, { stroke: C.ok, sw: 1.8 })
    b.circle(x, 646, 2, { fill: C.ok })
  }
  b.tag(118, 765, 'AHA2', { size: 9.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.wtext(46, 790, 'H^{+}-ATPase 同工型：酸化根际、建立 H^{+} 势能（驱动力）', { size: 9, fill: C.sub, maxW: 135, lh: 15 })
  b.tag(262, 765, 'HAK5＋AKT1', { size: 9.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.wtext(192, 790, 'HAK5 低钾诱导；AKT1 由 CBL1/9-CIPK23 磷酸化激活（与保卫细胞共用校验模块）', { size: 9, fill: C.sub, maxW: 140, lh: 15 })
  b.tag(435, 765, 'IRT1', { size: 9.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.wtext(360, 790, 'ZIP 家族：Fe^{2+}/Zn^{2+}/Mn^{2+} 摄取，缺铁诱导，定位伸长区与根毛区', { size: 9, fill: C.sub, maxW: 146, lh: 15 })
  b.line(118, 755, 118, 738, { stroke: C.faint, sw: 1 })
  b.line(262, 755, 262, 738, { stroke: C.faint, sw: 1 })
  b.line(435, 755, 435, 738, { stroke: C.faint, sw: 1 })
  b.wtext(546, 660, '根毛：顶端极化生长的单细胞突起，寿命数日至数周', { size: 9, fill: C.sub, maxW: 128, lh: 15 })
  b.wtext(546, 704, '单株谷类作物的根系总长以百公里计，吸收面积的军备竞赛在地下静默进行', { size: 9, fill: C.sub, maxW: 128, lh: 15 })
  b.wtext(546, 763, '「泵-通道-载体」按土壤养分空间梯度，分区驻防', { size: 9, fill: C.sub, maxW: 128, lh: 15 })
  b.wtext(46, 870, '径向路径成对：共质体经胞间连丝串起皮层细胞直达中柱；质外体沿细胞壁自由下渗，撞上内皮层凯氏带（见第一节）才被迫过膜改走共质体——根在最后一道关隘验讫全部货物，根毛把「海关」接触面积再放大数十倍', { size: 9.5, fill: C.sub, maxW: 620, lh: 17 })
  b.text(46, 924, '动物用解剖分段、植物用发育分区——殊途同归，恰似肾单位沿髓襻的分段布阵', { size: 9.5, fill: C.mute })

  // ================= 四、盐腺盐泡与韧皮部装载双模式 =================
  b.panel(710, 602, 660, 383, { title: '四、盐腺泌盐、盐泡隔离与韧皮部装载双模式' })
  // —— 左：盐腺与盐泡 ——
  b.text(726, 652, '盐腺（红树）：三室泌盐', { size: 11.5, weight: 700, fill: C.sub })
  b.line(740, 690, 1000, 690, { stroke: C.sub, sw: 2 })
  b.text(726, 682, '叶面', { size: 9, fill: C.mute })
  b.circle(770, 712, 16, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.ctext(770, 716, '收集', { size: 8, fill: C.sub })
  b.rect(800, 696, 90, 50, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(845, 710, 'H^{+}-ATPase', { size: 7.5, weight: 700, fill: C.warnD })
  b.ctext(845, 724, 'Na^{+}/H^{+} 反向转运体', { size: 7, fill: C.dnaD })
  b.ctext(845, 738, '分泌细胞', { size: 8, weight: 700, fill: C.dnaD })
  b.arrow(892, 712, 938, 688, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.tag(968, 678, 'NaCl', { size: 9.5, weight: 700, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.text(940, 702, '随雨露冲走', { size: 8.5, fill: C.mute })
  b.ion(736, 742, 'Na^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.wtext(726, 780, '泌盐植物以「收集细胞-分泌细胞-毛孔」三室盐腺主动排 NaCl；把 SOS1 类外排体与液泡 NHX 装进专职细胞，用空间换时间', { size: 9, fill: C.sub, maxW: 290, lh: 15 })
  b.text(726, 848, '盐泡（滨藜）：膀胱细胞', { size: 11.5, weight: 700, fill: C.sub })
  b.circle(800, 895, 38, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.tag(800, 884, 'NHX', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.ion(782, 912, 'Na^{+}', { r: 7.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.ion(818, 912, 'Cl^{−}', { r: 7.5, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7 })
  b.ctext(800, 952, '巨大液泡', { size: 9, fill: C.accD })
  b.wtext(860, 872, '表皮膀胱细胞把盐灌入巨大液泡隔离，把 NHX 液泡隔离做成整只细胞的体量', { size: 9, fill: C.sub, maxW: 160, lh: 15 })
  // —— 右：韧皮部装载双模式 ——
  b.text(1046, 652, '韧皮部装载：两条路', { size: 11.5, weight: 700, fill: C.sub })
  // 质外体模式
  b.rect(1046, 670, 70, 45, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 5 })
  b.ctext(1081, 696, '叶肉', { size: 9, fill: C.okD })
  b.tag(1135, 678, '蔗糖', { size: 8.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(1118, 692, 1150, 692, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.rect(1152, 665, 85, 55, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.rect(1134, 684, 38, 18, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
  b.ctext(1153, 696, 'SUC2', { size: 8, weight: 700, fill: C.rnaD })
  b.ctext(1195, 682, 'H^{+}-ATPase', { size: 7, weight: 700, fill: C.warnD })
  b.ctext(1195, 712, '伴胞', { size: 9, weight: 600, fill: C.proD })
  b.rect(1245, 665, 100, 55, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(1295, 695, '筛分子', { size: 9.5, weight: 600, fill: C.accD })
  b.arrow(1238, 692, 1252, 692, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.text(1046, 740, '质外体模式（禾本科等多用）', { size: 9.5, weight: 600, fill: C.proD })
  // 共质体模式
  b.rect(1046, 760, 70, 45, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 5 })
  b.ctext(1081, 786, '叶肉', { size: 9, fill: C.okD })
  b.tag(1135, 770, '胞间连丝', { size: 8.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(1118, 785, 1150, 785, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.rect(1152, 755, 85, 55, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 6 })
  b.ctext(1195, 775, '蔗糖→棉子糖', { size: 8, weight: 600, fill: C.enzD })
  b.tag(1195, 793, '聚合物陷阱', { size: 9, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.ctext(1195, 812, '中间细胞', { size: 9, weight: 600, fill: C.enzD })
  b.rect(1245, 755, 100, 55, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(1295, 785, '筛分子', { size: 9.5, weight: 600, fill: C.accD })
  b.arrow(1238, 782, 1252, 782, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.text(1046, 838, '共质体模式（葫芦科等多用）：棉子糖太大无法循原路回流——被截留在筛分子', { size: 9.5, fill: C.sub })
  b.wtext(1046, 862, '质外体 SUC2（H^{+}-蔗糖同向转运）与动物 SGLT 完全同构，只是驱动离子换成 H^{+}；两模式是同一工程问题的两套独立解', { size: 9, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(1046, 920, '保卫细胞膜蛋白质组特色：巨大液泡占细胞体积绝大部分，TIP 亚家族水通道提供快开水闸，NHX 与 CLC 装卸 K^{+}/Cl^{−}——集齐泵、通道、载体、水通道四类转运；首个克隆的植物 K^{+} 通道 KAT1 即取材于保卫细胞', { size: 9, fill: C.sub, maxW: 300, lh: 15 })
}

export default scene({
  title: '植物的特化细胞：保卫细胞、根吸收区与韧皮部装载',
  subtitle: '保卫细胞是「植物的单细胞肾」：蓝光 phot1/2→H⁺-ATPase（Thr 磷酸化＋14-3-3）→超极化→KAT1/KAT2 摄 K⁺＋苹果酸合成→吸水开孔；ABA→PYR/PYL/RCAR→OST1→SLAC1→阴离子外流去极化→GORK 排 K⁺→关孔；CBL1/9-CIPK23 作 Ca²⁺ 校验；根吸收区分区带 AHA2/HAK5/AKT1/IRT1；盐腺泌盐与韧皮部 SUC2/聚合物陷阱双模式；巨大液泡 TIP 为快开水闸',
  draw,
})
