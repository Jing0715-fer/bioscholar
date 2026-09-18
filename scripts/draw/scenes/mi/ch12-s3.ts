// mi ch12-s3 环境微生物技术（39-f 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、活性污泥法 ============
  b.panel(30, 132, 1340, 250, { title: '一、活性污泥法：菌胶团吸附氧化 + 原生动物指示 + 污泥回流' })

  // 原水
  b.tag(120, 200, '原水（有机物）', { fill: C.warnL, stroke: C.warn, size: 11.5, weight: 700, tfill: C.ink, pad: 8 })
  b.arrow(190, 200, 250, 200, { stroke: C.sub, sw: 2.4, marker: 'mute' })
  // 曝气池
  b.rect(250, 165, 340, 110, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 2, rx: 8 })
  b.ctext(420, 188, '曝气池', { size: 12.5, weight: 700, fill: C.dnaD })
  // 菌胶团絮体
  const flocs: Array<[number, number, number]> = [[300, 220, 13], [350, 245, 16], [400, 225, 14], [450, 248, 18], [510, 228, 15], [545, 250, 12]]
  flocs.forEach(([x, y, r]) => {
    b.circle(x, y, r, { fill: C.dna, fillOp: 0.45, stroke: C.dnaD, sw: 1.2 })
    b.circle(x - 4, y - 3, 3, { fill: C.dnaD })
    b.circle(x + 4, y + 2, 3, { fill: C.dnaD })
    b.circle(x + 1, y - 5, 2.5, { fill: C.dnaD })
  })
  // 原生动物
  b.ellipse(320, 200, 9, 5, { fill: C.pro, stroke: C.proD, sw: 1 })
  b.ellipse(470, 205, 8, 4.5, { fill: C.pro, stroke: C.proD, sw: 1 })
  // 气泡
  for (let i = 0; i < 10; i++) b.circle(270 + i * 32, 165 + (i % 3) * 6, 3, { fill: C.ok, fillOp: 0.6 })
  b.ctext(420, 288, '菌胶团絮体吸附氧化有机物；原生动物指示水质', { size: 10, fill: C.mute })

  // 二沉池
  b.tag(700, 200, '二沉池', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 8 })
  b.path('M 748 165 L 812 250 L 684 250 Z', { fill: C.panelB, stroke: C.acc, sw: 1.8 })
  b.rect(684, 165, 128, 22, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.4 })
  b.arrow(660, 200, 682, 200, { stroke: C.sub, sw: 2.4, marker: 'mute' })
  b.arrow(812, 200, 860, 200, { stroke: C.sub, sw: 2.4, marker: 'mute' })
  b.tag(940, 200, '出水', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.ok, pad: 8 })
  // 回流污泥
  b.path('M 748 250 C 748 320, 420 320, 420 278', { stroke: C.dna, sw: 2.6, fill: 'none' })
  b.arrow(420, 286, 420, 278, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.ctext(584, 330, '回流污泥（维持污泥浓度）', { size: 10, weight: 700, fill: C.dnaD })
  // 剩余污泥
  b.arrow(748, 252, 748, 300, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.tag(790, 312, '剩余污泥', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 6 })

  // 右侧标注卡
  b.rect(1030, 160, 320, 132, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.4, rx: 9 })
  b.text(1050, 184, '污泥膨胀预警', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(1050, 208, 'SVI 持续超过 150 mL/g 提示丝状菌过度繁殖引发的污泥膨胀——絮体松散、沉降恶化。', { size: 10.5, fill: C.sub, maxW: 280, lh: 15 })
  b.wtext(1050, 262, '生物膜法以载体挂膜分层、耐冲击，与活性污泥法并列互补。', { size: 10, fill: C.mute, maxW: 280, lh: 14 })

  // ============ 二、A²/O 脱氮除磷 ============
  b.panel(30, 394, 660, 250, { title: '二、A²/O 工艺：厌氧-缺氧-好氧三区接力同步脱氮除磷' })

  const zones: Array<[number, string, string, string, string, string]> = [
    [60, '厌氧区', '释磷储 PHA', '聚磷菌释放磷、储存 PHA', C.pro, C.proL],
    [260, '缺氧区', '反硝化脱氮', '以有机物为供氢体把 NO₃⁻ 还原为 N₂', C.acc, C.accL],
    [460, '好氧区', '硝化 + 超量吸磷', '硝化细菌氧化氨；聚磷菌超量吸磷', C.ok, C.okL],
  ]
  zones.forEach(([x, t, s, d, c, cl]) => {
    b.rect(x, 438, 180, 96, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.8, rx: 8 })
    b.ctext(x + 90, 460, t, { size: 13, weight: 700, fill: C.ink })
    b.ctext(x + 90, 480, s, { size: 10.5, weight: 700, fill: c })
    b.wtext(x + 10, 498, d, { size: 9.5, fill: C.sub, maxW: 160, lh: 13 })
    if (x < 460) b.arrow(x + 180, 486, x + 200, 486, { stroke: C.sub, sw: 2.4, marker: 'mute' })
  })
  b.wtext(60, 566, '磷随剩余污泥排出实现闭环——「一泥两除」的工程智慧。', { size: 11, weight: 700, fill: C.ink })
  b.wtext(60, 596, '回流与分区把菌群各自安排在最适电子受体条件下，功能专一而互不干扰。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、厌氧消化 ============
  b.panel(710, 394, 660, 250, { title: '三、厌氧消化：三阶段互营接力与种间氢转移' })

  const stages: Array<[number, string, string, string]> = [
    [740, '① 水解发酵菌', '有机物 → 单糖 · 氨基酸 · 脂肪酸', C.dna],
    [940, '② 产氢产乙酸菌', '脂肪酸 → 乙酸 + H₂ + CO₂', C.warn],
    [1140, '③ 产甲烷古菌', '乙酸 / H₂+CO₂ → CH₄ + CO₂', C.pro],
  ]
  stages.forEach(([x, t, s, c]) => {
    b.tag(x + 70, 442, t, { fill: C.panelB, stroke: c, size: 11.5, weight: 700, tfill: c, pad: 8 })
    b.wtext(x + 10, 480, s, { size: 10, fill: C.sub, maxW: 160, lh: 14 })
  })
  b.arrow(880, 442, 936, 442, { stroke: C.sub, sw: 2.2, marker: 'mute' })
  b.arrow(1080, 442, 1136, 442, { stroke: C.sub, sw: 2.2, marker: 'mute' })
  // 种间氢转移
  b.path('M 1010 462 C 960 500, 1100 500, 1050 462', { stroke: C.enz, sw: 2, fill: 'none', marker: 'enz' })
  b.ctext(1030, 512, 'H₂ 种间氢转移', { size: 10, weight: 700, fill: C.enzD })
  b.wtext(730, 544, '种间氢转移维持低氢分压，使氧化脂肪酸这类热力学「上坡」反应得以进行——三菌群互营缺一不可。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(880, 590, '沼气：CH₄ 约 55%–70%（约 60%）+ CO₂ 约 30%–45%', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 8 })
  b.ctext(1150, 616, '中温约 35 ℃ 或高温约 55 ℃ 运行', { size: 10, fill: C.mute })

  // ============ 四、生物修复 · 湿法冶金 · MFC ============
  b.panel(30, 656, 1340, 324, { title: '四、生物修复、湿法冶金与微生物燃料电池' })

  // 生物修复
  b.rect(50, 700, 420, 200, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(70, 724, '生物修复（bioremediation）', { size: 13, weight: 700, fill: C.ok })
  b.wtext(70, 750, '1989 年埃克森·瓦尔迪兹号在阿拉斯加威廉王子湾泄漏数万吨原油：投加缓释氮磷营养盐（生物刺激，激发本土石油降解菌），增效经对照海滩科学评估确认——「以肥促菌、以菌吃油」确立循证地位。', { size: 10.5, fill: C.sub, maxW: 380, lh: 15 })
  b.wtext(70, 838, '共代谢降解多环芳烃与农药——微生物以另一种底物为碳源时顺手把污染物改头换面。', { size: 10.5, fill: C.sub, maxW: 380, lh: 15 })

  // 湿法冶金
  b.rect(490, 700, 420, 200, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.5, rx: 9 })
  b.text(510, 724, '微生物湿法冶金', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(510, 750, '嗜酸的氧化亚铁硫杆菌把 Fe²⁺ 氧化为 Fe³⁺ 并氧化还原性硫化物；Fe³⁺ 进而「间接」浸出黄铁矿、辉铜矿等硫化矿——浸出 · 萃取 · 电积三步收铜。', { size: 10.5, fill: C.sub, maxW: 380, lh: 15 })
  b.ctext(700, 870, '贡献全球约 15%–25% 的铜', { size: 12.5, weight: 700, fill: C.rnaD })

  // MFC
  b.rect(930, 700, 420, 200, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(950, 724, '微生物燃料电池（MFC）', { size: 13, weight: 700, fill: C.accD })
  b.wtext(950, 750, 'Geobacter 等以胞外电子传递把电子直接送至电极——耦合产电与废水处理；功率密度仍是产业化瓶颈。', { size: 10.5, fill: C.sub, maxW: 380, lh: 15 })
  // 小图：阳极室 + 阴极室
  b.rect(980, 830, 60, 44, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.4 })
  b.rect(1190, 830, 60, 44, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 1.4 })
  b.line(1040, 852, 1190, 852, { stroke: C.ink, sw: 1.6 })
  b.arrow(1115, 852, 1115, 826, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(1010, 890, '阳极（菌）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(1220, 890, '阴极', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(1115, 812, '外电路', { size: 9.5, fill: C.mute })

  b.wtext(50, 940, '环境微生物技术的共同语法：把自然界亿万年打磨的代谢能力，装进工程师设计的反应器与工艺分区里。', { size: 11.5, weight: 700, fill: C.ink })
}

export default scene({
  title: '环境微生物技术：活性污泥法、A²/O 与厌氧消化、生物修复',
  subtitle: '活性污泥法以菌胶团吸附氧化，SVI>150 mL/g 提示膨胀；A²/O 三区接力脱氮除磷；厌氧消化三阶段互营，沼气 CH₄ 约 55%–70%；湿法冶金供全球约 15%–25% 的铜',
  draw,
})
