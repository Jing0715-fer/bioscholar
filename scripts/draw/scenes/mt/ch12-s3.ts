// mt ch12-s3 生物互作：根瘤共生 · 丛枝菌根 · 病原免疫 · 昆虫战场
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、根瘤共生：以碳换氮的膜上谈判 =================
  b.panel(30, 132, 660, 445, { title: '一、根瘤共生：以碳换氮的膜上谈判' })
  b.text(46, 172, '豆科作物根瘤年固氮每公顷可达数十至上百公斤——从分子对话到膜上口岸', { size: 8.5, fill: C.sub })
  // —— 分子对话链（两行蛇形）——
  b.tag(110, 200, '类黄酮（根分泌）', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8.5, weight: 600 })
  b.arrow(166, 200, 182, 200, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(215, 200, '根瘤菌', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8.5, weight: 600 })
  b.arrow(249, 200, 265, 200, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(330, 200, '结瘤因子（脂壳寡糖）', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 600 })
  b.arrow(391, 200, 407, 200, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(492, 200, 'NFR1/NFR5（LysM 受体）', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5, weight: 600 })
  b.polyline([[575, 212], [575, 234], [105, 234], [105, 240]], { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(105, 254, 'Ca^{2+} 振荡·CNGC15', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8.5, weight: 600 })
  b.arrow(170, 254, 186, 254, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(250, 254, 'DMI1·2·3（共共生）', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5, weight: 600 })
  b.arrow(319, 254, 335, 254, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(400, 254, 'NIN 转录级联', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8.5, weight: 600 })
  b.arrow(452, 254, 468, 254, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(520, 254, '感染线→根瘤', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8.5, weight: 600 })
  b.wtext(46, 284, 'DMI1＝核膜阳离子通道（平衡电荷让振荡持续）；DMI2＝类受体激酶；DMI3＝CCaMK 读取振荡频率并磷酸化 CYCLOPS——共共生通路与丛枝菌根共用', { size: 8.5, fill: C.sub, maxW: 620, lh: 18 })
  b.wtext(46, 320, '核周钙振荡＝每分钟一至数个 Ca^{2+} 峰的「摩尔斯电码」', { size: 8.5, fill: C.sub, maxW: 620, lh: 18 })
  // —— 类菌体周膜口岸 ——
  b.rect(46, 350, 314, 220, { fill: '#f8fafc', stroke: C.sub, sw: 1.6, rx: 10 })
  b.text(58, 368, '根瘤植物细胞', { size: 9, fill: C.mute })
  b.rect(120, 390, 190, 145, { fill: '#ffffff', stroke: C.dna, sw: 2.2, rx: 16 })
  b.ctext(215, 408, '类菌体周膜（植物来源）', { size: 8.5, weight: 700, fill: C.dnaD })
  b.bacterium(215, 468, 110, 36, { fill: '#d1fae5', stroke: '#134e4a', label: '类菌体（固氮承包商）' })
  b.rect(116, 440, 48, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 6 })
  b.ctext(140, 459, 'DCT', { size: 8, weight: 700, fill: C.rnaD })
  b.text(60, 432, '苹果酸', { size: 8.5, weight: 600, fill: C.rnaD })
  b.arrow(96, 440, 112, 448, { stroke: C.rna, sw: 1.5, marker: 'rna' })
  b.ctext(335, 428, 'NH_{3}·酰胺', { size: 8, weight: 600, fill: C.okD })
  b.arrow(315, 444, 352, 444, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.ctext(215, 552, 'Fe·S·Mo 进口（固氮酶辅因子）', { size: 8, fill: C.sub })
  b.arrow(190, 546, 190, 530, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.arrow(240, 546, 240, 530, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.circle(95, 500, 15, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(95, 504, 'Lb', { size: 10, weight: 700, fill: C.badD })
  b.ctext(95, 532, '豆血红蛋白', { size: 8, fill: C.badD })
  // —— 右：口岸清单 ——
  b.text(380, 352, '周膜口岸清单', { size: 11, weight: 700, fill: C.sub })
  b.wtext(380, 376, '碳侧：植物输出苹果酸等二羧酸喂养类菌体（固氮的碳与还原力），DCT 二羧酸转运体司职进口', { size: 9, fill: C.sub, maxW: 288, lh: 20 })
  b.wtext(380, 438, '氮侧：固氮产物以 NH_{3}／NH_{4}^{+} 与酰胺、酰脲形式出口给植物；铁、硫、钼经各自转运与还原系统进口——固氮酶的 Fe-Mo 辅因子是耗金属大户', { size: 9, fill: C.sub, maxW: 288, lh: 20 })
  b.wtext(380, 517, '控氧：豆血红蛋白把类菌体周围自由氧缓冲在纳摩尔量级——高到够呼吸产能、低到不摧毁固氮酶，一层血红蛋白当「氧气稳压器」', { size: 9, fill: C.sub, maxW: 288, lh: 19 })
  b.text(380, 566, 'AON：结瘤过多时 CLE 肽上报茎端、关停新厂（货币是肽信号）', { size: 8.5, fill: C.mute })

  // ================= 二、丛枝菌根：以碳换磷的古老契约 =================
  b.panel(710, 132, 660, 445, { title: '二、丛枝菌根：以碳换磷的古老契约' })
  b.text(726, 172, '化石证据把共生定格在约 4 亿年前植物登陆之初——如今覆盖约八成陆生植物', { size: 8.5, fill: C.sub })
  // —— 根皮层细胞与丛枝 ——
  b.rect(726, 190, 300, 230, { fill: '#f8fafc', stroke: C.sub, sw: 1.6, rx: 10 })
  b.text(742, 210, '根皮层细胞', { size: 9, fill: C.mute })
  b.ellipse(860, 315, 90, 92, { fill: 'none', stroke: C.dna, sw: 1.8, dash: '6 4' })
  // 丛枝（树状分枝）
  const br = (x1: number, y1: number, x2: number, y2: number, sw = 2.4) =>
    b.line(x1, y1, x2, y2, { stroke: C.ok, sw })
  br(860, 388, 860, 300)
  br(860, 356, 818, 310); br(860, 344, 900, 300); br(860, 332, 832, 268)
  br(860, 320, 892, 262); br(860, 308, 812, 252); br(818, 310, 800, 284, 1.6)
  br(900, 300, 916, 276, 1.6); br(832, 268, 820, 244, 1.6); br(892, 262, 904, 240, 1.6)
  b.ctext(860, 408, '丛枝（真菌）', { size: 9, weight: 700, fill: C.okD })
  // PHT1（磷输入）
  b.rect(912, 238, 62, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(943, 257, 'PHT1', { size: 9, weight: 700, fill: C.dnaD })
  b.arrow(893, 268, 1004, 268, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.text(1008, 264, 'H_{2}PO_{4}^{-} 输入', { size: 8, weight: 600, fill: C.dnaD })
  // RAM2-STR（脂质输出）
  b.rect(738, 252, 60, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 6 })
  b.ctext(768, 271, 'RAM2', { size: 8.5, weight: 700, fill: C.rnaD })
  b.text(738, 246, '溶血磷脂', { size: 8, weight: 600, fill: C.rnaD })
  b.arrow(800, 288, 818, 302, { stroke: C.rna, sw: 1.5, marker: 'rna' })
  b.rect(792, 306, 58, 30, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 6 })
  b.ctext(821, 325, 'STR', { size: 9, weight: 700, fill: C.enzD })
  b.arrow(854, 321, 884, 321, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.text(888, 340, '脂质输出', { size: 8, weight: 600, fill: C.enzD })
  b.wtext(726, 438, '周丛枝膜上完成交接：磷侧 PHT1 高亲和 H^{+}/H_{2}PO_{4}^{-} 同向转运体（苜蓿 MtPT4，丛枝专一诱导）收入真菌交付的磷', { size: 8.5, fill: C.sub, maxW: 300, lh: 18 })
  b.rect(726, 490, 300, 80, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(740, 512, '碳侧新学说：脂质才是硬通货', { size: 10, weight: 700, fill: C.rnaD })
  b.wtext(740, 532, 'RAM2（甘油-3-磷酸酰基转移酶）合成溶血磷脂、STR（ABCG 半分子）输出——真菌脂肪酸合成有限，「以碳换磷」正从糖修订为脂', { size: 8.5, fill: C.sub, maxW: 272, lh: 18 })
  // —— 右：交易结构 ——
  b.text(1046, 210, '交易结构与延伸', { size: 11, weight: 700, fill: C.sub })
  b.rect(1046, 226, 310, 60, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(1060, 248, '磷侧（真菌→植物）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.text(1060, 268, 'PHT1 高亲和 H^{+}/H_{2}PO_{4}^{-} 同向输入', { size: 8.5, fill: C.sub })
  b.rect(1046, 298, 310, 60, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(1060, 320, '碳侧（植物→真菌）', { size: 9.5, weight: 700, fill: C.rnaD })
  b.text(1060, 340, 'RAM2→STR 脂质输出（新学说修订「糖」）', { size: 8.5, fill: C.sub })
  b.wtext(1046, 386, '经典观点认为植物主要供糖，现在证明脂质才是硬通货——真菌离了植物脂质供应不能完成生活史', { size: 8.5, fill: C.sub, maxW: 300, lh: 19 })
  b.wtext(1046, 440, '延伸：排根形成与根际有机酸分泌（白羽扇豆为经典）把「抢磷」工程延伸到土壤化学', { size: 8.5, fill: C.sub, maxW: 300, lh: 19 })
  b.wtext(1046, 494, '共共生通路 DMI1/2/3 为根瘤与菌根共用——同一套钙振荡解码器，签下两份契约', { size: 8.5, fill: C.sub, maxW: 300, lh: 19 })
  b.tag(1180, 556, '根瘤：碳换氮 · 菌根：脂换磷', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 9, weight: 700 })

  // ================= 三、病原免疫：钙波、抗病小体与感病基因 =================
  b.panel(30, 592, 660, 393, { title: '三、病原免疫：钙波、抗病小体与感病基因' })
  // —— 左上：模式免疫级联 ——
  b.tag(66, 640, 'flg22', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8.5, weight: 700 })
  b.arrow(100, 640, 114, 640, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(158, 640, 'FLS2＋BAK1', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8.5, weight: 600 })
  b.arrow(207, 640, 221, 640, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(283, 640, 'CNGC2/4 钙内流', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8.5, weight: 600 })
  b.wtext(46, 670, '模式免疫的第一分钟仍是钙：flg22 被 FLS2 识别并与共受体 BAK1 成簇，数分钟内经 CNGC 通道触发 Ca^{2+} 内流，随后才是活性氧爆发与 MAPK 级联——钙通道站在免疫瀑布最上游', { size: 8.5, fill: C.sub, maxW: 306, lh: 18 })
  b.wtext(46, 728, '气孔免疫：flg22 信号经 OST1 磷酸化 SLAC1 使气孔关闭，切断病原借叶面水膜入侵的水路——与抗旱共用同一套关门机制', { size: 8.5, fill: C.sub, maxW: 306, lh: 18 })
  // —— 左下：MLO ——
  b.rect(46, 786, 306, 100, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(60, 808, '大麦 MLO：感病基因的镜像教训', { size: 10, weight: 700, fill: C.warnD })
  b.wtext(60, 828, '七次跨膜蛋白是白粉病菌入侵所必需——失功能突变 mlo 反而带来广谱持久的白粉病抗性，在欧洲大麦育种服役数十年；基因编辑正把「拆锁式抗性」复刻到番茄等作物', { size: 8.5, fill: C.sub, maxW: 278, lh: 18 })
  b.wtext(46, 910, 'mlo 抗性并非免费午餐：伴随轻度坏死斑与产量代价——显性抗性「把门焊死」（抗病小体）对隐性抗性「把锁拆掉」（感病基因），殊途同归', { size: 8.5, fill: C.sub, maxW: 306, lh: 18 })
  // —— 右：ZAR1 抗病小体 ——
  b.text(390, 626, 'ZAR1 抗病小体：五聚体钙通道（2019）', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(390, 648, '胞内 NLR 受体 ZAR1 识别效应子后，由 ADP 置换触发寡聚，组装成五聚体轮状抗病小体', { size: 8.5, fill: C.sub, maxW: 276, lh: 18 })
  const cx = 525
  const cy = 752
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / 5
    b.circle(cx + 46 * Math.cos(a), cy + 46 * Math.sin(a), 22, { fill: C.proL, stroke: C.pro, sw: 2 })
  }
  b.ctext(cx, cy - 4, 'ZAR1', { size: 9.5, weight: 700, fill: C.proD })
  b.ctext(cx, cy + 14, '五聚体', { size: 8, fill: C.proD })
  b.bilayer(440, 812, 170, { h: 12 })
  b.polygon([[505, 793], [545, 793], [537, 822], [513, 822]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.arrow(525, 826, 525, 840, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ion(525, 852, 'Ca^{2+}', { r: 10, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8 })
  b.wtext(390, 884, '漏斗状 N 端螺旋束插入质膜形成 Ca^{2+} 渗透孔——首次证明「免疫受体自己就是离子通道」；Ca^{2+} 内流直接触发超敏反应，以局部程序性细胞死亡把病原封死在坏死斑里', { size: 8.5, fill: C.sub, maxW: 276, lh: 18 })

  // ================= 四、昆虫战场：成孔与抗药 =================
  b.panel(710, 592, 660, 393, { title: '四、昆虫战场：成孔毒素与通道抗药' })
  // —— 左：Bt Cry 毒素（三行蛇形链，限于左半区）——
  b.text(726, 630, 'Bt 毒素：把成孔机制用作杀虫武器', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(770, 656, 'Cry 晶体', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 600 })
  b.arrow(807, 656, 821, 656, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(885, 656, '中肠溶解激活（pH 9–10）', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 600 })
  b.polyline([[960, 668], [960, 680], [790, 680], [790, 686]], { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(790, 700, '结合钙黏蛋白受体', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 600 })
  b.arrow(844, 700, 858, 700, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(920, 700, '寡聚成前孔', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 600 })
  b.polyline([[964, 712], [964, 724], [830, 724], [830, 730]], { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(830, 744, '插膜成阳离子孔', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8.5, weight: 600 })
  b.arrow(884, 744, 898, 744, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.tag(955, 744, '渗透性细胞溶解', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8.5, weight: 600 })
  b.wtext(726, 776, '苏云芽孢杆菌孢子形成期 Cry 晶体可占细胞干重相当可观的比例——溶解激活后的毒素单体结合受体、寡聚插入膜内成孔，渗透性细胞溶解致虫死亡', { size: 8.5, fill: C.sub, maxW: 306, lh: 18 })
  // 成孔 mini
  b.ctext(830, 824, 'Cry 毒素单体', { size: 8, fill: C.badD })
  ;[770, 800, 830, 860].forEach(x => b.circle(x, 840, 8, { fill: C.badL, stroke: C.bad, sw: 1.6 }))
  b.bilayer(740, 858, 180, { h: 12 })
  b.polygon([[805, 858], [845, 858], [837, 870], [817, 870]], { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.arrow(822, 854, 822, 842, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.arrow(836, 854, 836, 842, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.ctext(830, 890, '昆虫中肠上皮', { size: 8, fill: C.mute })
  // —— 右：para 钠通道与靶标族 ——
  b.text(1050, 632, 'para 钠通道：击倒抗性（KDR）', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(1050, 654, '拟除虫菊酯与 DDT 的靶标是昆虫 para 钠通道——S6 跨膜段 L1014F 等突变降低药物结合', { size: 8.5, fill: C.sub, maxW: 300, lh: 18 })
  b.text(1050, 702, '离子通道＝杀虫剂最大的靶标家族', { size: 9.5, weight: 700, fill: C.sub })
  b.table(1050, 712, 305, {
    headers: ['杀虫剂', '靶标通道'],
    colW: [140, 165],
    rowH: 26,
    fontSize: 8.2,
    rows: [
      ['新烟碱·多杀菌素', '烟碱型 nAChR'],
      ['氟虫腈', 'GABA 门控 Cl^{-} 通道'],
      ['阿维菌素', '谷氨酸门控 Cl^{-} 通道'],
      ['拟除虫菊酯·DDT', 'para 钠通道（KDR）'],
    ],
  })
  b.wtext(1050, 884, 'Bt 作物＋避难所＝抗性管理标准配药', { size: 8.5, fill: C.sub, maxW: 300, lh: 18 })
  b.wtext(726, 930, '抗药性管理的本质是管理这些通道位点的轮换节奏——轮换不同靶标的药物、种植非转基因「避难所」保留敏感等位基因，都是给通道位点的演化速度设限', { size: 8.5, fill: C.sub, maxW: 620, lh: 18 })
}

export default scene({
  title: '生物互作中的转运蛋白：共生与免疫',
  subtitle:
    '结瘤因子经 LysM 受体识别，CNGC15 参与核周钙振荡，DMI1/2/3 共共生通路解码；类菌体周膜 DCT 供苹果酸、NH₃ 出口、Fe/S/Mo 进口，豆血红蛋白把自由氧缓冲在纳摩尔级；菌根 PHT1 输入磷、RAM2-STR 输出脂质（新学说）；ZAR1 五聚体抗病小体（2019）成钙孔触发超敏反应；Bt Cry 成孔与 para 通道 KDR 突变互为攻防',
  draw,
})
