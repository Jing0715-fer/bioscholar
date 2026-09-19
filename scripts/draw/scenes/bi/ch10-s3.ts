// bi ch10-s3 代谢组学（39-i 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、最下游的化学读出 ============
  b.panel(30, 132, 660, 420, { title: '一、信息流最下游的化学读出与两段式提问' })
  b.tag(120, 190, '基因组', { fill: C.proL, stroke: C.pro, size: 12, weight: 700, tfill: C.proD, pad: 10 })
  b.arrow(170, 190, 200, 190, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(250, 190, '转录组', { fill: C.rnaL, stroke: C.rna, size: 12, weight: 700, tfill: C.rnaD, pad: 10 })
  b.arrow(300, 190, 330, 190, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(380, 190, '蛋白组', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 10 })
  b.arrow(430, 190, 460, 190, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(510, 190, '代谢组', { fill: C.enzL, stroke: C.enz, size: 12, weight: 700, tfill: C.enzD, pad: 10 })
  b.ctext(330, 232, '信息流向下游：代谢组是距表型最近的化学读出', { size: 11.5, fill: C.sub })
  b.tag(330, 264, '确认口径数千种代谢物 · 含推测条目达万级', { fill: C.panelB, stroke: C.line, size: 11.5, weight: 600, tfill: C.sub, pad: 10 })
  b.rect(60, 300, 290, 80, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 9, fillOp: 0.5 })
  b.ctext(205, 330, '非靶向：全扫描做发现', { size: 13, weight: 700, fill: C.accD })
  b.ctext(205, 354, '宽覆盖 · 出候选 · 假设生成', { size: 11, fill: C.sub })
  b.rect(360, 300, 290, 80, { fill: C.dnaL, stroke: C.dna, sw: 1.7, rx: 9, fillOp: 0.5 })
  b.ctext(505, 330, '靶向：内标标准曲线确证', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(505, 354, '精确定量 · 定论口径', { size: 11, fill: C.sub })
  b.arrow(350, 340, 360, 340, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.wtext(60, 404, '非靶向做发现、靶向做确证——两种提问方式互补成两段式工作流。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 438, '取样须秒级淬灭以终止代谢反应；QC 样本穿插进样，LOESS 信号漂移校正共同定义数据的可信窗口。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 486, '与上游组学不同，代谢谱反映的是酶活与通量的即时状态——这正是「最下游读出」的含义。', { size: 11.5, fill: C.mute, maxW: 600, lh: 16 })

  // ============ 二、三大平台 ============
  b.panel(710, 132, 660, 420, { title: '二、三大平台：按化学性质分工' })
  b.table(740, 190, 600, {
    headers: ['平台', '分离与检测', '强项'],
    colW: [120, 250, 230],
    rowH: 54,
    fontSize: 12,
    rows: [
      ['GC-MS', '气相分离 · EI 电离', 'EI 谱库成熟'],
      ['LC-MS', 'C18 与 HILIC 双柱互补', '覆盖宽且灵敏'],
      ['NMR', '无需色谱分离', '无损 · 可绝对定量'],
    ],
  })
  b.wtext(740, 426, '三平台按化学性质分工：挥发性成分走 GC-MS，极性与中等极性成分走 LC-MS 双柱，定量基准与结构解析求 NMR。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(740, 474, 'C18 看非极性、HILIC 看极性——两柱数据互补拼接，才拼出可观的覆盖面。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、特征表的诞生 ============
  b.panel(30, 576, 660, 404, { title: '三、特征表的诞生：峰检出、对齐与归一化' })
  const step = (x: number, s: string) => {
    b.rect(x, 630, 130, 46, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.55 })
    b.ctext(x + 65, 658, s, { size: 12.5, weight: 700, fill: C.accD })
  }
  step(60, '峰检出')
  step(220, '峰对齐')
  step(380, '归一化')
  step(540, '特征表')
  b.arrow(190, 653, 220, 653, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(350, 653, 380, 653, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(510, 653, 540, 653, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.line(80, 730, 320, 730, { stroke: C.sub, sw: 1.4 })
  const pk1: Array<[number, number]> = [[110, 36], [160, 58], [215, 30], [270, 46]]
  pk1.forEach(([x, h]) => b.line(x, 730, x, 730 - h, { stroke: C.dna, sw: 2.2 }))
  b.line(340, 730, 600, 730, { stroke: C.sub, sw: 1.4 })
  const pk2: Array<[number, number]> = [[380, 36], [435, 58], [495, 30], [555, 46]]
  pk2.forEach(([x, h]) => b.line(x, 730, x, 730 - h, { stroke: C.rna, sw: 2.2, dash: '5 4' }))
  b.arrow(325, 712, 337, 712, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.ctext(200, 752, '样本 1（保留时间）', { size: 10.5, fill: C.dnaD })
  b.ctext(470, 752, '样本 2（整体漂移）', { size: 10.5, fill: C.rnaD })
  b.ctext(330, 690, '峰对齐：校正保留时间漂移', { size: 10.5, weight: 700, fill: C.mute })
  b.tag(330, 800, '加合物与共流出 → 特征与化合物非一一对应', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.bad, pad: 10 })
  b.text(60, 852, '归一化的三级武器', { size: 13, weight: 700, fill: C.ink })
  b.tag(140, 884, '内标', { fill: C.panelB, stroke: C.line, size: 11.5, weight: 600, tfill: C.sub, pad: 9 })
  b.tag(300, 884, '概率商归一化', { fill: C.panelB, stroke: C.line, size: 11.5, weight: 600, tfill: C.sub, pad: 9 })
  b.tag(480, 884, '尿液化学校正', { fill: C.panelB, stroke: C.line, size: 11.5, weight: 600, tfill: C.sub, pad: 9 })
  b.wtext(60, 926, '共流出加剧离子抑制——特征表只是候选化合物的索引，绝非身份清单。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 四、多元统计与通路分析 ============
  b.panel(710, 576, 660, 404, { title: '四、多元统计的警戒线与通路分析' })
  b.axis(740, 850, 280, 220, {
    xlabel: '成分 1',
    ylabel: '成分 2',
    title: 'PLS-DA（示意）',
    xticks: [[0, '低'], [1, '高']],
    yticks: [[0, '低'], [1, '高']],
  })
  b.curve(740, 850, 280, 220, [[0, 0.93], [1, 0.07]], { stroke: C.bad, sw: 1.6, dash: '7 5' })
  const gA: Array<[number, number]> = [
    [0.18, 0.62], [0.24, 0.72], [0.3, 0.55], [0.22, 0.66], [0.33, 0.68], [0.27, 0.5],
  ]
  const gB: Array<[number, number]> = [
    [0.62, 0.4], [0.7, 0.32], [0.66, 0.45], [0.75, 0.38], [0.72, 0.28], [0.64, 0.5],
  ]
  gA.forEach(([fx, fy]) => b.circle(740 + fx * 280, 850 - fy * 220, 4.5, { fill: C.pro, fillOp: 0.7 }))
  gB.forEach(([fx, fy]) => b.circle(740 + fx * 280, 850 - fy * 220, 4.5, { fill: C.enz, fillOp: 0.7 }))
  b.ctext(812, 660, '组 1', { size: 11, weight: 700, fill: C.proD })
  b.ctext(958, 800, '组 2', { size: 11, weight: 700, fill: C.enzD })
  b.text(1060, 636, 'PLS-DA 须以置换检验与交叉验证', { size: 11, fill: C.sub })
  b.text(1060, 651, '防过拟合——分开的两组先问', { size: 11, fill: C.sub })
  b.text(1060, 666, '一句「是否过拟合」。', { size: 11, fill: C.sub })
  b.wtext(1060, 700, 'VIP > 1 仅作候选：与单变量检验交叉印证后，再进靶向确证。', { size: 11, fill: C.sub, maxW: 286, lh: 15 })
  b.wtext(1060, 756, '鉴定置信级：二级谱＋标准品比对才达最高级；GNPS 分子网络让未知物按谱形归队。', { size: 11, fill: C.sub, maxW: 286, lh: 15 })
  b.wtext(1060, 824, 'MetPA 结合富集分析与拓扑影响值——因果方向仍需干预实验裁决。', { size: 11, fill: C.sub, maxW: 286, lh: 15 })
  b.ctext(880, 930, '把统计显著当作因果，是代谢组学最常见的事故。', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '代谢组学：最下游的化学读出、三平台分工与多元统计警戒线',
  subtitle: '代谢组是信息流最下游的化学读出，确认口径的代谢物量级为数千种、含推测条目达万级；非靶向全扫描做发现、靶向内标标准曲线做确证，取样须秒级淬灭并以 QC 穿插与 LOESS 校正定义可信窗；GC-MS 胜在 EI 谱库成熟、LC-MS 以 C18 与 HILIC 双柱互补、NMR 无损可绝对定量；特征与化合物因加合物与共流出非一一对应；PLS-DA 须置换检验与交叉验证防过拟合、VIP 高于 1 仅作候选；化合物鉴定需二级谱与标准品才达最高置信级，因果方向仍需干预实验裁决',
  draw,
})
