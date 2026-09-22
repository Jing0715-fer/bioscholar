// ============================================================
// BioScholar X射线晶体学术语词典 · A4 批次（第 12 章）
// 5 条（g-310 ~ g-314），subjectId 均为 x-ray-crystallography
// 覆盖：X射线自由电子激光、串行晶体学、脂立方相结晶、
// 微晶电子衍射、时间分辨晶体学（均出自第 12 章）
// 与 A1（g-295~299：布拉格定律、倒易点阵、空间群、马修斯
// 系数、蒸气扩散结晶法）、A2（g-300~304：埃瓦尔德反射球、
// 结构因子、辐射剂量极限、CC1/2、系统消光）、A3（g-305~309：
// 分子置换法、帕特森函数、硒代甲硫氨酸、密度修饰、电子密度图）
// 批次无重复
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const xrayCrystallographyGlossaryA4: GlossaryTerm[] = [
  {
    id: 'g-310',
    term: 'X射线自由电子激光',
    english: 'X-ray free-electron laser',
    abbreviation: 'XFEL',
    subjectId: 'x-ray-crystallography',
    category: '前沿光源',
    definition:
      '以直线加速器与长波荡器产生飞秒相干X射线脉冲的第四代光源：数十亿电子伏特的电子团穿过波荡器，经自放大自发辐射（SASE）把初始噪声指数放大为高度相干的巨脉冲。LCLS（美国 SLAC，2009 年）为世界首台硬X射线自由电子激光，SACLA（日本，2012 年）与 European XFEL（德国，2017 年，最高每秒 27000 脉冲）相继建成。脉冲特征为约 10 至 100 fs 脉宽、每脉冲约 10¹² 个光子、峰值亮度超第三代同步辐射约 9 个数量级，是「衍射先于破坏」与飞秒时间分辨晶体学的物理基础。',
  },
  {
    id: 'g-311',
    term: '串行晶体学',
    english: 'serial crystallography',
    subjectId: 'x-ray-crystallography',
    category: '前沿方法',
    definition:
      '以「每颗晶体一次曝光、海量晶体合并」取代单晶旋转收集的范式：微晶随射流或固定靶逐个进入光斑，每张图案仅为一个随机取向的静止快照，须将数万至百万张图案逐张指标化，以 Monte Carlo 平均与 post-refinement 合并成完整数据集。液体射流命中率典型仅 1% 至 10%；其剂量逻辑把单晶「剂量预算」改写为「每晶一次曝光」——XFEL 下损伤发生在记录之后，同步辐射串晶（SSX）则以极低剂量逐晶收集换取室温完整数据，是时间分辨与膜蛋白微晶研究的主力载体。',
  },
  {
    id: 'g-312',
    term: '脂立方相结晶',
    english: 'lipid cubic phase crystallization',
    abbreviation: 'LCP',
    subjectId: 'x-ray-crystallography',
    category: '结晶技术',
    definition:
      '以单油酸甘油酯与水构成的双连续立方相为介质的膜蛋白结晶方法（Landau 与 Rosenbusch 1996 年提出）：脂基质如海绵般充满空间，膜蛋白在其中横向扩散、以直接的膜外结构域接触成核生长，晶体成为嵌于脂中的蛋白薄层阵列。2007 年 β2 肾上腺素受体以「T4 溶菌酶融合加 LCP」双策破门，2011 至 2012 年 GPCR 浪潮使其主流化（Lefkowitz 与 Kobilka 获 2012 年诺贝尔化学奖）；胆固醇与脂质分子可占据特异性位点、稳定特定构象。LCP 注射器使其中微晶不离开脂相即可串晶测数。',
  },
  {
    id: 'g-313',
    term: '微晶电子衍射',
    english: 'microcrystal electron diffraction',
    abbreviation: 'MicroED',
    subjectId: 'x-ray-crystallography',
    category: '前沿方法',
    definition:
      '2013 年 Gonen 组创立的方法：把冷冻透射电镜用作衍射仪，对亚微米至数微米的薄晶体做连续旋进电子衍射。电子弹性散射截面比X射线强约 10³ 倍，故极小晶体即可高信噪收数、剂量远低于电镜成像；电子波长极短使 Ewald 球近乎平面、数据完整度天然占优。代价是动力学散射使观测强度不再简单正比于 |F|²，须以动力学衍射精修显式建模。小分子侧已成为药物多晶型鉴别与绝对构型判定的工业利器（微克样品即可），蛋白侧定位为快筛与补位。',
  },
  {
    id: 'g-314',
    term: '时间分辨晶体学',
    english: 'time-resolved crystallography',
    subjectId: 'x-ray-crystallography',
    category: '前沿方法',
    definition:
      '捕集化学反应中间态结构的分支：以光解、底物混合等触发方式使反应在晶体内部同步起跑，在选定延迟时刻收集衍射，再以差值分析读出中间态。第一代 Laue 白光法（毫秒至纳秒）靠发色团与笼状化合物触发，经典战例为肌红蛋白 CO 解离与 Ras-GTP；串晶时代由混合-喷射（毫秒级底物扩散）与激光泵浦-探测（飞秒至毫秒）接棒，细菌视紫红质光循环系列与 PSII 的 S 态循环为标杆。实验设计须平衡触发效率、时间零点同步与剂量窗口的三角。',
  },
]
