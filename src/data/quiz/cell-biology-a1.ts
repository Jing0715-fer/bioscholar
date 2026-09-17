// ============================================================
// BioScholar 细胞生物学测验题库 - 批次 A1（第 1–3 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-cell-biology-1 ~ q-cell-biology-15）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：翟中和/丁明孝《细胞生物学》（第5版）、
// Alberts《Molecular Biology of the Cell》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const cellBiologyQuizA1: QuizQuestion[] = [
  // ================= 第 1 章 细胞生物学绪论（q-cell-biology-1 ~ 5） =================
  {
    id: 'q-cell-biology-1',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'single',
    question: '1855 年提出「细胞来自细胞」、纠正自由细胞形成错误并使细胞学说臻于完备的学者是：',
    options: ['施莱登（Schleiden）', '施旺（Schwann）', '魏尔肖（Virchow）', '虎克（Hooke）'],
    answer: 2,
    explanation:
      '施莱登与施旺分别于 1838 与 1839 年提出动植物体皆由细胞构成，但两人当时仍相信新细胞可在细胞间质的「胚基」中自由组装形成；1855 年魏尔肖以「细胞来自细胞」的论断补上第三条要义——细胞只能由既有细胞分裂产生，细胞学说就此完备，并为细胞病理学奠基。虎克在 1665 年命名细胞，早于学说形成近两百年，故选 C。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-2',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'truefalse',
    question:
      '支原体直径约 0.1–0.3 μm、基因组约 0.5 Mb，是已知最小的细胞；病毒虽能复制与演化，但无核糖体与代谢酶系，不属于细胞生命形式。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '支原体以极精简的基因组（生殖支原体约 580 kb、不足五百个基因）维持质膜、环状 DNA 与核糖体的最低配置，是公认的最小细胞；病毒缺少核糖体、代谢酶系与能量转换装置，必须在寄主细胞内借其机器复制，属非细胞生命形式。题干前后两个判断分别对应「最小细胞」与「病毒非细胞」两个考点，均与教材口径一致，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-3',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'single',
    question: '以波长约 550 nm 的可见光照明、数值孔径 1.4 的油镜估算，光学显微镜的分辨极限约为：',
    options: ['2 nm', '20 nm', '200 nm', '2 μm'],
    answer: 2,
    explanation:
      '分辨极限按 0.61λ 除以数值孔径计算，代入 λ 约 550 nm、数值孔径 1.4，得约 240 nm，教材口径统称约 200 nm（0.2 μm）。这一尺度决定了光镜可以观察线粒体（长约 1–2 μm）与染色体，却无法分辨核糖体（约 25 nm）、膜双层（约 7.5 nm）与微丝（约 7 nm），后者须借助电子显微镜或超分辨荧光技术，故选 C。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-4',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'single',
    question: '下列诺贝尔奖项与其成就的对应关系中，正确的是：',
    options: [
      '2014 年化学奖——发展超分辨荧光显微技术（STED 与单分子定位显微）',
      '2003 年化学奖——冷冻电镜单颗粒分析与分辨率革命',
      '2017 年化学奖——绿色荧光蛋白的发现与应用',
      '2013 年化学奖——囊泡运输的分子调控机制',
    ],
    answer: 0,
    explanation:
      '超分辨荧光显微（STED、PALM/STORM）由 Hell、Betzig 与 Moerner 获 2014 年诺贝尔化学奖，A 正确。其余选项均「张冠李戴」：2003 年化学奖授予水通道与离子通道的结构研究（Agre 与 MacKinnon）；2017 年化学奖授予冷冻电镜（Dubochet、Frank 与 Henderson）；绿色荧光蛋白是 2008 年化学奖；囊泡运输调控是 2013 年生理学或医学奖（Schekman、Rothman 与 Südhof）。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-5',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch1',
    type: 'multiple',
    question: '关于 HeLa 细胞系，下列叙述正确的有：',
    options: [
      '1951 年建系，源自一位宫颈癌患者的肿瘤组织',
      '是第一株可在体外无限增殖的人源连续细胞系',
      '其基因组中整合的 HPV-18 序列为 HPV 致癌机理研究提供了线索',
      '当年取样前已获得患者本人的知情同意',
      '曾污染数百株其他细胞系，促使 STR 鉴定成为细胞库标准',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'HeLa 由 Gey 实验室于 1951 年从 Henrietta Lacks 的宫颈癌组织建系，是首株人源连续细胞系，脊髓灰质炎疫苗生产、端粒酶活性鉴定与人类基因组计划都曾使用它，其基因组中的 HPV-18 整合也是病毒致癌研究的素材。当年组织取样未经患者知情同意，家属多年后才知情，该事件推动了样本伦理政策的改革；HeLa 的强势生长曾污染大量其他细胞系，STR 身份鉴定因此成为行业规范。D 错误，其余四项均正确。',
    difficulty: 3,
  },
  // ================= 第 2 章 细胞膜与跨膜运输（q-cell-biology-6 ~ 10） =================
  {
    id: 'q-cell-biology-6',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'single',
    question: '冷冻断裂技术沿脂双层两叶之间的疏水平面把膜劈开，断面上（P 面）密布的直径约 8–10 nm 的膜内颗粒主要是：',
    options: ['贴附于膜外表面的外周蛋白', '镶嵌于脂双层中的跨膜蛋白', '糖脂的极性头部', '胆固醇与鞘磷脂形成的脂筏'],
    answer: 1,
    explanation:
      '冷冻断裂沿脂双层中央的疏水平面走行，把膜分为胞质半膜面（P 面）与胞外半膜面（E 面）；P 面上的膜内颗粒即嵌于双层之中的跨膜蛋白，其数量随膜的功能活跃程度而异，活跃膜可达每平方微米数千个。颗粒嵌于脂海而非平铺膜面，正是 Singer 与 Nicolson 流动镶嵌模型最直接的结构证据。外周蛋白位于胞质面但不嵌入双层，糖脂头部与脂筏也不会以颗粒形式出现在断裂面上，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-7',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'truefalse',
    question: 'Na⁺-K⁺ 泵每水解一分子 ATP 泵出 3 个 Na⁺、泵入 2 个 K⁺，因每一循环净外移一个正电荷而具有生电性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'Na⁺-K⁺-ATPase 属 P 型 ATP 酶，经 E1 与 E2 两态的磷酸化-去磷酸化循环，每水解一分子 ATP 泵出三个钠离子、泵入两个钾离子；净外移一个正电荷使其成为生电泵，直接贡献一部分静息电位。动物细胞约三分之一的 ATP 用于此泵、电活跃神经元静息期可达三分之二，其维持的钠钾梯度同时是次级主动运输与可兴奋性的能量基础。题干表述与教材口径一致，判正确。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-8',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'single',
    question: 'KcsA 钾通道对 K⁺ 的高度选择性（超过对 Na⁺ 一万倍）主要来自：',
    options: [
      '孔道直径恰好小于 Na⁺ 而大于 K⁺ 的机械筛分',
      '选择性滤器主链羰基氧与 K⁺ 脱水能量损失的精确补偿',
      '滤器内带负电残基对 K⁺ 的静电吸附',
      'K⁺ 与滤器氨基酸侧链形成共价结合',
    ],
    answer: 1,
    explanation:
      'MacKinnon 1998 年解析的 KcsA 结构显示，选择性滤器以主链羰基氧排成数个环形位点，恰好复现 K⁺ 在水中的水化环境：K⁺ 脱去水壳的能量代价被氧环完全补偿，故通行无阻；Na⁺ 半径更小、无法同时贴合氧环，脱水代价换不来补偿而被拒。通道以每秒 10⁷–10⁸ 个离子的速率导通且不发生消耗性结合，机械筛分、静电吸附与共价结合均与事实不符，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-9',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'single',
    question: '受体介导的内吞中，LDL 与其受体解离并就此「分道扬镳」的场所是：',
    options: ['网格蛋白包被小窝', '早期内体', '反面高尔基体管网', '溶酶体'],
    answer: 1,
    explanation:
      'LDL 受体介导的内吞经网格蛋白小泡进入早期内体，其腔内约 pH 6 的弱酸环境使 LDL 与受体构象改变而解离：LDL 被递往溶酶体水解释出胆固醇，受体则经循环内体返回质膜继续执勤，每趟约十余分钟、寿命内可往返数百次。家族性高胆固醇血症中的「内化缺陷型」受体能结合 LDL 却不能聚拢于包被小窝，从上游破坏这条循环；但解离本身发生在早期内体，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-10',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch2',
    type: 'multiple',
    question: '下列运输系统中，直接利用 ATP 水解供能（初级主动运输）的有：',
    options: [
      'Na⁺-K⁺ 泵',
      'SERCA 肌浆网钙泵',
      'SGLT1 钠-葡萄糖协同转运蛋白',
      'P-糖蛋白（MDR1）',
      'GLUT4 葡萄糖载体',
    ],
    answer: [0, 1, 3],
    explanation:
      'Na⁺-K⁺ 泵与 SERCA 同为 P 型 ATP 酶，直接以 ATP 水解驱动离子转运；P-糖蛋白属 ABC 家族，靠两个 ATP 结合盒的水解循环外排药物，三者均为初级主动运输。SGLT1 借 Na⁺ 电化学梯度同向转运葡萄糖，属次级主动运输，自身不消耗 ATP；GLUT4 是易化扩散的载体，只顺浓度梯度转运葡萄糖、不耗能。区分「直接水解 ATP」与「借梯度储能」正是本题的考点。',
    difficulty: 3,
  },
  // ================= 第 3 章 内膜系统（q-cell-biology-11 ~ 15） =================
  {
    id: 'q-cell-biology-11',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'single',
    question: '人细胞溶酶体腔内维持的 pH 约为：',
    options: ['7.2 左右，与胞质一致', '6.0 左右', '4.5–5.0', '8.0 左右'],
    answer: 2,
    explanation:
      '溶酶体腔内 pH 约 4.5–5.0，由膜上 V 型氢离子 ATP 酶逆梯度泵入质子维持，与胞质约 7.2 的 pH 相差约两个单位，氢离子浓度相差百倍；六十余种酸性水解酶的最适 pH 正在 5 附近。这一酸性环境既保证酶高效工作，也使偶然漏入胞质的酶因 pH 不适而活性大减，构成双重安全设计，故选 C。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-12',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'single',
    question: '关于分泌蛋白进入内质网腔的信号肽，下列叙述错误的是：',
    options: [
      '位于新生肽的 N 端，长约 15–30 个氨基酸',
      '含带正电的 N 端、疏水核心与信号肽酶切割位点',
      '被 SRP 识别后翻译暂停，直至核糖体对接内质网膜',
      '信号肽在蛋白成熟后仍完整保留在分泌蛋白的 N 端',
    ],
    answer: 3,
    explanation:
      '信号肽由位于内质网膜腔面的信号肽酶切除，成熟分泌蛋白的 N 端不含信号肽，故 D 错误。前三项均为信号肽的标准特征：N 端带正电氨基酸、中段疏水核心、羧基端为切割位点；经 SRP-SRP 受体介导的暂停与靶向，新生肽再由 Sec61 易位子共翻译穿膜。Blobel 因提出并验证信号肽假说获 1999 年诺贝尔生理学或医学奖。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-13',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'single',
    question: '把误运至高尔基体的内质网驻留蛋白（带 KDEL 序列）逆向回收回内质网的囊泡外被是：',
    options: ['COP II', 'COP I', '网格蛋白', '发动蛋白'],
    answer: 1,
    explanation:
      'COP I 外被由 Arf1-GTP 启动，专司高尔基体到内质网的逆向运输：KDEL 受体在偏酸的高尔基体腔识别带 KDEL 尾的可溶性驻留蛋白并将其捕捉，回到近中性的内质网腔后释放，完成 pH 梯度驱动的回收循环；膜驻留蛋白则以双赖氨酸信号被同样回收。COP II 负责内质网到高尔基体的正向运输，网格蛋白承担 TGN 与质膜处的分选发货，发动蛋白是内吞小泡缢断的 GTP 酶，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-14',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'truefalse',
    question:
      '大自噬形成双层膜的自噬体，LC3 由 LC3-I 脂化为 LC3-II 是其标志事件；营养充足时 mTORC1 活性升高，从而启动自噬。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '前半句正确：隔离膜经 Atg12-Atg5-Atg16L1 与 LC3-磷脂酰乙醇胺两个类泛素系统延展闭合，LC3-II 是自噬体的通用标志，可用 GFP-LC3 追踪。后半句方向相反：营养充足时 mTORC1 抑制 ULK1 复合体、自噬被压制；饥饿使 mTORC1 活性下降、AMPK 活性上升，自噬才被启动以回收氨基酸与脂肪酸。大隅良典因克隆酵母自噬基因获 2016 年诺贝尔奖。两句一真一假，整体判错误。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-15',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch3',
    type: 'multiple',
    question: '关于溶酶体贮积病，下列叙述正确的有：',
    options: [
      '戈谢病由葡糖脑苷脂酶缺陷引起，酶替代疗法已使其成为可治范本',
      '泰-萨克斯病由 β-己糖胺酶 A 缺陷引起，GM2 神经节苷脂累积于神经细胞',
      '包涵体细胞病（I-cell 病）因溶酶体酶无法获得 M6P 标志而被大量分泌出胞',
      '庞贝病仅累及神经系统，心肌不受影响',
      '尼曼-皮克 C 型由 NPC1 或 NPC2 缺陷引起，胆固醇转运受阻',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      '戈谢病为最常见贮积病，葡糖脑苷脂沉积于巨噬细胞形成戈谢细胞，携带 M6P 修饰的重组酶经受体介导内吞进入巨噬细胞，是酶替代疗法的成功范例；泰-萨克斯病与 I-cell 病的叙述亦符合教材：前者缺陷酶为 β-己糖胺酶 A、视网膜可见樱桃红斑，后者因磷酸转移酶缺陷使溶酶体酶误被分泌。庞贝病为溶酶体 α-葡糖苷酶缺陷、糖原累积，以心肌病与肌无力为突出表现，并非仅累及神经，D 错误；尼曼-皮克 C 型确由 NPC1/NPC2 胆固醇转运缺陷所致。故 A、B、C、E 正确。',
    difficulty: 3,
  },
]
