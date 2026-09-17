// ============================================================
// BioScholar 生物信息学测验题库 - 批次 B2（第 7–8 章）
// 覆盖 2 章，每章 5 题，共 10 题（q-bioinformatics-31 ~ q-bioinformatics-40）
// 题型：single 7 / truefalse 2 / multiple 1
// 难度：1（基础识记）3 / 2（理解应用）5 / 3（综合分析）2
// 依据：Pevzner《Bioinformatics Algorithms》、Durbin《Biological Sequence Analysis》、
// Mount《Bioinformatics》、樊龙江《生物信息学》及第 7–8 章扩写正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

// 注：bioinformatics 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const BIOINFORMATICS = 'bioinformatics' as unknown as QuizQuestion['subjectId']

export const bioinformaticsQuizB2: QuizQuestion[] = [
  // ================= 第 7 章 蛋白质结构与功能预测（q-bioinformatics-31 ~ 35） =================
  {
    id: 'q-bioinformatics-31',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch7',
    type: 'single',
    question: '关于蛋白质二级结构预测三代经典方法的演进，错误的是：',
    options: [
      'Chou-Fasman 依据残基构象参数与成核-延伸-终止规则，准确率约 50%–60%',
      'GOR 以 17 残基窗口的信息论框架把准确率推进到约 60%–65%',
      'PSIPRED 融合 PSI-BLAST 多序列比对概型与双层神经网络，Q3 达约 75%–80%',
      '三代方法准确率的抬升，主要来自对单个残基物理性质的不断深化认识',
    ],
    answer: 3,
    explanation:
      'Chou-Fasman 以构象参数与成核规则得到约 50%–60% 的残基级准确率；GOR 把预测改写为 17 残基窗口的信息增量问题，推进到约 60%–65%；PSIPRED 引入多序列比对概型与两层神经网络，把 Q3 提升至约 75%–80%，三项均正确。三代方法准确率抬升的真正动力是信息来源的层层扩容——从单序列局部倾向，到单序列上下文，再到全家族的进化概型，而非对单残基物理的认识深化，故 D 项说反了演进逻辑，选 D。',
    difficulty: 1,
  },
  {
    id: 'q-bioinformatics-32',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch7',
    type: 'single',
    question: 'PSIPRED 相对 GOR 实现准确率跃升，其最关键的信息来源是：',
    options: [
      '更长的单序列上下文窗口与更精细的氨基酸物理参数',
      '多序列比对概型所携带的家族进化约束信息',
      '蛋白数据库中高分辨率晶体结构数目的快速增长',
      '把三状态预测任务简化为两状态从而降低难度',
    ],
    answer: 1,
    explanation:
      '同一家族的序列在进化中保持结构不变，可变位置上的替换模式会泄露结构约束，因此 PSIPRED 先用 PSI-BLAST 搜集同源序列构建多序列比对并概括为概型，再送入双层神经网络（第一层以 15 残基窗口概型输入、第二层做上下文平滑），把 Q3 从约 65% 推到 75%–80%。跃升的关键是进化信息的注入而非窗口加长或参数细化；晶体结构数量只影响训练样本而非推理信息；三状态口径也未改变，故 B 正确，其余均误。',
    difficulty: 2,
  },
  {
    id: 'q-bioinformatics-33',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch7',
    type: 'single',
    question: '关于同源建模的适用边界与模型精度，正确的是：',
    options: [
      '序列同一性低于 40% 便完全无法建模，必须转向从头预测',
      '同一性介于 30%–40% 的可信区，主链误差仍维持约 1 Å 量级',
      '进入暮光区后比对本身开始不可靠，插入缺失的位置难以确定',
      '模板同一性 30% 上下时主链误差约 1 Å，可直接用于药物对接',
    ],
    answer: 2,
    explanation:
      '可比对区域同一性高于 40% 时主链误差约 1 Å，建模近乎照抄；介于 30%–40% 为可信区但精度分层下降；低于 30% 进入暮光区，比对本身开始不可靠、插入缺失位置难以确定，结构相似性亦随之存疑，C 正确。A 错在 30%–40% 区间仍可建模；B 错在约 1 Å 的误差对应 40% 以上高区；D 错在 30% 上下误差为 1.5–2 Å、只能视为拓扑示意，须核对局部质量后方可用于对接等原子级任务。',
    difficulty: 2,
  },
  {
    id: 'q-bioinformatics-34',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch7',
    type: 'truefalse',
    question:
      'GDT-TS 把预测模型与实验结构叠合后，统计偏差落在 1、2、4、8 Å 四个阈值内的残基百分比并取平均再乘 100；由于最宽容的 8 Å 档存在，它对局部片段的大错误不敏感，而对整体拓扑错误高度敏感。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。GDT-TS 的定义即四个阈值（1/2/4/8 Å）内残基百分比的平均再乘 100，得到 0–100 的分数。因为 8 Å 宽容档吸收了局部片段的偏差，局部小错难拉低总分；而拓扑级错误（如两螺旋交换位置）会把大片段推出所有阈值、分数骤降，故它是以整体拓扑正确性为先的度量。经验上 GDT-TS 约 90 分即相当于中等分辨率晶体结构，CASP14 上 AlphaFold2 中位约 92.4 正是用它标定的。',
    difficulty: 1,
  },
  {
    id: 'q-bioinformatics-35',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch7',
    type: 'multiple',
    question: '关于 AlphaFold2 与结构预测革命，下列叙述正确的有：',
    options: [
      'CASP14（2020 年）上 AlphaFold2 取得中位 GDT-TS 约 92.4，首次达到与实验精度相当的量级',
      '其 Evoformer 以注意力机制让序列表示与残基对表示持续互通，结构模块直接输出端到端可微的三维坐标',
      'AFDB 与欧洲生物信息学研究所合作开放数亿量级预测结构，2024 年诺贝尔化学奖表彰了相关突破',
      'AlphaFold2 已完全取代实验结构解析，构象系综、配体结合态与翻译后修饰不再需要实验补位',
    ],
    answer: [0, 1, 2],
    explanation:
      'CASP14 上 AlphaFold2 以中位 GDT-TS 约 92.4 达到实验精度量级，评委会主席 John Moult 称难题基本解决；方法上 Evoformer 互通序列与残基对表示、等变结构模块端到端输出坐标，不再走经典能量最小化；AFDB 开放数亿量级预测模型，2024 年诺贝尔化学奖一半授 Baker、一半授 Hassabis 与 Jumper，三项均正确。预测并未取代实验：无序区、构象系综、配体态与翻译后修饰仍超出能力圈，低置信（pLDDT 低）片段仍须实验补位，D 过度声称，故选前三项。',
    difficulty: 3,
  },
  // ================= 第 8 章 基因组学（q-bioinformatics-36 ~ 40） =================
  {
    id: 'q-bioinformatics-36',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch8',
    type: 'single',
    question:
      '某组装共得 500 kb，四条重叠群长分别为 200、150、90、60 kb，按降序累加计算，该组装的 N50 为：',
    options: ['200 kb', '150 kb', '125 kb', '90 kb'],
    answer: 1,
    explanation:
      'N50 的算法是把重叠群按长度降序排列并自最长起累加，累计长度首次达到组装总长一半（本例 250 kb）时所在重叠群的长度。200 kb 一条累计仅 200 kb 未触半长；再累加 150 kb 达 350 kb、首次越过 250 kb，故 N50 为 150 kb。200 kb 是最长重叠群而非 N50，125 kb 是总长四分位数而非中位口径，90 kb 则尚未参与触达，均误；同一组装的 L50（触达半长所需条数）为 2，可与 N50 合读。',
    difficulty: 2,
  },
  {
    id: 'q-bioinformatics-37',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch8',
    type: 'single',
    question: '关于 Illumina 边合成边测序的核心化学，正确的是：',
    options: [
      '文库片段经桥式 PCR 在流动池表面原位扩增成簇，可逆终止子使每个循环只延伸一个碱基',
      '双脱氧核苷酸随机终止延伸，四泳道凝胶按片段长度读出序列',
      '单个聚合酶固定于零模波导孔底部，实时观测磷酸基团上的荧光信号',
      'DNA 穿过工程化蛋白纳米孔，以电流扰动识别碱基',
    ],
    answer: 0,
    explanation:
      'Illumina 的两大精髓是簇扩增与可逆终止子：文库片段两端接通用接头后与流动池表面引物杂交，经桥式 PCR 把一个分子原位扩增成数千份相同模板组成的簇；带荧光的碱基 3′ 端具可切除阻断基团，每循环只延伸一个碱基，拍照后切掉荧光团与阻断基团再进入下一循环。B 为 Sanger 法，C 为 PacBio SMRT，D 为纳米孔测序，均属其他世代的技术，故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-bioinformatics-38',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch8',
    type: 'single',
    question: '关于短读组装的 de Bruijn 图路线，错误的是：',
    options: [
      '把读切成 k-mer，以 (k−1)-mer 为节点、k-mer 为有向边建图，组装转化为欧拉路径问题',
      '单碱基测序错误可裂变出至多 k 个假 k-mer，多以低覆盖节点形式出现',
      '杂合二倍体的等位差异在图上形成两条殊途同归的气泡路径',
      '提高 k 总能同时改善重复分辨与覆盖密度，因此 k 越大越好',
    ],
    answer: 3,
    explanation:
      'de Bruijn 图把读切碎为 k-mer 建图，把组装从平方级两两重叠比较置换为多项式可解的欧拉遍历；单碱基错误会裂变出至多 k 个假 k-mer，其覆盖度通常仅一两倍，与真 k-mer 的高覆盖泾渭分明；杂合等位差异制造气泡，真实重复制造分叉，三项均正确。k 增大虽能分辨更长的重复，但 k-mer 种类随 k 四进制指数增长，读长不变时高 k 的覆盖迅速稀疏、错误 k-mer 比例抬头，故 k 的选取是在分辨重复与覆盖密度之间走钢丝，D 绝对化错误。',
    difficulty: 2,
  },
  {
    id: 'q-bioinformatics-39',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch8',
    type: 'truefalse',
    question:
      '全基因组平均 dN/dS 普遍在 0.1 量级，说明纯化选择主导蛋白编码演化的总体图景；而假基因化、功能松弛的区段，其 dN/dS 应显著低于 1。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。前半句正确：全基因组平均 dN/dS 约 0.1 量级，说明多数基因受纯化选择约束、非同义突变多为有害而被清除。但后半句混淆了区间：dN/dS 明显低于 1 对应纯化选择；接近 1 才对应中性演化，假基因化与功能松弛区段的选择约束松开、两类替换以中性比例积累，比值应接近 1 而非显著低于 1。显著高于 1 则提示正选择，如免疫抗原蛋白与病原体表面蛋白，须用位点或分支模型检验确认。',
    difficulty: 2,
  },
  {
    id: 'q-bioinformatics-40',
    subjectId: BIOINFORMATICS,
    chapterId: 'bioinformatics-ch8',
    type: 'single',
    question:
      '某昆虫新基因组的 BUSCO 报告显示「重复」桶比例明显升高而其余桶正常；另测得一株大肠杆菌，其核心基因约两千余个而泛基因组集合仍持续增大。下列判断合理的是：',
    options: [
      '昆虫「重复」偏高必为组装错误，应立即重新测序',
      '若该昆虫近期经历全基因组加倍，「重复」升高属预期，未必是错；大肠杆菌为开放泛基因组',
      '大肠杆菌核心基因应占八成以上，泛基因组早已饱和封闭',
      'BUSCO 分数高即担保全部基因家族的注释都正确',
    ],
    answer: 1,
    explanation:
      'BUSCO 的「重复」桶在近期经历全基因组加倍或多倍化的物种中天然升高，未必是错，须结合类群背景归因；大肠杆菌各株基因数四千余而核心基因仅约两千余、泛基因组达上万量级且随新菌株持续增长，是教科书级的开放泛基因组，故 B 合理。A 忽略了多倍化的正常解释；C 与约四成的核心占比及持续增长的事实相反；BUSCO 标记集只覆盖保守单拷贝基因，高分不能担保基因家族扩张收缩区段的注释正确，D 误把体检当保票。',
    difficulty: 3,
  },
]
