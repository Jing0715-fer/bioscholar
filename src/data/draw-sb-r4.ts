// ============================================================
// 自绘插图挂载（sb 学科 · 结构生物学实验方法）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/sb/ → bun scripts/draw/gen.ts sb
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawSbR4: Record<string, Illustration[]> = {
  'structural-biology-ch1-s2': [
    {
      src: '/images/bio/drawn/sb-ch1-s2-methods-overview.svg',
      caption:
        '三大结构解析方法总览：X 射线晶体学以 10¹³–10¹⁵ 个分子的有序晶格放大信号，常规分辨率约 1.0–2.5 Å（小蛋白纪录 0.48 Å），分子量无上限（50S 核糖体亚基约 1.6 MDa，2000 年）；冷冻电镜单颗粒约 100 kDa 起步、大于 300 kDa 更可靠，2013 年后 2–3 Å 成为常态（最佳 1.22 Å）；溶液 NMR 常规小于 30–50 kDa、TROSY 加氘代可至约 100 kDa，是唯一能直接测量皮秒至秒动力学的传统方法——三者的样品要求、周期与成本互为补集。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch3-s2': [
    {
      src: '/images/bio/drawn/sb-ch3-s2-affinity-imac.svg',
      caption:
        '亲和层析原理：固定化金属螯合亲和层析（IMAC）中 IDA 三齿或 NTA 四齿配体螯合 Ni²⁺（或 Co²⁺），余下配位位点由 His₆ 标签的咪唑基补位结合；游离咪唑以梯度竞争洗脱——结合缓冲液 20–40 mM、洗脱 150–500 mM（实例 250 mM）。GST-谷胱甘肽、MBP-直链淀粉、Strep-tag-链霉亲和素（desthiobiotin 竞争）与 Protein A-Fc 各成体系，一步亲和可把纯度从粗提的百分之几抬到 90% 以上。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch3-s3': [
    {
      src: '/images/bio/drawn/sb-ch3-s3-ion-exchange.svg',
      caption:
        '离子交换层析：蛋白净电荷由 pI 与缓冲液 pH 共同决定——pH 高于 pI 时带负电、结合阴离子交换剂 Q/DEAE，低于 pI 时结合阳离子交换剂 SP/CM，结合 pH 宜偏离 pI 至少 1 个单位。0–500 mM NaCl 线性梯度跨 10–20 个柱体积展开洗脱，梯度越长分辨率越高；容量内上样体积不受限，是标签蛋白与天然蛋白流程共同的第二步精纯主力。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch5-s1': [
    {
      src: '/images/bio/drawn/sb-ch5-s1-phase-diagram.svg',
      caption:
        '结晶相图四区与溶解度旋钮：不饱和区（溶解）、亚稳区（只长不生）、成核区与沉淀区由溶解度曲线与临界过饱和分隔；Cohn 方程 log S = β − Ks·I 刻画盐析段，Hofmeister 序列中硫酸铵析出能力最强。悬滴蒸气扩散沿蒸汽压差把液滴推入过饱和、成核后回落溶解度线缓慢生长——「成核要快、生长要慢」的两幕剧，也是晶种技术的全部原理。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch6-s1': [
    {
      src: '/images/bio/drawn/sb-ch6-s1-bragg-ewald.svg',
      caption:
        '布拉格定律与 Ewald 反射球：2d sinθ = nλ，λ = 1 Å 时 d = 2.0/1.0/0.8 Å 对应 θ = 14.5°/30.0°/38.7°；Ewald 球半径 1/λ，倒易格点落在球面上即满足衍射条件——旋转晶体让格点扫过球面逐个产斑。光源亮度从实验室密封管（Cu Kα 1.5418 Å，约 10⁸–10⁹）到波荡器（约 10¹⁵–10¹⁷）再到低发射度扩散源（约 10¹⁸–10²² ph/s/mm²/mrad²/0.1%bw）；Se 吸收边 0.9795 Å 附近微调波长是反常散射定相的先决条件。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch7-s2': [
    {
      src: '/images/bio/drawn/sb-ch7-s2-molecular-replacement.svg',
      caption:
        '分子置换两步搜索：Patterson 函数 P(u) = Σ|F|²exp(−2πih·u) 无需相位即可计算，分子内向量簇只随取向变化——旋转函数（Rossmann 与 Blow 1962 年）定取向、平移函数定位置、packing 检验排除碰撞；Phaser 以 LLG 与 TFZ 判读（大于 8 大概率正确、5–8 存疑）。模型来源：同源结构序列一致性大于 30% 直接用、20–30% 修剪侧链、小于 20% 用 AlphaFold 预测（pLDDT 大于 90 的主链误差约 1 Å）——预测时代分子置换成功率大幅跃升。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch9-s2': [
    {
      src: '/images/bio/drawn/sb-ch9-s2-vitrification-grids.svg',
      caption:
        '玻璃化冷冻与载网制备（Dubochet 1982 年，2017 年诺贝尔化学奖）：环境仓控制湿度大于 90% 防蒸发浓缩，滤纸 blot 1–5 s 吸去多余液体，约 0.1–0.5 s 内浸入液态乙烷浆料（约 90 K）实现 10⁵–10⁶ K/s 速冷绕过冰晶成核（玻璃化转变温度约 136 K）——液氮因 Leidenfrost 气膜导热不足，必须以乙烷为冷媒。载网谱系：铜/金网 200–400 mesh、Quantifoil R1.2/1.3 规整多孔碳膜、UltrAuFoil 金箔；辉光放电 15–30 mA、30–60 s 亲水化；样品浓度 0.5–5 mg/mL、目标冰厚 30–100 nm。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch10-s2': [
    {
      src: '/images/bio/drawn/sb-ch10-s2-picking-2d-classification.svg',
      caption:
        '颗粒挑选与二维分类：模板相关、LoG 差分高斯与深度学习（Topaz/cryolo）三种眼力，框径取颗粒直径 1.2–1.5 倍，一套数据 10⁵–10⁶ 颗粒。二维类平均把颗粒按取向聚类、类内对齐平均，信噪比随 √N 提升（Scheres 2012 年贝叶斯框架）；「好类」以约 10 Å 的 α 螺旋纹理与视角多样为标准，空框/聚集/冰污染的垃圾类一律剔除。参考偏差三防线：随机参考起步、多参考并行、垃圾类不硬救（Dotson 与 Glaeser 2016 年论战）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch11-s1': [
    {
      src: '/images/bio/drawn/sb-ch11-s1-nmr-hsqc.svg',
      caption:
        '蛋白质 NMR 基础：¹H-¹⁵N HSQC 指纹谱中每个非脯氨酸残基给出一枚酰胺峰（100 残基蛋白约 100 枚）——突变、配体结合与构象变化都会移动特定峰位。样品要求 ¹⁵NH₄Cl 与 ¹³C-葡萄糖双标记的大肠杆菌表达、浓度 0.2–1 mM；谱仪场强 600–950 MHz（14.1–22.3 T）。分子量极限的物理根源是转动变慢导致弛豫加快与谱线展宽：常规小于 30–50 kDa，TROSY（Pervushin 1997 年）加氘代把极限推至约 100 kDa。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch1-s1': [
    {
      src: '/images/bio/drawn/sb-ch1-s1-sequence-to-structure.svg',
      caption:
        '结构生物学的中心命题是结构决定功能：Anfinsen 以盐酸胍与还原剂变性核糖核酸酶 A，透析复性后活性几乎完全恢复，证明一级结构已蕴含折叠所需的全部信息（热力学假说，1972 年诺贝尔化学奖）。PDB 从 1971 年建库时的 13 个结构增至 2024 年的逾 22 万条，约八成五来自 X 射线晶体学；AlphaFold DB 另覆盖约 2 亿条 UniProt 序列的预测结构。酶催化、分子识别（界面埋藏面积约 600–900 Å²）、变构调节与药物设计四类经典问题示范结构知识的解释力；序列一致性高于约 30% 即可同源模建，低于 20% 进入暮光区。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch1-s3': [
    {
      src: '/images/bio/drawn/sb-ch1-s3-history-timeline.svg',
      caption:
        '结构生物学百余年时间轴：1912 年劳厄衍射与 1913 年布拉格定律奠定物理基础；1934 年 Bernal 发现湿晶体方可清晰衍射，「永不干燥你的晶体」至今是铁律；1953 年同晶置换法铸成相位问题的第一把钥匙；1958 年肌红蛋白 6 Å、1960 年 2 Å；1971 年 PDB 建库（13 条起步）；1982 年玻璃化冷冻埋下伏笔；2013 年直接电子探测器引发分辨率革命；2020 年 AlphaFold2 在 CASP14 达中位 GDT_TS 约 92.4。学科节奏分为物理学先行、方法学奠基、基础设施与膜蛋白攻坚、分辨率革命与计算时代四阶段；八届诺贝尔化学奖年表与中国坐标（1965 年牛胰岛素全合成、1971 年 2.5 Å 猪胰岛素）并列呈现。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch1-s4': [
    {
      src: '/images/bio/drawn/sb-ch1-s4-pipeline-roadmap.svg',
      caption:
        '从基因到 PDB 条目的十步链路：目标选择（1–3 天）、基因克隆（3–7 天）、小试表达（3–5 天）、纯化（1–2 天）、稳定性筛选（1–3 天）、结晶或制样（数天至数月，最大瓶颈）、数据收集（数小时至数天）、结构解析、精修验证与数据投递（1–2 天），缺陷沿链路逐级放大。放行指标为 SDS-PAGE 纯度高于约 95%、分析型 SEC 单体高于 90–95%；DSF 能把 Tm 提升数度的配体是共结晶稳定剂首选。膜蛋白可衍射晶体成功率长期低于 5%，而其编码基因约占基因组三成——这一落差正是冷冻电镜崛起的直接动因。经验法则：R 因子约等于分辨率数值的十倍，2 Å 结构 R 约 20%。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch2-s1': [
    {
      src: '/images/bio/drawn/sb-ch2-s1-t7-expression.svg',
      caption:
        'T7 体系的两级放大：pET 载体以 T7 启动子驱动目的基因，BL21(DE3) 染色体的 lacUV5 控制 T7 RNA 聚合酶基因，IPTG 诱导后外源蛋白可占细胞总蛋白 10–30%；T7 聚合酶延伸速率约每秒 200–260 个核苷酸（约十倍于宿主聚合酶）。经典可溶窗口为 OD600 0.5–0.8、IPTG 0.05–1 mM、16 °C 过夜低温慢表达。包涵体以 6–8 M 尿素或约 6 M 盐酸胍溶解后经稀释或透析复性，GSH/GSSG 约 10:1 配二硫键、0.4–1 M 精氨酸抑制聚集，收率常仅 5–20%。Rosetta 补约 7 种稀有密码子 tRNA，pLysS 把本底泄漏压低一到两个数量级。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch2-s2': [
    {
      src: '/images/bio/drawn/sb-ch2-s2-yeast-insect.svg',
      caption:
        '毕赤酵母以甲醇诱导的 AOX1 启动子驱动表达至可溶蛋白 30% 以上，0.5% 甲醇流加 24–96 小时，高密度发酵干重可达约 100 g/L；短板是可延伸数十个甘露糖的高甘露糖型糖链。杆状病毒体系以 polh 启动子（多角体蛋白约占感染晚期细胞总蛋白 30%）经 Bac-to-Bac 转座构建，P2/P3 种子滴度约 10⁸ pfu/mL，MOI 1–10 感染 Sf9/High Five 后 48–96 小时收获；MultiBac 以 Tn7 与 Cre-lox 装配多基因、一毒等比表达。四大体系按周期（3–7 天至数月）、成本、糖基化与收量（数十 mg 至 g/L）分工选型。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch2-s3': [
    {
      src: '/images/bio/drawn/sb-ch2-s3-mammalian-expression.svg',
      caption:
        'HEK293（1977 年建系）与 293T 服务瞬时出样，CHO（1957 年建系）承载约 70% 重组蛋白类药物。瞬时表达以 25 kDa 线性 PEI 转染 293F（DNA 与 PEI 质量比约 1 比 3），48–72 小时收获，常规滴度约 5–50 mg/L、强化可逾百；稳定细胞系经 DHFR/MTX 或 GS/MSX 选择扩增，单克隆开发 3–6 个月，工业补料分批滴度 1–5 g/L。Fc 的 N297 糖链带核心岩藻糖会立体阻碍 FcγRIIIa 结合、削弱 ADCC，去岩藻糖可增强最多约 50 倍；糖链异质性是结晶天敌，解析前常以 PNGase F 或 Endo H 压缩糖链。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch2-s4': [
    {
      src: '/images/bio/drawn/sb-ch2-s4-tags-tev-cleavage.svg',
      caption:
        '常用标签规格：His₆ 约 0.8 kDa 几乎不干扰结晶，GST 26 kDa、MBP 42 kDa 增溶最强，Strep-tag II 以 2.5 mM desthiobiotin 温和洗脱，SUMO 约 11 kDa 兼具增溶与天然 N 端红利。标签切除主力 TEV 蛋白酶（27 kDa，S219V 工程化主流）识别 ENLYFQ 与 Gly 之间的肽键，4–16 °C 过夜、酶底物质量比 1:20 至 1:100，切割后再过镍柱负吸附即得纯净目的蛋白。共表达复合物用 Duet 类多质粒、MultiBac 或多质粒共转染；SeMet 掺入率应高于 95% 供 SAD/MAD 定相，NMR 以 ¹⁵NH₄Cl 与 ¹³C 葡萄糖 M9 培养基标记。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch3-s1': [
    {
      src: '/images/bio/drawn/sb-ch3-s1-chromatography-basics.svg',
      caption:
        '层析分离的物理化学基础：分配系数决定保留，Ve = V0 + Kd·Vs；分辨率 Rs = 2(V2 − V1)/(w1 + w2)，达 1.5 为基线分离、1.0 时仍有约 2% 交叉污染，容量因子 k′ 以 1 至 10 为优。塔板数 N = 16(tR/wb)²：同一保留时间下峰宽自 1 分钟增至 2 分钟，N 由 14400 跌至 3600、分辨率几乎腰斩。van Deemter 三项权衡（H = A + B/u + C·u）决定最优流速——蛋白扩散系数仅约 10⁻⁶ cm²/s，宜以约 30–150 cm/h 低线速运行，冷间 4–8 °C 流速再降三至五成。粒径谱系 60–90、20–45 与约 10 μm 分守捕获、精纯与分析级；SEC 靠筛分不靠吸附，制备上样以柱体积 0.5–2% 计。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch3-s4': [
    {
      src: '/images/bio/drawn/sb-ch3-s4-sec-hic.svg',
      caption:
        '分子排阻层析（SEC）按流体力学体积筛分：大分子被孔道排除先流出、小分子畅行全部孔道后流出，Kav = (Ve − V0)/(Vt − V0) 取值 0 至 1；Superose 6 覆盖至约 5000 kDa、Superdex 200 为 10–600 kDa、Superdex 75 为 3–70 kDa。制备上样仅柱体积 0.5–2%，G-25 脱盐组别分离可达 30%，分析柱流速 0.5–1 mL/min；8–13 μm 增效介质较约 34 μm 传统介质把塔板高度压低两三倍、同柱长分辨率提升四到五成。疏水相互作用层析（HIC）借盐暴露疏水面：0.8–1.5 M 硫酸铵高盐上样、降盐梯度洗脱，苯基、丁基、辛基三种链长铺开筛选矩阵；硫酸铵居 Hofmeister 序列盐析端，Cohn 方程 log S = β − Ks·I 的可逆利用即其原理。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch4-s1': [
    {
      src: '/images/bio/drawn/sb-ch4-s1-cell-lysis.svg',
      caption:
        '细胞裂解三军规：释放完全（上清回收率高于 90%）、条件温和、参数可放大，全程 4 °C 低温压制蛋白酶活性。超声以 10 s 开/50 s 关脉冲加冰浴 10–20 分钟；高压均质 1,000–2,000 psi、2–3 遍即达 90% 以上释放；溶菌酶 0.2–1 mg/mL 加 1–5 mM EDTA 渗透冲击最温和。裂解液模板 50 mM Tris-HCl pH 8.0、300 mM NaCl、5% 甘油、0.5–1 mM TCEP，蛋白酶抑制剂临用前加（PMSF 水相半衰期仅约 30–110 分钟）。核酸粘度以 DNase I 加 5 mM MgCl₂ 酶解或 0.1–0.5% PEI 絮凝，两级离心 20,000–40,000 g 加 0.22 μm 精滤护柱；2 L 培养物全程约 3 小时得清亮粗提液。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch4-s2': [
    {
      src: '/images/bio/drawn/sb-ch4-s2-three-step-purification.svg',
      caption:
        '多步纯化的经典三步：亲和捕获管「快」——Ni-NTA 以咪唑 20/40/250 mM 分步洗脱、收率 60–90%；TEV 蛋白酶以约 1:50 质量比 4 °C 过夜切标签，逆亲和一步三分离；离子交换管「深」——pH 偏离 pI 0.5–1 个单位挂柱，目标峰于 100–400 mM NaCl 洗出；SEC 管「纯与匀」——Superdex 200 Increase 10/300 终纯并置换缓冲液。总收率为各级连乘：70% × 80% × 85% ≈ 48%，1 L 表达量 20–50 mg 终得 10–25 mg 纯蛋白。超滤 MWCO 取分子量 1/3–1/2（30 kDa 配 10 kDa 管）浓缩至 5–20 mg/mL，置换用 PD-10 或 G-25 脱盐柱，治疗用途须把内毒素压至 0.1 EU/mg 以下；每步以 SDS-PAGE、A₂₈₀ 回收率与 SEC 单体峰设检查点，用数据而非感觉推进流程。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch4-s3': [
    {
      src: '/images/bio/drawn/sb-ch4-s3-purity-homogeneity.svg',
      caption:
        '纯度与均一性的证据链：SDS-PAGE 中考马斯亮蓝检出 10–50 ng/条带、银染 1–10 ng 灵敏约一个量级，灰度扫描定量、纯度大于 95% 为放行线，10–12% 胶对 20–100 kDa 蛋白最优。分析型 SEC 以 10–50 μg 微量上样监控尺寸分布，单体峰占比大于 95% 是进入结晶筛选的门槛；SEC-MALS 串联多角度激光光散射直接测绝对分子量、误差约 3–5%——表观 95 kDa 的峰测得 96 kDa 即同源三体（单体 32 kDa），测得 64 kDa 则为二体加形状拉长，两类结论的下游处理完全不同。DLS 以 PDI 判分散性（小于 0.1 单分散优等、大于 0.3 显著异质），完整质量质谱约 1 Da 精度验证切点与二硫键，肽图覆盖率大于 90% 确认序列。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch4-s4': [
    {
      src: '/images/bio/drawn/sb-ch4-s4-stability-screening.svg',
      caption:
        '稳定性筛选与保存纪律：DSF 以 SYPRO Orange 结合变性暴露的疏水区，每孔 5 μL 在 qPCR 板以约 1 °C/min 自 25 升至 95 °C，一阶导数峰即解链温度 Tm；nanoDSF 改测 330/350 nm 内源荧光比值、免染料，两法 Tm 差值常在 2 °C 以内。筛选矩阵 pH 4–9 × 盐 50–500 mM × 添加剂——某激酶由 pH 7.5 HEPES 的 Tm 42 °C 换 pH 8.0 Tris 加 200 mM 精氨酸升至 49 °C，ΔTm 大于 5 °C 即视为显著改善。浓缩至 5–20 mg/mL 后回查 SEC 验证浓缩上限；冻存执行液氮速冻、50–100 μL 分装与 −80 °C 存放、每管一次冻融，批次放行三件套为 SEC 单体峰、完整质量一致与 Tm 偏差不超 2 °C。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch7-s1': [
    {
      src: '/images/bio/drawn/sb-ch7-s1-phase-problem.svg',
      caption:
        '结构因子与电子密度互为傅里叶变换对：ρ(x)=(1/V)ΣF(h)exp(−2πih·x)。探测器只记录光子计数 I=|F|²，开方仅得振幅——X 射线折射率与 1 只差约 10⁻⁶、造不出透镜，相位在测量中物理性丢失。图中三幅密度图由同一组「分子」的傅里叶级数真实合成：振幅换成常数而相位保留时，分子轮廓与口袋仍可辨认；相位随机化后只剩噪声与鬼影——相位误差使图「变脸」，振幅误差只使其「变糊」。图质量随相位均方根误差陡降：约 20° 接近精修后水平、40° 为主链可追踪的合格线、90° 与随机无异。当代约八成五结构由分子置换解析，无模型可借时实验定相与直接法（约 1.2 Å 内小分子）仍不可替代。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch7-s3': [
    {
      src: '/images/bio/drawn/sb-ch7-s3-sir-sad.svg',
      caption:
        '实验定相的两台发动机。同晶置换：重原子化合物沿水通道扩散进晶体，要求浸泡前后晶胞变化小于 1%；以 |F_PH|−|F_P| 为系数的差值 Patterson 使蛋白贡献相消，只剩数个重原子间向量巨峰。Harker 相位圆（1956）给出 SIR 双解——两个候选相位对一切强度同样自洽，需 MIR 第二衍生物或反常差异破解；Blow 与 Crick（1959）将其改写为相位概率分布。反常散射：把波长拧到吸收边（Se K 边 12.658 keV＝0.9795 Å），f″ 冲上约 3.8 e⁻ 峰、近七倍于硫在 Cu Kα 的 0.56 e⁻；Bijvoet 对 |F+| 与 |F−| 差约 1%，同时编码重原子位置与绝对构型。SeMet 掺入率九成以上，30 kDa 蛋白通常有 4–8 个硒位点；SAD 单波长已成主流。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch7-s4': [
    {
      src: '/images/bio/drawn/sb-ch7-s4-density-modification.svg',
      caption:
        '密度修饰把带噪初值打磨成可建模的图。溶剂平坦化（Wang 1985）以 8–10 Å 半径滑动平均划分蛋白区与溶剂区（含量通常 40–60%），把溶剂区压平后经傅里叶回收相位，迭代 5–20 轮；NCS 平均使噪声按拷贝数平方根缩减——60 重二十面体病毒可压到约八分之一；相位外推每次放开一两个壳层、先「猜」后「修」，病毒从 10 Å 级推到 3 Å 以内。图中前后两图由同一分子、同一振幅、不同相位噪声真实合成：初始 σ≈65°（FOM 约 0.5）断续难辨，修饰后 σ≈25°（FOM 约 0.9）主链连续。判据：FOM 修饰后应大于 0.7，SHELXE 追踪相关系数高于约 30% 提示定相成功；40° 为可建模合格线。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch8-s1': [
    {
      src: '/images/bio/drawn/sb-ch8-s1-map-reading.svg',
      caption:
        '读图的三件工具。2Fo−Fc 主图按 1σ 等值线勾画，模型应有的密度呈连续「香肠」，是搭主链、放侧链的工作底图（1.5σ 检验扎实、0.5σ 追柔性）；Fo−Fc 差值图只画观测减计算——+3σ 正峰提示晶体里有、模型里没有（缺的水、配体），−3σ 负峰提示模型里有、晶体里没有，口诀「加水看正峰、删原子看负峰」。坏匹配的指纹是成对正负峰：正峰在密度中心、负峰在原子处，喊「搬我」。omit 图抠掉可疑片段重算相位防模型偏差；polder 图（Liebschner 2017）加掩膜挡住 bulk 溶剂「填坑」，弱配体判定首选；sigma-A 加权（Read 1986）按相位可靠性逐反射加权。分辨率阶梯：优于 1.2 Å 见氢、2.0 Å 键分叶、3 Å 主链清晰侧链断续、6 Å 仅二级结构包络；交替构象按 altloc 拆分、占有率之和为 1。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch8-s2': [
    {
      src: '/images/bio/drawn/sb-ch8-s2-coot-workflow.svg',
      caption:
        'Coot（Emsley 与 Cowtan 2004）把「看图、改模、验证」压进同一界面：骨架化（Greer 1974 bones）沿密度走廊认路，baton 接力每跳一步预置一个残基，mutate 对齐序列，fit rotamer 从 Richardson 统计库挑最贴合构象，real space refine zone 让选区贴密度又保几何，peptide flip 把装反的羰基翻正 180°（φ/ψ 由禁区回优势区）。自动流水线分工：ARP/wARP 要求优于约 1.7 Å、数十分钟产出九成以上正确全原子；Buccaneer（Cowtan 2006）面向 2–3.5 Å；AutoBuild 组成定相-修饰-建模-精修循环；AlphaFold 初稿使工作量普遍减半。水三判据缺一不可：Fo−Fc 不低于约 3σ、氢键 2.6–3.0 Å、B 因子与邻居相当；配体先以 GRADE/eLBOW 造约束字典，再过 polder 图与占有率-B 成对检验。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch8-s3': [
    {
      src: '/images/bio/drawn/sb-ch8-s3-refinement-principles.svg',
      caption:
        '结构精修是带约束的最小化：经典目标函数 Σw(Fo−Fc)²，现代程序（refmac5、phenix.refine）改用最大似然，把测量误差与模型不完备性显式纳入。蛋白精修是欠定问题——300 残基约 2,400 原子、坐标 7,200 加 B 因子 2,400 共近万参数，与 2 Å 独立反射同量级；restraints 以数千条化学「虚拟观测」把体系拉回超定（Engh 与 Huber 1991：键长 σ 约 0.02 Å、键角约 2°）。B = 8π²⟨u²⟩，衰减 exp(−Bsin²θ/λ²) 使高 B 原子几乎不贡献高分辨率信息；TLS（Schomaker 与 Trueblood 1968）以 T/L/S 三张量、每集团仅 20 参数描述刚体振动；bulk 溶剂按 Babinet 原则以平坦溶剂加掩膜校正（Jiang 与 Brünger 1994）。模拟退火（Brünger 1987）高温降温跳出局部极小。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch8-s4': [
    {
      src: '/images/bio/drawn/sb-ch8-s4-rfree-convergence.svg',
      caption:
        'Rwork 度量对工作集的拟合，但参数一直在向工作集「讨好」；Rfree（Brünger 1992）随机剥离约 5% 反射组成自由集、全程不可见不进目标函数，模型真变好它才降。2 Å 数据的锚点：Rwork 约 0.18–0.22、Rfree 约 0.22–0.26；gap = Rfree−Rwork 健康区间 2–5%，大于 7% 过拟合警告（无效水、参数过多、噪声构象），小于 1% 反而可疑（自由集泄漏）。图中虚线即过拟合反例：Rwork 假摔到 0.12 而 Rfree 停在 0.30。Ramachandran 图（1963）达标线为优势区大于 96%、离群接近零，clashscore 小于 5；B 因子应表面高核心低、沿序列连续，孤立尖峰常指向 register 错误。收敛三判据：ΔR 小于约 0.1%、几何 outlier 清零、差值图无 ±4σ 峰。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch9-s1': [
    {
      src: '/images/bio/drawn/sb-ch9-s1-overview-negative-stain.svg',
      caption:
        '单颗粒冷冻电镜全流程：样品、玻璃化、低剂量成像、颗粒挑选、2D/3D 分类、精修与结构——无需晶体、分子量下限约 100 kDa、大于 300 kDa 更可靠。负染横截面示铀盐染料壳环绕蛋白、颗粒呈「浅色镂空」负衬度：碳膜铜网辉光放电亲水化后滴 3–5 μL 吸附 30–60 秒、0.5–2% 醋酸铀或甲酸铀染色，约 2–5 分钟完成「视频面试」。好样品 2D 分类类别清晰、视角多样、见二级结构迹象；坏信号为聚集、碎片与单一优势视角。负染上限约 15–20 Å（染料粒度约 1 nm、干燥压扁某一维可达两成），高分辨细节不可外推——三条判据（颗粒数、均一性、状态）过关才发玻璃化「录取通知」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch9-s3': [
    {
      src: '/images/bio/drawn/sb-ch9-s3-spa-data-collection.svg',
      caption:
        '低剂量三步把每颗电子花在刀刃上：search 以 0.01–0.05 e⁻/Å² 离轴侦察（看过即报废）、focus 在旁区约 0.1 e⁻/Å² 对焦消像散、expose 才用完 40–60 e⁻/Å²——预曝光压至总量百分之几。剂量分级切成 50–60 帧电影：counting 逐一计数单电子、DQE 约翻倍，剂量率控在 5–10 e⁻/像素/秒防重合损失；按 50 e⁻/Å²、1 Å 像素、8 e⁻/像素/秒反推曝光约 6 秒、每帧约 0.1 秒。Nyquist＝2 倍像素尺寸（0.8 Å 对应 1.6 Å），目标 2 Å 至少 1.0 Å/像素。defocus 取 −0.5 至 −3 μm 梯度：−1.5 与 −2.5 μm 档第一零点约 17 与 22 Å 两档互补；K3 加 Falcon4 多孔模式通量达每小时千张。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch9-s4': [
    {
      src: '/images/bio/drawn/sb-ch9-s4-collection-quality.svg',
      caption:
        'cryoSPARC Live 四指标实时上屏：逐帧漂移总量小于约 1–2 Å 且平滑、CTF 拟合 3–5 Å 以内（大于 6–8 Å 剔除）、每微图数十至数百颗、2D 类平均锐利且视角多样——「收完才知道砸了」变成「边收边调」。载网按空孔率分级：小于 10% 良好、10–30% 收紧圈孔按格挑收、大于 30% 直接换网；A 级方格全收、C 级放弃。微晶冰在 FFT 以约 3.67 Å 锐环或离散斑点现形。取向预警即行动：小角度倾转 20–40 度、调 defocus、换支持膜、回制样。规模预算：3 Å 级约 10⁵ 颗粒配数千张微图、亚 2 Å 约 10⁶ 配上万张；可用微图比例大于 70%。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch10-s1': [
    {
      src: '/images/bio/drawn/sb-ch10-s1-ctf-correction.svg',
      caption:
        '弱相位物体近似下成像被衬度传输函数过滤：相位因子随频率振荡、过零处整段翻零，defocus 越深振荡越快——300 kV 下 −1.5 与 −2.5 μm 档第一零点约 17 与 22 Å。功率谱 Thon 环（极值处噪声相干增强、过零处死寂）供 CTFFIND4 与 GCTF 解出 defocus（−0.5 至 −3 μm）、像散（小于约 0.2–0.5 μm）与方位角；拟合极限 3–5 Å 健康、大于 6–8 Å 剔除。MotionCor2 全局加 5×5 局部子块逐帧对齐，RELION 以抛物线轨迹描述首帧大位移、最早 2–3 帧分组；剂量加权按临界曝光规律对晚期帧高频指数降权。束致运动源于充电、热应力与辐射损伤三股力、首帧最猛，UltrAuFoil 金网使其幅度约减半。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch10-s3': [
    {
      src: '/images/bio/drawn/sb-ch10-s3-3d-refinement.svg',
      caption:
        '中心截面定理是三维重构的数学基石：一张投影的二维傅里叶变换恰是三维变换过原点的中心截面，十万颗粒的随机截面填满频率空间。ab initio 以 4–8 个随机起点独立收敛、低通自约 40–60 Å 起步逐级放开频率，比较终态一致性排假；3D 分类设 3–8 类、tau 正则化控制类间迁移，兼做质量筛与构象拆解。金标准规程（Scheres 与 Chen 2012）把数据随机分半、两半互不通信独立精修、仅算 FSC 时碰面，0.143 判据从机制上掐断过拟合；采样步长自约 7.5 度细化到亚度级、迭代 20–25 轮收敛。进阶四层：贝叶斯抛光（Zivanov 2019）、逐颗粒 CTF 与高阶像差、局部聚焦、多体精修（Nakane 2018）；对称先 C1 验证后施加。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch10-s4': [
    {
      src: '/images/bio/drawn/sb-ch10-s4-resolution-model-building.svg',
      caption:
        '傅里叶壳层相关把金标准两半图按分辨率壳层算相关，跌破 0.143 的频率即全局分辨率——该处每壳层信噪比约为 1（Rosenthal 与 Henderson 2003；0.5 为保守旧口径）。头号陷阱是紧掩蔽伪相关：掩蔽边缘与残余噪声把高频人为托起、「坚挺到底」即假分辨率指纹，以相位随机化差值扣除修正。局部分辨率以 blocres 约 10–15 Å 见方滑窗逐块算 FSC：刚性核心可 2.5 Å、柔性尾区仅 6–8 Å；B 因子锐化以 Guinier 图拟合典型数十至一百余 Å²。建模按分辨率分档：优于 3 Å 从头搭建、4–5 Å 以 AlphaFold 拟合起步、6–8 Å 仅刚体拟合；Q-score、EMRinger 与 map-model FSC 三指标互证，EMDB 加 PDB 双投递、原始影像入 EMPIAR。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch11-s2': [
    {
      src: '/images/bio/drawn/sb-ch11-s2-resonance-assignment.svg',
      caption:
        '共振指定沿主链「串珠」完成：HNCO 交出前一残基羰基，HNCA 给 Cα(i) 强峰与 Cα(i−1) 弱峰，HNCACB 与 CBCA(CO)NH 成对交出 Cα/Cβ——相邻酰胺峰共享同一组 Cα/Cβ(i−1) 即主链邻居；Ala Cβ 约 19 ppm、Gly Cα 低至约 45 ppm 等氨基酸指纹逐段校对，百残基约三四周、覆盖率九成以上，位移表存 BMRB。NOE 强度随距离六次方衰减：强中弱约 2.7、3.3、5.0 Å，上限 5–6 Å，混合时间 80–150 ms 防自旋扩散；长程约束仅两三成——「局部准、全局松」，由数十至一二百枚 RDC（几到几十 Hz）正交互补全局取向，另有数十条氢键（约 2.0 Å）与全残基 TALOS-N 预测。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch11-s3': [
    {
      src: '/images/bio/drawn/sb-ch11-s3-annealing-ensemble.svg',
      caption:
        '数千条距离上限与角度区间变成坐标的路径：模拟退火在扭转角空间进行——键长键角冻结、自由度降两个数量级，一次「高温随机化（虚拟 8000–10000 K）—慢冷—能量最小化」在当代工作站约数分钟，显式水盒子精修收尾；同一套约束独立算约 100 个构象、按能量与违约数择优 10–20 个成系综入 PDB。CYANA（Güntert 1997）以 CANDID 网络锚定迭代 7–8 轮自动纠错，Xplor-NIH 与 ARIA 同路。质量标准：大于 0.3–0.5 Å 的 NOE 违约清零、违约均方根约 0.05 Å、有序区骨架 RMSD 小于 0.5 Å 为好、Ramachandran 优势加许可区大于九成；RMSD 只报精度，RDC 与交叉验证才是准确度试金石。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch11-s4': [
    {
      src: '/images/bio/drawn/sb-ch11-s4-relaxation-dispersion.svg',
      caption:
        'R1（1/T1）、R2（1/T2）与异核 NOE 三参数经模型自由分析（Lipari 与 Szabo 1982）折成序参量 S² 与有效相关时间 τe：刚性核心 S² 约 0.8–0.9、活性环与末端低于 0.4，一张逐残基条形图即柔性高分辨地图。更慢一档由 CPMG 弛豫色散覆盖约 0.2–10 ms（kex 约 100–5000 s⁻¹），拟合隐藏态占有率 pB 与交换速率；CEST 覆盖约 10–500 ms、稀态占有率低至约 1% 仍可见——稀态先于配体存在即构象选择的直接证据。PRE 以 MTSL 标记读约 15–35 Å 长程距离并对约 1% 瞬态敏感；氢交换保护因子达 10⁶–10⁸ 折算局部稳定性；化学位移滴定 Kd 最佳量程微摩尔至毫摩尔，SAR by NMR 与 STD 支撑片段筛选。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch12-s1': [
    {
      src: '/images/bio/drawn/sb-ch12-s1-validation-onedep.svg',
      caption:
        'wwPDB（2003 年由 RCSB、PDBe 与 PDBj 组建）为每笔投递自动生成验证报告：几何线查 clashscore（每 1000 原子中重叠不小于 0.4 Å 的严重冲突数，Chen 等 2010）与 Ramachandran 统计（优势区应大于 98%、离区宜小于 0.2%），密度线查 Rwork/Rfree、实空间残差或 EM 的 map-model FSC 与 EMRinger，多数指标附同分辨率档百分位、红黄绿三色分档。投稿自查四类高频：序列一致、配体化学字典、金属配位几何（Mg 至配位氧约 2.0–2.2 Å 六配位）、occupancy 与备择构象。OneDep 三清单：X 射线交坐标加结构因子、冷冻电镜交坐标加密度图并归档 EMPIAR、NMR 化学位移归 BMRB；PDB_REDO 批量再精修使存量平均 Rfree 下降约 2 个百分点。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch12-s2': [
    {
      src: '/images/bio/drawn/sb-ch12-s2-integrative-toolbox.svg',
      caption:
        'SAXS 在溶液中读整体形状：Guinier 区（q·Rg 小于 1.3）以 ln I 对 q² 直线斜率给回转半径 Rg，P(r) 反演给 Dmax，I(0) 与 Porod 体积给分子量；DAMMIN/DAMMIF 珠子包络约 20 次取平均、精度约 1–2 nm；无序链 Rg 约随残基数 0.5 次幂增长（Kohn 等 2004），快于折叠球的约 0.38 次幂。纳米距离探针互补成尺：smFRET 约 3–8 nm（R0 约 5–6 nm）、DEER 约 1.5–8 nm 读距离分布、PRE 15–35 Å、DSS/BS³ 交联赖氨酸 Cα 间距上限约 30 Å（间隔臂约 11.4 Å），HDX-MS 以逐肽保护图谱定位表位与变构路径。IMP 四步（表征、评分、采样、分析）把多源约束拧成带约 2 nm 定位精度的排布——核孔复合物（酵母约 55 MDa、人约 110 MDa，Alber 等 2007）由此成名。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch12-s3': [
    {
      src: '/images/bio/drawn/sb-ch12-s3-alphafold-confidence.svg',
      caption:
        'CASP14（2020 年）上 AlphaFold2 对最难的自由建模目标中位 GDT_TS 达约 92.4（CASP13 最佳尚在 60 上下），主链偏差常在 1 Å 内。三要素：MSA 共进化先验（深度是准确度第一变量）、Evoformer 双轨注意力（MSA 与残基对表征互相投喂数十层）、端到端结构模块（不变点注意力直接输出坐标、三轮回收）。置信度体系：pLDDT 大于 90 主链侧链皆可靠、70–90 主链可靠侧链存疑、小于 50 常为内在无序区；PAE 读域间与界面相对排布误差——域内低而域间高即「各自准、拼接存疑」。AlphaFold DB 2022 年 7 月扩容至约 2 亿条；AF-Multimer 异源复合物约三分之二可达可接受界面；ESMFold 免 MSA 快约 60 倍、放出约 6.17 亿条——「计算覆盖折叠，实验负责构象与机制」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch12-s4': [
    {
      src: '/images/bio/drawn/sb-ch12-s4-decision-frontiers.svg',
      caption:
        '方法选择五问先行：分子量、结晶性、均一性、动力学、时间分辨——小于 30 kDa 且以动力学为核心选 NMR（TROSY 加氘代至约 100 kDa），可结晶且需高通量配体筛选选 X 射线晶体学，大于 100–300 kDa、难结晶或构象不均一选冷冻电镜，拓扑与动态拼图交给 SAXS、FRET、XL-MS 加整合建模；先算后验成默认次序，均一性不合格一票否决。前沿：串晶加混合-喷射（Olmos 等 2018 捕获 β-内酰胺酶酰化中间体）与 XFEL 数十飞秒脉冲支撑毫秒到飞秒时间分辨；cryo-ET 加亚断层平均在合适体系达约 3–4 Å；MicroED 使微米级晶体可解埃级结构（Gonen 组 2013 溶菌酶约 2.9 Å）；AlphaFill、ModelAngelo 与 cryoDRGN 接管 AI 全流程——结构生物学从描绘静态走向拍摄动态。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch5-s2': [
    {
      src: '/images/bio/drawn/sb-ch5-s2-nucleation-kinetics.svg',
      caption:
        '成核与晶体生长动力学：经典成核自由能 ΔG = −(4/3)πr³Δμρ + 4πr²γ 由体项（过饱和驱动）与表面项（界面能抵抗）竞争，临界核半径 r* = 2γ/(Δμρ) 处能垒最高——成核速率 J ≈ A·exp(−ΔG*/kT) 对过饱和度呈指数敏感。蛋白质结晶多经两步成核（先形成致密液滴、再内部有序化）；BCF 螺旋生长机制由位错提供永不停歇的台阶，生长速率约 0.1–10 μm/min——「成核要快、生长要慢」的定量注脚。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch5-s3': [
    {
      src: '/images/bio/drawn/sb-ch5-s3-crystallization-methods.svg',
      caption:
        '结晶五法横截面对照：悬滴蒸气扩散（1–2 μL 液滴对 500 μL 池液，晶体可达 0.3–0.5 mm）、坐滴（0.2–1 μL，晶体 20–80 μm）、微批量（1:1 混合覆油，日失水 5–10% 缓慢浓缩）、微量透析（3.5–10 kDa 膜分隔沉淀剂）与自由界面扩散（扩散系数差的时空调度）——五条通往过饱和的路径各有流速与死角。稀疏矩阵 48 条件初筛耗蛋白不足 100 μL，命中后转入梯度优化；温度梯度结晶利用溶解度随温度的变化另辟蹊径。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch5-s4': [
    {
      src: '/images/bio/drawn/sb-ch5-s4-optimization-toolbox.svg',
      caption:
        '结晶优化四武器：梯度网格围绕命中点三维展开（PEG 15–30%、pH 5.5–8.5、蛋白 5–20 mg/mL 各自细扫）；添加剂屏幕按病因选药（1–10 mM 二价金属、5–10% 甘油等约 200 种小分子）；晶种技术把成核与生长解耦——microseeding 稀释系列 10⁻¹ 至 10⁻⁸ 把核密度纳入可控区间；LCP 脂立方相以 monoolein 与蛋白 2:3 混合，膜蛋白在脂通道内就地扩散成核，是 GPCR 结晶的主战场。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch6-s2': [
    {
      src: '/images/bio/drawn/sb-ch6-s2-rotation-method.svg',
      caption:
        '旋转法数据收集几何：晶体绕轴旋转，倒易格点逐个扫过 Ewald 球面产斑——每帧 0.1–1.0° 窄楔避免斑点重叠，一个反射横跨的帧数 ≈（镶嵌度＋束发散）/帧宽。旋转范围由对称性决定：P1 须 180°、高对称空间群 30–90° 即满全空间。PILATUS 6M 与 EIGER 16M 单光子计数探测器免读出死区；同步辐射一轮 360–1800 帧、总时长 5–30 分钟——曝光与剂量在分辨率与损伤之间精打细算。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch6-s3': [
    {
      src: '/images/bio/drawn/sb-ch6-s3-cryo-damage.svg',
      caption:
        '低温晶体学：Teng 1990 年开创 100 K 液氮流冷却，辐射耐受剂量提高约两个数量级——自由基扩散被冻结是主因。冷冻保护剂甘油 15–25% 防止冰晶形成，收数前检查冰环（3.67/1.92 Å 衍射弧）；Henderson 限量 20 MGy、实验上限 30 MGy，损伤有先后次序：二硫键 2–5 MGy 先断、羧基脱羧、金属中心还原。损伤管理三策：逐区扫描摊薄剂量、多晶合并、原位退火修复可逆部分。',
      credit: DRAWN_CREDIT,
    },
  ],
  'structural-biology-ch6-s4': [
    {
      src: '/images/bio/drawn/sb-ch6-s4-data-quality.svg',
      caption:
        '衍射数据处理与质量评估：指标化（XDS/DIALS/iMOSFLM 枚举 14 种布拉维格子候选）—晶胞精修—三维剖面拟合积分—AIMLESS/XSCALE 缩放合并的四步流水线。R 因子三兄弟以同一组数（100、104、98、102）演示：Rmerge 1.98% 随冗余虚高、Rmeas 2.3% 冗余校正、Rpim 1.1% 度量单次精度；CC1/2（Karplus 与 Diederichs 2012）分半相关为现代截断判据（最外壳约 0.3）。空间群由 Laue 对称加系统消光判定（P2₁2₁2₁ 的 h00 仅 h = 2n），L 检验预警孪晶；惯用验收线完整度大于 95%、I/σ(I) 外壳大于 2、冗余 3–7 倍。',
      credit: DRAWN_CREDIT,
    },
  ],
}
