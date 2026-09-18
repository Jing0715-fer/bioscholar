// im ch6-s3 抗体多样性生成机制：V(D)J 重排（39-g 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、V(D)J 基因重排 ============
  b.panel(30, 132, 1340, 310, { title: '一、V(D)J 体细胞基因重排：抗体多样性不来自种系基因的直接转录' })

  b.text(90, 186, '重链基因座 IGH（14 号染色体长臂，自 5′ 端起）', { size: 12, weight: 700, fill: C.dnaD })
  b.genes(90, 240, 600, [
    { label: 'V 基因 ×65', frac: 0.44, fill: C.dnaL, stroke: C.dna },
    { label: 'D ×27', frac: 0.18, fill: C.rnaL, stroke: C.rna },
    { label: 'J ×6', frac: 0.15, fill: C.accL, stroke: C.acc },
    { label: 'C 基因（μ δ γ …）', frac: 0.23, fill: C.proL, stroke: C.pro },
  ])
  // 选择重组
  b.arrow(150, 258, 250, 286, { stroke: C.dna, sw: 1.6, dash: '4 3', marker: 'dna' })
  b.arrow(408, 258, 340, 286, { stroke: C.rna, sw: 1.6, dash: '4 3', marker: 'rna' })
  b.arrow(507, 258, 430, 286, { stroke: C.acc, sw: 1.6, dash: '4 3', marker: 'acc' })
  b.rect(200, 290, 280, 34, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(340, 312, 'V — D — J 重排单元（各取其一）', { size: 11.5, weight: 700, fill: C.dnaD })
  b.arrow(490, 307, 540, 307, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(544, 290, 200, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 7 })
  b.ctext(644, 312, '+ C → 有功能的重链', { size: 11.5, weight: 700, fill: C.proD })

  b.wtext(90, 356, 'RAG 重组酶识别 RSS（重组信号序列）并遵循 12/23 规则：带 12 bp 间隔的 RSS 只能与带 23 bp 间隔者配对重组，从规则上排除 V–V、J–J 的错误连接。', { size: 11, fill: C.sub, maxW: 600, lh: 17 })
  b.wtext(90, 408, '轻链基因座没有 D 片段，只进行 V–J 连接。', { size: 11, fill: C.mute, maxW: 600, lh: 16 })

  b.text(760, 186, 'κ 轻链（2 号染色体）', { size: 12, weight: 700, fill: C.dnaD })
  b.genes(760, 240, 380, [
    { label: 'V ×40', frac: 0.56, fill: C.dnaL, stroke: C.dna },
    { label: 'J ×5', frac: 0.22, fill: C.accL, stroke: C.acc },
    { label: 'C', frac: 0.22, fill: C.proL, stroke: C.pro },
  ])
  b.text(760, 296, 'λ 轻链（22 号染色体，J–C 串联排列）', { size: 12, weight: 700, fill: C.dnaD })
  b.genes(760, 350, 380, [
    { label: 'V ×30', frac: 0.56, fill: C.dnaL, stroke: C.dna },
    { label: 'J ×4', frac: 0.22, fill: C.accL, stroke: C.acc },
    { label: 'C', frac: 0.22, fill: C.proL, stroke: C.pro },
  ])
  b.wtext(760, 402, '重链 V(D)J 与轻链 VJ 的随机组合，构成组合多样性的主体。', { size: 11, fill: C.sub, maxW: 560, lh: 17 })

  // ============ 二、组合与连接多样性 ============
  b.panel(30, 458, 1340, 240, { title: '二、组合多样性 × 连接多样性：从 300 万到 10⁹–10¹¹' })
  b.table(60, 506, 680, {
    headers: ['基因座', '染色体定位', '片段与数目（约）', '组合贡献（约）'],
    colW: [120, 140, 220, 200],
    rowH: 36,
    fontSize: 11.5,
    rows: [
      ['重链 IGH', '14 号染色体长臂', 'V 65 · D 27 · J 6', 'V×D×J 随机取一'],
      ['κ 轻链', '2 号染色体', 'V 40 · J 5', 'V×J 约 200 种'],
      ['λ 轻链', '22 号染色体', 'V 30 · J 4', 'V×J 约 120 种'],
      ['轻链合计', '—', '—', '约 320 种'],
    ],
  })

  b.rect(780, 500, 560, 190, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(800, 526, '两层多样性叠加', { size: 13, weight: 700, fill: C.ink })
  b.wtext(800, 550, '组合多样性：重链与轻链的片段组合约贡献 300 万量级；', { size: 11.5, fill: C.sub, maxW: 520, lh: 17 })
  b.wtext(800, 584, '连接多样性：连接点上添加 N 核苷酸（TDT）与 P 核苷酸、末端修剪；', { size: 11.5, fill: C.sub, maxW: 520, lh: 17 })
  b.wtext(800, 618, '二者相乘，使理论库容达 10⁹–10¹¹。', { size: 12.5, weight: 700, fill: C.enzD, maxW: 520, lh: 17 })
  b.wtext(800, 652, '极少数基因片段，编码近乎无限的识别库——这正是 1987 年诺贝尔奖表彰利根川进的工作。', { size: 10.5, fill: C.mute, maxW: 520, lh: 15 })

  // ============ 三、一个克隆一种受体 ============
  b.panel(30, 714, 1340, 264, { title: '三、等位排斥与同型排斥：一个克隆一种受体；中枢的筛选与校正' })

  b.rect(60, 758, 620, 196, { fill: C.dnaL, fillOp: 0.3, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(80, 784, '等位排斥 · 同型排斥', { size: 13.5, weight: 700, fill: C.dnaD })
  b.cell(200, 870, 90, 58, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.path('M 200 866 L 200 842 M 200 842 L 188 824 M 200 842 L 212 824', { stroke: C.dna, sw: 4, fill: 'none' })
  b.circle(188, 820, 5, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
  b.circle(212, 820, 5, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
  b.wtext(320, 830, '每条等位基因重排成功即抑制另一条（等位排斥）；κ 成功即抑制 λ（同型排斥）。', { size: 11, fill: C.sub, maxW: 340, lh: 16 })
  b.wtext(320, 878, '结果：每个 B 细胞只表达一种特异性受体——克隆选择的分子前提。', { size: 11, weight: 600, fill: C.dnaD, maxW: 340, lh: 16 })
  b.ctext(200, 948, '仅表达单一 BCR 的 B 细胞', { size: 10, fill: C.mute })

  b.rect(710, 758, 610, 196, { fill: C.proL, fillOp: 0.3, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(730, 784, '中枢的筛选与校正（未成熟 B 细胞）', { size: 13.5, weight: 700, fill: C.proD })
  const cen: Array<[string, string]> = [
    ['受体编辑', '再度重排改写自身反应性受体'],
    ['克隆删除', '删除自身反应性克隆'],
    ['诱导无能', '留存但不应答（无能状态）'],
  ]
  cen.forEach(([t, s], i) => {
    b.circle(770, 812 + i * 38, 3.5, { fill: C.pro })
    b.text(782, 816 + i * 38, t, { size: 12, weight: 700, fill: C.ink })
    b.text(782 + 96, 816 + i * 38, s, { size: 11, fill: C.sub })
  })
  b.wtext(730, 930, '三机制共同清除自身反应性未成熟 B 细胞，交出多样性丰富且自身耐受的库。', { size: 10.5, fill: C.mute, maxW: 560, lh: 15 })
}

export default scene({
  title: '抗体多样性生成机制：V(D)J 重排、组合与连接多样性',
  subtitle: '重链 V 约 65、D 约 27、J 约 6 个片段，轻链仅 V 与 J（κ：V40·J5 约 200 种；λ：V30·J4 约 120 种，合计约 320 种）；RAG 识别 RSS 并遵循 12/23 规则；组合多样性约贡献 300 万量级，N/P 核苷酸与末端修剪的连接多样性使理论库容达 10⁹–10¹¹；等位排斥与同型排斥保证一克隆一受体，中枢经受体编辑、克隆删除与诱导无能清除自身反应性 B 细胞',
  draw,
})
