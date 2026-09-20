// ne ch4-s3 突触与突触传递 / 突触后电位与整合（39-h 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、EPSP 与 IPSP ============
  b.panel(30, 132, 700, 430, { title: '一、EPSP 与 IPSP：突触后的两种货币' })
  b.axis(120, 430, 500, 250, {
    grid: false,
    xlabel: '时间',
    xticks: [[0.08, '刺激 ①（兴奋性）'], [0.42, '刺激 ②（抑制性）']],
    yticks: [[0.1, '−80'], [0.35, '−75'], [0.6, '−70'], [0.85, '−65']],
  })
  b.ctext(74, 305, '膜电位/mV', { size: 13.5, weight: 600, fill: C.sub })
  // E_Cl 去向带
  b.rect(120, 305, 500, 125, { fill: C.accL, fillOp: 0.15, stroke: 'none' })
  b.ctext(430, 385, 'IPSP 的去向：E_Cl ≈ −70 ～ −80 mV', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(430, 372, 430, 356, { stroke: C.acc, sw: 1.4, marker: 'acc' })
  // EPSP（小凸起）
  b.curve(120, 430, 500, 250, [
    [0.08, 0.6], [0.14, 0.66], [0.2, 0.655], [0.3, 0.63], [0.42, 0.6], [0.6, 0.6],
  ], { stroke: C.bad, sw: 2.6, smooth: true })
  b.text(236, 252, '单个 EPSP 仅 0.5–1 mV', { size: 11.5, weight: 700, fill: C.bad })
  b.arrow(300, 258, 240, 270, { stroke: C.bad, sw: 1.3, marker: 'bad' })
  // IPSP（向 E_Cl 下沉）
  b.curve(120, 430, 500, 250, [
    [0.42, 0.6], [0.52, 0.35], [0.62, 0.3], [0.78, 0.42], [1.0, 0.55],
  ], { stroke: C.acc, sw: 2.6, smooth: true })
  b.text(390, 234, 'IPSP：向 E_Cl 靠拢', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(70, 500, '中枢单个 EPSP 仅约 0.5–1 mV，与阈值差一个数量级：自 −70 抵达 −55 需 +15 mV，须数十个量子在数毫秒内同步，或同一输入数十 Hz 连发、由时间总和积攒。IPSP 由 GABA（GABA_A 氯通道）或甘氨酸介导，多为超极化或「钉住不动」。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、反转电位 ============
  b.panel(740, 132, 630, 430, { title: '二、反转电位 E_rev：电流方向的试金石' })
  b.axis(830, 480, 420, 280, {
    grid: false,
    xlabel: '膜电位 V_m（mV）',
    xticks: [[0.1875, '−70'], [0.625, '0'], [0.8125, '+30']],
    yticks: [[0.15, '内向'], [0.5, '0'], [0.85, '外向']],
  })
  b.ctext(784, 300, '突触电流', { size: 13.5, weight: 600, fill: C.sub })
  b.line(830, 340, 1250, 340, { stroke: C.faint, sw: 1.3, dash: '5 5' })
  b.curve(830, 480, 420, 280, [[0.05, 0.86], [0.625, 0.5], [0.95, 0.27]], { stroke: C.bad, sw: 2.4 })
  b.circle(1093, 340, 5, { fill: C.bad })
  b.ctext(1120, 300, 'E_rev(AMPA) ≈ 0 mV', { size: 11.5, weight: 700, fill: C.bad })
  b.curve(830, 480, 420, 280, [[0.05, 0.34], [0.1875, 0.5], [0.6, 0.72]], { stroke: C.acc, sw: 2.4 })
  b.circle(909, 340, 5, { fill: C.acc })
  b.text(920, 372, 'E_rev(GABA_A) ≈ E_Cl', { size: 11.5, weight: 700, fill: C.accD })
  b.legend(840, 218, [['AMPA 电流（Na^{+} 与 K^{+} 混透）', C.bad], ['GABA_A 电流（Cl^{-}）', C.acc]], { size: 11, gap: 14 })
  b.wtext(770, 544, 'E_rev 为各离子电池按电导的加权平均；V_m 在 E_rev 之上或之下，电流方向随之翻转。', { size: 11.5, fill: C.sub, maxW: 580, lh: 16 })

  // ============ 三、总和与 AIS ============
  b.panel(30, 576, 1340, 402, { title: '三、时间与空间总和、轴突起始段的终审' })
  b.ctext(240, 636, '时间总和：τ ≈ 5–20 ms 的限窗', { size: 13, weight: 700, fill: C.ink })
  b.axis(90, 880, 300, 210, {
    grid: false,
    xticks: [[0.08, ''], [0.5, '时间 →'], [0.95, '']],
    yticks: [[0.1, '−70'], [0.9, '阈值']],
  })
  b.line(90, 691, 390, 691, { stroke: C.bad, sw: 1.3, dash: '6 5' })
  b.curve(90, 880, 300, 210, [
    [0, 0.1], [0.06, 0.1], [0.1, 0.3], [0.16, 0.24], [0.22, 0.42], [0.28, 0.38],
    [0.34, 0.56], [0.4, 0.52], [0.46, 0.7], [0.52, 0.67], [0.58, 0.85], [0.62, 0.95],
    [0.7, 0.8], [0.85, 0.5], [1.0, 0.3],
  ], { stroke: C.dna, sw: 2.4, smooth: true })
  b.curve(90, 880, 300, 210, [
    [0, 0.1], [0.08, 0.1], [0.12, 0.28], [0.2, 0.18], [0.3, 0.13], [0.4, 0.11],
    [0.45, 0.3], [0.55, 0.2], [0.7, 0.14], [1.0, 0.1],
  ], { stroke: C.acc, sw: 2.2, smooth: true })
  b.text(310, 664, '数十 Hz 连发 → 叠加达阈', { size: 11, weight: 700, fill: C.dnaD })
  b.text(320, 830, '低频 → 各自衰减', { size: 11, weight: 700, fill: C.accD })
  b.wtext(90, 944, '同一输入数十 Hz 连发，EPSP 落在前一衰减尾巴上——积少成多；须数十个量子同步方能抵达阈值。', { size: 11, fill: C.sub, maxW: 340, lh: 15 })

  b.ctext(640, 636, '空间总和：电缆衰减定权重', { size: 13, weight: 700, fill: C.ink })
  b.line(470, 716, 762, 716, { stroke: C.sub, sw: 3.5 })
  b.circle(790, 716, 27, { fill: C.bg, stroke: C.ink, sw: 2.2 })
  b.circle(790, 716, 10, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.arrow(520, 686, 520, 710, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(615, 674, 615, 710, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.arrow(710, 662, 710, 710, { stroke: C.rna, sw: 3, marker: 'rna' })
  b.ctext(520, 654, '远端 · 衰减多', { size: 10.5, weight: 700, fill: C.mute })
  b.ctext(710, 654, '近端 · 衰减少', { size: 10.5, weight: 700, fill: C.rnaD })
  b.wtext(470, 770, '抑制的解剖位置本身就是计算变量：放在树突只压局部，放在胞体压全局；吊灯细胞的轴-轴突突更直接把守 AIS 闸门。', { size: 11, fill: C.sub, maxW: 330, lh: 15 })
  b.line(817, 716, 872, 716, { stroke: C.ink, sw: 2.4 })
  b.rect(830, 704, 26, 24, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 4 })
  b.ctext(843, 692, 'AIS', { size: 11, weight: 700, fill: C.bad })
  b.ctext(800, 748, 'Nav 密度最高 · 阈值最低', { size: 10.5, fill: C.sub })

  b.ctext(1110, 636, '中枢 vs NMJ：两副面孔', { size: 13, weight: 700, fill: C.ink })
  b.table(880, 660, 460, {
    headers: ['项目', '中枢化学突触', '神经肌肉接头'],
    colW: [90, 190, 180],
    rowH: 38,
    fontSize: 12,
    rows: [
      ['单个反应', 'EPSP 0.5–1 mV', '终板电位 50–70 mV'],
      ['信号哲学', '概率性 · 精于计算', '确定性 · 安全系数约 2–4'],
      ['突触延迟', '约 0.5 ms', '约 0.5 ms'],
    ],
  })
  b.wtext(880, 848, '中枢单个 EPSP 与阈值差一个数量级，失败与涨落常在；NMJ 以 50–70 mV 终板电位与约 2–4 的安全系数换取确定性——同一化学，两副面孔。', { size: 11.5, fill: C.sub, maxW: 450, lh: 16 })
}

export default scene({
  title: '突触后电位与整合：EPSP/IPSP、反转电位与总和',
  subtitle: '中枢单个 EPSP 约 0.5–1 mV（AMPA 的 E_rev 约 0 mV），自 −70 抵达 −55 需数十个量子同步或数十 Hz 连发；IPSP 由 GABA_A/甘氨酸介导、向 E_Cl（约 −70 ～ −80 mV）靠拢；多离子通道 E_rev 为各离子电池按电导的加权平均；时间总和受 τ ≈ 5–20 ms 限窗，空间总和权重由树突电缆衰减决定；AIS 的 Nav 密度最高、阈值最低，是放电终审位；化学突触延迟约 0.5 ms，NMJ 以 50–70 mV 终板电位与安全系数约 2–4 换取确定性',
  draw,
})
