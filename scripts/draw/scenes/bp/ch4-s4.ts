// bp ch4-s4 细胞的力学感受与力学传导（39-e 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三条时程通路 ============
  b.panel(30, 132, 1340, 300, { title: '一、力学传导（mechanotransduction）按速度分三条通路' })

  const cols: Array<[string, string, string, string, string, string]> = [
    ['快：μs–ms', C.enz, C.enzL, C.enzD, '牵张激活离子通道（SAC）', '膜张力直接开门、Ca²⁺ 内流：Piezo1/Piezo2 介导血管发育、触觉、本体感觉与血压感受；细菌 MscL/MscS 为演化先例（渗透冲击「应急阀」防胀破）。'],
    ['中速：分钟', C.acc, C.accL, C.accD, '整联蛋白与黏着斑', '跨膜异源二聚体：胞外结合纤连蛋白、胶原，胞内经 talin、vinculin 连接肌动蛋白应力纤维；牵拉使「分子扳机」展开、暴露隐蔽位点并活化 FAK；细胞以牵引–反牵引循环主动试探基质刚度（响应近似对数线性）。'],
    ['慢而全局：小时级', C.pro, C.proL, C.proD, 'YAP/TAZ 通路', '转录共激活子充当「细胞刚度传感器」：软基质或圆缩细胞中 YAP 被滞留胞质并磷酸化降解；硬基质或充分铺展时经 LINC 核–骨架偶联入核，激活增殖与分化基因——指挥干细胞命运（成骨 vs 成脂）。'],
  ]
  cols.forEach(([badge, bc, bl, bd, name, text], i) => {
    const x = 50 + i * 432
    b.tag(x + 80, 182, badge, { fill: bl, stroke: bc, size: 12, weight: 700, tfill: bd, pad: 9 })
    b.text(x, 226, name, { size: 14.5, weight: 700, fill: C.ink })
    b.wtext(x, 252, text, { size: 10.5, fill: C.sub, maxW: 400, lh: 14.5 })
  })

  // 小图标：① 通道开门 ② 整联蛋白桥接 ③ YAP 入核
  // ①
  b.bilayer(66, 380, 100, { h: 12, tint: C.enz })
  b.rect(104, 376, 16, 22, { fill: C.bg, stroke: C.enz, sw: 2 })
  b.arrow(112, 366, 112, 394, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(142, 388, 'Ca²⁺', { r: 11, fill: C.warnL, stroke: C.warn, size: 8.5 })
  // ②
  b.line(496, 368, 620, 368, { stroke: C.pro, sw: 3.5 })
  b.line(496, 406, 620, 406, { stroke: C.acc, sw: 3 })
  b.rect(544, 368, 12, 40, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.rect(560, 368, 12, 40, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(558, 424, '整联蛋白 α/β', { size: 9, fill: C.accD })
  // ③
  b.circle(1000, 388, 24, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.circle(1000, 388, 9, { fill: C.pro, fillOp: 0.35, stroke: C.pro, sw: 1.2 })
  b.circle(1030, 400, 4, { fill: C.bad })
  b.arrow(1030, 394, 1008, 386, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(1036, 378, 'YAP', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(1096, 390, '硬基质 → 入核', { size: 9.5, fill: C.mute })

  // ============ 二、Piezo 通道 ============
  b.panel(30, 458, 1340, 268, { title: '二、Piezo 通道：力来自脂双层（force-from-lipid，2021 年诺贝尔生理学或医学奖）' })

  // -- 左：顶面观（三叶螺旋桨）--
  const cx = 240, cy = 595
  for (let k = 0; k < 3; k++) {
    const th = (Math.PI / 2) + (k * 2 * Math.PI) / 3
    const ux = Math.cos(th), uy = Math.sin(th)
    const px = -uy, py = ux
    b.polygon([
      [cx + 16 * ux + 10 * px, cy + 16 * uy + 10 * py],
      [cx + 100 * ux + 17 * px, cy + 100 * uy + 17 * py],
      [cx + 100 * ux - 17 * px, cy + 100 * uy - 17 * py],
      [cx + 16 * ux - 10 * px, cy + 16 * uy - 10 * py],
    ], { fill: C.accL, stroke: C.acc, sw: 2, fillOp: 0.9 })
  }
  b.circle(cx, cy, 13, { fill: C.bg, stroke: C.accD, sw: 2.5 })
  b.ctext(cx, cy + 4, '孔', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(cx, 700, '顶面观：三叶螺旋桨状三聚体', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(cx, 718, '每亚基 30 余个跨膜螺旋（2010 年发现）', { size: 9.5, fill: C.mute })

  // -- 中：侧面观（张力展平桨叶）--
  b.bilayer(470, 600, 420, { h: 14, tint: C.dna })
  b.path('M 620,600 Q 690,558 760,600', { stroke: C.acc, sw: 3, fill: 'none' })
  b.path('M 620,614 Q 690,572 760,614', { stroke: C.acc, sw: 3, fill: 'none' })
  b.line(620, 607, 760, 607, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.arrow(600, 607, 520, 607, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.arrow(780, 607, 860, 607, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(690, 544, '膜张力 σ 展平桨叶 → 拉开孔道', { size: 10.5, weight: 700, fill: C.bad })
  b.arrow(690, 622, 690, 652, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ion(690, 672, 'Ca²⁺', { r: 12, fill: C.warnL, stroke: C.warn, size: 9 })
  b.text(742, 676, '内流', { size: 9.5, fill: C.sub })
  b.ctext(690, 700, '侧面观：弯曲桨叶 =「膜张力计」', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(690, 718, '力来自脂双层，无需胞外栓系', { size: 9.5, fill: C.mute })

  // -- 右：事实卡 --
  b.rect(930, 478, 420, 230, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(950, 504, 'Piezo1 / Piezo2（Ardem Patapoutian）', { size: 12.5, weight: 700, fill: C.accD })
  const facts: Array<[string, string]> = [
    ['2021 年诺贝尔生理学或医学奖', '发现温度与触觉感受器'],
    ['开放引起 Ca²⁺ 内流', '介导血管发育、触觉、本体感觉与血压感受'],
    ['细菌 MscL / MscS', '渗透冲击时作为「应急阀」开放防胀破——演化先例'],
  ]
  facts.forEach(([t, d], i) => {
    const y = 532 + i * 58
    b.circle(958, y + 4, 4, { fill: C.acc })
    b.text(970, y + 8, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(970, y + 28, d, { size: 10.5, fill: C.sub, maxW: 360, lh: 13.5 })
  })

  // ============ 三、黏着斑与 YAP/TAZ ============
  b.panel(30, 754, 1340, 226, { title: '三、黏着斑「分子扳机」与 YAP/TAZ 刚度传感器' })

  // -- 左：黏着斑纵切面 --
  b.line(70, 812, 620, 812, { stroke: C.pro, sw: 4 })
  b.ctext(345, 800, '肌动蛋白应力纤维', { size: 10, weight: 700, fill: C.proD })
  b.bilayer(70, 880, 560, { h: 12, tint: C.dna })
  // 整联蛋白跨膜
  b.rect(300, 868, 12, 36, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.rect(316, 868, 12, 36, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(368, 862, '整联蛋白', { size: 9.5, weight: 700, fill: C.accD })
  // talin 弹簧（分子扳机）
  let d = 'M 306,868 '
  for (let i = 0; i < 6; i++) d += `L ${318 + (i % 2) * 14},${868 - 9 - i * 8} `
  b.path(d, { stroke: C.enz, sw: 2.4, fill: 'none' })
  b.ctext(400, 838, 'talin 展开 → 暴露隐蔽结合位点（vinculin、FAK 活化）', { size: 9.5, weight: 700, fill: C.enzD })
  // 基质
  b.rect(70, 928, 560, 26, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.4, rx: 4 })
  for (let i = 0; i < 14; i++) b.line(90 + i * 40, 932, 78 + i * 40, 950, { stroke: C.acc, sw: 1.2 })
  b.tag(350, 941, '纤连蛋白 / 胶原（细胞外基质）', { fill: C.bg, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 6 })
  b.arrow(200, 816, 200, 922, { stroke: C.mute, sw: 1.8, dash: '5 4', markerStart: 'mute', marker: 'mute' })
  b.ctext(150, 870, '牵引–反牵引循环', { size: 9.5, weight: 700, fill: C.sub })
  b.ctext(150, 888, '（主动试探基质刚度）', { size: 9, fill: C.mute })

  // -- 右：YAP/TAZ 两态 --
  b.rect(690, 778, 660, 90, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.2, rx: 8 })
  b.circle(760, 822, 26, { fill: C.panel, stroke: C.mute, sw: 1.8 })
  b.circle(760, 822, 9, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  for (const [dx, dy] of [[745, 808], [778, 838], [738, 834]]) b.circle(760 + dx - 760, 822 + dy - 822, 4, { fill: C.bad })
  b.arrow(738, 800, 706, 798, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.etext(688, 792, '磷酸化 → 降解', { size: 9.5, fill: C.mute })
  b.text(810, 806, '软基质 / 圆缩细胞', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(810, 826, 'YAP 滞留胞质并被磷酸化降解 → 转录沉默', { size: 10, fill: C.sub, maxW: 330, lh: 13 })
  b.rect(690, 882, 660, 90, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.2, rx: 8 })
  b.ellipse(770, 926, 48, 26, { fill: C.panel, stroke: C.mute, sw: 1.8 })
  b.circle(770, 926, 11, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  for (const [dx, dy] of [[765, 922], [776, 930]]) b.circle(770 + dx - 770, 926 + dy - 926, 4, { fill: C.bad })
  b.arrow(840, 906, 870, 896, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.text(890, 910, '硬基质 / 充分铺展', { size: 11.5, weight: 700, fill: C.ok })
  b.wtext(890, 930, '应力纤维经 LINC 核–骨架偶联把 YAP 送入核 → 激活增殖与分化基因（成骨 vs 成脂分化）', { size: 10, fill: C.sub, maxW: 430, lh: 13 })
}

export default scene({
  title: '细胞的力学感受与力学传导：Piezo、黏着斑与 YAP/TAZ',
  subtitle: '三条时程通路：牵张激活通道（μs–ms，Piezo 2021 诺奖、力来自脂双层）、整联蛋白–talin 黏着斑（分钟）、YAP/TAZ 刚度传感器（小时级）指挥干细胞命运',
  draw,
})
