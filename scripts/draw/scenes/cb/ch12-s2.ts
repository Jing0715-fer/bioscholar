// cb ch12-s2 凋亡的两条信号途径与 Bcl-2 家族（39-d 批D 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、外在途径：死亡受体 → DISC → caspase-8 ============
  b.panel(30, 132, 660, 430, { title: '一、外在（死亡受体）途径：FasL-Fas → FADD → DISC' })
  b.wtext(64, 184, '死亡受体属 TNF 受体超家族：Fas（CD95）、TNFR1、DR4/DR5（TRAIL 受体），胞内段含死亡结构域（DD）。以 Fas 途径为例（细胞毒性 T 细胞杀伤靶细胞）：', { size: 9.5, fill: C.sub, maxW: 600, lh: 13 })
  // 膜与 FasL
  b.bilayer(60, 268, 250)
  b.cell(140, 232, 44, 22, {})
  b.ctext(140, 208, '细胞毒性 T 细胞', { size: 9, fill: C.mute })
  b.tag(140, 252, 'FasL 三聚体', { fill: C.rnaL, stroke: C.rna, size: 9, weight: 700, tfill: C.rnaD, pad: 4 })
  // 靶细胞侧
  b.rect(316, 226, 84, 84, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(358, 250, 'Fas', { size: 11, weight: 700, fill: C.proD })
  b.ctext(358, 268, '（受体三聚化）', { size: 8, fill: C.proD })
  b.ctext(358, 288, 'DD', { size: 9, weight: 700, fill: C.bad })
  b.arrow(190, 252, 312, 252, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(358, 326, '靶细胞', { size: 9.5, fill: C.mute })
  // DISC 级联
  b.arrow(358, 336, 358, 356, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.tag(358, 378, 'FADD（DD＋DED）', { fill: C.accL, stroke: C.acc, size: 9.5, weight: 700, tfill: C.accD, pad: 5 })
  b.arrow(358, 396, 358, 416, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.tag(358, 438, 'procaspase-8（DED-DED）', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 5 })
  b.arrow(358, 456, 358, 476, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.rect(280, 486, 156, 36, { fill: C.enzL, stroke: C.enz, sw: 2.2, rx: 8 })
  b.ctext(358, 508, 'DISC', { size: 11, weight: 700, fill: C.enzD })
  // 右侧注释
  b.wtext(470, 244, 'DISC＝死亡诱导信号复合物；多个 procaspase-8 彼此靠近自切割（诱导邻近模式）→ 活性 caspase-8。', { size: 9.5, fill: C.sub, maxW: 200, lh: 13 })
  b.arrow(444, 504, 470, 504, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.tag(560, 504, 'caspase-8 → 切割激活 caspase-3', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.wtext(470, 356, 'caspase-8 同时切割 Bid 为 tBid——桥接线粒体途径（右图）。', { size: 9.5, fill: C.bad, maxW: 200, lh: 13 })

  // ============ 二、内在途径：线粒体 → 凋亡体 ============
  b.panel(710, 132, 660, 430, { title: '二、内在（线粒体）途径：MOMP → Cyt c → 凋亡体' })
  b.wtext(740, 184, '应答 DNA 损伤、生长因子剥夺、ER 应激等细胞内在应激：', { size: 9.5, fill: C.sub, maxW: 600, lh: 13 })
  // BH3-only → Bax/Bak → MOMP
  b.tag(790, 226, 'BH3-only 感应', { fill: C.warnL, stroke: C.warn, size: 9.5, weight: 700, tfill: '#78350f', pad: 5 })
  b.ctext(790, 250, 'Bid·Bim·Puma·Noxa·Bad', { size: 9, fill: C.mute })
  b.arrow(790, 262, 790, 286, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  b.tag(790, 310, 'Bax / Bak 寡聚成孔', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 5 })
  b.arrow(790, 328, 790, 352, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  // 线粒体
  b.mito(790, 392, 150, 74, { label: '' })
  b.ctext(790, 378, '外膜通透化（MOMP）', { size: 9.5, weight: 700, fill: C.bad })
  // Cyt c 释放
  b.arrow(872, 392, 990, 392, { stroke: C.warn, sw: 2.4, marker: 'warn' })
  b.ion(1020, 392, 'Cyt c', { r: 22, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 10 })
  b.tag(1020, 428, '释放入胞质', { fill: C.panelB, stroke: C.mute, size: 9, tfill: C.mute, pad: 4 })
  // 凋亡体（轮状七聚体）
  b.circle(1210, 350, 52, { fill: C.bg, stroke: C.enz, sw: 2.4 })
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2
    b.circle(1210 + 40 * Math.cos(a), 350 + 40 * Math.sin(a), 11, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  }
  b.ctext(1210, 348, '凋亡体', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(1210, 364, '（七聚体轮状）', { size: 8.5, fill: C.enzD })
  b.arrow(1044, 392, 1140, 372, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(1130, 428, 'Cyt c＋Apaf-1＋dATP', { size: 9.5, weight: 700, fill: C.enzD })
  // caspase-9 → 3
  b.arrow(1210, 404, 1210, 444, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(1210, 464, 'CARD 募集 procaspase-9 → 自切割激活', { size: 9.5, fill: C.sub })
  b.arrow(1210, 476, 1210, 496, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.tag(1210, 520, 'caspase-9 → caspase-3', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 5 })
  // Smac
  b.tag(940, 486, 'Smac/DIABLO 同时释放', { fill: C.okL, stroke: C.ok, size: 9, weight: 700, tfill: C.ok, pad: 4 })
  b.arrow(985, 500, 985, 516, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.wtext(860, 538, '结合并抑制 IAP（如 XIAP），解除对 caspase-3/9 的抑制。', { size: 9, fill: C.sub, maxW: 240, lh: 12.5 })

  // ============ 三、Bcl-2 家族双方阵 ============
  b.panel(30, 576, 1340, 404, { title: '三、Bcl-2 家族三方阵：抗凋亡 vs 效应 vs 感应' })
  b.table(60, 630, 780, {
    headers: ['亚家族', '代表成员', '结构域', '功能'],
    colW: [150, 240, 140, 250],
    rowH: 34,
    fontSize: 10,
    rows: [
      ['抗凋亡', 'Bcl-2、Bcl-xL、Mcl-1', 'BH1–BH4', '封锁 Bax/Bak，抑制凋亡'],
      ['促凋亡效应', 'Bax、Bak', 'BH1–BH3', '寡聚成孔，执行 MOMP'],
      ['BH3-only', 'Bid、Bim、Puma、Noxa、Bad', '仅 BH3', '感应损伤，激活 Bax/Bak 或封锁抗凋亡成员'],
    ],
  })
  // 调节与临床
  b.text(880, 630, '调节检验', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(880, 652, 'p53 上调 Puma/Noxa/Bax（DNA 损伤 → 凋亡）；生存因子激活 AKT 磷酸化 Bad（与 14-3-3 结合而失活）从而抑制凋亡。', { size: 9.5, fill: C.sub, maxW: 460, lh: 13.5 })
  b.text(60, 786, '临床意义', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(60, 808, 'Bcl-2 是人类发现的第一个凋亡调节癌基因——滤泡性淋巴瘤 t(14;18) 易位使 BCL2 置于 IgH 增强子下高表达；肿瘤细胞因"该死不死"而存活，是化疗抵抗的重要原因。', { size: 10, fill: C.sub, maxW: 760, lh: 14 })
  b.tag(230, 866, '小分子 BH3 类似物 Venetoclax 已临床应用', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 6 })
  b.tag(620, 866, 'tBid 桥接外在 → 内在两条途径', { fill: C.rnaL, stroke: C.rna, size: 10, tfill: C.rnaD, pad: 6 })
  b.wtext(880, 730, '三方阵的平衡决定细胞命运：感应层上传损伤信号、效应层执行成孔、抗凋亡层兜底刹车——Bcl-2 过表达相当于拆掉刹车。', { size: 9.5, fill: C.mute, maxW: 460, lh: 13.5 })
}

export default scene({
  title: '凋亡的两条信号途径与 Bcl-2 家族',
  subtitle: '外在：FasL-Fas→FADD→DISC→caspase-8→caspase-3；内在：BH3-only→Bax/Bak 成孔→Cyt c+Apaf-1 凋亡体；Bcl-2（t(14;18)）封锁 Bax/Bak，Venetoclax 拮抗',
  draw,
})
