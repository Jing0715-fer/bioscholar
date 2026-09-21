// ============================================================
// BioScholar 生物化学测验题
// 60 题（每章 5 题），题型：single / truefalse / multiple
// 依据：王镜岩《生物化学》(第四版) 与 Lehninger《Principles of Biochemistry》常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const biochemistryQuiz: QuizQuestion[] = [
  // ================= 第 1 章 糖类化学 =================
  {
    id: 'q-biochemistry-01',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'single',
    question: '蔗糖不具还原性、无变旋现象的原因是：',
    options: [
      '分子中不含葡萄糖',
      '两个异头碳（葡萄糖 C-1 与果糖 C-2）均参与形成糖苷键，无游离异头羟基',
      '分子中含有果糖而非葡萄糖',
      '糖苷键为 β-1,4 型'
    ],
    answer: 1,
    explanation:
      '蔗糖由葡萄糖的 α-异头碳与果糖的 β-异头碳（C-2）通过 α-1⇌β-2 糖苷键连接，两个异头碳均被"占用"，不存在游离（潜在游离）的半缩醛羟基，因此既无还原性也无变旋现象。A、C 描述错误，D 糖苷键类型错误（乳糖才是 β-1,4）。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-02',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'truefalse',
    question: '糖原比支链淀粉分支更密，平均每 8~12 个葡萄糖残基即有一个 α-1,6 分支。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。糖原的分支程度高于支链淀粉（后者约每 24~30 个残基一个分支），密集分支产生大量非还原端，使糖原磷酸化酶与糖原合酶可同时快速地增删葡萄糖残基，实现快速储能与动员。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-03',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'single',
    question: '糖原磷酸化酶分解糖原时的直接产物主要是：',
    options: ['游离葡萄糖', '1-磷酸葡萄糖', '6-磷酸葡萄糖', 'UDP-葡萄糖'],
    answer: 1,
    explanation:
      '糖原磷酸化酶以磷酸解方式从非还原端切断 α-1,4 糖苷键，产物为 1-磷酸葡萄糖（G1P），随后经磷酸葡萄糖变位酶转变为 G6P。只有脱支酶水解 α-1,6 分支点时才产生少量游离葡萄糖。磷酸解保留了糖苷键能量，无需消耗 ATP。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-04',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'single',
    question: '淀粉与纤维素单体均为葡萄糖，但功能与理化性质迥异，根本原因在于：',
    options: [
      '分子量不同',
      '糖苷键构型不同（淀粉为 α-1,4/α-1,6，纤维素为 β-1,4）',
      '溶解度不同',
      '纤维素含有分支而淀粉没有'
    ],
    answer: 1,
    explanation:
      'α-糖苷键使淀粉/糖原链卷曲成螺旋（利于致密储能），β-1,4 糖苷键使纤维素链充分伸展、链间氢键紧密堆砌成微纤维（提供机械强度），且人体缺乏水解 β-1,4 键的酶。这是"结构决定功能"的经典例证。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-05',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch1',
    type: 'multiple',
    question: '下列属于糖胺聚糖（GAG）的有：',
    options: ['硫酸软骨素', '糖原', '透明质酸', '肝素'],
    answer: [0, 2, 3],
    explanation:
      '糖胺聚糖由氨基己糖与糖醛酸组成的二糖单位重复聚合，包括透明质酸、硫酸软骨素、硫酸皮肤素、硫酸角质素及肝素等。糖原是单纯由葡萄糖组成的多糖（同多糖），不属于糖胺聚糖。',
    difficulty: 2
  },

  // ================= 第 2 章 脂质与生物膜 =================
  {
    id: 'q-biochemistry-06',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'single',
    question: '下列属于人体必需脂肪酸的是：',
    options: ['油酸（18:1 Δ9）', '亚油酸（18:2 Δ9,12）', '棕榈酸（16:0）', '花生四烯酸（20:4）'],
    answer: 1,
    explanation:
      '人体缺乏 Δ12 与 Δ15 去饱和酶，不能自身合成亚油酸（18:2 Δ9,12）与 α-亚麻酸（18:3 Δ9,12,15），二者为必需脂肪酸。花生四烯酸可由亚油酸合成（条件必需）；油酸可由 Δ9 去饱和酶合成；棕榈酸可由脂肪酸合酶合成。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-07',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'single',
    question: '胆固醇对生物膜流动性的调节作用是：',
    options: [
      '在任何温度下均降低流动性',
      '在任何温度下均升高流动性',
      '高于相变温度时降低流动性、低于相变温度时维持流动性（双向调节）',
      '对流动性无影响'
    ],
    answer: 2,
    explanation:
      '胆固醇刚性的环戊烷多氢菲母核插入磷脂脂肪酸链之间：温度高于 Tm 时限制磷脂运动、降低流动性；低于 Tm 时防止脂肪酸链紧密堆积（维持流动性），从而在较宽温度范围内稳定膜的物理状态。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-08',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'truefalse',
    question: '鞘磷脂与卵磷脂一样，分子中都含有甘油。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。鞘磷脂以鞘氨醇（长链氨基醇）为骨架，其 C-2 氨基酰化脂肪酸、C-1 羟基接磷酸胆碱，不含甘油；它是高等动物膜中唯一不含甘油的磷脂。卵磷脂（磷脂酰胆碱）则属于甘油磷脂。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-09',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'single',
    question: '因分子呈锥形（头部小、疏水链大）而倾向形成倒六角相（H_II）的膜脂是：',
    options: [
      '磷脂酰胆碱（卵磷脂）',
      '磷脂酰乙醇胺（脑磷脂）',
      '磷脂酰丝氨酸',
      '溶血磷脂'
    ],
    answer: 1,
    explanation:
      '磷脂酰乙醇胺（PE）头部小而烃链占位大，呈锥形，倾向于形成倒六角相（H_II）等非双层结构，这与膜融合等动态过程有关。卵磷脂呈圆柱形形成层状双层；溶血磷脂头部相对大，呈倒锥形易形成胶束。',
    difficulty: 3
  },
  {
    id: 'q-biochemistry-10',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch2',
    type: 'single',
    question: '磷脂酶 C 水解磷脂酰肌醇-4,5-二磷酸（PIP₂）的产物是：',
    options: [
      '甘油二酯（DAG）与三磷酸肌醇（IP₃）',
      '花生四烯酸与溶血磷脂',
      '磷脂酸与胆碱',
      '甘油与脂肪酸'
    ],
    answer: 0,
    explanation:
      '磷脂酶 C 作用于磷脂的 3 位磷酸酯键，将 PIP₂ 水解为 DAG 与 IP₃，二者均为重要第二信使：IP₃ 促进内质网释放 Ca²⁺，DAG 激活蛋白激酶 C。花生四烯酸由磷脂酶 A₂ 释放。',
    difficulty: 2
  },

  // ================= 第 3 章 氨基酸与蛋白质一级结构 =================
  {
    id: 'q-biochemistry-11',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'single',
    question: '下列氨基酸中，不属于成人营养必需氨基酸的是：',
    options: ['蛋氨酸', '色氨酸', '苏氨酸', '丙氨酸'],
    answer: 3,
    explanation:
      '成人必需氨基酸共 8 种：Met、Val、Lys、Leu、Ile、Phe、Trp、Thr（"甲缬赖亮异苯色苏"）。丙氨酸（Ala）可由丙酮酸经转氨生成，属非必需氨基酸。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-12',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'single',
    question: '某碱性氨基酸 α-COOH pKa=2.2、α-NH₃⁺ pKa=9.0、侧链 pKa=10.5，其等电点（pI）约为：',
    options: ['5.6', '7.0', '9.75', '2.2'],
    answer: 2,
    explanation:
      '碱性氨基酸的 pI 取净电荷为零时两侧两个可解离基团 pKa 的平均值，即 (pKa₂ + pKaR)/2 = (9.0 + 10.5)/2 = 9.75。注意不能套用中性氨基酸的 (pKa₁+pKa₂)/2=5.6——那是两性离子两侧基团的组合。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-13',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'truefalse',
    question: '肽键具有部分双键性质，因此不能自由旋转，肽键及其两侧原子共处一个平面。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。肽键 C—N 键长（约 0.133 nm）介于单键与双键之间，具有部分双键性质，旋转受限，使 Cα-CO-NH-Cα 六原子共面（肽平面/酰胺平面），且通常呈反式构象。多肽主链的构象自由度主要来自两侧的 φ、ψ 二面角。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-14',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'single',
    question: 'Edman 降解法测序所用的试剂及鉴定产物分别是：',
    options: [
      '苯异硫氰酸酯（PITC）；PTH-氨基酸',
      '2,4-二硝基氟苯（DNFB）；DNP-氨基酸',
      '胰蛋白酶；小肽片段',
      '茚三酮；紫色化合物'
    ],
    answer: 0,
    explanation:
      'Edman 降解用苯异硫氰酸酯（PITC）在弱碱性条件下与 N 端 α-氨基偶联，经无水酸裂解转化为稳定的 PTH-氨基酸（经 HPLC 鉴定），每循环从 N 端切下一个残基，可连续测定约 50~60 个残基。DNFB 是 Sanger 法（DNP-氨基酸），茚三酮反应用于氨基酸定量而非测序。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-15',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch3',
    type: 'single',
    question: '用于专一性裂解多肽链中 Lys、Arg 羧基侧肽键的酶（或试剂）是：',
    options: ['胰蛋白酶', '胰凝乳蛋白酶', '溴化氰（CNBr）', '胃蛋白酶'],
    answer: 0,
    explanation:
      '胰蛋白酶专一性水解碱性氨基酸 Lys、Arg 羧基侧的肽键；胰凝乳蛋白酶作用于芳香族氨基酸（Phe、Tyr、Trp）羧基侧；溴化氰（CNBr）化学裂解 Met 羧基侧肽键。不同专一性的碎片重叠拼接即可测出全序列。',
    difficulty: 3
  },

  // ================= 第 4 章 蛋白质的三维结构与功能 =================
  {
    id: 'q-biochemistry-16',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch4',
    type: 'single',
    question: '关于 α 螺旋的结构参数，正确的是：',
    options: [
      '每圈 3.6 个残基，螺距 0.54 nm，氢键平行于螺旋轴',
      '每圈 3.6 个残基，螺距 0.34 nm，氢键垂直于螺旋轴',
      '每圈 5 个残基，螺距 0.70 nm，侧链伸向螺旋内部',
      '每圈 2 个残基，螺距 0.15 nm，为左手螺旋'
    ],
    answer: 0,
    explanation:
      '典型 α 螺旋（右手）每圈 3.6 个残基，螺距 0.54 nm，每个残基上升 0.15 nm、旋转 100°；第 n 个残基的 C=O 与第 n+4 个残基的 NH 形成氢键，氢键方向平行于螺旋轴，R 侧链伸向螺旋外侧。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-17',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch4',
    type: 'single',
    question: '波尔效应（Bohr effect）指的是：',
    options: [
      'O₂ 与 Hb 结合后促进亚基解离',
      'H⁺ 与 CO₂ 浓度升高降低 Hb 对 O₂ 的亲和力，促进组织释放 O₂',
      '2,3-BPG 降低 Hb 氧亲和力',
      'CO 与 Hb 结合后引起中毒'
    ],
    answer: 1,
    explanation:
      '波尔效应即 H⁺（pH 降低）与 CO₂ 升高使血红蛋白氧亲和力下降、氧解离曲线右移，利于在代谢旺盛的组织（高 CO₂、偏酸）释放 O₂，而在肺部（高 pH、低 CO₂）高亲和结合 O₂。其分子机制是质子化稳定 T 态离子键（盐桥）。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-18',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch4',
    type: 'truefalse',
    question: '肌红蛋白与血红蛋白的氧结合曲线均为矩形双曲线。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。肌红蛋白为单体、无亚基间协同，氧结合曲线为矩形双曲线（符合米氏型）；血红蛋白为 α₂β₂ 四聚体，亚基间正协同使其氧解离曲线呈 S 形，能在较窄的氧分压范围内高效装载与卸载 O₂。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-19',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch4',
    type: 'single',
    question: '关于 2,3-二磷酸甘油酸（2,3-BPG），正确的是：',
    options: [
      '结合于血红蛋白 R 态中央空腔，提高氧亲和力',
      '结合于 T 态中央空腔，降低氧亲和力，促进组织中 O₂ 释放',
      '是线粒体氧化磷酸化的偶联因子',
      '仅在胎儿血红蛋白中大量存在'
    ],
    answer: 1,
    explanation:
      '2,3-BPG 是红细胞糖酵解旁路（Rapoport 途径）产物，一分子 2,3-BPG 结合一个脱氧 Hb 的中央空腔（该空腔仅 T 态可容纳），与 β 亚基带正电残基静电结合，稳定 T 态、降低氧亲和力，使 P₅₀ 升高，利于组织卸氧。高原适应与贫血时 2,3-BPG 升高；胎儿 Hb（γ 链）与其结合弱、对 O₂ 亲和力高。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-20',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch4',
    type: 'single',
    question: 'Anfinsen 的核糖核酸酶 A 变性复性实验说明：',
    options: [
      '蛋白质折叠必须由分子伴侣催化',
      '二硫键决定蛋白质的一级结构',
      '一级结构包含折叠的全部信息，天然构象是热力学最稳定的状态',
      '蛋白质空间结构与氨基酸序列无关'
    ],
    answer: 2,
    explanation:
      'RNase A 在 8 mol/L 尿素与 β-巯基乙醇中完全变性失活，透析去除变性剂后自发恢复活性并正确重配 4 个二硫键，证明一级结构（氨基酸序列）决定天然三维构象（折叠的热力学假说）。分子伴侣只提高折叠效率、阻止错误聚集，并不提供折叠"信息"。',
    difficulty: 3
  },

  // ================= 第 5 章 酶学 =================
  {
    id: 'q-biochemistry-21',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch5',
    type: 'single',
    question: '米氏常数（Km）的数值等于：',
    options: [
      '酶被底物完全饱和时的速度',
      '反应速度达到最大反应速度一半时的底物浓度',
      '酶-底物复合物的解离常数（任何条件下）',
      '底物的生理浓度'
    ],
    answer: 1,
    explanation:
      'Km 是 v = Vmax/2 时的底物浓度，是酶的特征性常数。仅当 k₃ ≪ k₂ 时，Km = (k₂+k₃)/k₁ 才近似等于解离常数 Ks，此时 Km 越小表示亲和力越大；严格说 C 表述缺少该前提。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-22',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch5',
    type: 'single',
    question: '某酶的动力学实验显示：加入抑制剂后表观 Km 增大而 Vmax 不变，该抑制属于：',
    options: ['竞争性抑制', '非竞争性抑制', '反竞争性抑制', '不可逆抑制'],
    answer: 0,
    explanation:
      '竞争性抑制剂与底物竞争酶活性中心，表观 Km = Km(1+[I]/Ki) 增大，但极高底物浓度仍可完全克服抑制达到原 Vmax（双倒数图各线交于纵轴）。非竞争性：Vmax↓、Km 不变；反竞争性：两者同比例减小（平行线）。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-23',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch5',
    type: 'truefalse',
    question: '酶能降低反应的活化能，从而改变反应的平衡常数。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。酶只降低活化能（ΔG‡）、加快正逆反应达到平衡的速率，但不改变反应的初终态自由能，故不改变平衡常数（K）与 ΔG°′。催化剂同时加速正、逆反应，只缩短到达平衡的时间。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-24',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch5',
    type: 'single',
    question: '反竞争性抑制作用的特点是：',
    options: [
      '抑制剂只与游离酶结合，Km 增大',
      '抑制剂只与酶-底物复合物（ES）结合，Km 与 Vmax 均减小，双倒数图呈平行线',
      'Km 减小、Vmax 增大',
      'Km 与 Vmax 均不变，仅反应速度下降'
    ],
    answer: 1,
    explanation:
      '反竞争性抑制剂只与 ES 结合形成 ESI（无活性），ES 的"被抽取"反而促进底物结合，故表观 Km 与 Vmax 同比例下降，Lineweaver-Burk 图为相互平行的一组直线。多见于多底物反应（如某些氨基酸对特定酶的抑制）。',
    difficulty: 3
  },
  {
    id: 'q-biochemistry-25',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch5',
    type: 'multiple',
    question: '属于酶活性"快速"调节的方式包括：',
    options: ['别构调节', '酶蛋白的磷酸化/脱磷酸化（共价修饰）', '酶原激活', '酶蛋白的诱导合成'],
    answer: [0, 1, 2],
    explanation:
      '别构调节（毫秒-秒级）、共价修饰（秒-分级）与酶原激活（水解切肽，不可逆）均直接改变酶活性，属快速调节；酶蛋白的诱导与阻遏作用于基因表达水平（小时-天级），属慢调节（酶量调节）。',
    difficulty: 2
  },

  // ================= 第 6 章 维生素与辅酶 =================
  {
    id: 'q-biochemistry-26',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch6',
    type: 'single',
    question: '维生素 B₁（硫胺素）缺乏所致的典型疾病是：',
    options: ['坏血病', '脚气病', '佝偻病', '恶性贫血'],
    answer: 1,
    explanation:
      'B₁ 的活化形式 TPP 是丙酮酸脱氢酶、α-酮戊二酸脱氢酶与转酮醇酶的辅酶，缺乏时糖代谢受阻、神经供能障碍，导致脚气病（多发性神经炎、水肿、心衰）。坏血病缺维生素 C、佝偻病缺维生素 D、恶性贫血与维生素 B₁₂ 相关。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-27',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch6',
    type: 'single',
    question: '作为羧化酶辅酶、以共价键连接于酶蛋白 Lys 上充当"活性 CO₂ 载体"的维生素是：',
    options: ['叶酸', '维生素 B₁₂', '生物素', '泛酸'],
    answer: 2,
    explanation:
      '生物素（维生素 H/B₇）通过戊酸侧链与羧化酶 Lys ε-氨基以酰胺键共价连接（生物胞素），其咪唑酮环 N¹ 在 ATP 驱动下可逆结合 CO₂，是丙酮酸羧化酶、乙酰CoA 羧化酶等的必需辅基。蛋清中的抗生物素蛋白可使其失活。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-28',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch6',
    type: 'single',
    question: '凝血因子Ⅱ、Ⅶ、Ⅸ、Ⅹ 正常发挥作用需要维生素 K 的原因是：',
    options: [
      '维生素 K 是凝血因子基因表达的辅因子',
      '维生素 K 参与谷氨酸残基的 γ-羧化，生成的 Gla 残基可结合 Ca²⁺',
      '维生素 K 是磷脂合成的辅酶',
      '维生素 K 促进维生素 D 的羟化'
    ],
    answer: 1,
    explanation:
      '维生素 K 是 γ-谷氨酰羧化酶的辅酶，催化凝血因子特定 Glu 残基羧化为 γ-羧基谷氨酸（Gla），其双羧基结合 Ca²⁺ 使因子锚定于带负电的血小板磷脂表面启动凝血级联。华法林（香豆素类）拮抗维生素 K 而抗凝。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-29',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch6',
    type: 'truefalse',
    question: '维生素 C 是脯氨酰-4-羟化酶的辅因子，其缺乏导致胶原合成障碍而患坏血病。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。胶原中脯氨酸与赖氨酸的羟化需要 Fe²⁺ 与维生素 C：维生素 C 使 Fe²⁺ 保持还原态。缺乏时羟化不足、胶原三股螺旋不稳定，出现牙龈出血、伤口难愈、皮下瘀斑等坏血病表现。人类因缺乏 L-古洛糖酸内酯氧化酶不能自身合成维生素 C。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-30',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch6',
    type: 'single',
    question: '转氨酶（氨基转移酶）的辅酶是：',
    options: ['焦磷酸硫胺素（TPP）', '磷酸吡哆醛（PLP）', '四氢叶酸（THF）', '黄素腺嘌呤二核苷酸（FAD）'],
    answer: 1,
    explanation:
      '维生素 B₆ 的活化形式磷酸吡哆醛（PLP）以 Schiff 碱（醛亚胺）形式结合氨基酸 α-氨基，是转氨酶、氨基酸脱羧酶等上百种酶的辅酶。TPP 参与 α-酮酸氧化脱羧、THF 转运一碳单位、FAD 传递氢（电子）。',
    difficulty: 2
  },

  // ================= 第 7 章 核酸化学 =================
  {
    id: 'q-biochemistry-31',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'single',
    question: 'DNA 与 RNA 在碱基组成上的区别是：',
    options: [
      'DNA 含 U，RNA 含 T',
      'DNA 含 T，RNA 含 U',
      'DNA 含 A、G，RNA 含 C、T',
      '二者碱基完全相同'
    ],
    answer: 1,
    explanation:
      'DNA 的四种碱基为 A、G、C、T；RNA 为 A、G、C、U（U 代替 T）。此外 DNA 的戊糖为 2-脱氧核糖，RNA 为核糖；RNA 含较多稀有（修饰）碱基，以 tRNA 中最丰富。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-32',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'single',
    question: '关于 Watson-Crick 的 B 型 DNA 双螺旋，正确的是：',
    options: [
      '左手双螺旋，每圈 11 bp',
      '右手双螺旋，直径约 2 nm，每圈约 10 bp，螺距 3.4 nm',
      '左手双螺旋，每圈 12 bp，呈锯齿形',
      '右手双螺旋，碱基暴露于外侧'
    ],
    answer: 1,
    explanation:
      'B-DNA 为右手双螺旋：直径约 2 nm，螺距 3.4 nm，每圈约 10 个碱基对，相邻碱基对间距 0.34 nm；两条链反向平行，脱氧核糖-磷酸骨架在外，碱基对平面垂直于螺旋轴，表面形成大沟与小沟。A 型为右手 11 bp，Z 型为左手锯齿形 12 bp。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-33',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'single',
    question: 'DNA 的解链温度（Tm）与碱基组成的关系是：',
    options: [
      'A+T 含量越高，Tm 越高',
      'G+C 含量越高，Tm 越高',
      'Tm 与碱基组成无关',
      'Tm 只取决于 DNA 长度'
    ],
    answer: 1,
    explanation:
      'G≡C 间有三条氢键且堆积更牢固，故 GC 含量越高 Tm 越高（长链 DNA 经验式 Tm ≈ 69.3 + 0.41×(G+C)%）。此外离子强度升高（屏蔽磷酸静电排斥）也使 Tm 升高；甲酰胺、尿素等则降低 Tm。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-34',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'truefalse',
    question: 'tRNA 的二级结构呈三叶草形，三级结构呈倒 L 形。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。tRNA 二级结构为三叶草形（氨基酸臂、TψC 环、可变环、反密码子环、二氢尿嘧啶环），三级结构折叠为倒 L 形，氨基酸臂（3\'-CCA）与反密码子环分居 L 两端，分别负责接氨基酸与识别密码子。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-35',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch7',
    type: 'single',
    question: 'Z-DNA 的结构特征是：',
    options: [
      '右手螺旋，每圈约 11 bp，见于脱水条件',
      '左手螺旋，骨架呈锯齿形，多见于交替嘌呤-嘧啶（如 CG）序列与高盐条件',
      '左手螺旋，仅存在于 RNA 双链区',
      '右手螺旋，每圈 10 bp，为生理条件下的主要构象'
    ],
    answer: 1,
    explanation:
      'Z-DNA 是左手双螺旋，核糖-磷酸骨架呈锯齿形（zigzag）走向，每圈约 12 bp（二体重复），出现于嘌呤-嘧啶交替序列（特别是 GC）、高盐或负超螺旋环境，可能参与基因表达调控。A 项描述的是 A-DNA；D 项描述的是 B-DNA。',
    difficulty: 3
  },

  // ================= 第 8 章 生物能学与生物氧化 =================
  {
    id: 'q-biochemistry-36',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'single',
    question: '标准条件下 ATP 水解为 ADP + Pi 的标准自由能变化（ΔG°′）约为：',
    options: ['−13.8 kJ/mol', '−30.5 kJ/mol', '−61.9 kJ/mol', '+30.5 kJ/mol'],
    answer: 1,
    explanation:
      'ATP → ADP + Pi 的 ΔG°′ ≈ −30.5 kJ/mol（pH 7、25 ℃），是"高能磷酸化合物"（释放 >21 kJ/mol）的典型代表。磷酸烯醇式丙酮酸（−61.9）、1,3-二磷酸甘油酸（−49.3）、磷酸肌酸（−43.1）更高；葡糖-6-磷酸（−13.8）属低能磷酸酯。细胞内实际 ΔG 约 −50 kJ/mol。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-37',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'single',
    question: '提出化学渗透假说（用跨膜质子梯度解释氧化磷酸化偶联）的科学家是：',
    options: ['Boyer', 'Mitchell', 'Krebs', 'Warburg'],
    answer: 1,
    explanation:
      'Peter Mitchell 于 1961 年提出化学渗透假说：呼吸链复合物 I、III、IV 泵出 H⁺ 形成跨膜质子动力势，ATP 合酶利用质子回流合成 ATP，获 1978 年诺贝尔化学奖。Boyer 提出结合变化机制（1997 年奖）解释 ATP 合酶催化。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-38',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'single',
    question: '氰化物（CN⁻）抑制呼吸链的作用位点是：',
    options: [
      '复合物 I（NADH-泛醌还原酶）',
      '复合物 II（琥珀酸脱氢酶）',
      '复合物 III（泛醌-细胞色素 c 还原酶）',
      '复合物 IV（细胞色素 c 氧化酶），阻断电子传给 O₂'
    ],
    answer: 3,
    explanation:
      'CN⁻、CO、H₂S、N₃⁻ 与细胞色素 c 氧化酶（复合物 IV）的 a₃ 血红素 Fe²⁺ 紧密结合，阻断电子传给 O₂，使整个呼吸链停止、ATP 合成中止，迅速致死。鱼藤酮抑复合物 I、抗霉素 A 抑复合物 III。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-39',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'single',
    question: '经甘油-α-磷酸穿梭系统进入线粒体的胞质 NADH，其能量回收约为：',
    options: ['2.5 ATP', '1.5 ATP', '3 ATP', '4 ATP'],
    answer: 1,
    explanation:
      '甘油-α-磷酸穿梭中，胞质 NADH 的氢经内膜甘油-α-磷酸脱氢酶（辅基 FAD）传递，生成 FADH₂ 进入琥珀酸氧化呼吸链（绕过复合物 I），故 1 个胞质 NADH 约产 1.5 ATP；苹果酸-天冬氨酸穿梭则保持 NADH 形式、约产 2.5 ATP。',
    difficulty: 3
  },
  {
    id: 'q-biochemistry-40',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch8',
    type: 'multiple',
    question: '下列属于（或可引起）氧化磷酸化解偶联的物质/因素有：',
    options: [
      '2,4-二硝基苯酚（DNP）',
      '寡霉素',
      '褐色脂肪组织的解偶联蛋白 UCP1',
      '抗霉素 A'
    ],
    answer: [0, 2],
    explanation:
      'DNP 为脂溶性质子载体，UCP1 为生理性质子通道，二者均使 H⁺ 绕过 ATP 合酶回流，电子传递（耗氧）与 ATP 合成解偶联，能量以热散失。寡霉素抑制 ATP 合酶 F₀（偶联存在但通道被堵），抗霉素 A 抑制复合物 III，二者均非解偶联剂。',
    difficulty: 2
  },

  // ================= 第 9 章 糖代谢 =================
  {
    id: 'q-biochemistry-41',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'single',
    question: '糖酵解途径中最重要的限速酶是：',
    options: [
      '6-磷酸果糖激酶-1（PFK-1）',
      '己糖激酶',
      '丙酮酸激酶',
      '3-磷酸甘油醛脱氢酶'
    ],
    answer: 0,
    explanation:
      'PFK-1 催化 F-6P → F-1,6-BP，是糖酵解最重要的限速酶：受 ATP、柠檬酸、H⁺ 抑制，被 AMP、ADP 与最强的别构激活剂果糖-2,6-二磷酸激活。己糖激酶与丙酮酸激酶也是限速酶但地位次于 PFK-1。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-42',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'single',
    question: '1 分子葡萄糖经糖酵解转变为 2 分子丙酮酸，净生成：',
    options: ['2 ATP + 2 NADH', '4 ATP + 2 NADH', '2 ATP + 4 NADH', '30 ATP'],
    answer: 0,
    explanation:
      '糖酵解消耗 2 ATP（己糖激酶、PFK-1 各 1）、经两次底物水平磷酸化产出 4 ATP，净得 2 ATP；同时 3-磷酸甘油醛脱氢酶反应产 2 NADH。若计入 2 NADH 经呼吸链氧化（1.5~2.5 ATP/个）与丙酮酸进一步氧化，才有 30~32 ATP 的说法。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-43',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'truefalse',
    question: '肌糖原分解可直接生成游离葡萄糖补充血糖。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。肌肉缺乏葡萄糖-6-磷酸酶，G6P 只能进入糖酵解/磷酸戊糖途径；肌糖原中的碳只能以乳酸（Cori 循环）形式入肝异生为葡萄糖后间接补充血糖。葡萄糖-6-磷酸酶只存在于肝、肾（内质网）。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-44',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'single',
    question: '丙酮酸羧化酶的别构激活剂是：',
    options: ['AMP', '乙酰CoA', 'ATP', '长链脂酰CoA'],
    answer: 1,
    explanation:
      '乙酰CoA 是丙酮酸羧化酶的别构激活剂：乙酰CoA 堆积说明草酰乙酸不足（TCA 慢）或脂肪酸氧化旺盛，激活丙酮酸羧化酶生成 OAA，一方面回补 TCA，一方面推动糖异生；同时乙酰CoA 抑制 PDH，使丙酮酸流向羧化。',
    difficulty: 3
  },
  {
    id: 'q-biochemistry-45',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch9',
    type: 'single',
    question: '磷酸戊糖途径的主要生理意义是：',
    options: [
      '直接生成大量 ATP',
      '提供 NADPH 与核糖-5-磷酸',
      '生成乳酸以供肝糖异生',
      '将葡萄糖彻底氧化为 CO₂ 与 H₂O'
    ],
    answer: 1,
    explanation:
      '磷酸戊糖途径不直接产能（不生成 ATP），其核心意义是产生 NADPH（供还原性合成、谷胱甘肽还原、P450 羟化等）与核糖-5-磷酸（核苷酸与辅酶合成的原料）。限速酶为 6-磷酸葡萄糖脱氢酶（G6PD）。',
    difficulty: 2
  },

  // ================= 第 10 章 脂质代谢 =================
  {
    id: 'q-biochemistry-46',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'single',
    question: '酮体生成的器官与亚细胞定位是：',
    options: [
      '肝细胞线粒体',
      '肝细胞内质网',
      '心肌线粒体',
      '脂肪组织胞质'
    ],
    answer: 0,
    explanation:
      '酮体（乙酰乙酸、β-羟丁酸、丙酮）以乙酰CoA 为原料在肝细胞线粒体中生成（限速酶 HMG-CoA 合酶），经血液运输至肝外组织（心、肾、脑、骨骼肌）利用；肝内缺乏琥珀酰CoA 转硫酶，不能利用酮体。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-47',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'single',
    question: '1 分子棕榈酸（16C）在体内彻底氧化净生成 ATP 约为：',
    options: ['96', '106', '129', '12'],
    answer: 1,
    explanation:
      '棕榈酸经 7 轮 β 氧化生成 8 乙酰CoA + 7 FADH₂ + 7 NADH：8×10 + 7×1.5 + 7×2.5 = 108，减去活化消耗的 2 个高能磷酸键，净得 106 ATP（若按旧教材 3/2 计则为 129）。注意活化反应 ATP → AMP + PPi 相当于消耗 2 个高能键。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-48',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'single',
    question: '脂肪酸从头合成的限速酶是：',
    options: [
      '肉碱脂酰转移酶 I',
      '乙酰CoA 羧化酶',
      '脂肪酸合酶',
      'HMG-CoA 还原酶'
    ],
    answer: 1,
    explanation:
      '乙酰CoA 羧化酶（ACC，辅基生物素）催化乙酰CoA → 丙二酰CoA，是脂肪酸从头合成的限速酶：柠檬酸别构激活、长链脂酰CoA 反馈抑制、AMPK 磷酸化失活。CPT-I 是 β 氧化的限速酶，HMG-CoA 还原酶是胆固醇合成的限速酶。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-49',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'truefalse',
    question: '肝脏既能生成酮体，也能大量利用酮体供能。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。肝内缺乏琥珀酰CoA 转硫酶（SCOT），不能活化乙酰乙酸，故"肝内生成、肝外利用"。这一分工使脂肪酸的碳骨架以水溶性酮体形式经血运至脑、心等组织氧化供能。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-50',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'single',
    question: '他汀类药物降低血胆固醇的主要机制是：',
    options: [
      '抑制胆固醇从肠道的吸收',
      '竞争性抑制 HMG-CoA 还原酶，减少内源性合成并代偿性上调肝 LDL 受体',
      '促进 LDL 受体降解',
      '抑制脂蛋白脂肪酶'
    ],
    answer: 1,
    explanation:
      '他汀是 HMG-CoA 还原酶（胆固醇合成限速酶）的竞争性抑制剂；肝内合成减少引起细胞胆固醇下降，经 SREBP 通路代偿性上调 LDL 受体，加速血浆 LDL 的清除。依折麦布才抑制肠道吸收；PCSK9 抑制剂阻止 LDL 受体降解。',
    difficulty: 3
  },

  // ================= 第 11 章 氨基酸与核苷酸代谢 =================
  {
    id: 'q-biochemistry-51',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'single',
    question: '体内氨基酸脱氨基作用的主要方式是：',
    options: [
      '转氨基与 L-谷氨酸氧化脱氨基的联合脱氨基作用',
      '直接的氧化脱氨基',
      '转氨基作用单独完成',
      '脱羧基作用'
    ],
    answer: 0,
    explanation:
      '联合脱氨基作用（转氨 + L-谷氨酸脱氢酶）既是氨基酸分解的主要方式，也是可逆过程（用于非必需氨基酸合成）：各种氨基酸先将氨基转给 α-酮戊二酸生成谷氨酸，谷氨酸再经 L-谷氨酸脱氢酶氧化脱氨释放 NH₄⁺。转氨本身不产生净脱氨；肌肉中则主要经嘌呤核苷酸循环脱氨。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-52',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'single',
    question: '尿素循环的限速酶及其别构激活剂是：',
    options: [
      '精氨酸酶；N-乙酰谷氨酸',
      '氨甲酰磷酸合成酶 I（CPS-I）；N-乙酰谷氨酸（AGA）',
      '鸟氨酸氨甲酰转移酶；瓜氨酸',
      '精氨琥珀酸合成酶；ATP'
    ],
    answer: 1,
    explanation:
      'CPS-I 是尿素循环的限速酶，AGA（N-乙酰谷氨酸）是其必需别构激活剂（由乙酰CoA 与谷氨酸合成，精氨酸正反馈促其生成）。尿素 2 个氮分别来自 NH₄⁺ 与天冬氨酸，合成 1 分子尿素消耗 3 ATP（4 个高能磷酸键）。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-53',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'single',
    question: '人体内嘌呤分解代谢的终产物是：',
    options: ['尿素', '尿酸', 'β-丙氨酸', 'NH₃ + CO₂'],
    answer: 1,
    explanation:
      '嘌呤（腺嘌呤/鸟嘌呤 → 次黄嘌呤 → 黄嘌呤）最终经黄嘌呤氧化酶氧化为尿酸，人类缺乏尿酸酶不再分解。尿酸溶解度低，血中过高时以尿酸盐结晶沉积引发痛风；别嘌呤醇通过自杀抑制黄嘌呤氧化酶降尿酸。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-54',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'single',
    question: '下列属于纯生酮氨基酸的组合是：',
    options: [
      '亮氨酸、赖氨酸',
      '异亮氨酸、苯丙氨酸',
      '酪氨酸、色氨酸',
      '丙氨酸、天冬氨酸'
    ],
    answer: 0,
    explanation:
      '只生成乙酰CoA/乙酰乙酰CoA 的纯生酮氨基酸只有亮氨酸（Leu）与赖氨酸（Lys）；异亮氨酸、苯丙氨酸、酪氨酸、色氨酸为生糖兼生酮；其余均为生糖氨基酸。记忆："酮亮赖"。',
    difficulty: 3
  },
  {
    id: 'q-biochemistry-55',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'truefalse',
    question: '嘧啶碱分解产生的 β-丙氨酸水溶性好，不会像尿酸那样形成结晶沉积。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。嘧啶分解开环：胞嘧啶/尿嘧啶 → β-丙氨酸 + CO₂ + NH₃，胸腺嘧啶 → β-氨基异丁酸 + CO₂ + NH₃，产物水溶性好可随尿排出。这与嘌呤分解产生低溶度的尿酸（可致痛风）形成对比。',
    difficulty: 2
  },

  // ================= 第 12 章 物质代谢的整合与调节 =================
  {
    id: 'q-biochemistry-56',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'single',
    question: '体内唯一的降糖激素是：',
    options: ['胰高血糖素', '肾上腺素', '胰岛素', '糖皮质激素'],
    answer: 2,
    explanation:
      '胰岛素是唯一降低血糖的激素：经 RTK（IRS-PI3K-Akt）通路促进 GLUT4 转位、糖原合成、脂肪酸合成与蛋白合成，抑制糖异生与脂解。胰高血糖素、肾上腺素、糖皮质激素（以及生长激素、甲状腺素）均为升糖激素。',
    difficulty: 1
  },
  {
    id: 'q-biochemistry-57',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'single',
    question: '长期饥饿时脑组织的主要替代能源是：',
    options: ['脂肪酸', '酮体', '乳酸', '氨基酸'],
    answer: 1,
    explanation:
      '脂肪酸（与清蛋白结合）不能通过血脑屏障，脑不能利用长链脂肪酸；长期饥饿时肝生成的酮体（水溶性、可过血脑屏障）可满足脑约 50%~70% 的能量需要，使脑对葡萄糖需求由约 120 g/天降至约 40 g/天，从而节约肌肉蛋白。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-58',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'single',
    question: '肝脏不能利用酮体的原因是：',
    options: [
      '缺乏 HMG-CoA 合酶',
      '缺乏琥珀酰CoA 转硫酶（SCOT）',
      '线粒体内不能进行 β 氧化',
      '缺乏乙酰CoA 硫解酶'
    ],
    answer: 1,
    explanation:
      '肝内缺乏活化酮体的琥珀酰CoA 转硫酶（3-酮脂酰CoA 转移酶/SCOT），乙酰乙酸无法转变为乙酰乙酰CoA，故酮体"肝内生成、肝外利用"。心、肾、脑等肝外组织含该酶，可利用酮体氧化供能。',
    difficulty: 3
  },
  {
    id: 'q-biochemistry-59',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'truefalse',
    question: '胰高血糖素的受体属于酪氨酸激酶型受体。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。胰高血糖素受体是与 Gs 蛋白偶联的七次跨膜受体，经腺苷酸环化酶 → cAMP → PKA 级联发挥作用（升糖、促糖异生与酮体生成）。酪氨酸激酶型受体是胰岛素受体的类型。',
    difficulty: 2
  },
  {
    id: 'q-biochemistry-60',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'single',
    question: '长期饥饿时骨骼肌蛋白分解减少的主要原因是：',
    options: [
      '肌肉内蛋白水解酶被不可逆抑制',
      '脑利用酮体后对葡萄糖需求下降，糖异生的氨基酸原料需求随之减少',
      '血糖升高反馈抑制蛋白分解',
      '胰岛素分泌显著增加'
    ],
    answer: 1,
    explanation:
      '饥饿持续数日后，肝内脂肪酸大量氧化产生酮体，脑逐步适应利用酮体，对葡萄糖的需要由约 120 g/天降至约 40 g/天，糖异生对氨基酸（来自肌肉蛋白分解）的需求下降，肌肉蛋白分解由每日约 75 g 减至约 20 g——这是"以脂代糖、保护蛋白"的代谢适应总原则。',
    difficulty: 3
  }
]
