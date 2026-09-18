// ne ch6-s4 突触可塑性与学习记忆 / 学习记忆的神经基础（39-h 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、记忆的分类地图 ============
  b.panel(30, 132, 660, 430, { title: '一、记忆的分类地图：两大系统可分别损坏' })
  b.table(60, 196, 600, {
    headers: ['类别', '亚型', '内容', '关键脑区'],
    colW: [110, 130, 190, 170],
    rowH: 44,
    fontSize: 11.5,
    rows: [
      ['陈述性', '情景记忆', '事件、地点、情节', '海马-内侧颞叶'],
      ['（可言传）', '语义记忆', '事实、概念、词汇', '海马 → 新皮层'],
      ['程序性', '技能学习', '运动、认知技能', '基底节'],
      ['（会做不会说）', '条件反射', '经典条件化', '小脑 · 杏仁核'],
      ['', '启动效应', '无意识知觉加工易化', '新皮层'],
    ],
  })
  b.rect(60, 472, 600, 64, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(78, 496, '工作记忆是秒级在线的「心灵黑板」：经典容量约 7±2 个组块（Miller，1956），更严格的估计压至约 4 个（Cowan，2001）。', { size: 11, fill: C.sub, maxW: 566, lh: 16 })

  // ============ 二、海马三突触环路 ============
  b.panel(710, 132, 660, 430, { title: '二、海马三突触环路：三级突触，各级可诱导 LTP' })
  // 环路节点（顺时针）
  b.rect(760, 300, 130, 56, { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 2, rx: 9 })
  b.ctext(825, 322, '内嗅皮层', { size: 13, weight: 700, fill: C.accD })
  b.ctext(825, 340, '（入口 / 出口）', { size: 10.5, fill: C.mute })
  b.rect(950, 190, 130, 56, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 2, rx: 9 })
  b.ctext(1015, 212, '齿状回', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(1015, 230, '（颗粒细胞）', { size: 10.5, fill: C.mute })
  b.rect(1150, 300, 130, 56, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 2, rx: 9 })
  b.ctext(1215, 322, 'CA3', { size: 13, weight: 700, fill: C.rnaD })
  b.ctext(1215, 340, '（锥体细胞）', { size: 10.5, fill: C.mute })
  b.rect(950, 410, 130, 56, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 2, rx: 9 })
  b.ctext(1015, 432, 'CA1', { size: 13, weight: 700, fill: C.proD })
  b.ctext(1015, 450, '（锥体细胞）', { size: 10.5, fill: C.mute })
  // 连接箭头
  b.arrow(870, 300, 950, 235, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(878, 252, '穿通路', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(1080, 218, 1150, 300, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(1148, 252, '苔藓纤维', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(1150, 356, 1080, 410, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.ctext(1148, 398, 'Schaffer 侧枝', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(950, 438, 870, 356, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(878, 398, '返回内嗅皮层', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(760, 500, '三级突触均可诱导 LTP；CA1 的 Schaffer 侧枝-CA1 突触是 Bliss 与 Lømo 1973 年发现 LTP 的地点——记忆研究的「标准跑道」。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })

  // ============ 三、里程碑病例与巩固机制 ============
  b.panel(30, 578, 700, 396, { title: '三、HM 与 Morris 水迷宫：把机制钉在行为上' })
  // 里程碑时间线
  b.line(70, 668, 660, 668, { stroke: C.sub, sw: 3, marker: 'ink' })
  const evs: Array<[number, string, string]> = [
    [90, '1953', 'HM 手术'],
    [220, '1971', '位置细胞'],
    [350, '1982', '水迷宫'],
    [480, '2005', '网格细胞'],
    [600, '2008', 'HM 切片保存'],
  ]
  evs.forEach(([x, yr, label]) => {
    b.circle(x, 668, 5.5, { fill: C.dna })
    b.ctext(x, 692, yr, { size: 12, weight: 700, fill: C.ink })
    b.ctext(x, 710, label, { size: 10.5, fill: C.mute })
  })
  // HM 卡
  b.rect(60, 730, 300, 150, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(76, 756, 'HM：顺行性遗忘的教科书', { size: 13, weight: 700, fill: C.bad })
  b.wtext(76, 778, '1953 年 Scoville 行双侧内侧颞叶切除（含双侧海马大部分与杏仁核）治疗难治性癫痫：短时记忆与程序性学习完好，唯独不能形成新的陈述性长时记忆——海马是巩固通道而非最终仓库。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(76, 862, 'Corkin 等 1997 年 MRI 复查：损毁限于内侧颞叶、新皮层大体完好。', { size: 10, fill: C.mute, maxW: 268, lh: 14 })
  // 水迷宫卡
  b.rect(390, 730, 310, 150, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(406, 756, 'Morris 水迷宫（1982）', { size: 13, weight: 700, fill: C.accD })
  b.wtext(406, 778, '不透明浑水池中寻找隐于水面下约 1–2 cm 的平台，入水点随机轮换；海马 NMDA 受体阻断剂 AP5 阻断空间学习而不阻断可见平台任务——把可塑性机制与行为连成闭环。', { size: 10.5, fill: C.sub, maxW: 278, lh: 15 })
  // 空间记忆细胞注
  b.wtext(60, 910, '空间记忆的细胞学底座：位置细胞（O\'Keefe 1971，只在特定位置放电）、网格细胞（Hafting 2005，六边形栅格铺满环境）与 Tolman 1948 的「认知地图」假说。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、巩固与再巩固 ============
  b.panel(750, 578, 620, 396, { title: '四、巩固与 CREB：分子开关与时间层级' })
  b.rect(770, 650, 580, 84, { fill: C.rnaL, fillOp: 0.45, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(786, 676, 'CREB：跨物种保守的长时记忆开关', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(786, 698, 'cAMP/PKA 磷酸化 CREB（Ser133）开启 CRE 驱动转录，产出可塑性相关蛋白支持突触持久增强与新突触生长——海兔长时敏化、果蝇长时记忆与小鼠海马晚相 LTP 共用此开关。', { size: 10.5, fill: C.sub, maxW: 548, lh: 15 })
  b.rect(770, 750, 280, 130, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(786, 776, '系统级巩固：数月至数年', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(786, 798, '记忆从依赖海马过渡到分布式储存于新皮层；睡眠中海马在慢波睡眠的尖波涟漪中以十数倍压缩速度重演当日路线，边播边向皮层转存。', { size: 10.5, fill: C.sub, maxW: 248, lh: 15 })
  b.rect(1070, 750, 280, 130, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(1086, 776, '再巩固与情绪放大', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(1086, 798, '提取不是只读操作——记忆每次被提取都重回可塑状态，可被更新或削弱。情绪记忆经杏仁核-NE-β 受体通路放大：「记忆不是磁带，而是持续重写的施工」。', { size: 10.5, fill: C.sub, maxW: 248, lh: 15 })
}

export default scene({
  title: '学习记忆的神经基础：分类地图、海马三突触环路与巩固机制',
  subtitle: '陈述性记忆依赖海马-内侧颞叶、程序性依赖基底节/小脑/杏仁核；HM 揭示海马是巩固通道而非仓库',
  draw,
})
