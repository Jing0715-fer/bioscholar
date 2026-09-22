// ============================================================
// BioScholar 电子显微学术语词典 · A4 批次（第 10–12 章：
// 分辨率革命 / 相位板 / 人工智能 / 原位结构生物学）
// 5 条（g-330 ~ g-334），subjectId 均为 electron-microscopy
// 与 A1/A2/A3 批次无词头重复
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const electronMicroscopyGlossaryA4: GlossaryTerm[] = [
  // ---------- 探测与数据收集（第 12 章） ----------
  {
    id: 'g-330',
    term: '直接电子探测相机',
    english: 'direct electron detector',
    abbreviation: 'DED',
    subjectId: 'electron-microscopy',
    category: '探测技术',
    definition:
      '以背照式减薄 CMOS 芯片直接承受高能电子轰击的相机，绕开 CCD「电子转光子再光纤耦合」的损耗链。代表产品为 Gatan K2 Summit（2012–2013 年商用）、K3、FEI Falcon 系列与 Direct Electron DE 系列。其计数模式在约 5–10 e⁻/像素/秒的低剂量率下逐事件识别电子并定位到亚像素精度，读出噪声在原理上被消灭，DQE 在半奈奎斯特频率处从 CCD 时代的约 0.1 升至约 0.3–0.5；配合剂量分数化电影输出与运动校正，构成单颗粒冷冻电镜分辨率革命的硬件基础。',
  },
  {
    id: 'g-331',
    term: '剂量分数化',
    english: 'dose fractionation',
    subjectId: 'electron-microscopy',
    category: '数据收集',
    definition:
      '把一次总剂量 40–60 e⁻/Å² 的曝光切分成 50–60 帧短曝光「电影」的采集模式，依赖直接电子探测相机的高帧率读出。每帧剂量低、帧间位移小，束致运动由此从不可见的模糊变成可观测、可校正的轨迹：MotionCor 类程序以全局加局部互相关对齐各帧，RELION 的贝叶斯抛光再做逐颗粒精修，Grant 与 Grigorieff 2015 年的剂量加权再按信息寿命对各帧赋权——晚期帧低频照用、高频自动降权。它与计数模式一起，把剂量预算里每个电子的利用率推到物理上限。',
  },
  {
    id: 'g-332',
    term: 'Volta 相位板',
    english: 'Volta phase plate',
    abbreviation: 'VPP',
    subjectId: 'electron-microscopy',
    category: '成像硬件',
    definition:
      '由 Danev 等 2014 年（Nature Methods）提出的电子相位板：在物镜后焦面放约 10 nm 无定形碳膜，中央束照射点形成的局部表面电位（Volta 电位）恰好充当接近 π/2 的可控相移器，且荷电斑点自动追踪中央束、无需开孔与机械对中。它使近焦收集获得充沛低频衬度，小分子量蛋白的取向判定显著受益，血红蛋白（约 64 kDa 四聚体）解析到 3 Å 级是招牌案例；代价是相位量随使用时长漂移（须逐张拟合相位偏移）、碳膜寿命有限与对准精度要求高。此前 Zernike 式中央孔碳膜因污染与充电长期未能实用。',
  },
  {
    id: 'g-333',
    term: '叠层成像',
    english: 'ptychography',
    subjectId: 'electron-microscopy',
    category: '成像理论',
    definition:
      '以扫描探针逐点采集完整衍射图、再从衍射图序列恢复样品相位的计算成像方法：相邻扫描点的照明区域互相重叠（ptycho-词源即「折叠」），重叠约束使相位恢复问题可解，无需物镜参与成像。在 4D-STEM 框架中与像素阵列探测器（如 EMPAD）配合，对轻元素的剂量效率超过环形暗场一个量级，材料学已把电子束敏感样品做到亚埃分辨率；与之互补的微分相衬（DPC）从衍射斑质心偏移读出内建电磁场。玻璃化生物样品的低剂量低温应用正在萌芽，被视为绕开衬度传递函数零点的候选路线。',
  },
  {
    id: 'g-334',
    term: '原位结构生物学',
    english: 'in situ structural biology',
    subjectId: 'electron-microscopy',
    category: '原位方法',
    definition:
      '在未经纯化的细胞环境里解析分子机器结构与组织的路线：玻璃化冷冻保真、冷冻 FIB 把 5–10 μm 厚的细胞铣成 100–300 nm lamella、冷冻电子断层采集体素、子图平均把重复分子叠至高分辨（常态 1–2 nm、里程碑 3–4 Å）。其独有产出是「分子社会学」：核糖体沿信使 RNA 的多聚体翻译组织、膜蛋白在双层中的间距与阵列、蛋白酶体的核周浓度梯度——这些量在纯化样品中不存在。Mahamid 等 2016 年对 HeLa 细胞的冷冻断层（Science）是引路案例；与体积电镜、CLEM 的多尺度整合是其当前扩张方向。',
  },
]
