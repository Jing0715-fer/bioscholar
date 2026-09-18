// vi ch10-s3 抗原漂移与免疫逃逸（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、流感 HA：漂移与抗原图谱 ============
  b.panel(30, 132, 660, 430, { title: '一、流感 HA：漂移的靶点与抗原图谱' })
  b.wtext(46, 190, 'A 型流感 H3N2 的 HA 每年积累约 1%–2% 氨基酸替换，集中于头部围绕受体结合部位的五个主要抗体表位。', { size: 11, fill: C.sub, maxW: 300, lh: 16 })
  // HA 单体示意
  b.ellipse(160, 310, 56, 42, { fill: C.badL, stroke: C.bad, sw: 2.2 })
  b.polygon([[144, 348], [176, 348], [186, 424], [134, 424]], { fill: C.panelB, stroke: C.bad, sw: 1.8 })
  b.rect(150, 262, 20, 12, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 3 })
  b.ctext(160, 250, '受体结合部位', { size: 9, weight: 700, fill: C.accD })
  ;[[112, 288], [208, 288], [122, 332], [198, 332], [160, 286]].forEach(([ex2, ey], i) => {
    b.circle(ex2, ey, 13, { fill: '#ffffff', stroke: C.pro, sw: 2 })
    b.ctext(ex2, ey + 4, `${'①②③④⑤'[i]}`, { size: 10, weight: 700, fill: C.proD })
  })
  b.ctext(160, 452, 'HA 单体（示意）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(160, 470, '茎部高度保守，头部承压漂移', { size: 9.5, fill: C.mute })
  // 抗原图谱
  b.ctext(505, 250, '抗原图谱（Smith 等 2004）', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(370, 264, 280, 176, { fill: '#ffffff', stroke: C.line, sw: 1.6, rx: 6 })
  const cl: [number, number][] = [[424, 320], [505, 386], [588, 314]]
  cl.forEach(([ccx, ccy], ci) => {
    const offs: [number, number][] = [[-18, -8], [14, -14], [-6, 14], [20, 8], [-24, 10], [4, -24], [10, 22], [-12, -22]]
    offs.forEach(([dx, dy]) => b.circle(ccx + dx, ccy + dy, 4.4, { fill: ci === 2 ? C.bad : ci === 1 ? C.rna : C.acc, fillOp: 0.85 }))
    b.ctext(ccx, ccy + 44, `集群 ${ci + 1}`, { size: 9.5, weight: 700, fill: C.sub })
  })
  b.arrow(448, 320, 480, 366, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(530, 380, 562, 336, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(510, 296, '抗原集群跃迁', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(510, 312, '每二至八年一次', { size: 9.5, fill: C.mute })
  b.wtext(46, 486, '抗原图谱把数十年血凝抑制数据投成二维地图：H3N2 的抗原演化并非匀速漂移，而是集群间跃迁；鸡胚适应突变曾致 2014–2015 季节疫苗有效性跌至两成上下。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、糖盾与 HIV 包膜 ============
  b.panel(710, 132, 660, 430, { title: '二、糖盾：把表位藏进糖链之间' })
  b.ctext(866, 196, '1918 H1N1：糖链寥寥', { size: 10.5, weight: 700, fill: C.sub })
  b.ellipse(866, 262, 52, 38, { fill: C.badL, stroke: C.bad, sw: 2 })
  ;[[830, 236], [902, 244]].forEach(([gx, gy]) => {
    b.line(gx, gy + 12, gx, gy, { stroke: C.acc, sw: 2 })
    b.circle(gx - 5, gy - 2, 3.4, { fill: C.acc })
    b.circle(gx + 5, gy - 2, 3.4, { fill: C.acc })
  })
  b.ctext(1130, 196, '现代季节性毒株：增设数处', { size: 10.5, weight: 700, fill: C.sub })
  b.ellipse(1130, 262, 52, 38, { fill: C.badL, stroke: C.bad, sw: 2 })
  ;[[1082, 232], [1108, 226], [1136, 224], [1164, 234], [1096, 288], [1160, 286], [1130, 296]].forEach(([gx, gy]) => {
    b.line(gx, gy + 12, gx, gy, { stroke: C.acc, sw: 2 })
    b.circle(gx - 5, gy - 2, 3.4, { fill: C.acc })
    b.circle(gx + 5, gy - 2, 3.4, { fill: C.acc })
  })
  // 抗体被糖盾挡住
  b.path('M 1130,352 l -8,20 M 1130,352 l 8,20 M 1130,352 l 0,24', { stroke: C.enz, sw: 2.6 })
  b.ctext(1130, 396, '抗体只能打「糖链之间可及的角落」', { size: 9.5, fill: C.enzD })
  b.ctext(866, 340, '糖链如盾牌遮蔽蛋白表位，', { size: 9.5, fill: C.sub })
  b.ctext(866, 356, '抗原则转向可及角落继续漂移', { size: 9.5, fill: C.sub })
  // HIV gp120
  b.wtext(726, 424, 'HIV gp120：高变区加约半表面积的糖链覆盖，使中和应答快速逃逸；广谱中和抗体靶向 CD4 结合位点、V3/V1V2 聚糖与 MPER 等保守表位——但其发育需体细胞超突变两至三成，极难经疫苗诱导。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(880, 500, '广谱中和抗体：稀有的天然解', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 7 })
  b.tag(1140, 500, '糖盾＋高变区：疫苗诱导的双屏障', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })

  // ============ 三、T 细胞逃逸：三条封锁线 ============
  b.panel(30, 586, 660, 394, { title: '三、T 细胞免疫逃逸：抗原呈递的三条封锁线' })
  const boxes: [string, string][] = [
    ['蛋白酶体', '切割产生肽'],
    ['TAP 转运', '肽入内质网'],
    ['MHC I 装载', '内质网组装'],
    ['表面呈递', 'CD8 T 细胞识别'],
  ]
  boxes.forEach(([t, s], i) => {
    const bx = 50 + i * 160
    b.rect(bx, 686, 140, 58, { fill: C.panelB, stroke: C.acc, sw: 1.8, rx: 9 })
    b.ctext(bx + 70, 710, t, { size: 12, weight: 700, fill: C.accD })
    b.ctext(bx + 70, 730, s, { size: 9.5, fill: C.mute })
    if (i < 3) b.arrow(bx + 142, 715, bx + 158, 715, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  })
  // 三条封锁线
  const blocks: [number, string, string][] = [
    [210, 'HSV ICP47', '封堵 TAP'],
    [370, 'CMV US2/US3/US11', '降解 MHC I'],
    [530, 'HIV Nef', '选择性下调 HLA-A/B'],
  ]
  blocks.forEach(([bx, nm, mo]) => {
    b.line(bx, 668, bx, 682, { stroke: C.bad, sw: 2.6 })
    b.ctext(bx, 662, '✕', { size: 13, weight: 700, fill: C.bad })
    b.tag(bx, 774, `${nm}`, { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 6 })
    b.ctext(bx, 800, mo, { size: 9.5, fill: C.sub })
  })
  b.wtext(50, 840, '表位突变与抗原呈递下调是 T 细胞逃逸的两大利器——病毒把「山不就我」变成「拆路断桥」。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 878, 'CTL 杀伤受限于 HLA 呈递：Nef 只下调 HLA-A/B 而保留 HLA-C/E，NK 细胞的「自我」信号不被惊动——逃逸与防误伤并行。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、漂移 vs 转变＋免疫印记 ============
  b.panel(710, 586, 660, 394, { title: '四、漂移与转变对照＋免疫印记' })
  b.table(730, 652, 600, {
    headers: ['比较项目', '抗原漂移（drift）', '抗原转变（shift）'],
    rows: [
      ['机制', '点突变的渐进积累', '节段重排的亚型跃迁'],
      ['幅度', '抗原性小步微调', '亚型替换、可致大流行'],
      ['频率', '持续发生（年积约 1%–2%）', '偶发（需共感染重配）'],
    ],
    colW: [120, 240, 240], rowH: 42, fontSize: 12,
  })
  b.text(730, 852, '免疫印记（旧称「抗原原罪」，Francis 1953）：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(790, 892, '首发感染塑造记忆 B 库', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  b.arrow(950, 892, 1010, 892, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.tag(1090, 892, '此后应答偏向首发毒株', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  b.wtext(726, 926, '2009 年大流行 H1N1 期间，不同出生队列的应答谱各自偏向童年毒株——印记塑造年龄队列间的保护差异。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '抗原漂移与免疫逃逸：表位、糖盾与呈递封锁',
  subtitle: 'HA 年积 1%–2% 替换、集群每二至八年跃迁；糖盾遮蔽表位；TAP 封堵／MHC I 降解／HLA 下调三线封锁；免疫印记（Francis 1953）',
  draw,
})
