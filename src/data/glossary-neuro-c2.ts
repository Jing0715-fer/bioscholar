// ============================================================
// BioScholar 神经生物学术语词条 - 批次 C2（第 9–10 章配套）
// 5 条：g-193 ~ g-197，subjectId 为 neurobiology
// 依据：寿天德《神经生物学》（第3版）与 Kandel《Principles of Neural Science》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：neurobiology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const NEUROBIOLOGY = 'neurobiology' as unknown as GlossaryTerm['subjectId']

export const neuroGlossaryC2: GlossaryTerm[] = [
  {
    id: 'g-193',
    term: '行波学说',
    english: 'Traveling Wave Theory',
    subjectId: NEUROBIOLOGY,
    category: '生理',
    definition:
      'von Békésy 建立的耳蜗机械学核心理论（1961 年获诺贝尔生理学或医学奖）：镫骨在前庭窗上的振动于基底膜激起一个由蜗底向蜗顶传播的行波，行波幅度沿途渐增，在与刺激频率对应的特征位置达最大后迅速衰减；基底膜因自蜗底（窄而劲度高）至蜗顶（宽而劲度低）的机械梯度，形成蜗底感高频、蜗顶感低频的频率-部位对应，为全部听觉中枢的音调拓扑提供外周基础。被动行波的频率分辨较宽钝，锐利调谐须依赖外毛细胞耳蜗放大器的主动过程。',
  },
  {
    id: 'g-194',
    term: '耳蜗放大器',
    english: 'Cochlear Amplifier',
    subjectId: NEUROBIOLOGY,
    category: '生理',
    definition:
      '由外毛细胞构成的耳蜗主动增益机制：外毛细胞侧膜的马达蛋白 prestin 随膜电压在毫秒级内改变构象，使细胞整体纵向缩短或伸长（电能动性），反推 Corti 器与基底膜，把代谢能量回输振动系统，在行波峰值附近择优放大与其固有频率一致的成分，使振动幅度提高可达数十倍、调谐曲线显著变窄、听阈降至鼓膜振幅小于氢原子直径的量级。外毛细胞还受上橄榄核橄榄耳蜗束的胆碱能支配调节增益；老年性与噪声性聋早期累及外毛细胞时出现调谐变钝与响度重振。',
  },
  {
    id: 'g-195',
    term: '前庭眼反射',
    english: 'Vestibulo-Ocular Reflex',
    abbreviation: 'VOR',
    subjectId: NEUROBIOLOGY,
    category: '生理',
    definition:
      '头动时使眼球向相反方向移动以稳定凝视的前庭反射：半规管毛细胞换能，前庭核二级神经元交叉至对侧展神经核（并经内侧纵束核间神经元回返同侧动眼神经核），构成三神经元弧，潜伏期约 10 ms，理想频段增益接近 1。长期佩戴棱镜造成视觉-前庭失配时，小脑绒球依视觉误差逐日修正其增益，是运动学习研究的经典模型；冷热水试验诱发眼震评估前庭功能亦以此反射为基础。',
  },
  {
    id: 'g-196',
    term: '大小原则',
    english: 'Size Principle',
    subjectId: NEUROBIOLOGY,
    category: '生理',
    definition:
      'Henneman 于 1965 年提出的运动单位募集规律：运动神经元胞体愈小，膜面积愈小、输入电阻愈高，同等突触电流引起的去极化愈大、阈值愈低，故愈先被募集。随意用力或反射时募集顺序基本固定为 S（慢抗疲劳）、FR（快抗疲劳）、FF（快易疲劳）依次加入，配合已募集单位放电率的上调实现力量的分级；「先小后大」的经济性募集使耗能大、易疲劳的高阈值单位仅在高峰需求时短暂动用，是运动控制中最稳定的规律之一。',
  },
  {
    id: 'g-197',
    term: '直接通路与间接通路',
    english: 'Direct and Indirect Pathways',
    subjectId: NEUROBIOLOGY,
    category: '通路',
    definition:
      '基底神经节门控运动的两条相互拮抗的纹状体输出路线。直接通路：皮层兴奋表达 D1 受体的纹状体神经元，抑制苍白球内侧段与黑质网状部，解除其对丘脑的抑制，易化运动。间接通路：表达 D2 受体的纹状体神经元抑制苍白球外侧段，解除其对丘脑下核的抑制，丘脑下核兴奋输出核、加强对丘脑的抑制，压抑运动。黑质致密部多巴胺兴奋 D1、抑制 D2，对两通路作相反调制；帕金森病与亨廷顿病的运动过少或过多即分别源于两通路失衡的相反方向。',
  },
]
