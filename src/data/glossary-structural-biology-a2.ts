// ============================================================
// BioScholar 结构生物学术语词典 · 批次 A2（第 4–6 章）
// 5 条（g-280 ~ g-284），subjectId 均为 structural-biology
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const structuralBiologyGlossaryA2: GlossaryTerm[] = [
  {
    id: 'g-280',
    term: '差示扫描荧光法',
    english: 'differential scanning fluorimetry',
    abbreviation: 'DSF',
    subjectId: 'structural-biology',
    category: '纯化与质控',
    definition:
      '以热变性曲线测量蛋白折叠稳定性的高通量方法：疏水环境敏感染料（如 SYPRO Orange）与升温变性中暴露的疏水核心结合后荧光骤升，在 qPCR 仪上以约 1 °C/min 升温记录荧光曲线，一阶导数峰对应的解链温度 Tm 即稳定性指标。配合 pH × 盐 × 添加剂矩阵筛选缓冲液，以 ΔTm 大于 5 °C 为显著改善判据，指导纯化与保存条件选择；免染料的 nanoDSF 改测色氨酸内源荧光 330/350 nm 比值，不受去垢剂与还原剂干扰，尤其适合膜蛋白。',
  },
  {
    id: 'g-281',
    term: '蒸气扩散结晶法',
    english: 'vapor diffusion crystallization',
    subjectId: 'structural-biology',
    category: '结晶方法',
    definition:
      '蛋白质结晶最经典的方法家族：将蛋白液滴（悬滴 1–2 μL 或坐滴 0.2–1 μL）与较大体积池液（如 500 μL）封闭于同一气室，水分自水活度较高的液滴蒸发迁移至池液，液滴被缓慢浓缩、沿相图轨迹从过饱和边缘进入成核与生长区，一天到一周内发生成核、生长或沉淀。悬滴形态晶体大、肉眼可判；坐滴与 96 孔板及移液机器人（20–200 nL 液滴）契合，是现代稀疏矩阵初筛的主力载体。',
  },
  {
    id: 'g-282',
    term: '脂立方相结晶',
    english: 'lipidic cubic phase crystallization',
    abbreviation: 'LCP',
    subjectId: 'structural-biology',
    category: '结晶方法',
    definition:
      '由 Caffrey 系统发展的膜蛋白结晶路线：单油酸甘油酯（monoolein）与蛋白溶液按约 2:3 质量比混合后自发形成脂水双连续立方相，膜蛋白在脂环境中保持天然取向，沉淀剂经纳米级水通道扩散进入、驱动晶格沿脂介质生长（in meso 结晶）。脂质头部基团参与晶格接触，是其常获高衍射质量晶体的化学基础；2007 年 β2 肾上腺素受体与 Fab 复合物的里程碑结构由此路线获得，此后成为 GPCR 结构解析的主力方法。',
  },
  {
    id: 'g-283',
    term: '布拉格定律',
    english: "Bragg's law",
    subjectId: 'structural-biology',
    category: '衍射原理',
    definition:
      '晶体衍射的基本条件：2d sinθ = nλ，其中 d 为晶面间距、θ 为掠射角、λ 为 X 射线波长。推导时将晶面视作「镜面」：相邻晶面反射线的光程差 2d sinθ 恰为整数倍波长 nλ 时，各层反射相干叠加形成衍射束——探测器上的每个斑点对应一族满足布拉格条件的晶面 (hkl)。由它直接导出分辨率几何极限 d_min = λ/(2 sinθ_max)，Cu Kα（1.5418 Å）的理论极限约 0.77 Å，是一切衍射几何设计的出发点。',
  },
  {
    id: 'g-284',
    term: '辐射损伤',
    english: 'radiation damage',
    subjectId: 'structural-biology',
    category: '数据收集',
    definition:
      'X 射线电离在晶体内引发的渐进性结构破坏，分特异性与全局两类：特异性损伤按剂量先后出现——二硫键断裂最早（2–5 MGy 可见）、随后金属中心失序、Glu 与 Asp 侧链去羧；全局损伤表现为镶嵌度升高、晶格常数膨胀（约 0.1–0.5%）与衍射强度整体衰减。Henderson 1995 年估算的剂量极限为 2×10⁷ Gy（20 MGy），100 K 低温冷冻、RADDOSE-3D 剂量预算、collect-and-destroy 与多晶合并是当代数据收集的标准应对组合。',
  },
]
