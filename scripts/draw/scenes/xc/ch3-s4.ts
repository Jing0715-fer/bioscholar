// xc ch3-s4 结晶筛选与优化策略（6-xc）
import { scene, C, B } from '../../lib'

// 96 孔板判读编码：0 清亮 / 1 沉淀 / 2 微晶 / 3 针状簇 / 4 晶体
const PLATE = [
  '000010000001',
  '000001000300',
  '010000002000',
  '000040001000',
  '001000000002',
  '100000300010',
  '000002000000',
  '010000000000',
]

const draw = (b: B) => {
  // ============ 一、稀疏矩阵筛选：先广后深 ============
  b.panel(30, 132, 660, 412, { title: '一、稀疏矩阵筛选：用最小实验次数回答「能不能结晶」' })
  b.wtext(60, 180, '1991 年 Jancarik 与 Kim（伯克利）从文献已报道的成功条件统计采样，浓缩为 48 个彼此尽量不同的条件；商品化即 Crystal Screen（1 与 2 合计约百条件）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14 })
  // 96 孔网格（12 列 × 8 行）
  const gx = 64, gy = 216, cw = 46, ch = 27
  b.rect(gx - 8, gy - 14, cw * 12 + 16, ch * 8 + 22, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 8 })
  for (let i = 0; i < 12; i++) b.ctext(gx + cw * i + cw / 2, gy - 2, String(i + 1), { size: 8.5, fill: C.mute })
  const WELL: Record<number, { fill: string; stroke: string }> = {
    0: { fill: '#ffffff', stroke: C.line },
    1: { fill: C.badL, stroke: '#fecaca' },
    2: { fill: C.warnL, stroke: C.warn },
    3: { fill: C.enzL, stroke: C.enz },
    4: { fill: C.okL, stroke: C.ok },
  }
  const ROWL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  for (let r = 0; r < 8; r++) {
    b.text(gx - 13, gy + 10 + r * ch + ch / 2, ROWL[r], { size: 8.5, fill: C.mute })
    for (let c = 0; c < 12; c++) {
      const v = Number(PLATE[r][c])
      const w = WELL[v]
      b.rect(gx + cw * c + 4, gy + 14 + r * ch, cw - 8, ch - 7, { fill: w.fill, stroke: w.stroke, sw: 1.2, rx: 4 })
      if (v === 2) for (let k = 0; k < 5; k++) b.circle(gx + cw * c + 13 + k * 5, gy + 14 + r * ch + 10, 1.4, { fill: C.warnD })
      if (v === 3) b.line(gx + cw * c + 11, gy + 14 + r * ch + 10, gx + cw * c + 33, gy + 14 + r * ch + 10, { stroke: C.enz, sw: 1.6 })
      if (v === 4) b.rect(gx + cw * c + 16, gy + 14 + r * ch + 4, 12, 12, { fill: 'none', stroke: C.okD, sw: 1.6 })
    }
  }
  b.legend(64, 476, [
    ['清亮', '#ffffff'], ['沉淀', C.badL], ['微晶', C.warnL], ['针状簇', C.enzL], ['晶体（hit）', C.okL],
  ], { size: 10, gap: 14 })
  b.wtext(60, 508, '现代面板把采样空间继续细化：Index、PEG Rx、Salt Rx、Ion Screen、Cryos（自带防冻剂组合）与 Morpheus。命中率随蛋白而异（数个百分点至数十个百分点），价值不在保证命中，而在于给出优化的起点。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 二、正交网格优化 ============
  b.panel(710, 132, 660, 412, { title: '二、从 hit 到可衍射晶体：正交网格（grid）优化' })
  // 5×5 网格：pH × 沉淀剂浓度
  const ox = 770, oy = 214, gcw = 52, gch = 40
  b.text(730, 200, '沉淀剂浓度（上下各两三档）', { size: 10, weight: 700, fill: C.sub })
  const pgs = ['40%', '35%', '30%', '25%', '20%']
  const phs = ['6.0', '6.5', '7.0', '7.5', '8.0']
  // 结果编码：0 清亮 1 沉淀 2 微晶淋浴 3 针状 4 小晶体 5 最优大晶体
  const GRID = [
    [0, 1, 1, 1, 1],
    [0, 1, 2, 2, 1],
    [0, 2, 2, 3, 2],
    [0, 2, 3, 4, 2],
    [0, 0, 2, 4, 5],
  ]
  const GC: Record<number, { fill: string; stroke: string }> = {
    0: { fill: '#ffffff', stroke: C.line },
    1: { fill: C.badL, stroke: '#fecaca' },
    2: { fill: C.warnL, stroke: C.warn },
    3: { fill: C.enzL, stroke: C.enz },
    4: { fill: C.accL, stroke: C.acc },
    5: { fill: C.okL, stroke: C.ok },
  }
  for (let r = 0; r < 5; r++) {
    b.etext(ox - 10, oy + r * gch + gch / 2 + 4, pgs[r], { size: 10.5, fill: C.sub, weight: 600 })
    for (let c = 0; c < 5; c++) {
      const v = GRID[r][c]
      const g = GC[v]
      b.rect(ox + c * gcw, oy + r * gch, gcw - 4, gch - 4, { fill: g.fill, stroke: g.stroke, sw: v === 5 ? 2.4 : 1.3, rx: 4 })
      if (v === 5) b.ctext(ox + c * gcw + (gcw - 4) / 2, oy + r * gch + (gch - 4) / 2 + 4, '最优', { size: 10, weight: 700, fill: C.okD })
      if (v === 4) b.rect(ox + c * gcw + 17, oy + r * gch + 12, 14, 12, { fill: 'none', stroke: C.accD, sw: 1.5 })
      if (v === 3) b.line(ox + c * gcw + 12, oy + r * gch + 18, ox + c * gcw + 36, oy + r * gch + 18, { stroke: C.enz, sw: 1.6 })
      if (v === 2) for (let k = 0; k < 6; k++) b.circle(ox + c * gcw + 12 + (k % 6) * 5.5, oy + r * gch + 12 + Math.floor(k / 6) * 9 + 3, 1.3, { fill: C.warnD })
    }
  }
  for (let c = 0; c < 5; c++) b.ctext(ox + c * gcw + (gcw - 4) / 2, oy + 5 * gch + 16, phs[c], { size: 10.5, fill: C.sub, weight: 600 })
  b.ctext(ox + 2.5 * gcw, oy + 5 * gch + 36, 'pH（半单位间隔）', { size: 10, weight: 700, fill: C.sub })
  b.circle(ox + 2 * gcw + 22, oy + 2 * gch + 16, 5, { fill: C.bad, stroke: '#ffffff', sw: 1.5 })
  b.arrow(ox + 2 * gcw + 30, oy + 2 * gch + 24, ox + 4 * gcw + 12, oy + 4 * gch + 10, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.wtext(736, 466, '命中条件（红点）居中；第三维蛋白浓度 0.5–2 倍另层扫描，顺梯度走向最优点。', { size: 10, fill: C.mute, maxW: 340, lh: 13.5 })
  // 形貌诊断卡片
  b.text(1080, 196, '形貌即诊断信息', { size: 11.5, weight: 700, fill: C.ink })
  const diag: Array<[string, string, string, string]> = [
    ['针状/片状', '某晶向生长过快', '添加剂或改变条件整形', C.enz],
    ['微晶淋浴', '成核过多', '降过饱和或改用晶种', C.warn],
    ['单一大晶但衍射差', '有序度问题', '脱水、退火、换配体或晶型', C.bad],
  ]
  diag.forEach(([a, m, c, col], i) => {
    const dy = 214 + i * 76
    b.rect(1080, dy, 270, 66, { fill: C.panelB, stroke: col, sw: 1.3, rx: 7 })
    b.text(1092, dy + 18, a, { size: 10.5, weight: 700, fill: col })
    b.text(1092, dy + 34, '判读：' + m, { size: 9.5, fill: C.sub })
    b.text(1092, dy + 50, '对策：' + c, { size: 9.5, fill: C.mute })
  })
  b.wtext(730, 498, '优化期组合拳：24 孔悬滴放大液滴（求大晶体）与 96 孔坐滴并行扫描（求覆盖）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14 })
  b.wtext(730, 516, '相图即理论底稿：把命中条件标进浓度平面，观察它落在成核区还是亚稳区，即可判断下一步该「降」还是「升」沉淀剂（本章第 2 节）。', { size: 10, fill: C.mute, maxW: 616, lh: 13.5 })

  // ============ 三、添加剂屏幕 ============
  b.panel(30, 558, 660, 412, { title: '三、添加剂屏幕：小分子的大作用' })
  // 左上：金属桥接示意
  const pb = (cx: number, cy: number) => {
    const pts: [number, number][] = []
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2
      const rr = 34 * (0.8 + 0.2 * Math.abs(Math.sin(i * 1.7)))
      pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)])
    }
    b.spline(pts, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.ctext(cx, cy - 12, '蛋白', { size: 9.5, weight: 700, fill: C.proD })
  }
  pb(150, 660); pb(280, 660)
  b.ion(215, 660, 'Zn^{2+}', { fill: C.warnL, stroke: C.warn, size: 11 })
  b.line(180, 660, 196, 660, { stroke: C.warn, sw: 1.8, dash: '4 3' })
  b.line(234, 660, 250, 660, { stroke: C.warn, sw: 1.8, dash: '4 3' })
  b.ctext(115, 700, '酸性残基', { size: 8.5, fill: C.mute })
  b.ctext(315, 700, '酸性残基', { size: 8.5, fill: C.mute })
  b.wtext(64, 726, '二价阳离子桥接两分子表面酸性残基、形成「金属键」晶格接触——胰岛素含锌六聚体是经典案例。', { size: 10, fill: C.sub, maxW: 300, lh: 13.5 })
  // 右侧六类清单
  const add: Array<[string, string, string]> = [
    ['二价金属 Mg^{2+}/Zn^{2+}', '桥接酸性残基成「金属键」晶格接触', C.warn],
    ['去垢剂 β-OG/CHAPS', '阻断疏水性的非特异聚集', C.dna],
    ['还原剂 TCEP/DTT', '防半胱氨酸氧化交联致聚集', C.pro],
    ['精氨酸（氨基酸）', '「精氨酸魔术」缓解聚集', C.acc],
    ['多元醇 甘油/乙二醇', '稳定蛋白、兼作防冻剂', C.ok],
    ['多价胺 精胺/亚精胺', '中和核酸或酸性表面', C.enz],
  ]
  add.forEach(([n, m, col], i) => {
    const ay = 612 + i * 52
    b.rect(400, ay, 260, 42, { fill: C.panelB, stroke: col, sw: 1.2, rx: 6 })
    b.tag(462, ay + 13, n, { fill: '#ffffff', stroke: col, size: 9.5, weight: 700, tfill: col, pad: 6, minh: 18 })
    b.text(414, ay + 34, m, { size: 9.5, fill: C.sub })
  })
  b.wtext(64, 790, '在命中条件上单独叠加低浓度小分子，观察形貌与分辨率变化——添加剂多为「调味」而非「主料」，命中率零散却时常一锤定音，故优化流程总保留一席。', { size: 10, fill: C.mute, maxW: 300, lh: 13.5 })
  b.wtext(64, 860, '同类工具箱：脱水策略（抽紧晶体内水）常把分辨率推高一档；in situ 结晶板省去捞取，板内直接衍射筛查。', { size: 10, fill: C.mute, maxW: 300, lh: 13.5 })
  b.tag(215, 940, '先广（筛选）后深（优化），逐维扫描、一次只动一个变量', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 10 })

  // ============ 四、晶种三法、LCP 与 SER ============
  b.panel(710, 558, 660, 412, { title: '四、晶种三法、脂立方相与表面熵减' })
  // 晶种三法
  const seed: Array<[string, string, string]> = [
    ['streak seeding', '猫须划过晶体取碎末，再划过新滴，划痕沿途落下微种', C.acc],
    ['microseeding', '匀浆梯度稀释 10^{-1} 至 10^{-8}，成核数目变成可调参数', C.warn],
    ['macro-seeding', '把已长成的晶体植入新液滴继续生长至可切分可衍射', C.pro],
  ]
  seed.forEach(([n, m, col], i) => {
    const sy = 610 + i * 56
    b.rect(730, sy, 330, 46, { fill: C.panelB, stroke: col, sw: 1.2, rx: 6 })
    b.text(742, sy + 18, n, { size: 10.5, weight: 700, fill: col })
    b.wtext(742, sy + 34, m, { size: 9, fill: C.sub, maxW: 310, lh: 11.5 })
  })
  b.wtext(1076, 606, 'MMS（微晶种基质筛选）：在整套面板上逐条件加入同一种子，常把「永不结晶」的蛋白拉出 hit，已成为现代流程的标准动作。三种技术把成核从「听天由命」变为「计量投送」。', { size: 10, fill: C.sub, maxW: 276, lh: 13.5 })
  // LCP 示意
  b.text(730, 800, '脂立方相（LCP，in meso）', { size: 11, weight: 700, fill: C.dnaD })
  const lx = 730, ly = 816, lw2 = 150, lh2 = 96
  b.rect(lx, ly, lw2, lh2, { fill: '#ecfdf5', stroke: C.dna, sw: 1.5, rx: 6 })
  for (let i = 0; i < 6; i++) {
    const yy = ly + 12 + i * 15
    b.path(`M ${lx + 8},${yy} q 18,-8 33,0 q 18,8 33,0 q 18,-8 33,0 q 18,8 33,0`, { fill: 'none', stroke: C.dna, sw: 1.5 })
  }
  for (const [px, py] of [[lx + 38, ly + 42], [lx + 96, ly + 72]] as [number, number][]) {
    b.ellipse(px, py, 17, 11, { fill: C.proL, stroke: C.pro, sw: 1.6 })
    b.ctext(px, py + 3, 'MP', { size: 7.5, weight: 700, fill: C.proD })
  }
  b.ctext(lx + 40, ly + lh2 + 10, 'monoolein 双连续立方相', { size: 8.5, fill: C.dnaD })
  b.ctext(lx + 112, ly + lh2 + 10, '水性通道贯穿', { size: 8.5, fill: C.accD })
  b.wtext(900, 820, '膜蛋白嵌入脂膜环境、沿相结构侧向扩散，在「脂海」中成核结晶。历史性胜利是 GPCR：2007 年 β2 受体与 T4 溶菌酶融合蛋白复合物、2011–2012 年借胆固醇辅助条件解出的一批 GPCR 结构，确立 LCP 为膜蛋白结晶默认路线。', { size: 10, fill: C.sub, maxW: 250, lh: 13.5 })
  // SER
  b.rect(730, 928, 616, 32, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.3, rx: 7 })
  b.text(742, 948, 'SER 表面熵减（Derewenda）：', { size: 10.5, weight: 700, fill: C.proD })
  b.text(952, 948, 'Glu/Asp/Gln/Lys 换 Ala/Ser/Thr——降低有序化代价、促成新晶格接触', { size: 10, fill: C.sub })
}

export default scene({
  title: '结晶筛选与优化策略：稀疏矩阵、正交优化、添加剂、晶种与 LCP',
  subtitle: '1991 年 48 条件稀疏矩阵；hit 后沉淀剂×pH×蛋白浓度正交网格；添加剂六类机制；晶种 10^{-1}–10^{-8} 稀释与 MMS；LCP 成就 GPCR；SER 表面熵减',
  draw,
})
