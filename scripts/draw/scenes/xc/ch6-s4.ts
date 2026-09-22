// xc ch6-s4 数据质量指标体系（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、R 三兄弟 ============
  b.panel(30, 132, 660, 430, { title: '一、Rmerge／Rmeas／Rpim：三兄弟辨析' })
  const fml = (y: number, name: string, body: string, note: string, c: string) => {
    b.rect(52, y - 18, 616, 34, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 6 })
    b.text(64, y + 4, name, { size: 12.5, weight: 700, fill: c })
    b.text(196, y + 4, body, { size: 11, fill: C.ink })
    b.etext(656, y + 4, note, { size: 10, fill: C.mute })
  }
  fml(190, 'R_{merge}', 'Σ|I_{i}−〈I〉| / Σ〈I〉', '随冗余单调恶化', C.warn)
  fml(232, 'R_{meas}', '每次测量 ×√(N/(N−1))', '单次精度·与冗余无关', C.bad)
  fml(274, 'R_{pim}', '每次测量 ×√(1/(N−1))', '合并精度·随冗余下降', C.okD)
  b.wtext(52, 312, 'Rmerge 的先天缺陷：拿「每次测量对平均的偏离」记账，却把「平均因此更准」的红利记为零——测得越多指标越难看，尺子天生偏向惩罚勤奋。Diederichs 与 Karplus 1997 年给出校正；看质量应盯 Rmeas 与 Rpim，而非被高冗余推高的 Rmerge 吓退。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // 数值表演图（y 上限 5%）
  b.line(110, 510, 620, 510, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(110, 510, 110, 372, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  ;[1, 2, 3, 4, 5].forEach(v => {
    b.line(110, 510 - v * 26, 620, 510 - v * 26, { stroke: C.faint, sw: 0.8, dash: '3 4', opacity: 0.6 })
    b.etext(102, 514 - v * 26, `${v}`, { size: 9.5, fill: C.mute })
  })
  b.etext(100, 372, 'R(%)', { size: 10, fill: C.mute })
  const px = (f: number) => 110 + f * 500
  const py = (v: number) => 510 - (v / 5) * 130
  b.polyline([[px(0.1), py(2.8)], [px(0.4), py(3.6)], [px(0.7), py(3.8)], [px(1), py(3.9)]] as [number, number][], { stroke: C.warn, sw: 2.6 })
  b.line(110, py(4), 620, py(4), { stroke: C.bad, sw: 2.2, dash: '8 4' })
  b.polyline([[px(0.1), py(2.8)], [px(0.4), py(1.8)], [px(0.7), py(1.3)], [px(1), py(0.9)]] as [number, number][], { stroke: C.ok, sw: 2.6 })
  ;[0.1, 0.4, 0.7, 1].forEach((f, i) => {
    b.ctext(px(f), 528, ['2', '5', '10', '20'][i], { size: 10.5, fill: C.mute })
    b.circle(px(f), py([2.8, 3.6, 3.8, 3.9][i]), 3.4, { fill: C.warn })
    b.circle(px(f), py(4), 3.4, { fill: C.bad })
    b.circle(px(f), py([2.8, 1.8, 1.3, 0.9][i]), 3.4, { fill: C.ok })
  })
  b.ctext(365, 550, '冗余 N →', { size: 11.5, weight: 600, fill: C.sub })
  b.text(618, py(3.9) + 4, '3.9↑', { size: 9.5, weight: 700, fill: C.warnD })
  b.text(618, py(4) - 6, '4.0 恒定', { size: 9.5, weight: 700, fill: C.bad })
  b.text(618, py(0.9) + 4, '0.9↓', { size: 9.5, weight: 700, fill: C.okD })

  // ============ 二、CC1/2 ============
  b.panel(710, 132, 660, 430, { title: '二、CC1/2：分半相关的革命' })
  b.rect(730, 178, 150, 40, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(805, 202, '反射的 N 次观测', { size: 11, weight: 700, fill: C.accD })
  b.arrow(884, 198, 916, 198, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(900, 184, '随机对半', { size: 9.5, weight: 700, fill: C.sub })
  b.rect(920, 166, 108, 32, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 6 })
  b.ctext(974, 187, '半组 A → I_{1}', { size: 10.5, weight: 700, fill: C.dnaD })
  b.rect(920, 202, 108, 32, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 6 })
  b.ctext(974, 223, '半组 B → I_{2}', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(1032, 182, 1064, 182, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1032, 218, 1064, 218, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(1068, 174, 140, 52, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(1138, 195, '逐壳层算相关', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1138, 215, 'CC_{1/2}', { size: 12, weight: 700, fill: C.ink })
  b.wtext(1240, 182, '信号真实则两半互「认得」（CC1/2 高）；只剩噪声则互不相认（趋零）。', { size: 10, fill: C.sub, maxW: 118, lh: 14 })
  // 曲线图
  b.line(760, 470, 1300, 470, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(760, 470, 760, 316, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  ;[1.0, 0.5, 0.143].forEach(v => {
    const yy = 470 - v * 150
    b.line(760, yy, 1300, yy, { stroke: v === 0.143 ? C.bad : C.faint, sw: v === 0.143 ? 1.8 : 0.8, dash: v === 0.143 ? '6 4' : '3 4', opacity: v === 0.143 ? 1 : 0.6 })
    b.etext(752, yy + 4, String(v), { size: 9.5, fill: v === 0.143 ? C.bad : C.mute, weight: v === 0.143 ? 700 : 400 })
  })
  b.ctext(1030, 494, '低分辨率 ← 壳层 → 高分辨率', { size: 11, weight: 600, fill: C.sub })
  const ccPts: [number, number][] = [[0, 0.95], [0.15, 0.92], [0.3, 0.85], [0.45, 0.72], [0.55, 0.55], [0.62, 0.4], [0.68, 0.25], [0.74, 0.143], [0.8, 0.08], [0.9, 0.03], [1, 0.01]]
  b.polyline(ccPts.map(([fx, v]) => [760 + fx * 540, 470 - v * 150] as [number, number]), { stroke: C.dna, sw: 3 })
  b.line(760 + 0.74 * 540, 470, 760 + 0.74 * 540, 470 - 0.143 * 150, { stroke: C.bad, sw: 1.6, dash: '5 4' })
  b.tag(1178, 408, 'CC_{1/2} = 0.143 ↔ CC* = 0.5', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: C.bad, pad: 9 })
  b.ctext(1159, 438, '截断点 d_{min}', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(730, 514, 'CC* = √(2CC_{1/2}/(1+CC_{1/2})) 把「数据与真实强度的相关」与「模型与真实的相关」放上同一标尺；0.143 恰对应 CC* = 0.5——CC_{1/2} 不低于 0.143 成为现代分辨率截断的主判据，比 I/σ 惯例更「敢」：I/σ 跌破 2 的壳层，CC1/2 仍常证明信号真实。Karplus 与 Diederichs 2012。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14 })

  // ============ 三、红绿灯与截断规程 ============
  b.panel(30, 592, 1340, 370, { title: '三、数据质量红绿灯与分辨率截断规程' })
  b.table(60, 656, 1300, {
    headers: ['信号', '可用（绿灯）', '谨慎（黄灯）', '需重收（红灯）'],
    colW: [250, 350, 340, 360],
    rowH: 34,
    fontSize: 12,
    rows: [
      ['外壳 CC_{1/2}', '0.143 以上', '0.10–0.143', '0.10 以下'],
      ['外壳 I/σ(I)', '2 以上', '1–2', '1 以下'],
      ['整体完整度', '95% 以上', '85–95%', '85% 以下或低角缺失'],
      ['R_{pim} 走势', '低而平稳', '随分辨率渐升', '高分辨率暴涨'],
      ['反常信噪比', '峰值壳层明显高于 1', '边缘', '无信号而方案依赖反常'],
    ],
  })
  b.wtext(60, 890, '截断规程：以 CC_{1/2} 与 I/σ 双指标在各壳层的走势为据、以图为准——放宽与收紧各试一档，比较电子密度与差值图是否只剩噪声条纹。警惕「无效高分辨外推」：把噪声当数据，误差进入精修，自由 R 会揭穿这种自欺；反之把仍有信号的高角一刀切掉同样是浪费。', { size: 10.5, fill: C.sub, maxW: 630, lh: 15.5 })
  b.wtext(730, 890, 'I/σ ≥ 2 出身「肉眼时代」（胶片挑斑的经验阈），CC1/2 时代退居辅助；两判据冲突恰是数据处于临界带的信号，应显式标注而非静默取舍。红绿灯只是初筛：黄灯数据常仍可用于分子置换，红灯数据救不回相位——「宁可重收，不可硬解」。', { size: 10.5, fill: C.sub, maxW: 630, lh: 15.5 })
}

export default scene({
  title: '数据质量指标体系：R 三兄弟、CC1/2 与红绿灯',
  subtitle: 'Rmerge 随冗余恶化（2.8%→3.9%）、Rmeas 恒定 4.0%、Rpim 降至 0.9%；CC1/2=0.143 ↔ CC*=0.5 为现代截断主判据；I/σ≥2 惯例退居辅助；完整度 ≥95%，反常冗余 7–10×',
  draw,
})
