// bi ch10-s4 单细胞转录组（39-i 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、bulk 的平均遮罩 ============
  b.panel(30, 132, 660, 420, { title: '一、bulk 的平均遮罩：同一读数的两种真相' })
  b.rect(60, 186, 300, 226, { fill: C.panel, stroke: C.line, sw: 1.6, rx: 10 })
  b.ctext(210, 212, '情形 A：细胞比例变化', { size: 13, weight: 700, fill: C.accD })
  b.text(80, 238, '类型 X 占 20%', { size: 10.5, fill: C.sub })
  for (let i = 0; i < 20; i++) {
    b.circle(82 + i * 13.4, 254, 5.2, { fill: i < 4 ? C.dna : C.bg, stroke: C.dna, sw: 1.4 })
  }
  b.text(80, 292, '类型 X 占 35%', { size: 10.5, fill: C.sub })
  for (let i = 0; i < 20; i++) {
    b.circle(82 + i * 13.4, 308, 5.2, { fill: i < 7 ? C.dna : C.bg, stroke: C.dna, sw: 1.4 })
  }
  b.ctext(210, 384, '比例涨了，细胞没变', { size: 11, fill: C.mute })
  b.rect(360, 186, 300, 226, { fill: C.panel, stroke: C.line, sw: 1.6, rx: 10 })
  b.ctext(510, 212, '情形 B：自身表达上调', { size: 13, weight: 700, fill: C.enzD })
  b.circle(450, 292, 34, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.circle(570, 292, 34, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  const dots1 = [[438, 280], [462, 278], [444, 300], [458, 296], [450, 312]]
  const dots2 = [[552, 270], [578, 266], [548, 284], [586, 282], [560, 292], [576, 296], [552, 304], [568, 308], [584, 300], [562, 278], [578, 290], [590, 274]]
  dots1.forEach(([x, y]) => b.circle(x, y, 3, { fill: C.dna }))
  dots2.forEach(([x, y]) => b.circle(x, y, 3, { fill: C.enz }))
  b.ctext(450, 346, '状态 1', { size: 11, fill: C.sub })
  b.ctext(570, 346, '状态 2', { size: 11, fill: C.sub })
  b.ctext(510, 384, '比例没变，每个细胞表达更多', { size: 11, fill: C.mute })
  b.tag(330, 438, 'bulk 读数：均值同样升高 —— 两种机制不可分辨', { fill: C.badL, stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 10 })
  b.wtext(60, 484, '单细胞测序把「比例变化」与「自身表达变化」解耦，并照亮稀有细胞群——稀有群刻画须预留数倍于其占比的细胞总量。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、液滴微流控与 UMI ============
  b.panel(710, 132, 660, 420, { title: '二、液滴微流控与 UMI：给每条分子发身份证' })
  b.ctext(860, 196, '油包水液滴', { size: 11.5, weight: 700, fill: C.accD })
  b.circle(860, 285, 78, { fill: C.accL, stroke: C.acc, sw: 2, fillOp: 0.3 })
  b.circle(828, 285, 24, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(828, 290, '细胞', { size: 10.5, weight: 700, fill: C.dnaD })
  b.rect(874, 252, 38, 38, { fill: C.proL, stroke: C.pro, sw: 2, rx: 7 })
  for (let i = 0; i < 3; i++) b.line(881, 262 + i * 8, 905, 262 + i * 8, { stroke: C.pro, sw: 1.6 })
  b.ctext(893, 306, '凝胶珠', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(860, 378, '细胞条形码在珠上', { size: 10.5, fill: C.sub })
  b.text(1000, 212, 'UMI：分子身份证', { size: 13, weight: 700, fill: C.ink })
  const umiColors = [C.enz, C.enz, C.acc, C.pro]
  const umiFills = [C.enzL, C.enzL, C.accL, C.proL]
  for (let i = 0; i < 4; i++) {
    const y = 234 + i * 26
    b.rect(1000, y, 48, 18, { fill: umiFills[i], stroke: umiColors[i], sw: 1.5, rx: 4 })
    b.rect(1048, y + 2, 116, 14, { fill: C.panelB, stroke: C.line, sw: 1 })
  }
  b.text(1176, 250, '← 同一 UMI', { size: 10.5, weight: 700, fill: C.enzD })
  b.arrow(1070, 344, 1070, 366, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.text(1090, 360, 'PCR 后去重', { size: 10.5, weight: 700, fill: C.mute })
  for (let i = 0; i < 3; i++) {
    const y = 372 + i * 26
    b.rect(1000, y, 48, 18, { fill: umiFills[i], stroke: umiColors[i], sw: 1.5, rx: 4 })
    b.rect(1048, y + 2, 116, 14, { fill: C.panelB, stroke: C.line, sw: 1 })
  }
  b.text(1176, 404, '← 各计一次', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(1000, 466, '同 UMI 的扩增副本只计一次；掉落（dropout）使计数呈零膨胀形态。', { size: 11, fill: C.sub, maxW: 300, lh: 15 })
  b.timelineH(740, 470, 560, [
    { at: 0.05, label: '2009 · Tang 等', sub: '首例单细胞转录组', above: true, c: C.sub },
    { at: 0.72, label: '2015 · Drop-seq 与 10x', sub: '一次实验数万细胞', above: false, c: C.bad },
  ], { title: '从技艺到日用品' })

  // ============ 三、技术噪声与标准流水线 ============
  b.panel(30, 576, 660, 404, { title: '三、两类技术噪声与标准分析流水线' })
  const trap = (x: number, t: string, s: string) => {
    b.rect(x, 624, 200, 64, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8, fillOp: 0.4 })
    b.ctext(x + 100, 646, t, { size: 12, weight: 700, fill: C.bad })
    b.wtext(x + 14, 666, s, { size: 10, fill: C.sub, maxW: 176, lh: 13 })
  }
  trap(60, '双联体', '两细胞共滴成混合幻影；人工双联体打分识别')
  trap(280, '漏液', '环境 RNA 污染；空液滴估计并扣除')
  trap(500, '解离应激', '应激基因须检查，防「应激群」假象')
  const stage = (x: number, y: number, s: string) => {
    b.rect(x, y, 130, 40, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.55 })
    b.ctext(x + 65, y + 25, s, { size: 12, weight: 700, fill: C.accD })
  }
  stage(60, 716, '质控')
  stage(200, 716, '归一化')
  stage(340, 716, '高变基因')
  stage(480, 716, 'PCA')
  b.arrow(190, 736, 200, 736, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(330, 736, 340, 736, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(470, 736, 480, 736, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(545, 756, 545, 772, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  stage(480, 772, 'UMAP')
  stage(340, 772, '图聚类')
  stage(200, 772, '注释')
  b.arrow(480, 792, 470, 792, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(340, 792, 330, 792, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.wtext(60, 846, '注释三路交叉：标志基因 · 参考映射 · 差异反查；聚类数依赖参数选择而非天然常数。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 890, '批次整合在欠校正与过校正之间权衡——过度校正会抹掉真实生物学差异。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 930, '噪声先于生物学被处理：双联体打分、漏液扣除、应激检查是每张图谱的地基。', { size: 11.5, fill: C.mute, maxW: 600, lh: 16 })

  // ============ 四、拟时序与伪 bulk ============
  b.panel(710, 576, 660, 404, { title: '四、拟时序、RNA 速度与伪 bulk 检验' })
  const path: Array<[number, number]> = [
    [770, 850], [790, 835], [810, 822], [830, 810], [850, 800], [870, 790], [890, 778],
    [910, 768], [930, 758], [950, 748], [970, 738], [990, 728], [1010, 718], [1030, 710],
  ]
  const jitter: Array<[number, number]> = [
    [800, 845], [860, 810], [920, 780], [980, 745], [1040, 725], [840, 795], [900, 760], [760, 862],
  ]
  jitter.forEach(([x, y]) => b.circle(x, y, 5, { fill: C.acc, fillOp: 0.5 }))
  path.forEach(([x, y], i) => b.circle(x, y, 5, { fill: C.acc, fillOp: 0.75 }))
  b.spline(path, { stroke: C.enz, sw: 3, marker: 'enz' })
  b.arrow(830, 810, 852, 797, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(900, 770, 922, 758, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(970, 740, 992, 728, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.text(770, 892, '拟时序：轨迹的拓扑次序（非钟表时间）', { size: 11.5, weight: 700, fill: C.enzD })
  b.text(770, 916, 'RNA 速度：以未剪接 / 剪接比例补充方向', { size: 11.5, weight: 700, fill: C.rnaD })
  b.text(1140, 626, '伪 bulk：回到样本级检验', { size: 13, weight: 700, fill: C.ink })
  b.wtext(1140, 652, '细胞不是独立重复——按样本聚合回伪 bulk 再做检验，每组仍需 3 个以上供体。', { size: 11, fill: C.sub, maxW: 220, lh: 15 })
  b.wtext(1140, 736, '批次整合的权衡：欠校正留批次假象，过校正抹掉真实差异。', { size: 11, fill: C.sub, maxW: 220, lh: 15 })
  b.wtext(740, 952, '一图两读：点的次序是拟时序，箭头的方向是 RNA 速度。', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '单细胞转录组：均值遮罩的解耦、UMI 去重与伪 bulk 检验',
  subtitle: 'bulk 均值无法区分「细胞比例 20%→35%」与「该类型自身表达上调」，单细胞测序使二者解耦并照亮稀有细胞群；10x 液滴以细胞条形码凝胶珠封装细胞，UMI 给每条原始分子发身份证、同 UMI 去重只计一次，掉落使计数零膨胀；双联体与漏液是两类技术噪声；标准流水线为质控-归一化-高变基因-PCA-UMAP-图聚类-注释；拟时序度量轨迹拓扑次序，RNA 速度以未剪接比例补充方向；伪 bulk 把检验单位收回样本级——每组仍需三个以上供体',
  draw,
})
