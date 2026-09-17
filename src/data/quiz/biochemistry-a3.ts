// ============================================================
// BioScholar 生物化学测验题库 - 批次 A3（第 7–9 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-biochemistry-31 ~ q-biochemistry-45）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：王镜岩《生物化学》（第4版）、Lehninger《Principles
// of Biochemistry》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const biochemistryQuizA3: QuizQuestion[] = [
  // ================= 第 7 章 核酸化学（q-biochemistry-31 ~ 35） =================
  {
    id: 'q-biochemistry-31',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'single',
    question: '关于 B 型 DNA 双螺旋的结构参数，下列叙述正确的是：',
    options: [
      '右手双螺旋，螺距 3.4 nm，每圈约 10 个碱基对，相邻碱基对间距约 0.34 nm',
      '左手双螺旋，螺距约 4.5 nm，每圈约 12 个碱基对，碱基平面与螺旋轴平行',
      '两条链同向平行，大沟宽约 1.2 nm、小沟宽约 2.2 nm',
      '螺旋直径约 5 nm，螺旋直径随 GC 含量显著变化',
    ],
    answer: 0,
    explanation:
      'Watson 与 Crick 于 1953 年提出的 B 型双螺旋为两条反向平行的右手链：直径约 2 nm、螺距 3.4 nm、每圈约 10 个碱基对、相邻碱基对间距 0.34 nm、旋转角 36°，A 正确。左手螺旋、每圈约 12 bp、螺距约 4.5 nm 描述的是 Z 型 DNA，见于嘌呤嘧啶交替序列且需高盐条件；两链反向平行而非同向；大沟宽约 2.2 nm、小沟宽约 1.2 nm，选项 C 把两沟宽度说反；螺旋直径恒定约 2 nm，不随碱基组成漂移，这正是嘌呤必配嘧啶、一大配一小的几何结果。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-32',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'truefalse',
    question:
      '按 Chargaff 规则，各种生物 DNA 中腺嘌呤与胸腺嘧啶的摩尔数相等、鸟嘌呤与胞嘧啶相等；A 与 T 之间形成两条氢键、G 与 C 之间形成三条氢键，因此 GC 含量高的 DNA 热稳定性更高、解链温度更高。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。Chargaff 于 1950 年前后的定量分析给出 A=T、G=C、嘌呤总数等于嘧啶总数，且 (A+T)/(G+C) 因物种而异，这为碱基互补配对提供了定量线索。双螺旋中 A-T 对有两条氢键、G-C 对有三条氢键，且 G-C 对的碱基堆积也更强，故 GC 含量每升高 1 个百分点，长链 DNA 的 Tm 约升高 0.41 摄氏度，经验式 Tm 约等于 69.3 加 0.41 乘以 GC 百分含量即描述这一线性关系，高 GC 的 DNA 确实更耐热变性。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-33',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'single',
    question: '关于 tRNA 的结构与功能，下列叙述错误的是：',
    options: [
      '由 70 至 90 个核苷酸组成，3′ 端以 CCA 序列结尾，末端腺苷酸承载氨基酸',
      '二级结构呈三叶草形，含氨基酸臂、D 环、反密码子环、TψC 环与可变环',
      '三级结构呈倒 L 形，氨基酸臂与反密码子环分别位于 L 形的两端',
      '反密码子环由七个核苷酸组成，环的两端由肽键封闭，故称环肽结构',
    ],
    answer: 3,
    explanation:
      'D 项错误且为捏造概念：反密码子环由七核苷酸组成、居中三位为反密码子，环的封闭依靠茎区碱基对之间的氢键，与肽键毫无关系——肽键连接氨基酸而非核苷酸。其余三项均正确：tRNA 3′ 端 CCA 的末端腺苷酸以酯键连接氨基酸；三叶草形二级结构五部件齐全；1974 年 Kim 与 Robertus 等的晶体工作揭示酵母苯丙氨酸 tRNA 的倒 L 形三级结构，氨基酸接受臂与 TψC 臂叠成长臂、D 环与反密码子环叠成短臂，两端恰好对接核糖体的催化中心与解码位点。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-34',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'single',
    question: '某长链双链 DNA 的 GC 含量为 40%，按经验式估算，其解链温度 Tm 约为：',
    options: [
      '约 85.7 摄氏度',
      '约 69.3 摄氏度',
      '约 75.3 摄氏度',
      '约 105.7 摄氏度',
    ],
    answer: 0,
    explanation:
      '长链 DNA 的经验式为 Tm 约等于 69.3 加 0.41 乘以 GC 百分含量。GC 为 40% 时，Tm 约为 69.3 加 0.41 乘 40 即 69.3 加 16.4，约 85.7 摄氏度，A 正确。69.3 是 GC 为零时的外推基线值；75.3 相当于 GC 约 14.6%；105.7 则对应 GC 约 88.8%。该线性关系的化学根源在于 G-C 对的三条氢键与更强的碱基堆积，同时 Tm 还随离子强度升高而升高、随甲酰胺或尿素加入而降低，实验中常用「盐-温度-变性剂」组合调节杂交的严谨性。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-35',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'multiple',
    question: '关于核酸的理化性质与分子杂交，下列叙述正确的有：',
    options: [
      '核酸因碱基共轭双键在 260 nm 有强吸收，变性后 A260 可升至原值的 1.3 至 1.4 倍，即增色效应',
      '甲酰胺与尿素破坏氢键与碱基堆积，可降低 Tm，常用于调节杂交条件的严谨性',
      '钠离子屏蔽磷酸基团的静电排斥，离子强度升高使 Tm 升高',
      '酸处理只使双链解离而不损伤碱基，因此是实验室首选的温和变性手段',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 均正确：增色效应源于变性拆散碱基堆积、恢复碱基的吸收能力；甲酰胺、尿素是经典变性剂，50% 甲酰胺可把杂交温度降至温和区间；阳离子屏蔽骨架负电使双链更稳，故高盐升高 Tm。D 项错误：酸性条件并非温和手段，它使嘌呤糖苷键断裂而发生去嘌呤，随后糖-磷酸骨架在脱碱基位点断裂，造成不可逆损伤；实验室的常规变性手段是加热与甲酰胺，强碱（pH 高于 11.3）虽可使 DNA 变性却会水解 RNA。',
    difficulty: 3,
  },
  // ================= 第 8 章 生物能学与生物氧化（q-biochemistry-36 ~ 40） =================
  {
    id: 'q-biochemistry-36',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'single',
    question: '关于线粒体电子传递链的组成，下列叙述正确的是：',
    options: [
      '复合体 II 即琥珀酸-泛醌还原酶，以共价结合的 FAD 为辅基，不泵出质子',
      '复合体 I 把 FADH2 的电子交给泛醌，同时泵出 4 个质子',
      '细胞色素 c 嵌于内膜疏水核心，在复合体 III 与 IV 之间扩散传递电子',
      '泛醌是水溶性血红素蛋白，沿膜外表面游动接送电子',
    ],
    answer: 0,
    explanation:
      '复合体 II 就是三羧酸循环的琥珀酸脱氢酶，以共价结合的 FAD 与铁硫中心把琥珀酸的电子交给泛醌，因缺乏质子泵通道而不泵质子，A 正确。复合体 I 接收的是 NADH（经 FMN 与铁硫中心），FADH2 来源的电子跳过复合体 I 直接进入泛醌池；细胞色素 c 是膜间隙侧的水溶性蛋白，沿膜外表面跳动而非嵌于疏水核心；泛醌（辅酶 Q）才是脂溶性小分子，在膜疏水核心中扩散，血红素蛋白的描述张冠李戴。这些身份之差正是两条呼吸链产能不同的结构根源。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-37',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'truefalse',
    question:
      '抗霉素 A 抑制复合体 III，氰化物抑制细胞色素 c 氧化酶的 a3；阻断后，阻断点上游的呼吸链组分趋于还原态、下游趋于氧化态，线粒体耗氧随之停止。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。抗霉素 A 结合复合体 III，隔断还原态细胞色素 b 一侧的电子回路；氰化物、一氧化碳、硫化氢与叠氮化物结合复合体 IV 还原态的 a3，氰离子与血红素铁亲和力极强，氧的座位被霸占。电子传递被切断后，上游组分因「有进无出」而积累还原态、下游组分因「有出无进」而氧化，这正是以光谱追踪氧化还原状态定位阻断点的经典实验逻辑。两者的结局同为耗氧停止、磷酸化停摆，氰化物中毒时细胞窒息于充足的氧中。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-38',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'single',
    question: '关于 ATP 合酶与氧化磷酸化，下列叙述错误的是：',
    options: [
      '化学渗透学说由 Mitchell 于 1961 年提出，核心是电子传递建立跨内膜的质子电化学梯度',
      'ATP 合酶每合成 1 个 ATP 约需 3 个质子回流，另有约 1 个质子用于 ADP 与 Pi 的转运',
      'Boyer 提出结合变化机制，Walker 解析 F1 晶体结构，两人于 1997 年获诺贝尔化学奖',
      '2,4-二硝基苯酚抑制 F0 质子通道，使电子传递减慢、耗氧下降',
    ],
    answer: 3,
    explanation:
      'D 项错误：2,4-二硝基苯酚（DNP）不是 F0 抑制剂，而是脂溶性质子载体——它在膜间隙获质子、穿膜后在内侧卸下，使质子梯度短路，结果是耗氧上升而 ATP 合成停止、能量尽散为热；真正抑制 F0 质子通道、使耗氧与磷酸化同降的是寡霉素。A、B、C 均正确：Mitchell 的化学渗透学说获 1978 年诺贝尔化学奖；每 ATP 约 3 个质子过 c 环加 1 个质子过路费，合计约 4 个，由此得出磷氧比 2.5 与 1.5；Boyer 与 Walker 因结合变化机制与 F1 晶体结构分享 1997 年诺贝尔化学奖。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-39',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'single',
    question: '关于两条线粒体穿梭系统，下列叙述正确的是：',
    options: [
      'α-磷酸甘油穿梭把胞浆 NADH 转为线粒体 FADH2 入链，每个 NADH 约产 1.5 个 ATP，主要见于肌肉与脑',
      '苹果酸-天冬氨酸穿梭不可逆，且每个胞浆 NADH 仅折合 1.5 个 ATP',
      'α-磷酸甘油穿梭依赖谷氨酸-天冬氨酸反向转运体配平电荷',
      '两条穿梭的产能量相同，差别仅在组织分布',
    ],
    answer: 0,
    explanation:
      'α-磷酸甘油穿梭中，胞浆 α-磷酸甘油脱氢酶以 NAD+ 为辅酶，线粒体内膜同工酶却以 FAD 为辅基，电子以 FADH2 身份进入泛醌池，产能由约 2.5 折为约 1.5 个 ATP，肌肉与脑倚重此线，A 正确。苹果酸-天冬氨酸穿梭可逆，电子保持 NADH 身份入链、足额产 2.5 个 ATP，见于肝、心、肾；谷氨酸-天冬氨酸反向转运体是苹果酸-天冬氨酸穿梭的配件而非 α-磷酸甘油穿梭所需；两线「汇率」相差一个 ATP，正是葡萄糖彻底氧化总账 30 与 32 之别的来源。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-40',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'multiple',
    question: '关于线粒体 DNA 与活性氧，下列叙述正确的有：',
    options: [
      '人线粒体 DNA 为环状、全长 16 569 bp，编码 13 条呼吸链多肽、22 个 tRNA 与 2 个 rRNA',
      '线粒体呈母系遗传，突变随卵细胞传递；同一细胞内野生型与突变型并存称异质性，越过阈值方显病征',
      '超氧阴离子主要产自复合体 I 与 III 的电子泄漏，经 SOD 歧化为过氧化氢',
      '呼吸链复合体 II 的亚基全部由线粒体 DNA 编码，故其缺陷呈母系遗传',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 均正确：人 mtDNA 环状 16 569 bp、37 个基因的构成如述；精子贡献的 mtDNA 极少且多被清除，家系呈「母传全员、父不传」，异质性与阈值效应解释了同一家系病情轻重不一；超氧主要在复合体 I 基质侧与 III 的泛醌氧化位点生成，由 SOD 歧化为过氧化氢再交过氧化氢酶与谷胱甘肽过氧化物酶处理。D 项错误：复合体 II 的亚基全部由核基因编码，是呼吸链中唯一完全「外包」的复合体，其缺陷随孟德尔遗传而非母系遗传。',
    difficulty: 3,
  },
  // ================= 第 9 章 糖代谢（q-biochemistry-41 ~ 45） =================
  {
    id: 'q-biochemistry-41',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'single',
    question: '关于糖酵解的能量账与关键酶，下列叙述正确的是：',
    options: [
      '每分子葡萄糖净得 2 个 ATP，两处底物水平磷酸化分别由磷酸甘油酸激酶与丙酮酸激酶催化',
      '3-磷酸甘油醛脱氢酶以 FAD 为辅基，产物为 2,3-二磷酸甘油酸',
      '烯醇化酶被氟化物抑制的原理是竞争性占据 ATP 结合位点',
      '磷酸果糖激酶-1 受 ATP、柠檬酸抑制，受 AMP 与 2,6-二磷酸果糖激活，是唯一不可逆的步骤',
    ],
    answer: 0,
    explanation:
      '糖酵解投资期耗 2 个 ATP，回报期经 1,3-二磷酸甘油酸到 3-磷酸甘油酸（磷酸甘油酸激酶）与磷酸烯醇式丙酮酸到丙酮酸（丙酮酸激酶）两处底物水平磷酸化产 4 个 ATP，净得 2 个 ATP 与 2 个 NADH，A 正确。3-磷酸甘油醛脱氢酶的辅酶是 NAD+、产物是 1,3-二磷酸甘油酸；氟化物抑制烯醇化酶的机制是与镁离子及磷酸形成复合物锁住酶，而非竞争 ATP 位点，血样加氟化钠正是为稳住待测血糖；磷酸果糖激酶-1 是三步不可逆步骤之一而非唯一，己糖激酶与丙酮酸激酶同样不可逆。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-42',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'truefalse',
    question:
      '一分子乙酰辅酶 A 经三羧酸循环一轮，释放 2 分子二氧化碳，生成 3 分子 NADH、1 分子 FADH2 与 1 分子 GTP；连同丙酮酸脱氢生成的 NADH，每分子乙酰辅酶 A 彻底氧化约得 10 个 ATP。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。三羧酸循环八步反应中两次氧化脱羧（异柠檬酸脱氢酶与 α-酮戊二酸脱氢酶复合体）各放出 1 个二氧化碳，四次脱氢产 3 个 NADH 与 1 个 FADH2（琥珀酸脱氢酶即呼吸链复合体 II），琥珀酰辅酶 A 合成酶经底物水平磷酸化产 1 个 GTP。按磷氧比 2.5、1.5 与 1 折算共 10 个 ATP；加上丙酮酸脱氢复合体产的那份 NADH，每分子乙酰辅酶 A 彻底氧化净得约 10 个 ATP。同位素示踪还表明，本轮放出的二氧化碳并非乙酰的碳，乙酰两碳要到下一轮才陆续脱出。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-43',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'single',
    question: '关于糖异生的绕行酶与能量代价，下列叙述错误的是：',
    options: [
      '每分子丙酮酸翻越「丙酮酸到磷酸烯醇式丙酮酸」的能障需耗 1 个 ATP 与 1 个 GTP',
      '果糖二磷酸酶-1 水解 1,6-二磷酸果糖，绕过磷酸果糖激酶-1',
      '肌肉富含葡萄糖-6-磷酸酶，可将糖异生产物以游离葡萄糖形式输出供血',
      '两分子丙酮酸合成一分子葡萄糖共消耗 4 个 ATP、2 个 GTP 与 2 个 NADH',
    ],
    answer: 2,
    explanation:
      'C 项错误：葡萄糖-6-磷酸酶定位于肝（与肾）的内质网膜，肌肉不表达此酶，肌糖异生与肌糖原分解的产物只能止步于 6-磷酸葡萄糖就地入酵解，不能以游离葡萄糖输出——这正是「肌糖原不能直接升血糖」的经典考点，葡萄糖-6-磷酸酶缺陷则致 I 型糖原贮积症（von Gierke 病）。A、B、D 均正确：丙酮酸先由丙酮酸羧化酶（耗 ATP）羧化为草酰乙酸，再由磷酸烯醇式丙酮酸羧激酶（耗 GTP）脱羧；总账为每分子葡萄糖耗 4 ATP、2 GTP 与 2 NADH。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-44',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'single',
    question: '关于糖原磷酸化酶的调节，下列叙述正确的是：',
    options: [
      '磷酸化酶 b 经磷酸化酶激酶磷酸化为高活性的 a 态；该激酶可被蛋白激酶 A 磷酸化激活，并含对钙离子敏感的钙调蛋白亚基',
      '肝磷酸化酶 a 受 AMP 强烈激活，以此感知肝细胞的能量匮乏',
      '肌肉中葡萄糖是磷酸化酶 a 的直接别构抑制剂，血糖升高即刻停摆分解',
      '胰岛素通过激活蛋白激酶 A 把磷酸化酶转为高活性的 a 态',
    ],
    answer: 0,
    explanation:
      'A 正确且完整：磷酸化酶 b 到 a 的磷酸化由磷酸化酶激酶执行，后者既是蛋白激酶 A 的底物、又以 δ 亚基（钙调蛋白）感受肌肉收缩时的钙离子，共价调节与别构信号在此汇合。B 错：AMP 直接激活的是肌肉磷酸化酶 b，肝 a 态的别构传感器是葡萄糖本身；C 错：对葡萄糖敏感的是肝而非肌肉的磷酸化酶 a，血糖升高使肝先停分解；D 错：胰岛素走的是相反方向——降 cAMP、激活磷蛋白磷酸酶-1 去磷酸化，关掉分解、开启合成。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-45',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'multiple',
    question: '关于磷酸戊糖途径与糖代谢的整合，下列叙述正确的有：',
    options: [
      '氧化阶段以 NADP+ 为受氢体，限速酶是 6-磷酸葡萄糖脱氢酶，共产 2 个 NADPH',
      '转酮醇酶以 TPP 为辅酶转移二碳单位，转醛醇酶转移三碳单位，把碳架接回糖酵解中间体',
      'G6PD 缺乏时红细胞 GSH 复原受阻，氧化应激下血红蛋白变性析出 Heinz 小体，引发急性溶血',
      '磷酸戊糖途径的主要功能是以 NADH 喂养呼吸链产能',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 均正确：氧化阶段两步脱氢共产 2 个 NADPH 并放出二氧化碳，G6PD 受 NADPH 与 NADP+ 之比调节；非氧化阶段以转酮醇酶（TPP、二碳单位）与转醛醇酶（三碳单位）把核糖-5-磷酸重排为果糖-6-磷酸与 3-磷酸甘油醛，接回糖酵解；蚕豆病的核心逻辑正是红细胞缺乏 NADPH 供给、GSH 无法复原。D 项错误：磷酸戊糖途径的受氢体是 NADP+ 而非 NAD+，产出的 NADPH 专供还原性合成、谷胱甘肽还原、P450 羟化、呼吸爆发等用途，并不进入呼吸链产能——NADH 与 NADPH 的分工恰是「产能」与「供还原力」的分界线。',
    difficulty: 3,
  },
]
