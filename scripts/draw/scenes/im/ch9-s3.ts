// im ch9-s3 T 细胞亚群及其功能：三信号分化与主转录因子（39-g 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三信号与亚群总表 ============
  b.panel(30, 132, 1340, 334, { title: '一、效应 T 分化的三信号与各亚群的主转录因子' })

  const sigs: Array<[string, string]> = [
    ['信号一：TCR 特异性', '抗原识别的特异性门牌'],
    ['信号二：共刺激', 'CD28-B7 等放大许可'],
    ['信号三：极化细胞因子', '指定亚群分化方向'],
  ]
  sigs.forEach(([t, s], i) => {
    b.rect(60 + i * 300, 182, 280, 46, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.5, rx: 8 })
    b.text(76 + i * 300, 202, t, { size: 11.5, weight: 700, fill: C.accD })
    b.text(76 + i * 300, 220, s, { size: 9.5, fill: C.sub })
  })
  b.arrow(948, 205, 996, 205, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(1000, 182, 310, 46, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.5, rx: 8 })
  b.ctext(1155, 202, '主转录因子执掌亚群命运', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(1155, 220, 'T-bet · GATA3 · RORγt · BCL6 · Foxp3', { size: 9.5, fill: C.sub })

  b.table(60, 240, 1280, {
    headers: ['亚群', '主转录因子', '主要诱导信号', '特征细胞因子', '主要职能'],
    colW: [90, 110, 250, 250, 580],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['Th1', 'T-bet', 'IL-12、IFN-γ', 'IFN-γ、IL-2、TNF-α', '巨噬细胞活化、细胞免疫'],
      ['Th2', 'GATA3', 'IL-4', 'IL-4、IL-5、IL-13', 'IgE 转类、抗寄生虫、速发型超敏'],
      ['Th17', 'RORγt', 'TGF-β 加 IL-6，IL-23 维持', 'IL-17A/F、IL-22', '中性粒细胞炎症、屏障防御'],
      ['Tfh', 'BCL6', 'IL-6、IL-21', 'IL-21', '生发中心反应、抗体亲和力成熟'],
      ['Treg', 'Foxp3', 'TGF-β、IL-2', 'IL-10、TGF-β、IL-35', '外周耐受与免疫抑制'],
    ],
  })

  // ============ 二、Th1/Th2 跷跷板与 CTL 两套兵器 ============
  b.panel(30, 478, 1340, 250, { title: '二、Th1 与 Th2 的跷跷板 · CTL 定向杀伤的两套兵器' })

  b.ctext(350, 548, 'Th1 ⇄ Th2：相互拮抗的跷跷板', { size: 12, weight: 700, fill: C.ink })
  b.line(180, 642, 520, 698, { stroke: C.mute, sw: 5, opacity: 0.6 })
  b.polygon([[350, 668], [322, 706], [378, 706]], { fill: C.panelB, stroke: C.mute, sw: 1.5 })
  b.rect(95, 568, 190, 64, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(190, 588, 'Th1（T-bet）', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(190, 606, 'IFN-γ、IL-2、TNF-α', { size: 9, fill: C.sub })
  b.ctext(190, 622, '巨噬细胞活化 · 细胞免疫', { size: 9, fill: C.sub })
  b.rect(415, 636, 190, 64, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.6, rx: 8 })
  b.ctext(510, 656, 'Th2（GATA3）', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(510, 674, 'IL-4、IL-5、IL-13', { size: 9, fill: C.sub })
  b.ctext(510, 690, 'IgE 转类 · 抗寄生虫', { size: 9, fill: C.sub })
  b.ctext(350, 726, '一端抬起，另一端落下——细胞免疫与体液免疫的两翼平衡', { size: 10, weight: 600, fill: C.mute })

  b.rect(710, 528, 630, 180, { fill: C.badL, fillOp: 0.25, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(728, 552, 'CD8⁺ CTL：定向诱导靶细胞凋亡（不伤旁观）', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(730, 568, 290, 122, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 8 })
  b.text(746, 590, '兵器一：穿孔素-颗粒酶', { size: 11, weight: 700, fill: C.ink })
  b.wtext(746, 610, '穿孔素在靶膜打孔，颗粒酶循孔进入，激活胱天蛋白酶诱导凋亡。', { size: 9.5, fill: C.sub, maxW: 260, lh: 14 })
  b.ctext(875, 672, '分泌型 · 靶向释放于免疫突触', { size: 9, fill: C.mute })
  b.rect(1030, 568, 290, 122, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 8 })
  b.text(1046, 590, '兵器二：FasL-Fas', { size: 11, weight: 700, fill: C.ink })
  b.wtext(1046, 610, 'CTL 表面 FasL 结合靶细胞 Fas，启动凋亡级联。', { size: 9.5, fill: C.sub, maxW: 260, lh: 14 })
  b.ctext(1175, 672, '膜分子接触型 · 定向点对点', { size: 9, fill: C.mute })

  // ============ 三、克隆收缩与记忆 T 三型 ============
  b.panel(30, 740, 1340, 234, { title: '三、克隆收缩后的幸存者：TCM · TEM · TRM 三型记忆 T 细胞' })

  b.rect(60, 790, 1240, 40, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(80, 814, '效应应答清除抗原后，大部分效应 T 细胞凋亡（克隆收缩）；Treg（Foxp3）平时维持外周耐受与免疫稳态。', { size: 11, weight: 600, fill: C.ink, maxW: 1200, lh: 14 })

  const mems: Array<[number, string, string, string, string]> = [
    [60, 'TCM 中枢记忆', 'CCR7⁺', '驻淋巴器官再循环、长期待命', C.acc],
    [500, 'TEM 效应记忆', '即时应答', '快速抵达感染灶即时发挥效应', C.dna],
    [940, 'TRM 组织驻留', 'CD69⁺', '长驻皮肤、肠道等屏障组织', C.rna],
  ]
  mems.forEach(([x, t, s1, s2, col]) => {
    b.rect(x, 848, 400, 70, { fill: col, fillOp: 0.08, stroke: col, sw: 1.6, rx: 9 })
    b.text(x + 18, 872, t, { size: 12.5, weight: 700, fill: col })
    b.text(x + 18, 892, s1, { size: 10, weight: 700, fill: C.ink })
    b.wtext(x + 18, 908, s2, { size: 9.5, fill: C.sub, maxW: 370, lh: 12 })
  })
  b.ctext(700, 950, '记忆 T 对再次抗原反应更快、更强、门槛更低——疫苗保护效应的直接载体', { size: 11.5, weight: 600, fill: C.ink })
}

export default scene({
  title: 'T 细胞亚群及其功能：三信号分化、主转录因子与记忆三型',
  subtitle: '效应 T 分化由 TCR 特异性、共刺激与极化细胞因子三信号决定：Th1/T-bet（IFN-γ，细胞免疫）与 Th2/GATA3（IL-4，IgE 与抗寄生虫）互为跷跷板，Th17/RORγt 以 IL-17 动员中性粒细胞，Tfh/BCL6 辅导生发中心，Treg/Foxp3 维持外周耐受；CTL 经穿孔素-颗粒酶与 FasL-Fas 两条途径定向诱导凋亡；克隆收缩后留存 CCR7⁺ TCM、TEM 与 CD69⁺ TRM 三型记忆细胞',
  draw,
})
