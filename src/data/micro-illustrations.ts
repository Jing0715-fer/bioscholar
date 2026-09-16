// ============================================================
// 微生物学教材插图（Wikimedia Commons 真实图，全部经 VLM 科学审校）
// 搜集于 Task 24-a：每图的 Commons 源文件/作者/许可证见
// public/images/bio/commons/manifest-24a.json
// 图注为学术中文描述，与对应小节正文知识点呼应
// ============================================================
import type { Illustration } from '@/lib/types'

const commonsCredit = (author: string, license: string) =>
  `图片来源：Wikimedia Commons（${author}，${license}）`

export const microIllustrations: Record<string, Illustration[]> = {
  // ---- 第 2 章 原核微生物的细胞结构与功能 ----
  'microbiology-ch2-s1': [
    {
      src: '/images/bio/commons/average-prokaryote-cell.png',
      caption:
        '典型原核（细菌）细胞的整体结构示意（真实经典教学图的矢量重绘）：细胞壁、细胞膜（流动镶嵌）、细胞质与 70S 核糖体、无核膜包裹的环状 DNA 核区（类核），以及质粒。注意原核细胞不含线粒体、内质网等膜性细胞器——呼吸链位于细胞膜上，这正是「原核膜多功能性」的结构基础；核糖体 70S（50S+30S）也与真核 80S（60S+40S）形成对照，二者正是抗生素选择作用的靶点差异所在。',
      credit: commonsCredit('Mariana Ruiz Villarreal（LadyofHats）', 'Public domain'),
    },
  ],
  'microbiology-ch2-s2': [
    {
      src: '/images/bio/commons/gram-cell-wall-comparison.png',
      caption:
        '革兰氏阳性（左）与革兰氏阴性（右）细胞壁结构对比：G⁺ 具有厚约 20–80 nm 的肽聚糖层并嵌有磷壁酸；G⁻ 仅保留 2–7 nm 薄肽聚糖层，其外由脂多糖（LPS，即脂质 A + 核心多糖 + O 特异链）、磷脂与孔蛋白构成外膜，肽聚糖与外膜之间为周质空间。染色时 G⁺ 的厚肽聚糖网孔经乙醇脱水收缩，将结晶紫-碘复合物锁在胞内而保持紫色；G⁻ 外膜被乙醇溶解、薄肽聚糖层留不住染料复合物而被番红复染为红色——这是革兰氏反应机制的结构根源。',
      credit: commonsCredit('Graevemoore', 'CC BY-SA 3.0'),
    },
  ],
  'microbiology-ch2-s5': [
    {
      src: '/images/bio/commons/flagellum-base-diagram.png',
      caption:
        '细菌鞭毛的超微结构：自外向内依次为丝状体（flagellin 亚基自组装的螺旋管）、钩形鞘（万向节）与埋于细胞壁-膜系统的基体（MS 环与 C 环、P 环与 L 环）。基体即鞭毛马达，由跨膜质子动力（H⁺ 或海洋菌的 Na⁺ 梯度）驱动旋转：逆时针旋转时多根鞭毛聚成束推动菌体直线行进（run），顺时针旋转时束散开致菌体随机翻滚（tumble）——趋化行为正是通过交替这两种状态实现「有偏向的随机行走」。',
      credit: commonsCredit('Mariana Ruiz Villarreal（LadyofHats）', 'Public domain'),
    },
  ],

  // ---- 第 3 章 真核微生物：真菌 ----
  'microbiology-ch3-s1': [
    {
      src: '/images/bio/commons/saccharomyces-cerevisiae-sem.jpg',
      caption:
        '酿酒酵母（Saccharomyces cerevisiae）的扫描电镜照片：卵圆形细胞（典型 5–10 μm），表面可见出芽繁殖留下的芽痕。SEM 立体呈现了酵母单细胞形态与出芽位点的环形结构——多边芽殖使芽痕在细胞表面多点分布，据此可估算单个细胞的出芽次数即「细胞年龄」。',
      credit: commonsCredit('Mogana Das Murtey 与 Patchamuthu Ramasamy', 'CC BY 3.0'),
    },
  ],
  'microbiology-ch3-s2': [
    {
      src: '/images/bio/commons/penicillium-conidiophore.jpg',
      caption:
        '青霉（Penicillium sp.）的乳酸酚棉蓝（LPCB） tease mount 显微图像：典型的帚状分生孢子体（penicillus）清晰可见——分生孢子梗自气生菌丝伸出，经多次分枝形成梗基（ramuli）、小梗（瓶状 phialide），末端串联卵圆形分生孢子链呈扫帚状排列。分生孢子随风散播，是青霉无性繁殖与污染实验室「入侵者」身份的关键结构，也是青霉素高产菌株选育时的形态观察要点。',
      credit: commonsCredit('Ajay Kumar Chaurasiya', 'CC BY-SA 4.0'),
    },
  ],
  'microbiology-ch3-s3': [
    {
      src: '/images/bio/commons/rhizopus-sporangium.jpg',
      caption:
        '根霉（Rhizopus sp.）孢子囊的显微照片：直立孢子囊梗顶端膨大为球形孢子囊，囊内经原生质切割产生大量孢囊孢子，中央可见囊轴（columella）。成熟后囊壁破裂释放孢子，是接合菌门无性繁殖的代表结构；与青霉外生的分生孢子对照，体现了「内生孢子 vs 外生孢子」两类无性繁殖策略。',
      credit: commonsCredit('Ajay Kumar Chaurasiya', 'CC BY-SA 4.0'),
    },
  ],

  // ---- 第 4 章 病毒与亚病毒因子 ----
  'microbiology-ch4-s1': [
    {
      src: '/images/bio/commons/bacteriophage-t4-structure.png',
      caption:
        'T4 噬菌体的外部形态结构：拉长的二十面体头部内装 dsDNA 基因组（约 169 kb）；其下依次为颈与颈须、可收缩的尾鞘（24 环螺旋对称）包裹尾管、六角形基板与六根尾丝及短尾钉。吸附时尾丝识别大肠杆菌表面受体并使基板构象变化，尾鞘收缩驱动尾管穿刺细胞壁——这一「分子注射器」机制是复合对称病毒形态与功能对应的经典范例。',
      credit: commonsCredit('Adenosine', 'CC BY-SA 3.0'),
    },
  ],
  'microbiology-ch4-s3': [
    {
      src: '/images/bio/commons/phage-lytic-lysogenic-cycles.png',
      caption:
        '温和噬菌体感染后的两条去路：左侧裂解循环（lytic cycle）——噬菌体 DNA 环化复制、表达结构蛋白、装配并裂解释放子代；右侧溶原循环（lysogenic cycle）——噬菌体 DNA 经位点特异性重组整合为前噬菌体（prophage），随宿主染色体同步复制并赋予宿主免疫性。环境胁迫（如 UV）可诱导前噬菌体切离而转入裂解——λ 噬菌体 CI/Cro 开关正是这一命运抉择的分子基础。',
      credit: commonsCredit('Suly12 与 Adenosine 原作、Pbroks13 重绘', 'CC BY-SA 3.0'),
    },
  ],
  'microbiology-ch4-s4': [
    {
      src: '/images/bio/commons/influenza-virus-structure.png',
      caption:
        '流感病毒的结构模型：脂质包膜（出芽自宿主细胞膜）表面镶嵌三聚体血凝素（HA）与四聚体神经氨酸酶（NA）两类刺突，膜下为 M1 基质蛋白衬层；内部为 8 节段负链 RNA 与核蛋白（NP）组成的核糖核蛋白复合体（RNP），各带一份 RNA 依赖的 RNA 聚合酶。HA 介导吸附与膜融合（唾液酸受体），NA 水解受体帮助子代病毒释放（奥司他韦的靶点）；节段化基因组是甲型流感抗原转变（pandemic）大流行的分子根源。',
      credit: commonsCredit('BruceBlaus', 'CC BY-SA 4.0'),
    },
  ],

  // ---- 第 7 章 微生物的生长及其控制 ----
  'microbiology-ch7-s1': [
    {
      src: '/images/bio/commons/bacterial-growth-curve.png',
      caption:
        '分批培养中细菌群体的典型生长曲线（纵轴为细胞数的对数）：迟缓期（lag，合成 RNA 与酶、调整代谢）、对数期（exponential，比生长速率恒定 μmax，倍增时间最短）、稳定期（stationary，营养耗竭与产物积累达到平衡，活菌数持平，次级代谢产物在此期大量合成）与衰亡期（death，自溶占主导）。工业发酵常在对数期取种、在稳定期收获抗生素等次级产物——曲线各期的成因与利用是本节核心。',
      credit: commonsCredit('Michał Komorniczak', 'CC BY-SA 3.0'),
    },
  ],

  // ---- 第 8 章 微生物的遗传变异与育种 ----
  'microbiology-ch8-s2': [
    {
      src: '/images/bio/commons/bacterial-conjugation.png',
      caption:
        '细菌接合全过程示意：F⁺ 供体经性菌毛接触 F⁻ 受体，松弛酶在转移起点（oriT）切开 F 质粒一条链，5′ 端单链 DNA 经 IV 型分泌系统（转移酶复合物）泵入受体；供体以滚环复制补回缺口、受体以互补链合成并环化获得完整 F 质粒——于是「旧供体」与「新供体」都成为 F⁺。Hfr 菌株中 F 因子整合于染色体，同样的机制可带动细菌染色体基因高频转移，成为中断杂交作图的实验基础。',
      credit: commonsCredit('Adenosine', 'CC BY-SA 3.0'),
    },
  ],

  // ---- 第 9 章 微生物生态 ----
  'microbiology-ch9-s4': [
    {
      src: '/images/bio/commons/nitrogen-cycle.png',
      caption:
        '氮的生物地球化学循环全景：大气 N₂ 经豆科根瘤中共生固氮菌或土壤自生固氮菌还原为 NH₄⁺（生物固氮）；有机氮经分解者氨化释出氨；氨再经亚硝酸菌与硝酸菌两级硝化转为 NO₃⁻（植物可同化利用）；缺氧土壤中反硝化细菌将硝酸盐逐步还原为 N₂ 返回大气（水田氮肥损失主因）。固氮—氨化—硝化—反硝化构成闭环，微生物是每个环节唯一的驱动者。',
      credit: commonsCredit('Johann Dréo', 'CC BY-SA 3.0'),
    },
  ],

  // ---- 第 10 章 感染与免疫 ----
  'microbiology-ch10-s2': [
    {
      src: '/images/bio/commons/lps-structure.png',
      caption:
        '革兰氏阴性菌脂多糖（LPS，内毒素）的分子结构分区：最外层的 O 特异链由重复寡糖单元组成（血清学分型基础，亦是免疫逃逸的变异区），向内依次为外核心与内核心寡糖，最内的脂质 A 以疏水锚定于外膜小叶——脂质 A 是内毒素活性的化学本质，进入血流后经 TLR4/MD-2 受体激活单核-巨噬细胞释放 IL-1、TNF-α 等细胞因子，过量时引发发热、DIC 与感染性休克。',
      credit: commonsCredit('Mike Jones', 'CC BY-SA 3.0'),
    },
  ],
  'microbiology-ch10-s3': [
    {
      src: '/images/bio/commons/complement-pathway.png',
      caption:
        '补体系统三条激活途径及其共同通路：经典途径由免疫复合物（C1q 识别 IgM/IgG-Fc）启动；凝集素途径由甘露糖结合凝集素（MBL）识别病原体表面糖型；旁路途径则由 C3 自发水解的 C3(H₂O) 在病原表面触发放大环路。三者汇聚生成各自的 C3 转化酶（经典 C4b2a、旁路 C3bBb），随后 C5 转化酶切出 C5b，募集 C6–C9 聚合为攻膜复合物（MAC）打孔溶菌；C3a/C5a 作为过敏毒素介导炎症招募。',
      credit: commonsCredit('Guido4', 'CC BY-SA 4.0'),
    },
  ],

  // ---- 第 11 章 微生物的分类与鉴定 ----
  'microbiology-ch11-s2': [
    {
      src: '/images/bio/commons/three-domain-tree.png',
      caption:
        '基于 rRNA 序列比较的生命三域系统发育树：细菌（Bacteria）、古菌（Archaea）与真核生物（Eukarya）各自构成独立大支；古菌与真核生物互为姐妹群，支持二者共享更近的共同祖先——这正是 Woese 1977 年以 16S/18S rRNA 寡核苷酸编目法颠覆「原核/真核两界」传统、提出三域学说的核心证据。古菌膜脂的醚键与植烷侧链、无肽聚糖细胞壁等独特性状亦与其独立域地位相印证。',
      credit: commonsCredit('Eric Gaba（Sting）', 'Public domain'),
    },
  ],

  // ---- 第 12 章 微生物的应用与现代生物技术 ----
  'microbiology-ch12-s4': [
    {
      src: '/images/bio/commons/crispr-cas9-mechanism.png',
      caption:
        'CRISPR-Cas9 基因编辑机制：向导 RNA（sgRNA，由靶向序列 spacer 与骨架 scaffold 构成）与 Cas9 蛋白形成复合体扫描 DNA，只有靶序列互补且紧邻 PAM（如 SpCas9 的 5′-NGG-3′）时才解锁切割——HNH 结构域切割互补链、RuvC 结构域切割非互补链，产生平末端双链断裂，随后由细胞的 HDR 或 NHEJ 修复实现敲入/敲除。sgRNA 的可编程性与 PAM 约束共同决定了编辑的特异性与脱靶风险。',
      credit: commonsCredit('DataBase Center for Life Science（DBCLS）', 'CC BY 4.0'),
    },
  ],
}
