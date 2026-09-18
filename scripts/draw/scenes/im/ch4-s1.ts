// im ch4-s1 补体系统概览：三途径级联瀑布（39-g 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、级联瀑布 ============
  b.panel(30, 132, 1340, 330, { title: '一、补体激活的级联瀑布：三条途径在 C3 汇合，共用末端通路形成 MAC' })

  const routes: Array<[number, string, string, string, string, string]> = [
    [180, '经典途径', '免疫复合物（抗原-抗体）', '结合 C1q 起步', C.acc, C.accD],
    [258, '凝集素途径', '甘露糖结合凝集素（MBL）', '识别病原体表面糖结构', C.pro, C.proD],
    [336, '旁路途径', '血清 C3 低水平自发水解', '微生物表面激活并放大', C.rna, C.rnaD],
  ]
  routes.forEach(([yy, name, s1, s2, col, colD]) => {
    b.rect(60, yy, 330, 60, { fill: col, fillOp: 0.1, stroke: col, sw: 1.7, rx: 8 })
    b.text(76, yy + 24, name, { size: 13.5, weight: 700, fill: colD })
    b.wtext(76, yy + 44, `${s1}——${s2}`, { size: 9.5, fill: C.sub, maxW: 300, lh: 13 })
  })
  b.arrow(394, 210, 448, 262, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(394, 288, 446, 288, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(394, 366, 448, 314, { stroke: C.mute, sw: 2, marker: 'mute' })

  // C3 hub
  b.circle(490, 288, 38, { fill: C.enzL, stroke: C.enz, sw: 3 })
  b.ctext(490, 295, 'C3', { size: 21, weight: 700, fill: C.enzD })
  b.ctext(490, 350, '血清浓度最高（约 1.2–1.6 g/L）', { size: 9.5, fill: C.mute })

  b.arrow(530, 288, 586, 288, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  const chain: Array<[number, string, string, number]> = [
    [590, 'C3 转化酶', 'C4b2a / C3bBb', 210],
    [824, 'C5 转化酶', '级联枢纽', 150],
    [1006, 'C5b', '末端通路起点', 90],
  ]
  chain.forEach(([x, t, s, w]) => {
    b.rect(x, 262, w, 52, { fill: C.bg, stroke: C.enz, sw: 1.6, rx: 8 })
    b.ctext(x + w / 2, 284, t, { size: 12.5, weight: 700, fill: C.enzD })
    b.ctext(x + w / 2, 304, s, { size: 9.5, fill: C.mute })
  })
  b.arrow(802, 288, 820, 288, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(976, 288, 1002, 288, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(1098, 288, 1126, 288, { stroke: C.enz, sw: 2, marker: 'enz' })

  // MAC
  b.rect(1130, 250, 200, 76, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1230, 274, '攻膜复合物 MAC', { size: 13, weight: 700, fill: C.bad })
  b.ctext(1230, 296, 'C5b·C6·C7·C8 募集 12–18 个 C9', { size: 9, fill: C.sub })
  b.ctext(1230, 308, '聚合成贯穿脂质双层的管状孔道', { size: 9, fill: C.sub })
  // 膜上孔道示意
  b.bilayer(1150, 350, 160, { tint: C.bad, op: 0.5 })
  b.polygon([[1215, 340], [1226, 344], [1230, 366], [1226, 370], [1215, 374], [1210, 366]], { fill: C.bad, fillOp: 0.75, stroke: C.bad, sw: 1.6 })
  b.ctext(1230, 396, '管状孔道 → 溶菌溶细胞', { size: 9.5, fill: C.mute })

  // C3b 正反馈
  b.polyline([[695, 314], [695, 380], [398, 380]], { stroke: C.rna, sw: 2, dash: '6 4', marker: 'rna' })
  b.ctext(545, 400, 'C3b 正反馈放大回路（回到旁路途径）', { size: 10.5, weight: 700, fill: C.rnaD })

  b.wtext(60, 436, '补体系统由 40 余种可溶性与膜结合蛋白组成，肝细胞与单核-巨噬细胞为主要合成场所；调节蛋白维持级联的时空边界。', { size: 11, fill: C.mute, maxW: 1280, lh: 15 })

  // ============ 二、三途径对照 ============
  b.panel(30, 478, 1340, 250, { title: '二、三条激活途径对照：殊途同归' })
  b.table(60, 524, 1280, {
    headers: ['比较项目', '经典途径', '凝集素途径', '旁路途径'],
    colW: [130, 360, 380, 410],
    rowH: 40,
    fontSize: 12,
    rows: [
      ['启动方式', '抗原-抗体复合物结合 C1q', 'MBL 识别病原体表面甘露糖样糖结构', '血清 C3 持续低水平自发性水解'],
      ['关键成分', 'C1（q/r/s）· C2 · C4', 'MBL · MASP · C2 · C4', 'C3b · B 因子 · D 因子 · 备解素'],
      ['C3 转化酶', 'C4b2a', 'C4b2a', 'C3bBb'],
      ['特点', '依赖抗体，连接适应性与固有免疫', '不依赖抗体，糖型识别', '可放大的正反馈回路'],
    ],
  })

  // ============ 三、生物学效应与调节 ============
  b.panel(30, 744, 1340, 234, { title: '三、补体的生物学效应与调节蛋白的守护' })
  const effs: Array<[number, string, string]> = [
    [70, '溶菌溶细胞', 'MAC 破坏靶细胞膜'],
    [330, '调理吞噬', 'C3b 标记靶物'],
    [590, '过敏毒素与趋化', 'C3a · C5a'],
    [850, '免疫复合物清除', '防止沉积致病'],
    [1110, 'B 细胞共刺激', 'C3d–CR2 协同'],
  ]
  effs.forEach(([x, t, s]) => {
    b.rect(x, 788, 220, 66, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 8 })
    b.ctext(x + 110, 812, t, { size: 12.5, weight: 700, fill: C.dnaD })
    b.ctext(x + 110, 836, s, { size: 10.5, fill: C.sub })
  })
  b.rect(60, 880, 1280, 82, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.5, rx: 9 })
  b.text(80, 908, '调节蛋白缺陷的对应疾病', { size: 13.5, weight: 700, fill: C.bad })
  b.text(80, 936, '遗传性血管神经性水肿（C1 抑制物缺陷） · 阵发性睡眠性血红蛋白尿（PNH） · 反复化脓性感染', { size: 11.5, fill: C.sub })
  b.ctext(700, 962, '调节蛋白维持补体级联的时空边界——既保效应，又防自伤', { size: 11.5, weight: 600, fill: C.bad })
}

export default scene({
  title: '补体系统概览：三条激活途径的级联瀑布与共同末端通路',
  subtitle: '40 余种蛋白组成、肝细胞与单核-巨噬细胞合成，C3 血清浓度最高（约 1.2–1.6 g/L）；经典/凝集素/旁路三途径在 C3 汇合，经 C3 转化酶（C4b2a 或 C3bBb）与 C5 转化酶进入共同末端通路，C5b 募集 12–18 个 C9 形成攻膜复合物；效应涵盖溶菌、调理、过敏毒素、免疫复合物清除与 B 细胞共刺激',
  draw,
})
