// em ch12-s4 原位结构生物学与未来展望（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、原位链路四步 ============
  b.panel(30, 132, 660, 412, { title: '一、原位链路四步走：把分子放回细胞' })
  // 玻璃化细胞
  b.ellipse(130, 250, 54, 40, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.nucleusU(118, 244, 14, {})
  b.ctext(130, 316, '玻璃化冷冻', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(130, 332, '厚 5–10 μm 的细胞', { size: 9.5, fill: C.mute })
  b.arrow(196, 250, 246, 250, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  // lamella
  b.rect(252, 226, 120, 48, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.rect(292, 226, 30, 48, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.text(258, 216, 'Ga^{+} 30 kV', { size: 9, fill: C.accD })
  b.ctext(312, 296, 'FIB 铣薄', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(312, 312, 'lamella 100–300 nm', { size: 9.5, fill: C.mute })
  b.arrow(380, 250, 430, 250, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  // 冷冻断层
  b.rect(436, 218, 110, 64, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  for (let i = -2; i <= 2; i++) {
    const a = i * 0.5
    b.line(491 - 46 * Math.cos(a), 250 - 46 * Math.sin(a), 491 + 46 * Math.cos(a), 250 + 46 * Math.sin(a), { stroke: C.enz, sw: 1.4, opacity: 0.6 })
  }
  b.ctext(491, 304, '冷冻电子断层', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(491, 320, '剂量对称系列', { size: 9.5, fill: C.mute })
  b.arrow(556, 250, 606, 250, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  // STA
  b.ellipse(636, 250, 30, 24, { fill: C.dnaL, stroke: C.dna, sw: 2.4 })
  b.path('M 622,246 q 8,-9 16,-2 q 6,-7 12,1', { stroke: C.dnaD, sw: 2, fill: 'none' })
  b.ctext(636, 304, '子图平均', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(636, 320, '核糖体推进到 3–4 Å 级', { size: 9.5, fill: C.mute })
  b.wtext(50, 366, 'Mahamid 等 2016 年（Science）对 HeLa 细胞的冷冻断层是引路案例：核周细胞质里蛋白酶体等大分子机器的原位可视化首次成图。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(230, 428, '原位独有产出：翻译态多聚体组织', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 8 })
  b.tag(500, 428, '膜蛋白间距 · 核周浓度梯度', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 8 })
  b.ctext(360, 480, '结构相同、社会学不同——原位读的是分子在细胞里的生活方式', { size: 10, fill: C.mute })

  // ============ 二、体积电镜与连接组 ============
  b.panel(710, 132, 660, 412, { title: '二、体积电镜的并行爆发：从细胞到全脑' })
  // 尺度金字塔
  b.tag(830, 190, 'SBF-SEM：z 步长 10–50 nm，通量之最', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(1160, 190, 'FIB-SEM：4–10 nm 各向同性', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.ellipse(860, 300, 40, 32, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(860, 356, '细胞', { size: 10.5, weight: 700, fill: C.sub })
  b.ellipse(1030, 300, 58, 44, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(1030, 292, 30, 22, { fill: C.proL, stroke: C.pro, sw: 1.6 })
  b.ctext(1030, 368, '组织与器官', { size: 10.5, weight: 700, fill: C.sub })
  b.ellipse(1210, 300, 74, 52, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(1210, 376, '整脑（果蝇）', { size: 10.5, weight: 700, fill: C.sub })
  b.arrow(910, 300, 962, 300, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.arrow(1096, 300, 1124, 300, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.tag(1040, 428, '果蝇中央脑连接组：约 2.5 万神经元、两千万突触，约 8 nm 各向同性体素（Scheffer 等 2020）', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 10 })
  b.ctext(1040, 480, '整脑级数据集（Zheng 等 2018 年约 8 nm 体素口径）与连接组先后落地', { size: 10, fill: C.mute })

  // ============ 三、时间分辨 ============
  b.panel(30, 572, 660, 398, { title: '三、动态维度：时间分辨冷冻电镜' })
  // 混合-喷雾
  b.rect(60, 618, 200, 130, { fill: '#f8fafc', stroke: C.sub, sw: 1.8 })
  b.arrow(90, 660, 140, 680, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(90, 700, 140, 680, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.text(84, 650, '蛋白', { size: 9.5, fill: C.accD })
  b.text(84, 714, '底物', { size: 9.5, fill: C.enzD })
  b.ellipse(170, 680, 16, 12, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.arrow(196, 680, 230, 680, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(232, 662, 16, 36, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(160, 728, '混合-喷雾装置', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(160, 744, '捕集亚秒中间态', { size: 9.5, fill: C.mute })
  b.wtext(290, 630, '两条触发路线：混合-喷雾装置把反应物在毫秒内混合并喷射冻停；笼闭化合物以光解瞬间释放、光遗传触发毫秒级同步——时间戳由光而不是移液器给出。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  b.tag(400, 760, '与连续构象分析在「分子电影」处交汇', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.ctext(360, 812, '结构生物学从「看静态」走向「看过程」——第 8 章的异质性与本章的动态在此合流', { size: 10, fill: C.mute })
  b.ctext(360, 880, '时间分辨＋原位断层＋连续构象：同一部「分子电影」的三条摄制组', { size: 10, weight: 700, fill: C.ink })

  // ============ 四、未来四道题 ============
  b.panel(710, 572, 660, 398, { title: '四、未来十年的四道题与全书收束' })
  const q = [
    ['一', '原位普查的通量', '从一幅数月到每日成图——自动化与 STA 提速是关键'],
    ['二', '单分子结构的剂量极限', '约 20 e^{-}/Å^{2} 的 Henderson 账下，一颗 100 kDa 分子散射的电子数只比统计涨落多出数倍——相位板加 AI 组合是破题方向'],
    ['三', '多尺度整合', 'CLEM 配准把荧光定位与断层坐标缝合，跨尺度误差须持续压低'],
    ['四', '开放数据与培训生态', 'EMPIAR 存档、盲测复核、人才梯队——方法论的公共品'],
  ]
  q.forEach(([n, t, s], i) => {
    const y = 612 + i * 66
    b.circle(756, y, 15, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
    b.ctext(756, y + 5, n, { size: 10.5, weight: 700, fill: C.rnaD })
    b.text(786, y + 2, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(786, y + 22, s, { size: 9.5, fill: C.sub, maxW: 540, lh: 13 })
  })
  b.ctext(1040, 916, '全书收束：从看分子到看细胞、从看结构到看过程——问题在哪里，方法就在哪里', { size: 11, weight: 700, fill: C.ink })
}

export default scene({
  title: '原位结构生物学与未来展望：链路、动态与四道题',
  subtitle: '链路四步：玻璃化、FIB 铣薄 100–300 nm（Ga 离子 30 kV）、冷冻断层、子图平均——核糖体推进到 3–4 Å 级；果蝇连接组约 2.5 万神经元以约 8 nm 体素完成；混合-喷雾捕集亚秒中间态；未来四道题：通量、单分子剂量极限、多尺度整合、开放生态',
  draw,
})
