// mt ch2-s1 通道的一般性质（三要素 + 单通道电导谱 + KcsA 滤器 + 速率数量级对照）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、通道三要素 ============
  b.panel(30, 132, 660, 300, { title: '一、通道三要素：可独立替换的三个模块' })
  // —— ① 孔道 ——
  b.ctext(150, 190, '① 孔道 pore', { size: 13.5, weight: 700, fill: C.dnaD })
  b.ctext(150, 208, '贯穿膜的亲水通路', { size: 11, fill: C.mute })
  b.text(46, 262, '胞外', { size: 10.5, fill: C.mute })
  b.text(46, 310, '胞质', { size: 10.5, fill: C.mute })
  b.bilayer(75, 270, 150)
  b.polygon([[139, 258], [161, 258], [157, 272], [157, 278], [167, 288], [167, 300], [133, 300], [133, 288], [143, 278], [143, 272]], { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.polygon([[120, 258], [139, 258], [143, 272], [143, 278], [133, 288], [133, 300], [120, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[180, 258], [161, 258], [157, 272], [157, 278], [167, 288], [167, 300], [180, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ion(150, 240, 'K^{+}', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5 })
  b.arrow(150, 250, 150, 265, { stroke: C.pro, sw: 1.5, marker: 'pro', dash: '4 3' })
  b.ion(150, 275, 'K^{+}', { r: 6, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(150, 284, 150, 302, { stroke: C.pro, sw: 1.5, marker: 'pro', dash: '4 3' })
  b.ion(150, 320, 'K^{+}', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5 })
  b.ctext(150, 342, '前庭宽如漏斗 · 最窄处几 Å', { size: 11, fill: C.sub })
  b.ctext(150, 360, 'TEA 内堵 / TTX 外堵定位孔深', { size: 11, fill: C.sub })
  // —— ② 门控 ——
  b.ctext(360, 190, '② 门控 gating', { size: 13.5, weight: 700, fill: C.enzD })
  b.ctext(360, 208, '决定开合的构象开关', { size: 11, fill: C.mute })
  b.ctext(365, 226, '信号：电压 · 配体 · 机械力', { size: 11, fill: C.sub })
  b.bilayer(285, 270, 150)
  b.arrow(348, 246, 382, 246, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  // 闸关（左）
  b.polygon([[319, 258], [341, 258], [337, 272], [337, 278], [347, 288], [347, 300], [313, 300], [313, 288], [323, 278], [323, 272]], { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.polygon([[300, 258], [319, 258], [323, 272], [323, 278], [313, 288], [313, 300], [300, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[360, 258], [341, 258], [337, 272], [337, 278], [347, 288], [347, 300], [360, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.line(321, 298, 330, 310, { stroke: C.enz, sw: 2.2 })
  b.line(339, 298, 330, 310, { stroke: C.enz, sw: 2.2 })
  b.ctext(330, 326, '闸关', { size: 10.5, weight: 700, fill: C.badD })
  // 闸开（右）
  b.polygon([[389, 258], [411, 258], [407, 272], [407, 278], [417, 288], [417, 300], [383, 300], [383, 288], [393, 278], [393, 272]], { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.polygon([[370, 258], [389, 258], [393, 272], [393, 278], [383, 288], [383, 300], [370, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[430, 258], [411, 258], [407, 272], [407, 278], [417, 288], [417, 300], [430, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.line(391, 298, 381, 310, { stroke: C.ok, sw: 2.2 })
  b.line(409, 298, 419, 310, { stroke: C.ok, sw: 2.2 })
  b.ion(400, 240, 'K^{+}', { r: 7, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(400, 250, 400, 266, { stroke: C.pro, sw: 1.5, marker: 'pro', dash: '4 3' })
  b.ion(400, 304, 'K^{+}', { r: 6, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.ctext(400, 326, '闸开', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(360, 342, 'S6 交叉成束＝关，散开逾 1 nm＝开', { size: 11, fill: C.sub })
  b.ctext(360, 360, '开放概率 P_{o} 由门控曲线刻画', { size: 11, fill: C.sub })
  // —— ③ 选择性 ——
  b.ctext(570, 190, '③ 选择性 selectivity', { size: 13.5, weight: 700, fill: C.accD })
  b.ctext(570, 208, '哪种离子能过、过多快', { size: 11, fill: C.mute })
  b.bilayer(495, 270, 150)
  b.polygon([[559, 258], [581, 258], [577, 272], [577, 278], [587, 288], [587, 300], [553, 300], [553, 288], [563, 278], [563, 272]], { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.polygon([[540, 258], [559, 258], [563, 272], [563, 278], [553, 288], [553, 300], [540, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[600, 258], [581, 258], [577, 272], [577, 278], [587, 288], [587, 300], [600, 300]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ion(570, 240, 'K^{+}', { r: 7, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(570, 250, 570, 266, { stroke: C.pro, sw: 1.5, marker: 'pro', dash: '4 3' })
  b.ion(570, 275, 'K^{+}', { r: 6, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(570, 284, 570, 302, { stroke: C.pro, sw: 1.5, marker: 'pro', dash: '4 3' })
  b.ion(570, 320, 'K^{+}', { r: 7, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.ion(622, 250, 'Na^{+}', { r: 7.5, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.arrow(622, 260, 602, 270, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.line(592, 266, 602, 276, { stroke: C.bad, sw: 2 })
  b.line(602, 266, 592, 276, { stroke: C.bad, sw: 2 })
  b.ctext(570, 342, '几何筛分：K^{+} 恰容 · Na^{+} 太小止步', { size: 11, fill: C.sub })
  b.ctext(570, 360, '选择比由反转电位与离子替换测定', { size: 11, fill: C.sub })
  // 底部小结
  b.rect(46, 368, 628, 56, { fill: C.panelB, fillOp: 0.6, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(60, 390, '三要素可独立替换：同一孔道骨架可配不同的门（电压 / 配体 / 机械），同一种门控也可配不同的滤器——通道家族的多样性，本质上是三要素的排列组合史。', { size: 11.5, fill: C.sub, maxW: 600, lh: 18 })

  // ============ 二、单通道电导谱 ============
  b.panel(710, 132, 660, 300, { title: '二、单通道电导与欧姆关系：i = g(V − E_{ion})' })
  b.ctext(1070, 182, '典型单通道电导谱（pS，对数轴）', { size: 13, weight: 700, fill: C.sub })
  b.axis(850, 352, 440, 162, {
    grid: false,
    xticks: [[0, '1'], [1 / 3, '10'], [2 / 3, '100'], [1, '1000']],
  })
  // 对数刻度网格
  for (let i = 0; i <= 3; i++) {
    b.line(850 + i * (440 / 3), 190, 850 + i * (440 / 3), 352, { stroke: C.faint, sw: 0.8, dash: '3 4', opacity: 0.5 })
  }
  const lx = (v: number) => 850 + (Math.log10(v) / 3) * 440
  const rows: Array<[string, number, number, string, string, string, string]> = [
    ['多数 K^{+} 通道', 2, 20, '2–20 pS', C.dna, C.dnaL, C.dnaD],
    ['电压门控 Na^{+}', 5, 20, '5–20 pS', C.acc, C.accL, C.accD],
    ['nAChR', 30, 50, '30–50 pS', C.pro, C.proL, C.proD],
    ['BK（大电导）', 100, 300, '100–300 pS', C.enz, C.enzL, C.enzD],
  ]
  rows.forEach(([label, v0, v1, val, st, fl, _tf], i) => {
    const cy = 210 + i * 38
    b.etext(838, cy + 4, label, { size: 13, weight: 600, fill: C.ink })
    b.rect(lx(v0), cy - 7, lx(v1) - lx(v0), 14, { fill: fl, stroke: st, sw: 1.8, rx: 4 })
    b.text(lx(v1) + 8, cy + 4, val, { size: 11.5, weight: 600, fill: C.sub })
  })
  b.wtext(726, 396, '电导是孔道口径的电学量尺：10 pS 在 150 mV 驱动下 ≈ 1.5 pA，折合每秒近 10^{7} 个离子——已逼近 0.1 mol/L 溶液撞孔供给率的扩散极限（10^{8}–10^{9}/s）：不是造不出更快的通道，是溶液喂不饱。', { size: 11.5, fill: C.sub, maxW: 620, lh: 23 })

  // ============ 三、KcsA 选择性滤器 ============
  b.panel(30, 447, 660, 538, { title: '三、KcsA 选择性滤器：以水代水的原子级答案' })
  // —— 左：剖面 ——
  b.text(58, 500, '胞外', { size: 10, fill: C.mute })
  b.text(58, 655, '胞质', { size: 10, fill: C.mute })
  b.bilayer(60, 555, 260)
  b.polygon([[142, 515], [178, 515], [168, 550], [168, 578], [182, 610], [188, 628], [132, 628], [138, 610], [152, 578], [152, 550]], { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.polygon([[120, 515], [142, 515], [152, 550], [152, 578], [138, 610], [132, 628], [120, 628]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[200, 515], [178, 515], [168, 550], [168, 578], [182, 610], [188, 628], [200, 628]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  // S6 闸门（开）
  b.line(140, 615, 132, 630, { stroke: C.enz, sw: 2 })
  b.line(180, 615, 188, 630, { stroke: C.enz, sw: 2 })
  b.text(66, 622, 'S6 闸门', { size: 10.5, fill: C.sub })
  b.line(108, 618, 128, 620, { stroke: C.faint, sw: 1 })
  // 滤器标注
  b.text(66, 560, '滤器 ≈3 Å', { size: 10.5, fill: C.sub })
  b.line(112, 556, 148, 560, { stroke: C.faint, sw: 1 })
  b.text(205, 540, 'S1–S4 位点', { size: 10, weight: 600, fill: C.proD })
  b.line(202, 543, 172, 556, { stroke: C.faint, sw: 1 })
  // 水化 K⁺（上）
  b.circle(160, 490, 8, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  for (let a = 0; a < 6; a++) {
    const th = (Math.PI / 6) + a * (Math.PI / 3)
    b.circle(160 + 11 * Math.cos(th), 490 + 11 * Math.sin(th), 2.5, { fill: C.acc })
  }
  b.ctext(196, 494, 'K^{+}·H_{2}O', { size: 10, fill: C.proD })
  b.line(192, 490, 172, 490, { stroke: C.faint, sw: 1 })
  // knock-on 箭头 + 4 个 K⁺ 位点 + 羰基氧
  b.arrow(160, 544, 160, 584, { stroke: C.pro, sw: 1.6, marker: 'pro', dash: '5 4' })
  const siteY = [553, 560.5, 568, 575.5]
  siteY.forEach(y => {
    b.circle(153.5, y, 2.3, { fill: C.enz })
    b.circle(166.5, y, 2.3, { fill: C.enz })
  })
  siteY.forEach(y => b.circle(160, y, 4.5, { fill: C.pro, stroke: C.proD, sw: 1.1 }))
  // 出闸
  b.arrow(160, 632, 160, 652, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.circle(160, 665, 8, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  for (let a = 0; a < 6; a++) {
    const th = (Math.PI / 6) + a * (Math.PI / 3)
    b.circle(160 + 11 * Math.cos(th), 665 + 11 * Math.sin(th), 2.5, { fill: C.acc })
  }
  b.ctext(160, 690, 'K^{+}·H_{2}O', { size: 10, fill: C.proD })
  // —— 右：要点栏 ——
  b.wtext(355, 505, '胞外前庭宽如漏斗，引导水合离子鱼贯而入', { size: 11.5, fill: C.sub, maxW: 310, lh: 20 })
  b.wtext(355, 530, '选择性滤器：TVGYG 主链羰基排成氧环，孔径约 3 Å——恰容脱去水化壳的 K^{+}', { size: 11.5, fill: C.sub, maxW: 310, lh: 23 })
  b.wtext(355, 578, '4 个结合位点串联，K^{+} 以 knock-on 推挤接力换位', { size: 11.5, fill: C.sub, maxW: 310, lh: 23 })
  b.wtext(355, 603, 'K^{+} 脱水的能量损失被羰基氧结合能精确补偿——「以水代水」', { size: 11.5, fill: C.sub, maxW: 310, lh: 23 })
  b.wtext(355, 648, 'Na^{+} 太小、贴不到足够氧原子，止步于前庭', { size: 11.5, fill: C.sub, maxW: 310, lh: 23 })
  b.wtext(355, 672, '长胞内腔与 S6 激活闸门：开门时弯曲散开逾 1 nm', { size: 11.5, fill: C.sub, maxW: 310, lh: 20 })
  // —— 选择比对照 ——
  b.text(60, 730, '选择比对照（条长 ∝ log_{10} 选择比）', { size: 13, weight: 700, fill: C.sub })
  b.etext(240, 764, 'KcsA（K^{+}:Na^{+}）', { size: 12, weight: 600, fill: C.ink })
  b.rect(260, 752, 300, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.text(570, 764, '>10 000 : 1', { size: 12.5, weight: 700, fill: C.dnaD })
  b.etext(240, 796, 'Nav DEKA（Na^{+}:K^{+}）', { size: 12, weight: 600, fill: C.ink })
  b.rect(260, 784, 80, 16, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.text(350, 796, '≈12 : 1', { size: 12.5, weight: 700, fill: C.accD })
  b.text(350, 818, '条长 = lg(选择比) × 75 px', { size: 10, fill: C.mute })
  // —— 底注 ——
  b.wtext(60, 846, '严筛换高保真、宽筛换高流量——选择性与通量在物理上此消彼长；DEKA 滤器的四个亚基环分别贡献 Asp、Glu、Lys、Ala 各一环。', { size: 11, fill: C.sub, maxW: 620, lh: 19 })
  b.wtext(60, 888, '滤器本身可塌陷变构成为失活位点（Kv 的第二道闸）；关闭态还可以是疏水闸——疏水侧面把水挤出孔道，离子无处驻留。', { size: 11, fill: C.sub, maxW: 620, lh: 19 })
  b.wtext(60, 912, '欧姆关系在驱动电压超出一定范围后弯折：Kir 的 Mg^{2+} 与多胺堵孔造成内向整流、KAT 弱整流让韧皮部伴胞双向微调——整流常常正是生理设计。', { size: 11, fill: C.sub, maxW: 620, lh: 23 })
  b.text(60, 958, 'I = N × P_{o} × i：全细胞电流是数千通道的统计平均，门控调控改的正是开放概率 P_{o}；TTX 堵 Nav 孔口、蝎毒素抓住电压传感器不许复位。', { size: 11, fill: C.sub })

  // ============ 四、速率数量级对照 ============
  b.panel(710, 447, 660, 538, { title: '四、速率与梯度成比例：与载体差五个数量级' })
  b.axis(790, 715, 460, 205, {
    grid: false, title: '转运速率（对数轴）',
    yticks: Array.from({ length: 10 }, (_, i) => [i / 9, `10^{${i}}`] as [number, string]),
  })
  const ry = (v: number) => 715 - (Math.log10(v) / 9) * 205
  for (let i = 1; i < 9; i++) {
    b.line(790, 715 - (i / 9) * 205, 1250, 715 - (i / 9) * 205, { stroke: C.faint, sw: 0.8, dash: '3 4', opacity: 0.5 })
  }
  // 通道柱：10^7–10^8 离子/s
  b.rect(830, ry(1e8), 80, ry(1e7) - ry(1e8), { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 4 })
  b.ctext(870, ry(1e8) - 10, '10^{7}–10^{8} 离子/s', { size: 12.5, weight: 700, fill: C.dnaD })
  // 载体柱：10^2–10^4 分子/s
  b.rect(1040, ry(1e4), 80, ry(1e2) - ry(1e4), { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 4 })
  b.ctext(1080, ry(1e4) - 10, '10^{2}–10^{4} 分子/s', { size: 12.5, weight: 700, fill: C.rnaD })
  // 五个数量级标注
  b.line(912, ry(1e8), 1230, ry(1e8), { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(1122, ry(1e4), 1230, ry(1e4), { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(1236, ry(1e8) + 4, 1236, ry(1e4) - 4, { stroke: C.sub, sw: 1.8, marker: 'mute', markerStart: 'mute' })
  b.text(1246, (ry(1e8) + ry(1e4)) / 2 + 4, '≈5 个数量级', { size: 12, weight: 700, fill: C.sub })
  // 横轴标签
  b.ctext(870, 740, '离子通道', { size: 13, weight: 600, fill: C.ink })
  b.ctext(1080, 740, '载体蛋白', { size: 13, weight: 600, fill: C.ink })
  b.ctext(870, 758, '孔的物理：不饱和 · 双向', { size: 10.5, fill: C.mute })
  b.ctext(1080, 758, '酶的化学：V_{max} · K_{m}', { size: 10.5, fill: C.mute })
  // 任务分配表
  b.text(740, 780, '通道 vs 载体：什么任务只能交给谁', { size: 13.5, weight: 700, fill: C.sub })
  b.table(740, 790, 610, {
    headers: ['特性', '离子通道', '载体蛋白'],
    colW: [96, 260, 254],
    rowH: 21,
    fontSize: 11.5,
    rows: [
      ['转运速率', '10^{7}–10^{8} 离子/s', '10^{2}–10^{4} 分子/s'],
      ['动力学', '与驱动力成比例、不饱和', '米氏饱和（V_{max}、K_{m}）'],
      ['方向性', '双向、顺梯度', '借驱动力可逆浓差'],
      ['底物关系', '几何筛分、无需稳定结合', '特异位点＋构象交替'],
      ['代表', 'KcsA、nAChR、KAT1', 'GLUT1、SGLT1、NRT1.1'],
      ['生理任务', '毫秒级电信号', '吸收、分泌、稳态浓度'],
    ],
  })
  b.text(740, 968, '毫秒级动作电位与突触电流只能用通道；葡萄糖吸收、离子稳态只能交给载体与泵。', { size: 11.5, fill: C.sub })
}

export default scene({
  title: '通道的一般性质：孔道、门控与选择性',
  subtitle: '三要素模块化组合；i = g(V − E_{ion})：多数 K^{+} 通道 2–20 pS、BK 大电导达 100–300 pS；KcsA 滤器以羰基氧代水化壳实现 >10 000:1 选择，通道 10^{7}–10^{8} 离子/s 比载体快五个数量级',
  draw,
})
