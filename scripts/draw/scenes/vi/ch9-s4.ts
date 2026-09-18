// vi ch9-s4 噬菌体对分子生物学的奠基（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Hershey–Chase 1952：搅拌器定案 ============
  b.panel(30, 132, 660, 430, { title: '一、Hershey–Chase（1952）：搅拌器实验定案' })
  b.tag(200, 180, '³²P 标记 DNA', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(480, 180, '³⁵S 标记蛋白外壳', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 8 })
  // 吸附中的噬菌体与细胞
  b.bacterium(200, 234, 62, 24, { shape: 'rod' })
  b.virion(252, 222, 10, { shape: 'icosahedral', stroke: C.bad })
  b.bacterium(480, 234, 62, 24, { shape: 'rod' })
  b.virion(532, 222, 10, { shape: 'icosahedral', stroke: C.bad })
  b.arrow(200, 258, 200, 288, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.arrow(480, 258, 480, 288, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.ctext(340, 276, '搅拌器剥壳 → 离心分管', { size: 11, weight: 700, fill: C.ink })
  // 两支离心管
  b.rect(160, 292, 80, 156, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 10 })
  b.ellipse(200, 432, 30, 11, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.circle(190, 412, 3.6, { fill: C.enz })
  b.circle(202, 418, 3.6, { fill: C.enz })
  b.circle(212, 410, 3.6, { fill: C.enz })
  b.ctext(172, 314, '上清', { size: 9, fill: C.mute })
  b.ctext(200, 466, '沉淀（细胞）', { size: 9.5, fill: C.sub })
  b.rect(440, 292, 80, 156, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 10 })
  b.ellipse(480, 432, 30, 11, { fill: C.panelB, stroke: C.faint, sw: 1.6 })
  b.circle(462, 322, 3.6, { fill: C.pro })
  b.circle(492, 334, 3.6, { fill: C.pro })
  b.circle(474, 348, 3.6, { fill: C.pro })
  b.circle(502, 312, 3.6, { fill: C.pro })
  b.ctext(452, 314, '上清', { size: 9, fill: C.mute })
  b.ctext(480, 466, '沉淀（细胞）', { size: 9.5, fill: C.sub })
  b.tag(200, 488, '³²P 入胞 · 约 30% 传给子代', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  b.tag(480, 488, '³⁵S 剥落 · 传入不足 1%', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 7 })
  b.wtext(50, 514, '判明 DNA 是遗传物质——与 Avery 1944 年肺炎球菌转化实验相互印证，学界绝大多数人从此接受核酸为遗传物质。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、rII 顺反子：把基因拆到核苷酸级 ============
  b.panel(710, 132, 660, 430, { title: '二、Benzer 与 rII：把基因拆到核苷酸级' })
  b.line(730, 210, 1350, 210, { stroke: C.sub, sw: 2.6 })
  b.rect(756, 196, 186, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(849, 215, 'rII A 顺反子', { size: 11.5, weight: 700, fill: C.dnaD })
  b.rect(962, 196, 186, 28, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 6 })
  b.ctext(1055, 215, 'rII B 顺反子', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(1290, 190, 'T4 基因组', { size: 10.5, fill: C.mute })
  // 互补测验：两块平板
  b.circle(810, 330, 46, { fill: C.accL, stroke: C.line, sw: 2 })
  ;[[792, 314, 7], [824, 322, 5], [800, 348, 6], [832, 350, 4], [816, 300, 4]].forEach(([px, py, r]) => {
    b.circle(px, py, r, { fill: '#ffffff', stroke: C.bad, sw: 1.6 })
  })
  b.ctext(810, 394, 'A⁻ × B⁻ 共感染', { size: 11, weight: 700, fill: C.accD })
  b.ctext(810, 410, '互补 → 裂解出斑', { size: 10, fill: C.sub })
  b.circle(1010, 330, 46, { fill: C.panelB, stroke: C.line, sw: 2 })
  b.ctext(1010, 334, '✗', { size: 22, weight: 700, fill: C.faint })
  b.ctext(1010, 394, 'A⁻ × A⁻ 共感染', { size: 11, weight: 700, fill: C.sub })
  b.ctext(1010, 410, '同一顺反子 → 不裂解', { size: 10, fill: C.mute })
  b.wtext(1090, 306, '互补测验问的是：两个突变是否落在同一功能单元？顺反子由此成为基因的功能边界。', { size: 10.5, fill: C.sub, maxW: 244, lh: 15 })
  // 缺失定位与突变热点
  b.text(730, 448, '缺失定位：重叠缺失把点突变钉到核苷酸级', { size: 11.5, weight: 700, fill: C.ink })
  b.line(730, 478, 1180, 478, { stroke: C.sub, sw: 2.2 })
  ;[[730, 830], [820, 1010], [960, 1130]].forEach(([x1, x2]) => {
    b.path(`M ${x1},486 q ${(x2 - x1) / 2},20 ${x2 - x1},0`, { stroke: C.enz, sw: 2 })
  })
  b.wtext(730, 528, '再把点突变与各缺失杂交重组——突变次序精确定位；测序前的基因精细结构图即由此绘成，并揭示突变热点（位点间频率相差悬殊）。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 三、波动测验 1943：突变先于选择 ============
  b.panel(30, 586, 660, 394, { title: '三、Luria–Delbrück（1943）：波动测验' })
  b.ctext(200, 640, '独立小培养物 ×20：jackpot 分布', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(520, 640, '同一大培养物分装 ×20：泊松分布', { size: 11.5, weight: 700, fill: C.accD })
  const jackpot = [1, 0, 3, 0, 1, 24, 2, 0, 5, 1, 0, 2, 38, 1, 3, 0, 1, 7, 0, 2]
  b.bars(60, 830, 280, 170, jackpot, { fill: C.enzL, stroke: C.enz, max: 45 })
  const poisson = [2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 2]
  b.bars(380, 830, 280, 170, poisson, { fill: C.accL, stroke: C.acc, max: 45 })
  b.ctext(340, 852, '每管抗性菌落数（示意）', { size: 10, fill: C.mute })
  b.wtext(50, 880, '小管之间方差巨大、偶现「头奖」——抗性菌落源于接种前已发生的自发突变，而非噬菌体的定向驯化：细菌遗传学由此奠基。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 918, '1945 年夏 Delbrück 在冷泉港开讲噬菌体课程，与 Luria、Hershey 结成被戏称「噬菌体教会」的松散同盟；1969 年三人同获诺贝尔生理学或医学奖。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、从 PaJaMo 到当代支线：里程碑 ============
  b.panel(710, 586, 660, 394, { title: '四、里程碑：噬菌体砌成的分子生物学' })
  b.timelineH(740, 710, 580, [
    { at: 0.09, label: '波动测验', sub: '1943 Luria–Delbrück', above: true, c: C.enz },
    { at: 0.25, label: '搅拌器实验', sub: '1952 Hershey–Chase', c: C.dna },
    { at: 0.43, label: 'rII 顺反子', sub: '1955 Benzer', above: true, c: C.rna },
    { at: 0.61, label: 'PaJaMo 实验', sub: '1958–59 阻遏物可扩散', c: C.pro },
    { at: 0.79, label: '三人诺奖', sub: '1969 Delbrück·Luria·Hershey', above: true, c: C.acc },
    { at: 0.95, label: '限制修饰诺奖', sub: '1978 分子剪刀之诺奖', c: C.bad },
  ])
  b.wtext(726, 806, 'PaJaMo 把调控基因 i 送入组成型受体：β-半乳糖苷酶的组成型合成旋即被关闭——阻遏物是可扩散的胞质因子，汇成操纵子模型与信使 RNA 预言；Brenner、Jacob 与 Meselson 以 T4 感染实证信使。限制修饰研究催生 HindII 与限制图谱（分子剪刀）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(860, 874, '噬菌体展示（1985）→ 2018 化学诺奖', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 8 })
  b.tag(1120, 874, '溶原转换：白喉与霍乱获毒力', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 8 })
  b.wtext(726, 916, '首个源自展示技术的抗体药物已经问世；噬菌体治疗的东西方两条道路随耐药危机重新汇流。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '噬菌体对分子生物学的奠基：从搅拌器到分子剪刀',
  subtitle: '³²P 约 30% 传子代、³⁵S 不足 1%（1952）；Benzer rII 顺反子与缺失定位；1943 波动测验；PaJaMo 与信使 RNA；限制修饰 1978 诺奖；展示 2018 诺奖',
  draw,
})
