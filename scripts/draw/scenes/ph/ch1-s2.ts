// ph ch1-s2 内环境与稳态：体液分区、设定点容许带与动态波动
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、体液分区与内环境 ============
  b.panel(30, 132, 660, 430, { title: '一、体液分区：内环境＝细胞外液' })
  b.rect(50, 178, 600, 300, { fill: 'none', stroke: C.faint, sw: 1.6, rx: 12, dash: '7 6' })
  b.text(66, 200, '外环境（空气、水、温度、营养…）', { size: 11.5, fill: C.mute })
  b.rect(90, 222, 520, 238, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 12 })
  b.text(110, 246, '机体（体液 ≈ 体重 60%）', { size: 12.5, weight: 700, fill: C.ink })
  // 血浆（血管）
  b.rect(115, 290, 140, 120, { fill: C.warnL, fillOp: 0.65, stroke: C.warn, sw: 1.8, rx: 9 })
  b.ctext(185, 332, '血浆', { size: 13.5, weight: 700, fill: C.warnD })
  b.ctext(185, 354, '≈5% 体重', { size: 11, fill: C.sub })
  // 细胞（细胞内液）
  b.circle(360, 360, 36, { fill: C.proL, fillOp: 0.75, stroke: C.pro, sw: 1.8 })
  b.circle(460, 360, 36, { fill: C.proL, fillOp: 0.75, stroke: C.pro, sw: 1.8 })
  b.circle(560, 360, 36, { fill: C.proL, fillOp: 0.75, stroke: C.pro, sw: 1.8 })
  b.ctext(460, 352, '细胞内液', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(460, 372, '≈40% 体重', { size: 10.5, fill: C.sub })
  b.ctext(360, 280, '组织液 ≈15% 体重', { size: 12.5, weight: 700, fill: C.accD })
  // 毛细血管交换
  b.arrow(258, 340, 316, 340, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(316, 360, 258, 360, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.ctext(290, 318, '毛细血管壁交换', { size: 10, fill: C.sub })
  b.wtext(50, 506, '内环境＝细胞外液＝血浆（≈5%）＋组织液（≈15%），约占体液 1/3；细胞内液占 2/3——细胞直接浸浴于内环境，其理化性质被各器官系统协同恒定。', { size: 11.5, fill: C.sub, maxW: 610, lh: 17 })

  // ============ 二、设定点与容许带 ============
  b.panel(710, 132, 660, 430, { title: '二、核心参数的设定点与容许带（成人静息）' })
  b.table(730, 200, 620, {
    headers: ['参数', '设定点', '正常容许带', '主要调节系统'],
    colW: [150, 130, 190, 150],
    rowH: 44,
    fontSize: 12,
    rows: [
      ['核心体温', '37 ℃', '36.5–37.5 ℃', '体温调节（下丘脑）'],
      ['动脉血 pH', '7.40', '7.35–7.45', '缓冲系/呼吸/肾'],
      ['空腹血糖', '5.0 mmol/L', '3.9–6.1 mmol/L', '胰岛素/胰高血糖素'],
      ['血浆 Ca^{2+}', '2.4 mmol/L', '2.25–2.75 mmol/L', 'PTH/降钙素/VitD'],
      ['血 Na^{+}', '140 mmol/L', '135–145 mmol/L', '肾·醛固酮·ADH'],
    ],
  })
  b.wtext(730, 490, '偏离容许带即触发多系统联动调节；稳态是耗能的主动动态过程而非静止，设定点本身也可被生理性重调（发热、运动、妊娠）。', { size: 12, fill: C.sub, maxW: 610, lh: 18 })

  // ============ 三、稳态波动曲线 + 历史注记 ============
  b.panel(30, 578, 1340, 407, { title: '三、稳态：围绕设定点的动态波动（体温示例）' })
  // 容许带与设定点
  b.rect(120, 735, 760, 50, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.2 })
  b.line(120, 760, 880, 760, { stroke: C.mute, sw: 1.5, dash: '7 6' })
  b.ctext(300, 731, '容许带 36.5–37.5 ℃', { size: 11, weight: 700, fill: C.okD })
  b.etext(872, 756, '设定点 37 ℃', { size: 11, weight: 700, fill: C.sub })
  // 坐标轴
  b.line(120, 880, 880, 880, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(500, 905, '时间', { size: 13, weight: 600, fill: C.sub })
  b.etext(114, 739, '37.5', { size: 11, fill: C.mute })
  b.etext(114, 764, '37.0', { size: 11, fill: C.mute })
  b.etext(114, 789, '36.5', { size: 11, fill: C.mute })
  b.etext(114, 645, '核心体温 ℃', { size: 12, weight: 600, fill: C.sub })
  // 波动曲线
  const pts: Array<[number, number]> = [
    [120, 758], [160, 748], [200, 762], [240, 770], [280, 752], [320, 744], [360, 766],
    [400, 758], [440, 768], [480, 752], [520, 742], [545, 722], [570, 714], [595, 726],
    [620, 742], [650, 752], [680, 768], [710, 762], [740, 750], [770, 758], [800, 770],
    [830, 760], [860, 752], [880, 756],
  ]
  b.spline(pts, { stroke: C.acc, sw: 2.6 })
  // 扰动与纠正
  b.arrow(545, 672, 545, 708, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(545, 660, '扰动（运动/高温）', { size: 12, weight: 700, fill: C.badD })
  b.arrow(640, 672, 640, 730, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext(640, 660, '负反馈纠正', { size: 12, weight: 700, fill: C.okD })
  // 历史注记
  b.tag(1040, 665, '贝尔纳（Claude Bernard）·1865', { fill: C.panelB, stroke: C.line, tfill: C.ink, size: 12.5, weight: 700, pad: 10 })
  b.wtext(925, 700, '「内环境恒定是自由、独立生活的条件。」——体液是细胞直接生活的环境，其理化性质的恒定由各器官系统协同维持。', { size: 12, fill: C.sub, maxW: 420, lh: 18 })
  b.tag(1040, 770, '坎农（Walter Cannon）·1926', { fill: C.panelB, stroke: C.line, tfill: C.ink, size: 12.5, weight: 700, pad: 10 })
  b.wtext(925, 805, '创「稳态」（homeostasis）一词：稳态不是静止，而是围绕设定点的动态平衡——机体不断耗能以对抗熵增。', { size: 12, fill: C.sub, maxW: 420, lh: 18 })
  b.wtext(925, 870, '稳态机制衰竭＝疾病；不可逆衰竭＝死亡。现代重症医学本质上是「器官系统支援下的稳态维持」。', { size: 11.5, fill: C.sub, maxW: 420, lh: 17 })
}

export default scene({
  title: '内环境与稳态：设定点与容许带',
  subtitle: '内环境＝细胞外液：血浆约 5%＋组织液约 15%（体重）；核心体温 37±0.5 ℃、pH 7.35–7.45、血糖 3.9–6.1 mmol/L 等参数被约束在设定点附近的容许带内',
  draw,
})
