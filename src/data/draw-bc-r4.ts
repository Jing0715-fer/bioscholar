// ============================================================
// Round 4 自绘插图挂载（bc 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/bc/ → bun scripts/draw/gen.ts bc
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawBcR4: Record<string, Illustration[]> = {
  'biochemistry-ch1-s3': [
    {
      src: '/images/bio/drawn/bc-ch1-s3-polysaccharide-compare.svg',
      caption:
        '淀粉、糖原与纤维素的结构对比：三者均由葡萄糖缩合而成，功能迥异的根源在糖苷键构型——直链淀粉以 α-1,4 键连接成左手螺旋（螺距约 0.8 nm、每圈约 6 个残基），碘分子链嵌入螺旋腔形成蓝色复合物；支链淀粉在 α-1,4 主链上每隔 24–30 个残基引入 α-1,6 分支（碘显紫红色）；糖原分支最密（每 8–12 个残基，碘显红棕色），大量非还原端使磷酸化酶可多点同时动员、快速供能。纤维素以 β-1,4 键连接，残基交替翻转 180° 使链完全伸展，平行链间借氢键网络堆积成微原纤维——人体缺乏 β-糖苷酶故不能消化，反刍动物依赖瘤胃微生物将其转化利用。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch1-s4': [
    {
      src: '/images/bio/drawn/bc-ch1-s4-glycoprotein-proteoglycan.svg',
      caption:
        '糖蛋白与蛋白聚糖的糖链化学：N-连接糖链起始于 Asn-X-Ser/Thr 序列子（X≠Pro），在 ER 内以脂-linked 寡糖前体整体转移后于高尔基修剪再造；O-连接糖链逐个以 UDP-糖供体加于 Ser/Thr 羟基。血型抗原的特异性全在末端糖基——A 抗原比 O 多一个 N-乙酰半乳糖胺、B 抗原换为半乳糖，ABO 系统即红细胞膜糖链末端差异的免疫表型。蛋白聚糖=核心蛋白+糖胺聚糖（GAG）：GAG 由二糖重复单位（氨基糖+糖醛酸）长链构成，沿核心蛋白呈瓶刷状排布；五种主要 GAG（透明质酸、硫酸软骨素、硫酸皮肤素、硫酸乙酰肝素、硫酸角质素）按硫酸化与表位差异分工，赋予软骨抗压与结缔组织基质保水特性。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch2-s4': [
    {
      src: '/images/bio/drawn/bc-ch2-s4-membrane-fluidity-polymorphism.svg',
      caption:
        '膜流动性与脂质多态性：磷脂随温度发生凝胶态⇌液晶态相变（Tm）——链长增加使范德华力增强、Tm 升高；顺式双键造成烃链弯折、降低堆积密度与 Tm；胆固醇在相变点以上限制流动、以下阻止紧密排列，起双向「缓冲」作用。脂质分子形状决定聚集体几何：圆柱形（磷脂酰胆碱）自发形成双层平面；倒锥形（溶血磷脂）倾向胶束/正曲率；锥形（PE）倾向倒六角 HII 相——膜融合的局部结构基础。脂筏是鞘磷脂+胆固醇富集的有序微区（liquid-ordered），集中信号分子与 GPI 锚定蛋白，为膜功能分区提供平台。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch3-s2': [
    {
      src: '/images/bio/drawn/bc-ch3-s2-amino-acid-dissociation-pi.svg',
      caption:
        '氨基酸的解离行为与等电点：中性氨基酸为兼性离子，净电荷随 pH 演变——低 pH 全质子化（净 +1）→ 氨基去质子化成两性离子（净 0）→ 高 pH 羧基也去质子化（净 −1）。pI 可由两端 pKa（侧链无解离时）取均值估算；酸性/碱性氨基酸须计入侧链 pKa（如 Asp pI≈2.98、Lys pI≈9.74）。特征反应：茚三酮与 α-氨基酸共热生成紫色化合物（Ruhemann 紫，570 nm 定量），Pro 因仲胺无自由 α-NH₂ 而显黄色（区别检测）；DNFB（Sanger 试剂）与 PITC（Edman 试剂）均锁定 N 端。A₂₈₀ 紫外吸收来自 Trp 与 Tyr 的吲哚/酚环——蛋白定量无需显色的物理基础。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch3-s3': [
    {
      src: '/images/bio/drawn/bc-ch3-s3-peptide-bond-bioactive-peptides.svg',
      caption:
        '肽键的刚性平面与生物活性肽：肽键 C–N 长 0.133 nm 介于单双键之间——部分双键使「Cα-N-C-Cα」六原子共面（酰胺平面），不能自由旋转；构象自由度全部来自两侧 φ/ψ 角，这正是 Ramachandran 图的横纵坐标。多肽链因此是刚性平面以可旋转单键串联的「铰链串」。生物活性肽举要：谷胱甘肽（GSH）的 γ-谷氨酰半胱氨酸-甘氨酸三肽以 γ-肽键抵抗一般肽酶、巯基执行细胞抗氧化循环；催产素为九肽环（二硫键封环）调节子宫收缩；短杆菌肽等环肽抗生素以环形结构稳定跨膜通道——自然界用化学约束换取结构刚性。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch3-s4': [
    {
      src: '/images/bio/drawn/bc-ch3-s4-primary-structure-sequencing.svg',
      caption:
        '蛋白质一级结构测定的技术演进：Sanger 于 1955 年完成胰岛素全序（51 残基、3 个二硫键）证明蛋白质有确定序列（1958 诺奖）。经典策略用「分子剪刀」制造重叠片段——胰蛋白酶切 Lys/Arg 羧基侧、CNBr 切 Met 羧基侧、胰凝乳蛋白酶切芳香侧——两组片段交叉比对拼出全序；Edman 循环以 PITC 逐个从 N 端切下 PTH-氨基酸，一次可读约 50–60 个残基（自动测序仪时代）。质谱时代：MALDI-TOF 以飞行时间测肽段精确质量，MS/MS 碎裂读出 b/y 离子序列，灵敏度达 fmol 级——从十年一个蛋白到一天全套翻译后修饰图谱。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch4-s2': [
    {
      src: '/images/bio/drawn/bc-ch4-s2-supersecondary-domains.svg',
      caption:
        '超二级结构与结构域的组织层级：二级结构组合成四种常见模体——βαβ（β 折叠-α 螺旋-β 折叠，Rossmann 折叠的构建单元）、β 发夹（两相邻反平行 β 链经转角连接）、螺旋-转角-螺旋（HTH，DNA 结合蛋白的读大沟模块）与希腊钥匙（四链反平行拓扑）。结构域是更大的一级组织：Src 酪氨酸激酶分 SH2（结合磷酸酪氨酸）+ SH3（结合富 Pro 序列）+激酶三个域，域间由调节性连接控制开关。两大经典折叠——TIM 桶（8 平行 β 链内桶+8 α 螺旋外桶，糖酵解酶类常用）与 EF 手（螺旋-环-螺旋，环中配位 Ca²⁺，钙调素含四枚）——展示自然界对稳定骨架的反复借用。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch4-s5': [
    {
      src: '/images/bio/drawn/bc-ch4-s5-ig-fold-prion.svg',
      caption:
        '免疫球蛋白折叠、Anfinsen 原理与朊病毒构象病：免疫球蛋白以 Y 形四链（两条重链+两条轻链）组装，每条链由多个免疫球蛋白结构域串联——β 三明治（两层反平行 β 折叠夹一层二硫键）是可变区/恒定区共用的稳定骨架；五类免疫球蛋白（IgG/A/M/D/E）按重链恒定区分工。Anfinsen 于核糖核酸酶 A 变性复性实验证明：一级结构决定天然构象（热力学自发折叠，ΔG 约 −20～−60 kJ/mol，1972 诺奖）。朊病毒是该原理的病理反转——PrPᶜ（正常 α 螺旋富集）转变为 PrPˢᶜ（β 片层富集），后者作模板催化前者持续转化，构象信息以蛋白质为载体传播（库鲁病、克雅氏病，「蛋白质即传染因子」获 1997 诺奖）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch5-s1': [
    {
      src: '/images/bio/drawn/bc-ch5-s1-enzyme-nature-classification.svg',
      caption:
        '酶的化学本质与分类体系：结合酶=酶蛋白+辅因子——酶蛋白决定底物专一性，辅因子（辅酶松散结合如 NAD⁺、辅基共价/紧密结合如 FAD、血红素）决定反应类型；金属酶以 Zn²⁺/Mg²⁺/Fe²⁺ 等参与结合与催化。酶催化效率为非催化反应的 10⁶～10¹² 倍（转换数 kcat 可达 10⁶ s⁻¹），并具立体异构专一性（底物手性只认一种）。系统分类 EC 六大类按反应本质编号：氧化还原酶、转移酶、水解酶、裂解酶、异构酶、连接酶（合成酶，消耗高能磷酸键）。活性单位 1 IU=每分钟转化 1 μmol 底物；比活力（IU/mg 蛋白）标志纯度——酶学研究与临床酶学的通用语言。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch5-s4': [
    {
      src: '/images/bio/drawn/bc-ch5-s4-enzyme-inhibition.svg',
      caption:
        '酶抑制的三种可逆动力学图形：竞争性抑制——抑制剂与底物竞争同一活性中心，表观 Km 增大而 Vmax 不变（双曲线右移、双倒数图直线交纵轴同点），可被高底物浓度克服（丙二酸抑制琥珀酸脱氢酶为经典）；非竞争性抑制——抑制剂结合酶变构部位，Vmax 下降而 Km 不变（双倒数直线交横轴同点），底物无法克服；反竞争性抑制——抑制剂只结合 ES 复合物，Km 与 Vmax 同比例下降（双倒数图为平行线族）。不可逆抑制走共价修饰路线：有机磷修饰 Ser-OH（胆碱酯酶「致死性抑制」）、氰化物配位细胞色素氧化酶、重金属与巯基结合——碘乙酰胺修饰 Cys 是活性中心鉴定的化学工具。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch5-s5': [
    {
      src: '/images/bio/drawn/bc-ch5-s5-allosteric-regulation.svg',
      caption:
        '别构酶的协同动力学与调控模型：别构酶多为寡聚体，底物结合产生 S 形动力学曲线（而非双曲线）——正协同使酶在底物浓度阈值附近「全或无」式开闭，血红蛋白氧解离为其原型。两种机理解释：MWC（齐变）模型中全部亚基对称地在 T（紧）态与 R（松）态间整体转换；KNF（序变）模型允许亚基逐个变构、中间态存在。别构效应剂结合调节位点改变 T/R 平衡：ATCase（天冬氨酸转氨甲酰酶）受 CTP（终产物）反馈抑制、ATP 激活——嘧啶合成的开关。别构调控与共价修饰（磷酸化级联）、酶原激活（蛋白酶消化级联）共同构成快慢互补的酶活性层级放大体系。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch7-s4': [
    {
      src: '/images/bio/drawn/bc-ch7-s4-rna-types-structure.svg',
      caption:
        'RNA 的种类与结构分工：mRNA 帽-尾结构（5′ m⁷Gppp 帽+3′ poly(A) 20–250 nt）维持稳定并协同翻译起始；tRNA 三叶草二级结构折叠为倒 L 形——一端反密码子读码、一端 3′-CCA 接氨基酸，稀有碱基（假尿苷、二氢尿嘧啶等）含量最高，是分子「适配器」；rRNA 构成核糖体催化核心（23S rRNA 具肽酰转移酶活性，核酶身份），碱基互补撑起亚基骨架。非编码 RNA 家族：miRNA（约 22 nt，介导降解/抑制）、lncRNA（>200 nt，表观调控与支架）等拓展了 RNA 的调控版图——RNA 世界假说的现役证据链。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch8-s4': [
    {
      src: '/images/bio/drawn/bc-ch8-s4-shuttle-po-accounting.svg',
      caption:
        '线粒体穿梭系统与 ATP 计量：线粒体内膜对 NADH 不通透，胞质 NADH 的还原力须经两条穿梭换轨——甘油-α-磷酸穿梭（肌肉、脑为主）把 NADH 氢交给 FAD，进入呼吸链仅产约 1.5 ATP；苹果酸-天冬氨酸穿梭（肝、心为主）经可逆转氨偶联保 NADH 身份，产约 2.5 ATP。P/O 比新口径：NADH→2.5、FADH₂→1.5。据此一分子葡萄糖完全氧化净得 30 ATP（走甘油-α-磷酸穿梭的组织）或 32 ATP（走苹果酸-天冬氨酸穿梭）——旧教材的 36/38 已被 Hinkle 实测修正，能量核算的教学口径随实验精度演进。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch8-s5': [
    {
      src: '/images/bio/drawn/bc-ch8-s5-ros-antioxidant.svg',
      caption:
        '活性氧的产生与抗氧化防御：线粒体呼吸链约 1%～2% 的电子在复合体 I/III 泄漏直接还原 O₂ 成超氧阴离子 O₂•⁻；O₂•⁻ 经 Fenton 反应（Fe²⁺ 催化）与 Haber-Weiss 循环生成攻击力最强的羟基自由基 •OH——无特异酶可清 •OH，只能靠源头控制。酶性清除级联：SOD（超氧化物歧化酶）2 O₂•⁻+2 H⁺→H₂O₂+O₂，歧化产物 H₂O₂ 再由过氧化氢酶（CAT）或谷胱甘肽过氧化物酶（GPx，含硒半胱氨酸）分解；GSH 氧化为 GSSG 后由谷胱甘肽还原酶以 NADPH（磷酸戊糖途径供应）再生。氧化应激失衡与衰老、动脉粥样硬化、肿瘤与神经退行性疾病相关——抗氧化体系的完整性是细胞稳态的底座。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch9-s4': [
    {
      src: '/images/bio/drawn/bc-ch9-s4-gluconeogenesis.svg',
      caption:
        '糖异生的三处旁路与调控枢纽：糖酵解三步不可逆反应被四枚「绕行酶」越过——丙酮酸→草酰乙酸（丙酮酸羧化酶，生物素辅基，线粒体内）→PEP（PEP 羧激酶，耗 GTP）；果糖-1,6-二磷酸→果糖-6-磷酸（果糖二磷酸酶-1）；葡萄糖-6-磷酸→葡萄糖（葡萄糖-6-磷酸酶，肝、肾专属）。总账：从 2 丙酮酸到 1 葡萄糖耗 4 ATP+2 GTP+2 NADH——与糖酵解净产 2 ATP 互为「高价逆行」。Cori 循环：肌肉糖酵解产乳酸入肝、肝异生成糖回运——防乳酸酸中毒并回收碳架。果糖-2,6-二磷酸（F-2,6-BP）是双向开关：激活 PFK-1 促酵解、抑制果糖二磷酸酶-1 抑制异生——胰岛素/胰高血糖素经 PKA 调节其浓度，实现两路径互为倒数。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch10-s2': [
    {
      src: '/images/bio/drawn/bc-ch10-s2-ketone-bodies.svg',
      caption:
        '酮体的生成与利用：肝细胞线粒体内以乙酰 CoA 为原料——HMG-CoA 合酶为限速酶（受胰岛素抑制），硫解后生成乙酰乙酸（约 30%）、β-羟丁酸（约 70%）与微量丙酮。肝「只产不用」：缺乏琥珀酰 CoA 转硫酶（SCOT），酮体专供肝外。心、肾、脑依次把乙酰乙酸活化回乙酰乙酰 CoA（经 SCOT 或乙酰乙酸硫激酶），β-羟丁酸先脱氢回归乙酰乙酸——每分子乙酰乙酸氧化净得约 23.5 ATP、β-羟丁酸约 26 ATP。长期饥饿时脑的能量 50%～70% 由酮体供应（脑糖耗由 120 g/天降至约 40 g），节约肌肉蛋白的糖异生消耗；失控的酮体生成（糖尿病）则致酮症酸中毒。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch10-s3': [
    {
      src: '/images/bio/drawn/bc-ch10-s3-fatty-acid-synthesis.svg',
      caption:
        '脂肪酸的从头合成：原料乙酰 CoA 经柠檬酸-丙酮酸穿梭出线粒体（胞质才是合成车间）。两步关键：乙酰 CoA 羧化酶（ACC，生物素辅基，受柠檬酸激活/长链脂酰 CoA 抑制）生成丙二酰 CoA——二碳供体与限速步骤；脂肪酸合酶（FAS，七个功能域一体的巨型复合体）以 ACP 携臂依次执行缩合-加氢-脱水-再加氢四步循环，7 轮后由硫酯酶释放棕榈酸（16C），共耗 14 NADPH（磷酸戊糖途径与苹果酸酶供应）+7 ATP。人体缺 Δ12 与 Δ15 去饱和酶，亚油酸与 α-亚麻酸不能自造——必需脂肪酸的营养学根源。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch10-s4': [
    {
      src: '/images/bio/drawn/bc-ch10-s4-tag-phospholipid-synthesis.svg',
      caption:
        '甘油三酯与磷脂的合成路径：脂肪动员以激素敏感性脂肪酶（HSL）为限速酶。合成分支自磷脂酸（3-磷酸甘油+2 分子脂酰 CoA）起步：磷脂酸脱磷酸成 DAG，再接第三分子脂酰 CoA 得甘油三酯（TAG）。磷脂两途径：CDP-甘油二酯途径（线粒体/内质网，产 PI 与心磷脂）与 CDP-胆碱/CDP-乙醇胺途径（Kennedy 途径，产 PC 与 PE；肝内限速酶为磷酸胆碱胞苷转移酶——PC 是 VLDL 组装与胆汁成分的关键）。肺泡 II 型细胞的二软脂酰磷脂酰胆碱（DPPC）是肺表面活性物质的主成分——早产儿缺乏致新生儿呼吸窘迫综合征（NRDS）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch10-s5': [
    {
      src: '/images/bio/drawn/bc-ch10-s5-cholesterol-metabolism.svg',
      caption:
        '胆固醇的合成与转化去路：合成于胞质+内质网——18 乙酰 CoA+36 ATP+16 NADPH 经甲羟戊酸（MVA）→鲨烯→环化成 27C 胆固醇；HMG-CoA 还原酶为限速酶（受胆固醇负反馈、昼夜节律与胰岛素/胰高血糖素双向调控）。胆固醇不能被氧化分解，只能转化：胆汁酸（7α-羟化酶限速，肠肝循环日排约 1 g）、类固醇激素（皮质醇/醛固酮/性激素链）与维 D₃（皮内 UV 光转化）。血浆运输靠 LDL（转运胆固醇向组织，受体介导内吞降解）；他汀类药物竞争性抑制 HMG-CoA 还原酶降低内源合成，肝代偿上调 LDL 受体加速血浆清除——家族性高胆固醇血症的受体理论正是 Goldstein-Brown 获 1985 年诺奖的工作。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch11-s1': [
    {
      src: '/images/bio/drawn/bc-ch11-s1-deamination-ammonia-transport.svg',
      caption:
        '氨基酸的脱氨基与氨的无毒运输：转氨基（PLP 辅酶经 Schiff 碱循环传递氨基）+L-谷氨酸脱氢酶（GDH）组成联合脱氨基——主流方式，可逆且高效；肌肉谷氨酸线粒体膜不通透，改走嘌呤核苷酸循环（氨基经 Asp 汇入 IMP→AMP 释放 NH₄⁺）。血氨双载体：谷氨酰胺合成酶在中枢/肌组织把 NH₄⁺ 固定为 Gln（无毒、可经血运至肝肾），谷氨酰胺酶再水解释氨——脑内氨解毒的专职通路（肝昏迷的氨中毒学说核心）；丙氨酸经葡萄糖-丙氨酸循环把肌肉氨基+丙酮酸打包送肝，偶联合异生把葡萄糖送回肌——一份运氨的「回程车票」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch11-s3': [
    {
      src: '/images/bio/drawn/bc-ch11-s3-carbon-skeleton-one-carbon.svg',
      caption:
        '碳骨架去路、生糖生酮分类与一碳单位：氨基酸碳架经转氨后汇入代谢干线——丙酮酸（Ala、Cys、Ser 等）、乙酰 CoA（Ile、Leu、Lys、Phe 等）或 TCA 中间物（α-酮戊二酸、草酰乙酸、琥珀酰 CoA）。分类口径：纯生酮仅 Leu 与 Lys；纯生糖 13 种；生糖兼生酮为 Ile、Phe、Tyr、Trp——判断依据即碳架入口。一碳单位（甲基/甲烯基/甲炔基/亚氨甲基/甲酰基）由四氢叶酸（THF）携带，来源为 Ser、Gly、His、Trp，去向核苷酸合成——dTMP 的甲烯基 THF 供给正是 MTX 类靶点。S-腺苷甲硫氨酸（SAM）是活性甲基通用供体，甲基化后经 SAM 循环再生——与 THF 互为甲基代谢双轨。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch11-s4': [
    {
      src: '/images/bio/drawn/bc-ch11-s4-de-novo-salvage-synthesis.svg',
      caption:
        '核苷酸的从头与补救合成：嘌呤「先 PRPP 后成环」——PRPP 酰胺转移酶为限速酶，逐步装配咪唑环与嘧啶环合成 IMP（共耗 6 ATP），再分支为 AMP（由 Asp 供氨基）与 GMP（由 Gln 供氨基）；嘧啶「先成环后糖苷化」——CPS-II（限速酶，受 UTP 反馈抑制/PRPP 激活）先合成乳清酸，再接 PRPP 得 UMP。脱氧核苷酸一律在二磷酸（NDP）水平由核糖核苷酸还原酶还原。补救途径回收现成碱基：APRT（腺嘌呤）、HGPRT（次黄嘌呤/鸟嘌呤）——HGPRT 缺陷致 Lesch-Nyhan 综合征（自残行为+痛风），PRPP 积堆亦致痛风；化疗药 6-MP 即假次黄嘌呤被 HGPRT 活化后阻断合成的「以假乱真」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch11-s5': [
    {
      src: '/images/bio/drawn/bc-ch11-s5-catabolism-antimetabolites.svg',
      caption:
        '核苷酸分解与抗代谢物的靶点图谱：嘌呤分解止于尿酸——人类缺尿酸酶，尿酸溶解度低，超饱和即析出针状结晶诱发痛风；别嘌呤醇被黄嘌呤氧化酶氧化为别黄嘌呤后牢固结合酶活性中心（自杀抑制），降低尿酸产出。嘧啶开环分解为水溶性 β-丙氨酸/β-氨基异丁酸，不生结晶。抗代谢物「以假乱真」靶点全景：磺胺竞争 PABA 抑制细菌二氢叶酸合成；MTX 竞争抑制二氢叶酸还原酶（阻断 dTMP）；6-MP 阻断嘌呤从头合成；5-FU 转化为 FdUMP 自杀抑制胸苷酸合酶；Ara-C 掺入 DNA 链终止复制——肿瘤化疗的生化设计史即抗代谢物靶点的组合史。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch12-s1': [
    {
      src: '/images/bio/drawn/bc-ch12-s1-organ-metabolic-division.svg',
      caption:
        '主要器官的代谢分工图谱：肝是代谢中枢——葡糖激酶 Km≈10 mmol/L（血糖不高不干活）、G6P 酶与糖原储库使其成为血糖缓冲器；唯一生成酮体与尿素，且自身不利用酮体（SCOT 缺如）。脑日耗葡萄糖 100～120 g，血脑屏障阻脂肪酸——长期饥饿以酮体替代 50%～70% 能量。心肌偏好脂肪酸与酮体（有氧呼吸专业户）；骨骼肌缺 G6P 酶，肌糖原只能经 Cori 循环（乳酸入肝异生）间接补糖。脂肪组织经 LPL 储脂、HSL 动员，并分泌瘦素等激素成内分泌器官；红细胞无线粒体只走糖酵解，2,3-BPG 旁路调节血红蛋白运氧——各器官特有酶谱即分工的分子基础。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch12-s2': [
    {
      src: '/images/bio/drawn/bc-ch12-s2-fasting-stress-fuel-shift.svg',
      caption:
        '饥饿与应激状态的燃料切换时间线：餐后（0–4 h）胰岛素占优——葡萄糖氧化储能、糖原合成与脂肪合成全面开启。短期饥饿（餐后 12–24 h）肝糖原约 24 h 耗尽，糖异生渐成血糖主源（日耗约 75 g 肌肉蛋白）。长期饥饿（3 天以上）酮体渐成脑主要燃料——脑糖耗由 120 g/天降至约 40 g，肌蛋白消耗锐减（生存适配）；脂肪动员成为能量主轴。应激（创伤、感染）即刻启动升糖级联——肾上腺素/皮质醇/胰高血糖素协同：糖原分解+糖异生+脂解+蛋白分解四路并进为「战或逃」供能，胰岛素被压制——与胰岛素的储能镜像互为拮抗，血糖的精细稳态由两套激素的拉锯维持。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch12-s3': [
    {
      src: '/images/bio/drawn/bc-ch12-s3-hormone-camp-cascade.svg',
      caption:
        '激素调节与 cAMP 信号级联：胰高血糖素/肾上腺素与膜受体结合，经 Gs 蛋白（α 亚基换 GDP 为 GTP）激活腺苷酸环化酶合成 cAMP——第二信使激活 PKA，磷酸化下游酶系（磷酸化酶激酶→糖原磷酸化酶开、糖原合酶关），实现促分解；级联逐级放大 10⁶～10⁸ 倍——一个激素分子可动员数十万葡萄糖分子。胰岛素走反向通道：受体酪氨酸激酶（RTK）自磷酸化→IRS 接头→PI3K-Akt 通路促合成（GLUT4 转位入膜摄取葡萄糖、糖原合酶去磷酸化激活）——两套信号互为镜像构成血糖双向稳态；cAMP 由 PDE 降解（咖啡因抑制 PDE 的药理由来）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'biochemistry-ch12-s4': [
    {
      src: '/images/bio/drawn/bc-ch12-s4-network-metabolomics.svg',
      caption:
        '代谢网络与代谢组学概览：三大营养物质经共同节点互联——G6P（糖代谢总闸：糖原/戊糖途径/糖酵解三向分流）、丙酮酸（糖与脂的十字路口）、乙酰 CoA（产能与合成的总枢纽）与草酰乙酸（TCA 回补与糖异生的双向阀）——网络的组织原则：能量状态（ATP/AMP 比）统一调度、互为倒数的双向路径分区隔、区域化（胞质/线粒体）避免空转。代谢组学测定 <1000 Da 小分子全谱：NMR（无偏、可定量但灵敏度低）与 GC-MS/LC-MS（高灵敏、需衍生化或色谱分离）为双主力，数据处理走峰提取→归一化→PCA/PLS-DA 多元统计——疾病生物标志物发现与毒理表型的技术底座。',
      credit: DRAWN_CREDIT,
    },
  ],
}
