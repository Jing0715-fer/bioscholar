// ne ch2-s3 静息膜电位 / Goldman-Hodgkin-Katz 方程与离子通透性（39-h 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、GHK 方程与代入计算 ============
  b.panel(30, 132, 700, 430, { title: '一、GHK 方程：按通透性加权的折中值' })
  b.rect(60, 176, 640, 66, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.ctext(380, 200, 'V_m = 61.5·log₁₀[ (P_K·Kₒ + P_Na·Naₒ + P_Cl·Clᵢ) / (P_K·Kᵢ + P_Na·Naᵢ + P_Cl·Clₒ) ]', { size: 13, weight: 700, fill: C.ink })
  b.ctext(380, 228, 'Cl⁻ 为阴离子：分子取胞内、分母取胞外——内外对调是 GHK 最常见的失分点', { size: 11, fill: C.sub })
  const steps: Array<[number, string]> = [
    [268, '① 相对通透性：P_K : P_Na : P_Cl ≈ 1 : 0.04 : 0.45'],
    [318, '② 分子 = 1×5 + 0.04×145 + 0.45×10 ≈ 15.3；分子 / 分母 ≈ 0.080'],
    [368, '③ V_rest = 61.5 × log₁₀(0.080) ≈ −67 mV（实测 −65 ～ −70 mV ✓）'],
  ]
  steps.forEach(([y, s]) => {
    b.rect(60, y, 640, 42, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.4, rx: 8 })
    b.text(76, y + 26, s, { size: 12.5, weight: 600, fill: C.ink })
  })
  // 加权电池图
  b.ctext(300, 432, '按通透性加权：并联的三枚电池', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(185, 448, 'E_K ≈ −90', { size: 11.5, weight: 700, fill: C.dnaD })
  b.rect(150, 454, 70, 76, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 4 })
  b.ctext(295, 448, 'E_Cl ≈ −64', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(260, 496, 70, 34, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(405, 448, 'E_Na ≈ +60', { size: 11.5, weight: 700, fill: C.bad })
  b.rect(370, 524, 70, 6, { fill: '#fee2e2', stroke: C.bad, sw: 1.6, rx: 3 })
  b.line(130, 532, 460, 532, { stroke: C.faint, sw: 1.6 })
  b.ctext(185, 550, 'P_K = 1', { size: 11, fill: C.sub })
  b.ctext(295, 550, 'P_Cl = 0.45', { size: 11, fill: C.sub })
  b.ctext(405, 550, 'P_Na = 0.04', { size: 11, fill: C.sub })
  b.arrow(452, 492, 492, 492, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.tag(566, 492, 'V_rest ≈ −67 mV', { fill: C.okL, stroke: C.ok, size: 13, weight: 700, tfill: '#065f46', pad: 11 })
  b.wtext(476, 518, '加权折中、靠近 E_K：与实测相当吻合。', { size: 10.5, fill: C.sub, maxW: 200, lh: 14 })

  // ============ 二、两式对照 ============
  b.panel(740, 132, 630, 430, { title: '二、Nernst 方程 vs GHK 方程：一表看清两式' })
  b.table(770, 200, 570, {
    headers: ['项目', 'Nernst 方程', 'GHK 方程'],
    colW: [100, 220, 250],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['提出背景', '单离子膜的平衡条件', '1943 恒定电场近似；1949 年 Hodgkin & Katz 用于神经与肌膜'],
      ['适用情形', '净流为零 / 单离子通透', '多离子稳态膜电位'],
      ['输入量', '单一离子的浓度比', '各离子浓度 + 相对通透性 P'],
      ['输出', '该离子的平衡电位 E', '静息膜电位 V_rest'],
      ['Cl⁻ 项', '按定义直接代入', '内外浓度对调（阴离子价态）'],
    ],
  })
  b.rect(770, 494, 570, 56, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.4, rx: 8 })
  b.wtext(790, 514, '电导表述互为表里：V_m ≈ Σg·E / Σg。静息 g_K 最大 → 电位负；动作电位上升相 g_Na 骤增 → 电位滑向 E_Na（约 +60 mV）——「兴奋性的种子」。', { size: 11.5, fill: C.sub, maxW: 534, lh: 16 })

  // ============ 三、Cl⁻ 的角色 ============
  b.panel(30, 576, 1340, 402, { title: '三、Cl⁻ 的角色：锚与舵——分流抑制与 E_Cl 的位置' })
  b.ctext(220, 636, '分流抑制（shunting inhibition）', { size: 13, weight: 700, fill: C.ink })
  b.legend(84, 676, [['Cl⁻ 通道关闭', C.dna], ['开放（分流）', C.bad]], { size: 11, gap: 12 })
  b.axis(80, 880, 280, 190, {
    xlabel: '时间',
    ylabel: 'EPSP',
    xticks: [[0.12, ''], [0.5, '刺激'], [0.9, '']],
    yticks: [[0.1, '0'], [0.9, '大']],
    grid: false,
  })
  b.curve(80, 880, 280, 190, [
    [0.08, 0.05], [0.2, 0.52], [0.35, 0.72], [0.5, 0.55], [0.7, 0.3], [0.9, 0.12], [1.0, 0.05],
  ], { stroke: C.dna, sw: 2.6, smooth: true })
  b.curve(80, 880, 280, 190, [
    [0.08, 0.04], [0.2, 0.27], [0.35, 0.37], [0.5, 0.29], [0.7, 0.17], [0.9, 0.07], [1.0, 0.04],
  ], { stroke: C.bad, sw: 2.4, dash: '6 4', smooth: true })
  b.wtext(80, 944, 'E_Cl ≈ V_rest：开放 Cl⁻ 通道几乎不改 V_m，却增大总电导——突触电流被「短路」，EPSP 被压小。', { size: 11, fill: C.sub, maxW: 420, lh: 15 })

  b.ctext(1000, 636, 'KCC2 与 NKCC1：把 E_Cl 写到静息的哪一侧', { size: 13, weight: 700, fill: C.ink })
  b.rect(660, 656, 330, 156, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(680, 684, 'KCC2：排出 Cl⁻', { size: 14, weight: 700, fill: C.dnaD })
  b.wtext(680, 710, '胞内 Cl⁻ ↓ → E_Cl 比 V_rest 更负；Cl⁻ 内流 → 超极化，抑制更稳。', { size: 11.5, fill: C.sub, maxW: 292, lh: 17 })
  b.rect(1020, 656, 330, 156, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(1040, 684, 'NKCC1：摄入 Cl⁻', { size: 14, weight: 700, fill: '#92400e' })
  b.wtext(1040, 710, '胞内 Cl⁻ ↑ → E_Cl 抬到 V_rest 之上；Cl⁻ 外流 → 去极化（发育期常见）。', { size: 11.5, fill: C.sub, maxW: 292, lh: 17 })
  // E_Cl 位置数轴
  b.line(700, 872, 1300, 872, { stroke: C.sub, sw: 2 })
  const ticks2: Array<[number, string]> = [[830, 'E_Cl 更负'], [1000, 'V_rest ≈ −70 mV'], [1170, 'E_Cl 变正']]
  ticks2.forEach(([tx, lab]) => {
    b.line(tx, 866, tx, 878, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx, 896, lab, { size: 11, fill: C.mute })
  })
  b.arrow(992, 848, 842, 848, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(915, 840, 'KCC2', { size: 10.5, weight: 700, fill: C.dnaD })
  b.arrow(1008, 848, 1158, 848, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(1083, 840, 'NKCC1', { size: 10.5, weight: 700, fill: '#92400e' })
  b.wtext(660, 930, '逆转电位是通透性的实验探针：改变膜对某离子的通透并测逆转电位，即可反推该离子的胞内浓度——E_Cl 的位置由 KCC2 / NKCC1 写定。', { size: 11.5, fill: C.sub, maxW: 690, lh: 16 })
}

export default scene({
  title: 'GHK 方程与离子通透性：静息电位是靠近 E_K 的加权折中',
  subtitle: '1943 年恒定电场近似、1949 年 Hodgkin & Katz 用于神经与肌膜；P_K:P_Na:P_Cl ≈ 1:0.04:0.45，代入经典浓度得 V_rest ≈ −67 mV，与实测 −65 ～ −70 mV 吻合；电导式 V_m ≈ Σg·E/Σg 与之互为表里；Cl⁻ 近被动分布（E_Cl ≈ V_rest），开放氯通道产生分流抑制，KCC2/NKCC1 决定 E_Cl 相对静息的位置',
  draw,
})
