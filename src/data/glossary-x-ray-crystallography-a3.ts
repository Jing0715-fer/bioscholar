// ============================================================
// BioScholar X射线晶体学术语词典 · A3 批次（第 7–9 章）
// 5 条（g-305 ~ g-309），subjectId 均为 x-ray-crystallography
// 覆盖：分子置换法、帕特森函数（ch7）/ 硒代甲硫氨酸（ch8）/
// 密度修饰（ch8）/ 电子密度图（ch9）
// 与 A1 批次（g-295~299：布拉格定律、倒易点阵、空间群、
// 马修斯系数、蒸气扩散结晶法）及 A2 批次（g-300~304：埃瓦尔德
// 反射球、结构因子、辐射剂量极限、CC1/2、系统消光）无重复
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const xrayCrystallographyGlossaryA3: GlossaryTerm[] = [
  {
    id: 'g-305',
    term: '分子置换法',
    english: 'molecular replacement',
    abbreviation: 'MR',
    subjectId: 'x-ray-crystallography',
    category: '定相方法',
    definition:
      '以已知结构为先验求解相位问题的第一大路径：把同源蛋白结构或 AlphaFold 预测模型当作刚体，在目标晶体的晶胞中搜索其取向（旋转函数）与位置（平移函数），落位后以模型计算的结构因子相位充当初始相位，再经刚体精修与逐段重建逼近真值。现代实现以 Phaser 的最大似然旋转与平移函数为代表，以 LLG 与 TFZ 判读（TFZ 大于 8 大概率为正确解）；序列一致性 30% 以上的同源模型首选，低于 20% 时预测模型常胜出。当代 PDB 新结构的大多数经此路径解析。',
  },
  {
    id: 'g-306',
    term: '帕特森函数',
    english: 'Patterson function',
    subjectId: 'x-ray-crystallography',
    category: '衍射原理',
    definition:
      '由帕特森 1934 年提出、以实验强度为系数的傅里叶综合：P(u) = Σ|F(h)|²·exp(−2πih·u)，不需要任何相位。它等于电子密度的自相关，峰对应原子间向量、峰高近似正比于两原子原子序数之积 Z₁Z₂；N 个原子产生 N(N−1) 个非原点峰。蛋白质晶体的向量峰数以百万计而重叠成「峰海」，但分子内向量随分子整体取向转动，取向信息幸存——旋转函数（Rossmann 与 Blow 1962 年）正是据此在取向空间对齐模型与晶体的 Patterson，构成分子置换的数学骨架；差值 Patterson 还是定位重原子亚结构的经典手段。',
  },
  {
    id: 'g-307',
    term: '硒代甲硫氨酸',
    english: 'selenomethionine',
    abbreviation: 'SeMet',
    subjectId: 'x-ray-crystallography',
    category: '定相试剂',
    definition:
      '甲硫氨酸的硫被硒取代的氨基酸类似物，实验定相的第一功臣。以甲硫氨酸营养缺陷型菌株（如 E. coli B834）在无甲硫氨酸培养基中培养、或以代谢抑制法掺入，掺入率可超过 95%；蛋白结构与功能基本不受扰动，而每个甲硫氨酸位点变为反常散射灯塔——Se 的 K 吸收边约 0.9795 Å 处 f″ 峰值约 3.8 个电子，比硫在常规波长下大近一个数量级。亨德里克森等于 1990 年确立「SeMet 蛋白作为 MAD/SAD 测定通用载体」的范式，使新折叠蛋白的定相从此有了标准化路线。',
  },
  {
    id: 'g-308',
    term: '密度修饰',
    english: 'density modification',
    subjectId: 'x-ray-crystallography',
    category: '定相方法',
    definition:
      '用「电子密度图应具的先验性质」反哺相位、迭代改善相位的手段统称。核心工具包括：溶剂平坦化（Wang 1985 年，溶剂区密度应为常数——蛋白晶体四至六成体积为溶剂）、直方图匹配（蛋白区密度分布的统计先验）、非晶体对称平均（NCS 拷贝互证，噪声按 1/√n 压缩，球形病毒可享数十倍平均）与相位延伸（自低分辨率逐壳层外推）。多来源相位以 SIGMAA 概率加权组合，效果以 FOM 提升、图对比度与可追踪性评估；SAD 配密度修饰已是现代解析新结构的主流组合。',
  },
  {
    id: 'g-309',
    term: '电子密度图',
    english: 'electron density map',
    subjectId: 'x-ray-crystallography',
    category: '结构解析',
    definition:
      '以各反射的振幅与相位为系数的傅里叶综合 ρ(x) = (1/V)Σ|F|exp(iφ−2πih·x)，把倒易空间数据翻译回真实空间、供模型搭建的「地形图」。常用品种：2mFo−DFc 主力图（约 1σ 等高线，sigma-A 加权以减模型偏差，Read 1986 年）、mFo−DFc 差值图（±3σ，检举缺失与多余原子）、omit 图与 polder 图（挖除建模防偏差、检验配体）。解读技艺随分辨率分级：1.2 Å 可见氢与交替构象，2.5 Å 侧链清晰，3.2 Å 主链清晰而侧链断续，6 Å 只余螺旋轮廓。',
  },
]
