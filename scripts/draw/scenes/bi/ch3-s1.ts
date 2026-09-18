// bi ch3-s1 同源性与序列比对的生物学基础（39-i 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三词辨析 + 暮区 ============
  b.panel(30, 132, 780, 430, { title: '一、同源性、相似性、一致性：三词辨析' })
  const words: Array<[number, string, string, string, string, string, string]> = [
    [60, '同源性', '演化断言：源自共同祖先', '全或无，不可量化为百分比', C.pro, C.proL, C.proD],
    [315, '相似性', '打分方案下的可观测量', '随打分矩阵与空位罚分而变', C.acc, C.accL, C.accD],
    [570, '一致性', '比对中相同残基的比例', '「57% 一致」是合法表述', C.dna, C.dnaL, C.dnaD],
  ]
  words.forEach(([x, t, s1, s2, st, fl, tf]) => {
    b.rect(x, 186, 210, 118, { fill: fl, stroke: st, sw: 1.8, rx: 10, fillOp: 0.55 })
    b.ctext(x + 105, 214, t, { size: 16, weight: 700, fill: tf })
    b.wtext(x + 105, 242, s1, { size: 11, fill: C.sub, maxW: 190, lh: 15, anchor: 'middle' })
    b.wtext(x + 105, 280, s2, { size: 11, fill: C.mute, maxW: 190, lh: 15, anchor: 'middle' })
  })
  b.rect(60, 322, 720, 54, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 8, fillOp: 0.5 })
  b.wtext(76, 344, '常见误用：「60% 同源」不存在——两条序列要么同源要么不同源；应写「在某某打分方案下比对，一致性为 57%」。', { size: 11.5, fill: C.bad, maxW: 690, lh: 16 })
  // 一致性刻度与暮区
  b.text(60, 412, '一致性刻度与「暮区」', { size: 13, weight: 700, fill: C.ink })
  b.rect(60, 424, 170, 22, { fill: C.badL, stroke: C.line, sw: 1 })
  b.rect(230, 424, 170, 22, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.rect(400, 424, 380, 22, { fill: C.okL, stroke: C.line, sw: 1 })
  b.text(60, 462, '0%', { size: 10.5, fill: C.mute })
  b.ctext(230, 462, '20%', { size: 10.5, fill: C.mute })
  b.ctext(400, 462, '35%', { size: 10.5, fill: C.mute })
  b.etext(780, 462, '100%', { size: 10.5, fill: C.mute })
  b.wtext(60, 488, '≤20%：远缘同源裸比对已难与随机区分', { size: 10.5, fill: C.bad, maxW: 165, lh: 14 })
  b.wtext(232, 488, '暮区 20–35%：既可能远缘同源也可能是噪声——看保守残基位置、比对长度与多序列联合证据', { size: 10.5, fill: '#92400e', maxW: 166, lh: 14 })
  b.wtext(402, 488, '>35%：通常可稳定判定同源关系', { size: 10.5, fill: '#065f46', maxW: 200, lh: 14 })

  // ============ 二、直系旁系异同源 ============
  b.panel(830, 132, 540, 430, { title: '二、直系、旁系与异同源：溯源的三把尺' })
  b.table(860, 210, 480, {
    headers: ['类型', '起源事件', '典型情境', '功能保守预期'],
    colW: [80, 105, 165, 130],
    rowH: 52,
    fontSize: 11.5,
    rows: [
      ['直系', '物种形成', '不同物种同一基因', '功能常保守'],
      ['旁系', '复制', '同物种基因家族', '常已分化'],
      ['异同源', '水平转移', '跨物种获得', '视转移源而定'],
    ],
  })
  // 迷你基因树：○ 复制 / □ 物种形成
  b.ctext(1100, 436, '祖先基因', { size: 11.5, weight: 700, fill: C.ink })
  b.line(1100, 444, 1100, 452, { stroke: C.sub, sw: 1.8 })
  b.circle(1100, 458, 7, { fill: C.enz })
  b.text(1120, 462, '复制', { size: 10.5, fill: C.enzD })
  b.line(1100, 465, 1000, 476, { stroke: C.sub, sw: 1.8 })
  b.line(1100, 465, 1200, 476, { stroke: C.sub, sw: 1.8 })
  b.rect(993, 476, 14, 14, { fill: C.acc, rx: 2 })
  b.rect(1193, 476, 14, 14, { fill: C.acc, rx: 2 })
  b.ctext(1000, 470, '物种形成', { size: 10, fill: C.accD })
  b.ctext(1200, 470, '物种形成', { size: 10, fill: C.accD })
  b.line(1000, 490, 940, 510, { stroke: C.sub, sw: 1.8 })
  b.line(1000, 490, 1060, 510, { stroke: C.sub, sw: 1.8 })
  b.line(1200, 490, 1140, 510, { stroke: C.sub, sw: 1.8 })
  b.line(1200, 490, 1260, 510, { stroke: C.sub, sw: 1.8 })
  const leafs: Array<[number, string]> = [[940, 'A1'], [1060, 'A2'], [1140, 'B1'], [1260, 'B2']]
  leafs.forEach(([x, t]) => {
    b.circle(x, 514, 4.5, { fill: C.ink })
    b.ctext(x, 534, t, { size: 11, weight: 700, fill: C.sub })
  })

  // ============ 三、三种比对模式 ============
  b.panel(30, 576, 1340, 384, { title: '三、全局、局部与半全局比对：三种生物学故事' })
  // 全局
  b.rect(60, 636, 400, 200, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.ctext(260, 664, '全局比对', { size: 14.5, weight: 700, fill: C.dnaD })
  b.rect(100, 690, 180, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.rect(100, 726, 180, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  ;[100, 145, 190, 235, 280].forEach(x => b.line(x, 710, x, 726, { stroke: C.faint, sw: 1.2 }))
  b.ctext(260, 776, '整条同源：端到端比较', { size: 11.5, fill: C.sub })
  // 局部
  b.rect(500, 636, 400, 200, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.ctext(700, 664, '局部比对', { size: 14.5, weight: 700, fill: C.accD })
  b.rect(540, 690, 240, 20, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(610, 690, 70, 20, { fill: C.acc, stroke: C.accD, sw: 1.5 })
  b.rect(570, 726, 180, 20, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(610, 726, 70, 20, { fill: C.acc, stroke: C.accD, sw: 1.5 })
  b.ctext(700, 776, '共享片段：各取内部最相似片段对', { size: 11.5, fill: C.sub })
  // 半全局
  b.rect(940, 636, 400, 200, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.ctext(1140, 664, '半全局比对', { size: 14.5, weight: 700, fill: C.rnaD })
  b.rect(980, 698, 240, 20, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.rect(1040, 734, 120, 20, { fill: C.rna, stroke: C.rnaD, sw: 1.5 })
  b.ctext(1140, 776, '嵌套关系：末端自由（如读段对基因组）', { size: 11.5, fill: C.sub })
  b.text(60, 880, '比对的五大用途', { size: 13.5, weight: 700, fill: C.ink })
  const uses = ['功能推断', '保守残基定位', '演化重建', '实验设计', '数据质检']
  uses.forEach((u, i) => {
    b.tag(240 + i * 220, 880, u, { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 10 })
  })
  b.text(60, 928, '选错模式会稀释或扭曲信号——先想清楚两条序列讲的是哪种生物学故事。', { size: 11.5, fill: C.mute })
}

export default scene({
  title: '同源性与比对基础：三词辨析、三种同源与三种模式',
  subtitle: '同源性是全或无的演化断言、不能量化为百分比，相似性与一致性才是可观测量；直系（物种形成，功能常保守）、旁系（复制，常已分化）、异同源（水平转移）；一致性 20–35% 为暮区；全局/局部/半全局分别对应整条同源、共享片段与嵌套关系',
  draw,
})
