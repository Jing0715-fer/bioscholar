// im ch2-s1 中枢免疫器官：骨髓与胸腺（39-g 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、骨髓与胸腺对照 ============
  b.panel(30, 132, 1340, 330, { title: '一、中枢免疫器官：骨髓（B 细胞）与胸腺（T 细胞）的育成与质检' })

  b.table(60, 190, 640, {
    headers: ['比较项', '骨髓', '胸腺'],
    colW: [96, 274, 270],
    rowH: 52,
    fontSize: 12,
    rows: [
      ['育成细胞', 'B 淋巴细胞（鸟类为法氏囊）', 'T 淋巴细胞'],
      ['质检环节', '基因重排 → 前 BCR 校验 → 中枢耐受筛选', '阳性选择 + 阴性选择'],
      ['输出产物', '成熟初始 B 细胞', '初始 T 细胞（约 5% 存活输出）'],
      ['特征结构', '兼为浆细胞定居的外周应答场所', '血-胸腺屏障 · 胸腺小体（髓质）'],
    ],
  })

  // 右：B 细胞发育管线
  b.ctext(1010, 176, '骨髓中的 B 细胞发育管线', { size: 13.5, weight: 700, fill: C.ink })
  const pipe: Array<[string, string, string, string]> = [
    ['造血干细胞', C.rnaL, C.rna, C.rnaD],
    ['免疫球蛋白基因重排', C.panelB, C.line, C.ink],
    ['前 BCR 校验（合格方可继续）', C.panelB, C.line, C.ink],
    ['中枢耐受筛选（清除自身反应克隆）', C.panelB, C.line, C.ink],
    ['成熟初始 B 细胞 → 外周', C.okL, C.ok, '#065f46'],
  ]
  pipe.forEach(([s, fill, stroke, tf], i) => {
    const yy = 190 + i * 56
    b.rect(730, yy, 560, 32, { fill, fillOp: 0.6, stroke, sw: 1.6, rx: 8 })
    b.ctext(1010, yy + 21, s, { size: 12.5, weight: 600, fill: tf })
    if (i < 4) b.arrow(1010, yy + 34, 1010, yy + 52, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  })

  // ============ 二、胸腺双重选择 ============
  b.panel(30, 478, 1340, 300, { title: '二、胸腺：T 细胞的学校——阳性选择与阴性选择的双重把关' })

  // 左：胸腺小叶
  b.rect(60, 520, 380, 240, { fill: C.bg, stroke: C.line, sw: 1.5, rx: 9 })
  b.ctext(250, 544, '胸腺小叶结构示意', { size: 13, weight: 700, fill: C.ink })
  b.rect(95, 558, 310, 162, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 2, rx: 8 })
  b.rect(103, 566, 294, 146, { stroke: C.bad, sw: 1.3, dash: '6 4', rx: 6 })
  b.ctext(250, 582, '血-胸腺屏障', { size: 10.5, weight: 700, fill: C.bad })
  b.text(122, 610, '皮质', { size: 12.5, weight: 700, fill: C.dnaD })
  const thymo: Array<[number, number]> = [[135, 630], [160, 614], [188, 634], [215, 612], [248, 628], [280, 610], [310, 632], [338, 614], [365, 630], [145, 652], [175, 655], [330, 655], [360, 652]]
  thymo.forEach(([x, y]) => b.circle(x, y, 3.5, { fill: C.dna, fillOp: 0.8 }))
  b.ellipse(250, 672, 82, 46, { fill: C.rnaL, fillOp: 0.7, stroke: C.rnaD, sw: 2 })
  b.ctext(205, 668, '髓质', { size: 12.5, weight: 700, fill: C.rnaD })
  b.circle(308, 686, 12, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.circle(308, 686, 5, { fill: C.pro })
  b.ctext(308, 716, '胸腺小体', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(250, 750, '血-胸腺屏障保护皮质内的选择不受循环抗原干扰；胸腺小体是人类胸腺髓质的形态标志', { size: 10, fill: C.mute })

  // 右：双重选择流程
  b.rect(470, 530, 260, 68, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 8 })
  b.ctext(600, 556, '双阳性胸腺细胞', { size: 13, weight: 700, fill: C.ink })
  b.ctext(600, 578, 'CD4⁺ CD8⁺ · 位于皮质', { size: 11, fill: C.sub })
  b.arrow(734, 564, 766, 564, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(770, 530, 260, 68, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(900, 550, '阳性选择（皮质）', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(900, 570, '获自身 MHC 限制性', { size: 10.5, fill: C.sub })
  b.ctext(900, 586, '定向为 CD4 或 CD8 单阳性', { size: 10.5, fill: C.sub })
  b.arrow(1034, 564, 1066, 564, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(1070, 530, 280, 68, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 8 })
  b.ctext(1210, 556, '阴性选择（髓质）', { size: 13, weight: 700, fill: C.bad })
  b.ctext(1210, 578, '清除自身反应性克隆', { size: 11, fill: C.sub })
  b.arrow(1210, 602, 1210, 634, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(1080, 636, 260, 40, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(1210, 662, '存活 T 细胞 → 外周', { size: 12.5, weight: 700, fill: '#065f46' })

  // 95/5 条形
  b.ctext(750, 676, '双重选择的代价与产出', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(470, 688, 532, 30, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.rect(1002, 688, 28, 30, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.text(478, 708, '约 95% 被淘汰 → 凋亡', { size: 11.5, weight: 700, fill: C.bad })
  b.etext(1034, 748, '约 5% 存活输出', { size: 11, weight: 700, fill: '#065f46' })
  b.text(478, 748, '仅约 5% 以初始 T 细胞形式经髓质血管离开胸腺', { size: 10.5, fill: C.sub })

  // ============ 三、临床注脚 ============
  b.panel(30, 794, 1340, 184, { title: '三、临床注脚：当中枢「质检」失灵' })
  b.rect(60, 830, 620, 118, { fill: C.proL, fillOp: 0.3, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(80, 858, 'AIRE 与组织限制性抗原', { size: 13.5, weight: 700, fill: C.proD })
  b.wtext(80, 882, 'AIRE 驱动胸腺髓质上皮细胞异位表达组织限制性抗原，让阴性选择得以「阅尽」全身自身抗原；AIRE 基因缺陷 → 自身免疫性多内分泌病。', { size: 11.5, fill: C.sub, maxW: 580, lh: 17 })
  b.rect(720, 830, 620, 118, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(740, 858, 'DiGeorge 综合征与裸鼠', { size: 13.5, weight: 700, fill: C.bad })
  b.wtext(740, 882, '胸腺发育缺陷的经典模型：T 细胞无从育成、细胞免疫严重受损——从反面印证「胸腺是 T 细胞的学校」。', { size: 11.5, fill: C.sub, maxW: 580, lh: 17 })
}

export default scene({
  title: '中枢免疫器官：骨髓与胸腺的育成与质检',
  subtitle: '骨髓育成 B 细胞（重排 → 前 BCR 校验 → 中枢耐受筛选）并兼为浆细胞定居场所；胸腺经阳性选择赋予自身 MHC 限制性、阴性选择清除自身反应克隆，约 95% 胸腺细胞被淘汰，仅约 5% 以初始 T 细胞形式输出；AIRE 缺陷致自身免疫性多内分泌病',
  draw,
})
