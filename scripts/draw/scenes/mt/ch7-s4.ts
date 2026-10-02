// mt ch7-s4 F 型 ATP 合酶回顾 + c 环能量学 + 方向分化 + 三大马达对照
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、F 型 ATP 合酶：旋转催化的原型 =================
  b.panel(30, 132, 660, 445, { title: '一、F 型 ATP 合酶：旋转催化的原型（回顾）' })
  // 膜上 F1Fo 全装：膜（Fo）+ 头部（F1）
  b.text(60, 186, '线粒体内膜 / 类囊体膜 / 细菌质膜', { size: 9.5, fill: C.mute })
  b.bilayer(60, 216, 560, { h: 26 })
  b.text(60, 200, '膜外（膜间隙 / 腔侧）', { size: 8.5, fill: C.mute })
  b.text(60, 262, '基质侧（线粒体基质 / 叶绿体基质）', { size: 8.5, fill: C.mute })
  // F1 头部 α3β3 环 + γ 轴
  const f1x = 210
  const f1y = 330
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 + Math.PI / 6
    const isA = i % 2 === 0
    b.circle(f1x + 44 * Math.cos(a), f1y + 44 * Math.sin(a), 20, {
      fill: isA ? C.accL : C.enzL, stroke: isA ? C.acc : C.enz, sw: 2,
    })
    b.ctext(f1x + 44 * Math.cos(a), f1y + 44 * Math.sin(a) + 4, isA ? 'α' : 'β', {
      size: 13, weight: 700, fill: isA ? C.accD : C.enzD,
    })
  }
  b.rect(f1x - 7, 230, 14, 120, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(f1x + 20, 262, 'γ（中央轴）', { size: 9, weight: 600, fill: C.proD })
  b.rect(f1x - 26, 336, 52, 16, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ctext(f1x, 348, 'ε', { size: 10, weight: 700, fill: C.proD })
  b.tag(96, 316, 'ADP + Pi', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9.5, weight: 700 })
  b.arrow(126, 310, 158, 320, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.tag(310, 316, 'ATP', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700 })
  b.arrow(268, 320, 292, 312, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  // Fo c 环
  b.circle(430, 229, 34, { fill: C.rnaL, stroke: C.rna, sw: 2.2 })
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4
    b.circle(430 + 22 * Math.cos(a), 229 + 22 * Math.sin(a), 5, { fill: C.warn, stroke: C.warnD, sw: 0.8 })
  }
  b.ctext(430, 234, 'c 环', { size: 10, weight: 700, fill: C.rnaD })
  b.rect(466, 200, 18, 58, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(492, 232, 'a·b₂ 定子', { size: 9, weight: 600, fill: C.proD })
  b.line(466, 229, 424, 229, { stroke: C.pro, sw: 2 })
  // 质子流
  b.ion(560, 186, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(548, 196, 512, 212, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(560, 276, 'H^{+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5 })
  b.arrow(508, 246, 540, 264, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.tag(560, 232, 'PMF', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10, weight: 700 })
  // Boyer 结合变化
  b.wtext(60, 404, 'Boyer 结合变化机制：γ 轴每转 120°，三个 β 位点依次经历「松→紧→开」——构象本身把 ATP 挤出，无需直接供能于成键；1997 年诺贝尔化学奖同授 Boyer、Walker 与 Skou（钠钾泵）', { size: 9.5, fill: C.sub, maxW: 612, lh: 21 })
  b.wtext(60, 462, 'F 型与 V 型同为旋转马达、同源演化：LUCA 阶段已分道——一台留在能量膜上顺流合成 ATP，一台走上膜泡专职水解建梯度', { size: 9.5, weight: 600, fill: C.accD, maxW: 612, lh: 21 })

  // ================= 二、c 环拷贝数能量学 =================
  b.panel(710, 132, 660, 445, { title: '二、c 环拷贝数决定每 ATP 的质子税' })
  b.text(740, 186, 'H^{+}/ATP 比 = c 环拷贝数 ÷ 3（每圈 3 个 ATP）', { size: 11, weight: 700, fill: C.sub })
  const rows: [string, number, number, string][] = [
    ['哺乳动物线粒体', 8, 2.7, C.acc],
    ['酵母线粒体', 10, 3.3, C.pro],
    ['植物叶绿体 CF₁CF_o', 14, 4.7, C.ok],
  ]
  let y = 236
  for (const [name, copies, ratio, col] of rows) {
    b.text(740, y + 14, name, { size: 10, weight: 600, fill: C.sub })
    // c 环小图
    for (let i = 0; i < copies; i++) {
      const a = (i * 2 * Math.PI) / copies
      b.circle(960 + 26 * Math.cos(a), y + 10 + 26 * Math.sin(a), 6, { fill: col, stroke: C.ink, sw: 0.6, opacity: 0.85 })
    }
    b.circle(960, y + 10, 26, { fill: 'none', stroke: col, sw: 1.6 })
    b.ctext(960, y + 13, `${copies}c`, { size: 9.5, weight: 700, fill: C.ink })
    // 比例条
    b.rect(1020, y - 4, 300 * (ratio / 5), 26, { fill: col, opacity: 0.2 })
    b.rect(1020, y - 4, 300 * (ratio / 5), 26, { fill: 'none', stroke: col, sw: 1.6 })
    b.ctext(1020 + 150 * (ratio / 5), y + 12, `${ratio} H^{+}/ATP`, { size: 10.5, weight: 700, fill: C.ink })
    y += 88
  }
  b.wtext(740, 486, '拷贝数越多、每合成 1 个 ATP 需要的质子越多、能量转化效率越低——但门槛也越低，可在更小的 PMF 上运转：叶绿体 14c 的「高质子税」恰与光合电子链的质子库匹配，线粒体 8c 则追求高效率', { size: 9.5, fill: C.sub, maxW: 612, lh: 21 })
  b.wtext(740, 540, '演化意义上：拷贝数是旋转马达对「本地质子经济学」的适配——同一台马达，不同的税率', { size: 9.5, weight: 600, fill: C.okD, maxW: 612, lh: 21 })

  // ================= 三、方向分化：同源马达反向使用 =================
  b.panel(30, 592, 660, 393, { title: '三、方向分化：F 合成、V 水解' })
  // F 型：PMF → ATP
  b.text(60, 640, 'F 型（ATP 合酶）', { size: 11, weight: 700, fill: C.accD })
  b.bilayer(60, 668, 280, { h: 22 })
  b.rect(160, 660, 40, 38, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(180, 680, 'F_o', { size: 9, weight: 700, fill: C.accD })
  b.rect(160, 706, 40, 26, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(180, 720, 'F₁', { size: 9, weight: 700, fill: C.enzD })
  b.arrow(64, 660, 64, 700, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(64, 648, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.ion(64, 714, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.arrow(228, 716, 268, 716, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.tag(300, 716, 'ATP 合成', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10, weight: 700 })
  b.wtext(60, 752, '生理方向：顺 PMF 下行，把质子位能收进 ATP 高能磷酸键——线粒体、叶绿体、细菌的能量收官一步', { size: 9, fill: C.sub, maxW: 300, lh: 19 })
  // V 型：ATP → 梯度
  b.text(420, 640, 'V 型（V-ATPase）', { size: 11, weight: 700, fill: C.proD })
  b.bilayer(420, 668, 280, { h: 22 })
  b.rect(520, 660, 40, 38, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(540, 680, 'V₀', { size: 9, weight: 700, fill: C.proD })
  b.rect(520, 706, 40, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(540, 720, 'V₁', { size: 9, weight: 700, fill: C.rnaD })
  b.arrow(540, 660, 540, 700, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(540, 648, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7.5 })
  b.tag(428, 716, 'ATP 水解', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10, weight: 700 })
  b.arrow(508, 716, 472, 716, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.wtext(420, 752, '生理方向：水解 ATP 逆 PMF 上行泵质子——溶酶体、液泡与分泌颗粒的酸化引擎', { size: 9, fill: C.sub, maxW: 300, lh: 19 })
  // 分隔线 + 底部双向箭头注记
  b.line(350, 636, 350, 780, { stroke: C.line, sw: 1.2, dash: '4 4' })
  b.wtext(60, 800, '实验上两者皆可短暂反转（V 型在特殊条件下能合成微量 ATP、F 型在 PMF 崩塌时水解 ATP 保膜电位）——方向的「钉死」靠末端抑制与动力学不可逆性，而非结构锁死', { size: 9.5, fill: C.sub, maxW: 612, lh: 21 })
  b.wtext(60, 852, '「同源马达反向使用」是本学科反复出现的演化主题：部件保守、用法翻面', { size: 10, weight: 700, fill: C.accD, maxW: 612, lh: 21 })
  b.wtext(60, 890, 'ClC 通道→转运体、KAT1 反向用极、SWEET 半分子二聚体——与 F/V 分化同属一个母题', { size: 9, fill: C.mute, maxW: 612, lh: 19 })

  // ================= 四、三大马达对照总表 =================
  b.panel(710, 592, 660, 393, { title: '四、P · V · F：三类 ATP 驱动马达总对照' })
  b.table(730, 636, 620, {
    colW: [110, 170, 170, 170],
    headers: [' ', 'P 型 ATPase', 'V 型 ATPase', 'F 型 ATP 合酶'],
    rows: [
      ['结构', '单亚基约 100 kDa＋β/γ 辅亚基', '多亚基双旋转马达 V₁+V₀', '多亚基双旋转马达 F₁+F_o'],
      ['能量耦合', '天冬氨酸磷酰化中间体', '旋转催化（ATP 水解）', '旋转催化（合成 ATP）'],
      ['每循环离子', '1–3 个（如 3Na⁺:2K⁺）', '多个 H⁺（约 3.3/ATP）', '多个 H⁺（2.7–4.7/ATP）'],
      ['可逆性', '中等（可反转泵 ATP）', '弱（末端抑制钉死水解）', '强（生理即双向位点）'],
      ['动物岗位', 'Na⁺/K⁺·Ca²⁺·H⁺/K⁺·铜泵', '溶酶体/内体酸化·破骨·泌 H⁺', '线粒体 ATP 合成'],
      ['植物岗位', '质膜 H⁺ 主引擎（AHA 11 个）', '液泡双引擎之一（VHA）', '线粒体＋叶绿体双份'],
      ['抑制剂', '乌本苷·毒胡萝卜素·糠菌素', '巴弗洛霉素 A₁·DCCD', '寡霉素·DCCD'],
    ],
    fontSize: 8.8,
    rowH: 30,
  })
  b.wtext(730, 920, '一句话分工：P 型是「精量的针筒」——小批量高定制；V 型是「酸化的水泵」——专司膜泡梯度；F 型是「发电的涡轮」——把梯度变现为 ATP；三者在动植物基因组中全部在场，各自扩编不同', { size: 9.5, fill: C.sub, maxW: 620, lh: 21 })
}

export default scene({
  title: '旋转马达三部曲：F 合酶回顾与 P·V·F 总对照',
  subtitle:
    'F 型 ATP 合酶以 α₃β₃+γ 中央轴+F_o c 环执行 Boyer 结合变化机制（1997 诺奖）；c 环拷贝数即质子税率——哺乳动物 8c 约 2.7、酵母 10c 约 3.3、叶绿体 14c 约 4.7 H⁺/ATP，高税低效却匹配光合质子库；F 与 V 同源而反向使用：一台顺 PMF 合成 ATP、一台水解 ATP 建梯度；P 型单亚基磷酰化针筒对 V 型酸化水泵对 F 型发电涡轮——三部马达在动植物基因组中全部在场',
  draw,
})
