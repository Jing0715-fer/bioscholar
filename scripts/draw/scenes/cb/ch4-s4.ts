// cb ch4-s4 膜泡的定向运输与融合：Rab 与 SNARE（39-d 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Rab GTP 酶：膜泡的「邮政编码」 ============
  b.panel(30, 132, 660, 452, { title: '一、Rab GTP 酶：膜泡的「邮政编码」（人类 60 余种）' })
  b.text(60, 182, '定向三步：出芽 → 马达运送 → 拴系锚定', { size: 11.5, weight: 700, fill: C.ink })
  // -- 站点 A：供体膜出芽 --
  b.bilayer(60, 285, 120)
  b.circle(150, 252, 18, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.circle(143, 240, 4.5, { fill: C.acc })
  b.circle(158, 244, 4.5, { fill: C.acc })
  b.ctext(150, 226, '出芽', { size: 9.5, fill: C.sub })
  b.ctext(120, 320, '供体膜', { size: 10.5, weight: 600, fill: C.dnaD })
  b.arrow(192, 252, 240, 252, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(216, 238, '携带 Rab-GTP', { size: 9, weight: 600, fill: C.accD })
  // -- 站点 B：马达沿微管运送 --
  b.circle(345, 250, 18, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.circle(338, 238, 4.5, { fill: C.acc })
  b.circle(353, 242, 4.5, { fill: C.acc })
  b.line(255, 300, 430, 300, { stroke: C.faint, sw: 3.5 })
  b.circle(345, 288, 10, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.text(258, 291, '微管', { size: 9, fill: C.faint })
  b.ctext(345, 330, '马达蛋白（如动力蛋白）沿微管运送', { size: 9.5, fill: C.mute })
  b.arrow(375, 252, 425, 252, { stroke: C.acc, sw: 2, marker: 'acc' })
  // -- 站点 C：拴系锚定 --
  b.circle(545, 250, 18, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.circle(538, 238, 4.5, { fill: C.acc })
  b.circle(553, 242, 4.5, { fill: C.acc })
  b.bilayer(460, 300, 170)
  b.polyline([[548, 268], [552, 273], [545, 278], [556, 283], [550, 288], [558, 292]], { stroke: C.pro, sw: 1.8 })
  b.ctext(545, 224, '拴系因子捕获', { size: 9.5, weight: 600, fill: C.proD })
  b.ctext(545, 336, '靶膜（特定细胞器）', { size: 10.5, weight: 600, fill: C.dnaD })
  // -- Rab 开关 --
  b.text(60, 372, 'Rab 开关（GEF 装载 GTP / GAP 加速水解）', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(165, 412, 'Rab-GDP（胞质）', { fill: C.panelB, stroke: C.mute, size: 10.5, tfill: C.sub, pad: 8 })
  b.arrow(225, 412, 320, 412, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(272, 398, 'GEF', { size: 11, weight: 700, fill: C.accD })
  b.ctext(272, 430, '装载 GTP', { size: 9, fill: C.mute })
  b.tag(430, 412, 'Rab-GTP（膜结合）', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 8 })
  b.path('M 495,417 C 545,427 545,462 470,462 L 235,462 C 165,462 140,437 146,420', { stroke: C.pro, sw: 1.8, dash: '5 3', marker: 'pro' })
  b.ctext(345, 480, 'GAP 加速水解', { size: 10, weight: 700, fill: C.proD })
  // -- 家族分工 --
  b.text(60, 505, '家族分工（每一种 Rab 各守一区）：', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(111, 530, 'Rab1·ER→高尔基体', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 7 })
  b.tag(223, 530, 'Rab5·早期内体', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 7 })
  b.tag(352, 530, 'Rab7·晚期内体/溶酶体', { fill: C.enzL, stroke: C.enz, size: 10, tfill: C.enzD, pad: 7 })
  b.tag(116, 560, 'Rab11·再循环内体', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 7 })
  b.tag(254, 560, 'Rab27·黑素体与分泌颗粒', { fill: C.rnaL, stroke: C.rna, size: 10, tfill: C.rnaD, pad: 7 })
  b.text(60, 582, 'Rab27a 突变 → Griscelli 综合征（部分白化＋免疫缺陷）', { size: 9.5, weight: 600, fill: C.bad })

  // ============ 二、SNARE 假说 ============
  b.panel(710, 132, 660, 452, { title: '二、SNARE 假说：拉链式组装驱动膜融合' })
  // -- ① 特异性配对 --
  b.ctext(838, 190, '① 特异性配对', { size: 11, weight: 700, fill: C.ink })
  b.circle(838, 245, 26, { fill: C.bg, stroke: C.sub, sw: 2.2 })
  b.ctext(838, 210, '运输小泡', { size: 10, weight: 600, fill: C.sub })
  b.line(838, 271, 838, 300, { stroke: C.rna, sw: 3 })
  b.text(856, 290, 'v-SNARE', { size: 9.5, weight: 700, fill: C.rnaD })
  b.bilayer(746, 345, 190)
  b.line(820, 341, 820, 305, { stroke: C.acc, sw: 2.6 })
  b.line(838, 341, 838, 305, { stroke: C.acc, sw: 2.6 })
  b.line(856, 341, 856, 305, { stroke: C.acc, sw: 2.6 })
  b.text(876, 325, 't-SNARE×3', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(838, 385, '靶膜', { size: 10.5, weight: 600, fill: C.dnaD })
  b.ctext(838, 405, 'v＝synaptobrevin；t＝syntaxin＋SNAP-25', { size: 9, fill: C.mute })
  // -- ② 拉链式组装 --
  b.ctext(1055, 190, '② 拉链式组装', { size: 11, weight: 700, fill: C.ink })
  b.circle(1055, 232, 26, { fill: C.bg, stroke: C.sub, sw: 2.2 })
  b.rect(1030, 260, 50, 82, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 6 })
  b.line(1038, 266, 1038, 336, { stroke: C.rna, sw: 2.4 })
  b.line(1050, 266, 1050, 336, { stroke: C.rna, sw: 2.4 })
  b.line(1062, 266, 1062, 336, { stroke: C.rna, sw: 2.4 })
  b.line(1074, 266, 1074, 336, { stroke: C.rna, sw: 2.4 })
  b.bilayer(975, 345, 160)
  b.ctext(1055, 383, 'trans-SNARE 四螺旋束', { size: 10, weight: 700, fill: C.rnaD })
  b.ctext(1055, 402, '自膜近端向远端闭合', { size: 9, fill: C.mute })
  // -- ③ 融合孔开放 --
  b.ctext(1255, 190, '③ 融合孔开放', { size: 11, weight: 700, fill: C.ink })
  b.bilayer(1170, 345, 175)
  b.path('M 1222,358 A 33,33 0 0 0 1288,358', { fill: C.bg, stroke: C.sub, sw: 2.2 })
  b.circle(1240, 372, 3.5, { fill: C.rna })
  b.circle(1255, 366, 3.5, { fill: C.rna })
  b.circle(1270, 372, 3.5, { fill: C.rna })
  b.arrow(1255, 396, 1255, 420, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ctext(1255, 436, '货物释出', { size: 9.5, weight: 600, fill: C.sub })
  // -- NSF 循环 --
  b.text(726, 448, '融合之后：NSF 拆解 cis-SNARE 循环利用', { size: 11.5, weight: 700, fill: C.ink })
  b.bilayer(746, 520, 130)
  b.rect(770, 480, 52, 36, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 5 })
  b.line(780, 486, 780, 510, { stroke: C.rna, sw: 2.2 })
  b.line(791, 486, 791, 510, { stroke: C.rna, sw: 2.2 })
  b.line(802, 486, 802, 510, { stroke: C.rna, sw: 2.2 })
  b.line(813, 486, 813, 510, { stroke: C.rna, sw: 2.2 })
  b.ctext(796, 470, 'cis-SNARE', { size: 10, weight: 700, fill: C.rnaD })
  b.arrow(890, 498, 950, 498, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.circle(995, 498, 26, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(995, 503, 'NSF', { size: 12, weight: 700, fill: C.proD })
  b.tag(995, 545, 'α-SNAP 协助', { fill: C.enzL, stroke: C.enz, size: 9.5, tfill: C.enzD, pad: 6 })
  b.tag(995, 452, 'ATP 水解', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 6 })
  b.arrow(1024, 498, 1080, 498, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.line(1105, 478, 1105, 518, { stroke: C.rna, sw: 3.2 })
  b.line(1135, 478, 1135, 518, { stroke: C.acc, sw: 3.2 })
  b.ctext(1120, 538, '游离·再利用', { size: 9.5, fill: C.mute })
  b.text(726, 572, '拉链组装的能量将两膜拉至数纳米内、克服水化排斥而融合；SNARE 配对特异性＋拴系校验，保证只与正确的靶膜融合。', { size: 10, fill: C.sub })

  // ============ 三、突触递质释放 ============
  b.panel(30, 608, 1340, 372, { title: '三、经典范例：突触递质的 Ca²⁺ 触发释放' })
  // -- 突触结构图 --
  b.rect(80, 650, 520, 185, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 16 })
  b.text(100, 674, '突触前末梢', { size: 11, weight: 700, fill: C.sub })
  b.arrow(40, 700, 76, 700, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.text(40, 686, '动作电位', { size: 9.5, weight: 700, fill: C.bad })
  b.circle(250, 760, 20, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.ctext(250, 730, '突触小泡', { size: 9.5, weight: 600, fill: C.sub })
  b.tag(340, 764, 'synaptotagmin（Ca²⁺ 感受器）', { fill: C.warnL, stroke: C.warn, size: 8.5, tfill: '#78350f', pad: 6 })
  b.line(403, 770, 435, 788, { stroke: C.faint, sw: 1.2 })
  b.circle(450, 808, 22, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.tag(545, 762, 'Rab3', { fill: C.accL, stroke: C.acc, size: 9, tfill: C.accD, pad: 5 })
  b.line(531, 764, 472, 784, { stroke: C.faint, sw: 1.2 })
  b.bilayer(80, 838, 520)
  b.rect(525, 828, 26, 30, { fill: C.accL, stroke: C.acc, sw: 2, rx: 5 })
  b.text(560, 820, '电压门控 Ca²⁺ 通道', { size: 9.5, weight: 600, fill: C.accD })
  b.ion(505, 878, 'Ca²⁺', { r: 12 })
  b.arrow(507, 866, 528, 858, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(560, 892, 'Ca²⁺', { r: 12 })
  b.arrow(556, 880, 545, 862, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.text(200, 880, '突触间隙', { size: 10, fill: C.mute })
  b.arrow(450, 832, 450, 868, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.circle(430, 886, 4, { fill: C.rna })
  b.circle(452, 890, 4, { fill: C.rna })
  b.circle(472, 886, 4, { fill: C.rna })
  b.bilayer(80, 920, 520)
  b.rect(390, 898, 22, 20, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.rect(440, 898, 22, 20, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.rect(490, 898, 22, 20, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.ctext(450, 965, '突触后膜（受体）', { size: 10.5, weight: 600, fill: C.proD })
  // -- 释放步骤 --
  const steps: string[] = [
    '动作电位 → 突触前膜去极化',
    '电压门控 Ca²⁺ 通道开放，Ca²⁺ 内流',
    'synaptotagmin 感受 Ca²⁺ 浓度升高',
    'SNARE 依赖的膜融合——毫秒级释放递质',
    '突触小泡膜经网格蛋白介导的内吞回收',
  ]
  steps.forEach((s, i) => {
    const y = 665 + i * 30
    b.circle(712, y - 5, 12, { fill: C.accL, stroke: C.acc, sw: 1.6 })
    b.ctext(712, y - 1, `${i + 1}`, { size: 11, weight: 700, fill: C.accD })
    b.text(732, y, s, { size: 11.5, fill: C.ink })
  })
  // -- 毒素 --
  b.rect(700, 815, 654, 118, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 10 })
  b.text(720, 842, '细菌毒素：SNARE 的特异切割', { size: 12, weight: 700, fill: C.bad })
  b.wtext(720, 868, '破伤风毒素与肉毒毒素均为锌依赖蛋白酶：进入突触前末梢后特异性切割 synaptobrevin／syntaxin／SNAP-25，SNARE 机器失活 → 递质释放被阻断（破伤风的持续痉挛、肉毒的弛缓性麻痹）。', { size: 10.5, fill: C.sub, maxW: 614, lh: 14.5 })
  b.text(700, 958, 'Rab 定地址 → 拴系锚定 → SNARE 融合：三层机制叠加，实现膜泡运输的准确投递。', { size: 11, weight: 600, fill: C.ink })
}

export default scene({
  title: '膜泡的定向运输与融合：Rab 与 SNARE',
  subtitle: 'Rab-GTP 赋予小泡「邮政编码」（人类 60 余种；Rab27a 突变致 Griscelli 综合征）；v/t-SNARE 拉链式组装成四螺旋束驱动融合、NSF·α-SNAP 以 ATP 拆解循环；突触释放为 Ca²⁺-synaptotagmin-SNARE 协同范例',
  draw,
})
