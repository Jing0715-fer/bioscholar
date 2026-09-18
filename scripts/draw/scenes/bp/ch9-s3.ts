// bp ch9-s3 共聚焦、双光子与超分辨显微镜（39-e 收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三联光路 ============
  b.panel(30, 132, 1340, 450, { title: '一、三联光路：针孔切片 · 平方定位 · 环形损耗' })

  // 卡①：共聚焦
  b.rect(50, 175, 420, 350, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(66, 203, '① 激光扫描共聚焦：针孔排除焦外', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(105, 240, '激光', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.badD, pad: 7 })
  b.arrow(142, 244, 192, 264, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.line(184, 250, 216, 278, { stroke: C.acc, sw: 3.5 })
  b.ellipse(200, 296, 26, 8, { fill: 'none', stroke: C.sub, sw: 2 })
  b.ellipse(200, 309, 26, 8, { fill: 'none', stroke: C.sub, sw: 2 })
  b.arrow(200, 268, 200, 328, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.line(120, 322, 280, 322, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.line(120, 342, 280, 342, { stroke: C.sub, sw: 2 })
  b.line(120, 362, 280, 362, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.circle(200, 342, 7, { fill: C.ok })
  b.circle(150, 322, 5, { fill: C.faint })
  b.circle(250, 362, 5, { fill: C.faint })
  b.text(240, 306, '物镜', { size: 9, fill: C.mute })
  b.text(290, 346, '焦平面', { size: 9.5, weight: 700, fill: C.sub })
  // 发射光路与针孔
  b.arrow(200, 330, 200, 288, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(192, 264, 136, 264, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.rect(96, 256, 9, 16, { fill: C.ink })
  b.rect(124, 256, 9, 16, { fill: C.ink })
  b.circle(112, 226, 13, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(112, 230, '探测', { size: 7.5, weight: 700, fill: C.badD })
  b.ctext(114, 286, '针孔', { size: 9, fill: C.mute })
  b.line(150, 318, 126, 276, { stroke: C.faint, sw: 1.4, dash: '4 3' })
  b.line(138, 296, 130, 288, { stroke: C.bad, sw: 2.6 })
  b.line(130, 296, 138, 288, { stroke: C.bad, sw: 2.6 })
  b.text(140, 302, '焦外光被排除', { size: 9, weight: 700, fill: C.badD })
  b.wtext(66, 428, '探测端针孔只放行焦平面上的发射光——光学切片；逐点扫描重构三维图像。', { size: 10, fill: C.sub, maxW: 390, lh: 13.5 })
  b.tag(240, 495, '轴向分辨率约 0.5–0.8 μm', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 9 })

  // 卡②：双光子
  b.rect(490, 175, 420, 350, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(506, 203, '② 双光子：平方依赖 → 天然三维定位', { size: 12.5, weight: 700, fill: C.ink })
  b.text(506, 232, '近红外飞秒脉冲（激发约 700–1000 nm）', { size: 9.5, weight: 700, fill: C.badD })
  b.tag(790, 240, '激发概率 ∝ 强度²', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 9 })
  b.ellipse(610, 262, 28, 8, { fill: 'none', stroke: C.sub, sw: 2 })
  b.line(586, 258, 610, 400, { stroke: C.bad, sw: 1.8 })
  b.line(634, 258, 610, 400, { stroke: C.bad, sw: 1.8 })
  b.line(520, 300, 700, 300, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.line(520, 360, 700, 360, { stroke: C.faint, sw: 1.4, dash: '5 4' })
  b.line(520, 400, 700, 400, { stroke: C.sub, sw: 2 })
  b.circle(610, 400, 16, { fill: C.okL, fillOp: 0.5 })
  b.circle(610, 400, 8, { fill: C.ok })
  b.text(506, 318, '焦点外：无荧光', { size: 9, fill: C.mute })
  b.text(506, 378, '焦点体素：唯一发光', { size: 9, weight: 700, fill: C.okD })
  b.wtext(506, 428, '两个长波光子同时吸收（等效一个半波长光子）；因激发概率 ∝ 强度²，荧光只产生于焦点体素内——天然三维定位；红外散射少、光损伤集中于焦点。', { size: 10, fill: C.sub, maxW: 390, lh: 13.5 })
  b.tag(690, 495, '穿透深度可达 ~1 mm', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.badD, pad: 9 })

  // 卡③：STED
  b.rect(930, 175, 420, 350, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(946, 203, '③ STED：环形损耗光「强行熄灭」外围', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(1140, 240, '损耗光 MW/cm² 量级', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 8 })
  // 激发斑
  b.circle(1030, 310, 30, { fill: C.ok, fillOp: 0.28 })
  b.circle(1030, 310, 20, { fill: C.ok, fillOp: 0.32 })
  b.circle(1030, 310, 10, { fill: C.ok, fillOp: 0.5 })
  b.ctext(1030, 362, '激发斑（衍射极限）', { size: 9.5, weight: 700, fill: C.okD })
  // 环形损耗
  b.circle(1170, 310, 34, { fill: 'none', stroke: C.bad, sw: 9 })
  b.ctext(1170, 362, '环形损耗光', { size: 9.5, weight: 700, fill: C.badD })
  // 发光核
  b.circle(1290, 310, 10, { fill: C.ok, fillOp: 0.5 })
  b.circle(1290, 310, 6, { fill: C.ok, fillOp: 0.6 })
  b.ctext(1290, 362, '发光核', { size: 9.5, weight: 700, fill: C.okD })
  b.arrow(1068, 310, 1124, 310, { stroke: C.ink, sw: 2.2, marker: 'ink' })
  b.arrow(1216, 310, 1262, 310, { stroke: C.ink, sw: 2.2, marker: 'ink' })
  b.ctext(1096, 292, '叠加', { size: 9, fill: C.mute })
  b.ctext(1239, 292, '熄灭外围', { size: 9, fill: C.mute })
  b.wtext(946, 428, '环形损耗激光把焦斑外围荧光「强行熄灭」，只剩远小于衍射斑的发光核——线性扫描、快、可活细胞；代价：光漂白与光毒性明显。', { size: 10, fill: C.sub, maxW: 390, lh: 13.5 })
  b.tag(1140, 495, '分辨率 20–50 nm', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 9 })

  // ============ 二、超分辨三杰与选型 ============
  b.panel(30, 612, 1340, 368, { title: '二、超分辨三杰（2014 年诺贝尔化学奖）与选型的物理逻辑' })
  b.table(50, 660, 640, {
    headers: ['技术', '物理原理', '分辨率', '特点'],
    colW: [110, 250, 100, 180],
    fontSize: 11.5,
    rowH: 62,
    rows: [
      ['STED', '环形损耗光熄灭焦斑外围，仅剩发光核', '20–50 nm', '线性扫描、快、可活细胞'],
      ['PALM / STORM', '稀疏点亮 + 逐帧定位，数万帧叠加', '~20 nm', '精度最高、采集慢'],
      ['SIM', '结构光条纹折叠高频信息后解调', '~100 nm', '宽场快速、活细胞友好'],
    ],
  })
  b.rect(720, 655, 640, 235, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(736, 683, '选型的物理逻辑', { size: 13, weight: 700, fill: C.ink })
  const logic: Array<[string, number]> = [
    ['看分子排列（突触后致密区、核孔）→ STORM / PALM', 714],
    ['看活细胞动态（囊泡运输、线粒体裂分）→ SIM 或低功率 STED', 742],
    ['看厚组织深部 → 双光子 + 自适应光学补偿像差', 770],
  ]
  logic.forEach(([t, y]) => {
    b.circle(752, y - 4, 4, { fill: C.acc })
    b.text(764, y, t, { size: 10.5, weight: 600, fill: C.sub })
  })
  b.wtext(736, 800, 'PALM / STORM 依赖可控开关的荧光团（PA-FP 或染料对）与长时间采集，时间分辨率秒—分钟；SIM 无需特殊荧光团、最易与活细胞联用，但只能线性提升约 2 倍。', { size: 10, fill: C.mute, maxW: 600, lh: 14 })
  b.ctext(700, 925, '超分辨并非「废除」衍射，而是用非线性的分子响应或时间维度的稀疏化绕过同时性的限制——理解这一点，比记住分辨率数字更重要。', { size: 11.5, weight: 600, fill: C.sub })
}

export default scene({
  title: '共聚焦、双光子与超分辨显微镜：三联光路与选型',
  subtitle: '共聚焦＝针孔排除焦外（轴向 0.5–0.8 μm）；双光子＝激发 ∝ 强度²、仅焦点发光（穿透 ~1 mm，活体脑皮层主力）；STED＝环形损耗光熄灭外围（20–50 nm）；PALM/STORM ~20 nm、SIM ~100 nm——2014 年诺贝尔化学奖',
  draw,
})
