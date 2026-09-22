// xc ch12-s3 复杂体系的晶体学（Task XC-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、脂立方相：膜蛋白结晶的脂海绵 ============
  b.panel(30, 132, 660, 430, { title: '一、脂立方相：膜蛋白结晶的脂海绵' })
  // LCP 介质示意
  b.rect(56, 178, 250, 168, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 9 })
  b.ctext(181, 200, '脂立方相（单油酸甘油酯＋水）', { size: 10, weight: 700, fill: C.dnaD })
  for (let k = 0; k < 3; k++) {
    const base = 246 + k * 36
    const pts: [number, number][] = []
    for (let x = 64; x <= 298; x += 5) pts.push([x, base + 7 * Math.sin(x / 9 + k)])
    b.polyline(pts, { stroke: C.dna, sw: 2, opacity: 0.5 })
  }
  ;[[100, 232], [196, 268], [140, 304]].forEach(([x, y]) => {
    b.rect(x, y, 18, 26, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 4 })
  })
  b.ctext(181, 336, '膜蛋白横向扩散，以直接膜外接触成核', { size: 9, fill: C.sub })
  b.arrow(308, 262, 346, 262, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(327, 284, '成核生长', { size: 8.5, fill: C.enz })
  // 晶体阵列
  b.rect(350, 196, 130, 132, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    b.rect(360 + i * 30, 210 + j * 28, 24, 22, { fill: C.proL, stroke: C.pro, sw: 1.4, rx: 3 })
  }
  b.ctext(415, 348, '嵌在脂中的蛋白薄层阵列', { size: 9.5, weight: 700, fill: C.sub })
  b.wtext(496, 212, '去垢剂胶束把膜蛋白「包」起来，膜外结构域之间隔着去垢剂腰带，难以靠极性接触搭晶格。', { size: 9.5, fill: C.sub, maxW: 164, lh: 13.5 })
  // 里程碑
  const mile = (y: number, yr: string, s: string) => {
    b.rect(56, y, 74, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 5 })
    b.ctext(93, y + 14, yr, { size: 10, weight: 700, fill: C.dnaD })
    b.text(142, y + 14, s, { size: 9.5, fill: C.sub })
  }
  mile(370, '1996', 'Landau 与 Rosenbusch：以双连续立方相为结晶介质')
  mile(398, '2007', 'β2 肾上腺素受体破门（Cherezov 等）：「T4 溶菌酶融合＋LCP」双策')
  mile(426, '2012', 'GPCR 浪潮：β2AR-Gs 复合物等接连入库，Lefkowitz 与 Kobilka 获诺贝尔化学奖')
  b.wtext(56, 466, '融合蛋白把柔性第三内环换成刚性的 T4 溶菌酶，充当晶格的垫脚石；脂质不止是介质——特异性胆固醇与脂质位点稳定受体特定构象，「构象由脂质塑造」从口号变成坐标。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13.5 })
  b.wtext(370, 466, 'LCP 注射器（第 1 节）让 LCP 微晶不离开脂环境直接测数：2010 年代多个 GPCR 的 XFEL 数据正取自 LCP 射流——从结晶到收数，一条脂相走到底。', { size: 9.5, fill: C.mute, maxW: 290, lh: 13.5 })

  // ============ 二、去垢剂路线与 MDa 级战役 ============
  b.panel(710, 132, 660, 430, { title: '二、去垢剂路线与 MDa 级战役' })
  // β 桶示意
  b.ellipse(830, 205, 48, 15, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.line(782, 205, 782, 315, { stroke: C.dna, sw: 1.8 })
  b.line(878, 205, 878, 315, { stroke: C.dna, sw: 1.8 })
  b.ellipse(830, 315, 48, 15, { fill: 'none', stroke: C.dna, sw: 1.8 })
  for (let i = 0; i < 7; i++) b.line(794 + i * 12, 208, 794 + i * 12, 312, { stroke: C.line, sw: 1.2, opacity: 0.75 })
  b.ctext(830, 346, '外膜 β 桶：亲水环大、跨膜区规则', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(830, 364, 'OmpF 孔蛋白三聚体（1990 年代率先解出）', { size: 8.8, fill: C.sub })
  b.wtext(736, 388, '短链去垢剂中即可常规蒸气扩散（第 3 章）结晶，TolC、铁载体受体等外膜机器随后成军。要诀在去垢剂相图：胶束尺寸与临界胶束浓度同蛋白「腰带」的匹配，比沉淀剂筛选更接近成败；去垢剂交换（辛基葡糖苷逐一试换至十二烷基麦芽糖苷）常是膜蛋白优化最见效的一步。', { size: 9.5, fill: C.sub, maxW: 288, lh: 13 })
  b.wtext(736, 494, '分工：α 螺旋受体的硬骨头交给 LCP，β 桶与稳定的外膜机器仍由去垢剂路线供养。', { size: 9.5, fill: C.mute, maxW: 288, lh: 13 })
  // 右侧 MDa 战役
  b.text(1040, 190, '巨型复合物：MDa 级战役', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(1040, 204, 190, 18, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(1135, 217, '核糖体 约 2.4 MDa', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(1040, 230, 198, 18, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(1139, 243, '26S 蛋白酶体 约 2.5 MDa', { size: 9.5, weight: 700, fill: C.proD })
  b.wtext(1040, 262, '20S 核心颗粒（Groll 等 1997 年，2.4 Å）早已是教科书常客；2016 年首个完整 26S 的 X 射线结构以体量创下当时晶体学尺寸纪录。', { size: 9, fill: C.sub, maxW: 296, lh: 12.5 })
  b.timelineH(1050, 372, 280, [
    { at: 0.06, label: '1980 年代初', sub: 'Yonath 长出核糖体晶体', above: true },
    { at: 0.5, label: '2000 年前后', sub: '50S 与 30S 原子结构', above: true },
    { at: 0.94, label: '2009', sub: '诺贝尔化学奖', above: true },
  ])
  b.wtext(1040, 396, '核糖体是三十年战争：条件优化、重原子衍生（第 8 章）与低温技术（第 5 章）接力，70S 及其与 mRNA、tRNA、翻译因子的复合物陆续入库。', { size: 9, fill: C.sub, maxW: 296, lh: 12.5 })
  b.rect(1040, 448, 304, 92, { fill: C.warnL, stroke: C.warn, sw: 1.7, rx: 8 })
  b.text(1056, 470, '剪接体：竞速让位于 cryo-EM', { size: 10.5, weight: 700, fill: C.warnD })
  b.wtext(1056, 490, '构象异质性使结晶止步于亚复合物与亚基；2015 至 2016 年 cryo-EM 以 B 复合物、U4/U6.U5 三-snRNP 等近原子结构连下数城，分辨率革命自此易帜——X 射线与 EM 分工而非对抗。', { size: 9, fill: C.sub, maxW: 272, lh: 12.5 })

  // ============ 三、体内结晶 ============
  b.panel(30, 572, 660, 390, { title: '三、体内结晶：细胞替你完成结晶筛选' })
  b.cell(180, 700, 120, 88, { fill: C.panelB, stroke: C.sub, double: true })
  b.circle(140, 676, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  ;[[215, 665], [243, 715], [183, 745]].forEach(([x, y]) => {
    b.polygon([[x, y - 14], [x + 12, y], [x, y + 14], [x - 12, y]], { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  })
  b.rect(92, 622, 26, 9, { fill: C.rnaL, stroke: C.rna, sw: 1.4, rx: 4 })
  b.rect(256, 630, 26, 9, { fill: C.rnaL, stroke: C.rna, sw: 1.4, rx: 4 })
  b.ctext(180, 806, '昆虫细胞：杆状病毒高表达', { size: 9.5, weight: 700, fill: C.sub })
  b.ctext(180, 822, '局部过饱和，自发成晶（μm 级）', { size: 9, fill: C.mute })
  b.text(340, 616, '物理逻辑：高表达的局部过饱和', { size: 10.5, weight: 700, fill: C.ink })
  b.wtext(340, 636, '细胞替你完成了结晶筛选——不经纯化、不做体外条件优化，晶体在细胞内长成。', { size: 9.5, fill: C.sub, maxW: 306, lh: 13 })
  const mile2 = (y: number, yr: string, s: string) => {
    b.rect(340, y, 64, 20, { fill: C.enzL, stroke: C.enz, sw: 1.5, rx: 5 })
    b.ctext(372, y + 14, yr, { size: 10, weight: 700, fill: C.enzD })
    b.text(416, y + 14, s, { size: 9.3, fill: C.sub })
  }
  mile2(668, '2007', 'Coulibaly 等解析多角体结构：体内晶体可直接测结构')
  mile2(696, '2013', 'Redecke 等：锥虫蛋白酶体内成晶，直接送 LCLS')
  b.wtext(340, 732, '经典观察对象：质型多角体病毒的多角体与昆虫痘病毒的球状体，自电子显微镜时代起就是细胞内晶体的记载。', { size: 9, fill: C.mute, maxW: 306, lh: 12.5 })
  b.rect(340, 768, 304, 56, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8 })
  b.wtext(356, 788, '短板：晶体尺寸受限（μm 级）、条件不可调——恰是串晶与 MicroED 的用武之地。', { size: 9.5, fill: C.warnD, maxW: 274, lh: 13 })
  // 三大前沿握手
  b.tag(170, 880, '体内结晶', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10.5, weight: 700, pad: 10 })
  b.line(232, 880, 300, 880, { stroke: C.mute, sw: 1.8, marker: 'mute', markerStart: 'mute' })
  b.tag(372, 880, '串晶 SFX', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 10 })
  b.line(434, 880, 502, 880, { stroke: C.mute, sw: 1.8, marker: 'mute', markerStart: 'mute' })
  b.tag(574, 880, 'MicroED', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 10 })
  b.ctext(372, 912, '三大前沿在此握手——体内微晶正是串晶与电子衍射的理想样品', { size: 9.5, fill: C.sub })
  b.wtext(56, 940, '针状晶簇与微晶在传统语境是失败品，在前沿语境是合格原料（第 1 节）——评价标准随技术边界移动。', { size: 9, fill: C.mute, maxW: 610, lh: 12.5 })

  // ============ 四、中子衍射与攻坚策略 ============
  b.panel(710, 572, 660, 390, { title: '四、中子衍射：氢的直接成像与攻坚策略总表' })
  b.rect(736, 606, 288, 66, { fill: C.badL, stroke: C.bad, sw: 1.7, rx: 8 })
  b.text(752, 628, 'X 射线的盲区', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(752, 646, '氢只有一个电子，对 X 射线近乎隐形——质子化态与氢键氢位置只能靠几何推断。', { size: 9, fill: C.sub, maxW: 256, lh: 12 })
  b.rect(1040, 606, 296, 66, { fill: C.okL, stroke: C.ok, sw: 1.7, rx: 8 })
  b.text(1056, 628, '中子的读法', { size: 10.5, weight: 700, fill: C.okD })
  b.wtext(1056, 646, '与原子核相互作用，H 与 D 散射长度可观且不同——质子化态、氢键氢位置、水网取向直接读出。', { size: 9, fill: C.sub, maxW: 264, lh: 12 })
  b.wtext(736, 690, '代价：中子通量低多个数量级，须长出 0.1 至 1 mm^{3} 的大晶体（第 3 章养晶功夫的极限考题），通常还须氘代（以 D 置换 H）压低非相干本底。', { size: 9, fill: C.sub, maxW: 596, lh: 12.5 })
  b.text(736, 726, '中子源：ILL（法国）· SNS（美国）· J-PARC（日本）· CSNS（中国东莞，2018 年）', { size: 9, fill: C.mute })
  b.text(736, 744, '战例：溶菌酶（方法学基准）、碳酸酐酶＋磺胺（质子化态判定）、HIV 蛋白酶（催化天冬氨酸间共享质子）', { size: 9, fill: C.mute })
  b.table(736, 756, 588, {
    headers: ['体系', '结晶路线', '关键点', '标志案例'],
    colW: [148, 158, 138, 144],
    rowH: 22.5,
    fontSize: 8.8,
    rows: [
      ['α 螺旋膜蛋白', 'LCP＋融合蛋白', '脂质参与构象稳定', 'β2AR 2007、GPCR 浪潮'],
      ['外膜 β 桶蛋白', '短链去垢剂蒸气扩散', '去垢剂与胶束匹配', 'OmpF 孔蛋白系列'],
      ['核糖体翻译机器', '十年条件优化', '约 2.4 MDa、多晶型', '50S 与 70S 于 2000 年前后'],
      ['26S 蛋白酶体', '大复合物结晶', '约 2.5 MDa 尺寸纪录', '2016 年完整结构'],
      ['剪接体', '结晶受阻', '异质性让位 cryo-EM', '2015 至 2016 年竞速'],
      ['质子化态问题', '大晶体中子衍射', '0.1 至 1 mm^{3}、氘代', '溶菌酶与 HIV 蛋白酶'],
    ],
  })
  b.wtext(736, 944, '总纲：没有万能路线，只有对症攻坚——膜蛋白看脂环境、巨型复合物看柔性管理、质子化态看中子、微晶看串晶与 MicroED。', { size: 9, fill: C.mute, maxW: 596, lh: 12 })
}

export default scene({
  title: '复杂体系的晶体学',
  subtitle: 'LCP 经 β2AR 2007 年破门成 2011–2012 GPCR 浪潮（2012 诺贝尔化学奖）；核糖体约 2.4 MDa 三十年战役、26S 约 2.5 MDa 创纪录；体内结晶直送 XFEL；中子须 0.1–1 mm^{3} 大晶体与氘代',
  draw,
})
