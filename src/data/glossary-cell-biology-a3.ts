// ============================================================
// BioScholar 细胞生物学术语词典 - 批次 A3（第 7–9 章）
// 5 条（g-51 ~ g-55），subjectId 均为 cell-biology
// 类别分布：信号转导 2 / 细胞周期 1 / 干细胞 2
// 依据：翟中和/丁明孝《细胞生物学》（第5版）、
// Alberts《Molecular Biology of the Cell》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const cellBiologyGlossaryA3: GlossaryTerm[] = [
  // ---------- 信号转导（2 条） ----------
  {
    id: 'g-51',
    term: 'G 蛋白偶联受体',
    english: 'G protein-coupled receptor',
    abbreviation: 'GPCR',
    subjectId: 'cell-biology',
    category: '信号转导',
    definition:
      '以七次跨膜 α 螺旋为共同骨架的最大膜受体家族，人类基因组编码约 800 个成员，涵盖视紫红质、嗅觉受体、多数神经递质与激素受体。配体结合使跨膜束变构，受体催化胞内侧三聚体 G 蛋白（Gs、Gi、Gq 等）上的 GDP-GTP 交换，分别激活腺苷酸环化酶-cAMP、抑制 cAMP 或经磷脂酶 Cβ 产生 IP3 与 DAG 等下游通路；其信号经 GRK 磷酸化与阻遏蛋白结合而脱敏内吞。β2 肾上腺素受体及其与 Gs 复合物的晶体结构解析获 2012 年诺贝尔化学奖，现今临床约三分之一的药物以 GPCR 为靶。',
  },
  {
    id: 'g-52',
    term: '第二信使',
    english: 'second messenger',
    subjectId: 'cell-biology',
    category: '信号转导',
    definition:
      '受体接受胞外信号后在细胞内产生的小分子扩散性中介物，负责把膜上的「第一信使」信息转换为胞内效应并实现级联放大。经典成员包括 Sutherland 1957 年发现的 cAMP（cGMP 与之同类，经腺苷酸与鸟苷酸环化酶合成）、磷脂酶 Cβ 水解 PIP2 产生的 IP3 与 DAG、作为普遍开关离子的 Ca²⁺ 以及气体分子一氧化氮。其共同特征是浓度可在数秒内跃升数十倍（如 cAMP 由约 10⁻⁸ M 升至 10⁻⁶ M），又能被磷酸二酯酶水解、重泵回库等机制迅速清除，浓度消长即信号的起止；咖啡因抑制磷酸二酯酶而延长 cAMP 信号是其著名药理注脚。',
  },
  // ---------- 细胞周期（1 条） ----------
  {
    id: 'g-53',
    term: '周期蛋白依赖性激酶',
    english: 'cyclin-dependent kinase',
    abbreviation: 'CDK',
    subjectId: 'cell-biology',
    category: '细胞周期',
    definition:
      '驱动细胞周期时相推进的丝氨酸/苏氨酸蛋白激酶家族，单体几无活性，必须与周期蛋白配对并经 CAK 磷酸化 T 环活化，又受 Wee1 的抑制性磷酸化与 Cdc25 去磷酸化以及 p21、p27、p16 等 CDK 抑制蛋白的多层调控。核心组合包括 CDK4/6-周期蛋白 D 启动 Rb 磷酸化释放 E2F、CDK2-周期蛋白 E 完成 G1/S 转换、CDK1-周期蛋白 B 即 Masui 与 Markert 发现的 MPF，触发有丝分裂的全部事件。周期蛋白经 APC/C 与 SCF 泛素连接酶送入蛋白酶体降解，使 CDK 活性按时相振荡、周期获得方向性；CDK4/6 抑制剂帕博西尼已用于激素受体阳性乳腺癌的治疗。',
  },
  // ---------- 干细胞（2 条） ----------
  {
    id: 'g-54',
    term: '诱导多能干细胞',
    english: 'induced pluripotent stem cell',
    abbreviation: 'iPS 细胞',
    subjectId: 'cell-biology',
    category: '干细胞',
    definition:
      '经体外重编程由成体体细胞逆转而来的多能性细胞。Yamanaka 团队 2006 年用逆转录病毒导入 Oct3/4、Sox2、Klf4 与 c-Myc 四因子，把小鼠成纤维细胞重编程为具胚胎干细胞特性的细胞系，效率约 0.01%–0.1%；重编程的实质是表观基因组的两波式擦除重写，限速步骤在多能性基因启动子的去甲基化，常残留偏向供体谱系的表观记忆。安全化策略包括仙台病毒、附加体质粒与 mRNA 等非整合递送及小分子化学重编程；iPS 已广泛用于疾病建模、药物筛选与毒性评估，2014 年起开展视网膜色素上皮等细胞治疗的临床试验，Gurdon 与 Yamanaka 因此获 2012 年诺贝尔生理学或医学奖。',
  },
  {
    id: 'g-55',
    term: '干细胞巢',
    english: 'stem cell niche',
    subjectId: 'cell-biology',
    category: '干细胞',
    definition:
      '维持干细胞自我更新与决定其命运的特定微环境，由 Schofield 于 1978 年提出：干细胞如「住在龛中的种子」，离开巢即走向分化。巢的成分包括锚定与滋养细胞、细胞外基质与可溶信号：造血巢分骨内膜成骨细胞巢与窦状隙血管巢，CAR 细胞高分泌的 CXCL12 经 CXCR4 锚定造血干细胞，膜结合型 SCF 经 c-Kit 供给存活信号，Wnt 与 Notch 参与自我更新维持；毛囊干细胞居隆突区受真皮乳头指令，肠隐窝干细胞以 Wnt 梯度为位置坐标。巢信号还决定干细胞对称或不对称分裂的模式，巢的缺陷可致造血衰竭，肿瘤干细胞同样依赖巢样微环境的支持。',
  },
]
