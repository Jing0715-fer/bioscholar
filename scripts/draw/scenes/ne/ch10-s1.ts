// ne ch10-s1 运动系统 / 运动单位与脊髓反射（39-h 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三类运动单位 ============
  b.panel(30, 132, 660, 430, { title: '一、运动单位三型：力量-速度-耐力梯度' })
  b.table(60, 200, 600, {
    headers: ['单位类型', '纤维类型', '收缩速度', '抗疲劳性', '典型职责'],
    colW: [100, 150, 100, 100, 150],
    rowH: 50,
    fontSize: 11,
    rows: [
      ['S', 'I 型慢氧化', '慢', '极强', '姿势维持与持续低张力'],
      ['FR', 'IIa 快氧化酵解', '快', '较强', '中等力量的持续动作'],
      ['FF', 'IIb/IIx 快酵解', '快', '弱', '爆发、冲刺与跳跃'],
    ],
  })
  b.wtext(60, 440, '一个运动单位 = 一个 α 运动神经元 + 其支配的全部肌纤维；肌肉由数千单位按梯度混合编成——从「省电耐用」到「峰值爆发」的力量梯队。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、大小原则 ============
  b.panel(710, 132, 660, 430, { title: '二、Henneman 大小原则（1965）：小的先上' })
  b.axis(790, 470, 500, 260, {
    xlabel: '力量需求（突触驱动的去极化）',
    xticks: [[0.08, '轻握茶杯'], [0.4, '提购物袋'], [0.75, '搬起杠铃'], [1, '冲刺']],
    yticks: [[0.05, '0'], [0.35, '低'], [0.65, '中'], [0.95, '高']],
  })
  b.ctext(740, 323, '募集与', { size: 13, weight: 600, fill: C.sub })
  b.ctext(740, 341, '放电率', { size: 13, weight: 600, fill: C.sub })
  // 三段募集曲线
  b.curve(790, 470, 500, 260, [
    [0, 0.05], [0.05, 0.06], [0.08, 0.28], [0.3, 0.33], [0.55, 0.38], [1, 0.42],
  ], { stroke: C.ok, sw: 3, smooth: true })
  b.curve(790, 470, 500, 260, [
    [0, 0.05], [0.28, 0.05], [0.33, 0.5], [0.6, 0.58], [1, 0.64],
  ], { stroke: C.rna, sw: 3, smooth: true })
  b.curve(790, 470, 500, 260, [
    [0, 0.05], [0.6, 0.05], [0.68, 0.72], [1, 0.92],
  ], { stroke: C.bad, sw: 3, smooth: true })
  b.legend(800, 196, [
    ['S（约 8–12 Hz 起步）', C.ok],
    ['FR', C.rna],
    ['FF（高频放电）', C.bad],
  ], { size: 10.5 })
  b.wtext(740, 530, '神经元胞体愈小 → 膜面积愈小 → 输入电阻愈高 → 同等突触电流去极化愈大 → 阈值愈低、愈先募集；放电率在约 8–50 Hz 范围内上调（频率编码）+ 更大单位顺序加入（募集编码）= 力量分级。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、牵张反射：单突触弧 ============
  b.panel(30, 578, 660, 396, { title: '三、牵张反射：单突触弧 + 交互抑制' })
  // 肌梭
  b.rect(60, 660, 150, 30, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.8, rx: 14 })
  b.ctext(135, 680, '肌梭（Ia 传入）', { size: 11, weight: 700, fill: C.dnaD })
  b.arrow(210, 675, 300, 675, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.ctext(255, 658, '牵拉', { size: 10.5, weight: 700, fill: C.dnaD })
  // 脊髓灰质框
  b.rect(300, 648, 180, 200, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 10 })
  b.ctext(390, 672, '脊髓', { size: 12, weight: 700, fill: C.sub })
  // α 神经元（伸肌）
  b.circle(340, 720, 16, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(340, 724, 'α', { size: 11, weight: 700, fill: '#065f46' })
  b.ctext(340, 752, '同名肌', { size: 9.5, fill: C.mute })
  b.ctext(340, 765, '（伸肌）', { size: 9.5, fill: C.mute })
  // Ia → α 单突触
  b.arrow(300, 690, 326, 708, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(278, 700, '单突触', { size: 10, weight: 700, fill: C.dnaD })
  // 抑制性中间神经元
  b.circle(430, 760, 13, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(430, 764, 'I', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(348, 736, 419, 754, { stroke: C.rna, sw: 1.8, dash: '5 4', marker: 'rna' })
  b.ctext(400, 728, 'Ia 侧支', { size: 9.5, fill: C.rnaD })
  // α（拮抗肌）
  b.circle(430, 820, 14, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(430, 824, 'α', { size: 10.5, weight: 700, fill: C.bad })
  b.text(490, 824, '拮抗肌（屈肌）', { size: 9.5, fill: C.mute })
  b.arrow(430, 793, 430, 806, { stroke: C.rna, sw: 2, dash: '5 4', marker: 'rna' })
  b.ctext(495, 800, '抑制', { size: 9.5, weight: 700, fill: C.rnaD })
  // 输出箭头
  b.arrow(324, 720, 230, 700, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.text(60, 714, '兴奋 → 肌收缩（膝跳）', { size: 10.5, weight: 700, fill: '#065f46' })
  b.wtext(60, 886, '牵张反射潜伏期约 20–25 ms（单突触最快通路）；梭外肌主动缩短时 α-γ 共激活令肌梭全程保持敏感——「预计性调节」的现代观点由此而来。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、屈肌反射与交叉伸肌反射 ============
  b.panel(710, 578, 660, 396, { title: '四、屈肌反射 + 交叉伸肌反射：一侧回撤、对侧支撑' })
  // 左腿（刺激侧）
  b.rect(760, 660, 220, 60, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.8, rx: 9 })
  b.ctext(870, 682, '刺激侧（踩到钉子）', { size: 12, weight: 700, fill: C.bad })
  b.ctext(870, 702, '伤害感受器 → 多突触回路', { size: 10, fill: C.mute })
  b.rect(760, 760, 220, 56, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.ctext(870, 782, '同侧：屈肌收缩', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(870, 800, '（回撤，伸肌同时舒张）', { size: 10, fill: C.mute })
  // 右腿（支撑侧）
  b.rect(1030, 660, 240, 60, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.8, rx: 9 })
  b.ctext(1150, 682, '对侧（支撑体重）', { size: 12, weight: 700, fill: '#065f46' })
  b.ctext(1150, 702, '经连合纤维交叉', { size: 10, fill: C.mute })
  b.rect(1030, 760, 240, 56, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 9 })
  b.ctext(1150, 782, '对侧：伸肌收缩', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(1150, 800, '（支撑身体不倒）', { size: 10, fill: C.mute })
  b.arrow(870, 720, 870, 760, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.arrow(980, 690, 1030, 690, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.ctext(1005, 672, '交叉', { size: 10.5, weight: 700, fill: '#065f46' })
  b.wtext(740, 856, '多突触回路（经若干中间神经元与连合纤维）构成「一侧回撤、对侧支撑」的保护-支持对偶——回撤优先于定位，故屈肌反射的潜伏期远长于牵张反射。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
}

export default scene({
  title: '运动单位与脊髓反射：大小原则、牵张反射与交叉伸肌对偶',
  subtitle: '募集顺序固定为 S→FR→FF；牵张反射为单突触弧（潜伏期约 20–25 ms）伴交互抑制',
  draw,
})
