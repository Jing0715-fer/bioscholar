// mi ch11-s1 分类单元与微生物命名（39-f 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、七级分类阶梯 ============
  b.panel(30, 132, 660, 320, { title: '一、七级分类阶梯：以大肠埃希氏菌的归属为例' })

  const tiers: Array<[string, string, string]> = [
    ['界', '细菌界（另立古菌界等体系）', C.acc],
    ['门', '变形菌门', C.dna],
    ['纲', 'γ-变形菌纲', C.dna],
    ['目', '肠杆菌目', C.enz],
    ['科', '肠杆菌科', C.enz],
    ['属', '埃希氏菌属', C.pro],
    ['种', '大肠埃希氏菌（大肠杆菌）', C.bad],
  ]
  tiers.forEach(([t, s, c], i) => {
    const y = 192 + i * 36
    const w = 120 + i * 14
    b.rect(70, y, w, 30, { fill: C.panelB, stroke: c, sw: 1.5, rx: 6 })
    b.ctext(70 + w / 2, y + 19, t, { size: 13, weight: 700, fill: c })
    b.text(70 + w + 16, y + 19, s, { size: 11.5, fill: C.sub })
  })
  b.arrow(660, 200, 660, 424, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.ctext(676, 310, '自上而下范围递缩', { size: 10, fill: C.mute })

  // ============ 二、微生物「种」的操作定义 ============
  b.panel(710, 132, 660, 320, { title: '二、原核生物无生殖隔离——「种」只能操作定义' })

  b.rect(730, 190, 620, 120, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(750, 216, '现行标准（种的操作定义）', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(750, 242, '两菌株 DNA-DNA 杂交同源性 ≥70%，且基因组解链温度差 ΔTm ≤5 ℃——同时满足方归同种。', { size: 11.5, fill: C.sub, maxW: 580, lh: 17 })
  b.rect(730, 324, 620, 86, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(750, 348, '快速筛查线索', { size: 13, weight: 700, fill: C.accD })
  b.wtext(750, 372, '16S rRNA 基因序列相似性 ≥97% 作线索；低于 97% 一般提示不同种。', { size: 11.5, fill: C.sub, maxW: 580, lh: 17 })
  b.wtext(730, 428, '真核生物以生殖隔离定种，原核生物横向基因转移频繁——两套口径截然不同。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、双名法 ============
  b.panel(30, 464, 660, 240, { title: '三、双名法：学名 = 属名 + 种加词' })

  b.tag(240, 538, 'Escherichia', { fill: C.proL, stroke: C.pro, size: 15, weight: 700, tfill: C.proD, pad: 12 })
  b.tag(430, 538, 'coli', { fill: C.enzL, stroke: C.enz, size: 15, weight: 700, tfill: C.enzD, pad: 12 })
  b.wtext(100, 580, '属名（名词，首字母大写）', { size: 10.5, fill: C.proD, maxW: 180, lh: 14 })
  b.ctext(300, 580, '种加词（形容词，一律小写）', { size: 10.5, fill: C.enzD })
  b.ctext(335, 538, '斜体书写', { size: 10, fill: C.mute })
  b.ctext(335, 520, '（Migula, 1895）', { size: 11, fill: C.sub })
  b.ctext(335, 502, '定名人与年份', { size: 9.5, fill: C.mute })
  b.wtext(60, 622, '再次出现可缩写为 E. coli；中文惯称「大肠杆菌」。种加词常编码形态、栖息地等信息（如 Staphylococcus aureus 的 aureus 即「金黄色」）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、种以下单元与菌株 ============
  b.panel(710, 464, 660, 240, { title: '四、种以下的单元与「菌株」' })

  const subs: Array<[number, string]> = [
    [770, '亚种（subsp.）'],
    [910, '血清型'],
    [1040, '噬菌体型'],
    [1190, '生物型'],
  ]
  subs.forEach(([cx, t]) => b.tag(cx, 522, t, { fill: C.panelB, stroke: C.sub, size: 11.5, weight: 700, tfill: C.ink, pad: 8 }))
  b.wtext(730, 560, '血清型按表面抗原细分——O157:H7 即大肠杆菌的血清型编号。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 590, '菌株是种内的个体：同种不同菌株的毒力与性状可迥异（实验室 K-12 与出血性 O157:H7 同种而天壤之别）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 640, '模式菌株：新种名称的物质凭证，保藏于 ATCC、DSMZ、CGMCC 等公共菌种库。', { size: 11, weight: 700, fill: C.ink })

  // ============ 五、优先律与学名变更 ============
  b.panel(30, 716, 1340, 264, { title: '五、命名优先律与学名变更：分类是假说，修订是常态' })

  b.rect(50, 752, 400, 96, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(70, 776, '命名优先律', { size: 13, weight: 700, fill: C.ink })
  b.wtext(70, 800, '最早合格发表的名称拥有优先权；1999 年生效的法规修订统一裁定新名称的生效起点，保证检索一致。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })

  // 乳杆菌拆分图
  b.tag(620, 790, 'Lactobacillus（旧乳杆菌属）', { fill: C.rnaL, stroke: C.rna, size: 12, weight: 700, tfill: C.rnaD, pad: 9 })
  b.arrow(620, 812, 620, 846, { stroke: C.rna, sw: 2.6, marker: 'rna' })
  b.ctext(660, 830, '2020 年拆分', { size: 10, weight: 700, fill: C.rnaD })
  const newG: Array<[number, string]> = [[480, '德氏乳杆菌（保留原属名）'], [660, '嗜酸乳杆菌 → 新属'], [840, '鼠李糖乳杆菌 → 新属'], [1020, '…… 共 25 个属']]
  newG.forEach(([x, t], i) => {
    b.rect(x - 70, 856, 140, 30, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.3, rx: 6 })
    b.ctext(x, 875, t, { size: 9, fill: C.dnaD, weight: 700 })
  })
  b.wtext(1090, 878, '基于基因组系统发育分析的规模空前重组', { size: 10, fill: C.mute, maxW: 260, lh: 14 })
  b.wtext(50, 920, '分类修订引起属名更换是常态——每一次更名都是「分类假说」被基因组证据刷新的记录，而非科学的反复无常。', { size: 11, weight: 700, fill: C.ink })
  b.wtext(50, 950, '判读要点：学名的稳定性服务于交流，而分类的更新服务于真相。', { size: 10.5, fill: C.mute, maxW: 1280, lh: 15 })
}

export default scene({
  title: '分类单元与微生物命名：七级阶梯、双名法与种的操作定义',
  subtitle: '七级阶梯界门纲目科属种；种的操作定义：DNA-DNA 杂交 ≥70% 且 ΔTm ≤5 ℃（16S ≥97% 为线索）；双名法 = 大写属名 + 小写种加词斜体；2020 年乳杆菌属拆 25 属',
  draw,
})
