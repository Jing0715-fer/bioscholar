// bc ch3-s4 蛋白质一级结构的测定（39-a 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、碎片重叠法总策略 ============
  b.panel(30, 132, 660, 412, { title: '一、碎片重叠法：一级结构测定的经典策略' })
  const steps: [string, string, string][] = [
    ['① 纯化与分子量测定', '确定亚基数目', C.acc],
    ['② 拆分肽链', '巯基保护（碘乙酸酰胺化）后拆链间二硫键', C.acc],
    ['③ 末端分析', 'N 端：DNFB / Edman；C 端：羧肽酶 / 肼解法', C.acc],
    ['④ 专一性裂解', '切成互相重叠的片段（右栏「分子剪刀」）', C.acc],
    ['⑤ 分离测序 · 拼接', '重叠片段拼出全序列', C.acc],
    ['⑥ 二硫键定位', '水解完整蛋白后比对', C.acc],
  ]
  steps.forEach(([t, s], i) => {
    const x = 56 + (i % 2) * 312
    const y = 186 + Math.floor(i / 2) * 98
    b.rect(x, y, 296, 82, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 8 })
    b.text(x + 14, y + 24, t, { size: 12.5, weight: 700, fill: C.accD })
    b.wtext(x + 14, y + 46, s, { size: 10.5, fill: C.sub, maxW: 268, lh: 14 })
  })
  b.wtext(56, 508, '1955 年 Sanger 首次完成牛胰岛素全序列：51 个残基（A 链 21 · B 链 30）· 3 个二硫键——证明蛋白质具有确定的氨基酸序列。', { size: 11.5, fill: C.ink, maxW: 620, lh: 17 })

  // ============ 二、专一性裂解的分子剪刀 ============
  b.panel(710, 132, 660, 412, { title: '二、专一性裂解的「分子剪刀」' })
  // 肽链条 + 切点标记
  b.rect(730, 186, 600, 24, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 12 })
  const cuts: [number, string, string][] = [
    [810, 'K', C.enz],
    [880, 'R', C.enz],
    [960, 'F', C.rna],
    [1030, 'Y', C.rna],
    [1100, 'W', C.rna],
    [1190, 'M', C.acc],
  ]
  cuts.forEach(([x, res, col]) => {
    b.ctext(x, 202, res, { size: 11, weight: 700, fill: C.proD })
    b.line(x, 186, x, 180, { stroke: col, sw: 2.6 })
    b.line(x, 210, x, 216, { stroke: col, sw: 2.6 })
  })
  b.text(730, 240, 'K / R', { size: 10.5, weight: 700, fill: C.enz })
  b.arrow(756, 236, 830, 220, { stroke: C.enz, sw: 1.4 })
  b.text(930, 240, 'F / Y / W', { size: 10.5, weight: 700, fill: C.rna })
  b.arrow(966, 236, 1000, 220, { stroke: C.rna, sw: 1.4 })
  b.text(1150, 240, 'M', { size: 10.5, weight: 700, fill: C.acc })
  b.arrow(1166, 236, 1186, 220, { stroke: C.acc, sw: 1.4 })
  b.table(730, 276, 600, {
    headers: ['试剂', '切点位置', '类型'],
    colW: [170, 280, 150],
    rowH: 36,
    fontSize: 10.5,
    rows: [
      ['胰蛋白酶', 'Lys / Arg 的 C 端侧', '内切酶'],
      ['胰凝乳蛋白酶', 'Phe / Tyr / Trp 的 C 端侧', '内切酶'],
      ['溴化氰（CNBr）', 'Met 的 C 端侧', '化学法'],
      ['嗜热菌蛋白酶 · 胃蛋白酶', '补充酶切', '内切酶'],
      ['羧肽酶', 'C 端逐个水解', 'C 端测定'],
    ],
  })
  b.text(730, 520, '两套（或多套）片段经重叠拼接 → 唯一全序列。', { size: 11.5, weight: 600, fill: C.sub })

  // ============ 三、Edman 降解循环 ============
  b.panel(30, 556, 660, 424, { title: '三、Edman 降解：逐个切下 N 端残基' })
  const edb: [number, number, string, string][] = [
    [186, 616, '① 偶联', '弱碱下 PITC 与 N 端 α-氨基反应 → PTC-肽'],
    [446, 716, '② 裂解', '无水三氟乙酸切下噻唑啉酮衍生物'],
    [186, 816, '③ 转化 · 鉴定', '转化为稳定的 PTH-氨基酸，HPLC 鉴定'],
  ]
  edb.forEach(([x, y, t, s]) => {
    b.rect(x, y, 168, 78, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.5, rx: 8 })
    b.text(x + 84, y + 24, t, { size: 13, weight: 700, fill: C.enzD, anchor: 'middle' })
    b.wtext(x + 14, y + 44, s, { size: 10.5, fill: C.sub, maxW: 142, lh: 14, anchor: 'middle' })
  })
  b.arrow(360, 655, 440, 700, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(440, 790, 360, 835, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(240, 816, 240, 700, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(280, 758, '循环', { size: 11.5, weight: 700, fill: C.enzD })
  b.wtext(402, 626, '每次从 N 端切下一个残基；一次可连续测定 50~60 个残基。', { size: 11, fill: C.sub, maxW: 250, lh: 16 })
  b.text(56, 930, '由 P. Edman 建立，是自动化 sequenator（序列仪）的原理。', { size: 11.5, fill: C.mute })

  // ============ 四、质谱时代与功能意义 ============
  b.panel(710, 556, 660, 424, { title: '四、质谱时代与序列的功能意义' })
  const ms: [number, string, string][] = [
    [730, 'MALDI-TOF', '肽段指纹图谱（PMF）'],
    [946, 'ESI-MS/MS', '串联质谱碎片离子推序列'],
    [1162, 'Mascot 检索', '数据库比对鉴定'],
  ]
  ms.forEach(([x, t, s], i) => {
    b.rect(x, 624, 190, 66, { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 1.5, rx: 8 })
    b.ctext(x + 95, 648, t, { size: 13, weight: 700, fill: C.accD })
    b.wtext(x + 95, 668, s, { size: 10.5, fill: C.sub, maxW: 174, lh: 13, anchor: 'middle' })
    if (i < 2) b.arrow(x + 192, 657, x + 214, 657, { stroke: C.acc, sw: 2, marker: 'acc' })
  })
  b.wtext(730, 722, '灵敏度达 fmol，已成为高通量蛋白质鉴定的主流——多数测序任务由「演绎」变为「验证」。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })
  b.rect(730, 762, 620, 116, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 10 })
  b.text(748, 792, '一级结构是空间结构与功能的基础：', { size: 12.5, weight: 700, fill: C.ink })
  b.text(748, 822, '· 分子病：镰状细胞贫血 β6 Glu→Val', { size: 11.5, fill: C.sub })
  b.text(748, 850, '· 1965 年我国科学家完成胰岛素人工合成', { size: 11.5, fill: C.sub })
  b.text(748, 878, '· 一级结构 = 氨基酸序列 + 二硫键位置，由基因编码决定', { size: 11.5, fill: C.sub })
}

export default scene({
  title: '蛋白质一级结构的测定：从碎片重叠到质谱',
  subtitle: 'Sanger 1955 胰岛素（51 残基 · 3 个二硫键）奠基；胰蛋白酶 / CNBr 等分子剪刀制造重叠片段，Edman 循环每次切一个 N 端残基（一次 50~60 个），MALDI-TOF 与 MS/MS 时代灵敏度达 fmol',
  draw,
})
