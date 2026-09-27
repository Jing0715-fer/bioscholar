// ph ch7-s2 心动周期与心输出量：Wiggers 图、压力-容积环与 Frank-Starling 定律
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Wiggers 图（简化） ============
  b.panel(30, 132, 1340, 350, { title: '一、Wiggers 图（简化）：四条曲线与七时相同步描记（心率 75 次/分，周期 0.8 s）' })
  // 时相分带
  const bands: Array<[number, number, string, string]> = [
    [90, 240, '房收缩', C.proL], [240, 315, '等容收缩', C.warnL], [315, 480, '快速射血', C.badL],
    [480, 645, '减慢射血', C.badL], [645, 735, '等容舒张', C.okL], [735, 840, '快速充盈', C.dnaL],
    [840, 1140, '减慢充盈', C.dnaL], [1140, 1290, '（下一周期）房收缩', C.proL],
  ]
  bands.forEach(([x1, x2, , f]) => b.rect(x1, 175, x2 - x1, 255, { fill: f, fillOp: 0.28, stroke: 'none' }))
  for (const [x1, x2, lb] of bands) b.ctext((x1 + x2) / 2, 448, lb, { size: 9.5, fill: C.sub })
  b.line(90, 430, 1290, 430, { stroke: C.sub, sw: 1.6 })
  // 心室容积曲线（顶部）
  b.polyline([[90, 228], [150, 214], [240, 190], [315, 190], [380, 200], [480, 212], [560, 235], [645, 250], [735, 250], [790, 235], [840, 225], [1140, 218], [1290, 190]], { stroke: C.dna, sw: 2.6 })
  b.text(1000, 208, '心室容积（EDV 125→ESV 55 ml）', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(240, 182, 'EDV', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(690, 268, 'ESV 55 ml', { size: 9.5, weight: 700, fill: C.dnaD })
  // 主动脉压
  b.polyline([[90, 343], [240, 349], [315, 352], [370, 295], [420, 281], [480, 290], [600, 315], [645, 318], [655, 326], [665, 314], [735, 325], [840, 332], [1140, 342], [1290, 343]], { stroke: C.bad, sw: 2.4 })
  b.text(900, 306, '主动脉压 120/80', { size: 10, weight: 700, fill: C.badD })
  b.text(690, 300, '重搏切迹', { size: 9, fill: C.badD })
  // 心室压
  b.polyline([[90, 425], [200, 422], [240, 418], [280, 395], [315, 352], [370, 293], [420, 281], [480, 288], [645, 320], [680, 380], [735, 428], [760, 430], [840, 427], [1140, 424], [1290, 418]], { stroke: C.acc, sw: 2.6 })
  b.ctext(420, 268, '心室压（峰值 ≈120 mmHg）', { size: 10, weight: 700, fill: C.accD })
  // 心房压（幅度放大示意）
  b.polyline([[90, 400], [130, 398], [165, 384], [200, 396], [240, 400], [320, 390], [420, 394], [540, 386], [645, 378], [700, 398], [760, 400], [840, 398], [1140, 396], [1290, 390]], { stroke: C.pro, sw: 1.8 })
  b.text(950, 415, '心房压 a·c·v 波（放大）', { size: 10, weight: 700, fill: C.proD })
  b.ctext(165, 376, 'a', { size: 9, weight: 700, fill: C.proD })
  b.ctext(320, 380, 'c', { size: 9, weight: 700, fill: C.proD })
  b.ctext(645, 368, 'v', { size: 9, weight: 700, fill: C.proD })
  // S1/S2 心音标记
  b.line(240, 175, 240, 430, { stroke: C.bad, sw: 1.2, dash: '5 4' })
  b.line(645, 175, 645, 430, { stroke: C.acc, sw: 1.2, dash: '5 4' })
  b.ctext(240, 470, 'S1 房室瓣关', { size: 10, weight: 700, fill: C.badD })
  b.ctext(645, 470, 'S2 半月瓣关', { size: 10, weight: 700, fill: C.accD })
  b.text(100, 172, '收缩期约 0.3 s ／ 舒张期约 0.5 s——心率增快首先压缩舒张期', { size: 10, fill: C.sub })

  // ============ 二、压力-容积环 ============
  b.panel(30, 502, 660, 250, { title: '二、压力-容积环：心泵的「示功图」' })
  b.arrow(100, 705, 640, 705, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(100, 705, 100, 530, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(110, 545, '心室压 (mmHg)', { size: 10, fill: C.sub })
  b.path('M 187,698 C 260,696 420,692 565,690 L 565,588 C 535,540 480,530 430,550 C 350,568 240,572 187,576 Z', { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 2.6 })
  b.line(187, 705, 187, 570, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.line(565, 705, 565, 686, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.ctext(187, 722, 'ESV 55', { size: 10, fill: C.sub })
  b.ctext(565, 722, 'EDV 125', { size: 10, fill: C.sub })
  b.ctext(370, 720, '心室容积 (ml)', { size: 10, fill: C.sub })
  b.line(195, 660, 557, 660, { marker: 'mute', markerStart: 'mute', stroke: C.mute, sw: 1.4 })
  b.ctext(376, 654, 'SV = 70 ml', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(376, 678, 'EF = SV/EDV ≈ 56%（临床 55%–70%）', { size: 10, fill: C.sub })
  b.text(572, 588, '半月瓣开', { size: 10, fill: C.accD })
  b.text(572, 688, '房室瓣关', { size: 10, fill: C.accD })
  b.text(100, 570, '半月瓣关', { size: 10, fill: C.accD })
  b.text(100, 694, '房室瓣开', { size: 10, fill: C.accD })
  b.circle(376, 691, 10, { fill: '#ffffff', stroke: C.dna, sw: 1.6 })
  b.ctext(376, 695, '①', { size: 9, weight: 700, fill: C.dnaD })
  b.circle(565, 640, 10, { fill: '#ffffff', stroke: C.pro, sw: 1.6 })
  b.ctext(565, 644, '②', { size: 9, weight: 700, fill: C.proD })
  b.circle(450, 552, 10, { fill: '#ffffff', stroke: C.bad, sw: 1.6 })
  b.ctext(450, 556, '③', { size: 9, weight: 700, fill: C.badD })
  b.circle(187, 640, 10, { fill: '#ffffff', stroke: C.ok, sw: 1.6 })
  b.ctext(187, 644, '④', { size: 9, weight: 700, fill: C.okD })
  b.line(187, 576, 640, 542, { stroke: C.enz, sw: 1.4, dash: '6 4' })
  b.text(470, 528, 'ESPVR：收缩性↑ 时左上移', { size: 9.5, weight: 700, fill: C.enzD })
  b.wtext(60, 741, '①充盈 ②等容收缩 ③射血 ④等容舒张｜环面积＝每搏功 ≈0.8 J；高血压/主动脉狭窄使环增高变窄，反流与分流使环变宽', { size: 10, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、Frank-Starling 定律 ============
  b.panel(710, 502, 660, 250, { title: '三、Frank-Starling 定律：异长自身调节' })
  b.arrow(790, 715, 1330, 715, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(790, 715, 790, 545, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.etext(784, 558, 'SV', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(1040, 545, 120, 170, { fill: C.dnaL, fillOp: 0.3, stroke: 'none' })
  b.ctext(1100, 700, '最适初长 2.0–2.2 μm', { size: 10, weight: 700, fill: C.dnaD })
  b.polyline([[800, 708], [880, 690], [960, 660], [1040, 632], [1120, 615], [1200, 605], [1280, 600], [1330, 598]], { stroke: C.dna, sw: 2.6 })
  b.polyline([[820, 660], [900, 625], [980, 595], [1060, 575], [1140, 562], [1220, 555], [1300, 552]], { stroke: C.ok, sw: 2.2, dash: '7 5' })
  b.polyline([[860, 705], [940, 695], [1020, 680], [1100, 665], [1180, 655], [1260, 648]], { stroke: C.bad, sw: 2.2, dash: '7 5' })
  b.text(1150, 545, '运动/儿茶酚胺', { size: 10, weight: 700, fill: C.okD })
  b.text(1270, 588, '正常', { size: 10, weight: 700, fill: C.dnaD })
  b.text(1180, 638, '心力衰竭', { size: 10, weight: 700, fill: C.badD })
  for (const [tx, lb] of [[800, '1.6'], [920, '1.8'], [1040, '2.0'], [1160, '2.2'], [1280, '2.4']] as [number, string][]) {
    b.line(tx, 715, tx, 721, { stroke: C.sub, sw: 1.4 })
    b.ctext(tx, 735, lb, { size: 9.5, fill: C.mute })
  }
  b.ctext(1060, 752, '肌节初长 (μm)', { size: 10, fill: C.sub })
  b.wtext(810, 690, '机制：肌丝最佳重叠＋长度依赖性钙敏；「容量计」而非「油门」——异长调节管匹配，等长调节管动员', { size: 9.5, fill: C.sub, maxW: 215, lh: 14 })
  b.wtext(726, 778, 'Frank（1895 离体蛙心）与 Starling（犬心肺制备）：舒张末容积↑ → 初长↑ → 搏出量↑；心功能曲线与静脉回流曲线交点即平衡工作点（LVEDP 5–10 mmHg、CO ≈5 L/min）', { size: 10, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、心输出量四变量 ============
  b.panel(30, 772, 1340, 200, { title: '四、心输出量的四变量框架与心率的双重神经支配' })
  b.rect(100, 800, 130, 40, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.ctext(165, 824, '心率 HR', { size: 12, weight: 700, fill: C.warnD })
  b.rect(100, 868, 130, 40, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(165, 888, '搏出量 SV', { size: 12, weight: 700, fill: C.accD })
  b.ctext(165, 924, '前负荷·后负荷·收缩性', { size: 9, fill: C.sub })
  b.ctext(255, 855, '×', { size: 18, weight: 700, fill: C.ink })
  b.arrow(240, 820, 300, 840, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(240, 888, 300, 868, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.rect(305, 826, 160, 56, { fill: C.badL, stroke: C.bad, sw: 2, rx: 10 })
  b.ctext(385, 850, 'CO ≈ 5 L/min', { size: 13, weight: 700, fill: C.badD })
  b.ctext(385, 872, '心脏指数 ≈3.0 L/(min·m^{2})', { size: 9.5, fill: C.sub })
  b.wtext(500, 812, '静息迷走张力主导：切断迷走后静息心率立即升至约 100 次/分（窦房结内在频率）；运动先撤迷走、后增交感。后负荷急性↑ → 心室先「胀而后有力」（ESV 一过性↑、SV 暂降，再借 Starling 机制恢复）。', { size: 9.5, fill: C.sub, maxW: 168, lh: 13 })
  // CO-HR 关系小图
  b.arrow(700, 930, 700, 800, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(700, 930, 960, 930, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.polyline([[710, 925], [760, 900], [810, 870], [860, 850], [900, 843], [940, 862], [960, 882]], { stroke: C.dna, sw: 2.4 })
  b.etext(694, 812, 'CO', { size: 10, weight: 700, fill: C.sub })
  b.ctext(830, 948, '心率 (次/分)', { size: 10, fill: C.sub })
  b.text(905, 825, 'HR ≈150–180 峰值', { size: 9.5, weight: 700, fill: C.dnaD })
  b.wtext(1000, 816, '心率过快（>180 次/分）时舒张充盈时间锐减，CO 反而下降——严重心动过速「越快越糟」的原因；dP/dt 对负荷不敏感，是衡量收缩性的经典指标。', { size: 10, fill: C.sub, maxW: 330, lh: 15 })
}

export default scene({
  title: '心动周期与心输出量：Wiggers 图、压力-容积环与心的定律',
  subtitle: '周期 0.8 s 七时相；EDV 125 ml、ESV 55 ml、SV 70 ml、EF 55%–70%、CO = HR×SV ≈5 L/min；Frank-Starling 最适初长 2.0–2.2 μm，环面积＝每搏功 ≈0.8 J',
  draw,
})
