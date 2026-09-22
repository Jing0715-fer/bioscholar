// xc ch11-s1 Ramachandran 图（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Ramachandran 图 ============
  b.panel(30, 132, 740, 830, { title: '一、Ramachandran 图：φ/ψ 平面的三区审判台' })
  const bx = 120, by = 740, bw = 540, bh = 560 // 绘图区（by 为底边）
  const gx = (phi: number) => bx + ((phi + 180) / 360) * bw
  const gy = (psi: number) => by - ((psi + 180) / 360) * bh
  // 网格
  ;[-180, -90, 0, 90, 180].forEach(v => {
    b.line(gx(v), by, gx(v), by - bh, { stroke: C.faint, sw: 0.9, dash: '4 5', opacity: 0.55 })
    b.line(bx, gy(v), bx + bw, gy(v), { stroke: C.faint, sw: 0.9, dash: '4 5', opacity: 0.55 })
    b.ctext(gx(v), by + 20, `${v}`, { size: 10, fill: C.mute })
    b.etext(bx - 10, gy(v) + 4, `${v}`, { size: 10, fill: C.mute })
  })
  // Pro 带（先画，垫底）：φ≈−60° 窄带
  b.rect(gx(-75), gy(80), gx(-45) - gx(-75), gy(-80) - gy(80), { fill: C.rnaL, fillOp: 0.5 })
  // allowed（浅）与 favored（深）区域
  const region = (phi: number, psi: number, rx: number, ry: number, o: { fill: string; op: number; dash?: string }) =>
    b.ellipse(gx(phi), gy(psi), rx, ry, { fill: o.fill, fillOp: o.op, stroke: o.dash ? C.dna : C.dnaD, sw: o.dash ? 1.4 : 2, dash: o.dash })
  region(-125, 130, 62, 84, { fill: '#ecfdf5', op: 0.9, dash: '6 4' })
  region(-125, 130, 42, 56, { fill: '#ccfbf1', op: 0.95 })
  region(-63, -43, 48, 52, { fill: '#ecfdf5', op: 0.9, dash: '6 4' })
  region(-63, -43, 30, 36, { fill: '#ccfbf1', op: 0.95 })
  region(57, 40, 40, 44, { fill: '#ecfdf5', op: 0.9, dash: '6 4' })
  region(57, 40, 22, 27, { fill: '#ccfbf1', op: 0.95 })
  region(-100, 60, 30, 60, { fill: '#ecfdf5', op: 0.85 })
  // Gly 镜像专属区（虚线）
  b.ellipse(gx(63), gy(-45), 34, 42, { fill: 'none', stroke: C.pro, sw: 1.8, dash: '7 5' })
  b.ctext(gx(63) + 4, gy(-45) - 52, 'Gly 专属镜像区', { size: 10, weight: 700, fill: C.proD })
  // 区域标签
  b.ctext(gx(-125), gy(130), 'β', { size: 17, weight: 700, fill: C.dnaD })
  b.ctext(gx(-63) - 2, gy(-43) + 2, 'α_{R}', { size: 15, weight: 700, fill: C.dnaD })
  b.ctext(gx(57), gy(40), 'α_{L}', { size: 15, weight: 700, fill: C.dnaD })
  b.ctext(gx(-60), gy(150) - 14, 'Pro 带：φ≈−60°', { size: 10, weight: 700, fill: C.rnaD })
  // outlier 红叉
  const cross = (phi: number, psi: number) => {
    const cx = gx(phi), cy = gy(psi)
    b.line(cx - 7, cy - 7, cx + 7, cy + 7, { stroke: C.bad, sw: 2.6 })
    b.line(cx - 7, cy + 7, cx + 7, cy - 7, { stroke: C.bad, sw: 2.6 })
  }
  cross(75, -125); cross(-160, -80); cross(150, -70)
  b.ctext(gx(75) - 4, gy(-125) + 28, 'outlier', { size: 10.5, weight: 700, fill: C.bad })
  // 坐标轴
  b.line(bx, by, bx + bw + 10, by, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(bx, by, bx, by - bh - 10, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(bx + bw / 2, by + 48, 'φ（°）', { size: 14, weight: 600, fill: C.sub })
  b.etext(bx - 34, by - bh / 2, 'ψ（°）', { size: 14, weight: 600, fill: C.sub })
  b.legend(bx + 262, by - bh + 6, [['favored 最优势区', '#ccfbf1'], ['allowed 边缘许可', '#ecfdf5']], { size: 10 })
  b.wtext(60, 830, '1963 年 Ramachandran、Ramakrishnan 与 Sasisekharan 以硬球排斥模型算出主链二面角允许范围；现代三区轮廓由 MolProbity 以高质量结构（约 1.8 Å 以内、数万残基）的统计划定。行业惯例：outlier 占比低于 0.5% 才算合格，优秀结构 favored 不低于 98% 且 outlier 为零。', { size: 10.5, fill: C.sub, maxW: 690, lh: 15 })
  b.wtext(60, 892, 'outlier 不是「扣分项」而是「传唤」——每一个都须当面解释：真实的应变构象、功能相关的扭曲，或建模错误。落在活性位点应变区且有文献佐证的可以保留；落在环区且密度平庸的先修后审。', { size: 10.5, fill: C.mute, maxW: 690, lh: 15 })

  // ============ 二、几何验证阈值速查 ============
  b.panel(790, 132, 580, 380, { title: '二、几何验证阈值速查' })
  b.table(810, 220, 540, {
    headers: ['指标', '合格阈值', '工具'],
    colW: [168, 212, 160],
    rowH: 32,
    fontSize: 11.5,
    rows: [
      ['Ramachandran outlier', '低于 0.5%（favored≥98%）', 'MolProbity'],
      ['rotamer outlier', '低于 1%', 'MolProbity'],
      ['clashscore', '低于 5（每千原子）', 'MolProbity＋Reduce'],
      ['C_{β} 偏离', '低于 0.25 Å', 'MolProbity'],
      ['几何 rmsZ', '约 1（0.8–1.5 可接受）', 'phenix／REFMAC'],
      ['ω 平面偏离', '低于约 15°', '验证报告'],
    ],
  })
  b.wtext(810, 470, 'rotamer 库为 Lovell 等 2000 年完备库；clashscore＝每一千个原子的严重冲突数（原子对重叠不低于 0.4 Å），好结构低于 5——不加氢的重原子检查会放过半数立体化学灾难，「全原子」三个字的分量正在于此。', { size: 10, fill: C.sub, maxW: 540, lh: 14 })

  // ============ 三、特殊残基轮廓与低分辨率哲学 ============
  b.panel(790, 532, 580, 430, { title: '三、特殊残基轮廓与低分辨率哲学' })
  b.tag(880, 584, 'Gly：无 C_{β}，四象限皆可及', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 9 })
  b.tag(1110, 584, 'Pro：φ 锁于约 −60°', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 9 })
  b.tag(990, 628, 'pre-Pro：被环推挤、自成一区', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 9 })
  b.wtext(810, 670, '验证程序对这三类残基自动换用各自轮廓——不换则误报成灾。C_{β} 偏离检验尤灵敏：C_{β} 的理想位置由 N、CA、C 三原子几何唯一决定（零自由度），主链 φ/ψ 一错或手性一翻，C_{β} 立刻偏离——一处报警、多处病灶的「无自由度证人」；手性体积（三条键矢量的混合积）核查 Ile 与 Thr 的 C_{β} 手性及主链 CA 构型。', { size: 10.5, fill: C.sub, maxW: 540, lh: 15 })
  b.wtext(810, 762, '低分辨率分层：群体指标（平均键长偏差、整体 clashscore）随分辨率放宽是物理现实——看趋势即可；但个别 outlier 不在宽容之列——Ramachandran 禁区就是禁区、C_{β} 偏 0.4 Å 就是事故。宽容是物理的，是非是化学的。', { size: 10.5, fill: C.mute, maxW: 540, lh: 15 })
  b.wtext(810, 838, '验证实战顺序：先跑几何全套（clashscore、Ramachandran、rotamer），红条目按严重度排队；再开双图逐个现场复核（报警处密度是否支持「真实应变」的辩护）；修复重新精修一轮再验——修几何的动作本身可能制造新的 clash，验证是循环而非清单。', { size: 10.5, fill: C.sub, maxW: 540, lh: 15 })
  b.ctext(1080, 932, 'MolProbity 三鼎：Ramachandran · rotamer · clashscore', { size: 11.5, weight: 700, fill: C.ink })
}

export default scene({
  title: 'Ramachandran 图：主链二面角的三区审判台',
  subtitle: 'favored／allowed／outlier 三区判定，outlier＜0.5% 为行业惯例（优秀结构 favored≥98%）；Gly 无 C_{β} 四象限皆可及、Pro 的 φ 锁于约 −60°、pre-Pro 自成一区；β／α_{R}／α_{L} 典型区块与红叉 outlier',
  draw,
})
