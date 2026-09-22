// ============================================================
// BioScholar 电子显微学测验题库 - 批次 A2（第 4–6 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-electron-microscopy-16 ~ q-electron-microscopy-30）
// 题型：每章 single 3 / truefalse 1 / multiple 1
// 难度：每章 difficulty 1 一题、difficulty 2 三题、difficulty 3 一题
// 依据：本平台《电子显微学》教材第 4–6 章（散射与损伤物理、
// 室温制样、冷冻制样）常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const electronMicroscopyQuizA2: QuizQuestion[] = [
  // ================= 第 4 章 电子与样品的相互作用（q-16 ~ 20） =================
  {
    id: 'q-electron-microscopy-16',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch4',
    type: 'single',
    question: '关于电子与样品的弹性散射与非弹性散射，下列叙述正确的是：',
    options: [
      '弹性散射仅改变电子的运动方向而不损失能量，是衍射与相位衬度的来源',
      '弹性散射伴随明显的能量沉积，是辐射损伤的主要来源',
      '非弹性散射不改变电子能量，只贡献相位衬度',
      '两类散射的角分布完全相同，仅散射截面不同',
    ],
    answer: 0,
    explanation:
      '弹性散射中入射电子只被原子核与电子云的势场偏转、不损失能量，因而保持相干性，是电子衍射与相位衬度的物理来源；非弹性散射则把部分能量沉积于样品，既贡献电子能量损失谱的信号，也是辐射损伤的元凶。B 与 C 恰好把两者的角色对调；D 忽略了角分布的显著差异——弹性散射可达大角、非弹性集中于小角，这一几何差异正是明场与暗场配置及能量滤波设计的依据。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-17',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch4',
    type: 'single',
    question: '100–300 kV 的电子穿过生物样品（蛋白质、玻璃冰）时，弹性与非弹性散射平均自由程的典型量级分别为：',
    options: [
      '约 10 nm 与 5 nm',
      '约 100–300 nm 与 50–150 nm',
      '约 1 μm 与 500 nm',
      '两者均超过 10 μm',
    ],
    answer: 1,
    explanation:
      '低 Z 生物物质中两次散射之间的平均行进距离在百纳米量级：弹性平均自由程约 100–300 nm，非弹性约 50–150 nm——低 Z 材料中非弹性截面更大，经验上与弹性截面之比约为 20/Z。这一量级直接规定样品厚度预算：冰厚逼近平均自由程时多重散射显著、弱相位物体近似失效、非弹性背景抬升，故冷冻电镜追求约 100 nm 以内的薄冰。A 低了一个量级，C 与 D 则高估了一至两个数量级。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-18',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch4',
    type: 'truefalse',
    question:
      '液氮温度（约 100 K）能完全阻止生物样品的辐射损伤，因此冷冻电镜可以无限提高电子剂量来改善信噪比。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '低温只是「减速带」而非「免死金牌」：约 100 K 把自由基冻结在生成位点、抑制挥发与刻蚀，但被冻结的自由基陷阱仍随剂量累积，损伤并未停止。Henderson 1995 年的经典估算给出液氮温度下约 20 e⁻/Å² 的可用剂量极限，超过后高分辨率信息的折损快于信号累积；运动校正时代的实践预算也只放宽到约 40–60 e⁻/Å²。「无限提高剂量」与物理事实相反，故本题错误。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-19',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch4',
    type: 'multiple',
    question: '（多选题）电子与样品的非弹性相互作用包括下列哪些通道：',
    options: [
      '等离子体激发（约 10–25 eV）',
      '内壳层电离（如碳 K 边 284 eV、氧 K 边 532 eV）',
      '声子激发（低于 1 eV，宏观表现为样品升温）',
      '相干布拉格衍射',
    ],
    answer: [0, 1, 2],
    explanation:
      '非弹性散射按能量沉积通道分为三类：等离子体激发（价电子集体振荡，约 10–25 eV，是金属与半导体电子能量损失谱的主峰）、内壳层电离（产生碳 K 边 284 eV、氮 K 边 401 eV、氧 K 边 532 eV 等特征边，为元素谱学的基石）与声子激发（低于 1 eV，表现为热化升温）。相干布拉格衍射是弹性散射的相干叠加，不伴随能量损失，不属于非弹性通道，故前三项正确、末项错误。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-20',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch4',
    type: 'single',
    question:
      'Grant 与 Grigorieff 的剂量加权建立在高分辨信号随剂量指数衰减、B 因子每 e⁻/Å² 约增加 1–2 Å² 的测量之上。据此，下列关于「最优总剂量」的推论正确的是：',
    options: [
      '最优总剂量是无穷大，因为电子越多信噪比越高',
      '最优总剂量是零，因为任何剂量都损伤样品',
      '最优总剂量出现在信噪累积增益与损伤衰减的乘积极大处，冷冻单颗粒的实践标定值约为 40–60 e⁻/Å²',
      '最优总剂量只取决于相机帧率，与样品厚度和电压无关',
    ],
    answer: 2,
    explanation:
      '剂量同时驱动两股反向的力量：电子数随剂量线性累积、信噪比随之改善；损伤却使高分辨信号按指数折损（B 因子每 e⁻/Å² 约增 1–2 Å²，高分辨率信息最先衰减）。两者的乘积在中等剂量处取极大——对 200–300 kV 冷冻单颗粒，这个甜点被实践标定在约 40–60 e⁻/Å²，剂量加权即按帧给各频率赋予剂量相关的权重（早帧贡献高频、晚帧贡献低频）。A、B 各执一端，D 则忽略了样品厚度与多重散射对可用剂量的制约。',
    difficulty: 3,
  },
  // ================= 第 5章 生物样品制备：负染与超微结构技术（q-21 ~ 25） =================
  {
    id: 'q-electron-microscopy-21',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch5',
    type: 'single',
    question: '负染筛查中，若样品为对 pH 敏感且需尽量保持活性的酶颗粒，最应优先选用的染液是：',
    options: [
      '磷钨酸（PTA，pH 可用碱调至中性）',
      '醋酸铀（pH 约 4）',
      '甲酸铀（新鲜配制，pH 约 3.5–4）',
      '柠檬酸铅（Reynolds 配方）',
    ],
    answer: 0,
    explanation:
      '醋酸铀与甲酸铀均呈酸性（pH 约 3.5–4），会改变对 pH 敏感蛋白的构象甚至使其失活；磷钨酸的 pH 可用氢氧化钠调至中性附近，是对酸性环境敏感样品（如酶颗粒）的友好选择，其染料颗粒虽略粗于甲酸铀，却保全了样品状态。柠檬酸铅是超薄切片的双重后染配方，用于树脂切片增衬而不用于负染悬液，故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-22',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch5',
    type: 'single',
    question: '关于化学固定中戊二醛与四氧化锇的分工，下列叙述正确的是：',
    options: [
      '戊二醛固定脂质，四氧化锇交联蛋白',
      '戊二醛交联赖氨酸等伯氨基以稳定蛋白，四氧化锇固定脂质与不饱和键并提供电子密度',
      '两者都只提供电子密度，没有交联作用',
      '两者功能完全相同，任选其一即可',
    ],
    answer: 1,
    explanation:
      '双固定各司其职：戊二醛的两个醛基与赖氨酸等伯氨基形成交联，把可溶性蛋白网络化固定（25 °C、1–2 h 为常规条件）；四氧化锇与脂质的不饱和键加成、固定膜系结构，且锇原子序数高（Z=76），本身赋予膜结构电子密度。两者功能互补而不可互相替代——只用其一会分别丢失蛋白相或膜相的结构保存，A 把分工颠倒，C、D 均与事实不符，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-23',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch5',
    type: 'truefalse',
    question:
      '高压冷冻（HPF）以约 2100 bar 的高压抑制冰晶成核与结冰膨胀，可将有效冷冻深度提高到约 200 μm，并毫秒级「冻停」生理瞬态。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。常压 plunge freezing 只能玻璃化几微米的薄水膜，而 HPF 在约 2100 bar 下水的结冰膨胀被高压压制、成核与晶体生长显著受抑，配合液氮冷却的加压腔两侧夹击，可在毫秒级完成物理固定；以无可见冰晶为判据的有效深度可达约 200 μm（通常 100–200 μm），足以覆盖酵母、植物组织与小型模式生物器官，这正是「物理固定」对化学固定渗入延迟问题的正面回答。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-24',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch5',
    type: 'multiple',
    question: '（多选题）与冷冻固定相比，常规化学固定与树脂包埋流程常见的假象包括：',
    options: [
      '可溶性蛋白在固定剂到达前被抽提',
      '细胞与细胞器收缩',
      '微管等细胞骨架解聚',
      '样品玻璃化为非晶冰',
    ],
    answer: [0, 1, 2],
    explanation:
      '化学固定剂渗入组织需要秒到分钟，窗口期内可溶性蛋白自由流失（抽提）；渗透压失衡与交联反应引起细胞器收缩变形；未经戊二醛充分预固定的微管几乎必然解聚——这三项都是教科书级的化学固定假象，也正是高压冷冻-冷冻替代与 Tokuyasu 等物理固定路线的动机。玻璃化是冷冻固定的目标产物而非假象，且化学固定流程根本不经历玻璃化步骤，故末项错误。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-25',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch5',
    type: 'single',
    question:
      '拟对一种膜蛋白的胞外结构域做免疫胶体金双标记（5 nm 与 10 nm 金标记两种抗体），要求尽可能完整保留抗原性。最优的制样路线是：',
    options: [
      '戊二醛-四氧化锇双固定后 Epon 包埋，切片后标记（树脂包埋后路线）',
      'Tokuyasu 蔗糖嵌入冷冻切片后标记',
      '高压冷冻后直接 CEMOVIS 玻璃化切片观察',
      '负染后直接滴加抗体混合液',
    ],
    answer: 1,
    explanation:
      'Tokuyasu 法以约 2.3 M 蔗糖渗透嵌入、约 −90 °C 切片，不经过脱水、树脂包埋与 60 °C 热聚合，亲水基质中抗原表位暴露充分，是免疫金标记公认的首选平台；切片两侧表面皆可标记，5 与 10 nm 蛋白 A-金双标记也是标准操作。树脂包埋后标记效率典型仅 1–5%；CEMOVIS 结构原生度虽最高，但全程低温、以结构观察为目的，并非免疫标记载体；负染的空气干燥与酸性染液环境对抗原性是灾难，且染料包裹阻碍抗体接近，故选 B。',
    difficulty: 3,
  },
  // ================= 第 6 章 冷冻电镜样品制备（q-26 ~ 30） =================
  {
    id: 'q-electron-microscopy-26',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch6',
    type: 'single',
    question: 'plunge freezing 使用液态乙烷（而非液氮）作为制冷剂的核心理由是：',
    options: [
      '乙烷的温度比液氮更低',
      '液氮沸腾产生的绝缘气膜（Leidenfrost 效应）使界面换热速率远低于液态乙烷',
      '乙烷可与水互溶，靠溶解带走热量',
      '液氮会使样品立即玻璃化，无法控制冰厚',
    ],
    answer: 1,
    explanation:
      '液氮沸点 77 K，看似更冷，但样品接触瞬间表面生成的氮气膜（膜态沸腾，即 Leidenfrost 效应）如同隔热毯，实测冷却速率反而低下；经液氮冷却至熔点附近（约 90 K）的液态乙烷保持液-液接触、无气膜阻隔，换热速率高出约一个数量级，配合薄水膜两侧散热方能达到 10⁵–10⁶ K/s 量级的冷却速率、越过纯水玻璃化的门槛。乙烷不与水互溶，液氮更不会使样品「立即玻璃化」，故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-27',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch6',
    type: 'single',
    question: '冷冻单颗粒电镜中常用的 Quantifoil R1.2/1.3 多孔碳膜，其规格数字的含义是：',
    options: [
      '膜厚 1.2 nm、孔深 1.3 nm',
      '孔径 1.2 μm、孔间距 1.3 μm',
      '每英寸 1.2 千孔、碳杆宽 1.3 μm',
      '支持膜两侧碳层厚度分别为 1.2 nm 与 1.3 nm',
    ],
    answer: 1,
    explanation:
      'Quantifoil 以「R 孔径/间距」命名其光刻工艺制成的规整孔阵：R1.2/1.3 即孔径 1.2 μm、孔间距 1.3 μm。冰膜悬于孔中自支持，颗粒包在冰内、远离碳界面，背景散射低且不受碳表面吸附的取向偏置，是单颗粒数据收集的主流规格。膜厚为数十纳米量级，mesh 才是载网网孔密度的计量单位，碳层厚度与孔阵规格无关——A、C、D 均属张冠李戴，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-28',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch6',
    type: 'truefalse',
    question:
      '玻璃冰一旦升温至约 136–160 K 区间，将发生不可逆的反玻璃化（重结晶为结晶冰）；因此冷冻样品从制样到成像的全链路须保持在约 130 K 以下。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。约 136–160 K 是玻璃冰的反玻璃化温度区间：升温至此，非晶冰将在数十秒内重结晶为立方冰等结晶相，过程不可逆，颗粒结构与衬度随之报废。因此载盒、冷冻传输杆、冷台与换样机构的全链路都必须把样品压在约 130 K 以下，且电子束的高剂量还会降低有效阈值、诱发束致结晶，须一并纳入剂量管理；这也是防霜（环境水汽在冷载网上凝华）与低温操作规程的物理依据。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-29',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch6',
    type: 'multiple',
    question: '（多选题）针对空气-水界面（AWI）导致的颗粒变性与优势取向，下列属于有效对策的有：',
    options: [
      '添加痕量氟化去垢剂（约 0.01–0.1 mM）在气液界面形成保护膜',
      '使用 UltrAuFoil 金箔载网',
      '以 Ni-NTA 亲和网格锚定 His 标签蛋白，使其脱离界面',
      '延长滤纸 blot 时间，让颗粒有更多时间在界面上「适应」',
    ],
    answer: [0, 1, 2],
    explanation:
      'AWI 对策的共同思路是「隔离或缩短颗粒与界面的接触」：氟化去垢剂以氟碳链在气液界面成膜、把蛋白与界面隔开（D’Imprima 与 Kühlbrandt 等人的系统研究确立了约 0.01–0.1 mM 的有效浓度窗口）；UltrAuFoil 金箔的界面吸附行为更弱，并兼具束致运动小的优势；亲和网格以 Ni-NTA 抓 His 标签蛋白，主动把颗粒锚定在膜上脱离界面。延长 blot 恰恰增加颗粒暴露于界面的时间、加剧吸附与变性，方向完全相反，故前三项正确、末项错误。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-30',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch6',
    type: 'single',
    question:
      '300 kV 冷冻单颗粒数据中，某批次载网的冰厚普遍达到约 400 nm。结合散射物理与剂量管理，最可能出现的问题是：',
    options: [
      '电子完全无法穿透样品，图像一片全黑',
      '多重散射显著、弱相位物体近似失效，非弹性背景抬升，衬度与 CTF 解释的可靠性同时恶化',
      '颗粒将自动获得全角度均匀取向，重构不再担心缺失锥',
      '剂量极限自动翻倍，可以放心采集 100 e⁻/Å² 以上的数据',
    ],
    answer: 1,
    explanation:
      '100–300 kV 电子在生物物质中的平均自由程仅约百纳米量级（非弹性约 50–150 nm）：400 nm 厚冰中电子经历显著多重散射，弱相位物体近似失效、CTF 的线性解释不再可靠；非弹性散射累积的背景同时抬升、信噪比下滑。300 kV 电子仍可穿透 400 nm 冰（并非「全黑」），能量过滤可部分缓解背景但治标不治本，正解是回炉缩短 blot、调整湿度把冰做薄。冰厚与角度分布、剂量极限均无「自动变好」的关系，后三项分别夸大、颠倒或背离物理事实。',
    difficulty: 3,
  },
]
