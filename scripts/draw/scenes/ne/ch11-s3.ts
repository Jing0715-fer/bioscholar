// ne ch11-s3 自主神经与神经内分泌 / 应激与下丘脑-垂体-肾上腺轴（39-h 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Selye 通用适应综合征 ============
  b.panel(30, 132, 660, 430, { title: '一、Selye 通用适应综合征（1936）：不问应激原' })
  b.wtext(60, 200, 'Selye 发现大鼠受到寒冷、束缚、毒剂等迥异刺激后出现同一套三联征——肾上腺皮质肥大、胸腺与淋巴结萎缩、胃溃疡：存在不依赖应激原种类的共同反应通路。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  // 三期阶梯
  b.rect(60, 252, 190, 130, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.8, rx: 9 })
  b.ctext(155, 280, '警觉期', { size: 14, weight: 700, fill: '#92400e' })
  b.wtext(76, 306, '秒级动员：交感—肾上腺髓质，为身体「加油门」。', { size: 11, fill: C.sub, maxW: 158, lh: 15 })
  b.rect(260, 252, 190, 130, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8, rx: 9 })
  b.ctext(355, 280, '抵抗期', { size: 14, weight: 700, fill: C.accD })
  b.wtext(276, 306, '分钟至小时：HPA 轴与皮质醇的适应性重组。', { size: 11, fill: C.sub, maxW: 158, lh: 15 })
  b.rect(460, 252, 200, 130, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.8, rx: 9 })
  b.ctext(560, 280, '衰竭期', { size: 14, weight: 700, fill: C.bad })
  b.wtext(476, 306, '资源耗竭：储备耗尽、代偿失效、疾病显现。', { size: 11, fill: C.sub, maxW: 168, lh: 15 })
  b.arrow(250, 317, 260, 317, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(450, 317, 460, 317, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.wtext(60, 412, '三期的时程递进：警觉（秒）→ 抵抗（分钟-小时-天）→ 衰竭（周-月）——同一应激原持续存在时，机体的「分期付款」最终透支。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(60, 472, '应激是「非特异性的」：冷、热、毒、情绪冲突走同一通路——这一定义开启了整个应激生理学。', { size: 11, weight: 700, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、HPA 轴级联与负反馈 ============
  b.panel(710, 132, 660, 430, { title: '二、HPA 轴：三级级联，逐级放大，多闸关闭' })
  const hpa: Array<[string, string, string]> = [
    ['下丘脑 CRH（促肾上腺皮质激素释放激素）', C.pro, C.proL],
    ['垂体 ACTH（促肾上腺皮质激素）', C.acc, C.accL],
    ['肾上腺皮质 皮质醇（糖皮质激素）', C.rna, C.rnaL],
  ]
  hpa.forEach(([name, c, cl], i) => {
    const y = 208 + i * 84
    b.rect(760, y, 420, 60, { fill: cl, fillOp: 0.5, stroke: c, sw: 2, rx: 9 })
    b.ctext(970, y + 35, name, { size: 12.5, weight: 700, fill: C.ink })
    if (i < 2) b.arrow(970, y + 60, 970, y + 84, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  })
  b.ctext(1060, 286, '级联放大', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(1060, 370, '级联放大', { size: 10.5, weight: 700, fill: C.sub })
  // 负反馈箭头
  b.path('M1180,421 C1305,475 1305,185 1182,233', { stroke: C.bad, sw: 2.2, dash: '8 5', marker: 'bad' })
  b.wtext(800, 524, '三重关闭闸门：① 长环负反馈（皮质醇抑制 CRH 与 ACTH）；② 海马 GR（刹车踏板，慢性高皮质醇反致海马损伤）；③ 快速非基因组反馈。', { size: 11, fill: C.sub, maxW: 550, lh: 16 })

  // ============ 三、MR 与 GR 分工 ============
  b.panel(30, 578, 660, 396, { title: '三、MR 与 GR：一只油门、一只刹车' })
  b.rect(60, 648, 290, 150, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(76, 674, 'MR（盐皮质激素受体）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(76, 698, '高亲和力：基础节律的维持者——低浓度皮质醇即可占领，掌管昼夜基线与海马日常功能。', { size: 11, fill: C.sub, maxW: 258, lh: 15 })
  b.rect(370, 648, 290, 150, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.8, rx: 9 })
  b.text(386, 674, 'GR（糖皮质激素受体）', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(386, 698, '低亲和力：应激峰值的刹车——只有高浓度皮质醇才结合，启动负反馈关闭 HPA 轴。', { size: 11, fill: C.sub, maxW: 258, lh: 15 })
  b.wtext(60, 830, '两型受体分工使皮质醇兼顾稳态（基础节律）与应激（峰值刹车）：MR 常开、GR 应急——同一激素的两副面孔。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(60, 886, '皮质醇昼夜节律：清晨峰值、深夜谷值——库欣综合征患者失去此节律，午夜皮质醇不降。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、时间的双面性与脑代价 ============
  b.panel(710, 578, 660, 396, { title: '四、应激与免疫、脑：时间的双面性' })
  b.rect(740, 648, 290, 130, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.8, rx: 9 })
  b.text(756, 674, '急性应激：一过性增强', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(756, 698, '固有免疫与 NK 细胞活性短暂上调，「战或逃」的免疫后备动员。', { size: 11, fill: C.sub, maxW: 258, lh: 15 })
  b.rect(1050, 648, 290, 130, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.8, rx: 9 })
  b.text(1066, 674, '慢性应激：全面抑制', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(1066, 698, '持续皮质醇抑制细胞免疫：胸腺萎缩、Th1 向 Th2 偏移、感染易感性增加。', { size: 11, fill: C.sub, maxW: 258, lh: 15 })
  b.rect(740, 806, 600, 96, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(756, 830, '慢性应激的脑代价', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(756, 852, '海马树突萎缩与神经发生受抑 → 与抑郁的 HPA 失调、代谢综合征及内脏脂肪蓄积互相构成恶性循环——「应激致病」的神经生物学链条。', { size: 11, fill: C.sub, maxW: 560, lh: 16 })
}

export default scene({
  title: '应激与下丘脑-垂体-肾上腺轴：级联放大、多闸刹车与时间双面性',
  subtitle: 'CRH→ACTH→皮质醇三级级联；MR 高亲和力掌基线、GR 低亲和力任刹车；急性增强免疫、慢性抑制免疫',
  draw,
})
