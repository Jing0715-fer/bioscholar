// ============================================================
// 微生物学测验题库
// 覆盖 12 章，每章 5 题，共 60 题
// 题型：single 44 / truefalse 10 / multiple 6
// 难度：1（基础识记）14 / 2（理解应用）34 / 3（综合分析）12
// 依据：周德庆《微生物学教程》、沈萍《微生物学》、Prescott/Madigan 教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const microbiologyQuiz: QuizQuestion[] = [
  // ================= 第 1 章 绪论（q-microbiology-1 ~ 5） =================
  {
    id: 'q-microbiology-1',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch1',
    type: 'single',
    question: '下列关于微生物共同特征的叙述，错误的是：',
    options: [
      '个体微小，一般需借助显微镜才能观察',
      '繁殖速度快、代谢类型多样、代谢强度高',
      '种类繁多、分布广泛、适应性强',
      '都具有细胞壁这一基本结构',
    ],
    answer: 3,
    explanation:
      '微生物的共性包括个体微小、构造简单（多为单细胞或非细胞）、繁殖快、代谢旺、种类多、分布广、易培养、易变异。"都具有细胞壁"不成立：病毒无细胞结构，支原体是不具细胞壁的原核细胞，原生动物也仅具细胞膜，故 D 为错误叙述。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-2',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch1',
    type: 'truefalse',
    question:
      '巴斯德的鹅颈瓶实验否定"自生说"的关键设计是：曲颈管既允许空气自由进入瓶内，又能截留尘埃与微生物使其无法接触肉汤，因此煮沸的肉汤长期不腐败。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。鹅颈瓶的 S 形长颈使瓶内外空气流通，排除了"隔绝空气导致不腐"的反驳，而尘埃颗粒与微生物被弯壁截留，肉汤久置不变质；一旦打断瓶颈，微生物落入即迅速腐败。该实验与灭菌实践共同确立了"微生物只能来自微生物"的生源论观点。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-3',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch1',
    type: 'single',
    question: '下列关于微生物与人类关系的叙述，最准确的是：',
    options: [
      '微生物对人类弊大于利，传染病的威胁决定了它们主要是敌害',
      '微生物既是面包、酸奶、抗生素、维生素与生态服务的提供者，也是传染病、食品腐败与霉变的肇因，利弊兼有',
      '工业菌种均为野生菌株，从自然界分离后即可直接高产量投产',
      '抗生素的发现已经彻底根除了传染病对人类的威胁',
    ],
    answer: 1,
    explanation:
      'A、D 以偏概全：绝大多数微生物与人类并无直接利害关系，且新发与再发传染病至今仍在威胁人类健康；C 错误，野生菌株产量普遍很低，工业菌种必须经自然选育、诱变或代谢工程改造方能投产；B 客观概括了微生物的"一体两面"，如青霉产生青霉素拯救生命，同属真菌的另一些种却引起霉变与感染。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-4',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch1',
    type: 'single',
    question: '科赫法则（病原微生物准则）在实践中并不普适。下列哪种情形最典型地暴露其局限？',
    options: [
      '可在人工培养基上纯培养、又能感染实验动物的病原菌',
      '不能体外纯培养的病原体（如麻风杆菌），以及健康带菌、难以满足"再分离同一病原"要求的感染情形',
      '能形成特征性菌落的细菌性病原体',
      '可通过滤菌器并引起滤液致病性的病毒',
    ],
    answer: 1,
    explanation:
      '科赫法则要求"分离—纯培养—再接种—再分离"的完整闭环，麻风杆菌至今无法在体外纯培养，前三步即无法走通；伤寒带菌者等健康携带现象也使"同一病原恒与疾病相伴"不成立，故 B 最典型。分子时代提出的修正版准则（核酸证据与病理部位共定位等）正是为弥补这些局限。A、C 是法则适用顺畅的情形；D 中病毒虽不能在无细胞培养基上培养，但可借助组织培养、滤过试验与序列证据确认。',
    difficulty: 3,
  },
  {
    id: 'q-microbiology-5',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch1',
    type: 'multiple',
    question: '按细胞结构与化学组成，下列生物中属于原核细胞型微生物的有：',
    options: ['放线菌', '支原体', '立克次体', '衣原体', '酿酒酵母'],
    answer: [0, 1, 2, 3],
    explanation:
      '放线菌、支原体、立克次体与衣原体均为原核细胞型微生物：仅有原始核区（拟核）而无核膜包裹、细胞器不完整、核糖体为 70S；其中支原体无细胞壁，衣原体为专性活细胞内寄生的能量寄生菌。酿酒酵母则具核膜与完整细胞器、核糖体为 80S，属真核细胞型真菌。',
    difficulty: 2,
  },
  // ================= 第 2 章 原核细胞结构（q-microbiology-6 ~ 10） =================
  {
    id: 'q-microbiology-6',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch2',
    type: 'single',
    question: '微生物学的经典形态分类中，细菌的三种基本形态是：',
    options: [
      '球菌、杆菌、螺旋菌（含弧菌）',
      '球菌、杆菌、丝状体',
      '球菌、螺旋体、芽孢',
      '杆菌、螺菌、菌丝',
    ],
    answer: 0,
    explanation:
      '细菌按外形分为球菌（如肺炎链球菌）、杆菌（如大肠杆菌）与螺旋菌三大基本形态；螺旋菌中弯曲不足一圈、形似逗号者称弧菌（如霍乱弧菌），一至数个刚性弯曲者为螺菌。丝状体见于放线菌的菌丝，芽孢是休眠体而非营养体形态，均不属基本形态分类。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-7',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch2',
    type: 'truefalse',
    question:
      '革兰氏染色中经 95% 乙醇脱色后，革兰氏阳性菌仍保持紫色，是因为厚而致密的肽聚糖层经碘液媒染后脱水收缩，将结晶紫–碘复合物滞留在细胞内。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。G⁺ 菌细胞壁肽聚糖层厚 20–80 nm 且交联致密，乙醇使其脱水、网孔收缩，结晶紫–碘大分子复合物无法溶出，故保持初染的紫色；G⁻ 菌肽聚糖层仅 2–7 nm，其外膜被乙醇破坏后复合物被洗脱，经沙黄复染呈红色。这一差异是革兰氏染色反应的细胞壁结构基础。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-8',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch2',
    type: 'single',
    question: '聚-β-羟丁酸（PHB）颗粒在原核细胞中的功能是：',
    options: [
      '储存磷元素，构成异染粒',
      '作为碳源与能源的储藏物，可在营养匮乏时氧化供能或提供合成原料',
      '作为固氮酶的储存库，参与大气氮素固定',
      '储存硫元素，供硫氧化细菌利用',
    ],
    answer: 1,
    explanation:
      'PHB 是许多细菌（如真养产碱杆菌）胞内的疏水性聚酯储碳颗粒，属碳源与能源的储备形式，可用苏丹黑等脂溶性染料着色观察，也是可生物降解塑料的重要前体。异染粒（聚偏磷酸盐）储磷，硫滴储硫见于硫细菌；固氮酶存在于营养细胞或蓝细菌的异形胞中，与 PHB 颗粒无关。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-9',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch2',
    type: 'single',
    question: '关于细菌芽孢（endospore）的叙述，正确的是：',
    options: [
      '芽孢是细菌的繁殖体，一个营养细胞可同时形成多个芽孢',
      '芽孢核心含水量极低并富含吡啶二羧酸钙，是耐热的关键；一个营养细胞只形成一个芽孢，芽孢并非繁殖体',
      '芽孢的耐热性主要来自其厚肽聚糖细胞壁',
      '芽孢在营养丰富的对数期大量形成，萌发发生在碳氮源耗尽时',
    ],
    answer: 1,
    explanation:
      '芽孢是休眠抗性结构而非繁殖体：分化始于碳源、氮源或磷酸盐饥饿等不良条件，一个营养细胞内仅形成一个芽孢，萌发后也只产生一个营养细胞。其抗性源于多层次结构（皮质、芽孢壳等）以及核心的低含水量与吡啶二羧酸（DPA）–钙复合物对大分子的稳定作用，而非细胞壁厚度；对数期细胞营养充足，不会大量形成芽孢。',
    difficulty: 3,
  },
  {
    id: 'q-microbiology-10',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch2',
    type: 'multiple',
    question: '下列属于革兰氏阴性菌细胞壁结构或其特有成分的有：',
    options: [
      '外膜（outer membrane）',
      '脂多糖（LPS）',
      '周质间隙（periplasmic space）',
      '磷壁酸（teichoic acid）',
      '连接外膜与肽聚糖层的脂蛋白（Braun 脂蛋白）',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'G⁻ 菌细胞壁由仅 2–7 nm 厚的肽聚糖层与外膜组成，外膜含脂多糖、磷脂、孔蛋白与 Braun 脂蛋白，肽聚糖与外膜之间的周质间隙富含水解酶与底物结合蛋白。磷壁酸是 G⁺ 菌的特有成分，经磷酸二酯键共价连接于肽聚糖骨架上，G⁻ 菌不存在。',
    difficulty: 2,
  },
  // ================= 第 3 章 真菌（q-microbiology-11 ~ 15） =================
  {
    id: 'q-microbiology-11',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch3',
    type: 'single',
    question: '酿酒酵母（Saccharomyces cerevisiae）最主要的无性繁殖方式是：',
    options: ['分裂生殖', '芽殖（出芽繁殖）', '孢子生殖', '接合生殖'],
    answer: 1,
    explanation:
      '酿酒酵母以出芽繁殖为主：母细胞表面形成小芽，细胞核分裂后一个子核移入芽体，芽体长大后与母体分离，并在母细胞壁上留下芽痕。裂殖见于裂殖酵母属；孢子生殖多为有性世代（子囊孢子）或霉菌的分生孢子；接合生殖是质配与核配的有性过程。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-12',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch3',
    type: 'single',
    question: '关于霉菌菌丝的隔膜（septum），正确的说法是：',
    options: [
      '所有霉菌的菌丝均被完整隔膜分隔为单核细胞',
      '接合菌门等低等真菌的菌丝通常无隔多核，高等真菌的菌丝有隔，隔膜上常具小孔允许细胞质与细胞核流通',
      '隔膜是完全封闭的实心几丁质结构',
      '无隔菌丝是菌丝老化退化后形成的形态',
    ],
    answer: 1,
    explanation:
      '菌丝按有无隔膜分为有隔菌丝（子囊菌、担子菌等高等真菌）与无隔菌丝（毛霉属、根霉属等接合菌），后者为多核共胞体。有隔菌丝的隔膜多具单孔或复杂的桶孔结构，原生质甚至细胞核可以穿流，隔膜主要提供机械支撑并隔离损伤，并非完全封闭；无隔是低等真菌的正常特征而非退化。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-13',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch3',
    type: 'single',
    question: '真菌的孢子与细菌的芽孢相比，最本质的区别是：',
    options: [
      '真菌孢子是繁殖与传播单元、数量巨大；芽孢是抗逆休眠体、非繁殖体，一个菌体只形成一个芽孢',
      '真菌孢子只能在缺氧条件下产生',
      '细菌芽孢具有更强的繁殖能力',
      '二者化学本质完全不同，真菌孢子不含核酸',
    ],
    answer: 0,
    explanation:
      '真菌孢子是真正的繁殖体：一株霉菌可产生数以亿计的孢子用于传播与增殖；芽孢则是细菌在营养饥饿时形成的休眠抗性结构，不增加个体数目，一个营养细胞只产生一个芽孢。两者都含 DNA；真菌孢子的抗热性也远弱于细菌芽孢，且无严格的缺氧条件限定。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-14',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch3',
    type: 'single',
    question: '关于真菌界主要特征的叙述，错误的是：',
    options: [
      '营养体为菌丝或单细胞酵母，均不含叶绿素，以分泌胞外酶吸收方式获取营养',
      '细胞壁骨架以几丁质为主（卵菌例外，以葡聚糖与纤维素为主）',
      '属于真核生物中与动物界亲缘关系最近的类群之一，同归后鞭毛生物超群',
      '真菌都是肉眼可见的大型生物',
    ],
    answer: 3,
    explanation:
      'A、B、C 均为真菌界的正确特征：真菌为异养吸收式营养，壁以几丁质为骨架（卵菌因纤维素壁而被视为独立于主线上真菌的支系）；分子系统学将真菌与动物同归入后鞭毛生物。D 错误：酵母与绝大多数霉菌个体微小、须借助显微镜观察，蕈菌等大型真菌只是少数类群。',
    difficulty: 3,
  },
  {
    id: 'q-microbiology-15',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch3',
    type: 'truefalse',
    question: '酵母菌是单细胞真菌，其细胞壁的主要成分是几丁质与纤维素。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。酿酒酵母细胞壁以葡聚糖（内层 β-1,3 与 β-1,6 骨架）与甘露糖蛋白（外层）为主要成分，几丁质仅集中于芽痕与隔膜等局部；纤维素是植物与卵菌细胞壁的骨架成分，并非酵母细胞壁的主要成分。此题易与霉菌壁（几丁质为主）混淆。',
    difficulty: 2,
  },
  // ================= 第 4 章 病毒（q-microbiology-16 ~ 20） =================
  {
    id: 'q-microbiology-16',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch4',
    type: 'single',
    question: '病毒区别于一切细胞生物最基本的特征之一是：',
    options: [
      '个体极其微小，不能通过细菌滤器',
      '每一病毒颗粒只含一种核酸（DNA 或 RNA），而细胞生物同时含有 DNA 与 RNA',
      '都具有脂质包膜',
      '都以二分裂方式繁殖',
    ],
    answer: 1,
    explanation:
      '病毒的核酸类型单一，或为 DNA 或为 RNA，这是 Baltimore 分类框架的基础；细胞生物则 DNA 与 RNA 并存。多数病毒能通过细菌滤器（滤过性是其早期鉴定依据），脂质包膜只见于部分病毒（如流感病毒），病毒以"复制"（吸附—侵入—合成—装配—释放）方式增殖而非二分裂。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-17',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch4',
    type: 'single',
    question: '噬菌体一步生长曲线中"潜伏期"的确切含义是：',
    options: [
      '从噬菌体吸附细菌开始，至宿主菌裂解释放子代噬菌体为止的时期，此期间培养液中检测不到游离的完整噬菌体',
      '仅指噬菌体核酸注入到装配完成之间的时期',
      '噬菌体数量恒定不变的平稳期',
      '宿主细菌全部死亡所需要的时间',
    ],
    answer: 0,
    explanation:
      '潜伏期自吸附起至首次裂解止，其中早期称隐晦期（胞内尚无完整颗粒、电镜下只见裸核酸），后期称胞内累积期（可检测到感染性颗粒但未释放），整个潜伏期内培养液上清测不出子代噬菌体。T4 噬菌体在 37 ℃ 下潜伏期约 22 分钟，其后裂解期滴度陡升，最后进入平稳期。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-18',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch4',
    type: 'single',
    question: '下列关于温和噬菌体与溶原性细菌的叙述，错误的是：',
    options: [
      '前噬菌体整合在宿主染色体上（或以质粒形式存在），随宿主复制而垂直传递',
      '溶原菌对其同源噬菌体的再感染具有免疫性，源于噬菌体编码的阻遏蛋白',
      '紫外线等 DNA 损伤因素可诱导前噬菌体切离，进入裂解周期',
      '温和噬菌体只能进入溶原周期，永远不会裂解宿主',
    ],
    answer: 3,
    explanation:
      '温和噬菌体感染后可走溶原或裂解两条路线，紫外线等诱导因素使 CI 类阻遏蛋白失活，前噬菌体切离进入裂解周期并释放子代，故"永远不会裂解"错误。A、B、C 为溶原性的三大特征（携带遗传、免疫性、可诱导性）；白喉毒素等细菌性状正是由前噬菌体基因编码的溶原转换现象。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-19',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch4',
    type: 'multiple',
    question: '下列关于亚病毒因子的叙述，正确的有：',
    options: [
      '类病毒是无衣壳蛋白的共价闭合环状单链 RNA，专性寄生于高等植物',
      '卫星病毒或卫星 RNA 的复制依赖辅助病毒提供必需的基因产物',
      '朊病毒仅由蛋白质构成、不含核酸，引起羊痒病、牛海绵状脑病与克雅氏病等',
      '亚病毒因子均可在人工培养基上进行噬菌斑计数培养',
      '朊病毒病的共同病理特征是脑组织海绵状病变，由 PrP 蛋白构象转变所致',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      '类病毒（如马铃薯纺锤块茎类病毒）为裸露环状 ssRNA；卫星因子基因组小而缺陷，复制必须依赖辅助病毒；朊病毒不含核酸，正常 PrPᶜ 蛋白转变为抗蛋白酶的 PrPˢᶜ 并沉积致病，脑组织呈海绵空泡变性。类病毒与朊病毒都不能在人工培养基上培养，噬菌斑计数仅适用于噬菌体与部分动物病毒，D 错误。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-20',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch4',
    type: 'single',
    question: '以 T4 噬菌体感染大肠杆菌绘制一步生长曲线时，需在吸附保温后对培养物进行适度稀释，其目的与曲线解读正确的是：',
    options: [
      '稀释可防止子代噬菌体再吸附，使各感染菌同步释放，由平稳期噬菌体滴度与初始感染菌数之比即得裂解量',
      '稀释是为了降低培养基的渗透压，避免细菌破裂',
      '平稳期噬菌体滴度直接等于初始接种的噬菌体数',
      '潜伏期终点对应的噬菌体滴度即为裂解量',
    ],
    answer: 0,
    explanation:
      '适度稀释使释放的子代噬菌体难以再遇到未感染宿主，避免二次吸附，从而获得典型的一步释放曲线；裂解量（burst size）＝平稳期平均噬菌体数 ÷ 感染菌数，T4 约为 100–200。B 与渗透压无关；C 忽略了增殖倍增；D 裂解量须由平稳期计算，潜伏期终点滴度尚未上升。',
    difficulty: 3,
  },
  // ================= 第 5 章 营养与培养基（q-microbiology-21 ~ 25） =================
  {
    id: 'q-microbiology-21',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch5',
    type: 'single',
    question: '微生物营养要素中的"生长因子"是指：',
    options: [
      '一切促进生长的无机盐离子',
      '微生物自身不能合成或合成量不足、需外源微量供给的有机物，主要包括维生素、氨基酸与碱基',
      '培养基中的碳源与氮源',
      '一切天然培养基的复杂成分',
    ],
    answer: 1,
    explanation:
      '生长因子特指三类微量有机物：维生素（多为辅酶或辅基前体，如硫胺素、叶酸、生物素）、氨基酸与嘌呤嘧啶碱基。乳酸菌等丧失部分合成能力的菌必须外源补给，故培养基常用酵母膏、蛋白胨等天然材料提供；碳源、氮源与无机盐是大量营养要素，不属于生长因子。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-22',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch5',
    type: 'single',
    question: '欲从土壤中富集分离自生固氮菌，培养基设计的要点是：',
    options: [
      '加入蛋白胨提供丰富有机氮，促进固氮菌快速生长',
      '不加任何氮源（无氮培养基，如 Ashby 培养基），仅以甘露醇等作碳源，使能固定大气 N₂ 者取得氮素竞争优势',
      '加铵盐作唯一氮源并添加抗生素抑菌',
      '以尿素为唯一氮源、以葡萄糖为碳源并加溴百里酚蓝指示剂',
    ],
    answer: 1,
    explanation:
      '自生固氮菌能以大气 N₂ 为唯一氮源，无氮培养基淘汰了所有不能固氮的杂菌，是经典的加富（选择）培养策略；且固氮酶受铵抑制，加铵或有机氮反而不利其表达。尿素培养基用于鉴定脲酶活性，与固氮菌富集无关；抗生素选择培养基针对抗性菌株。',
    difficulty: 3,
  },
  {
    id: 'q-microbiology-23',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch5',
    type: 'truefalse',
    question:
      '为避免葡萄糖等在高温下焦化与酸性降解，含糖培养基通常不宜采用 121 ℃ 高压蒸汽灭菌，而应改用 112–115 ℃ 的较低压力蒸汽灭菌 15–30 分钟，或用间歇灭菌、过滤除菌。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。121 ℃ 下糖类易与含氮物发生美拉德反应并分解产酸，使培养基 pH 下降、营养价值受损，故含糖培养基常改用 112–115 ℃（约 0.05–0.07 MPa）较短时灭菌，或采用间歇灭菌法分次杀灭芽孢，对热敏感成分还可滤膜除菌；也可将糖与其它成分分别灭菌后再混合。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-24',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch5',
    type: 'multiple',
    question:
      '关于营养物质跨微生物细胞膜的四种方式——简单扩散、促进扩散、主动运输与基团转位，正确的叙述有：',
    options: [
      '简单扩散顺着浓度梯度进行，不需载体蛋白与能量、无特异性，如 O₂、CO₂ 与水的出入',
      '促进扩散借助特异性载体或通道蛋白，仍顺浓度梯度、不消耗能量',
      '主动运输可逆浓度梯度将营养富集于胞内，消耗质子动力势或 ATP 等能量',
      '基团转位中底物被化学修饰（如磷酸化）后方进入胞内，运输与代谢相偶联',
      '四种方式都能把底物逆浓度梯度累积到胞内',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '前四项分别对应四种运输方式的要点：简单扩散只适于小分子且受梯度限制；促进扩散的典型如酵母菌对糖的吸收；主动运输如乳糖借 H⁺ 同向转运入菌；基团转位以大肠杆菌磷酸转移酶系统吸收葡萄糖为代表，胞内产物已是 6-磷酸葡萄糖。只有主动运输与基团转位能逆梯度累积底物，E 一概而论故错误。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-25',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch5',
    type: 'single',
    question:
      '硝化细菌氧化氨为亚硝酸盐/硝酸盐获得能量，并以 CO₂ 为唯一或主要碳源合成细胞物质；蓝细菌利用光能、以水为氢供体放氧同化 CO₂。两者分别属于：',
    options: [
      '化能自养型；光能自养型',
      '化能异养型；光能异养型',
      '光能自养型；化能自养型',
      '化能自养型；化能异养型',
    ],
    answer: 0,
    explanation:
      '按能源与碳源两维划分：硝化细菌从无机物氧化获能、以 CO₂ 为碳源，属化能自养型；蓝细菌行产氧光合作用，以光能为能源、CO₂ 为碳源、水为氢供体，属光能自养型。异养指以有机物为主要碳源；光能异养型以有机物为氢供体行不产氧光合（如紫色非硫细菌），与蓝细菌明显不同。',
    difficulty: 3,
  },
  // ================= 第 6 章 代谢（q-microbiology-26 ~ 30） =================
  {
    id: 'q-microbiology-26',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch6',
    type: 'single',
    question: '微生物代谢中"发酵"的科学定义是：',
    options: [
      '任何在无氧条件下进行的产能代谢',
      '不以分子氧或其他外源电子受体为末端受体的生物氧化产能方式，电子供体脱下的氢经内源中间代谢物（如丙酮酸、乙醛）传递',
      '一切产生乙醇与 CO₂ 的分解代谢',
      '只有乳酸菌才能进行的厌氧代谢',
    ],
    answer: 1,
    explanation:
      '发酵的本质是"无外源末端电子受体"的产能方式：葡萄糖降解产生的 NADH 把氢交给内源有机受体（丙酮酸及其衍生物），以再生 NAD⁺ 维持代谢运转，每分子葡萄糖净得 2 ATP。无氧呼吸虽无 O₂ 参与但以 NO₃⁻ 等外源受体结尾，不属发酵；乙醇发酵与乳酸发酵只是发酵的两种具体类型。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-27',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch6',
    type: 'single',
    question: '硝化作用的两个阶段分别由不同类群的细菌完成，正确的对应是：',
    options: [
      '亚硝化细菌（如亚硝化单胞菌）把 NH₃ 氧化为 NO₂⁻；硝化细菌（如硝化杆菌）再把 NO₂⁻ 氧化为 NO₃⁻',
      '同一类细菌直接把 NH₃ 一步氧化为 NO₃⁻',
      '硝化细菌把 NO₃⁻ 还原为 NH₃',
      '反硝化细菌把 NH₃ 氧化为 NO₂⁻',
    ],
    answer: 0,
    explanation:
      '硝化是好氧化能自养的两步接力：氨氧化细菌（AOB）将 NH₃ 氧化为亚硝酸盐，亚硝酸盐氧化细菌（NOB）再氧化为硝酸盐，各自从中获能同化 CO₂。C 描述的是逆向过程；反硝化细菌是把 NO₃⁻ 还原为 N₂ 的无氧呼吸菌群，与硝化方向相反；两步分工使硝化作用对土壤酸化与氮素转化效率有重要影响。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-28',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch6',
    type: 'single',
    question: '肠膜明串珠菌进行异型乳酸发酵时，1 分子葡萄糖的主要产物是：',
    options: [
      '2 分子乳酸',
      '1 分子乳酸、1 分子乙醇和 1 分子 CO₂',
      '2 分子乳酸和 2 分子乙醇',
      '1 分子乙酸、1 分子乳酸和 1 分子 H₂',
    ],
    answer: 1,
    explanation:
      '异型乳酸发酵走磷酸己酮酸（PK）途径：葡萄糖经 6-磷酸葡糖酸脱羧释放 CO₂，裂解为 3-磷酸甘油醛与乙酰磷酸，前者转变为乳酸、后者还原为乙醇，每分子葡萄糖仅净得 1 ATP。同型乳酸发酵经 EMP 途径产 2 分子乳酸、净得 2 ATP；D 选项为混合酸发酵的产物组合之一。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-29',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch6',
    type: 'single',
    question: '关于微生物次级代谢及其产物的叙述，正确的是：',
    options: [
      '次级代谢产物在对数生长期大量合成，与菌体生长完全偶联',
      '次级代谢产物并非菌体生长繁殖所必需，多在对数期之后（稳定期前后）大量积累，如抗生素、色素与毒素',
      '次级代谢产物都是结构简单的小分子中间代谢物',
      '一切微生物都具有次级代谢',
    ],
    answer: 1,
    explanation:
      '次级代谢产物（抗生素、色素、生物碱、毒素、激素等）对菌体生长非必需，一般在营养限制、进入稳定期后大量合成，与初级代谢共用前体但受独立的调控网络支配，因此发酵工业常通过延长稳定期、补料分批培养与解除反馈调节来提高产量。次级代谢仅存在于放线菌、霉菌等部分微生物，其产物结构反而更加复杂多样。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-30',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch6',
    type: 'truefalse',
    question:
      '反硝化细菌在缺氧条件下以硝酸盐为末端电子受体，经 NO₃⁻→NO₂⁻→NO→N₂O→N₂ 的链式还原把电子传入呼吸链产能，属于典型的无氧呼吸。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。无氧呼吸指以 O₂ 以外的外源分子（NO₃⁻、SO₄²⁻、CO₂ 等）为末端电子受体、仍经呼吸链传递电子的产能方式，效率介于发酵与有氧呼吸之间。反硝化作用使农田氮肥以 N₂/N₂O 形式流失并贡献温室气体；淹水稻田等缺氧环境是其活跃场所。',
    difficulty: 2,
  },
  // ================= 第 7 章 生长与控制（q-microbiology-31 ~ 35） =================
  {
    id: 'q-microbiology-31',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch7',
    type: 'single',
    question: '实验室湿热灭菌最常用的高压蒸汽灭菌常规条件是：',
    options: [
      '121 ℃、约 0.1 MPa（表压）、15–30 分钟',
      '100 ℃、常压、30 分钟',
      '63–66 ℃、30 分钟',
      '160–170 ℃、2 小时（干热）',
    ],
    answer: 0,
    explanation:
      '高压蒸汽灭菌在 121 ℃（约 0.1 MPa 饱和蒸汽压）维持 15–30 分钟，可杀灭包括细菌芽孢在内的一切微生物，适用于培养基、生理盐水、器械与医疗废弃物等。湿热使蛋白迅速凝固变性、蒸汽冷凝释放潜热、穿透力强，效率远高于干热；100 ℃ 常压煮沸与巴氏消毒均不能确保杀灭芽孢；160–170 ℃ 干烤 2 小时属干热灭菌，适用于耐热玻璃器皿而非含糖培养基。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-32',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch7',
    type: 'single',
    question: '恒化器（chemostat）连续培养的控制核心是：',
    options: [
      '通过限制性营养物（如氮源或碳源）浓度把细菌比生长速率控制在最大值以下，并使稀释率 D 小于临界值以免菌体被"洗出"',
      '以光密度反馈维持最大浊度，使生长速率恒等于最大速率',
      '间歇式地一次性更换全部培养液以保持新鲜',
      '无限提高搅拌转速与通气量即可实现连续培养',
    ],
    answer: 0,
    explanation:
      '恒化器靠限制一种必需营养物把比生长速率 μ 压到 μmax 以下，系统在 μ = D 的稳态运行；一旦 D 超过 μmax，菌体排出快于增殖即被洗出。以浊度反馈维持高密度的是恒浊器；连续培养的价值在于使菌体长期保持在对数期稳态，广泛用于生理研究与单细胞蛋白等发酵生产。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-33',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch7',
    type: 'single',
    question: '混合平板菌落计数法的规范做法与依据是：',
    options: [
      '梯度稀释后取合适稀释度倾注平板，培养后计数菌落数在 30–300 之间的平板，每个菌落视为由一个活细胞（CFU）繁殖而来',
      '用血球计数板在显微镜下直接数出全部菌体数',
      '测培养液 OD₆₀₀ 吸光度后直接换算为活菌数',
      '计数平板上的一切颗粒包括死菌碎片',
    ],
    answer: 0,
    explanation:
      '平板菌落计数基于"一个活菌经繁殖长成一个菌落"的假设，30–300 的计数范围兼顾了可数性与统计可靠性，结果以 CFU/mL 表示并按稀释倍数回算。血球计数板直接计数所得为含死菌的总菌数；比浊法反映总生物量而非活菌数；死菌碎片不能形成菌落，不计入活菌结果。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-34',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch7',
    type: 'single',
    question: '关于热致死曲线与商业灭菌的"D 值—12D 概念"，正确的是：',
    options: [
      'D 值是某温度下使微生物活数减少 90%（一个对数周期）所需的时间；低酸罐头对肉毒梭菌芽孢常按 12D 处理，即把存活概率降到 10⁻¹²',
      'D 值是杀灭全部微生物所需的时间',
      '12D 表示把灭菌温度提高 12 ℃',
      'D 值随温度升高而增大',
    ],
    answer: 0,
    explanation:
      'D 值定义为活菌数下降一个数量级所需的时间，肉毒梭菌芽孢在 121 ℃ 的 D 值约 0.2 分钟，12D 工艺（F₀ 约 2.5 分钟）使初始 10¹² 个芽孢理论上仅剩 1 个的存活概率，从而保证低酸食品的商业无菌。D 值随温度升高呈指数缩短；使 D 值缩小 10 倍所需升高的温度数才是 z 值；"杀灭全部微生物的时间"对应 F 值的通俗表述而非 D 值定义。',
    difficulty: 3,
  },
  {
    id: 'q-microbiology-35',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch7',
    type: 'truefalse',
    question: '经巴氏消毒法处理的鲜牛乳已实现"商业无菌"，可在室温下长期存放。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。巴氏消毒（如 63–66 ℃、30 分钟或 72 ℃、15 秒）只杀灭致病菌繁殖体与大部分无芽孢杂菌，芽孢与耐热菌仍可存活，故鲜乳必须冷链贮运并在短期内消费；"商业无菌"须以 12D 级别的热处理（如超高温 UHT 135–150 ℃ 数秒结合无菌灌装）才能达到。',
    difficulty: 2,
  },
  // ================= 第 8 章 遗传变异（q-microbiology-36 ~ 40） =================
  {
    id: 'q-microbiology-36',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch8',
    type: 'single',
    question: '1928 年 Griffith 与 1944 年 Avery 的肺炎链球菌实验分别证明了：',
    options: [
      'DNA 是遗传物质；蛋白质是遗传物质',
      '活的无毒菌可被转化为有毒类型（体内转化现象）；转化因子是 DNA 而非蛋白质、脂类或多糖',
      'RNA 是遗传物质；DNA 复制是半保留式的',
      '细菌接合需要性菌毛；转导以噬菌体为媒介',
    ],
    answer: 1,
    explanation:
      'Griffith 发现热灭活 SⅢ 型菌与活 R 型菌混合注射小鼠能分离出活 S 型菌，首次揭示体内转化现象；Avery 等将各成分分离纯化并逐一用酶降解，证明只有 DNase 处理能消除转化活性，从而确定转化因子为 DNA，为确立 DNA 的遗传物质地位奠定基础。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-37',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch8',
    type: 'single',
    question: 'λ 噬菌体介导的局限性转导（特殊转导）gal⁺/bio⁺ 基因的机制是：',
    options: [
      '噬菌体在装配时随机错误包装任意宿主 DNA 片段',
      '前噬菌体从宿主染色体切离时发生偏差，携带其整合位点两侧相邻的 gal 或 bio 基因一并切下，再注入受体菌',
      '受体菌直接摄取裸露的 DNA 分子',
      '两个细菌通过性菌毛交换质粒',
    ],
    answer: 1,
    explanation:
      'λ 前噬菌体整合在大肠杆菌 gal 与 bio 基因之间，异常切离时把一侧邻接的基因卷入噬菌体基因组（形成缺陷噬菌体），转入受体菌后使其获得 gal⁺ 或 bio⁺，故只限少数基因可被转导，称局限（特殊）转导。A 描述的是普遍转导（如 P1、P22 装配时随机包装宿主 DNA）；C 为转化；D 为接合。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-38',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch8',
    type: 'single',
    question: 'Luria 与 Delbrück 的波动实验（1943）证明：',
    options: [
      '抗噬菌体突变由噬菌体接触诱导产生，接触后才出现',
      '抗性突变在接触噬菌体之前已随机自发发生，噬菌体仅起选择作用（突变—选择而非定向适应）',
      '细菌的抗性是通过遗传转化从死菌获得的',
      '噬菌体退化丧失了裂解能力',
    ],
    answer: 1,
    explanation:
      '将同一出发菌分装于许多小管独立培养，再分别涂布含噬菌体的平板，各管抗性菌落数的方差远超"接触后适应"假说预期的泊松分布，说明抗性突变早在接触噬菌体前已在各管中随机发生、频率遵循突变概率。该实验奠定了微生物遗传学定量研究的基础，也澄清了变异的方向性问题。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-39',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch8',
    type: 'single',
    question: 'Ames 试验检测环境致突变物所用的测试菌株与判断依据是：',
    options: [
      '野生型鼠伤寒沙门菌；平板上出现任何菌落即为阳性',
      '组氨酸营养缺陷型鼠伤寒沙门菌；受试物使其回复突变为 his⁺（在不加组氨酸的平板上长出菌落），回复菌落数显著超过溶剂对照即判为致突变阳性',
      '大肠杆菌乳糖发酵缺陷株；平板颜色变化指示突变',
      '枯草芽孢杆菌；以芽孢萌发率作为突变指标',
    ],
    answer: 1,
    explanation:
      'Ames 试验采用 his⁻ 的鼠伤寒沙门菌 TA 系列菌株（带脂多糖屏障缺失与切除修复缺失等增敏标记），致突变物使缺陷基因回复突变为 his⁺ 而在基本平板上形成菌落；加入 S9 肝微粒体组分可检出需代谢活化的前致突变物。约 80%–90% 的已知致癌物在该试验中呈阳性，使其成为化学物致癌风险快速初筛的经典方法。',
    difficulty: 3,
  },
  {
    id: 'q-microbiology-40',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch8',
    type: 'truefalse',
    question:
      '菌种冷冻真空干燥（冻干）保藏时，常将菌悬液与脱脂乳、蔗糖等保护剂混合，预冻后在高真空下升华干燥、熔封避光保存，因菌体代谢基本停滞，保藏期可达数年至十余年。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。保护剂可替代部分结合水、减少冰晶对细胞的机械损伤，冻干后残余水分极低、代谢与变异近乎停止，绝大多数微生物可借此长期保藏；转移瘤胃菌等个别菌与部分原生动物更适合液氮超低温冻结。冻干是各菌种保藏中心应用最广泛的长期保藏方法之一。',
    difficulty: 2,
  },
  // ================= 第 9 章 生态（q-microbiology-41 ~ 45） =================
  {
    id: 'q-microbiology-41',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch9',
    type: 'single',
    question: 'PCR 技术中使用的 Taq DNA 聚合酶最初分离自：',
    options: [
      '大肠杆菌',
      '水生栖热菌（Thermus aquaticus），分离自黄石公园热泉的嗜热菌',
      '枯草芽孢杆菌',
      '酿酒酵母',
    ],
    answer: 1,
    explanation:
      'Taq 酶来自嗜热菌水生栖热菌，最适催化温度约 72 ℃、95 ℃ 下半衰期约 40 分钟，能耐受 PCR 每轮变性的高温而无需反复补加酶，使 PCR 实现程序化自动循环。这是极端微生物资源服务现代生物技术的经典案例，也说明嗜热酶在分子诊断与扩增技术中的独特价值。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-42',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch9',
    type: 'single',
    question: '氧化亚铁硫杆菌在生物湿法冶金中的作用，正确的叙述是：',
    options: [
      '通过发酵产酸溶解矿石',
      '在 pH 2–4 的酸性环境中氧化 Fe²⁺ 与还原态硫化物获能（化能自养），把矿石中的金属硫化物氧化溶解，使铜、金等进入浸出液',
      '以光合作用固定 CO₂ 并还原金属氧化物',
      '与植物共生固氮、改良矿区土壤肥力',
    ],
    answer: 1,
    explanation:
      '该菌是中度嗜酸的化能自养菌，靠氧化 Fe²⁺、元素硫与硫化矿获得能量同化 CO₂；代谢产酸并使黄铁矿型矿石氧化溶解，铜以 Cu²⁺ 形式浸出、金颗粒得以暴露，故用于低品位矿与尾矿的生物浸出，同时其产酸活动也造成酸性矿山废水的环境问题，是硫与铁循环的重要环节。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-43',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch9',
    type: 'single',
    question: '豆科植物根瘤中豆血红蛋白的主要生理功能是：',
    options: [
      '直接催化 N₂ 还原为 NH₃ 的化学反应',
      '大量供氧以尽可能加速根瘤呼吸',
      '作为氧缓冲载体，把游离氧维持在既满足呼吸产能需要、又不至于使固氮酶失活的极低稳态水平',
      '储存氮素并把铵盐转运至茎叶',
    ],
    answer: 2,
    explanation:
      '固氮酶对 O₂ 极敏感、遇氧不可逆失活，豆血红蛋白（血红素辅基的豆科血红蛋白）结合并缓慢释放 O₂，使根瘤中央组织维持低氧稳态：既为类菌体呼吸供氧（每还原 1 mol N₂ 约需 16 mol ATP），又保护固氮酶，其逻辑与肌红蛋白缓冲肌肉氧分压类似。固氮反应本身由固氮酶催化，与豆血红蛋白无直接催化关系。',
    difficulty: 3,
  },
  {
    id: 'q-microbiology-44',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch9',
    type: 'truefalse',
    question:
      '地衣是真菌（多为子囊菌）与藻类或蓝细菌形成的互利共生体：真菌提供水分、无机盐与附着保护，光合生物提供有机养料。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。地衣中真菌菌丝包裹并保护光合伙伴、供给水分与矿质养料并决定其形态，藻类或蓝细菌光合固碳回馈有机物，双方在形态、生理与繁殖上高度整合为稳定的共生体，因而能拓居裸岩、极地与高山等严酷生境，是原生演替的先锋生物与大气污染的敏感指示者。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-45',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch9',
    type: 'multiple',
    question: '关于微生物驱动的氮循环各环节，正确的叙述有：',
    options: [
      '生物固氮由固氮酶复合体催化，把 N₂ 还原为 NH₃，仅见于部分原核生物（如根瘤菌、固氮菌属与某些蓝细菌）',
      '氨化作用是微生物分解有机含氮化合物释放 NH₃/NH₄⁺ 的矿化过程',
      '硝化是好氧化能自养过程，分氨氧化（NH₃→NO₂⁻）与亚硝酸盐氧化（NO₂⁻→NO₃⁻）两步',
      '反硝化在缺氧条件下把 NO₃⁻ 逐步还原为 N₂O/N₂，是土壤氮素流失与温室气体 N₂O 的重要来源',
      '硝化作用可在严格厌氧环境中高效进行',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '固氮、氨化、硝化与反硝化构成氮循环主干：固氮消耗大量能量（N₂+8H⁺+8e⁻+16ATP→2NH₃+H₂）把气态氮引入生物圈；氨化实现有机氮矿化；硝化把氨氧化为硝酸盐便于植物吸收但依赖 O₂ 作电子受体，严格厌氧环境无法进行（厌氧氨氧化 anammox 是另一条独立途径）；反硝化则使氮素以气态形式逸失并产生 N₂O，故 E 错误。',
    difficulty: 3,
  },
  // ================= 第 10 章 感染与免疫（q-microbiology-46 ~ 50） =================
  {
    id: 'q-microbiology-46',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch10',
    type: 'single',
    question: '关于人体正常菌群的生理意义，错误的是：',
    options: [
      '生物拮抗：占位性保护与产生抑菌物质，阻止病原菌定植',
      '肠道菌群能合成维生素 K 与部分 B 族维生素供宿主利用',
      '参与免疫系统的发育成熟与黏膜屏障功能维持',
      '正常菌群与宿主始终互利，任何情况下都不会致病',
    ],
    answer: 3,
    explanation:
      '正常菌群在菌群失调（如长期大量使用广谱抗生素）、定位转移（侵入原本无菌的部位）或宿主免疫功能低下时，可转化为条件致病菌，引起二重感染与机会性感染（如白假丝酵母大量增殖），故 D 过于绝对。A、B、C 概括了正常菌群的三大益处：定植抗力、营养贡献与免疫调节。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-47',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch10',
    type: 'single',
    question: '不同病原菌的最小感染剂量差异悬殊，志贺菌与霍乱弧菌的典型数量级分别是：',
    options: [
      '约 10–100 个；约 10⁸ 个以上',
      '约 10⁸ 个；约 10–100 个',
      '两者均约 10–100 个',
      '两者均在 10⁸ 个以上',
    ],
    answer: 0,
    explanation:
      '志贺菌侵袭力强，仅需 10–100 个菌即可致病，这是其经手—口途径极易传播的原因；霍乱弧菌必须摄入约 10⁸–10¹¹ 个才能突破胃酸屏障并定植小肠分泌肠毒素。二者相差 6–9 个数量级，说明"致病性"是病原毒力、侵入门户与宿主防御共同决定的定量关系。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-48',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch10',
    type: 'truefalse',
    question:
      '内毒素耐热，100 ℃ 煮沸不能将其破坏，需 250 ℃ 干热约 30 分钟（或 180 ℃ 长时间干烤）方可彻底消除其致热活性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。内毒素是 G⁻ 菌外膜的脂多糖，其毒性中心为类脂 A，化学性质稳定而极耐热；注射液被其污染产生的"热原质"无法用常规高压灭菌去除，生产上须 250 ℃ 干热处理，或以超滤、活性炭吸附清除，并用鲎试剂进行纳克级灵敏检测。100 ℃ 煮沸只能杀灭菌体，反而促使内毒素释放。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-49',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch10',
    type: 'multiple',
    question: '关于补体系统三条激活途径的比较，正确的有：',
    options: [
      '经典途径由抗原–抗体复合物启动，C1q 识别 IgG/IgM 的 Fc 段',
      '凝集素途径由甘露糖结合凝集素（MBL）识别病原体表面特定糖型结构启动',
      '旁路途径不依赖抗体，病原体表面缺乏宿主调节蛋白时 C3b 在其上稳定扩增',
      '三条途径交汇于 C5 转化酶水平，共用 C5b–9 攻膜复合物（MAC）的末端共同通路',
      '三条途径都必须有特异性抗体参与才能启动',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '经典、凝集素与旁路途径的识别启动机制各异（免疫复合物、凝集素识别糖结构、C3 持续低水平轰击异源表面），但均在 C3/C5 转化酶水平汇合，最终形成 C5b–9 攻膜复合物在靶细胞膜上打孔溶菌。旁路与凝集素途径不依赖抗体，属于感染早期即可启用的非特异防线，故 E 错误。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-50',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch10',
    type: 'single',
    question: '下列人工主动免疫制剂与其类型的对应关系，完全正确的一组是：',
    options: [
      '卡介苗（减毒活疫苗）；脊髓灰质炎 Salk 疫苗（灭活疫苗）；破伤风类毒素（类毒素疫苗）；流感裂解疫苗（亚单位疫苗）',
      '卡介苗（灭活疫苗）；Salk 疫苗（减毒活疫苗）；破伤风抗毒素（类毒素疫苗）',
      '卡介苗（类毒素）；乙肝疫苗（减毒活疫苗）；白喉抗毒素（主动免疫制剂）',
      'Sabin 口服糖丸（灭活疫苗）；麻疹疫苗（亚单位疫苗）；类毒素由内毒素经甲醛脱毒制成',
    ],
    answer: 0,
    explanation:
      '卡介苗为牛型结核杆菌减毒活疫苗，模拟自然感染、免疫持久；Salk 为三价灭活脊灰疫苗（口服的 Sabin 糖丸才是减毒活疫苗）；破伤风类毒素是外毒素经甲醛脱毒、保留免疫原性的主动免疫制剂；流感裂解疫苗属亚单位疫苗。B、C 中抗毒素是注入现成抗体的被动免疫制剂而非类毒素；D 中类毒素来源于外毒素而非内毒素。',
    difficulty: 3,
  },
  // ================= 第 11 章 分类鉴定（q-microbiology-51 ~ 55） =================
  {
    id: 'q-microbiology-51',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch11',
    type: 'single',
    question: '按细菌命名法规，大肠杆菌的学名书写规范是：',
    options: [
      'Escherichia coli——属名首字母大写、种加词小写，整体斜体',
      'escherichia Coli——属名小写、种加词首字母大写，正体书写',
      '首次出现时必须写全命名人全名与年份',
      '种加词在前、属名在后',
    ],
    answer: 0,
    explanation:
      '双名法学名由拉丁化的属名（名词、首字母大写）与种加词（形容词或名词所有格、小写）构成，整体斜体；首次描述时可附命名人缩写与年份，如 Escherichia coli (Migula 1895)，其后可简写为 E. coli。B 项大小写与排版均误；C 命名人用缩写而非全名；D 项顺序颠倒。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-52',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch11',
    type: 'single',
    question: '选择 16S rRNA 基因作为原核生物系统发育"分子钟"的关键理由，不包括：',
    options: [
      '所有细胞生物都含 rRNA，其功能高度保守，约束了序列的演化速率',
      '分子长约 1.5 kb，保守区与可变区镶嵌排列，既可设计通用引物又保留分类分辨率',
      '其序列数据库积累最丰富，便于比对与共享',
      '其进化速度恰好快到每个菌株都拥有独一无二的序列',
    ],
    answer: 3,
    explanation:
      '16S rRNA 在种内高度一致，株间分辨率有限，"每个菌株独一无二"错误——菌株水平分型需 MLST、全基因组 ANI 等更高分辨率方法。A、B、C 正是 Woese 选择 16S 建立三域学说的核心理由：普适、分子大小适中且快慢区镶嵌、数据可比性强。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-53',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch11',
    type: 'single',
    question: '古菌（古细菌）与细菌（真细菌）的关键区别，正确的是：',
    options: [
      '古菌细胞壁含肽聚糖，细菌不含',
      '古菌膜脂以醚键连接异戊二烯侧链（常带分支与环化），细菌以酯键连接脂肪酸；且两者 16S rRNA 谱系相互独立',
      '古菌都是嗜热菌，细菌都是中温菌',
      '古菌有核膜而细菌没有',
    ],
    answer: 1,
    explanation:
      '古菌膜脂为甘油醚键连接植烷类侧链，部分嗜热古菌的脂质还形成跨膜四醚单体（单分子层膜），与细菌的酯键脂肪酸膜构成根本性区别；16S rRNA 序列比较证明古菌是独立于细菌的域，并与真核生物亲缘更近。肽聚糖是细菌（G⁺/G⁻）细胞壁成分，古菌壁为假肽聚糖或 S 层蛋白；嗜热只是部分古菌性状，两者均无核膜。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-54',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch11',
    type: 'single',
    question: '国际上发表一个细菌新种时，关于"模式菌株（type strain）"的规范要求是：',
    options: [
      '无需指定模式菌株，仅凭形态与生理描述即可',
      '必须指定模式菌株，并存放于两个（含）以上国际认可的菌种保藏中心，保证全球可索取复核',
      '模式菌株必须是该种中致病性最强的菌株',
      '模式菌株每五年必须更换一次',
    ],
    answer: 1,
    explanation:
      '《国际原核生物命名法规》要求新种指定模式菌株（作为该名称的永久载体，须代表该种的典型特征），并同时存放于不同国家的公认保藏机构（如 ATCC、DSM、CCTCC），使学名与生物实体一一对应、可复核；模式菌株一经指定即长期稳定，与致病力无关，也非定期更换。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-55',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch11',
    type: 'truefalse',
    question:
      '现行原核生物物种界定的"金标准"是：DNA–DNA 杂交率 ≥70%（且 ΔTm ≤5 ℃）判为同种；16S rRNA 序列相似性低于 98.7% 则可基本判定为不同种。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。16S 相似性低于 98.7% 时两菌几乎不可能属于同种（具有否决力），而 ≥98.7% 时仍须 DNA–DNA 杂交（≥70% 且 ΔTm≤5 ℃ 判同种）进一步裁定；二者与 G+C 含量差（>5% 必为不同种）及表型特征共同构成多相分类的物种界定体系。',
    difficulty: 2,
  },
  // ================= 第 12 章 应用（q-microbiology-56 ~ 60） =================
  {
    id: 'q-microbiology-56',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch12',
    type: 'single',
    question: '酸奶发酵中嗜热链球菌与保加利亚乳杆菌（德氏乳杆菌）的"互生"关系表现为：',
    options: [
      '两菌竞争乳糖，强者最终淘汰弱者',
      '链球菌产酸及少量甲酸、CO₂ 并消耗氧，促进乳杆菌生长；乳杆菌水解释放的氨基酸与肽又反过来滋养链球菌，两者在约 42 ℃ 协同快速凝固牛乳',
      '两菌互不接触，彼此没有任何代谢影响',
      '乳杆菌的噬菌体裂解链球菌，形成独特风味',
    ],
    answer: 1,
    explanation:
      '嗜热链球菌消耗溶解氧、产酸并释放甲酸与 CO₂ 刺激乳杆菌生长，乳杆菌的蛋白酶—肽酶系统把乳蛋白水解为小肽与氨基酸供给链球菌利用，两菌混合发酵（约 42 ℃、2.5–3 小时）的速度、酸度与风味远优于任何单菌发酵，是种间互惠共栖（互生）应用于食品工业的经典案例。',
    difficulty: 1,
  },
  {
    id: 'q-microbiology-57',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch12',
    type: 'single',
    question: '谷氨酸发酵中控制生物素"亚适量"的原因是：',
    options: [
      '生物素过量会直接抑制谷氨酸脱氢酶活性',
      '适量饥饿生物素使谷氨酸棒杆菌的细胞膜通透性增大，合成的谷氨酸得以分泌到胞外累积，从而解除胞内反馈抑制',
      '生物素是谷氨酸碳骨架的直接前体',
      '生物素限制会促进菌体大量繁殖从而提高产量',
    ],
    answer: 1,
    explanation:
      '生物素是脂肪酸合成的必需辅因子，亚适量供给时膜磷脂合成受限、膜透性增大，谷氨酸持续外泌而不在胞内积累至抑制自身合成的浓度；生物素充足时菌体生长旺盛但产物滞留胞内、产量反而下降。生产上也常用吐温、青霉素等通过影响细胞膜合成达到同样的渗漏效果。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-58',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch12',
    type: 'single',
    question: '关于活性污泥法与厌氧消化处理污水，正确的说法是：',
    options: [
      '活性污泥以厌氧菌为主，在密闭罐中静止处理',
      '活性污泥以好氧菌胶团为主体、辅以原生动物捕食，需持续曝气供氧；高浓度有机污泥则常用厌氧消化，经水解酸化、产氢产乙酸与产甲烷三阶段互营降解并回收甲烷',
      '厌氧消化过程不需要任何微生物参与',
      '曝气池中原生动物的出现标志着工艺运行失败',
    ],
    answer: 1,
    explanation:
      '活性污泥是细菌絮凝体（菌胶团）—原生动物—后生动物构成的微型生态系统，好氧曝气降解有机物（以 BOD 荷量衡量），钟虫等固着型纤毛虫的出现恰是运行良好的指示；剩余污泥的厌氧消化依赖水解发酵菌、产氢产乙酸菌与产甲烷古菌间的种间氢转移互营协作，并副产甲烷能源。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-59',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch12',
    type: 'single',
    question: 'CRISPR-Cas 系统作为细菌与古菌的适应性免疫，其"免疫记忆"储存于：',
    options: [
      'CRISPR 位点中的间隔序列（spacer）——整合自既往入侵的噬菌体或质粒的 DNA 小片段',
      'Cas 蛋白的氨基酸序列本身',
      '细菌细胞壁的磷壁酸修饰模式',
      '质粒上的抗生素抗性基因',
    ],
    answer: 0,
    explanation:
      'CRISPR 位点由同向重复序列与间隔序列相间排列，间隔序列正是历史上入侵者（噬菌体或质粒）DNA 被整合留下的"档案"；转录加工为 crRNA 后引导 Cas 核酸酶识别再入侵者的同源序列并靶向切割，实现对同一入侵者的二次高效免疫。这一"记忆—识别—切割"逻辑正是基因组编辑技术的原理来源。',
    difficulty: 2,
  },
  {
    id: 'q-microbiology-60',
    subjectId: 'microbiology',
    chapterId: 'microbiology-ch12',
    type: 'single',
    question: '关于合成生物学的里程碑成果，叙述错误的是：',
    options: [
      'JCVI-syn3.0 含 473 个基因，是可自主复制的最小合成基因组之一，其中约 149 个基因功能尚不明确',
      '在酿酒酵母中重构并优化青蒿酸合成途径，工程菌发酵水平已达约 25 g/L，支撑了半合成青蒿素的规模化生产',
      '"最小基因组"研究采用转座子随机插入与全基因组设计—合成—测试的迭代策略',
      '合成生物学只允许在现有菌种上敲除基因，不能设计新的生命系统',
    ],
    answer: 3,
    explanation:
      'D 对合成生物学的理解过于狭窄：其核心正是"设计—构建—测试—学习"迭代下的新元件、新途径乃至新底盘细胞，包括人工合成全基因组移植入去核受体（Mycoplasma mycoides JCVI-syn1.0，2010）。A 对应 Venter 团队 2016 年的最小基因组；B 对应 Keasling 团队的半合成青蒿素路线；C 描述了最小基因组研究的技术路线。',
    difficulty: 3,
  },
]
