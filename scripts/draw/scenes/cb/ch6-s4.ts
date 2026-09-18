// cb ch6-s4 中间丝：组织特异性的抗张网络（39-d 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、特征与组装层次 ============
  b.panel(30, 132, 660, 430, { title: '一、中间丝：无极性、不结合核苷酸的稳定网络' })
  b.table(50, 188, 630, {
    headers: ['骨架', '直径', '极性', '核苷酸', '马达／踏车'],
    colW: [100, 90, 80, 100, 260],
    rowH: 34,
    fontSize: 10.5,
    rows: [
      ['微管', '25 nm', '有', '结合 GTP', '有马达、能踏车'],
      ['微丝', '7 nm', '有', '结合 ATP', '有马达、能踏车'],
      ['中间丝', '10 nm', '无', '不结合', '无——经可逆磷酸化重塑'],
    ],
  })
  b.text(60, 372, '组装层次（不需要 GTP／ATP）', { size: 11.5, weight: 700, fill: C.ink })
  // ① 单体
  b.circle(75, 433, 5, { fill: C.pro, fillOp: 0.5 })
  b.rect(80, 428, 62, 10, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 5 })
  b.circle(145, 433, 5, { fill: C.pro, fillOp: 0.5 })
  b.arrow(152, 433, 182, 433, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // ② 卷曲螺旋二聚体
  b.path('M 190,427 q 12,-10 24,0 q 12,10 24,0 q 12,-10 24,0', { stroke: C.pro, sw: 3, fill: 'none' })
  b.path('M 190,439 q 12,10 24,0 q 12,-10 24,0 q 12,10 24,0', { stroke: C.pro, sw: 3, fill: 'none' })
  b.arrow(262, 433, 318, 433, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // ③ 反平行四聚体
  for (let i = 0; i < 4; i++) b.line(328, 418 + i * 12, 402, 418 + i * 12, { stroke: C.pro, sw: 3 })
  b.polygon([[402, 414], [410, 418], [402, 422]], { fill: C.pro })
  b.polygon([[328, 426], [320, 430], [328, 434]], { fill: C.pro })
  b.polygon([[402, 438], [410, 442], [402, 446]], { fill: C.pro })
  b.polygon([[328, 450], [320, 454], [328, 458]], { fill: C.pro })
  b.arrow(412, 433, 436, 433, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // ④ 原丝
  b.path('M 440,420 q 15,-12 30,0 q 15,12 30,0', { stroke: C.pro, sw: 2.5, fill: 'none' })
  b.path('M 440,432 q 15,12 30,0 q 15,-12 30,0', { stroke: C.pro, sw: 2.5, fill: 'none' })
  b.path('M 440,444 q 15,-12 30,0 q 15,12 30,0', { stroke: C.pro, sw: 2.5, fill: 'none' })
  b.arrow(532, 433, 556, 433, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // ⑤ 10 nm 纤维
  for (let i = 0; i < 8; i++) {
    b.path(`M 560,${414 + i * 6} q 15,${i % 2 ? -10 : 10} 30,0 q 15,${i % 2 ? 10 : -10} 30,0`, { stroke: C.pro, sw: 2.2, fill: 'none', opacity: 0.85 })
  }
  b.ctext(110, 505, '① 单体（杆状）', { size: 9.5, fill: C.sub })
  b.ctext(232, 505, '② 卷曲螺旋二聚体', { size: 9.5, fill: C.sub })
  b.ctext(365, 505, '③ 反平行四聚体（无极性）', { size: 9.5, fill: C.sub })
  b.ctext(485, 505, '④ 原丝', { size: 9.5, fill: C.sub })
  b.ctext(610, 505, '⑤ 10 nm 纤维', { size: 9.5, fill: C.sub })
  b.text(60, 548, '稳定性主要靠亚基间疏水与静电作用；无极性 → 无马达蛋白与踏车行为。', { size: 10, fill: C.mute })

  // ============ 二、组织特异性分型 ============
  b.panel(710, 132, 660, 430, { title: '二、组织特异性分型（病理诊断的标志物）' })
  b.table(726, 188, 628, {
    headers: ['类型', '代表蛋白', '分布与疾病'],
    colW: [110, 190, 328],
    rowH: 34,
    fontSize: 10,
    rows: [
      ['Ⅰ/Ⅱ 型角蛋白', '上皮酸性／碱性角蛋白异二聚体', '大疱性表皮松解症（EBS，K5/K14 缺陷）'],
      ['Ⅲ 型', '波形蛋白·结蛋白·GFAP', '间充质／肌肉／星形胶质；desmin 相关肌病'],
      ['Ⅳ 型', '神经丝蛋白 NF-L/M/H', '神经丝异常与肌萎缩侧索硬化（ALS）'],
      ['Ⅴ 型', '核纤层蛋白 lamin A/C 与 B', 'Hutchinson-Gilford 早衰症、心肌病（LMNA）'],
      ['Ⅵ 型', '巢蛋白（nestin）', '神经／肌肉前体细胞标志'],
    ],
  })
  b.text(726, 428, '可逆磷酸化重塑（动态调控）', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(810, 462, 'CDK1 磷酸化核纤层蛋白', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 6 })
  b.arrow(920, 462, 950, 462, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.tag(990, 462, '核膜崩解', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 6 })
  b.arrow(1030, 462, 1060, 462, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.tag(1115, 462, '末期去磷酸化重建', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 6 })
  b.wtext(726, 505, 'lamin A 前体需经法尼基化＋ZMPSTE24 蛋白酶切除 C 端方能成熟；删除切割位点的突变产生持续法尼基化的 progerin，堆积于核膜下造成 Hutchinson-Gilford 早衰表型。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 三、杆区结构与功能 ============
  b.panel(30, 576, 1340, 404, { title: '三、中央杆区结构与机械整合功能' })
  b.domains(60, 660, 46, [
    { label: '头', frac: 80, fill: C.proL, stroke: C.pro, sub: '非螺旋' },
    { label: '1A', frac: 90, fill: C.dnaL, stroke: C.dna, sub: 'α 螺旋' },
    { label: 'L1', frac: 45, fill: C.panelB, stroke: C.mute, sub: '连接肽' },
    { label: '1B', frac: 130, fill: C.dnaL, stroke: C.dna, sub: 'α 螺旋' },
    { label: 'L12', frac: 55, fill: C.panelB, stroke: C.mute, sub: '连接肽' },
    { label: '2A', frac: 70, fill: C.dnaL, stroke: C.dna, sub: 'α 螺旋' },
    { label: '2B', frac: 130, fill: C.dnaL, stroke: C.dna, sub: 'α 螺旋' },
    { label: '尾', frac: 80, fill: C.proL, stroke: C.pro, sub: '非螺旋' },
  ])
  b.braceH(140, 646, 520, { label: '中央杆区约 310 aa——介导卷曲螺旋二聚体', flip: true, size: 11 })
  b.ctext(400, 735, '两端非螺旋的头／尾结构域决定种类特异性（中间丝最大分歧区）', { size: 10.5, fill: C.mute })
  // 功能卡片
  b.rect(780, 628, 560, 140, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(800, 655, '机械整合', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(800, 680, '表皮角蛋白网络桥连桥粒、肌肉结蛋白连接 Z 盘与胞膜——抵抗剪切与拉伸；缺陷表现为皮肤起疱、肌肉变性等机械损伤性疾病。', { size: 10.5, fill: C.sub, maxW: 520, lh: 14 })
  b.rect(780, 785, 560, 150, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(800, 812, '核纤层（lamina）', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(800, 838, '内核膜下的正交网架：支撑核形态、锚定异染色质与核孔复合体，参与 DNA 复制与基因表达的空间组织。', { size: 10.5, fill: C.sub, maxW: 520, lh: 14 })
  // 疾病标签
  b.text(60, 885, '中间丝疾病多表现为机械强度缺陷：', { size: 11, weight: 700, fill: C.sub })
  b.tag(160, 920, 'EBS（K5/K14）皮肤起疱', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.bad, pad: 6 })
  b.tag(345, 920, 'desmin 肌病', { fill: C.warnL, stroke: C.warn, size: 10, tfill: '#78350f', pad: 6 })
  b.tag(465, 920, 'NF 异常与 ALS', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.tag(595, 920, 'LMNA 早衰／心肌病', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
}

export default scene({
  title: '中间丝：组织特异性的抗张网络',
  subtitle: '直径 10 nm、无极性、不结合核苷酸——无马达与踏车，靠磷酸化重塑；单体→卷曲螺旋二聚体→反平行四聚体→10 nm 纤维；角蛋白／波形蛋白／结蛋白／GFAP／神经丝／lamin 分型特异，LMNA 突变致早衰症与心肌病',
  draw,
})
