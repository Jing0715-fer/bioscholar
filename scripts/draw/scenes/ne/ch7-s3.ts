// ne ch7-s3 感觉系统总论与躯体感觉 / 痛觉及其调制（39-h 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、伤害性感受器与快慢痛 ============
  b.panel(30, 132, 660, 430, { title: '一、伤害性感受器的分子换能与快慢痛' })
  // 分子换能
  b.tag(180, 196, '游离末梢 · 高阈值', { fill: C.warnL, stroke: C.warn, size: 12, weight: 700, tfill: '#92400e', pad: 9 })
  b.tag(420, 196, 'TRPV1：辣椒素 / >43 ℃ 热', { fill: C.badL, stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 9 })
  b.tag(590, 196, 'ASIC：酸化', { fill: C.enzL, stroke: C.enz, size: 12, weight: 700, tfill: C.enzD, pad: 9 })
  b.wtext(60, 248, '炎症介质（缓激肽、前列腺素等）使末梢敏化——阈值降低、放电增强，炎症部位痛敏；伤害性感受器几乎不适应甚至敏化。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.table(60, 310, 600, {
    headers: ['比较项', '快痛（第一痛）', '慢痛（第二痛）'],
    colW: [110, 240, 250],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['传入纤维', 'Aδ（薄髓，12–30 m/s）', 'C（无髓，0.5–2 m/s）'],
      ['性质', '尖锐、刺痛，定位明确', '灼样、胀样钝痛，定位弥散'],
      ['时程', '即刻发生、短暂', '滞后出现、持续'],
      ['伴随反应', '常引发屈肌回缩', '情绪烦躁、出汗、内脏反应'],
    ],
  })

  // ============ 二、闸门学说 ============
  b.panel(710, 132, 660, 430, { title: '二、闸门学说（Melzack 与 Wall，1965）' })
  // 粗纤维（Aβ）
  b.line(740, 250, 1010, 250, { stroke: C.dna, sw: 3 })
  b.ctext(760, 232, '粗纤维 Aβ（触觉）', { size: 11.5, weight: 700, fill: C.dnaD })
  // 细纤维（Aδ/C）
  b.line(740, 380, 1010, 380, { stroke: C.bad, sw: 3 })
  b.ctext(760, 402, '细纤维 Aδ / C（痛觉）', { size: 11.5, weight: 700, fill: C.bad })
  // SG 抑制性中间神经元
  b.circle(1060, 315, 26, { fill: C.rnaL, fillOp: 0.7, stroke: C.rna, sw: 2 })
  b.ctext(1060, 319, 'SG', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(988, 316, '胶状质抑制性', { size: 10, fill: C.mute })
  b.ctext(988, 331, '中间神经元', { size: 10, fill: C.mute })
  // T 细胞（后角投射神经元）
  b.circle(1190, 315, 30, { fill: C.accL, fillOp: 0.7, stroke: C.acc, sw: 2.2 })
  b.ctext(1190, 319, 'T', { size: 14, weight: 700, fill: C.accD })
  b.ctext(1190, 358, '投射神经元', { size: 10, fill: C.mute })
  // 粗纤维 → SG（+）
  b.arrow(1000, 250, 1042, 292, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(990, 268, '＋', { size: 12, weight: 700, fill: C.dnaD })
  // 粗纤维 → T（+，直接）
  b.arrow(1010, 250, 1168, 292, { stroke: C.dna, sw: 1.8, dash: '6 4', marker: 'dna' })
  // SG → T（− 抑制）
  b.arrow(1086, 315, 1160, 315, { stroke: C.rna, sw: 2.4, dash: '7 4', marker: 'rna' })
  b.ctext(1123, 302, '−', { size: 13, weight: 700, fill: C.rnaD })
  // 细纤维 → SG（−）
  b.arrow(1000, 380, 1042, 338, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(990, 372, '−', { size: 12, weight: 700, fill: C.bad })
  // 细纤维 → T（+）
  b.arrow(1010, 380, 1172, 344, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(1140, 388, '＋', { size: 12, weight: 700, fill: C.bad })
  // T 上行
  b.arrow(1190, 285, 1190, 216, { stroke: C.acc, sw: 2.6, marker: 'acc' })
  b.ctext(1190, 200, '至丘脑 → 痛知觉', { size: 11.5, weight: 700, fill: C.accD })
  // 下行控制
  b.arrow(1300, 420, 1085, 336, { stroke: C.pro, sw: 2.2, dash: '6 4', marker: 'pro' })
  b.ctext(1305, 442, '下行控制', { size: 11, weight: 700, fill: C.proD })
  b.wtext(740, 470, '粗纤维兴奋 SG → 抑制 T 细胞（关门）；细纤维抑制 SG 并直接兴奋 T（开门）——轻抚伤处可镇痛（TENS 经皮电刺激据此设计），下行控制可拨动闸门。符号：＋ / − 为箭头对所指向神经元的直接效应。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、下行镇痛系统与阿片机制 ============
  b.panel(30, 578, 1340, 396, { title: '三、下行镇痛系统：从 PAG 到脊髓背角的刹车' })
  // 通路链
  b.rect(90, 664, 210, 76, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 2, rx: 9 })
  b.ctext(195, 690, 'PAG 导水管周围灰质', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(195, 710, '（中脑 · 镇痛核心）', { size: 10.5, fill: C.mute })
  b.rect(400, 664, 250, 76, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 2, rx: 9 })
  b.ctext(525, 690, '延髓大缝核（5-HT）', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(525, 710, '蓝斑（去甲肾上腺素）', { size: 12.5, weight: 700, fill: C.accD })
  b.rect(750, 664, 210, 76, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 2, rx: 9 })
  b.ctext(855, 690, '脊髓背角', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(855, 710, '（突触前 + 突触后抑制）', { size: 10.5, fill: C.mute })
  b.arrow(300, 702, 400, 702, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  b.arrow(650, 702, 750, 702, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  b.ctext(350, 684, '下行', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(700, 684, '下行', { size: 10.5, weight: 700, fill: C.sub })
  // 递质标注
  b.ctext(700, 760, '5-羟色胺 · 去甲肾上腺素 · 脑啡肽 → 抑制痛觉传递', { size: 11.5, weight: 700, fill: C.rnaD })
  // 历史卡
  b.rect(1010, 648, 340, 120, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.wtext(1030, 676, '20 世纪 60 年代邹冈与张昌绍发现：向家兔 PAG 内微量注射吗啡，即产生强烈镇痛——揭开内源性镇痛研究的序幕。', { size: 11, fill: C.sub, maxW: 300, lh: 17 })
  // 阿片肽卡
  b.rect(90, 800, 400, 140, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(110, 826, '内源性阿片肽', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(110, 850, '脑啡肽、β-内啡肽、强啡肽作用于 μ、δ、κ 受体——既沿下行通路在背角抑制传递，也在 PAG 水平级联放大。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
  b.rect(530, 800, 400, 140, { fill: C.enzL, fillOp: 0.45, stroke: C.enz, sw: 1.6, rx: 9 })
  b.text(550, 826, '纳洛酮：竞争性拮抗剂', { size: 13, weight: 700, fill: C.enzD })
  b.wtext(550, 850, '可阻断吗啡、针刺与安慰剂镇痛——安慰剂效应竟被阿片拮抗剂取消，证明内源性阿片系统是其下游通路。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
  b.rect(970, 800, 380, 140, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(990, 826, '慢性痛：独立成病', { size: 13, weight: 700, fill: C.bad })
  b.wtext(990, 850, 'C 纤维反复激活 → 背角「上发条」（wind-up，NMDA 解除阻塞）→ 中枢敏化叠加外周敏化，慢性痛不再只是组织损伤的影子。', { size: 11, fill: C.sub, maxW: 340, lh: 16 })
}

export default scene({
  title: '痛觉及其调制：分子换能、闸门学说与下行镇痛系统',
  subtitle: 'TRPV1/ASIC 换能与炎性敏化；粗纤维关闸、细纤维开闸；PAG-大缝核下行以 5-HT/NE/脑啡肽刹车',
  draw,
})
