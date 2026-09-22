// em ch5-s3 冷冻固定与冷冻替代（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、高压冷冻横截面 ============
  b.panel(30, 132, 700, 300, { title: '一、高压冷冻（HPF）横截面：约 2100 bar 毫秒冻停' })
  b.rect(60, 178, 620, 196, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 6 })
  b.rect(84, 206, 44, 140, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  b.ctext(106, 366, '液氮冷面', { size: 9.5, fill: C.accD })
  b.rect(612, 206, 44, 140, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  b.ctext(634, 366, '液氮冷面', { size: 9.5, fill: C.accD })
  b.rect(132, 200, 476, 152, { fill: C.accL, fillOp: 0.35, stroke: C.acc, sw: 1.2, dash: '4 3', rx: 6 })
  b.tag(240, 216, '约 2100 bar', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10, weight: 700, pad: 7 })
  b.ctext(440, 224, '压媒：先在数十毫秒内加压，再让冷面两侧夹击骤冷', { size: 10.5, weight: 600, fill: C.accD })
  b.rect(330, 252, 100, 48, { fill: C.warnL, stroke: C.warn, sw: 2, rx: 4 })
  b.rect(352, 260, 56, 12, { fill: C.warn, fillOp: 0.6 })
  b.ctext(380, 288, '样品浅槽', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(380, 336, '直径约 2 mm、深 0.1–0.2 mm（铝杯或金杯）', { size: 9.5, fill: C.sub })
  b.arrow(130, 250, 182, 250, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(130, 302, 182, 302, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(610, 250, 558, 250, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(610, 302, 558, 302, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(230, 396, '有效冷冻深度约 100–200 μm（无可见冰晶判据）', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10.5, weight: 700, pad: 9 })
  b.tag(500, 396, '深度上限由热流决定：中心热量须传导出来', { fill: C.panelB, stroke: C.sub, tfill: C.sub, size: 10.5, pad: 9 })
  b.wtext(60, 421, '次序不可颠倒：先加压后骤冷，否则样品在常压下已先结冰（Moor 与 Riehle 1968 年原型一脉）。', { size: 9.5, fill: C.mute, maxW: 640, lh: 13 })

  // ============ 二、压力的物理账与三角权衡 ============
  b.panel(750, 132, 620, 300, { title: '二、压力的物理账与三角权衡' })
  b.axis(790, 330, 250, 132, {
    grid: false, title: '冰 I 熔化曲线（示意）',
    xticks: [[0, '0'], [1, '约 2100 bar']],
    yticks: [[1, '0 °C'], [0.27, '−22 °C'], [0, '−30 °C']],
  })
  b.curve(790, 330, 250, 132, [[0, 1], [0.2, 0.93], [0.4, 0.83], [0.6, 0.68], [0.8, 0.48], [1, 0.27]], { stroke: C.acc, sw: 2.6, smooth: true })
  b.circle(1040, 294, 4.5, { fill: C.warn })
  b.text(796, 254, '冰点压低至约 −22 °C', { size: 9.5, weight: 600, fill: C.accD })
  b.ctext(1032, 314, '2100 bar', { size: 9.5, weight: 700, fill: C.warnD })
  b.wtext(796, 372, '高压抑制成核与晶体生长、把结冰膨胀压回去——毫秒级完成「冻停」。', { size: 10, fill: C.sub, maxW: 240, lh: 14 })
  b.wtext(1066, 200, '约 2100 bar 把水的冰点压到约 −22 °C——液态水获得更宽的过冷区间；高压同时抑制水分子扩散，冰晶成核率与生长速率双双下降。', { size: 10.5, fill: C.sub, maxW: 280, lh: 16 })
  b.wtext(1066, 252, '玻璃化所需冷却速率因此放宽约两个数量级：可玻璃化深度从常压几微米跃升到约 200 μm。', { size: 10.5, fill: C.sub, maxW: 280, lh: 16 })
  b.text(1066, 300, '三角权衡：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(1175, 300, '压力换深度', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10, weight: 700, pad: 7 })
  b.tag(1265, 300, '速度换纯度', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10, weight: 700, pad: 7 })
  b.tag(1230, 326, '保护剂换冰晶风险', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10, weight: 700, pad: 7 })
  b.wtext(796, 398, '保护剂：甘油、蔗糖或海藻糖 5–20%，或 BSA、葡聚糖等无渗透活性填充剂——能不加就不加、必须加选胞内兼容者；压力打折或含水量极高时以 5–20% 补差额。', { size: 10, fill: C.sub, maxW: 560, lh: 14 })
  b.wtext(796, 426, '压力与保护剂可互兑：2100 bar 下小体积致密的原生样品常可零保护剂直冻。', { size: 9.5, fill: C.mute, maxW: 560, lh: 13 })

  // ============ 三、冷冻替代：数天时间表 ============
  b.panel(30, 456, 1340, 300, { title: '三、冷冻替代（FS）：把冰慢慢换成树脂的数天时间表' })
  const seg = (x: number, t: string, lines: string[], fill: string, stroke: string, tfill: string) => {
    b.rect(x, 506, 310, 148, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 155, 532, t, { size: 13, weight: 700, fill: tfill })
    lines.forEach((s, i) => b.ctext(x + 155, 560 + i * 21, s, { size: 10.5, fill: C.sub }))
  }
  seg(60, '① 置换主段 −90 °C', ['8–16 h', '丙酮（溶有四氧化锇与醋酸铀）', '置换冰、锇缓释；分子相对不动窝'], C.accL, C.acc, C.accD)
  seg(385, '② 升温一段 −90 至 −60 °C', ['约 5 °C/h', '锇与脂质的加成在 −70 至 −50 °C 发力', '醋酸铀随替代液同行'], C.rnaL, C.rna, C.rnaD)
  seg(710, '③ 升温二段 −60 至 −30 °C', ['过夜', '铀对蛋白与核酸低温补充固定'], C.dnaL, C.dna, C.dnaD)
  seg(1035, '④ 聚合段 −45 至 0 °C', ['24–48 h', 'Lowicryl 紫外聚合（约 −35 至 −45 °C）', '或环氧热聚合，全程不越过 0 °C'], C.proL, C.pro, C.proD)
  b.arrow(372, 580, 383, 580, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(697, 580, 708, 580, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(1022, 580, 1033, 580, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.tag(350, 682, 'Lowicryl（HM20、K4M）亲水低温树脂：抗原性保存显著优于 60 °C 热聚合的环氧', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 9 })
  b.wtext(700, 668, '玻璃化的块太脆且须全程低温，不能直接常规切片；数天时间表把「冻停的瞬态」低损伤地搬进树脂——每一步升温都以损伤最小为约束。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(60, 716, '对照研究一再显示：FS 对微管、突触囊泡等精细结构的保存明显优于常规化学固定——「先冻停、再慢慢换溶剂」胜过「泡固定剂等渗透」。', { size: 10.5, fill: C.sub, maxW: 1290, lh: 15 })

  // ============ 四、四条路线对照 ============
  b.panel(30, 766, 1340, 212, { title: '四、路线选择：四条固定与切片路线对照' })
  b.table(50, 798, 1300, {
    headers: ['路线', '固定方式', '关键条件', '优势', '典型用途'],
    colW: [150, 270, 270, 250, 360], rowH: 28, fontSize: 10.5,
    rows: [
      ['常规化学固定', '戊二醛加锇双固定', '室温', '便宜、可批量', '形态学、病理诊断'],
      ['HPF-FS', '高压冷冻加冷冻替代', '约 2100 bar，−90 °C 丙酮', '结构保存佳', '细胞组织超微结构'],
      ['CEMOVIS', 'HPF 后低温直接切片', '约 −160 °C，约 70 nm 切片', '最原生、无固定', '结构真实度研究'],
      ['Tokuyasu', '蔗糖嵌入冷冻切片', '约 2.3 M 蔗糖，约 −90 °C', '抗原性最好', '免疫金标记'],
    ],
  })
  b.wtext(50, 968, '一刚一柔：CEMOVIS 在约 −160 °C 切纯玻璃冰，硬而脆、须钻石刀与极慢切速，切面常带 crevasse 裂隙；Tokuyasu 的约 2.3 M 蔗糖以氢键网络束缚水，基质韧而不脆、切片可回温免疫标记。', { size: 10, fill: C.sub, maxW: 1290, lh: 13 })
}

export default scene({
  title: '冷冻固定与冷冻替代：高压冷冻到低温包埋',
  subtitle: 'HPF 约 2100 bar 把冰点压至约 −22 °C、毫秒冻停，有效深度约 100–200 μm；FS 以 −90 °C 丙酮（含锇与铀）置换、数天逐步升温至低温包埋',
  draw,
})
