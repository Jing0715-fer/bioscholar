// ============================================================
// BioScholar 结构生物学术语词典 · 批次 A1（第 1–3 章）
// 5 条（g-275 ~ g-279），subjectId 均为 structural-biology
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const structuralBiologyGlossaryA1: GlossaryTerm[] = [
  {
    id: 'g-275',
    term: '分子置换',
    english: 'molecular replacement',
    abbreviation: 'MR',
    subjectId: 'structural-biology',
    category: '结构解析',
    definition:
      '以已知同源结构为搜索模型求解晶体学相位问题的方法：将模型置入未知晶胞，经取向（旋转）与位置（平移）两步搜索使计算结构因子与实测强度的相关最大化，锁定分子的取向与位置即得初始相位，再经密度修饰与模型精修迭代改善。序列一致性高于约 30% 的同源蛋白通常可作可靠搜索模型；AlphaFold 预测模型如今亦常规入列，显著提高了实验解析的成功率。',
  },
  {
    id: 'g-276',
    term: '冷冻电镜单颗粒分析',
    english: 'single-particle cryo-electron microscopy',
    subjectId: 'structural-biology',
    category: '结构解析方法',
    definition:
      '无需晶体的三大结构解析方法之一：将纯化蛋白分布到镀碳支持膜的微孔冰中、经液态乙烷玻璃化，在液氮温度的电镜上拍摄数万至数百万张随机取向分子的二维投影，经颗粒挑选、对齐与分类、三维重构获得密度图。分子量下限约 100 kDa、大于 300 kDa 更可靠；2013 年直接电子探测相机引发分辨率革命后 2–3 Å 已成常规，并能以计算分类解析构象异质性、绘制构象连续谱。',
  },
  {
    id: 'g-277',
    term: '融合标签',
    english: 'fusion tag',
    subjectId: 'structural-biology',
    category: '蛋白质工程',
    definition:
      '经基因融合接在目的蛋白 N 端或 C 端的辅助序列，用于简化纯化、增强溶解性或便捷检测：His6 以六个咪唑基螯合固定化金属实现一步捕获，MBP 与 GST 提供共折叠增溶（GST 自身二聚、用后必须切除），Strep-tag II 以 desthiobiotin 竞争洗脱而条件极温和，SUMO 兼具强增溶与识别折叠体的蛋白酶位点。标签是「借来的结合能力」，用后须经 TEV 等蛋白酶切除并以负吸附回收目的蛋白——结晶前常规切标签，因柔性标签在晶格接触处制造熵障碍。',
  },
  {
    id: 'g-278',
    term: '离子交换层析',
    english: 'ion exchange chromatography',
    abbreviation: 'IEX',
    subjectId: 'structural-biology',
    category: '分离原理',
    definition:
      '以带相反电荷的固定相按蛋白净电荷分离的层析机理：pH 高于 pI 时蛋白带负电、结合阴离子交换剂（Q 强型、DEAE 弱型），pH 低于 pI 时带正电、结合阳离子交换剂（SP 强型、CM 弱型），结合 pH 应偏离 pI 至少一个单位。以 0 至 500 mM 的 NaCl 线性梯度把连续变化的电荷谱在盐轴上展开洗脱，梯度体积越大分辨率越高；容量大且不依赖任何标签，既是无标签蛋白的捕获主力，也是亲和捕获后的精纯手段。',
  },
  {
    id: 'g-279',
    term: '分子排阻层析',
    english: 'size exclusion chromatography',
    abbreviation: 'SEC',
    subjectId: 'structural-biology',
    category: '分离原理',
    definition:
      '按流体力学体积筛分分离的层析机理（凝胶过滤）：大分子进不了凝胶孔道、随空体积 V0 最先流出，小分子完全入孔、随总体积 Vt 最后流出，居间者按可及孔体积分配，以分配系数 Kav = (Ve − V0)/(Vt − V0) 定量（取值 0 至 1，目标宜落在分级范围中段）。一柱三用——精纯去聚合体、缓冲液置换与聚合态分析（配 SEC-MALS 得绝对分子量与化学计量）；上样须控制在柱体积 0.5–2%，分辨率随柱长的平方根增长。',
  },
]
