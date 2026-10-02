// mt ch12-s2 植物逆境转运：SOS 全链条 · NHX1/HKT1 止损 · ABA 级联 · miR399 网络 · 逆境大表
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、盐胁迫全链条：从感知到外排（SOS 通路） =================
  b.panel(30, 132, 660, 445, { title: '一、盐胁迫全链条：从感知到外排（SOS 通路）' })
  b.text(46, 172, '土壤盐化＝渗透胁迫＋离子胁迫双重胁迫——全球约两成灌溉农田受威胁', { size: 8.5, fill: C.sub })
  b.text(46, 196, '质外体（高 Na^{+}）', { size: 9, fill: C.mute })
  // —— 根细胞与质膜 ——
  b.rect(46, 222, 354, 200, { fill: '#f8fafc', stroke: C.line, sw: 1, rx: 8 })
  b.bilayer(60, 208, 340, { h: 14 })
  b.ion(100, 182, 'Na^{+}', { r: 9, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.text(160, 190, 'Na^{+} 经 NSCC 内流', { size: 8, fill: C.badD })
  b.rect(100, 200, 60, 44, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(130, 218, 'NSCC', { size: 10, weight: 700, fill: C.accD })
  b.ctext(130, 234, 'CNGC·GLR', { size: 7.5, fill: C.sub })
  b.ctext(130, 258, '非选择性阳离子通道', { size: 7.5, fill: C.mute })
  // 胞质钙波
  b.circle(250, 285, 38, { fill: 'none', stroke: C.enz, sw: 1.4, opacity: 0.3 })
  b.circle(250, 285, 26, { fill: 'none', stroke: C.enz, sw: 1.6, opacity: 0.5 })
  b.circle(250, 285, 14, { fill: 'none', stroke: C.enz, sw: 1.8, opacity: 0.8 })
  b.ion(250, 283, 'Ca^{2+}', { r: 11, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 8 })
  b.ctext(250, 340, '胞质钙波（数秒–数分钟）', { size: 8.5, weight: 600, fill: C.enzD })
  b.arrow(215, 340, 160, 354, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  // SOS3-SOS2 复合体
  b.rect(60, 356, 130, 56, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(125, 378, 'SOS3／CBL4', { size: 9.5, weight: 700, fill: C.proD })
  b.ctext(125, 394, '豆蔻酰化钙感受器', { size: 7.5, fill: C.sub })
  b.arrow(192, 384, 208, 384, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.rect(210, 356, 130, 56, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(275, 378, 'SOS2／CIPK24', { size: 9.5, weight: 700, fill: C.proD })
  b.ctext(275, 394, '丝氨酸／苏氨酸激酶', { size: 7.5, fill: C.sub })
  // SOS1：质膜 Na⁺/H⁺ 反向转运体
  b.rect(300, 200, 76, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(338, 218, 'SOS1', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(338, 234, 'Na^{+}/H^{+} 外排', { size: 7.5, fill: C.sub })
  b.arrow(320, 354, 340, 248, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.circle(390, 300, 10, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(390, 304, 'P', { size: 9.5, weight: 700, fill: C.enzD })
  b.ctext(390, 322, '磷酸化', { size: 8, fill: C.enzD })
  b.ion(322, 176, 'Na^{+}', { r: 9, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.arrow(322, 198, 322, 187, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.ion(360, 176, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8 })
  b.arrow(360, 198, 360, 252, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.ctext(360, 275, 'H^{+} 顺势内流', { size: 7.5, fill: C.warnD })
  b.text(46, 440, '根细胞（根尖区）', { size: 9, fill: C.mute })
  // —— 右：级联要点 ——
  b.text(420, 190, '级联要点', { size: 11, weight: 700, fill: C.sub })
  b.wtext(420, 214, '感知即钙：Na^{+} 内流后数秒至数分钟，特征性胞质 Ca^{2+} 波启动级联', { size: 9, fill: C.sub, maxW: 250, lh: 20 })
  b.wtext(420, 258, 'SOS3 读钙招募 SOS2，复合体磷酸化 SOS1——其长胞质尾既是磷酸化靶，又是自抑制开关', { size: 9, fill: C.sub, maxW: 250, lh: 20 })
  b.wtext(420, 330, '盐害的化学本质：Na^{+} 与 K^{+} 同为一价、半径相近，胞质酶只认 K^{+}——钠的「冒名顶替」挤占数百种酶与核糖体的钾结合位', { size: 9, fill: C.sub, maxW: 250, lh: 20 })
  b.wtext(420, 425, '容量账：胞质酶系对 Na^{+} 的耐受上限约几十 mmol/L，液泡可囤到数百 mmol/L——隔离一开，存活阈值成倍上移（右图）', { size: 9, fill: C.sub, maxW: 250, lh: 20 })
  b.wtext(46, 492, '外排不行，才谈隔离：SOS 通路由拟南芥 sos1／sos2／sos3 盐超敏突变体遗传定义，是植物耐盐的第一道防线', { size: 9, fill: C.sub, maxW: 354, lh: 19 })

  // ================= 二、两步止损：液泡隔离与木质部回收 =================
  b.panel(710, 132, 660, 445, { title: '二、两步止损：液泡隔离与木质部回收' })
  // —— 左：根细胞与液泡 ——
  b.rect(726, 190, 280, 250, { fill: '#f8fafc', stroke: C.sub, sw: 1.6, rx: 10 })
  b.text(742, 210, '根细胞（成熟区）', { size: 9, fill: C.mute })
  b.rect(746, 250, 240, 150, { fill: C.okL, stroke: C.ok, sw: 2.2, rx: 14 })
  b.text(762, 272, '液泡', { size: 10, weight: 700, fill: C.okD })
  b.text(762, 292, 'Na^{+} 数百 mmol/L', { size: 8.5, fill: C.okD })
  ;([[880, 308], [920, 338], [884, 360], [940, 372]] as [number, number][]).forEach(([x, y]) => {
    b.ion(x, y, 'Na^{+}', { r: 8, fill: '#ffffff', stroke: C.ok, tfill: C.okD, size: 6.5 })
  })
  // 液泡膜上的三类蛋白
  b.rect(748, 232, 56, 36, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 6 })
  b.ctext(776, 254, 'V-ATPase', { size: 8, weight: 700, fill: C.warnD })
  b.rect(812, 232, 60, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(842, 250, 'NHX1', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(842, 264, 'Na^{+}/H^{+}', { size: 7, fill: C.sub })
  b.rect(880, 232, 56, 36, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 6 })
  b.ctext(908, 254, 'V-PPase', { size: 8, weight: 700, fill: C.warnD })
  b.arrow(776, 270, 776, 284, { stroke: C.warn, sw: 1.5, marker: 'warn' })
  b.arrow(908, 270, 908, 284, { stroke: C.warn, sw: 1.5, marker: 'warn' })
  b.ion(842, 210, 'Na^{+}', { r: 8, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7 })
  b.arrow(842, 220, 842, 230, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.tag(866, 420, '以盐代钾——既移出酶射程，又以盐维持膨压', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 9, weight: 600 })
  b.text(726, 458, '胞质：酶系对 Na^{+} 耐受上限约几十 mmol/L', { size: 8.5, fill: C.sub })
  // —— 右：木质部回收 ——
  b.circle(1150, 300, 78, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  b.circle(1150, 300, 26, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(1150, 304, '木质部', { size: 8.5, weight: 700, fill: C.accD })
  b.rect(1118, 258, 66, 34, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(1151, 280, 'HKT1;1', { size: 8.5, weight: 700, fill: C.accD })
  b.arrow(1150, 296, 1150, 240, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ion(1150, 228, 'Na^{+}', { r: 8, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7 })
  b.ctext(1150, 208, '从木质部液回收 Na^{+}', { size: 8.5, weight: 600, fill: C.sub })
  b.arrow(1170, 352, 1170, 318, { stroke: C.mute, sw: 1.5, marker: 'mute', dash: '4 3' })
  b.ctext(1150, 396, '木质部薄壁拦截盐随蒸腾流上攻', { size: 8.5, fill: C.sub })
  b.tag(1150, 424, '水稻 SKC1＝OsHKT1;5', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8.5, weight: 700 })
  b.wtext(1030, 452, '启动子活性决定回收能力——耐盐 QTL 标记辅助育种的明星，护地上部光合组织', { size: 8.5, fill: C.sub, maxW: 330, lh: 18 })
  // —— 底条：三件套与育种 ——
  b.text(726, 500, '耐盐三件套（时空分工）与育种', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(790, 524, '根尖：SOS1 外排', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 8.5, weight: 600 })
  b.tag(950, 524, '成熟根：NHX1 隔离', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8.5, weight: 600 })
  b.tag(1115, 524, '茎基：HKT1;1 回收', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8.5, weight: 600 })
  b.wtext(726, 552, 'AtNHX1 过表达番茄在 200 mmol/L NaCl 中仍能结果；SOS1＋NHX1 组合转基因随后在小麦、水稻与棉花兑现；「海水稻」在 0.3%–0.6% 盐度滩涂稳定结籽，汇集自然耐盐等位', { size: 8.5, fill: C.sub, maxW: 630, lh: 18 })

  // ================= 三、干旱与低磷：ABA 关门与 miR399 调兵 =================
  b.panel(30, 592, 660, 393, { title: '三、干旱：ABA 级联；低磷：miR399 调兵' })
  // —— 左列：干旱 ——
  b.text(46, 634, '干旱：ABA 级联与水路管制', { size: 11, weight: 700, fill: C.sub })
  const cas = (y: number, s: string, fl: string, st: string, tf: string) =>
    b.tag(190, y, s, { fill: fl, stroke: st, tfill: tf, size: 9, weight: 700 })
  cas(660, '根源 ABA', C.rnaL, C.rna, C.rnaD)
  b.arrow(190, 672, 190, 684, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  cas(696, 'PYR／RCAR 受体', C.accL, C.acc, C.accD)
  b.arrow(190, 708, 190, 720, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  cas(732, 'PP2C 被抑制', C.badL, C.bad, C.badD)
  b.arrow(190, 744, 190, 756, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  cas(768, 'OST1 激酶释放', C.enzL, C.enz, C.enzD)
  b.arrow(190, 780, 190, 792, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  cas(804, 'SLAC1 磷酸化·气孔关', C.okL, C.ok, C.okD)
  // 气孔开/关 mini
  b.circle(271, 700, 11, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.circle(299, 700, 11, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(285, 734, '气孔开', { size: 8, fill: C.mute })
  b.circle(281, 760, 11, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.circle(289, 760, 11, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(285, 794, '气孔关', { size: 8, fill: C.okD })
  b.wtext(46, 838, 'PYR-PP2C-OST1-SLAC1：ABA 结合受体、抑制 PP2C，释放 OST1 磷酸化 SLAC1 阴离子通道——气孔关闭，蒸腾先压下来', { size: 8.5, fill: C.sub, maxW: 290, lh: 20 })
  b.wtext(46, 898, '同时下调根与叶的 PIP 水通道：膜水力导度降低、土壤-大气「漏水」减少——代价是整株水流放缓、光合原料输送延迟', { size: 8.5, fill: C.sub, maxW: 290, lh: 20 })
  b.wtext(46, 958, '渗透调节跟上：囤积 K^{+}、脯氨酸与蔗糖，把细胞维持在可吸水的渗透势', { size: 8.5, fill: C.sub, maxW: 290, lh: 19 })
  // —— 右列：低磷 ——
  b.text(360, 634, '低磷：miR399 系统性调兵', { size: 11, weight: 700, fill: C.sub })
  const ph = (y: number, s: string, fl: string, st: string, tf: string) =>
    b.tag(480, y, s, { fill: fl, stroke: st, tfill: tf, size: 9, weight: 700 })
  ph(660, 'PHR1（磷响应总开关）', C.proL, C.pro, C.proD)
  b.arrow(480, 674, 480, 686, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  ph(698, 'miR399 上调', C.rnaL, C.rna, C.rnaD)
  b.arrow(480, 712, 480, 724, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  ph(736, '韧皮部长途下运', C.accL, C.acc, C.accD)
  b.arrow(480, 750, 480, 762, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  ph(774, 'PHO2 mRNA 降解', C.enzL, C.enz, C.enzD)
  b.arrow(480, 788, 480, 800, { stroke: C.sub, sw: 1.5, marker: 'mute' })
  ph(812, 'PHT1 扩编·高亲和磷摄取', C.okL, C.ok, C.okD)
  b.rect(575, 646, 90, 48, { fill: C.panelB, stroke: C.pro, sw: 1.4, rx: 7, dash: '4 3' })
  b.ctext(620, 666, 'SPX 监视', { size: 8.5, weight: 700, fill: C.proD })
  b.ctext(620, 682, 'InsP_{8} 仪表', { size: 7.5, fill: C.sub })
  b.arrow(575, 670, 560, 666, { stroke: C.pro, sw: 1.5, marker: 'pro', dash: '4 3' })
  b.wtext(360, 846, '磷足时 SPX 扣押 PHR1，磷饥时放行；放行的 PHR1 上调 miR399，经韧皮部下运到根，靶向降解 PHO2（泛素结合酶）的 mRNA', { size: 8.5, fill: C.sub, maxW: 300, lh: 20 })
  b.wtext(360, 906, '番茄 miR399 过表达株在地上部累积过量磷——负反馈链的正向证据；miR399 是首例被证明跨器官长距离运输、在根部行使功能的植物 microRNA', { size: 8.5, fill: C.sub, maxW: 300, lh: 19 })
  b.wtext(360, 962, '同型逻辑：低氮诱导 NRT2／AMT，低钾扩编 HAK5，低铁上调 IRT1——饥饿感翻译为转运体的扩编令', { size: 8.5, fill: C.sub, maxW: 300, lh: 19 })

  // ================= 四、逆境响应总表 =================
  b.panel(710, 592, 660, 393, { title: '四、逆境响应总表：感知×转运响应×农艺抓手' })
  b.table(730, 648, 620, {
    headers: ['逆境', '感知信号', '关键转运响应', '农艺抓手'],
    colW: [78, 118, 258, 166],
    rowH: 36,
    fontSize: 8.4,
    rows: [
      ['盐（Na^{+}）', '胞质 Ca^{2+} 波', 'SOS1 外排·NHX1 液泡隔离·HKT1;1 木质部回收', 'OsHKT1;5（SKC1）位点、海水稻'],
      ['干旱', '根源 ABA', 'SLAC1 关闭气孔·PIP 下调·渗透物囤积', '气孔导度与根构型选择'],
      ['低磷', 'SPX-InsP_{8} 监视 PHR1', 'miR399-PHO2-PHT1 扩编·排根泌酸', '磷效率基因型'],
      ['低钾', '膜去极化低钾信号', 'HAK5 诱导·AKT1 经 CBL-CIPK 激活', '钾效率育种'],
      ['淹水低氧', '低氧与 NO 信号', '通气组织形成（皮层细胞程序性死亡）', '耐涝品种'],
      ['重金属', '根系感知', 'ABC／MTP 液泡隔离·根系阻滞', '低镉水稻等低累积品种'],
    ],
  })
  b.wtext(730, 930, '设计哲学：感知（钙波·ABA·SPX 仪表）→ 决策（激酶与转录因子）→ 执行（外排·隔离·回收·扩编）——与动物上皮 WNK 感知 Cl^{-}→SPAK/OSR1→NKCC/KCC 结构同构；凡逆境下失守的通路平时必然承重，凡被诱导的转运体就是育种该抓住的手柄', { size: 9, fill: C.sub, maxW: 620, lh: 19 })
}

export default scene({
  title: '植物的逆境转运：盐、旱与养分饥饿',
  subtitle:
    '盐胁迫 SOS 全链条：Na⁺ 经 NSCC 内流触发胞质钙波，SOS3/CBL4-SOS2/CIPK24 级联磷酸化 SOS1 外排；NHX1 液泡隔离「以盐代钾」，HKT1;1 木质部回收护地上部（水稻 SKC1＝OsHKT1;5）；干旱 PYR-PP2C-OST1-SLAC1 关闭气孔并下调 PIP；低磷 PHR1-miR399-PHO2-PHT1 调兵；AtNHX1 番茄耐 200 mmol/L NaCl',
  draw,
})
