// vi ch9-s2 一步生长曲线与感染动力学（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Ellis 与 Delbrück 的实验设计 ============
  b.panel(30, 132, 660, 430, { title: '一、Ellis 与 Delbrück（1939）：同步感染＋大规模稀释' })
  const steps: [string, string][] = [
    ['同步感染', '全部细胞同一时刻吸附'],
    ['大规模稀释', '终止再感染，一步化'],
    ['定时取样', '感染后逐分钟取样'],
    ['蚀斑计数', '读出每细胞 PFU'],
  ]
  steps.forEach(([t, s], i) => {
    const bx = 56 + i * 161
    b.rect(bx, 208, 136, 66, { fill: C.panelB, stroke: C.acc, sw: 1.8, rx: 9 })
    b.ctext(bx + 68, 234, t, { size: 13.5, weight: 700, fill: C.accD })
    b.ctext(bx + 68, 256, s, { size: 9.5, fill: C.mute })
    if (i < 3) b.arrow(bx + 138, 241, bx + 159, 241, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  })
  b.ctext(360, 306, '让每一只菌都「同时开跑」——群体平均值才配得上「一步」二字', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(56, 336, 286, 84, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8, fillOp: 0.6 })
  b.ctext(199, 362, '吸附后的感染细胞', { size: 11.5, weight: 700, fill: C.dnaD })
  b.wtext(72, 384, '取样时未裂解者整斑计数（感染中心），裂解者按释放子代计数', { size: 9.5, fill: C.sub, maxW: 254, lh: 13 })
  b.rect(356, 336, 286, 84, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8, fillOp: 0.6 })
  b.ctext(499, 362, '「噬菌体从何而来」', { size: 11.5, weight: 700, fill: C.rnaD })
  b.wtext(372, 384, '1939 年《普通生理学杂志》把含混争论变成可以定量回答的问题', { size: 9.5, fill: C.sub, maxW: 254, lh: 13 })
  b.wtext(50, 452, '一步生长实验的灵魂是两条控制：同步（同一时刻感染）与稀释（排除二次感染）——由此平均曲线才可解读为单细胞事件的统计叠加。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 494, '加州理工学院的这一设计，让「数量」自此成为噬菌体研究的通用语言。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、一步生长曲线：潜伏期、隐蔽期与裂解量 ============
  b.panel(710, 132, 660, 430, { title: '二、一步生长曲线（T4，37 °C）：三个经典读数' })
  const ax = 766, ay = 424, aw = 520, ah = 240
  b.axis(ax, ay, aw, ah, {
    xlabel: '感染后时间（分钟）',
    xticks: [[0, '0'], [0.24, '12'], [0.46, '23'], [0.68, '34'], [1, '50']],
    yticks: [[0, '0'], [0.5, '100'], [1, '200']], grid: true,
  })
  // 实线：培养液直接计数（一步生长曲线）
  b.curve(ax, ay, aw, ah, [[0, 0.005], [0.46, 0.005], [0.5, 0.06], [0.56, 0.45], [0.62, 0.72], [0.68, 0.78], [1, 0.78]], { stroke: C.acc, sw: 3, smooth: true })
  // 虚线：提前裂解的胞内侵染性（Doermann）
  b.curve(ax, ay, aw, ah, [[0, 0], [0.24, 0], [0.3, 0.1], [0.4, 0.42], [0.46, 0.62], [0.56, 0.75], [0.68, 0.78], [1, 0.78]], { stroke: C.rna, sw: 2.6, dash: '7 5', smooth: true })
  // 阶段标注线
  b.line(ax + 0.24 * aw, ay - 4, ax + 0.24 * aw, ay - ah + 18, { stroke: C.bad, sw: 1.6, dash: '4 4' })
  b.line(ax + 0.46 * aw, ay - 4, ax + 0.46 * aw, ay - ah + 18, { stroke: C.acc, sw: 1.6, dash: '4 4' })
  b.line(ax + 0.68 * aw, ay - 4, ax + 0.68 * aw, ay - ah + 18, { stroke: C.mute, sw: 1.6, dash: '4 4' })
  b.tag(ax + 0.11 * aw, ay - ah + 44, '隐蔽期 ≈12 min', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  b.tag(ax + 0.46 * aw, ay - ah + 44, '潜伏期 21–25 min', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
  b.tag(ax + 0.55 * aw, ay - 26, '上升期（十余分钟）', { fill: C.panelB, stroke: C.sub, size: 10.5, weight: 700, tfill: C.sub, pad: 7 })
  b.ctext(ax + 0.85 * aw, ay - 0.92 * ah, '平台＝平均裂解量 100–200', { size: 11.5, weight: 700, fill: C.accD })
  b.legend(726, 486, [['一步生长（培养液计数）', C.acc], ['胞内侵染性（提前裂解）', C.rna]], { size: 10.5 })
  b.wtext(726, 508, 'Doermann 于 1940 年代末以氯仿或氰化物提前裂解感染细胞：潜伏期前半程约 12 分钟内测不到任何侵染性颗粒——胞内子代从无到有、再近乎线性累积。纵轴为每细胞侵染性（PFU）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、单次裂解分析：平均数背后的宽分布 ============
  b.panel(30, 586, 660, 394, { title: '三、单次裂解分析：平均数背后的宽分布' })
  b.ctext(220, 636, '单个细胞的裂解量分布（示意）', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(220, 654, '跨近一个数量级：从数十到数百', { size: 10, weight: 700, fill: C.bad })
  const bins = [2, 6, 11, 15, 14, 9, 5, 2]
  const bl = ['20', '40', '60', '80', '100', '130', '170', '220']
  b.bars(70, 872, 300, 190, bins, { labels: bl, fill: C.rnaL, stroke: C.rna, max: 17 })
  b.ctext(220, 918, '每细胞裂解量', { size: 11, fill: C.mute })
  b.ctext(510, 636, '上升期＝个体裂解时刻的统计叠加', { size: 11.5, weight: 700, fill: C.accD })
  b.axis(400, 872, 240, 190, { xticks: [[0, '20'], [0.5, '28'], [1, '36 min']], yticks: [[0, '0']], grid: false })
  b.curve(400, 872, 240, 150, [[0, 0.02], [0.2, 0.14], [0.35, 0.5], [0.5, 0.85], [0.65, 0.5], [0.85, 0.12], [1, 0.02]], { stroke: C.acc, sw: 2.4, smooth: true })
  b.ctext(520, 702, '裂解时刻（分布紧凑）', { size: 9.5, fill: C.acc })
  b.curve(400, 872, 240, 190, [[0, 0.01], [0.25, 0.02], [0.45, 0.12], [0.6, 0.55], [0.75, 0.9], [0.9, 1], [1, 1]], { stroke: C.dna, sw: 2.4, dash: '6 4', smooth: true })
  b.ctext(520, 942, '累计释放曲线（平滑上升）', { size: 9.5, fill: C.dna })
  b.wtext(50, 958, '把培养物极端稀释至每管至多一个感染细胞：个体裂解量差异跨近一个数量级；「平滑上升期」其实是无数离散裂解事件的叠加。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、现代单细胞验证与演化读数 ============
  b.panel(710, 586, 660, 394, { title: '四、现代单细胞验证：母机与荧光报告噬菌体' })
  b.ctext(863, 648, '微流控「母机」：单细胞谱系逐代追踪', { size: 11, weight: 700, fill: C.ink })
  b.rect(738, 668, 250, 150, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  for (let i = 0; i < 5; i++) {
    const cy = 688 + i * 26
    b.rect(750, cy - 7, 216, 14, { fill: 'none', stroke: C.dna, sw: 1.2, rx: 4 })
    if (i === 1) {
      b.rect(758, cy - 5, 42, 10, { fill: C.badL, stroke: C.bad, sw: 1.2, rx: 5 })
      b.ctext(886, cy + 4, '← 已裂解空通道', { size: 9, fill: C.bad })
    } else {
      b.rect(758, cy - 5, 34, 10, { fill: C.dnaL, stroke: C.dna, sw: 1.2, rx: 5 })
      b.rect(798, cy - 5, 34, 10, { fill: C.dnaL, stroke: C.dna, sw: 1.2, rx: 5 })
      if (i === 3) b.ctext(886, cy + 4, '← 荧光报告噬菌体标记', { size: 9, fill: C.accD })
    }
  }
  b.ctext(863, 840, '潜伏期分布紧凑、裂解量近似对数正态', { size: 10.5, fill: C.sub })
  b.ctext(1155, 648, '曲线之外：裂解时刻的适应度权衡', { size: 11.5, weight: 700, fill: C.ink })
  b.axis(1040, 850, 230, 150, { xticks: [[0, '早'], [0.5, '中'], [1, '晚']], yticks: [[0, '0']], grid: false })
  b.curve(1040, 850, 230, 150, [[0, 0.1], [0.5, 0.55], [1, 0.95]], { stroke: C.rna, sw: 2.4, smooth: true, label: '裂解量', labelAt: [0.84, 0.76] })
  b.curve(1040, 850, 230, 150, [[0, 0.25], [0.35, 0.8], [0.5, 0.62], [0.75, 0.3], [1, 0.12]], { stroke: C.dna, sw: 2.4, smooth: true, label: '传代速率', labelAt: [0.1, 0.74] })
  b.ctext(1155, 892, '早裂量少、晚裂误期——适应性居中（示意）', { size: 10, fill: C.mute })
  b.wtext(1000, 918, '单细胞方法把「平均读数」还原为可遗传、可选择的生活史参数——裂解时刻与裂解量都在自然选择之下。', { size: 10.5, fill: C.sub, maxW: 340, lh: 15 })
}

export default scene({
  title: '一步生长曲线与感染动力学：同步、稀释与三个读数',
  subtitle: 'T4（37 °C）潜伏期 21–25 min、上升期十余分钟、平均裂解量 100–200；Doermann 隐蔽期约 12 min；单细胞裂解量跨近一个数量级、近似对数正态',
  draw,
})
