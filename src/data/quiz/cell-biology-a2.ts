// ============================================================
// BioScholar 细胞生物学测验题库 - 批次 A2（第 4–6 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-cell-biology-16 ~ q-cell-biology-30）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：翟中和/丁明孝《细胞生物学》（第5版）、
// Alberts《Molecular Biology of the Cell》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const cellBiologyQuizA2: QuizQuestion[] = [
  // ================= 第 4 章 线粒体与能量转换（q-cell-biology-16 ~ 20） =================
  {
    id: 'q-cell-biology-16',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'single',
    question: '关于人类线粒体基因组的构成，下列叙述正确的是：',
    options: [
      '约 16.6 kb 的双链环状分子，共 37 个基因，编码 13 条呼吸链多肽、22 种 tRNA 与 2 种 rRNA',
      '约 16.6 kb 的线状分子，37 个基因全部编码呼吸链复合体亚基',
      '约 166 kb 的环状分子，含大量内含子，编码 37 条多肽链',
      '约 1.6 kb 的环状分子，仅编码 22 种 tRNA 与 13 种 rRNA',
    ],
    answer: 0,
    explanation:
      '人类 mtDNA 为 16569 bp 的双链闭合环，结构极其紧凑、几乎无内含子，仅 37 个基因：13 条呼吸链多肽（复合体 I 的 7 个亚基、细胞色素 b、复合体 IV 的 3 个亚基与 ATP 合酶的 2 个亚基）、22 种 tRNA 与 12S、16S 两种 rRNA。其余选项或错在构型（环状而非线状）、或错在基因内容（tRNA 与 rRNA 数量颠倒、并非全部编码多肽），故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-17',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'single',
    question: '一对电子经呼吸链从 NADH 传递给氧，四个复合体泵出质子的总数是：',
    options: ['6 个', '8 个', '10 个', '12 个'],
    answer: 2,
    explanation:
      '复合体 I 每对电子泵出 4 个质子，复合体 III 经 Q 循环泵出 4 个，复合体 IV 泵出 2 个，合计 10 个；复合体 II（琥珀酸脱氢酶）不泵质子。因此以 FADH2 为供体、绕过复合体 II 进入泛醌池的电子只泵出 6 个质子，这正是 FADH2 的 P/O 比（约 1.5）低于 NADH（约 2.5）的能量学根源，故选 C。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-18',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'single',
    question: '解偶联剂 2,4-二硝基苯酚（DNP）使氧化磷酸化「解偶联」的机制是：',
    options: [
      '特异阻断 ATP 合酶的 Fo 质子通道',
      '作为脂溶性弱酸携质子穿越内膜，消除质子梯度而电子传递照常',
      '抑制复合体 III 的 Q 循环',
      '阻断 ATP-ADP 转位酶的核苷酸交换',
    ],
    answer: 1,
    explanation:
      'DNP 是经典的质子载体：以脂溶性弱酸形式在膜间隙结合质子、穿越内膜后在基质侧释放，把呼吸链辛苦泵出的质子「抄近路」送回，质子动力势被消散，ATP 合酶失去驱动力而停止合成，但电子传递与耗氧反而加速，能量全部转化为热——这与棕色脂肪 UCP1 的生理性解偶联原理相同而后果迥异。阻断 Fo 的是寡霉素，抑制 Q 循环的是抗霉素 A，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-19',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'truefalse',
    question:
      '哺乳动物 ATP 合酶的 c 亚基环由 8 个亚基组成，旋转一周回流 8 个质子并合成 3 分子 ATP；再计入 ATP-ADP 交换与磷酸共转运的代价，每净生成 1 分子 ATP 约需 3.5–4 个质子沿梯度回流。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '哺乳动物 c 环为 8 聚体，一周恰好转位 8 个质子、驱动三个催化位点各产 1 分子 ATP，直接成本约 2.7 个质子每 ATP；但 ATP 以 ATP4- 换出 ADP3- 的电生性交换以及磷酸与质子的同向共转运还要额外消耗质子动力势，合计约 3.5–4 个质子每 ATP。据此换算的 P/O 比为 NADH 约 2.5、FADH2 约 1.5，均与教材现代口径一致，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-20',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch4',
    type: 'multiple',
    question: '关于线粒体病，下列叙述正确的有：',
    options: [
      'MELAS 最常见由 tRNALeu 基因 m.3243 位点突变引起，卒中样病灶不按血管区分布',
      'LHON 多见于 15–35 岁男性，呈不完全外显，烟酒暴露可诱发',
      '异质性突变负荷须超过组织特异的阈值（常 60–95%）方表现临床表型',
      'Friedreich 共济失调由 mtDNA 大片段缺失引起，呈母系遗传',
      'Kearns-Sayre 综合征多为散发性大片段缺失，可致心脏传导阻滞',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'A、B、C、E 分别对应 MELAS 的典型基因型与「能量危机性卒中」、LHON 的性别与外显特征、阈值效应以及 KSS 的散发缺失表型，均与教材一致。D 项错误：Friedreich 共济失调是核基因 FXN 第一内含子 GAA 重复扩增、致线粒体铁硫簇装配蛋白 frataxin 缺乏的常染色体隐性遗传病，并非 mtDNA 缺失病——这正提醒「线粒体病」多数其实源于核基因。',
    difficulty: 3,
  },
  // ================= 第 5 章 细胞骨架（q-cell-biology-21 ~ 25） =================
  {
    id: 'q-cell-biology-21',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'single',
    question: '秋水仙碱用于痛风急性发作治疗的细胞学机制是：',
    options: [
      '抑制黄嘌呤氧化酶，减少尿酸生成',
      '与游离微管蛋白异二聚体高亲和结合、抑制其聚合，阻止中性粒细胞迁入关节并吞噬尿酸结晶',
      '促进肾小管排泄尿酸',
      '稳定微管并促进吞噬体-溶酶体融合',
    ],
    answer: 1,
    explanation:
      '秋水仙碱并不改变尿酸的生成与排泄，而是高亲和结合游离的 αβ 异二聚体使其无法入列聚合，中性粒细胞的微管骨架随之瓦解、失去定向迁移与吞噬尿酸结晶的能力，炎症发作的恶性循环被打断。抑制黄嘌呤氧化酶的是别嘌醇与非布司他，属降尿酸药物而非急性期抗炎药，故选 B。同一结合特性使秋水仙碱成为体外阻断纺锤体的经典工具。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-22',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'single',
    question: '微管「动态不稳定」的直接原因是：',
    options: [
      '负端在中心体处持续解聚',
      '正端 GTP 帽的得失：帽存则生长，帽尽则发生灾变式解聚',
      '微管切断蛋白随机截断管体',
      '秋水仙碱在胞内自发产生',
    ],
    answer: 1,
    explanation:
      '聚合掺入的亚基携带 GTP，聚合后 β 位 GTP 缓慢水解；若正端保有 GTP 亚基帽则端面稳定、持续生长，聚合一旦落后于水解、帽被蚀尽，GDP 亚基端亲和力骤降即触发灾变式解聚，途中重新获帽又可救援。这种生长-缩短的随机切换由 Mitchison 与 Kirschner 于 1984 年提出，赋予纺锤体「搜索与捕获」动粒的能力，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-23',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'single',
    question: '骨骼肌肌节收缩时，各结构带的变化规律是：',
    options: [
      'A 带缩短，I 带与 H 区不变',
      'I 带与 H 区缩短，A 带长度不变',
      'A 带与 H 区都缩短，I 带不变',
      'A 带、I 带、H 区全都缩短',
    ],
    answer: 1,
    explanation:
      '按滑移学说，收缩时粗丝与细丝自身长度均不变，横桥划动使两类丝相对滑入：只含细丝的 I 带与只含粗丝的 H 区随 Z 盘靠近而缩短，粗丝全长的 A 带恒定不变。这一规律由 1954 年 Huxley 与 Huxley 的电镜与 X 射线衍射研究确立，是判断「丝滑动而非丝缩短」的关键证据，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-24',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'truefalse',
    question:
      '中间丝由反平行四聚体组装而无极性，既不发生踏车、也没有沿其定向行走的马达蛋白；肌球蛋白 VI 则是已知少数向微丝负端移动的例外马达。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '中间丝的基本组装单位是两条卷曲螺旋二聚体组成的反平行交错四聚体，头尾对称使成品丝无极性，因而既无踏车现象、也无定向马达可循；货物运输依赖微管与微丝体系。马达方向性方面，绝大多数肌球蛋白向微丝正端行走，肌球蛋白 VI 的马达域构型特殊而向负端移动、专职内吞回收，题干两处表述均与教材口径一致，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-25',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch5',
    type: 'multiple',
    question: '关于纤毛与鞭毛，下列叙述正确的有：',
    options: [
      '运动纤毛轴丝为 9+2 结构，动力蛋白臂使相邻二联体滑动并被连接蛋白约束为弯曲',
      '鞭毛内运输（IFT）由 kinesin-2 与动力蛋白-2 分别驱动正向递送与逆向回收',
      'Kartagener 综合征患者约半数合并内脏反位，源于胚胎结节纤毛决定左右对称的失效',
      '初级纤毛是 9+2 的运动结构，负责推动细胞表面液体流动',
      'Bardet-Biedl 综合征与 IFT 及 BBS 蛋白缺陷相关，表现为肥胖、多指与视网膜色素变性',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'A、B、C、E 分别对应轴丝结构与滑动机制、IFT 双向马达、结节纤毛与左右不对称的决定、BBS 的基因与表型，均为教材要点。D 项错误：初级纤毛为 9+0 的非运动结构，充当感觉天线（如肾上皮的管流感受与 Hedgehog 信号转导），推动液体流动的是 9+2 运动纤毛，二者结构功能不可混淆。',
    difficulty: 3,
  },
  // ================= 第 6 章 细胞核与染色质（q-cell-biology-26 ~ 30） =================
  {
    id: 'q-cell-biology-26',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'single',
    question: '经核孔复合体可自由被动扩散的分子尺寸上限约为：',
    options: [
      '直径 5 nm 以下、相对分子质量约 40000 以下',
      '直径 40 nm 以下',
      '相对分子质量 1000 以下',
      '没有任何尺寸限制',
    ],
    answer: 0,
    explanation:
      '核孔中央通道对小分子开放自由扩散，限度约为直径 5 nm 或相对分子质量 40000，离子、代谢物与小蛋白借此往返核质；更大的分子（如核糖体亚基级别）必须携带 NLS 或 NES 信号，由 karyopherin 家族受体护送经主动运输过孔。40 nm 量级是主动运输可容纳货物直径的上限而非自由扩散限，故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-cell-biology-27',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'single',
    question: '维持核内 Ran-GTP 高梯度的空间基础是：',
    options: [
      'RanGEF（RCC1）结合染色体定位于核内，而 RanGAP 定位于胞质与 NPC 胞质丝',
      'RanGAP 在核内持续激活，RanGEF 被输出到胞质',
      '线粒体质子动力势驱动 Ran 的核膜易位',
      '输入蛋白水解 ATP 直接泵送 Ran 入核',
    ],
    answer: 0,
    explanation:
      'Ran 本身不定向移动，方向性由两种调节因子的空间隔离创造：RCC1 结合染色体、只在核内催化 GDP 与 GTP 交换生成 Ran-GTP；RanGAP 连同 RanBP1 位于胞质与核孔胞质丝，出核的 Ran-GTP 即被水解。于是核内高 Ran-GTP、胞质高 Ran-GDP，输入蛋白入核后被 Ran-GTP 逼卸货物、输出蛋白出核后被水解卸货，梯度由 GTP 水解持续供能维持，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-28',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'single',
    question: '关于核仁中 rRNA 的转录与加工，正确的组合是：',
    options: [
      'RNA 聚合酶 I 转录 45S 前 rRNA，经加工生成 18S、5.8S 与 28S rRNA',
      'RNA 聚合酶 II 转录 45S 前 rRNA，加工生成 18S、5S 与 28S rRNA',
      'RNA 聚合酶 III 转录 45S 前 rRNA，加工生成全部四种 rRNA',
      'RNA 聚合酶 I 转录 45S 前 rRNA，加工后仍含 5S rRNA',
    ],
    answer: 0,
    explanation:
      '核仁中 RNA 聚合酶 I 独揽约 13 kb 的 45S 前 rRNA 转录，经 snoRNP 引导的甲基化与假尿苷化及系列剪切，释放 18S、5.8S 与 28S 三种成熟 rRNA。5S rRNA 是唯一例外，由 RNA 聚合酶 III 在核质中转录后运入核仁参与大亚基组装；聚合酶 II 负责 mRNA 前体而非 rRNA，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-29',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'truefalse',
    question:
      '人类染色体端粒为 TTAGGG 重复序列，端粒酶以自身 RNA（TERC）为模板延伸 G 链；shelterin 中 POT1 结合单链 G 悬突抑制 ATR 信号，TRF2 则抑制 ATM 与染色体末端融合。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '端粒由 TTAGGG 六碱基重复加 3′ 端单链 G 悬突构成；端粒酶是 TERT 逆转录酶加 TERC RNA 模板的复合体（2009 年诺奖主题），在生殖系、干细胞与多数肿瘤中补回重复。shelterin 六蛋白分工明确：POT1 结合悬突阻断 ATR，TRF2 结合双链区抑制 ATM 与非同源末端连接，防止染色体互相「焊接」成双着丝粒桥，题干表述与教材一致，故判正确。',
    difficulty: 2,
  },
  {
    id: 'q-cell-biology-30',
    subjectId: 'cell-biology',
    chapterId: 'cell-biology-ch6',
    type: 'multiple',
    question: '关于无膜核体与核内组织，下列叙述正确的有：',
    options: [
      '卡哈尔体以 coilin 与 SMN 为标志蛋白，参与 snRNP 的修饰与预组装',
      'PML-RARα 融合使 PML 小体崩解致急性早幼粒细胞白血病，砷剂联合维甲酸可恢复其组装并诱导分化',
      '核仁由纤维中心、致密纤维组分与颗粒组分三个功能分区构成',
      '核基质的概念已被彻底证伪，Hi-C 与相分离研究已完全取代其问题域',
      '液-液相分离是核仁、核斑、旁斑等无膜细胞体形成的共同物理机制',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'A、B、C、E 分别对应卡哈尔体的标志与职能、PML 小体作为 APL 药物靶点、核仁三分区以及相分离作为无膜细胞器的统一组织原理，均为本章要点。D 项表述过度：核基质作为「固定管道」的旧图景确受制备假象质疑并被区室化-相分离图景改写，但它提出的染色质锚定与分区问题仍是研究前沿，不能说被「彻底证伪」或「完全取代」，故判错。',
    difficulty: 3,
  },
]
