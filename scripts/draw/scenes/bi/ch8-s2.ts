// bi ch8-s2 基因组组装（39-i 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、de Bruijn 图 ============
  b.panel(30, 132, 660, 420, { title: '一、de Bruijn 图：把组装化为多项式可解的欧拉路径' })
  b.tag(130, 180, '测序读段', { fill: C.accL, stroke: C.acc, size: 12, weight: 600, tfill: C.accD, pad: 9 })
  b.arrow(176, 180, 292, 180, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.tag(350, 180, '切分 k-mer', { fill: C.accL, stroke: C.acc, size: 12, weight: 600, tfill: C.accD, pad: 9 })
  b.arrow(404, 180, 480, 180, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.tag(560, 180, '建 de Bruijn 图', { fill: C.accL, stroke: C.acc, size: 12, weight: 600, tfill: C.accD, pad: 9 })
  b.text(60, 236, '节点 =（k−1）-mer · 有向边 = k-mer', { size: 12, weight: 600, fill: C.sub })
  const nodes: Array<[number, string]> = [[110, 'AT'], [200, 'TG'], [290, 'GG'], [380, 'GC'], [470, 'CA']]
  const edges: Array<[number, string]> = [[155, 'ATG'], [245, 'TGG'], [335, 'GGC'], [425, 'GCA']]
  edges.forEach(([x, s]) => b.ctext(x, 274, s, { size: 10, fill: C.mute }))
  nodes.forEach(([x, s]) => {
    b.circle(x, 300, 26, { fill: C.accL, stroke: C.acc, sw: 2 })
    b.ctext(x, 304, s, { size: 11, weight: 700, fill: C.accD })
  })
  for (let i = 0; i < 4; i++) b.arrow(nodes[i][0] + 32, 300, nodes[i + 1][0] - 32, 300, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(60, 356, '遍历每条边恰一次的欧拉路径即重构目标序列——把指数级的拼图问题化为多项式可解（de Bruijn 1946；Idury–Waterman 1995 引入测序；Pevzner 等 2001 用于片段组装）。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.rect(60, 396, 600, 62, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.ctext(360, 420, 'k-mer 覆盖度 ≈ 读覆盖度 ×（读长 − k + 1）÷ 读长', { size: 13.5, weight: 700, fill: C.ink })
  b.ctext(360, 446, '读覆盖 30× · 读长 150 bp · k = 51 → k-mer 覆盖约 20×', { size: 12, weight: 600, fill: C.accD })
  b.wtext(60, 484, '错误 k-mer 覆盖度极低，可按阈值剪除；k 的选取在「分辨重复」与「覆盖密度」之间权衡。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  const fail = (x: number, s: string) => {
    b.rect(x, 508, 190, 38, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 7, fillOp: 0.5 })
    b.ctext(x + 95, 532, s, { size: 11.5, weight: 700, fill: C.bad })
  }
  fail(60, '测序错误 → 假节点')
  fail(270, '杂合变异 → 气泡')
  fail(480, '重复 > k → 分叉·碎片')

  // ============ 二、重复序列 ============
  b.panel(710, 132, 660, 420, { title: '二、重复序列的困境：人类基因组约半数为重复衍生物' })
  b.rect(740, 196, 600, 46, { fill: C.bg, stroke: C.sub, sw: 1.6 })
  b.rect(740, 196, 120, 46, { fill: C.dna })
  b.rect(860, 196, 60, 46, { fill: C.rna })
  b.rect(920, 196, 120, 46, { fill: C.enz })
  b.rect(1040, 196, 300, 46, { fill: C.panelB })
  b.ctext(800, 224, 'LINE', { size: 11.5, weight: 700, fill: '#ffffff' })
  b.ctext(890, 224, 'SINE', { size: 10, weight: 700, fill: '#ffffff' })
  b.ctext(980, 224, 'LTR＋DNA', { size: 10.5, weight: 700, fill: '#ffffff' })
  b.ctext(1190, 224, '非重复（约半数）', { size: 12, weight: 700, fill: C.sub })
  b.line(800, 242, 800, 258, { stroke: C.faint, sw: 1 })
  b.line(890, 242, 890, 300, { stroke: C.faint, sw: 1, dash: '3 3' })
  b.line(990, 242, 990, 258, { stroke: C.faint, sw: 1 })
  b.line(1190, 242, 1190, 258, { stroke: C.faint, sw: 1 })
  b.ctext(800, 276, 'LINE ≈ 两成', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(800, 292, 'LINE-1 全长可达 6 kb', { size: 10.5, fill: C.mute })
  b.ctext(990, 276, 'LTR 反转座子＋DNA 转座子', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(890, 318, 'SINE ≈ 一成余', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(890, 334, '以 Alu 为代表', { size: 10.5, fill: C.mute })
  b.text(740, 380, '短读为什么栽在 Alu 上：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(740, 392, 150, 18, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.text(900, 406, '读段 150 bp', { size: 11.5, weight: 600, fill: C.accD })
  b.rect(740, 424, 300, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.text(1060, 438, 'Alu 元件 ≈ 300 bp', { size: 11.5, weight: 600, fill: C.dnaD })
  b.wtext(740, 470, 'Alu 长约 300 bp 而拷贝逾百万，恰在短读分辨力之外——图上最常见的「交通堵塞点」；长于 k 的重复造成分叉与碎片化，杂合变异制造气泡。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、OLC ============
  b.panel(30, 576, 660, 404, { title: '三、OLC：重叠–布局–共识（长读时代的另一条路）' })
  const step = (y: number, t: string, s: string) => {
    b.rect(60, y, 590, 66, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.55 })
    b.text(80, y + 28, t, { size: 13.5, weight: 700, fill: C.accD })
    b.text(80, y + 52, s, { size: 11.5, fill: C.sub })
  }
  step(632, '① 重叠 Overlap', '读段两两比较，找出所有可信重叠')
  step(716, '② 布局 Layout', '按重叠关系排列读段，构成重叠群骨架')
  step(800, '③ 共识 Consensus', '逐位置推出一致碱基序列')
  b.arrow(355, 698, 355, 716, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(355, 782, 355, 800, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(60, 892, 'OLC 在 Sanger 时代即成熟、长读时代复兴：Canu / Flye / Shasta 以 minimizer 索引（Roberts 等 2004）预筛候选重叠——只保留每个窗口内字典序最小的 k-mer 作锚点，把两两比较压缩到可行规模。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 四、N50 ============
  b.panel(710, 576, 660, 404, { title: '四、N50：连续性统计量与组装层级' })
  b.table(740, 632, 580, {
    headers: ['重叠群', '长度 kb', '累计 kb', '触达 250 kb？'],
    colW: [130, 140, 140, 170],
    rowH: 38,
    fontSize: 12.5,
    rows: [
      ['A', '150', '150', '否'],
      ['B', '120', '270', '✓ N50 = 120'],
      ['C', '80', '350', '—'],
      ['其余', '…', '500（总长）', '—'],
    ],
  })
  b.text(740, 862, '组装分层', { size: 12, weight: 700, fill: C.ink })
  b.tag(872, 856, '重叠群 contig', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 600, tfill: C.dnaD, pad: 9 })
  b.arrow(950, 856, 1000, 856, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(1090, 856, '支架 scaffold（N 表间隙）', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 600, tfill: C.rnaD, pad: 9 })
  b.arrow(1200, 856, 1240, 856, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.tag(1305, 856, '染色体级', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 600, tfill: C.proD, pad: 9 })
  b.wtext(740, 894, 'N50：重叠群按长度降序累加，达到组装总长一半（此处 250 kb）时所在重叠群的长度（120 kb）；L50 记所需条数（2 条）；NG50 改以参考基因组总长为门槛。须与最长重叠群、总数与错误断点合看——QUAST 汇总有参考与无参考两类评估。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '基因组组装：de Bruijn 图的欧拉路径、重复困境与 N50 标尺',
  subtitle: 'de Bruijn 图把读段切为 k-mer 建图，组装化为多项式可解的欧拉路径；k-mer 覆盖 ≈ 读覆盖 ×（读长 − k + 1）/ 读长，30×·150 bp·k=51 时约 20×；人类基因组约半数为重复衍生物（LINE 约两成、Alu 约 300 bp 拷贝逾百万）；OLC 以重叠–布局–共识三步复兴于长读；N50 为降序累加达总长一半时所在重叠群长度，与 L50、NG50 及 QUAST 评估合看',
  draw,
})
