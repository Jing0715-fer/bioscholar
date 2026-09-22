// ============================================================
// BioScholar 电子显微学测验题库 - 批次 A1（第 1–3 章）
// 覆盖 3 章，每章 5 题，共 15 题（q-electron-microscopy-1 ~ q-electron-microscopy-15）
// 题型：每章 single ×3 + truefalse ×1 + multiple ×1
// 难度：每章 difficulty 1 ×1 + difficulty 2 ×3 + difficulty 3 ×1
// 依据：本平台《电子显微学》教材第 1–3 章正文，参照
// Williams & Carter、Reimer、Frank 等经典教材常考点
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const electronMicroscopyQuizA1: QuizQuestion[] = [
  // ================= 第 1 章 绪论（q-electron-microscopy-1 ~ 5） =================
  {
    id: 'q-electron-microscopy-1',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch1',
    type: 'single',
    question: '世界上第一台透射电子显微镜建成于哪一年、由谁完成？',
    options: [
      '1926 年，布施（Busch）',
      '1931 年，诺尔（Knoll）与鲁斯卡（Ruska）',
      '1938 年，冯·阿登纳（von Ardenne）',
      '1939 年，西门子公司',
    ],
    answer: 1,
    explanation:
      '1931 年春，柏林工业大学的诺尔与博士生鲁斯卡建成世界第一台透射电子显微镜「超显微镜」；1933 年其改进机型在分辨本领上首次超越光学显微镜。布施 1926 年的贡献是证明磁线圈可聚焦电子束、创立电子光学；冯·阿登纳 1938 年制成的是首台扫描透射电镜（STEM）；西门子 1939 年交付的是首台商品电子显微镜。四个年份分别对应理论奠基、样机建成、另一支谱系与商品化，切勿混淆。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-2',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch1',
    type: 'truefalse',
    question:
      '在 100 kV 加速电压下，电子的相对论波长约为 0.0370 Å，比可见光中心波长（约 550 nm）短约十万倍。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。把 V = 100 kV 代入相对论波长公式 λ = h/√(2meV·(1+eV/2mc²))，得 λ ≈ 0.0037 nm 即 0.0370 Å；与 550 nm 相除约为 1.5×10⁵，正是「十万倍量级」（五个数量级）。这一波长优势使衍射不再构成纳米分辨的瓶颈——真正限制电子显微镜分辨率的是毫米级的透镜像差与稳定性，而非电子的波长本身。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-3',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch1',
    type: 'single',
    question: '关于 STEM 与 SEM 的技术谱系，下列叙述正确的是：',
    options: [
      '1970 年克鲁（Crewe）以场发射 STEM 首次清晰成像单个重原子',
      '1965 年奥特勒（Oatley）学派在 RCA 推出首台商品 SEM',
      '1942 年冯·阿登纳建成首台扫描电子显微镜',
      'SEM 与 STEM 均由西门子公司于 1939 年同步商品化',
    ],
    answer: 0,
    explanation:
      '克鲁 1970 年以场发射电子枪配环形探测器重建 STEM，首次清晰分辨碳膜上的单个铀原子，A 正确。B 错在机构：1965 年首台商品 SEM「Stereoscan」出自剑桥仪器公司（剑桥的奥特勒学派），而非 RCA。C 错在人物：1942 年在 RCA 制成首台可用扫描电镜的是兹沃雷金（Zworykin），冯·阿登纳 1938 年造的是首台扫描透射电镜。D 无此事：1939 年西门子商品化的是透射电镜。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-4',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch1',
    type: 'multiple',
    question: '（多选题）下列事件属于生物电子显微学发展里程碑的有：',
    options: [
      '1959 年布伦纳（Brenner）与霍恩（Horne）确立负染色法，使病毒颗粒清晰成像',
      '1975 年亨德森（Henderson）与昂温（Unwin）解出细菌视紫红质 7 Å 结构',
      '2013 年廖（Liao）等用直接电子探测相机将 TRPV1 通道解析至 3.4 Å',
      '1986 年鲁斯卡（Ruska）因电子显微镜的发明获诺贝尔物理学奖',
      '1942 年兹沃雷金（Zworykin）制成首台扫描电子显微镜',
    ],
    answer: [0, 1, 2],
    explanation:
      '前三项依次对应负染色方法学、未染色生物样品的首个准原子级洞察与直接探测相机引发的分辨率革命，是生物电镜里程碑年表的主干。第四项属仪器发明史（诺贝尔物理学奖、表彰电子显微镜的发明）；第五项属 SEM 仪器谱系——两者虽是学科大事，却不在生物电子显微学一线的里程碑序列上，故不选。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-5',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch1',
    type: 'single',
    question:
      '某课题组获得一种新型细胞器的纯化制备（直径约 300 nm、数量充足但个体形态差异明显），希望解析其在近天然状态下的三维结构。最合适的初始方案是：',
    options: [
      '单颗粒分析（SPA），直接以 3 Å 分辨率为目标',
      '玻璃化冷冻后做电子断层扫描（cryo-ET），必要时以亚断层平均提升分辨率',
      '负染二维成像即可给出原子级模型',
      '扫描电镜（SEM）观察其表面形貌',
    ],
    answer: 1,
    explanation:
      '选型三问：样品形态、制备形态、目标精度。直径约 300 nm 且个体形态差异明显，意味着结构不均一、不可重复——单颗粒分析要求大量均一颗粒的前提不成立（A 错）；负染只给轮廓且干燥变形（C 错）；SEM 仅见表面（D 错）。电子断层扫描是唯一适合非重复结构的原位三维方法，玻璃化冷冻保近天然态，亚断层平均可在均一亚结构上追分辨率——B 是正确路线（详见第 9 章）。',
    difficulty: 3,
  },
  // ================= 第 2 章 电子光学基础（q-electron-microscopy-6 ~ 10） =================
  {
    id: 'q-electron-microscopy-6',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch2',
    type: 'single',
    question: '现代冷冻电镜（cryo-EM）数据收集普遍采用的电子枪是：',
    options: [
      '加热至约 2700 K 的钨丝',
      'LaB₆ 晶体热发射枪',
      'ZrO 涂覆钨尖的肖特基场发射枪',
      '室温运行的冷场发射枪',
    ],
    answer: 2,
    explanation:
      '肖特基枪在约 1800 K 下热场协同发射：亮度达 10¹²–10¹³ A·m⁻²·sr⁻¹ 量级、能量展宽约 0.5–1 eV、发射稳定且可自动合轴，是现代 cryo-EM 的标配。钨丝与 LaB₆ 亮度不足（分别低约三至四个与两个数量级）；冷场发射单色性最好（约 0.3 eV）但发射漂移、须约 10⁻⁸ Pa 超高真空并定期闪尖，多用于高端 EELS 与低电压成像，而非通量优先的冷冻收数。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-7',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch2',
    type: 'truefalse',
    question:
      '电子枪亮度与加速电压近似成正比；同时，磁透镜的焦距随励磁电流（场强）的增大而变长。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '前半句正确：亮度 β = I/(πr²·πα²) 与加速电压近似成正比，同一支枪从 100 kV 升到 300 kV 亮度约提升三倍。后半句方向相反：短透镜公式 1/f ≈ (e/8mV)·∫B²z dz 表明焦距与场强平方成反比——励磁增强、磁场增强，焦距按平方反比缩短而非变长，「加强励磁即加强透镜」。两半句一真一假，整句判为错误。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-8',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch2',
    type: 'single',
    question: '关于球差与 Scherzer 理论，下列叙述正确的是：',
    options: [
      '旋转对称磁透镜的球差可取负值，因此能像玻璃透镜一样通过精磨形状消除',
      'Scherzer 点分辨率 δ ≈ 0.66·Cs^(1/4)·λ^(3/4)，Scherzer 欠焦 Δf_S = −1.2·(Cs·λ)^(1/2)',
      '球差使远轴电子比近轴电子聚焦更浅（等效焦距变长）',
      '球差对像弥散的贡献随孔径角 α 的一次方增长',
    ],
    answer: 1,
    explanation:
      'B 项两个公式与教材一致：300 kV、Cs = 1.2 mm 时可算出约 0.21 nm 的点分辨率与约 −58 nm 的 Scherzer 欠焦。A 错：Scherzer 定理（1936）断言旋转对称透镜的 Cs 恒为正，无法靠改形状消除，出路只有多极校正器。C 说反了：远轴射线拐得更急、焦点前移（焦距变短），Δf = Cs·α²。D 错：弥散盘 r_s ≈ Cs·α³，是三次方依赖——这正是电子透镜只敢用约 10 mrad 小孔径的根源。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-9',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch2',
    type: 'multiple',
    question: '（多选题）下列因素中，直接贡献时间相干（色差型）包络衰减的有：',
    options: [
      '电子源固有的能量展宽 ΔE',
      '加速电压涨落 ΔV/V',
      '透镜电流涨落 ΔI/I',
      '照明束会聚半角过大',
      '样品台的机械振动',
    ],
    answer: [0, 1, 2],
    explanation:
      '时间相干包络对应焦距展宽：能量不同的电子经色差聚焦到不同深度。其来源有三——枪的能量展宽 ΔE、高压涨落 ΔV/V 与透镜电流涨落 ΔI/I，三者按 r_c ≈ Cc·α·(ΔE/E) 的等效口径一起进入焦散预算，故前三项正确。会聚半角过大属于空间相干包络（各入射方向的 χ 失配）；机械振动属于漂移包络——两者同样压制高频，但机制与归属不同，须分清。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-10',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch2',
    type: 'single',
    question:
      '一台 300 kV 场发射透射电镜连续收数数天后，操作者发现束斑停留处逐渐变暗、低倍下可见斑点状污渍，冷冻载网上还出现来源不明的冰晶。最合理的处置组合是：',
    options: [
      '直接提高加速电压，以更强穿透力掩盖缺陷',
      '检查液氮杜瓦液位与冷台热稳定，确认防污染冷指正常工作，并对载网与样品杆做等离子清洗',
      '加大束流把污染物「烧掉」',
      '把数据收集改到白天人流密集时段以便实时监控',
    ],
    answer: 1,
    explanation:
      '症状组合指向两类典型故障：束斑处渐暗与斑点污渍是碳氢污染的签名（残余碳氢在电子束辐解下聚合淀积）；来源不明的冰晶则提示冷指失效或「冰转移」（水汽在冷表面间再沉积）。处置正对应液位与热稳定、冷指确认、等离子清洗这条线。提高电压不解决污染；大束流只会加速碳淀积并损伤样品；白天人流反而带来更大的振动与声学干扰——高分辨收数的传统恰恰是避开人流时段。',
    difficulty: 3,
  },
  // ================= 第 3 章 透射电镜的成像原理（q-electron-microscopy-11 ~ 15） =================
  {
    id: 'q-electron-microscopy-11',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch3',
    type: 'single',
    question: '弱相位物体近似（WPOA）下，样品对出射电子波引入的相位偏移为：',
    options: [
      'φ(x) = σ·V_p(x)·t，正比于投影电位与厚度的乘积',
      'φ(x) 与样品厚度无关，仅由加速电压决定',
      'φ(x) = πλg²Δf，由离焦量与空间频率决定',
      'φ(x) = Cs·α²，由球差与孔径角决定',
    ],
    answer: 0,
    explanation:
      'WPOA 下出射波写作 ψ = exp(iφ) ≈ 1 + iφ，其中 φ(x) = σ·V_p(x)·t：σ 为与电压相关的相互作用常数（200–300 kV 约 0.006–0.007 rad·V⁻¹·nm⁻¹），V_p 为沿束方向的投影电位，t 为厚度——相位偏移是样品的属性，随厚度线性积累。离焦与球差进入的是成像系统的像差函数 χ(g)，属于「把相位差翻译为强度差」的仪器侧机制，不是样品本身引入的相位。',
    difficulty: 1,
  },
  {
    id: 'q-electron-microscopy-12',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch3',
    type: 'truefalse',
    question:
      '在无像差、严格正焦的理想透镜下，纯相位物体的像强度处处相同；因此必须借助离焦或像差，才能把相位差转化为可观察的强度差。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。这就是「相位物体不可见悖论」：强度是出射波模的平方，而 |exp(iφ)|² 恒等于 1，无论相位如何分布、像面强度都均匀。要看见相位，必须让物波与参考波以可控的相对相位干涉——光学显微镜的答案是泽尼克相衬板（1953 年诺贝尔物理学奖），电子显微镜的答案是离焦与像差：它们以 χ(g) 给各频率附加相位差，充当天然的泽尼克板，这正是衬度传递函数理论的出发点。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-13',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch3',
    type: 'single',
    question: 'STEM 的 HAADF（高角环形暗场）探测器成像的核心特征是：',
    options: [
      '像亮度近似按原子序数的 1.6–2 次方增长，原子柱可直接判读且不随离焦反号',
      '只收集小于约 10 mrad 的近轴电子，以相位衬度为主',
      '属相干成像，亮度正比于结构因子的平方',
      '像亮度随原子序数的平方根增长，且与晶体取向完全无关',
    ],
    answer: 0,
    explanation:
      'HAADF 收集内角大于约 50–100 mrad 的大角卢瑟福散射，属非相干的 Z 衬度成像：亮度近似按 Z 的 1.6–2 次方增长，重原子亮、轻原子暗，原子柱位置即亮度峰，可直接读出且不会像相位衬度那样随离焦黑白反转——A 正确。B 描述的是明场探测器；C 把衍射（相干）语言错安在非相干成像上；D 的标度与「取向无关」均不成立（沟道效应等仍会影响强度）。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-14',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch3',
    type: 'multiple',
    question: '（多选题）关于衬度传递函数（CTF），下列叙述正确的有：',
    options: [
      'CTF 为零的频率处，该空间频率的结构信息无法通过这张照片传递',
      '非晶冰或非晶碳功率谱中的 Thon 环可用来测定实际欠焦量与像散',
      '其他条件不变时，增大欠焦幅度会使第一零点向低频方向移动',
      '混合传递函数中的振幅衬度分量 Q（cos χ 项）会把全部零点彻底消除',
    ],
    answer: [0, 1, 2],
    explanation:
      '零点即正弦曲线过零处，信息湮灭，只能靠不同欠焦的数据互补或算法补救（A 对）。Thon 环是 CTF 绝对值平方的可视化，ctffind 类软件据此拟合欠焦与像散，是冷冻电镜工作流的基石（B 对）。第一零点 g₁ ≈ (1/λ|Δf|)^(1/2)，欠焦绝对值增大则 g₁ 减小、即向低频内移（C 对）。D 错：Q 的 cos χ 项只在低频区填补 −sin χ 的空档，使低频轮廓可辨，并不能消除任何零点——零点处的总传递依旧为零。',
    difficulty: 2,
  },
  {
    id: 'q-electron-microscopy-15',
    subjectId: 'electron-microscopy',
    chapterId: 'electron-microscopy-ch3',
    type: 'single',
    question:
      '某 300 kV 冷冻电镜数据集统一在 Δf = −2.0 μm 收集（λ = 0.00197 nm、Cs = 1.2 mm，忽略高阶项，第一零点约在 0.50 nm⁻¹，对应周期约 2 nm）。若后续分析显示目标结构在约 1 nm 尺度存在关键细节，最合理的补救策略是：',
    options: [
      '在同一欠焦下成倍加大总剂量，让零点频率的信息「曝光充分」',
      '补充收集欠焦绝对值更小（如 −0.5 至 −1.0 μm）的数据，使两套数据的第一零点错开、频域互补，并配合算法 CTF 修正',
      '把加速电压提高到 500 kV 以上以缩短波长',
      '改用 HAADF 探测器的扫描模式消除零点',
    ],
    answer: 1,
    explanation:
      '零点处传递恒为零——加大剂量只是把「零」放大成更大的零，A 无效。欠焦 −0.5 μm 的第一零点约 1.0 nm⁻¹（周期约 1 nm），恰覆盖目标细节所在频段，与 −2.0 μm 数据的零点错开，正是「欠焦系列」的标准逻辑，再配合混合 CTF 与包络修正即可频域合并（B 正确，参见第 7–8 章）。常规仪器电压限于 300 kV 且改动牵动整条光路（C 不现实）；HAADF 属扫描非相干成像，与单颗粒相位衬度生态不匹配（D 错）。',
    difficulty: 3,
  },
]
