// ============================================================
// BioScholar 分子生物学测验题库 - 批次 A4（第 10–12 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-molecular-biology-46 ~ q-molecular-biology-60）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3（每章 1:3:1）
// 依据：朱玉贤《现代分子生物学》（第5版）、Weaver《Molecular Biology》、
// Watson《Molecular Biology of the Gene》第 10–12 章正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const molecularBiologyQuizA4: QuizQuestion[] = [
  // ================= 第 10 章 分子生物学技术（q-molecular-biology-46 ~ 50） =================
  {
    id: 'q-molecular-biology-46',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'single',
    question: '关于 Southern、Northern 与 Western 三大印迹的检测对象，正确的组合是：',
    options: [
      'Southern 检测 RNA、Northern 检测 DNA、Western 检测蛋白质',
      'Southern 检测 DNA、Northern 检测 RNA、Western 检测蛋白质',
      'Southern 检测蛋白质、Northern 检测 RNA、Western 检测 DNA',
      '三者均以标记核酸探针为识别分子，检测对象取决于转膜缓冲液',
    ],
    answer: 1,
    explanation:
      '三大印迹以方位词戏成一套家谱：Southern 印迹（1975）以标记核酸探针杂交检测 DNA 片段，用于基因结构、RFLP 与拷贝数分析——1978 年简悦威正是以此完成镰刀型细胞贫血的首次 DNA 水平产前诊断；Northern 印迹（1977）把对象换成 RNA，测定转录本的丰度与长度，须以甲醛或乙二醛变性电泳抑制二级结构；Western 印迹（1979）以一抗与偶联二抗检测 SDS-PAGE 分离后的蛋白质，HIV 感染的免疫印迹确证试验是其临床化身。名字纯属文字游戏，检测对象与方法却截然不同；识别分子分别是核酸探针（前两者）与抗体（后者），并非一律由转膜缓冲液决定。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-47',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'single',
    question: '关于实时定量 PCR（qPCR）的 Ct 值与荧光化学，下列叙述正确的是：',
    options: [
      '起始模板越多，荧光越过阈值的循环数越大',
      'Ct 与起始拷贝数的对数成正比，须以已知浓度的蛋白质作内参',
      'TaqMan 探针法依赖 Taq 的 5′ 核酸外切活性切下探针，使报告荧光脱离淬灭基团，只有目标扩增才发光',
      'SYBR Green I 只与引物二聚体结合，因此特异性高于探针法',
    ],
    answer: 2,
    explanation:
      'Ct 是荧光信号越过阈值的循环数：起始模板越多，信号到阈值越早，Ct 越小；Ct 与起始拷贝数的对数成反比，借标准曲线即可绝对定量，相对定量则以持家基因作内参按 ΔΔCt 折算，A、B 均错。C 正确：TaqMan 探针在两条引物之间，两端分别标记报告基团与淬灭基团，延伸中的 Taq 以 5′ 核酸外切活性把探针切下，报告荧光脱离淬灭——只有目标扩增才发光，特异性更高且可多通道多重定量。D 错：SYBR Green I 嵌入任何双链小沟，引物二聚体同样显形，须以解链曲线复核产物单一性——其特异性反而低于探针法，胜在便宜。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-48',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'single',
    question: '关于质粒载体的构造与蓝白斑筛选，下列叙述正确的是：',
    options: [
      'pUC 系列的复制起点每细胞仅 15–20 份拷贝，pBR322 可达 500–700 份',
      '蓝白斑筛选中，外源片段插入多克隆位点破坏 lacZα，菌落呈白色；未重组载体菌落呈蓝色',
      '平板中以 X-gal 筛选抗性，以氨苄青霉素作生色底物',
      '多克隆位点即载体上唯一的一个限制酶切位点，以保证插入方向',
    ],
    answer: 1,
    explanation:
      '蓝白斑筛选寄生于 lacZα 互补：载体携带编码 β 半乳糖苷酶 α 肽的 lacZα，宿主为 lacZΔM15 菌株，两者互补出有活性的四聚体酶；平板加入诱导物 IPTG 与生色底物 X-gal，未重组载体菌落呈蓝色，外源片段插入 MCS 破坏 α 肽则不能互补、菌落为白色，B 正确、C 的两种试剂角色互换。拷贝数恰相反：pUC 系列的 ori 每细胞可达 500–700 份，pBR322 仅 15–20 份，A 颠倒。多克隆位点是把数十种酶切位点密集排布于一处的「菜单」，双酶切（两个不同位点）才保证插入方向性并防止载体自连，D 错。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-49',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'truefalse',
    question: 'Taq DNA 聚合酶具有 3′ 到 5′ 校读外切活性，其每碱基错误率约十万分之一，产物 3′ 端常带突出的腺苷。', 
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误——Taq 缺乏 3′ 到 5′ 校读活性，这正是其每碱基错误率约十万分之一的根源（不是伴随校读的结果）；需要高保真时须改用带校读活性的 Pfu、Vent 等聚合酶，错误率可再降一个数量级。后半句正确：Taq 产物 3′ 端常附一个突出的腺苷，恰被 TA 克隆载体利用。PCR 每循环分三步：94–95 °C 变性、50–65 °C 退火（常设于引物 Tm 下方约 5 °C）、72 °C 延伸（约 1 kb/min）；产物按 2 的 n 次方指数累积，30 轮理论放大逾十亿倍，特异性几乎全押在引物设计上。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-50',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'multiple',
    question: '关于克隆载体的容量阶梯，下列叙述正确的有：',
    options: [
      '质粒载体宜于携带 10 kb 以内的插入片段',
      'λ 噬菌体载体可装载约 15–23 kb',
      '柯斯质粒（cosmid）依托 F 因子低拷贝稳定携带 100–300 kb',
      'YAC 可在酵母中携带达 1 Mb 的片段，但嵌合率高，渐被 BAC 取代',
    ],
    answer: [0, 1, 3],
    explanation:
      '载体容量按需升级：质粒宜于 10 kb 以内（A 正确）；λ 噬菌体载体装 15–23 kb（B 正确）；柯斯质粒约 35–45 kb（C 错误——把 BAC 的容量安到了柯斯质粒头上：BAC 依托 F 因子低拷贝稳定携带 100–300 kb，是人类基因组计划物理作图的主力）；YAC 在酵母中可达 1 Mb，但嵌合率高、渐被 BAC 取代（D 正确）。拷贝数的选择本身是权衡：高拷贝利于提质粒与测序，却让大片段重排不堪重负；低拷贝牺牲产量换稳定，大基因与重复区段非它不可——工具选型第一条，先问插多大。',
    difficulty: 3,
  },

  // ================= 第 11 章 基因组学与功能基因组学（q-molecular-biology-51 ~ 55） =================
  {
    id: 'q-molecular-biology-51',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'single',
    question: '关于人类基因组计划（HGP）的时间线与数据政策，下列叙述正确的是：',
    options: [
      '1990 年启动，2000 年完成工作草图，2003 年宣告完成图',
      '按百慕大原则，测序数据须沉淀数年后再向公共数据库释放',
      '完成图于 2005 年达成，常染色质区覆盖 90%',
      '中国未参与 HGP 的测序分工',
    ],
    answer: 0,
    explanation:
      'HGP 于 1990 年 10 月正式启动（预算 30 亿美元、计划 15 年，六国协作），2000 年 6 月 26 日宣布工作草图完成，2003 年 4 月——华生与克里克双螺旋论文发表 50 周年后——完成图达成：常染色质区覆盖 99%、碱基准确率高于 99.99%，比原计划提前两年，A 正确。1996 年百慕大会议确立的条款恰相反：所有测序数据 24 小时内公开入库、不得为使用权申请专利，B 错。C 的年份与覆盖度均错。中国于 1999 年正式加入并承担 1% 的任务（3 号染色体短臂末端约 30 Mb），发展中国家第一次登上基因组学的分工表，D 错。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-52',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'single',
    question: '关于 CRISPR-Cas9 基因编辑的机制与衍生工具，下列叙述正确的是：',
    options: [
      'SpCas9 识别的 PAM 为 NNG 三碱基序列，位于靶序列上游 20 bp 处',
      'sgRNA 引导 Cas9 切割后，非同源末端连接可实现敲除，同源定向修复借供体模板写入精确序列',
      '碱基编辑须先造成双链断裂，再由脱氨酶完成 C 至 T 的转变',
      'Doudna 与 Charpentier 因建立胚胎干细胞同源重组打靶获 2007 年诺贝尔奖',
    ],
    answer: 1,
    explanation:
      'Cas9-sgRNA 复合体扫描 PAM（SpCas9 要求 NGG 三碱基），引导序列与靶链配对形成 R 环，HNH 与 RuvC 两个结构域分别切割两条链产生平端双链断裂；断裂之后有两条修复路——NHEJ 随手粘合并常留插入缺失、足以破坏读框实现敲除，HDR 借外源供体模板写入精确序列，B 正确（A 的 PAM 应为 NGG，位置紧邻靶序列而非上游 20 bp）。碱基编辑把脱氨酶拴在失活的 Cas9 上，不切双链即可完成 C 至 T 或 A 至 G 的转变；先导编辑以 Cas9-逆转录酶融合体加 pegRNA 写入小片段替换，C 错。Doudna 与 Charpentier 因 CRISPR-Cas9 获 2020 年诺贝尔化学奖；2007 年奖属于胚胎干细胞打靶的卡佩奇、史密西斯与埃文斯，D 张冠李戴。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-53',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'single',
    question: '比较微阵列与 RNA 测序（RNA-seq），下列叙述正确的是：',
    options: [
      '微阵列无须预先注释即可发现新转录本与融合产物',
      'RNA-seq 的动态范围可达四个数量级以上，并能分辨剪接异构体与等位基因特异性表达',
      '微阵列的动态范围约 10⁵ 以上，远超 RNA-seq',
      'RNA-seq 只能测量已知基因，样品需求比微阵列高得多',
    ],
    answer: 1,
    explanation:
      '微阵列以玻片上固定的已知探针杂交测表达，只能测「已知的」序列、动态范围仅两三个数量级、同源交叉杂交难免、低丰度信号被淹没，A、C 均错。RNA-seq 以读长替代探针：建库（polyA 富集或去 rRNA）、高通量测序、比对或转录本拼装后计数，无须预先注释即可发现新转录本与融合产物，动态范围可达四个数量级以上，跨外显子读段可定位剪接异构体，样品需求可低至纳克级，B 正确、D 错。两代技术约在 2010 年前后完成交接；大批量、固定基因集的临床表达检测仍保留微阵列的位置——工具退役的节奏由应用场景而非先进性决定。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-54',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'truefalse',
    question: '全基因组关联研究（GWAS）以 P 小于 5×10⁻⁸ 为显著性阈值；其命中点多落在非编码调控区，常见变异的效应量普遍很小。', 
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。GWAS 不制造突变，而在人群里搜寻天然变异与性状的统计关联：病例与对照各数万至数十万，高密度 SNP 芯片分型数百万位点并以参考面板做单体型填充，逐位点卡方检验，显著性阈值按多重检验压至 P 小于 5×10⁻⁸，结果画成曼哈顿图。2005 年年龄相关黄斑变性的 CFH 是首个重量级成果，此后 TCF7L2 之于 2 型糖尿病、FTO 之于肥胖接连入册。常见变异效应量普遍很小（比值比 1.1–1.3 量级）、命中点多落在非编码调控区，须借表达数量性状位点与功能注释把「信号」翻译成「机制」——统计学负责指认位点，分子生物学负责解释它为什么致病。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-55',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'multiple',
    question: '关于基因治疗与核酸药物，下列叙述正确的有：',
    options: [
      '腺相关病毒（AAV）外源容量仅约 4.7 kb，以附加体形式长期表达，Luxturna 与 Zolgensma 是其获批代表',
      '诺西那生钠属剪接转换型反义寡核苷酸，促使 SMN2 外显子 7 留在成熟 mRNA，治疗脊髓性肌萎缩',
      'mRNA 疫苗的两大技术支柱是假尿苷等核苷修饰与脂质纳米颗粒（LNP）递送',
      '慢病毒载体不整合基因组、容量最大且免疫原性最低，是体内基因治疗的首选载体',
    ],
    answer: [0, 1, 2],
    explanation:
      'A 正确：AAV 血清型多样的衣壳决定组织向性，不具致病性、以附加体形式长期表达，但容量仅约 4.7 kb；Luxturna（RPE65，视网膜下注射）与 Zolgensma（静脉一次给药治疗 1 型 SMA）是体内路线的获批代表。B 正确：诺西那生钠结合 SMN2 外显子 7 下游的沉默元件、促其保留并补足运动神经元存活蛋白，2016 年获批成为 SMA 首个病因治疗，须鞘内注射定期给药。C 正确：卡里科与韦斯曼发现以假尿苷等修饰核苷替换尿苷可躲开模式识别受体、稳定翻译（2023 年诺贝尔生理学或医学奖），与 LNP 递送共同构成平台两大支柱。D 错误：慢病毒稳定整合（约 8 kb 容量），是离体路线（如 CAR-T）的主力；「不整合、体内首选」是 AAV 的属性。',
    difficulty: 3,
  },

  // ================= 第 12 章 细胞信号转导与癌分子生物学（q-molecular-biology-56 ~ 60） =================
  {
    id: 'q-molecular-biology-56',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'single',
    question: '关于 G 蛋白偶联受体（GPCR）家族的规模与地位，下列叙述正确的是：',
    options: [
      '人类约 800 个 GPCR，其中约半数是嗅觉受体；约三分之一的上市药物以 GPCR 为靶点',
      '人类约 80 个 GPCR，全部为激素受体，与感觉系统无关',
      'GPCR 为单次跨膜受体，是仅次于离子通道的第二大膜受体家族',
      '所有 GPCR 的配体都是疏水性分子，受体因此位于胞质内',
    ],
    answer: 0,
    explanation:
      'GPCR 是真核生物最大的膜受体家族：人类约 800 个成员，其中约半数是嗅觉受体，其余构成味觉、视觉与数百种激素和神经递质的接收面板；市面上约三分之一的药物以 GPCR 为靶点，药理学的半壁江山建在七次跨膜之上，A 正确。B 的数目量级与内容均错。GPCR 的拓扑是七段跨膜 α 螺旋（「胞外 N 端、胞内 C 端」穿膜七次），配体在胞外侧口袋结合引起第 5、6 跨膜螺旋构象变化、打开胞内侧口袋容纳 Gα 的 C 端螺旋——C 的「单次跨膜」是受体酪氨酸激酶的特征。GPCR 接收的肾上腺素、光子等均为亲水或物理信号，受体守在膜上；能自由穿膜的疏水分子（类固醇等）受体在胞内，D 错。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-57',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'single',
    question: '关于霍乱毒素与百日咳毒素对 G 蛋白的修饰，下列叙述正确的是：',
    options: [
      '霍乱毒素把 ADP 核糖基转移到 Gαs 的精氨酸，锁死其 GTP 态，腺苷酸环化酶永不停机',
      '霍乱毒素核糖基化 Gαi 的半胱氨酸，使其不能与受体交换核苷酸',
      '百日咳毒素使 Gαs 的 GTP 酶活性增强数十倍，cAMP 暴跌',
      '两种毒素都通过直接磷酸化腺苷酸环化酶发挥作用',
    ],
    answer: 0,
    explanation:
      '霍乱毒素把 NAD 上的 ADP 核糖基转移到 Gαs 的精氨酸，锁死其 GTP 态——Gαs 不能水解 GTP，腺苷酸环化酶永不停机，肠上皮 cAMP 暴涨驱动 CFTR 大量分泌氯与水，米汤样腹泻由此而来，A 正确。B 恰是百日咳毒素的作用：核糖基化 Gαi 的半胱氨酸使其不能与受体交换核苷酸，Gi 失活等效于 cAMP 升高，与百日咳的阵咳病理相关。C 错：加速 GTP 酶数十倍的是 RGS 蛋白（通路的「保险丝」），与百日咳毒素无关且方向相反。两种毒素都是细菌酶的 ADP 核糖基化修饰，不磷酸化腺苷酸环化酶——同一枚细菌的两种酶成为实验室区分 Gs 与 Gi 的经典工具，D 错。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-58',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'single',
    question: '关于受体酪氨酸激酶（RTK）的激活与 Ras-MAPK 级联，下列叙述正确的是：',
    options: [
      'RTK 为七次跨膜受体，配体结合后经异源三聚体 G 蛋白转导信号',
      'GRB2 以 SH2 抓磷酸化酪氨酸码头、两个 SH3 抓 SOS，SOS 把 Ras 从 GDP 态切换为 GTP 态',
      '级联次序为 ERK 磷酸化 MEK、MEK 磷酸化 Raf，逐级向下传递',
      'Ras 第 12 位甘氨酸突变为缬氨酸使其 GTP 酶活性增强、信号迅速终止',
    ],
    answer: 1,
    explanation:
      'RTK 是生长因子的主接收站：单次跨膜，胞外配体结合域加胞内激酶域（人类 58 个分约 20 个亚家族）；激活的核心是配体诱导二聚化，两个激酶域互相磷酸化激活环，再把 C 端尾部多个酪氨酸磷酸化为停靠码头——七次跨膜与 G 蛋白是 GPCR 的特征，A 错。B 正确：接头蛋白 GRB2 无酶活性，SH2 抓码头、两个 SH3 抓 SOS 的富脯氨酸区，纯做一座桥；SOS 是 Ras 的鸟苷酸交换因子，把膜内侧法尼基化的 21 kDa 小 GTP 酶 Ras 切换到 GTP 态。C 把级联方向写反：Ras-GTP 激活 Raf（MAPKKK），Raf 磷酸化 MEK（MAPKK），MEK 再磷酸化 ERK（MAPK），ERK 入核诱导 Fos 与 Myc。D 错：G12V 突变使 GTP 酶活性近乎归零、开关永久接通，见于约三成人类肿瘤（胰腺癌超过九成）。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-59',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'truefalse',
    question: '抑癌基因在细胞水平呈显性，一份突变拷贝即足以推动失控增殖；原癌基因呈隐性，须两次打击才见表型。', 
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误——两者的遗传逻辑恰好写反。原癌基因在细胞水平显性：一份活性拷贝即足以推动失控增殖，激活方式含点突变（K-Ras G12V）、基因扩增（HER2）、染色体易位（BCR-ABL）与插入突变。抑癌基因呈隐性：两份等位基因都要失活才见表型——诺德森 1971 年以视网膜母细胞瘤提出两次打击假说，1986 年 RB1 被克隆证实：患儿遗传一份缺陷等位基因，另一份经体细胞杂合性缺失（LOH）即发病。Rb 低磷酸化时结合 E2F 扣押 S 期基因；p53 作为「基因组卫士」应答 DNA 损伤促停滞或凋亡，TP53 突变见于约一半人类肿瘤。HPV 以 E7 降解 Rb、E6 加速 p53 降解，正是 DNA 肿瘤病毒对两大抑癌枢纽的组合拳。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-60',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'multiple',
    question: '关于癌基因、抑癌基因与靶向治疗，下列叙述正确的有：',
    options: [
      'K-Ras 第 12 位密码子突变见于约三成人类肿瘤，胰腺癌超过九成',
      'HER2/ERBB2 扩增见于约两成乳腺癌，曲妥珠单抗是其人源化单抗',
      '伊马替尼按 BCR-ABL 激酶的 ATP 口袋设计，把慢性期 CML 变成可控慢病',
      '结直肠癌多步癌变模型中，TP53 失活是腺瘤起步事件，APC 失活使腺瘤翻越恶性门槛成为癌',
    ],
    answer: [0, 1, 2],
    explanation:
      'A 正确：Ras 突变废除 GTP 酶活性、增殖信号常开，见于约三成人类肿瘤（胰腺癌超过九成）；共价结合 KRAS G12C 口袋的索托拉西布 2021 年获批才撕开「不可成药」僵局一角。B 正确：HER2 扩增见于约两成乳腺癌，曲妥珠单抗（1998 年）阻断二聚化并经 ADCC 招来免疫杀伤，抗体偶联药物 T-DXd 再把化疗弹头挂在抗体上精准投递。C 正确：伊马替尼（2001 年获批）按 ATP 口袋设计，慢性期 CML 血液学完全缓解率超过九成、八年生存率近九成；耐药来自看门人突变 T315I，二代达沙替尼接力补位。D 错误——次序颠倒：APC 失活（5 号染色体长臂）是腺瘤起步事件，TP53 失活（17 号染色体短臂 LOH）才使腺瘤翻越恶性门槛成为癌，其间还有 K-Ras 点突变与 18q 的 SMAD2/4 丢失。',
    difficulty: 3,
  },
]
