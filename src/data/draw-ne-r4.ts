// ============================================================
// Round 4 自绘插图挂载（ne 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/ne/ → bun scripts/draw/gen.ts ne
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawNeR4: Record<string, Illustration[]> = {
  'neurobiology-ch6-s3': [
    {
      src: '/images/bio/drawn/ne-ch6-s3-ltd-plasticity-rules.svg',
      caption:
        '突触可塑性的方向法则与稳态护栏：同一 NMDA 受体以钙信号波形定方向——先去极化后突触前放电（Ca²⁺ 快速高幅上升）触发 LTP，反序（低幅缓慢）触发 LTD，STDP 把「因果律」写进毫秒级时序窗（±20–40 ms 衰减）；Hebb 正反馈有发散风险，稳态可塑性（突触缩放与内在兴奋性调节）以乘法性缩放保全相对权重、维持放电率稳态。BCM 理论以滑动阈值 θm 统一两者——低频诱发 LTD、高频诱发 LTP、阈位随历史活动自适应，修饰位点涉及 GluA1 磷酸化/内吞与蛋白合成依赖的晚期维持。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch8-s4': [
    {
      src: '/images/bio/drawn/ne-ch8-s4-visual-central-pathways.svg',
      caption:
        '视觉信息从眼到皮层的投射拓扑与双流分工：视网膜节细胞轴突在视交叉处鼻侧半交叉、颞侧半不交叉——使每侧半球管理对侧视野（左侧视野全部汇入右膝状体-右皮层）；视束约九成纤维止于外侧膝状体（M 大细胞→4Cα、P 小细胞→4Cβ、K 细胞入 2/3 层 blob），其余达上丘与顶盖前区。皮层双流分工：腹侧颞下流管「是什么」（形状、颜色、面孔——V4 双侧损毁致皮层性色盲、IT 具不变性表征）；背侧顶枕流管「在哪里/怎么做」（运动、空间、抓取——MST 光流、LIP 注视计划）。VWFA 识字模块为文化训练塑造视觉皮层的可塑性证据。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch4-s4': [
    {
      src: '/images/bio/drawn/ne-ch4-s4-electrical-synapse.svg',
      caption:
        '缝隙连接由两侧各一个连接蛋白六聚体半通道对接而成，孔径约 1.5–2 nm、双向、近零延迟，间隙约 3.5 nm（化学突触 20–40 nm）；Cx36 介导 PV 阳性中间神经元网络的伽马同步；突触前抑制经轴-轴突触 GABA_B 压制末梢钙通道、突触前易化经 cAMP 升高释放概率；PPF 主因残留钙、PPD 主因池耗竭；AChE 水解 ACh、EAAT 摄取谷氨酸、NET/DAT/SERT 再摄取单胺——清除失效即病理',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch12-s2': [
    {
      src: '/images/bio/drawn/ne-ch12-s2-axon-guidance-pruning.svg',
      caption:
        '轴突导向与突触修剪：生长锥以丝足探测四类分子线索——Netrin-DCC 长程吸引（与 UNC5 复合则转为排斥）、Slit-Robo 排斥、Semaphorin-Neuropilin/Plexin 排斥为主、Ephrin-Eph 接触依赖双向信号，经 Rho 家族 GTP 酶重组肌动蛋白而转向；同一配体可因受体组合或 cAMP/cGMP 水平而效应相反。连合轴突的中线穿越由「先允许、后禁止」的 Robo 开关控制——穿越前压低 Slit 排斥、穿越后恢复，保证单次穿越；Cajal-Retzius 细胞分泌 reelin 实现 inside-out 皮层分层。修剪：小胶质细胞经补体（C1q/C3）标记弱突触予以吞噬，视网膜波教会 LGN 眼别分层。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch3-s1': [
    {
      src: '/images/bio/drawn/ne-ch3-s1-ap-properties.svg',
      caption:
        '阈值约 −55 mV（静息之上 10–15 mV）；上升支约 0.2–0.5 ms、超射 +30 ～ +40 mV（Na⁺ 通道 0.1–0.2 ms 内雪崩开放但从未到达 E_Na）、下降支与持续数 ms 的后超极化，全程约 1–2 ms；绝对不应期约 1 ms 源于钠通道失活，保证单向传播并设定数百赫兹的频率上限；强度以放电频率编码，分级电位与动作电位构成「局部模拟 + 长程数字」分工',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch11-s3': [
    {
      src: '/images/bio/drawn/ne-ch11-s3-stress-hpa-axis.svg',
      caption:
        '应激的神经内分泌轴：Selye 通用适应综合征分警觉（交感-肾上腺髓质秒级动员）、抵抗（HPA 轴与皮质醇适应）、衰竭三期。HPA 轴为 CRH→ACTH→皮质醇三级级联，逐级放大并由长环负反馈、海马 GR 与快速非基因组反馈共同关闭；MR 高亲和力维持基础节律、GR 低亲和力在应激峰值启动刹车。免疫交互：急性应激一过性增强固有免疫与 NK 活性；慢性应激经持续皮质醇抑制细胞免疫——胸腺萎缩、Th1 向 Th2 偏移与感染易感增加。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch9-s2': [
    {
      src: '/images/bio/drawn/ne-ch9-s2-auditory-pathway-coding.svg',
      caption:
        '听觉中枢通路与编码策略：螺旋神经节→蜗腹侧核→上橄榄核→下丘→内侧膝状体→颞叶 41 区，自蜗神经核起大量交叉双侧上行——单侧皮层病变几乎不致单侧耳聋。频率编码双轨并行：约 5000 Hz 以上靠场所编码（基底膜行波峰值位置），中低频靠锁相时间编码（排齐发射把群体时间编码上限扩展到约 4–5 kHz）；音调拓扑在每一级逐级保留，A1 高频代表在后内侧、低频在前外侧。声源定位：低频靠两耳时间差 ITD、高频靠强度差 IID——上橄榄核是首个双耳比较站。强度编码靠放电率、纤维募集与潜伏期三途径。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch5-s4': [
    {
      src: '/images/bio/drawn/ne-ch5-s4-amino-acid-neuropeptides.svg',
      caption:
        '谷氨酸经「EAAT 摄取入星形胶质细胞—GS 合成谷氨酰胺—末梢谷氨酰胺酶转回」的穿梭回收原料并控毒；受体三系：AMPA/KA 快电流、NMDA 钙信号与可塑性、mGluR1–8 慢速调音；NMDA 须谷氨酸 + 甘氨酸/D-丝氨酸共激动 + 去极化逐出 Mg²⁺ 三关齐过；GABA_A 为带苯二氮卓位点的氯通道、甘氨酸受体被士的宁封锁致强直痉挛；兴奋性毒性是卒中半暗带与神经变性共有的轴；μ/δ/κ 皆 Gi 偶联，纳洛酮竞争性逆转阿片过量',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch4-s3': [
    {
      src: '/images/bio/drawn/ne-ch4-s3-psp-integration.svg',
      caption:
        '中枢单个 EPSP 约 0.5–1 mV（AMPA 的 E_rev 约 0 mV），自 −70 抵达 −55 需数十个量子同步或数十 Hz 连发；IPSP 由 GABA_A/甘氨酸介导、向 E_Cl（约 −70 ～ −80 mV）靠拢；多离子通道 E_rev 为各离子电池按电导的加权平均；时间总和受 τ ≈ 5–20 ms 限窗，空间总和权重由树突电缆衰减决定；AIS 的 Nav 密度最高、阈值最低，是放电终审位；化学突触延迟约 0.5 ms，NMJ 以 50–70 mV 终板电位与安全系数约 2–4 换取确定性',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch9-s3': [
    {
      src: '/images/bio/drawn/ne-ch9-s3-vestibular-system.svg',
      caption:
        '前庭系统：三条半规管大致互相垂直，壶腹嵴毛细胞与终帽感受角加速度——恒速旋转时终帽回位、传入回落，故半规管是加速度计而非转速表；Ewald 定律决定眼震方向判读。椭圆囊与球囊的囊斑借耳石膜感受直线加速度与重力（静止时即持续报告头相对重力的倾角）。前庭眼反射 VOR 为三神经元弧（毛细胞→前庭核→眼运动核），潜伏期约 10 ms、增益接近 1，且可被小脑绒球长期适应修正——VOR 增益适应是运动学习的经典定量范式。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch11-s4': [
    {
      src: '/images/bio/drawn/ne-ch11-s4-circadian-sleep-wake.svg',
      caption:
        '睡眠与昼夜节律：SCN 每侧约一万神经元为昼夜主钟——per 与 cry 由 CLOCK-BMAL1 转录、其蛋白产物延迟入核抑制自身转录，负反馈环路耗时约 24 小时；ipRGC 经视网膜下丘脑束提供光相位信号，输出控制松果体褪黑素的暗期分泌。睡眠结构：NREM 分 N1/N2/N3 三期（标志依次为顶尖波与 θ 波、纺锤波与 K 复合波、高幅 δ 波）；REM 以去同步快波、快速眼动与骨骼肌失张力为特征。整夜约 4–6 个周期、每周期约 90 分钟——前半夜 N3 富集、后半夜 REM 递增；腺苷累积构成睡眠压力（双过程模型）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch9-s4': [
    {
      src: '/images/bio/drawn/ne-ch9-s4-olfaction-taste.svg',
      caption:
        '嗅觉与味觉的化学感受：嗅受体为 GPCR——人类功能基因约 400 个（小鼠约 1000 个），是最大基因家族；每只嗅神经元终身只表达一种 OR（Buck 与 Axel 获 2004 年诺奖），OR 偶联 Golf-cAMP-CNG 通道并经 Cl⁻ 外流放大；气味由受体激活组合谱编码，同一 OR 轴突汇聚于嗅球固定肾小球；嗅觉是唯一不经丘脑直接抵达皮层的主要感觉。味觉：每味蕾约 50–100 个细胞、寿命约 10 天，甜鲜苦走 gustducin-TRPM5 级联，咸酸由离子直接介导；传入经面神经鼓索支、舌咽神经与迷走神经汇聚于孤束核头端上行至岛叶味皮层。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch12-s3': [
    {
      src: '/images/bio/drawn/ne-ch12-s3-neurodegenerative-diseases.svg',
      caption:
        '神经退行性疾病的共同主题与两大代表：共同主题为蛋白错误折叠聚集与选择性易损。AD 双分子病理为 Aβ 斑块与过度磷酸化 tau 的神经原纤维缠结——淀粉样级联假说把 Aβ 置于上游、tau 播散为下游执行者；家族性（约 5–10%）由 APP 与早老素 PS1/PS2 突变致 Aβ42 增高早发，APOE4 为散发性最重要风险等位基因；胆碱酯酶抑制剂与美金刚为对症治疗。PD 以黑质致密部多巴胺神经元退变与路易体为标志；家族性位点 LRRK2 与 Parkin/PINK1 分别指向激酶信号与线粒体质量控制——两个疾病谱共同诠释「蛋白稳态崩溃」的神经病学。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch5-s1': [
    {
      src: '/images/bio/drawn/ne-ch5-s1-criteria-classification.svg',
      caption:
        '鉴定四标准：突触前存在与合成、钙依赖释放、受体复现与拮抗剂取消、明确清除机制；五大类：乙酰胆碱 / 单胺 / 氨基酸（小清亮囊泡）、神经肽（大致密核心囊泡，需高频高钙）、气体信使（即制即用）；Dale 原则：同一神经元各末梢释放同一组递质，快慢搭配按频率分级；NO 经 nNOS 即制即放、以 sGC-cGMP 为受体通路（EDRF，1998 诺奖），西地那非抑制 PDE5、与硝酸酯合用有低血压风险',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch11-s2': [
    {
      src: '/images/bio/drawn/ne-ch11-s2-hypothalamus-pituitary.svg',
      caption:
        '下丘脑与垂体的神经内分泌结构：下丘脑接受孤束核内脏传入、边缘系统调制与血液化学直接采样，输出经四路执行——自主神经、大细胞-神经垂体、小细胞-垂体门脉与边缘联系。大细胞神经元合成 ADH 与催产素经轴突运送至神经垂体、由动作电位触发释放入血（神经垂体是下丘脑的延伸而非腺体）；小细胞神经元经正中隆起与垂体门脉，以 TRH、CRH、GnRH、GHRH、SST、DA 六类调节激素控制腺垂体七种激素——门脉系统使微量激素近距离高效调控并携带脉冲信号，GnRH 脉冲频率决定 LH 与 FSH 的相对格局。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch1-s4': [
    {
      src: '/images/bio/drawn/ne-ch1-s4-methods.svg',
      caption:
        '1929 EEG 无创读脑；1949 玻璃微电极（<1 μm）实现胞内记录；1976 膜片钳以 10 GΩ 封接记录皮安级单通道电流（1991 诺奖）；1990 双光子与 BOLD fMRI 开启成像时代；2005 光遗传学以 ChR2（蓝光约 473 nm）/NpHR（黄光约 590 nm）实现毫秒级操控；连接组学已绘线虫 302（1986）与果蝇约 14 万神经元（2024）',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch12-s4': [
    {
      src: '/images/bio/drawn/ne-ch12-s4-repair-frontiers.svg',
      caption:
        '中枢再生三重障碍（Nogo-A/MAG/OMgp 经 NgR-RhoA；CSPG 瘢痕）vs 周围神经 Büngner 带 1–3 mm/日 · NGF 靶源性营养（1986 诺奖）· 干细胞/类脑器官/光遗传',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch7-s1': [
    {
      src: '/images/bio/drawn/ne-ch7-s1-sensory-general-physiology.svg',
      caption:
        '感觉系统总论：感受器按刺激性质分机械、化学、温度、光与伤害性五类，每种都有阈值最低的适宜刺激——感觉性质由专线通路决定（标记线学说）。感觉换能把刺激能量转变为分级性感受器电位，达阈即在传入纤维上诱发动作电位。适应分快慢：环层小体等快适应感受器报告变化事件，肌梭等慢适应感受器持续监测关键变量，伤害性感受器几乎不适应（保护性意义）；量的编码靠放电频率、纤维募集与时间模式。Weber 分数（ΔI/I 为常数）越小辨别越敏锐——心理物理学的量化基石。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch3-s2': [
    {
      src: '/images/bio/drawn/ne-ch3-s2-nav-kv.svg',
      caption:
        'Nav 为约 2000 个氨基酸的单链四同源结构域（各 6 跨膜），S4 每隔三个残基带碱性氨基酸构成电压传感器（每通道约 12–16 个元电荷的门控电流），P 环 DEKA 基序拼成滤器；DIII–DIV 连接环 IFM 基序约 1 ms 内塞孔失活；Kv 四聚体四 S4 逐一外翻故激活慢（延迟整流）；TTX 纳摩尔封 Nav、TEA 堵 Kv、利多卡因具使用依赖性；SCN1A/SCN4A/KCNQ2/3 突变构成通道病',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch6-s1': [
    {
      src: '/images/bio/drawn/ne-ch6-s1-hebb-short-term-plasticity.svg',
      caption:
        '学习的细胞语法——海兔两大范式：Hebb 规则强调「反复持续地参与引发放电」，因果与时序兼备，是 LTP 与 STDP 的理论源头。海兔缩鳃反射通路可鉴定、神经元可对号入座：习惯化＝同突触机制——感觉末梢钙内流与递质释放进行性下降；敏化＝异突触机制——5-HT 经 Gs-cAMP-PKA 关闭钾通道、增宽动作电位、增加释放。时相分层：短时敏化只需既有分子磷酸化；长时敏化需 PKA 入核磷酸化 CREB、启动转录与新突触生长——从毫秒级修饰到基因表达的记忆分子阶梯。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch1-s1': [
    {
      src: '/images/bio/drawn/ne-ch1-s1-neuron-doctrine.svg',
      caption:
        '1873 高尔基染色显示单个神经元全貌；Golgi 网状学说与 Cajal 神经元学说对峙三十余年，1906 年同获诺奖而立场对立；1950s 电镜揭示 20–40 nm 突触间隙终裁；人脑约 860 亿神经元（小脑 690 亿、皮层 160 亿），突触 10¹⁴–10¹⁵ 量级',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch2-s2': [
    {
      src: '/images/bio/drawn/ne-ch2-s2-nernst.svg',
      caption:
        'E = (RT/zF)·ln(外/内)；37 ℃ 单价离子每十倍浓度差对应 61.5 mV；E_K = 61.5×log₁₀(5/140) ≈ −90 mV、E_Na ≈ +60 mV、E_Cl ≈ −64 mV、E_Ca ≈ +130 mV（二价每十倍 30.75 mV）；高钾段实测贴合理论斜率，低钾段因钠漏与泵偏离；高钾血症抬高 E_K 致心律失常',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch7-s3': [
    {
      src: '/images/bio/drawn/ne-ch7-s3-pain-modulation.svg',
      caption:
        '伤害性感受与疼痛调制：伤害性感受器为高阈值游离末梢——TRPV1 被辣椒素与 43 ℃ 以上热激活、ASIC 感知酸化，炎性介质（缓激肽、前列腺素）使其敏化（痛觉过敏）。快痛由 Aδ 纤维传导（尖锐定位明确）、慢痛由 C 纤维传导（灼样弥散伴情绪反应）。闸门学说：胶状质抑制性中间神经元受粗纤维兴奋、细纤维抑制——门控痛觉上传（TENS 镇痛据此设计）。下行镇痛：PAG 为核心，经延髓大缝核与蓝斑下行至脊髓背角，以 5-HT、NE 与脑啡肽抑制痛觉传递——阿片类药物的解剖学靶点。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch10-s1': [
    {
      src: '/images/bio/drawn/ne-ch10-s1-motor-unit-spinal-reflex.svg',
      caption:
        '运动单位与脊髓反射：运动单位按 S（慢抗疲劳）、FR（快抗疲劳）、FF（快易疲劳）分工，对应 I、IIa、IIb/IIx 纤维——力量-速度-耐力梯度。Henneman 大小原则：小神经元输入电阻高、阈值低、先募集，顺序固定为 S→FR→FF，配合放电率上调实现力量分级。肌梭含核袋与核链纤维，Ia 末梢感长度与变化率、II 末梢感静态长度，γ 与 α 共激活维持全程灵敏度。牵张反射为单突触反射弧（Ia 传入直接兴奋同名肌 α 神经元），潜伏期约 20–25 ms；Ia 侧支经抑制性中间神经元实现交互抑制。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch5-s3': [
    {
      src: '/images/bio/drawn/ne-ch5-s3-monoamines.svg',
      caption:
        '酪氨酸 →（TH 限速，需 BH4，受产物反馈抑制）→ L-DOPA → 多巴胺 → NE → 肾上腺素；L-DOPA 绕过瓶颈治帕金森、配卡比多巴减少外周消耗；多巴胺四通路：黑质-纹状体（运动，退变即帕金森）、中脑-边缘（奖赏）、中脑-皮层（认知）、结节-漏斗（抑制催乳素）；D1 类 Gs / D2 类 Gi，抗精神病药皆为 D2 拮抗剂；NE 司令部在蓝斑，α1/α2/β1/β2/β3 各司血管、心脏、支气管与代谢；5-HT 约 14 种受体（仅 5-HT3 离子型），SSRI 阻断 SERT、疗效滞后数周源于受体适应',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch2-s3': [
    {
      src: '/images/bio/drawn/ne-ch2-s3-ghk.svg',
      caption:
        '1943 年恒定电场近似、1949 年 Hodgkin & Katz 用于神经与肌膜；P_K:P_Na:P_Cl ≈ 1:0.04:0.45，代入经典浓度得 V_rest ≈ −67 mV，与实测 −65 ～ −70 mV 吻合；电导式 V_m ≈ Σg·E/Σg 与之互为表里；Cl⁻ 近被动分布（E_Cl ≈ V_rest），开放氯通道产生分流抑制，KCC2/NKCC1 决定 E_Cl 相对静息的位置',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch11-s1': [
    {
      src: '/images/bio/drawn/ne-ch11-s1-autonomic-structure-transmitters.svg',
      caption:
        '自主神经系统的结构法则：三级链条（中枢内脏神经元→节前→节后）；交感出自胸腰段、神经节近中枢而节后长，副交感出自颅骶段、神经节近效应器而节后短——「应急快线 vs 消化慢线」的解剖学。递质法则：节前一律 ACh 作用于神经节烟碱受体；交感节后多释放 NE（汗腺为胆碱能 M3 例外）；副交感节后释放 ACh 作用于毒蕈碱受体。肾上腺髓质嗜铬细胞相当于特化的节后神经元（分泌肾上腺素为主）；肠神经系统约一亿神经元可独立产生蠕动与分泌反射——「第二脑」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch2-s1': [
    {
      src: '/images/bio/drawn/ne-ch2-s1-ion-basis.svg',
      caption:
        '静息膜电位 −70 ～ −65 mV；Na⁺ 胞外 145 mM 对胞内 5–15 mM，K⁺ 胞内 140 mM 对胞外 5 mM，Ca²⁺ 胞外毫摩尔级对胞内游离约 0.0001 mM；静息驱动力 K⁺ 约 +20 mV 外向、Na⁺ 约 −130 mV 内向、Ca²⁺ 逾 −200 mV；固定阴离子经 Donnan 逻辑使膜电位天然偏负',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch12-s1': [
    {
      src: '/images/bio/drawn/ne-ch12-s1-early-development.svg',
      caption:
        '神经系统的早期发育：Spemann 组织者经分泌 noggin、chordin 等 BMP 拮抗剂实现神经诱导——默认模型主张外胚层默认成神经、BMP 促其表皮化，诱导即去抑制。神经管于第 3–4 周闭合，前神经孔约 25 天、后神经孔约 27–28 天；闭合缺陷致无脑畸形与脊柱裂（围孕期叶酸可显著预防）。前脑、中脑、后脑三脑泡分区由 Hox 与 Otx2/Gbx2 等基因编码；放射状胶质是兼具干细胞与迁移脚手架双重身份的前体（人类 SVZ 扩张与脑沟回相关）；约半数神经元经发育性凋亡删减——「过产出再选拔」的构建策略。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch3-s3': [
    {
      src: '/images/bio/drawn/ne-ch3-s3-hodgkin-huxley.svg',
      caption:
        '枪乌贼巨轴突直径 0.5–1 mm；1939 年测得超射 +40 mV 否定 Bernstein 膜学说，1949 年钠假说登场；胆碱置换（后用 TTX/TEA）分离出快失活的 I_Na 与持续延迟的 I_K；g_Na = ḡ_Na·m³h、g_K = ḡ_K·n⁴（E_Na = +50、E_K = −77、E_l = −54.4 mV）；数值积分重现波形与传导速度（计算约 18.7 m/s 对实测约 21 m/s），1963 年三人共获诺奖',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch7-s4': [
    {
      src: '/images/bio/drawn/ne-ch7-s4-touch-proprioception.svg',
      caption:
        '躯体感觉的机械感受器分工：无毛皮肤四型——Merkel（SA1 慢适应，形态细节）、Meissner（RA 快适应，低频振动）、Ruffini（SA2 慢适应，皮肤拉伸）与环层小体（RA2 极快适应，100–300 Hz 高频振动）。浅层感受器感受野小密度高，决定指尖毫米级两点辨别；深层感受野大、负责大范围机械状态。本体感受：肌梭并联于梭外肌（Ia 感长度与变化率、II 感静态长度，γ 共激活维持灵敏度）；腱器官与肌纤维串联、经 Ib 纤维感张力，高阈值放电经反肌伸张反射保护肌肉肌腱——皮肤与深部两套「机械仪表」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch7-s2': [
    {
      src: '/images/bio/drawn/ne-ch7-s2-somatosensory-pathways.svg',
      caption:
        '躯体感觉的两大上行通路：初级传入纤维分 Aβ（有髓 30–70 m/s，触觉与本体）、Aδ（薄髓 12–30 m/s，快痛与冷觉）、C（无髓 0.5–2 m/s，慢痛与温觉）三类。背柱-内侧丘系传导分辨性触觉、振动觉与意识性本体感觉——经延髓薄束核与楔束核换元交叉（三级神经元链）；脊髓丘脑侧束与前束在脊髓内经前连合交叉，传导痛温觉与粗触觉——两束交叉平面不同造成分离性感觉障碍（脊髓半切综合征 Brown-Séquard 的解剖钥匙）；丘脑腹后外侧核（躯干四肢）与腹后内侧核（头面部）为最后驿站。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch6-s4': [
    {
      src: '/images/bio/drawn/ne-ch6-s4-memory-neural-basis.svg',
      caption:
        '记忆的分系统与海马环路：记忆按陈述性（情景、语义，依赖海马-内侧颞叶）与程序性（技能、条件反射、启动，依赖基底节、小脑、杏仁核）分系统——可分别损坏而互不影响。海马三突触环路：内嗅皮层-穿通路-齿状回-苔藓纤维-CA3-Schaffer 侧枝-CA1-返回内嗅皮层，各级均可诱导 LTP。HM 双侧内侧颞叶切除后短时记忆与程序性学习完好、唯独不能形成新的陈述性长时记忆——海马是巩固通道而非最终仓库；Morris 水迷宫证明空间学习依赖海马与 NMDA 受体（AP5 阻断学习而不阻断可见平台任务）——可塑性机制与行为的闭环证据。',
      credit: DRAWN_CREDIT,
    },
  ],
  'neurobiology-ch10-s2': [
    {
      src: '/images/bio/drawn/ne-ch10-s2-supraspinal-control.svg',
      caption:
        '下行运动通路与上运动神经元体征：皮质脊髓束约 75–90% 交叉为侧束（支配远端精细动作），前束多在节段水平交叉（支配中轴近端肌）——内囊病变致对侧痉挛性偏瘫而中轴肌相对保留；脑干网状脊髓束与前庭脊髓束分别含抑制性与易化性成分，其平衡决定肌张力基线（上、下丘之间横断致去大脑强直）。M1 以运动小人拓扑代表对侧躯体（Betz 细胞约 3 万个为形态标志）；PMA 偏重外部线索触发、SMA 偏重内在启动与序列计划。痉挛（上运动神经元）与弛缓（下运动神经元）的相反体征用于定位诊断；巴宾斯基征为皮质脊髓束损伤的脱抑制释放。',
      credit: DRAWN_CREDIT,
    },
  ],
}
