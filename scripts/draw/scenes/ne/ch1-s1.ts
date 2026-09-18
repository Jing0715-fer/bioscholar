// ne ch1-s1 神经生物学绪论 / 神经系统与神经元学说（39-h 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、论战时间线 ============
  b.panel(30, 132, 1340, 210, { title: '一、从「网」到「元」：一场跨越三十余年的论战' })
  b.timelineH(90, 262, 1250, [
    { at: 0.05, label: '1873 高尔基染色', sub: '银淀随机浸染极少数神经元', above: true, c: C.acc },
    { at: 0.27, label: '1889 卡哈尔', sub: '神经元是独立单位', above: false, c: C.dna },
    { at: 0.47, label: '1897 突触定名', sub: '谢林顿命名 synapse', above: true, c: C.pro },
    { at: 0.66, label: '1906 诺贝尔奖', sub: 'Golgi 与 Cajal 同台领奖 · 立场对立', above: false, c: C.warn },
    { at: 0.88, label: '1950s 电镜裁决', sub: '突触间隙 20–40 nm', above: true, c: C.bad },
  ])

  // ============ 二、两种学说对峙 ============
  b.panel(30, 358, 1340, 330, { title: '二、网状学说 vs 神经元学说：连续成网，还是接触相连？' })

  // 左：网状学说（Golgi）——突起融合成网
  b.zone(60, 420, 590, 220, { label: '网状学说（Golgi）', sub: '突起彼此融合连通，细胞质连续成网', fill: C.badL, fillOp: 0.4, lfill: C.bad })
  const soma = (cx: number, cy: number, r: number, stroke: string) => {
    b.circle(cx, cy, r, { fill: C.bg, stroke, sw: 2.2 })
    b.circle(cx, cy, r * 0.4, { fill: stroke, fillOp: 0.35, stroke: 'none' })
  }
  soma(170, 500, 24, C.bad)
  soma(400, 470, 21, C.bad)
  soma(330, 600, 19, C.bad)
  // 融合成网的连续纤维（无间隙）
  b.path('M146,510 q-40,40 -10,80 q30,40 90,30 q60,-10 60,-70', { stroke: C.bad, sw: 2.6 })
  b.path('M194,492 q90,-20 180,-14', { stroke: C.bad, sw: 2.6 })
  b.path('M190,512 q60,50 120,80', { stroke: C.bad, sw: 2.6 })
  b.path('M420,490 q30,60 0,110', { stroke: C.bad, sw: 2.6 })
  b.path('M240,560 q100,-20 170,-60', { stroke: C.bad, sw: 2.6 })
  b.text(96, 636, '胞质直接流通 · 无边界', { size: 12.5, weight: 700, fill: C.bad })

  // 右：神经元学说（Cajal）——独立细胞，突触接触
  b.zone(690, 420, 590, 220, { label: '神经元学说（Cajal）', sub: '独立细胞，仅在接触点（突触）处传递信息', fill: C.dnaL, fillOp: 0.4, lfill: C.dna })
  // 神经元 A（上）：胞体 + 轴突 + 髓鞘 + 末梢
  soma(780, 470, 24, C.dna)
  b.line(760, 452, 726, 420, { stroke: C.dna, sw: 2 })
  b.line(762, 480, 720, 470, { stroke: C.dna, sw: 2 })
  b.line(760, 490, 730, 512, { stroke: C.dna, sw: 2 })
  b.line(804, 470, 1000, 470, { stroke: C.dna, sw: 2.6 })
  ;[830, 880, 930].forEach(mx => b.rect(mx, 458, 34, 24, { fill: C.bg, stroke: C.dna, sw: 1.6, rx: 9 }))
  b.ellipse(1024, 470, 15, 11, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  // 突触间隙（两道竖线之间的窄缝）
  b.line(1046, 452, 1046, 488, { stroke: C.dna, sw: 2.6 })
  b.line(1064, 452, 1064, 488, { stroke: C.dna, sw: 2.6 })
  ;[1051, 1055, 1059].forEach(tx => b.circle(tx, 462, 2.6, { fill: C.rna }))
  ;[1051, 1055, 1059].forEach(tx => b.circle(tx, 478, 2.6, { fill: C.rna }))
  // 神经元 B（下）：树突 + 胞体
  b.line(1064, 470, 1140, 470, { stroke: C.dna, sw: 2.4 })
  soma(1165, 470, 24, C.dna)
  b.line(1178, 450, 1210, 418, { stroke: C.dna, sw: 2 })
  b.line(1184, 474, 1230, 462, { stroke: C.dna, sw: 2 })
  b.line(1178, 492, 1208, 522, { stroke: C.dna, sw: 2 })
  b.ctext(1055, 436, '突触间隙', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(1055, 508, '20–40 nm', { size: 11.5, weight: 700, fill: C.rnaD })
  b.text(716, 636, '接触而非连续 · 信息跨细胞单向传递', { size: 12.5, weight: 700, fill: C.dnaD })

  b.tag(670, 530, 'VS', { fill: C.panelB, stroke: C.mute, size: 16, weight: 700, tfill: C.sub, pad: 12 })
  // 裁决框
  b.rect(690, 652, 590, 26, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 7 })
  b.ctext(985, 669, '1950s 电镜（De Robertis · Bennett · Palay）：间隙确证 → 神经元学说胜出', { size: 11.5, weight: 700, fill: C.bad })

  // ============ 三、数量级与动态极化 ============
  b.panel(30, 704, 1340, 274, { title: '三、神经元的基本结构与数量级：从 302 到 860 亿' })
  // 左：神经元结构 + 动态极化
  b.circle(210, 810, 30, { fill: C.bg, stroke: C.ink, sw: 2.4 })
  b.circle(210, 810, 12, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  ;[[-1, -1], [-1.3, -0.2], [-1, 0.7], [-0.5, -1.3]].forEach(([dx, dy]) => {
    b.line(210 + dx * 26, 810 + dy * 26, 210 + dx * 66, 810 + dy * 66, { stroke: C.acc, sw: 2.2 })
  })
  b.line(240, 810, 520, 810, { stroke: C.ink, sw: 2.8 })
  ;[280, 330, 380, 430].forEach(mx => b.rect(mx, 798, 36, 24, { fill: C.bg, stroke: C.ink, sw: 1.5, rx: 9 }))
  b.path('M520,810 q30,-14 60,-16', { stroke: C.ink, sw: 2.2, marker: 'ink' })
  b.path('M520,810 q30,14 60,16', { stroke: C.ink, sw: 2.2, marker: 'ink' })
  b.ctext(120, 760, '树突（输入）', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(210, 866, '胞体（整合）', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(380, 776, '轴突 + 髓鞘（传导）', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(578, 848, '突触末梢（输出）', { size: 12.5, weight: 700, fill: C.rnaD })
  b.arrow(120, 890, 590, 890, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(355, 916, '动态极化：信息自树突经胞体流向轴突末梢', { size: 12.5, weight: 700, fill: C.rnaD })

  // 右：数量级表
  b.table(700, 756, 650, {
    headers: ['生物 / 部位', '神经元数量', '突触规模'],
    colW: [190, 220, 240],
    rowH: 32,
    fontSize: 12.5,
    rows: [
      ['秀丽隐杆线虫', '恰好 302 个', '约 7000 个连接（完整连接组）'],
      ['人脑（无偏计数）', '约 860 亿 + 大致等量胶质', '约 10¹⁴–10¹⁵'],
      ['人小脑', '约 690 亿', '—'],
      ['人大脑皮层', '约 160 亿', '—'],
    ],
  })
  b.rect(700, 916, 650, 42, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 7 })
  b.wtext(716, 940, '后世修正：缝隙连接允许 <1 kDa 小分子直接交换——亚细胞层面的连续，不改化学与遗传层面的独立边界。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '神经元学说：从网与元之争到突触间隙的电镜裁决',
  subtitle: '1873 高尔基染色显示单个神经元全貌；Golgi 网状学说与 Cajal 神经元学说对峙三十余年，1906 年同获诺奖而立场对立；1950s 电镜揭示 20–40 nm 突触间隙终裁；人脑约 860 亿神经元（小脑 690 亿、皮层 160 亿），突触 10¹⁴–10¹⁵ 量级',
  draw,
})
