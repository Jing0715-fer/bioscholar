// ============================================================
// 生理学术语词典 - 批次 P5（10 条，g-375 ~ g-384）
// 覆盖第 9–10 章：呼吸 6 / 消化 2 / 能量代谢 1 / 体温 1
// 依据：Guyton & Hall 第14版、Boron & Boulpaep 第3版及第 9–10 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const physiologyGlossaryP5: GlossaryTerm[] = [
  // ---------- 呼吸（6 条） ----------
  {
    id: 'g-375',
    term: '肺顺应性',
    english: 'lung compliance',
    abbreviation: 'CL',
    subjectId: 'physiology',
    category: '呼吸',
    definition:
      '单位跨肺压变化所引起的肺容积变化（ΔV/ΔP），正常成人肺约 200 ml/cmH₂O，肺与胸廓联合约 110 ml/cmH₂O，是肺「易扩张性」的定量指标。肺弹性回缩约 2/3 来自气-液界面表面张力；肺纤维化时顺应性下降、肺气肿时反升，按功能残气量归一的比顺应性用于跨个体比较。',
  },
  {
    id: 'g-376',
    term: '肺表面活性物质',
    english: 'pulmonary surfactant',
    subjectId: 'physiology',
    category: '呼吸',
    definition:
      'II 型肺泡上皮细胞分泌的磷脂-蛋白混合物，主活性成分为二棕榈酰磷脂酰胆碱（DPPC），铺展于肺泡内壁把表面张力压低近一个数量级。按 Laplace 定律的逆向逻辑稳定大小肺泡、防止呼气末肺不张并维持功能残气量；早产儿缺乏致新生儿呼吸窘迫综合征，产前糖皮质激素与外源性替代是标准治疗。',
  },
  {
    id: 'g-377',
    term: '肺泡通气量',
    english: 'alveolar ventilation',
    abbreviation: 'VA',
    subjectId: 'physiology',
    category: '呼吸',
    definition:
      '每分钟真正到达换气单位的有效通气量，VA=(TV−VD)×f。解剖死腔约 150 ml 不参与换气，浅快呼吸使死腔比例上升而有效通气锐减；肺泡死腔（如肺栓塞区）扩充为生理死腔，可用 Bohr 方程量化。正常约 4.2 L/min（潮气量 500 ml、12 次/分），是决定肺泡气 PO₂ 与 PCO₂ 的通气变量。',
  },
  {
    id: 'g-378',
    term: '通气/血流比',
    english: 'ventilation-perfusion ratio',
    abbreviation: 'V/Q',
    subjectId: 'physiology',
    category: '呼吸',
    definition:
      '肺泡通气量与肺血流量之比，理想值约 0.8（肺泡通气 4 L/min 对肺血流 5 L/min）。V/Q 趋于无穷为死腔样效应（肺栓塞），趋于零为分流样效应（肺不张），失调是低氧血症最常见的机制并使肺泡-动脉梯度扩大；直立位肺尖高、肺底低的梯度由重力塑造。',
  },
  {
    id: 'g-379',
    term: '波尔效应',
    english: 'Bohr effect',
    subjectId: 'physiology',
    category: '呼吸',
    definition:
      'H⁺ 与 CO₂ 升高使血红蛋白氧亲和力下降（P50 增大、氧解离曲线右移）的现象，由 Christian Bohr 于 1904 年首先报告。运动组织局部的酸、热与 CO₂ 就地促进卸氧，实现「按需投递」；其镜像为何尔登效应——氧合促进 CO₂ 卸载，二者同为血红蛋白别构偶联的两面。',
  },
  {
    id: 'g-380',
    term: '陈施呼吸',
    english: 'Cheyne-Stokes respiration',
    subjectId: 'physiology',
    category: '呼吸',
    definition:
      '呼吸幅度周期性由浅渐深、再由深渐浅并间以呼吸暂停的异常模式，见于心力衰竭与脑损伤。控制论机制为「循环延迟+增益过高」：肺到脑的运输时间延长使化学感受器读取过期信号、控制器过度纠正，负反馈环路失稳而振荡；治疗心衰以缩短循环延迟、降低环路增益可使之缓解。',
  },
  // ---------- 消化（2 条） ----------
  {
    id: 'g-381',
    term: '肠神经系统',
    english: 'enteric nervous system',
    abbreviation: 'ENS',
    subjectId: 'physiology',
    category: '消化',
    definition:
      '消化道壁内约一亿神经元组成的神经网络，含肌间与黏膜下两套神经丛，递质谱庞大而有「第二大脑」之称。它收纳完整的局部反射弧，在去除外来神经后仍能独立驱动蠕动与分泌（Bayliss 与 Starling 的肠道定律）；外来神经与胃肠激素在更高层级调度其执行，神经节缺失则导致先天性巨结肠病。',
  },
  {
    id: 'g-382',
    term: '移行性复合运动',
    english: 'migrating motor complex',
    abbreviation: 'MMC',
    subjectId: 'physiology',
    category: '消化',
    definition:
      '禁食期每 90–120 min 自胃向回盲部推进的周期性运动波，III 相高幅规律收缩充当「管家」，清扫未消化残渣、脱落上皮与细菌、防止小肠细菌过度生长。由胃动素的周期性血浓度峰启动（红霉素为其受体激动剂），进食后立即被进食型运动取代。',
  },
  // ---------- 能量代谢（1 条） ----------
  {
    id: 'g-383',
    term: '呼吸商',
    english: 'respiratory quotient',
    abbreviation: 'RQ',
    subjectId: 'physiology',
    category: '能量代谢',
    definition:
      '同一时间内 CO₂ 产生量与 O₂ 消耗量之比（VCO₂/VO₂），是氧化底物的化学签名：糖 1.00、脂肪约 0.70、蛋白约 0.80，混合膳食约 0.85。过度通气与代谢性酸中毒呼出储备 CO₂ 造成「假性 RQ 升高」，解读时须先剔除呼吸成分；与氧热价联用可由气体交换推算产热，是间接测热的基础。',
  },
  // ---------- 体温（1 条） ----------
  {
    id: 'g-384',
    term: '体温调定点',
    english: 'thermoregulatory set point',
    subjectId: 'physiology',
    category: '体温',
    definition:
      '视前区-下丘脑前部温度敏感网络内置的参考温度（约 37 ℃），实际温度与之的误差驱动寒战、血管运动、发汗与行为等效应器。发热时 PGE₂ 使调定点上移而体温被动跟随；运动与中暑时调定点不动、体温因产热散热失衡而升高——药物降点与物理降温两种处置方向的分野即在于此。',
  },
]
