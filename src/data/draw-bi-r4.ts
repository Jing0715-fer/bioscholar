// ============================================================
// Round 4 自绘插图挂载（bi 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/bi/ → bun scripts/draw/gen.ts bi
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawBiR4: Record<string, Illustration[]> = {
  'bioinformatics-ch6-s3': [
    {
      src: '/images/bio/drawn/bi-ch6-s3-parsimony-ml.svg',
      caption:
        '简约法选替换总步数最少的拓扑，Fitch 算法后序交并集计变化、前序落实状态；信息位点须至少两种状态且各出现至少两次；ML 以数据似然为准则、GTR+Γ+I 为常用模型族，修剪算法把逐位点似然压成线性，模型选择以 AIC/BIC 权衡，IQ-TREE 与 RAxML 为现代引擎',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch8-s4': [
    {
      src: '/images/bio/drawn/bi-ch8-s4-pangenome-dnds.svg',
      caption:
        '共线性指基因次序的保守，断点即倒位、易位等重排事件，非等位同源重组为主要成因；大肠杆菌各菌株基因四千余而核心仅约两千余（约四成），泛基因组上万且持续增长（开放）；dN/dS 明显低于 1 为纯化选择、接近 1 为中性、高于 1 提示正选择，全基因组平均约 0.1——分析须密码子比对、甄别直向同源并警惕 dS 饱和',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch4-s4': [
    {
      src: '/images/bio/drawn/bi-ch4-s4-blast-family.svg',
      caption:
        'tBLASTn 以蛋白查六读框翻译的核酸库、tBLASTx 两端皆译最慢；PSI-BLAST 由显著命中构建 PSSM 逐轮迭代、凭家族模式召回远缘同源，漂移源于非同源序列混入 profile 并自我强化；字长与 T 是速度—灵敏度主旋钮，SEG/DUST 屏蔽低复杂度',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch1-s2': [
    {
      src: '/images/bio/drawn/bi-ch1-s2-data-scale.svg',
      caption:
        '高通量测序使全基因组测序成本自 2001 年约 1 亿美元降至数百美元区间（降幅超过四个数量级）；数据倍增周期约 1–1.5 年快于摩尔定律；单倍体基因组 3.1 Gbp 与 30× 约 90 Gbp 原始数据须分开表述',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch12-s2': [
    {
      src: '/images/bio/drawn/bi-ch12-s2-deep-learning.svg',
      caption:
        '深度学习在序列、结构与图像三大战场：序列表示——one-hot 编码无损无假设但稀疏无先验，预训练嵌入把化学相似性学进向量空间。架构演化——卷积核与位置权重矩阵同构（CNN 天然检测序列基序），RNN 以隐藏状态携带上下文但受梯度衰减与串行之困，自注意力全位置两两加权、可并行且梯度直达（代价是随长度平方增长的显存）；表格数据上梯度提升树常胜深度网络。结构预测的 AlphaFold 谱系：CASP13 深度距离分布中位约 58 分 → CASP14 注意力加结构模块达约 92.4（RoseTTAFold 同届印证范式转移）——生物信息学的深度学习时代宣言。',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch3-s1': [
    {
      src: '/images/bio/drawn/bi-ch3-s1-homology-basics.svg',
      caption:
        '同源性是全或无的演化断言、不能量化为百分比，相似性与一致性才是可观测量；直系（物种形成，功能常保守）、旁系（复制，常已分化）、异同源（水平转移）；一致性 20–35% 为暮区；全局/局部/半全局分别对应整条同源、共享片段与嵌套关系',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch11-s3': [
    {
      src: '/images/bio/drawn/bi-ch11-s3-regulatory-network-modeling.svg',
      caption:
        '基因调控网络与通路建模：调控边的证据分层——ChIP-seq 给物理结合、表达扰动给因果方向、基序富集给序列线索，结合不等于调控须交集验证。布尔网络以逻辑函数描述开关式调控，吸引子对应稳定表达态——Kauffman 假说把细胞类型解释为吸引子、分化为吸引子跃迁；平均连接数二至三的网络处于有序边缘（可承载多吸引子而不失稳）。ODE 模型以速率方程刻画连续动力学（再现振荡、双稳态与切换），但受参数饥渴与可辨识性之困——敏感性分析用于定位干预把手。',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch8-s2': [
    {
      src: '/images/bio/drawn/bi-ch8-s2-genome-assembly.svg',
      caption:
        'de Bruijn 图把读段切为 k-mer 建图，组装化为多项式可解的欧拉路径；k-mer 覆盖 ≈ 读覆盖 ×（读长 − k + 1）/ 读长，30×·150 bp·k=51 时约 20×；人类基因组约半数为重复衍生物（LINE 约两成、Alu 约 300 bp 拷贝逾百万）；OLC 以重叠–布局–共识三步复兴于长读；N50 为降序累加达总长一半时所在重叠群长度，与 L50、NG50 及 QUAST 评估合看',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch3-s4': [
    {
      src: '/images/bio/drawn/bi-ch3-s4-smith-waterman.svg',
      caption:
        '在递推中加入零选项实现负分截断，回溯改从全矩阵最大值出发、遇零即停；仿射空位把「新开 go」与「延长 ge」分账，Gotoh（1982）用 M、Ix、Iy 三矩阵递推、复杂度仍 O(mn)；带状 DP、X-drop、线性空间与向量化把精确算法推回实用区间',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch10-s4': [
    {
      src: '/images/bio/drawn/bi-ch10-s4-single-cell-rnaseq.svg',
      caption:
        'bulk 均值无法区分「细胞比例 20%→35%」与「该类型自身表达上调」，单细胞测序使二者解耦并照亮稀有细胞群；10x 液滴以细胞条形码凝胶珠封装细胞，UMI 给每条原始分子发身份证、同 UMI 去重只计一次，掉落使计数零膨胀；双联体与漏液是两类技术噪声；标准流水线为质控-归一化-高变基因-PCA-UMAP-图聚类-注释；拟时序度量轨迹拓扑次序，RNA 速度以未剪接比例补充方向；伪 bulk 把检验单位收回样本级——每组仍需三个以上供体',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch5-s4': [
    {
      src: '/images/bio/drawn/bi-ch5-s4-regulatory-motifs.svg',
      caption:
        'σ70 启动子为 -35（TTGACA）与 -10（TATAAT）框加约 15–19 bp 间距；真核增强子挣脱距离与方向约束；CpG 岛判据三件套（长约 200 bp 以上、GC 高于 50%、Obs/Exp 高于 0.6）；PWM 化频数为逐列对数权重、logo 显示逐列信息量；CAI 为高表达参考集相对适应性的几何平均',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch10-s3': [
    {
      src: '/images/bio/drawn/bi-ch10-s3-metabolomics.svg',
      caption:
        '代谢组是信息流最下游的化学读出，确认口径的代谢物量级为数千种、含推测条目达万级；非靶向全扫描做发现、靶向内标标准曲线做确证，取样须秒级淬灭并以 QC 穿插与 LOESS 校正定义可信窗；GC-MS 胜在 EI 谱库成熟、LC-MS 以 C18 与 HILIC 双柱互补、NMR 无损可绝对定量；特征与化合物因加合物与共流出非一一对应；PLS-DA 须置换检验与交叉验证防过拟合、VIP 高于 1 仅作候选；化合物鉴定需二级谱与标准品才达最高置信级，因果方向仍需干预实验裁决',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch4-s3': [
    {
      src: '/images/bio/drawn/bi-ch4-s3-blast-evalue.svg',
      caption:
        '随机序列最高局部比对分服从极值分布，尾部按 e 的负 λS 次方指数衰减；E ≈ K·m·N·e^(−λS) 为期望假命中次数，与 P 值经 P = 1 − e^(−E) 换算；数据库翻倍则 E 近似翻倍，跨搜索比较应使用 bit 分；蛋白搜索常以 E < 0.01 为显著惯例',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch9-s3': [
    {
      src: '/images/bio/drawn/bi-ch9-s3-differential-expression.svg',
      caption:
        '生物学重复存在过度离散，负二项分布以方差 μ + αμ² 吸收超额方差，忽视则 p 值虚小假阳性泛滥；设计矩阵先行（批次+条件、配对写个体+处理、多水平用 LRT）；DESeq2/edgeR 输入未归一化计数，经验离散度向全基因组趋势收缩；BH 控制 FDR，通行阈值 padj < 0.05 且 |log₂FC| > 1；火山图看权衡、MA 图看收缩、热图看结构',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch11-s4': [
    {
      src: '/images/bio/drawn/bi-ch11-s4-multiomics-integration.svg',
      caption:
        '多组学数据整合：层间错位的结构根源——mRNA 与蛋白相关性量级仅 0.4–0.6，层间缓冲与放大使单层分析存在结构性盲区。MOFA 以多视图共享潜因子解释跨层方差，因子在各层的负载差直接指向「调控发生在哪一层」。设计原则：配对设计（同一受试者同源样本分测各层）是整合分析的第一原则，独立样本只能做结论层对照。eQTL-pQTL 错位定位调控层级——调 RNA 不调蛋白提示翻译或降解调控、只调蛋白提示稳定性或修饰——「跨层比对」是系统生物学的核心方法论。',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch9-s4': [
    {
      src: '/images/bio/drawn/bi-ch9-s4-enrichment-analysis.svg',
      caption:
        'ORA 以超几何检验问「名单中某功能类别的占比是否显著超出背景期望」，背景集须与名单出自同一检测空间（第一守门规则）；GO 三分支以真路径规则相连，顶层必然富集、信息量在中层；GSEA 不设阈值，对全基因排序以富集分加标签置换检验，领先集揭示核心贡献成员；KEGG、Reactome 与 MSigDB 各有侧重——富集结果是假设发生器而非结论本身',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch2-s4': [
    {
      src: '/images/bio/drawn/bi-ch2-s4-identifiers-fair.svg',
      caption:
        '「登录号.版本号」标识内容级序列，实质修改版本加一、旧版仍可引用；GI 号 2016 年起退役；合并与拆分经次级登录号保留旧门牌；dbXref 质量取决于同步频率；FAIR（2016）要求可发现、可访问、可互操作、可重用',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch12-s3': [
    {
      src: '/images/bio/drawn/bi-ch12-s3-protein-language-models.svg',
      caption:
        '大语言模型与蛋白质设计：蛋白质语言模型以掩码残基补全的自监督目标在数亿自然序列上预训练——结构与功能约束以语言规律形式被隐式编码。ESM 家族参数量至百亿量级、注意力图自发浮现残基接触；ESMFold 以单序列直出结构，ProtTrans 嵌入加轻量分类头成注释标配。foldseek 把结构线性化为字母序列实现全库结构搜索——远缘功能注释获得序列相似性之外的第二通道；AlphaFold3 以扩散模型把预测对象扩展到蛋白-配体、核酸等复合物——结构预测与互作预测合流，AI 从「读生命」走向「写生命」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch5-s1': [
    {
      src: '/images/bio/drawn/bi-ch5-s1-msa-methods.svg',
      caption:
        'MSA 的列揭示家族保守性、是 profile / HMM / 系统树的共同入口，而最优 MSA 为 NP 完全问题；Clustal W 按「两两距离建引导树 → 加权 → 渐进 profile 比对」三步走，「once a gap, always a gap」不可撤销；T-Coffee 以一致性库、MUSCLE 以迭代细化补救；SP 分数逐对求和、冗余重复计票',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch11-s2': [
    {
      src: '/images/bio/drawn/bi-ch11-s2-ppi-network.svg',
      caption:
        'Y2H（Fields 与 Song 1989）把互作翻译为报告基因读出、测直接配对，但受自激活等假阳性（高通量被估在数成量级）与膜/分泌蛋白难入核的假阴性双重困扰；AP-MS 以标签 pull-down 加质谱回答「同复合物」，空标签对照与 SAINT/CompPASS 打分去噪；数据须分层置信，多源独立证据才升高置信；复合物展开分团块全连与 spokes 两口径；Jeong 等 2001 发现高度数 hub 更可能必需但相关受混杂；网络拓扑与合成致死等遗传筛选交叉是靶点发现的高产策略',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch1-s4': [
    {
      src: '/images/bio/drawn/bi-ch1-s4-paradigm-stats.svg',
      caption:
        '干湿实验交替构成研究闭环，计算结论须标注证据等级并量化不确定性；P 值是零假设为真时出现当前或更极端结果的概率；Bonferroni 控 FWER（极保守）、BH 控 FDR（探索性筛选），FDR 5% 即列表中假阳性期望比例约 5%；版本冻结、容器化与工作流引擎把分析变为公共资产',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch1-s3': [
    {
      src: '/images/bio/drawn/bi-ch1-s3-core-databases.svg',
      caption:
        'GenBank / EMBL / DDBJ 组成 INSDC，每日交换、一次提交全球可得；UniProtKB 手工审阅层约 50 余万条与自动注释层数亿条相差约三个数量级；PDB（1971 年，>20 万条）、KEGG（1995 年起）与 GO 三本体提供功能语境',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch12-s4': [
    {
      src: '/images/bio/drawn/bi-ch12-s4-reproducibility-ethics.svg',
      caption:
        '可重复性、伦理与数据治理：可重复性依赖数据、代码、环境三重链条，FAIR 原则（可发现、可访问、可互操作、可复用）以持久标识、元数据与开放许可为操作纲领。细节失守的警示——Excel 基因名转日期类事故污染约五分之一已发表基因列表。工程三件套：git 版本控制、Docker/Singularity 容器与 Nextflow/Snakemake 工作流管理器（声明依赖、续跑并记录 provenance）。基准社区以「预测先于答案、统一指标、公共题目」免疫自建自评——CASP/CAMDA/CAFA 为三大考场；数据治理须平衡隐私（基因组再识别风险）与开放科学。',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch8-s3': [
    {
      src: '/images/bio/drawn/bi-ch8-s3-genome-annotation.svg',
      caption:
        'RepeatMasker 同源屏蔽与 RepeatModeler de novo 挖掘互补，软屏蔽（小写化）为默认；结构注释由从头预测、转录证据与蛋白同源三方合流，EVM/MAKER 加权投票输出一致基因集，评估须区分核苷酸级、外显子级与基因级口径；功能注释以直向同源转移为核心（同一性约 ≥40% 且覆盖过半，宁紧勿松）；BUSCO 四桶统计完整性——高分不担保基因家族注释正确',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch7-s1': [
    {
      src: '/images/bio/drawn/bi-ch7-s1-secondary-structure.svg',
      caption:
        'Chou-Fasman 以构象参数与成核规则达约 50%–60%（Pro 与 Gly 是螺旋破坏者）；GOR 以 17 残基窗口的信息论框架达约 60%–65%；PSIPRED 融合 PSI-BLAST 概型与双层神经网络达约 75%–80%；DSSP（1983）以氢键周期性指派为口径；Q8 信息量更大而数值更低，无序区使 Q3 有原理性上限',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch2-s2': [
    {
      src: '/images/bio/drawn/bi-ch2-s2-annotation-tiers.svg',
      caption:
        'RefSeq 以 NM_/NP_（策展）与 XM_/XP_（预测，随注释版本变动）为每个基因提供唯一代表；UniProtKB 手工审阅约 50 余万条、自动注释数亿条，相差约三个数量级；注释沿「文献→审阅层→自动层」传播——视数据库为带时间戳的假说集合',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch7-s3': [
    {
      src: '/images/bio/drawn/bi-ch7-s3-alphafold-casp.svg',
      caption:
        'CASP 自 1994 年起以双盲竞赛统一评价结构预测；GDT-TS 取叠合后偏差落在 1/2/4/8 Å 阈值内残基百分比的平均再乘 100，对整体拓扑敏感；CASP14（2020）AlphaFold2 中位 GDT-TS 约 92.4，三大支柱为 MSA 与残基对注意力、等变结构模块、自蒸馏与循环精修；2024 年诺贝尔化学奖表彰结构预测与设计',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch10-s1': [
    {
      src: '/images/bio/drawn/bi-ch10-s1-ms-protein-id.svg',
      caption:
        'ESI 与 MALDI 两项软电离分享 2002 年诺贝尔化学奖；四类分析器分工——四极杆滤门、离子阱多级碎裂、Orbitrap 十万级分辨率加 ppm 精度、TOF 质量范围宽；MS1 选母离子、MS2 读 b/y 离子质量阶梯推序列，可鉴肽段多在 7–25 残基、漏切允许 0–2 个；靶-诱饵策略以假目标标定假阳性，谱/肽/蛋白三级各控 FDR 约 1%；动态范围约七个数量级是根本瓶颈',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch2-s3': [
    {
      src: '/images/bio/drawn/bi-ch2-s3-entrez-sra.svg',
      caption:
        'Entrez 自 1991 年起统一索引 NCBI 数十库并提供记录间链接网，E-utilities 支持程序化批量取用；SRA/ENA 按 Study→Sample→Experiment→Run 四层组织读段，FASTQ 质量行以 Phred 值编码碱基可信度；取数应记录检索式、日期与数据库版本三元组',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch11-s1': [
    {
      src: '/images/bio/drawn/bi-ch11-s1-network-basics.svg',
      caption:
        '无标度网络的度分布服从幂律（γ 约 2–3），由优先连接「富者愈富」机制生成（Barabási–Albert 1999）；对随机失效鲁棒、对定向攻击高度中枢脆弱，为单基因敲除多数无症状提供结构解释；小世界以高聚类与短平均路径共存（Watts–Strogatz 1998），代谢网络平均反应步数仅三五步量级；模块由 Louvain/Leiden 以模块度最大化检测；鲁棒性来自冗余、负反馈与模块化组织而非单件结实',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch2-s1': [
    {
      src: '/images/bio/drawn/bi-ch2-s1-genbank-flatfile.svg',
      caption:
        'flat file 分描述区、FEATURES 特征表与序列区三段——ACCESSION 与 VERSION 是稳定标识而自由文本不是；join 刻画外显子拼接、complement 表示互补链、/codon_start 给出读框相位；INSDC 三库每日交换、登录号互认',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch12-s1': [
    {
      src: '/images/bio/drawn/bi-ch12-s1-machine-learning.svg',
      caption:
        '机器学习在生物信息学的应用纪律：监督学习五环节——特征表示、数据划分、模型训练、交叉验证与泛化评估，测试集只许碰一次。生物数据两大泄漏陷阱：差异基因预筛后回头分类的循环论证、按样本而非按患者划分的伪独立。过拟合源于 p 远大于 n 的结构与噪声记忆——学习曲线上训练与验证性能的裂缝是体征，L1/L2 正则化是首选对策。特征选择分过滤式、包裹式与嵌入式三型；小样本须报告 bootstrap 稳定性，通路级聚合常比裸分子稳健——「严谨的流程比花哨的模型更重要」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch7-s4': [
    {
      src: '/images/bio/drawn/bi-ch7-s4-domain-family-annotation.svg',
      caption:
        'SCOP（1995）与 CATH（1997）以四层级编目结构域，常见折叠集中于约千余种；Pfam 概型 HMM 检出远缘成员，InterPro 整合十余个签名库、InterProScan 一次运行全家桶注释；GO 三分支以真路径规则相连，IEA 电子注释可靠性较低，注释链路每一步都有置信度衰减——同源不等于同功能，转移宁窄勿宽',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch7-s2': [
    {
      src: '/images/bio/drawn/bi-ch7-s2-homology-threading.svg',
      caption:
        '同一性高于 40% 建模近乎照抄（主链误差约 1 Å）、30% 上下 1.5–2 Å、低于 30% 进入暮光区；SWISS-MODEL 四步为模板识别、序列比对、模型搭建与质量评估，侧链用旋转异构体库安装、环区是误差主要来源；穿线按残基-环境相容性打分；Ramachandran 许可区占比约九成以上、QMEAN 给出准确性估计',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch6-s4': [
    {
      src: '/images/bio/drawn/bi-ch6-s4-bayesian-support.svg',
      caption:
        '贝叶斯输出树与参数的后验分布，分支后验概率即采样树中含该分支的比例，MCMC 须老化、多链并行并核查 ESS 高于 200；自展以位点重抽度量信号稳健度、不低于 70% 为可接受惯例、UFBoot 大幅降本；长枝吸引把快演化谱系虚假拉拢（Felsenstein 1978）；分歧时间靠化石定标与宽松钟',
      credit: DRAWN_CREDIT,
    },
  ],
  'bioinformatics-ch10-s2': [
    {
      src: '/images/bio/drawn/bi-ch10-s2-quantitative-proteomics.svg',
      caption:
        'iTRAQ/TMT 以报告基团-平衡基团的同量异位设计在 MS1 不可区分、碎裂后以报告离子强度比定量，共洗脱干扰造成比值压缩由 SPS-MS3 缓解；DIA 把质量范围划成固定窗口（如每 25 Da 一档）循环全碎，无随机遗漏可回溯重搜；发现（DDA）、全景定量（DIA）、靶向验证（MRM/PRM）构成三级工作流；AQUA 重标肽段实现绝对定量；mRNA 与蛋白相关性约 0.4–0.6，翻译后缓冲层是两层互补整合的理由',
      credit: DRAWN_CREDIT,
    },
  ],
}
