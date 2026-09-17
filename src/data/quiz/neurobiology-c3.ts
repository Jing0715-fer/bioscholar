// ============================================================
// BioScholar 神经生物学测验题库 - 批次 C3（第 11–12 章）
// 覆盖 2 章，每章 5 题，共 10 题（q-neurobiology-51 ~ q-neurobiology-60）
// 题型：single 7 / truefalse 2 / multiple 1
// 难度：1（基础识记）3 / 2（理解应用）5 / 3（综合分析）2
// 依据：寿天德《神经生物学》（第3版）、许绍芬《神经生物学》、
// Kandel《Principles of Neural Science》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

// 注：neurobiology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const NEUROBIOLOGY = 'neurobiology' as unknown as QuizQuestion['subjectId']

export const neurobiologyQuizC3: QuizQuestion[] = [
  // ================= 第 11 章 自主神经与神经内分泌（q-neurobiology-51 ~ 55） =================
  {
    id: 'q-neurobiology-51',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch11',
    type: 'single',
    question: '关于自主神经的递质与受体配置，正确的是：',
    options: [
      '节前纤维（交感与副交感）均释放乙酰胆碱作用于神经节烟碱型受体；交感节后纤维多释放去甲肾上腺素，但支配汗腺者为胆碱能',
      '交感节前纤维释放去甲肾上腺素作用于神经节烟碱型受体，节后纤维一律释放乙酰胆碱',
      '副交感节后纤维释放去甲肾上腺素，作用于效应器的毒蕈碱型受体',
      '汗腺只受交感肾上腺素能纤维支配，故胆碱能药物完全不能促进发汗',
    ],
    answer: 0,
    explanation:
      '自主传出遵循统一的化学编码：全部节前纤维释放乙酰胆碱，作用于神经节神经元的烟碱型（N 型）受体；交感节后纤维多数释放去甲肾上腺素作用于 α 与 β 肾上腺素受体，副交感节后纤维释放乙酰胆碱作用于毒蕈碱型（M 型）受体。汗腺是经典例外：其交感节后纤维为胆碱能，经 M3 受体驱动发汗，故阿托品抑制发汗而拟胆碱药促进发汗。肾上腺髓质嗜铬细胞亦受节前胆碱能（烟碱受体）支配，分泌肾上腺素与去甲肾上腺素入血。',
    difficulty: 1,
  },
  {
    id: 'q-neurobiology-52',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch11',
    type: 'single',
    question: '关于下丘脑与垂体的结构功能关系，正确的是：',
    options: [
      '视上核与室旁核大细胞神经元的轴突直达神经垂体，动作电位触发 ADH 与催产素释放入血；小细胞神经元经正中隆起与垂体门脉调控腺垂体',
      'ADH 与催产素由腺垂体的嗜碱细胞合成，经门脉逆向运至下丘脑释放',
      '垂体门脉的功能是把腺垂体激素送回下丘脑实现短环反馈，故下丘脑激素不经此通路',
      '神经垂体由腺上皮构成，可自行合成生长激素与催乳素等七种垂体激素',
    ],
    answer: 0,
    explanation:
      '下丘脑对垂体的控制分两套系统：大细胞系统（视上核与室旁核）的轴突沿漏斗下行终止于神经垂体，激素贮存于末梢的大致密核心囊泡，动作电位引起钙内流后胞吐入血，故神经垂体只是下丘脑的延伸而非腺体；小细胞系统（促垂体区）的轴突仅达正中隆起，将 TRH、CRH、GnRH、GHRH、SST 与多巴胺释入第一级毛细血管丛，经垂体门脉作用于腺垂体七种激素细胞。腺垂体合成 GH、PRL、TSH、ACTH、LH、FSH 与 MSH，与选项中的错误叙述相反。',
    difficulty: 2,
  },
  {
    id: 'q-neurobiology-53',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch11',
    type: 'truefalse',
    question:
      '急性短时应激可一过性增强固有免疫与 NK 细胞活性并使白细胞向体表再分布；慢性应激则因皮质醇持续升高而抑制细胞免疫，表现为胸腺萎缩、淋巴细胞凋亡增加与上呼吸道感染易感性升高。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '应激对免疫的作用呈时间双相性。急性应激时皮质醇与儿茶酚胺短暂升高，NK 活性增强、白细胞向皮肤黏膜等易损部位再分布，相当于为可能的外伤与感染预置防线；慢性应激的持续高皮质醇则抑制 Th1 细胞免疫、促进淋巴细胞凋亡、使胸腺与淋巴结萎缩，人群研究显示长期照料者疫苗抗体反应减弱、心理应激高分者上呼吸道感染风险升高。这一双向规律是 Selye 三期理论与稳态负荷概念在免疫层面的直接体现。',
    difficulty: 2,
  },
  {
    id: 'q-neurobiology-54',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch11',
    type: 'single',
    question: '关于整夜睡眠结构与各期特征，正确的是：',
    options: [
      '每夜约 4–6 个周期、每周期约 90 分钟；前半夜 N3 慢波睡眠富集，后半夜 REM 比例递增；REM 期骨骼肌张力显著低下而眼球快速运动',
      'REM 睡眠集中于入睡后最初两小时，后半夜几乎全部为 N3 慢波睡眠',
      '睡眠纺锤波与 K 复合波是 REM 期区别于 NREM 的标志脑电活动',
      '一夜之间 N3 与 REM 的比例恒定，不随昼夜时段或睡眠深度变化',
    ],
    answer: 0,
    explanation:
      '整夜睡眠由 NREM 与 REM 交替构成周期，每周期约 90 分钟、每夜约 4–6 个：前半夜以 N3 慢波睡眠为主，后半夜 REM 比例渐增，与体力恢复及情绪记忆加工的时间分工相符。睡眠纺锤波与 K 复合波是 N2 期的标志，REM 的三联特征为去同步化低幅快波脑电、快速眼动与全身骨骼肌失张力（脑干抑制通路使 α 运动神经元超极化）。剥夺后各自反弹也说明两类睡眠具有独立的稳态需求。',
    difficulty: 2,
  },
  {
    id: 'q-neurobiology-55',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch11',
    type: 'single',
    question: '关于睡眠压力的产生与睡眠功能的机制，正确的是：',
    options: [
      '觉醒期腺苷在基底前脑累积构成睡眠压力，咖啡因经拮抗腺苷受体而掩蔽睡意；突触稳态假说主张慢波睡眠将突触强度整体降标定，并与 NREM 期海马—皮层耦合的记忆巩固相辅相成',
      '咖啡因通过加速腺苷的酶促降解清除睡眠债，故午后饮用不影响夜间睡眠',
      '突触稳态假说主张睡眠期突触强度净增加，为次日的海量学习预留容量',
      '腺苷由松果体在黑暗期分泌，其受体即褪黑素的 MT1 与 MT2 受体',
    ],
    answer: 0,
    explanation:
      '清醒时代谢产生的腺苷在基底前脑渐进累积，经 A1 与 A2A 受体抑制觉醒系统，形成随清醒时长增长的睡眠压力；咖啡因作为腺苷受体拮抗剂阻断该信号，属「掩蔽」而非「清除」睡眠债，其半衰期约 3–5 小时，午后仍可侵扰夜间睡眠。突触稳态假说主张觉醒使突触净增强、慢波睡眠将其按比例下调以保信噪比与可塑性容量，与 NREM 期海马锐波涟漪同皮层慢波、纺锤波耦合所实现的陈述性记忆巩固互补而非对立。腺苷与褪黑素分属不同的睡眠调节系统。',
    difficulty: 3,
  },
  // ================= 第 12 章 脑的发育与神经疾病（q-neurobiology-56 ~ 60） =================
  {
    id: 'q-neurobiology-56',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch12',
    type: 'single',
    question: '神经诱导「默认模型」的核心内容是：',
    options: [
      '外胚层在无诱导信号时默认走向神经命运，BMP 信号将其推向表皮；组织者分泌 noggin、chordin 等 BMP 拮抗剂解除抑制，神经板得以形成',
      '组织者直接分泌神经递质样分子，使外胚层细胞兴奋并转化为神经组织',
      'BMP 浓度最高的背侧中线形成神经板，浓度最低的腹侧形成表皮',
      '神经诱导由 Hox 基因沿前后轴的梯度表达直接启动，无需可扩散信号',
    ],
    answer: 0,
    explanation:
      'Spemann 与 Mangold 的组织者移植实验诱导出次级神经轴，但组织者并非「制造」神经组织，而是发出信号改变外胚层命运。默认模型指出：外胚层默认分化为神经，BMP 信号使其转向表皮；组织者分泌 noggin、chordin、follistatin 等 BMP 拮抗剂，在中背侧中和 BMP，神经板因此在去抑制处形成——诱导的本质是去抑制。小鼠中单独剔除拮抗剂使神经组织缩减、联合缺失则诱导近乎废除，Hox 基因负责的只是后续的前后轴区域化而非诱导本身。',
    difficulty: 1,
  },
  {
    id: 'q-neurobiology-57',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch12',
    type: 'single',
    question: '关于大脑皮层六层的生成时序，正确的是：',
    options: [
      '生成序为 inside-out：最早生成的神经元定居深层的第 VI、V 层，晚生者跨越先到者定位于浅层第 III、II 层；迁移终点由 Cajal-Retzius 细胞分泌的 reelin 裁定',
      '皮层分层为 outside-in：浅层最先形成，深层随后由外向内逐步补充',
      '六层神经元分别起源于软膜面的神经嵴细胞，独立迁入皮层板',
      '晚生神经元无法穿越深层居民，故各层的出生日期与层序完全无关',
    ],
    answer: 0,
    explanation:
      '同位素与病毒标记的出生日期实验确证皮层「由内向外」的生成序：早生的神经元留在深层的第 VI 与第 V 层（含皮层脊髓神经元），晚生的神经元沿放射状胶质跨越先辈，定居于浅层的第 III 与第 II 层；在最外缘，Cajal-Retzius 细胞分泌的 reelin 经 ApoER2/VLDLR 与 Dab1 使迁移「刹车」而完成分层。reeler 小鼠因 reelin 缺乏致层序大体颠倒与小脑发育不良，从反面证明了该信号对 inside-out 层序的必要性。',
    difficulty: 2,
  },
  {
    id: 'q-neurobiology-58',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch12',
    type: 'single',
    question: '关于阿尔茨海默病的遗传学与治疗，正确的是：',
    options: [
      '家族性突变位于 APP 与早老素 PS1/PS2，多经提高 Aβ42 产量或比例致早发；APOE4 为散发性最重要的风险等位基因；胆碱酯酶抑制剂仅能对症',
      'APOE2 等位基因是散发性病例中最重要的危险因素，APOE4 反而具保护性',
      '早老素突变降低 Aβ42 的生成比例，从而减缓淀粉样斑块的形成速度',
      '多奈哌齐等胆碱酯酶抑制剂可清除 Aβ 斑块并逆转认知衰退的病程',
    ],
    answer: 0,
    explanation:
      '家族性 AD 的三个主要位点为 APP（位于 21 号染色体，故唐氏综合征患者早现 AD 病理）与早老素 1、2（γ 分泌酶催化亚基），其突变均提高 Aβ42 的产生或比例而致 30–60 岁发病；散发病例最重要的遗传风险是 APOE4（提高风险并提前发病，APOE2 具保护性）。胆碱能假说导出的胆碱酯酶抑制剂（多奈哌齐、卡巴拉汀、加兰他敏）与美金刚均为对症治疗，可改善症状数月至数年但不能阻止病程；近年靶向 Aβ 原纤维的抗体提示早期干预的时间窗价值。',
    difficulty: 2,
  },
  {
    id: 'q-neurobiology-59',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch12',
    type: 'truefalse',
    question:
      'Wallerian 变性指周围神经轴突切断后，远侧断段的轴突与髓鞘崩解并被施万细胞与巨噬细胞清运，施万细胞随后沿基底膜管形成 Büngner 带，为再生轴突提供引导轨道的现象。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'Wallerian 变性发生于离断的远侧段（与胞体相连的近侧段主体保留）：轴突碎裂、髓鞘崩解，去分化的施万细胞协同巨噬细胞清除碎片，并沿保留的基底膜管排列成 Büngner 带、重新表达黏附分子与营养因子，构成再生轴突攀爬的轨道；近侧断端的芽生纤维以每日约 1–3 mm 沿此推进。Wld 突变小鼠轴突退变异常缓慢，进一步说明变性本身是可干预的主动程序。选项叙述与该定义完全一致。',
    difficulty: 1,
  },
  {
    id: 'q-neurobiology-60',
    subjectId: NEUROBIOLOGY,
    chapterId: 'neurobiology-ch12',
    type: 'multiple',
    question: '成年中枢神经系统轴突再生困难的环境与内在因素包括（多选）：',
    options: [
      '髓鞘源性抑制物 Nogo-A、MAG 与 OMgp 经 NgR 受体复合体与 RhoA-ROCK 通路诱导生长锥坍缩',
      '损伤区胶质瘢痕中的硫酸软骨素蛋白聚糖构成化学屏障，软骨素酶 ABC 降解后动物模型的轴突跨越改善',
      '成年 CNS 局部缺乏 NGF、BDNF、GDNF 等生长因子支持，且成熟神经元的内在生长程序随发育下调',
      '中枢神经元胞体在损伤后立即溶解，不存在任何轴突再生或芽生的尝试',
      '小胶质细胞经补体 C1q 与 C3 进行的突触修剪，是中枢轴突不能再生的首要环境因素',
      '髓鞘碱性蛋白 MBP 是促进中枢轴突再生的关键因子，损伤后其表达升高利于修复',
    ],
    answer: [0, 1, 2],
    explanation:
      '中枢再生障碍的经典归纳为三因素：残留髓鞘中的 Nogo-A、MAG 与 OMgp 经 NgR 复合体（含 LINGO-1 与 p75/TROY）激活 RhoA-ROCK 使生长锥坍缩，封闭 Nogo 途径在脊髓损伤模型中促再生；反应性星形胶质细胞瘢痕分泌的硫酸软骨素蛋白聚糖（CSPG）构成化学屏障，软骨素酶 ABC 可改善跨越；局部生长因子缺乏加上 mTOR、STAT3 等内在生长程序的发育性下调，使成熟神经元「心有余而力不足」。补体 C1q/C3 介导的是突触修剪而非轴突再生障碍；中枢神经元损伤后仍可芽生，只是难以长距离延伸，故后三项均不正确。',
    difficulty: 3,
  },
]
