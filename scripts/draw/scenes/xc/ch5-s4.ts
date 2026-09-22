// xc ch5-s4 辐射损伤与剂量学（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、剂量刻度与 Henderson 极限 ============
  b.panel(30, 132, 660, 300, { title: '一、剂量单位与 Henderson 极限' })
  const x0 = 100, x1 = 630, per = (x1 - x0) / 35
  const seg = (a: number, bb: number, fill: string) => b.rect(x0 + a * per, 240, (bb - a) * per, 28, { fill, stroke: '#ffffff', sw: 1 })
  seg(0, 10, C.okL); seg(10, 20, C.warnL); seg(20, 30, C.badL); seg(30, 35, '#fecaca')
  ;[0, 10, 20, 30].forEach(v => {
    b.line(x0 + v * per, 240, x0 + v * per, 272, { stroke: C.sub, sw: 1.2 })
    b.ctext(x0 + v * per, 290, String(v), { size: 10.5, fill: C.mute })
  })
  b.ctext(365, 308, '剂量（MGy；1 Gy = 1 J/kg）', { size: 11, weight: 600, fill: C.sub })
  b.ctext(x0 + 5 * per, 259, '安全', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(x0 + 15 * per, 259, '警戒', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(x0 + 25 * per, 259, '上限', { size: 10.5, weight: 700, fill: C.bad })
  b.line(x0 + 20 * per, 224, x0 + 20 * per, 276, { stroke: C.bad, sw: 2.5 })
  b.line(x0 + 30 * per, 224, x0 + 30 * per, 276, { stroke: C.bad, sw: 2.5, dash: '5 3' })
  b.wtext(120, 208, 'Henderson 1995 极限：2×10^{7} Gy＝20 MGy——超过则衍射能力退化到不可用', { size: 10.5, weight: 700, fill: C.bad, maxW: 260, lh: 14 })
  b.wtext(452, 208, 'Owen 等 2006：30 MGy 量级强度已明显衰减，但电子密度图通常仍可解读', { size: 10.5, fill: C.sub, maxW: 210, lh: 14 })
  b.wtext(50, 336, '实务警戒线放在 20–30 MGy，并为反常与高分辨率数据留足余量（损伤最先吃掉高分辨与弱反射）。他的估算路数：从电镜辐射化学数据外推「每单位剂量产生的自由基数目」，再设衍射衰减的可容忍阈值——先验估算被后续实验反复检验的范例。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.tag(330, 408, '减通量 ≠ 省剂量：只延长曝光；省剂量须减总光子数、或让光只照有用体积', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 9 })

  // ============ 二、特异性损伤的化学次序 ============
  b.panel(710, 132, 660, 300, { title: '二、特异性损伤：明确的化学次序' })
  // 二硫键
  b.circle(775, 238, 12, { fill: C.warnL, stroke: C.warnD, sw: 1.8 })
  b.circle(832, 224, 12, { fill: C.warnL, stroke: C.warnD, sw: 1.8 })
  b.ctext(775, 242, 'S', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(832, 228, 'S', { size: 10, weight: 700, fill: C.warnD })
  b.line(787, 233, 820, 228, { stroke: C.warnD, sw: 1.8, dash: '3 3' })
  b.ctext(804, 276, '二硫键断裂', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(804, 292, '1–5 MGy 起', { size: 9.5, fill: C.bad })
  // 金属中心
  b.circle(948, 232, 14, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(948, 236, 'M', { size: 11, weight: 700, fill: C.proD })
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * Math.PI * 2
    b.line(948 + 14 * Math.cos(a), 232 + 14 * Math.sin(a), 948 + 26 * Math.cos(a), 232 + 26 * Math.sin(a), { stroke: C.pro, sw: 1.4, dash: k === 3 ? '2 3' : undefined })
  }
  b.ctext(948, 276, '金属中心', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(948, 292, '光电子还原·失序', { size: 9.5, fill: C.mute })
  // 羧基
  b.circle(1092, 226, 9, { fill: C.ink })
  b.ctext(1082, 230, 'C', { size: 8, fill: '#ffffff' })
  b.circle(1116, 214, 8, { fill: C.badL, stroke: C.bad, sw: 1.5 })
  b.circle(1116, 238, 8, { fill: C.badL, stroke: C.bad, sw: 1.5 })
  b.line(1100, 222, 1110, 216, { stroke: C.sub, sw: 1.5 })
  b.line(1100, 230, 1110, 236, { stroke: C.sub, sw: 1.5 })
  b.ctext(1104, 276, 'Glu/Asp 羧基', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(1104, 292, '去羧基', { size: 9.5, fill: C.mute })
  // Tyr
  const hex: [number, number][] = []
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2 - Math.PI / 2
    hex.push([1252 + 15 * Math.cos(a), 226 + 15 * Math.sin(a)])
  }
  b.polygon(hex, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.line(1252, 241, 1252, 258, { stroke: C.rna, sw: 1.6 })
  b.ctext(1252, 270, 'OH', { size: 8.5, weight: 700, fill: C.rna })
  b.ctext(1252, 296, 'Tyr 邻位损伤', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(856, 232, 908, 232, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(996, 232, 1048, 226, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1152, 226, 1204, 226, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.wtext(730, 330, '差值傅里叶图（±3σ 峰对）揭示损伤并不均匀：最早现形的是二硫键（硫位出现特征正负峰对）；随后金属中心被光电子还原、配位改变或失序（对金属酶与铁硫蛋白尤其致命）；再后是羧基去羧基；最后 Tyr 羟基邻部也现损伤迹象。Ravelli 与 McSweeney 2000 年把这类损伤指纹系统化。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 398, '对策：氧化还原敏感位点的「真初态」应向零剂量外推；别把损伤伪影当作真实构象变化——同一晶体先低剂量段后高剂量段分别精修作差值图，剂量依赖的方向性是区分「损伤」与「构象」的试金石。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、全局损伤四指纹 ============
  b.panel(30, 452, 660, 490, { title: '三、全局损伤：整颗晶体的「疲劳」四指纹' })
  const mini = (x: number, y: number, kind: 'decay' | 'rise' | 'cell' | 'spot', stroke: string) => {
    b.rect(x, y, 86, 62, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 6 })
    if (kind === 'decay') b.path(`M ${x + 10},${y + 14} C ${x + 30},${y + 16} ${x + 50},${y + 40} ${x + 74},${y + 50}`, { fill: 'none', stroke, sw: 2.2 })
    if (kind === 'rise') b.path(`M ${x + 10},${y + 50} C ${x + 34},${y + 46} ${x + 56},${y + 28} ${x + 74},${y + 12}`, { fill: 'none', stroke, sw: 2.2 })
    if (kind === 'cell') {
      b.rect(x + 18, y + 16, 50, 32, { fill: 'none', stroke, sw: 1.8, rx: 3 })
      b.rect(x + 12, y + 10, 62, 44, { fill: 'none', stroke, sw: 1.2, dash: '3 3', rx: 3 })
    }
    if (kind === 'spot') {
      b.circle(x + 28, y + 32, 6, { fill: 'none', stroke, sw: 1.6 })
      b.circle(x + 58, y + 32, 11, { fill: 'none', stroke, sw: 1.6, dash: '3 3' })
    }
  }
  mini(60, 490, 'decay', C.bad)
  b.text(162, 506, '① 总衍射强度指数衰减', { size: 12, weight: 700, fill: C.ink })
  b.wtext(162, 526, 'I(D) = I(0)·exp(−μD)，衰减常数 μ 典型 0.02–0.04 MGy^{-1}——每 30–50 MGy 掉一个 e 因子。', { size: 10.5, fill: C.sub, maxW: 500, lh: 15 })
  mini(60, 566, 'rise', C.warn)
  b.text(162, 582, '② 表观 B 因子近似线性上升', { size: 12, weight: 700, fill: C.ink })
  b.wtext(162, 602, 'B(D) = B_{0} + βD，斜率每 MGy 十分之几 Å²——随剂量单调爬升。', { size: 10.5, fill: C.sub, maxW: 500, lh: 15 })
  mini(60, 642, 'cell', C.pro)
  b.text(162, 658, '③ 晶格常数轻微膨胀', { size: 12, weight: 700, fill: C.ink })
  b.wtext(162, 678, '膨胀百分之零点几；可测变化多在 5–10 MGy 后登场。', { size: 10.5, fill: C.sub, maxW: 500, lh: 15 })
  mini(60, 718, 'spot', C.acc)
  b.text(162, 734, '④ mosaicity 增大', { size: 12, weight: 700, fill: C.ink })
  b.wtext(162, 754, '斑点变大变糊；个别体系每 10 MGy 涨 0.1–0.2°。', { size: 10.5, fill: C.sub, maxW: 500, lh: 15 })
  b.wtext(50, 806, '四条指纹都不指向特定原子。数据处理以「批间 scale 因子＋B 因子衰减」建模补偿前两条——但补偿是记账不是治愈：衰减严重的帧本质上是低质量数据，多晶合并优于硬撑单晶。100 K 把自由基扩散压到局部：损伤放缓几十倍，却从不归零（自由基原料是水：水合电子与羟基自由基）。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15.5 })

  // ============ 四、RADDOSE-3D 与 XFEL ============
  b.panel(710, 452, 660, 490, { title: '四、RADDOSE-3D：把剂量算成地图' })
  b.table(730, 520, 616, {
    headers: ['类别', '项目', '典型内容'],
    colW: [72, 118, 426],
    rowH: 33,
    fontSize: 11.5,
    rows: [
      ['输入', '束流几何', '光斑尺寸、高斯或平顶剖面、发散与扫描方式'],
      ['输入', '通量与时长', '每秒光子数、每帧曝光、帧数与总转角'],
      ['输入', '晶体与组成', '尺寸形状取向、由序列推得的元素组成与溶剂份额'],
      ['输出', '剂量账本', '平均与峰值剂量（MGy）、逐帧累计、吸收效率'],
      ['输出', '预警', '逼近 20–30 MGy 警戒线即提示调整策略'],
    ],
  })
  b.wtext(730, 742, '「光斑 20 μm、晶体 80 μm、转 180°、每帧几 Gy、总共会不会超」——收数之前就有答案。峰值常被低估：光斑只照亮晶体一角时，峰值剂量可数倍于整颗平均——旋转能摊薄它，这是转角策略的隐性红利；BEST 进一步以剂量为约束反推最优曝光。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.rect(730, 818, 616, 106, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.8, rx: 10 })
  b.ctext(1038, 844, 'XFEL「衍射先于破坏」（diffraction before destruction）', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(748, 868, '飞秒脉冲短于原子被推离原位的时间尺度——破坏发生时衍射已经完成：脉冲 10–50 fs，单脉冲剂量可高达 GGy 量级，每张图都来自一颗「殉道晶体」；串行飞秒晶体学把剂量极限改写为「每晶一脉冲」的新记账（第 12 章）。', { size: 10.5, fill: C.proD, maxW: 580, lh: 15 })
}

export default scene({
  title: '辐射损伤与剂量学：Henderson 极限、损伤次序与 RADDOSE-3D',
  subtitle: '1 Gy = 1 J/kg；Henderson 1995 极限 2×10⁷ Gy（20 MGy）、Owen 2006 修正至 30 MGy；损伤次序 二硫键(1–5 MGy)→金属→羧基→Tyr；全局四指纹；RADDOSE-3D 三维剂量图；XFEL 衍射先于破坏',
  draw,
})
