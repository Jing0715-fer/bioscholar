// cb ch12-s4 坏死性凋亡、焦亡与细胞死亡转换（39-d 批D 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、坏死性凋亡：RIPK1-RIPK3-MLKL 轴 ============
  b.panel(30, 132, 660, 430, { title: '一、坏死性凋亡（necroptosis）：caspase-8 被抑制时的备用通路' })
  b.wtext(64, 184, '由死亡受体（TNFR1）在 caspase-8 被抑制时启动的"备用"死亡方式——兼具坏死形态（膜破裂、炎症）与程序性（信号依赖）特征。', { size: 9.5, fill: C.sub, maxW: 600, lh: 13 })
  // 级联
  b.rect(80, 216, 120, 44, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(140, 240, 'TNFR1', { size: 11, weight: 700, fill: C.proD })
  b.arrow(140, 262, 140, 286, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.tag(140, 310, '复合体 Ⅰ（TRADD·TRAF2·RIPK1·cIAP）', { fill: C.rnaL, stroke: C.rna, size: 8.5, weight: 700, tfill: C.rnaD, pad: 4 })
  b.arrow(140, 330, 140, 354, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.tag(140, 378, 'caspase-8 失活（病毒抑制子 / 药物）→ RIPK1 去泛素化', { fill: C.badL, stroke: C.bad, size: 8.5, weight: 700, tfill: C.bad, pad: 4 })
  b.arrow(140, 398, 140, 420, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(80, 424, 120, 44, { fill: C.enzL, stroke: C.enz, sw: 2.2, rx: 8 })
  b.ctext(140, 442, '坏死小体', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(140, 458, 'RIPK1×RIPK3', { size: 8.5, fill: C.enzD })
  b.arrow(204, 446, 280, 446, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.wtext(292, 428, 'RIPK1 磷酸化并募集 RIPK3（相互磷酸化）', { size: 9, fill: C.sub })
  b.wtext(292, 448, 'RIPK3 磷酸化 MLKL（混合谱系激酶结构域样蛋白）', { size: 9, fill: C.sub })
  b.wtext(292, 468, 'p-MLKL 寡聚插入细胞膜 → 成孔、膜破裂', { size: 9, fill: C.sub })
  // 膜破裂小图
  b.bilayer(430, 530, 180)
  b.rect(508, 522, 24, 16, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  for (let i = 0; i < 3; i++) b.ion(470 + i * 40, 496, 'DAMP', { r: 12, fill: C.badL, stroke: C.bad, tfill: C.bad, size: 6.5 })
  b.arrow(504, 514, 504, 496, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(520, 566, 'DAMPs 释放 → 强烈炎症反应', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(64, 544, '生理意义：对抗能抑制 caspase 的病毒（痘病毒、HSV）的防御机制；参与炎症性疾病（克罗恩病、脊髓损伤）。', { size: 9, fill: C.mute, maxW: 340, lh: 12.5 })

  // ============ 二、焦亡：炎性小体 → GSDMD 成孔 ============
  b.panel(710, 132, 660, 430, { title: '二、焦亡（pyroptosis）：炎性小体 → caspase-1 → GSDMD 成孔' })
  b.wtext(740, 184, '炎症性死亡，由炎性小体（inflammasome）引发：', { size: 9.5, fill: C.sub, maxW: 600, lh: 13 })
  b.tag(800, 218, '危险信号 DAMP / PAMP（nigericin·胞内 LPS）', { fill: C.badL, stroke: C.bad, size: 9, weight: 700, tfill: C.bad, pad: 5 })
  b.arrow(800, 238, 800, 260, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.rect(740, 264, 120, 48, { fill: C.warnL, stroke: C.warn, sw: 2.2, rx: 8 })
  b.ctext(800, 282, 'NLRP3 等', { size: 10.5, weight: 700, fill: '#78350f' })
  b.ctext(800, 300, '感受器寡聚', { size: 8.5, fill: '#78350f' })
  b.arrow(864, 288, 920, 288, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.tag(990, 276, '募集 ASC', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 5 })
  b.tag(990, 308, '＋procaspase-1', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 5 })
  b.arrow(1064, 292, 1120, 292, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.rect(1124, 264, 100, 56, { fill: C.enzL, stroke: C.enz, sw: 2.2, rx: 8 })
  b.ctext(1174, 286, 'caspase-1', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(1174, 306, '活化', { size: 9, fill: C.enzD })
  // 两底物
  b.arrow(1174, 322, 1174, 352, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.wtext(740, 376, '活化 caspase-1 切割两底物：人 caspase-4/5（鼠 11）可直接识别胞内 LPS。', { size: 9, fill: C.mute, maxW: 600, lh: 12.5 })
  // GSDMD
  b.tag(820, 406, 'GSDMD → N 端片段寡聚成膜孔', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })
  b.bilayer(940, 430, 200)
  b.rect(1028, 422, 22, 16, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1040, 468, '渗透裂解', { size: 9, weight: 700, fill: C.bad })
  // IL-1β
  b.tag(820, 486, 'pro-IL-1β / pro-IL-18 → 成熟', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 5 })
  b.arrow(985, 494, 1040, 494, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ion(1072, 494, 'IL-1β', { r: 17, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9 })
  b.arrow(1092, 494, 1128, 494, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.ctext(1150, 494, '经 GSDMD 孔分泌', { size: 8.5, fill: C.mute })
  b.wtext(740, 530, '焦亡是感染与炎症（脓毒症、痛风、动脉粥样硬化）的重要病理环节。', { size: 9.5, fill: C.sub, maxW: 600, lh: 13 })

  // ============ 三、四种死亡方式对照 + 铁死亡 ============
  b.panel(30, 576, 1340, 404, { title: '三、细胞死亡方式的转换与整合：一张表看清四种方式' })
  b.table(60, 630, 1280, {
    headers: ['方式', '触发', '执行者', '膜完整性', '炎症'],
    colW: [220, 300, 300, 260, 200],
    rowH: 36,
    fontSize: 10,
    rows: [
      ['凋亡', '生理信号 / 应激', 'caspase-3/-8/-9', '完整（凋亡小体）', '无 / 免疫沉默'],
      ['自噬性细胞死亡', '长期饥饿（过度自噬）', '溶酶体酶', '破坏（晚期）', '可有可无'],
      ['坏死性凋亡', 'caspase-8 抑制＋TNF', 'RIPK1/3-MLKL', '破裂', '强'],
      ['焦亡', '炎性小体激活', 'caspase-1/11＋GSDMD', '成孔破裂', '极强（IL-1β）'],
    ],
  })
  b.tag(250, 846, '铁死亡（ferroptosis）：铁依赖脂质过氧化（GPX4 失活）——线粒体缩小变密，肿瘤治疗新方向', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
  b.wtext(60, 890, '医学意义：促凋亡与抑制异常存活是肿瘤治疗核心（化疗、放疗多经 p53-线粒体途径诱导凋亡）；神经退行病（AD、PD）与缺血再灌注损伤则以过度凋亡 / 坏死为靶点——RIPK1 抑制剂阻断 necroptosis 成为治疗策略。', { size: 10, fill: C.sub, maxW: 1240, lh: 14 })
  b.wtext(60, 940, '受调控坏死（regulated necrosis）兼具坏死形态与程序性信号——"坏死并非总是被动无序"是当代细胞死亡研究的核心更新。', { size: 10, fill: C.mute, maxW: 1240, lh: 14 })
}

export default scene({
  title: '坏死性凋亡与焦亡：受调控的炎症性死亡',
  subtitle: '坏死性凋亡＝RIPK1-RIPK3-MLKL 轴（caspase-8 抑制时）→DAMPs 强炎；焦亡＝NLRP3→caspase-1→GSDMD 成孔＋IL-1β；铁死亡＝GPX4 失活脂质过氧化',
  draw,
})
