// ============================================================
// BioScholar 神经生物学术语词条 - 批次 C3（第 11–12 章配套）
// 5 条：g-198 ~ g-202，subjectId 为 neurobiology
// 依据：寿天德《神经生物学》（第3版）与 Kandel《Principles of Neural Science》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：neurobiology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const NEUROBIOLOGY = 'neurobiology' as unknown as GlossaryTerm['subjectId']

export const neuroGlossaryC3: GlossaryTerm[] = [
  {
    id: 'g-198',
    term: '肠神经系统',
    english: 'Enteric Nervous System',
    abbreviation: 'ENS',
    subjectId: NEUROBIOLOGY,
    category: '解剖',
    definition:
      '埋于食管至肛管消化管壁内的神经元网络，含约一亿个神经元，与脊髓同一数量级，由肠肌间神经丛（Auerbach 丛，司运动）与黏膜下神经丛（Meissner 丛，司分泌与血流）组成，故被称作「第二脑」。ENS 可在完全离断与中枢联系后独立完成蠕动反射、局部抑制与分泌调节，递质极为多样（乙酰胆碱、NO、VIP、5-HT 与多种神经肽）；交感与副交感仅对其施加调制。迷走神经约八成为传入纤维，构成自下而上的肠—脑轴，与饱感、摄食及情绪状态相关，帕金森病 α-突触核蛋白自肠道上行的假说亦以此为通道。',
  },
  {
    id: 'g-199',
    term: '下丘脑-垂体-肾上腺轴',
    english: 'Hypothalamic-Pituitary-Adrenal Axis',
    abbreviation: 'HPA',
    subjectId: NEUROBIOLOGY,
    category: '内分泌',
    definition:
      '应激反应的核心内分泌轴：下丘脑室旁核小细胞神经元分泌 CRH 经垂体门脉作用于腺垂体，促其从阿黑皮素原切出并释放 ACTH；ACTH 到达肾上腺皮质束状带，促进胆固醇向皮质醇的合成与分泌，级联逐级放大，把神经活动转译为半衰期约 60–90 分钟的全身激素信号。皮质醇经长环负反馈抑制垂体与下丘脑，海马富集的糖皮质激素受体是反馈的高位站点。急性应激的皮质醇动员代谢并短暂增强免疫，慢性应激则致海马树突萎缩、免疫抑制、抑郁与代谢综合征，其分期框架源自 Selye 的通用适应综合征。',
  },
  {
    id: 'g-200',
    term: '视交叉上核',
    english: 'Suprachiasmatic Nucleus',
    abbreviation: 'SCN',
    subjectId: NEUROBIOLOGY,
    category: '生理',
    definition:
      '位于下丘脑视交叉上方的哺乳动物昼夜节律主钟，每侧约一万个、双侧合计约两万个神经元，经紧密突触与化学耦合（VIP）同步放电而昼高夜低。含黑视蛋白的视网膜内在光敏神经节细胞经视网膜下丘脑束提供光相位信号，为内源节律「对时」；SCN 经室旁核—脊髓—颈上神经节的多突触通路控制松果体褪黑素的暗期合成，褪黑素又经 MT1/MT2 受体反馈于 SCN。其节律源于 per 与 cry 等时钟基因的转录—翻译负反馈环路（约 24 小时），SCN 损毁致节律消失、移植供体 SCN 可恢复，外周组织钟由其统一指挥；失明者缺乏光对时可呈非 24 小时睡眠—觉醒障碍。',
  },
  {
    id: 'g-201',
    term: '淀粉样级联假说',
    english: 'Amyloid Cascade Hypothesis',
    subjectId: NEUROBIOLOGY,
    category: '病理',
    definition:
      '解释阿尔茨海默病发病层级的主流假说：淀粉样前体蛋白 APP 经 β 与 γ 分泌酶顺序切割产生的 Aβ（尤以更易聚集的 Aβ42）在脑内过量产生或清除不足，其寡聚与沉积作为上游事件，触发 tau 蛋白过度磷酸化、神经原纤维缠结形成、突触丢失与神经元死亡，最终表现为认知衰退。家族性 AD 的 APP 与早老素 PS1/PS2 突变均提高 Aβ42 比例而早发、APOE4 因妨碍 Aβ 清除而成为散发性最强风险等位基因，皆为该假说的遗传学支柱；但单纯清除成熟斑块的抗体屡试屡败，近年靶向 Aβ 原纤维并于轻度期用药显示延缓病程，修正为「时间窗」版本的级联观。',
  },
  {
    id: 'g-202',
    term: 'Wallerian 变性',
    english: 'Wallerian Degeneration',
    subjectId: NEUROBIOLOGY,
    category: '病理',
    definition:
      '由 Waller 于 1850 年描述的周围神经损伤后远侧断段变化：与胞体离断的轴突碎裂、髓鞘崩解，去分化的施万细胞协同巨噬细胞清运碎片；施万细胞随后沿保留的基底膜管排列成 Büngner 带，重新表达黏附分子并分泌神经营养因子，为近侧断端芽生的轴突（每日约 1–3 mm）提供再生轨道。再生质量取决于距离与失神经时限，错向支配可致联带运动（如面神经修复后）。中枢亦发生类似变性但伴随瘢痕与髓鞘抑制而难于再生；Wld 突变小鼠的迟缓变性提示轴突退变本身是可干预的主动程序。',
  },
]
