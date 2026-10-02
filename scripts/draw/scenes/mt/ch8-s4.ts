// mt ch8-s4 驱动离子对照：两套货币大表 · 钙外排殊途同归 · 环境化学约束 · 混用反向哲学
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、两套货币的大表 =================
  b.panel(30, 132, 1340, 415, { title: '一、两套货币的大表：同一需求、两种支付' })
  b.table(60, 190, 920, {
    headers: ['溶质', '动物（Na^{+} 梯度支付）', '植物（H^{+} 梯度支付）'],
    colW: [110, 405, 405], rowH: 36, fontSize: 12,
    rows: [
      ['糖', 'SGLT1/2（肠、肾）', 'SUC 蔗糖装载（韧皮部）'],
      ['氨基酸 / 肽', 'SLC6、LAT 交换', 'AAP/LHT 同向'],
      ['无机氮', '以氨基酸形式获取氮', 'NRT1/NRT2、AMT1'],
      ['磷', 'NaPi-II（SLC34）', 'PHT1'],
      ['硫', 'NaS1（SLC13）', 'SULTR'],
      ['钙外排', 'NCX（3 Na^{+}:1 Ca^{2+}）', 'CAX（多 H^{+}:1 Ca^{2+}）'],
      ['钠的管理', 'NHE3（Na^{+} 进、H^{+} 出）', 'SOS1（H^{+} 进、Na^{+} 出）'],
    ],
  })
  b.rect(60, 502, 920, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 9 })
  b.ctext(520, 527, '动物一栏几乎全写 Na^{+}：SGLT·NKCC·NHE·NCX·SLC6 ｜ 植物一栏几乎全写 H^{+}：SUC·NRT·AMT·PHT·SULTR·LHT', { size: 10.5, weight: 600, fill: C.dnaD })
  // 右列：边界的互借票据
  b.text(1002, 196, '边界的互借票据', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(1000, 208, 366, 92, { fill: '#ffffff', stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(1012, 230, '动物端的 H^{+} 票据', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(1012, 250, '肠 PEPT1（SLC15A1）以 H^{+} 梯度吸收二肽；腔内微酸由 NHE3 亲手营造；溶酶体与突触囊泡腔内更是 H^{+} 的天下', { size: 9, fill: C.sub, maxW: 342, lh: 20 })
  b.rect(1000, 312, 366, 92, { fill: '#ffffff', stroke: C.dna, sw: 1.5, rx: 8 })
  b.text(1012, 334, '植物端的 Na^{+} 票据', { size: 10.5, weight: 700, fill: C.dnaD })
  b.wtext(1012, 354, '海藻与硅藻的质膜上不乏 Na^{+} 偶联的摄取系统；浸泡在海水里的「植物」，口袋里同样装着钠', { size: 9, fill: C.sub, maxW: 342, lh: 20 })
  b.rect(1000, 416, 366, 70, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(1012, 436, '「动物不用 H^{+}」说的是质膜主流经济，而非绝对禁区；环境决定货币的规律，恰在例外中再次显形', { size: 9, fill: C.sub, maxW: 342, lh: 20 })

  // ================= 二、钙外排殊途同归 =================
  b.panel(30, 560, 440, 425, { title: '二、钙外排殊途同归：借单价梯度抬二价' })
  b.wtext(46, 612, '胞质游离 Ca^{2+} 压在 10^{-7} mol/L 量级、胞外约 10^{-3}——跨膜四个数量级使钙成为「开即全开」的信号；外排逆梯度，代价高昂', { size: 10, fill: C.sub, maxW: 408, lh: 23 })
  // —— 动物 NCX ——
  b.text(46, 660, '动物：NCX · 3 Na^{+} 入 : 1 Ca^{2+} 出（NCX/CBX 家族）', { size: 10.5, weight: 700, fill: C.ink })
  b.bilayer(56, 712, 390)
  b.rect(150, 698, 90, 42, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(195, 722, 'NCX', { size: 10, weight: 700, fill: C.proD })
  ;[150, 185, 220].forEach(x => b.arrow(x, 690, x, 736, { stroke: C.bad, sw: 1.6, marker: 'bad' }))
  b.ion(150, 680, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(185, 680, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(220, 680, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.arrow(330, 750, 330, 700, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ion(330, 764, 'Ca^{2+}', { r: 12, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  b.text(46, 780, '细胞外', { size: 8.5, fill: C.mute })
  b.text(46, 748, '细胞质', { size: 8.5, fill: C.mute })
  // —— 植物 CAX（液泡膜）——
  b.text(46, 806, '植物：CAX · 多 H^{+} 入 : 1 Ca^{2+} 压入液泡（CPA 家族）', { size: 10.5, weight: 700, fill: C.ink })
  b.text(46, 832, '细胞质', { size: 8.5, fill: C.mute })
  b.bilayer(56, 850, 390)
  b.rect(150, 836, 90, 42, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(195, 860, 'CAX', { size: 10, weight: 700, fill: C.proD })
  b.arrow(330, 830, 330, 866, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ion(330, 818, 'Ca^{2+}', { r: 12, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  ;[150, 185, 220].forEach(x => b.arrow(x, 886, x, 842, { stroke: C.warn, sw: 1.6, marker: 'warn' }))
  b.ion(150, 898, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(185, 898, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(220, 898, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.text(46, 906, '液泡（H^{+} 库·V 型泵充值）', { size: 8.5, fill: C.mute })
  b.wtext(46, 940, '配速各有讲究：NCX 容量大、亲和低（心肌舒张冲刺窗口）；CAX 低速持续压回静息线。计量与家族皆异、逻辑如一——功能趋同的干净案例；CAX 另有兼运锰的「混装」版', { size: 9, fill: C.sub, maxW: 408, lh: 19 })

  // ================= 三、为什么不混用 =================
  b.panel(475, 560, 440, 425, { title: '三、为什么不混用：环境化学的约束' })
  b.text(491, 612, '答案写在环境化学里——动物承袭海水、植物扎根土壤', { size: 10, fill: C.sub })
  b.rect(491, 628, 198, 160, { fill: '#ffffff', stroke: C.acc, sw: 1.6, rx: 8 })
  b.text(503, 650, '动物：富钠体液', { size: 11, weight: 700, fill: C.accD })
  b.wtext(503, 670, '血浆 Na^{+} 约 145 mmol/L、稳定富余，钠泵随时补充；余额充足的活期账户', { size: 9, fill: C.sub, maxW: 174, lh: 20 })
  b.wtext(503, 732, 'pH 钉死 7.4：H^{+} 仅约 4×10^{-8} mol/L；把 H^{+} 当通货＝把央行开在火山口（容许带 7.35–7.45）', { size: 9, fill: C.sub, maxW: 174, lh: 20 })
  b.rect(701, 628, 198, 160, { fill: '#ffffff', stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(713, 650, '植物：贫钠土壤', { size: 11, weight: 700, fill: C.dnaD })
  b.wtext(713, 670, '土壤 pH 约 4–7、H^{+} 摆动数个数量级；Na^{+} 在多数生境稀缺，盐渍土反而过量成毒', { size: 9, fill: C.sub, maxW: 174, lh: 20 })
  b.wtext(713, 732, '两种外源候选货币都不稳定；解法＝自造货币、发行权自办', { size: 9, fill: C.sub, maxW: 174, lh: 20 })
  b.rect(491, 800, 408, 92, { fill: '#ffffff', stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(503, 820, '缺铁 Strategy I：自造货币的极致', { size: 10.5, weight: 700, fill: C.warnD })
  b.wtext(503, 840, '上调 H^{+}-ATPase（配合 FRO 还原酶与 IRT1 转运体）主动拉低根际 pH 溶解铁；根系呼吸释放 CO_{2}、质子分泌持续酸化根际——发行权握在自己手里，不受土壤行情摆布', { size: 9, fill: C.sub, maxW: 380, lh: 20 })
  b.wtext(491, 912, '植物的质子账记在质外体与液泡两个「离岸账户」，胞质 pH 稳在 7 附近；盐生植物把 Na^{+} 囤入液泡当廉价渗透调节剂——储值而不入主流', { size: 9, fill: C.sub, maxW: 408, lh: 19 })

  // ================= 四、混用的实例与反向哲学 =================
  b.panel(920, 560, 450, 425, { title: '四、混用的实例：同一个交换体、两种世界观' })
  b.text(936, 612, '同一个交换体的几何，两种「谁养谁」的世界观', { size: 10, fill: C.sub })
  // —— SOS1（耐盐植物）——
  b.text(936, 640, '耐盐植物 SOS1（质膜）', { size: 10, weight: 700, fill: C.ink })
  b.bilayer(936, 690, 186)
  b.rect(1010, 676, 60, 42, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1040, 700, 'SOS1', { size: 9, weight: 700, fill: C.proD })
  b.ion(975, 660, 'H^{+}', { r: 10, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.arrow(975, 670, 975, 712, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ion(1080, 734, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.arrow(1080, 726, 1080, 682, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.text(936, 758, 'H^{+} 是钱', { size: 8.5, weight: 600, fill: C.accD })
  b.text(1028, 758, 'Na^{+} 是毒 · 清场', { size: 8.5, weight: 600, fill: C.badD })
  // —— NHE3（动物肠）——
  b.text(1146, 640, '动物肠 NHE3（顶膜）', { size: 10, weight: 700, fill: C.ink })
  b.bilayer(1146, 690, 186)
  b.rect(1220, 676, 60, 42, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1250, 700, 'NHE3', { size: 9, weight: 700, fill: C.proD })
  b.ion(1185, 660, 'Na^{+}', { r: 10, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.arrow(1185, 670, 1185, 712, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ion(1290, 734, 'H^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.arrow(1290, 726, 1290, 682, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.text(1146, 758, 'Na^{+} 是资源', { size: 8.5, weight: 600, fill: C.accD })
  b.text(1242, 758, 'H^{+} 是酸 · 清场', { size: 8.5, weight: 600, fill: C.badD })
  // SOS 级联注记
  b.wtext(936, 786, 'SOS3（钙传感器）–SOS2（激酶）磷酸化激活 SOS1；盐胁迫的钙签名被解码为对外排泵的授权——感知、决策、执行装进一个模块的遗传学经典', { size: 9, fill: C.sub, maxW: 418, lh: 20 })
  // 毒物处置三件套
  b.text(936, 846, '植物的 Na^{+} 管理＝毒物处置（第 12 章）', { size: 9.5, weight: 700, fill: C.sub })
  b.tag(1000, 874, 'SOS1 外排', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 9, weight: 600 })
  b.tag(1120, 874, 'NHX1 液泡隔离', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 9, weight: 600 })
  b.tag(1250, 874, 'HKT1 木质部回收', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 9, weight: 600 })
  // 金句横幅
  b.rect(936, 900, 418, 74, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 9 })
  b.ctext(1145, 926, '驱动离子的选择是环境化学的镜像——海水的钠、土壤的酸', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(1145, 948, '动物富钠故用钠；植物自产酸故用酸；两端都拿单价梯度抬二价钙', { size: 9.5, fill: C.dnaD })
  b.ctext(1145, 966, '深海碱性热液假说：先有梯度后有泵、先有货币后有银行', { size: 9, fill: C.dnaD })
}

export default scene({
  title: '驱动离子对照：动物用钠、植物用酸',
  subtitle: '同一需求、两种支付：七行大表里动物一栏几乎全写 Na^{+}（SGLT·NKCC·NHE·NCX·SLC6），植物一栏几乎全写 H^{+}（SUC·NRT·AMT·PHT·SULTR·LHT）；钙外排殊途同归（NCX 3Na^{+}:1Ca^{2+} 对 CAX 多 H^{+}:1Ca^{2+}，都借单价梯度抬二价）；动物血浆 Na^{+} 约 145 mmol/L 稳定富余、植物自产 H^{+}（缺铁 Strategy I 酸化根际）；SOS1 与 NHE3 哲学互逆——驱动离子的选择是环境化学的镜像：海水的钠、土壤的酸',
  draw,
})
