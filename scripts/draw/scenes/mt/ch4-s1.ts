// mt ch4-s1 水通道蛋白总论：单体沙漏拓扑、四聚体、ar/R 关卡与质子双重屏障、速率与证据
import { scene, C, B } from '../../lib'

/** 倾斜跨膜螺旋条（旋转矩形的多边形近似；tilt 为相对竖直方向的倾角，度） */
const helix = (
  b: B, cx: number, cy: number, w: number, h: number, tilt: number,
  fill: string, stroke: string, label?: string, lfill?: string,
) => {
  const a = (tilt * Math.PI) / 180
  const ux = Math.sin(a), uy = Math.cos(a)
  const vx = Math.cos(a), vy = -Math.sin(a)
  const hw = w / 2, hh = h / 2
  b.polygon(
    [
      [cx - vx * hw - ux * hh, cy - vy * hw - uy * hh],
      [cx + vx * hw - ux * hh, cy + vy * hw - uy * hh],
      [cx + vx * hw + ux * hh, cy + vy * hw + uy * hh],
      [cx - vx * hw + ux * hh, cy - vy * hw + uy * hh],
    ],
    { fill, stroke, sw: 1.8 },
  )
  if (label) b.ctext(cx, cy + 3.2, label, { size: 9, weight: 700, fill: lfill ?? C.ink })
}

/** 水分子（可选氢原子小点） */
const water = (b: B, x: number, y: number, r = 5.5, detail = false) => {
  b.circle(x, y, r, { fill: '#e0f2fe', stroke: C.acc, sw: 1.3 })
  if (detail) {
    b.circle(x - r * 0.72, y - r * 0.62, r * 0.26, { fill: C.acc })
    b.circle(x + r * 0.72, y - r * 0.62, r * 0.26, { fill: C.acc })
  }
}

/** 六边形残基记号 */
const hex = (b: B, cx: number, cy: number, r: number, fill: string, stroke: string) => {
  const pts: [number, number][] = []
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i + Math.PI / 6
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
  }
  b.polygon(pts, { fill, stroke, sw: 1.6 })
}

