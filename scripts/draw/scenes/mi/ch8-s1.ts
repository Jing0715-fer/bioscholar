// mi ch8-s1 基因突变的类型与规律（39-f 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // 序列方块渲染器
  const seq = (x: number, y: number, bases: string, hl: number[] = []) => {
    const w = 17
    for (let i = 0; i < bases.length; i++) {
      const hi = hl.includes(i)
      b.rect(x + i * (w + 2), y, w, 20, { fill: hi ? C.bad : C.panelB, stroke: hi ? C.bad : C.line, sw: 1, rx: 3 })
      b.ctext(x + i * (w + 2) + w / 2, y + 13.5, bases[i], { size: 10.5, weight: 700, fill: hi ? '#ffffff' : C.ink })
    }
  }

  // ============ 一、突变的分子类型 ============
  b.panel(30, 132, 1340, 232, { title: '一、基因突变的三类分子类型与表型效应三档' })

  // 列1 碱基置换
  b.tag(255, 198, '碱基置换', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 9 })
  b.text(80, 232, '野生型', { size: 10, fill: C.mute })
  seq(80, 236, 'ATGCCATTA')
  b.text(80, 272, '转换后', { size: 10, fill: C.mute })
  seq(80, 276, 'ATGTCATTA', [3])
  b.arrow(131, 258, 131, 272, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(175, 266, 'C→T 转换（Met→Ser 错义）', { size: 9.5, fill: C.sub })
  b.wtext(80, 312, '转换：嘌呤↔嘌呤或嘧啶↔嘧啶；颠换：嘌呤↔嘧啶。', { size: 10, fill: C.sub, maxW: 360, lh: 14 })

  // 列2 移码
  b.tag(700, 198, '移码突变', { fill: C.enzL, stroke: C.enz, size: 13, weight: 700, tfill: C.enzD, pad: 9 })
  b.text(560, 232, '野生型', { size: 10, fill: C.mute })
  seq(560, 236, 'ATGCCATTA')
  b.text(560, 272, '插入后', { size: 10, fill: C.mute })
  seq(560, 276, 'ATGCCCATTA', [3])
  b.ctext(645, 266, '读码框整体错位', { size: 9.5, fill: C.sub })
  b.wtext(560, 312, '增添/缺失非 3 倍数碱基——突变点后全部密码子改变，多肽面目全非（吖啶类嵌入剂诱导）。', { size: 10, fill: C.sub, maxW: 380, lh: 14 })

  // 列3 大片段结构变异
  b.tag(1145, 198, '大片段结构变异', { fill: C.proL, stroke: C.pro, size: 13, weight: 700, tfill: C.proD, pad: 9 })
  b.genes(950, 232, 370, [
    { label: 'A', frac: 0.25, fill: C.dnaL, stroke: C.dna },
    { label: 'B', frac: 0.25, fill: C.dnaL, stroke: C.dna },
    { label: 'C', frac: 0.25, fill: C.dnaL, stroke: C.dna },
    { label: 'D', frac: 0.25, fill: C.dnaL, stroke: C.dna },
  ])
  b.genes(950, 262, 370, [
    { label: 'A', frac: 0.3, fill: C.dnaL, stroke: C.dna },
    { label: 'C', frac: 0.3, fill: C.dnaL, stroke: C.dna },
    { label: 'D', frac: 0.4, fill: C.dnaL, stroke: C.dna },
  ])
  b.ctext(1135, 270, '缺失', { size: 9, fill: C.mute })
  b.genes(950, 292, 370, [
    { label: 'A', frac: 0.22, fill: C.dnaL, stroke: C.dna },
    { label: 'B', frac: 0.19, fill: C.rnaL, stroke: C.rna },
    { label: 'B', frac: 0.19, fill: C.rnaL, stroke: C.rna },
    { label: 'C', frac: 0.2, fill: C.dnaL, stroke: C.dna },
    { label: 'D', frac: 0.2, fill: C.dnaL, stroke: C.dna },
  ])
  b.ctext(1135, 300, '重复', { size: 9, fill: C.mute })
  b.wtext(950, 328, '另有倒位与易位等染色体内/间重排。', { size: 10, fill: C.sub, maxW: 370, lh: 14 })

  // 表型效应三档
  b.tag(180, 354, '同义（氨基酸不变）', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 7 })
  b.tag(430, 354, '错义（氨基酸改变）', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.ink, pad: 7 })
  b.tag(690, 354, '无义（提前终止密码子）', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  b.ctext(1050, 354, '表型效应分三档', { size: 11, weight: 700, fill: C.ink })

  // ============ 二、影印培养实验 ============
  b.panel(30, 376, 660, 248, { title: '二、自发突变先于选择随机发生：影印培养实验' })

  // 主平板
  b.circle(150, 480, 62, { fill: C.dnaL, fillOp: 0.3, stroke: C.dna, sw: 2 })
  const masts: Array<[number, number]> = [[125, 455], [160, 448], [185, 470], [130, 495], [168, 502], [192, 495], [148, 515], [110, 472]]
  masts.forEach(([x, y]) => b.circle(x, y, 5, { fill: C.dna }))
  b.circle(160, 448, 8, { fill: 'none', stroke: C.bad, sw: 2.2 })
  b.circle(168, 502, 8, { fill: 'none', stroke: C.bad, sw: 2.2 })
  b.ctext(150, 558, '主平板（无链霉素）', { size: 10.5, weight: 700, fill: C.ink })

  // 绒布
  b.rect(300, 450, 84, 60, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 6 })
  for (let i = 0; i < 7; i++) b.line(310 + i * 11, 456, 310 + i * 11, 504, { stroke: C.faint, sw: 1.4 })
  b.ctext(342, 528, '灭菌绒布', { size: 10.5, weight: 700, fill: C.ink })
  b.arrow(216, 480, 294, 480, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.arrow(390, 480, 468, 480, { stroke: C.sub, sw: 2, marker: 'mute' })

  // 药板
  b.circle(540, 480, 62, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 2 })
  b.circle(550, 448, 8, { fill: C.dna })
  b.circle(558, 502, 8, { fill: C.dna })
  b.ctext(540, 558, '含链霉素平板', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(540, 418, '仅相同位置长出耐药菌落', { size: 9.5, fill: C.mute })

  // 虚线对应
  b.line(160, 448, 550, 448, { stroke: C.bad, sw: 1.2, dash: '4 4', opacity: 0.6 })
  b.line(168, 502, 558, 502, { stroke: C.bad, sw: 1.2, dash: '4 4', opacity: 0.6 })

  b.wtext(60, 588, '绒布轻压主平板沾取菌落印 → 影印至含药平板：相同位置的菌落照常生长；再自主平板同位置挑取原菌落接种含药培养基，同样生长——耐药性在接触链霉素之前已随机存在。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(60, 612, '与彷徨试验（1943）、涂布重涂布试验共同证明：突变自发随机发生，环境只充当选择者。', { size: 10.5, weight: 700, fill: C.ink })

  // ============ 三、诱变剂 ============
  b.panel(710, 376, 660, 248, { title: '三、诱变剂及其分子机制：只提高频率，不指定方向' })
  b.table(730, 424, 620, {
    headers: ['诱变剂类别', '代表', '分子机制', '主要突变类型'],
    colW: [110, 130, 230, 150],
    rowH: 34,
    fontSize: 10.5,
    rows: [
      ['碱基类似物', '5-溴尿嘧啶', '复制中替代正常碱基，配对行为改变', '转换'],
      ['嵌入剂', '吖啶类', '嵌入碱基对之间使复制滑移', '移码'],
      ['物理诱变', '紫外线 260 nm', '相邻嘧啶形成二聚体（以 TT 为主）', '经 SOS 易错修复产生多种突变'],
    ],
  })
  b.wtext(730, 576, '紫外线是实验室最常用物理诱变剂：260 nm 附近恰为核酸吸收峰；SOS 修复为保命而牺牲保真度。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 606, '诱变剂只提高突变频率，不能按意愿指定突变方向——「选择」仍须人工筛选。', { size: 10.5, weight: 700, fill: C.ink })

  // ============ 四、三类重要突变表型 ============
  b.panel(30, 636, 1340, 170, { title: '四、三类最重要的育种与遗传标记突变表型' })
  const pheno: Array<[number, string, string, string, string]> = [
    [50, '温度敏感突变', C.bad, C.badL, 'ts 条件致死：限定温度下蛋白失活——遗传学分析与条件表达的工具'],
    [495, '营养缺陷型', C.acc, C.accL, '丧失合成某营养物质的能力，需补充方能生长——经典遗传标记与选择载体'],
    [940, '抗药性突变', C.pro, C.proL, '在致死药物浓度下仍能增殖——最常用的选择标记'],
  ]
  pheno.forEach(([x, t, c, cl, s]) => {
    b.rect(x, 664, 400, 106, { fill: cl, fillOp: 0.4, stroke: c, sw: 1.5, rx: 9 })
    b.tag(x + 90, 690, t, { fill: cl, stroke: c, size: 12.5, weight: 700, tfill: C.ink, pad: 9 })
    b.wtext(x + 16, 724, s, { size: 10.5, fill: C.sub, maxW: 368, lh: 15 })
  })

  // ============ 五、突变率 · 回复突变 · Ames ============
  b.panel(30, 818, 1340, 162, { title: '五、突变率数字 · 回复突变与 Ames 试验' })
  b.rect(50, 848, 400, 100, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(70, 874, '自发突变率', { size: 13, weight: 700, fill: C.ink })
  b.wtext(70, 898, '细菌每个基因每世代突变率约 10⁻⁸–10⁻⁹——彷徨试验正是据此涨落统计推算。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
  b.rect(495, 848, 400, 100, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(515, 874, '回复突变', { size: 13, weight: 700, fill: C.ink })
  b.wtext(515, 898, '表型复原可经原位回复（碱基改回）或抑制突变（第二次突变掩盖首次效应）实现。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
  b.rect(940, 848, 400, 100, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.4, rx: 9 })
  b.text(960, 874, 'Ames 试验', { size: 13, weight: 700, fill: C.accD })
  b.wtext(960, 898, '利用鼠伤寒沙门菌组氨酸营养缺陷型的回复突变率上升，快速筛选致癌物——回复率的放大即诱变性的信号。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
}

export default scene({
  title: '基因突变的类型与规律：分子类型、三大经典实验与突变率',
  subtitle: '突变分碱基置换、移码与结构变异，表型效应同义/错义/无义；影印培养证明突变先于选择随机发生；每基因每世代约 10⁻⁸–10⁻⁹；UV 260 nm 经 SOS 易错修复；Ames 筛致癌物',
  draw,
})
