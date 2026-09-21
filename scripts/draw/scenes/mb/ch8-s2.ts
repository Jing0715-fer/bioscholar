// mb ch8-s2 顺式作用元件：启动子、增强子与 LCR（39-c）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 上：增强子与 DNA 成环 ============
  b.panel(30, 132, 1340, 344, { title: '一、增强子：经 DNA 成环沟通远端启动子（距离/方向/位置均不敏感）' })
  const dy = 348 // DNA 基线
  b.line(60, dy, 1330, dy, { stroke: C.dna, sw: 3 })
  // 增强子
  b.rect(100, dy - 15, 140, 30, { fill: C.proL, stroke: C.pro, sw: 2, rx: 4 })
  b.ctext(170, dy + 5, '增强子', { size: 13.5, weight: 700, fill: C.proD })
  // DNA 成环（虚线弧）——先画弧，激活因子/Pol II 椭圆叠于其上（避免弧线穿字）
  b.path('M170,330 C 240,180 630,180 700,330', { stroke: C.pro, sw: 2.6, dash: '8 6' })
  b.ellipse(135, 285, 30, 17, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(135, 290, '激活', { size: 10.5, fill: C.proD })
  b.ellipse(205, 285, 30, 17, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(205, 290, '因子', { size: 10.5, fill: C.proD })
  b.ctext(435, 196, 'DNA 成环（cohesin 稳定；3C / Hi-C 已直接观测）', { size: 13, fill: C.proD })
  // Pol II + Mediator
  b.ellipse(700, 296, 68, 24, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(700, 302, 'Pol II + Mediator', { size: 12.5, weight: 600, fill: C.accD })
  // 近端元件 + TATA
  b.rect(440, dy - 13, 60, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 3 })
  b.ctext(470, dy + 4, 'GC盒', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(515, dy - 13, 70, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 3 })
  b.ctext(550, dy + 4, 'CAAT盒', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(640, dy - 13, 60, 26, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 3 })
  b.ctext(670, dy + 4, 'TATA', { size: 11, weight: 700, fill: C.accD })
  b.text(437, dy + 40, 'GC盒·Sp1', { size: 11, fill: C.mute })
  b.text(505, dy + 40, 'CAAT盒·NF-1', { size: 11, fill: C.mute })
  b.text(649, dy + 40, '核心启动子', { size: 11, fill: C.mute })
  b.ctext(510, dy + 65, '近端元件位于启动子上游 50–200 bp，其数量与组合决定基础表达强度', { size: 12, fill: C.sub })
  // 基因 body 与转录
  const exY = dy - 14
  b.rect(760, exY, 70, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 3 })
  b.rect(900, exY, 70, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 3 })
  b.rect(1030, exY, 80, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 3 })
  b.line(830, dy, 900, dy, { stroke: C.dna, sw: 3 })
  b.line(970, dy, 1030, dy, { stroke: C.dna, sw: 3 })
  b.ctext(960, dy + 40, '基因（外显子-内含子交替）', { size: 12, fill: C.mute })
  b.arrow(790, 322, 1250, 322, { stroke: C.rna, sw: 2.6, marker: 'rna' })
  b.ctext(1030, 308, '转录 →', { size: 12.5, fill: C.rnaD })
  // 三大特性标签
  b.tag(200, dy + 92, '距离不敏感：数 kb～数百 kb', { fill: C.proL, stroke: C.pro, size: 13, tfill: C.proD })
  b.tag(480, dy + 92, '方向不敏感：正/反向插入均有效', { fill: C.proL, stroke: C.pro, size: 13, tfill: C.proD })
  b.tag(760, dy + 92, '位置灵活：上游/下游/内含子均可', { fill: C.proL, stroke: C.pro, size: 13, tfill: C.proD })
  b.ctext(700, dy + 124, '增强子具组织/细胞特异性（如免疫球蛋白基因增强子仅在 B 细胞活化），常转录 eRNA；沉默子结合抑制性因子反向操作', { size: 12, fill: C.mute })

  // ============ 下左：β-珠蛋白 LCR ============
  b.panel(30, 492, 660, 458, { title: '二、β-珠蛋白基因簇 LCR：发育阶段的顺序开关' })
  const gy = 660 // 基因簇基线
  // LCR
  b.rect(70, gy - 30, 120, 60, { fill: C.okL, stroke: C.ok, sw: 2.2, rx: 6 })
  b.ctext(130, gy - 6, 'LCR', { size: 16, weight: 700, fill: C.ok })
  b.ctext(130, gy + 14, 'HS1–HS5', { size: 11, fill: C.ok })
  // 基因簇
  const gn: [string, number, number, string, string][] = [
    ['ε', 230, 60, C.warnL, '#b45309'],
    ['Gγ', 320, 60, C.proL, C.proD],
    ['Aγ', 410, 60, C.proL, C.proD],
    ['δ', 500, 60, C.panelB, C.sub],
    ['β', 580, 70, C.dnaL, C.dnaD],
  ]
  b.line(70, gy, 660, gy, { stroke: C.faint, sw: 1.4 })
  for (const [name, x, w, fill, stroke] of gn) {
    b.rect(x, gy - 22, w, 44, { fill, stroke, sw: 1.8, rx: 4 })
    b.ctext(x + w / 2, gy + 6, name, { size: 15, weight: 700, fill: stroke })
  }
  // LCR 成环「翻转」
  b.path('M160,628 C 200,560 240,560 258,634', { stroke: C.warn, sw: 2.2, dash: '6 5' })
  b.path('M160,628 C 250,535 370,535 375,634', { stroke: C.pro, sw: 2.2, dash: '6 5' })
  b.path('M160,628 C 280,505 560,505 612,634', { stroke: C.dna, sw: 2.2, dash: '6 5' })
  // 阶段标签置于基因下方（避开成环弧线）
  b.tag(260, 694, '胚胎：ε', { fill: C.warnL, stroke: '#b45309', size: 12, tfill: C.rnaD, pad: 8 })
  b.tag(395, 694, '胎儿：Gγ / Aγ', { fill: C.proL, stroke: C.pro, size: 12, tfill: C.proD, pad: 8 })
  b.tag(615, 694, '成人：β', { fill: C.dnaL, stroke: C.dna, size: 12, tfill: C.dnaD, pad: 8 })
  b.ctext(365, 720, 'LCR「翻转」与不同基因的成环连接，切换表达程序', { size: 12.5, fill: C.sub })
  // 注释块
  const notes = [
    '· LCR 以一簇 DNase I 高敏位点（HS1–HS5）为标志，位于 ε 基因上游 6–20 kb',
    '· 功能超越单个增强子：「染色质开放 + 增强 + 隔离」三位一体',
    '· LCR 病损 → β-地中海贫血表型（即使珠蛋白基因本身完好）',
    '· T 细胞受体等多个基因簇同样受 LCR 控制',
  ]
  notes.forEach((s, i) => b.text(56, 738 + i * 27, s, { size: 12.5, fill: C.sub }))
  b.ctext(360, 864, '胚胎 ε → 胎儿 γ → 成人 β：发育阶段顺序开关', { size: 14, weight: 700, fill: C.ink })

  // ============ 下右：绝缘子与调控语法 ============
  b.panel(710, 492, 660, 458, { title: '三、绝缘子、MAR 与真核基因的「调控语法」' })
  // 行1：增强子阻断
  const y1 = 570
  b.line(740, y1, 1330, y1, { stroke: C.dna, sw: 2.6 })
  b.rect(760, y1 - 13, 100, 26, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 3 })
  b.ctext(810, y1 + 5, '增强子', { size: 12, weight: 700, fill: C.proD })
  b.polygon([[960, y1 - 20], [978, y1], [960, y1 + 20], [942, y1]], { fill: C.warnL, stroke: '#b45309', sw: 2 })
  b.ctext(960, y1 + 40, 'CTCF 绝缘子', { size: 11.5, weight: 600, fill: C.rnaD })
  b.rect(1080, y1 - 13, 70, 26, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 3 })
  b.ctext(1115, y1 + 5, '启动子', { size: 12, weight: 700, fill: C.accD })
  b.line(905, y1 - 8, 935, y1 + 8, { stroke: C.bad, sw: 2.6 })
  b.line(935, y1 - 8, 905, y1 + 8, { stroke: C.bad, sw: 2.6 })
  b.ctext(1040, y1 - 32, '① 增强子阻断：越界信号被截停', { size: 12.5, fill: C.bad })
  // 行2：异染色质屏障
  const y2 = 668
  b.rect(760, y2 - 16, 180, 32, { fill: C.panelB, stroke: C.faint, sw: 1.4, rx: 3, dash: '3 3' })
  b.ctext(850, y2 + 5, '异染色质蔓延 →', { size: 12, fill: C.mute })
  for (let i = 0; i < 5; i++) b.line(776 + i * 34, y2 - 12, 790 + i * 34, y2 + 12, { stroke: C.faint, sw: 1.2 })
  b.rect(966, 644, 52, 48, { fill: C.warnL, stroke: '#b45309', sw: 2, rx: 4 })
  b.ctext(992, 671, '屏障', { size: 12, weight: 700, fill: C.rnaD })
  b.line(942, 660, 962, 676, { stroke: C.bad, sw: 2.6 })
  b.line(962, 660, 942, 676, { stroke: C.bad, sw: 2.6 })
  b.rect(1040, y2 - 16, 220, 32, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 3 })
  b.ctext(1150, y2 + 5, '常染色质基因区（受保护）', { size: 12, weight: 600, fill: C.ok })
  b.ctext(1040, y2 + 40, '② 屏障型绝缘子（BEAF 等屏障蛋白）阻挡异染色质蔓延', { size: 12, fill: C.sub })
  // 行3：MAR / 核基质
  const y3 = 760
  b.rect(760, y3 + 18, 560, 26, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 4 })
  b.ctext(1040, y3 + 36, '核基质', { size: 12.5, weight: 600, fill: C.sub })
  b.line(820, y3 - 12, 800, y3 + 18, { stroke: C.dna, sw: 2 })
  b.line(1040, y3 - 12, 1040, y3 + 18, { stroke: C.dna, sw: 2 })
  b.line(1250, y3 - 12, 1270, y3 + 18, { stroke: C.dna, sw: 2 })
  b.ctext(930, y3 - 20, 'MAR/SAR：染色质环锚定核基质，划定自主调控区', { size: 12.5, fill: C.sub })
  // 调控语法公式
  b.rect(740, 812, 600, 108, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 10, fillOp: 0.4 })
  b.ctext(1040, 842, '真核基因的「调控语法」', { size: 16, weight: 700, fill: C.ink })
  const gram = [
    ['LCR', '主开关'], ['增强子', '定强度'], ['绝缘子', '画边界'], ['启动子', '定起点'],
  ]
  gram.forEach(([k, v], i) => {
    const gx = 800 + i * 140
    b.tag(gx, 886, `${k}·${v}`, { fill: '#ffffff', stroke: C.ok, size: 13, weight: 600, tfill: C.ok, pad: 10 })
  })
}

export default scene({
  title: '顺式作用元件：启动子、增强子与 LCR',
  subtitle: '增强子经 DNA 成环远距沟通启动子——β-珠蛋白 LCR 的阶段开关与绝缘子的边界语法',
  draw,
})
