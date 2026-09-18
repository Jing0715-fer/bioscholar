// mb ch6-s3 tRNA 结构与氨酰-tRNA 合成酶（39-b2 收尾轮）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、tRNA 二级结构：三叶草 ============
  b.panel(30, 132, 640, 448, { title: '一、二级结构：三叶草形（70～90 nt）' })
  // 局部工具：茎（双线 + 横档）
  const stem = (x1: number, y1: number, x2: number, y2: number, half = 7, n = 4) => {
    const dx = x2 - x1, dy = y2 - y1
    const len = Math.hypot(dx, dy) || 1
    const ox = (-dy / len) * half, oy = (dx / len) * half
    b.line(x1 - ox, y1 - oy, x2 - ox, y2 - oy, { stroke: C.rna, sw: 2 })
    b.line(x1 + ox, y1 + oy, x2 + ox, y2 + oy, { stroke: C.rna, sw: 2 })
    for (let i = 1; i <= n; i++) {
      const t = i / (n + 1)
      const px = x1 + dx * t, py = y1 + dy * t
      b.line(px - ox, py - oy, px + ox, py + oy, { stroke: C.faint, sw: 1.3 })
    }
  }
  // 氨基酸接受臂（垂直，7 bp）
  stem(300, 215, 300, 345, 16, 7)
  b.rect(268, 184, 64, 26, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 5 })
  b.ctext(300, 201, '3′-CCA', { size: 11.5, weight: 700, fill: C.enzD })
  b.text(262, 226, '5′', { size: 11, weight: 700, fill: C.rnaD, anchor: 'end' })
  b.etext(266, 282, '氨基酸接受臂', { size: 11.5, weight: 700, fill: C.ink })
  b.etext(266, 300, '（7 bp 柄）', { size: 10, fill: C.mute })
  // D 臂（左下斜）
  stem(288, 352, 224, 398, 7, 4)
  b.ellipse(198, 428, 40, 32, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(198, 425, 'D 臂', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(198, 443, '二氢尿嘧啶', { size: 9.5, fill: C.mute })
  // 反密码子臂（垂直向下）
  stem(300, 352, 300, 448, 16, 5)
  b.ellipse(300, 480, 36, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.ctext(300, 472, '反密码子臂', { size: 10.5, weight: 700, fill: C.dnaD })
  const anti = ['3′', 'N', 'N', 'N', '5′']
  anti.forEach((s, i) => {
    b.rect(258 + i * 21, 492, 20, 18, { fill: i >= 1 && i <= 3 ? C.dna : '#ffffff', stroke: C.dna, sw: 1.2, rx: 3 })
    b.ctext(268 + i * 21, 505, s, { size: 8.5, weight: 700, fill: i >= 1 && i <= 3 ? '#ffffff' : C.dnaD })
  })
  b.ctext(300, 536, '反密码子（环中央）', { size: 10.5, fill: C.dnaD })
  // 可变环（右侧短茎）
  b.line(314, 354, 346, 368, { stroke: C.rna, sw: 2 })
  b.ellipse(370, 378, 24, 17, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(370, 382, '可变环', { size: 8.5, fill: C.rnaD })
  // TψC 臂（右下斜）
  stem(312, 352, 378, 398, 7, 4)
  b.ellipse(404, 428, 40, 32, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(404, 425, 'TψC 臂', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(404, 443, '核糖胸苷-假尿苷-胞苷', { size: 8.5, fill: C.mute })
  // 右侧要点
  b.wtext(466, 250, '· 一级结构 70～90 nt，含 10%～20% 修饰碱基（真核 tRNA 约 60 种修饰）', { size: 10.5, fill: C.sub, maxW: 185, lh: 15 })
  b.wtext(466, 320, '· 保守碱基维持整体折叠；G19·U56 等三级相互作用固定 L 形', { size: 10.5, fill: C.sub, maxW: 185, lh: 15 })
  b.wtext(466, 390, '· 反密码子 5′ 端相邻碱基常为 U（摆动位）', { size: 10.5, fill: C.sub, maxW: 185, lh: 15 })
  b.wtext(56, 560, '三叶草各臂＝stem（柄，碱基配对）＋loop（环，单链）', { size: 10.5, fill: C.mute, maxW: 600 })

  // ============ 二、三级结构：倒 L 形 ============
  b.panel(690, 132, 680, 448, { title: '二、三级结构：倒 L 形（3′-CCA 与反密码子分居两端）' })
  // L 形主体（单路径轮廓）
  b.path('M833,222 L887,222 L887,348 L1093,348 L1093,402 L833,402 Z', { fill: C.rnaL, stroke: C.rna, sw: 2.2 })
  // 两臂横档（示意碱基对堆积）
  for (let y = 238; y <= 336; y += 16) b.line(838, y, 882, y, { stroke: C.faint, sw: 1.3 })
  for (let x = 900; x <= 1086; x += 16) b.line(x, 354, x, 396, { stroke: C.faint, sw: 1.3 })
  // 两端标签
  b.rect(802, 188, 116, 27, { fill: C.enzL, stroke: C.enz, sw: 1.7, rx: 5 })
  b.ctext(860, 206, '3′-CCA（携 aa）', { size: 10.5, weight: 700, fill: C.enzD })
  b.rect(1099, 362, 92, 27, { fill: C.dnaL, stroke: C.dna, sw: 1.7, rx: 5 })
  b.ctext(1145, 380, '反密码子', { size: 11, weight: 700, fill: C.dnaD })
  // 距离虚线
  b.line(862, 218, 1099, 376, { stroke: C.sub, sw: 1.6, dash: '6 5' })
  b.ctext(1010, 268, '两端相距约 7 nm', { size: 11.5, weight: 700, fill: C.sub })
  // 臂标注
  b.wtext(700, 296, '氨基酸接受臂 + TψC 臂同轴堆积成一臂', { size: 10.5, fill: C.sub, maxW: 126, lh: 15, anchor: 'end' })
  b.wtext(890, 428, 'D 臂 + 反密码子臂堆积成另一臂，两臂直角', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  b.ctext(1120, 428, '倒 L 形', { size: 11.5, weight: 700, fill: C.rnaD })
  // 身份元件
  b.rect(716, 478, 620, 88, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(732, 502, '身份元件（identity elements）', { size: 12, weight: 700, fill: C.ink })
  b.wtext(732, 524, '接受臂与反密码子是 tRNA 身份的主要决定部位——把 tRNA^Ala 的 G3:U70 碱基对移入其他 tRNA，即被丙氨酰-tRNA 合成酶误酰化：结构决定身份。', { size: 10.5, fill: C.sub, maxW: 588, lh: 15 })
  b.tag(1170, 550, 'G3:U70', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 7 })

  // ============ 三、aaRS 两步反应与两类酶 ============
  b.panel(30, 600, 640, 360, { title: '三、氨酰-tRNA 合成酶：两步反应（20 种酶，每 aa 一种）' })
  // ① 活化
  b.text(56, 668, '① 活化', { size: 12.5, weight: 700, fill: C.enzD })
  b.rect(122, 652, 48, 30, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 5 })
  b.ctext(146, 672, 'aa', { size: 11.5, weight: 700, fill: '#78350f' })
  b.text(178, 672, '+', { size: 13, weight: 700, fill: C.sub })
  b.rect(190, 652, 52, 30, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 5 })
  b.ctext(216, 672, 'ATP', { size: 11.5, weight: 700, fill: C.accD })
  b.arrow(250, 667, 312, 667, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(318, 645, 128, 44, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 6 })
  b.ctext(382, 663, 'aa-AMP', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(382, 680, '氨酰-腺苷酸', { size: 9, fill: C.sub })
  b.text(454, 672, '+ PPᵢ', { size: 11.5, weight: 600, fill: C.sub })
  // ② 转移
  b.text(56, 724, '② 转移', { size: 12.5, weight: 700, fill: C.enzD })
  b.rect(122, 708, 92, 30, { fill: C.enzL, stroke: C.enz, sw: 1.5, rx: 5 })
  b.ctext(168, 728, 'aa-AMP', { size: 11.5, weight: 700, fill: C.enzD })
  b.text(222, 728, '+', { size: 13, weight: 700, fill: C.sub })
  b.rect(234, 708, 116, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 5 })
  b.ctext(292, 728, 'tRNA 3′ 端', { size: 11.5, weight: 700, fill: C.rnaD })
  b.arrow(358, 723, 420, 723, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(426, 708, 118, 30, { fill: C.okL, stroke: C.ok, sw: 1.7, rx: 5 })
  b.ctext(485, 728, '氨酰-tRNA', { size: 11.5, weight: 700, fill: '#065f46' })
  b.text(552, 728, '+ AMP', { size: 11.5, weight: 600, fill: C.sub })
  b.wtext(56, 762, '酯键连于 3′ 端腺苷的 2′-OH（I 类）或 3′-OH（II 类）——把正确的氨基酸挂上正确的 tRNA，是翻译正确性的第一道关口。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  // 两类对照表
  b.table(56, 790, 600, {
    headers: ['类别', '结构特征 / tRNA 结合侧', '酰化位点'],
    colW: [96, 356, 148],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['I 类', 'Rossmann 折叠；多为单体；结合 tRNA 小沟侧', "2′-OH"],
      ['II 类', '多为同源二 / 四聚体；结合 tRNA 大沟侧', "3′-OH"],
    ],
  })
  b.wtext(56, 926, 'I 类代表：Arg·Gln·Glu·Ile·Leu·Met·Trp·Tyr·Val·Cys　｜　II 类代表：Gly·His·Pro·Ser·Thr·Phe·Asp·Asn·Lys·Ala', { size: 10, fill: C.mute, maxW: 600, lh: 14 })

  // ============ 四、双筛校对 ============
  b.panel(690, 600, 680, 360, { title: '四、双筛校对（Fersht）：IleRS 的催化腔 + 编辑腔' })
  b.wtext(716, 652, '第一筛：催化腔经几何排阻排除过大的氨基酸（不能进入活化）', { size: 11, weight: 600, fill: C.sub, maxW: 620, lh: 15 })
  // 酶体
  b.ellipse(960, 730, 140, 68, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(960, 690, 'IleRS', { size: 13, weight: 700, fill: C.proD })
  b.rect(886, 706, 96, 50, { fill: '#ffffff', stroke: C.enz, sw: 1.7, rx: 5 })
  b.ctext(934, 724, '催化腔', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(934, 742, '大·第一筛', { size: 9, fill: C.sub })
  b.rect(1006, 706, 96, 50, { fill: C.enzL, stroke: C.enz, sw: 1.7, rx: 5 })
  b.ctext(1054, 724, '编辑腔', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(1054, 742, '小·第二筛', { size: 9, fill: C.sub })
  b.arrow(984, 731, 1004, 731, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(994, 698, '副底物转入', { size: 8.5, fill: C.sub })
  // 底物
  b.ion(770, 690, 'Ile', { r: 16, fill: C.okL, stroke: C.ok, tfill: '#065f46', size: 11 })
  b.arrow(790, 690, 884, 716, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ctext(834, 676, '✓ 正确底物', { size: 9.5, weight: 600, fill: C.ok })
  b.ion(770, 748, 'Val', { r: 16, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 11 })
  b.arrow(790, 748, 884, 744, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(834, 770, '比 Ile 小·误活化', { size: 9.5, weight: 600, fill: C.warn })
  // 去向
  b.arrow(934, 756, 934, 792, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.ctext(934, 816, 'Ile-tRNA ✓ 产物', { size: 10.5, weight: 700, fill: '#065f46' })
  b.arrow(1054, 756, 1054, 792, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(1054, 816, 'Val 被水解除去', { size: 10.5, weight: 700, fill: '#991b1b' })
  // 右侧双筛逻辑
  b.text(1128, 676, '双筛逻辑', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(1128, 700, '· 第一筛：过大者进不了催化腔', { size: 10.5, fill: C.sub, maxW: 226, lh: 15 })
  b.wtext(1128, 730, '· 第二筛：过小的副底物在编辑腔被水解', { size: 10.5, fill: C.sub, maxW: 226, lh: 15 })
  b.wtext(1128, 760, '· 「恰好 Ile」通过两筛 → 正确酰化', { size: 10.5, fill: C.sub, maxW: 226, lh: 15 })
  // 频率与延伸
  b.ctext(1010, 846, 'Val 误入频率：10⁻² → 10⁻⁵ 以下（pre / post-transfer editing）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(716, 870, 'ThrRS 编辑 Ser、PheRS 编辑 Tyr 遵循同一逻辑；tRNA 结合还诱导酶构象校验（诱导契合）协同保真。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.rect(716, 890, 620, 56, { fill: C.accL, stroke: C.acc, sw: 1.2, rx: 8, fillOp: 0.5 })
  b.wtext(730, 910, '药物靶点：莫匹罗星特异抑制细菌 IleRS（外用抗生素经典）；镰孢菌酸抑制哺乳动物 GlnRS——近年发现 aaRS 兼有「第二职业」（非催化功能参与信号转导）。', { size: 10.5, fill: C.sub, maxW: 592, lh: 15 })
}

export default scene({
  title: 'tRNA 结构与氨酰-tRNA 合成酶',
  subtitle: '三叶草二级结构折叠为倒 L 形——3′-CCA 与反密码子分居两端（相距约 7 nm）；aaRS 两步反应（aa-AMP 中间体，I 类 2′-OH / II 类 3′-OH），双筛校对使 IleRS 的 Val 误入从 10⁻² 降至 10⁻⁵ 以下',
  draw,
})
