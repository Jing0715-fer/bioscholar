// ============================================================
// 病毒学教材插图（Wikimedia Commons 真实图，全部经 VLM 科学审校）
// 搜集于 Task 37-ILL：源文件/作者/许可证见
// agent-ctx/tmp37/meta.json 与 manifest 记录
// 图注为学术中文描述，与对应小节正文知识点呼应
// ============================================================
import type { Illustration } from '@/lib/types'

const commonsCredit = (author: string, license: string) =>
  `图片来源：Wikimedia Commons（${author}，${license}）`

const webCredit = (author: string) =>
  `图片来源：${author}（网络教材图源，经 VLM 科学审校）`

export const viroIllustrations: Record<string, Illustration[]> = {
  // ---- 第 1 章 病毒学绪论 ----
  'virology-ch1-s4': [
    {
      src: '/images/bio/commons/plaque-assay.jpg',
      caption:
        '病毒蚀斑测定的实物照片：单层敏感细胞经病毒稀释液接种并以半固体覆盖层限制扩散后，每一颗具感染力的毒粒在一处定居增殖、裂解周围细胞，形成一个肉眼可见的透明「空斑」。计数蚀斑数并乘以稀释倍数即得原始悬液的蚀斑形成单位（PFU/mL）——这一由杜贝科 1952 年确立的定量技术把「感染性」从模糊概念变成可计数的离散事件，是病毒滴定、克隆纯化与突变体筛选的基石。',
      credit: commonsCredit('Annapianez', 'CC BY 4.0'),
    },
  ],

  // ---- 第 2 章 毒粒的结构与组成 ----
  'virology-ch2-s1': [
    {
      src: '/images/bio/commons/tmv-structure-zh.png',
      caption:
        '烟草花叶病毒（TMV）的结构剖面（中文标注）：衣壳由 2130 个相同亚基以每圈约 16⅓ 个的排布绕成直径约 18 nm 的螺旋杆，螺距 2.3 nm；每个亚基结合 3 个核苷酸，单链 RNA 基因组（约 6.4 kb）即藏于亚基内壁的螺旋沟中。螺旋对称是「亚基等价结合」的另一种解——不必像二十面体那样闭合曲面，只需沿轴重复延伸，杆长便由基因组长度决定，装配亦从环化基因组两端双向推进。',
      credit: commonsCredit('TMV 结构教学图中文版', 'CC BY-SA 3.0'),
    },
  ],
  'virology-ch2-s3': [
    {
      src: '/images/bio/commons/influenza-virus-structure.png',
      caption:
        '流感病毒的结构模型：脂质包膜（出芽自宿主细胞膜）表面镶嵌三聚体血凝素（HA）与四聚体神经氨酸酶（NA）两类刺突，膜下为 M1 基质蛋白衬层；内部为 8 节段负链 RNA 与核蛋白（NP）组成的核糖核蛋白复合体（RNP），各带一份 RNA 依赖的 RNA 聚合酶。HA 介导吸附与膜融合（唾液酸受体），NA 水解受体帮助子代病毒释放（奥司他韦的靶点）；节段化基因组是甲型流感抗原转变大流行的分子根源。',
      credit: commonsCredit('BruceBlaus', 'CC BY-SA 4.0'),
    },
    {
      src: '/images/bio/commons/hiv-virion-structure.png',
      caption:
        '人类免疫缺陷病毒（HIV-1）毒粒的结构剖面：最外为来自宿主细胞膜的脂质包膜，镶嵌由 gp120 与 gp41 组成的三聚体刺突（Env 前体切割产物）；膜下衬有基质蛋白 p17；内部为锥形衣壳（p24 组成）包裹两条相同正链 RNA 基因组（经氢键假性双链相连），每条基因组各结合一份逆转录酶、整合酶与少量 tRNALys 引物。毒粒自带的酶机器正是逆转录病毒在巴尔的摩第六类策略下启动复制的全部家当。',
      credit: commonsCredit('Thomas Splettstoesser', 'CC BY-SA 4.0'),
    },
  ],
  'virology-ch2-s4': [
    {
      src: '/images/bio/commons/coronavirus-virion-structure.png',
      caption:
        '冠状病毒（SARS-CoV-2）毒粒结构：球形脂质包膜上镶嵌三聚体刺突糖蛋白（S，呈「日冕」状突起，与血管紧张素转化酶 2 结合介导侵入）、少量包膜蛋白（E）与大量膜蛋白（M）；包膜内为由核衣壳蛋白（N）缠绕的正链 RNA 基因组（约 30 kb，冠状病毒科基因组规模之冠）组成的螺旋对称核衣壳。S 蛋白受体结合域（RBD）的构象开合与糖基化屏蔽，是冠状病毒跨种传播与免疫逃逸研究的前沿焦点。',
      credit: commonsCredit('SPQR10', 'CC BY-SA 4.0'),
    },
    {
      src: '/images/bio/commons/ebola-virion.jpg',
      caption:
        '埃博拉病毒的伪彩透射电镜照片（CDC Cynthia Goldsmith 制作）：丝状病毒科毒粒呈典型长丝状（直径约 80 nm、长度可达微米级），常兼见弯曲、U 形与环形等构型——丝状病毒的多形性是「毒粒整体构型」一节的最佳实例。表面 GP 糖蛋白刺突介导受体结合与融合；基因组为非节段负链 RNA（约 19 kb），依赖毒粒携带的 L 聚合酶启动转录。2014–2016 年西非疫情病死率约四成，使其成为最高生物安全等级（BSL-4）操作的代表性病原。',
      credit: commonsCredit('CDC/Cynthia Goldsmith', 'Public domain'),
    },
    {
      src: '/images/bio/commons/vsv-em.jpg',
      caption:
        '水泡性口炎病毒（VSV）的负染电镜照片：弹状病毒科毒粒呈典型的子弹状外形（约 75 nm×180 nm），一端平截、一端圆钝，表面密布 G 糖蛋白刺突，内部为负链 RNA 与 N 蛋白构成的螺旋核衣壳。VSV 是负链 RNA 病毒研究的经典模式毒粒——其出芽释放只需 G 蛋白一者驱动，基因组仅约 11 kb、操作简便，常作假病毒载体与疫苗平台骨架，与同为弹状科的狂犬病毒互为形态参照。',
      credit: commonsCredit('VSV 电镜图', 'Public domain'),
    },
  ],

  // ---- 第 3 章 病毒基因组 ----
  'virology-ch3-s1': [
    {
      src: '/images/bio/commons/baltimore-classification.png',
      caption:
        '巴尔的摩分类体系总览：以基因组核酸类型与获得 mRNA 的路线为轴，将全部病毒归为七类——I 双链 DNA、II 单链 DNA、III 双链 RNA、IV 正链 RNA、V 负链 RNA、VI 经逆转录复制的正链 RNA 二聚体（逆转录病毒）与 VII 经 RNA 中介复制的双链 DNA（嗜肝 DNA 病毒）。图中各类别均指向中心产物 mRNA，凸显该体系的本意：不论基因组形式如何千差万别，一切病毒都必须解决「如何产生可翻译的 mRNA」这一中心问题。',
      credit: commonsCredit('巴尔的摩分类教学图重绘', 'Public domain'),
    },
  ],

  // ---- 第 4 章 吸附、侵入与脱壳 ----
  'virology-ch4-s1': [
    {
      src: '/images/bio/commons/virus-replication-zh.png',
      caption:
        '病毒复制周期的总览（中文标注版）：吸附于易感细胞表面受体、经融合或内吞侵入、脱壳释放基因组、病毒基因组的转录与复制、病毒 mRNA 的翻译、子代毒粒的装配、经出芽或裂解释放——完成一轮复制周期。不同病毒的每一阶段细节各异（例如 DNA 病毒在核内复制、正链 RNA 病毒在胞质即译即用），但这一通用框架是描述任何病毒生命周期的共同语言；一轮周期产出的子代毒粒再感染邻近细胞，形成感染灶的指数扩张。',
      credit: commonsCredit('YK Times 原作中文版', 'CC BY-SA 3.0'),
    },
    {
      src: '/images/bio/commons/hiv-replication-cycle.png',
      caption:
        'HIV 的复制周期逐步图解：gp120 识 CD4 并趋化受体（CCR5/CXCR4）触发 gp41 融合；RNA 基因组在逆转录酶作用下合成双链 DNA（先负链后正链、经链转移跳转）；前病毒经整合酶入核整合进宿主染色体；细胞 RNA 聚合酶 II 转录病毒 mRNA 与基因组 RNA，经剪接与 Rev 介导出核；结构蛋白在膜内侧装配出芽，蛋白酶最后切割 Gag-Pol 多聚蛋白成熟为感染性毒粒。每一环节都已发展出对应的抗病毒药物靶点。',
      credit: commonsCredit('Jmarchn', 'CC BY-SA 3.0'),
    },
  ],

  // ---- 第 5 章 病毒基因组的复制与转录 ----
  'virology-ch5-s3': [
    {
      src: '/images/bio/commons/coronavirus-replication-cycle.jpg',
      caption:
        '冠状病毒的复制周期全景：S 蛋白结合受体后经膜融合或内吞侵入并脱壳，正链基因组先翻译出复制酶聚蛋白，经蛋白酶切割组装为复制-转录复合体；随后以全长远负链为模板复制新基因组，并经不连续转录生成一族嵌套亚基因组 mRNA（TRS 信号调控各结构蛋白的表达量梯度），S、M、N 等在内质网-高尔基体区间装配出芽释放。复制酶自带的 ExoN 校读使冠状病毒得以维持 RNA 病毒中最大的基因组（约 30 kb）。',
      credit: commonsCredit('冠状病毒复制周期教学图', 'CC BY 4.0'),
    },
  ],

  // ---- 第 7 章 毒粒的装配、成熟与释放 ----
  'virology-ch7-s3': [
    {
      src: '/images/bio/commons/hiv-budding-color.jpg',
      caption:
        'HIV 出芽释放的彩色透射电镜照片（CDC）：可见电子致密的新生毒粒正从宿主细胞表面（以芽生方式）隆起——Gag 多聚蛋白在胞膜内侧聚合驱动的出芽过程，借助宿主 ESCRT 机器在膜侧完成掐断。此刻毒粒尚未成熟：出芽后 HIV 蛋白酶将自切割激活，把 Gag 切裂为基质（MA）、衣壳（CA）与核衣壳（NC）等组分，衣壳重新组装为锥形核心——蛋白酶抑制剂正是阻断这最后一步，使毒粒「发育不全」而丧失感染性。',
      credit: commonsCredit('CDC/C. Goldsmith 与 P. Feorino', 'Public domain'),
    },
  ],

  // ---- 第 8 章 病毒与宿主细胞的相互作用 ----
  'virology-ch8-s2': [
    {
      src: '/images/bio/web/lnp-mrna-innate-sensing.jpg',
      caption:
        '宿主对胞内 RNA 的固有免疫识别网络：内体中的 TLR3/7/8 与胞质 RIG-I/MDA5 分别经 MyD88/TRIF 与 MAVS 接头启动 IRF3/7 与 NF-κB，诱导 I 型干扰素与促炎因子；过强识别则走向炎症小体与细胞焦亡。这一网络正是 mRNA 疫苗设计必须权衡的「双刃剑」：假尿苷修饰使 mRNA 逃逸传感，而适度的佐剂效应又可被利用——脂质纳米颗粒（LNP）本身即有佐剂活性。',
      credit: webCredit('BOC Sciences 教育图库'),
    },
  ],

  // ---- 第 9 章 噬菌体：细菌病毒的分子生物学 ----
  'virology-ch9-s1': [
    {
      src: '/images/bio/commons/bacteriophage-t4-structure.png',
      caption:
        'T4 噬菌体的外部形态结构：拉长的二十面体头部内装 dsDNA 基因组（约 169 kb）；其下依次为颈与颈须、可收缩的尾鞘（24 环螺旋对称）包裹尾管、六角形基板与六根尾丝及短尾钉。吸附时尾丝识别大肠杆菌表面受体并使基板构象变化，尾鞘收缩驱动尾管穿刺细胞壁——这一「分子注射器」机制是复合对称病毒形态与功能对应的经典范例。',
      credit: commonsCredit('Adenosine', 'CC BY-SA 3.0'),
    },
  ],
  'virology-ch9-s3': [
    {
      src: '/images/bio/commons/phage-lytic-lysogenic-cycles.png',
      caption:
        '温和噬菌体感染后的两条去路：左侧裂解循环——噬菌体 DNA 环化复制、表达结构蛋白、装配并裂解释放子代；右侧溶原循环——噬菌体 DNA 经位点特异性重组整合为前噬菌体，随宿主染色体同步复制并赋予宿主免疫性。环境胁迫（如 UV）可诱导前噬菌体切离而转入裂解——λ 噬菌体 CI/Cro 开关正是这一命运抉择的分子基础。',
      credit: commonsCredit('Suly12 与 Adenosine 原作、Pbroks13 重绘', 'CC BY-SA 3.0'),
    },
  ],

  // ---- 第 10 章 病毒的遗传、变异与进化 ----
  'virology-ch10-s2': [
    {
      src: '/images/bio/commons/antigenic-shift.png',
      caption:
        '流感病毒抗原转变（基因重排）机制：两种不同亚型病毒（如人流感 H3N2 与禽流感 H5Nx）共感染同一宿主细胞时，各自 8 个基因节段在装配处被随机混装进同一子代毒粒——若子代恰好集人流感的 HA/NA 与禽源的内部基因于一身，即诞生人群普遍缺乏免疫、且兼具禽源高毒力潜力的新亚型。1957 年 H2N2 与 1968 年 H3N2 两次大流行毒株均由节段重排产生；这一机制是流感大流行监测与「禽-猪-人」种间屏障研究的核心。',
      credit: commonsCredit('美国国家过敏与传染病研究所（NIAID）', 'Public domain'),
    },
  ],

  // ---- 第 11 章 病毒的传播与致病机理 ----
  'virology-ch11-s3': [
    {
      src: '/images/bio/commons/poliovirus-em.jpg',
      caption:
        '脊髓灰质炎病毒的电镜照片（CDC）：小 RNA 病毒科毒粒直径约 27–30 nm，是已知最小、结构最简单的病毒之一——裸露的正二十面体衣壳（T=1，60 个原体）无包膜，基因组仅约 7.5 kb 的正链 RNA，进入细胞即可直接充当 mRNA。病毒经粪-口途径传播，多数感染呈隐性或轻症；约百分之一感染者病毒侵入中枢致弛缓性麻痹。脊髓灰质炎是继天花之后有望被疫苗消灭的第二个病原，全球已多年未见 2 型与 3 型野毒株病例。',
      credit: commonsCredit('CDC/Fred Murphy', 'Public domain'),
    },
    {
      src: '/images/bio/web/viral-encephalitis-histology.jpg',
      caption:
        '病毒性脑炎脑实质的组织病理切片（H&E 染色）：小血管周围大量淋巴细胞呈袖套状浸润——「血管套」是病毒侵入中枢神经系统后炎症应答的共同病理签名，狂犬病等嗜神经病毒感染均可见。狂犬病最具确诊意义的 Negri 小体为神经元胞质内嗜酸性包涵体，检出率有限、阴性不能排除诊断——病理、病毒学与暴露史须互为佐证。',
      credit: webCredit('美国武装部队病理联合中心（JPC）教学切片'),
    },
    {
      src: '/images/bio/commons/measles-virus-em.jpg',
      caption:
        '麻疹病毒的透射电镜照片（CDC Cynthia Goldsmith 制作）：副粘病毒科毒粒呈多形性的球形至丝状颗粒（直径约 100–250 nm），表面 H 与 F 糖蛋白刺突使感染细胞相互融合形成合胞体——「多核巨细胞」正是麻疹病理的特征。麻疹是人类传染性最强的病毒之一（R0 约 12–18，经空气传播），病毒还可罕见地于中枢神经系统持续多年引发亚急性硬化性全脑炎（SSPE）；感染还会造成数周至数年的「免疫失忆」，削弱对既往病原的记忆应答。',
      credit: '图片来源：美国 CDC/Cynthia S. Goldsmith 伪彩电镜照片（公有领域）',
    },
  ],

  // ---- 第 12 章 病毒病的诊断、预防与治疗 ----
  'virology-ch12-s2': [
    {
      src: '/images/bio/web/mrna-vaccine-mechanism.jpg',
      caption:
        'mRNA 疫苗的作用机制全景：经核苷修饰的 mRNA 由脂质纳米颗粒（LNP）护送进入树突状细胞等抗原提呈细胞，逃逸固有免疫传感后在核糖体翻译出刺突蛋白抗原，经蛋白酶体加工由 MHC I 提呈给 CD8+ T 细胞、经外源途径由 MHC II 提呈给 CD4+ T 细胞，可溶性抗原同时激活 B 细胞产生中和抗体——体液与细胞免疫两路并进。LNP 电离脂质在酸性内体带正电与带负电 mRNA 复合，是递送效率的化学核心。',
      credit: webCredit('PMC/NIH 开放获取文献插图'),
    },
    {
      src: '/images/bio/web/lnp-mrna-immune-process.jpg',
      caption:
        '脂质纳米颗粒-mRNA 疫苗的免疫过程流程：肌肉注射后 LNP 进入细胞内释放 mRNA，翻译产生的抗原经提呈激活 T 细胞与 B 细胞应答，中和抗体阻断病毒侵入。图示串联了注射-表达-提呈-抗体中和的完整链条——与卡里科与韦斯曼的假尿苷修饰（2023 年诺贝尔生理学或医学奖）共同构成第三代疫苗平台的两大支柱：前者解决「如何递送」，后者解决「如何不被当作损伤信号识别」。',
      credit: webCredit('Biotechnologia 期刊开放插图'),
    },
  ],
}
