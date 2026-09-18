# Task 32 系列简报：分子生物学教材重建（朱玉贤体系 · 12 章 48 节）

你是 BioScholar 的教材编写代理。项目根目录 /home/z/my-project。
目标学科：**分子生物学**（subjectId: `molecular-biology`，参照朱玉贤《现代分子生物学》第5版、Weaver、Watson）。
你的具体章号范围、quiz 题号区间与 glossary id 区间见任务提示。

## 产出文件（按章立即逐个写出）
1. `src/data/subjects/mb/ch{N}.ts`（导出 `mbCh{N}: Chapter`）——每章 4 节
2. `src/data/quiz/molecular-biology-a{X}.ts`（导出 `molecularBiologyQuizA{X}: QuizQuestion[]`，题号见任务提示，每章 5 题）
3. `src/data/glossary-molecular-biology-a{X}.ts`（导出 `molecularBiologyGlossaryA{X}: GlossaryTerm[]`，id 区间见任务提示）

subjectId 直接写 'molecular-biology' 字面量。

## 章节大纲（严格照此）
### 第 1 章 分子生物学绪论（4 节）
- s1 基因概念的发展（从 Mendel 因子到 Morgan 基因定位、Beadle-Tatum 一基因一酶 1958、Benzer 顺反子、现代基因定义）
- s2 中心法则与信息流（Crick 1958/1970、复制转录翻译逆转录、例外与补充 RNA 复制/编辑）
- s3 基因组概览（C 值悖论、原核 vs 真核基因组特征、基因密度与非编码比例、人类基因组约 2 万蛋白编码基因）
- s4 分子生物学研究范式与技术革命（模式生物、分子克隆革命史、基因组时代、后基因组组学）
### 第 2 章 染色体、染色质与基因组结构（4 节）
- s1 核小体（组蛋白八聚体、147 bp 缠绕、连接组蛋白 H1、核小体定位）
- s2 染色质的层级包装（30 nm 纤维争议、环与支架、压缩比约 10⁴ 量级）
- s3 常染色质与异染色质（异染色质特征 PEV 与位置效应、HP1/Suv39、结构性 vs 兼性异染色质、巴氏小体与剂量补偿）
- s4 染色体结构与核型（着丝粒与动粒、端粒结构 TTAGGG 与 Shelterin、核型分析与染色体病、重复序列家族）
### 第 3 章 DNA 复制（4 节）
- s1 复制的基本规律（半保留 Meselson-Stahl 1958、双向与半不连续、复制叉结构）
- s2 复制酶系（DNA Pol III 全酶与 β 滑动夹、Pol I 切口平移与引物去除、连接酶、解旋酶 SSB 拓扑异构酶）
- s3 原核复制过程（E. coli oriC 起始 DnaA、引发体、终止与 decatenation、滚环复制噬菌体）
- s4 真核复制与端粒（多起点与复制时相、Pol δ/ε 分工、端粒酶与 Blackburn-Greider 2009 诺奖、复制检验点）
### 第 4 章 DNA 损伤、修复与突变（4 节）
- s1 损伤的类型与来源（自发脱氨/氧化/烷化、UV 嘧啶二聚体、电离辐射 DSB、交联）
- s2 直接修复与切除修复（光复活酶、BER 糖苷酶、NER 全基因组 vs 转录偶联 TCR、XP 病）
- s3 重组修复与易错修复（同源重组修复 DSB、非同源末端连接 NHEJ、SOS 应答 RecA-LexA 诱导、易错聚合酶 V）
- s4 突变与疾病（点突变类型与后果框移/无义/错义/沉默、三联体扩展病亨廷顿、突变与癌变、检测 Ames 试验）
### 第 5 章 转录（4 节）
- s1 RNA 聚合酶（原核全酶 σ 因子与核心酶、真核 Pol I/II/III 分工与 CTD）
- s2 原核转录过程（启动子 -10/-35 区、起始封闭开放复合物、ρ 依赖与非依赖终止发夹）
- s3 真核转录起始（Pol II 启动子元件 TATA/Inr/DPE、通用转录因子 TFII 组装、介导体与增强子沟通）
- s4 转录延伸与调控靶点（延伸暂停 P-TEFb、CTD 磷酸化码、转录泡 R-loop、抗生素利福平靶点）
### 第 6 章 转录后加工与遗传密码（4 节）
- s1 mRNA 前体加工（5' 帽三步、3' 多聚尾 CPSF/PAP、剪接体两步转酯、可变剪接）
- s2 RNA 种类的加工（tRNA 酶切修饰与 CCA、rRNA 前体加工与核仁、RNA 编辑与化学修饰 m⁶A）
- s3 遗传密码的破译（Nirenberg-Matthaei poly(U)、Khorana 重复共聚物、三核苷酸结合实验、1966 密码表收官）
- s4 密码的特性与偏离（简并与摆动 Crick、通用性及线粒体偏离、起始 AUG/终止密码、Sec/Pyl 第 21/22 种氨基酸）
### 第 7 章 翻译与蛋白质靶向（4 节）
- s1 核糖体与 tRNA 装载（70S/80S 结构、氨酰 tRNA 合成酶双筛校对、起始 tRNA fMet/Met-tRNAi）
- s2 原核翻译（30S 起始组装 SD 配对、三元复合物与延伸循环 EF-Tu/G、肽酰转移酶中心、释放因子）
- s3 真核翻译（eIF4F 帽识别与扫描模型、IRES、延伸与终止差异、嘌呤霉素抗生素机制）
- s4 蛋白质分选与运输（信号肽与 SRP、Sec 转位、线粒体 TIM/TOM 输入、过氧化物酶体 PTS、核输入 NLS）
### 第 8 章 原核基因表达调控（4 节）
- s1 操纵子模型（Jacob-Monod 1961/1965 诺奖、负控/正控概念、顺式作用元件与反式作用因子）
- s2 乳糖操纵子（lacI 阻遏、诱导物别乳糖、CAP-cAMP 正控、葡萄糖效应、PKU 时代经典实验 lacZ）
- s3 色氨酸操纵子与衰减（辅阻遏 tRNA 负荷、前导肽与 3:4 终止发夹衰减机制、敏感度分级）
- s4 其他调控层次（sRNA Spot42/micF、双组分系统、核糖开关、严紧反应 ppGpp 与 rRNA 合成）
### 第 9 章 真核基因表达调控（4 节）
- s1 转录因子（螺旋-转角-螺旋/锌指/亮氨酸拉链 DNA 结合域、激活域、组合调控与增强子体）
- s2 表观遗传调控（DNA 甲基化 CpG、组蛋白修饰密码 H3K4/K27、染色质重塑 SWI/SNF、印记基因）
- s3 转录后调控（可变剪接调控因子、mRNA 稳定性与 AU 富集元件、miRNA 加工与 RISC 机制、siRNA 与 RNAi Fire-Mello 2006 诺奖）
- s4 翻译与翻译后调控（uORF 与铁反应元件 IRP-IRE、泛素-蛋白酶体途径 Hershko-Ciechanover-Rose 2004 诺奖、SUMO 化）
### 第 10 章 分子生物学技术（4 节）
- s1 电泳与杂交技术（琼脂糖/SDS-PAGE、Southern/Northern/Western 三大印迹对比表、探针标记）
- s2 PCR 技术（Mullis 1983/1993 诺奖、三步循环原理、Taq 酶、qPCR 与 SYBR/探针法、RT-PCR 与应用）
- s3 基因克隆与载体（限制酶与连接、质粒载体元件、文库 cDNA vs 基因组、蓝白斑筛选、Gateway/Gibson 现代组装）
- s4 测序技术（Sanger 双脱氧与自动化、焦测序 454、二代 Illumina 边合成边测序、三代长读、一代 vs NGS 读长通量对比表）
### 第 11 章 基因组学与功能基因组学（4 节）
- s1 基因组计划（HGP 1990-2003 里程碑、测序分级策略霰弹枪 vs 克隆步移、模式生物基因组）
- s2 组学技术版图（转录组/蛋白质组/代谢组/表观组对比表、微阵列 vs RNA-seq、单细胞组学）
- s3 功能基因组学（基因敲除与条件敲除 Cre-lox、CRISPR-Cas9 Doudna-Charpentier 2020 诺奖、RNAi 筛选、GWAS）
- s4 基因诊断与基因治疗（PCR 诊断与分子病理、ASO 与反义寡核苷酸、AAV 基因治疗 Luxturna、mRNA 疫苗、伦理监管）
### 第 12 章 细胞信号转导与癌分子生物学（4 节）
- s1 信号转导总论（信号分子分类、受体类型膜/核、第二信使 cAMP/Ca²⁺/IP3/DAG、信号网络与串话）
- s2 G 蛋白偶联受体通路（七跨膜受体、Gs/Gi/Gq、腺苷酸环化酶-PKA、PLCβ-IP3-DAG-PKC、GPCR 药物占比）
- s3 受体酪氨酸激酶与下游（RTK 结合二聚化、Ras-MAPK 级联、PI3K-AKT-mTOR 代谢生长通路、JAK-STAT）
- s4 癌基因与抑癌基因（原癌基因激活方式、Rb 与 p53 调控网络、多步癌变结直肠模型、靶向治疗格列卫/曲妥珠机制）

## 内容硬性要求
（与生物化学简报相同）每节 2600–3600 字符、≥4 个 ## H2、每章 1–2 张表格；正文禁反引号/${/H3+/HTML/emoji/代码块/链接/制表符；keyPoints 3–6、terms 3–8；summary ≥80 字、keywords ≥4；术语首现英文标注重点加粗；数值教材口径。每章 5 题（single 3-4/tf 1/mult 1，难度 1:3:1，解析 ≥80 字）。术语 5 条 definition ≥80 字。
写完立即运行：bun run scripts/validate-chapters.ts molecular-biology src/data/subjects/mb/ch{章}.ts；worklog 追加（Task ID 见任务提示）。
风格参考：Read src/data/subjects/neuro/ch1.ts 前 60 行。
