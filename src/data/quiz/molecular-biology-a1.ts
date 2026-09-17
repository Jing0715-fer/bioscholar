// ============================================================
// BioScholar 分子生物学测验题库 - 批次 A1（第 1–3 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-molecular-biology-1 ~ q-molecular-biology-15）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：朱玉贤《现代分子生物学》（第5版）、Weaver《Molecular Biology》、
// Watson《Molecular Biology of the Gene》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const molecularBiologyQuizA1: QuizQuestion[] = [
  // ================= 第 1 章 分子生物学绪论（q-molecular-biology-1 ~ 5） =================
  {
    id: 'q-molecular-biology-1',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'single',
    question: '通过红色面包霉营养缺陷型突变株的研究提出「一基因一酶」学说，并因此获得 1958 年诺贝尔生理学或医学奖的科学家是：',
    options: [
      '比德尔与塔特姆',
      '孟德尔与约翰逊',
      '摩尔根与斯特蒂文特',
      '本泽尔与克里克',
    ],
    answer: 0,
    explanation:
      '比德尔与塔特姆于 1941 年以粗糙链孢霉为材料，用 X 射线诱变后在基本培养基上筛选须补加特定代谢物方能生长的营养缺陷型，发现每个突变只破坏一个酶促步骤，据此提出一基因一酶学说，二人并与莱德伯格共享 1958 年诺贝尔奖。孟德尔与约翰逊确立并命名「基因」，摩尔根学派把基因定位于染色体，本泽尔以顺反测验定义顺反子，均非该学说的提出者，故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-2',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'truefalse',
    question:
      '逆转录酶的发现彻底推翻了克里克提出的中心法则，证明遗传信息可以从蛋白质逆向流向核酸。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。特明与巴尔的摩 1970 年发现的逆转录酶确证了 RNA 到 DNA 的特殊传递，但这恰是克里克 1970 年重述中心法则时明确划入「特殊传递」的一类，属于对框架的充实而非推翻。中心法则最坚硬的内核——氨基酸序列信息不能反向改写核酸序列——至今没有例外；从蛋白质到核酸的信息流向仍属「未知传递」，从未被观察到。故该陈述错误。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-3',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'single',
    question: '关于人类基因组的叙述，下列正确的是：',
    options: [
      '蛋白质编码基因约 10 万个，与基因组规模成正比',
      '蛋白质编码基因约 2 万个，外显子编码序列不足基因组 2%',
      '基因组约 3.2 Mb，基因密度与大肠杆菌相当',
      '重复序列占比不足 5%，绝大多数序列编码蛋白质',
    ],
    answer: 1,
    explanation:
      '人类基因组约 3.2 Gb（而非 3.2 Mb），蛋白质编码基因约 1.9 万至 2 万个，仅与线虫大体同量级（N 值悖论），外显子编码序列合计不足基因组的百分之二，非编码序列超过 98%。可识别的重复序列约占一半（如 LINE-1 约 17%、Alu 约 10%）。基因密度约每 100–200 kb 一个基因，与大肠杆菌约每 kb 一个基因相差两个数量级。故仅 B 正确，其余均与教材口径不符。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-4',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'multiple',
    question: '按克里克 1970 年对中心法则的分类，下列属于「特殊传递」的信息流向有：',
    options: [
      'RNA 到 DNA（逆转录病毒的逆转录）',
      'RNA 到 RNA（RNA 病毒的基因组复制）',
      'DNA 到 RNA（细胞生物的转录）',
      '蛋白质到蛋白质（序列水平的直接决定）',
    ],
    answer: [0, 1],
    explanation:
      '克里克把九种可能流向分为普遍、特殊与未知三类：DNA 到 DNA、DNA 到 RNA、RNA 到蛋白质为普遍传递；RNA 到 DNA 与 RNA 到 RNA 为特殊传递，仅见于逆转录病毒、逆转座子与 RNA 病毒等特定情形；蛋白质 到 DNA、蛋白质 到 RNA、蛋白质 到 蛋白质在序列层面从未观察到，属未知传递。C 项转录属普遍传递，D 项属未知传递（朊粒传播的是构象而非序列），故仅 A、B 正确。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-5',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch1',
    type: 'single',
    question:
      '本泽尔对噬菌体 T4 rII 区两个突变作顺反测验：反式共感染不能互补（无噬菌斑），顺式则表现野生型。据此判断：',
    options: [
      '两突变分属两个不同的顺反子',
      '两突变位于同一顺反子内的不同突变位点',
      'rII 区 DNA 发生了大片段缺失',
      '两个突变均为无义突变且可被抑制 tRNA 校正',
    ],
    answer: 1,
    explanation:
      '顺反测验的判定规则：反式不互补而顺式正常，说明两个突变同属一个功能单位即顺反子——反式时两条 DNA 各携带一份缺陷基因产物，无法互补；顺式时一条 DNA 双突变而另一条完全正常，故表现野生型。A 项分属不同顺反子时反式应当互补；C、D 项与互补测验的判定逻辑无关。本题结论还可与重组作图互证：同一顺反子内的两个突变位点仍可发生重组，这正是顺反子内部另有结构（重组子、突变子）的证据，故选 B。',
    difficulty: 3,
  },
  // ================= 第 2 章 染色体、染色质与基因组结构（q-molecular-biology-6 ~ 10） =================
  {
    id: 'q-molecular-biology-6',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'single',
    question: '核小体核心颗粒中，缠绕组蛋白八聚体的 DNA 片段长度约为：',
    options: ['约 80 bp', '约 147 bp', '约 200 bp', '约 240 bp'],
    answer: 1,
    explanation:
      '核小体核心颗粒由 H2A、H2B、H3、H4 各两分子组成八聚体，147 bp DNA 以左手方向盘绕 1.65 圈，这一长度经微球菌核酸酶充分消化核心颗粒的直接测定与 1997 年 2.8 Å 晶体结构双重确证。约 200 bp 是「核心颗粒加连接 DNA」的完整重复单位长度，而非核心颗粒本身；80 bp 与 240 bp 则无对应结构。故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-7',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'truefalse',
    question:
      '30 nm 染色质纤维是活细胞间期核内普遍存在的固定结构，这一结论已被冷冻电镜与活细胞成像充分证明。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。螺线管与之字形模型是体外重构条件下的经典模型，但 2012 年以来的冷冻电镜、小角散射与活细胞成像（如 ChromEMT 与超分辨显微术）一再提示：分裂间期细胞核中规则的 30 nm 纤维并不常见，染色质更接近直径不规则的致密链，并随生理状态发生液态-凝胶态转换。教材保留 30 nm 纤维为经典层级的同时，明确注明其为「模型而非定论」。故该陈述过于绝对，应判错误。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-8',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'single',
    question:
      '果蝇 white 基因经染色体重排移至异染色质附近后，复眼呈红白相间的位置效应花斑（PEV）。其分子机制主要涉及：',
    options: [
      'CpG 岛 DNA 甲基化沿染色体读码蔓延',
      'H3K9me3 经 Su(var)3-9 写入、HP1 识别并招募甲基转移酶续写，沉默沿染色体扩散',
      '组蛋白乙酰化酶 recruited 到启动子区随机激活转录',
      '拓扑异构酶 II 在该区域造成断裂与重排',
    ],
    answer: 1,
    explanation:
      '位置效应花斑的机制是异染色质标记的读-写接力蔓延：Su(var)3-9（哺乳动物 Suv39）在 H3 第九位赖氨酸写入三甲基化，HP1 经染色质阴影结构域识别该标记，又招募甲基转移酶在相邻核小体续写，沉默状态沿染色体扩散并被细胞克隆遗传。Su(var) 与 E(var) 突变分别抑制与增强花斑，正是该机器组分的遗传学证据。CpG 甲基化蔓延是哺乳动物印记与肿瘤中的机制，与果蝇 PEV 无关；C、D 两项与花斑成因无关。故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-9',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'multiple',
    question: '关于人类端粒与 Shelterin 复合体，下列叙述正确的有：',
    options: [
      '端粒重复序列为 5′-TTAGGG-3′，长度约 10–15 kb',
      'TRF1 与 TRF2 识别双链端粒重复段',
      'POT1 结合 3′ 端富 G 单链悬突',
      'Shelterin 使端粒免被识别为 DNA 双链断裂，并调节端粒酶可及性',
      '端粒酶以自身 DNA 为模板合成端粒重复',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '人类端粒为 TTAGGG 串联重复，出生时约 10–15 kb，3′ 端具富 G 单链悬突；Shelterin 六亚基中 TRF1、TRF2 识别双链重复，POT1 结合单链 G 悬突（TPP1 为其伴侣），TIN2 连接各组分，RAP1 结合 TRF2；复合体促进 T 环/D 环隐藏末端、抑制损伤应答，并调节端粒酶可及性——A 至 D 均正确。端粒酶以自身 RNA 组分 TER 为模板（其催化亚基 TERT 为逆转录酶），E 项「以 DNA 为模板」错误。故选 A、B、C、D。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-10',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch2',
    type: 'single',
    question: '关于巴氏小体与 X 染色体失活，下列叙述最准确的是：',
    options: [
      '巴氏小体是结构性异染色质，其致密状态由卫星序列决定且不可逆',
      'X 失活发生在胚胎早期，随机选择一条 X 并经有丝分裂克隆式遗传，由 Xist RNA 顺式起始',
      '两条 X 染色体均被失活，故女性 X 连锁基因产物剂量为男性一半',
      'X 失活在成年后仍可随机反复重置，以平衡不同组织的基因表达',
    ],
    answer: 1,
    explanation:
      '巴氏小体是兼性（而非结构性）异染色质：由本可活跃的 X 染色体在早期胚胎经随机选择后包装而成，Xist 长链非编码 RNA 从失活 X 上转录并顺式包被全染色体，招募沉默机器；失活状态此后按细胞克隆遗传，构成女性 X 连锁基因嵌合体。失活不彻底，短臂少数基因逃逸；成年后并不随机重置（重编程仅在生殖细胞与早期胚胎发生）。故 B 最准确，A 混淆了兼性与结构性异染色质，C、D 均与事实不符。',
    difficulty: 3,
  },
  // ================= 第 3 章 DNA 复制（q-molecular-biology-11 ~ 15） =================
  {
    id: 'q-molecular-biology-11',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'single',
    question: '以¹⁵N/¹⁴N 同位素转移结合氯化铯密度梯度离心证明 DNA 半保留复制的经典实验由谁于何年完成：',
    options: [
      '沃森与克里克，1953 年',
      '梅塞尔森与斯塔尔，1958 年',
      '凯恩斯，1963 年',
      '冈崎，1968 年',
    ],
    answer: 1,
    explanation:
      '梅塞尔森与斯塔尔 1958 年将大肠杆菌从¹⁵N 培养基转入¹⁴N 培养基并逐代取样，密度梯度离心显示第一代 DNA 全为杂合密度带、第二代出现约一比一的杂合带与轻带，据此排除了保守与分散模型，确立半保留复制。凯恩斯 1963 年的放射自显影证明的是双向复制，冈崎夫妇的工作证明的是半不连续复制。故选 B。',
    difficulty: 1,
  },
  {
    id: 'q-molecular-biology-12',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'truefalse',
    question:
      '所有已知的 DNA 聚合酶都只能催化 5′ 到 3′ 方向的链延伸且需要引物，因此后随链须以冈崎片段不连续合成，片段间的切口最终由 DNA 连接酶封闭。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。聚合方向与引物依赖是 DNA 聚合酶的两条酶学通则：核苷酸只能加到引物游离的 3′-OH 上。复制叉两条模板链反向平行，与叉前进方向相反的一条只能先合成冈崎片段（原核约 1000–2000 nt、真核约 100–200 nt），各片段以 RNA 起始；引物被 Pol I（真核为 Pol δ 配合 FEN1 等）切除填补后，残留切口由连接酶以 NAD⁺ 或 ATP 供能封闭。叙述各环节均符合教材口径。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-13',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'single',
    question: '关于大肠杆菌复制起始，下列叙述正确的是：',
    options: [
      'DnaA 结合 oriC 中的 9 bp 重复盒并介导富 AT 的 13 bp 重复区解链，随后装载 DnaB 解旋酶',
      '复制起始于任意富 AT 区，由解旋酶随机识别',
      'DnaB 解旋酶直接识别起点并自主起始解链',
      '引物酶先于解旋酶进入起点合成第一条引物',
    ],
    answer: 0,
    explanation:
      '大肠杆菌 oriC 约 245 bp，含多个 9 bp DnaA 结合盒与三串富 AT 的 13 bp 重复：DnaA-ATP 先结合 9 bp 盒并多聚化，在 IHF、FIS、HU 等协助下使 13 bp 区熔解形成开放复合物，再招募 DnaB-DnaC 装载六聚体解旋酶，两个复制叉自此点火。起点是特异序列而非任意富 AT 区，DnaB 自身不识别起点，引物合成在解旋之后由 DnaG 随后随链模板暴露而进行。故仅 A 正确。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-14',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'multiple',
    question: '关于真核 DNA 复制，下列叙述正确的有：',
    options: [
      '许可机制在 G1 期由 ORC、Cdc6、Cdt1 装载 MCM2-7 解旋酶，S 期再点火',
      'Pol α-引物酶先合成 RNA 引物并延伸一小段 DNA',
      '端粒酶以自身 RNA 为模板延伸端粒 3′ 端，补偿末端复制短缺',
      '真核复制叉速度约与大肠杆菌相当，约 1000 nt/s',
      '每个细胞周期内同一复制起点可多次起始以加快 S 期',
    ],
    answer: [0, 1, 2],
    explanation:
      '真核起始分两段：G1 期低 CDK 环境下 ORC 招募 Cdc6 与 Cdt1 装载 MCM2-7（取得许可），S 期经 DDK 与 S-CDK 激活点火，CDK 高水平又禁止再许可，保证每周期一次起始；Pol α-引物酶合成约 10 nt RNA 加约 20 nt DNA 引物；端粒酶为 TERT 加 TER 的核糖核蛋白，以 TER 为模板延伸端粒。A、B、C 正确。真核叉速仅约 50 nt/s（远低于原核约 1000 nt/s），靠多起点并行补偿；同一周期内起点不得重复起始，D、E 错误。',
    difficulty: 2,
  },
  {
    id: 'q-molecular-biology-15',
    subjectId: 'molecular-biology',
    chapterId: 'molecular-biology-ch3',
    type: 'single',
    question: '关于端粒、端粒酶与细胞命运，下列综合判断正确的是：',
    options: [
      '正常体细胞端粒酶高度活跃，端粒长度终身恒定',
      '体细胞端粒随分裂逐代缩短（约 50–100 bp/代），临界缩短触发复制性衰老；多数恶性肿瘤重新激活端粒酶',
      'ALT 重组途径见于绝大多数人类肿瘤，端粒酶激活只是次要事件',
      '端粒酶是一种依赖 DNA 模板的聚合酶，其活性不依赖 RNA 组分',
    ],
    answer: 1,
    explanation:
      '正常体细胞中 TERT 转录受抑，端粒以每次分裂约 50–100 bp 的速度缩短，达临界长度即触发复制性衰老（Hayflick 界限约 50 代）；约 85–90% 的人类肿瘤通过重新激活端粒酶维持端粒，仅约 10–15% 依赖 ALT 重组途径。端粒酶是 TERT（逆转录酶）与 TER（RNA 模板）组成的核糖核蛋白，其活性依赖 RNA 组分。故 B 正确：端粒酶既是衰老研究的核心变量，也是抗癌药物的常用靶点。',
    difficulty: 3,
  },
]
