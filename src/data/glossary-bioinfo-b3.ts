// ============================================================
// BioScholar 生物信息学术语词典 - 批次 B3（第 9–10 章）
// 5 条（g-220 ~ g-224），subjectId 均为 bioinformatics
// 类别分布：转录组学 2 / 富集分析 1 / 蛋白质组学 1 / 单细胞组学 1
// 依据：Mount《Bioinformatics》、樊龙江《生物信息学》及第 9–10 章扩写正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：bioinformatics 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const BIOINFORMATICS = 'bioinformatics' as unknown as GlossaryTerm['subjectId']

export const bioinfoGlossaryB3: GlossaryTerm[] = [
  // ---------- 转录组学（2 条） ----------
  {
    id: 'g-220',
    term: 'TPM',
    english: 'transcripts per million',
    abbreviation: 'TPM',
    subjectId: BIOINFORMATICS,
    category: '转录组学',
    definition:
      'RNA-seq 转录本丰度的归一化指标，由 Wagner 等人于 2012 年提出以纠正 RPKM/FPKM 跨样本不可加的问题。计算顺序是先按基因长度把计数折算成每千碱基的读段密度，再把每样本总量缩放到恰好一百万，因此各样本的 TPM 总和恒为百万，「某基因占转录组的份额」得以在样本间直接比较——这正是比较细胞类型构成变化时的正确语言。与先深度后长度的 FPKM 只差归一顺序，后果却本质：FPKM 的样本内总和随样本漂移、跨样本不可加。TPM 隐含「总 RNA 产出恒定」的假设，全局性转录重编程时会被误导；差异检验从不用 TPM，而以原始整数计数配合尺寸因子。',
  },
  {
    id: 'g-221',
    term: '负二项分布',
    english: 'negative binomial distribution',
    subjectId: BIOINFORMATICS,
    category: '转录组学',
    definition:
      'RNA-seq 差异表达统计的骨架分布，可视为泊松分布与伽马分布的混合——在泊松均值之上再引入一层随机波动，方差表达为 μ + αμ²（μ 为期望计数，α 为离散参数），恰好吸收生物学重复间的过度离散。技术重复的计数近似泊松（方差等于均值），而个体差异、微环境与采样时相的漂移使生物学重复的方差远超均值、且随均值平方增长；无视过度离散将系统性低估方差、p 值虚小、假阳性泛滥。DESeq2 与 edgeR 共以此为地基，并以经验贝叶斯收缩把逐基因的 α 估计向全基因组「均值-离散」趋势线稳定，样本少时借上千基因的集体信息立住每个基因的方差估计。',
  },
  // ---------- 富集分析（1 条） ----------
  {
    id: 'g-222',
    term: 'GSEA',
    english: 'Gene Set Enrichment Analysis',
    abbreviation: 'GSEA',
    subjectId: BIOINFORMATICS,
    category: '富集分析',
    definition:
      '由 Subramanian 等人于 2005 年提出的基因集富集方法。它不设人为阈值，把全部基因按与表型的关联强度（如 log₂FC 或相关系数）排成完整序列，沿排序做随机游走式累积打分——遇集内基因加分、集外基因减分——累积量的极值即富集分 ES；把基因标签随机置换重排上千次得零分布与名义 p 值，再按集规模归一为 NES 以便跨集比较。其独到敏感在于捕捉「许多温和变化的协同位移」：单个基因都不显著、整条通路成员却齐刷刷向一端挪动。领先集给出对富集贡献最大的核心成员；官方基因集总库 MSigDB 与之配套。与超几何检验的 ORA 相比，它保留排序信息、不依赖阈值截取与背景名单口径。',
  },
  // ---------- 蛋白质组学（1 条） ----------
  {
    id: 'g-223',
    term: '数据非依赖采集',
    english: 'data-independent acquisition',
    abbreviation: 'DIA',
    subjectId: BIOINFORMATICS,
    category: '蛋白质组学',
    definition:
      '质谱采集模式的一种，与数据依赖采集（DDA）相对：放弃实时挑选母离子，把整个质量范围划成固定或可变宽度的窗口（如每 25 Da 一档），逐窗口依次碎裂、循环往复，每张二级谱完整记录窗口内全部离子的碎片；SWATH 是其在 QTOF 平台上的成名别名（Gillet 等人 2012 年系统化）。三大优点：无随机遗漏（低丰度肽不靠「抢名额」生存）、数据可回溯（换数据库、追新修饰可重搜旧数据）、定量连续性好，故成为大队列临床定量的默认选项。代价是二级谱天然嵌合（多肽共存），需以 DDA 实验谱库或深度学习预测谱库（Prosit 一脉）配合专门算法解卷积；DIA-NN、Spectronaut 为代表工具，发现型鉴定仍由 DDA 担纲。',
  },
  // ---------- 单细胞组学（1 条） ----------
  {
    id: 'g-224',
    term: '单细胞 RNA 测序',
    english: 'single-cell RNA sequencing',
    abbreviation: 'scRNA-seq',
    subjectId: BIOINFORMATICS,
    category: '单细胞组学',
    definition:
      '把转录组测量单位降到单个细胞的技术，Tang 等人 2009 年完成首例，2015 年 Drop-seq 与 10x 液滴技术把通量推至一次实验数万细胞。10x 平台以油包水液滴封装「一个细胞加一个凝胶珠」，珠上引物由细胞条形码、UMI 与 poly(dT) 尾三段构成，使每条 cDNA 自带身份信息；UMI 去重把计数口径从读段校正为分子、彻底剥离 PCR 扩增偏差。它使「细胞比例变化」与「细胞自身表达变化」解耦，照亮干细胞龛、耐药亚克隆等稀有细胞群；分析以质控、归一化、高变基因、PCA、UMAP、图聚类与注释为流水线，配拟时序与 RNA 速度研究分化轨迹；统计检验须回到伪 bulk 口径——细胞不是独立重复，供体样本才是。',
  },
]
