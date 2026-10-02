// mt ch8-s1 次级转运原理：能量接力双引擎 · 三分类 · 化学计量生电性 · 五大超家族
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、能量接力：一级泵与二级泵 =================
  b.panel(30, 132, 660, 453, { title: '一、能量接力：一级泵建梯度、二级泵花梯度' })
  // 共同起点：ATP 直接水解（初级主动转运）
  b.rect(75, 172, 570, 34, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 9 })
  b.ctext(360, 194, 'ATP 直接水解＝初级主动转运（P 型 / V 型泵，第 6–7 章）', { size: 11, weight: 700, fill: C.rnaD })
  // 两列之间的分隔虚线
  b.line(360, 216, 360, 460, { stroke: C.faint, sw: 1.2, dash: '5 5' })
  // 链节点 helper
  const node = (cx: number, y: number, h: number, l1: string, l2: string | null, fill: string, stroke: string, tf: string) => {
    b.rect(cx - 120, y, 240, h, { fill, stroke, sw: 1.8, rx: 9 })
    if (l2) {
      b.ctext(cx, y + h / 2 - 8, l1, { size: 11, weight: 700, fill: tf })
      b.ctext(cx, y + h / 2 + 12, l2, { size: 9.5, fill: C.sub })
    } else {
      b.ctext(cx, y + h / 2 + 5, l1, { size: 11, weight: 700, fill: tf })
    }
  }
  // —— 动物链（Na⁺ 币）——
  b.arrow(195, 208, 195, 230, { stroke: C.sub, sw: 2, marker: 'ink' })
  node(195, 232, 46, '动物 · Na^{+}/K^{+} 泵（一级）', '3 Na^{+} 出 · 2 K^{+} 入', C.proL, C.pro, C.proD)
  b.arrow(195, 278, 195, 290, { stroke: C.bad, sw: 2, marker: 'bad' })
  node(195, 292, 56, 'Na^{+} 电化学梯度（货币库）', '胞外约 145 vs 胞内 10–15 mmol/L', C.badL, C.bad, C.badD)
  b.arrow(195, 348, 195, 360, { stroke: C.bad, sw: 2, marker: 'bad' })
  node(195, 362, 46, '二级泵（以 SGLT 为例）', '2 Na^{+} : 1 葡萄糖', C.accL, C.acc, C.accD)
  b.arrow(195, 408, 195, 420, { stroke: C.ok, sw: 2, marker: 'ok' })
  node(195, 422, 38, '葡萄糖逆梯度上坡入胞', null, C.okL, C.ok, C.okD)
  // —— 植物链（H⁺ 币）——
  b.arrow(525, 208, 525, 230, { stroke: C.sub, sw: 2, marker: 'ink' })
  node(525, 232, 46, '植物 · P3A H^{+}-ATPase（一级）', '1 H^{+} / ATP · 单亚基生电', C.proL, C.pro, C.proD)
  b.arrow(525, 278, 525, 290, { stroke: C.warn, sw: 2, marker: 'warn' })
  node(525, 292, 56, '质子动力势 PMF（货币库）', 'ΔpH ＋ Δψ · 约 −150 ~ −200 mV', C.warnL, C.warn, C.warnD)
  b.arrow(525, 348, 525, 360, { stroke: C.warn, sw: 2, marker: 'warn' })
  node(525, 362, 46, '二级泵（以 SUC 为例）', '1 H^{+} : 1 蔗糖', C.accL, C.acc, C.accD)
  b.arrow(525, 408, 525, 420, { stroke: C.ok, sw: 2, marker: 'ok' })
  node(525, 422, 38, '蔗糖逆梯度装载入韧皮部', null, C.okL, C.ok, C.okD)
  // 货币离子徽记
  b.ion(338, 320, 'Na^{+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(382, 320, 'H^{+}', { r: 11, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  // 底注
  b.wtext(46, 484, '二级泵从不接触 ATP——离子梯度是它们唯一的能量来源；动物质膜的 Na^{+} 循环是化学渗透框架的「换币变体」', { size: 9.5, fill: C.sub, maxW: 620, lh: 23 })
  b.wtext(46, 514, '植物 PMF 随光照、养分与胁迫实时浮动——货币供应的波动本身也是信号：磷酸化级联据此调表', { size: 9.5, fill: C.sub, maxW: 620, lh: 23 })
  b.wtext(46, 544, '动物：十倍浓差叠加负膜电位＝巨大内向电化学势能；植物：PMF 即 ΔpH 与 Δψ 之和（第 6 章）', { size: 9.5, fill: C.sub, maxW: 620, lh: 23 })

  // ================= 二、三分类：同向 · 反向 · 单向 =================
  b.panel(710, 132, 660, 453, { title: '二、三分类：同向 · 反向 · 单向' })
  const cols = [821, 1031, 1259]
  b.tag(cols[0], 181, '同向转运 symport', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700 })
  b.tag(cols[1], 181, '反向转运 antiport', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 11, weight: 700 })
  b.tag(cols[2], 181, '单向转运 uniport', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 11, weight: 700 })
  cols.forEach(cx => {
    b.bilayer(cx - 95, 240, 190)
    b.rect(cx - 30, 224, 60, 46, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  })
  b.text(728, 230, '细胞外', { size: 9, fill: C.mute })
  b.text(728, 276, '细胞质', { size: 9, fill: C.mute })
  // —— 同向：SGLT（Na⁺ 携葡萄糖同入）——
  b.ion(807, 212, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(835, 210, 'Glc', { r: 11, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8 })
  b.arrow(807, 226, 807, 268, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(835, 226, 835, 268, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ion(807, 284, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(835, 284, 'Glc', { r: 11, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8 })
  // —— 反向：NCX（Na⁺ 入换 Ca²⁺ 出）——
  b.ion(1017, 212, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.arrow(1017, 226, 1017, 268, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ion(1017, 284, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(1045, 210, 'Ca^{2+}', { r: 12, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  b.arrow(1045, 270, 1045, 224, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ion(1045, 284, 'Ca^{2+}', { r: 12, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  // —— 单向：GLUT（顺自身梯度）——
  b.ion(1259, 212, 'Glc', { r: 11, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8 })
  b.arrow(1259, 226, 1259, 268, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ion(1259, 284, 'Glc', { r: 11, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8 })
  // 例子清单
  b.ctext(cols[0], 310, '动物：SGLT、NKCC、SLC6', { size: 9.5, fill: C.sub })
  b.ctext(cols[0], 330, '植物：SUC、PHT1、NRT2', { size: 9.5, fill: C.sub })
  b.ctext(cols[1], 310, '动物：NCX、NHE、AE', { size: 9.5, fill: C.sub })
  b.ctext(cols[1], 330, '植物：NHX、CAX、AtCLCa', { size: 9.5, fill: C.sub })
  b.ctext(cols[2], 310, '动物：GLUT 家族', { size: 9.5, fill: C.sub })
  b.ctext(cols[2], 330, '植物：部分 STP 糖载体', { size: 9.5, fill: C.sub })
  b.ctext(cols[2], 350, '（严格说是易化扩散 · 第 5 章）', { size: 9, fill: C.mute })
  // 速率对照（对数尺度）
  b.ctext(1040, 372, '速率对照：通道与转运体差五个数量级（对数尺度）', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1260, 390, '通道：10^{6}–10^{8} 离子/s', { size: 9.5, weight: 600, fill: C.okD })
  b.rect(1190, 396, 140, 18, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 4 })
  b.ctext(980, 446, '转运体：10^{2}–10^{4} 循环/s', { size: 9.5, weight: 600, fill: C.accD })
  b.rect(910, 452, 140, 18, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(1050, 494, '差五个数量级——梯度既是货币也是限速器', { size: 10, weight: 600, fill: C.sub })
  b.arrow(770, 522, 1330, 522, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const ticks: [number, string][] = [[770, '10^{0}'], [910, '10^{2}'], [1050, '10^{4}'], [1190, '10^{6}'], [1330, '10^{8}']]
  ticks.forEach(([tx, lb]) => {
    b.line(tx, 522, tx, 528, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 544, lb, { size: 9.5, fill: C.mute })
  })
  b.wtext(770, 570, '次级转运适合营养摄取的细水长流；毫秒级信号传导仍由通道与电耦合独占', { size: 9.5, fill: C.sub, maxW: 560, lh: 18 })

  // ================= 三、化学计量与生电性 =================
  b.panel(30, 600, 660, 385, { title: '三、化学计量与生电性：EAAT 的奢侈账单' })
  b.text(46, 650, 'EAAT（兴奋性谷氨酸转运体）', { size: 11.5, weight: 700, fill: C.proD })
  b.text(46, 670, '3 Na^{+} ＋ 1 H^{+} ＋ 1 Glu^{-} 同向入 · 1 K^{+} 反向出', { size: 10, fill: C.sub })
  b.text(46, 705, '胞外', { size: 8.5, fill: C.mute })
  b.bilayer(60, 724, 260)
  b.rect(110, 708, 150, 44, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(185, 732, 'EAAT', { size: 10.5, weight: 700, fill: C.proD })
  // 同向底物（3 Na + 1 H + 1 Glu）下行
  const dnX = [128, 156, 184, 212]
  dnX.forEach(x => b.arrow(x, 712, x, 750, { stroke: C.bad, sw: 1.6, marker: 'bad' }))
  b.ion(128, 700, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(156, 700, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(184, 700, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(212, 700, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.arrow(240, 715, 240, 750, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ion(240, 700, 'Glu^{-}', { r: 13, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 7.5 })
  // 反向 K⁺ 上行
  b.ion(285, 694, 'K^{+}', { r: 10, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.arrow(285, 762, 285, 702, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.ion(285, 780, 'K^{+}', { r: 10, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.text(46, 770, '胞质', { size: 8.5, fill: C.mute })
  b.tag(180, 822, '每轮净内移 +2', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10.5, weight: 700 })
  b.wtext(46, 852, '「奢侈」的配比把摄取做成几乎不可逆的单向阀；突触间隙的谷氨酸既是递质又是兴奋性毒素，清除必须迅速而彻底，多花几个离子买断「倒灌」风险', { size: 9.5, fill: C.sub, maxW: 300, lh: 23 })
  b.wtext(46, 942, 'EAAT 的 Cl^{-} 电导＝「转运体偶发变通道」的一例（见右下注记）', { size: 9.5, fill: C.sub, maxW: 300, lh: 18 })
  // 右列：计量速查表
  b.text(350, 650, '化学计量速查：电中性 vs 生电', { size: 11.5, weight: 700, fill: C.ink })
  b.table(350, 664, 316, {
    headers: ['成员', '化学计量 · 电学'],
    colW: [64, 252], rowH: 30, fontSize: 10,
    rows: [
      ['NHE', '1 Na^{+}:1 H^{+} · 电中性'],
      ['NKCC', '1 Na^{+}:1 K^{+}:2 Cl^{-} · 电中性'],
      ['SGLT1', '2 Na^{+}:1 葡萄糖 · 生电（+1）'],
      ['NCX', '3 Na^{+}:1 Ca^{2+} · 生电（+1）'],
    ],
  })
  b.wtext(350, 852, '生电性转运同时感受浓度梯度与膜电位——膜电位去极化到足够程度时，转运体可被反向驱动（NCX 反转的病理意义见第二节）', { size: 9.5, fill: C.sub, maxW: 316, lh: 23 })

  // ================= 四、五大超家族与化学渗透统一框架 =================
  b.panel(710, 600, 660, 385, { title: '四、五大结构超家族与化学渗透统一框架' })
  const fam = (x: number, name: string, s1: string, s2: string, s3: string) => {
    b.rect(x, 640, 118, 88, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
    b.ctext(x + 59, 662, name, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(x + 59, 682, s1, { size: 8.5, fill: C.sub })
    b.ctext(x + 59, 698, s2, { size: 8.5, fill: C.sub })
    b.ctext(x + 59, 714, s3, { size: 8.5, fill: C.mute })
  }
  fam(726, 'MFS', '主要易化超家族', '12 或 14 TMS', 'GLUT·SUC·NPF')
  fam(851, 'APC', '氨基酸·多胺·', '有机阳离子超家族', '可双向工作')
  fam(976, 'CPA', '阳离子:H^{+} 反向', 'NHE·NHX/CHX', '动物 SLC9 归此')
  fam(1101, 'NCX/CBX', 'Ca^{2+}/阳离子', '交换体家族', 'NCX·CAX 老家')
  fam(1226, 'NSS', '神经递质钠同向', '＝动物 SLC6', 'DAT·SERT·GAT')
  b.ctext(1040, 752, '共同设计原则：交替通路（alternating access）——结合口袋经构象变化交替向膜两侧开放，绝不同时两侧打开', { size: 10, weight: 600, fill: C.sub })
  // Mitchell 化学渗透横幅
  b.rect(726, 772, 628, 84, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 9 })
  b.ctext(1040, 794, '统一框架：化学渗透学说（Mitchell，1961）', { size: 12, weight: 700, fill: C.dnaD })
  b.wtext(742, 816, '离子梯度即能量货币：线粒体与叶绿体用 H^{+} 梯度合成 ATP，细菌质膜用 H^{+} 梯度驱动鞭毛与营养摄取，植物质膜用 H^{+} 梯度驱动吸收；动物把 H^{+} 换成 Na^{+}——Mitchell 因此获 1978 年诺贝尔化学奖', { size: 9.5, fill: C.dnaD, maxW: 596, lh: 21 })
  // SGLT 漏流注记
  b.rect(726, 868, 628, 106, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 9 })
  b.text(742, 890, '注记：SGLT 无糖时的 Na^{+} 漏流——底物门控的通道样行为', { size: 11, weight: 700, fill: C.warnD })
  b.wtext(742, 910, '先行结合：胞外 Na^{+} 浓度高使结合概率大增、率先登位，把转运体推入面向外构象并提高糖亲和力，葡萄糖随后上车；若无糖「压舱」，结合了 Na^{+} 的 SGLT 会以低概率直接让 Na^{+} 漏过——EAAT 的 Cl^{-} 电导、SERT 的基态漏流皆同谱；生理下占比极小，药物或突变将其放大后可致电解质扰动', { size: 9.5, fill: C.sub, maxW: 596, lh: 21 })
}

export default scene({
  title: '次级主动转运原理：梯度货币与交替通路',
  subtitle: '一级泵建梯度、二级泵花梯度：动物铸 Na^{+} 币（胞外 145 对胞内 10–15 mmol/L），植物铸 PMF（约 −150~−200 mV）；同向 / 反向 / 单向三分类，化学计量决定生电性（EAAT 3Na^{+}:1H^{+}:1Glu^{-} 外加反向 1K^{+} 的奢侈单向阀）；MFS · CPA · APC · NCX/CBX · NSS 五大超家族共享交替通路，Mitchell 化学渗透学说（1961，1978 诺奖）统一动植两界',
  draw,
})
