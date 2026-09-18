// mi ch9-s2 微生物之间的相互作用（39-f 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、互作关系利害矩阵 ============
  b.panel(30, 132, 660, 308, { title: '一、互作关系的利害矩阵：按双方得失定位七类关系' })

  // 3×3 矩阵（行=微生物甲得失，列=微生物乙得失）
  const gx = 150, gy = 216, cw = 170, chh = 72
  const colHead = ['乙受害', '乙无影响', '乙获利']
  colHead.forEach((h, i) => b.ctext(gx + i * cw + cw / 2, 200, h, { size: 11, weight: 700, fill: C.sub }))
  const rowHead = ['甲受害', '甲无影响', '甲获利']
  rowHead.forEach((h, i) => b.ctext(gx - 42, gy + i * chh + chh / 2, h, { size: 11, weight: 700, fill: C.sub }))

  const cells: Array<[number, number, string, string, string, string]> = [
    [0, 0, '竞争', '两菌争夺同一营养与空间', C.warn, C.warnL],
    [0, 1, '拮抗', '抗生素抑制他菌生长', C.bad, C.badL],
    [0, 2, '寄生', '噬菌体 · 蛭弧菌', C.pro, C.proL],
    [1, 0, '拮抗', '被对方产物抑制', C.bad, C.badL],
    [1, 1, '中性', '共处互不影响', C.mute, C.panelB],
    [1, 2, '偏利共栖', '好氧菌耗氧为厌氧菌开路', C.acc, C.accL],
    [2, 0, '捕食', '原生动物捕食细菌', C.enz, C.enzL],
    [2, 1, '偏利共栖', '一方获利一方无害', C.acc, C.accL],
    [2, 2, '互惠共生', '地衣：藻供碳、菌供水矿质', C.ok, C.okL],
  ]
  cells.forEach(([r, c, t, s, cc, cl]) => {
    const x = gx + c * cw, y = gy + r * chh
    b.rect(x, y, cw, chh, { fill: cl, fillOp: 0.5, stroke: cc, sw: 1.4, rx: 7 })
    b.ctext(x + cw / 2, y + 26, t, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(x + cw / 2 - 76, y + 42, s, { size: 9.5, fill: C.sub, maxW: 152, lh: 12 })
  })
  b.ctext(360, 468, '利害矩阵须能就实例辨认——「专性程度」另成一维：互惠共生可专性（地衣），偏利共栖多不专性。', { size: 10, fill: C.mute })

  // ============ 二、生物膜 ============
  b.panel(710, 132, 660, 308, { title: '二、生物膜：微生物的「城市」——梯度微生境分层' })

  // 流体区
  b.rect(730, 190, 620, 60, { fill: C.accL, fillOp: 0.35, stroke: 'none' })
  b.ctext(1040, 210, '流动液相（营养与 O₂ 来源）', { size: 10, fill: C.accD })
  // 蘑菇塔
  const towers: Array<[number, number]> = [[810, 78], [950, 105], [1080, 82], [1210, 100]]
  towers.forEach(([cx, r]) => {
    b.ellipse(cx, 330 - r / 2, r * 0.62, r / 2, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.5 })
    b.rect(cx - r * 0.45, 330 - r * 0.18, r * 0.9, r * 0.18, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.2 })
  })
  // 基质块
  b.rect(730, 330, 620, 76, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6 })
  // 细菌点：上层好氧（dna），下层厌氧（pro）
  const upB: Array<[number, number]> = [[790, 300], [850, 288], [920, 306], [980, 292], [1050, 302], [1110, 288], [1180, 300], [1240, 292], [820, 316], [1010, 314], [1150, 318]]
  upB.forEach(([x, y]) => b.bacterium(x, y, 26, 10, { shape: 'rod', fill: C.dna, stroke: C.dnaD }))
  const dnB: Array<[number, number]> = [[780, 350], [845, 362], [915, 352], [975, 366], [1040, 354], [1105, 364], [1175, 352], [1235, 366], [810, 384], [945, 386], [1080, 384], [1210, 386]]
  dnB.forEach(([x, y]) => b.bacterium(x, y, 24, 9, { shape: 'rod', fill: C.pro, stroke: C.proD }))
  // 基底表面
  b.line(730, 406, 1350, 406, { stroke: C.sub, sw: 3 })
  b.ctext(1040, 424, '固体表面（植入物 · 管道 · 组织）', { size: 10, fill: C.mute })
  // 梯度箭头
  b.arrow(1300, 250, 1300, 396, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.wtext(1308, 300, 'O₂ 递减', { size: 10, weight: 700, fill: C.accD, maxW: 50, lh: 13 })
  b.ctext(800, 258, '好氧层', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(800, 376, '厌氧层', { size: 10.5, weight: 700, fill: C.proD })
  b.wtext(730, 438, '胞外多糖基质构筑梯度微生境并分层；耐药性较浮游态提高百倍以上——植入物感染与工业腐蚀的元凶，也是污水处理的利器。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、群体感应 ============
  b.panel(30, 452, 1340, 270, { title: '三、群体感应：细胞间的分子语言（费氏弧菌 LuxI/LuxR-AHL 范式）' })

  // 左：机制图
  b.bacterium(180, 540, 110, 36, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  b.bacterium(560, 540, 110, 36, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  // LuxI 产 AHL
  b.tag(180, 588, 'LuxI 合成 AHL', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 7 })
  b.arrow(180, 578, 180, 560, { stroke: C.enz, sw: 2, marker: 'enz' })
  // AHL 扩散小圆
  const ahls: Array<[number, number, number]> = [[270, 520, 7], [320, 500, 5], [370, 530, 7], [420, 505, 5], [470, 525, 7], [300, 560, 5], [400, 560, 5], [450, 545, 6]]
  ahls.forEach(([x, y, r]) => b.circle(x, y, r, { fill: C.warn, fillOp: 0.5, stroke: C.warn, sw: 1 }))
  b.ctext(370, 486, 'AHL 自由扩散进出细胞（N-酰基高丝氨酸内酯，1983 年鉴定）', { size: 10, fill: C.mute })
  // LuxR-AHL 启动
  b.tag(560, 588, 'LuxR-AHL 结合并启动 lux 操纵子', { fill: C.dnaL, stroke: C.dna, size: 10, weight: 700, tfill: C.dnaD, pad: 7 })
  b.arrow(560, 578, 560, 560, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(560, 618, '密度超过阈值 → 发光基因同步开启', { size: 10.5, weight: 700, fill: C.dnaD })

  // 右：Hastings 实验曲线
  const ax = 900, ay = 660, aw = 330, ah = 140
  b.axis(ax, ay, aw, ah, {
    xlabel: '培养时间', ylabel: '发光强度',
    xticks: [[0.5, '对数后期'], [0.95, '稳定期']],
    yticks: [[0.05, '低'], [0.95, '高']],
  })
  // 稀释培养：延迟发光
  b.curve(ax, ay, aw, ah, [
    [0, 0.02], [0.3, 0.03], [0.5, 0.06], [0.65, 0.2], [0.78, 0.55], [0.9, 0.85], [1, 0.92],
  ], { stroke: C.acc, sw: 2.8 })
  // 加旧培养基：立即发光
  b.curve(ax, ay, aw, ah, [
    [0, 0.02], [0.1, 0.45], [0.2, 0.8], [0.4, 0.9], [1, 0.93],
  ], { stroke: C.warn, sw: 2.8, dash: '8 5' })
  b.legend(920, 520, [['稀释培养：延迟发光', C.acc], ['加入「养过菌」旧培养基：立即发光', C.warn]], { size: 10, gap: 10 })
  b.wtext(900, 690, '1960–70 年代 Hastings 与 Nealson：信号分子可扩散、可积累——密度感知；AI-2 为种间通用信号。', { size: 10, fill: C.mute, maxW: 420, lh: 14 })

  // ============ 四、竞争排斥与群体感应淬灭 ============
  b.panel(30, 734, 1340, 246, { title: '四、竞争排斥原理与群体感应淬灭' })

  // 左：生态位曲线
  b.text(60, 770, '竞争排斥原理', { size: 13, weight: 700, fill: C.warn })
  b.axis(60, 890, 260, 90, {
    xlabel: '生态位维度（如温度）', ylabel: '适应度',
    xticks: [[0.25, '低温'], [0.75, '高温']],
    yticks: [[0.05, '低'], [0.95, '高']],
  })
  b.curve(60, 890, 260, 90, [[0.05, 0.05], [0.3, 0.95], [0.55, 0.3], [0.8, 0.05]], { stroke: C.dna, sw: 2.6 })
  b.curve(60, 890, 260, 90, [[0.2, 0.05], [0.45, 0.3], [0.7, 0.95], [0.95, 0.05]], { stroke: C.pro, sw: 2.6 })
  b.ctext(190, 786, '重叠带 → 排斥', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(60, 928, '生态位重叠的种群不能稳定共存——理解群落结构与菌群演替的基础；重叠过大者或被排斥、或演化分异。', { size: 10, fill: C.sub, maxW: 280, lh: 14 })

  // 右：淬灭
  b.rect(360, 762, 430, 190, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 9 })
  b.text(380, 788, '群体感应淬灭（Q quenching）', { size: 13, weight: 700, fill: C.ok })
  b.wtext(380, 814, '以降解信号分子（AHL 内酯酶等）或竞争受体实现「不杀菌的抗毒力」——病原不启动毒力因子而非被杀灭。', { size: 11, fill: C.sub, maxW: 390, lh: 16 })
  b.wtext(380, 872, '选择压低、不易诱发耐药——对抗耐药时代的新思路。', { size: 11, weight: 700, fill: C.ok })

  // 实例表
  b.table(810, 762, 540, {
    headers: ['关系', '双方得失', '实例'],
    colW: [110, 110, 320],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['互惠共生', '+ +', '地衣（藻供碳、菌供水与矿质）'],
      ['偏利共栖', '0 +', '好氧菌耗氧为厌氧菌开路'],
      ['竞争', '− −', '重叠生态位种群'],
      ['拮抗', '− 0', '抗生素抑制他菌'],
      ['寄生', '− +', '噬菌体、蛭弧菌'],
      ['捕食', '− +', '原生动物捕食细菌'],
    ],
  })
}

export default scene({
  title: '微生物之间的相互作用：利害矩阵、生物膜与群体感应',
  subtitle: '互作按利害分互惠共生、偏利、竞争、拮抗、寄生与捕食；生物膜耐药较浮游态提高百倍以上；群体感应以 LuxI/LuxR-AHL 为范式（1983 年鉴定 AHL）；淬灭不杀菌而抗毒力',
  draw,
})
