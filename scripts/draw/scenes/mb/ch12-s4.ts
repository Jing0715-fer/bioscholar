// mb ch12-s4 p53 网络与多步癌变（39-b2 收尾轮）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、p53–MDM2 负反馈环 ============
  b.panel(30, 132, 660, 300, { title: '一、p53 的稳定性调控：MDM2 负反馈环' })
  b.rect(280, 240, 120, 52, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(340, 262, 'p53', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(340, 280, '（四聚体转录因子）', { size: 8.5, fill: C.sub })
  b.rect(280, 348, 120, 52, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 8 })
  b.ctext(340, 370, 'MDM2', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(340, 388, '（E3 泛素连接酶）', { size: 8.5, fill: C.sub })
  b.spline([[400, 265], [448, 300], [400, 375]], { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.text(456, 300, '转录激活', { size: 9.5, weight: 600, fill: C.proD })
  b.spline([[280, 372], [226, 300], [280, 268]], { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.line(212, 290, 232, 310, { stroke: C.bad, sw: 3 })
  b.line(232, 290, 212, 310, { stroke: C.bad, sw: 3 })
  b.etext(206, 296, '泛素化 → 降解', { size: 9.5, weight: 600, fill: C.enzD })
  b.ctext(340, 312, '负反馈环：正常细胞 p53 极低', { size: 10, weight: 700, fill: C.sub })
  b.text(46, 180, 'DNA 损伤（DSB · UV · 复制压力）', { size: 10.5, weight: 700, fill: C.bad })
  b.rect(56, 196, 100, 30, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
  b.ctext(106, 216, 'ATM / ATR', { size: 10, weight: 600, fill: C.accD })
  b.arrow(158, 211, 186, 211, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(190, 196, 100, 30, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
  b.ctext(240, 216, 'Chk1 / Chk2', { size: 10, weight: 600, fill: C.accD })
  b.arrow(290, 214, 316, 238, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(56, 248, '磷酸化 p53：阻断 MDM2 结合', { size: 9.5, fill: C.accD, maxW: 240, lh: 13 })
  b.text(466, 180, '致癌信号异常', { size: 10.5, weight: 700, fill: C.warn })
  b.rect(466, 196, 110, 30, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 6 })
  b.ctext(521, 216, 'p14^ARF', { size: 10, weight: 700, fill: '#78350f' })
  b.line(521, 226, 412, 348, { stroke: C.warn, sw: 2 })
  b.line(402, 342, 418, 358, { stroke: C.warn, sw: 2.5 })
  b.ctext(500, 292, '抑制 MDM2', { size: 9.5, weight: 600, fill: '#78350f' })
  b.wtext(46, 420, '损伤或致癌信号经 ATM/ATR–Chk 或 ARF 打断反馈环，p53 快速积累入核——「感知–决策–执行」总线的稳态基础。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、三条执行通路 ============
  b.panel(710, 132, 660, 300, { title: '二、三条执行通路：依损伤程度「刹车或自杀」' })
  b.rect(740, 270, 90, 56, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(785, 294, 'p53', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(785, 312, '积累 · 入核', { size: 8.5, fill: C.sub })
  b.arrow(830, 280, 888, 198, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.arrow(830, 298, 888, 298, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.arrow(830, 316, 888, 390, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.text(894, 170, '① 细胞周期阻滞', { size: 10, weight: 700, fill: C.accD })
  b.rect(894, 178, 130, 36, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 6 })
  b.ctext(959, 200, 'p21^CIP1（CDK 抑制）', { size: 8.5, weight: 600, fill: C.accD })
  b.arrow(1024, 196, 1060, 196, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(1064, 178, 130, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 6 })
  b.ctext(1129, 200, 'Rb 保持低磷酸化', { size: 9, weight: 600, fill: C.dnaD })
  b.arrow(1194, 196, 1230, 196, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.tag(1287, 196, 'G1/S 阻滞', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: '#065f46', pad: 7 })
  b.ctext(959, 232, '（14-3-3σ 另介导 G2 阻滞）', { size: 8.5, fill: C.mute })
  b.text(894, 272, '② 凋亡', { size: 10, weight: 700, fill: C.bad })
  b.rect(894, 280, 130, 36, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 6 })
  b.ctext(959, 302, 'Bax · PUMA · NOXA', { size: 8.5, weight: 600, fill: '#991b1b' })
  b.arrow(1024, 298, 1060, 298, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(1064, 280, 130, 36, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 6 })
  b.ctext(1129, 302, '线粒体外膜通透化', { size: 9, weight: 600, fill: '#991b1b' })
  b.arrow(1194, 298, 1230, 298, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.tag(1287, 298, 'caspase 级联凋亡', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: '#991b1b', pad: 7 })
  b.text(894, 366, '③ 修复 · 衰老与代谢', { size: 10, weight: 700, fill: C.enzD })
  b.rect(894, 374, 130, 36, { fill: C.enzL, stroke: C.enz, sw: 1.5, rx: 6 })
  b.ctext(959, 396, 'GADD45（修复）', { size: 9, weight: 600, fill: C.enzD })
  b.arrow(1024, 392, 1060, 392, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.rect(1064, 374, 130, 36, { fill: C.enzL, stroke: C.enz, sw: 1.5, rx: 6 })
  b.ctext(1129, 396, 'TIGAR（抑糖酵解）', { size: 9, weight: 600, fill: C.enzD })
  b.arrow(1194, 392, 1230, 392, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.tag(1287, 392, '衰老 · 代谢重编程', { fill: C.proL, stroke: C.pro, size: 10, weight: 700, tfill: C.proD, pad: 7 })
  b.wtext(726, 425, '三类靶基因依损伤程度选择「轻损修复、重损凋亡」——p53 因而被称作基因组守卫（guardian of the genome）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、TP53 突变与临床 ============
  b.panel(30, 452, 660, 508, { title: '三、TP53 突变与临床：热点错义 · 显性负 · Li-Fraumeni' })
  b.wtext(56, 500, 'TP53 是人类肿瘤中突变率最高的基因——过半肿瘤失活其功能。', { size: 11, weight: 600, fill: C.ink, maxW: 620, lh: 15 })
  // 结构域条 + 热点
  b.rect(56, 540, 143, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.ctext(128, 560, 'TAD 激活域', { size: 9, weight: 600, fill: C.rnaD })
  b.rect(199, 540, 286, 30, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(342, 560, 'DNA 结合域（DBD）', { size: 9.5, weight: 700, fill: C.proD })
  b.rect(485, 540, 131, 30, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  b.ctext(550, 560, 'OD 寡聚域 · CTD', { size: 8.5, weight: 600, fill: C.enzD })
  const hot: [number, string, number][] = [[306, 'R175', 528], [409, 'R248', 528], [443, 'R273', 508], [459, 'R282', 528]]
  hot.forEach(([x, s, ly]) => {
    b.line(x, 540, x, 532, { stroke: C.bad, sw: 2 })
    b.ctext(x, ly, s, { size: 8.5, weight: 700, fill: C.bad })
  })
  b.etext(616, 560, '393 aa', { size: 8.5, fill: C.mute })
  b.wtext(56, 596, '致癌突变多为错义热点（集中于 DBD）：R175 · R248 · R273 · R282——不仅失去转录活性，还显性负抑制残余野生型。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // 显性负示意
  b.text(56, 648, '显性负效应（dominant negative）：四聚体中混杂突变亚基', { size: 11.5, weight: 700, fill: C.ink })
  const sub = (x: number, y: number, mut: boolean) => {
    b.rect(x, y, 40, 34, { fill: mut ? C.badL : C.okL, stroke: mut ? C.bad : C.ok, sw: 1.6, rx: 5 })
    b.ctext(x + 20, y + 21, mut ? 'mut' : 'wt', { size: 9, weight: 700, fill: mut ? '#991b1b' : '#065f46' })
  }
  sub(76, 668, false); sub(120, 668, false); sub(164, 668, false); sub(208, 668, false)
  b.ctext(162, 724, '野生型四聚体：有活性 ✓', { size: 9.5, weight: 600, fill: '#065f46' })
  sub(330, 668, false); sub(374, 668, true); sub(418, 668, false); sub(462, 668, true)
  b.ctext(416, 724, '杂合四聚体：活性被压制 ✕', { size: 9.5, weight: 600, fill: '#991b1b' })
  b.wtext(56, 762, '生殖系 TP53 突变 → Li-Fraumeni 综合征：多发、早发的多种肿瘤（肉瘤·乳腺·肾上腺皮质癌等）。', { size: 10.5, weight: 600, fill: C.sub, maxW: 620, lh: 15 })
  b.text(56, 800, '另两条失活路线：', { size: 11, weight: 700, fill: C.ink })
  b.rect(56, 812, 300, 56, { fill: '#ffffff', stroke: C.enz, sw: 1.5, rx: 8 })
  b.text(72, 834, 'MDM2 扩增', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(72, 854, 'p53 被过度泛素化降解', { size: 10, fill: C.sub, maxW: 268, lh: 13 })
  b.rect(366, 812, 300, 56, { fill: '#ffffff', stroke: C.bad, sw: 1.5, rx: 8 })
  b.text(382, 834, 'HPV E6（+ E6AP）', { size: 11, weight: 700, fill: C.bad })
  b.wtext(382, 854, '招募 E6AP 泛素化 p53 促降解', { size: 10, fill: C.sub, maxW: 268, lh: 13 })
  b.wtext(56, 900, 'p53 失活的肿瘤更易滑入基因组不稳定——为多步癌变按下快进键（右图）。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、结直肠癌多步模型 ============
  b.panel(710, 452, 660, 508, { title: '四、多步癌变：结直肠癌模型（Vogelstein 与 Kinzler，1990）' })
  b.wtext(726, 498, '癌变需多个驱动事件的组合与顺序：通常 3～8 个驱动突变 + 数百乘客突变；每步赋予克隆选择优势，经克隆演化逐级扩增。', { size: 10.5, fill: C.sub, maxW: 570, lh: 15 })
  b.wtext(726, 536, '基因组不稳定是「加速器」：CIN（APC / BubR1）与 MSI（MLH1 / MSH2 沉默）使打击概率提高一个量级。', { size: 10.5, fill: C.sub, maxW: 570, lh: 15 })
  const steps: [string, string, string][] = [
    ['APC 失活', '（两次打击）', '正常上皮→异常隐窝灶'],
    ['KRAS 激活', '早于其他突变', '早期腺瘤'],
    ['18q 缺失', '（SMAD4 / DCC）', '晚期腺瘤'],
    ['TP53 失活', '—', '腺癌（癌变）'],
    ['更多突变', '+ 基因组不稳定', '侵袭与转移'],
  ]
  steps.forEach(([t, s, p], i) => {
    const x = 730 + i * 124
    const y = 838 - i * 66
    b.rect(x, y, 118, 62, { fill: i === 4 ? C.badL : C.accL, stroke: i === 4 ? C.bad : C.acc, sw: 1.8, rx: 7, fillOp: 0.7 })
    b.ctext(x + 59, y + 18, t, { size: 10.5, weight: 700, fill: i === 4 ? '#991b1b' : C.accD })
    b.ctext(x + 59, y + 36, s, { size: 8.5, fill: C.mute })
    b.ctext(x + 59, y + 52, p, { size: 8.5, weight: 600, fill: C.sub })
    if (i < 4) b.arrow(x + 118, y - 20, x + 128, y - 62, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.arrow(730, 922, 1344, 922, { stroke: C.ink, sw: 2.2, marker: 'ink' })
  b.ctext(1037, 944, '时间 · 克隆演化：每步赋予选择优势，逐级扩增', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(789, 944, '启动', { size: 9.5, weight: 700, fill: C.mute })
  b.ctext(1285, 944, '进展', { size: 9.5, weight: 700, fill: C.mute })
}

export default scene({
  title: 'p53 网络与多步癌变',
  subtitle: 'MDM2 负反馈环维持 p53 低稳态——ATM/ATR-Chk 与 p14^ARF 两路输入稳定 p53，输出 p21 阻滞 / Bax-PUMA 凋亡 / GADD45 修复三分支；结直肠癌 APC→KRAS→18q→TP53 多步克隆演化（3～8 个驱动突变），CIN / MSI 作变异放大器',
  draw,
})
