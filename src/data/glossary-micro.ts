// ============================================================
// 微生物学术语词典
// 30 条（g-125 ~ g-154），subjectId 均为 microbiology
// 类别分布：结构 6 / 营养 2 / 代谢 4 / 遗传 5 / 控制 4 / 生态 4 / 免疫 3 / 技术 2
// 依据：周德庆《微生物学教程》、沈萍《微生物学》、Madigan《Brock Biology of Microorganisms》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const microGlossary: GlossaryTerm[] = [
  // ---------- 形态结构（6 条） ----------
  {
    id: 'g-125',
    term: '肽聚糖',
    english: 'peptidoglycan',
    subjectId: 'microbiology',
    category: '结构',
    definition:
      '原核细胞壁的骨架大分子，由 N-乙酰葡糖胺与 N-乙酰胞壁酸经 β-1,4 糖苷键交替连接成多糖链，再经四肽尾（L-Ala–D-Glu–m-DAP/Lys–D-Ala）交联成网。革兰氏阳性菌壁厚 20–80 nm，阴性菌仅 2–7 nm 单层；溶菌酶切断 β-1,4 键引起细胞裂解，青霉素抑制转肽酶阻断交联。',
  },
  {
    id: 'g-126',
    term: '芽孢',
    english: 'endospore',
    subjectId: 'microbiology',
    category: '结构',
    definition:
      '芽孢杆菌属、梭菌属等细菌在营养饥饿时于胞内形成的休眠抗性体。核心含水量极低并富含吡啶二羧酸钙，外包皮质与芽孢壳等多层结构，耐热、耐辐射、耐干燥，枯草芽孢杆菌芽孢可耐沸水数十分钟；一个营养细胞只形成一个芽孢，萌发后仍为一个营养细胞，属休眠体而非繁殖体。',
  },
  {
    id: 'g-127',
    term: '鞭毛',
    english: 'flagellum',
    subjectId: 'microbiology',
    category: '结构',
    definition:
      '细菌的运动细胞器，由嵌于细胞壁与细胞膜中的基体（旋转马达）、钩形鞘与丝状体（鞭毛蛋白亚基聚合，直径约 20 nm）构成，以质子动力势驱动旋转，转速可达每秒数百至上千转。着生方式分周生、端生与丛生，鞭毛蛋白即 H 抗原，半固体培养基穿刺观察动力是常用鉴定手段。',
  },
  {
    id: 'g-128',
    term: '荚膜',
    english: 'capsule',
    subjectId: 'microbiology',
    category: '结构',
    definition:
      '某些细菌分泌于细胞壁外、边界清晰、厚度一般大于 0.2 μm 的黏性结构，多为多糖（肺炎链球菌）或 D-谷氨酸多肽（炭疽杆菌）。普通染色不易着色，需负染色法显示；具有抗吞噬、抗干燥与黏附功能，是重要毒力因子，具荚膜菌落呈光滑（S）型，失去荚膜后毒力随之下降。',
  },
  {
    id: 'g-129',
    term: '菌丝体',
    english: 'mycelium',
    subjectId: 'microbiology',
    category: '结构',
    definition:
      '霉菌的营养体形式：孢子萌发产生菌丝，经顶端生长并反复分支交织而成。分深入基质吸收养料的营养菌丝、伸向空间的气生菌丝与特化产孢的繁殖菌丝；菌丝直径多为 2–10 μm（放线菌仅 0.5–1 μm），按有无隔膜分为有隔菌丝与无隔多核菌丝，是真菌分类与鉴定的重要依据。',
  },
  {
    id: 'g-130',
    term: '刺突蛋白',
    english: 'spike protein',
    subjectId: 'microbiology',
    category: '结构',
    definition:
      '包膜病毒表面由脂质双层伸出的糖蛋白突起，如流感病毒的血凝素与神经氨酸酶、新型冠状病毒的 S 蛋白三聚体。兼具受体结合与膜融合双重功能，介导病毒吸附并侵入宿主细胞，同时是最主要的保护性抗原与疫苗设计靶点；血凝素能凝集红细胞，神经氨酸酶则帮助子代病毒自细胞表面释放。',
  },
  // ---------- 代谢与营养（6 条） ----------
  {
    id: 'g-131',
    term: '化能自养',
    english: 'chemoautotrophy',
    subjectId: 'microbiology',
    category: '营养',
    definition:
      '以氧化无机物（NH₃、NO₂⁻、H₂S、Fe²⁺、H₂ 等）获得能量、以 CO₂ 为主要碳源合成细胞物质的营养类型，仅见于细菌与古菌，如硝化细菌、硫杆菌与氢氧化细菌。固碳多经卡尔文循环，产能效率低于化能异养；深海热泉硫化物氧化菌构成不依赖阳光的生态系统初级生产力。',
  },
  {
    id: 'g-132',
    term: '无氧呼吸',
    english: 'anaerobic respiration',
    subjectId: 'microbiology',
    category: '代谢',
    definition:
      '以分子氧以外的外源分子（NO₃⁻、SO₄²⁻、CO₂、延胡索酸等）为末端电子受体、仍经呼吸链传递电子并偶联合成 ATP 的产能方式。反硝化菌、硫酸盐还原菌与产甲烷古菌分别把受体还原为 N₂、H₂S 与 CH₄；产能效率介于发酵与有氧呼吸之间，是缺氧环境中有机物矿化的主要途径。',
  },
  {
    id: 'g-133',
    term: '混合酸发酵',
    english: 'mixed acid fermentation',
    subjectId: 'microbiology',
    category: '代谢',
    definition:
      '大肠杆菌等肠杆菌在缺氧条件下经 EMP 途径把丙酮酸转变为乳酸、乙酸、甲酸、琥珀酸与乙醇等多种产物并可产气（H₂ 与 CO₂）的发酵类型。产物比例稳定、具有鉴定价值：甲基红试验阳性而 V-P 试验阴性，据此与产气杆菌的丁二醇发酵区别，是 IMViC 鉴定体系的生化基础。',
  },
  {
    id: 'g-134',
    term: '次级代谢',
    english: 'secondary metabolism',
    subjectId: 'microbiology',
    category: '代谢',
    definition:
      '微生物在对数期之后（稳定期前后）合成非生长必需产物（抗生素、色素、毒素、生物碱与激素类物质等）的代谢过程。产物具种甚至菌株特异性、结构复杂，与前体共用初级代谢途径但受独立的调控网络支配；通过营养限制、补料分批培养与解除反馈调节可显著提高产量，是发酵工业与药物开发的核心。',
  },
  {
    id: 'g-135',
    term: '生长因子',
    english: 'growth factor',
    subjectId: 'microbiology',
    category: '营养',
    definition:
      '微生物自身不能合成或合成量不足、须由外源微量供给的有机营养物，包括维生素（辅酶或辅基前体，如硫胺素、生物素、叶酸）、氨基酸与嘌呤嘧啶碱基三类。乳酸菌等营养要求苛刻的菌必须外源补给，培养基常用酵母膏、蛋白胨、麦芽汁等天然材料提供。',
  },
  {
    id: 'g-136',
    term: '基团转位',
    english: 'group translocation',
    subjectId: 'microbiology',
    category: '代谢',
    definition:
      '底物在跨膜过程中被特异性酶系化学修饰（磷酸化）后，以衍生物形式进入胞内的运输方式。大肠杆菌等的磷酸转移酶系统（PTS）以 PEP 为磷酰基供体，经酶Ⅰ、热稳定蛋白 HPr 与膜结合酶Ⅱ 把葡萄糖磷酸化为 6-磷酸葡萄糖入胞；由于化学修饰改变底物的化学势，实质上可实现"逆浓度"累积。',
  },
  // ---------- 遗传（5 条） ----------
  {
    id: 'g-137',
    term: '转座子',
    english: 'transposon',
    abbreviation: 'Tn',
    subjectId: 'microbiology',
    category: '遗传',
    definition:
      '能在基因组内或基因组间自主移动的 DNA 序列单元。细菌复合转座子两端为反向重复序列并编码转座酶，中间载荷常为抗生素抗性、重金属抗性或毒力基因（如载氨苄青霉素抗性的 Tn3）；经复制型或保守型机制转座，是水平基因转移与多重耐药菌播散的重要媒介。',
  },
  {
    id: 'g-138',
    term: '感受态',
    english: 'competence',
    subjectId: 'microbiology',
    category: '遗传',
    definition:
      '细胞能够摄取外源裸 DNA 并实现遗传转化的特殊生理状态。枯草芽孢杆菌、肺炎链球菌等在特定生长时期分泌感受态因子与 DNA 结合蛋白，形成天然感受态；大肠杆菌无天然感受态，须以冰冷 CaCl₂ 处理或电穿孔诱导人工感受态，后者是基因工程转化操作的常规基础技术。',
  },
  {
    id: 'g-139',
    term: '溶原性',
    english: 'lysogeny',
    subjectId: 'microbiology',
    category: '遗传',
    definition:
      '温和噬菌体感染后将基因组整合于宿主染色体（或以质粒形式存在）成为前噬菌体、随宿主复制垂直传代而不立即裂解的共存状态。溶原菌对同源噬菌体的再感染具免疫性（阻遏蛋白介导），并常因前噬菌体基因获得新性状（溶原转换，如白喉毒素的表达）；紫外线等可诱导其进入裂解周期。',
  },
  {
    id: 'g-140',
    term: '原生质体融合',
    english: 'protoplast fusion',
    subjectId: 'microbiology',
    category: '遗传',
    definition:
      '以溶菌酶（细菌）或蜗牛酶（酵母）脱去细胞壁，在高渗介质中维持原生质体，再以聚乙二醇与钙离子诱导两亲本原生质体融合并再生出完整细胞的传统育种技术。可实现亲本全套遗传物质的重组，突破转化、接合等途径的种属壁垒，在抗生素高产菌株选育中成效显著。',
  },
  {
    id: 'g-141',
    term: 'SOS 反应',
    english: 'SOS response',
    subjectId: 'microbiology',
    category: '遗传',
    definition:
      '细菌 DNA 遭受严重损伤（紫外线、化学诱变剂等）时被全局诱发的应急修复网络：RecA 蛋白被单链 DNA 激活后切割 LexA 阻遏物，解除对数十个修复相关基因的抑制，启动含易错聚合酶（如聚合酶 V）的跨损伤合成修复。因容错复制带来高突变率，既提高极端条件下的存活，也加速耐药与毒力演化。',
  },
  // ---------- 生长控制（4 条） ----------
  {
    id: 'g-142',
    term: '高压蒸汽灭菌',
    english: 'autoclaving',
    subjectId: 'microbiology',
    category: '控制',
    definition:
      '湿热灭菌的标准方法：将物品置于密闭灭菌器内，以 121 ℃（约 0.1 MPa 饱和蒸汽压）维持 15–30 分钟，可杀灭包括细菌芽孢在内的一切微生物，适用于培养基、生理盐水、手术器械与医疗废弃物等。湿热使蛋白迅速凝固变性、蒸汽冷凝释放潜热且穿透力强，效率远高于同温度干热。',
  },
  {
    id: 'g-143',
    term: '巴氏消毒',
    english: 'pasteurization',
    subjectId: 'microbiology',
    category: '控制',
    definition:
      '以低于沸点的热处理杀灭食品中病原菌繁殖体、兼顾产品品质的控制工艺。经典条件为 63–66 ℃ 维持 30 分钟（低温长时间）或 72 ℃、15 秒（高温短时间），广泛用于鲜乳、果汁与啤酒；因不能杀灭芽孢，制品须冷链保存并在短期内消费；135 ℃ 以上数秒的超高温处理结合无菌灌装方可实现商业无菌。',
  },
  {
    id: 'g-144',
    term: 'D 值',
    english: 'decimal reduction time',
    subjectId: 'microbiology',
    category: '控制',
    definition:
      '一定温度下使微生物（或芽孢）活数下降 90%，即一个对数周期所需的热处理时间。D 值随温度升高呈指数缩短，使其缩短 10 倍所需升高的温度数称为 z 值；121 ℃ 下的 D 值记作 D₁₂₁，肉毒梭菌芽孢约 0.2 分钟，低酸罐头据此按 12D 概念（F₀ 约 2.5 分钟）设计杀菌工艺。',
  },
  {
    id: 'g-145',
    term: '水活度',
    english: 'water activity',
    abbreviation: 'aw',
    subjectId: 'microbiology',
    category: '控制',
    definition:
      '衡量食品或环境中微生物可利用水分的指标，等于溶液水蒸气压与同温纯水蒸气压之比（aw = p/p₀），纯水为 1.0、干物质趋于 0。多数细菌要求 aw 高于 0.90、多数酵母与霉菌可耐受 0.60–0.80，金黄色葡萄球菌低至约 0.86 仍可生长产毒；干燥、加盐与加糖防腐正是通过降低水活度抑制微生物。',
  },
  // ---------- 生态（4 条） ----------
  {
    id: 'g-146',
    term: '拮抗',
    english: 'antagonism',
    subjectId: 'microbiology',
    category: '生态',
    definition:
      '微生物种间八种典型相互作用之一：一方通过合成并分泌抗生素、细菌素、有机酸、溶菌酶等抑制物质，或争夺营养与生存空间，抑制或杀灭另一方。青霉抑制葡萄球菌（弗莱明发现青霉素的契机）、乳酸菌产酸抑制腐败菌均属典型拮抗，是生物防治、天然食品保鲜与抗感染药物开发的思想来源。',
  },
  {
    id: 'g-147',
    term: '群体感应',
    english: 'quorum sensing',
    abbreviation: 'QS',
    subjectId: 'microbiology',
    category: '生态',
    definition:
      '细菌依靠自诱导物信号分子监测自身群体密度、达到阈值后协同开启或关闭靶基因的通讯机制。革兰氏阴性菌以酰基高丝氨酸内酯（AHL）类分子为代表，费氏弧菌的发光即由密度依赖的 LuxI/LuxR 系统调控；QS 统一协调生物膜形成、毒力因子表达与抗生素耐受等群体行为，是抗毒力新药的设计靶点。',
  },
  {
    id: 'g-148',
    term: '生物膜',
    english: 'biofilm',
    subjectId: 'microbiology',
    category: '生态',
    definition:
      '微生物附着于载体或组织表面、包埋于自身分泌的胞外多糖等基质中形成的膜状聚集体，常由多菌种构成并分工协作。与游离（浮游）态相比，膜内细胞因渗透屏障、代谢缓滞与表型耐药等机制对消毒剂和抗生素的耐受性可提高数十至上千倍；牙菌斑、导管相关感染与工业设备腐蚀均与之有关，而水体自净与活性污泥絮凝则受益于它。',
  },
  {
    id: 'g-149',
    term: '生物固氮',
    english: 'biological nitrogen fixation',
    subjectId: 'microbiology',
    category: '生态',
    definition:
      '固氮微生物经固氮酶（MoFe 蛋白–Fe 蛋白复合体）把大气中 N₂ 还原为 NH₃ 的过程：N₂+8H⁺+8e⁻+16ATP→2NH₃+H₂，仅存在于原核生物。根瘤菌与豆科植物共生、蓝细菌与自生固氮菌每年贡献约 2 亿吨可利用氮素，是氮循环的入口环节；固氮酶遇 O₂ 不可逆失活，故有呼吸保护、异形胞分隔等适应策略。',
  },
  // ---------- 感染免疫（3 条） ----------
  {
    id: 'g-150',
    term: '外毒素',
    english: 'exotoxin',
    subjectId: 'microbiology',
    category: '免疫',
    definition:
      '病原菌（多为革兰氏阳性菌）在生长繁殖过程中分泌到胞外的毒性蛋白质，如肉毒毒素、白喉毒素与破伤风痉挛毒素，毒性强且具高度组织选择性，多为 A（活性）–B（结合）亚基结构。抗原性强，经 0.3%–0.4% 甲醛适度处理后脱毒但保留免疫原性，制成类毒素用于白喉、破伤风的主动免疫。',
  },
  {
    id: 'g-151',
    term: '内毒素',
    english: 'endotoxin',
    abbreviation: 'LPS',
    subjectId: 'microbiology',
    category: '免疫',
    definition:
      '革兰氏阴性菌外膜脂多糖的类脂 A 组分，菌体死亡裂解后释放而发挥毒性。极耐热（100 ℃ 不破坏，250 ℃ 干热约 30 分钟方失活），引起发热、白细胞先降后升、Shwartzman 反应与弥散性血管内凝血等，作用无组织特异性，不能用甲醛脱毒为类毒素；鲎试剂可对其进行纳克级灵敏检测。',
  },
  {
    id: 'g-152',
    term: '正常菌群',
    english: 'normal microbiota',
    subjectId: 'microbiology',
    category: '免疫',
    definition:
      '正常情况下定居于人体皮肤与黏膜表面、与宿主共处且无害乃至有益的微生物群，成人总量约 3.8×10¹³ 个细胞、集中于肠道。生理功能包括生物拮抗（定植抗力）、合成维生素 K 与 B 族维生素、降解膳食纤维产短链脂肪酸以及训练免疫系统发育；菌群失调或定位转移可致二重感染与机会性感染。',
  },
  // ---------- 技术分类（2 条） ----------
  {
    id: 'g-153',
    term: '16S rRNA',
    english: '16S ribosomal RNA',
    subjectId: 'microbiology',
    category: '技术',
    definition:
      '原核核糖体 30S 小亚基的 RNA 及其编码基因，长约 1.5 kb，由 9 个可变区与高度保守区镶嵌排列。因存在于所有原核生物、分子大小适中且便于通用引物扩增，成为系统分类的分子标准：序列相似性低于 98.7% 可判定为不同种；Woese 据其序列比较于 1977 年提出细菌、古菌、真核三域学说。',
  },
  {
    id: 'g-154',
    term: '双名法',
    english: 'binomial nomenclature',
    subjectId: 'microbiology',
    category: '技术',
    definition:
      '林奈创立、为现行国际命名法规沿用的物种命名体系：学名由拉丁化的属名（名词、首字母大写）与种加词（形容词或名词所有格、小写）构成，整体斜体，首次描述时可附命名人缩写与年份，如 Escherichia coli (Migula 1895)。每种只有一个合法学名，发表新种须指定模式菌株并存放于国际公认菌种保藏中心。',
  },
]
