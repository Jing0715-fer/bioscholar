// bc ch8-s5 活性氧与抗氧化体系（39-a 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、ROS 的产生 ============
  b.panel(30, 132, 660, 430, { title: '一、ROS 的产生：1%~2% 电子泄漏与 Fenton 反应' })
  b.ion(120, 232, 'O₂', { r: 24, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 13 })
  b.arrow(148, 232, 218, 232, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(183, 214, '呼吸链单电子泄漏', { size: 9.5, fill: C.sub })
  b.ctext(183, 254, '1%~2% 耗氧', { size: 9.5, fill: C.mute })
  b.ion(250, 232, 'O₂•⁻', { r: 26, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 12 })
  b.ctext(250, 272, '超氧阴离子', { size: 9.5, fill: C.mute })
  b.arrow(280, 232, 350, 232, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(315, 214, 'SOD 歧化', { size: 9.5, fill: C.sub })
  b.ion(382, 232, 'H₂O₂', { r: 26, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 12 })
  b.ctext(382, 272, '过氧化氢', { size: 9.5, fill: C.mute })
  b.arrow(412, 232, 482, 232, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(447, 214, 'Fenton 反应', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(447, 254, 'Fe²⁺ → Fe³⁺', { size: 9.5, fill: C.mute })
  b.ion(514, 232, '•OH', { r: 26, fill: C.bad, stroke: C.bad, tfill: '#ffffff', size: 13 })
  b.ctext(514, 272, '羟自由基（最强）', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(56, 306, 'Fenton：Fe²⁺ + H₂O₂ → Fe³⁺ + •OH + OH⁻；Haber-Weiss：O₂•⁻ + H₂O₂ → •OH + O₂ + OH⁻。ROS 家族：O₂•⁻ · H₂O₂ · •OH · 单线态氧 ¹O₂ · 脂过氧基 LOO•。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })
  b.text(56, 366, '产生位点：', { size: 12.5, weight: 700, fill: C.ink })
  const sites = [
    '· 线粒体呼吸链（复合物 I 的 FMN · 复合物 III Q 循环外漏 CoQ•⁻）',
    '· 内质网细胞色素 P450',
    '· 吞噬细胞 NADPH 氧化酶（呼吸爆发杀菌）',
    '· 黄嘌呤氧化酶（缺血-再灌注损伤）',
  ]
  sites.forEach((s, i) => b.text(56, 394 + i * 26, s, { size: 11, fill: C.sub }))
  b.wtext(56, 510, '细胞内约 1%~2% 的耗氧经单电子泄漏生成 ROS——氧化代谢的「代价」。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 二、氧化损伤 ============
  b.panel(710, 132, 660, 430, { title: '二、氧化损伤：•OH 攻击三大靶分子' })
  const cards: [number, string, string, string, string][] = [
    [736, '脂质', 'bad', '不饱和脂肪酸', '脂质过氧化链式反应 → 膜损伤 · MDA 生成'],
    [946, '蛋白质', 'warn', '侧链氧化 · 肽键断裂', '蛋白质聚集与交联'],
    [1156, 'DNA', 'pro', '碱基攻击 8-oxoG', 'G→T 突变'],
  ]
  cards.forEach(([x, t, c, s1, s2]) => {
    b.rect(x, 196, 190, 250, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 9 })
    b.ctext(x + 95, 222, t, { size: 14, weight: 700, fill: C.ink })
    b.rect(x + 10, 238, 170, 92, { fill: '#ffffff', stroke: C.line, sw: 1, rx: 6 })
  })
  // 卡内示意：膜 → 断链 / 蛋白 squiggle / DNA
  b.bilayer(752, 262, 150, { h: 11, tint: C.bad })
  b.ion(800, 316, '•OH', { r: 12, fill: C.bad, stroke: C.bad, tfill: '#ffffff', size: 8 })
  b.ctext(880, 316, 'LOO•', { size: 10, weight: 700, fill: C.bad })
  b.polyline([[962, 262], [980, 250], [996, 272], [1014, 252], [1032, 268], [1050, 254], [1066, 266]], { stroke: C.warn, sw: 2.4 })
  b.polyline([[970, 312], [992, 312]], { stroke: C.warn, sw: 2 })
  b.polyline([[1030, 312], [1054, 312]], { stroke: C.warn, sw: 2 })
  b.ctext(1011, 324, '×', { size: 15, weight: 700, fill: C.mute })
  b.dna(1172, 276, 158, { amp: 7, period: 34, stroke: C.pro, sw: 2 })
  b.tag(1251, 320, '8-oxoG', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 4 })
  // 卡片描述
  b.wtext(746, 356, '攻击不饱和脂肪酸引发脂质过氧化链式反应（膜损伤、MDA 生成）。', { size: 10.5, fill: C.sub, maxW: 172, lh: 15 })
  b.wtext(956, 356, '蛋白质侧链氧化、肽键断裂，发生聚集与交联。', { size: 10.5, fill: C.sub, maxW: 172, lh: 15 })
  b.wtext(1166, 356, '攻击 DNA 碱基产生 8-氧鸟嘌呤（8-oxoG）→ G→T 突变。', { size: 10.5, fill: C.sub, maxW: 172, lh: 15 })
  b.tag(890, 470, '氧化应激 = ROS 产生 > 清除能力', { fill: C.badL, stroke: C.bad, size: 12.5, weight: 700, tfill: C.bad, pad: 8 })
  b.wtext(736, 506, '与衰老、动脉粥样硬化、糖尿病并发症、肿瘤、神经退行性疾病及炎症损伤相关。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })

  // ============ 三、酶性抗氧化级联 ============
  b.panel(30, 566, 660, 414, { title: '三、酶性防御级联：SOD → CAT / GPx 与 GSH 再生循环' })
  b.ion(110, 652, 'O₂•⁻', { r: 24, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 11 })
  b.arrow(138, 652, 208, 652, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(288, 652, 'SOD 超氧化物歧化酶', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 6 })
  b.ctext(288, 628, '2 O₂•⁻ + 2 H⁺ → H₂O₂ + O₂', { size: 10, fill: C.mute })
  b.arrow(380, 652, 450, 652, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ion(482, 652, 'H₂O₂', { r: 24, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 11 })
  // 分支：CAT / GPx
  b.arrow(506, 636, 566, 606, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(506, 668, 566, 698, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(610, 592, 'CAT 过氧化氢酶', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.ctext(610, 570, '2 H₂O₂ → 2 H₂O + O₂', { size: 10, fill: C.mute })
  b.tag(610, 712, 'GPx 谷胱甘肽过氧化物酶（含硒）', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.ctext(610, 690, '2 GSH + H₂O₂（或 LOOH）', { size: 10, fill: C.mute })
  b.ctext(610, 744, '→ GSSG + 2 H₂O（或 LOH）', { size: 10, fill: C.mute })
  // GSH 再生循环
  b.rect(96, 792, 150, 44, { fill: C.okL, fillOp: 0.55, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(171, 812, 'GSSG（氧化型）', { size: 11, weight: 700, fill: '#065f46' })
  b.ctext(171, 828, '2 GSH → 1 GSSG', { size: 9.5, fill: C.mute })
  b.arrow(246, 814, 330, 814, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.tag(420, 814, '谷胱甘肽还原酶（辅酶 NADPH）', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 5 })
  b.arrow(510, 814, 590, 814, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.rect(592, 792, 130, 44, { fill: C.okL, fillOp: 0.55, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(657, 812, '2 GSH（还原型）', { size: 11, weight: 700, fill: '#065f46' })
  b.ctext(657, 828, '巯基缓冲 · mM 级', { size: 9.5, fill: C.mute })
  b.path('M657,790 L657,770 Q657,760 647,760 L120,760 Q110,760 110,770 L110,790', { stroke: C.ok, sw: 1.8, dash: '6 5', marker: 'ok', fill: 'none' })
  b.ctext(384, 750, '循环再生：GSSG → 2 GSH', { size: 10, weight: 700, fill: '#065f46' })
  b.tag(300, 878, 'NADPH ← 磷酸戊糖途径（G6PD）', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 5 })
  b.arrow(300, 862, 300, 838, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.wtext(56, 916, 'NADPH 是抗氧化还原力的最终供给者——G6PD 缺乏（蚕豆病）者 NADPH 不足，易发生氧化应激溶血。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })
  b.wtext(56, 950, '同工酶分布：胞质 Cu/Zn-SOD · 线粒体 Mn-SOD；CAT 以过氧化物酶体为主；GPx 分布于胞质与线粒体。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })

  // ============ 四、非酶抗氧化剂 ============
  b.panel(710, 566, 660, 414, { title: '四、非酶性抗氧化剂与 ROS 的生理意义' })
  const items: [string, string][] = [
    ['维生素 E（脂溶性）', '中断脂质过氧化链式反应'],
    ['维生素 C（水溶性）', '水相清除自由基 · 再生维生素 E'],
    ['谷胱甘肽 GSH', '巯基缓冲，Millimolar 级'],
    ['β-胡萝卜素', '淬灭单线态氧 ¹O₂'],
    ['尿酸', '血浆重要抗氧化剂'],
    ['转铁蛋白 · 金属硫蛋白', '螯合金属离子，封锁 Fenton 反应'],
  ]
  const ipos: [number, number][] = [[736, 618], [1046, 618], [736, 708], [1046, 708], [736, 798], [1046, 798]]
  ipos.forEach(([x, y], i) => {
    b.rect(x, y, 290, 76, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
    b.text(x + 14, y + 26, items[i][0], { size: 12, weight: 700, fill: C.ink })
    b.wtext(x + 14, y + 48, items[i][1], { size: 10.5, fill: C.sub, maxW: 262, lh: 14 })
  })
  b.wtext(726, 906, '生理条件下 ROS 亦是信号分子：血管舒张 · 免疫杀伤 · HIF-1 调控——抗氧化体系的意义在于维持「信号浓度」而非清零。', { size: 11, weight: 700, fill: C.ink, maxW: 620, lh: 16 })
  b.wtext(726, 950, '酶系（SOD/CAT/GPx）与非酶系（维生素 E/C、GSH、尿酸等）分工覆盖水相与脂相。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '活性氧与抗氧化体系：产生、损伤与级联清除',
  subtitle: '呼吸链 1%~2% 电子泄漏产 O₂•⁻，Fenton 反应生成攻击性最强的 •OH；SOD → CAT/GPx（含硒）级联清除，GSH 经 NADPH（磷酸戊糖途径）再生——氧化应激与衰老、动脉粥样硬化、肿瘤相关',
  draw,
})
