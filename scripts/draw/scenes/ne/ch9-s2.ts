// ne ch9-s2 听觉、前庭与化学感觉 / 听觉的中枢通路与编码（39-h 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、听觉上行通路 ============
  b.panel(30, 132, 660, 430, { title: '一、听觉上行通路：自蜗神经核起大量双侧交叉' })
  const stations: Array<[string, string, string, string]> = [
    ['螺旋神经节', '（柯蒂器 → 双极细胞）', C.dna, C.dnaL],
    ['蜗腹侧核', '（延髓脑桥界 · 分化放电型）', C.rna, C.rnaL],
    ['上橄榄核复合体', '（双耳比较 · 声源定位起点）', C.pro, C.proL],
    ['下丘', '（双耳线索整合 · 听-运动反射）', C.acc, C.accL],
    ['内侧膝状体', '（投射皮层前最后驿站）', C.enz, C.enzL],
    ['听皮层 A1（41 区）', '（频率拓扑 · 复杂特征抽取）', C.ok, C.okL],
  ]
  stations.forEach(([name, sub, c, cl], i) => {
    const y = 200 + i * 56
    b.rect(80, y, 250, 44, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.8, rx: 8 })
    b.ctext(205, y + 19, name, { size: 12, weight: 700, fill: C.ink })
    b.ctext(205, y + 35, sub, { size: 9, fill: C.mute })
    if (i < stations.length - 1) b.arrow(205, y + 44, 205, y + 56, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  // 交叉示意
  b.wtext(460, 226, '自蜗神经核起大量交叉、双侧上行——一侧通路受损时对侧仍可传递，故单侧皮层或通路病变几乎不致单侧耳聋。', { size: 11, fill: C.sub, maxW: 200, lh: 16 })
  b.path('M330,268 C386,274 396,300 330,312', { stroke: C.bad, sw: 2, dash: '6 4', marker: 'bad' })
  b.path('M330,324 C386,330 396,356 330,368', { stroke: C.bad, sw: 2, dash: '6 4', marker: 'bad' })
  b.ctext(446, 300, '交叉至对侧', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(446, 356, '交叉至对侧', { size: 10.5, weight: 700, fill: C.bad })

  // ============ 二、频率编码双轨 ============
  b.panel(710, 132, 660, 430, { title: '二、频率编码双轨：场所编码 + 锁相时间编码' })
  b.rect(740, 200, 280, 130, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(760, 226, '场所编码（基底膜）', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(760, 250, '高频 → 基底膜底部振动；低频 → 顶部振动。约 5000 Hz 以上主要靠部位编码。', { size: 11, fill: C.sub, maxW: 240, lh: 16 })
  b.rect(1050, 200, 290, 130, { fill: C.rnaL, fillOp: 0.45, stroke: C.rna, sw: 1.8, rx: 9 })
  b.text(1070, 226, '锁相时间编码', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(1070, 250, '中低频下每周期固定相位放电；排齐发射（volley）把群体时间编码上限扩展到约 4–5 kHz。', { size: 11, fill: C.sub, maxW: 250, lh: 16 })
  // 音调拓扑
  b.ctext(1040, 366, '音调拓扑：蜗神经核至 A1 的每一级逐级保留', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(790, 386, 500, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(806, 412, '低频（前外侧）', { size: 11, weight: 700, fill: C.accD })
  b.etext(1274, 412, '高频（后内侧）', { size: 11, weight: 700, fill: C.bad })
  b.arrow(940, 412, 1140, 412, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(1040, 452, 'A1 皮层频率代表的方向', { size: 10.5, fill: C.mute })
  b.wtext(740, 496, '调谐曲线的特征频率阈值是耳蜗频率选择性的量度；OHC（外毛细胞）受损时尖端消失——选择性骤降而听阈升高。强度编码靠放电率、纤维募集与潜伏期三条途径。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })

  // ============ 三、声源定位：双耳线索 ============
  b.panel(30, 578, 700, 396, { title: '三、声源定位：低频算时间差，高频比强度差' })
  // 头 + 双耳
  b.circle(140, 700, 44, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 2 })
  b.ctext(140, 705, '头', { size: 13, weight: 700, fill: C.proD })
  b.circle(88, 690, 11, { fill: C.dna })
  b.circle(192, 690, 11, { fill: C.bad })
  b.ctext(88, 664, '左耳', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(192, 664, '右耳', { size: 10.5, weight: 700, fill: C.bad })
  // 声源（右侧）
  b.ctext(330, 664, '声源', { size: 12, weight: 700, fill: C.warn })
  b.polygon([[300, 700], [284, 690], [284, 710]], { fill: C.warn })
  b.line(302, 700, 204, 692, { stroke: C.bad, sw: 2, dash: '5 4', marker: 'bad' })
  b.line(302, 700, 96, 688, { stroke: C.dna, sw: 2, dash: '5 4', marker: 'dna' })
  b.ctext(250, 676, '先到', { size: 10, weight: 700, fill: C.bad })
  b.ctext(160, 676, '后到', { size: 10, weight: 700, fill: C.dnaD })
  // ITD 卡
  b.rect(60, 742, 320, 96, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(76, 768, 'ITD 双耳时间差（低频）', { size: 12.5, weight: 700, fill: C.dnaD })
  ;[
    '锁相比较相位；Jeffress 延迟线（1948）：',
    '两耳输入沿不同长度延迟线抵达按 ITD 排列的',
    '「符合检测器」——只有同时到达才放电，鸟类获解剖证实。',
  ].forEach((ln, i) => b.text(76, 790 + i * 15, ln, { size: 10.5, fill: C.sub }))
  // IID 卡
  b.rect(400, 742, 300, 96, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(416, 768, 'IID 双耳强度差（高频）', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(416, 790, '头影效应：高频声被头颅遮挡，对侧耳声强衰减；哺乳类另用速率对比策略。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(60, 874, '上橄榄核是双耳比较的起点：内侧上橄榄核（MSO）比较时间差，外侧上橄榄核（LSO）比较强度差。', { size: 10.5, fill: C.mute, maxW: 640, lh: 15 })

  // ============ 四、中枢站功能表 ============
  b.panel(750, 578, 620, 396, { title: '四、听觉中枢各站功能一览' })
  b.table(780, 660, 560, {
    headers: ['中枢站', '主要功能'],
    colW: [210, 350],
    rowH: 48,
    fontSize: 11.5,
    rows: [
      ['蜗神经核（腹/背侧）', '保持音调拓扑，分化出多种放电反应型'],
      ['上橄榄核复合体', '双耳时间差与强度差比较，声源定位起点'],
      ['下丘', '双耳线索整合，听-运动反射与注意联络'],
      ['内侧膝状体', '皮层前最后驿站，分频段投向听皮层'],
      ['听皮层 A1（41 区）', '频率拓扑代表与复杂听觉特征抽取'],
    ],
  })
  b.wtext(780, 952, '「每级保持拓扑 + 每级加入新运算」是听觉通路的组织通则。', { size: 10.5, fill: C.mute, maxW: 560, lh: 15 })
}

export default scene({
  title: '听觉的中枢通路与编码：双侧上行、频率双轨与双耳定位',
  subtitle: '>5000 Hz 靠场所编码、中低频靠锁相（排齐发射至约 4–5 kHz）；低频定位算 ITD、高频比 IID',
  draw,
})
