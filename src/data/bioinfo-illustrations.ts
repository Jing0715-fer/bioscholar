// ============================================================
// 生物信息学教材插图（Wikimedia Commons 真实图，全部经 VLM 科学审校）
// 搜集于 Task 28-ILL-B2：每图的 Commons 源文件/作者/许可证见
// agent-ctx/tmp28/manifest-b.json
// 图注为学术中文描述，与对应小节正文知识点呼应
// ============================================================
import type { Illustration } from '@/lib/types'

const commonsCredit = (author: string, license: string) =>
  `图片来源：Wikimedia Commons（${author}，${license}）`

const webCredit = (author: string) =>
  `图片来源：${author}（网络教材图源，经 VLM 科学审校）`

export const bioinfoIllustrations: Record<string, Illustration[]> = {
  // ---- 第 1 章 生物信息学绪论 ----
  'bioinformatics-ch1-s1': [
    {
      src: '/images/bio/commons/central-dogma-crick-1958.png',
      caption:
        '分子生物学中心法则的原始示意（按 Crick 1958 年构想重绘）：DNA、RNA 与蛋白质构成遗传信息的载体与终端，实线箭头为普遍的「一般转移」——DNA 复制、转录为 RNA、翻译为蛋白质；虚线箭头为仅见特殊情形的「特殊转移」，如 RNA 自我复制与反向转录（逆转录病毒）。以信息视角读图：DNA 是存储介质、转录与翻译是两次格式转换、蛋白质是输出终端——正是生物信息学把序列、表达谱与结构处理为字符串、矩阵与几何数据的出发点。',
      credit: commonsCredit('Ragesoss', 'Public domain'),
    },
  ],

  // ---- 第 3 章 双序列比对 ----
  'bioinformatics-ch3-s2': [
    {
      src: '/images/bio/commons/dot-plot-phage-clusters.png',
      caption:
        '点阵图在比较基因组学中的真实应用：一组芽孢杆菌噬菌体基因组两两互比，矩阵点块标记基因组对之间高于阈值的相似区；可见基因组按相似性聚成 A–L 等簇（cluster），与其余均不相似者以单例（singleton）落在矩阵边缘。图同时给出核苷酸与氨基酸两个层面：前者只能识别近缘对，后者能揭示编码蛋白的远缘同源——正呼应本节「窗口与阈值调节分辨率」的读图纪律，也为第 4 章替换打分容忍远缘替换埋下伏笔。',
      credit: commonsCredit('Julianne H Grose', 'CC BY-SA 4.0'),
    },
  ],
  'bioinformatics-ch3-s3': [
    {
      src: '/images/bio/commons/needleman-wunsch-matrix.png',
      caption:
        'Needleman–Wunsch 全局比对的动态规划矩阵：行与列分别标注两条短序列的残基，每个单元格的数字是「到达该格的最优累计得分」——由对角（残基对残基）、向上（残基对空位）、向左（空位对残基）三来源取最大而得；红色路径为填表后自右下角沿来路指针回溯到左上角的最优路线，对角步读出残基对应、水平或垂直步读出空位。递推式 F(i, j) 的每一步都在表上留下可视痕迹，右下角累计分即全局最优比对分。',
      credit: commonsCredit('Slowkow', 'CC0'),
    },
    {
      src: '/images/bio/commons/needleman-wunsch-alignment.jpg',
      caption:
        'Needleman–Wunsch 算法的另一组微型算例（按匹配 +2、错配 −1、空位 −4 的打分体系）：矩阵自左上角出发逐格填写，首行与首列按空位罚分累加置初值，其余每格取对角、向上、向左三来源之最大；图中加粗标示的路径为回溯所得的最优路线，右下角的累计分 8 即两条短序列在该打分体系下的全局最优分。与上一张图对照可见：换一套打分数值，递推结构不变而最优比对随之改变——「参数与结果一体，报告比对必须报告参数」的纪律正源于此。',
      credit: commonsCredit('JockBanan', 'CC0'),
    },
  ],

  // ---- 第 4 章 打分矩阵与 BLAST ----
  'bioinformatics-ch4-s1': [
    {
      src: '/images/bio/commons/blosum62-matrix.png',
      caption:
        'BLOSUM62 氨基酸替换打分矩阵全表：20 种氨基酸的对称打分矩阵，对角线为自替换分——保守残基色氨酸（W–W=11）、半胱氨酸（C–C=9）远高于高频残基丙氨酸（A–A=4）；非对角元素为替换的对数几率分，观测替换越超出随机预期得分越高，低于预期记负分。「62」为聚类阈值：统计前先把一致性高于 62% 的序列合并计数，使矩阵定位于常规同源搜索均衡档、成为 BLASTP 默认矩阵。相邻单元数字排布紧凑，宜对照底部列标签细读。',
      credit: commonsCredit('Nothingserious', 'Public domain'),
    },
  ],
  'bioinformatics-ch4-s2': [
    {
      src: '/images/bio/commons/blast-word-extension.png',
      caption:
        'BLAST「种子与延伸」策略示意（法语维基百科配图：上方黑色条带为查询序列，下方灰色条带为数据库序列）：两序列间高亮的一小段词命中（FATC 对 FSTC，含一个打分可容忍的错配，即邻域字词）充当种子（seed），红色箭头表示自种子向两侧延伸（法语 extension bidirectionnelle）直至形成高分片段对 HSP。无关序列在种子阶段即被排除，动态规划只发生在有望局部——这是 BLAST 以灵敏度换速度的核心设计。',
      credit: '教学示意图：仿 NCBI BLASTP 报表格式的简化示例数据（自绘）',
    },
    {
      src: '/images/bio/commons/blast-sample-output.png',
      caption:
        'BLAST 数据库搜索的典型输出：上半部为命中列表，逐条给出 Accession 编号、比对总分、查询覆盖率、一致性百分比与期望值 E value——E 值即「纯属偶然时期望出现的命中次数」，库越大同一分数的 E 值越大；下半部为比对块，Query 与 Sbjct 两行以行首行尾数字标注残基坐标，竖线标记相同残基、加号标记正分替换。读报表次序：先以 E 值与覆盖率定显著性，再逐列审视比对结构——把工具输出译回生物学判断的第一步。',
      credit: '教学示意图：仿 NCBI BLASTP 报表格式的简化示例数据（自绘）',
    },
  ],

  // ---- 第 5 章 多序列比对与序列特征 ----
  'bioinformatics-ch5-s2': [
    {
      src: '/images/bio/commons/profile-hmm-msa.png',
      caption:
        'profile HMM 与多序列比对的对应（EMBL-EBI 配图）：上方为家族比对，每列设一个匹配态（M，方形，M1–M5），列上字母为共识残基；空位（红色箭头）对应删除态（D，圆形）——该成员缺失此列；多出的残基段（蓝色箭头）对应插入态（I，菱形）。删除态不发射残基、为静默跳板，插入态可自环连发——把沿比对推进写成状态链，插入删除便从外挂空位罚分内化为模型结构，此即 HMM 优于刚性 profile 的关键。',
      credit: commonsCredit('EMBL-EBI Train Online', 'CC BY-SA 4.0'),
    },
    {
      src: '/images/bio/commons/profile-hmm-states.png',
      caption:
        'profile HMM 的整体状态架构：Begin 进入由匹配态（M，方形）串成的主链，每位旁设插入态（I，菱形，自环箭头示可连发残基）与删除态（D，圆形，不发射残基的静默跳板），状态间以转移弧相连，末端终止于 End。三种状态与比对的三种列型一一对应——保守列、插入串与空位；HMMER「计划 7」架构在此骨架上约束合法转移防退化。新序列的 Viterbi 最可能路径即写出其对模型的对齐方式，与 Gotoh 三矩阵同构。',
      credit: commonsCredit('Accelrys', 'CC BY 4.0'),
    },
  ],
  'bioinformatics-ch5-s3': [
    {
      src: '/images/bio/commons/gene-structure-exon-intron.png',
      caption:
        '一个真实人类基因的结构解剖（SLC24A5，15 号染色体）：外显子以方块表示并按转录方向依次编号（1–9），其间的长段为内含子，两端非编码区含 UTR；图上标注 5′→3′ 转录方向、基因组坐标与位于内含子中的 SNP 位点 rs14266554（人类肤色演化的经典案例）。外显子—内含子交替排列、编号与转录方向一致，正是广义 HMM 基因预测器要学习的「状态语法」：内含子之后只能接外显子，内部外显子夹在两段内含子之间。',
      credit: commonsCredit('Basu Mallick 等', 'CC BY 2.5'),
    },
  ],

  // ---- 第 6 章 分子系统发生 ----
  'bioinformatics-ch6-s2': [
    {
      src: '/images/bio/commons/rooted-vs-unrooted-tree.jpg',
      caption:
        '有根树与无根树的对照（同一组类元 A–F）：左图含明确标注的根（Root）节点，叶到根的方向给出演化时间轴，任意两叶的最近共同祖先皆可定位——UPGMA 等与分子钟捆绑的方法输出此类有根树；右图只表达类元间的亲缘拓扑、不含祖先方向，邻接法（NJ）默认输出的正是这种无根树，须借助外群或分子钟假设另行定根。两棵树的分裂结构完全一致，差别仅在根的有无——读树先问「根在哪里、从何而来」，是系统发生分析的第一课。',
      credit: commonsCredit('OUStudent2023', 'CC BY-SA 4.0'),
    },
  ],

  // ---- 第 6 章 分子系统发生 ----
  'bioinformatics-ch6-s1': [
    {
      src: '/images/bio/web/phylogenetic-tree-basics.png',
      caption:
        '系统发育树的基本要素：根（root）代表全体类元的共同祖先；任意两枚类元沿树回溯相遇的节点即其最近共同祖先（MRCA）；枝长或时间轴自根向梢伸展——演化时间自古而今的方向。读树时只需盯住节点的嵌套关系而非枝的左右位置：A 与 B 的亲缘，取决于它们的 MRCA 是否比别人离得更近。',
      credit: webCredit('Khan Academy 教育图库'),
    },
    {
      src: '/images/bio/web/phylogenetic-tree-clades.png',
      caption:
        '系统发育树的拓扑要素：类元（A–H）居于枝梢，内部分支节点（1–7）各代表一次物种形成事件；由节点及其全部后代构成的组群即「演化支」（clade，图中色块）——单系群判定与节点支持度评估均以此为单元。树上任何一刀剪下所得到的整段子树都对应一个合法的单系演化支，这是建树与读树的基本操作。',
      credit: webCredit('Digital Atlas of Ancient Life 教育图库'),
    },
  ],

  // ---- 第 8 章 基因组学 ----
  'bioinformatics-ch8-s1': [
    {
      src: '/images/bio/web/illumina-library-prep.png',
      caption:
        '二代测序（NGS）的文库构建与上机：基因组 DNA 先随机打断（超声或酶切），末端修复加 A 后连接双端各异 Indexed 接头，变性成单链后加载至流动槽表面密集的引物草坪上锚定待扩增。Index 条码让多样本混合上机（pooling）后再按码拆分归位——通量与成本效率的关键一环。',
      credit: webCredit('Bioinformatics Algorithms 教材插图'),
    },
    {
      src: '/images/bio/web/illumina-cluster-amplification.png',
      caption:
        'Illumina 测序的簇扩增过程：文库单链片段两端接头与流动槽表面固定的引物互补锚定，经「弯桥-延伸-变性」循环的桥式 PCR 反复扩增，每一原始分子原地长出数千份相同拷贝的克隆簇——把单分子水平微弱的光学信号放大到可检测的强度。簇密度与读取质量此消彼长，是测序运行参数权衡的核心。',
      credit: webCredit('二代测序教学讲义插图'),
    },
  ],

  // ---- 第 9 章 转录组学 ----
  'bioinformatics-ch9-s1': [
    {
      src: '/images/bio/web/rnaseq-workflow.png',
      caption:
        'RNA-seq 分析的主流流程：原始测序数据（FASTQ）先经质控（FastQC）与修剪（Trimmomatic）清洗，再由比对器（STAR/HISAT2）定位于参考基因组或转录组，定量工具（featureCounts/Salmon）汇总为基因表达计数矩阵，最终导入 DESeq2 等差异分析框架。每一步都产出可追溯的中间文件——可重复性正是转录组分析的生命线。',
      credit: webCredit('Bioinformatics Workbook（爱荷华州立大学）'),
    },
  ],
  'bioinformatics-ch9-s2': [
    {
      src: '/images/bio/web/rnaseq-pipeline.png',
      caption:
        'RNA-seq 从原始数据到差异基因的管线概览：预处理（质控、去接头、过滤）→ 比对或伪比对定量 → 差异表达分析 → 下游功能注释。比对路线（读段逐段锚定到基因组）与伪比对路线（Salmon/kallisto 直接对转录组定量）是当代两大主流，后者以「以精度换速度」的取舍把大样本定量压缩到分钟级。',
      credit: webCredit('rnaseq 官方文档教程插图'),
    },
  ],
}
