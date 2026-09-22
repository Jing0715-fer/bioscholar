// sb ch9-s4 数据收集的质量评估（Task SB-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、实时反馈四指标 ============
  b.panel(30, 132, 660, 300, { title: '一、实时反馈：cryoSPARC Live 四指标' })
  b.table(50, 180, 620, {
    headers: ['实时指标', '健康线', '越线处置'],
    colW: [150, 230, 240],
    rowH: 38,
    fontSize: 10,
    rows: [
      ['逐帧漂移', '总漂移小于约 1–2 Å 且平滑', '尖跳或持续增大即弃曝该孔'],
      ['CTF 拟合分辨率', '3–5 Å 以内', '大于 6–8 Å 查冰厚与 defocus'],
      ['每微图颗粒数', '数十至数百颗', '长期个位数停机换网'],
      ['2D 类平均质量', '类别锐利、视角多样', '优劣混判收紧挑孔标准'],
    ],
  })
  b.wtext(50, 394, '随收集同步拉取电影流，分钟级完成运动校正、CTF 拟合与颗粒挑选；滚动曲线比单点数值重要——CTF 拟合分辨率随时间缓慢下滑，常提示液氮液面或冰污染渐进恶化。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 二、载网分级 ============
  b.panel(710, 132, 660, 300, { title: '二、载网分级：空孔率与 A/B/C 纪律' })
  const squares: Array<[number, string, string, number]> = [
    [750, 'A 级：冰匀颗粒理想，全收', C.ok, 15],
    [870, 'B 级：按需补量', C.warn, 11],
    [990, 'C 级：直接放弃', C.bad, 6],
  ]
  const holeAt = (k: number, j: number) => [k, j] as [number, number]
  void holeAt
  let holeIdx = 0
  for (const [gx, lab, col, nFill] of squares) {
    b.rect(gx, 190, 100, 100, { fill: C.bg, stroke: C.sub, sw: 1.6, rx: 4 })
    for (let k = 0; k < 4; k++) for (let j = 0; j < 4; j++) {
      const hx = gx + 14 + k * 24, hy = 204 + j * 24
      if (holeIdx % 16 < nFill) b.circle(hx, hy, 6.5, { fill: col, fillOp: 0.75, stroke: col, sw: 1.2 })
      else b.circle(hx, hy, 6.5, { fill: C.bg, stroke: C.faint, sw: 1.2 })
      holeIdx++
    }
    holeIdx = 0
    void lab
  }
  b.ctext(800, 308, 'A 级：冰匀颗粒理想', { size: 9.5, weight: 600, fill: C.okD })
  b.ctext(920, 308, 'B 级：按需补量', { size: 9.5, weight: 600, fill: C.warnD })
  b.ctext(1040, 308, 'C 级：直接放弃', { size: 9.5, weight: 600, fill: C.badD })
  // 空孔率分级色带
  b.ctext(1225, 182, '空孔率分级', { size: 11.5, weight: 700, fill: C.ink })
  const bands: Array<[string, string, string, string]> = [
    ['小于 10%：良好', C.okL, C.ok, C.okD],
    ['10–30%：收紧圈孔', C.warnL, C.warn, C.warnD],
    ['大于 30%：直接换网', C.badL, C.bad, C.badD],
  ]
  let byy = 194
  for (const [t, f, s, tf] of bands) {
    b.rect(1120, byy, 210, 26, { fill: f, stroke: s, sw: 1.4, rx: 5 })
    b.ctext(1225, byy + 17, t, { size: 10, weight: 600, fill: tf })
    byy += 32
  }
  b.wtext(1120, 300, '空孔＝无冰覆盖或颗粒未挂住；大于 30% 说明 blot 或亲水化系统性失当。', { size: 8.5, fill: C.mute, maxW: 210, lh: 11.5 })
  b.wtext(730, 336, '冰厚定量：配能量过滤器以零损失峰与等离子体峰的对数比算出纳米级冰厚，无过滤器以通透度粗估——同一张网不同方格差异巨大，按方格分桶圈选，把剂量预算省给好冰。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 三、微晶冰与污染物 ============
  b.panel(30, 462, 660, 420, { title: '三、微晶冰与污染物：坏要坏得可解释' })
  b.ctext(160, 497, '微图 FFT（示意）', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(70, 505, 180, 180, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 4 })
  for (const r of [22, 42, 82]) b.circle(160, 595, r, { fill: 'none', stroke: C.line, sw: 1.2, opacity: 0.9 })
  for (const r of [32, 72]) b.circle(160, 595, r, { fill: 'none', stroke: C.acc, sw: 1.8, opacity: 0.55 })
  b.circle(160, 595, 58, { fill: 'none', stroke: C.warn, sw: 3 })
  for (const a of [0.3, 1.2, 2.2, 3.5, 4.6, 5.5]) {
    b.circle(160 + 58 * Math.cos(a), 595 + 58 * Math.sin(a), 4, { fill: C.bad, stroke: 'none' })
  }
  b.arrow(160, 688, 160, 700, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.tag(160, 714, '3.67 Å 锐环＝六方冰', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.badD, pad: 7 })
  b.wtext(60, 740, '微晶冰在 FFT 上以离散亮点或锐环现形（最强衍射环约 3.67 Å）；无定形污染则背景整体抬升。', { size: 9.5, fill: C.sub, maxW: 230, lh: 13 })
  // 污染物图鉴（2×2）
  b.path('M305,535 q20,-10 40,-2 q20,8 45,-5 q15,-8 30,0', { fill: 'none', stroke: C.warn, sw: 2.5 })
  b.ctext(400, 578, '纤维素纤维（滤纸/镊子屑）', { size: 9, fill: C.sub })
  b.polygon([[530, 530], [565, 522], [585, 540], [578, 562], [545, 565], [528, 548]], { fill: C.mute, fillOp: 0.45, stroke: C.sub, sw: 1.4 })
  b.ctext(575, 578, '硅酸盐尘埃（不规则亮块）', { size: 9, fill: C.sub })
  const net: Array<[number, number, number, number]> = [[330, 625, 360, 640], [360, 640, 395, 628], [340, 655, 370, 642], [370, 642, 400, 660], [355, 615, 375, 635]]
  for (const [x1, y1, x2, y2] of net) b.line(x1, y1, x2, y2, { stroke: C.bad, sw: 1.6, opacity: 0.8 })
  b.ctext(400, 678, '变性蛋白聚合物（网状）', { size: 9, fill: C.sub })
  for (let k = 0; k < 3; k++) for (let j = 0; j < 3; j++) b.circle(540 + k * 22, 622 + j * 19, 4, { fill: C.pro, fillOp: 0.8, stroke: 'none' })
  b.ctext(575, 678, '蛋白微晶（FFT 周期斑点）', { size: 9, fill: C.sub })
  b.wtext(56, 800, '战略意义在「可解释的坏」：识别出污染物说明纯化或操作环节有漏洞、可修；无法解释的噪声弥漫则更可能出在相机或收集参数，须停机排查硬件。蛋白微晶若可长，也是微晶电子衍射新路线的入口（第 12 章）。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 四、取向预警与规模预算 ============
  b.panel(710, 462, 660, 420, { title: '四、取向预警与数据规模预算' })
  b.ctext(810, 494, '欧拉球上的视角分布', { size: 11, weight: 700, fill: C.ink })
  b.circle(810, 565, 56, { fill: 'none', stroke: C.sub, sw: 2 })
  b.ellipse(810, 565, 56, 14, { fill: 'none', stroke: C.faint, sw: 1.2, dash: '4 4' })
  const topDots: Array<[number, number]> = [[-12, -38], [-3, -44], [6, -40], [13, -32], [-8, -30], [4, -26], [18, -42], [-18, -26], [0, -18]]
  for (const [dx, dy] of topDots) b.circle(810 + dx, 565 + dy, 3, { fill: C.ok, stroke: 'none' })
  for (const [dx, dy] of [[-40, 5], [42, 20], [-15, 30]] as Array<[number, number]>) b.circle(810 + dx, 565 + dy, 3, { fill: C.ok, fillOp: 0.5, stroke: 'none' })
  b.ellipse(810, 614, 26, 9, { fill: 'none', stroke: C.bad, sw: 1.6, dash: '4 3' })
  b.ctext(810, 640, '缺失视角', { size: 9, weight: 600, fill: C.badD })
  b.arrow(872, 596, 906, 640, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.text(914, 646, '倾转 20–40 度补数据', { size: 9.5, weight: 600, fill: C.warnD })
  b.wtext(960, 510, '预警的量化形态：把各类平均图的视角投到欧拉球，空腔一目了然。对策四联：小角度倾转 20–40 度、调 defocus 深度「照亮」弱视角、更换支持膜、回第 2 节改制样——倾转只救急，界面吸附的根治须回制样。', { size: 9.5, fill: C.sub, maxW: 380, lh: 13.5 })
  b.table(730, 664, 620, {
    headers: ['目标分辨率', '参与精修颗粒数', '合格微图量级'],
    colW: [230, 200, 190],
    rowH: 34,
    fontSize: 10,
    rows: [
      ['约 3 Å（大复合物）', '约 10^{5}', '数千张'],
      ['2–2.5 Å 或中小分子量', '10^{5} 至 10^{6}', '数千至上万张'],
      ['亚 2 Å 或构象异质性', '约 10^{6}', '上万张'],
    ],
  })
  b.tag(880, 826, '可用微图比例大于 70%', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 7 })
  b.tag(1150, 826, '通量数百至千张/小时', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
  b.wtext(730, 856, '换算链：每微图平均颗粒数 × 合格微图数 × 可用率（常折半甚至更低）＝入精修颗粒数——预算宁可高估废品率，不要在收工线上赌运气。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // 底部收束
  b.ctext(700, 940, '颗粒数与取向覆盖是两条独立的达标线——任何一条不满足都不能交付', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '数据收集的质量评估：边收边看的闭环',
  subtitle: '四指标健康线：漂移小于 1–2 Å、CTF 拟合 3–5 Å、每微图数十至数百颗；空孔率小于 10% 良好、大于 30% 换网；冰晶 3.67 Å 锐环；3 Å 级约 10^{5} 颗粒、亚 2 Å 约 10^{6}',
  draw,
})
