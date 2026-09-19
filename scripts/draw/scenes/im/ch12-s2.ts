// im ch12-s2 II 型与 III 型超敏反应：细胞毒 · 免疫复合物（39-g 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、II 型：细胞毒机制总览 ============
  b.panel(30, 132, 1340, 288, { title: '一、II 型（细胞毒型）：IgG/IgM 靶向细胞表面抗原的三条破坏途径' })

  b.cell(220, 300, 120, 74, { label: '靶细胞', double: true })
  b.tag(220, 216, '表面抗原', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 9 })
  b.line(220, 232, 220, 252, { stroke: C.enz, sw: 1.6 })
  b.rect(300, 244, 120, 40, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(360, 268, 'IgG / IgM', { size: 11.5, weight: 700, fill: C.rnaD })

  b.arrow(348, 292, 420, 262, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(424, 232, 200, 60, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(524, 254, '① 补体溶破', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(524, 274, 'MAC 打孔', { size: 9.5, fill: C.sub })
  b.arrow(348, 306, 420, 336, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.rect(424, 306, 200, 60, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.5, rx: 8 })
  b.ctext(524, 328, '② 调理吞噬', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(524, 348, 'C3b 标记 → 吞噬细胞', { size: 9.5, fill: C.sub })
  b.arrow(348, 330, 420, 400, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.rect(424, 372, 200, 60, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.5, rx: 8 })
  b.ctext(524, 394, '③ ADCC', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(524, 414, 'NK 细胞等经 Fc 受体杀伤', { size: 9.5, fill: C.sub })

  b.rect(680, 232, 660, 90, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(698, 256, '变体：Graves 病——抗体「改写受体功能」', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(698, 278, '甲状腺刺激性抗体模拟 TSH 持续激活 TSH 受体：细胞不被破坏，而被「策反」——非溶细胞性 II 型。', { size: 10.5, fill: C.sub, maxW: 625, lh: 15 })

  b.rect(680, 336, 660, 96, { fill: C.bg, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(698, 360, 'ABO 天然抗体：肠道菌群交叉刺激的产物', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(698, 382, '多为 IgM、无需事先致敏，不能通过胎盘——输血反应的主力；药物半抗原（如青霉素）修饰红细胞膜亦可触发药物性溶血。', { size: 10.5, fill: C.sub, maxW: 625, lh: 15 })

  // ============ 二、Rh 与新生儿溶血症 ============
  b.panel(30, 432, 1340, 266, { title: '二、Rh 血型不合：从母体致敏到新生儿溶血症，以及抗 D 的阻断预防' })

  const rhSteps: Array<[number, string, string]> = [
    [60, 'Rh⁻ 产妇分娩 Rh⁺ 胎儿', '胎儿红细胞入母体'],
    [430, '母体被致敏 → 抗 D（IgG）', '须经致敏产生，非天然抗体'],
    [860, '再次妊娠：IgG 经胎盘', '攻击 Rh⁺ 胎儿红细胞'],
  ]
  rhSteps.forEach(([x, t, s], i) => {
    b.rect(x, 482, 330, 64, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 8 })
    b.text(x + 16, 506, t, { size: 11.5, weight: 700, fill: C.rnaD })
    b.wtext(x + 16, 526, s, { size: 9.5, fill: C.sub, maxW: 300, lh: 12 })
    if (i < 2) b.arrow(x + 336, 514, x + 364, 514, { stroke: C.rna, sw: 2, marker: 'rna' })
  })
  b.arrow(1190, 550, 1190, 578, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(860, 582, 480, 40, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(1100, 606, '新生儿溶血症：胎儿红细胞破坏 → 贫血 · 黄疸', { size: 10.5, weight: 700, fill: C.bad })

  b.rect(60, 582, 770, 92, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(78, 606, '抗 D 免疫球蛋白：被动抗体的抢先清除', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(78, 628, '产后尽快注射抗 D，抢在母体致敏前清除漏入的胎儿红细胞——阻断下一胎的免疫记忆，阻断预防的经典范例。', { size: 10.5, fill: C.sub, maxW: 730, lh: 15 })

  // ============ 三、III 型：免疫复合物 + 对照表 ============
  b.panel(30, 708, 1340, 264, { title: '三、III 型（免疫复合物型）：中等 IC 沉积致病 · II/III 型对照' })

  b.rect(60, 758, 620, 194, { fill: C.accL, fillOp: 0.35, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(78, 782, '从形成到沉积损伤', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(78, 804, '抗原稍过量时形成中等大小可溶性免疫复合物（IC），在血管通透性增高与血流涡流部位（肾小球、关节、脉络膜等）穿出沉积。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(78, 852, '损伤主力：补体过敏毒素（C3a/C5a）＋ 中性粒细胞释放的蛋白酶与活性氧。', { size: 10.5, weight: 600, fill: C.accD, maxW: 580, lh: 15 })
  b.wtext(78, 890, 'Arthus 反应为局部 III 型；血清病潜伏 7–14 天，恰对应初次体液应答动力学。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(78, 928, '实验室指纹：补体消耗——CH50 与 C3、C4 消耗性下降。', { size: 10.5, weight: 700, fill: C.bad, maxW: 580, lh: 15 })

  b.table(710, 758, 630, {
    headers: ['比较项', 'II 型（细胞毒型）', 'III 型（IC 型）'],
    colW: [110, 250, 270],
    rowH: 30,
    fontSize: 10,
    rows: [
      ['参与抗体', '靶向表面抗原的 IgG/IgM', '与可溶性抗原成中等 IC'],
      ['补体角色', '打孔溶破与调理吞噬', '过敏毒素趋化、驱动中性粒细胞'],
      ['损伤定位', '固定靶细胞（血细胞等）', '沉积处血管与基膜（肾小球、关节）'],
      ['典型疾病', '输血反应、新生儿溶血症、Graves 病', '血清病、Arthus 反应、狼疮肾炎'],
      ['实验线索', 'Coombs 试验阳性、靶细胞减少', 'CH50 与 C3、C4 消耗性下降'],
    ],
  })
}

export default scene({
  title: 'II 型与 III 型超敏反应：细胞毒三途径与免疫复合物沉积',
  subtitle: 'II 型由 IgG/IgM 靶向细胞表面抗原，经补体溶破、调理吞噬与 ADCC 破坏靶细胞，Graves 病为抗体改写受体功能的非溶细胞变体；ABO 天然抗体源于肠道菌群交叉刺激、多为 IgM，Rh 抗 D 经胎盘致新生儿溶血症，抗 D 免疫球蛋白抢先清除胎儿红细胞阻断致敏；III 型由中等大小免疫复合物沉积致病，损伤由补体过敏毒素与中性粒细胞酶及活性氧造成，Arthus 为局部型、血清病潜伏 7–14 天，CH50 与 C3、C4 下降为实验室指纹',
  draw,
})
