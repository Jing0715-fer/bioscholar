// ============================================================
// Round 4 自绘插图挂载（vi 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/vi/ → bun scripts/draw/gen.ts vi
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawViR4: Record<string, Illustration[]> = {
  'virology-ch6-s3': [
    {
      src: '/images/bio/drawn/vi-ch6-s3-protein-processing.svg',
      caption:
        '丝氨酸／半胱氨酸／天冬氨酸三系蛋白酶；HIV PR 十一切点以形状吃序列（1995 沙奎那韦）；HA 单体约 7–8 个 N 位点；豆蔻酰化指挥 Gag 上膜。病毒蛋白酶分丝氨酸（HCV NS3/4A）、半胱氨酸（脊灰 3Cpro 与 2Apro）、天冬氨酸（HIV PR）三系；HIV 蛋白酶按十一处切点切割 Gag-Pol；切点保守的是几何而非序列，耐药突变常顾此失彼。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch8-s4': [
    {
      src: '/images/bio/drawn/vi-ch8-s4-transformation.svg',
      caption:
        'E6 经 E6AP 降解 p53 并激活端粒酶、E7 降解 Rb；1976 年 Bishop 与 Varmus 证明 v-src 源自细胞（1989 诺奖）；LMP1 模拟 CD40 持续点燃 NF-κB；约 12% 人类癌症归因感染',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch4-s4': [
    {
      src: '/images/bio/drawn/vi-ch4-s4-entry-diversity.svg',
      caption:
        '恩夫韦肽（36 aa，2003）模拟 HR2 抢占 HR1 芯；SV40 借 ERAD 逆转位「ER 脱壳」；埃博拉以内体 NPC1 为受体；马拉维若（2007）为首个宿主靶点药，须测向性。gp41 六螺旋束为 I 类融合的终末结构，恩夫韦肽模拟 HR2 抢占 HR1 芯而阻断融合，是首个融合抑制剂；腺病毒五邻体基板结合整合素并触发内吞，酸化后变构释放蛋白 VI 裂解内体膜。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch1-s2': [
    {
      src: '/images/bio/drawn/vi-ch1-s2-history-timeline.svg',
      caption:
        '1892 伊万诺夫斯基／1898 贝杰林克「传染性活液」；1935 斯坦利结晶 TMV（1946 诺奖）；1949 恩德斯组织培养（1954 诺奖）；1970 逆转录酶（1975 诺奖）。1892 年伊万诺夫斯基与 1898 年贝杰林克的滤过实验确立「滤过性因子」概念，贝氏「传染性活液」标志病毒学诞生；噬菌体由特沃特（1915）与德赫雷尔（1917）先后发现，后者命名并开创噬菌体疗法。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch6-s2': [
    {
      src: '/images/bio/drawn/vi-ch6-s2-translation-hijack.svg',
      caption:
        '脊灰约 7.5 kb 单 ORF 产约 247 kDa 多聚蛋白；HIV 移码 5%–10% 使 Gag∶Gag-Pol≈20∶1；2Apro 切 eIF4G 关宿主翻译、IRES 自给；eIF2α 磷酸化为攻防焦点',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch9-s2': [
    {
      src: '/images/bio/drawn/vi-ch9-s2-one-step-growth.svg',
      caption:
        'T4（37 °C）潜伏期 21–25 min、上升期十余分钟、平均裂解量 100–200；Doermann 隐蔽期约 12 min；单细胞裂解量跨近一个数量级、近似对数正态。Ellis 与 Delbrück 1939 年以同步感染加大规模稀释实现一步生长，三段式曲线定义潜伏期、上升期与平均裂解量三个读数；T4 于 37°C 潜伏期约 21–25 分钟、上升期约十余分钟、平均裂解量约 100–200。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch3-s4': [
    {
      src: '/images/bio/drawn/vi-ch3-s4-genome-organization.svg',
      caption:
        'φX174 以 5,386 nt 容纳 11 个基因（B 嵌于 A、E 嵌于 D）；HBV 四阅读框重叠；IRES 赋予帽独立性；冠状病毒经 TRS 产生共享前导的嵌套 sg mRNA。φX174 以 5,386 nt 容纳 11 个基因，B 嵌于 A、E 嵌于 D；HBV 四阅读框广泛重叠，重叠基因是小基因组的极限压缩术；基因组物理次序常即表达时序：负链病毒 3′ 起始的转录梯度、T7 自左向右的时序分区、冠状病毒复制酶先行的排列。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch10-s4': [
    {
      src: '/images/bio/drawn/vi-ch10-s4-zoonosis.svg',
      caption:
        '60%–75% 新发人类传染病为人兽共患；储存宿主—溢出—人传人—流行四阶段；SARS／MERS／SARS-CoV-2（RaTG13 约 96%）三种结局；H5N1 病死率过半、2024 牛群感染。约 60%–75% 的新发人类传染病为人兽共患，多数源自野生动物；跨种传播分储存宿主循环、溢出、获得人传人能力、人群流行四个阶段；蝙蝠的飞行高温、STING 通路的低反应性、组成性干扰素、长寿高密度群居与冬眠共同造就其病毒库地位（亨德拉、尼帕、SARSr-CoV 等）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch5-s4': [
    {
      src: '/images/bio/drawn/vi-ch5-s4-retrointegration.svg',
      caption:
        'RT 兼 RNA 依赖 DNA 聚合酶、RNase H、DNA 依赖 DNA 聚合酶；tRNA 引负链（HIV 用 tRNALys3）；整合酶两步转酯、5 bp 缺口修复成 TSD；人类基因组约 8% 为 HERV',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch10-s3': [
    {
      src: '/images/bio/drawn/vi-ch10-s3-antigenic-drift.svg',
      caption:
        'HA 年积 1%–2% 替换、集群每二至八年跃迁；糖盾遮蔽表位；TAP 封堵／MHC I 降解／HLA 下调三线封锁；免疫印记（Francis 1953）。流感 HA 每年积累约 1%–2% 氨基酸替换且集中于受体结合部位周边五大表位；抗原图谱显示 H3N2 每二至八年发生一次抗原集群跃迁；糖盾（N-连接糖链遮蔽表位）与受体结合约束共同塑造漂移路径；鸡胚适应突变曾致 2014–2015 季节疫苗有效性跌至两成上下。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch4-s3': [
    {
      src: '/images/bio/drawn/vi-ch4-s3-uncoating-delivery.svg',
      caption:
        '流感 M2 导酸脱壳（金刚烷胺靶点、已普遍耐药）；腺病毒破膜后沿微管每秒约数微米抵达 NPC；痘病毒两阶段脱壳；T4 尾鞘收缩把脱壳与侵入并为一步。脱壳由内体酸化、受体结合、核孔锚定等明确信号逐级触发，时机与场所均受精确控制；流感 M2 质子通道导酸入核心、使 M1 与 vRNP 解离；金刚烷胺类即 M2 通道抑制剂，现已普遍耐药。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch11-s4': [
    {
      src: '/images/bio/drawn/vi-ch11-s4-host-factors.svg',
      caption:
        '先天性 CMV 为最常见先天感染；Dengvaxia 约 83 万学童与灭活 RSV 住院率八成；HIV 年均 CD4 滑坡 50–100/μL、低于 200 进艾滋病期；柏林病人 2008；长新冠约 6%',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch9-s4': [
    {
      src: '/images/bio/drawn/vi-ch9-s4-phage-foundations.svg',
      caption:
        '³²P 约 30% 传子代、³⁵S 不足 1%（1952）；Benzer rII 顺反子与缺失定位；1943 波动测验；PaJaMo 与信使 RNA；限制修饰 1978 诺奖；展示 2018 诺奖。噬菌体小组以 T 系噬菌体把复制问题化为可测实验，Luria 与 Delbrück 波动测验奠基细菌遗传学，三人 1969 年同获诺贝尔奖；Hershey 与 Chase 1952 年双标记加搅拌器实验：³²P 入胞并约三成传给子代、³⁵S 随空壳剥落不足百分之一，判明 DNA 是遗传物质。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch12-s3': [
    {
      src: '/images/bio/drawn/vi-ch12-s3-antiviral-drugs.svg',
      caption:
        '病毒特有靶点撑开治疗窗；阿昔洛韦双重闸门（治疗指数以千倍计、1988 诺奖）；1996 HAART 三联封锁耐药路径、U=U；索非布韦 8–12 周治愈率逾 95%；奥司他韦 48 小时窗口。抗病毒药物的命脉是选择性：疱疹激酶、逆转录酶、蛋白酶、神经氨酸酶与 RdRp 等病毒特有靶点撑开治疗窗，获批药物集中于约十个病毒属；阿昔洛韦以「病毒 TK 选择性活化」与「病毒聚合酶选择性掺入链终止」双重闸门实现一举两得的选择性，治疗指数以千倍计；Elion 与 Hitchings 1988 年诺奖即彰此理。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch5-s1': [
    {
      src: '/images/bio/drawn/vi-ch5-s1-replication-principles.svg',
      caption:
        '核内（借宿主 Pol II）vs 胞质（自带聚合酶）；聚合酶三来源；RNA 复制经复制型与分枝中间体、正负链不对称；立即早期—早期—晚期级联调度资源。复制场所分核内与胞质两大阵营，取决于聚合酶来源与基因组类型：须用宿主 Pol II 者入核，基因组不可被宿主读取者自带聚合酶；聚合酶来源三分：完全借用宿主酶、毒粒携带 RdRp 或整套转录系、感染后由 +ssRNA 先翻译新合成。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch11-s2': [
    {
      src: '/images/bio/drawn/vi-ch11-s2-cell-tissue-pathogenesis.svg',
      caption:
        '两次病毒血症的经典图式；CD4／NTCP／SLAM 与 nectin-4／CD155 受体地图；流感剥蚀纤毛上皮、1918 年多数死亡源于细菌性肺炎；狂犬逆行轴浆运输每天约 5–100 mm。病毒致病循局部增殖、第一次病毒血症、网状内皮增殖、第二次病毒血症、靶器官定位的路径展开；流感与鼻病毒保持局部感染；受体表达谱决定亲嗜性：CD4之于HIV、NTCP 之于 HBV、SLAM 与 nectin-4 之于麻疹、CD155 之于脊髓灰质炎。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch1-s3': [
    {
      src: '/images/bio/drawn/vi-ch1-s3-origin-hypotheses.svg',
      caption:
        '退化／逃逸／细胞前三说并不互斥，可能多系起源；拟菌病毒 1.2 Mb、潘多拉病毒 1.9–2.5 Mb 曾支持「第四域」；人类基因组约 8% 为 ERV；全球约 10³¹ 颗病毒。病毒可能多系起源：退化假说、逃逸假说与细胞前假说分别主张退化的寄生体、出走的元件与 RNA 世界遗存，三说并不互斥；拟菌病毒 1.2 Mb 与潘多拉病毒 1.9–2.5 Mb 基因组携带翻译装置基因，曾支持「第四域」假说；长枝吸引与基因水平获得的证据削弱该说。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch12-s4': [
    {
      src: '/images/bio/drawn/vi-ch12-s4-public-health-frontiers.svg',
      caption:
        'GISRS 全球监测 · 天花 1980 唯一消灭案例 · 脊灰 2/3 型已根除 · 噬菌体复兴与 T-VEC 溶瘤 · AAV 载体 · One Health 界面治理。GISRS（1952 年建立、2011 年更名）以全球毒株监测支撑每年两次的疫苗组分推荐，鸡胚适应与预测滞后是 H3N2 疫苗有效性波动的主因，网络正向细胞与序列化制备及更广呼吸道病毒扩展；控制、消除与消灭是三个递进层级：天花（1980）为唯一人类病原消灭案例，牛瘟（2011）为动物界首例；脊灰 2 型与 3 型野生毒株已分别于 2015 与 2019 年宣告根除，1 型残存于阿巴两国。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch8-s3': [
    {
      src: '/images/bio/drawn/vi-ch8-s3-persistent-latent.svg',
      caption:
        '急性／慢性／潜伏／慢病毒四型结局；HBV 靠 cccDNA 储库（核苷类似物不能清除、功能性治愈为目标）；HSV 潜伏神经节仅转录 LAT；EBV 潜伏记忆 B 细胞。感染结局分急性、慢性、潜伏、慢病毒四型，难点各不相同：储库、靶点不表达、免疫失效；HBV 持久性依赖核内 cccDNA 微染色体储库，核苷类似物不能清除之，功能性治愈是现实治疗目标。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch5-s2': [
    {
      src: '/images/bio/drawn/vi-ch5-s2-dna-replication.svg',
      caption:
        'SV40 约 5.2 kb 大 T 抗原一蛋白三职并劫持 Rb/p53；HSV-1 约 152 kb 滚动环产头尾连环体；腺病毒 pTP-dCMP 蛋白引物链置换；HBV 约 3.2 kb 经 pgRNA 逆转录',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch7-s1': [
    {
      src: '/images/bio/drawn/vi-ch7-s1-assembly-logic.svg',
      caption:
        'Caspar-Klug 1962 准等价：一个亚基胜任五重／六重轴；TMV 2130 亚基、螺距 2.3 nm、1955 年两组分重建；成核-生长动力学弱键纠错；HSV 支架 VP21/VP24 用完即弃',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch3-s2': [
    {
      src: '/images/bio/drawn/vi-ch3-s2-dna-genomes.svg',
      caption:
        '环状病毒 1.7–2 kb 至痘病毒 130–300 kb 相差逾百倍；线性末端四解法（冗余切割／cos 环化／发夹／末端蛋白）；HBV 经 pgRNA 逆转录复制；AAV 4.7 kb 八种蛋白。DNA 病毒基因组大小自环状病毒约 2 kb 至痘病毒 130–300 kb，基因组越大自主性越强、对宿主依赖越浅；环形双链基因组（乳多空）以 θ 与滚环复制回避末端难题；乳头瘤把扩增与上皮分化耦合。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch6-s1': [
    {
      src: '/images/bio/drawn/vi-ch6-s1-posttranscriptional.svg',
      caption:
        '宿主 Pol II 者享受加帽加尾，自带聚合酶者抢帽（流感）或自营（痘）；1977 年腺病毒 R 环实验发现剪接（1993 诺奖）；选择剪接一票多产；vhs 清场。用宿主 Pol II 转录的病毒 mRNA 享受宿主加帽加尾；自带聚合酶的病毒须自营或抢帽；RNA 剪接由 1977 年腺病毒 R 环实验发现（Sharp 与 Roberts，1993 年诺奖），源于病毒学的意外馈赠。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch1-s1': [
    {
      src: '/images/bio/drawn/vi-ch1-s1-virus-definition.svg',
      caption:
        '吕夫 1957：只含一种核酸、严格胞内寄生、复制增殖、蛋白衣壳；TMV 可结晶（95% 蛋白+5% RNA）；无 rRNA 排除在三域之外；抗生素对病毒一律无效。病毒的四条非细胞属性：只含一种核酸、无核糖体与独立翻译系统、无产能代谢、以复制而非二分裂增殖；毒粒离体时是可结晶的化学大分子（Stanley 1935 年结晶 TMV），进入活细胞方表现复制、变异、演化与竞争的生命属性。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch2-s2': [
    {
      src: '/images/bio/drawn/vi-ch2-s2-virion-composition.svg',
      caption:
        '流感约 1%、脊灰约 30%、T 偶数噬菌体约 50%、TMV 约 95% 为蛋白；基质蛋白与毒粒相关酶随颗粒包装；gp120 二十余个糖基化位点构成免疫逃逸的「糖盾」。核酸占毒粒干重 0.5%–50%：流感约 1%（被包膜与基质稀释），脊髓灰质炎病毒约 30%，T 偶数噬菌体约 50%；结构蛋白包括衣壳/核蛋白、基质蛋白（流感 M1、HIV p17）与包膜糖蛋白，随基因组增大由一两种增至数十种。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch10-s1': [
    {
      src: '/images/bio/drawn/vi-ch10-s1-quasispecies.svg',
      caption:
        'RdRp 无校读错误率 10⁻⁶–10⁻⁴（高 3–5 个数量级）；冠状病毒 nsp14 校读支撑 26–32 kb；Eigen 1971 准种＋Domingo 1978 Qβ 证据；错误阈值定 33 kb 上限；耐药变异预先存在',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch11-s1': [
    {
      src: '/images/bio/drawn/vi-ch11-s1-transmission-dynamics.svg',
      caption:
        '呼吸道／粪-口／血液性／垂直四主干＋虫媒；麻疹 R0 12–18、1918 大流感 1.5–2.5（约五亿感染）；SARS-CoV-2 气溶胶传播 2021 年确认；载量峰值错位决定防控难度。病毒传播分呼吸道、粪-口、血液与性、垂直四条主干途径，外加虫媒传播；排出门户与环境耐受性决定传播效率；SARS-CoV-2 可经气溶胶传播已于 2021 年获正式确认；呼吸道传播高度偏态，超扩散事件贡献不成比例的病例。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch12-s1': [
    {
      src: '/images/bio/drawn/vi-ch12-s1-lab-diagnosis.svg',
      caption:
        '核酸与抗原窗口早于血清学一至两周；Ct 每 3.3 个循环约一个数量级、跨平台不可比；PRNT50 与双份血清四倍升高；mNGS 为培养阴性后的第二线。病毒学诊断沿检出病毒成分（核酸、抗原、活病毒）与检出宿主应答（抗体）两条主线展开，核酸与抗原的检出窗口早于血清学一至两周；CPE 形态具有鉴定指纹价值（圆缩、葡萄串样团聚、合胞体、血吸附），离心小瓶培养把报告缩短至一至两日；诺如与丙肝病毒难以常规培养。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch3-s3': [
    {
      src: '/images/bio/drawn/vi-ch3-s3-rna-genomes.svg',
      caption:
        '多数 3–15 kb、冠状病毒 26–32 kb 为 RNA 之最；RdRp 无校读错误率 10⁻⁶–10⁻⁴，埃根阈值 L×μ≪1 封顶；准种既是快适应引擎也是复杂度天花板。RNA 病毒基因组普遍小于 DNA 病毒，多数 3–15 kb；冠状病毒以 26–32 kb 居 RNA 之最，上限约 33 kb；正链基因组进胞先翻译后复制；负链病毒毒粒必携 RdRp，非节段者呈 3′ 起始的转录梯度，节段者各段独立转录。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch7-s4': [
    {
      src: '/images/bio/drawn/vi-ch7-s4-lysis-spread.svg',
      caption:
        '穿孔素—内溶素—spanin 三件套定时裂解（λ S 蛋白双起始密码子）；蚀斑记录裂解扩散；融合蛋白贯通合胞体（RSV）；HIV 病毒突触传播效率高且降低耐药屏障。革兰阴性噬菌体裂解需三件套：穿孔素定时在内膜成孔、内溶素破壁、spanin 融合内外膜；λ 的 S 蛋白以双起始密码子内置定时器与保险栓；T4 的裂解抑制现象表明裂解时机是可被环境信号调校的生活史参数，r 基因座突变体呈快裂解表型。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch7-s2': [
    {
      src: '/images/bio/drawn/vi-ch7-s2-genome-packaging.svg',
      caption:
        'ψ 等顺式包装信号决定身份；12 聚体门户＋末端酶马达把 dsDNA 泵入（壳内约 500 mg/mL、数十大气压）；λ 按 cos 切割、T4 头部满装；内腔为基因组体积 1.5–2 倍。包装特异性由基因组顺式包装信号（如 HIV ψ 茎环）与衣壳或核衣壳蛋白的识别保证；双链 DNA 噬菌体由 12 聚体门户蛋白与末端酶腺苷三磷酸酶马达泵入 DNA，壳内浓度约每毫升五百毫克、内压达数十个大气压。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch6-s4': [
    {
      src: '/images/bio/drawn/vi-ch6-s4-temporal-cascade.svg',
      caption:
        'VP16 起爆 HSV α 级联、ICP4 双向调控、γ2 依赖 DNA 复制；λ 右操纵区 OR1/OR2/OR3 与背靠背启动子构成双稳态；Tat-TAR 募集 P-TEFb 正反馈致全或无表达。HSV α-β-γ 级联由毒粒携带的 VP16 起爆；ICP4 双向调控（自抑 α、激活 β 与 γ），γ2 绝对依赖 DNA 复制；λ 右操纵区三联位点 OR1、OR2、OR3 与背靠背启动子构成 CI-Cro 双稳态开关：CI 维持溶原并正负自调，Cro 先关 PRM 入裂解，RecA 活化体切 CI 实现 UV 诱导。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch4-s2': [
    {
      src: '/images/bio/drawn/vi-ch4-s2-fusion-endocytosis.svg',
      caption:
        '中性 pH 融合发生于细胞表面、低 pH 依赖者待内体酸化；I 类须切割活化（HA0→HA1/HA2）、II 类重折为三聚体、III 类兼含两类元件；融合经半融合中间体成孔。侵入分质膜融合与内吞两大通路，选择取决于融合蛋白触发方式：中性 pH 融合可在细胞表面发生，低 pH 依赖者须待内体酸化；I 类融合蛋白须切割活化（流感 HA0 切为 HA1 与 HA2），切割许可由宿主蛋白酶分布决定，多碱性切割位点与禽流感高毒力相关。',
      credit: DRAWN_CREDIT,
    },
  ],
  'virology-ch8-s1': [
    {
      src: '/images/bio/drawn/vi-ch8-s1-cpe-plaque.svg',
      caption:
        '变圆／成簇／合胞体／空泡／脱落为稳定指纹；内基小体（1903 Negri）为狂犬诊断基石；凋亡被封时 RIPK1-RIPK3-MLKL 坏死性凋亡接棒；PFU 定量。致细胞病变效应是病毒在培养细胞中的形态学改变，各病毒有稳定指纹：变圆、成簇、合胞体、空泡、脱落溶解；内基小体（狂犬）、瓜尼里小体（痘）与考德里 A 型包涵体（疱疹）具诊断价值；现代认为多数包涵体是相分离组织的病毒复制工厂。',
      credit: DRAWN_CREDIT,
    },
  ],
}
