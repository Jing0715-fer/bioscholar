// vi ch10-s1 突变与准种（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、聚合酶保真度谱系 ============
  b.panel(30, 132, 660, 430, { title: '一、没有校读的聚合酶：突变率谱系' })
  b.wtext(46, 190, 'RdRp 缺乏校读，使 RNA 病毒单碱基错误率达 10^{-6}–10^{-4}，比校读加错配修复的细胞 DNA 聚合酶高三到五个数量级。', { size: 11, fill: C.sub, maxW: 600, lh: 16 })
  // 对数轴：10^{-11}（左）→ 10^{-4}（右）
  const ex = (e: number) => 60 + ((e + 11) / 7) * 560
  const bars: [string, number, number, string, string, string][] = [
    ['细胞 DNA 聚合酶（校读＋错配修复）', -11, -9, C.dnaL, C.dna, C.dnaD],
    ['冠状病毒 RdRp＋nsp14（ExoN 校读）', -7, -5, C.rnaL, C.rna, C.rnaD],
    ['典型 RdRp（流感等，无校读）', -6, -4, C.badL, C.bad, C.bad],
  ]
  bars.forEach(([nm, e1, e2, fill, stroke, tf], i) => {
    const by = 246 + i * 62
    b.rect(ex(e1), by, ex(e2) - ex(e1), 26, { fill, stroke, sw: 1.8, rx: 6 })
    b.text(ex(e1), by - 10, nm, { size: 11.5, weight: 700, fill: tf })
    b.ctext(ex(e1) + (ex(e2) - ex(e1)) / 2, by + 18, i === 0 ? '10^{-11}–10^{-9}' : i === 1 ? '≈10^{-7}–10^{-5}' : '10^{-6}–10^{-4}', { size: 10.5, weight: 700, fill: tf })
  })
  b.line(60, 448, 640, 448, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  ;[-11, -9, -7, -5].forEach(e => {
    b.line(ex(e), 448, ex(e), 455, { stroke: C.sub, sw: 1.8 })
    b.ctext(ex(e), 470, `10^{${e}}`, { size: 12, fill: C.mute })
  })
  b.ctext(350, 496, '单碱基错误率（对数尺度，向右升高）', { size: 11, fill: C.sub })
  b.wtext(46, 520, '冠状病毒是著名例外：nsp14 兼具 3′→5′ 外切核酸酶（ExoN）活性，为聚合酶充当校读器，使突变率下降约一个数量级——26 至 32 kb 的基因组稳居 RNA 世界之最。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、准种：选择作用于突变谱 ============
  b.panel(710, 132, 660, 430, { title: '二、准种：选择作用于突变谱整体' })
  b.ctext(880, 208, '突变谱（准种）', { size: 12.5, weight: 700, fill: C.ink })
  b.circle(880, 310, 22, { fill: C.accL, stroke: C.acc, sw: 2.4 })
  b.ctext(880, 314, '共有', { size: 9.5, weight: 700, fill: C.accD })
  const dots: [number, number][] = [[-70, -60], [-95, -8], [-62, 44], [-14, -78], [16, 78], [58, -52], [84, 22], [70, -10], [-40, 82], [-24, -42], [36, -18], [44, 40], [-92, 40], [92, -60], [8, 6], [-52, 8], [22, -66], [64, 62]]
  dots.forEach(([dx, dy], i) => {
    b.circle(880 + dx, 310 + dy, 4.4, { fill: i % 5 === 0 ? C.enz : C.acc, fillOp: 0.85, stroke: 'none' })
  })
  b.ctext(880, 408, '共有序列＝群体的加权平均', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(880, 426, '（并非真实存在的「个体」）', { size: 9.5, fill: C.mute })
  b.ctext(880, 470, 'Eigen 1971 年提出准种理论：', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(880, 490, '复制保真度有限而群体足够大时，', { size: 10.5, fill: C.sub })
  b.ctext(880, 507, '自然选择的对象是整个突变谱。', { size: 10.5, fill: C.sub })
  // 右：Domingo Qβ 实验
  b.text(1080, 208, 'Domingo 1978（Qβ 噬菌体）：', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(1080, 232, 90, 66, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.circle(1125, 265, 6, { fill: C.acc })
  b.ctext(1125, 316, '单一克隆纯化扩增', { size: 10, fill: C.sub })
  b.arrow(1125, 332, 1125, 366, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(1170, 352, '仅数轮传代', { size: 9.5, fill: C.enzD })
  const dots2: [number, number][] = [[-38, -26], [30, -34], [6, 24], [-26, 30], [44, 10], [-4, -60], [52, -8], [-56, 4]]
  dots2.forEach(([dx, dy], i) => {
    b.circle(1125 + dx, 408 + dy, 4.2, { fill: i % 3 === 0 ? C.enz : C.acc, fillOp: 0.85 })
  })
  b.ctext(1125, 460, '复杂突变谱重新恢复', { size: 10, weight: 700, fill: C.enzD })
  b.wtext(1080, 484, '把单一克隆接种后再传代，群体迅速回到复杂谱——准种结构是复制保真度决定的稳态。', { size: 10.5, fill: C.sub, maxW: 280, lh: 15 })

  // ============ 三、错误阈值：33 kb 上限与致死诱变 ============
  b.panel(30, 586, 660, 394, { title: '三、错误阈值：RNA 基因组约 33 kb 的上限' })
  b.axis(70, 840, 270, 180, {
    xticks: [[0, '低'], [1, '错误率 → 高']], grid: false,
  })
  b.curve(70, 840, 270, 180, [[0, 0.95], [0.3, 0.88], [0.5, 0.7], [0.62, 0.42], [0.74, 0.12], [1, 0.04]], { stroke: C.acc, sw: 2.8, smooth: true })
  b.line(70 + 0.62 * 270, 840, 70 + 0.62 * 270, 660, { stroke: C.bad, sw: 1.8, dash: '5 4' })
  b.tag(70 + 0.62 * 270, 648, '错误阈值', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  // 底部双栏说明（手动拆行，避免左栏长 token 溢入右栏）
  b.text(60, 898, '纵轴：突变谱的信息保持度。', { size: 10.5, fill: C.sub })
  b.text(60, 913, '越过阈值后突变谱解体、', { size: 10.5, fill: C.sub })
  b.text(60, 928, '遗传信息无法维持——绝大多数', { size: 10.5, fill: C.sub })
  b.text(60, 943, 'RNA 病毒基因组因此被压在约 33 kb 以下。', { size: 10.5, fill: C.sub })
  // 右：致死诱变
  b.ctext(560, 640, '致死诱变：把错误率推过阈值', { size: 11.5, weight: 700, fill: C.ink })
  const dotsA: [number, number][] = [[-30, -18], [24, -28], [4, 20], [-20, 26], [34, 8], [-2, -46]]
  dotsA.forEach(([dx, dy]) => b.circle(430 + dx, 730 + dy, 4, { fill: C.acc, fillOp: 0.85 }))
  b.circle(430, 730, 40, { fill: 'none', stroke: C.acc, sw: 1.6, dash: '4 4' })
  b.ctext(430, 796, '阈值内：凝聚', { size: 10, fill: C.acc })
  b.arrow(486, 730, 546, 730, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.tag(516, 700, '诱变剂', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 6 })
  const dotsB: [number, number][] = [[-58, -38], [38, -54], [14, 40], [-40, 52], [56, 12], [-4, -62], [60, -24], [-64, 16]]
  dotsB.forEach(([dx, dy], i) => b.circle(620 + dx, 730 + dy, 4, { fill: i % 2 ? C.enz : C.bad, fillOp: 0.8 }))
  b.circle(620, 730, 62, { fill: 'none', stroke: C.bad, sw: 1.4, dash: '2 5' })
  b.ctext(620, 816, '阈值外：解体', { size: 10, weight: 700, fill: C.bad })
  b.text(380, 872, '「致死诱变」由此派生为治疗思路；', { size: 10.5, fill: C.sub })
  b.text(380, 887, '穆勒棘轮说明小群体瓶颈下适应度', { size: 10.5, fill: C.sub })
  b.text(380, 902, '单向衰减——减毒选育正利用这一点。', { size: 10.5, fill: C.sub })
  b.text(380, 928, '冠状病毒唯有先获得校读酶', { size: 10.5, fill: C.mute })
  b.text(380, 943, '才能越界支撑 26–32 kb 大基因组。', { size: 10.5, fill: C.mute })

  // ============ 四、正负链差异与医学含义 ============
  b.panel(710, 586, 660, 394, { title: '四、负链的克制、穆勒棘轮与医学含义' })
  b.rect(730, 646, 290, 74, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8, fillOp: 0.6 })
  b.ctext(875, 668, '正链 RNA 病毒', { size: 12, weight: 700, fill: C.bad })
  b.wtext(742, 690, '模板裸露、经胞质游离复制——突变率与演化速率高', { size: 9.5, fill: C.sub, maxW: 266, lh: 13 })
  b.rect(1040, 646, 290, 74, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.6 })
  b.ctext(1185, 668, '负链 RNA 病毒', { size: 12, weight: 700, fill: C.accD })
  b.wtext(1052, 690, '核蛋白包裹模板、膜结合复制工厂、更严瓶颈——总体更低', { size: 9.5, fill: C.sub, maxW: 266, lh: 13 })
  // 穆勒棘轮
  b.text(730, 764, '穆勒棘轮：瓶颈逐次丢失最优突变类', { size: 11.5, weight: 700, fill: C.ink })
  ;[[800, 842, 34], [960, 842, 24], [1100, 842, 16]].forEach(([cx, cy, r], i) => {
    b.circle(cx, cy, r, { fill: C.rnaL, stroke: C.rna, sw: 2 })
    for (let k = 0; k < 8 - i * 2; k++) {
      const a = (k / (8 - i * 2)) * Math.PI * 2 + i
      b.circle(cx + (r - 9) * Math.cos(a), cy + (r - 9) * Math.sin(a), 3.4, { fill: C.rnaD })
    }
    if (i < 2) b.arrow(cx + r + 8, 842, cx + 128 - r - 8, 842, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  })
  b.ctext(800, 900, '瓶颈①', { size: 9.5, fill: C.mute })
  b.ctext(960, 900, '瓶颈②', { size: 9.5, fill: C.mute })
  b.ctext(1100, 900, '适应度衰减', { size: 9.5, weight: 700, fill: C.bad })
  // 穆勒棘轮说明（手动拆行，避免长 token 溢出画布右缘）
  b.text(1160, 800, '小群体逐代传递中，', { size: 10, fill: C.sub })
  b.text(1160, 816, '最少突变的最优类一旦', { size: 10, fill: C.sub })
  b.text(1160, 832, '随机丢失便不可复得——', { size: 10, fill: C.sub })
  b.text(1160, 848, '群体的平均适应度', { size: 10, fill: C.sub })
  b.text(1160, 864, '单向下滑。', { size: 10, fill: C.sub })
  b.tag(1020, 952, '医学含义：耐药与免疫逃逸变异预先存在——联合用药与疫苗设计必须直面', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: '#78350f', pad: 10 })
}

export default scene({
  title: '突变与准种：错误率、突变谱与错误阈值',
  subtitle: 'RdRp 无校读错误率 10^{-6}–10^{-4}（高 3–5 个数量级）；冠状病毒 nsp14 校读支撑 26–32 kb；Eigen 1971 准种＋Domingo 1978 Qβ 证据；错误阈值定 33 kb 上限；耐药变异预先存在',
  draw,
})
