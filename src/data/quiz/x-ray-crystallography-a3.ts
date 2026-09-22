// ============================================================
// BioScholar X射线晶体学测验题库 - 批次 A3（第 7–9 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-x-ray-crystallography-31 ~ 45）
// 题型：每章 single ×3 + truefalse ×1 + multiple ×1
// 难度：每章 1（基础识记）×1 + 2（理解应用）×3 + 3（综合分析）×1
// 依据：Rossmann & Blow 与 Crowther 旋转函数原始论文、
// McCoy Phaser 论文、Green/Ingram/Perutz 与 Crick & Magdoff
// 同晶置换论文、Karle/Hendrickson 反常定相论文、Wang 溶剂平坦化、
// Emsley & Cowtan Coot 论文及平台第 7–9 章正文常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const xrayCrystallographyQuizA3: QuizQuestion[] = [
  // ================= 第 7 章 相位问题I：分子置换法（q-31 ~ 35） =================
  {
    id: 'q-x-ray-crystallography-31',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch7',
    type: 'single',
    question:
      '分子置换法（molecular replacement）解决相位问题的基本思路是：将一个结构同源的已知模型作为刚体置入未知晶体，确定其取向与位置后，用模型计算初始相位。该方法必需的先验条件是：',
    options: [
      '一个与目标蛋白结构足够相似的已知三维模型',
      '晶体中必须预先结合重原子',
      '数据分辨率必须优于 1 Å',
      '必须预先知道晶体的溶剂含量',
    ],
    answer: 0,
    explanation:
      '分子置换的全部本钱是「结构同源」这一先验：同源模型与目标的主链几何足够接近，其计算的相位才能充当初值，随后经刚体精修与逐段重建逼近真值。重原子是实验相位法（第 8 章同晶置换与 SAD/MAD）的前提，与分子置换无关；分辨率常规 2–3 Å 即可开展搜索；溶剂含量只是马修斯系数推断的副产品，并非必需条件。故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-32',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch7',
    type: 'single',
    question: '关于 Patterson 函数 P(u) = Σ|F(h)|²·exp(−2πih·u)，下列叙述正确的是：',
    options: [
      '其峰位置对应原子间向量、峰高近似正比于两原子原子序数之积，且计算无需相位',
      '计算 Patterson 函数必须先获得近似相位',
      '其峰位置直接给出原子的绝对分数坐标',
      '蛋白质晶体因峰数过多而在分子置换中完全无法利用',
    ],
    answer: 0,
    explanation:
      'Patterson 用实验直接交付的 |F|² 作系数，天生免相位；作为密度的自相关，其峰对应原子间向量，峰高近似正比 Z₁Z₂。它不给绝对坐标——这正是它不能直接给出结构、却能保留取向信息的原因。蛋白晶体的向量峰多达数百万个而重叠成「峰海」，但分子内向量的取向信息幸存，恰是旋转函数（Rossmann 与 Blow 1962 年）的立足点。其余三项分别错在「需要相位」「给绝对坐标」与「完全无用」，故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-33',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch7',
    type: 'truefalse',
    question:
      '模拟演示中，把全部反射的振幅替换为常数而保留正确相位，电子密度图仍可辨认分子轮廓；保留正确振幅而将相位随机化，图则退化为不可解读的噪声。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。这正是「相位主导原则」的经典演示：相位承载了结构信息的大头。经验刻度上，平均相位误差约 45° 时图已难以解读，30° 以内主链方可连续追踪；振幅扰动三成对图的毁伤远小于同量级的相位扰动——振幅误差只是把复矢量缩放，相位误差则改变矢量叠加的方向、直接破坏傅里叶求和。所以晶体学的一切定相努力都在恢复相位而非修饰振幅。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-34',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch7',
    type: 'single',
    question:
      '为分子置换挑选搜索模型时，目标蛋白与某 PDB 同源结构的序列一致性处于 20%–30% 区间。按现代实践，标准处置是：',
    options: [
      '直接使用该同源结构的完整模型，不做任何修改',
      '按保守程度修剪侧链（如截短到 CB）并重置 B 因子后再用，常配 ensemble 平均',
      '此区间只能放弃分子置换，改用多重同晶置换',
      '必须把搜索模型换成核酸结构',
    ],
    answer: 1,
    explanation:
      '序列一致性 30% 以上的同源结构可直接使用；20%–30% 的模糊区间模型误差偏大，标准做法是修剪——Sculptor 与 CHAINSAW 按逐残基一致性保留保守主链、把可变侧链截短（常截到 CB）、统一重置 B 因子，或以多个同源结构做 ensemble 平均降误差；低于 20% 时 AlphaFold 预测模型常反超同源结构。直接用完整未修剪模型会以错误坐标污染相位；「只能放弃」或「换核酸」更无从谈起。故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-35',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch7',
    type: 'multiple',
    question: '（多选题）下列哪些情形属于分子置换搜索失败的常见原因？',
    options: [
      '搜索模型与目标分子存在域间铰链构象差异，摆角达数度以上',
      '不对称单位含多个 NCS 拷贝，且未按「先强后弱」递增搜索',
      '空间群候选错误——索引歧义或伪对称使 hkl 指派放错了群',
      '搜索模型与目标的序列一致性高达 60% 且结构完整',
      '数据低角（低分辨率壳层）缺失严重、完整度不足',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      '域间构象差异、NCS 多拷贝干扰、空间群指派错误与低角数据缺失都在失败原因清单上：构象差异湮灭旋转峰，多拷贝稀释信号且假峰丛生，错的群让搜索在错误几何里空转，低角缺失则毁掉决定图形状的低频项。序列一致性 60% 恰是分子置换的黄金条件（主链均方偏差常小于 1 Å），是成功的有利因素而非失败原因。故除第四项外全选，共四项。',
    difficulty: 3,
  },
  // ================= 第 8 章 相位问题II：实验相位法（q-36 ~ 40） =================
  {
    id: 'q-x-ray-crystallography-36',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch8',
    type: 'single',
    question: '用硒代甲硫氨酸（SeMet）标记的蛋白做 SAD 定相，同步辐射的收集波长通常调到：',
    options: [
      '约 0.9795 Å（Se 的 K 吸收边峰位附近）',
      '1.5418 Å（铜靶特征波长）',
      '约 2.7 Å（长波长区）',
      '约 0.5 Å（短波长区）',
    ],
    answer: 0,
    explanation:
      'Se 的 K 吸收边能量约 12.66 keV，对应波长约 0.9795 Å；在边峰处 Se 的 f″ 峰值约 3.8 个电子，反常信号最强，是 SAD「单波长峰收集」的标准位置。1.5418 Å 是实验室铜靶波长（家用含硫 SAD 的选项，硫在该处 f″ 约 0.56 e⁻）；约 2.7 Å 属含硫长波长打法；0.5 Å 处反常贡献趋零。故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-37',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch8',
    type: 'single',
    question: '关于反常散射修正 f = f₀ + f′ + i·f″，下列叙述正确的是：',
    options: [
      'f″ 与吸收过程相关，在吸收边附近出现峰值；f′ 为色散项，在边附近急剧下陷',
      'f′ 与 f″ 在任何波长下都严格为零',
      '反常散射使 |F(h)| 与 |F(−h)| 始终严格相等',
      'f″ 的大小与波长无关',
    ],
    answer: 0,
    explanation:
      '吸收边的共振使散射因子获得复数修正：f″ 正比于吸收截面、在边峰处达到最大（如 Se 约 3.8 e⁻），f′ 作为其色散伴随在边处下陷至负值（拐点）。两者的存在打破弗里德定律，|F(h)| 与 |F(−h)| 出现 Bijvoet 差异——这正是反常定相与绝对构型判定的全部来源。说两者恒为零、始终保持相等或与波长无关，均与吸收边物理相悖。故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-38',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch8',
    type: 'truefalse',
    question:
      '溶剂平坦化由 B.-C. 王（Wang）于 1985 年提出：蛋白质晶体约四至六成体积为溶剂，溶剂区电子密度应为缓变常数；将这一先验迭代施加于相位即可显著改善相位质量。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。Wang 1985 年的溶剂平坦化是密度修饰的第一件先验工具：识别蛋白与溶剂边界后把溶剂区密度改为常数，反变换取回新相位并与原相位加权组合，循环迭代。其依据正是第 2 章马修斯系数给出的溶剂占比 27%–65%（典型约 50%）。体积一半的强约束每轮削去一截相位误差，FOM 常从 0.5 级提升到 0.7 以上，是低分辨率结构与实验相位结构的标配操作。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-39',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch8',
    type: 'single',
    question:
      '单一同晶置换（SIR）在手性空间群中存在「双解」问题——两套重原子亚结构坐标给出同样自洽的解。其根本原因是：',
    options: [
      '重原子亚结构的对映反转（坐标整体取负）给出相同的 |F_H| 振幅，从而产生两套互为镜像的蛋白相位',
      '探测器的计数统计涨落',
      '晶胞参数在浸泡后发生大幅变化',
      '收集波长没有调到吸收边',
    ],
    answer: 0,
    explanation:
      '亚结构坐标整体取负（对映反转）不改变 |F_H| 的振幅，差值 Patterson 同样自洽；但 F_H 的相位变号，相位圆给出的两套蛋白相位分别综合出互为镜像的电子密度图。破解之道：再制一个独立衍生物（MIR）让第二个相位圆裁决，或叠加反常信号（SIRAS/MIRAS）；密度修饰与 NCS 平均亦常足以挑出正确一侧。探测器涨落、晶胞变化与波长选择均与双解机理无关。故选 A。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-40',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch8',
    type: 'multiple',
    question: '（多选题）关于实验定相方法，下列叙述正确的有：',
    options: [
      '现代实践中，单波长 SAD 数据配合密度修饰与自动建模常足以解析全新蛋白结构',
      'MAD 须在吸收边峰、拐点与远边等多个波长分别收集完整数据，冗余度高但剂量代价成倍增加',
      '含硫 SAD 利用硫在长波长（约 1.9–2.7 Å）下增强的反常信号，常需高冗余配合密度修饰',
      'MR-SAD 将弱模型相位与弱反常信号组合，「双弱互补」常能破局',
      '重原子衍生物与母体的同晶性无关紧要，晶胞变化达 5% 也不影响相位质量',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '前四项均为教材标准结论：SAD 加密度修饰已是现代解新结构的主流；MAD 三波长布阵（峰、拐点、远边）以冗余换相位质量、剂量成倍增加；含硫 SAD 靠长波长抬升 f″ 并以高冗余压噪声；MR-SAD 用模型相位点亮反常差值图实现互补破局。第五项违背同晶置换的命门——晶胞变化超过约 1% 即引入非同晶噪声污染相位，5% 的变化足以毁掉整个方法。故除第五项外全选。',
    difficulty: 3,
  },
  // ================= 第 9 章 电子密度图与模型搭建（q-41 ~ 45） =================
  {
    id: 'q-x-ray-crystallography-41',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch9',
    type: 'single',
    question: '蛋白模型搭建的日常实践中，查看主链与侧链走向的 2mFo−DFc 主力图通常画在什么等高线水平？',
    options: ['约 1σ', '约 5σ', '约 10σ', '约 0.01σ'],
    answer: 0,
    explanation:
      '主力图按约 1σ 勾画等高线——覆盖约七成密度涨落，主链连续、侧链可辨，是日常建模的默认口径。差值图则按 ±3σ 画：正峰提示缺失原子（配体、水），负峰提示多余或错位原子。把主力图画到 5σ 或 10σ 只剩零星高峰，0.01σ 则淹没在噪声里——等高线水平是图的「灵敏度旋钮」，1σ 主图配 3σ 差值是行业惯例。故选 A。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-42',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch9',
    type: 'single',
    question: '向蛋白模型添加有序水分子时通行的「三要件」判据，不包括下列哪一项？',
    options: [
      'mFo−DFc 差值峰不低于 +3σ',
      '与蛋白或既有水形成合理氢键（供受体距离约 2.6–3.0 Å）',
      'B 因子与邻近蛋白原子同量级或略高',
      '水分子必须位于晶体学对称元素（旋转轴、螺旋轴）之上',
    ],
    answer: 3,
    explanation:
      '三要件是强度（差值峰高于 +3σ）、氢键几何（供受体距离约 2.6–3.0 Å）与 B 因子合理；三者齐备才添水，且须在精修后期以 Rfree 监控批量添加——Rfree 上涨即说明水在拟合噪声，应撤回。落在特殊位置（对称轴上）并非判据；相反，占据特殊位置会带来占有率与对称约束的额外麻烦，属例外情形而非常规要求。故选 D。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-43',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch9',
    type: 'truefalse',
    question:
      'polder omit 图通过把待检区域连同其周围体溶剂一并从掩膜中排除，避免了传统 omit 图中体溶剂淹没弱配体密度的弊病，是对小分子配体占位判定的有力无偏检验。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。传统 omit 图虽挖除了目标原子，其周围仍按体溶剂的平坦贡献建模，低占有率的配体密度常被这层「平铺」拖累而显得更弱。polder（Liebschner 等，2017 年）把目标区与周边体溶剂都排除出掩膜，让配体密度裸露成像；配合 RSRCC 不低于 0.8 的量化口径，已成为糖链、脂质、低占位配体验证的事实标准。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-44',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch9',
    type: 'single',
    question: '在 3.2 Å 分辨率的电子密度图上，通常可以做到的是：',
    options: [
      '直接分辨氢原子与交替构象的细节',
      '主链走向清晰、侧链密度断续，须借助序列与 rotamer 库推断侧链',
      '清晰看到主链与羰基氧的「分叶」结构',
      '全部有序水分子清晰可辨并可靠建模',
    ],
    answer: 1,
    explanation:
      '分辨率可见度阶梯：约 1.2 Å 处氢原子与交替构象渐显；约 1.8 Å 主链与羰基开始分叶；2.5 Å 侧链清晰、多数水可见；3.2 Å 主链尚清晰而侧链断续，建模须靠序列一致性、大侧链锚定与 rotamer 挑选推断；6 Å 只余螺旋轮廓。氢原子、羰基分叶与全水可辨分别是 1.2、1.8、2.5 Å 量级的待遇，3.2 Å 均不可得。故选 B。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-45',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch9',
    type: 'multiple',
    question: '（多选题）关于自动建模与模型检查，下列叙述正确的有：',
    options: [
      'ARP/wARP 在优于约 1.7 Å 的数据上主链自动追踪成功率可超过 90%',
      'Buccaneer（Cowtan，2006 年）可在约 2.5–3.2 Å 的中分辨率区间自动搭建主链',
      'sequence register 错位常表现为验证图标的连锁报警与相邻原子 B 因子的锯齿状起伏',
      '为追求模型完整，N 端与 C 端无密度的残基也应强行建模补全',
      'AlphaFold 预测模型可作为搭建起点与密度图相互校正，侧链构象仍以密度为准',
    ],
    answer: [0, 1, 2, 4],
    explanation:
      'A、B、C、E 均为标准实践：ARP/wARP 是高分辨率自动追踪的王者；Buccaneer 走概率骨架路线覆盖中分辨率；register 错位使长侧链坐在短密度上、逐残基错配，验证图标连片报警、B 因子高低交替；AF 起点与密度互相裁决已是当代常态。D 项违背「无密度即不建」原则——硬补无序末端等于向图里注射虚构坐标，Rfree 与验证指标都会反噬，如实报告「未观测」才是正途。故除第四项外全选。',
    difficulty: 3,
  },
]
