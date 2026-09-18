// im ch1-s1 免疫的基本概念与功能（39-g 批1）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、概念与三大功能 ============
  b.panel(30, 132, 1340, 312, { title: '一、免疫的概念与三大功能：识别自己与非己，维持内稳态' })

  // 概念链
  b.tag(180, 200, '识别「自己」与「非己」', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 13.5, weight: 700, pad: 10 })
  b.arrow(272, 200, 330, 200, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(388, 200, '排除非己抗原', { fill: C.badL, stroke: C.bad, tfill: C.bad, size: 13.5, weight: 700, pad: 10 })
  b.arrow(446, 200, 504, 200, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(562, 200, '耐受自身成分', { fill: C.okL, stroke: C.ok, tfill: '#065f46', size: 13.5, weight: 700, pad: 10 })
  b.arrow(620, 200, 678, 200, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(772, 200, '维持内稳态（远不止抗感染）', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 13.5, weight: 700, pad: 10 })

  // 修昔底德史料卡
  b.rect(895, 176, 452, 50, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 7 })
  b.wtext(909, 196, '公元前 430 年雅典大瘟疫：修昔底德观察到幸存者不会再二次染病——免疫「记忆」的最早记载', { size: 10.5, fill: C.sub, maxW: 424, lh: 15 })

  // 三大功能卡
  const cards: Array<[number, string, string, string, string, Array<[string, string, string]>]> = [
    [60, '免疫防御', '对象：病原体', C.dna, C.dnaD, [
      ['生理', '抵御病原体感染', C.ok],
      ['过强', '超敏反应', C.warn],
      ['不足', '免疫缺陷 · 反复感染', C.bad],
    ]],
    [505, '免疫自稳', '对象：自身衰变成分', C.pro, C.proD, [
      ['生理', '清除衰变、凋亡的自身成分', C.ok],
      ['异常', '自身免疫病', C.warn],
      ['', '', C.bad],
    ]],
    [950, '免疫监视', '对象：突变与病毒感染细胞', C.acc, C.accD, [
      ['生理', '清除突变细胞与病毒感染细胞', C.ok],
      ['异常', '肿瘤发生 · 持续感染', C.warn],
      ['', '', C.bad],
    ]],
  ]
  cards.forEach(([x, name, target, col, colD, rows]) => {
    b.rect(x, 244, 398, 176, { fill: C.bg, stroke: col, sw: 1.8, rx: 10 })
    b.rect(x, 244, 398, 40, { fill: col, fillOp: 0.14, stroke: col, sw: 1.2, rx: 10 })
    b.ctext(x + 199, 270, name, { size: 17, weight: 700, fill: colD })
    b.ctext(x + 199, 306, target, { size: 11.5, fill: C.mute })
    rows.forEach(([lab, val, lc], i) => {
      if (!lab) return
      const yy = 336 + i * 36
      b.tag(x + 54, yy, lab, { fill: lc === C.ok ? C.okL : lc === C.warn ? C.warnL : C.badL, stroke: lc, tfill: lc === C.ok ? '#065f46' : lc === C.warn ? '#92400e' : C.bad, size: 11, weight: 700, pad: 7 })
      b.text(x + 108, yy + 4, val, { size: 12.5, fill: C.sub })
    })
  })

  // ============ 二、固有免疫与适应性免疫 ============
  b.panel(30, 460, 1340, 244, { title: '二、固有免疫与适应性免疫：两层防御的接力协作' })

  b.table(60, 512, 620, {
    headers: ['比较项', '固有免疫', '适应性免疫'],
    colW: [110, 230, 280],
    rowH: 40,
    fontSize: 12.5,
    rows: [
      ['获得方式', '与生俱来', '抗原激发后获得'],
      ['应答速度', '快，即刻启动', '慢，需克隆扩增'],
      ['特异性', '非特异、广谱', '高度特异'],
      ['记忆性', '无经典记忆', '有免疫记忆'],
    ],
  })

  // 右侧接力图
  b.rect(710, 508, 630, 62, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(730, 534, '固有免疫 —— 快而广', { size: 14, weight: 700, fill: C.dnaD })
  b.text(730, 556, '屏障 · 吞噬 · NK · 补体 · 炎症', { size: 11.5, fill: C.sub })
  b.arrow(1025, 572, 1025, 596, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(1155, 588, '提呈抗原，启动适应应答', { size: 11, fill: C.mute })
  b.rect(710, 598, 630, 62, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.8, rx: 9 })
  b.text(730, 624, '适应性免疫 —— 慢而准', { size: 14, weight: 700, fill: C.proD })
  b.text(730, 646, 'T/B 克隆扩增 · 特异性清除 · 记忆', { size: 11.5, fill: C.sub })
  b.wtext(710, 682, '训练免疫：固有免疫细胞亦具表观记忆——两类免疫的传统边界被模糊。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、双刃剑 ============
  b.panel(30, 720, 1340, 258, { title: '三、免疫功能的「双刃剑」：免疫追求适度而非「强」' })

  b.arrow(80, 786, 1310, 786, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(80, 774, '免疫功能强度', { size: 12.5, weight: 700, fill: C.sub })

  const segs: Array<[number, number, string, string, string, string]> = [
    [80, 400, C.badL, C.bad, '功能不足', '#b91c1c'],
    [480, 440, C.okL, C.ok, '适度 · 内稳态', '#065f46'],
    [920, 390, C.warnL, C.warn, '功能过强', '#b45309'],
  ]
  segs.forEach(([x, w, fill, stroke, label, tfill]) => {
    b.rect(x, 806, w, 34, { fill, stroke, sw: 1.8 })
    b.ctext(x + w / 2, 828, label, { size: 14.5, weight: 700, fill: tfill })
  })
  b.ctext(280, 868, '免疫缺陷 · 反复感染', { size: 12, weight: 600, fill: C.bad })
  b.ctext(280, 888, '监视失效 → 肿瘤易发', { size: 12, weight: 600, fill: C.bad })
  b.ctext(700, 868, '防御 · 自稳 · 监视平衡', { size: 12, weight: 600, fill: '#065f46' })
  b.ctext(700, 888, '识别自己、耐受自身', { size: 12, weight: 600, fill: '#065f46' })
  b.ctext(1115, 868, '超敏反应（I–IV 型）', { size: 12, weight: 600, fill: C.warn })
  b.ctext(1115, 888, '自身免疫病', { size: 12, weight: 600, fill: C.warn })

  b.ctext(700, 946, '「免疫」不是越强越好——过犹不及，适度即健康', { size: 14, weight: 700, fill: C.ink })
}

export default scene({
  title: '免疫的基本概念与三大功能：防御、自稳与监视',
  subtitle: '免疫是识别自己与非己、排除非己、耐受自身以维持内稳态的生物学过程；固有免疫与生俱来、应答快、无经典记忆，适应性免疫特异、有记忆、启动慢；功能过强或不足分别对应超敏反应、自身免疫病与免疫缺陷、肿瘤',
  draw,
})
