// ph ch8-s2 肾素-血管紧张素系统与体液调节：RAAS 级联、醛固酮与肾排钠曲线
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RAAS 级联纵链 ============
  b.panel(30, 132, 420, 848, { title: '一、RAAS 级联：从颗粒细胞到 AT_{1} 效应' })
  b.text(74, 190, '三个信号：殊途同归（血量不足）', { size: 10.5, weight: 700, fill: C.warnD })
  b.rect(74, 204, 112, 88, { fill: 'none', stroke: C.warn, sw: 1.2, dash: '5 4', rx: 8 })
  b.tag(130, 222, '① 肾灌注压↓', { size: 9.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.tag(130, 252, '② 交感 β_{1}', { size: 9.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.tag(130, 282, '③ 致密斑 NaCl↓', { size: 9.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.text(202, 226, '入球小动脉牵张减弱（肾内压力感受器）', { size: 9, fill: C.sub })
  b.text(202, 256, 'NE 经 β_{1} 受体刺激颗粒细胞', { size: 9, fill: C.sub })
  b.text(202, 286, '到达致密斑的 NaCl 减少（管球反馈）', { size: 9, fill: C.sub })
  b.arrow(130, 296, 130, 312, { stroke: C.sub, sw: 1.8 })
  b.tag(130, 325, '肾素（蛋白酶）', { size: 11, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.text(215, 329, '底物：肝脏血管紧张素原', { size: 9, fill: C.sub })
  b.arrow(130, 341, 130, 359, { stroke: C.sub, sw: 1.8 })
  b.tag(130, 378, 'Ang I（无活性十肽）', { size: 10.5, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.arrow(130, 394, 130, 412, { stroke: C.sub, sw: 1.8 })
  b.tag(130, 430, 'ACE（肺内皮腔面）', { size: 10.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.text(215, 425, '兼降解缓激肽——ACEI 干咳之源', { size: 9, fill: C.sub })
  b.arrow(130, 446, 130, 464, { stroke: C.sub, sw: 1.8 })
  b.tag(130, 482, 'Ang II（核心八肽）', { size: 10.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.text(215, 486, '可被氨基肽酶加工为 Ang III', { size: 9, fill: C.mute })
  b.arrow(130, 498, 130, 516, { stroke: C.sub, sw: 1.8 })
  b.tag(130, 537, 'AT_{1} 受体（Gq-PLC-IP_{3}）', { size: 10.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.text(215, 541, '效应几乎全经 AT_{1} 受体执行', { size: 9, fill: C.mute })
  b.arrow(130, 551, 130, 566, { stroke: C.sub, sw: 1.8 })
  b.rect(50, 572, 380, 228, { fill: 'none', stroke: C.enz, sw: 1.2, dash: '5 4', rx: 8 })
  b.text(64, 594, 'AT_{1} 五重效应：缩·醛·渴·回收·重塑', { size: 11, weight: 700, fill: C.enzD })
  b.text(66, 624, '① 强力收缩阻力与容量血管（最强缩血管物质之一）', { size: 9.5, fill: C.sub })
  b.text(66, 657, '② 刺激肾上腺皮质球状带合成醛固酮', { size: 9.5, fill: C.sub })
  b.text(66, 690, '③ 致渴感·促 ADH 释放（经穹隆下器/终板血管器）', { size: 9.5, fill: C.sub })
  b.text(66, 723, '④ 直接刺激近端小管 Na^{+}-H^{+} 交换重吸收 Na^{+}', { size: 9.5, fill: C.sub })
  b.text(66, 756, '⑤ 促交感末梢释放 NE；驱动血管与心肌增殖重塑', { size: 9.5, fill: C.sub })
  b.wtext(64, 784, '支路：ACE2 切 Ang I/II 生成 Ang(1-7)，经 Mas 受体舒血管·利钠·抗增殖（保护轴）；ACE2 亦为 SARS-CoV-2 的入侵受体。', { size: 9, fill: C.sub, maxW: 355, lh: 13 })
  b.text(46, 842, '内皮局部方言：NO 与内皮素', { size: 11, weight: 700, fill: C.dnaD })
  b.text(46, 868, 'NO（eNOS·L-精氨酸）→ cGMP 舒张；剪切应力持续诱导', { size: 9, fill: C.sub })
  b.text(46, 892, '内皮素-1：已知最强长效缩血管肽（1988 Yanagisawa）', { size: 9, fill: C.sub })
  b.text(46, 916, 'PGI_{2}＋NO（扩血管·抗血小板）↔ 内皮素·TXA_{2} 对冲', { size: 9, fill: C.sub })
  b.text(46, 940, '粥样硬化早期 NO 生物利用度下降→内皮素占优', { size: 9, fill: C.sub })
  b.text(46, 962, 'NO 信使工作＝1998 年诺贝尔生理学或医学奖', { size: 9, fill: C.mute })

  // ============ 二、醛固酮与远端小管 ============
  b.panel(470, 132, 900, 335, { title: '二、醛固酮与远端小管：保钠排钾（小时-天级）' })
  b.ion(580, 172, 'Na^{+}', { r: 11, fill: C.warnL, stroke: C.warn, size: 9 })
  b.ion(662, 172, 'K^{+}', { r: 11, fill: C.okL, stroke: C.ok, size: 9 })
  b.rect(520, 185, 200, 22, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 5 })
  b.ctext(620, 200, '管腔（远曲小管·集合管）', { size: 9, fill: C.accD })
  b.rect(520, 212, 200, 140, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 8 })
  b.rect(568, 207, 24, 11, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.text(598, 222, 'ENaC', { size: 8.5, weight: 700, fill: C.warnD })
  b.arrow(580, 183, 580, 230, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.rect(648, 207, 20, 10, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.text(672, 222, 'K^{+} 通道', { size: 8.5, weight: 700, fill: C.okD })
  b.arrow(658, 203, 658, 184, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ctext(620, 252, '主细胞', { size: 10, weight: 700, fill: C.sub })
  b.text(532, 296, '类固醇基因组效应（小时级起效）', { size: 8.5, fill: C.sub })
  b.rect(568, 347, 24, 11, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
  b.text(600, 342, 'Na^{+}-K^{+}-ATP 酶', { size: 8.5, weight: 700, fill: C.dnaD })
  b.arrow(580, 335, 580, 372, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.rect(520, 362, 200, 22, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 5 })
  b.ctext(620, 377, '管周血液（间质）', { size: 9, fill: C.badD })
  b.ion(540, 373, 'Na^{+}', { r: 10, fill: C.warnL, stroke: C.warn, size: 8.5 })
  b.ion(700, 373, 'K^{+}', { r: 10, fill: C.okL, stroke: C.ok, size: 8.5 })
  b.tag(870, 200, '醛固酮（类固醇·基因组效应）', { size: 10.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.path('M 788,205 C 760,215 745,225 722,232', { stroke: C.rna, sw: 1.8, fill: 'none', marker: 'rna' })
  b.text(760, 250, '↑ ENaC 与 Na^{+}-K^{+}-ATP 酶表达和膜插入', { size: 9.5, fill: C.sub })
  b.text(760, 276, '净效应：保 Na^{+}（伴水）·排 K^{+}·扩容量升压', { size: 9.5, weight: 700, fill: C.sub })
  b.text(760, 302, '时程：小时-天级（与神经的秒级梯度互补）', { size: 9.5, fill: C.sub })
  b.text(760, 328, '上限：醛固酮逃逸（压力性利钠·利钠肽上调）', { size: 9.5, fill: C.sub })
  b.rect(1000, 185, 354, 128, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.5, rx: 10 })
  b.ctext(1177, 212, 'ANP：反向砝码（凡 RAAS 主张皆反对）', { size: 11, weight: 700, fill: C.okD })
  b.text(1016, 244, '心房肌容量牵张释放 28 肽 → cGMP↑', { size: 9.5, fill: C.sub })
  b.text(1016, 270, '扩血管·GFR↑（入球扩＋出球缩）·抑肾素与醛固酮·抗 ADH', { size: 9.5, fill: C.sub })
  b.text(1016, 296, 'BNP＝心衰诊断标志（NT-proBNP）；ARNI 靠减少其降解增效', { size: 9.5, fill: C.sub })
  b.rect(1000, 325, 354, 120, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.5, rx: 10 })
  b.ctext(1177, 352, 'ADH：渗透压优先的容量砝码', { size: 11, weight: 700, fill: C.accD })
  b.text(1016, 384, '血浆渗透压↑1%–2% 即释放（V_{2}→AQP2 提水）', { size: 9.5, fill: C.sub })
  b.text(1016, 410, '容量骤降>10%–15%：容量驱动凌驾渗透驱动', { size: 9.5, fill: C.sub })
  b.text(1016, 436, 'V_{1} 受体缩血管（平时浓度不足以升压）', { size: 9.5, fill: C.sub })
  b.wtext(486, 420, '醛固酮是「保钠排钾」的执行者，肾素-血管紧张素是它的指挥链；神经秒级、RAAS 分钟-小时、肾脏以天计——快慢接力。', { size: 9.5, fill: C.sub, maxW: 480, lh: 14 })

  // ============ 三、肾脏排钠-压力曲线 ============
  b.panel(470, 475, 560, 505, { title: '三、肾脏排钠-压力曲线：血压的长期定盘星' })
  b.text(542, 524, '肾排钠量（%正常摄入）', { size: 9.5, weight: 600, fill: C.sub })
  b.axis(540, 700, 400, 160, {
    xticks: [[0, '60'], [0.5, '100'], [1, '160']], yticks: [[0, '0'], [0.5, '50%'], [1, '100%']], grid: false,
    xlabel: '动脉压 (mmHg)',
  })
  b.curve(540, 700, 400, 160, [[0, 0.05], [0.15, 0.35], [0.3, 0.62], [0.5, 0.82], [0.7, 0.94], [1, 1]], { smooth: true, stroke: C.ok, sw: 2.8 })
  b.curve(540, 700, 400, 160, [[0.15, 0.02], [0.3, 0.1], [0.5, 0.28], [0.7, 0.55], [0.85, 0.8], [1, 0.95]], { smooth: true, stroke: C.bad, sw: 2.4, dash: '7 5' })
  b.circle(740, 569, 4.5, { fill: C.ok })
  b.circle(884, 569, 4.5, { fill: C.bad })
  b.arrow(746, 569, 878, 569, { stroke: C.bad, sw: 1.6, dash: '4 4', marker: 'bad' })
  b.text(730, 590, '同样排钠量→需更高动脉压', { size: 9, weight: 700, fill: C.badD })
  b.text(648, 588, '正常', { size: 9.5, weight: 700, fill: C.okD })
  b.text(790, 672, '右移＝慢性高血压', { size: 9.5, weight: 700, fill: C.badD })
  b.text(486, 764, 'Guyton：长期血压由肾脏压力性利尿钠定标——曲线右移即慢性高血压（无限增益：摄入多少排出多少）。', { size: 9.5, fill: C.sub })
  b.text(486, 800, '曲线右移的推手', { size: 11, weight: 700, fill: C.badD })
  b.tag(560, 832, '肾实质损害', { size: 10, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.tag(745, 832, 'Ang II·醛固酮过载', { size: 10, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.tag(925, 832, '交感张力过高', { size: 10, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.arrow(560, 846, 688, 872, { stroke: C.sub, sw: 1.5 })
  b.arrow(745, 846, 745, 872, { stroke: C.sub, sw: 1.5 })
  b.arrow(925, 846, 802, 872, { stroke: C.sub, sw: 1.5 })
  b.tag(745, 888, '慢性高血压（曲线右移）', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.text(486, 930, '低出生体重相关肾单位减少（Barker-Brenner）——高血压易感性追溯到生命早期。', { size: 9.5, fill: C.sub })
  b.text(486, 956, '盐摄入翻数倍：正常人血压仅微升（曲线陡）——盐敏感者曲线平坦。', { size: 9.5, fill: C.mute })

  // ============ 四、药理锚点 ============
  b.panel(1040, 475, 330, 505, { title: '四、药理锚点：从机制到药物' })
  b.text(1056, 516, '每一行对应级联中的一个分子', { size: 9.5, fill: C.mute })
  b.table(1056, 532, 298, {
    headers: ['药物', '靶点'], colW: [128, 170], rowH: 38, fontSize: 9.5,
    rows: [
      ['噻嗪类利尿剂', '远曲小管 NCC'],
      ['螺内酯/依普利酮', '盐皮质激素受体（保钾）'],
      ['ACEI（普利类）', 'ACE·缓激肽↑（干咳）'],
      ['ARB（沙坦类）', 'AT_{1} 受体'],
      ['阿利吉仑', '肾素（上游封锁）'],
    ],
  })
  b.wtext(1056, 796, 'ARNI（沙库巴曲＋缬沙坦）：抑制脑啡肽酶减少利钠肽降解＋阻断 AT_{1}——增强 ANP 轴。', { size: 9.5, fill: C.sub, maxW: 290, lh: 14 })
  b.wtext(1056, 844, 'ACEI 干咳/血管性水肿＝缓激肽降解受阻；ARB 不干扰 ACE2-Ang(1-7) 保护轴。', { size: 9.5, fill: C.sub, maxW: 290, lh: 14 })
  b.text(1056, 900, '直接扩血管药（肼屈嗪）致反射性心动过速——须联用 β 受体阻滞剂。', { size: 9.5, fill: C.sub })
  b.text(1056, 940, '「生理学是药理学的地基」', { size: 10.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '肾素-血管紧张素-醛固酮系统与体液调节',
  subtitle: '肾灌注↓/交感β₁/致密斑 NaCl↓ 三信号驱动肾素→AngI→ACE（肺）→AngII 经 AT₁ 受体五重效应（缩血管·醛固酮·渴·ADH·重塑）；醛固酮小时-天级保 Na⁺ 排 K⁺、ANP 全面对抗；Guyton 压力-利钠曲线右移即慢性高血压——长期血压由肾脏定标',
  draw,
})
