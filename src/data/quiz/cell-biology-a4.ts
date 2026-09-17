// ============================================================
// BioScholar 细胞生物学测验题库 - 批次 A4（第 10–12 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-cell-biology-46 ~ q-cell-biology-60）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：翟中和/丁明孝《细胞生物学》（第5版）、
// Alberts《Molecular Biology of the Cell》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const cellBiologyQuizA4: QuizQuestion[] = [
  // ================= 第 10 章 细胞衰老与死亡（q-cell-biology-46 ~ 50） =================
  {
    id: 'q-cell-biology-46',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'single',
    question: '关于细胞衰老的 Hayflick 界限与端粒耗损，下列叙述正确的是：',
    options: [
      '正常人二倍体成纤维细胞可在体外无限传代，衰老仅由氧化损伤引起',
      '正常二倍体细胞体外约经 40–60 次群体倍增后停滞，端粒每轮复制缩短约 50–200 bp',
      '端粒酶在几乎全部正常体细胞中高表达以维持端粒长度',
      '衰老细胞停滞于 G2 期，S 期 DNA 合成显著增强',
    ],
    answer: 1,
    explanation:
      'Hayflick 与 Moorhead 1961 年的人胚肺成纤维细胞实验证明正常二倍体细胞增殖潜能有限，约 40–60 次群体倍增后不可逆停滞于 G1 期；其分子计数器是端粒——后随链合成的末端复制难题使每轮缩短约 50–200 bp，临界缩短激活 ATM/ATR-p53-p21 锁闭周期。A 违背界限本身；C 错在端粒酶仅活跃于胚系、干细胞与约 85%–90% 的肿瘤；D 把 G1 期阻滞误作 G2 且 DNA 合成实际近乎归零，故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-47',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'single',
    question: '把凋亡外源性（死亡受体）途径与内源性（线粒体）途径接通并放大的关键事件是：',
    options: [
      'caspase-8 切割 Bid 为 tBid，tBid 转位线粒体促 Bax/Bak 成孔',
      '细胞色素 c 直接结合并激活 DISC 中的 procaspase-8',
      'Bcl-2 被执行 caspase 水解释放 BH3-only 片段',
      'Apaf-1 经其死亡结构域招募接头蛋白 FADD',
    ],
    answer: 0,
    explanation:
      '外源途径中 DISC 内活化的 caspase-8 除直接激活执行 caspase 外，还把 BH3-only 蛋白 Bid 切成 tBid；tBid 转位至线粒体外膜放大 Bax/Bak 寡聚成孔与细胞色素 c 释放，使外源信号接入内源机器——肝细胞等 II 型细胞尤其依赖这条接驳线。B 颠倒了方向（细胞色素 c 在胞质组装凋亡体激活 caspase-9）；C 的 Bcl-2 是被 BH3 模拟物占位而非水解；D 的 FADD 招募对象是 caspase-8 而非 Apaf-1，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-48',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'single',
    question: '下列关于铁死亡的叙述，正确的是：',
    options: [
      '铁死亡依赖执行 caspase 级联，可被 zVAD-fmk 完全阻断',
      'erastin 抑制 system Xc−、RSL3 直接灭活 GPX4，两者均可触发铁死亡',
      '铁死亡细胞整体肿胀崩解，线粒体增生增大',
      '铁螯合剂去铁胺与脂溶性抗氧化剂可诱导并加重铁死亡',
    ],
    answer: 1,
    explanation:
      '铁死亡是 2012 年命名的铁依赖性脂质过氧化程序：erastin 阻断胱氨酸-谷氨酸反向转运体 system Xc− 使谷胱甘肽合成受限，RSL3 直接灭活磷脂过氧化物酶 GPX4，两条路线都使多不饱和磷脂过氧化物累积、膜完整性渐进丧失。A 混淆了凋亡的执行机器（铁死亡不依赖 caspase）；C 的形态恰相反——细胞器大体保全而线粒体缩小变密、嵴减少；D 中两者是铁死亡的抑制剂而非诱导剂，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-49',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'truefalse',
    question:
      '衰老相关分泌表型（SASP）经 NF-κB 与 C/EBPβ 等转录驱动，分泌 IL-6、IL-8 与多种基质金属蛋白酶等上百种因子；短期有利于创面修复与免疫招募，长期滞留则推动慢性炎症、基质降解与干细胞巢破坏，参与动脉粥样硬化、骨关节炎等衰老相关疾病。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '这段叙述完整概括了 SASP 的双刃属性：其分泌谱由 NF-κB、C/EBPβ 与持续激活的 mTOR 通路驱动，短期在伤口与发育塑形中充当修复信号，长期堆积则构成「慢性无菌炎症」的组织来源，是衰老九大标志中细胞衰老一项的核心效应器；senolytics 清除衰老细胞的干预策略正建立在这一利弊翻转之上，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-50',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch10',
    type: 'multiple',
    question: '关于三种程序性坏死方式（坏死性凋亡、焦亡、铁死亡），下列说法正确的有：',
    options: [
      '坏死性凋亡在 caspase-8 受抑时经 RIPK1-RIPK3 交叉磷酸化并磷酸化 MLKL，MLKL 寡聚在质膜成孔',
      '焦亡中 caspase-1 切割 gasdermin D 成孔，同时把 IL-1β 与 IL-18 前体切割成熟并释放',
      '铁死亡以铁依赖的磷脂过氧化为核心，system Xc− 与 GPX4 是两道主要防线',
      '三种方式均依赖 ATP 与执行 caspase，属于 caspase 家族的同源通路',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 分别复述三种死亡的执行分子逻辑：MLKL 磷酸化成孔（坏死性凋亡）、GSDMD N 端成孔伴随炎性细胞因子释放（焦亡）、脂质过氧化压倒抗氧化防线（铁死亡）。D 是系统性错误：三者的共同定义特征恰是不依赖 caspase 的程序性坏死，铁死亡更不依赖 ATP；它们以膜破裂与炎症释放为共同战略，但分子机器彼此独立，故选前三项。',
    difficulty: 3,
  },
  // ================= 第 11 章 细胞的社会性（q-cell-biology-51 ~ 55） =================
  {
    id: 'q-cell-biology-51',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'single',
    question: '构成上皮紧密连接封闭索的主要分子骨架来自：',
    options: [
      'connexin 家族',
      'claudin 家族',
      '整联蛋白家族',
      '选择素家族',
    ],
    answer: 1,
    explanation:
      '紧密连接的封闭索由 claudin 家族（人类 24 个基因）的胞外环经同型或异型结合焊出，occludin 与 ZO 支架蛋白辅助将其扣到肌动蛋白皮层，三细胞交汇处另由 tricellulin 封角；血脑屏障的高阻闭锁即以 claudin-5 等为物质基础。A 的 connexin 组装的是间隙连接通道；C 的整联蛋白介导细胞-基质黏附与双向信号；D 的选择素介导血流中白细胞滚动，均与封闭索无关，故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-52',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'single',
    question: '坏血病患者胶原脆弱、伤口难愈的直接分子机制是：',
    options: [
      '赖氨酰氧化酶缺乏铜辅基导致胶原交联障碍',
      '脯氨酰 4-羟化酶缺乏维生素 C 提供的还原当量，三螺旋不稳定',
      '前肽切除酶错误切割 Gly-X-Y 重复序列',
      '基质金属蛋白酶过度降解成熟的胶原纤丝',
    ],
    answer: 1,
    explanation:
      '脯氨酰 4-羟化酶以二价铁为催化金属、以维生素 C 为提供还原当量的辅因子，羟化后的羟脯氨酸借水化桥稳定三螺旋；维生素 C 缺乏使羟化不足、螺旋松弛、胶原脆弱，即坏血病的分子本质（牙龈出血、伤口裂开均源于此）。A 的铜缺乏影响的是赖氨酰氧化酶催化的交联（相应表现见于 Menkes 病等）；C 并无此酶学事件；D 属 MMP 失衡的病理，与维生素 C 无关，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-53',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'single',
    question: '炎症反应中白细胞沿血管内皮「滚动」的分子基础是：',
    options: [
      '选择素与其唾液酸化 Lewis X 糖配体的相互作用',
      'LFA-1 与 ICAM-1 的高亲和力牢固结合',
      '整联蛋白识别基质中的 RGD 序列',
      '钙黏蛋白介导的同型黏合',
    ],
    answer: 0,
    explanation:
      '炎症四幕剧的第一幕由选择素担纲：L、E、P 三型选择素以凝集素域识别白细胞糖链上的唾液酸化 Lewis X 抗原，在血流切变下反复结合-脱落形成减速滚动；随后内皮展示的趋化因子激活整联蛋白（第二幕），LFA-1 与 ICAM-1 的强黏着（第三幕）和跨内皮迁移（第四幕）才依次登场。B 是第三幕的强黏着而非滚动；C 是细胞-基质识别；D 是同型细胞间黏合，均不合题意，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-54',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'truefalse',
    question:
      '间隙连接由 connexin 六聚体半通道对接拼成直径约 1.5–2 nm 的水性孔道，允许约 1 kDa 以下的小分子与离子在相邻细胞间直接交换；GJB2（connexin 26）突变是非综合征性遗传性耳聋最常见的原因之一。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '间隙连接的孔径筛分特征决定了其通行资格：cAMP、IP3 与离子等约 1 kDa 以下分子可直通邻胞，蛋白质与核酸被排除；孔道门控受膜电位、胞质 Ca²⁺ 与 pH 调制，构成「旁观者保护/死亡」的机制基础。GJB2 突变致内耳钾离子循环的电耦联中断，确为非综合征性耳聋的首位遗传病因，GJB1 突变另致腓骨肌萎缩症，叙述各项均符合教材口径，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-55',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch11',
    type: 'multiple',
    question: '关于上皮-间质转化（EMT）与肿瘤转移级联，下列说法正确的有：',
    options: [
      'EMT 由 Snail、Twist、ZEB1/2 等转录因子下调 E-钙黏蛋白并上调波形蛋白等驱动',
      '完全 EMT 的细胞最容易定植，转移灶形成不需要恢复上皮表型',
      '乳腺癌骨转移中癌细胞分泌 PTHrP 激活 RANKL 刺激破骨溶骨，骨基质释放的 TGF-β 反哺肿瘤',
      '转移抑制基因（如 NM23、KAI1）可抑制转移形成而不影响原发瘤的生长',
    ],
    answer: [0, 2, 3],
    explanation:
      'A 概括 EMT 的转录开关与标志物转换；C 是骨转移「破骨-肿瘤互喂」恶性循环的标准表述；D 正是转移抑制基因的定义性属性——转移与致瘤可分离，多数成员作用于定植环节。B 与事实相反：完全 EMT 的间质细胞反而难以定植，转移灶克隆形成常需经 MET 恢复上皮表型，多数侵袭细胞处于保留部分上皮标志的杂合 E/M 状态；EMT-MET 的往返节律才是转移的完整语法，故选 A、C、D。',
    difficulty: 3,
  },
  // ================= 第 12 章 细胞生物学前沿与技术（q-cell-biology-56 ~ 60） =================
  {
    id: 'q-cell-biology-56',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'single',
    question: '2014 年诺贝尔化学奖授予超分辨荧光显微技术。下列方法与原理的配对正确的是：',
    options: [
      'STED：以甜甜圈形损耗激光使焦斑外围荧光受激发射损耗，有效荧光点缩至约 20–70 nm',
      'PALM：以结构光条纹混频使分辨率翻倍至约 100 nm',
      'STORM：以受激发射损耗逐点扫描压缩荧光光斑',
      'SIM：以稀疏激活单分子并对其光斑质心定位重建图像',
    ],
    answer: 0,
    explanation:
      '四种方法的原理须严格区分：STED（Hell）用中空损耗光掐灭外围荧光属受激发射路线；PALM 与 STORM（Betzig、庄小威等）同属单分子定位路线，靠稀疏发光加质心拟合达约 10–25 nm；SIM（Gustafsson）靠条纹照明混频搬移高频信息、分辨率约翻倍且光毒性最低。B、C、D 三项分别把定位法、损耗法与结构光法的原理张冠李戴，故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-57',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'single',
    question: '关于光遗传学核心工具的分子属性，正确的是：',
    options: [
      'ChR2 受黄光驱动向胞内泵入氯离子使神经元超极化',
      'ChR2 吸收蓝光开放阳离子通道致毫秒级去极化，卤视紫红质受黄光驱动泵氯致超极化',
      'DREADD 是一类光激活的阳离子通道蛋白',
      'CRY2-CIBN 属于微生物视蛋白家族的光控离子泵',
    ],
    answer: 1,
    explanation:
      '光遗传的双向工具箱分工明确：来自莱茵衣藻的 ChR2 吸收约 470 nm 蓝光开放非选择性阳离子通道、毫秒级去极化；卤视紫红质（NpHR）受黄光驱动泵入氯离子实现超极化沉默，两者配合实现「开灯激活、换灯沉默」。A 把两者波长与离子流向互换；C 的 DREADD 是化学遗传学中经改造的 G 蛋白偶联受体而非光控通道；D 的 CRY2-CIBN 是蓝光诱导二聚的植物蛋白模块，用于装配光控蛋白互作工具，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-58',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'single',
    question: '关于最小基因组 JCVI-syn3.0，下列叙述正确的是：',
    options: [
      '含 901 个基因，全部基因功能均已阐明',
      '含 473 个基因、531 kb，其中约 149 个必需基因功能未知',
      '经 bottom-up 路线在脂质体中自装配而来',
      '以 CRISPR 逐基因敲除编辑天然支原体获得',
    ],
    answer: 1,
    explanation:
      'Venter 团队 2016 年以全基因组转座子突变筛选判定必需基因，重新设计合成仅 473 个基因、531 kb 的基因组并移植入去 DNA 的支原体，获得已知最小的自由生活细胞；其中 149 个功能未知的必需基因是最有教益的清单，「必需而未知」本身即对生物学的谦逊度量。A 的基因数与「功能已知」皆错；C 混淆了 bottom-up 人工细胞路线（该基因组属 top-down 重设计）；D 误将合成-移植描述为基因编辑，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-59',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'truefalse',
    question:
      'DREADD（如 hM3Dq 与 hM4Di）是对毒蕈碱型受体结合口袋改造的设计受体，对内源乙酰胆碱失敏、仅被人工配体 CNO 激活；其时间分辨率为毫秒级且随关灯即刻可逆，在这两点上优于光遗传学。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '前半句对 DREADD 的定义无误：突变受体只响应设计药物，从而以一次注射开关特定细胞群的 Gq 或 Gi 通路。但结论反了：化学遗传的时间分辨率以分钟计、可逆性依赖药物代谢清除，均远逊于光遗传的毫秒级开关与关灯即止；CNO 本身还受脑穿透有限、需经代谢转化为氯氮平起效的困扰，新一代配体正在取代之。两种技术的正确关系是互补选型而非全面超越，故判错误。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-60',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch12',
    type: 'multiple',
    question: '关于 CAR-T 细胞治疗，下列说法正确的有：',
    options: [
      'CAR 由单链抗体识别域、铰链与跨膜区、CD3ζ 信号域及共刺激域模块化拼装',
      '细胞因子释放综合征（CRS）可被 IL-6 受体拮抗剂托珠单抗有效救治',
      '靶向 CD19 的 CAR-T 用于复发难治 B 细胞恶性肿瘤，完全缓解率可达八成以上',
      '实体瘤应用面临浸润受阻、抗原异质性与 on-target off-tumor 毒性等壁垒',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '四项均为 CAR-T 的教材要点：模块化结构使其绕过 MHC 提呈实现「识别即激活」（A）；CRS 的本质是过度激活引发的 IL-6 风暴，托珠单抗是特效解药、神经毒性则另以皮质激素处理（B）；2017 年 Kymriah 与 Yescarta 获批确立了 CD19 CAR-T 在复发难治 B 细胞肿瘤中的深度缓解（C）；实体瘤的四重壁垒正被双抗原逻辑门、装甲型 CAR 与体内瞬时递送等工程化策略逐项回应（D），故四项全选。',
    difficulty: 3,
  },
]
