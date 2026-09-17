## Task ID: 32-a —— 分子生物学重建（第 1–3 章 + 批次 A1 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/mb/ch1.ts（mbCh1 分子生物学绪论，4 节）
  - src/data/subjects/mb/ch2.ts（mbCh2 染色体、染色质与基因组结构，4 节）
  - src/data/subjects/mb/ch3.ts（mbCh3 DNA 复制，4 节）
  - src/data/quiz/molecular-biology-a1.ts（molecularBiologyQuizA1，15 题 q-molecular-biology-1~15，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1）
  - src/data/glossary-molecular-biology-a1.ts（molecularBiologyGlossaryA1，5 条 g-21~g-25：中心法则/核小体/异染色质/冈崎片段/端粒酶）
- 校验：bun run scripts/validate-chapters.ts molecular-biology src/data/subjects/mb/ch1.ts src/data/subjects/mb/ch2.ts src/data/subjects/mb/ch3.ts →「✓ molecular-biology：3 章共 12 节全部通过」；各节 2612–2708 字符、每节 5 个 H2、均含表格；quiz/glossary 结构自检通过（解析与 definition 均 ≥80 字）；bunx tsc 对产出文件无类型错误。
- 备注：scripts/validate-chapters.ts 在本沙箱中缺失（多份任务简报均引用该共享脚本），已按简报规则重建为只读校验脚本供各批次共用；未改动任何其他既有文件。subjectId 已在主体 SubjectId 联合类型中，直接使用 'molecular-biology' 字面量。

## Task ID: 33-a-fix（细胞生物学 ch1-3 扩写修复）
- 范围：仅重写 src/data/subjects/cb/ch1.ts、ch2.ts、ch3.ts（导出 cbCh1/cbCh2/cbCh3、章结构与节标题均不变；未改动其他任何文件）。
- 问题：12 节原仅 1724–2428 字符（未达 2600 下限），且 ch1-s4 缺表格。
- 处理：超集式扩写（保留原全部知识点、H2 主题、表格与数值），补足机理分步（Na⁺-K⁺ 泵 E1/E2 循环、泛素 E1-E2-E3 级联、SRP 介导的共翻译转运分步、大自噬流程）、定量数据（人体约 37 万亿细胞、肾日滤过葡萄糖约 180 g、红细胞膜蛋白:脂:糖约 5:4:1）、经典实验（Remak 1852、Zernike 1935/1953 诺奖、Woese 1977 三域、Frye-Edidin 1970、Palade 脉冲-示踪、Golgi 1906 诺奖）、临床联系（支原体非典型肺炎、遗传性球形红细胞增多症、GLUT1 缺陷综合征、慢性肉芽肿病、他汀与 LDL 受体、硼替佐米、西柚汁-CYP3A4、UPR 与 2 型糖尿病、酶替代与血脑屏障）、易混淆对照表（病毒 vs 细胞、N vs O 糖基化、通道 vs 载体）。
- 字数（前 → 后）：ch1 2428/1959/2172/1950 → 3015/2739/2716/2659；ch2 2170/2089/2366/2229 → 2658/2624/2834/2660；ch3 1724/2026/2136/2237 → 2640/2660/2627/2715。每节 4–5 个 H2、含表格；keyPoints 5–6、terms 5–7；summary 与 keywords 不变。
- 校验：bun run scripts/validate-chapters.ts cell-biology src/data/subjects/cb/ch1.ts src/data/subjects/cb/ch2.ts src/data/subjects/cb/ch3.ts → 「✓ cell-biology：3 章共 12 节全部通过」；bunx tsc 无相关类型错误。

## Task ID: 31-b-fix（生物化学 ch4–6 扩写修复）
- 范围：仅修改 src/data/subjects/bc/ch4.ts、ch5.ts、ch6.ts（导出 bcCh4/bcCh5/bcCh6、章结构、节标题、summary、keywords、keyPoints、terms 均不变；未改动其他任何文件）。
- 问题：6 节字数不足 2600 下限——ch4-s2 2443、ch4-s3 2582、ch5-s3 2486、ch6-s2 2533、ch6-s3 1620、ch6-s4 2205。
- 处理：超集式扩写（保留原全部知识点、H2、表格与数值），补深度：机理与立体化学（Richardson 右手交叉规则、Dunathan 1970 PLP 立体电子假说、非竞争/反竞争表观动力学式）、定量数据（折叠自由能 20～60 kJ/mol、8 M 尿素/6 M 胍、胶原超螺旋螺距 8.6 nm、游离血红素 CO/O2 两万倍压至 Mb 约 30 倍/Hb 约 200 倍、红细胞 Hb 约 5 mmol/L（340 g/L）、维生素 C 体池 1500 mg 与 300 mg 症状阈值、25-OH-D3 界值 50/75 nmol/L）、经典实验人物年代（O'Shea 1991 GCN4 拉链晶体、Prusiner 1982 朊蛋白、Cheng-Prusoff 1973、Vane 1971/1982 诺奖、von Itzstein 1993 神经氨酸酶过渡态设计、Addison 1849/Minot-Murphy 1926-1934/Castle 1929/Hodgkin 1956 恶性贫血与 B12、Hecht 1942 单光子察觉、达伽马 1497/卡蒂埃 1535/Lind 1753 与 1795 海军条例、Link 与 WARF 华法林史）、临床联系（骨发生不全与 EDS、同型半胱氨酸尿症、卡比多巴-左旋多巴、神经管第 26～28 天闭合与备孕期补酸、AVED、INR 2～3、Pauling 剂量之争与 RCT 汇总 8%/14%）、对照表（识别类模体参数表、B6 缺乏病表行、水溶性维生素储备时间谱）。
- 字数（前 → 后）：ch4-s2 2443→3364、ch4-s3 2582→3331、ch5-s3 2486→3166、ch6-s2 2533→3315、ch6-s3 1620→2942、ch6-s4 2205→2930；其余 6 节逐字保留（ch4-s1 2843、ch4-s4 2797、ch5-s1 2719、ch5-s2 2614、ch5-s4 2600、ch6-s1 2680）。
- 校验：bun run scripts/validate-chapters.ts biochemistry src/data/subjects/bc/ch4.ts src/data/subjects/bc/ch5.ts src/data/subjects/bc/ch6.ts → 「✓ biochemistry：3 章共 12 节全部通过」；bunx tsc 对这三章无类型错误（现存报错均位于 next.config/api 路由/组件等既有无关文件）。

## Task ID: 31-c —— 生物化学重建（第 7–9 章 + 批次 A3 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/bc/ch7.ts（bcCh7 核酸化学，4 节：核苷酸与核酸的化学组成/DNA 的双螺旋结构/RNA 的结构与类型/核酸的理化性质）
  - src/data/subjects/bc/ch8.ts（bcCh8 生物能学与生物氧化，4 节：热力学基础与自由能/电子传递链/氧化磷酸化/线粒体穿梭与 ROS）
  - src/data/subjects/bc/ch9.ts（bcCh9 糖代谢，4 节：糖酵解/三羧酸循环/磷酸戊糖途径与糖异生/糖原代谢与血糖调节）
  - src/data/quiz/biochemistry-a3.ts（biochemistryQuizA3，15 题 q-biochemistry-31~45，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-biochemistry-a3.ts（biochemistryGlossaryA3，5 条 g-11~g-15：双螺旋/解链温度 Tm/化学渗透学说/三羧酸循环/糖异生）
