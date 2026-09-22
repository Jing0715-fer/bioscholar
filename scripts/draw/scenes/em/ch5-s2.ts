// em ch5-s2 化学固定、包埋与超薄切片（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、双固定 ============
  b.panel(30, 132, 1340, 300, { title: '一、双固定：戊二醛交联蛋白，四氧化锇钉死脂质' })
  b.text(70, 205, '戊二醛：蛋白交联（前固定）', { size: 13, weight: 700, fill: C.proD })
  b.ellipse(180, 268, 58, 40, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(180, 273, '蛋白', { size: 11, weight: 600, fill: C.proD })
  b.ellipse(430, 268, 52, 36, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(430, 273, '蛋白', { size: 11, weight: 600, fill: C.proD })
  b.circle(238, 268, 5, { fill: C.pro })
  b.circle(378, 268, 5, { fill: C.pro })
  b.line(240, 268, 376, 268, { stroke: C.pro, sw: 3, marker: 'pro', markerStart: 'pro' })
  b.ctext(308, 250, 'Schiff 碱桥，跨度约 7 Å', { size: 10.5, weight: 600, fill: C.pro })
  b.wtext(70, 330, '五碳二醛：两个醛基进攻赖氨酸等伯氨基形成亚胺连接，亦可经 Michael 型加成接巯基与咪唑基；单体与低聚体的平衡影响渗透速度与最终硬度。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
  b.tag(350, 378, '2–3% 戊二醛 · 磷酸盐或二甲砷酸盐缓冲 pH 7.2–7.4 · 25 °C 1–2 h', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 9 })
  b.text(740, 205, '四氧化锇：脂质固定加电子密度（后固定）', { size: 13, weight: 700, fill: C.accD })
  b.bilayer(780, 258, 320, { tint: C.acc })
  b.ion(860, 212, 'OsO_{4}', { r: 24, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 12 })
  b.arrow(860, 240, 860, 254, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(740, 305, '对脂质不饱和脂肪酸的碳碳双键做顺式双羟基化加成：锇原子带着两个羟基留在尾区、把脂双层就地钉死；原子序数 76 带来强弹性散射——膜系在图像里的「黑」就是锇原子的集体签名。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
  b.tag(1060, 352, '1–2% 四氧化锇 · 0.5–2 h · Z = 76 提供电子密度', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 9 })
  b.tag(700, 400, '顺序不可颠倒：戊二醛先行锁住蛋白基质、开出渗透通道；锇若先接触组织，表层剧烈硬化反而堵死戊二醛的渗入', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 9 })
  b.wtext(60, 422, '定型史：Palade 1952 缓冲锇固定；Watson 1958 醋酸铀染色；Luft 1961 Epon 环氧包埋；Sabatini、Bensch 与 Barrnett 1963 戊二醛；Reynolds 1963 柠檬酸铅。', { size: 10, fill: C.mute, maxW: 1290, lh: 14 })

  // ============ 二、流水线全景 ============
  b.panel(30, 456, 660, 300, { title: '二、流水线全景：两天上下的化学马拉松' })
  b.arrow(46, 496, 46, 712, { stroke: C.mute, sw: 2, marker: 'mute' })
  const rows: [string, string][] = [
    ['① 前固定', '2–3% 戊二醛，25 °C 1–2 h——交联蛋白、稳定基质'],
    ['② 后固定', '1–2% 四氧化锇，0.5–2 h——固定脂质并赋予电子密度'],
    ['③ 分级脱水', '乙醇 30% 至 100% 逐级置换，每步 10–15 min；70% 台阶可暂存过夜'],
    ['④ 过渡与块染', '丙酮或氧化丙烯过渡；醋酸铀块染抗抽取（衬度红利是副产品）'],
    ['⑤ 浸透与聚合', 'Epon/Araldite 环氧树脂，60 °C 聚合 24–48 h 固化成硬块'],
    ['⑥ 超薄切片', '玻璃刀或钻石刀切 70–90 nm，切片漂浮刀槽水面、捞上铜网'],
    ['⑦ 双重后染', '醋酸铀染核酸与蛋白；柠檬酸铅染膜系与糖原（Reynolds 1963）'],
  ]
  rows.forEach((r, i) => {
    const y = 490 + i * 33
    b.rect(58, y, 614, 30, { fill: i % 2 ? '#ffffff' : C.panelB, stroke: C.line, sw: 1.2, rx: 5 })
    b.text(72, y + 20, r[0], { size: 11.5, weight: 700, fill: C.ink })
    b.text(170, y + 20, r[1], { size: 10.5, fill: C.sub })
  })
  b.wtext(58, 736, '整条流程约两天、全程室温到 60 °C：稳定、便宜、可批量——病理诊断（肾脏活检、肿瘤分型）的常规武器。', { size: 10, fill: C.mute, maxW: 614, lh: 13 })

  // ============ 三、超薄切片示意 ============
  b.panel(710, 456, 660, 300, { title: '三、超薄切片：钻石刀、刀槽与捞网' })
  b.polygon([[750, 510], [860, 510], [845, 585], [765, 585]], { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(805, 552, '树脂块', { size: 11, weight: 600, fill: C.rnaD })
  b.arrow(868, 548, 938, 548, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(903, 534, '进给', { size: 9.5, fill: C.mute })
  b.polygon([[960, 510], [1050, 510], [1005, 588]], { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(1005, 500, '钻石刀（刃口半径小而持久）', { size: 10, weight: 600, fill: C.accD })
  b.rect(930, 592, 190, 38, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 4 })
  b.rect(944, 588, 24, 5, { fill: '#ffffff', stroke: C.sub, sw: 1, rx: 2 })
  b.rect(976, 588, 24, 5, { fill: '#ffffff', stroke: C.sub, sw: 1, rx: 2 })
  b.rect(1008, 588, 24, 5, { fill: '#ffffff', stroke: C.sub, sw: 1, rx: 2 })
  b.ctext(1025, 616, '刀槽水面（切片漂浮摊展）', { size: 9.5, fill: C.accD })
  b.circle(1250, 560, 36, { fill: '#ffffff', stroke: C.sub, sw: 2 })
  b.line(1214, 560, 1286, 560, { stroke: C.faint, sw: 1 })
  b.line(1250, 524, 1250, 596, { stroke: C.faint, sw: 1 })
  b.line(1225, 535, 1275, 585, { stroke: C.faint, sw: 0.8 })
  b.line(1225, 585, 1275, 535, { stroke: C.faint, sw: 0.8 })
  b.ctext(1250, 618, '铜网捞取', { size: 10, fill: C.sub })
  b.arrow(1136, 592, 1190, 576, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.tag(1100, 518, '70–90 nm：干涉色银灰至金黄', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 10, weight: 700, pad: 8 })
  b.tag(1030, 678, '玻璃刀：临用现断、便宜；刃口寿命仅数十张、微观起伏留细划痕', { fill: C.panelB, stroke: C.sub, tfill: C.sub, size: 10, pad: 8 })
  b.tag(1030, 708, '钻石刀：持久（数千张）、压缩颤痕更少；昂贵娇气，一次磕碰即报废', { fill: C.panelB, stroke: C.sub, tfill: C.sub, size: 10, pad: 8 })
  b.wtext(730, 738, '树脂硬度匹配：软组织配偏硬树脂以获支撑、硬组织配偏软树脂以缓冲切割应力——失配则压缩与颤痕成对出现。', { size: 10, fill: C.mute, maxW: 620, lh: 13 })

  // ============ 四、假象清单 ============
  b.panel(30, 766, 1340, 212, { title: '四、假象清单：能信到几纳米' })
  b.rect(50, 796, 400, 168, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(66, 820, '固定假象（指向流程前端）', { size: 12, weight: 700, fill: C.badD })
  b.wtext(66, 842, '可溶性蛋白被抽提（固定剂到达前已自由流失）；细胞与细胞器收缩（渗透失衡与交联收缩）；微管解聚（未经戊二醛充分预固定几乎必失——教训最深的经典项）；膜系形态漂移与间隙改变；酶活性与抗原性大损。', { size: 10, fill: C.sub, maxW: 368, lh: 14 })
  b.tag(250, 900, '可信度约 2–5 nm', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11, weight: 700, pad: 8 })
  b.wtext(66, 930, '谈「形态」可靠，谈「分子比例与动态」则危险——后者交给物理固定。', { size: 10, fill: C.sub, maxW: 368, lh: 14 })
  b.table(480, 796, 420, {
    headers: ['切片假象', '形貌特征', '对策方向'],
    colW: [86, 178, 156], rowH: 29, fontSize: 10,
    rows: [
      ['刀痕', '平行刀刃的纵向细划线', '移刃位或换刀'],
      ['颤痕', '垂直切割方向的周期性厚带', '调切速切角、加固夹持'],
      ['压缩', '沿切割方向缩短变宽', '调切角、匹配树脂硬度'],
      ['皱褶', '切片相互叠压', '调槽液温度与摊片时间'],
    ],
  })
  b.ctext(690, 968, '混淆两类假象会把好样品误诊为坏固定', { size: 10, fill: C.mute })
  b.rect(930, 796, 410, 168, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 8 })
  b.text(946, 820, '读图纪律', { size: 12, weight: 700, fill: C.ink })
  b.wtext(946, 844, '区分「固定假象」（内容物抽取、收缩、解聚）与「切片假象」（刀痕、颤痕、压缩的机械痕迹）：前者指向流程前端，后者指向切片台——混淆两者，会把一块好样品误诊为坏固定。', { size: 10, fill: C.sub, maxW: 378, lh: 14 })
  b.wtext(946, 894, '化学固定的可信度约 2–5 nm：形态学金标准的账本要随身携带；分子比例与动态的问题，正是第 3 节物理固定要正面回答的。', { size: 10, fill: C.sub, maxW: 378, lh: 14 })
}

export default scene({
  title: '化学固定、包埋与超薄切片：室温路线流水线',
  subtitle: '戊二醛 2–3% 交联蛋白、锇酸 1–2% 固定脂质；分级脱水、Epon 60 °C 聚合 24–48 h、切片 70–90 nm、双重后染；可信度约 2–5 nm',
  draw,
})
