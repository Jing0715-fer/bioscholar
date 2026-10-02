// mt ch12-s1 动物的转运病：CF 深潜 · 长QT 三型 · Bartter/Gitelman · 转运病速览表
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、囊性纤维化：一种病写完一部转运学 =================
  b.panel(30, 132, 660, 445, { title: '一、囊性纤维化：一种病写完一部转运学' })
  // —— 左：气道上皮顶端膜示意 ——
  b.text(46, 172, '顶端 Cl^{-} 分泌缺陷＋ENaC 失抑制——黏液脱水、纤毛淤塞、细菌定植', { size: 8.5, fill: C.sub })
  b.text(46, 192, '气道腔', { size: 9, fill: C.mute })
  b.rect(46, 198, 312, 14, { fill: C.warnL, stroke: C.warn, sw: 1.2, rx: 4 })
  b.etext(348, 210, '黏液脱水·纤毛淤塞', { size: 7.5, fill: C.badD })
  b.rect(46, 232, 312, 82, { fill: '#f8fafc', stroke: C.line, sw: 1, rx: 6 })
  b.bilayer(60, 218, 290, { h: 14 })
  // CFTR：ABC 超家族中独一无二的 cAMP 门控 Cl⁻ 通道
  b.rect(84, 212, 58, 44, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(113, 230, 'CFTR', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(113, 246, 'Cl^{-} 通道', { size: 7.5, fill: C.sub })
  b.ion(112, 188, 'Cl^{-}', { r: 9, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.arrow(112, 210, 112, 199, { stroke: C.bad, sw: 1.6, marker: 'bad', dash: '4 3' })
  // ENaC：失抑制后钠水过度吸收
  b.rect(240, 212, 56, 44, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 7 })
  b.ctext(268, 230, 'ENaC', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(268, 246, 'Na^{+} 通道', { size: 7.5, fill: C.sub })
  b.ion(268, 188, 'Na^{+}', { r: 9, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.arrow(268, 200, 268, 210, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.ctext(268, 276, '钠水过度吸收（ENaC 失抑制）', { size: 8, fill: C.badD })
  b.text(54, 300, '气道上皮细胞', { size: 9, fill: C.mute })
  b.bilayer(60, 316, 290, { h: 12 })
  b.text(46, 348, '间质／血流（基底侧）', { size: 9, fill: C.mute })
  // —— 右：流行病学与诊断 ——
  b.text(372, 190, '流行病学与诊断', { size: 11, weight: 700, fill: C.sub })
  b.tag(455, 216, '北欧裔携带率约 1/25', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9.5, weight: 700 })
  b.tag(460, 244, '发病率约 1/2500', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9.5, weight: 700 })
  b.wtext(372, 276, '全球最常见突变 ΔF508（第 508 位苯丙氨酸缺失）约占等位基因 70%——II 类折叠缺陷：折不好、出不了内质网，根本没有抵达质膜的机会', { size: 9, fill: C.sub, maxW: 296, lh: 20 })
  b.rect(372, 356, 296, 70, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.text(386, 378, '汗液 Cl^{-} 试验——最古老的诊断标尺', { size: 10, weight: 700, fill: C.accD })
  b.text(386, 398, '毛果芸香碱离子导入发汗', { size: 9, fill: C.sub })
  b.text(386, 418, 'Cl^{-} > 60 mmol/L 为阳性', { size: 10, weight: 700, fill: C.accD })
  b.wtext(372, 448, '两条路殊途同归：顶端 Cl^{-} 分泌缺陷使黏液脱水；CFTR 失活解除对 ENaC 的抑制，钠水被过度吸收，进一步抽干气道表面液体；胰腺导管阻塞致外分泌功能不全', { size: 9, fill: C.sub, maxW: 296, lh: 20 })
  b.text(372, 552, 'CFTR：ABC 超家族中独一无二的 cAMP 门控 Cl^{-} 通道', { size: 8.5, fill: C.mute })
  // —— 左下：突变分类用药 ——
  b.text(46, 378, '突变分类用药：基因型对症的教科书', { size: 11, weight: 700, fill: C.sub })
  b.tag(120, 404, 'III 类 G551D 门控缺陷', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9, weight: 700 })
  b.wtext(46, 430, '蛋白抵达膜上却打不开——增效剂 ivacaftor 将开态延长，肺功能即可显著回升', { size: 9, fill: C.sub, maxW: 306, lh: 20 })
  b.tag(120, 484, 'II 类 ΔF508 折叠缺陷', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9, weight: 700 })
  b.wtext(46, 510, '纠正剂 elexacaftor／tezacaftor 送蛋白上膜＋增效剂 ivacaftor 撑门＝三联 Trikafta（2019）——多数患者汗液氯均值降到诊断线以下、一秒量提升约 10%–14%', { size: 9, fill: C.sub, maxW: 306, lh: 20 })
  b.wtext(46, 556, '用小分子修好一个突变蛋白的三维结构缺陷——转运体药理从「抑制剂时代」跨入「修复剂时代」的界碑', { size: 8.5, fill: C.mute, maxW: 306, lh: 18 })

  // ================= 二、长 QT 综合征：复极电流的收支失衡 =================
  b.panel(710, 132, 660, 445, { title: '二、长 QT 综合征：复极电流的收支失衡' })
  b.text(726, 182, '心肌复极是多条外向 K^{+} 电流与内向 Na^{+}／Ca^{2+} 电流的收支表——任何一栏失衡都拉长动作电位时程', { size: 9.5, fill: C.sub })
  // —— 心电图示意（正常 vs 长 QT）——
  const trace = (by: number, tOff: number, col: string) => {
    const s = 2.0
    const k = 0.9
    const px = (dx: number, dy: number): [number, number] => [790 + dx * s, by + dy * k]
    const t0 = 86 + tOff
    b.polyline(
      [px(0, 0), px(18, 0), px(26, -9), px(34, 0), px(50, 0), px(55, 5), px(61, -48), px(67, 9), px(74, 0), px(t0, 0), px(t0 + 12, -16), px(t0 + 24, 0), px(t0 + 34, 0)],
      { stroke: col, sw: 2.2 }
    )
  }
  trace(250, 0, C.acc)
  b.text(744, 254, '正常', { size: 10, weight: 700, fill: C.accD })
  trace(335, 55, C.bad)
  b.text(744, 339, '长 QT', { size: 10, weight: 700, fill: C.badD })
  // QT 间期度量
  b.line(902, 272, 1010, 272, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.line(902, 266, 902, 278, { stroke: C.faint, sw: 1.2 })
  b.line(1010, 266, 1010, 278, { stroke: C.faint, sw: 1.2 })
  b.ctext(956, 290, 'QT ≈ 0.40 s', { size: 9, fill: C.sub })
  b.line(902, 362, 1120, 362, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.line(902, 356, 902, 368, { stroke: C.faint, sw: 1.2 })
  b.line(1120, 356, 1120, 368, { stroke: C.faint, sw: 1.2 })
  b.ctext(1011, 380, 'QT 延长（复极外向电流不足）', { size: 9, fill: C.badD, weight: 600 })
  // —— 三型卡片 ——
  const lqt = (x: number, name: string, gene: string, l1: string, l2: string, l3: string, fl: string, st: string, tf: string) => {
    b.rect(x, 390, 200, 85, { fill: fl, stroke: st, sw: 1.6, rx: 8 })
    b.text(x + 14, 412, `${name} · ${gene}`, { size: 10.5, weight: 700, fill: tf })
    b.wtext(x + 14, 434, `${l1}，${l2}，${l3}`, { size: 8.5, fill: C.sub, maxW: 176, lh: 18 })
  }
  lqt(726, 'LQT1', 'KCNQ1', 'I_{Ks} 慢延迟整流钾通道', '诱发：运动与情绪', '一线：β 受体阻滞剂', C.accL, C.acc, C.accD)
  lqt(940, 'LQT2', 'hERG', 'I_{Kr} 快延迟整流钾通道', '诱发：听觉刺激与长间歇', '对策：避 QT 延长药物', C.proL, C.pro, C.proD)
  lqt(1155, 'LQT3', 'SCN5A', '晚钠电流增大', '诱发：休息／睡眠时段', '对症：美西律（抑晚钠）', C.enzL, C.enz, C.enzD)
  // —— 获得性长 QT ——
  b.rect(726, 483, 630, 88, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(740, 505, '获得性长 QT：许多结构无关的药物恰好阻断 hERG', { size: 10, weight: 700, fill: C.badD })
  b.wtext(740, 526, 'hERG 孔腔大而芳香氨基酸丰富，对多种阳离子药物异常「好客」——特非那定与促动力药西沙必利因致尖端扭转型室速先后撤市；hERG 筛查由此成为新药开发的心脏安全法定环节', { size: 9, fill: C.sub, maxW: 600, lh: 19 })

  // ================= 三、Bartter 与 Gitelman：天然利尿剂表型 =================
  b.panel(30, 592, 660, 393, { title: '三、Bartter 与 Gitelman：天然利尿剂表型' })
  // —— 左：肾单位节段 ——
  b.text(46, 638, '远端肾单位两段靶位', { size: 11, weight: 700, fill: C.sub })
  b.rect(46, 648, 284, 92, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.text(60, 670, '襻升支粗段（TAL）——呋塞米靶段', { size: 10, weight: 700, fill: C.accD })
  b.tag(98, 694, 'NKCC2', { fill: '#ffffff', stroke: C.acc, tfill: C.accD, size: 9, weight: 700 })
  b.tag(186, 694, 'ROMK', { fill: '#ffffff', stroke: C.acc, tfill: C.accD, size: 9, weight: 700 })
  b.tag(268, 694, 'ClC-Kb', { fill: '#ffffff', stroke: C.acc, tfill: C.accD, size: 9, weight: 700 })
  b.tag(150, 722, 'barttin（β 亚基）', { fill: '#ffffff', stroke: C.acc, tfill: C.accD, size: 8.5, weight: 600 })
  b.arrow(188, 744, 188, 758, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.rect(46, 760, 284, 56, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.text(60, 782, '远曲小管（DCT）——噻嗪类靶段', { size: 10, weight: 700, fill: C.okD })
  b.tag(150, 804, 'NCC（SLC12A3）', { fill: '#ffffff', stroke: C.ok, tfill: C.okD, size: 8.5, weight: 600 })
  b.arrow(188, 820, 188, 834, { stroke: C.sub, sw: 1.6, marker: 'mute' })
  b.rect(46, 836, 284, 36, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(60, 858, '集合管——AQP2／V2R（肾性尿崩，见右表）', { size: 9, fill: C.sub })
  // —— 右：Bartter 五型 + Gitelman ——
  b.text(350, 638, 'Bartter 五型：襻段重吸收瘫痪', { size: 11, weight: 700, fill: C.sub })
  b.table(350, 650, 320, {
    headers: ['分型', '缺陷位点'],
    colW: [62, 258],
    rowH: 23,
    fontSize: 8.8,
    rows: [
      ['I 型', 'NKCC2（襻升支粗段共转运体）'],
      ['II 型', 'ROMK（钾分泌通道）'],
      ['III 型', 'ClC-Kb（基底侧氯通道）'],
      ['IV 型', 'barttin（耳蜗同依赖→合并耳聋）'],
      ['V 型', 'CaSR 增效（过度激活抑制 ROMK）'],
    ],
  })
  b.wtext(350, 830, '产前型伴羊水过多与发热性多尿——表型酷似长期用呋塞米的人', { size: 9, fill: C.sub, maxW: 320, lh: 19 })
  b.rect(350, 862, 320, 82, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(364, 884, 'Gitelman＝「终身免费服用噻嗪类」', { size: 10, weight: 700, fill: C.dnaD })
  b.text(364, 906, 'NCC（噻嗪类敏感 Na^{+}-Cl^{-} 共转运体）突变', { size: 9, fill: C.sub })
  b.text(364, 928, '低血钾·低血镁·尿钙偏低·代偿性碱中毒', { size: 9, fill: C.sub })
  b.wtext(46, 958, '两类疾病由反向证明呋塞米与噻嗪类利尿剂的靶点真实而专一；治疗以补钾补镁为主，吲哚美辛抑制继发性前列腺素过多', { size: 9.5, fill: C.sub, maxW: 640, lh: 19 })

  // ================= 四、转运病速览表 =================
  b.panel(710, 592, 660, 393, { title: '四、转运病速览：九行对照的另外六行' })
  b.table(730, 645, 620, {
    headers: ['疾病', '缺陷基因', '机制要点', '代表治疗'],
    colW: [95, 118, 240, 167],
    rowH: 34,
    fontSize: 8.6,
    rows: [
      ['胱氨酸尿症', 'SLC3A1/SLC7A9', '二元氨基酸不回收，胱氨酸析六角形结晶', '大量饮水＋碱化尿液'],
      ['肾性尿崩症', 'V2R／AQP2', '集合管对 ADH 无应答，日尿量可达 10 L 以上', '噻嗪类＋低盐'],
      ['Menkes 病', 'ATP7A（X 连锁）', '肠与血脑屏障铜出不去，全身缺铜、钢丝发', '尽早肠外给铜组氨酸'],
      ['Wilson 病', 'ATP7B', '胆道排铜失败，肝豆沉积、角膜 K-F 环', '青霉胺螯合驱铜'],
      ['GLUT1 缺陷', 'SLC2A1', '糖过不了血脑屏障，婴儿期癫痫、脑脊液糖低', '生酮饮食（酮体代燃料）'],
      ['Hartnup 病', 'SLC6A19', '中性氨基酸肠肾双丢，色氨酸流失致糙皮病样皮损', '补烟酰胺（约 1/26000）'],
    ],
  })
  b.text(730, 915, '一对兄弟泵互为镜像：ATP7A 一病缺铜（头发捻转如钢丝），ATP7B 一病铜中毒（青霉胺可控制病程）', { size: 9.5, weight: 600, fill: C.sub })
  b.wtext(730, 942, '九行病名读完，正常生理已被反向照亮一遍——每一行都是前十一章某个正常机制的「故障对照版」；治疗格局正从对症补充，走向基因型特异小分子修复剂与 AAV 介导的基因治疗', { size: 9.5, fill: C.sub, maxW: 620, lh: 20 })
}

export default scene({
  title: '动物的转运病：从囊性纤维化到通道病',
  subtitle:
    '囊性纤维化北欧裔携带率约 1/25、发病率约 1/2500，ΔF508 约占等位基因 70%，汗液 Cl⁻ >60 mmol/L 为诊断线；G551D 门控缺陷用 ivacaftor、ΔF508 折叠缺陷用三联 Trikafta；长 QT 三型 KCNQ1/hERG/SCN5A，西沙必利因阻断 hERG 撤市；Bartter 五型与 Gitelman 即天然利尿剂表型',
  draw,
})
