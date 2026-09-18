// vi ch6-s3 病毒蛋白的加工与运输（39-j 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、病毒蛋白酶三系 ============
  b.panel(30, 132, 660, 430, { title: '一、病毒蛋白酶的三系谱' })
  const pros: [string, string, string, string][] = [
    ['丝氨酸蛋白酶', 'HCV NS3/4A', '丝氨酸—组氨酸—天冬氨酸催化三联体', C.dna],
    ['半胱氨酸蛋白酶', '脊灰 3Cpro 与 2Apro', '半胱氨酸亲核攻击肽键', C.rna],
    ['天冬氨酸蛋白酶', 'HIV PR', '二聚体、双天冬氨酸活性中心', C.pro],
  ]
  pros.forEach(([nm, rep, feat, c], i) => {
    const y0 = 194 + i * 106
    b.tag(130, y0 + 18, nm, { fill: c + '22', stroke: c, size: 12, weight: 700, tfill: c, pad: 10 })
    b.wtext(260, y0 + 6, feat, { size: 10.5, fill: C.sub, maxW: 390, lh: 15 })
    b.text(260, y0 + 66, `代表：${rep}`, { size: 10.5, weight: 700, fill: c })
    b.ellipse(90, y0 + 62, 30, 30, { fill: c + '22', stroke: c, sw: 1.8 })
    b.ctext(90, y0 + 66, 'Pro', { size: 10.5, weight: 700, fill: c })
  })
  b.wtext(50, 496, '病毒把「切自己」这件事做成了专门手艺——多聚蛋白的成熟全靠它们。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、HIV PR：十一个切点与耐药困局 ============
  b.panel(710, 132, 660, 430, { title: '二、HIV 蛋白酶：十一个切点，保守的是几何' })
  b.text(730, 190, 'Gag-Pol 多聚蛋白：', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(730, 204, 600, 24, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  const cuts: [number, string][] = [[770, 'MA'], [830, 'CA'], [890, 'NC'], [950, 'PR'], [1010, 'RT'], [1070, 'RH'], [1130, 'IN']]
  cuts.forEach(([x, nm]) => {
    b.line(x, 198, x, 234, { stroke: C.bad, sw: 1.8, dash: '4 3' })
    b.ctext(x - 16, 254, nm, { size: 8.5, fill: C.sub })
  })
  b.ctext(1030, 286, '（示意：十一处切点沿多聚蛋白分布）', { size: 9.5, fill: C.mute })
  b.ellipse(830, 340, 34, 22, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ellipse(886, 340, 34, 22, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(858, 344, 'PR', { size: 11, weight: 700, fill: C.proD })
  b.ctext(858, 376, '同源二聚体', { size: 10, fill: C.mute })
  b.wtext(960, 320, '切点保守的是几何而非序列：底物以肽链形状「就位」口袋，而非依赖特定残基。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.wtext(960, 378, '耐药突变常顾此失彼：口袋一改，多个切点的切割效率同降，酶活性与病毒适应性双双受损。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.tag(880, 452, '蛋白酶抑制剂相对难以逃逸 · 1995 年沙奎那韦首获批准', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: '#065f46', pad: 10 })
  b.wtext(730, 502, '「以形状吃序列」的策略，使 PR 抑制剂成为三联疗法的支柱。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、糖基化流水线 ============
  b.panel(30, 586, 660, 394, { title: '三、糖基化流水线：内质网到高尔基' })
  b.erU(60, 690, 180, 40, { ribo: true, stroke: C.dna })
  b.ctext(150, 766, '内质网：共翻译起始', { size: 10.5, weight: 700, fill: C.dnaD })
  b.golgi(380, 660, 170, { stroke: C.acc })
  b.ctext(380, 766, '高尔基：长成复杂糖链', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(250, 700, 330, 700, { stroke: C.mute, sw: 2, marker: 'mute' })
  // 糖蛋白
  b.rect(90, 646, 26, 30, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 5 })
  b.circle(103, 640, 5, { fill: '#fef3c7', stroke: C.warn, sw: 1 })
  b.rect(330, 646, 26, 30, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 5 })
  ;[[336, 638], [350, 634], [364, 640]].forEach(([gx, gy]) => b.circle(gx, gy, 5, { fill: '#fef3c7', stroke: C.warn, sw: 1 }))
  b.rect(460, 646, 26, 30, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 5 })
  ;[[466, 636], [480, 632], [494, 636], [480, 648]].forEach(([gx, gy]) => b.circle(gx, gy, 5, { fill: '#fef3c7', stroke: C.warn, sw: 1 }))
  b.arrow(300, 640, 320, 640, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(430, 640, 450, 640, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.wtext(50, 806, '流感 HA 单体约 7–8 个 N 位点：H1 亚型约 5–8 个；H3 自 1968 年以来头部缓慢增积、现代株可达十个上下。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 852, '新增糖链常恰落在抗体热点之上——像给抗原拧上一枚「糖做的旋钮」；gp120 糖盾更是常备军械。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 四、地址标签：信号肽与脂修饰 ============
  b.panel(710, 586, 660, 394, { title: '四、地址标签：信号肽拓扑与脂修饰' })
  b.bilayer(740, 700, 200, { tint: C.dna })
  b.rect(800, 660, 12, 80, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.circle(806, 652, 7, { fill: C.pro, fillOp: 0.8 })
  b.ctext(840, 668, 'I 型：N 端信号肽', { size: 10, weight: 700, fill: C.proD })
  b.ctext(840, 686, '（N 在腔侧）', { size: 9.5, fill: C.mute })
  b.ctext(840, 724, 'Sec61 转位子', { size: 9.5, fill: C.dnaD })
  b.bilayer(980, 700, 200, { tint: C.dna })
  b.rect(1050, 660, 12, 80, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.circle(1056, 748, 7, { fill: C.rna, fillOp: 0.8 })
  b.ctext(1086, 668, 'II 型：内信号锚', { size: 10, weight: 700, fill: C.rnaD })
  b.ctext(1086, 686, '（拓扑反向）', { size: 9.5, fill: C.mute })
  b.wtext(730, 762, '信号肽经 SRP 与 Sec61 决定 I / II 型拓扑；黄病毒衣壳借信号肽「搭车」进入分泌途径。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(850, 822, '豆蔻酰化：指挥 Gag 上膜出芽', { fill: C.rnaL, stroke: C.rna, size: 10.5, tfill: C.rnaD, pad: 8 })
  b.tag(1130, 822, '棕榈酰化：锚定脂筏', { fill: C.proL, stroke: C.pro, size: 10.5, tfill: C.proD, pad: 8 })
  b.wtext(730, 872, '化学修饰流水线就是蛋白的命运程序——加什么脂、切哪一刀，决定它去哪里、做什么。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '病毒蛋白的加工与运输：蛋白酶三系、糖基化与地址标签',
  subtitle: '丝氨酸／半胱氨酸／天冬氨酸三系蛋白酶；HIV PR 十一切点以形状吃序列（1995 沙奎那韦）；HA 单体约 7–8 个 N 位点；豆蔻酰化指挥 Gag 上膜',
  draw,
})
