// mt ch10-s4 区室化与解毒：植物液泡保险库 · 动物缓冲库 · 砷的通道学 · 生态应用
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、植物液泡：分子保险库 =================
  b.panel(30, 132, 660, 445, { title: '一、植物的液泡保险库：CAX/MTP/NHX 装填 + PC 络押' })
  // 液泡区（上半）：大圆角矩形
  b.rect(46, 186, 628, 178, { fill: C.accL, stroke: C.acc, sw: 2, rx: 14 })
  b.text(60, 208, '液泡（保险库）', { size: 11, weight: 700, fill: C.accD })
  b.ion(140, 260, 'Cd^{2+}', { r: 13, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 8 })
  b.ion(230, 284, 'Zn^{2+}', { r: 13, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 8 })
  b.ion(320, 258, 'As', { r: 12, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9 })
  b.ion(400, 286, 'Ca^{2+}', { r: 13, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8 })
  b.ion(480, 260, 'Na^{+}', { r: 12, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 8 })
  b.tag(590, 252, 'PC_{n}-Cd', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9, weight: 700 })
  b.ctext(590, 282, '整箱收押', { size: 8.5, weight: 600, fill: C.enzD })
  // 液泡膜（水平）
  b.bilayer(46, 372, 628)
  b.text(60, 396, '液泡膜（tonoplast）· 下方为细胞质', { size: 9, fill: C.mute })
  // 装填转运体（骑在膜上）
  const loaders: [number, string, string][] = [
    [110, 'CAX', 'Ca^{2+}/H^{+}'],
    [210, 'MTP1', 'Zn^{2+}/Cd^{2+}'],
    [310, 'NHX1', 'Na^{+}/H^{+}'],
  ]
  for (const [lx, name, sub] of loaders) {
    b.rect(lx - 26, 358, 52, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
    b.ctext(lx, 368, name, { size: 9.5, weight: 700, fill: C.dnaD })
    b.ctext(lx, 380, sub, { size: 7, fill: C.dnaD })
    b.arrow(lx, 404, lx, 344, { stroke: C.bad, sw: 1.6, marker: 'bad', dash: '3 3' })
  }
  // PC 装配线（细胞质内）
  b.text(60, 428, '植物螯合肽 PC 装配线（细胞质）', { size: 10.5, weight: 700, fill: C.enzD })
  b.ion(96, 470, 'Cd^{2+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.arrow(112, 464, 150, 462, { stroke: C.enz, sw: 1.5, marker: 'enz' })
  b.rect(154, 444, 108, 40, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(208, 460, 'PCS 合成酶', { size: 9, weight: 700, fill: C.enzD })
  b.ctext(208, 474, 'γ-Glu-Cys 缩合', { size: 7.5, fill: C.enzD })
  b.arrow(264, 462, 300, 462, { stroke: C.enz, sw: 1.5, marker: 'enz' })
  b.tag(340, 462, 'PC_{n}-Cd', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9.5, weight: 700 })
  b.arrow(382, 470, 382, 452, { stroke: C.pro, sw: 1.5, marker: 'pro' })
  b.rect(392, 420, 66, 34, { fill: C.proL, stroke: C.pro, sw: 2, rx: 6 })
  b.ctext(425, 434, 'ABCC1/2', { size: 9, weight: 700, fill: C.proD })
  b.ctext(425, 447, 'MRP 型 ABC', { size: 7, fill: C.proD })
  b.rect(399, 358, 52, 30, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(425, 368, 'ABCC', { size: 9, weight: 700, fill: C.proD })
  b.ctext(425, 380, '液泡膜位', { size: 7, fill: C.proD })
  b.arrow(425, 404, 425, 344, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.wtext(480, 428, 'PC＝(γ-Glu-Cys)_{n}-Gly，n=2–11；PCS 合成酶被 Cd^{2+}/As 直接激活——不需转录、数分钟响应；ABCC 把「络好的赃物」整箱搬运，比裸离子转运更彻底', { size: 8.8, fill: C.sub, maxW: 186, lh: 17 })
  b.wtext(60, 540, '三道装填线：CAX 管 Ca、MTP 管 Zn/Cd、NHX 管 Na——裸离子各回各库；PC-ABCC 线管重金属+类金属的「重案组」', { size: 9.5, fill: C.sub, maxW: 500, lh: 21 })

  // ================= 二、动物的缓冲库：MT 与铁蛋白 =================
  b.panel(710, 132, 660, 445, { title: '二、动物的缓冲库：金属硫蛋白与铁蛋白' })
  // MT
  b.text(740, 186, '金属硫蛋白 MT-1/2（肝肾）', { size: 11, weight: 700, fill: C.proD })
  b.circle(810, 286, 62, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(810, 264, 'MT', { size: 12, weight: 700, fill: C.proD })
  b.ctext(810, 284, '61 aa·20 个 Cys', { size: 7.5, fill: C.proD })
  b.ctext(810, 300, '7 金属/肽', { size: 8, weight: 700, fill: C.proD })
  for (let i = 0; i < 7; i++) {
    const a = (i * 2 * Math.PI) / 7
    b.circle(810 + 46 * Math.cos(a), 286 + 46 * Math.sin(a), 8, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  }
  b.wtext(740, 376, '巯醇筷笼络 Cd^{2+}/Zn^{2+}/Cu^{+}——缓冲、暂存与解毒三合一；可被 Cd、Zn、糖皮质激素强力诱导（转录级扩容）', { size: 9, fill: C.sub, maxW: 250, lh: 19 })
  // Cd-MT 肾毒性
  b.rect(740, 408, 250, 120, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(754, 430, 'Cd-MT 的肾旅程（痛痛病）', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(754, 452, '肝细胞合成 Cd-MT 入血，经肾小球滤过，近端小管重吸收并在溶酶体降解，释放的 Cd^{2+} 再伤小管——镉的「特洛伊木马」循环，日本富山痛痛病即慢性镉害', { size: 8.8, fill: C.badD, maxW: 222, lh: 17 })
  // 铁蛋白
  b.text(1020, 186, '铁蛋白 ferritin（全身）', { size: 11, weight: 700, fill: C.rnaD })
  b.circle(1140, 286, 62, { fill: C.rnaL, stroke: C.rna, sw: 2.2 })
  b.ctext(1140, 264, 'Ferritin', { size: 10, weight: 700, fill: C.rnaD })
  b.ctext(1140, 284, '24 亚基球壳', { size: 7.5, fill: C.rnaD })
  b.ctext(1140, 300, '≤4500 Fe', { size: 9, weight: 700, fill: C.rnaD })
  for (let i = 0; i < 10; i++) {
    const a = (i * 2 * Math.PI) / 10
    b.circle(1140 + 40 * Math.cos(a), 286 + 40 * Math.sin(a), 5.5, { fill: C.rna, opacity: 0.7 })
  }
  b.wtext(1020, 376, '每壳最多约 4500 个铁原子以氢氧化铁磷酸盐胶粒形式封存——细胞内储铁的主力；H/L 亚基比例决定摄铁速率，IRE-IRP 系统在翻译水平感铁调节（参见生物化学相关章节）', { size: 9, fill: C.sub, maxW: 250, lh: 19 })
  // 对照注记
  b.wtext(1020, 480, '动物可以「排」：肝肾肠主动外排加胆汁路径，区室化只是手段之一', { size: 9, weight: 600, fill: C.accD, maxW: 250, lh: 19 })
  b.wtext(740, 552, '共同化学：都以巯基/羧基簇或矿化胶粒把游离金属压到无毒水平——「溶液化学决定谁必须被锁起来」', { size: 9.5, fill: C.sub, maxW: 612, lh: 21 })

  // ================= 三、砷的诡异通道学 =================
  b.panel(30, 592, 660, 393, { title: '三、砷的诡异通道学：冒名顶替与暗门' })
  // As(V) 冒充磷酸盐
  b.text(60, 642, '砷酸盐 As(V)：冒充磷酸盐', { size: 11, weight: 700, fill: C.enzD })
  b.bilayer(60, 676, 300, { h: 22 })
  b.rect(180, 668, 52, 36, { fill: C.okL, stroke: C.ok, sw: 2, rx: 6 })
  b.ctext(206, 686, 'PHT', { size: 9.5, weight: 700, fill: C.okD })
  b.ion(120, 656, 'AsO_{4}^{3-}', { r: 13, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 6.5 })
  b.ion(120, 716, 'HPO_{4}^{2-}', { r: 13, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 6.5 })
  b.arrow(134, 660, 176, 672, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.arrow(134, 712, 176, 700, { stroke: C.ok, sw: 1.6, marker: 'ok' })
  b.wtext(60, 748, '四面体几何相似——植物磷转运体 PHT 与动物钠磷协同体都会「误收」AsO_{4}^{3-}；进入细胞后干扰氧化磷酸化（参见生物化学相关章节）', { size: 8.8, fill: C.sub, maxW: 300, lh: 18 })
  // As(III) 走水甘油通道
  b.text(420, 642, '亚砷酸 As(III)：走暗门', { size: 11, weight: 700, fill: C.accD })
  b.bilayer(420, 676, 260, { h: 22 })
  b.rect(520, 668, 52, 36, { fill: C.accL, stroke: C.acc, sw: 2, rx: 6 })
  b.ctext(546, 686, 'AQP7/9', { size: 9, weight: 700, fill: C.accD })
  b.tag(470, 656, 'As(OH)_{3}', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 8, weight: 700 })
  b.arrow(494, 660, 516, 672, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.wtext(420, 748, '中性小分子 As(OH)_{3} 与甘油同形——动物水甘油通道 AQP7/9、植物 NIP 均可透砷：水通道家族的「阴暗面」；酿酒酵母 Fps1 的透砷是经典遗传学案例', { size: 8.8, fill: C.sub, maxW: 280, lh: 18 })
  // 底部：动植物双向标签
  b.wtext(60, 800, '两界通吃：动物（AQP7/9）、植物（部分 NIP）、微生物（Fps1）都被同一条暗门攻陷——通道选择性的「容错」在毒理学上放大为易感性', { size: 9.5, fill: C.sub, maxW: 612, lh: 21 })
  b.wtext(60, 848, '植物的防御：把 As(III)-PC 络合入液泡（ABCC1/2 收押）或还原+甲基化外排——超富集蕨类蜈蚣草正是把砷大量装入液泡区室', { size: 9.5, weight: 600, fill: C.okD, maxW: 612, lh: 21 })
  b.wtext(60, 890, '动物无细胞壁与大液泡，主要靠肝脏甲基化 + 胆汁肾外排解毒（参见微生物学与免疫学相关章节的砷代谢）', { size: 9, fill: C.mute, maxW: 612, lh: 19 })

  // ================= 四、生态应用：植物修复与生物强化 =================
  b.panel(710, 592, 660, 393, { title: '四、生态应用：植物修复与生物营养强化' })
  // 超富集植物
  b.text(740, 642, '超富集植物（phytoremediation 主力）', { size: 11, weight: 700, fill: C.okD })
  b.table(740, 668, 600, {
    headers: ['物种', '富集元素', '关键装备'],
    rows: [
      ['拟南芥近缘 A. halleri', 'Zn / Cd', 'HMA4 高表达+液泡 MTP1'],
      ['遏蓝菜 Noccaea caerulescens', 'Zn / Cd / Pb', 'ZIP/HMA/MTP 组合扩编'],
      ['蕨类蜈蚣草 Pteris vittata', 'As（可达干重 2%）', '砷酸还原+ArsC+液泡区室'],
      ['印度芥菜（螯合强化）', 'Pb / Cd', 'EDTA 活化根际（有争议）'],
    ],
    fontSize: 8.6,
    rowH: 30,
    colW: [220, 170, 210],
  })
  b.wtext(740, 838, 'EDTA 等螯合剂可把土壤重金属「拉进」植物，但淋失与食物链风险使该路线争议未决——更受推崇的是品种自身的超富集性状', { size: 8.8, fill: C.sub, maxW: 600, lh: 18 })
  // 生物强化
  b.rect(740, 856, 300, 106, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(754, 878, '生物强化 biofortification', { size: 10.5, weight: 700, fill: C.okD })
  b.wtext(754, 900, 'HarvestPlus 等计划育成富锌小麦、富铁水稻与豆类——把 ZIP/HMA 的吸收与装载在食用组织里放大，全球微量元素缺乏（Zn 约 20 亿人受影响）的农学解法', { size: 8.8, fill: C.okD, maxW: 272, lh: 17 })
  // 核心差异金句
  b.rect(1060, 856, 280, 106, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 8 })
  b.text(1074, 878, '核心差异', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(1074, 900, '植物不能「排泄」——只能区室化隔离、或随落叶脱落带走；动物则肝肾肠三路主动外排。一动一静，两大策略', { size: 8.8, fill: C.sub, maxW: 252, lh: 17 })
}

export default scene({
  title: '区室化与解毒：植物保险库对动物缓冲库',
  subtitle:
    '植物把液泡用作分子保险库——CAX、MTP、NHX 装填裸离子，PCS 合成酶以 (γ-Glu-Cys)_{n}-Gly 络合镉砷后由 ABCC1/2 整箱收押；动物以金属硫蛋白笼络镉锌铜（Cd-MT 经肾小管降解释放的循环即痛痛病）、以铁蛋白每壳 4500 铁矿化储铁；砷从两条暗门攻入，超富集植物与生物强化把这套装备变成生态武器',
  draw,
})
