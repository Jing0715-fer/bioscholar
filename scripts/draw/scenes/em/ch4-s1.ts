// em ch4-s1 弹性与非弹性散射（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两类散射 ============
  b.panel(30, 132, 660, 270, { title: '一、两类散射：衬度与损伤的共同起点' })
  b.circle(260, 262, 7, { fill: C.sub })
  b.circle(260, 262, 22, { stroke: C.faint, sw: 1.3, dash: '4 4' })
  b.circle(260, 262, 36, { stroke: C.faint, sw: 1.1, dash: '2 5' })
  b.arrow(110, 262, 216, 262, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.circle(104, 262, 4.5, { fill: C.warn })
  b.ctext(150, 240, '入射电子', { size: 10.5, fill: C.mute })
  b.arrow(282, 250, 360, 204, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.circle(370, 201, 4.5, { fill: C.acc })
  b.text(380, 200, '弹性：只改方向，E 不变', { size: 11, weight: 700, fill: C.accD })
  b.arrow(282, 274, 360, 320, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.circle(370, 323, 4.5, { fill: C.pro })
  b.text(380, 326, '非弹性：E−ΔE，能量沉积', { size: 11, weight: 700, fill: C.proD })
  b.arrow(240, 232, 228, 178, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.circle(226, 172, 3.5, { fill: C.bad })
  b.text(140, 170, 'ΔE 沉积：电离与激发', { size: 10.5, weight: 600, fill: C.badD })
  b.wtext(50, 372, '100–300 keV 的电子以约 0.5–0.8 倍光速穿越样品（波长约 2–4 pm）：弹性散射是衍射花样与相位衬度的物理来源；非弹性散射贡献 EELS 信号，也是辐射损伤的元凶。被散射出光阑的电子并未消失——环形探测器上是暗场信号，能量色散系统里是谱学数据。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、弹性散射与 Mott 截面 ============
  b.panel(710, 132, 660, 270, { title: '二、弹性散射与 Mott 截面：三条趋势' })
  b.axis(750, 350, 300, 180, {
    grid: false, xlabel: '散射角 θ', title: '微分截面 dσ/dΩ（示意，对数纵轴）',
    xticks: [[0, '0'], [0.5, '中角'], [1, '大角']], yticks: [[1, '强'], [0, '弱']],
  })
  b.curve(750, 350, 300, 180, [[0, 1], [0.08, 0.6], [0.18, 0.34], [0.3, 0.18], [0.45, 0.09], [0.62, 0.045], [0.8, 0.022], [1, 0.012]], { stroke: C.acc, sw: 2.6, smooth: true })
  b.rect(960, 170, 90, 180, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.2, dash: '4 3' })
  b.ctext(1005, 186, 'HAADF 只收这里', { size: 9.5, weight: 700, fill: C.badD })
  b.wtext(1070, 190, '· 随散射角增大急剧下降——前向为主', { size: 11, fill: C.sub, maxW: 280, lh: 17 })
  b.wtext(1070, 214, '· 随原子序数按平方量级增长（Z 衬度的出处）', { size: 11, fill: C.sub, maxW: 280, lh: 17 })
  b.wtext(1070, 246, '· 随电子速度（加速电压）增大而减小', { size: 11, fill: C.sub, maxW: 280, lh: 17 })
  b.tag(905, 300, 'Mott 截面（1929）：卢瑟福截面的相对论修正 + 电子自旋', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 8 })
  b.tag(920, 366, '成像毫弧度角上原子散射振幅约比 X 射线强 10^{3} 倍', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(750, 394, '极小晶体 + 远小于 X 射线的剂量即可拿到可用衍射强度（第 10 章电子晶体学与 MicroED 的资本）；氢碳氮氧的振幅彼此接近——生物样品自带内源性衬度。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、非弹性三通道：EELS 谱 ============
  b.panel(30, 422, 700, 300, { title: '三、非弹性散射的三条通道：一张 EELS 谱' })
  b.axis(70, 640, 630, 170, {
    grid: false, xlabel: '能量损失 ΔE（eV）',
    xticks: [[0, '0'], [0.24, '150'], [0.48, '300'], [0.72, '450'], [0.96, '600']], yticks: [],
  })
  b.polygon([[70, 640], [77, 470], [85, 640]], { fill: C.acc, fillOp: 0.85 })
  b.text(100, 486, '零损失峰', { size: 10.5, weight: 700, fill: C.accD })
  b.path('M 88,640 C 96,548 108,548 118,640', { stroke: C.warn, sw: 2.2, fill: 'none' })
  b.arrow(136, 574, 106, 596, { stroke: C.warn, sw: 1.5, marker: 'warn' })
  b.text(142, 572, '等离子体激发 10–25 eV', { size: 10.5, weight: 700, fill: C.warnD })
  b.path('M 118,628 C 250,648 400,656 690,662', { stroke: C.faint, sw: 1.4 })
  b.path('M 348,638 L 354,604 L 388,630', { stroke: C.enz, sw: 2.2, fill: 'none' })
  b.path('M 465,636 L 471,596 L 506,624', { stroke: C.enz, sw: 2.2, fill: 'none' })
  b.path('M 596,634 L 602,590 L 638,618', { stroke: C.enz, sw: 2.2, fill: 'none' })
  b.ctext(354, 588, 'C K 边 284 eV', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(471, 580, 'N K 边 401 eV', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(602, 566, 'O K 边 532 eV', { size: 10, weight: 700, fill: C.enzD })
  b.wtext(50, 700, '三通道：等离子体激发 10–25 eV（谱学测厚、价带分析）· 内壳层电离数十至上千 eV（特征边、元素成像的基石）· 声子激发低于 1 eV（轻微整体升温）。低 Z 生物材料中价电子激发占能量损失的大头、电离次之、声子只贡献尾部。', { size: 10.5, fill: C.sub, maxW: 660, lh: 15 })

  // ============ 四、平均自由程 ============
  b.panel(710, 422, 620, 300, { title: '四、平均自由程：样品厚度的物理红线' })
  b.ctext(1020, 460, '100–300 kV 电子穿过低 Z 生物物质（蛋白质、玻璃冰）', { size: 11, weight: 600, fill: C.sub })
  const mx = (v: number) => 770 + (v / 350) * 520
  for (let v = 0; v <= 350; v += 50) b.ctext(mx(v), 610, String(v), { size: 9.5, fill: C.mute })
  b.line(770, 590, 1290, 590, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(mx(50), 486, mx(150) - mx(50), 22, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 4 })
  b.text(778, 501, '非弹性 50–150 nm', { size: 11, weight: 700, fill: C.badD })
  b.rect(mx(100), 530, mx(300) - mx(100), 22, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.text(778, 545, '弹性 100–300 nm', { size: 11, weight: 700, fill: C.accD })
  b.ctext(1030, 634, '平均自由程（nm）', { size: 10.5, fill: C.mute })
  b.tag(1000, 668, '非弹性/弹性截面之比约 20/Z：冰既「透」又「脏」', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(730, 696, '300 kV 电子穿过 100 nm 冰：平均非弹性事件约 0.5–0.7 次——薄冰的统计学红利；穿 400 nm 则两三次，信噪与解释同时恶化。厚度逼近自由程，单次散射近似与弱相位物体近似双双失效——冷冻电镜把冰控制在约 100 nm 以内的物理根源。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
}

export default scene({
  title: '弹性与非弹性散射：衬度与损伤的共同起点',
  subtitle: '弹性只改方向（衍射与相位衬度），非弹性沉积能量（EELS 与损伤）；等离激元 10–25 eV、C K 284 / N K 401 / O K 532 eV；弹性自由程 100–300 nm、非弹性 50–150 nm（约 20/Z）',
  draw,
})
