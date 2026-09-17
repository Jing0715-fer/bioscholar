// ============================================================
// BioScholar 生物物理测验题库 - 批次 A2（第 4–6 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-biophysics-16 ~ q-biophysics-30）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：赵南明/周海梦《生物物理学》、Nelson《Biological Physics》、
// Cantor & Schimmel《Biophysical Chemistry》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const biophysicsQuizA2: QuizQuestion[] = [
  // ================= 第 4 章 生物大分子的力学与马达（q-biophysics-16 ~ 20） =================
  {
    id: 'q-biophysics-16',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'single',
    question: '2018 年诺贝尔物理学奖与单分子生物物理关系密切，其获奖内容是：',
    options: [
      'Ashkin 因发明光镊并应用于生物系统获奖（另一半授予啁啾放大技术）',
      'Ashkin 因发明原子力显微镜并拉伸肌联蛋白获奖',
      'Ashkin 因发明膜片钳记录单通道电流获奖',
      'Ashkin 因提出蠕虫链模型描述 DNA 弹性获奖',
    ],
    answer: 0,
    explanation:
      '2018 年诺贝尔物理学奖一半授予 Arthur Ashkin，表彰他于 1970 至 1986 年间建立的激光光镊技术及其在生命体系的开创性应用——用梯度力捕获介电微球、进而夹持并操控单个生物分子；另一半授予 Mourou 与 Strickland 的啁啾脉冲放大。光镊刚度约 0.01–1 pN/nm、力分辨率可达 0.1 pN，正是观测驱动蛋白 8 nm 步进与单个肌球蛋白做功冲程的关键工具。AFM 是 Binnig 等 1986 年的成果，膜片钳属 Neher 与 Sakmann（1991 年生理学或医学奖），蠕虫链模型则是 Marko 与 Siggia 的理论工作，均不在 2018 年获奖之列。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-17',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'single',
    question: '关于蠕虫链模型与持续长度，下列叙述正确的是：',
    options: [
      '持续长度是链方向关联保持的长度；双链 DNA 约 50 nm，单链 DNA 约 1 nm，去折叠肽链约 0.4 nm',
      '持续长度与链的序列长度恒相等，双链 DNA 的持续长度约等于其全长',
      '蠕虫链的弹性以焓变为主，拉直的代价主要是断裂共价键',
      '持续长度越短，链在相同力下越难被拉伸伸直',
    ],
    answer: 0,
    explanation:
      '蠕虫链模型把聚合物视为连续可弯细棒，持续长度 p 度量链的方向「记忆」——方向关联函数衰减的长度尺度，数值上等于弯曲刚度除以 kBT。双链 DNA 约 50 nm 为典型半刚性链，单链 DNA 约 1 nm，完全去折叠的肽链约 0.4 nm，A 正确。p 与链长无关；WLC 的弹性是纯熵弹性，拉直牺牲的是微观构象数而非断键；p 越短链越软，同样力下反而更易伸直，B、C、D 均把物理说反了。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-18',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'single',
    question: '关于传统驱动蛋白（kinesin-1）的步进，下列叙述正确的是：',
    options: [
      '步距 8 nm 等于微管二聚体周期，每步水解 1 分子 ATP，以手递手方式交替迈步',
      '步距 8 nm 源于颈链每次伸长 8 nm，两个头部同步平移（尺蠖式）',
      '失速力约 50 pN，与 ATP 水解的全部能量做功相当',
      '平均只能连走数步即脱落，因此胞内运输必须成群协作',
    ],
    answer: 0,
    explanation:
      '驱动蛋白 1 的两个马达域以手递手机理交替迈步：领先头水解 ATP 后颈链对接把自由头甩向前方，落在 16 nm 外的下一个结合位点，净位移恰为微管二聚体周期 8 nm，每步消耗 1 分子 ATP；Svoboda 与 Block 1993 年的光镊实验及后来的单分子荧光标记均证实这一图像。失速力实测 5–7 pN（对应效率约 50%–60%），若高达 50 pN 则超过 ATP 水解约 80 pN·nm 能量折算的 10 pN 上限，物理上不可能；其 processivity 约为连续百步、行程约 1 μm，是典型的持续性行走马达。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-19',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'truefalse',
    question:
      'Purcell 的扇贝定理指出：在低雷诺数（惯性可忽略）的斯托克斯 regime 中，时间反演对称的互易往复运动不能产生净位移，因此细菌必须采用旋转螺旋等非互易方式推进。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。大肠杆菌的雷诺数约 10⁻⁵，运动方程退化为线性的斯托克斯方程，该方程时间反演不变：形变后原路返回的「互易」循环在正反两个半程产生的位移严格相消，扇贝式一张一合无法前进。旋转的螺旋推进把运动分解为保持相位差的多个非互易摆动分量，精子鞭毛的行波、纤毛有效冲程与恢复冲程之别，都遵守同一条定理。题干中「regime」一词意为流态区间，判断不受影响。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-20',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'multiple',
    question: '关于分子马达的能量学与做功，下列叙述正确的有：',
    options: [
      '细胞内 ATP 水解释放约 80 pN·nm，约折合 20 个 kT，是马达步进的能量预算',
      '费曼棘轮–棘爪思想实验说明：同温下不能从单一热源的热涨落中整流出净功，马达整流布朗运动必须另耗 ATP',
      '肌球蛋白 II 的 duty ratio 大于肌球蛋白 V，因此更适合单独运送囊泡',
      'F1-ATP 合成酶逆转为水解马达时，每步做功与水解能几乎相抵，效率可接近 100%',
    ],
    answer: [0, 1, 3],
    explanation:
      'A、B、D 正确：约 −50 kJ/mol 折合 80 pN·nm（约 20 kT），是估算马达力与步距的基本账本；费曼棘轮说明第二定律禁止从平衡涨落中取功，马达的定向性来自 ATP 这个独立能源的消费；F1 逆转马达每步 120° 做功约 80 pN·nm，与水解能几乎相抵，效率接近百分之百。C 项错误：肌球蛋白 II 的 duty ratio 只有百分之几，需大量头部在粗丝上异步工作才能维持持续收缩；肌球蛋白 V 的 duty ratio 接近 1，双头交替不脱轨，才是单独运货的型号。',
    difficulty: 3,
  },
  // ================= 第 5 章 辐射生物物理与光谱（q-biophysics-21 ~ 25） =================
  {
    id: 'q-biophysics-21',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'single',
    question: '关于 Beer–Lambert 定律与核酸定量，下列换算正确的是：',
    options: [
      '1 cm 光程下 A260 = 1 约对应双链 DNA 50 μg/mL；纯 DNA 的 A260/A280 约 1.8',
      'A260 = 1 约对应双链 DNA 5 μg/mL；纯 RNA 的 A260/A280 约 1.2',
      'A260 = 1 约对应单链 DNA 50 μg/mL；纯蛋白质的 A260/A280 约 2.0',
      'A280 = 1 约对应蛋白质 50 mg/mL；纯 DNA 的 A260/A280 约 0.6',
    ],
    answer: 0,
    explanation:
      '标准换算：1 cm 光程、260 nm 处吸光度为 1 时，双链 DNA 约 50 μg/mL、单链 DNA 约 37 μg/mL、RNA 约 40 μg/mL、寡核苷酸约 33 μg/mL。纯度基准为纯 DNA 的 A260/A280 约 1.8、纯 RNA 约 2.0、纯蛋白质约 0.5–0.6——核酸制品比值低于 1.8 提示蛋白或酚污染，A260/A230 偏低则提示胍盐等小分子残留。A 中 5 μg/mL 差一个数量级，C 把单链与双链及蛋白核酸的比值互换，D 的数值与单位均不对。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-22',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'single',
    question: '关于 FRET（荧光共振能量转移），下列叙述正确的是：',
    options: [
      '能量转移效率 E = 1/[1 + (r/R0)⁶]，R0 是效率为 50% 的距离，典型 2–7 nm，有效量程约 1–10 nm',
      '转移速率与供受体间距离的平方成反比，因此只适用于 0.5 nm 以内的共价接触',
      'FRET 属于辐射过程：供体先发射光子，再被受体吸收',
      '取向因子恒等于 1，与供受体偶极的相对取向无关',
    ],
    answer: 0,
    explanation:
      'Förster 理论给出转移速率随距离六次方反比衰减，效率 E = 1/[1 + (r/R0)⁶]；R0 由供体量子产额、光谱重叠积分、折射率与取向因子共同决定，典型 2–7 nm，最灵敏区间在 R0 附近约一半范围，有效量程约 1–10 nm，恰覆盖一个结构域到复合物的尺度。FRET 是偶极–偶极的非辐射共振耦合，供体并不发射光子；取向因子常取动态平均 2/3，刚性固定时是系统误差的主要来源。B 的平方反比与 0.5 nm 均错误。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-23',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'single',
    question: '远紫外圆二色谱中，α 螺旋的特征指纹是：',
    options: [
      '208 与 222 nm 的双负峰，且 222 nm 强度随螺旋长度增长',
      '216–218 nm 单一负峰加约 195 nm 正峰，属 β 折叠特征',
      '195–200 nm 的强负峰，是无规卷曲的标志',
      '290–305 nm 的正峰，来自色氨酸侧链的手性环境',
    ],
    answer: 0,
    explanation:
      '远紫外 CD 直接读出主链构型：α 螺旋在 208 与 222 nm 呈双负峰（222 nm 摩尔椭圆率随螺旋长度增大，完全螺旋约 −38 000 至 −40 000）；β 折叠是 216–218 nm 负峰加约 195 nm 正峰；无规卷曲在 195–200 nm 有强负峰；290–305 nm 属近紫外区，报告色氨酸等芳香侧链所处的不对称环境，其出现是三级结构形成的标志，与二级结构指纹分属不同谱区。据此可用 222 nm 信号速估螺旋度或监测升温时的去折叠转变。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-24',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'truefalse',
    question:
      '「1 Gy 的 α 粒子与 1 Gy 的 γ 光子在组织中沉积的能量相同，生物危害也完全相同；当量剂量单位希沃特等于戈瑞乘以辐射权重因子，其中 α 粒子的权重因子为 2。」',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误，两句各错一处。前半句：Gy 度量单位质量沉积的能量，1 Gy 的 α 与 1 Gy 的 γ 物理能量确实相同，但 α 的传能线密度高达约 50–250 keV/μm，径迹电离密集、造成簇集的复杂双链断裂，相对生物效应可达 3–10，危害远大于低 LET 的 γ，故「危害完全相同」不成立。后半句：辐射权重因子光子与电子为 1、质子为 2、α 与重离子为 20、中子按能量 2–20，α 取 2 属数值错误。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-25',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'multiple',
    question: '关于紫外与电离辐射的生物效应，下列叙述正确的有：',
    options: [
      '光子能量 E(eV) = 1240/λ(nm)，波长短于约 100 nm 才能直接电离水分子',
      'UVB 的直接 DNA 损伤以环丁烷嘧啶二聚体为主，光复活酶可利用蓝光直接将其逆转',
      '每 Gy 每个细胞产生约 35–40 个双链断裂，损伤约三分之二来自水的羟基自由基等间接作用',
      '低 LET 辐射的氧增强比接近 1，而高 LET 辐射的氧增强比约 2.5–3，因此乏氧肿瘤更适合光子放疗',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 正确：1240/λ(nm) 是光子能量的速算式，水电离势约 12.6 eV 对应约 98 nm，紫外属电子激发的光化学区；UVB 损伤以 CPD 为主、6-4 光产物其次，光复活酶以 350–450 nm 光为辅底直接逆转 CPD，是「光损伤光修复」的经典；电离辐射每 Gy 每细胞约 35–40 个 DSB，且约三分之二损伤源于水辐射分解产生的羟基自由基。D 项恰好说反：低 LET 依赖氧、OER 约 2.5–3，高 LET 近乎不依赖氧（OER 约 1），故乏氧肿瘤反而更适合碳离子等高 LET 治疗。',
    difficulty: 3,
  },
  // ================= 第 6 章 蛋白质折叠与错误折叠（q-biophysics-26 ~ 30） =================
  {
    id: 'q-biophysics-26',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'single',
    question: '关于朊蛋白与「蛋白质感染」概念，下列叙述正确的是：',
    options: [
      'Prusiner 于 1982 年纯化并命名朊蛋白，因「蛋白质本身即感染因子」的假说独享 1997 年诺贝尔生理学或医学奖',
      '库鲁病的病原体是 Prusiner 发现的无膜病毒，Gajdusek 因相关的护理研究获奖',
      '朊蛋白感染的实质是 PrP 基因被逆转录病毒携带并在个体间水平转移',
      'PrPSc 与 PrPC 的区别在于氨基酸序列不同，二者由不同基因编码',
    ],
    answer: 0,
    explanation:
      'Prusiner 1982 年从羊瘙痒因子中纯化出对核酸酶与紫外线不敏感、对蛋白酶部分敏感的蛋白颗粒，命名 prion 并提出仅由蛋白质构成感染因子的假说，1997 年独享诺贝尔生理学或医学奖。库鲁病是 Gajdusek 1957 年在新几内亚记录、经食葬习俗传播的海绵状脑病，他 1976 年获奖与此相关而非「无膜病毒」。PrPSc 与 PrPC 一级序列完全相同（同一 PrNP 基因），差别纯在构象：后者以 α 螺旋为主，前者富含 β 片、抗蛋白酶，并以自身为模板催化前者重排——构象复制正是「蛋白质遗传」的核心。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-27',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'single',
    question: '关于 GroEL–GroES 伴侣系统，下列叙述正确的是：',
    options: [
      'GroEL 为两个七元环堆叠的圆筒（约 800 kDa），GroES 封盖后腔内可在「无限稀释」环境中折叠约 60 kDa 以下底物',
      'GroEL 直接催化底物的脯氨酰异构，加速共价键步骤',
      'GroES 是一个水解 ATP 的七聚体马达，每转消耗一分子 ATP',
      'GroEL 改变折叠的平衡终点，使天然态比自由溶液中更稳定',
    ],
    answer: 0,
    explanation:
      'GroEL 由 14 个约 57 kDa 亚基组成背靠背双七元环（合计约 800 kDa），每环结合 7 分子 ATP 后腔口疏水内衬翻转为亲水并请 GroES 七聚体封盖，形成隔离的 Anfinsen 笼——约 60 kDa 以下肽链在其中「无限稀释」地重折叠约十秒再释出，聚集被物理阻断。它不催化共价慢步骤（那是折叠酶如 PPIase 的职责）；ATP 由 GroEL 自身水解、用于计时与循环；伴侣不改平衡终点（Anfinsen 原理仍然成立），只改到达终点的速率与产率，是「动力学酶」。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-28',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'single',
    question: 'Levinthal 悖论的核心内容与推论是：',
    options: [
      '100 残基蛋白约 10⁴⁸ 个构象随机搜索需天文数字的时间，故折叠必然沿大幅缩减的偏向性路径进行',
      '折叠速率必须慢于随机搜索，因为需要逐个排除错误构象',
      '蛋白质不能自发折叠，必须由伴侣提供模板指定唯一路径',
      '悖论证明蛋白质的热力学稳定性与折叠速率严格正相关',
    ],
    answer: 0,
    explanation:
      'Levinthal 以 3 的 100 次方（约 10⁴⁸）估算构象总数，即使每构象只驻留 10⁻¹³ 秒，穷举也需约 10²⁸ 年——远超宇宙年龄，而实测折叠毫秒到秒即完成。其价值不在数字而在推论：折叠不是无偏搜索，而是沿被相互作用引导、有效状态数指数缩减的路径系综下滑，这一结论直接催生最小挫折原理与折叠漏斗景观。悖论并未否定自发折叠（Anfinsen 原理仍成立，伴侣也只是改路径不改终点）；速率主要由拓扑（如接触序）决定而非稳定性。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-29',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'truefalse',
    question:
      '「淀粉样纤维的公共结构是交叉 β：β 链垂直于纤维轴排列，链间氢键沿纤维轴以约 0.47 nm 周期堆叠；刚果红染色呈苹果绿双折射、硫黄素 T 荧光增强是经典判据。」',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。1968 年 Eanes 与 Glenner 的纤维 X 射线衍射给出签名：约 4.7 Å（0.47 nm）的子午线反射对应 β 链间氢键沿纤维轴的重复周期，约 10 Å 的赤道反射对应 β 片层间距——β 链与纤维轴近乎垂直的交叉 β 几何。固态核磁与微晶结构进一步揭示「立体拉链」的脱水咬合界面，解释其抗胍、抗蛋白酶的稳定性；刚果红苹果绿双折射与硫黄素 T 荧光大增（约千倍）沿用为病理与实验的经典判据。任何多肽原则上皆可成淀粉样，序列只决定难易与快慢。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-30',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'multiple',
    question: '关于液–液相分离与生物凝集体，下列叙述正确的有：',
    options: [
      '多价相互作用与构象熵的竞争决定相图；球形、融合与 FRAP 快速恢复是液滴的判据',
      '内在无序区的粘点–间隔模型以短寿命弱键网络同时满足「够黏成相」与「够弱保液态」',
      'ALS 相关的 FUS、TDP-43 突变多落在 IDR 粘点上，增加价数并使液滴随时间老化为固体',
      '1,6-己二醇以高特异性只溶解致病凝集体，已作为低毒药物进入临床',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 正确：Flory–Huggins 框架下价键与熵的竞争给出相图，液滴的球形、融合与光漂白后秒级恢复是「液体」的三重证据；粘点（Tyr、Arg、芳香与电荷块）与间隔（Gly、Ser）构成多价弱键网络，磷酸化等修饰可重画相图；FUS、TDP-43、hnRNPA1 的致病突变多增强价数，液滴渐次固化成凝胶与纤维，「液变固」是神经退行通行剧本。D 项错误：1,6-己二醇靠非特异疏水相互作用溶解多种凝集体，浓度高、干扰面广，只是液态性快筛工具，并非临床药物。',
    difficulty: 3,
  },
]