- 内容要点：数值教材口径（B 型 3.4 nm·10 bp·0.34 nm·直径 2 nm·大沟 2.2 nm；Tm≈69.3+0.41×GC%；ΔG°′ ATP -30.5/PEP -61.9/1,3-BPG -49.4/磷酸肌酸 -43.1 kJ/mol；电位 NAD+ -0.32 V/泛醌 +0.10/Cytc +0.235/氧 +0.816 V、ΔG≈-nFΔE≈220 kJ；泵 H+ 4/0/4/2、P/O 2.5 与 1.5、30/32 ATP、穿梭 1.5 vs 2.5；mtDNA 16 569 bp·37 基因；糖酵解净 2 ATP+2 NADH、TCA 每轮 3 NADH+1 FADH2+1 GTP、每乙酰 10 ATP；糖异生 4 ATP+2 GTP；肝糖原 70–100 g、肌 300–400 g、血糖 3.9–6.1 mmol/L）；经典实验（Watson-Crick 1953/1962 诺奖、Chargaff 1950、Sutherland 1957/1971、Cech-Altman 1989、Mitchell 1961/1978、Boyer-Walker 1997、Jagendorf 1966、McCord-Fridovich 1969、Harman 1956、Buchner 1897、Meyerhof 1922、Krebs 1937/1953、Cori 1947、Meselson-Stahl 1958）；每节 ≥4 个 H2 且均含表格（每章 1–2 张：B/A/Z 型对照、RNA 类群表、变性条件表、能级表、复合体表、试剂表、穿梭表、十步能量表、八步反应表、绕行酶表、合成分解对照表等）。
- 校验：bun run scripts/validate-chapters.ts biochemistry src/data/subjects/bc/ch7.ts src/data/subjects/bc/ch8.ts src/data/subjects/bc/ch9.ts →「✓ biochemistry：3 章共 12 节全部通过」；各节字数 ch7 2610–2719 / ch8 2623–2702 / ch9 2671–2677 字符，H2 4–5 个；quiz 15 题解析均 ≥80 字、题型与难度分布自检通过；glossary 5 条定义均 ≥80 字（268–313 字）；bunx tsc 对产出文件无类型错误（无关既有报错除外）。
- 备注：未改动产出文件之外的任何文件；写作过程中按简报逐章落盘并即时校验（ch7 一次返工、ch8 一次返工、ch9 一次返工扩写至达标）。

## Task ID: 32-c —— 分子生物学重建（第 7–9 章 + 批次 A3 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/mb/ch7.ts（mbCh7 翻译与蛋白质靶向，4 节）
  - src/data/subjects/mb/ch8.ts（mbCh8 原核基因表达调控，4 节）
  - src/data/subjects/mb/ch9.ts（mbCh9 真核基因表达调控，4 节）
  - src/data/quiz/molecular-biology-a3.ts（molecularBiologyQuizA3，15 题 q-molecular-biology-31~45，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1）
  - src/data/glossary-molecular-biology-a3.ts（molecularBiologyGlossaryA3，5 条 g-31~g-35：氨酰 tRNA 合成酶/操纵子/衰减/微小 RNA/泛素-蛋白酶体途径）
- 校验：bun run scripts/validate-chapters.ts molecular-biology src/data/subjects/mb/ch7.ts src/data/subjects/mb/ch8.ts src/data/subjects/mb/ch9.ts →「✓ molecular-biology：3 章共 12 节全部通过」；各节 2604–3020 字符、每节 4–6 个 H2、均含表格；quiz/glossary 结构自检通过（解析最小 167 字、definition 最小 322 字，均远超 80 字下限；题号 31~45 连续、每章题型与难度配比符合要求）；bunx tsc 全项目检查无本批次文件的类型错误。
- 备注：内容严格按 32-mb-brief 大纲（第 7–9 章四节制）；数值取教材口径（147 bp 之外本批次如 70S/80S 组成、LacI 约千倍阻遏、CAP 位点约 −60 bp、trp 前导区 162 nt/14 aa 前导肽/约 70 倍阻遏、his 七连密码子、大肠杆菌约 30 套双组分系统、rRNA 合成降至约十分之一、人类约 1600 个转录因子、约 2000 条 miRNA、约 20% 肿瘤带 SWI/SNF 突变、2004/2006 诺奖等）。未改动产出文件之外的任何文件（主体 SubjectId 联合类型已含 molecular-biology，直接使用字面量）。

## Task ID: 34-b —— 生物物理重建（第 4–6 章 + 批次 A2 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/bp/ch4.ts（bpCh4 生物大分子的力学与马达，4 节：单分子力谱/分子马达/鞭毛与细菌游动/细胞力学）
  - src/data/subjects/bp/ch5.ts（bpCh5 辐射生物物理与光谱，4 节：电磁波谱与生物效应/吸收光谱/荧光光谱/圆二色与振动谱）
  - src/data/subjects/bp/ch6.ts（bpCh6 蛋白质折叠与错误折叠，4 节：折叠热力学与动力学/分子伴侣/错误折叠与淀粉样变/相分离生物物理）
  - src/data/quiz/biophysics-a2.ts（biophysicsQuizA2，15 题 q-biophysics-16~30，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1）
  - src/data/glossary-biophysics-a2.ts（biophysicsGlossaryA2，5 条 g-66~g-70：光镊/蠕虫链模型/荧光共振能量转移/朊蛋白/液-液相分离）
