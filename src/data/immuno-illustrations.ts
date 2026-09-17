// ============================================================
// 免疫学教材插图（Wikimedia Commons 真实图，全部经 VLM 科学审校）
// 初版搜集于 Task 28-ILL-A2/A3；本轮（Task 37-ILL）增补 11 张：
// 源文件/作者/许可证见 agent-ctx/tmp37/meta.json
// 图注为学术中文描述，与对应小节正文知识点呼应
// ============================================================
import type { Illustration } from '@/lib/types'

export const immunoIllustrations: Record<string, Illustration[]> = {
  // ---- 第 2 章 免疫器官与组织 ----
  'immunology-ch2-s2': [
    {
      src: '/images/bio/commons/lymph-node-structure.png',
      caption:
        '淋巴结的分区结构示意：被膜下为浅皮质区（含初级与次级淋巴滤泡，B 细胞居留并在此形成生发中心），深皮质区（副皮质区）为 T 细胞与交错突状细胞（DC）所在，髓质由髓索（浆细胞与 B 细胞）与髓窦构成。输入淋巴管自被膜进入，输出淋巴管自门部离开；高内皮静脉（HEV）位于副皮质区，是淋巴细胞自血流再循环进入淋巴结的门户——抗原经淋巴或 DC 携带抵达后，T/B 细胞分别在其各自的区室被激活，印证了「区室化分工」的组织学基础。',
      credit: '图片来源：Wikimedia Commons（lymph node structure diagram）',
    },
    {
      src: '/images/bio/commons/lymph-node-histology.jpg',
      caption:
        '淋巴结的组织学切片（H&E 染色）：外周深染的皮质区可见淋巴滤泡，中央色浅的生发中心清晰可辨（活跃的次级滤泡），内圈为小淋巴细胞构成的套区；髓质区髓索与髓窦相间排列，窦内含组织细胞与淋巴细胞。组织学图像与模式图互为印证：滤泡与生发中心是 B 细胞应答（体细胞高频突变与类别转换，参见第十章）的组织场所。',
      credit: '图片来源：Wikimedia Commons（Netha Hussain，CC BY-SA 3.0）',
    },
  ],
  'immunology-ch2-s3': [
    {
      src: '/images/bio/commons/iga-dimer-schematic.png',
      caption:
        '分泌型 IgA 的结构示意：两个 IgA 单体经 J 链在 C 端连接为二聚体，穿越黏膜上皮时再结合上皮细胞产生的分泌成分（secretory component，即多聚免疫球蛋白受体的胞外域）——后者既充当转运载体，又像护甲一样遮蔽铰链区，使 sIgA 在富含蛋白酶的黏膜表面与分泌物中保持活性。每日由黏膜相关淋巴组织合成的 IgA 远超其他各类免疫球蛋白之和，是黏膜免疫的主力；母乳中的 sIgA 还为婴儿肠道提供被动保护。',
      credit: '图片来源：Wikimedia Commons（McortNGHH，CC BY-SA 4.0）',
    },
  ],

  // ---- 第 3 章 固有免疫细胞 ----
  'immunology-ch3-s1': [
    {
      src: '/images/bio/commons/macrophage-phagocytosis.png',
      caption:
        '受体介导的吞噬过程示意：巨噬细胞表面 Fc 受体或补体受体识别被调理（IgG/C3b 包被）的靶颗粒，伸出伪足包裹形成吞噬体，进而与溶酶体融合为吞噬溶酶体，经活性氧/氮中间物（ROI/RNS）与溶酶体酶杀伤消化。识别—内吞—杀伤—提呈四步环环相扣：消化后的肽段还可经 MHC II 类途径提呈给 CD4⁺ T 细胞，把固有吞噬与适应性应答衔接起来。',
      credit: '图片来源：Wikimedia Commons（macrophage phagocytosis diagram）',
    },
  ],
  'immunology-ch3-s3': [
    {
      src: '/images/bio/commons/nk-cell-niaid.jpg',
      caption:
        '人自然杀伤细胞（NK cell）的伪彩扫描电镜照片（NIAID）：NK 细胞是固有淋巴样细胞家族中的细胞毒性成员，胞体表面可见丰富微绒毛与突起。NK 细胞不表达抗原特异性受体，而以「诱导—激活—抑制」受体组合判断靶细胞健康状态：MHC I 类分子（自我标记）与抑制性受体（如 KIR）结合即放行，病毒感染或肿瘤 stress 配体（如 MICA）经激活受体（NKG2D）触发脱颗粒——「丢失自我」学说由此得名，填补了 CD8⁺ T 细胞识别之外的即时杀伤空档。',
      credit: '图片来源：Wikimedia Commons（NIAID，CC BY 2.0）',
    },
  ],
  'immunology-ch3-s4': [
    {
      src: '/images/bio/commons/mast-cell-degranulation.png',
      caption:
        '肥大细胞脱颗粒的机制分期：致敏阶段抗原特异性 IgE 经 FcεRI 高亲和力受体锚定于肥大细胞表面；再次暴露时过敏原交联相邻 IgE，受体 ITAM 磷酸化启动信号级联，钙离子内流驱动胞质颗粒向膜缘迁移并融合，释放组胺、肝素与趋化因子等预存介质，同时新合成白三烯与前列腺素。血管通透性升高、平滑肌收缩与瘙痒即 I 型超敏反应速发相的效应；该图也是抗组胺药与肥大细胞稳定剂药理作用的机制底图。',
      credit: '图片来源：Wikimedia Commons（Paweł Kuźniar，CC BY-SA 3.0）',
    },
  ],

  // ---- 第 6 章 免疫球蛋白 ----
  'immunology-ch6-s1': [
    {
      src: '/images/bio/commons/antibody-igg-structure.png',
      caption:
        'IgG 抗体分子的基本结构：两条重链（H）与两条轻链（L）经链间二硫键连接成 Y 形；每条链的 N 端可变区（VH/VL）共同构成抗原结合部位，其中高变性的互补决定区（CDR）直接接触表位；重链恒定区（CH1–CH3）与铰链区决定抗体的类别与效应功能。木瓜蛋白酶在铰链区上方切割得 Fab（抗原结合片段），胃蛋白酶在铰链下方切割得 F(ab′)2——经典酶切实验正是「可变区结合、恒定区效应」两分结构的最早证据。',
      credit: '图片来源：Wikimedia Commons（免疫球蛋白 IgG 结构教学图）',
    },
  ],
  'immunology-ch6-s2': [
    {
      src: '/images/bio/commons/immunoglobulin-classes.png',
      caption:
        '五类免疫球蛋白的结构对比：IgG、IgD 与 IgE 为单体；IgA 以 J 链连接成二聚体（穿越黏膜上皮时另获分泌成分）；IgM 由五个单体经 J 链组装为五聚体，理论上提供十个抗原结合臂——初次应答的先锋。重链恒定区的差异赋予各类迥异的效应：IgG 激活补体、穿越胎盘并介导调理吞噬；IgM 是补体经典途径的最强激活者；IgE 亲肥大细胞；IgA 守卫黏膜。类别转换（CSR）只更换重链恒定区而保留可变区，使同一特异性在不同效应间切换。',
      credit: '图片来源：Wikimedia Commons（免疫球蛋白五类教学图）',
    },
  ],

  // ---- 第 7 章 补体系统 ----
  'immunology-ch7-s2': [
    {
      src: '/images/bio/commons/complement-pathway.png',
      caption:
        '补体激活的三条途径与共同末端通路：经典途径由免疫复合物激活 C1，凝集素途径由甘露糖结合凝集素识别病原糖型，旁路则在 C3 持续低水平自发水解的基础上于病原表面放大。三条途径分别组装 C3 转化酶（C4b2a 与 C3bBb），随后形成 C5 转化酶切割 C5，汇入共同的末端通路：C5b 依次招募 C6、C7、C8 与多聚 C9 组装攻膜复合物（MAC），在靶膜上打孔致溶破。C3b 的调理作用与过敏毒素（C3a/C5a）的炎症效应亦自此汇出。',
      credit: '图片来源：Wikimedia Commons（补体途径教学图，Public domain）',
    },
  ],

  // ---- 第 8 章 MHC 与抗原提呈 ----
  'immunology-ch8-s2': [
    {
      src: '/images/bio/commons/mhc-class1-structure.png',
      caption:
        'MHC I 类与 II 类分子的结构对照：I 类分子由一条重链（α1–α3 结构域）与非共价结合的 β2 微球蛋白组成，α1 与 α2 两个结构域并拢形成肽结合槽——两端封闭，恰容纳 8–10 个氨基酸的肽段；II 类分子为 α/β 二聚体，结合槽由 α1 与 β1 构成，两端开放可容纳 13–17 肽。I 类表达于几乎所有有核细胞、向 CD8⁺ T 细胞提呈内源性肽；II 类限于抗原提呈细胞，向 CD4⁺ T 细胞提呈外源性肽——结构与免疫分工严丝合缝。',
      credit: '图片来源：Wikimedia Commons（MHC 分子结构教学图）',
    },
  ],
  'immunology-ch8-s3': [
    {
      src: '/images/bio/commons/antigen-processing-mhc.png',
      caption:
        '内源性抗原的加工与提呈途径：细胞内蛋白（病毒蛋白、肿瘤抗原等）经泛素标记后被 26S 蛋白酶体降解为肽段；肽段经 TAP（抗原加工相关转运体）以 ATP 依赖方式泵入内质网腔；在内质网中肽段与新合成的 MHC I 类分子重链-β2m 二聚体结合，稳定其折叠后经高尔基体运输至细胞表面，供 CD8⁺ T 细胞的 TCR 识别。干扰素诱导的免疫蛋白酶体（以 LMP2/LMP7 替换催化亚基）可优化肽谱——这是「自我改造以利抗原展示」的典型适应。',
      credit: '图片来源：Wikimedia Commons（Scray，CC BY-SA 3.0）',
    },
  ],

  // ---- 第 9 章 T 淋巴细胞 ----
  'immunology-ch9-s1': [
    {
      src: '/images/bio/commons/tcr-structure.png',
      caption:
        'TCR-CD3 复合体的结构与组装：抗原识别亚基为 TCR αβ 异二聚体，胞外免疫球蛋白样结构域中的 CDR1–3 环同时识别 MHC 分子及其沟槽中的肽段（「双识别」）；因胞内区极短，信号经与之非共价结合的 CD3 复合体（γε、εδ 二聚体与 ζζ 同二聚体）转导——每条 CD3 亚基胞内区各含 ITAM 基序，复合体共含十枚 ITAM，经 Lck 磷酸化后招募 ZAP-70 启动下游级联。识别与信号转导的分工组装是 T 细胞抗原应答的结构基础。',
      credit: '图片来源：Wikimedia Commons（TCR complex 教学图，CC BY-SA 3.0）',
    },
  ],

  // ---- 第 10 章 B 淋巴细胞与体液免疫应答 ----
  'immunology-ch10-s3': [
    {
      src: '/images/bio/commons/germinal-center.png',
      caption:
        '生发中心的结构与反应分区：中央为暗区（中心母细胞密集增殖，经历体细胞高频突变），外侧为亮区（中心细胞与滤泡树突状细胞 FDC 密切接触，接受抗原筛选）——突变致亲和力下降的中心细胞凋亡后被巨噬细胞吞噬形成「可染体小体」；亲和力升高者经 FDC 呈递的抗原与 Tfh 细胞的 CD40L/细胞因子信号双重筛选，分化为浆细胞或记忆 B 细胞。B 细胞在暗区-亮区之间往返循环，亲和力逐轮攀升——体液免疫「亲和力成熟」的组织学现场。',
      credit: '图片来源：Wikimedia Commons（Billy10drs，CC BY-SA 3.0）',
    },
  ],

  // ---- 第 12 章 超敏反应与免疫学应用 ----
  'immunology-ch12-s1': [
    {
      src: '/images/bio/commons/allergy-pathway.jpg',
      caption:
        'I 型超敏反应的全通路：致敏阶段树突状细胞捕获过敏原并提呈给 Th2 细胞，后者经 IL-4/IL-13 与 CD40L 驱动 B 细胞类别转换为 IgE；IgE 经 FcεRI 钉在肥大细胞与嗜碱性粒细胞表面。效应阶段再次接触同一过敏原时交联 IgE 触发脱颗粒，释放组胺等介质——数分钟内出现血管扩张、平滑肌痉挛与黏液分泌（速发相），数小时后白三烯与嗜酸性粒细胞浸润接棒（迟发相）。抗组胺药、肥大细胞稳定剂与抗 IgE 单抗（奥马珠单抗）分别作用于通路的不同节点。',
      credit: '图片来源：Wikimedia Commons（Sari Sabban，CC BY-SA 3.0）',
    },
  ],

  // ---- 既有挂载（CAR-T） ----
  'immunology-ch12-s4': [
    {
      src: '/images/bio/commons/car-t-structure.png',
      caption:
        '嵌合抗原受体 T 细胞（CAR-T）的模块结构：胞外单链可变片段（scFv，由 VH 与 VL 经连接肽拼接）负责识别肿瘤表面抗原（如 CD19）；铰链区提供柔性伸展空间；跨膜区锚定细胞膜；胞内信号域由 CD3ζ 的 ITAM（信号 1）与共刺激域（CD28 或 4-1BB，信号 2）串联构成——正是第九章「T 细胞活化双信号」原理的工程化重构。第二代 CAR 加入共刺激域后持续增殖与杀伤能力显著增强，是 CD19 CAR-T 治疗 B 细胞恶性肿瘤的核心设计。',
      credit: '图片来源：Wikimedia Commons（CAR-T structure diagram）',
    },
  ],
}
