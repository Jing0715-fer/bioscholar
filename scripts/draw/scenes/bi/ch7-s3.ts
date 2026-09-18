// bi ch7-s3 AlphaFold 革命与结构预测评价（39-i 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、CASP 时间线 ============
  b.panel(30, 132, 1340, 280, { title: '一、CASP：双盲竞赛（1994 年起，偶数年一届）' })
  b.timelineH(100, 250, 1240, [
    { at: 0.02, label: '1994 · CASP1', sub: 'Moult 等发起双盲评估', above: true, c: C.sub },
    { at: 0.5, label: '靶标两类', sub: '模板建模 / 自由建模（无模板）', above: false, c: C.acc },
    { at: 0.72, label: '2020 · CASP14', sub: 'AlphaFold2 中位 GDT-TS ≈ 92.4', above: true, c: C.bad },
    { at: 0.95, label: '2024 · 诺贝尔化学奖', sub: '表彰结构预测与计算设计', above: false, c: C.warn },
  ])
  b.wtext(80, 372, '规则：预测先于答案揭晓，组织方逐一比对实验结构——杜绝事后挑选式汇报。', { size: 11.5, fill: C.sub, maxW: 1240, lh: 16 })

  // ============ 二、GDT-TS ============
  b.panel(30, 420, 660, 540, { title: '二、GDT-TS：预测质量的标尺' })
  b.rect(60, 470, 600, 88, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.ctext(360, 500, 'GDT-TS =（P₁ + P₂ + P₄ + P₈）/ 4 × 100', { size: 15, weight: 700, fill: C.ink })
  b.ctext(360, 528, 'Pₓ：叠合后偏差落在 x Å 阈值内的残基百分比', { size: 12, fill: C.sub })
  // 残基偏差示意
  b.ctext(360, 580, '叠合后各残基的偏差（示意）', { size: 12, weight: 700, fill: C.ink })
  const devs: Array<[number, string]> = [
    [90, C.ok], [135, C.ok], [180, C.ok], [225, C.ok], [270, C.ok],
    [330, C.warn], [375, C.warn], [420, C.warn],
    [480, C.acc], [525, C.acc],
    [585, C.bad],
    [625, C.faint],
  ]
  devs.forEach(([x, color]) => {
    b.circle(x, 630, 10, { fill: color, fillOp: 0.8, stroke: C.line, sw: 1 })
  })
  b.legend(90, 686, [
    ['≤1 Å', C.ok], ['≤2 Å', C.warn], ['≤4 Å', C.acc], ['≤8 Å', C.bad], ['>8 Å', C.faint],
  ], { size: 11, gap: 14 })
  b.wtext(60, 730, '对整体拓扑敏感、对局部大错不敏感——一段大错只拖累它自己的残基票数。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16 })
  b.rect(60, 760, 600, 74, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 8, fillOp: 0.45 })
  b.wtext(80, 784, 'CASP14（2020）：AlphaFold2 在绝大多数目标上取得中位 GDT-TS 约 92.4——首次达到「与实验精度相当」的量级。', { size: 11.5, weight: 600, fill: C.bad, maxW: 560, lh: 16 })
  b.rect(60, 850, 600, 58, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.wtext(80, 872, 'pLDDT：残基级置信度——逐残基给出可信度，画在结构上即是着色图。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })

  // ============ 三、AlphaFold2 支柱与互补 ============
  b.panel(710, 420, 660, 540, { title: '三、AlphaFold2 三大支柱与预测-实验互补' })
  const pillars: Array<[string, string]> = [
    ['① 注意力表示', 'MSA 与残基对表示的注意力机制——从共进化信号读出残基间距离'],
    ['② 等变结构模块', '端到端直接输出三维坐标，尊重旋转平移等变性'],
    ['③ 自蒸馏与循环精修', '以自身预测扩充训练数据，多轮迭代细化结构'],
  ]
  pillars.forEach(([t, s], i) => {
    const y = 470 + i * 82
    b.rect(740, y, 600, 72, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8, fillOp: 0.6 })
    b.text(760, y + 28, t, { size: 13.5, weight: 700, fill: C.accD })
    b.wtext(760, y + 52, s, { size: 11, fill: C.sub, maxW: 560, lh: 15 })
  })
  b.rect(740, 726, 600, 60, { fill: C.okL, stroke: C.ok, sw: 1.4, rx: 8, fillOp: 0.5 })
  b.wtext(760, 750, 'AFDB：把预测结构开放为数亿量级的按需查询资源。', { size: 11.5, weight: 600, fill: '#065f46', maxW: 560, lh: 16 })
  b.rect(740, 800, 600, 84, { fill: C.panel, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(760, 826, '预测与实验互补', { size: 13, weight: 700, fill: C.ink })
  b.wtext(760, 852, '无序区、构象动力学、配体结合态与翻译后修饰仍依赖实验解析——预测结构是起点而非终点。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
  b.rect(740, 898, 600, 44, { fill: C.warnL, stroke: C.warn, sw: 1.3, rx: 8, fillOp: 0.5 })
  b.ctext(1040, 926, '2024 · 诺贝尔化学奖表彰蛋白质结构预测与设计', { size: 12, weight: 700, fill: '#92400e' })
}

export default scene({
  title: 'AlphaFold 革命：CASP 双盲竞赛与 GDT-TS 标尺',
  subtitle: 'CASP 自 1994 年起以双盲竞赛统一评价结构预测；GDT-TS 取叠合后偏差落在 1/2/4/8 Å 阈值内残基百分比的平均再乘 100，对整体拓扑敏感；CASP14（2020）AlphaFold2 中位 GDT-TS 约 92.4，三大支柱为 MSA 与残基对注意力、等变结构模块、自蒸馏与循环精修；2024 年诺贝尔化学奖表彰结构预测与设计',
  draw,
})
