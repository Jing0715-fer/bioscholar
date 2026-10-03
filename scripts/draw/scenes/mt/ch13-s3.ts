// mt ch13-s3 类囊体膜：光驱动 H⁺ 泵与电中性回路 · ΔpH 三份工 · 酸跳实验与两界统一
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、光驱动的质子回路与电中性 =================
  b.panel(30, 132, 660, 455, { title: '一、光泵质子与 K⁺/Cl⁻ 电中性回路' })
  // 腔
  b.rect(46, 176, 610, 66, { fill: C.warnL, stroke: C.warn, sw: 1.2, dash: '5,4', rx: 8 })
  b.text(60, 196, '类囊体腔', { size: 10.5, weight: 700, fill: C.warnD })
  b.tag(180, 196, 'pH 5.5–6.0', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10, weight: 700 })
  b.tag(320, 196, 'ΔpH 2–3 单位（每单位约 59 mV）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 9, weight: 700 })
  b.ion(560, 192, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(590, 206, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(620, 192, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  // 类囊体膜
  b.bilayer(46, 254, 610, { h: 12, tint: C.rna })
  b.text(46, 244, '类囊体膜', { size: 9, fill: C.mute })
  // 光系统与 b6f
  b.rect(80, 246, 46, 28, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(103, 264, 'PSII', { size: 8.5, weight: 700, fill: C.okD })
  b.rect(146, 246, 40, 28, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(166, 264, 'b₆f', { size: 8.5, weight: 700, fill: C.accD })
  b.rect(206, 246, 40, 28, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(226, 264, 'PSI', { size: 8.5, weight: 700, fill: C.okD })
  b.arrow(126, 260, 146, 260, { stroke: C.acc, sw: 1.6 })
  b.arrow(186, 260, 206, 260, { stroke: C.acc, sw: 1.6 })
  b.ion(103, 222, 'H^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.arrow(103, 230, 103, 246, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(166, 222, 'H^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.arrow(166, 230, 166, 246, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.text(60, 234, '2H₂O→O₂＋4H⁺', { size: 7.4, fill: C.okD })
  b.tag(238, 214, '光驱动泵入', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7.5, weight: 700 })
  // KEA3
  b.rect(300, 246, 44, 28, { fill: C.dnaL, stroke: C.dna, sw: 2.2 })
  b.ctext(322, 264, 'KEA3', { size: 8.5, weight: 700, fill: C.dnaD })
  b.ion(306, 222, 'H^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.arrow(306, 246, 306, 230, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(340, 296, 'K^{+}', { r: 8, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7 })
  b.arrow(340, 288, 340, 246, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.text(330, 316, '可调质子泄漏阀', { size: 8.2, weight: 700, fill: C.dnaD })
  b.wtext(330, 328, 'H⁺ 回基质、K⁺ 顶进腔，在 ΔpH/ΔΨ 间再分配', { size: 7.6, fill: C.sub, maxW: 138, lh: 13 })
  // VCCN1
  b.rect(480, 246, 44, 28, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(502, 264, 'VCCN1', { size: 8.2, weight: 700, fill: C.proD })
  b.ion(486, 296, 'Cl⁻', { r: 8, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  b.arrow(486, 288, 486, 246, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.text(486, 316, '电压依赖 Cl⁻ 通道', { size: 8.2, weight: 700, fill: C.proD })
  b.wtext(486, 328, '阴离子进腔对冲 H⁺ 泵入的正电荷积累', { size: 7.6, fill: C.sub, maxW: 150, lh: 13 })
  // TPK3
  b.rect(580, 246, 44, 28, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(602, 264, 'TPK3', { size: 8.2, weight: 700, fill: C.accD })
  b.ion(586, 222, 'K^{+}', { r: 8, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7 })
  b.arrow(586, 246, 586, 230, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  // ATP 合酶
  b.rect(390, 246, 34, 28, { fill: C.rnaL, stroke: C.rna, sw: 2.2 })
  b.ctext(407, 262, 'c₁₄', { size: 7.8, weight: 700, fill: C.rnaD })
  b.rect(382, 232, 50, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  b.ctext(407, 244, 'CF₁', { size: 6.8, weight: 700, fill: C.enzD })
  b.ion(420, 222, 'H^{+}', { r: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.arrow(420, 230, 407, 232, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.ctext(407, 300, '约 4.7 H⁺/ATP', { size: 7.2, weight: 700, fill: C.rnaD })
  // 基质
  b.text(46, 344, '基质（pH 约 7.5–8.0）', { size: 10, fill: C.mute })
  b.wtext(46, 372, '电中性逻辑：每泵入一个 H⁺ 抬一分膜电位，几十 mV 即反顶质子泵——K⁺/Cl⁻「有借有还」把膜电位钳在低位，ΔpH 成为 pmf 主要储库（常占九成上下）', { size: 8.6, fill: C.sub, maxW: 612, lh: 16 })
  b.wtext(46, 414, '渗透红利：K⁺/Cl⁻ 进出缓冲腔内水分与体积，类囊体强光下的膨胀也归它管；NPQ（PsbS 感知基质侧 H⁺）是 ΔpH 的另一份工', { size: 8.6, fill: C.sub, maxW: 612, lh: 16 })
  b.wtext(46, 456, 'kea3 突变体光强骤变后 NPQ 松得太迟、光合恢复慢、产量打折——一道反向转运体写进田间光效账本；状态转换（STN7 磷酸化 LHCII 迁往 PSI）为天线级微调', { size: 8.6, weight: 600, fill: C.accD, maxW: 612, lh: 16 })

  // ================= 二、ΔpH 的三份工 =================
  b.panel(710, 132, 660, 455, { title: '二、ΔpH 的三份工：ATP · NPQ · Tat' })
  // 1 ATP
  b.rect(726, 176, 306, 92, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(742, 200, '① 合成 ATP（税率对照）', { size: 10.5, weight: 700, fill: C.rnaD })
  b.wtext(742, 222, '类囊体 c₁₄ 环约 4.7 H⁺/ATP，对线粒体 c₈ 环约 2.7——同样的马达、两套税率，光合按光的节拍多收过路费；CF₁ 的 γ 亚基二硫键光下经硫氧还蛋白还原才开机，入夜回锁防梯度倒流', { size: 8.2, fill: C.sub, maxW: 276, lh: 15 })
  // 2 NPQ
  b.rect(1046, 176, 306, 92, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(1062, 200, '② 调光保护（qE 刹车）', { size: 10.5, weight: 700, fill: C.warnD })
  b.wtext(1062, 222, '强光下 PsbS 感知基质侧 H⁺ 触发非光化学淬灭：天线把多余光能以热散掉，紫黄质循环同步换装；KEA3 是回程松阀——ΔpH/ΔΨ 配比即产量—安全权衡', { size: 8.2, fill: C.sub, maxW: 276, lh: 15 })
  // 3 Tat
  b.rect(726, 280, 306, 92, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(742, 304, '③ 蛋白输入（Tat 通路）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.wtext(742, 326, '类囊体腔蛋白走 Tat 通路：双精氨酸基序的已折叠蛋白（连辅基装好）整个入腔——能量不靠 ATP、靠 ΔpH，每送一个泄一批 H⁺；Sec 通路则推解折叠肽链（与 ER Sec61 同源）', { size: 8.2, fill: C.sub, maxW: 276, lh: 15 })
  // 能量预算
  b.rect(1046, 280, 306, 92, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.text(1062, 304, '④ 线性流的能量账', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(1062, 326, '每 O₂：水解释放 4 H⁺＋b₆f 泵 8 H⁺＝约 12 H⁺ 入腔 ≈ 2.5 ATP，配 2 NADPH；卡尔文要 3:2——缺口由循环电子流（PGR5/NDH 只泵 H⁺ 不产 NADPH）补齐，强光时兼作泄洪道', { size: 8.2, fill: C.sub, maxW: 276, lh: 15 })
  // 小结
  b.wtext(726, 396, '一条梯度、三张账单：光合生物把质子货币用到极致；pmf 常达 200 mV 上下，与线粒体 150–180 mV 同量级——两台电池电压相仿，充电方式一个烧糖、一个晒太阳', { size: 8.8, weight: 600, fill: C.accD, maxW: 626, lh: 17 })
  b.wtext(726, 436, '动物无类囊体、无光驱动泵；但线粒体 K⁺/H⁺ 交换与 K_ATP 通道之于心肌缺血预适应，恰似 KEA3 之于 NPQ——化学渗透的语法两界统一', { size: 8.8, fill: C.sub, maxW: 626, lh: 17 })

  // ================= 三、酸跳实验与两界统一 =================
  b.panel(30, 592, 1340, 393, { title: '三、酸跳实验（1963）：ΔpH 单独点亮 ATP 合酶' })
  // 实验步骤图
  b.text(46, 648, '步骤一：暗浴酸化', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(46, 662, 250, 110, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 10 })
  b.ctext(171, 686, 'pH 4 暗酸性浴', { size: 10, weight: 700, fill: C.badD })
  b.ion(120, 716, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(160, 730, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(200, 716, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ctext(171, 754, '叶绿体腔内被动酸化（黑暗·无电子传递）', { size: 7.8, fill: C.sub })
  b.arrow(316, 716, 356, 716, { stroke: C.sub, sw: 2.4, marker: 'mute' })
  b.wtext(46, 792, 'Jagendorf 与 Urbach：只需人工 ΔpH，黑暗中 ATP 照合成——化学渗透在叶绿体上的第一个决定性证据（Mitchell 获 1978 年诺奖）', { size: 8.6, fill: C.sub, maxW: 540, lh: 16 })
  b.wtext(46, 834, '今天拆开看的 KEA3/VCCN1 电中性回路，正是把实验室里手拨的人工酸碱落差，换成活体里光控的、可调的离子回路——「实验室里手拨的开关，演化早已装进膜里」', { size: 8.8, weight: 600, fill: C.accD, maxW: 540, lh: 17 })
  b.text(390, 648, '步骤二：瞬转 pH 8', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(390, 662, 250, 118, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 10 })
  b.ctext(515, 684, 'pH 8 缓冲液（基质侧）', { size: 10, weight: 700, fill: C.accD })
  b.ctext(515, 706, '人工 ΔpH 驱动 H⁺ 下泄', { size: 8, fill: C.sub })
  b.arrow(460, 714, 460, 740, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.ion(460, 752, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.tag(560, 722, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9, weight: 700 })
  b.ctext(515, 768, '暗中 ATP 照合成', { size: 8.4, weight: 700, fill: C.rnaD })
  // 两界对照表
  b.table(680, 648, 668, {
    headers: ['对照项', '线粒体内膜', '类囊体膜'],
    rows: [
      ['泵 H⁺ 方向', '泵出到膜间隙（外侧）', '泵入腔（内侧）——镜像'],
      ['驱动来源', '呼吸链氧化糖', '光系统晒太阳'],
      ['c 环税率', 'c₈ 约 2.7 H⁺/ATP', 'c₁₄ 约 4.7 H⁺/ATP'],
      ['离子调阀', 'K⁺/H⁺ 交换、K_ATP', 'KEA3、VCCN1、TPK3'],
      ['pmf 量级', '150–180 mV', '常达 200 mV 上下（ΔpH 占九成）'],
      ['两界分布', '动植物共有', '植物独占（动物无光反应）'],
    ],
    fontSize: 8.4,
    rowH: 19,
    colW: [120, 260, 288],
  })
  b.wtext(680, 850, '两界语法统一：都是「电子传递泵质子＋ATP 合酶回灌」，都靠离子通道把膜电位与 pH 配比调到工况最优；植物细胞同时运营呼吸与光合两套 pmf，靠被膜代谢物交换接驳两边——同一本质子账本', { size: 9, weight: 600, fill: C.accD, maxW: 660, lh: 19 })
  b.wtext(680, 890, '衔接：能量膜之外还有三道闸门——过氧化物酶体、内质网与核孔复合体，下一节逐门入册并以总表收口全书', { size: 8.8, fill: C.sub, maxW: 660, lh: 19 })
}

export default scene({
  title: '类囊体膜：光驱动的 H⁺ 泵与 K⁺/Cl⁻ 电中性回路',
  subtitle:
    '光系统把 H⁺ 泵入腔（ΔpH 2–3 单位、pmf 约 200 mV），c₁₄ 合酶按约 4.7 H⁺/ATP 收税（线粒体 c₈ 约 2.7）；KEA3 可调质子泄漏阀在 ΔpH/ΔΨ 间再分配、VCCN1 电压依赖 Cl⁻ 对冲正电荷、TPK3 敏感 K⁺ 外流——电中性回路钳住膜电位；ΔpH 身兼三职（ATP、NPQ 光保护、Tat 折叠蛋白输入）；线性流每 O₂ 约 12 H⁺ 得 2.5 ATP 配 2 NADPH，循环电子流补齐 3:2 预算；1963 年酸跳实验以人工 ΔpH 在黑暗中点亮 ATP 合酶',
  draw,
})
