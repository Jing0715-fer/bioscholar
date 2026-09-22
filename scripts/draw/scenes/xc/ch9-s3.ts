// xc ch9-s3 配体、水分子与交替构象（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、配体建模四步 ============
  b.panel(30, 132, 660, 430, { title: '一、配体建模四步与一致性检验' })
  const step = (x: number, t: string, s: string, stroke: string, fill: string) => {
    b.rect(x, 186, 148, 104, { fill, stroke, sw: 1.7, rx: 8 })
    b.ctext(x + 74, 210, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(x + 74, 232, s, { size: 9.5, fill: C.sub, maxW: 128, lh: 13, anchor: 'middle' })
    if (x < 560) b.arrow(x + 150, 238, x + 162, 238, { stroke: C.sub, sw: 1.7, marker: 'ink' })
  }
  step(56, '① 识别', '差值图 ±3σ 孤立正峰簇，形状与化学相符、位置生物学合理（糖环六角饼、ATP 嘌呤板）', C.acc, C.accL)
  step(218, '② 字典', 'restraints 就位：键长 σ 约 0.02 Å、键角 σ 约 2°、平面组、手性体积（GRADE／eLBOW）', C.dna, C.dnaL)
  step(380, '③ 拟合', '刚性体初摆（Find Ligands 候选或手动），真实空间精修微调扭转角', C.pro, C.proL)
  step(542, '④ 检验', 'occupancy 与 B 一致性、polder 复核、RSRCC 不低于 0.8', C.warn, C.warnL)
  // 口袋示意
  b.ellipse(200, 386, 130, 56, { fill: C.panelB, stroke: C.line, sw: 1.6 })
  b.ctext(200, 336, '活性口袋与配体（示意）', { size: 10, weight: 700, fill: C.sub })
  const lig: [number, number][] = [[150, 372], [176, 366], [198, 382], [222, 374], [244, 388]]
  b.polyline(lig, { stroke: C.enz, sw: 2.6 })
  lig.forEach(([x, y]) => b.circle(x, y, 5.5, { fill: C.enzL, stroke: C.enz, sw: 1.8 }))
  b.ellipse(198, 378, 60, 24, { fill: 'none', stroke: C.dna, sw: 1.8, dash: '6 4' })
  // 一致性对比
  b.rect(370, 348, 300, 78, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
  b.text(386, 372, 'B 因子一致性：', { size: 11, weight: 700, fill: C.ink })
  b.text(386, 394, '口袋残基 B 约 25 Å^{2}，配体 B 却只有 12 Å^{2}', { size: 10, weight: 700, fill: C.badD })
  b.wtext(386, 412, '等于宣称配体比周围蛋白「更硬」——过拟合的经典信号。', { size: 9.5, fill: C.sub, maxW: 272, lh: 12.5 })
  b.wtext(56, 460, '四步里最易被跳过的是第二步：无 restraints 的配体在精修里会被「合法地」摧折成不可能的几何，R 因子却在降低——最漂亮的假成就。字典四类核心观察方程：键长（1.54 Å 的碳碳单键由此获得一根弹簧）、键角、平面组（芳环／酰胺／羧酸根）、手性（三个键矢量的混合积，连同符号锁死立体化学），另有非键接触项（约 2.9–4.0 Å）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 二、occupancy–B 简并山谷 ============
  b.panel(710, 132, 660, 430, { title: '二、occupancy 与 B：乘积简并的山谷' })
  const ox = 770, oy = 500, ow = 340, oh = 300
  b.rect(ox, oy - oh, ow, oh, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.line(ox, oy, ox + ow, oy, { stroke: C.sub, sw: 1.6 })
  b.line(ox, oy - oh, ox, oy, { stroke: C.sub, sw: 1.6 })
  ;[[0.25, '0.25'], [0.5, '0.5'], [0.75, '0.75'], [1, '1.0']].forEach(([f, lab]) => {
    b.ctext(ox + (f as number) * ow, oy + 18, lab as string, { size: 10, fill: C.mute })
    b.line(ox + (f as number) * ow, oy, ox + (f as number) * ow, oy + 5, { stroke: C.sub, sw: 1.4 })
  })
  ;[[0.2, '12'], [0.5, '30'], [0.8, '48']].forEach(([f, lab]) => {
    const ty = oy - (f as number) * oh
    b.line(ox - 5, ty, ox, ty, { stroke: C.sub, sw: 1.4 })
    b.text(ox - 9, ty + 4, lab as string, { size: 10, fill: C.mute, anchor: 'end' })
  })
  b.ctext(ox + ow / 2, oy + 40, '占有率 occupancy', { size: 11, weight: 600, fill: C.sub })
  b.ctext(ox - 46, oy - oh / 2, 'B 因子（Å^{2}）', { size: 11, weight: 600, fill: C.sub })
  // 简并山谷曲线族（B = c / occ 形，绘制三条）
  const valley = (c: number, stroke: string, dash?: string) => {
    const pts: [number, number][] = []
    for (let i = 1; i <= 40; i++) {
      const occ = 0.12 + (i / 40) * 0.88
      const Bv = (c / occ) / 60
      if (Bv > 1) continue
      pts.push([ox + occ * ow, oy - Bv * oh])
    }
    b.polyline(pts, { stroke, sw: 2, dash })
  }
  valley(25, C.acc)
  valley(35, C.faint, '4 5')
  valley(15, C.faint, '4 5')
  b.ctext(ox + 0.93 * ow, oy - (25 / 0.95 / 60) * oh - 12, 'R 恒定线', { size: 9.5, weight: 700, fill: C.accD })
  // 关键点位
  b.circle(ox + ow, oy - (25 / 60) * oh, 6.5, { fill: C.ok })
  b.ctext(ox + ow - 44, oy - (25 / 60) * oh - 12, '(1.0, 25) 自洽', { size: 9.5, weight: 700, fill: C.okD })
  b.circle(ox + ow * 0.5, oy - (50 / 60) * oh, 6.5, { fill: C.mute })
  b.ctext(ox + ow * 0.5 - 20, oy - (50 / 60) * oh - 12, '(0.5, 50) 同样自洽', { size: 9.5, weight: 700, fill: C.mute })
  b.circle(ox + ow, oy - (12 / 60) * oh, 6.5, { fill: C.bad })
  b.ctext(ox + ow - 60, oy - (12 / 60) * oh - 12, '(1.0, 12) 过拟合', { size: 9.5, weight: 700, fill: C.badD })
  b.circle(ox + ow * 0.5, oy - (25 / 60) * oh, 6.5, { fill: C.warn })
  b.ctext(ox + ow * 0.5 + 10, oy - (25 / 60) * oh + 18, '(0.5, 25) 部分占有指纹', { size: 9.5, weight: 700, fill: C.warnD })
  b.wtext(730, 530, '原子贡献的密度峰高大致正比于占有率乘以热振动衰减因子——两参数以乘积姿态进入结构振幅，在参数空间拖出一条「乘积不变」的简并山谷：线上任意一点对 R 因子而言无差别。纪律只有一条：固定其一、只修另一个，永不同轮放开。常见次序：先锁 occupancy 为 1 精修 B，看 B 能否回归邻近量级；回归不了再降 occupancy（0.7、0.5 逐档试）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 168, '密度深度只及邻近残基一半、B 却与邻居相当甚至更低——占有率低于 1 却被按满占建成的指纹；若降 occupancy 后 B 反而虚高，说明密度弱另有原因（局部无序、辐射损伤），该怀疑的是模型而非参数。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、水三要件与水网络 ============
  b.panel(30, 572, 660, 390, { title: '三、有序水三要件与氢键网络' })
  b.table(56, 622, 616, {
    headers: ['要件', '量化门槛', '不达标的常见原因'],
    colW: [160, 216, 240],
    rowH: 28,
    fontSize: 10.5,
    rows: [
      ['差值峰强度', 'mFo−DFc 高于 +3σ', '噪声、未建模碎片'],
      ['氢键几何', '供受体距离 2.6–3.0 Å', '密度孤悬无伙伴'],
      ['B 因子', '与邻近蛋白同量级或略高', '噪声峰被硬建'],
    ],
  })
  // 水网络示意
  const wy = 792
  b.circle(120, wy - 30, 8, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(120, wy - 50, '残基侧链', { size: 9, fill: C.mute })
  b.circle(200, wy, 6.5, { fill: C.acc, fillOp: 0.85, stroke: C.accD, sw: 1.2 })
  b.circle(268, wy - 24, 6.5, { fill: C.acc, fillOp: 0.85, stroke: C.accD, sw: 1.2 })
  b.circle(330, wy + 6, 6.5, { fill: C.acc, fillOp: 0.85, stroke: C.accD, sw: 1.2 })
  b.line(127, wy - 26, 194, wy - 3, { stroke: C.acc, sw: 1.5, dash: '4 3' })
  b.line(206, wy - 2, 262, wy - 21, { stroke: C.acc, sw: 1.5, dash: '4 3' })
  b.line(274, wy - 20, 324, wy + 2, { stroke: C.acc, sw: 1.5, dash: '4 3' })
  b.ctext(158, wy - 22, '2.7 Å', { size: 9, weight: 700, fill: C.accD })
  b.ctext(234, wy - 32, '2.9 Å', { size: 9, weight: 700, fill: C.accD })
  b.ctext(300, wy - 18, '2.8 Å', { size: 9, weight: 700, fill: C.accD })
  b.circle(400, wy - 34, 6.5, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.line(400, wy - 46, 400, wy - 22, { stroke: C.bad, sw: 1.6 })
  b.line(392, wy - 38, 408, wy - 38, { stroke: C.bad, sw: 1.6 })
  b.ctext(400, wy - 58, '孤悬无伙伴：先删为敬', { size: 9, weight: 700, fill: C.badD })
  // 表面水链
  for (let i = 0; i < 5; i++) b.circle(460 + i * 34, wy + 34, 5.5, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.ctext(530, wy + 60, '晶体表面「水链」多为溶剂噪声', { size: 9, weight: 700, fill: C.warnD })
  b.wtext(56, 856, '添加时机：精修后期、蛋白与配体基本定形后批量添加，且在 R_{free} 监控下进行——每批水添加后 R_{free} 应持平或下降，上涨即说明水在拟合噪声，撤回。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(56, 900, 'phenix.refine 的 ordered water 策略：峰高于阈值、氢键窗口约 2.3–3.3 Å、B 因子区间 5–80 Å^{2}、不与现有原子碰撞；下一轮失格自动删除。盲区在化学身份：程序分不清那个峰是水、甘油羟基、硫酸根的氧还是降解片段。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })

  // ============ 四、交替构象 A/B ============
  b.panel(710, 572, 660, 390, { title: '四、交替构象：拆分 A 与 B，总和锁 1' })
  // 双峰密度
  b.ellipse(850, 690, 58, 34, { fill: C.dnaL, fillOp: 0.85, stroke: C.dna, sw: 2 })
  b.ellipse(925, 706, 40, 26, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.6, dash: '5 4' })
  b.ctext(838, 654, '构象 A（鼓包厚）', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(948, 748, '构象 B（鼓包薄）', { size: 10, weight: 700, fill: C.mute })
  // 主链与两条侧链
  b.circle(790, 660, 6, { fill: C.ink })
  b.circle(790, 726, 6, { fill: C.ink })
  b.line(790, 660, 790, 726, { stroke: C.ink, sw: 2.4 })
  b.path('M 790,693 L 818,690 L 850,690', { fill: 'none', stroke: C.dna, sw: 3 })
  b.path('M 790,693 L 826,700 L 918,706', { fill: 'none', stroke: C.mute, sw: 2.4, dash: '7 4' })
  b.ctext(818, 676, 'occ 0.6', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(860, 722, 'occ 0.4', { size: 9.5, weight: 700, fill: C.mute })
  // 峰心距标注
  b.arrow(878, 640, 905, 668, { stroke: C.rose, sw: 1.6, marker: 'mute' })
  b.ctext(870, 630, '峰心距约 0.5–1 Å', { size: 9.5, weight: 700, fill: C.rose })
  // 峰心距刻度
  const kx = 1046, kw = 290
  b.rect(kx, 626, kw * 0.28, 26, { fill: C.badL, stroke: C.bad, sw: 1.2 })
  b.rect(kx + kw * 0.28, 626, kw * 0.34, 26, { fill: C.okL, stroke: C.ok, sw: 1.2 })
  b.rect(kx + kw * 0.62, 626, kw * 0.38, 26, { fill: C.warnL, stroke: C.warn, sw: 1.2 })
  b.ctext(kx + kw * 0.14, 641, '＜0.5 Å', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(kx + kw * 0.45, 641, '0.5–1 Å 宜拆', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(kx + kw * 0.81, 641, '＞1 Å 近独立', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(kx + kw / 2, 668, '双峰峰心距判据', { size: 10, weight: 600, fill: C.sub })
  b.wtext(1046, 692, '拆分操作：复制为 A 与 B 两个构象（altloc 标签），分别拟合各自密度的 rotamer；occupancy 拆分且总和为 1（如 0.6 与 0.4，由两峰体积比估计、精修微调）；两构象几何各自独立约束。', { size: 10, fill: C.sub, maxW: 296, lh: 14 })
  b.wtext(1046, 764, '小于 0.5 Å 的「双峰」多半是单峰各向异性弥散的错觉，拆之无据；远大于 1 Å 时两构象已近乎独立，主链多半也须双份。常见的「半拆」是侧链末端双峰、根部共享——Asn 酰胺与 Asp 羧基的 180° 翻转即属此类。', { size: 10, fill: C.sub, maxW: 296, lh: 14 })
  b.wtext(730, 830, '情形分级：侧链交替最常见（Asn 与 Ser 翻转、Lys 双摆），主链单一、侧链分叉；主链交替更重（整段主链双份含交替肽键平面），建模与精修成本高，须密度证据充分才动手。低于 3 Å 拆分须格外克制：分辨率撑不起双构象细节时，宁选单一主导构象配较高 B。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 900, '幽灵配体的代价：甘油、PEG 片段、硫酸根被误认作底物类似物，事后更正的成本远高于当初多花的一小时；制药团队把 polder 复核、RSRCC 门槛与占有率上限写进标准流程。口诀：峰不成形不搭、字典不备不建、检验不过不信。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '配体、水分子与交替构象',
  subtitle: '配体四步：识别、字典（键长 σ 0.02 Å、键角 σ 2°）、拟合、检验；RSRCC 不低于 0.8；occupancy 与 B 乘积简并、永不同轮放开；水三要件 +3σ／2.6–3.0 Å／B 合理；A/B 拆分总和锁 1',
  draw,
})
