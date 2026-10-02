// mt ch9-s4 动植物 ABC 对照：共同祖型 · 军备竞赛平行 · 区室化分工 · 退役再就业（学科招牌对照图）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、共同祖型与双栏演化 =================
  b.panel(30, 132, 1340, 232, { title: '一、共同祖型：外排屏障的双栏演化' })
  b.rect(540, 160, 320, 56, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 10 })
  b.ctext(700, 182, '共同祖型：外排屏障（脂质·异生物质）', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(700, 202, '细菌 MsbA 翻转脂质 A——比动植物分家更古老', { size: 9.5, fill: C.sub })
  b.arrow(620, 216, 380, 256, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.arrow(780, 216, 1020, 256, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.rect(110, 262, 540, 74, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.8, rx: 10 })
  b.ctext(380, 284, '动物：屏障医学化（守体内环境）', { size: 12, weight: 700, fill: C.accD })
  b.wtext(126, 306, '血脑屏障 P-gp 挡神经毒物 · 胎盘 ABCB/ABCG 挡致畸物 · 肠肝 ABCG5/G8 挡植物固醇 · 胆小管 MRP2 排出代谢结合物', { size: 9.5, fill: C.sub, maxW: 505, lh: 16 })
  b.rect(750, 262, 540, 74, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.8, rx: 10 })
  b.ctext(1020, 284, '植物：屏障生态化（开体外疆域）', { size: 12, weight: 700, fill: C.okD })
  b.wtext(766, 306, '角质层蜡质由 ABCG 铺设 · 根际分泌由 ABCB/ABCG 执行 · 木质素单体出发筑墙 · 生长素定向外送指挥发育', { size: 9.5, fill: C.sub, maxW: 505, lh: 16 })
  b.ctext(700, 350, '一个向内守稳态、一个向外拓生态位——机制同源同构；底物化学趋同：亲脂、都从膜的胞质小叶「舀」底物', { size: 10, weight: 600, fill: C.sub })

  // ================= 二、军备竞赛的平行版本 =================
  b.panel(30, 379, 660, 283, { title: '二、军备竞赛的平行版本' })
  b.rect(140, 396, 440, 34, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 17 })
  b.ctext(360, 417, '选择压力 × 外排泵 ＝ 耐药（两边通用）', { size: 13, weight: 700, fill: C.warnD })
  b.line(350, 445, 350, 620, { stroke: C.faint, sw: 1.2, dash: '6 5' })
  // 医学版本
  b.text(46, 456, '医学版本：化疗对肿瘤', { size: 11, weight: 700, fill: C.badD })
  b.rect(46, 468, 292, 34, { fill: C.panelB, stroke: C.faint, sw: 1.3, rx: 8 })
  b.ctext(192, 490, '化疗反复施加选择压力', { size: 10, weight: 600, fill: C.sub })
  b.arrow(192, 504, 192, 514, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(46, 516, 292, 52, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(192, 538, '肿瘤 P-gp 高表达', { size: 10, weight: 600, fill: C.badD })
  b.ctext(192, 556, '结构不相关的药物同时失效', { size: 9.5, fill: C.badD })
  b.arrow(192, 570, 192, 580, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(46, 582, 292, 34, { fill: C.panelB, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(192, 604, '多药耐药（MDR）', { size: 10, weight: 700, fill: C.badD })
  // 农业版本
  b.text(358, 456, '农业版本：除草剂对杂草', { size: 11, weight: 700, fill: C.okD })
  b.rect(358, 468, 292, 34, { fill: C.panelB, stroke: C.faint, sw: 1.3, rx: 8 })
  b.ctext(504, 490, '除草剂反复施加选择压力', { size: 10, weight: 600, fill: C.sub })
  b.arrow(504, 504, 504, 514, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.rect(358, 516, 292, 52, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(504, 538, '多抗性杂草 ABC 表达升高', { size: 10, weight: 600, fill: C.okD })
  b.ctext(504, 556, '外排开大·加拿大蓬以 ABCC 隔离草甘膦入液泡', { size: 9.5, fill: C.okD })
  b.arrow(504, 570, 504, 580, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.rect(358, 582, 292, 34, { fill: C.panelB, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(504, 604, '除草剂抗性', { size: 10, weight: 700, fill: C.okD })
  b.wtext(46, 634, '肿瘤学的对策：想「关泵」——维拉帕米类抑制剂三十年屡屡碰壁，「关泵容易、选择性难」', { size: 9.5, fill: C.sub, maxW: 292, lh: 16 })
  b.wtext(358, 634, '农学的对策：想「开泵」——安全剂反向开大作物的 ABCC，同一蛋白家族一关一开', { size: 9.5, fill: C.sub, maxW: 292, lh: 16 })

  // ================= 三、区室化分工：植物液泡对动物肝肾 =================
  b.panel(710, 379, 660, 283, { title: '三、区室化分工：植物液泡对动物肝肾' })
  b.text(726, 422, '植物细胞：液泡＝分子保险库', { size: 11, weight: 700, fill: C.okD })
  b.rect(726, 430, 300, 170, { fill: C.okL, fillOp: 0.35, stroke: C.ok, sw: 2, rx: 20 })
  b.ellipse(876, 515, 102, 60, { fill: C.accL, fillOp: 0.7, stroke: C.acc, sw: 2.2 })
  b.ctext(876, 510, '液泡', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(876, 532, '占成熟细胞体积 80% 以上', { size: 9, fill: C.sub })
  b.rect(846, 448, 60, 20, { fill: '#ffffff', stroke: C.enz, sw: 1.8, rx: 5 })
  b.ctext(876, 462, 'ABCC1/2', { size: 7, weight: 700, fill: C.enzD })
  b.circle(770, 470, 4, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.circle(790, 480, 4, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.arrow(798, 476, 844, 460, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.text(1050, 422, '动物细胞：肝肾排泄为主', { size: 11, weight: 700, fill: C.accD })
  b.rect(1050, 430, 300, 170, { fill: C.panelB, stroke: C.acc, sw: 2, rx: 20 })
  b.circle(1140, 476, 17, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1140, 508, '溶酶体（数百纳米·较弱）', { size: 8.5, fill: C.badD })
  b.rect(1122, 452, 36, 16, { fill: '#ffffff', stroke: C.bad, sw: 1.5, rx: 4 })
  b.ctext(1140, 462, 'MRP4', { size: 6.5, weight: 700, fill: C.badD })
  b.arrow(1180, 468, 1330, 448, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1180, 495, 1330, 518, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(1062, 556, '肝脏经胆汁、肾脏经尿液把毒物真正排出体外；MRP4 还外排 cAMP、前列腺素等有机阴离子——不只看门，也送信', { size: 9.5, fill: C.sub, maxW: 275, lh: 16 })
  b.wtext(726, 618, '无排泄器官——只能区室化隔离，或把毒素随落叶、落果丢弃（「落叶归根」＝一次排毒）；金属走 CAX/MTP 入液泡', { size: 9.5, fill: C.sub, maxW: 300, lh: 16 })
  b.wtext(1050, 618, '溶酶体也收留金属与异物（MRP4 参与），但主力地位远不及植物液泡——仓库大小决定策略权重', { size: 9.5, fill: C.sub, maxW: 300, lh: 16 })

  // ================= 四、退役再就业与全景对照表 =================
  b.panel(30, 675, 1340, 310, { title: '四、「退役」ABC 再就业与全景对照表' })
  b.text(46, 726, '「退役」ABC 的两条出路', { size: 11.5, weight: 700, fill: C.proD })
  b.tag(100, 754, 'ABC 转运体', { fill: C.panelB, stroke: C.line, tfill: C.sub, size: 10, weight: 600 })
  b.arrow(162, 754, 200, 754, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.tag(248, 754, 'CFTR', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10, weight: 700 })
  b.text(300, 758, '换上「通道臂」＝Cl^{-} 通道', { size: 9.5, fill: C.sub })
  b.tag(100, 792, 'ABC 转运体', { fill: C.panelB, stroke: C.line, tfill: C.sub, size: 10, weight: 600 })
  b.arrow(162, 792, 200, 792, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.tag(252, 792, 'ABCE1/RLI', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10, weight: 700 })
  b.text(306, 796, '拆掉工作臂＝核糖体循环因子＋抗病毒', { size: 9.5, fill: C.sub })
  b.text(46, 822, 'ABCE1 在几乎所有真核基因组近乎单拷贝、极少旁系——「退役」反而成了不可或缺的管家', { size: 9.5, fill: C.sub })
  b.rect(46, 836, 454, 60, { fill: C.panelB, stroke: C.pro, sw: 1.5, rx: 9 })
  b.wtext(60, 856, 'NBD 发动机才是模块化设计的核心，TMD 只是可替换的「工作臂」——这正是 ABC 家族横跨三界、包揽万千底物的工程学根源', { size: 9.5, fill: C.sub, maxW: 425, lh: 17 })
  b.wtext(46, 912, '读表三条：① ABCA–ABCG 七亚族两侧共有——真核祖先基因库里亚族雏形已各就各位；② 最强亚族错位——动物以 ABCC/MRP 分泌屏障见长，植物 ABCG 一族独大；③ 无 TMD 的 ABCE/ABCF 两侧同在——NBD 模块早就在翻译机器里「再就业」', { size: 9.5, fill: C.sub, maxW: 450, lh: 16 })
  b.table(520, 724, 836, {
    title: '亚族 × 动物 × 植物 × 功能全景对照',
    headers: ['亚族', '动物代表（人 ≈48）', '植物代表（拟南芥 ≈130）', '代表功能', '共有性'],
    colW: [64, 190, 210, 250, 122], rowH: 26, fontSize: 9.5,
    rows: [
      ['ABCA', 'ABCA1', '少量成员', '磷脂/胆固醇外排、HDL 装配', '共有'],
      ['ABCB', 'P-gp、TAP1/2', 'ABCB1/19 生长素外排', '药物外排；激素极性运输', '共有'],
      ['ABCC', 'MRP1–9、CFTR', 'ABCC1/2 液泡隔离', '结合物屏障外排与液泡隔离', '共有'],
      ['ABCD', 'ABCD1（VLCFA 输入）', 'PXA1 等', '过氧化物酶体代谢物输入', '共有'],
      ['ABCE', 'ABCE1/RLI（无 TMD）', 'RLI 同源物（无 TMD）', '核糖体循环、翻译与抗病毒', '共有'],
      ['ABCF', 'ABCF1–3（无 TMD）', 'ABCF（无 TMD）', '翻译起始与应激调控', '共有'],
      ['ABCG', 'ABCG5/G8 异二聚体', '最大亚族 40 余个', '固醇外排；蜡质/抗菌物外运', '共有'],
      ['ABCI', '无对应', '多个成员', '叶绿体功能与金属耐受', '植物特有'],
    ],
  })
}

export default scene({
  title: '动植物 ABC 对照：同一台发动机，两台不同的车',
  subtitle: '共同祖型是脂质与异生物质的外排屏障（细菌 MsbA 已练成翻转酶看家本领）；动物把屏障医学化——血脑 P-gp、胎盘与肠肝关口，植物把屏障生态化——角质层 ABCG 与根际外排；化疗多药耐药与除草剂抗性是同一军备竞赛逻辑的医学/农业版本；植物液泡 ABCC 隔离对动物肝肾排泄；CFTR 转行氯通道、ABCE1 丢失 TMD 再就业核糖体循环',
  draw,
})
