// xc ch1-s1 从矿物形态学到晶体几何学（6-xc）
import { scene, C, B } from '../../lib'

// 由 6 条边线（法线角 90°+60i°、离轴距 r·k）求六边形顶点：
// 各边线只作平移而方向不变，六边形无论如何歪斜内角恒为 120°——对应「晶面角守恒」
function hexPts(cx: number, cy: number, r: number, ks: number[], yk = 1): [number, number][] {
  const pts: [number, number][] = []
  for (let i = 0; i < 6; i++) {
    const a1 = Math.PI / 2 + (i * Math.PI) / 3
    const a2 = Math.PI / 2 + ((i + 1) * Math.PI) / 3
    const c1 = Math.cos(a1), s1 = Math.sin(a1), d1 = r * ks[i]
    const c2 = Math.cos(a2), s2 = Math.sin(a2), d2 = r * ks[(i + 1) % 6]
    const D = c1 * s2 - c2 * s1
    pts.push([cx + (d1 * s2 - d2 * s1) / D, cy + (yk * (c1 * d2 - c2 * d1)) / D])
  }
  return pts
}

// 顶点内角弧标注（v 为顶点，p1/p2 为相邻顶点）
function angleArc(b: B, v: [number, number], p1: [number, number], p2: [number, number], r: number, color: string, label: string) {
  const a1 = Math.atan2(p1[1] - v[1], p1[0] - v[0])
  const a2 = Math.atan2(p2[1] - v[1], p2[0] - v[0])
  let d = a2 - a1
  while (d > Math.PI) d -= 2 * Math.PI
  while (d < -Math.PI) d += 2 * Math.PI
  const pts: [number, number][] = []
  for (let i = 0; i <= 10; i++) {
    const a = a1 + (d * i) / 10
    pts.push([v[0] + r * Math.cos(a), v[1] + r * Math.sin(a)])
  }
  b.polyline(pts, { stroke: color, sw: 1.7 })
  const am = a1 + d / 2
  b.ctext(v[0] + (r + 18) * Math.cos(am), v[1] + (r + 18) * Math.sin(am) + 4, label, { size: 11.5, weight: 700, fill: color })
}

