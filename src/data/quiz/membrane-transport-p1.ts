// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 批次 P1（第 1–2 章）
// 10 题（q-membrane-transport-1 ~ q-membrane-transport-10），每章 5 题
// 题型：single 7 / truefalse 2 / multiple 1；难度 1:2:3 = 2:5:3
// 教材依据：Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 ·
// Taiz & Zeiger《Plant Physiology》第6版，及本学科第 1–2 章教材正文
// Task ID: 46-b1
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const membraneTransportQuizP1: QuizQuestion[] = [
  // ================= 第 1 章 膜与转运总论（q-membrane-transport-1 ~ 5） =================
  {
    id: 'q-membrane-transport-1',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch1',
    type: 'single',
    question: '关于磷脂双分子层对物质的通透性，下列叙述正确的是：',
    options: [
      '疏水核心对离子近乎密封，Na⁺ 自发跨越纯脂双层的半衰期以小时乃至天计，这正是通道与泵存在的物理动因',
      '水分子因体积小而被完全封死，任何情况下都只能经水通道蛋白穿越',
      '葡萄糖分子量小且不含净电荷，可以较快地直接溶入脂相自由扩散',
      '离子可以随磷脂的翻转运动快速「搭车」过膜，因此膜仍具相当通透性',
    ],
    answer: 0,
    explanation:
      '脂双层疏水核心对带电离子的能垒极高，Na⁺ 或 K⁺ 自发跨膜半衰期以小时–天计，细胞毫秒级信号等不起，必须由通道与泵代运，A 正确。水分子小而极性，跨纯脂双层慢但并非为零，红细胞即有基础水渗透性，B 过绝对；葡萄糖多羟基强亲水，几乎不能直接穿膜，须 GLUT 等载体易化扩散，C 错；磷脂翻转运动半衰期小时–天且不携带溶质，D 错。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-2',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch1',
    type: 'truefalse',
    question:
      '动物与植物细胞都以胆固醇作为膜流动性的主要调节剂：动物质膜中胆固醇可占脂质的 30%–50%，植物膜中胆固醇比例更高。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。胆固醇是动物膜的专属流动性调节剂，在红细胞等质膜脂质中可占 30%–50%；植物不合成胆固醇，代之以谷甾醇、豆甾醇、菜油甾醇等植物甾醇，其总量与占比通常低于动物膜的胆固醇。两类固醇功能同源——均把相变展宽、稳定流动窗口——但化学骨架不同：植物甾醇侧链多乙基或双键，人体肠道也几乎不吸收它们。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-3',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch1',
    type: 'single',
    question: '关于转运自由能与 Nernst 方程，下列叙述正确的是：',
    options: [
      'ΔG = RT ln(C₂/C₁) + zFV 只适用于带电离子，对中性分子无法使用',
      '25 ℃ 时 RT/F ≈ 25.7 mV，故每 10 倍浓度差约折合 59 mV 的电位当量',
      '离子顺电化学梯度移动时 ΔG 大于零，必须由 ATP 直接供能才能进行',
      'Nernst 方程给出的是细胞膜的实际膜电位，与离子种类和浓度比无关',
    ],
    answer: 1,
    explanation:
      '对中性分子 z = 0，ΔG 公式自动退化为纯浓度项，照样可用，A 错；十倍浓度差对应 RT ln10 = 2.303RT/F ≈ 59 mV（25 ℃），浓度项与电压项由此可放在同一把尺上比较，B 正确；顺电化学梯度时 ΔG 小于零、自发进行，无需直接耗能，C 错；Nernst 方程给出的是该离子的平衡电位（净流为零时的膜电位），随离子种类与两侧浓度比而变，并非实际膜电位，D 错。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-4',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch1',
    type: 'multiple',
    question: '下列关于三类转运蛋白（通道、载体、泵）的叙述，正确的有：',
    options: [
      '通道开放时离子通过速率可达 10⁷–10⁸ 个/s，且速率与驱动力成比例、不表现饱和动力学',
      '载体转运遵循米氏饱和动力学，速率约 10²–10⁴ 分子/s，可被底物类似物竞争性抑制',
      '动物 Na⁺/K⁺-ATPase 与植物 P3A H⁺-ATPase 都是直接水解 ATP 的泵，但建立的次级转运货币分别是 Na⁺ 梯度与 H⁺ 梯度（PMF）',
      '由于植物膜电位更深，植物不依赖任何载体，全部矿质养分都经离子通道吸收',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 分别对应通道的不饱和高速率、载体的米氏动力学与竞争抑制、以及动物 Na⁺ 币对植物 H⁺ 币的主引擎对照，均正确。D 恰恰相反：通道只能顺梯度且无化学计量，无法把土壤中 0.1–1 mmol/L 的 NO₃⁻、K⁺ 逆浓差抽进并积累到毫摩尔级——植物为此配备超过 1000 个转运基因（约占基因组 3%–4%），NPF 53 个、KUP/HAK 等载体才是吸收主力，故 D 不选。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-5',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch1',
    type: 'single',
    question: '关于动物与植物细胞「主引擎」及相关参数的对照，正确的是：',
    options: [
      '动物 Na⁺/K⁺-ATPase 每水解一分子 ATP 泵出 2 个 Na⁺、泵入 3 个 K⁺，因而不具生电性',
      '植物质膜 P3A H⁺-ATPase 以 1:1 计量泵出 H⁺，可把膜电位拉到 −120~−250 mV，并把质外体酸化到约 pH 5.5',
      '动物与植物细胞的静息膜电位都在 −30~−90 mV 之间，两者量级相同',
      '植物的次级转运以 Na⁺ 梯度为主要能量货币，与动物完全一致',
    ],
    answer: 1,
    explanation:
      'A 的计量写反：实际为 3 Na⁺ 出、2 K⁺ 入，净外移一个正电荷故生电；C 忽略关键量级差——动物 −30~−90 mV，植物因 H⁺-ATPase 超极化普遍达 −120~−250 mV；D 也反了：植物的通用货币是 H⁺ 梯度与 PMF，Na⁺ 循环（HKT、SOS1）只在盐胁迫等特定场景出场。B 的计量、电位量级与质外体 pH 5.5 均正确，故选 B。',
    difficulty: 2,
  },
  // ================= 第 2 章 离子通道：孔道、门控与超家族（q-membrane-transport-6 ~ 10） =================
  {
    id: 'q-membrane-transport-6',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch2',
    type: 'single',
    question: 'KcsA 钾通道对 K⁺ 的高度选择性（K⁺:Na⁺ 超过 10 000:1）主要由什么决定？',
    options: [
      '孔道入口处的 ATP 水解循环把 Na⁺ 逐一筛选并排出',
      '选择性滤器主链羰基排成约 3 Å 孔径的氧环，恰容脱水 K⁺，并以羰基氧模拟水化壳补偿脱水能耗',
      '通道以约 12:1 的比例同时放行 Na⁺ 与 K⁺，再由细胞侧的泵回收 Na⁺',
      'K⁺ 与 Na⁺ 的裸半径完全相同，选择性只取决于胞内离子浓度',
    ],
    answer: 1,
    explanation:
      'KcsA 滤器由保守 TVGYG 序列的主链羰基构成四个串联结合位点，几何上恰配脱水 K⁺（约 3 Å）；K⁺ 脱去水化壳的能量损失被羰基氧的精确配位补偿——以水代水，故 B 正确。该通道顺梯度转运、不需 ATP，A 错；12:1 的宽松选择比属于 Nav 的 DEKA 滤器而非 KcsA，C 错；两种离子裸半径差约 0.4 Å，恰是几何筛分的物理基础，D 错。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-7',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch2',
    type: 'single',
    question: '关于电压门控通道的电压传感器与门控电荷，正确的是：',
    options: [
      'S4 螺旋每隔约 3 个残基带一个酸性残基，超极化时向胞内侧滑动开门',
      'S4 螺旋每隔约 3 个残基带一个精氨酸，去极化时在电场中旋转外移，Nav 每通道门控电荷总量约 12–16 个元电荷',
      '电压传感器域独立成孔，与孔道域之间没有任何力学偶联',
      '电压门控完全不依赖跨膜电场，只由胞外配体结合驱动',
    ],
    answer: 1,
    explanation:
      'S4 每隔 3 个残基出现的带电残基是精氨酸（正电荷）而非酸性残基；去极化翻转电场后正电荷被拉向外侧，S4 以滑移螺旋或螺旋桨方式旋转上移，经 S4–S5 连接螺旋把运动传给孔道闸门，每通道位移电荷 Nav 约 12–16 e、Kv 约 3–13 e，几毫伏电位变化即可显著改变开放概率，故 B 正确。C 否认了传感器与孔道的偶联，D 则把电压门控与配体门控混为一谈。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-8',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch2',
    type: 'truefalse',
    question:
      '植物 KAT1 与动物 Shaker 型 Kv 通道同为去极化激活的电压门控 K⁺ 通道，因此在生理上都介导 K⁺ 外流、负责动作电位的复极。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。门控极性相同不等于离子流方向相同——流向由电化学驱动力决定。植物静息电位深达 −200 mV 级，KAT1 虽在去极化（仍相当深负）时开放，驱动力却指向胞内，故介导内向 K⁺ 流，是气孔开放时保卫细胞吸钾的主力；动物静息约 −70 mV，去极化激活的 Kv 开门放 K⁺ 外流复极。分子逻辑相同、生理用法相反，这正是「共有家族、用法不同」的教科书案例，关键变量是两侧的膜电位语境。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-9',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch2',
    type: 'single',
    question: '关于动物与植物同源通道家族「同源不同用法」的叙述，不正确的是：',
    options: [
      '动物 TPCN1/2 是溶酶体 Na⁺ 通道，植物 TPC1 是液泡膜上受电压与 Ca²⁺ 双重门控的 SV 通道——同源不同胞器与离子',
      '植物 AtCLCa 已由通道演化为 2NO₃⁻/H⁺ 反向转运体，与动物 ClC-3/4/5 的 2Cl⁻/H⁺ 交换功能趋同——通道与转运体边界被抹掉',
      '植物 GLR 与动物 iGluR 同源，但配体放宽为多种氨基酸，功能转向防御钙信号与根尖发育',
      '动物 connexin 半通道与植物胞间连丝由同一基因家族编码，属于严格的序列同源蛋白',
    ],
    answer: 3,
    explanation:
      'A、B、C 均为「共有家族用法分化」的教科书案例：TPC1 在两界分别定居溶酶体与液泡、离子选择分道；AtCLCa 与动物 ClC-3/4/5 同样跨过通道/转运体边界；GLR 是 iGluR 的植物职业改写版。D 不正确——植物胞间连丝是内质网穿过细胞壁的细胞质桥，由细胞壁与内质网结构改造而成，并非通道蛋白多聚体，与 connexin 只有细胞间直通的功能对应，没有序列同源关系。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-10',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch2',
    type: 'single',
    question: '关于含羞草与捕蝇草等植物的动作电位，正确的是：',
    options: [
      '升支由 Nav 通道介导的 Na⁺ 内流产生，与动物神经元的机制完全相同',
      '升支主要由 Cl⁻ 等阴离子外流产生，复极由 K⁺ 外流与 H⁺-ATPase 共同完成，质膜上并无 Nav/Cav',
      '植物动作电位的传导速度与动物有髓纤维同为 70–120 m/s',
      '植物的长距离电信号与 Ca²⁺ 波毫无关联，仅靠局部电位被动衰减传播',
    ],
    answer: 1,
    explanation:
      '植物缺乏 Nav 与 Cav，动作电位升支改由去极化激活的阴离子通道外流 Cl⁻ 与苹果酸根承担（负电荷外流使膜去极化），复极由 K⁺ 外流与质子泵酸化共同完成——ATP 直接参与复极是植物电信号的独门做法，B 正确。其传播速度以厘米每秒计，比动物有髓纤维慢约三个数量级；长距离信号常与 GLR/CNGC 介导的钙波沿维管束接力放大，C、D 均错。',
    difficulty: 3,
  },
]
