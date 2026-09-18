// ne ch5-s3 神经递质与受体 / 单胺类递质（39-h 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、儿茶酚胺装配线 ============
  b.panel(30, 132, 700, 430, { title: '一、儿茶酚胺装配线：限速在酪氨酸羟化酶' })
  const chain: Array<[number, string]> = [
    [66, '酪氨酸'], [186, 'L-DOPA'], [306, '多巴胺'], [426, '去甲肾上腺素'], [546, '肾上腺素'],
  ]
  chain.forEach(([x, s]) => {
    b.rect(x, 250, 80, 44, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 8 })
    b.ctext(x + 40, 277, s, { size: 11, weight: 700, fill: C.ink })
  })
  ;[[146, 186], [266, 306], [386, 426], [506, 546]].forEach(([x1, x2]) => {
    b.arrow(x1 + 2, 272, x2 - 2, 272, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  })
  b.tag(166, 226, 'TH（限速）', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 6 })
  b.tag(286, 226, 'AADC', { fill: C.panelB, stroke: C.mute, size: 10.5, weight: 700, tfill: C.sub, pad: 6 })
  b.tag(406, 226, 'DBH', { fill: C.panelB, stroke: C.mute, size: 10.5, weight: 700, tfill: C.sub, pad: 6 })
  b.tag(526, 226, 'PNMT', { fill: C.panelB, stroke: C.mute, size: 10.5, weight: 700, tfill: C.sub, pad: 6 })
  b.path('M346,240 C300,196 220,196 174,244', { stroke: C.bad, sw: 1.8, dash: '5 4', marker: 'bad' })
  b.ctext(270, 206, '产物反馈抑制', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(66, 326, 'TH（酪氨酸羟化酶）为限速酶：需四氢生物蝶呤（BH4）为辅因子，受儿茶酚胺产物反馈抑制；儿茶酚胺 = 多巴胺 · 去甲肾上腺素 · 肾上腺素（共同前体：酪氨酸）。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })
  b.rect(66, 376, 620, 74, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(86, 402, 'L-DOPA 与帕金森病', { size: 13.5, weight: 700, fill: '#065f46' })
  b.wtext(86, 424, 'L-DOPA 直接绕过 TH 瓶颈补充多巴胺；配卡比多巴抑制外周 AADC，减少外周消耗、提高入脑比例。', { size: 11.5, fill: C.sub, maxW: 580, lh: 16 })
  b.wtext(66, 484, '装配线四步：酪氨酸 → L-DOPA → 多巴胺 → 去甲肾上腺素 → 肾上腺素；NE 在囊泡内由 DBH 就地合成。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、多巴胺四条通路 ============
  b.panel(720, 132, 650, 430, { title: '二、多巴胺四条通路与两族受体' })
  b.table(750, 190, 590, {
    headers: ['通路', '起点至终点', '主要职能', '损毁后典型表现'],
    colW: [110, 130, 105, 245],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['黑质-纹状体', '黑质 → 纹状体', '运动', '帕金森病（通路退变）'],
      ['中脑-边缘', 'VTA → 伏隔核', '奖赏', '奖赏与成瘾障碍'],
      ['中脑-皮层', 'VTA → 前额叶', '认知', '精神分裂症认知症状'],
      ['结节-漏斗', '下丘脑 → 垂体', '抑制催乳素', '高催乳素血症'],
    ],
  })
  b.rect(750, 436, 590, 106, { fill: C.proL, fillOp: 0.35, stroke: C.pro, sw: 1.5, rx: 9 })
  b.text(770, 462, '两族受体与药物', { size: 13.5, weight: 700, fill: C.proD })
  b.wtext(770, 484, 'D1 类偶联 Gs、D2 类偶联 Gi；精神分裂症阳性症状与中脑-边缘 D2 过度活动相关——抗精神病药皆为 D2 拮抗剂；氯丙嗪 1950 年代登场，药物先于理论。', { size: 11.5, fill: C.sub, maxW: 550, lh: 16 })

  // ============ 三、NE 与 5-HT ============
  b.panel(30, 576, 1340, 402, { title: '三、去甲肾上腺素与 5-羟色胺：蓝斑与庞大的受体家族' })
  b.ctext(330, 636, 'NE：蓝斑的信使', { size: 13, weight: 700, fill: C.ink })
  b.rect(60, 656, 200, 100, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(80, 682, '蓝斑（脑桥）', { size: 14, weight: 700, fill: '#92400e' })
  b.wtext(80, 706, 'NE 司令部；广幅投射至全脑与脊髓——主司唤醒、注意与应激。', { size: 11.5, fill: C.sub, maxW: 166, lh: 16 })
  b.table(290, 656, 380, {
    headers: ['受体', '主要职能'],
    colW: [80, 300],
    rowH: 34,
    fontSize: 12,
    rows: [
      ['α1', '血管平滑肌收缩（Gq）'],
      ['α2', '突触前自身受体，抑制释放（Gi）'],
      ['β1', '心脏：心率与收缩力（Gs）'],
      ['β2', '支气管舒张（Gs）'],
      ['β3', '代谢与产热'],
    ],
  })
  b.wtext(60, 890, 'α1 / α2 / β1 / β2 / β3 分型各司血管、心脏、支气管与代谢——同一递质，多种受体，多种药理。', { size: 11.5, fill: C.sub, maxW: 610, lh: 16 })

  b.ctext(1030, 636, '5-羟色胺：约 14 种受体', { size: 13, weight: 700, fill: C.ink })
  b.rect(760, 656, 580, 100, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(780, 682, '受体家族', { size: 13.5, weight: 700, fill: C.dnaD })
  b.wtext(780, 706, '约 14 种受体亚型已获鉴定；除 5-HT3 为离子型阳离子通道（快速去极化）外，其余皆为 GPCR。', { size: 11.5, fill: C.sub, maxW: 540, lh: 16 })
  b.rect(760, 776, 580, 110, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(780, 802, 'SSRI：把再摄取的阀门关上', { size: 13.5, weight: 700, fill: C.accD })
  b.wtext(780, 826, 'SSRI 阻断 SERT，突触间隙 5-HT 升高；疗效滞后数周，源于受体适应而非浓度本身。', { size: 11.5, fill: C.sub, maxW: 540, lh: 16 })
}

export default scene({
  title: '单胺类递质：儿茶酚胺装配线、多巴胺通路与 5-HT 家族',
  subtitle: '酪氨酸 →（TH 限速，需 BH4，受产物反馈抑制）→ L-DOPA → 多巴胺 → NE → 肾上腺素；L-DOPA 绕过瓶颈治帕金森、配卡比多巴减少外周消耗；多巴胺四通路：黑质-纹状体（运动，退变即帕金森）、中脑-边缘（奖赏）、中脑-皮层（认知）、结节-漏斗（抑制催乳素）；D1 类 Gs / D2 类 Gi，抗精神病药皆为 D2 拮抗剂；NE 司令部在蓝斑，α1/α2/β1/β2/β3 各司血管、心脏、支气管与代谢；5-HT 约 14 种受体（仅 5-HT3 离子型），SSRI 阻断 SERT、疗效滞后数周源于受体适应',
  draw,
})
