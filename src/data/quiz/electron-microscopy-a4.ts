// ============================================================
// BioScholar 电子显微学测验题库 - 批次 A4（第 10–12 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-electron-microscopy-46 ~ q-electron-microscopy-60）
// 题型：每章 single ×3 + truefalse ×1 + multiple ×1
// 难度：每章 difficulty 1 ×1 + difficulty 2 ×3 + difficulty 3 ×1
// 依据：本平台《电子显微学》教材第 10–12 章正文，参照
// Gonen 组 MicroED 系列、Denk 与 Horstmann 的 SBF-SEM、
// Li、Scheres、Punjani、Danev、Zhong、Mahamid 等文献常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const electronMicroscopyQuizA4: QuizQuestion[] = [
  // ================= 第 10 章 电子晶体学与 MicroED（q-electron-microscopy-46 ~ 50） =================
  {
    id: 'q-electron-microscopy-46',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch10',
    type: 'single',
    question: 'MicroED 能用于结构解析的蛋白晶体尺寸通常在什么范围？',
    options: [
      '须大于 10 μm 的三维大单晶',
      '0.1–4 μm 的亚微米到微米级微晶',
      '毫米级单晶',
      '仅限小于 100 nm 的纳米晶',
    ],
    answer: 1,
    explanation:
      '电子与库仑势的相互作用使弹性散射截面比 X 射线高三到五个数量级（文献口径 10³ 至 10⁵ 倍），亚微米晶体即可获得可测衍射强度，故 MicroED 的甜点区为 0.1–4 μm。同步辐射单晶衍射通常须大于 10 μm，XFEL 虽可吃 1–50 μm 微晶但须大科学装置；2013 年 Shi 等（Gonen 组）正是用结晶滴里被当作「沉淀」的亚微米溶菌酶微晶解出首个 2.9 Å 结构，把「晶体太小长不大」从死局变成 MicroED 的生态位。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-47',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch10',
    type: 'truefalse',
    question:
      'MicroED 中单颗晶体完整数据集的总剂量约为 1 e⁻/Å²，比常规单颗粒成像的 40–60 e⁻/Å² 低近两个数量级，因此辐射损伤在数据内几乎不显形。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。衍射收振幅时电子按布拉格方向集中射入衍射点，而成像中同样的电子摊满整幅图像并被衬度传递函数调制（Henderson 的账本），故记录振幅用衍射远比成像划算；MicroED 束流密度压到 0.01–0.1 e⁻/Å²/s，单晶全数据集总剂量约 1 e⁻/Å²。但须辨析「几乎不显形」不等于零剂量：损伤仍在按帧累积（衍射斑点逐帧衰减），快收与晶体用后即弃仍是铁律，长曝光策略只对极端耐辐照的小分子可行。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-48',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch10',
    type: 'single',
    question: 'MicroED 采用连续旋转法采集的核心理由是：',
    options: [
      '静止曝光时倒易点以「点」的形式进出 Ewald 球，反射被斩在半路、强度无法积分；连续旋转使每个衍射点以细弧段扫过探测器，天然完成积分',
      '静止曝光会烧坏混合像素探测器',
      '连续旋转才能标定相机长度与束心位置',
      '连续旋转可完全消除动力学散射',
    ],
    answer: 0,
    explanation:
      '连续旋转几何与 X 射线晶体学的旋转法同构：样品台在曝光期间匀速倾转（每秒百分之几度到十分之几度），每个反射以细弧段扫过探测器、强度可干净积分；静止模式则让倒易点突然进出 Ewald 球，反射被斩成半截、强度不可靠——2014 年 Nature Methods 的连续旋转方案据此把溶菌酶推到约 1.7 Å。相机长度以 MoO₃ 标样标定、与旋转与否无关；旋转不改变多重散射的物理，动力学散射仍须减薄或动力学精修应对。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-49',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch10',
    type: 'multiple',
    question: '（多选题）关于 MicroED 的物理特性与数据处理，下列叙述正确的有：',
    options: [
      '精修须使用电子散射因子表（Peng 等 1996 年的参数化），用 X 射线散射因子表会使 R 因子虚高',
      '200 kV 电子波长约 0.025 Å，2 Å 衍射的布拉格角不足半度，一帧静止曝光即可同时激发近整层倒易点',
      '动力学精修把晶体内电子波传播显式建模，可压低厚晶体的 R 因子并判定绝对构型（Brázda 与 Palatinus 等 2019 年）',
      '电子衍射强度永远严格正比于结构因子模的平方，无须担心多重散射',
      'MicroED 已全面取代 X 射线晶体学与单颗粒冷冻电镜',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项依次对应软件栈的电子特有修正（电子与 X 射线原子散射曲线形状不同）、Ewald 球近平面几何（波长比 Cu Kα 短约 60 倍、球曲率半径大 60 倍）与动力学精修的绝对构型判据。第四项错：多重散射使强度偏离运动学的模平方关系，晶体厚度约一二百纳米以内近似才大体成立。第五项错在生态位：MicroED 补的是「晶体太小、量太少、长不大」的拼图，与要大晶体的 X 射线、要非晶颗粒的单颗粒分析连样品形态都不重叠。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-50',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch10',
    type: 'single',
    question:
      '某药物化学家从研钵研磨得到微克级粉末样品，光学显微镜下只见浑浊「沉淀」，多次尝试无法长出大于 10 μm 的单晶，现需判定其多晶型与手性构型。最合适的路线是：',
    options: [
      '送同步辐射做单晶 X 射线衍射',
      'MicroED：微晶粉末直接上载，连续旋转收数，动力学精修判定绝对构型',
      '单颗粒冷冻电镜：粉末溶于缓冲液后玻璃化成像',
      '小角 X 射线散射（SAXS）给出原子坐标',
    ],
    answer: 1,
    explanation:
      '「沉淀」在电镜下常是密集的微晶森林——上载后以衍射筛查即可确认。MicroED 以 0.1–4 μm 微晶解构、晶型筛选与共晶筛查是工业主战场，绝对构型可经动力学精修的反常散射路径独立判定（Brázda 与 Palatinus 等 2019 年，Science），微米尺度还带来秒级浸泡的配体红利。同步辐射须大于 10 μm 单晶（题设失败）；粉末不提供单颗粒所需的孤立非晶颗粒；SAXS 只给低分辨包络、无原子坐标与手性信息。',
    difficulty: 3,
  },
  // ================= 第 11 章 扫描电子显微镜（q-electron-microscopy-51 ~ 55） =================
  {
    id: 'q-electron-microscopy-51',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch11',
    type: 'single',
    question: '关于扫描电镜中二次电子三种来源（SE1、SE2、SE3）的分辨率，下列叙述正确的是：',
    options: [
      'SE1 的分辨率被背散射电子行程拖到亚微米',
      'SE2 携带约 1 nm 的探针级分辨率',
      'SE1 分辨率为探针直径量级（约 1 nm），SE2 被拖到亚微米，SE3 近乎均匀背景光',
      '三种来源的分辨率相同，均由逸出深度决定',
    ],
    answer: 2,
    explanation:
      '二次电子按激发者分家：SE1 由入射探针在入射点直接激发，分辨率即探针直径量级（约 1 nm）；SE2 由逸出的背散射电子在微米级范围内再激发，分辨率被其行程拖到亚微米；SE3 由背散射电子打在腔壁、极靴与样品台上再激发，近乎均匀的背景光。高分辨成像的目标正是收 SE1、挤 SE2 与 SE3——环内（in-lens）探测器装于物镜极靴内孔、SE1 收集效率最高，是 1 nm 级分辨率的标配。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-52',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch11',
    type: 'truefalse',
    question:
      '临界点干燥利用 CO₂ 在 31.1 °C、7.4 MPa 的临界点：越过临界点后液态与气态密度连续合流、相界面消失、表面张力归零，样品得以在「无界面」状态下完成干燥。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。水的表面张力高达 72 mN/m，空气干燥时气液界面扫过会把微绒毛与纤毛并拢塌陷；临界点干燥由 Anderson 1951 年提出，先以液态 CO₂ 在低温加压下置换乙醇，再升温越过临界点（31.1 °C、7.4 MPa）使界面消失，随后恒温缓慢放气完成干燥。两处操作陷阱：升温前排尽残留乙醇与水，放气须足够慢——否则局部界面张力与气流扰动会伤及脆弱结构。CPD 仍留约百分之几的线性收缩，远好于空气干燥的结构性塌缩。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-53',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch11',
    type: 'single',
    question: '扫描电镜上读出免疫金标记（5–15 nm 胶体金）位置的最可靠方式是：',
    options: [
      '二次电子像——金粒呈高衬度白点',
      '背散射电子像——金的高原子序数产生强 Z 衬度，金粒呈高衬度亮点',
      '阴极荧光成像',
      '束感生电流成像',
    ],
    answer: 1,
    explanation:
      '背散射产额随原子序数单调上升（经验上近似按 Z 的 0.7 至 1 次幂），锚点记三个数：碳约 0.05、铁约 0.27、金约 0.5——金（Z 为 79）对碳基生物样品有近十倍反差，5–15 nm 金粒在背散射像里是高衬度白点，而二次电子像里只是模糊亮团。分段四象限探测器求和可抵消地形阴影、突出原子序数衬度；双金粒（如 5 与 15 nm）配对可画两种受体的表面共分布图。阴极荧光与束感生电流分别服务掺杂缺陷与半导体结，与金标记无关。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-54',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch11',
    type: 'multiple',
    question: '（多选题）绝缘样品在扫描电镜中的荷电问题，下列对策切实有效的有：',
    options: [
      '工作在 E₂（约 1–3 keV）附近，使二次电子产额约为 1、入射与出射电荷天然相抵',
      '低真空模式：腔内几十到几百帕气体被束电离，正离子中和表面负电荷',
      '减速模式：柱内保持高束能、样品负偏压把落地能量压低，兼得细探针与低荷电',
      '显著增大束流，把积累的负电荷「烧掉」',
      '取消一切镀膜并提高加速电压至 20 kV 以上',
    ],
    answer: [0, 1, 2],
    explanation:
      '产额曲线在两个束能处取值 1，较高一处（E₂）常落在 1–3 keV，工作其附近电荷自平衡；低真空以气体正离子中和表面负电荷，代价是束被气体散射略糊；减速模式柱内高能量保光学、落地低能量压荷电——三条皆教科书对策，常与导电镀膜叠加。增大束流只会加剧净注入、加速放电畸变；提高电压远离 E₂ 且无镀膜，荷电只会更凶——异常亮斑、横向条纹与放大倍数漂移全是它的签名。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-55',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch11',
    type: 'single',
    question:
      '关于 SBF-SEM 与 FIB-SEM 两种体积电镜路线的 z 向分辨率与通量权衡，下列叙述正确的是：',
    options: [
      'SBF-SEM 的 z 步长可细到 4–10 nm 且通量冠绝诸路线',
      'FIB-SEM 的 z 步长为 10–50 nm、不可逆切削、通量最高',
      'SBF-SEM 以钻石刀连切连拍，z 步长典型 10–50 nm、通量最高但切削不可逆；FIB-SEM 以离子束铣削，z 步长可细到 4–10 nm、体素各向同性但通量较低',
      '电子断层扫描的通量高于两者且成像非破坏',
    ],
    answer: 2,
    explanation:
      'SBF-SEM（Denk 与 Horstmann 2004 年）在样品腔里装微型钻石刀，「切一刀拍一张」循环，z 步长即刀进给量（10–50 nm）、日夜连跑通量最高，代价是牺牲式成像；FIB-SEM 以 30 kV 镓离子束「铣一层拍一层」，z 步长 4–10 nm 甚至更小、各向同性体素是招牌，果蝇全脑以约 8 nm 体素重建（Zheng 等 2018 年，第 11 章），但通量低于 SBF-SEM。分工：大块组织归 SBF-SEM、小体积高细节归 FIB-SEM；电子断层（第 9 章）虽非破坏，通量却是诸路线中最低。',
    difficulty: 3,
  },
  // ================= 第 12 章 前沿与整合（q-electron-microscopy-56 ~ 60） =================
  {
    id: 'q-electron-microscopy-56',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch12',
    type: 'single',
    question: '直接电子探测相机的计数模式大幅提升成像质量的物理原因是：',
    options: [
      '电子先经闪烁体转成光子、再经光纤耦合成像',
      '逐电子事件被识别并定位到亚像素精度后累加，读出噪声在原理上被消灭，DQE 显著提升',
      '提高了加速电压从而缩短电子波长',
      '增大了物理像素尺寸以收集更多信号',
    ],
    answer: 1,
    explanation:
      'CCD 须「电子转光子再耦合」，闪烁体散射与光纤串扰层层抽税，DQE 在半奈奎斯特频率处常常不足 0.1；背照式减薄 CMOS 让高能电子直接轰击像素（K2 Summit 2012–2013 年商用、Falcon 与 DE 系列跟进），剂量率压到约 5–10 e⁻/像素/秒后逐事件计数（重合损失受控），读出噪声被原理性消灭，DQE 升至约 0.3–0.5；亚像素事件定位顺带支持「超分辨率」采样，电影模式的剂量分数化还让束致运动变得可校正。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-57',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch12',
    type: 'truefalse',
    question:
      'Volta 相位板以薄碳膜上被中央束局部充电形成的荷电斑点作为可控相移器（接近 π/2），实现近焦高衬度成像，对小分子量蛋白的成像收益明显。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。Danev 等 2014 年（Nature Methods）的机巧是对充电的正面收编：约 10 nm 无定形碳膜上，中央束造成的局部表面电位（Volta 电位）恰好充当相移器，斑点自动追着中央束、无需开孔与机械对中——Zernike 式中央孔碳膜败于污染与充电的老问题被绕开。近焦收集低频衬度充沛，小蛋白取向判定受益，血红蛋白（约 64 kDa 四聚体）解析到 3 Å 级是招牌案例；代价是相位随时长漂移、膜寿命有限与对准精度要求高。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-58',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch12',
    type: 'single',
    question: '与常规三维分类相比，cryoDRGN 处理构象异质性的核心思路是：',
    options: [
      '把构象离散成更多类别并提高类数',
      '以变分自编码器把每张图像映射到低维构象潜变量、从潜变量直接生成三维密度，构象谱以连续流形呈现',
      '提高单颗粒剂量以改善信噪比',
      '预先剔除构象不均一的颗粒、只精修最均匀的子集',
    ],
    explanation:
      '传统三维分类把构象切成几个离散的桶、桶间无过渡，而酶的底物闭合、通道门控本就是连续谱。cryoDRGN（Zhong 等 2021 年，Nature Methods）以变分自编码器直面连续性：编码器把图像压入低维潜变量、解码器从潜变量生成三维密度，训练后潜空间即构象谱地图，沿流形采样即可渲染「分子电影」雏形。纪律同样明确：潜维数选错会造「假构象」，连续性是假设而非结论，须与生化知识交叉验证；提高剂量受 Henderson 极限约束，只挑均匀子集则恰恰丢掉了构象信息。',
    answer: 1,
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-59',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch12',
    type: 'multiple',
    question: '（多选题）下列属于 2012–2013 年前后单颗粒冷冻电镜「分辨率革命」关键技术要素的有：',
    options: [
      '直接电子探测相机的逐事件计数，消灭读出噪声并使 DQE 从约 0.1 升至约 0.3–0.5',
      '剂量分数化把总剂量 40–60 e⁻/Å² 切成 50–60 帧电影，使束致运动可观测、可校正',
      'MotionCor（Li 等 2013 年）以全局加局部轨迹拟合对齐各帧并叠加',
      'RELION（Scheres 2012 年）以贝叶斯框架把取向、平移与类归属当隐变量边缘化',
      '电子枪亮度在此期间发生了数量级的跃升，革命主要由它推动',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      '革命是「硬件与算法交替点火」的合流：counting 相机把每个电子数清（DQE 半奈奎斯特处约 0.1 升至 0.3–0.5）、电影模式让运动可测、MotionCor 逐帧对齐、RELION 贝叶斯分类把信息榨干净——TRPV1 3.4 Å（Liao 等 2013 年）正是四者合流的产物，随后 β-半乳糖苷酶 2.2 Å（2015 年）与 apoferritin 约 1.2 Å（2020 年前后）逐级兑现。电子枪亮度（第 2 章的肖特基场发射）早已成熟稳定，并非此期的突变变量，故第五项不选。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-60',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch12',
    type: 'single',
    question:
      '某团队希望在 HeLa 细胞内解析核糖体在翻译活跃区的原位结构，目标分辨率 3–4 Å 级。最合理的技术链路是：',
    options: [
      '整细胞玻璃化后直接做单颗粒分析',
      '玻璃化冷冻——冷冻 FIB 铣薄成 100–300 nm lamella——cryo-ET 采集断层——子图平均逐级提分辨率',
      '树脂包埋后 SBF-SEM 连切连拍',
      '负染制备加电子断层扫描',
    ],
    answer: 1,
    explanation:
      '哺乳细胞厚 5–10 μm，对 300 kV 电子近乎不透明（弹性平均自由程约 100–300 nm），直接单颗粒分析不可行；树脂包埋与负染都牺牲冷冻态与分子级结构，SBF-SEM 给的是超微结构全景而非分子构象。原位链路四步走：玻璃化保真（第 6 章）——FIB 铣薄 100–300 nm（Ga 离子 30 kV，第 9 章）——冷冻断层采集体素——子图平均以六维对齐把重复分子叠到 3–4 Å 级；Mahamid 等 2016 年（Science）的 HeLa 冷冻断层正是这条路线的引路案例。',
    difficulty: 3,
  },
]
