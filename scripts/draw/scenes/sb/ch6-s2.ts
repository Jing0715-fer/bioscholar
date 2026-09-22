// sb ch6-s2 旋转法数据收集（Task SB-5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、旋转窄楔几何：格点扫过 Ewald 球面 ============
  b.panel(30, 132, 660, 400, { title: '一、旋转窄楔几何：格点扫过 Ewald 球面' })
  const cx = 250, cy = 330, R = 150
  b.circle(cx, cy, R, { fill: C.accL, stroke: C.acc, sw: 2.2, fillOp: 0.32 })
  b.ctext(cx, 440, 'Ewald 反射球（半径 1/λ）', { size: 10.5, fill: C.accD })
  // 斜置倒易点阵（淡灰格点）
  const A: [number, number] = [54, -22], V: [number, number] = [22, 54]
  const O: [number, number] = [400, cy]
  const P: [number, number] = [373, 244]
  for (const anchor of [O, P]) {
    for (let i = -5; i <= 2; i++) {
      for (let j = -2; j <= 2; j++) {
        const x = anchor[0] + i * A[0] + j * V[0]
        const y = anchor[1] + i * A[1] + j * V[1]
        if (x < 90 || x > 470 || y < 172 || y > 465) continue
        if (Math.hypot(x - cx, y - cy) < 62) continue
        if (Math.hypot(x - P[0], y - P[1]) < 10) continue
        if (Math.hypot(x - O[0], y - O[1]) < 10) continue
        if (y > 400 && x < 330) continue
        if (Math.abs(y - cy) < 9 && x < cx) continue
        b.circle(x, y, 2.4, { fill: C.faint })
      }
    }
  }
  // 入射束、透射延线与倒易原点
  b.arrow(75, cy, 240, cy, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(110, cy - 14, '入射束', { size: 10.5, fill: C.dnaD })
  b.line(cx + 10, cy, 390, cy, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.circle(O[0], O[1], 3.5, { fill: C.bad })
  b.ctext(400, cy + 22, '倒易原点 O', { size: 9.5, fill: C.badD })
  // 晶体与 ω 旋转弧
  b.circle(cx, cy, 5.5, { fill: C.bad })
  b.ctext(cx, cy - 12, '晶体', { size: 10.5, weight: 700, fill: C.badD })
  b.path('M 198,300 A 60 60 0 0 1 302,300', { fill: 'none', stroke: C.mute, sw: 1.6, dash: '5 4', marker: 'mute' })
  b.ctext(250, 256, 'ω 连续旋转', { size: 10, weight: 600, fill: C.mute })
  // 格点 P：扫掠弧与衍射束
  b.circle(P[0], P[1], 4.5, { fill: C.bad })
  b.etext(358, 242, '格点 P', { size: 10, weight: 700, fill: C.badD })
  b.path('M 340,262 A 90 90 0 0 1 410,240', { fill: 'none', stroke: C.warn, sw: 2, dash: '5 4', marker: 'warn' })
  b.text(420, 232, 'Δω 扫掠弧', { size: 9.5, fill: C.warnD })
  b.arrow(255, 325, 447, 194, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(430, 180, '衍射束', { size: 10.5, fill: C.dnaD })
  // 右侧解读
  b.wtext(480, 215, '旋转法由 Arndt 与 Wonacott 发展（1970 年代）：晶体绕 ω 轴连续旋转、曝光与旋转同步，每张影像对应 0.1–1.0° 的小旋转楔。', { size: 10.5, fill: C.sub, maxW: 195, lh: 15 })
  b.wtext(480, 275, '晶体静止时仅极少数格点落在球面上；旋转带动倒易点阵绕原点 O 扫过球面，格点跨越球面的一瞬被「点亮」，沿球心指向该点的方向产生衍射束。', { size: 10.5, fill: C.sub, maxW: 195, lh: 15 })
  b.wtext(480, 337, '楔角过大：相邻斑点在探测器上重叠、部分反射被「劈」到两张影像；楔角过小：帧数暴涨、读出死时间占比上升。', { size: 10.5, fill: C.sub, maxW: 195, lh: 15 })
  b.wtext(60, 486, '0.1° 级细楔配高频读出是微晶与高镶嵌度晶体的标准处方；1° 粗楔适合常规晶体快速收集。探测器距离「先远后近」：初收 300–400 mm 保证斑点分离与指标化成功，确认晶胞后移近 150–250 mm 冲分辨率；2θ 偏移只在冲原子分辨率（1 Å 以内）时启用。', { size: 10.5, fill: C.sub, maxW: 615, lh: 15 })

  // ============ 二、楔角与镶嵌度：一个反射横跨几帧 ============
  b.panel(30, 562, 660, 380, { title: '二、楔角与镶嵌度：一个反射横跨几帧' })
  b.tag(330, 600, '每反射横跨帧数 ≈ (镶嵌度 η + 光束发散角) / 每帧宽度 Δω', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 12 })
  const frames = (y0: number, cw: number, n: number) => {
    for (let i = 0; i < n; i++) {
      b.rect(118 + i * cw, y0, cw, 28, { fill: i % 2 === 0 ? C.bg : C.panelB, stroke: C.line, sw: 1.1 })
    }
  }
  // 行一：常规晶体，0.5° 帧宽，反射宽度 0.35° 单帧收录
  frames(622, 75, 7)
  b.rect(425, 622, 52, 28, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(451, 641, '0.35°', { size: 9, weight: 700, fill: C.okD })
  b.etext(112, 641, '常规晶体', { size: 10, weight: 600, fill: C.sub })
  b.etext(643, 614, '帧宽 0.5°', { size: 9, fill: C.mute })
  b.wtext(118, 668, '镶嵌度 0.3°、发散约 0.05°：多数反射被单帧完整收录（0.5–1° 收集）。', { size: 10.5, fill: C.sub, maxW: 520, lh: 14 })
  // 行二：高镶嵌，同一帧宽下劈到两三帧
  frames(696, 75, 7)
  b.rect(395, 696, 233, 28, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(511, 715, '1.55°', { size: 9, weight: 700, fill: C.badD })
  b.etext(112, 715, '高镶嵌晶体', { size: 10, weight: 600, fill: C.sub })
  b.etext(643, 688, '帧宽 0.5°', { size: 9, fill: C.mute })
  b.braceH(395, 732, 233, { label: '劈到两三帧 · 相邻斑点骑叠', size: 10, fill: C.badD })
  // 行三：0.25° 细切，同一反射跨帧求和
  frames(782, 37.5, 14)
  b.rect(395, 782, 233, 28, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(511, 801, '1.55°', { size: 9, weight: 700, fill: C.accD })
  b.etext(112, 801, '细切处方', { size: 10, weight: 600, fill: C.sub })
  b.etext(643, 774, '帧宽 0.25°', { size: 9, fill: C.mute })
  b.braceH(395, 820, 233, { label: '跨帧部分自动求和 · 每反射更多采样点、剖面拟合更稳健', size: 10, fill: C.accD })
  b.wtext(118, 866, '细切的帧数与读出开销已被 EIGER 微秒级读出基本抹平；镶嵌度典型 0.1–0.5°，大于 1° 时缩楔角、拉远探测器或考虑退火（第 3 节）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })
  b.wtext(118, 898, '现代端站多配 ω 轴单旋，必要时以 κ 转位补收盲区；晶体偏离冷流中心的「摆动」会造成边缘霜冻与温度应变——细流口与居中对正是初上机的必修课。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 三、旋转范围与收集策略 ============
  b.panel(710, 132, 660, 400, { title: '三、旋转范围与收集策略' })
  b.circle(800, 250, 62, { fill: C.bg, stroke: C.sub, sw: 1.8 })
  b.path('M 800,188 A 62 62 0 0 0 800,312 Z', { fill: C.accL, stroke: C.acc, sw: 1.8, fillOp: 0.9 })
  b.ctext(768, 255, '180°', { size: 12, weight: 700, fill: C.accD })
  b.ctext(800, 340, '三斜 P1：须收 180°', { size: 10.5, weight: 600, fill: C.sub })
  b.circle(1000, 250, 62, { fill: C.bg, stroke: C.sub, sw: 1.8 })
  b.path('M 1000,250 L 938,250 A 62 62 0 0 1 978.8,191.7 Z', { fill: C.okL, stroke: C.ok, sw: 1.8, fillOp: 0.9 })
  b.ctext(952, 228, '30–90°', { size: 10, weight: 700, fill: C.okD })
  b.ctext(1000, 340, '高对称群：30–90° 即足', { size: 10.5, weight: 600, fill: C.sub })
  b.wtext(1090, 190, '总旋转范围由对称性决定：三斜 P1 的倒易空间无任何对称，须收 180° 才能覆盖全部独立反射；立方、四方等高对称群只需 30–90°。', { size: 10.5, fill: C.sub, maxW: 255, lh: 15 })
  b.wtext(1090, 268, '完整数据常拆成两段起始角不同的区间，以均匀覆盖并提升冗余；反常实验冗余须再翻倍——P1 收 180° 常已自带约两倍冗余。', { size: 10.5, fill: C.sub, maxW: 255, lh: 15 })
  // 策略链
  b.tag(800, 400, '① 试收 5–10 张', { fill: C.panelB, stroke: C.sub, size: 12, weight: 700, tfill: C.ink, pad: 10 })
  b.tag(960, 400, '② 解晶胞与取向', { fill: C.panelB, stroke: C.sub, size: 12, weight: 700, tfill: C.ink, pad: 10 })
  b.tag(1125, 400, '③ 预演最优方案', { fill: C.panelB, stroke: C.sub, size: 12, weight: 700, tfill: C.ink, pad: 10 })
  b.tag(1280, 400, '④ 正式收集', { fill: C.panelB, stroke: C.sub, size: 12, weight: 700, tfill: C.ink, pad: 10 })
  b.arrow(866, 400, 900, 400, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(1020, 400, 1065, 400, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.arrow(1185, 400, 1233, 400, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  b.wtext(730, 445, 'MOSFLM strategy 与 BEST 由试收影像解出晶胞与取向，预演「哪一段旋转范围能以最少剂量拿到最高完整度」再正式开工——盲收常把剂量浪费在与目标无关的角度上。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })
  b.wtext(730, 478, '把「补收角度」安排在晶体剂量耗尽之前（第 3 节预算），而不是事后追悔——「先算后收」与「边收边算」的差别，就是一套数据与一炉废片的差别。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 四、探测器与曝光·剂量分配 ============
  b.panel(710, 562, 660, 380, { title: '四、探测器与曝光·剂量分配' })
  // 像素阵列探测器示意
  b.rect(730, 612, 200, 160, { fill: C.bg, stroke: C.sub, sw: 2 })
  for (let gx = 750; gx <= 910; gx += 20) b.line(gx, 612, gx, 772, { stroke: C.faint, sw: 0.7, opacity: 0.7 })
  for (let gy = 632; gy <= 752; gy += 20) b.line(730, gy, 930, gy, { stroke: C.faint, sw: 0.7, opacity: 0.7 })
  for (const [sx, sy] of [[790, 665], [862, 705], [895, 640]] as Array<[number, number]>) {
    b.circle(sx, sy, 7, { fill: C.pro, fillOp: 0.3 })
    b.circle(sx, sy, 3.2, { fill: C.proD })
  }
  b.circle(830, 692, 9, { fill: C.ink })
  b.etext(816, 696, '挡板', { size: 9, fill: C.mute })
  b.ctext(830, 798, '单光子计数像素阵列（PILATUS / EIGER）', { size: 10, weight: 600, fill: C.sub })
  b.table(960, 614, 390, {
    headers: ['探测器', '像素数', '像素间距'],
    colW: [160, 115, 115],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['PILATUS 6M', '约 600 万', '172 μm'],
      ['EIGER X 16M', '约 1,600 万', '75 μm'],
    ],
  })
  b.wtext(960, 745, '硅像素单元直接计数单光子：无读出噪声、无暗电流、点扩散近一个像素（CCD 为数个像素）；读出微秒至毫秒级，「边转边曝」连续收集、帧间死时间近零；75 μm 小像素分得开靠得更近的斑点——长晶胞与微晶高角密集斑的硬需求。', { size: 10.5, fill: C.sub, maxW: 385, lh: 14.5 })
  b.wtext(730, 838, '数量级锚点：同步辐射典型完整数据集为 360–1800 帧、每帧 0.05–0.5 s、总时长 5–30 分钟；实验室源上常为 360 帧、每帧 1–5 分钟，过夜是常态。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14.5 })
  b.wtext(730, 874, '曝光与剂量预算联合求解（第 3 节）：先扫数帧试曝光，把最亮斑的峰值计数压在饱和线八成以下；过载对策按代价排序——加衰减器整体压通量、拉远探测器让强斑摊开、缩短每帧曝光并增加帧数、或专收低通量快拍与主数据合并。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14.5 })

  // 底部收束
  b.ctext(700, 972, '窄楔、策略与剂量分配的共同目标：以最少剂量、最短时间拿到完整而可合并的数据——数据落盘即进入第 4 节的处理流水线', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '旋转法数据收集：窄楔几何、收集策略与曝光剂量分配',
  subtitle: '每帧 0.1–1.0° 窄楔；横跨帧数 ≈ (镶嵌度+发散)/帧宽；P1 须 180°、高对称 30–90°；PILATUS 6M 与 EIGER 16M 单光子计数；同步辐射 360–1800 帧、总时长 5–30 分钟',
  draw,
})
