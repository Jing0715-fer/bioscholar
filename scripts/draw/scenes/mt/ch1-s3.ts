// mt ch1-s3 转运蛋白分类总框架与动植物总览（本学科招牌图）
// 面板：一、通道/载体/泵三分法总树（速率 10^7–10^8 vs 10^2–10^4 vs ATP 直接水解 + TC 分类）
//       二、基因版图双栏（动物约 900：SLC 52 家族约 400、ABC 48、P 型约 40、通道约 400
//           vs 拟南芥 >1000 占 3%–4%：AHA 11、AQP 35、ABC 约 130、NPF 53、CNGC 20、GLR 20、CAX 11）
//       三、主引擎对照（动物 Na+/K+-ATPase vs 植物 H+-ATPase 两台引擎）
//       四、共有/独有家族清单（共有 AQP/ABC/P 型/V 型/MFS/CLC/ZIP/MATE；动物 Nav/Cav/NCX/LGIC；植物 HKT/NRT/BOR/SWEET）
// Task ID: 46-c1
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三分法总树 ============
  b.panel(30, 132, 660, 420, { title: '一、三分法总树：通道 · 载体 · 泵' })
  b.tag(360, 186, '转运蛋白：按速率与能量学分三家', { size: 15, weight: 700, fill: C.panelB, stroke: C.sub, tfill: C.ink, pad: 14 })
  b.arrow(340, 202, 148, 226, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(360, 202, 360, 226, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(380, 202, 572, 226, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // 三个子框
  b.rect(42, 228, 195, 48, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 9 })
  b.ctext(139, 252, '离子通道', { size: 15, weight: 700, fill: C.accD })
  b.ctext(139, 270, '10^{7}–10^{8} 离子/s', { size: 11, weight: 600, fill: C.accD })
  b.rect(262, 228, 195, 48, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 9 })
  b.ctext(359, 252, '载体', { size: 15, weight: 700, fill: C.proD })
  b.ctext(359, 270, '10^{2}–10^{4} 分子/s', { size: 11, weight: 600, fill: C.proD })
  b.rect(482, 228, 195, 48, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 9 })
  b.ctext(579, 252, '泵', { size: 15, weight: 700, fill: C.enzD })
  b.ctext(579, 270, '直接水解 ATP', { size: 11, weight: 600, fill: C.enzD })
  // 三列特性
  b.text(48, 302, '带闸门的水孔，开放即顺梯度蜂拥而过', { size: 10.5, fill: C.sub })
  b.text(48, 324, '速率与驱动力成比例、永不饱和、可双向', { size: 10.5, fill: C.sub })
  b.text(48, 346, '门控三型：电压 / 配体 / 机械', { size: 10.5, fill: C.sub })
  b.text(48, 368, '代表：KcsA、nAChR、KAT1', { size: 10.5, fill: C.mute })
  b.text(268, 302, '与底物可逆结合，构象交替换位', { size: 10.5, fill: C.sub })
  b.text(268, 324, '饱和曲线（Vmax、Km），可竞争抑制', { size: 10.5, fill: C.sub })
  b.text(268, 346, '耦联三式：uniport / symport / antiport', { size: 10.5, fill: C.sub })
  b.text(268, 368, '代表：GLUT1、SGLT1、NRT1.1', { size: 10.5, fill: C.mute })
  b.text(488, 302, '消耗 ATP 等高能键逆梯度搬运', { size: 10.5, fill: C.sub })
  b.text(488, 324, '速率有限却能创造梯度——发钞行', { size: 10.5, fill: C.sub })
  b.text(488, 346, '初级（水解 ATP）/ 次级（借梯度）', { size: 10.5, fill: C.sub })
  b.text(488, 368, '代表：Na^{+}/K^{+}-ATPase、AHA2', { size: 10.5, fill: C.mute })
  // TC 分类框
  b.rect(50, 392, 600, 96, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.text(66, 418, 'TC 分类系统（Saier）：跨类群查家谱的通用坐标系', { size: 12.5, weight: 700, fill: C.sub })
  b.text(66, 444, '1 类 通道与孔道 · 2 类 梯度驱动载体 · 3 类 水解含磷高能键的初级泵', { size: 10.5, fill: C.sub })
  b.text(66, 466, '以拓扑、机制与序列同源逐级编号——判断两个家族是否同源的标准坐标', { size: 10.5, fill: C.sub })
  b.wtext(60, 512, '三家速率相差五个数量级：毫秒级电信号只能用通道，养料的定向吸收与稳态浓度只能靠载体，而一切梯度的源头是泵', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 二、基因版图：动物约 900 vs 植物 1000+ ============
  b.panel(710, 132, 660, 420, { title: '二、基因版图：动物约 900 vs 植物 1000+' })
  b.text(740, 196, '动物（人类基因组）', { size: 12.5, weight: 700, fill: C.accD })
  b.text(740, 216, '合计约 900 个转运相关基因', { size: 10, fill: C.mute })
  b.text(1075, 196, '植物（拟南芥）', { size: 12.5, weight: 700, fill: C.okD })
  b.text(1075, 216, '转运基因 >1000，约占基因组 3%–4%', { size: 10, fill: C.mute })
  b.line(1052, 190, 1052, 480, { stroke: C.faint, sw: 1, dash: '4 4' })
  // 动物横条（400 基因 = 138 px）
  const aBar = (y: number, label: string, val: number, inner: string, unit: string) => {
    const wpx = Math.max(val * 0.345, 10)
    b.text(740, y + 12.5, label, { size: 10.5, fill: C.sub })
    b.rect(850, y, wpx, 17, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 3 })
    if (inner) b.ctext(850 + wpx / 2, y + 12.5, inner, { size: 10, weight: 700, fill: C.accD })
    else b.text(850 + wpx + 8, y + 12.5, unit, { size: 10, weight: 700, fill: C.accD })
  }
  aBar(244, 'SLC 52 家族', 400, '约 400', '')
  aBar(276, '离子通道', 400, '约 400（K^{+} 约 80）', '')
  aBar(308, 'ABC 转运体', 48, '', '48')
  aBar(340, 'P 型 ATPase', 40, '', '约 40')
  b.text(740, 380, '侧重：换能与快信号', { size: 10.5, weight: 600, fill: C.accD })
  b.text(740, 400, 'Nav/Cav、LGIC、NCX 等特化硬件', { size: 10, fill: C.mute })
  // 植物横条（130 基因 = 150 px）
  const pBar = (y: number, label: string, val: number, inner: string, unit: string) => {
    const wpx = Math.max(val * 1.15, 11)
    b.text(1075, y + 12, label, { size: 10.5, fill: C.sub })
    b.rect(1160, y, wpx, 15, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 3 })
    if (inner) b.ctext(1160 + wpx / 2, y + 11.5, inner, { size: 9.5, weight: 700, fill: C.okD })
    else b.text(1160 + wpx + 8, y + 11.5, unit, { size: 9.5, weight: 700, fill: C.okD })
  }
  pBar(244, 'ABC', 130, '约 130', '')
  pBar(270, 'NPF', 53, '', '53')
  pBar(296, 'AQP', 35, '', '35')
  pBar(322, 'CNGC', 20, '', '20')
  pBar(348, 'GLR', 20, '', '20')
  pBar(374, 'AHA', 11, '', '11')
  pBar(400, 'CAX', 11, '', '11')
  b.wtext(1075, 436, 'AHA = H^{+}-ATPase；NPF = 硝酸盐/肽转运体；CNGC = 环核苷酸门控通道；GLR = 谷氨酸受体样通道；CAX = 钙-氢反向转运体', { size: 9.5, fill: C.mute, maxW: 285, lh: 18 })
  // 底部共性句
  b.wtext(740, 486, '固着生活的植物必须从毫摩尔级土壤溶液里采矿、远程装运光合产物——转运基因占比高于人类', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.text(740, 512, '动物押注快信号，植物押注吸收与区室化——两份清单的侧重差异即本书对照主线的目录', { size: 11, weight: 600, fill: C.sub })

  // ============ 三、主引擎对照：Na+ 币 vs H+ 币 ============
  b.panel(30, 567, 660, 418, { title: '三、主引擎对照：Na^{+} 币 vs H^{+} 币' })
  b.zone(46, 596, 300, 288, { label: '动物：Na^{+}/K^{+}-ATPase', lfill: C.accD, fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.6 })
  b.bilayer(66, 706, 260)
  b.rect(176, 684, 40, 58, { fill: '#ffffff', stroke: C.acc, sw: 2.4, rx: 9 })
  b.ctext(196, 717, 'αβ', { size: 11, weight: 700, fill: C.accD })
  b.arrow(150, 744, 150, 662, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.text(84, 700, '3 Na^{+} 出', { size: 10.5, weight: 700, fill: C.warnD })
  b.arrow(245, 662, 245, 744, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.text(255, 700, '2 K^{+} 入', { size: 10.5, weight: 700, fill: C.dnaD })
  b.circle(110, 744, 4, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.circle(128, 740, 4, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.circle(146, 744, 4, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.circle(228, 655, 4, { fill: C.dnaL, stroke: C.dna, sw: 1.3 })
  b.circle(246, 651, 4, { fill: C.dnaL, stroke: C.dna, sw: 1.3 })
  b.circle(264, 655, 4, { fill: C.dnaL, stroke: C.dna, sw: 1.3 })
  b.tag(196, 762, 'ATP', { fill: '#fef3c7', stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 8 })
  let ey = b.wtext(60, 792, '净外移 1 个正电荷（生电）——建立外钠内钾格局，支撑约 −90 mV 级膜电位', { size: 10.5, fill: C.sub, maxW: 275, lh: 18 })
  b.wtext(60, ey + 10, '下游花 Na^{+} 币：SGLT、NCX、NHE、细胞体积调节——几乎全部次级转运', { size: 10.5, fill: C.sub, maxW: 275, lh: 20 })
  // 植物引擎
  b.zone(366, 596, 300, 288, { label: '植物：H^{+}-ATPase 主引擎', lfill: C.okD, fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6 })
  b.bilayer(386, 706, 260)
  b.rect(496, 684, 40, 58, { fill: '#ffffff', stroke: C.ok, sw: 2.4, rx: 9 })
  b.ctext(516, 717, 'AHA', { size: 10, weight: 700, fill: C.okD })
  b.arrow(470, 744, 470, 662, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.text(386, 700, '1 H^{+}/ATP', { size: 10.5, weight: 700, fill: C.enzD })
  b.circle(440, 744, 4, { fill: C.enzL, stroke: C.enz, sw: 1.3 })
  b.circle(456, 740, 4, { fill: C.enzL, stroke: C.enz, sw: 1.3 })
  b.circle(470, 745, 4, { fill: C.enzL, stroke: C.enz, sw: 1.3 })
  b.text(545, 700, '−200 mV 级', { size: 10, weight: 700, fill: C.sub })
  b.tag(516, 762, 'ATP', { fill: '#fef3c7', stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 8 })
  ey = b.wtext(380, 792, '每分子 ATP 泵出 1 个 H^{+}（生电）——压入 −120~−250 mV 深负区，质外体酸化到约 pH 5.5', { size: 10.5, fill: C.sub, maxW: 275, lh: 23 })
  b.wtext(380, ey + 10, '下游花 H^{+} 币（PMF）：NPF/NRT、KUP/HAK、SUC、AAP——吸收与装载', { size: 10.5, fill: C.sub, maxW: 275, lh: 20 })
  // vs 徽章 + 底部
  b.circle(356, 740, 17, { fill: C.ink })
  b.ctext(356, 745, 'vs', { size: 12, weight: 700, fill: '#ffffff' })
  let vy = b.wtext(60, 912, '同为 P 型 ATPase，发的货币不同：动物发 Na^{+} 币、植物发 H^{+} 币——读懂这张货币表，就读懂了两个界的转运经济学', { size: 11, fill: C.sub, maxW: 620, lh: 23 })
  b.wtext(60, vy + 12, '（此后每章的驱动离子选择——SGLT 用 Na^{+}、SUC 用 H^{+}——皆由这两台引擎预付）', { size: 10, fill: C.mute, maxW: 620, lh: 18 })

  // ============ 四、共有与独有家族清单 ============
  b.panel(710, 567, 660, 418, { title: '四、共有与独有：全书对照框架总图' })
  b.zone(726, 606, 202, 306, { label: '两界共有', lfill: C.okD, fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6 })
  b.zone(940, 606, 202, 306, { label: '动物特化', lfill: C.accD, fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.6 })
  b.zone(1154, 606, 202, 306, { label: '植物特化', lfill: C.enzD, fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.6 })
  const tagO = { size: 11, pad: 10, minh: 24 }
  b.tag(827, 674, 'AQP', { ...tagO, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(827, 706, 'ABC', { ...tagO, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(827, 738, 'P 型 / V 型 ATPase', { ...tagO, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(827, 770, 'MFS 主超家族', { ...tagO, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(827, 802, 'CLC', { ...tagO, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(827, 834, 'ZIP · MATE', { ...tagO, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ctext(827, 872, '基本代谢谁也离不开', { size: 10, fill: C.mute })
  b.ctext(827, 892, '（人类 SLC 多数属 MFS）', { size: 9.5, fill: C.mute })
  b.tag(1041, 680, 'Nav / Cav', { ...tagO, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(1041, 712, 'NCX', { ...tagO, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(1041, 744, 'LGIC', { ...tagO, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.ctext(1041, 782, '快信号系统的硬件', { size: 10.5, weight: 600, fill: C.accD })
  b.ctext(1041, 804, '电压门控 Na^{+}/Ca^{2+} 通道', { size: 9.5, fill: C.mute })
  b.ctext(1041, 824, '钠钙交换器 · 神经递质门控通道', { size: 9.5, fill: C.mute })
  b.tag(1255, 680, 'HKT', { ...tagO, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.tag(1255, 712, 'NRT / NPF', { ...tagO, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.tag(1255, 744, 'BOR', { ...tagO, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.tag(1255, 776, 'SWEET', { ...tagO, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.ctext(1255, 810, '采矿与长途运输的硬件', { size: 10.5, weight: 600, fill: C.enzD })
  b.ctext(1255, 832, 'HKT 钠钾选择 · NRT 硝酸盐', { size: 9.5, fill: C.mute })
  b.ctext(1255, 852, 'BOR 硼 · SWEET 糖外排', { size: 9.5, fill: C.mute })
  // 问法框
  b.rect(726, 928, 630, 46, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.ctext(1041, 956, '此后每章的问法：这个家族两边都有吗？都有的话用法差在哪？只有一边有的话，缺的一边用什么补位？', { size: 11, weight: 600, fill: C.ink })
}

export default scene({
  title: '转运蛋白分类总框架与动植物总览',
  subtitle:
    '通道 10^{7}–10^{8} 离子/s、载体 10^{2}–10^{4} 分子/s、泵直接水解 ATP；动物约 900 个转运基因（SLC 52 家族约 400、ABC 48、P 型约 40、离子通道约 400）vs 拟南芥 >1000 个（占基因组 3%–4%）；主引擎 Na^{+} 币 vs H^{+} 币，共有与各自特化家族构成全书对照主线',
  draw,
})
