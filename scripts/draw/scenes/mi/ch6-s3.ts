// mi ch6-s3 自养代谢：光能与化能（39-f 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、光能自养的三种方案 ============
  b.panel(30, 132, 1340, 368, { title: '一、光能自养的三种方案：蓝细菌双系统放氧 · 紫色细菌单系统不放氧 · 菌视紫质直接泵质子' })

  // --- 左：蓝细菌 Z 链 ---
  b.tag(255, 208, '蓝细菌（产氧光合）', { fill: C.okL, stroke: C.ok, size: 13.5, weight: 700, tfill: C.ink, pad: 10 })
  b.rect(120, 296, 74, 34, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 7 })
  b.ctext(157, 317, 'PSII', { size: 13, weight: 700, fill: C.dnaD })
  b.rect(330, 296, 74, 34, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 7 })
  b.ctext(367, 317, 'PSI', { size: 13, weight: 700, fill: C.dnaD })
  // 光波（太阳）
  b.circle(255, 240, 11, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.arrow(243, 250, 172, 290, { stroke: C.warn, sw: 2, marker: 'mute', dash: '6 4' })
  b.arrow(267, 250, 352, 290, { stroke: C.warn, sw: 2, marker: 'mute', dash: '6 4' })
  b.ctext(255, 222, '光', { size: 11, weight: 700, fill: C.warn })
  // H2O 进入 / O2 放出
  b.tag(84, 356, 'H₂O', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 8 })
  b.arrow(102, 344, 138, 334, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(84, 292, 'O₂', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.ok, pad: 8 })
  b.arrow(124, 296, 104, 294, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  // 电子传递链 PSII→PSI
  b.arrow(194, 313, 330, 313, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.ctext(262, 300, '电子传递链', { size: 10, fill: C.mute })
  // PSI→NADPH
  b.arrow(404, 313, 448, 313, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.tag(448, 313, 'NADPH', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 7 })
  b.wtext(70, 396, 'PSII 与 PSI 串联光解水放氧，电子终传给 NADP⁺；捕光天线含叶绿素 a 与藻胆蛋白。', { size: 11, fill: C.sub, maxW: 390, lh: 16 })

  // --- 中：紫色细菌单系统环式 ---
  b.tag(685, 208, '紫色细菌（不产氧光合）', { fill: C.proL, stroke: C.pro, size: 13.5, weight: 700, tfill: C.ink, pad: 10 })
  b.rect(643, 296, 84, 36, { fill: C.proL, stroke: C.pro, sw: 2, rx: 7 })
  b.ctext(685, 318, '单一反应中心', { size: 11.5, weight: 700, fill: C.proD })
  // 环式电子流两段弧
  b.path('M 727 300 C 770 262, 600 262, 648 296', { stroke: C.enz, sw: 2.2, fill: 'none', marker: 'enz' })
  b.path('M 643 332 C 600 368, 770 368, 722 334', { stroke: C.enz, sw: 2.2, fill: 'none', marker: 'enz' })
  b.ctext(685, 268, '环式电子流', { size: 10, weight: 700, fill: C.enzD })
  // 供体与产物
  b.tag(560, 352, 'H₂S', { fill: C.warnL, stroke: C.warn, size: 11.5, weight: 700, tfill: C.ink, pad: 8 })
  b.arrow(590, 348, 645, 336, { stroke: C.warn, sw: 2, marker: 'mute' })
  b.tag(812, 352, 'S⁰ / SO₄²⁻', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })
  b.arrow(727, 336, 782, 348, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(685, 246, '细菌叶绿素集光', { size: 10, fill: C.mute })
  b.wtext(500, 396, '仅具单一光合系统，以 H₂S 等为电子供体、细菌叶绿素集光，从不放氧（绿细菌同属此列）。', { size: 11, fill: C.sub, maxW: 390, lh: 16 })

  // --- 右：菌视紫质 ---
  b.tag(1100, 208, '嗜盐古菌（菌视紫质）', { fill: C.rnaL, stroke: C.rna, size: 13.5, weight: 700, tfill: C.ink, pad: 10 })
  b.bilayer(930, 306, 340, { tint: C.dna, h: 46 })
  b.rect(1012, 282, 26, 94, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 8 })
  b.wtext(950, 268, '菌视紫质', { size: 11.5, weight: 700, fill: C.rnaD, maxW: 90, lh: 15 })
  b.path('M 1082 236 q 8 -12 16 0 q 8 12 16 0', { stroke: C.warn, sw: 2, fill: 'none' })
  b.arrow(1114, 236, 1044, 276, { stroke: C.warn, sw: 2, marker: 'mute', dash: '6 4' })
  b.arrow(1004, 356, 1004, 300, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.tag(960, 370, 'H⁺ 泵出', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 6 })
  b.rect(1210, 282, 24, 94, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 8 })
  b.wtext(1196, 268, 'ATP 合酶', { size: 11, weight: 700, fill: C.dnaD, maxW: 80, lh: 14 })
  b.arrow(1234, 322, 1272, 322, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.tag(1288, 322, 'ATP', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  b.wtext(920, 396, '菌视紫质吸收光后直接把 H⁺ 泵出膜外建立质子梯度——不经电子传递即产 ATP。', { size: 11, fill: C.sub, maxW: 390, lh: 16 })

  // ============ 二、化能自养 ============
  b.panel(30, 512, 660, 250, { title: '二、化能自养：氧化无机物获能（硝化 · 硫氧化 · 氢氧化）' })

  // 硝化两级
  b.tag(105, 586, 'NH₃', { fill: C.warnL, stroke: C.warn, size: 12, weight: 700, tfill: C.ink, pad: 9 })
  b.arrow(140, 586, 258, 586, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(200, 570, '氨氧化', { size: 10, weight: 700, fill: C.accD })
  b.tag(296, 586, 'NO₂⁻', { fill: C.rnaL, stroke: C.rna, size: 12, weight: 700, tfill: C.rnaD, pad: 9 })
  b.arrow(332, 586, 450, 586, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(392, 570, '亚硝酸氧化', { size: 10, weight: 700, fill: C.accD })
  b.tag(488, 586, 'NO₃⁻', { fill: C.okL, stroke: C.ok, size: 12, weight: 700, tfill: C.ok, pad: 9 })
  b.ctext(200, 604, '亚硝化单胞菌属 · ΔG°′≈−275 kJ/mol', { size: 9.5, fill: C.mute })
  b.ctext(392, 604, '硝化杆菌属 · 产能更少', { size: 9.5, fill: C.mute })

  // 硫氧化
  b.tag(105, 662, 'H₂S / S⁰', { fill: C.warnL, stroke: C.warn, size: 11.5, weight: 700, tfill: C.ink, pad: 8 })
  b.arrow(152, 662, 300, 662, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(226, 646, '硫杆菌氧化', { size: 10, weight: 700, fill: C.accD })
  b.tag(345, 662, 'SO₄²⁻', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 8 })

  // 氢氧化
  b.tag(105, 712, 'H₂ + ½O₂', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.arrow(160, 712, 330, 712, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(245, 696, '氢细菌（真养产碱菌）', { size: 10, weight: 700, fill: C.accD })
  b.ctext(245, 730, 'ΔG°′≈−237 kJ/mol · 多为兼性自养', { size: 9.5, fill: C.mute })
  b.tag(372, 712, 'H₂O', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.ok, pad: 8 })
  b.wtext(430, 646, '两级硝化各自产能很少，故硝化细菌生长缓慢——世代以小时计。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })

  // ============ 三、碳同化：Calvin 循环 ============
  b.panel(710, 512, 660, 250, { title: '三、碳同化途径多元：Calvin 循环为先固定、再还原、后再生' })

  b.tag(800, 578, 'RuBP', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.arrow(842, 578, 952, 578, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.ctext(897, 562, 'RuBisCO 固定 CO₂', { size: 10, weight: 700, fill: C.enzD })
  b.tag(992, 578, '2×3-PGA', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 8 })
  // 还原（向下）
  b.arrow(992, 598, 992, 650, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.text(1004, 622, 'ATP + NADPH（还原）', { size: 10, weight: 700, fill: C.dnaD })
  b.tag(992, 672, '三碳糖', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.ok, pad: 9 })
  // 再生（向左回）
  b.arrow(950, 672, 842, 672, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(897, 656, '再生（耗 ATP）', { size: 10, weight: 700, fill: C.rnaD })
  b.arrow(800, 598, 800, 650, { stroke: C.mute, sw: 1.6, dash: '5 4' })

  // 右侧数字卡
  b.rect(1090, 548, 260, 140, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(1110, 576, '化学计量', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(1110, 600, '每固定 3 个 CO₂ 合成 1 个三碳糖，净耗 9 个 ATP 与 6 个 NADPH。', { size: 11, fill: C.sub, maxW: 220, lh: 16 })
  b.wtext(1110, 650, 'Calvin 与 Benson 以 ¹⁴C 标记配合二维纸层析拼出循环（1961 年诺贝尔奖）。', { size: 10.5, fill: C.mute, maxW: 220, lh: 15 })
  b.wtext(730, 716, '其他固碳路线：逆向 TCA 循环 · 3-HP 途径 · 乙酰辅酶 A 途径（严格厌氧菌）。', { size: 11, fill: C.sub, maxW: 340, lh: 16 })
  b.ctext(730, 742, '「先固定、再还原、后再生」三阶段框架适用于理解一切自养固碳', { size: 10, fill: C.mute })

  // ============ 四、深海热泉 ============
  b.panel(30, 774, 1340, 206, { title: '四、深海热泉（1977 年「阿尔文号」· 加拉帕戈斯裂谷）：完全脱离阳光的化学合成生态' })

  // 左：喷口示意
  b.line(60, 946, 400, 946, { stroke: C.sub, sw: 2.5 })
  b.polygon([[180, 946], [196, 862], [244, 862], [260, 946]], { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.polygon([[196, 862], [206, 838], [234, 838], [244, 862]], { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.path('M 220 836 C 190 812, 250 800, 218 780', { stroke: C.warn, sw: 3, fill: 'none', opacity: 0.75 })
  b.path('M 220 836 C 250 814, 186 796, 226 778', { stroke: C.warn, sw: 3, fill: 'none', opacity: 0.75 })
  b.ctext(150, 824, '富 H₂S 热液', { size: 10.5, weight: 700, fill: C.warn })
  b.ctext(220, 968, '海底热泉喷口', { size: 10, fill: C.mute })

  // 中右：化学合成食物链
  const chain: Array<[number, string, string, string, string]> = [
    [470, 'H₂S + O₂', '氧化获能', C.warn, C.warnL],
    [690, '硫化物氧化细菌', '获能并固定 CO₂', C.acc, C.accL],
    [930, '初级生产者', '黑暗深海取代植物', C.ok, C.okL],
    [1160, '管虫等深海群落', '消费者', C.pro, C.proL],
  ]
  chain.forEach(([cx, t, s, c, cl], i) => {
    b.tag(cx, 878, t, { fill: cl, stroke: c, size: 12, weight: 700, tfill: C.ink, pad: 10 })
    b.ctext(cx, 906, s, { size: 10, fill: C.mute })
    if (i < 3) b.arrow(cx + 100, 878, chain[i + 1][0] - 110, 878, { stroke: C.sub, sw: 2.2, marker: 'mute' })
  })
  b.wtext(470, 938, '生态系可以完全脱离阳光运转——热液硫化物供养细菌初级生产，颠覆「一切生态系终须依靠阳光」的成见。', { size: 11.5, fill: C.sub, maxW: 880, lh: 16 })
}

export default scene({
  title: '自养代谢：光能自养三方案与化能自养产能',
  subtitle: '蓝细菌双系统光解水放氧，紫细菌单系统以 H₂S 为供体不放氧，菌视紫质直接光泵质子；Calvin 循环每 3 CO₂ 耗 9 ATP + 6 NADPH；1977 年热泉见化学合成生态',
  draw,
})
