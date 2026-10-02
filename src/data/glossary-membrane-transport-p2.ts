// ============================================================
// 膜蛋白与物质转运术语词典 - 批次 P2（10 条，g-405 ~ g-414）
// 由内容代理 46-b2 编写，subjectId 均为 membrane-transport
// 类别分布：水通道 3 / 植物水通道 3 / 钾通道 2 / 钾转运体 1 / 植物生理 1
// 教材依据：Stein & Litton《Channels, Carriers, and Pumps》第2版 ·
// Alberts《Molecular Biology of the Cell》第7版 ·
// Taiz & Zeiger《Plant Physiology》第6版，及本学科第 3–4 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const membraneTransportGlossaryP2: GlossaryTerm[] = [
  // ---------- 水通道（3 条） ----------
  {
    id: 'g-405',
    term: '水通道蛋白',
    english: 'aquaporin',
    abbreviation: 'AQP',
    subjectId: 'membrane-transport',
    category: '水通道',
    definition:
      '专一导水的膜蛋白家族，属 MIP 超家族；1992 年 Agre 以爪蟾卵母细胞表达 CHIP28（AQP1）鉴定，2003 年获诺贝尔化学奖。每单体约 270 个氨基酸、6 次跨膜，B/E 两环的 NPA 基序折入膜中央围成沙漏形孔道，ar/R 收缩环把孔径限在约 2.8 Å 恰容单排水，导水速率约 3×10⁹ 个水分子每秒每单体，四聚体中每单体独立成孔，Pf/Pd 大于 5。人类 13 个（AQP0–12），拟南芥 35 个；细菌 AqpZ 与 GlpF 证明家族早于动植物分家。',
  },
  {
    id: 'g-406',
    term: 'AQP2',
    english: 'aquaporin-2',
    subjectId: 'membrane-transport',
    category: '水通道',
    definition:
      '肾集合管主细胞顶膜的水通道，全身水稳态的终端阀门。加压素（AVP）经基底侧 V2 受体 → cAMP → PKA 磷酸化其 Ser256，使胞内储存囊泡向顶膜贩运插入（分钟级），管腔水顺髓质高渗梯度内流；信号撤除后经内吞回收，膜上数量由插入与内吞的动态平衡决定。AQP2 基因突变或 V2 受体缺陷致遗传性肾性尿崩症，患者每日可排 10 L 以上稀释尿；锂制剂下调其表达同样致尿崩。「以膜上通道数量调节通透性」的教科书范式即以它为原型。',
  },
  {
    id: 'g-407',
    term: '水甘油通道',
    english: 'aquaglyceroporin',
    subjectId: 'membrane-transport',
    category: '水通道',
    definition:
      'AQP 家族中底物谱较宽的分支：ar/R 收缩环换入含甘氨酸的宽松组合、孔径放宽到约 3.4–3.8 Å，除水外还透甘油与尿素等小分子多元醇。人类 AQP3/7/9/10 属之——AQP3 管皮肤保湿（角质层甘油为天然保湿因子）、AQP7 管脂解释放的甘油出脂肪细胞、AQP9 于空腹让肝摄取甘油供糖异生，「脂肪出甘油、肝脏收甘油」的跨器官甘油网络由此贯通。植物对应的 NIP 分支被改造成硼酸与硅酸的营养通道，大肠杆菌 GlpF 是其古老旁证。',
  },
  // ---------- 植物水通道（3 条） ----------
  {
    id: 'g-408',
    term: 'PIP',
    english: 'plasma membrane intrinsic protein',
    subjectId: 'membrane-transport',
    category: '植物水通道',
    definition:
      '植物质膜内在蛋白，拟南芥 PIP 亚科共 13 个成员，是跨质膜水交换的主力。分 PIP1 与 PIP2 两组：多数 PIP1 单独表达导水弱、滞留内质网，需与 PIP2 异源四聚化才能上膜增效。调控样板为菠菜 SoPIP2;1——Ser283 等位点磷酸化开孔、去磷酸化使 loop D 落下封孔；干旱与盐胁迫下被泛素标记、经网格蛋白途径胞吞撤膜乃至降解，干旱与 ABA 普遍下调其转录。根系水力导度随昼夜涨落（清晨气孔开张前上调）以其表达与磷酸化状态为分子基础。',
  },
  {
    id: 'g-409',
    term: 'TIP',
    english: 'tonoplast intrinsic protein',
    subjectId: 'membrane-transport',
    category: '植物水通道',
    definition:
      '液泡膜内在蛋白，拟南芥 TIP 亚科共 10 个成员，驻守液泡膜。成熟植物细胞的液泡可占体积约 90%，是渗透势的主库与膨压蓄能器；TIP 密度极高，使液泡-胞质水交换几乎无阻力——渗透变动发生时水即刻在两区室间重新分配、膨压秒级应答，气孔运动、含羞草快速闭合与细胞伸长都依赖这条快车道。TIP2;1 兼透氨 NH₃、服务液泡氮库；若干 TIP 同源体还是液泡区室的标记蛋白，细胞生物学实验常借其定位。',
  },
  {
    id: 'g-410',
    term: 'NIP 硼硅通道',
    english: 'nodulin 26-like intrinsic protein',
    subjectId: 'membrane-transport',
    category: '植物水通道',
    definition:
      '植物 NIP 亚科（拟南芥 9 个成员）得名于大豆根瘤共生体膜上的 nodulin26，却被演化征用为类金属营养通道：拟南芥 NIP5;1 位于根质膜吸收硼酸 B(OH)₃（缺硼时转录被强烈上调）、NIP6;1 在幼叶负责硼从木质部向生长组织卸载；水稻 Lsi1（OsNIP2;1）是硅通道，专透单硅酸 Si(OH)₄，与 Lsi2 接力把硅装入木质部，吸硅可达地上部干重约 10% 量级，硅沉积强化抗倒伏与抗病虫。机理是 ar/R 收缩环残基组合的微调——换几个残基便从透水改成透硼、透硅，是分子微调改变底物命运的范例。',
  },
  // ---------- 钾通道（1 条） ----------
  {
    id: 'g-411',
    term: 'Shaker 家族',
    english: 'Shaker family',
    subjectId: 'membrane-transport',
    category: '钾通道',
    definition:
      '电压依赖钾通道家族，名出果蝇 Shaker「发抖」突变体。动物约 40 个基因（Kv1–Kv12 亚家族），每亚基 6TMS+P 环、S4 每 3 个残基一个精氨酸构成电压感受器，去极化时开放、外向 K⁺ 电流专职复极，T1 域决定亚家族特异性四聚化。植物同源体在拟南芥共 9 个成员，门控方向整体反转——KAT1/KAT2 内向守保卫细胞、AKT1 内向守根表皮、SKOR 外向装载木质部、GORK 外向复极、AKT2 双向守韧皮部，按「组织定位＋整流方向」分工，是「同源分子、反转用法」的教科书案例。',
  },
  // ---------- 钾转运体（1 条） ----------
  {
    id: 'g-412',
    term: 'HAK-KUP 钾转运体家族',
    english: 'HAK/KUP/KT family',
    subjectId: 'membrane-transport',
    category: '钾转运体',
    definition:
      '植物高亲和钾吸收的主力家族，属 TRK-HAK 超家族，拟南芥 13 个成员，跨膜螺旋十余个、走交替通路构型。旗舰 HAK5 的 Km 低至微摩尔级，低钾胁迫数小时内转录被强诱导数十倍，吸收活性随质子梯度增减、符合 K⁺/H⁺ 同向转运特征——与低亲和的 AKT1 通道（毫摩尔级、CBL1/9-CIPK23 磷酸化即时激活）构成双层吸收机制，接力覆盖土壤钾近四个数量级的波动。动物基因组无对应家族——摄食得钾以毫摩尔计、无须微摩尔抢收，这枚「分子化石」见证了生存方式对吸收装备的塑造。',
  },
  // ---------- 钾通道（1 条） ----------
  {
    id: 'g-413',
    term: 'SKOR',
    english: 'stelar K⁺ outward rectifying channel',
    subjectId: 'membrane-transport',
    category: '钾通道',
    definition:
      '拟南芥 Shaker 家族的外向整流钾通道，专职在根中柱表达，去极化门控开放时把 K⁺ 排入木质部导管——蒸腾流中的钾主要由它装船上行，是钾长距离运输的「装货码头」。缺钾或夜间蒸腾减弱时 SKOR 转录下调、装载自动减量，与冠层需求遥相呼应。它与内向的 KAT1/AKT1、双向的 AKT2 及保卫细胞外排的 GORK 合成植物钾运输岗位表：吸收、装载、卸载、排出各配专线——长距离运输的营养学，一半写在通道的岗位表上。',
  },
  // ---------- 植物生理（1 条） ----------
  {
    id: 'g-414',
    term: '保卫细胞 K⁺ 循环',
    english: 'guard cell K⁺ cycle',
    subjectId: 'membrane-transport',
    category: '植物生理',
    definition:
      '气孔开闭的渗透机械：开放态保卫细胞的 K⁺ 浓度可由关闭态的约 100 mM 升至数百 mM，渗透搭档为苹果酸与 Cl⁻。开放级联：蓝光 → 向光素 → H⁺-ATPase 磷酸化并结合 14-3-3 → 膜超极化 → KAT1/KAT2 吸钾 → 渗透吸水升膨压；关闭级联：ABA → OST1/SnRK2.6 → SLAC1 阴离子外流去极化 → GORK 外排 K⁺，同时 KAT1 经胞吞撤膜。每日一循环的气孔是植物最大的钾日常消耗户，钾通道、阴离子通道、质子泵与水通道在此同台演出。',
  },
]
