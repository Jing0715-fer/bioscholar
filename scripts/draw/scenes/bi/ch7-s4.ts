// bi ch7-s4 结构域家族与功能注释（39-i 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、SCOP 与 CATH 层级 ============
  b.panel(30, 132, 1340, 280, { title: '一、SCOP 与 CATH：结构域分类的两大层级体系' })
  b.ctext(250, 184, 'SCOP（1995 · Murzin、Brenner、Hubbard、Chothia · 半人工）', { size: 12, weight: 700, fill: C.proD })
  b.ctext(600, 184, 'CATH（1997 · Orengo 等 · 自动化流程，名字即层级）', { size: 12, weight: 700, fill: C.accD })
  const ladder = (cx: number, levels: string[], fill: string, stroke: string, tfill: string, mk: 'pro' | 'acc') => {
    levels.forEach((s, i) => {
      const y = 198 + i * 52
      b.rect(cx - 150, y, 300, 40, { fill, stroke, sw: 1.8, rx: 7 })
      b.ctext(cx, y + 25, s, { size: 13.5, weight: 700, fill: tfill })
      if (i < levels.length - 1) b.arrow(cx, y + 40, cx, y + 52, { stroke, sw: 1.6, marker: mk })
    })
  }
  ladder(250, ['类 Class', '折叠 Fold', '超家族 Superfamily', '家族 Family'], C.proL, C.pro, C.proD, 'pro')
  ladder(600, ['类 Class', '架构 Architecture', '拓扑 Topology', '同源超家族 Homologous superfamily'], C.accL, C.acc, C.accD, 'acc')
  b.tag(1075, 200, '常见折叠集中于约千余种', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 10 })
  b.text(830, 248, '超级折叠：横跨大量无关家族', { size: 13, weight: 700, fill: C.ink })
  b.tag(957, 278, '免疫球蛋白样折叠', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 600, tfill: C.proD, pad: 10 })
  b.tag(1148, 278, 'Rossmann 折叠', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 600, tfill: C.enzD, pad: 10 })
  b.tag(1294, 278, 'TIM 桶', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 600, tfill: C.dnaD, pad: 10 })
  b.wtext(830, 320, '结构域洗牌：多结构域蛋白通过结构域的重组与重排获得新组合——是演化的重要机制。', { size: 11.5, fill: C.sub, maxW: 500, lh: 16 })
  b.wtext(830, 356, '两大体系互补：SCOP 半人工精细，CATH 全自动化、可规模化扩展。', { size: 11.5, fill: C.sub, maxW: 500, lh: 16 })

  // ============ 二、Pfam 与 InterPro；EC ============
  b.panel(30, 424, 660, 556, { title: '二、Pfam 与 InterPro：家族的序列视角；EC 编号' })
  const flowBox = (y: number, s: string) => {
    b.rect(60, y, 380, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
    b.ctext(250, y + 25, s, { size: 13, weight: 700, fill: C.dnaD })
  }
  flowBox(474, '查询序列（蛋白序列或经翻译的 CDS）')
  b.arrow(250, 514, 250, 540, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  flowBox(540, 'Pfam：概型隐马尔可夫模型（profile HMM）')
  b.arrow(250, 580, 250, 606, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  flowBox(606, 'InterPro：整合十余个成员签名库')
  b.arrow(250, 646, 250, 672, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  flowBox(672, 'InterProScan：一次运行，全家桶注释')
  b.wtext(460, 542, '概型比两两比对更灵敏——可检出仅共享少量保守残基的远缘家族成员。', { size: 11, fill: C.sub, maxW: 210, lh: 15 })
  b.text(460, 620, '签名库（部分）', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(505, 652, 'Pfam', { fill: C.panelB, stroke: C.line, size: 11, weight: 600, tfill: C.sub, pad: 8 })
  b.tag(625, 652, 'TIGRFAMs', { fill: C.panelB, stroke: C.line, size: 11, weight: 600, tfill: C.sub, pad: 8 })
  b.tag(505, 682, 'SMART', { fill: C.panelB, stroke: C.line, size: 11, weight: 600, tfill: C.sub, pad: 8 })
  b.tag(625, 682, 'SUPERFAMILY', { fill: C.panelB, stroke: C.line, size: 11, weight: 600, tfill: C.sub, pad: 8 })
  b.tag(505, 712, 'PROSITE', { fill: C.panelB, stroke: C.line, size: 11, weight: 600, tfill: C.sub, pad: 8 })
  b.tag(625, 712, 'CDD', { fill: C.panelB, stroke: C.line, size: 11, weight: 600, tfill: C.sub, pad: 8 })
  b.text(60, 762, 'EC 编号：按酶促反应的层次分类（六大类）', { size: 13.5, weight: 700, fill: C.ink })
  const ecRow = (y: number, items: Array<[string, string]>) => {
    items.forEach(([s, c], i) => {
      b.tag(150 + i * 200, y, s, { fill: C.rnaL, stroke: c, size: 12, weight: 700, tfill: C.rnaD, pad: 10 })
    })
  }
  ecRow(800, [['1 氧化还原酶', C.rna], ['2 转移酶', C.rna], ['3 水解酶', C.rna]])
  ecRow(838, [['4 裂合酶', C.rna], ['5 异构酶', C.rna], ['6 连接酶', C.rna]])
  b.wtext(60, 878, 'EC 刻画反应而非同源——同一 EC 编号可对应不同家族的酶；BRENDA、KEGG 与 Rhea 各有侧重。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(60, 918, '家族注释是功能推断的第一步：先定家族，再谈功能。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16 })

  // ============ 三、GO 与置信度衰减 ============
  b.panel(710, 424, 660, 556, { title: '三、GO 三分支、真路径规则与注释转移的置信度衰减' })
  b.text(740, 470, 'Gene Ontology：受控词表 · 有向无环图', { size: 13.5, weight: 700, fill: C.ink })
  const branch = (cx: number, s: string, stroke: string, fill: string) => {
    b.rect(cx - 85, 490, 170, 32, { fill, stroke, sw: 1.8, rx: 7 })
    b.ctext(cx, 511, s, { size: 12.5, weight: 700, fill: C.ink })
  }
  branch(805, '分子功能 MF', C.pro, C.proL)
  branch(1040, '生物过程 BP', C.rna, C.rnaL)
  branch(1275, '细胞组分 CC', C.acc, C.accL)
  const node = (cx: number, y: number, s: string) => {
    b.rect(cx - 75, y, 150, 30, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 6 })
    b.ctext(cx, y + 20, s, { size: 11.5, fill: C.sub })
  }
  node(805, 566, '子术语')
  node(950, 566, '子术语')
  node(1130, 566, '子术语')
  node(1275, 566, '子术语')
  node(1040, 634, '孙术语')
  b.arrow(805, 566, 805, 524, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.arrow(950, 566, 1005, 524, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(1130, 566, 1075, 524, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(1275, 566, 1275, 524, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(1065, 634, 1120, 598, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.path('M 962,649 C 900,650 892,570 958,526', { stroke: C.mute, sw: 1.6, dash: '6 5', marker: 'mute' })
  b.text(740, 672, '真路径规则：注释沿边向上传播到所有祖先', { size: 11.5, weight: 700, fill: C.mute })
  b.wtext(740, 696, '三分支各答一问：干什么（MF）、参与何过程（BP）、位于何处（CC）。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(740, 720, '顶层术语必然富集、信息量在中层；GO slim 供全景报告。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.text(740, 762, '注释链路：每一步都有置信度衰减', { size: 13.5, weight: 700, fill: C.ink })
  b.rect(740, 780, 400, 44, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(940, 807, '① 域家族命中（SCOP / CATH / Pfam）— 高置信', { size: 12, weight: 700, fill: C.proD })
  b.rect(820, 836, 400, 44, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(1020, 863, '② 功能沿家族转移 — 置信衰减', { size: 12, weight: 600, fill: C.proD })
  b.rect(900, 892, 400, 44, { fill: C.proL, fillOp: 0.32, stroke: C.pro, sw: 1.4, rx: 8 })
  b.ctext(1100, 919, '③ 具体基因的功能注释 — 宁窄勿宽', { size: 12, weight: 500, fill: C.proD })
  b.arrow(1030, 824, 1030, 836, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.arrow(1030, 880, 1030, 892, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.wtext(740, 958, '同源 ≠ 同功能——注释转移宁窄勿宽；证据代码 IEA（电子注释）可靠性较低。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '结构域家族与功能注释：两大分类层级、签名库整合与 GO 受控词表',
  subtitle: 'SCOP（1995）与 CATH（1997）以四层级编目结构域，常见折叠集中于约千余种；Pfam 概型 HMM 检出远缘成员，InterPro 整合十余个签名库、InterProScan 一次运行全家桶注释；GO 三分支以真路径规则相连，IEA 电子注释可靠性较低，注释链路每一步都有置信度衰减——同源不等于同功能，转移宁窄勿宽',
  draw,
})
