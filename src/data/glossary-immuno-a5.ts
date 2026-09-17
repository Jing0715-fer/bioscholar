// ============================================================
// BioScholar 免疫学术语词典 - 批次 A5（第 12 章）
// 4 条（g-181 ~ g-184），subjectId 均为 immunology
// 类别分布：免疫病理 2 / 免疫治疗 2
// 依据：曹雪涛《医学免疫学》（第4版）、周光炎《免疫学原理》、
// Janeway《Immunobiology》
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

// 注：immunology 为本批次新增学科，主体 SubjectId 联合类型尚未收录该 id；
// 此处以双重断言保持本文件类型自洽，待类型联合扩展后可直接改回字面量。
const IMMUNOLOGY = 'immunology' as unknown as GlossaryTerm['subjectId']

export const immunoGlossaryA5: GlossaryTerm[] = [
  {
    id: 'g-181',
    term: '超敏反应',
    english: 'hypersensitivity',
    subjectId: IMMUNOLOGY,
    category: '免疫病理',
    definition:
      '机体对特定抗原发生应答时以组织损伤或功能紊乱为结局的过度免疫反应，由 Gell 与 Coombs 分为四型：I 型由 IgE 经高亲和力受体 FcεRI 交联肥大细胞脱颗粒介导，数分钟内发作，见于过敏性休克、哮喘与鼻炎；II 型由 IgG/IgM 靶向细胞表面抗原，经补体溶破、调理吞噬与 ADCC 破坏细胞（输血反应、新生儿溶血症），部分抗体亦可改写受体功能（Graves 病）；III 型由中等大小可溶性免疫复合物在血管通透性增高与血流涡流部位沉积致病（血清病、狼疮肾炎），常伴 CH50 与 C3、C4 消耗性下降；IV 型由 Th1/CTL 介导、无抗体参与，24–72 小时达峰（接触性皮炎、结核菌素反应、肉芽肿）。其本质并非新机制的发明，而是正常免疫武器在靶标与剂量上的失当。',
  },
  {
    id: 'g-182',
    term: '变应原特异性免疫治疗',
    english: 'allergen-specific immunotherapy',
    abbreviation: 'AIT',
    subjectId: IMMUNOLOGY,
    category: '免疫治疗',
    definition:
      '针对 I 型超敏反应的对因疗法，俗称脱敏治疗：以变应原提取物制剂经皮下注射或舌下含服、按递增剂量规律给药约 3 年，将既有的 Th2/IgE 偏置应答系统性重编程为 Th1 与 Treg 优势——诱导变应原特异性 IgG4「阻断抗体」竞争结合变应原、Treg 经 IL-10 与 TGF-β 抑制 IgE 合成并下调肥大细胞与嗜碱性粒细胞反应性，使再次暴露时的发敏强度逐级衰减，并可改变疾病自然进程、具有停药后的长期效应。对尘螨与花粉等吸入性变应原所致鼻炎和哮喘证据充分；风险为少数患者发生全身过敏反应，须在具备肾上腺素急救条件的场所监护进行，必要时与抗 IgE 单抗奥马珠单抗序贯配合以安全递增剂量。',
  },
  {
    id: 'g-183',
    term: '新生儿溶血症',
    english: 'hemolytic disease of the newborn',
    abbreviation: 'HDN',
    subjectId: IMMUNOLOGY,
    category: '免疫病理',
    definition:
      '母胎血型不合致母体免疫抗体经胎盘攻击胎儿红细胞的 II 型超敏反应疾病，以 Rh 血型不合为经典：RhD 阴性母亲在分娩等事件中接触 RhD 阳性胎儿红细胞而被致敏，再次妊娠时记忆应答产出大量 IgG、经胎盘转入胎儿循环，与红细胞 D 抗原结合后由补体与单核-巨噬细胞系统协同清除，造成血管外溶血，临床见进行性贫血、黄疸、肝脾肿大，重症可致胎儿水肿或核黄疸性神经损害。预防采用产后 72 小时内注射抗 D 免疫球蛋白——被动抗体抢先结合并清除进入母体的胎儿红细胞、抑制主动致敏，使 RhD 同种免疫率大幅下降。ABO 不合（O 型母亲怀 A 或 B 型胎儿）更常见而程度多较轻。',
  },
  {
    id: 'g-184',
    term: '免疫检查点抑制剂',
    english: 'immune checkpoint inhibitor',
    abbreviation: 'ICI',
    subjectId: IMMUNOLOGY,
    category: '免疫治疗',
    definition:
      '以单克隆抗体封闭 T 细胞负向共刺激分子从而恢复抗肿瘤免疫的制剂：抗 CTLA-4 抗体（伊匹木单抗）在启动阶段阻断 CTLA-4 对 B7 的竞争结合、恢复 CD28 共刺激；抗 PD-1 抗体（纳武利尤单抗、帕博利珠单抗）与抗 PD-L1 抗体在效应阶段解除肿瘤微环境「适应性免疫抵抗」的抑制信号，使耗竭样 T 细胞重获增殖与杀伤能力。因所解除的抑制并无肿瘤特异性，其共性代价为免疫相关不良事件（irAE）——累及肠道、肝、肺、内分泌器官与皮肤的自身免疫样炎症，重症以糖皮质激素与免疫抑制剂管理并暂停治疗。已在黑色素瘤、非小细胞肺癌、淋巴瘤等确立地位，疗效与 PD-L1 表达及肿瘤新生抗原负荷相关，是肿瘤免疫编辑「逃逸」阶段的再干预手段。',
  },
]
