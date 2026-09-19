// bp 遗留重绘：钾通道选择性滤器（KcsA 氧原子笼配位几何）（slug: kcsa-selectivity-filter）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、氧原子笼（单层配位细节） ============
  b.panel(30, 150, 410, 700, { title: '一、氧原子笼：主链羰基氧' })
  // 中央 K⁺
  b.circle(240, 330, 24, { fill: C.dnaL, stroke: C.dna, sw: 2.4 })
  b.ctext(240, 335, 'K⁺', { size: 13, weight: 700, fill: C.dnaD })
  // 同层 4 个羰基氧（截面显示 2 个 + 斜向 2 个）
  const oxy: [number, number][] = [[240, 244], [240, 416], [154, 330], [326, 330]]
  for (const [x, y] of oxy) {
    b.circle(x, y, 11, { fill: C.badL, stroke: C.bad, sw: 2 })
    b.ctext(x, y + 4, 'O', { size: 10, weight: 700, fill: C.bad })
    b.line(240, 330, x, y, { stroke: C.bad, sw: 1.4, dash: '4 3' })
  }
  b.tag(240, 208, 'C=O 羰基氧', { fill: '#ffffff', stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 6 })
  b.ctext(240, 452, '配位距离 ~2.8 Å', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(60, 492, '每层来自 4 个亚基的主链 C=O（截面示 2 个 + 斜向 2 个），沿滤器串联成 4 个配位位点 S₁–S₄（共 16 个氧，层间距约 3 Å）。', { size: 11.5, fill: C.sub, maxW: 350, lh: 17 })
  b.wtext(60, 588, '基序 Thr-Val-Gly-Tyr-Gly（TVGYG）在全部钾通道中近乎完全保守——滤器几何即水化壳几何的「复刻」。', { size: 11.5, fill: C.sub, maxW: 350, lh: 17 })

  // ============ 二、KcsA 孔道纵剖面 ============
  b.panel(470, 150, 400, 710, { title: '二、KcsA 孔道纵剖面' })
  // 细胞外外庭（漏斗）
  b.polygon([[530, 214], [810, 214], [726, 286], [614, 286]], { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.ctext(670, 246, '细胞外外庭', { size: 11.5, weight: 700, fill: C.sub })
  // 选择性滤器（窄管）
  b.rect(614, 286, 112, 190, { fill: '#ffffff', stroke: C.bad, sw: 2.2 })
  b.tag(848, 300, '选择性滤器', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 6 })
  b.tag(848, 326, '（约 12 Å）', { fill: '#ffffff', stroke: C.bad, size: 10, tfill: C.sub, pad: 5 })
  // 滤器内 K⁺ / H₂O 交替队列
  const queue: Array<[number, string, string, number]> = [
    [318, 'K⁺', C.dnaL, 11], [358, 'H₂O', C.accL, 8.5], [398, 'K⁺', C.dnaL, 11], [438, 'H₂O', C.accL, 8.5],
  ]
  for (const [y, label, fill, r] of queue) {
    b.circle(670, y, r, { fill, stroke: label === 'K⁺' ? C.dna : C.acc, sw: 1.8 })
    b.ctext(670, y + 4, label, { size: label === 'K⁺' ? 10 : 8.5, weight: 700, fill: label === 'K⁺' ? C.dnaD : C.accD })
  }
  // S 层标记（左侧短刻度）
  b.text(596, 322, 'S₁', { size: 10, weight: 700, fill: C.bad, anchor: 'end' })
  b.text(596, 362, 'S₂', { size: 10, weight: 700, fill: C.bad, anchor: 'end' })
  b.text(596, 402, 'S₃', { size: 10, weight: 700, fill: C.bad, anchor: 'end' })
  b.text(596, 442, 'S₄', { size: 10, weight: 700, fill: C.bad, anchor: 'end' })
  // 中央水腔
  b.ellipse(670, 560, 88, 78, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 1.8 })
  b.circle(670, 560, 16, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(670, 565, 'K⁺', { size: 10.5, weight: 700, fill: C.dnaD })
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i
    b.circle(670 + Math.cos(a) * 34, 560 + Math.sin(a) * 30, 7, { fill: C.accL, stroke: C.acc, sw: 1.2 })
  }
  b.tag(848, 546, '中央水腔', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 6 })
  b.tag(848, 572, '（宽约 10 Å）', { fill: '#ffffff', stroke: C.acc, size: 10, tfill: C.sub, pad: 5 })
  // 内螺旋门（下端开合的两条斜杆）
  b.line(600, 624, 636, 776, { stroke: C.pro, sw: 5 })
  b.line(740, 624, 704, 776, { stroke: C.pro, sw: 5 })
  // 底部合并注释
  b.wtext(492, 796, '细胞内侧：pH 门控开合的内螺旋门；中央水腔由螺旋偶极静电稳定水合 K⁺；滤器内 K⁺ 与 H₂O 交替排列（knock-on 队列）——新离子自外庭撞入把整列「顶」过去实现高通量，K⁺ 自外向内通过。', { size: 10.5, fill: C.sub, maxW: 356, lh: 15 })

  // ============ 三、K⁺ vs Na⁺ 尺寸配位对比 ============
  b.panel(900, 150, 470, 700, { title: '三、K⁺ 与 Na⁺：以配位几何识别' })
  // K⁺：恰与氧笼等长配位
  b.circle(1040, 300, 26, { fill: C.dnaL, stroke: C.dna, sw: 2.4 })
  b.ctext(1040, 306, 'K⁺', { size: 14, weight: 700, fill: C.dnaD })
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i + Math.PI / 8
    b.circle(1040 + Math.cos(a) * 62, 300 + Math.sin(a) * 62, 9, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  }
  b.circle(1040, 300, 62, { fill: 'none', stroke: C.bad, sw: 1.2, dash: '5 4' })
  b.text(1118, 268, 'K⁺（半径 1.33 Å）', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(1118, 292, '与同层 8 个氧等长配位（~2.8 Å），恰与水化 O 配位距离一致——去水化能量损失被完全补偿，几乎「无障碍」通过。', { size: 11, fill: C.sub, maxW: 230, lh: 16 })
  // Na⁺：太小
  b.circle(1040, 520, 18, { fill: C.enzL, stroke: C.enz, sw: 2.4 })
  b.ctext(1040, 525, 'Na⁺', { size: 11, weight: 700, fill: C.enzD })
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i + Math.PI / 8
    b.circle(1040 + Math.cos(a) * 62, 520 + Math.sin(a) * 62, 9, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  }
  b.circle(1040, 520, 62, { fill: 'none', stroke: C.mute, sw: 1.2, dash: '5 4' })
  // Na⁺ 只能贴近 2 个氧
  b.line(1040, 520, 1040 - 44, 520 - 44, { stroke: C.enz, sw: 1.4, dash: '4 3' })
  b.line(1040, 520, 1040 + 44, 520 - 44, { stroke: C.enz, sw: 1.4, dash: '4 3' })
  b.text(1118, 488, 'Na⁺（半径 0.95 Å）', { size: 12.5, weight: 700, fill: C.enz })
  b.wtext(1118, 512, '半径过小，无法同时贴近同层 4 个氧，只能「偏靠」1–2 个（静电补偿不足）——选择性较 K⁺ 低约 10⁴ 倍。', { size: 11, fill: C.sub, maxW: 230, lh: 16 })
  // 结论条
  b.rect(924, 620, 422, 196, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
  b.ctext(1135, 652, '通道以「配位几何」而非「孔径筛分」识别离子', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(948, 686, 'KcsA 结构（PDB 1BL8，X 射线 3.2 Å）确立该范式——Roderick MacKinnon 获 2003 年诺贝尔化学奖。', { size: 11.5, fill: C.sub, maxW: 380, lh: 17 })
  b.wtext(948, 746, '高通量与高选择性并存：氧笼队列 + 中央水腔静电稳定 + 门控调控导通。', { size: 11.5, fill: C.sub, maxW: 380, lh: 17 })
}

export default scene({
  title: '钾通道选择性滤器：以配位几何识别离子（KcsA）',
  subtitle: '主链羰基氧串成氧原子笼——用「化学键几何」而非「孔径筛分」区分 K⁺ 与 Na⁺（PDB 1BL8）',
  draw,
})