- 校验：bun run scripts/validate-chapters.ts biophysics src/data/subjects/bp/ch4.ts src/data/subjects/bp/ch5.ts src/data/subjects/bp/ch6.ts →「✓ biophysics：3 章共 12 节全部通过」；各节字数 2608–2921 字符、每节 5 个 H2、均含表格（每章 2 张：技术对比/马达参数/游泳者对照/力学测量；波段-剂量/生色团/荧光团/CD 指纹；折叠速率/伴侣家族/淀粉样病/膜细胞器对照）；quiz 15 题解析均 ≥80 字（实测 160–290 字）、题型与难度分布自检通过；glossary 5 条 definition 均 ≥80 字（实测 230–330 字）；bunx tsc 全项目检查未涉及本批次文件的类型错误。
- 内容要点：数值教材口径（光镊 0.1 pN 分辨率与 0.01–1 pN/nm 刚度、titin 150–250 pN 与 28 nm 峰距、WLC p 值 dsDNA 50 nm/ssDNA 1 nm/肽链 0.4 nm；ATP 约 80 pN·nm 即 20 kT、kinesin 8 nm 步距 5–7 pN 失速、myosin V 36 nm；鞭毛马达 1300 pN·nm、每转约 1000 H+、pmf −170 mV、Re 约 10⁻⁵；皮层张力 0.05–0.5 pN/nm、talin 7–10 pN、干细胞 0.1–1 vs 10–40 kPa；E(eV)=1240/λ(nm)、每 Gy 35–40 DSB、LD50/60 3–4 Gy、LET γ 0.2–3 vs α 50–250 keV/μm、权重因子 1/2/20；A260=1 对应 dsDNA 50 μg/mL、A260/A280 1.8/2.0/0.5–0.6、Fura-2 Kd 224 nM、FRET R0 2–7 nm、CD 208/222 双负、酰胺 I 1600–1700 cm⁻¹、¹³C 位移约 40 cm⁻¹、KIE 上限 6–7；稳定裕度 20–60 kJ/mol、Levinthal 10⁴⁸ 构象约 10²⁸ 年、GroEL 800 kDa/7 ATP/60 kDa 筛限、交叉 β 0.47 nm、PrP 253 aa；LLPS 粘点-间隔与 1,6-己二醇等）；经典人物年代（Ashkin 2018、Svoboda-Block 1993、Finer 1994、Lymn-Taylor 1971、Purcell 1977、Gajdusek 1976、Prusiner 1997、Brangwynne 2009、Engler 2006、Coste 2010、Ritossa 1962、Laskey 1978、Levinthal 1968-69、Bryngelson-Wolynes 1990s、Eanes-Glenner 1968、Hardy-Higgins 1991-92、Alzheimer 1906 等）。
- 备注：按简报逐章落盘、逐章即时校验并返工扩写（8 节首版 2228–2578 字符，经机理分步、定量补充、临床联系扩写至达标）；正文已逐项规避反引号/模板插值/H3/HTML/emoji/箭头符号/制表符；未改动产出文件之外的任何文件（主体 SubjectId 已含 biophysics，聚合文件 biophysics.ts 与 quiz/biophysics.ts 未动）。

## Task ID: 33-c —— 细胞生物学重建（第 7–9 章 + 批次 A3 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/cb/ch7.ts（cbCh7 细胞通信与信号转导，4 节：信号转导基本原理/G 蛋白偶联受体/酶联受体/信号网络整合）
  - src/data/subjects/cb/ch8.ts（cbCh8 细胞增殖与细胞周期，4 节：细胞周期概貌/CDK 与周期蛋白引擎/检验点与调控/细胞周期与疾病）
  - src/data/subjects/cb/ch9.ts（cbCh9 细胞分化与干细胞，4 节：细胞分化的分子基础/干细胞/重编程与 iPS/组织更新与再生）
  - src/data/quiz/cell-biology-a3.ts（cellBiologyQuizA3，15 题 q-cell-biology-31~45，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-cell-biology-a3.ts（cellBiologyGlossaryA3，5 条 g-51~g-55：G 蛋白偶联受体/第二信使/周期蛋白依赖性激酶 CDK/诱导多能干细胞/干细胞巢）
- 内容要点：数值教材口径（GPCR 约 800 个、药物约三分之一；cAMP 10⁻⁸ 升至 10⁻⁶ M、全链放大 10⁶ 倍、Ca²⁺ 10⁻⁷ 与 10⁻⁶ M、钙调蛋白 17 kDa 4 个 EF 手、RTK 约 58 个/约 20 亚家族、KRAS 肿瘤约四分之一、核受体约 48 个、视杆单光子；周期 24 h=G1 11/S 8/G2 4/M 1、爪蟾早胚 30 min、酵母 90–120 min、CDK2 Thr160/CDK1 Thr14-Tyr15、p53 半衰期约 20 min、TP53 过半肿瘤、Li-Fraumeni 风险逾九成、帕博西尼 PFS 约 10 对约 24 个月；约二百余种细胞、内细胞团约 20–30 个细胞、HSC 低于 0.01% 骨髓有核细胞、日造血约 10¹¹、iPS 效率 0.01%–0.1%、小肠 3–5 天、表皮约 28 天、红细胞 120 天、肝细胞约 300 天、肝 70% 切除 7–10 天、斑马鱼心肌约五分之一）；经典实验人物年代（Sutherland 1957/1971、Lefkowitz-Kobilka 2012、Masui-Markert 1971、Hunt 1982、Hartwell/Nurse 2001、Pardee 1974、Hartwell-Weinert 1988、Till-McCulloch 1961、Evans-Kaufman 1981/Thomson 1998、Schofield 1978、Gurdon 1962、多利 1997、克隆猴 2018、Yamanaka 2006/2007/2012、Higgins-Anderson 1931、Sato-Clevers 2009、Huh 肺芯片 2010、PC12 信号动力学、新生鼠心尖再生）；每节 ≥4 个 H2 且均含表格（每章 1–2 张：通信方式表、Gs/Gi/Gq 表、四大通路表、网络基序表、周期时间表、CDK 组合表、检验点表、化疗靶点表、核移植里程碑表、三类干细胞比较表、递送策略表、组织更新速率表）。
- 校验：bun run scripts/validate-chapters.ts cell-biology src/data/subjects/cb/ch7.ts src/data/subjects/cb/ch8.ts src/data/subjects/cb/ch9.ts →「✓ cell-biology：3 章共 12 节全部通过」；各节字数 ch7 2626–2876 / ch8 2607–2634 / ch9 2602–2709 字符，H2 5–6 个；quiz 15 题解析均 ≥80 字（自检脚本通过，题号 31~45 连续、每章题型 single 3/tf 1/multiple 1、难度 1:3:1）；glossary 5 条定义均 ≥80 字（257–310 字）；bunx tsc 全项目检查，新增五个文件零类型错误（既有 5 处报错均位于 next.config/api 路由/wrongbook-view 等无关文件）。
- 备注：未改动产出文件之外的任何文件；按简报逐章落盘并即时校验（ch7、ch8、ch9 各经一至三轮扩写至达标；过程中修正个别错字与中英混排）。quiz 与 glossary 批次文件为独立导出，未在聚合层注册（沿用 A1/A2 批次同样的落盘约定）。

## Task ID: 34-c —— 生物物理重建（第 7–8 章 + 批次 A3 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/bp/ch7.ts（bpCh7 光生物物理，4 节：光合作用的能量物理/视觉的光物理/光感受器与光遗传/生物发光）
  - src/data/subjects/bp/ch8.ts（bpCh8 电学与磁学生物效应，4 节：生物电基础/神经电信号/磁场与生物/电磁场医学应用）
  - src/data/quiz/biophysics-a3.ts（biophysicsQuizA3，10 题 q-biophysics-31~40，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=2/6/2）
  - src/data/glossary-biophysics-a3.ts（biophysicsGlossaryA3，5 条 g-71~g-75：光遗传学/绿色荧光蛋白/Hodgkin-Huxley 模型/调强放疗/跳跃传导）
