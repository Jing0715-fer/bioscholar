// bc ch2-s4 膜流动性与膜脂多态性（39-a 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、相变温度：凝胶态 ⇌ 液晶态 ============
  b.panel(30, 132, 660, 300, { title: '一、相变温度 Tm：凝胶态 ⇌ 液晶态' })
  const lipidG = (x: number, y: number, up: boolean) => {
    // 凝胶态磷脂：头部圆 + 两条全反式伸展尾
    const hy = up ? y : y
    b.circle(x, hy, 6, { fill: C.dna, stroke: C.dna, sw: 1 })
    const d = up ? 1 : -1
    b.line(x - 3.5, hy + 6 * d, x - 3.5, hy + 34 * d, { stroke: C.dna, sw: 2 })
    b.line(x + 3.5, hy + 6 * d, x + 3.5, hy + 34 * d, { stroke: C.dna, sw: 2 })
  }
  const lipidL = (x: number, y: number, up: boolean) => {
    // 液晶态磷脂：尾部弯曲摆动
    const d = up ? 1 : -1
    b.circle(x, y, 6, { fill: C.dna, stroke: C.dna, sw: 1 })
    b.path(`M${x - 4},${y + 6 * d} q7,13 -3,20 q-4,8 3,14`, { stroke: C.dna, sw: 2 })
    b.path(`M${x + 4},${y + 6 * d} q-6,15 5,22 q4,7 -2,12`, { stroke: C.dna, sw: 2 })
  }
  // 左：凝胶态双层（紧密整齐）
  for (let i = 0; i < 8; i++) { lipidG(64 + i * 30, 196, true); lipidG(64 + i * 30, 258, false) }
  b.ctext(184, 312, '凝胶态 Lβ：脂肪酸链全反式伸展 · 有序', { size: 12, weight: 700, fill: C.sub })
  // 右：液晶态双层（疏松弯曲）
  for (let i = 0; i < 7; i++) { lipidL(392 + i * 34, 196, true); lipidL(392 + i * 34, 262, false) }
  b.ctext(510, 312, '液晶态 Lα：链运动加剧 · 旁式构象增多', { size: 12, weight: 700, fill: C.sub })
  // Tm 双向箭头
  b.line(320, 228, 366, 228, { stroke: C.bad, sw: 2.4, marker: 'bad', markerStart: 'bad' })
  b.ctext(343, 210, 'Tm', { size: 14, weight: 700, fill: C.bad })
  b.ctext(343, 252, '相变', { size: 10.5, fill: C.mute })
  b.wtext(50, 356, '生物膜只有处于液晶态才具生理功能；低于 Tm 为凝胶态，高于 Tm 转为液晶态。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })

  // ============ 二、影响膜流动性的因素 ============
  b.panel(710, 132, 660, 300, { title: '二、影响膜流动性的四大因素' })
  b.text(730, 200, '① 链长：链越长 → 疏水相互作用越强 → Tm 越高，流动性越低', { size: 12, fill: C.sub })
  b.text(730, 232, '② 不饱和度：顺式双键引入弯曲 → 阻碍紧密排列 → Tm 显著降低', { size: 12, fill: C.sub })
  // 顺式双键「打弯」小图
  b.circle(1252, 226, 5, { fill: C.dna })
  b.path('M1252,232 q-6,12 4,16 q8,4 2,14', { stroke: C.dna, sw: 1.8 })
  b.path('M1256,234 l6,-6 M1252,244 l7,-4', { stroke: C.bad, sw: 1.4 })
  b.ctext(1262, 262, '顺式双键', { size: 9.5, fill: C.mute })
  b.text(730, 264, '耐寒生物膜富含不饱和脂肪酸——抗冻适应的分子基础', { size: 11, fill: C.mute })
  // 胆固醇双向调节
  b.text(730, 300, '③ 胆固醇的双向调节：', { size: 12, weight: 700, fill: C.ink })
  b.rect(884, 288, 30, 26, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 5 })
  b.line(899, 314, 899, 336, { stroke: C.warn, sw: 2 })
  b.ctext(899, 354, '胆固醇', { size: 10.5, fill: C.warn })
  b.arrow(920, 296, 944, 282, { stroke: C.bad, sw: 1.6 })
  b.text(952, 280, 'T > Tm：限制磷脂运动（降流动性）', { size: 11, fill: C.bad })
  b.arrow(920, 320, 944, 334, { stroke: C.ok, sw: 1.6 })
  b.text(952, 340, 'T < Tm：防止链紧密堆积（保流动性）', { size: 11, fill: C.ok })
  b.text(730, 396, '④ 膜蛋白：嵌入蛋白与周边脂质（界面脂）结合，限制其运动', { size: 12, fill: C.sub })
  b.text(730, 424, '双向调节使膜流动性在较宽温度范围内保持稳定。', { size: 11, fill: C.mute })

  // ============ 三、分子几何决定脂质多态性 ============
  b.panel(30, 460, 660, 512, { title: '三、分子几何（临界堆积参数）决定脂质多态性' })
  // 行 1：圆柱 → 双层
  b.text(60, 512, '① 圆柱形（两链等宽）', { size: 12, weight: 700, fill: C.ink })
  b.circle(96, 548, 6, { fill: C.dna })
  b.line(92.5, 554, 92.5, 578, { stroke: C.dna, sw: 2 })
  b.line(99.5, 554, 99.5, 578, { stroke: C.dna, sw: 2 })
  b.arrow(130, 560, 175, 560, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  for (let i = 0; i < 5; i++) {
    b.circle(200 + i * 26, 542, 5, { fill: C.dna })
    b.circle(200 + i * 26, 578, 5, { fill: C.dna })
    b.line(197 + i * 26, 547, 197 + i * 26, 573, { stroke: C.dna, sw: 1.6 })
    b.line(203 + i * 26, 547, 203 + i * 26, 573, { stroke: C.dna, sw: 1.6 })
  }
  b.text(356, 556, '层状双层（Lα 相）', { size: 11.5, weight: 700, fill: C.sub })
  b.text(356, 576, '卵磷脂 · 鞘磷脂', { size: 10.5, fill: C.mute })
  // 行 2：倒锥 → 胶束
  b.text(60, 632, '② 倒锥形（单链 · 头大）', { size: 12, weight: 700, fill: C.ink })
  b.polygon([[84, 664], [108, 664], [101, 694], [91, 694]], { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.circle(96, 660, 7, { fill: C.acc })
  b.arrow(130, 678, 175, 678, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  // 胶束：头部朝外呈球状
  b.circle(246, 678, 34, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 1.8 })
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2
    b.circle(246 + 34 * Math.cos(a), 678 + 34 * Math.sin(a), 5, { fill: C.acc })
  }
  b.text(306, 674, '胶束（micelle）', { size: 11.5, weight: 700, fill: C.sub })
  b.text(306, 694, '溶血磷脂 · 去污剂', { size: 10.5, fill: C.mute })
  // 行 3：锥形 → 倒六角相 H_II
  b.text(60, 752, '③ 锥形（头小 · 两链张开）', { size: 12, weight: 700, fill: C.ink })
  b.circle(92, 790, 5, { fill: C.rna })
  b.polygon([[87, 795], [97, 795], [104, 822], [80, 822]], { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.arrow(130, 800, 175, 800, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  // 倒六角相：六边形管（头朝内围成水通道）
  b.polygon([[246, 766], [286, 789], [286, 835], [246, 858], [206, 835], [206, 789]], { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.8 })
  b.circle(246, 812, 13, { fill: '#e0f2fe', stroke: C.acc, sw: 1.5 })
  b.ctext(246, 815, 'H₂O', { size: 8, fill: C.accD })
  b.text(316, 796, '倒六角相（H_II 相）', { size: 11.5, weight: 700, fill: C.sub })
  b.text(316, 816, 'PE · 心磷脂（Ca²⁺ 存在下）', { size: 10.5, fill: C.mute })
  b.wtext(50, 878, '非双层结构虽有破坏膜完整性的风险，却在膜融合、细胞分裂等动态过程中短暂出现；另有六角相 H_I（某些带电脂质）；线粒体心磷脂促进内膜局部弯曲，有利于 ATP 合酶组装。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })

  // ============ 四、脂筏与侧向扩散证据 ============
  b.panel(710, 460, 660, 512, { title: '四、脂筏微区与膜蛋白侧向扩散的证据' })
  // 脂筏：双层中的一块致密微区
  b.tag(940, 512, '脂筏（lipid raft）', { fill: C.okL, stroke: C.ok, size: 12.5, weight: 700, tfill: '#065f46', pad: 8 })
  b.rect(836, 546, 236, 52, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.6, dash: '6 4', rx: 8 })
  for (let i = 0; i < 14; i++) {
    const x = 730 + i * 42
    if (x < 836 || x > 1072) {
      b.circle(x, 552, 5, { fill: C.dna })
      b.path(`M${x - 3.5},${557} q6,10 -2,18 q-4,8 3,14`, { stroke: C.dna, sw: 1.6 })
      b.circle(x, 592, 5, { fill: C.dna })
      b.path(`M${x + 3.5},${587} q-6,-10 2,-18 q4,-8 -3,-14`, { stroke: C.dna, sw: 1.6 })
    }
  }
  for (let i = 0; i < 5; i++) {
    const x = 856 + i * 48
    b.circle(x, 552, 5, { fill: C.dna })
    b.line(x - 3.5, 557, x - 3.5, 587, { stroke: C.dna, sw: 1.6 })
    b.line(x + 3.5, 557, x + 3.5, 587, { stroke: C.dna, sw: 1.6 })
    b.circle(x, 592, 5, { fill: C.dna })
    b.rect(x - 6, 566, 12, 12, { fill: C.warnL, stroke: C.warn, sw: 1.2, rx: 3 })
  }
  b.wtext(730, 612, '（双层流动区：不饱和磷脂弯曲链）', { size: 10.5, fill: C.mute, maxW: 106, lh: 14 })
  b.ctext(954, 626, '（脂筏：鞘磷脂 + 饱和磷脂 + 胆固醇）', { size: 10.5, fill: C.ok })
  b.wtext(730, 656, '脂筏微区富集信号分子，参与信号转导与膜运输。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })
  // Frye–Edidin 融合实验
  b.text(730, 706, '膜蛋白侧向扩散的经典证据（人 · 鼠细胞融合实验）：', { size: 12.5, weight: 700, fill: C.ink })
  // 阶段 A：人、鼠细胞各带一种荧光标记
  b.cell(780, 790, 38, 34, { fill: C.panel, stroke: C.sub, sw: 1.8 })
  b.cell(880, 790, 38, 34, { fill: C.panel, stroke: C.sub, sw: 1.8 })
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2
    b.circle(780 + 25 * Math.cos(a), 790 + 20 * Math.sin(a), 4, { fill: C.bad })
    b.circle(880 + 25 * Math.cos(a), 790 + 20 * Math.sin(a), 4, { fill: C.acc })
  }
  b.arrow(928, 790, 972, 790, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(950, 770, '融合', { size: 10.5, fill: C.mute })
  // 阶段 B：异核体上两种标记各居半区
  b.cell(1060, 790, 44, 38, { fill: C.panel, stroke: C.sub, sw: 1.8 })
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI - Math.PI / 2
    b.circle(1060 + 29 * Math.cos(a), 790 + 24 * Math.sin(a), 4, { fill: C.bad })
    b.circle(1060 - 29 * Math.cos(a), 790 + 24 * Math.sin(a), 4, { fill: C.acc })
  }
  b.arrow(1112, 790, 1156, 790, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(1134, 770, '40 min', { size: 10.5, fill: C.mute })
  // 阶段 C：均匀互混
  b.cell(1260, 790, 44, 38, { fill: C.panel, stroke: C.sub, sw: 1.8 })
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2
    b.circle(1260 + 29 * Math.cos(a), 790 + 24 * Math.sin(a), 4, { fill: k % 2 ? C.bad : C.acc })
  }
  b.ctext(830, 852, '人 · 鼠细胞', { size: 10, fill: C.mute })
  b.ctext(1060, 852, '异核体：各居半区', { size: 10, fill: C.mute })
  b.ctext(1260, 852, '均匀互混', { size: 10, fill: C.mute })
  b.legend(1000, 738, [['人细胞蛋白', C.bad], ['鼠细胞蛋白', C.acc]], { size: 10.5 })
  b.wtext(730, 906, '两种荧光标记蛋白在异核体上 40 分钟内均匀互混——膜蛋白可侧向扩散；荧光抗体使膜蛋白成斑、成帽，亦证明其可动性。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })
}

export default scene({
  title: '膜流动性与膜脂多态性：从相变到分子几何',
  subtitle: 'Tm 上下凝胶态 ⇌ 液晶态互变，链长/不饱和度/胆固醇双向调节流动性；圆柱→双层、倒锥→胶束、锥形→倒六角相的几何法则与脂筏微区',
  draw,
})
