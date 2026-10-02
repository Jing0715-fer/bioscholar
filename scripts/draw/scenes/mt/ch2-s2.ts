// mt ch2-s2 门控机制（电压 S4 滑尺 + 配体双型 + 机械门控 + 植物反向用法 + 门控类型对照表）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、电压门控：S4 精氨酸滑尺 ============
  b.panel(30, 132, 660, 295, { title: '一、电压门控：S4 精氨酸滑尺（sliding helix）' })
  // —— 状态 A：静息 ——
  b.ctext(195, 185, '静息：胞内为负，S4 被拉向胞内侧', { size: 12.5, weight: 700, fill: C.accD })
  b.bilayer(75, 255, 240)
  b.rect(95, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(122, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(149, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(186, 256, 12, 54, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.rect(225, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(262, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.path('M235,236 L235,253 Q249,268 262,253 L262,236', { stroke: C.dna, sw: 2.4 })
  b.line(233, 286, 254, 302, { stroke: C.enz, sw: 2.2 })
  b.line(264, 286, 243, 302, { stroke: C.enz, sw: 2.2 })
  b.arrow(204, 262, 204, 296, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  const sL: [number, string][] = [[100, 'S1'], [127, 'S2'], [154, 'S3'], [192, 'S4'], [230, 'S5'], [267, 'S6']]
  sL.forEach(([x, s]) => b.ctext(x, 227, s, { size: 9, fill: C.mute }))
  b.text(60, 240, '胞外', { size: 10, fill: C.mute })
  b.text(60, 322, '胞内', { size: 10, fill: C.mute })
  b.ctext(249, 316, '闸关', { size: 10.5, weight: 700, fill: C.badD })
  ;[264, 277, 290, 303].forEach(y => b.ion(192, y, '+', { r: 5, fill: C.bad, stroke: C.bad, tfill: '#ffffff', size: 9 }))
  // —— 状态 B：去极化 ——
  b.ctext(485, 185, '去极化：电场翻转，S4 旋转上移 1–2 nm', { size: 12.5, weight: 700, fill: C.accD })
  b.bilayer(365, 255, 240)
  b.rect(385, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(412, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(439, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(476, 232, 12, 54, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.rect(515, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.rect(552, 232, 10, 54, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.path('M525,236 L525,253 Q539,268 552,253 L552,236', { stroke: C.dna, sw: 2.4 })
  b.line(523, 286, 513, 302, { stroke: C.ok, sw: 2.2 })
  b.line(554, 286, 564, 302, { stroke: C.ok, sw: 2.2 })
  b.arrow(494, 292, 494, 258, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  const sL2: [number, string][] = [[390, 'S1'], [417, 'S2'], [444, 'S3'], [482, 'S4'], [520, 'S5'], [557, 'S6']]
  sL2.forEach(([x, s]) => b.ctext(x, 227, s, { size: 9, fill: C.mute }))
  b.ctext(539, 316, '闸开', { size: 10.5, weight: 700, fill: C.okD })
  ;[240, 253, 266, 279].forEach(y => b.ion(482, y, '+', { r: 5, fill: C.bad, stroke: C.bad, tfill: '#ffffff', size: 9 }))
  b.arrow(322, 245, 358, 245, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(340, 233, '去极化', { size: 10.5, fill: C.accD, weight: 600 })
  // —— 底注 ——
  b.text(46, 348, '· S4 每隔 3 个残基一个精氨酸（Arg），像带齿的正电荷齿条；Nav 门控电荷总量约 12–16 e（Kv 约 3–13 e）', { size: 11.5, fill: C.sub })
  b.text(46, 371, '· 滑移螺旋：S4 边旋转边交换氢键伙伴；螺旋桨模型：S4 连同 S3b 像桨叶整体横扫过膜', { size: 11.5, fill: C.sub })
  b.text(46, 394, '· 传感器运动经 S4–S5 连接螺旋这一杠杆传给孔道，闸门应声而开', { size: 11.5, fill: C.sub })
  b.text(46, 417, '· 失活另算：N 型链球（数十 ms）甩进内口、C 型滤器塌陷（数百 ms）——门开着也可能失活', { size: 11.5, fill: C.sub })

  // ============ 二、配体门控：胞外与胞内的两个世界 ============
  b.panel(710, 132, 660, 295, { title: '二、配体门控：胞外与胞内的两个世界' })
  // —— 左：Cys-loop 五聚体顶视图 ——
  b.ctext(880, 182, '胞外配体：Cys-loop 五聚体（动物独有）', { size: 13, weight: 700, fill: C.proD })
  const pent: Array<[number, number]> = [
    [865, 214], [910.6, 247.2], [893.2, 300.8], [836.8, 300.8], [819.4, 247.2],
  ]
  pent.forEach(([x, y]) => b.circle(x, y, 20, { fill: C.proL, stroke: C.pro, sw: 1.8 }))
  b.circle(865, 258, 13, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.circle(893.2, 223.2, 7, { fill: C.enz, stroke: C.enzD, sw: 1.2 })
  b.text(920, 212, 'ACh', { size: 10.5, weight: 700, fill: C.enzD })
  b.line(918, 215, 898, 220, { stroke: C.faint, sw: 1 })
  b.ctext(865, 340, 'nAChR · 5-HT_{3}（阳离子）｜GABA_{A} · GlyR（Cl^{-}）', { size: 11.5, fill: C.sub })
  b.ctext(865, 362, '每亚基 4TMS；闸门＝五个 M2 中央疏水环', { size: 11, fill: C.sub })
  b.ctext(865, 384, '结合令亚基扭转约 15°——数十 μs 孔开，快突触', { size: 11, fill: C.sub })
  b.ctext(865, 406, '药理富矿：苯二氮类增强 GABA_{A}；银环蛇毒素别住 nAChR', { size: 11, fill: C.sub })
  // —— 右：胞内配体 ——
  b.ctext(1197, 182, '胞内配体：第二信使开门', { size: 13, weight: 700, fill: C.accD })
  b.bilayer(1050, 250, 290)
  b.rect(1086, 237, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1114, 237, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(1100, 231, 'CNG / HCN', { size: 10.5, fill: C.proD, weight: 600 })
  b.tag(1100, 305, 'cAMP', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 11, pad: 8, minh: 20 })
  b.arrow(1100, 293, 1100, 281, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.rect(1266, 237, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1294, 237, 12, 42, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(1280, 231, 'BK 通道', { size: 10.5, fill: C.proD, weight: 600 })
  b.ion(1280, 305, 'Ca^{2+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(1280, 293, 1280, 281, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.wtext(1045, 336, 'CNG/HCN：cAMP·cGMP 结合胞内 C 端环——视网膜光感受器与嗅上皮的换能器', { size: 10.5, fill: C.sub, maxW: 306, lh: 20 })
  b.wtext(1045, 380, 'BK：胞内 Ca^{2+} 与膜电压双重门控，钙火花瞬间打开大电导', { size: 10.5, fill: C.sub, maxW: 306, lh: 23 })
  b.text(726, 420, '植物两侧都用：CNGC（环核苷酸＋Ca^{2+}-CaM 调制）· GLR（氨基酸门控）· 磷酸化（OST1→SLAC1 关气孔）', { size: 11, fill: C.okD })

  // ============ 三、机械门控 ============
  b.panel(30, 440, 660, 295, { title: '三、机械门控：把膜张力翻译成开孔' })
  // —— 动物 ——
  b.ctext(200, 488, '动物：Piezo 三叶桨 · 听毛 tip-link', { size: 12.5, weight: 700, fill: C.sub })
  const blade = (th: number) => {
    const cx = 150, cy = 575
    const p = (ang: number, d: number): [number, number] => [cx + d * Math.cos(ang), cy + d * Math.sin(ang)]
    const s1 = p(th + 1.15, 30), tip = p(th, 78), s2 = p(th - 1.15, 30)
    const c1 = p(th + 0.5, 70), c2 = p(th - 0.5, 70)
    b.path(`M${s1[0].toFixed(1)},${s1[1].toFixed(1)} Q${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${tip[0].toFixed(1)},${tip[1].toFixed(1)} Q${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${s2[0].toFixed(1)},${s2[1].toFixed(1)} Z`, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  }
  blade(-Math.PI / 2)
  blade(Math.PI / 6)
  blade((Math.PI * 5) / 6)
  b.circle(150, 575, 11, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(150, 640, 'Piezo1/2', { size: 12, weight: 700, fill: C.proD })
  b.ctext(150, 658, '触觉 · 血压 · 红细胞容量检查', { size: 10.5, fill: C.mute })
  // 听毛 tip-link
  b.arrow(272, 528, 312, 528, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(292, 518, '毛束偏转', { size: 10.5, fill: C.accD })
  b.polygon([[283, 620], [291, 620], [303, 540], [295, 540]], { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.polygon([[315, 620], [323, 620], [329, 565], [321, 565]], { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.line(299, 543, 323, 566, { stroke: C.enz, sw: 2 })
  b.rect(320, 563, 10, 10, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.text(340, 572, 'MET', { size: 9, fill: C.accD, weight: 700 })
  b.line(275, 620, 335, 620, { stroke: C.sub, sw: 2 })
  b.ctext(305, 640, '听毛顶端连接', { size: 10.5, fill: C.sub })
  b.ctext(305, 658, '直接拽开 MET 通道', { size: 10.5, fill: C.sub })
  // —— 植物 ——
  b.ctext(525, 486, '植物：MSL 安全阀 · OSCA 钙哨', { size: 12.5, weight: 700, fill: C.okD })
  b.bilayer(395, 545, 125)
  b.rect(440, 532, 12, 38, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(460, 532, 12, 38, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(456, 502, 'MSL', { size: 11, weight: 700, fill: C.okD })
  b.circle(450, 518, 3, { fill: C.acc })
  b.circle(460, 512, 3, { fill: C.acc })
  b.circle(455, 505, 3, { fill: C.acc })
  b.circle(452, 590, 3, { fill: C.acc })
  b.circle(462, 596, 3, { fill: C.acc })
  b.circle(456, 603, 3, { fill: C.acc })
  b.arrow(456, 508, 456, 600, { stroke: C.acc, sw: 1.6, marker: 'acc', dash: '4 3' })
  b.ctext(456, 616, '（拟南芥 10 个）', { size: 10.5, fill: C.mute })
  b.ctext(456, 634, 'MscS 血统 · 渗透放水防裂解', { size: 10.5, fill: C.sub })
  b.ctext(456, 652, 'MSL8 守花粉 · MSL10 高渗', { size: 10.5, fill: C.sub })
  b.bilayer(545, 545, 120)
  b.rect(593, 532, 11, 38, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(616, 532, 11, 38, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(610, 502, 'OSCA', { size: 11, weight: 700, fill: C.okD })
  b.arrow(610, 574, 610, 581, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(610, 592, 'Ca^{2+}', { r: 8.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.ctext(610, 616, '渗透骤降→Ca^{2+} 信号', { size: 10.5, fill: C.sub })
  b.ctext(610, 634, '根尖高盐第一哨', { size: 10.5, fill: C.sub })
  b.wtext(46, 678, 'Piezo 桨叶间的膜凹陷随张力变形牵开中央孔；植物阵容承袭细菌 MscS/MscL 的安全阀血统——保卫细胞感受膨压变化、根尖感知触摸与缠绕。', { size: 11, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 四、植物特色：同一门控、反向用法 ============
  b.panel(710, 440, 660, 295, { title: '四、植物特色：同一门控、反向用法' })
  // —— 左：KAT1 反向用极 ——
  b.ctext(868, 490, 'KAT1：去极化激活却内向导通', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(830, 522, 'V_{1/2}≈−120 mV', { size: 9.5, fill: C.dnaD })
  b.rect(810, 528, 40, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(830, 541, 'KAT1', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(936, 522, 'V_{1/2} −20~+20 mV', { size: 9.5, fill: C.accD })
  b.rect(916, 528, 40, 18, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(936, 541, 'Kv', { size: 10, weight: 700, fill: C.accD })
  b.line(830, 546, 830, 560, { stroke: C.dna, sw: 1.2, dash: '4 3' })
  b.line(936, 546, 936, 560, { stroke: C.acc, sw: 1.2, dash: '4 3' })
  b.line(740, 560, 1000, 560, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const vTicks: Array<[number, string]> = [[760, '−200'], [848, '−100'], [936, '0'], [980, '+50']]
  vTicks.forEach(([x, t]) => {
    b.line(x, 556, x, 564, { stroke: C.sub, sw: 1.8 })
    b.ctext(x, 578, t, { size: 10, fill: C.mute })
  })
  b.text(1004, 564, 'mV', { size: 10, fill: C.mute })
  b.wtext(740, 600, '植物静息电位深达 −200 mV 级：去极化开门时 K^{+} 驱动力仍指向胞内——KAT1 介导内向 K^{+} 流，是气孔开放的吸钾主力（先 H^{+}-ATPase 建深负电位，再 KAT1 吸钾）。', { size: 10.5, fill: C.sub, maxW: 268, lh: 16 })
  b.wtext(740, 664, '动物静息约 −70 mV：同一分子逻辑，Kv 开门放 K^{+} 外流复极——用法相反的原因不在蛋白，而在电化学语境。', { size: 10.5, fill: C.sub, maxW: 268, lh: 16 })
  // —— 右：TPC1 换胞器 ——
  b.ctext(1192, 490, 'TPC1：同门不同胞器、不同离子', { size: 12.5, weight: 700, fill: C.enzD })
  b.rect(1050, 520, 160, 100, { fill: C.okL, stroke: C.ok, sw: 2, rx: 18 })
  b.rect(1118, 511, 11, 18, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1135, 511, 11, 18, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(1132, 505, 'TPC1（SV）', { size: 10.5, fill: C.proD, weight: 600 })
  b.ctext(1070, 560, '液泡', { size: 12, weight: 700, fill: C.okD })
  b.ctext(1070, 582, 'K^{+}/Ca^{2+}', { size: 10, fill: C.sub })
  b.arrow(1132, 580, 1132, 509, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ctext(1130, 645, '电压＞−20 mV ＋ 胞质 Ca^{2+}', { size: 10, fill: C.sub })
  b.ctext(1130, 663, '双重门控才充分开放', { size: 10, fill: C.sub })
  b.circle(1290, 570, 40, { fill: '#fee2e2', stroke: C.bad, sw: 2 })
  b.rect(1282, 521, 10, 16, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(1296, 521, 10, 16, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(1290, 505, 'TPCN1/2', { size: 10.5, fill: C.proD, weight: 600 })
  b.ctext(1290, 565, '溶酶体', { size: 11.5, weight: 700, fill: C.badD })
  b.ctext(1290, 585, 'Na^{+}', { size: 10.5, fill: C.sub })
  b.ctext(1290, 645, 'NAADP 门控', { size: 10, fill: C.sub })
  b.ctext(1290, 663, '溶酶体 Na^{+} 通道', { size: 10, fill: C.sub })
  b.wtext(1030, 690, '祖先同一个基因：动物进溶酶体、植物上液泡膜——亚细胞定位的改换比序列改写更能定义用法不同', { size: 10.5, fill: C.sub, maxW: 320, lh: 16 })
  b.tag(1125, 720, '长 QT（Kv7.1/hERG）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10 })
  b.tag(1300, 720, 'Dravet（SCN1A）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10 })

  // ============ 五、门控类型对照 + 门控失效疾病 ============
  b.panel(30, 748, 1340, 237, { title: '五、四类门控 × 传感结构 × 两界代表' })
  b.table(46, 795, 800, {
    headers: ['门控类型', '传感结构', '动物代表', '植物代表'],
    colW: [150, 200, 230, 220],
    rowH: 27,
    fontSize: 12,
    rows: [
      ['电压门控', 'S4 精氨酸齿条', 'Nav、Cav、Kv、HCN', 'KAT1、GORK、TPC1'],
      ['胞外配体门控', '胞外配体结合域', 'nAChR、GABA_{A}', 'GLR（氨基酸门控）'],
      ['胞内配体门控', '核苷酸/Ca^{2+} 结合域', 'CNG、HCN、BK', 'CNGC'],
      ['机械门控', '桨叶/膜张力感受', 'Piezo1/2、MET', 'MSL、OSCA'],
    ],
  })
  b.rect(866, 780, 490, 182, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.5, rx: 10 })
  b.text(886, 804, '门控失效即疾病', { size: 15, weight: 700, fill: C.badD })
  b.wtext(886, 828, '长 QT 综合征：Kv7.1/hERG 门控减弱 → I_{Ks}/I_{Kr} 不足 → QT 延长，易触发尖端扭转型室速（药物误堵 hERG 亦然）', { size: 11, fill: C.sub, maxW: 450, lh: 20 })
  b.wtext(886, 870, 'SCN1A（Nav1.1）功能缺失：抑制性中间神经元先失能 → 网络去抑制 → Dravet 综合征重症癫痫', { size: 11, fill: C.sub, maxW: 450, lh: 20 })
  b.wtext(886, 914, '植物门控失效以表型现形：cngc 免疫钙信号缺陷、msl 膨压调控异常、tpc1 气孔运动迟缓', { size: 11, fill: C.sub, maxW: 450, lh: 20 })
  b.text(46, 966, '药理深知门控：河豚毒素无差别堵 Nav 全家；拉莫三嗪偏待高放电频率通道（使用依赖性）——改门控的药比堵孔的药更讲选择', { size: 11, fill: C.sub })
}

export default scene({
  title: '门控机制：电压、配体、机械与植物的反向用法',
  subtitle: 'S4 精氨酸滑尺把毫伏译成开门（Nav 门控电荷 12–16 e）；配体门控分居膜两侧（Cys-loop vs CNG/BK）；Piezo 三叶桨对植物 MSL/OSCA；KAT1 去极化激活却内向导通、TPC1 换胞器换离子——门控失效即长 QT 与 Dravet',
  draw,
})
