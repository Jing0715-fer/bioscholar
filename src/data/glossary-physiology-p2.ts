// ============================================================
// 生理学术语词典 - 批次 P2（10 条，g-345 ~ g-354）
// 由内容代理 44-b2 编写，subjectId 均为 physiology
// 类别分布：细胞信号 3 / 肌肉 3 / 神经 1 / 感觉 3
// 依据：Guyton & Hall 第14版、Boron & Boulpaep 第3版及本学科第 3–4 章教材正文
// ============================================================
import type { GlossaryTerm } from '@/lib/types'

export const physiologyGlossaryP2: GlossaryTerm[] = [
  // ---------- 细胞信号（3 条） ----------
  {
    id: 'g-345',
    term: 'G 蛋白偶联受体',
    english: 'G protein-coupled receptor',
    abbreviation: 'GPCR',
    subjectId: 'physiology',
    category: '细胞信号',
    definition:
      '以七个跨膜 α 螺旋为共同骨架的膜受体超家族，人类基因组编码约 800 个成员，识别激素、神经递质、趋化因子、气味分子乃至光子。配体结合使受体变构而充当鸟苷酸交换因子，催化胞质侧异三聚体 G 蛋白交换 GDP 为 GTP，再经 Gs、Gi、Gq 等家族调节腺苷酸环化酶、磷脂酶 C 等效应器，产生 cAMP、IP₃/DAG 与 Ca²⁺ 等第二信使。约三成临床药物以其为靶点。',
  },
  {
    id: 'g-346',
    term: '第二信使',
    english: 'second messenger',
    subjectId: 'physiology',
    category: '细胞信号',
    definition:
      '受体激活后在胞内生成的小分子扩散性信号分子，把膜外配体信息转化为胞内浓度变化。经典成员有 cAMP、cGMP、IP₃、DAG 与 Ca²⁺：cAMP/cGMP 由环化酶催化核苷酸生成并激活 PKA/PKG，IP₃ 促使内质网释放钙，DAG 留在膜内激活 PKC，Ca²⁺ 经钙调蛋白等传感器发挥作用。其浓度随信号呈脉冲乃至振荡式动态，由磷酸二酯酶与钙泵及时清除，实现信号的放大与瞬时编码。',
  },
  {
    id: 'g-349',
    term: '钙调蛋白',
    english: 'calmodulin',
    abbreviation: 'CaM',
    subjectId: 'physiology',
    category: '细胞信号',
    definition:
      '真核细胞中几乎无所不在的酸性小蛋白钙传感器，每分子含四个 EF 手结构域、可结合四个 Ca²⁺。钙结合诱发构象变化，使其包裹并激活众多靶酶，包括肌球蛋白轻链激酶、CaM 依赖性蛋白激酶与某些腺苷酸环化酶。平滑肌收缩即由 Ca²⁺-钙调蛋白激活 MLCK、磷酸化肌球蛋白调节轻链而启动，是其最经典的生理范例。',
  },
  // ---------- 肌肉（3 条） ----------
  {
    id: 'g-347',
    term: '横桥循环',
    english: 'cross-bridge cycle',
    subjectId: 'physiology',
    category: '肌肉',
    definition:
      '肌球蛋白头部与肌动蛋白反复结合、划动、解离的机械化学循环，是肌丝滑行的分子基础。ATP 结合使僵直态横桥脱离肌动蛋白，ATP 水解令其上弦至高势能构象；Ca²⁺ 解除原肌球蛋白的位阻后，横桥重新结合肌动蛋白并释放 Pi 与 ADP，触发向 M 线方向约 10 nm 的划动。每圈耗一分子 ATP，整条肌丝上数百万横桥非同步循环，输出平滑张力。',
  },
  {
    id: 'g-348',
    term: '兴奋-收缩偶联',
    english: 'excitation-contraction coupling',
    subjectId: 'physiology',
    category: '肌肉',
    definition:
      '把肌膜电兴奋与机械收缩衔接起来的中介过程。骨骼肌中动作电位沿横管传入细胞深处，二氢吡啶受体感受电压并构象偶联地开放 RyR1，终池释放 Ca²⁺ 结合肌钙蛋白 C，启动横桥循环；心肌则依赖平台期 L 型通道内流的触发钙引发 RyR2 的钙致钙释放。舒张由 SERCA 耗能泵钙回肌质网完成，故放松与收缩同样耗能。',
  },
  {
    id: 'g-351',
    term: '感受野',
    english: 'receptive field',
    subjectId: 'physiology',
    category: '感觉',
    definition:
      '能影响某个感觉神经元放电活动的感受表面或感觉空间区域。感受野越小，空间分辨越锐：视网膜中央凹与指尖近乎一对一连线，而外周皮肤由多条纤维汇聚。许多神经元还具有中心-周围拮抗的同心圆结构，经侧向抑制锐化对比边缘，是感觉信息逐级加工的基本构件，其大小还随注意状态动态调整。',
  },
  // ---------- 神经（1 条） ----------
  {
    id: 'g-350',
    term: '量子释放',
    english: 'quantal release',
    subjectId: 'physiology',
    category: '神经',
    definition:
      '突触囊泡以整个囊泡为单位进行胞吐的递质释放方式，由 Katz 在神经-肌肉接头的研究确立。自发出现的微终板电位幅度恒为单位的整数倍，提示每一量子对应一个囊泡所含的数千至上万个递质分子；动作电位诱发的终板电位亦按量子倍数阶梯分布。钙内流与释放概率呈高次幂关系，单次冲动动员的量子数决定突触传递强度。',
  },
  // ---------- 感觉（3 条） ----------
  {
    id: 'g-352',
    term: '行波',
    english: 'traveling wave',
    subjectId: 'physiology',
    category: '感觉',
    definition:
      '声波引起的、沿基底膜自蜗底向蜗顶传播的振动波。镫骨每次进出都在淋巴液与基底膜上激起行波，振幅沿传播方向渐增、于特定部位达峰后迅速衰减；高频声的峰值靠近蜗底，低频声靠近蜗顶，构成频率-部位对应的音调拓扑编码。基底膜宽度与劲度自底向顶的梯度是行波空间定位的结构基础，此拓扑一直保持到听皮层。',
  },
  {
    id: 'g-353',
    term: '视紫红质',
    english: 'rhodopsin',
    subjectId: 'physiology',
    category: '感觉',
    definition:
      '视杆细胞外段膜盘中的感光色素，由视蛋白与 11-顺视黄醛生色团共价结合，本身就是一种 G 蛋白偶联受体。吸收单个光子后视黄醛异构为全反式，触发视蛋白变构并激活转导蛋白，经 PDE6 水解 cGMP，关闭外段的 cGMP 门控阳离子通道，使视杆超极化。级联放大使视网膜达到单光子敏感，维生素 A 缺乏致其再生障碍可引起夜盲。',
  },
  {
    id: 'g-354',
    term: '前庭眼反射',
    english: 'vestibulo-ocular reflex',
    abbreviation: 'VOR',
    subjectId: 'physiology',
    category: '感觉',
    definition:
      '头部转动时眼球向相反方向等速移动以稳定注视的反射。半规管壶腹嵴感受角加速度，信号经前庭神经入前庭核，再经内侧纵束抵达对侧展神经核与动眼神经核，驱动拮抗肌产生反向眼动，增益约为 −1、潜伏期仅十余毫秒。该反射可脱离视觉单独床旁测试（冷热试验、转椅试验），其增益的可塑性也是运动学习研究的经典模型。',
  },
]
