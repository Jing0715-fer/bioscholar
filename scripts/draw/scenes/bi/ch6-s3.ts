// bi ch6-s3 最大简约法与最大似然法（39-i 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、信息位点 ============
  b.panel(30, 132, 660, 430, { title: '一、信息位点：不是每列都投票' })
  const cols: Array<[number, string[], string, string]> = [
    [110, ['A', 'A', 'A', 'A'], '恒定位点', '无区分力'],
    [270, ['A', 'A', 'A', 'G'], '单例', '无区分力'],
    [430, ['A', 'A', 'G', 'G'], '信息位点', '有区分力'],
    [590, ['A', 'G', 'C', 'T'], '四态各一次', '无区分力'],
  ]
  cols.forEach(([x, letters, name, verdict], ci) => {
    letters.forEach((ch, ri) => {
      b.rect(x - 17, 204 + ri * 30, 34, 26, { fill: ci === 2 ? C.proL : C.panelB, stroke: ci === 2 ? C.pro : C.line, sw: 1.2 })
      b.ctext(x, 222 + ri * 30, ch, { size: 13, weight: 700, fill: ci === 2 ? C.proD : C.sub })
    })
    b.ctext(x, 360, name, { size: 11.5, weight: 700, fill: ci === 2 ? C.proD : C.mute })
    b.ctext(x, 380, verdict, { size: 10.5, fill: ci === 2 ? C.ok : C.faint })
  })
  b.wtext(60, 420, '信息位点须至少两种状态且各出现至少两次——恒定、单例与四态各一次的位点均无区分力，不参与简约法的拓扑投票。', { size: 11.5, fill: C.sub, maxW: 590, lh: 17 })

  // ============ 二、Fitch 算法 ============
  b.panel(710, 132, 660, 430, { title: '二、Fitch 算法：后序计数、前序落实' })
  // 四叶树：叶 A A G G
  const leaf = (x: number, y: number, ch: string) => {
    b.circle(x, y, 15, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
    b.ctext(x, y + 4.5, ch, { size: 13, weight: 700, fill: C.ink })
  }
  leaf(820, 420, 'A')
  leaf(940, 420, 'A')
  leaf(1060, 420, 'G')
  leaf(1180, 420, 'G')
  b.line(820, 405, 880, 340, { stroke: C.sub, sw: 1.8 })
  b.line(940, 405, 880, 340, { stroke: C.sub, sw: 1.8 })
  b.line(1060, 405, 1120, 340, { stroke: C.sub, sw: 1.8 })
  b.line(1180, 405, 1120, 340, { stroke: C.sub, sw: 1.8 })
  b.line(880, 340, 1000, 270, { stroke: C.sub, sw: 1.8 })
  b.line(1120, 340, 1000, 270, { stroke: C.sub, sw: 1.8 })
  b.circle(880, 340, 6, { fill: C.acc })
  b.circle(1120, 340, 6, { fill: C.acc })
  b.circle(1000, 270, 7, { fill: C.bad })
  b.text(898, 336, '{A}，+0', { size: 12, weight: 700, fill: C.accD })
  b.text(1138, 336, '{G}，+0', { size: 12, weight: 700, fill: C.accD })
  b.ctext(1000, 252, '{A,G}，+1', { size: 12.5, weight: 700, fill: C.bad })
  b.arrow(1000, 250, 1000, 238, { stroke: C.bad, sw: 1.4, marker: 'bad' })
  b.ctext(1030, 230, '根：交集为空 → 取并集，计一次变化', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(740, 450, '后序（叶 → 根）：对每内部节点取子集交集，空则并集并计一次变化；前序（根 → 叶）：把状态落实到分支。', { size: 11.5, fill: C.sub, maxW: 560, lh: 17 })
  b.text(740, 218, '该列在此拓扑下：', { size: 11.5, fill: C.mute })
  b.tag(930, 212, '最小变化数 = 1', { fill: C.proL, stroke: C.pro, size: 12, weight: 700, tfill: C.proD, pad: 9 })

  // ============ 三、两法对照 ============
  b.panel(30, 576, 1340, 384, { title: '三、最大简约法与最大似然法：两种评分哲学' })
  b.table(60, 656, 700, {
    headers: ['项目', '最大简约法', '最大似然法'],
    colW: [130, 265, 305],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['评分准则', '替换总步数最少', '数据似然最大（模型驱动）'],
      ['替换模型', '无需显式替换模型', 'GTR+Γ+I 等显式模型族'],
      ['核心算法', 'Fitch 后序 / 前序遍历', '修剪算法把逐位点似然压成线性'],
      ['模型选择', '——', 'AIC / BIC 权衡拟合与复杂度'],
      ['现代引擎', '——', 'IQ-TREE / RAxML：大规模类元与分区模型'],
    ],
  })
  b.rect(790, 660, 560, 124, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(810, 688, '模型选择', { size: 13, weight: 700, fill: C.ink })
  b.wtext(810, 714, 'AIC / BIC 在拟合优度与参数复杂度之间权衡；嵌套模型可用似然比检验直接比较。', { size: 11.5, fill: C.sub, maxW: 520, lh: 16 })
  b.rect(790, 800, 560, 124, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(810, 828, '搜索空间', { size: 13, weight: 700, fill: C.ink })
  b.wtext(810, 854, '树数随类元数超指数增长——精确枚举不可行，须启发式搜索（爬山 / NNI / SPR 等邻域移动）。', { size: 11.5, fill: C.sub, maxW: 520, lh: 16 })
}

export default scene({
  title: '最大简约与最大似然：信息位点、Fitch 与模型驱动',
  subtitle: '简约法选替换总步数最少的拓扑，Fitch 算法后序交并集计变化、前序落实状态；信息位点须至少两种状态且各出现至少两次；ML 以数据似然为准则、GTR+Γ+I 为常用模型族，修剪算法把逐位点似然压成线性，模型选择以 AIC/BIC 权衡，IQ-TREE 与 RAxML 为现代引擎',
  draw,
})
