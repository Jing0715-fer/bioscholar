// mt ch5-s2 动物的 GLUT 家族：SLC2A 工位表 | GLUT1 构象转换 | GLUT4 转位链 | 脑供糖三级接力
import { scene, C, B } from '../../lib'

type Pt = [number, number]

/** 矩形绕中心旋转 → 多边形顶点 */
const rotRect = (cx: number, cy: number, w: number, h: number, deg: number): Pt[] => {
  const a = (deg * Math.PI) / 180
  const c = Math.cos(a)
  const s = Math.sin(a)
  const hw = w / 2
  const hh = h / 2
  return ([
    [-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh],
  ] as Pt[]).map(([px, py]) => [cx + px * c - py * s, cy + px * s + py * c] as Pt)
}

const draw = (b: B) => {
  // ============ 一、SLC2A 家族：十四个成员的工位表 ============
  b.panel(30, 132, 680, 420, { title: '一、SLC2A 家族：十四个成员的工位表' })
  b.wtext(50, 182, '人类 14 个命名成员：GLUT1–12、HMIT（GLUT13，H^{+} 耦联肌醇）、GLUT14（GLUT3 复制近缘）；分 I（1–4 经典葡萄糖）/ II（5、7、9、11 果糖·尿酸）/ III（6、8、10、12 与 HMIT）三大类——1985 年 Mueckler 以表达克隆从 HepG2 细胞首获 GLUT1', { size: 10, fill: C.sub, maxW: 630, lh: 18 })
  b.table(50, 232, 610, {
    headers: ['成员', '主要底物', 'K_{m}（约）', '主要分布', '功能标签'],
    colW: [80, 112, 88, 178, 152],
    fontSize: 13,
    rowH: 34,
    rows: [
      ['GLUT1', '葡萄糖', '1–2 mM', '红细胞、血脑屏障内皮', '基础供给看门人'],
      ['GLUT2', '葡萄糖、果糖', '15–20 mM', '肝、胰岛 β、肾、小肠', '葡萄糖感受器'],
      ['GLUT3', '葡萄糖', '1.4 mM', '神经元、胎盘', '最高亲和供糖'],
      ['GLUT4', '葡萄糖', '约 5 mM', '骨骼肌、心肌、脂肪', '胰岛素响应'],
      ['GLUT5', '果糖', '约 6 mM', '小肠、睾丸', '果糖专用通道'],
      ['HMIT（13）', '肌醇', '毫摩尔级', '囊泡、溶酶体膜', 'H^{+} 耦联异类'],
    ],
  })
  b.wtext(50, 508, '同为葡萄糖载体：GLUT2 把 K_{m} 放在线性段当「感受器」（15–20 mM，速率随血糖成比例）；GLUT1/3 放在饱和段当「供应商」——结构几乎相同、动力学一字之差，功能便分道扬镳；SLC2A2 突变致 Fanconi-Bickel 综合征', { size: 10, fill: C.sub, maxW: 630, lh: 23 })

  // ============ 二、GLUT1 的摇摆开关：构象转换 ============
  b.panel(730, 132, 640, 420, { title: '二、GLUT1 的摇摆开关：内向 ⇌ 外向构象转换' })
  b.text(750, 195, '全部成员共享 MFS 硬件：N/C 两束摇摆把结合腔从一侧翻向另一侧', { size: 10.5, weight: 600, fill: C.sub })
  b.text(752, 260, '胞外', { size: 9, fill: C.mute, weight: 600 })
  b.text(752, 388, '胞质', { size: 9, fill: C.mute, weight: 600 })
  b.line(774, 257, 800, 268, { stroke: C.faint, sw: 1 })
  b.line(774, 385, 800, 372, { stroke: C.faint, sw: 1 })

  const glState = (cx: number, cy: number, open: 'out' | 'in') => {
    const off = 24, bw = 24, bh = 78, tilt = 14
    const s = open === 'out' ? 1 : -1
    const L = rotRect(cx - off, cy, bw, bh, -s * tilt)
    const R = rotRect(cx + off, cy, bw, bh, s * tilt)
    b.polygon([L[1], R[0], R[3], L[2]], { fill: C.accL, fillOp: 0.6 })
    b.polygon(L, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.polygon(R, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.ctext(cx - off, cy + 3.5, 'N', { size: 10, weight: 700, fill: C.proD })
    b.ctext(cx + off, cy + 3.5, 'C', { size: 10, weight: 700, fill: C.proD })
    b.ion(cx, cy - s * 26, 'G', { r: 8, size: 9, fill: C.accL, stroke: C.acc, tfill: C.accD })
    b.line(cx - 9, cy + s * 41, cx + 9, cy + s * 41, { stroke: C.enz, sw: 2.6 })
  }
  b.bilayer(816, 293.5, 130)
  b.bilayer(1126, 293.5, 130)
  b.ctext(880, 232, '外向开口（GLUT3 捕获态）', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(1190, 232, '内向开口（GLUT1 捕获态）', { size: 10.5, weight: 700, fill: C.proD })
  glState(880, 300, 'out')
  glState(1190, 300, 'in')
  b.line(960, 300, 1070, 300, { stroke: C.sub, sw: 2.2, marker: 'ink', markerStart: 'ink' })
  b.ctext(1015, 326, 'N / C 两束绕伪对称轴摇摆', { size: 10, weight: 600, fill: C.sub })

  // —— MFS 拓扑条（12 TMS = 2 束 × 2 个三螺旋重复）——
  b.bilayer(756, 413.5, 300)
  const cyl = (x: number, fill: string, stroke: string) => b.rect(x, 403, 11, 34, { fill, stroke, sw: 1.6, rx: 3 })
  for (let i = 0; i < 3; i++) cyl(770 + i * 21, C.proL, C.pro)
  for (let i = 0; i < 3; i++) cyl(833 + i * 21, C.proL, C.pro)
  for (let i = 0; i < 3; i++) cyl(916 + i * 21, C.proL, C.pro)
  for (let i = 0; i < 3; i++) cyl(979 + i * 21, C.proL, C.pro)
  ;[[766], [829], [912], [975]].forEach(([x]) => b.rect(x, 399, 61, 42, { fill: 'none', stroke: C.faint, sw: 1.2, dash: '4 3', rx: 6 }))
  b.braceH(766, 452, 124, { label: 'N 端束（TMS 1–6）', size: 10, fill: C.proD })
  b.braceH(912, 452, 124, { label: 'C 端束（TMS 7–12）', size: 10, fill: C.proD })
  b.wtext(750, 500, 'MFS 拓扑：12 TMS = N 束（1–6）+ C 束（7–12），每束各由一对三螺旋重复拼成——伪二重对称是摇摆开关的硬件基础；摇摆全程葡萄糖被锁在结合腔内，中途不许逃逸', { size: 10, fill: C.sub, maxW: 600, lh: 18 })

  // ============ 三、GLUT4 转位：胰岛素的机动调度 ============
  b.panel(30, 570, 680, 415, { title: '三、GLUT4 转位：胰岛素的机动调度' })
  const box = (x: number, y: number, w: number, h: number, label: string, fill: string, stroke: string, size = 11) => {
    b.rect(x, y, w, h, { fill, stroke, sw: 1.8, rx: 7 })
    b.ctext(x + w / 2, y + h / 2 + 4, label, { size, weight: 600, fill: C.ink })
  }
  box(56, 620, 70, 32, '胰岛素', C.rnaL, C.rna)
  box(156, 620, 70, 32, '受体（RTK）', C.rnaL, C.rna, 10)
  box(256, 620, 56, 32, 'IRS', C.accL, C.acc)
  box(340, 620, 70, 32, 'PI3K', C.accL, C.acc)
  box(434, 620, 60, 32, 'AKT', C.accL, C.acc)
  b.arrow(126, 636, 152, 636, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(226, 636, 252, 636, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(312, 636, 338, 636, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(410, 636, 432, 636, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  // AKT 磷酸化 AS160（解除 Rab 刹车）
  b.polyline([[464, 652], [464, 668], [340, 668], [340, 686]], { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(386, 660, '磷酸化', { size: 9, fill: C.sub })
  box(240, 688, 116, 32, 'AS160（TBC1D4）', C.panelB, C.sub, 9.5)
  box(390, 688, 100, 32, 'Rab-GTP', C.okL, C.ok, 10)
  box(560, 688, 130, 32, '运动 → AMPK', C.warnL, C.warn, 10)
  b.arrow(356, 704, 386, 704, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(371, 684, '失活·刹车解除', { size: 8.5, fill: C.sub })
  b.arrow(440, 720, 440, 748, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.arrow(625, 720, 625, 748, { stroke: C.warn, sw: 1.8, marker: 'warn', dash: '4 3' })
  b.text(633, 738, '并行调度', { size: 9, fill: C.warnD })
  // GSV 储存囊泡
  b.text(56, 758, 'GSV 储存囊泡（静息时约 90% 的 GLUT4 在此）', { size: 10, weight: 600, fill: C.sub })
  const gsv = (cx: number, cy: number, r: number) => {
    b.vesicle(cx, cy, r, { fill: C.bg, stroke: C.dna, sw: 2.2 })
    for (let i = 0; i < 3; i++) b.rect(cx - 16 + i * 12, cy - 4, 9, 8, { fill: C.proL, stroke: C.pro, sw: 1, rx: 2 })
  }
  gsv(450, 785, 30)
  gsv(560, 795, 24)
  // 质膜与 GLUT4 上膜
  b.bilayer(56, 855.5, 634)
  b.rect(440, 849, 52, 38, { fill: C.proL, stroke: C.pro, sw: 2, rx: 6 })
  b.ctext(466, 871, 'GLUT4', { size: 9.5, weight: 700, fill: C.proD })
  b.arrow(458, 818, 464, 845, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(376, 838, '转位融合', { size: 9.5, fill: C.sub })
  b.text(56, 838, '数分钟内膜上 GLUT4 增多数倍', { size: 10, weight: 600, fill: C.ink })
  b.ion(466, 822, 'G', { r: 8, size: 9, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.arrow(466, 832, 466, 890, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ion(466, 904, 'G', { r: 8, size: 9, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.arrow(500, 866, 610, 795, { stroke: C.mute, sw: 1.6, marker: 'mute', dash: '5 4' })
  b.etext(688, 850, '内吞回收：网格蛋白 / 小窝蛋白', { size: 9, fill: C.mute })
  b.wtext(56, 926, '上膜与回收的动态平衡决定稳态密度；运动收缩经 AMPK 不待胰岛素自发上膜——为供糖中断备了双保险', { size: 10, fill: C.sub, maxW: 620, lh: 18 })
  b.tag(360, 968, '2 型糖尿病：胰岛素抵抗 → 转位失灵 → 餐后血糖居高', { size: 10, weight: 700, fill: C.badL, stroke: C.bad, tfill: C.badD, pad: 12 })

  // ============ 四、脑的糖供给三级接力 ============
  b.panel(730, 570, 640, 415, { title: '四、脑的糖供给三级接力（日耗约 120 g）' })
  const comp = (x: number, w: number, fill: string, stroke: string, label: string, lfill: string) => {
    b.rect(x, 632, w, 116, { fill, stroke, sw: 2, rx: 8 })
    b.ctext(x + w / 2, 652, label, { size: 10, weight: 700, fill: lfill })
  }
  comp(750, 110, '#fee2e2', C.bad, '血液', C.badD)
  b.ctext(805, 728, '4–6 mM', { size: 9, fill: C.badD })
  comp(860, 120, C.accL, C.acc, '内皮细胞', C.accD)
  comp(980, 130, C.okL, C.ok, '星形胶质细胞', C.okD)
  b.ctext(1045, 670, '终足包裹血管', { size: 8.5, fill: C.okD })
  comp(1110, 130, C.proL, C.pro, '神经元', C.proD)
  // 紧密连接标记（血脑屏障）
  b.rect(875, 626, 14, 6, { fill: C.enz })
  b.rect(935, 626, 14, 6, { fill: C.enz })
  b.ctext(912, 616, '紧密连接', { size: 8.5, fill: C.enzD })
  // 跨壁载体（门）
  const door = (x: number, label: string) => {
    b.rect(x - 8, 662, 16, 56, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.ctext(x, 622, label, { size: 9, weight: 700, fill: C.proD })
  }
  door(860, 'GLUT1')
  door(980, 'GLUT1')
  door(1110, 'GLUT3')
  // 葡萄糖通路
  b.arrow(760, 700, 1235, 700, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  for (const gx of [790, 915, 1045, 1175]) b.ion(gx, 685, 'G', { r: 7, size: 8, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(920, 775, '血脑屏障：GLUT1 是葡萄糖入脑的几乎唯一通道', { size: 10, weight: 700, fill: C.accL, stroke: C.acc, tfill: C.accD, pad: 12 })
  b.wtext(750, 806, '三级接力：血管内皮 GLUT1（K_{m} 1–2 mM）→ 星形胶质细胞 → 神经元 GLUT3（K_{m} 约 1.4 mM，家族中亲和最高）——人脑每日耗糖约 120 g', { size: 10, fill: C.sub, maxW: 600, lh: 23 })
  b.wtext(750, 856, 'K_{m} 1–2 mM 使常态血糖（4–6 mM）下已过半饱和：入脑速率对血糖小幅波动不敏感——「脑优先」策略的分子设计', { size: 10, fill: C.sub, maxW: 600, lh: 23 })
  b.wtext(750, 906, 'GLUT1 缺陷综合征（SLC2A1 突变）：脑脊液糖低、癫痫样发作与运动障碍；生酮饮食以酮体部分绕行供能——「看门人失职」的临床镜像', { size: 10, fill: C.badD, maxW: 600, lh: 23 })
  b.wtext(750, 956, '成熟红细胞无线粒体、全靠糖酵解供能，膜上 GLUT1 密度极高——数十年来载体动力学方法学的「通用试剂盒」', { size: 9.5, fill: C.sub, maxW: 600, lh: 18 })
}

export default scene({
  title: '动物的 GLUT 家族：分工与调度',
  subtitle: 'SLC2A 十四成员均为 MFS 12 TMS 摇摆开关：GLUT1（K_m 1–2 mM）把守血脑屏障、GLUT2（15–20 mM）作葡萄糖感受器、GLUT3（1.4 mM）亲和最高、GLUT4 随胰岛素自 GSV 转位上膜——人脑日耗约 120 g 葡萄糖经三级接力入脑',
  draw,
})
