// ============================================================
// BioScholar 膜蛋白与物质转运术语词典 - 批次 P6（10 条，g-445 ~ g-454）
// 由内容代理 46-b6 编写，subjectId 均为 membrane-transport
// 类别分布：上皮转运 2 / 植物转运 4 / 转运疾病 2 / 植物免疫 1 / 演化 1
// 教材依据 Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 · Taiz & Zeiger《Plant Physiology》第6版
// 及本学科第 11–12 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const membraneTransportGlossaryP6: GlossaryTerm[] = [
  // ---------- 上皮转运（2 条） ----------
  {
    id: 'g-445',
    term: '紧密连接',
    english: 'tight junction',
    subjectId: 'membrane-transport',
    category: '上皮转运',
    definition:
      '相邻上皮细胞顶端侧面由 20 余种 claudin（四次跨膜，或成孔或成屏障）、occludin 与 ZO 支架蛋白组装的环状闭锁带，兼具双重身份：既把顶端与基侧两套膜蛋白圈死在各自领地以维持极性（分子篱笆），又作为细胞旁通路的选择性滤器决定离子经细胞间隙的通透性。claudin-2 构成阳离子孔使近端小管成为泄漏上皮；claudin-16/19 介导肾髓西 Mg²⁺ 细胞旁重吸收，其突变致家族性低镁血症。',
  },
  {
    id: 'g-446',
    term: '口服补液盐',
    english: 'oral rehydration salts',
    subjectId: 'membrane-transport',
    category: '上皮转运',
    definition:
      '利用 SGLT1 钠-葡萄糖同向耦联吸收原理救治分泌性腹泻的糖盐水配方。霍乱毒素经 Gsα-cAMP-PKA 开放 CFTR 使 Cl⁻ 大量分泌、钠水倾泻，但 SGLT1 不归 cAMP 管辖，葡萄糖存在时 Na⁺ 照常吸收、水随渗透梯度回收。WHO 低渗配方约 245 mOsm/L（钠与葡萄糖各约 75 mmol/L）将霍乱病死率从两三成压至 1% 以下，被《柳叶刀》誉为 20 世纪最重要的医学进步之一，累计挽救生命以千万计。',
  },
  // ---------- 植物转运（4 条） ----------
  {
    id: 'g-447',
    term: '保卫细胞',
    english: 'guard cell',
    subjectId: 'membrane-transport',
    category: '植物转运',
    definition:
      '一对围成气孔的特化表皮细胞，被称「植物的单细胞肾」。开放：蓝光经 phot1/2 感光，H⁺-ATPase Thr 磷酸化并结合 14-3-3 蛋白而活化，膜超极化至约 −100 mV 以负，KAT1/KAT2 摄入 K⁺、PEPC 合成苹果酸，渗透吸水膨压上升；关闭：ABA 经 PYR/PYL/RCAR 受体释放 OST1/SnRK2.6，磷酸化 SLAC1 使 Cl⁻ 与苹果酸外流去极化，GORK 排 K⁺。开闭之间膨压可相差约 1–2 MPa，胞内 K⁺ 浓度在百毫摩尔量级摆动。',
  },
  {
    id: 'g-448',
    term: '蒸腾比',
    english: 'transpiration ratio',
    subjectId: 'membrane-transport',
    category: '植物转运',
    definition:
      '植物每同化 1 mol CO₂ 所蒸腾损失的水量（mol H₂O/mol CO₂）。C₃ 植物约 400–800，C₄ 植物约 250–350：气孔导度同时对水汽逸出与 CO₂ 进入开放，蒸腾比量化这一「工程折衷」的固有代价。蒸腾兼有驱动木质部上行水流与叶面降温之功，但缺水时成为生死账本；干旱、高 CO₂ 与 ABA 信号均推动气孔部分关闭以改善水碳权衡。',
  },
  {
    id: 'g-449',
    term: 'SOS 通路',
    english: 'salt overly sensitive pathway',
    subjectId: 'membrane-transport',
    category: '植物转运',
    definition:
      '植物耐盐的核心信号级联：Na⁺ 经非选择性阳离子通道内流并触发胞质 Ca²⁺ 波，钙感受器 SOS3（CBL4）结合 Ca²⁺ 后招募激酶 SOS2（CIPK24），复合体磷酸化质膜 Na⁺/H⁺ 反向转运体 SOS1 使其外排 Na⁺——耐盐第一道防线；配套 NHX1 液泡 Na⁺/H⁺ 隔离（以盐代钾）与 HKT1;1 从木质部液回收 Na⁺（水稻 SKC1 即 OsHKT1;5，经典耐盐 QTL）。拟南芥 sos1/sos2/sos3 突变体均表现盐超敏表型，是该通路的遗传学定义。',
  },
  {
    id: 'g-450',
    term: '凯氏带',
    english: 'Casparian strip',
    subjectId: 'membrane-transport',
    category: '植物转运',
    definition:
      '根内皮层细胞径向与横向壁上无间断的疏水环带，由木栓质等聚合物沉积而成；CASP（Casparian strip membrane domain protein）家族蛋白先在质膜带状区聚集、清除带区转运体，再引导木质素与木栓质均一组装。功能上封堵质外体的水流与离子流，强制溶质改走内皮层细胞的穿细胞路线、接受其质膜选择性转运体查验——与动物紧密连接「屏障+滤器」双重身份异曲同工，故称「植物版紧密连接」，属功能趋同而非同源。',
  },
  // ---------- 转运疾病（2 条） ----------
  {
    id: 'g-451',
    term: '囊性纤维化',
    english: 'cystic fibrosis',
    subjectId: 'membrane-transport',
    category: '转运疾病',
    definition:
      'CFTR（ABC 超家族 cAMP 门控 Cl⁻ 通道）功能丧失所致常染色体隐性病，北欧裔携带率约 1/25、发病率约 1/2500。ΔF508（约占全球等位基因 70%）为 II 类折叠缺陷，G551D 为 III 类门控缺陷；表现为气道黏液脱水感染、胰腺功能不全，汗液 Cl⁻ >60 mmol/L 为经典诊断线。治疗进入基因型对症用药时代：伊瓦卡托纠正 G551D 门控，elexacaftor/tezacaftor/ivacaftor 三联（Trikafta，2019）使多数 ΔF508 患者肺功能提升约 10%–14%。',
  },
  {
    id: 'g-452',
    term: '长 QT 综合征',
    english: 'long QT syndrome',
    subjectId: 'membrane-transport',
    category: '转运疾病',
    definition:
      '心肌复极离子电流失衡所致 QT 延长与尖端扭转型室速综合征。先天型三大家族：LQT1-KCNQ1（IKs，运动诱发）、LQT2-hERG/KCNH2（IKr，听觉刺激诱发）、LQT3-SCN5A（晚钠电流增大）；获得性长 QT 多因药物阻断 hERG/IKr——西沙必利、特非那定因此撤市，hERG 筛查成为新药开发法定环节。β 受体阻滞剂为 LQT1 一线治疗，美西廷针对 LQT3 晚钠电流对症。',
  },
  // ---------- 植物免疫（1 条） ----------
  {
    id: 'g-453',
    term: '抗病小体',
    english: 'resistosome',
    subjectId: 'membrane-transport',
    category: '植物免疫',
    definition:
      '植物胞内 NLR 免疫受体识别病原效应子后组装的五聚体轮状执行机器。以 ZAR1 为例：效应子 AvrAC 尿苷酰化的 PBL2 与 RKS1 结合，诱导 ADP 结合态 ZAR1 发生核苷酸置换并寡聚为五聚体，漏斗状 N 端螺旋束插入质膜形成 Ca²⁺ 渗透孔道，钙内流触发超敏反应式程序性细胞死亡，把病原封死在坏死斑内。2019 年冷冻电镜解析其结构，首次证明 NLR 受体可自身成孔行使通道功能，「免疫受体即通道」由此成为范式。',
  },
  // ---------- 演化（1 条） ----------
  {
    id: 'g-454',
    term: 'F/V-ATPase 旋转马达',
    english: 'rotary motor ATPase',
    subjectId: 'membrane-transport',
    category: '演化',
    definition:
      '转运蛋白中最古老的旋转马达家族，在 LUCA（最后普遍共同祖先）阶段即已分化为「同源反向使用」的两支：F 型 ATP 合酶利用跨膜 H⁺ 梯度合成 ATP，V 型 ATPase 水解 ATP 把 H⁺ 泵出以酸化区室——同一套定子-转子-催化头架构、能量流向相反，细菌、古菌、真核三域通吃。植物液泡另叠加 V-PPase 以焦磷酸供能构成双引擎；动物 V 型则驱动溶酶体酸化、破骨细胞溶骨与肾闰细胞泌氢，是全书跨域保守性的第一例证。',
  },
]
