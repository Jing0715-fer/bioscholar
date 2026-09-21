// bc ch7-s4 RNA 的种类与结构（39-a 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RNA 一般特征与 mRNA 结构 ============
  b.panel(30, 132, 660, 415, { title: '一、RNA 的一般特征与 mRNA 的帽-尾结构' })
  b.rnaW(66, 214, 200, { amp: 9, stroke: C.rna })
  b.stemLoop(300, 217, { h: 36, r: 12, stroke: C.rna })
  b.text(360, 200, '茎环（发夹）', { size: 11, weight: 600, fill: C.rnaD })
  b.wtext(66, 252, '单链回折 → 局部双螺旋（A 型）与茎环；2′-OH 亲核进攻磷酸二酯键 → 对碱不稳定，比 DNA 更易降解（不能形成长 B 型双螺旋）。', { size: 11, fill: C.sub, maxW: 270, lh: 16 })
  b.wtext(360, 226, '碱基组成无 Chargaff 当量关系；某些病毒以 RNA 为遗传物质。', { size: 11, fill: C.mute, maxW: 290, lh: 16 })
  // mRNA 结构图
  b.text(66, 306, '真核 mRNA（占总 RNA 约 3%~5%）', { size: 13, weight: 700, fill: C.ink })
  b.tag(150, 348, '5′ m⁷Gppp 帽', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 7 })
  b.arrow(206, 348, 236, 348, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(238, 330, 232, 36, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(354, 352, '编码区 ORF（单顺反子）', { size: 11.5, weight: 700, fill: C.accD })
  b.text(262, 372, '起始', { size: 9.5, fill: C.mute })
  b.text(430, 372, '终止', { size: 9.5, fill: C.mute })
  b.arrow(472, 348, 502, 348, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.tag(560, 348, '3′ poly(A) 尾', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 7 })
  b.ctext(560, 378, '20~250 个 A', { size: 9.5, fill: C.mute })
  b.wtext(66, 402, '帽：保护 mRNA、参与翻译起始识别；poly(A) 尾：维持稳定性、提高翻译效率；内含子剪接后形成成熟 mRNA。原核 mRNA 为多顺反子、半衰期短，无帽与尾。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // RNA/DNA 比较
  b.table(46, 448, 612, {
    headers: ['特征', 'DNA', 'RNA'],
    colW: [92, 236, 284],
    rowH: 27,
    fontSize: 10.5,
    rows: [
      ['链', '双链（主要）', '单链（局部双链）'],
      ['碱基', 'A · T · G · C', 'A · U · G · C（+稀有碱基）'],
      ['戊糖', '2′-脱氧核糖', '核糖（含 2′-OH）'],
    ],
  })

  // ============ 二、tRNA 三叶草与倒 L ============
  b.panel(710, 132, 660, 415, { title: '二、tRNA（73~94 nt）：三叶草二级结构 × 倒 L 三级结构' })
  const cx = 955, cy = 356
  const arm = (th: number, r0: number, r1: number, lr: number, open = false) => {
    const ux = Math.cos(th), uy = Math.sin(th)
    const px = -uy, py = ux
    const P = (r: number, s: number): [number, number] => [cx + ux * r + s * px * 6.5, cy + uy * r + s * py * 6.5]
    const A1 = P(r0, -1), A2 = P(r1, -1), B2 = P(r1, 1), B1 = P(r0, 1)
    if (open) {
      b.polyline([A1, A2], { stroke: C.rna, sw: 2.4 })
      b.polyline([B1, B2], { stroke: C.rna, sw: 2.4 })
    } else {
      b.path(`M${A1[0].toFixed(1)},${A1[1].toFixed(1)} L${A2[0].toFixed(1)},${A2[1].toFixed(1)} A${lr},${lr} 0 0 1 ${B2[0].toFixed(1)},${B2[1].toFixed(1)} L${B1[0].toFixed(1)},${B1[1].toFixed(1)}`, { stroke: C.rna, sw: 2.4, fill: 'none' })
    }
    // 碱基配对横档
    for (let r = r0 + 9; r < r1 - 4; r += 13) {
      const q1 = P(r, -1), q2 = P(r, 1)
      b.line(q1[0], q1[1], q2[0], q2[1], { stroke: C.rna, sw: 1.2, opacity: 0.5 })
    }
  }
  const d2r = (deg: number) => (deg * Math.PI) / 180
  arm(d2r(-90), 34, 96, 0, true)      // 氨基酸臂（开放）
  arm(d2r(178), 34, 88, 19)           // DHU 臂（左）
  arm(d2r(-8), 34, 88, 19)            // TψC 臂（右）
  arm(d2r(90), 34, 92, 21)            // 反密码子臂（下）
  arm(d2r(38), 30, 56, 13)            // 可变环（右下小）
  b.tag(cx + 3, cy - 118, '3′-CCA', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.ctext(cx - 66, cy - 92, '5′', { size: 9.5, fill: C.mute })
  b.ctext(cx, cy - 138, '氨基酸臂（接受氨基酸）', { size: 10.5, weight: 700, fill: C.ink })
  b.etext(cx - 128, cy - 10, 'DHU 环', { size: 10.5, weight: 700, fill: C.ink })
  b.etext(cx - 128, cy + 8, '（二氢尿嘧啶）', { size: 9, fill: C.mute })
  b.text(cx + 128, cy - 10, 'TψC 环', { size: 10.5, weight: 700, fill: C.ink })
  b.text(cx + 128, cy + 8, '（含稀有碱基 T·ψ）', { size: 9, fill: C.mute })
  b.ctext(cx, cy + 134, '反密码子环', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(cx, cy + 150, '（中部含反密码子）', { size: 9, fill: C.mute })
  b.ctext(cx + 96, cy + 74, '可变环', { size: 9.5, weight: 700, fill: C.sub })
  // 反密码子点
  for (const [dx, dy] of [[-12, -4], [0, 2], [12, -4]] as [number, number][]) {
    b.circle(cx + dx, cy + 114 + dy, 3.4, { fill: C.enz })
  }
  // 倒 L 三级结构
  b.text(1226, 214, '三级结构：倒 L 形', { size: 12, weight: 700, fill: C.ink })
  b.path('M1236,398 L1236,262 L1330,262', { stroke: C.rna, sw: 11, opacity: 0.32, fill: 'none' })
  b.path('M1236,398 L1236,262 L1330,262', { stroke: C.rna, sw: 2.2, fill: 'none', dash: '5 4' })
  b.tag(1236, 240, '3′-CCA', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 4 })
  b.tag(1336, 284, '反密码子', { fill: C.dnaL, stroke: C.dna, size: 9.5, weight: 700, tfill: C.dnaD, pad: 4 })
  b.ctext(1283, 430, '氨基酸臂与反密码子臂', { size: 9.5, fill: C.mute })
  b.ctext(1283, 444, '分居 L 两端', { size: 9.5, fill: C.mute })
  b.wtext(726, 524, 'tRNA 是「适配器」分子：一端连密码（反密码子识别 mRNA 密码子）、一端连氨基酸（3′-CCA）；含稀有碱基最多（假尿苷 ψ · DHU · T · 甲基化碱基）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 三、rRNA：核糖体结构与催化核心 ============
  b.panel(30, 566, 660, 414, { title: '三、rRNA（约 80%）：核糖体的结构与催化核心' })
  b.table(56, 624, 612, {
    headers: ['', '原核 70S 核糖体', '真核 80S 核糖体'],
    colW: [96, 244, 272],
    rowH: 42,
    fontSize: 11,
    rows: [
      ['大亚基', '50S = 23S + 5S', '60S = 28S + 5.8S + 5S'],
      ['小亚基', '30S = 16S', '40S = 18S'],
    ],
  })
  b.rect(56, 756, 612, 66, { fill: C.enzL, fillOp: 0.55, stroke: C.enz, sw: 1.6, rx: 8 })
  b.text(72, 780, '肽酰转移酶活性由 23S rRNA 本身承担——是核酶', { size: 12.5, weight: 700, fill: C.enzD })
  b.wtext(72, 802, 'RNA 既携带信息又具催化功能，为「RNA 世界假说」的重要证据。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.bars(76, 952, 300, 120, [4, 80], { labels: ['mRNA', 'rRNA'], vlabels: ['3~5%', '~80%'], fill: C.rnaL, stroke: C.rna, max: 100 })
  b.wtext(400, 880, 'rRNA 含量最多（约 80%），', { size: 11.5, weight: 700, fill: C.ink, maxW: 260, lh: 17 })
  b.wtext(400, 916, '是核糖体的结构骨架与催化核心；mRNA 仅约 3%~5%，寿命短而更新快。', { size: 10.5, fill: C.sub, maxW: 260, lh: 15 })

  // ============ 四、非编码 RNA 家族 ============
  b.panel(710, 566, 660, 414, { title: '四、非编码 RNA（ncRNA）：不编码蛋白质的功能 RNA' })
  const cards: [string, string, string, string][] = [
    ['miRNA · siRNA', '~22 nt，介导 RNA 干扰（转录后基因沉默）；Fire 与 Mello 获 2006 年诺贝尔奖', C.rna, C.rnaL],
    ['lncRNA', '长链非编码 RNA，参与表观遗传调控（如 Xist）', C.pro, C.proL],
    ['snRNA', '与蛋白质构成剪接体，执行内含子剪接', C.dna, C.dnaL],
    ['snoRNA', '指导 rRNA 核苷酸的修饰', C.acc, C.accL],
    ['核酶（催化 RNA）', 'RNase P 的 M1 RNA 与锤头状核酶可催化生化反应', C.enz, C.enzL],
  ]
  const pos: [number, number][] = [[736, 614], [1052, 614], [736, 726], [1052, 726], [736, 838]]
  pos.forEach(([x, y], i) => {
    const [t, s, st, fl] = cards[i]
    b.rect(x, y, 296, 100, { fill: fl, fillOp: 0.45, stroke: st, sw: 1.5, rx: 9 })
    b.text(x + 16, y + 28, t, { size: 13, weight: 700, fill: st })
    b.wtext(x + 16, y + 50, s, { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  })
  b.rect(1052, 838, 296, 100, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(1068, 866, '要义', { size: 13, weight: 700, fill: C.sub })
  b.wtext(1068, 888, 'RNA 兼具「信息分子」与「工具分子」双重身份：从核酶到 RNA 干扰，催化与调控皆由 RNA 直接执行。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
}

export default scene({
  title: 'RNA 的种类与结构：三大类 RNA 与非编码 RNA 家族',
  subtitle: 'mRNA 帽-尾结构（5′ m⁷Gppp + 3′ poly(A) 20~250）、tRNA 三叶草/倒 L 形「适配器」（稀有碱基最多）、rRNA 催化核心（23S rRNA 核酶）与 miRNA/lncRNA 等 ncRNA',
  draw,
})
