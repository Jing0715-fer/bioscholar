// ============================================================
// BioScholar 免疫学测验题库 - 批次 A2（第 4–6 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-immunology-16 ~ q-immunology-30）
// 题型：single 11 / truefalse 2 / multiple 2
// 难度：1（基础识记）4 / 2（理解应用）8 / 3（综合分析）3
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as QuizQuestion['subjectId']

export const immunologyQuizA2: QuizQuestion[] = [
  // ================= 第 4 章 固有免疫的分子机制（q-immunology-16 ~ 20） =================
  {
    id: 'q-immunology-16',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch4',
    type: 'single',
    question: '下列关于补体系统的叙述，错误的是：',
    options: [
      '补体系统由 40 余种可溶性蛋白与膜结合蛋白组成',
      'C3 是血清中浓度最高的补体成分，约为 1.2–1.6 g/L',
      '经典途径与凝集素途径的 C3 转化酶是 C3bBb',
      '补体活化产物具有调理、趋化与过敏毒素等多种效应',
    ],
    answer: 2,
    explanation:
      '补体系统由 40 余种蛋白质组成，肝细胞与单核巨噬细胞是主要合成场所；C3 血清浓度最高（约 1.2–1.6 g/L）；活化产物介导调理吞噬、过敏毒素、趋化与免疫复合物清除等多种效应，三项均正确。经典途径与凝集素途径的 C3 转化酶为 C4b2a，C3bBb 是旁路途径的 C3 转化酶（由备解素稳定），C 项将两条途径的转化酶张冠李戴，故选 C。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-17',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch4',
    type: 'single',
    question: '旁路途径区别于经典途径与凝集素途径的最显著特点是：',
    options: [
      '可以形成攻膜复合物溶解靶细胞',
      '无需 C3 转化酶即可直接裂解 C5',
      '不依赖抗体的预先存在，由 C3 自发水解启动并经 C3b 正反馈放大',
      '仅能被抗原-抗体复合物激活',
    ],
    answer: 2,
    explanation:
      '三条途径共用末端通路、均可形成 MAC，A 项不构成区别；旁路途径同样需要 C3 转化酶（C3bBb）方能裂解 C3 与 C5，B 项错误。旁路途径的起点是血清 C3 的缓慢自发水解（「C3 滴答」），微生物表面因缺乏调节蛋白而使 C3b 存活并组装 C3bBb，C3b 又是该转化酶的组成成分，形成正反馈放大回路；整个过程无需抗体参与、在感染最早期即可启动，故 C 正确。D 描述的是经典途径。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-18',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch4',
    type: 'single',
    question: '下列 Toll 样受体与其主要配体的对应关系，错误的是：',
    options: [
      'TLR4——革兰阴性菌脂多糖',
      'TLR9——非甲基化 CpG DNA',
      'TLR3——病毒双链 RNA',
      'TLR5——革兰阳性菌肽聚糖',
    ],
    answer: 3,
    explanation:
      'TLR4 识别革兰阴性菌脂多糖（需 MD-2 与 CD14 协助）、TLR9 识别细菌及 DNA 病毒的非甲基化 CpG 基序、TLR3 识别病毒双链 RNA，定位与配体均正确。TLR5 识别的是细菌鞭毛蛋白；肽聚糖与脂磷壁酸主要由 TLR2 家族（TLR1/2 或 TLR2/6 异二聚体）识别，故 D 项对应错误，应选 D。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-19',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch4',
    type: 'truefalse',
    question:
      'NLRP3 炎症小体的活化通常需要两个信号：第一信号经 TLR 等上调 pro-IL-1β 与 NLRP3 的转录，第二信号如 ATP 引起的钾离子外流或晶体损伤促成组装；活化的 caspase-1 将 pro-IL-1β 与 pro-IL-18 切割为成熟形式。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。NLRP3 炎症小体由感应蛋白 NLRP3、接头蛋白 ASC 与 pro-caspase-1 组成，其活化遵循「启动—活化」两步模型：启动信号经 NF-κB 上调 pro-IL-1β、pro-IL-18 与 NLRP3 自身的转录；活化信号由钾离子外流、溶酶体损伤等应激触发。caspase-1 一方面成熟 IL-1β 与 IL-18，另一方面裂解 gasdermin D 诱发细胞焦亡，题干表述与教材口径一致。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-20',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch4',
    type: 'multiple',
    question: '关于细胞因子的共同特性，下列叙述正确的有：',
    options: [
      '多为小分子可溶性蛋白，以自泌与旁泌作用方式为主',
      '具有多效性与冗余性，彼此诱生调节构成网络',
      '多数经 JAK-STAT 等信号通路作用于靶细胞',
      '具有与抗原表位对应的特异性识别能力',
    ],
    answer: [0, 1, 2],
    explanation:
      '细胞因子多为低分子量分泌蛋白，以自泌、旁泌方式就近作用，少数入循环发挥内分泌样效应；一种因子作用于多种细胞为多效性，多种因子功能重叠为冗余性，相互诱生调节构成网络；多数分泌型细胞因子经 JAK-STAT 通路转导信号。但细胞因子不具备抗原特异性，其效应取决于靶细胞的受体表达谱，与抗体、TCR 的特异性识别有本质区别，故 D 错误，选前三项。',
    difficulty: 3,
  },
  // ================= 第 5 章 抗原（q-immunology-21 ~ 25） =================
  {
    id: 'q-immunology-21',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch5',
    type: 'single',
    question: '关于半抗原的叙述，错误的是：',
    options: [
      '半抗原只具有反应原性而无免疫原性',
      '半抗原多为小分子化合物，如二硝基苯酚',
      '半抗原与蛋白质载体偶联后可获得免疫原性',
      '半抗原本身能独立激活 T 细胞产生免疫应答',
    ],
    answer: 3,
    explanation:
      '半抗原分子量小（常不足 1 kDa），只保留与相应抗体或 BCR 特异结合的反应原性，不具备独立诱导免疫应答的免疫原性；与载体蛋白偶联后，由载体提供 T 细胞表位、半抗原充当 B 细胞表位，方能诱导抗半抗原抗体，此即载体效应。D 项称半抗原能独立激活 T 细胞，与半抗原的定义相悖，故选 D。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-22',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch5',
    type: 'single',
    question: '关于 T 细胞表位与 B 细胞表位的比较，错误的是：',
    options: [
      'T 细胞表位须经 MHC 分子提呈，B 细胞表位被 BCR 直接识别',
      'T 细胞表位一般为线性表位，大小约 8–17 个氨基酸残基',
      'B 细胞表位既可为线性表位，也可为构象表位',
      'B 细胞表位须经抗原提呈细胞加工处理为短肽后方能被识别',
    ],
    answer: 3,
    explanation:
      'T 表位经 MHC 提呈且一律为线性短肽（MHC I 类提呈约 8–10 肽、MHC II 类提呈约 13–17 肽），B 表位由 BCR 直接识别天然抗原、既可为线性也可为构象表位（约 5–15 个氨基酸残基），三项均正确。B 细胞识别抗原无需加工提呈，这恰是与 T 表位的关键差异；D 项把 T 表位的提呈要求误加于 B 表位，故选 D。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-23',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch5',
    type: 'single',
    question: '同一蛋白抗原以相同剂量经不同途径免疫小鼠，通常免疫效果最差的是：',
    options: ['皮内注射', '皮下注射', '静脉注射', '肌内注射'],
    answer: 2,
    explanation:
      '皮内与皮下组织富含树突状细胞与朗格汉斯细胞等抗原提呈细胞，抗原被高效捕获提呈，免疫效果最佳；肌内注射次之，是多数灭活疫苗的选择途径。静脉注入的抗原迅速分布至脾脏并被单核巨噬系统大量清除，缺乏局部提呈与共刺激信号，倾向诱导低应答甚至耐受，故选 C。此题考察进入途径对免疫原性表达的影响。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-24',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch5',
    type: 'single',
    question: '金黄色葡萄球菌肠毒素 B（SEB）作为超抗原激活 T 细胞的机制是：',
    options: [
      '经蛋白酶体加工为肽段后由 MHC I 类分子提呈',
      '以完整蛋白占据 MHC II 类分子的肽结合槽被 TCR 识别',
      '以完整蛋白同时结合 MHC II 类分子非多态区与 TCR 的 Vβ 区',
      '经 BCR 识别后加工提呈给 CD4 阳性 T 细胞',
    ],
    answer: 2,
    explanation:
      '超抗原不经加工处理、也不进入 MHC 分子的肽结合槽，而是以完整分子一端结合 MHC II 类分子抗原结合槽外侧的非多态区、另一端结合 TCR β 链 V 区特定家族的保守结构，直接交联两类分子，从而激活携带该 Vβ 的大群 T 细胞（可达外周库的 2%–20%），释放大量 IL-2 与 TNF-α 引起中毒性休克综合征，故选 C；A 与 B 分别描述普通抗原的提呈方式，D 混淆了 B 细胞的识别途径。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-25',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch5',
    type: 'truefalse',
    question: '弗氏完全佐剂含有灭活的结核分枝杆菌，可同时增强体液免疫与细胞免疫，因此可用于人体疫苗接种以增强疫苗效果。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。弗氏完全佐剂由石蜡油、羊毛脂与灭活结核分枝杆菌组成，确能诱导体液与 Th1 型细胞免疫并形成肉芽肿，在动物实验中效力强大；但因其可引起严重局部反应、油剂肉芽肿，并使接种动物的结核菌素试验阳转，只限实验动物使用，严禁用于人体。人用疫苗的佐剂须以安全为前提，如氢氧化铝佐剂、AS04 与 MF59 等，故本题表述错误。',
    difficulty: 1,
  },
  // ================= 第 6 章 免疫球蛋白（q-immunology-26 ~ 30） =================
  {
    id: 'q-immunology-26',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch6',
    type: 'single',
    question: '关于人五类免疫球蛋白的叙述，错误的是：',
    options: [
      'IgG 约占血清免疫球蛋白总量的 75%–80%，半衰期约 23 天',
      'IgM 以五聚体形式存在，是初次应答中最早出现的抗体',
      'SIgA 为双体结构，是外分泌液中的主要免疫球蛋白',
      'IgE 在人血清中的含量居五类之首',
    ],
    answer: 3,
    explanation:
      'IgG 是血清含量最高的 Ig（约占 75%–80%）、半衰期最长（约 23 天），是再次应答与抗感染的主力；IgM 由 J 链连接为五聚体，在初次应答中最早出现，也是补体经典途径最强的激活剂；SIgA 为带分泌片的双体，驻守黏膜与外分泌液。IgE 恰为血清含量最低的一类（约 0.1–0.9 mg/L），其特点是以强亲细胞性介导 I 型超敏反应，故 D 项含量排序错误。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-27',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch6',
    type: 'single',
    question: '胃蛋白酶水解 IgG 的主要产物是：',
    options: [
      '两个 Fab 片段与一个 Fc 片段',
      '一个双价的 F(ab′)2 片段与小分子降解片段 pFc′',
      '一个单价的 Fab 片段与完整的 Fc 片段',
      '两条游离的轻链与两条游离的重链',
    ],
    answer: 1,
    explanation:
      '木瓜蛋白酶在铰链区重链间二硫键的氨基侧切割 IgG，得到两个单价的 Fab 与一个 Fc，此为 A 项所述。胃蛋白酶则在二硫键的羧基侧切割，得到由铰链区二硫键相连的双价 F(ab′)2（保留交联抗原、形成沉淀与凝集的能力）以及被继续降解的无活性小片段 pFc′，故选 B。两套酶解结果互补地证明抗原结合功能在 Fab、效应功能在 Fc 的分区格局。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-28',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch6',
    type: 'single',
    question: '关于抗体多样性的生成机制，错误的是：',
    options: [
      '重链经 V、D、J 片段重排，轻链经 V、J 片段重排',
      'N 核苷酸由末端脱氧核苷酸转移酶以非模板方式随机插入',
      'P 核苷酸来源于发夹中间体打开后残留的回文序列',
      '抗体的巨大多样性主要由种系基因直接转录产生，无需体细胞重排',
    ],
    answer: 3,
    explanation:
      '重链 V(D)J 重排与轻链 VJ 重排是多样性的结构基础；N 核苷酸由 TdT 在断口随机插入（主要见于重链），P 核苷酸为发夹中间体打开产生的回文残基，组合多样性加连接多样性使理论库容达 10 的 9 至 11 次方量级，三项均正确。若不经体细胞重排，种系仅提供有限片段储备，无法解释如此庞大的受体库，利根川进的实验早已证明重排的存在，故 D 与事实相悖。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-29',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch6',
    type: 'multiple',
    question: '关于杂交瘤技术制备单克隆抗体，正确的叙述有：',
    options: [
      '由 Köhler 与 Milstein 于 1975 年建立，二人获 1984 年诺贝尔生理学或医学奖',
      '将免疫小鼠脾细胞与 HGPRT 缺陷的骨髓瘤细胞融合',
      '在 HAT 选择培养基中，未融合的脾细胞与未融合的骨髓瘤细胞均不能存活',
      '杂交瘤细胞不能在体外长期传代培养',
    ],
    answer: [0, 1, 2],
    explanation:
      '杂交瘤技术由 Köhler 与 Milstein 于 1975 年建立并获 1984 年诺奖；免疫脾细胞携带特异性但寿命有限，骨髓瘤细胞可无限增殖却不分泌抗体且缺 HGPRT；在 HAT 培养基中，氨基蝶呤阻断从头合成途径，未融合瘤细胞因无补救酶而死亡，未融合脾细胞亦不能传代，唯有杂交瘤存活。杂交瘤恰以「可体外无限传代」著称，D 项正好说反，故选前三项。',
    difficulty: 3,
  },
  {
    id: 'q-immunology-30',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch6',
    type: 'single',
    question: '关于现代抗体工程的叙述，错误的是：',
    options: [
      '人源化抗体是将鼠抗体的互补决定区移植入人抗体框架',
      '噬菌体展示技术可用于全人源抗体的筛选，其建立者获 2018 年诺贝尔化学奖',
      '双特异性抗体 blinatumomab 经 CD19 与 CD3 双靶点桥接 T 细胞与肿瘤细胞',
      'ADC 药物依靠抗体的 Fc 段激活补体，以攻膜复合物直接裂解肿瘤细胞',
    ],
    answer: 3,
    explanation:
      '人源化抗体的定义为 CDR 移植，鼠源成分降至约 5% 以下；噬菌体展示由 Smith 建立、Winter 用于抗体工程，二人获 2018 年诺贝尔化学奖；blinatumomab 以 CD19 与 CD3 双特异结构把 T 细胞与 B 系肿瘤细胞直接桥接而指挥杀伤。ADC 的杀伤机制是抗体与靶抗原结合并内吞后，在胞内释放细胞毒载荷（如 MMAE、DM1）以杀伤肿瘤细胞，并非依靠 Fc 激活补体形成 MAC，D 项表述错误。',
    difficulty: 3,
  },
]
