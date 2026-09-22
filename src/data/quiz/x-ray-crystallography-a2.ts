// ============================================================
// BioScholar X射线晶体学测验题库 - 批次 A2（第 4–6 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-x-ray-crystallography-16 ~ 30）
// 题型：single 9 / truefalse 3 / multiple 3
// 难度：每章 1（基础识记）×1 + 2（理解应用）×3 + 3（综合分析）×1
// 依据：Drenth《Principles of Protein X-ray Crystallography》、
// Rupp《Biomolecular Crystallography》及平台第 4–6 章正文常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const xrayCrystallographyQuizA2: QuizQuestion[] = [
  // ================= 第 4 章 X射线与衍射几何（q-16 ~ 20） =================
  {
    id: 'q-x-ray-crystallography-16',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch4',
    type: 'single',
    question: '实验室铜靶X射线管发出的特征辐射 Cu Kα 的加权波长为：',
    options: ['0.7107 Å', '1.5418 Å', '1.3922 Å', '1.4880 Å'],
    answer: 1,
    explanation:
      'Cu Kα1 与 Kα2 双线（1.5406 Å 与 1.5443 Å）按强度 2:1 加权合成 1.5418 Å；0.7107 Å 是钼靶 Kα，1.3922 Å 是铜的 Kβ（可用镍滤波片去除，Ni 的 K 吸收边 1.488 Å 恰卡在 Kβ 与 Kα 之间），1.4880 Å 即该吸收边本身。铜靶是家用蛋白衍射仪的默认配置，钼靶多用于小分子晶体学。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-17',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch4',
    type: 'truefalse',
    question:
      '在埃瓦尔德反射球的作图中，倒易点阵的原点位于球心（即晶体所在处），而入射波矢的终点落在球面上。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。规范作图恰好相反：球心取在晶体位置、半径为 1/λ；入射波矢 k_in 由球心指向球面，它与球面的交点才是倒易点阵原点的落点。凡倒易格点落在球面上即满足衍射条件 s = g，衍射沿球心指向该格点的方向发生。把倒易原点误放到球心是初学者作图最常见的错误，会导致衍射方向整体判断失误。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-18',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch4',
    type: 'single',
    question: '用波长 1.0 Å 的X射线收集数据，晶面间距 d = 2.0 Å 的反射对应的布拉格角 θ 约为：',
    options: ['约 7.2°', '约 14.5°', '约 30.0°', '约 45.0°'],
    answer: 1,
    explanation:
      '由布拉格定律 2d sinθ = λ 得 sinθ = 1.0/(2×2.0) = 0.25，θ = arcsin 0.25 约 14.5°。同理 d = 1.0 Å 时 sinθ = 0.5、θ = 30°，d = 0.8 Å 时约 38.7°——分辨率越高（d 越小），反射越住高角区，探测器须后撤或偏移才能接住高分辨率数据。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-19',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch4',
    type: 'multiple',
    question: '关于结构因子与衍射强度，下列叙述正确的有：（多选题）',
    options: [
      '结构因子 F(h) 是复数，其模给出振幅、辐角给出相位',
      '探测器记录的强度正比于 |F(h)|²，相位信息在记录过程中丢失',
      '体心格子 I 中 h+k+l 为奇数的反射因系统消光而强度恒为零',
      '原子温度因子 B 越大，说明该原子越稳定、振动越小',
      '弗里德定律在存在显著反常散射时依然严格成立',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项是本章核心结论：F(h) = Σfⱼexp(2πi(h·rⱼ)) 为复数；实测只得强度即 |F|²，相位丢失正是相位问题的来源；体心格子消光的推导归结为 1+exp(iπ(h+k+l)) 在 h+k+l 为奇时为零。B = 8π²⟨u²⟩，B 大意味着原子位移（热振动或静态无序）大而非稳定；反常散射的虚部 f″ 恰恰打破弗里德定律，形成 Bijvoet 差。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-20',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch4',
    type: 'single',
    question:
      '一维两原子晶胞中，原子 A 位于 x = 0、原子 B 位于 x = 1/4，两者散射力均为 f。该晶胞 h = 2 反射（如 (200)）的结构因子为：',
    options: [
      'F = 2f，相位为 0',
      'F = √2·f，相位为 45°',
      'F = 0，两原子贡献恰好反相抵消',
      'F = √2·f，相位为 −45°',
    ],
    answer: 2,
    explanation:
      'F = f·[1 + exp(2πi·2·1/4)] = f·(1 + exp(πi)) = f·(1 − 1) = 0——两原子对 h = 2 的贡献恰相差半个波长，反相抵消。对照：h = 1 时 F = f(1+i)、模 √2f、相位 45°；h = 4 时两项同相、F = 2f。振幅随 h 的消长正是原子间相对位置编码在强度里的最小演示。',
    difficulty: 3,
  },
  // ================= 第 5 章 数据收集策略（q-21 ~ 25） =================
  {
    id: 'q-x-ray-crystallography-21',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch5',
    type: 'single',
    question: '蛋白晶体低温数据收集时，默认首选的冷冻保护剂及其常用浓度是：',
    options: ['甘油，15–25%', '二甲基亚砜，30–50%', '甲醇，5%', '蔗糖，60%'],
    answer: 0,
    explanation:
      '甘油 15–25% 是默认首选，兼容高盐与 PEG 母液；乙二醇、MPD、低分子量 PEG 与高浓度盐是常见替补，筛选按浓度阶梯（每档差 5 个百分点）与成分替换的矩阵进行，多数晶体在 15–20% 一带找到不结冰且衍射不劣化的窗口。二甲基亚砜与高浓度蔗糖并非蛋白晶体学的标准保护剂。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-22',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch5',
    type: 'truefalse',
    question:
      '六方冰污染的衍射图签名是在 3.67 Å 与 1.92 Å 处出现尖锐粉末环；而无定形（玻璃化）的冰只贡献平缓背景、不产生分立衍射。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。玻璃化的无定形冰不产生分立衍射、只抬高平滑背景；一旦析出六方冰晶，即在这两个特征 d 间距处成尖锐粉末环——轻度结冰牺牲环附近反射，重度结冰把整幅图埋进高背景。判读口诀可记：环在 3.67 Å 是结冰，环外带随机强斑是结霜，背景干净才算过关。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-23',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch5',
    type: 'single',
    question:
      '按 Henderson 1995 年的估算及其后的实验修正（Owen 等 2006 年），蛋白晶体在电子密度图通常仍可解读的前提下，可耐受的剂量量级约为：',
    options: ['约 0.02 MGy', '约 0.2 MGy', '约 20–30 MGy', '约 2000 MGy'],
    answer: 2,
    explanation:
      'Henderson 1995 年由辐射化学数据外推，给出约 2×10⁷ Gy（20 MGy）的耐受上限；Owen 等 2006 年的系统测量显示剂量升到 30 MGy 量级时强度已明显衰减，但电子密度图通常仍可解读，实务警戒线故放在 20–30 MGy。反常与高分辨率数据受害最早，须留足余量。剂量单位 Gy = J/kg，只计吸收的总能量。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-24',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch5',
    type: 'single',
    question: 'inverse beam（对顶位收集）把晶体在正位与相差 180° 的对顶位交替曝光，其主要目的是：',
    options: [
      '提高普通数据的完整度',
      '让 Bijvoet 配对 F(h) 与 F(−h) 在几乎相同的通量、吸收与损伤状态下被先后测量',
      '降低晶体承受的总剂量',
      '修正探测器的坏区与模块间隙',
    ],
    answer: 1,
    explanation:
      '反常信号只有平均强度的百分之几，必须把 Bijvoet 两员放在尽可能一致的实验条件下配对测量，通量、吸收与损伤的漂移才能在做差时以共同模式抵消——这是 inverse beam 的操作逻辑。它并不省剂量（角度预算反而翻倍），与探测器缺陷无关；完整度靠旋转范围与对称性保证。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-25',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch5',
    type: 'multiple',
    question: '关于X射线辐射损伤，下列叙述正确的有：（多选题）',
    options: [
      '二硫键的断裂与硫氧化在 1–5 MGy 起即可在差值图上现形',
      'Glu 与 Asp 侧链羧基的去羧基属于特异性损伤的表现',
      '金属中心的还原与配位改变可能先于或伴随二硫键损伤出现',
      '特异性损伤均匀作用于晶体内所有原子，与化学环境无关',
      '降低通量、拉长曝光时间可以节省晶体吸收的总剂量',
    ],
    answer: [0, 1, 2],
    explanation:
      '特异性损伤有明确的化学顺序：二硫键最早（1–5 MGy 起可见），金属中心紧随其后（个别体系甚至更早），随后是 Glu/Asp 去羧基与 Tyr 邻位，显然与化学环境相关而非均匀作用。剂量只计「吸了多少」、不计快慢——减通量只延长曝光时间、一分剂量不省，省剂量靠减少总光子数或缩小受照体积。',
    difficulty: 3,
  },
  // ================= 第 6 章 数据处理与还原（q-26 ~ 30） =================
  {
    id: 'q-x-ray-crystallography-26',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch6',
    type: 'single',
    question: '数据质量「三兄弟」指标中，代表单次测量精度、且不随冗余升高而恶化的指标是：',
    options: ['Rmerge', 'Rmeas', 'Rpim', 'Rfree'],
    answer: 1,
    explanation:
      'Rmerge 对每次测量相对平均的偏离求和，冗余越高数值越难看；Rmeas 给每次测量乘以 √(N/(N−1))，代表单次测量的精度、与冗余无关；Rpim 乘以 √(1/(N−1))，代表合并平均值的精度、随冗余升高而下降。Rfree 属于模型精修阶段的交叉验证指标（第 10 章），不是数据还原指标。',
    difficulty: 1,
  },
  {
    id: 'q-x-ray-crystallography-27',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch6',
    type: 'single',
    question: '现代分辨率截断的主判据 CC1/2 取阈值 0.143，其来历是：',
    options: [
      'CC1/2 = 0.143 恰对应 CC* = 0.5，即数据与真实强度仍保持一半的相关',
      '对应 I/σ 外壳等于 2 的老惯例',
      '对应 Rmerge 等于 5% 的经验值',
      '对应完整度 95% 的下限',
    ],
    answer: 0,
    explanation:
      'CC* = √(2·CC1/2/(1+CC1/2))，把 CC1/2 = 0.143 代入恰得 CC* = 0.5——数据与真实强度保持一半相关，这被定为「信号尚存」的底线。CC1/2 由 Karplus 与 Diederichs 于 2012 年提出，经验上比 I/σ 不低于 2 的老惯例更敢延伸分辨率：不少数据在 I/σ 跌破 2 的壳层，CC1/2 仍证明信号真实存在。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-28',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch6',
    type: 'truefalse',
    question:
      '蛋白质由 L 型氨基酸等手性构件组成，因此只能结晶于 65 个 Sohncke 空间群，不可能出现在含镜面、滑移面或反演中心的空间群中。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。镜面、滑移面与反演（及旋转反演）都是把手性对象映射为其对映体的操作，而晶体内所有分子同手性，故大分子晶体被排除在这类群之外——230 个空间群中仅含旋转、螺旋与平移操作的 65 个 Sohncke 群可供选择。这是空间群判定四步流程中「手性约束」一步的依据，也把候选名单大幅压缩。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-29',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch6',
    type: 'single',
    question:
      '四方晶系数据指标化后，晶格心性在 tP 与 tI 之间出现歧义（两者的晶胞度规完全相同），判定的主要实验依据是：',
    options: [
      '晶胞常数 a 与 c 的比值',
      'h+k+l 为奇数的反射是否系统性缺席（消光统计）',
      '探测器距离与 2θ 偏移的设置',
      'mosaicity 的数值大小',
    ],
    answer: 1,
    explanation:
      'tP 与 tI 的晶胞参数完全一致，斑点位置永远分不出两种心性；真 tI 的 h+k+l 为奇的反射按系统消光规律缺席，消光统计才是裁决证据。但须防「伪消光」：非晶体学平移会让 tP 晶体的奇反射显著偏弱、貌似缺席。误选 tI 会白扔近半反射（完整度虚低），漏选 tI 会让噪声反射混进合并、Rmeas 暴涨，稳妥做法是两种心性各跑一遍缩放合并再比对统计量。',
    difficulty: 2,
  },
  {
    id: 'q-x-ray-crystallography-30',
    subjectId: 'x-ray-crystallography',
    chapterId: 'x-ray-crystallography-ch6',
    type: 'multiple',
    question: '一套「绿灯」蛋白数据集在交账自检时通常应满足：（多选题）',
    options: [
      '外壳 CC1/2 不低于 0.143',
      '整体完整度高于 95%，且低分辨项无系统缺失',
      'Rpim 低而平稳、无高角暴涨',
      'Rmerge 随冗余升高而变大，说明数据质量正在改善',
      '分辨率截断应尽量把 d_min 数字做小，宁滥勿缺',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项对应红绿灯表的绿灯档：CC1/2 达到主判据、完整度与低频项齐整、Rpim 走势平稳。Rmerge 随冗余升高是它未随测量数归一的统计缺陷，并非质量改善——评估应看 Rmeas 与 Rpim；把 d_min 数字做小属于「无效高分辨外推」，等于把噪声当数据，自由 R 会在精修阶段揭穿这种自欺。',
    difficulty: 3,
  },
]
