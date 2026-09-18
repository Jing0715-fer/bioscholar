// mb ch4-s4 真核三类启动子与通用转录因子（39-b2 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、pol I 启动子 ============
  b.panel(30, 132, 660, 300, { title: '一、pol I 启动子：核心元件 + UCE（均富 GC）' })
  const p1y = 255
  b.tag(150, 215, 'UBF', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(415, 215, 'SL1（含 TBP + TAF_I）', { fill: C.enzL, stroke: C.enz, size: 12, weight: 700, tfill: C.enzD, pad: 8 })
  b.arrow(150, 231, 150, 247, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(415, 231, 415, 247, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.line(60, p1y, 560, p1y, { stroke: C.dna, sw: 2.4 })
  b.rect(90, p1y - 15, 120, 30, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 4 })
  b.ctext(150, p1y + 5, 'UCE', { size: 13, weight: 700, fill: C.proD })
  b.rect(340, p1y - 15, 140, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.ctext(410, p1y + 5, '核心元件', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(155, p1y + 36, '约 -180～-107', { size: 10.5, fill: C.mute })
  b.ctext(410, p1y + 36, '约 -45～+20', { size: 10.5, fill: C.mute })
  b.circle(500, p1y, 4, { fill: C.ink })
  b.ctext(500, p1y + 36, '+1', { size: 10.5, weight: 700, fill: C.sub })
  b.wtext(60, 328, '· UBF 的 DNA 弯折使 UCE 与核心元件靠近，二者协同募集 pol I。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 356, '· pol I 专职 rRNA 基因簇转录，活性最高（见本章第 3 节）。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(60, 384, '· 选择性因子 SL1 含 TBP 与多个 TAF_I。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 二、pol II 核心启动子 ============
  b.panel(710, 132, 660, 300, { title: '二、pol II 核心启动子：模块化元件组合' })
  const p2y = 240
  b.line(730, p2y, 1350, p2y, { stroke: C.dna, sw: 2.4 })
  const mods: [number, number, string, string][] = [
    [745, 90, 'BRE', 'TFIIB 识别'],
    [845, 130, 'TATA 盒', '约 -25～-30'],
    [985, 110, 'Inr', '覆盖 -2～+5'],
    [1105, 150, 'DPE', '+28～+32'],
  ]
  mods.forEach(([x, w, t, s]) => {
    b.rect(x, p2y - 15, w, 30, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 4 })
    b.ctext(x + w / 2, p2y + 5, t, { size: 12, weight: 700, fill: C.ink })
    b.ctext(x + w / 2, p2y - 26, s, { size: 10, fill: C.mute })
  })
  b.circle(1085, p2y, 4, { fill: C.ink })
  b.ctext(1085, p2y + 22, '+1', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(990, p2y + 46, 'TATA 共有序列 TATA(A/T)A(A/T)（Hogness 盒）', { size: 10.5, fill: C.mute })
  b.wtext(730, 318, '· TATA 与 Inr 二者具其一即可起始；DPE 见于 TATA 缺失基因。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(730, 346, '· 上游更远处为启动子近端元件（GC 盒 / Sp1、CAAT 盒）及增强子 / 沉默子等远端元件（第 8 章）。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })

  // ============ 三、pol III 启动子三型 ============
  b.panel(30, 452, 660, 280, { title: '三、pol III 启动子：多位于基因内部' })
  const rows: [string, string, string][] = [
    ['1 型（5S rRNA）', 'A 盒(+50～+60) + 中间元件 + C 盒(+80～+90)', 'TFIIIA → TFIIIC → TFIIIB'],
    ['2 型（tRNA）', 'A 盒(+10～+20) + B 盒(+50～+60)', 'TFIIIC → TFIIIB'],
    ['3 型（U6 snRNA）', '基因外部：TATA + PSE + OCT', 'SNAPc/Oct + TFIIIB'],
  ]
  rows.forEach(([t, s, f], i) => {
    const y = 500 + i * 62
    b.rect(60, y, 620, 52, { fill: i === 2 ? C.accL : C.panelB, stroke: i === 2 ? C.acc : C.line, sw: 1.4, rx: 8 })
    b.text(76, y + 21, t, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(76, y + 40, s, { size: 10.5, fill: C.sub, maxW: 360, lh: 14 })
    b.wtext(446, y + 32, f, { size: 10.5, weight: 600, fill: C.enzD, maxW: 224, lh: 14 })
  })
  b.text(60, 700, '三种情况最终均由 TFIIIB（含 TBP、BRF、Bdp1）定位 pol III 于起始点上游。', { size: 11.5, fill: C.mute })

  // ============ 四、PIC 组装 ============
  b.panel(710, 452, 660, 280, { title: '四、pol II 前起始复合物（PIC）按序组装' })
  const order: [string, string][] = [
    ['TBP', 'TFIID'],
    ['TFIIA', ''],
    ['TFIIB', ''],
    ['pol II', '+ TFIIF'],
    ['TFIIE', ''],
    ['TFIIH', '9 亚基'],
  ]
  order.forEach(([t, s], i) => {
    const x = 726 + i * 105
    b.rect(x, 512, 92, 56, { fill: i === 5 ? C.enzL : i === 3 ? C.accL : C.panelB, stroke: i === 5 ? C.enz : i === 3 ? C.acc : C.line, sw: 1.6, rx: 8 })
    b.ctext(x + 46, 536, t, { size: 12.5, weight: 700, fill: C.ink })
    if (s) b.ctext(x + 46, 556, s, { size: 10, fill: C.mute })
    if (i < 5) b.arrow(x + 94, 540, x + 103, 540, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.text(726, 596, 'TFIIH：', { size: 12.5, weight: 700, fill: C.enzD })
  b.wtext(796, 596, 'XPB（3′→5′ 解旋酶）在 Inr 周围解开约 13 bp 形成转录泡；CDK7/MO15 磷酸化 CTD Ser5 后启动子清除。', { size: 11, fill: C.sub, maxW: 556, lh: 15 })
  b.wtext(726, 648, '真核开放复合物形成需 ATP（由 TFIIH 解旋酶驱动）——与原核不同；TFIIH 兼具 NER 修复功能。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })
  b.wtext(726, 678, '演化对照：真核把 σ 因子的识别、解链、起始位点选择功能分装到多个 GTF，便于分别调控。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 五、通用转录因子表 ============
  b.panel(30, 752, 1340, 218, { title: '五、通用转录因子（GTF）速查' })
  b.table(60, 796, 1280, {
    headers: ['因子', '亚基', '功能'],
    colW: [170, 220, 890],
    rowH: 26,
    fontSize: 11,
    rows: [
      ['TFIID', 'TBP + ~14 TAF', 'TBP 结合 TATA 盒，扭曲 DNA 形成装配平台'],
      ['TFIIA', '3', '稳定 TBP-DNA 结合，解除 TAF 抑制'],
      ['TFIIB', '1', '单体，桥接 pol II 与 TBP，决定转录起始位点'],
      ['TFIIF', '2', '随 pol II 结合，抑制非特异结合，协助延伸'],
      ['TFIIE', '2', '募集并调节 TFIIH'],
      ['TFIIH', '9', 'XPB 解链；CDK7/MO15 磷酸化 CTD Ser5；兼具 NER 修复功能'],
    ],
  })
}

export default scene({
  title: '真核三类启动子与通用转录因子',
  subtitle: 'pol I（UCE + 核心元件，UBF/SL1）、pol II（TATA 盒 / Inr / BRE / DPE 模块化）、pol III（基因内部 A/B/C 盒或外部 TATA-PSE-OCT）——PIC 按 TBP→TFIIA→TFIIB→pol II/TFIIF→TFIIE→TFIIH 组装',
  draw,
})
