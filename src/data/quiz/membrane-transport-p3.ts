// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 批次 P3（第 5–6 章）
// 10 题（q-membrane-transport-21 ~ q-membrane-transport-30），每章 5 题，由内容代理 46-b3 编写
// 题型：single 6 / truefalse 2 / multiple 2；难度 1:2:3 = 2:5:3
// 依据：Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 · Taiz & Zeiger《Plant Physiology》第6版
// 及本学科第 5–6 章教材正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const membraneTransportQuizP3: QuizQuestion[] = [
  // ================= 第 5 章 载体与易化扩散（q-membrane-transport-21 ~ 25） =================
  {
    id: 'q-membrane-transport-21',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch5',
    type: 'single',
    question: '关于载体与通道的比较，下列叙述正确的是：',
    options: [
      '载体的转运速率与通道相当，都在每秒 10⁷ 个底物以上',
      '载体以连续开放的亲水孔道转运底物，因此无法维持底物的跨膜梯度',
      '载体经交替通路工作，结合位点从不同时暴露于膜两侧，周转约每秒 10²–10⁴ 次，比通道慢约五个数量级',
      '饱和动力学是通道的特征，载体转运速率始终与底物浓度成正比',
    ],
    answer: 2,
    explanation:
      '载体没有贯通的水相孔道，而是把底物锁在结合腔里经构象变化翻过膜：外门与内门绝不同时开启，这是交替通路原则，既保证选择性也避免把辛苦建立的梯度短路。速率上载体每秒仅周转约 10²–10⁴ 次，比通道的 10⁷–10⁸ 慢约五个数量级；饱和恰恰是单结合位点的载体性状，简单扩散的速率才始终与浓度成正比，故 C 正确。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-22',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch5',
    type: 'truefalse',
    question:
      '载体介导易化扩散的温度系数 Q₁₀ 通常大于 3，而简单扩散的 Q₁₀ 仅约 1.2–1.6，这一差异源于载体构象变化需要更高的活化能。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。简单扩散只要求分子挤过脂双层，活化能低，Q₁₀ 约 1.2–1.6；载体每完成一轮转运都要打断氢键、整体位移跨膜螺旋，构象变化的活化能高，Q₁₀ 通常大于 3。红细胞葡萄糖摄取在低温下近乎冻结的实验正是以此判定载体机制——温度敏感性实为构象大挪移的能量账单，也是鉴别「过膜靠扩散还是靠蛋白」的经典判据。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-23',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch5',
    type: 'single',
    question: 'GLUT2 分布于肝细胞与胰岛 β 细胞，对葡萄糖的 Km 高达 15–20 mM。这种「低亲和、高容量」设计的主要生理意义是：',
    options: [
      '降低转运速率以保护 β 细胞免受高糖毒害',
      '使速率在生理血糖范围内远未饱和、近似随血糖成比例变化，让细胞能线性「读出」血糖浓度变化',
      '使 GLUT2 在低血糖时仍保持最大转运速率，保证胰岛素持续分泌',
      '使 GLUT2 能够逆浓度梯度主动转运葡萄糖',
    ],
    answer: 1,
    explanation:
      'Km 15–20 mM 意味着生理血糖 3.9–6.1 mM 落在线性段：v = Vmax × S ÷ (Km + S) 近似与血糖 S 成正比，转运速率遂成为血糖的「读数」，肝细胞与 β 细胞据此做出代谢与分泌决策，餐后 10 mM 上下的宽量程同样未被饱和。若 Km 过小（如 GLUT1 的 1–2 mM），常态血糖下已近半饱和，读数失去分辨力；GLUT 亦不水解 ATP、只能顺梯度易化扩散，故 B 正确。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-24',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch5',
    type: 'single',
    question: '黄单胞菌通过 TAL 效应子操纵水稻 OsSWEET14 造成白叶枯病感病。关于其机制与「易感基因」概念，下列叙述正确的是：',
    options: [
      'OsSWEET14 编码抗病蛋白，TAL 效应子抑制其表达使植株防御崩溃',
      'OsSWEET14 是病原菌自带的外源基因，由效应子整合进水稻基因组',
      'TAL 效应子直接抑制质膜 H⁺-ATPase，使韧皮部装载停止、叶片枯死',
      'OsSWEET14 编码蔗糖外排载体，效应子诱导其高表达使糖外泌质外体供病原取食；编辑其启动子破坏效应子结合位点反而抗病',
    ],
    answer: 3,
    explanation:
      'TAL 效应子进入水稻细胞核后像转录因子一样结合 OsSWEET14 启动子并强行激活转录；OsSWEET14 编码蔗糖外排载体，超表达把光合糖持续外泌到质外体，白叶枯病菌以此为营养大量繁殖，植株感病——病原攻击的不是植物的防御，而是植物的物流，故称易感基因。敲除冗余成员或编辑启动子上的效应子结合位点（如隐性抗病基因 xa13 一类变异）使病原无从取食，反而获得抗性，故 D 正确。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-25',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch5',
    type: 'multiple',
    question: '关于动物与植物糖转运体系的对照，下列正确的有：',
    options: [
      '动物 GLUT 与植物 SWEET 同属 MFS 12 跨膜螺旋家族，是直系同源蛋白',
      'GLUT（MFS 12 TMS）与 SWEET（7 TMS 双半重复）是不同家族独立起源，以不同折叠趋同实现糖的顺梯度跨膜',
      '动物肠腔吸收用 SGLT1 以 Na⁺ 梯度驱动，植物韧皮部装载用 SUC2 以 H⁺ 梯度驱动——同为二级同向转运而驱动离子不同',
      'Münch 压力流学说中，筛管长距离运输的动力是源库两端的渗透压差，实测流速约 0.5–1.5 m/h、蔗糖浓度 0.3–1 M',
    ],
    answer: [1, 2, 3],
    explanation:
      'A 错在「同源」：GLUT 属 MFS 12 TMS 折叠，SWEET 由两个三螺旋半重复组成 7 TMS，二者没有同源关系，是不同家族趋同解决同一问题的佳话。B、C 分别正确指出折叠独立起源与驱动离子之别（Na⁺ 对 H⁺ 的「货币」分野预告第 8 章）；D 与压力流学说一致——SUC2 泵糖建立渗透压差，水随之进出推动筛管汁液整体流动。故选 B、C、D。',
    difficulty: 3,
  },
  // ================= 第 6 章 P 型 ATPase：初级主动转运 I（q-membrane-transport-26 ~ 30） =================
  {
    id: 'q-membrane-transport-26',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch6',
    type: 'single',
    question: 'P 型 ATPase 名称中「P」的直接由来是：',
    options: [
      '该族蛋白都是泵（pump），负责初级主动转运',
      '反应循环中出现稳定的磷酸化天冬氨酸中间体（E1~P），酸不稳定且可被羟胺特异性断裂',
      '该族必须结合磷脂酰丝氨酸才能定位质膜',
      '五个亚类 P1–P5 均以磷酸根为转运底物',
    ],
    answer: 1,
    explanation:
      '「P」指 phospho：所有 P 型 ATPase 都在保守模体 DKTGT 中以一个天冬氨酸侧链接受 ATP 的 γ 磷酸基团，形成 β 天冬氨酰磷酸中间体，循 Post-Albers 循环 E1→E1~P→E2-P→E2 往返完成离子易位。这一自我磷酸化的化学身份证把它与不以磷酸化中间体行事的 V 型、F 型 ATPase 区分开；「泵」只是功能俗称，磷脂结合与磷酸根转运均非名称来源，故 B 正确。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-27',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch6',
    type: 'single',
    question: '地高辛增强心肌收缩力的分子级联是：',
    options: [
      '抑制 Na⁺/K⁺-ATPase → 胞内 Na⁺ 升高 → NCX 正向排 Ca²⁺ 减少 → 胞内 Ca²⁺ 升高 → 正性肌力',
      '直接激活 SERCA2a，加速肌浆网的钙回收与释放',
      '抑制受磷蛋白，解除其对 SERCA2a 的「手刹」作用',
      '激活心肌 L 型 Ca²⁺ 通道，延长动作电位平台期',
    ],
    answer: 0,
    explanation:
      '地高辛抑制心肌 Na⁺/K⁺-ATPase 后胞内 Na⁺ 升高，NCX（3 Na⁺ 入换 1 Ca²⁺ 出）正向模式的驱动力随之减弱，每搏排出的 Ca²⁺ 减少，肌浆网钙储量渐进累积，下次收缩时钙释放增多、收缩力增强——「抑泵、放慢交换体、富集钙」的三部级联并不直接作用于任何钙通道或 SERCA；同一机制过量即致心律失常，治疗窗极窄，故 A 正确。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-28',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch6',
    type: 'truefalse',
    question:
      'Na⁺/K⁺-ATPase 每水解一分子 ATP 泵出 3 个 Na⁺、泵入 2 个 K⁺，净外移一个正电荷而具生电性；维持该梯度约消耗静息状态下全身 ATP 的 25%，肾脏中可高达 70%。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。3 个 Na⁺ 出对 2 个 K⁺ 入的化学计量使每个循环净外移一个正电荷，钠泵因此是生电性泵；胞内 3 个 Na⁺ 与胞外 2 个 K⁺ 的序贯结合保证计量恒定、绝不「找零」。能量账单同样著名：静息时全身约 25% 的 ATP 花在钠泵上，肾小管重吸收任务繁重处可高达 70%——梯度是持续付费的存款，利息以 ATP 结算。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-29',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch6',
    type: 'single',
    question: '拟南芥质膜 H⁺-ATPase（AHA）从自抑制态到全激活态的调控链是：',
    options: [
      '生长素直接与 AHA 结合并变构激活，无需任何磷酸化事件',
      '蓝光使 14-3-3 蛋白降解，解除其对泵的遮蔽',
      'C 端自抑制域（R 域）的 Thr947（AHA2 口径）被磷酸化后，14-3-3 蛋白以二聚体桥连两个 C 端，把自抑制域锁离催化核心实现全激活；糠菌素通过锁死该复合体使泵异常激活',
      '胞质 Ca²⁺ 直接结合泵的跨膜区并开放质子通道',
    ],
    answer: 2,
    explanation:
      'AHA 的 C 端 R 域平时像绳套搭在胞质域上压低泵速；Thr947 被激酶磷酸化后，14-3-3 蛋白以二聚体桥连相邻两个 C 端，把自抑制域锁离催化核心，泵进入全激活态并顺带促成二聚排列——蓝光、生长素与蔗糖等信号都汇入这一磷酸化节点，磷酸酶则随时把泵拉回自抑制态。糠菌素结合于 14-3-3 与 C 端的接缝处把复合体焊死，是真菌毒素对植物泵的精准劫持，故 C 正确。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-30',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch6',
    type: 'multiple',
    question: '关于「动物以 Na⁺/K⁺ 泵、植物以 P3A H⁺ 泵为主引擎」的对照，下列正确的有：',
    options: [
      '动物泵每 ATP 转 3 Na⁺ 出、2 K⁺ 入；植物泵每 ATP 仅转出 1 个 H⁺，但两者都具生电性',
      '动物泵的特异抑制剂是乌本苷；植物泵可被糠菌素锁死在 14-3-3 复合体上而异常持续激活',
      '植物次级转运几乎全部由 Na⁺ 梯度驱动，动物次级转运则普遍由 H⁺ 梯度驱动',
      '耐盐植物借用 SOS1 与 HKT1 处置 Na⁺，但其能量仍出自 H⁺ 泵建立的梯度——主引擎的选择并不绝对',
    ],
    answer: [0, 1, 3],
    explanation:
      'A、B 与两大引擎的化学计量、生电性及工具药完全相符：乌本苷抑制动物钠泵，糠菌素把植物质子泵锁死在激活态。C 恰好说反：动物次级转运普遍由 Na⁺ 梯度驱动（SGLT、NHE、NCX），植物次级转运几乎全由 H⁺ 梯度驱动（NRT、PHT、SULTR、SUC）——这是「驱动离子选择」写进两大界家族谱系的间接后果。D 正确，例外互渗恰好证明规则：驱动离子的选择是可用性与毒性的权衡，与环境化学互为镜像，故选 A、B、D。',
    difficulty: 3,
  },
]