- 校验：bun run scripts/validate-chapters.ts biophysics src/data/subjects/bp/ch7.ts src/data/subjects/bp/ch8.ts →「✓ biophysics：2 章共 8 节全部通过」；各节字数 ch7 2614–2806 / ch8 2630–2801 字符、每节 4 个 H2、均含表格（每章 2 张：ch7 光合时间表/感光细胞表/光感受器家族表/发光体系表；ch8 EEG 频段表/无髓有髓对照表/MRI 参数表/放疗技术表）；quiz 10 题解析均 ≥80 字（实测 218–290 字）、题号 31~40 连续、每章题型与难度配比自检通过；glossary 5 条 definition 均 ≥80 字（实测 298–363 字）；bunx tsc 全项目检查无本批次文件相关类型错误；正文额外自检无反引号/模板插值/H3/HTML/emoji/链接/制表符。
- 内容要点：数值教材口径（680 nm 光子约 1.82 eV、8 光子/CO2、电荷分离约 3 ps、QA 约 200 ps、量子效率近 100%；视黄醛异构约 200 fs、量子产额约 0.67、R* 活化数百 Gt、PDE6 每秒上千 cGMP、暗电流约 20 pA、L/M/S 约 560/530/420 nm、男性红绿色盲约 8%；ChR2 电导约 40–70 fS、地磁 25–65 μT、射频干扰约 1.3 MHz、GFP 量子产额约 0.8、EGFP 约 55 000 M⁻¹cm⁻¹/0.6、萤火虫发光量子产额约 0.8–1.0、发射约 560 nm；心电毫伏级/脑电微伏级、QRS 主波约 0.06–0.1 s、EEG 频段 δ0.5–4 至 γ>30 Hz、EIT 约 50 kHz、电外科大于约 100 kHz；HH 四方程 m³h/n⁴、枪乌贼轴突约 20 m/s、有髓 50–100 m/s、郎飞结间距 0.2–2 mm、髓鞘降电容约两个数量级、DBS 约 130 Hz、BrainGate 语音错误率约 3%–10%；MRI 拉莫尔 42.58 MHz/T、3 T 约 128 MHz、T1 脂肪约 250 ms、TMS 皮层约 100 V/m 上升约 100 μs；除颤双相 120–200 J 经 50–100 Ω、延迟一分钟降 7%–10%、起搏脉宽约 0.5 ms/1–3 V、IMRT 分割约 1.8–2 Gy、SAR 公众 0.08/职业 0.4 W/kg、50 Hz 参考水平约 100–200 μT 等）；经典人物年代（Deisenhofer-Michel-Huber 1985/1988、Hecht-Schlaer-Pirenne 1942、Einthoven 1903/1924、Berger 1924、Hodgkin-Huxley 1952/1963、Schulten 1978、Boyden-Deisseroth-张锋 2005、下村脽 1962/Chalfie 1994/钱永健 2008、MADIT 系列等）。
- 备注：按简报逐章落盘并即时校验（ch7 首版 3 节字数不足、一段模板闭合反引号遗漏致语法错误，经修复与三轮扩写至达标；ch8 一节经两轮扩写至达标）；quiz 与 glossary 批次文件为独立导出，未在聚合层注册（沿用 A1/A2 批次落盘约定）；未改动产出文件之外的任何文件。

## Task ID: 33-d —— 细胞生物学重建（第 10–12 章 + 批次 A4 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/cb/ch10.ts（cbCh10 细胞衰老与死亡，4 节：细胞衰老/细胞凋亡/程序性坏死的其他形式/自噬性细胞死亡与死亡选择）
  - src/data/subjects/cb/ch11.ts（cbCh11 细胞的社会性，4 节：细胞连接/细胞外基质/细胞黏附与识别/细胞迁移与肿瘤转移）
  - src/data/subjects/cb/ch12.ts（cbCh12 细胞生物学前沿与技术，4 节：超分辨与活细胞成像/光遗传与化学遗传/类器官与合成生物学/疾病的细胞生物学视角）
  - src/data/quiz/cell-biology-a4.ts（cellBiologyQuizA4，15 题 q-cell-biology-46~60，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-cell-biology-a4.ts（cellBiologyGlossaryA4，5 条 g-56~g-60：细胞凋亡/细胞衰老/铁死亡/上皮-间质转化（EMT）/光遗传学）
- 校验：bun run scripts/validate-chapters.ts cell-biology src/data/subjects/cb/ch10.ts src/data/subjects/cb/ch11.ts src/data/subjects/cb/ch12.ts →「✓ cell-biology：3 章共 12 节全部通过」；各节字数 ch10 2656–2868 / ch11 2604–2675 / ch12 2603–2643 字符，H2 5–6 个、均含表格（每章 2 张：端粒与应力两路径表、内外源凋亡途径表、四种死亡方式比较表、死亡干预药物表；五类细胞连接表、ECM 成分表、黏附家族表、转移级联表；超分辨四法对比表、光遗传 vs 化学遗传表、类器官 vs 2D vs 动物表、细胞治疗形式谱系表）；quiz 自检脚本通过（题号 46~60 连续、每章题型 single 3/tf 1/mult 1、难度 1:3:1、解析最短 157 字均超 80 字下限）；glossary 5 条 definition 297–372 字；bunx tsc 全项目检查，新增五个文件零类型错误（既有 5 处报错均位于 next.config/api 路由/wrongbook-view 等无关文件，与 33-c 批次记录一致）。
- 内容要点：数值教材口径（Hayflick 40–60 次倍增、端粒每轮缩短 50–200 bp、端粒酶见于约 85%–90% 肿瘤、SA-β-gal pH 6.0/Dimri 1995、senolytics 达沙替尼+槲皮素、Kerr 1972 命名、线虫 1090 体细胞剔除 131 个/2002 诺奖、梯状条带约 180–200 bp、caspase 约 14 个人类成员、凋亡体七辐轮状、维奈克拉 2016 获批、GSDMD 孔径约 10–20 nm、铁死亡 2012 命名/FSP1-CoQ10、转移入血成灶率不足 0.01%、claudin 24 基因、间隙连接孔径约 1.5–2 nm 筛分约 1 kDa、胶原 28 型/Gly-X-Y/67 nm D 周期、纤连蛋白约 250 kDa 二聚体、MMP 约 23 个成员、整联蛋白 18 α×8 β 组成 24 种、Abbe 约 200 nm、STED 20–70 nm、PALM/STORM 10–25 nm、SIM 约 100 nm、2014 诺奖 Hell/Betzig/Moerner、ChR2 约 470 nm 蓝光/2005 Boyden-Deisseroth、DREADD-CNO 2017 代谢转化、Lgr5 单干细胞肠类器官 2009、肿瘤类器官药敏一致性约八至九成、VX-880 首例胰岛素独立 2022、syn1.0 2010 约 1.08 Mb、syn3.0 473 基因/531 kb/149 未知、lecanemab 2023 获批延缓约四分之一、CAR-T 2017 双获批、缓解率约八成、托珠单抗救治 CRS）；经典人物年代（Carrel 1912 之误与 Hayflick-Moorhead 1961、Olovnikov-Watson 1971、López-Otín 2013 九大标志、Kerr-Wyllie-Currie 1972、Horvitz-Brenner-Sulston 2002、Vaux 1988、Yuan/Johnson 2005 necroptosis、Dixon-Stockwell 2012 ferroptosis、Steinberg 1963 差异黏附、Paget 1889 种子与土壤、Steeg 1988 NM23、Sato-Clevers 2009、Lancaster 2013、Takebe 2013、Gardner-Collins 与 Elowitz-Leibler 2000、Venter 2010/2016、Kennedy 2010 CRY2-CIBN、Denk 1990 双光子、Betzig 2014 晶格光片等）。
- 备注：按简报逐章落盘并即时校验返工（s3/s4 类节经两至三轮扩写至达标；过程中修正个别中英混排残留与错字，正文逐项规避反引号/模板插值/H3/HTML/emoji/箭头符号/制表符）。未改动产出文件之外的任何文件；quiz 与 glossary 批次文件为独立导出，未在聚合层注册（沿用 A1/A3 批次同样的落盘约定）。

