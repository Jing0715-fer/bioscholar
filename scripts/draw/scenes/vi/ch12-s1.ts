// vi ch12-s1 实验室诊断（39-j 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、感染时间轴上的检测窗口 ============
  b.panel(30, 132, 660, 430, { title: '一、感染时间轴：两条主线的检出窗口' })
  b.legend(66, 196, [['病毒 RNA（核酸）', C.acc], ['抗原', C.warn], ['IgM', C.rna], ['IgG', C.dna]], { size: 10 })
  const ax = 70, ay = 440, aw = 560, ah = 210
  b.axis(ax, ay, aw, ah, {
    xticks: [[0, '0'], [0.25, '1'], [0.5, '2'], [0.75, '4'], [1, '8（周）']],
    yticks: [[0, '低'], [1, '高']], grid: true,
  })
  b.curve(ax, ay, aw, ah, [[0, 0.1], [0.08, 0.8], [0.18, 0.95], [0.35, 0.5], [0.55, 0.15], [0.75, 0.03], [1, 0.01]], { stroke: C.acc, sw: 2.6, smooth: true })
  b.curve(ax, ay, aw, ah, [[0.05, 0.05], [0.15, 0.5], [0.25, 0.72], [0.4, 0.35], [0.55, 0.1], [0.7, 0.02], [1, 0.01]], { stroke: C.warn, sw: 2.6, smooth: true })
  b.curve(ax, ay, aw, ah, [[0.15, 0.02], [0.3, 0.3], [0.45, 0.7], [0.6, 0.85], [0.75, 0.5], [0.9, 0.25], [1, 0.15]], { stroke: C.rna, sw: 2.6, smooth: true })
  b.curve(ax, ay, aw, ah, [[0.25, 0.02], [0.4, 0.15], [0.55, 0.45], [0.7, 0.7], [0.85, 0.8], [1, 0.85]], { stroke: C.dna, sw: 2.6, smooth: true })
  b.wtext(46, 480, '纵轴为相对检出水平。检出病毒成分（核酸、抗原、活病毒）与检出宿主应答（抗体）是两条主线——核酸与抗原的检出窗口早于血清学一至两周。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(46, 522, '急性期与恢复期双份血清的四倍升高，在 IgG 曲线上即两次采样之间的显著抬升。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、培养与 CPE 鉴定 ============
  b.panel(710, 132, 660, 430, { title: '二、细胞培养分离：以 CPE 为指纹' })
  b.rect(746, 216, 190, 150, { fill: '#ffffff', stroke: C.sub, sw: 2.2, rx: 10 })
  b.rect(796, 194, 90, 24, { fill: '#ffffff', stroke: C.sub, sw: 2.2, rx: 5 })
  for (let k = 0; k < 12; k++) {
    const cx = 758 + k * 14
    if (cx > 796 && cx < 886) continue
    b.cell(cx, 346, 6, 8, { stroke: C.ok })
  }
  b.circle(842, 342, 16, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(842, 386, '培养瓶：CPE 空斑区', { size: 10.5, weight: 700, fill: C.sub })
  // CPE 指纹小图
  const thumbs: [string, string][] = [['圆缩', '快速致病变'], ['葡萄串团聚', '成簇脱落'], ['合胞体', '融合病变'], ['血吸附', '红细胞吸附']]
  thumbs.forEach(([nm, s], i) => {
    const cx = 1000 + (i % 2) * 165, cy = 232 + Math.floor(i / 2) * 108
    b.rect(cx - 72, cy - 26, 144, 88, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
    if (i === 0) {
      b.circle(cx, cy + 8, 15, { fill: C.badL, stroke: C.bad, sw: 1.8 })
    } else if (i === 1) {
      b.circle(cx - 12, cy + 2, 11, { fill: C.badL, stroke: C.bad, sw: 1.6 })
      b.circle(cx + 10, cy, 11, { fill: C.badL, stroke: C.bad, sw: 1.6 })
      b.circle(cx, cy + 16, 11, { fill: C.badL, stroke: C.bad, sw: 1.6 })
    } else if (i === 2) {
      b.cell(cx, cy + 8, 44, 18, { stroke: C.bad })
      b.circle(cx - 20, cy + 4, 4, { fill: C.ink })
      b.circle(cx - 6, cy + 6, 4, { fill: C.ink })
      b.circle(cx + 8, cy + 4, 4, { fill: C.ink })
      b.circle(cx + 20, cy + 6, 4, { fill: C.ink })
    } else {
      b.cell(cx, cy + 8, 26, 14, { stroke: C.warn })
      for (let j = 0; j < 6; j++) b.circle(cx - 24 + j * 10, cy + (j % 2 ? -12 : 12) + 8, 4, { fill: C.badL, stroke: C.bad, sw: 1.2 })
    }
    b.ctext(cx, cy + 48, nm, { size: 10.5, weight: 700, fill: C.ink })
    b.ctext(cx, cy + 62, s, { size: 9, fill: C.mute })
  })
  b.wtext(726, 452, '离心小瓶培养把报告缩短至一至两日；诺如与丙肝病毒难以常规培养。1949 年 Enders、Weller 与 Robbins 以人胚组织培养增殖脊髓灰质炎病毒（1954 年诺贝尔奖），奠定诊断病毒学的培养体系。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、Ct 值判读与抗原快检 ============
  b.panel(30, 586, 660, 394, { title: '三、分子与快检：Ct 值的判读与灵敏换时效' })
  b.ctext(205, 640, 'Ct 值与病毒载量对数负相关', { size: 11, weight: 700, fill: C.ink })
  b.axis(70, 840, 270, 170, { xticks: [[0, '15'], [0.5, '25'], [1, '35']], yticks: [[0, '低'], [1, '高']], grid: false })
  b.curve(70, 840, 270, 170, [[0, 0.98], [0.25, 0.74], [0.5, 0.5], [0.75, 0.26], [1, 0.02]], { stroke: C.acc, sw: 2.6, smooth: true })
  b.ctext(205, 874, 'Ct 值', { size: 10.5, fill: C.sub })
  b.ctext(515, 640, '抗原快检：检出率随载量上升', { size: 11, weight: 700, fill: C.ink })
  b.axis(390, 840, 250, 170, { xticks: [[0, '低'], [1, '病毒载量 高']], yticks: [[0, '0'], [1, '检出率']], grid: false })
  b.curve(390, 840, 250, 170, [[0, 0.02], [0.2, 0.05], [0.35, 0.2], [0.5, 0.5], [0.65, 0.8], [0.8, 0.95], [1, 0.98]], { stroke: C.warn, sw: 2.6, smooth: true })
  b.wtext(50, 900, 'qPCR 的 Ct 值每 3.3 个循环约差一个数量级——但跨平台不可比，也不等于传染性。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 936, '抗原快检以灵敏度换时效：适用高载量筛查与连续检测（隔日重复可弥补低载量漏检）。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、血清学、中和与 mNGS ============
  b.panel(710, 586, 660, 394, { title: '四、中和试验、血凝抑制与 mNGS' })
  b.ctext(990, 640, '中和试验：血清倍比稀释与定量病毒孵育后接种细胞', { size: 11, weight: 700, fill: C.ink })
  const wells: [number, string, number][] = [[770, '1:4', 6], [880, '1:16', 12], [990, '1:64', 28], [1100, '1:256', 50], [1210, '1:1024', 90]]
  wells.forEach(([wx, lab, n], i) => {
    b.circle(wx, 716, 32, { fill: C.accL, stroke: C.acc, sw: 2 })
    for (let k = 0; k < Math.min(n, 30); k++) {
      const a = (k / Math.min(n, 30)) * Math.PI * 2 + i
      b.circle(wx + 20 * Math.cos(a), 716 + 20 * Math.sin(a), 3.6, { fill: '#ffffff', stroke: C.bad, sw: 1.3 })
    }
    b.ctext(wx, 766, lab, { size: 10.5, weight: 700, fill: C.sub })
  })
  b.tag(1100, 806, 'PRNT50：抑制 50% 蚀斑的最低稀释度', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 7 })
  b.arrow(1070, 786, 1070, 752, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(1300, 660, '蚀斑数随稀释递增', { size: 9.5, fill: C.mute })
  b.wtext(726, 852, '急性期与恢复期双份血清四倍升高是近期感染的回顾诊断金标准；IgM 提示近期感染但可交叉反应与迁延，IgG 亲和力试验区分原发与再感染；血凝抑制试验专用于流感。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 902, 'mNGS 以不预设病原的广谱覆盖服务培养阴性的疑难感染与新病原发现——常规检查阴性后的第二线手段。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '实验室诊断：两条主线、Ct 判读与中和定量',
  subtitle: '核酸与抗原窗口早于血清学一至两周；Ct 每 3.3 个循环约一个数量级、跨平台不可比；PRNT50 与双份血清四倍升高；mNGS 为培养阴性后的第二线',
  draw,
})
