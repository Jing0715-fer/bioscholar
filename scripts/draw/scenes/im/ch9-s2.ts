// im ch9-s2 T 细胞在胸腺的发育与选择：DN→DP→SP 与阳/阴性选择（39-g 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、发育阶梯与两道选择关口 ============
  b.panel(30, 132, 1340, 292, { title: '一、胸腺加工线：DN → DP → SP，经阳性选择与阴性选择两道关口' })

  const stages: Array<[number, number, string, string, string, string]> = [
    [70, 200, 'DN 双阴性', 'CD4⁻CD8⁻', 'TCR 基因重排启动', C.acc],
    [310, 200, 'DP 双阳性', 'CD4⁺CD8⁺', 'TCR 已组装待检', C.acc],
    [550, 250, '阳性选择', '适当低亲和力识别自身肽-MHC', '存活信号 + 谱系定向', C.dna],
    [840, 250, '阴性选择', '高亲和力识别自身肽-MHC', '凋亡指令（或分流为 tTreg）', C.bad],
    [1120, 190, 'SP 初始 T', 'CD4⁺ 或 CD8⁺ 单阳性', '输出外周', C.ok],
  ]
  stages.forEach(([x, w, t, s1, s2, col]) => {
    b.rect(x, 190, w, 64, { fill: col, fillOp: 0.09, stroke: col, sw: 1.7, rx: 8 })
    b.text(x + 14, 212, t, { size: 12.5, weight: 700, fill: col })
    b.wtext(x + 14, 230, s1, { size: 9.5, weight: 600, fill: C.ink, maxW: w - 26, lh: 12 })
    b.wtext(x + 14, 244, s2, { size: 9.5, fill: C.sub, maxW: w - 26, lh: 12 })
  })
  b.arrow(274, 222, 306, 222, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(290, 176, 'β 选择', { size: 10, weight: 700, fill: C.mute })
  b.ctext(290, 164, 'TCR β 重排成功 → 增殖并锁定等位基因排除', { size: 9, fill: C.mute })
  b.arrow(514, 222, 546, 222, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(804, 222, 836, 222, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(1094, 222, 1116, 222, { stroke: C.mute, sw: 2, marker: 'mute' })

  // 凋亡分支
  b.arrow(675, 258, 675, 296, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(550, 300, 250, 54, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.4, rx: 7 })
  b.ctext(675, 322, '死于忽视', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(675, 342, '不能识别自身 MHC 者无存活信号', { size: 9, fill: C.sub })
  b.arrow(965, 258, 965, 296, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(840, 300, 250, 54, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.4, rx: 7 })
  b.ctext(965, 322, '死于删除', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(965, 342, '高亲和力自身反应克隆被清除', { size: 9, fill: C.sub })

  b.rect(70, 372, 1240, 38, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(90, 396, '选择的账本：约 95% 以上的胸腺细胞在 DP 阶段及其前后死于凋亡，仅百分之几的 SP 初始 T 细胞获准输出至外周——残酷而高效的质检。', { size: 11, weight: 600, fill: C.ink, maxW: 1200, lh: 14 })

  // ============ 二、阳性选择 vs 阴性选择 ============
  b.panel(30, 440, 1340, 252, { title: '二、阳性选择与阴性选择：同一考场、两种亲和力、相反结局' })
  b.table(60, 492, 1280, {
    headers: ['比较项目', '阳性选择', '阴性选择'],
    colW: [170, 530, 580],
    rowH: 31,
    fontSize: 11,
    rows: [
      ['主要部位', '皮质，cTEC', '皮髓交界与髓质，mTEC 及胸腺 DC'],
      ['识别亲和力', '适当偏低', '高'],
      ['信号结局', '存活信号', '凋亡指令（或分流为 tTreg）'],
      ['获得性能', '自身 MHC 限制性与 CD4/CD8 谱系定向', '中枢自身耐受'],
      ['失败代价', '死于忽视', '自身免疫病风险'],
    ],
  })

  // ============ 三、AIRE 与考卷扩展 ============
  b.panel(30, 704, 1340, 268, { title: '三、AIRE 驱动的「考卷扩展」：中枢耐受的核心装置' })

  b.rect(60, 754, 740, 170, { fill: C.dnaL, fillOp: 0.35, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(80, 780, 'mTEC 的异位表达：把全身蛋白搬进考场', { size: 12.5, weight: 700, fill: C.dnaD })
  b.rect(90, 800, 170, 56, { fill: C.bg, stroke: C.dna, sw: 1.5, rx: 8 })
  b.ctext(175, 824, 'mTEC（髓质上皮）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(175, 844, 'AIRE 转录调控', { size: 9.5, fill: C.sub })
  b.arrow(264, 828, 320, 828, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.rect(324, 800, 210, 56, { fill: C.bg, stroke: C.dna, sw: 1.5, rx: 8 })
  b.ctext(429, 824, '异位表达组织特异性抗原', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(429, 844, '阴性选择考卷覆盖全身', { size: 9.5, fill: C.sub })
  b.arrow(538, 828, 594, 828, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.rect(598, 800, 180, 56, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.5, rx: 8 })
  b.ctext(688, 824, '自身反应克隆删除', { size: 10.5, weight: 700, fill: '#065f46' })
  b.ctext(688, 844, '中枢耐受建立', { size: 9.5, fill: C.sub })
  b.wtext(80, 890, '胸腺细胞在 DP 阶段及其前后死于凋亡者约 95% 以上；中等亲和力分支则分流为 tTreg，先天携带抑制装备。', { size: 10.5, fill: C.sub, maxW: 700, lh: 15 })

  b.rect(830, 754, 610, 78, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(848, 778, 'AIRE 突变 → APS-1 / APECED', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(848, 800, '组织特异性抗原「考卷」缩水 → 器官特异性自身免疫病。', { size: 10.5, fill: C.sub, maxW: 570, lh: 15 })
  b.rect(830, 846, 610, 78, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(848, 870, '阴性选择的中间带分流：tTreg', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(848, 892, '识别自身肽-MHC 亲和力居中的克隆转为调节性 T 细胞，以抑制执行耐受。', { size: 10.5, fill: C.sub, maxW: 570, lh: 15 })
}

export default scene({
  title: 'T 细胞在胸腺的发育与选择：β 选择、阳性选择与阴性选择',
  subtitle: 'T 细胞经 DN（CD4⁻CD8⁻）至 DP（CD4⁺CD8⁺）推进，TCR β 重排成功引发 β 选择与等位基因排除；阳性选择以适当低亲和力自身肽-MHC 识别赋予存活信号、自身 MHC 限制性与 CD4/CD8 谱系定向，阴性选择删除高亲和力自身反应克隆（或分流为 tTreg）；约 95% 以上胸腺细胞死于选择，仅百分之几输出外周；AIRE 驱动 mTEC 异位表达组织特异性抗原扩展考卷，其突变致 APS-1/APECED',
  draw,
})
