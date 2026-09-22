// sb ch5-s1 溶解度与结晶相图（Task 6-sb）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、结晶相图四区 ============
  b.panel(30, 132, 660, 430, { title: '一、结晶相图四区：液滴的地形图' })
  const x0 = 90, y0 = 480, w = 560, h = 300
  // 坐标轴
  b.line(x0, y0, x0 + w, y0, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(x0, y0, x0, y0 - h, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(x0 + w / 2, y0 + 26, '沉淀剂浓度（PEG / 盐）', { size: 11.5, weight: 600, fill: C.sub })
  b.ctext(x0 - 30, y0 - h / 2, '蛋白溶解度', { size: 11.5, weight: 600, fill: C.sub, rotate: -90 })
  // 溶解度曲线
  b.path(`M ${x0 + 20},${y0 - 26} Q ${x0 + 210},${y0 - 60} ${x0 + 330},${y0 - 105} Q ${x0 + 440},${y0 - 145} ${x0 + 500},${y0 - 205}`, { fill: 'none', stroke: C.dna, sw: 2.6 })
  b.ctext(x0 + 385, y0 - 175, '溶解度线', { size: 11, weight: 700, fill: C.dnaD })
  // 四区标注
  b.tag(x0 + 110, y0 - 130, '不饱和区（溶解）', { fill: C.panelB, stroke: C.line, size: 11, tfill: C.sub, pad: 9 })
  b.tag(x0 + 300, y0 - 60, '亚稳区（只长不生）', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(x0 + 420, y0 - 130, '成核区', { fill: C.warnL, stroke: C.warn, size: 11.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.tag(x0 + 500, y0 - 240, '沉淀区（无序聚集）', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.badD, pad: 9 })
  // 蒸气扩散轨迹
  b.path(`M ${x0 + 60},${y0 - 210} Q ${x0 + 240},${y0 - 190} ${x0 + 350},${y0 - 95}`, { fill: 'none', stroke: C.acc, sw: 2.4, dash: '8 5', marker: 'acc' })
  b.ctext(x0 + 130, y0 - 232, '悬滴轨迹：从低过饱和走向平衡', { size: 10.5, weight: 700, fill: C.accD })
  b.circle(x0 + 350, y0 - 95, 5, { fill: C.acc, stroke: 'none' })
  b.ctext(x0 + 360, y0 - 84, '终点：回到溶解度线附近缓慢生长', { size: 10, fill: C.sub })
  b.wtext(60, 176, '蛋白溶解度随盐浓度先升后降（盐溶到盐析）；Cohn 方程 log S = β − Ks·I 刻画盐析段直线。过饱和度 S = c/c* 是相图的垂直驱动力：成核区自发成核，亚稳区只允许已有晶体生长——晶种技术的全部原理。', { size: 11, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、Cohn 方程与 Hofmeister 序列 ============
  b.panel(710, 132, 660, 200, { title: '二、Cohn 方程与 Hofmeister 序列' })
  b.tag(760, 190, 'log S = β − K_{s}·I', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 12 })
  b.text(760, 224, 'S 为溶解度，I 为离子强度，K_{s} 为盐析斜率（盐种特异）。', { size: 10.5, fill: C.sub })
  b.text(760, 252, 'Hofmeister 析出能力：', { size: 11, weight: 700, fill: C.ink })
  b.wtext(760, 272, '阴离子 SO_{4}^{2−} > HPO_{4}^{2−} > F^{−} > Cl^{−} > Br^{−} > I^{−}；阳离子 NH_{4}^{+} > K^{+} > Na^{+} > Mg^{2+}。硫酸铵以最强的 K_{s} 成为经典结晶盐。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.ctext(1040, 316, 'PEG 走的是另一条路：优先排阻使蛋白有效浓度升高（体积排阻效应）', { size: 10.5, fill: C.mute })

  // ============ 三、影响溶解度的四维 ============
  b.panel(710, 352, 660, 210, { title: '三、溶解度的四个旋钮' })
  b.table(730, 392, 620, {
    headers: ['旋钮', '规律', '结晶学的用法'],
    colW: [110, 260, 250],
    rowH: 40,
    fontSize: 11,
    rows: [
      ['盐浓度', '低盐盐溶、高盐盐析（Cohn 线性）', '梯度优化沉淀剂浓度'],
      ['pH', '近 pI 净电荷小、溶解度最低', '近 pI 微调促结晶，但防不可逆沉淀'],
      ['温度', '多数蛋白低温降溶（少数反向如胰岛素）', '温度梯度结晶与两温筛选'],
      ['沉淀剂', 'PEG 排阻、有机溶剂降介电', '稀疏矩阵筛选的首要变量'],
    ],
  })
  b.wtext(730, 548, '四个旋钮正交组合构成「结晶空间」：稀疏矩阵筛选（Jancarik 与 Kim 1991 年 48 条件）就是对这片空间的高效抽样。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、底部收束 ============
  b.panel(30, 582, 1340, 380, { title: '四、从相图读懂结晶实验' })
  // 悬滴示意
  b.rect(70, 640, 240, 140, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(190, 660, '悬滴蒸气扩散', { size: 12, weight: 700, fill: C.ink })
  b.wtext(84, 684, '液滴（蛋白＋沉淀剂）与池液存在蒸汽压差，水分自液滴迁移至池液，液滴被缓慢浓缩——在相图上沿轨迹爬升，穿过成核区获得晶核，回落亚稳区长成晶体。', { size: 10.5, fill: C.sub, maxW: 212, lh: 15 })
  b.arrow(320, 700, 360, 700, { stroke: C.acc, sw: 2, marker: 'acc' })
  // 相图与时间
  b.rect(370, 640, 280, 140, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 8 })
  b.ctext(510, 660, '时间维度上的两幕剧', { size: 12, weight: 700, fill: C.okD })
  b.wtext(384, 684, '第一幕（小时级）：水汽交换把液滴推入过饱和。第二幕（天级）：晶核消耗溶质，浓度沿溶解度线缓降，晶体在亚稳区按台阶机制生长至平衡。动力学快慢由扩散与表面反应共同限制。', { size: 10.5, fill: C.sub, maxW: 252, lh: 15 })
  b.arrow(660, 700, 700, 700, { stroke: C.acc, sw: 2, marker: 'acc' })
  // 数值锚点
  b.rect(710, 640, 630, 140, { fill: C.enzL, stroke: C.enz, sw: 1.5, rx: 8 })
  b.ctext(1025, 660, '教材级数值锚点', { size: 12, weight: 700, fill: C.enzD })
  b.wtext(724, 684, '临界过饱和是成核区与亚稳区的边界；成核速率 ~ exp(−ΔG*/kT) 对过饱和度指数敏感——过饱和度提高 1 倍可把成核率推高数个量级，这正是「成核易过头、生长嫌不足」的数学根源，也是晶种稀释串接（microseeding 10^{−1} 至 10^{−8}）能够精确控制核数的物理基础。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.ctext(700, 820, '读图即读实验：每块结晶板都是一部行进中的相图——见第 5 章第 2、3 节的成核动力学与实验方法', { size: 11, weight: 600, fill: C.mute })
}

export default scene({
  title: '溶解度与结晶相图：四区、Cohn 方素与蒸气扩散轨迹',
  subtitle: '相图四区（不饱和/亚稳/成核/沉淀）；log S = β − K_{s}·I；Hofmeister 序列硫酸铵最强；悬滴沿蒸汽压差爬升过饱和、回落溶解度线生长——成核要快、生长要慢的两幕剧',
  draw,
})