const draw = (b: B) => {
  // ============ 一、晶面角守恒定律 ============
  b.panel(30, 132, 660, 412, { title: '一、晶面角守恒定律（1669，斯坦诺）' })
  b.wtext(60, 196, '测量取代描述：斯坦诺以酸溶蚀与溶液培养实验推断晶体「逐层添加」生长；接触式与反射式测角仪成为十九世纪矿物学实验室的标准装备，数以万计的夹角数据记录成册。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  // 左：理想石英六棱柱（正挤压体）
  const ones = [1, 1, 1, 1, 1, 1]
  const hexT = hexPts(200, 268, 62, ones, 0.36)
  const hexB = hexPts(200, 442, 62, ones, 0.36)
  for (let i = 0; i < 6; i++) {
    const j = (i + 1) % 6
    b.polygon([[hexT[i][0], hexT[i][1]], [hexT[j][0], hexT[j][1]], [hexB[j][0], hexB[j][1]], [hexB[i][0], hexB[i][1]]],
      { fill: i === 5 ? '#bae6fd' : i % 2 === 0 ? '#e0f2fe' : '#f1f5f9', stroke: C.sub, sw: 1.4 })
  }
  b.polygon(hexB, { fill: 'none', stroke: C.faint, sw: 1.1 })
  b.polygon(hexT, { fill: '#ccfbf1', stroke: C.dna, sw: 2 })
  b.arrow(112, 436, 112, 282, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(96, 356, 'c', { size: 13, weight: 700, fill: C.dnaD, italic: true })
  b.ctext(200, 470, '石英六棱柱（理想外形）', { size: 11, weight: 700, fill: C.sub })
  b.wtext(60, 496, '无论个头大小、外形如何「歪斜」，同一矿物对应晶面间夹角恒定：石英相邻柱面间总为 120°，柱面与锥面间亦各有定值。', { size: 10.5, fill: C.sub, maxW: 250, lh: 14.5 })
  // 右上：理想横截面
  const hr = hexPts(530, 244, 56, ones)
  b.polygon(hr, { fill: C.accL, fillOp: 0.55, stroke: C.acc, sw: 2 })
  angleArc(b, hr[3], hr[2], hr[4], 20, C.bad, '120°')
  b.ctext(530, 178, '理想横截面（垂直 c 轴）', { size: 10.5, weight: 700, fill: C.accD })
  // 右下：歪斜横截面（各面平行内移）
  const ks = [1.28, 0.58, 1.06, 0.72, 1.22, 0.62]
  const hw = hexPts(528, 408, 84, ks)
  b.polygon(hw, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 2 })
  angleArc(b, hw[2], hw[1], hw[3], 24, C.bad, '120°')
  angleArc(b, hw[5], hw[4], hw[0], 24, C.bad, '120°')
  b.ctext(528, 530, '歪斜横截面：各面平行内移，夹角不变', { size: 10.5, weight: 700, fill: C.okD })

  // ============ 二、解理积木与有理指数定律 ============
  b.panel(710, 132, 660, 412, { title: '二、解理「积木」与有理指数定律（1784，阿羽依）' })
  b.wtext(730, 186, '观察方解石解理：大小不一的碎块仍保持同样的菱面体外形与解理性；晶体可沿解理面一路劈分，整个晶体是小积木在三维空间的密堆砌。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // 左：积木网格
  const gu: [number, number] = [48, 0], gv: [number, number] = [16, 24], g0: [number, number] = [770, 396]
  for (let i = 0; i <= 4; i++)
    b.line(g0[0] + gu[0] * i, g0[1] + gu[1] * i, g0[0] + gu[0] * i + gv[0] * 3, g0[1] + gu[1] * i + gv[1] * 3, { stroke: C.sub, sw: 1.4 })
  for (let j = 0; j <= 3; j++)
    b.line(g0[0] + gv[0] * j, g0[1] + gv[1] * j, g0[0] + gv[0] * j + gu[0] * 4, g0[1] + gv[1] * j + gu[1] * 4, { stroke: C.sub, sw: 1.4 })
  b.polygon([[882, 420], [930, 420], [946, 444], [898, 444]], { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.arrow(900, 482, 916, 450, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ctext(890, 498, '「组成分子」（不可再分的小平行六面体）', { size: 10.5, weight: 700, fill: C.enzD })
  // 右：截距与有理指数
  const O: [number, number] = [1080, 470]
  for (let i = 0; i <= 4; i++) for (let j = 0; j <= 3; j++)
    b.circle(1080 + 44 * i + 22 * j, 470 - 38.1 * j, 2.6, { fill: C.mute })
  b.arrow(O[0], O[1], 1306, O[1], { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(O[0], O[1], 1161, 329, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(1318, 476, 'a', { size: 13, weight: 700, fill: C.accD, italic: true })
  b.ctext(1172, 320, 'b', { size: 13, weight: 700, fill: C.accD, italic: true })
  b.line(1070, 418.6, 1086.6, 504.3, { stroke: C.enz, sw: 1.5, dash: '5 4' })
  b.line(1140.5, 327.1, 1171.4, 487.2, { stroke: C.enz, sw: 2.4 })
  b.circle(1168, 470, 4.6, { fill: C.enz, stroke: '#ffffff', sw: 1.2 })
  b.circle(1146, 355.7, 4.6, { fill: C.enz, stroke: '#ffffff', sw: 1.2 })
  b.ctext(1180, 494, '2a', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(1124, 346, '3b', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(1218, 402, '晶面（虚线为平行面族）', { size: 10.5, weight: 700, fill: C.enzD })
  b.wtext(730, 512, '截距之比皆为有理数：二维截距 2a、3b 取倒数 1/2、1/3 化为整数比 3:2；三维例截距 2a、3b、6c 得 (321)。Miller 1839 年规范化的指数记号由此奠基（第 2 章）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14.5 })

  // ============ 三、点阵、晶类与空间群 ============
  b.panel(30, 558, 660, 412, { title: '三、点阵、晶类与空间群：纯几何的完备分类（1830–1894）' })
  b.wtext(60, 606, '十九世纪纯几何推导把晶体对称分类穷举完毕——在不知道任何原子实体的年代完成，堪称「理论先行」的典范。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.timelineH(70, 690, 580, [
    { at: 0.03, label: '1669', sub: '斯坦诺·晶面角守恒', above: true, c: C.dna },
    { at: 0.20, label: '1784', sub: '阿羽依·积木与有理指数', c: C.acc },
    { at: 0.38, label: '1830', sub: '赫塞尔·32 种晶类', above: true, c: C.dna },
    { at: 0.55, label: '1850', sub: '布拉维·14 种格子', c: C.acc },
    { at: 0.72, label: '1879', sub: '索恩克·65 个 Sohncke 群', above: true, c: C.dna },
    { at: 0.90, label: '1890–94', sub: '舍恩夫利斯等·230 空间群', c: C.bad },
  ])
  b.tag(355, 812, '空间群＝点群对称操作＋平移周期性', { fill: C.proL, stroke: C.pro, size: 12, weight: 700, tfill: C.proD, pad: 12 })
  b.tag(140, 864, '32 种晶类（点群）', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD })
  b.tag(355, 864, '14 种布拉维格子', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD })
  b.tag(565, 864, '230 种空间群', { fill: C.badL, stroke: C.bad, size: 12.5, weight: 700, tfill: C.badD })
  b.wtext(60, 916, '后世X射线测定的数千种晶体，无一跳出 230 种空间群之外；由 L-氨基酸构成的手性生物分子只能栖身 65 个 Sohncke 群（第 2 章）。', { size: 10.5, fill: C.mute, maxW: 600, lh: 14.5 })

  // ============ 四、光学晶体学 ============
  b.panel(710, 558, 660, 412, { title: '四、光学晶体学：偏光显微镜下的各向异性' })
  b.polygon([[850, 635], [990, 660], [970, 770], [830, 745]], { fill: '#fef3c7', fillOp: 0.55, stroke: C.warn, sw: 2.2 })
  b.ctext(908, 700, '方解石', { size: 11.5, weight: 700, fill: C.warnD })
  b.arrow(748, 692, 838, 690, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(840, 690, 1028, 690, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.arrow(840, 690, 958, 778, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.ctext(1032, 672, '寻常光 o', { size: 11, weight: 700, fill: C.accD })
  b.ctext(1000, 796, '非常光 e', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(730, 826, '1669 年巴尔托林：一束入射光分解为两束——折射率随方向而变（各向异性），正是内部周期有序的光学表现。', { size: 10.5, fill: C.sub, maxW: 296, lh: 14.5 })
  // 正交偏光光路
  b.arrow(1058, 690, 1088, 690, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(1092, 658, 13, 64, { fill: '#e0f2fe', stroke: C.acc, sw: 1.6 })
  for (let i = 0; i < 4; i++) b.line(1095 + i * 3, 662, 1095 + i * 3, 718, { stroke: C.acc, sw: 1.1, opacity: 0.7 })
  b.arrow(1105, 690, 1135, 690, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(1139, 660, 62, 60, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(1170, 694, '晶片', { size: 11, weight: 700, fill: C.proD })
  b.arrow(1201, 690, 1231, 690, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(1235, 658, 13, 64, { fill: '#e0f2fe', stroke: C.acc, sw: 1.6 })
  for (let i = 0; i < 4; i++) b.line(1237, 665 + i * 13, 1246, 665 + i * 13, { stroke: C.acc, sw: 1.1, opacity: 0.7 })
  b.arrow(1248, 690, 1278, 690, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(1098, 748, '起偏器 P', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(1242, 748, '检偏器 A（正交）', { size: 10.5, weight: 700, fill: C.accD })
  b.wtext(1060, 776, '正交偏光间：立方晶系等均质体全消光；非均质体显示干涉色与消光位，锥光照明下出现揭示对称性的干涉图。', { size: 10.5, fill: C.sub, maxW: 276, lh: 14.5 })
  b.wtext(730, 884, '马吕斯 1808 年发现偏振；尼科尔 1828 年发明方解石偏振棱镜；格罗特五卷《化学晶体学》登记晶形、光学符号与消光角。诺伊曼原理：晶体任何物理性质的对称元素不少于其所属晶类的对称元素。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '从矿物形态学到晶体几何学：夹角、指数与对称分类',
  subtitle: '1669 晶面角守恒（石英柱面间 120°，歪斜不改变夹角）；1784 有理指数定律（截距 2a、3b、6c 得 (321)）；32 晶类、14 布拉维格子、230 空间群先于原子实证穷举完毕；偏光显微镜以双折射鉴定晶系',
  draw,
})
