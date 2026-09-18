// mi ch7-s3 环境因子对生长的影响（39-f 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、温度：三基点与钟形曲线 ============
  b.panel(30, 132, 1340, 270, { title: '一、温度：最低、最适、最高三基点决定钟形生长曲线' })

  const ax = 70, ay = 352, aw = 560, ah = 175
  b.axis(ax, ay, aw, ah, {
    xlabel: '温度',
    xticks: [[0.05, '最低温度'], [0.5, '最适温度'], [0.95, '最高温度']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  // 轴 ylabel 手绘于绘图区左上空白（避开 y 轴中部刻度与左缘）
  b.text(80, 205, '相对生长速率', { size: 13, weight: 600, fill: C.sub })
  for (const [tx, lab] of [[0.05, '最低'], [0.5, '最适'], [0.95, '最高']] as Array<[number, string]>) {
    b.line(ax + tx * aw, ay, ax + tx * aw, ay - ah, { stroke: C.mute, sw: 1.2, dash: '5 4', opacity: 0.7 })
  }
  b.curve(ax, ay, aw, ah, [
    [0.03, 0.02], [0.10, 0.10], [0.18, 0.28], [0.30, 0.62], [0.42, 0.92],
    [0.50, 1.0], [0.58, 0.93], [0.70, 0.62], [0.82, 0.28], [0.90, 0.10], [0.97, 0.02],
  ], { stroke: C.bad, sw: 3 })
  b.ctext(ax + 0.5 * aw, 172, '钟形曲线：峰即最适温度', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(70, 384, '低于最低温度不生长（代谢停滞）；高于最高温度蛋白质变性加速、死亡超过增殖。', { size: 10.5, fill: C.mute, maxW: 560, lh: 15 })

  // 右侧卡片
  b.rect(670, 190, 650, 88, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(690, 216, '五类温度型（按最适温度划分）', { size: 13, weight: 700, fill: C.ink })
  b.wtext(690, 240, '专性嗜冷 → 兼性嗜冷 → 嗜温 → 嗜热 → 超嗜热；代表生境从极地深海、冷藏食品、温带环境、温泉堆肥到海底热泉。', { size: 11, fill: C.sub, maxW: 610, lh: 16 })
  b.rect(670, 292, 650, 66, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.4, rx: 9 })
  b.text(690, 316, '增殖温度纪录', { size: 12.5, weight: 700, fill: C.bad })
  b.text(690 + 96, 316, '超嗜热古菌 Pyrolobus fumarii 保持 113 ℃ 增殖纪录', { size: 11.5, fill: C.sub })

  // ============ 二、pH 与水分活度 ============
  b.panel(30, 414, 660, 232, { title: '二、pH 与水分活度：胞外可以极端，胞内必须中性；「可用之水」' })

  // pH 响应曲线
  const px = 60, py = 592, pw = 300, ph = 128
  b.axis(px, py, pw, ph, {
    xticks: [[0.08, 'pH 1'], [0.5, 'pH 7'], [0.92, 'pH 13']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  // 轴 xlabel/ylabel 手绘（左缘截断与刻度冲突，改绘绘图区内空白处）
  b.text(358, 480, 'pH', { size: 15, weight: 600, fill: C.sub, anchor: 'end' })
  b.text(65, 480, '相对生长速率', { size: 13, weight: 600, fill: C.sub })
  b.curve(px, py, pw, ph, [
    [0.02, 0.02], [0.15, 0.15], [0.28, 0.5], [0.38, 0.85], [0.48, 1],
    [0.58, 0.85], [0.68, 0.5], [0.8, 0.15], [0.95, 0.02],
  ], { stroke: C.dna, sw: 3 })
  b.ctext(px + 0.48 * pw, py - ph - 14, '多数菌最适近中性', { size: 10.5, weight: 700, fill: C.dnaD })
  b.wtext(50, 628, '嗜酸菌胞内仍近中性：质子泵与 K⁺/H⁺ 反向转运构成反向离子梯度；生理酸性盐会使培养过程 pH 漂移。', { size: 10, fill: C.mute, maxW: 320, lh: 14 })

  // aw 刻度条
  b.text(370, 462, '水分活度 aw 阈值', { size: 12.5, weight: 700, fill: C.ink })
  b.line(375, 516, 645, 516, { stroke: C.sub, sw: 3, marker: 'ink' })
  const awPts: Array<[number, string, string, boolean]> = [
    [0.61, '0.61', '嗜干真菌极限', true],
    [0.86, '0.86', '金黄色葡萄球菌', false],
    [0.90, '0.90', '一般细菌要求', true],
  ]
  awPts.forEach(([v, lab, s, above]) => {
    const x = 375 + v * 270
    b.line(x, 508, x, 524, { stroke: C.ink, sw: 2 })
    b.ctext(x, above ? 494 : 546, lab, { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(x, above ? 478 : 562, s, { size: 9.5, fill: C.mute })
  })
  b.ctext(375, 534, '0', { size: 10, fill: C.mute })
  b.ctext(645, 534, '1.0', { size: 10, fill: C.mute })
  b.wtext(370, 592, '耐渗靠积累相容溶质——', { size: 11, weight: 700, fill: C.ink })
  b.tag(560, 588, '甘油', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 7 })
  b.tag(628, 588, '甜菜碱', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 7 })
  b.wtext(370, 618, '——不干扰胞内代谢而维持渗透平衡。', { size: 10, fill: C.mute, maxW: 300, lh: 14 })
  b.tag(560, 618, '海藻糖', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 7 })

  // ============ 三、氧气：五类反应型与活性氧防御 ============
  b.panel(710, 414, 660, 232, { title: '三、对氧的五类反应型：SOD 与过氧化氢酶决定生死' })

  const oxy: Array<[string, string, string]> = [
    ['专性需氧', '必须 O₂', '结核分枝杆菌等'],
    ['微需氧', '需低浓度 O₂（约 1%–10%）', '空肠弯曲菌、幽门螺杆菌'],
    ['兼性厌氧', '有氧无氧皆可', '大肠杆菌等'],
    ['耐氧厌氧', '不需 O₂ 但可耐受', '乳酸菌等'],
    ['专性厌氧', 'O₂ 有害，缺乏 SOD 被超氧阴离子杀死', '产气荚膜梭菌等'],
  ]
  oxy.forEach(([t, s, r], i) => {
    const y = 470 + i * 30
    b.circle(736, y - 4, 3.5, { fill: C.acc })
    b.text(748, y, t, { size: 11.5, weight: 700, fill: C.ink })
    b.text(748 + 88, y, s, { size: 10.5, fill: C.sub })
    b.text(748 + 88, y + 14, r, { size: 9.5, fill: C.mute })
  })
  // 活性氧防御链
  b.tag(790, 634, '2 O₂⁻ + 2H⁺', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 8 })
  b.arrow(856, 634, 906, 634, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(881, 618, 'SOD', { size: 10.5, weight: 700, fill: C.enzD })
  b.tag(952, 634, 'H₂O₂ + O₂', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  b.arrow(1016, 634, 1066, 634, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(1041, 618, '过氧化氢酶', { size: 10.5, weight: 700, fill: C.enzD })
  b.tag(1130, 634, '2 H₂O + O₂', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.ok, pad: 8 })

  // ============ 四、辐射 ============
  b.panel(30, 658, 660, 150, { title: '四、辐射：紫外线成嘧啶二聚体，γ 射线穿透力强' })

  b.path('M 60 700 q 10 -14 20 0 q 10 14 20 0 q 10 -14 20 0 q 10 14 20 0 q 10 -14 20 0 q 10 14 20 0', { stroke: C.dna, sw: 2.2, fill: 'none' })
  b.path('M 60 722 q 10 -14 20 0 q 10 14 20 0 q 10 -14 20 0 q 10 14 20 0 q 10 -14 20 0 q 10 14 20 0', { stroke: C.dna, sw: 2.2, fill: 'none' })
  for (let i = 0; i < 6; i++) b.line(70 + i * 20, 700, 70 + i * 20, 722, { stroke: C.dna, sw: 1.2, opacity: 0.5 })
  // 嘧啶二聚体
  b.line(130, 700, 150, 700, { stroke: C.bad, sw: 4 })
  b.line(130, 722, 150, 722, { stroke: C.bad, sw: 4 })
  b.line(133, 706, 147, 706, { stroke: C.bad, sw: 2 })
  b.line(133, 716, 147, 716, { stroke: C.bad, sw: 2 })
  b.ctext(140, 748, '胸腺嘧啶二聚体', { size: 10, weight: 700, fill: C.bad })
  b.path('M 300 690 q 8 -12 16 0 q 8 12 16 0', { stroke: C.warn, sw: 2, fill: 'none' })
  b.arrow(330, 692, 245, 706, { stroke: C.warn, sw: 2, marker: 'mute', dash: '6 4' })
  b.wtext(380, 700, '紫外线杀菌作用集中于 260 nm 附近（核酸吸收峰，低压汞灯主发射 254 nm）：相邻嘧啶形成二聚体，阻断复制与转录——穿透力弱，只适表面消毒。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })
  b.wtext(380, 772, 'γ 射线等电离辐射穿透力强，适合热敏医疗器械与食品。', { size: 10.5, fill: C.sub, maxW: 290, lh: 15 })

  // ============ 五、厌氧培养 ============
  b.panel(710, 658, 660, 150, { title: '五、厌氧培养：除氧手段与氧化还原电位指示剂' })

  const ana: Array<[number, string, string]> = [
    [810, '厌氧罐', '密闭罐内以产气袋耗氧'],
    [1010, '焦性没食子酸吸氧', '化学吸氧法'],
    [1210, '亨盖特滚管技术', '培养基内还原厌氧'],
  ]
  ana.forEach(([cx, t, s]) => {
    b.tag(cx, 716, t, { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 9 })
    b.ctext(cx, 744, s, { size: 10, fill: C.mute })
  })
  b.wtext(730, 786, '以美蓝、刃天青监控培养体系 Eh（氧化还原电位）；专性厌氧菌必须在低 Eh 下分离培养。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 六、五类温度型对照表 ============
  b.panel(30, 820, 1340, 160, { title: '六、五类温度型的生长范围与代表' })
  b.table(60, 852, 1280, {
    headers: ['温度型', '生长范围', '最适温度', '代表与生境'],
    colW: [160, 200, 200, 720],
    rowH: 24,
    fontSize: 11,
    rows: [
      ['专性嗜冷', '低温', '约 15 ℃ 以下', '极地、深海与冷藏食品中的细菌'],
      ['兼性嗜冷', '低温至中温', '约 20–30 ℃', '冷藏食品的腐败菌'],
      ['嗜温', '中温', '约 25–37 ℃', '绝大多数环境菌与人体寄生菌'],
      ['嗜热', '高温', '约 50–60 ℃', '温泉、堆肥、热管道中的细菌'],
      ['超嗜热', '更高温', '80 ℃ 以上', '海底热泉古菌——Pyrolobus fumarii 保持 113 ℃ 增殖纪录'],
    ],
  })
}

export default scene({
  title: '环境因子对微生物生长的影响：温度钟形曲线与 pH、渗透压、氧的响应',
  subtitle: '三基点温度决定钟形曲线，Pyrolobus fumarii 保持 113 ℃ 纪录；一般菌 aw>0.90、金葡菌低至 0.86、嗜干真菌约 0.61；专性厌氧菌缺 SOD 被超氧阴离子杀死；UV 260 nm 成嘧啶二聚体',
  draw,
})
