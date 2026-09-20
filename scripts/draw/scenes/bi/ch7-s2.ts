// bi ch7-s2 同源建模与折叠识别（39-i 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、同一性三区 ============
  b.panel(30, 132, 900, 430, { title: '一、序列同一性：同源建模的舒适边界' })
  b.rect(80, 210, 220, 40, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  b.rect(300, 210, 220, 40, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.rect(520, 210, 340, 40, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  b.ctext(190, 234, '暮光区 < 30%', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(410, 234, '可信区 30–40%', { size: 12.5, weight: 700, fill: '#92400e' })
  b.ctext(690, 234, '舒适区 > 40%', { size: 12.5, weight: 700, fill: '#065f46' })
  b.arrow(80, 290, 860, 290, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(470, 316, '可比对区域的序列同一性 →', { size: 12, weight: 600, fill: C.mute })
  b.line(300, 282, 300, 298, { stroke: C.sub, sw: 2 })
  b.line(520, 282, 520, 298, { stroke: C.sub, sw: 2 })
  b.ctext(300, 274, '30%', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(520, 274, '40%', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(80, 344, '<30%：比对本身开始不可靠，插入缺失位置难定，结构相似性存疑。', { size: 11.5, fill: C.bad, maxW: 210, lh: 16 })
  b.wtext(316, 344, '30% 上下：主链误差约 1.5–2 Å，环区与侧链可信度下降。', { size: 11.5, fill: '#92400e', maxW: 190, lh: 16 })
  b.wtext(536, 344, '>40%：主链结构均方根偏差通常很小，建模近乎照抄（主链误差约 1 Å）。', { size: 11.5, fill: '#065f46', maxW: 310, lh: 16 })
  // 历史两卡
  b.rect(80, 420, 380, 92, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(100, 448, '1969 · Browne 等', { size: 13, weight: 700, fill: C.ink })
  b.wtext(100, 472, '以鸡蛋清溶菌酶晶体结构为模板，手工搭建 α-乳清蛋白模型——比较建模开山之作。', { size: 11, fill: C.sub, maxW: 348, lh: 15 })
  b.rect(490, 420, 380, 92, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(510, 448, '1993 · Sali 与 Blundell', { size: 13, weight: 700, fill: C.ink })
  b.wtext(510, 472, 'MODELLER：模板距离 / 二面角约束 + 比对对应 + 标准立体化学构成约束体系，自动化。', { size: 11, fill: C.sub, maxW: 348, lh: 15 })

  // ============ 二、SWISS-MODEL 四步 ============
  b.panel(940, 132, 430, 430, { title: '二、SWISS-MODEL 四步流程' })
  const sm: Array<[string]> = [
    ['① 模板识别——看分辨率与配体结合状态，而非仅看同一性'],
    ['② 序列比对——多模板并用须以统一比对框架为前提'],
    ['③ 模型搭建——侧链自旋转异构体库安装；环区是误差主要来源'],
    ['④ 质量评估——全局分数之外，局部质量剖面不可省'],
  ]
  sm.forEach(([t], i) => {
    const y = 190 + i * 80
    b.rect(970, y, 370, 64, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.6 })
    b.wtext(1155, y + 26, t, { size: 11.5, weight: 600, fill: C.accD, maxW: 340, lh: 16, anchor: 'middle' })
    if (i < 3) b.arrow(1155, y + 66, 1155, y + 78, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.wtext(970, 528, '结构比序列更保守——这正是同源建模可行的原因。', { size: 11.5, fill: C.sub, maxW: 370, lh: 16 })

  // ============ 三、折叠识别与质量评估 ============
  b.panel(30, 576, 1340, 384, { title: '三、折叠识别（穿线）与模型质量评估' })
  // 序列 → 骨架
  b.rect(60, 656, 240, 34, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(180, 678, 'MKTLLLAV…（目标序列）', { size: 11.5, weight: 700, fill: C.dnaD })
  b.arrow(308, 673, 352, 673, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(330, 652, '穿上', { size: 10.5, weight: 700, fill: C.mute })
  // 折叠骨架卡通
  b.circle(400, 673, 18, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.polyline([[420, 673], [440, 658], [460, 688], [480, 658], [500, 688], [520, 668]], { stroke: C.pro, sw: 2.4 })
  b.circle(548, 673, 18, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(470, 712, '已知折叠骨架', { size: 11, fill: C.mute })
  b.wtext(60, 744, '穿线：把序列「穿」到已知折叠骨架上，按残基-环境相容性打分（残基是否适应其所处的结构环境）。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
  b.wtext(60, 792, '依赖「折叠类型有限」假设；适合远缘而无同源证据的序列——比同源建模的证据更间接，可靠性更低。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
  b.wtext(60, 852, '质量评估：Ramachandran 图检验物理合理性（许可区占比约九成以上）；QMEAN 综合描述子给出准确性估计。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
  // Ramachandran 迷你图
  b.axis(880, 860, 400, 220, {
    xlabel: 'φ',
    title: 'Ramachandran 图（φ–ψ 平面）',
    xticks: [[0.06, '−180°'], [0.5, '0°'], [0.94, '180°']],
    yticks: [[0.06, '−180°'], [0.5, '0°'], [0.94, '180°']],
  })
  b.ellipse(947, 673, 44, 32, { fill: C.accL, stroke: C.acc, sw: 1.8, fillOp: 0.85 })
  b.ctext(947, 678, 'β 区', { size: 12, weight: 700, fill: C.accD })
  b.ellipse(1010, 789, 48, 36, { fill: C.okL, stroke: C.ok, sw: 1.8, fillOp: 0.85 })
  b.ctext(1010, 794, 'α 区', { size: 12, weight: 700, fill: '#065f46' })
  b.text(1068, 710, '落在许可区之外的残基', { size: 10.5, fill: C.mute })
  b.text(1068, 726, '提示模型局部不合理', { size: 10.5, fill: C.mute })
  b.text(1068, 840, '合格判据：许可区 ≥ 90%', { size: 10.5, weight: 600, fill: C.sub })
  b.wtext(880, 934, '低精度模型不得直接用于需原子级精度的任务（如配体结合位点分析）。', { size: 11.5, fill: C.bad, maxW: 460, lh: 15 })
}

export default scene({
  title: '同源建模与折叠识别：同一性分区、四步流程与质量评估',
  subtitle: '同一性高于 40% 建模近乎照抄（主链误差约 1 Å）、30% 上下 1.5–2 Å、低于 30% 进入暮光区；SWISS-MODEL 四步为模板识别、序列比对、模型搭建与质量评估，侧链用旋转异构体库安装、环区是误差主要来源；穿线按残基-环境相容性打分；Ramachandran 许可区占比约九成以上、QMEAN 给出准确性估计',
  draw,
})
