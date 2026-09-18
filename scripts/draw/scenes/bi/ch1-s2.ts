// bi ch1-s2 生物学数据的规模与挑战（39-i 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、成本俯冲曲线 ============
  b.panel(30, 132, 1340, 430, { title: '一、全基因组测序成本：四个数量级的俯冲' })
  b.axis(190, 505, 840, 300, {
    xlabel: '年份',
    title: 'NHGRI 统计口径：单基因组成本（美元 · 对数轴）',
    xticks: [[0, '2001'], [0.26, '2007'], [0.52, '2013'], [0.78, '2019'], [1, '2024']],
    yticks: [[0, '$10²'], [0.333, '$10⁴'], [0.667, '$10⁶'], [1, '$10⁸']],
  })
  // 摩尔定律口径外推（对照虚线）
  b.curve(190, 505, 840, 300, [[0, 1], [1, 0.36]], { stroke: C.faint, sw: 2.2, dash: '7 6' })
  b.text(560, 262, '摩尔定律口径外推（每 18–24 个月翻一番）', { size: 11.5, fill: C.mute })
  // 测序成本主曲线（对数比例真实形状）
  b.curve(190, 505, 840, 300, [
    [0, 1], [0.09, 0.94], [0.17, 0.87], [0.26, 0.79], [0.33, 0.60], [0.40, 0.44],
    [0.48, 0.32], [0.55, 0.24], [0.61, 0.167], [0.70, 0.145], [0.78, 0.125], [0.90, 0.10], [1, 0.08],
  ], { stroke: C.dna, sw: 3.4, smooth: true })
  // 三个锚点（数字取自本节）
  b.circle(190, 205, 5.5, { fill: C.bad })
  b.text(216, 210, '2001：约 1 亿美元', { size: 12.5, weight: 700, fill: C.bad })
  b.circle(702, 455, 5.5, { fill: C.bad })
  b.etext(688, 487, '2015 前后 ≈ $1000', { size: 12.5, weight: 700, fill: C.bad })
  b.circle(1030, 481, 5.5, { fill: C.bad })
  b.ctext(950, 450, '2020s：数百美元', { size: 12.5, weight: 700, fill: C.bad })
  // NGS 转折注释
  b.tag(600, 225, '2005 年前后：高通量测序把「一次读一条」改为「一次读百万至数十亿条」', {
    fill: C.rnaL, stroke: C.rna, size: 12, weight: 600, tfill: C.rnaD, pad: 10,
  })
  b.arrow(560, 246, 460, 290, { stroke: C.rna, sw: 1.6, marker: 'rna', dash: '4 4' })
  // 降幅标注
  b.wtext(920, 330, '累计降幅超过四个数量级', { size: 12, weight: 700, fill: C.dnaD, maxW: 116, lh: 17, anchor: 'middle' })
  // 右栏要点
  b.wtext(1070, 230, '· 测序数据总量倍增周期约 1–1.5 年，快于或持平摩尔定律口径（18–24 个月）', { size: 12, fill: C.sub, maxW: 276, lh: 17 })
  b.wtext(1070, 320, '· 存储带宽、检索与传输相对滞后——存储与检索成为结构性瓶颈', { size: 12, fill: C.sub, maxW: 276, lh: 17 })
  b.wtext(1070, 396, '· 1977 年 Sanger 双脱氧链终止法确立第一代测序；HGP 动员六国十余家中心，历时约 13 年、公共投入约 27 亿美元', { size: 12, fill: C.sub, maxW: 276, lh: 17 })

  // ============ 二、单样本体量 ============
  b.panel(30, 576, 660, 384, { title: '二、单个样本的体量：常见口径与易错点' })
  b.text(60, 642, '人类单倍体基因组', { size: 13.5, weight: 700, fill: C.dnaD })
  b.rect(60, 654, 20, 24, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.text(94, 671, '3.1 Gbp ≈ 31 亿碱基对（「3 亿碱基」是常见量级口误）', { size: 12, fill: C.sub })
  b.arrow(70, 690, 70, 742, { stroke: C.mute, sw: 2, marker: 'mute', dash: '5 4' })
  b.text(84, 720, '× 30 覆盖', { size: 12.5, weight: 700, fill: C.mute })
  b.rect(60, 750, 558, 24, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.text(74, 767, '30× WGS 原始读段（FASTQ）：约 90 Gbp', { size: 12, weight: 700, fill: C.accD })
  b.text(60, 800, '须与「基因组大小」分开表述——数据量 = 覆盖倍数 × 基因组大小', { size: 11.5, fill: C.mute })
  b.rect(60, 828, 620, 24, { fill: 'none', stroke: C.bad, sw: 1.8, dash: '7 5' })
  b.text(74, 845, '比对与索引后的存储占用：常达百吉字节量级（BAM + 索引）', { size: 12, weight: 700, fill: C.bad })
  b.wtext(60, 890, '口径提醒：Gbp 数的是碱基、GB 数的是字节，两个「G」不要混。三十倍覆盖的单样本从 FASTQ 到 BAM 的全流程存储常达百 GB 量级，大队列使存储与检索成为结构性瓶颈。', { size: 11.5, fill: C.sub, maxW: 590, lh: 17 })

  // ============ 三、4V ============
  b.panel(710, 576, 660, 384, { title: '三、大数据 4V 在生物学中的体现' })
  b.table(740, 648, 600, {
    headers: ['4V', '生物学体现'],
    colW: [150, 450],
    rowH: 54,
    fontSize: 12.5,
    rows: [
      ['体量 Volume', '序列档案与大队列的规模（单个 30× 全基因组原始数据约 90 Gbp）'],
      ['速度 Velocity', 'INSDC 三库每日交换；高通量产出持续涌入'],
      ['异质 Variety', '序列、结构、表达谱、表型等多模态数据的异质性'],
      ['真实 Veracity', '测序错误与批次效应带来的真实性问题'],
    ],
  })
  b.wtext(740, 934, '人类基因组数据具可识别性：以 dbGaP / EGA 等受控访问仓库管理「隐私 vs 共享」的张力。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '生物学数据的规模与挑战：成本俯冲、口径陷阱与 4V',
  subtitle: '高通量测序使全基因组测序成本自 2001 年约 1 亿美元降至数百美元区间（降幅超过四个数量级）；数据倍增周期约 1–1.5 年快于摩尔定律；单倍体基因组 3.1 Gbp 与 30× 约 90 Gbp 原始数据须分开表述',
  draw,
})
