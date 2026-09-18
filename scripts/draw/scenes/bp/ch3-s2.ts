// bp ch3-s2 膜弹性理论：表面张力、弯曲刚度与 Helfrich 能量（39-e 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、流体膜弹性的三个层次 ============
  b.panel(30, 132, 1340, 288, { title: '一、流体膜弹性的三个层次：拉伸（面积）、剪切（无阻力）与弯曲（曲率）' })

  // -- 列 1：拉伸（面积改变）--
  b.bilayer(150, 196, 120, { h: 14, tint: C.dna })
  b.arrow(162, 203, 108, 203, { stroke: C.bad, sw: 2.2 })
  b.arrow(262, 203, 316, 203, { stroke: C.bad, sw: 2.2 })
  b.ctext(230, 258, '拉伸：面积改变', { size: 13, weight: 700, fill: C.ink })
  b.wtext(125, 282, '面积压缩模量 KA ≈ 0.1–0.3 N/m；纯脂双层拉大面积 2–3% 即破裂。', { size: 10.5, fill: C.sub, maxW: 214, lh: 14 })

  // -- 列 2：剪切（流体膜无阻力）--
  b.bilayer(372, 186, 110, { h: 13, tint: C.acc })
  b.bilayer(352, 230, 110, { h: 13, tint: C.acc })
  b.arrow(490, 192, 542, 192, { stroke: C.accD, sw: 2.2 })
  b.arrow(472, 236, 420, 236, { stroke: C.accD, sw: 2.2 })
  b.ctext(460, 262, '剪切：流体膜无阻力', { size: 13, weight: 700, fill: C.ink })
  b.wtext(348, 286, '双层是二维流体（μ ≈ 0）；红细胞另靠膜下血影蛋白网架获得剪切刚度。', { size: 10.5, fill: C.sub, maxW: 224, lh: 14 })

  // -- 列 3：弯曲（曲率改变）--
  b.path('M 690,252 Q 820,156 950,252', { stroke: C.dna, sw: 3, opacity: 0.85 })
  b.path('M 690,264 Q 820,168 950,264', { stroke: C.dna, sw: 3, opacity: 0.85 })
  b.line(690, 252, 950, 252, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.ctext(820, 232, '2H', { size: 11, fill: C.mute })
  b.ctext(820, 290, '弯曲：曲率改变', { size: 13, weight: 700, fill: C.ink })
  b.wtext(700, 312, '弯曲刚度 κ，弯曲能 ∝ (2H − C₀)²——Helfrich 能量的主角（下）。', { size: 10.5, fill: C.sub, maxW: 240, lh: 14 })

  // -- 右侧：面积弹性总结框 --
  b.rect(1000, 176, 356, 228, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(1020, 204, '面积弹性：膜几乎不可压', { size: 13.5, weight: 700, fill: C.accD })
  const areaPts: Array<[string, string]> = [
    ['生理张力仅 ~0.01 mN/m 量级', '该张力下面积变化通常不足 1%'],
    ['变形不靠拉伸，靠折叠', '细胞用「多余的膜」储备应对形状改变'],
  ]
  areaPts.forEach(([t, d], i) => {
    const y = 230 + i * 84
    b.circle(1028, y + 4, 4, { fill: C.acc })
    b.text(1040, y + 8, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(1040, y + 28, d, { size: 10.5, fill: C.sub, maxW: 296, lh: 14 })
  })

  // ============ 二、Helfrich 弯曲能量 ============
  b.panel(30, 444, 1340, 316, { title: '二、Helfrich 弯曲能量（1973）：稳态形状 = 泛函在面积/体积约束下的极小化' })

  // -- 公式（彩色分段）--
  const fy = 512
  b.text(118, fy, 'E = ∫ [', { size: 22, weight: 700, fill: C.ink })
  b.ctext(360, fy, '(κ/2)·(2H − C₀)²', { size: 22, weight: 700, fill: C.dna })
  b.ctext(478, fy, '+', { size: 22, weight: 700, fill: C.ink })
  b.ctext(545, fy, 'κ̄·K', { size: 22, weight: 700, fill: C.pro })
  b.ctext(612, fy, '+', { size: 22, weight: 700, fill: C.ink })
  b.ctext(662, fy, 'σ', { size: 22, weight: 700, fill: C.acc })
  b.text(700, fy, '] dA', { size: 22, weight: 700, fill: C.ink })
  // 分项花括号
  b.braceH(255, 530, 210, { label: '平均曲率项：形状主力', size: 12 })
  b.braceH(513, 530, 64, { label: '高斯曲率项', size: 12 })
  b.braceH(634, 530, 56, { label: '张力项', size: 12 })
  b.wtext(118, 580, 'H：平均曲率（球面 H = 1/R，圆柱 H = 1/(2R)）；K：高斯曲率；C₀：自发曲率；κ：弯曲刚度；κ̄：高斯模量；σ：膜张力', { size: 10.5, fill: C.mute, maxW: 640, lh: 14 })

  // -- 右侧：κ 量级卡 --
  b.rect(780, 470, 576, 122, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(800, 494, '弯曲刚度 κ 的量级', { size: 13.5, weight: 700, fill: C.dnaD })
  const kLines = [
    '流体磷脂双层 κ ≈ 10–25 k_BT（约 0.4–1 × 10⁻¹⁹ J）',
    '连续介质理论：κ ~ KA·h² / 常数（h 为膜厚）',
    '室温 k_BT ≈ 4.1 × 10⁻²¹ J——热运动恰能激起显著弯曲涨落，膜「软而不垮」',
  ]
  kLines.forEach((s, i) => {
    b.circle(808, 517 + i * 24, 3.5, { fill: C.dna })
    b.text(820, 521 + i * 24, s, { size: 11, fill: C.sub })
  })

  // -- 底部左：三种曲率几何 --
  // 平面
  b.line(100, 648, 290, 648, { stroke: C.dna, sw: 3.5 })
  b.line(100, 660, 290, 660, { stroke: C.dna, sw: 3.5 })
  b.ctext(195, 700, '平面：H = 0', { size: 12, weight: 600, fill: C.sub })
  // 球面
  b.circle(440, 650, 28, { fill: C.dnaL, stroke: C.dna, sw: 2.2 })
  b.arrow(440, 650, 462, 630, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(470, 626, 'R', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(440, 700, '球面：H = 1/R', { size: 12, weight: 600, fill: C.sub })
  // 圆柱
  b.ellipse(640, 650, 12, 26, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.rect(640, 624, 80, 52, { fill: C.accL, stroke: 'none' })
  b.line(640, 624, 640, 676, { stroke: C.acc, sw: 2 })
  b.line(720, 624, 720, 676, { stroke: C.acc, sw: 2 })
  b.ellipse(720, 650, 12, 26, { fill: C.bg, stroke: C.acc, sw: 2 })
  b.arrow(690, 650, 690, 626, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(698, 620, 'R', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(680, 700, '圆柱：H = 1/(2R)', { size: 12, weight: 600, fill: C.sub })

  // -- 底部右：自发曲率卡 --
  b.rect(800, 606, 556, 134, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(820, 632, '自发曲率 C₀ 的来源', { size: 13.5, weight: 700, fill: C.proD })
  b.wtext(820, 656, '① 膜两侧成分不对称——如仅在胞质单层插入锥形脂；② 嵌入蛋白挤压一侧单层。红细胞双凹碟形、出芽、纳米管等稳态形状，都是 Helfrich 能量在给定面积与体积约束下的极小化结果。', { size: 10.5, fill: C.sub, maxW: 516, lh: 15 })

  // ============ 三、尺度分析 ============
  b.panel(30, 784, 1340, 196, { title: '三、尺度分析：从公式到细胞器形态' })

  // 卡 1：成球
  b.rect(50, 820, 410, 115, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.2, rx: 8 })
  b.circle(108, 878, 22, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(108, 882, '8πκ', { size: 11, weight: 700, fill: C.bad })
  b.text(146, 843, '弯成完整球壳：8πκ ≈ 500 k_BT', { size: 12, weight: 700, fill: C.bad })
  b.wtext(146, 865, 'κ = 20 k_BT 的膜弯成球壳约需 500 k_BT——热涨落远不足以自发成球，而 ATP 驱动的蛋白机器（发动蛋白 dynamin）可轻松支付。', { size: 10, fill: C.sub, maxW: 296, lh: 13.5 })

  // 卡 2：拉膜管
  b.rect(480, 820, 410, 115, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 1.2, rx: 8 })
  b.line(500, 905, 590, 905, { stroke: C.dna, sw: 3.5 })
  b.line(500, 916, 590, 916, { stroke: C.dna, sw: 3.5 })
  b.line(528, 905, 528, 848, { stroke: C.dna, sw: 2.2 })
  b.line(542, 905, 542, 848, { stroke: C.dna, sw: 2.2 })
  b.path('M 528,848 A 7 7 0 0 1 542,848', { stroke: C.dna, sw: 2.2, fill: 'none' })
  b.ctext(556, 838, 'r, L', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(600, 843, '拉出膜管：E ≈ 2πκ·L/r + πσr²', { size: 12, weight: 700, fill: C.dnaD })
  b.wtext(600, 865, '半径 r、长度 L 的膜管能量——马达拖拽膜管实验正是由此测定 κ 与 σ 的经典方法。', { size: 10, fill: C.sub, maxW: 270, lh: 13.5 })

  // 卡 3：高斯曲率项
  b.rect(910, 820, 440, 115, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.2, rx: 8 })
  b.circle(952, 868, 12, { fill: C.bg, stroke: C.pro, sw: 1.8 })
  b.circle(978, 868, 12, { fill: C.bg, stroke: C.pro, sw: 1.8 })
  b.arrow(998, 868, 1026, 868, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.circle(1052, 868, 19, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.text(1092, 843, '高斯曲率项（Gauss–Bonnet）', { size: 12, weight: 700, fill: C.proD })
  b.wtext(1092, 865, '拓扑不变时 κ̄·K 项为常数；仅在膜的融合、断裂（拓扑数改变）事件中起作用。', { size: 10, fill: C.sub, maxW: 244, lh: 13.5 })

  b.wtext(50, 960, '膜弹性理论把细胞器的形态学——内质网的三维网络、高尔基体的层堆、线粒体嵴——变成可计算的力学问题，是定量细胞生物学的支柱之一。', { size: 10.5, fill: C.mute, maxW: 1280, lh: 14 })
}

export default scene({
  title: '膜弹性理论：弯曲刚度与 Helfrich 能量',
  subtitle: 'KA ≈ 0.1–0.3 N/m（拉大 2–3% 即破裂）；κ ≈ 10–25 k_BT；E = ∫[(κ/2)(2H−C₀)² + κ̄K + σ]dA；成球 8πκ ≈ 500 k_BT，膜管 E ≈ 2πκ·L/r + πσr²',
  draw,
})
