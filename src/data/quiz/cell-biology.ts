// ============================================================
// BioScholar 细胞生物学测验题
// 60 题（每章 5 题），题型：single / truefalse / multiple
// 依据：丁明孝、翟中和《细胞生物学》(第五版) 与 Alberts
//      《Molecular Biology of the Cell》常考点，与学科内容文件同步
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const cellBiologyQuiz: QuizQuestion[] = [
  // ================= 第 1 章 细胞概述与研究方法 =================
  {
    id: 'q-cell-biology-01',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'single',
    question: '细胞学说三大要点中"所有细胞均来自已存在的细胞"（细胞来自细胞）由哪位学者提出？',
    options: ['Robert Hooke', 'Antonie van Leeuwenhoek', 'Rudolf Virchow', 'Matthias Schleiden'],
    answer: 2,
    explanation:
      'Schleiden 与 Schwann 于 1838—1839 年建立细胞学说（细胞是有机体结构与功能的基本单位），1855 年 Virchow 补充"细胞来自细胞"（Omnis cellula e cellula），指出新细胞由已存在细胞分裂而来。Hooke（1665）首次命名"细胞"，Leeuwenhoek 首次观察到活细胞，均早于细胞学说的形成。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-02',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'truefalse',
    question: '病毒没有细胞结构、不含核糖体、缺乏独立代谢能力，必须在活细胞内才能复制。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。病毒不具备细胞的统一性特征（无 DNA-RNA-蛋白质的完整体系、无核糖体、无自主能量代谢），只能借用宿主细胞的合成机器进行复制，因此不属生命的基本结构与功能单位。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-03',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'single',
    question: '下列关于原核细胞与真核细胞结构与功能的比较，正确的是：',
    options: [
      '原核细胞具有由核膜包被的完整细胞核',
      '真核细胞的核糖体为 70S',
      '原核细胞无核膜与内膜系统，核糖体为 70S，主要以二分裂方式增殖',
      '真核细胞不含细胞骨架'
    ],
    answer: 2,
    explanation:
      '原核细胞（细菌、古菌）的 DNA 集中于无核膜包被的拟核，无内膜系统，核糖体为 70S，行二分裂。真核细胞有核膜与核仁、内膜系统、线粒体（叶绿体）、细胞骨架，核糖体为 80S，故 A、B、D 均错误。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-04',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'single',
    question: '光学显微镜与透射电子显微镜的分辨本领（分辨率）分别约为：',
    options: ['0.2 μm / 0.1—0.2 nm', '0.2 nm / 0.1—0.2 μm', '2 μm / 0.2 μm', '均约为 0.2 μm'],
    answer: 0,
    explanation:
      '分辨率是成像技术的核心指标，受照明波长限制：光学显微镜约 0.2 μm，透射电镜以电子束成像可达 0.1—0.2 nm，两者相差约千倍。B 选项将数值对调；扫描电镜观察表面形貌，冷冻电镜可解析分子机器的近原子分辨率结构。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-05',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'single',
    question: 'Jamieson 与 Palade 用放射性标记氨基酸对胰腺腺泡细胞进行脉冲-追踪放射自显影，随时间推移标记蛋白依次出现的部位是：',
    options: [
      '游离核糖体→细胞核→线粒体',
      '糙面内质网→高尔基体→分泌颗粒→细胞顶端释放',
      '糙面内质网→溶酶体→细胞顶端释放',
      '高尔基体→糙面内质网→细胞顶端释放'
    ],
    answer: 1,
    explanation:
      '该经典实验先短时（脉冲）给予标记氨基酸使其掺入糙面内质网上合成的分泌蛋白，再追踪标记随时间的移行，确立了分泌蛋白沿 内质网→高尔基体→分泌颗粒→胞外 的内膜运输路线，是内膜系统功能研究的里程碑。',
    difficulty: 3
  },

  // ================= 第 2 章 细胞质膜与跨膜运输 =================
  {
    id: 'q-cell-biology-06',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'single',
    question: '由 Singer 与 Nicolson 提出、强调磷脂双分子层构成膜的连续主体并具有流动性、膜蛋白镶嵌其中且分布不对称的模型是：',
    options: ['单位膜模型', '流动镶嵌模型', '脂筏模型', '三明治（片层）模型'],
    answer: 1,
    explanation:
      '流动镶嵌模型（1972）确立了膜的流动性与膜蛋白分布不对称性两大原则，是目前被广泛接受的膜结构基本框架。单位膜模型（Robertson）将膜视为静态三层结构，脂筏模型是后来对膜微区的补充完善，三明治模型则是更早的失败尝试。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-07',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'truefalse',
    question: 'FRAP（荧光漂白恢复）实验可以直接证明膜组分的侧向扩散能力，即膜的流动性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。FRAP 用强激光漂白细胞膜上某一区域的荧光标记后，随时间检测荧光恢复速率，恢复来自周围未漂白膜组分的侧向扩散，是膜流动性的最直接实验证据之一。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-08',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'single',
    question: 'Na⁺/K⁺-ATPase（钠钾泵）每水解 1 分子 ATP 时：',
    options: [
      '泵出 2 个 Na⁺、泵入 3 个 K⁺',
      '泵出 3 个 Na⁺、泵入 2 个 K⁺',
      '泵出 3 个 Na⁺、泵入 3 个 K⁺',
      '泵出 2 个 Na⁺、泵入 2 个 K⁺'
    ],
    answer: 1,
    explanation:
      '钠钾泵属 P 型 ATP 驱动泵，每水解 1 ATP 泵出 3 Na⁺、泵入 2 K⁺，净转出 1 个正电荷故为产电泵，维持膜电位与细胞体积。强心苷抑制钠泵使心肌细胞内 Ca²⁺ 升高从而增强收缩力，即基于这一化学计量的后果。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-09',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'multiple',
    question: '关于物质跨膜运输，下列叙述正确的有：',
    options: [
      '简单扩散不依赖膜蛋白、不消耗代谢能、无饱和性，脂溶性小分子和气体以此方式穿膜',
      '协助扩散需通道或载体蛋白介导，转运速率具有饱和性',
      'Na⁺/葡萄糖同向转运体 SGLT1 介导的小肠葡萄糖吸收属于不耗能的被动运输',
      'K⁺ 通道的选择性滤器与水通道蛋白对 H₃O⁺ 的排斥均体现了通道蛋白的选择性'
    ],
    answer: [0, 1, 3],
    explanation:
      'A、B 为两类被动运输的基本特征；D 中 MacKinnon 解析的 K⁺ 通道滤器与 AQP 排斥 H₃O⁺、只允许水分子单列通过均为通道选择性的经典证据。C 错误：SGLT1 借 Na⁺ 电化学梯度储存的能量逆浓度梯度累积葡萄糖，属于次级主动运输。',
    difficulty: 3
  },
  {
    id: 'q-cell-biology-10',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'single',
    question: '家族性高胆固醇血症（FH）患者细胞摄取 LDL 障碍、血浆胆固醇显著升高，其最常见的分子机制是：',
    options: [
      '细胞膜 LDL 受体缺陷，受体介导的胞吞受阻',
      'LDL 颗粒过大，无法以任何方式进入细胞',
      '溶酶体缺乏降解胆固醇酯的酸性脂肪酶',
      '高尔基体不能对 LDL 颗粒进行糖基化修饰'
    ],
    answer: 0,
    explanation:
      'Goldstein 与 Brown 的经典研究表明：正常细胞通过 LDL 受体-网格蛋白包被小窝途径特异性胞吞 LDL，FH 患者因 LDL 受体缺失或不能内吞，胆固醇摄取受阻，血 LDL 沉积于动脉壁引发动脉粥样硬化。酸性脂肪酶缺陷所致为另一种罕见脂质贮积病，D 项与 LDL 摄取无关。',
    difficulty: 2
  },

  // ================= 第 3 章 细胞内膜系统 =================
  {
    id: 'q-cell-biology-11',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'single',
    question: 'Blobel 信号假说（1999 年诺贝尔生理学或医学奖）所阐述的核心过程是：',
    options: [
      '分泌蛋白 N 端信号肽被信号识别颗粒（SRP）识别，引导核糖体-新生肽复合体结合内质网膜上的易位子，实现共翻译转运',
      '分泌蛋白在游离核糖体完全合成后，整体直接穿过质膜分泌到胞外',
      '蛋白质的分选方向完全由高尔基体的翻译后加工随机决定',
      '蛋白质进入细胞核由切除信号肽后的剩余部分介导'
    ],
    answer: 0,
    explanation:
      '信号假说指出：新生分泌蛋白的 N 端信号肽被 SRP 暂停合成并 escort 至内质网膜的易位子（Sec61），蛋白边合成边进入内质网腔，信号肽随后被信号肽酶切除。B、C、D 与事实不符；该假说是蛋白质分选理论的基石。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-12',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'single',
    question: 'I-cell 病（黏脂贮积症 II 型）患者细胞内溶酶体缺乏多种水解酶，而这些酶大量出现在血液中，其根本原因是：',
    options: [
      '全部溶酶体水解酶基因同时发生点突变',
      'GlcNAc 磷酸转移酶缺陷，溶酶体酶无法获得 M6P 标记而被错误分泌到胞外',
      'M6P 受体被过度降解',
      'V 型质子泵失活使溶酶体 pH 升高'
    ],
    answer: 1,
    explanation:
      '溶酶体酶在高尔基体顺面由 GlcNAc 磷酸转移酶识别信号斑并加上 M6P（甘露糖-6-磷酸）标记，才能被 M6P 受体分选进网格蛋白小泡运往溶酶体。I-cell 病患者缺乏该转移酶，未标记的酶随默认途径分泌出细胞，溶酶体内缺酶而包涵体累积。',
    difficulty: 3
  },
  {
    id: 'q-cell-biology-13',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'single',
    question: '溶酶体内维持 pH 约 4.6 的酸性环境，主要依靠膜上的：',
    options: ['Na⁺/K⁺-ATPase', 'V 型 H⁺-ATPase（质子泵）', 'F 型 ATP 合酶', 'Na⁺/H⁺ 交换体'],
    answer: 1,
    explanation:
      'V 型质子泵利用 ATP 水解将 H⁺ 泵入溶酶体腔，维持 pH 约 4.6，以适应腔内 60 余种酸性水解酶的最适 pH。F 型 ATP 合酶反向工作于线粒体内膜合成 ATP，Na⁺/K⁺-ATPase 位于质膜，均不负责溶酶体酸化。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-14',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'truefalse',
    question: '输入过氧化物酶体的蛋白质必须先完全解折叠为伸展状态，才能通过膜上的输入通道。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。过氧化物酶体输入的独特之处在于：携带 PTS1 等信号的蛋白质可以在折叠状态甚至寡聚化之后被输入。这与进入线粒体、内质网的蛋白质必须解折叠伸展形成鲜明对比。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-15',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'single',
    question: '光面内质网（SER）不具备的功能是：',
    options: [
      '磷脂等膜脂的合成',
      '脂溶性药物与毒物的氧化解毒（细胞色素 P450）',
      '作为肌细胞内的 Ca²⁺ 储库（肌浆网为其特化形式）',
      '分泌蛋白 N-连接糖基化的起始'
    ],
    answer: 3,
    explanation:
      'N-连接糖基化的起始部位是糙面内质网（RER），RER 还进行蛋白共翻译转运与 BiP 辅助折叠。SER 的三大经典功能是膜脂合成、P450 介导的解毒以及储存释放 Ca²⁺（肌浆网经 SERCA 与 ryanodine 受体调控）。',
    difficulty: 2
  },

  // ================= 第 4 章 蛋白质分选与膜泡运输 =================
  {
    id: 'q-cell-biology-16',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'single',
    question: '可溶性分泌蛋白从内质网腔运往高尔基体，所依赖的运输方式是：',
    options: ['经核孔的门控运输', '跨膜运输', '囊泡（膜泡）运输', '顺浓度梯度的自由扩散'],
    answer: 2,
    explanation:
      '蛋白质分选有三种基本方式：门控运输经核孔进出细胞核；跨膜运输经易位子穿过 ER、线粒体等膜；囊泡运输负责分泌途径与内吞途径中"隔室之间"的运输。ER→高尔基体正是由 COPII 包被小泡执行的囊泡运输。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-17',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'single',
    question: '负责把携带 KDEL 或 KKXX 信号的内质网驻留蛋白从高尔基体逆行回收运回内质网的包被小泡是：',
    options: ['COPII 包被小泡', 'COPI 包被小泡', '网格蛋白包被小泡', 'ESCRT 包被小体'],
    answer: 1,
    explanation:
      'COPI（Arf1-coatomer）小泡负责高尔基体→ER 的逆向运输，回收因"逃逸"而离开 ER 的 KDEL/KKXX 蛋白，维持内质网驻留蛋白库稳定。COPII（Sar1-Sec23/24-Sec13/31）执行 ER→高尔基的正向运输，网格蛋白小泡经 AP1/GGA 或 AP2 介导 TGN 与质膜处的出芽。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-18',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'truefalse',
    question: '布雷菲德菌素 A（BFA）通过抑制 Arf 的鸟苷酸交换因子（GEF），使 COPI 包被不能组装，高尔基体随之崩解并逆向融合入内质网。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。Arf 需要 GEF 交换 GDP 为 GTP 才能结合膜并招募 coatomer 装配 COPI 小泡；BFA 稳定 Arf-GDP-GEF 无效复合物使 COPI 途径瘫痪，高尔基体膜流向内质网得不到回收，故形态上"崩解入 ER"，是研究膜泡运输的经典药理工具。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-19',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'single',
    question: '关于膜泡的定向运输与融合，下列叙述正确的是：',
    options: [
      'Rab-GTP 招募拴系因子赋予小泡靶向特异性，v-SNARE 与 t-SNARE 拉链式配对组装驱动膜融合',
      'Rab 蛋白直接水解 GTP 供能驱动膜融合，SNARE 负责小泡的出芽',
      'NSF/α-SNAP 利用 GTP 水解拆解 cis-SNARE 复合体',
      '破伤风毒素与肉毒毒素通过增强 SNARE 复合体的组装而促进神经递质释放'
    ],
    answer: 0,
    explanation:
      'Rab-GTP 如"邮政编码"般招募拴系因子与马达，决定小泡识别哪一靶膜；随后互补的 v-/t-SNARE 组装成四螺旋束提供融合动力。NSF/α-SNAP 利用的是 ATP（非 GTP）循环利用 SNARE；破伤风与肉毒毒素以蛋白酶切割 SNARE、阻断递质释放而非促进。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-20',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'single',
    question: '关于蛋白质进入各细胞器（细胞核、内质网、线粒体、过氧化物酶体）的方式，下列叙述正确的是：',
    options: [
      '经核孔输入细胞核的蛋白质须先完全解折叠伸展',
      '经 TOM/TIM 复合体进入线粒体基质的蛋白质须解折叠伸展，且依赖跨内膜电位 Δψ',
      '进入过氧化物酶体的蛋白质只能以完全伸展的单链形式通过',
      '进入内质网的蛋白质以折叠构象直接透过脂双层'
    ],
    answer: 1,
    explanation:
      '核孔运输的最大特点是货物保持折叠状态；线粒体输入需要胞质 Hsp70 与 mtHsp70 协助解折叠，并利用 Δψ 拉动带正电导肽穿膜；过氧化物酶体可输入折叠甚至寡聚的蛋白；ER 输入经易位子而非脂双层扩散。故仅 B 正确。',
    difficulty: 3
  },

  // ================= 第 5 章 线粒体与能量转换 =================
  {
    id: 'q-cell-biology-21',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'single',
    question: 'Mitchell 化学渗透假说（1978 年诺贝尔化学奖）的核心内容是：',
    options: [
      '电子传递产生的能量先储存于高能化学中间物，再转交给 ADP 生成 ATP',
      '电子传递与 ATP 合成经线粒体内膜两侧的质子电化学梯度（质子动力势）耦联，H⁺ 经 ATP 合酶回流驱动 ATP 合成',
      'ATP 合成由基质中 NADH 的直接氧化驱动，与任何跨膜梯度无关',
      '电子传递链位于线粒体外膜，将 H⁺ 泵入基质'
    ],
    answer: 1,
    explanation:
      '复合体 I、III、IV 传递电子的同时把 H⁺ 从基质泵入膜间隙，形成质子动力势；H⁺ 经 ATP 合酶回流释放能量合成 ATP，这就是化学渗透耦联。A 为被否证的化学偶联假说；电子传递链位于内膜；H⁺ 泵出而非泵入基质。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-22',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'single',
    question: '下列各项中，不支持线粒体内共生起源学说的是：',
    options: [
      '线粒体具有双层膜结构',
      'mtDNA 为环状、裸露、不与组蛋白结合',
      '线粒体核糖体为 70S，与细菌的相近',
      '线粒体的全部蛋白质均由自身 mtDNA 编码'
    ],
    answer: 3,
    explanation:
      '恰恰相反：线粒体蛋白约 99% 由核基因编码、在胞质合成后经 TOM/TIM 输入，mtDNA 仅编码 13 条呼吸链亚基、22 种 tRNA 和 2 种 rRNA，需两套基因组协同。双膜、环状裸露 DNA、70S 核糖体及系统发育分析（源于 α-变形菌）均为内共生学说的有力证据。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-23',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'single',
    question: '解偶联剂 2,4-二硝基苯酚（DNP）使细胞耗氧继续而 ATP 合成停止，其机制是：',
    options: [
      '直接抑制 ATP 合酶 γ 轴的旋转',
      '使内膜对 H⁺ 通透，质子梯度以热能形式泄漏消散',
      '阻断电子从 NADH 向复合体 I 的传递',
      '竞争性抑制 ADP/ATP 载体'
    ],
    answer: 1,
    explanation:
      'DNP 是脂溶性质子载体，把 H⁺ 从膜间隙直接带回基质，摧毁质子动力势，电子传递（耗氧）与 ATP 合成"解耦"，能量以热散失。棕色脂肪的 UCP1 即生理性解偶联产热的实例；抑制 ATP 合酶的是寡霉素，抑制复合体 IV 的是氰化物。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-24',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'truefalse',
    question: '人类 mtDNA 呈母系遗传，编码 13 条呼吸链亚基、22 种 tRNA 和 2 种 rRNA，因缺乏组蛋白保护且修复系统有限，其突变率显著高于核基因组。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。mtDNA 为 16569 bp 的环状分子，几乎不含非编码序列；因贴近呼吸链 ROS、无组蛋白保护、修复能力有限而突变率高。母系遗传、异质性与阈值效应共同决定线粒体病的传递与表型差异。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-25',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'single',
    question: '关于线粒体与细胞凋亡的关系，下列叙述正确的是：',
    options: [
      '凋亡信号使 Bax/Bak 在线粒体外膜成孔释放细胞色素 c，后者与 Apaf-1 组装凋亡复合体激活 caspase-9',
      '线粒体在凋亡中仅承担供能角色，不参与凋亡调控',
      '环孢素 A 是 mPTP 开放的诱导剂，临床用于加重缺血再灌注损伤',
      '细胞色素 c 释放是坏死性凋亡特有的标志事件'
    ],
    answer: 0,
    explanation:
      '线粒体是内源性凋亡途径的调控中心：Bax/Bak 成孔释放 Cyt c，与 Apaf-1 及 procaspase-9 组装凋亡复合体，启动 caspase 级联。环孢素 A 抑制（而非诱导）mPTP 开放，用于减轻缺血再灌注损伤；Cyt c 释放是凋亡而非坏死性凋亡的标志。',
    difficulty: 3
  },

  // ================= 第 6 章 细胞骨架 =================
  {
    id: 'q-cell-biology-26',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'single',
    question: '微管正端持续生长与灾难性缩短交替进行，这种动态不稳定性的分子基础是：',
    options: [
      '微管蛋白的磷酸化-去磷酸化循环',
      '正端 GTP 帽的得失：GTP 帽存在时微管生长，帽丢失后迅速去组装',
      'γ 微管蛋白环状复合体的周期性开合',
      '微管蛋白的泛素化-蛋白酶体降解'
    ],
    answer: 1,
    explanation:
      '微管是由 13 根原丝构成的中空管，αβ 二聚体带 GTP 加到正端后，若 GTP 帽完整则持续生长；一旦正端亚基的 GTP 被水解而帽丢失，微管即发生灾难性缩短，随后可被"挽救"重新生长。该性质为纺锤体搜索-捕获所必需。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-27',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'single',
    question: '关于微管马达蛋白，下列叙述正确的是：',
    options: [
      '驱动蛋白（kinesin）一般向微管正端移动，胞质动力蛋白（dynein）向负端移动',
      '驱动蛋白一般向微管负端移动，动力蛋白向正端移动',
      '两类马达的移动方向由所运货物决定，与微管极性无关',
      '两类马达均利用跨膜电位而非 ATP 水解供能'
    ],
    answer: 0,
    explanation:
      '多数驱动蛋白执行顺向运输（向正端/轴突末梢），胞质动力蛋白在 dynactin 辅助下执行逆向运输（向负端/胞体），两者都以 ATP 水解与构象变化耦联、以约 8 nm 步距 hand-over-hand 行走。轴丝动力蛋白缺陷导致原发性纤毛不动综合征（Kartagener 综合征：不育伴内脏反位）。',
    difficulty: 3
  },
  {
    id: 'q-cell-biology-28',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'truefalse',
    question: '中间丝（中间纤维）没有极性、不与核苷酸结合，既不存在踏车行为，也没有沿其移动的马达蛋白。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。中间丝直径约 10 nm，由组织特异性蛋白（角蛋白、波形蛋白、结蛋白、GFAP、神经丝蛋白、核纤层蛋白等）以反平行四聚体方式组装，故整根纤维无极性；组装与稳定不依赖 GTP/ATP，也无马达蛋白利用其轨道运输，其功能主要是维持机械完整性。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-29',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'single',
    question: '骨骼肌收缩的 Ca²⁺ 开关机制由下列哪组分子执行？',
    options: [
      '肌钙蛋白复合体与原肌球蛋白：Ca²⁺ 与肌钙蛋白 C 结合引起原肌球蛋白移位，暴露肌动蛋白上肌球蛋白的结合位点',
      'Ca²⁺ 与肌球蛋白头部直接结合，启动横桥循环',
      'Ca²⁺ 经肌浆网膜上的 ryanodine 受体进入细胞核启动转录',
      'CaM-CaMKII 复合物直接使细肌丝磷酸化'
    ],
    answer: 0,
    explanation:
      '肌钙蛋白-原肌球蛋白复合体位于细肌丝，是 Ca²⁺ 的开关：肌膜（横小管）去极化使 Ca²⁺ 经 ryanodine 受体释放，结合肌钙蛋白 C 后原肌球蛋白滑入螺旋沟，暴露结合位点，横桥循环得以进行。CaM-CaMKII 参与平滑肌收缩调控而非骨骼肌的分子开关。',
    difficulty: 3
  },
  {
    id: 'q-cell-biology-30',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'single',
    question: '秋水仙素与紫杉醇均可抑制细胞增殖、被用于抗肿瘤治疗，它们作用于微管的机制分别是：',
    options: [
      '秋水仙素抑制微管组装 / 紫杉醇稳定微管使其不能解聚',
      '秋水仙素稳定微管 / 紫杉醇抑制微管组装',
      '两者均通过稳定微管发挥作用',
      '两者均通过促进微管解聚发挥作用'
    ],
    answer: 0,
    explanation:
      '秋水仙素结合游离微管蛋白二聚体阻止聚合，紫杉醇（taxol）结合微管抑制其解聚，两者从相反方向破坏微管的动态平衡，使纺锤体丧失动力学功能而将细胞阻断于 M 期。理解"动态的微管才有功能"是本题关键。',
    difficulty: 2
  },

  // ================= 第 7 章 细胞核与染色体 =================
  {
    id: 'q-cell-biology-31',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'single',
    question: '为核质运输提供方向性的 Ran-GTP 梯度，其建立的关键是：',
    options: [
      'RCC1（鸟苷酸交换因子）位于核内，而 RanGAP 位于胞质',
      'RCC1 位于胞质，而 RanGAP 位于核内',
      '梯度由小分子经核孔的被动扩散维持',
      '输入蛋白本身具有 GTP 酶活性并定位于核膜'
    ],
    answer: 0,
    explanation:
      '核内 RCC1 促进 Ran-GDP→Ran-GTP，胞质 RanGAP 促进 Ran-GTP 水解，形成"核高胞低"的 Ran-GTP 梯度：输入复合体在核内被高 Ran-GTP 拆开释放货物，输出复合体则在胞质解离，方向性由此产生。',
    difficulty: 3
  },
  {
    id: 'q-cell-biology-32',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'single',
    question: '关于核仁的叙述，正确的是：',
    options: [
      '核仁外有单层膜包裹，以维持其独立内环境',
      '核仁围绕 rDNA（核仁组织区，NOR）构建、无膜包裹，是 rRNA 转录加工与核糖体亚基装配的场所',
      '5S rRNA 由 RNA 聚合酶 I 在核仁内转录',
      '核仁在细胞分裂过程中持续存在，从不消失'
    ],
    answer: 1,
    explanation:
      '核仁是纤维中心（FC）、致密纤维组分（DFC）与颗粒组分（GC）构成的动态结构：45S rRNA 前体由 Pol I 转录、snoRNP 加工，GC 区装配大、小亚基后经核孔输出。5S rRNA 由 Pol III 在核仁外转录；有丝分裂前期核仁随 rDNA 转录停止而解体。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-33',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'single',
    question: '核小体核心颗粒中，DNA 缠绕组蛋白八聚体的圈数与所含 DNA 长度约为：',
    options: ['1.65 圈，约 146 bp', '2.5 圈，约 200 bp', '1 圈，约 100 bp', '3 圈，约 300 bp'],
    answer: 0,
    explanation:
      '核小体由 Kornberg 提出、Luger 解析晶体结构：146 bp 的 DNA 以 1.65 圈缠绕于 H2A/H2B/H3/H4 各两分子组成的八聚体，连接 DNA 约 60 bp 串联成串珠，进而折叠为 30 nm 螺线管及更高级结构，总压缩近万倍。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-34',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'truefalse',
    question: '端粒酶（TERT+TERC）以自身 RNA 为模板逆转录延伸端粒，在生殖细胞、干细胞和多数肿瘤细胞中活跃，而大多数体细胞端粒随分裂逐次缩短。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。末端复制问题使体细胞每轮复制丢失端粒重复（人类为 TTAGGG），端粒临界缩短即触发复制性衰老；端粒酶活性的发现与功能（2009 年诺贝尔奖）解释了干细胞与肿瘤细胞的增殖潜能。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-35',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'single',
    question: '关于多线染色体与灯刷染色体，下列叙述正确的是：',
    options: [
      '多线染色体上的胀泡是活跃转录的位点；灯刷染色体的侧环是高转录的转录单位',
      '灯刷染色体由果蝇唾腺细胞多轮复制不分离形成',
      '多线染色体形成于减数分裂粗线期的同源联会过程',
      '两者都是人类肿瘤细胞特有的标志染色体'
    ],
    answer: 0,
    explanation:
      '多线染色体源于间期细胞多轮复制而子链不分离、体细胞同源染色体配对（如果蝇唾腺），其胀泡（puff）是基因活跃转录的形态学证据；灯刷染色体见于减数分裂双线期卵母细胞，侧环呈"圣诞树"样转录泡。B 将两者对调，C 混淆了联会复合体，D 无事实依据。',
    difficulty: 2
  },

  // ================= 第 8 章 细胞信号转导 =================
  {
    id: 'q-cell-biology-36',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'single',
    question: '关于 G 蛋白偶联受体（GPCR），下列叙述正确的是：',
    options: [
      'GPCR 一般为七次跨膜的单体蛋白，是人体最大的膜受体家族，也是最重要的药物靶点之一',
      'Gα 亚基缺乏 GTP 酶活性，信号只能靠受体脱敏终止',
      '霍乱毒素使 Gs 处于持续失活状态',
      'GPCR 胞内区具酪氨酸激酶活性，可自身磷酸化'
    ],
    answer: 0,
    explanation:
      'GPCR 七次跨膜、偶联三聚体 G 蛋白。Gα 自身具 GTP 酶活性并有 RGS 加速，二者共同关闭信号；霍乱毒素使 Gs 持久激活（而非失活）导致 cAMP 剧增与分泌性腹泻，百日咳毒素则冻结 Gi；具酪氨酸激酶活性的是 RTK，不是 GPCR。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-37',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'single',
    question: 'Gq-PLCβ 途径中，双信使 IP₃ 与 DAG 的作用分别是：',
    options: [
      'IP₃ 激活 PKC，DAG 开放内质网钙通道',
      'IP₃ 开放内质网膜上 IP₃ 受体释放 Ca²⁺，DAG 与 Ca²⁺ 协同激活蛋白激酶 C（PKC）',
      '两者均作为第二信使激活腺苷酸环化酶',
      'IP₃ 直接进入细胞核启动特异基因转录'
    ],
    answer: 1,
    explanation:
      'PLCβ 水解 PIP₂ 生成 IP₃ 与 DAG：IP₃ 为水溶性信使，扩散至内质网开放 IP₃ 受体钙通道释放 Ca²⁺；DAG 留在膜上与 Ca²⁺ 一起激活 PKC。两者作用对调即 A 的错误所在；激活腺苷酸环化酶的是 Gs，而非该途径的产物。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-38',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'truefalse',
    question: '一氧化氮（NO）作为气体信使分子，通过激活可溶性鸟苷酸环化酶升高胞内 cGMP 使血管平滑肌舒张，这是硝酸甘油缓解心绞痛的药理学基础。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。血管内皮经 eNOS（受 Ca²⁺-CaM 调控）产生 NO，NO 扩散进入平滑肌激活 sGC 生成 cGMP，cGMP 依赖性激酶降低胞内 Ca²⁺ 引起舒张。硝酸甘油在体内释放 NO，模拟这一通路。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-39',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'multiple',
    question: '下列属于细胞信号转导"第二信使"的分子有：',
    options: ['cAMP', 'IP₃', 'Ca²⁺', 'Ras 蛋白'],
    answer: [0, 1, 2],
    explanation:
      '经典第二信使包括 cAMP、cGMP、IP₃、DAG 与 Ca²⁺ 等胞内小分子，由上游受体-酶级联快速产生并放大信号。Ras 是膜内小 GTP 酶开关蛋白，属信号级联中的转导组分，不属于第二信使。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-40',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'single',
    question: '关于酶联受体介导的信号转导，下列叙述错误的是：',
    options: [
      '多数 RTK 与配体结合后二聚化并自磷酸化，产生含磷酸酪氨酸（pTyr）的停泊位点（胰岛素受体则预先二聚）',
      'Ras-MAPK 级联中，Ras 突变见于约 30% 的人类肿瘤',
      'PI3K→PIP₃→AKT→mTORC1 途径调控细胞生长存活，PTEN 是其关键的抑癌性负调因子',
      'JAK-STAT 途径中，STAT 以未磷酸化的单体形式入核直接启动靶基因转录'
    ],
    answer: 3,
    explanation:
      '错误的是 D：STAT 必须先被受体相关的 JAK 磷酸化、以 SH2-pTyr 介导二聚化后才能入核结合 GAS 元件，且 SOCS 蛋白构成负反馈。A、B、C 分别对应 RTK 活化机制、Ras 的肿瘤遗传学与 PI3K-AKT 途径的核心调控，均为教材要点。',
    difficulty: 3
  },

  // ================= 第 9 章 细胞连接与细胞外基质 =================
  {
    id: 'q-cell-biology-41',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'single',
    question: '紧密连接（闭锁小带）的主要功能是：',
    options: [
      '封闭上皮细胞间隙的细胞旁通路并维持细胞的顶端-基底面极性',
      '在相邻细胞间形成 1.5—2 nm 的亲水通道实现电与代谢耦联',
      '将角蛋白中间丝锚定于相邻细胞',
      '介导整联蛋白与细胞外基质的粘附并传导力学信号'
    ],
    answer: 0,
    explanation:
      '紧密连接由 claudin/occludin 嵌合成嵴线，封闭细胞旁路（如血脑屏障的 claudin-5），并作为"栅栏"维持膜蛋白的极性分布。B 为间隙连接，C 为桥粒，D 为粘着斑，三者分属不同连接类型。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-42',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'truefalse',
    question: '间隙连接由连接蛋白（connexin）六聚体对接构成直径 1.5—2 nm 的通道，允许小分子与离子在细胞间直接交换，实现电耦联与代谢耦联。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。相邻细胞膜上的 connexon 对接形成间隙连接，通透分子量上限约 1 kDa；心肌与平滑肌的电耦联、早期胚胎发育中的信号传播均依赖它，GJB2（connexin 26）突变可致常染色体隐性遗传性耳聋。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-43',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'single',
    question: '在相邻上皮细胞之间将角蛋白中间丝网络锚定在一起的锚定连接是：',
    options: ['粘合带（粘着连接）', '桥粒', '粘着斑', '半桥粒'],
    answer: 1,
    explanation:
      '锚定连接按所连细胞骨架分两类：连肌动蛋白的粘合带（经钙粘蛋白-连环蛋白）与连中间丝的桥粒；桥粒跨膜糖蛋白为桥粒芯糖蛋白/桥粒胶蛋白（天疱疮自身抗体的靶点）。粘着斑与半桥粒连接细胞与细胞外基质，分别用整联蛋白连肌动蛋白与连角蛋白。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-44',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'single',
    question: '关于细胞外基质（ECM）主要成分的叙述，正确的是：',
    options: [
      '胶原的基本重复序列为 Gly-X-Y，脯氨酸与赖氨酸羟化需维生素 C，IV 型胶原参与构成基膜',
      '弹性蛋白以 Gly-X-Y 重复构成三股螺旋而赋予组织抗张强度',
      '纤连蛋白由三条相同肽链组成，不含 Arg-Gly-Asp 基序',
      '透明质酸是与核心蛋白共价连接的氨基聚糖，在组织中不游离存在'
    ],
    answer: 0,
    explanation:
      'A 概括了胶原结构、翻译后修饰（维生素 C 缺乏→坏血病）与基膜组成的核心要点。弹性蛋白是高度疏水、以赖氨酸氧化酶（LO）交联的弹性网络（其支架原纤维蛋白缺陷致 Marfan 综合征）；纤连蛋白为二聚体且含被整联蛋白识别的 RGD 基序；透明质酸是唯一不与核心蛋白共价连接的游离 GAG。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-45',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'single',
    question: '炎症反应中白细胞从血管内渗出到组织，正确的步骤顺序是：',
    options: [
      '选择素介导的滚动 → 趋化因子激活整联蛋白 → 经 ICAM-1 介导牢固粘附 → PECAM-1 介导穿内皮迁移',
      '整联蛋白介导滚动 → 选择素介导牢固粘附 → 穿内皮迁移',
      '选择素介导牢固粘附 → 趋化因子激活 → 整联蛋白穿内皮迁移',
      'IgSF 分子介导滚动 → 选择素介导穿内皮迁移 → 整联蛋白激活'
    ],
    answer: 0,
    explanation:
      '渗出级联：血管内皮表达的选择素识别白细胞糖链使其减速滚动；趋化因子（如 IL-8）激活白细胞整联蛋白 LFA-1，使之与内皮 ICAM-1 高亲和力结合而牢固粘附；最后白细胞经 PECAM-1 介导穿越内皮间隙。LAD（CD18 缺陷）与抗整联蛋白药物均印证该模型。',
    difficulty: 2
  },

  // ================= 第 10 章 细胞周期与细胞分裂 =================
  {
    id: 'q-cell-biology-46',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'single',
    question: '在一个典型的细胞周期中，细胞 DNA 含量由 2C 增加到 4C 发生在：',
    options: ['G1 期', 'S 期', 'G2 期', 'M 期'],
    answer: 1,
    explanation:
      'S 期完成基因组 DNA 的精确复制（且仅复制一次），2C→4C；G1 期为进入 S 期做准备（含限制点 R），G2 期核查复制忠实性并准备进入 M 期。流式检测 DNA 含量（G1 为 2C 峰、G2/M 为 4C 峰）正是周期分析的常规手段。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-47',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'single',
    question: '驱动 G2/M 转换的 MPF（促成熟因子，2001 年诺贝尔奖工作）的本质是：',
    options: ['CDK1 与 cyclin B 的复合体', 'CDK2 与 cyclin D 的复合体', 'CDK4/6 与 cyclin E 的复合体', 'cyclin A 与 CDK1 的泛素化复合体'],
    answer: 0,
    explanation:
      'MPF = cyclin B-CDK1，磷酸化多种底物启动 M 期（如磷酸化核纤层蛋白致核膜崩解）。cyclin D-CDK4/6 经 Rb-E2F 推动 G1/S 转换，cyclin E/A-CDK2 负责启动与完成 S 期，选项 B、C 的搭配均错位。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-48',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'truefalse',
    question: '正常细胞中 p53 与 Mdm2 结合而被快速降解；DNA 损伤后 p53 稳定上调 p21，引起 G1 期阻滞，损伤不可修复时则促发凋亡。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。这是 p53 作为"基因组卫士"的经典工作模式：损伤信号经 ATM/ATR-Chk 级联稳定 p53，p21 抑制 G1/S 所需的 CDK2/4 造成阻滞；若损伤过重则转而促凋亡，约半数人类肿瘤存在 p53 通路失活。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-49',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'single',
    question: '有丝分裂后期姐妹染色单体分离的分子机制是：',
    options: [
      'APC/C 降解 securin，释放 separase 切割 cohesin',
      'condensin 压缩染色体使其机械弹开',
      '微管马达蛋白直接撕开着丝粒 DNA',
      'RhoA 激活使 cohesin 被 Ca²⁺ 依赖性蛋白酶降解'
    ],
    answer: 0,
    explanation:
      '后期启动的关键开关是 APC/C-Cdc20 降解 securin：separase 因此游离并切割粘连蛋白 cohesin，姐妹染色单体随即被微管拉向两极（后期 A），叠加两极分离（后期 B）。condensin 负责染色体凝集，RhoA 驱动胞质分裂的收缩环，均非分离机制。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-50',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'single',
    question: '关于减数分裂与有丝分裂的比较，下列叙述错误的是：',
    options: [
      '减数分裂 DNA 只复制一次，而细胞连续分裂两次',
      '减数分裂后期 I 分离的是同源染色体，姐妹染色单体的着丝粒仍保持相连',
      '前期 I 发生同源配对联会与交叉重组，是遗传多样性的重要来源',
      '减数分裂最终产生的子细胞与亲代细胞遗传内容完全相同'
    ],
    answer: 3,
    explanation:
      '错误的是 D：重组（单配子约 2²³ 种组合叠加）与同源染色体的独立分配使子细胞遗传内容彼此不同、也不同于亲本，这正是有性生殖多样性的基础。A、B、C 均为减数分裂的定义性特征；不分离可致 21 三体等非整倍体。',
    difficulty: 2
  },

  // ================= 第 11 章 细胞分化、干细胞与衰老 =================
  {
    id: 'q-cell-biology-51',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'single',
    question: '细胞分化的分子本质是：',
    options: [
      '分化过程中基因组 DNA 的大量丢失或重排',
      '在管家基因持续表达的基础上，组织特异性基因（奢侈基因）按程序差异表达',
      '基因组 DNA 序列发生定向突变',
      '仅由细胞器数量与种类的改变所决定'
    ],
    answer: 1,
    explanation:
      '分化细胞与受精卵拥有基本相同的基因组，差异源于基因表达模式（转录因子组合与表观遗传标记），这保证了 Gurdon 核移植与 iPS 重编程在原理上可行。B 细胞抗体基因重排是基因组不变的少数例外，故 A、C 错误。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-52',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'truefalse',
    question: 'Gurdon 的爪蟾肠上皮细胞核移植实验证明：已分化细胞的细胞核仍保持发育的全能性，细胞分化在原则上是可以逆转的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。将分化细胞的核移植入去核卵母细胞可获得成熟个体，说明分化是基因表达状态的改变而非遗传信息的不可逆丢失，该工作与 iPS 一并获 2012 年诺贝尔生理学或医学奖。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-53',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'single',
    question: '山中伸弥诱导小鼠成纤维细胞为多能干细胞（iPS）所用的"山中因子"是：',
    options: [
      'Oct4、Sox2、Klf4、c-Myc',
      'Oct4、Nanog、Lin28、p53',
      'MyoD、Pax6、GATA4、C/EBPα',
      'Sox2、Nanog、Klf4、Rb'
    ],
    answer: 0,
    explanation:
      'OSKM 四因子（Oct4/Sox2/Klf4/c-Myc）经渐进重编程（含 MET 步骤）将成纤维细胞逆转为多能干细胞。MyoD、Pax6 等是谱系主导转录因子（用于转分化），Nanog 为多能性标志而非最初的诱导组合；残留表观记忆与 c-Myc 致瘤性是 iPS 应用中的主要障碍。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-54',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'single',
    question: '关于胚胎干细胞（ESC）的叙述，正确的是：',
    options: [
      'ESC 取自囊胚的滋养层，注入体内只能形成胎盘成分',
      'ESC 具无限自我更新能力，表达 Oct4/Nanog/Sox2 等标志分子，可向三胚层来源的各种细胞分化',
      'ESC 属于单能干细胞，只能分化为一种成熟细胞',
      'ESC 注入免疫缺陷小鼠后不能形成畸胎瘤'
    ],
    answer: 1,
    explanation:
      'ESC 源自囊胚内细胞团（ICM），具有全能分化谱系（三胚层畸胎瘤与嵌合体形成是鉴定金标准）。滋养层只能发育为胎盘成分；"单能"描述的是某些成体祖细胞，与 ESC 的多能性不符。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-55',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'single',
    question: '关于细胞衰老的 Hayflick 界限与端粒学说，下列叙述正确的是：',
    options: [
      '正常人成纤维细胞在体外培养中可无限传代',
      '人成纤维细胞体外传代约 50 次后进入复制性衰老，端粒临界缩短是其核心机制之一',
      '端粒缩短只见于肿瘤细胞，正常体细胞端粒长度恒定',
      '导入端粒酶可使细胞立即癌变，因此不能用于研究衰老'
    ],
    answer: 1,
    explanation:
      'Hayflick 界限指正常二倍体细胞有限的分裂潜能（约 50 代）；每轮复制丢失端粒使体细胞端粒逐次缩短，临界缩短激活 p53-p21 与 p16-Rb 通路。导入 hTERT 可使细胞越过界限（延长复制寿命），本身并不足以致癌。SIPS 与 OIS 属应激诱导的早衰，不依赖端粒长度。',
    difficulty: 2
  },

  // ================= 第 12 章 细胞死亡 =================
  {
    id: 'q-cell-biology-56',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'single',
    question: '下列不属于细胞凋亡典型形态学特征的是：',
    options: [
      '细胞皱缩、体积变小',
      '染色质凝集并边集于核膜下',
      '细胞肿胀、质膜破裂、内容物释放',
      '形成凋亡小体并被邻近细胞吞噬清除'
    ],
    answer: 2,
    explanation:
      '凋亡形态三联征为细胞皱缩、染色质凝集边集与凋亡小体形成，生物化学上伴随 DNA 梯状条带（CAD 切割为 180—200 bp 整数倍）与 PS 外翻供吞噬识别。细胞肿胀与质膜破裂是坏死及坏死性凋亡的表现，并因此引发炎症。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-57',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'truefalse',
    question: '细胞凋亡是由基因决定的主动程序性死亡，因内容物被膜包被的凋亡小体清除，通常不引发炎症反应。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。凋亡依赖 caspase 级联与能量，"干净"地清除；而坏死与坏死性凋亡因膜破裂释放 DAMP 而引发炎症。凋亡与坏死的炎症差异决定了两者截然不同的病理后果与治疗策略。',
    difficulty: 1
  },
  {
    id: 'q-cell-biology-58',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'single',
    question: '细胞毒性 T 细胞通过 Fas 途径诱导靶细胞凋亡，正确的信号顺序是：',
    options: [
      'FasL 结合 Fas → FADD 接头 → 募集并激活 caspase-8 → 激活 caspase-3',
      'FasL 结合 Fas → Bax 成孔释放 Cyt c → Apaf-1 凋亡复合体 → caspase-9',
      'FasL 结合 Fas → RIPK1/RIPK3 → MLKL 磷酸化成孔',
      'FasL 结合 Fas → 颗粒酶 B 直接进入靶细胞核切割 DNA'
    ],
    answer: 0,
    explanation:
      '死亡受体（外源性）途径：FasL-Fas 二聚化募集接头 FADD 与起始 caspase-8 组成 DISC，caspase-8 活化后直接切割激活执行 caspase-3（在 II 型细胞中经 tBid 借道线粒体放大）。B 是线粒体（内源性）途径，C 是坏死性凋亡轴，D 混淆了颗粒酶/穿孔素机制。',
    difficulty: 2
  },
  {
    id: 'q-cell-biology-59',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'single',
    question: '关于 Bcl-2 家族对凋亡的调控，下列叙述正确的是：',
    options: [
      'Bax/Bak 为效应促凋亡蛋白，BH3-only 蛋白为感应者，tBid 衔接死亡受体途径与线粒体途径',
      'Smac/DIABLO 通过抑制 caspase 的合成而阻断凋亡',
      'Bcl-2 因 t(14;18) 易位而过表达会加速肿瘤细胞凋亡',
      'Venetoclax 是 Bcl-2 激动剂，通过增强 Bcl-2 功能抗肿瘤'
    ],
    answer: 0,
    explanation:
      'Bcl-2 家族三分：抗凋亡（Bcl-2）、效应促凋亡（Bax/Bak）与 BH3-only 感应者（Bid/Bim/Puma 等）；caspase-8 切割 Bid 为 tBid，把外源性信号导入线粒体途径放大，t(14;18)（滤泡淋巴瘤）使 Bcl-2 过表达而抑制凋亡促瘤；Smac/DIABLO 反而通过拮抗 XIAP 等 IAP 强化 caspase；Venetoclax 是 BH3 模拟物（Bcl-2 抑制剂）。',
    difficulty: 3
  },
  {
    id: 'q-cell-biology-60',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'multiple',
    question: '关于受调节的细胞死亡方式，下列叙述正确的有：',
    options: [
      '坏死性凋亡由 RIPK1-RIPK3-MLKL 轴执行，常在 caspase-8 被抑制时作为 TNF 信号的备用通路',
      '焦亡由炎性小体激活 caspase-1，切割 GSDMD 成孔并释放 IL-1β/IL-18 等炎性因子',
      '铁死亡是铁依赖性脂质过氧化驱动的死亡形式，GPX4 失活可诱发',
      '自噬与细胞死亡无关，PINK1-Parkin 介导的线粒体自噬完全独立于自噬机制'
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 分别概括坏死性凋亡、焦亡与铁死亡的核心轴；三者的免疫学后果（后两者强炎症）与凋亡的免疫沉默形成对照。D 错误：PINK1-Parkin 介导的线粒体自噬（mitophagy）正是选择性自噬的典型类型，其基因突变与帕金森病相关。',
    difficulty: 2
  }
]
