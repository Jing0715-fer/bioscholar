// ph ch10-s4 体温及其调节：产热-散热账本、调定点与发热三相
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、产热四源与散热四途 ============
  b.panel(30, 132, 1340, 300, { title: '一、产热四源与散热四途：37 ℃ 的进出账本' })
  // 左：产热四源
  b.text(46, 186, '产热四源', { size: 12, weight: 700, fill: C.badD })
  b.tag(100, 214, '基础内脏', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 700 })
  b.text(150, 218, '肝最盛、脑占基础代谢约 20%（「思考不额外烧脑」）、心肾再次', { size: 9.5, fill: C.sub })
  b.tag(100, 258, '静息肌张力', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 700 })
  b.text(150, 262, '小份额；剧烈运动时肌肉产热占全身 75%–90%，核心温度可推至 40 ℃ 上下', { size: 9.5, fill: C.sub })
  b.tag(100, 302, '寒战产热', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 700 })
  b.text(150, 306, '下丘脑后部驱动 α 运动神经元非同步放电：肌紧张→节律颤动，最大达基础 4–5 倍', { size: 9.5, fill: C.sub })
  b.tag(100, 346, '非寒战产热 NST', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 700 })
  b.wtext(155, 344, '褐色脂肪 UCP1 解耦联：交感 β_{3}→游离脂肪酸开门、质子内漏绕过 ATP 合酶——氧化与磷酸化解耦，燃料烧成纯热；新生儿不能寒战、BAT 为抗冷主力（出生占体重 2%–5%），成人锁骨上区仍可被冷激活。', { size: 9, fill: C.sub, maxW: 480, lh: 13 })
  b.text(46, 400, '冷应激的两级放大器＝寒战（机械能全化为热）＋ NST（燃料烧纯热）。', { size: 9, fill: C.mute })
  // 分隔线与天平
  b.line(660, 180, 660, 408, { stroke: C.line, sw: 1.2 })
  b.ctext(660, 200, '产热＝散热', { size: 10, weight: 700, fill: C.ink })
  b.ctext(660, 216, '核心 ≈37 ℃', { size: 10, weight: 700, fill: C.badD })
  // 右：散热四途
  b.text(700, 186, '散热四途（皮肤承担 90% 以上）', { size: 12, weight: 700, fill: C.accD })
  const loss: Array<[string, number, string, string]> = [
    ['辐射', 60, '≈60%', '与环境物体的温差·红外发射'],
    ['对流', 15, '≈15%', '气流带走边界层热（风速）·风扇'],
    ['蒸发', 22.5, '20–25%', '水汽化吸热 0.58 kcal/g；不显蒸发约 600–700 ml/日（皮肤＋呼吸道）'],
    ['传导', 3, '最小', '接触物导热率（水≈空气 25 倍）——冰帽、冷水浸浴'],
  ]
  loss.forEach(([lab, pct, val, note], i) => {
    const y = 210 + i * 36
    b.text(700, y + 4, lab, { size: 9.5, weight: 600, fill: C.ink })
    b.rect(745, y - 5, Math.max(pct * 1.9, 6), 11, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 2 })
    b.text(745 + Math.max(pct * 1.9, 6) + 6, y + 4, val, { size: 9, weight: 700, fill: C.accD })
    b.text(745 + Math.max(pct * 1.9, 6) + 42, y + 4, note, { size: 9, fill: C.sub })
  })
  b.rect(700, 348, 650, 60, { fill: C.warnL, fillOp: 0.4, stroke: C.warn, sw: 1.5, rx: 8 })
  b.text(716, 372, '铁律：环境温度 ≥ 皮温 → 辐射/传导/对流失效或反向得热——蒸发成为唯一散热途径', { size: 10.5, weight: 700, fill: C.warnD })
  b.wtext(716, 394, '干热（沙漠）可大量出汗须补水与盐；湿热「汗出而蒸发不掉」——湿球温度才是真应激指标；高温作业补给＝水＋电解质而非纯水。', { size: 9, fill: C.sub, maxW: 620, lh: 12.5 })
  b.text(700, 424, '皮肤血流经动静脉吻合（AVA）调度：全身调节幅最宽，全力扩张可达 6–8 L/min——既是传送带又是棉袄。', { size: 9, fill: C.mute })

  // ============ 二、PO/AH 调定点与 PGE2 通路 ============
  b.panel(30, 447, 450, 533, { title: '二、PO/AH：浸在血里的温度计与可调设定点' })
  // 三路输入
  b.tag(90, 510, '皮肤温度', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.wtext(30, 528, '冷感受器密度远高、对变化率敏感——「刚入水冷、片刻适应」', { size: 8, fill: C.sub, maxW: 100, lh: 10.5 })
  b.tag(90, 572, '深部温度', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.wtext(30, 590, '脊髓·腹腔内脏信号', { size: 8, fill: C.sub, maxW: 100, lh: 10.5 })
  b.tag(90, 634, '血温直感', { size: 9.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.wtext(30, 652, 'PO/AH 自身＝血里的温度计', { size: 8, fill: C.sub, maxW: 110, lh: 10.5 })
  b.arrow(127, 510, 171, 515, { stroke: C.sub, sw: 1.4 })
  b.arrow(127, 572, 171, 572, { stroke: C.sub, sw: 1.4 })
  b.arrow(127, 634, 171, 625, { stroke: C.sub, sw: 1.4 })
  b.text(30, 672, '＋非温度调制（渗透压·激素·睡眠·细胞因子）', { size: 8.5, fill: C.mute })
  // 中枢盒
  b.rect(175, 495, 120, 150, { fill: C.proL, stroke: C.pro, sw: 2, rx: 10 })
  b.ctext(235, 525, 'PO/AH', { size: 11, weight: 700, fill: C.proD })
  b.ctext(235, 548, '热敏/冷敏神经元', { size: 9, fill: C.sub })
  b.ctext(235, 570, '比较器', { size: 9.5, weight: 700, fill: C.proD })
  b.ctext(235, 592, '设定值 ≈37 ℃', { size: 10, weight: 700, fill: C.badD })
  b.ctext(235, 614, '（可被上调——发热）', { size: 8.5, fill: C.mute })
  // 三路输出
  b.arrow(298, 515, 336, 510, { stroke: C.sub, sw: 1.4 })
  b.arrow(298, 572, 336, 572, { stroke: C.sub, sw: 1.4 })
  b.arrow(298, 625, 336, 634, { stroke: C.sub, sw: 1.4 })
  b.tag(380, 510, '寒战运动通路', { size: 9.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.wtext(340, 528, '经脑干→脊髓前角', { size: 8, fill: C.sub, maxW: 100, lh: 10.5 })
  b.tag(380, 572, '血管运动·发汗', { size: 9.5, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.wtext(340, 590, '交感：缩血管/汗腺（胆碱能）', { size: 8, fill: C.sub, maxW: 100, lh: 10.5 })
  b.tag(380, 634, '行为驱动', { size: 9.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.wtext(340, 652, '寻热寻凉·添衣减衣', { size: 8, fill: C.sub, maxW: 100, lh: 10.5 })
  // PGE2 通路
  b.text(46, 686, '发热的信号链（PGE_{2} 上调设定点）', { size: 11, weight: 700, fill: C.badD })
  b.tag(235, 700, '外致热原（LPS·抗原-抗体复合物）', { size: 9.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.arrow(235, 712, 235, 730, { stroke: C.sub, sw: 1.6 })
  b.tag(235, 744, '单核-巨噬细胞 → 内生致热原', { size: 9.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.arrow(235, 756, 235, 774, { stroke: C.sub, sw: 1.6 })
  b.tag(235, 788, 'IL-1 · IL-6 · TNF-α', { size: 9.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.arrow(235, 800, 235, 818, { stroke: C.sub, sw: 1.6 })
  b.tag(235, 832, 'COX-2 → PGE_{2}（终板血管器/迷走传入）', { size: 9.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.arrow(235, 844, 235, 862, { stroke: C.sub, sw: 1.6 })
  b.tag(235, 876, '设定点 37 → 39 ℃（热敏阈值上移）', { size: 9.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.wtext(355, 700, '微生物产物等体外启动', { size: 8.5, fill: C.sub, maxW: 105, lh: 11 })
  b.wtext(355, 744, '细胞因子家族', { size: 8.5, fill: C.sub, maxW: 105, lh: 11 })
  b.wtext(355, 788, '经血循环抵达脑', { size: 8.5, fill: C.sub, maxW: 105, lh: 11 })
  b.wtext(355, 832, '于血-脑屏障薄弱处入脑', { size: 8.5, fill: C.sub, maxW: 105, lh: 11 })
  b.wtext(46, 916, '解热镇痛药＝COX 抑制剂（阿司匹林·对乙酰氨基酚）：抑制 PGE_{2} 合成、把设定点搬回 37 ℃——对非发热的过热无效（见右下图）。', { size: 9, fill: C.sub, maxW: 420, lh: 13 })

  // ============ 三、体温的节律与测量口径 ============
  b.panel(510, 447, 390, 533, { title: '三、体温的节律与测量口径' })
  b.text(528, 615, '体温 (℃)', { size: 9, weight: 600, fill: C.sub })
  b.axis(545, 700, 300, 160, {
    xticks: [[0, '0'], [0.25, '6'], [0.5, '12'], [0.75, '18'], [1, '24']], yticks: [[0, '36.0'], [0.5, '36.8'], [1, '37.6']], grid: false,
    xlabel: '时刻 (h)',
  })
  b.curve(545, 700, 300, 160, [[0, 0.38], [0.08, 0.33], [0.25, 0.25], [0.35, 0.3], [0.5, 0.56], [0.7, 0.75], [0.85, 0.72], [0.92, 0.55], [1, 0.4]], { smooth: true, stroke: C.acc, sw: 2.6 })
  b.text(575, 585, '清晨最低', { size: 9, weight: 700, fill: C.accD })
  b.text(700, 565, '午后–傍晚最高', { size: 9, weight: 700, fill: C.accD })
  b.text(770, 615, '昼夜波动 0.5–1.0 ℃', { size: 9, weight: 700, fill: C.warnD })
  b.text(526, 778, '月经周期双相基础体温', { size: 10.5, weight: 700, fill: C.enzD })
  b.polyline([[545, 830], [620, 828], [640, 824], [650, 802], [720, 800], [790, 802], [812, 838]], { stroke: C.enz, sw: 2.2 })
  b.arrow(645, 792, 645, 812, { stroke: C.enz, sw: 1.6 })
  b.text(600, 790, '排卵', { size: 8.5, weight: 700, fill: C.enzD })
  b.text(680, 790, '黄体期：孕酮上移设定点 0.3–0.5 ℃（持续约 14 天）', { size: 8.5, fill: C.enzD })
  b.text(548, 852, '卵泡期（低温相）', { size: 8.5, fill: C.sub })
  b.wtext(526, 886, '双相曲线＝居家监测排卵的经典工具；直肠 36.9–37.9 ℃（最接近核心）、口腔 36.7–37.7 ℃、腋窝 36.0–37.4 ℃（最低、受出汗影响）。', { size: 9, fill: C.sub, maxW: 360, lh: 13 })
  b.wtext(526, 926, 'Bernard 温度计实验：外周血温随环境大幅摆动、深部温度稳如磐石——核心温度与体表温度二分；昼夜节律由视交叉上核输出调制（与皮质醇节律协同）。', { size: 9, fill: C.sub, maxW: 360, lh: 13 })

  // ============ 四、发热三相：设定点上移的逐帧图景 ============
  b.panel(930, 447, 440, 533, { title: '四、发热三相：设定点上移的逐帧图景' })
  b.rect(950, 530, 106, 170, { fill: C.badL, fillOp: 0.25 })
  b.rect(1056, 530, 124, 170, { fill: C.warnL, fillOp: 0.3 })
  b.rect(1180, 530, 90, 170, { fill: C.okL, fillOp: 0.35 })
  b.ctext(1003, 522, '寒战期', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(1118, 522, '高温平台期', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(1225, 522, '退热期', { size: 9.5, weight: 700, fill: C.okD })
  b.axis(950, 700, 320, 170, {
    xticks: [[0, '0'], [0.33, '4'], [0.66, '8'], [1, '12']], yticks: [[0, '36'], [0.333, '37'], [0.667, '38'], [1, '39']], grid: false,
    xlabel: '时间 (h)',
  })
  b.curve(950, 700, 320, 170, [[0, 0.333], [0.05, 0.333], [0.05, 1], [0.72, 1], [0.72, 0.333], [1, 0.333]], { stroke: C.bad, sw: 1.8, dash: '6 4' })
  b.curve(950, 700, 320, 170, [[0, 0.333], [0.05, 0.31], [0.12, 0.45], [0.2, 0.75], [0.3, 0.98], [0.5, 1], [0.7, 1], [0.78, 0.9], [0.9, 0.5], [1, 0.34]], { smooth: true, stroke: C.ink, sw: 2.6 })
  b.text(1205, 655, '设定点（虚线阶梯）', { size: 8.5, fill: C.badD })
  b.wtext(936, 760, '实际<设定点→「冷」信号：寒战、皮肤血管收缩（苍白·四肢冷）、竖毛、盖被；主观冷而体温计已高——悖论源自坐标变换。', { size: 8.5, fill: C.sub, maxW: 110, lh: 11.5 })
  b.wtext(1062, 760, '产热＝散热在高位重新平衡：皮肤血管开放、自觉燥热，体温稳于 39 ℃ 上下。', { size: 8.5, fill: C.sub, maxW: 112, lh: 11.5 })
  b.wtext(1186, 760, '设定点回落、实际>设定→散热洪峰：血管全面扩张（潮红）＋大量出汗（「汗出热退」）。', { size: 8.5, fill: C.sub, maxW: 160, lh: 11.5 })
  b.wtext(936, 816, '寒战期处置两难：冰袋/酒精擦浴反激化寒战产热——先以药物下调设定点或待平台期再物理降温（「保暖到不抖、散热到平台」）。', { size: 8.5, fill: C.sub, maxW: 420, lh: 11.5 })
  b.text(936, 858, '非发热高温：设定点未上移', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(936, 880, '运动性高温 40–41 ℃（肌肉产热>散热，血管扩张＋大汗＝散热全力）；中暑 >41 ℃（蒸发通道失效/汗衰竭，越过细胞损伤阈值——物理降温分秒必争，「捂汗」是经典错误）；恶性高热（RYR1 失控 Ca^{2+} 外涌，丹曲林特效）。', { size: 8.5, fill: C.sub, maxW: 420, lh: 11.5 })
  b.wtext(936, 938, '适度发热的防御意义：免疫细胞功能增强、血浆铁降低限制细菌生长——临床按体温与病情整体权衡，不「见热就压」。', { size: 8.5, fill: C.mute, maxW: 420, lh: 11.5 })
}

export default scene({
  title: '体温及其调节：37 ℃ 的产热-散热账本与调定点',
  subtitle: '产热四源（基础内脏·静息肌·寒战最大 4–5 倍·褐色脂肪 UCP1 解耦联）对散热四途（辐射≈60%·对流≈15%·蒸发 20–25%，环境温度≥皮温时蒸发为唯一途径）；核心温度昼夜波动 0.5–1.0 ℃、黄体期孕酮上移 0.3–0.5 ℃；发热＝PGE_{2} 上调 PO/AH 设定点（37→39 ℃）的三相图景，中暑与运动性高温设定点未动',
  draw,
})
