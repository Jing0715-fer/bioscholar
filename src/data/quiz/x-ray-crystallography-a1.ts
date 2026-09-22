// ============================================================
// BioScholar X射线晶体学测验题库 - 批次 A1（第 1–3 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-x-ray-crystallography-1 ~ 15）
// 题型：每章 single ×3 + truefalse ×1 + multiple ×1
// 难度：每章 1 题 difficulty 1、3 题 difficulty 2、1 题 difficulty 3
// 依据：Blundell & Johnson《Protein Crystallography》、
// Drenth《Principles of Protein X-ray Crystallography》、
// McPherson《Crystallization of Biological Macromolecules》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const xrayCrystallographyQuizA1: QuizQuestion[] = [
  // ================= 第 1 章 绪论（q-x-ray-crystallography-1 ~ 5） =================
  {
    id: 'q-x-ray-crystallography-1',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch1',
    type: 'single',
    question: '晶体学史上「晶面角守恒定律」的提出者与年份是：',
    options: ['斯坦诺（Steno），1669 年', '阿羽依（Haüy），1784 年', '布拉维（Bravais），1850 年', '赫塞尔（Hessel），1830 年'],
    answer: 0,
    explanation:
      '1669 年丹麦学者斯坦诺在对石英等矿物的系统测量中发现：同种矿物无论晶体大小与外形如何变化，对应晶面之间的夹角恒定（如石英相邻柱面间夹角总为 120°）。这一定律宣告晶体的本质在内部秩序而非外表，是晶体学的第一条定量定律。阿羽依 1784 年提出解理「积木」与有理指数定律，布拉维 1850 年确立 14 种格子，赫塞尔 1830 年导出 32 种晶类，年份与人物均不对应本题，故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-2',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch1',
    type: 'single',
    question: '1912 年弗里德里希与尼平在劳厄指导下完成的晶体衍射实验，其最重要的历史意义在于：',
    options: [
      '证明了X射线是带电粒子流',
      '仅测定了X射线的波长',
      '在同一实验中同时证明了X射线的波动性与晶体的原子周期性',
      '首次测定了蛋白质的晶体结构',
    ],
    answer: 2,
    explanation:
      '劳厄的洞察在于「两件未知互为判据」：若X射线是波长极短（约 1 Å）的波，而晶体内部原子按同尺度的周期点阵排列，则晶体可作天然三维光栅。硫酸铜晶体的衍射斑点一出，X射线的波动性与晶体的周期性便同时得证——此前X射线因不受磁场偏转、又测不出衍射，其本质争论近二十年。蛋白质晶体结构要到 1958 年（肌红蛋白 6 Å）才出现，与本题无关，故选 C。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-3',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch1',
    type: 'truefalse',
    question:
      '布拉格父子因「用X射线分析晶体结构」共享 1915 年诺贝尔物理学奖；其中 W.L. 布拉格时年 25 岁，至今仍是诺贝尔科学奖史上最年轻的得主。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。W.L. 布拉格 1912–1913 年导出布拉格定律 2d sinθ = nλ 并测定氯化钠等首批原子级晶体结构，与父亲 W.H. 布拉格共享 1915 年诺贝尔物理学奖。他生于 1890 年，获奖时 25 岁，这一「最年轻」纪录保持至今；其后他还执掌卡文迪许实验室，培养了佩鲁茨、肯德鲁等一代结构生物学家。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-4',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch1',
    type: 'single',
    question: '1965 年菲利普斯（Phillips）等解析至 2 Å 的溶菌酶结构，在蛋白质晶体学史上的里程碑意义是：',
    options: [
      '第一个被测定晶体结构的酶，其裂隙—底物—催化残基图像确立「结构解释机制」范式',
      '第一个证明蛋白质晶体可在母液中衍射的实验',
      '第一个用分子置换法解析的蛋白结构',
      '第一个证明蛋白质由 L-氨基酸构成的结构',
    ],
    answer: 0,
    explanation:
      '溶菌酶是首个被测定结构的酶：结构显示分子表面横贯一道深裂隙，恰好容纳底物六个糖环，第四个糖环被推向半椅式过渡态构象，Glu35 与 Asp52 分列两侧分工催化——「锁钥」从比喻变为原子事实，「结构解释机制」自此成为酶学标准范式。母液中衍射的证明是 1934 年贝尔纳的胃蛋白酶照片；分子置换法更晚出现；L-氨基酸的构型早经化学确立，均不合题意。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-5',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch1',
    type: 'multiple',
    question: '（多选题）下列关于蛋白质数据库（PDB）与里程碑结构的叙述，正确的有：',
    options: [
      'PDB 于 1971 年建于布鲁克海文国家实验室，首批收录 13 个条目',
      'PDB 条目于 1999 年突破一万、2014 年突破十万',
      '1989 年发表的 HIV 蛋白酶晶体结构直接推动了 1995 年后蛋白酶抑制剂抗艾药物的研发',
      '首个被解析的酶结构是 1965 年的核糖核酸酶（RNase A）',
      '核糖体 30S/50S 亚基晶体结构于 2000 年发表，相关工作获 2009 年诺贝尔化学奖',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'A、B、C、E 均为教材标准事实：PDB 1971 年建库时首批 13 个条目，1999 年破万、2014 年破十万、2023 年超二十万；HIV 蛋白酶结构催生沙奎那韦（1995）等药物；核糖体结构 2000 年发表、2009 年获诺贝尔化学奖。D 项错在张冠李戴——首个酶结构是 1965 年菲利普斯的溶菌酶，核糖核酸酶结构虽也在 1967 年前后完成，但不是「首个」。故选前三项加最后一项，共四项。',
    difficulty: 3,
  },
  // ================= 第 2 章 点阵、晶胞与对称性（q-x-ray-crystallography-6 ~ 10） =================
  {
    id: 'q-x-ray-crystallography-6',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch2',
    type: 'single',
    question: '立方晶系晶体晶胞参数 a = 10 Å，其 (111) 晶面族的面间距 d 约为：',
    options: ['3.33 Å', '5.77 Å', '7.07 Å', '10.00 Å'],
    answer: 1,
    explanation:
      '立方晶系面间距公式为 d = a/√(h²+k²+l²)。(111) 面族的 h²+k²+l² = 1+1+1 = 3，故 d = 10/√3 ≈ 10/1.732 ≈ 5.77 Å。7.07 Å 是 (110)（√2）的值，10.00 Å 是 (100)（√1）的值，3.33 Å 则对应 h²+k²+l² = 9 的 (221) 等面族，均非所问，故选 B。掌握该公式即掌握「高指数面间距更小、携带更高分辨率信息」的规律。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-7',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch2',
    type: 'single',
    question: '蛋白质晶体只能出现在 65 个 Sohncke 手性空间群中，其根本原因是：',
    options: [
      '蛋白质分子量太大，无法进入高对称空间群',
      '蛋白质由 L-氨基酸构成、整体手性，镜面、滑移面与反演操作会生成其对映体（D-蛋白）而无法共存',
      '低对称空间群的衍射数据处理更简单',
      '高对称空间群的布拉格角太小，无法测量',
    ],
    answer: 1,
    explanation:
      '生物大分子由 L-氨基酸（及 D-核糖）构成，分子整体手性。镜面、滑移面与反演中心作用于手性分子会产生其对映体，而同一晶体不可能同时容纳 L 与 D 的同种分子，故含这些操作的空间群被禁止；只剩纯旋转、螺旋轴与平移的组合，即 65 个 Sohncke 群。这一限制还带来正面用途：反常散射打破 Friedel 等价，可从中提取相位与绝对构象信息（第 8 章）。其余选项均非真实原因。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-8',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch2',
    type: 'truefalse',
    question:
      '晶体学限制定理证明：与平移周期相容的旋转轴只有 1、2、3、4、6 次；准晶体以五次对称打破了该定理的适用边界，因其具有长程序却无平移周期。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。限制定理的证明思路：格点彼此等价，绕 n 次轴旋转必把格点送到格点；在垂直轴平面内取离轴最近的格点，正转与逆转的组合会生成更近的新格点，与「最近」矛盾——除非 n = 1、2、3、4、6。谢赫特曼 1982 年发现的准晶恰有五次、十次对称但无平移周期（2011 年诺贝尔化学奖），说明定理约束的是周期晶体，故本题两处表述均准确。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-9',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch2',
    type: 'single',
    question: '某蛋白质晶体晶胞体积为 200 000 Å³，蛋白分子量 40 000 Da，每个晶胞含 2 个分子（Z = 2）。其马修斯系数 VM 为：',
    options: ['1.25 Å³/Da', '2.5 Å³/Da', '5.0 Å³/Da', '10.0 Å³/Da'],
    answer: 1,
    explanation:
      '马修斯系数定义为 VM = Vcell/(MW·Z) = 200 000/(40 000×2) = 200 000/80 000 = 2.5 Å³/Da，落在典型区间 1.7–3.5 Å³/Da 内，对应溶剂含量约 50%（按 fs ≈ 1 − 1.23/VM 估算约 51%）。若误用 Z = 4 会得 1.25，低于下限——实践中这常提示 Z 判断错误。故选 B。该系数是拿到晶胞参数后判断「每胞几个分子」的第一件计算。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-10',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch2',
    type: 'multiple',
    question: '（多选题）关于空间群 P2₁2₁2₁，下列叙述正确的有：',
    options: [
      '该记号表示简单格子（P），沿 a、b、c 三个方向各有一根 2₁ 螺旋轴，三轴互相垂直',
      '它是 Sohncke 手性空间群，蛋白质晶体可以出现在该群中',
      '系统消光规律包括 h00 反射仅在 h 为偶数时出现',
      '它是蛋白质晶体中最常见的空间群之一（RCSB 统计约占四分之一强）',
      '该群含有滑移面，故手性分子不能进入',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'A 正确：Hermann–Mauguin 记号逐位给出三方向的 2₁ 螺旋轴。B 正确：P2₁2₁2₁ 只含螺旋轴与平移、无镜面/滑移/反演，属 65 个 Sohncke 群。C 正确：沿三轴的 2₁ 使 h00、0k0、00l 反射分别仅在指数为偶时出现。D 正确：它约占蛋白晶体的四分之一强，居第一。E 错误：该群不含滑移面——含滑移面的恰是手性分子禁止的空间群。故选前四项。',
    difficulty: 3,
  },
  // ================= 第 3 章 蛋白质晶体生长（q-x-ray-crystallography-11 ~ 15） =================
  {
    id: 'q-x-ray-crystallography-11',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch3',
    type: 'single',
    question: '悬滴蒸气扩散法中，驱动液滴内水分缓慢迁移、使液滴被逐渐浓缩的物理原因是：',
    options: [
      '液滴与池液之间的温度差',
      '液滴与池液之间的蒸汽压差（池液沉淀剂浓度更高、水活度更低）',
      '重力把液滴中的水压入池液',
      '池液中的盐主动穿过液滴表面被抽运',
    ],
    answer: 1,
    explanation:
      '悬滴法的唯一发动机是水的化学势平衡：池液沉淀剂浓度高于液滴（常用 1:1 混合起步），其水活度更低、蒸汽压更低，水分子便从液滴经气相迁入池液，液滴被缓慢浓缩，直到两相蒸汽压相等。整个过程不依赖温差、重力或主动转运；以硅油/石蜡油混合封边可减缓水汽交换速率，用作「慢速档」。故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-12',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch3',
    type: 'single',
    question: '在蛋白质结晶相图中，「亚稳区」的定义性特征是：',
    options: [
      '蛋白浓度低于溶解度，晶体放入会被溶解',
      '过饱和度足够高，自发成核不断发生',
      '过饱和但自发成核几乎不发生，已有晶体却能缓慢生长',
      '无序聚集占主导，出现絮状沉淀或油滴',
    ],
    answer: 2,
    explanation:
      '亚稳区介于溶解度曲线与成核区之间：体系已过饱和（热力学上可析出），但自发成核的能垒尚未被翻越，几乎不生新核；若已有晶体或外加晶种，溶质便在晶体表面逐层沉积而缓慢生长——「只长不生」。这正是养晶的理想区间，也是晶种技术的立足点：种子已就位，液滴只需位于亚稳区。A 是不饱和区，B 是成核区，D 是沉淀区，故选 C。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-13',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch3',
    type: 'truefalse',
    question:
      '稀疏矩阵筛选由詹卡里克与金（Jancarik & Kim）于 1991 年提出，经典方案包含 48 个彼此尽量不同的条件，商品化后即 Crystal Screen。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。1991 年 Jancarik 与 Kim 在伯克利从文献已报道的成功结晶条件中统计采样，浓缩为 48 个覆盖常见化学空间的条件（沉淀剂、浓度、pH、盐与添加剂的组合），商品化即 Hampton Research 的 Crystal Screen；其后 Index、PEG Rx、Cryos、Morpheus 等现代面板继续细化采样空间。稀疏矩阵的价值在于用最小实验次数回答「这蛋白能不能结晶」并给出优化起点。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-14',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch3',
    type: 'single',
    question: '微晶种技术（microseeding）中把种子匀浆作 10⁻¹ 至 10⁻⁸ 串联梯度稀释后定量加入新液滴，其主要目的是：',
    options: [
      '提高液滴的过饱和度',
      '把「成核数目」变成可调参数，将成核与生长两个过程解耦',
      '杀死液滴中的微生物污染',
      '降低蛋白质的溶解度',
    ],
    answer: 1,
    explanation:
      '成核需高过饱和、生长需低过饱和，两者天然矛盾。microseeding 用稀释梯度把投送的种子数目变成可精确计量的参数：液滴只须位于亚稳区（不自发成核但可生长），新核的数目由外加种子量决定——成核与生长就此解耦。与筛选面板正交组合即微晶种基质筛选（MMS），常把「永不结晶」的蛋白拉出 hit。稀释既不改变过饱和度，也无杀菌或降溶作用，故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-15',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch3',
    type: 'multiple',
    question: '（多选题）关于经典成核理论与成核现象，下列叙述正确的有：',
    options: [
      '晶核自由能 ΔG(r) 由表面项（与 r² 同增）与体积项（与 r³ 同增）竞争构成，存在临界核半径 r*',
      '成核能垒 ΔG* = 16πγ³/(3(Δμ)²ρ²)，成核速率近似正比于 exp(−ΔG*/kT)，对过饱和度极度敏感',
      '尘埃与划痕等异相表面会提高成核能垒，从而抑制成核',
      '两步成核指蛋白先凝聚成无序致密液滴、晶核随后在液滴内萌发，Vekilov 与潘等提供了实验证据',
      '临界过饱和下「一夜满板微晶」与「三周无一核」的两极现象源于成核速率的陡峭依赖',
    ],
    answer: [0, 1, 3, 4],
    explanation:
      'A、B 正确给出 ΔG(r) 的两项竞争与 ΔG* 公式及其指数型速率依赖；D 正确描述两步成核及其光学显微镜证据（溶菌酶等体系）；E 正是 exp(−ΔG*/kT) 陡峭依赖的实验表现。C 错误：异相表面（尘埃、划痕、纤维）降低界面能与几何门槛，是降低而非提高成核能垒——这正是无尘操作与过滤的物理理由。故选四项，除 C 外全对。',
    difficulty: 3,
  },
]
