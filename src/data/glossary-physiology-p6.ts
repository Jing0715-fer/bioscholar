// ============================================================
// 生理学术语词典 - 批次 P6（10 条，g-385 ~ g-394）
// 由内容代理 44-b6 编写，subjectId 均为 physiology
// 类别分布：肾脏 6 / 内分泌 2 / 钙磷 1 / 生殖 1
// 依据：Guyton & Hall 第14版、Boron & Boulpaep 第3版、王庭槐《生理学》人卫第9版
// 及本学科第 11–12 章教材正文
// ============================================================

import type { GlossaryTerm } from '@/lib/types'

export const physiologyGlossaryP6: GlossaryTerm[] = [
  // ---------- 肾脏（6 条） ----------
  {
    id: 'g-385',
    term: '肾小球滤过率',
    english: 'glomerular filtration rate',
    abbreviation: 'GFR',
    subjectId: 'physiology',
    category: '肾脏',
    definition:
      '单位时间内经肾小球滤入 Bowman 囊的血浆体积，正常约 125 ml/min，每昼夜滤过约 180 L。由净滤过压（肾小球毛细血管压约 60 − 血浆胶体渗透压 32–36 − 囊内压 18 mmHg，净约 10 mmHg）与滤过系数 Kf 共同决定，并被肌源性反应与管球反馈稳定在平均动脉压 80–180 mmHg 的自身调节平台上。以菊粉清除率为金标准，临床以肌酐清除率近似替代。',
  },
  {
    id: 'g-386',
    term: '菊粉清除率',
    english: 'inulin clearance',
    subjectId: 'physiology',
    category: '肾脏',
    definition:
      '静脉输注的外源性果糖聚合物菊粉经肾小球自由滤过，既不被肾小管重吸收也不被分泌，其清除率 U×V/P 恰等于 GFR，是测定肾小球滤过率的金标准。肌酐因有少量小管分泌，清除率常略高于真实 GFR；对氨基马尿酸清除率则近似有效肾血浆流量。三种清除率与滤过分数共同构成肾功能定量测量的经典框架。',
  },
  {
    id: 'g-387',
    term: 'Na⁺-K⁺-2Cl⁻ 同向转运体',
    english: 'Na-K-2Cl cotransporter 2',
    abbreviation: 'NKCC2',
    subjectId: 'physiology',
    category: '肾脏',
    definition:
      '亨利襻粗升支顶膜的钠-钾-2 氯同向转运体，以钠梯度二级主动成套回收 NaCl 而不伴水，使管液稀释并建立外髓渗透梯度，是逆流倍增的发动机。其 K⁺ 经 ROMK 回漏形成的管腔正电位（约 +8 mV）顺带驱动 Ca²⁺、Mg²⁺ 的细胞旁重吸收。呋塞米等袢利尿剂的结合靶点；Bartter 综合征即其相关基因突变所致。',
  },
  {
    id: 'g-388',
    term: '逆流倍增',
    english: 'countercurrent multiplication',
    subjectId: 'physiology',
    category: '肾脏',
    definition:
      '亨利襻发夹几何结构放大小管液渗透差的机制：粗升支单次「抽盐」仅产生约 200 mOsm 的单效应，但降支透水浓缩、升支持续抽盐的对流使效应沿髓质纵深级联累积，把间质渗透压从皮质缘的 300 放大至乳头的约 1200 mOsm/kg。一次耗能、多重放大的效率设计，是浓缩尿的结构与经济学基础；直血管的逆流交换则守护这一梯度不被血流冲刷。',
  },
  {
    id: 'g-389',
    term: '抗利尿激素',
    english: 'antidiuretic hormone',
    abbreviation: 'ADH',
    subjectId: 'physiology',
    category: '内分泌',
    definition:
      '下丘脑视上核与室旁核合成、经轴突运输至神经垂体贮存的九肽，又称血管加压素（AVP）。高渗（渗透感受器阈值约 280–290 mOsm）与低容量刺激其释放；经集合管 V₂ 受体-cAMP-AQP2 磷酸化插入链开放水通道以浓缩尿液，大剂量经 V₁ 受体收缩血管。缺乏致中枢性尿崩症，肾脏应答缺陷致肾性尿崩症，分泌不当致 SIADH。',
  },
  {
    id: 'g-390',
    term: '可滴定酸',
    english: 'titratable acid',
    subjectId: 'physiology',
    category: '肾脏',
    definition:
      '以碱把尿样滴定回血浆 pH（7.4）所消耗的碱量，代表以缓冲盐形式（主要为 H₂PO₄⁻）排出的酸。受肾小球滤过的磷酸盐量封顶，约占净酸排泄的三分之一且几无上调余地；铵排酸约占三分之二并可数倍放大。净酸排泄 = 可滴定酸 + NH₄⁺ − 排出的 HCO₃⁻，普通饮食下约 50–100 mEq/日，与固定酸产量相当。',
  },
  {
    id: 'g-391',
    term: '阴离子间隙',
    english: 'anion gap',
    abbreviation: 'AG',
    subjectId: 'physiology',
    category: '肾脏',
    definition:
      '血浆 [Na⁺] − ([Cl⁻] + [HCO₃⁻])，正常约 8–12 mEq/L，本质是未常规测定的阴离子（以白蛋白为主）的影子。代谢性酸中毒按 AG 升高与否分流：升高提示乳酸、酮体、毒物代谢物等新增加的阴离子蓄积（MUDPILES 谱）；正常则提示碳酸氢盐经胃肠或肾脏丢失而氯代偿性升高。一个减法把代酸病因劈成两个世界。',
  },
  // ---------- 内分泌与钙磷（3 条） ----------
  {
    id: 'g-392',
    term: '垂体门脉系统',
    english: 'hypothalamic-pituitary portal system',
    subjectId: 'physiology',
    category: '内分泌',
    definition:
      '连接下丘脑正中隆起初级毛细血管网与腺垂体次级毛细血管网的短门静脉通路。下丘脑释放与抑制激素经此以远高于体循环的浓度直达腺垂体细胞，几乎不被稀释——专线快递保证下丘脑对垂体的精密遥控。与之相对，神经垂体是下丘脑大细胞神经元的轴突延伸，ADH 与催产素沿轴突运输至后叶，以神经分泌方式释放入血。',
  },
  {
    id: 'g-393',
    term: '骨钙三醇',
    english: 'calcitriol',
    subjectId: 'physiology',
    category: '钙磷代谢',
    definition:
      '维生素 D 的活性形式（1,25(OH)₂D₃）：皮肤合成的 D₃ 经肝 25-羟化、肾近端小管 1α-羟化两级活化而成，后者受 PTH 与血磷精密调节、受 FGF23 抑制。与核受体结合诱导小肠钙结合蛋白与 TRPV6 通道，成倍提升肠钙磷吸收；允许骨的正常矿化，并抑制甲状旁腺 PTH 基因。缺乏致佝偻病与骨软化症。',
  },
  // ---------- 生殖（1 条） ----------
  {
    id: 'g-394',
    term: 'LH 峰',
    english: 'LH surge',
    subjectId: 'physiology',
    category: '生殖',
    definition:
      '月经周期晚卵泡期持续高浓度雌二醇（约 200 pg/ml 逾 48 小时）把垂体由负反馈敏化为正反馈后爆发的黄体生成素高峰，排卵约发生于峰起始后 36 小时。它启动卵泡壁蛋白水解、前列腺素合成与卵丘扩展，并使残余卵泡黄体化。hCG 与 LH 共享 α 亚基并具 LH 样活性，故能在早孕以「持续 LH 峰」的方式救援黄体。',
  },
]
