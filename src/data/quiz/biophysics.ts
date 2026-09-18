// ============================================================
// 生物物理学测验题库
// 覆盖 10 章，每章 4–5 题，共 45 题
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const biophysicsQuiz: QuizQuestion[] = [
  // ---------- 第一章 ----------
  {
    id: 'q-biophysics-01',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch1',
    type: 'single',
    question:
      '水在室温下的相对介电常数约为 80。下列关于其生物学意义的说法，正确的是：',
    options: [
      '使离子间的静电吸引增强约 80 倍，促进离子对形成',
      '将离子间的静电作用削弱约 80 倍，有利于带电生物分子溶解与解离',
      '使氢键完全无法形成，蛋白质只能靠疏水作用折叠',
      '使水的比热容显著降低，不利于细胞温度稳定',
    ],
    answer: 1,
    explanation:
      '由库仑定律 F ∝ 1/ε，水的高介电常数把真空中两点电荷的作用力削弱约 80 倍，因此 Na⁺、Cl⁻、ATP⁴⁻ 等带电物种能稳定溶解并解离。氢键恰恰依赖水的结构而非被消除；水的高比热容来自氢键网络的动态断裂与重组，与介电常数无直接关系。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-02',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch1',
    type: 'single',
    question:
      '自由连接链（无规行走）模型中，聚合度为 N、链段长度为 b 的高斯链，其均方末端距为：',
    options: ['⟨R²⟩ = b²', '⟨R²⟩ = N·b', '⟨R²⟩ = N·b²', '⟨R²⟩ = N²·b²'],
    answer: 2,
    explanation:
      '自由连接链的末端距是 N 个独立随机链段矢量之和，各链段间无关联，故均方末端距等于各链段平方和：⟨R²⟩ = N·b²。因此链的典型尺寸按 N^(1/2) 增长，远小于完全伸展长度 Nb；若为 N²b² 则相当于完全伸展且完全有序。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-03',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch1',
    type: 'single',
    question: '双链 DNA 的持续长度（persistence length）约为：',
    options: ['0.5 nm', '5 nm', '50 nm', '500 nm'],
    answer: 2,
    explanation:
      '双链 DNA 的持续长度约 50 nm，相当于约 150 bp。这意味着 DNA 是半柔性链：在 50 nm 以内近似刚性杆，超过该尺度开始显著弯曲。对应的 Kuhn 链段长度约为 100 nm（约 300 bp）。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-04',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch1',
    type: 'truefalse',
    question:
      '聚合物线团的 Flory 指数在良溶剂中约为 3/5，在 θ 溶剂中为 1/2，在不良溶剂的坍缩球中为 1/3。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。Flory 标度律 R ~ bN^ν：θ 溶剂中排斥与吸引抵消，ν = 1/2（理想高斯链）；良溶剂中排除体积为正，ν ≈ 3/5（更精确 0.588）；不良溶剂中链坍缩为致密球，ν = 1/3。Flory 指数只依赖溶剂条件与空间维数，与化学细节无关，是普适性的典范。',
    difficulty: 2,
  },
  // ---------- 第二章 ----------
  {
    id: 'q-biophysics-05',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch2',
    type: 'single',
    question:
      'Anfinsen 用核糖核酸酶 A（RNase A）完成的变性–复性实验，其核心结论是：',
    options: [
      '蛋白质折叠必须依赖伴侣蛋白提供模板',
      '氨基酸一级序列包含足够信息决定天然三维结构，天然态是自由能极小的自组织结果',
      '二硫键必须在折叠完成后才形成',
      '蛋白质的天然结构是动力学陷阱，与热力学无关',
    ],
    answer: 1,
    explanation:
      'Anfinsen 在 8 mol/L 尿素与 β-巯基乙醇中使 RNase A 完全去折叠并还原二硫键，去除变性剂后酶自发复性并恢复活性，由此提出热力学假说：一级序列唯一决定天然构象，折叠是自组织过程。他因此获 1972 年诺贝尔化学奖。伴侣蛋白只是提高折叠产率，不改变热力学终点。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-06',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch2',
    type: 'single',
    question: '关于蛋白质折叠中间体"熔球态（molten globule）"，下列描述错误的是：',
    options: [
      '二级结构基本完整，远紫外圆二色谱接近天然态',
      '疏水核心松散、侧链堆积未定型，近紫外 CD 处于去折叠水平',
      '尺寸比天然态膨胀 10–30%',
      '与疏水探针 ANS 完全不结合，疏水面深埋内部',
    ],
    answer: 3,
    explanation:
      '熔球态的标志之一恰是能与 ANS 等疏水荧光探针强烈结合，因为其疏水簇部分暴露于溶剂。其余三项均为熔球态特征：二级结构保留、三级堆积松散、尺寸膨胀 10–30%。熔球态是许多蛋白的共性早期折叠中间体。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-07',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch2',
    type: 'single',
    question: '两态折叠蛋白的熔解温度 Tm 定义为：',
    options: [
      '去折叠速率最大的温度',
      '去折叠分数为 50%、即 ΔG = 0 的温度',
      '蛋白开始聚集的温度',
      'ΔH 达到最大的温度',
    ],
    answer: 1,
    explanation:
      'Tm 是平衡态指标：此时天然态与去折叠态各占 50%，折叠自由能 ΔG(Tm) = 0。变性曲线在 Tm 处呈 S 形拐点，曲线陡峭程度反映协同性。Tm 与动力学速率无直接定义关系。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-08',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch2',
    type: 'truefalse',
    question:
      'Levinthal 悖论的计算结果表明，蛋白质折叠必须是逐构象的随机搜索。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '恰恰相反。Levinthal 估计 100 肽的构象数约 10⁴⁸，即使每构象仅 10⁻¹³ s，随机遍历也远超宇宙年龄，而真实折叠仅需毫秒—秒级。结论是折叠**不可能**是盲目随机搜索，而必须沿能量面上大幅收窄的下坡通道进行——这一悖论直接催生了能量景观（折叠漏斗）理论。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-09',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch2',
    type: 'single',
    question: '关于 GroEL–GroES 伴侣系统，下列说法正确的是：',
    options: [
      'GroEL 是单环七聚体，通过改变底物的折叠路径发挥作用',
      'GroEL–GroES 循环中，ATP 结合使腔壁翻转为亲水，多肽在密闭笼腔内折叠以避免聚集',
      'GroEL 直接催化肽键的顺反异构化',
      'GroEL 只对分泌蛋白有效',
    ],
    answer: 1,
    explanation:
      'GroEL 是 14 亚基背靠背双环（每环 7 亚基），空腔直径约 4.5 nm。底物先被疏水内壁捕获；ATP 结合与 GroES 扣盖引发构象变化，腔壁翻转为亲水，多肽释入"无限稀释"的笼中折叠——通过动力学隔离抑制聚集，提高折叠产率，但不改变折叠路径与热力学。',
    difficulty: 2,
  },
  // ---------- 第三章 ----------
  {
    id: 'q-biophysics-10',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch3',
    type: 'single',
    question: '下列哪种改变会使磷脂双层的相变温度 Tm 显著升高？',
    options: [
      '烃链中引入顺式双键',
      '把饱和链由 14:0 换为 18:0',
      '降低链长，把 16:0 换为 12:0',
      '加入胆固醇至 30 mol%',
    ],
    answer: 1,
    explanation:
      '饱和链每增加一个 CH₂，Tm 升高约 5–8 °C（DSPC 18:0 为 55 °C，DMPC 14:0 为 24 °C）。顺式双键因刚性扭结阻碍密堆积而使 Tm 降低 20 °C 以上；缩短链也降低 Tm；胆固醇则宽化并最终消除相变，形成液态有序相。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-11',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch3',
    type: 'single',
    question:
      'Helfrich 膜弯曲能量 E = ∫[(κ/2)(2H − C₀)² + κ̄K + σ]dA 中，自发曲率 C₀ 的物理来源是：',
    options: [
      '膜两侧成分不对称或嵌入蛋白的固有弯形',
      '膜的热涨落幅度',
      '膜蛋白的侧向扩散速率',
      '脂分子烃链的长度分布',
    ],
    answer: 0,
    explanation:
      'C₀ 反映膜在无外力时的固有弯向：仅在一侧单层插入锥形脂、两层脂数不对称或嵌入蛋白形状不对称都会产生自发曲率。出芽、管化等膜形态改变正是通过局部改变 C₀ 实现的。热涨落、扩散速率与链长分布不直接进入 C₀ 项。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-12',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch3',
    type: 'truefalse',
    question:
      '脂筏是鞘磷脂与胆固醇富集形成的液态有序（Lo）相微区，其中烃链有序但脂分子仍可侧向流动。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。脂筏处于液态有序相：链伸展有序（接近凝胶相）但分子仍能侧向扩散（液态流动性），尺寸约 10–200 nm。Lo 相与液态无序（Ld）相间的线张力把筏收成圆形微区，为信号分子提供"浮动的平台"。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-13',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch3',
    type: 'single',
    question:
      '关于红细胞膜力学，直径约 8 μm 的红细胞能反复通过 3–4 μm 的毛细血管，其物理基础是：',
    options: [
      '脂双层可拉伸 30% 而不破裂',
      '血影蛋白网架使膜具有剪切弹性，且膜面积过剩约 40%，变形靠多余膜的重排而非拉伸',
      '红细胞通过前先把细胞质挤出',
      '毛细血管壁主动扩张以容纳红细胞',
    ],
    answer: 1,
    explanation:
      '红细胞膜 KA 约 0.5 N/m，拉大面积 2–3% 即破裂，因此不能靠拉伸。其可变形性来自：血影蛋白网架提供剪切模量（约 5–10 μN/m），而表面积比同体积球多约 40%，细胞通过时把多余膜"折叠"成子弹形/降落伞形。变形能力下降的细胞会被脾脏滞留清除。',
    difficulty: 3,
  },
  // ---------- 第四章 ----------
  {
    id: 'q-biophysics-14',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'single',
    question: '驱动蛋白 kinesin-1 沿微管行走的步长及其与 ATP 的耦合关系是：',
    options: [
      '8 nm，每步水解 1 个 ATP（1:1 机械化学耦合）',
      '36 nm，每步水解 2 个 ATP',
      '5–10 nm，步长随负荷连续变化',
      '8 nm，每步水解 3 个 ATP',
    ],
    answer: 0,
    explanation:
      'kinesin-1 双手交替行走，步长恒定 8 nm，恰为微管原聚体（tubulin 二聚体）重复周期；低 ATP 浓度下步进频率严格正比于 [ATP]，证明每步水解 1 个 ATP 的 1:1 机械化学耦合。36 nm 是 myosin V 沿肌动蛋白双螺旋的步长。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-15',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'single',
    question: '关于 F₁F₀-ATP 合酶，下列说法正确的是：',
    options: [
      'F₁ 部分每旋转 360° 合成 1 个 ATP',
      'F₁ 部分 3 个催化位点每旋转 360° 合成 3 个 ATP，每步转 120°',
      'F₁ 直接利用葡萄糖的化学能合成 ATP',
      'ATP 合酶只能单向旋转，不能水解 ATP',
    ],
    answer: 1,
    explanation:
      'F₁ 是旋转催化机：3 个 β 催化位点按 120° 相位差工作，每转 360° 合成 3 个 ATP（低 ATP 下可见 80°+40° 的子步）。F₀ 由离子梯度驱动旋转；反向时 F₁ 可水解 ATP 把离子泵回——这是一台可逆的旋转马达，实测转矩约 45 pN·nm。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-16',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'truefalse',
    question:
      '根据 Feynman 棘轮的分析，一个与单一热源平衡且无耗散的布朗棘轮装置可以从热噪声中定向提取功。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。若装置整体与单一温度的热源平衡且无化学耗散，细致平衡使正反向跃迁概率相等，平均做功为零（第二定律）。分子马达的定向性来自 ATP 水解的不可逆性打破细致平衡——以化学自由能耗散为代价"采购"定向运动。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-17',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'single',
    question: '肌肉收缩的摆动横桥模型中，单个横桥产生一次力冲程的机制是：',
    options: [
      '肌球蛋白头部整体沿细丝滑动 36 nm',
      'Pi 与 ADP 释放引发肌球蛋白杠杆臂摆动 5–10 nm，拖动细丝',
      '粗丝与细丝同时缩短',
      'Ca²⁺ 直接推开横桥',
    ],
    answer: 1,
    explanation:
      '横桥循环：头部携带 ADP·Pi 强结合肌动蛋白后，Pi 与 ADP 依次释放，释放的化学能驱动杠杆臂（轻链结合区）摆动 5–10 nm，单个冲程力约 3–5 pN；随后新 ATP 结合使头部脱离、水解 ATP 重新"上弦"。滑动丝学说早已证明收缩来自粗细丝相对滑行而非自身缩短。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-18',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch4',
    type: 'multiple',
    question: '下列关于分子马达的叙述，正确的有：',
    options: [
      'kinesin-1 是过程性马达，单分子可持续行走约 100 步',
      'myosin II 单体占空比低（约 4%），需在肌肉中集体做功',
      '细菌鞭毛马达以质子动力势驱动，转速可达每秒千转量级',
      '所有分子马达都以 ATP 水解为唯一能量来源',
    ],
    answer: [0, 1, 2],
    explanation:
      'D 错误：F₀-ATP 合酶与细菌鞭毛马达以离子（H⁺/Na⁺）电化学梯度为能源，每离子约 2–4 k_BT。A、B、C 均为经典结论：kinesin-1 过程性行走（双手交替，单分子 ~1 μm 行程）；myosin II 单头停留时间极短故非过程性，肌肉靠数百头接力；鞭毛马达高载荷下转矩约 1300 pN·nm、低载荷可达 ~10³ rev/s。',
    difficulty: 3,
  },
  // ---------- 第五章 ----------
  {
    id: 'q-biophysics-19',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'single',
    question:
      '某反应的 ΔG°′ = 0。当反应商 Q = 100 时（25 °C，R = 8.315 J·mol⁻¹·K⁻¹），该反应的 ΔG 为：',
    options: [
      '0，仍处于平衡',
      '约 +11.4 kJ/mol，正向不自发',
      '约 −11.4 kJ/mol，正向自发',
      '无法确定，需要知道活化能',
    ],
    answer: 1,
    explanation:
      'ΔG = ΔG°′ + RT lnQ = 0 + (8.315 × 298) × ln100 ≈ 2477 × 4.605 ≈ +11.4 kJ/mol。Q > Keq（此处 Keq = 1）时反应逆向进行。活化能决定速率而非方向。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-20',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'single',
    question:
      '已知 E°′(NAD⁺/NADH) = −0.320 V，E°′(1/2 O₂/H₂O) = +0.816 V。线粒体中 NADH 将 2 个电子传给 O₂ 的标准自由能变化约为：',
    options: [
      '−219 kJ/mol',
      '−54.8 kJ/mol',
      '+219 kJ/mol',
      '−22 kJ/mol',
    ],
    answer: 0,
    explanation:
      'ΔE°′ = E°′(受体) − E°′(供体) = 0.816 − (−0.320) = 1.136 V；ΔG°′ = −nFΔE°′ = −2 × 96485 × 1.136 / 1000 ≈ −219 kJ/mol。这一能量足以驱动数个 ATP 的合成（细胞内每 ATP 约 50 kJ/mol）。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-21',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'truefalse',
    question:
      '生物体通过不断输入自由能并向环境排出更多的熵来维持自身低熵结构，因而不违反热力学第二定律。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。生命是远离平衡的开放系统："生命以负熵为生"的准确含义是从环境进口负熵、向环境出口更大的熵（热与低能产物）。生物+环境的总熵仍单调增加，第二定律完好无损。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-22',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch5',
    type: 'single',
    question: '关于 ATP 的水解自由能，下列说法正确的是：',
    options: [
      '标准条件下 ΔG°′ = −30.5 kJ/mol，细胞内实际约 −50 ~ −60 kJ/mol',
      '标准条件下 ΔG°′ = −61.9 kJ/mol',
      'ATP 是已知水解释放能量最多的磷酸化合物',
      'ΔG°′ 与 [ATP]/[ADP] 比值无关',
    ],
    answer: 0,
    explanation:
      'ATP → ADP + Pi 的 ΔG°′ = −30.5 kJ/mol，处于磷酸化合物能量表的"中部"；磷酸烯醇式丙酮酸（−61.9）与 1,3-二磷酸甘油酸（−49.4）更负。活细胞中 [ATP]/[ADP] 维持约 10³，使实际水解自由能达 −50 ~ −60 kJ/mol。',
    difficulty: 1,
  },
  // ---------- 第六章 ----------
  {
    id: 'q-biophysics-23',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'single',
    question: '光镊捕获介电小球的核心作用力及其力学特点是：',
    options: [
      '散射力，方向总是沿光传播方向',
      '梯度力，把球拉向光强极大处，小位移下近似弹簧（F = −k·Δx）',
      '万有引力，与光强无关',
      '光压强，仅与激光颜色有关',
    ],
    answer: 1,
    explanation:
      '梯度力把高折射率小球拉向焦点（光强极大处），形成三维势阱，小位移范围内近似线性弹簧，刚度典型 0.01–1 pN/nm。散射力沿传播方向推、使阱心稍偏离焦点，是次要但必须考虑的成分。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-24',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'single',
    question: '单分子 FRET 作为"分子尺"测距的灵敏范围约为：',
    options: ['0.1–1 nm', '1–10 nm', '10–100 nm', '100–1000 nm'],
    answer: 1,
    explanation:
      'FRET 效率 E = 1/(1+(r/R₀)⁶)，Förster 半径 R₀ 典型 4–6 nm，转移效率对距离的灵敏区间为 1–10 nm——恰好覆盖蛋白质构象变化、激酶翻折、转录泡开合等生物事件的尺度。更大尺度需用超定位/超分辨，更小尺度可用 EPR/交联等。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-25',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'truefalse',
    question:
      '用原子力显微镜力谱拉伸双链 DNA 并以蠕虫状链（WLC）模型拟合，得到的持续长度约为 50 nm。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。WLC 模型 F(x) = (k_BT/p)[1/(2(1−x/L)²) + x/L − 1/2]，其中 p 为持续长度、L 为轮廓长度。对双链 DNA 的拉伸曲线拟合给出 p ≈ 50 nm，与溶液静态测量一致，交叉验证了聚合物弹性理论。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-26',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'single',
    question: 'TIRF 显微镜压低背景噪声的物理手段是：',
    options: [
      '用针孔挡住焦外光',
      '全内反射产生的隐失波只激发距玻片约 100–200 nm 内的分子',
      '用双光子吸收的非线性激发',
      '对样品进行冷冻固定',
    ],
    answer: 1,
    explanation:
      'TIRF 利用玻璃/水界面大于临界角的全反射，在水侧产生隐失波，其强度沿深度以约 100–200 nm 特征长度指数衰减——只照亮贴壁薄层内的分子，背景荧光降低 1–2 个数量级。针孔是共聚焦的方案；非线性激发是双光子显微的方案。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-27',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch6',
    type: 'single',
    question: '膜片钳技术记录单通道电流的分辨率可达：',
    options: [
      'μA（10⁻⁶ A）级',
      'nA（10⁻⁹ A）级',
      'pA（10⁻¹² A）级，1 pA 约对应每秒 6×10⁶ 个单价离子',
      'fA（10⁻¹⁵ A）级',
    ],
    answer: 2,
    explanation:
      'Neher 与 Sakmann 借助 GΩ 级高阻封接把单通道电流与背景隔离，分辨率达 pA 级——1 pA 对应约 6×10⁶ 单价离子每秒。据此可测单通道电导（pS 级）并分析门控驻留时间分布。',
    difficulty: 2,
  },
  // ---------- 第七章 ----------
  {
    id: 'q-biophysics-28',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch7',
    type: 'single',
    question:
      '37 °C 下某神经元 [K⁺]o = 5 mM、[K⁺]i = 140 mM。其钾离子平衡电位约为（61.5/z 系数，z = 1）：',
    options: ['约 −90 mV', '约 +90 mV', '约 −30 mV', '约 0 mV'],
    answer: 0,
    explanation:
      'E_K = 61.5 × log₁₀(5/140) = 61.5 × (−1.447) ≈ −89 mV。钾离子平衡电位为负，是静息膜电位（−60 ~ −70 mV）的主要锚定点；静息电位因存在少量 Na⁺ 通透而略高于 E_K。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-29',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch7',
    type: 'single',
    question:
      'Hodgkin–Huxley 模型中 Na⁺ 电流项写成 ḡ_Na·m³h·(V − E_Na)，其中 m³h 的含义是：',
    options: [
      'Na⁺ 通道有 3 个快速激活粒子和 1 个失活粒子，全部就位才开放',
      '通道需要水解 3 个 ATP',
      'Na⁺ 电流正比于浓度的三次方',
      'm、h 分别为膜的质量与厚度',
    ],
    answer: 0,
    explanation:
      'HH 假设 Na⁺ 通道开放需要 3 个 m 粒子（快速激活，τ_m ≈ 0.1 ms）与 1 个 h 粒子（失活，τ_h ≈ 1 ms）同时就位，故开放概率 ∝ m³h；K⁺ 电流为 n⁴（4 个慢激活粒子，τ_n 数 ms）。后来的通道结构生物学"兑现"了该图像：每电压传感器对应一个门控粒子，四聚体 K⁺ 通道的四个 S4 恰给出 n⁴。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-30',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch7',
    type: 'truefalse',
    question:
      '有髓神经纤维上动作电位呈跳跃式传导，即在郎飞氏结处再生、结间段被动扩布，因此速度更快且代谢更省。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。髓鞘把可兴奋膜压缩到郎飞氏结，AP 在结上"点火"、结间以近无损的局部电流跳跃推进，速度与直径线性、人体可达 100 m/s 以上；离子只在结区进出，每次 AP 的代谢代价降低约两个数量级。脱髓鞘（如多发性硬化）即"电缆漏电"导致传导阻滞。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-31',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch7',
    type: 'single',
    question: '电缆理论中，膜时间常数 τ 与空间常数 λ 的定义分别是：',
    options: [
      'τ = r_m·c_m，λ = √(r_m/r_i)',
      'τ = r_i·c_m，λ = r_m/r_i',
      'τ = c_m/r_m，λ = √(r_i/r_m)',
      'τ = r_m/c_m，λ = √(c_m/r_i)',
    ],
    answer: 0,
    explanation:
      '膜时间常数 τ = r_m·c_m 决定电位对阶跃电流的响应快慢（时间整合窗，典型 5–20 ms）；空间常数 λ = √(r_m/r_i) 决定被动电位沿突起指数衰减的长度（典型树突 0.1–1 mm）。粗突起、高膜阻、髓鞘化都会增大 λ。',
    difficulty: 3,
  },
  // ---------- 第八章 ----------
  {
    id: 'q-biophysics-32',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch8',
    type: 'single',
    question: 'KcsA 钾通道实现 K⁺/Na⁺ 高选择性的核心物理机制是：',
    options: [
      '滤器孔径比 Na⁺ 略小，Na⁺ 物理上进不去',
      '滤器羰基氧几何精确匹配 K⁺ 水化壳，使 K⁺ 脱水能被配位能补偿而 Na⁺ 不能',
      '通道带负电，排斥半径更小的 Na⁺',
      'Na⁺ 被主动泵回胞外',
    ],
    answer: 1,
    explanation:
      '选择性滤器由 GYG 序列的 8 个羰基氧（每位点上下两层各 4 个）配位 K⁺，几何上"模仿"K⁺ 的水化壳，使 K⁺ 脱水损失的水化能被蛋白配位能近乎等量补偿；较小的 Na⁺（半径约 1.0 Å vs K⁺ 1.35 Å）在氧环中悬空、配位不足，脱水能无法补偿。结果 P_K/P_Na > 10⁴——这是配位化学的尺寸匹配—能量补偿，而非简单孔径筛分。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-33',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch8',
    type: 'single',
    question: '关于电压门控通道的 S4 螺旋与门控电流，下列说法错误的是：',
    options: [
      'S4 每隔 3 个残基有一个带正电的精氨酸',
      '去极化使 S4 外移旋转，相当于每通道移动约 12–16 个元电荷',
      '门控电流是离子通过开放孔道时形成的电流',
      '门控电流先于离子电流出现',
    ],
    answer: 2,
    explanation:
      'C 混淆了两种电流：门控电流是门控电荷（S4 精氨酸）在电场中位移产生的微小非线性**电容电流**，而非离子流；1973 年 Armstrong 与 Bezanilla 在 TTX 阻断离子流后分离出该电流，直接证实带电传感器位移的假说。A、B、D 均正确。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-34',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch8',
    type: 'truefalse',
    question:
      '单通道记录中，同一离子通道在恒定条件下开放与关闭的驻留时间是随机分布的，符合马尔可夫状态模型的指数分布。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。门控本质上是分子构象的随机跃迁：单个事件的驻留时间不可预测，但大量事件的驻留时间分布服从指数（或多指数）规律，与马尔可夫状态模型（C₁→C₂→O 等）的速率常数对应。开放概率 P_o 与单通道电导 g 一起，通过 I = N·P_o·g·(V−E_rev) 连接单分子与全细胞电流。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-35',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch8',
    type: 'single',
    question: '河豚毒素（TTX）阻断神经兴奋的机制是：',
    options: [
      '从胞内侧堵塞 K⁺ 通道',
      '其胍基从胞外侧卡入 Na⁺ 通道选择性滤器外口，封堵孔道',
      '耗竭突触囊泡中的神经递质',
      '不可逆水解膜磷脂',
    ],
    answer: 1,
    explanation:
      'TTX 的带正电胍基模仿 Na⁺，从胞外侧进入 Na⁺ 通道滤器外口并以纳摩尔级亲和力卡位封孔；神经元 Nav 为 TTX 敏感型而心肌 Nav1.5 相对不敏感。TTX 也是 Hodgkin–Huxley 实验中分离钠电流的经典工具。局麻药（利多卡因）则从胞内侧结合开放/失活态，作用位点不同。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-36',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch8',
    type: 'single',
    question: '关于烟碱型乙酰胆碱受体（nAChR），下列说法正确的是：',
    options: [
      '是单体蛋白，一个 ACh 结合位点即可开放',
      '五聚体结构，两个 ACh 结合引发别构构象转换使 M2 围成的孔道开放',
      '开放后立即脱敏，不能再开放',
      '开放电导约 250 pS，属大电导通道',
    ],
    answer: 1,
    explanation:
      'nAChR 为五聚体（肌肉型 α₂βγδ），两个 ACh 结合位点位于胞外 α/非 α 界面；配体结合能经别构转换传到跨膜区，使 M2 螺旋围成的疏水闸门张开（约 7–8 Å），单通道电导约 40 pS。脱敏是持续暴露配体后的另一关闭构象，并非立即发生。',
    difficulty: 2,
  },
  // ---------- 第九章 ----------
  {
    id: 'q-biophysics-37',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch9',
    type: 'single',
    question:
      '以可见光 λ = 550 nm 成像、使用 NA = 1.4 的油镜，Abbe 衍射极限给出的分辨率为：',
    options: ['约 20 nm', '约 100 nm', '约 200 nm', '约 1 μm'],
    answer: 2,
    explanation:
      'd = λ/(2NA) = 550/(2×1.4) ≈ 196 nm ≈ 200 nm。这就是"衍射极限"的由来：病毒（~100 nm）、核糖体（~25 nm）与多数蛋白复合物都被挡在传统光学显微镜之外，也是超分辨技术（2014 年诺奖）要突破的边界。',
    difficulty: 1,
  },
  {
    id: 'q-biophysics-38',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch9',
    type: 'single',
    question: '关于绿色荧光蛋白（GFP），下列说法错误的是：',
    options: [
      '由 11 条 β 折叠围成桶状，生色团包埋于桶心',
      '生色团由 Ser65–Tyr66–Gly67 三肽自催化环化—氧化—脱水形成，无需外源辅因子',
      '天然 GFP 发射峰约为 509 nm（绿色）',
      '生色团必须由蓝光激发，红外激发无效',
    ],
    answer: 3,
    explanation:
      'A、B、C 均为 GFP 的经典事实（2008 年诺贝尔化学奖：下村脩、Chalfie、钱永健）。D 过于绝对：工程化变体（如采用双光子激发的近红外实验、红移变体）已突破该限制；且激发波长与生色团电子结构相关，并非只有蓝光可用。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-39',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch9',
    type: 'single',
    question: '将超分辨技术与其实际可达的横向分辨率正确配对的是：',
    options: [
      'STED → ~20–50 nm；PALM/STORM → ~20 nm；SIM → ~100 nm',
      'STED → ~200 nm；PALM/STORM → ~100 nm；SIM → ~50 nm',
      'STED → ~2 nm；PALM/STORM → ~200 nm；SIM → ~20 nm',
      '三者均只能达到 ~100 nm',
    ],
    answer: 0,
    explanation:
      'STED 用环形损耗激光把焦斑外围荧光熄灭，只剩 ~λ/20 的发光核（20–50 nm）；PALM/STORM 逐帧定位稀疏单分子后叠加重构（~20 nm）；SIM 借结构光照明把分辨率线性提升约 2 倍（~100 nm）。三者机理不同、取舍不同，共同突破 Abbe 极限（2014 年诺贝尔化学奖）。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-40',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch9',
    type: 'truefalse',
    question:
      '冷冻电镜（Cryo-EM）利用玻璃态冰保存近生理水环境，其成像衬度主要来自相位衬度。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。样品在液乙烷中急速冷冻（>10⁵ K/s）形成玻璃态冰，避免冰晶损伤；电子被原子静电势场散射后在欠焦条件下与直接波干涉，形成相位衬度。配合单粒子分析的角度重构与 CTF 修正，直接电子探测器把分辨率推向 2–4 Å（2017 年诺贝尔化学奖：Dubochet、Frank、Henderson）。',
    difficulty: 2,
  },
  // ---------- 第十章 ----------
  {
    id: 'q-biophysics-41',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch10',
    type: 'single',
    question: '关于 DNA 数据存储，下列说法正确的是：',
    options: [
      '每个碱基可编码 1 bit 信息',
      '4 种碱基相当于 4 进制字母表，每碱基 2 bit；1 g DNA 理论可存约 215 PB',
      'DNA 存储必须把信息翻译成氨基酸序列',
      'DNA 存储的主要优势是随机读写速度快',
    ],
    answer: 1,
    explanation:
      '4 种碱基 = 2 bit/碱基；理论密度约 215 PB/g（比硬盘高 6–7 个数量级）。实用方案以寡核苷酸为单位，含索引 + 载荷 + 纠错码（Reed–Solomon），须避免长同聚物与 GC 失衡。DNA 的优势是密度与持久性（归档冷存储），瓶颈恰是读写速度与随机寻址成本。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-42',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch10',
    type: 'single',
    question: '细菌趋化网络"完美适应"的实现机制是：',
    options: [
      '感受器数量随刺激增加而增殖',
      '受体甲基化水平充当积分器：CheR 加甲基、CheB~P 去甲基，持续把活性修正回设定点',
      '细胞记忆浓度并在 DNA 中写入记录',
      '翻滚频率对浓度的导数响应只持续几毫秒',
    ],
    answer: 1,
    explanation:
      '积分反馈：感受器活性偏离设定点时，甲基化状态持续累积修正（CheR 增敏、CheB~P 减敏），直到误差回零——阶跃刺激后翻滚频率精确回到基线。Barkai–Leibler 证明该性质由网络连接结构保证，对速率参数扰动鲁棒，是控制论积分控制在分子层面的实现。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-43',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch10',
    type: 'single',
    question: 'Berg–Purcell 极限 (δc/c)² ≥ 1/(D·a·c·τ) 所描述的物理内容是：',
    options: [
      '马达做功不能超过 ATP 水解释放的能量',
      '受体测量浓度受分子扩散到达的散粒噪声限制，设定感知精度的物理下界',
      '膜融合孔径不能小于 1 nm',
      '成像分辨率受衍射限制',
    ],
    answer: 1,
    explanation:
      'Berg 与 Purcell（1977）证明：半径 a 的感受器在时间 τ 内测量浓度 c，统计涨落由扩散到达的分子数目（散粒噪声）限定，(δc/c)² ≥ 1/(Dacτ)。它设定趋化、嗅觉等一切"扩散感知"的物理下界，而生物感受器常运行在距极限数倍之内——进化逼近物理极限的证据。',
    difficulty: 3,
  },
  {
    id: 'q-biophysics-44',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch10',
    type: 'truefalse',
    question:
      '鸟类磁罗盘的自由基对假说认为：地磁通过改变隐花色素中自由基对的单线态/三线态互变率，使下游化学产率随磁取向变化，从而被"翻译"为化学信号。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。这是目前唯一有较系统实验支持的磁感受机制：光诱导的自由基对经超精细相互作用与塞曼效应感受地磁（~50 μT），改变自旋态产物比例；按 Larmor 频率扫场的射频扰动实验支持该假说。弱磁场在此改变的是化学反应速率而非"力"。',
    difficulty: 2,
  },
  {
    id: 'q-biophysics-45',
    subjectId: 'biophysics',
    chapterId: 'biophysics-ch10',
    type: 'multiple',
    question: '下列属于"量子生物学"研究范畴且证据较充分或明确可检验的现象有：',
    options: [
      'FMO 复合物中数百飞秒的激发能相干节拍（2D 电子谱观测）',
      '氢转移酶催化中的量子隧穿（大动力学同位素效应）',
      '嗅觉的振动理论（可用氢/氘同位素实验检验）',
      '细胞通过量子纠缠瞬间传递代谢物',
    ],
    answer: [0, 1, 2],
    explanation:
      'A（Engel 2007）、B（KIE 可达 3–10 甚至 >80）、C（Turin 假说，同位素实验两派争议）都是量子生物学的真实研究课题——前两者证据较多，C 是"明确可检验但未定论"的争议案例。D 属于科幻：量子纠缠不能用于传递经典信息/物质，无任何生物学证据。',
    difficulty: 3,
  },
]

