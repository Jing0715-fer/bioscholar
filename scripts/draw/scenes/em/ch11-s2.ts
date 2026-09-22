// em ch11-s2 SEM 信号与探测器（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、相互作用体积 ============
  b.panel(30, 132, 700, 430, { title: '一、相互作用体积：信号的出生地与分层' })
  b.arrow(270, 168, 270, 424, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.text(282, 192, '入射电子探针（约 1–10 nm）', { size: 11, fill: C.accD })
  b.rect(100, 430, 380, 110, { fill: C.panelB, stroke: C.sub, sw: 1.8 })
  b.line(100, 430, 480, 430, { stroke: C.sub, sw: 3 })
  b.path('M 222,430 C 194,482 206,528 270,540 C 334,528 346,482 318,430', { fill: 'none', stroke: C.warn, sw: 1.5, dash: '6 4' })
  b.path('M 242,430 C 220,472 228,506 270,518 C 312,506 320,472 298,430', { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.6 })
  b.ctext(270, 496, '相互作用体积', { size: 9.5, fill: C.enzD })
  b.ctext(290, 554, 'X 射线生成区约 1–3 μm', { size: 9.5, fill: C.warnD })
  // SE1
  b.arrow(270, 424, 240, 406, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.arrow(270, 424, 300, 406, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ctext(270, 392, 'SE1（表层 1–10 nm）', { size: 9.5, fill: C.okD })
  // BSE + SE2
  b.arrow(270, 468, 170, 412, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.arrow(270, 468, 372, 412, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ctext(215, 448, 'BSE', { size: 9.5, weight: 700, fill: C.rna })
  b.arrow(170, 408, 170, 390, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.arrow(372, 408, 372, 390, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.ctext(170, 382, 'SE2', { size: 9.5, fill: C.okD })
  b.ctext(372, 382, 'SE2', { size: 9.5, fill: C.okD })
  // 腔壁 + SE3
  b.rect(58, 240, 20, 300, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.ctext(68, 232, '极靴/腔壁', { size: 9.5, fill: C.mute })
  b.arrow(166, 410, 88, 396, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(82, 390, 122, 372, { stroke: C.ok, sw: 1.5, marker: 'ok' })
  b.ctext(132, 362, 'SE3', { size: 9.5, fill: C.okD })
  // 图例
  const leg: [string, string][] = [
    ['SE1：入射点直接激发（约 1 nm）', C.ok],
    ['SE2：BSE 再激发（亚微米拖尾）', C.ok],
    ['SE3：腔壁再激发（均匀背景）', C.ok],
    ['BSE：能量近束能，Z 衬度', C.rna],
    ['X 射线：生成区约 1–3 μm', C.warn],
  ]
  leg.forEach(([s, c], i) => {
    b.rect(500, 248 + i * 22 - 8, 11, 11, { fill: c, rx: 2 })
    b.text(518, 258 + i * 22, s, { size: 10, fill: C.sub })
  })
  b.text(500, 378, 'SE 能量 < 50 eV（最概然 2–5 eV）', { size: 10, fill: C.mute })
  b.text(500, 398, 'BSE 产额随入射角增大', { size: 10, fill: C.mute })
  b.text(500, 418, '边缘与台阶侧壁「露脸」→ 发亮', { size: 10, fill: C.mute })

  // ============ 二、探测器几何 ============
  b.panel(750, 132, 620, 430, { title: '二、探测器几何：ET、环内与分段 BSE' })
  b.rect(920, 175, 200, 58, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.rect(990, 175, 60, 58, { fill: '#ffffff', stroke: C.sub, sw: 1.5 })
  b.rect(1002, 183, 36, 18, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.etext(912, 208, '物镜极靴', { size: 10, fill: C.sub })
  b.arrow(1020, 178, 1020, 428, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.text(1028, 206, 'e^{-}', { size: 10, fill: C.accD })
  b.ctext(950, 246, '环内探测器', { size: 9.5, fill: C.accD })
  b.rect(925, 252, 66, 16, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.rect(1049, 252, 66, 16, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.etext(918, 262, '四象限 BSE', { size: 9.5, fill: C.warnD })
  b.path('M 1020,426 q -16,-28 0,-56 q 16,-28 0,-56 q -12,-22 0,-44', { fill: 'none', stroke: C.ok, sw: 2, dash: '5 3' })
  b.text(1080, 340, 'SE1 螺旋导入', { size: 9.5, fill: C.okD })
  b.arrow(975, 428, 955, 272, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.arrow(1065, 428, 1085, 272, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.text(855, 330, 'BSE 直线飞行', { size: 9.5, fill: C.rna })
  b.rect(830, 430, 380, 55, { fill: C.panelB, stroke: C.sub, sw: 1.8 })
  b.line(830, 430, 1210, 430, { stroke: C.sub, sw: 3 })
  b.ctext(1195, 466, '样品', { size: 9.5, fill: C.mute })
  // ET 探测器
  b.rect(1150, 350, 130, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.polygon([[1162, 372], [1268, 372], [1256, 412], [1174, 412]], { fill: '#f1f5f9', stroke: C.sub, sw: 1.6 })
  for (let i = 0; i < 3; i++) b.line(1140 + i * 5, 355, 1140 + i * 5, 400, { stroke: C.acc, sw: 1.2 })
  b.ctext(1215, 334, 'ET 探测器：闪烁体 + PMT', { size: 10, fill: C.dnaD })
  b.ctext(1215, 428, '+ 偏压前栅收低能 SE', { size: 9.5, fill: C.mute })
  b.path('M 1105,430 Q 1145,415 1141,372', { fill: 'none', stroke: C.ok, sw: 1.8, dash: '4 3', marker: 'ok' })
  b.wtext(770, 505, 'ET（1960 年设计）：闪烁体＋光电倍增管，前栅加数十至数百伏正偏压拉来低能 SE，BSE 仅收几何直射部分；环内探测器藏于极靴内孔，SE1 效率最高、几乎无 SE2/SE3 污染（1 nm 级标配）；四象限求和突出 Z 衬度、相减突出凹凸——成分与形貌被算术分离。', { size: 10, fill: C.sub, maxW: 580, lh: 15 })

  // ============ 三、速查表 ============
  b.panel(30, 586, 700, 200, { title: '三、信号–深度–衬度速查' })
  b.table(50, 626, 660, {
    headers: ['信号', '逸出深度', '衬度来源', '分辨率'],
    colW: [110, 160, 200, 190], rowH: 28, fontSize: 11,
    rows: [
      ['SE1', '1–10 nm', '表面形貌', '探针级（约 1 nm）'],
      ['SE2 / SE3', '源于远处', '背景与拖尾', '亚微米～微米'],
      ['BSE', '约 0.1–1 μm', '原子序数 Z', '亚微米'],
      ['特征 X 射线', '生成区 1–3 μm', '元素成分', '微米级'],
    ],
  })

  // ============ 四、BSE 产额与荷电 ============
  b.panel(750, 586, 620, 200, { title: '四、BSE 产额随 Z 上升；绝缘样品荷电对策' })
  b.bars(770, 695, 240, 70, [0.05, 0.27, 0.5], {
    labels: ['碳 Z=6', '铁 Z=26', '金 Z=79'],
    vlabels: ['≈0.05', '≈0.27', '≈0.5'],
    fill: C.warnL, stroke: C.warn, max: 0.6,
  })
  b.wtext(770, 730, '产额随 Z 约 0.7–1 次幂上升、不饱和不交叉——成分衬度与免疫金（5–15 nm）读出的基础。', { size: 10, fill: C.sub, maxW: 280, lh: 13.5 })
  b.ctext(1180, 628, '荷电对策（按侵扰性排序）：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(1180, 656, '① 导电镀膜（最通用）', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(1180, 684, '② E_{2} 低电压平衡（1–3 keV）', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(1180, 712, '③ 低真空模式（气体离子中和）', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })
  b.tag(1180, 740, '④ 减速模式（落地能量压低）', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 9 })

  // ============ 五、高分辨目标 ============
  b.zone(30, 806, 1340, 172, {
    label: '五、高分辨目标与读图折扣',
    sub: '按分辨率需求选信号：1 nm 表面细节 → SE1 配环内；成分图 → BSE 亚微米；元素定量 → X 射线（接受微米级生成区）',
  })
  b.tag(250, 884, '收 SE1、挤 SE2 与 SE3', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(560, 884, '边缘亮带＝行程效应（非高度）', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.sub, pad: 9 })
  b.tag(870, 884, '同一斜面换朝向即换明暗', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.sub, pad: 9 })
  b.tag(1160, 884, '立体像对 / 多探测器合成纠偏', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.sub, pad: 9 })
  b.wtext(70, 930, '免疫金标记以背散射读出：5–15 nm 金粒在 SE 像只是模糊亮团，在 BSE 像是高衬度白点；样品台电流（束流减出射信号流）可当「充电表」实时预警。', { size: 10.5, fill: C.sub, maxW: 1280, lh: 15 })
}

export default scene({
  title: 'SEM 信号家族与探测器几何',
  subtitle: 'SE 能量 <50 eV、逸出深度 1–10 nm（SE1 探针级约 1 nm，SE2/SE3 亚微米）；BSE 逸出约 0.1–1 μm、Z 衬度（碳约 0.05、金约 0.5）；ET／环内／四象限探测器各司其职',
  draw,
})
