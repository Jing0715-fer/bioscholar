// bc ch1-s3 多糖：淀粉、糖原与纤维素（39-a 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三种多糖结构三栏对比 ============
  b.panel(30, 132, 1340, 436, { title: '一、三种多糖的结构：α 键卷曲储能，β 键伸展承力' })
  b.line(452, 168, 452, 548, { stroke: C.faint, sw: 1.2 })
  b.line(880, 168, 880, 548, { stroke: C.faint, sw: 1.2 })

  // ---- 栏 1：淀粉（植物储存多糖）----
  b.tag(240, 196, '淀粉：植物储存多糖', { fill: C.rnaL, stroke: C.rna, size: 13.5, weight: 700, tfill: C.rnaD, pad: 10 })
  b.text(70, 240, '直链淀粉：α-1,4 线形 · 左手螺旋', { size: 12.5, weight: 700, fill: C.ink })
  // 螺旋（正弦主链 + 葡萄糖残基串珠）
  const sinePts: [number, number][] = []
  for (let t = 0; t <= 330; t += 6) sinePts.push([78 + t, 284 - 15 * Math.sin((t / 110) * Math.PI * 2)])
  b.polyline(sinePts, { stroke: C.rna, sw: 2.2 })
  for (let i = 0; i <= 16; i++) {
    const t = i * 20.6
    b.circle(78 + t, 284 - 15 * Math.sin((t / 110) * Math.PI * 2), 6.5, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  }
  b.rect(70, 310, 16, 16, { fill: '#1e40af', rx: 3 })
  b.text(94, 322, '碘分子嵌入螺旋腔 → 深蓝色', { size: 11.5, fill: C.sub })
  b.text(70, 350, '螺距约 0.8 nm · 每圈约 6 个葡萄糖残基', { size: 11.5, fill: C.mute })
  b.text(70, 388, '支链淀粉：α-1,4 主链 + α-1,6 分支', { size: 12.5, weight: 700, fill: C.ink })
  // 稀疏分支树（支链淀粉）
  const treeSparse = (x: number, y: number, dx: number, dy: number, len: number, depth: number, sw: number) => {
    const nx = x + dx * len, ny = y + dy * len
    b.line(x, y, nx, ny, { stroke: C.rna, sw })
    if (depth <= 0) { b.circle(nx, ny, 4.5, { fill: C.rna }); return }
    const a0 = Math.atan2(dy, dx)
    for (const off of [-0.55, 0.5]) {
      const a = a0 + off
      treeSparse(nx, ny, Math.cos(a), Math.sin(a), len * 0.72, depth - 1, sw * 0.85)
    }
  }
  treeSparse(84, 468, 1, 0, 70, 2, 3)
  b.text(250, 432, '每 24~30 残基', { size: 11.5, fill: C.sub })
  b.text(250, 452, '一个 α-1,6 分支', { size: 11.5, fill: C.sub })
  b.rect(250, 476, 16, 16, { fill: '#a21caf', rx: 3 })
  b.text(274, 488, '碘显紫红色', { size: 11.5, fill: C.sub })
  b.text(70, 548, 'α-淀粉酶内切 → 糊精；β-淀粉酶外切 → 麦芽糖', { size: 10.5, fill: C.mute })

  // ---- 栏 2：糖原（动物储存多糖）----
  b.tag(668, 196, '糖原：动物储存多糖', { fill: C.enzL, stroke: C.enz, size: 13.5, weight: 700, tfill: C.enzD, pad: 10 })
  b.text(476, 240, '分支最密：每 8~12 残基一个 α-1,6 分支', { size: 12.5, weight: 700, fill: C.ink })
  b.text(476, 266, '分子量可达 10⁶~10⁷ Da · 高度分支增加水溶性', { size: 11.5, fill: C.mute })
  // 致密分支树（糖原）：根在下，向上分支
  const treeDense = (x: number, y: number, dx: number, dy: number, len: number, depth: number, sw: number) => {
    const nx = x + dx * len, ny = y + dy * len
    b.line(x, y, nx, ny, { stroke: C.enz, sw })
    if (depth <= 0) { b.circle(nx, ny, 4, { fill: C.bad }); return }
    const a0 = Math.atan2(dy, dx)
    for (const off of [-0.5, 0.45]) {
      const a = a0 + off
      treeDense(nx, ny, Math.cos(a), Math.sin(a), len * 0.72, depth - 1, sw * 0.85)
    }
  }
  treeDense(668, 500, 0, -1, 54, 4, 3.2)
  b.text(786, 384, '非还原端', { size: 11.5, weight: 700, fill: C.bad })
  b.arrow(782, 390, 756, 398, { stroke: C.bad, sw: 1.5 })
  b.text(476, 530, '大量非还原端：磷酸化酶 / 糖原合酶同时快速增删残基', { size: 11.5, fill: C.sub })
  b.rect(476, 544, 16, 16, { fill: '#9a3412', rx: 3 })
  b.text(500, 556, '碘显红棕色 · 肝约 5% 湿重 · 肌 1%~2%', { size: 11.5, fill: C.sub })

  // ---- 栏 3：纤维素（植物结构多糖）----
  b.tag(1114, 196, '纤维素：植物结构多糖', { fill: C.okL, stroke: C.ok, size: 13.5, weight: 700, tfill: '#065f46', pad: 10 })
  b.text(912, 240, 'β-1,4 糖苷键 · 无分支 · 伸展锯齿状构象', { size: 12.5, weight: 700, fill: C.ink })
  b.text(912, 266, '链内氢键使链伸展，链间氢键使其并行堆砌', { size: 11.5, fill: C.mute })
  // 三条平行锯齿链 + 链间氢键
  const zig = (y: number): [number, number][] => {
    const pts: [number, number][] = []
    let up = true
    for (let x = 920; x <= 1330; x += 24) { pts.push([x, y + (up ? -8 : 8)]); up = !up }
    return pts
  }
  b.polyline(zig(300), { stroke: C.ok, sw: 3 })
  b.polyline(zig(348), { stroke: C.ok, sw: 3 })
  b.polyline(zig(396), { stroke: C.ok, sw: 3 })
  for (let x = 948; x <= 1310; x += 48) {
    b.line(x, 310, x, 340, { stroke: C.mute, sw: 1.4, dash: '4 4' })
    b.line(x, 358, x, 388, { stroke: C.mute, sw: 1.4, dash: '4 4' })
  }
  b.line(912, 428, 944, 428, { stroke: C.mute, sw: 1.6, dash: '5 4' })
  b.text(952, 432, '链间氢键 → 并行紧密堆砌成微纤维，机械强度高 · 不溶于水', { size: 11.5, fill: C.sub })
  b.rect(912, 448, 428, 76, { fill: C.warnL, stroke: C.warn, sw: 1.4, rx: 8 })
  b.wtext(924, 472, '人体无 β-糖苷酶 → 不能消化纤维素；反刍动物依赖瘤胃微生物的纤维素酶将其水解利用。', { size: 11.5, fill: '#78350f', maxW: 404, lh: 17 })
  b.text(912, 552, '碘不显色（—）· 多数不溶于水', { size: 11, fill: C.mute })

  // ============ 二、四种多糖对照表 ============
  b.panel(30, 588, 1340, 372, { title: '二、四种多糖对照：糖苷键构型决定功能定位' })
  b.table(56, 644, 1292, {
    headers: ['多糖', '糖苷键', '分支密度', '与碘显色', '功能定位'],
    colW: [140, 240, 300, 170, 442],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['直链淀粉', 'α-1,4 线形', '无分支', '深蓝色', '植物储存多糖（左手螺旋）'],
      ['支链淀粉', 'α-1,4 + α-1,6', '每 24~30 残基', '紫红色', '植物储存多糖'],
      ['糖原', 'α-1,4 + α-1,6', '每 8~12 残基（最密）', '红棕色', '动物储存多糖（肝 · 骨骼肌）'],
      ['纤维素', 'β-1,4', '无分支', '—', '植物细胞壁结构多糖'],
    ],
  })
  b.text(56, 900, '结构决定功能：α 键使链卷曲便于储存，β 键使链伸展承受张力——单体相同、构型不同、功能迥异。', { size: 13, weight: 700, fill: C.ink })
  b.text(56, 934, '多糖共性：无还原性（分支末端极少）· 无变旋现象 · 黏度随分子量增大而升高；按功能分储存多糖（淀粉、糖原、菊粉）与结构多糖（纤维素、几丁质）。', { size: 11.5, fill: C.mute })
}

export default scene({
  title: '多糖三杰：淀粉、糖原与纤维素的构型对比',
  subtitle: 'α-1,4/α-1,6 卷曲分支储能 vs β-1,4 伸展微纤维——糖原分支最密（每 8~12 残基）产生大量非还原端，碘显色蓝/紫红/红棕可资鉴别',
  draw,
})
