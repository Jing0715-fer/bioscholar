// ============================================================
// Round 4 自绘插图挂载（bp 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/bp/ → bun scripts/draw/gen.ts bp
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawBpR4: Record<string, Illustration[]> = {
  'biophysics-ch1-s1': [
    {
      src: '/images/bio/drawn/bp-ch1-s1-scale-hierarchy.svg',
      caption:
        '生物物理学的尺度谱系：空间尺度从 0.1 nm 的原子（键长）、2 nm 的 DNA 双螺旋直径、25 nm 的核糖体、8 μm 的红细胞直到米级的组织与器官，跨越十个数量级；时间尺度从飞秒级键振动、皮秒氢键重组、毫秒蛋白折叠到小时级细胞分裂。五大分支（分子生物物理、膜与细胞生物物理、生物能量学、生物电与成像、信息与前沿）以「相互作用—结构形态—能量信息」三问贯穿——尺度分层是物理方法选用的第一依据。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch1-s2': [
    {
      src: '/images/bio/drawn/bp-ch1-s2-water-physics.svg',
      caption:
        '水的物理性质与生命现象：氢键键能约 20 kJ/mol（仅为 O–H 共价键的 1/20），皮秒级断裂重组支撑液态水的高流动性；介电常数 ε≈80 削弱静电相互作用 80 倍，是生物分子弱相互作用得以精细调控的前提；0.1 mol/L 生理离子强度下德拜屏蔽长度约 1 nm——静电作用的有效尺度。疏水效应由水熵增驱动（60–80 ℃ 出现极大），是蛋白质折叠与膜自组装的主要驱动力——「水的反常」即「生命的常态」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch1-s3': [
    {
      src: '/images/bio/drawn/bp-ch1-s3-chain-statistics.svg',
      caption:
        '生物大分子链的统计性质：自由连接链模型给出均方末端距 ⟨R²⟩=Nb²（R~b·N^1/2 高斯标度）；持续长度 p 度量链刚性，Kuhn 长度 b≈2p 为等效统计段——DNA 的 p≈50 nm（约 150 bp），是「刚性棒」与「柔性链」的分水岭；回转半径 Rg=b√(N/6)。相对涨落 ~1/√N：链越长统计涨落越小——高分子行为的中心极限定理，也是单分子实验信号涨落分析的基准。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch1-s4': [
    {
      src: '/images/bio/drawn/bp-ch1-s4-flory-exponent.svg',
      caption:
        'Flory 指数与溶剂质量：链尺寸 R~b·N^ν 随溶剂质量三方分化——θ 溶剂 ν=1/2（理想高斯线团，排除体积恰被抵消）、良溶剂 ν≈3/5（0.588 溶胀线团，排除体积主导）、不良溶剂 ν=1/3（坍缩球）。生物学锚点：λ 噬菌体 DNA 48.5 kb 伸展全长 16.5 μm，在胞内压缩比近万倍；100 残基蛋白折叠后半径仅 1.5–2 nm——基因组与蛋白分别处于坍缩与紧凑态的物理经济学。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch2-s1': [
    {
      src: '/images/bio/drawn/bp-ch2-s1-anfinsen-folding.svg',
      caption:
        'Anfinsen 实验与折叠自组织：牛胰核糖核酸酶 A（124 aa、4 个二硫键）经 8 mol/L 尿素+β-巯基乙醇完全变性去折叠后透析复性，活性几乎全部恢复（1972 诺奖）——一级结构完全决定三维构象，折叠是热力学自发过程。Levinthal 悖论是其动力学反面：随机搜索 3¹⁰⁰≈10⁴⁸ 个构象需宇宙年龄，而实际折叠仅毫秒级——解悖靠能量面漏斗：偏置的下坡通道使搜索指数级加速，天然态位于漏斗底部的动力学可及处。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch3-s2': [
    {
      src: '/images/bio/drawn/bp-ch3-s2-helfrich-elasticity.svg',
      caption:
        '膜弹性理论的 Helfrich 能量：膜的面积弹性模量 KA≈0.1–0.3 N/m（拉伸 2–3% 即破裂——脂双层是「面内刚性、面外柔软」的奇异材料）；弯曲刚度 κ≈10–25 k_BT。Helfrich 泛函 E=∫[(κ/2)(2H−C₀)²+κ̄K+σ]dA 把局部曲率 H、自发曲率 C₀ 与张力 σ 统一为膜的形变语言：成球总代价 8πκ≈500 k_BT，拉膜管 E≈2πκ·L/r+πσr²——膜形状力学的计算起点。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch3-s3': [
    {
      src: '/images/bio/drawn/bp-ch3-s3-fluctuation-fusion-raft.svg',
      caption:
        '膜的热涨落、出芽融合与脂筏：κ 仅为 10 k_BT 量级 → 膜在室温下显著起伏，产生熵致排斥 (k_BT)²/(κd²)——两膜难以靠近的纯熵屏障。出芽依赖自发曲率 C₀（双层两叶组分不对称）或蛋白衣架（如 BAR 域弯膜）；融合经半融合茎中间体至约 1 nm 融合孔开张——SNARE 提供的约 20 k_BT 恰够跨越能垒。脂筏=鞘脂-胆固醇富集的 Lo 有序微区（10–200 nm）与 Ld 相共存的液-液分离平台——信号分子的组织基底。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch3-s4': [
    {
      src: '/images/bio/drawn/bp-ch3-s4-rbc-membrane-mechanics.svg',
      caption:
        '红细胞膜力学：剪切模量 μ≈5–10 μN/m 来自血影蛋白-肌动蛋白网架（脂双层本身抗剪切为零）；弯曲刚度 κ≈2×10⁻¹⁹ J、面积模量 KA≈0.5 N/m。膜面积过剩约 40% 使细胞呈双凹圆盘形——冗余表面积是可变形性的物质基础；挤过 3–4 μm 毛细血管时膜以 tank-treading 滚动方式翻转（约 0.1 s/周）保持形状不变——剪切稀化血液流变学的细胞力学解释，遗传性球形红细胞增多症（血影蛋白缺陷）正是该力学体系的病理注脚。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch4-s2': [
    {
      src: '/images/bio/drawn/bp-ch4-s2-brownian-ratchet.svg',
      caption:
        '分子马达的随机步进：布朗棘轮与能量冲程两种图景。kinesin-1 以恒定 8 nm 步长沿微管行走、与 ATP 水解 1:1 严格耦合——棘轮图景：ATP 门控选择性捕获热涨落（后足的受限扩散）；冲程图景：颈部 linker 构象摆动直接做功（约 15 pN·nm 偏置）。F₁-ATP 酶的 120° 台阶分解为 80°（ATP 结合驱动）+40°（水解释放）两段——单一马达常是「棘轮+冲程」杂化体；机械化学耦合的化学计量是马达身份的指纹。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch4-s3': [
    {
      src: '/images/bio/drawn/bp-ch4-s3-cross-bridge-cycle.svg',
      caption:
        '肌球蛋白 II 与摆动横桥模型：肌节静息长约 2.2 μm（粗丝约 1.6 μm）。Lymn-Taylor 循环四步：①rigor 态 ADP·Pi 待发；②Ca²⁺ 经肌钙蛋白暴露肌动蛋白位点，横桥结合；③Pi 释放触发杠杆臂摆动 5–10 nm、产生 3–5 pN 力（做功冲程）；④ATP 结合使横桥脱离再武装。整肌最大比张力约 0.3 MPa 与单头力×面密度自洽——横桥循环的统计叠加把分子纳米力学放大为宏观收缩。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch4-s4': [
    {
      src: '/images/bio/drawn/bp-ch4-s4-mechanotransduction.svg',
      caption:
        '细胞的力学感受与传导：三条时程通路分工——μs–ms 级牵张激活离子通道（Piezo，2021 诺奖；力由脂双层张力直接传递）即刻去极化；分钟级整联蛋白-talin 黏着斑级联（力展开 talin 暴露结合位点，招募 vinculin 组装信号枢纽）；小时级 YAP/TAZ 刚度传感器（刚性基质上核转位）指挥干细胞命运决定——「细胞用手感觉世界」的三档时钟。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch5-s1': [
    {
      src: '/images/bio/drawn/bp-ch5-s1-thermodynamics-open-system.svg',
      caption:
        '热力学定律在生物系统的应用：第一定律 ΔU=Q−W——静息人体约 100 W 功率全部最终变为热（化学能→功的转换被 ATP 循环中介）。开放系统判据（等温等压）：ΔG<0 自发、=0 平衡、>0 需输入功——生物圈的总自由能预算由阳光支付。人体熵产生率约 0.3 W/K，一生累计约 10⁹ J/K——生命以「负熵为食」（薛定谔）的严格表述即：以环境更大的熵增为代价维持自身低熵有序。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch5-s2': [
    {
      src: '/images/bio/drawn/bp-ch5-s2-gibbs-free-energy-coupling.svg',
      caption:
        '吉布斯自由能与化学势的耦合反应：ΔG=ΔG°′+RT lnQ 把标准态与实际浓度连接（平衡时 ΔG°′=−RT lnKeq）。ATP 水解 ΔG°′=−30.5 kJ/mol 居能量阶梯中部——恰足以驱动多数生物合成又不至于浪费。耦合示例：谷氨酰胺合成（+14.2 kJ/mol，热力学不可能单独发生）与 ATP 水解（−30.5）经共用中间体偶联，净 ΔG=−16.3 kJ/mol——细胞用「自由能记账」把上山反应拴在下山反应上。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch5-s3': [
    {
      src: '/images/bio/drawn/bp-ch5-s3-redox-potential-nerst.svg',
      caption:
        '氧化还原电位与电子传递的热力学：标准电位阶梯 NAD⁺/NADH（−0.320 V）→Q（+0.045 V）→cyt c（+0.254 V）→½O₂/H₂O（+0.816 V）逐级抬升；呼吸链总 ΔE°′=1.136 V、n=2 → ΔG°′=−2×96485×1.136≈−219 kJ/mol——按 ATP 价格约 50 kJ/mol 支付约 4 分子的能量学账单。Nernst 方程 E=E°′+(RT/nF)ln(氧化型/还原型) 把实际浓度接入电位（37 ℃ 时 RT/F≈26.7 mV）——电位序即电子流的下坡路线图。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch5-s4': [
    {
      src: '/images/bio/drawn/bp-ch5-s4-dissipative-structure.svg',
      caption:
        '非平衡态热力学与耗散结构：线性近平衡区遵循最小熵产生原理（Onsager 1931，1968 诺奖）——系统弛豫回定态；跨过临界驱动 λc 后涨落被放大、系统分岔出时空有序的耗散结构（Prigogine 1977 诺奖）。生物学例证谱：贝纳尔对流的六角涡胞、糖酵解途径的 NADH 振荡、黏菌聚集波与心电螺旋波——生命本身就是远离平衡的耗散结构；涨落定理把熵产生推广到单分子尺度（分子马达的热力学第二定律微观检验），MEPP 为强驱动区的工程猜想。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch6-s2': [
    {
      src: '/images/bio/drawn/bp-ch6-s2-magnetic-tweezers-afm.svg',
      caption:
        '磁镊与原子力显微镜：磁镊以磁场对超顺磁珠施加恒力并可旋转——力程 0.01–100 pN，dsDNA 扭转刚度约 400 pN·nm²（单分子拓扑力学的标准仪器）。AFM（1986）以微悬臂针尖轻敲成像：轻敲模式保护软样品、高速 AFM 达每秒数十帧直击动态过程。力谱经典：titin 免疫球蛋白域逐个解折叠的锯齿峰（100–200 pN、间隔约 25 nm）；WLC 蠕虫链拟合力-伸展曲线得 dsDNA 持续长度 p≈50 nm——「拉分子问问题」的单分子范式。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch6-s4': [
    {
      src: '/images/bio/drawn/bp-ch6-s4-patch-clamp-statistics.svg',
      caption:
        '单通道记录与单分子实验统计学：膜片钳以 GΩ 高阻封接隔离几 μm² 膜片——1 pA 电流约对应 6×10⁶ 离子/s，单通道电流可测。电导指纹识别通道身份：K⁺ 通道 4–20 pS、nAChR≈40 pS、BK 大电导≈250 pS。开放概率 P_o=T_open/(T_open+T_closed)，全细胞电流 I=N·P_o·g·(V−E_rev) 把单分子参数放大为宏观电流——HH 动力学即隐式马尔可夫模型。泊松涨落误差 ~1/√N 设定统计极限：N 个独立通道的相对噪声随通道数递减。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch7-s4': [
    {
      src: '/images/bio/drawn/bp-ch7-s4-cable-theory-integration.svg',
      caption:
        '电缆理论与神经元信息整合：被动膜电位沿轴突指数衰减 V(x)=V₀e^(−x/λ)——x=λ 处衰减至 37%。时间常数 τ=r_m·c_m 典型 5–20 ms（膜电阻×电容的充电延迟）；空间常数 λ=√(r_m/r_i) 典型 0.1–1 mm，髓鞘同时抬高 r_m 降低 c_m 使 λ 达 cm 级——跳跃传导的物理本质。神经元因此是「泄漏积分-发放器」：树突的加权时空求和在轴丘达到阈值即触发全或无脉冲——计算的物理底座。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch8-s2': [
    {
      src: '/images/bio/drawn/bp-ch8-s2-gating-mechanisms.svg',
      caption:
        '电压门控与配体门控的结构机制：电压门控 Na⁺/K⁺ 通道的 S4 段每 3 个残基一个 Arg（每通道 4–7 个正电荷）——去极化使 S4 外移旋转，门控电荷约 13 e₀/通道，门控电流先于离子电流出现（门控电流实验直接观测传感器位移）。nAChR 受体（α₂βγδ 五聚体）经乙酰胆碱别构转换把疏水闸门从约 3 Å 撑开至 7–8 Å（电导约 40 pS），并具脱敏态——「电压读表 vs 钥匙开锁」两大门控范式的结构注解。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch8-s3': [
    {
      src: '/images/bio/drawn/bp-ch8-s3-single-channel-markov.svg',
      caption:
        '通道开放的概率性：单通道行为与马尔可夫模型：膜片钳记录的驻留时间呈指数分布——离散状态间跳变的统计学指纹；马尔可夫状态图（C↔O↔I）把开放/关闭/失活的随机序列编译为转移速率矩阵，Hodgkin-Huxley 的 m³h、n⁴ 即隐式马尔可夫结构。P_o-电压关系呈 S 形曲线（可从近 0 到 >0.9）——门控电荷数决定斜率。全细胞电流 I=N·P_o·g·(V−E_rev) 把单分子统计放大为可测宏观量；膜噪声（散粒噪声+热噪声）设定信号检测的物理极限。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch8-s4': [
    {
      src: '/images/bio/drawn/bp-ch8-s4-mechanosensitive-blockers.svg',
      caption:
        '机械门控通道与通道阻断剂：Piezo1/2 为三叶螺旋桨三聚体——每亚基 30 余个跨膜螺旋，受力从碟形展平打开中央孔（2021 诺奖），机械敏感性来自脂双层张力本身。阻断剂药理学地图：TTX 胍基阳离子从胞外侧封堵 Na⁺ 通道选择性滤器口（nM 级；神经型 Nav 敏感性高数百至上千倍——河豚毒素的选择性之谜）；局麻药从胞内侧结合开放/失活态（使用依赖性）；TEA/4-AP 堵 K_v 内口——孔内外夹击的分子药理学。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch9-s1': [
    {
      src: '/images/bio/drawn/bp-ch9-s1-abbe-limit.svg',
      caption:
        '光学成像的分辨率极限：Abbe 判据 d=λ/(2NA)——可见光 λ≈550 nm 配油浸物镜 NA=1.4 得 d≈200 nm：两点距离小于艾里斑半径（第一暗环）时不可分辨。衍射极限的物理来源是有限孔径丢失高频空间信息。突破思路：时间上分开（荧光开关态区分邻近分子）或以非线性响应压缩有效 PSF——STED/PALM/STORM 把分辨率推进到 20–50 nm（2014 诺奖「看见不可见」）——极限是工程的起点而非终点。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch9-s2': [
    {
      src: '/images/bio/drawn/bp-ch9-s2-gfp-fret.svg',
      caption:
        '荧光蛋白与标记技术：GFP 由 238 aa、11 条 β 折叠围成 β 桶，内藏 S65-Y66-G67 三肽自催化成熟（环化→氧化→脱水）为 HBI 发色团——无需外加底物的「自点亮」基因标记；激发 395/475 nm、发射 509 nm。FRET 把荧光当作分子尺：能量转移效率 E=1/(1+(r/R₀)⁶) 对距离六次方反比敏感，r=R₀ 时 E=50%——FRET 是 1–10 nm 尺度的构象传感器。标记工具谱：有机染料约 1 nm、荧光蛋白约 4 nm、量子点 5–10 nm——尺寸与亮度的权衡菜单。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch9-s3': [
    {
      src: '/images/bio/drawn/bp-ch9-s3-confocal-2p-sted.svg',
      caption:
        '共聚焦、双光子与超分辨显微镜：共聚焦以针孔排除焦外光（轴向分辨率 0.5–0.8 μm）实现光学切片；双光子利用激发概率∝强度² 的非线性——仅焦点处同时吸收两个近红外光子发光，穿透约 1 mm、光损伤局限焦点（活体脑皮层成像主力）；STED 用环形损耗光强制熄灭焦点外围荧光子（有效 PSF 压缩至 20–50 nm）；PALM/STORM 以单分子定位达约 20 nm、SIM 结构光照明约 100 nm——超分辨家族各占生态位（2014 诺奖）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch10-s1': [
    {
      src: '/images/bio/drawn/bp-ch10-s1-dna-data-storage.svg',
      caption:
        'DNA 作为信息分子与数据存储：4 种碱基=每碱基 2 bit，1 g 单链 DNA 理论容量约 2×10¹⁷ 字节（约 215 PB）——比最好的硬盘高 6–7 个数量级；半衰期与常温稳定性亦远超磁介质。编码架构：约 150–200 nt 寡核苷酸=索引+载荷+Reed-Solomon 纠错；里程碑：2012 年 Church 编码 5.27 Mb（含一本书与 GIF），2017 年 Erlich「DNA fountain」逼近理论密度极限——「硅基写、碳基存」的冷数据归档新路线。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch10-s2': [
    {
      src: '/images/bio/drawn/bp-ch10-s2-chemotaxis-limits.svg',
      caption:
        '生物系统的信息处理——趋化、适应与感知极限：大肠杆菌以跑-翻滚有偏随机游走实现趋化（跑约 1 s、20 μm/s）——细菌仅 2 μm 无法空间比较两端浓度，只能做时间比较。完美适应由甲基化积分反馈结构性地保证（Barkai-Leibler 鲁棒性）：CheR/CheB 调节受体甲基化，稳态活性精确回归设定点。Berg-Purcell 极限 (δc/c)²≥1/(D·a·c·τ) 设定扩散感知的物理下界——趋化与视觉单光子响应都运行在物理极限数倍之内。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch10-s3': [
    {
      src: '/images/bio/drawn/bp-ch10-s3-quantum-biology.svg',
      caption:
        '量子生物现象概述：FMO 光合天线复合物中数百飞秒量子节拍提示能量转移含相干成分（功能意义仍在争论）；鸟磁罗盘的自由基对假说——地磁场经超精细作用改变 cryptochrome 自由基对的单/三重态化学产率，射频磁场干扰实验支持该机制；嗅觉振动理论以 H→D 同位素替换检验（果蝇行为可辨，人类结果反复）；氢隧穿产生大动力学同位素效应 KIE=3–10、极端 >80，由蛋白热振动辅助——量子生物学的共同品格是可检验可证伪。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biophysics-ch10-s4': [
    {
      src: '/images/bio/drawn/bp-ch10-s4-synbio-outlook.svg',
      caption:
        '合成生物学展望：JCVI-syn3.0 仅 473 个基因是最小自复制基因组的定量基线（其中约 149 个功能未知）；拨动开关与压缩振荡子（2000 年双里程碑）开创合成基因线路的工程范式。表达噪声既是设计挑战也是可利用资源——bet-hedging 使群体以表型多样性对冲环境剧变（持留菌抗药）。生物物理从解释生命走向重编生命：可控性（诱导开关/自杀开关）与生物安全（合成基因组水印、伦理审查）是边界条件——「重编生命的权限」由物理定律与治理框架共同设定。',
      credit: DRAWN_CREDIT,
    },
  ],
}
