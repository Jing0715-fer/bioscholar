// ============================================================
// 自绘插图挂载（xc 学科 · X射线晶体学）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/xc/ → bun scripts/draw/gen.ts xc
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawXcR4: Record<string, Illustration[]> = {
  'x-ray-crystallography-ch1-s3': [
    {
      src: '/images/bio/drawn/xc-ch1-s3-dawn-timeline.svg',
      caption:
        '大分子晶体学的黎明（1934–1969）：1934 年贝尔纳使胃蛋白酶晶体在母液中保持衍射（干燥晶体则无衍射——保湿是蛋白晶体学的第一课）；1953 年佩鲁茨建立重原子同晶置换法；1958 与 1960 年肯德鲁先后解出肌红蛋白 6 Å 与 2 Å 结构；1962 年佩鲁茨与肯德鲁共享诺贝尔化学奖；1964 年霍奇金（青霉素与维生素 B12）、1965 年菲利普斯溶菌酶 2 Å、1969 年中国团队测定胰岛素 2.5 Å 结构。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch2-s1': [
    {
      src: '/images/bio/drawn/xc-ch2-s1-lattice-miller.svg',
      caption:
        '晶体结构＝点阵＋基元；晶胞六参数 a b c α β γ 定义惯用晶胞形状；Miller 指数 (hkl) 标记晶面族对三轴的截距倒数。立方晶系面间距公式 d = a/√(h²+k²+l²)：a = 10 Å 时 (110)/(111)/(210) 面的 d 值分别为 7.07/5.77/4.47 Å。倒易点阵与正空间对偶，倒易格矢长度 d* = 1/d，是布拉格衍射几何与 Ewald 球构造的语言。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch2-s3': [
    {
      src: '/images/bio/drawn/xc-ch2-s3-space-groups.svg',
      caption:
        '空间群的对称操作：螺旋轴 2₁＝旋转 180° 加平移半个周期；滑移面＝反映加分数平移。生物大分子由 L-氨基酸构成，只能落在 65 个 Sohncke 手性空间群（230 空间群的子集）。系统消光规律：P2₁ 使 0k0 的 k 为奇数消光、P2₁2₁2₁ 三轴向指数均须为偶、C 底心格子 h+k 为奇数整体消光——这些缺失反射是实验判定空间群的依据。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch3-s2': [
    {
      src: '/images/bio/drawn/xc-ch3-s2-nucleation-phase.svg',
      caption:
        '结晶相图四区（不饱和/亚稳/成核/沉淀）与经典成核理论：ΔG(r) = 4πr²γ − (4/3)πr³ρΔμ 的表面项与体积项竞争，给出临界核半径 r* = 2γ/(ρΔμ) 与能垒 ΔG* = 16πγ³/(3(Δμ)²ρ²)；成核速率正比于 exp(−ΔG*/kT)，对过饱和度呈指数依赖。两步成核学说中致密液滴先行；晶种技术把成核与生长解耦——亚稳区内「只养不生」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch4-s3': [
    {
      src: '/images/bio/drawn/xc-ch4-s3-bragg-ewald.svg',
      caption:
        '布拉格定律与 Ewald 反射球：2d sinθ = nλ 在 λ = 1 Å 时，d = 2.0/1.0/0.8 Å 对应 θ = 14.5°/30.0°/38.7°。倒易格矢长度 |g| = 1/d；Ewald 球半径 1/λ，按五步作图法构造——倒易格点落在球面上即满足衍射条件；限制球半径 2/λ。分辨率从 2 Å 提高到 1 Å，可测反射数增加约 8 倍，这是高分辨率数据收集代价陡增的几何根源。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch5-s4': [
    {
      src: '/images/bio/drawn/xc-ch5-s4-radiation-dose.svg',
      caption:
        '辐射剂量学：1 Gy = 1 J/kg；Henderson 1995 年估算的剂量极限为 2×10⁷ Gy（20 MGy），Owen 2006 年实验修正放宽至约 30 MGy。特异性损伤的先后次序为二硫键断裂（1–5 MGy 即可检出）→ 金属中心失序 → 羧基去羧 → 酪氨酸邻位损伤；全局损伤四指纹为强度衰减、B 因子上升、晶格膨胀与镶嵌度增大。RADDOSE-3D 输入束流与晶体参数输出三维剂量分布；XFEL 的「衍射先于破坏」是绕开剂量的出路。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch6-s4': [
    {
      src: '/images/bio/drawn/xc-ch6-s4-data-quality.svg',
      caption:
        '数据质量三兄弟与 CC1/2：Rmerge 随冗余恶化（2.8% 至 3.9%）、Rmeas 对冗余校正后恒定（约 4.0%）、Rpim 反映合并后精度（可降至 0.9%）。CC1/2 = 0.143 对应 CC* = 0.5，是现代分辨率截断的主判据；I/σ ≥ 2 的传统惯例退居辅助。整体完整度应 ≥95%，反常数据冗余宜 7–10 倍。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch7-s3': [
    {
      src: '/images/bio/drawn/xc-ch7-s3-mr-modern.svg',
      caption:
        '分子置换的现代实践：旋转函数定取向、平移函数定位置、packing 检验把关；Phaser 的 TFZ 大于 8 大概率为正确解、5–8 存疑，LLG 显著为正。模型来源决策：同源结构序列一致性大于 30% 可直接使用、20–30% 需修剪、小于 20% 宜用 AlphaFold 预测模型（pLDDT 大于 90 的主链误差约 1 Å）；多模型 ensemble 可把约 1 Å 的模型误差压缩过半。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch9-s1': [
    {
      src: '/images/bio/drawn/xc-ch9-s1-density-maps.svg',
      caption:
        '电子密度图的解读：2mFo−DFc 主力图按 1σ 轮廓勾画已知部分，mFo−DFc 差值图以 ±3σ 揭示缺失（正峰）与多余（负峰）；omit 图经「挖区—精修—重构图」三步消除模型偏差，polder 图（Liebschner 2017）对外周小配体提供无偏检验。分辨率决定可见细节：1.2 Å 可辨氢、1.8 Å 键电子分叶、3.2 Å 侧链断续、6 Å 只余螺旋轮廓。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch11-s1': [
    {
      src: '/images/bio/drawn/xc-ch11-s1-ramachandran.svg',
      caption:
        'Ramachandran 图：φ/ψ 平面的 favored/allowed/outlier 三区审判台，outlier 小于 0.5% 为行业惯例，优秀结构 favored 区占比不低于 98%。甘氨酸无 Cβ 约束四象限皆可及，脯氨酸的 φ 锁于约 −60°，pre-Pro 自成一区；β 折叠、αR 与 αL 螺旋的典型区块清晰可辨——每个红叉 outlier 都应逐个给出解释或重建。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch1-s1': [
    {
      src: '/images/bio/drawn/xc-ch1-s1-crystallographic-geometry.svg',
      caption:
        '本图梳理晶体学从矿物形态学到几何语言的四步奠基：左上以石英六棱柱与两组横截面演示 1669 年斯坦诺的晶面角守恒定律——晶面平行内移致外形歪斜，相邻柱面夹角恒为 120°；右上以方解石解理「积木」网格与二维截距图解 1784 年阿羽依的有理指数定律，截距 2a、3b 取倒数得整数比 3:2，三维例 2a、3b、6c 对应 (321)；下方时间线串起 1830 年 32 种晶类、1850 年 14 种布拉维格子、1879 年 65 个 Sohncke 群与 1890–1894 年 230 种空间群的纯几何完备分类；右下为方解石双折射（寻常光 o 与非常光 e）及正交偏光显微镜检定晶系的光路。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch1-s2': [
    {
      src: '/images/bio/drawn/xc-ch1-s2-laue-experiment.svg',
      caption:
        '本图重现 1912 年劳厄实验并延伸至布拉格学派：左上为实验布局——X 射线管经铅光阑准直后射向闪锌矿晶体，直射束与衍射束在底片上留下呈四重对称分布的劳厄斑（首次成功用硫酸铜晶体）；右上为 W.H. 布拉格的电离分光计——晶体置于转台、电离室绕同轴转动逐点定量测量衍射强度，配 2d sinθ = nλ；左下为 1913 年氯化钠结构——Na⁺ 与 Cl⁻ 两套面心立方格子穿插，Na–Cl 最近距离 2.82 Å、配位 6:6 八面体式；右下时间线与莫塞莱定律（标识谱频率平方根与原子序数严格线性）收束至 1915 年布拉格父子诺奖与 1924 年西格班谱学奖。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch1-s4': [
    {
      src: '/images/bio/drawn/xc-ch1-s4-pdb-growth.svg',
      caption:
        '本图以四联面板呈现结构生物学数据基础设施时代：左上为 PDB 条目数对数增长曲线——1971 年建库 13 条，1988 年约 100，1999 年破万，2014 年破十万，2023 年超 20 万条，其中 X 射线晶体学长期贡献约 85%；右上为结构基因组学流水线：基因组序列经克隆、表达、纯化至结晶筛选（96 孔板与纳升级机器人）与数据收集，「目标到结构」漏斗各层产率被统计管理；左下为里程碑结构时间线与基于结构的药物设计链条——1989 年 HIV 蛋白酶结构催生 1995 年沙奎那韦，KcsA、核糖体、β2 受体分别对应 2003、2009、2012 年诺贝尔化学奖；右下为中国贡献：1965 年结晶牛胰岛素全合成与 1971 年起猪胰岛素 2.5 Å 结构测定。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch2-s2': [
    {
      src: '/images/bio/drawn/xc-ch2-s2-bravais-lattices.svg',
      caption:
        '本图以四联面板串起从晶系到空间群的对称性阶梯：左上为七大晶系对晶胞六参数的强制约束表——立方 a=b=c 且三角均 90°、六方 γ=120°、单斜仅 β≠90°、三斜全独立，点群数 5+7+5+7+3+3+2 恰闭合于 32；右上按 P/I/F/C/R 加心方式图示布拉维 1850 年完备枚举的十四种格子，底心四方经基矢变换被约化为四方 P；左下统计蛋白晶体空间群——P2₁2₁2₁ 约占四分之一强、P2₁ 与 C2 次之，三者合计约覆盖一半，低对称群一般位置多重数为 1、对手性分子堆积限制最少；右下为 7 晶系、14 格子、32 点群至 230 空间群的收紧漏斗，并以 Niggli 约化胞说明晶胞参数是约定的产物。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch2-s4': [
    {
      src: '/images/bio/drawn/xc-ch2-s4-macromolecular-crystals.svg',
      caption:
        '本图解析生物大分子晶体区别于小分子晶体的四项性质：左上为溶剂通道截面——蛋白以少量晶格接触相连、约一半体积为贯通母液通道，脆弱怕干，却也是底物浸泡与重原子衍生物扩散的路径；右上为 Matthews 系数 V_M=V_cell/(MW·Z) 与溶剂含量关系 f_s≈1−1.23/V_M，典型区间 1.7–3.5 Å³/Da 对应溶剂 27–65%、典型约 50%，配 V_M=2.5 得 f_s≈51% 的算例；左下以镶嵌块模型解释镶嵌度——理想蛋白晶体 0.1–1°、冷冻常升高两三倍、退火可部分恢复，镶嵌度决定斑点角宽与每帧旋转范围；右下对照表归纳晶体尺寸、溶剂含量、65 个 Sohncke 空间群、常见分辨率 1.5–3 Å 与衍射强度的差异。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch3-s1': [
    {
      src: '/images/bio/drawn/xc-ch3-s1-solubility-behavior.svg',
      caption:
        '本图梳理驱动蛋白结晶的溶解度四因素：左上为离子强度对溶解度的钟形曲线——低盐盐溶（屏蔽静电、增进水化）、高盐盐析，盐析段服从 Cohn 方程 log S=β−Ks·I 半对数直线；右上为 Hofmeister 序列（1888）——阴离子盐析效力自 I⁻ 向 SO₄²⁻ 递增，硫酸铵 4 °C 饱和约 4 M 且构象温和，溶菌酶体系（pH 4.5、3–10% 氯化钠）为教学经典；左下为 pH 维度——溶解度在等电点 pI 附近最低而聚集变性风险最高，筛选常覆盖 4–10；右下图解 PEG 优先排阻机制与五因素常用范围（硫酸铵 0.5–3 M、PEG 400–8000 为 5–40%、温度 4–22 °C、有机溶剂 5–30%），样品底线为 SDS-PAGE 纯度大于 95%。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch3-s3': [
    {
      src: '/images/bio/drawn/xc-ch3-s3-crystallization-methods.svg',
      caption:
        '本图比较五条结晶路线的装置与相图轨迹：左上为悬滴蒸气扩散——1–2 μL 蛋白液滴悬于 0.5–1 mL 池液上方，蒸汽压差驱动水经气相迁入池液、液滴被缓慢浓缩，池液千倍于液滴故平衡终点由池液说了算；右上为坐滴（0.2–1 μL，96 孔自动化主流）与油封微批量——石蜡油近不透水、硅油缓慢透水，油配比即扩散阀门；左下为微透析（MWCO 8–14 kDa 半透膜、外液阶梯换高）与自由界面扩散（局部过饱和峰值自动扫过成核区）；右下把四法轨迹画入相图——蒸气扩散沿等比例浓缩线先穿成核区再回落亚稳区、透析水平推进、界面竖直穿越，Mosquito/Gryphon 机器人以 20–200 nL 液滴把筛选通量提高一至两个数量级。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch3-s4': [
    {
      src: '/images/bio/drawn/xc-ch3-s4-screening-optimization.svg',
      caption:
        '本图呈现先广后深的结晶策略工具箱：左上为稀疏矩阵筛选——Jancarik 与 Kim 1991 年从文献成功条件统计采样浓缩出 48 个彼此尽量不同的条件（Crystal Screen），96 孔板判读分清亮、沉淀、微晶、针状簇与晶体五类；右上为正交网格优化——命中条件居中后沿沉淀剂浓度、pH（半单位间隔）与蛋白浓度三维扫描至最优点，形貌即诊断信息（针状示某晶向过快、微晶淋浴示成核过多、大晶弱衍射示有序度问题）；左下为添加剂六类机制（Zn²⁺ 桥接晶格接触、去垢剂、TCEP、精氨酸、多元醇、精胺）；右下为晶种三法（划种、微晶种 10⁻¹ 至 10⁻⁸ 梯度稀释与 MMS、大晶续长）、膜蛋白脂立方相 LCP 与 SER 表面熵减。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch4-s1': [
    {
      src: '/images/bio/drawn/xc-ch4-s1-xray-sources.svg',
      caption:
        '本图梳理 X 射线源的技术阶梯：左上为 X 射线管结构与 Cu 靶发射谱——热阴极发射电子经 40–60 kV 加速轰击靶面，韧致辐射连续谱上叠加特征线 Kα 1.5418 Å 与 Kβ 1.3922 Å（强度约五分之一），Ni 滤波片以 K 边 1.488 Å 恰卡两线之间选择性滤除 Kβ；右上为实验室源进化——密封管 1–3 kW、旋转阳极 5–18 kW、微焦源以 10–50 μm 电子斑换亮度（提升两至三个数量级）、液态金属靶 Ga Kα 约 1.34 Å；左下为同步辐射——GeV 级储存环（SSRF 3.5 GeV、HEPS 6 GeV）配弯铁、扭摆器与波荡器，准单色谐波经单色器压至 ΔE/E 约 10⁻⁴ 且能量可调；右下为亮度阶梯（三代源约 10²¹、较实验室高 10⁸–10¹⁰ 倍）与波长策略（常规 0.9–1.0 Å、Se 峰 0.9795 Å）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch4-s2': [
    {
      src: '/images/bio/drawn/xc-ch4-s2-xray-matter-interaction.svg',
      caption:
        '本图解析 X 射线与物质相互作用的物理账本：左上为三条通道——汤姆逊弹性相干散射是衍射信号唯一来源（单电子截面约 6.65×10⁻²⁹ m²）、光电吸收（截面近似随 Z⁴λ³ 增长）造成衰减与辐射损伤、康普顿非相干散射抬高弥散背景；右上为原子散射因子 f₀——零角处等于 Z、随 sinθ/λ 单调下降，碳在 0.5 Å⁻¹ 处仅剩约 1.7 个电子、硫约 5.3，反常修正 f=f₀+f′+if″ 在吸收边剧变（Se 峰 f″ 约 4 个电子）；左下为吸收边与指数衰减 I=I₀·e^(−μt)、Se K 边 12.66 keV，空气与挡板散射为低角背景主源；右下为数量级直觉——入射光子进入单个衍射斑的概率仅 10⁻⁸–10⁻¹⁰，并与电子衍射 MicroED（散射强约三个数量级、1–5 μm 微晶可用）对照。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch6-s3': [
    {
      src: '/images/bio/drawn/xc-ch6-s3-scaling-merging.svg',
      caption:
        '本图拆解数据还原的修正链条：左上为缩放模型——每帧一个 scale 因子吸收通量与受照体积差异、B 因子衰减项为辐射损伤建模，I(D)=I(0)e^(−μD)（μ 约 0.02–0.04 MGy⁻¹，每 30–50 MGy 掉一个 e 因子）等价于批间 B 因子线性爬升，参数由对称等效反射一致性最小二乘解出、多以剂量分批折中；右上为各向异性缩放的椭球 B 张量（六参数，主轴差过十几 Å² 提示按方向截断）与吸收修正花瓣样弥散签名（经验法球谐拟合 4–5 阶，反常数据须波长特异）；左下为方差加权合并（冗余加倍、σ 缩至 1/√2）与 4–6σ 正态检验离群剔除；右下为 CC1/2 分半示意（0.143 对应 CC*=0.5）与常规合并、anomalous 保留、质量护栏三层级，MTZ 衔接第 7、8 章。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch7-s1': [
    {
      src: '/images/bio/drawn/xc-ch7-s1-phase-problem.svg',
      caption:
        '相位问题的本质示意。实验只交付强度 I∝|F|²，相位在探测器的时间平均中天然丢失——波长 1 Å 的 X 射线频率约 3×10¹⁸ Hz，0.1 秒曝光里波场完成 3×10¹⁷ 个周期振荡，相位项在平均中彼此抵消。一维傅里叶合成演示相位主导原则：把振幅一律换成常数而保留正确相位，双原子密度峰仍可辨认；保留完美振幅而将相位随机化，图立即退化为噪声。定量刻度上，平均相位误差约 45° 的图已难以解读（FOM≈0.7，须密度修饰抢救），30° 以内主链方可连续追踪，10° 以内侧链细节清楚，FOM 0.85 以上方能舒适建模。图中复平面矢量算术解释了这一不对称：振幅扰动 30% 只缩短矢量而方向不变，45° 相位误差却把矢量转向近正交方向，在数百个反射的矢量求和中构成破坏性干涉。相位复原只能靠先验赎回——分子置换、实验相位与直接法三条路径各携不同先验。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch7-s2': [
    {
      src: '/images/bio/drawn/xc-ch7-s2-patterson-search.svg',
      caption:
        'Patterson 函数与旋转-平移两步搜索。左上以一个五原子分子（C、N、C、O、S）实算其 Patterson 图：P(u)=Σ|F|²·exp(−2πih·u) 不需要任何相位，5×4=20 个向量峰精确对应原子间向量，峰高近似正比两原子原子序数之积 Z₁Z₂，含硫（Z=16）的向量对最亮眼，原点峰为全部原子自我对齐。峰海账目：N 个原子产生 N(N−1) 个峰，约 3000 个原子的蛋白对应近 900 万个向量峰，在 2–3 Å 分辨率下重叠成丘陵；但分子内向量（短于约 10 Å、随分子整体转动）的取向信息幸存，正是旋转函数的本钱。旋转函数（Rossmann 与 Blow 1962）在取向空间做互相关，快速旋转函数（Crowther 1972）以球谐展开把计算量骤降数个数量级；平移函数专看分子间交叉向量，配 packing 硬闸门，两步搜索给候选解、最大似然判据做最终裁决。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch7-s4': [
    {
      src: '/images/bio/drawn/xc-ch7-s4-mr-pitfalls.svg',
      caption:
        '分子置换的陷阱与出路。假解有一副可辨认的面孔，须过三道一致的检验：判据上 TFZ 停在 5–8 边缘区间或多候选分数咬紧（正确解通常一峰独秀）；精修上刚体精修后 R 应从约 0.45–0.50 明显回落至 0.35–0.40 并继续下降，假解的 Rfree 原地踏步、高悬 0.45 以上；图上应长成蛋白的样子——连续主链与可辨二级结构。索引歧义（C 心与 P 格子双重解、四方 tP 与 tI 度规巧合）以 hkl 重索引检验逐支试 MR 审判，出解且精修顺畅者胜。分辨率低于 3.5 Å 时观测参数比恶化，须 NCS 限制与密度修饰两件救生圈，先修相位再动原子。MR-SAD 七步流水线以模型相位点亮反常差值图定位重原子亚结构，双弱互补成强；失败退路依次为纯实验相位（第 8 章）、重新结晶、换构建——唯一不建议的是在假解上反复精修。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch8-s1': [
    {
      src: '/images/bio/drawn/xc-ch8-s1-isomorphous.svg',
      caption:
        '同晶置换法示意。1954 年 Green、Ingram 与 Perutz 为马血红蛋白制备汞与银的重原子衍生物，1956 年 Crick 与 Magdoff 给出相位理论。原理：把少数重原子放进母体晶体的确定位置而不惊扰其余结构——一个 Hg 约 80 个电子（对硫的 16 个），在结构因子上叠加可计算的矢量 F_H；分别测得母体振幅 |F_P| 与衍生物振幅 |F_PH| 后三角形三边齐备，相位圆（Harker 作图）两圆交点即解，如 |F_P|=100、|F_PH|=120、|F_H|=50 的余弦定理解角。SIR 的宿命缺陷是两圆交于两点、相位二义，其更深根源是亚结构对映反转综合出互为镜像的图（α 螺旋全部反向）；MIR 以第二衍生物圆交于同点消解二义，MIRAS 再叠加反常，FOM 常达 0.5–0.8。浸泡化学靶向残基（K₂PtCl₄ 偏好 His/Met、汞类偏好 Cys 巯基），条件扫描以浓度 0.1–10 mM、时间与 pH 为三主轴；同晶性门槛为晶胞变化小于约 1%，差值 Patterson 以 (|F_PH|−|F_P|)² 为系数定位 1–8 个重原子位点。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch8-s2': [
    {
      src: '/images/bio/drawn/xc-ch8-s2-sad-mad.svg',
      caption:
        '反常散射与 SAD/MAD 定相。原子散射因子在吸收边附近须写成 f=f₀+f′+if″：f″（吸收项）在边处升起一座峰——Se 的 K 边 0.9795 Å 处峰值约 3.8 个电子；f′（色散项）急剧下陷，典型可到 −8 至 −10 个电子。f″ 自带 90° 相移使 F(h) 与 F(−h) 不再相等，弗里德定律被打破——图中以矢量实算演示 |F+| 与 |F−| 长度不等即 Bijvoet 差异，兼供相位与绝对构型信息（Bijvoet 1949–1955 年酒石酸钠铷首例；Flack 参数以 0 与 0.5 裁决）。量级：SeMet 峰波长下 Bijvoet 差异典型仅 3%–6%、含硫蛋白约 1% 上下，故反常数据须 7–10 倍以上高冗余。SeMet 经 B834 菌株或代谢抑制掺入、掺入率可超 95%；含硫 SAD 须 1.9–2.7 Å 长波长把 S 的 f″ 从 0.06（1 Å）放大到 0.7–1.1 e⁻。SAD 单峰收集配密度修饰已成常态，MAD 三波长（峰/拐点/远边）剂量翻倍渐成精装选项。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch8-s3': [
    {
      src: '/images/bio/drawn/xc-ch8-s3-density-modification.svg',
      caption:
        '密度修饰与非晶体对称平均。实验相位常带 40°–70° 平均误差，密度修饰用「图应该长什么样」的先验反哺相位。溶剂平坦化（Wang 1985）：蛋白晶体 40%–60% 的体积是溶剂（水约 0.33 e/Å³），以球平均（半径 8–10 Å）识别边界、把溶剂区密度改为常数、反变换取回新相位循环迭代——锁死一半空间的自由度等效于向相位注入强约束，FOM 常在 20–50 轮内从 0.5 爬到 0.7 以上。直方图匹配（Lunin、Zhang 1988–1993）把蛋白区密度分布拉到按分辨率分档的统计标准型（1.5 Å 与 3 Å 分布明显不同）。NCS 平均机理为信号相关、噪声独立，降噪按 1/√n——n=2 残留 0.71、n=5 残留 0.45、球形病毒二十面体 60 倍平均残留 0.13，1985 年前后人鼻病毒与脊髓灰质炎病毒即以五重及更高阶平均逼出可读图。SIGMAA（Read 1986）按概率密度相乘组合多来源相位；相位延伸自 4 Å 级壳层逐层外推到 2 Å。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch8-s4': [
    {
      src: '/images/bio/drawn/xc-ch8-s4-combined-phasing.svg',
      caption:
        '组合定相与自动化流程。MR-SAD 双弱互补：模型相位平均误差 60°–90°（TFZ 5–8 弱解级）配 3%–5% Bijvoet 差异是最典型组合区，以模型相位计算的反常差值图把重原子位点直接点亮，亚结构定位后 SAD 定相与模型相位组合，一轮密度修饰后常一跃到可解读——「两个 60 分凑一个 90 分」。高 NCS 病毒三段式：弱 MR 定骨架、二十面体平均（数十倍级）接管相位、相位延伸逐壳层推高分辨率，1985 年人鼻病毒 14 与脊髓灰质炎病毒分别在 3.5 Å 与 2.9 Å 完成，分辨率常从 3.5–4 Å 推进到 2.5–3 Å。自动流水线编队：SHELXD 以 Patterson 解读加直接法双算法搜位点（CC_weak 约 30% 起判真、位点数与期望相符），SHARP 精修占有率与 B 并算最大似然相位，Solomon/DM 修饰，ARP/wARP 建模；SHELXE 以密度阴影判手性。判成功三级证据：重原子位点一致性（最便宜）、图可读性、自动建模覆盖率（最贵但最诚实）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch9-s2': [
    {
      src: '/images/bio/drawn/xc-ch9-s2-coot-modeling.svg',
      caption:
        'Coot 与真实空间建模工作流。Coot（Emsley 与 Cowtan 2004 年）把密度图与模型同屏渲染，标准开场为双图加载：2mFo−DFc 主图画约 1σ、mFo−DFc 差值图画 ±3σ，模型带着 Ramachandran 与 rotamer 着色进场；map radius 显示半径日常取 8–15 Å，sigma 滑条纪律为判读一律在标准 1σ 下进行、±0.3σ 变幅仅作检验。核心操作五件套各有指纹：Mutate Residue 是 register 校正基本步；Fit Rotamer 从 Lovell 完备库一键挑密度最优构象；Real Space Refine Zone 以密度梯度为势场、几何约束为弹簧，区段三到八个残基为佳；Peptide Flip 的指纹是 ψ 孤悬禁区而主链密度完好，翻转 180° 即愈；Chiral 翻转纠治 Ile 与 Thr 手性中心装反。round-trip 建模-精修循环（Coot 改模型、phenix.refine/REFMAC 精修、新图回 Coot）典型三五个循环收敛，判据为三轮无新发现：验证球清不出新货、差值图无新斑、Rfree 停在平台。配体字典须 GRADE/eLBOW 先行，库缺不裸建。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch9-s3': [
    {
      src: '/images/bio/drawn/xc-ch9-s3-ligand-water.svg',
      caption:
        '配体、水分子与交替构象的建模纪律。配体四步走：差值图 ±3σ 孤立峰簇识别、restraints 字典就位（键长 σ 约 0.02 Å、键角 σ 约 2°、平面组与手性体积约束，由 GRADE/eLBOW 生成）、刚性体拟合、occupancy 与 B 因子一致性检验。一致性逻辑很硬：口袋残基 B 约 25 Å² 而配体 B 只有 12 Å² 等于宣称配体比周围蛋白更硬，是过拟合的经典信号；RSRCC 不低于 0.8 为量化验收口径。occupancy 与 B 以乘积进入结构振幅、拖出简并山谷，纪律是固定其一、永不同轮放开。有序水三要件：差值峰高于 +3σ、氢键供受体距离 2.6–3.0 Å、B 因子与邻近同量级，精修后期在 Rfree 监控下批量添加。交替构象拆分 A/B 且 occupancy 总和锁 1（如 0.6 与 0.4），双峰峰心距以 0.5–1 Å 为宜，低于 3 Å 须克制；幽灵配体（甘油、PEG、硫酸根误认）的代价警示：峰不成形不搭、字典不备不建、检验不过不信。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch9-s4': [
    {
      src: '/images/bio/drawn/xc-ch9-s4-autobuild.svg',
      caption:
        '自动建模与模型检查。ARP/wARP 走自由原子迭代路线——先撒原子后认亲，当原子间距符合相邻 Cα 约 3.8 Å 的节律便连成主链、赋予化学身份并反哺相位滚雪球，优于约 1.7 Å 的数据上主链自动追踪成功率可超 90%；Buccaneer（Cowtan 2006）以概率骨架追踪在 2.5–3.2 Å 中分辨率稳住阵脚；phenix AutoBuild 把密度修饰、自动搭建与短循环精修打包成互为杠杆的轮。AlphaFold 起点的当代姿势是 AF 骨架加密度裁决：model-to-map 逐残基拟合度检验暴露哪里可信，限制性 rebuild 以参考模型限制精修，高 pLDDT 而无密度多为晶体里局部无序。register 错位的教科书像是三联报警：一连串 rotamer outlier、相邻原子 B 因子锯齿、密度与序列错位同现，发现即整段平移重搭。「无密度即不建」以 REMARK 465 如实报告未观测残基；验收五项（主链连续、侧链就位、无显著 clash、密度匹配、register 无误）过关后交棒第 10 章精修。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch10-s1': [
    {
      src: '/images/bio/drawn/xc-ch10-s1-target-function.svg',
      caption:
        '精修的数学基础。蛋白精修从不在「纯数据」上运行：完整目标函数 = 数据项（ML 似然或 LS 残差，权重 wA 调节）加立体化学 restraints 项。最小二乘隐含高斯误差与完备模型两条假设，而衍射数据的光子计数是泊松统计、模型本身不完备，弱数据坏模型处 LS 给出有偏的解；最大似然（Bricogne 1980–1990 年代理论，Pannu 与 Read 1996、Murshudov 等 1997 实用化）不假设模型正确，以 σA 型折扣因子吸收模型误差，成为 REFMAC 与 phenix.refine 的标准内核。数目困境：250 残基约 2000 个非氢原子即约 8000 个参数，2 Å 数据每原子仅约 2–3 个独立观测、3 Å 仅约 1 个——restraints 补足数千条伪观测使问题正定。Engh 与 Huber 1991 年参数集给出键长 σ 约 0.02 Å、键角 σ 约 2°、手性体积 σ 约 0.2 Å³；几何 rmsZ 归位到约 1 为健康。Babinet 原则使低角 Fcalc 系统性偏高，平坦溶剂掩膜以 k_sol 约 0.3–0.4 e/Å³、溶剂 B 40–60 Å² 修正，掩膜更新后 R 常降数个百分点。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch10-s2': [
    {
      src: '/images/bio/drawn/xc-ch10-s2-parameter-hierarchy.svg',
      caption:
        '精修参数的层级与策略。参数分五级：原子坐标每原子 3 个、各向同性 B 每原子 1 个、group B 每组 1 个、各向异性 B 每原子 6 个 Uij 分量、occupancy——参数总数必须与数据量匹配，分辨率每降一档就退一级参数化。账目摊开：250 残基约 2000 个非氢原子全参数化坐标 6000 个、个体 B 再加 2000 个、全各向异性一口气跳到约 12000 个。TLS 参数化（Schomaker 与 Trueblood 1968 年）以平移张量 T（6 参数）、旋转张量 L（9 参数）与耦合张量 S（5 参数）共 20 个参数讲完一个刚体域的弥散，适用约 2 至 3.5 Å；总有效 B = TLS 贡献加残余 B。NCS 分 strict 约束与 tight、medium、loose restraints（σ 约 0.05 Å 至 2 Å）；孪晶靠 H-test 诊断、以孪晶分数 α（0 至 0.5）参数化精修——完美孪晶使 R 异常低而模型可全错。riding 氢几乎不增参数、1.5 Å 起常把 R 与 Rfree 拉低约 1 个百分点；刚体精修（每刚体 6 个自由度）是 MR 后第一步，模拟退火加热 2000 至 5000 K 跳出局部极小。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch10-s3': [
    {
      src: '/images/bio/drawn/xc-ch10-s3-rfree.svg',
      caption:
        '精修循环与 R 因子。Rwork 是工作集上 |F_obs| 与 |F_calc| 的总失配度，致命弱点是单向讨好——塞参数必降 R、无论真假；Brunger 1992 年在 Nature 提出自由 R：随机抽取约 5% 反射（小数据集可至 10%）打入自由集，目标函数、权重与策略一概不许沾，精修完毕对这组「没见过」的反射算 R 即 Rfree。图中演化曲线给出健康与过拟合两种形态：健康组双双缓降、gap 稳定；过拟合组 Rwork 单降而 Rfree 掉头向上。数值锚点：1.8–2.0 Å 结构 Rwork 0.18–0.22、Rfree 0.22–0.26；优于 1.2 Å 可低至 0.12–0.15 与 0.15–0.19；3.0–3.5 Å 为 0.22–0.28 与 0.28–0.35。gap 体温计：Rfree 与 Rwork 差 2 至 5 个百分点健康，高于 7 个百分点即过拟合警报（塞满的水、滥用的各向异性、不该拆的交替构象）。循环三步 rebuild（Coot）、refine（phenix.refine/REFMAC5）、validate（MolProbity）典型 5 至 20 轮收敛；PDB_REDO 全库再精修平均 Rfree 再降约 2 个百分点、几何 outlier 大面积清零。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch10-s4': [
    {
      src: '/images/bio/drawn/xc-ch10-s4-convergence.svg',
      caption:
        '精修收敛与最终模型。工程判据四条全过才算收工：连续数轮 Rwork 与 Rfree 变化都小于 0.1%；Ramachandran、rotamer 与显著 clash 等 outlier 清零或书面解释；差值图无遗留 ±4σ 孤立峰（正峰是未建模物质、负峰是占有率或 B 报错）；B 分布沿主链平滑无锯齿。病案警示：R 停在平台而差值图大片残留是模型系统性缺块的信号——R 只能度量已建模部分的失配。水的最终清点与分辨率匹配：2 Å 每残基约 1 个有序水、全蛋白 200 至 400 个，3 Å 只留少数几十个，3.5 Å 以上放水基本是自欺；每批水以 Rfree 持平或下降为准。B 曲线终审读形态：锯齿指向 register 错位、断崖指向错误的无序建模、全线过平指向 B 未被真精修。结构身份证示例：分辨率 45.0 至 1.8 Å、Rwork 0.19 与 Rfree 0.23（gap 约 4 个百分点）、水 260 个、平均 B 须注明含 TLS 口径；投递前四查（序列对版、二硫键 2.03–2.05 Å、金属配位、配体字典版本），OneDep 投递自动生成验证报告、红色条目终身公开。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch5-s1': [
    {
      src: '/images/bio/drawn/xc-ch5-s1-cryocrystallography.svg',
      caption:
        '100 K 冷氮流横截面：液氮杜瓦送冷流、干燥空气幕防霜，温度稳定在几 K 之内；液氦 40 K 收益递减，约 130 K 以上再结晶。三件套自 1990 年代成标准：损伤放缓几十倍、可长途储运；晶格常数收缩约百分之一。甘油 15–25% 默认，浓度阶梯逐档加五个百分点，多数在两成上下找到窗口。玻璃化只余平缓背景，六方冰在 3.67 与 1.92 Å 出尖锐环，霜为随机强斑；微退火挡流 2–3 秒、大退火回母液重冻；低温代价为构象冻结、镶嵌度 0.1° 升至 0.3–0.8°。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch5-s2': [
    {
      src: '/images/bio/drawn/xc-ch5-s2-rotation-geometry.svg',
      caption:
        '旋转法把「同时衍射」切成每帧少量的流水作业：倒易点阵绕转轴扫过埃瓦尔德球，每帧仅球面薄壳内格点被激发，转轴附近留盲区锥。每帧转角 0.1–1.0°：晶胞边 150 Å 时角间距约 0.76°、可用 0.2–0.3°，晶胞翻倍只剩 0.1–0.15°。波长 1 Å、半宽 100 mm 时，距离 100、150、200 mm 对应可及分辨率 1.31、1.72、2.2 Å。旋转总量随对称性：低对称 180°、高对称群 30–90°；反常数据须对顶位配对；过载斑以衰减器两段式收数化解。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch5-s3': [
    {
      src: '/images/bio/drawn/xc-ch5-s3-strategy-planning.svg',
      caption:
        '三目标互相牵制：完整度高于 95%、常规冗余 3–7 倍、反常 7–10 倍、剂量 5–20 MGy——光子是损伤的货币。每帧 0.1 秒吸收 12 kGy，10 MGy 折合约 830 帧、0.2° 帧宽覆盖 166°；高对称群约 90° 达完整度上限，富余 70 余度把冗余抬到 7 倍。多波长反常按峰、拐点、远边切分剂量 40/30/30。多晶合并：十二颗每晶 0.8 MGy 得完整度 96%、冗余约 9 倍；微光斑缩至 20 μm 背景降一个量级；网格扫描总剂量不足预算百分之一。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch6-s1': [
    {
      src: '/images/bio/drawn/xc-ch6-s1-spotfinding-indexing.svg',
      caption:
        '找斑三重过滤：阈值取局部背景之上 3–6σ，尺寸窗三五个到几十个像素，斑点横宽三到十像素；孤立单像素噪声、冰环粉末斑与坏区以掩膜剔除；像素阵列逐光子计数、电荷耦合器件有溢出条纹。指标化两路：对差矢量做一维傅里叶拎出周期峰，或以网格搜索试铺候选基矢；晶格正确时预测与实测吻合到亚像素。素 tP 与 tI 度规相同，靠奇指数反射消光裁决；孪生以 L 检验与反常低合并 R 立案。空间群四步把 230 个砍到 65 个。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch12-s1': [
    {
      src: '/images/bio/drawn/xc-ch12-s1-serial-xfel.svg',
      caption:
        '串行晶体学与 XFEL 的物理与工程全景。XFEL 三数字：脉宽约 10–100 fs、每脉冲约 10¹² 个光子、峰值亮度比第三代同步辐射高约 9 个数量级，LCLS 2009 年为首台、European XFEL 2017 年达每秒 27000 脉冲。飞秒脉冲在原子位移展开（数十至数百 fs）之前完成衍射——「衍射先于破坏」由 Neutze 2000 年预言、Chapman 2011 年以 Photosystem I 纳米晶体首证、Boutet 2012 年以溶菌酶钉牢至 1.9 Å。GDVN 液体射流命中率仅 1%–10%，固定靶硅芯片步进扫描抬至数十个百分点；数万至百万张图案逐张指标化积分后以 Monte Carlo 平均与 post-refinement 合并，Rsplit 与 CC1/2 监控。剂量逻辑由单晶 20–30 MGy 预算改写为「每晶一次曝光」，单发可越过 Henderson 极限。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch12-s2': [
    {
      src: '/images/bio/drawn/xc-ch12-s2-rt-timeresolved.svg',
      caption:
        '室温与时间分辨晶体学。冷冻的账单：镶嵌度从百分之几度涨至十分之几度、晶格收缩、构象冻结——室温构象系综才贴近生理涨落，实践靠衰减器快速收集与数十颗多晶低剂量合并（每颗 MGy 级以下）。Laue 白光法以全谱一次点亮大量反射，时间窗毫秒至纳秒，靠发色团或笼状化合物光解触发（肌红蛋白 CO，Srajer 1996；Ras-GTP，Schlichting 1990），败于斑点重叠与剂量叠加。混合-喷射串晶把底物扩散（毫秒级）翻译成飞行距离，β 内酰胺酶酰化中间态同线捕集；光激发横跨 fs 至 ms（Nogly 2018 视黄醛异构化、Kern 2018 PSII S₂ 至 S₃）。实验设计三角：触发效率、时间零点同步与剂量窗口互相牵制，每时间点需 10⁴ 至 10⁵ 张图案。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch12-s3': [
    {
      src: '/images/bio/drawn/xc-ch12-s3-complex-systems.svg',
      caption:
        '复杂体系攻坚图景。脂立方相（Landau 与 Rosenbusch 1996 年）以单油酸甘油酯双连续立方相让膜蛋白横向扩散成核——2007 年 β2AR 以 T4 溶菌酶融合＋LCP 双策破门（Cherezov 等），2011–2012 年 GPCR 浪潮接连入库并摘 2012 年诺贝尔化学奖，胆固醇与脂质以坐标身份稳定构象；外膜 β 桶仍走短链去垢剂蒸气扩散（OmpF 系列）。巨型复合物战役：核糖体约 2.4 MDa 三十年战争于 2000 年前后收官（2009 年诺奖）、26S 蛋白酶体约 2.5 MDa 于 2016 年创尺寸纪录、剪接体让位 cryo-EM。体内结晶以高表达局部过饱和成晶，锥虫蛋白酶晶体不经纯化直接送 LCLS（Redecke 2013）；中子衍射直接读出质子化态，须 0.1–1 mm³ 大晶体与氘代。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch12-s4': [
    {
      src: '/images/bio/drawn/xc-ch12-s4-microed-complement.svg',
      caption:
        'MicroED 与技术互补决策。电子弹性散射截面比 X 射线强约 10³ 倍，200 kV 下波长约 0.025 Å 使 Ewald 球近乎平面、完整度天然占优，总剂量比冷冻电镜单颗粒成像低一至两个数量级；代价是动力学散射使强度偏离 |F|²，小分子 R 因子长期停约 20%，动力学衍射精修（Palatinus 2017）将其拉回个位数并支撑绝对构型判定。工业侧微克粉末即可鉴定多晶型与盐共晶，2019 年前后进入 FDA 申报语境；结晶 hit 三岔路：微晶种放大转 X 射线（20 μm 以上）、直接 MicroED、转串晶。选型三问按结晶性、尺寸均一性、分辨率需求收敛成六行决策表；从劳厄到 XFEL 的 110 余年光源-探测器-算法三线并进，剂量、尺寸、温度、时间四大边界正被逐一突破。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch4-s4': [
    {
      src: '/images/bio/drawn/xc-ch4-s4-structure-factor.svg',
      caption:
        '结构因子 F(h)＝Σfⱼ·exp(2πi(h·rⱼ)) 是原子散射波相干叠加：两原子模型（B 居 x＝1/4）实算 h＝1 得 |F|＝√2f（相位 45°）、h＝2 反相归零、h＝4 同相达 2f——振幅消长编码原子位置。实测只记 I∝|F|²，开方得 |F|、相位丢失；体心格子 h+k+l 为奇恒消光，螺旋轴与滑移面另留指纹，供空间群判定。温度因子 exp(−B sin²θ/λ²) 中 B＝8π²⟨u²⟩，蛋白典型 15–50 Å²，B＝20 Å² 即均方根位移约 0.5 Å；ρ(x) 与 F(h) 互为傅里叶变换对，到 2 Å 约 5×10⁵ 项。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch6-s2': [
    {
      src: '/images/bio/drawn/xc-ch6-s2-profile-fitting.svg',
      caption:
        '积分盒围绕预测中心记账：盒内像素扣除边缘环带背景后求和，边长约取斑点半径的 2–3 倍。5×5 盒、背景每像素 10 计数（涨落 3）时求和方差 225，剖面拟合集中权重到约 9 个显著像素、方差降至约 81——信噪比立赚约 1.7 倍且斑越弱红利越肥；拟合强度＝Σ(o·p)/Σ(p²)（Kabsch 2010），模板由中强斑分区平均而得，埃瓦尔德球弯曲使剖面随位置漂移、XDS 按九宫格分区。部分反射按部分性跨帧拼合：0.15° 镶嵌配 0.2° 帧宽约四分之三跨帧，σ 依方差传播合成；过载斑按剖面外推，积分输出未缩放强度与 σ。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch11-s2': [
    {
      src: '/images/bio/drawn/xc-ch11-s2-density-validation.svg',
      caption:
        '密度匹配验证逐残基对账：RSRZ 按残基类型与分辨率标准化，|RSRZ| 高于 2 即传唤——成串报警多为 register 错位、零星尖峰逐个调图（EDS 自动计算）；RSCC 管形状、RSR 管失配。B 因子四判据：主链无锯齿、核心到表面平滑升高、与 Wilson B 同量级、单原子逾 80 Å² 即信号弥散；锯齿、断崖、全线过平为病理指纹。配体四件套（RSRZ、llgf、polder、occupancy·B 终审）：密度弱而 occupancy 报 1、B 反低于周边即红旗三联；map-model FSC 降至 0.5 判模型分辨率。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch11-s3': [
    {
      src: '/images/bio/drawn/xc-ch11-s3-validation-report.svg',
      caption:
        'wwPDB 验证报告（Read 2011；OneDep 2012 起强制生成）三层：首页给绝对值加百分位（Rwork/Rfree 0.19/0.23、clashscore 3.2 居前 5%）、outlier 清单点名到残基、数据质量节看完整度；百分位按分辨率分组——clashscore 好于 95% 同期即前 5%。PDB_REDO（Joosten 2009 起）全库再精修：平均 Rfree 再降约 2 个百分点、Ramachandran/rotamer outlier 清零——入库不等于定稿；原始衍射图存档使每步可重走。',
      credit: DRAWN_CREDIT,
    },
  ],
  'x-ray-crystallography-ch11-s4': [
    {
      src: '/images/bio/drawn/xc-ch11-s4-model-bias.svg',
      caption:
        '模型偏差是确认偏误的晶体学版本：MR 模型带错→相位继承→差值图把错误画成密度→精修后 R 仍在降，错误纹丝不动。三个历史现场：1940 年代青霉素密度终审 β 内酰胺四元环；1984 年 Shechtman 准晶（2011 诺奖）破「体面解释」，Pauling 孪晶说争议多年；1990 年 Brändén 与 Jones 评论催生验证文化。五道防线（omit/polder、实验定相、Rfree 交叉验证、PDB_REDO、独立重复）无一单独充分；验证是结构生物学的免疫系统，库以 obsolete/superseded 自我修正。',
      credit: DRAWN_CREDIT,
    },
  ],
}
