// ph ch4-s2 感觉总原则与躯体感觉上行通路
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、换能、强度—频率编码与适应 ============
  b.panel(30, 132, 660, 420, { title: '一、感受器换能：强度 → 放电频率（编码）与适应' })
  const rows = [196, 240, 284]
  const bars = [16, 28, 40]
  const rates = [56, 28, 14]
  const tags3 = ['弱', '中', '强']
  rows.forEach((y, i) => {
    b.rect(62, y - bars[i] / 2, 10, bars[i], { fill: C.accL, stroke: C.acc, sw: 1.4 })
    b.line(88, y, 620, y, { stroke: C.faint, sw: 1 })
    for (let x = 100; x <= 610; x += rates[i]) b.line(x, y, x, y - 14, { stroke: C.ink, sw: 1.6 })
    b.text(50, y + 4, tags3[i], { size: 10.5, fill: C.sub })
  })
  b.text(60, 322, '强度编码：刺激越强 → 感受器电位越大 → 达阈频率越高（单根纤维以频率而非幅度编码强度）', { size: 10.5, fill: C.sub })
  // 适应曲线（下半）
  b.text(100, 366, '感受器电位 / 放电频率', { size: 10.5, weight: 600, fill: C.sub })
  b.arrow(90, 500, 90, 350, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(90, 500, 620, 500, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(230, 342, 380, 16, { fill: C.accL, stroke: C.acc, sw: 1.2 })
  b.ctext(420, 354, '持续刺激', { size: 10, fill: C.accD })
  b.polyline([[90, 484], [230, 484], [238, 392], [258, 430], [290, 458], [340, 468], [610, 468], [616, 484]], { stroke: C.bad, sw: 2.4 })
  b.polyline([[90, 484], [230, 484], [238, 392], [280, 420], [360, 432], [610, 436], [616, 484]], { stroke: C.dna, sw: 2.4 })
  b.text(380, 414, '慢适应（张力型）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(380, 448, '快适应（相位型）', { size: 10.5, weight: 700, fill: C.badD })
  b.ctext(355, 522, '刺激持续时间', { size: 12, weight: 600, fill: C.sub })
  b.text(60, 540, '快：环层小体（振动）、梅斯纳小体；慢：梅克尔盘、鲁菲尼末梢（持续压觉/牵张）', { size: 10.5, fill: C.sub })

  // ============ 二、感受野：中心—周围拮抗 ============
  b.panel(710, 132, 660, 420, { title: '二、感受野与侧抑制：对比的放大' })
  b.circle(830, 244, 62, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 2 })
  b.circle(830, 244, 30, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(830, 252, '+', { size: 22, weight: 700, fill: C.okD })
  for (const [dx, dy] of [[46, 0], [-46, 0], [0, 46], [0, -46]]) b.ctext(830 + dx, 248 + dy, '−', { size: 15, weight: 700, fill: C.badD })
  b.ctext(830, 334, 'ON 中心型', { size: 11, weight: 700, fill: C.sub })
  b.circle(1090, 244, 62, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 2 })
  b.circle(1090, 244, 30, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(1090, 252, '−', { size: 22, weight: 700, fill: C.badD })
  for (const [dx, dy] of [[46, 0], [-46, 0], [0, 46], [0, -46]]) b.ctext(1090 + dx, 248 + dy, '+', { size: 15, weight: 700, fill: C.okD })
  b.ctext(1090, 334, 'OFF 中心型', { size: 11, weight: 700, fill: C.sub })
  b.text(730, 386, '感受野大小与分辨率（两点辨别阈）：', { size: 11, weight: 700, fill: C.ink })
  b.circle(756, 428, 9, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.text(776, 432, '指尖感受野小——两点阈约 2–3 mm', { size: 10.5, fill: C.sub })
  b.circle(778, 472, 26, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.text(814, 476, '背部感受野大——两点阈约 40 mm', { size: 10.5, fill: C.sub })
  b.wtext(730, 516, '中心—周围拮抗（侧抑制）放大局部对比：明暗边界反差被增强，即马赫带现象；传入通路每一级都保持这一组织方式', { size: 10.5, fill: C.sub, maxW: 610, lh: 18 })

  // ============ 三、两大上行通路 ============
  b.panel(30, 572, 660, 412, { title: '三、两大上行通路：交叉水平决定损伤格局' })
  b.text(52, 620, 'A 背柱—内侧丘系：精细触觉、振动、本体觉（交叉在延髓）', { size: 10.5, weight: 700, fill: C.dnaD })
  const laneA: [number, string, string][] = [
    [52, '机械感受器', '精细触觉·本体'],
    [144, 'DRG 一级', '神经元'],
    [236, '同侧后索', '薄束/楔束'],
    [328, '延髓核团', '换元·交叉'],
    [420, '内侧丘系', '对侧上行'],
    [512, '丘脑 VPL', '（三级）'],
    [604, '中央后回', 'S1（3/1/2）'],
  ]
  laneA.forEach(([x, l1, l2]) => {
    b.rect(x, 630, 78, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 6 })
    b.ctext(x + 39, 643, l1, { size: 9.5, weight: 700, fill: C.dnaD })
    b.ctext(x + 39, 658, l2, { size: 9, fill: C.sub })
  })
  for (let i = 0; i < 6; i++) b.arrow(laneA[i][0] + 78, 648, laneA[i + 1][0] - 2, 648, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.line(348, 656, 426, 640, { stroke: C.bad, sw: 1.8, dash: '4 3' })
  b.line(348, 640, 426, 656, { stroke: C.bad, sw: 1.8, dash: '4 3' })
  b.text(52, 688, '交叉位置：延髓（薄束核/楔束核换元后立即交叉）', { size: 10, fill: C.badD })
  b.text(52, 716, 'B 脊髓丘脑束：痛、温、粗触觉（入髓后 1–2 节段内交叉）', { size: 10.5, weight: 700, fill: C.warnD })
  const laneB: [number, string, string][] = [
    [52, '游离神经末梢', '痛/温感受器'],
    [144, 'DRG 一级', '神经元'],
    [236, '入髓即交叉', '中央管前方'],
    [328, '对侧前外侧', '索上行'],
    [420, '丘脑 VPL', '腹后核'],
    [512, '中央后回', 'S1'],
  ]
  laneB.forEach(([x, l1, l2]) => {
    b.rect(x, 726, 78, 36, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 6 })
    b.ctext(x + 39, 739, l1, { size: 9.5, weight: 700, fill: C.warnD })
    b.ctext(x + 39, 754, l2, { size: 9, fill: C.sub })
  })
  for (let i = 0; i < 5; i++) b.arrow(laneB[i][0] + 78, 744, laneB[i + 1][0] - 2, 744, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.wtext(52, 788, '脊髓半切（Brown-Séquard）综合征：同侧伤面以下精细触觉与本体觉丧失（后索），对侧痛温觉丧失（脊髓丘脑束）——两条通路交叉水平不同是定位诊断的解剖基础', { size: 10.5, fill: C.sub, maxW: 610, lh: 18 })
  b.tag(360, 900, 'S1 分区：3a 本体觉 · 3b 慢适应 · 1 快适应 · 2 振动/压觉', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 10 })
  b.tag(360, 948, 'S1 → S2 → 后顶叶：从分辨到多模态整合', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11, weight: 700, pad: 10 })

  // ============ 四、皮层体感矮人 ============
  b.panel(710, 572, 660, 412, { title: '四、皮层体感矮人：面积 ∝ 感受器密度' })
  const segs: [string, number, number][] = [
    ['趾/足', 22, 9.5], ['腿/髋', 28, 9.5], ['躯干', 28, 9.5], ['臂/肘', 22, 9.5], ['前臂', 20, 9.5],
    ['手', 56, 14], ['脸', 30, 10.5], ['唇', 30, 12.5], ['舌·咽', 36, 12.5],
  ]
  let sy = 616
  segs.forEach(([label, h, size], i) => {
    const fill = i === 5 ? C.badL : (i === 7 || i === 8) ? C.enzL : C.accL
    const stroke = i === 5 ? C.bad : (i === 7 || i === 8) ? C.enz : C.acc
    b.rect(800, sy, 60, h, { fill, stroke, sw: 1.4 })
    const tfill = i === 5 ? C.badD : (i === 7 || i === 8) ? C.enzD : C.sub
    b.text(870, sy + h / 2 + 4, label, { size, weight: i >= 5 ? 700 : 400, fill: tfill })
    sy += h
  })
  b.ctext(830, 972, '自趾（内上）至舌（外下）', { size: 9.5, fill: C.mute })
  b.wtext(960, 640, '中央后回（S1，Brodmann 3/1/2 区）躯体定位：手、唇、舌的皮层代表区远大于其体表面积占比——投射面积正比于感受器密度与辨别敏锐度，而非皮肤面积', { size: 11, fill: C.sub, maxW: 380, lh: 18 })
  b.tag(1160, 744, '畸变但连续：相邻体部在皮层仍相邻', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11, weight: 700, pad: 10 })
  b.wtext(960, 800, '皮层可塑性：长期训练（盲文阅读、乐器）扩大对应代表区；截肢后邻区侵入原代表区 → 幻肢觉', { size: 10.5, fill: C.sub, maxW: 380, lh: 18 })
  b.wtext(960, 880, '丘脑 VPL 携对侧躯体的本体与触觉、VPM 携头面部——投射按身体图逐级保形排列', { size: 10.5, fill: C.sub, maxW: 380, lh: 18 })
}

export default scene({
  title: '感觉总原则与躯体感觉：两条上行通路',
  subtitle: '刺激强度以放电频率编码；快适应感受器报告变化、慢适应报告持续状态；精细触觉/本体觉走背柱—内侧丘系（延髓交叉），痛温觉走脊髓丘脑束（入髓即交叉），指尖两点阈约 2–3 mm',
  draw,
})
