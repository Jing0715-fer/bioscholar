// ============================================================
// BioScholar 分子生物学术语词典 - 批次 A4（第 10–12 章）
// 5 条（g-36 ~ g-40），subjectId 均为 molecular-biology
// 类别分布：核酸技术 1 / 基因工程 1 / 基因编辑 1 / 信号转导 1 / 癌生物学 1
// 依据：朱玉贤《现代分子生物学》（第5版）、Weaver《Molecular Biology》、
// Watson《Molecular Biology of the Gene》第 10–12 章正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const molecularBiologyGlossaryA4: GlossaryTerm[] = [
  // ---------- 核酸技术（1 条） ----------
  {
    id: 'g-36',
    term: '聚合酶链式反应',
    english: 'polymerase chain reaction',
    abbreviation: 'PCR',
    subjectId: 'molecular-biology',
    category: '核酸技术',
    definition:
      '缪里斯于 1983 年构思、1985 年首发论文的体外 DNA 扩增技术（1993 年诺贝尔化学奖），能把一个分子放大十亿倍。体系五要素为模板、一对引物、耐热聚合酶、四种 dNTP 与含 Mg²⁺ 的缓冲液；每循环三步——94–95 °C 变性、50–65 °C 退火（常设于引物 Tm 下方约 5 °C）、72 °C 延伸（Taq 约 1 kb/min），产物按 2 的 n 次方指数累积，30 轮理论放大逾十亿倍，特异性几乎全由引物决定。1986 年改用嗜热水生菌的 Taq 聚合酶使循环自动化；Taq 缺 3′ 到 5′ 校读、错误率约十万分之一，产物 3′ 端突出腺苷恰被 TA 克隆利用。衍生家族包括 RT-PCR（先反转录）、qPCR（Ct 值定量，动态范围逾八个数量级）、巢式、多重与数字 PCR，渗入产前诊断、病原鉴定、法医分型与转基因检测各领域。',
  },
  // ---------- 基因工程（1 条） ----------
  {
    id: 'g-37',
    term: '质粒载体',
    english: 'plasmid vector',
    subjectId: 'molecular-biology',
    category: '基因工程',
    definition:
      '把外源基因搬入宿主细胞并进行无性繁殖的工程化环状 DNA，三大必需元件为复制起始点（ori，决定拷贝数与宿主范围：pUC 系列每细胞 500–700 份、pBR322 仅 15–20 份）、选择标记（如氨苄抗性基因编码 β 内酰胺酶）与多克隆位点（数十种限制酶切位密集排布于一处的插入菜单）。蓝白斑筛选寄生于 lacZα 互补：插入破坏 α 肽则菌落白色、未重组为蓝色（平板加 IPTG 与 X-gal）。完整克隆周期分切、连、转、筛四步——双酶切保方向、T4 连接酶缝合（插入:载体摩尔比约 3:1）、42 °C 热休克转化（每微克可得 10⁸–10⁹ 转化子）、菌落 PCR 与测序核验。表达载体另加启动子、核糖体结合位点、纯化标签等控制件；容量按需升级至 λ 载体、柯斯质粒、BAC 与 YAC。',
  },
  // ---------- 基因编辑（1 条） ----------
  {
    id: 'g-38',
    term: 'CRISPR-Cas9',
    english: 'CRISPR-Cas9 system',
    subjectId: 'molecular-biology',
    category: '基因编辑',
    definition:
      '源自细菌与古菌获得性免疫的基因编辑系统：入侵噬菌体的短片段存入基因组间隔序列，再遇袭时 crRNA 引导核酸酶复仇。2012 年 Jinek、Doudna 与 Charpentier 在体外演示把 crRNA 与 tracrRNA 融合为单链向导 RNA（sgRNA）即可引导 Cas9 切割任意选定序列，Doudna 与 Charpentier 因此获 2020 年诺贝尔化学奖。机制分三步：Cas9-sgRNA 扫描 PAM（SpCas9 要求 NGG），引导序列与靶链配对形成 R 环，HNH 与 RuvC 两个结构域分别切两条链产生平端双链断裂；其后非同源末端连接随手粘合实现敲除，同源定向修复借供体模板写入精确序列。衍生工具降险增效：碱基编辑以失活 Cas9 拴脱氨酶免切双链完成 C→T 或 A→G，先导编辑以 Cas9-逆转录酶加 pegRNA 写入小片段；2023 年获批的镰状细胞病疗法标志其走上病床。',
  },
  // ---------- 信号转导（1 条） ----------
  {
    id: 'g-39',
    term: '受体酪氨酸激酶',
    english: 'receptor tyrosine kinase',
    abbreviation: 'RTK',
    subjectId: 'molecular-biology',
    category: '信号转导',
    definition:
      '生长因子的主接收站：单次跨膜，胞外配体结合域加胞内激酶域，人类 58 个成员分约 20 个亚家族（EGFR/HER、胰岛素受体、FGFR、PDGFR、VEGFR、Trk 等）。激活核心是配体诱导二聚化（胰岛素受体天生由二硫键连成二聚体）：两个激酶域互相磷酸化对方激活环使活性全开，再把 C 端尾部多个酪氨酸磷酸化为「停靠码头」——这些磷酸化酪氨酸不属于催化，而是被胞内约 110 个含 SH2 结构域（或 PTB）的蛋白按「pY 加下游三至五个残基」的语法识别。接头 GRB2-SOS 把 Ras 切到 GTP 态启动 Raf-MEK-ERK 三层级联；PI3K 产 PIP3 招募 AKT 经 mTORC1 管代谢与存活，PTEN 拮抗之。EGFR 突变驱动肺癌、HER2 扩增驱动乳腺癌，伊马替尼与曲妥珠单抗开创了针对这些接点的靶向治疗。',
  },
  // ---------- 癌生物学（1 条） ----------
  {
    id: 'g-40',
    term: '抑癌基因',
    english: 'tumor suppressor gene',
    subjectId: 'molecular-biology',
    category: '癌生物学',
    definition:
      '编码刹车、修复与哨兵蛋白、其失活促进癌变的基因，遗传逻辑与原癌基因镜像相反：细胞水平隐性，两份等位基因都要失活才见表型——诺德森 1971 年以视网膜母细胞瘤提出两次打击假说，1986 年 RB1 被克隆证实（遗传一份缺陷加体细胞杂合性缺失即发病）。两大枢纽：Rb 蛋白低磷酸化时结合 E2F 扣押 S 期基因，被 cyclin D-CDK4/6 磷酸化后释放 E2F 使细胞驶入 S 期；p53 作为「基因组卫士」经 ATM/ATR 与 Chk1/2 稳定，诱导 p21 令细胞停在 G1 修复损伤，损伤过重则经 BAX 与 PUMA 走凋亡，TP53 突变见于约一半人类肿瘤（胚系突变致 Li-Fraumeni 综合征）。守门基因（Rb、APC）控增殖，管家基因（BRCA1/2、错配修复基因）维护基因组完整；HPV 以 E7 降解 Rb、E6 加速 p53 降解实现双重打击，PARP 抑制剂则以合成致死专杀 BRCA 缺陷肿瘤。',
  },
]
