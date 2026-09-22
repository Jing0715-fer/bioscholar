// sb ch1-s1 从序列到结构：结构生物学的使命（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、中心命题与 Anfinsen 复性实验 ============
  b.panel(30, 132, 660, 430, { title: '一、中心命题与 Anfinsen 复性实验' })
  b.wtext(50, 172, '结构生物学在原子分辨率水平研究生物大分子三维结构，用原子坐标解释生命现象；催化、识别与变构的最终答案不在序列的线性排列里，而在折叠形成的活性位点、结合口袋与别构通路之中。', { maxW: 610, lh: 15, size: 10.5, fill: C.sub })
  b.tag(118, 226, '一级结构：氨基酸序列', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.arrow(186, 226, 214, 226, { stroke: C.sub, sw: 1.8 })
  b.tag(300, 226, '三维折叠：口袋、通路与别构', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 8 })
  b.arrow(386, 226, 414, 226, { stroke: C.sub, sw: 1.8 })
  b.tag(492, 226, '功能：催化·识别·调节', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 8 })
  // Anfinsen 三管实验
  const tube = (x: number, yTop: number, h: number, liq: string) => {
    const r = 14
    const bot = yTop + h
    const yL = yTop + 20
    b.path(`M ${x - r},${yL} L ${x - r},${bot - r} A ${r},${r} 0 0 0 ${x + r},${bot - r} L ${x + r},${yL} Z`, { fill: liq, opacity: 0.85 })
    b.path(`M ${x - r},${yTop} L ${x - r},${bot - r} A ${r},${r} 0 0 0 ${x + r},${bot - r} L ${x + r},${yTop}`, { fill: 'none', stroke: C.sub, sw: 2 })
    b.line(x - r - 4, yTop, x + r + 4, yTop, { stroke: C.sub, sw: 2.6 })
  }
  tube(140, 256, 86, C.proL)
  tube(310, 256, 86, '#f1f5f9')
  tube(480, 256, 86, C.proL)
  // 管内容物：天然折叠、伸展、复折叠
  b.circle(140, 300, 11, { fill: C.pro, fillOp: 0.8 })
  b.path('M 133,296 q 7,-7 14,0 q -7,7 -14,0', { fill: 'none', stroke: C.proD, sw: 1.4 })
  b.path('M 297,304 q 6,-14 12,0 q 6,14 12,0 q 6,-14 12,0', { fill: 'none', stroke: C.bad, sw: 1.8 })
  b.circle(480, 300, 11, { fill: C.pro, fillOp: 0.8 })
  b.path('M 473,296 q 7,-7 14,0 q -7,7 -14,0', { fill: 'none', stroke: C.proD, sw: 1.4 })
  b.arrow(162, 300, 288, 300, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(225, 281, '盐酸胍＋还原剂', { size: 10.5, weight: 700, fill: C.badD })
  b.arrow(332, 300, 458, 300, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.ctext(395, 281, '透析去除变性剂', { size: 10.5, weight: 700, fill: C.okD })
  b.ctext(140, 366, '天然 RNase A', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(310, 366, '伸展的无规卷曲', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(480, 366, '重建天然构象', { size: 10.5, weight: 600, fill: C.sub })
  b.tag(340, 404, '复性后活性几乎完全恢复——一级结构已蕴含折叠所需的全部信息', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 10 })
  b.wtext(50, 434, '「热力学假说」为 Anfinsen 赢得 1972 年诺贝尔化学奖。其后折叠漏斗、分子伴娘与体内纠错的研究不断划出这条原理的边界，但作为一级结构与三维结构因果链的首次实验演示，它始终是学科的起点。', { maxW: 610, lh: 15, size: 10.5, fill: C.sub })
  b.wtext(50, 490, '直接从序列推算结构长期是最困难的计算问题之一，实验测定始终是结构生物学的立身之本——这正是本课程以「实验方法」为题的原因。', { maxW: 610, lh: 15, size: 10.5, fill: C.sub })

  // ============ 二、两座数据库 ============
  b.panel(710, 132, 660, 430, { title: '二、两座数据库：PDB 与 AlphaFold DB' })
  b.wtext(730, 172, '衡量学科规模最直观的尺子是数据库：PDB 1971 年建于布鲁克海文国家实验室，起步仅 13 个结构；到 2024 年，其存量已超过 22 万条，每年新增逾万条。', { maxW: 600, lh: 15, size: 10.5, fill: C.sub })
  b.tag(880, 240, '存量约八成五来自 X 射线晶体学', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(1180, 240, 'AlphaFold DB：约 2 亿条 UniProt 预测', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.axis(760, 470, 500, 170, {
    title: 'PDB 条目数（对数刻度）',
    xlabel: '年份', ylabel: '条目数',
    xticks: [[0, '1971'], [0.7, '2008'], [0.81, '2014'], [1, '2024']],
    yticks: [[0, '10^{1}'], [0.44, '10^{3}'], [0.87, '10^{5}']],
  })
  b.curve(760, 470, 500, 170, [[0, 0.03], [0.3, 0.09], [0.55, 0.32], [0.7, 0.8], [0.81, 0.87], [1, 0.945]], { smooth: true, stroke: C.acc, sw: 2.6 })
  const dots: Array<[number, number, string, number]> = [[0, 0.03, '13 条', -1], [0.7, 0.8, '5 万', 1], [0.81, 0.87, '10 万', 1], [1, 0.945, '逾 22 万', 1]]
  for (const [fx, fy, lab, dir] of dots) {
    const px = 760 + fx * 500
    const py = 470 - fy * 170
    b.circle(px, py, 4.5, { fill: C.accD, stroke: '#ffffff', sw: 1.2 })
    b.ctext(px, py + dir * 18, lab, { size: 10, weight: 700, fill: C.accD })
  }
  b.wtext(730, 530, '指数曲线背后是同步辐射光源、直接电子探测相机与机器人化结晶筛选三类基础设施的接力；2003 年起 PDB 由 wwPDB 联盟共治——RCSB、PDBe、PDBj 三中心同源同步，条目须通过统一验证方可发布。', { maxW: 600, lh: 14, size: 10, fill: C.sub })

  // ============ 三、四类经典问题 ============
  b.panel(30, 578, 660, 380, { title: '三、结构生物学回答的四类经典问题' })
  // 酶催化（溶菌酶）
  b.ellipse(80, 634, 22, 16, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.polygon([[104, 626], [112, 631], [112, 641], [104, 646], [96, 641], [96, 631]], { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.arrow(104, 634, 90, 634, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.text(130, 620, '① 酶催化机制', { size: 12, weight: 700, fill: C.ink })
  b.wtext(130, 638, '1965 年 Phillips 团队以 2 Å 解析鸡蛋清溶菌酶，Glu35 与 Asp52 协同断裂糖苷键，底物 D 环被结合能挤压成半椅式构象——催化应变学说的经典例证。', { maxW: 540, lh: 15, size: 10.5, fill: C.sub })
  // 分子识别（抗原-抗体）
  b.path('M 72,722 L 72,706 L 64,694 M 72,706 L 80,694', { fill: 'none', stroke: C.acc, sw: 2.2 })
  b.ellipse(98, 690, 11, 9, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.text(130, 692, '② 分子识别', { size: 12, weight: 700, fill: C.ink })
  b.wtext(130, 710, '抗原-抗体界面由约 17 个抗体残基与十余个抗原残基互补堆叠，埋藏面积常达 600 至 900 Å^{2}，并非刚性锁钥，而是诱导契合的动态匹配。', { maxW: 540, lh: 15, size: 10.5, fill: C.sub })
  // 变构调节（血红蛋白）
  b.circle(76, 770, 8, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.circle(94, 770, 8, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.circle(76, 786, 8, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.circle(94, 786, 8, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.text(130, 764, '③ 变构调节', { size: 12, weight: 700, fill: C.ink })
  b.wtext(130, 782, '血红蛋白在 T 态与 R 态之间转换，氧合伴随离子键网络断裂、亚基相对转动与铁原子约 0.6 Å 位移，为 MWC 齐变模型提供结构注脚。', { maxW: 540, lh: 15, size: 10.5, fill: C.sub })
  // 药物设计（HIV 蛋白酶）
  b.ellipse(78, 850, 13, 17, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ellipse(106, 850, 13, 17, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.line(92, 830, 92, 870, { stroke: C.mute, sw: 1.4, dash: '4 4' })
  b.polygon([[86, 850], [92, 844], [98, 850], [92, 856]], { fill: C.warn, fillOp: 0.85 })
  b.text(130, 836, '④ 基于结构的药物设计', { size: 12, weight: 700, fill: C.ink })
  b.wtext(130, 854, 'HIV 蛋白酶是具 C2 对称性的同源二聚体天冬氨酸蛋白酶，依活性位点几何设计的抑制剂沙奎那韦 1995 年获批上市，此后联合疗法将艾滋病转变为可长期管理的慢性病。', { maxW: 540, lh: 15, size: 10.5, fill: C.sub })
  b.wtext(50, 912, '四类问题是结构知识解释力的试金石；学会用 PyMOL 或 ChimeraX 打开 PDB 坐标文件审视结论，是本课程的第一项课外作业。', { maxW: 600, lh: 14, size: 10, fill: C.mute })

  // ============ 四、序列一致性与折叠保守性 ============
  b.panel(710, 578, 660, 380, { title: '四、序列一致性与折叠保守性' })
  b.wtext(730, 616, 'Chothia 与 Lesk（1986）的定量规律：一致性约 30% 时可叠合核心残基约占一半，50% 时升至约三分之二。', { maxW: 600, lh: 13, size: 10, fill: C.mute })
  b.axis(790, 838, 450, 190, {
    xlabel: '两条序列的残基一致性（%）', ylabel: '核心残基',
    xticks: [[0, '0'], [0.2, '20'], [0.3, '30'], [0.5, '50'], [0.7, '70'], [1, '100']],
    yticks: [[0, '0'], [0.5, '50%'], [1, '100%']],
  })
  // 三个区间
  b.rect(790, 648, 90, 190, { fill: C.badL, fillOp: 0.5 })
  b.rect(880, 648, 45, 190, { fill: C.warnL, fillOp: 0.55 })
  b.rect(925, 648, 315, 190, { fill: C.okL, fillOp: 0.4 })
  b.line(880, 648, 880, 838, { stroke: C.mute, sw: 1.2, dash: '5 4' })
  b.line(925, 648, 925, 838, { stroke: C.mute, sw: 1.2, dash: '5 4' })
  b.ctext(835, 672, '暮光区', { size: 10, weight: 700, fill: C.badD })
  b.ctext(902, 672, '过渡', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(1082, 672, '同源模建可行（高于约 30%）', { size: 10, weight: 700, fill: C.okD })
  b.curve(790, 838, 450, 190, [[0.02, 0.06], [0.2, 0.28], [0.3, 0.5], [0.5, 0.67], [0.75, 0.85], [1, 0.96]], { smooth: true, stroke: C.pro, sw: 2.6 })
  b.circle(925, 743, 4.5, { fill: C.proD, stroke: '#ffffff', sw: 1.2 })
  b.circle(1015, 710.7, 4.5, { fill: C.proD, stroke: '#ffffff', sw: 1.2 })
  b.text(935, 758, '一致性 30%：核心约一半', { size: 10, weight: 700, fill: C.proD })
  b.text(1025, 700, '50%：约三分之二', { size: 10, weight: 700, fill: C.proD })
  b.wtext(730, 906, '一致性低于 20% 进入暮光区，结构发散陡然加速；高于约 30% 几乎总能共享总体折叠。SCOP 与 CATH 把数十万个结构域归并为约一千余种折叠——折叠方案有限，结构比序列更适合充当功能的稳定预测器。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
}

export default scene({
  title: '从序列到结构：结构生物学的使命',
  subtitle: '中心命题「结构决定功能」：Anfinsen 复性实验确立热力学假说（1972 年诺奖）；PDB 由 13 条增至逾 22 万条、约八成五来自晶体学；序列一致性高于约 30% 即可同源模建',
  draw,
})
