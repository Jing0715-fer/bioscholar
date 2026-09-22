// ============================================================
// BioScholar 结构生物学测验题库 - 批次 A4（第 10–12 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-structural-biology-46 ~ q-structural-biology-60）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：本平台《结构生物学实验方法》第 10–12 章教材正文常考点，
// 参照 Rosenthal 与 Henderson 的分辨率评估框架、Scheres 的 RELION
// 方法学系列、Wüthrich 的 NMR 方法体系、Jumper 等 AlphaFold2
// 与 wwPDB 验证报告体系
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const structuralBiologyQuizA4: QuizQuestion[] = [
  // ================= 第十章 冷冻电镜：图像处理与三维重构（q-structural-biology-46 ~ 50） =================
  {
    id: 'q-structural-biology-46',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch10',
    type: 'single',
    question: '冷冻电镜分辨率判据「FSC 0.143」的物理含义是：',
    options: [
      '两半重构图的相关系数恰为 0.5 时对应的空间频率',
      '每一分辨率壳层的信噪比约为 1（信号与噪声打平）时对应的空间频率',
      '掩蔽伪相关被相位随机化完全消除时对应的空间频率',
      '模型与密度图的 map-model FSC 跌破 0.5 时对应的空间频率',
    ],
    answer: 1,
    explanation:
      'FSC 0.143 判据由 Rosenthal 与 Henderson 2003 年系统论证并普及：按两半独立重构的信噪比换算，FSC 降至 0.143 处每一壳层的信噪比约为 1，即信号恰好与噪声打平；早年通行的 0.5 阈值口径更保守，读旧文献的分辨率数字时须问清口径。A 把阈值说反；C 与 D 分别把掩蔽修正与模型-图指标混入了壳层相关的定义，二者都不是全局分辨率的判据。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-47',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch10',
    type: 'single',
    question: '关于贝叶斯抛光（Bayesian polishing，Zivanov 等 2019 年）在精修中的作用，下列叙述最准确的是：',
    options: [
      '在微图级对电影帧做全局加局部子块的轨迹对齐，用以替代 MotionCor2',
      '对每颗粒在自身框内的运动轨迹做后验估计，挽回束致运动残留造成的高频损失',
      '把数据随机分半、互不通信，仅在计算 FSC 时碰面以防过拟合',
      '逐颗精修 defocus 并拟合束倾、三叶与四阶等高阶像差',
    ],
    answer: 1,
    explanation:
      '贝叶斯抛光把运动校正从微图级下沉到颗粒级：每颗粒在自身框内的运动轨迹交给贝叶斯框架做后验估计，追回束致运动残留抹掉的高频信息，属于「近乎免费、宜先做」的低风险进阶选项。A 是 MotionCor2 的职能；C 描述金标准分半规程（Scheres 与 Chen 2012 年）；D 描述逐颗粒 CTF 与高阶像差校正（束倾、三叶、四阶，Zivanov 等 2018 年随 RELION-3 引入），同属进阶但职能不同。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-48',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch10',
    type: 'truefalse',
    question:
      'blocres 局部分辨率以约 10–15 Å 的滑动窗逐块计算窗口化 FSC；同一张密度图中刚性核心可达约 2.5 Å 而柔性区常仅 6–8 Å，因此全局 FSC 分辨率数字并不保证处处达标。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。FSC 是全局平均，只宣告图上最好的频率；blocres（Cardone 等 2013 年）把图切成约 10–15 Å 见方的小块逐块计算窗口化 FSC，同一张图内刚性核心可达约 2.5 Å、柔性尾区常仅 6–8 Å。局部分辨率着色图因此须随稿附上、柔性区如实标注，建模策略也应按分辨率分档选择——优于 3 Å 可从头搭侧链，6–8 Å 常只支持刚体拟合与二级结构登记。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-49',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch10',
    type: 'single',
    question: '关于冷冻电镜中的「假分辨率」及其对策，下列叙述正确的是：',
    options: [
      '紧掩蔽在两半图间引入伪相关、把高频 FSC 人为托起，标准修正为相位随机化',
      '分辨率随掩蔽松紧大幅跳动说明分子本身柔性大，应直接报告最紧掩蔽下的最好数字',
      '同一数据的自我相关 FSC 比金标准分半更接近真实分辨率，可作为正式口径',
      '深度学习锐化（如 deepEMhancer 一类）可以无风险地提升分辨率数字',
    ],
    answer: 0,
    explanation:
      '紧掩蔽的边缘与残余噪声会在两半图间引入相关、把高频 FSC 人为托起，且掩蔽越紧「分辨率」越漂亮——标准修正是相位随机化：在 FSC 已跌破阈值的频率以上打乱两半图的相位、重施掩蔽再算 FSC，差值即伪相关贡献，从原曲线中扣除。B 把症状当结论（跳动即掩蔽问题而非分子柔性）；C 方向相反——自我相关永远虚高，金标准分半才是前提；D 的锐化须以 Q-score、EMRinger 等独立指标复核，过度锐化会放大噪声冒充侧链。',
    difficulty: 3,
  },
  {
    id: 'q-structural-biology-50',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch10',
    type: 'multiple',
    question: '（多选题）关于冷冻电镜三维精修的进阶选项，下列叙述正确的有：',
    options: [
      '贝叶斯抛光与逐颗粒 CTF 精修近乎免费，宜先做',
      '攻坚 3 Å 以内时，束倾、三叶与四阶像差校正收益显著且须金标准护航',
      '局部聚焦精修适于刚性核加柔性附属的复合物，防整体平均拖累亚基分辨率',
      '多体精修把复合物拆成刚体各自精修，体间相对运动谱本身即动力学数据',
      '对称性应在精修一开始就施加，以尽早获得等效颗粒数翻倍的收益',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'E 错误：对称是假设不是恩赐——应先以 C1（不对称）精修、确认密度自发呈现 Cn、Dn 等对称后再施加，且施加后 FSC 与密度连通性的改善即是验证；错误的对称会把无关密度相干平均成伪结构，故对称操作永远最后做。A 至 D 均为标准表述：先便宜后昂贵的次序、高阶像差的收益条件、局部聚焦的适用场景，以及多体精修（Nakane 等 2018 年）的双重产出——各体高分辨附带体间运动谱。',
    difficulty: 2,
  },
  // ================= 第十一章 核磁共振波谱学（q-structural-biology-51 ~ 55） =================
  {
    id: 'q-structural-biology-51',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch11',
    type: 'single',
    question: '关于 ¹H-¹⁵N HSQC 谱作为蛋白质「二维身份证」的说法，下列叙述正确的是：',
    options: [
      '每个氨基酸残基（包括脯氨酸）各给出一枚主链酰胺峰',
      '除脯氨酸外每个残基各给一枚主链酰胺峰，百残基的蛋白约百峰',
      '每枚峰对应一条 β 折叠链，可直接读出二级结构含量',
      '仅适用于 15 kDa 以下的小蛋白，更大的体系完全无峰',
    ],
    answer: 1,
    explanation:
      'HSQC 把 ¹H 与直接相连的 ¹⁵N 关联成二维峰：脯氨酸无酰胺氢，除此之外每个残基一枚主链酰胺峰，另加 Asn 与 Gln 侧链的成对峰及 Trp 吲哚峰，百残基蛋白约百峰。峰数、散布与线宽三合一诊断（降解、折叠与聚集）使其成为样品质检与后续一切实验的枢纽。A 忽略脯氨酸例外；C 与 D 均无依据——HSQC 是指纹谱而非二级结构图谱，且作为样品筛选手段并不受 15 kDa 限制。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-52',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch11',
    type: 'single',
    question: '关于 NMR 的分子量极限与 TROSY 技术，下列叙述最准确的是：',
    options: [
      '常规上限约 30 kDa，根源是分子增大使 T2 缩短、谱线展宽；TROSY 加氘代可推至约 100 kDa',
      'TROSY 通过提高拉莫尔频率绕开弛豫问题，无需氘代即可解析约 500 kDa 的蛋白',
      'TROSY 的谱线增益随磁场降低而增大，故低场谱仪更适合大蛋白',
      '氘代没有任何代价，可无限制地对任何分子量的体系使用',
    ],
    answer: 0,
    explanation:
      '分子增大使相关时间拉长、偶极-偶极与化学位移各向异性弛豫增强，T2 缩短、谱线按 1/πT2 展宽，常规极限约 30 kDa（25 kDa 蛋白 τc 已约 10–12 ns）。TROSY（Pervushin 等 1997 年）利用高场下两条弛豫路径部分相消的通道选择，配氘代把实测极限推至约 100 kDa。B 的 500 kDa 无依据；C 方向相反——TROSY 收益随场强平方增长，900 MHz 高场因此成为大蛋白标配；D 忽略氘代丢失 NOE 距离约束的代价。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-53',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch11',
    type: 'truefalse',
    question:
      'NOE 交叉峰的强度随核间距的六次方衰减，距离约束上限约 5–6 Å；NOESY 混合时间取 80–150 ms 是为了抑制自旋扩散假峰。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。NOE 经偶极-偶极交叉弛豫传递磁化，强度约按 r⁻⁶ 衰减，故距离上限约 5–6 Å，强中弱峰分档约 2.7、3.3 与 5.0 Å。混合时间取 80–150 ms 正是为节制自旋扩散：过长时磁化经中间核「转手」产生假峰，混入的虚增约束比缺约束更有害——混合时间节制与对称性检验是常规防线，这也是 NOE「近邻强、远亲弱」定量换算的纪律前提。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-54',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch11',
    type: 'single',
    question: '关于 NMR 的结构约束与系综评估，下列叙述错误的是：',
    options: [
      '³J(HN,Hα) 可经 Karplus 关系把二面角 φ 夹进若干候选区间',
      'RDC 提供键矢量相对分子取向轴的长程取向约束，与 NOE 的短程性质正交互补',
      '有序区骨架 RMSD 小于 0.5 Å 即证明结构准确度高，可替代 RDC 交叉验证',
      '慢交换酰胺结合受体羰基可构成氢键约束，N–H 至 O 的距离上限约 2.0 Å',
    ],
    answer: 2,
    explanation:
      'C 混淆了精度与准确度：RMSD 度量系综互相像不像（精度），系统性的错误可让一族错误构象彼此高度一致；准确度（像不像真的）的试金石是 RDC 与独立交叉验证，二者不可互相替代。A、B、D 均为标准表述：Karplus 三项式把 ³J(HN,Hα) 换算为 φ 候选区间；RDC 在弱定向介质中读出几到几十 Hz 的取向约束、专治「局部都对、整体歪了」；慢交换酰胺加受体羰基构成约 2.0 Å 上限的氢键约束。',
    difficulty: 3,
  },
  {
    id: 'q-structural-biology-55',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch11',
    type: 'multiple',
    question: '（多选题）关于 NMR 的动力学方法，下列叙述正确的有：',
    options: [
      '模型自由分析（Lipari 与 Szabo 1982 年）把 R1、R2 与异核 NOE 拆成序参量 S² 与有效相关时间 τe',
      'CPMG 弛豫分散覆盖约 0.2–10 ms 的交换窗口，可拟合隐藏态占有率与交换速率 kex',
      'CEST 在约 10–500 ms 窗内可见占有率低至约 1% 的稀态',
      'PRE 以 MTSL 自旋标记读取约 15–35 Å 的长程距离，对约 1% 的瞬态接触敏感',
      '氢交换保护因子只能测量 ps–ns 级的侧链运动，无法反映局部稳定性',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'E 时间尺度错位：氢交换保护因子覆盖毫秒到小时尺度，由实测交换速率除以无结构参考速率而得（可达 10⁶–10⁸），折算局部展开自由能与稳定性地图；ps–ns 侧链运动属 R1、R2 与异核 NOE 加模型自由分析的领地。A 至 D 均正确：S² 与 τe 的拆分、CPMG 的交换窗口与拟合参数、CEST 对约 1% 稀态的可见性、PRE 的量程与瞬态敏感性，共同构成从皮秒到小时的时间尺度谱系。',
    difficulty: 2,
  },
  // ================= 第十二章 整合结构生物学与前沿（q-structural-biology-56 ~ 60） =================
  {
    id: 'q-structural-biology-56',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch12',
    type: 'single',
    question: 'wwPDB 验证报告中 clashscore 的定义是：',
    options: [
      '模型中键长偏差超过 4 个标准差的共价键数目',
      '每 1000 个原子中原子间距重叠不小于 0.4 Å 的严重空间冲突数',
      'Ramachandran 离区残基占全部残基的百分比',
      'Rfree 与 Rwork 之差除以 Rfree 所得的百分数',
    ],
    answer: 1,
    explanation:
      'clashscore 是 MolProbity 体系（Chen 等 2010 年确立）的立体化学指标：每 1000 个原子中原子间距重叠不小于 0.4 Å 的严重空间冲突数，验证报告以其数值并附相对同分辨率档存档条目的百分位呈现——红色高冲突常指向未清扫的侧链构象或硬塞进噪声的局部结构。其余选项分别混入了键长偏差计数、Ramachandran 离区百分比与 Rfree 差值的定义，均非 clashscore。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-57',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch12',
    type: 'single',
    question: '关于小角 X 射线散射（SAXS）的数据解读，下列叙述正确的是：',
    options: [
      'Guinier 区须满足 q·Rg 小于 1.3，ln I 对 q² 作图的直线斜率给出 Rg；Dmax 由 P(r) 分布衰减到零处读出',
      'Dmax 可直接从原始散射曲线的最后一个数据点读出，无需 P(r) 反演',
      'ab initio 包络的精度可达约 0.5 Å，足以定位侧链取向',
      '只须测单一浓度即可排除颗粒间干涉，无需浓度系列',
    ],
    answer: 0,
    explanation:
      'Guinier 区（q·Rg 小于 1.3）内 ln I 对 q² 呈直线，斜率给出回转半径 Rg；最大尺度 Dmax 须经 P(r) 距离分布的间接傅里叶反演（如 GNOM 程序）从分布衰减到零处读出，不能从原始曲线末点直接读。C 严重夸大——DAMMIN/DAMMIF 的 ab initio 包络只有约 1–2 nm 精度；D 忽略颗粒间干涉——浓度系列（1–10 mg/mL）加缓冲液空白扣除恰是 SAXS 的实验纪律，I(0) 与 Porod 体积则用于估算分子量与寡聚态。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-58',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch12',
    type: 'truefalse',
    question:
      'PDB_REDO 对 PDB 存量条目的自动化再精修统计显示，平均 Rfree 可下降约 2 个百分点，且几何指标同步改善。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。PDB_REDO（Joosten、Vriend 与合作者 2009 年起的系列工作）以当代精修协议——各向异性 B 因子、占据率再估、优化的权重日程——批量再精修存量条目，统计显示平均 Rfree 下降约 2 个百分点且几何同步改善：对个体是投稿前把坐标过一遍线上服务即可白捡的精度，对数据库是抹平半个世纪精修水准参差、使存档统计可比的一致性工程——「存量里埋着免费的精度红利」。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-59',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch12',
    type: 'single',
    question:
      '某课题组面对一个 45 kDa 的激酶结构域：可溶性良好但筛晶未果，须解析其 ATP 结合态、研究毫秒级自抑制构象交换，并确认两个结构域的相对取向。最合理的当代方法组合是：',
    options: [
      '继续等待长出衍射晶体后再以 X 射线解析，其余问题一并放弃',
      '直接上冷冻电镜解析 45 kDa 单结构域的全酶构象',
      '以 AlphaFold 预测划界辅助的 NMR 为主：TROSY 加氘代解析结构域取向与 ATP 结合态，CPMG 解析毫秒级交换，辅以 SAXS 验证整体形状',
      '仅做 HDX-MS，即可同时给出原子坐标与毫秒交换速率常数',
    ],
    answer: 2,
    explanation:
      '45 kDa 在 TROSY 加氘代可达的约 100 kDa 边界之内：NMR 可解析结构域取向与 ATP 结合态（化学位移滴定定量 Kd），CPMG 弛豫分散专测约 0.2–10 ms 的构象交换（隐藏态占有率与 kex 同步到手），SAXS 则验证溶液中的整体形状与寡聚态——正合「计算覆盖折叠，实验负责构象与机制」的分工。A 消极且僵化；B 不当——45 kDa 单域远低于冷冻电镜约 100 kDa 的适用下限、衬度不足；D 夸大——HDX-MS 给保护图谱与表位定位，既不给原子坐标也不给交换速率常数。',
    difficulty: 3,
  },
  {
    id: 'q-structural-biology-60',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch12',
    type: 'multiple',
    question: '（多选题）关于 AlphaFold 的置信度体系与预测边界，下列叙述正确的有：',
    options: [
      'pLDDT 大于 90 的区段主链与侧链均可信，可直接作分子置换的搜索模型',
      'PAE 评估残基对间的相对排布误差，域间 PAE 高提示「各自准而整体不定」',
      'pLDDT 小于 50 常对应内在无序区，是「此处无折叠」的路标而非单纯的建模失败',
      'AF-Multimer 对异源复合物约三分之二可达可接受的界面精度，抗体-抗原预测仍是短板',
      '点突变的稳定性变化与配体结合态构象如今已可由 AF2 直接可靠预测，无须实验验证',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'E 越界：点突变稳定性变化（ΔΔG）的预测仍不稳，AF2 常输出平均化的单一构象，配体与金属结合态、翻译后修饰与糖型均须实验定夺——这正是「计算覆盖折叠、实验负责构象与机制」的边界所在，也是 MR 模型来源革命之外必须保留实验验证的原因。A 至 D 均为第 12 章标准表述：pLDDT 档位与 MR 用途、PAE 的域间与界面解读、低分对应内在无序区、AF-Multimer（Evans 等 2022 年）约三分之二的界面精度与抗体-抗原短板。',
    difficulty: 2,
  },
]
