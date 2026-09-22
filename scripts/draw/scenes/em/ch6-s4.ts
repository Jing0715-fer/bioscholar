// em ch6-s4 空气-水界面问题与对策（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、空气-水界面：吸附与部分变性 ============
  b.panel(30, 132, 860, 300, { title: '一、空气-水界面：吸附与部分变性' })
  b.text(70, 210, '空气', { size: 11, fill: C.mute })
  b.text(70, 230, '表面张力约 72 mN/m（20 °C 纯水）', { size: 10, fill: C.accD })
  b.text(845, 230, '取向水层约 1–2 nm', { size: 9.5, fill: C.accD, anchor: 'end' })
  b.line(60, 244, 850, 244, { stroke: C.acc, sw: 3 })
  for (let i = 0; i < 27; i++) b.line(66 + i * 29, 245, 74 + i * 29, 253, { stroke: C.acc, sw: 1.3, opacity: 0.8 })
  b.rect(60, 244, 790, 128, { fill: C.accL, fillOp: 0.35 })
  b.text(70, 268, '水膜（plunge 暴露窗口约 100 ms 至 1 s）', { size: 10, fill: C.accD })
  // 贴附界面并部分展开的蛋白
  b.circle(260, 262, 15, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.line(272, 268, 282, 272, { stroke: C.pro, sw: 1.5, dash: '3 2' })
  b.ellipse(294, 276, 12, 8, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(260, 302, '部分展开', { size: 9.5, fill: C.proD })
  b.circle(540, 262, 15, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.line(552, 268, 562, 272, { stroke: C.pro, sw: 1.5, dash: '3 2' })
  b.ellipse(574, 276, 12, 8, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(540, 302, '优势取向贴附', { size: 9.5, fill: C.proD })
  b.circle(430, 330, 14, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(430, 358, '原生折叠（少数）', { size: 9.5, fill: C.sub })
  // 贴附统计
  b.rect(760, 252, 26, 92, { fill: C.bad, fillOp: 0.7 })
  b.rect(760, 346, 26, 12, { fill: C.ok, fillOp: 0.7 })
  b.text(794, 302, '贴界面 >90%', { size: 10, weight: 700, fill: C.badD })
  b.text(794, 356, '悬冰不足一成', { size: 9.5, fill: C.okD })
  b.tag(300, 392, '吸附自由能可达数十 kT——为支付入场费，颗粒让结构域局部展开', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 9 })
  b.wtext(60, 420, '布朗运动与流场把颗粒不断送往界面，吸附在暴露窗口内完成；冷冻断层普查（数颗粒纵向坐标）确认贴附率超过 90%——界面是冷冻制样的主导现实。', { size: 9.5, fill: C.sub, maxW: 780, lh: 13 })

  // ============ 二、三宗罪 ============
  b.panel(910, 132, 460, 300, { title: '二、界面吸附的三宗罪' })
  const sin = (y: number, t: string, desc: string, fill: string, stroke: string, tfill: string) => {
    b.rect(930, y, 420, 76, { fill, fillOp: 0.55, stroke, sw: 1.6, rx: 8 })
    b.text(946, y + 22, t, { size: 12, weight: 700, fill: tfill })
    b.wtext(946, y + 42, desc, { size: 10, fill: C.sub, maxW: 388, lh: 13 })
  }
  sin(178, '① 优势取向', '颗粒以同一面贴界面：2D 分类只剩单一视角；3D 重构出现缺失锥式角度空洞，密度图沿缺失方向拉长伪影。', C.badL, C.bad, C.badD)
  sin(262, '② 部分变性', '展开的结构域与聚集体混入数据集，占据颗粒挑选的算力却不贡献信号，2D 平均被「糊」掉一截。', C.proL, C.pro, C.proD)
  sin(346, '③ 选择性存活', '构象分布被界面筛过：贴不牢的构象被冲走、留不住的中间态优先消失——留下的样本不代表溶液平衡态。', C.warnL, C.warn, C.warnD)

  // ============ 三、对策四件套 ============
  b.panel(30, 456, 1340, 300, { title: '三、对策四件套：把蛋白与界面隔开' })
  const fix = (x: number, t: string, lines: string[], fill: string, stroke: string, tfill: string) => {
    b.rect(x, 512, 310, 150, { fill, fillOp: 0.6, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 155, 538, t, { size: 13, weight: 700, fill: tfill })
    lines.forEach((s, i) => b.ctext(x + 155, 564 + i * 21, s, { size: 10.5, fill: C.sub }))
  }
  fix(60, '① 氟化表面活性剂', ['痕量约 0.01–0.1 mM 在界面成膜', '氟碳链与疏水口袋无互补性——惰性', '太低不成膜、太高增背景：逐样品滴定', 'D’Imprima 与 Kühlbrandt（2020 前后）'], C.accL, C.acc, C.accD)
  fix(385, '② 金箔网格 UltrAuFoil', ['金-水界面吸附弱于碳-水界面', '叠加束致运动小的红利（第 2 节）', '高分辨与界面敏感样品的首选底物', '代价：价格较高'], C.rnaL, C.rna, C.rnaD)
  fix(710, '③ 高浓度与快速 plunge', ['浓度推高、暴露窗口压短', '大部分颗粒「来不及」贴附就被冻住', '与亚毫秒制样装置联动（第 3 节）', '代价：聚集风险'], C.dnaL, C.dna, C.dnaD)
  fix(1035, '④ 亲和网格', ['Ni-NTA 抓 His 标签、链霉亲和素抓生物素', '颗粒锚定在膜上、主动脱离界面', '顺带获得可控取向', '代价：标签效率、构象偏置与批次标定'], C.proL, C.pro, C.proD)
  b.arrow(372, 587, 383, 587, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(697, 587, 708, 587, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1022, 587, 1033, 587, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.wtext(60, 690, '成膜效率：痕量 0.01–0.05 mM 通常足以铺满界面；普通氢化去垢剂要高出几个数量级的浓度才有类似覆盖度——氟化是关键，且与常规去垢剂共存无碍。', { size: 10.5, fill: C.sub, maxW: 1290, lh: 15 })
  b.wtext(60, 716, '采集端补救：样品台预倾角 20–40 度拍摄可把视角分布整体挪动、部分填补缺失锥，代价是分辨率各向异性与机械稳定性压力——制样与采集对策常需联用。', { size: 10.5, fill: C.mute, maxW: 1290, lh: 15 })

  // ============ 四、诊断流程与辩证 ============
  b.panel(30, 766, 1340, 212, { title: '四、诊断流程与辩证：先量化、再动刀' })
  b.table(50, 800, 640, {
    headers: ['诊断步骤', '观察对象', '阳性判据'],
    colW: [165, 175, 300], rowH: 30, fontSize: 10.5,
    rows: [
      ['2D 分类视角统计', '类别平均图', '视角单一、只剩旋转差异'],
      ['颗粒贴附统计', '断层或低倍纵览', '贴界面比例过高（确诊界面主导）'],
      ['3D 角度覆盖图', '欧拉角分布', '角度空洞、缺失锥'],
      ['对策迭代', '换膜型或加氟化剂', '覆盖是否改善（定稿制样方案）'],
    ],
  })
  b.rect(720, 796, 630, 170, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(736, 820, '辩证一课：界面也可反用', { size: 12.5, weight: 700, fill: C.okD })
  b.wtext(736, 844, '烟草花叶病毒与微管平躺于连续碳膜，统一贡献侧视角——螺旋重构算法恰把一致的侧视展开成三维，膜吸附的偏置反而成了采集设计的一部分；二十面体蛋白若只贡献五重轴顶视，算法无能为力。', { size: 10, fill: C.sub, maxW: 598, lh: 14 })
  b.wtext(736, 882, '「与界面作战」还是「与界面共舞」，取决于样品的界面耐受度与取向需求——小分子量或柔性样品故意贴附，反而拿到互补视角。', { size: 10, fill: C.sub, maxW: 598, lh: 14 })
  b.tag(1000, 922, '每一步都有判据与数字，对策效果可被量化复核', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10, weight: 700, pad: 8 })
}

export default scene({
  title: '空气-水界面问题与对策：冷冻制样的达摩克利斯之剑',
  subtitle: '暴露窗口约 100 ms 至 1 s、多数数据集超过 90% 颗粒贴附界面（吸附自由能数十 kT）；对策：氟化去垢剂约 0.01–0.1 mM、金箔、快速 plunge、亲和网格',
  draw,
})
