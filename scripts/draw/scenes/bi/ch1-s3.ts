// bi ch1-s3 核心数据库概览（39-i 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三层分类 ============
  b.panel(30, 132, 1340, 500, { title: '一、数据库的分层分类：档案库 → 策展库 → 知识库' })

  // —— 左：一级档案库 INSDC ——
  b.zone(60, 190, 360, 410, { label: '一级 · 档案库（INSDC）', sub: '忠实保存原始提交，不裁决对错', fill: C.dnaL, lfill: C.dnaD })
  const arc: Array<[string, string]> = [
    ['GenBank', '1982 年建立 · 1992 年起由 NCBI 维护（美）'],
    ['EMBL-Bank', '欧洲生物信息学研究所 EBI（欧）'],
    ['DDBJ', '日本 DNA 数据库（日）'],
  ]
  arc.forEach(([t, s], i) => {
    const y = 268 + i * 76
    b.rect(84, y, 312, 64, { fill: '#ffffff', stroke: C.dna, sw: 1.5, rx: 8 })
    b.text(100, y + 26, t, { size: 14.5, weight: 700, fill: C.dnaD })
    b.wtext(100, y + 48, s, { size: 11, fill: C.sub, maxW: 284, lh: 14 })
  })
  b.rect(84, 502, 312, 82, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(98, 524, '三库每日交换 · 登录号互认 · 一次提交全球可得——1990 年代国际协作的典范，避免重复与分叉。', { size: 11, fill: C.sub, maxW: 288, lh: 15 })

  // —— 中：二级策展库 ——
  b.zone(470, 190, 360, 410, { label: '二级 · 策展与衍生库', sub: '质量控制的责任所在', fill: C.accL, lfill: C.accD })
  b.rect(494, 268, 312, 64, { fill: '#ffffff', stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(510, 294, 'RefSeq', { size: 14.5, weight: 700, fill: C.accD })
  b.wtext(510, 316, '以策展为每个基因提供唯一代表序列', { size: 11, fill: C.sub, maxW: 284, lh: 14 })
  b.rect(494, 344, 312, 88, { fill: '#ffffff', stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(510, 370, 'UniProtKB', { size: 14.5, weight: 700, fill: C.accD })
  b.wtext(510, 392, 'Swiss-Prot 手工审阅 ≈ 50 余万条；TrEMBL 自动注释 数亿条量级', { size: 11, fill: C.sub, maxW: 284, lh: 15 })
  b.rect(494, 444, 312, 64, { fill: '#ffffff', stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(510, 470, 'nr · UniRef', { size: 14.5, weight: 700, fill: C.accD })
  b.wtext(510, 492, '按特定定义去冗余的衍生资源', { size: 11, fill: C.sub, maxW: 284, lh: 14 })
  b.rect(494, 520, 312, 64, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(508, 542, '档案库不裁决对错——质量控制的责任在二级库与使用者。', { size: 11, fill: C.sub, maxW: 288, lh: 15 })

  // —— 右：专题知识库 ——
  b.zone(880, 190, 460, 410, { label: '专题 · 知识库', sub: '结构、通路与功能语境', fill: C.proL, lfill: C.proD })
  const kbs: Array<[string, string, number]> = [
    ['PDB', '1971 年建立 · 收录 >20 万条三维结构 · 近年增量主要来自冷冻电镜', 268],
    ['KEGG', '1995 年起 · 人工通路图 + KO 编号组织功能语境', 356],
    ['GO 基因本体', '三本体受控词表：生物过程 / 细胞组分 / 分子功能', 430],
  ]
  kbs.forEach(([t, s, y]) => {
    b.rect(904, y, 412, 72, { fill: '#ffffff', stroke: C.pro, sw: 1.5, rx: 8 })
    b.text(920, y + 27, t, { size: 14.5, weight: 700, fill: C.proD })
    b.wtext(920, y + 49, s, { size: 11, fill: C.sub, maxW: 384, lh: 15 })
  })
  b.rect(904, 518, 412, 66, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(918, 540, '注释须区分实验证据与电子证据——「怎么知道的」与结论本身同样重要。', { size: 11, fill: C.sub, maxW: 388, lh: 15 })

  // —— 层间箭头 ——
  b.arrow(424, 396, 464, 396, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(444, 376, '策展', { size: 11, weight: 700, fill: C.mute })
  b.arrow(834, 396, 874, 396, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(854, 376, '知识萃取', { size: 11, weight: 700, fill: C.mute })

  // ============ 二、注释金字塔 ============
  b.panel(30, 652, 640, 308, { title: '二、UniProtKB：审阅层与自动层差三个数量级' })
  b.polygon([[300, 726], [424, 726], [456, 806], [268, 806]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(362, 760, 'Swiss-Prot 手工审阅', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(362, 786, '≈ 50 余万条', { size: 12.5, weight: 700, fill: C.proD })
  b.polygon([[268, 806], [456, 806], [492, 890], [232, 890]], { fill: C.panelB, stroke: C.line, sw: 1.8 })
  b.ctext(362, 838, 'TrEMBL 自动注释', { size: 12.5, weight: 700, fill: C.sub })
  b.ctext(362, 864, '数亿条量级', { size: 12.5, weight: 700, fill: C.sub })
  b.arrow(520, 726, 520, 890, { stroke: C.bad, sw: 1.8, marker: 'bad', markerStart: 'bad', dash: '5 4' })
  b.wtext(536, 796, '相差约三个数量级', { size: 11.5, weight: 700, fill: C.bad, maxW: 92, lh: 16 })
  b.etext(250, 760, '准确优先', { size: 11.5, weight: 700, fill: C.proD })
  b.etext(220, 852, '覆盖优先', { size: 11.5, weight: 700, fill: C.mute })
  b.wtext(60, 930, '一次提交进入自动层容易、进入审阅层难：选层级本质是在覆盖面与可信度之间取舍。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、速查表 ============
  b.panel(690, 652, 680, 308, { title: '三、核心资源速查（截至撰稿口径）' })
  b.table(716, 712, 628, {
    headers: ['资源', '定位', '规模与口径'],
    colW: [110, 180, 338],
    rowH: 38,
    fontSize: 12,
    rows: [
      ['INSDC', '核酸一级档案', '三库每日交换 · 登录号互认'],
      ['UniProtKB', '蛋白注释中枢', 'Swiss-Prot ≈50 余万 · TrEMBL 数亿（差 3 个量级）'],
      ['PDB', '三维结构档案', '1971 年建立 · >20 万条 · 冷冻电镜增量'],
      ['KEGG', '通路与功能语境', '1995 年起 · 人工通路图 + KO 编号'],
      ['GO', '属性受控词表', '三本体：BP / CC / MF'],
    ],
  })
}

export default scene({
  title: '核心数据库概览：档案库、策展库与知识库的三层格局',
  subtitle: 'GenBank / EMBL / DDBJ 组成 INSDC，每日交换、一次提交全球可得；UniProtKB 手工审阅层约 50 余万条与自动注释层数亿条相差约三个数量级；PDB（1971 年，>20 万条）、KEGG（1995 年起）与 GO 三本体提供功能语境',
  draw,
})
