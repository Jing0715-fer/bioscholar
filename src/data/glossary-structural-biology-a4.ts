// ============================================================
// BioScholar 结构生物学术语词典 · 批次 A4（第 10–12 章）
// 5 条（g-290 ~ g-294），subjectId 均为 structural-biology
// 与 A1/A2/A3 批次（g-275 ~ g-289）无重复
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const structuralBiologyGlossaryA4: GlossaryTerm[] = [
  {
    id: 'g-290',
    term: '整合结构生物学',
    english: 'integrative structural biology',
    subjectId: 'structural-biology',
    category: '方法论',
    definition:
      '以统一建模框架组合多种实验与计算信息、求解单一方法难以处理的体系的研究策略：把 X 射线晶体学、冷冻电镜与 NMR 的高分辨局部结构，同 SAXS 的整体包络、smFRET 与 DEER 的纳米级距离、交联质谱的拓扑约束、氢氘交换质谱的保护图谱乃至 AlphaFold 预测一起写成概率或可能性项，经采样与留出数据交叉验证，产出带定位精度的结构排布。核孔复合物（酵母约 55 MDa、人约 110 MDa）的整合解析是成名之作，IMP（Russel 等 2012 年）是代表性建模平台。',
  },
  {
    id: 'g-291',
    term: '小角 X 射线散射',
    english: 'small-angle X-ray scattering',
    abbreviation: 'SAXS',
    subjectId: 'structural-biology',
    category: '溶液方法',
    definition:
      '在溶液中测定分子整体形状参数的散射方法：同步辐射强光源下记录散射强度随散射矢量 q 的衰减，Guinier 区（q·Rg 小于 1.3）内 ln I 对 q² 的直线斜率给出回转半径 Rg，P(r) 距离分布的间接傅里叶反演给出最大尺度 Dmax，零角外推强度与 Porod 体积估算分子量与寡聚态；DAMMIN/DAMMIF 的 ab initio 包络达约 1–2 nm 精度。浓度系列扣除颗粒间干涉、缓冲液空白严格相减是实验纪律；与高分辨结构对拍（如 CRYSOL）可验证溶液构象是否与晶体同一，是整合结构生物学的整体形状账本。',
  },
  {
    id: 'g-292',
    term: '交联质谱',
    english: 'cross-linking mass spectrometry',
    abbreviation: 'XL-MS',
    subjectId: 'structural-biology',
    category: '整合约束',
    definition:
      '以化学交联加质谱鉴定读取复合物中「谁挨着谁」的拓扑约束方法：DSS 与水溶的 BS³ 等 NHS 酯交联剂进攻赖氨酸 ε-氨基，间隔臂长约 11.4 Å，被交联两赖氨酸 Cα 间距上限约 30 Å；交联蛋白经酶解后以 LC-MS/MS 与 pLink、MeroX 一类搜索引擎鉴定交联肽段（假发现率控制约百分之一量级）。微克级样品、不挑分子量，产出的大复合物近邻清单是整合建模最常用的距离约束来源；可裂解交联剂（如 DSBU）在二级谱留下特征碎片、令鉴定更稳。',
  },
  {
    id: 'g-293',
    term: '氢氘交换质谱',
    english: 'hydrogen-deuterium exchange mass spectrometry',
    abbreviation: 'HDX-MS',
    subjectId: 'structural-biology',
    category: '构象动态',
    definition:
      '以酰胺氢的溶剂交换速率读取构象动态与溶剂可及性的质谱方法：氢键与埋藏保护使交换变慢，交换进行不同时间后骤冷猝灭、蛋白酶水解并以 LC-MS 逐肽读出氘掺入，保护图谱沿序列画出被折叠或配体结合所庇护的区段，时间窗从秒到小时。两大应用为表位定位（抗体结合面即氘进不去的肽段，是抗体药物开发的常规表征）与变构传导路径追踪；它与交联质谱一量溶剂保护、一量空间近邻，构成质谱进入结构生物学的两个互补入口。',
  },
  {
    id: 'g-294',
    term: 'pLDDT 置信度',
    english: 'predicted local distance difference test',
    abbreviation: 'pLDDT',
    subjectId: 'structural-biology',
    category: '计算结构生物学',
    definition:
      'AlphaFold 输出的残基级预测置信度分数（0–100）：大于 90 主链与侧链皆可靠、可直接作分子置换搜索模型；70–90 主链可靠而侧链存疑；50–70 低置信；小于 50 常对应内在无序区——既是「构象不定」也是「本就无折叠」的双重指示。与残基对级的预测对齐误差（PAE）配合使用，可判断结构域间与多链界面的相对排布可信度；「读预测先读两幅图」已成为先预测后实验工作流的固定动作，也是判断预测可否用于建模起点的第一道关口。',
  },
]
