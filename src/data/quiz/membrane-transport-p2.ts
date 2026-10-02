// ============================================================
// BioScholar 膜蛋白与物质转运测验题库 - 批次 P2（第 3–4 章）
// 10 题（q-membrane-transport-11 ~ q-membrane-transport-20），每章 5 题
// 题型：single 6 / truefalse 2 / multiple 2；难度 1:2:3 = 2:5:3
// 教材依据：Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 ·
// Taiz & Zeiger《Plant Physiology》第6版，及本学科第 3–4 章教材正文
// Task ID: 46-b2
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const membraneTransportQuizP2: QuizQuestion[] = [
  // ================= 第 3 章 钾通道与钾转运体（q-membrane-transport-11 ~ 15） =================
  {
    id: 'q-membrane-transport-11',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch3',
    type: 'single',
    question: '关于拟南芥 Shaker 家族九个成员的「岗位分工」，下列叙述正确的是：',
    options: [
      'GORK 是内向整流通道，专职在根中柱把 K⁺ 装载入木质部随蒸腾流上行',
      'KAT1/KAT2 内向守保卫细胞支撑气孔开放，SKOR 去极化外向把 K⁺ 装入木质部，GORK 去极化外排助气孔关闭',
      'AKT1 在保卫细胞专职外排 K⁺，GORK 在根表皮负责营养性钾吸收',
      '九个成员全部为内向整流通道，K⁺ 的外排任务由高亲和转运体 HAK5 完成',
    ],
    answer: 1,
    explanation:
      '拟南芥 Shaker 家族按「组织定位＋整流方向」排岗位表：KAT1/KAT2 内向守保卫细胞，气孔开放时吸纳 K⁺；AKT1 内向守根表皮管营养吸收；SKOR 外向在根中柱把 K⁺ 装入木质部；GORK 外向普遍表达、去极化后外排 K⁺ 复极助气孔关闭；AKT2 弱双向守韧皮部装卸。A 把 GORK 的方向与岗位写成 SKOR 的；C 将 AKT1 与 GORK 的岗位对调；D 忽略了外向成员（SKOR/GORK）的存在，且外排 K⁺ 并不由高亲和转运体承担。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-12',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch3',
    type: 'truefalse',
    question:
      '植物 KAT1 与动物 Kir 通道都表现内向整流，两者的机制也相同：都是胞内 Mg²⁺ 与多胺在去极化电位下阻塞孔道内口所致。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。结果相似、机制迥异：动物 Kir 的内向整流靠胞内 Mg²⁺ 与多胺在去极化电位下「塞住」孔道内口，属孔口阻塞，通道本身没有电压感受器；KAT1 则是门控本身依赖胞外 K⁺ 的结合——胞外 K⁺ 浓度降低时通道难以维持开放态，属「胞外底物依赖性门控」。这是动植物「同题两解」的演化案例：同一道内向吸钾的题，两界各备一份分子答案。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-13',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch3',
    type: 'single',
    question: '关于植物钾吸收的「双层机制」（AKT1 通道与 HAK5 转运体），下列叙述正确的是：',
    options: [
      'HAK5 组成型表达、Km 在毫摩尔级负责日常吸收；AKT1 在低钾时才被强转录诱导数十倍',
      'AKT1 的 Km 达微摩尔级，低钾胁迫下经 CBL1/9-CIPK23 磷酸化关闭以止损',
      'AKT1 为毫摩尔级低亲和、由 CBL1/9-CIPK23 钙依赖磷酸化即时激活（拨开关）；HAK5 为微摩尔级高亲和、低钾时转录诱导数十倍（换装备）',
      '土壤溶液钾浓度跨度不足十倍，单一亲和力的吸收器即可覆盖全程',
    ],
    answer: 2,
    explanation:
      '双层机制在「亲和力档位」与「调控层次」上同时互补：AKT1 是毫摩尔级低亲和通道，蛋白常驻膜上待命，低钾时根尖钙信号经 CBL1/9-CIPK23 在翻译后水平数分钟内磷酸化激活——快而经济，是「拨开关」；HAK5 的 Km 低至微摩尔级，低钾胁迫数小时内转录被强诱导数十倍——慢而彻底，是「换装备」。两者接力覆盖土壤钾近四个数量级的波动。A 把两者的亲和力与调控层次对调；B 把磷酸化的效果写成关闭；D 低估了浓度跨度——从肥沃毫摩尔到贫瘠微摩尔以下接近四个数量级而非十倍。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-14',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch3',
    type: 'multiple',
    question: '关于保卫细胞的钾循环与气孔开闭，下列叙述正确的有：',
    options: [
      '气孔开放级联：蓝光 → 向光素磷酸化质膜 H⁺-ATPase 并结合 14-3-3 → 质子外泵、膜超极化 → KAT1/KAT2 吸纳 K⁺ → 渗透势下降、吸水升膨压',
      '气孔关闭级联：ABA → OST1/SnRK2.6 激活 SLAC1 阴离子通道 → Cl⁻ 与苹果酸根外流使膜去极化 → GORK 外排 K⁺ → 膨压下降、气孔关闭',
      '开放态与关闭态之间保卫细胞的 K⁺ 浓度保持恒定，气孔开闭全靠细胞壁的弹性形变完成',
      'ABA 还促使 KAT1 经胞吞撤离质膜，从通道数量上进一步削减内向钾电流',
    ],
    answer: [0, 1, 3],
    explanation:
      'A 与 B 分别对应开、关两级联的关键次序——蓝光-向光素-质子泵-超极化-KAT1 内向流，与 ABA-OST1-SLAC1 去极化-GORK 外向流，均正确；D 也正确：ABA 双管齐下，除驱钾外流外还让 KAT1 经胞吞撤膜，从通道数量上再砍一刀内向电流。C 错误：保卫细胞恰恰靠 K⁺ 浓度的大幅涨落工作——开放态可由关闭态的约 100 mM 升至数百 mM，渗透搭档为苹果酸与 Cl⁻，膨压随渗透性吸排水升降——气孔是渗透液压机，不是靠细胞壁弹性形变开关的弹簧。',
    difficulty: 3,
  },
  {
    id: 'q-membrane-transport-15',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch3',
    type: 'single',
    question: '关于动植物钾稳态策略的对照，下列叙述正确的是：',
    options: [
      '动物体内约 98% 的钾在细胞内（内外比约 35:1），急性靠胰岛素等把钾搬入细胞缓冲、慢性靠肾远端主细胞泌钾；植物无排泄概念，靠木质部/韧皮部分配与液泡储存、老叶再动员',
      '植物缺钾症状先见于幼嫩新叶，因为钾在植物体内是不可移动元素',
      '动物的高钾餐由醛固酮兜底排泄，植物的「高钾餐」（施肥）则没有任何缓冲机制，钾稍过量即中毒死亡',
      '动植物的钾稳态都以 Na⁺/K⁺-ATPase 直接建立钾梯度为共同前提',
    ],
    answer: 0,
    explanation:
      '动物走「摄入—细胞缓冲—肾排泄」闭环：98% 的钾在胞内、内外比约 35:1，急性期靠胰岛素与 β₂ 儿茶酚胺几分钟内把钾搬入细胞，慢性期由醛固酮上调远端 ENaC/ROMK/钠泵泌钾；植物扎根不动、无排泄可言，走「吸收—储存—再动员」路线，木质部 SKOR 上行、韧皮部 AKT2 双向装卸、液泡做弹性库存。B 错——钾是高度可移动元素，缺钾先写在老叶（叶缘焦枯）；C 错——植物的钾过量由液泡库存吸收缓冲；D 错——植物以 H⁺-ATPase 超极化驱动内向通道吸收，不用 Na⁺ 泵。',
    difficulty: 3,
  },
  // ================= 第 4 章 水通道蛋白（q-membrane-transport-16 ~ 20） =================
  {
    id: 'q-membrane-transport-16',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch4',
    type: 'single',
    question: '水通道蛋白（AQP）每秒放行约 3×10⁹ 个水分子，却坚决不让质子通过。其阻断 H₃O⁺/质子的机制是：',
    options: [
      '孔道中段的 NPA 位点直接水解 ATP，把质子主动泵回胞内以维持电中性',
      'ar/R 收缩环孔径约 2.8 Å，比质子更小，质子因体积太大被物理挡在门外',
      '双重屏障：半螺旋偶极与 ar/R 精氨酸的正电势静电排斥 H₃O⁺；NPA 天冬酰胺的氢键迫使过境水分子在孔道中央翻转、打断连续氢键链，Grotthuss 跳行失去跑道',
      '水分子在孔道内全部脱去氢原子、以裸氧形式通过，质子无水可搭',
    ],
    answer: 2,
    explanation:
      '质子在水中以 Grotthuss 机制沿氢键网络接力跳行，若 AQP 是一条裸管，跨膜质子梯度（线粒体与类囊体的质子动力势、胃酸分泌、溶酶体酸化）将被瞬间放空——生物能量学不可承受。演化的答案是双重屏障：其一静电排斥——两个半螺旋的偶极把正电势精确安放在 NPA 中点，ar/R 的精氨酸再添一份正电，阳离子 H₃O⁺ 在孔中处处被推；其二取向阻断——NPA 天冬酰胺与过境水形成氢键、迫使水分子在中央翻转，连续氢键链在正中断开，质子接力失去「跑道」。A、D 无中生有；B 弄反了体积极序——质子极小，2.8 Å 挡的是带水壳的水合离子。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-17',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch4',
    type: 'single',
    question: '下列人类水通道蛋白与其主要定位/功能的配对，正确的是：',
    options: [
      'AQP1——集合管主细胞顶膜，受加压素调控的尿浓缩终端开关',
      'AQP0——脑星形胶质细胞终足，负责血脑屏障水交换与 K⁺ 空间缓冲',
      'AQP7——唾液腺与泪腺腺泡顶膜，负责外分泌的水输出',
      'AQP5——唾液腺与泪腺等腺泡顶膜，负责腺体分泌，其异常与干燥综合征相关',
    ],
    answer: 3,
    explanation:
      '人类 13 个成员按器官分工：AQP1 常驻红细胞、肾近端小管与髓襻降支，承担约 2/3 滤液水的等渗重吸收、不受加压素调节，加压素管的是 AQP2；AQP0 在晶状体纤维细胞、以低导度维持晶状体水平衡，突变致先天性白内障；AQP4 在脑星形胶质细胞终足、兼管血脑屏障水交换与 K⁺ 空间缓冲，是视神经脊髓炎的自身抗原；AQP5 在唾液腺、泪腺等分泌腺泡顶膜，干燥综合征与其表达与定位异常相关。A、B、C 分别把 AQP2、AQP4、AQP5 的岗位写给了别人。',
    difficulty: 1,
  },
  {
    id: 'q-membrane-transport-18',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch4',
    type: 'truefalse',
    question:
      '加压素（AVP）提高集合管水通透性的方式，是增大单个 AQP2 孔道的导水速率——每个孔每秒放行的水分子数可被 PKA 磷酸化成倍上调。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。单孔导水速率约 3×10⁹ 个水分子每秒，是被 ar/R 收缩环与 NPA 结构锁死的「出厂参数」，没有任何已知机制能在秒级改变单个孔的口径或速率。AVP 的实际做法是调数量：AVP → 基底侧 V2 受体 → cAMP → PKA 磷酸化 AQP2 的 Ser256 → 胞内储存囊泡向顶膜贩运插入（分钟级），膜上通道成倍增多、水导上调；信号撤除后 AQP2 经内吞回收、水导回落。「以膜上通道数量调节通透性」的教科书范式由此而来，植物对 PIP 的调控遵循同一逻辑，只是方向常相反。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-19',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch4',
    type: 'single',
    question: '关于植物 NIP 亚科水通道的「硼硅特化」，下列叙述不正确的是：',
    options: [
      '拟南芥 NIP5;1 位于根质膜吸收中性硼酸 B(OH)₃，缺硼胁迫下被强烈转录上调',
      'NIP6;1 是水稻的硅通道，专透单硅酸 Si(OH)₄，负责根部的硅吸收',
      '硅沉积于细胞壁与表皮硅化层，增强抗倒伏与抗病虫能力，硅肥的地位正来自这一条通道',
      '同一个 ar/R 关卡被演化微调，分别造出透水、透甘油、透硼酸、透硅酸的谱系',
    ],
    answer: 1,
    explanation:
      'NIP 的岗位按器官与底物精确切分：拟南芥 NIP5;1 在根吸收硼酸、缺硼时强转录上调，NIP6;1 则在幼叶负责硼从木质部向生长组织的卸载；水稻的硅通道是 Lsi1（即 OsNIP2;1），专透单硅酸 Si(OH)₄——B 把两者混为一谈。硼是细胞壁果胶 RG-II 交联的必需元素，缺硼生长点首先坏死；水稻吸硅可达地上部干重约 10% 量级，与 Lsi2 接力装入木质部。D 道出家族分化的分子原理：同一个关卡，换一组残基组合就换一份底物谱。',
    difficulty: 2,
  },
  {
    id: 'q-membrane-transport-20',
    subjectId: 'membrane-transport',
    chapterId: 'membrane-transport-ch4',
    type: 'multiple',
    question: '关于植物水通道（以 PIP 为代表）的调控方式，下列叙述正确的有：',
    options: [
      '菠菜 SoPIP2;1 以磷酸化开孔、去磷酸化关孔；干旱相关的胞质钙升高与酸化促其关闭——土壤水势低于细胞时，高水导等于漏水',
      '干旱与 ABA 信号普遍上调多数 PIP 的转录，以增强根吸水、弥补水分亏缺',
      '干旱与盐胁迫下 PIP 被泛素标记、经网格蛋白途径从质膜内吞撤回乃至送入液泡降解，质膜水导系统性下调',
      '胞质酸化使 loop D 上保守组氨酸质子化而关闭，活性氧氧化半胱氨酸残基而关闭——涝渍与伤害信号的快速水闸',
    ],
    answer: [0, 2, 3],
    explanation:
      '植物面对干旱常做「减法」：土壤水势低于细胞时，高水导意味着被动失水，关闭才是保命。A 正确——SoPIP2;1 的开关由磷酸化状态直接控制，Ser283 等位点是分子样板；C 正确——泛素化-网格蛋白胞吞-降解是系统性的撤膜下调路径；D 正确——pH 与 ROS 是翻译后水平的快速关门信号，组氨酸质子化与半胱氨酸氧化各把一道闸。B 方向反了：干旱与 ABA 普遍下调多数 PIP 的 mRNA、把质膜水导压低，而非上调——这与动物保水时上调 AQP2 恰成镜像，也正是「动物快在插膜、植物快在撤膜」的分野。',
    difficulty: 3,
  },
]
