// ============================================================
// 生理学术语词典 - 批次 P4（10 条，g-365 ~ g-374）
// 由内容代理 44-b4 编写，subjectId 均为 physiology
// 类别分布：电生理 2 / 心血管 3 / 循环调节 4 / 器官循环 1
// 依据：Guyton & Hall 第14版、Boron & Boulpaep 第3版及本学科第 7–8 章教材正文
// ============================================================
import type { GlossaryTerm } from '@/lib/types'

export const physiologyGlossaryP4: GlossaryTerm[] = [
  {
    id: 'g-365',
    term: '窦房结',
    english: 'sinoatrial node',
    subjectId: 'physiology',
    category: '电生理',
    definition:
      '心脏的优势起搏点，位于上腔静脉入右心房处的界沟内，由具自律性的 P 细胞组成，固有频率 60–100 次/分。其 4 期自动去极化由延迟整流 K⁺ 电流（IK）进行性衰减与超极化激活的 If 电流增强共同驱动；凭超速驱动压抑统治下位起搏点（房室交界区 40–60、浦肯野系统 15–40 次/分），故正常心律为窦性心律。交感经 β₁ 受体加速、迷走经 M₂ 受体减慢其放电，分别对应心率的升降。',
  },
  {
    id: 'g-366',
    term: 'QRS 波群',
    english: 'QRS complex',
    subjectId: 'physiology',
    category: '电生理',
    definition:
      '心电图中代表两侧心室去极化的综合波群，正常时限 0.06–0.10 s。激动经希氏束、束支与浦肯野纤维网高速下传（3–4 m/s），双室近于同步收缩。QRS 增宽见于室内传导阻滞、心室预激或室性异位搏动，电压增高提示心室肥厚；QRS 之后数十毫秒心室压才开始上升（电-机械耦联延迟），故第一心音落在 QRS 之后，而 PR 间期（0.12–0.20 s）量度房室传导的完整性。',
  },
  {
    id: 'g-367',
    term: '射血分数',
    english: 'ejection fraction',
    abbreviation: 'EF',
    subjectId: 'physiology',
    category: '心血管',
    definition:
      '每搏输出量占心室舒张末容积的百分比：EF = (EDV − ESV)/EDV，正常约 55%–70%。以 EDV 约 125 ml、ESV 约 55 ml 计，每搏量约 70 ml、EF 约 56%。作为比值指标，它消除了身材与心腔容积的个体差异，是临床评价左室收缩功能的首选参数，EF ≤40% 提示收缩性心功能不全；解读时须结合前负荷、后负荷与收缩性，血流动力学剧烈变动时会失真。',
  },
  {
    id: 'g-368',
    term: 'Frank-Starling 定律',
    english: 'Frank-Starling law',
    subjectId: 'physiology',
    category: '心血管',
    definition:
      '又称「心的定律」：心室舒张末容积增大、心肌初长度增加，下一次收缩的搏出量随之增加。Frank（1895，离体蛙心）与 Starling（1914，犬心肺制备）先后确立。机制为肌节在 2.0–2.2 μm 处粗细肌丝最佳重叠，以及牵张提高肌钙蛋白对 Ca²⁺ 亲和力的长度依赖性钙敏。整体中它使心脏自动匹配静脉回流的波动（异长自身调节），并以心功能曲线与静脉回流曲线的交点构成循环平衡点，是体位与容量变动时的第一道防线。',
  },
  {
    id: 'g-369',
    term: 'Poiseuille 定律',
    english: 'Poiseuille law',
    subjectId: 'physiology',
    category: '心血管',
    definition:
      '层流条件下的管流定律：Q = ΔP·πr⁴/(8ηL)；阻力形式 R = 8ηL/(πr⁴) 揭示半径的四次方统治阻力——半径减半阻力增至 16 倍，舒张不足两成阻力即减半。据此，体循环总外周阻力主要落在小动脉与微动脉，血管口径的神经体液调节皆以此为杠杆；各器官血管并联，阻力互不串联累加。血液为非牛顿流体：贫血降黏度可推高雷诺数产生湍流性杂音，红细胞增多症则升高黏度与外周阻力。',
  },
  {
    id: 'g-370',
    term: '压力感受器反射',
    english: 'baroreceptor reflex',
    subjectId: 'physiology',
    category: '循环调节',
    definition:
      '机体最快的血压负反馈：颈动脉窦与主动脉弓的牵张感受器经舌咽神经与迷走神经传入延髓孤束核，整合后提高心迷走张力、降低心交感与缩血管张力，数秒内把血压拉回设定点；血压降低时反向运行。其日常角色是逐搏缓冲血压波动，如「减震器」；血压持续升高时发生重调定，故不承担慢性降压。颈动脉窦按摩终止阵发性室上速、颈动脉窦电刺激治疗顽固性高血压是其临床的两面。',
  },
  {
    id: 'g-371',
    term: '肾素-血管紧张素-醛固酮系统',
    english: 'renin-angiotensin-aldosterone system',
    abbreviation: 'RAAS',
    subjectId: 'physiology',
    category: '循环调节',
    definition:
      '调控血压、容量与电解质的体液级联：肾灌注压下降、交感 β₁ 兴奋与致密斑 NaCl 减少三信号促使球旁器颗粒细胞分泌肾素，将肝源血管紧张素原切为 Ang I，经肺内皮为主的 ACE 转换为 Ang II；后者经 AT₁ 受体收缩血管、促醛固酮保钠排钾、刺激渴感与 ADH、直接促近端小管钠重吸收并驱动心血管重塑。ACE2-Ang(1-7)-Mas 构成拮抗性保护轴。ACEI、ARB、螺内酯与肾素抑制剂均以此为靶点。',
  },
  {
    id: 'g-372',
    term: '心房钠尿肽',
    english: 'atrial natriuretic peptide',
    abbreviation: 'ANP',
    subjectId: 'physiology',
    category: '循环调节',
    definition:
      '心房肌受容量牵张时释放的 28 个氨基酸活性肽，心室负荷增高时释放同族的 BNP。经膜结合型鸟苷酸环化酶升高 cGMP：扩张血管、入球扩张与出球收缩协同升高肾小球滤过率、抑制肾素与醛固酮分泌、对抗 ADH，从而利钠利尿、削减血容量——与 RAAS 的主张几乎逐项相反，构成容量调节的拮抗极。BNP/NT-proBNP 为心衰诊断与风险分层的标准生物标志物；脑啡肽酶抑制剂沙库巴曲通过减少其降解增强此轴。',
  },
  {
    id: 'g-373',
    term: '冠状动脉血流储备',
    english: 'coronary flow reserve',
    abbreviation: 'CFR',
    subjectId: 'physiology',
    category: '器官循环',
    definition:
      '最大扩张状态下冠脉血流与静息血流之比，正常约 3–5 倍（静息约 250 ml/min，运动时可近 1 L/min）。心肌摄氧率高达 65%–70%、静息时已近饱和，需氧量上升只能靠血流成全，故储备几乎全由代谢性扩张（腺苷、K⁺、H⁺、CO₂ 与 NO）提供。管腔狭窄超过约 70% 或微循环病变使储备耗竭，即出现劳力性心绞痛；心内膜下心肌受收缩期挤压最重、对缺血最敏感。可经腺苷负荷或血流储备分数（FFR）测定以指导血运重建。',
  },
  {
    id: 'g-374',
    term: '直立性循环调节',
    english: 'orthostatic circulatory regulation',
    subjectId: 'physiology',
    category: '循环调节',
    definition:
      '机体对抗重力性血重分布的机制总和：起立时约 500–700 ml 血液坠积下肢静脉，胸腔血量与搏出量骤降，压力感受器反射在数秒内以心率增快与缩血管代偿；肌肉泵、静脉瓣与呼吸泵维持持续回流，ADH 与 RAAS 在数分钟至更久内保水保钠。失守即直立不耐受：血管迷走性晕厥（迷走爆发与交感撤除）与体位性心动过速综合征（站立心率持续增快 ≥30 次/分）；长期卧床或失重后血浆容量丢失、压力反射迟钝，形成立位耐力不良。',
  },
]
