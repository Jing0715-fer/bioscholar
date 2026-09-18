// mb ch10-s2 高通量测序与基因组注释（39-c 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、NGS 共性框架（上，全宽） ============
  b.panel(30, 132, 1340, 300, { title: '一、NGS 共性框架：文库 → 簇扩增 → 边合成边测序 → 数据分析' })
  const bx = [52, 277, 502, 727, 952, 1177]
  const by = 176, bw = 200, bh = 118
  const heads = ['① DNA 打断', '② 末端修复 + 加 A', '③ 连接接头', '④ 桥式 PCR 簇扩增', '⑤ 边合成边测序', '⑥ 数据分析']
  const subs = ['样品基因组 DNA 片段化', '平端化并加 A 突出', 'P5 / P7 · 索引 · 结合序列', '玻片表面克隆化成簇', '双端测序 2×150 bp', '回贴 · 定量 / 装配']
  heads.forEach((h, i) => {
    b.rect(bx[i], by, bw, bh, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 9 })
    b.ctext(bx[i] + bw / 2, by + 24, h, { size: 13.5, weight: 700, fill: C.ink })
    b.ctext(bx[i] + bw / 2, by + 108, subs[i], { size: 10.5, fill: C.mute })
    if (i < 5) b.arrow(bx[i] + bw + 3, by + 60, bx[i + 1] - 3, by + 60, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  // ① 打断
  b.dna(bx[0] + 22, by + 62, 156, { amp: 8, period: 44, sw: 2.4 })
  b.line(bx[0] + 80, by + 42, bx[0] + 80, by + 84, { stroke: C.enz, sw: 1.8, dash: '4 3' })
  b.line(bx[0] + 126, by + 42, bx[0] + 126, by + 84, { stroke: C.enz, sw: 1.8, dash: '4 3' })
  // ② 加 A
  b.rect(bx[1] + 40, by + 58, 120, 14, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(bx[1] + 32, by + 50, 'A', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(bx[1] + 168, by + 50, 'A', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(bx[1] + 100, by + 44, '加 A 突出端', { size: 10, fill: C.mute })
  // ③ 接头
  b.rect(bx[2] + 64, by + 60, 72, 14, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.rect(bx[2] + 44, by + 60, 18, 14, { fill: C.enzL, stroke: C.enz, sw: 1.5 })
  b.rect(bx[2] + 138, by + 60, 18, 14, { fill: C.enzL, stroke: C.enz, sw: 1.5 })
  b.ctext(bx[2] + 53, by + 44, 'P5', { size: 9.5, weight: 700, fill: C.enzD })
  b.ctext(bx[2] + 147, by + 44, 'P7', { size: 9.5, weight: 700, fill: C.enzD })
  b.ctext(bx[2] + 100, by + 44, '索引条码', { size: 9.5, fill: C.mute })
  b.rect(bx[2] + 92, by + 62, 6, 10, { fill: C.warn })
  b.rect(bx[2] + 102, by + 62, 6, 10, { fill: C.ok })
  // ④ flowcell 簇
  b.rect(bx[3] + 30, by + 36, 140, 66, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.line(bx[3] + 30, by + 69, bx[3] + 170, by + 69, { stroke: C.acc, sw: 1, opacity: 0.5 })
  for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) {
    b.circle(bx[3] + 42 + c * 13 + (r % 2) * 6, by + 47 + r * 22, 3.4, { fill: C.accD })
  }
  // ⑤ 合成测序
  const baseC = [C.dna, C.rna, C.pro, C.enz, C.ok, C.acc, C.dna, C.rna]
  baseC.forEach((c, i) => b.rect(bx[4] + 46 + i * 14, by + 56, 12, 12, { fill: c, rx: 2 }))
  b.path(`M${bx[4] + 92},${by + 30} a16,16 0 1 1 -16,-16`, { stroke: C.sub, sw: 2, fill: 'none', marker: 'ink' })
  b.ctext(bx[4] + 124, by + 42, '循环', { size: 9.5, fill: C.mute })
  b.ctext(bx[4] + 100, by + 86, '模板 · 荧光 dNTP', { size: 9.5, fill: C.mute })
  // ⑥ 数据
  b.rect(bx[5] + 34, by + 36, 132, 66, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 6 })
  const readLens = [96, 72, 110, 60, 88, 100, 54]
  readLens.forEach((w, i) => b.rect(bx[5] + 46, by + 44 + i * 8, w, 5, { fill: C.acc, opacity: 0.75, rx: 2 }))
  // 应用与要点
  b.text(52, 326, '应用形态：WGS 重测序 · WES（探针捕获约 45 Mb 外显子，性价比高，临床遗传病筛查主力）· 靶向 panel · 转录组 · 甲基化组 · 宏基因组', { size: 12, fill: C.sub })
  b.text(52, 356, '索引条码（multiplexing）：数十至数百样品同槽混合测序', { size: 12, fill: C.mute })
  b.text(52, 386, '第二代测序共享「文库 → 扩增 → 边合成边测序 → 数据分析」流程，实现细节各异（详见第 9 章）', { size: 12, fill: C.mute })

  // ============ 二、装配与评估（左下） ============
  b.panel(30, 452, 660, 508, { title: '二、基因组装配：de Bruijn 图与质量评估' })
  // —— de Bruijn ——
  b.text(56, 500, 'de Bruijn 图：读段 → k-mer → 图路径', { size: 13.5, weight: 700, fill: C.ink })
  const readC = [C.dna, C.acc, C.rna, C.pro]
  for (let i = 0; i < 4; i++) {
    b.rect(56, 516 + i * 24, 110, 11, { fill: readC[i], opacity: 0.75, rx: 3 })
    for (let j = 0; j < 3; j++) b.rect(214 + j * 34, 516 + i * 24, 30, 11, { fill: readC[i], opacity: 0.45, rx: 3 })
  }
  b.ctext(111, 626, '读段', { size: 10.5, fill: C.mute })
  b.ctext(263, 626, 'k-mer 打碎', { size: 10.5, fill: C.mute })
  b.arrow(172, 560, 200, 560, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(336, 560, 364, 560, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 图
  const nd: [number, number][] = [[395, 540], [455, 575], [515, 528], [575, 570], [635, 535]]
  b.line(406, 546, 444, 569, { stroke: C.dna, sw: 4 })
  b.line(466, 569, 504, 534, { stroke: C.dna, sw: 4 })
  b.line(466, 581, 564, 581 - 14, { stroke: C.faint, sw: 1.6 })
  b.line(496, 581 - 14 + 0, 564, 563, { stroke: C.faint, sw: 1.6 })
  b.line(524, 534, 624, 541, { stroke: C.dna, sw: 4 })
  b.line(526, 540, 563, 563, { stroke: C.faint, sw: 1.6 })
  b.line(586, 563, 624, 544, { stroke: C.faint, sw: 1.6 })
  nd.forEach(([x, y]) => b.circle(x, y, 11, { fill: '#ffffff', stroke: C.sub, sw: 1.8 }))
  b.ctext(515, 618, '加粗路径＝contig（拼接序列）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(515, 636, '节点＝k-1 重叠；分叉＝重复 / 杂合', { size: 10, fill: C.mute })
  // —— N50 ——
  b.text(56, 700, 'N50：装配质量尺', { size: 13.5, weight: 700, fill: C.ink })
  b.tag(560, 704, 'BUSCO：单拷贝直系同源基因完整度', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.ok, pad: 8 })
  const nb = [180, 120, 90, 70, 50, 36, 24]
  let nx = 56
  nb.forEach((w, i) => {
    b.rect(nx, 724, w - 4, 20, { fill: i === 1 ? C.enzL : C.dnaL, stroke: i === 1 ? C.enz : C.dna, sw: 1.4, rx: 3 })
    if (i === 1) b.ctext(nx + (w - 4) / 2, 738, 'N50', { size: 10.5, weight: 700, fill: C.enzD })
    nx += w
  })
  b.line(341, 716, 341, 772, { stroke: C.sub, sw: 1.4, dash: '5 4' })
  b.ctext(341, 790, '总长的 50%', { size: 10.5, fill: C.sub })
  b.text(56, 778, '将 contig 按长度累加至基因组一半时的 contig 长度', { size: 11, fill: C.mute })
  // —— 长读长 ——
  b.text(56, 826, '长读长 + Hi-C 辅助：跨越重复', { size: 13.5, weight: 700, fill: C.ink })
  // 重复区
  for (let i = 0; i < 6; i++) b.rect(320 + i * 24, 850, 20, 10, { fill: C.warnL, stroke: '#b45309', sw: 1 })
  b.ctext(388, 842, '重复区', { size: 10.5, fill: C.rnaD })
  for (let i = 0; i < 7; i++) b.rect(70 + i * 34, 852, 24, 9, { fill: C.acc, opacity: 0.7, rx: 2 })
  for (let i = 0; i < 7; i++) b.rect(470 + i * 30, 852, 22, 9, { fill: C.acc, opacity: 0.7, rx: 2 })
  b.text(70, 884, '短读长：重复区内无法比对', { size: 10.5, fill: C.mute })
  // 长读长读段先画，重复区标记叠在其上（可见“跨越”）
  b.rect(70, 908, 590, 10, { fill: C.dna, opacity: 0.85, rx: 3 })
  for (let i = 0; i < 6; i++) b.rect(320 + i * 24, 906, 20, 12, { fill: C.warnL, stroke: '#b45309', sw: 1.2 })
  b.text(70, 936, '长读长（PacBio HiFi · ONT）+ Hi-C → 染色体级乃至端到端装配', { size: 11.5, weight: 700, fill: C.dnaD })

  // ============ 三、注释流水线（右下） ============
  b.panel(710, 452, 660, 508, { title: '三、基因组注释：赋予序列生物学意义的五步流水线' })
  const steps: [number, number, string, string[]][] = [
    [500, 46, '① 重复序列屏蔽', ['RepeatMasker 屏蔽重复，避免假基因预测']],
    [556, 96, '② 基因预测', [
      '原核：扫描 ORF（起止密码子 + RBS）+ 同源比对',
      '真核：ab initio 隐马尔可夫模型（GENSCAN / AUGUSTUS 捕捉剪接位点与编码区统计特征）+ RNA-seq / 同源证据融合（MAKER）',
    ]],
    [662, 46, '③ 非编码 RNA 注释', ['tRNAscan-SE 等注释 tRNA / rRNA / 其他 ncRNA']],
    [718, 64, '④ 功能注释', ['GO 三轴（分子功能 · 生物过程 · 细胞组分）· Pfam / InterPro 结构域 · KEGG 通路 · COG 直系同源簇传递功能']],
    [792, 46, '⑤ 人工策展与证据分级', ['RefSeq · UniProt 数据库']],
  ]
  steps.forEach(([y, h, t, lines]) => {
    b.rect(726, y, 628, h, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 8 })
    b.text(742, y + 26, t, { size: 13, weight: 700, fill: C.ink })
    let ly = y + 48
    for (const s of lines) {
      ly = b.wtext(742, ly, s, { size: 11, fill: C.sub, maxW: 596, lh: 17 })
    }
  })
  ;[546, 652, 708, 782].forEach(y => b.arrow(1040, y, 1040, y + 10, { stroke: C.sub, sw: 2, marker: 'ink' }))
  // 警示
  b.rect(726, 852, 306, 92, { fill: C.warnL, stroke: '#b45309', sw: 1.4, rx: 9, fillOp: 0.45 })
  b.text(742, 876, '警示一：基因数 ≪ 蛋白数', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(742, 900, '选择性剪接 · RNA 编辑与翻译后修饰大幅扩展蛋白多样性', { size: 11, fill: C.sub, maxW: 274, lh: 17 })
  b.rect(1046, 852, 308, 92, { fill: C.warnL, stroke: '#b45309', sw: 1.4, rx: 9, fillOp: 0.45 })
  b.text(1062, 876, '警示二：序列 ≠ 功能', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(1062, 900, '大量基因的功能仍为推测——注释是持续更新的假设', { size: 11, fill: C.sub, maxW: 276, lh: 17 })
}

export default scene({
  title: '高通量测序与基因组注释',
  subtitle: 'NGS 共性框架（文库 → 簇扩增 → 边合成边测序）——de Bruijn 图装配 · N50 / BUSCO 评估 · 五步注释流水线',
  draw,
})
