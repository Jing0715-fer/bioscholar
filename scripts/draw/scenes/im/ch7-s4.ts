// im ch7-s4 补体的生物学效应：MAC 溶破 · 调理黏附 · 过敏毒素（39-g 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、MAC 组装与渗透性溶破 ============
  b.panel(30, 132, 1340, 300, { title: '一、细胞裂解：攻膜复合体（MAC）的组装与渗透性溶破' })

  b.text(60, 178, '末端通路逐级聚合', { size: 12, weight: 700, fill: C.ink })
  const asm: Array<[number, number, string, string]> = [
    [60, 90, 'C5b', '末端通路起点'],
    [176, 110, 'C5b-6', '与 C6 结合'],
    [312, 130, 'C5b-6-7', 'C7 暴露疏水区·锚入膜'],
    [468, 130, 'C5b-6-8', 'C8 结合并开孔'],
  ]
  asm.forEach(([x, w, t, s], i) => {
    b.rect(x, 190, w, 52, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.6, rx: 7 })
    b.ctext(x + w / 2, 212, t, { size: 12.5, weight: 700, fill: C.enzD })
    b.ctext(x + w / 2, 232, s, { size: 9, fill: C.mute })
    if (i < 3) b.arrow(x + w + 6, 216, x + w + 30, 216, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  })
  b.arrow(606, 216, 646, 216, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.rect(650, 184, 200, 64, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(750, 208, 'MAC = C5b-6-7-8-9n', { size: 13, weight: 700, fill: C.bad })
  b.ctext(750, 230, '多个 C9 与 C5b-8 结合并自身聚合', { size: 9.5, fill: C.sub })

  // 膜与孔道
  b.bilayer(90, 322, 560, { tint: C.bad, op: 0.45 })
  b.polygon([[360, 300], [374, 306], [380, 338], [374, 344], [360, 350], [352, 340], [348, 312]], { fill: C.bad, fillOp: 0.8, stroke: C.bad, sw: 1.6 })
  b.ctext(370, 286, '管状孔道：内径约 10 nm', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(90, 372, '水与离子循孔道内流 → 渗透性溶破。对革兰阴性菌尤其是奈瑟菌属最为敏感。', { size: 10.5, fill: C.sub, maxW: 540, lh: 15 })

  b.rect(860, 184, 480, 82, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(878, 208, 'C5–C9 终末成分缺陷', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(878, 228, '易反复发生重症脑膜炎奈瑟菌感染——MAC 是宿主控制奈瑟菌的关键武器。', { size: 10.5, fill: C.sub, maxW: 445, lh: 15 })

  b.rect(860, 278, 480, 122, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(878, 302, '依库珠单抗（抗 C5）：临床干预的落点', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(878, 324, '封锁 C5 裂解，同时阻断 C5a 生成与 MAC 组装；是 PNH 与非典型溶血尿毒综合征的治疗基石。', { size: 10.5, fill: C.sub, maxW: 445, lh: 15 })
  b.wtext(878, 364, '代价：MAC 通路被关停 → 用药前须接种脑膜炎奈瑟菌疫苗。', { size: 10.5, weight: 600, fill: C.bad, maxW: 445, lh: 15 })

  // ============ 二、C3b 的双重名片 ============
  b.panel(30, 450, 1340, 252, { title: '二、调理吞噬与免疫黏附：C3b/iC3b 的双重名片（借 CR1–CR4 介导）' })

  b.rect(60, 500, 620, 118, { fill: C.dnaL, fillOp: 0.35, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(76, 524, '名片一：调理素——「吃我」', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(76, 544, 'C3b / iC3b 沉积于靶颗粒表面 → 吞噬细胞 CR1、CR3、CR4 识别 → 内吞吞噬。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.rect(84, 566, 120, 38, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 6 })
  b.ctext(144, 590, '靶颗粒 + C3b', { size: 10.5, weight: 700, fill: C.dnaD })
  b.arrow(212, 585, 252, 585, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(256, 566, 150, 38, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 6 })
  b.ctext(331, 590, 'CR1/CR3/CR4', { size: 10.5, weight: 700, fill: C.dnaD })
  b.arrow(412, 585, 452, 585, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(456, 566, 130, 38, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 6 })
  b.ctext(521, 590, '调理吞噬', { size: 10.5, weight: 700, fill: C.dnaD })

  b.rect(60, 630, 620, 56, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(76, 652, '名片二：免疫黏附——「运走我」', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(76, 672, '免疫复合物结合 C3b → 红细胞 CR1 携带运输 → 肝脾单核-巨噬细胞系统清除。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })

  b.table(710, 500, 630, {
    headers: ['受体/CD', '主要配体', '主要分布', '核心功能'],
    colW: [130, 120, 185, 195],
    rowH: 32,
    fontSize: 10,
    rows: [
      ['CR1（CD35）', 'C3b、C4b', '红细胞、吞噬细胞、B 细胞、FDC', '免疫黏附清除 IC、调理'],
      ['CR2（CD21）', 'C3d、C3dg', 'B 细胞、FDC', 'B 细胞共受体、EB 病毒受体'],
      ['CR3', 'iC3b', '中性粒细胞、单核巨噬、NK', '调理吞噬、黏附与游走'],
      ['CR4', 'iC3b、C3dg', '单核巨噬、树突状细胞', '调理吞噬'],
    ],
  })
  b.text(710, 672, 'CR3 与 CR4 同属 β2 整合素，CD18 缺陷 → 白细胞黏附缺陷病。', { size: 10, weight: 600, fill: C.mute })

  // ============ 三、过敏毒素与趋化 ============
  b.panel(30, 716, 1340, 258, { title: '三、过敏毒素与趋化：C3a/C5a 的炎症效应（C5a 作用最强）' })

  b.rect(60, 770, 150, 136, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.8, rx: 9 })
  b.ctext(135, 826, '补体激活', { size: 13, weight: 700, fill: C.enzD })
  b.ctext(135, 848, 'C3 与 C5 裂解', { size: 10, fill: C.sub })

  b.arrow(214, 806, 260, 806, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.arrow(214, 870, 260, 870, { stroke: C.bad, sw: 2.2, marker: 'bad' })

  // C3a 通路
  b.rect(264, 776, 90, 40, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(309, 800, 'C3a', { size: 12.5, weight: 700, fill: C.rnaD })
  b.arrow(358, 796, 398, 796, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(402, 776, 170, 40, { fill: C.bg, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(487, 800, 'C3aR', { size: 11.5, weight: 700, fill: C.rnaD })
  b.arrow(576, 796, 616, 796, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.rect(620, 770, 380, 52, { fill: C.rnaL, fillOp: 0.3, stroke: C.rna, sw: 1.5, rx: 8 })
  b.wtext(636, 792, '肥大细胞等脱颗粒：血管通透性升高、平滑肌收缩——过敏毒素效应。', { size: 10.5, fill: C.sub, maxW: 350, lh: 15 })

  // C5a 通路
  b.rect(264, 850, 90, 40, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 7 })
  b.ctext(309, 874, 'C5a', { size: 12.5, weight: 700, fill: C.bad })
  b.arrow(358, 870, 398, 870, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(402, 844, 170, 52, { fill: C.bg, stroke: C.bad, sw: 1.5, rx: 7 })
  b.ctext(487, 864, 'C5aR（CD88）', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(487, 884, 'G 蛋白偶联受体', { size: 9, fill: C.mute })
  b.arrow(576, 870, 616, 870, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(620, 838, 380, 64, { fill: C.badL, fillOp: 0.3, stroke: C.bad, sw: 1.5, rx: 8 })
  b.wtext(636, 860, '作用最强的过敏毒素 + 中性粒细胞趋化因子：趋化、活化与黏附，将吞噬大军导向炎症灶。', { size: 10.5, fill: C.sub, maxW: 350, lh: 15 })

  b.rect(1030, 770, 310, 132, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(1048, 794, '炎症放大环', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(1048, 816, 'C5a 募集中性粒细胞 → 释放酶与活性氧 → 放大局部炎症：补体与固有免疫细胞协同的急性炎症引擎。', { size: 10.5, fill: C.sub, maxW: 276, lh: 16 })
  b.ctext(1185, 926, 'C3aR/C5aR 分布于肥大细胞、嗜酸性粒细胞、中性粒细胞与内皮细胞等', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '补体的生物学效应：MAC 溶破、C3b 调理黏附与 C3a/C5a 炎症效应',
  subtitle: 'MAC 即 C5b-6-7-8-9n，形成内径约 10 nm 的管状孔道经渗透性溶破裂解靶细胞，对奈瑟菌属最敏感，C5–C9 缺陷者反复重症脑膜炎奈瑟菌感染；C3b/iC3b 经 CR1、CR3、CR4 介导调理吞噬，红细胞借 CR1 运输免疫复合物至肝脾清除（免疫黏附）；C5a 为作用最强的过敏毒素与中性粒细胞趋化因子，经 C5aR（CD88）G 蛋白偶联受体发挥效应；依库珠单抗以抗 C5 封锁裂解、用药前须接种脑膜炎奈瑟菌疫苗',
  draw,
})
