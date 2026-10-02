// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 批次 P6（第 11–12 章）
// 10 题（q-membrane-transport-51 ~ q-membrane-transport-60），每章 5 题
// 题型：single 7 / truefalse 2 / multiple 1；难度 1:2:3 = 2:5:3
// 教材依据 Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 · Taiz & Zeiger《Plant Physiology》第6版
// 及本学科第 11–12 章教材正文；由内容代理 46-b6 编写
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const membraneTransportQuizP6: QuizQuestion[] = [
  // ================= 第 11 章 特化上皮与特化细胞的转运（q-51 ~ 55） =================
  {
    id: 'q-membrane-transport-51',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch11',
    type: 'single',
    question: '霍乱引起剧烈分泌性腹泻时，口服补液盐（ORS）仍能经肠道有效吸收钠与水，其机制依据是：',
    options: [
      '霍乱毒素上调了 SGLT1 的表达量，从而补偿钠与水的丢失',
      'ORS 中的葡萄糖直接激活肠上皮 CFTR 通道，促进氯离子重吸收',
      '顶端膜的 SGLT1 钠-葡萄糖同向转运不受霍乱毒素-cAMP 通路影响，葡萄糖可带动 Na⁺ 继续耦联吸收，水随之回收',
      '霍乱时肠上皮大量脱落更新，ORS 靠新生的上皮细胞完成吸收',
    ],
    answer: 2,
    explanation:
      '霍乱毒素将 Gsα ADP 核糖基化锁死于活化态，cAMP 积聚，PKA 磷酸化顶端 CFTR 使 Cl⁻ 大量分泌，Na⁺ 与水循电-渗透梯度倾泻而出。但 SGLT1 属 SLC5 家族的 Na⁺-葡萄糖同向转运体，其运转不依赖 cAMP-PKA 通路，只要葡萄糖存在，Na⁺ 照常被耦联吸收入胞，水随渗透梯度回收。WHO 低渗 ORS（约 245 mOsm/L，钠与葡萄糖各约 75 mmol/L）据此把霍乱病死率从两三成压到 1% 以下，被《柳叶刀》称为 20 世纪最重要的医学进步之一。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-52',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch11',
    type: 'single',
    question: '关于 WNK4-SPAK/OSR1 激酶网络在上皮转运中的功能，下列叙述正确的是：',
    options: [
      'WNK4 直接水解 ATP，为 Na⁺/K⁺-ATPase 提供能量',
      'WNK4 是紧密连接的主要结构蛋白，决定细胞旁通透性',
      'WNK4 感知管腔渗透压，经 SPAK/OSR1 调节微绒毛的肌动蛋白骨架长度',
      'WNK4 的激酶活性受胞内 Cl⁻ 抑制，低 Cl⁻ 时经 SPAK/OSR1 激活 NKCC/NCC 摄入型共转运体并抑制 KCC 外排型，高 Cl⁻ 时反向切换',
    ],
    answer: 3,
    explanation:
      'WNK4 驻守紧密连接附近，是「感知 Cl⁻ 的分子开关」：其激酶活性被胞内 Cl⁻ 抑制，容量不足或 Cl⁻ 下降时 WNK 活化，经 SPAK/OSR1 磷酸化激活 NKCC2/NCC 等摄入型转运体、同时磷酸化抑制 KCC 外排型，转入蓄盐蓄氯模式；Cl⁻ 回升则整体反向。WNK1/WNK4 突变使刹车失灵即 Gordon 高血压综合征（家族性高钾高血压），噻嗪类利尿剂抑制 NCC 恰好对症。WNK4 既不水解 ATP 供能，也不是紧密连接结构组分。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-53',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch11',
    type: 'single',
    question: '干旱时脱落酸（ABA）诱导气孔关闭的信号级联，顺序正确的是：',
    options: [
      'ABA → PYR/PYL/RCAR 受体结合并抑制 PP2C → OST1/SnRK2.6 活化 → 磷酸化开放 SLAC1 → 阴离子与 K⁺ 外流 → 膨压下降',
      'ABA → 直接开放 KAT1 内向 K⁺ 通道 → K⁺ 内流 → 保卫细胞吸水 → 气孔关闭',
      'ABA → 抑制 H⁺-ATPase → 膜超极化 → GORK 关闭 → 水分外流 → 气孔关闭',
      'ABA → PYR 受体激活 PP2C → SLAC1 去磷酸化关闭 → 苹果酸合成增加 → 气孔关闭',
    ],
    answer: 0,
    explanation:
      'ABA 被可溶性受体 PYR/PYL/RCAR 结合后，受体扣押 2C 型蛋白磷酸酶（ABI1/ABI2），使 OST1/SnRK2.6 得以释放并自磷酸化活化；OST1 磷酸化 SLAC1/SLAH 阴离子通道使其开放，Cl⁻ 与苹果酸外流导致去极化，去极化再打开 GORK 外向 K⁺ 通道排出 K⁺，溶质出走使膨压下降、气孔关闭。B 把方向写反（K⁺ 内流是开放事件）；C 的超极化与 GORK 关闭均误；D 中 PP2C 是被抑制而非激活。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-54',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch11',
    type: 'multiple',
    question: '光照诱导气孔开放的过程中发生的分子事件包括：',
    options: [
      '蓝光受体 phot1/phot2 感光并启动下游级联',
      'H⁺-ATPase 的 Thr 残基磷酸化并结合 14-3-3 蛋白，质膜超极化',
      'OST1 磷酸化开放 SLAC1，Cl⁻ 与苹果酸大量外流',
      'KAT1/KAT2 内向整流 K⁺ 通道开放摄入 K⁺，PEPC 催化合成苹果酸',
    ],
    answer: [0, 1, 3],
    explanation:
      '气孔开放级联：蓝光经 phot1/phot2 感光，H⁺-ATPase 的 Thr 残基磷酸化并招募 14-3-3 二聚体，泵活性上调使膜超极化至约 −100 mV 以负；超极化窗口内 KAT1/KAT2 摄入 K⁺，同时 Cl⁻ 摄入、PEPC 固定 CO₂ 合成苹果酸、淀粉降解补充蔗糖，渗透势下降吸水、膨压升高、气孔张开。而 OST1 磷酸化开放 SLAC1 引起阴离子外流与 GORK 排钾，属 ABA 介导的关闭级联，方向相反，故 C 不选。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-55',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch11',
    type: 'truefalse',
    question:
      '根内皮层凯氏带由木栓质等疏水聚合物沉积而成、依赖 CASP 蛋白组装，可阻断质外体的水与离子流并强制其改走穿细胞路线，功能上相当于动物的紧密连接。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '凯氏带位于内皮层细胞的径向与横向壁，CASP 家族蛋白先在质膜带状区聚集并清除带区转运体，再引导木栓质均一沉积，封死初生壁形成无间断环带。它阻断质外体通路，使水分与溶质必须穿过内皮层细胞的质膜、接受其选择性转运体的查验——与动物紧密连接「分子篱笆+选择性滤器」的双重身份异曲同工，故称「植物版紧密连接」。这是功能趋同而非同源，动植物比较观的第一份标本，叙述正确。',
    difficulty: 2,
  },
  // ================= 第 12 章 逆境、疾病与演化（q-56 ~ 60） =================
  {
    id: 'q-membrane-transport-56',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch12',
    type: 'single',
    question: '关于囊性纤维化（CF），下列叙述正确的是：',
    options: [
      'ΔF508 属门控缺陷突变，单用增效剂伊瓦卡托即可纠正',
      'CF 由 CFTR（Cl⁻ 通道）功能丧失引起，北欧裔携带率约 1/25、发病率约 1/2500，汗液 Cl⁻ 浓度升高是经典诊断指标',
      'CF 为常染色体隐性遗传，但致病基因位于线粒体 DNA',
      'CFTR 属 MFS 载体超家族，以易化扩散方式转运氯离子',
    ],
    answer: 1,
    explanation:
      'CFTR 是 ABC 超家族中罕见的 cAMP 门控 Cl⁻ 通道，其功能丧失致气道黏液脱水、胰腺功能不全与汗液高氯，毛果芸香碱离子导入发汗试验 Cl⁻ >60 mmol/L 为经典诊断线；北欧裔携带率约 1/25、发病率约 1/2500。ΔF508（约占等位基因 70%）是 II 类折叠缺陷，需 elexacaftor/tezacaftor/ivacaftor 三联纠正折叠再增效，伊瓦卡托单药针对 G551D 等 III 类门控缺陷，A 混淆了突变分类；CF 基因位于第 7 号染色体核基因组，D 归错了家族。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-57',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch12',
    type: 'single',
    question: '土壤盐胁迫下植物 SOS 通路各组分的顺序与分工是：',
    options: [
      'SOS2 先感知 Na⁺，再激活 SOS3，最后抑制 SOS1 转运体',
      'SOS1 直接感知 Na⁺ 并启动自身 Na⁺/H⁺ 交换，无需激酶级联',
      'Na⁺ 内流引发胞质 Ca²⁺ 波 → SOS3（CBL4）感受 Ca²⁺ 并激活 SOS2（CIPK24）激酶 → 磷酸化激活质膜 SOS1（Na⁺/H⁺ 反向转运体）外排 Na⁺',
      'Ca²⁺ 波激活 NHX1 完成液泡隔离，SOS1 与 SOS2 随后放大信号',
    ],
    answer: 2,
    explanation:
      '盐胁迫下 Na⁺ 经非选择性阳离子通道内流，数秒至数分钟触发特征性胞质 Ca²⁺ 波；豆蔻酰化钙感受器 SOS3（CBL4）结合 Ca²⁺ 后招募并激活丝氨酸/苏氨酸激酶 SOS2（CIPK24），复合体磷酸化质膜 Na⁺/H⁺ 反向转运体 SOS1 的长胞质尾、解除其自抑制，Na⁺ 被 H⁺ 势能顶出胞外——耐盐第一道防线。sos1/sos2/sos3 突变体均表现盐超敏，是这条级联的遗传学定义；NHX1 液泡隔离属配套的下游止损，不是 SOS 的直接底物。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-58',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch12',
    type: 'single',
    question: '关于长 QT 综合征与药物性心律失常，下列叙述正确的是：',
    options: [
      'LQT1 由 hERG 突变引起，LQT2 由 KCNQ1 突变引起',
      '获得性长 QT 多因药物阻断 hERG（IKr）所致，西沙必利因此撤市，hERG 筛查已成为新药开发的法定安全环节',
      'LQT3 的机制是 SCN5A 晚期钠电流减小，复极提前',
      '各型长 QT 均禁用 β 受体阻滞剂，首选植入式起搏器',
    ],
    answer: 1,
    explanation:
      '先天性长 QT 三大家族：LQT1-KCNQ1（IKs）、LQT2-hERG/KCNH2（IKr）、LQT3-SCN5A 晚钠电流增大，A 把前两型对调；hERG 孔腔大且芳香残基丰富，对多种药物异常易感，特非那定与西沙必利因阻断 IKr 致尖端扭转型室速先后撤市，hERG 活性检测因此写入新药心脏安全评估流程，B 正确；C 的晚钠电流方向写反；β 阻滞剂是 LQT1 的一线治疗，D 误。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-59',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch12',
    type: 'single',
    question: '2019 年冷冻电镜解析的 ZAR1 抗病小体揭示了植物免疫的新机制，其要点是：',
    options: [
      '胞内 NLR 受体 ZAR1 识别效应子后经 ATP 置换驱动寡聚，组装成五聚体轮状复合体，漏斗状结构插入质膜形成 Ca²⁺ 渗透孔道，触发程序性细胞死亡',
      'ZAR1 是叶绿体定位的转录因子，直接激活水杨酸合成基因',
      'ZAR1 五聚体通过主动外排病原毒素实现抗菌',
      'ZAR1 与大麦 MLO 协同组装为七次跨膜通道',
    ],
    answer: 0,
    explanation:
      'ZAR1 为 CC 型 NLR 免疫受体：效应子 AvrAC 尿苷酰化的 PBL2 与激酶 RKS1 结合，诱导 ADP 结合态的 ZAR1 发生核苷酸置换并寡聚为五聚体轮状「抗病小体」；其漏斗状 N 端螺旋束插入质膜，构成钙渗透性孔道，Ca²⁺ 内流直接触发超敏反应式程序性细胞死亡，把病原封死在坏死斑内。这是首个被证明能自身成孔行使通道功能的 NLR 蛋白，「免疫受体即通道」由此成为范式；B 归类错误，C 外排毒素与 D 与 MLO 组装均无依据。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-60',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch12',
    type: 'truefalse',
    question:
      '电压门控钠通道（Nav）出现于单细胞真核生物、早于钙通道（Cav），神经系统因此得以先于多细胞动物起源。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '演化顺序恰相反：单细胞生物（如领鞭毛虫）只拥有 Cav 样钙通道，四结构域的 Nav 由 Cav 祖先演化而来——选择性滤器从 EEEE（钙选择）改写为 DEKA（钠选择）并获得球-链式快失活——Nav 出现在早期多细胞动物、伴随神经系统起源登场。与之配套的后生动物特化还包括 LGIC 与突触共演化、SLC6 递质摄取家族；绿色植物缺少 Nav/Cav，电信号改用 Cl⁻/K⁺ 电压门控加 Ca²⁺ 波的替代方案。题干把 Nav 与 Cav 的先后次序颠倒，叙述错误。',
    difficulty: 3,
  },
]
