// cb ch1-s3 显微成像技术：从可见光到电子（39-d 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、分辨率阶梯（对数尺度） ============
  b.panel(30, 132, 660, 440, { title: '一、分辨率阶梯：可见光 vs 电子束（对数尺度）' })
  const bars: [string, number, string, string][] = [
    ['电子显微镜（电子束照明）', 114, '0.1–0.2 nm', C.enz],
    ['光学显微镜（可见光照明）', 354, '≈ 0.2 μm（200 nm）', C.acc],
    ['人眼分辨率极限', 594, '≈ 0.2 mm', C.mute],
  ]
  bars.forEach(([name, xe, val, col], i) => {
    const y = 232 + i * 80
    b.text(90, y - 8, name, { size: 12, weight: 700, fill: C.ink })
    b.rect(90, y, xe - 90, 26, { fill: col, fillOp: 0.75, stroke: col, sw: 1.5, rx: 5 })
    b.text(xe + 10, y + 18, val, { size: 12.5, weight: 700, fill: col === C.mute ? C.sub : col })
  })
  b.wtext(56, 448, '光镜受照明光波长限制，仅能分辨细胞轮廓与较大的细胞器；电镜以电子束照明，波长仅为可见光的十万分之一量级，可直达超微结构与生物大分子。', { size: 11, fill: C.sub, maxW: 600, lh: 15.5 })
  // 对数轴
  b.line(90, 490, 650, 490, { stroke: C.sub, sw: 2, marker: 'mute' })
  const ticks: [number, string][] = [[90, '0.1 nm'], [170, '1 nm'], [250, '10 nm'], [330, '100 nm'], [410, '1 μm'], [490, '10 μm'], [570, '100 μm'], [650, '1 mm']]
  ticks.forEach(([tx, lab]) => {
    b.line(tx, 490, tx, 496, { stroke: C.sub, sw: 1.8 })
    b.ctext(tx, 514, lab, { size: 10.5, fill: C.mute })
  })
  // 对象尺度括注
  const spans: [number, number, string][] = [[170, 250, '蛋白质 ~nm 级'], [250, 330, '病毒 ~0.1 μm'], [410, 490, '细菌 1–10 μm'], [490, 650, '细胞 10–100 μm']]
  spans.forEach(([x1, x2, lab]) => {
    b.line(x1, 548, x2, 548, { stroke: C.mute, sw: 1.4 })
    b.line(x1, 548, x1, 543, { stroke: C.mute, sw: 1.4 })
    b.line(x2, 548, x2, 543, { stroke: C.mute, sw: 1.4 })
    b.ctext((x1 + x2) / 2, 568, lab, { size: 10, fill: C.mute })
  })

  // ============ 二、光学显微镜家族 ============
  b.panel(710, 132, 660, 440, { title: '二、光学显微镜家族：活细胞观察与分子定位' })
  const lmCards: [number, number, string, string][] = [
    [736, 186, '相差显微镜', 'Zernike 发明（1953 年诺贝尔物理学奖）：相位差转换为振幅差（明暗对比），不染色、不固定即可观察活细胞内部结构与分裂动态。'],
    [1046, 186, '微分干涉差（DIC）', '利用偏振光干涉原理，呈现具有浮雕感的三维影像。'],
    [736, 370, '荧光显微镜', '荧光染料／荧光蛋白标记目的分子，免疫荧光精确定位抗原；GFP 作为活体报告分子实现动态观察（2008 年诺贝尔化学奖）。'],
    [1046, 370, '激光共聚焦显微镜', '激光逐点扫描＋共聚焦针孔排除焦平面外杂散光，逐层「光学切片」并三维重建——亚细胞定位与共定位分析主力。'],
  ]
  lmCards.forEach(([x, y, t, s]) => {
    b.rect(x, y, 300, 168, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
    b.text(x + 16, y + 26, t, { size: 13.5, weight: 700, fill: C.accD })
    b.wtext(x + 16, y + 50, s, { size: 11, fill: C.sub, maxW: 268, lh: 15.5 })
  })
  b.text(736, 556, '相差／DIC 用于活细胞动态观察，荧光／共聚焦用于特定分子的定位与共定位。', { size: 11.5, fill: C.mute })

  // ============ 三、电子显微镜家族 ============
  b.panel(30, 586, 660, 394, { title: '三、电子显微镜家族：超微结构到近原子分辨率' })
  const emCards: [number, string, string][] = [
    [632, '透射电子显微镜（TEM）', '电子束穿透 50–100 nm 超薄切片成像，观察细胞内部超微结构；戊二醛–锇酸双重固定、环氧树脂包埋、醋酸铀–柠檬酸铅双染色；负染色观察病毒与蛋白复合体。'],
    [748, '扫描电子显微镜（SEM）', '收集电子束扫描样品激发的二次电子成像，呈现细胞表面三维形貌（纤毛、微绒毛）；样品经临界点干燥与金属镀膜。'],
    [864, '冷冻电镜（cryo-EM）', '快速冷冻玻璃化，避免冰晶损伤与化学固定假象；冷冻断裂–蚀刻剖开生物膜；单颗粒分析（SPA）与 cryo-ET 解析分子机器近原子结构——2017 年诺贝尔化学奖（「生物分子的冷冻革命」）。'],
  ]
  emCards.forEach(([y, t, s]) => {
    b.rect(56, y, 608, 104, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
    b.text(72, y + 24, t, { size: 13, weight: 700, fill: C.enzD })
    b.wtext(72, y + 46, s, { size: 10.5, fill: C.sub, maxW: 578, lh: 15 })
  })

  // ============ 四、研究目的 → 首选技术 ============
  b.panel(710, 586, 660, 394, { title: '四、研究目的 → 首选成像技术' })
  b.table(736, 648, 610, {
    headers: ['研究目的', '首选技术'],
    colW: [330, 280],
    rowH: 48,
    fontSize: 12,
    rows: [
      ['活细胞动态观察', '相差 / DIC'],
      ['特定分子的定位与共定位', '荧光 / 共聚焦显微镜'],
      ['细胞器超微结构', '透射电镜 TEM'],
      ['细胞表面形貌', '扫描电镜 SEM'],
      ['大分子机器三维结构', '冷冻电镜 cryo-EM'],
    ],
  })
  b.text(736, 952, '分辨率与研究目的共同决定成像技术的选择。', { size: 11.5, fill: C.mute })
}

export default scene({
  title: '显微成像技术：从可见光到电子',
  subtitle: '分辨率是首要指标——光镜约 0.2 μm、电镜可达 0.1–0.2 nm；相差看活细胞、共聚焦做光学切片与三维重建、冷冻电镜解析近原子结构（GFP 2008 / cryo-EM 2017 诺贝尔化学奖）',
  draw,
})
