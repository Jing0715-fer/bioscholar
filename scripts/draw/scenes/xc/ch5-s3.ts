// xc ch5-s3 完整性、冗余与策略规划（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三目标三角 ============
  b.panel(30, 132, 660, 300, { title: '一、三目标三角：光子是损伤的货币' })
  b.line(335, 228, 196, 302, { stroke: C.sub, sw: 1.8, dash: '6 4' })
  b.line(385, 228, 524, 302, { stroke: C.sub, sw: 1.8, dash: '6 4' })
  b.line(214, 330, 506, 330, { stroke: C.sub, sw: 1.8, dash: '6 4' })
  b.tag(254, 258, '同一预算下此消彼长', { fill: C.panelB, stroke: C.sub, size: 9.5, weight: 700, tfill: C.sub, pad: 6 })
  b.tag(466, 258, '测一个反射要光子', { fill: C.panelB, stroke: C.sub, size: 9.5, weight: 700, tfill: C.sub, pad: 6 })
  b.ctext(360, 326, '重复测量要更多光子', { size: 9, fill: C.mute })
  b.circle(360, 196, 40, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.ctext(360, 192, '完整度', { size: 13, weight: 700, fill: C.accD })
  b.ctext(360, 212, '高于 95%', { size: 11, weight: 700, fill: C.accD })
  b.circle(170, 330, 44, { fill: C.dnaL, stroke: C.dna, sw: 2.2 })
  b.ctext(170, 326, '冗余', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(170, 346, '3–7×', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(170, 390, '反常 7–10×', { size: 9.5, weight: 700, fill: C.dnaD })
  b.circle(550, 330, 44, { fill: C.badL, stroke: C.bad, sw: 2.2 })
  b.ctext(550, 326, '剂量', { size: 13, weight: 700, fill: C.bad })
  b.ctext(550, 346, '5–20 MGy', { size: 11, weight: 700, fill: C.bad })
  b.tag(360, 292, '光子 = 损伤的货币', { fill: C.panelB, stroke: C.ink, size: 11, weight: 700, tfill: C.ink, pad: 10 })
  b.wtext(46, 398, '数值例：RADDOSE-3D 算得某晶体每帧 0.1 s 吸收 12 kGy，10 MGy 预算折合约 830 帧，按 Δφ=0.2° 可覆盖 166°；P2_{1}2_{1}2_{1} 约 90° 即达完整度上限，富余的 70 余度——转满 166° 把冗余从约 3.5× 抬到约 7×，或把每帧曝光压到 0.07 s、以 240° 全程摊满。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })

  // ============ 二、旋转范围扫过倒易空间 ============
  b.panel(710, 132, 660, 300, { title: '二、旋转范围扫过倒易空间：覆盖与冗余模拟' })
  // 左：P1 半覆盖
  b.path('M820,178 A62,62 0 0 1 820,302 Z', { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 1.8 })
  b.circle(820, 240, 62, { fill: 'none', stroke: C.sub, sw: 1.6 })
  b.line(820, 168, 820, 312, { stroke: C.pro, sw: 1.6, dash: '5 4' })
  b.polygon([[820, 180], [813, 198], [827, 198]], { fill: C.badL, fillOp: 0.8 })
  b.polygon([[820, 300], [813, 282], [827, 282]], { fill: C.badL, fillOp: 0.8 })
  b.ctext(820, 332, 'P1：转 180°', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(820, 350, '盲区除外，每反射至少一次', { size: 9, fill: C.mute })
  b.text(748, 200, '扫描带', { size: 8.5, weight: 700, fill: C.accD })
  // 右：高对称群四分之一
  b.path('M1020,178 A62,62 0 0 1 1082,240 L1020,240 Z', { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 1.8 })
  b.circle(1020, 240, 62, { fill: 'none', stroke: C.sub, sw: 1.6 })
  b.line(1020, 168, 1020, 312, { stroke: C.pro, sw: 1.6, dash: '5 4' })
  for (const [dx, dy] of [[44, -44], [-44, -44], [-44, 44], [44, 44]] as [number, number][]) {
    b.line(1020, 240, 1020 + dx, 240 + dy, { stroke: C.dna, sw: 1.4, dash: '4 3' })
  }
  b.polygon([[1020, 180], [1013, 198], [1027, 198]], { fill: C.badL, fillOp: 0.8 })
  b.polygon([[1020, 300], [1013, 282], [1027, 282]], { fill: C.badL, fillOp: 0.8 })
  b.ctext(1020, 332, 'P2_{1}2_{1}2_{1}：90° 即达上限', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(1020, 350, '等效反射补齐其余象限与盲区', { size: 9, fill: C.mute })
  // 右侧曲线：完整度与冗余随总转角
  b.ctext(1236, 182, 'P2_{1}2_{1}2_{1} 的账本', { size: 10, weight: 700, fill: C.ink })
  b.arrow(1120, 350, 1352, 350, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1120, 350, 1120, 186, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.etext(1112, 214, '100%', { size: 9, fill: C.mute })
  const cx = (deg: number) => 1120 + (deg / 240) * 220
  b.polyline([[1120, 350], [1153, 301], [1186, 263], [1219, 235], [1252, 220], [1285, 212], [1340, 210]] as [number, number][], { stroke: C.acc, sw: 2.6 })
  b.polyline([[1120, 350], [cx(90), 301], [cx(166), 252], [1340, 210]] as [number, number][], { stroke: C.dna, sw: 2.6, dash: '7 4' })
  ;[0, 90, 166, 240].forEach(deg => b.ctext(cx(deg), 366, deg === 0 ? '0' : `${deg}°`, { size: 9, fill: C.mute }))
  b.ctext(1236, 382, '总旋转角', { size: 9.5, weight: 600, fill: C.sub })
  b.text(1292, 202, '完整度', { size: 9.5, weight: 700, fill: C.accD })
  b.text(1128, 292, '冗余', { size: 9.5, weight: 700, fill: C.dnaD })
  b.tag(1272, 232, '166°：冗余 7×', { fill: C.dnaL, stroke: C.dna, size: 9.5, weight: 700, tfill: C.dnaD, pad: 6 })
  b.wtext(726, 392, '缺失是带方向的空位而非随机噪声：缺哪一「方向族」的反射，图上就朝对应方向出现条纹状假象。完整度由旋转范围与对称性封顶（至多百分之百），冗余却可随剂量继续堆——两者不是同一维度；反常方案要盯「反常完整度」（Bijvoet 对覆盖率）与反常冗余双达标。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })

  // ============ 三、反常伺候与多晶合并 ============
  b.panel(30, 452, 660, 490, { title: '三、反常数据的特殊伺候与多晶合并' })
  b.text(46, 486, 'MAD 三波长与剂量切分', { size: 11.5, weight: 700, fill: C.ink })
  b.table(46, 498, 300, {
    headers: ['波长', '设定', '剂量'],
    colW: [66, 166, 68],
    rowH: 30,
    fontSize: 10,
    rows: [
      ['峰', 'f″ 最大（Se 0.9795 Å）', '40%'],
      ['拐点', 'f′ 最负（紧邻吸收边）', '30%'],
      ['远边', '0.9164 Å', '30%'],
    ],
  })
  b.wtext(46, 652, '收数顺序「远边先收、峰值压轴」——最要紧的数据吃到最新鲜的晶体；远边兼顾躲开吸收边以减小吸收、又离边不远以保持可比性。inverse beam 以 180° 对顶位成对收 Bijvoet（见第 2 节）。', { size: 9.5, fill: C.sub, maxW: 306, lh: 13.5 })
  b.text(380, 486, '多晶合并与微光斑匹配', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(380, 506, '辐射损伤把单晶策略逼到天花板时的另一条路：每颗晶体只受很低剂量（如低于 1 MGy），把数十颗乃至数百颗同型晶体按对称等效合并成一套。', { size: 10, fill: C.sub, maxW: 294, lh: 14 })
  b.rect(380, 560, 140, 86, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 5 })
  b.ellipse(450, 601, 52, 30, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.2, dash: '4 3' })
  b.circle(450, 601, 26, { fill: C.warn, fillOp: 0.3, stroke: C.warn, sw: 1.8 })
  b.rect(441, 592, 18, 18, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 3 })
  b.ctext(450, 660, '50 μm 光斑连母液一起照', { size: 9, fill: C.warnD })
  b.rect(534, 560, 140, 86, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 5 })
  b.circle(599, 601, 11, { fill: C.warn, fillOp: 0.35, stroke: C.warn, sw: 1.8 })
  b.rect(590, 592, 18, 18, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 3 })
  b.ctext(604, 660, '20 μm 只照晶体', { size: 9, fill: C.okD })
  b.wtext(380, 678, '背景光子数正比于受照体积：光斑从 50 μm 缩到 20 μm，母液与空气的背景贡献按体积比降一个量级而晶体信号不减；代价是对束流稳定性更苛——漂移一个光斑的距离就等于换了一颗晶体。', { size: 9.5, fill: C.sub, maxW: 294, lh: 13.5 })
  b.table(46, 730, 616, {
    title: '合并账单（示意量级）',
    headers: ['统计量', '单晶收满（约 10 MGy）', '十二颗低剂量合并（每晶约 0.8 MGy）'],
    colW: [120, 216, 280],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['整体完整度', '97%', '96%'],
      ['冗余', '约 4×', '约 9×'],
      ['高角 R_{meas}', '偏高（衰减拖累）', '明显更低'],
      ['特异性损伤', '二硫键已现负峰', '近乎无痕'],
    ],
  })
  b.wtext(46, 912, '合并前提：晶格同型（晶胞差异在千分之几内）与 mosaicity 相近；两道安检——逐颗晶胞一致性比对、mosaicity 相近性，跨生长批次的晶体常在此露馅。', { size: 9.5, fill: C.mute, maxW: 616, lh: 13 })

  // ============ 四、网格扫描与决策表 ============
  b.panel(710, 452, 660, 490, { title: '四、网格扫描热图与收集决策表' })
  b.text(726, 486, '网格扫描：先找好晶体再开枪', { size: 11.5, weight: 700, fill: C.ink })
  const qual = [
    [1, 0, 1, 1, 0, 2, 3, 3],
    [0, 1, 0, 1, 1, 2, 3, 2],
    [1, 1, 0, 0, 1, 1, 2, 1],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 0, 1, 1],
  ]
  const qFill = [C.badL, C.warnL, C.okL, C.ok]
  qual.forEach((row, r) => row.forEach((q, c) => {
    b.rect(726 + c * 34, 500 + r * 34, 34, 34, { fill: qFill[q], stroke: C.line, sw: 0.8 })
  }))
  b.rect(890, 494, 114, 80, { fill: 'none', stroke: C.ok, sw: 2.2, dash: '7 5', rx: 8 })
  b.ctext(947, 592, '最好的一角', { size: 9.5, weight: 700, fill: C.okD })
  b.legend(726, 692, [['好', C.ok], ['中', C.warn], ['差', C.bad]], { size: 10, gap: 14 })
  b.wtext(1014, 502, '用微光斑在样品上逐格曝光（步进可到 10 μm），比较各格的衍射质量——斑点锐度、镶嵌度、晶格一致性——把「碰运气」变成「地图作业」；以 10–20 μm 步进排一张衍射热图，每格一次 0.02–0.05 s 的低剂量快照，统计斑点数、可分辨的最小 d 与斑点锐度。', { size: 10, fill: C.sub, maxW: 340, lh: 14 })
  b.wtext(1014, 568, '一次网格扫描几百次曝光、总剂量常不到总预算的百分之一；「好格子」往往只占两三成——同一环里挑最好的一角再正式开收，是 LCP 与微小晶体流程的标准前奏。', { size: 10, fill: C.sub, maxW: 340, lh: 14 })
  b.wtext(1014, 624, '能量先定：Se 反常把能量设到峰 0.9795 Å 附近，以荧光扫描实测吸收边位置（不同蛋白的化学环境会使边移动几个电子伏特）；常规数据可选远离吸收边的能量以减小吸收与剂量。', { size: 10, fill: C.sub, maxW: 340, lh: 14 })
  b.table(726, 716, 616, {
    headers: ['样品状况', '推荐策略'],
    colW: [196, 420],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['常规晶体、优于 2.5 Å', '单晶 180° 内、Δφ 0.1–0.5°、冗余 3–5×、剂量约 10 MGy 封顶'],
      ['SAD 反常定相', 'inverse beam 或宽范围、冗余 7–10×、剂量向低限分配'],
      ['极易损伤', '多晶合并、每晶低于 1 MGy、微光斑匹配'],
      ['微小晶体（10–30 μm）', '微聚焦光斑、网格扫描定位、低剂量高通量'],
      ['mosaicity 大于 0.5°', '切窄 Δφ、拉远探测器、先退火再试'],
    ],
  })
  b.text(726, 928, '策略执行要留痕：完整度与剂量的实时监控曲线让「边收边看」成为可能——发现停滞或逼近预算，及时改计划胜过硬收到底。', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '完整性、冗余与策略规划：三目标账本与网格扫描',
  subtitle: '完整度高于 95%、冗余 3–7×（反常 7–10×）、剂量 5–20 MGy；830 帧 166° 把冗余 3.5× 抬到 7×；十二颗每晶 0.8 MGy 合并得冗余 9×',
  draw,
})
