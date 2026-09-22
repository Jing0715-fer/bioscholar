// xc ch5-s1 低温晶体学实践（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、100 K 冷氮流横截面 ============
  b.panel(30, 132, 660, 300, { title: '一、100 K 冷氮流横截面：三件套的标准姿态' })
  // 冷流锥（先铺底，后画元素）
  b.polygon([[372, 168], [394, 168], [418, 264], [382, 264]], { fill: C.accL, fillOp: 0.5 })
  // 干燥空气幕（外侧虚线包络）
  b.line(352, 158, 324, 274, { stroke: C.mute, sw: 1.5, dash: '6 5' })
  b.line(414, 158, 442, 274, { stroke: C.mute, sw: 1.5, dash: '6 5' })
  // 液氮杜瓦与输气管
  b.rect(56, 172, 86, 80, { fill: C.accL, stroke: C.acc, sw: 2, rx: 8 })
  b.rect(64, 200, 70, 44, { fill: C.acc, fillOp: 0.22, rx: 4 })
  b.ctext(99, 190, '液氮杜瓦 77 K', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(99, 228, '液氮', { size: 10, fill: C.accD })
  b.path('M142,196 C210,158 300,152 364,162', { fill: 'none', stroke: C.sub, sw: 5 })
  b.text(228, 146, '输气管', { size: 9, fill: C.mute })
  b.rect(364, 152, 32, 22, { fill: C.sub, rx: 4 })
  b.ctext(380, 146, '冷流喷嘴', { size: 9.5, fill: C.sub })
  // 冷氮流三箭矢
  for (const x of [375, 383, 391]) b.arrow(x, 176, x, 248, { stroke: C.acc, sw: 2 })
  b.tag(292, 202, '100 K 冷氮流', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.text(284, 288, '干燥空气幕（防霜）', { size: 9.5, fill: C.mute })
  // 测角仪、环与晶体
  b.rect(560, 330, 92, 26, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 5 })
  b.ctext(606, 348, '测角仪磁座', { size: 10, fill: C.sub })
  b.line(560, 343, 400, 343, { stroke: C.sub, sw: 3 })
  b.line(400, 343, 400, 284, { stroke: C.sub, sw: 3 })
  b.circle(400, 262, 22, { fill: 'none', stroke: C.pro, sw: 2 })
  b.rect(392, 254, 16, 16, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 3 })
  b.line(410, 262, 458, 248, { stroke: C.pro, sw: 1.2 })
  b.text(462, 250, '蛋白晶体+薄防冻液层', { size: 10, fill: C.proD })
  // 光路
  b.arrow(150, 262, 388, 262, { stroke: C.warn, sw: 2.6, marker: 'warn' })
  b.ctext(214, 250, 'X 射线', { size: 11, weight: 700, fill: C.warnD })
  b.circle(438, 262, 8, { fill: C.ink })
  b.ctext(438, 292, '光束挡板', { size: 9, fill: C.sub })
  b.arrow(410, 256, 562, 196, { stroke: C.enz, sw: 1.6, dash: '5 4', marker: 'enz' })
  b.arrow(410, 268, 570, 238, { stroke: C.enz, sw: 1.6, dash: '5 4', marker: 'enz' })
  b.text(588, 190, '衍射束', { size: 9.5, weight: 700, fill: C.enzD })
  // 温度注记
  b.text(470, 180, '100 K：经验最优', { size: 10.5, weight: 700, fill: C.ink })
  b.text(470, 198, '液氦 40 K：收益边际递减', { size: 9.5, fill: C.mute })
  b.text(470, 214, '约 130 K 以上：再结晶区', { size: 9.5, fill: C.bad })
  b.text(470, 230, '流速与加热补偿稳定在几 K 之内', { size: 9.5, fill: C.mute })
  // 三重红利
  b.tag(150, 364, '辐射损伤放缓几十倍', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.tag(340, 364, '晶体寿命大幅延长', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.tag(524, 364, '液氮杜瓦长途储运', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(46, 390, 'Low 1959 首试；Hope 与 Teng、Moffat 1990 定量降温速率；1990 年代中期三件套成标准——长晶体的实验室与收数据的光源从此解耦。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.text(46, 412, '100 K 收缩账：晶格常数约缩 1%、晶胞体积缩 2–4%，溶剂通道变窄——低温晶胞与室温晶胞不可直接互查。', { size: 9.5, fill: C.mute })

  // ============ 二、标准流程四步与冷冻保护剂 ============
  b.panel(710, 132, 660, 300, { title: '二、标准流程四步与冷冻保护剂矩阵' })
  const step = (y: number, n: string, t: string, s2: string, fill: string, stroke: string, tfill: string) => {
    b.rect(726, y, 222, 46, { fill, stroke, sw: 1.6, rx: 8 })
    b.text(738, y + 19, n, { size: 11.5, weight: 700, fill: tfill })
    b.text(738, y + 36, t, { size: 9.5, fill: C.sub })
    void s2
  }
  step(170, '① 配制防冻液', '母液加 15–25% 甘油等保护剂', '', C.accL, C.acc, C.accD)
  b.arrow(837, 216, 837, 228, { stroke: C.sub, sw: 1.8 })
  step(230, '② loop 捞取', '尼龙环带起薄液层，越薄越易玻璃化', '', C.dnaL, C.dna, C.dnaD)
  b.arrow(837, 276, 837, 288, { stroke: C.sub, sw: 1.8 })
  step(290, '③ 液氮速冻', '快到来不及析出六方冰（玻璃化）', '', C.proL, C.pro, C.proD)
  b.arrow(837, 336, 837, 348, { stroke: C.sub, sw: 1.8 })
  step(350, '④ 100 K 冷流维持', '边收集边防结霜、防晶格漂移', '', C.okL, C.ok, C.okD)
  b.wtext(726, 410, '环径比晶体略大一号（20–400 μm）、丝径 10–20 μm；油封一路：Paratone-N 惰性油裹油速冻，适合怕冲洗的低盐晶体。', { size: 9.5, fill: C.mute, maxW: 222, lh: 13 })
  b.table(970, 174, 380, {
    headers: ['保护剂', '常用浓度', '特点与适用'],
    colW: [92, 74, 214],
    rowH: 25,
    fontSize: 10.5,
    rows: [
      ['甘油', '15–25%', '默认首选，兼容高盐与 PEG 母液'],
      ['乙二醇', '10–20%', '渗透快，部分体系优于甘油'],
      ['MPD', '10–30%', '兼作沉淀剂，渗透压效应强'],
      ['低分子量 PEG', '10–30%', '两性分子，常同时改善镶嵌度'],
      ['高浓度盐', '视体系', '盐析体系母液近旁即防冻液'],
    ],
  })
  b.wtext(970, 358, '梯度实操：每档 +5 个百分点（甘油 5% 至 25%）逐档「浸、捞、冻、照」，每档转移 10–30 秒等渗透平衡，速冻后试收两三帧，记录冰环、mosaicity 与衍射极限；多数晶体在 15–20% 找到窗口。', { size: 10, fill: C.sub, maxW: 384, lh: 14 })
  b.text(970, 424, '跳档直上高浓度是常见败因：渗透冲击先于玻璃化把晶格打伤。', { size: 9.5, fill: C.bad })

  // ============ 三、玻璃冰、六方冰与霜 ============
  b.panel(30, 452, 660, 490, { title: '三、玻璃冰、六方冰与霜：同一帧的三种诊断' })
  const spotsA: [number, number, number][] = [
    [28, 34, 4], [62, 22, 3], [150, 30, 4.5], [178, 62, 3], [22, 80, 3.5], [46, 120, 4],
    [84, 148, 3], [124, 20, 3], [168, 108, 4], [34, 150, 3], [112, 62, 4.5], [146, 146, 3.5],
    [70, 42, 3], [100, 132, 4], [86, 92, 3.5], [160, 84, 3],
  ]
  const frame = (x: number, kind: 'glass' | 'ice' | 'frost') => {
    b.rect(x, 500, 196, 180, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 4 })
    b.circle(x + 98, 590, 9, { fill: C.ink })
    spotsA.forEach(([dx, dy, r]) => b.circle(x + dx, 500 + dy, r, { fill: C.mute, fillOp: 0.62 }))
    if (kind === 'ice') {
      b.circle(x + 98, 590, 40, { fill: 'none', stroke: C.bad, sw: 2.6 })
      b.circle(x + 98, 590, 76, { fill: 'none', stroke: C.bad, sw: 2.4 })
      b.ctext(x + 98, 544, '3.67 Å', { size: 9, weight: 700, fill: C.bad })
      b.ctext(x + 98, 508, '1.92 Å', { size: 9, weight: 700, fill: C.bad })
    }
    if (kind === 'frost') {
      const blobs: [number, number, number][] = [
        [30, 52, 7], [160, 38, 8], [50, 142, 6], [140, 122, 7.5], [180, 92, 6],
        [16, 112, 5.5], [70, 66, 5], [120, 152, 6.5], [95, 30, 5.5], [44, 88, 5], [152, 60, 5.5],
      ]
      blobs.forEach(([dx, dy, r]) => b.circle(x + dx, 500 + dy, r, { fill: C.bad, fillOp: 0.8 }))
    }
  }
  frame(56, 'glass')
  frame(262, 'ice')
  frame(468, 'frost')
  b.ctext(154, 698, 'A 玻璃化：过关', { size: 12, weight: 700, fill: C.okD })
  b.ctext(154, 716, '无定形冰只贡献平缓背景', { size: 10, fill: C.sub })
  b.ctext(360, 698, 'B 六方冰：结冰', { size: 12, weight: 700, fill: C.bad })
  b.ctext(360, 716, '3.67 与 1.92 Å 尖锐粉末环', { size: 10, fill: C.sub })
  b.ctext(566, 698, 'C 霜：结霜', { size: 12, weight: 700, fill: C.warnD })
  b.ctext(566, 716, '随机强斑（冷流罩湿度失控）', { size: 10, fill: C.sub })
  b.tag(172, 746, '环在 3.67 Å = 结冰', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.bad, pad: 8 })
  b.tag(390, 746, '环外随机强斑 = 结霜', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: '#92400e', pad: 8 })
  b.tag(580, 746, '背景干净 = 过关', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(56, 774, '两帧对比法：连收两帧低剂量快照，若第二帧冰环更强，说明结冰正在生长（玻璃化不彻底），须上调保护剂档位；轻度结冰只牺牲两环附近反射，重度结冰把整幅图埋进高背景。', { size: 10, fill: C.sub, maxW: 306, lh: 14 })
  b.wtext(380, 774, '盐环鉴别：母液析出的盐晶也成尖锐环，但位置不与 3.67/1.92 Å 重合——盐环改善冲洗与母液配比，冰环调保护剂；对策按轻重递进：提高浓度、改降温方式（退火）、小晶体修除多余母液。', { size: 10, fill: C.sub, maxW: 306, lh: 14 })
  b.wtext(56, 836, '结冰的物理：六方冰是晶态，自己的晶格也会衍射——取向随机的无数小冰晶叠出尖锐粉末环；玻璃化的无定形冰只贡献平缓背景。冷冻成败，衍射图自己会说话。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })
  b.text(56, 884, '防霜：干燥空气幕与冷流罩的干燥吹扫；霜的病因是冷流罩内湿度失控、水汽在晶体与环上凝华。', { size: 9.5, fill: C.sub })
  b.text(56, 904, '捞取讲究「快、稳、薄」：室内湿度大时，蒸发会先于冷冻把母液浓缩、把晶体「腌伤」。', { size: 9.5, fill: C.sub })

  // ============ 四、退火与低温的代价 ============
  b.panel(710, 452, 660, 490, { title: '四、退火：给晶体一次重来的机会，与低温的代价' })
  b.rect(726, 486, 272, 84, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(738, 506, '微退火（Yeh 与 Hol 1998）', { size: 11.5, weight: 700, fill: C.dnaD })
  b.wtext(738, 524, '暂时遮挡冷流约 2–3 秒，晶体短暂升温后复冷；操作更轻，常用于压低 mosaicity。', { size: 9.5, fill: C.sub, maxW: 250, lh: 13.5 })
  b.rect(726, 580, 272, 96, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8 })
  b.text(738, 600, '大退火（Harp 等 1999）', { size: 11.5, weight: 700, fill: C.proD })
  b.wtext(738, 618, '冻僵晶体短暂放回母液或防冻液，重新平衡后再次速冻；适用于保护剂浓度不当导致的镶嵌度恶化与轻度结冰。', { size: 9.5, fill: C.sub, maxW: 250, lh: 13.5 })
  b.wtext(726, 692, '稳妥次序「先微后大」：退火前后各拍快照对比 mosaicity 与衍射极限，两轮无效即止；机理是晶格应力松弛与残冰重排；大退火要过渗透冲击关（晶体可能在回温中溶解或开裂）；脆弱晶体回第 3 章重新优化更划算。', { size: 9.5, fill: C.sub, maxW: 272, lh: 13.5 })
  // 温度系综对比小图
  b.text(726, 790, '温度系综被快门冻结：同一侧链的两幅图', { size: 11, weight: 700, fill: C.ink })
  b.rect(726, 802, 130, 86, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 5 })
  b.ellipse(791, 848, 46, 22, { fill: C.proL, stroke: C.pro, sw: 1.5, dash: '5 4' })
  b.ctext(791, 908, '100 K：弥散成一团', { size: 9.5, weight: 600, fill: C.proD })
  b.rect(868, 802, 130, 86, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 5 })
  b.circle(902, 838, 10, { fill: C.proL, stroke: C.pro, sw: 1.7 })
  b.circle(952, 858, 10, { fill: C.proL, stroke: C.pro, sw: 1.7 })
  b.ctext(933, 908, '室温：两位点现身', { size: 9.5, weight: 600, fill: C.warnD })
  b.text(726, 928, '构象冻结、镶嵌度上升、化学状态被固定——低温不是免费午餐。', { size: 9.5, fill: C.mute })
  // 右列：低温的代价
  b.text(1020, 500, '① 构象冻结', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(1020, 518, '100 K 能垒挡住构象态间跃迁，拍到的是被随机冻结在各自势阱里的一群构象，温度因子读出的「柔性」也被压扁。', { size: 10, fill: C.sub, maxW: 330, lh: 14 })
  b.text(1020, 578, '② mosaicity 上升', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(1020, 596, '速冻的热应力常把 mosaicity 从 0.1° 推到 0.3–0.8°，斑点变大变糊、重叠风险上升（第 2 节的 Δφ 由此切窄）。', { size: 10, fill: C.sub, maxW: 330, lh: 14 })
  b.text(1020, 642, '③ 化学状态被固定', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(1020, 660, '催化中间态、配体结合态未必是室温下的主流态。', { size: 10, fill: C.sub, maxW: 330, lh: 14 })
  b.rect(1020, 686, 334, 96, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(1032, 706, '室温晶体学复兴', { size: 11.5, weight: 700, fill: '#92400e' })
  b.wtext(1032, 724, '低剂量串联收集与新型固定靶载体让室温数据重新可行，与 100 K 互补回答「生理温度下的构象系综」（第 12 章）；实务组合拳：先低温保平安，必要时以室温数据核对关键结论。', { size: 9.5, fill: C.sub, maxW: 310, lh: 13.5 })
  b.wtext(1020, 806, '低温红利与代价同源：100 K 把自由基限制在局部、损伤放缓几十倍（本章第 4 节）——但从不归零，自由基的原料是水。', { size: 10, fill: C.mute, maxW: 330, lh: 14 })
  b.wtext(1020, 852, '把同一晶体不同温度的数据并排看，是「温度系综被快门冻结」最直观的实验证据；复核与检索须注明温度。', { size: 10, fill: C.mute, maxW: 330, lh: 14 })
}

export default scene({
  title: '低温晶体学实践：100 K 冷流、玻璃化与退火',
  subtitle: '三件套（保护剂、速冻、100 K 冷流）：损伤放缓几十倍；甘油 15–25%；六方冰环 3.67/1.92 Å；mosaicity 0.1° 冻至 0.3–0.8°；微退火挡流 2–3 秒',
  draw,
})
