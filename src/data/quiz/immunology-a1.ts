// ============================================================
// BioScholar 免疫学测验题库 - 批次 A1（第 1–3 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-immunology-1 ~ q-immunology-15）
// 题型：single 11 / truefalse 2 / multiple 2
// 难度：1（基础识记）4 / 2（理解应用）8 / 3（综合分析）3
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as QuizQuestion['subjectId']

export const immunologyQuizA1: QuizQuestion[] = [
  // ================= 第 1 章 绪论（q-immunology-1 ~ 5） =================
  {
    id: 'q-immunology-1',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch1',
    type: 'single',
    question: '下列各项中，不属于免疫系统三大生理功能的是：',
    options: ['免疫防御', '免疫自稳', '免疫监视', '免疫再生'],
    answer: 3,
    explanation:
      '教材将免疫系统生理功能归纳为三大方面：免疫防御针对病原体及其毒素，是抗感染免疫的主体；免疫自稳清除衰老、损伤细胞与免疫复合物并维持应答适度；免疫监视清除突变细胞与病毒感染细胞。「免疫再生」并非经典三大功能表述，组织修复只是免疫自稳与调节的衍生效应之一，故选 D。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-2',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch1',
    type: 'truefalse',
    question:
      '适应性免疫又称获得性免疫，其最突出的特征是特异性和记忆性；同一抗原再次进入机体时，潜伏期明显缩短、应答强度显著增大，称为再次应答。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。适应性免疫是个体出生后接触抗原获得的应答能力，以 TCR/BCR 识别特定抗原表位实现特异性，并以记忆 T、B 细胞与长寿命浆细胞实现记忆性。再次应答潜伏期由初次的约 5–10 天（即约一周）缩短至一至三天，抗体平台可达初次的数倍至数十倍，这正是疫苗初免—加强程序的原理。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-3',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch1',
    type: 'single',
    question: '关于初次应答与再次应答的比较，下列叙述错误的是：',
    options: [
      '再次应答潜伏期明显缩短，约 1–3 天',
      '再次应答的抗体平台可达初次应答的数倍至数十倍',
      '初次应答中 IgM 先于 IgG 出现',
      '再次应答以 IgM 为主且抗体亲和力较低',
    ],
    answer: 3,
    explanation:
      '再次应答由记忆细胞介导，潜伏期短、平台高、维持久，主要抗体类别为 IgG（黏膜部位则以 IgA 为主），且经生发中心亲和力成熟后亲和力显著高于初次应答；IgM 为主、亲和力较低恰是初次应答的特征，D 项把两者颠倒，故错误。其余三项均为教材标准结论。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-4',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch1',
    type: 'single',
    question: '关于固有免疫与适应性免疫的比较，下列叙述正确的是：',
    options: [
      '固有免疫具有高度特异性和经典意义上的免疫记忆',
      '适应性免疫以模式识别受体识别病原相关分子模式',
      '固有免疫应答迅速且经典意义上无记忆，适应性免疫特异并具记忆性',
      '两者各自独立运行，彼此之间没有交互协作',
    ],
    answer: 2,
    explanation:
      '固有免疫与生俱来、应答快、识别保守模式而缺乏经典记忆（训练免疫是近年修正）；适应性免疫特异、有记忆、启动慢。二者并非独立：树突状细胞捕获提呈抗原是适应性应答启动的前提，抗体又通过调理与 ADCC 武装固有细胞，构成前后接力的一条防线，故 C 正确，A、B、D 均错。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-5',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch1',
    type: 'single',
    question: '2018 年诺贝尔生理学或医学奖表彰了免疫检查点治疗。下列对应关系正确的是：',
    options: [
      'Allison 发现 PD-1，本庶佑发现 CTLA-4',
      'Allison 阐明 CTLA-4 的负调控作用并开创阻断疗法，本庶佑发现 PD-1',
      '两人共同发现了 CTLA-4',
      '两人共同发现了 PD-1',
    ],
    answer: 1,
    explanation:
      'Allison 证明阻断抑制性受体 CTLA-4 可释放抗肿瘤 T 细胞应答，其抗体伊匹木单抗于 2011 年获批；本庶佑于 1992 年发现 PD-1，后续工作证明其为肿瘤免疫逃逸的关键「刹车」，纳武利尤单抗 2014 年获批。两人分别基于 CTLA-4 与 PD-1 共享 2018 年诺贝尔奖，对应关系见 B 项。',
    difficulty: 3,
  },
  // ================= 第 2 章 免疫器官（q-immunology-6 ~ 10） =================
  {
    id: 'q-immunology-6',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch2',
    type: 'single',
    question: '人体内 T 淋巴细胞分化、发育、成熟的场所是：',
    options: ['骨髓', '胸腺', '脾', '淋巴结'],
    answer: 1,
    explanation:
      '胸腺是 T 细胞的中枢免疫器官：来自骨髓的前 T 细胞在胸腺皮质经历 TCR 基因重排与阳性选择、在髓质经历阴性选择，约 95% 被淘汰，仅约 5% 以初始 T 细胞形式输出。骨髓是 B 细胞发育的中枢器官（鸟类为法氏囊），脾与淋巴结为外周免疫器官，只承接成熟淋巴细胞的定居与应答。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-7',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch2',
    type: 'single',
    question: '关于淋巴结的结构与细胞定位，下列叙述正确的是：',
    options: [
      'B 细胞主要分布于副皮质区',
      'T 细胞主要分布于皮质淋巴滤泡',
      'T 细胞集中于副皮质区，B 细胞位于皮质滤泡并可形成生发中心',
      '淋巴结以过滤血液、清除血源性抗原为主要职能',
    ],
    answer: 2,
    explanation:
      '淋巴结区室化明确：副皮质区是 T 细胞大本营，含高内皮静脉与并指状树突状细胞；皮质浅层的淋巴滤泡由 B 细胞构成，受抗原刺激后形成生发中心；髓索富含浆细胞。淋巴结过滤的是淋巴液而非血液——过滤血液、针对血源性抗原应答是脾的职能，故仅 C 正确。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-8',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch2',
    type: 'truefalse',
    question:
      '骨髓既是中枢免疫器官（造血与 B 细胞发育成熟场所），又是外周免疫器官（长寿命浆细胞与记忆 B 细胞定居、再次应答的重要场所）。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。骨髓的两重身份是免疫器官中的特例：作为中枢器官，造血干细胞在此分化发育出各系血细胞，B 细胞在此完成免疫球蛋白基因重排与中枢耐受筛选；作为外周器官，浆细胞循 CXCL12 梯度归巢骨髓壁龛，长寿命浆细胞在此持续分泌抗体数月至数十年，二次应答亦部分发生于骨髓。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-9',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch2',
    type: 'multiple',
    question: '下列结构中属于黏膜相关淋巴组织（或其组成成分）的有：',
    options: ['派尔集合淋巴结', '阑尾', '腭扁桃体', '胸腺', '脾'],
    answer: [0, 1, 2],
    explanation:
      '黏膜相关淋巴组织包括肠道相关淋巴组织（派尔集合淋巴结、孤立淋巴滤泡、肠系膜淋巴结与阑尾）、鼻咽相关的咽淋巴环（腭扁桃体、腺样体等）以及支气管相关淋巴组织等。胸腺属中枢免疫器官，脾为过滤血液的外周免疫器官，二者均不属于 MALT，故选前三项。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-10',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch2',
    type: 'single',
    question: '淋巴细胞再循环中，初始 T 细胞由血液进入淋巴结的通道及其分子机制是：',
    options: [
      '经高内皮静脉，L-选择素与地址素结合滚动、CCR7 感知 CCL21 后 LFA-1 变构黏附并穿壁',
      '经输入淋巴管，以 α4β7 整合素识别黏膜地址素 MAdCAM-1',
      '经脾的开放循环直接滤经白髓的动脉周围淋巴鞘',
      '直接穿越淋巴结被膜进入被膜下淋巴窦',
    ],
    answer: 0,
    explanation:
      '高内皮静脉是淋巴细胞由血入淋巴结的专门门户：初始 T 细胞先以 L-选择素与 HEV 的地址素（PNAd）作用而减速滚动，内皮组成性表达的 CCL21 经 CCR7 触发整合素 LFA-1 变构，与 ICAM-1 牢固黏附后穿壁进入副皮质区。输入淋巴管是组织液与树突状细胞的来路，α4β7-MAdCAM-1 介导的是黏膜淋巴组织归巢，脾无 HEV，故选 A。',
    difficulty: 3,
  },
  // ================= 第 3 章 固有免疫细胞（q-immunology-11 ~ 15） =================
  {
    id: 'q-immunology-11',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch3',
    type: 'single',
    question: '按教材口径，中性粒细胞约占外周血白细胞总数的：',
    options: ['20–40%', '3–8%', '50–70%', '0.5–5%'],
    answer: 2,
    explanation:
      '外周血白细胞分类的常识性基线为：中性粒细胞 50–70%（数量第一）、淋巴细胞 20–40%、单核细胞 3–8%、嗜酸性粒细胞 0.5–5%、嗜碱性粒细胞 0–1%。中性粒细胞是急性炎症的主力，其比例显著升高常规提示急性细菌感染，故选 C。',
    difficulty: 1,
  },
  {
    id: 'q-immunology-12',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch3',
    type: 'single',
    question: '体内提呈能力最强、能有效激活初始 T 细胞的抗原提呈细胞是：',
    options: ['巨噬细胞', 'B 淋巴细胞', '树突状细胞', '中性粒细胞'],
    answer: 2,
    explanation:
      '成熟树突状细胞同时具备高水平 MHC-肽复合物、充分共刺激分子（CD80/86）与稳定黏附三要素，是唯一能从零启动初始 T 细胞的「专职」提呈细胞；巨噬细胞与 B 细胞通常只能激活已致敏的效应或记忆 T 细胞，中性粒细胞不承担抗原提呈职能。Steinman 因发现 DC 的这一作用获 2011 年诺贝尔奖。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-13',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch3',
    type: 'multiple',
    question: 'NK 细胞杀伤靶细胞的机制包括：',
    options: [
      '释放穿孔素与颗粒酶诱导靶细胞凋亡',
      '表达 FasL 与靶细胞 Fas 结合并触发凋亡',
      '经 CD16 结合 IgG Fc 段介导 ADCC',
      '分泌抗体中和游离抗原',
      '以 TCR 识别 MHC-抗原肽复合物后杀伤',
    ],
    answer: [0, 1, 2],
    explanation:
      'NK 的效应机制有三条：经免疫突触定向释放穿孔素与颗粒酶（颗粒酶 B 激活胱天蛋白酶并切割 Bid）；经 FasL-Fas 死亡受体途径诱导凋亡；经 CD16（FcγRIIIa）结合包被靶细胞的 IgG 介导 ADCC。NK 不分泌抗体（那是浆细胞的职能），也不表达 TCR（识别靠活化/抑制性受体积分），故后两项错误。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-14',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch3',
    type: 'single',
    question: '关于巨噬细胞的 M1/M2 极化，下列叙述错误的是：',
    options: [
      'M1 由 IFN-γ 及微生物配体等诱导，分泌 IL-1、IL-6、IL-12 与 TNF',
      'M2 由 IL-4 与 IL-13 诱导，参与组织修复与纤维化',
      'M2 型表达精氨酸酶-1 并分泌 IL-10 与 TGF-β',
      'M1/M2 极化一旦确立便不可逆转，属于终末分化',
    ],
    answer: 3,
    explanation:
      '极化并非终末分化而是连续的功能谱：M1 与 M2 分别对应经典活化与旁路活化，随细胞因子环境的变化可以相互再极化，这正是巨噬细胞可塑性的核心。前三项分别准确描述了 M1 的诱导与分泌谱、M2 的诱导与功能定位以及 M2 的特征分子，仅 D 项「不可逆转」与事实相悖，故选 D。',
    difficulty: 2,
  },
  {
    id: 'q-immunology-15',
    subjectId: IMMUNOLOGY,
    chapterId: 'immunology-ch3',
    type: 'single',
    question: '肥大细胞介导 I 型超敏反应发作的核心分子机制是：',
    options: [
      '补体攻膜复合体在肥大细胞膜上打孔致其裂解',
      '特异性 IgG 免疫复合物经 Fcγ 受体交联触发细胞毒',
      '预结合于 FcεRI 的特异性 IgE 被再次进入的变应原交联，触发脱颗粒释放组胺、白三烯等介质',
      '细胞毒性 T 细胞以穿孔素攻击肥大细胞使其破坏',
    ],
    answer: 2,
    explanation:
      'I 型超敏经历致敏与激发两步：首次接触变应原使特异性 IgE 以高亲和力结合肥大细胞表面 FcεRI（致敏）；变应原再次进入并桥联相邻受体（激发），触发钙信号与脱颗粒，释放组胺、肝素、类胰蛋白酶并新合成白三烯 C4 与前列腺素 D2，引起血管通透性升高、平滑肌痉挛等速发症状。补体打孔、免疫复合物与 CTL 攻击均与本机制无关。',
    difficulty: 3,
  },
]
