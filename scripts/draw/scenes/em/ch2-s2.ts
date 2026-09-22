// em ch2-s2 电磁透镜与成像光路（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、磁透镜的物理 ============
  b.panel(30, 132, 660, 280, { title: '一、磁透镜的物理：洛伦兹力与旋转对称场' })
  // 透镜横截面（极靴 + 线圈）
  b.rect(158, 200, 124, 90, { fill: '#e2e8f0', stroke: C.sub, sw: 2, rx: 6 })
  b.polygon([[172, 200], [268, 200], [252, 224], [188, 224]], { fill: C.mute, fillOp: 0.55 })
  b.polygon([[172, 290], [268, 290], [252, 266], [188, 266]], { fill: C.mute, fillOp: 0.55 })
  ;[206, 220, 234].forEach(x => b.arrow(x, 230, x, 260, { stroke: C.acc, sw: 1.3, dash: '4 3', marker: 'acc' }))
  b.line(220, 182, 220, 308, { stroke: C.faint, sw: 1.2, dash: '5 5' })
  b.ctext(220, 326, '带极靴的螺线管（横截面）', { size: 11, fill: C.sub })
  b.ctext(220, 344, '极靴把磁力线约束在毫米级窄缝', { size: 10.5, fill: C.mute })
  // 右：螺旋轨迹
  b.line(430, 180, 430, 322, { stroke: C.faint, sw: 1.2, dash: '5 5' })
  const pts: string[] = []
  for (let i = 0; i <= 60; i++) {
    const t = i / 60
    const th = t * 4.5 * Math.PI
    const r = 34 * (1 - 0.8 * t)
    pts.push(`${(430 + r * Math.cos(th)).toFixed(1)},${(184 + t * 132).toFixed(1)}`)
  }
  b.path(`M ${pts.join(' L ')}`, { stroke: C.warn, sw: 1.8 })
  b.circle(430 + 34, 184, 3.5, { fill: C.acc })
  b.arrow(470, 190, 470, 224, { stroke: C.mute, sw: 1.2, marker: 'mute' })
  b.ctext(430, 344, '电子绕轴旋转的同时被会聚', { size: 11, fill: C.sub })
  b.tag(580, 250, 'F = −e(v×B)', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 13, weight: 700, pad: 10 })
  b.wtext(560, 282, '角向速度再与轴向磁场作用，产生指向光轴的会聚力——磁透镜永远会聚，与电荷符号无关', { size: 10.5, fill: C.sub, maxW: 120, lh: 15 })
  b.tag(300, 388, '场强由安匝数 NI 决定：变倍、变焦、换模式都表现为改电流', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 9 })
  b.wtext(50, 388, '1926 年布施证明其服从薄透镜式成像方程，电子光学立门', { size: 11, fill: C.sub, maxW: 210, lh: 16 })

  // ============ 二、TEM 成像光路 ============
  b.panel(710, 132, 660, 600, { title: '二、TEM 成像光路：双聚光镜 - 物镜 - 中间镜 - 投影镜' })
  const coil = (y: number, h: number) => {
    b.rect(905, y, 90, h, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 5 })
    const n = h > 30 ? 4 : 3
    for (let i = 0; i < n; i++) {
      b.circle(905, y + 7 + (i * (h - 14)) / (n - 1), 5, { fill: C.acc })
      b.circle(995, y + 7 + (i * (h - 14)) / (n - 1), 5, { fill: C.acc })
    }
  }
  b.rect(930, 188, 40, 9, { fill: C.sub })
  coil(235, 26)
  coil(285, 26)
  coil(338, 44)
  coil(445, 26)
  coil(515, 26)
  // 光轴与包络
  b.line(950, 178, 950, 588, { stroke: C.faint, sw: 1.2, dash: '5 5' })
  b.polyline([[950, 196], [928, 248], [940, 298], [940, 358], [918, 458], [902, 528], [892, 589]], { stroke: C.warn, sw: 1.3 })
  b.polyline([[950, 196], [972, 248], [960, 298], [960, 358], [982, 458], [998, 528], [1008, 589]], { stroke: C.warn, sw: 1.3 })
  // 聚光镜光阑与物镜光阑
  b.line(930, 322, 942, 322, { stroke: C.sub, sw: 4 })
  b.line(958, 322, 970, 322, { stroke: C.sub, sw: 4 })
  b.line(925, 402, 937, 402, { stroke: C.sub, sw: 4 })
  b.line(963, 402, 975, 402, { stroke: C.sub, sw: 4 })
  // 样品与荧光屏
  b.rect(924, 356, 52, 5, { fill: C.enz })
  b.rect(884, 588, 132, 9, { fill: C.ok })
  // 分组括注
  b.braceV(878, 235, 92, { label: '照明系统', left: true })
  b.braceV(878, 338, 220, { label: '成像系统', left: true })
  // 右侧标注
  b.wtext(1015, 196, '电子枪（亮度与能量展宽见本章第 1 节）', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.wtext(1015, 244, 'C1 强透镜：缩小源像数十倍，定束斑尺寸与空间相干性', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.wtext(1015, 292, 'C2 弱透镜 + 聚光镜光阑：定照明半角——TEM 平行照明约 0.1–1 mrad，STEM 会聚 10–30 mrad', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.wtext(1015, 352, '物镜：样品夹在极靴缝隙中央，分辨率的心脏——物镜损失的信息，后面谁也救不回来', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.wtext(1015, 398, '物镜光阑（后焦面附近）：挑选参与成像的角谱', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.wtext(1015, 448, '中间镜（数级）：物面对到像平面即成像模式、对到背焦面即衍射模式', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.wtext(1015, 506, '投影镜：总放大 M = M_{obj} × M_{int} × M_{proj}，约 50 倍至百万倍级连续可调', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.wtext(1015, 588, '荧光屏 / 直接电子探测相机', { size: 11.5, fill: C.sub, maxW: 345, lh: 15 })
  b.tag(890, 650, '成像模式：中间镜物面对到物镜像平面', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11.5, weight: 700, pad: 9 })
  b.tag(1180, 650, '衍射模式：对到物镜背焦面（相机长度 L）', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11.5, weight: 700, pad: 9 })
  b.ctext(1040, 700, '只改一组电流，同一台仪器便在「照片」与「衍射图」之间切换——光学显微镜做不到', { size: 11, fill: C.mute })

  // ============ 三、短透镜焦距、稳定性与像旋转 ============
  b.panel(30, 432, 660, 240, { title: '三、短透镜焦距、稳定性与像旋转' })
  b.tag(215, 486, '1/f ≈ (e/8mV)·∫B_{z}^{2} dz（短透镜近似）', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 13, weight: 700, pad: 10 })
  b.wtext(50, 522, '· f 与场强平方成反比：励磁加倍、场强近似加倍，焦距缩短到约四分之一', { size: 11.5, fill: C.sub, maxW: 380, lh: 17 })
  b.wtext(50, 546, '· f 与加速电压成正比：换高压必须重配励磁电流，否则整条光路散焦', { size: 11.5, fill: C.sub, maxW: 380, lh: 17 })
  b.tag(240, 578, '高压与透镜电流稳定性要求达 10^{-6}', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11.5, weight: 700, pad: 9 })
  // 像旋转示意
  b.rect(470, 470, 34, 34, { fill: C.panelB, stroke: C.ink, sw: 1.8 })
  b.ctext(487, 524, '物', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(514, 487, 556, 487, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.polygon([[609.4, 509.1], [577.9, 496.4], [590.6, 464.9], [622.1, 477.6]], { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(600, 530, '像（随励磁旋转）', { size: 11, weight: 700, fill: C.accD })
  b.wtext(50, 616, '磁透镜成像伴随像旋转：偏转角随励磁电流改变，改变放大倍数时像会整体旋转——跨倍数追踪、立体对与倾转系列的几何都须计入像转角。现代物镜焦距仅约 1–2 mm，比光学物镜短两个数量级。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、与光学显微镜的光路类比 ============
  b.panel(30, 692, 660, 290, { title: '四、与光学显微镜的光路类比' })
  b.table(50, 744, 620, {
    headers: ['环节', '光学显微镜', '透射电镜'],
    colW: [104, 236, 280], rowH: 26, fontSize: 10.5,
    rows: [
      ['光源', '灯 / 激光', '电子枪'],
      ['透镜', '玻璃透镜近完美，NA 达 1.4', '磁透镜像差固有，α 仅约 10 mrad'],
      ['调光', '孔径光阑、滤光片', '双聚光镜 + 聚光镜光阑'],
      ['变焦', '更换物镜 / 目镜', '改中间镜电流连续变倍，像随之旋转'],
      ['物镜位置', '样品外，毫米至厘米', '样品夹在极靴缝隙内'],
      ['模式切换', '明/暗场需机械改光路', '改电流即可切换成像/衍射模式'],
      ['探测', '眼睛 / CCD', '荧光屏、CCD 或直接电子探测相机'],
    ],
  })
}

export default scene({
  title: '电磁透镜与成像光路：从螺线管到投影镜',
  subtitle: '磁透镜靠洛伦兹力会聚电子，短透镜 1/f ≈ (e/8mV)·∫B_{z}^{2}dz；C1 定束斑、C2 光阑定照明半角（TEM 约 0.1–1 mrad）；M = M_{obj}×M_{int}×M_{proj} 连续覆盖约 50 倍至百万倍级',
  draw,
})
