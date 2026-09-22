// xc ch5-s2 旋转法与衍射几何设计（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、旋转法：倒易点阵绕转轴扫过反射球 ============
  b.panel(30, 132, 660, 300, { title: '一、旋转法：倒易点阵绕转轴扫过反射球' })
  const Ox = 210, Oy = 280, R = 112
  b.circle(Ox, Oy, R, { fill: C.accL, fillOp: 0.28, stroke: C.acc, sw: 2.2 })
  // 倒易格点阵（原点置于 L）
  for (let i = 1; i <= 6; i++) for (let j = -3; j <= 3; j++) {
    b.circle(325 - 22 * i, Oy - 22 * j, 2.6, { fill: C.mute })
  }
  // 激发壳（球面弧带）
  b.path('M99.7,299.4 A112,112 0 0 1 99.7,260.6', { fill: 'none', stroke: C.ok, sw: 9, opacity: 0.4 })
  // 一帧 Δφ 弧带
  b.path('M98.1,283.9 A112,112 0 0 1 98.1,276.1', { fill: 'none', stroke: C.bad, sw: 5 })
  b.text(46, 318, '一帧 Δφ 弧带', { size: 9, weight: 700, fill: C.bad })
  // 落上球面的格点与衍射束
  b.circle(102, 251, 4.5, { fill: C.acc, stroke: '#ffffff', sw: 1.2 })
  b.circle(102, 309, 4.5, { fill: C.acc, stroke: '#ffffff', sw: 1.2 })
  b.arrow(Ox, Oy, 88, 245, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.text(128, 238, '衍射束', { size: 9.5, weight: 700, fill: C.enzD })
  // mosaic 扇形（夸大示意）
  b.polygon([[325, 280], [102, 251], [102, 309]], { fill: C.enzL, fillOp: 0.4 })
  b.line(325, 280, 102, 251, { stroke: C.rose, sw: 1.6, dash: '5 4' })
  b.line(325, 280, 102, 309, { stroke: C.rose, sw: 1.6, dash: '5 4' })
  b.text(46, 376, 'mosaic 扇形（夸大示意）：φ 向角宽 ≈ mosaicity + 束发散', { size: 9.5, fill: C.rose })
  // 入射束、晶体、倒易原点
  b.arrow(36, Oy, 202, Oy, { stroke: C.warn, sw: 2.6, marker: 'warn' })
  b.ctext(104, 268, '入射束', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(Ox, 304, 'O 晶体（球心）', { size: 9.5, fill: C.sub })
  b.circle(325, Oy, 5, { fill: C.bad })
  b.text(338, 266, '倒易原点 L', { size: 10, weight: 700, fill: C.bad })
  // 转轴与盲区锥
  b.line(325, 168, 325, 392, { stroke: C.pro, sw: 2, dash: '9 5' })
  b.circle(325, 160, 8, { fill: '#ffffff', stroke: C.pro, sw: 2 })
  b.line(320, 155, 330, 165, { stroke: C.pro, sw: 1.6 })
  b.line(320, 165, 330, 155, { stroke: C.pro, sw: 1.6 })
  b.text(342, 164, '转轴 φ（测角仪主轴）', { size: 10, weight: 700, fill: C.proD })
  b.polygon([[325, 192], [318, 254], [332, 254]], { fill: C.badL, fillOp: 0.6 })
  b.polygon([[325, 368], [318, 306], [332, 306]], { fill: C.badL, fillOp: 0.6 })
  b.circle(325, 220, 2.4, { fill: C.faint })
  b.circle(325, 340, 2.4, { fill: C.faint })
  b.wtext(338, 292, '盲区锥：转轴附近格点永远贴不上球面；高对称群靠等效反射补上，P1 大晶胞须第二取向再收一段。', { size: 9.5, fill: C.bad, maxW: 210, lh: 13.5 })
  b.wtext(46, 402, 'Arndt 与 Wonacott 1970 年代确立旋转法：把「同时衍射」切成每帧少量的流水作业。同步辐射 180° 以 Δφ=0.2° 切 900 帧、每帧 0.05–0.2 s、近乎零等待读出，整场约 2–5 分钟；家用源以 0.5–1.0° 宽帧配 30–60 s 曝光，180° 要两三个小时。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })

  // ============ 二、每帧转角 Δφ ============
  b.panel(710, 132, 660, 300, { title: '二、每帧转角 Δφ：在两种失败之间走钢丝' })
  b.tag(880, 168, '格点角间距 ≈ (d_{min}/a_{max})×57.3°', { fill: C.panelB, stroke: C.sub, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  b.tag(1164, 168, '反射 φ 向角宽 ≈ mosaicity + 束发散', { fill: C.panelB, stroke: C.sub, size: 10.5, weight: 700, tfill: C.ink, pad: 8 })
  b.table(726, 192, 372, {
    headers: ['a_{max}', 'd_{min}', '格点角间距', '可用 Δφ'],
    colW: [80, 72, 92, 128],
    rowH: 27,
    fontSize: 10.5,
    rows: [
      ['150 Å', '2.0 Å', '约 0.76°', '0.2–0.3°'],
      ['300 Å', '2.0 Å', '约 0.38°', '0.1–0.15°'],
    ],
  })
  b.wtext(1120, 198, '常规蛋白晶体取 0.1–1.0°：晶胞大、mosaicity 大或波长长时切窄（0.1–0.3°），家用源小晶胞可放宽到 0.5–1.0°。大镶嵌度反而要更窄的转角——斑点在 φ 方向的角宽已经很大，再叠加大转角只会糊成一片。', { size: 10, fill: C.sub, maxW: 234, lh: 14 })
  b.wtext(1120, 288, '部分反射占比近似等于 mosaicity 与帧宽之比：0.15° 镶嵌配 0.2° 帧宽，约四分之三反射跨帧；帧宽翻倍占比约减半，但斑点重叠风险同步上升。', { size: 10, fill: C.sub, maxW: 234, lh: 14 })
  // φ 方向剖面跨帧示意
  for (let i = 0; i < 3; i++) {
    b.rect(730 + i * 120, 300, 120, 64, { fill: i % 2 === 0 ? C.panelB : '#ffffff', stroke: C.line, sw: 1 })
    b.ctext(790 + i * 120, 292, `帧 ${i + 1}`, { size: 9.5, fill: C.mute })
  }
  b.line(730, 350, 1090, 350, { stroke: C.sub, sw: 1.8 })
  b.polygon([[790, 350], [820, 320], [850, 310], [880, 320], [910, 350]], { fill: C.enzL, fillOp: 0.5 })
  b.spline([[790, 350], [820, 320], [850, 310], [880, 320], [910, 350]], { fill: 'none', stroke: C.enz, sw: 2.6 })
  b.polygon([[985, 350], [1007, 328], [1030, 320], [1053, 328], [1075, 350]], { fill: C.okL, fillOp: 0.5 })
  b.spline([[985, 350], [1007, 328], [1030, 320], [1053, 328], [1075, 350]], { fill: 'none', stroke: C.ok, sw: 2.6 })
  b.line(820, 372, 880, 372, { stroke: C.rose, sw: 1.4, marker: 'mute', markerStart: 'mute' })
  b.ctext(850, 386, 'φ 向角宽', { size: 9, fill: C.rose })
  b.line(970, 372, 1090, 372, { stroke: C.sub, sw: 1.4, marker: 'mute', markerStart: 'mute' })
  b.ctext(1030, 386, '帧宽 Δφ', { size: 9, fill: C.sub })
  b.tag(850, 408, '部分反射：跨两帧拼合', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: '#831843', pad: 7 })
  b.tag(1030, 408, '整帧落位：一帧收全', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 7 })

  // ============ 三、光路几何：距离、偏移与挡板 ============
  b.panel(30, 452, 660, 490, { title: '三、光路几何：探测器距离、2θ 偏移与挡板' })
  b.rect(64, 536, 8, 48, { fill: C.sub })
  b.rect(88, 536, 8, 48, { fill: C.sub })
  b.ctext(80, 600, '光阑', { size: 9, fill: C.sub })
  b.arrow(20, 560, 236, 560, { stroke: C.warn, sw: 2.6, marker: 'warn' })
  b.ctext(122, 548, 'X 射线', { size: 10.5, weight: 700, fill: C.warnD })
  b.rect(240, 552, 16, 16, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 3 })
  b.line(248, 506, 248, 614, { stroke: C.pro, sw: 1.8, dash: '7 5' })
  b.circle(248, 500, 7, { fill: '#ffffff', stroke: C.pro, sw: 1.8 })
  b.line(244, 496, 252, 504, { stroke: C.pro, sw: 1.4 })
  b.line(244, 504, 252, 496, { stroke: C.pro, sw: 1.4 })
  b.text(262, 504, '转轴 φ', { size: 9.5, weight: 700, fill: C.proD })
  b.circle(286, 560, 7, { fill: C.ink })
  b.ctext(286, 588, '挡板', { size: 9, fill: C.sub })
  // 近距探测器与衍射锥
  b.rect(430, 470, 14, 180, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(437, 460, 'D = 100 mm', { size: 10, weight: 700, fill: C.accD })
  b.line(256, 556, 430, 470, { stroke: C.enz, sw: 1.5 })
  b.line(256, 564, 430, 650, { stroke: C.enz, sw: 1.5 })
  b.ctext(352, 516, '2θ_{max}', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(437, 672, '可及 1.31 Å', { size: 10, weight: 700, fill: C.enzD })
  // 远距探测器（虚线）
  b.rect(612, 470, 14, 180, { fill: 'none', stroke: C.mute, sw: 1.8, dash: '6 4' })
  b.ctext(619, 460, 'D = 200 mm（虚线）', { size: 10, fill: C.mute })
  b.line(256, 552, 612, 470, { stroke: C.mute, sw: 1.3, dash: '5 4' })
  b.line(256, 568, 612, 650, { stroke: C.mute, sw: 1.3, dash: '5 4' })
  b.ctext(619, 672, '2.2 Å', { size: 10, weight: 700, fill: C.mute })
  b.braceV(421, 472, 176, { label: 'x_{max}（有效半宽）', left: true })
  b.table(56, 700, 340, {
    title: 'λ = 1.0 Å、有效半宽 100 mm 的算例',
    headers: ['D（mm）', '2θ_{max}', 'd_{min}（Å）'],
    colW: [80, 110, 150],
    rowH: 27,
    fontSize: 10.5,
    rows: [
      ['100', '45.0°', '1.31'],
      ['150', '33.7°', '1.72'],
      ['200', '26.6°', '2.2'],
    ],
  })
  b.wtext(420, 700, '距离越近可及分辨率越高，代价是斑点更密、重叠风险上升——晶胞大就退远，要高分辨率就逼近。', { size: 10, fill: C.sub, maxW: 254, lh: 14 })
  b.wtext(420, 744, '2θ 偏移（0–30°）：把探测器中心挪离直射点，等效把高角区搬进板内、抬升可及分辨率；代价是最低分辨率反射落到板外——低角缺失伤电子密度。', { size: 10, fill: C.sub, maxW: 254, lh: 14 })
  b.wtext(420, 806, '挡板：截住直射光保护探测器；影子边缘决定能收到的最低分辨率——被挡项一旦进入 20–30 Å 一带，低频「形体」的原料就开始紧缺，试收照片上量影子边缘即可预警。', { size: 10, fill: C.sub, maxW: 254, lh: 14 })
  b.wtext(56, 856, '像素底数：172 μm 像素在 100 mm 处对应约 0.1°/像素，质心可定到十分之一像素（约 0.01°）——这是指标化做到亚像素的物理底数。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.wtext(56, 900, 'κ（kappa）几何三轴测角仪可任设初始取向，让高分辨率壳层落入探测器覆盖、避开遮挡与坏区；单 φ 轴机型只能绕一根轴转，P1 大晶胞常以第二取向补盲区——「两段拼一套」是常规操作。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })

  // ============ 四、总范围、inverse beam 与 PAD ============
  b.panel(710, 452, 660, 490, { title: '四、总旋转范围、inverse beam 与 PAD 过载斑' })
  b.text(726, 486, '总旋转范围：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(858, 482, 'P1：180°', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
  b.tag(1035, 482, '高对称群：30–90°', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  b.tag(1215, 482, '反常不享对称便利', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  // inverse beam 时序
  b.text(726, 524, 'inverse beam：180° 对顶位成对收 Bijvoet', { size: 10.5, weight: 700, fill: C.ink })
  b.arrow(736, 580, 1000, 580, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const ticks = [760, 800, 840, 880, 920, 960]
  const phiLab = ['φ', 'φ+180°', 'φ+Δ', 'φ+Δ+180°', 'φ+2Δ', 'φ+2Δ+180°']
  ticks.forEach((x, i) => {
    b.circle(x, 580, 4, { fill: i % 2 === 0 ? C.acc : C.bad })
    b.ctext(x, 602, i % 2 === 0 ? '正' : '反', { size: 10, weight: 700, fill: i % 2 === 0 ? C.accD : C.bad })
    b.ctext(x, 568, phiLab[i], { size: 8.5, fill: C.mute })
  })
  b.path('M760,576 A20,16 0 0 1 800,576', { fill: 'none', stroke: C.bad, sw: 1.5 })
  b.path('M840,576 A20,16 0 0 1 880,576', { fill: 'none', stroke: C.bad, sw: 1.5 })
  b.text(906, 550, 'F(h) 与 F(−h) 配对', { size: 9, weight: 700, fill: C.bad })
  b.wtext(726, 624, '正位收一帧，随即把 φ 加 180° 收对帧，「正、反、正、反」交替推进——两员在几乎相同的通量、吸收与损伤状态下先后落上反射球，做差时漂移大多抵消；代价是角度预算翻倍，只在反常方案启用。', { size: 9.5, fill: C.sub, maxW: 284, lh: 13.5 })
  // PAD 与过载斑
  b.text(1030, 524, 'PAD 像素阵列探测器（当代标配）', { size: 11, weight: 700, fill: C.ink })
  b.wtext(1030, 544, 'PILATUS 与 EIGER 以硅像素阵列逐光子计数：无读出噪声与暗电流、点扩散极小、帧率覆盖微秒到毫秒，EIGER 支持无死时间连续读出。', { size: 10, fill: C.sub, maxW: 324, lh: 14 })
  b.text(1030, 596, '过载斑（saturated pixel）', { size: 11, weight: 700, fill: C.bad })
  b.wtext(1030, 616, '单像素单帧可计数上限有限，超限像素强度不可信。软件侧：剔除过载像素后按标准剖面外推补全，或丢弃该反射指望冗余补位；硬件侧：插衰减器减通量、降管流、拉远距离。低角强反射承载低频结构信息，一丢了之有代价；若过载清单显示低角壳层成片过载，正确动作是回头调档重收。', { size: 10, fill: C.sub, maxW: 324, lh: 14 })
  // 两段式收数
  b.text(726, 686, '两段式收数（衰减器铝箔 20–100 μm、每档衰减两三倍）', { size: 10.5, weight: 700, fill: C.ink })
  b.rect(726, 700, 170, 44, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 7 })
  b.ctext(811, 717, '① 重衰减收 3–5 帧', { size: 10, weight: 700, fill: '#92400e' })
  b.ctext(811, 734, '保住低角强斑', { size: 9, fill: C.sub })
  b.arrow(898, 722, 918, 722, { stroke: C.sub, sw: 1.8 })
  b.rect(922, 700, 180, 44, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(1012, 717, '② 撤衰减收正式数据', { size: 10, weight: 700, fill: C.accD })
  b.ctext(1012, 734, '后段按缩放比例拼回', { size: 9, fill: C.sub })
  b.arrow(1104, 722, 1124, 722, { stroke: C.sub, sw: 1.8 })
  b.rect(1128, 700, 226, 44, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 7 })
  b.ctext(1241, 717, '③ 两段接成一套完整数据', { size: 10, weight: 700, fill: C.okD })
  b.ctext(1241, 734, '低角强斑与高角弱斑各得其所', { size: 9, fill: C.sub })
  b.text(726, 768, '策略软件（MOSFLM 的 strategy 模块、BEST）在收数前预测完整度、重叠与剂量分配——「先试收再后悔」变成「先计算再动手」。', { size: 9.5, fill: C.mute })
  b.table(726, 782, 616, {
    headers: ['参数', '典型范围', '主要影响'],
    colW: [130, 120, 366],
    rowH: 28,
    fontSize: 11,
    rows: [
      ['每帧转角 Δφ', '0.1–1.0°', '大则弧向糊叠，小则部分反射多'],
      ['总旋转范围', '30–180°', '随空间群对称性与反常需求而定'],
      ['探测器距离', '60–200 mm', '近则分辨率高、斑点密'],
      ['2θ 偏移', '0–30°', '抬高可及分辨率、牺牲低角'],
    ],
  })
}

export default scene({
  title: '旋转法与衍射几何设计：Δφ、范围、距离与 PAD',
  subtitle: 'Δφ 0.1–1.0°：a_max 150 Å 角间距 0.76°、300 Å 得 0.38°；P1 转 180°、高对称群 30–90°；D 100/150/200 mm 得 d_min 1.31/1.72/2.2 Å',
  draw,
})
