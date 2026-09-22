// sb ch12-s3 计算结构生物学与 AlphaFold（Task SB-4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、AF2 三要素管线 ============
  b.panel(30, 132, 1340, 268, { title: '一、AlphaFold2 概念：共进化、双轨注意力与端到端' })
  // 序列
  b.rect(60, 175, 130, 90, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(125, 200, '氨基酸序列', { size: 12.5, weight: 700, fill: C.ink })
  for (let i = 0; i < 8; i++) b.circle(78 + i * 14, 225, 4.5, { fill: i % 3 === 0 ? C.dna : i % 3 === 1 ? C.pro : C.warn })
  b.ctext(125, 252, '查询一次', { size: 9.5, fill: C.mute })
  b.arrow(194, 220, 232, 220, { stroke: C.sub, sw: 2, marker: 'ink' })
  // MSA
  b.rect(240, 175, 230, 90, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 8, fillOp: 0.4 })
  b.ctext(355, 194, 'MSA：共进化先验', { size: 12, weight: 700, fill: C.dnaD })
  const cellCols = [C.dna, C.pro, C.rna, C.acc, C.warn]
  for (let r = 0; r < 4; r++) for (let c = 0; c < 15; c++) {
    b.rect(252 + c * 14.4, 204 + r * 13.5, 12, 11, { fill: cellCols[(r * 7 + c * 3) % 5], fillOp: 0.75, rx: 2, stroke: 'none' })
  }
  b.ctext(355, 258, '相互接触的残基对协同涨落', { size: 9, fill: C.mute })
  b.arrow(474, 220, 502, 220, { stroke: C.sub, sw: 2, marker: 'ink' })
  // Evoformer
  b.rect(510, 175, 300, 90, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 8, fillOp: 0.5 })
  b.ctext(660, 194, 'Evoformer 双轨注意力（数十层）', { size: 12, weight: 700, fill: C.accD })
  b.rect(528, 204, 264, 18, { fill: '#ffffff', stroke: C.acc, sw: 1.2, rx: 4 })
  b.ctext(660, 216.5, 'MSA 表征（行是序列）', { size: 9.5, weight: 600, fill: C.sub })
  b.rect(528, 236, 264, 18, { fill: '#ffffff', stroke: C.acc, sw: 1.2, rx: 4 })
  b.ctext(660, 248.5, '残基对表征（格是残基关系）', { size: 9.5, weight: 600, fill: C.sub })
  b.path('M560,222 Q540,229 560,236', { fill: 'none', stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.path('M760,236 Q780,229 760,222', { fill: 'none', stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(814, 220, 842, 220, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 结构模块
  b.rect(850, 175, 200, 90, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 8, fillOp: 0.5 })
  b.ctext(950, 200, '结构模块', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(864, 222, '不变点注意力直接输出三维坐标，不经「预测距离再折叠」', { size: 9.5, fill: C.sub, maxW: 172, lh: 13 })
  b.arrow(1054, 220, 1082, 220, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 结构输出
  b.rect(1100, 175, 220, 90, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 8, fillOp: 0.45 })
  b.rect(1120, 205, 60, 16, { fill: C.pro, fillOp: 0.7, rx: 8 })
  b.rect(1240, 205, 60, 16, { fill: C.pro, fillOp: 0.7, rx: 8 })
  b.path('M1180,213 C1200,190 1220,236 1240,213', { fill: 'none', stroke: C.pro, sw: 2 })
  b.ctext(1210, 252, '端到端三维结构', { size: 10.5, weight: 700, fill: C.okD })
  // 回收箭头
  b.path('M950,265 Q730,320 660,265', { fill: 'none', stroke: C.enz, sw: 2, dash: '6 4', marker: 'enz' })
  b.ctext(805, 308, '三轮回收：以坐标回头修正表征', { size: 10.5, weight: 700, fill: C.enz })
  b.wtext(50, 356, 'MSA 深度是准确度的第一变量：序列近亲众多（深 MSA）则置信度高，孤儿序列浅 MSA 时 AF2 会诚实给低分——置信度体系由此不可或缺。', { size: 10.5, fill: C.sub, maxW: 640, lh: 15 })
  b.wtext(720, 356, '训练于 PDB 约十七万条实验结构——半个世纪的实验积累变成一次可复用的先验；注意力机制的额外红利是从浅 MSA 中榨取共进化信号。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、pLDDT ============
  b.panel(30, 420, 660, 262, { title: '二、pLDDT：残基级置信度（0–100）' })
  b.wtext(50, 462, '预测局部距离差异检验——AlphaFold DB 直接把它画成模型着色；低分同时是「构象不定」与「本就无折叠」的双重指示。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  const segs: Array<[number, number, string, string, string]> = [
    [0, 50, C.bad, '小于 50', '常为内在无序区'],
    [50, 70, C.warn, '50–70', '低置信'],
    [70, 90, C.acc, '70–90', '主链可靠、侧链存疑'],
    [90, 100, C.ok, '大于 90', '主链侧链皆可靠'],
  ]
  for (const [lo, hi, c, lab, sub] of segs) {
    const x = 60 + (lo / 100) * 580, w = ((hi - lo) / 100) * 580
    b.rect(x, 492, w - 2, 26, { fill: c, fillOp: 0.8, stroke: c, sw: 1.2, rx: 4 })
    b.ctext(x + w / 2, 509, lab, { size: 10.5, weight: 700, fill: '#ffffff' })
    b.wtext(x + 2, 534, sub, { size: 9.5, fill: C.sub, maxW: w - 6, lh: 12.5 })
  }
  // 模型着色示意（折线按置信度分色）
  b.ctext(50, 588, '模型着色示意', { size: 10, weight: 700, fill: C.mute })
  const zig: Array<[number, number]> = []
  for (let i = 0; i <= 26; i++) zig.push([90 + i * 20, 585 + (i % 2 === 0 ? -18 : 18)])
  const chunks: Array<[number, number, string]> = [[0, 7, C.ok], [7, 12, C.acc], [12, 17, C.warn], [17, 27, C.bad]]
  for (const [s1, s2, c] of chunks) {
    b.polyline(zig.slice(s1, s2 + 1), { stroke: c, sw: 4 })
  }
  b.wtext(50, 632, '大于 90：直接作分子置换搜索模型；70–90：可作 MR 起点、侧链重搭。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 658, '50–70：局部重排或删截后再用；小于 50：按无序区处理，勿硬建模。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、PAE 热图 ============
  b.panel(710, 420, 660, 262, { title: '三、PAE 热图：残基对级的排布误差' })
  const g0x = 770, g0y = 486, cs = 24
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
    const inA = i < 4, inB = j < 4
    const same = inA === inB
    b.rect(g0x + j * cs, g0y + i * cs, cs - 1.5, cs - 1.5, {
      fill: same ? C.accD : C.warnL, stroke: C.line, sw: 0.8, fillOp: same ? 0.9 : 0.95,
    })
  }
  b.ctext(g0x + 2 * cs, g0y - 8, '残基 i', { size: 10, weight: 600, fill: C.mute })
  b.ctext(g0x - 34, g0y + 4 * cs, '残基 j', { size: 10, weight: 600, fill: C.mute, rotate: -90 })
  b.braceV(g0x - 10, g0y + 6, 4 * cs - 12, { label: '域 A', left: true, fill: C.accD })
  b.braceV(g0x - 10, g0y + 4 * cs + 6, 4 * cs - 12, { label: '域 B', left: true, fill: C.pro })
  // 色标
  for (let k = 0; k < 6; k++) {
    b.rect(990, 486 + k * 29, 16, 29, { fill: k < 3 ? C.accD : C.warnL, fillOp: 0.9 - k * 0.05, stroke: C.line, sw: 0.7 })
  }
  b.ctext(998, 478, '误差', { size: 9.5, weight: 700, fill: C.mute })
  b.ctext(1014, 496, '低', { size: 9.5, fill: C.sub })
  b.ctext(1014, 652, '高', { size: 9.5, fill: C.sub })
  b.wtext(1050, 492, '残基 i 对齐后残基 j 的位置不确定度（埃计）。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(1050, 528, '主对角块（域内）低而域间高——两个域各自准、相对取向不定：分域可用、整体拼接存疑。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(1050, 582, '多链界面同理：界面 PAE 高的复合物预测不可轻信（抗体-抗原尤甚）。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(1050, 626, '读结构先读两幅图：pLDDT 定残基级可用性，PAE 定拼装级可信度。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })

  // ============ 四、格局之变 ============
  b.panel(30, 702, 1340, 200, { title: '四、格局之变：CASP14 的成绩、预测生态与实验边界' })
  // CASP 对比柱
  b.ctext(130, 744, '自由建模目标中位 GDT_TS', { size: 10.5, weight: 700, fill: C.ink })
  b.line(70, 862, 210, 862, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(70, 862, 70, 748, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  for (const v of [0, 50, 100]) {
    const y = 862 - (v / 100) * 110
    b.line(70, y, 64, y, { stroke: C.sub, sw: 1.3 })
    b.ctext(58, y + 4, String(v), { size: 9, fill: C.mute })
  }
  b.rect(90, 862 - 60 * 1.1, 48, 60 * 1.1, { fill: C.faint, stroke: C.mute, sw: 1.4, rx: 4 })
  b.ctext(114, 862 - 60 * 1.1 - 10, '约 60', { size: 10, weight: 700, fill: C.mute })
  b.ctext(114, 880, 'CASP13', { size: 9.5, fill: C.mute })
  b.rect(152, 862 - 92.4 * 1.1, 48, 92.4 * 1.1, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(176, 862 - 92.4 * 1.1 - 10, '约 92.4', { size: 10, weight: 700, fill: C.accD })
  b.ctext(176, 880, 'CASP14 AF2', { size: 9.5, fill: C.sub })
  // 生态条目
  const eco: Array<[string, string]> = [
    ['AlphaFold DB', '2021 年开放，2022 年 7 月扩容至约 2 亿条——覆盖 UniProt 几乎全部编目蛋白'],
    ['AF-Multimer', '同源多聚体最好；异源复合物约三分之二可达可接受界面精度'],
    ['AlphaFold 3', '2024 年把配体、核酸与修饰纳入联合预测'],
    ['ESMFold', '免 MSA、快约 60 倍；宏基因组图谱放出约 6.17 亿条结构'],
  ]
  eco.forEach(([t, s], i) => {
    const y = 754 + i * 32
    b.tag(300, y, t, { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
    b.wtext(415, y - 10, s, { size: 10, fill: C.sub, maxW: 420, lh: 13 })
  })
  // 边界
  b.rect(880, 736, 470, 150, { fill: C.rnaL, stroke: C.rna, sw: 1.4, rx: 9, fillOp: 0.4 })
  b.text(898, 760, '边界：这些仍须实验', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(898, 782, '点突变 ΔΔG 预测仍不稳；构象态常被平均化为单一状态——开关态与变构态交给三维分类与 CPMG；配体与金属结合态、糖型须实验定夺；内在无序区以系综存在，SAXS 与 NMR 联手描述。', { size: 10, fill: C.sub, maxW: 434, lh: 14 })
  b.ctext(1115, 872, '「计算覆盖折叠，实验负责构象与机制」', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(700, 934, '预测模型已超过实验同源结构成为分子置换搜索模型的第一来源——「先预测后实验」成为默认次序', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '计算结构生物学与 AlphaFold：从共进化到置信度体系',
  subtitle: 'CASP14 中位 GDT_TS 约 92.4；AFDB 约 2 亿条；pLDDT 大于 90、小于 50 常为无序区；PAE 读域间与界面误差；ESMFold 快约 60 倍',
  draw,
})
