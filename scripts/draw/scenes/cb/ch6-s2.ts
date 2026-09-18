// cb ch6-s2 微管马达蛋白：驱动蛋白与动力蛋白（39-d 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两大微管马达：方向相反 ============
  b.panel(30, 132, 1340, 350, { title: '一、两大微管马达：方向相反的运输机器' })
  b.line(100, 300, 1250, 300, { stroke: C.faint, sw: 4 })
  for (let i = 0; i < 58; i++) b.line(104 + i * 20, 293, 112 + i * 20, 307, { stroke: C.faint, sw: 1, opacity: 0.7 })
  b.text(1258, 294, '+ 端', { size: 11, weight: 700, fill: C.acc })
  b.text(95, 294, '− 端', { size: 11, weight: 700, fill: C.acc, anchor: 'end' })
  b.ctext(660, 292, '微管', { size: 9, fill: C.faint })
  b.braceH(700, 275, 40, { label: '8 nm（一个 αβ 二聚体）', flip: true, fill: C.mute, size: 9.5 })
  // 驱动蛋白（上，向正端）
  b.tag(330, 172, '顺向轴浆运输', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 6 })
  b.ctext(530, 176, '驱动蛋白-1（kinesin）→ 正端', { size: 12, weight: 700, fill: C.enz })
  b.circle(500, 205, 20, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.ctext(500, 209, '货物', { size: 9.5, fill: C.sub })
  b.text(545, 209, '膜性细胞器：分泌小泡·线粒体', { size: 9.5, fill: C.sub })
  b.line(492, 223, 482, 278, { stroke: C.enz, sw: 2 })
  b.line(508, 223, 503, 278, { stroke: C.enz, sw: 2 })
  b.circle(478, 285, 10, { fill: C.enzL, stroke: C.enz, sw: 2.2 })
  b.circle(502, 285, 10, { fill: C.enzL, stroke: C.enz, sw: 2.2 })
  b.arrow(420, 285, 462, 285, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.etext(415, 262, '每步 8 nm · 交替领先', { size: 10, weight: 600, fill: C.enzD })
  // 动力蛋白（下，向负端）
  b.arrow(830, 350, 795, 350, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.circle(880, 350, 30, { fill: C.accL, stroke: C.acc, sw: 2.4 })
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    b.circle(880 + 18 * Math.cos(a), 350 + 18 * Math.sin(a), 4, { fill: C.acc, fillOp: 0.75 })
  }
  b.ctext(880, 355, 'AAA⁺', { size: 10.5, weight: 700, fill: C.accD })
  b.line(880, 320, 880, 302, { stroke: C.acc, sw: 2 })
  b.rect(918, 328, 14, 50, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  b.ctext(925, 398, 'dynactin', { size: 8.5, weight: 700, fill: C.proD })
  b.circle(880, 415, 14, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.text(920, 420, '内体／网格蛋白包被小泡回运', { size: 9.5, fill: C.sub })
  b.ctext(880, 452, '胞质动力蛋白-1＋dynactin → 负端（逆向轴浆运输）', { size: 11.5, weight: 700, fill: C.accD })
  b.text(60, 452, '每次 ATP 水解 ↔ 一次构象变化与 8 nm 步进，产生数 pN 的力。', { size: 10.5, fill: C.sub })

  // ============ 二、驱动蛋白-1：结构与步进 ============
  b.panel(30, 506, 660, 474, { title: '二、驱动蛋白-1：结构与 hand-over-hand 步进' })
  b.domains(60, 560, 44, [
    { label: '马达结构域', frac: 130, fill: C.enzL, stroke: C.enz, sub: 'ATP酶·微管结合' },
    { label: '颈部连接肽', frac: 80, fill: C.rnaL, stroke: C.rna, sub: '拉链传构象' },
    { label: '杆部', frac: 210, fill: C.proL, stroke: C.pro, sub: '反向平行二聚体' },
    { label: '尾部＋轻链', frac: 120, fill: C.accL, stroke: C.acc, sub: '结合货物' },
  ])
  b.ctext(330, 632, '驱动蛋白-1 异四聚体（2 条重链＋2 条轻链）', { size: 10.5, fill: C.mute })
  b.text(60, 662, 'hand-over-hand 交替步进（两个头部轮流领先）', { size: 11.5, weight: 700, fill: C.ink })
  b.line(90, 715, 330, 715, { stroke: C.faint, sw: 3 })
  b.circle(150, 706, 10, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(150, 710, 'A', { size: 10, weight: 700, fill: C.enzD })
  b.circle(190, 706, 10, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(190, 710, 'B', { size: 10, weight: 700, fill: C.proD })
  b.line(152, 696, 170, 668, { stroke: C.ink, sw: 1.8 })
  b.line(188, 696, 170, 668, { stroke: C.ink, sw: 1.8 })
  b.circle(170, 665, 5, { fill: C.ink })
  b.ctext(210, 740, '① 头 A 领先', { size: 10, fill: C.sub })
  b.arrow(340, 706, 375, 706, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.line(380, 715, 620, 715, { stroke: C.faint, sw: 3 })
  b.circle(430, 706, 10, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(430, 710, 'A', { size: 10, weight: 700, fill: C.enzD })
  b.circle(470, 706, 10, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(470, 710, 'B', { size: 10, weight: 700, fill: C.proD })
  b.line(432, 696, 450, 668, { stroke: C.ink, sw: 1.8 })
  b.line(468, 696, 450, 668, { stroke: C.ink, sw: 1.8 })
  b.circle(450, 665, 5, { fill: C.ink })
  b.ctext(500, 740, '② 头 B 越过 A 领先', { size: 10, fill: C.sub })
  b.braceH(430, 728, 40, { label: '8 nm', fill: C.mute })
  b.text(60, 790, '家族成员分工：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(150, 818, 'Kinesin-5', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 6 })
  b.text(210, 822, '四聚体双向马达：纺锤体中区交联反向微管、向两端滑动推开双极', { size: 10.5, fill: C.sub })
  b.tag(150, 850, 'Kinesin-14', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 6 })
  b.text(210, 854, '负端导向的例外（如 ncd）', { size: 10.5, fill: C.sub })
  b.tag(150, 882, 'Kinesin-13', { fill: C.proL, stroke: C.pro, size: 10, weight: 700, tfill: C.proD, pad: 6 })
  b.text(210, 886, '不行走——催化微管两端解聚，调控纺锤体长度', { size: 10.5, fill: C.sub })
  b.wtext(60, 925, '病毒「搭便车」：狂犬病毒与腺病毒劫持 dynein 向核周运输；驱动蛋白为有丝分裂所必需，是抗肿瘤药物的靶点。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14 })

  // ============ 三、轴丝动力蛋白与 Kartagener ============
  b.panel(710, 506, 660, 474, { title: '三、轴丝动力蛋白：纤毛/鞭毛发动机与 Kartagener 综合征' })
  // 9+2 轴丝横切面
  b.circle(862, 620, 8, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.circle(878, 620, 8, { fill: C.accL, stroke: C.acc, sw: 2 })
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 - Math.PI / 2
    b.circle(870 + 55 * Math.cos(a), 620 + 55 * Math.sin(a), 10, { fill: C.panelB, stroke: C.sub, sw: 2 })
  }
  b.line(925, 620, 960, 595, { stroke: C.enz, sw: 2.5 })
  b.circle(960, 595, 5, { fill: C.enz })
  b.text(975, 592, '动力蛋白臂', { size: 9, weight: 700, fill: C.enzD })
  b.line(872, 614, 948, 560, { stroke: C.faint, sw: 1.2 })
  b.text(952, 558, '中央双微管', { size: 9, fill: C.accD })
  b.line(870, 566, 948, 576, { stroke: C.faint, sw: 1.2 })
  b.text(952, 578, '外周二联体×9', { size: 9, fill: C.sub })
  b.ctext(870, 712, '9+2 轴丝横切面', { size: 11, weight: 700, fill: C.ink })
  // 滑动→弯曲
  b.ctext(1180, 568, '滑动 → 弯曲的转换', { size: 11, weight: 700, fill: C.ink })
  b.tag(1180, 598, '轴丝动力蛋白水解 ATP', { fill: C.enzL, stroke: C.enz, size: 10, tfill: C.enzD, pad: 6 })
  b.arrow(1180, 618, 1180, 640, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.tag(1180, 662, '相邻二联体滑动', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.arrow(1180, 682, 1180, 704, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(1180, 726, '连接蛋白约束 → 弯曲摆动', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 6 })
  b.path('M 1100, 778 Q 1180, 738 1260, 798', { stroke: C.mute, sw: 3.5, fill: 'none' })
  b.ctext(1180, 818, '纤毛／鞭毛弯曲摆动', { size: 9.5, fill: C.mute })
  // Kartagener
  b.rect(740, 850, 614, 100, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.5, rx: 8 })
  b.text(760, 875, 'Kartagener 综合征（原发性纤毛运动障碍 PCD）——轴丝动力蛋白臂缺陷', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(760, 898, '纤毛与精子鞭毛不动 → 反复呼吸道感染、不育；胚胎结纤毛缺陷使内脏左右不对称随机化（内脏反位）——纤毛运动决定左右体轴。', { size: 10.5, fill: C.sub, maxW: 574, lh: 14 })
  b.text(740, 968, '动力蛋白/dynactin 突变 → 腓骨肌萎缩症与运动神经元病。', { size: 10, fill: C.mute })
}

export default scene({
  title: '微管马达蛋白：驱动蛋白与动力蛋白',
  subtitle: '驱动蛋白-1 走向微管正端（顺向轴浆运输）、动力蛋白走向负端（逆向）；ATP 水解耦联构象变化、8 nm 步进 hand-over-hand；轴丝动力蛋白驱动纤毛鞭毛弯曲，缺陷致 Kartagener 综合征（不育＋内脏反位）',
  draw,
})
