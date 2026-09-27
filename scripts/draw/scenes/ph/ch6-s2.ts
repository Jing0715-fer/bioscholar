// ph ch6-s2 血细胞生理：红细胞形态·白细胞分类·血小板·EPO 环
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、红细胞：为气体交换而生的双凹圆盘 ============
  b.panel(30, 132, 700, 430, { title: '一、红细胞：为气体交换而生的双凹圆盘' })
  b.ctext(150, 204, '直径 7–8 μm', { size: 10.5, weight: 700, fill: C.badD })
  b.arrow(88, 216, 212, 216, { stroke: C.bad, sw: 1.4, marker: 'bad', markerStart: 'bad' })
  b.circle(150, 283, 62, { fill: '#fee2e2', stroke: C.bad, sw: 2.2 })
  b.circle(150, 283, 38, { fill: '#fecaca', stroke: C.bad, sw: 1.2, opacity: 0.75 })
  b.circle(150, 283, 14, { fill: '#fee2e2', opacity: 0.9 })
  b.ctext(150, 372, '顶面观', { size: 10.5, fill: C.sub })
  b.path('M290,260 C300,248 316,268 350,272 C384,268 400,248 410,260 L410,306 C400,318 384,298 350,294 C316,298 300,318 290,306 Z', { fill: '#fecaca', stroke: C.bad, sw: 2 })
  b.ctext(350, 340, '切面观：边缘约 2 μm · 中央约 1 μm', { size: 10, fill: C.sub })
  // 挤过毛细血管
  b.polyline([[60, 415], [170, 415], [235, 432], [285, 432]], { stroke: C.sub, sw: 2 })
  b.polyline([[60, 470], [170, 470], [235, 453], [285, 453]], { stroke: C.sub, sw: 2 })
  b.ellipse(105, 442, 17, 11, { fill: '#fecaca', stroke: C.bad, sw: 1.8 })
  b.ellipse(105, 442, 9, 5, { fill: '#fee2e2' })
  b.ellipse(250, 442, 9, 8.5, { fill: '#fecaca', stroke: C.bad, sw: 1.8 })
  b.line(242, 445, 228, 451, { stroke: C.bad, sw: 1.2 })
  b.line(242, 439, 228, 433, { stroke: C.bad, sw: 1.2 })
  b.ctext(172, 500, '挤过 3 μm 毛细血管与脾窦裂隙：折叠变形后恢复', { size: 10, fill: C.sub })
  // 右侧适配注记
  b.wtext(470, 210, '① 表面积/体积比比同体积球形高 20–30%：O_{2}/CO_{2} 扩散距离处处 ≤ 1 μm', { size: 10, fill: C.sub, maxW: 240, lh: 15.5 })
  b.wtext(470, 252, '② 可变形性：多余膜面积 + 柔韧细胞骨架；球形红细胞增多症 → 脾窦扣留、慢性溶血', { size: 10, fill: C.sub, maxW: 240, lh: 15.5 })
  b.wtext(470, 294, '③ 无核·无线粒体：约 90% 葡萄糖经糖酵解供能；2,3-DPG 支路降低 Hb 氧亲和力——慢性缺氧与高原时升高（促组织释氧），库存血中逐日衰减', { size: 10, fill: C.sub, maxW: 240, lh: 15.5 })
  b.wtext(470, 352, '④ 寿命约 120 天：老化 → 磷脂酰丝氨酸外翻「吃我」信号 → 巨噬细胞清除，铁几乎全部回收', { size: 10, fill: C.sub, maxW: 240, lh: 15.5 })
  b.wtext(470, 394, '⑤ 每细胞约 2.8 亿个 Hb（α_{2}β_{2} 四聚体，血红素 Fe^{2+} 与 O_{2} 可逆配位）', { size: 10, fill: C.sub, maxW: 240, lh: 15.5 })
  b.wtext(470, 436, '⑥ 戊糖磷酸途径供 NADPH 维持还原型谷胱甘肽——G6PD 缺乏者遇氧化应激溶血', { size: 10, fill: C.sub, maxW: 240, lh: 15.5 })
  b.wtext(50, 540, '红细胞计数男 4.0–5.5、女 3.5–5.0 ×10^{12}/L；血红蛋白男 120–160、女 110–150 g/L', { size: 10, fill: C.mute, maxW: 650, lh: 15 })

  // ============ 二、白细胞分类计数 ============
  b.panel(750, 132, 620, 430, { title: '二、白细胞分类计数（总数 4–10 ×10^{9}/L）' })
  b.wtext(770, 182, '分类计数比总数更具诊断信息量；运动、进食、妊娠与昼夜节律可致生理性波动', { size: 10, fill: C.mute, maxW: 580, lh: 15 })
  const wbc: [string, number, number, string, string, string][] = [
    ['中性粒细胞', 50, 70, C.badL, C.badD, '急性化脓感染先头部队；细菌感染升高伴核左移'],
    ['淋巴细胞', 20, 40, C.accL, C.accD, 'T / B 细胞适应性免疫；病毒感染时升高'],
    ['单核细胞', 3, 8, C.warnL, C.warnD, '入组织分化为巨噬细胞；慢性感染与恢复期'],
    ['嗜酸粒细胞', 0.5, 5, C.rnaL, C.rnaD, '抗寄生虫与过敏反应调控'],
    ['嗜碱粒细胞', 0, 1, C.proL, C.proD, 'IgE 交联释放组胺；速发超敏（与肥大细胞同源）'],
  ]
  wbc.forEach(([name, lo, hi, fill, dark, note], i) => {
    const cy = 216 + i * 56
    b.etext(950, cy + 4, name, { size: 11.5, weight: 700, fill: C.ink })
    const x0 = 975 + lo * 4.4
    const bw = Math.max((hi - lo) * 4.4, 6)
    b.rect(x0, cy - 9, bw, 18, { fill, stroke: dark, sw: 1.5, rx: 4 })
    b.text(975 + hi * 4.4 + 8, cy + 4, `${lo}–${hi}%`, { size: 10.5, weight: 700, fill: dark })
    b.text(975, cy + 26, note, { size: 9.5, fill: C.sub })
  })
  b.line(975, 478, 1315, 478, { stroke: C.sub, sw: 1.4 })
  for (const p of [0, 20, 40, 60]) {
    const x = 975 + p * 4.4
    b.line(x, 478, x, 484, { stroke: C.sub, sw: 1.4 })
    b.ctext(x, 502, `${p}%`, { size: 10, fill: C.mute })
  }
  b.ctext(1145, 526, '占白细胞总数百分比', { size: 11, weight: 600, fill: C.sub })
  b.wtext(770, 550, '渗出三步舞：选择素介导滚动 → 整合素（LFA-1）/ 内皮 ICAM 稳固粘附 → 变形渗出，循趋化因子（IL-8 · C5a）奔赴感染灶', { size: 10, fill: C.sub, maxW: 580, lh: 14 })

  // ============ 三、血小板：最小的血细胞 ============
  b.panel(30, 584, 620, 398, { title: '三、血小板：最小的血细胞' })
  b.ellipse(80, 648, 15, 9, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ellipse(130, 645, 12, 7.5, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ellipse(215, 650, 17, 12, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.line(198, 644, 186, 637, { stroke: C.pro, sw: 1.3 })
  b.line(232, 644, 244, 636, { stroke: C.pro, sw: 1.3 })
  b.line(198, 656, 184, 660, { stroke: C.pro, sw: 1.3 })
  b.line(232, 657, 246, 663, { stroke: C.pro, sw: 1.3 })
  b.line(215, 638, 215, 626, { stroke: C.pro, sw: 1.3 })
  b.ctext(105, 678, '静息：双凸盘', { size: 9.5, fill: C.sub })
  b.ctext(215, 678, '活化：棘球状（伸出伪足）', { size: 9.5, fill: C.sub })
  b.text(300, 645, '巨核细胞胞质脱落的无核碎片', { size: 10, weight: 600, fill: C.sub })
  b.text(300, 663, '保有完整膜受体与颗粒系统', { size: 10, fill: C.mute })
  const cards: [number, number, string, string][] = [
    [50, 704, '计数 100–300 ×10^{9}/L', '寿命 7–10 天 · 约 1/3 滞留脾池'],
    [340, 704, '直径 2–3 μm · 无核', '静息双凸盘 · 活化伸出伪足'],
    [50, 764, 'GPIb → vWF 粘附', '损伤初期拴于创面（高剪切「系船缆」）'],
    [340, 764, 'GPIIb/IIIa → 纤维蛋白原', '活化变构暴露 · 血小板桥连聚集'],
    [50, 824, 'ADP → P2Y_{12} 受体', '正反馈招募（氯吡格雷的靶点）'],
    [340, 824, 'TXA_{2}（COX-1 合成）', '阿司匹林不可逆乙酰化封锁'],
    [50, 884, 'α 颗粒与致密颗粒', 'vWF · 纤维蛋白原 · PDGF / ADP · 5-HT'],
    [340, 884, 'TPO（肝恒定分泌）', '调节产量 · 脾为贮池与衰老清场'],
  ]
  cards.forEach(([x, y, title, body]) => {
    b.rect(x, y, 280, 54, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
    b.text(x + 14, y + 21, title, { size: 10.5, weight: 700, fill: C.ink })
    b.wtext(x + 14, y + 39, body, { size: 9.5, fill: C.sub, maxW: 252, lh: 13 })
  })
  b.wtext(50, 966, '开放小管系统把血浆因子引入血小板内部；产量由肝脏恒定分泌的 TPO 调节（详见造血一节）', { size: 10, fill: C.mute, maxW: 580, lh: 14 })

  // ============ 四、EPO 反馈环：肾氧感受与红系调节 ============
  b.panel(670, 584, 700, 398, { title: '四、EPO 反馈环：肾氧感受与红系调节' })
  b.rect(880, 620, 280, 48, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1020, 642, '组织缺氧（贫血 · 高原 · 运动）', { size: 11, weight: 700, fill: C.badD })
  b.rect(1130, 690, 220, 66, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(1240, 712, '肾皮质间质细胞', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1240, 730, '组织氧分压相对下降 →', { size: 9.5, fill: C.mute })
  b.ctext(1240, 746, 'PHD 失活 · HIF-2α 积累', { size: 9.5, fill: C.mute })
  b.rect(1130, 796, 220, 66, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(1240, 818, 'EPO 转录 ↑', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(1240, 836, '约 30 kDa 糖蛋白激素', { size: 9.5, fill: C.sub })
  b.ctext(1240, 852, '成人 90% 肾 · 10% 肝', { size: 9.5, fill: C.sub })
  b.rect(880, 890, 280, 60, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(1020, 912, '骨髓红系祖细胞（CFU-E）', { size: 11, weight: 700, fill: C.okD })
  b.ctext(1020, 930, 'EPO-R：抑制凋亡 + 增殖分化', { size: 9.5, fill: C.sub })
  b.ctext(1020, 946, '网织红细胞提前释放入血', { size: 9.5, fill: C.sub })
  b.rect(690, 796, 220, 66, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(800, 818, '红细胞 ↑ · 携氧能力 ↑', { size: 11, weight: 700, fill: C.accD })
  b.ctext(800, 838, '红系产线开足马力', { size: 9.5, fill: C.sub })
  b.rect(690, 690, 220, 66, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(800, 712, '肾氧供改善', { size: 11, weight: 700, fill: C.ink })
  b.ctext(800, 730, 'HIF 降解', { size: 9.5, fill: C.mute })
  b.ctext(800, 746, 'EPO 回落（负反馈）', { size: 9.5, fill: C.mute })
  b.arrow(1090, 648, 1170, 694, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1240, 756, 1240, 796, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1130, 830, 1090, 894, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(880, 905, 862, 866, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(800, 796, 800, 756, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(905, 690, 928, 668, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(1020, 776, 'EPO 负反馈环', { size: 13, weight: 700, fill: C.ink })
  b.wtext(950, 800, '感受的是肾组织氧分压的相对变化，而非「血氧」的直接测量', { size: 9.5, fill: C.mute, maxW: 140, lh: 13 })
  b.wtext(950, 838, '肾性贫血 → 重组人 EPO；高原训练；罗沙司他（HIF-PHI 口服促红）；滥用 EPO → 粘度升高、血栓风险', { size: 9.5, fill: C.sub, maxW: 145, lh: 13 })
  b.wtext(690, 968, '网织红细胞占外周红细胞 0.5–1.5%——骨髓红系产量的实时仪表；MCV / MCH / MCHC 把贫血粗分为小细胞低色素、正细胞、大细胞三型', { size: 10, fill: C.sub, maxW: 650, lh: 14 })
}

export default scene({
  title: '血细胞生理：红细胞、白细胞与血小板',
  subtitle: '双凹圆盘以 20–30% 富余表面积适配气体交换（120 天寿命、2,3-DPG 调氧亲和力）；白细胞以中性粒 50–70% 居首；血小板 GPIb/GPIIb/IIIa 双受体（100–300 ×10^{9}/L）；EPO 经 HIF-2α 感受缺氧负反馈调节红系',
  draw,
})
