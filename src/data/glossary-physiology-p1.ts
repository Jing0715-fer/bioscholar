// ============================================================
// 生理学术语词典 - 批次 P1（10 条，g-335 ~ g-344）
// 由内容代理 44-b1 编写，subjectId 均为 physiology
// 类别分布：稳态 2 / 调节 2 / 转运 2 / 生物电 3 / 体液 1
// 依据：Guyton & Hall 第14版、Boron & Boulpaep 第3版及本学科第 1–2 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const physiologyGlossaryP1: GlossaryTerm[] = [
  // ---------- 稳态（2 条） ----------
  {
    id: 'g-335',
    term: '稳态',
    english: 'homeostasis',
    subjectId: 'physiology',
    category: '稳态',
    definition:
      '机体经调节使内环境理化性质保持相对恒定的状态。Cannon 于 1926 年造词，词根取 homeo-（相似）而非 homo-（相同）：稳态是围绕设定点的受控波动而非静止，如核心体温 37 ℃ ±0.5 ℃、动脉血 pH 7.35–7.45；其维持以负反馈为主、前馈与正反馈为辅，稳态失败即疾病。',
  },
  {
    id: 'g-336',
    term: '内环境',
    english: 'internal environment',
    subjectId: 'physiology',
    category: '稳态',
    definition:
      'Claude Bernard 于 1857 年提出：机体细胞并不直接生活在外环境中，而是浸浴于由血浆与组织液组成的细胞外液即内环境之中，「内环境的恒定是自由、独立生命的条件」。细胞外液约占体重 20%，其中血浆约 5%、组织液约 15%；其渗透压、温度、pH 与离子组成是细胞生存须臾不可离的参数。',
  },
  // ---------- 调节（2 条） ----------
  {
    id: 'g-337',
    term: '负反馈',
    english: 'negative feedback',
    subjectId: 'physiology',
    category: '调节',
    definition:
      '受控变量的偏差本身触发反向校正的闭环控制，由感受器、传入通路、控制中枢与效应器构成。以动脉血压骤升为例：压力感受器传入增多，延髓心血管中枢重设交感-迷走平衡使血压回降。控制力度以增益衡量（gain = 校正量 ÷ 残余偏差），机体负反馈增益有限，故变量恒留残余偏差；时间滞后则可致振荡。',
  },
  {
    id: 'g-338',
    term: '前馈',
    english: 'feedforward',
    subjectId: 'physiology',
    category: '调节',
    definition:
      '在扰动尚未引起受控变量偏差之前，机体按扰动的预告信号预先调整的控制方式。两条途径：条件反射（食物的形色气味预先引发唾液与胃液分泌）与中枢预判即中央命令（运动开始前心率与通气已上调）。前馈抢在偏差发生之前起效、速度快，但无闭环兜底，预测失准时无从自动纠正，须与负反馈配合。',
  },
  // ---------- 转运（2 条） ----------
  {
    id: 'g-339',
    term: '钠钾泵',
    english: 'Na⁺/K⁺-ATPase',
    subjectId: 'physiology',
    category: '转运',
    definition:
      '即 Na⁺/K⁺-ATPase，P 型离子泵：每水解 1 分子 ATP 泵出 3 个 Na⁺、泵入 2 个 K⁺，净外移一个正电荷而具生电性；乌本苷与洋地黄类为其特异抑制剂。其建立的 Na⁺ 电化学梯度是继发性主动转运、膜电位与细胞体积维持的能量基础，静息时消耗全身约 20%–30% 的 ATP。',
  },
  {
    id: 'g-340',
    term: '继发性主动转运',
    english: 'secondary active transport',
    subjectId: 'physiology',
    category: '转运',
    definition:
      '不直接水解 ATP，而利用钠泵建立的 Na⁺ 电化学梯度驱动另一种溶质逆梯度转运的方式。同向转运如 SGLT1（2 Na⁺ 捎带 1 葡萄糖）介导小肠吸收与肾小管重吸收；反向转运如 NCX（3 Na⁺ 入换 1 Ca²⁺ 出）参与心肌钙稳态。抑制钠泵即瘫痪全部继发性转运，故名「继发性」。',
  },
  // ---------- 生物电（3 条） ----------
  {
    id: 'g-341',
    term: '静息膜电位',
    english: 'resting membrane potential',
    subjectId: 'physiology',
    category: '生物电',
    definition:
      '安静时膜内侧相对外侧的电位差，神经与骨骼肌细胞约 −70 mV。直接来源是静息时 K⁺ 通透性远高于 Na⁺（约 1:0.04），K⁺ 经漏通道外逸使电位贴近 K⁺ 平衡电位（约 −90 mV）而略偏正，可用 GHK 方程定量；钠泵 3:2 生电的直接贡献仅数毫伏，间接维持梯度才是决定性因素。',
  },
  {
    id: 'g-342',
    term: '阈电位',
    english: 'threshold potential',
    subjectId: 'physiology',
    category: '生物电',
    definition:
      '触发动作电位所需的临界膜电位，神经与骨骼肌细胞约 −55 mV，较静息电位正 10–15 mV。去极化达阈时电压门控 Na⁺ 通道开放概率骤增，Na⁺ 内流与去极化互为因果形成再生性正反馈，动作电位以全或无方式爆发；阈下刺激只引起电紧张扩布，不能远传。',
  },
  {
    id: 'g-343',
    term: '跳跃传导',
    english: 'saltatory conduction',
    subjectId: 'physiology',
    category: '生物电',
    definition:
      '有髓纤维的传导方式：髓鞘使结间跨膜电阻升高、电容降低，局部电流几乎不衰减地直达相距 1–2 mm 的下一个郎飞结，兴奋逐结跳跃前进。速度由无髓纤维的 0.5–2 m/s 提高至最粗 Aα 纤维的 70–120 m/s，且耗能大减；脱髓鞘疾病如多发性硬化即因漏电增大而致传导阻滞。',
  },
  // ---------- 体液（1 条） ----------
  {
    id: 'g-344',
    term: '渗透压',
    english: 'osmotic pressure',
    subjectId: 'physiology',
    category: '体液',
    definition:
      '阻止水经半透膜向高渗侧净移动所需的压力，属溶质依数性，只取决于不能自由过膜的颗粒数。正常细胞外液约 280–310 mOsm/kg；154 mmol/L NaCl 因解离约为 308 mOsm/L，即 0.9% 生理盐水等渗的由来；等渗不等于等张，300 mOsm 尿素液等渗却非等张，可致溶血。',
  },
]
