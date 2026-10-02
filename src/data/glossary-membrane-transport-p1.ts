// ============================================================
// 膜蛋白与物质转运术语词典 - 批次 P1（10 条，g-395 ~ g-404）
// 由内容代理 46-b1 编写，subjectId 均为 membrane-transport
// 类别分布：膜结构 1 / 转运热力学 3 / 泵 1 / 通道 3 / 研究方法 1 / 植物生理 1
// 教材依据：Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 ·
// Taiz & Zeiger《Plant Physiology》第6版，及本学科第 1–2 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const membraneTransportGlossaryP1: GlossaryTerm[] = [
  // ---------- 膜结构（1 条） ----------
  {
    id: 'g-395',
    term: '流动镶嵌模型',
    english: 'fluid mosaic model',
    subjectId: 'membrane-transport',
    category: '膜结构',
    definition:
      'Singer 与 Nicolson 于 1972 年提出的生物膜结构模型：磷脂双分子层构成二维流体基质，膜蛋白以内在、外周或脂锚定方式镶嵌其中并可侧向移动，膜厚仅 7.5–10 nm。膜脂侧向扩散系数约 10⁻⁸ cm²/s，而翻转运动半衰期长达小时至数天，故内外两小叶的脂质分布维持不对称。该模型是理解一切跨膜转运的结构出发点。',
  },
  // ---------- 转运热力学（3 条） ----------
  {
    id: 'g-396',
    term: '电化学梯度',
    english: 'electrochemical gradient',
    subjectId: 'membrane-transport',
    category: '转运热力学',
    definition:
      '离子跨膜浓度差与电位差之和，决定净离子流的方向与大小。定量式为 ΔG = RT ln(C₂/C₁) + zFV；25 ℃ 时 RT/F ≈ 25.7 mV，即每 10 倍浓度差约折合 59 mV 电位当量。ΔG 小于零为顺梯度的被动转运，大于零为需能的主动转运；动物以 Na⁺ 电化学梯度、植物以 H⁺ 梯度（PMF）为次级转运的能量货币。',
  },
  {
    id: 'g-397',
    term: 'Nernst 方程',
    english: 'Nernst equation',
    subjectId: 'membrane-transport',
    category: '转运热力学',
    definition:
      '描述离子平衡电位与跨膜浓度比关系的方程：E = (RT/zF) ln([离子]外/[离子]内)，25 ℃ 简化为 59/z × log(外/内) mV。膜电位等于某离子的 E 值时该离子净流为零；典型值如神经 E_K ≈ −90 mV、E_Na ≈ +60~+67 mV、E_Ca 高于 +125 mV。它是把浓度差换算为电位当量、判断驱动力方向的通用工具。',
  },
  {
    id: 'g-398',
    term: '质子动力势',
    english: 'proton motive force',
    subjectId: 'membrane-transport',
    category: '转运热力学',
    definition:
      '质膜（或类囊体膜）两侧 H⁺ 电化学梯度之和，等于膜电位差与 H⁺ 浓度差两项的加和。植物 P3A H⁺-ATPase 每水解 1 分子 ATP 泵出 1 个 H⁺，把膜电位拉至 −120~−250 mV、质外体 pH 降至约 5.5，联合构成折合超过 250–300 mV 的能量储备，驱动 NRT/NPF、KUP、SUC 等次级转运体吸收硝酸盐、钾与蔗糖，是植物转运体系的通用能量货币。',
  },
  // ---------- 泵（1 条） ----------
  {
    id: 'g-399',
    term: 'P3A 型 H⁺-ATPase',
    english: 'P3A-type H⁺-ATPase',
    subjectId: 'membrane-transport',
    category: '泵',
    definition:
      '植物细胞的主引擎，质膜 P 型质子泵，拟南芥由 11 个 AHA 基因编码。以 1:1 计量每水解一分子 ATP 泵出一个 H⁺，具生电性，C 端磷酸化后结合 14-3-3 蛋白而被激活（壳梭孢素可锁定该状态）。功能上与动物 Na⁺/K⁺-ATPase 相对：后者以 Na⁺ 梯度驱动动物次级转运并支撑约 −90 mV 级膜电位，P3A H⁺-ATPase 则以 H⁺ 梯度与 −200 mV 级电位驱动植物的吸收与装载。',
  },
  // ---------- 通道（3 条） ----------
  {
    id: 'g-400',
    term: '选择性滤器',
    english: 'selectivity filter',
    subjectId: 'membrane-transport',
    category: '通道',
    definition:
      '离子通道孔道最窄处的几何筛分结构。KcsA 的滤器由保守 TVGYG 序列主链羰基排成约 3 Å 孔径的氧环、含 4 个串联 K⁺ 结合位点，羰基氧排布模拟水化壳以补偿脱水能，故 K⁺:Na⁺ 选择比超过 10 000:1；Nav 的 DEKA 滤器选择比仅约 Na⁺:K⁺ = 12:1——严筛保真、宽筛提速，选择性与通量在物理上此消彼长。',
  },
  {
    id: 'g-401',
    term: '单通道电导',
    english: 'single-channel conductance',
    subjectId: 'membrane-transport',
    category: '通道',
    definition:
      '膜片钳测得的单个开放通道的导电能力，单位皮西门子（pS），满足 i = g(V − E_ion) 的欧姆关系。典型量级：多数 K⁺ 通道 2–20 pS，电压门控 Na⁺ 通道约 5–20 pS，nAChR 约 30–50 pS，BK 大电导钙激活钾通道可达 100–300 pS。电导是孔道口径与离子易位频率的电学量尺，也是膜片钳判断通道种类的一级参数。',
  },
  {
    id: 'g-402',
    term: '门控',
    english: 'gating',
    subjectId: 'membrane-transport',
    category: '通道',
    definition:
      '离子通道控制孔道开合的构象开关机制，分三类：电压门控（S4 螺旋精氨酸感受电场，Nav 每通道门控电荷约 12–16 个元电荷）、配体门控（胞外神经递质或胞内 cAMP、Ca²⁺ 等）与机械门控（动物 Piezo 三叶桨、植物 MSL/OSCA）。门控失效即通道病：Kv7.1/hERG 门控减弱致长 QT 综合征，SCN1A 突变致 Dravet 癫痫。',
  },
  // ---------- 研究方法（1 条） ----------
  {
    id: 'g-403',
    term: '膜片钳',
    english: 'patch clamp',
    subjectId: 'membrane-transport',
    category: '研究方法',
    definition:
      'Neher 与 Sakmann 于 1976 年发明的电生理技术（1991 年诺贝尔生理学或医学奖）：抛光玻璃微电极与细胞膜形成吉欧级高阻封接，可记录约 1 μm² 膜片上单个通道的皮安级电流，电导分辨率达 pS 级。细胞吸附、全细胞、内面向外、外面向外四种构型可分别控制膜两侧的电压与溶液成分，是拆解门控与单通道药理的标准工具。',
  },
  // ---------- 植物生理（1 条） ----------
  {
    id: 'g-404',
    term: '膨压',
    english: 'turgor pressure',
    subjectId: 'membrane-transport',
    category: '植物生理',
    definition:
      '植物原生质体因吸水压向细胞壁产生的正向静水压，典型 0.3–1 MPa（约 3–10 个大气压），是叶片挺立、气孔开张与根尖穿土的动力。其存在依赖细胞壁的抗张刚度——动物细胞无壁，只能靠离子稳态防胀破；植物则把膨压既用作液压执行器（气孔运动、含羞草叶序变化），也用作缺水信号（失水导致质壁分离）。渗透关系由 van’t Hoff 定律 π = iCRT 描述。',
  },
]