## Task ID: 34-d —— 生物物理重建（第 9–10 章 + 批次 A4 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/bp/ch9.ts（bpCh9 生物成像技术，4 节：光学显微/电子显微/冷冻电镜/断层与多模成像）
  - src/data/subjects/bp/ch10.ts（bpCh10 生物信息、量子生物与前沿，4 节：生物分子信息存储/细胞信号与信息处理/量子生物现象/生物物理前沿与伦理）
  - src/data/quiz/biophysics-a4.ts（biophysicsQuizA4，10 题 q-biophysics-41~50，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=2/6/2）
  - src/data/glossary-biophysics-a4.ts（biophysicsGlossaryA4，5 条 g-76~g-80：冷冻电镜/超分辨显微技术/DNA 数据存储/自由基对机制/AlphaFold）
- 校验：bun run scripts/validate-chapters.ts biophysics src/data/subjects/bp/ch9.ts src/data/subjects/bp/ch10.ts →「✓ biophysics：2 章共 8 节全部通过」；各节字数 ch9 2635–2962 / ch10 2661–2735 字符、每节 4–5 个 H2、均含表格（每章 4 张：ch9 技术选型表/TEM-SEM-光学对照表/结构生物学三法对比表/模态三角表；ch10 DNA vs 硅基存储表/信号设计原理表/量子案例分级表/转化成熟度表）；quiz 自检通过（题号 41~50 连续、每章题型 single 3/tf 1/multiple 1、难度 1:3:1、解析最短 219 字均超 80 字下限）；glossary 5 条 definition 均 ≥80 字（实测 334–479 字）；bunx tsc 全项目检查，新增四个文件零类型错误（既有 5 处报错均位于 next.config/api 路由/wrongbook-view 等无关文件，与 34-c 批次记录一致）；正文逐项规避反引号/模板插值/H3/HTML/emoji/箭头符号/制表符/链接。
- 内容要点：数值教材口径（Abbe d=λ/2NA 约 200 nm、PSF 纵横约 1:3、SIM 约 100 nm、STED 20–70 nm、PALM/STORM 10–25 nm、双光子穿透约 1 mm、Göppert-Mayer 1 GM=10⁻⁵⁰ cm⁴·s、Minsky 1957 专利、2014 诺奖 Hell/Betzig/Moerner；电子 λ≈1.23/√V nm、100–300 kV 对应 0.0037–0.0022 nm、Scherzer 球差下限、临界剂量 10–20 e/Å²、切片 50–100 nm、负染色 1.5–2 nm、冷冻替代约 −90 摄氏度、Ruska 1931/1986；plunge freezing 液态乙烷大于约 10⁵ K/s、高压冷冻约 2100 巴、FSC 0.143 判据、DQE 0.1 至 0.5 以上、β-半乳糖苷酶 3.2 埃 2015、谷氨酸脱氢酶 1.8 埃 2016、铁蛋白约 1.2 埃、Henderson 1975/1990、Frank 随机锥形倾转、2017 诺奖 Dubochet-Frank-Henderson、小于约 100 kDa 边界；HU=1000×(μ−μ水)/μ水、窗位窗宽组合 −600/1500、50/350、300/1500、胸部 CT 3–7 mSv、低剂量 1–2 mSv、Hounsfield-Cormack 1979；F-18 约 110 分钟、C-11 约 20 分钟、O-15 约 2 分钟、511 keV 符合探测、非共线性约 0.25 度、临床 4–6 mm、TOF 数百皮秒、SPECT 锝-99m 约 6 小时约 7–10 mm、PET-CT 2000 年前后临床、互信息配准；DNA 2 bit/碱基、10²¹ bit/g 与 bit/cm³、高 6–7 个数量级、古 DNA 半衰期 521 年、Church 2012 约 0.7 MB、Goldman 2013 5.2 Mb、Erlich-Zielinski 2017 约 1.6 bit/碱基与 215 PB/g、Organick 2018 200 MB、逻辑密度 1–1.8 bit/碱基；Berg-Purcell (DacT) 负二分之一次方、run 约 1 秒、动态范围 5 个数量级、增益 10–50、Barkai-Leibler 1997、Alon 1999、Elowitz 2002、通道容量 0.5–1 bit；FMO 660 飞秒 Engel 2007、Collini 2010 室温、半经典 KIE 上限约 7、脂氧合酶约 80、甲胺脱氢酶约 55、解氨酶 50–60、势垒宽 0.5–1 埃、塞曼 1.4 MHz 对 50 μT、相干微秒、射频 1.3–2 MHz；JCVI-syn3.0 473 基因 531 kb 约 149 未知、Baker 2024 诺奖、AlphaFold1 2018、AlphaFold2 CASP14 中位 GDT_TS 约 92.4 约 1 埃、两亿余结构、Hassabis-Jumper-Baker 2024、pLDDT/PAE 等）；经典人物年代（Abbe 1873、Minsky 1957、Denk-Strickler-Webb 1990、Hell 1994、Betzig-Moerner-Zhuang 2006、de Broglie 1924、Ruska 1931/1986、Dubochet 1980s、Frank 1970s-80s、Henderson 1975/1990、Hounsfield-Cormack 1971/1979、Townsend 2000 前后、Schulten 1978、Berg-Purcell 1977、Berg-Brown 1972、Barkai-Leibler 1997、Alon 1999、Elowitz 2002、Engel 2007、Collini 2010、Klinman 酶隧穿、Church 2012、Goldman 2013、Erlich-Zielinski 2017、Organick 2018、Hutchison 2016、Jumper-Hassabis 2020/2024 等）。
- 备注：按简报逐章落盘、逐章即时校验并返工扩写（ch9 四节首版 1820–2339 字符、ch10 四节首版 1775–2173 字符，经机理分步、定量补充、历史注脚与课堂练习扩写至达标；过程中修正 stray 英文残留与 CT 段落重复句）。quiz 与 glossary 批次文件为独立导出，未在聚合层注册（沿用 A1/A3 批次落盘约定）；未改动产出文件之外的任何文件。

## Task ID: 35-b —— 微生物学重建（第 4–6 章 + 批次 A2 测验/术语）

