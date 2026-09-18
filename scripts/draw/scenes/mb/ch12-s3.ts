// mb ch12-s3 抑癌基因：Rb、APC 与 BRCA（39-b2 收尾轮）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、两次打击假说 ============
  b.panel(30, 132, 660, 280, { title: '一、两次打击假说（Knudson，1971）：视网膜母细胞瘤' })
  b.tag(556, 170, 'RB1 克隆（1986）证实', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 7 })
  const allele = (x: number, y: number, s: string, bad: boolean) => {
    b.rect(x, y, 62, 26, { fill: bad ? C.badL : C.dnaL, stroke: bad ? C.bad : C.dna, sw: 1.6, rx: 4 })
    b.ctext(x + 31, y + 17, s, { size: 10.5, weight: 700, fill: bad ? '#991b1b' : C.dnaD })
  }
  // 家族性
  b.text(46, 210, '家族性（生殖系第一击）', { size: 12, weight: 700, fill: C.ink })
  allele(46, 220, 'Rb', false)
  allele(112, 220, 'rb×', true)
  b.ctext(110, 262, '出生时每个细胞已带一个失活拷贝', { size: 9.5, fill: C.mute })
  b.arrow(184, 233, 232, 233, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(208, 216, '体细胞第二击', { size: 9, weight: 600, fill: C.bad })
  allele(236, 220, 'rb×', true)
  allele(302, 220, 'rb×', true)
  b.tag(500, 233, '早发 · 多发 · 双侧', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: '#991b1b', pad: 7 })
  b.wtext(46, 288, '第一次打击经生殖系遗传（亲代传来）；视网膜任一细胞再发生一次体细胞打击即发病——统计学曲线完美拟合二次打击模型。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // 散发
  b.text(46, 330, '散发（两次体细胞打击）', { size: 12, weight: 700, fill: C.ink })
  allele(46, 340, 'Rb', false)
  allele(112, 340, 'Rb', false)
  b.ctext(110, 382, '出生时两拷贝均正常', { size: 9.5, fill: C.mute })
  b.arrow(184, 353, 232, 353, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(208, 336, '两次独立打击', { size: 9, weight: 600, fill: C.bad })
  allele(236, 340, 'rb×', true)
  allele(302, 340, 'rb×', true)
  b.tag(500, 353, '晚发 · 单发', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 7 })
  b.wtext(46, 408, '同一细胞内连续两次独立的失活事件概率低——故散发病例晚发、单发。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、Rb–E2F 守门开关 ============
  b.panel(710, 132, 660, 280, { title: '二、Rb–E2F：G1/S 的守门开关（低磷酸化 Rb 扣押 E2F）' })
  b.rect(726, 186, 230, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(841, 212, 'Rb（低磷酸化）═ E2F', { size: 11.5, weight: 700, fill: C.dnaD })
  b.line(966, 208, 1010, 208, { stroke: C.bad, sw: 2 })
  b.line(1010, 194, 1010, 222, { stroke: C.bad, sw: 2.5 })
  b.ctext(1048, 200, '扣押：抑制转录', { size: 9.5, weight: 600, fill: C.bad })
  b.rect(1014, 186, 172, 44, { fill: '#ffffff', stroke: C.faint, sw: 1.3, rx: 7 })
  b.ctext(1100, 212, 'S 期基因沉默', { size: 10, weight: 600, fill: C.sub })
  b.tag(1276, 208, 'G1 期（静息）', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 7 })
  b.tag(788, 280, '有丝分裂原', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 7 })
  b.arrow(846, 280, 876, 280, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(880, 262, 150, 36, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 6 })
  b.ctext(955, 284, 'cyclin D–CDK4/6', { size: 10, weight: 600, fill: C.enzD })
  b.arrow(1030, 280, 1060, 280, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1064, 262, 140, 36, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 6 })
  b.ctext(1134, 284, 'cyclin E–CDK2', { size: 10, weight: 600, fill: C.enzD })
  b.arrow(1204, 280, 1234, 280, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1238, 262, 108, 36, { fill: '#ffffff', stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(1292, 284, 'Rb–P', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(1058, 252, '逐步磷酸化', { size: 9.5, fill: C.mute })
  b.arrow(1292, 298, 1292, 326, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(1310, 314, '释放', { size: 9, weight: 600, fill: C.proD })
  b.rect(1238, 330, 108, 36, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(1292, 352, 'E2F', { size: 11.5, weight: 700, fill: C.proD })
  b.arrow(1236, 348, 1196, 348, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.rect(1016, 330, 176, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(1104, 352, 'S 期基因激活（DNA pol · TK）', { size: 9, weight: 600, fill: C.dnaD })
  b.arrow(1014, 348, 974, 348, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.tag(906, 348, 'S 期推进', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 7 })
  b.polyline([[1292, 366], [1292, 390], [1134, 390], [1134, 300]], { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ctext(1213, 404, '正反馈：E2F → cyclin E → 更多磷酸化', { size: 9, weight: 600, fill: C.proD })
  b.wtext(726, 388, 'Rb 通路任一成员失控（cyclin D 扩增 · CDK4 突变 · p16^INK4a 缺失）均等效于 Rb 失活——多数人类肿瘤存在 Rb 通路某处失活；RB1 缺失见于视网膜母细胞瘤、骨肉瘤、小细胞肺癌。', { size: 9.5, fill: C.sub, maxW: 396, lh: 14 })

  // ============ 三、APC：Wnt 信号的刹车 ============
  b.panel(30, 432, 660, 300, { title: '三、APC：Wnt 信号的刹车（β-连环蛋白降解机器）' })
  // 静息态
  b.rect(46, 478, 300, 186, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 9 })
  b.ctext(196, 502, '静息（Wnt 关）', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(66, 514, 260, 34, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 6 })
  b.ctext(196, 536, '破坏复合体：APC·Axin·GSK3β·CK1', { size: 9, weight: 600, fill: C.enzD })
  b.arrow(196, 548, 196, 572, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.text(206, 565, '磷酸化 → 泛素化', { size: 8.5, fill: C.enzD })
  b.rect(136, 574, 120, 26, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 5 })
  b.ctext(196, 591, 'β-catenin', { size: 9.5, weight: 600, fill: C.sub })
  b.line(166, 578, 226, 596, { stroke: C.bad, sw: 2.2 })
  b.line(226, 578, 166, 596, { stroke: C.bad, sw: 2.2 })
  b.ctext(196, 622, '蛋白酶体持续降解', { size: 9, weight: 600, fill: C.bad })
  b.ctext(196, 646, '胞质 β-catenin 维持低水平', { size: 9, fill: C.mute })
  // Wnt 开
  b.rect(370, 478, 300, 186, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 9, fillOp: 0.35 })
  b.ctext(520, 502, 'Wnt 开（或 APC 失活）', { size: 11.5, weight: 700, fill: C.bad })
  b.tag(414, 531, 'Wnt', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: '#78350f', pad: 6 })
  b.rect(446, 514, 200, 34, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 6 })
  b.ctext(546, 536, 'Frizzled / LRP 受体', { size: 9.5, weight: 600, fill: C.proD })
  b.arrow(440, 531, 444, 531, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.arrow(546, 548, 546, 572, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.rect(466, 574, 160, 30, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
  b.ctext(546, 594, 'Dvl ⊣ 破坏复合体', { size: 9.5, weight: 600, fill: C.accD })
  b.arrow(546, 604, 546, 622, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(466, 624, 160, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 6 })
  b.ctext(546, 644, 'β-catenin 积累', { size: 9.5, weight: 700, fill: C.dnaD })
  b.wtext(46, 688, 'β-catenin 入核与 TCF/LEF 合作激活 c-MYC、cyclin D1——肠上皮持续接收「Wnt 开」的增殖信号。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(46, 714, 'APC 失活：家族性腺瘤性息肉病（FAP）与几乎全部散发性结直肠癌的起始事件；APC 突变 Min 小鼠为经典模型。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、BRCA1/2 与合成致死 ============
  b.panel(710, 432, 660, 300, { title: '四、BRCA1/2：同源重组守护者与合成致死' })
  b.text(726, 486, 'HR 修复机器', { size: 12.5, weight: 700, fill: C.ink })
  b.path('M726,500 Q780,460 834,500', { stroke: C.pro, sw: 3.5, fill: 'none' })
  b.ctext(780, 468, 'RAD51 丝状体（同源搜索）', { size: 9, weight: 600, fill: C.proD })
  b.line(726, 505, 766, 505, { stroke: C.dna, sw: 3 })
  b.line(794, 505, 834, 505, { stroke: C.dna, sw: 3 })
  b.line(770, 497, 790, 513, { stroke: C.bad, sw: 2 })
  b.line(770, 513, 790, 497, { stroke: C.bad, sw: 2 })
  b.ctext(780, 528, 'DSB', { size: 9, weight: 700, fill: C.bad })
  b.rect(726, 540, 190, 34, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 6 })
  b.ctext(821, 562, 'BRCA2（BRC 重复装载 RAD51）', { size: 9, weight: 600, fill: C.proD })
  b.wtext(726, 600, 'BRCA1/2 共同维持同源重组修复（HR）——基因组稳定性的「看护者」。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.wtext(726, 640, '生殖系 BRCA1/2 突变：乳腺癌 / 卵巢癌终生风险升至 40%～80%。', { size: 10.5, weight: 600, fill: C.bad, maxW: 300, lh: 15 })
  b.wtext(726, 684, 'PARP 负责 SSR / 碱基修复；其抑制 + HR 缺陷 = 双路皆断——只杀伤肿瘤细胞。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.text(1040, 486, '合成致死（奥拉帕尼）', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(1040, 516, 190, 36, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
  b.ctext(1135, 538, 'PARP：SSR / 碱基修复', { size: 9.5, weight: 600, fill: C.accD })
  b.ctext(1135, 508, '奥拉帕尼 ⊣', { size: 8.5, weight: 700, fill: C.bad })
  b.line(1090, 518, 1180, 550, { stroke: C.bad, sw: 2.5 })
  b.line(1180, 518, 1090, 550, { stroke: C.bad, sw: 2.5 })
  b.rect(1040, 606, 190, 36, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 6 })
  b.ctext(1135, 628, 'BRCA1/2：HR 修复', { size: 9.5, weight: 600, fill: C.proD })
  b.ctext(1135, 598, 'BRCA 突变 → HR 缺陷', { size: 8.5, weight: 700, fill: C.bad })
  b.line(1090, 608, 1180, 640, { stroke: C.bad, sw: 2.5 })
  b.line(1180, 608, 1090, 640, { stroke: C.bad, sw: 2.5 })
  b.rect(1040, 668, 190, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1135, 686, '合成致死', { size: 11.5, weight: 700, fill: '#991b1b' })
  b.ctext(1135, 702, '肿瘤特异性杀伤', { size: 9, fill: C.sub })
  b.arrow(1092, 552, 1096, 664, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(1178, 642, 1174, 664, { stroke: C.bad, sw: 1.8, marker: 'bad' })

  // ============ 五、看门 / 看护基因与一览表 ============
  b.panel(30, 742, 1340, 238, { title: '五、看门基因与看护基因：常见抑癌基因一览' })
  b.rect(46, 792, 480, 62, { fill: '#ffffff', stroke: C.ok, sw: 1.5, rx: 8 })
  b.text(62, 812, '看门基因（gatekeeper）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(62, 832, 'Rb · APC——直接控制增殖（限速把关），失活即启动过度增殖', { size: 10, fill: C.sub, maxW: 448, lh: 14 })
  b.rect(46, 866, 480, 62, { fill: '#ffffff', stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(62, 886, '看护基因（caretaker）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(62, 906, 'BRCA1/2 · MMR 基因——维护基因组完整性，缺陷表现为「高突变谱 + 特定肿瘤」', { size: 10, fill: C.sub, maxW: 448, lh: 14 })
  b.wtext(46, 952, '抑癌基因为隐性（两次打击）——与癌基因的显性功能获得互为同一枚硬币的正反两面。', { size: 10.5, weight: 600, fill: C.sub, maxW: 480, lh: 14 })
  b.table(560, 786, 790, {
    headers: ['基因', '功能', '相关肿瘤'],
    colW: [140, 320, 330],
    rowH: 24,
    fontSize: 10.5,
    rows: [
      ['RB1', 'G1/S 检查点（扣押 E2F）', '视网膜母细胞瘤 · 骨肉瘤 · 小细胞肺癌'],
      ['TP53', '基因组守卫（损伤响应总线）', '过半人类肿瘤'],
      ['APC', 'Wnt 负调控（β-cat 降解）', '结直肠癌（含 FAP）'],
      ['BRCA1/2', '同源重组修复 HR', '乳腺癌 · 卵巢癌'],
      ['PTEN', 'PIP₃ 磷酸酶（PI3K 拮抗）', '多种上皮癌'],
      ['VHL', 'HIF 泛素化降解', '肾透明细胞癌'],
    ],
  })
}

export default scene({
  title: '抑癌基因：Rb、APC 与 BRCA',
  subtitle: '两次打击（Knudson 1971，RB1 1986 证实）——Rb 低磷酸化扣押 E2F、cyclin D-CDK4/6 级联释放；APC 失活使 β-catenin 破坏复合体失效（结直肠癌起始）；BRCA1/2 守护 HR，PARP 抑制剂经合成致死选择性杀伤（风险 40%～80%）',
  draw,
})
