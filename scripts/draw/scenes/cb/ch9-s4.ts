// cb ch9-s4 细胞粘附分子与白细胞渗出（39-d 批B 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、四大粘附分子家族总表 ============
  b.panel(30, 132, 1340, 330, { title: '一、四大细胞粘附分子家族' })
  b.table(60, 186, 1280, {
    headers: ['家族', '离子依赖', '结合方式', '代表成员与功能'],
    colW: [220, 170, 250, 640],
    rowH: 30,
    fontSize: 10,
    rows: [
      ['钙粘蛋白（cadherin）', 'Ca²⁺', '同型结合', 'E-/N-/P-钙粘蛋白：上皮、神经粘合带；胚胎形态发生'],
      ['选择素（selectin）', 'Ca²⁺', '识别糖链', 'P-（血小板）、E-（内皮）、L-（白细胞）选择素：白细胞滚动'],
      ['整联蛋白（integrin）', 'Mg²⁺/Mn²⁺', '异型（配体 RGD 等）', 'α/β 异二聚体 24 种：ECM 粘附、白细胞 LFA-1'],
      ['免疫球蛋白超家族（IgSF）', '不依赖', '同型或异型', 'ICAM-1/VCAM-1（整联蛋白配体）、NCAM（神经）、PECAM-1'],
    ],
  })
  b.tag(240, 366, 'E-→N-钙粘蛋白转换＝EMT 标志（肿瘤获得侵袭性）', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 5 })
  b.tag(680, 366, 'E-钙粘蛋白（CDH1）胚系突变 → 遗传性弥漫型胃癌', { fill: C.warnL, stroke: C.warn, size: 9.5, tfill: '#78350f', pad: 5 })
  b.tag(1070, 366, '双向信号：外→内与内→外', { fill: C.accL, stroke: C.acc, size: 9.5, tfill: C.accD, pad: 5 })

  // ============ 二、白细胞渗出级联 ============
  b.panel(30, 482, 700, 498, { title: '二、白细胞渗出级联：滚动 → 激活 → 牢固粘附 → 穿内皮迁移' })
  // 血管腔
  b.rect(60, 536, 640, 96, { fill: C.accL, fillOp: 0.4 })
  b.ctext(150, 556, '血管腔（血流）', { size: 10, weight: 700, fill: C.accD })
  b.arrow(80, 580, 300, 580, { stroke: C.acc, sw: 2, marker: 'acc' })
  // 内皮细胞（两枚，中留连接）
  b.rect(60, 632, 280, 56, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.rect(420, 632, 280, 56, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(200, 664, '内皮细胞', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(560, 664, '内皮细胞', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(380, 656, '连接旁', { size: 9, fill: C.mute })
  // 基膜与组织
  b.rect(60, 688, 640, 26, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.6 })
  b.ctext(380, 705, '基膜', { size: 9.5, weight: 700, fill: C.dnaD })
  b.rect(60, 714, 640, 110, { fill: C.panelB, fillOp: 0.6 })
  b.ctext(150, 736, '组织（感染灶方向）', { size: 10, weight: 700, fill: C.sub })
  // 白细胞四阶段
  const wbc = (cx: number, cy: number, label: string, spread: boolean) => {
    if (spread) b.ellipse(cx, cy, 30, 12, { fill: C.warnL, stroke: C.warn, sw: 2 })
    else b.circle(cx, cy, 15, { fill: C.warnL, stroke: C.warn, sw: 2 })
    b.ctext(cx, cy + (spread ? -24 : -24), label, { size: 9, weight: 700, fill: '#78350f' })
  }
  wbc(170, 600, '① 滚动', false)
  wbc(430, 600, '② 激活', false)
  wbc(520, 640, '③ 牢固粘附（铺展）', true)
  b.ellipse(380, 700, 14, 20, { fill: C.warnL, stroke: C.warn, sw: 2 })
  b.ctext(452, 760, '④ 穿内皮迁移', { size: 9, weight: 700, fill: '#78350f' })
  b.circle(390, 790, 15, { fill: C.warnL, stroke: C.warn, sw: 2 })
  // 阶段注释
  b.wtext(70, 860, '① 组胺与 TNF-α/IL-1 使内皮表达 P-选择素（Weibel-Palade 小体释放）并转录上调 E-选择素；白细胞糖链配体 Sialyl-Lewis X 与选择素松散可逆结合 → 减速滚动。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13.5 })
  b.wtext(70, 912, '② 内皮表面趋化因子（IL-8/CXCL8、fMLP）经 GPCR 触发 Rap1/Talin 信号 → β2 整联蛋白 LFA-1 由弯折低亲和伸展为高亲和（inside-out 激活）。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13.5 })
  b.wtext(70, 952, '③ 高亲和 LFA-1 与 Mac-1 结合内皮 ICAM-1（IgSF）→ 铺展停驻。④ 经 ICAM-1 富集的连接旁（PECAM-1/CD31 介导）挤过内皮，分泌胶原酶穿越基膜，顺趋化因子梯度抵达感染灶。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13.5 })

  // ============ 三、临床印证与信号功能 ============
  b.panel(750, 482, 620, 498, { title: '三、级联模型的临床印证与粘附分子的信号功能' })
  b.text(776, 536, '正反两面的临床证据', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(860, 566, 'LAD 白细胞粘附缺陷：CD18（β2）突变', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })
  b.wtext(776, 592, '白细胞不能牢固粘附 → 反复细菌感染、伤口不愈、脐带延迟脱落。', { size: 9.5, fill: C.bad, maxW: 560, lh: 13 })
  b.tag(920, 630, '那他珠单抗（抗 α4 整联蛋白）治疗多发性硬化', { fill: C.accL, stroke: C.acc, size: 9.5, tfill: C.accD, pad: 5 })
  b.wtext(776, 656, '阻断白细胞与 VCAM-1 的结合，减少中枢炎症。', { size: 9.5, fill: C.sub, maxW: 560, lh: 13 })
  b.text(776, 700, '粘附分子并非"分子胶水"', { size: 11.5, weight: 700, fill: C.ink })
  const sig: Array<[string, string]> = [
    ['整联蛋白簇集', '激活 FAK-Src 与 Rho 通路，调控增殖、存活与迁移方向——脱离 ECM 的贴壁依赖细胞发生失巢凋亡（anoikis）'],
    ['钙粘蛋白', '参与接触抑制与形态发生'],
    ['选择素', '与肿瘤转移的器官选择性相关'],
  ]
  sig.forEach((s, i) => {
    const y = 728 + i * 62
    b.tag(870, y, s[0], { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 5 })
    b.wtext(776, y + 20, s[1], { size: 9.5, fill: C.sub, maxW: 560, lh: 13 })
  })
  b.wtext(776, 930, '渗出级联是粘附分子协同作用的经典过程：选择素负责减速筛选，整联蛋白负责锚定制动，IgSM 提供内皮侧把手，穿胞与旁路途径并行完成越界。', { size: 10, fill: C.mute, maxW: 560, lh: 14 })
}

export default scene({
  title: '细胞粘附分子与白细胞渗出：四大家族与四级级联',
  subtitle: '四大粘附家族（钙粘蛋白/选择素/整联蛋白/IgSF）；渗出级联：选择素滚动→LFA-1 激活→ICAM-1 牢固粘附→PECAM-1 穿内皮；LAD 与那他珠单抗正反印证',
  draw,
})