- 日期：2025-09-17（沙箱会话）
- 产出文件：
  - src/data/subjects/micro/ch4.ts（microCh4 病毒与亚病毒因子，4 节：病毒的形态与结构/噬菌体的增殖/动物病毒的增殖/亚病毒因子与病毒起源）
  - src/data/subjects/micro/ch5.ts（microCh5 微生物的营养与培养基，4 节：六大营养要素/营养类型四分法/培养基/营养物质进入细胞）
  - src/data/subjects/micro/ch6.ts（microCh6 微生物的代谢，4 节：能量代谢总览/发酵多样性/自养代谢与合成代谢/次生代谢与代谢调节）
  - src/data/quiz/microbiology-a2.ts（microbiologyQuizA2，15 题 q-microbiology-16~30，每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-microbiology-a2.ts（microGlossaryA2，5 条 g-86~g-90：噬菌体/一步生长曲线/朊病毒/培养基/发酵）
- 校验：bun run scripts/validate-chapters.ts microbiology src/data/subjects/micro/ch4.ts src/data/subjects/micro/ch5.ts src/data/subjects/micro/ch6.ts →「✓ microbiology：3 章共 12 节全部通过」；各节字数 ch4 2812–3421 / ch5 2706–2843 / ch6 2652–2760 字符，H2 5–6 个、均含表格（每章 1–2 张：ch4 对称三型/烈性温和噬菌体/Baltimore 合成路线/亚病毒因子比较表；ch5 六大要素/营养类型四分/用途四型/运输四式表；ch6 产能三分/发酵类型/光合类型/初级次级代谢对照表）；quiz 自检通过（题号 16~30 连续、每章题型 single 3/tf 1/mult 1、难度 1:3:1、解析最短 186 字）；glossary 5 条 definition 均 ≥80 字（实测 276–380 字）；bunx tsc 全项目检查无本批次文件类型错误；正文额外自检无反引号/模板插值/H3/HTML/emoji/箭头符号/制表符/链接。
- 内容要点：数值教材口径（病毒 20–300 nm、TMV 2130 亚基螺距 2.3 nm、腺病毒 252 壳粒、T4 潜伏期约 25 min 裂解量 100–200、λ 48.5 kb、φX174 5386 nt、流感 8 节段、1918 H1N1 约五千万人死亡、PSTVd 359 nt、朊病毒 134℃ 18 min、Baltimore 1971、Prusiner 1997/Gajdusek 1976 诺奖、Hershey-Chase 1952、Ellis-Delbrück 1939、Dulbecco 1952；碳约占干重一半、微量元素 10⁻⁸–10⁻⁶ mol/L、谷氨酸 C/N 4:1 与 3:1 案例、琼脂 96℃ 融化 40℃ 凝固、EMB 紫黑色金属光泽菌落、氨氧化约 270 kJ/mol、亚硝酸氧化约 74 kJ/mol、氢氧化约 237 kJ/mol、PTS 以 PEP 为磷供体；葡萄糖彻底氧化约 38 ATP（现代计量约 30–32）、EMP 发酵净 2 ATP、产甲烷约 131 kJ/mol、乙醇收率 0.511 g/g、IMViC 大肠杆菌加加减减对产气肠杆菌减减加加、ABE 产物约 3:6:1、Calvin 循环 9 ATP 加 6 NADPH 换 1 G3P、固氮每分子 N2 约 16 ATP、赖氨酸积累百克每升级别）。
- 备注：按简报逐章落盘并即时校验返工（ch5-s2/ch5-s4/ch6-s4 首版字数不足，经机理分步、定量补充与工程案例扩写至达标）；quiz 与 glossary 批次文件为独立导出，未在聚合层注册（沿用 A1/A3 等批次同样的落盘约定）；未改动产出文件之外的任何文件（主体 SubjectId 联合类型已含 microbiology，直接使用字面量）。

## Task ID: 36-A —— 补写生化分生测验与术语（生物物理 A1 + 分子生物学 A2/A4 批次）

- 日期：2025-09-17（沙箱会话）
- 背景：三个批次代理死亡前未写出测验与术语文件，对应章节正文（bp ch1–3、mb ch4–6、mb ch10–12）已全部存在；本任务通读 9 章正文后按实际知识点出题补写。
- 产出文件（共 6 个）：
  - src/data/quiz/biophysics-a1.ts（biophysicsQuizA1，15 题 q-biophysics-1~15，bp ch1–3 每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-biophysics-a1.ts（biophysicsGlossaryA1，5 条 g-61~g-65：吉布斯自由能/疏水效应/熔解温度/能斯特方程/膜片钳；类别：生物热力学×2、核酸物理、膜生物物理、电生理技术）
  - src/data/quiz/molecular-biology-a2.ts（molecularBiologyQuizA2，15 题 q-molecular-biology-16~30，mb ch4–6 每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-molecular-biology-a2.ts（molecularBiologyGlossaryA2，5 条 g-26~g-30：核苷酸切除修复/SOS 应答/RNA 聚合酶/剪接体/摆动假说；类别：DNA 修复×2、转录机器、RNA 加工、遗传密码）
  - src/data/quiz/molecular-biology-a4.ts（molecularBiologyQuizA4，15 题 q-molecular-biology-46~60，mb ch10–12 每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-molecular-biology-a4.ts（molecularBiologyGlossaryA4，5 条 g-36~g-40：聚合酶链式反应/质粒载体/CRISPR-Cas9/受体酪氨酸激酶/抑癌基因；类别：核酸技术、基因工程、基因编辑、信号转导、癌生物学）
