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
}
