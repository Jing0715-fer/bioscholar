// xc ch2-s4 生物大分子晶体的特殊性质（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、溶剂通道截面 ============
  b.panel(30, 132, 660, 412, { title: '一、溶剂通道截面：半个晶体是母液' })
  b.rect(60, 186, 600, 274, { fill: '#e0f2fe', stroke: C.acc, sw: 1.6, rx: 8 })
  const blob = (cx: number, cy: number, r: number, seed: number) => {
    const pts: [number, number][] = []
    const n = 11
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2
      const rr = r * (0.78 + 0.22 * Math.abs(Math.sin(seed + i * 2.3)))
      pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)])
    }
    pts.push(pts[0])
    b.spline(pts, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  }
  const cols = [185, 310, 435, 560]
  const rows = [262, 387]
  let seed = 1
  for (const cy of rows) for (const cx of cols) { blob(cx, cy, 46, seed); seed += 2.1 }
  // 晶格接触（少量表面彼此接触）
  const bridges: Array<[number, number]> = [[247.5, 262], [497.5, 387], [310, 324.5], [560, 324.5]]
  for (const [px, py] of bridges) b.ellipse(px, py, 16, 9, { fill: '#fbcfe8', stroke: C.enz, sw: 1.6 })
  b.arrow(247, 225, 247.5, 250, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ctext(247, 214, '晶格接触', { size: 10.5, weight: 700, fill: C.enzD })
  // 溶剂通道标注
  b.arrow(372, 218, 372, 292, { stroke: C.acc, sw: 1.6, dash: '5 4', marker: 'acc' })
  b.ctext(372, 208, '贯通的溶剂通道', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(120, 232, 165, 240, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.ctext(108, 222, '蛋白分子', { size: 10.5, weight: 700, fill: C.proD })
  // 浸泡小分子
  b.polygon([[630, 320], [638, 325], [638, 335], [630, 340], [622, 335], [622, 325]], { fill: '#fce7f3', stroke: C.enz, sw: 1.8 })
  b.arrow(630, 250, 630, 314, { stroke: C.enz, sw: 1.8, dash: '5 4', marker: 'enz' })
  b.wtext(60, 478, '蛋白晶体是裹挟大量母液的「湿晶体」：截面约一半面积为贯通的溶剂通道——脆弱、怕干燥、可供小分子扩散的根源；红色小分子＝浸泡的底物/抑制剂（重原子衍生物同此路径，第 8 章）。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })

  // ============ 二、Matthews 系数 ============
  b.panel(710, 132, 660, 412, { title: '二、Matthews 系数：拿到晶胞参数后第一件事' })
  b.tag(1040, 196, 'V_{M} = V_{cell}/(MW·Z)', { fill: C.accL, stroke: C.acc, size: 15, weight: 700, tfill: C.accD, pad: 14 })
  b.axis(740, 460, 540, 220, {
    xlabel: 'V_{M}（Å^{3}/Da）', ylabel: '溶剂含量 f_{s}',
    title: 'f_{s} ≈ 1 − 1.23/V_{M}（1968 年马修斯统计百余种蛋白晶体）',
    xticks: [[0.179, '1.7'], [0.464, '2.5'], [0.821, '3.5']],
    yticks: [[0.369, '27%'], [0.667, '50%'], [0.867, '65%']],
  })
  b.rect(740 + 0.179 * 540, 240, (0.821 - 0.179) * 540, 220, { fill: '#d1fae5', fillOp: 0.4 })
  b.ctext(1010, 262, '典型区间 1.7–3.5 Å^{3}/Da', { size: 11, weight: 700, fill: C.okD })
  b.ctext(1010, 280, '对应溶剂 27–65%、典型约 50%', { size: 10.5, fill: C.okD })
  b.curve(740, 460, 540, 220, [[0.036, 0.072], [0.179, 0.369], [0.321, 0.552], [0.464, 0.677], [0.643, 0.787], [0.821, 0.865], [0.964, 0.913]], { smooth: true, stroke: C.acc, sw: 3 })
  b.circle(740 + 0.464 * 540, 460 - 0.677 * 220, 5.5, { fill: C.bad, stroke: '#ffffff', sw: 1.6 })
  b.ctext(1030, 306, '算例：V_{M}=2.5，f_{s}≈51%', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(748, 428, 'V_{M} 低于约 1.6：Z 可能算错', { size: 10, weight: 700, fill: C.warnD, maxW: 120, lh: 13 })
  b.wtext(1200, 428, '高于约 3.5：怀疑结晶对象非完整分子', { size: 10, weight: 700, fill: C.badD, maxW: 130, lh: 13 })
  b.wtext(730, 502, '算例：V_{cell}=200 000 Å^{3}、MW=40 000 Da、Z=2，则 V_{M}=200 000/(40 000×2)=2.5 Å^{3}/Da，f_{s}≈1−1.23/2.5≈51%；若误把 Z 当 4，V_{M}=1.25 明显低于下限——这正是 Z 判断出错的信号。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14 })

  // ============ 三、镶嵌度 ============
  b.panel(30, 558, 660, 412, { title: '三、镶嵌度：真实晶体的不完美' })
  b.wtext(60, 602, '真实蛋白晶体由取向略异的镶嵌块拼成，块间取向差零点几度，其总体角宽度称镶嵌度（mosaicity）。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })
  const sq = (cx: number, cy: number, s: number, ang: number, o: { fill?: string; stroke?: string }) => {
    const ca = Math.cos(ang), sa = Math.sin(ang)
    const pts: [number, number][] = []
    for (const [dx, dy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]] as [number, number][]) {
      pts.push([cx + (dx * s * ca - dy * s * sa), cy + (dx * s * sa + dy * s * ca)])
    }
    b.polygon(pts, { fill: o.fill ?? '#ccfbf1', fillOp: 0.55, stroke: o.stroke ?? C.dna, sw: 1.3 })
  }
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) sq(98 + i * 40, 672 + j * 40, 15, 0, {})
  b.ctext(178, 788, '理想：块取向一致', { size: 10.5, weight: 700, fill: C.dnaD })
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) {
    const ang = ((((i * 7 + j * 13) % 5) - 2) * 2.6 * Math.PI) / 180
    sq(318 + i * 40, 672 + j * 40, 15, ang, { fill: '#fef3c7', stroke: C.warn })
  }
  b.ctext(398, 788, '真实：镶嵌块取向略异', { size: 10.5, weight: 700, fill: C.warnD })
  // 反射方向扇形展宽
  b.arrow(60, 860, 180, 860, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  for (const [dx, dy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]] as [number, number][])
    sq(232 + dx * 14, 860 + dy * 10, 12, dy * 0.05, { fill: '#fef3c7', stroke: C.warn })
  for (const dy of [-21, -10, 0, 10, 21]) b.arrow(262, 860, 430, 860 + dy, { stroke: C.acc, sw: dy === 0 ? 2.2 : 1.5, marker: 'acc' })
  b.line(452, 839, 452, 881, { stroke: C.bad, sw: 1.8, markerStart: 'bad', marker: 'bad' })
  b.ctext(476, 864, '镶嵌度＝反射方向的总角宽度', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(60, 906, '镶嵌度决定衍射斑点的角向展宽，从而决定每张曝光允许的旋转范围——范围过大将使相邻反射斑点重叠（第 5 章）。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })
  b.tag(158, 938, '理想蛋白晶体约 0.1–1°', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD })
  b.tag(380, 938, '冷冻常使镶嵌度升高两三倍', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD })
  b.tag(578, 938, '退火可部分恢复', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD })

  // ============ 四、小分子与蛋白晶体对照 ============
  b.panel(710, 558, 660, 412, { title: '四、小分子晶体与蛋白质晶体对照' })
  b.wtext(730, 602, '两列对照解释了蛋白晶体学为何需要一整套专门策略——数据收集、处理、定相与精修的每一章都在与右列周旋。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14 })
  b.table(730, 636, 620, {
    headers: ['性质', '小分子晶体', '蛋白质晶体'],
    colW: [110, 230, 280],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['晶体尺寸', '数十微米至毫米级', '常几十至几百微米'],
      ['溶剂含量', '通常低于几个百分点', '27–65%，典型约 50%'],
      ['空间群', '230 种皆可', '65 个 Sohncke 手性群'],
      ['有序度', '近乎完美', '镶嵌度 0.1–1° 或更差'],
      ['常见分辨率', '0.5–0.8 Å 或更优', '常见 1.5–3 Å'],
      ['衍射强度', '强，实验室光源即可', '弱，常需同步辐射与低温'],
      ['化学操作', '重结晶纯化', '浸泡、共结晶、退火'],
    ],
  })
  b.wtext(730, 936, '溶剂通道使蛋白晶体成为「可化学操作的微反应器」：浸泡与共结晶两条腿走路；不对称单位多拷贝的非晶体学对称（NCS）可用于密度平均降噪与交叉验证（第 8 章）。', { size: 10.5, fill: C.mute, maxW: 616, lh: 13.5 })
}

export default scene({
  title: '生物大分子晶体的特殊性质',
  subtitle: 'V_{M}=V_{cell}/(MW·Z) 典型 1.7–3.5 Å^{3}/Da 对应溶剂 27–65%（典型约 50%）；晶格接触仅覆盖表面 5–10%；镶嵌度 0.1–1°、冷冻升两三倍；蛋白晶体弱、脆、以 65 个 Sohncke 群栖身',
  draw,
})
