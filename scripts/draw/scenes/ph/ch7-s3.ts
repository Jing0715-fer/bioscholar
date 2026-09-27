// ph ch7-s3 血管生理与血流动力学：Poiseuille 定律、功能分段与层流湍流
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Poiseuille 定律 ============
  b.panel(30, 132, 660, 290, { title: '一、Poiseuille 定律：半径的四次方统治阻力' })
  b.text(360, 190, 'Q = ΔP · πr^{4} / (8ηL)', { size: 21, weight: 700, fill: C.ink, anchor: 'middle' })
  b.text(360, 224, '阻力形式：R = 8ηL / (πr^{4})', { size: 14, weight: 700, fill: C.sub, anchor: 'middle' })
  // 管道示意
  b.rect(70, 258, 330, 44, { fill: C.accL, stroke: C.acc, sw: 2, rx: 22 })
  b.arrow(38, 280, 64, 280, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(406, 280, 432, 280, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.text(56, 246, 'P₁ 高', { size: 10, weight: 700, fill: C.accD })
  b.text(400, 246, 'P₂ 低', { size: 10, weight: 700, fill: C.accD })
  b.line(210, 281, 210, 302, { marker: 'mute', markerStart: 'mute', stroke: C.mute, sw: 1.3 })
  b.text(218, 296, 'r（半径，四次方）', { size: 10, fill: C.sub })
  b.line(110, 322, 360, 322, { marker: 'mute', markerStart: 'mute', stroke: C.mute, sw: 1.3 })
  b.ctext(235, 342, 'L（管长）', { size: 10, fill: C.sub })
  b.ctext(235, 366, 'η（黏度：全血约为水的 3–4 倍）', { size: 10, fill: C.sub })
  b.tag(530, 320, 'r 减半 → R ×16', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 12, weight: 700, pad: 10 })
  b.tag(530, 360, 'r 增两成内 → R ↓约半', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 12, weight: 700, pad: 10 })
  b.wtext(50, 396, '总外周阻力主要落于小动脉与微动脉：单根毛细虽细，数百亿条并联总阻力反而不高；各器官血管并联互不累加，动脉压对各器官「一视同仁」地分配压头。', { size: 10, fill: C.sub, maxW: 615, lh: 15 })

  // ============ 二、血管功能分段 ============
  b.panel(710, 132, 660, 290, { title: '二、血管功能分段：压力-流速-总截面积剖面' })
  const segs: Array<[number, number, number, string, string, string, string]> = [
    [730, 110, 30, '#fde68a', C.warn, '弹性大动脉', 'Windkessel 贮器'],
    [850, 110, 22, '#f1f5f9', C.sub, '分配动脉', '输送'],
    [970, 110, 13, '#fce7f3', C.enz, '阻力小动脉', '平滑肌密集'],
    [1090, 110, 6, '#ccfbf1', C.dna, '交换毛细', '单层内皮'],
    [1210, 110, 32, '#e0f2fe', C.acc, '容量静脉', '容血 60–70%'],
  ]
  segs.forEach(([x, w, h, f, s]) => b.rect(x, 195 - h / 2, w, h, { fill: f, stroke: s, sw: 1.6, rx: h / 2 }))
  segs.forEach(([x, w, , , , lb, sub]) => {
    b.ctext(x + w / 2, 228, lb, { size: 10.5, weight: 700, fill: C.sub })
    b.ctext(x + w / 2, 244, sub, { size: 8.5, fill: C.mute })
  })
  // 三条剖面曲线
  b.arrow(740, 400, 1330, 400, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(740, 400, 740, 268, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.polyline([[740, 300], [860, 304], [890, 318], [970, 342], [1030, 352], [1090, 368], [1150, 378], [1210, 383], [1330, 388]], { stroke: C.bad, sw: 2.4 })
  b.polyline([[740, 310], [860, 328], [900, 342], [970, 360], [1090, 392], [1120, 393], [1150, 390], [1210, 378], [1330, 372]], { stroke: C.acc, sw: 2.2, dash: '7 4' })
  b.polyline([[740, 385], [860, 382], [900, 370], [970, 330], [1090, 285], [1150, 300], [1210, 345], [1330, 355]], { stroke: C.dna, sw: 2.2, dash: '3 3' })
  b.text(1150, 262, '— 压力', { size: 9.5, weight: 700, fill: C.badD })
  b.text(1215, 262, '-- 流速', { size: 9.5, weight: 700, fill: C.accD })
  b.text(1280, 262, '·- 截面积', { size: 9.5, weight: 700, fill: C.dnaD })
  b.text(750, 282, '毛细总截面积 ≈2500 cm²、流速 0.5–1 mm/s', { size: 9.5, fill: C.sub })
  b.ctext(1035, 418, '沿血管分段 →（压力 100→35→12→5 mmHg 量级；交换时间 1–3 s）', { size: 9.5, fill: C.mute })

  // ============ 三、平均动脉压与脉搏波 ============
  b.panel(30, 442, 660, 530, { title: '三、平均动脉压、脉压与动脉顺应性' })
  b.arrow(90, 620, 90, 480, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(90, 620, 560, 620, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(90, 561, 560, 561, { stroke: C.mute, sw: 1.2, dash: '6 4' })
  b.etext(84, 500, '120', { size: 10, fill: C.mute })
  b.etext(84, 565, '93', { size: 10, fill: C.mute })
  b.etext(84, 591, '80', { size: 10, fill: C.mute })
  b.polyline([[100, 585], [120, 500], [140, 498], [160, 530], [170, 538], [182, 532], [300, 582], [320, 500], [340, 498], [360, 530], [372, 538], [382, 532], [560, 584]], { stroke: C.bad, sw: 2.6 })
  b.ctext(140, 488, '收缩压 120', { size: 10, weight: 700, fill: C.badD })
  b.ctext(450, 604, '舒张压 80', { size: 10, weight: 700, fill: C.badD })
  b.text(192, 522, '重搏切迹', { size: 9, fill: C.badD })
  b.arrow(214, 526, 176, 534, { stroke: C.mute, sw: 1.2, marker: 'mute' })
  b.tag(360, 648, 'MAP = DBP + 1/3 脉压 ≈ 93 mmHg（舒张期更长的时间加权）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 12, weight: 700, pad: 10 })
  b.tag(360, 694, 'MAP = CO × SVR：血压两要素框架', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 12, weight: 700, pad: 10 })
  b.wtext(50, 728, '脉压＝SV 与大动脉僵硬度联合放大：顺应性 C=dV/dP 高 → 脉压小；老龄化/动脉硬化 → 收缩压↑、舒张压反降、脉压增大——老年人单纯收缩期高血压的血流动力学本质。', { size: 10, fill: C.sub, maxW: 615, lh: 15 })
  b.wtext(50, 782, '脉搏波是压力波：主动脉波速 5–8 m/s，向外周渐增至 15–35 m/s（比血流快一个数量级，主动脉血流约 30 cm/s）；波形放大使下肢收缩压比主动脉高 10–20 mmHg。', { size: 10, fill: C.sub, maxW: 615, lh: 15 })
  b.wtext(50, 836, '静脉：低压力经营大容量（容血 60–70%）；中心静脉压（右房压）4–12 cmH_{2}O，是回流与泵功能的交汇读数；直立时踝部静脉加上近 90 mmHg 静水柱，颅顶静脉转为负压。', { size: 10, fill: C.sub, maxW: 615, lh: 15 })
  b.wtext(50, 896, '袖带法（Riva-Rocci 1896 袖带 ＋ Korotkoff 1905 听诊）：我国指南以诊室 ≥140/90 mmHg 为高血压界值；脉压搏动本身携带每搏量与僵硬度信息。', { size: 10, fill: C.sub, maxW: 615, lh: 15 })

  // ============ 四、层流与湍流 ============
  b.panel(710, 442, 660, 530, { title: '四、层流、湍流与雷诺数' })
  b.rect(740, 500, 280, 60, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 8 })
  for (const [y, ln] of [[510, 60], [520, 130], [530, 250], [540, 130], [550, 60]] as [number, number][]) {
    b.arrow(745, y, 745 + ln, y, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  }
  b.ctext(880, 585, '层流：抛物线剖面（轴心最快、贴壁趋零）', { size: 10, fill: C.sub })
  b.rect(1060, 500, 280, 60, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 8 })
  for (const dy of [0, 1, 2]) {
    b.path(`M ${1070 + dy * 8},515 q 30,-14 60,4 q 30,16 60,-6 q 30,-18 66,10`, { stroke: C.bad, sw: 1.8, fill: 'none' })
    b.path(`M ${1070 + dy * 8},545 q 34,14 64,-4 q 30,-16 62,6 q 28,18 66,-10`, { stroke: C.bad, sw: 1.8, fill: 'none' })
  }
  b.ctext(1200, 585, '湍流：能量损耗大并产生可闻振动（杂音）', { size: 10, fill: C.sub })
  b.tag(1040, 632, 'Re = ρvd/η，临界值 ≈ 2000', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 12.5, weight: 700, pad: 10 })
  b.wtext(726, 670, '杂音的流体力学来源：贫血（黏度↓＋流量↑双重推高 Re）、瓣膜狭窄（局部高速射流）、动脉导管未闭（胸骨左缘连续性机器样杂音）。', { size: 10, fill: C.sub, maxW: 620, lh: 15 })
  b.rect(740, 726, 280, 50, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 8 })
  for (let i = 0; i < 6; i++) b.circle(795 + i * 36, 751, 8, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  b.ctext(880, 800, '红细胞向轴集中（Fåhræus–Lindqvist 效应）', { size: 10, fill: C.sub })
  b.rect(1060, 726, 280, 50, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 8 })
  b.arrow(1080, 751, 1100, 751, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.text(1108, 745, '剪切应力', { size: 9.5, weight: 700, fill: C.dnaD })
  b.text(1108, 762, '作用于内皮', { size: 9.5, fill: C.sub })
  b.text(1220, 745, 'NO ↑', { size: 11, weight: 700, fill: C.okD })
  b.ctext(1200, 800, '「流量越大、管越松」的自适应', { size: 10, fill: C.sub })
  b.wtext(726, 836, '层流剖面下内皮持续感受剪切应力，诱导一氧化氮（NO）释放而舒张血管——剪切应力诱导 NO 是血流自适应扩张的物理基础（内皮因子详见下一章）。', { size: 10, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 892, '红细胞向轴集中、血浆贴壁，使微血管表观黏度下降——微血管因此不易被黏度「卡死」，与 Fick 扩散的短距离共同保障交换效率。', { size: 10, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '血管生理与血流动力学：半径四次方的统治',
  subtitle: 'Q=ΔP·πr^{4}/(8ηL)：半径减半阻力增至 16 倍；MAP=DBP+1/3 脉压（120/80 → ≈93 mmHg）＝CO×SVR；毛细总截面积约 2500 cm^{2}、流速 0.5–1 mm/s；Re 临界约 2000 触发湍流',
  draw,
})
