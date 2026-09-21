// ne ch11-s4 自主神经与神经内分泌 / 生物节律与睡眠-觉醒（39-h 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、SCN 主钟与褪黑素 ============
  b.panel(30, 132, 660, 430, { title: '一、视交叉上核：哺乳动物的昼夜主钟' })
  const chain: Array<[string, string, string]> = [
    ['ipRGC（内在光敏视网膜节细胞）', C.rna, C.rnaL],
    ['视网膜下丘脑束 → SCN（每侧约一万、双侧约两万神经元）', C.dna, C.dnaL],
    ['室旁核（PVN）→ 颈上神经节', C.acc, C.accL],
    ['松果体：暗期分泌褪黑素（光亮则抑制）', C.pro, C.proL],
  ]
  chain.forEach(([name, c, cl], i) => {
    const y = 210 + i * 70
    b.rect(70, y, 560, 52, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.8, rx: 9 })
    b.ctext(350, y + 32, name, { size: 12, weight: 700, fill: C.ink })
    if (i < chain.length - 1) b.arrow(350, y + 52, 350, y + 70, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  })
  b.wtext(60, 522, '光是最强的对时信号（zeitgeber）：黄昏的褪黑素上升标记生物学夜晚——盲人失去光对时，节律逐日漂移。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、时钟基因负反馈环 ============
  b.panel(710, 132, 660, 430, { title: '二、时钟基因：耗时约 24 小时的分子负反馈' })
  b.rect(740, 210, 270, 74, { fill: C.dnaL, fillOp: 0.5, stroke: C.dna, sw: 2, rx: 9 })
  b.ctext(875, 240, 'CLOCK–BMAL1', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(875, 262, '驱动 per 与 cry 转录', { size: 11, fill: C.sub })
  b.arrow(1010, 247, 1070, 247, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  b.rect(1070, 210, 270, 74, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 2, rx: 9 })
  b.ctext(1205, 240, 'PER / CRY 蛋白', { size: 13, weight: 700, fill: C.rnaD })
  b.ctext(1205, 262, '累积 → 延迟入核', { size: 11, fill: C.sub })
  // 反馈弧
  b.path('M1205,284 C1205,360 875,360 875,284', { stroke: C.bad, sw: 2.4, dash: '8 5', marker: 'bad' })
  b.ctext(1040, 372, '入核后抑制 CLOCK–BMAL1（负反馈）', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(740, 400, '转录 → 翻译 → 入核 → 抑制 → 降解重启：环路一周耗时约 24 小时；外周器官各有钟，由进食与代谢信号对时。', { size: 11, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(740, 460, '时差与轮班：中枢钟被光快速重置、外周钟跟得慢——「肚子还留在上个时区」。', { size: 11, weight: 700, fill: C.mute, maxW: 590, lh: 15 })

  // ============ 三、整夜睡眠结构（hypnogram） ============
  b.panel(30, 578, 690, 396, { title: '三、整夜睡眠结构：约 4–6 个周期、每周期约 90 分钟' })
  // 分层参考线与标签
  const rows: Array<[string, number]> = [['清醒', 650], ['REM', 682], ['N1', 714], ['N2', 746], ['N3', 778]]
  rows.forEach(([label, y]) => {
    b.line(130, y, 690, y, { stroke: C.faint, sw: 1, dash: '3 5', opacity: 0.6 })
    b.etext(124, y + 14, label, { size: 11, fill: C.sub, weight: 600 })
  })
  // 主阶梯（NREM + 清醒转换）
  b.polyline([
    [90, 650], [90, 714], [107, 714], [107, 746], [132, 746], [132, 778], [182, 778], [182, 746], [207, 746], [207, 682],
    [240, 714], [248, 714], [248, 746], [273, 746], [273, 778], [323, 778], [323, 746], [348, 746], [348, 682],
    [390, 714], [400, 714], [400, 746], [431, 746], [431, 778], [456, 778], [456, 746], [465, 746], [465, 682],
    [540, 746], [573, 746], [573, 682], [665, 682], [690, 650],
  ], { stroke: C.dna, sw: 2.6 })
  // REM 段（红色加粗覆盖）
  b.line(207, 682, 240, 682, { stroke: C.bad, sw: 4 })
  b.line(348, 682, 390, 682, { stroke: C.bad, sw: 4 })
  b.line(465, 682, 540, 682, { stroke: C.bad, sw: 4 })
  b.line(573, 682, 665, 682, { stroke: C.bad, sw: 4 })
  // x 轴
  b.line(90, 800, 690, 800, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const xt: Array<[number, string]> = [[90, '0'], [240, '90'], [390, '180'], [540, '270'], [690, '360 分钟']]
  xt.forEach(([x, label]) => {
    b.line(x, 800, x, 806, { stroke: C.sub, sw: 1.6 })
    b.ctext(x, 824, label, { size: 10.5, fill: C.mute })
  })
  // 周期分隔虚线
  ;[240, 390, 540].forEach(x => b.line(x, 640, x, 800, { stroke: C.faint, sw: 1.2, dash: '4 6', opacity: 0.8 }))
  b.ctext(165, 632, '周期 1', { size: 10.5, weight: 700, fill: C.mute })
  b.ctext(315, 632, '周期 2', { size: 10.5, weight: 700, fill: C.mute })
  b.ctext(465, 632, '周期 3', { size: 10.5, weight: 700, fill: C.mute })
  b.ctext(615, 632, '周期 4', { size: 10.5, weight: 700, fill: C.mute })
  b.ctext(595, 664, '← 后半夜 REM 递增', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(60, 862, '前半夜 N3（慢波）富集、后半夜 REM 递增——两类睡眠各有独立的稳态需求：N3 守突触稳态与分泌，REM 守情绪与记忆整合。', { size: 11, fill: C.sub, maxW: 640, lh: 16 })
  b.wtext(60, 916, '整夜大致比例：N1 约 5%、N2 约 45–55%、N3 约 15–20%、REM 约 20–25%；增龄以 N3 与 REM 比例缩减为特征。', { size: 11, fill: C.mute, maxW: 640, lh: 15 })

  // ============ 四、EEG 频段与睡眠压力 ============
  b.panel(750, 578, 620, 396, { title: '四、EEG 频段、腺苷压力与睡眠的功能' })
  b.table(780, 640, 560, {
    headers: ['频段', '频率范围', '典型状态 / 睡眠标志'],
    colW: [80, 130, 350],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['β 波', '约 13–30 Hz', '清醒警觉、主动思维'],
      ['α 波', '约 8–13 Hz', '清醒放松、闭眼'],
      ['θ 波', '约 4–8 Hz', 'N1 浅睡与困倦（顶尖波）'],
      ['δ 波', '约 0.5–4 Hz', 'N3 慢波深睡（纺锤波与 K 复合波属 N2）'],
    ],
  })
  b.rect(780, 832, 560, 92, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.wtext(800, 854, '腺苷随清醒时长累积构成睡眠压力（「睡眠债」）；咖啡因拮抗腺苷受体而掩蔽睡意——并未偿还债务。突触稳态假说：慢波睡眠整体下调突触强度，与海马-皮层耦合的记忆巩固（LTP 转存）相辅相成。', { size: 11, fill: C.sub, maxW: 520, lh: 16 })
}

export default scene({
  title: '生物节律与睡眠-觉醒：SCN 主钟、分子钟与整夜周期结构',
  subtitle: '每周期约 90 分钟、每夜约 4–6 个；前半夜 N3 富集、后半夜 REM 递增；腺苷累积构成睡眠压力',
  draw,
})
