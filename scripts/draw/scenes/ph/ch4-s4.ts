// ph ch4-s4 听觉与前庭：传声增压、行波换能与平衡
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、传声链与增压 ============
  b.panel(30, 132, 660, 420, { title: '一、传声链：外耳道 → 鼓膜 → 听骨链 → 卵圆窗' })
  b.ctext(70, 214, '声波', { size: 10.5, fill: C.warnD })
  for (let i = 0; i < 3; i++) {
    b.path(`M ${74 + i * 11},234 a ${10 + i * 5} ${30 + i * 10} 0 0 1 0 ${68 + i * 20}`, { stroke: C.warn, sw: 1.4 })
  }
  b.polygon([[92, 224], [190, 238], [190, 302], [92, 316]], { fill: C.panelB, stroke: C.line, sw: 1.5 })
  b.ctext(150, 208, '外耳道（集音）', { size: 10.5, fill: C.sub })
  b.ellipse(196, 270, 8, 42, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(196, 330, '鼓膜', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(214, 196, 220, 150, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(324, 186, '鼓室（中耳腔，含气）', { size: 10.5, fill: C.sub })
  b.circle(238, 252, 8, { fill: C.mute })
  b.line(238, 260, 200, 268, { stroke: C.ink, sw: 2.4 })
  b.line(246, 252, 274, 251, { stroke: C.ink, sw: 2 })
  b.circle(282, 250, 8, { fill: C.mute })
  b.line(290, 251, 316, 254, { stroke: C.ink, sw: 2 })
  b.circle(322, 254, 6, { fill: C.mute })
  b.line(328, 256, 410, 252, { stroke: C.ink, sw: 2 })
  b.rect(412, 242, 14, 22, { fill: C.mute, rx: 3 })
  for (const [bx, name] of [[238, '锤骨'], [282, '砧骨'], [322, '镫骨']] as [number, string][]) {
    b.line(bx, 262, bx, 283, { stroke: C.faint, sw: 1, dash: '3 3' })
    b.ctext(bx, 296, name, { size: 10, fill: C.sub })
  }
  b.tag(320, 330, '听骨链杠杆增压约 1.3 倍', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 9 })
  b.rect(444, 200, 150, 140, { fill: C.panel, stroke: C.sub, sw: 1.8, rx: 10 })
  b.circle(519, 268, 40, { stroke: C.acc, sw: 1.8, fill: 'none' })
  b.circle(519, 268, 26, { stroke: C.acc, sw: 1.6, fill: 'none' })
  b.circle(519, 268, 12, { stroke: C.acc, sw: 1.4, fill: 'none' })
  b.ctext(519, 214, '耳蜗（含淋巴液）', { size: 10.5, fill: C.sub })
  b.ellipse(444, 248, 6, 14, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(470, 236, '卵圆窗', { size: 10, weight: 700, fill: C.accD })
  b.ellipse(444, 300, 6, 12, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(480, 320, '圆窗（压力释放）', { size: 10, weight: 700, fill: C.okD })
  b.polyline([[330, 346], [372, 372], [400, 388]], { stroke: C.sub, sw: 5 })
  b.text(408, 390, '咽鼓管（平衡气压）', { size: 10.5, fill: C.sub })
  b.tag(240, 468, '总增压 = 面积比约 17:1（55 mm^{2}:3.2 mm^{2}）× 杠杆比约 1.3 ≈ 22 倍', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 10 })
  b.wtext(50, 516, '鼓膜-听骨链把空气与耳蜗液体间约 4000 倍的阻抗差匹配起来、避免反射损失；咽鼓管平衡中耳气压，防止鼓膜内陷', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 二、耳蜗剖面与基底膜行波 ============
  b.panel(710, 132, 660, 420, { title: '二、耳蜗剖面与基底膜行波（tonotopy）' })
  b.rect(740, 200, 590, 44, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(1035, 226, '前庭阶（外淋巴，含 Na^{+}）', { size: 10.5, fill: C.accD })
  b.rect(740, 250, 590, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.ctext(1035, 274, '蜗管中阶（内淋巴高 K^{+}，+80 mV）', { size: 10.5, fill: C.dnaD })
  b.polygon([[742, 293], [1328, 289], [1328, 301], [742, 299]], { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  b.rect(740, 306, 590, 40, { fill: C.panelB, stroke: C.sub, sw: 1.5 })
  b.ctext(1080, 330, '鼓阶（外淋巴）', { size: 10.5, fill: C.sub })
  b.ellipse(740, 222, 7, 16, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(762, 190, '卵圆窗', { size: 10, weight: 700, fill: C.accD })
  b.ellipse(740, 326, 7, 14, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(800, 330, '圆窗', { size: 10, fill: C.okD })
  b.circle(1332, 273, 8, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.ctext(1332, 190, '蜗孔', { size: 10, fill: C.sub })
  b.path('M742,290 C780,286 800,258 830,258 C860,258 880,284 920,290', { stroke: C.bad, sw: 2.2 })
  b.path('M980,290 C1050,286 1150,250 1250,250 C1300,250 1320,278 1330,286', { stroke: C.dna, sw: 2.2 })
  b.ctext(815, 244, '高频：峰值在基部（窄而硬）', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(1190, 244, '低频：峰值在顶部（宽而软）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(742, 356, '基部：基底膜窄而硬 → 感受高频（至 20 kHz）', { size: 10.5, fill: C.sub })
  b.text(742, 382, '顶部：基底膜宽而软 → 感受低频（至 20 Hz）——频率沿膜定位（tonotopy）', { size: 10.5, fill: C.sub })
  b.wtext(742, 420, '行波由卵圆窗驱动、自基部向顶部传播，幅度在其共振点骤增并随即衰减；每个频率都有特征峰值位置——耳蜗的机械傅里叶分析', { size: 10.5, fill: C.sub, maxW: 580, lh: 18 })
  b.wtext(742, 466, '基底膜振动 → 毛细胞顶部的静纤毛与盖膜发生相对位移（剪切运动）→ 机械-电换能（见左下图）', { size: 10.5, fill: C.sub, maxW: 580, lh: 18 })

  // ============ 三、毛细胞机械-电换能 ============
  b.panel(30, 572, 660, 412, { title: '三、毛细胞机械-电换能' })
  b.rect(120, 660, 110, 190, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 22 })
  for (let i = 0; i < 6; i++) {
    const x = 135 + i * 14
    const h = 16 + i * 8
    b.line(x, 660, x, 660 - h, { stroke: C.ink, sw: 3 })
    if (i < 5) b.line(x + 2, 660 - h, x + 12, 660 - h - 10, { stroke: C.bad, sw: 1, dash: '2 2' })
  }
  b.path('M105,606 Q175,572 245,606', { stroke: C.pro, sw: 2 })
  b.text(250, 588, '盖膜', { size: 10.5, weight: 700, fill: C.proD })
  b.arrow(160, 594, 220, 598, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(262, 616, '偏向最长静纤毛 → 通道开放', { size: 10.5, weight: 700, fill: C.accD })
  const chain: [string, string][] = [
    ['① 静纤毛向最长侧偏转', C.accL],
    ['② 顶端机械门控 K^{+} 通道开放', C.warnL],
    ['③ K^{+} 内流（内淋巴电位驱动）→ 去极化', C.warnL],
    ['④ 底侧电压门控 Ca^{2+} 通道开放', C.rnaL],
    ['⑤ 谷氨酸胞吐 → 传入放电 ↑', C.okL],
  ]
  chain.forEach(([s, f], i) => {
    const cy = 640 + i * 32
    b.tag(505, cy, s, { fill: f, stroke: C.line, tfill: C.ink, size: 11, weight: 700, pad: 9 })
    if (i < chain.length - 1) b.arrow(505, cy + 12, 505, cy + 21, { stroke: C.mute, sw: 1.3, marker: 'mute' })
  })
  b.arrow(175, 852, 175, 884, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  for (let i = 0; i < 5; i++) b.line(200 + i * 16, 880, 200 + i * 16, 866, { stroke: C.enz, sw: 1.6 })
  b.text(196, 902, '传入放电', { size: 10.5, fill: C.enzD })
  b.wtext(120, 930, '内毛细胞 1 排：约 95% 传入纤维（听觉信息主通道）；外毛细胞 3 排：prestin 电能动性主动放大行波（耳声发射的来源）', { size: 10.5, fill: C.sub, maxW: 540, lh: 18 })

  // ============ 四、前庭器官与听觉频率范围 ============
  b.panel(710, 572, 660, 412, { title: '四、前庭器官与听觉频率范围' })
  b.ctext(850, 648, '三半规管（感知角加速度）', { size: 10.5, weight: 700, fill: C.accD })
  b.ellipse(830, 690, 24, 38, { stroke: C.acc, sw: 2, fill: 'none' })
  b.ellipse(874, 690, 24, 38, { stroke: C.acc, sw: 2, fill: 'none' })
  b.ellipse(852, 732, 44, 16, { stroke: C.acc, sw: 2, fill: 'none' })
  b.ellipse(852, 692, 16, 10, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.rect(960, 660, 70, 70, { fill: '#ffffff', stroke: C.sub, sw: 1.6, rx: 8 })
  b.path('M975,725 L975,700 Q995,688 1015,700 L1015,725', { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.path('M975,700 Q995,655 1015,700', { fill: C.proL, stroke: C.pro, sw: 1.5, fillOp: 0.8 })
  b.ctext(995, 748, '壶腹嵴（杯嵴）', { size: 10, weight: 700, fill: C.sub })
  b.text(960, 770, '内淋巴流动 → 嵴偏斜', { size: 10, fill: C.mute })
  b.rect(760, 760, 90, 16, { fill: C.warnL, stroke: C.warn, sw: 1.5 })
  for (let i = 0; i < 9; i++) b.circle(765 + i * 10, 755, 2.5, { fill: C.warn })
  b.ctext(805, 800, '椭圆囊/球囊斑（耳石器）', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(805, 820, '感知直线加速度与重力（头位）', { size: 10, fill: C.sub })
  b.wtext(1080, 656, '半规管三管互成直角：角加速度使内淋巴滞后流动 → 壶腹嵴偏斜 → 毛细胞换能；旋转同侧兴奋、对侧抑制', { size: 10.5, fill: C.sub, maxW: 260, lh: 18 })
  b.wtext(1080, 760, '耳石器：耳石（碳酸钙结晶）的惯性使毛细胞受力方向改变 → 感受重力与直线加速度', { size: 10.5, fill: C.sub, maxW: 260, lh: 18 })
  // 听觉范围标尺（对数）
  const lx = (f: number) => 740 + (Math.log10(f / 20) / 3) * 590
  b.text(740, 866, '人耳可听 20 Hz–20 kHz；听阈最低（最敏感）区约 1–4 kHz', { size: 10.5, fill: C.sub })
  b.rect(lx(300), 878, lx(3000) - lx(300), 22, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.ctext((lx(300) + lx(3000)) / 2, 893, '语言频带 0.3–3 kHz', { size: 10, weight: 700, fill: C.okD })
  b.line(740, 900, 1330, 900, { stroke: C.sub, sw: 2, marker: 'ink' })
  for (const [f, s] of [[20, '20'], [50, '50'], [100, '100'], [200, '200'], [500, '500'], [1000, '1k'], [2000, '2k'], [5000, '5k'], [10000, '10k'], [20000, '20k']] as [number, string][]) {
    b.line(lx(f), 900, lx(f), 907, { stroke: C.sub, sw: 1.8 })
    b.ctext(lx(f), 924, s, { size: 10, fill: C.mute })
  }
  b.ctext(1035, 950, '频率（Hz，对数刻度）', { size: 11, weight: 600, fill: C.sub })
}

export default scene({
  title: '听觉与前庭：传声增压、行波换能与平衡',
  subtitle: '鼓膜-听骨链杠杆增压约 22 倍（面积比 17:1 × 杠杆比 1.3）；高频行波峰值在基底膜基部、低频在顶部；内毛细胞承接约 95% 传入纤维；人耳可听 20 Hz–20 kHz',
  draw,
})
