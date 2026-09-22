// xc ch3-s1 蛋白质的溶解度行为（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、盐溶与盐析 ============
  b.panel(30, 132, 660, 412, { title: '一、盐：从盐溶到盐析（Cohn 方程）' })
  b.axis(70, 460, 560, 250, {
    xlabel: '离子强度 I', ylabel: 'log S（溶解度对数）',
    title: '离子强度对溶解度：先升后降的钟形行为',
    xticks: [[0.05, '低盐'], [0.85, '高盐']],
  })
  b.curve(70, 460, 560, 250, [[0, 0.3], [0.08, 0.62], [0.18, 0.75], [0.3, 0.65], [0.45, 0.48], [0.65, 0.31], [0.85, 0.15], [1, 0.03]], { smooth: true, stroke: C.acc, sw: 3 })
  b.line(70 + 0.3 * 560, 460 - 0.65 * 250, 70 + 0.98 * 560, 460 - 0.04 * 250, { stroke: C.enz, sw: 2.2, dash: '7 5' })
  b.ctext(190, 232, '盐溶：屏蔽静电吸引、增进水化', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(470, 300, '盐析：盐离子优先水化、竞争水分子', { size: 10.5, weight: 700, fill: C.enzD })
  b.tag(475, 355, '盐析段：log S = β − Ks·I（半对数直线）', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 10 })
  b.wtext(60, 508, '硫酸铵「最盐析」且对多数蛋白构象温和、溶解度极高（4 °C 饱和约 4 M），是分级纯化与结晶实验沉淀剂的常客；盐析结晶与盐析沉淀的分界——晶形完整与絮状无序——肉眼可辨。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })

  // ============ 二、Hofmeister 序列 ============
  b.panel(710, 132, 660, 412, { title: '二、Hofmeister 序列（1888）与经典教学体系' })
  b.text(730, 198, '阴离子（盐析效力自左向右增强）：', { size: 10.5, weight: 700, fill: C.sub })
  const ani: Array<[string, number]> = [['SO_{4}^{2-}', 800], ['HPO_{4}^{2-}', 930], ['F^{-}', 1035], ['Cl^{-}', 1105], ['Br^{-}', 1175], ['I^{-}', 1245]]
  for (const [ion, x] of ani) b.tag(x, 224, ion, { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 9 })
  b.arrow(740, 256, 1330, 256, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(1035, 276, '盐析增强（枸橼酸根亦属强盐析端）', { size: 10, fill: C.dnaD })
  b.text(730, 312, '阳离子：NH_{4}^{+} 强于 K^{+}、Na^{+}、Mg^{2+}。', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(940, 348, '硫酸铵：4 °C 饱和约 4 M——最盐析且构象温和', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 10 })
  // 溶菌酶教学体系
  b.circle(830, 448, 60, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  const cry = (x: number, y: number, s: number) =>
    b.polygon([[x, y - s], [x + s * 0.7, y], [x, y + s], [x - s * 0.7, y]], { fill: '#d1fae5', stroke: C.ok, sw: 1.6 })
  cry(812, 430, 10); cry(852, 458, 12); cry(828, 482, 8); cry(798, 466, 7)
  b.ctext(830, 528, '悬滴中的溶菌酶晶体', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(920, 396, '教学经典：溶菌酶体系。0.1 M 乙酸钠缓冲液 pH 4.5 中，以 3–10% 氯化钠即可在数小时内把 20–30 mg/mL 的蛋清溶菌酶推入结晶区——一代代学生在这滴液里第一次看见棱角分明的蛋白晶体，也第一次分辨「结晶」与「絮状沉淀」的分界。', { size: 10.5, fill: C.sub, maxW: 420, lh: 14.5 })

  // ============ 三、pH 与等电点 ============
  b.panel(30, 558, 660, 412, { title: '三、pH 与等电点：最易沉出与最易沉坏仅一步之遥' })
  b.axis(70, 880, 560, 250, {
    xlabel: 'pH', ylabel: '溶解度',
    title: '溶解度通常在等电点 pI 附近最低',
    xticks: [[0.29, '4'], [0.5, 'pI'], [0.71, '10']],
  })
  b.line(70 + 0.5 * 560, 880, 70 + 0.5 * 560, 660, { stroke: C.bad, sw: 1.6, dash: '6 4' })
  b.curve(70, 880, 560, 250, [[0.07, 0.9], [0.2, 0.55], [0.36, 0.25], [0.43, 0.12], [0.5, 0.1], [0.57, 0.12], [0.64, 0.25], [0.8, 0.55], [0.93, 0.9]], { smooth: true, stroke: C.dna, sw: 3 })
  b.ctext(360, 695, '净电荷趋零、静电排斥最小', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(160, 700, '低 pH：净电荷为正', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(640, 700, '高 pH：净电荷为负', { size: 10.5, weight: 700, fill: C.accD })
  b.tag(350, 760, 'pI 附近聚集与变性风险也最高：常在两侧各一两个 pH 单位内扫描', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 10 })
  b.braceH(70 + 0.29 * 560, 918, 0.42 * 560, { label: '结晶筛选的 pH 维度通常覆盖 4–10' })
  b.wtext(60, 962, '温度：多数蛋白溶解度随温度降低而下降（低温结晶常用 4 或 16 °C；胰岛素等反向蛋白真实存在）；恒温纪律——培养箱漂移控制在正负 0.5 °C 内，昼夜几度漂移会让液滴反复溶解与再结晶。', { size: 10, fill: C.mute, maxW: 600, lh: 13 })

  // ============ 四、PEG 优先排阻与常用范围 ============
  b.panel(710, 558, 660, 412, { title: '四、PEG 的优先排阻与五因素常用范围' })
  b.ctext(360, 608, '优先排阻：PEG 被排除在蛋白水化层之外', { size: 12, weight: 700, fill: C.sub })
  b.circle(360, 720, 58, { fill: 'none', stroke: C.acc, sw: 1.8, dash: '6 4' })
  b.circle(360, 720, 42, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(360, 726, '蛋白', { size: 12, weight: 700, fill: C.proD })
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2
    b.circle(360 + 51 * Math.cos(a), 720 + 51 * Math.sin(a), 2.8, { fill: C.acc })
  }
  b.ctext(360, 800, '水化层（水分子）', { size: 10, weight: 700, fill: C.accD })
  const peg = (a: number) => {
    const cx = 360 + 92 * Math.cos(a), cy = 720 + 92 * Math.sin(a)
    let d = `M ${cx - 20},${cy}`
    for (let i = 0; i < 4; i++) d += ` q 5,-9 10,0 q 5,9 10,0`
    b.path(d, { stroke: C.warn, sw: 2.2 })
  }
  for (const a of [-2.4, -1.6, -0.8, -0.2, 0.5, 1.2, 2.0, 2.8, 3.6]) peg(a)
  b.arrow(360 + 118 * Math.cos(-1.9), 720 + 118 * Math.sin(-1.9), 360 + 64 * Math.cos(-1.9), 720 + 64 * Math.sin(-1.9), { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(190, 620, 'PEG 大分子', { size: 10.5, weight: 700, fill: C.warnD })
  b.tag(360, 850, '热力学上等价于提高蛋白的有效浓度——「从水里挤出来」', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 10 })
  b.tag(150, 892, 'PEG 400：黏度低、温和', { fill: C.panelB, stroke: C.line, size: 10, weight: 700, tfill: C.sub })
  b.tag(360, 892, 'PEG 3350/4000：筛选中坚', { fill: C.panelB, stroke: C.line, size: 10, weight: 700, tfill: C.sub })
  b.tag(572, 892, 'PEG 8000：排阻力强的「重锤」', { fill: C.panelB, stroke: C.line, size: 10, weight: 700, tfill: C.sub })
  b.table(730, 620, 600, {
    title: '五因素的常用范围',
    headers: ['因素', '作用机制', '常用范围'],
    colW: [140, 300, 160],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['硫酸铵', '高盐盐析，Cohn 方程', '0.5–3 M'],
      ['PEG 400–8000', '优先排阻，提高有效浓度', '5–40% w/v'],
      ['pH', '近 pI 溶解度最低', '4–10'],
      ['温度', '多数蛋白低温降溶', '4–22 °C'],
      ['有机溶剂', '降低介电常数', '5–30%'],
    ],
  })
  b.wtext(730, 862, '有机溶剂（乙醇、异丙醇、MPD）削弱电荷水化，须与低温配合、缓慢滴加；分子量越大，同浓度下排阻力越强。样品底线：SDS-PAGE 纯度大于 95%（大于 98% 更佳）；能否浓缩至 5–20 mg/mL 而不浑浊，是「可结晶性」的快速体检。', { size: 10.5, fill: C.sub, maxW: 616, lh: 14.5 })
}

export default scene({
  title: '蛋白质的溶解度行为：盐、pH、温度与 PEG',
  subtitle: '低盐盐溶、高盐盐析，盐析段 log S＝β−Ks·I；Hofmeister 阴离子以 SO_{4}^{2-} 最强（硫酸铵 4 °C 饱和约 4 M）；pI 附近溶解度最低；PEG 400–8000（5–40%）优先排阻；纯度大于 95% 为底线',
  draw,
})
