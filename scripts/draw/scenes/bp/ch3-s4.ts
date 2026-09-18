// bp ch3-s4 红细胞膜力学与细胞形变（39-e 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、双层 + 网架的复合材料 ============
  b.panel(30, 132, 1340, 322, { title: '一、红细胞膜 = 脂双层（面积刚度）+ 血影蛋白网架（剪切刚度）' })

  // -- 左：红细胞双凹形 --
  b.path('M 82,258 Q 116,212 148,238 Q 180,212 214,258 Q 180,304 148,278 Q 116,304 82,258', { fill: C.badL, stroke: C.bad, sw: 2.4, fillOp: 0.75 })
  b.ctext(148, 260, '侧面', { size: 10, fill: C.mute })
  b.ctext(148, 330, '双凹圆盘形（静息）', { size: 12, weight: 700, fill: C.bad })
  b.braceH(82, 346, 132, { label: '直径约 8 μm', size: 11 })
  b.circle(370, 258, 58, { fill: C.badL, stroke: C.bad, sw: 2.4, fillOp: 0.75 })
  b.circle(370, 258, 17, { fill: C.panel, stroke: C.bad, sw: 1.6, dash: '4 3' })
  b.ctext(370, 262, '正面', { size: 10, fill: C.mute })
  b.ctext(370, 342, '中央凹陷', { size: 10.5, fill: C.mute })
  b.line(370, 324, 370, 300, { stroke: C.mute, sw: 1.2 })

  // -- 右：膜横截面放大 --
  b.bilayer(500, 196, 830, { h: 16, tint: C.dna })
  b.ctext(1180, 184, '脂双层：面积压缩模量 KA ≈ 0.5 N/m（几乎不可压）', { size: 11, weight: 700, fill: C.dnaD })
  // 跨膜蛋白：带 3 蛋白 + 血型糖蛋白
  b.rect(626, 190, 26, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(639, 186, '带 3 蛋白', { size: 9.5, fill: C.proD })
  b.rect(920, 190, 20, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(930, 186, '血型糖蛋白', { size: 9.5, fill: C.proD })
  // 锚蛋白：连接带 3 与网架
  b.line(639, 224, 639, 300, { stroke: C.warn, sw: 2.4 })
  b.ctext(600, 268, '锚蛋白', { size: 10, weight: 700, fill: C.warn })
  // 血影蛋白准六边形网架
  const top: number[] = [540, 690, 840, 990, 1140, 1290]
  const bot: number[] = [615, 765, 915, 1065, 1215]
  for (let i = 0; i < top.length - 1; i++) b.line(top[i], 300, top[i + 1], 300, { stroke: C.acc, sw: 2.4 })
  for (let i = 0; i < bot.length - 1; i++) b.line(bot[i], 362, bot[i + 1], 362, { stroke: C.acc, sw: 2.4 })
  for (let i = 0; i < top.length; i++) {
    if (i < bot.length) b.line(top[i], 300, bot[i], 362, { stroke: C.acc, sw: 2 })
    if (i > 0) b.line(top[i], 300, bot[i - 1], 362, { stroke: C.acc, sw: 2 })
  }
  top.forEach(x => b.circle(x, 300, 4, { fill: C.acc }))
  bot.forEach(x => {
    b.circle(x, 362, 7, { fill: C.proL, stroke: C.pro, sw: 1.6 })
    b.line(x - 4, 362, x + 4, 362, { stroke: C.pro, sw: 1.4 })
  })
  b.ctext(1150, 288, '血影蛋白（spectrin）四聚体', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(762, 396, '结点：短肌动蛋白丝 + 蛋白 4.1', { size: 10.5, weight: 700, fill: C.proD })
  b.line(830, 388, 830, 366, { stroke: C.mute, sw: 1.2 })
  b.ctext(615, 396, '网架提供剪切刚度 μ', { size: 10.5, fill: C.mute })
  b.ctext(915, 438, '成熟红细胞无细胞核与细胞器——最便于力学表征的真核细胞', { size: 10.5, fill: C.mute })

  // ============ 二、Evans–Skalak 经典力学参数 ============
  b.panel(30, 478, 1340, 252, { title: '二、经典力学参数（Evans–Skalak 量级）与双凹形的物理' })
  b.table(60, 522, 700, {
    headers: ['参数', '数值', '含义'],
    rows: [
      ['剪切模量 μ', '≈ 5–10 μN/m', '网架抗剪切（比软橡皮低 5 个数量级）'],
      ['弯曲刚度 κ', '≈ 2×10⁻¹⁹ J（~50 k_BT）', '抗弯'],
      ['面积压缩模量 KA', '≈ 0.5 N/m', '膜面积几乎不可压'],
      ['表面积/体积比', '≈ 0.6（等体积球为 1）', '「面积过剩」约 40%'],
    ],
    colW: [150, 205, 345], rowH: 38, fontSize: 11.5,
  })
  // -- 右：双凹形的物理 --
  b.rect(800, 512, 556, 200, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(820, 538, '双凹形的物理：面积过剩', { size: 13.5, weight: 700, fill: C.bad })
  b.circle(856, 590, 26, { fill: C.panel, stroke: C.mute, sw: 2, dash: '5 4' })
  b.ctext(856, 636, '等体积球', { size: 9.5, fill: C.mute })
  b.path('M 920,590 Q 942,552 966,578 Q 990,552 1012,590 Q 990,628 966,602 Q 942,628 920,590', { fill: C.badL, stroke: C.bad, sw: 2, fillOp: 0.75 })
  b.ctext(966, 636, '双凹碟形（+40% 表面积）', { size: 9.5, fill: C.bad })
  b.arrow(886, 590, 912, 590, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.wtext(1044, 566, '与同体积球相比多出约 40% 的表面积——细胞无需拉伸膜（KA 很大）即可大幅改变形状。', { size: 10.5, fill: C.sub, maxW: 296, lh: 14 })
  b.wtext(1044, 632, '双凹碟形是给定面积与体积下弯曲能极小的形状之一，兼顾气体交换效率（表面积/扩散距离）与微血管流体力学（阻力小）。', { size: 10.5, fill: C.sub, maxW: 296, lh: 14 })

  // ============ 三、挤过毛细血管 ============
  b.panel(30, 756, 1340, 224, { title: '三、挤过毛细血管：变形性是红细胞的「通行证」' })

  // -- 左：毛细血管与子弹形 --
  b.line(60, 806, 560, 806, { stroke: C.acc, sw: 4 })
  b.line(60, 886, 560, 886, { stroke: C.acc, sw: 4 })
  b.braceV(576, 806, 80, { label: '3–4 μm' })
  b.ctext(340, 796, '毛细血管（脾窦缝隙窄至 ~2 μm）', { size: 10.5, weight: 700, fill: C.accD })
  // 入口前的双凹形
  b.path('M 82,846 Q 100,818 122,838 Q 144,818 162,846 Q 144,874 122,854 Q 100,874 82,846', { fill: C.badL, stroke: C.bad, sw: 2, fillOp: 0.75 })
  b.arrow(178, 846, 216, 846, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 血管内子弹形/降落伞形
  b.path('M 250,858 C 250,824 282,812 316,812 C 360,812 380,830 380,848 C 352,862 288,868 250,858 Z', { fill: C.badL, stroke: C.bad, sw: 2.2, fillOp: 0.85 })
  b.ctext(315, 912, '子弹形 / 降落伞形', { size: 11, weight: 700, fill: C.bad })
  b.ctext(315, 930, '形变时间 ~0.1 s', { size: 10, fill: C.mute })
  // tank-treading
  b.circle(480, 846, 26, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.path('M 454,846 A 26 26 0 0 1 506,846', { stroke: C.dna, sw: 2.2, marker: 'dna', fill: 'none' })
  b.path('M 506,846 A 26 26 0 0 1 454,846', { stroke: C.dna, sw: 1.6, dash: '4 3', fill: 'none' })
  b.ctext(480, 912, 'tank-treading 翻滚', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(480, 930, '膜绕不变表面积重排，网架受剪', { size: 10, fill: C.mute })

  // -- 右：黏性与病理 --
  b.rect(680, 800, 340, 82, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.2, rx: 8 })
  b.text(700, 826, '内部黏性耗散', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(700, 850, '血红蛋白溶液黏度高：细胞质黏度约 6–10 mPa·s——黏性耗散成为主要阻力。', { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
  b.rect(1040, 800, 316, 82, { fill: C.badL, fillOp: 0.55, stroke: C.bad, sw: 1.2, rx: 8 })
  b.text(1060, 826, '病理：膜变硬 → 脾脏滞留', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(1060, 850, '疟原虫感染、镰刀型贫血、遗传性球形红细胞增多症。', { size: 10.5, fill: C.sub, maxW: 280, lh: 14 })
  b.wtext(680, 916, '红细胞的力学（μ、κ、黏度、面积过剩）直接就是它的生理学与病理学——「结构—力学—功能」统一的教科书案例，也是血液流变学定量建模的基石。', { size: 10.5, fill: C.mute, maxW: 660, lh: 14 })
}

export default scene({
  title: '红细胞膜力学：剪切模量、面积过剩与形变模式',
  subtitle: 'μ ≈ 5–10 μN/m（血影蛋白网架）；κ ≈ 2×10⁻¹⁹ J；KA ≈ 0.5 N/m；面积过剩 ~40% → 双凹形与挤过 3–4 μm 毛细血管（tank-treading，~0.1 s）',
  draw,
})
