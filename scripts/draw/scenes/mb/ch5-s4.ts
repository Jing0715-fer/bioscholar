// mb ch5-s4 核酶与 RNA 编辑（39-b2 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两型自剪接内含子 ============
  b.panel(30, 132, 660, 300, { title: '一、两型自剪接内含子：亲核基团的差异' })
  // I 型
  b.text(60, 186, 'I 型内含子（四膜虫 26S rRNA 前体，Cech 1982）', { size: 12.5, weight: 700, fill: C.ink })
  b.line(60, 216, 380, 216, { stroke: C.rna, sw: 2.4 })
  b.rect(150, 208, 120, 16, { fill: C.panelB, stroke: C.faint, sw: 1.4 })
  b.ctext(210, 220, '内含子', { size: 9.5, fill: C.mute })
  b.tag(420, 186, '外源 G（GTP）', { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 7 })
  b.arrow(378, 196, 286, 210, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(230, 240, '3′-OH 攻击 5′ 剪接位点 → 线形内含子释放', { size: 10.5, fill: C.sub })
  b.wtext(60, 262, '无蛋白质条件即可自剪接；释放的内含子还可环化并具核酸酶活性；广泛分布于真菌线粒体、噬菌体与细菌。', { size: 10.5, fill: C.mute, maxW: 610, lh: 15 })
  b.line(60, 304, 640, 304, { stroke: C.line, sw: 1, dash: '4 5' })
  // II 型
  b.text(60, 330, 'II 型内含子：内部 A 作亲核基团', { size: 12.5, weight: 700, fill: C.ink })
  b.line(60, 360, 380, 360, { stroke: C.rna, sw: 2.4 })
  b.rect(150, 352, 120, 16, { fill: C.panelB, stroke: C.faint, sw: 1.4 })
  b.circle(240, 348, 6, { fill: C.bad })
  b.ctext(280, 336, '内部 A', { size: 10, weight: 700, fill: C.bad })
  b.path('M160,352 C 150,394 230,394 220,352', { stroke: C.rna, sw: 2, fill: 'none' })
  b.ctext(190, 410, '套索（lariat）', { size: 10.5, fill: C.rnaD })
  b.ctext(230, 384, '两步转酯', { size: 10.5, fill: C.sub })
  b.wtext(410, 336, '机制与剪接体完全平行——催化核心二级结构与 U2/U6 snRNA 同源，提示剪接体由 II 型内含子演化而来（snRNP 劫持假说）。常编码逆转录酶（maturase）协助折叠并促转座。', { size: 10.5, fill: C.sub, maxW: 262, lh: 15 })

  // ============ 二、核酶家族 ============
  b.panel(710, 132, 660, 300, { title: '二、核酶家族：RNA 兼具信息与催化（1989 诺奖）' })
  const ribos: [string, string][] = [
    ['RNase P', 'M1 RNA 为催化亚基、C5 蛋白仅稳定——首个天然反式作用 RNA 催化剂（Altman）；负责 tRNA 前体 5′ 端成熟'],
    ['锤头状核酶', '植物类病毒中最小核酶，约 30 nt 即可自切——人工核酶设计模板'],
    ['核糖体大亚基', '肽酰转移酶中心完全由 23S rRNA 构成——核糖体本质上是核酶'],
    ['端粒酶 RNA', '作为模板而非催化剂（严格说端粒酶不是核酶，但其 RNA 为功能必需组分）'],
  ]
  ribos.forEach(([t, s], i) => {
    const y = 184 + i * 56
    b.rect(730, y, 620, 46, { fill: i === 0 ? C.rnaL : C.panelB, stroke: i === 0 ? C.rna : C.line, sw: 1.4, rx: 7 })
    b.text(746, y + 19, t, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(746, y + 36, s, { size: 10, fill: C.sub, maxW: 588, lh: 13.5 })
  })
  b.text(730, 414, 'Cech 与 Altman 因核酶研究获 1989 年诺贝尔化学奖——支撑「RNA 世界」假说。', { size: 11.5, fill: C.mute })

  // ============ 三、RNA 编辑三类型 ============
  b.panel(30, 452, 700, 280, { title: '三、RNA 编辑：超出基因模板的信息' })
  b.table(60, 496, 640, {
    headers: ['类型', '机制', '典型例子'],
    colW: [140, 220, 280],
    rowH: 56,
    fontSize: 10.5,
    rows: [
      ['U 插入 / 删除', 'gRNA 指导，编辑体执行', '锥虫线粒体 mRNA（可编辑掉一半以上序列）'],
      ['C→U / U→C', '脱氨 / 氨基化', '载脂蛋白 B 肠型 CAA→UAA 提前终止；植物线粒体'],
      ['A→I', 'ADAR 作用于双链 RNA 脱氨', '脑 GluR-B mRNA 的 Q/R 位点（决定 Ca²⁺ 通透性）'],
    ],
  })
  b.wtext(60, 676, '「基因→蛋白质」的信息链并非严格一对一：编辑与剪接、修饰一道构成 RNA 层的「再编程」。', { size: 11.5, fill: C.mute, maxW: 640, lh: 16 })

  // ============ 四、锥虫 gRNA 编辑机制 ============
  b.panel(750, 452, 620, 280, { title: '四、锥虫线粒体：gRNA 指导的 U 插入' })
  // pre-mRNA
  b.text(770, 500, 'pre-mRNA（编辑前）', { size: 11, weight: 700, fill: C.sub })
  const seg1: [number, string][] = [[780, 'A'], [800, 'G'], [820, 'C']], seg2: [number, string][] = [[900, 'C'], [920, 'A'], [940, 'G']]
  seg1.forEach(([x, s]) => b.ctext(x, 516, s, { size: 11, weight: 700, fill: C.rnaD }))
  b.line(770, 522, 850, 522, { stroke: C.rna, sw: 2 })
  b.line(890, 522, 960, 522, { stroke: C.rna, sw: 2 })
  // gRNA
  b.text(990, 500, 'gRNA（微环编码）', { size: 11, weight: 700, fill: C.proD })
  b.line(790, 560, 950, 560, { stroke: C.pro, sw: 2 })
  seg1.forEach(([x, s], i) => b.ctext(x + 6, 560, { A: 'U', G: 'C', C: 'G' }[s] ?? s, { size: 10.5, weight: 700, fill: C.proD }))
  b.ctext(925, 544, '5′ 锚定区配对', { size: 9.5, fill: C.mute })
  b.wtext(770, 592, '编辑体（U 添加酶 / U 切除酶 + 连接酶）在错配区插入或删除 U，逐步向 3′ 推进。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  // 编辑后
  b.text(770, 636, '编辑后 mRNA：', { size: 11, weight: 700, fill: C.okD })
  b.line(880, 642, 1290, 642, { stroke: C.rna, sw: 2 })
  const seg3 = ['A', 'U', 'U', 'G', 'U', 'C', 'C', 'A', 'U', 'G']
  seg3.forEach((s, i) => b.ctext(895 + i * 40, 638, s, { size: 10.5, weight: 700, fill: i % 2 === 0 ? C.rnaD : C.bad }))
  b.tag(1010, 668, '插入的 U（红）', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: '#991b1b', pad: 6 })
  b.wtext(770, 700, '动基体基因组高度「缩水」，mRNA 依赖大规模编辑方能读通——编辑体系最极端的演化产物。', { size: 10.5, fill: C.mute, maxW: 580, lh: 15 })

  // ============ 五、A→I 编辑的扩展 ============
  b.panel(30, 752, 1340, 218, { title: '五、哺乳动物 ADAR 编辑：Alu 双链区的再编程' })
  const adar: [string, string][] = [
    ['发生场所', 'ADAR 主要作用于 Alu 反向重复形成的双链区'],
    ['读作变化', 'A→I 等于「A 读作 G」——影响剪接、稳定性与序列信息'],
    ['蛋白多样性', '显著扩展蛋白酶解多样性（如 5-HT₂C 受体亚型）'],
    ['受控设计', 'RNA 层的「再编程」是普遍且受控的生物学设计'],
  ]
  adar.forEach(([t, s], i) => {
    const x = 60 + (i % 2) * 650
    const y = 800 + Math.floor(i / 2) * 76
    b.rect(x, y, 620, 62, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
    b.text(x + 16, y + 26, t, { size: 13, weight: 700, fill: C.ink })
    b.wtext(x + 16, y + 46, s, { size: 11.5, fill: C.sub, maxW: 588, lh: 15 })
  })
}

export default scene({
  title: '核酶与 RNA 编辑',
  subtitle: 'I 型内含子用外源 G、II 型用内部 A 成套索（与剪接体同源）——RNase P 的 M1 RNA 与锤头状核酶证明 RNA 兼具信息与催化；锥虫 gRNA 指导 U 插入与 ADAR 的 A→I 编辑改写 mRNA 序列',
  draw,
})
