// ============================================================
// BioScholar 电子显微学术语词典 · 批次 A1（第 1–3 章）
// 5 条（g-315 ~ g-319），subjectId 均为 electron-microscopy
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const electronMicroscopyGlossaryA1: GlossaryTerm[] = [
  // ---------- 成像理论 ----------
  {
    id: 'g-315',
    term: '衬度传递函数',
    english: 'contrast transfer function',
    abbreviation: 'CTF',
    subjectId: 'electron-microscopy',
    category: '成像理论',
    definition:
      '描述透射电镜成像系统对各空间频率结构信息传递能力的函数。纯相位物体下 CTF(g) = −sin[χ(g)]，其中像差函数 χ(g) = πλg²(Δf − 0.5λ²g²Cs) 由离焦量与球差共同决定；考虑振幅衬度分量后写作 −[sin χ + Q·cos χ]。CTF 周期性过零，零点频率的信息在该张照片中完全丢失，须靠欠焦系列互补与算法修正补救。非晶碳膜或玻璃化冰功率谱中的 Thon 环即其可视化，ctffind 类软件据此拟合每张照片的实际欠焦与像散，是冷冻电镜数据处理流程的第一道工序。',
  },
  {
    id: 'g-316',
    term: '球差',
    english: 'spherical aberration',
    abbreviation: 'Cs',
    subjectId: 'electron-microscopy',
    category: '电子光学',
    definition:
      '旋转对称电子透镜固有的三级几何像差：远轴电子比近轴电子偏折更强、提前聚焦，孔径角 α 的射线焦移 Δf = Cs·α²，最小弥散盘 r_s ≈ Cs·α³。Scherzer 定理（1936）证明任何旋转对称静电或磁透镜的 Cs 恒为正、无法像玻璃透镜那样靠精磨消除，故电子物镜只敢用约 10 mrad 的小孔径角；现代 200–300 kV 物镜 Cs 典型为 0.5–2 mm。由 Cs 与波长可得 Scherzer 点分辨率 δ ≈ 0.66·Cs^(1/4)·λ^(3/4) 及最佳欠焦 Δf_S = −1.2·(Cs·λ)^(1/2)；硬件消除须依赖六极多极校正器（1998 年首次装机），生物冷冻电镜则普遍以算法侧 CTF 校正替代。',
  },
  {
    id: 'g-317',
    term: '玻璃化冷冻',
    english: 'vitrification',
    subjectId: 'electron-microscopy',
    category: '冷冻制样',
    definition:
      '使生物样品中的水绕过结晶、直接固化成非晶玻璃态冰的制样技术，由杜博歇（Dubochet）于 1982 年以 plunge-freezing 实现：载网上的薄液膜以毫秒级速度浸入液态乙烷（导热速率足以让水来不及成核），样品由此保存在近天然的水环境中、免受冰晶产生的机械与渗透损伤。玻璃化冰在衍射上表现为约 0.37 nm 处的宽弥散环，出现锐环即提示结晶冰污染。该技术使冷冻电镜得以观察未染色、未固定的生物大分子，是杜博歇与弗兰克、亨德森同获 2017 年诺贝尔化学奖的核心贡献，也是第 6 章冷冻制样体系的基石。',
  },
  // ---------- 生物制样 ----------
  {
    id: 'g-318',
    term: '弱相位物体近似',
    english: 'weak phase object approximation',
    abbreviation: 'WPOA',
    subjectId: 'electron-microscopy',
    category: '成像理论',
    definition:
      '透射电镜相位衬度理论的基本近似：假设样品仅使出射电子波获得微小相位偏移而振幅不变，出射波写作 ψ = exp(iφ) ≈ 1 + iφ，相位偏移 φ(x) = σ·V_p(x)·t 与相互作用常数 σ、投影电位 V_p 和厚度 t 成正比。据此可导出衬度传递函数等一系列解析结果，是第 3 章成像理论的出发点。该近似对较薄区域严格；厚度增大后总相位偏移达弧度量级、且振幅衰减不可忽略，须改用多层动力学方法处理。冷冻电镜的冰包埋颗粒（约 10–100 nm）以其为主要适用对象，其振幅衬度分数 Q 约 0.1–0.2。',
  },
  {
    id: 'g-319',
    term: '负染色',
    english: 'negative staining',
    subjectId: 'electron-microscopy',
    category: '生物制样',
    definition:
      '以重金属盐溶液环绕干燥生物颗粒、借振幅（质厚）衬度成像的快速制样技术：磷钨酸等染液干燥后在颗粒四周形成电子致密外壳，散射极强近乎全黑，未染色的颗粒内部相对透亮，从而得到亮颗粒嵌于暗背景的负片式图像。方法由霍尔（Hall）于 1955 年引入、布伦纳与霍恩 1959 年确立，分辨率约 15–20 Å，数分钟即可完成筛查，至今仍是病毒与蛋白复合物均一性、浓度与聚集状态评估的第一道工序；其代价是染料颗粒度掩盖表面细节、干燥过程引入形态畸变，故高分辨结构解析须改用玻璃化冷冻制样。',
  },
]
