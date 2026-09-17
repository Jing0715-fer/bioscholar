// ============================================================
// BioScholar 细胞生物学测验题库 - 批次 A3（第 7–9 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-cell-biology-31 ~ q-cell-biology-45）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：翟中和/丁明孝《细胞生物学》（第5版）、
// Alberts《Molecular Biology of the Cell》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const cellBiologyQuizA3: QuizQuestion[] = [
  // ================= 第 7 章 细胞通信与信号转导（q-cell-biology-31 ~ 35） =================
  {
    id: 'q-cell-biology-31',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'single',
    question: '关于三聚体 G 蛋白 Gs、Gi 与 Gq 的效应器与第二信使变化，下列配对正确的是：',
    options: [
      'Gs 激活磷脂酶 Cβ，使 IP3 与 DAG 升高',
      'Gi 抑制腺苷酸环化酶，使 cAMP 降低',
      'Gq 激活腺苷酸环化酶，使 cAMP 升高',
      'Gi 激活磷脂酶 Cβ，使 IP3 与 DAG 升高',
    ],
    answer: 1,
    explanation:
      '三类 G 蛋白按 α 亚基功能划分：Gs 刺激腺苷酸环化酶使 cAMP 升高；Gi 抑制腺苷酸环化酶使 cAMP 降低（M2 毒蕈碱受体、α2 受体经此路）；Gq 激活磷脂酶 Cβ，把 PIP2 水解为 IP3 与 DAG。A 与 C 把两条通路的效应器张冠李戴，D 则把 Gq 的功能错安在 Gi 上。另需记住霍乱毒素使 Gsα 的 GTP 酶失活而永久激活，百日咳毒素则把 Gi 锁死在失活态，故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-32',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'single',
    question: 'cAMP 激活蛋白激酶 A（PKA）的分子机制是：',
    options: [
      'cAMP 直接与 PKA 催化亚基的 ATP 结合口竞争结合',
      '每个调节亚基各结合 2 个 cAMP（共 4 个）后变构释放游离催化亚基',
      'cAMP 使 PKA 的催化亚基磷酸化而活化',
      'cAMP 先激活腺苷酸环化酶，再由其磷酸化 PKA',
    ],
    answer: 1,
    explanation:
      'PKA 全酶为两个调节亚基与两个催化亚基组成的四聚体。cAMP 不作用于催化亚基，而是每个调节亚基结合两个 cAMP（全酶共 4 个），引起调节亚基变构并与催化亚基解离，游离的催化亚基才获得激酶活性；这与钙调蛋白结合 Ca²⁺ 后激活 CaMKII 的「变构解锁」逻辑同构。催化亚基自身不经 cAMP 磷酸化活化，腺苷酸环化酶位于 cAMP 的上游而非下游，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-33',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'single',
    question: '生长因子经受体酪氨酸激酶激活 ERK 的正确分子顺序是：',
    options: [
      '受体-Grb2-SOS-Ras-Raf-MEK-ERK',
      '受体-Ras-Grb2-SOS-Raf-MEK-ERK',
      '受体-SOS-Grb2-Ras-MEK-Raf-ERK',
      '受体-Grb2-Ras-SOS-ERK-Raf-MEK',
    ],
    answer: 0,
    explanation:
      '活化的 RTK 以自磷酸化酪氨酸招募接头 Grb2：Grb2 的 SH2 结构域结合受体，SH3 结构域预结合鸟苷酸交换因子 SOS，把后者带到膜内侧；SOS 催化 Ras 上的 GDP 置换为 GTP，活化的 Ras 启动 Raf-MEK-ERK 三级激酶级联，MEK 双磷酸化 ERK 活化环上的苏氨酸-谷氨酸-酪氨酸模体后，ERK 入核驱动转录。B、C、D 或颠倒了接头与交换因子的次序，或打乱了三级级联的先后，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-34',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'truefalse',
    question:
      'GPCR 激酶（GRK）只识别并结合活化状态的受体、磷酸化其 C 端尾多个丝氨酸残基，随后阻遏蛋白结合受体，既阻断受体与 G 蛋白再耦联（快速脱敏），又介导受体经网格蛋白依赖途径内吞；内吞受体可被溶酶体降解或脱磷酸后返回质膜复敏。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '这段叙述完整复述了 GPCR 脱敏的两步机制：GRK 对活化态受体的选择性识别保证了「只关刚用过的开关」，这一特异性依赖受体活化构象暴露的结合面；阻遏蛋白结合后既空间位断 G 蛋白耦联，又充当内吞接头；内吞后的命运分「降解（下调）」与「脱磷酸返膜（复敏）」两途。阻遏蛋白还兼任信号体接头激活 ERK 等通路，说明脱敏并非单纯关闭，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-35',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch7',
    type: 'multiple',
    question: '关于信号网络的整合与终止，下列叙述正确的有：',
    options: [
      'ERK 磷酸化 SOS 使其从接头复合物解离，是通路自限的负反馈实例',
      'cAMP 被磷酸二酯酶水解为 5-AMP，咖啡因与茶碱正是磷酸二酯酶抑制剂',
      '同一个受体只能激活一条下游通路，串话纯属实验假象',
      '短暂与持续的 ERK 活化可使同一细胞分别走向增殖与分化（如 PC12 细胞）',
      '支架蛋白 KSR 把 Raf-MEK-ERK 约束在邻近位置，提高级联效率并减少串话',
    ],
    answer: [0, 1, 3, 4],
    explanation:
      'A、B、D、E 分别对应负反馈（ERK-SOS）、第二信使终止（PDE 与咖啡因）、信号动力学编码命运（PC12 中 EGF 短脉冲促增殖、NGF 持续信号促神经元分化）与支架蛋白功能，均与教材一致。C 项错误：一个活化的 RTK 可同时招募 Ras-MAPK 与 PI3K-AKT 等多条支路，通路间的会聚、分叉与横向修饰（串话）是信号网络的常态而非假象，删除任一支路都会改变细胞应答的性质。',
    difficulty: 3,
  },
  // ================= 第 8 章 细胞增殖与细胞周期（q-cell-biology-36 ~ 40） =================
  {
    id: 'q-cell-biology-36',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'single',
    question: '典型体外培养的人细胞周期约 24 小时，其 G1、S、G2 与 M 期的大致时长分别是：',
    options: [
      'G1 约 6 h、S 约 12 h、G2 约 4 h、M 约 2 h',
      'G1 约 11 h、S 约 8 h、G2 约 4 h、M 约 1 h',
      'G1 约 8 h、S 约 11 h、G2 约 2 h、M 约 3 h',
      'G1 约 12 h、S 约 6 h、G2 约 5 h、M 约 1 h',
    ],
    answer: 1,
    explanation:
      '教材口径为 G1 约 11 小时、S 约 8 小时、G2 约 4 小时、M 约 1 小时，合计约 24 小时。周期时间的细胞间差异几乎全部来自 G1 的伸缩，而 S、G2 与 M 的长度相对恒定；极端如爪蟾早胚卵裂每轮仅约 30 分钟，靠省略 G1 与 G2 并全线启动复制子实现。A、C、D 或把 S 期拉长至 12 小时、或把 M 期放大到 2–3 小时，均不符合典型数值，故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-37',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'single',
    question: '关于 MPF 的发现与本质，下列叙述正确的是：',
    options: [
      'MPF 由 Masui 与 Markert 于 1971 年在爪蟾卵母细胞发现，其本质是 CDK1 与周期蛋白 B 的复合物',
      'MPF 是一种可直接复制的转录因子，因其在间期高表达而得名',
      'MPF 的催化亚基是周期蛋白，调节亚基是 CDK1',
      'MPF 活性在 M 期消失、间期出现，故称为促成熟因子',
    ],
    answer: 0,
    explanation:
      'Masui 与 Markert 把成熟卵母细胞胞质注入未成熟卵母细胞令其不经激素即成熟，从而发现可转移的 MPF；后续生化工作证明 MPF 即 CDK1（酵母 cdc2 的同源物）与周期蛋白 B 的异二聚体，Hartwell、Hunt 与 Nurse 因此获 2001 年诺贝尔奖。B、C 混淆了 MPF 的化学本质（激酶复合物而非转录因子；催化亚基是 CDK1 而非周期蛋白），D 把活性振荡的相位说反（M 期出现、间期消失），故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-38',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'single',
    question: '电离辐射造成 DNA 双链断裂后，G1 期阻滞的关键信号链条是：',
    options: [
      'ATR-Chk1-p53-p21，其中 Chk1 直接磷酸化周期蛋白 D 使其稳定',
      'ATM-Chk2-p53-p21，p53 稳定累积后诱导 p21 抑制 cyclin-CDK 复合物',
      'ATM 直接降解 MDM2 蛋白，使 p53 无需转录即可阻断 S 期',
      'MPS1-MAD2-APC/C 通路被激活，经 securin 降解实现 G1 阻滞',
    ],
    answer: 1,
    explanation:
      '双链断裂由 MRN 复合物招募 ATM，ATM 磷酸化 Chk2 与 p53 并使 MDM2 解离，p53 免于泛素化降解而累积，作为转录因子诱导 p21；p21 抑制几乎全部 cyclin-CDK 复合物，把细胞锁在 G1 期，为修复争取时间。A 用错了感应激酶（ATR 对应单链 DNA 与复制胁迫）且 Chk2/Chk1 不稳定周期蛋白 D；C 误把 MDM2 当被降解对象且忽略转录环节；D 是纺锤体组装检验点的分子，与 DNA 损伤检验点无关，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-39',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'truefalse',
    question:
      '纺锤体组装检验点中，未附着动粒上构象活化的 MAD2 与 BUBR1、BUB3、Cdc20 组装成有丝分裂检查点复合物（MCC），封锁 APC/C-Cdc20，使 securin 与周期蛋白 B 得以保全；只要还有一个动粒未附着，后期即被无限期推迟。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '这正是 SAC 的核心逻辑：MPS1 率先磷酸化未附着动粒并招募检验点蛋白，MAD2 构象激活后与 BUBR1、BUB3、Cdc20 组成 MCC，MCC 封锁 APC/C 的共激活子 Cdc20，securin 不被降解、separase 处于受抑状态，粘连蛋白得以维持姐妹染色单体的连接；「单个未附着动粒足以拦住整个细胞」体现了检验点信号的放大与全有或无特性。最后一个动粒附着且张力校验通过后 APC/C 恢复活性，后期才启动，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-40',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch8',
    type: 'multiple',
    question: '关于细胞周期与疾病及抗肿瘤治疗，下列叙述正确的有：',
    options: [
      '周期蛋白 D1 基因扩增、p16 缺失、CDK4 扩增与 Rb 失活殊途同归地解除 Rb 对 E2F 的抑制',
      'TP53 是人类肿瘤中突变最普遍的基因，约一半以上肿瘤携带其失活突变',
      '帕博西尼抑制 CDK4/6，与来曲唑联用一线治疗雌激素受体阳性、HER2 阴性晚期乳腺癌',
      '长春碱阻止微管聚合、紫杉醇阻止微管解聚，机制相反却都使纺锤体失去动态不稳定而阻滞 M 期',
      '依托泊苷抑制拓扑异构酶 I，伊立替康抑制拓扑异构酶 II',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'A 至 D 分别对应 G1/S 闸门失守的四种遗传路径、TP53 的突变频率（热点在 DNA 结合域 R175、R248、R273 等）、CDK4/6 抑制剂的适应证（无进展生存期由约 10 个月延至约 24 个月）与两类微管药的相反机制。E 项把两个靶点说反了：依托泊苷抑制拓扑异构酶 II、伊立替康抑制拓扑异构酶 I；两者经断裂复合物堆积与 DNA 损伤应答触发凋亡。',
    difficulty: 3,
  },
  // ================= 第 9 章 细胞分化与干细胞（q-cell-biology-41 ~ 45） =================
  {
    id: 'q-cell-biology-41',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'single',
    question: 'Yamanaka 团队 2006 年将小鼠成纤维细胞重编程为 iPS 细胞所用的四个转录因子是：',
    options: [
      'Oct3/4、Sox2、Nanog、Lin28',
      'Oct3/4、Sox2、Klf4、c-Myc',
      'Oct3/4、Nanog、Sox2、Klf4',
      'Sox2、Klf4、c-Myc、GATA4',
    ],
    answer: 1,
    explanation:
      'Yamanaka 团队从 24 个候选因子出发逐一剔除，最终锁定 Oct3/4、Sox2、Klf4 与 c-Myc（OSKM）四因子，获得具 ES 特性的小鼠 iPS 细胞，重编程效率约 0.01%–0.1%。A 项的组合（OCT4、SOX2、NANOG、LIN28）是 2007 年 Thomson 组建立人 iPS 时所用的另一套因子，二者常被混记；C 与 D 则是拼凑的干扰项。Gurdon 与 Yamanaka 因体细胞重编程共享 2012 年诺贝尔生理学或医学奖，故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-42',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'single',
    question: 'Gurdon 1962 年的核移植实验对细胞分化概念的最重要贡献是：',
    options: [
      '证明了分化细胞的细胞质中含有逆转细胞命运的因子',
      '证明了已分化细胞（肠上皮）的细胞核仍保有支持完整发育的全套遗传信息',
      '证明了体细胞与生殖细胞的基因组存在大量重排',
      '证明了哺乳动物体细胞克隆的效率高于两栖类',
    ],
    answer: 1,
    explanation:
      'Gurdon 把爪蟾成体肠上皮细胞的核移入去核卵母细胞，经再移植获得可育成体，证明分化只是基因表达程序的改变而非基因信息的丢失——基因组等同性由此确立，也直接启发了后来的多利羊（1997）与 iPS 技术（2006）。A 颠倒了实验读出的对象（是核而非质保有全能性程序）；C 与实验结论相反；D 与事实相反（哺乳动物克隆效率更低，多利来自 277 枚重构卵），故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-43',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'single',
    question: '关于造血干细胞（HSC）的叙述，正确的是：',
    options: [
      'Till 与 McCulloch 的脾集落形成单位（CFU-S）实验首次以克隆分析证明成体干细胞的存在',
      '人 HSC 的临床常用阳性标志是 CD38，而 CD34 阴性细胞才有长期重建能力',
      'HSC 每天产出约 10⁸ 个血细胞，且只分化为红细胞与粒细胞两系',
      'HSC 一经进入血液循环便永久丧失归巢能力',
    ],
    answer: 0,
    explanation:
      '1961 年 Till 与 McCulloch 给受照射小鼠注射骨髓细胞，脾表面集落数与移植剂量呈线性且再移植仍成集落，证明每个集落源于单个克隆性干细胞，此实验是成体干细胞概念的确立性证据。B 把标志说反（临床以 CD34 阳性为 HSC 主要标志，长期重建型多为 CD34 阳性 CD38 阴性）；C 的日产量约 10¹¹ 且分化覆盖红系、粒系、巨核系与淋巴系全部血细胞；D 错误，HSC 经 CXCL12-CXCR4 轴归巢骨髓巢，临床上正是利用归巢能力进行骨髓移植，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-44',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'truefalse',
    question:
      '大鼠切除 70% 肝组织后，残余肝约 7–10 天恢复原重量，其主力是静息肝细胞由 G0 直接重返周期完成一至两轮分裂；严格地说这属于代偿性增生而非真正的再生，因为并未重建被切除的肝小叶原有结构。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'Higgins 与 Anderson 1931 年的经典术式揭示的正是这一过程：起动信号 TNF 与 IL-6 点火，HGF 经 c-Met 与 EGF 家族驱动增殖，TGFβ 家族与体积分割约束终止；残余肝细胞完成一至两轮分裂后即恢复静息，只有肝细胞分裂能力受损时才动员胆管源祖细胞。恢复的是重量与功能而小叶结构未复原，故称代偿性增生——这一区分也解释了肝硬化时「再生」反成病变的原因，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-45',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch9',
    type: 'multiple',
    question: '关于干细胞与组织再生，下列叙述正确的有：',
    options: [
      '果蝇神经母细胞不对称分裂时 Numb 蛋白只分配到一个子细胞，通过抑制 Notch 使其走向分化',
      '干细胞巢中，CAR 细胞高分泌 CXCL12 经 CXCR4 锚定造血干细胞，膜结合型 SCF 经 c-Kit 供给存活信号',
      'iPS 细胞常残留供体细胞的表观记忆，使其倾向于沿供体谱系方向分化',
      '2009 年 Clevers 实验室用单个 Lgr5 阳性肠隐窝干细胞在三维基质中培养出肠类器官',
      '新生小鼠心尖切除后心脏不能再生，心肌再生能力只见于斑马鱼等低等脊椎动物',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'A 至 D 分别对应不对称分裂的分子机制（Numb 抑制 Notch 造成两个子细胞命运不同）、造血巢的关键锚定与存活信号、表观记忆现象（多次传代或表观处理可削弱）与首个肠道类器官的建立（Sato 等以 R-spondin、Noggin 与 EGF 培养）。E 项错误：新生小鼠心尖切除后心脏可在数周内无瘢痕完全再生，只是这一能力在出生后约一周即告消失；斑马鱼成年后仍可再生约五分之一心肌，哺乳动物并非全无范例，而是再生窗口狭窄。',
    difficulty: 3,
  },
]
