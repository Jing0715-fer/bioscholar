// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 批次 P4（第 7–8 章）
// 10 题（q-membrane-transport-31 ~ q-membrane-transport-40），每章 5 题，由内容代理 46-b4 编写
// 题型：single 7 / truefalse 2 / multiple 1；难度 1:2:3 = 2:5:3
// 依据：Stein & Litton《Channels, Carriers, and Pumps》第2版、
// Alberts《Molecular Biology of the Cell》第7版、Taiz & Zeiger《Plant Physiology》第6版
// 及本学科第 7–8 章教材正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const membraneTransportQuizP4: QuizQuestion[] = [
  // ================= 第 7 章 V 型与 F 型 ATPase（q-membrane-transport-31 ~ 35） =================
  {
    id: 'q-membrane-transport-31',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch7',
    type: 'single',
    question: '关于 V-ATPase 的结构与旋转机制，下列叙述正确的是：',
    options: [
      'V1 区的 A₃B₃ 六聚体位于囊泡腔侧，V0 区的 c 环位于胞质侧，两者由柔性索带各自独立旋转',
      '每水解 1 分子 ATP 泵入囊泡的质子数由 c 环拷贝数决定，酵母 c 环 10 拷贝约为 3.3 H⁺/ATP',
      '质子经 a 亚基中一条贯通的亲水孔道自由扩散过膜，与 c 环旋转无关',
      'a 亚基的可质子化谷氨酸负责「装货卸货」，c 亚基只提供两条半通道',
    ],
    answer: 1,
    explanation:
      'V1 是胞质侧的 ATP 水解马达（A₃B₃ 交替提供三个催化位点），V0 嵌膜提供质子通路，A 把两者的位置与职责都说反；中央转子轴贯通两区、带动 c 环整体旋转，并非各自独立转。质子过膜依赖 a 亚基两条互不贯通的半通道与 c 亚基膜内段的可质子化谷氨酸：c 环旋转把「装货—半周转运—卸货」串成通路，C、D 均把部件张冠李戴。B 正确：一圈水解 3 分子 ATP、转位质子数等于 c 环拷贝数，酵母 10 拷贝即约 3.3 H⁺/ATP。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-32',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch7',
    type: 'truefalse',
    question:
      'V-ATPase 在任何条件下都绝对不能合成 ATP，这一限制由其分子结构先验决定，与质子动力势的大小无关。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。V 型在生理条件下因末端抑制与催化位点对水解方向的动力学优化（动力学不可逆性）而只水解不合成，内体与溶酶体膜的质子动力势通常不足 200 mV，也推不动它倒转。但这是条件性性质而非结构性禁令：体外实验中人工施加远超生理的质子动力势，V-ATPase 可反向旋转并合成可观测的 ATP。与之相对，F 型 ATP 合酶的生理方向本就是顺梯度合成——两者的差别是「方向设定」的量级差，不是「能否」的绝对界限。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-33',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch7',
    type: 'single',
    question: '溶酶体维持腔内 pH 4.5–5.0 的酸化过程中，ClC-7 承担的角色是：',
    options: [
      '作为纯 Cl⁻ 通道被动放氯入腔，与 H⁺ 转运完全无关',
      '作为 Cl⁻/H⁺ 反向转运体（约 2Cl⁻:1H⁺）持续把 Cl⁻ 送入腔内，泄掉 V-ATPase 泵 H⁺ 积累的正电压，使净酸化接近电中性',
      '直接水解 ATP，为 V-ATPase 的质子泵送提供能量',
      '在 pH 过低时泵出 Cl⁻ 并回输 H⁺，负责溶酶体的碱化复衡',
    ],
    answer: 1,
    explanation:
      'V-ATPase 泵入 H⁺ 而无阴离子随行，腔内迅速积累正电位，电压反过来顶住泵——这就是电荷分流问题。ClC-7 以约 2Cl⁻:1H⁺ 的交换持续把 Cl⁻ 放入腔内、泄掉正电压，使净效应接近电中性的 HCl 积累，酸化得以推进。它不是纯通道（A 错，其化学计量本身偶联 H⁺ 移动），也不供能（C 错），更不司碱化（D 错）。CLCN7 突变同时造成溶酶体贮积表型与破骨细胞的石骨症，「泵＋分流」缺一不可。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-34',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch7',
    type: 'multiple',
    question: '下列关于 V-ATPase 生理与病理角色的叙述，正确的有：',
    options: [
      '破骨细胞褶皱缘的 V-ATPase 与 ClC-7 共同把溶蚀腔酸化至约 pH 4.5，TCIRG1 突变可致石骨症',
      '肾 A 型闰细胞顶端膜的 V-ATPase 泌 H⁺，ATP6V1B1/ATP6V0A4 突变致远端肾小管酸中毒',
      '肿瘤细胞把 V-ATPase 送上质膜酸化细胞外微环境，酸性溶酶体隔离弱碱性化疗药参与耐药',
      'V-PPase 广泛分布于动物溶酶体膜，与 V-ATPase 并联共同酸化，只是能源不同',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项均正确：破骨细胞以质膜 V-ATPase（V0 的 a3 异构体，基因 TCIRG1）加 ClC-7 泵酸溶蚀腔溶解骨矿，突变致骨吸收障碍的石骨症；闰细胞 B1/a4 亚基的基因突变使泌氢失效而成远端肾小管酸中毒；肿瘤质膜 V-ATPase 酸化微环境促侵袭，弱碱性药物在酸性溶酶体被质子化滞留即溶酶体隔离性耐药。第四项错误：V-PPase 是植物液泡膜特有的第二引擎，水解 PPi（ΔG 约 −27 kJ/mol）泵 H⁺，动物基因组不含 V-PPase——动物的酸化只有 V-ATPase 一台引擎。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-35',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch7',
    type: 'single',
    question: '关于 F 型 ATP 合酶 c 环拷贝数与能量学的关系，下列判断正确的是：',
    options: [
      '拷贝数越多，每个质子换到的 ATP 份额越大，合成效率越高',
      '叶绿体 CF₁CF₀ 采用 14 拷贝是演化的失误，与光合质子来源的流量毫无匹配关系',
      '同一株植物中线粒体与叶绿体 F 型合酶的 c 环拷贝数完全相同',
      '拷贝数越多，每合成 1 分子 ATP 所需质子越多：哺乳动物线粒体 8 拷贝约 2.7 H⁺/ATP，叶绿体 14 拷贝约 4.7 H⁺/ATP',
    ],
    answer: 3,
    explanation:
      '每转一圈合成 3 分子 ATP、转位质子数等于 c 环拷贝数，故 H⁺/ATP ≈ 拷贝数 ÷ 3：哺乳动物 8 拷贝约 2.7、酵母 10 约 3.3、叶绿体 14 约 4.7——拷贝数越多，单位质子换到的 ATP 越少，D 正确而 A 因果颠倒。B 也错：光合电子传递泵质子充沛、梯度随光照建立，大拷贝数步幅小、易驱动，恰与大流量质子源匹配，弱光下亦易启动。C 错：植物线粒体保持 8 拷贝的「呼吸配置」，叶绿体另配 14 拷贝的「光合配置」，同一植株两套并行——植物在效率与匹配之间选择了匹配。',
    difficulty: 3,
  },
  // ================= 第 8 章 次级主动转运：协同转运体（q-membrane-transport-36 ~ 40） =================
  {
    id: 'q-membrane-transport-36',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch8',
    type: 'truefalse',
    question:
      '次级主动转运体自身既不结合也不水解 ATP，其能量来自一级泵建立的离子梯度；因此用乌本苷抑制 Na⁺/K⁺-ATPase 后，SGLT、NHE、NCX 等钠耦联二级泵的活动将随梯度耗竭而逐渐衰竭。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。次级主动转运的本质是能量的二级传递：一级泵（动物 Na⁺/K⁺-ATPase、植物质膜 H⁺-ATPase 与液泡双引擎等）先耗 ATP 建立离子梯度，二级泵再把梯度自由能兑换为另一溶质的逆梯度转运。乌本苷停掉钠泵后，Na⁺ 梯度在数秒至数分钟内衰减，SGLT 的葡萄糖摄取与 NCX 的钙外排随即失去动力——「抑制一级泵即瘫痪二级泵」正是区分初级与次级转运的经典药理学判据，也是跨上皮三级能量接力的脆弱环节。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-37',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch8',
    type: 'single',
    question: '关于肾近端小管对滤过葡萄糖的重吸收，正确的叙述是：',
    options: [
      'SGLT1 承担约 90% 的重吸收，SGLT2 补足余量',
      'SGLT1 与 SGLT2 各承担一半，二者亲和力与化学计量完全相同',
      'SGLT2（1Na⁺:1 葡萄糖）承担约 90%，SGLT1（2Na⁺:1 葡萄糖、亲和力更高）补足余量',
      '葡萄糖经 GLUT2 从管腔直接易化扩散进入细胞，无需对抗浓度梯度',
    ],
    answer: 2,
    explanation:
      '近端小管的双段布局是「先通量、后亲和」：S1 段的 SGLT2 化学计量为 1Na⁺:1 葡萄糖、容量大而亲和低，承担约 90% 的滤过糖重吸收（每日约 180 g）；SGLT2 趋于饱和后，更远段 2Na⁺:1 葡萄糖、亲和更高的 SGLT1 收尾余量。A 把两者对调；B 忽略了计量与分布差异；D 错在 GLUT2 位于基底侧、负责胞内糖出胞入血，管腔侧摄取必须逆梯度由 SGLT 完成。恩格列净等 SGLT2 抑制剂正是选择打击「大头」促成尿糖排泄并获得心肾获益。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-38',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch8',
    type: 'single',
    question: '心肌缺血时 NCX 反向运转造成胞质 Ca²⁺ 超载，其正确的因果链是：',
    options: [
      'ATP 耗竭 → Na⁺/K⁺ 泵停转 → 胞内 Na⁺ 积聚与膜去极化 → NCX 以 Ca²⁺ 内流换 Na⁺ 外流 → Ca²⁺ 超载',
      'ATP 耗竭 → SERCA 异常过度活跃 → 肌浆网钙被全部排入胞质 → NCX 被动跟随内流',
      'NCX 的运转方向只由胞外 Ca²⁺ 浓度决定，与 Na⁺ 梯度和膜电位无关',
      '缺血时 NCX 被迅速转录下调，Ca²⁺ 超载完全由 L 型钙通道单独造成',
    ],
    answer: 0,
    explanation:
      'NCX 是生电性的 3Na⁺:1Ca²⁺ 交换体，净方向取决于 Na⁺ 电化学梯度与膜电位的合力。缺血时 ATP 枯竭，钠泵停转使胞内 Na⁺ 升高，同时膜去极化，两项合力把 NCX 推入反向——Ca²⁺ 涌入换 Na⁺ 排出，造成钙超载，参与再灌注损伤与缺血性心律失常。SERCA 缺能时恰恰失活、无力泵钙，B 说反；C 忽略了决定方向的两个变量，NCX 正是「生电性转运体方向可逆」的范例；D 与事实相反，钙超载的重要来路正是 NCX 反转本身。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-39',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch8',
    type: 'single',
    question: '拟南芥 NRT1.1（CHL1）在硝酸盐匮乏时切换为高亲和摄取模式，其分子开关是：',
    options: [
      'Thr460 被磷酸化引发三聚体内亚基协作的自抑制',
      'NAR 辅亚基诱导表达并与 NRT1.1 组装成高亲和复合体',
      '硝酸盐经感知上调 NLP7，由转录级联提高 NRT1.1 自身表达量而实现变速',
      'Thr101 被 CIPK23 激酶磷酸化，使转运体转入高亲和态',
    ],
    answer: 3,
    explanation:
      'NRT1.1 是双亲和转运体：Thr101 未磷酸化时以低亲和态工作，硝酸盐缺乏时 CIPK23 激酶将其磷酸化，单个位点的修饰即完成两挡变速、转入高亲和摄取。Thr460 的自抑制属于铵转运体 AMT1;1 的防氨毒机制，张冠李戴；NAR 辅亚基是 NRT2.1 高亲和系统的组装伴侣而非 NRT1.1 的开关；NLP7 介导的转录级联确实存在，但那是小时级的基因表达调节，Thr101 磷酸化是分钟级对既有分子的直接切换——双亲和变速的开关只在后者。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-40',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch8',
    type: 'single',
    question: '关于动物与植物次级主动转运「驱动离子」的对照，下列叙述正确的是：',
    options: [
      '动物以 H⁺ 梯度、植物以 Na⁺ 梯度为主要驱动离子',
      '植物选择 H⁺ 是因为土壤中 H⁺ 与 Na⁺ 同样稳定富余，无需自产',
      '动物以 Na⁺ 梯度驱动（SGLT、NKCC、NCX、SLC6），植物以 H⁺ 梯度驱动（SUC、NRT、AMT、PHT、SULTR）；钙外排分别由 NCX（3Na⁺:1Ca²⁺）与 CAX（多 H⁺:1Ca²⁺）完成',
      '耐盐植物的 SOS1 用 Na⁺ 梯度把 H⁺ 排出胞外，与动物肠上皮 NHE3 的哲学完全相同',
    ],
    answer: 2,
    explanation:
      '驱动离子的分野是全书核心：动物内环境承袭海水的富钠（血浆 Na⁺ 约 145 mmol/L），以 Na⁺ 梯度支付次级转运；植物扎根土壤、缺钠而质子自产，以质子动力势支付。钙外排两端殊途同归——都借单价阳离子梯度抬走二价钙，动物 NCX 以 3Na⁺:1Ca²⁺、植物 CAX 以多 H⁺:1Ca²⁺，故 C 正确。A 把主线对调；B 与事实相反——土壤 H⁺ 波动大，植物靠根泌 H⁺ 与缺铁时上调 H⁺-ATPase 自造货币；D 恰好说反：SOS1 用 ΔpH 排 Na⁺（H⁺ 是钱、Na⁺ 是毒），与 NHE3 用 Na⁺ 排 H⁺（Na⁺ 是资源）互为反向哲学。',
    difficulty: 2,
  },
]
