// bc ch1-s4 糖蛋白与蛋白聚糖（39-a 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、糖蛋白：N-连接与 O-连接 ============
  b.panel(30, 132, 660, 432, { title: '一、糖蛋白：N-连接与 O-连接两种糖苷' })
  // 多肽链
  b.rect(80, 288, 530, 24, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 12 })
  b.text(84, 336, 'N 端', { size: 11, weight: 700, fill: C.proD })
  b.etext(608, 336, 'C 端', { size: 11, weight: 700, fill: C.proD })
  b.ctext(345, 336, '多肽链', { size: 11.5, fill: C.mute })

  // N-连接糖链（树状）：Asn 位点
  b.rect(192, 282, 16, 36, { fill: C.pro, rx: 3 })
  b.ctext(200, 360, 'Asn', { size: 11.5, weight: 700, fill: C.proD })
  b.circle(200, 252, 8, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.line(200, 260, 200, 282, { stroke: C.rna, sw: 2 })
  b.line(200, 244, 182, 224, { stroke: C.rna, sw: 2 })
  b.line(200, 244, 218, 224, { stroke: C.rna, sw: 2 })
  b.circle(182, 224, 7.5, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.circle(218, 224, 7.5, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  for (const [tx, ty] of [[168, 198], [196, 198], [224, 198], [248, 206]] as [number, number][]) {
    b.circle(tx, ty, 6.5, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  }
  b.line(182, 217, 170, 204, { stroke: C.rna, sw: 1.6 })
  b.line(182, 217, 194, 205, { stroke: C.rna, sw: 1.6 })
  b.line(218, 217, 222, 205, { stroke: C.rna, sw: 1.6 })
  b.line(218, 217, 242, 204, { stroke: C.rna, sw: 1.6 })
  b.tag(200, 170, 'N-连接糖苷', { fill: C.rnaL, stroke: C.rna, size: 12.5, weight: 700, tfill: C.rnaD, pad: 8 })

  // O-连接糖链：Ser/Thr 位点
  b.rect(462, 282, 16, 36, { fill: C.pro, rx: 3 })
  b.ctext(470, 360, 'Ser / Thr', { size: 11.5, weight: 700, fill: C.proD })
  b.circle(470, 250, 8, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.line(470, 258, 470, 282, { stroke: C.rna, sw: 2 })
  b.circle(494, 226, 7.5, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.line(476, 243, 488, 233, { stroke: C.rna, sw: 2 })
  b.circle(518, 204, 6.5, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.line(500, 219, 512, 210, { stroke: C.rna, sw: 1.6 })
  b.tag(470, 170, 'O-连接糖苷', { fill: C.rnaL, stroke: C.rna, size: 12.5, weight: 700, tfill: C.rnaD, pad: 8 })

  b.wtext(90, 392, 'N-连接：GlcNAc 的 β-异头碳连于 Asn 侧链酰胺氮，要求序列子 Asn-X-Ser/Thr（X≠Pro）；寡糖前体在 ER 脂醇连接，于内质网与高尔基体加工。', { size: 11.5, fill: C.sub, maxW: 286, lh: 17 })
  b.wtext(392, 392, 'O-连接：GalNAc 连于 Ser/Thr 的羟基氧，在高尔基体逐步合成，常见于黏蛋白。', { size: 11.5, fill: C.sub, maxW: 268, lh: 17 })
  b.text(70, 486, '寡糖链一般少于 15 个残基；糖含量 <1% 至 >80% 不等。', { size: 12, weight: 600, fill: C.ink })
  b.text(70, 516, '糖链非模板化合成 → 分子表面巨大的结构多样性 → 分子识别的基础。', { size: 11.5, fill: C.mute })
  b.text(70, 546, 'TGF-β、红细胞生成素、IgG（Fc 段糖基化影响效应功能）等重要蛋白均为糖蛋白。', { size: 11.5, fill: C.mute })

  // ============ 二、糖链的功能：血型抗原 ============
  b.panel(710, 132, 660, 432, { title: '二、糖链的功能：折叠 · 稳定 · 分子识别' })
  const funcs: [string, string][] = [
    ['① 折叠与质量控制', '葡萄糖三步修剪'],
    ['② 稳定性与半衰期', '唾液酸帽防止蛋白酶攻击'],
    ['③ 分子识别与靶向', '受体识别 · 定向运输'],
    ['④ 效应功能', 'IgG Fc 段糖基化'],
  ]
  funcs.forEach(([t, s], i) => {
    const y = 200 + i * 34
    b.text(730, y, t, { size: 12.5, weight: 700, fill: C.ink })
    b.text(910, y, s, { size: 11.5, fill: C.sub })
  })
  b.ctext(1040, 342, '红细胞血型抗原：差别仅在糖链末端糖基', { size: 13, weight: 700, fill: C.ink })
  const chains: [string, string, string][] = [
    ['O 型', '末端为岩藻糖（Fuc）', C.rna],
    ['A 型', '再加 GalNAc', C.pro],
    ['B 型', '再加半乳糖（Gal）', C.ok],
  ]
  chains.forEach(([type, note, col], i) => {
    const y = 388 + i * 56
    b.tag(770, y, type, { fill: C.panelB, stroke: C.sub, size: 12, weight: 700, tfill: C.ink, pad: 8 })
    // 共同核心链（灰）+ 末端差异糖基（彩色）
    for (let k = 0; k < 3; k++) b.circle(880 + k * 40, y, 8, { fill: '#e2e8f0', stroke: C.mute, sw: 1.4 })
    b.line(888, y, 912, y, { stroke: C.mute, sw: 1.6 })
    b.line(928, y, 952, y, { stroke: C.mute, sw: 1.6 })
    b.circle(1000, y, 9, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
    b.line(952, y, 991, y, { stroke: C.mute, sw: 1.6 })
    if (i === 0) {
      b.text(1018, y + 4, note, { size: 11.5, fill: C.sub })
    } else {
      b.circle(1044, y, 9, { fill: i === 1 ? C.proL : C.okL, stroke: col, sw: 1.6 })
      b.line(1009, y, 1035, y, { stroke: col, sw: 1.6 })
      b.text(1062, y + 4, note, { size: 11.5, fill: C.sub })
    }
  })
  b.ctext(880, 364, '共同寡糖核心 →', { size: 10.5, fill: C.mute })
  b.ctext(1000, 364, '末端糖基', { size: 10.5, fill: C.mute })
  b.wtext(730, 528, '糖链虽由基因间接编码，但非模板化合成赋予其巨大多样性——血型抗原的分子本质即糖链末端差异。', { size: 11.5, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 三、蛋白聚糖：瓶刷结构 ============
  b.panel(30, 584, 660, 388, { title: '三、蛋白聚糖 = 核心蛋白 + 糖胺聚糖（GAG）' })
  b.tag(300, 636, '软骨聚集蛋白聚糖（aggrecan）「瓶刷」结构', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 8 })
  // 透明质酸主轴
  b.line(60, 852, 640, 852, { stroke: C.acc, sw: 5 })
  b.text(64, 884, '透明质酸主轴（HA）', { size: 11.5, weight: 700, fill: C.accD })
  // 三条核心蛋白 + GAG 侧链（瓶刷）
  for (const cx of [160, 320, 480]) {
    b.line(cx, 848, cx, 668, { stroke: C.pro, sw: 5 })
    b.circle(cx, 852, 9, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
    for (let y = 684; y <= 836; y += 19) {
      b.line(cx - 44, y, cx + 44, y, { stroke: C.rna, sw: 1.6, opacity: 0.85 })
      for (const dx of [-34, -17, 0, 17, 34]) b.circle(cx + dx, y, 3, { fill: C.rna, opacity: 0.55 })
    }
  }
  b.text(96, 690, '核心蛋白', { size: 12, weight: 700, fill: C.proD })
  b.arrow(120, 686, 150, 690, { stroke: C.pro, sw: 1.6 })
  b.tag(500, 668, '糖胺聚糖（GAG）链', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 7 })
  b.arrow(486, 674, 520, 700, { stroke: C.rna, sw: 1.6 })
  b.text(430, 884, '连接蛋白（非共价聚合）', { size: 11.5, fill: C.warn, weight: 600 })
  b.wtext(50, 918, 'GAG 带大量硫酸基与羧基负电荷，吸引阳离子与水形成「分子海绵」：软骨抗压 · 关节液润滑 · 角膜透明。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })

  // ============ 四、五种糖胺聚糖对照 ============
  b.panel(710, 584, 660, 388, { title: '四、五种糖胺聚糖（GAG）对照' })
  b.table(726, 636, 628, {
    headers: ['糖胺聚糖', '重复二糖单位', '分布 / 特点'],
    colW: [148, 252, 228],
    rowH: 40,
    fontSize: 10.5,
    rows: [
      ['透明质酸', '葡糖醛酸 + GlcNAc', '唯一不硫酸化 · 游离存在'],
      ['硫酸软骨素', '葡糖醛酸 + GalNAc(4S/6S)', '软骨 · 角膜'],
      ['硫酸皮肤素', '艾杜糖醛酸 + GalNAc', '皮肤 · 血管'],
      ['硫酸角质素', '半乳糖 + GlcNAc', '角膜 · 软骨'],
      ['肝素 / 硫酸乙酰肝素', '艾杜糖醛酸(2S) + GlcNS', '抗凝 · 受体共因子'],
    ],
  })
  b.wtext(726, 906, '肝素是最常见的天然抗凝剂：增强抗凝血酶 III 对凝血酶与因子 Xa 的抑制，临床用于血栓防治；黏多糖贮积症（Hurler / Hunter 综合征）由 GAG 降解酶缺陷引起。', { size: 11.5, fill: C.sub, maxW: 628, lh: 17 })
}

export default scene({
  title: '糖蛋白与蛋白聚糖：糖链的连接、识别与「分子海绵」',
  subtitle: 'N-连接（Asn-X-Ser/Thr 序列子）与 O-连接（Ser/Thr）两条加工路径、血型抗原的末端糖基差异、核心蛋白 + GAG 瓶刷聚集体与五种糖胺聚糖对照',
  draw,
})
