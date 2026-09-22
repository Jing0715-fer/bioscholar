// xc ch6-s1 衍射斑点的检测与指标化（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、找斑三重过滤 ============
  b.panel(30, 132, 660, 300, { title: '一、找斑：统计、形状、位置三重过滤' })
  b.rect(56, 170, 250, 236, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 4 })
  b.circle(181, 288, 10, { fill: C.ink })
  const spotList: [number, number, number][] = [
    [34, 36, 4], [74, 26, 3.5], [150, 30, 4.5], [196, 58, 3.5], [26, 96, 4],
    [70, 120, 4.5], [120, 40, 3], [176, 96, 4], [214, 150, 3.5], [46, 168, 3.5],
    [108, 180, 4], [152, 142, 3], [232, 86, 4], [92, 74, 3.5], [204, 196, 4],
  ]
  spotList.forEach(([dx, dy, r]) => b.circle(56 + dx, 170 + dy, r, { fill: C.mute, fillOp: 0.62 }))
  // 冰环（粉末环）与其上成串粉末斑
  b.circle(181, 288, 74, { fill: 'none', stroke: C.bad, sw: 2 })
  for (let k = 0; k < 14; k++) {
    const a = (k / 14) * Math.PI * 2
    b.circle(181 + 74 * Math.cos(a), 288 + 74 * Math.sin(a), 2.2, { fill: C.bad, fillOp: 0.8 })
  }
  // zinger：孤立单像素
  b.rect(113, 317, 6, 6, { fill: C.bad })
  b.circle(116, 320, 10, { fill: 'none', stroke: C.bad, sw: 1.3, dash: '3 3' })
  // 坏区掩膜
  b.rect(246, 180, 34, 26, { fill: C.badL, stroke: C.bad, sw: 1.3, dash: '4 3' })
  b.line(228, 231, 322, 202, { stroke: C.bad, sw: 1.1 })
  b.text(326, 204, '冰环上的粉末斑成串', { size: 9.5, weight: 700, fill: C.bad })
  b.line(280, 193, 322, 188, { stroke: C.bad, sw: 1.1 })
  b.text(326, 190, '坏区与遮挡（掩膜剔除）', { size: 9.5, weight: 700, fill: C.bad })
  b.line(192, 288, 322, 284, { stroke: C.sub, sw: 1.1 })
  b.text(326, 286, '光束挡板阴影', { size: 9.5, weight: 700, fill: C.sub })
  b.line(126, 320, 322, 318, { stroke: C.bad, sw: 1.1 })
  b.text(326, 320, '孤立单像素 zinger', { size: 9.5, weight: 700, fill: C.bad })
  b.text(320, 158, '找斑三重过滤：统计+形状+位置', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(320, 178, '每帧以阈值分割找出显著高于局部背景的像素团，按尺寸与形状过滤噪声——宇宙线、成片冰晶与霜斑都要挡掉。两个旋钮：显著性阈值（局部背景之上 3–6σ）、尺寸窗（三五个到几十个像素）。', { size: 10, fill: C.sub, maxW: 354, lh: 13.5 })
  b.wtext(320, 236, '窗口要与像素角分辨率匹配：斑点典型横宽三到十个像素——窗窄了弱弥散斑被当背景、开宽了邻斑粘连成团；找斑表混入百分之几噪声点，差矢量傅里叶的周期峰就会被抹糊。实务先拿头几帧试找斑调参。', { size: 10, fill: C.sub, maxW: 354, lh: 13.5 })
  b.table(320, 302, 354, {
    headers: ['PAD（像素阵列）', 'CCD'],
    colW: [190, 164],
    rowH: 24,
    fontSize: 9.5,
    rows: [
      ['逐光子计数', '电荷转移读出'],
      ['无读出噪声与暗电流', '读出噪声与暗电流累积'],
      ['点扩散极小；假斑为孤立 zinger', '强斑电荷溢出拉成条纹'],
    ],
  })
  b.ctext(181, 420, '一帧的斑点表（每帧数十到数百个斑点）', { size: 9.5, fill: C.mute })

  // ============ 二、指标化 ============
  b.panel(710, 132, 660, 300, { title: '二、指标化：从斑点表猜出晶格' })
  b.text(730, 176, 'XDS：一维傅里叶（dopangram）', { size: 11, weight: 700, fill: C.ink })
  b.arrow(730, 372, 1000, 372, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(730, 372, 730, 186, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.polyline([[736, 368], [748, 372], [760, 365], [772, 370], [784, 366], [796, 371], [808, 367], [820, 372], [832, 366], [844, 370], [856, 368], [868, 372], [880, 366], [892, 370], [904, 367], [916, 371], [928, 368], [940, 372], [952, 366], [964, 370], [976, 367], [988, 371], [996, 369]] as [number, number][], { stroke: C.faint, sw: 1.4 })
  const peaks: [number, number][] = [[770, 58], [830, 88], [950, 44]]
  peaks.forEach(([px, h]) => {
    b.polygon([[px - 4, 372], [px, 372 - h], [px + 4, 372]], { fill: C.acc, fillOp: 0.65, stroke: C.acc, sw: 1.2 })
  })
  b.tag(830, 262, '周期峰 = 晶格平移基矢', { fill: C.accL, stroke: C.acc, size: 9.5, weight: 700, tfill: C.accD, pad: 6 })
  b.ctext(865, 396, '差矢量长度', { size: 9.5, weight: 600, fill: C.sub })
  b.etext(724, 196, '功率', { size: 9.5, fill: C.mute })
  b.wtext(730, 316, '把帧内斑点两两作差得到差矢量集合，对其做一维傅里叶——周期峰给出候选晶格平移基矢。', { size: 9.5, fill: C.sub, maxW: 268, lh: 13 })
  b.text(1030, 180, 'DIALS：FFT 网格搜索（基矢撒进倒易盒试铺）', { size: 10.5, weight: 700, fill: C.ink })
  b.rect(1030, 190, 320, 186, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 6 })
  for (let i = 0; i < 8; i++) for (let j = 0; j < 5; j++) {
    b.circle(1060 + 32 * i, 352 - 32 * j, 2.4, { fill: C.mute })
  }
  b.arrow(1060, 352, 1124, 352, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.arrow(1060, 352, 1060, 288, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.text(1090, 368, 'a*', { size: 10.5, weight: 700, fill: C.bad, italic: true })
  b.text(1040, 320, 'b*', { size: 10.5, weight: 700, fill: C.bad, italic: true })
  ;[[1124, 352], [1060, 320], [1092, 320], [1124, 320], [1092, 352]].forEach(([x, y]) => {
    b.circle(x, y, 4, { fill: C.acc, stroke: '#ffffff', sw: 1.2 })
  })
  b.wtext(1240, 250, '候选基矢直接在三维倒易盒里试铺，能对付斑点较少或带伪对称的疑难帧。', { size: 9.5, fill: C.sub, maxW: 108, lh: 13 })
  b.wtext(726, 392, '一句话比较：一维傅里叶快而对取向鲁棒；FFT 网格搜索更耐疑难。两者都输出「候选晶格加取向」与匹配置信度——若多数斑点落不进任何候选格，先别怪算法，回头查冰环掩膜与找斑参数。评价指标化的尺子：晶格与取向正确时，绝大多数斑点的预测位置与实测吻合到亚像素级，残余偏差交给精修吸收。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })

  // ============ 三、晶格歧义与伪对称 ============
  b.panel(30, 452, 660, 490, { title: '三、晶格歧义与伪对称陷阱' })
  b.rect(60, 492, 150, 110, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 5 })
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) {
    b.circle(75 + 35 * i, 510 + 35 * j, 3.5, { fill: C.mute })
  }
  b.ctext(135, 622, 'tP：仅角上有格点', { size: 10, weight: 700, fill: C.sub })
  b.rect(230, 492, 150, 110, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 5 })
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) {
    b.circle(245 + 35 * i, 510 + 35 * j, 3.5, { fill: C.mute })
  }
  for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) {
    b.circle(262.5 + 35 * i, 527.5 + 35 * j, 3.5, { fill: C.bad })
  }
  b.ctext(305, 622, 'tI：体心额外格点', { size: 10, weight: 700, fill: C.bad })
  b.wtext(60, 640, '四方晶系 tP 与 tI 的晶胞度规完全相同（a=b、c 一致），单看斑点位置永远分不出两种心性——裁决靠消光统计：真 tI 的 h+k+l 为奇的反射系统性缺席。', { size: 9.5, fill: C.sub, maxW: 320, lh: 13.5 })
  b.text(400, 486, '奇偶消光：真缺席与伪消光', { size: 11, weight: 700, fill: C.ink })
  const hbar = (x: number, v: number, fill: string, stroke: string) => {
    if (v <= 2) b.rect(x, 577, 22, 3, { fill: C.bad })
    else b.rect(x, 580 - v, 22, v, { fill, stroke, sw: 1.2, rx: 2 })
  }
  b.ctext(465, 508, '真 tI：奇反射缺席', { size: 10, weight: 700, fill: C.ink })
  hbar(408, 44, C.accL, C.acc); hbar(438, 0, C.accL, C.acc); hbar(468, 40, C.accL, C.acc); hbar(498, 0, C.accL, C.acc)
  ;[408, 438, 468, 498].forEach((x, i) => b.ctext(x + 11, 598, String(i), { size: 9, fill: C.mute }))
  b.ctext(625, 508, '伪消光：奇反射显著偏弱', { size: 10, weight: 700, fill: C.ink })
  hbar(568, 44, C.accL, C.acc); hbar(598, 12, C.warnL, C.warn); hbar(628, 40, C.accL, C.acc); hbar(658, 10, C.warnL, C.warn)
  ;[568, 598, 628, 658].forEach((x, i) => b.ctext(x + 11, 598, String(i), { size: 9, fill: C.mute }))
  b.ctext(533, 612, 'h+k+l 序号（示意）', { size: 8.5, fill: C.mute })
  b.wtext(400, 636, '非晶体学平移（如二聚体按半平移堆垛）让 tP 晶体的奇反射显著偏弱、貌似缺席；误选 tI 则近半反射按消光扔掉、完整度虚低一半，漏选则本该缺席的噪声反射混进合并、R_{meas} 暴涨——稳妥做法：两种心性各跑一遍缩放合并，比对统计量再拍板。', { size: 9.5, fill: C.sub, maxW: 274, lh: 13.5 })
  b.wtext(60, 700, '预警工具两件：差值帕特森的原点峰诊断伪平移（分子按非晶体学平移堆垛，使部分反射系统性增强）；孪生的预警是孪生分数趋近 0.5（完全孪生）与合并 R 因子反常偏低——「好得可疑」的低合并 R 正是假对称平均的结果。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.text(60, 748, 'L 检验：L = (I_{1}−I_{2})/(I_{1}+I_{2}) 的 |L| 分布', { size: 11, weight: 700, fill: C.ink })
  const hist = (x: number, hs: number[], fill: string, stroke: string) => {
    const bw = 30
    hs.forEach((h, i) => b.rect(x + i * bw, 850 - h, bw - 4, h, { fill, stroke, sw: 1.2, rx: 2 }))
    b.line(x - 6, 850, x + hs.length * bw + 6, 850, { stroke: C.sub, sw: 1.6 })
  }
  hist(66, [38, 42, 40, 36, 41, 38, 40, 42], C.okL, C.ok)
  b.ctext(180, 872, '理想单晶：|L| 近均匀分布', { size: 10, weight: 700, fill: C.okD })
  hist(386, [64, 50, 38, 28, 20, 14, 10, 7], C.badL, C.bad)
  b.ctext(500, 872, '孪生：配对强度被拉平、|L| 向零堆积', { size: 10, weight: 700, fill: C.bad })
  b.ctext(180, 890, '|L|（0 至 1）', { size: 9, fill: C.mute })
  b.ctext(500, 890, '|L|（0 至 1）', { size: 9, fill: C.mute })
  b.text(60, 916, '孪生分数越接近 0.5 堆积越狠；配合「好得可疑」的低合并 R 与表观 Laue 对称升阶，三证齐全即可立案（孪生系统判定见第 11 章）。', { size: 9.5, fill: C.sub })

  // ============ 四、精修与空间群四步 ============
  b.panel(710, 452, 660, 490, { title: '四、晶胞、取向与 mosaicity 的精修与空间群判定' })
  b.text(726, 486, '最小二乘精修：把预测贴到实测上', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(726, 506, '待精修参数：晶胞六参数、取向三参数、探测器几何（距离、中心、扭转）与 mosaicity——精修收敛后，程序即可预测全部帧上的全部反射位置，积分才有靶子。', { size: 10, fill: C.sub, maxW: 284, lh: 14 })
  b.text(726, 572, 'mosaicity：嵌镶块角分布的宽度', { size: 11, weight: 700, fill: C.ink })
  b.wtext(726, 592, '0.1° 上下为良、1° 为差；它决定每个反射在 φ 方向摊到几帧——0.3° 镶嵌配 0.2° 帧宽，多数反射跨两帧。各向异性镶嵌也应建模，否则斑点尺寸的系统残差会被误读为损伤；mosaicity 估错半档，强度就有系统偏差。', { size: 10, fill: C.sub, maxW: 284, lh: 14 })
  b.text(726, 672, '收敛判据', { size: 11, weight: 700, fill: C.ink })
  b.wtext(726, 692, '斑点位置残差（预测与实测之差）应压到亚像素量级、且不随帧号漂移；若有漂移，先怀疑晶体在冷流里「爬」（晶体轴与测角仪轴不重合、冰垫松动），其次才是模型不足。', { size: 10, fill: C.sub, maxW: 284, lh: 14 })
  b.text(1030, 486, '手性约束红利：230 个砍到 65 个', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(1030, 506, '蛋白由 L 型氨基酸等手性构件构成，只能结晶进 65 个 Sohncke 空间群（仅含旋转、螺旋与平移操作的群）。', { size: 10, fill: C.sub, maxW: 324, lh: 14 })
  b.table(1030, 548, 324, {
    headers: ['步骤', '依据', '输出'],
    colW: [44, 158, 122],
    rowH: 30,
    fontSize: 9.5,
    rows: [
      ['1', 'Laue 对称：等效方向强度', '可能点群'],
      ['2', '系统消光：消光规律', '候选空间群'],
      ['3', '手性：限 65 个 Sohncke 群', '裁掉非手性群'],
      ['4', '绝对构型：反常与 Flack', '最终群与手性'],
    ],
  })
  b.wtext(1030, 726, '实操抓手：第一步以等效方向强度相关检验筛 Laue 群（xtriage 给出各候选相关系数与置信度）；2_{1} 与 2 的分野只看 0k0 的奇偶；第四步 Flack 参数贴近零确认绝对构型、贴近 0.5 提示倒反孪生。', { size: 9.5, fill: C.sub, maxW: 324, lh: 13.5 })
  b.wtext(726, 786, '四步走完仍有歧义时（如 P2_{1} 与 P2 择一），以强度统计是否支持螺旋轴消光、以及换群重精修后的 R 因子裁决；终审惯例：残存的两个候选各精修一轮，R_{free} 低者胜出——让数据自己当法官。现代流程换群成本已很低，宁可多试。', { size: 10, fill: C.sub, maxW: 616, lh: 14 })
  b.rect(726, 830, 180, 40, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(816, 854, '残存候选群 A 与 B', { size: 10, weight: 700, fill: C.ink })
  b.arrow(910, 850, 930, 850, { stroke: C.sub, sw: 1.8 })
  b.rect(934, 830, 200, 40, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(1034, 854, '各精修一轮（换群成本已很低）', { size: 10, weight: 700, fill: C.accD })
  b.arrow(1138, 850, 1158, 850, { stroke: C.sub, sw: 1.8 })
  b.rect(1162, 830, 192, 40, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 7 })
  b.ctext(1258, 854, 'R_{free} 低者胜出', { size: 10, weight: 700, fill: C.okD })
  b.text(726, 906, '本节产物：晶格、取向、mosaicity 与空间群——它们是下一节积分的靶子与坐标系。', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '衍射斑点的检测与指标化：从照片到晶格',
  subtitle: '找斑 3–6σ 阈值与尺寸窗；一维傅里叶与 FFT 网格搜索两路指标化；tP 与 tI 度规相同靠消光裁决；L 检验揪孪生；230 个空间群砍到 65 个 Sohncke 群',
  draw,
})
