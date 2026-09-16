// ============================================================
// BioScholar 跨学科术语词典
// 覆盖四大学科：biochemistry / molecular-biology / cell-biology / biophysics
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

import { microGlossary } from './glossary-micro'

export const glossary: GlossaryTerm[] = [
  // ---------- 生物化学（g-001 ~ g-026） ----------
  {
    id: 'g-001',
    term: '三磷酸腺苷',
    english: 'adenosine triphosphate',
    abbreviation: 'ATP',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      '细胞能量的通用货币，由腺苷与三分子磷酸组成。标准条件下水解为 ADP + Pi 释放 −30.5 kJ/mol，细胞内实际约 −50 ~ −60 kJ/mol，驱动肌肉收缩、主动转运与生物合成等绝大多数需能过程。',
  },
  {
    id: 'g-002',
    term: '糖酵解',
    english: 'glycolysis',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '在细胞质中将一分子葡萄糖分解为两分子丙酮酸的代谢途径，经底物水平磷酸化净生成 2 个 ATP 与 2 个 NADH，是所有生物共有的最古老产能方式。',
  },
  {
    id: 'g-003',
    term: '三羧酸循环',
    english: 'citric acid cycle / Krebs cycle',
    abbreviation: 'TCA 循环',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '在线粒体基质中氧化乙酰辅酶 A 的环式代谢途径，每轮产生 3 个 NADH、1 个 FADH₂、1 个 GTP 并释放 2 个 CO₂，是糖、脂、蛋白质代谢的共同枢纽。',
  },
  {
    id: 'g-004',
    term: '氧化磷酸化',
    english: 'oxidative phosphorylation',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      '线粒体内膜上电子经呼吸链传给 O₂ 的同时把质子泵入膜间隙，质子回流经 ATP 合酶驱动 ATP 合成的过程，是细胞产能的主要方式。',
  },
  {
    id: 'g-005',
    term: '化学渗透假说',
    english: 'chemiosmotic hypothesis',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      'Peter Mitchell（1961，1978 年诺贝尔奖）提出：电子传递释放的能量先储存为跨膜质子电化学梯度（质子动力势），再由 ATP 合酶转化为 ATP 的化学能。',
  },
  {
    id: 'g-006',
    term: '电子传递链',
    english: 'electron transport chain',
    abbreviation: 'ETC',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      '线粒体内膜上由复合物 I–IV 与泛醌、细胞色素 c 组成的电子传递体系，电子从 NADH（E°′ = −0.32 V）流向 O₂（+0.816 V），总 ΔG°′ ≈ −219 kJ/mol，逐级释放能量用于泵送质子。',
  },
  {
    id: 'g-007',
    term: '米氏常数',
    english: 'Michaelis constant',
    abbreviation: 'Km',
    subjectId: 'biochemistry',
    category: '酶学',
    definition:
      '酶促反应速率达到最大反应速率一半时的底物浓度，等于解离速率与结合速率之比 (k₋₁+k_cat)/k₁，反映酶与底物的亲和力：Km 越小亲和力越高。',
  },
  {
    id: 'g-008',
    term: '米氏方程',
    english: 'Michaelis–Menten equation',
    subjectId: 'biochemistry',
    category: '酶学',
    definition:
      '描述酶促反应动力学的经典方程 v = V_max·[S]/(Km + [S])，假设酶–底物复合物快速平衡，是酶学定量分析与抑制剂分类的基石。',
  },
  {
    id: 'g-009',
    term: '酶活性中心',
    english: 'active site',
    subjectId: 'biochemistry',
    category: '酶学',
    definition:
      '酶分子上由少数氨基酸残基构成的、与底物结合并催化反应的凹穴，具有底物特异性（诱导契合）与催化高效性，常用 Km 与 k_cat 定量表征。',
  },
  {
    id: 'g-010',
    term: '竞争性抑制',
    english: 'competitive inhibition',
    subjectId: 'biochemistry',
    category: '酶学',
    definition:
      '抑制剂与底物竞争同一活性中心的抑制方式：表观 Km 增大而 V_max 不变，可被提高底物浓度逆转；经典药物如他汀类即 HMG-CoA 还原酶的竞争性抑制剂。',
  },
  {
    id: 'g-011',
    term: '别构效应',
    english: 'allosteric effect',
    subjectId: 'biochemistry',
    category: '调控',
    definition:
      '效应分子结合蛋白质调节位点（非活性中心）后经构象变化改变活性中心功能的现象，具有协同性，是血红蛋白氧合曲线呈 S 形与代谢反馈调控的分子基础。',
  },
  {
    id: 'g-012',
    term: '辅酶',
    english: 'coenzyme',
    subjectId: 'biochemistry',
    category: '酶学',
    definition:
      '与酶蛋白松驰结合、帮助传递电子/基团的小分子有机物（如 NAD⁺、FAD、辅酶 A），多数由维生素衍生，是酶催化功能不可缺少的组分。',
  },
  {
    id: 'g-013',
    term: '吉布斯自由能',
    english: 'Gibbs free energy',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      '等温等压下可用来做非体积功的能量 G = H − TS；ΔG < 0 的过程自发进行，ΔG = 0 时处于平衡。生物体系中 ATP 水解的负 ΔG 驱动一切吸能反应。',
  },
  {
    id: 'g-014',
    term: '脂肪酸 β-氧化',
    english: 'β-oxidation',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '在线粒体基质中从羧基端β碳原子开始、每轮切下 2 个碳（乙酰辅酶 A）并产 1 个 NADH 与 1 个 FADH₂ 的脂肪酸降解循环，是脂肪酸产能的核心途径。',
  },
  {
    id: 'g-015',
    term: '糖异生',
    english: 'gluconeogenesis',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '由丙酮酸、乳酸、生糖氨基酸等非糖前体合成葡萄糖的途径，总体是糖酵解的逆转，需由丙酮酸羧化酶、PEP 羧激酶、果糖-1,6-二磷酸酶与葡萄糖-6-磷酸酶绕过三个不可逆步骤。',
  },
  {
    id: 'g-016',
    term: '糖原',
    english: 'glycogen',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '动物体内葡萄糖的多分支储存聚合物（α-1,4 主链 + α-1,6 分支），肝糖原调节血糖、肌糖原供肌肉应急产能，分解经糖原磷酸化酶逐个切下葡萄糖残基。',
  },
  {
    id: 'g-017',
    term: '磷酸戊糖途径',
    english: 'pentose phosphate pathway',
    abbreviation: 'PPP',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '葡萄糖-6-磷酸经氧化分支产生 NADPH（还原力）与核糖-5-磷酸（核苷酸原料）的旁路代谢，是细胞抗氧化（谷胱甘肽还原）与生物合成还原力的主要来源。',
  },
  {
    id: 'g-018',
    term: '酮体',
    english: 'ketone bodies',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '肝细胞线粒体中乙酰辅酶 A 缩合生成的乙酰乙酸、β-羟丁酸与丙酮，饥饿或糖尿病时为脑与肌肉等肝外组织提供替代燃料。',
  },
  {
    id: 'g-019',
    term: '转氨基作用',
    english: 'transamination',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '氨基在氨基酸与 α-酮酸之间转移的可逆反应（如谷氨酸 + 草酰乙酸 → α-酮戊二酸 + 天冬氨酸），由转氨酶（辅酶为磷酸吡哆醛）催化，是氨基酸分解与合成的中心枢纽。',
  },
  {
    id: 'g-020',
    term: '尿素循环',
    english: 'urea cycle',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '在肝脏将有毒的氨与 CO₂、天冬氨酸逐步缩合为水溶性尿素的循环，跨越线粒体与细胞质，是哺乳动物氮排泄的主要方式。',
  },
  {
    id: 'g-021',
    term: '胆固醇',
    english: 'cholesterol',
    subjectId: 'biochemistry',
    category: '结构',
    definition:
      '动物膜的刚性甾醇成分，由四个稠环加一条短支链构成，插入磷脂烃链之间调节膜流动性、参与脂筏形成，也是胆汁酸与类固醇激素的前体。',
  },
  {
    id: 'g-022',
    term: '底物水平磷酸化',
    english: 'substrate-level phosphorylation',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      '高能代谢中间体（如 1,3-二磷酸甘油酸、磷酸烯醇式丙酮酸）直接把磷酰基转给 ADP 生成 ATP 的方式，无需膜与电化学梯度，糖酵解与 TCA 循环各生成 1 个。',
  },
  {
    id: 'g-023',
    term: '乳酸发酵',
    english: 'lactic acid fermentation',
    subjectId: 'biochemistry',
    category: '代谢',
    definition:
      '缺氧条件下丙酮酸被乳酸脱氢酶还原为乳酸、同时把糖酵解产生的 NADH 氧化为 NAD⁺ 以维持糖酵解继续进行的无氧产能方式，见于剧烈运动的肌肉与乳酸菌。',
  },
  {
    id: 'g-024',
    term: '氧化还原反应',
    english: 'oxidation–reduction reaction',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      '电子从还原剂（供体，电位较负）转移到氧化剂（受体，电位较正）的反应，自由能变化 ΔG°′ = −nFΔE°′，是呼吸链、光合作用与生物合成还原力的能量学基础。',
  },
  {
    id: 'g-025',
    term: '高能磷酸化合物',
    english: 'high-energy phosphate compound',
    subjectId: 'biochemistry',
    category: '能量',
    definition:
      '水解时释放大量自由能的磷酸化合物，如磷酸烯醇式丙酮酸（−61.9 kJ/mol）、1,3-二磷酸甘油酸（−49.4）与磷酸肌酸（−43.1），ATP（−30.5）处于中位，起能量传递枢纽作用。',
  },
  {
    id: 'g-026',
    term: '肽键',
    english: 'peptide bond',
    subjectId: 'biochemistry',
    category: '结构',
    definition:
      '一个氨基酸的 α-羧基与另一个氨基酸的 α-氨基缩合形成的酰胺键（C–N），具有部分双键性质（平面、反式构型），是蛋白质一级结构的连接方式。',
  },
  // ---------- 分子生物学（g-027 ~ g-052） ----------
  {
    id: 'g-027',
    term: '中心法则',
    english: 'central dogma',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      'Crick 于 1958 年提出的遗传信息流向法则：DNA → RNA → 蛋白质，DNA 可自我复制；逆转录与 RNA 复制是对经典路线的补充。它规定了信息大分子间传递的基本方向。',
  },
  {
    id: 'g-028',
    term: 'DNA 复制',
    english: 'DNA replication',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '以亲代双链为模板、按碱基互补配对（A=T、G≡C）合成子代 DNA 的半保留复制过程，由解旋酶、引物酶、DNA 聚合酶 III 与连接酶等组成复制体协同完成，速度约 10³ bp/s（大肠杆菌）。',
  },
  {
    id: 'g-029',
    term: '半不连续复制',
    english: 'semidiscontinuous replication',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '因 DNA 聚合酶只能 5′→3′ 合成，前导链连续合成而后随链以冈崎片段形式不连续合成的复制方式，是双螺旋反向平行结构的必然结果。',
  },
  {
    id: 'g-030',
    term: '冈崎片段',
    english: 'Okazaki fragment',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '后随链上不连续合成产生的短 DNA 片段（原核约 1000–2000 nt，真核约 100–200 nt），由 DNA 连接酶最终连接成完整链。',
  },
  {
    id: 'g-031',
    term: 'DNA 聚合酶',
    english: 'DNA polymerase',
    subjectId: 'molecular-biology',
    category: '酶学',
    definition:
      '以 DNA 为模板、5′→3′ 方向催化脱氧核苷酸加到引物 3′-OH 上的复制酶，原核 pol III 是主要复制酶；多数聚合酶兼有 3′→5′ 外切酶校对活性，把错误率压至 10⁻⁷~10⁻⁹。',
  },
  {
    id: 'g-032',
    term: '校对功能',
    english: 'proofreading',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      'DNA 聚合酶的 3′→5′ 外切酶活性切除错配碱基再重新加核苷酸的能力，使复制保真度提高约百倍，与错配修复（MutS/L）共同维持遗传信息稳定。',
  },
  {
    id: 'g-033',
    term: '转录',
    english: 'transcription',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '以 DNA 为模板、由 RNA 聚合酶合成互补 RNA 链的过程，分起始（启动子识别）、延伸与终止三阶段，是基因表达的第一步，也是众多调控的作用位点。',
  },
  {
    id: 'g-034',
    term: '启动子',
    english: 'promoter',
    subjectId: 'molecular-biology',
    category: '调控',
    definition:
      '基因上游被 RNA 聚合酶与转录因子识别并结合的 DNA 序列（原核如 −10 的 TATAAT 与 −35 区；真核如 TATA 框），决定转录起始位点与频率。',
  },
  {
    id: 'g-035',
    term: 'RNA 聚合酶',
    english: 'RNA polymerase',
    subjectId: 'molecular-biology',
    category: '酶学',
    definition:
      '以 DNA 为模板合成 RNA 的多亚基酶；真核生物有 Pol I（rRNA）、Pol II（mRNA，最大亚基 CTD 磷酸化调控）与 Pol III（tRNA/5S rRNA）三种，分别负责不同 RNA 类别。',
  },
  {
    id: 'g-036',
    term: '操纵子',
    english: 'operon',
    subjectId: 'molecular-biology',
    category: '调控',
    definition:
      '原核生物中启动子、操纵基因与结构基因组成的协同转录单元，一个 mRNA 编码多个功能相关蛋白（多顺反子），Jacob 与 Monod 因此获 1965 年诺贝尔奖。',
  },
  {
    id: 'g-037',
    term: '乳糖操纵子',
    english: 'lac operon',
    subjectId: 'molecular-biology',
    category: '调控',
    definition:
      '大肠杆菌乳糖代谢的基因簇：阻遏蛋白结合操纵基因关闭转录，乳糖（别乳糖）去阻遏、cAMP–CAP 增强转录，展示负/正调控协同与"碳源优先"的调控逻辑。',
  },
  {
    id: 'g-038',
    term: '遗传密码',
    english: 'genetic code',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      'mRNA 上三联体密码子与氨基酸的对应关系（4³ = 64 个密码子编码 20 种氨基酸），具有简并性、通用性与无标点性；AUG 起始、UAA/UAG/UGA 终止。',
  },
  {
    id: 'g-039',
    term: '密码子简并性',
    english: 'codon degeneracy',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '多数氨基酸对应多个密码子（亮氨酸 6 个）的现象，多发生在密码子第三位（摆动位），既保证鲁棒性（点突变中性化）又为同义密码子使用偏好提供空间。',
  },
  {
    id: 'g-040',
    term: '摆动假说',
    english: 'wobble hypothesis',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      'Crick（1966）提出：反密码子 5′ 端第一位与密码子第三位的配对允许非经典摆动配对（如 G-U、I-U/C/A），使一个 tRNA 识别多个同义密码子，解释了 tRNA 数目少于密码子数目的事实。',
  },
  {
    id: 'g-041',
    term: 'RNA 剪接',
    english: 'RNA splicing',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '前体 mRNA 中内含子被切除、外显子连接的加工过程，由剪接体（snRNP 组成的核糖核蛋白机器）经两步转酯反应完成，可选择性地产生多种 mRNA（可变剪接）。',
  },
  {
    id: 'g-042',
    term: '内含子',
    english: 'intron',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '基因中转录后被剪接除去的非编码序列，与外显子（exon）交替排列；内含子的存在支持外显子重排进化，也使一个基因经可变剪接编码多种蛋白成为可能。',
  },
  {
    id: 'g-043',
    term: '逆转录酶',
    english: 'reverse transcriptase',
    subjectId: 'molecular-biology',
    category: '酶学',
    definition:
      '以 RNA 为模板合成互补 DNA（cDNA）的酶（兼有 RNase H 活性），发现于逆转录病毒（Baltimore 与 Temin，1975 年诺贝尔奖），是 cDNA 文库、RT-PCR 与逆转录药物（如 AZT 靶点）的核心工具。',
  },
  {
    id: 'g-044',
    term: 'RNA 干扰',
    english: 'RNA interference',
    abbreviation: 'RNAi',
    subjectId: 'molecular-biology',
    category: '调控',
    definition:
      '小分子双链 RNA（siRNA/miRNA）经 Dicer 切割后由 RISC 复合物介导同源 mRNA 降解或翻译抑制的基因沉默机制（Fire 与 Mello，2006 年诺贝尔奖），是真核生物广泛的基因调控层。',
  },
  {
    id: 'g-045',
    term: '小干扰 RNA',
    english: 'small interfering RNA',
    abbreviation: 'siRNA',
    subjectId: 'molecular-biology',
    category: '调控',
    definition:
      '长 21–23 nt 的双链 RNA，加载到 RISC 后以完全互补配对引导靶 mRNA 切割，是 RNA 干扰的效应分子，也是实验室基因敲低与核酸药物的基础。',
  },
  {
    id: 'g-046',
    term: 'CRISPR-Cas9',
    english: 'CRISPR-Cas9',
    subjectId: 'molecular-biology',
    category: '技术',
    definition:
      '来自细菌适应性免疫的基因组编辑系统：向导 RNA 引导 Cas9 核酸酶到靶序列并切割 DNA，经非同源末端连接或同源定向修复实现敲除/敲入；Doudna 与 Charpentier 因此获 2020 年诺贝尔化学奖。',
  },
  {
    id: 'g-047',
    term: '聚合酶链式反应',
    english: 'polymerase chain reaction',
    abbreviation: 'PCR',
    subjectId: 'molecular-biology',
    category: '技术',
    definition:
      'Mullis 发明（1993 年诺贝尔奖）的体外 DNA 指数扩增技术：变性–退火–延伸三步循环，每轮倍增，数小时可将目的片段扩增 10⁹ 倍，是分子生物学的通用工具。',
  },
  {
    id: 'g-048',
    term: '质粒',
    english: 'plasmid',
    subjectId: 'molecular-biology',
    category: '技术',
    definition:
      '细菌染色体外自主复制的环状双链 DNA（常带抗性基因），是基因工程最常用的克隆与表达载体，天然实例如 F 质粒与 R 质粒。',
  },
  {
    id: 'g-049',
    term: '端粒',
    english: 'telomere',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      '真核染色体末端的简单重复序列（人：TTAGGG 重复数百次）与结合蛋白构成的保护性帽结构，防止末端被识别为双链断裂，其缩短与细胞衰老相关。',
  },
  {
    id: 'g-050',
    term: '端粒酶',
    english: 'telomerase',
    subjectId: 'molecular-biology',
    category: '酶学',
    definition:
      '自带 RNA 模板的逆转录酶（核糖核蛋白），在端粒 3′ 端添加重复序列以补偿复制造成的末端缩短，在干细胞与约 85% 的肿瘤中活跃（Blackburn、Greider、Szostak，2009 年诺贝尔奖）。',
  },
  {
    id: 'g-051',
    term: '突变',
    english: 'mutation',
    subjectId: 'molecular-biology',
    category: '遗传',
    definition:
      'DNA 序列可遗传的改变，含点突变（转换/颠换）、插入缺失、移码与染色体重排等；既是进化原材料，也是遗传病与肿瘤发生的分子根源。',
  },
  {
    id: 'g-052',
    term: '基因表达调控',
    english: 'gene regulation',
    subjectId: 'molecular-biology',
    category: '调控',
    definition:
      '细胞对基因产物时空与数量精确控制的总和，涵盖转录（转录因子、表观遗传修饰）、转录后（剪接、miRNA）、翻译与翻译后多层调控，使同一基因组产生不同细胞类型。',
  },
  // ---------- 细胞生物学（g-053 ~ g-078） ----------
  {
    id: 'g-053',
    term: '细胞学说',
    english: 'cell theory',
    subjectId: 'cell-biology',
    category: '基础',
    definition:
      'Schleiden 与 Schwann 提出、Virchow 补充的基本理论：一切生物由细胞及其产物构成、细胞是结构与功能的基本单位、细胞只能由既有细胞分裂而来，是现代生物学的基石。',
  },
  {
    id: 'g-054',
    term: '内膜系统',
    english: 'endomembrane system',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '由核膜、内质网、高尔基体、内体、溶酶体与分泌泡等在结构与功能上连续（经膜泡运输连接）的细胞内膜网络，负责蛋白质与脂类的合成、加工、分选与降解。',
  },
  {
    id: 'g-055',
    term: '内质网',
    english: 'endoplasmic reticulum',
    abbreviation: 'ER',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '由网膜围成的连续管泡系统，分粗面内质网（核糖体附着，分泌蛋白与膜蛋白合成、N-连接糖基化）与滑面内质网（脂类合成、钙储存与解毒）两类。',
  },
  {
    id: 'g-056',
    term: '高尔基体',
    english: 'Golgi apparatus',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '由扁平膜囊堆叠而成的"加工与分选站"，对内质网来源的蛋白进行 O-连接糖基化与磷酸化修饰、按目的地（内体/分泌泡/质膜）分选货物，极性分顺面与反面管网。',
  },
  {
    id: 'g-057',
    term: '线粒体',
    english: 'mitochondrion',
    subjectId: 'cell-biology',
    category: '能量',
    definition:
      '真核细胞的双膜细胞器（内折为嵴），经 TCA 循环、电子传递链与氧化磷酸化产生细胞大部分 ATP；内共生起源、含自身环状 DNA 与核糖体，并参与凋亡与钙信号。',
  },
  {
    id: 'g-058',
    term: '叶绿体',
    english: 'chloroplast',
    subjectId: 'cell-biology',
    category: '能量',
    definition:
      '植物细胞中含叶绿素的双膜质体（第三层为类囊体膜），进行光合作用把光能转化为化学能；与线粒体同为内共生起源的半自主细胞器。',
  },
  {
    id: 'g-059',
    term: '核糖体',
    english: 'ribosome',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '由大小两个亚基（rRNA + 蛋白）组成的翻译机器（原核 70S，真核 80S），在 mRNA 上三个位点（A/P/E）间移动并催化肽键形成，是所有细胞共有的分子机器。',
  },
  {
    id: 'g-060',
    term: '溶酶体',
    english: 'lysosome',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '含约 50 种酸性水解酶（最适 pH ≈ 5，由 V-ATPase 维持）的动物细胞降解细胞器，经吞噬体/自噬体融合降解胞内外物质，并作为 mTORC1 的营养感知平台。',
  },
  {
    id: 'g-061',
    term: '过氧化物酶体',
    english: 'peroxisome',
    subjectId: 'cell-biology',
    category: '代谢',
    definition:
      '含过氧化氢酶等氧化酶的单膜细胞器，进行极长链脂肪酸的 β-氧化与活性氧解毒（2 H₂O₂ → 2 H₂O + O₂），对神经与脂类代谢至关重要。',
  },
  {
    id: 'g-062',
    term: '细胞周期',
    english: 'cell cycle',
    subjectId: 'cell-biology',
    category: '调控',
    definition:
      '细胞从一次分裂到下一次分裂的程序（G1→S→G2→M 四期），由 cyclin–CDK 时序驱动、检查点（DNA 复制/纺锤体附着）监控，保证基因组完整传递。',
  },
  {
    id: 'g-063',
    term: '限制点',
    english: 'restriction point',
    abbreviation: 'R 点',
    subjectId: 'cell-biology',
    category: '调控',
    definition:
      'G1 晚期决定细胞是否进入周期的关键节点（高等真核；酵母称 Start）：通过后细胞不再依赖外源生长信号、自主完成分裂，由 Rb–E2F 与 cyclin D/E–CDK 开关控制。',
  },
  {
    id: 'g-064',
    term: '有丝分裂',
    english: 'mitosis',
    subjectId: 'cell-biology',
    category: '遗传',
    definition:
      '体细胞分裂方式，连续的核分裂（前期、前中期、中期、后期、末期）加胞质分裂，把复制后的染色体均分给两个子细胞（2n → 2n），保证遗传信息一致。',
  },
  {
    id: 'g-065',
    term: '减数分裂',
    english: 'meiosis',
    subjectId: 'cell-biology',
    category: '遗传',
    definition:
      '生殖细胞形成时染色体复制一次、连续两次分裂（减数分裂 I 同源染色体分开，II 姐妹染色单体分开）使 2n 变 n 的特殊分裂；同源重组与独立分配产生遗传多样性。',
  },
  {
    id: 'g-066',
    term: '细胞凋亡',
    english: 'apoptosis',
    subjectId: 'cell-biology',
    category: '调控',
    definition:
      '程序性细胞死亡：线粒体释放细胞色素 c → Apaf-1 凋亡体 → caspase 级联（内源途径）或死亡受体 → caspase-8（外源途径），表现核碎裂、出芽凋亡小体等特征，发育与稳态的必要环节。',
  },
  {
    id: 'g-067',
    term: '自噬',
    english: 'autophagy',
    subjectId: 'cell-biology',
    category: '调控',
    definition:
      '细胞在饥饿或清除受损细胞器时，由双膜自噬体包裹胞质成分送入溶酶体降解并回收原料的过程（Atg 蛋白调控，Beclin-1 与 LC3 脂化为标志），大隅良典因此获 2016 年诺贝尔奖。',
  },
  {
    id: 'g-068',
    term: '细胞信号转导',
    english: 'signal transduction',
    subjectId: 'cell-biology',
    category: '信号',
    definition:
      '细胞把胞外信号（激素、生长因子）经受体转换为胞内化学变化并放大传递的过程，典型级联为受体→第二信使→激酶→效应分子，具有特异性、放大性与可终止性。',
  },
  {
    id: 'g-069',
    term: 'G 蛋白偶联受体',
    english: 'G protein-coupled receptor',
    abbreviation: 'GPCR',
    subjectId: 'cell-biology',
    category: '信号',
    definition:
      '七次跨膜螺旋的膜受体家族（约 800 个成员），配体结合激活三聚体 G 蛋白（GDP→GTP 开关）并经 cAMP、IP₃、Ca²⁺ 等下游通路传导；Lefkowitz 与 Kobilka 获 2012 年诺贝尔奖。',
  },
  {
    id: 'g-070',
    term: '第二信使',
    english: 'second messenger',
    subjectId: 'cell-biology',
    category: '信号',
    definition:
      '受体激活后在胞内产生的小分子信号（cAMP、cGMP、IP₃、DAG、Ca²⁺、PIP₃），把胞外第一信使的信息放大并传播，是信号级联放大的核心节点。',
  },
  {
    id: 'g-071',
    term: '细胞骨架',
    english: 'cytoskeleton',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '由微管、微丝与中间丝组成的动态纤维网络，承担细胞形态维持、细胞器组织、胞内运输与运动和分裂功能，其动力学（装配/拆卸）受 GTP/ATP 与结合蛋白调控。',
  },
  {
    id: 'g-072',
    term: '微管',
    english: 'microtubule',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '由 α/β 微管蛋白异二聚体组装成的中空管（外径约 24 nm、原聚体周期 8 nm），正端动态不稳定、负端锚定中心体；是纺锤体、纤毛鞭毛的结构基础及马达蛋白的轨道。',
  },
  {
    id: 'g-073',
    term: '微丝',
    english: 'microfilament / actin filament',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '由球状肌动蛋白（G-actin）组装成的双螺旋纤维（直径约 7–8 nm），正端快速聚合、 treadmilling 循环；赋予皮质强度，驱动伪足、胞质分裂环与肌肉收缩。',
  },
  {
    id: 'g-074',
    term: '中间丝',
    english: 'intermediate filament',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '直径约 10 nm 的中间粗细丝状细胞骨架（角蛋白、波形蛋白、核纤层蛋白等家族），机械强度高、无极性、组装不需核苷酸，主要承担抗张强度（如上皮桥粒连接的锚定）。',
  },
  {
    id: 'g-075',
    term: '紧密连接',
    english: 'tight junction',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '上皮细胞顶端侧面的封闭连接（claudin/occludin 索条焊合相邻膜），封闭细胞旁通透性并维持膜蛋白顶/基底极性，是血脑屏障与血睾屏障的结构基础。',
  },
  {
    id: 'g-076',
    term: '细胞外基质',
    english: 'extracellular matrix',
    abbreviation: 'ECM',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '细胞分泌到胞外的大分子网络（胶原、层粘连蛋白、纤连蛋白与蛋白聚糖等），提供结构支架并经整联蛋白传递力学与化学信号，影响细胞黏附、迁移、分化与组织工程。',
  },
  {
    id: 'g-077',
    term: '胞吞作用',
    english: 'endocytosis',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '质膜内凹包裹胞外物质形成囊泡内运的过程，包括吞噬（大颗粒，需肌动蛋白）、胞饮（液相）与受体介导（网格蛋白/AP2 有被小窝）三种形式，是营养摄取与受体下调的基础。',
  },
  {
    id: 'g-078',
    term: '核孔复合体',
    english: 'nuclear pore complex',
    abbreviation: 'NPC',
    subjectId: 'cell-biology',
    category: '结构',
    definition:
      '嵌在核膜上的巨型（约 120 MDa）八重对称运输通道，由约 30 种核孔蛋白组成；小分子自由扩散，蛋白与 RNA–蛋白复合体经 karyopherin（importin/exportin）与 Ran-GTP 梯度主动选择性运输。',
  },
  // ---------- 生物物理学（g-079 ~ g-100） ----------
  {
    id: 'g-079',
    term: '光镊',
    english: 'optical tweezers',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      '利用高数值孔径物镜聚焦激光的梯度力捕获微米介电小珠的单分子操控技术（Ashkin，2018 年诺贝尔奖），小位移下近似弹簧（刚度 0.01–1 pN/nm），力程 0.1–100 pN，广泛用于 DNA 弹性与分子马达步进测量。',
  },
  {
    id: 'g-080',
    term: '磁镊',
    english: 'magnetic tweezers',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      '用磁场梯度牵拉并可旋转顺磁珠的单分子操控技术：力恒定无需反馈、无光损伤，独占 DNA 超螺旋与拓扑酶（旋转酶、拓扑异构酶）研究，力程约 0.01–100 pN。',
  },
  {
    id: 'g-081',
    term: '原子力显微镜',
    english: 'atomic force microscope',
    abbreviation: 'AFM',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      '以微悬臂针尖"摸"样品表面的扫描探针技术（1986），分接触与轻敲模式成像，力谱模式可测 pN–nN 级分子间力；拉伸蛋白的力曲线用蠕虫状链（WLC）模型拟合可得 DNA 持续长度 ~50 nm。',
  },
  {
    id: 'g-082',
    term: '荧光共振能量转移',
    english: 'Förster resonance energy transfer',
    abbreviation: 'FRET',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      '供体激发态能量经偶极–偶极作用无辐射转移给受体的现象，效率 E = 1/(1+(r/R₀)⁶)，Förster 半径典型 4–6 nm，灵敏测距范围 1–10 nm，被称为测量分子构象变化的"分子尺"。',
  },
  {
    id: 'g-083',
    term: '全内反射荧光显微',
    english: 'total internal reflection fluorescence microscopy',
    abbreviation: 'TIRF',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      '利用全反射在玻片水侧产生的隐失波（深度约 100–200 nm 指数衰减）只激发贴壁分子的显微技术，背景降低 1–2 个数量级，是单分子荧光与马达运动观察的标准照明方式。',
  },
  {
    id: 'g-084',
    term: '膜片钳',
    english: 'patch clamp',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      'Neher 与 Sakmann 发明（1991 年诺贝尔奖）的记录单离子通道电流的技术：玻璃微吸管与膜形成 GΩ 级高阻封接，电流分辨率达 pA 级，可同时读出单通道电导与门控动力学。',
  },
  {
    id: 'g-085',
    term: '动作电位',
    english: 'action potential',
    subjectId: 'biophysics',
    category: '电生理',
    definition:
      '可兴奋膜的全或无电脉冲：阈上去极化打开电压门控 Na⁺ 通道引发正反馈（峰值近 E_Na），随后 Na⁺ 失活与 K⁺ 延迟开放复极化，幅度约 100 mV、时程 1–2 ms，经局部电流沿膜传播。',
  },
  {
    id: 'g-086',
    term: 'Nernst 方程',
    english: 'Nernst equation',
    subjectId: 'biophysics',
    category: '电生理',
    definition:
      '计算离子平衡电位的方程 E = (RT/zF)·ln([离子]o/[离子]i)（37 °C 时为 61.5/z·log₁₀ mV），给出电化学驱动力为零时的膜电位；E_K ≈ −90 mV、E_Na ≈ +60 mV，是膜电位计算的基石。',
  },
  {
    id: 'g-087',
    term: '能量景观',
    english: 'energy landscape',
    subjectId: 'biophysics',
    category: '理论',
    definition:
      '把蛋白质所有构象的自由能张成高维"地形"的理论图像：折叠景观呈漏斗形——顶部海量高能构象（高构象熵）、底部天然态，粗糙度决定中间体与折叠速率，是理解 Levinthal 悖论的框架。',
  },
  {
    id: 'g-088',
    term: '熔球态',
    english: 'molten globule',
    subjectId: 'biophysics',
    category: '结构',
    definition:
      '蛋白质折叠的共性中间体：二级结构完整而三级堆积松散、疏水簇部分暴露（结合 ANS）、尺寸膨胀 10–30%；既是折叠路径的驿站，也是跨膜转运中间体与错误聚集的起点。',
  },
  {
    id: 'g-089',
    term: '分子马达',
    english: 'molecular motor',
    subjectId: 'biophysics',
    category: '力学',
    definition:
      '将 ATP 水解或离子梯度能量转化为定向机械功的蛋白机器（kinesin、myosin、dynein、旋转马达 F₁F₀ 等），尺寸 ~10 nm、淹没在 k_BT 热噪声中，定向性来自化学耗散打破细致平衡。',
  },
  {
    id: 'g-090',
    term: '驱动蛋白',
    english: 'kinesin',
    subjectId: 'biophysics',
    category: '力学',
    definition:
      '沿微管（多数向正端）行走的双手交替马达：kinesin-1 步长恒定 8 nm、每步 1 ATP、速度 ~1 μm/s、停滞力 5–7 pN，过程性行走约 100 步，负责胞内远离中心的货物运输。',
  },
  {
    id: 'g-091',
    term: '肌球蛋白',
    english: 'myosin',
    subjectId: 'biophysics',
    category: '力学',
    definition:
      '沿肌动蛋白丝行走的马达超家族：myosin II（肌肉收缩，非过程性、靠横桥集体做功）、myosin V（过程性、36 nm 大步）等；其杠杆臂摆动（5–10 nm）即摆动横桥模型的做功冲程。',
  },
  {
    id: 'g-092',
    term: 'ATP 合酶',
    english: 'ATP synthase',
    subjectId: 'biophysics',
    category: '能量',
    definition:
      '线粒体内膜上的双向旋转马达：F₀ c 环由质子梯度驱动旋转，带动 γ 轴使 F₁ 的 3 个催化位点依次合成 ATP（每 360° 产 3 个 ATP、每步 120°，转矩约 45 pN·nm），是化学渗透假说的执行机器。',
  },
  {
    id: 'g-093',
    term: '持续长度',
    english: 'persistence length',
    subjectId: 'biophysics',
    category: '理论',
    definition:
      '度量链状大分子弯曲刚度的特征长度：链的取向关联在弧长约 p 的尺度上衰减（Kuhn 长度 b ≈ 2p）。双链 DNA p ≈ 50 nm（约 150 bp），蛋白质变性链约 1 nm。',
  },
  {
    id: 'g-094',
    term: '回转半径',
    english: 'radius of gyration',
    subjectId: 'biophysics',
    category: '理论',
    definition:
      '大分子尺寸的标准量度：各单体（或质量元）到质心距离的方均根；理想链 Rg = b·√(N/6)。光散射与小角 X 射线散射（SAXS）可直接测 Rg，并与 Flory 标度律 Rg ~ N^ν 比较。',
  },
  {
    id: 'g-095',
    term: '淀粉样纤维',
    english: 'amyloid fibril',
    subjectId: 'biophysics',
    category: '结构',
    definition:
      '以交叉 β 结构（β 链垂直纤维轴、4.7 Å 氢键周期）高度有序组装的蛋白聚集体，经成核–延伸机制生长；见于阿尔茨海默病（Aβ）、帕金森病（α-突触核蛋白）与朊病毒病，可溶性寡聚中间体毒性最强。',
  },
  {
    id: 'g-096',
    term: '冷冻电镜',
    english: 'cryo-electron microscopy',
    abbreviation: 'Cryo-EM',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      '将样品速冻入玻璃态冰后用电子束成像的结构生物学技术：相位衬度 + 单粒子分析（分类—对齐—平均—角度重构）+ CTF 修正；直接电子探测器引发"分辨率革命"，达 2–4 Å（2017 年诺贝尔化学奖）。',
  },
  {
    id: 'g-097',
    term: '超分辨显微镜',
    english: 'super-resolution microscopy',
    subjectId: 'biophysics',
    category: '技术',
    definition:
      '突破 Abbe 衍射极限（d = λ/2NA ≈ 200 nm）的荧光显微技术群：STED（受激辐射损耗，20–50 nm）、PALM/STORM（单分子定位，~20 nm）与 SIM（结构光照明，~100 nm），获 2014 年诺贝尔化学奖。',
  },
  {
    id: 'g-098',
    term: '疏水效应',
    english: 'hydrophobic effect',
    subjectId: 'biophysics',
    category: '理论',
    definition:
      '非极性分子在水中被水分子有序"笼"包围导致熵损失，体系倾向把非极性基团聚拢以减少水界面的现象；主要由水的熵增驱动，是蛋白质折叠、膜自组装与疏水结合的主要驱动力。',
  },
  {
    id: 'g-099',
    term: 'Berg–Purcell 极限',
    english: 'Berg–Purcell limit',
    subjectId: 'biophysics',
    category: '理论',
    definition:
      '1977 年 Berg 与 Purcell 导出的感知精度物理下界：半径 a 的感受器在时间 τ 内测量浓度 c 的相对涨落 (δc/c)² ≥ 1/(D·a·c·τ)，来自分子扩散到达的散粒噪声；趋化与视觉等生物感受器均运行在距该极限数倍之内。',
  },
  {
    id: 'g-100',
    term: '电缆理论',
    english: 'cable theory',
    subjectId: 'biophysics',
    category: '电生理',
    definition:
      '把神经突起当作泄漏电缆处理的理论：膜时间常数 τ = r_m·c_m 决定时间整合窗，空间常数 λ = √(r_m/r_i) 决定被动电位指数衰减（V(x) = V₀e^(−x/λ)）的范围，是神经元时空信息整合（泄漏积分–发放）的物理框架。',
  },

  // ---------- 分子结构词条（g-101 ~ g-124，配 RCSB CCD 真实结构式） ----------
  {
    id: 'g-101',
    term: 'D-葡萄糖',
    english: 'D-glucose',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '最重要的六碳醛糖（己醛糖），溶液中 ≥ 99% 以环状半缩醛形式存在，其中 β-D-吡喃葡萄糖因所有大取代基均处平伏位而占优势（约 64%）。是血液中的运输糖形式与细胞呼吸的通用起点底物。',
  },
  {
    id: 'g-102',
    term: 'D-果糖',
    english: 'D-fructose',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '最重要的六碳酮糖（己酮糖），半缩醛中心位于 C2，溶液中主要以 β-D-呋喃糖（五元环）形式存在。比蔗糖更甜，是蜂蜜与许多水果甜味的来源；进入糖酵解前经果糖激酶磷酸化为 1-磷酸果糖（肝）或经己糖激酶转化为 6-磷酸果糖。',
  },
  {
    id: 'g-103',
    term: 'D-半乳糖',
    english: 'D-galactose',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '葡萄糖的 C4 差向异构体（己醛糖），与葡萄糖结合构成乳糖，也是糖脂与糖蛋白 N-连接寡糖的组成成分。经 Leloir 途径（半乳糖激酶 → 1-磷酸半乳糖尿苷酰转移酶 → UDP-半乳糖 4-差向异构酶）转变为葡萄糖-1-磷酸后进入糖代谢。',
  },
  {
    id: 'g-104',
    term: '棕榈酸',
    english: 'palmitic acid',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '十六碳饱和脂肪酸（16:0），脂肪酸从头合成途径的终产物——乙酰辅酶 A 经丙二酰辅酶 A 循环延伸的每一次二碳单位加成均由该途径产生。软脂酰-CoA 可经延长酶系或去饱和酶进一步加工为其他脂肪酸；棕榈酸也是棕榈油与动物脂肪的主要成分。',
  },
  {
    id: 'g-105',
    term: '油酸',
    english: 'oleic acid',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '十八碳单不饱和脂肪酸（18:1 Δ9 顺式），顺式双键使烃链产生约 30° 固定弯折、熔点（13.4 ℃）远低于对应的饱和硬脂酸（69.6 ℃）。是橄榄油的主要脂肪酸，也是膜磷脂维持流动性的重要组分；由硬脂酰辅酶 A 去饱和酶在 Δ9 位引入双键生成。',
  },
  {
    id: 'g-106',
    term: '甘油',
    english: 'glycerol',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '三元醇（丙三醇），甘油磷脂与甘油三酯的骨架：sn-1、sn-2 位酯化脂肪酸、sn-3 位连接磷酸或糖基头部即构成膜脂。甘油三酯脂解释放的甘油经甘油激酶（肝）磷酸化为 3-磷酸甘油后进入糖代谢（糖异生或糖酵解）。',
  },
  {
    id: 'g-107',
    term: '鞘氨醇',
    english: 'sphingosine',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '十八碳长链氨基二醇（2S,3S,4E-2-氨基-十八-4-烯-1,3-二醇），鞘磷脂类（鞘磷脂、糖鞘脂）的共同骨架：其 C2 氨基以酰胺键连接脂肪酸即为神经酰胺，C1 羟基再连接磷酸胆碱或糖基分别生成鞘磷脂与糖鞘脂。',
  },
  {
    id: 'g-108',
    term: '腺嘌呤',
    english: 'adenine',
    abbreviation: 'A',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '嘌呤碱基（6-氨基嘌呤），DNA 与 RNA 的四种碱基之一，与胸腺嘧啶/尿嘧啶配对（A-T，两条氢键）。也是 ATP、NAD⁺、FAD、辅酶 A 与 cAMP 等辅酶与信号分子的腺苷组分——"腺嘌呤是能量与信息分子的共同接头"。',
  },
  {
    id: 'g-109',
    term: '鸟嘌呤',
    english: 'guanine',
    abbreviation: 'G',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '嘌呤碱基（2-氨基-6-氧嘌呤），DNA 与 RNA 的四种碱基之一，与胞嘧啶配对（G-C，三条氢键，故 GC 含量高的 DNA 更稳定、解链温度更高）。其酮式-烯醇式互变是 5-溴尿嘧啶等类似物诱发突变打击的靶点之一。',
  },
  {
    id: 'g-110',
    term: '胞嘧啶',
    english: 'cytosine',
    abbreviation: 'C',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '嘧啶碱基（4-氨基-2-氧嘧啶），DNA 与 RNA 共有的碱基，与鸟嘌呤配对（三条氢键）。其氨基可自发水解脱氨变为尿嘧啶（每昼夜每基因组数千次），是 DNA 需要尿嘧啶-DNA 糖苷酶修复系统持续巡查的原因；亚硫酸氢盐 sequencing 即利用该脱氨反应区分甲基化胞嘧啶。',
  },
  {
    id: 'g-111',
    term: '尿嘧啶',
    english: 'uracil',
    abbreviation: 'U',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '嘧啶碱基（2,4-二氧嘧啶），RNA 特有的碱基，与腺嘌呤配对（两条氢键）。DNA 用胸腺嘧啶（5-甲基尿嘧啶）替代尿嘧啶，使 DNA 修复系统能把脱氨产生的尿嘧啶与正常碱基区分开——这是 DNA 遗传稳定性的化学设计之一。',
  },
  {
    id: 'g-112',
    term: '胸腺嘧啶',
    english: 'thymine',
    abbreviation: 'T',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '嘧啶碱基（5-甲基尿嘧啶），DNA 特有碱基，与腺嘌呤配对（两条氢键）。其 5 位甲基正是区分 DNA 与 RNA 化学身份的标记：DNA 中胞嘧啶脱氨产生尿嘧啶而非胸腺嘧啶，修复系统得以识别切除。dTMP 由 dUMP 经胸苷酸合酶甲基化生成（dUMP + N⁵,N¹⁰-CH₂-THF → dTMP + DHF），是氟尿嘧啶类抗癌药的靶点。',
  },
  {
    id: 'g-113',
    term: '腺苷',
    english: 'adenosine',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '腺嘌呤与核糖以 β-N9 糖苷键连接而成的核苷。腺苷三磷酸（ATP）为其三磷酸酯；游离腺苷是中枢神经系统抑制性调质（睡眠压力信号），经腺苷受体发挥作用——咖啡因正是通过阻断腺苷受体提神。',
  },
  {
    id: 'g-114',
    term: '烟酰胺腺嘌呤二核苷酸',
    english: 'nicotinamide adenine dinucleotide',
    abbreviation: 'NAD⁺',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '维生素 B3（烟酸/烟酰胺）来源的递氢辅酶：烟酰胺环 C4 接受一个负氢离子（H⁻）转变为 NADH，同时释放一个质子入介质——"NAD⁺ 捕获氢负离子"。是糖酵解、三羧酸循环与 β-氧化中主要的电子收集者，NADH 经呼吸链氧化偶联合成约 2.5 个 ATP。细胞内 NAD⁺/NADH 比值高（约 700），利于氧化分解；NADPH（磷酸型）则主要提供还原力用于生物合成。',
  },
  {
    id: 'g-115',
    term: '黄素腺嘌呤二核苷酸',
    english: 'flavin adenine dinucleotide',
    abbreviation: 'FAD',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '维生素 B2（核黄素）来源的递氢辅酶：异咯嗪环可接受两个氢原子（2H⁺ + 2e⁻）形成 FADH₂，也能进行单电子步骤（半醌中间体），故既可参与双电子转移也可参与单电子转移（如呼吸链复合物 II 与 β-氧化中的脂酰辅酶 A 脱氢酶）。FADH₂ 经呼吸链氧化偶联合成约 1.5 个 ATP。',
  },
  {
    id: 'g-116',
    term: '辅酶A',
    english: 'coenzyme A',
    abbreviation: 'CoA',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '泛酸（维生素 B5）来源的辅酶，由 ADP-焦磷酸-泛酰胺-巯基乙胺四部分组成。末端巯基（-SH）与羧酸形成高能硫酯键（如乙酰辅酶 A），携带酰基参与 α-酮酸氧化脱羧、β-氧化、柠檬酸循环与胆固醇/脂肪酸合成等几乎所有酰基转移反应。',
  },
  {
    id: 'g-117',
    term: '血红素',
    english: 'heme',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '原卟啉 IX 与 Fe²⁺（亚铁）的络合物：四个吡咯环经次甲基桥连成平面大环，中心铁离子有六个配位键——四个与卟啉氮配位，第五、第六配位位分别连接组氨酸（近端）与可逆结合 O₂（血红蛋白/肌红蛋白）。铁的第六配位位被占据的方式决定功能：与 O₂ 可逆结合（输氧）、与 H₂O/Cu 协同（细胞色素氧化酶）或催化过氧化物分解（过氧化氢酶、过氧化物酶）。',
  },
  {
    id: 'g-118',
    term: '焦磷酸硫胺素',
    english: 'thiamine pyrophosphate',
    abbreviation: 'TPP',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '维生素 B1（硫胺素）的辅酶形式：噻唑环 C2 失去质子形成的碳负离子（ylide）是强亲核体，攻击 α-酮酸的羰基碳后使 C-C 键断裂，稳定"活性醛"中间体。丙酮酸脱氢酶、α-酮戊二酸脱氢酶与转酮酶的辅酶；缺乏时丙酮酸堆积导致脚气病（周围神经炎与心功能衰竭）。',
  },
  {
    id: 'g-119',
    term: '磷酸吡哆醛',
    english: 'pyridoxal phosphate',
    abbreviation: 'PLP',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '维生素 B6 的辅酶形式：吡啶环 4 位醛基与氨基酸底物的 α-氨基形成席夫碱（外部醛亚胺），随后吡啶环作为电子阱稳定共轭电子流，使 α-碳的 C-H 键断裂——因此同一辅酶可催化转氨、脱羧、消旋、β-消除等家族反应，是辅酶"多功能性"的经典范例。',
  },
  {
    id: 'g-120',
    term: '生物素',
    english: 'biotin',
    abbreviation: 'B7',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      'B 族维生素之一：咪唑酮环与四氢噻吩环并合、侧链戊酸羧基共价连接到羧化酶赖氨酸侧链 ε-氨基上。作为 CO₂ 的载体参与丙酮酸羧化酶、乙酰辅酶 A 羧化酶等羧化反应——N¹ 位氮与 CO₂ 结合形成 N-羧基生物素。蛋清中的抗生物素蛋白可与其紧密结合导致缺乏（生鸡蛋清毒性）。',
  },
  {
    id: 'g-121',
    term: '叶酸',
    english: 'folic acid',
    abbreviation: 'B9',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '蝶啶-对氨基苯甲酸-谷氨酸三部分构成的维生素，体内经二氢叶酸还原酶转变为四氢叶酸（THF）。THF 携带一碳单位（甲基、亚甲基、甲酰基等）参与核苷酸合成与氨基酸代谢；DNA 前体合成受阻是磺胺类与甲氨蝶呤的作用基础，孕妇缺乏导致神经管畸形。',
  },
  {
    id: 'g-122',
    term: '抗坏血酸',
    english: 'ascorbic acid',
    abbreviation: '维生素C',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '六碳内酯化合物（烯二醇结构使其易被氧化为脱氢抗坏血酸，形成可逆的氧化还原对）：是脯氨酰/赖氨酰羟化酶（胶原合成）与多巴胺 β-羟化酶的辅因子，维持铁在 Fe²⁺ 状态并促进铁吸收。人类因 L-古洛糖酸内酯氧化酶基因突变丧失自合成能力，必须从食物获取；缺乏导致胶原缺陷性疾病——坏血病。',
  },
  {
    id: 'g-123',
    term: '视黄醇',
    english: 'retinol',
    abbreviation: 'A',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '脂溶性维生素 A 的醇形式：β-紫罗酮环 + 11,12-位全反式共轭四烯侧链。在视网膜内氧化为视黄醛，与视蛋白的赖氨酸残基形成席夫碱构成视紫红质的发色团——光诱导顺反异构化触发视觉级联；也是视黄酸（RA）信号分子的前体，调控发育与分化。',
  },
  {
    id: 'g-124',
    term: 'β-胡萝卜素',
    english: 'β-carotene',
    subjectId: 'biochemistry',
    category: '分子结构',
    definition:
      '两个 β-紫罗酮环由九个共轭双键连接而成的对称分子（C₄₀），是维生素 A 原：在肠黏膜 β-胡萝卜素双加氧酶作用下从中央对称裂解为两分子视黄醛。共轭多烯链使其成为高效单线态氧淬灭剂（抗氧化）；全长共轭结构还使其在光系统Ⅱ的集光复合体中担任天线色素。',
  },
  ...microGlossary,
]