- 校验：bun -e 结构自检脚本通过——三份 quiz 均 15 题、题号连续（1~15 / 16~30 / 46~60，与既有批次 a1/a2/a3/a4 无 id 冲突：biophysics 既有 16~50、molecular-biology 既有 1~15 与 31~45）、每章 5 题、题型 single 9/tf 3/mult 3、难度 1:3:1、判断题 options 恒为 [正确, 错误]、多选 answer 为数组且 ≥2 项、解析全部 ≥80 字（实测最短 157 字）；三份 glossary 均 5 条、id 连续（g-61~65 / g-26~30 / g-36~40，与既有 a1/a2/a3/a4 无冲突）、definition 全部 ≥80 字（实测 297~479 字）、subjectId 均为字面量；bun 直接以项目 tsconfig paths 解析 @/lib/types 导入成功，无类型错误。
- 出题口径（全部取自正文原文数值/结论）：biophysics ch1（ATP ΔG°′ 约 −30.5 与胞内约 −50 kJ/mol、RQ 糖 1/脂肪 0.71/蛋白质 0.82、负熵与开放系统、RT ln 10 ≈ 5.7 kJ/mol、疏水效应 −TΔS 主导与温度行为反向）；ch2（α 螺旋 3.6 残基/0.54 nm/i→i+4、Tm 每 1% GC 升 0.4 °C 与碱基堆叠主导、Hill 系数 Hb 约 2.8–3.0、增色效应 37%、折叠净 ΔG −20~−40 kJ/mol 与 Flory 指数归属）；ch3（吉欧封接 10⁹ Ω 与 1991 诺奖、KcsA 四层氧环选择性比约 10⁴、钠钾泵 3Na 出/2K 入与 40/50 kJ/mol 效率约 80%、钠内流 12 与钾外渗 1.5 kJ/mol、膜厚 5 nm/DPPC 41 °C/κ 10–25 kT/拉伸极限 2%–5%）。molecular-biology ch4（每天脱嘌呤约 10⁴、NER 真核切 24–32 聚体与只认形变、RecA 催化 LexA 自切割约 40 基因、XP 癌变千倍与 CS 无癌变的对照、HR/NHEJ/V(D)J 分工）；ch5（α-鹅膏蕈碱三分格局、-35 TTGACA 与 -10 TATAAT 间距 17 最优、ρ-rut-极性机制、TFIIH 转录修复双职、DSIF/NELF/P-TEFb/7SK-HEXIM）；ch6（5′-5′ 三磷酸桥三步加帽、两步转酯不水解 ATP、摆动规则与约 40 余种 tRNA、poly(U)-UUU 与 1968 诺奖、简并三分之二同义与线粒体改码及 Sec/Pyl）。ch10（三大印迹对象、Ct 与拷贝数对数反比与 TaqMan 5′ 外切、蓝白斑 lacZα 插入失活、Taq 无校读 10⁻⁵、载体容量阶梯质粒 10 kb/λ 15–23/柯斯 35–45/BAC 100–300/YAC 1 Mb）；ch11（HGP 1990/2000/2003 与百慕大 24 小时、Cas9 PAM NGG 与 NHEJ/HDR 及 2020 诺奖、微阵列 10²–10³ vs RNA-seq 10⁴、GWAS P<5×10⁻⁸ 与效应量 OR 1.1–1.3、AAV 4.7 kb/诺西那生钠/mRNA 疫苗两支柱）；ch12（GPCR 约 800 个与三成药物、霍乱毒素锁死 Gαs/百日咳毒素失活 Gi、GRB2-SOS-Ras 与 Raf→MEK→ERK、抑癌隐性两次打击与原癌显性、K-Ras 三成/HER2 两成/伊马替尼/结直肠 APC→TP53 阶梯次序）。
- 备注：严格只新增上述 6 个文件，未改动任何其他文件；quiz 与 glossary 批次文件为独立导出，未在聚合层注册（沿用此前批次同样的落盘约定）；题目考查的数值与结论均与正文逐条核对，错误项设计为「数值张冠李戴、方向颠倒、机制主体互换」等可由正文直接判伪的类型。

## Task ID: 36-C —— 微生物 ch3/ch12 小节字数不足扩写修复

- 日期：2026-09-17（沙箱会话）
- 背景：src/data/subjects/micro/ch3.ts 与 ch12.ts 共 7 个小节 content 字数不足 2600 下限（ch3-s2 2441、ch3-s3 1933、ch3-s4 2204、ch12-s1 2258、ch12-s2 2489、ch12-s3 2445、ch12-s4 2300），按 35-mi 简报做超集式扩写至 2600–3600。
- 产出：仅修改 src/data/subjects/micro/ch3.ts 与 src/data/subjects/micro/ch12.ts；ch3-s1（2611 字）及两章 summary/keywords/keyPoints/terms/H2/表格全部逐字保留（7 节的 keyPoints 5 条、terms 5–7 条未动）。
- 扩写要点（全部为超集追加：机理分步、定量数据、经典实验人物年代、工业/临床联系）：
  - ch3-s2（2441→3211，+770）：菌丝顶端体 Spitzenkörper 与菌丝融合 anastomosis 机理；分生孢子节裂式/芽殖式、瓶梗 phialide、曲霉孢子头数百枚与撒哈拉尘霾跨洋传播；Beadle 与 Tatum 1941 一基因一酶、1958 诺奖，钩状体 crozier 与锁状联合平行；放线菌菌落鉴别、察氏与马铃薯葡萄糖琼脂记录规范。
  - ch3-s3（1933→2953，+1020）：锁状联合四步慢镜头、四极性交配型、奥氏蜜环菌近千公顷数百吨；布勒氏滴表面张力弹射（数千 g）、双孢蘑菇十七世纪法国驯化、中国食用菌产量约八成、代料压缩周期；独脚金内酯与 Myc 因子对话、AM 菌毛状根扩繁、法国十九世纪块菌人工林；施文德纳 1867 双重生物假说、德巴里 1879 共生一词；石蕊染料与松萝酸。
  - ch3-s4（2204→3144，+940）：LiP/MnP/漆酶分步机理、褐腐芬顿化学、木质素占木材干重四分之一、石炭纪末白腐起源假说；限量数字（黄曲霉毒素 5–20 μg/kg、呕吐毒素 1000 μg/kg）、伏马毒素鞘脂机制与马猪特异病症；耳念珠菌 2009 首报、WHO 2022 真菌优先病原体清单、G 与 GM 试验；环孢素 1971 筛得 1978 临床、洛伐他汀 1987 获批；蛙壶菌致两栖类衰退。
  - ch12-s1（2258→2882，+624）：汉森 1883 嘉士伯纯种酵母、魏茨曼后任以色列首任总统；青霉素 1945 年诺奖三人、霉斑玛丽与 Q-176 祖先株；发酵周期 4–7 天、CIP/SIP、溶氧警戒线；下游 4–8 步收率八成至九成五、冻干收官；维生素 B12 两条发酵路线、半合成头孢母核。
  - ch12-s2（2489→3199，+710）：埃尔利希/多马克/瓦克斯曼三人年表（1908/1910/1932/1939/1943/1952）、MIC 与 MBC、1966 年纸片扩散标准化、杀菌抑菌二分；mcr-1 于 2015 年中国发现；弗莱明 1945 预言与 WHO 2015 全球行动计划；LGG 1983 分离及证据规模；地高辛被惰性埃格特菌灭活的一至两成人群案例。
  - ch12-s3（2445→3117，+672）：CRISPR 普查数字（约四成细菌、约九成古菌携带）、2005 年 Mojica/Pourcel/Bolotin 三团队；Cas9 三步切割（HNH 与 RuvC、PAM 上游第三碱基对）；第一类与第二类效应物分类；syn3A 补回 19 个基因修复分裂形态；青蒿酸酵母工厂 2006 与 2013 量产、BioBrick 与 iGEM 2003；阿西洛马 1975 治理传统。
  - ch12-s4（2300→3023，+723）：CODH/ACS 双功能酶与离子梯度电子分叉能量学；钢厂尾气工厂年产数万吨级并副产蛋白饲料；PHA 颗粒结合蛋白与微滴结构、ICI Biopol 可降解洗发水瓶；ICI Pruteen 甲醇菌蛋白工厂；和平号真菌侵蚀舷窗与国际空间站微生物图谱；biosafety 与 biosecurity 之别、1984 年美国 CDC 与 NIH 首版 BMBL。
- 校验：bun run scripts/validate-chapters.ts microbiology src/data/subjects/micro/ch3.ts src/data/subjects/micro/ch12.ts →「✓ src/data/subjects/micro/ch3.ts：microbiology-ch3《真核微生物：真菌》4 节全部通过」「✓ src/data/subjects/micro/ch12.ts：microbiology-ch12《微生物的应用与前沿》4 节全部通过」「✓ microbiology：2 章共 8 节全部通过」；各节字数 ch3 2611/3211/2953/3144、ch12 2882/3199/3117/3023，H2 5–7 个、均含表格，反引号/模板插值/H3/HTML/emoji/制表符/链接自检为零。
- 备注：仅超集扩写、不删改原知识点（唯一整理为 ch3-s2 原文重复短语「更早支撑了连锁交换作图更早支撑了连锁交换作图」去重）；未改动这 2 个文件之外的任何文件。

