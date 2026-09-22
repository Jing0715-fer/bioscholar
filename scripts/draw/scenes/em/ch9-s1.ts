// em ch9-s1 电子断层扫描的原理（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、倾斜系列与正弦图 ============
  b.panel(30, 132, 660, 412, { title: '一、投影定理的断层版：倾斜系列与正弦图' })
  const setups: [number, number, string][] = [[110, -45, '−45°'], [230, 0, '0°'], [350, 45, '+45°']]
  setups.forEach(([cx, tilt, label]) => {
    b.arrow(cx, 182, cx, 216, { stroke: C.acc, sw: 2, marker: 'acc' })
    b.text(cx + 8, 198, 'e^{-}', { size: 10, fill: C.accD })
    // 样品台（倾转）
    const a = (tilt * Math.PI) / 180
    const dx = 44 * Math.cos(a + Math.PI / 2), dy = 44 * Math.sin(a + Math.PI / 2)
    b.line(cx - dx, 258 - dy, cx + dx, 258 + dy, { stroke: C.sub, sw: 3 })
    b.ellipse(cx, 258, 16, 10, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.circle(cx + 6, 258, 4, { fill: C.proD })
    b.rect(cx - 45, 302, 90, 26, { fill: '#ffffff', stroke: C.sub, sw: 1.6, rx: 4 })
    b.rect(cx - 45 + 33 + 6 * Math.sin(a), 306, 18, 18, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 3 })
    b.ctext(cx, 352, label, { size: 10.5, weight: 700, fill: C.sub })
    b.ctext(cx, 368, '样品台倾转、束固定', { size: 9, fill: C.mute })
  })
  b.ctext(230, 396, '样品台被物镜极靴锁死在约 ±60°——覆盖不完整是与单颗粒的本质分岔', { size: 10, weight: 700, fill: C.badD })
  // 正弦图
  b.rect(450, 190, 210, 190, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.ctext(555, 180, '正弦图（sinogram）', { size: 10.5, weight: 700, fill: C.ink })
  for (let k = 0; k < 3; k++) {
    const pts: [number, number][] = []
    for (let i = 0; i <= 40; i++) {
      const t = i / 40
      const ang = -Math.PI / 2 + t * Math.PI
      const x = 555 + (52 + k * 16) * Math.sin(ang) * 0.85
      const y = 196 + t * 178
      pts.push([x, y])
    }
    b.polyline(pts, { stroke: [C.enz, C.dna, C.pro][k], sw: 2.2 })
  }
  b.ctext(555, 400, '纵轴：倾角 −60° 至 +60°', { size: 9.5, fill: C.mute })
  b.ctext(555, 416, '一个点源扫出一条正弦轨迹', { size: 9.5, fill: C.mute })
  b.wtext(50, 440, '每张倾角投影为傅里叶体积中一张中心截面（Radon 变换的平行束特例）；方法史开端可追到 1968 年前后 Hart 的多向拼接构想。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 二、缺失楔 ============
  b.panel(710, 132, 660, 412, { title: '二、缺失楔：宿命的伪影' })
  // 傅里叶覆盖图
  const fx = 880, fy = 310, R = 108
  b.circle(fx, fy, R, { fill: '#ffffff', stroke: C.line, sw: 1.6 })
  // 测到的扇区（±60°，即上下 120°+ 左右?）束轴垂直: measured sections perpendicular to beam... 简化：以竖直束轴为中心缺失 ±30°
  b.path(`M ${fx},${fy} L ${fx - R * Math.cos(Math.PI / 3)},${fy - R * Math.sin(Math.PI / 3)} A ${R},${R} 0 0 1 ${fx + R * Math.cos(Math.PI / 3)},${fy - R * Math.sin(Math.PI / 3)} Z`, { fill: C.badL, fillOp: 0.85, stroke: C.bad, sw: 1.4 })
  b.path(`M ${fx},${fy} L ${fx - R * Math.cos(Math.PI / 3)},${fy + R * Math.sin(Math.PI / 3)} A ${R},${R} 0 0 0 ${fx + R * Math.cos(Math.PI / 3)},${fy + R * Math.sin(Math.PI / 3)} Z`, { fill: C.badL, fillOp: 0.85, stroke: C.bad, sw: 1.4 })
  for (let i = -5; i <= 5; i++) {
    const a = (i * 12 * Math.PI) / 180
    if (Math.abs(i * 12) > 60) continue
    b.line(fx - R * 0.92 * Math.cos(a + Math.PI / 2), fy - R * 0.92 * Math.sin(a + Math.PI / 2), fx + R * 0.92 * Math.cos(a + Math.PI / 2), fy + R * 0.92 * Math.sin(a + Math.PI / 2), { stroke: C.acc, sw: 1.6, opacity: 0.5 })
  }
  b.circle(fx, fy, 3.5, { fill: C.ink })
  b.ctext(fx, 436, '以束轴为中心、合计 60° 的缺失楔', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(fx, 452, '完备倾角 ±90° 共 180°，60° 空缺恰占三分之一', { size: 9.5, fill: C.mute })
  // 点扩散拉长
  b.circle(1210, 268, 9, { fill: C.ink })
  b.arrow(1210, 236, 1210, 216, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.ellipse(1210, 368, 10, 38, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(1210, 428, '点源沿 z 拉长', { size: 10, weight: 700, fill: C.badD })
  b.ctext(1210, 444, '±60° 单轴拉长约 1.7 倍', { size: 9.5, fill: C.sub })
  b.ctext(1210, 460, '双轴约 1.4 倍', { size: 9.5, fill: C.sub })
  b.tag(1180, 190, 'z 向分辨率常比 xy 差约 2 倍', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.wtext(730, 492, '这些方向上的信息不是「弱」，而是根本不存在，任何后处理都无从谈起；双轴断层把两个正交的楔相交、剩余缺失收成金字塔形锥区（按方向覆盖从约 33% 压到约一成），代价是剂量翻倍与两套系列配准。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 三、倾角方案 ============
  b.panel(30, 572, 660, 398, { title: '三、倾角方案：顺序的艺术' })
  const sx = 80, sy = 720, sw = 560
  b.line(sx, sy, sx + sw, sy, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  ;[-60, -40, -20, 0, 20, 40, 60].forEach(v => {
    const x = sx + ((v + 60) / 120) * sw
    b.line(x, sy - 6, x, sy + 6, { stroke: C.sub, sw: 1.8 })
    b.ctext(x, sy + 22, `${v}°`, { size: 10, fill: C.sub })
  })
  // dose-symmetric 序列：0,+2,−2,+4,−4...
  const seq = [0, 2, -2, 4, -4, 8, -8, 15, -15, 25, -25, 40, -40, 55, -55]
  seq.forEach((v, i) => {
    const x = sx + ((v + 60) / 120) * sw
    const col = i < 5 ? C.ok : i < 9 ? C.warn : C.bad
    b.circle(x, sy - 26, 7, { fill: col, stroke: '#ffffff', sw: 1.5 })
    b.ctext(x, sy - 23.5, `${i + 1}`, { size: 8, weight: 700, fill: '#ffffff' })
  })
  b.ctext(360, 668, '剂量对称方案（dose-symmetric，Hagen 2017）：从 0 度正负交替递增', { size: 11, weight: 700, fill: C.ink })
  b.wtext(50, 616, '让信息量最大的低倾角投影在剂量最低时入账，损伤最重时才收最难的高倾角；同区样品先收高倾再回 0 度对位核查。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })
  b.tag(200, 786, '低倾角＝剂量最低＋信息最多', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(510, 786, 'Saxton 变增量（1984）：低倾角加密', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.wtext(50, 826, '其余方案：单倾递增（最简单、高倾时剂量已重）、双轴（金字塔缺失约一成，剂量翻倍）、连续倾转（机械平滑、剂量均匀）。方案的选择由目标反推——各向同性测量优先 dose-symmetric，通量优先单倾。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.ctext(360, 930, '（圆点序号＝收集次序；颜色由绿到红示意累积剂量增加）', { size: 9.5, fill: C.mute })

  // ============ 四、剂量预算与重构算法 ============
  b.panel(710, 572, 660, 398, { title: '四、剂量预算表与重构算法' })
  b.tag(900, 620, '总预算 50–150 e^{-}/Å^{2}', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 10 })
  b.tag(1180, 620, '摊到 40–80 张投影', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 10 })
  b.tag(1040, 660, '每张 0.5–3 e^{-}/Å^{2}；总 100 e^{-}/Å^{2} 摊 60 张即每张约 1.7 e^{-}/Å^{2}', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 10 })
  // WBP vs SIRT 权重
  const w1 = b as B
  const ax1 = 760, ay1 = 852, aw1 = 250, ah1 = 140
  w1.axis(ax1, ay1, aw1, ah1, {
    grid: false, xticks: [[0, '0'], [1, '']], yticks: [[0, '0'], [0.92, '权重']],
    title: 'WBP：|g| 权重无条件提权高频',
  })
  b.arrow(ax1 + aw1 - 6, ay1, ax1 + aw1 + 8, ay1, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.curve(ax1, ay1, aw1, ah1, [[0, 0.1], [0.25, 0.35], [0.5, 0.6], [0.75, 0.8], [1, 0.98]], { stroke: C.dna, sw: 2.4 })
  b.ctext(885, 876, '楔缘噪声的来源', { size: 9.5, fill: C.badD })
  const ax2 = 1060, ay2 = 852, aw2 = 250, ah2 = 140
  b.axis(ax2, ay2, aw2, ah2, {
    grid: false, xticks: [[0, '0'], [1, '']], yticks: [[0, '0'], [0.92, '权重']],
    title: 'SIRT：按投影覆盖自适应赋权',
  })
  b.arrow(ax2 + aw2 - 6, ay2, ax2 + aw2 + 8, ay2, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.curve(ax2, ay2, aw2, ah2, [[0, 0.85], [0.3, 0.72], [0.55, 0.45], [0.75, 0.2], [1, 0.05]], { stroke: C.pro, sw: 2.4 })
  b.ctext(1185, 876, '等效数据驱动的自适应低通', { size: 9.5, fill: C.proD })
  b.ctext(1040, 712, '双重构对账：两种算法各出一张图，差异处即算法伪影的所在', { size: 10, fill: C.sub })
  b.ctext(1040, 736, 'WBP 一次成像、锐但噪；SIRT 迭代收敛、稳但慢', { size: 10, fill: C.mute })
  b.ctext(1040, 940, '「每频率被多少投影一致支持」——SIRT 的赋权哲学与剂量加权的思路同源', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '电子断层扫描的原理：中心截面定理的断层版',
  subtitle: '样品台锁死于约 ±60°：60° 缺失楔占 180° 完备倾角的三分之一（约 33% 方向未测），点扩散沿 z 拉长约 1.7 倍；剂量预算 50–150 e⁻/Å² 摊 40–80 张投影，总 100 摊 60 张即每张约 1.7 e⁻/Å²',
  draw,
})
