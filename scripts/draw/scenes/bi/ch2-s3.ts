// bi ch2-s3 数据检索系统（39-i 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Entrez 枢纽 ============
  b.panel(30, 132, 780, 500, { title: '一、Entrez：一次查询，横跨数十库' })
  b.ctext(390, 178, '记录间链接网——1991 年起的统一检索体验', { size: 12, weight: 700, fill: C.mute })
  // 卫星库
  const sats: Array<[number, number, string]> = [
    [120, 214, 'PubMed 文献'],
    [370, 200, 'GenBank 核酸'],
    [620, 262, '蛋白'],
    [620, 452, '结构'],
    [370, 528, '基因 · Taxonomy'],
    [120, 512, 'PMC 全文'],
  ]
  const hub = [390, 372]
  sats.forEach(([x, y, t]) => {
    b.line(hub[0], hub[1], x + 78, y + 25, { stroke: C.faint, sw: 1.6 })
  })
  sats.forEach(([x, y, t]) => {
    b.rect(x, y, 156, 50, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8, fillOp: 0.7 })
    b.ctext(x + 78, y + 30, t, { size: 12.5, weight: 700, fill: C.accD })
  })
  b.circle(hub[0], hub[1], 66, { fill: '#ffffff', stroke: C.acc, sw: 3 })
  b.ctext(hub[0], hub[1] - 8, 'Entrez', { size: 19, weight: 700, fill: C.accD })
  b.ctext(hub[0], hub[1] + 20, 'NCBI', { size: 11.5, fill: C.mute })
  b.rect(560, 530, 212, 68, { fill: C.enzL, stroke: C.enz, sw: 1.5, rx: 8, fillOp: 0.6 })
  b.ctext(666, 554, 'E-utilities', { size: 13, weight: 700, fill: C.enzD })
  b.ctext(666, 578, '程序化批量取用', { size: 11, fill: C.sub })
  b.wtext(70, 580, 'EBI Search 是 EBI 生态的对应门户；布尔算符与字段限定是控制检索噪声的第一道闸门。', { size: 11, fill: C.sub, maxW: 300, lh: 15 })

  // ============ 二、SRA 四层 + FASTQ ============
  b.panel(830, 132, 540, 500, { title: '二、读段档案 SRA / ENA 与 FASTQ' })
  b.stairs(862, 210, 480, 250, ['Study（研究）', 'Sample（样本）', 'Experiment（实验）', 'Run（测序运行）'], { size: 11.5 })
  b.ctext(1102, 500, '四层组织：一个 Study 含多个 Sample，', { size: 11.5, fill: C.sub })
  b.ctext(1102, 520, '每个 Experiment 对应一个 Run 的读段产出', { size: 11.5, fill: C.sub })
  // FASTQ mock
  b.rect(862, 545, 480, 66, { fill: '#ffffff', stroke: C.sub, sw: 1.4, rx: 4 })
  b.text(874, 566, '@SRR000001.1（读段标识）', { size: 11, weight: 700, fill: C.dnaD })
  b.text(874, 584, 'ATCGATCGAT…（碱基序列）　+　!**+%%!!…（质量行：Phred 值编码碱基可信度）', { size: 10.5, fill: C.sub })

  // ============ 三、检索质量 ============
  b.panel(30, 656, 1340, 304, { title: '三、检索质量的三项工程细节' })
  const cols: Array<[number, string, string, Array<string>]> = [
    [60, '布尔语法与字段限定', C.acc, [
      'AND / OR / NOT 组合 + 字段限定，',
      '先收窄再迭代，避免百万条噪声。',
      '示例：homo[organism] AND',
      'brca1[Gene Name]',
    ]],
    [500, '开放档案 vs 受控访问', C.bad, [
      '人类隐私数据存放于 dbGaP / EGA',
      '等受控访问仓库，而非开放档案——',
      '权限审批与使用承诺先行。',
    ]],
    [940, '取数自检三元组', C.dna, [
      '记录「检索式 + 日期 + 数据库版本」',
      '三元组，结果才可复现；',
      '优先结构化格式导出。',
    ]],
  ]
  cols.forEach(([x, t, st, lines]) => {
    b.rect(x, 714, 400, 190, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 10 })
    b.tag(x + 200, 748, t, { fill: C.panelB, stroke: st, size: 13, weight: 700, tfill: st, pad: 10 })
    lines.forEach((s, i) => b.text(x + 22, 792 + i * 24, s, { size: 11.5, fill: C.sub }))
  })
}

export default scene({
  title: '数据检索系统：Entrez 枢纽、SRA 四层与 FASTQ',
  subtitle: 'Entrez 自 1991 年起统一索引 NCBI 数十库并提供记录间链接网，E-utilities 支持程序化批量取用；SRA/ENA 按 Study→Sample→Experiment→Run 四层组织读段，FASTQ 质量行以 Phred 值编码碱基可信度；取数应记录检索式、日期与数据库版本三元组',
  draw,
})
