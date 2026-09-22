// xc ch10-s1 精修的数学基础：目标函数与先验（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、目标函数构成 ============
  b.panel(30, 132, 660, 430, { title: '一、目标函数：数据项与先验项的合流' })
  b.rect(56, 182, 270, 60, { fill: C.accL, stroke: C.acc, sw: 1.9, rx: 8 })
  b.ctext(191, 208, '数据项', { size: 13, weight: 700, fill: C.accD })
  b.ctext(191, 230, 'ML 似然或 LS 残差（权重 wA 调节）', { size: 10, fill: C.sub })
  b.ctext(350, 216, '＋', { size: 24, weight: 700, fill: C.ink })
  b.rect(414, 182, 270, 60, { fill: C.dnaL, stroke: C.dna, sw: 1.9, rx: 8 })
  b.ctext(549, 208, '立体化学 restraints 项', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(549, 230, '另有占有率先验等小项', { size: 10, fill: C.sub })
  // 六格 restraints
  const rst = (x: number, y: number, t: string, s: string) => {
    b.rect(x, y, 196, 56, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.text(x + 14, y + 22, t, { size: 10.5, weight: 700, fill: C.ink })
    b.wtext(x + 14, y + 40, s, { size: 9.5, fill: C.sub, maxW: 170, lh: 12.5 })
  }
  rst(56, 262, '键长', 'σ 约 0.02 Å（1.54 Å 碳碳单键的弹簧）')
  rst(272, 262, '键角', 'σ 约 2°')
  rst(488, 262, '平面组', '芳环／酰胺／羧酸根，σ 约 0.02 Å')
  rst(56, 330, '手性体积', '三键矢量混合积，σ 约 0.2 Å^{3}')
  rst(272, 330, '非键接触', '挤压与氢键方向，约 4 Å 监视窗')
  rst(488, 330, 'NCS 与参考模型', '拷贝间与对参考偏差，σ 按分辨率分档')
  b.wtext(56, 416, 'Engh 与 Huber 1991 年（2001 年修订）从剑桥结构数据库的氨基酸小分子统计出蛋白参数集。restraints 的统计含义：把「碳碳单键约 1.54 Å」这类小分子知识当作额外的伪观测方程，与衍射观测一起进极小化——每条 restraint 都有目标值与 σ，σ 就是它的发言权。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(56, 478, 'σ 的取值哲学：太紧则几何绑架数据，太松则数据压弯几何——0.02 Å 与 2° 是兼顾数据与先验的行业共识。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 二、LS 与 ML 两种世界观 ============
  b.panel(710, 132, 660, 430, { title: '二、最小二乘与最大似然：两种世界观' })
  b.rect(730, 182, 300, 210, { fill: C.panelB, stroke: C.mute, sw: 1.7, rx: 8 })
  b.ctext(880, 208, '最小二乘（LS）', { size: 12.5, weight: 700, fill: C.sub })
  b.wtext(746, 234, '古典表述：对每个反射计算 |F_{obs}| 与 |F_{calc}| 之差，加权平方求和后极小化。隐含假设有二：观测误差服从高斯分布；模型是「真值加随机误差」。', { size: 10, fill: C.sub, maxW: 270, lh: 14 })
  b.wtext(746, 314, '衍射数据两条都不满足：光子计数是泊松统计，弱反射误差分布不对称；模型不完备——无序、溶剂与部分占有率都是系统性缺失。', { size: 10, fill: C.badD, maxW: 270, lh: 14 })
  b.wtext(746, 372, '弱数据、坏模型处给出有偏的解。', { size: 10, weight: 700, fill: C.bad, maxW: 270, lh: 14 })
  b.rect(1050, 182, 290, 210, { fill: C.accL, stroke: C.acc, sw: 1.9, rx: 8 })
  b.ctext(1195, 208, '最大似然（ML）', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(1066, 234, '不再假设模型正确，而问「若真实结构是当前模型叠加某种误差分布，观测到这组数据的概率多大」，参数取概率最大处。', { size: 10, fill: C.sub, maxW: 258, lh: 14 })
  b.wtext(1066, 302, '模型误差以 σ_{A} 型折扣因子进入似然（与第 9 章 sigma-A 加权图同源）；对误差不对称的弱反射自动区别对待高估与低估；解释不了的部分记进误差项而非硬拉坐标。', { size: 10, fill: C.sub, maxW: 258, lh: 14 })
  b.wtext(1066, 378, 'REFMAC 与 phenix.refine 的标准内核。', { size: 10, weight: 700, fill: C.accD, maxW: 258, lh: 14 })
  b.timelineH(740, 470, 600, [
    { at: 0.08, label: '1980–90 年代', sub: 'Bricogne 奠定理论', above: true },
    { at: 0.42, label: '1996／1997', sub: 'Pannu 与 Read；Murshudov 实用化', above: false },
    { at: 0.78, label: '1997／2012', sub: 'REFMAC；phenix.refine', above: true },
  ], { title: '' })
  b.wtext(730, 524, '同一个「模型有错、概率说话」的思想，在成图端是加权系数（sigma-A 加权图），在精修端是目标函数。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、数目困境 ============
  b.panel(30, 572, 660, 390, { title: '三、参数与观测的数目困境：先验使问题正定' })
  // 账目
  b.tag(180, 622, '250 残基 · 约 2000 个非氢原子', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 8 })
  b.tag(470, 622, '3 坐标＋1 个 B＝约 8000 个参数', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 8 })
  // 观测 vs 参数柱
  const bx = 70, by = 860, bw = 300, bh = 170
  b.axis(bx, by, bw, bh, {
    title: '每原子的独立观测数', xlabel: '分辨率', grid: false,
    xticks: [[0.25, '2 Å'], [0.75, '3 Å']],
    yticks: [[0, '0'], [0.5, '2'], [1, '4']],
  })
  b.rect(bx + bw * 0.14, by - (2.5 / 4) * bh, bw * 0.22, (2.5 / 4) * bh, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(bx + bw * 0.25, by - (2.5 / 4) * bh - 10, '约 2–3 个', { size: 10, weight: 700, fill: C.accD })
  b.rect(bx + bw * 0.64, by - (1 / 4) * bh, bw * 0.22, (1 / 4) * bh, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(bx + bw * 0.75, by - (1 / 4) * bh - 10, '约 1 个', { size: 10, weight: 700, fill: C.accD })
  b.line(bx, by - bh, bx + bw, by - bh, { stroke: C.bad, sw: 2, dash: '7 4' })
  b.ctext(bx + bw * 0.62, by - bh - 9, '每原子 4 个参数（虚线）', { size: 10, weight: 700, fill: C.badD })
  b.wtext(410, 640, '独立反射数与晶胞体积成正比：2 Å 数据对典型晶胞给出与原子数同量级的独立反射（每原子约 2 至 3 个），再扣去 5% 自由集；到 3 Å，每原子只剩约 1 个观测。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(410, 726, '观测数在 2 Å 已与参数数打平甚至更少，更低分辨率则明确欠定——不加先验，方程组有无穷多组「同样解释数据」的解，精修器任选一个，通常是几何荒谬的那个。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.wtext(410, 812, 'restraints 的数学职能正是补足数千条伪观测让问题正定：数据管不动的方向，先验接管。分辨率越低档位越要认真——3.5 Å「强 NCS 加 group B」正是这句原理的工程化。', { size: 10.5, fill: C.mute, maxW: 268, lh: 15 })
  b.wtext(60, 892, '2 Å 的结构精修各向异性 B 是自欺（数据撑不起六倍参数），3.5 Å 连个体 B 都嫌奢侈。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })

  // ============ 四、权重与体溶剂 ============
  b.panel(710, 572, 660, 390, { title: '四、权重定价（rmsZ）与体溶剂背景账' })
  // rmsZ 刻度
  const rx = 730, rw = 600
  b.rect(rx, 616, rw * 0.32, 28, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.rect(rx + rw * 0.32, 616, rw * 0.36, 28, { fill: C.okL, stroke: C.ok, sw: 1.3 })
  b.rect(rx + rw * 0.68, 616, rw * 0.32, 28, { fill: C.badL, stroke: C.bad, sw: 1.3 })
  ;[0, 0.32, 0.68, 1].forEach(f => b.ctext(rx + f * rw, 660, ['0', '0.8', '1.5', '2'][f === 0 ? 0 : f === 0.32 ? 1 : f === 0.68 ? 2 : 3], { size: 10, fill: C.mute }))
  b.ctext(rx + rw * 0.16, 631, '先验绑架', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(rx + rw * 0.5, 631, '健康带（目标约 1）', { size: 10, weight: 700, fill: C.okD })
  b.ctext(rx + rw * 0.84, 631, '数据压弯化学', { size: 10, weight: 700, fill: C.badD })
  b.ctext(rx + rw / 2, 682, '几何 rmsZ（键长键角实际偏差对参数集 σ 的 Z 分数均方根）', { size: 10, fill: C.sub })
  // Babinet 曲线
  const gx = 750, gy = 920, gw = 270, gh = 200
  b.axis(gx, gy, gw, gh, {
    title: 'Babinet 原则：低角的系统残差', xlabel: '分辨率壳层（低角在左）', grid: false,
    yticks: [[0, '低'], [0.5, ''], [1, '高 |F|']],
  })
  const fc: [number, number][] = [[0, 0.95], [0.15, 0.8], [0.3, 0.6], [0.5, 0.42], [0.7, 0.3], [1, 0.22]]
  const fo: [number, number][] = [[0, 0.55], [0.15, 0.55], [0.3, 0.52], [0.5, 0.4], [0.7, 0.29], [1, 0.21]]
  const fcs: [number, number][] = [[0, 0.56], [0.15, 0.54], [0.3, 0.51], [0.5, 0.41], [0.7, 0.3], [1, 0.22]]
  b.curve(gx, gy, gw, gh, fc, { stroke: C.bad, sw: 2.4, smooth: true })
  b.curve(gx, gy, gw, gh, fo, { stroke: C.ink, sw: 2.4, smooth: true, dash: '7 4' })
  b.curve(gx, gy, gw, gh, fcs, { stroke: C.ok, sw: 2, smooth: true })
  b.legend(gx + 12, gy - gh + 16, [['只算蛋白 |F_{calc}|', C.bad], ['观测 |F_{obs}|', C.ink], ['加体溶剂修正', C.ok]], { size: 9 })
  b.wtext(1050, 716, '体溶剂修正处理占晶体体积三到五成的无序溶剂：溶剂区平均密度低于蛋白区，其低频散射恰是蛋白密度的「负像」，两相相消使低角 |F_{obs}| 系统性低于只算蛋白的 |F_{calc}|。', { size: 10, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(1050, 796, '主流修法是平坦溶剂掩膜：mask 之外是蛋白、之内溶剂密度取常数 k_{sol} 约 0.3 至 0.4 e/Å^{3} 配溶剂 B 40 至 60 Å^{2}（Jiang 与 Brünger 1994 年）。掩膜一更新，低角残差立刻塌落、R 常降数个百分点——「不修不知道」的大头。', { size: 10, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(1050, 880, '纪律：删原子或动模型后掩膜必须重算，否则溶剂回填会抹掉小配体的证据；整体缩放可带各向异性（6 参数），背景账先算清、再动原子。', { size: 10, fill: C.mute, maxW: 300, lh: 14 })
}

export default scene({
  title: '精修的数学基础：目标函数与先验',
  subtitle: '目标函数=数据项+restraints（键长 σ 0.02 Å、键角 σ 2°）；2000 原子约 8000 参数，2 Å 观测刚打平、3 Å 每原子仅约 1 观测；rmsZ 约 1 为健康；体溶剂掩膜更新 R 常降数个百分点',
  draw,
})
