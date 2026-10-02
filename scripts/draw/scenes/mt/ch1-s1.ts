// mt ch1-s1 膜脂、膜蛋白与选择性屏障
// 面板：一、流动镶嵌剖面（bilayer + 胆固醇/糖蛋白/通道/载体/外周蛋白，膜厚 7.5–10 nm）
//       二、膜脂运动性（侧向扩散 10^-8 cm2/s vs 翻转半衰期小时–天，对数时间轴）
//       三、膜蛋白三大驻留方式（内在/外周/GPI 脂锚定 + β 桶）
//       四、动物 vs 植物膜组成对照（胆固醇 30%–50% vs 植物甾醇；糖萼 vs 细胞壁；5:4:1）
// Task ID: 46-c1
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、流动镶嵌模型剖面 ============
  b.panel(30, 132, 660, 420, { title: '一、流动镶嵌模型剖面（Singer–Nicolson，1972）' })
  b.text(60, 196, '膜厚仅 7.5–10 nm（约 50 个原子），却隔开成分迥异的两个水相世界', { size: 11.5, fill: C.sub })
  b.bilayer(60, 300, 590)
  b.text(60, 272, '细胞外', { size: 11, weight: 700, fill: C.sub })
  b.text(60, 348, '细胞质', { size: 11, weight: 700, fill: C.sub })
  // 胆固醇（嵌于外小叶）
  b.rect(148, 295, 7, 12, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.text(105, 246, '胆固醇', { size: 10.5, fill: C.warnD })
  b.line(125, 252, 149, 292, { stroke: C.faint, sw: 1 })
  // 糖蛋白 + 糖萼（胞外侧糖链）
  b.rect(252, 292, 20, 32, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.circle(246, 280, 4, { fill: C.ok })
  b.circle(258, 271, 4, { fill: C.ok })
  b.circle(270, 280, 4, { fill: C.ok })
  b.text(196, 234, '糖蛋白 · 糖萼', { size: 10.5, fill: C.okD })
  b.line(238, 240, 256, 264, { stroke: C.faint, sw: 1 })
  // 通道蛋白（双亚基夹孔道）
  b.rect(362, 292, 11, 32, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.rect(381, 292, 11, 32, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.text(336, 352, '通道蛋白', { size: 10.5, fill: C.proD })
  b.line(352, 344, 372, 326, { stroke: C.faint, sw: 1 })
  // 载体 / 泵
  b.ellipse(470, 306, 14, 18, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.text(444, 352, '载体 / 泵', { size: 10.5, fill: C.accD })
  b.line(462, 344, 468, 324, { stroke: C.faint, sw: 1 })
  // 外周蛋白（贴胞质面）
  b.circle(565, 324, 9, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.text(532, 352, '外周蛋白', { size: 10.5, fill: C.enzD })
  b.line(552, 344, 561, 332, { stroke: C.faint, sw: 1 })
  // 膜厚标注
  b.line(628, 296, 628, 317, { stroke: C.sub, sw: 1.3, marker: 'mute', markerStart: 'mute' })
  b.text(536, 286, '膜厚 7.5–10 nm', { size: 10, fill: C.mute })
  b.text(617, 340, '疏水核心约 3 nm', { size: 9.5, fill: C.mute })
  // 底部说明（链式换行，防重叠）
  let y1 = b.wtext(60, 396, '疏水核心约 3 nm = 通用选择性屏障：O_{2}/CO_{2} 与类固醇激素几乎自由渗透，水慢而有限，尿素、甘油以分钟到小时计', { size: 10.5, fill: C.sub, maxW: 600, lh: 23 })
  y1 = b.wtext(60, y1 + 10, '离子几乎被封死：裸离子带水化壳挤进疏水核心能耗极高——Na^{+}/K^{+} 自发跨纯脂双层半衰期以小时乃至天计，毫秒级事件等不起', { size: 10.5, fill: C.sub, maxW: 600, lh: 23 })
  b.wtext(60, y1 + 10, '屏障的严格性正是转运蛋白的生存理由：通道开门、载体搬货、泵逆流而上——三类蛋白是生命膜的标配发明', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })

  // ============ 二、膜的流动性：侧向扩散 vs 翻转 ============
  b.panel(710, 132, 660, 420, { title: '二、膜的流动性：侧向扩散 vs 翻转' })
  b.text(740, 196, '同一张膜上，两种运动的速率相差 5 个数量级以上', { size: 11.5, fill: C.sub })
  // 左 mini：侧向扩散
  b.bilayer(740, 250, 240)
  b.circle(800, 250, 5.5, { fill: C.enz, fillOp: 0.9 })
  b.circle(800, 263, 5.5, { fill: C.enz, fillOp: 0.9 })
  b.line(800, 254.5, 800, 258.5, { stroke: C.enz, sw: 1.5 })
  b.circle(880, 250, 5.5, { fill: C.enz, fillOp: 0.3 })
  b.circle(880, 263, 5.5, { fill: C.enz, fillOp: 0.3 })
  b.arrow(815, 232, 905, 232, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.text(818, 222, '侧向扩散', { size: 10.5, weight: 700, fill: C.enzD })
  b.text(740, 292, 'D ≈ 10^{-8} cm^{2}/s', { size: 11, weight: 700, fill: C.accD })
  b.text(740, 312, '1 秒挪动约 2 μm（自身长度的数百倍）', { size: 10.5, fill: C.sub })
  // 右 mini：翻转 flip-flop
  b.bilayer(1010, 250, 330)
  b.circle(1150, 250, 5.5, { fill: C.enz, fillOp: 0.9 })
  b.circle(1150, 263, 5.5, { fill: C.enz, fillOp: 0.3 })
  b.path('M1150,242 C1130,252 1170,261 1150,271', { stroke: C.enz, sw: 2, marker: 'enz' })
  b.text(1180, 222, '翻转（flip-flop）', { size: 10.5, weight: 700, fill: C.enzD })
  b.text(1180, 292, '半衰期：小时到天', { size: 11, weight: 700, fill: C.warnD })
  b.text(1180, 312, '两侧脂质不对称得以维持', { size: 10.5, fill: C.sub })
  // 对数时间轴
  b.arrow(740, 400, 1330, 400, { stroke: C.sub, sw: 2, marker: 'ink' })
  const tick = (x: number, lb: string) => {
    b.line(x, 400, x, 407, { stroke: C.sub, sw: 1.8 })
    b.ctext(x, 424, lb, { size: 10.5, fill: C.mute })
  }
  tick(760, '1 s')
  tick(925, '1 min')
  tick(1088, '1 h')
  tick(1214, '1 天')
  b.circle(760, 400, 6, { fill: C.acc })
  b.ctext(760, 380, '侧向（秒级）', { size: 10.5, weight: 700, fill: C.accD })
  b.circle(1150, 400, 6, { fill: C.warn })
  b.ctext(1150, 380, '翻转（小时–天）', { size: 10.5, weight: 700, fill: C.warnD })
  b.text(740, 356, '时间标尺（对数刻度）', { size: 11.5, weight: 700, fill: C.sub })
  // 底部说明
  let y2 = b.wtext(740, 444, '翻转慢 → 两侧脂质不对称长期维持：胆碱磷脂（PC/SM）偏外侧，氨基磷脂（PS/PE）偏内侧；PIP_{2} 只在内小叶占一席', { size: 10.5, fill: C.sub, maxW: 600, lh: 23 })
  y2 = b.wtext(740, y2 + 10, 'P4 型 ATPase 翻转酶把 PS 主动翻回内侧，与搅酶构成两小叶脂质分布的拉锯；凋亡时搅酶激活、两侧随机化，PS 外翻即「吃我」信号', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })
  b.wtext(740, y2 + 10, 'FRAP（光漂白后荧光恢复）：多数膜蛋白侧向扩散比膜脂慢 1–2 个数量级，常被细胞骨架栅栏拘限在微区之内', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })

  // ============ 三、膜蛋白：三种驻留方式与两种折叠 ============
  b.panel(30, 567, 660, 418, { title: '三、膜蛋白：三种驻留方式与两种折叠' })
  b.text(60, 622, '按与膜的关系分三大类；跨膜区有两种折叠解法（α 螺旋与 β 桶）', { size: 11.5, fill: C.sub })
  // 三列 mini 示意
  b.text(50, 652, '① 内在跨膜蛋白', { size: 12, weight: 700, fill: C.proD })
  b.text(250, 652, '② 外周蛋白', { size: 12, weight: 700, fill: C.enzD })
  b.text(450, 652, '③ 脂锚定（GPI 锚）', { size: 12, weight: 700, fill: C.okD })
  b.bilayer(50, 700, 180)
  b.bilayer(250, 700, 180)
  b.bilayer(450, 700, 180)
  // ① α 螺旋束穿越双层
  b.rect(118, 688, 26, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  for (let i = 0; i < 5; i++) b.line(121, 694 + i * 7, 141, 694 + i * 7, { stroke: C.pro, sw: 1, opacity: 0.6 })
  // ② 外周蛋白贴胞质面
  b.circle(340, 730, 11, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.line(328, 724, 336, 718, { stroke: C.enz, sw: 1, opacity: 0.6 })
  b.line(352, 724, 344, 718, { stroke: C.enz, sw: 1, opacity: 0.6 })
  // ③ GPI 锚定蛋白（整段胞外）
  b.circle(540, 703, 5.5, { fill: C.ok })
  b.line(540, 696, 540, 684, { stroke: C.ok, sw: 1.6 })
  b.ellipse(540, 670, 15, 11, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  // 各列说明
  b.wtext(50, 748, '穿越双分子层，须用去污剂剥离；约 20–25 个疏水残基恰跨 3 nm 核心', { size: 10.5, fill: C.sub, maxW: 185, lh: 18 })
  b.wtext(250, 748, '靠静电与氢键贴附膜表面，改变离子强度或 pH 即可洗下', { size: 10.5, fill: C.sub, maxW: 185, lh: 18 })
  b.wtext(450, 748, '共价脂链挂膜、整段面向胞外，可被磷脂酶整段切下释放', { size: 10.5, fill: C.sub, maxW: 185, lh: 18 })
  // β 桶示意
  b.ellipse(105, 806, 30, 11, { fill: C.bg, stroke: C.rna, sw: 1.8 })
  b.rect(75, 806, 60, 46, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  for (let x = 85; x <= 125; x += 10) b.line(x, 806, x, 852, { stroke: C.rna, sw: 1, opacity: 0.5 })
  b.ellipse(105, 852, 30, 11, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.text(150, 812, 'β 桶（孔蛋白）', { size: 11, weight: 700, fill: C.rnaD })
  b.wtext(150, 834, '少数跨膜区用 β 桶：β 片层卷成闭合圆筒，桶壁围着常开水孔——革兰阴性菌外膜孔蛋白与线粒体外膜 VDAC 同属此构', { size: 10.5, fill: C.sub, maxW: 470, lh: 18 })
  // 底部两行
  let y3 = b.wtext(60, 890, '脂筏假说：鞘磷脂-胆固醇富集的纳米级有序微区，供信号蛋白聚拢开工——膜不是均匀的汤，而是有码头与缓流的河道', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.wtext(60, y3 + 12, '规模感：人类基因组约 20%–30% 的基因编码膜蛋白——基因组里最重的一类基建', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 四、动物 vs 植物：固醇、外骨架与膜组成 ============
  b.panel(710, 567, 660, 418, { title: '四、动物 vs 植物：固醇、外骨架与膜组成' })
  // 左：动物细胞（糖萼）
  b.ellipse(865, 668, 58, 40, { fill: C.accL, stroke: C.acc, sw: 2.2 })
  b.circle(815, 648, 3.5, { fill: C.ok, fillOp: 0.75 })
  b.circle(832, 636, 3.5, { fill: C.ok, fillOp: 0.75 })
  b.circle(852, 629, 3.5, { fill: C.ok, fillOp: 0.75 })
  b.circle(872, 627, 3.5, { fill: C.ok, fillOp: 0.75 })
  b.circle(892, 631, 3.5, { fill: C.ok, fillOp: 0.75 })
  b.circle(910, 641, 3.5, { fill: C.ok, fillOp: 0.75 })
  b.text(805, 730, '动物：糖萼外被', { size: 11.5, weight: 700, fill: C.accD })
  b.text(805, 752, '胆固醇可占膜脂 30%–50%', { size: 10.5, fill: C.sub })
  b.text(805, 772, '（红细胞膜为高胆固醇样板）', { size: 10, fill: C.mute })
  // 右：植物细胞（细胞壁 + 膨压）
  b.rect(1080, 628, 130, 84, { fill: C.okL, stroke: C.okD, sw: 3, rx: 8 })
  b.rect(1092, 640, 106, 60, { fill: C.bg, stroke: C.dna, sw: 1.6, rx: 6 })
  b.arrow(1102, 670, 1130, 670, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.arrow(1188, 670, 1160, 670, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.text(1080, 730, '植物：细胞壁 + 膨压', { size: 11.5, weight: 700, fill: C.okD })
  b.text(1080, 752, '谷甾醇 · 豆甾醇 · 菜油甾醇', { size: 10.5, fill: C.sub })
  b.text(1080, 772, '膨压典型 0.3–1 MPa（约 3–10 个大气压）', { size: 10, fill: C.mute })
  b.line(1035, 620, 1035, 782, { stroke: C.faint, sw: 1, dash: '4 4' })
  // 概括句 + 对照表
  b.wtext(730, 798, '人体肠道几乎不吸收植物甾醇，却吸收胆固醇——选择性写在转运蛋白的结合口袋里', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.table(730, 818, 620, {
    headers: ['对照项', '动物（哺乳类）', '植物（拟南芥等）'],
    colW: [180, 215, 225],
    rowH: 29,
    fontSize: 11.5,
    rows: [
      ['固醇策略', '胆固醇（30%–50%）', '谷甾醇 / 豆甾醇 / 菜油甾醇'],
      ['细胞外被', '糖萼（糖链伸出数十 nm）', '细胞壁（纤维素-半纤维素-果胶）'],
      ['正压可能', '无壁——防胀破靠离子稳态', '膨压 0.3–1 MPa'],
      ['膜组成（重量比）', '红细胞 蛋白:脂:糖 ≈ 5:4:1', '家族侧重不同，量级相近'],
    ],
  })
}

export default scene({
  title: '膜脂、膜蛋白与选择性屏障',
  subtitle:
    '流动镶嵌模型：7.5–10 nm 的磷脂双层以疏水核心封死离子（自发跨膜以小时–天计）；膜脂侧向扩散约 10^{-8} cm^{2}/s 而翻转半衰期小时–天；动物以胆固醇（30%–50%）、植物以谷甾醇类调流动性，红细胞膜蛋白:脂:糖 ≈ 5:4:1',
  draw,
})
