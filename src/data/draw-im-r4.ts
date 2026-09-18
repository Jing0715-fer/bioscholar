// ============================================================
// Round 4 自绘插图挂载（im 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/im/ → bun scripts/draw/gen.ts im
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawImR4: Record<string, Illustration[]> = {
  'immunology-ch6-s3': [
    {
      src: '/images/bio/drawn/im-ch6-s3-antibody-diversity.svg',
      caption:
        '重链 V 约 65、D 约 27、J 约 6 个片段，轻链仅 V 与 J（κ：V40·J5 约 200 种；λ：V30·J4 约 120 种，合计约 320 种）；RAG 识别 RSS 并遵循 12/23 规则；组合多样性约贡献 300 万量级，N/P 核苷酸与末端修剪的连接多样性使理论库容达 10⁹–10¹¹；等位排斥与同型排斥保证一克隆一受体，中枢经受体编辑、克隆删除与诱导无能清除自身反应性 B 细胞',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch8-s4': [
    {
      src: '/images/bio/drawn/im-ch8-s4-exogenous-cross-presentation.svg',
      caption:
        '外源性抗原经内体-溶酶体逐步酸化与组织蛋白酶降解后由 MHC II 提呈给 CD4⁺ T；不变链 CLIP 段占据 II 类凹槽防止错误装载，HLA-DM 在 MIIC 中催化肽交换与肽编辑、HLA-DO 负向调节 DM；交叉提呈（Bevan 1976）指外源性抗原经 MHC I 提呈给 CD8⁺ T，经依赖蛋白酶体与 TAP 的胞质溶胶途径和不依赖 TAP 的空泡途径实现，专职执行者为 cDC1，是抗病毒、抗肿瘤与交叉耐受的共同枢纽',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch4-s4': [
    {
      src: '/images/bio/drawn/im-ch4-s4-acute-phase-crp-saa.svg',
      caption:
        '固有免疫按即刻（0–4 小时）、早期诱导（4–96 小时）与适应性应答（96 小时后）三时相接力；急性期反应以 IL-6 驱动的肝脏急性期蛋白合成为核心，CRP 与 SAA 升幅最大；适度发热与血清铁、锌下降（营养免疫）均为有利于宿主的抗感染策略；经 DC 提呈与共刺激、细胞因子极化及 C3d-CR2 协同完成向适应性免疫的交接',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch1-s2': [
    {
      src: '/images/bio/drawn/im-ch1-s2-system-map.svg',
      caption:
        '中枢器官（骨髓、胸腺）育成免疫细胞，外周器官（淋巴结、脾、MALT）启动应答；细胞源于造血干细胞的髓系与淋巴系两谱系；T 细胞约占外周血淋巴细胞 60–70%、B 细胞 10–20%、NK 5–10%；中性粒细胞占白细胞 50–70%',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch12-s2': [
    {
      src: '/images/bio/drawn/im-ch12-s2-type-ii-iii.svg',
      caption:
        'II 型由 IgG/IgM 靶向细胞表面抗原，经补体溶破、调理吞噬与 ADCC 三途径破坏靶细胞，Graves 病演示抗体改写受体功能的非溶细胞性变体；ABO 天然抗体源于肠道菌群交叉刺激、多为 IgM，Rh 抗 D 须经致敏产生 IgG 并经胎盘转运驱动新生儿溶血症，抗 D 免疫球蛋白以被动抗体抢先清除胎儿红细胞阻断母体致敏；III 型由中等大小可溶性免疫复合物在血管通透性增高与血流涡流部位沉积致病，损伤由补体过敏毒素与中性粒细胞酶及活性氧造成，Arthus 为局部型、血清病潜伏 7–14 天，CH50 与 C3、C4 下降是实验室指纹',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch11-s3': [
    {
      src: '/images/bio/drawn/im-ch11-s3-treg-network.svg',
      caption:
        'Treg 分胸腺来源 tTreg（阴性选择中等亲和力分支分流，守护自身抗原耐受）与外周诱导 iTreg（TGF-β 等环境诱导，主黏膜与母胎耐受）；Foxp3 为命脉转录因子，Scurfy 小鼠与 IPEX 综合征证明其缺陷即多器官自身免疫；Treg 经 IL-10、TGF-β、IL-35，联合 CD25 掳夺 IL-2、CTLA-4 掣夺 B7 与 IDO 代谢剥夺执行抑制；Jerne 1974 年网络学说以 Ab1-Ab2-Ab3 与内影像刻画识别库镜像调节，1984 年与单抗技术同获诺贝尔奖；稳态环过长过短皆有代价',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch9-s2': [
    {
      src: '/images/bio/drawn/im-ch9-s2-thymic-selection.svg',
      caption:
        'T 细胞经 DN（CD4⁻CD8⁻）至 DP（CD4⁺CD8⁺）推进，TCR β 重排成功引发 β 选择与等位基因排除；阳性选择以适当低亲和力自身肽-MHC 识别赋予存活信号、自身 MHC 限制性与 CD4/CD8 谱系定向，阴性选择删除高亲和力自身反应克隆（或分流为 tTreg）；约 95% 以上胸腺细胞死于选择，仅百分之几输出外周；AIRE 驱动 mTEC 异位表达组织特异性抗原扩展考卷，其突变致 APS-1/APECED',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch10-s4': [
    {
      src: '/images/bio/drawn/im-ch10-s4-humoral-response-rules.svg',
      caption:
        '初次应答潜伏期约 5–10 天、IgM 起步、平台低而亲和力低；再次应答潜伏期约 1–3 天、IgG 为主、平台高数倍至数十倍且维持更久；IgG 血清半衰期约 23 天（IgG3 约一周、IgM 约 5 天、IgE 约 2 天），经 FcRn 酸性内体拾取-中性释放的回收循环延寿；长期维持由骨髓生存龛长寿浆细胞不依赖抗原持续供给；母体 IgG 经胎盘 FcRn 转运（孕晚期最活跃）、母乳 sIgA 覆盖黏膜构成被动免疫，脐血 IgM 升高提示宫内感染，母传 IgG 干扰疫苗应答故麻疹疫苗约 9 月龄前后接种',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch5-s4': [
    {
      src: '/images/bio/drawn/im-ch5-s4-superantigen-adjuvant-mitogen.svg',
      caption:
        '超抗原不经加工、不占 MHC 沟槽，而结合 MHC II 非多态区与 TCR Vβ 直接交联，纳克级剂量即可激活 2%–20% 的 T 细胞（普通抗原不足万分之一），金葡菌肠毒素与 TSST-1 引发中毒性休克综合征；佐剂经储库效应、APC 招募与 PRR 刺激增强免疫原性（铝佐剂与弗氏完全佐剂）；丝裂原非特异多克隆激活——PHA/ConA 作用于 T 细胞、LPS 作用于小鼠 B 细胞',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch4-s3': [
    {
      src: '/images/bio/drawn/im-ch4-s3-cytokine-network.svg',
      caption:
        '细胞因子为低分子量分泌蛋白，以自泌与旁泌为主，具多效性、冗余性、协同性与网络性；IL、TNF、IFN、趋化因子（约 8–10 kDa）与集落刺激因子分工覆盖活化增殖、极化、趋化与造血；多数经 JAK-STAT 通路转导、SOCS 负反馈刹停；风暴见于超抗原中毒、CAR-T 与重症感染（IL-6 为中心节点），抗 IL-6R、抗 TNF 与 IL-1 受体拮抗剂为精准干预',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch4-s1': [
    {
      src: '/images/bio/drawn/im-ch4-s1-complement-cascade.svg',
      caption:
        '40 余种蛋白组成、肝细胞与单核-巨噬细胞合成，C3 血清浓度最高（约 1.2–1.6 g/L）；经典/凝集素/旁路三途径在 C3 汇合，经 C3 转化酶（C4b2a 或 C3bBb）与 C5 转化酶进入共同末端通路，C5b 募集 12–18 个 C9 形成攻膜复合物；效应涵盖溶菌、调理、过敏毒素、免疫复合物清除与 B 细胞共刺激',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch9-s3': [
    {
      src: '/images/bio/drawn/im-ch9-s3-t-subsets.svg',
      caption:
        '效应 T 分化由 TCR 特异性、共刺激与极化细胞因子三信号决定：Th1/T-bet（IFN-γ，细胞免疫）与 Th2/GATA3（IL-4，IgE 与抗寄生虫）互为跷跷板，Th17/RORγt 以 IL-17 动员中性粒细胞，Tfh/BCL6 辅导生发中心，Treg/Foxp3 维持外周耐受；CTL 经穿孔素-颗粒酶与 FasL-Fas 两条途径定向诱导凋亡；克隆收缩后留存 CCR7⁺ TCM、TEM 与 CD69⁺ TRM 三型记忆细胞',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch11-s4': [
    {
      src: '/images/bio/drawn/im-ch11-s4-neuro-endocrino-immune.svg',
      caption:
        '神经、内分泌与免疫三大系统互表达受体、互为信号源，HPA 轴、交感神经与迷走神经为三条解剖干线；糖皮质激素经胞内受体抑制促炎基因、诱导淋巴细胞凋亡并压制 Th1，炎症细胞因子上传激活 HPA 轴构成炎症自限的内分泌负反馈；胆碱能抗炎通路（2000 年前后确立）经迷走神经-乙酰胆碱-α7 烟碱型受体抑制巨噬细胞促炎因子合成，脾神经-乙酰胆碱能 T 细胞接力完成脾内末段；IL-1、TNF、IL-6 经 PGE2 上移体温调定点致发热并驱动病态行为，非甾体抗炎药抑制环氧化酶退热；自身免疫病是遗传易感、分子模拟与表位扩展、屏障失守及调节失效多环节失守的复合终局（同卵双胞胎一致率常仅 20%–40%）',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch9-s4': [
    {
      src: '/images/bio/drawn/im-ch9-s4-dual-signal-synapse.svg',
      caption:
        'TCR 与 pMHC 亲和力低（Kd 约 1–100 μmol/L，比抗原-抗体低三至五个数量级），靠动力校对与串联触发实现敏感特异识别；免疫突触以 cSMAC、pSMAC、dSMAC 三层超分子结构兼具信号汇聚、定向杀伤与受体降解终止三重功能；双信号模型中缺 CD28-B7 第二信号者克隆失能，信号三指定亚群方向；CTLA-4 与 PD-1 为生理刹车，慢性刺激致耗竭（PD-1 持续高表达、效应阶梯式丧失），检查点阻断抗体可部分逆转——2018 年诺贝尔奖主题',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch2-s4': [
    {
      src: '/images/bio/drawn/im-ch2-s4-recirculation-homing.svg',
      caption:
        '淋巴细胞在血中每次仅停留约半小时，经 HEV 的滚动—趋化—黏附—穿壁四步级联进入淋巴结；L-选择素-PNAd 通往淋巴结、α4β7-MAdCAM-1 通往黏膜；初始细胞循环于血液-淋巴器官、效应细胞入炎症组织、Trm 以 CD69/CD103 驻留组织',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch12-s3': [
    {
      src: '/images/bio/drawn/im-ch12-s3-type-iv-dth.svg',
      caption:
        'IV 型由致敏 Th1 与 CTL 介导，无抗体与补体参与，再次接触后 24–72 小时达峰，只能以淋巴细胞（不能以免疫血清）被动转移；结核菌素试验以 PPD 皮内注射、48–72 小时读取硬结，阳性示细胞免疫致敏而非现症感染，重症免疫抑制者可呈假阴性；接触性皮炎由镍、漆酚、TNCB 等半抗原经朗格汉斯细胞提呈致敏 CTL/Th1，表位扩散使皮炎慢性化；肉芽肿是持续性抗原驱动 Th1-M1 聚集的慢性 IV 型形态；IV 型与细胞免疫保护为同一机制的两面——适度清除病原、失度则组织损伤',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch5-s1': [
    {
      src: '/images/bio/drawn/im-ch5-s1-immunogenicity-reactogenicity.svg',
      caption:
        '抗原兼具免疫原性（诱导应答）与反应原性（与应答产物特异结合）两重性能且彼此独立；完全抗原多大于 10 kDa、半抗原常不足 1 kDa，半抗原偶联载体蛋白后获得免疫原性——载体效应（DNP-OVA/DNP-BSA 实验）证明 B 表位识别半抗原、T 表位识别载体的分工协作，也是青霉素超敏与结合疫苗的分子基础',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch11-s2': [
    {
      src: '/images/bio/drawn/im-ch11-s2-peripheral-tolerance.svg',
      caption:
        '克隆失能源于「有抗原、无共刺激」的半套信号，NFAT 单独驱动的抑制性回路固化无反应状态，强共刺激加 IL-2 可部分逆转；免疫忽视与低带/高带耐受描述抗原剂量两端效应，炎症可打破忽视；AICD 经 Fas-FasL-FADD-胱天蛋白酶级联删除反复活化的 T 细胞，缺陷致 ALPS；免疫豁免部位以屏障、FasL、TGF-β 与 IDO 偏置应答，ACAID 改写前房抗原应答、屏障破坏致交感性眼炎；IL-10 与 TGF-β 使黏膜组织默认耐受，支撑口服耐受与菌群共生',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch1-s4': [
    {
      src: '/images/bio/drawn/im-ch1-s4-history-timeline.svg',
      caption:
        '1796 年琴纳牛痘接种开创理性疫苗接种，1980 年天花被宣布根除；巴斯德研制炭疽（1881）与狂犬病（1885）减毒疫苗；1890 年血清疗法与 1908 年细胞/体液两派共享诺奖；1975 年杂交瘤技术诞生单克隆抗体；2018 年 CTLA-4 与 PD-1 免疫检查点治疗获诺贝尔奖',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch1-s3': [
    {
      src: '/images/bio/drawn/im-ch1-s3-primary-secondary-response.svg',
      caption:
        '初次应答潜伏期约 1–2 周、IgM 先行、平台低；再次应答潜伏期 1–3 天、IgG 为主、平台高且亲和力高；免疫记忆由记忆 T/B 细胞与骨髓长寿命浆细胞构成，是疫苗初免—加强程序的理论依据；CTLA-4、PD-1 检查点与 Treg 负责应答自限',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch5-s2': [
    {
      src: '/images/bio/drawn/im-ch5-s2-epitope-t-vs-b.svg',
      caption:
        '表位是抗原分子上被 TCR、BCR 或抗体特异性识别的最小结构单位，约 5–15 个氨基酸残基（或多糖残基、化学基团）；线性表位由连续残基组成、构象表位由折叠后相聚的不连续残基拼合（变性可破坏）；T 表位为经 MHC 提呈的线性肽（约 8–17 aa，I 类槽 8–10 aa、II 类槽 13–17 aa），B 表位为天然表面结构（约 5–15 aa 或 5–7 个糖残基）',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch7-s1': [
    {
      src: '/images/bio/drawn/im-ch7-s1-complement-naming-synthesis.svg',
      caption:
        '补体由 40 余种蛋白质组成，总量约占血清球蛋白的 10%；固有成分按发现先后命名 C1–C9，经典途径实际激活顺序为 C1、C4、C2、C3、C5；C3 浓度最高（约 1.2–1.6 g/L）、D 因子最小（约 24 kDa，1–2 mg/L）、C4bp 可达约 550 kDa；56 °C 30 分钟即被灭活；血浆补体主要由肝细胞合成，巨噬细胞是炎症灶局部补体的重要来源',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch3-s2': [
    {
      src: '/images/bio/drawn/im-ch3-s2-dendritic-cell-sentinel.svg',
      caption:
        '未成熟 DC 广布上皮下持续采样、低 MHC 与共刺激倾向诱导耐受；识别 PAMP/DAMP 后成熟，上调 MHC-肽与 CD80/86 并循 CCR7-CCL19/21 迁入淋巴结 T 区；cDC1 擅长交叉提呈与 IL-12、cDC2 引导 Th2/Th17、pDC 经 TLR7/9 分泌 I 型干扰素；1973 年 Steinman 发现 DC，2011 年获诺贝尔奖',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch1-s1': [
    {
      src: '/images/bio/drawn/im-ch1-s1-concept-functions.svg',
      caption:
        '免疫的基本概念与功能：免疫是识别「自己」与「非己」、排除非己、耐受自身以维持内稳态的生物学过程。固有免疫与生俱来、应答快（分钟-小时级）、无经典记忆；适应性免疫特异、有记忆、启动慢（天级）——两系统前后接力。免疫功能的失衡两端：过强致超敏反应与自身免疫病，不足致免疫缺陷与肿瘤监视失守——免疫学即「恰到好处的防御」的科学。',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch7-s3': [
    {
      src: '/images/bio/drawn/im-ch7-s3-complement-regulation.svg',
      caption:
        '补体调节蛋白分可溶性与膜型两类，对启动酶（C1-INH 灭活 C1r/C1s 及 MASP）、C3/C5 转化酶（C4bp 与 H 因子加速衰变）、C3b/C4b 命运（I 因子依赖辅因子裂解为 iC3b、C3dg 等失活片段）与 MAC 组装（S 蛋白、CD59）逐级设卡；H 因子借宿主表面唾液酸分辨自我与非我；C1-INH 缺陷致遗传性血管神经性水肿，PIGA 突变致 GPI 锚缺陷、DAF 与 CD59 缺失而发生 PNH',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch10-s1': [
    {
      src: '/images/bio/drawn/im-ch10-s1-b-cell-development.svg',
      caption:
        'B 细胞在骨髓经 pro-B、pre-B、未成熟 B 至成熟 B 推进，Ig 基因重排先重链（D-J 先于 V-DJ）后轻链（κ 先于 λ）；pre-BCR 由 μ 重链与 λ5/VpreB 替代轻链组装并自发发出检查点信号（验证重链、驱动克隆扩增、锁定等位排斥、转启轻链重排），BTK 突变致 XLA；未成熟 B 遇多价膜型自身抗原被克隆删除、遇低浓度可溶性抗原致克隆失能，受体编辑为 B 独有的「返厂整改」；成熟 B 共表达 mIgM 与 mIgD 输出外周定居滤泡与边缘区',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch5-s3': [
    {
      src: '/images/bio/drawn/im-ch5-s3-immunogenicity-factors.svg',
      caption:
        '异物性是首要因素，随种系距离增大而增强；分子量大于 100 kDa 多为强免疫原、小于 10 kDa 通常微弱；宿主 MHC 肽结合基序（Ir 基因）决定提呈效率，是个体应答差异的遗传基础；进入途径与剂量影响应答走向——皮内与皮下最佳，过高或过低剂量及口服途径倾向耐受',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch11-s1': [
    {
      src: '/images/bio/drawn/im-ch11-s1-central-tolerance.svg',
      caption:
        '免疫耐受是抗原特异性无应答状态，区别于免疫缺陷与免疫抑制；Burnet 克隆选择学说与 Medawar 新生期小鼠获得性耐受同获 1960 年诺贝尔奖；T 细胞中枢耐受由胸腺阴性选择执行，AIRE 驱动 mTEC 异位表达组织特异性抗原扩展考卷，突变致 APS-1/APECED；B 细胞中枢耐受含删除、失能与受体编辑三手；中枢耐受受空间、亲和力窗口、时序与年龄四重限制，健康人外周可检出少量自身反应细胞，端赖外周耐受接防',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch2-s1': [
    {
      src: '/images/bio/drawn/im-ch2-s1-bone-marrow-thymus.svg',
      caption:
        '骨髓育成 B 细胞（重排 → 前 BCR 校验 → 中枢耐受筛选）并兼为浆细胞定居场所；胸腺经阳性选择赋予自身 MHC 限制性、阴性选择清除自身反应克隆，约 95% 胸腺细胞被淘汰，仅约 5% 以初始 T 细胞形式输出；AIRE 缺陷致自身免疫性多内分泌病',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch7-s4': [
    {
      src: '/images/bio/drawn/im-ch7-s4-complement-effects.svg',
      caption:
        'MAC 即 C5b-6-7-8-9n，形成内径约 10 nm 的管状孔道经渗透性溶破裂解靶细胞，对奈瑟菌属最敏感，C5–C9 缺陷者反复重症脑膜炎奈瑟菌感染；C3b/iC3b 经 CR1、CR3、CR4 介导调理吞噬，红细胞借 CR1 运输免疫复合物至肝脾清除（免疫黏附）；C5a 为作用最强的过敏毒素与中性粒细胞趋化因子，经 C5aR（CD88）G 蛋白偶联受体发挥效应；依库珠单抗以抗 C5 封锁裂解、用药前须接种脑膜炎奈瑟菌疫苗',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch6-s4': [
    {
      src: '/images/bio/drawn/im-ch6-s4-monoclonal-antibody.svg',
      caption:
        '1975 年 Köhler 与 Milstein 以 PEG 融合免疫脾细胞与 HGPRT 缺陷骨髓瘤细胞、经 HAT 筛选建立杂交瘤技术（1984 年诺奖），获得结构均一、单一特异性、可无限供应的单克隆抗体；治疗性抗体经鼠源（OKT3，1986）、嵌合（约 33% 鼠源）、人源化（CDR 移植，5% 以下）与全人源四代演进；噬菌体展示（2018 年诺贝尔化学奖）实现体外全人源淘选；双特异抗体、ADC 与 Fc 工程拓展了抗体药物的边界',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch4-s2': [
    {
      src: '/images/bio/drawn/im-ch4-s2-prr-pamp-damp.svg',
      caption:
        'PAMP 为病原体保守且必需的分子模式、DAMP 为损伤细胞释放的内源性危险信号，共同被种系基因编码的 PRR（膜型 TLR/CLR、胞质型 NLR/RLR、分泌型 MBL/CRP）识别；人 TLR 共 10 种，表面识别胞外组分、内体识别核酸，信号汇合于 NF-κB 与 IRF；NLRP3 炎症小体经两信号组装，caspase-1 成熟 IL-1β/IL-18 并经 gasdermin D 诱发焦亡；PRR 上调共刺激分子是佐剂作用的分子基础',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch8-s1': [
    {
      src: '/images/bio/drawn/im-ch8-s1-hla-locus-map.svg',
      caption:
        'HLA 复合体位于第 6 号染色体短臂 6p21.3、跨越约 3600 kb、座位超 200 个；I 类区（HLA-A/B/C 经典，E/F/G 非经典）、II 类区（DR/DQ/DP 经典 + TAP/PSMB/DM-DO 配套）与 III 类区（C2、C4、Bf、TNF）；多样性来自多基因性与多态性（HLA-B 已逾八千等位基因，多态残基集中于肽结合槽编码区）两层，共显性表达使单个细胞陈列至多 6 种 I 类与 10 种上下 II 类分子；紧密连锁的单元型整体传递、连锁不平衡与公共表位交叉反应是移植配型的遗传学基础',
      credit: DRAWN_CREDIT,
    },
  ],
  'immunology-ch10-s2': [
    {
      src: '/images/bio/drawn/im-ch10-s2-bcr-signaling.svg',
      caption:
        'BCR 由 mIgM/mIgD 与 Igα/Igβ（CD79a/b）组成，信号亚单位共携两枚 ITAM，经 Lyn-Syk-BLNK-PLCγ2 接通钙流、MAPK 与 NF-κB 三条主干（Btk 缺陷致 XLA）；CD21-CD19-CD81 共受体以 C3d 耦联补体激活、显著降低活化阈值，EB 病毒经 gp350 盗用 CD21；CD22 与 FCGR2B 经 ITIM 招募 SHP-1 与 SHIP 负调，抗体反馈构成自限环；TD 抗原须 Tfh 辅助并产出记忆与亲和力成熟，TI-1 依赖丝裂原、TI-2 依赖重复表位交联，婴幼儿对 TI-2 应答弱故多糖疫苗须制成结合疫苗',
      credit: DRAWN_CREDIT,
    },
  ],
}
