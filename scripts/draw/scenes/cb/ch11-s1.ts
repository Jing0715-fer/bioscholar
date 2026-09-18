// cb ch11-s1 细胞分化的本质：基因的差异表达（39-d 批C 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、管家基因 vs 奢侈基因 ============
  b.panel(30, 132, 660, 430, { title: '一、管家基因持续表达，奢侈基因选择性开启' })
  // 表达矩阵示意：3 种细胞 × 5 个基因
  b.text(64, 186, '基因表达谱（深＝高表达）', { size: 10.5, weight: 700, fill: C.sub })
  const genes = ['糖酵解酶', '核糖体蛋白', '白蛋白', '血红蛋白', '胰岛素']
  const cells = ['肝细胞', '红细胞', 'β 细胞']
  const lv = [
    [2, 2, 2, 0, 0],
    [2, 2, 0, 2, 0],
    [2, 2, 0, 0, 2],
  ]
  genes.forEach((g, i) => b.ctext(130 + i * 96, 214, g, { size: 9, fill: C.mute }))
  cells.forEach((c, r) => {
    b.ctext(56, 246 + r * 52, c, { size: 10, weight: 700, fill: C.ink })
    lv[r].forEach((v, i) => {
      b.rect(96 + i * 96, 226 + r * 52, 68, 34, {
        fill: v === 2 ? C.dna : v === 0 ? C.panelB : C.warnL,
        fillOp: v === 2 ? 0.75 : 1, stroke: v === 2 ? C.dna : C.faint, sw: 1.6, rx: 6,
      })
      b.ctext(130 + i * 96, 248 + r * 52, v === 2 ? '高' : '—', { size: 10, weight: 700, fill: v === 2 ? C.dnaD : C.faint })
    })
  })
  b.tag(190, 428, '管家基因：各类细胞均表达（维持基本生命活动）', { fill: C.dnaL, stroke: C.dna, size: 9.5, tfill: C.dnaD, pad: 5 })
  b.tag(520, 428, '奢侈基因：组织特异性高表达', { fill: C.warnL, stroke: C.warn, size: 9.5, tfill: '#78350f', pad: 5 })
  b.wtext(64, 470, '分化＝奢侈基因的选择性表达：产物赋予细胞特化表型（血红蛋白、胰岛素、白蛋白）；分化是基因表达调控的结果而非基因丢失——基因组 DNA 含量保持不变。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })
  b.wtext(64, 518, '少数例外：B 淋巴细胞免疫球蛋白基因重排、tRNA / 抗体基因的体细胞突变。', { size: 9.5, fill: C.mute, maxW: 600, lh: 13 })

  // ============ 二、核移植：分化可逆性的证明 ============
  b.panel(710, 132, 660, 430, { title: '二、Gurdon 爪蟾核移植（1962）：终末分化细胞核仍全能' })
  // 供体细胞
  b.cell(800, 250, 56, 34, {})
  b.nucleusU(800, 250, 14)
  b.ctext(800, 306, '肠上皮细胞', { size: 9.5, fill: C.mute })
  b.ctext(800, 322, '（终末分化）', { size: 9, fill: C.mute })
  // 取核箭头
  b.arrow(856, 250, 950, 250, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.tag(900, 224, '取核', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 4 })
  // 去核卵母细胞
  b.cell(1060, 250, 64, 44, {})
  b.ctext(1060, 208, '去核卵母细胞', { size: 9.5, weight: 700, fill: C.sub })
  b.arrow(950, 250, 1010, 250, { stroke: C.pro, sw: 2.4, marker: 'pro' })
  b.nucleusU(1060, 250, 13)
  b.ctext(1060, 312, '核移植入卵质', { size: 9.5, fill: C.mute })
  // 发育
  b.arrow(1130, 250, 1220, 250, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.circle(1252, 250, 20, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(1252, 254, '胚胎', { size: 9, weight: 700, fill: C.ok })
  b.arrow(1252, 272, 1252, 314, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.ctext(1252, 340, '正常克隆蛙', { size: 10, weight: 700, fill: C.ok })
  b.wtext(740, 396, '首次证明终末分化细胞的细胞核仍保有全套发育潜能（核的全能性）——分化的可逆性由此确立，开启核移植研究。', { size: 10, fill: C.sub, maxW: 560, lh: 14 })
  b.tag(860, 452, 'Gurdon 与山中伸弥共享 2012 年诺贝尔生理学或医学奖', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 6 })
  b.wtext(740, 500, '非洲爪蟾肠上皮细胞核 → 去核卵母细胞 → 培育出正常克隆蛙。', { size: 9.5, fill: C.mute, maxW: 560, lh: 13 })

  // ============ 三、主导转录因子与表观遗传记忆 ============
  b.panel(30, 576, 1340, 404, { title: '三、主导转录因子的组合调控与表观遗传记忆' })
  // 左：MyoD 转化
  b.text(64, 618, '主导转录因子（master TF）', { size: 11.5, weight: 700, fill: C.ink })
  b.cell(140, 672, 52, 28, {})
  b.ctext(140, 716, '成纤维细胞', { size: 9, fill: C.mute })
  b.tag(230, 672, 'MyoD', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 6 })
  b.arrow(196, 672, 208, 672, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.arrow(262, 672, 320, 672, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.rect(322, 646, 96, 52, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 10 })
  b.ctext(370, 668, '肌细胞', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(370, 686, '（单独即足以转化）', { size: 8.5, fill: C.proD })
  b.tag(230, 730, 'Pax6', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 6 })
  b.ctext(230, 758, '决定眼的发育', { size: 9, fill: C.mute })
  b.wtext(64, 806, '组合调控：少数转录因子经组合排列调控数以千计的靶基因。', { size: 10, weight: 600, fill: C.sub, maxW: 380, lh: 14 })
  // 中：组合调控示意
  b.text(490, 618, '组合编码', { size: 11.5, weight: 700, fill: C.ink })
  const tfs = ['A', 'B', 'C', 'D']
  tfs.forEach((t, i) => {
    b.circle(530 + i * 40, 660, 12, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.ctext(530 + i * 40, 664, t, { size: 9, weight: 700, fill: C.proD })
  })
  const combos: Array<[number[], string]> = [
    [[0, 1], '肝细胞'],
    [[1, 2], '肌细胞'],
    [[2, 3], '神经元'],
    [[0, 2, 3], '胰腺 β 细胞'],
  ]
  combos.forEach((cb, i) => {
    const x = 470 + i * 110
    cb[0].forEach(j => b.arrow(530 + j * 40, 672, x + 30, 700, { stroke: C.mute, sw: 1.2 }))
    b.rect(x, 702, 66, 30, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
    b.ctext(x + 33, 721, cb[1], { size: 8.5, weight: 700, fill: C.accD })
  })
  b.wtext(470, 762, '同一套因子以不同组合开启不同基因程序。', { size: 9.5, fill: C.mute, maxW: 380, lh: 13 })
  // 右：表观遗传
  b.text(920, 618, '表观遗传：既执行程序又维持记忆', { size: 11.5, weight: 700, fill: C.ink })
  const epi: Array<[string, string]> = [
    ['DNA 甲基化', 'CpG 位点甲基化关闭基因'],
    ['组蛋白修饰', '乙酰化开放 / 甲基化压缩'],
    ['Polycomb·H3K27me3', '谱系基因的沉默标记'],
    ['染色质重塑', '核小体定位改变可及性'],
  ]
  epi.forEach((e, i) => {
    const y = 648 + i * 40
    b.tag(1010, y, e[0], { fill: C.dnaL, stroke: C.dna, size: 9.5, weight: 700, tfill: C.dnaD, pad: 5 })
    b.text(1140, y + 4, e[1], { size: 9.5, fill: C.sub })
  })
  b.wtext(920, 826, '分裂后将谱系特异的染色质状态传递给子细胞（细胞记忆）；肿瘤细胞分化状态丧失（去分化 / 发育不良）成为病理诊断依据。', { size: 10, fill: C.sub, maxW: 420, lh: 14 })
  b.wtext(64, 858, '两百余种细胞类型共享同一基因组——差异表达 + 表观遗传记忆的组合，构成分化的分子基础。', { size: 10, fill: C.mute, maxW: 600, lh: 14 })
}

export default scene({
  title: '细胞分化的本质：基因的差异表达与可逆性',
  subtitle: '管家基因持续表达、奢侈基因按类型开启（基因组不变）；Gurdon 1962 核移植证明分化可逆（2012 诺奖）；MyoD/Pax6 组合调控，表观遗传维持细胞记忆',
  draw,
})
