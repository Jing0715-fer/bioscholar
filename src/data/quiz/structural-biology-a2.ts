// ============================================================
// BioScholar 结构生物学测验题库 - 批次 A2（第 4–6 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-structural-biology-16 ~ q-structural-biology-30）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：本平台《结构生物学实验方法》第 4–6 章教材正文常考点，
// 参照 Drenth《Principles of Protein X-ray Crystallography》与
// McPherson 结晶学教材
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const structuralBiologyQuizA2: QuizQuestion[] = [
  // ================= 第 4 章 蛋白质纯化的实验步骤与质量控制（q-structural-biology-16 ~ 20） =================
  {
    id: 'q-structural-biology-16',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch4',
    type: 'single',
    question: '关于大肠杆菌重组蛋白的细胞裂解操作，下列叙述正确的是：',
    options: [
      '超声裂解应连续输出 5 min 以上以提高释放效率',
      '高压均质通常在 1,000–2,000 psi 压力下通过 2–3 遍处理',
      '溶菌酶辅助裂解前须沸水浴激活酶活性',
      '裂解应在室温操作以维持蛋白酶活性',
    ],
    answer: 1,
    explanation:
      '超声裂解采用脉冲模式（10 s 开、50 s 关）并全程冰浴：连续输出会造成局部过热与空化自由基氧化，A 错误。高压均质的经典参数即 1,000–2,000 psi、2–3 遍，可温和释放 90% 以上目的蛋白，B 正确。溶菌酶无需激活，以 0.2–1 mg/mL 直接水解肽聚糖，C 错误。全程 4 °C 低温正是为了压制蛋白酶活性、稳定折叠态，D 错误。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-17',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch4',
    type: 'single',
    question: '纯化一个 30 kDa 的目的蛋白并需浓缩至 10 mg/mL，应选择的超滤离心管截留分子量（MWCO）及依据是：',
    options: [
      '3 kDa——越低越安全，截留更彻底',
      '10 kDa——取目的蛋白分子量的三分之一至二分之一，兼顾截留与流速',
      '30 kDa——与目的蛋白等值，效率最高',
      '100 kDa——孔径大、浓缩速度快',
    ],
    answer: 1,
    explanation:
      '超滤管 MWCO 的经验法则是取目的蛋白分子量的 1/3 至 1/2：30 kDa 蛋白选 10 kDa 管，既保证截留完全，又不因孔径过紧而流速过慢、浓差极化严重。3 kDa 管截留彻底但浓缩效率低下；30 kDa 管与目的蛋白等值会有明显渗漏；100 kDa 管则大量蛋白直接穿膜流失。B 正确。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-18',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch4',
    type: 'single',
    question: '需要在无需标准曲线与任何分子形状假设的前提下测定蛋白质的绝对分子量并判别其寡聚状态，最合适的分析手段是：',
    options: ['SDS-PAGE', '分析型分子筛层析', 'SEC-MALS', '动态光散射'],
    answer: 2,
    explanation:
      'SEC-MALS 在分子筛柱后串联多角度激光光散射与折光检测器：散射强度与摩尔质量成正比，测得的是绝对分子量（误差约 3–5%），不需要洗脱体积标准曲线、也不依赖分子形状假设，是判别同源二聚/四聚与复合物化学计量的标准手段。SDS-PAGE 给的是亚基分子量，分析型 SEC 只给依赖标准曲线的表现分子量，DLS 主要输出流体力学半径与 PDI。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-19',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch4',
    type: 'truefalse',
    question: '考马斯亮蓝染色可检出 1–10 ng 的蛋白条带，灵敏度高于银染，因此纯度鉴定一律应以考马斯为准。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '数值记反了：考马斯亮蓝的检出限约为 10–50 ng/条带，银染以银离子在蛋白上的选择性还原沉积把灵敏度提高约一个量级（1–10 ng），因此银染更灵敏而非考马斯。日常纯度鉴定（判断是否大于 95%）考马斯足够，追踪痕量杂质与降解片段才需要银染——两者是分工互补关系，「一律以考马斯为准」的结论不成立。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-20',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch4',
    type: 'multiple',
    question: '（多选题）判断一批纯化后的蛋白能否进入结晶筛选（第 5 章），常采用的「放行」质控判据包括：',
    options: [
      '分析型 SEC 单体峰占比大于 95%',
      'DLS 多分散性指数 PDI 小于 0.1 或至少小于 0.3',
      'SDS-PAGE 灰度扫描纯度大于 95%',
      '完整质量质谱确认分子量与理论值一致、标签切除干净',
      '将样品反复冻融三次后仍澄清，作为耐受力测试',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '结晶要求分子以相同表面周期堆积，故需四维证据放行：尺寸均一（SEC 单体峰占比大于 95%）、粒径分散性好（PDI 小于 0.1 优、0.3 可接受）、电泳纯度大于 95%、共价完整（质谱验证切点与修饰，每对二硫键使质量减少 2 Da）。反复冻融恰是被明令禁止的保存操作——它会诱发聚集与降解，不能作为质控手段，且「澄清」也不代表无寡聚体，E 错误。',
    difficulty: 3,
  },
  // ================= 第 5 章 蛋白质结晶的原理与实践（q-structural-biology-21 ~ 25） =================
  {
    id: 'q-structural-biology-21',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch5',
    type: 'single',
    question: '关于盐析效应的 Hofmeister 序列，下列阴离子促盐析能力由强到弱的排列正确的是：',
    options: [
      'Cl⁻ 大于 HPO₄²⁻ 大于 SO₄²⁻',
      'SO₄²⁻ 大于 HPO₄²⁻ 大于 Cl⁻',
      'HPO₄²⁻ 大于 SO₄²⁻ 大于 Cl⁻',
      '三种阴离子效力相同，仅阳离子排序有影响',
    ],
    answer: 1,
    explanation:
      'Hofmeister 序列反映离子「结构制造/破坏」能力：硫酸根高度水合、排阻蛋白表面水化层的能力最强，磷酸氢根次之，氯离子较弱；阳离子侧为 NH₄⁺ 大于 K⁺ 大于 Na⁺。这一排序直接指导沉淀剂选择——硫酸铵高居盐析剂榜首正是该序列的工程化体现，B 为正确排列。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-22',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch5',
    type: 'single',
    question: '在蛋白质结晶相图中，「亚稳区」（metastable zone）的核心特征是：',
    options: [
      '晶体投入后溶解，过饱和度最低',
      '只长不长核：已有晶体可以生长，但不能自发成核',
      '自发爆发大量成核，形成微晶簇',
      '蛋白以无定形形式沉淀析出',
    ],
    answer: 1,
    explanation:
      '亚稳区位于溶解度线与自发成核边界之间：过饱和已足以驱动晶体生长，却不足以翻越均相成核能垒——投入晶种可以养晶、不加晶种则液滴纹丝不动，故称「只长不长核」。这一特性使亚稳区成为晶种策略的目标工作区（把成核区造好的核移到这里养大）。其余三项分别描述不饱和区、成核区与沉淀区。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-23',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch5',
    type: 'single',
    question: '关于微晶种技术（microseeding）的操作与原理，下列叙述错误的是：',
    options: [
      '将母晶捣碎制成悬液后作 10⁻¹ 至 10⁻⁸ 的系列稀释',
      '本质是把成核与晶体生长两个环节人为解耦',
      '应在沉淀区条件下操作，借高过饱和加速晶核形成',
      '取稀释液加入预先平衡于亚稳区的新液滴，微晶核带动可控成核',
    ],
    answer: 2,
    explanation:
      'microseeding 的要点是「成核区造核、亚稳区养晶」：晶种绕过均相成核能垒，新液滴应预置于只长不长核的亚稳区，让引入的有限微晶核长成数量可控的大晶体；若在沉淀区操作，高过饱和同时驱动无序聚集，晶种反而成为聚集核心，C 与原理相悖。A、B、D 均为标准操作与正确表述。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-24',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch5',
    type: 'truefalse',
    question: '稀疏矩阵筛选由 Jancarik 与 Kim 于 1991 年提出，其经典矩阵的 48 个条件来自对当时已报道蛋白质结晶条件的统计归纳。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。1991 年 Jancarik 与 Kim统计了当时已见诸文献的蛋白质结晶条件，提炼出现频率最高的参数组合，浓缩为 48 个「高命中率」条件构成第一代稀疏矩阵；其哲学是承认溶解度理论的预测力有限，以经验的统计分布代替物理推导下注。今天的商品化屏幕（Index、PEG Rx、Ion Screen、Cryos 等）仍是这一思路的衍生品。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-25',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch5',
    type: 'multiple',
    question: '（多选题）关于脂立方相（LCP）结晶方法，下列叙述正确的有：',
    options: [
      '以单油酸甘油酯（monoolein）与蛋白溶液混合自发形成双连续立方相',
      '特别适用于膜蛋白的 in meso 结晶，是 GPCR 结构解析的主力方法',
      '脂质仅作惰性载体，不参与晶格接触与蛋白堆积',
      '沉淀剂经脂水网络中的水通道扩散进入，驱动结晶',
      '单次铺板需要 10–50 μL 量级的蛋白样品',
    ],
    answer: [0, 1, 3],
    explanation:
      'LCP 由 Caffrey 系统发展：monoolein 与蛋白按约 2:3 质量比混合形成脂水双连续立方相，膜蛋白在脂相中保持天然取向，沉淀剂经水通道扩散驱动 in meso 结晶；2007 年 β2 肾上腺素受体与 Fab 复合物的里程碑结构由此路线获得，此后成为 GPCR 主力。脂质并非惰性——其头部基团参与晶格接触，这正是 LCP 常给高衍射质量晶体的原因之一；配套机器人铺板仅需 50–200 nL 液滴，C、E 错误。',
    difficulty: 3,
  },
  // ================= 第 6 章 X射线衍射数据收集（q-structural-biology-26 ~ 30） =================
  {
    id: 'q-structural-biology-26',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch6',
    type: 'single',
    question: '实验室 Cu Kα 特征辐射波长为 1.5418 Å。按布拉格定律 2d sinθ = nλ，当衍射角达到 θ = 90°（sinθ = 1）时，理论可达的最小晶面间距 d_min 约为：',
    options: ['0.77 Å', '1.54 Å', '3.08 Å', '0.39 Å'],
    answer: 0,
    explanation:
      '由布拉格定律取 n = 1、sinθ = 1，得 d_min = λ/2 = 1.5418/2 ≈ 0.77 Å——这是给定波长下几何可达的分辨率极限。实际蛋白晶体数据受光束发散度、探测器几何与晶体镶嵌度限制，通常止步于 1.5–3 Å 区间。该关系同时说明波长越短（同步辐射可调至 1 Å 附近），几何上可达的 d_min 越小、分辨率越高。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-27',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch6',
    type: 'single',
    question: '关于 Ewald 反射球的构造，下列叙述正确的是：',
    options: [
      '反射球半径为 λ，晶体置于球心',
      '反射球半径为 1/λ，晶体置于球心，倒易点阵原点位于透射光束与球面的交点上',
      '倒易点阵原点位于球心，晶体位于球面上',
      '晶体静止不动时，所有倒易格点都满足布拉格条件',
    ],
    answer: 1,
    explanation:
      'Ewald 球以 1/λ 为半径、晶体位于球心；沿入射方向延长的透射束与球面的交点取作倒易点阵原点，任一倒易格点恰好落在球面上时，该 (hkl) 晶面族满足布拉格条件，衍射束沿球心指向该点的方向出射。晶体静止时仅极少数格点在球面上，必须旋转晶体带动倒易点阵扫过球面才能逐个「点亮」反射——这正是旋转法数据收集的几何依据，B 正确。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-28',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch6',
    type: 'single',
    question: 'Henderson 于 1995 年通过经典估算提出的蛋白质晶体衍射剂量极限约为：',
    options: ['2×10⁴ Gy', '2×10⁷ Gy（即 20 MGy）', '2×10¹⁰ Gy', '2×10² Gy'],
    answer: 1,
    explanation:
      'Henderson 1995 年估算蛋白晶体吸收约 2×10⁷ Gy（20 MGy）后衍射信息衰减到不可用，成为低温晶体学的剂量红线；后续实验（Owen 等，2006）把衍射强度衰减约 30% 处的经验上限放宽到约 30 MGy。实践中以 RADDOSE-3D 预算每帧吸收剂量，并留意特异性损伤的先后次序——二硫键断裂在 2–5 MGy 即可见，远早于全局极限。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-29',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch6',
    type: 'truefalse',
    question: 'CC1/2 是把衍射数据随机分为两半计算强度相关系数的指标，由 Karplus 与 Diederichs 于 2012 年提出，现已成为高分辨率截断的现代判据。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。CC1/2 将同一数据集的反射随机对半分组，计算两组强度（经成对重叠平均校正）的相关系数，直接度量最外壳信号在统计上是否仍可分辨；Karplus 与 Diederichs 2012 年论证其远比 I/σ(I) 阈值稳健，最外壳 CC1/2 约 0.3 即可保留有效信号。当前惯例以 CC1/2 为主、传统 I/σ(I) 大于 2 为辅，共同决定高分辨率截断点。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-30',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch6',
    type: 'multiple',
    question: '（多选题）某数据集处理报告显示：完整度 89%、最外壳 I/σ(I) = 1.4、最外壳 CC1/2 = 0.45、Rmeas 明显上升、镶嵌度 0.8°。合理的处置包括：',
    options: [
      '补充收集缺失的旋转范围，把完整度提回 95% 以上',
      '结合 CC1/2 与 I/σ(I) 综合权衡高分辨率截断点',
      '核查逐帧强度衰减曲线与剂量记录，评估辐射损伤的贡献',
      '指标问题不影响后续定相，直接输出 MTZ 交给第 7 章',
      'Rmeas 上升说明数据质量极佳，应保留全部最外壳数据',
    ],
    answer: [0, 1, 2],
    explanation:
      '完整度 89% 低于 95% 惯例，应补收旋转范围；最外壳 I/σ(I) = 1.4 低于传统阈值 2，但 CC1/2 = 0.45 仍高，说明该壳层尚有统计上可分辨的信号，宜两判据综合截断而非机械套用单一阈值；Rmeas 上升与镶嵌度 0.8° 偏高提示可能存在辐射损伤或晶格应变，应核查强度衰减与剂量记录（必要时退火或换晶重收）。带病直接进入定相或全盘保留噪声外壳都会污染相位与电子密度图，D、E 均不可取。',
    difficulty: 3,
  },
]
