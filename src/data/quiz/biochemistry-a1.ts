// ============================================================
// BioScholar 生物化学测验题库 - 批次 A1（第 1–3 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-biochemistry-1 ~ q-biochemistry-15）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：王镜岩《生物化学》（第4版）、Lehninger《Principles
// of Biochemistry》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const biochemistryQuizA1: QuizQuestion[] = [
  // ================= 第 1 章 糖类化学（q-biochemistry-1 ~ 5） =================
  {
    id: 'q-biochemistry-1',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'single',
    question: '新配制的 α-D-葡萄糖水溶液比旋光度为 +112°，放置后逐渐下降并稳定于 +52.7°。关于这一现象，正确的解释是：',
    options: [
      '葡萄糖发生水解，生成分子量更小的产物',
      'α 与 β 两种环状异头物经开链中间体互变，最终建立动态平衡',
      '葡萄糖被空气氧化为葡糖酸',
      '葡萄糖发生聚合，生成分子量更大的寡糖',
    ],
    answer: 1,
    explanation:
      '该现象即变旋现象（mutarotation）。α-D-吡喃葡萄糖初值 +112°、β 异头物初值 +18.7°，两者在水中经开链的微量中间体互变，最终建立 α 约 36%、β 约 64%、开链不足 1% 的平衡混合物，表观比旋光稳定于 +52.7°。变旋存在的结构前提是异头碳上有游离的半缩醛羟基；蔗糖的两个异头碳均参与糖苷键，故无变旋现象。水解、氧化与聚合均不是其原因。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-2',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'single',
    question: '关于蔗糖、麦芽糖与乳糖三种二糖，下列叙述错误的是：',
    options: [
      '蔗糖由葡萄糖与果糖以 α(1→2)β 糖苷键连接，是非还原糖',
      '麦芽糖由两分子葡萄糖以 α-1,4 糖苷键连接，是还原糖',
      '乳糖由半乳糖与葡萄糖以 β-1,4 糖苷键连接，是还原糖',
      '三种二糖都保留游离的半缩醛羟基，因此都有变旋现象',
    ],
    answer: 3,
    explanation:
      '判断二糖还原性的唯一结构标准是是否存在游离的异头碳羟基（半缩醛羟基）。麦芽糖与乳糖各有一个异头碳保持游离，故为还原糖并具变旋性；蔗糖的葡萄糖 C-1 与果糖 C-2 两个异头碳全部参与糖苷键，既无还原性也无变旋现象，D 项以偏概全故错误。其余三项均准确描述了三种二糖的组成与连接方式。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-3',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'truefalse',
    question:
      '淀粉与纤维素均以葡萄糖为构件，二者的本质区别在于糖苷键构型：淀粉为 α-1,4（兼 α-1,6 分支）而纤维素为 β-1,4；人体因缺乏纤维素酶而不能消化纤维素，但可消化淀粉。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。淀粉（直链与支链）以 α-1,4 糖苷键为主干、支链淀粉另有 α-1,6 分支；纤维素以 β-1,4 糖苷键连接成伸展链并借氢键构成微纤维。人体消化系统分泌 α-淀粉酶、麦芽糖酶等 α-葡萄糖苷酶，可水解 α 键而不能水解 β-1,4 键，故能利用淀粉不能利用纤维素；反刍动物与白蚁依赖共生微生物的纤维素酶加以利用。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-4',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'single',
    question: '与支链淀粉相比，糖原的 α-1,6 分支点每隔约 8～12 个残基出现一次、分支更密。糖原采取这种高度分支结构的主要意义是：',
    options: [
      '增加糖原的水溶性和甜度',
      '提供更多可同时进攻的非还原端，加快葡萄糖的动员速度',
      '使糖原彻底氧化时产生更多的能量',
      '避免糖原被磷酸化酶降解',
    ],
    answer: 1,
    explanation:
      '糖原磷酸化酶与脱支酶只能从非还原端逐个磷酸解葡萄糖残基。分支越密，同时可供酶进攻的非还原端越多，葡萄糖的动员速度就越快——这对剧烈运动时肌肉的快速供能与肝脏的血糖维持至关重要。分支程度不影响单糖彻底氧化的能量账，也不赋予甜味（巨大分子中还原端占比极微），更不是为了避免降解，恰恰是为了更快降解。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-5',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'multiple',
    question: '关于糖蛋白糖链与糖识别，下列叙述正确的有：',
    options: [
      'N-连接糖链连接于天冬酰胺的酰胺氮，要求 Asn-X-Ser/Thr 共有序列',
      'ABO 血型抗原的差别在于糖链末端的糖基：A 抗原末端为 N-乙酰半乳糖胺，B 抗原末端为半乳糖',
      '霍乱毒素以肠上皮细胞的神经节苷脂 GM1 为受体',
      '凝集素是催化糖苷键水解的酶',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项均正确：N-连接糖链以 GlcNAc-Asn 连接于 Asn-X-Ser/Thr 序列；ABO 抗原差别仅在 H 抗原糖链末端加接的糖基（A 加 GalNAc、B 加 Gal），基因产物即相应的糖基转移酶；霍乱毒素结合 GM1 神经节苷脂。D 项错误：凝集素（lectin）是非酶、非抗体的糖结合蛋白，识别特异糖结构而不催化糖苷键水解，故不属水解酶。',
    difficulty: 3,
  },
  // ================= 第 2 章 脂质与生物膜（q-biochemistry-6 ~ 10） =================
  {
    id: 'q-biochemistry-6',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'single',
    question: '关于必需脂肪酸，下列叙述正确的是：',
    options: [
      '油酸（18:1）是人体最重要的必需脂肪酸',
      '亚油酸与 α-亚麻酸因人体缺乏 Δ12、Δ15 去饱和酶而必须由膳食供给',
      '花生四烯酸在体内完全不能合成，属于严格意义的必需脂肪酸',
      '必需脂肪酸指机体需要但任何组织都不能利用的脂肪酸',
    ],
    answer: 1,
    explanation:
      '人体内质网去饱和酶只能在 C-9 与羧基之间引入双键，缺乏 Δ12 与 Δ15 去饱和酶，故亚油酸（18:2，n-6）与 α-亚麻酸（18:3，n-3）必须由膳食供给，属必需脂肪酸。油酸（18:1，Δ9）可由体内 Δ9 去饱和酶合成，非必需；花生四烯酸可由亚油酸经延长与去饱和生成，属条件必需而非严格必需。必需脂肪酸是合成前列腺素等类二十烷酸的前体，并非不能被利用。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-7',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'truefalse',
    question: '油脂的皂化值越大，说明其所含脂肪酸的平均分子量越大；碘值越大，说明不饱和程度越高。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '前半句错误：皂化值是完全皂化 1 g 油脂所需 KOH 的毫克数，皂化值越大说明每克油脂含酯键越多、脂肪酸平均分子量越小（椰子油富含中短链酸，皂化值高达 246～265；猪油以 16～18 碳酸为主，仅 193～200）。后半句正确：碘值是 100 g 油脂吸收碘的克数，直接量度双键总数，亚麻油碘值 177～209 远高于猪油 54～70。整句因前半句错误而判错。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-8',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'single',
    question: '磷脂酶 C 水解 PIP2 生成的两个第二信使及其主要作用是：',
    options: [
      'IP3 开放内质网钙通道，DAG 激活蛋白激酶 C',
      'IP3 激活蛋白激酶 C，DAG 开放钙通道',
      'cAMP 激活蛋白激酶 A，cGMP 激活蛋白激酶 G',
      '花生四烯酸生成前列腺素，溶血磷脂激活腺苷酸环化酶',
    ],
    answer: 0,
    explanation:
      '磷脂酶 C 水解磷脂酰肌醇 4,5-二磷酸（PIP2）的甘油-磷酸酯键，产生肌醇 1,4,5-三磷酸（IP3）与二酰甘油（DAG）这对「双信使」：IP3 为水溶性小分子，扩散至内质网开放其膜上的 IP3 受体钙通道，升高胞浆钙；DAG 留在膜内激活蛋白激酶 C。cAMP 与 cGMP 属于其他通路；花生四烯酸由磷脂酶 A2 释放，是类二十烷酸前体，均与题干不符。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-9',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'single',
    question: '关于膜蛋白的存在方式，下列叙述正确的是：',
    options: [
      '外周蛋白含疏水跨膜段，须用去污剂分离',
      'GPI 锚定蛋白通过共价连接的糖基磷脂酰肌醇固定于膜胞质侧',
      '内在蛋白以静电与氢键贴附于膜表面，高盐即可洗脱',
      '血影蛋白属外周蛋白，位于红细胞膜内侧参与骨架构建',
    ],
    answer: 3,
    explanation:
      '血影蛋白以静电与氢键结合于红细胞膜内侧面，与肌动蛋白等共同构成膜骨架，属典型外周蛋白，可用高盐等温和条件分离，D 正确。A 项颠倒了定义：跨膜疏水段是内在蛋白的特征；B 项方向错误：GPI 锚把蛋白固定在膜的外叶（胞外侧）；C 项同样把外周蛋白与内在蛋白的性质互换——内在蛋白须以去污剂破坏脂双层方可增溶。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-10',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'multiple',
    question: '下列因素中，能降低生物膜相变温度（使膜流动性升高）的有：',
    options: [
      '缩短脂肪酸链长',
      '增加顺式不饱和双键的数目',
      '在低于 Tm 的条件下增加胆固醇含量',
      '增加膜脂中饱和脂肪酸的比例',
    ],
    answer: [0, 1, 2],
    explanation:
      '链缩短与顺式双键增多都削弱烃链间的紧密堆叠，降低相变温度（比较硬脂酸 69.6 °C 与油酸 13.4 °C）；胆固醇具双向缓冲作用，在低于 Tm 时阻止磷脂结晶为凝胶相、反而升高流动性。D 项错误：饱和脂肪酸链伸展规整、堆叠紧密，升高 Tm、降低流动性——这也是动物脂肪室温呈固态的原因。',
    difficulty: 2,
  },
  // ================= 第 3 章 氨基酸与蛋白质一级结构（q-biochemistry-11 ~ 15） =================
  {
    id: 'q-biochemistry-11',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'single',
    question: '蛋白质在 280 nm 处有特征紫外吸收，主要贡献者是：',
    options: [
      '所有 20 种标准氨基酸的侧链',
      '色氨酸与酪氨酸的芳香侧链（苯丙氨酸较弱，峰位约 257 nm）',
      '肽键的酰胺结构',
      '赖氨酸与精氨酸的侧链氨基',
    ],
    answer: 1,
    explanation:
      '蛋白质的 A280 定量依赖芳香族氨基酸侧链的共轭 π 体系：色氨酸在 280 nm 吸收最强、酪氨酸次之，苯丙氨酸最弱且峰位在约 257 nm。肽键在远紫外区（约 190～220 nm）才有强吸收；赖氨酸、精氨酸等脂肪族侧链在 280 nm 无贡献。因此完全不含芳香族氨基酸的蛋白不能以 A280 定量，而核酸因 260 nm 吸收峰会干扰测定，可用 A280/A260 判断污染。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-12',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'single',
    question: '关于氨基酸与肽的呈色反应及测序试剂，下列配对错误的是：',
    options: [
      '茚三酮反应——蓝紫色产物（570 nm），脯氨酸呈黄色',
      '桑格反应——DNFB 标记 N 端生成 DNP-氨基酸',
      'Edman 降解——PITC 循环反应，每轮释放一个 PTH-氨基酸',
      '双缩脲反应——二肽与游离氨基酸呈阳性',
    ],
    answer: 3,
    explanation:
      '双缩脲反应要求分子含两个以上肽键，三肽及以上呈紫红色阳性，二肽只含一个肽键、氨基酸则不含肽键，均为阴性——D 项配对错误。这一差别使双缩脲反应成为区分氨基酸/二肽与更长肽的经典试验。其余三项均正确：茚三酮与脯氨酸（仲胺）呈黄色 440 nm；DNFB 与 PITC 分别是桑格与 Edman 方法的核心试剂，前者经酸水解鉴定 N 端，后者可循环降解逐个读序。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-13',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'truefalse',
    question:
      '肽键中的 C-N 键因酰胺共振而具有部分双键性（键长约 0.132 nm），不能自由旋转，由此形成刚性的肽键平面；相邻两个 α 碳绝大多数呈反式排布，涉及脯氨酸的肽键顺式比例可增至约 5%～10%。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。X 射线衍射测得肽键 C-N 键长约 0.132 nm，介于单键（约 0.147 nm）与双键（约 0.128 nm）之间，酰胺平面（羰基碳、酰胺氮、氧、氢及两侧 α 碳近共面）不能绕 C-N 键旋转。反式排布使两侧基团位阻最小，非脯氨酸肽键顺式不足 0.1%；脯氨酸的环状侧链使顺反两种构型能量差缩小，Xaa-Pro 顺式可达约 5%～10%，由肽酰脯氨酰顺反异构酶催化纠正。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-14',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'single',
    question:
      'Anfinsen 将牛胰核糖核酸酶 A（124 个残基、4 对二硫键）用 8 M 尿素与 β-巯基乙醇完全变性还原后透析复性，酶活性几乎完全恢复。该实验不能支持的结论是：',
    options: [
      '一级结构包含折叠为天然构象所需的全部信息',
      '天然构象是体系吉布斯自由能的极小态，复性是自发过程',
      '在体内拥挤环境中，蛋白质折叠完全不需要任何辅助因子',
      '正确二硫键配对可在复性过程中自发形成',
    ],
    answer: 2,
    explanation:
      'Anfinsen 实验确立的是「序列决定构象」的热力学假说：变性剂与还原剂去除后，肽链自发折叠并正确配对全部 4 对二硫键，恢复活性，故 A、B、D 均为实验支持的结论。但体内折叠需要蛋白质二硫键异构酶、肽酰脯氨酰顺反异构酶与分子伴侣等辅助系统提高产率与速率（8 个巯基随机配对有 105 种组合，正确仅 1 种），C 项把「体外可自发」误解为「体内不需要辅助」，恰是实验无法支持的说法。',
    difficulty: 3,
  },
  {
    id: 'q-biochemistry-15',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'multiple',
    question: '关于镰刀型细胞贫血（HbS）与分子病，下列叙述正确的有：',
    options: [
      'Pauling 等 1949 年经电泳发现 HbS 迁移异常，提出「分子病」概念',
      'Ingram 1956 年用肽谱定位到 β 链第 6 位 Glu 被 Val 替换',
      '脱氧 HbS 因 β6 Val 与邻近分子疏水口袋结合而聚合成纤维，使红细胞镰变',
      '该病由氨基酸序列改变引起，与蛋白质折叠状态的改变无关',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项构成分子病的完整证据链：1949 年电泳行为异常提出分子病概念；1956 年肽指纹将突变定位到 β6 Glu→Val；带负电亲水侧链换成疏水侧链使脱氧 HbS 分子借疏水斑块互补聚合，红细胞镰变并堵塞微血管。D 项表述不当：镰刀贫血是序列突变致构象与聚集性质改变的疾病，而蛋白质构象病（如朊蛋白病）则是不改序列、劫持折叠状态——两者正相反，故 D 错误。',
    difficulty: 3,
  },
]
