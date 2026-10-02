// mt ch11-s1 上皮转运总论：极性双域、紧密连接、两条通路、TEER、三步模型、WNK4-SPAK 与凯氏带
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、极性双域：顶端「搬运工」与基侧「卸货员」 =================
  b.panel(30, 132, 660, 455, { title: '一、极性双域：顶端「搬运工」与基侧「卸货员」' })
  b.text(46, 182, '管腔（肠腔 / 肾小管腔）', { size: 11, fill: C.mute })
  b.ion(120, 205, 'Na^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 9 })
  b.ion(172, 205, 'Cl^{−}', { r: 10, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 9 })
  b.ion(226, 205, 'H_{2}O', { r: 11, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8.5 })
  b.ion(270, 205, 'Glu', { r: 10, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8 })
  // 微绒毛（三段细胞顶缘）
  const villi = (x0: number, x1: number) => {
    for (let x = x0; x <= x1; x += 14) {
      b.line(x, 253, x, 236, { stroke: C.sub, sw: 2 })
      b.circle(x, 234, 2.2, { fill: C.sub })
    }
  }
  villi(66, 144); villi(196, 462); villi(514, 614)
  b.text(330, 228, '微绒毛 → 刷状缘：顶端膜面积约 ×20', { size: 10, fill: C.sub })
  // 三个上皮细胞（中间为主细胞）
  b.rect(60, 255, 90, 170, { fill: C.panel, stroke: C.sub, sw: 1.8, rx: 6 })
  b.rect(190, 255, 280, 170, { fill: C.panel, stroke: C.sub, sw: 2, rx: 6 })
  b.rect(510, 255, 110, 170, { fill: C.panel, stroke: C.sub, sw: 1.8, rx: 6 })
  // 紧密连接（两处细胞间隙顶端，成排闭锁点）
  const tj = (x0: number, x1: number) => {
    for (const y of [262, 270, 278]) b.line(x0, y, x1, y, { stroke: C.pro, sw: 3, dash: '5 4' })
  }
  tj(153, 187); tj(473, 507)
  b.text(62, 302, '紧密连接', { size: 10.5, weight: 600, fill: C.proD })
  b.line(110, 294, 150, 278, { stroke: C.faint, sw: 1 })
  // 顶端膜转运体
  b.rect(215, 246, 50, 18, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
  b.ctext(240, 258, 'SGLT1', { size: 9, weight: 700, fill: C.rnaD })
  b.rect(285, 246, 44, 18, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  b.ctext(307, 258, 'NHE3', { size: 9, weight: 700, fill: C.enzD })
  b.rect(345, 246, 44, 18, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 4 })
  b.ctext(367, 258, 'ENaC', { size: 9, weight: 700, fill: C.okD })
  // 基侧膜转运体
  b.rect(215, 416, 48, 18, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(239, 428, 'GLUT2', { size: 9, weight: 700, fill: C.accD })
  b.rect(285, 416, 84, 18, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.ctext(327, 428, 'Na^{+}/K^{+}-ATPase', { size: 7.5, weight: 700, fill: C.proD })
  b.rect(390, 416, 46, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 4 })
  b.ctext(413, 428, 'ClC-K', { size: 8.5, weight: 700, fill: C.dnaD })
  b.text(196, 278, '顶端膜', { size: 9.5, fill: C.mute })
  b.text(196, 406, '基侧膜', { size: 9.5, fill: C.mute })
  // 穿细胞通路
  b.arrow(275, 226, 275, 242, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(239, 268, 239, 406, { stroke: C.acc, sw: 1.7, marker: 'acc', dash: '6 4' })
  b.text(250, 340, '穿细胞通路', { size: 10, weight: 600, fill: C.accD })
  b.arrow(278, 436, 278, 452, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(378, 436, 378, 452, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(442, 436, 442, 452, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  // 细胞旁通路（右间隙）
  b.ion(490, 208, 'Na^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(490, 220, 490, 448, { stroke: C.acc, sw: 1.7, marker: 'acc', dash: '6 4' })
  b.text(518, 330, '细胞旁通路', { size: 10, weight: 600, fill: C.accD })
  b.text(46, 460, '血液 / 组织液', { size: 10.5, fill: C.mute })
  // 底部两框
  b.rect(46, 470, 300, 104, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(60, 494, '紧密连接：分子篱笆＋滤器', { size: 12, weight: 700, fill: C.sub })
  b.tag(130, 518, 'claudin·20 余种', { size: 9.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.tag(252, 518, 'occludin·ZO-1/2/3', { size: 9.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.wtext(60, 540, '环状闭锁带把顶端与基侧两套膜蛋白圈死在各自领地（维持极性），同时决定细胞旁的水与离子能否挤过、挤过什么', { size: 9, fill: C.sub, maxW: 272, lh: 15 })
  b.rect(360, 470, 300, 104, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(374, 494, '刷状缘与极性分选', { size: 12, weight: 700, fill: C.sub })
  b.wtext(374, 518, '顶端膜折叠出数以千计微绒毛连成刷状缘，膜面积约扩 20 倍；两套库存由 Par/Crumbs/Scribble 复合物与循环内吞分别投递锁定', { size: 9, fill: C.sub, maxW: 272, lh: 15 })

  // ================= 二、两条通路与 TEER：紧密 vs 泄漏 =================
  b.panel(710, 132, 660, 455, { title: '二、两条通路与电阻分类：紧密 vs 泄漏上皮' })
  b.text(726, 182, '跨上皮电阻 TEER（Ussing 腔室可测）＝上皮分类的经典标尺', { size: 12.5, weight: 700, fill: C.ink })
  b.table(726, 196, 628, {
    headers: ['类型', 'TEER 量级', '代表', 'claudin 装配', '转运主导'],
    colW: [64, 150, 148, 148, 118],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['紧密上皮', '数百–数千 Ω·cm^{2}', '集合管 / 膀胱', '屏障型组合为主', '穿细胞·激素精调'],
      ['泄漏上皮', '约 5–10 Ω·cm^{2}', '近端小管 / 空肠', 'claudin-2 阳离子孔', '穿细胞＋细胞旁'],
    ],
  })
  // —— claudin-16/19 Mg²⁺ 细胞旁专道 ——
  b.rect(726, 340, 300, 227, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(740, 362, 'claudin-16/19：Mg^{2+} 细胞旁专道', { size: 12, weight: 700, fill: C.dnaD })
  b.text(740, 382, '管腔', { size: 9, fill: C.mute })
  b.rect(746, 388, 92, 78, { fill: C.panel, stroke: C.sub, sw: 1.6, rx: 5 })
  b.rect(862, 388, 92, 78, { fill: C.panel, stroke: C.sub, sw: 1.6, rx: 5 })
  b.ctext(792, 432, 'TAL', { size: 9.5, weight: 600, fill: C.mute })
  b.ctext(908, 432, '上皮', { size: 9.5, weight: 600, fill: C.mute })
  for (const y of [396, 404]) b.line(840, y, 860, y, { stroke: C.pro, sw: 2.5, dash: '4 3' })
  b.ion(850, 374, 'Mg^{2+}', { r: 9, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8 })
  b.arrow(850, 384, 850, 486, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.tag(860, 502, '任一基因突变 → 家族性低镁血症', { size: 10, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.wtext(740, 528, 'claudin-2 成孔使近端小管成泄漏上皮；claudin-16/19 在髓襻升支粗段专司 Mg^{2+} 细胞旁重吸收——「滤器孔径」写在基因里', { size: 9, fill: C.sub, maxW: 266, lh: 15 })
  // —— 定向矢量转运 ——
  b.rect(1046, 340, 308, 227, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(1060, 362, '定向矢量转运：同一套零件正反排布', { size: 12, weight: 700, fill: C.sub })
  b.ctext(1127, 390, '管腔', { size: 9, fill: C.mute })
  b.ctext(1281, 390, '管腔', { size: 9, fill: C.mute })
  b.rect(1062, 400, 130, 56, { fill: C.panel, stroke: C.sub, sw: 1.6, rx: 5 })
  b.rect(1216, 400, 130, 56, { fill: C.panel, stroke: C.sub, sw: 1.6, rx: 5 })
  b.arrow(1090, 396, 1090, 456, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.arrow(1244, 456, 1244, 396, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.tag(1127, 430, '吸收', { size: 10.5, weight: 700, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(1281, 430, '分泌', { size: 10.5, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.ctext(1127, 480, '血液', { size: 9, fill: C.mute })
  b.ctext(1281, 480, '血液', { size: 9, fill: C.mute })
  b.wtext(1060, 505, '吸收＝管腔→血液（小肠、肾近端小管）；分泌＝血液→管腔（胃底腺、外分泌腺）——改写两侧的蛋白清单即换功能身份', { size: 9, fill: C.sub, maxW: 280, lh: 15 })
  b.text(1060, 548, '功能身份写在膜蛋白的邮政编码里', { size: 9, fill: C.mute })

  // ================= 三、三步模型与 WNK4-SPAK Cl⁻ 开关 =================
  b.panel(30, 602, 660, 383, { title: '三、钠耦联三步模型与 WNK4-SPAK 的 Cl^{−} 开关' })
  // —— 左：standing gradient ——
  b.text(46, 648, '管腔', { size: 9.5, fill: C.mute })
  b.ion(95, 642, 'Na^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ion(150, 642, 'H_{2}O', { r: 9, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.rect(70, 665, 190, 130, { fill: C.panel, stroke: C.sub, sw: 1.8, rx: 6 })
  b.rect(320, 665, 90, 130, { fill: C.panel, stroke: C.sub, sw: 1.8, rx: 6 })
  for (const y of [672, 680, 688]) b.line(264, y, 316, y, { stroke: C.pro, sw: 3, dash: '5 4' })
  b.rect(238, 698, 44, 20, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.ctext(260, 712, 'Na^{+}/K^{+}', { size: 7, weight: 700, fill: C.proD })
  b.rect(238, 744, 44, 20, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.ctext(260, 758, 'Na^{+}/K^{+}', { size: 7, weight: 700, fill: C.proD })
  b.rect(298, 721, 44, 20, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.ctext(320, 735, 'Na^{+}/K^{+}', { size: 7, weight: 700, fill: C.proD })
  b.arrow(232, 688, 288, 688, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(232, 730, 288, 730, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(352, 748, 292, 748, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.ion(298, 702, 'Na^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ion(300, 766, 'Na^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.text(268, 782, '局部高渗', { size: 9, weight: 600, fill: C.warnD })
  b.arrow(290, 652, 290, 690, { stroke: C.acc, sw: 1.8, marker: 'acc', dash: '6 4' })
  b.ion(290, 642, 'H_{2}O', { r: 9, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8 })
  b.arrow(120, 652, 120, 662, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.text(80, 700, '① 顶端 Na^{+} 入胞', { size: 9, fill: C.sub })
  b.text(80, 736, '② 基侧泵入侧细胞间隙', { size: 9, fill: C.sub })
  b.text(80, 772, '③ 水循渗透梯度涌入', { size: 9, fill: C.sub })
  b.arrow(290, 800, 290, 826, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(250, 848, '溶质随流动扩散入毛细血管', { size: 9, fill: C.mute })
  b.wtext(46, 880, 'standing gradient：靠近紧密连接处 Na^{+} 浓度最高、渗透梯度最陡，水在「源头」即被拉入，流向血管端被逐步稀释到与血浆等渗', { size: 9, fill: C.sub, maxW: 310, lh: 15 })
  b.text(46, 930, '近端小管每日处理约 180 L 滤液，约三分之二以近等渗形式收回——「钠先行、水随行」', { size: 9.5, fill: C.sub })
  // —— 右：WNK4-SPAK/OSR1 ——
  b.text(410, 655, 'WNK4-SPAK/OSR1：感知 Cl^{−} 的开关', { size: 12, weight: 700, fill: C.ink })
  b.tag(540, 678, '胞内 Cl^{−} 下降（容量不足）', { size: 10.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.arrow(540, 690, 540, 702, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(540, 714, 'WNK4 活化 → SPAK/OSR1', { size: 10.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(522, 726, 480, 738, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.arrow(558, 726, 600, 738, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(470, 750, 'NKCC2 / NCC ↑', { size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(610, 750, 'KCC ↓（抑制）', { size: 10, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD })
  b.arrow(480, 762, 516, 776, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.arrow(600, 762, 564, 776, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(540, 786, '转入蓄盐蓄氯模式', { size: 10.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.text(410, 816, 'Cl^{−} 充裕时整体反向：摄入体关闸、KCC 放行，把多余盐分倾出', { size: 9, fill: C.sub })
  b.tag(540, 842, 'Gordon 综合征（WNK1/4 突变）', { size: 10, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.wtext(410, 866, 'NCC 持续过活→钠氯潴留、泌钾受阻；噻嗪类利尿剂抑制 NCC，一药对症——感知 Cl^{−} 的开关写成临床处方', { size: 9, fill: C.sub, maxW: 250, lh: 15 })

  // ================= 四、植物版紧密连接：凯氏带 =================
  b.panel(710, 602, 660, 383, { title: '四、植物版紧密连接：根内皮层凯氏带' })
  b.text(726, 655, '土壤溶液', { size: 10, fill: C.mute })
  // 径向细胞条带
  b.rect(800, 665, 80, 105, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(880, 665, 95, 105, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(975, 665, 95, 105, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(1070, 665, 95, 105, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(1165, 665, 120, 105, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(840, 722, '表皮', { size: 10, weight: 600, fill: C.sub })
  b.ctext(927, 722, '皮层', { size: 10, weight: 600, fill: C.sub })
  b.ctext(1022, 722, '皮层', { size: 10, weight: 600, fill: C.sub })
  b.ctext(1110, 724, '内皮层', { size: 10, weight: 600, fill: C.sub })
  b.ctext(1225, 722, '中柱', { size: 10, weight: 600, fill: C.dnaD })
  // 凯氏带（木栓质带）
  b.rect(1066, 667, 8, 101, { fill: C.rna, fillOp: 0.85, stroke: C.rnaD, sw: 1 })
  b.ctext(1070, 650, '凯氏带（木栓质）', { size: 10, weight: 700, fill: C.rnaD })
  // 质外体路线（沿壁下渗→撞带）
  b.arrow(740, 682, 1058, 682, { stroke: C.ink, sw: 1.8, marker: 'ink', dash: '7 5' })
  b.line(1063, 675, 1077, 689, { stroke: C.bad, sw: 2.5 })
  b.line(1077, 675, 1063, 689, { stroke: C.bad, sw: 2.5 })
  b.text(1090, 670, '撞带封死', { size: 9, weight: 700, fill: C.badD })
  b.text(740, 700, '质外体（沿细胞壁下渗）', { size: 9.5, fill: C.sub })
  b.arrow(1078, 690, 1142, 726, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  // 共质体路线（胞间连丝直通）
  b.arrow(740, 735, 1130, 735, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.text(740, 757, '共质体（胞间连丝直通）', { size: 9.5, fill: C.sub })
  for (const x of [880, 975]) b.circle(x, 735, 4, { fill: '#ffffff', stroke: C.ok, sw: 1.6 })
  // 内皮层质膜查验后放行
  b.rect(1147, 727, 38, 16, { fill: C.enzL, stroke: C.enz, sw: 1.5, rx: 4 })
  b.ctext(1166, 738, '转运体', { size: 7.5, weight: 700, fill: C.enzD })
  b.arrow(1187, 735, 1215, 735, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ctext(1220, 758, '查验后放行入中柱', { size: 9, fill: C.enzD })
  // CASP 组装三步
  b.rect(726, 830, 190, 50, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(821, 851, '① CASP 蛋白带状聚集', { size: 10, weight: 600, fill: C.sub })
  b.rect(926, 830, 190, 50, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(1021, 851, '② 清除带区转运体', { size: 10, weight: 600, fill: C.sub })
  b.rect(1126, 830, 228, 50, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(1240, 851, '③ 木栓质沉积封死初生壁', { size: 10, weight: 600, fill: C.sub })
  b.arrow(916, 855, 926, 855, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(1116, 855, 1126, 855, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.wtext(726, 900, '植物没有经典上皮，却在根内皮层复刻同一逻辑：CASP 引导木栓质封死初生壁，阻断质外体、强制溶质改走穿细胞路线、接受质膜转运体逐一查验——与紧密连接同为「屏障＋选择器」，功能趋同而起源各异', { size: 9.5, fill: C.sub, maxW: 620, lh: 17 })
  b.text(726, 952, '径向两条路：共质体经胞间连丝；质外体沿壁下渗——凯氏带是质外体的终点、穿细胞的起点', { size: 9.5, fill: C.sub })
}

export default scene({
  title: '上皮转运总论：极性、紧密连接与矢量转运',
  subtitle: '顶端膜与基侧膜各持一套转运蛋白，微绒毛刷状缘扩面约 20 倍；紧密连接既是分子篱笆又是 claudin 编码的细胞旁滤器（claudin-16/19 缺陷致家族性低镁血症）；紧密上皮数百至数千 Ω·cm²、泄漏上皮约 5–10 Ω·cm²；钠耦联三步模型与 standing gradient 运水，WNK4-SPAK/OSR1 以 Cl⁻ 切换矢量方向；凯氏带是植物版紧密连接',
  draw,
})