const draw = (b: B) => {
  // ============ 一、单体拓扑：六跨膜沙漏模型 ============
  b.panel(30, 132, 660, 428, { title: '一、单体拓扑：六跨膜沙漏模型' })
  b.text(60, 192, '单个 AQP 单体：约 270 aa · 6 次跨膜 α 螺旋', { size: 12.5, weight: 700, fill: C.proD })
  b.bilayer(60, 250, 610, { h: 110 })
  b.text(60, 240, '细胞外', { size: 10, weight: 700, fill: C.sub })
  b.text(60, 386, '细胞质', { size: 10, weight: 700, fill: C.sub })
  // —— 六根倾斜螺旋：N 端半分子（紫）H1–H3 ／ C 端半分子（青绿）H4–H6 ——
  helix(b, 120, 305, 15, 120, 10, C.proL, C.pro, 'H1', C.proD)
  helix(b, 176, 305, 15, 120, -8, C.proL, C.pro, 'H2', C.proD)
  helix(b, 232, 305, 15, 120, 6, C.proL, C.pro, 'H3', C.proD)
  helix(b, 468, 305, 15, 120, -6, C.dnaL, C.dna, 'H4', C.dnaD)
  helix(b, 524, 305, 15, 120, 8, C.dnaL, C.dna, 'H5', C.dnaD)
  helix(b, 580, 305, 15, 120, -10, C.dnaL, C.dna, 'H6', C.dnaD)
  // —— 沙漏形孔道（上下宽口、中央收束）——
  b.polygon(
    [[330, 243], [390, 243], [368, 293], [368, 317], [390, 367], [330, 367], [352, 317], [352, 293]],
    { fill: '#e0f2fe', fillOp: 0.5, stroke: C.acc, sw: 2 },
  )
  // —— B 环 / E 环（各携 NPA）自两侧折入膜心 ——
  helix(b, 311, 274, 11, 86, 56, C.rnaL, C.rna)
  helix(b, 409, 331, 11, 92, 50, C.rnaL, C.rna)
  b.text(250, 244, 'B 环（NPA）', { size: 9.5, weight: 700, fill: C.rnaD })
  b.text(430, 386, 'E 环（NPA）', { size: 9.5, weight: 700, fill: C.rnaD })
  b.ctext(344, 290, 'NPA', { size: 8.5, weight: 700, fill: C.rnaD })
  b.ctext(378, 316, 'NPA', { size: 8.5, weight: 700, fill: C.rnaD })
  // —— 单排水链 ——
  ;[222, 250, 278, 305, 332, 360, 388].forEach(y => water(b, 360, y))
  b.text(398, 226, 'H_{2}O', { size: 9, weight: 700, fill: C.accD })
  b.text(398, 378, 'H_{2}O', { size: 9, weight: 700, fill: C.accD })
  // —— ar/R 收缩环记号（近胞外侧）——
  hex(b, 331, 262, 6.5, C.enzL, C.enz)
  hex(b, 389, 262, 6.5, C.enzL, C.enz)
  b.line(394, 258, 428, 242, { stroke: C.faint, sw: 1 })
  b.text(434, 240, 'ar/R 收缩环（≈2.8 Å）', { size: 10, weight: 600, fill: C.enzD })
  // —— 底注 ——
  b.wtext(60, 398, 'N 端半分子（H1–H3）与 C 端半分子（H4–H6）序列互为镜像——古老基因复制的痕迹；两半各贡献一个 NPA 基序，在孔道正中相会', { size: 10, maxW: 610, lh: 18, fill: C.sub })
  b.wtext(60, 422, 'B 环（第 2–3 螺旋间）自胞外侧折入、E 环（第 5–6 螺旋间）自胞质侧折入；AQP1 于 2000 年前后经电子晶体学解析至约 2 Å——沙漏形孔道由推断变成照片', { size: 10, maxW: 610, lh: 18, fill: C.sub })
  b.wtext(60, 464, '红细胞膜上密布十余万个 AQP1 拷贝；单体独立成孔、四聚体提供稳定与协作——见右上图', { size: 10, maxW: 610, lh: 18, fill: C.sub })
  b.wtext(60, 494, '水分子连成长队鱼贯而过——单排窄孔的动力学证据（Pf/Pd）见右下图', { size: 10, maxW: 610, lh: 18, fill: C.sub })

  // ============ 二、四聚体组装：每单体独立成孔 ============
  b.panel(710, 132, 660, 428, { title: '二、四聚体组装：每单体独立成孔' })
  b.text(745, 200, '四聚体（俯视图）', { size: 11, weight: 700, fill: C.sub })
  const cx = 900, cy = 300, r = 92
  const quad = [C.proL, C.rnaL, C.enzL, C.dnaL]
  const quadS = [C.pro, C.rna, C.enz, C.dna]
  for (let i = 0; i < 4; i++) {
    const a0 = ((-45 + 90 * i) * Math.PI) / 180
    const a1 = ((45 + 90 * i) * Math.PI) / 180
    const p0x = cx + r * Math.cos(a0), p0y = cy + r * Math.sin(a0)
    const p1x = cx + r * Math.cos(a1), p1y = cy + r * Math.sin(a1)
    b.path(`M${cx},${cy} L${p0x.toFixed(1)},${p0y.toFixed(1)} A${r},${r} 0 0 1 ${p1x.toFixed(1)},${p1y.toFixed(1)} Z`, { fill: quad[i], stroke: quadS[i], sw: 2 })
  }
  // 每个单体的独立孔
  const pores: [number, number][] = [[cx + 57, cy], [cx, cy + 57], [cx - 57, cy], [cx, cy - 57]]
  pores.forEach(([px, py], i) => {
    b.circle(px, py, 13, { fill: '#ffffff', stroke: quadS[i], sw: 2.2 })
    b.circle(px, py, 4, { fill: C.acc })
  })
  b.circle(cx, cy, 6, { fill: C.mute })
  b.ctext(cx, cy + 30, '4 重对称轴', { size: 9, fill: C.mute })
  // 四条径向进水箭头
  b.arrow(cx, 182, cx, 226, { stroke: C.acc, sw: 1.8, marker: 'acc', dash: '4 3' })
  b.arrow(cx, 418, cx, 374, { stroke: C.acc, sw: 1.8, marker: 'acc', dash: '4 3' })
  b.arrow(768, cy, 824, cy, { stroke: C.acc, sw: 1.8, marker: 'acc', dash: '4 3' })
  b.arrow(1032, cy, 980, cy, { stroke: C.acc, sw: 1.8, marker: 'acc', dash: '4 3' })
  b.text(918, 196, 'H_{2}O', { size: 9, weight: 700, fill: C.accD })
  b.wtext(1058, 236, '四个单体各自拥有独立完整的孔道；单个 AQP1 分子重组脂质体即可导水——四聚化提供结构稳定与定位协作，并不拼合孔道', { size: 10, maxW: 275, lh: 18, fill: C.sub })
  b.line(1050, 248, 975, 275, { stroke: C.faint, sw: 1 })
  // —— 两亚族谱系 ——
  b.text(730, 440, '两亚族谱系：ar/R 关卡宽窄决定底物谱', { size: 12, weight: 700, fill: C.accD })
  b.rect(730, 454, 610, 34, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 7 })
  b.text(742, 476, '经典水通道：ar/R ≈2.8 Å · 底物水（个别兼 H_{2}O_{2}）· 动物 AQP0/1/2/4/5/6/8 · 植物 PIP、多数 TIP 与 SIP', { size: 9.5, fill: C.sub })
  b.rect(730, 494, 610, 34, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 7 })
  b.text(742, 516, '水甘油通道：ar/R ≈3.4–3.8 Å · 底物水、甘油、尿素 · 动物 AQP3/7/9/10 · 植物 NIP（特化为硼、硅营养通道）', { size: 9.5, fill: C.sub })
  b.text(730, 548, '细菌 AqpZ（纯水）与 GlpF（甘油）两支早于动植物分家——MIP 超家族跨三域进化保守', { size: 9.5, fill: C.mute })

  // ============ 三、ar/R 关卡与质子双重屏障 ============
  b.panel(30, 572, 660, 413, { title: '三、ar/R 关卡（≈2.8 Å）与质子双重屏障' })
  b.text(60, 614, 'ar/R 选择性收缩环（近胞外侧最窄）', { size: 11.5, weight: 700, fill: C.proD })
  b.text(360, 614, '质子为何过不去：双重屏障', { size: 11.5, weight: 700, fill: C.badD })
  // —— 左：ar/R 通道纵剖 ——
  b.spline([[85, 628], [118, 680], [150, 735], [125, 790], [100, 850]], { stroke: C.pro, sw: 2.5 })
  b.spline([[255, 628], [222, 680], [190, 735], [215, 790], [240, 850]], { stroke: C.pro, sw: 2.5 })
  b.text(58, 642, '胞外', { size: 9, fill: C.mute })
  b.text(58, 845, '胞质', { size: 9, fill: C.mute })
  ;[640, 666, 692, 718, 744, 770, 796, 822].forEach(y => water(b, 170, y, 5, true))
  hex(b, 139, 712, 7, C.warnL, C.warn)
  hex(b, 181, 722, 6.5, C.enzL, C.enz)
  b.circle(196, 698, 7, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(196, 701, '+', { size: 9, weight: 700, fill: C.accD })
  b.line(190, 742, 258, 782, { stroke: C.faint, sw: 1 })
  b.text(264, 788, '≈2.8 Å', { size: 11.5, weight: 700, fill: C.enzD })
  b.text(264, 808, '恰容单排水通过', { size: 9.5, fill: C.sub })
  // 水合离子被拒
  b.circle(295, 660, 13, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(295, 663.5, 'Na^{+}', { size: 8.5, weight: 700, fill: C.badD })
  ;[[314, 660], [301, 678], [279, 671], [279, 649], [301, 642]].forEach(([sx, sy]) =>
    b.circle(sx, sy, 4.5, { fill: '#e0f2fe', stroke: C.acc, sw: 1 }))
  b.arrow(295, 690, 295, 706, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.line(287, 706, 303, 722, { stroke: C.bad, sw: 2.2 })
  b.line(303, 706, 287, 722, { stroke: C.bad, sw: 2.2 })
  b.wtext(255, 742, '水合离子带着水壳挤不进', { size: 9.5, maxW: 100, lh: 18, fill: C.badD })
  // —— 右：质子屏障通道 ——
  b.spline([[420, 628], [455, 735], [415, 850]], { stroke: C.pro, sw: 2.5 })
  b.spline([[545, 628], [505, 735], [550, 850]], { stroke: C.pro, sw: 2.5 })
  b.text(560, 644, '胞外', { size: 9, fill: C.mute })
  b.text(560, 845, '胞质', { size: 9, fill: C.mute })
  ;[648, 674, 700, 726, 778, 804, 830].forEach(y => water(b, 480, y, 5, true))
  // 中央翻转的水分子
  b.circle(480, 752, 7, { fill: '#fef3c7', stroke: C.warn, sw: 2 })
  b.path('M462,744 a18,14 0 1 1 16,-9', { stroke: C.bad, sw: 1.5, marker: 'bad' })
  // 偶极指示箭头：上方朝下、下方朝上
  ;[648, 674, 700, 726].forEach(y => b.arrow(502, y - 6, 502, y + 6, { stroke: C.mute, sw: 1.1, marker: 'mute' }))
  ;[778, 804, 830].forEach(y => b.arrow(502, y + 6, 502, y - 6, { stroke: C.mute, sw: 1.1, marker: 'mute' }))
  // NPA 天冬酰胺 + 氢键（虚线）
  b.circle(462, 748, 6, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.circle(498, 756, 6, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.line(468, 750, 473, 752, { stroke: C.rna, sw: 1.2, dash: '2 2' })
  b.line(492, 755, 487, 753, { stroke: C.rna, sw: 1.2, dash: '2 2' })
  b.ctext(462, 770, 'Asn', { size: 8, weight: 700, fill: C.rnaD })
  // 氢键链中断红叉
  b.line(473, 732, 487, 746, { stroke: C.bad, sw: 2 })
  b.line(487, 732, 473, 746, { stroke: C.bad, sw: 2 })
  // H3O+ 被拦
  b.circle(610, 660, 15, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(610, 663.5, 'H_{3}O^{+}', { size: 9.5, weight: 700, fill: C.badD })
  b.arrow(596, 672, 548, 690, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.line(520, 684, 536, 700, { stroke: C.bad, sw: 2.2 })
  b.line(536, 684, 520, 700, { stroke: C.bad, sw: 2.2 })
  // 右缘注记
  b.text(568, 716, '正电势排斥', { size: 9, weight: 600, fill: C.badD })
  b.line(562, 712, 540, 700, { stroke: C.faint, sw: 1 })
  b.text(568, 746, '偶极中央翻转', { size: 9, weight: 600, fill: C.warnD })
  b.line(562, 742, 512, 750, { stroke: C.faint, sw: 1 })
  b.text(568, 776, '氢键链中断', { size: 9, weight: 600, fill: C.badD })
  b.line(562, 772, 512, 762, { stroke: C.faint, sw: 1 })
  // —— 底注 ——
  b.text(60, 874, '关卡组合：芳香氨基酸＋组氨酸＋精氨酸——中性水分子脱壳列队穿行', { size: 10, fill: C.sub })
  b.wtext(60, 898, '屏障① 静电排斥：两个半螺旋的偶极把正电势精确安放在 NPA 中点，ar/R 的精氨酸再添一份正电——H_{3}O^{+} 在孔中处处被推', { size: 10, maxW: 610, lh: 23, fill: C.sub })
  b.wtext(60, 924, '屏障② 氢键取向阻断：NPA 位点的天冬酰胺与过境水形成氢键，迫使水分子在孔道中央翻转、偶极左右各半——Grotthuss 跳行失去跑道', { size: 10, maxW: 610, lh: 23, fill: C.sub })
  b.wtext(60, 972, 'AQP1 的汞敏感半胱氨酸 Cys189 恰在 ar/R 关卡附近——汞离子结合即封孔，是鉴定水通道的药理学指纹', { size: 10, maxW: 610, lh: 18, fill: C.sub })

  // ============ 四、速率与证据 ============
  b.panel(710, 572, 660, 413, { title: '四、速率与证据：3×10^{9} 个水分子/(s·单体)' })
  b.text(730, 622, '导水速率对比（对数尺度）', { size: 11.5, weight: 700, fill: C.accD })
  b.bars(730, 790, 300, 135, [9.48, 7.6, 3], {
    max: 10,
    fill: C.accL, stroke: C.acc,
    labels: ['AQP1 水孔', '离子通道', '载体（第 5 章）'],
    vlabels: ['3×10^{9}', '10^{7}–10^{8}', '10^{2}–10^{4}'],
  })
  b.text(730, 840, '单个水孔的通量即超过许多离子通道的离子通量——全书「速率」之最', { size: 9.5, fill: C.sub })
  // —— 证据三角 ——
  b.circle(1195, 712, 30, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(1195, 708, 'AQP1', { size: 11, weight: 700, fill: C.proD })
  b.ctext(1195, 725, '专一水通道', { size: 9.5, fill: C.proD })
  b.rect(1110, 614, 170, 38, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(1195, 629, '功能证据', { size: 10, weight: 700, fill: C.ink })
  b.ctext(1195, 646, '卵母细胞表达导水', { size: 8.5, fill: C.sub })
  b.line(1195, 652, 1195, 678, { stroke: C.sub, sw: 1.5, marker: 'ink' })
  b.rect(1030, 693, 128, 38, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(1094, 708, '结构证据', { size: 10, weight: 700, fill: C.ink })
  b.ctext(1094, 725, '约 2 Å 电子晶体学', { size: 8.5, fill: C.sub })
  b.line(1158, 712, 1163, 712, { stroke: C.sub, sw: 1.5 })
  b.rect(1235, 693, 115, 38, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(1292, 708, '动力学证据', { size: 10, weight: 700, fill: C.ink })
  b.ctext(1292, 725, 'Pf/Pd 大于 5', { size: 8.5, fill: C.sub })
  b.line(1233, 712, 1228, 712, { stroke: C.sub, sw: 1.5 })
  b.rect(1110, 792, 170, 38, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 6 })
  b.ctext(1195, 807, '药理证据', { size: 10, weight: 700, fill: C.ink })
  b.ctext(1195, 824, '汞抑制可逆（Cys189）', { size: 8.5, fill: C.sub })
  b.line(1195, 742, 1195, 790, { stroke: C.sub, sw: 1.5, marker: 'ink' })
  b.ctext(1195, 854, '四路证据互证', { size: 9, fill: C.mute })
  // —— 底注 ——
  b.wtext(730, 886, '渗透通透系数 Pf 与扩散通透系数 Pd 之比大于 1 是单排窄孔的理论签名：水在孔中排队时渗透流被放大、扩散流不被放大，实测 AQP1 的 Pf/Pd 大于 5', { size: 10, maxW: 610, lh: 23, fill: C.sub })
  b.wtext(730, 934, '「卵母细胞表达—汞抑制—脂质体重组」的鉴定套路与约 2 Å 结构、Pf/Pd 动力学合为证据三角——膜蛋白研究中堪称完整', { size: 10, maxW: 610, lh: 18, fill: C.sub })
  b.wtext(730, 960, 'GlpF 晶体结构紧随其后，为水甘油通道的「放宽关卡」提供实体证据', { size: 10, maxW: 610, lh: 18, fill: C.sub })
}

export default scene({
  title: '水通道蛋白总论：沙漏模型与质子屏障',
  subtitle:
    '六跨膜 α 螺旋与两个折入膜心的 NPA 半环围成沙漏形孔道；ar/R 收缩环把孔径限定在约 2.8 Å 恰容单排水，双重屏障阻断质子——导水速率约 3×10^{9} 个水分子/(s·单体)，Pf/Pd 大于 5',
  draw,
})