## Task ID: 36-B —— 补写微生物测验与术语（微生物 A1 / A3 / A4 批次）

- 日期：2026-09-17（沙箱会话）
- 背景：三个批次代理死亡前未写出测验与术语文件，对应章节正文（micro ch1–3、ch7–9、ch10–12）已全部存在；本任务通读 9 章正文（含 36-C 扩写后的全文，经 bun 导出全文核验，规避 Read 工具对 >2000 字符行的截断）后按实际知识点出题补写。
- 产出文件（共 6 个）：
  - src/data/quiz/microbiology-a1.ts（microbiologyQuizA1，15 题 q-microbiology-1~15，ch1–3 每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-microbiology-a1.ts（microGlossaryA1，5 条 g-81~g-85：肽聚糖/革兰氏染色/芽孢/鞭毛/菌丝体；类别：细胞结构×3、染色技术、真菌形态）
  - src/data/quiz/microbiology-a3.ts（microbiologyQuizA3，15 题 q-microbiology-31~45，ch7–9 每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-microbiology-a3.ts（microGlossaryA3，5 条 g-91~g-95：生长曲线/高压蒸汽灭菌/转化/接合/硝化作用；类别：生长与培养、控制微生物、遗传重组×2、生态与循环）
  - src/data/quiz/microbiology-a4.ts（microbiologyQuizA4，15 题 q-microbiology-46~60，ch10–12 每章 5 题：single 3/truefalse 1/multiple 1，难度 1:3:1=3/9/3）
  - src/data/glossary-microbiology-a4.ts（microGlossaryA4，5 条 g-96~g-100：外毒素/内毒素/正常菌群/16S rRNA/CRISPR；类别：毒力因子×2、医学微生态、分子系统学、前沿技术）
- 校验：bun -e 结构自检脚本全部通过——三份 quiz 均 15 题、题号连续（1~15 / 31~45 / 46~60，与既有 A2 批 q-microbiology-16~30 无 id 冲突）、每章 5 题、题型 single 9/tf 3/mult 3、难度 1:3:1、判断题 options 恒为 [正确, 错误]、多选 answer 为数组且 ≥2 项、选项无重复、解析全部 ≥80 字（实测最短 200 字）；三份 glossary 均 5 条、id 连续（g-81~85 / g-91~95 / g-96~100，与既有 A2 批 g-86~90 无冲突、术语名无重复）、definition 全部 ≥80 字（实测最短 273 字）、subjectId 均为 'microbiology' 字面量；bun 以 `import type` 免运行时解析直接导入成功，tsc -p 全项目校验中本批 6 个文件零类型错误（项目既有 5 处错误均位于 api/report、wrongbook-view 等无关文件）。
- 出题口径（全部取自正文原文数值/结论）：ch1（三型八大类群的原核六类清单、Woese 1977/1990 三域与古菌醚键膜脂无肽聚糖、大肠杆菌 20 min 一代 24 h 理论 72 代约 4.7×10²¹、弗莱明-弗洛里-钱恩三人共享 1945 诺奖、列文虎克 1674/1683 与尼达姆-斯巴兰扎尼之争、Avery 材料为肺炎链球菌而非支原体）；ch2（肽聚糖 NAG/NAM β-1,4 骨架与 D-Ala–D-Ala 靶点、革兰染色乙醇抽提 G⁻ 脂质机制、G⁺ 壁 20–80 nm 占干重 50%–80% 对 G⁻ 2–7 nm 约 10%、周质空间宽约 15 nm 属 G⁻、鞭毛质子马达每转约 1000 质子非 ATP、荚膜抗吞噬与 Ca-DPA 占干重 5%–15%、芽孢休眠体一菌一孢）；ch3（芽痕富几丁质出芽 20–30 次复制性衰老、乙醇发酵 0.511 g/g 与 Crabtree 高糖有氧优先发酵、霉菌孢子 60–70℃ 可杀灭与芽孢对照、地衣约九成子囊菌学名取真菌名、白腐真菌木质素过氧化物酶与黄曲霉毒素 B1 耐热、抗真菌药靶稀缺源于真核同源）；ch7（高压蒸汽 121.3℃ 15–30 min 表压 0.1 MPa、10⁴ CFU/mL 起始代时 30 min 两小时 16 倍至 1.6×10⁵、五类氧关系与 SOD/CAT 装备对应、巴氏消毒属消毒非灭菌、30–300 适计区间与比浊 0.4 稀释线）；ch8（彷徨试验突变先于选择、Avery 1944 仅 DNA 酶摧毁转化活性与大肠杆菌自然无感受态、F 因子约 100 kb 与 Hfr 100 min 及中断杂交分钟图、Ames 试验 his⁻ 加 S9 符合率 83%–90%、pUC19 蓝白筛选与 λ 20 kb/柯斯 35–45 kb/BAC 以 F 因子低拷贝严紧复制）；ch9（耕层土每克细菌 10⁸–10⁹、厌氧氨氧化产氮气非甲烷与 N₂O 265 倍增温潜势、青霉-根瘤-噬菌体-酵母四例对应拮抗共生寄生竞争、厌氧消化三阶段约七成甲烷来自乙酸、种间氢转移与 nisin 及定植抗力、空气只是传播走廊）；ch10（内毒素 LPS 脂质 A 经 TLR4 耐热不能类毒素化、FMT 2013 年 81% 对 31%、正常菌群四重功能、结核分枝杆菌不完全吞噬、R₀ 与群体免疫阈值 1−1/R₀、脊髓灰质炎隐性感染与医院感染 48 h 界限）；ch11（Baltimore 按核酸类型与 mRNA 路线分七类、16S 垂直遗传横向转移罕见、ANI 95%–96% 对应 DDH 70% 与 98.7% 同种候选、古菌醚键 L 型甘油恰与细菌相反、数值分类等权与 GC 排除性指标、CPR 超小基因组 0.7–1 Mb）；ch12（青霉素 1–2 U/mL 至数万 U/mL 整四个数量级、MRSA 的 SCCmec-mecA-PBP2a 靶位改变、CRISPR 独具免疫记忆而限制修饰系统无记忆、syn3.0 473 基因 531 kb 约 149 基因未知、伍德-扬达尔钢厂尾气 2018 投产、PHA 胞内储藏可彻底降解、生物防护三保险、BSL-4 正压防护服与 BSL-3 定向负压之别）。
- 备注：严格只新增上述 6 个文件，未改动任何其他文件；沿用 A2 批次同样的独立导出与落盘约定（不在聚合层注册）；题目错误项设计为「数值张冠李戴、方向颠倒、机制主体互换、时序错置」等可由正文直接判伪的类型，全部数值与结论均与正文逐条核对通过。
