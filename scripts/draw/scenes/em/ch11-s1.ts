// em ch11-s1 扫描电镜的原理与构造（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、点扫成像与放大倍数 ============
  b.panel(30, 132, 660, 412, { title: '一、点扫成像：放大倍数与透镜无关' })
  // 显示屏
  b.rect(70, 190, 200, 150, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 6 })
  for (let i = 0; i < 5; i++) b.line(90, 210 + i * 28, 250, 210 + i * 28, { stroke: C.acc, sw: 1.6, opacity: 0.5 })
  b.ctext(170, 360, '显示屏（10 cm 边长）', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(286, 265, 356, 265, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(321, 247, '逐点同步扫描', { size: 9.5, fill: C.sub })
  // 样品扫描区
  b.rect(366, 226, 90, 78, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  for (let i = 0; i < 3; i++) b.line(378, 246 + i * 24, 444, 246 + i * 24, { stroke: C.acc, sw: 1.2, opacity: 0.6 })
  b.ctext(411, 360, '样品上被扫区域', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(490, 200, '放大倍数＝显示屏边长 ÷ 扫描区边长：10 cm 的屏扫 100 μm 即 1000 倍、扫 10 μm 即 10000 倍——换倍率只改扫描电流，与透镜焦距无关。', { size: 10.5, fill: C.sub, maxW: 180, lh: 15 })
  b.tag(200, 410, '倍数范围约 10 至 10^{6} 倍', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(520, 410, '分辨率由探针尺寸与信号逸出体积共同决定', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.ctext(360, 470, '「扫得小、放得大」：点扫把成像从透镜光学搬到扫描几何，放大与解耦', { size: 10, fill: C.mute })

  // ============ 二、探针形成链 ============
  b.panel(710, 132, 660, 412, { title: '二、探针形成链：从枪到末光阑' })
  // 电子枪
  b.rect(760, 178, 90, 56, { fill: C.panelB, stroke: C.sub, sw: 1.8 })
  b.ctext(805, 200, '电子枪', { size: 11, weight: 700, fill: C.sub })
  b.ctext(805, 218, '钨／肖特基／冷场发射', { size: 9, fill: C.mute })
  b.arrow(805, 238, 805, 258, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // 聚光镜
  b.rect(760, 262, 90, 30, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(805, 282, '聚光镜', { size: 11, weight: 700, fill: C.accD })
  b.arrow(805, 296, 805, 316, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  // 物镜
  b.rect(760, 320, 90, 30, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(805, 340, '物镜', { size: 11, weight: 700, fill: C.accD })
  // 末光阑 + 会聚
  b.rect(778, 358, 54, 10, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.ctext(805, 386, '末光阑：孔径 20–100 μm', { size: 9.5, fill: C.warnD })
  b.arrow(805, 372, 805, 424, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.text(815, 404, '会聚半角约 1–20 mrad', { size: 9.5, fill: C.sub })
  // 样品
  b.line(740, 430, 890, 430, { stroke: C.sub, sw: 3 })
  b.rect(760, 430, 110, 24, { fill: C.panelB, stroke: C.sub, sw: 1.6 })
  b.ctext(815, 446, '样品', { size: 10, fill: C.sub })
  b.wtext(930, 190, '末光阑以下的会聚锥决定探针尺寸与束流的折衷；工作距离典型 2–15 mm，高分辨须小于 5 mm——距离越长像差越重。', { size: 10.5, fill: C.sub, maxW: 400, lh: 15 })
  b.tag(1000, 286, '探针直径约 1–10 nm', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 9 })
  b.tag(1000, 320, '束流：高分辨 SE 像数十皮安', { fill: C.dnaL, stroke: C.dna, size: 10.5, tfill: C.dnaD, pad: 9 })
  b.tag(1000, 354, '能谱面扫纳安级、探针放宽 10–50 nm', { fill: C.dnaL, stroke: C.dna, size: 10.5, tfill: C.dnaD, pad: 9 })
  b.ctext(1180, 430, '（探针形成链示意，非比例）', { size: 9.5, fill: C.mute })

  // ============ 三、亮度阶梯与探针尺寸 ============
  b.panel(30, 572, 660, 398, { title: '三、亮度阶梯：d 与 √(I/β) 成比例' })
  b.bars(70, 850, 330, 200, [1, 3.5, 4.5], {
    labels: ['钨灯丝', '肖特基', '冷场发射'],
    vlabels: ['约 10^{9}', '10^{12}–10^{13}', '10^{13}–10^{14}'],
    fill: C.warnL, stroke: C.warn, max: 5.2,
  })
  b.ctext(235, 600, '亮度 β（A·cm^{-2}·sr^{-1}，对数示意）', { size: 11, weight: 700, fill: C.sub })
  b.wtext(440, 616, '束流需求一升、探针必须放大：探针最小可聚尺寸受衍射极限（约 0.6λ/α）与低电压色差展宽限制——1 kV 电子波长 0.039 nm，中等会聚角下衍射极限约 1–2 nm。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  b.tag(550, 760, 'd ∝ (I/β)^{1/2}', { fill: C.rnaL, stroke: C.rna, size: 13, weight: 700, tfill: C.rnaD, pad: 12 })
  b.ctext(235, 900, '亮度高一个量级，同束流下探针细一截', { size: 10, fill: C.mute })

  // ============ 四、减速模式与历史 ============
  b.panel(710, 572, 660, 398, { title: '四、减速模式：柱内高能、落地低能' })
  b.rect(740, 616, 150, 190, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 6 })
  b.ctext(815, 640, '镜筒内', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(815, 656, 815, 760, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.text(825, 700, '高束能保光学', { size: 9.5, fill: C.sub })
  b.rect(740, 810, 150, 34, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(815, 832, '样品负偏压（减速）', { size: 9.5, weight: 700, fill: C.badD })
  b.tag(1010, 660, '落地能量压到 0.5 keV 级', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(1030, 694, '表面衬度更真', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(1170, 694, '探针更细（色差减小）', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(1030, 728, '低荷电', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(1170, 728, '三得', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.wtext(930, 776, '历史一笔：1937 年 von Ardenne 造出首台扫描电镜原理机，剑桥 Oatley 学派 1950 年代推向实用，1965 年剑桥仪器公司推出首台商品机 Stereoscan——比商品透射电镜晚了近三十年，探针路线须等场发射枪与探测器技术双双成熟。', { size: 10, fill: C.sub, maxW: 400, lh: 14 })
  b.ctext(1040, 930, '景深长与原位实验腔是形貌与动态研究的本钱', { size: 10, fill: C.mute })
}

export default scene({
  title: '扫描电镜的原理与构造：点扫成像与探针形成链',
  subtitle: '放大倍数＝屏边长÷扫描区边长（约 10 至 10⁶ 倍，与透镜无关）；亮度阶梯钨约 10⁹、肖特基 10¹²–10¹³、冷场发射 10¹³–10¹⁴ A·cm⁻²·sr⁻¹，d ∝ √(I/β)；末光阑 20–100 μm、工作距离 2–15 mm；减速模式落地 0.5 keV',
  draw,
})
