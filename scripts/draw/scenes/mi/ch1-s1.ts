// mi ch1-s1 微生物：类群、尺度与共性（39-f 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、尺度谱（对数轴） ============
  b.panel(30, 132, 1340, 452, { title: '一、尺度谱：从 20 nm 的病毒到肉眼可见的蕈菌——跨越五个数量级以上' })

  // 对数轴：10 nm → 10 mm
  const AX = 130, AW = 1200, AY = 430
  const px = (nm: number) => AX + ((Math.log10(nm) - 1) / 6) * AW
  b.line(AX, AY, AX + AW + 16, AY, { stroke: C.sub, sw: 2.6, marker: 'mute' })
  const ticks: Array<[number, string]> = [
    [10, '10 nm'], [100, '100 nm'], [1000, '1 μm'], [10000, '10 μm'],
    [100000, '100 μm'], [1000000, '1 mm'], [10000000, '10 mm'],
  ]
  ticks.forEach(([v, s]) => {
    b.line(px(v), AY, px(v), AY + 7, { stroke: C.sub, sw: 1.8 })
    b.ctext(px(v), AY + 24, s, { size: 12.5, fill: C.mute })
  })

  // 观察手段色带
  const limX = px(200), eyeX = px(100000)
  b.rect(AX, AY + 44, limX - AX, 32, { fill: C.badL, fillOp: 0.55, stroke: C.bad, sw: 1.2 })
  b.ctext((AX + limX) / 2, AY + 65, '电子显微镜', { size: 12, weight: 700, fill: C.bad })
  b.rect(limX, AY + 44, eyeX - limX, 32, { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 1.2 })
  b.ctext((limX + eyeX) / 2, AY + 65, '光学显微镜（油镜）', { size: 12, weight: 700, fill: C.accD })
  b.rect(eyeX, AY + 44, AX + AW - eyeX, 32, { fill: C.okL, fillOp: 0.55, stroke: C.ok, sw: 1.2 })
  b.ctext((eyeX + AX + AW) / 2, AY + 65, '肉眼可见', { size: 12, weight: 700, fill: C.ok })

  // 光镜分辨极限（0.2 μm）
  b.line(limX, 422, limX, 196, { stroke: C.bad, sw: 2, dash: '7 5' })
  b.tag(limX, 182, '光镜分辨极限 ≈ 0.2 μm', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.bad, pad: 8 })

  // 各类群代表：图标（两层错落）+ 名称 + 尺度 + 轴上定位点
  type Rep = { x: number; tier: 1 | 2; name: string; range: string }
  const reps: Rep[] = [
    { x: 250, tier: 1, name: '病毒', range: '20–300 nm' },
    { x: 445, tier: 1, name: '支原体', range: '0.1–0.3 μm' },
    { x: 950, tier: 1, name: '原生动物', range: '光镜下清晰可见' },
    { x: 1200, tier: 1, name: '蕈菌（大型真菌）', range: '毫米至厘米级' },
    { x: 540, tier: 2, name: '细菌（杆菌）', range: '0.2–10 μm' },
    { x: 690, tier: 2, name: '霉菌菌丝', range: '直径 2–10 μm' },
    { x: 815, tier: 2, name: '酵母菌', range: '5–10 μm' },
  ]
  reps.forEach(r => {
    b.circle(r.x, AY, 4.5, { fill: C.sub })
    const top = r.tier === 1 ? 302 : 398
    b.line(r.x, top, r.x, AY - 7, { stroke: C.faint, sw: 1.3, dash: '3 4' })
    const ny = r.tier === 1 ? 278 : 372
    b.ctext(r.x, ny, r.name, { size: 13, weight: 700, fill: C.ink })
    b.ctext(r.x, ny + 19, r.range, { size: 11.5, fill: C.mute })
  })
  b.ctext(540, 409, '典型杆菌 0.5–1 × 2–3 μm', { size: 10, fill: C.mute })

  // 图标
  b.virion(250, 218, 22, { shape: 'icosahedral' })
  b.circle(445, 218, 11, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.cell(950, 218, 52, 38, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.nucleusU(958, 214, 11)
  b.circle(930, 226, 5, { fill: C.acc, fillOp: 0.7 })
  b.circle(970, 224, 4, { fill: C.acc, fillOp: 0.7 })
  b.path('M 1155 212 Q 1200 150 1245 212 Z', { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.rect(1186, 212, 28, 40, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 10 })
  b.bacterium(540, 330, 92, 36, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  b.path('M 652 340 C 672 322, 700 352, 728 334', { stroke: C.rna, sw: 5 })
  b.path('M 700 338 C 712 322, 728 316, 742 314', { stroke: C.rna, sw: 4 })
  b.cell(815, 330, 24, 19, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.circle(834, 318, 8, { fill: C.rnaL, stroke: C.rna, sw: 2 })

  b.ctext(700, 558, '光学显微镜的分辨极限 ≈ 0.2 μm 恰好把普通细菌留在可见的边缘，而把病毒彻底排除在视野之外', { size: 11.5, fill: C.mute })

  // ============ 二、三域系统与六大共性 ============
  b.panel(30, 612, 1340, 368, { title: '二、三域系统与微生物六大共性' })

  b.table(50, 690, 620, {
    headers: ['三域', '微生物代表类群', '核糖体', '细胞壁主成分'],
    colW: [105, 215, 105, 195],
    rows: [
      ['细菌 Bacteria', '大肠杆菌·蓝细菌·支原体', '70S', '肽聚糖（支原体缺壁）'],
      ['古菌 Archaea', '产甲烷菌·嗜盐菌·嗜热菌', '70S', '假肽聚糖 / S-层蛋白'],
      ['真核 Eukarya', '酵母·霉菌·原生动物', '80S', '几丁质 / 纤维素'],
      ['病毒（非细胞）', '噬菌体·流感病毒', '无', '无——不属于任何一域'],
    ],
    rowH: 52,
    fontSize: 12.5,
  })

  const card = (x: number, y: number, title: string, body: string, tint: string, tcol: string) => {
    b.rect(x, y, 310, 132, { fill: C.bg, stroke: tint, sw: 1.5, rx: 8 })
    b.text(x + 16, y + 28, title, { size: 13.5, weight: 700, fill: tcol })
    b.wtext(x + 16, y + 54, body, { size: 11.5, fill: C.sub, maxW: 280, lh: 18 })
  }
  card(700, 688, '①② 体积小 → 吸收多、转化快', '体积小则比表面积大，与环境物质交换强度极高——吸收多、转化快的物理基础。', C.dna, C.dnaD)
  card(1036, 688, '③ 生长旺、繁殖快', '大肠杆菌约 20 min 分裂一次；48 h 理论可达 2.2×10⁴³ 个——现实受营养与空间限制。', C.acc, C.accD)
  card(700, 838, '④⑤ 适应强、分布广、种类多', '每克肥沃土壤含菌 10⁸–10⁹ 个量级；适应、变异、分布与种类均居生命世界之首。', '#d97706', '#92400e')
  card(1036, 838, '⑥ 独立与共生并存', '既能独立生活，也与宿主结成共生、寄生等关系——人体微生物组即典型例证。', C.pro, C.proD)
}

export default scene({
  title: '微生物的类群、尺度与共性：从 20 nm 病毒到肉眼可见的蕈菌',
  subtitle: '微生物横跨细菌、古菌与真核三域（病毒为非细胞类群）；光镜分辨极限 ≈0.2 μm 恰在细菌与病毒之间；大肠杆菌约 20 min 一代、48 h 理论 2.2×10⁴³ 个；每克肥土含菌 10⁸–10⁹',
  draw,
})
