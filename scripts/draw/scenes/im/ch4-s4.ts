// im ch4-s4 急性期反应与固有免疫的时相：CRP/SAA 曲线（39-g 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三个时相 ============
  b.panel(30, 132, 1340, 240, { title: '一、固有免疫应答的时相划分：即刻 → 早期诱导 → 适应性应答接力' })
  const phases: Array<[number, number, string, string, string, string, string]> = [
    [60, 380, '即刻应答', '0–4 小时', '现有屏障与分子即刻生效：补体、吞噬细胞、NK 细胞等', C.dna, C.dnaD],
    [470, 420, '早期诱导应答', '4–96 小时', '炎症级联与细胞因子动员：急性期反应、白细胞渗出', C.enz, C.enzD],
    [920, 380, '适应性应答', '96 小时后', 'T / B 淋巴细胞克隆扩增，特异性清除与记忆', C.pro, C.proD],
  ]
  phases.forEach(([x, w, name, time, desc, col, colD], i) => {
    b.rect(x, 180, w, 118, { fill: col, fillOp: 0.09, stroke: col, sw: 1.8, rx: 9 })
    b.ctext(x + w / 2, 206, name, { size: 15, weight: 700, fill: colD })
    b.ctext(x + w / 2, 230, time, { size: 12.5, weight: 700, fill: colD })
    b.wtext(x + 24, 254, desc, { size: 10.5, fill: C.sub, maxW: w - 48, lh: 15 })
    if (i < 2) b.arrow(x + w + 6, 236, x + w + 24, 236, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  })
  b.ctext(700, 340, '炎症是补体、吞噬与细胞因子协同的放大级联：血管反应与白细胞渗出是其形态学特征', { size: 12, weight: 600, fill: C.ink })

  // ============ 二、急性期反应与 CRP/SAA 曲线 ============
  b.panel(30, 388, 1340, 330, { title: '二、急性期反应：IL-6 驱动肝合成急性期蛋白，CRP 与 SAA 升幅最大' })

  const ax = 150, ay = 640, aw = 520, ah = 230
  b.axis(ax, ay, aw, ah, {
    xlabel: '感染 / 损伤后的时间',
    xticks: [[0.02, '0 h'], [0.27, '24 h'], [0.52, '48 h'], [0.77, '72 h'], [1, '96 h+']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  // y 轴标签手绘（原 axis 自动位置与「中」刻度重叠）
  b.ctext(92, 575, '血清急性期蛋白', { size: 15, weight: 600, fill: C.sub })
  // CRP
  b.curve(ax, ay, aw, ah, [
    [0.02, 0.03], [0.12, 0.06], [0.25, 0.35], [0.4, 0.72], [0.55, 0.92],
    [0.68, 0.9], [0.82, 0.66], [1, 0.45],
  ], { stroke: C.enz, sw: 3 })
  // SAA
  b.curve(ax, ay, aw, ah, [
    [0.02, 0.02], [0.15, 0.05], [0.3, 0.3], [0.45, 0.68], [0.6, 0.95],
    [0.75, 0.98], [0.88, 0.8], [1, 0.55],
  ], { stroke: C.acc, sw: 2.4, dash: '7 5' })
  b.legend(ax + 60, ay - ah + 24, [['CRP（C 反应蛋白）', C.enz], ['SAA（血清淀粉样蛋白 A）', C.acc]], { size: 11, gap: 18 })
  b.ctext(ax + 0.55 * aw, ay - 0.55 * ah, '升幅最大的两种急性期蛋白', { size: 10.5, weight: 700, fill: C.sub })

  // 右：IL-6 → 肝 → 急性期蛋白
  b.rect(730, 430, 580, 258, { fill: C.bg, stroke: C.line, sw: 1.5, rx: 9 })
  b.ctext(1020, 456, '急性期反应的通路', { size: 13.5, weight: 700, fill: C.ink })
  b.tag(1020, 492, '炎症灶：IL-6（核心驱动）', { fill: C.badL, stroke: C.bad, tfill: C.bad, size: 12, weight: 700, pad: 10 })
  b.arrow(1020, 512, 1020, 538, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.ctext(1080, 528, '经血行抵达肝脏', { size: 10.5, fill: C.mute })
  b.rect(830, 542, 380, 50, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.6, rx: 8 })
  b.ctext(1020, 564, '肝细胞大量合成急性期蛋白', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(1020, 584, 'CRP 与 SAA 升幅最大', { size: 10.5, fill: C.sub })
  b.arrow(1020, 596, 1020, 620, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.ctext(1020, 644, '释放入血：结合病原 / 损伤面 → 激活补体与调理吞噬', { size: 11, fill: C.sub })
  b.ctext(1020, 676, '血清 CRP 是感染与组织损伤的常用监测指标', { size: 10.5, fill: C.mute })

  // ============ 三、发热、营养免疫与交接 ============
  b.panel(30, 734, 1340, 244, { title: '三、发热与营养免疫：利于宿主的抗感染策略；向适应性免疫的交接' })

  b.rect(60, 774, 620, 182, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(80, 800, '适度发热与营养免疫', { size: 13.5, weight: 700, fill: '#92400e' })
  b.wtext(80, 824, '内源性致热原（IL-1 · IL-6 · TNF 等）作用于下丘脑，体温调定点上移——适度发热抑制病原、增强免疫细胞活性，有利于宿主。', { size: 11.5, fill: C.sub, maxW: 570, lh: 17 })
  b.tag(230, 912, '适度发热', { fill: C.bg, stroke: C.warn, tfill: '#92400e', size: 11.5, weight: 700, pad: 9 })
  b.tag(470, 912, '营养免疫：血清铁、锌下降', { fill: C.bg, stroke: C.warn, tfill: '#92400e', size: 11.5, weight: 700, pad: 9 })
  b.ctext(360, 940, '限制病原体获取必需营养', { size: 10.5, fill: C.mute })

  b.rect(710, 774, 610, 182, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(730, 800, '向适应性免疫的交接（定向与降阈）', { size: 13.5, weight: 700, fill: C.accD })
  const hand: Array<[string, string]> = [
    ['树突状细胞', '提呈抗原并上传共刺激分子'],
    ['细胞因子极化', '为应答方向「定型」'],
    ['C3d–CR2 协同', '降低 B 细胞活化阈值'],
  ]
  hand.forEach(([t, s], i) => {
    b.circle(750, 828 + i * 36, 3.5, { fill: C.acc })
    b.text(762, 832 + i * 36, t, { size: 12, weight: 700, fill: C.ink })
    b.text(762 + 124, 832 + i * 36, s, { size: 11, fill: C.sub })
  })
  b.wtext(730, 940, '固有免疫为适应性免疫定向并降低其活化阈值。', { size: 11, fill: C.mute, maxW: 560, lh: 15 })
}

export default scene({
  title: '急性期反应与固有免疫的时相：CRP/SAA 动态曲线与发热机制',
  subtitle: '固有免疫按即刻（0–4 小时）、早期诱导（4–96 小时）与适应性应答（96 小时后）三时相接力；急性期反应以 IL-6 驱动的肝脏急性期蛋白合成为核心，CRP 与 SAA 升幅最大；适度发热与血清铁、锌下降（营养免疫）均为有利于宿主的抗感染策略；经 DC 提呈与共刺激、细胞因子极化及 C3d-CR2 协同完成向适应性免疫的交接',
  draw,
})
