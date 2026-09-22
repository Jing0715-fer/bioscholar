// em ch4-s3 低温对辐射损伤的抑制（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、约 100 K 的三条收益 ============
  b.panel(30, 132, 1340, 300, { title: '一、约 100 K 的三条收益：损伤被收紧的三条机制' })
  const gain = (x: number, t: string, lines: string[], fill: string, stroke: string, tfill: string) => {
    b.rect(x, 186, 396, 110, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 198, 212, t, { size: 13.5, weight: 700, fill: tfill })
    lines.forEach((s, i) => b.ctext(x + 198, 238 + i * 19, s, { size: 10.5, fill: C.sub }))
  }
  gain(52, '① 自由基冻结', ['OH· 与水合电子迁移率骤降', '被钉死在生成位点周围数纳米', '「远程打击」退化为「就地滋扰」'], C.accL, C.acc, C.accD)
  gain(472, '② 挥发被抑制', ['损伤产物不再脱附逃逸', '质量损失近乎停止', '样品的元素账面保持稳定'], C.dnaL, C.dna, C.dnaD)
  gain(892, '③ 刻蚀停摆', ['束致溅射刻蚀在低温下', '退出竞争'], C.okL, C.ok, C.okD)
  // 自由基扩散半径对比：常温 vs 100 K
  b.ctext(190, 320, '常温液态水（示意）', { size: 11, weight: 700, fill: C.sub })
  b.circle(190, 372, 46, { stroke: C.bad, sw: 1.5, dash: '5 4' })
  b.ellipse(166, 356, 15, 11, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ellipse(216, 386, 13, 10, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ellipse(152, 390, 12, 9, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  ;[[205, 352], [228, 368], [162, 372], [186, 396], [208, 380], [178, 340]].forEach(([x, y]) => b.circle(x, y, 3, { fill: C.enz }))
  b.ctext(190, 424, 'OH· 纳秒内攻击数纳米内分子', { size: 9.5, fill: C.badD })
  b.ctext(480, 320, '约 100 K 玻璃冰（示意）', { size: 11, weight: 700, fill: C.sub })
  b.ellipse(456, 356, 15, 11, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ellipse(506, 386, 13, 10, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ellipse(442, 390, 12, 9, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.circle(475, 362, 10, { stroke: C.enz, sw: 1.4, dash: '3 3' })
  ;[[472, 360], [477, 365], [473, 366]].forEach(([x, y]) => b.circle(x, y, 2.5, { fill: C.enz }))
  b.ctext(480, 424, '迁移率可忽略：损伤收缩到生成点附近', { size: 9.5, fill: C.dnaD })
  // 可用剂量梯子（低温保护因子）
  b.stairs(680, 306, 630, 96, ['室温：个位数', '约 100 K：约 20', '运动校正：40–60'], { fill: C.accL, stroke: C.acc, size: 12 })
  b.ctext(995, 422, '低温保护因子约一个数量级——全部来自物理而非化学（单位 e^{-}/Å^{2}）', { size: 10.5, fill: C.sub })

  // ============ 二、损伤速率对比 ============
  b.panel(30, 456, 700, 300, { title: '二、损伤速率对比：三个温度挡位的高分辨信号衰减' })
  b.axis(70, 700, 560, 190, {
    grid: false, title: '高分辨信号保留（虚线：Henderson 极限 20 e^{-}/Å^{2}）',
    xticks: [[0, '0'], [0.33, '20'], [0.67, '40'], [1, '60 e^{-}/Å^{2}']],
    yticks: [[1, '1.0'], [0.5, '0.5'], [0, '0']],
  })
  b.rect(444, 510, 186, 190, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.2, dash: '4 3' })
  b.ctext(537, 528, '运动校正时代 40–60', { size: 10, weight: 700, fill: C.okD })
  b.line(257, 700, 257, 510, { stroke: C.bad, sw: 1.8, dash: '5 4' })
  b.curve(70, 700, 560, 190, [[0, 1], [0.05, 0.8], [0.1, 0.62], [0.17, 0.44], [0.25, 0.3], [0.33, 0.2], [0.5, 0.11], [0.7, 0.06], [1, 0.03]], { stroke: C.bad, sw: 2.6, smooth: true })
  b.curve(70, 700, 560, 190, [[0, 1], [0.15, 0.96], [0.33, 0.9], [0.5, 0.83], [0.67, 0.75], [0.83, 0.66], [1, 0.58]], { stroke: C.acc, sw: 2.6, smooth: true })
  b.curve(70, 700, 560, 190, [[0, 1], [0.2, 0.98], [0.4, 0.94], [0.6, 0.9], [0.8, 0.86], [1, 0.8]], { stroke: C.dna, sw: 2.2, smooth: true })
  b.legend(90, 735, [['室温', C.bad], ['约 100 K', C.acc], ['液氦 4–20 K', C.dna]], { size: 12 })
  b.wtext(420, 745, '最先失去的恰是最想要的：高分辨信息最先衰减', { size: 10, fill: C.sub, maxW: 230, lh: 14 })

  // ============ 三、液氮与液氦之争的落幕 ============
  b.panel(750, 456, 620, 300, { title: '三、液氮与液氦之争的落幕：约 100 K 成为事实标准' })
  b.table(770, 500, 580, {
    headers: ['维度', '液氮区（约 100 K）', '液氦区（4–20 K）'],
    colW: [120, 230, 230], rowH: 33, fontSize: 10.5,
    rows: [
      ['损伤抑制', '拿走绝大部分收益', '边际改善（至多约两倍）'],
      ['温度稳定性', '平稳、漂移易控', '沸腾扰动、漂移棘手'],
      ['运行成本', '常规（液氮日补）', '昂贵（需氦回收系统）'],
      ['生态地位', 'cryo-EM 事实标准', '少数专门研究'],
    ],
  })
  b.tag(1060, 700, '减速带而非免死金牌：被冻结的自由基仍在原位随剂量累积', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10.5, weight: 700, pad: 9 })
  b.wtext(770, 730, '无束流的深低温储存下，自由基既不自愈也不扩大——冷库里的样品可存数年而剂量账面不动，可分批采集、跨机时整合。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })

  // ============ 四、全链路低温：红线与两条防线 ============
  b.panel(30, 766, 1340, 212, { title: '四、全链路低温：反玻璃化红线与防霜防污染' })
  b.text(70, 828, '从制样到曝光的温度链（K）', { size: 12.5, weight: 700, fill: C.sub })
  b.line(70, 880, 680, 880, { stroke: C.sub, sw: 2.5, marker: 'ink' })
  b.rect(390, 866, 101, 28, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.circle(141, 880, 5, { fill: C.acc })
  b.ctext(141, 858, '77 K 液氮', { size: 9.5, fill: C.accD })
  b.circle(238, 880, 5, { fill: C.dna })
  b.ctext(238, 904, '约 100 K 冷台', { size: 9.5, fill: C.dnaD })
  b.circle(364, 880, 5, { fill: C.ok })
  b.ctext(364, 858, '130 K 链路上限', { size: 9.5, fill: C.okD })
  b.circle(491, 880, 5, { fill: C.bad })
  b.ctext(545, 858, '继续退火转六方冰', { size: 9.5, fill: C.badD })
  b.ctext(440, 904, '136–160 K 反玻璃化红线', { size: 10, weight: 700, fill: C.badD })
  b.ctext(440, 920, '数十秒内不可逆重结晶为立方冰', { size: 9.5, fill: C.sub })
  b.wtext(70, 948, '任何一环漏热（室温空气的短暂闪曝、传输卡顿）都会事后以冰晶环的形式显形；束流还会压低有效反玻璃化阈值——「束致结晶」一并纳入剂量管理。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  b.rect(720, 792, 630, 84, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(736, 816, '霜：防线在外（环境水汽）', { size: 12, weight: 700, fill: C.badD })
  b.wtext(736, 836, '冷载网上凝华成六方冰晶（六角或星形暗色颗粒），肉眼即见、无法挽救；工程解：液氮屏蔽罩、带盖转移盒、干燥气氛操作箱。', { size: 10, fill: C.sub, maxW: 595, lh: 14 })
  b.rect(720, 884, 630, 84, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 8 })
  b.text(736, 908, '污染：防线在内（低温悖论）', { size: 12, weight: 700, fill: C.warnD })
  b.wtext(736, 928, '冷样品像微型冷阱，持续捕集镜筒残余碳氢，束下污染可比室温更快（形貌为均匀增厚的无定形碳膜）；对策：冷指加等离子清洗。', { size: 10, fill: C.sub, maxW: 595, lh: 14 })
}

export default scene({
  title: '低温对辐射损伤的抑制：100 K 的红利与红线',
  subtitle: '三条收益把可用剂量从室温个位数 e^{-}/Å^{2} 提升至约 20（运动校正时代 40–60）；液氦增益至多约两倍；反玻璃化红线 136–160 K，链路低于约 130 K',
  draw,
})
