// ============================================================
// BioScholar 生命科学学习平台 - 分子生物学测验题
// 配套教材内容：src/data/subjects/molecular-biology.ts
// 每章 5 题，共 60 题；题型混合 single / truefalse / multiple
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const molecularBiologyQuiz: QuizQuestion[] = [
  // ---------------- 第一章 基因、基因组与中心法则 ----------------
  {
    id: 'q-molecular-biology-01',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'single',
    question:
      'Benzer 以 T4 噬菌体 rII 区为材料、通过比较顺式与反式排列突变体的表型，将基因细分到分子水平并提出了哪个概念？',
    options: [
      '顺反子（cistron），即不可再分的遗传功能单位',
      '突变子（muton），即最小的突变单位',
      '重组子（recon），即最小的重组单位',
      '复制子（replicon），即独立的复制单位',
    ],
    answer: 0,
    explanation:
      'Benzer 的顺反测验表明：当两个突变反式排列时出现突变表型，说明二者属于同一功能单位，即顺反子。突变子和重组子虽也由 Benzer 定义，但它们可小至单个核苷酸对，不是"不可再分的功能单位"。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-02',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'truefalse',
    question:
      'Roberts 与 Sharp 在腺病毒中发现的断裂基因证明：多数真核生物结构基因的编码序列是不连续的，外显子被内含子隔开，需在转录后经剪接去除内含子。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '1977 年 Roberts 与 Sharp 用 mRNA 与模板 DNA 杂交，在电镜下观察到 DNA 环状突起，证明外显子-内含子相间排列的断裂基因结构，二人因此获 1993 年诺贝尔生理学或医学奖。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-03',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'single',
    question: '关于 C 值悖论（C-value paradox），下列叙述正确的是？',
    options: [
      '物种的基因组大小与其进化复杂程度严格正相关',
      '某些两栖类的 C 值远大于人类，说明生物的 C 值与进化复杂度不成比例',
      'C 值悖论是指基因数目总是大于 DNA 含量所能编码的上限',
      'C 值悖论仅存在于原核生物中',
    ],
    answer: 1,
    explanation:
      'C 值指单倍体基因组的 DNA 总量。从原核到真核 C 值总体上升，但肺鱼、某些两栖类基因组可达 10¹¹ bp，远超人类约 3.1×10⁹ bp，即 C 值与复杂度不成比例。其原因是真核基因组含大量重复与非编码序列。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-04',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'single',
    question:
      '利用复性动力学分析人基因组 DNA 时，Alu 序列所属的组分及其性质是？',
    options: [
      '单一序列组分，单拷贝结构基因',
      '中度重复序列，由 7SL RNA 衍生的非自主 SINE 逆转座元件',
      '高度重复序列，位于着丝粒的 α 卫星 DNA',
      '中度重复序列，编码 5S rRNA 的串联基因簇',
    ],
    answer: 1,
    explanation:
      'Alu 序列约 280 bp，在人基因组中约 100 万拷贝，属于中度重复序列中的 SINE（短散在核元件），由 7SL RNA 衍生，无自主编码逆转录酶的能力，需借用 LINE-1 的酶系进行"复制-粘贴"式转座。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-05',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'multiple',
    question: '下列遗传信息流向中，已被实验证实存在的有（多选）？',
    options: [
      'DNA → RNA（转录）',
      'RNA → DNA（反转录）',
      '蛋白质的氨基酸序列 → 核酸的核苷酸序列',
      'RNA → RNA（RNA 病毒的复制）',
    ],
    answer: [0, 1, 3],
    explanation:
      '中心法则确立的核心断言是序列信息不能从蛋白质逆向流向核酸。DNA→RNA（转录）、RNA→DNA（Temin 与 Baltimore 发现的反转录）以及 RNA 病毒中的 RNA→RNA 复制均已获实验证实；蛋白质→核酸的信息逆向传递从未被发现。',
    difficulty: 3,
  },

  // ---------------- 第二章 DNA 复制 ----------------
  {
    id: 'q-molecular-biology-06',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'single',
    question:
      'Meselson-Stahl 实验中，将 ¹⁵N 标记的大肠杆菌转入 ¹⁴N 培养基培养两代后，CsCl 密度梯度离心的结果为？',
    options: [
      '全部为一条中间密度（杂合）带',
      '全部为一条轻密度带',
      '一条轻密度带与一条中间密度带，比例约 1:1',
      '一条重密度带与一条轻密度带，比例约 1:1',
    ],
    answer: 2,
    explanation:
      '半保留复制下第一代全部为 ¹⁵N/¹⁴N 杂合双链（中间密度带）；第二代 DNA 分子中一半为轻链（¹⁴N/¹⁴N）、一半为杂合链，出现轻带与杂合带 1:1 分离。该结果排除了全保留与分散复制两种假说。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-07',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'truefalse',
    question:
      'DNA 聚合酶 I（pol I）是大肠杆菌染色体复制时前导链和后随链延伸的主要聚合酶。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      'pol I 主要负责 RNA 引物切除、缺口填补与损伤修复（其 5′→3′ 外切活性支持切口平移）。复制叉上主导两条子链合成的是 DNA pol III 全酶，其 β 滑动夹赋予高续进性。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-08',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'single',
    question: '大肠杆菌中切除冈崎片段 5′ 端 RNA 引物并填补缺口的酶是？',
    options: [
      'DNA pol III 全酶',
      'DNA pol I（借其 5′→3′ 外切与聚合活性）',
      'DNA 连接酶',
      'DnaG 引物酶',
    ],
    answer: 1,
    explanation:
      '冈崎片段成熟过程：pol I 的 5′→3′ 外切活性切除 RNA 引物，同时其聚合活性以切口平移方式填补缺口，最后由 DNA 连接酶封闭相邻片段间的切口。pol III 负责片段合成而非引物去除。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-09',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'single',
    question:
      'DNA pol III 全酶中，赋予聚合酶高续进性（processivity）、像"套环"一样箍住 DNA 的亚基是？',
    options: ['α 亚基', 'ε 亚基', 'β 亚基（滑动夹）', 'γ 复合体（钳载蛋白）'],
    answer: 2,
    explanation:
      'β 亚基以同源二聚体形成闭合环状的滑动夹，将 pol III 核心酶锁定在 DNA 上实现高续进性。γ 复合体是 ATP 依赖的钳载蛋白，负责把 β 夹装载到引物-模板连接处；α 为催化亚基、ε 为校对外切亚基。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-10',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'single',
    question: '关于端粒酶，下列叙述正确的是？',
    options: [
      '端粒酶是一种 DNA 依赖的 DNA 聚合酶',
      '端粒酶是由 RNA 模板与逆转录酶（TERT）组成的核糖核蛋白，以自身 RNA 为模板延伸端粒',
      '端粒酶以滚环方式复制整个线性染色体',
      '端粒酶在正常体细胞中持续高活性，导致细胞永生化',
    ],
    answer: 1,
    explanation:
      '端粒酶由 Greider 与 Blackburn 于 1985 年在四膜虫中发现，自带 RNA 模板（TER）与逆转录酶亚基（TERT），以端粒 3′ 突出单链为引物回折延伸 TTAGGG 重复，解决末端复制问题。体细胞端粒酶活性很低，约 85%–90% 的肿瘤细胞重新激活端粒酶。',
    difficulty: 3,
  },

  // ---------------- 第三章 DNA 损伤、修复与重组 ----------------
  {
    id: 'q-molecular-biology-11',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'single',
    question: '紫外线（260 nm）照射 DNA 产生的最典型损伤是？',
    options: [
      '腺嘌呤脱氨生成次黄嘌呤',
      '环丁烷嘧啶二聚体（CPD）与 6-4 光产物',
      'DNA 双链断裂',
      'O⁶-甲基鸟嘌呤',
    ],
    answer: 1,
    explanation:
      'UV 被相邻嘧啶碱基吸收，引发 [2+2] 环加成形成环丁烷嘧啶二聚体（CPD）或 6-4 光产物，使双螺旋扭曲、阻断复制与转录。双链断裂主要由电离辐射引起，烷基化损伤源于烷化剂，脱氨属于自发性水解反应。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-12',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'truefalse',
    question:
      '光复活修复由光裂合酶催化，利用可见光能量直接将嘧啶二聚体恢复为两个正常碱基，整个过程不需要切除和重新合成核苷酸。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '光复活是唯一"一步逆转"的直接修复方式：光裂合酶识别 CPD，以 FADH⁻ 等辅基吸收 300–500 nm 光能断开环丁烷环，不切除任何核苷酸。胎盘类动物（包括人）缺失光裂合酶，依赖核苷酸切除修复清除 UV 损伤。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-13',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'single',
    question:
      '大肠杆菌核苷酸切除修复（NER）中，负责在损伤两侧切割磷酸二酯键的内切核酸酶是？',
    options: ['UvrA', 'UvrB', 'UvrC', 'UvrD'],
    answer: 2,
    explanation:
      'NER 流程：UvrA₂B 识别并解链损伤区 → UvrB 停留损伤处 → UvrC 作为内切酶在损伤 5′ 侧约 8 nt、3′ 侧约 4–5 nt 处切割 → UvrD 解旋酶取出 12–13 nt 寡核苷酸片段 → pol I 填补、连接酶封口。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-14',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'single',
    question: 'Holliday 连接体经解离酶切割后，不发生旁侧遗传标记重组的产物类型称为？',
    options: ['拼接型（splice）', '补丁型（patch）', '套索型（lariat）', 'D 环型（D-loop）'],
    answer: 1,
    explanation:
      'Holliday 连接体沿不同平面切割产生两种结果：补丁型仅形成局部异源双链"补丁"，旁侧标记不重组；拼接型则发生交互重组。套索是剪接中间体，D 环是 RecA 链侵入形成的同源重组中间结构。',
    difficulty: 3,
  },
  {
    id: 'q-molecular-biology-15',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'multiple',
    question: '关于转座子，下列叙述正确的有（多选）？',
    options: [
      '细菌插入序列 IS 两端具反向重复序列，仅编码转座酶',
      'Tn3 家族以复制型机制转座，转座后形成共整合体再由解离酶拆分',
      '人 LINE-1 编码具内切酶与逆转录酶活性的蛋白，经 RNA 中间体转座',
      'Alu 序列是自主 DNA 转座子，自身编码转座所需的全部酶',
    ],
    answer: [0, 1, 2],
    explanation:
      'IS 元件由两端反向重复与转座酶基因构成；Tn3 走复制型路线，需 res 位点与解离酶；LINE-1 是自主逆转座子，ORF2 兼具内切酶与逆转录酶活性（靶点引发反转录）。Alu 是非自主 SINE，必须"借用"LINE-1 的酶系，自身不编码任何酶。',
    difficulty: 3,
  },

  // ---------------- 第四章 转录 ----------------
  {
    id: 'q-molecular-biology-16',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'single',
    question: '大肠杆菌 RNA 聚合酶全酶的亚基组成是？',
    options: ['α₂ββ′', 'α₂ββ′ωσ', 'αββ′ωσ', 'α₂β₂β′₂'],
    answer: 1,
    explanation:
      '核心酶为 α₂ββ′ω，加入 σ 因子后组成全酶 α₂ββ′ωσ。σ 因子负责识别启动子（-35 与 -10 区），起始约 10 nt 合成后即释放，核心酶承担延伸。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-17',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'single',
    question: '原核启动子中 Pribnow 盒（共有序列 TATAAT）的位置是？',
    options: ['-35 区', '-10 区', '转录起点 +1 处', '-40 至 -60 的 UP 元件'],
    answer: 1,
    explanation:
      'Pribnow 盒位于转录起始点上游约 10 bp（-10 区），AT 富集利于局部解链形成开放复合物；-35 区为 TTGACA（Sextama 盒），被 σ 因子 4 结构域识别；UP 元件位于 -40～-60，由 α-CTD 结合。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-18',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'single',
    question: '关于 ρ 因子依赖的转录终止，下列叙述正确的是？',
    options: [
      '终止信号位于新生 RNA 的 rut 位点，ρ 因子需转录本不被核糖体覆盖',
      'ρ 因子结合 DNA 模板并直接推开 RNA 聚合酶',
      'ρ 因子依赖终止需要转录本形成 GC 丰富的茎环与 poly(U) 尾',
      'ρ 因子不消耗 ATP 即可完成终止',
    ],
    answer: 0,
    explanation:
      'ρ 因子是同源六聚体 ATP 依赖解旋酶，结合 RNA 上富含 C、缺乏二级结构的 rut 位点，沿 RNA 追赶暂停的 RNA 聚合酶后侵入并解开 RNA-DNA 杂交体。茎环 + poly(U) 是内在终止子的特征，与 ρ 因子无关。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-19',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'single',
    question: '三种真核细胞核 RNA 聚合酶中，对低浓度 α-鹅膏蕈碱（约 1 μg/ml）最敏感的是？',
    options: ['RNA pol I', 'RNA pol II', 'RNA pol III', '线粒体 RNA 聚合酶'],
    answer: 1,
    explanation:
      'pol II（转录 mRNA 前体）对 α-鹅膏蕈碱最敏感；pol III 在较高浓度下被抑制；pol I 不敏感。该敏感性差异是鉴定三类聚合酶的经典依据，也是毒鹅膏中毒肝损伤的分子机制。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-20',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch4',
    type: 'truefalse',
    question:
      '通用转录因子 TFIIH 具有双重功能：其 XPB/XPD 解旋酶参与开放复合物形成，同时其 CDK7 激酶磷酸化 Pol II CTD 的 Ser5，并且 TFIIH 也是核苷酸切除修复（NER）的组分。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'TFIIH 是"转录-修复"两栖复合物：在转录中以 XPB（3′→5′ 解旋酶）打开起始位点附近双链、CDK7/MO15 磷酸化 CTD Ser5 促启动子清除；在 NER 中其解旋酶负责损伤区解链。着色性干皮病部分亚型（XPB/XPD）与 Cockayne 综合征即源于其组分缺陷。',
    difficulty: 3,
  },

  // ---------------- 第五章 RNA 的加工 ----------------
  {
    id: 'q-molecular-biology-21',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'single',
    question: '真核 mRNA 5′ 帽子结构的核心特征是？',
    options: [
      '7-甲基鸟苷（m⁷G）经 5′→5′ 三磷酸桥连接到 mRNA 5′ 端',
      '7-甲基鸟苷以正常的 3′→5′ 磷酸二酯键连接',
      ' poly(A) 尾巴直接加在 5′ 端',
      '2′-O-甲基化的腺苷三磷酸',
    ],
    answer: 0,
    explanation:
      '加帽经三步酶促反应：RNA 三磷酸酶切去 γ-磷酸 → 鸟苷酰转移酶以 5′→5′ 三磷酸桥加入 GMP → 甲基转移酶修饰 N⁷ 得 m⁷G（cap 0），再可对后续核苷酸进行 2′-O-甲基化（cap 1/2）。帽子保护 mRNA、被 eIF4E 识别以启动翻译。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-22',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'single',
    question: 'pre-mRNA 3′ 端多聚腺苷酸化的关键顺式信号（位于切割位点上游 10–30 nt）是？',
    options: ['TATA 盒', 'AAUAAA', 'GU-rich 下游元件', 'Kozak 序列'],
    answer: 1,
    explanation:
      'AAUAAA 六核苷酸由 CPSF 识别；下游 GU-rich 元件由 CstF 结合；切割发生在 CA 处，随后 PAP 加 poly(A) 并由 PABPN1/PABP 稳定。TATA 盒是转录起始元件，Kozak 序列是翻译起始语境。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-23',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'single',
    question: '剪接体催化的第一步转酯反应中，亲核攻击 5′ 剪接位点磷酸二酯键的基团是？',
    options: [
      '5′ 外显子的 3′-OH',
      '分支点腺苷（A）的 2′-OH',
      '内含子 3′ 端的 3′-OH',
      '水分子（水解反应）',
    ],
    answer: 1,
    explanation:
      '剪接经两步转酯：第一步由分支点 A 的 2′-OH 攻击 5′ 剪接位点，形成套索中间体并释放 5′ 外显子的 3′-OH；第二步由该 3′-OH 攻击 3′ 剪接位点，连接两个外显子并释放套索内含子。全过程不需水解断键。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-24',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'truefalse',
    question:
      'II 型内含子自剪接以内部腺苷的 2′-OH 发起亲核攻击并形成套索中间体，其机制与剪接体催化的 pre-mRNA 剪接高度同源，提示剪接体可能由 II 型内含子演化而来。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'II 型内含子经两步转酯形成套索，催化核心的二级结构与 U2/U6 snRNA 同源，支持"snRNP 劫持 II 型内含子催化核心"的演化假说。I 型内含子则需外源鸟苷酸攻击且释放线形内含子，机制不同。',
    difficulty: 3,
  },
  {
    id: 'q-molecular-biology-25',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch5',
    type: 'single',
    question:
      '锥虫线粒体 mRNA 中大规模 U 插入/删除式 RNA 编辑所依赖的小分子模板 RNA 称为？',
    options: ['snRNA', 'snoRNA', '引导 RNA（gRNA）', 'miRNA'],
    answer: 2,
    explanation:
      'gRNA 由动基体基因组微环编码，以 5′ 锚定区与 mRNA 配对，指导编辑体（含末端尿苷酰转移酶与 RNA 连接酶）在配对间隙插入或删除 U。snRNA 组装剪接体，snoRNA 指导 rRNA 修饰，miRNA 介导基因沉默。',
    difficulty: 3,
  },

  // ---------------- 第六章 翻译 ----------------
  {
    id: 'q-molecular-biology-26',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'single',
    question:
      'Nirenberg 与 Matthaei 在无细胞体系中加入 poly(U) 后合成的多肽是？由此确定的密码子是？',
    options: [
      '多聚苯丙氨酸；UUU',
      '多聚脯氨酸；CCC',
      '多聚赖氨酸；AAA',
      '多聚甘氨酸；GGG',
    ],
    answer: 0,
    explanation:
      '1961 年 poly(U) 实验获得聚苯丙氨酸，确定 UUU 编码 Phe，这是首个被破译的密码子。随后 poly(A)→Lys、poly(C)→Pro 亦被确定。完全破译还需 Khorana 的重复共聚物与三核苷酸结合实验。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-27',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'single',
    question:
      '按 Crick 摆动假说，反密码子 5′ 端（摆动位）为肌苷（I）时，可与密码子第 3 位的哪些碱基配对？',
    options: ['仅 U', 'U 或 C', 'U、C 或 A', 'A 或 G'],
    answer: 2,
    explanation:
      '摆动规则：反密码子 5′ 位的 G 可与 U/C 配对，U 可与 A/G，I（肌苷）可与 U、C、A 三者配对。因此含 I 的 tRNA 可识别三个简并密码子，减少了所需 tRNA 的种类（大肠杆菌约 40 余种有效 tRNA 即可读全部密码子）。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-28',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'single',
    question:
      '氨酰-tRNA 合成酶"双筛"校对机制的典型例子是：IleRS 的编辑位点可水解错误活化的哪种氨基酸？',
    options: ['Leu（比 Ile 大）', 'Val（比 Ile 小）', 'Ser', 'Tyr'],
    answer: 1,
    explanation:
      '双筛机制：合成（催化）位点以几何排阻排除过大的底物，编辑（水解）位点只允许比正确氨基酸更小的副底物进入。Val 比 Ile 略小，能进入 IleRS 催化位点被活化，随后在编辑位点被水解除去，使错误率从约 10⁻² 降至 10⁻⁵ 以下。',
    difficulty: 3,
  },
  {
    id: 'q-molecular-biology-29',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'truefalse',
    question:
      '真核生物翻译起始不依赖 SD 序列：Met-tRNAᴹᵉᵗ 先与 40S 小亚基结合，再由 eIF4E 识别 5′ 帽并扫描至合适 AUG 起始。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '真核起始遵循扫描模型：eIF2-GTP-Met-tRNAᴹᵉᵗ 三元复合物与 40S（携 eIF3 等）结合后，经 eIF4E/4G/4A 结合帽子结构，从 5′ 端扫描至 Kozak 序列语境的 AUG 处定位起始密码子。SD-反 SD 配对是原核特有机制。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-30',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch6',
    type: 'single',
    question: '嘌呤霉素抑制翻译的机制是？',
    options: [
      '结合 30S 亚基引起密码子错读',
      '阻塞 50S 亚基的多肽出口通道',
      '作为氨酰-tRNA 3′ 端类似物进入 A 位，接受肽酰基后从核糖体脱落',
      '抑制真核核糖体的转位步骤',
    ],
    answer: 2,
    explanation:
      '嘌呤霉素结构上模拟氨酰-腺苷（tRNA 3′ 接受端），进入 A 位后 P 位肽酰基转移到其 α-氨基上，形成的肽酰-嘌呤霉素随即脱离核糖体，导致提前释放。它对 70S 与 80S 核糖体均有作用，曾是证明肽键转移方向的关键工具。',
    difficulty: 3,
  },

  // ---------------- 第七章 原核基因表达调控 ----------------
  {
    id: 'q-molecular-biology-31',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'single',
    question: '乳糖操纵子的天然诱导物（可与 LacI 阻遏蛋白结合并使其变构解离）是？',
    options: ['葡萄糖', '乳糖', '异乳糖（allolactose）', 'IPTG'],
    answer: 2,
    explanation:
      '乳糖经细胞内微量 β-半乳糖苷酶异构化为异乳糖（β-1→6 糖苷键），作为天然诱导物结合 LacI 使其与操纵基因的亲和力下降约 1000 倍而解离。IPTG 是不可代谢的人工"免费"诱导物，仅用于实验，并非天然诱导物。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-32',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'single',
    question: '乳糖操纵子高水平表达所需的两个条件是？',
    options: [
      '有葡萄糖、无乳糖',
      '有乳糖、有葡萄糖',
      '有乳糖、无葡萄糖（cAMP 水平高）',
      '无乳糖、无葡萄糖',
    ],
    answer: 2,
    explanation:
      '操纵子的"与门"逻辑：乳糖存在使 LacI 解除（负调控解除），同时葡萄糖缺乏使 cAMP 升高、CAP-cAMP 结合启动子上游位点募集 RNA 聚合酶（正调控开启），二者同时满足才有高水平转录。这解释了二度生长曲线中乳糖的延迟利用。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-33',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'single',
    question:
      '色氨酸浓度充足时，trp 前导区 mRNA 形成的、导致转录提前终止的二级结构是？',
    options: ['1:2 暂停发夹', '2:3 抗终止子发夹', '3:4 终止子发夹（GC 茎环 + poly(U) 尾）', '核糖开关适体结构'],
    answer: 2,
    explanation:
      '色氨酸充足时核糖体顺利翻译前导肽越过两个 UGG 并覆盖区段 2，使新转录的区段 3 与 4 配对形成不依赖于 ρ 因子的终止子发夹，聚合酶提前脱落；色氨酸饥饿时核糖体停在 UGG 处，区段 2 与 3 配对形成抗终止子，转录得以读通。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-34',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'truefalse',
    question:
      '在 lacI⁺ lacOᶜ / lacI⁺ lacO⁺ 的部分二倍体中，含 Oᶜ 的一条染色体上的 lacZ 呈组成型表达，说明操纵基因（O）是顺式作用元件，其突变不能被反式的 LacI⁺ 产物所补偿。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'lacOᶜ 突变使阻遏蛋白无法结合，且 O 位点本身不编码可扩散产物，故只影响同一条 DNA 链（顺式）上的基因表达；与之相反，lacI⁺ 的产物为可扩散蛋白，可反式互补另一条染色体上的 lacI⁻ 突变。这正是 Jacob-Monod 实验区分顺反式元件的经典逻辑。',
    difficulty: 3,
  },
  {
    id: 'q-molecular-biology-35',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch7',
    type: 'single',
    question: '氨基酸饥饿触发严紧反应时，由 RelA 催化合成的效应分子是？',
    options: ['cAMP', 'ppGpp（鸟苷四磷酸，"魔斑"）', 'cGMP', 'IP₃'],
    answer: 1,
    explanation:
      '空载 tRNA 进入 A 位激活核糖体相关 RelA，催化 GDP+ATP 合成 ppGpp（鸟苷四磷酸；以 GTP 为底物则生成 pppGpp，二者合称"魔斑"）。ppGpp 与 DksA 协同改变 RNA 聚合酶启动子选择：下调 rRNA/tRNA 等稳定 RNA 转录、上调氨基酸合成基因，使细胞进入低生长的应急模式。SpoT 负责 ppGpp 的水解。',
    difficulty: 3,
  },

  // ---------------- 第八章 真核基因表达调控 ----------------
  {
    id: 'q-molecular-biology-36',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'single',
    question: '组蛋白乙酰化与基因表达的一般关系是？',
    options: [
      '乙酰化中和赖氨酸正电荷、松散染色质，通常与转录激活相关',
      '乙酰化使染色质更紧密，抑制转录',
      '乙酰化只发生在组蛋白 H1',
      '乙酰化由 HDAC 催化写入',
    ],
    answer: 0,
    explanation:
      'HAT（如 CBP/p300）将乙酰基加到组蛋白尾部赖氨酸上，中和其正电荷、削弱与 DNA 的静电吸引，染色质松散而利于转录；去乙酰化由 HDAC 执行、与抑制相关。H3K27ac 还是活跃增强子的标志。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-37',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'single',
    question: '下列哪一项不属于增强子（enhancer）的典型特性？',
    options: [
      '作用与距离远近无关（可相距数十 kb）',
      '作用与自身方向无关（正向/反向插入均有效）',
      '必须位于启动子核心元件内部才能发挥作用',
      '具有组织或细胞特异性',
    ],
    answer: 2,
    explanation:
      '增强子可位于基因上游、下游或内含子中，距离与方向均不敏感，通过 DNA 成环与启动子处的中介复合物沟通，且常具组织特异性。"必须位于启动子内部"与此三特性矛盾，为错误描述。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-38',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'single',
    question: 'DNA 复制后在新合成链上拷贝亲代链 CpG 甲基化模式的酶是？',
    options: ['DNMT3A', 'DNMT3B', 'DNMT1', 'TET2'],
    answer: 2,
    explanation:
      'DNMT1 识别半甲基化的 CpG 位点（辅以 UHRF1），在复制叉处将甲基拷贝到新链，维持表观遗传记忆；DNMT3A/3B 负责从头建立甲基化。TET 家族参与去甲基化（5mC→5hmC）。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-39',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'single',
    question: 'miRNA 生物发生的正确顺序是？',
    options: [
      'pri-miRNA → Drosha 切割 → exportin-5 出核 → Dicer 加工 → Ago2/RISC',
      'pri-miRNA → Dicer 切割 → Drosha 加工 → 出核 → RISC',
      'pre-miRNA → Drosha → 细胞核内 RISC → 出核',
      'pri-miRNA → exportin-5 → Drosha → Dicer → RISC',
    ],
    answer: 0,
    explanation:
      'pri-miRNA 在核内被 Drosha-DGCR8 微加工体切出约 70 nt 发夹 pre-miRNA，经 exportin-5 运至胞质，由 Dicer 剪成约 22 nt 双链，装载 Ago2 形成成熟 RISC，以种子序列识别靶 mRNA 3′ UTR 实现抑制。',
    difficulty: 3,
  },
  {
    id: 'q-molecular-biology-40',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch8',
    type: 'truefalse',
    question:
      '中介复合物（Mediator）是连接增强子上转录激活因子与 RNA pol II 基础转录机器的通用接头复合物，约由 30 个亚基组成。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'Mediator 以头部/中部模块接触 pol II 与通用转录因子、尾部模块结合激活因子，是增强子信息下传的"总线"；其 CDK8 模块还具调节功能。Mediator 缺失时增强子信号无法有效传递到基础机器。',
    difficulty: 2,
  },

  // ---------------- 第九章 分子生物学研究技术 ----------------
  {
    id: 'q-molecular-biology-41',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'single',
    question: '要检测某 mRNA 的大小与相对丰度，最经典的印迹技术是？',
    options: ['Southern 印迹', 'Northern 印迹', 'Western 印迹', 'Southwestern 印迹'],
    answer: 1,
    explanation:
      'Northern 印迹以变性凝胶分离 RNA、转膜后与标记探针杂交，可同时给出转录本的大小与丰度信息。Southern 检测 DNA、Western 检测蛋白质。qPCR 虽可定量丰度，但给不出分子量大小的直接信息。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-42',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'single',
    question: 'qPCR 中 TaqMan 探针法释放荧光信号依赖的酶活性是？',
    options: [
      'Taq 酶的 5′→3′ 外切核酸酶活性',
      'Taq 酶的 3′→5′ 校对活性',
      '探针自身的自催化切割',
      '碱性磷酸酶',
    ],
    answer: 0,
    explanation:
      'TaqMan 探针 5′ 端带报告荧光基团、3′ 端带淬灭基团；延伸阶段聚合酶到达探针结合处时，以其 5′→3′ 外切活性切下报告基团，使其脱离淬灭基团而发光。Taq 酶本身缺乏 3′→5′ 校对活性。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-43',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'single',
    question: '蓝白斑筛选中，含重组质粒的菌落呈白色的原因是？',
    options: [
      '插入片段破坏了载体上 lacZα（α 肽）的读码框，α 互补失效',
      '载体丢失了抗性基因',
      '插入片段抑制了 IPTG 的摄入',
      '宿主菌的 lacZω 肽基因被插入失活',
    ],
    answer: 0,
    explanation:
      'pUC 类载体将多克隆位点置于 lacZα 序列内，外源片段插入后 α 肽失活，不能与宿主（ΔM15，缺 α 肽但保留 ω 肽）互补形成有活性的 β-半乳糖苷酶，X-gal 不显蓝色而呈白色菌落；空载体则显蓝色。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-44',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'truefalse',
    question:
      'Sanger 双脱氧测序中，链终止的直接原因是 ddNTP 缺乏 3′-OH，无法与下一个核苷酸形成磷酸二酯键。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'ddNTP 的 2′ 与 3′ 位均脱氧（2′,3′-ddNTP），掺入后 3′ 端无羟基可供延伸，链在此终止。四种 ddNTP 分别掺入产生相差 1 nt 的片段群，经高分辨电泳即可读序。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-45',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch9',
    type: 'single',
    question: '染色质免疫沉淀（ChIP）实验的正确操作顺序是？',
    options: [
      '甲醛交联 → 超声打断染色质 → 抗体免疫沉淀 → 逆转交联 → DNA 纯化与检测',
      '超声打断 → 甲醛交联 → 免疫沉淀 → 逆转交联 → 检测',
      '免疫沉淀 → 交联 → 打断 → 纯化 → 检测',
      '交联 → 免疫沉淀 → 打断 → 逆转交联 → 检测',
    ],
    answer: 0,
    explanation:
      '必须先交联固定蛋白-DNA 关系，再以超声将染色质剪切为 200–500 bp 片段，用特异抗体（针对组蛋白修饰或转录因子）沉淀结合的 DNA 片段，逆转交联释放并纯化 DNA 后行 qPCR 或测序。若先打断后交联，蛋白-DNA 结合信息将部分丢失。',
    difficulty: 3,
  },

  // ---------------- 第十章 基因组学与系统生物学 ----------------
  {
    id: 'q-molecular-biology-46',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'single',
    question: '人类基因组计划国际公共联盟采用的测序战略是？',
    options: [
      '全基因组鸟枪法（WGS）',
      '分级作图战略（BAC-by-BAC：遗传图→物理图→逐克隆测序）',
      '直接 cDNA 大规模测序拼接',
      '光学图谱为主、测序为辅',
    ],
    answer: 1,
    explanation:
      '公共联盟走"由图到序"的分级路线：先构建遗传图与以 STS 为锚定的物理图，再将 BAC 重叠群逐一鸟枪测序、逐级装配，可靠但周期长；Celera 公司则以全基因组鸟枪法竞争，两者于 2001 年分别发表工作框架图。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-47',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'single',
    question: '人类基因组计划的测序结果揭示，人蛋白编码基因的总数约为？',
    options: ['约 2 万个', '约 5 万个', '约 10 万个', '约 30 万个'],
    answer: 0,
    explanation:
      'HGP 发现人蛋白编码基因约 2 万个（约 1.5% 的序列编码蛋白质），远低于此前估计的 5–10 万个。蛋白质组的多样性主要由选择性剪接、修饰与互作组合产生，而非基因数目。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-48',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'single',
    question: 'RNA-seq 定量中，更适合跨样本比较的归一化指标是？',
    options: ['RPKM', 'FPKM', 'TPM', 'Ct 值'],
    answer: 2,
    explanation:
      'TPM 先按基因长度归一再按文库总量归一，保证各样本的 TPM 总和一致，便于跨样本直接比较；RPKM/FPKM 只做长度与自身文库归一，样本间总量不等。Ct 值属于 qPCR 参数而非 RNA-seq 指标。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-49',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'truefalse',
    question:
      '重亚硫酸氢盐（bisulfite）处理后测序：未甲基化的胞嘧啶转化为 U（扩增后读作 T），而 5-甲基胞嘧啶仍读作 C，据此可实现单碱基分辨的甲基化检测。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'NaHSO₃ 对未甲基化 C 的磺酸脱氨反应使其变为 U，PCR 扩增后表现为 T；5mC 因化学惰性保持 C。将处理后的测序 reads 与参考基因组比对，C/T 差异即定位每个 CpG 的甲基化状态，是甲基化组学（WGBS/RRBS）的基础。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-50',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch10',
    type: 'single',
    question: '由祖先基因经复制事件产生、常发生功能分化的同源基因称为？',
    options: ['直系同源（ortholog）', '旁系同源（paralog）', '异源同源（xenolog）', '同工基因'],
    answer: 1,
    explanation:
      '旁系同源源于基因复制（如人 β-与 δ-珠蛋白），常经亚功能化/新功能化分化；直系同源源于物种形成事件（如人/小鼠的 β-珠蛋白），功能通常保守，是功能注释转移的首选依据。',
    difficulty: 3,
  },

  // ---------------- 第十一章 基因编辑与基因工程 ----------------
  {
    id: 'q-molecular-biology-51',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'single',
    question: '化脓链球菌 Cas9（SpCas9）识别的 PAM 序列是？',
    options: ["5'-NGG-3'", "5'-TTTV-3'", "5'-NNGRRT-3'", "3'-NGG-5' 位于靶序列 5′ 侧"],
    answer: 0,
    explanation:
      "SpCas9 要求靶序列紧邻的 3′ 侧存在 5′-NGG-3′ 的 PAM。PAM 是自我/非我识别的第一道闸门：自身 CRISPR 阵列不含 PAM，故不被自身免疫攻击。TTTV 为 Cas12a 的 PAM，NNGRRT 为 SaCas9 的 PAM（Cas13 靶向 RNA 不用 PAM）。",
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-52',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'single',
    question: 'Cas9 蛋白中负责切割非靶标链（与 sgRNA 不互补的那条链）的结构域是？',
    options: ['HNH 结构域', 'RuvC 结构域', 'PI 结构域', 'REC 叶'],
    answer: 1,
    explanation:
      'Cas9 的两个核酸酶结构域分工：HNH 切割与 sgRNA 互补的靶标链，RuvC 切割非靶标链，二者在 PAM 上游 3 bp 处产生平末端 DSB。D10A 突变使 RuvC 失活（形成切口酶），H840A 使 HNH 失活。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-53',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'single',
    question: '腺嘌呤碱基编辑器（ABE）实现的碱基转换是？',
    options: ['C·G → T·A', 'A·T → G·C', 'G·C → A·T', 'T·A → C·G'],
    answer: 1,
    explanation:
      'ABE 由工程化的 TadA 脱氨酶将 A 水解脱氨为肌苷（I），复制与修复将其读作 G，最终实现 A·T→G·C。CBE 则经 APOBEC 将 C 脱氨为 U 实现 C·G→T·A。二者无需 DSB，但仅限相应类型的转换。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-54',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'single',
    question: '先导编辑（prime editing）中，兼具引导与自带修复模板功能的 RNA 分子是？',
    options: ['sgRNA', 'pegRNA', 'tracrRNA', 'gRNA of Cas12a'],
    answer: 1,
    explanation:
      'pegRNA 在普通向导骨架的 3′ 端延伸出两段：引物结合位点（PBS，与切开的靶标链 3′ 端配对）和逆转录模板（RTT，编码目标编辑序列）。Cas9(H840A) 切口酶-逆转录酶融合体据此合成编辑翼，经 flap 竞争与错配修复固定编辑，无需外源供体 DNA。',
    difficulty: 3,
  },
  {
    id: 'q-molecular-biology-55',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch11',
    type: 'truefalse',
    question:
      '非同源末端连接（NHEJ）是一种高保真修复途径，依赖同源模板实现精确的定点突变修复。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      'NHEJ 不需要同源模板，直接将断裂末端连接，快速但易错，常产生插入/缺失（indel）导致移码，故适用于基因敲除；依赖同源供体模板、实现精确定点改造的是 HDR，且 HDR 仅在 S/G2 期活跃。',
    difficulty: 2,
  },

  // ---------------- 第十二章 癌分子生物学 ----------------
  {
    id: 'q-molecular-biology-56',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'single',
    question: '历史上首个被鉴定、并证明源自细胞原癌基因的病毒癌基因是？',
    options: ['v-ras', 'v-src', 'v-myc', 'v-abl'],
    answer: 1,
    explanation:
      '劳氏肉瘤病毒的 v-src 由 Varmus 与 Bishop（1976）以分子杂交证明与正常鸡细胞的 c-src 同源，确立"原癌基因"概念（1989 年诺贝尔奖）。v-src 因 C 端缺失 Tyr527 自抑制位点而组成性激活酪氨酸激酶活性。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-57',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'single',
    question: '慢性髓系白血病（CML）中费城染色体的分子本质是？',
    options: [
      't(9;22) 易位产生的 BCR-ABL 融合基因，其酪氨酸激酶活性组成性增强',
      't(8;14) 易位将 c-MYC 置于 IgH 增强子控制下',
      't(15;17) 产生的 PML-RARα 融合蛋白',
      '17 号染色体上 TP53 的缺失',
    ],
    answer: 0,
    explanation:
      '费城染色体为 22 号与 9 号易位 t(9;22)(q34;q11)，形成 BCR-ABL 融合基因（p210），ABL 激酶失控激活。伊马替尼（Gleevec）作为 ATP 竞争性抑制剂针对该激酶，使 CML 成为靶向治疗的典范。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-58',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'single',
    question: 'p53 介导 G1 期阻滞所诱导的 CDK 抑制蛋白是？',
    options: ['p16^INK4a', 'p21^CIP1', 'p27^KIP1', 'cyclin D1'],
    answer: 1,
    explanation:
      'p53 作为转录因子激活 p21^CIP1（CDKN1A），广谱抑制 cyclin-CDK 复合物，使 Rb 保持低磷酸化、扣押 E2F，细胞阻滞于 G1 为修复争取时间。损伤严重时 p53 则转而诱导 Bax、PUMA 等促凋亡基因。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-59',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'truefalse',
    question:
      'Knudson 的"两次打击"假说最初基于视网膜母细胞瘤的流行病学分析提出，后由 RB1 基因的克隆在分子水平证实。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      'Knudson（1971）比较家族性与散发性视网膜母细胞瘤的发病年龄与病灶数，提出肿瘤需同一基因座两次独立失活；1986 年 RB1 克隆证实家族性病例一次打击经生殖系遗传、一次为体细胞事件，与模型预测完全吻合。',
    difficulty: 3,
  },
  {
    id: 'q-molecular-biology-60',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch12',
    type: 'multiple',
    question: '下列基因中属于抑癌基因的有（多选）？',
    options: ['RB1', 'TP53', 'APC', 'HER2（ERBB2）'],
    answer: [0, 1, 2],
    explanation:
      'RB1（G1/S 检查点）、TP53（基因组守卫）、APC（Wnt 通路负调控因子）均为抑癌基因，致癌需两次失活（功能失去）。HER2 是原癌基因，乳腺癌中的扩增使其激活（功能获得），为赫赛汀的靶点。',
    difficulty: 3,
  },
]
