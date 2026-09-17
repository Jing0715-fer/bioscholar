// ============================================================
// BioScholar 生物化学测验题库 - 批次 A4（第 10–12 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-biochemistry-46 ~ q-biochemistry-60）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：1（基础识记）3 / 2（理解应用）9 / 3（综合分析）3
// 依据：王镜岩《生物化学》（第4版）、Lehninger《Principles
// of Biochemistry》教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const biochemistryQuizA4: QuizQuestion[] = [
  // ================= 第 10 章 脂质代谢（q-biochemistry-46 ~ 50） =================
  {
    id: 'q-biochemistry-46',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'single',
    question: '一分子棕榈酸（十六碳酸）在肝细胞内彻底氧化为二氧化碳和水，按每分子 NADH 折算 2.5 个 ATP、每分子 FADH2 折算 1.5 个 ATP 计，扣除活化耗去的能量后净得的 ATP 数约为：',
    options: [
      '约 106 个',
      '约 108 个',
      '约 129 个',
      '约 80 个',
    ],
    answer: 0,
    explanation:
      '棕榈酸经 7 轮 β 氧化共产 8 个乙酰辅酶 A、7 个 FADH2 与 7 个 NADH：8 个乙酰辅酶 A 入三羧酸循环产 80 个 ATP，7 个 FADH2 产 10.5 个，7 个 NADH 产 17.5 个，合计 108 个；再扣除活化时由 ATP 水解为 AMP 与焦磷酸耗去的两个高能磷酸键，净得约 106 个 ATP，选 A。108 是未扣活化费的毛产额；129 是旧教材按 NADH 折 3、FADH2 折 2 计算的旧口径；80 只是乙酰辅酶 A 经三羧酸循环的部分，漏掉了脱氢的产出。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-47',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'truefalse',
    question:
      '酮体在肝细胞线粒体内生成，肝细胞自身也能大量氧化酮体供能；红细胞因缺乏线粒体而不能利用酮体。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误，前半句不成立。酮体代谢的格局是「肝内生成、肝外利用」：肝线粒体虽有 β-羟丁酸脱氢酶与 HMG-CoA 裂解酶生成酮体，却缺乏利用酮体的琥珀酰辅酶 A 转硫酶（SCOT），故自身不能氧化酮体，所产全部输出供心、肾、脑与骨骼肌利用。后半句正确：红细胞无线粒体，无论何时都只能靠糖酵解供能，既不能氧化脂肪酸也不能利用酮体。长期饥饿时脑转向酮体供能，但红细胞始终是「刚性需糖客户」。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-48',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'single',
    question: '关于长链脂肪酸进入线粒体氧化的肉碱穿梭系统，下列叙述正确的是：',
    options: [
      '肉碱脂酰转移酶 I 位于线粒体内膜内侧，其活性受丙二酰辅酶 A 的别构抑制',
      '肉碱脂酰转移酶 I 位于线粒体外膜，催化脂酰基由辅酶 A 转移给肉碱，并受丙二酰辅酶 A 抑制',
      '十碳以下的中短链脂肪酸同样必须经肉碱穿梭才能进入线粒体基质',
      '脂酰肉碱经线粒体内膜上的 CPT-II 与游离肉碱对向交换进入基质',
    ],
    answer: 1,
    explanation:
      'B 正确：CPT-I 定位于线粒体外膜（内膜外侧），把脂酰基从辅酶 A 转给肉碱生成脂酰肉碱，是 β 氧化的限速酶，其别构抑制剂为脂肪酸合成的前体丙二酰辅酶 A——合成与氧化由此互锁。A 把位置说错；C 错，中短链脂肪酸可直接穿膜，不依赖肉碱；D 错，对向交换由转位酶执行，CPT-II 在内膜内侧负责把脂酰基交还给基质内的辅酶 A，二者各司其职。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-49',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'single',
    question: '关于 LDL 受体介导的胆固醇摄取途径，下列叙述错误的是：',
    options: [
      'LDL 经 ApoB100 与细胞表面 LDL 受体结合，聚集中被覆陷窝后由网格蛋白包裹内吞',
      '内吞体酸化后 LDL 与受体解离，受体随 LDL 一起被运至溶酶体彻底降解，不再循环使用',
      '释出的游离胆固醇可抑制 HMG-CoA 还原酶、激活 ACAT 并经 SREBP 途径下调 LDL 受体合成',
      '家族性高胆固醇血症纯合子发病率约为百万分之一，儿童期即可出现冠心病表现',
    ],
    answer: 1,
    explanation:
      'B 项错误：内吞体酸化后受体与 LDL 解离，受体循环回到细胞膜反复使用，只有 LDL 颗粒被递送溶酶体降解——这正是 Brown 与 Goldstein 阐明的通路细节（二人获 1985 年诺贝尔生理学或医学奖）。A、C、D 均正确：结合-内吞的分子细节、「三重刹车」（抑制还原酶、激活 ACAT 酯化贮存、下调受体）与纯合子 FH 约百万分之一、儿童期冠心病都是教材口径的事实。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-50',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch10',
    type: 'multiple',
    question: '关于脂肪酸合成与酮体代谢，下列叙述正确的有：',
    options: [
      '乙酰辅酶 A 羧化酶以生物素为辅基、耗 ATP 催化丙二酰辅酶 A 生成，是脂肪酸合成的限速酶',
      '哺乳动物脂肪酸合酶为一条约 250 kDa 的多功能肽链，功能形式为同二聚体，中间体由 ACP 携带',
      '亚油酸与 α-亚麻酸因人体缺乏 Δ12 与 Δ15 去饱和酶而无法合成，属必需脂肪酸',
      '肝线粒体合成酮体的限速酶是 HMG-CoA 还原酶',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 均正确：乙酰辅酶 A 羧化酶以生物素为辅基把二氧化碳固定到乙酰辅酶 A 上生成丙二酰辅酶 A；哺乳动物脂肪酸合酶把七种活性域排在一条肽链上，二聚体为功能形式，中间体挂在 ACP 的 4′-磷酸泛酰巯基乙胺长臂上巡回；人体没有 Δ12 与 Δ15 去饱和酶，故 ω-6 的亚油酸与 ω-3 的 α-亚麻酸必须由膳食供给。D 项错误：酮体合成的限速酶是 HMG-CoA 合酶，HMG-CoA 还原酶是胆固醇从头合成的限速酶，两者仅一字之差，切勿混淆。',
    difficulty: 3,
  },
  // ================= 第 11 章 氨基酸与核苷酸代谢（q-biochemistry-51 ~ 55） =================
  {
    id: 'q-biochemistry-51',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'single',
    question: '关于尿素循环，下列叙述错误的是：',
    options: [
      '氨基甲酰磷酸合成酶 I 位于线粒体基质，需 N-乙酰谷氨酸作为别构激活剂',
      '精氨酸代琥珀酸合成酶催化的一步消耗一分子 ATP 并水解为 AMP 与焦磷酸，等于两个高能磷酸键',
      '尿素分子中的两个氮分别来自游离氨与天冬氨酸，全程共消耗三分子 ATP、四个高能磷酸键',
      '尿素循环的全部五步酶促反应均在线粒体基质内完成',
    ],
    answer: 3,
    explanation:
      'D 项错误：尿素循环跨两个区室——第一、二步（氨基甲酰磷酸合成酶 I 与鸟氨酸氨基甲酰转移酶）在线粒体基质，瓜氨酸穿膜入胞浆后再经第三至五步（精氨酸代琥珀酸合成酶、裂解酶与精氨酸酶）完成，即「线粒体两步、胞浆三步」。A、B、C 均正确：CPS-I 需 N-乙酰谷氨酸激活；限速的精氨酸代琥珀酸合成酶一步耗两个高能键；尿素两个氮分别来自游离氨与天冬氨酸，全程耗三分子 ATP、四个高能磷酸键。该循环由 Krebs 与 Henseleit 于 1932 年阐明。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-52',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'single',
    question: '骨骼肌中氨基酸脱氨基的主要方式是：',
    options: [
      '转氨基作用与谷氨酸脱氢酶偶联的联合脱氨基',
      '嘌呤核苷酸循环',
      'L-氨基酸氧化酶催化的氧化脱氨基',
      '氨基酸脱羧酶催化的脱羧基作用',
    ],
    answer: 1,
    explanation:
      '选 B。骨骼肌与心肌的谷氨酸脱氢酶活性不高，联合脱氨基（A，为肝、肾的主要方式）在此难当大任，改走嘌呤核苷酸循环：IMP 与天冬氨酸缩合成腺苷酸代琥珀酸，裂解生成 AMP 与延胡索酸，AMP 再经 AMP 脱氨酶水解脱氨回到 IMP 并放出游离氨，每转一圈脱去一个氨基。C 错，L-氨基酸氧化酶在人体活性很低；D 错，脱羧基产生活性胺，并非脱氨基。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-53',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'truefalse',
    question:
      '在二十种标准氨基酸中，只有亮氨酸与赖氨酸是纯生酮氨基酸；异亮氨酸、苯丙氨酸、酪氨酸与色氨酸为生糖兼生酮氨基酸；其余十四种均为生糖氨基酸。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。碳架出口决定分类：亮氨酸与赖氨酸的碳架只生成乙酰辅酶 A 或乙酰乙酰辅酶 A，在动物体内不能净合成葡萄糖，故为纯生酮；异亮氨酸、苯丙氨酸、酪氨酸与色氨酸的碳架一半成糖一半成酮体，属生糖兼生酮；其余十四种氨基酸的碳架经丙酮酸、α-酮戊二酸、琥珀酰辅酶 A、延胡索酸或草酰乙酸汇入糖异生，均为生糖氨基酸。这一分类是判断饥饿与糖尿病时氨基酸流向的基础词汇表。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-54',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'single',
    question: '嘌呤核苷酸从头合成中，嘌呤环的 C2 与 C8 两个碳原子的直接来源是：',
    options: [
      '甘氨酸整体并入',
      '谷氨酰胺的酰胺氮及其相邻碳',
      '二氧化碳',
      '四氢叶酸携带的一碳单位',
    ],
    answer: 3,
    explanation:
      '选 D。嘌呤环九个原子的来源为：N1 来自天冬氨酸，C2 与 C8 来自一碳单位（分别由 N10-甲酰基与 N5,N10-次亚甲基四氢叶酸供给），N3 与 N9 来自谷氨酰胺的酰胺氮，C4、C5 与 N7 来自甘氨酸整体并入，C6 来自二氧化碳。A 只供 C4、C5 与 N7；B 的谷氨酰胺只供两个氮原子；C 只供 C6。从头途径在磷酸核糖上逐步砌环，限速酶为谷氨酰胺-PRPP 酰胺转移酶，补救途径的 HGPRT 缺陷则致 Lesch-Nyhan 综合征。',
    difficulty: 3,
  },
  {
    id: 'q-biochemistry-55',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch11',
    type: 'multiple',
    question: '关于核苷酸代谢的抗代谢物，下列叙述正确的有：',
    options: [
      '甲氨蝶呤是叶酸类似物，抑制二氢叶酸还原酶，使四氢叶酸池枯竭、dTMP 合成受阻',
      '5-氟尿嘧啶在体内转化为 FdUMP，与胸苷酸合酶及四氢叶酸类辅底物形成稳定复合物而抑制 dTMP 合成',
      '6-巯基嘌呤为次黄嘌呤类似物，经代谢转变为核苷酸后干扰嘌呤从头合成并掺入核酸',
      '别嘌呤醇是嘧啶类似物，抑制乳清酸磷酸核糖转移酶而阻断嘧啶从头合成',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 均正确：甲氨蝶呤以极高亲和力抑制二氢叶酸还原酶，四氢叶酸枯竭使一碳单位断供，dUMP 无法转变为 dTMP；5-氟尿嘧啶经活化生成的 FdUMP 与胸苷酸合酶形成不可逆三元复合物；6-巯基嘌呤由 Elion 设计，经 HGPRT 磷酸核糖化后掺入核酸并抑制多种酶。D 项错误：别嘌呤醇是次黄嘌呤类似物，竞争抑制黄嘌呤氧化酶而减少尿酸生成，用于痛风与高尿酸血症，与嘧啶合成无关。',
    difficulty: 3,
  },
  // ================= 第 12 章 物质代谢的整合与调节（q-biochemistry-56 ~ 60） =================
  {
    id: 'q-biochemistry-56',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'single',
    question: '关于长期饥饿（禁食三周）时机体的代谢改变，下列叙述错误的是：',
    options: [
      '脑的能量供应约有三分之二来自酮体，对葡萄糖的需求显著降低',
      '肌肉蛋白质分解较饥饿初期明显减少，每日约降至 20 克，出现「蛋白节约」',
      '肝糖原在饥饿 24 小时内基本耗尽，此后血糖由肝肾糖异生维持',
      '红细胞转而利用 β-羟丁酸与脂肪酸供能，以节省葡萄糖',
    ],
    answer: 3,
    explanation:
      'D 项错误：成熟红细胞没有线粒体，β 氧化与三羧酸循环均无从谈起，酮体利用酶系也不存在，无论饥饿多久都只能靠糖酵解供能，每日约消耗 20 克葡萄糖，属「刚性需糖客户」。A、B、C 均正确：长期饥饿时脑约三分之二能量由酮体供给、葡萄糖需求降至约每日 40 克；肌肉蛋白分解由每日约 75 克降至约 20 克以节约蛋白；肝糖原 24 小时内耗尽后由肝肾糖异生（乳酸、甘油与氨基酸）维持血糖。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-57',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'single',
    question: '关于 AMP 活化蛋白激酶（AMPK），下列叙述错误的是：',
    options: [
      '细胞内 AMP 与 ATP 的比值升高时 AMPK 被激活，ATP 充裕时其活性反而升高',
      '上游激酶 LKB1 与钙调蛋白依赖激酶 CaMKKβ 可磷酸化 AMPK 使其活化',
      'AMPK 磷酸化乙酰辅酶 A 羧化酶使其失活，丙二酰辅酶 A 下降从而开放 β 氧化',
      'AMPK 可经 TSC2 与 Raptor 抑制 mTORC1，从而抑制蛋白质合成并促进自噬',
    ],
    answer: 0,
    explanation:
      'A 项叙述自相矛盾故错误：AMPK 是细胞能量感受器，在 AMP 升高、ATP 下落的能量匮乏状态被激活；ATP 充裕时 AMPK 保持低活性，脂肪酸与胆固醇合成等耗能过程才被放开。B、C、D 均正确：LKB1（Peutz-Jeghers 综合征致病基因产物）与 CaMKKβ 是主要上游激酶；磷酸化 ACC 使丙二酰辅酶 A 下降、肉碱脂酰转移酶 I 解禁；经 TSC2 与 Raptor 抑制 mTORC1，暂停翻译并启动自噬。二甲双胍的部分药理即经 AMPK 实现。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-58',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'truefalse',
    question:
      'Cori 循环（乳酸循环）中，肌肉糖酵解产生的乳酸经血液运至肝脏，由肝经糖异生重新合成葡萄糖再送回肌肉；此循环使肌肉维持糖酵解通量，能量代价由肝脏以额外消耗 ATP 支付。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。剧烈运动时肌肉糖酵解产乳酸，若堆积则致酸中毒；乳酸入肝后作为糖异生前体重新成糖，葡萄糖经血运回肌肉再入糖酵解。一分子葡萄糖在肌肉糖酵解净得 2 个 ATP，而肝由两分子乳酸糖异生成一分子葡萄糖需耗约 6 个 ATP——净亏约 4 个 ATP，等于肝替肌肉垫付能量账，换来的是糖酵解通量延续与血糖不坠。Cori 夫妇因糖原代谢研究获 1947 年诺贝尔生理学或医学奖。',
    difficulty: 1,
  },
  {
    id: 'q-biochemistry-59',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'single',
    question: '肝能将糖原分解产物以游离葡萄糖形式输出维持血糖，而肌肉不能，其直接原因是：',
    options: [
      '肌肉缺乏糖原磷酸化酶，无法启动磷酸解',
      '肌肉缺乏葡萄糖-6-磷酸酶，6-磷酸葡萄糖无法水解释放游离葡萄糖',
      '肌肉缺乏葡萄糖转运体，葡萄糖无法穿出肌膜',
      '肌肉的己糖激酶对葡萄糖亲和力过高，葡萄糖被立即重新磷酸化',
    ],
    answer: 1,
    explanation:
      '选 B。糖原经磷酸化酶磷酸解生成 1-磷酸葡萄糖，再转变为 6-磷酸葡萄糖；只有葡萄糖-6-磷酸酶（定位于肝、肾内质网）能把它水解为游离葡萄糖释放入血，肌肉不表达此酶，6-磷酸葡萄糖只能就地入糖酵解或磷酸戊糖途径——这就是「肌糖原不能直接升血糖」的经典结论，运动时肌肉只能以乳酸与丙氨酸形式向肝交货。A、C、D 均非原因：肌肉富含糖原磷酸化酶与 GLUT4，己糖激酶的亲和力也不是限速环节。',
    difficulty: 2,
  },
  {
    id: 'q-biochemistry-60',
    subjectId: 'biochemistry',
    chapterId: 'biochemistry-ch12',
    type: 'multiple',
    question: '关于代谢药物的分子靶点，下列叙述正确的有：',
    options: [
      '二甲双胍可抑制线粒体复合体 I 并激活 AMPK，抑制肝糖异生，是 2 型糖尿病的一线用药',
      '他汀类竞争抑制 HMG-CoA 还原酶，肝胆固醇合成下降后经 SREBP 通路上调 LDL 受体',
      'SGLT2 抑制剂阻断肾近曲小管的钠葡萄糖共转运体，每日经尿排出葡萄糖约 60 至 80 克',
      'PCSK9 单抗的作用机制是促进 LDL 受体的降解，从而升高血 LDL',
    ],
    answer: [0, 1, 2],
    explanation:
      'A、B、C 均正确：二甲双胍抑制复合体 I 抬高 AMP/ATP 比值并激活 AMPK，下调肝糖异生基因，UKPDS 研究确证心血管获益；他汀抑制 HMG-CoA 还原酶后，细胞经 SREBP 上调 LDL 受体从血中取胆固醇，血 LDL 降低三至五成（4S 试验 1994）；SGLT2 抑制剂把肾脏改造成「排糖阀门」，2015 年起相继证明心血管与肾脏硬终点获益。D 项方向相反：PCSK9 蛋白本身促进 LDL 受体降解，单抗阻断 PCSK9 后受体寿命延长、血 LDL 下降——这正是其 2015 年获批降脂的机制。',
    difficulty: 3,
  },
]
