// bi ch8-s4 比较基因组与泛基因组（39-i 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、共线性与重排 ============
  b.panel(30, 132, 660, 420, { title: '一、共线性与染色体重排：以倒位为例' })
  b.text(70, 188, '物种 A（参考）', { size: 12.5, weight: 700, fill: C.sub })
  b.rect(80, 198, 500, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 10 })
  const genesA = ['1', '2', '3', '4', '5', '6']
  const genesB = ['1', '2', '4', '3', '5', '6']
  const geneX = (i: number) => 105 + i * 80
  genesA.forEach((g, i) => {
    b.rect(geneX(i), 206, 60, 24, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 5 })
    b.ctext(geneX(i) + 30, 223, g, { size: 12, weight: 700, fill: C.dnaD })
  })
  b.text(70, 306, '物种 B（倒位携带者）', { size: 12.5, weight: 700, fill: C.sub })
  b.rect(80, 316, 500, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 10 })
  genesB.forEach((g, i) => {
    b.rect(geneX(i), 324, 60, 24, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 5 })
    b.ctext(geneX(i) + 30, 341, g, { size: 12, weight: 700, fill: C.dnaD })
  })
  // 连线：同源基因一一对应；3/4 交叉显示倒位
  const posA: Record<string, number> = {}
  genesA.forEach((g, i) => { posA[g] = geneX(i) + 30 })
  const posB: Record<string, number> = {}
  genesB.forEach((g, i) => { posB[g] = geneX(i) + 30 })
  genesA.forEach(g => {
    if (g === '3' || g === '4') b.line(posA[g], 232, posB[g], 322, { stroke: C.bad, sw: 2.2 })
    else b.line(posA[g], 232, posB[g], 322, { stroke: C.mute, sw: 1.6 })
  })
  b.line(258, 240, 258, 330, { stroke: C.bad, sw: 1.4, dash: '6 5' })
  b.line(412, 240, 412, 330, { stroke: C.bad, sw: 1.4, dash: '6 5' })
  b.text(252, 258, '断点', { size: 11, weight: 700, fill: C.bad, anchor: 'end' })
  b.text(418, 258, '断点', { size: 11, weight: 700, fill: C.bad })
  b.braceH(265, 372, 145, { label: '倒位区段（3–4 次序颠倒）' })
  b.wtext(60, 430, '共线性：染色体区段内基因次序的保守；检测等价于在基因级排布上找最长保守运行，断点即倒位、易位等重排事件的足迹。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 478, '非等位同源重组是重排的主要成因；倒位在减数分裂中形成倒位环，可致配子不平衡，也可能因抑制重组而被选择保留为适应性组合。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、泛基因组 ============
  b.panel(710, 132, 660, 420, { title: '二、泛基因组：核心与可变（大肠杆菌，开放的经典）' })
  b.tag(1040, 192, '大肠杆菌：开放泛基因组的经典', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 10 })
  b.legend(800, 236, [['核心基因（全体共有）', C.dna], ['可变基因（部分个体携带）', C.acc]], { size: 11, gap: 16 })
  const strain = (y: number, name: string, varW: number) => {
    b.text(742, y + 17, name, { size: 11.5, weight: 600, fill: C.sub })
    b.rect(800, y, 216, 24, { fill: C.dna })
    b.rect(1016, y, varW, 24, { fill: C.acc })
  }
  strain(262, '菌株 1', 304)
  strain(296, '菌株 2', 254)
  strain(330, '菌株 3', 334)
  b.etext(1330, 250, '各菌株基因组 4.5–5.5 Mb · 基因数四千余', { size: 11, fill: C.mute })
  b.braceH(800, 360, 216, { label: '核心 ≈ 2000 余 · 约四成', fill: C.dnaD })
  b.arrow(1040, 366, 1040, 384, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.rect(740, 384, 600, 48, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 9 })
  b.ctext(1040, 406, '泛基因组：累计基因上万 · 开放——随新菌株加入持续增长', { size: 13, weight: 700, fill: C.proD })
  b.ctext(1040, 426, '核心：必需功能为主 · 可变：关联适应与毒力', { size: 11, fill: C.sub })
  b.wtext(740, 456, '「泛基因组」一词由 Tettelin 等（2005）对无乳链球菌的多菌株比较研究提出；分开放与封闭两类，图基因组以图结构消解参考偏倚。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(740, 500, '水稻泛基因组揭示大量存在–缺失变异与抗逆基因在可变区的分布；核心与可变以 99% 或 95% 划线并无普适标准，比较研究须统一口径。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、dN/dS ============
  b.panel(30, 576, 1340, 404, { title: '三、dN/dS：选择压力的分子标尺' })
  b.rect(60, 620, 420, 132, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(270, 654, 'ω = dN / dS', { size: 17, weight: 700, fill: C.ink })
  b.wtext(80, 682, 'dN ＝ 非同义替换数 ÷ 非同义可替换位点（dS 对同义类推）', { size: 11, fill: C.sub, maxW: 380, lh: 15 })
  b.wtext(80, 714, '先数可替换位点、再数观察到的替换，各自相除取比值——Nei 与 Gojobori（1986）计数法沿此骨架展开。', { size: 11, fill: C.mute, maxW: 380, lh: 15 })
  b.ctext(930, 650, '选择压力标尺（ω）', { size: 14, weight: 700, fill: C.ink })
  b.rect(520, 672, 395, 44, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(717, 699, '纯化选择 ω < 1（大部分编码区）', { size: 12.5, weight: 700, fill: '#065f46' })
  b.rect(915, 672, 20, 44, { fill: C.panelB, stroke: C.faint, sw: 1.4 })
  b.ctext(925, 699, '≈1', { size: 9.5, weight: 700, fill: C.sub })
  b.rect(935, 672, 395, 44, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1132, 699, '正选择 ω > 1（需位点 / 分支模型检验）', { size: 12.5, weight: 700, fill: C.bad })
  const xw = (w: number) => 520 + w * 405
  for (const [w, lab] of [[0, '0'], [0.5, '0.5'], [1, '1'], [1.5, '1.5'], [2, '2']] as Array<[number, string]>) {
    b.line(xw(w), 716, xw(w), 724, { stroke: C.sub, sw: 1.8 })
    b.ctext(xw(w), 742, lab, { size: 12, fill: C.mute })
  }
  b.line(560, 636, 560, 716, { stroke: C.bad, sw: 1.6, dash: '6 5' })
  b.ctext(640, 630, '全基因组平均 ω ≈ 0.1', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(60, 792, 'ω 明显低于 1 → 纯化选择（有害突变被清除）；接近 1 → 中性演化；高于 1 → 提示正选择——正选择常作用于个别位点或分支，须以位点 / 分支模型检验局部 ω。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(720, 792, '分析前置：先做密码子比对、甄别直向同源、警惕 dS 饱和对比值的干扰。全基因组平均约 0.1 的强纯化背景，使局部 ω > 1 的信号更醒目也更须求证。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })
  b.ctext(700, 930, 'dN/dS 是比值也是平均量：位点间的异质性会被均值掩盖——这正是位点 / 分支模型存在的理由。', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '比较基因组与泛基因组：共线性断点、核心–可变两桶与 dN/dS 标尺',
  subtitle: '共线性指基因次序的保守，断点即倒位、易位等重排事件，非等位同源重组为主要成因；大肠杆菌各菌株基因四千余而核心仅约两千余（约四成），泛基因组上万且持续增长（开放）；dN/dS 明显低于 1 为纯化选择、接近 1 为中性、高于 1 提示正选择，全基因组平均约 0.1——分析须密码子比对、甄别直向同源并警惕 dS 饱和',
  draw,
})
