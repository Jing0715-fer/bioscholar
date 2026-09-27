// ph ch3-s4 三种肌肉对比：骨骼肌、心肌、平滑肌的设计差异
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三种动作电位波形 ============
  b.panel(30, 132, 1340, 308, { title: '一、三种动作电位波形：快尖峰・平台期・慢波' })
  // ---- 骨骼肌：快 Na 尖峰 ----
  b.ctext(245, 192, '骨骼肌：快 Na^{+} 尖峰', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(80, 350, 80, 208, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(80, 350, 420, 350, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.polyline([[88, 308], [150, 308], [168, 226], [190, 314], [210, 308], [355, 308]], { stroke: C.dna, sw: 2.6 })
  b.etext(148, 304, '-70 mV', { size: 9, fill: C.mute })
  b.text(192, 222, '+30 mV', { size: 8.5, fill: C.mute })
  b.text(230, 234, '速开速关（1–5 ms）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(245, 384, '时间（ms）', { size: 11, weight: 600, fill: C.sub })
  b.wtext(60, 408, '全或无尖峰：绝对不应期 0.5–2 ms 封顶发放频率，靠频率编码肌力', { maxW: 360, lh: 14, size: 9.5, fill: C.sub })
  // ---- 心肌：平台期 ----
  b.ctext(680, 192, '心肌：平台期 200–300 ms', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(515, 350, 515, 208, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(515, 350, 855, 350, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.rect(528, 220, 250, 105, { fill: C.badL, fillOp: 0.4 })
  b.polyline([[515, 321], [528, 321], [545, 225], [560, 235], [700, 233], [760, 321], [840, 321]], { stroke: C.bad, sw: 2.6 })
  b.text(538, 214, '0', { size: 10, weight: 700, fill: C.ink })
  b.text(565, 222, '1', { size: 10, weight: 700, fill: C.ink })
  b.text(628, 218, '2', { size: 10, weight: 700, fill: C.ink })
  b.text(735, 248, '3', { size: 10, weight: 700, fill: C.ink })
  b.text(788, 312, '4', { size: 10, weight: 700, fill: C.ink })
  b.text(575, 262, 'L 型 Ca^{2+} 内流 ≈ K^{+} 外流', { size: 9, weight: 700, fill: C.warnD })
  b.ctext(648, 342, '有效不应期', { size: 9.5, weight: 700, fill: C.badD })
  b.etext(842, 317, '-85 mV', { size: 9, fill: C.mute })
  b.ctext(680, 384, '时间（ms）', { size: 11, weight: 600, fill: C.sub })
  b.wtext(495, 408, '平台期拉长不应期：Na^{+} 通道持续失活至舒张早期——防强直、保充盈', { maxW: 360, lh: 14, size: 9.5, fill: C.sub })
  // ---- 平滑肌：慢波 + 钙峰 ----
  b.ctext(1115, 192, '平滑肌：慢波 ＋ 钙峰', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(950, 350, 950, 208, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(950, 350, 1255, 350, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.line(950, 297, 1250, 297, { stroke: C.faint, sw: 1, dash: '4 4' })
  b.etext(1250, 293, '阈电位', { size: 8.5, weight: 700, fill: C.mute })
  b.polyline([
    [950, 320], [975, 308], [1000, 297], [1012, 238], [1022, 312], [1040, 320],
    [1065, 308], [1090, 297], [1102, 238], [1112, 312], [1130, 320],
    [1155, 308], [1180, 297], [1192, 238], [1202, 312], [1220, 320], [1250, 320],
  ], { stroke: C.enz, sw: 2.4 })
  b.text(950, 232, '慢波（起搏）', { size: 9, weight: 700, fill: C.enzD })
  b.text(1150, 228, 'L 型 Ca^{2+} 峰', { size: 9, weight: 700, fill: C.warnD })
  b.ctext(1115, 384, '时间（s）', { size: 11, weight: 600, fill: C.sub })
  b.wtext(930, 408, '慢波达阈发钙峰：波幅与频率决定张力，时程变异大', { maxW: 360, lh: 14, size: 9.5, fill: C.sub })

  // ============ 二、三种肌肉的设计对比 ============
  b.panel(30, 460, 1340, 525, { title: '二、三种肌肉的收缩调控设计对比：快・稳・省' })
  b.table(46, 520, 1300, {
    headers: ['特性', '骨骼肌（快）', '心肌（稳）', '平滑肌（省）'],
    colW: [110, 390, 400, 400], rowH: 33, fontSize: 11,
    rows: [
      ['动作电位', '尖峰 1–5 ms，频率编码张力', '快升＋平台 200–300 ms', '慢波＋钙峰，变异大'],
      ['钙来源', '肌质网 RyR1（不看外钙）', '外钙触发 RyR2 释放', 'IP_{3}R 释放＋L 型通道外钙'],
      ['偶联机制', 'DHPR-RyR1 构象直连（三联体）', '钙致钙释放 CICR（二联体）', 'Ca^{2+}-CaM-MLCK 磷酸化'],
      ['钙开关', '肌钙蛋白 C', '肌钙蛋白 C＋钙瞬变放大', '钙调蛋白（无肌钙蛋白）'],
      ['强直能力', '可完全强直（3–5 倍单收缩）', '有效不应期长 → 不强直', '持续张力（latch 闩锁桥）'],
      ['调控入口', '运动单位募集＋频率', 'β_{1} 正性变力、力-频率', '自主＋激素（Gq/RhoA/NO）'],
      ['速度与能耗', '快、能耗高（收缩舒张双耗）', '稳、连续做功', '慢、latch 省能'],
    ],
  })
  b.wtext(46, 830, '心肌注记：CICR 是局部化正反馈——外钙触发 RyR2 迸出「钙火花」，全细胞释放量与触发钙流量成比例，钙内流量因此是肌力主旋钮；β_{1}-Gs-cAMP-PKA 三重正性变力：磷酸化 L 型通道（触发钙↑）、RyR2 与受磷蛋白（解除 SERCA 抑制 → 舒张提速、钙库充盈）；力-频率阶梯与 Frank-Starling 定律共同自适应心输出量', { maxW: 620, lh: 17, size: 10.5, fill: C.sub })
  b.wtext(700, 830, '平滑肌注记：无肌钙蛋白，Ca^{2+}-钙调蛋白激活 MLCK 磷酸化 20 kDa 调节轻链方能起步；latch 桥＝轻链去磷酸化后仍以极慢速率附着，以微小 ATP 消耗长期守住张力；RhoA-ROCK 抑制 MLCP＝钙增敏（血管紧张素 II 长效缩血管）；电-机械（L 型外钙）与药-机械（Gq-IP_{3}）双入口并行接入同一台钙-钙调蛋白机器', { maxW: 620, lh: 17, size: 10.5, fill: C.sub })
}

export default scene({
  title: '三种肌肉的对比：骨骼肌、心肌与平滑肌',
  subtitle: '骨骼肌快钠尖峰 1–5 ms 配 DHPR-RyR1 构象偶联与肌钙蛋白开关、可完全强直；心肌平台期 200–300 ms 由 L 型钙内流与 K^{+} 外流相抵，有效不应期防强直，外钙触发钙致钙释放；平滑肌经 Ca^{2+}-钙调蛋白-MLCK 磷酸化驱动横桥，latch 桥以极低能耗维持张力——快、稳、省三种工况',
  draw,
})
