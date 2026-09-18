// bi ch11-s1 生物网络的基本概念（39-i 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、幂律度分布 ============
  b.panel(30, 132, 660, 420, { title: '一、无标度网络：幂律度分布与优先连接' })
  b.axis(90, 460, 380, 250, {
    xlabel: 'log 度 k →',
    ylabel: 'log P(k)',
    title: '度分布（log–log 直线）',
    xticks: [[0, '低'], [1, '高']],
    yticks: [[0, '低'], [1, '高']],
  })
  b.curve(90, 460, 380, 250, [[0.05, 0.95], [0.95, 0.08]], { stroke: C.dna, sw: 2.2 })
  const pts: Array<[number, number]> = [
    [0.05, 0.95], [0.15, 0.85], [0.25, 0.75], [0.35, 0.66], [0.45, 0.56], [0.55, 0.47],
    [0.65, 0.38], [0.75, 0.29], [0.85, 0.2], [0.95, 0.1], [0.1, 0.9], [0.3, 0.72],
    [0.5, 0.53], [0.7, 0.36], [0.9, 0.16],
  ]
  pts.forEach(([fx, fy]) => b.circle(90 + fx * 380, 460 - fy * 250, 4, { fill: C.dna, fillOp: 0.65 }))
  b.tag(400, 235, '幂律：γ ≈ 2–3', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.text(150, 400, '斜率 ≈ −γ', { size: 11.5, weight: 700, fill: C.dnaD })
  b.text(500, 216, '优先连接', { size: 13, weight: 700, fill: C.ink })
  const hub = { x: 585, y: 250, r: 18 }
  const sats: Array<[number, number]> = [[516, 210], [654, 214], [502, 262], [668, 268], [556, 176], [620, 306]]
  sats.forEach(([x, y]) => b.line(hub.x, hub.y, x, y, { stroke: C.faint, sw: 1.4 }))
  sats.forEach(([x, y]) => b.circle(x, y, 8, { fill: C.panelB, stroke: C.sub, sw: 1.6 }))
  b.circle(hub.x, hub.y, hub.r, { fill: C.pro, fillOp: 0.85, stroke: C.proD, sw: 1.6 })
  b.ctext(585, 255, 'hub', { size: 11, weight: 700, fill: '#ffffff' })
  b.circle(516, 330, 9, { fill: C.enz })
  b.arrow(528, 322, 566, 268, { stroke: C.enz, sw: 1.8, marker: 'enz', dash: '5 4' })
  b.ctext(585, 352, '新节点优先连向高度数枢纽', { size: 10.5, weight: 700, fill: C.enzD })
  b.wtext(500, 384, 'Barabási 与 Albert（1999）：「富者愈富」的优先连接自然长出幂律；生物网络经旁向同源添边与之同构。', { size: 10.5, fill: C.sub, maxW: 170, lh: 14.5 })

  // ============ 二、鲁棒与脆弱 ============
  b.panel(710, 132, 660, 420, { title: '二、随机失效鲁棒 · 定向攻击脆弱' })
  b.ctext(840, 194, '随机失效', { size: 13, weight: 700, fill: C.ink })
  const L: Array<[number, number]> = [
    [770, 230], [840, 200], [910, 230], [770, 300], [840, 310], [910, 300], [800, 370], [880, 370],
  ]
  const LE: Array<[number, number]> = [[0, 1], [1, 2], [0, 3], [2, 5], [3, 6], [5, 7], [6, 7]]
  LE.forEach(([i, j]) => b.line(L[i][0], L[i][1], L[j][0], L[j][1], { stroke: C.faint, sw: 1.6 }))
  ;[[4, 0], [4, 3], [4, 5]].forEach(([i, j]) => b.line(L[i][0], L[i][1], L[j][0], L[j][1], { stroke: C.faint, sw: 1.2, dash: '4 4', opacity: 0.6 }))
  L.forEach(([x, y], i) => {
    if (i === 4) {
      b.circle(x, y, 11, { fill: C.bg, stroke: C.bad, sw: 2, dash: '4 3' })
      b.line(x - 5, y - 5, x + 5, y + 5, { stroke: C.bad, sw: 2 })
      b.line(x - 5, y + 5, x + 5, y - 5, { stroke: C.bad, sw: 2 })
    } else b.circle(x, y, 10, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  })
  b.tag(840, 412, '网络仍连通', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: '#065f46', pad: 9 })
  b.ctext(1195, 194, '定向攻击（摘除高度中枢）', { size: 13, weight: 700, fill: C.ink })
  const hub2 = { x: 1195, y: 290 }
  const R: Array<[number, number]> = [
    [1118, 224], [1272, 224], [1102, 292], [1288, 292], [1128, 360], [1262, 360], [1195, 180],
  ]
  R.forEach(([x, y]) => b.line(hub2.x, hub2.y, x, y, { stroke: C.faint, sw: 1.2, dash: '4 4', opacity: 0.6 }))
  ;[[0, 2], [1, 3], [4, 5]].forEach(([i, j]) => b.line(R[i][0], R[i][1], R[j][0], R[j][1], { stroke: C.faint, sw: 1.6 }))
  R.forEach(([x, y]) => b.circle(x, y, 10, { fill: C.accL, stroke: C.acc, sw: 1.8 }))
  b.circle(hub2.x, hub2.y, 13, { fill: C.bg, stroke: C.bad, sw: 2.2, dash: '4 3' })
  b.line(hub2.x - 6, hub2.y - 6, hub2.x + 6, hub2.y + 6, { stroke: C.bad, sw: 2.2 })
  b.line(hub2.x - 6, hub2.y + 6, hub2.x + 6, hub2.y - 6, { stroke: C.bad, sw: 2.2 })
  b.tag(1195, 412, '碎片化', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.bad, pad: 9 })
  b.wtext(740, 456, '无标度结构为「单基因敲除多数无症状」提供解释：随机命中冗余节点的代价小；定向攻击高度中枢则网络瓦解。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、小世界 ============
  b.panel(30, 576, 660, 404, { title: '三、小世界：高聚类与短平均路径并存' })
  const ring: Array<[number, number]> = []
  const rc = { x: 240, y: 765, r: 122 }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2
    ring.push([rc.x + rc.r * Math.cos(a), rc.y + rc.r * Math.sin(a)])
  }
  for (let i = 0; i < 12; i++) {
    const j = (i + 1) % 12
    b.line(ring[i][0], ring[i][1], ring[j][0], ring[j][1], { stroke: C.faint, sw: 1.6 })
  }
  ;[[1, 7], [4, 10]].forEach(([i, j]) => b.line(ring[i][0], ring[i][1], ring[j][0], ring[j][1], { stroke: C.enz, sw: 2.2 }))
  ring.forEach(([x, y], i) => b.circle(x, y, i === 1 || i === 7 || i === 4 || i === 10 ? 9 : 7, { fill: i % 3 === 0 ? C.accL : C.proL, stroke: C.sub, sw: 1.6 }))
  b.ctext(240, 950, '规则环网 ＋ 少数长程捷径 ＝ 小世界', { size: 12, weight: 700, fill: C.ink })
  b.text(470, 630, 'Watts–Strogatz（1998）', { size: 13, weight: 700, fill: C.ink })
  b.wtext(470, 656, '从规则环网出发，只把极少数边随机改接成长程捷径——平均路径长度骤降而聚类系数几乎无损。', { size: 11, fill: C.sub, maxW: 200, lh: 15 })
  b.wtext(470, 736, '「六度分隔」的社交直觉在分子世界同样成立：少数捷径即撑起全局通达。', { size: 11, fill: C.sub, maxW: 200, lh: 15 })
  b.wtext(470, 808, '代谢网络的平均反应步数仅三五步量级——小世界让任意两代谢物几步可达。', { size: 11, fill: C.sub, maxW: 200, lh: 15 })

  // ============ 四、模块、中枢与鲁棒性 ============
  b.panel(710, 576, 660, 404, { title: '四、模块、两型中枢与鲁棒性的来源' })
  b.ctext(1015, 628, '模块：内外连接密度悬殊的节点群（Louvain / Leiden 以模块度最大化检测）', { size: 11, fill: C.mute })
  b.ellipse(830, 700, 80, 66, { fill: 'none', stroke: C.mute, sw: 1.5, dash: '6 5' })
  b.ellipse(1145, 700, 80, 66, { fill: 'none', stroke: C.mute, sw: 1.5, dash: '6 5' })
  const A: Array<[number, number]> = [[792, 672], [852, 662], [872, 712], [828, 730], [778, 712], [848, 688]]
  const Bm: Array<[number, number]> = [[1108, 672], [1168, 662], [1188, 712], [1144, 730], [1094, 712], [1164, 688]]
  ;[[0, 1], [0, 4], [1, 5], [1, 2], [2, 3], [3, 4], [3, 5], [4, 5]].forEach(([i, j]) => b.line(A[i][0], A[i][1], A[j][0], A[j][1], { stroke: C.faint, sw: 1.3 }))
  ;[[0, 1], [0, 4], [1, 5], [1, 2], [2, 3], [3, 4], [3, 5], [4, 5]].forEach(([i, j]) => b.line(Bm[i][0], Bm[i][1], Bm[j][0], Bm[j][1], { stroke: C.faint, sw: 1.3 }))
  b.line(872, 712, 1094, 712, { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.line(848, 688, 1164, 688, { stroke: C.mute, sw: 1.6, dash: '5 4' })
  A.forEach(([x, y]) => b.circle(x, y, 8, { fill: C.proL, stroke: C.pro, sw: 1.6 }))
  Bm.forEach(([x, y]) => b.circle(x, y, 8, { fill: C.accL, stroke: C.acc, sw: 1.6 }))
  b.ctext(830, 786, '模块 A', { size: 11.5, weight: 700, fill: C.proD })
  b.ctext(1145, 786, '模块 B', { size: 11.5, weight: 700, fill: C.accD })
  b.text(754, 824, 'party 中枢：常驻模块内', { size: 11, weight: 700, fill: C.ink })
  const p1: Array<[number, number]> = [[790, 886], [838, 878], [820, 912], [770, 910]]
  p1.forEach(([x, y]) => b.line(804, 894, x, y, { stroke: C.faint, sw: 1.3 }))
  p1.forEach(([x, y]) => b.circle(x, y, 7, { fill: C.proL, stroke: C.pro, sw: 1.4 }))
  b.circle(804, 894, 10, { fill: C.pro, fillOp: 0.8 })
  b.text(1080, 824, 'date 中枢：游走于模块间', { size: 11, weight: 700, fill: C.ink })
  const d1: Array<[number, number]> = [[1040, 872], [1240, 872], [1140, 930]]
  d1.forEach(([x, y]) => b.line(1140, 890, x, y, { stroke: C.faint, sw: 1.3 }))
  d1.forEach(([x, y]) => b.circle(x, y, 7, { fill: C.accL, stroke: C.acc, sw: 1.4 }))
  b.circle(1140, 890, 10, { fill: C.acc, fillOp: 0.8 })
  b.wtext(740, 956, '鲁棒性来自冗余、负反馈与模块化组织——而非任何单件的结实。', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '生物网络基本概念：幂律度分布、小世界与模块化鲁棒性',
  subtitle: '无标度网络的度分布服从幂律（γ 约 2–3），由优先连接「富者愈富」机制生成（Barabási–Albert 1999）；对随机失效鲁棒、对定向攻击高度中枢脆弱，为单基因敲除多数无症状提供结构解释；小世界以高聚类与短平均路径共存（Watts–Strogatz 1998），代谢网络平均反应步数仅三五步量级；模块由 Louvain/Leiden 以模块度最大化检测；鲁棒性来自冗余、负反馈与模块化组织而非单件结实',
  draw,
})
