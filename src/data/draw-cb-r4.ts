// ============================================================
// Round 4 自绘插图挂载（cb 学科）
// 全部为代码绘制矢量示意图（依据教材参数，非 AI 生成）
// 生成管线：scripts/draw/scenes/cb/ → bun scripts/draw/gen.ts cb
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawCbR4: Record<string, Illustration[]> = {
  'cell-biology-ch1-s1': [
    {
      src: '/images/bio/drawn/cb-ch1-s1-cell-theory-unity.svg',
      caption:
        '细胞学说的建立与细胞的统一性：1665 年 Hooke 首次命名细胞；1838–1839 年 Schleiden（植物）与 Schwann（动物）建立细胞学说，1855 年 Virchow 补充「细胞来自细胞」三段论。一切细胞共享同一套分子语法——DNA-RNA-蛋白质的中心体系、ATP 能量通货、磷脂双层膜骨架与通用遗传密码，证明地球生命同源。原核与真核以核膜与膜性细胞器分野，但核糖体翻译、DNA 复制等核心机制高度保守——统一性是细胞生物学得以用模式生物研究人类的前提。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch1-s3': [
    {
      src: '/images/bio/drawn/cb-ch1-s3-microscopy-resolution.svg',
      caption:
        '显微成像技术的分辨率阶梯：分辨率是首要指标——光学显微镜受可见光衍射极限约束约 0.2 μm，电子显微镜以电子束波长突破至 0.1–0.2 nm（千倍提升）。光镜家族各司其职：相差显微镜无需染色观察活细胞（Zernike，1953 诺奖）；共聚焦激光扫描做光学切片与三维重建；冷冻电镜单颗粒重构解析近原子结构（2017 诺奖）；GFP 绿色荧光蛋白点亮活体标记体系（2008 诺奖）——从「看见细胞」到「看见分子」的技术长征。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch1-s4': [
    {
      src: '/images/bio/drawn/cb-ch1-s4-culture-fractionation.svg',
      caption:
        '细胞培养与组分分离技术体系：原代培养经首次传代即为细胞系——HeLa（1951）为首个人源连续细胞系，亦是医学伦理的标志性案例。流式细胞术逐个分析单细胞的多参数散射与荧光；差速离心按沉降速度分级分离细胞器——600 g 沉核、10,000 g 沉线粒体、100,000 g 沉微粒体（Palade 经典路线）；³H-亮氨酸放射自显影 pulse-chase 实验揭示分泌蛋白「ER→高尔基→分泌泡」的运输路线——细胞生物学从形态走向动力学的研究范式。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch2-s1': [
    {
      src: '/images/bio/drawn/cb-ch2-s1-membrane-model-history.svg',
      caption:
        '膜结构模型的百年演进：1925 年 Gorter-Grendel 脂单分子层实验提出脂双层；1935 年 Danielli-Davson 片层模型加入蛋白质；1959 年 Robertson 单位膜模型以「暗-亮-暗」三层电镜像定调（约 7.5 nm）；1972 年 Singer-Nicolson 流动镶嵌模型确立流动性与不对称性两大原则——膜蛋白以冰冻蚀刻电镜证据嵌入流动脂双层；1997 年脂筏模型再添功能微区概念。模型史即技术史：每次成像与生化技术的跃迁都改写膜的图景——科学模型的暂定性教科书范例。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch2-s2': [
    {
      src: '/images/bio/drawn/cb-ch2-s2-asymmetry-fluidity.svg',
      caption:
        '膜的不对称性与流动性：脂双层两叶组分分布不对称——外叶以磷脂酰胆碱与鞘磷脂为主，内叶富集磷脂酰乙醇胺与磷脂酰丝氨酸（PS）；flippase 将 PS 锁在内叶维持 asymmetry，PS 外翻即「吃我」信号启动凋亡清除与凝血。FRAP（荧光漂白后恢复）实验直接证明膜蛋白侧向扩散——流动性是膜功能的前提。流动性的调节因素：脂肪酸链长与不饱和度、胆固醇含量、温度与蛋白密度共同设定黏度——膜是动态而非静态的结构。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch2-s3': [
    {
      src: '/images/bio/drawn/cb-ch2-s3-passive-transport.svg',
      caption:
        '被动运输的三种形式：简单扩散不需蛋白、不耗能、无饱和性（仅小疏水分子与水可穿越脂双层）；协助扩散经膜蛋白加速——载体蛋白经构象变化交替开放两侧结合位点（如 GLUT 葡萄糖载体，GLUT4 受胰岛素调控转位），通道蛋白以门控控制离子高速流过（每秒 10⁶–10⁸ 个）。结构生物学的两座丰碑：K⁺ 通道选择性滤器（2003 诺奖，以配位几何区分 Na⁺）与水通道蛋白 AQP 拒绝 H₃O⁺ 仅放行水——通道不是「孔」而是「分子筛」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch2-s5': [
    {
      src: '/images/bio/drawn/cb-ch2-s5-endocytosis-exocytosis.svg',
      caption:
        '胞吞与胞吐的分子机器：胞吞三型——吞噬（专职细胞清大颗粒）、胞饮（非特异性吞饮）与受体介导胞吞（网格蛋白-AP2 接头识别受体胞内端、dynamin 缢断出芽）；早期内体 pH≈6 使配体-受体解离，受体再循环回膜。LDL 受体途径缺陷致家族性高胆固醇血症（Goldstein-Brown，1985 诺奖）——受体介导胞吞的经典教材案例。胞吐分组成型（持续分泌）与调节型（储存待 Ca²⁺ 触发 SNARE 融合）两型——分泌细胞的两套物流。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch3-s3': [
    {
      src: '/images/bio/drawn/cb-ch3-s3-lysosome-peroxisome.svg',
      caption:
        '溶酶体与过氧化物酶体：溶酶体含 60 余种酸性水解酶（最优 pH≈4.6，V 型质子泵酸化），分异噬性（吞噬外源物）与自噬性（消化自身组分）两类；酶缺陷致贮积病——Tay-Sachs（hexosaminidase A）、Gaucher（葡糖脑苷脂酶）。过氧化物酶体以氧化酶产 H₂O₂、过氧化氢酶就地分解（「边产边清」），承担极长链脂肪酸 β 氧化与过氧化氢代谢；蛋白以 PTS1（C 端 SKL）信号输入折叠态——两种「消化/代谢细胞器」的分工互补。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch3-s4': [
    {
      src: '/images/bio/drawn/cb-ch3-s4-endomembrane-disease.svg',
      caption:
        '内膜系统与疾病的分子桥梁：内质网未折叠蛋白反应（UPR）——PERK 磷酸化 eIF2α 暂抑翻译、IRE1 剪接 XBP1 转录上调分子伴侣、ATF6 入核增强折叠能力；失代偿时经 CHOP 走向凋亡。CFTR ΔF508 被 ER 质控识别降解致囊性纤维化；MAM（线粒体相关膜）介导 ER-线粒体 Ca²⁺ 与脂质交换——内膜系统的稳态即细胞的稳态，各环节突变都有疾病表型可循。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch4-s1': [
    {
      src: '/images/bio/drawn/cb-ch4-s1-signal-hypothesis-sorting.svg',
      caption:
        '信号假说与蛋白质分选地址系统（Blobel，1999 诺奖）：多肽链自带「地址信息」——信号肽为 N 端线性可切除序列（入 ER/线粒体），信号斑为折叠后才成形的三维斑块（如溶酶体酶的 Man-6-P 标志）；核定位信号 NLS 可反复使用不入而复用。三大分选方式：门控运输（核孔）、跨膜运输（ER/线粒体/过氧化物酶体易位子）、囊泡运输（分泌与内吞途径）——细胞每秒数以百万计蛋白质精准投递的邮政体系。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch4-s3': [
    {
      src: '/images/bio/drawn/cb-ch4-s3-coated-vesicles.svg',
      caption:
        '三类包被膜泡的运输方向与货物选择：COPII（Sar1-GTP 发起，Sec23/24-Sec13/31 组装）介导 ER→高尔基正向运输，Sec24 识别货物 exit 信号；COPI（Arf1-coatomer）负责回收逃逸蛋白——识别 KDEL（可溶性）/KKXX（膜蛋白）滞留信号逆运回 ER，BFA 使 Arf1 失稳致高尔基崩解入 ER；网格蛋白经 AP1/GGA（高尔基出芽）与 AP2（质膜内吞）接头选择货物——三种「邮政车」各跑专线，方向与货物选择由 GTP 酶开关与接头蛋白共同决定。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch4-s4': [
    {
      src: '/images/bio/drawn/cb-ch4-s4-rab-snare-targeting.svg',
      caption:
        '膜泡定向运输与融合的分子机制：Rab-GTP 赋予小泡「邮政编码」——人类 60 余种 Rab 各标记一条运输专线，募集效应蛋白完成系留（tethering）；Rab27a 突变致 Griscelli 综合征（色素与免疫缺陷）。融合由 SNARE 执行——v-SNARE 与 t-SNARE 拉链式组装成四螺旋束，把两膜拉到脂质融合距离；NSF-αSNAP 以 ATP 水解拆解 SNARE 复合体循环再用。突触递质释放是这套机器的典范：Ca²⁺ 感知 synaptotagmin 触发 SNARE 快速融合——毫秒级化学突触的分子底座。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch5-s3': [
    {
      src: '/images/bio/drawn/cb-ch5-s3-oxphos-chemiosmosis.svg',
      caption:
        '氧化磷酸化的化学渗透偶联：呼吸链复合体 I/III/IV 泵 H⁺ 建立跨膜质子动力势（ΔpH+Δψ），O₂ 在复合体 IV 被还原为水（Mitchell 化学渗透学说，1978 诺奖）；ATP 合酶以 F₀ 质子通道驱动 F₁ β 亚基 L/T/O 三态轮换——旋转催化（1997 诺奖）。计量口径：NADH≈2.5 ATP、FADH₂≈1.5 ATP（Hinkle 实测修正）。药理学工具箱：DNP 解偶联漏 H⁺ 产热无 ATP、UCP1 褐色脂肪专项产热；寡霉素堵 F₀、氰化物堵复合体 IV——每一环都有经典抑制剂为教材作证。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch5-s4': [
    {
      src: '/images/bio/drawn/cb-ch5-s4-mito-apoptosis-disease.svg',
      caption:
        '线粒体与凋亡及线粒体病：线粒体通透性转换孔 mPTP（ANT-VDAC-亲环蛋白 D）开放致 Δψ 崩解、基质肿胀——环孢素 A 抑制；Bax/Bak 成孔释放细胞色素 c，与 Apaf-1 组装凋亡复合体（apoptosome）启动 caspase 级联——线粒体是内在凋亡的调度中心。mtDNA 疾病谱：LHON 视神经萎缩、MELAS 卒中样发作、MERRF 肌阵挛——呈母系遗传、多系统受累；异质性阈值效应（突变型比例超阈值才发病）与破碎红纤维为其病理标志。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch6-s2': [
    {
      src: '/images/bio/drawn/cb-ch6-s2-kinesin-dynein.svg',
      caption:
        '微管马达蛋白的定向运输：驱动蛋白-1 走向微管正端（+端）执行顺向轴浆运输（胞体→突触），细胞质动力蛋白走向负端（-端）逆向回收——方向性由马达 ATP 酶结构域与微管格点的几何匹配决定。机械化学循环：ATP 水解耦联颈部 linker 构象变化，以 8 nm 步距 hand-over-hand 交替行走（单分子实验直接观测）。轴丝动力蛋白臂驱动纤毛与鞭毛弯曲（滑动模型），外动力臂缺陷致 Kartagener 综合征（不育+内脏反位）——纤毛摆动建立左右轴对称。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch6-s3': [
    {
      src: '/images/bio/drawn/cb-ch6-s3-actin-muscle.svg',
      caption:
        '微丝与肌肉收缩的滑动丝模型：肌动蛋白为 7 nm 双股螺旋，正端组装快、可踏车；Arp2/3 复合体成核分支网（板状伪足），formin 成核直线束（应力纤维）。横纹肌收缩的分子开关：动作电位沿 T 管传至 DHPR→触发 RyR 释放肌浆网 Ca²⁺→Ca²⁺ 结合肌钙蛋白 C→原肌球蛋白移位暴露肌动蛋白结合位点→横桥循环产力。滑动丝模型的几何证据（Huxley，1954）：收缩时暗带（A 带）不变、明带（I 带）与 H 带缩短——粗细丝相对滑动而非缩短。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch6-s4': [
    {
      src: '/images/bio/drawn/cb-ch6-s4-intermediate-filaments.svg',
      caption:
        '中间丝的组织特异网络：直径 10 nm 介于微丝微管之间——无极性、不结合核苷酸、无马达与踏车，稳定性靠磷酸化重塑（分裂期 lamin 崩解重组装）。组装层级：单体→卷曲螺旋二聚体→反平行四聚体→8 聚体绞成 10 nm 纤维。分型特异标志：角蛋白（上皮）、波形蛋白（间充质）、结蛋白（肌肉）、GFAP（星形胶质）、神经丝（神经元）、lamin（核纤层）——病理诊断的免疫组化指纹。LMNA 突变致早衰症与扩张型心肌病——「机械支架」基因的系统性表型。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch6-s5': [
    {
      src: '/images/bio/drawn/cb-ch6-s5-cell-migration.svg',
      caption:
        '细胞迁移的极化引擎：迁移四步循环——伸展（前沿外扩）→粘着（灶性粘附固着）→牵引（体部收缩）→释放（尾端解离）。Rho GTP 酶家族分工：Rac1 驱动板状伪足（lamellipodium）、Cdc42 驱动丝状伪足（filopodium）与极性建立、RhoA 收缩应力纤维。趋化的核心是 PIP₃ 胞内极化梯度——PI3K 在前端产生、PTEN 在后端清除，引导肌动蛋白组装方向；微管「探路」定向、微丝「产力」推进、中间丝「保障」完整性——迁移是三套骨架系统的协同演出。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch7-s1': [
    {
      src: '/images/bio/drawn/cb-ch7-s1-npc-nuclear-transport.svg',
      caption:
        '核孔复合体与核质运输：NPC 质量约 110–125 MDa、由约 30 种核孔蛋白（nucleoporin）组装成八重轮辐结构——胞质面有细丝、核面有篮筐，中央通道铺满 FG 重复序列构成「凝胶筛」。选择性规则：<40 kDa 小分子被动扩散；大分子必须经携带 NLS（入核）/NES（出核）的输入蛋白/输出蛋白主动运输——方向性由 Ran-GTP 梯度驱动（核内 RCC1 产 Ran-GTP、胞质 RanGAP 水解），循环消耗 GTP 维持单向流。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch7-s2': [
    {
      src: '/images/bio/drawn/cb-ch7-s2-lamina-nucleolus.svg',
      caption:
        '核纤层与核仁：核纤层是内核膜下的 V 型中间丝网架（lamin A/C 与 B 型）——有丝分裂前期经 CDK1 磷酸化解聚、末期去磷酸化重组装；LMNA 突变致核形态异常与早衰症（HGPS）。核仁围绕 5 对近端着丝粒染色体的 rDNA（NOR）构建，非膜包被的三相结构：纤维中心（FC）存 rDNA、致密纤维组分（DFC）活跃转录、颗粒组分（GC）加工成熟——45S 前体经 snoRNP 指导修饰与剪切为 18S/5.8S/28S 后经 NPC 输出。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch7-s4': [
    {
      src: '/images/bio/drawn/cb-ch7-s4-centromere-telomere.svg',
      caption:
        '着丝粒-动粒复合体与端粒：着丝粒以 CENP-A（组蛋白 H3 变体）表观遗传定义而非序列决定；动粒为着丝粒上的三层蛋白盘（外板捕捉微管、内板连 CCAN），兼具纺锤体组装检验点（SAC）平台。端粒为 TTAGGG 重复——3′ 端折回成 T 环藏起染色体末端免被识别为断裂；每代复制缩短 50–200 bp，端粒酶（逆转录酶+RNA 模板）补偿生殖与干细胞（Blackburn-Greider-Szostak，2009 诺奖）——基因组完整性的两端守护。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch7-s5': [
    {
      src: '/images/bio/drawn/cb-ch7-s5-karyotype-giant-chromosomes.svg',
      caption:
        '核型分析与巨大染色体：人类 2n=46，按丹佛体制分 A–G 七组，G 显带（胰酶-Giemsa）为常规核型分析；21 三体（Down 综合征）与 t(9;22) 费城染色体（BCR-ABL）是核型病的经典教材案例。两套天然放大体系：果蝇唾腺多线染色体经 10 轮复制达 1024 条染色丝同向平行排列，胀泡（puddle）即活跃转录位点；两栖类卵母细胞灯刷染色体的侧环是伸展的转录单元——巨大染色体让转录可直接在光镜下观察。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch8-s1': [
    {
      src: '/images/bio/drawn/cb-ch8-s1-receptor-classes.svg',
      caption:
        '细胞通讯方式与受体分类总论：五种通讯距离——内分泌（血行远距离）、旁分泌（局部扩散）、自分泌（反馈自身）、突触（特化接头）与接触依赖（膜结合配体）。受体的化学定位原则：亲水性信号分子（肽类、儿茶酚胺）受体在膜上；亲脂性分子（类固醇、甲状腺素、维甲酸）受体在胞内（核受体直接入核结合激素反应元件）。膜受体七大类：G 蛋白偶联受体（最大家族）、受体酪氨酸激酶、酪氨酸激酶相关受体、受体丝/苏氨酸激酶、离子通道型受体、整联蛋白与鸟苷酸环化酶——信号具特异性、级联放大、整合与可终止性（Sutherland cAMP 学说，1971 诺奖）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch8-s3': [
    {
      src: '/images/bio/drawn/cb-ch8-s3-ip3-dag-calcium.svg',
      caption:
        'IP₃/DAG 双信使与钙信号：Gq 偶联受体激活 PLCβ 裂解 PIP₂——水溶的 IP₃ 扩散至内质网开 IP₃ 受体钙库，脂溶的 DAG 留膜上激活 PKC（靶需先经磷脂酸丝氨酸增敏）。钙信号的组织学：胞质游离 Ca²⁺ 约 100 nM、胞外/ER 腔约 1–2 mM——近万倍梯度以振荡频率编码信息（钙峰频率而非幅度承载信号）；钙调蛋白 CaM 一分子四钙构象变化激活 CaMKII（自磷酸化记忆）、MLCK（平滑肌收缩）与 eNOS——NO 舒张血管的信号链（1998 诺奖）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch8-s5': [
    {
      src: '/images/bio/drawn/cb-ch8-s5-integration-termination.svg',
      caption:
        '信号的整合与终止：多路输入在转录水平与蛋白互作网络汇合为存活/增殖/分化/死亡四类命运决策——TGF-β/Smad（抑制增殖）、Notch（侧向抑制）、Wnt/β-catenin（干性维持）与核受体各成独立一线，节点互作完成整合。终止机制四件套：受体下调（配体诱导内吞降解）、GTP 酶内钟（Gα 自身 GTP 水解关闭）、磷酸酶网络（SHP/PTEN 逆转磷酸级联）与第二信使降解（PDE 水解 cAMP）——「开得快、关得稳」是信号系统的工程学底线。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch9-s3': [
    {
      src: '/images/bio/drawn/cb-ch9-s3-ecm-basement-membrane.svg',
      caption:
        '细胞外基质与基膜：胶原是人体最丰蛋白（约 30%）——Gly-X-Y 三股螺旋（每第三位必须 Gly），维 C 依赖的脯/赖氨酰羟化与赖氨酰氧化酶（LO）交联逐级组装为原纤维-纤维-束；缺陷病：坏血病（羟化不足）、EDS 与成骨不全。纤连蛋白的 RGD 三肽被整联蛋白识别（细胞-基质粘附的通用密码）。基膜为 40–120 nm 特化薄层——层粘连蛋白+IV 型胶原+巢蛋白/perlecan 交联成网；基质金属蛋白酶 MMP 与其抑制剂 TIMP 的平衡调控 ECM 重塑——形态发生与肿瘤侵袭的门户。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch9-s4': [
    {
      src: '/images/bio/drawn/cb-ch9-s4-adhesion-leukocyte-extravasation.svg',
      caption:
        '细胞粘附分子与白细胞渗出级联：四大粘附家族——钙粘蛋白（同型结合，组织连贯）、选择素（唾液酸化糖链识别，滚动起始）、整联蛋白（异二聚体，与 ICAM/纤连蛋白结合，牢固锚定）与 IgSF（如 ICAM-1/VCAM-1）。炎症渗出四步：毛细血管后微静脉 selectin 介导初始滚动→趋化因子激活 LFA-1 构象→LFA-1-ICAM-1 牢固粘附→PECAM-1 介导穿内皮迁移（diapedesis）。LAD（LFA-2/CD18 缺陷）反复感染与那他珠单抗（抗 VLA-4）致 PML——渗出级联正反两面的临床印证。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch10-s1': [
    {
      src: '/images/bio/drawn/cb-ch10-s1-cell-cycle-phases.svg',
      caption:
        '细胞周期时相与调控机器：人培养细胞典型 24 h——G1 约 11 h→S（DNA 复制）8 h→G2 4 h→M 1 h；周期长短差异主要在 G1（早期胚胎卵裂仅 30 min 无 G1）。驱动核心为四组 CDK-cyclin 依次成峰：cyclin D-CDK4/6（G1 早）、cyclin E-CDK2（G1/S）、cyclin A-CDK2（S）、cyclin B-CDK1（M）——周期蛋白合成-降解的振荡与 CDK 磷酸化开关互锁；pre-RC 复制许可（ORC-Cdc6-Cdt1-MCM）确保每周期基因组只复制一次。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch10-s3': [
    {
      src: '/images/bio/drawn/cb-ch10-s3-checkpoints-p53.svg',
      caption:
        '细胞周期检验点与 p53 监控网络：R 点（Pardee，1974）= Rb-E2F 正反馈承诺——cyclin D-CDK4/6 磷酸化 Rb 释放 E2F，E2F 转录 cyclin E 形成正反馈跨越不可逆点。损伤应答：DNA 损伤经 ATM/ATR→Chk1/2 磷酸化 Cdc25 使其降解/隔离——CDK 暂停；p53 为四路总调度（约 50% 人类肿瘤突变）：p21 阻滞周期、GADD45 支持修复、Bax/PUMA 启动凋亡、Mdm2 负反馈自限。纺锤体检验点 SAC 在着丝粒未全部附着时抑制 APC/C，保全染色体数目的忠实分配。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch11-s1': [
    {
      src: '/images/bio/drawn/cb-ch11-s1-differential-expression.svg',
      caption:
        '细胞分化的本质——基因差异表达：管家基因（糖酵解酶、核糖体蛋白等）在一切细胞持续表达，奢侈基因（血红蛋白、角蛋白、白蛋白等）按细胞类型选择性开启——基因组内容不变，程序输出不同（分子证据：任何已分化细胞核仍含完整基因组）。Gurdon 1962 肠上皮核移植成蛙证明分化可逆（2012 诺奖）。调控层级：组合调控（MyoD/Pax6 等转录因子组合决定命运）+表观遗传维持（DNA 甲基化、组蛋白修饰锁定记忆）——「决定于转录因子，稳定于表观遗传」。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch11-s2': [
    {
      src: '/images/bio/drawn/cb-ch11-s2-stem-cell-hierarchy.svg',
      caption:
        '干细胞的全能性层级：受精卵与早期卵裂球为全能（totipotent，可发育完整个体）；囊胚内细胞团（ICM）为多能胚胎干细胞 ESC——1981（小鼠 Evans/Kaufman 与 Martin）与 1998（人 Thomson）建系，标志分子 Oct4/Nanog/Sox2；成体干细胞为多潜能——造血干细胞 HSC（全血系谱重建）、间充质 MSC、神经 NSC、肠 ISC（Lgr5+，隐窝底部的「+5 位」模型）；单能祖细胞只产一种终末细胞。干性维持依赖干细胞巢（niche）微环境——干细胞从不独自决定命运。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch11-s3': [
    {
      src: '/images/bio/drawn/cb-ch11-s3-reprogramming-dolly-ips.svg',
      caption:
        '细胞重编程的两座里程碑：Dolly 羊（1996，Wilmut）——277 次核移植仅 1 例成功，证明成体分化核可被卵母细胞质重编程恢复全能性，但表观屏障（印记异常、端粒缩短）限制效率。iPS 细胞（2006 小鼠/2007 人，Yamanaka）——仅需 OSKM 四因子（Oct4/Sox2/Klf4/c-Myc）即可将成纤维细胞重编程为多能干细胞（与 2012 诺奖 Gurdon 共享）；后续简化：C/EBPα 两因子完成脂肪-巨噬转换、GMT 三因子神经直接转分化（bypass 多能态）——从「克隆」到「重编程」再到「转分化」的技术进化。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch11-s4': [
    {
      src: '/images/bio/drawn/cb-ch11-s4-hayflick-senescence.svg',
      caption:
        '细胞衰老的 Hayflick 界限与机制：Hayflick 与 Moorhead（1961）发现人成纤维细胞体外培养约 50 次传代后停滞——推翻「细胞不死」教条。机制核心：端粒每代缩短 50–200 bp，临界长度触发 DNA 损伤反应（DDR）进入复制性衰老；hTERT 异位表达可越过界限（1998，Bodnar）——永生化与恶性转化的台阶之一。氧化应激（ROS）与癌基因（OIS，如 RAS 过表达）可提前诱导衰老（SIPS）；衰老细胞经 SASP（衰老相关分泌表型）重塑微环境——慢性炎症与肿瘤促进的双刃剑。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch12-s2': [
    {
      src: '/images/bio/drawn/cb-ch12-s2-apoptosis-pathways-bcl2.svg',
      caption:
        '细胞凋亡的两条信号途径与 Bcl-2 家族：外在途径——FasL 结合同源三聚体受体→FADD 接头招募 pro-caspase-8 组装 DISC→caspase-8 活化（同时剪切 Bid 增援内在途径）→执行 caspase-3/7。内在途径——BH3-only 蛋白（Bid/Bim/Puma）感应压力激活 Bax/Bak 在线粒体外膜成孔→细胞色素 c 释放入——家族两方阵：抗凋亡（Bcl-2、Bcl-xL 封锁 Bax/Bak）vs 促凋亡（BH3-only 感应器+执行者）；t(14;18) 易位过表达 Bcl-2 见于滤泡淋巴瘤；维奈托克（Venetoclax，Bcl-2 拮抗剂）为靶向凋亡的临床转化。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch12-s3': [
    {
      src: '/images/bio/drawn/cb-ch12-s3-autophagy-flux.svg',
      caption:
        '细胞自噬的流程与调控：三类型——巨自噬（双层膜包裹形成自噬体）、微自噬（溶酶体膜直接内陷）与分子伴侣介导的 CMA（KFERQ 信号肽经 Hsc70 递送 LAMP2A 通道）。巨自噬核心流程（自噬流）：饥饿/AMPK 激活 ULK1 复合体（mTORC1 高营养时抑制）→Beclin1-PI3K 起始吞噬泡成核→LC3 脂化（LC3-Ⅱ）定位延伸膜并与 p62/SQSTM1 选择性接头协作装货→自噬体与溶酶体融合→降解回收氨基酸与脂肪酸。线粒体自噬（mitophagy，Parkin-PINK1 通路清除损伤线粒体）与异体自噬（xenophagy，清胞内病原）是其生理高峰——Ohsumi 获 2016 年诺奖。',
      credit: DRAWN_CREDIT,
    },
  ],
  'cell-biology-ch12-s4': [
    {
      src: '/images/bio/drawn/cb-ch12-s4-necroptosis-pyroptosis.svg',
      caption:
        '程序性坏死家族：坏死性凋亡（necroptosis）——当 caspase-8 被抑制时，RIPK1-RIPK3 磷酸化串联激活 MLKL 寡聚成膜孔，细胞胀裂释放 DAMPs 引发强炎症（「濒死仍报警」）；焦亡（pyroptosis）——炎症小体 NLRP3 感知危险信号→caspase-1 切割 GSDMD，N 端成孔片段打孔并成熟 IL-1β/IL-18 释放——gasdermin 家族是焦亡的执行基因。铁死亡（ferroptosis）为另一支——GPX4 失活致脂质过氧化蓄积、膜破裂。三种「炎性与膜破裂型」死亡与凋亡的静默形成光谱对照——死亡方式的多样性即免疫后果的多样性。',
      credit: DRAWN_CREDIT,
    },
  ],
}
