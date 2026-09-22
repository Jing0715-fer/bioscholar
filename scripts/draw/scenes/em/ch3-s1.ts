// em ch3-s1 振幅衬度与相位衬度（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两类衬度的物理图像 ============
  b.panel(30, 132, 1340, 280, { title: '一、两类衬度的物理图像' })
  b.tag(230, 182, '振幅衬度：散射得多就暗', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 13, weight: 700, pad: 10 })
  b.rect(230, 205, 10, 130, { fill: '#e2e8f0', stroke: C.sub, sw: 1.5 })
  b.rect(224, 242, 22, 42, { fill: C.bad, fillOp: 0.75 })
  b.line(80, 215, 500, 215, { stroke: C.acc, sw: 1.6 })
  b.line(80, 320, 500, 320, { stroke: C.acc, sw: 1.6 })
  b.line(80, 250, 230, 250, { stroke: C.warn, sw: 1.6 })
  b.line(230, 250, 350, 217, { stroke: C.warn, sw: 1.6 })
  b.line(80, 272, 230, 272, { stroke: C.warn, sw: 1.6 })
  b.line(230, 272, 350, 305, { stroke: C.warn, sw: 1.6 })
  b.rect(346, 205, 8, 35, { fill: C.ink })
  b.rect(346, 300, 8, 35, { fill: C.ink })
  b.circle(350, 217, 3.5, { fill: C.bad })
  b.circle(350, 305, 3.5, { fill: C.bad })
  b.ctext(350, 362, '物镜光阑', { size: 10.5, weight: 600, fill: C.sub })
  b.rect(508, 205, 10, 130, { fill: C.ok })
  b.rect(530, 205, 16, 130, { fill: '#e2e8f0' })
  b.rect(530, 242, 16, 42, { fill: C.ink })
  b.ctext(560, 240, '像强度', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(560, 262, '重区暗', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(60, 386, '散射角超过光阑半角的电子被挡掉——「质量×厚度」大的地方像上变暗；树脂切片中锇酸固定的膜结构呈深色同理。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })

  b.tag(1010, 182, '相位衬度：干涉出条纹', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 13, weight: 700, pad: 10 })
  ;[750, 770, 790, 810].forEach(x => b.line(x, 205, x, 335, { stroke: C.acc, sw: 1.3, dash: '6 4' }))
  b.ctext(780, 362, '平面波照明', { size: 10.5, fill: C.mute })
  b.rect(850, 205, 8, 130, { fill: '#e2e8f0', stroke: C.sub, sw: 1.5 })
  b.rect(843, 240, 22, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.2 })
  b.rect(843, 280, 22, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.2 })
  b.path('M 880,205 L 880,232 Q 899,249 880,262 L 880,272 Q 899,289 880,300 L 880,335', { stroke: C.dna, sw: 2.2 })
  b.ctext(935, 362, '出射波前（相位推移）', { size: 10.5, weight: 600, fill: C.dnaD })
  b.arrow(915, 270, 955, 270, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(960, 208, 175, 54, { fill: C.panelB, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(972, 230, '理想正焦：|ψ|^{2} ≡ 1', { size: 12, weight: 700, fill: C.badD })
  b.text(972, 250, '强度均匀——看不见', { size: 10.5, fill: C.sub })
  b.rect(1155, 216, 80, 38, { fill: '#cbd5e1' })
  b.rect(960, 284, 175, 54, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(972, 306, '离焦与像差：相位转译为强度', { size: 11.5, weight: 700, fill: C.dnaD })
  b.text(972, 326, '黑白条纹随 χ(g) 而变', { size: 10.5, fill: C.sub })
  b.rect(1155, 292, 80, 38, { fill: '#e2e8f0' })
  b.rect(1155, 297, 80, 7, { fill: C.ink, fillOp: 0.65 })
  b.rect(1155, 311, 80, 7, { fill: C.ink, fillOp: 0.65 })
  b.rect(1155, 325, 80, 7, { fill: C.ink, fillOp: 0.65 })
  b.wtext(730, 386, '离焦与像差本身是「缺陷」，却恰好充当了泽尼克相衬板的角色——下一节的 CTF 就是这台天然泽尼克板的频率响应曲线。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 二、质厚衬度与负染 ============
  b.panel(30, 432, 660, 280, { title: '二、质厚衬度与负染：借重元素造反差' })
  b.line(80, 500, 280, 500, { stroke: C.sub, sw: 2 })
  b.ellipse(180, 492, 54, 30, { fill: C.ink, fillOp: 0.82 })
  b.ellipse(180, 492, 40, 20, { fill: '#f8fafc', stroke: C.sub, sw: 1.4 })
  b.ctext(180, 548, '染壳（重金属，散射近全黑）', { size: 10.5, weight: 600, fill: C.sub })
  b.ctext(180, 566, '颗粒内部相对「透亮」', { size: 10, fill: C.mute })
  b.arrow(180, 580, 180, 604, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(70, 610, 220, 62, { fill: C.ink })
  b.ellipse(180, 641, 62, 18, { fill: '#e2e8f0' })
  b.ctext(180, 694, '负片式图像：亮颗粒嵌于暗背景', { size: 10.5, weight: 700, fill: C.badD })
  b.wtext(340, 486, '磷钨酸盐等重金属染液干燥后包裹颗粒：染壳散射极强、几乎全黑，未染的颗粒内部相对「透亮」——负染因此成为病毒与酶复合物筛查的第一道工序。', { size: 11, fill: C.sub, maxW: 310, lh: 16 })
  b.tag(500, 572, '分辨率被染料颗粒度限制在约 15–20 Å', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 8 })
  b.tag(500, 610, '可靠、直观、剂量效率高', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(340, 650, '强度账：散射角超过光阑半角的电子比例随质量厚度近乎指数增长——切片多切 20 nm，有时整张照片黑成一片。强反差与快速饱和是同一枚硬币的两面。', { size: 10.5, fill: C.sub, maxW: 310, lh: 15 })

  // ============ 三、相位物体：WPOA 与不可见悖论 ============
  b.panel(710, 432, 660, 280, { title: '三、相位物体：弱相位近似与不可见悖论' })
  b.tag(880, 482, 'ψ = exp(iφ) ≈ 1 + iφ', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 13, weight: 700, pad: 10 })
  b.tag(1180, 482, 'φ(x) = σ·V_{p}(x)·t', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 13, weight: 700, pad: 10 })
  b.wtext(730, 516, 'σ 在 200–300 kV 约 0.006–0.007 rad·V^{-1}·nm^{-1}，轻元素平均内电势约 5–10 V：10 nm 厚度积累约 0.35–0.7 rad 相位、50 nm 达 1.75–3.5 rad——弱相位近似对薄区严格、对厚区只是首项展开。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.tag(990, 586, '悖论：理想透镜 + 严格正焦，纯相位物体完全不可见（模方恒为 1）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11.5, weight: 700, pad: 9 })
  b.wtext(730, 616, '解法是干涉：让被散射的物波与未散射的参考波在像点叠加，相位差才能变成强度差——离焦量与像差正是「相对相位」的调节旋钮；光学同题的答案是泽尼克相衬板（1953 年诺贝尔物理学奖）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.tag(1010, 682, '冰包埋颗粒恰在 10–100 nm：相位物体的经典领地', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11.5, weight: 700, pad: 9 })

  // ============ 四、衬度配比与噪声地板 ============
  b.panel(30, 732, 1340, 240, { title: '四、生物样品的衬度配比与噪声地板' })
  b.table(50, 782, 840, {
    headers: ['样品状态', '主导衬度', '振幅分数 Q', '典型应用'],
    colW: [240, 210, 160, 230], rowH: 30, fontSize: 11.5,
    rows: [
      ['重金属负染', '振幅（质厚）', '大于 0.5', '病毒筛查'],
      ['树脂切片 + 锇酸固定', '振幅为主', '约 0.5', '超微结构形态学'],
      ['冷冻薄冰（10–100 nm）', '相位为主（约 70–90%）', '约 0.1–0.2', '高分辨结构解析'],
      ['冷冻厚冰（大于 100 nm）', '相位 + 多重散射', '上升', '断层扫描'],
    ],
  })
  b.wtext(920, 800, '泊松噪声：计数的相对涨落为 1/√N——一个区域只收到 100 个电子，其强度判读的相对误差就有 10%。', { size: 11, fill: C.sub, maxW: 400, lh: 16 })
  b.wtext(920, 850, '信噪比随剂量的平方根增长：剂量抬高信噪比却加速辐射损伤（第 4 章）；平均与三维重构把数千张同剂量图像叠加，信噪比按颗粒数的平方根上升。', { size: 11, fill: C.sub, maxW: 400, lh: 16 })
  b.wtext(920, 910, 'Q 并非常数：厚度增加、染料掺入、电压降低都会推高 Q；高电压与前向散射使 Q 下降。', { size: 11, fill: C.sub, maxW: 400, lh: 16 })
}

export default scene({
  title: '振幅衬度与相位衬度：两种成像语言',
  subtitle: '振幅衬度源于电子被散射出光阑（质厚衬度），相位衬度源于投影电位推移波前；WPOA：φ = σ·V_{p}·t，10 nm 约 0.35–0.7 rad；冷冻薄冰相位衬度约 70–90%、Q 约 0.1–0.2',
  draw,
})
