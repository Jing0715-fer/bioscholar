// mt ch12-s4 转运蛋白演化总论与全书总结：演化时间线 · 异同四句诀 · 总结大表 · 展望
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、演化时间线：从 LUCA 到两界分途 =================
  b.panel(30, 132, 660, 445, { title: '一、演化时间线：转运蛋白的六次关键抉择' })
  const tl: [number, string, string, string][] = [
    [180, 'LUCA 阶段', 'F/V 旋转马达已分化', '一台顺流合成 ATP、一台逆流建梯度——同源马达反向使用，两界各拿一套'],
    [252, '细菌—真核', 'ABC 与 MFS 广布', 'ABC 从细菌输入体起家，MFS 成为最庞大的次级转运骨架'],
    [324, '真核扩张', 'P 型泵两次主引擎选择', '动物系选 P2C Na⁺/K⁺ 泵、植物真菌系选 P3A H⁺ 泵——环境化学的镜像'],
    [396, '后生动物', 'Nav 从 Cav 祖先进化', '伴随神经系统起源；LGIC 与突触共演化、SLC6 递质摄取家族登场'],
    [468, '绿色植物', 'γ 全基因组三倍化', '约 1.2–1.5 亿年前：ABC 约 130、NPF 53、CNGC 20、GLR 20 的大扩编'],
    [540, '两界现状', 'GLR 分化、TPC1 换岗、ClC 转运体化', '植物缺 Nav/Cav 改用 Cl⁻/K⁺ 门控加钙波——同源部件、两本职业账'],
  ]
  b.line(96, 168, 96, 552, { stroke: C.sub, sw: 2.2 })
  for (const [y, era, evt, note] of tl) {
    b.circle(96, y - 8, 6, { fill: C.acc, stroke: C.accD, sw: 1.5 })
    b.text(116, y - 12, era + ' ｜ ' + evt, { size: 10.5, weight: 700, fill: C.accD })
    b.wtext(116, y + 8, note, { size: 9, fill: C.sub, maxW: 540, lh: 17 })
  }

  // ================= 二、异同四句诀 =================
  b.panel(710, 132, 660, 445, { title: '二、动物与植物转运蛋白的异同四句诀' })
  const cards: [number, number, string, string, string, string, string][] = [
    [726, 176, '同超家族，不同成员数', 'AQP、ABC、P 型、V 型、MFS、CLC、ZIP、MATE 两界全在场——扩编史不同：动物 SLC 52 家族约 400 基因，拟南芥转运基因 >1000', C.dna, C.dnaL, C.dnaD],
    [1046, 176, '同机制，不同驱动离子', '次级转运都借一级泵的梯度——动物用 Na⁺ 币（SGLT/NHE/NCX），植物用 H⁺ 币（SUC/NRT/AMT），膜电位 −90 对 −200 mV', C.warn, C.warnL, C.warnD],
    [726, 388, '同家族，不同亚细胞定位', 'ClC 动物守质膜与内涵体、植物守液泡且 AtCLCa 已转运体化；TPC1 动物在溶酶体透 Na⁺、植物在液泡透 Ca²⁺', C.pro, C.proL, C.proD],
    [1046, 388, '同屏障，不同化学战场', '动物屏障对付药物与毒素（P-gp 血脑关口），植物屏障对付病原与除草剂（ABCG 角质层）；军备竞赛同一逻辑', C.enz, C.enzL, C.enzD],
  ]
  for (const [x, y, head, body, st, fl, tf] of cards) {
    b.rect(x, y, 300, 176, { fill: fl, stroke: st, sw: 1.8, rx: 10 })
    b.ctext(x + 150, y + 30, head, { size: 11.5, weight: 700, fill: tf })
    b.wtext(x + 16, y + 58, body, { size: 8.8, fill: C.sub, maxW: 268, lh: 18 })
  }

  // ================= 三、全书总结大表 =================
  b.panel(30, 592, 1340, 393, { title: '三、全书总结：通道 · 载体 · 泵三大家族的两界对照' })
  b.table(46, 630, 1308, {
    headers: ['家族', '动物代表', '植物代表', '共有性', '驱动力 / 功能主题'],
    rows: [
      ['Shaker 型 K⁺ 通道', 'Kv 40 基因复极', '拟南芥 9 个 K 物流（KAT1/SKOR）', '共有·反向用极', '电压门控；内向对外向整流'],
      ['Nav / Cav', '9+10 基因快信号', '缺如（电信号走 Cl⁻/K⁺）', '动物独有', '电压门控；动作电位升支'],
      ['LGIC / iGluR-GLR', 'nACh、GABA、AMPA/NMDA', 'GLR 20 个防御与根尖', '同源分化', '配体门控；突触对钙波'],
      ['CNGC / CNG', '6 个视觉嗅觉', '20 个免疫发育钙内流', '共有·植物扩编', '环核苷酸门控；cAMP/Ca²⁺'],
      ['ClC', '9 个质膜内涵体 Cl⁻', '7 个液泡，AtCLCa 硝酸/H⁺', '共有·功能转化', '通道到转运体的演化范例'],
      ['水通道 AQP/MIP', '13 个（AQP2 肾浓缩）', '35 个（PIP/TIP/NIP/SIP）', '共有·植物扩编', '渗透水导；NIP 特化硼硅'],
      ['GLUT / STP-SUC', 'GLUT 14 个血糖稳态', 'STP 14＋SUC 9 蔗糖装载', '平行体系', 'MFS 易化扩散与 H⁺ 同向'],
      ['SWEET', '1 个（SLC50A1）', '17 个筛分子装载', '共有·植物扩编', '糖外排；病原劫持 OsSWEET14'],
      ['P 型 ATPase', 'Na⁺/K⁺ 泵 3:2 生电', 'AHA 11 个质子主引擎', '共有·两次选择', '磷酰化中间体；Na⁺ 币对 H⁺ 币'],
      ['V 型 ATPase', '溶酶体酸化 pH 4.5', '液泡双引擎之一（VHA）', '共有', '旋转马达水解建梯度'],
      ['V-PPase', '缺如', 'AVP1 焦磷酸廉价能源', '植物独有', 'PPi ΔG 约 −27 kJ/mol 回收'],
      ['F 型 ATP 合酶', '线粒体 8c 约 2.7 H⁺/ATP', '叶绿体 14c 约 4.7 H⁺/ATP', '共有·税率不同', '旋转催化；Boyer 结合变化'],
      ['SLC / NPF-MFS', '52 家族约 400 基因', 'NPF 53＋NRT2/AMT/PHT/SULTR', '平行体系', 'Na⁺ 对 H⁺ 梯度的次级转运'],
      ['ABC 转运体', '48 基因（P-gp/CFTR）', '约 130 个（ABCB/ABCG/ABCC）', '共有·植物扩编', 'ATP 直接水解；屏障与外排'],
      ['NCX / CAX', 'NCX 3Na⁺:1Ca²⁺ 心肌', 'CAX 11 个液泡钙刹车', '殊途同归', '都借单价梯度抬二价钙'],
      ['ZIP / HMA', 'ZIP 14＋ZnT 10', 'ZIP 15＋HMA2/4 装载', '共有·分化前', '铁锌铜的输入与区室化'],
    ],
    fontSize: 8.2,
    rowH: 17,
    colW: [180, 240, 250, 190, 448],
  })
  b.wtext(46, 972, '展望：转运体合成生物学正尝试给 C₃ 作物装上 CO₂ 浓缩泵（CCM/C₄ 化），精准医学则把 P-gp、SGLT2、CFTR 变成药物靶标——「读懂两界的转运账本」正在变成「改写账本」', { size: 9.5, weight: 600, fill: C.accD, maxW: 1300, lh: 20 })
}

export default scene({
  title: '演化总结与全书异同：一部两界的转运账本',
  subtitle:
    '六次关键抉择塑造两界版图：LUCA 的 F/V 马达分化、ABC 与 MFS 广布、P 型泵两次主引擎选择、后生动物 Nav 进化、绿色植物三倍化大扩编；异同四句诀——同超家族不同成员数、同机制不同驱动离子、同家族不同亚细胞定位、同屏障不同化学战场；十六行总结大表收拢全书：通道、载体、泵三大家族在动物与植物中的代表、共有性与功能主题',
  draw,
})
