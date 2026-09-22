// em ch4-s2 辐射损伤的物理化学（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、剂量：以电子数记账 ============
  b.panel(30, 132, 660, 270, { title: '一、剂量：以电子数记账' })
  b.tag(175, 188, '剂量单位：e^{-}/Å^{2}', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 12.5, weight: 700, pad: 9 })
  b.tag(470, 188, '约 624 e^{-}/Å^{2} 才合 1 C/cm^{2}', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 12.5, weight: 700, pad: 9 })
  b.tag(220, 226, '1 e^{-}/Å^{2} 约 1.6×10^{-3} C/cm^{2}', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 12, weight: 700, pad: 9 })
  b.tag(520, 226, '剂量率 e^{-}/Å^{2}·s^{-1}：施加快慢', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 12, weight: 700, pad: 9 })
  b.arrow(90, 310, 175, 310, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.circle(84, 310, 4.5, { fill: C.warn })
  b.circle(196, 310, 12, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(196, 338, '分子', { size: 10, fill: C.proD })
  b.arrow(208, 302, 258, 272, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(208, 310, 268, 308, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.arrow(208, 318, 254, 344, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  ;[[286, 262], [300, 286], [296, 318], [280, 348], [316, 300]].forEach(([x, y]) => b.circle(x, y, 3.2, { fill: C.acc }))
  b.wtext(340, 268, '一次非弹性沉积可经次级电子级联放大成数十次进一步的电离——自由基化学的雪球就此滚起。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.tag(500, 320, '一个 300 keV 电子携带约 4.8×10^{-17} J', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 11, weight: 700, pad: 9 })
  b.wtext(50, 380, '自由基化学在皮秒至微秒内完成，而束下损伤在秒级上积分——时间尺度的分离正是「总剂量」成为良记账变量的原因（只要剂量率不把化学推入非线性区）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、干样品：直接损伤的四副面孔 ============
  b.panel(710, 132, 660, 270, { title: '二、干样品：直接损伤的四副面孔' })
  const face = (x: number, y: number, t: string, desc: string, c: string, fill: string) => {
    b.rect(x, y, 300, 88, { fill, fillOp: 0.55, stroke: c, sw: 1.6, rx: 8 })
    b.text(x + 16, y + 24, t, { size: 12.5, weight: 700, fill: c })
    b.wtext(x + 16, y + 44, desc, { size: 10.5, fill: C.sub, maxW: 270, lh: 14 })
  }
  face(730, 178, '① 键断裂', '肽键、二硫键与糖苷键在电离后经碎裂反应断开。', C.bad, C.badL)
  face(1050, 178, '② 交联', '相邻分子上的自由基彼此复合，把可溶蛋白织成不溶网络。', C.pro, C.proL)
  face(730, 276, '③ 质量损失', '氢、氧与小分子碎片（二氧化碳、含硫片段）陆续挥发，净失重可达百分之十几。', C.warn, C.warnL)
  face(1050, 276, '④ 溅射与刻蚀', '高角度弹性碰撞把表面原子打出（生物电压区次要）；污染是其对偶过程。', C.acc, C.accL)
  b.wtext(730, 386, '化学指纹：辐照蛋白的谷氨酸与天冬氨酸优先去羧、含硫与芳香残基显著损耗；负染另有 bake 效应——高剂量下染料迁移重排、颗粒感变粗。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、水合样品：羟基自由基的间接攻势 ============
  b.panel(30, 422, 660, 300, { title: '三、水合样品：羟基自由基的间接攻势' })
  b.ellipse(170, 540, 44, 32, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(170, 545, '生物分子', { size: 11, weight: 700, fill: C.proD })
  ;[[80, 470], [250, 462], [292, 560], [76, 596], [186, 634], [58, 540]].forEach(([x, y]) => b.circle(x, y, 9, { fill: C.accL, stroke: C.acc, sw: 1.4 }))
  b.ctext(64, 448, 'H_{2}O', { size: 10, weight: 700, fill: C.accD })
  b.arrow(320, 430, 256, 456, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.circle(326, 428, 4, { fill: C.warn })
  b.ctext(340, 424, '电子或其次级电子', { size: 10, fill: C.mute })
  b.circle(250, 462, 5, { fill: C.enz })
  b.circle(292, 560, 5, { fill: C.enz })
  b.text(262, 452, 'OH·', { size: 11, weight: 700, fill: C.enzD })
  b.text(304, 578, 'OH·', { size: 11, weight: 700, fill: C.enzD })
  b.circle(76, 596, 4.5, { fill: C.dna })
  b.text(44, 616, 'e^{-}_{aq}', { size: 10.5, weight: 700, fill: C.dnaD })
  b.arrow(250, 462, 202, 516, { stroke: C.enz, sw: 1.5, dash: '4 3', marker: 'enz' })
  b.arrow(292, 560, 216, 552, { stroke: C.enz, sw: 1.5, dash: '4 3', marker: 'enz' })
  b.ctext(170, 668, '纳秒内攻击数纳米之内的一切分子', { size: 10.5, weight: 600, fill: C.enzD })
  b.wtext(360, 466, '电子或其次级电子把水分子电离与激发，产生水合电子、羟基自由基（OH·）与氢原子：OH· 的氧化电位仅次于氟，常温水中在纳秒量级内即攻击数纳米之内的一切分子——DNA 双链断裂、氨基酸侧链氧化、膜脂过氧化的链式反应都由它领衔。', { size: 11, fill: C.sub, maxW: 310, lh: 16 })
  b.tag(520, 592, 'G 值：每 100 eV 产生的分子数——OH· 约 2.7、水合电子约 2.6', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(360, 640, '对水合样品，间接损伤的贡献超过直接损伤；玻璃冰虽是固态，辐射化学的底账同样适用——只是反应半径被低温压缩（本章第 3 节）。', { size: 10.5, fill: C.sub, maxW: 310, lh: 15 })

  // ============ 四、损伤时序与 Henderson 极限 ============
  b.panel(710, 422, 660, 300, { title: '四、损伤的时序与 Henderson 极限' })
  b.axis(740, 655, 280, 175, {
    grid: false, xlabel: '电子剂量',
    xticks: [[0, '0'], [0.3, '30'], [0.6, '60'], [1, '100 e^{-}/Å^{2}']], yticks: [[1, '强'], [0, '弱']],
    title: '各分辨率档的信号衰减（示意）',
  })
  b.curve(740, 655, 280, 175, [[0, 1], [0.1, 0.75], [0.2, 0.55], [0.3, 0.4], [0.5, 0.22], [0.7, 0.12], [1, 0.06]], { stroke: C.bad, sw: 2.6, smooth: true })
  b.curve(740, 655, 280, 175, [[0, 1], [0.2, 0.88], [0.4, 0.75], [0.6, 0.62], [0.8, 0.5], [1, 0.4]], { stroke: C.warn, sw: 2.2, smooth: true })
  b.curve(740, 655, 280, 175, [[0, 1], [0.3, 0.95], [0.5, 0.9], [0.7, 0.84], [1, 0.76]], { stroke: C.ok, sw: 2.2, smooth: true })
  b.legend(880, 502, [['高分辨', C.bad], ['中分辨', C.warn], ['低分辨', C.ok]], { size: 10.5 })
  b.ctext(880, 548, '最先失去的恰是最想要的', { size: 10.5, weight: 700, fill: C.badD })
  b.rect(1050, 470, 300, 200, { fill: C.badL, fillOp: 0.55, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(1066, 494, 'Henderson 极限（1995）', { size: 13.5, weight: 700, fill: C.badD })
  b.wtext(1066, 518, '液氮温度下生物样品的可用剂量约 20 e^{-}/Å^{2}——再多，高分辨率信息折损的速率将超过信号累积的收益。', { size: 10.5, fill: C.sub, maxW: 270, lh: 15 })
  b.wtext(1066, 570, '液氦温度只能再挤出不多的改善（至多约两倍），远不足以改变量级。', { size: 10.5, fill: C.sub, maxW: 270, lh: 15 })
  b.wtext(1066, 606, '剂量率争论落幕：以总剂量计时，液氮下损伤与剂量率基本无关——放心以高帧率拍剂量分割的电影。', { size: 10.5, fill: C.sub, maxW: 270, lh: 15 })
  b.wtext(1066, 648, 'B 因子每 e^{-}/Å^{2} 约增 1–2 Å^{2}；损伤壁垒不随电压或亮度突破，唯一出路是让每个电子物尽其用。', { size: 10.5, fill: C.sub, maxW: 270, lh: 15 })
  b.wtext(740, 712, '实验测量法：电子衍射逐剂量追踪——各阶反射按分辨率从高到低依次衰减；成像样品用同区连续曝光的功率谱衰减代替。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
}

export default scene({
  title: '辐射损伤的物理化学：剂量账本与自由基雪球',
  subtitle: '剂量以 e^{-}/Å^{2} 记账（约 624 合 1 C/cm^{2}）；干样品四副面孔、水合样品 OH· 间接主导（G 值约 2.7/100 eV）；B 因子每 e^{-}/Å^{2} 增 1–2 Å^{2}；Henderson 极限约 20 e^{-}/Å^{2}',
  draw,
})
