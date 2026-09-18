// mi ch5-s1 营养要素与营养类型（39-f 批2）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、六大营养要素 ============
  b.panel(30, 132, 1340, 300, { title: '一、六大营养要素：水、碳源、氮源、无机盐、生长因子与氧气' })
  const elem = (x: number, y: number, t: string, s: string, c: string, cd: string) => {
    b.rect(x, y, 410, 96, { fill: C.bg, stroke: c, sw: 1.5, rx: 9 })
    b.text(x + 18, y + 27, t, { size: 13.5, weight: 700, fill: cd })
    b.wtext(x + 18, y + 51, s, { size: 11.5, fill: C.sub, maxW: 374, lh: 17 })
  }
  elem(50, 178, '① 水（占鲜重 70%–90%）', '一切营养须先溶于水才能吸收；胞内酶促反应都在水相中进行。', C.acc, C.accD)
  elem(470, 178, '② 碳源（约占细胞干重一半）', '糖类最常用；从 CO₂ 到烃类，可利用谱极宽。', C.dna, C.dnaD)
  elem(890, 178, '③ 氮源', '谱极宽：N₂（固氮耗 16 ATP/分子）、铵盐等速效氮、蛋白胨等迟效氮。', C.rna, C.rnaD)
  elem(50, 286, '④ 无机盐', '大量与微量元素多为酶辅基或激活剂；微量元素过量有毒。', C.pro, C.proD)
  elem(470, 286, '⑤ 生长因子', '维生素、氨基酸、碱基等；营养缺陷型是氨基酸发酵的菌种基础。', C.enz, C.enzD)
  elem(890, 286, '⑥ 氧气', '好氧呼吸的末端电子受体（厌氧微生物不需要）。', '#d97706', '#92400e')

  // ============ 二、四种营养类型 ============
  b.panel(30, 452, 1340, 528, { title: '二、四种营养类型：能源 × 供氢体 × 碳源三维判定' })
  b.table(50, 508, 700, {
    headers: ['营养类型', '能源', '供氢（电子）供体', '碳源', '代表微生物'],
    colW: [110, 128, 202, 92, 168],
    rowH: 50,
    fontSize: 12,
    rows: [
      ['光能自养', '光能', 'H₂O、H₂S 等还原态无机物', 'CO₂', '蓝细菌、绿硫细菌'],
      ['光能异养', '光能', '有机物', '有机物', '紫色非硫细菌'],
      ['化能自养', '无机物氧化', 'H₂、H₂S、NH₃、Fe²⁺', 'CO₂', '硝化细菌、硫杆菌'],
      ['化能异养', '有机物氧化', '有机物', '有机物', '绝大多数细菌、全部真菌'],
    ],
  })
  // 表下：判定三维度
  b.rect(50, 790, 700, 172, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(68, 816, '类型判定三维度', { size: 13.5, weight: 700, fill: C.ink })
  const dims: Array<[string, string]> = [
    ['能源', '光能 ｜ 化能（无机物或有机物氧化产能）'],
    ['供氢（电子）供体', '还原态无机物 ｜ 有机物'],
    ['碳源', 'CO₂（自养） ｜ 有机物（异养）'],
  ]
  dims.forEach(([t, s], i) => {
    b.rect(68, 836 + i * 32, 8, 8, { fill: C.acc, rx: 2 })
    b.text(84, 845 + i * 32, t + '：', { size: 12, weight: 700, fill: C.sub })
    b.text(84 + textW(t + '：', 12, 700) + 8, 845 + i * 32, s, { size: 12, fill: C.sub })
  })
  b.text(68, 944, '——三个维度组合，构成左表四种营养类型', { size: 11.5, weight: 700, fill: C.mute })

  // 右上：氮源谱
  b.rect(790, 495, 560, 210, { fill: C.rnaL, fillOp: 0.3, stroke: C.rna, sw: 1.5, rx: 9 })
  b.text(810, 521, '氮源谱：从 N₂ 到蛋白胨', { size: 14, weight: 700, fill: C.rnaD })
  const nsrc: Array<[string, string]> = [
    ['分子态 N₂', '需固氮酶——每固定 1 分子耗 16 ATP'],
    ['铵盐、硝酸盐', '速效氮：直接掺入氨基酸合成'],
    ['蛋白胨、尿素等', '迟效氮：须先降解为小分子'],
  ]
  nsrc.forEach(([t, s], i) => {
    b.rect(810, 548 + i * 52, 190, 40, { fill: C.bg, stroke: C.rna, sw: 1.4, rx: 7 })
    b.ctext(905, 573 + i * 52, t, { size: 12, weight: 700, fill: C.rnaD })
    b.text(1016, 566 + i * 52, s, { size: 11, fill: C.sub })
    if (i < 2) b.arrow(905, 590 + i * 52, 905, 596 + i * 52, { stroke: C.rna, sw: 2, marker: 'rna' })
  })

  // 右下：碳氮比
  b.rect(790, 725, 560, 120, { fill: C.dnaL, fillOp: 0.35, stroke: C.dna, sw: 1.5, rx: 9 })
  b.text(810, 751, '碳氮比（C/N）的生理意义', { size: 14, weight: 700, fill: C.dnaD })
  b.wtext(810, 775, '细菌细胞 C/N ≈ 5，真菌 ≈ 10；培养基配制常用约 10:1，并依「生长菌体」还是「积累代谢产物」动态调整。', { size: 12, fill: C.sub, maxW: 520, lh: 19 })
}

export default scene({
  title: '微生物的营养要素与营养类型：六大要素、四型分类与碳氮比',
  subtitle: '水占鲜重 70%–90%；固氮每分子 N₂ 耗 16 ATP；按能源 × 供氢体 × 碳源分光能自养、光能异养、化能自养、化能异养四型；细菌细胞 C/N ≈ 5、真菌 ≈ 10',
  draw,
})
