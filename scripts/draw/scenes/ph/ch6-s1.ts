// ph ch6-s1 血液与血浆：离心分层·蛋白分工·渗透压
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、抗凝全血离心：三层分布 ============
  b.panel(30, 132, 420, 440, { title: '一、抗凝全血离心：三层分布' })
  b.tag(230, 178, '抗凝全血 + 离心', { fill: C.panelB, stroke: C.sub, tfill: C.ink, size: 11, weight: 700, pad: 8 })
  b.rect(172, 198, 116, 174, { fill: '#fef3c7' })
  b.rect(172, 372, 116, 10, { fill: '#f1f5f9', stroke: C.line, sw: 1 })
  b.rect(172, 382, 116, 132, { fill: '#fecaca' })
  for (let y = 396; y <= 506; y += 16) {
    for (let x = 184; x <= 272; x += 17) {
      b.circle(x, y, 3.5, { fill: C.bad, fillOp: 0.45 })
    }
  }
  b.rect(170, 196, 120, 320, { fill: 'none', stroke: C.sub, sw: 2.2, rx: 12 })
  b.brace(162, 200, 370, '血浆 55%', { side: 'left', fill: C.warnD, size: 12 })
  b.brace(162, 374, 382, '白膜层 <1%', { side: 'left', fill: C.sub, size: 10 })
  b.brace(162, 384, 514, '红细胞 45%', { side: 'left', fill: C.badD, size: 12 })
  b.text(300, 240, '血细胞比容 Hct', { size: 11, weight: 700, fill: C.ink })
  b.text(310, 262, '男 40–50%', { size: 10.5, weight: 600, fill: C.badD })
  b.text(310, 280, '女 37–48%', { size: 10.5, weight: 600, fill: C.badD })
  b.wtext(300, 316, '血清 = 自然凝固后的上清（纤维蛋白原已被消耗）；血浆含全部凝血因子', { size: 10, fill: C.sub, maxW: 135, lh: 15 })
  b.wtext(300, 380, '全血占体重 7–8%（成人约 4–5 L），一半滞留肝脾与皮下静脉待命', { size: 10, fill: C.sub, maxW: 135, lh: 15 })
  b.wtext(300, 432, '性别差异：雄激素促红系生成 vs 月经失血', { size: 10, fill: C.mute, maxW: 135, lh: 15 })
  b.wtext(50, 548, '白膜层为白细胞与血小板（不足 1%）；淡黄色血浆为液态细胞外基质，纤维蛋白原是其「潜在纤维」', { size: 10, fill: C.mute, maxW: 380, lh: 15 })

  // ============ 二、血浆成分与血浆蛋白的功能分工 ============
  b.panel(470, 132, 900, 440, { title: '二、血浆成分与血浆蛋白的功能分工' })
  b.text(490, 196, '血浆成分（重量比）', { size: 12, weight: 700, fill: C.ink })
  b.rect(490, 210, 252, 34, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.rect(742, 210, 20, 34, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.rect(762, 210, 9, 34, { fill: C.okL, stroke: C.ok, sw: 1.5 })
  b.ctext(616, 232, '水 90–92%', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(490, 265, 13, 13, { fill: C.acc })
  b.text(510, 276, '水 90–92%', { size: 10, fill: C.sub })
  b.rect(490, 289, 13, 13, { fill: C.rna })
  b.text(510, 300, '蛋白质 6–8 g/dL（约 7%）', { size: 10, fill: C.sub })
  b.rect(490, 313, 13, 13, { fill: C.ok })
  b.text(510, 324, '电解质·营养物·气体·代谢物（约 3%）', { size: 10, fill: C.sub })
  b.wtext(490, 358, 'A/G ≈ 1.5–2.5——肝脏合成功能与免疫状态的双重读数', { size: 10, fill: C.sub, maxW: 280, lh: 15 })
  b.wtext(490, 384, '白蛋白半衰期约 20 天：慢性肝合成功能的稳定指标', { size: 10, fill: C.sub, maxW: 280, lh: 15 })
  b.wtext(490, 410, '除 γ 球蛋白（浆细胞产生）外，血浆蛋白几乎全由肝细胞合成', { size: 10, fill: C.sub, maxW: 280, lh: 15 })
  b.wtext(490, 436, '血浆 pH 7.35–7.45；粘度约为水的 1.6 倍（全血 3–4 倍）', { size: 10, fill: C.sub, maxW: 280, lh: 15 })
  b.table(800, 210, 550, {
    title: '血浆蛋白三兄弟（按电泳迁移率分类）',
    headers: ['血浆蛋白', '含量 g/dL', '合成部位', '核心功能'],
    colW: [100, 105, 95, 250], rowH: 46, fontSize: 10.5,
    rows: [
      ['白蛋白', '3.5–5.0', '肝', '胶体渗透压（75–80%）· 载体运输'],
      ['α/β 球蛋白', '1–1.5', '肝', '金属与脂蛋白转运 · 急性期反应'],
      ['γ 球蛋白', '1–1.5', '浆细胞', '免疫球蛋白（适应性免疫）'],
      ['纤维蛋白原', '0.2–0.4', '肝', '凝血底物 → 纤维蛋白网'],
    ],
  })
  b.wtext(800, 470, 'ESR（男 <15 · 女 <20 mm/h）：纤维蛋白原 / 免疫球蛋白等不对称蛋白增多 → 红细胞叠连（缗钱串）→ 沉降加速；白蛋白相反减慢——炎症敏感的非特异「温度计」', { size: 10, fill: C.sub, maxW: 540, lh: 15 })
  b.wtext(800, 512, '急性期反应：肝合成产能转向 CRP 与纤维蛋白原（ESR 加快的上游），白蛋白与转铁蛋白一时下调', { size: 10, fill: C.mute, maxW: 540, lh: 15 })

  // ============ 三、晶体渗透压 vs 胶体渗透压与 Starling 力 ============
  b.panel(30, 592, 1340, 390, { title: '三、晶体渗透压 vs 胶体渗透压：分工与 Starling 力' })
  // —— ① 通透性差异 ——
  b.text(50, 644, '① 通透性差异：谁在决定水的去向', { size: 12.5, weight: 700, fill: C.ink })
  b.bilayer(70, 694, 370, { tint: C.dna })
  b.bilayer(70, 754, 370, { tint: C.dna })
  b.text(50, 682, '组织液', { size: 10.5, fill: C.mute })
  b.text(50, 736, '血浆', { size: 11, weight: 700, fill: C.sub })
  b.text(50, 790, '组织液', { size: 10.5, fill: C.mute })
  b.ctext(255, 660, '毛细血管壁', { size: 10, weight: 600, fill: C.sub })
  b.circle(170, 730, 11, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.circle(300, 730, 11, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.circle(420, 730, 11, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  for (const [x, y] of [[130, 722], [210, 740], [255, 718], [350, 740], [395, 720]] as [number, number][]) {
    b.circle(x, y, 3, { fill: C.acc })
  }
  for (const [x, y] of [[120, 680], [200, 678], [340, 678], [425, 680]] as [number, number][]) {
    b.circle(x, y, 3, { fill: C.acc })
  }
  for (const [x, y] of [[150, 782], [250, 784], [330, 782]] as [number, number][]) {
    b.circle(x, y, 3, { fill: C.acc })
  }
  b.arrow(230, 664, 230, 716, { stroke: C.acc, sw: 1.5, marker: 'acc', markerStart: 'acc' })
  b.text(238, 676, '晶体自由通透', { size: 9.5, weight: 600, fill: C.accD })
  b.arrow(370, 744, 370, 800, { stroke: C.acc, sw: 1.5, marker: 'acc', markerStart: 'acc' })
  b.text(378, 790, '双向抵消', { size: 9.5, weight: 600, fill: C.accD })
  b.ctext(150, 812, '晶体（自由通透）', { size: 10, weight: 700, fill: C.accD })
  b.line(150, 802, 150, 788, { stroke: C.acc, sw: 1, dash: '3 3' })
  b.ctext(295, 812, '蛋白（不能通透）', { size: 10, weight: 700, fill: C.proD })
  b.line(295, 800, 300, 744, { stroke: C.pro, sw: 1, dash: '3 3' })
  b.wtext(50, 836, '晶体渗透压两侧互相抵消——对血管内外水分布「无效」；蛋白不能通透——血浆独有的「吸水筹码」', { size: 10, fill: C.sub, maxW: 400, lh: 15 })
  // —— ② Starling 力 ——
  b.text(520, 644, '② Starling 力：滤过与重吸收', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(540, 700, 320, 46, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 23 })
  for (const [x, y] of [[560, 724], [640, 722], [700, 724], [760, 722], [825, 723]] as [number, number][]) {
    b.circle(x, y, 5, { fill: C.pro })
  }
  b.ctext(600, 729, '动脉端', { size: 10, weight: 700, fill: C.sub })
  b.ctext(795, 729, '静脉端', { size: 10, weight: 700, fill: C.sub })
  b.arrow(600, 698, 600, 676, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(625, 752, 625, 786, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(790, 674, 790, 696, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.arrow(810, 786, 810, 752, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.wtext(540, 656, '动脉端：静水压 30–35 mmHg > 胶渗压 25 → 滤出', { size: 10, fill: C.sub, maxW: 160, lh: 14 })
  b.wtext(700, 656, '静脉端：静水压 10–15 < 25 → 重吸收', { size: 10, fill: C.sub, maxW: 160, lh: 14 })
  b.wtext(520, 820, '滤过略大于重吸收 → 余额经淋巴回收：每日约 2–4 L 组织液连同少量蛋白返血', { size: 10, fill: C.sub, maxW: 350, lh: 15 })
  // —— ③ 数值对比 ——
  b.text(940, 644, '③ 数值悬殊，分工井然', { size: 12.5, weight: 700, fill: C.ink })
  b.line(960, 800, 1330, 800, { stroke: C.sub, sw: 1.6 })
  b.rect(985, 680, 90, 120, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(1030, 664, '约 300 mOsm/L', { size: 11, weight: 700, fill: C.accD })
  b.rect(1160, 788, 90, 12, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(1205, 772, '约 25 mmHg（1.3 mOsm）', { size: 11, weight: 700, fill: C.rnaD })
  b.ctext(1118, 745, 'vs', { size: 12, weight: 700, fill: C.mute })
  b.ctext(1030, 826, '晶体渗透压', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(1030, 846, 'Na^{+}·Cl^{-} 为主体', { size: 10, fill: C.mute })
  b.ctext(1205, 826, '胶体渗透压', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(1205, 846, '血浆蛋白贡献', { size: 10, fill: C.mute })
  b.wtext(960, 878, '白蛋白贡献胶渗压的 75–80%：血浆白蛋白降至约 25 g/L 以下 → 水肿（营养不良性·肝源性·肾病性）', { size: 10, fill: C.sub, maxW: 380, lh: 15 })
  b.wtext(50, 928, '等渗输液：0.9% NaCl 与 5% 葡萄糖为等渗液；红细胞置低渗液 → 水内流膨胀乃至溶血（溶血性输血反应的物理内核）；蛋白阴离子循 Gibbs-Donnan 平衡再添一分胶渗压', { size: 10, fill: C.mute, maxW: 1290, lh: 15 })
}

export default scene({
  title: '血液组成与血浆：分层、蛋白分工与渗透压',
  subtitle: '离心分三层：血浆 55%、白膜层不足 1%、红细胞 45%（比容男 40–50%、女 37–48%）；晶体渗透压约 300 mOsm 两侧抵消，胶体渗透压约 25 mmHg 经 Starling 力决定血管内外水平衡',
  draw,
})
