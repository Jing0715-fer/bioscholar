// bi ch4-s4 BLAST 家族与参数调优（39-i 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、五个程序 ============
  b.panel(30, 132, 700, 500, { title: '一、BLAST 家族：五个程序的翻译方向' })
  b.table(60, 210, 640, {
    headers: ['程序', '查询', '数据库', '典型用途'],
    colW: [105, 140, 185, 210],
    rowH: 52,
    fontSize: 11.5,
    rows: [
      ['BLASTn', '核酸', '核酸库', '核酸序列搜索'],
      ['BLASTp', '蛋白', '蛋白库', '蛋白序列搜索'],
      ['BLASTx', '核酸→翻译', '蛋白库', '新读段的六读框扫描'],
      ['tBLASTn', '蛋白', '核酸→六读框翻译', '在基因组 / 转录组中找蛋白同源'],
      ['tBLASTx', '核酸→翻译', '核酸→六读框翻译', '两端皆译 · 最慢'],
    ],
  })
  b.wtext(60, 540, '翻译方向决定语言：查询与库语言不一致的程序都要先翻译——tBLASTx 两端皆译，故最慢。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })

  // ============ 二、PSI-BLAST ============
  b.panel(750, 132, 620, 500, { title: '二、PSI-BLAST：迭代搜索与漂移风险' })
  const nodes: Array<[number, number, string]> = [
    [870, 210, '① BLASTp 初始搜索'],
    [1130, 210, '② 显著命中 → PSSM'],
    [1130, 340, '③ profile 再搜索'],
    [870, 340, '④ 召回远缘同源'],
  ]
  nodes.forEach(([x, y, t]) => {
    b.rect(x, y, 180, 64, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 10, fillOp: 0.7 })
    b.ctext(x + 90, y + 37, t, { size: 12.5, weight: 700, fill: C.accD })
  })
  b.arrow(1052, 242, 1128, 242, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1220, 276, 1220, 338, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1128, 372, 1052, 372, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(960, 338, 960, 276, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(1090, 312, '逐轮迭代', { size: 11.5, weight: 700, fill: C.mute })
  b.rect(780, 430, 560, 68, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 8, fillOp: 0.5 })
  b.wtext(798, 452, '漂移（profile 污染）：非同源序列混入 PSSM 并在后续轮次自我强化——凭家族模式召回远缘同源的代价。', { size: 11.5, fill: C.bad, maxW: 528, lh: 16 })
  b.rect(780, 512, 560, 62, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 8, fillOp: 0.5 })
  b.wtext(798, 534, '防控三件套：收紧阈值 · 逐轮审查新命中 · 限制迭代轮数。', { size: 11.5, fill: '#065f46', maxW: 528, lh: 16 })

  // ============ 三、调优旋钮 ============
  b.panel(30, 656, 1340, 304, { title: '三、参数调优：速度与灵敏度的旋钮' })
  const knobs: Array<[string, string]> = [
    ['字长 word size', '速度—灵敏度的主旋钮：字长越长越快、越漏远缘'],
    ['邻近字阈值 T', '只保留得分不低于 T 的种子字，同样换速度'],
    ['SEG / DUST', '屏蔽低复杂度区段，避免「垃圾种子」制造假命中'],
    ['组成调整', '抑制查询或库序列的组成偏性造成的假象'],
  ]
  knobs.forEach(([t, s], i) => {
    const x = 60 + i * 328
    b.rect(x, 716, 300, 116, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 10, fillOp: 0.5 })
    b.ctext(x + 150, 746, t, { size: 14, weight: 700, fill: C.accD })
    b.wtext(x + 150, 776, s, { size: 11, fill: C.sub, maxW: 272, lh: 15, anchor: 'middle' })
  })
  b.rect(60, 856, 1280, 58, { fill: C.warnL, stroke: C.warn, sw: 1.4, rx: 8, fillOp: 0.55 })
  b.wtext(80, 878, '报告负结果须交代程序、矩阵、字长与阈值口径——否则「未命中」不可解读。', { size: 12.5, weight: 600, fill: '#92400e', maxW: 1240, lh: 17 })
}

export default scene({
  title: 'BLAST 家族与参数调优：翻译方向、迭代与旋钮',
  subtitle: 'tBLASTn 以蛋白查六读框翻译的核酸库、tBLASTx 两端皆译最慢；PSI-BLAST 由显著命中构建 PSSM 逐轮迭代、凭家族模式召回远缘同源，漂移源于非同源序列混入 profile 并自我强化；字长与 T 是速度—灵敏度主旋钮，SEG/DUST 屏蔽低复杂度',
  draw,
})
