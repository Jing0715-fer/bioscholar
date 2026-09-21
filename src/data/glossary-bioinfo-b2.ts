// ============================================================
// BioScholar 生物信息学术语词典 - 批次 B2（第 7–8 章）
// 5 条（g-215 ~ g-219），subjectId 均为 bioinformatics
// 类别分布：结构预测 2 / 基因组组装 2 / 比较基因组 1
// 依据：Pevzner《Bioinformatics Algorithms》、Mount《Bioinformatics》、
// 樊龙江《生物信息学》及第 7–8 章扩写正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：bioinformatics 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const BIOINFORMATICS = 'bioinformatics' as unknown as GlossaryTerm['subjectId']

export const bioinfoGlossaryB2: GlossaryTerm[] = [
  // ---------- 结构预测（2 条） ----------
  {
    id: 'g-215',
    term: '同源建模',
    english: 'homology modeling',
    subjectId: BIOINFORMATICS,
    category: '结构预测',
    definition:
      '亦称比较建模，基于「结构比序列更保守」的经验法则，为目标序列借用已解析结构的同源蛋白作模板搭建三维模型的方法。1969 年 Browne 等人以溶菌酶结构手工搭建 α-乳清蛋白模型开山，1993 年 Sali 与 Blundell 的 MODELLER 使其自动化。流程分模板识别、序列比对、模型搭建（侧链按旋转异构体库安装、环区采样）与质量评估四步；可比对区域序列同一性高于 40% 时主链误差约 1 Å、建模近乎照抄，低于 30% 进入暮区、比对与结构相似性均不可靠，须以覆盖率与同一性两轴合读模型的可用范围。',
  },
  {
    id: 'g-216',
    term: 'GDT-TS',
    english: 'Global Distance Test – Total Score',
    abbreviation: 'GDT-TS',
    subjectId: BIOINFORMATICS,
    category: '结构预测',
    definition:
      '蛋白质结构预测最常用的整体精度指标，为 CASP 竞赛的主要标尺。把预测模型与实验结构按主链最优叠合后，分别统计残基 α 碳原子偏差落在 1、2、4、8 Å 四个阈值内的百分比，取平均再乘 100 得 0–100 分。因 8 Å 宽容档的存在，它对局部片段大错不敏感、对整体拓扑错误高度敏感——拓扑级错误会把大片段推出所有阈值而使分数骤降。经验上约 90 分相当于中等分辨率晶体结构；CASP14（2020 年）上 AlphaFold2 以中位约 92.4 首次达到实验精度量级，其高精度变体 GDT-HA 收紧阈值用于区分优秀模型。',
  },
  // ---------- 基因组组装（2 条） ----------
  {
    id: 'g-217',
    term: 'de Bruijn 图',
    english: 'de Bruijn graph',
    subjectId: BIOINFORMATICS,
    category: '基因组组装',
    definition:
      '短读组装的核心数据结构，名称源自荷兰数学家 de Bruijn 于 1946 年研究循环串计数的图构造，2001 年由 Pevzner 等引入片段组装。把每条读切成连续 k-mer（k 常取 31–127，习惯取奇数以避免回文 k-mer 与自身反向互补重合），以 (k−1)-mer 为节点、k-mer 为有向边建图，海量读的冗余坍缩为节点覆盖度，组装由平方级两两重叠比较置换为多项式可解的欧拉路径问题。测序错误裂变低覆盖假节点、杂合差异制造气泡、长于 k 的重复制造分叉，是其主要污染源；SPAdes、SOAPdenovo 等短读组装器均以此加启发式图简化实现。',
  },
  {
    id: 'g-218',
    term: 'N50',
    english: 'N50 statistic',
    subjectId: BIOINFORMATICS,
    category: '基因组组装',
    definition:
      '度量组装连续性的最常用统计量：把全部重叠群按长度降序排列，自最长起累加，累计长度首次达到组装总长一半时所在重叠群的长度。例如总长 500 kb、四条重叠群长 200、150、90、60 kb 时，累计至 350 kb 首次越过半长 250 kb，N50 为 150 kb。相伴变体有 L50（触达半长所需重叠群条数）与 NG50（以参考基因组总长之半为门槛）。解读戒律：只在总组装量可比时有意义，多拼垃圾或丢弃短重叠群均可虚抬；它只是分布的一个分位点，须与最长重叠群、条数、总长及参考回帖断点合看。',
  },
  // ---------- 比较基因组（1 条） ----------
  {
    id: 'g-219',
    term: '泛基因组',
    english: 'pan-genome',
    subjectId: BIOINFORMATICS,
    category: '比较基因组',
    definition:
      '把某物种全部个体的基因组视为一个集合的概念，由 Tettelin 等人于 2005 年对无乳链球菌的多菌株比较研究提出。基因内容分两桶：核心基因组为几乎全部个体共有、多编码必需功能并受强纯化选择约束；可变基因组仅存在于部分个体，多来自水平转移与近期复制，常关联适应、毒力与血清型差异。随个体数增加持续上升不饱和者称开放泛基因组（大肠杆菌核心基因约两千余而泛基因组上万为经典），迅速饱和者称封闭。方法论上进一步发展为图基因组，以带分叉的图结构替代单一线性参考，消解比对中的参考偏倚。',
  },
]
