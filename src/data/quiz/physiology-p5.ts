// ============================================================
// 生理学测验题库 - 批次 P5（第 9–10 章）
// 10 题（q-physiology-41 ~ q-physiology-50），每章 5 题
// 题型：single 7 / truefalse 2 / multiple 1；难度：1×2 / 2×5 / 3×3
// 依据：Guyton & Hall 第14版、Boron & Boulpaep 第3版及第 9–10 章教材正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const physiologyQuizP5: QuizQuestion[] = [
  // ================= 第 9 章 呼吸生理（q-physiology-41 ~ 45） =================
  {
    id: 'q-physiology-41',
    subjectId: 'physiology',
    chapterId: 'physiology-ch9',
    type: 'single',
    question: '向离体肺内交替充气与放气并记录压力-容积关系，下列判断正确的是：',
    options: [
      '充气与放气曲线完全重合，因为肺是被动弹性体',
      '用生理盐水充盈肺以消除气-液界面后，滞后环反而更显著，说明弹性纤维是回缩力的唯一来源',
      '同一跨肺压下放气支的肺容积较大，改用生理盐水充盈后滞后环几乎消失——提示约 2/3 的肺弹性回缩力来自气-液界面表面张力',
      '滞后环完全由气道阻力产生，与肺泡表面张力无关',
    ],
    answer: 2,
    explanation:
      'von Neergaard 1929 年的经典对照显示：盐水充盈消除气-液界面后，充气所需压力大幅下降、滞后环几乎消失，据此把肺弹性回缩力拆解为表面张力约 2/3 与弹性纤维约 1/3。A 忽略滞后现象；B 描述与事实相反；D 混淆了阻力（流量依赖）与静态弹性回缩（容积依赖）两类性质不同的机械负担。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-42',
    subjectId: 'physiology',
    chapterId: 'physiology-ch9',
    type: 'single',
    question:
      '甲、乙二人分钟通气量均为 6 L/min：甲潮气量 500 ml、频率 12 次/分，乙潮气量 250 ml、频率 24 次/分。设解剖死腔均为 150 ml，两人肺泡通气量分别约为：',
    options: [
      '均为 4.2 L/min，因为分钟通气量相同',
      '甲约 4.2 L/min，乙约 2.4 L/min',
      '甲约 3.6 L/min，乙约 4.8 L/min',
      '甲约 5.4 L/min，乙约 4.2 L/min',
    ],
    answer: 1,
    explanation:
      '肺泡通气量 VA=(TV−VD)×f：甲为 (500−150)×12=4200 ml/min；乙为 (250−150)×24=2400 ml/min。浅快呼吸的死腔通气比例从 30% 升至 60%，同样 6 L/min 的分钟通气量下有效通气近乎腰斩——分钟通气量「虚报业绩」，肺泡通气量才是换气的真实变量。这也解释了为何需增加通气时机体选择加深而非单纯加快呼吸，以及机械通气设置须警惕过快频率的死腔陷阱。',
    difficulty: 1,
  },
  {
    id: 'q-physiology-43',
    subjectId: 'physiology',
    chapterId: 'physiology-ch9',
    type: 'truefalse',
    question:
      '呼吸膜增厚或面积缩小时，动脉低氧血症的出现通常早于 CO₂ 潴留；这是因为 CO₂ 的扩散能力约为 O₂ 的 20 倍，且低氧经外周化学感受器刺激通气，进一步促进 CO₂ 排出。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。按 Fick 定律，CO₂ 溶解度远高于 O₂（分子量仅小幅拖累），扩散能力约 20 倍，故膜病变时 O₂ 先「输」；同时低氧经颈动脉体反射性提升通气，把 CO₂ 一并多呼出去。CO₂ 潴留要到病变晚期、通气失代偿时才出现——这是间质性肺病血气演进的经典次序。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-44',
    subjectId: 'physiology',
    chapterId: 'physiology-ch9',
    type: 'single',
    question:
      '燃气热水器事故患者皮肤呈樱桃红色、意识模糊，常规脉搏血氧仪读数正常。关于其病理生理与处置，正确的是：',
    options: [
      'CO 与 Hb 亲和力仅约为 O₂ 的数倍，主要危害是降低动脉血 PO₂，故血气分析 PaO₂ 显著下降',
      '残存血红蛋白的氧解离曲线右移，组织卸氧代偿增强，稍事休息即可好转',
      '治疗首选静脉注射亚甲蓝，以形成高铁血红蛋白竞争性清除 CO',
      '常规两波长脉搏血氧仪不能区分碳氧血红蛋白与氧合血红蛋白，读数假性正常；治疗应脱离接触并给予高浓度乃至高压氧',
    ],
    answer: 3,
    explanation:
      'CO 亲和力约为 O₂ 的 200–250 倍，占据位点的同时使剩余曲线左移（组织卸氧更难），而溶解相 PaO₂ 不变——故血氧仪读数与发绀皆不可靠，诊断凭碳氧血红蛋白测定。亚甲蓝用于氰化物与高铁血红蛋白血症，此处答非所问；高压氧以极高 PO₂ 把 CO 从位点竞争中挤出。',
    difficulty: 3,
  },
  {
    id: 'q-physiology-45',
    subjectId: 'physiology',
    chapterId: 'physiology-ch9',
    type: 'multiple',
    question: '关于呼吸的化学感受性调节，下列叙述正确的有：',
    options: [
      '中枢化学感受器位于延髓腹外侧，真正刺激物是脑脊液与脑组织液中的 H⁺，CO₂ 经「弥散-水合」间接起效',
      '颈动脉体 I 型细胞在 PaO₂ 低于约 60 mmHg 后放电陡增，且对贫血、CO 中毒时的血氧含量下降并不报警',
      '慢性 CO₂ 潴留患者经 CSF 的 HCO₃⁻ 代偿后中枢驱动钝化，低 O₂ 转为重要通气驱动，故吸氧宜控制浓度',
      '平静呼吸时动脉 PO₂ 是最主要的通气驱动来源，CO₂ 只有明显超出正常范围后才参与调节',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项分别对应中枢感受器的 H⁺ 配体属性、外周感受器感知 PO₂ 而非含量的细节、慢性呼吸衰竭的驱动重塑与控制性氧疗依据，均正确。D 颠倒主次：平静呼吸的通气几乎完全由 PaCO₂（经中枢 H⁺）设定，PaO₂ 在 60 mmHg 以上时对通气的贡献可忽略。',
    difficulty: 3,
  },
  // ================= 第 10 章 消化、吸收与能量代谢（q-physiology-46 ~ 50） =================
  {
    id: 'q-physiology-46',
    subjectId: 'physiology',
    chapterId: 'physiology-ch10',
    type: 'single',
    question: '关于胃酸分泌的调节，下列配对错误的是：',
    options: [
      '生长抑素——壁细胞促胰液素受体',
      '迷走神经末梢乙酰胆碱——壁细胞 M3 受体',
      '胃泌素——壁细胞 CCK-B 受体',
      'ECL 细胞组胺——壁细胞 H₂ 受体',
    ],
    answer: 0,
    explanation:
      '壁细胞受三条通路驱动：ACh-M3（Ca²⁺）、胃泌素-CCKB（Ca²⁺）、组胺-H₂（cAMP 放大器），B/C/D 均正确。生长抑素由 D 细胞分泌，经旁分泌作用于自身的生长抑素受体，广泛抑制胃泌素释放与泌酸，并不存在「促胰液素受体」；促胰液素的靶在胰腺导管与胆道。',
    difficulty: 1,
  },
  {
    id: 'q-physiology-47',
    subjectId: 'physiology',
    chapterId: 'physiology-ch10',
    type: 'single',
    question: '下列物质与其主要吸收部位的配对，错误的是：',
    options: [
      '维生素 B₁₂——回肠末端',
      '铁——十二指肠',
      '胆盐——结肠',
      '钙——十二指肠与空肠的主动转运段',
    ],
    answer: 2,
    explanation:
      '胆盐在回肠末端经 ASBT 主动重吸收入门静脉，完成约 94% 回收的肠肝循环；结肠仅回收水与电解质。B₁₂ 以内因子复合物形式在回肠末端经 cubam 受体吸收；铁在十二指肠的酸性环境中以 Fe²⁺ 溶解吸收；钙在十二指肠与空肠主动吸收并受 1,25-(OH)₂-D₃ 上调。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-48',
    subjectId: 'physiology',
    chapterId: 'physiology-ch10',
    type: 'single',
    question:
      '禁食一夜的受试者安静状态测得呼吸商约 0.78；随后自主性过度通气 2 分钟，呼吸商升至 1.15。对两次读数的最佳解释是：',
    options: [
      '禁食值提示糖氧化为主；过度通气值提示底物在两分钟内完全切换为纯糖氧化',
      '禁食值提示脂肪供能为主；过度通气后的读数是「假性 RQ」——储备 CO₂ 被呼出，与底物比例无关',
      '两次读数均无意义，呼吸商只有在运动状态下才有参考价值',
      '过度通气使 O₂ 消耗骤增而 CO₂ 产生不变，故呼吸商升高',
    ],
    answer: 1,
    explanation:
      '禁食后脂氧化主导，RQ 向 0.70–0.80 靠拢；过度通气呼出的 CO₂ 来自储备碱（不伴氧化增加），代谢性酸中毒的缓冲 CO₂ 同理——此时 RQ 是气体交换比而非底物指纹。D 因果颠倒：过度通气抬高的恰是 VCO₂，VO₂ 并未骤增。底物切换不可能在两分钟内完成。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-49',
    subjectId: 'physiology',
    chapterId: 'physiology-ch10',
    type: 'truefalse',
    question:
      '发热与中暑的核心温度均可超过 40 ℃，且两者都是体温调定点上移的结果，因此首选解热镇痛药退热、辅以保温发汗，是两类情况的共同处置原则。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。只有发热是 PGE₂ 上调调定点（解热镇痛药抑制 COX 降设定点有效）；中暑是散热通道衰竭导致的「过热」，设定点未动，处置须积极物理降温，退热药无位可插足。把「保温发汗」用于中暑更是致命反向操作；而发热寒战期强力物理降温会激化寒战产热——两类高热的床旁鉴别与处置方向截然相反。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-50',
    subjectId: 'physiology',
    chapterId: 'physiology-ch10',
    type: 'single',
    question:
      '因胃癌行全胃切除的患者术后 3 年逐渐出现巨幼细胞贫血，血清维生素 B₁₂ 显著降低而叶酸正常、铁代谢指标大致正常。其机制链条最可能是：',
    options: [
      '壁细胞随全胃切除而消失，内因子不再分泌，B₁₂ 无法在回肠末端被吸收；肝内 B₁₂ 储备耗竭后贫血方才显现',
      '胃酸缺失使食物铁无法转变为可吸收的 Fe²⁺，导致缺铁性小细胞贫血',
      '迷走-迷走反射被切断，回肠黏膜的吸收功能整体废用',
      '胃蛋白酶原缺乏使蛋白质消化障碍，造血所需氨基酸供应不足',
    ],
    answer: 0,
    explanation:
      '内因子由壁细胞分泌，与 B₁₂ 结合成复合物后经回肠末端 cubam 受体吸收，是 B₁₂ 入血的唯一通路；肝内储备可供数年，解释了贫血的延迟出现（Castle 实验的内在因子证据链）。B 与题干巨幼细胞形态矛盾；迷走切断与胃蛋白酶原减少均不导致孤立性 B₁₂ 缺乏。',
    difficulty: 3,
  },
]
