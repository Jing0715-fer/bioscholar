// cb ch9-s3 细胞外基质与基膜（39-d 批B 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、胶原：层级组装 ============
  b.panel(30, 132, 660, 430, { title: '一、胶原（占人体蛋白约 30%，已知 28 型）：层级组装' })
  const stages: Array<[string, string]> = [
    ['α 链', '重复 Gly-X-Y 三肽（X 常 Pro、Y 常羟脯氨酸 / 羟赖氨酸）'],
    ['三股超螺旋', '三条左手 α 链拧成右手超螺旋；甘氨酸（最小侧链）位于轴心'],
    ['前胶原', 'ER 内羟化（需维生素 C）＋加糖链；两端保留 C-/N-前肽阻止胞内聚合，分泌'],
    ['原胶原', '胞外蛋白酶切除前肽 → 原胶原（tropocollagen）'],
    ['胶原原纤维', '自组装成原纤维，赖氨酸氧化酶（LO，Cu²⁺ 依赖）催化交联增强抗张强度'],
  ]
  stages.forEach((s, i) => {
    const y = 196 + i * 66
    b.rect(64, y - 20, 140, 40, { fill: i % 2 === 0 ? C.dnaL : C.accL, stroke: i % 2 === 0 ? C.dna : C.acc, sw: 2, rx: 8 })
    b.ctext(134, y + 5, s[0], { size: 11, weight: 700, fill: i % 2 === 0 ? C.dnaD : C.accD })
    b.wtext(220, y - 12, s[1], { size: 9.5, fill: C.sub, maxW: 440, lh: 13 })
    if (i < 4) b.arrow(134, y + 22, 134, y + 42, { stroke: C.mute, sw: 2, marker: 'mute' })
  })
  b.tag(180, 540, '维生素 C 缺乏 → 坏血病（胶原不稳定、牙龈出血、伤口不愈）', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 5 })
  b.wtext(64, 478, '类型分布：I 型（皮肤、骨、肌腱）、II 型（软骨）、III 型（血管壁）、IV 型（基膜，网状）。', { size: 9.5, fill: C.mute, maxW: 580, lh: 13 })
  b.tag(180, 516, '成骨不全（I 型突变）／Ehlers-Danlos（III 型等）', { fill: C.warnL, stroke: C.warn, size: 9.5, tfill: '#78350f', pad: 5 })

  // ============ 二、弹性蛋白与粘附性糖蛋白 ============
  b.panel(710, 132, 660, 430, { title: '二、弹性回弹与粘附糖蛋白、蛋白聚糖凝胶' })
  // 弹性蛋白网络
  b.text(740, 186, '弹性蛋白（高度疏水·无规卷曲）', { size: 11, weight: 700, fill: C.ink })
  b.circle(850, 240, 44, { fill: C.warnL, stroke: C.warn, sw: 2, dash: '6 4' })
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2
    b.circle(850 + 40 * Math.cos(a), 240 + 40 * Math.sin(a), 7, { fill: C.warn, fillOp: 0.5 })
  }
  b.ctext(850, 244, '交联网络', { size: 9.5, weight: 700, fill: '#78350f' })
  b.ctext(850, 300, '锁链素（desmosine）交联', { size: 9, fill: C.mute })
  b.ctext(850, 316, '大动脉·肺·皮肤弹性', { size: 9, fill: C.mute })
  // fibrillin 微纤维包裹
  b.circle(968, 240, 58, { stroke: C.rna, sw: 1.8, dash: '4 4' })
  b.text(968, 178, 'fibrillin-1 微纤维包裹导向', { size: 9, weight: 700, fill: C.rnaD })
  b.tag(830, 360, 'fibrillin-1 突变 → Marfan 综合征', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })
  b.ctext(1060, 360, '瘦高体型·晶体脱位·蜘蛛样指', { size: 9, fill: C.bad })
  b.ctext(1010, 380, '致命并发症：主动脉根部扩张夹层', { size: 9.5, weight: 700, fill: C.bad })
  // 纤连蛋白
  b.text(740, 424, '纤连蛋白：二聚体糖蛋白', { size: 11, weight: 700, fill: C.ink })
  for (const dx of [-34, 34]) {
    b.ellipse(880 + dx, 456, 32, 14, { fill: C.accL, stroke: C.acc, sw: 2 })
    b.rect(880 + dx + 24, 452, 20, 8, { fill: C.acc, fillOp: 0.4 })
  }
  b.line(884, 456, 876, 456, { stroke: C.acc, sw: 2 })
  b.tag(880, 486, 'RGD 基序（被整联蛋白识别）', { fill: C.accL, stroke: C.acc, size: 9.5, tfill: C.accD, pad: 5 })
  b.wtext(960, 432, '血浆型促进血凝与伤口愈合；基质型指导胚胎细胞迁移（敲除小鼠死于原肠运动缺陷）。', { size: 9.5, fill: C.sub, maxW: 170, lh: 13 })
  // 层粘连蛋白 + 蛋白聚糖
  b.text(1240, 424, '层粘连蛋白：十字形三聚体（αβγ）', { size: 11, weight: 700, fill: C.ink, anchor: 'middle' })
  b.line(1240, 440, 1240, 486, { stroke: C.pro, sw: 3.5 })
  b.line(1218, 470, 1262, 470, { stroke: C.pro, sw: 3.5 })
  b.line(1240, 440, 1218, 470, { stroke: C.pro, sw: 3 })
  b.line(1240, 440, 1262, 470, { stroke: C.pro, sw: 3 })
  b.ctext(1240, 500, '基膜核心组分', { size: 9, fill: C.proD })
  b.wtext(740, 520, '蛋白聚糖：GAG（重复二糖长链，除透明质酸外均硫酸化）共价连核心蛋白——聚集 / 多能蛋白聚糖吸水成抗压凝胶（软骨）；透明质酸（HA）游离巨大分子，经 CD44 影响迁移增殖；syndecan / perlecan 结合 FGF 形成浓度梯度与储库。', { size: 9.5, fill: C.mute, maxW: 600, lh: 13.5 })

  // ============ 三、基膜：三分子网与 ECM 动态 ============
  b.panel(30, 576, 1340, 404, { title: '三、基膜（40—120 nm 特化薄片）与 ECM 的动态重塑' })
  // 基膜层示意（上皮细胞 + 基膜 + 结缔组织）
  b.rect(80, 640, 420, 90, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(290, 668, '上皮细胞层', { size: 11, weight: 700, fill: C.proD })
  b.ctext(290, 690, '（基底面朝下）', { size: 9, fill: C.mute })
  // 基膜三分子网
  b.rect(80, 744, 420, 46, { fill: C.dnaL, fillOp: 0.55, stroke: C.dna, sw: 2 })
  for (let i = 0; i < 9; i++) {
    b.line(96 + i * 46, 752, 118 + i * 46, 782, { stroke: C.dna, sw: 1.8 })
    b.line(118 + i * 46, 752, 96 + i * 46, 782, { stroke: C.dna, sw: 1.8, opacity: 0.6 })
  }
  b.ctext(290, 800, 'IV 型胶原网 × 层粘连蛋白 × nidogen × perlecan 交联组装', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(290, 822, '位于上皮 / 内皮下、肌细胞与脂肪细胞周围及 Schwann 细胞外被', { size: 9.5, fill: C.mute })
  // 结缔组织
  b.rect(80, 846, 420, 96, { fill: C.panelB, fillOp: 0.6, stroke: C.faint, sw: 1.4, rx: 8 })
  b.ctext(290, 878, '结缔组织（胶原纤维·蛋白聚糖）', { size: 10, weight: 700, fill: C.sub })
  b.tag(290, 916, '功能：滤过屏障（肾小球）·极性支架·修复模板·信号平台', { fill: C.accL, stroke: C.acc, size: 9.5, tfill: C.accD, pad: 5 })
  // 右侧：疾病与动态
  b.text(560, 640, '基膜病', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(560, 662, 'Alport 综合征：IV 型胶原 α3/4/5 突变——血尿与进行性肾衰；半桥粒与肌营养不良蛋白复合体锚定缺陷 → 大疱性表皮松解症。', { size: 9.5, fill: C.sub, maxW: 330, lh: 13.5 })
  b.text(560, 726, 'ECM 动态重塑', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(640, 756, 'MMP（基质金属蛋白酶）降解', { fill: C.enzL, stroke: C.enz, size: 9.5, tfill: C.enzD, pad: 5 })
  b.arrow(790, 756, 830, 756, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.tag(910, 756, 'TIMP（抑制物）反向平衡', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 5 })
  b.wtext(560, 790, '肿瘤侵袭时 MMP 降解基膜为转移开路；ECM 降解片段具生物活性（内皮抑素 endostatin 抑制血管新生）；纤维化疾病（肝、肺、肾）本质是 ECM 过度沉积。', { size: 9.5, fill: C.sub, maxW: 330, lh: 13.5 })
  b.wtext(940, 660, 'ECM 组成总览：结构纤维（胶原、弹性蛋白）＋粘附性糖蛋白（纤连蛋白、层粘连蛋白）＋水化蛋白聚糖凝胶——赋予组织抗张、回弹与抗压性能，并储存生长因子、传递信号。', { size: 10, fill: C.mute, maxW: 400, lh: 14 })
}

export default scene({
  title: '细胞外基质与基膜：胶原层级、弹性网络与三分子基膜',
  subtitle: '胶原占人体蛋白约 30%，Gly-X-Y 三股螺旋经维生素 C 羟化与 LO 交联逐级组装；纤连蛋白 RGD 被整联蛋白识别；基膜 40—120 nm 三分子网，MMP/TIMP 调控',
  draw,
})
