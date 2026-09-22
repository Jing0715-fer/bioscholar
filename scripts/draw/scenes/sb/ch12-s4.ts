// sb ch12-s4 方法选择决策与前沿（Task SB-4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、方法选择决策地图 ============
  b.panel(30, 132, 1340, 290, { title: '一、方法选择决策地图：五问先行、先算后验' })
  b.wtext(50, 154, '先算后验成为默认次序：开工前先取 AF 预测与置信度——可信区划边界、实验钉关键位点，再进入下面的分支。', { size: 10.5, fill: C.sub, maxW: 1300, lh: 15 })
  b.rect(500, 166, 400, 38, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 9 })
  b.ctext(700, 190, '五问：分子量 · 结晶性 · 均一性 · 动力学 · 时间分辨', { size: 12.5, weight: 700, fill: C.ink })
  const branches: Array<[string, string, string, string, string]> = [
    ['小于 30 kDa、以动力学互作为核心', 'NMR', 'TROSY 加氘代可至约 100 kDa', C.rna],
    ['可长出衍射晶体、含高通量配体筛选', 'X 射线晶体学', '分辨率与通量之王', C.dna],
    ['大于 100–300 kDa、难结晶或构象不均一', '冷冻电镜', '玻璃化均一性是关键', C.acc],
    ['任何尺寸的拓扑与动态拼图', 'SAXS 加 FRET 加 XL-MS', '交整合建模（第 2 节）', C.pro],
  ]
  branches.forEach(([cond, method, sub, c], i) => {
    const x = 60 + i * 330
    b.arrow(700, 204, x + 150, 234, { stroke: C.faint, sw: 1.8, marker: 'mute' })
    b.rect(x, 238, 300, 92, { fill: `${c}1a`, stroke: c, sw: 1.5, rx: 9 })
    b.wtext(x + 16, 260, cond, { size: 10, fill: C.sub, maxW: 270, lh: 13.5 })
    b.ctext(x + 150, 304, method, { size: 13.5, weight: 700, fill: c })
    b.ctext(x + 150, 322, sub, { size: 9.5, fill: C.mute })
  })
  b.rect(60, 340, 620, 44, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 8, fillOp: 0.5 })
  b.wtext(76, 360, '否决律一：均一性不合格的样品在哪个方法里都只产出垃圾——SEC-MALS 先行复核，别让坏样品进任何机器。', { size: 10, fill: C.badD, maxW: 590, lh: 13.5 })
  b.rect(700, 340, 620, 44, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 8, fillOp: 0.5 })
  b.wtext(716, 360, '否决律二：天然无序含量高（真核蛋白约三成含长无序区）——「结构」须重定义为「系综」：NMR 加 SAXS 加模拟。', { size: 10, fill: C.badD, maxW: 590, lh: 13.5 })

  // ============ 二、案例与时间分辨 ============
  b.panel(30, 442, 660, 250, { title: '二、一个案例的分而治之与时间分辨快门' })
  b.wtext(50, 482, '① 260 kDa 六聚体酶、SEC 单峰、筛晶两年未果——冷冻电镜是默认起手。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 508, '② 还要追问毫秒级底物诱导构象切换？补串晶或时间分辨冷冻电镜。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 534, '③ 催化中心的原子细节必须钉死？对催化结构域单独结晶——分而治之。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(350, 566, '反应速率决定快门：飞秒以下属于 XFEL，快于毫秒靠光解与扩散对撞，慢于秒用常规混合', { size: 10.5, weight: 700, fill: C.ink })
  // 时间轴（fs 到 s，对数）
  const txx = (lg: number) => 60 + ((lg + 15.5) / 17) * 580
  const tbands: Array<[number, number, string, string]> = [
    [-15, -9, 'XFEL 泵浦-探测', C.bad],
    [-9, -6, 'Laue 泵浦', C.warn],
    [-6, -3, '光解/对撞', C.rna],
    [-3, 0, '串晶 · TR-EM', C.acc],
    [0, 1.5, '常规混合', C.mute],
  ]
  for (const [lg1, lg2, lab, c] of tbands) {
    b.rect(txx(lg1), 580, txx(lg2) - txx(lg1) - 3, 26, { fill: `${c}22`, stroke: c, sw: 1.4, rx: 6 })
    b.ctext((txx(lg1) + txx(lg2)) / 2, 597.5, lab, { size: 9, weight: 700, fill: c })
  }
  b.line(60, 616, 640, 616, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  const tticks: Array<[number, string]> = [[-15, 'fs'], [-12, 'ps'], [-9, 'ns'], [-6, 'μs'], [-3, 'ms'], [0, 's']]
  for (const [lg, lab] of tticks) {
    b.line(txx(lg), 616, txx(lg), 621, { stroke: C.sub, sw: 1.6 })
    b.ctext(txx(lg), 636, lab, { size: 10, fill: C.mute })
  }
  b.wtext(50, 660, '串晶加混合-喷射：底物与微晶在线混合、按延时衍射——Olmos 等 2018 年捕获 β-内酰胺酶酰化中间体，毫秒级酶动力学第一次有了原子影像；XFEL 数十飞秒脉冲「先衍射后损伤」，时间分辨冷冻电镜以混合-喷雾冻毫秒中间态（Dandey 等 2020）。', { size: 10, fill: C.sub, maxW: 620, lh: 13.5 })

  // ============ 三、原位、MicroED 与 AI 全流程 ============
  b.panel(710, 442, 660, 250, { title: '三、原位结构生物学、MicroED 与 AI 全流程' })
  // cryo-ET
  b.ellipse(800, 545, 52, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8 })
  b.ctext(800, 542, '冷冻细胞', { size: 10, weight: 700, fill: C.sub })
  b.ctext(800, 556, '原生环境', { size: 9, fill: C.mute })
  b.arrow(858, 545, 892, 545, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(900, 537, 110, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 3 })
  for (let k = 0; k < 5; k++) b.circle(910 + k * 22, 545, 3.4, { fill: C.dna })
  b.ctext(955, 570, 'FIB 铣成约 100–200 nm 薄片', { size: 9.5, weight: 700, fill: C.dnaD })
  b.wtext(730, 600, 'cryo-ET 倾转系列三维重构，分子在细胞里的位置直接成像；亚断层平均把数千份子图对齐，合适体系已达约 3–4 Å。难点如实列出：拷贝数有限、分子拥挤、缺失锥。', { size: 10, fill: C.sub, maxW: 285, lh: 13.5 })
  // MicroED
  b.wtext(1040, 480, 'MicroED：电子弹性散射截面比 X 射线高约四个数量级——微米级晶体即可给出埃级结构。', { size: 10, fill: C.sub, maxW: 300, lh: 13.5 })
  b.rect(1060, 540, 90, 60, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 6, fillOp: 0.5 })
  for (let k = 0; k < 12; k++) b.circle(1072 + (k % 4) * 22, 552 + Math.floor(k / 4) * 18, 2.8, { fill: C.accD })
  b.ctext(1105, 620, '微米级晶体', { size: 9.5, weight: 700, fill: C.accD })
  b.wtext(1180, 545, 'Gonen 组 2013 年溶菌酶纳米晶首演（约 2.9 Å）；淀粉样短肽与长不大晶的小蛋白获益。数据与晶体学同族，常以 MR 或 AF 模型求解。', { size: 10, fill: C.sub, maxW: 165, lh: 13.5 })
  // AI 全流程
  b.text(730, 632, 'AI 全流程接管手工艺环节：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(830, 650, 'AlphaFill 2023', { fill: C.okL, stroke: C.ok, size: 9.5, weight: 700, tfill: C.okD, pad: 6 })
  b.tag(990, 650, 'ModelAngelo 2024', { fill: C.okL, stroke: C.ok, size: 9.5, weight: 700, tfill: C.okD, pad: 6 })
  b.tag(1155, 650, 'cryoDRGN 2021', { fill: C.okL, stroke: C.ok, size: 9.5, weight: 700, tfill: C.okD, pad: 6 })
  b.wtext(730, 674, '配体回填、密度图自动建模、连续构象分析——工具产出候选，取舍仍在人。', { size: 9.5, fill: C.mute, maxW: 400, lh: 12.5 })

  // ============ 四、2030 展望 ============
  b.panel(30, 712, 1340, 190, { title: '四、2030 展望：结构生物学从描绘静态走向拍摄动态' })
  b.table(50, 738, 1300, {
    headers: ['方向', '当下状态', '2030 展望'],
    colW: [220, 540, 540],
    rowH: 23,
    fontSize: 10.5,
    rows: [
      ['时间分辨', '串晶与时间分辨冷冻电镜常规覆盖毫秒级', '飞秒到秒全谱系连续成像'],
      ['原位结构', 'cryo-ET 加亚断层平均达约 3–4 Å', '细胞内分子分辨率普查'],
      ['计算与实验', '计算覆盖折叠（AFDB 约 2 亿条）', '构象、互作与机制仍归实验'],
      ['整合建模', '纳米级排布成为常规交付物', '多尺度概率模型标准化'],
      ['单分子结构', '概念与装置探索期', '单粒子或单分子读出结构'],
    ],
  })
  b.ctext(700, 934, '方法在变而主线未变：以可复核的实验数据回答机制问题——带着这张方法地图，去拍属于自己的那部结构电影', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '方法选择决策与前沿：五问决策地图与时间分辨',
  subtitle: '小于 30 kDa 需动力学选 NMR、可结晶选晶体学、大于 100 kDa 选冷冻电镜；均一性一票否决；串晶毫秒级；cryo-ET 约 3–4 Å；MicroED 埃级',
  draw,
})
