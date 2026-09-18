// im ch4-s3 细胞因子：免疫系统的信使（39-g 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、家族功能谱 ============
  b.panel(30, 132, 1340, 342, { title: '一、细胞因子的共同特性与家族功能谱：免疫系统的信使网络' })

  const props: Array<[number, string]> = [
    [60, '低分子量分泌蛋白'],
    [290, '以自泌 / 旁泌为主'],
    [520, '多效性'],
    [630, '冗余性'],
    [740, '协同性'],
    [850, '网络性'],
  ]
  props.forEach(([x, s]) => b.tag(x + 80, 178, s, { fill: C.panelB, stroke: C.line, tfill: C.sub, size: 11.5, weight: 600, pad: 9 }))
  b.text(1070, 182, '1979 年国际会议统一命名白细胞介素（IL）', { size: 10.5, fill: C.mute })

  b.table(60, 214, 1280, {
    headers: ['家族', '代表成员', '主要来源', '代表功能'],
    colW: [170, 280, 270, 560],
    rowH: 42,
    fontSize: 12,
    rows: [
      ['白细胞介素（IL）', 'IL-1 · IL-2 · IL-4 · IL-6 · IL-12', '单核巨噬细胞 · T 细胞等', '活化增殖、分化与 Th 极化'],
      ['肿瘤坏死因子（TNF）', 'TNF-α', '活化的单核-巨噬细胞', '炎症介质与细胞毒性'],
      ['干扰素（IFN）', 'IFN-α / β（I 型）· IFN-γ（II 型）', 'pDC · NK 细胞 · T 细胞', '抗病毒与免疫调节'],
      ['趋化因子', 'IL-8 等约 8–10 kDa 小蛋白', '多种细胞', '按 C / CXC 等亚家族趋化白细胞定向迁移'],
      ['集落刺激因子（CSF）', 'G-CSF · GM-CSF', '基质细胞与免疫细胞', '造血与白细胞生成'],
    ],
  })

  // ============ 二、JAK-STAT ============
  b.panel(30, 488, 1340, 252, { title: '二、JAK-STAT 通路：从受体到细胞核，SOCS 负反馈把关' })

  // 细胞膜
  b.bilayer(80, 560, 360, { tint: C.dna, op: 0.55 })
  b.tag(180, 536, '细胞因子受体', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11, weight: 700, pad: 8 })
  b.ion(150, 640, 'IL-6', { r: 18, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10 })
  b.arrow(150, 620, 150, 586, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(150, 684, '胞外', { size: 10.5, fill: C.mute })
  b.ctext(400, 596, '胞内', { size: 10.5, fill: C.mute })

  b.arrow(446, 566, 490, 566, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.rect(494, 540, 150, 52, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.6, rx: 8 })
  b.ctext(569, 562, 'JAK 磷酸化', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(569, 582, '受体近端激酶', { size: 9.5, fill: C.mute })
  b.arrow(648, 566, 692, 566, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.rect(696, 540, 170, 52, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.6, rx: 8 })
  b.ctext(781, 562, 'STAT 二聚化', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(781, 582, '磷酸化后入核', { size: 9.5, fill: C.mute })
  b.arrow(872, 566, 948, 566, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.nucleusU(1010, 566, 52, { fill: C.proL, stroke: C.pro })
  b.text(930, 530, '细胞核', { size: 10.5, fill: C.mute })
  b.ctext(1010, 566, '靶基因转录', { size: 10.5, weight: 700, fill: C.proD })

  // SOCS 负反馈
  b.polyline([[781, 594], [781, 640], [569, 640], [569, 596]], { stroke: C.bad, sw: 2, dash: '6 4', marker: 'bad' })
  b.ctext(675, 660, 'SOCS 负反馈：抑制 JAK，及时刹停信号', { size: 10.5, weight: 700, fill: C.bad })
  b.tag(675, 688, 'SOCS', { fill: C.badL, stroke: C.bad, tfill: C.bad, size: 10, weight: 700, pad: 7 })

  // 右侧突变卡
  b.rect(1090, 530, 250, 190, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(1106, 556, '通路基因突变的疾病谱', { size: 12.5, weight: 700, fill: C.ink })
  const muts = ['免疫缺陷', '高 IgE 综合征', '骨髓增殖性肿瘤']
  muts.forEach((s, i) => {
    b.circle(1116, 584 + i * 40, 3.5, { fill: C.bad })
    b.text(1128, 588 + i * 40, s, { size: 11.5, fill: C.sub })
  })
  b.wtext(1106, 690, 'JAK-STAT 成分突变即可致病，足见其枢纽地位。', { size: 10.5, fill: C.mute, maxW: 220, lh: 15 })

  // ============ 三、细胞因子风暴 ============
  b.panel(30, 754, 1340, 224, { title: '三、细胞因子风暴：失控的信使网络与精准干预' })

  b.rect(60, 794, 640, 154, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(80, 820, '细胞因子风暴：正反馈失控的全身炎症', { size: 13.5, weight: 700, fill: C.bad })
  b.wtext(80, 844, '免疫细胞与细胞因子互为放大器，形成正反馈级联，溢出局部而成为全身炎症。', { size: 11.5, fill: C.sub, maxW: 590, lh: 17 })
  const trig = ['超抗原中毒', 'CAR-T 治疗', '重症感染']
  trig.forEach((s, i) => {
    b.tag(80 + i * 200 + 66, 900, s, { fill: C.bg, stroke: C.bad, tfill: C.bad, size: 11.5, weight: 700, pad: 9 })
  })
  b.ctext(370, 934, 'IL-6 为风暴的中心节点之一', { size: 11.5, weight: 700, fill: C.bad })

  b.rect(740, 794, 580, 154, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(760, 820, '生物制剂：对信使网络的精准干预', { size: 13.5, weight: 700, fill: '#065f46' })
  const drugs: Array<[string, string]> = [
    ['抗 IL-6R 单抗', '阻断 IL-6 信号轴'],
    ['抗 TNF 制剂', '抑制 TNF 炎症轴'],
    ['IL-1 受体拮抗剂', '封闭 IL-1 通路'],
  ]
  drugs.forEach(([t, s], i) => {
    b.circle(780, 848 + i * 34, 3.5, { fill: C.ok })
    b.text(792, 852 + i * 34, t, { size: 12, weight: 700, fill: C.ink })
    b.text(792 + 130, 852 + i * 34, s, { size: 11, fill: C.sub })
  })
}

export default scene({
  title: '细胞因子：免疫系统的信使——家族谱、JAK-STAT 与细胞因子风暴',
  subtitle: '细胞因子为低分子量分泌蛋白，以自泌与旁泌为主，具多效性、冗余性、协同性与网络性；IL、TNF、IFN、趋化因子（约 8–10 kDa）与集落刺激因子分工覆盖活化增殖、极化、趋化与造血；多数经 JAK-STAT 通路转导、SOCS 负反馈刹停；风暴见于超抗原中毒、CAR-T 与重症感染（IL-6 为中心节点），抗 IL-6R、抗 TNF 与 IL-1 受体拮抗剂为精准干预',
  draw,
})
