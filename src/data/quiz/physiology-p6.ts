// ============================================================
// 生理学测验题库 - 批次 P6（第 11–12 章）
// 覆盖 2 章，每章 5 题，共 10 题（q-physiology-51 ~ q-physiology-60）
// 题型：single 6 / truefalse 2 / multiple 2
// 难度：1（基础识记）2 / 2（理解应用）5 / 3（综合分析）3
// 依据：Guyton & Hall 第14版、Boron & Boulpaep 第3版、王庭槐《生理学》人卫第9版
// 及本学科第 11–12 章扩写正文
// ============================================================

import type { QuizQuestion } from '@/lib/types'

export const physiologyQuizP6: QuizQuestion[] = [
  // ================= 第 11 章 肾脏与体液平衡（q-physiology-51 ~ 55） =================
  {
    id: 'q-physiology-51',
    subjectId: 'physiology',
    chapterId: 'physiology-ch11',
    type: 'single',
    question: '关于入球与出球小动脉阻力变化对肾小球滤过率（GFR）与肾血流量（RBF）的影响，正确的是：',
    options: [
      '出球小动脉收缩时两者均升高',
      '入球小动脉扩张时 GFR 下降而 RBF 上升',
      '出球小动脉收缩时 RBF 下降而 GFR 可升高；入球小动脉收缩时两者同降',
      '入球小动脉收缩时 GFR 升高而 RBF 下降',
    ],
    answer: 2,
    explanation:
      '入球小动脉位于肾小球上游，其收缩同时削减肾小球血流量与毛细血管压，GFR 与 RBF 同降；出球小动脉在下游，收缩把血液「憋」在肾小球内，毛细血管压升高而流量下降，GFR 反可升高——极强收缩时也会因流量过低而降 GFR。低浓度血管紧张素 II 优先收缩出球小动脉，正是低灌注时保 GFR 的手段，故 C 正确。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-52',
    subjectId: 'physiology',
    chapterId: 'physiology-ch11',
    type: 'single',
    question: '关于葡萄糖的肾小管滴定曲线，正确的是：',
    options: [
      '血糖到达肾糖阈 180 mg/dl 时重吸收即达 Tmax，两线同步封顶',
      '肾糖阈（约 180 mg/dl）早于 Tmax（约 375 mg/min）出现，两线间的扇形展开源于肾单位异质性',
      '出现糖尿即表明近端小管 NHE3 转运体已达饱和',
      '血糖 100 mg/dl 时滤过负荷已接近 Tmax',
    ],
    answer: 1,
    explanation:
      '血糖 100 mg/dl 时滤过负荷为 125 mg/min（100 mg/dl × 125 ml/min），远未及 Tmax；升至肾糖阈约 180 mg/dl 时滤过约 225 mg/min，糖尿出现而重吸收尚未封顶；两线间的「扇形」（splay）源于数百万肾单位在转运能力与 GFR 上的异质性以及沿管程的逐步饱和；血糖更高时重吸收才饱和于约 375 mg/min 的平台。糖尿反映的是 SGLT 转运极限而非 NHE3。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-53',
    subjectId: 'physiology',
    chapterId: 'physiology-ch11',
    type: 'truefalse',
    question:
      '亨利襻升支粗段主动重吸收 NaCl 而对水几乎不通透；这种不通透是结构性的，即使在高浓度 ADH 环境下同样维持，因而该段既是稀释尿的产生部位，也是髓质渗透梯度的发动机。',
    options: ['正确', '错误'],
    answer: 0,
    explanation:
      '正确。粗升支顶膜 NKCC2 以钠梯度驱动成套回收 NaCl，该段缺乏水通道、对水几乎不通透，且这种不通透是结构性的，ADH 也不能改变——盐被抽出、水留在管内，管液渗透压降至约 100 mOsm/kg，「稀释段」由此得名；同时被抽出的 NaCl 沉积于外髓间质，正是逆流倍增的发动机。呋塞米阻断 NKCC2 即拆除此泵，既致强烈利尿，也冲刷髓质梯度。',
    difficulty: 1,
  },
  {
    id: 'q-physiology-54',
    subjectId: 'physiology',
    chapterId: 'physiology-ch11',
    type: 'single',
    question:
      '一名多尿-多饮患者禁水后尿渗透压不再升高，注射去氨加压素后尿渗透压由 120 升至 520 mOsm/kg。最可能的诊断与机制解释是：',
    options: [
      '肾性尿崩症：V2 受体或 AQP2 缺陷，对外源 ADH 无反应',
      '精神性烦渴：饮水过多使血浆渗透压持续偏高',
      '中枢性尿崩症合并集合管病变：加压素与受体双重缺陷',
      '中枢性尿崩症：ADH 合成释放不足，但集合管应答链完好',
    ],
    answer: 3,
    explanation:
      '禁水后尿渗透压不再升高说明最大浓缩能力丧失；注射去氨加压素后尿渗透压明显升高，说明集合管对 ADH 的应答链（V2-cAMP-AQP2）完好，缺的是激素本身——支持中枢性尿崩症。肾性尿崩症因 V2 受体或 AQP2 缺陷对加压素无反应；精神性烦渴者血浆渗透压偏低、禁水后可逐步浓缩；双重缺陷者注射加压素亦无反应，故 D 正确。',
    difficulty: 3,
  },
  {
    id: 'q-physiology-55',
    subjectId: 'physiology',
    chapterId: 'physiology-ch11',
    type: 'multiple',
    question: '关于肾脏的排酸机制，正确的有：',
    options: [
      '近端小管完成 80–85% 的碳酸氢盐回收，泌 H⁺ 与回收 HCO₃⁻ 一一对应',
      '铵由谷氨酰胺代谢生成，每分子谷氨酰胺产生 2 个 NH₄⁺ 与 2 个新 HCO₃⁻，慢性酸中毒时可数倍上调',
      '可滴定酸的排酸容量约为铵途径的 3 倍，是肾脏排酸的主力',
      'NH₃ 弥散入集合管酸性管腔后被 H⁺ 捕获为不易通透的 NH₄⁺，扩散捕获使排酸可逆浓度梯度进行',
    ],
    answer: [0, 1, 3],
    explanation:
      '碳酸氢盐回收经「泌 H⁺-管腔碳酸酐酶-NBCe1 出胞」实现，近端完成 80–85%，A 正确；铵源于谷氨酰胺代谢，一分子产 2 个 NH₄⁺ 与 2 个新 HCO₃⁻，慢性酸中毒时谷氨酰胺酶诱导可数倍上调，B 正确；NH₃ 脂溶性弥散入酸性管腔即被 H⁺ 捕获为不通透的 NH₄⁺，扩散捕获使排酸可顶着浓度梯度持续进行，D 正确。可滴定酸受滤过磷酸盐量封顶，仅约占净酸排泄的三分之一——铵才是主力，C 把比例说反了。',
    difficulty: 3,
  },
  // ================= 第 12 章 内分泌与生殖（q-physiology-56 ~ 60） =================
  {
    id: 'q-physiology-56',
    subjectId: 'physiology',
    chapterId: 'physiology-ch12',
    type: 'single',
    question: '关于激素化学类别与受体定位-时程的匹配，正确的是：',
    options: [
      '类固醇激素经膜受体-G 蛋白级联在数分钟内起效',
      '甲状腺激素属胺类，却经胞内核受体产生延迟而持久的基因效应',
      '肽类激素与热休克蛋白结合后转位入核调节转录',
      '儿茶酚胺与胞内受体结合，效应需数小时显现',
    ],
    answer: 1,
    explanation:
      '化学类别与受体定位大体绑定：肽类与儿茶酚胺亲水走膜受体、秒级起效；类固醇脂溶入胞经核受体、基因效应延迟。甲状腺激素是著名例外——虽为酪氨酸衍生的胺类，却具脂溶性，经转运体入胞与核受体结合调控转录，作用以小时至天计，呈「胺类的身份、类固醇的作风」。故 B 正确，A、C、D 均错置类别与通路。',
    difficulty: 1,
  },
  {
    id: 'q-physiology-57',
    subjectId: 'physiology',
    chapterId: 'physiology-ch12',
    type: 'single',
    question: '关于糖皮质激素的作用与病理，正确的是：',
    options: [
      '库欣综合征的脂肪重分布以四肢皮下脂肪堆积为特征',
      '皮质醇分泌的昼夜节律为夜间峰值、清晨谷值',
      '皮质醇对儿茶酚胺缩血管效应的允许作用，可解释艾迪生病患者的低血压与升压反应迟钝',
      '皮质醇抑制肝糖异生、促进蛋白质合成',
    ],
    answer: 2,
    explanation:
      '允许作用指皮质醇自身不发出指令、却维持靶组织对其他信号的应答能力：它维持血管平滑肌对儿茶酚胺的反应性，艾迪生病（皮质醇缺乏）患者血管张力低垂、对升压药反应迟钝即是反面证据，C 正确。库欣的脂肪重分布呈向心性（躯干面颈堆积而四肢消瘦）；皮质醇节律为晨峰夜谷；其代谢效应是促糖异生与蛋白分解，A、B、D 皆误。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-58',
    subjectId: 'physiology',
    chapterId: 'physiology-ch12',
    type: 'single',
    question: 'β 细胞葡萄糖刺激胰岛素分泌的传感链，顺序与机制正确的是：',
    options: [
      'GLUT2 摄入葡萄糖 → 葡萄糖激酶代谢使 ATP/ADP 升高 → K_ATP 通道关闭 → 去极化 → Ca²⁺ 内流 → 胞吐',
      '葡萄糖经 GLUT4 被动入胞 → cAMP 升高 → K_ATP 通道开放 → 超极化 → 囊泡胞吐',
      '磺脲类药物阻断电压门控 Ca²⁺ 通道，从而抑制胰岛素分泌',
      'GLP-1 不依赖血糖水平即可独立触发足量胰岛素分泌',
    ],
    answer: 0,
    explanation:
      'β 细胞传感链环环相扣：GLUT2（低亲和力）放行葡萄糖、葡萄糖激酶代谢产生 ATP，ATP/ADP 升高使 K_ATP 关闭，膜去极化开启电压门控钙通道，钙内流触发胞吐，A 顺序正确。GLUT4 是胰岛素作用的靶转运体而非 β 细胞的传感器；磺脲类结合 SUR1 关闭 K_ATP 而促分泌（低血糖风险由此而来）；GLP-1 经 cAMP 增强葡萄糖胜任性、只在血糖已高时放大分泌，不独立触发。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-59',
    subjectId: 'physiology',
    chapterId: 'physiology-ch12',
    type: 'truefalse',
    question:
      '月经周期中雌二醇对垂体促性腺激素的作用始终为负反馈；黄体期孕酮的主要作用是促进 GnRH 脉冲频率加密，从而升高 LH。',
    options: ['正确', '错误'],
    answer: 1,
    explanation:
      '错误。反馈方向在周期中改变两次：晚卵泡期持续高雌二醇把垂体由负反馈敏化为正反馈，引爆 LH 峰——这是第一次翻转；黄体期孕酮联合雌二醇反而以负反馈压制 GnRH 脉冲（经 kisspeptin 通路降低脉冲频率）与促性腺激素分泌，FSH 被压低使下一批卵泡静候黄体退缩。孕酮不促进 GnRH 脉冲加密，低脉冲频率恰是其抑制作用的表达方式。',
    difficulty: 2,
  },
  {
    id: 'q-physiology-60',
    subjectId: 'physiology',
    chapterId: 'physiology-ch12',
    type: 'multiple',
    question: '血浆离子钙由 1.20 骤降至 1.00 mmol/L 时，可预期的内分泌联动包括：',
    options: [
      '甲状旁腺主细胞 CaSR 抑制解除，PTH 分泌迅速增多',
      '甲状腺 C 细胞降钙素分泌代偿增多，与 PTH 协同动员骨钙',
      'PTH 经骨液-骨细胞膜系统快相放钙，并经 RANKL 上调破骨细胞的持续相',
      '肾近端小管 1α 羟化酶上调，骨钙三醇合成增多、肠钙吸收增强',
    ],
    answer: [0, 2, 3],
    explanation:
      '血钙降低时 CaSR 抑制解除、PTH 迅速放量：经骨液泵快相与 RANKL-破骨慢相动员骨钙，远端小管保钙，并上调 1α 羟化酶使骨钙三醇合成增加、肠钙吸收增强，A、C、D 均正确。降钙素由甲状腺 C 细胞在高血钙时分泌、方向与升钙相反，低钙时其分泌减少而非增多——B 恰把方向说反，故选 A、C、D。',
    difficulty: 3,
  },
]
