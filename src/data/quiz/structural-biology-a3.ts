// ============================================================
// BioScholar 结构生物学测验题库 - 批次 A3（第 7–9 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-structural-biology-31 ~ q-structural-biology-45）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：本平台《结构生物学实验方法》第 7–9 章教材正文常考点，
// 参照 Rupp《Biomolecular Crystallography》、Taylor 编
// 《Molecular Replacement》与 Kühlbrandt「分辨率革命」综述
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const structuralBiologyQuizA3: QuizQuestion[] = [
  // ================= 第 7 章 相位问题与结构解析（q-structural-biology-31 ~ 35） =================
  {
    id: 'q-structural-biology-31',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch7',
    type: 'single',
    question: 'SeMet 反常散射定相把入射波长调到硒的 K 吸收边。该处波长与硒 f″ 峰值的正确组合是：',
    options: [
      '0.9795 Å，f″ 峰值约 3.8 e⁻',
      '1.5418 Å，f″ 峰值约 3.8 e⁻',
      '0.9795 Å，f″ 峰值约 0.56 e⁻',
      '1.5418 Å，f″ 峰值约 0.56 e⁻',
    ],
    answer: 0,
    explanation:
      '硒 K 边位于 12.658 keV、对应波长 0.9795 Å，恰在同步辐射硬 X 射线区，峰波长处 f″ 约 3.8 e⁻；作为对照，天然硫在 Cu Kα（1.5418 Å）下 f″ 仅约 0.56 e⁻，两者相差近七倍——这正是 SeMet 路线的设计优势。Met 在蛋白中频率约 2%，30 kDa 蛋白常有 4–8 个硒位点，反常信号网足够密，掺入率可达九成以上。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-32',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch7',
    type: 'single',
    question:
      '在「抹相位还是抹振幅」的思想实验中，保留正确相位、把全部振幅统一替换成常数后得到的密度图会：',
    options: [
      '变为彻底噪声，分子无影无踪',
      '仍能认出分子轮廓、螺旋与片层乃至活性位点口袋的形状',
      '与原图完全一致，不受任何影响',
      '只在低分辨率区与原图一致，高分辨率区全部为噪声',
    ],
    answer: 1,
    explanation:
      '相位主导原则：密度图的信息主要由相位承载——把相位替换成随机数，图即彻底噪声；把振幅替换成常数，图仍能认出分子轮廓、二级结构乃至口袋形状。敏感度差别在一个量级以上：振幅误差使图「变糊」，相位误差使图「变脸」。定量标尺为相位均方根误差约 40° 尚可建模、约 90° 与随机无异，这也是全章把相位误差压进 40° 的工程目标来源。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-33',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch7',
    type: 'single',
    question: 'Phaser 分子置换搜索给出某解 TFZ = 9.2、LLG 显著高于随机放置。按社区判据，合理处置是：',
    options: [
      'TFZ 不足 10，判负并直接转实验定相',
      '处于 6–8 可疑区间，须复核旋转解与拷贝数',
      '大于 8，判为确定解，交密度修饰与后续建模',
      'TFZ 与解的正确性无关，只看 LLG 即可',
    ],
    answer: 2,
    explanation:
      'TFZ（平移函数 Z 分数）大于 8 判确定解，6–8 属可疑区间（复核旋转解、拷贝数与模型修剪），小于 6 基本判负；LLG 衡量模型对数据的解释力，与 TFZ 互为印证但不可互相替代。真解的进一步标志是精修数轮后 Rfree 迅速跌落（常见数轮内自约 0.45 降至 0.35 以下）、图上出现模型未交代的新内容如配体与有序水。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-34',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch7',
    type: 'truefalse',
    question: 'Patterson 函数以结构因子振幅的平方（即强度）为系数，无需任何相位信息即可从衍射数据直接计算。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。P(u) = Σ|F(h)|²exp(−2πih·u) 的系数正是强度（Patterson 于 1934 年提出），任何一套处理完毕的数据都能直接算出——这是它在相位问题里担当主角的资格。几何上它是原子间向量图：N 个原子产生 N(N−1) 个非原点峰，峰高正比于两原子电子数之积；分子内向量不随平移改变的性质支撑旋转与平移两步搜索，差值 Patterson 则以振幅差定位重原子亚结构。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-35',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch7',
    type: 'multiple',
    question: '（多选题）关于实验定相与密度修饰，下列叙述正确的有：',
    options: [
      '同晶置换要求浸泡前后晶胞参数变化小于 1%，否则强度之差混入晶格噪声、相位信息被淹没',
      'SAD 只在峰波长收一套数据，配现代密度修饰即可定相，剂量省、晶体省，已取代 MAD 成为主流',
      '溶剂平坦化以约 8–10 Å 的 Wang 半径划分蛋白区与溶剂区，把溶剂区密度压平后经傅里叶变换回收相位',
      'SIR（单对同晶置换）可唯一确定每个 hkl 的相位，无需第二衍生物或反常差异辅助',
      'NCS 平均把噪声按拷贝数的平方根缩减，60 重对称病毒可把噪声压到约八分之一',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'D 错误：SIR 存在双解困局——Harker 相位圆两圆交于两点，两种相位候选对一切强度数据同样自洽，须再加独立衍生物（MIR）或反常差异（SIRAS）才能收敛为单解。A、B、C、E 均为教材标准表述：同晶性纪律（晶胞变化小于 1%）、SAD 对 MAD 的现代取代、Wang 半径与溶剂区压平回收相位、NCS 平方根降噪与相位外推的经典战绩。',
    difficulty: 3,
  },
  // ================= 第 8 章 模型搭建与结构精修（q-structural-biology-36 ~ 40） =================
  {
    id: 'q-structural-biology-36',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch8',
    type: 'single',
    question: 'Brünger 于 1992 年提出的 Rfree 交叉验证，从衍射数据中剥离进入自由集的反射比例通常约为：',
    options: ['约 1%', '约 5%', '约 20%', '约 50%'],
    answer: 1,
    explanation:
      'Rfree 的标准做法是随机剥离约 5% 反射组成自由集，精修全程（含人工 rebuild）对其不可见、不进目标函数；低分辨率数据反射太少时可放宽到 10%，但须全程一致并在论文注明。自由集一经划定不得重新划分——重新划分等于把泄漏的信息洗白。Rfree 与 Rwork 之差的健康区间为 2–5%，大于 7% 即过拟合警告。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-37',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch8',
    type: 'single',
    question: '精修后重算的 Fo−Fc 差值图上出现 +3σ 正峰与 −3σ 负峰，正确的解读是：',
    options: [
      '正峰提示晶体里有、模型里没有的东西（缺的水、配体或交替构象）；负峰提示模型里有、晶体里没有的东西（多放的原子、该删的水）',
      '正峰提示该处原子应删除，负峰提示应在该处加水',
      '精修收敛后不应出现任何差值密度，正负峰皆是噪声',
      '正峰说明模型偏差已消除，负峰说明占有率应统一设为 1',
    ],
    answer: 0,
    explanation:
      '差值图只画观测与计算之差：+3σ 正峰标记「晶体里有、模型里没有」，−3σ 负峰标记「模型里有、晶体里没有」——「加水看正峰、删原子看负峰」由此成为建模日常口诀。差值图须与 2Fo−Fc 主图并排判读，且每轮精修后重算：新出现的小峰群常指向交替构象或构象变化，而不是噪声——它是模型与数据对话的留言板。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-38',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch8',
    type: 'single',
    question: '关于立体化学约束与 B 因子参数化，下列叙述错误的是：',
    options: [
      'Engh 与 Huber 的约束参数为键长 σ 约 0.02 Å、键角 σ 约 2°',
      'TLS 参数化把刚体集团的振动拆成 T、L、S 三个张量，每个集团仅新增约二十个参数',
      '分辨率越低、独立观测越少，几何先验的权重必须越大',
      '3–3.5 Å 数据应优先启用逐原子各向异性 B 并加入 riding 氢以提升精度',
    ],
    answer: 3,
    explanation:
      'D 搞反了参数化阶梯：各向异性 B 与 riding 氢是优于约 1.2 Å 原子分辨率的「奢侈套餐」，3–3.5 Å 应退回 group B 加 TLS 并加强 NCS 约束——低分辨率下放开参数养不起，从 group B 升到个别 B 时 Rfree 不降反升就是「参数奢侈税」的信号，试金石是每升一档都看 Rfree。A、B、C 均为教材标准表述。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-39',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch8',
    type: 'truefalse',
    question: '精修中 Rfree 与 Rwork 之差（gap）越小越好，gap 小于 1% 说明模型既拟合充分又毫无过拟合。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。健康区间是 2–5%，大于 7% 为过拟合警告（典型病因是无效水、参数过多、把噪声建成交替构象）；但 gap 小于 1% 反而可疑——要么自由集信息曾泄漏进精修（人为压低 Rfree），要么数据冗余过高使两集几乎相同，都不能作为模型质量的证据。过拟合的标准整改按序：删可疑水、降参数化阶梯、收紧 restraints 权重后复看 gap。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-40',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch8',
    type: 'multiple',
    question: '（多选题）关于模型搭建、精修与验证，下列叙述正确的有：',
    options: [
      'ARP/wARP 的全自动建模路线要求优于约 1.7 Å 的数据，Buccaneer 面向 2–3.5 Å 的中低分辨率',
      '水分子建模三判据：Fo−Fc 差值峰不低于约 3σ、与蛋白形成 2.6–3.0 Å 的合理氢键、B 因子与邻居相当',
      'MolProbity 的达标线包括 Ramachandran 优势区大于 96%、clashscore 小于 5',
      '配体存在性仅凭主图「看起来有」即可写入论文，无需 omit 或 polder 图背书',
      '收敛判据包括 R 变化小于约 0.1%、几何 outlier 清零、差值图无 ±4σ 遗留峰三条同时满足',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'D 错误：配体与辅因子的存在性结论必须有无偏图背书——omit 图剔除可疑片段重算相位，polder 图（Liebschner 等 2017 年）再加掩膜挡住 bulk 溶剂对弱密度的稀释，仅凭主图「看起来有」写入论文是评审意见里最常见的退货理由。其余四项皆为标准知识：两条自动建模流水线的分辨率分工、水分子三判据、MolProbity 双达标线与三条收敛判据。',
    difficulty: 3,
  },
  // ================= 第 9 章 冷冻电镜：样品制备与数据收集（q-structural-biology-41 ~ 45） =================
  {
    id: 'q-structural-biology-41',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch9',
    type: 'single',
    question: 'Dubochet 玻璃化方法中，数十至百纳米厚的薄水膜要绕过冰晶成核、凝固为无定形玻璃态冰，冷却速率须达到：',
    options: ['大于 10² K/s', '大于 10⁵ K/s', '大于 10⁸ K/s', '冷却速率与玻璃化无关，只取决于冰厚'],
    answer: 1,
    explanation:
      '液态乙烷浆料（液氮预冷至约 90 K）与薄水膜液固直接接触导热，冷却速率超过 10⁵ K/s，水分子来不及成核排列即凝固为玻璃态冰——分子排布如同液体的瞬时快照，蛋白原位冻结。该技术与 Henderson 的低温成像理论、Frank 的图像处理方法共同获得 2017 年诺贝尔化学奖；若冷却速率不足，FFT 上将出现六方冰的衍射斑或锐环。',
    difficulty: 1,
  },
  {
    id: 'q-structural-biology-42',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch9',
    type: 'single',
    question: '关于单颗粒数据收集的剂量管理，下列叙述正确的是：',
    options: [
      '单张微图总剂量约 40–60 e⁻/Å²，并切成 50–60 帧的电影以支撑运动校正',
      '总剂量约 200–300 e⁻/Å²，剂量越高分辨率越高',
      'search 步使用与正式曝光相同的剂量快速扫孔',
      'counting 模式的剂量率上限约为 100 e⁻/像素/秒',
    ],
    answer: 0,
    explanation:
      '40–60 e⁻/Å² 是辐射损伤与信噪比的折衷线，再高则高分辨信息被损伤抹掉；剂量分级把它切成 50–60 帧短曝光，帧间位移小、事后逐帧对齐叠加（运动校正）既保总信号又追回模糊。search 只用约 0.01–0.05 e⁻/Å² 的极低剂量，看过的区域即报废；counting 剂量率须控制在约 5–10 e⁻/像素/秒，过高会产生电子同落一像素的重合损失。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-43',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch9',
    type: 'single',
    question:
      '单颗粒收集中把 defocus 按 −0.5 至 −3 μm 多档轮转（如 −1.5 μm 与 −2.5 μm 两档混收）的核心原因是：',
    options: [
      '不同离焦档的 CTF 零点落在不同频率上，合并后互相补上对方「失明」的频段',
      '离焦越深，Nyquist 极限越高、采样分辨率越好',
      '单一离焦档会使直接电子探测相机过热损坏',
      '离焦档数必须与载网的 mesh 数一一对应',
    ],
    answer: 0,
    explanation:
      '相位衬度成像的 CTF 在频率轴上周期性过零、零点处信息整段缺失：以 300 kV 为例，−1.5 μm 与 −2.5 μm 的第一零点分别约在 17 Å 与 22 Å——两档各自失明的频段不同，合并后一档的零点恰由另一档的非零区补上，CTF 校正与频率合并（第 10 章）才有材料可用。Nyquist 由像素尺寸决定而非离焦；档位轮转只为避免整批数据同档「同生共死」。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-44',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch9',
    type: 'truefalse',
    question: '玻璃化时可直接把载网浸入液氮，因为液氮（77 K）比液态乙烷浆料（约 90 K）温度更低、冷却更快。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误，方向完全相反：液氮沸点恰为 77 K，样品浸入瞬间剧烈汽化、被一层低导热的氮气膜包裹（Leidenfrost 气膜效应），传热系数骤降约一个数量级，冷却速率只剩数千 K/s，必然结出六方冰；乙烷沸点约 184 K，预冷到约 90 K 时远低于自身沸点、毫无汽化，液固界面直接接触导热，才有 10⁵ K/s 以上的冷却速率与玻璃态冰。「温度更低」不等于「冷得更快」。',
    difficulty: 2,
  },
  {
    id: 'q-structural-biology-45',
    subjectId: 'structural-biology',
    chapterId: 'structural-biology-ch9',
    type: 'multiple',
    question: '（多选题）关于冷冻电镜数据收集的质量评估与分辨率判据，下列叙述正确的有：',
    options: [
      '微晶冰在微图的 FFT 上以离散衍射斑点或约 3.67 Å 的锐环现形',
      '金标准 FSC 以 0.143 为截断判据，分辨率由两条独立精修半图的傅里叶壳层相关曲线读取',
      '3 Å 级结构通常需约 10⁵–10⁶ 颗粒参与精修，颗粒数与取向覆盖是两条独立的达标线',
      '空孔率大于 30% 的载网应坚持收完，中途换网会浪费机时',
      '实时反馈的核心指标包括运动幅度、CTF 拟合分辨率、颗粒数与 2D 类质量',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'D 错误：空孔率大于 30% 说明 blot 或辉光放电亲水化系统性失当，与其硬收不如直接换网——把有限机时与剂量预算省给合格的冰，弃网决策正是 session 管理的组成部分。A、B、C、E 皆为标准知识：六方冰最强衍射环约 3.67 Å、金标准 FSC 0.143 截断（两条独立半图的相关曲线）、颗粒预算与取向覆盖双达标、cryoSPARC Live 实时四指标。',
    difficulty: 3,
  },
]
