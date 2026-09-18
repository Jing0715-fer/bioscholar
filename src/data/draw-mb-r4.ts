// ============================================================
// Round 4 自绘插图挂载（mb 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/mb/ → bun scripts/draw/gen.ts mb
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMbR4: Record<string, Illustration[]> = {
  'molecular-biology-ch7-s2': [
    {
      src: '/images/bio/drawn/mb-ch7-s2-camp-cap-and-gate.svg',
      caption:
        '乳糖操纵子的正调控与二度生长：CAP-cAMP 二聚体结合于启动子上游 −61 位点，弯折 DNA 约 90° 并直接接触 RNA 聚合酶 α-CTD，将「无葡萄糖」信号转录为转录起始的增强——与「有乳糖」解除 LacI 阻遏共同构成与门，操纵子高水平表达须两条件同时满足。葡萄糖经磷酸转移系统降低 cAMP 水平（分解代谢物阻遏），故大肠杆菌在葡萄糖+乳糖混合培养基中先耗尽葡萄糖、经停滞期再切换利用乳糖，形成二度生长曲线；CAP 实际调控 100 余个基因，属全局性调节因子。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch7-s4': [
    {
      src: '/images/bio/drawn/mb-ch7-s4-riboswitch-srna-stringent.svg',
      caption:
        '转录起始之外的 RNA 层三级调控：核糖开关的适配体（aptamer）直接结合 TPP、SAM 等代谢物，构象变化切换表达平台——转录提前终止或遮蔽/暴露 RBS；glmS 核糖开关更是自切核酶。micF、RyhB 等小 RNA 与靶 mRNA 碱基配对，在 Hfq 伴侣协助下调控翻译起始或诱导 RNase E 降解——铁匮乏时 RyhB 快速清除 sodB 等储铁蛋白 mRNA 释放铁。氨基酸饥饿时核糖体 A 位空载 tRNA 激活 RelA 合成 ppGpp，严紧反应全面重编程转录组：稳定 RNA 下调、氨基酸合成酶上调。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch8-s2': [
    {
      src: '/images/bio/drawn/mb-ch8-s2-enhancer-lcr.svg',
      caption:
        '真核顺式作用元件的远距语法：增强子的作用与距离、方向、位置均无关，经蛋白质桥介导的 DNA 成环与启动子近端元件沟通；其组织特异性是基因表达时空程序的物质基础——增强子突变是肢体发育异常等遗传病的重要来源。β-珠蛋白基因座的 LCR 以簇集的 DNase I 高敏位点主导整个基因簇的染色质开放与胚胎→胎儿→成体的阶段切换；绝缘子分增强子阻断与异染色质屏障两型，CTCF 结合的边界元素划分调控域，防止增强子「越界」激活邻近基因。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch8-s3': [
    {
      src: '/images/bio/drawn/mb-ch8-s3-tf-domains.svg',
      caption:
        '转录因子的模块化架构：DNA 结合域与激活/抑制域是可独立拼接的功能模块——同源域（HTH 螺旋-转角-螺旋识别 DNA 大沟）、C2H2 锌指（1 指读 3 bp，串联合成识别更长序列，也是 ZFN 基因编辑的结构基础）、bZIP 亮氨酸拉链与 bHLH（两性螺旋拉链二聚化后夹住 DNA）、HMG 弯曲因子与 TBP β-折叠桶。激活域分酸性（VP16、Gal4 研究最深入）、谷氨酰胺富集与脯氨酸富集三类；bZIP/bHLH 家族的二聚化组合（同源/异源二聚体）极大扩展了调控词汇量。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch8-s4': [
    {
      src: '/images/bio/drawn/mb-ch8-s4-mediator-signaling.svg',
      caption:
        '信号诱导转录的汇聚枢纽：约 30 亚基的 Mediator 复合物是激活域与 Pol II 基础机器之间的通用接头——调控网络的「总线」；共激活因子（CBP/p300 组蛋白乙酰化、SWI/SNF 重塑子）与共抑制因子（NCoR-SMRT 募集 HDAC3）在染色质层面执行正负切换。四路信号范式：类固醇受体为胞内配体激活的核受体经 GRE（AGAACAnnnTGTTCT）直接调控；JAK 磷酸化 STAT→二聚化入核结合 GAS/ISRE；IκB 降解释放 NF-κB 入核；MAPK 级联磷酸化 Elk-1 等既有转录因子改变其活性。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch9-s1': [
    {
      src: '/images/bio/drawn/mb-ch9-s1-hybridization-blot-fish.svg',
      caption:
        '核酸杂交的底层技术与三大范式：碱基互补配对使标记探针能在复杂核酸背景中特异性检出同源序列——Tm 随 GC 含量与盐浓度升高、随甲酰胺浓度降低，严谨性条件决定区分度。Southern 印迹（1975）以「酶切→电泳→转膜→杂交」检测 DNA 的酶切图谱与拷贝数，Northern 印迹同理检测 RNA 的大小与丰度；探针可经随机引物法或切口平移掺入 ³²P 或 DIG/生物素。FISH 将荧光探针带入细胞与染色体原位，直接显示序列的位置与拷贝数，是易位、微缺失与基因扩增（如 HER2）检测的临床标准。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch9-s3': [
    {
      src: '/images/bio/drawn/mb-ch9-s3-cloning-libraries.svg',
      caption:
        '分子克隆的标准范式与载体容量阶梯：II 型限制酶（如 EcoRI）识别回文序列产生黏性末端，同尾酶策略使不同来源的片段得以拼接，T4 DNA 连接酶封口后转化宿主。载体按插入容量分级——质粒 <10 kb、λ 噬菌体 ~20 kb、粘粒 ~45 kb、BAC 100–300 kb、YAC 可达 Mb 级，分别服务不同规模的克隆目标。蓝白斑筛选利用 lacZα 互补：插入片段破坏 α 肽编码则菌落呈白色。基因组文库覆盖全基因组（需足够随机重叠），cDNA 文库反映特定组织与时期的表达谱——mRNA 差异剪接信息也随之入库。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch9-s5': [
    {
      src: '/images/bio/drawn/mb-ch9-s5-markers-y2h-emsa-chip.svg',
      caption:
        '分子标记与基因表达研究的证据链：RFLP（限制片段长度多态）、SSR（微卫星重复数变异）、SNP（单碱基多态）三类标记各有专属检测范式，是连锁分析、GWAS 与法医 DNA 鉴定的基石。蛋白互作证据——酵母双杂交拆分 Gal4 的 BD/AD 为诱饵与猎物，报告基因读出互作（须警惕自激活等假阳性）；EMSA 以凝胶阻滞与超迁移带验证 DNA-蛋白结合；ChIP 交联-免疫沉淀-测序定位体内真实结合位点。报告基因方面，GFP 自催化发光适合活细胞成像，荧光素酶定量灵敏、线性范围宽，是启动子活性分析的主力。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch10-s1': [
    {
      src: '/images/bio/drawn/mb-ch10-s1-hgp-strategies.svg',
      caption:
        '人类基因组计划的两种战略与大科学遗产：1990 年六国公共联盟启动，目标 30 亿碱基对与全基因定位；1998 年 Venter 的 Celera 以全基因组鸟枪法加入竞争，将时间表提前。公共联盟采用分级战略（BAC-by-BAC）——先建遗传图与物理图，再逐克隆测序装配；2001 年 2 月 Nature 与 Science 分别发表工作框架图（历时约 11 年、耗资约 27 亿美元），2003 年完成图覆盖常染色质区 >99%、准确率 99.99%，2022 年 T2T 联盟补全真正「端粒到端粒」序列。核心发现：基因约 2 万个，远少于预期；ELSI 计划专设 3%–5% 预算研究伦理问题。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch10-s2': [
    {
      src: '/images/bio/drawn/mb-ch10-s2-ngs-assembly-annotation.svg',
      caption:
        '高通量测序的共性框架与注释流水线：加接头的文库→桥式簇扩增→边合成边测序（可逆终止子或离子检测），索引条码支持多样本混槽；WES 以外显子捕获 panel 实现高性价比遗传病筛查。装配以 de Bruijn 图将读段拆为 k-mer 再沿图路径重建，N50（将装配按长度排序累积至 50% 总长的那条）与 BUSCO（单拷贝直系同源基因完整度）共同评估装配质量。注释五步流水线：重复序列屏蔽→基因预测（ab initio 隐马尔可夫 + 同源比对 + RNA-seq 证据）→ GO/Pfam/KEGG 功能赋义——证据权重依次升高。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch10-s3': [
    {
      src: '/images/bio/drawn/mb-ch10-s3-comparative-functional-genomics.svg',
      caption:
        '比较与功能基因组学的核心概念与技术：直系同源基因（物种形成来源）功能常保守，旁系同源（复制来源）常发生新功能化/亚功能化——功能转移的判断依据；共线性（synteny）保守区段支撑跨物种基因映射与祖先基因组重构；Ka/Ks 比值 >1 提示正选择、≈1 中性、<1 纯化选择，是检测选择压力的标准统计量。功能层面：CRISPR 全基因组敲除文库以生长优势/劣势筛选必需基因与药物靶点，Perturb-seq 将 sgRNA 与单细胞 RNA-seq 读出耦合；scRNA-seq 与空间转录组把表达解析推进到单细胞与原位水平，泛基因组则收录群体水平的结构变异。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch10-s4': [
    {
      src: '/images/bio/drawn/mb-ch10-s4-rnaseq-proteomics.svg',
      caption:
        '转录组学与蛋白质组学的互补全景：RNA-seq 流程为 poly(A) 富集（或 rRNA 去除）→建库→测序→回贴定量，TPM 对读数与基因长度双重归一化、适合跨样本比较；差异分析用 DESeq2/edgeR 的负二项模型，报告 log2FC 与 FDR 校正。蛋白质组：双向凝胶电泳按等电点与分子量双维分离，LC-MS/MS 以肽段碎裂的 b/y 离子系列鉴定蛋白；SILAC/iTRAQ 稳定同位素标记实现相对定量，磷酸化组学需 TiO₂/IMAC 肽段富集。mRNA 与蛋白丰度相关性仅约 0.4–0.6（翻译调控与降解所致），两套组学必须互补解读。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch10-s5': [
    {
      src: '/images/bio/drawn/mb-ch10-s5-epigenomics-encode.svg',
      caption:
        '表观基因组学的四类图谱与 ENCODE 结论：ChIP-seq 以抗体沉淀测序绘制组蛋白修饰与转录因子结合图谱；重亚硫酸盐测序将未甲基化 C 转为 U（PCR 后读作 T）而 5mC 不变，实现单碱基分辨率甲基化图谱；ATAC-seq 用 Tn5 转座酶切入开放染色质绘制可及性；Hi-C 以邻近连接捕获全基因组三维接触，发现 TAD（拓扑关联结构域）组织增强子-启动子通讯。ENCODE 项目以多技术矩阵注释人类功能元件，揭示约 80% 基因组具生化活性——GWAS 疾病变异多位于非编码区，正依赖这些图谱解读；数据库检索与 BLAST（seed-延伸策略，E 值度量随机命中期望）是干实验的底座。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch11-s1': [
    {
      src: '/images/bio/drawn/mb-ch11-s1-rm-cohen-boyer.svg',
      caption:
        '重组 DNA 技术的奠基：限制修饰（R-M）系统由甲基转移酶与限制酶配对——宿主自身 DNA 被甲基化保护、入侵噬菌体 DNA 被切割，为 1970 年代「分子剪刀」的发现提供了生物学背景。EcoRI 等 II 型酶识别回文位点产生黏性末端，1973 年 Cohen 与 Boyer 将抗四环素质粒与卡那霉素抗性基因体外重组、转化大肠杆菌并筛选出双抗菌落——重组 DNA 技术元年；随后的 Asilomar 会议（1975）确立安全规范。「工具酶 + 载体 + 宿主」三件套支撑了从基因克隆到胰岛素、生长激素等工程蛋白表达的完整路线，ZFN/TALEN/CRISPR 三代编辑的底层逻辑同源：向靶位点引入 DSB，借用修复机器定点改造。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch11-s3': [
    {
      src: '/images/bio/drawn/mb-ch11-s3-dsb-editing.svg',
      caption:
        'DSB 修复路线竞争与精准编辑技术栈：NHEJ 快速易错、全细胞周期可用，产生 indel 实现基因敲除；HDR 依赖同源模板仅限 S/G2 期，可精确替换但效率受限。免断裂的碱基编辑：CBE 以 APOBEC 脱氨酶将 C→U、UGI 抑制尿嘧啶糖苷酶，锁定 C·G→T·A；ABE 以工程化 TadA 将 A→I（读作 G），实现 A·T→G·C。先导编辑以 Cas9-逆转录酶融合 + pegRNA 自带延伸模板，可完成全部 12 种碱基转换与小片段插入删除。脱靶控制靠多管齐下：高保真 Cas9 变体、截短向导降低错配容忍、RNP 直接递送缩短存留、GUIDE-seq 体外全基因组检测。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch11-s4': [
    {
      src: '/images/bio/drawn/mb-ch11-s4-transgenic-ips-gt.svg',
      caption:
        '从转基因到基因治疗的四级台阶：DNA 显微注射随机整合开启转基因动物时代；ES 细胞打靶经正-负选择实现定点敲除（2007 年诺奖），Cre-lox 条件性系统限定组织与时序（loxP 位点间敲除）；山中伸弥 2006 年以 OSKM 四因子将成纤维细胞重编程为 iPS 细胞（2012 年诺奖），提供疾病模型与自体细胞来源。基因治疗载体：AAV 载量仅 4.7 kb 但血清型具组织定向性、体内治疗主力；CAR-T 以 scFv+共刺激域+CD3ζ 组装合成受体、慢病毒导入 T 细胞，二代共刺激域（CD28/4-1BB）是疗效关键。生殖系编辑因贺建奎事件被国际共识严格禁止。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch11-s5': [
    {
      src: '/images/bio/drawn/mb-ch11-s5-synbio.svg',
      caption:
        '合成生物学的工程范式：JCVI-syn3.0（531 kb、473 基因）经全合成与非必需基因敲除迭代获得，是当前最小独立生命基因组——定义维持生命的基因基线。基因线路以标准装置组装：启动子-RBS-ORF-终止子的定量表达单元（BioBrick 标准化接口），拨动开关与阻遏振荡器（2000 年双里程碑）确立可预测设计的工程范式——前者实现双稳态记忆，后者输出周期性报告基因表达。应用标杆：酵母青蒿酸合成途径工程将抗疟药青蒿素前体产能提升百倍、改变药物供应链；Sc2.0 与密码子重定义持续推进人工基因组前沿。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch12-s1': [
    {
      src: '/images/bio/drawn/mb-ch12-s1-oncogene-discovery.svg',
      caption:
        '癌基因概念的百年确立：1911 年 Rous 发现首个肿瘤病毒（鸡肉瘤病毒 RSV，逆转录病毒属）。温度敏感突变与缺失突变实验将 RSV 的转化基因 src 与病毒复制基因分离——ts 突变体高温下转化表型消失而复制正常。Varmus 与 Bishop 以分子杂交证明 v-src 源自宿主 c-src（1989 年诺奖），确立原癌基因概念：正常基因被劫持即成癌基因。v-src 缺失 Tyr527 自抑制位点而组成性激活酪氨酸激酶活性；ALV 前病毒插入 c-myc 旁是插入激活路线的代表；DNA 肿瘤病毒则经 SV40 大 T、HPV E6/E7 失活 p53/Rb 致癌。',
      credit: DRAWN_CREDIT,
    },
  ],

  'molecular-biology-ch1-s1': [
    {
      src: '/images/bio/drawn/mb-ch1-s1-gene-concept-split-gene.svg',
      caption:
        '基因概念的历史演进：孟德尔遗传因子（1865）→ Morgan 基因学说（连锁互换，果蝇实验）→ Beadle-Tatum 一个基因一种酶（链孢霉，1958 诺奖）→ Benzer 顺反子测验（T4 rII，基因内部存在重组单元）→ 1977 年断裂基因的发现——Brover 与 Sharp/Roberts 两组电镜下观察到 mRNA 与 DNA 杂交后内含子区段形成 R 环 loops，证明真核基因是外显子与内含子相间排列的断裂结构（1993 诺奖）。顺反测验确立了「基因=顺反子=一个功能单位」的操作定义，而断裂基因则把单位细化为外显子编码区。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch1-s2': [
    {
      src: '/images/bio/drawn/mb-ch1-s2-c-value-paradox.svg',
      caption:
        'C 值悖论与基因组结构分野：C 值（单倍体基因组 DNA 含量）与生物复杂度不成比例——肺鱼基因组约 10¹¹ bp，是人类（3.1×10⁹ bp）的 30 余倍，两栖类普遍大于哺乳类。结构对比：原核基因组紧凑（操纵子串联合，重复序列少、非编码区 <15%）；真核基因组庞大——含断裂基因（人类外显子仅占约 1.5%）、大量重复序列与基因间区。人基因组中编码蛋白基因约 2 万个，与预期严重背离，揭示了「复杂度由调控与可变剪接决定」的范式转变。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch1-s3': [
    {
      src: '/images/bio/drawn/mb-ch1-s3-cot-satellite-dna.svg',
      caption:
        'Cot 曲线解构人基因组 DNA 复杂度：复性动力学按 Cot₁/₂ 把总 DNA 拆为三类组分——单一序列约 45%～50%、中度重复 25%～30%（rRNA/tRNA 基因簇与 LINE）、高度重复 10%～15%。卫星 DNA 在密度梯度离心时形成独立小峰（主带之外），按重复单位长度分级：大卫星（着丝粒 α 卫星 171 bp）、小卫星（6～25 bp，端粒相关）与微卫星（1～6 bp，STR 法医标记）——重复序列的丰度正是 C 值悖论的主因，也造就了基因组的高度可变指纹。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch2-s1': [
    {
      src: '/images/bio/drawn/mb-ch2-s1-meselson-stahl.svg',
      caption:
        'Meselson-Stahl 实验证实半保留复制（1958）：大肠杆菌先在 ¹⁵NH₄Cl（重氮）中培养十余代使 DNA 双链全部标记为重密度，再转移至 ¹⁴N 轻介质——定时取样提取 DNA 于 CsCl 密度梯度离心。紫外吸收照片显示：转移后第 1 代只出现一条中间密度带（杂合双链 ¹⁵N/¹⁴N），第 2 代中间带与轻带（¹⁴N/¹⁴N）之比约 1:1——这一分布唯一符合半保留复制预期；全保留模型预测始终只有重带+轻带两条分离带，分散模型预测密度连续渐变，均被排除。「最美的生物学实验」由此确立双链分离-各自为模板的复制范式。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch2-s2': [
    {
      src: '/images/bio/drawn/mb-ch2-s2-origin-theta-rolling-dloop.svg',
      caption:
        '复制起点与三种复制方式：大肠杆菌 oriC 长 245 bp，含 5 个 DnaA 盒与 3 个 AT 富集的 DUE 元件——DnaA 蛋白 ATP 依赖聚合使双链在 DUE 处解链，装载 DnaB 解旋酶后双向延伸。θ 型（theta）复制见于大肠杆菌环状染色体（电镜下 θ 形中间体）；滚动环复制为 λ 噬菌体/M13/F 质粒策略——在一条链切口后以另一条环链为模板滚出新生链，可连续产多拷贝基因组；D 环复制发生在线粒体——两条链起点错位，先合成重链置换出轻链单环 D 环。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch2-s3': [
    {
      src: '/images/bio/drawn/mb-ch2-s3-dna-polymerases.svg',
      caption:
        '大肠杆菌 DNA 聚合酶体系分工：所有 DNA pol 共性——需模板与带 3′-OH 的引物、仅 5′→3′ 聚合、多数具 3′→5′ 外切校对。pol I（928 aa）经蛋白酶切得 Klenow 片段（聚合+校对活性），体内主司修复与切除 RNA 引物（5′→3′ 外切活性支撑切口平移，也是缺口平移标记探针的技术原理）；pol II 参与 SOS 修复；pol III 全酶才是复制主体——10 亚基组装，β 滑动夹（β₂ 环箍夹住 DNA 使聚合酶不脱落，持续合成力提高千倍）、τ 亚基连接双核心同步合成前导链与后随链。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch2-s5': [
    {
      src: '/images/bio/drawn/mb-ch2-s5-fidelity-licensing-telomere.svg',
      caption:
        '复制的忠实性与真核复制调控：三层纠错叠加——聚合酶碱基选择（~10⁻⁵）→ 3′→5′ 校对（再降两个数量级）→错配修复 MMR（MutS/MutL 识别新链暂未甲基化的时差）——总错误率压至 10⁻⁹～10⁻¹⁰/碱基。真核以「复制许可」保证一周期一次：ORC 常驻起点，G1 期 Cdc6-Cdt1 加载 MCM2-7 解旋酶，S 期 CDK 激活方启动且不再重复装载。末端复制问题——后随链末端 RNA 引物移除后无法填补——由端粒酶（自带 RNA 模板的逆转录酶）以重复序列延伸 3′ 端补偿。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch3-s1': [
    {
      src: '/images/bio/drawn/mb-ch3-s1-dna-damage-types.svg',
      caption:
        'DNA 损伤的类型学：自发损伤源于化学本底——脱嘌呤（每天每细胞数千次嘌呤糖苷键水解）、脱氨（C→U、5mC→T 导致转换突变）、氧化（8-oxoG 与 A 错配）与烷化（O⁶-meG 与 T 配对）；环境因素按作用几何分类——UV 254 nm 使相邻嘧啶形成环丁烷二聚体与 6-4 光产物（扭曲螺旋）、电离辐射致单/双链断裂、溴化乙锭等嵌入剂造成移码、丝裂霉素 C 交联双链。概念要害：损伤是结构异常（多可修复），突变是复制拷贝后被「固定」的序列改变（不可逆）——两者因果相连。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch3-s2': [
    {
      src: '/images/bio/drawn/mb-ch3-s2-repair-pathways-sos.svg',
      caption:
        'DNA 修复途径全景：直接逆转最快——光裂合酶结合 CPD 借可见光拆开二聚体，AGT/O⁶-烷基鸟嘌呤转移酶一次性自杀性摘除烷基。碱基切除修复（BER）切小损伤：DNA 糖苷酶识别异常碱基→AP 位点→AP 内切酶切口→pol β 填补→连接酶封口。核苷酸切除修复（NER）切 12～32 nt 大片段：大肠杆菌 UvrABC，人类 XP 蛋白 + TFIIH 兼任转录因子，分全基因组扫描（GG-NER）与转录偶联（TC-NER）两型。SOS 反应为最后手段——RecA 感知单链缺口自切割 LexA 阻遏物，诱导 pol V 等易错跨损伤聚合酶填补缺口，以突变换存活。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch3-s4': [
    {
      src: '/images/bio/drawn/mb-ch3-s4-sitespecific-recombination-transposons.svg',
      caption:
        '位点特异性重组与转座子：λ 噬菌体整合是经典模型——Int 整合酶催化 attP×attB 重组为 attL×attR（无新链合成，由 15 bp 同源核心区决定交汇），IHF 弯折 DNA 辅助，Xis 逆转方向实现切离。转座子两大家族：DNA 转座子走「切下-粘贴」（IS 元件两端反向重复+转座酶；Tn10 复合转座子携带抗性基因；Tn3 复制型先共整合后解离）；逆转座子走「复制-粘贴」经由 RNA 中间体——LINE-1 自主逆转录（占人基因组 17%）与非自主的 Alu（10%）借助 L1 的机器扩增，正是基因组膨大的推手。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch4-s1': [
    {
      src: '/images/bio/drawn/mb-ch4-s1-prokaryotic-rnap-promoter.svg',
      caption:
        '原核 RNA 聚合酶与启动子结构：核心酶 α₂ββ′ω（约 400 kDa）催化延伸通用，加入 σ⁷⁰ 因子组成全酶方能特异识别启动子起始转录——σ 因子的 region 2.4/4.2 分别读 -10 与 -35 元件，起始后释放（σ 循环）。启动子由分散短元件构成：-35 区 TTGACA（识别）、间隔 17±1 bp（使 DNA 螺旋整圈回转、σ 同时触及两区）、-10 区 TATAAT（Pribnow 盒，熔解起点）——元件与共有序列的一致度决定启动子强度，UP 元件（α-CTD 结合）可再增强数倍。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch4-s3': [
    {
      src: '/images/bio/drawn/mb-ch4-s3-polymerase-1-2-3.svg',
      caption:
        '真核三类细胞核 RNA 聚合酶按产物分工：pol I 居核仁，转录 45S pre-rRNA（成熟为 28S/5.8S/18S）；pol II 转录 pre-mRNA 与大多数 snRNA——最大亚基 CTD 含 YSPTSPS 七肽重复 52 次，其磷酸化状态编排转录-加工偶联；pol III 转录短 RNA（tRNA、5S rRNA、U6 snRNA 等）。药理学鉴定三联：对 α-鹅膏蕈碱的敏感性依次为不敏感（pol I）、极敏感（pol II，10⁻⁸～10⁻⁹ M 即抑制）、中度敏感（pol III）——这一毒性梯度正是三类酶的经典判据。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch4-s4': [
    {
      src: '/images/bio/drawn/mb-ch4-s4-three-promoters-pic.svg',
      caption:
        '真核三类启动子与通用转录因子：pol I 启动子由上游控制元件（UCE）与核心元件组成，UBF 弯曲 DNA 后 SL1（含 TBP）就位；pol II 启动子模块化——TATA 盒（TBP 结合、熔解起点）、Inr（起始子）、BRE（TFIIB 识别）、DPE（下游启动子元件）按基因自由组合；pol III 启动子多为基因内部型（tRNA 的 A/B 盒、5S 的 C 盒）或外部型（TATA-PSE-OCT）。pre-initiation complex 组装次序：TBP→TFIIA→TFIIB→pol II/TFIIF→TFIIE→TFIIH——TFIIH 的 XPB 解旋酶打开双链启动转录。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch4-s5': [
    {
      src: '/images/bio/drawn/mb-ch4-s5-ctd-phosphorylation-pausing.svg',
      caption:
        'Pol II CTD 磷酸化编码的延伸调控：CTD 的 YSPTSPS 重复可在 Ser5 与 Ser2 分别磷酸化——Ser5-P（由 TFIIH 的 CDK7 标记）发生在起始早期，招募加帽酶完成 5′ m⁷G 帽；随后 NELF/DSIF 使 pol II 在启动子近端 20～60 nt 处暂停（启动子近端暂停为普遍现象）。P-TEFb（CDK9+Cyclin T）磷酸化 Ser2 并修饰 DSIF/NELF 解除暂停——Ser2-P 标志高效延伸并招募 3′ 加工机器。HIV 的 Tat 蛋白劫持此机制：经 TAR RNA 结构直接招募 P-TEFb 到病毒转录体，强力解除暂停实现反式激活。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch5-s1': [
    {
      src: '/images/bio/drawn/mb-ch5-s1-capping-polyadenylation.svg',
      caption:
        'mRNA 5′ 加帽与 3′ 多聚腺苷酸化：加帽经三步酶促——RNA 三磷酸酶切去 γ 磷酸→鸟苷酰转移酶以 GMP 置换形成 5′→5′ 三磷酸桥→甲基转移酶对鸟嘌呤 N7 甲基化得 cap 0；再经 2′-O 位甲基化升级为 cap 1/cap 2。帽结构保护 mRNA 免遭 5′ 外切、协同 eIF4E 起始翻译并影响剪接与出核。3′ 端加工：CPSF 识别 AAUAAA、CstF 结合下游 GU-rich 元件，在两者间的 CA 位点切割后，PAP（poly(A) 聚合酶）受 PABPN1 刺激延伸约 200 nt 的 poly(A) 尾——尾长与稳定性、翻译效率正相关。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch5-s3': [
    {
      src: '/images/bio/drawn/mb-ch5-s3-alternative-trans-splicing.svg',
      caption:
        '选择性剪接的五种模式与反式剪接：同一 pre-mRNA 经外显子跳跃、可变 5′/3′ 剪接位点、互斥外显子、内含子保留与可变 poly(A) 五种模式产出不同 mRNA——人类约 95% 的多外显子基因发生选择性剪接（果蝇 Dscam 基因理论组合逾万种）。调控由 SR 蛋白（结合 ESE 正调）与 hnRNP（结合 ESS 负调）拮抗完成，组织特异性因子决定模式选择。反式剪接把不同 RNA 分子连接：锥虫以 39 nt 的剪接前导 SL 加到每个 mRNA 5′ 端（解决多顺反子表达），线虫 SL2 专门衔接操纵子式排列的基因。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch5-s4': [
    {
      src: '/images/bio/drawn/mb-ch5-s4-ribozymes-rna-editing.svg',
      caption:
        '核酶与 RNA 编辑——RNA 既是信息也是催化剂：I 型内含子折叠出催化核心，以外源鸟苷酸的 3′-OH 发动转酯；II 型内含子用内部腺苷酸 A 攻击形成套索（lariat）——与剪接体的催化机制同源，支持「剪接体源自 II 型内含子」的演化推断。RNase P 的 M1 RNA 单独催化 tRNA 前体成熟，锤头状核酶依赖 Mg²⁺ 的三维排布完成切割。RNA 编辑改写序列本身：锥虫动基体 RNA 由 gRNA 指导 U 的插入/删除；后生动物 ADAR 将特定 A 脱氨为 I（读作 G）——谷氨酸受体 B 亚基的 Q/R 位点编辑改变通道钙通透性。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch5-s5': [
    {
      src: '/images/bio/drawn/mb-ch5-s5-rrna-trna-export.svg',
      caption:
        'rRNA/tRNA 加工与 mRNA 出核转运：原核 30S pre-rRNA 由 RNase III/E/G 切分为 16S/23S/5S；真核 45S 前体在核仁加工——C/D box snoRNP 指导 2′-O-甲基化、H/ACA snoRNP 指导假尿苷化，再修剪为 28S/5.8S/18S。tRNA 成熟五部曲：5′ 端 RNase P（核酶）切除前导→3′ 端 RNase Z→CCA 添加酶补尾巴→碱基修饰（约 10% 碱基被修饰）→正确折叠为 L 形。成熟 mRNA 以 mRNP 形式输出：TREX 复合体在转录-剪接过程中装载，NXF1 受体携 mRNP 穿过核孔的 FG 重复凝胶相。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch6-s1': [
    {
      src: '/images/bio/drawn/mb-ch6-s1-code-breaking.svg',
      caption:
        '遗传密码的破译路线（1961–1966）：Nirenberg 无细胞体系加 poly(U) 只合成多聚苯丙氨酸——确立 UUU=Phe 的第一块拼图；随后随机共聚物（U/A 比例已知）按概率推算各氨基酸对应密码子组成。Khorana 用碱基序列确定的重复共聚物（如 UCUCUC…）译出 Ser-Leu 交替，锁定相位与重复阅读框；三核苷酸 MINI 密码子 + tRNA 结合实验（核糖体保护分析）最终把 61 个有义密码子与 3 个终止密码子逐一指认——AUG 兼作起始，UAA/UAG/UGA 终止。Holley、Khorana、Nirenberg 因破译获 1968 年诺奖。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch6-s2': [
    {
      src: '/images/bio/drawn/mb-ch6-s2-degeneracy-wobble-exceptions.svg',
      caption:
        '密码子简并性与摆动配对：同义密码子多在第三位不同（Leu 6 个、Ser 6 个、Gly 4 个密码子）——密码子表按第三位碱基分列的组织原则即简并的几何呈现，突变第三位多为同义突变的缓冲设计。Crick 摆动假说：反密码子 5′ 位（对应密码子第 3 位）允许非标准配对——I（次黄嘌呤）可读 U/C/A（一读三），G 读 U/C，U 读 A/G——故 40 余种 tRNA 即可覆盖全部密码子（人线粒体仅 22 种）。系统例外集中于线粒体：UGA→Trp、AUA→Met、AGA/AGG→终止；核基因组的功能性再定义：UGA→硒代半胱氨酸（需 SECIS 元件）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch6-s3': [
    {
      src: '/images/bio/drawn/mb-ch6-s3-trna-aars-double-sieve.svg',
      caption:
        'tRNA 结构与氨酰-tRNA 合成酶的双重校对：tRNA 二级结构为三叶草形（D 臂、反密码子臂、TΨC 臂、可变臂与受体臂），三级折叠成倒 L 形——3′-CCA 接受端与反密码子分居 L 的两端，相距约 7 nm，恰好横跨核糖体的 A/P 位。aaRS 两步催化：氨基酸+ATP→aa-AMP（腺苷酸化）→转移至 tRNA 末端（I 类酶作用于 2′-OH，II 类作用于 3′-OH）。校对用「双筛」：结合筛排除过大侧链，水解筛（编辑位点）切除误活化的相似氨基酸——IleRS 对 Val 的误入率由 10⁻² 降至 10⁻⁵ 以下。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch6-s5': [
    {
      src: '/images/bio/drawn/mb-ch6-s5-targeting-antibiotic-targets.svg',
      caption:
        '蛋白质靶向转运与抗生素作用靶点：ER 共翻译转运轴心（Blobel 信号假说，1999 诺奖）——信号肽（15～30 aa 疏水核心+带正电 N 端）被 SRP 识别并暂停翻译，SRP 与受体各水解 1 个 GTP 把核糖体递给 Sec61 通道，新生链入腔。翻译后路线：线粒体经 TOM/TIM 复合体（Hsp70 拉动），过氧化物酶体靠 PTS1（C 端 SKL 信号），细胞核蛋白经 NLS 入核。抗生素靶点对照——链霉素致 30S 错读、四环素阻 aa-tRNA 进 A 位、氯霉素抑制肽酰转移酶中心、红霉素堵 50S 退出通道、嘌呤霉素模拟 aa-tRNA 提前释放新生肽。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch12-s2': [
    {
      src: '/images/bio/drawn/mb-ch12-s2-oncogene-activation-modes.svg',
      caption:
        '原癌基因的分类与四大激活机制：按功能层级排列——生长因子（SIS/PDGF）、受体酪氨酸激酶（HER2/EGFR）、信号转导（src/abl/Ras）、转录因子（myc）与细胞周期（cyclin D1/CDK4）。激活四模式各配典型病例：①点突变——Ras G12V 使 GTP 水解锁定开启态（约 30% 人类肿瘤）；②基因扩增——MYCN（神经母细胞瘤双微体）、HER2（乳腺癌）；③染色体易位——费城染色体 t(9;22) 的 BCR-ABL 融合激酶（CML），伊马替尼靶向 ATP 口袋使五年生存率超 90%；④病毒 LTR 插入激活 c-mc——四条路线殊途同归：使生长信号失去可调控性。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch12-s3': [
    {
      src: '/images/bio/drawn/mb-ch12-s3-tumor-suppressors-rb-apc-brca.svg',
      caption:
        '抑癌基因的负调控逻辑：Knudson 视网膜母细胞瘤两次打击假说（1971）——家系病例遗传一个突变等位基因，体细胞再失第二个即发病；RB1 于 1986 年克隆证实。Rb 蛋白低磷酸化态扣押 E2F 封锁 G1/S；cyclin D-CDK4/6 磷酸化级联释放 E2F——HPV E7 直接劫持 Rb 正是该逻辑的病毒版。APC 失活（结直肠癌起始事件）使 β-catenin 破坏复合体失效、Wnt 信号持续入核；BRCA1/2 守护同源重组修复——缺陷细胞依赖易错修复，却可被 PARP 抑制剂合成致死选择性杀伤（BRCA 突变携带者乳腺癌终身风险 40%～80%）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch12-s4': [
    {
      src: '/images/bio/drawn/mb-ch12-s4-p53-network-multistep.svg',
      caption:
        'p53 网络与多步癌变模型：稳态下 MDM2 泛素连接酶与 p53 构成负反馈环（p53 转录 MDM2，MDM2 降解 p53），维持 p53 低稳态。DNA 损伤激活 ATM/ATR→Chk1/2 磷酸化 p53 阻断 MDM2 结合；癌基因异常增殖经 p14^ARF 抑制 MDM2——两路输入稳定 p53。输出三分支依损伤程度分级：p21 引起 G1 阻滞、GADD45 支持修复、Bax/PUMA 触发凋亡——p53 因而被称「基因组卫士」（半数以上肿瘤失活）。结直肠癌克隆演化序列 APC 失活→KRAS 激活→18q 缺失→TP53 突变，历经 3～8 个驱动突变，CIN/MSI 作变异放大器加速累积。',
      credit: DRAWN_CREDIT,
    },
  ],
  'molecular-biology-ch12-s5': [
    {
      src: '/images/bio/drawn/mb-ch12-s5-telomere-tme-frontier.svg',
      caption:
        '端粒、肿瘤微环境与治疗前沿：端粒逐代缩短（每次复制丢失 50～200 bp）——缩短到临界触发衰老（第一道屏障），极端缩短致染色体融合引发危机；约 85%～90% 肿瘤经 TERT 启动子突变等重激活端粒酶获得永生化，其余走 ALT 途径（端粒重组延伸）。Warburg 效应——有氧糖酵解（FDG-PET 显像基础）把葡萄糖导向合成代谢，是增殖细胞的代谢重编程。VEGF-HIF 轴驱动血管生成（缺氧诱导）；免疫治疗开启新纪元——CTLA-4 与 PD-1 检查点抑制剂解除 T 细胞刹车（2018 诺奖），治疗范式由细胞毒→靶向→免疫逐级演进。',
      credit: DRAWN_CREDIT,
    },
  ],
}
