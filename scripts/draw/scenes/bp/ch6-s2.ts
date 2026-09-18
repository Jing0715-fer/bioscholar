// bp ch6-s2 磁镊与原子力显微镜（39-e 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、磁镊：恒力 + 可旋转 ============
  b.panel(30, 132, 1340, 320, { title: '一、磁镊：力恒定、可旋转磁珠——DNA 拓扑研究的专属工具' })

  // 左：仪器示意
  b.rect(200, 186, 140, 30, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 4 })
  b.ctext(270, 205, '磁体（梯度场）', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(270, 276, 270, 236, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.text(292, 258, 'F（恒定，无需闭环反馈）', { size: 10, weight: 700, fill: C.bad })
  b.circle(270, 300, 22, { fill: C.accL, stroke: C.acc, sw: 2.5 })
  b.path('M 236,300 A 34,10 0 0 1 304,300', { stroke: C.enz, sw: 2.2, marker: 'enz', fill: 'none' })
  b.text(318, 296, '可旋转', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(270, 300, '珠', { size: 9, weight: 700, fill: C.accD })
  b.path('M 266,324 C 282,344 250,360 268,378 C 284,394 252,406 266,420', { stroke: C.dna, sw: 2.2, fill: 'none' })
  b.path('M 274,324 C 258,344 290,360 272,378 C 256,394 288,406 274,420', { stroke: C.dna, sw: 2.2, fill: 'none' })
  b.text(320, 372, 'DNA（可扭转引入超螺旋）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.rect(150, 424, 240, 14, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 3 })
  b.etext(142, 434, '玻面', { size: 9.5, fill: C.mute })

  // 右：事实卡
  b.rect(560, 176, 780, 256, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(580, 204, '为什么磁镊独占 DNA 拓扑研究', { size: 13.5, weight: 700, fill: C.ink })
  const mt: Array<[string, string, number]> = [
    ['力恒定（无需闭环反馈），且无激光光损伤', '', 236],
    ['旋转磁珠 → 扭转 DNA 引入超螺旋', '可定量测扭转刚度：dsDNA 约 400 pN·nm² 量级', 270],
    ['直接观测拓扑异构酶 / 解旋酶', '以逐 bp 方式改变双链的连环数（linking number）', 316],
    ['力程 0.01–100 pN', '配合荧光可同步读取酶的构象状态', 362],
  ]
  mt.forEach(([t, d, y]) => {
    b.circle(598, y - 4, 4, { fill: C.acc })
    b.text(612, y, t, { size: 11.5, weight: 700, fill: C.ink })
    if (d) b.text(612, y + 19, d, { size: 10.5, fill: C.sub })
  })
  b.wtext(580, 408, '扭转 + 拉伸同场测量——研究超螺旋、拓扑酶与解旋酶的主力单分子技术。', { size: 10.5, fill: C.mute, maxW: 740, lh: 14 })

  // ============ 二、AFM 三种工作模式 ============
  b.panel(30, 468, 1340, 260, { title: '二、AFM（Binnig、Quate、Gerber，1986）：接触、轻敲与力谱' })

  // 卡① 接触模式
  b.rect(50, 506, 420, 206, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(66, 532, '① 接触模式', { size: 12.5, weight: 700, fill: C.ink })
  b.polygon([[85, 560], [210, 540], [210, 552], [85, 572]], { fill: C.sub, fillOp: 0.9 })
  b.polygon([[198, 548], [216, 548], [212, 612]], { fill: C.sub })
  b.line(70, 616, 270, 616, { stroke: C.mute, sw: 2.5 })
  for (let i = 0; i < 8; i++) b.line(84 + i * 24, 616, 76 + i * 24, 626, { stroke: C.mute, sw: 1.2 })
  b.wtext(66, 660, '针尖恒力贴面扫描，悬臂偏转反映高度；对软生物样品剪切损伤大', { size: 10, fill: C.sub, maxW: 390, lh: 13.5 })

  // 卡② 轻敲模式
  b.rect(490, 506, 420, 206, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(506, 532, '② 轻敲模式（tapping）', { size: 12.5, weight: 700, fill: C.ink })
  b.polygon([[525, 548], [650, 528], [650, 540], [525, 560]], { fill: C.sub, fillOp: 0.9 })
  b.polygon([[640, 540], [658, 540], [654, 586]], { fill: C.sub })
  b.line(672, 552, 672, 584, { stroke: C.enz, sw: 2, marker: 'enz', markerStart: 'enz' })
  b.text(688, 570, '共振振荡、间歇触样', { size: 9.5, weight: 700, fill: C.enzD })
  b.line(510, 616, 760, 616, { stroke: C.mute, sw: 2.5 })
  for (let i = 0; i < 8; i++) b.line(524 + i * 24, 616, 516 + i * 24, 626, { stroke: C.mute, sw: 1.2 })
  b.wtext(506, 660, '悬臂在共振频率附近振荡、间歇触样——剪切力大幅降低，适合膜与蛋白质；高速 AFM 每秒成像数十帧，实时「看」肌动蛋白聚合与马达行走', { size: 10, fill: C.sub, maxW: 390, lh: 13.5 })

  // 卡③ 力谱
  b.rect(930, 506, 420, 206, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(946, 532, '③ 力谱（force spectroscopy）', { size: 12.5, weight: 700, fill: C.ink })
  b.axis(950, 628, 180, 78, {
    yticks: [[0.5, '0'], [0.95, '+'], [0.05, '−']],
    xticks: [[0.5, '接触']],
  })
  b.curve(950, 628, 180, 78, [[0.05, 0.5], [0.45, 0.5], [0.5, 0.56], [0.95, 0.92]], { stroke: C.acc, sw: 2.4 })
  b.curve(950, 628, 180, 78, [[0.95, 0.92], [0.5, 0.5], [0.42, 0.28], [0.36, 0.28], [0.3, 0.5], [0.05, 0.5]], { stroke: C.enz, sw: 2.4, dash: '5 4' })
  b.legend(1148, 560, [['逼近', C.acc], ['撤离', C.enz]], { size: 9.5, gap: 10 })
  b.wtext(1148, 590, '黏附谷：配体–受体解离力随加载速率变化（Bell 模型）', { size: 9.5, fill: C.sub, maxW: 185, lh: 12.5 })
  b.wtext(946, 660, '针尖以 nm 步进逼近 / 撤离表面；悬臂偏转 × 弹性常数（热噪声法校准）= pN 级力–距离曲线', { size: 10, fill: C.sub, maxW: 390, lh: 13.5 })

  // ============ 三、单分子力谱：titin 锯齿与 WLC ============
  b.panel(30, 744, 1340, 236, { title: '三、单分子力谱：肌联蛋白 titin 的锯齿曲线与蠕虫状链（WLC）拟合' })

  // 左：锯齿力谱
  b.axis(90, 940, 640, 170, {
    yticks: [[0, '0'], [0.56, '100'], [1, '180']],
    xticks: [[0, '0'], [0.208, '25'], [0.417, '50'], [0.625, '75'], [0.833, '100'], [1, '120']],
  })
  b.text(96, 790, '力 F (pN)', { size: 12, weight: 600, fill: C.sub })
  const saw: [number, number][] = [
    [0.02, 0.03], [0.06, 0.1], [0.12, 0.35], [0.18, 0.68], [0.22, 0.83], [0.235, 0.15],
    [0.28, 0.25], [0.35, 0.5], [0.42, 0.72], [0.45, 0.84], [0.465, 0.18],
    [0.52, 0.28], [0.59, 0.52], [0.66, 0.73], [0.685, 0.85], [0.7, 0.2],
    [0.76, 0.3], [0.83, 0.55], [0.9, 0.76], [0.92, 0.86], [0.935, 0.22], [0.98, 0.45],
  ]
  b.curve(90, 940, 640, 170, saw, { stroke: C.enz, sw: 2.6 })
  b.line(90 + 0.19 * 640, 940 - 0.84 * 170, 90 + 0.95 * 640, 940 - 0.84 * 170, { stroke: C.faint, sw: 1.2, dash: '5 4' })
  b.ctext(410, 787, '峰值为 100–200 pN：每个 Ig 结构域被拉开', { size: 10, weight: 700, fill: C.enzD })
  b.braceH(90 + 0.22 * 640 + 4, 928, 0.23 * 640 - 8, { label: '≈ 25 nm', size: 10 })
  b.ctext(410, 975, '拉伸长度 x（nm）——上升段即 WLC 熵弹性', { size: 11.5, weight: 600, fill: C.sub })

  // 右：WLC 卡
  b.rect(760, 786, 580, 180, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(780, 812, '蠕虫状链（WLC）模型', { size: 13, weight: 700, fill: C.ink })
  b.ctext(1050, 846, 'F(x) = (k_BT/p)·[1/(2(1−x/L)²) + x/L − 1/2]', { size: 14, weight: 700, fill: C.ink })
  const wlc: Array<[string, string, number]> = [
    ['p：持续长度；L：轮廓长度', '', 878],
    ['dsDNA 拟合 → p ≈ 50 nm', '与静态方法一致，验证聚合物弹性理论', 904],
    ['AFM 力程 10 pN–10 nN', '力大、刚度高、扰动强——与光镊互补', 946],
  ]
  wlc.forEach(([t, d, y]) => {
    b.circle(798, y - 4, 4, { fill: C.enz })
    b.text(812, y, t, { size: 11, weight: 700, fill: y === 904 ? C.enzD : C.ink })
    if (d) b.text(812, y + 17, d, { size: 10, fill: C.sub })
  })
}

export default scene({
  title: '磁镊与原子力显微镜：恒力扭转与针尖力谱',
  subtitle: '磁镊：恒力 + 旋转珠（力程 0.01–100 pN，dsDNA 扭转刚度 ~400 pN·nm²）；AFM（1986）：轻敲模式护软样品、高速 AFM 每秒数十帧；titin Ig 域锯齿峰 100–200 pN、间隔 ~25 nm，WLC 拟合得 dsDNA p ≈ 50 nm',
  draw,
})
