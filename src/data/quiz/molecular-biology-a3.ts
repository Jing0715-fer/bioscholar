// ============================================================
// BioScholar 分子生物学测验题库 - 批次 A3（第 7–9 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-molecular-biology-31 ~ q-molecular-biology-45）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：朱玉贤《现代分子生物学》（第5版）、Weaver《Molecular Biology》、
// Watson《Molecular Biology of the Gene》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const molecularBiologyQuizA3: QuizQuestion[] = [
  // ================= 第 7 章 翻译与蛋白质靶向（q-molecular-biology-31 ~ 35） =================
  {
    id: 'q-molecular-biology-31',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'single',
    question: '在大肠杆菌核糖体中，催化肽键形成的成分是：',
    options: [
      '大亚基中的一种核糖体蛋白 L1',
      '23S rRNA 的肽酰转移酶中心',
      '16S rRNA 的解码中心',
      '延伸因子 EF-Tu 的 GTP 酶活性',
    ],
    answer: 1,
    explanation:
      '2000 年前后解出的核糖体原子结构表明，催化肽键形成的肽酰转移酶中心完全由 50S 大亚基 23S rRNA 的核苷酸构成，没有任何蛋白残基伸入活性中心，核糖体因此是一台核酶——这终结了「哪个蛋白催化肽键」的长期争论。16S rRNA 负责解码与小沟几何校验；EF-Tu 只护送氨酰 tRNA 并水解 GTP，不参与成键化学；L1 位于 E 位附近参与空 tRNA 退出。故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-32',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'truefalse',
    question:
      '原核翻译起始时，mRNA 的 Shine-Dalgarno 序列与起始 tRNA 的反密码子直接配对，从而锁定读框。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。SD 序列位于起始密码 AUG 上游约 5–10 个核苷酸处（一致序列 AGGAGG），其配对对象是小亚基 16S rRNA 3′ 端的富嘧啶序列（CCUCCUUA），而不是任何 tRNA 的反密码子。正是这段 RNA-RNA 配对把 AUG 精确铆进 P 位解码窗、锁定读框；起始 tRNA 的反密码子 CAU 只与 P 位 AUG 配对。真核没有 SD 机制，改用扫描加 Kozak 语境判定起点。故该陈述错误。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-33',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'single',
    question: '关于嘌呤霉素的作用机制，下列叙述正确的是：',
    options: [
      '结合 30S 小亚基引起密码错读',
      '抑制 EF-G 介导的易位步骤',
      '模拟氨酰 tRNA 的 3′ 端进入 A 位，接受肽基并使肽链提前释放',
      '特异性阻断原核 70S 核糖体，对真核 80S 无影响',
    ],
    answer: 2,
    explanation:
      '嘌呤霉素的结构酷似氨酰 tRNA 3′ 端的氨酰腺苷：它进入 A 位后，肽酰转移酶中心不辨真假，把整条肽基转接到它身上，生成的肽酰嘌呤霉素随即与核糖体脱钩，翻译提前收场。由于催化中心在两域高度保守，它对 70S 与 80S 同样有效，做不成选择性抗菌药。引起错读的是链霉素，阻断易位的是红霉素类堵塞出口隧道与放线菌酮作用于真核 60S。故选 C。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-34',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'multiple',
    question: '关于真核翻译的起始，下列叙述正确的有：',
    options: [
      'eIF4F 复合物中 eIF4E 直接结合 5′ 帽，eIF4G 作为支架连接 PABP 形成闭环',
      'eIF2 以 GTP 酶身份护送 Met-tRNAi，其 α 亚基磷酸化导致三元复合物减少而全局抑制起始',
      '扫描模型中起始 AUG 的认定主要由 SD 序列与 16S rRNA 的配对决定',
      'IRES 允许某些病毒与细胞 mRNA 不依赖帽子进行内部起始',
    ],
    answer: [0, 1, 3],
    explanation:
      'A 正确：eIF4E 认帽、eIF4G 桥接 PABP 使 mRNA 成环。B 正确：eIF2-GTP-Met-tRNAi 三元复合物是起始的必经票，eIF2α 磷酸化后 eIF2B 失活、复合物减少，整体起始受抑。D 正确：脊髓灰质炎病毒等借 IRES 绕开帽子，宿主应激 mRNA 亦然。C 错误：SD 序列与 16S rRNA 配对是原核的定位机制，真核靠 Kozak 一致序列（−3 嘌呤与 +4 鸟嘌呤）的语境判定。故选 A、B、D。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-35',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'single',
    question: '关于蛋白质分选与运输，下列综合判断正确的是：',
    options: [
      '分泌蛋白的信号肽在细胞质中即被完全水解，随后肽链经 Sec61 被动扩散入内质网',
      '线粒体基质蛋白以前体形式经 TOM 与 TIM23 输入，膜电位与基质 mtHsp70 提供能量，前导肽由 MPP 切除',
      '过氧化物酶体蛋白必须完全去折叠，才能以单链形式穿过输入孔',
      'importin β 直接识别 NLS 并水解 GTP，为核输入提供方向性',
    ],
    answer: 1,
    explanation:
      'B 正确：基质蛋白带两亲性螺旋前导肽，外膜 TOM 与内膜 TIM23 接力，膜电位拖入带正电前导肽、PAM 马达的 mtHsp70 以 ATP 拽入，基质加工肽酶切去前导肽。A 错：信号肽在转位中经 Sec61 时由腔侧信号肽酶切除，穿膜与翻译同步（共翻译转运），并非被动扩散。C 错：过氧化物酶体输入恰以折叠态乃至寡聚体进行，与线粒体相反。D 错：NLS 由 importin α 识别，方向性由 Ran-GTP 梯度提供而非 importin 水解 GTP。故选 B。',
    difficulty: 3,
  },
  // ================= 第 8 章 原核基因表达调控（q-molecular-biology-36 ~ 40） =================
  {
    id: 'q-molecular-biology-36',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'single',
    question: '提出操纵子学说并因此与沃尔夫共享 1965 年诺贝尔生理学或医学奖的科学家是：',
    options: [
      '雅各布与莫诺',
      '沃森与克里克',
      '比德尔与塔特姆',
      '本泽尔与布伦纳',
    ],
    answer: 0,
    explanation:
      '雅各布与莫诺以乳糖系统为材料，经 PaJaMo 实验等系列遗传学分析，于 1961 年发表「蛋白质合成中的遗传调节机制」，提出操纵子模型：调节基因编码可扩散的阻遏物，作用于操纵基因控制结构基因的转录，两人与沃尔夫共享 1965 年诺贝尔奖。比德尔与塔特姆提出一基因一酶学说获 1958 年奖，沃森与克里克因 DNA 双螺旋获 1962 年奖，本泽尔与布伦纳则分别以顺反子与移码分析闻名。故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-37',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'truefalse',
    question:
      '在乳糖操纵子中，葡萄糖的存在使胞内 cAMP 水平上升，从而增强 CAP 对转录的正调控。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。葡萄糖的存在恰恰使 cAMP 水平骤降：葡萄糖经磷酸转移酶系统转运时中间物 EIIA 保持去磷酸化，不能激活腺苷酸环化酶，同时以诱导物排阻扣住乳糖透性酶。cAMP 降低后，CAP（CRP）二聚体无法被激活，不能结合 lacP 上游约 60 bp 的位点，正调控无从谈起——这正是葡萄糖效应（代谢物阻遏）与双重生长曲线的分子基础。故该陈述把方向说反了，应判错误。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-38',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'single',
    question: '色氨酸充足时，trp 操纵子衰减机制的结局是：',
    options: [
      '核糖体在两个连续色氨酸密码子处滞留，2:3 抗终止发夹形成，聚合酶通读',
      '核糖体越过双 Trp 密码子停于区 2，3:4 终止发夹形成，约九成转录止步前导区',
      'TrpR 阻遏蛋白与色氨酸形成活性复合物，在启动子处阻止聚合酶结合',
      'ρ 因子结合前导区的 rut 位点，水解 ATP 促使转录终止',
    ],
    answer: 1,
    explanation:
      '色氨酸充足时 Trp-tRNA 荷载充沛，核糖体翻译前导肽一路畅行，越过第 10 与 11 位的两个连续色氨酸密码子，停在区 2 的终止密码上；被占住的区 2 无法与区 3 配对，区 3 便与区 4 结成典型 ρ 非依赖终止发夹（茎加 U 串），聚合酶在前导区收工，约九成转录本到不了 trpE。A 描述的是色氨酸匮乏时的通读路径；C 是阻遏（第一道关卡）的机制而非衰减；D 引入了衰减机制中不存在的 ρ 因子。故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-39',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'multiple',
    question: '关于乳糖操纵子，下列叙述正确的有：',
    options: [
      'lacI 编码的阻遏蛋白以四聚体发挥功能，可同时结合主操纵基因与辅操纵基因使 DNA 成环',
      '别乳糖是天然诱导物，IPTG 是不被代谢的人工诱导物',
      'CAP-cAMP 结合 lacP 上游约 60 bp 的位点并使 DNA 弯折，与 RNA 聚合酶 α 亚基 C 端结构域互作',
      'lacI 功能缺失突变导入野生型 lacI 拷贝后仍表现为组成型，无法被互补',
    ],
    answer: [0, 1, 2],
    explanation:
      'A 正确：阻遏四聚体一手抓 O1、一手抓 O3 或 O2，中间 DNA 拱环，转录压至约千分之一。B 正确：别乳糖由本底 β-半乳糖苷酶异构乳糖而来，IPTG 恒定诱导不被消耗。C 正确：CAP-cAMP 使 DNA 弯折约 90 度并招募聚合酶，抬高转录数十倍。D 错误：lacI 是反式作用因子，其突变可被导入的野生拷贝互补恢复可诱导性——不可互补的是顺式的 lacO^c。故选 A、B、C。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-40',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'single',
    question: '关于严紧反应，下列综合判断正确的是：',
    options: [
      'RelA 被 ATP 直接别构激活，无需核糖体参与即可合成 ppGpp',
      'ppGpp 与 DksA 协同作用于 RNA 聚合酶，压低 rRNA 与 tRNA 转录、抬高氨基酸合成基因，SpoT 负责平时合成与水解',
      'ppGpp 的主要靶点是核糖体本身，使翻译机器整体解体',
      '严紧反应的生理结果是加快 rRNA 合成以便翻译系统尽快恢复',
    ],
    answer: 1,
    explanation:
      '氨基酸饥饿时空载 tRNA 进入 A 位使核糖体失速，RelA 侦测失速核糖体后以 ATP 与 GDP 合成 ppGpp——A 的「无需核糖体」与「ATP 直接别构」均错。ppGpp 与 DksA 协同结合 RNA 聚合酶，rRNA、tRNA 等启动子因 GC 富集、开式复合物不稳被优先压制，氨基酸合成与胁迫基因反被抬高，rRNA 合成降至十分之一以下——B 正确、D 相反。ppGpp 的靶点是转录机器而非核糖体，C 错。故选 B。',
    difficulty: 3,
  },
  // ================= 第 9 章 真核基因表达调控（q-molecular-biology-41 ~ 45） =================
  {
    id: 'q-molecular-biology-41',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'single',
    question: '一种 DNA 结合域中每七个氨基酸出现一个亮氨酸，两条 α 螺旋借此互咬成二聚体，N 端碱性区成对夹住 DNA 大沟。该结构域是：',
    options: [
      '螺旋-转角-螺旋',
      'C2H2 锌指',
      '碱性亮氨酸拉链',
      '螺旋-环-螺旋的环区',
    ],
    answer: 2,
    explanation:
      '「每七位一个亮氨酸」的两亲 α 螺旋侧面互咬成拉链、二聚体以碱性区认读 DNA，正是 bZIP 家族（碱性亮氨酸拉链）的定义性特征，CREB、AP-1（Jun-Fos）与酵母 GCN4 皆属此族。螺旋-转角-螺旋靠转角连接的识别螺旋入大沟；C2H2 锌指以锌四配位撑起 ββα 折叠；bHLH 靠螺旋-环-螺旋二聚，但「亮氨酸拉链」并非其环区的属性。故选 C。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-42',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'truefalse',
    question:
      '组蛋白 H3 第 4 位赖氨酸三甲基化（H3K4me3）一般标记活跃的启动子，而 H3K27me3 由 Polycomb 复合体 PRC2 写入、介导发育基因的沉默。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。组蛋白修饰的语义词典中，H3K4me3 是活跃启动子的标志，由 Set1/MLL 复合体写入、PHD 指等读取；H3K27me3 由 PRC2（催化亚基 EZH2）写入，CBX 等读取，标记发育基因的「备用沉默」状态，干细胞中两类标记并存的二价基因即由此得名。H3K9me3 则是异染色质路标。题干两句均符合教材口径，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-43',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'single',
    question: '关于 miRNA，下列叙述正确的是：',
    options: [
      '由 RNA 聚合酶 III 直接转录为 22 nt 的成熟形式',
      'pri-miRNA 的发夹由 Dicer 在细胞核内切除',
      'RISC 的引导链以种子区（第 2–7 位）与靶 mRNA 3′ UTR 配对，兼致翻译抑制与 mRNA 不稳定',
      '动物体内 miRNA 与靶标完全互补，一律由 Argonaute 直接切割',
    ],
    answer: 2,
    explanation:
      'C 正确：约 22 nt 的引导链装载 Argonaute 后，以第 2–7 位种子区为主与靶 3′ UTR 部分配对，动物中的结局是翻译抑制加促降解（GW182 招来 CCR4-NOT 脱腺苷酸化）。A 错：pri-miRNA 多由 Pol II 转录且长达数千核苷酸。B 错：核内切除发夹的是 Drosha-DGCR8，Dicer 在胞质再切 pre-miRNA。D 错：完全配对与 Ago2 直接切割是植物及 siRNA 的典型路径，动物 miRNA 多为部分互补。故选 C。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-44',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'multiple',
    question: '关于表观遗传调控，下列叙述正确的有：',
    options: [
      'DNMT1 优先识别半甲基化 CpG 位点，负责复制后甲基化模式的维持',
      'MeCP2 是甲基 CpG 结合蛋白，其突变导致 Rett 综合征',
      'SWI/SNF 是 ATP 依赖的染色质重塑复合体，其亚基突变见于约 20% 的人类肿瘤',
      '印记基因 Igf2 在人类由母源等位基因表达，H19 由父源表达',
      'TET 家族可将 5mC 氧化为 5hmC，参与主动去甲基化',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'A 正确：DNMT1 是维持甲基转移酶，复制产生半甲基化位点由它补写；从头甲基化归 DNMT3A/3B。B 正确：MeCP2 读码器失灵直接致 Rett 综合征。C 正确：SWI/SNF（BAF）亚基突变见于约两成人类肿瘤，SMARCB1 失活近乎单基因致癌。E 正确：TET 氧化 5mC 为 5hmC 并继续降解，是主动去甲基化路径。D 错：Igf2 为父源表达、H19 为母源表达——DMR 甲基化控制 CTCF 绝缘子的落座方向恰与题干相反。故选 A、B、C、E。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-45',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'single',
    question: '关于泛素-蛋白酶体途径，下列综合判断正确的是：',
    options: [
      '泛素经 E1-E2-E3 级联连接底物，K48 多聚链由 26S 蛋白酶体识别并降解蛋白',
      '泛素化的唯一后果是底物被蛋白酶体降解',
      '底物特异性主要由 E2 决定，E1 负责识别降解子',
      'p53 由 APC/C 泛素化降解，细胞周期蛋白 cyclin 由 Mdm2 泛素化降解',
    ],
    answer: 0,
    explanation:
      'A 正确：E1 激活泛素、E2 结合运载、E3 连接底物，K48 多聚链是 26S 蛋白酶体的「死亡判词」，26S 由 20S 核心桶加 19S 调节帽组成，降解为约 8–10 个残基的肽段；此途径的发现获 2004 年诺贝尔化学奖。B 错：K63 链不改寿命而作信号修饰（DNA 修复、内吞等）。C 错：底物特异性几乎全由 E3 决定。D 错：分工恰好说反——p53 由 Mdm2 泛素化，cyclin 由 APC/C 与 SCF 定时降解。故选 A。',
    difficulty: 3,
  },
]
