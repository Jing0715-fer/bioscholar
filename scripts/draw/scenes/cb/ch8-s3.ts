// cb ch8-s3 IP₃/DAG 双信使途径与钙信号（39-d 批B 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Gq-PLCβ 双信使分叉 ============
  b.panel(30, 132, 1340, 300, { title: '一、Gq-PLCβ 水解 PIP₂：IP₃ 与 DAG 双信使分叉' })
  // 质膜
  b.bilayer(60, 300, 560)
  b.bilayer(820, 300, 520)
  b.ctext(700, 268, '质膜', { size: 10, weight: 700, fill: C.dnaD })
  // 受体 + Gq
  b.rect(90, 262, 60, 74, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(120, 292, 'Gq 偶联', { size: 10, weight: 700, fill: C.proD })
  b.ctext(120, 308, '受体', { size: 10, weight: 700, fill: C.proD })
  b.arrow(155, 298, 205, 298, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.rect(205, 274, 54, 50, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 8 })
  b.ctext(232, 296, 'Gq', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(232, 312, 'αβγ', { size: 8.5, fill: C.rnaD })
  b.arrow(262, 298, 310, 298, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  // PLCβ
  b.rect(310, 266, 70, 64, { fill: C.enzL, stroke: C.enz, sw: 2.2, rx: 8 })
  b.ctext(345, 292, 'PLCβ', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(345, 310, '磷脂酶 Cβ', { size: 8.5, fill: C.enzD })
  // PIP2 膜脂
  b.circle(440, 312, 9, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(440, 336, 'PIP₂', { size: 10, weight: 700, fill: C.accD })
  b.arrow(384, 298, 424, 306, { stroke: C.enz, sw: 2, marker: 'enz' })
  // 分叉：IP3（水溶性入胞质）与 DAG（留膜）
  b.arrow(452, 304, 560, 220, { stroke: C.warn, sw: 2.6, marker: 'warn' })
  b.ion(596, 210, 'IP₃', { r: 24, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 12 })
  b.ctext(596, 172, '水溶性·扩散入胞质', { size: 9.5, fill: C.sub })
  b.arrow(452, 320, 560, 376, { stroke: C.ok, sw: 2.6, marker: 'ok' })
  b.tag(610, 384, 'DAG（二酰甘油）·留在膜内', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 6 })
  // 右侧：下游
  b.arrow(646, 384, 700, 384, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.rect(700, 350, 130, 68, { fill: C.enzL, stroke: C.enz, sw: 2.2, rx: 8 })
  b.ctext(765, 376, 'PKC', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(765, 394, '蛋白激酶 C', { size: 9, fill: C.enzD })
  b.wtext(860, 356, '经典 PKC 需 DAG＋磷脂酰丝氨酸＋Ca²⁺ 三者；新型 PKC 只需 DAG；非典型二者皆不需。PKC 磷酸化多种底物，参与增殖、分化与肿瘤促进。', { size: 9.5, fill: C.sub, maxW: 250, lh: 13.5 })
  b.tag(1180, 356, '佛波酯：DAG 类似物', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 5 })
  b.tag(1180, 384, '经典促癌剂', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 5 })
  // IP3 → ER 受体
  b.rect(1000, 180, 220, 92, { fill: '#ffedd5', stroke: C.warn, sw: 2, rx: 10 })
  b.ctext(1110, 202, '内质网（钙库）', { size: 10.5, weight: 700, fill: '#92400e' })
  b.rect(1040, 226, 140, 34, { fill: C.warnL, stroke: C.warn, sw: 2, rx: 6 })
  b.ctext(1110, 247, 'IP₃ 受体', { size: 10, weight: 700, fill: '#78350f' })
  b.arrow(626, 210, 1028, 226, { stroke: C.warn, sw: 2.4, marker: 'warn' })
  b.ctext(830, 196, '配体门控 Ca²⁺ 通道', { size: 9.5, weight: 700, fill: '#78350f' })
  for (let i = 0; i < 3; i++) {
    b.ion(1070 + i * 40, 288, 'Ca', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 8 })
  }
  b.arrow(1110, 272, 1110, 306, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(1110, 328, '释放 ER 钙库', { size: 9.5, weight: 700, fill: C.bad })

  // ============ 二、Ca²⁺：万能第二信使（梯度＋振荡＋CaM 效应） ============
  b.panel(30, 452, 700, 280, { title: '二、Ca²⁺：万倍梯度、频率编码与钙调蛋白效应' })
  b.text(64, 496, '浓度梯度（"开即有"的信号）', { size: 11, weight: 700, fill: C.ink })
  b.tag(150, 530, '胞质游离 ≈100 nM', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 5 })
  b.tag(360, 530, '胞外 / ER 腔：mM 级', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 5 })
  // 钙振荡
  b.axis(72, 690, 260, 120, {
    title: '钙振荡（频率编码）', ylabel: 'Ca²⁺',
    xticks: [[0.08, ''], [0.35, ''], [0.65, ''], [0.92, '']], yticks: [[0.08, '低'], [0.9, '高']],
  })
  b.curve(72, 690, 260, 120, [[0, 0.1], [0.08, 0.15], [0.13, 0.85], [0.2, 0.12], [0.33, 0.2], [0.4, 0.9], [0.47, 0.12], [0.6, 0.18], [0.68, 0.88], [0.75, 0.1], [0.9, 0.16], [0.97, 0.8], [1, 0.12]], { stroke: C.bad, sw: 2.6, smooth: true })
  b.wtext(64, 712, '跨膜梯度近万倍；以振荡频率编码信号避免持续高钙毒性；清除：PMCA、SERCA、Na⁺/Ca²⁺ 交换体与线粒体缓冲。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13.5 })
  // CaM 与下游
  b.text(400, 496, '钙调蛋白（CaM）：4 个 EF 手形结构域', { size: 11, weight: 700, fill: C.ink })
  b.rect(430, 516, 200, 30, { fill: C.proL, stroke: C.pro, sw: 2, rx: 14 })
  b.ctext(530, 536, 'Ca²⁺-CaM 变构激活', { size: 10, weight: 700, fill: C.proD })
  for (const dx of [-70, -22, 26, 74]) b.circle(430 + 100 + dx, 531, 5, { fill: C.bad })
  const targets: Array<[string, string]> = [
    ['CaMKII', '磷酸化 AMPA 受体，介导 LTP 与记忆（"自主活性"＝分子记忆开关候选）'],
    ['MLCK', '平滑肌收缩'],
    ['eNOS', '生成 NO → 血管舒张'],
  ]
  targets.forEach((t, i) => {
    const y = 576 + i * 46
    b.tag(470, y, t[0], { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
    b.wtext(530, y - 8, t[1], { size: 9.5, fill: C.sub, maxW: 170, lh: 13 })
  })
  b.wtext(400, 712, 'Ca²⁺ 还直接门控 PKC 与钙激活 K⁺ 通道。', { size: 9.5, fill: C.mute, maxW: 300, lh: 13 })

  // ============ 三、NO 途径与 SOCE ============
  b.panel(760, 452, 610, 280, { title: '三、NO-sGC-cGMP 舒张途径与钙库操纵性钙内流（SOCE）' })
  // NO 途径
  b.cell(880, 560, 66, 40, {})
  b.ctext(880, 616, '内皮细胞', { size: 9, fill: C.mute })
  b.tag(880, 528, 'Ca²⁺-CaM→eNOS', { fill: C.enzL, stroke: C.enz, size: 8.5, tfill: C.enzD, pad: 4 })
  b.arrow(948, 560, 1078, 560, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.ion(1012, 536, 'NO', { r: 13, fill: C.okL, stroke: C.ok, tfill: C.ok, size: 10 })
  b.cell(1140, 560, 66, 40, {})
  b.ctext(1140, 616, '血管平滑肌', { size: 9, fill: C.mute })
  b.rect(1104, 522, 74, 30, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(1141, 541, 'sGC', { size: 10, weight: 700, fill: C.accD })
  b.arrow(1066, 560, 1100, 546, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.wtext(1230, 528, 'cGMP→PKG→肌球蛋白轻链去磷酸化→舒张', { size: 9, fill: C.sub, maxW: 120, lh: 12.5 })
  b.wtext(790, 648, '硝酸甘油（体内缓释 NO）治疗心绞痛；Furchgott、Ignarro 与 Murad 因 NO 信号获 1998 年诺贝尔奖；西地那非抑制 PDE5 减少 cGMP 降解。', { size: 9.5, fill: C.sub, maxW: 540, lh: 13.5 })
  // SOCE
  b.text(790, 700, 'SOCE：', { size: 10.5, weight: 700, fill: C.ink })
  b.rect(840, 688, 90, 26, { fill: '#ffedd5', stroke: C.warn, sw: 1.8, rx: 6 })
  b.ctext(885, 705, 'ER 钙库耗竭', { size: 8.5, weight: 700, fill: '#92400e' })
  b.arrow(934, 700, 980, 700, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.tag(1030, 700, 'STIM1 聚集成簇', { fill: C.rnaL, stroke: C.rna, size: 8.5, tfill: C.rnaD, pad: 4 })
  b.arrow(1104, 700, 1140, 700, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.tag(1200, 700, '耦联 Orai1（CRAC）', { fill: C.accL, stroke: C.acc, size: 8.5, tfill: C.accD, pad: 4 })
  b.wtext(790, 724, '持续 Ca²⁺ 内流维持长期钙信号（如 T 细胞激活），其缺陷导致严重免疫缺陷。', { size: 9, fill: C.mute, maxW: 540, lh: 12.5 })
}

export default scene({
  title: 'IP₃/DAG 双信使途径与钙信号',
  subtitle: 'Gq-PLCβ 裂解 PIP₂ 出 IP₃（开 ER 钙库）与 DAG（激活 PKC）；Ca²⁺ 梯度近万倍、以振荡编码；CaM 激活 CaMKII/MLCK/eNOS，NO 舒张血管（1998 诺奖）',
  draw,
})
