// ============================================================
// BioScholar 分子生物学测验题库 - 批次 A2（第 4–6 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-molecular-biology-16 ~ q-molecular-biology-30）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3（每章 1:3:1）
// 依据：朱玉贤《现代分子生物学》（第5版）、Weaver《Molecular Biology》、
// Watson《Molecular Biology of the Gene》第 4–6 章正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const molecularBiologyQuizA2: QuizQuestion[] = [
  // ================= 第 4 章 DNA 损伤、修复与突变（q-molecular-biology-16 ~ 20） =================
  {
    id: 'q-molecular-biology-16',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'single',
    question: '关于内源性 DNA 自发性损伤的量级与类型，下列叙述正确的是：',
    options: [
      '一个人体细胞每天因 N-糖苷键自发水解丢失的嘌呤约 10⁴ 个',
      '脱嘧啶是自发性损伤中最大宗的一类，每天数百万起',
      '胞嘧啶脱氨生成胸腺嘧啶，产物为非法碱基而易被修复系统识别',
      '8-氧鸟嘧啶是公认最强的内源致突变氧化产物',
    ],
    answer: 0,
    explanation:
      '脱嘌呤是自发损伤中最大宗的一类：N-糖苷键自发水解使嘌呤碱基整块脱落、留下 AP 位点，一个人体细胞每天丢失嘌呤约 10⁴ 个，相当于每分钟数十个碱基「失踪」，A 正确、B 颠倒了嘌呤与嘧啶。C 错误：胞嘧啶脱氨生成尿嘧啶（腺嘌呤生成次黄嘌呤）；只有 5-甲基胞嘧啶脱氨才生成胸腺嘧啶——T 本身是合法碱基，错配修复无从下手，这正是 CpG 位点突变率偏高的化学根源。D 错误：最强的内源致突变氧化产物是 8-氧鸟嘌呤（8-oxoG），它既能与 C 正常配对也能翻转构象与 A 错配，酿成 G:C 到 T:A 颠换。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-17',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'single',
    question: '关于核苷酸切除修复（NER），下列叙述正确的是：',
    options: [
      'NER 识别损伤的化学身份，因此识别面比碱基切除修复更宽',
      '大肠杆菌 UvrABC 系统在损伤两侧做双切口，切下约 24–32 聚体',
      '真核 NER 由 XPC 或停滞的 RNA 聚合酶发起，切下的片段约 24–32 个核苷酸',
      '转录偶联修复（TC-NER）由 DNA 糖苷酶扫描全基因组发起',
    ],
    answer: 2,
    explanation:
      'NER 面向嘧啶二聚体、黄曲霉毒素与 BPDE 等大体积加合物，其共同点是双螺旋变形——NER 不认化学、只认形变，识别面极宽，A 的因果颠倒（「认形变」而非「认化学」）。真核版本：XPC-hHR23B 识别形变（或转录偶联路线中由停滞的 RNA 聚合酶触发），TFIIH 的 XPB 与 XPD 打开约 25 bp 的泡，XPG 与 ERCC1-XPF 双切，切下 24–32 聚体，C 正确；大肠杆菌 UvrABC 在损伤 5′ 侧约 8 个、3′ 侧约 4–5 个核苷酸处双切，切下的是 12–13 聚体，B 数值张冠李戴。D 错误：TC-NER 由停滞的 RNA 聚合酶 II 呼救、CSA 与 CSB 蛋白执行；DNA 糖苷酶是 BER 的入口酶。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-18',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'single',
    question: '关于大肠杆菌 SOS 应答的分子机制，下列叙述正确的是：',
    options: [
      'RecA 丝状体直接切割 DNA 上的损伤并启动重组修复',
      'RecA 在单链 DNA 上聚合成活性丝状体，作为辅刺激因子催化阻遏蛋白 LexA 的自主切割',
      'LexA 被切割后仅激活 recA 与 uvrAB 两个基因的表达',
      'SOS 应答关闭后突变率仍维持高位，因为易错聚合酶 V 永久取代了聚合酶 III',
    ],
    answer: 1,
    explanation:
      'SOS 应答中，复制叉停摆造成单链 DNA 积累，RecA 在其上聚合成活性丝状体；RecA 并不亲自切割 DNA，而是充当辅刺激因子，催化阻遏蛋白 LexA 的自主切割——LexA 把自己切成分崩两段后，它所阻遏的约 40 个基因集体去阻遏，B 正确、A 错。被诱导的基因不仅有修复与重组的增援（uvrAB、recA），还包括 sulA（暂停细胞分裂）与编码易错聚合酶的 umuDC 等，C 严重低估了基因数目。损伤消退后 RecA 活性回落、LexA 重新积累，SOS 关闭，突变率随之回落——突变只是「租借保真度换存活」的利息，并非永久状态，D 错。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-19',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'truefalse',
    question: '着色性干皮病（XP）对应转录偶联 NER 缺陷，患者神经退行性病变严重而癌变率不升高；Cockayne 综合征对应全基因组 NER 缺陷，皮肤癌风险升高逾千倍。', 
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误——两病的对应关系恰好写反。着色性干皮病（XP）对应 NER（含全基因组与转录偶联路线共用的步骤）缺陷，其亚型 XPA–XPG 各缺一步 NER：患者对日光极度敏感、紫外线损伤无从清除，皮肤癌风险较常人升高逾千倍。Cockayne 综合征对应 TC-NER 特异缺陷（CSA/CSB），患者畏光并伴神经退行性病变，却不见癌变率升高。两病对照揭示：损伤的累积驱动癌变，转录的瘫痪驱动发育损伤——修复体系哪一环失守，决定疾病走向哪一岔路；表型相似不等于通路相同，分子诊断须把「哪一步坏了」落到具体基因。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-20',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'multiple',
    question: '关于双链断裂（DSB）的修复途径，下列叙述正确的有：',
    options: [
      '同源重组（HR）借用姐妹染色单体的同源序列作模板，忠实性高，限于 S 期与 G2 期',
      '非同源末端连接（NHEJ）由 Ku70/Ku80、DNA-PKcs、Artemis 与连接酶 IV 等执行，常伴少量缺失或插入',
      'V(D)J 重组的连接多样性部分来自 NHEJ 接驳时的随机添加与删除',
      '哺乳动物细胞以同源重组处理绝大多数断裂，NHEJ 仅在 G1 期偶有参与',
    ],
    answer: [0, 1, 2],
    explanation:
      'A 正确：HR 以 RecA/Rad51 核蛋白丝侵染姐妹染色单体的同源区，模板是完好副本故修复近乎无损，但要求姐妹染色单体可及，限于 S 与 G2 期。B 正确：NHEJ 的断口工程队——Ku 护端、DNA-PKcs 与 Artemis 修剪、聚合酶 μ/λ 填补、XRCC4-连接酶 IV-XLF 封口，全程不需同源模板，代价是连接点常缺失或添入数个核苷酸。C 正确：RAG1/2 制造程序性断裂后，NHEJ 的「不精确」被免疫系统用作财富，造就抗体库的连接多样性。D 错误：哺乳动物细胞以 NHEJ 处理绝大多数断裂，HR 保留给复制期的精确修复——快速保命的 NHEJ 是主力，53BP1 护端促 NHEJ、BRCA1 促切除引 HR 的相互颉颃决定走向。',
    difficulty: 3,
  },

  // ================= 第 5 章 转录（q-molecular-biology-21 ~ 25） =================
  {
    id: 'q-molecular-biology-21',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'single',
    question: '以 α-鹅膏蕈碱鉴别真核三类 RNA 聚合酶，正确的敏感性格局是：',
    options: [
      'Pol I 低浓度即敏感，Pol II 不敏感，Pol III 高浓度方敏感',
      'Pol I 不敏感，Pol II 低浓度即被遏制，Pol III 只在高浓度下受抑',
      '三类聚合酶对该毒素的敏感性完全相同',
      'Pol I 高浓度方敏感，Pol II 不敏感，Pol III 低浓度即敏感',
    ],
    answer: 1,
    explanation:
      '毒蘑菇的 α-鹅膏蕈碱（α-amanitin）是分拣三类聚合酶的经典环肽试剂：Pol I 完全不敏感；Pol II 在低浓度即被遏制；Pol III 只在高浓度下受抑——B 正确。三类酶的产物划分与之互为参照：Pol I 驻扎核仁转录 45S rRNA 前体（占细胞 RNA 总产量半壁以上），Pol II 转录 mRNA 前体与多数 snRNA（基因表达调控主战场），Pol III 负责tRNA、5S rRNA、U6 snRNA 与 7SL 等小分子 RNA。误食毒鹅膏者死于 α-鹅膏蕈碱楔入 RPB1 桥螺旋与触发环之间、把 Pol II 转位速率拖慢千倍以上所致的肝细胞转录衰竭。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-22',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'single',
    question: '关于大肠杆菌启动子的序列语法，下列叙述正确的是：',
    options: [
      '-35 区一致性序列为 TATAAT、-10 区为 TTGACA，两区间距约 35 bp',
      '-35 区一致性序列为 TTGACA、-10 区（Pribnow 盒）为 TATAAT，两区间距 15–19 bp、17 bp 最优',
      '-10 区富 GC，是开泡的最牢固环节',
      'UP 元件位于转录起点下游，供 σ 因子的 2 区识别',
    ],
    answer: 1,
    explanation:
      '启动子由两组六聚体构成：转录起点上游约 35 bp 处的 -35 区（TTGACA，由 σ 因子 4 区识别）与上游约 10 bp 处的 -10 区即 Pribnow 盒（TATAAT，由 σ 因子 2 区结合）；两元件间距以 15–19 bp 为可接受范围、17 bp 最优——σ 因子 2 区与 4 区在结构上间距固定，模板偏差超过一两个碱基便同时落不了位，B 正确、A 的序列与间距均错。-10 区富 AT 正是开泡的薄弱环节，σ2 区芳香族残基把碱基翻转楔进疏水口袋以稳定单链，C 说反。UP 元件位于 -40 至 -60 处，供两个 α 亚基 C 端域搭靠以增强转录（rRNA 操纵子的超强转录即靠它），D 的位置与识别者均错。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-23',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'single',
    question: 'ρ 因子依赖终止与「极性」现象的分子解释，正确的是：',
    options: [
      'ρ 因子识别终止子附近的发夹结构，水解 ATP 把发夹解开',
      'ρ 因子先抓住 RNA 上富 C、少二级结构的 rut 位点，沿 RNA 5′ 到 3′ 追踪；若核糖体紧跟聚合酶翻译、rut 位点被罩住，ρ 无从下手',
      '无义突变使翻译提前终止，下游 RNA 被核糖体覆盖，ρ 因子被迫提前终止转录',
      'ρ 依赖终止不需要 ATP 水解，能量完全来自 RNA-DNA 杂合区的解链',
    ],
    answer: 1,
    explanation:
      'ρ 因子是同源六聚体的环形马达（每亚基约 46 kDa），兼具 ATP 酶与解旋酶活性：先抓住 RNA 上富 C、少二级结构的 rut 位点，靠 ATP 水解沿 RNA 5′ 到 3′ 追踪，追上暂停中的聚合酶后把 RNA-DNA 杂合区撬开——B 正确。发夹加 U 串是 ρ 非依赖的内在终止信号，ρ 不识别发夹，A 错。极性现象的正确逻辑：无义突变使翻译提前终止，下游 RNA 尽裸、rut 位点暴露，ρ 得以提前终止转录，操纵子下游基因表达暴跌——C 把「裸露可追」写成了「被覆盖」。D 错：ρ 依赖终止正以 ATP 水解驱动追踪，不需额外能量的说法属于内在终止。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-24',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'truefalse',
    question: 'TFIIH 身兼两职：其 XPB 亚基既在转录起始时开泡，又是核苷酸切除修复的开泡引擎。', 
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。真核转录起始中，TFIIH 的 XPB 亚基以 ATP 驱动的易位把下游 DNA 拉向酶体，在 -9 到 +4 之间撑开约 13 bp 的泡（泡从起点向下游展开，与细菌开放复合物「从 -10 向 +3」的熔解区段方向不同），其 CAK 模块（CDK7-周期蛋白 H-MAT1）随即磷酸化 CTD 的 Ser5 使酶获得逃离资格。而在核苷酸切除修复中，TFIIH 的 XPB 与 XPD 两个解旋酶亚基同样负责打开约 25 bp 的泡——两处都需要解开螺旋，演化便让同一台机器服役两地。着色性干皮病亚型 XPD 即 TFIIH 的解旋酶亚基、XPG 即 NER 的 3′ 侧内切酶，基因名单本身就是两条通路共享部件的清单。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-25',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'multiple',
    question: '关于真核转录的启动子近端暂停与 P-TEFb，下列叙述正确的有：',
    options: [
      'DSIF 与 NELF 在起始后挂上酶体，把 Pol II 按停在启动子下游约 25–60 bp 处',
      'P-TEFb 由 CDK9 与周期蛋白 T 组成，磷酸化 CTD 的 Ser2、DSIF 的 Spt5 与 NELF',
      '磷酸化后 DSIF 摇身变为助推器，与 Ser2 磷酸化一起把酶推入高效延伸',
      '静息状态下大部分 P-TEFb 以游离激酶形式循环，7SK snRNA 与 HEXIM 只在应激时才与之结合',
    ],
    answer: [0, 1, 2],
    explanation:
      'A 正确：大量人基因的 Pol II 起始后停在启动子下游约 25–60 bp 处，安装暂停的是 DSIF（Spt4/5 二聚体）与四亚基 NELF；暂停是缓存——热激基因停着的 Pol II 在信号到达后数秒内放量释放，比从头起始快一个数量级。B 正确：解除暂停的钥匙 P-TEFb 是 CDK9-周期蛋白 T 激酶，对 CTD Ser2、Spt5 与 NELF 三类底物下手。C 正确：磷酸化后 NELF 解离离场，DSIF 却从刹车改成助推器，推动高效延伸。D 错误：静息状态下大部分 P-TEFb 被 7SK snRNA 与 HEXIM 蛋白组成的复合物锁住（保险柜），应激时才成批释放；HIV 的 Tat 蛋白抓 TAR RNA 茎环把 P-TEFb 拽到停摆的酶旁，正是「病毒用宿主的钥匙开自己的锁」。',
    difficulty: 3,
  },

  // ================= 第 6 章 转录后加工与遗传密码（q-molecular-biology-26 ~ 30） =================
  {
    id: 'q-molecular-biology-26',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'single',
    question: '关于真核 mRNA 5′ 帽子的生成化学，下列叙述正确的是：',
    options: [
      '帽子鸟嘌呤以正常的 3′-5′ 磷酸二酯键接入新生 RNA 链',
      '三步依次为：切掉 γ 磷酸、以 5′-5′ 三磷酸桥反向连接 GMP、给帽子鸟嘌呤 N7 加甲基',
      '加帽在转录终止后才开始，与聚合酶无关',
      'cap 0 之后不再有任何甲基化修饰，哺乳动物帽子即终止于 cap 0',
    ],
    answer: 1,
    explanation:
      '加帽三步：RNA 三磷酸酶切掉新生 RNA 5′ 端的 γ 磷酸留下二磷酸；鸟苷转移酶把 GMP 接上——连接方式极为罕见，GMP 的 5′ 磷酸与 RNA 首位核苷酸的 5′ 磷酸缩成 5′-5′ 三磷酸桥，帽子鸟嘌呤与链身反向平行；甲基转移酶再给帽子鸟嘌呤 N7 加甲基得 cap 0，继续甲基化第一、二个转录核苷酸核糖的 2′-OH 分别成 cap 1 与 cap 2，B 正确、A 的键型错误。这顶「反向帽」使核酸外切酶无从进攻游离 5′ 磷酸；三步反应全部发生在转录中的聚合酶上——CTD 的 Ser5 磷酸化把加帽酶召到泡边，转录与加工无缝衔接，C 错。酵母多止于 cap 0，哺乳动物以 cap 1 常见，D 错。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-27',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'single',
    question: '关于剪接体催化的两步转酯反应，下列叙述正确的是：',
    options: [
      '第一步由分支点腺苷的 2′-OH 进攻 5′ 剪接位点，生成套马索中间体',
      '两步转酯各水解一分子 ATP，为磷酸二酯键的重组供能',
      '催化核心由 U1 与 U2 snRNA 配对构成，U6 在第二步结束后才进场',
      '外显子 1 的 3′-OH 在第二步进攻分支点腺苷，释出线性内含子',
    ],
    answer: 0,
    explanation:
      '剪接是两步连续的转酯：第一步，分支点保守腺苷的 2′-OH 进攻 5′ 剪接位点，把内含子 5′ 端与外显子 1 之间的磷酸二酯键转给分支 A，生成以 2′,5′-磷酸二酯键连接的套马索中间体，外显子 1 游离出 3′-OH；第二步，外显子 1 的 3′-OH 进攻 3′ 剪接位点，两个外显子成键相连、套马索内含子释出——A 正确、D 把第二步的进攻对象写错。两步反应都不水解 ATP：化学键在重新组合、能量自洽，ATP 全花在机器的重排上，B 错。装配次序是 U1 先认 5′ 位点、U2 进场顶出分支 A，随后 U4/U6.U5 加入并大重排，U6 取代 U1 与 U2 的序列配对形成催化核心，C 的次序颠倒。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-28',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'single',
    question: '关于克里克 1966 年提出的摆动假说，下列叙述正确的是：',
    options: [
      '摆动发生在密码子的第三位碱基，反密码子前两位配对可以放宽',
      '反密码子 5′ 端（第 34 位）的 G 可与 C 或 U 配对，肌苷 I 可与 U、C 或 A 配对',
      '摆动使细胞必须编码 61 种以上 tRNA 才能覆盖全部有义密码',
      '线粒体 tRNA 组庞大（逾 60 种），因此无需任何摆动配对',
    ],
    answer: 1,
    explanation:
      '摆动的精确规则：反密码子 5′ 端碱基（第 34 位）处于 RNA 双链大沟边缘、几何约束松弛，配对可以放宽——该位 C 只配 G、A 只配 U（罕见）、G 可配 C 或 U、U 可配 A 或 G、肌苷 I 可配 U、C 或 A；密码子前两位依旧严丝合缝，B 正确、A 把位置说反。摆动的算术意义恰是省编制：不带摆动须 61 种 tRNA，带摆动后大肠杆菌约 40 余种、哺乳动物胞质约 50 种即覆盖全部有义密码，C 错。线粒体仅 22 种 tRNA 服务全部密码，四重家族由 U 起头的反密码子全读（「超摆动」），与改码配套出现，D 的数目与结论均错。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-29',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'truefalse',
    question: '1961 年尼伦伯格与马太伊以 poly(C) 为模板在大肠杆菌无细胞体系中破译了第一个密码子 UUU（苯丙氨酸）。', 
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误——模板应为 poly(U)（多聚尿苷酸），而非 poly(C)。1961 年尼伦伯格与马太伊在 NIH 把人工合成的 poly(U) 加进大肠杆菌无细胞体系，只供放射性标记的苯丙氨酸，结果合成出不溶于酸的多聚苯丙氨酸，UUU 由此成为第一个破译的密码；同法 poly(C) 译出的是脯氨酸、poly(A) 译出赖氨酸，poly(G) 因形成复杂二级结构未能直接作答。该实验的巧处在「以产物读密码」：无需测序，只需看哪种标记氨基酸成肽；无细胞体系也因此宣告够格承担破译全部密码的任务。1966 年密码表收官（61 有义加 3 终止），尼伦伯格、霍拉纳与霍利共享 1968 年诺贝尔生理学或医学奖。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-30',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'multiple',
    question: '关于遗传密码的特性与偏离，下列叙述正确的有：',
    options: [
      '61 个有义密码对应 20 种氨基酸，第三位点的突变约三分之二为同义',
      '哺乳动物线粒体改码：UGA 变色氨酸、AUA 变甲硫氨酸、AGA 与 AGG 变终止',
      '硒代半胱氨酸（第 21 种氨基酸）由 UGA 重编码而来，须 SECIS 茎环与专属 tRNA 等特设机构',
      '甲硫氨酸与色氨酸在标准密码表中各由多个密码子编码，摆动为此提供了额外保障',
    ],
    answer: [0, 1, 2],
    explanation:
      'A 正确：64 个三联体减 3 个终止，61 个有义密码分给 20 种氨基酸，简并集中于第三位，使其位点突变约三分之二为同义——密码表本身就是差错率的减震器。B 正确：哺乳动物线粒体四处改码（UGA 变色氨酸、AUA 变甲硫氨酸、AGA 与 AGG 变终止），与仅 22 种 tRNA 的超摆动配套，像小基因组自成一体的精简方案。C 正确：UGA 在 SECIS 茎环等条件合格时读作硒代半胱氨酸，人类约 25 种硒蛋白的催化中心里它是关键残基；吡咯赖氨酸同理重编码 UAG，构成第 22 种氨基酸。D 错误：只有甲硫氨酸（AUG）与色氨酸（UGG）独占一码——正因如此，任何命中这两个密码的点突变都必然改变氨基酸。',
    difficulty: 3,
  },
]
