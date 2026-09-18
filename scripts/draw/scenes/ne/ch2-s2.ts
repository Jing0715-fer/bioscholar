// ne ch2-s2 静息膜电位 / Nernst 方程与平衡电位（39-h 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、方程与心算尺 ============
  b.panel(30, 132, 700, 430, { title: '一、Nernst 方程与「十倍一档」心算尺' })
  b.rect(60, 176, 640, 64, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.ctext(380, 202, 'E_ion = (RT / zF) · ln（胞外浓度 / 胞内浓度）', { size: 17.5, weight: 700, fill: C.ink })
  b.ctext(380, 228, '37 ℃：RT/F ≈ 26.7 mV；换以 10 为底——单价离子每十倍浓度差对应 61.5 mV', { size: 11.5, fill: C.sub })

  // 平衡电位数轴（1 px = 1 mV）
  b.line(170, 268, 170, 512, { stroke: C.sub, sw: 2 })
  const mark = (y: number, lab: string) => {
    b.line(164, y, 170, y, { stroke: C.sub, sw: 1.6 })
    b.etext(158, y + 4, lab, { size: 11, fill: C.mute })
  }
  mark(280, '+130'); mark(350, '+60'); mark(410, '0'); mark(500, '−90')
  b.ctext(170, 538, '平衡电位（mV）', { size: 11.5, fill: C.mute })
  // 各离子平衡电位标签
  b.line(176, 280, 250, 280, { stroke: C.pro, sw: 1.6, dash: '5 4' })
  b.tag(340, 280, 'E_Ca ≈ +130 mV', { fill: C.proL, stroke: C.pro, size: 12.5, weight: 700, tfill: C.proD })
  b.line(176, 350, 250, 350, { stroke: C.bad, sw: 1.6, dash: '5 4' })
  b.tag(340, 350, 'E_Na ≈ +60 mV', { fill: '#fee2e2', stroke: C.bad, size: 12.5, weight: 700, tfill: C.bad })
  b.line(176, 474, 204, 474, { stroke: C.acc, sw: 1.6, dash: '5 4' })
  b.tag(352, 474, 'E_Cl ≈ −64 mV（与静息相当）', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD })
  b.line(176, 500, 250, 500, { stroke: C.dna, sw: 1.6, dash: '5 4' })
  b.tag(340, 500, 'E_K ≈ −90 mV', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD })
  // 150 mV 跨度标注
  b.line(200, 350, 200, 500, { stroke: C.mute, sw: 1.6, marker: 'mute', markerStart: 'mute' })
  b.text(212, 420, '150 mV', { size: 11, weight: 700, fill: C.mute })
  b.text(212, 436, '≈2.4 个十倍档', { size: 10.5, fill: C.mute })
  // 右侧说明
  b.wtext(490, 286, '十倍一档：浓度差每差一个数量级，平衡电位移动 61.5 mV（25 ℃ 时约 59 mV）。二价离子减半：每十倍仅移 30.75 mV。', { size: 11.5, fill: C.sub, maxW: 220, lh: 17 })
  b.ctext(380, 548, 'E_K = 61.5×log₁₀(5/140) ≈ −90 mV；E_Na = 61.5×log₁₀(145/15) ≈ +60 mV', { size: 11.5, fill: C.sub })

  // ============ 二、四大离子对照表 ============
  b.panel(740, 132, 630, 430, { title: '二、四大离子的平衡电位、驱动力与意义' })
  b.table(770, 200, 570, {
    headers: ['离子', '浓度比（外/内）', '平衡电位', '静息驱动力', '生理意义'],
    colW: [62, 118, 100, 112, 178],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['K⁺', '5 / 140', '≈ −90 mV', '+20 mV 外向', '静息电位之锚'],
      ['Na⁺', '145 / 15', '≈ +60 mV', '−130 mV 内向', '动作电位超射的靶位'],
      ['Cl⁻', '近被动分布', '≈ −64 mV', '≈ 0', '与静息相当；分流抑制'],
      ['Ca²⁺', '悬殊（10⁴ 倍级）', '≈ +130 mV', '逾 −200 mV', '势能最饱满的信号离子'],
    ],
  })
  b.rect(770, 452, 570, 82, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(790, 476, '失分点提示：E_Cl 的 z = −1，代入 Nernst 时符号翻转（阴离子内外项对调）；E_Ca 为二价，每十倍浓度差仅移动 30.75 mV。', { size: 11.5, fill: C.sub, maxW: 534, lh: 17 })

  // ============ 三、实验检验 ============
  b.panel(30, 566, 1340, 412, { title: '三、实验检验：改变胞外钾浓度——理论线与实测的分歧' })
  b.axis(190, 900, 720, 290, {
    xlabel: '胞外 K⁺ 浓度（mM，对数刻度）',
    ylabel: 'E_K（mV）',
    xticks: [[0, '1'], [0.37, '10'], [0.74, '100'], [1.0, '500']],
    yticks: [[0, '−140'], [0.278, '−90'], [0.556, '−40'], [1.0, '+40']],
  })
  // Nernst 理论线
  b.curve(190, 900, 720, 290, [
    [0, 0.017], [0.177, 0.183], [0.37, 0.353], [0.557, 0.522], [0.74, 0.694], [0.914, 0.864], [1.0, 0.961],
  ], { stroke: C.dna, sw: 2.8 })
  b.text(660, 626, 'Nernst 理论线', { size: 12.5, weight: 700, fill: C.dnaD })
  b.text(660, 644, '（斜率 61.5 mV / 十倍）', { size: 11, fill: C.dnaD })
  // 实测线（低钾段偏离）
  b.curve(190, 900, 720, 290, [
    [0, 0.29], [0.09, 0.285], [0.177, 0.30], [0.37, 0.36], [0.557, 0.52], [0.74, 0.69], [1.0, 0.955],
  ], { stroke: C.bad, sw: 2.4, dash: '7 5', smooth: true })
  b.ctext(316, 856, '实测 E_K：低钾段抬离理论线', { size: 11.5, weight: 700, fill: C.bad })
  b.arrow(298, 846, 244, 824, { stroke: C.bad, sw: 1.4, marker: 'bad' })
  // 静息参考线
  b.line(190, 787, 910, 787, { stroke: C.mute, sw: 1.3, dash: '6 5', opacity: 0.85 })
  b.etext(902, 781, 'V_rest = −70 mV', { size: 10.5, weight: 700, fill: C.mute })
  b.wtext(240, 872, '低钾段：Na⁺ 漏电流与泵电流掺入，实测点高于理论线；高钾段：K⁺ 通透占绝对优势，实测贴合 Nernst 斜率。', { size: 11, fill: C.sub, maxW: 340, lh: 15 })
  // 右侧：临床 + 须知
  b.rect(960, 616, 380, 128, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(980, 644, '临床警示：高钾血症', { size: 14.5, weight: 700, fill: C.bad })
  b.wtext(980, 668, '胞外 K⁺ 升高 → E_K 抬高（变正）→ 心肌静息膜去极化 → 兴奋性与传导异常 → 心律失常。', { size: 11.5, fill: C.sub, maxW: 344, lh: 17 })
  b.wtext(960, 772, '使用须知：Nernst 只适用于净流为零或单离子通透的情形；应代入活度而非浓度；数值随温度与浓度变化。', { size: 11.5, fill: C.sub, maxW: 390, lh: 17 })
  b.legend(960, 856, [['Nernst 理论线', C.dna], ['实测 E_K', C.bad]], { size: 12, gap: 18 })
}

export default scene({
  title: 'Nernst 方程与平衡电位：十倍一档的心算尺及其检验',
  subtitle: 'E = (RT/zF)·ln(外/内)；37 ℃ 单价离子每十倍浓度差对应 61.5 mV；E_K = 61.5×log₁₀(5/140) ≈ −90 mV、E_Na ≈ +60 mV、E_Cl ≈ −64 mV、E_Ca ≈ +130 mV（二价每十倍 30.75 mV）；高钾段实测贴合理论斜率，低钾段因钠漏与泵偏离；高钾血症抬高 E_K 致心律失常',
  draw,
})
