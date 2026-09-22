// ============================================================
// BioScholar X射线晶体学测验题库 - 批次 A4（第 10–12 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-x-ray-crystallography-46 ~ 60）
// 题型：每章 single ×3 + truefalse ×1 + multiple ×1
// 难度：每章 1（基础识记）×1 + 2（理解应用）×3 + 3（综合分析）×1
// 依据：Brunger Rfree 交叉验证论文、Schomaker & Trueblood TLS、
// Jiang & Brünger 体溶剂掩膜、Read 等 wwPDB 验证报告、Joosten
// PDB_REDO、Neutze/Chapman「衍射先于破坏」论文、Weierstall LCP
// 注射器、Gonen 组 MicroED 与平台第 10–12 章正文常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const xrayCrystallographyQuizA4: QuizQuestion[] = [
  // ================= 第 10 章 结构精修（q-x-ray-crystallography-46 ~ 50） =================
  {
    id: 'q-x-ray-crystallography-46',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch10',
    type: 'single',
    question: '1992 年 Brunger 在 Nature 提出自由 R 因子（Rfree）交叉验证。下列关于 Rfree 的叙述，正确的是：',
    options: [
      '随机抽取约 5% 反射组成自由集，精修全程不可见，仅以最终模型对这组「没见过」的数据计算 R，作为过拟合的裁判',
      'Rfree 是 Rwork 在低分辨率壳层上的加权平均',
      'Rfree 越低说明 restraints 的权重越紧',
      '换程序或换策略时应重新随机抽取自由集，以获得更稳定的 Rfree',
    ],
    answer: 0,
    explanation:
      'Rfree 的定义即「考卷」逻辑：随机抽取约 5%（小数据集可至 10%）反射打入自由集，精修的目标函数、权重调整与策略选择一律不得沾它，收工后以最终模型对这组未见数据算 R——模型解释未见数据的能力替真实性发言。B 把它混淆为数据处理统计；C 因果颠倒，restraints 的松紧看几何 rmsZ；D 恰是禁手——中途重抽等于换考卷，前后 Rfree 不可比，自由集须原样继承。故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-47',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch10',
    type: 'single',
    question: '关于 TLS 参数化（Schomaker 与 Trueblood，1968 年），下列叙述正确的是：',
    options: [
      '以平移张量 T（6 参数）、旋转张量 L（9 参数）与耦合张量 S（5 参数）共 20 个参数描述一个刚体域的弥散',
      'TLS 逐原子精修各向异性 B，故只适用于优于 1.2 Å 的数据',
      'TLS 贡献与残余 B 相互独立，论文报告的平均 B 不应包含 TLS 贡献',
      'TLS 分组与 Rfree 无关，可任意细分以压低 Rwork',
    ],
    answer: 0,
    explanation:
      'TLS 的省参数美学恰在「20 对数百」：把一个结构域当作刚体，其整体振动由 T（平移，6 参数）、L（libration 旋转，9 参数）、S（平移旋转耦合，5 参数）三个张量共 20 个参数讲完，适用 2 至 3.5 Å 的中分辨率主力区间，故 A 正确而 B 颠倒了适用域。C 错在口径：PDB 规定总有效 B 为 TLS 贡献加残余个体 B，报告值必须含 TLS 并注明；D 错在忽视裁决——TLS 分组方案应以 Rfree 对照取舍，滥分既属过拟合也违反精修的试错纪律。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-48',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch10',
    type: 'truefalse',
    question:
      '体溶剂修正处理占晶体体积三到五成的无序溶剂：Babinet 原则使低角的模型 |F_calc| 系统性偏高；主流的平坦溶剂掩膜以 k_sol 约 0.3 至 0.4 e/Å³、溶剂 B 约 40 至 60 Å² 参数化溶剂贡献，掩膜更新后低角残差塌落、R 常降数个百分点。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。无序溶剂区的平均密度低于蛋白区，其低频散射恰为蛋白密度的「负像」（Babinet 原则），两相相消使低角 |F_obs| 系统性低于只算蛋白的 |F_calc|，表现为低角一片残差。Jiang 与 Brünger 1994 年的平坦掩膜修法以常数 k_sol 配整体溶剂 B 描述溶剂区密度，作为独立项加入 F_calc；掩膜一更新，R 常降数个百分点，是「不修不知道」的大头——掩膜还须随模型变动重算，否则溶剂回填会抹掉小配体的密度证据。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-49',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch10',
    type: 'single',
    question: '某 1.9 Å 结构精修后 Rwork 为 0.19、Rfree 为 0.28，几何 rmsZ 为 1.6。按第 10 章的诊断逻辑，首要怀疑与处置顺序是：',
    options: [
      'gap 达 9 个百分点且 rmsZ 偏高，先查最可疑的无效参数（塞满的水与滥用的各向异性等），删后再看 gap 反应',
      '各项指标正常收敛，可直接投稿',
      'restraints 过紧，应加大数据权重直到 gap 消失',
      '孪晶未检出，应立即做 H-test',
    ],
    answer: 0,
    explanation:
      'Rwork 0.19 落在 1.8 至 2.0 Å 的锚点带（0.18 至 0.22）内，但 Rfree 与 Rwork 之差达 9 个百分点，越过 7 个百分点的警报线；rmsZ 1.6 又高于 1.5 的上限，两条证据合流指向过拟合与参数膨胀。诊断应从「最可疑的参数」查起：先删一批水、收回滥用参数，再看 gap 与 rmsZ 的反应，逐类排雷——故 A 正确。B 无视警报线；C 方向相反，restraints 过紧的指纹是 gap 小而双 R 皆高；D 的 H-test 是强度统计诊断，本题未给孪晶证据，并非首选。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-50',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch10',
    type: 'multiple',
    question: '（多选题）关于结构精修的数学基础与参数策略，下列叙述正确的有：',
    options: [
      '最大似然框架的出发点是假设模型完全正确、误差仅来自测量噪声',
      'Engh 与 Huber 1991 年参数集给出键长 σ 约 0.02 Å、键角 σ 约 2° 的立体化学先验',
      'PDB 报告口径下，原子的总有效 B 等于 TLS 贡献加残余个体 B',
      '完美孪晶（孪晶分数 0.5）可使 R 异常低而模型可全错，孪晶不检出则 R 读数尽是幻象',
      'riding 氢须逐个单独精修坐标，因此 2.5 Å 以远的结构也应批量添加',
    ],
    answer: [1, 2, 3],
    explanation:
      'B、C、D 均为第 10 章的标准结论：参数集的 σ 即每条 restraint 的发言权；TLS 报告口径必须写清总有效 B 的加和构成；完美孪晶把不等价的反射对加权合并，R 失去鉴别力，须孪晶精修后 Rfree 才恢复话语权。A 恰把最大似然说反——ML 的立论正是「模型有错」，以误差模型进入似然，对泊松统计下的弱反射才有别于最小二乘的有偏处理；E 错两处：riding 氢的坐标由母原子几何生成、不单独精修，且 2.5 Å 以远添加 riding 氢通常得不偿失。故选 B、C、D。',
    difficulty: 3,
  },
  // ================= 第 11 章 结构验证与质量评估（q-x-ray-crystallography-51 ~ 55） =================
  {
    id: 'q-x-ray-crystallography-51',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch11',
    type: 'single',
    question: '现代 MolProbity 三区判定的行业惯例中，Ramachandran 图的合格线是：',
    options: [
      'outlier 占比低于 0.5%，优秀结构 favored 不低于 98%',
      'outlier 占比低于 5%，favored 不低于 90%',
      'outlier 必须严格为零，否则结构一律不可发表',
      'favored 与 outlier 无固定阈值，视审稿人偏好而定',
    ],
    answer: 0,
    explanation:
      '三区判定（favored、allowed、outlier）以高质量结构的统计轮廓划定，行业惯例是 outlier 占比低于 0.5% 才算合格，优秀结构 favored 不低于 98% 且 outlier 为零。outlier 的正确用法是「传唤」而非「扣分」——每一个都须解释为真实应变、功能相关扭曲或建模错误；Gly、Pro 与 pre-Pro 三类残基还须换用各自的专属轮廓，否则误报成灾。故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-52',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch11',
    type: 'single',
    question: '关于 MolProbity 的 clashscore，下列叙述正确的是：',
    options: [
      '每一千个原子的严重冲突数（原子对重叠不低于 0.4 Å），好结构低于 5，计算前须以 Reduce 加氢并优化氢键方向',
      '每一百个残基的 rotamer 异常数，好结构低于 1',
      '只统计重原子间的冲突，氢原子因噪声大而被排除在外',
      '衡量模型与衍射数据的失配度，与立体化学无关',
    ],
    answer: 0,
    explanation:
      'clashscore 的定义是每千原子中重叠不低于 0.4 Å 的严重冲突对数，好结构低于 5；其计算以 Reduce 加氢为前置——氢贡献了冲突的另一半，重原子检查会放过半数立体化学灾难，「全原子」三个字正在于此，故 A 对而 C 错。B 张冠李戴，rotamer outlier 的口径是与 2000 年构象库比对、优秀结构不足 1%；D 完全错位——clashscore 是纯几何指标，与密度失配类指标（RSRZ 等）分属几何与密度两个证据面。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-53',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch11',
    type: 'truefalse',
    question:
      'PDB_REDO（Joosten 等，2009 年起）对全库历史条目自动再精修，统计结论为平均 Rfree 可再降约 2 个百分点、几何 outlier 大面积清零；其方法学要点在「再优化、不重建」——只在参数与权重层面找便宜，不动大架构。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。PDB_REDO 按现代参数集重建侧链与氢、重放水、重调权重，全库规模的统计收益即「平均 Rfree 再降约 2 个百分点、Ramachandran 与 rotamer outlier 大面积清零」；「再优化不重建」使其收益可归因于方法与工具的进化而非结构本身的变化。两点附加纪律：历史条目若重抽自由集，前后 Rfree 不可直接比较，须如实标注降级；再精修产出同样要过验证报告的关口——入库不等于定稿，结构是可以被持续再精修的活文档。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-54',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch11',
    type: 'single',
    question: '逐残基密度验证中，RSRZ 把 RSR 按残基类型与分辨率壳层标准化为 Z 分数。若某结构出现成串连续残基 |RSRZ| 高于 2 的区段，最应当优先怀疑的是：',
    options: [
      'register 错位或整段构象错误',
      '该区段的 B 因子偏低',
      '空间群选错导致强度合并异常',
      '溶剂含量的计算有误',
    ],
    answer: 0,
    explanation:
      'RSRZ 高于 2 即「传唤」：零星尖峰逐个调图核对即可，成串连续的高 RSRZ 则几乎必是系统性建模错误——register 错位（序列与密度错格）或整段构象错误，第 9 章「连锁报警」在密度端的原像正是它，常伴 B 因子锯齿作为旁证。B 因子偏低本身不是怀疑对象；C、D 属数据处理与全局问题，其表现是全图或大片区的系统性失配，而非一段连续残基的尖峰链。故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-55',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch11',
    type: 'multiple',
    question: '（多选题）关于结构验证体系，下列叙述正确的有：',
    options: [
      'Cβ 偏离的警报阈值为 0.25 Å，因其理想位置由 N、CA、C 三原子唯一决定，一处报警多处病灶',
      '验证报告的百分位按同分辨率区间分组解读：3.5 Å 的结构与 3.5 Å 的比，不与 1.2 Å 的比',
      '配体密度适合度 llgf 为负值是红旗，正确动作包括降 occupancy、升 B 至自洽或删除配体',
      'wwPDB 验证报告自 2012 年起随 OneDep 投递强制自动生成，每项指标给出绝对值与百分位',
      '几何 rmsZ 越接近零越好，说明几何被精修得尽善尽美',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'A 至 D 均为第 11 章标准结论：Cβ 无自由度、是主链错误与手性事故的灵敏证人；百分位按分辨率分组才公允，分辨率决定可达质量；llgf 为负说明配体放在此处赢得的密度证据不及随机位置，降 occupancy、升 B 或删除正是处置三件套；验证报告的强制生成始于 2012 年的 OneDep 流程。E 恰是常见误区：几何 rmsZ 的理想值约 1.0——低于 0.8 是 restraints 过紧、数据没发言，几何被先验焊死并非「尽善尽美」，高于 1.5 则是数据压弯化学。故选前四项。',
    difficulty: 3,
  },
  // ================= 第 12 章 晶体学前沿方法（q-x-ray-crystallography-56 ~ 60） =================
  {
    id: 'q-x-ray-crystallography-56',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch12',
    type: 'single',
    question: 'XFEL 串晶所依据的「衍射先于破坏」（diffraction before destruction）原理，其准确含义是：',
    options: [
      '飞秒脉冲短于损伤发展的时标，衍射图案在原子发生显著位移之前已记录完成',
      'XFEL 光子能量低于造成辐射损伤的阈值，晶体不受损伤',
      '液氮冷冻使损伤在脉冲期间被完全冻结',
      '损伤虽然发生，但数据处理算法可把损伤信号完全扣除',
    ],
    answer: 0,
    explanation:
      'Neutze 等 2000 年指出损伤需要时间：光电吸收虽即时，光电子级联与原子位移在数十至数百飞秒内才展开；把约 10¹² 个光子压进 10 至 100 fs 的脉冲，衍射便在原子来得及移动之前完成——Chapman 等 2011 年以 Photosystem I 纳米晶体首证：晶体当场湮灭而图案已写入探测器。注意它并非零损伤（脉冲内电离已经开始，反常信号仍会衰减），B、C、D 分别错在「无损伤」「靠冷冻」与「靠算法」。故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-57',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch12',
    type: 'single',
    question: '串行晶体学把「剂量预算」改写为「每晶一次曝光」。液体射流串晶实验中，命中率（hit rate）的典型量级与相应对策是：',
    options: [
      '约 1% 至 10%，空射在所难免，须以数万至百万张图案的索引、Monte Carlo 合并与 post-refinement 换取完整数据',
      '接近 100%，因为射流中晶体密度极高',
      '约 50%，且每张图案都是完整数据集，无须合并',
      '与旋转法相同，取决于单晶的剂量预算',
    ],
    answer: 0,
    explanation:
      '液体射流中晶体随液流随机到达光斑，典型仅 1% 至 10% 的脉冲命中晶体；每颗晶体取向随机、只贡献一张「部分记录」的静止图案，须逐张指标化后以 Monte Carlo 平均压低部分性涨落与噪声，再以 post-refinement 校正晶体参数，数万至百万张图案方能合并成一套完整数据——CrystFEL 一类软件正是为此而生。B、C 低估了空射与部分性；D 完全错过范式转移：串晶的逻辑恰是放弃单晶预算、以晶体军团换数据总量。故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-58',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch12',
    type: 'truefalse',
    question:
      '脂立方相（LCP）结晶随 2007 年 β2 肾上腺素受体（T4 溶菌酶融合策略）的解析而成为膜蛋白主流路线；LCP 注射器（Weierstall 等 2014 年）使 LCP 中生长的膜蛋白微晶无需离开脂相即可直接进行串晶数据收集。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。Landau 与 Rosenbusch 1996 年提出 LCP 介质；2007 年 Cherezov 等以「T4 溶菌酶融合加 LCP」破解 β2 肾上腺素受体结晶难题，2011 至 2012 年 GPCR 浪潮随之而来（Lefkowitz 与 Kobilka 获 2012 年诺贝尔化学奖），胆固醇与脂质对构象的塑造进入坐标。Weierstall 等 2014 年的 LCP 注射器把黏稠脂相以每分钟纳升级慢速挤出、直送 XFEL 光斑，LCP 微晶「不换环境」即完成测数——从结晶到收数一条脂相走到底。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-59',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch12',
    type: 'single',
    question: '与 X 射线衍射相比，MicroED 的核心物理优势与代价是：',
    options: [
      '电子散射强约 10³ 倍使亚微米晶体可用且剂量极低，代价是动力学散射使强度不再简单正比于 |F|²',
      '电子波长更长，因此 Ewald 球更大',
      '电子不与物质发生相互作用，因此没有辐射损伤',
      '动力学散射使 MicroED 的 R 因子天然优于 X 射线精修',
    ],
    answer: 0,
    explanation:
      '电子的弹性散射截面比 X 射线高约三个数量级，亚微米晶体即可给出高信噪斑点，总剂量还比冷冻电镜单颗粒成像低一至两个数量级——这是 Gonen 组 2013 年创立 MicroED 的物理本钱；代价是电子被强散射后还会再次散射（动力学散射），观测强度偏离运动学近似，须以动力学衍射精修显式建模才能把 R 因子从约 20% 拉回个位数。B 错在电子波长极短（200 kV 下约 0.025 Å）而非更长；C、D 与物理事实相反。故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-60',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch12',
    type: 'multiple',
    question: '（多选题）关于晶体学前沿方法，下列叙述正确的有：',
    options: [
      '「衍射先于破坏」由 Neutze 等 2000 年理论预言、Chapman 等 2011 年以 Photosystem I 纳米晶体首次实验证实',
      'mix-and-inject 串晶的时间分辨由底物向晶体内扩散设定，典型在毫秒量级',
      '中子晶体学可直接定位氢与氘、判定质子化态，代价是须长出 0.1 至 1 mm³ 的大晶体并常做氘代',
      '剪接体等大复合物的近原子分辨率竞速最终由冷冻电镜胜出，X 射线止步于亚复合物层面',
      'MicroED 中观测强度严格正比于 |F|²，与 X 射线完全相同',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'A 至 D 分别对应第 12 章四节的标准结论：XFEL 的物理与时序、混合-喷射的扩散时标、中子的氢灵敏度与样品代价、以及 2015 至 2016 年剪接体战场上 cryo-EM 的胜出。E 恰是 MicroED 最常被忽视的陷阱：电子的强散射带来多重散射，动力学效应使强度偏离 |F|² 的简单正比——运动学处理下小分子 R 因子长期停在约 20%，动力学衍射精修（Palatinus 等 2017 年）才把它拉回个位数。故选前四项。',
    difficulty: 3,
  },
]
