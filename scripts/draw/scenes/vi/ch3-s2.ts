// vi ch3-s2 DNA 病毒基因组（39-j 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、大小谱与自主性梯度 ============
  b.panel(30, 132, 660, 400, { title: '一、基因组大小谱：相差逾百倍（对数尺度）' })
  const lg = (kb: number) => 190 + (Math.log10(kb) / 2.4771) * 420
  const sizes: [string, number, number][] = [
    ['环状病毒科', 1.7, 2],
    ['细小病毒科', 4, 6],
    ['多瘤 / 乳头瘤病毒', 5, 8],
    ['腺病毒科', 26, 48],
    ['疱疹病毒科', 125, 240],
    ['痘病毒科', 130, 300],
  ]
  sizes.forEach(([nm, lo, hi], i) => {
    const by = 188 + i * 36
    b.text(50, by + 13, nm, { size: 11, fill: C.sub })
    b.rect(lg(lo), by, Math.max(lg(hi) - lg(lo), 7), 18, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 4 })
    b.ctext((lg(lo) + lg(hi)) / 2, by + 13, `${lo}–${hi} kb`, { size: 9.5, fill: C.dnaD })
  })
  // 刻度
  ;[1, 10, 100].forEach(t => {
    b.line(lg(t), 404, lg(t), 410, { stroke: C.sub, sw: 1.8 })
    b.ctext(lg(t), 424, `${t}`, { size: 11, fill: C.mute })
  })
  b.ctext(400, 424, 'kb', { size: 11, fill: C.mute })
  b.arrow(210, 470, 600, 470, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(405, 456, '基因组增大 → 自主性增强、对宿主依赖变浅', { size: 11, weight: 700, fill: C.accD })
  b.wtext(50, 500, '从环状病毒约 1.7–2 kb 到痘病毒 130–300 kb（AAV 4.7 kb 属细小病毒科）——DNA 病毒的大小跨度冠绝病毒界。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、线性基因组的四类末端解法 ============
  b.panel(710, 132, 660, 400, { title: '二、线性基因组的末端难题与四类解法' })
  const rows2: [string, string][] = [
    ['末端冗余＋连环体切割', '疱疹病毒、T 偶数噬菌体：复制产生连环体，包装时「量裁」出单位长度基因组。'],
    ['cos 位点粘端环化', 'λ 噬菌体：末端 cos 粘端互补，进胞后即环化，回避线性末端问题。'],
    ['共价闭合发夹末端', '痘病毒、细小病毒：DNA 末端回折成发夹，自身即为复制模板。'],
    ['末端蛋白引发', '腺病毒与 φ29：5′ 端共价结合的末端蛋白直接作复制引物。'],
  ]
  rows2.forEach(([nm, txt], i) => {
    const y0 = 180 + i * 88
    b.text(730, y0 + 14, `${i + 1}. ${nm}`, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(730, y0 + 36, txt, { size: 10.5, fill: C.sub, maxW: 300, lh: 14 })
    if (i === 0) {
      for (let k = 0; k < 5; k++) b.rect(1050 + k * 52, y0 + 6, 44, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
      b.ctext(1178, y0 + 46, '连环体 → 切割', { size: 10, fill: C.mute })
      b.line(1096, y0 - 2, 1096, y0 + 30, { stroke: C.enz, sw: 1.8, dash: '4 3' })
      b.line(1304, y0 - 2, 1304, y0 + 30, { stroke: C.enz, sw: 1.8, dash: '4 3' })
    } else if (i === 1) {
      b.rect(1050, y0 + 8, 130, 12, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
      b.rect(1050, y0 + 8, 14, 12, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
      b.rect(1166, y0 + 8, 14, 12, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
      b.arrow(1196, y0 + 14, 1236, y0 + 14, { stroke: C.acc, sw: 1.8, marker: 'acc' })
      b.circle(1282, y0 + 14, 22, { fill: 'none', stroke: C.dna, sw: 2.2 })
      b.ctext(1128, y0 + 44, 'cos 粘端', { size: 10, fill: C.rna })
      b.ctext(1282, y0 + 44, '环化', { size: 10, fill: C.mute })
    } else if (i === 2) {
      b.line(1076, y0 + 14, 1256, y0 + 14, { stroke: C.dna, sw: 2 })
      b.stemLoop(1076, y0 + 14, { h: 22, r: 9, stroke: C.dna })
      b.stemLoop(1256, y0 + 14, { h: 22, r: 9, stroke: C.dna })
      b.ctext(1166, y0 + 44, '两端回折成发夹', { size: 10, fill: C.mute })
    } else {
      b.line(1076, y0 + 14, 1256, y0 + 14, { stroke: C.dna, sw: 2 })
      b.circle(1076, y0 + 14, 9, { fill: C.proL, stroke: C.pro, sw: 1.8 })
      b.circle(1256, y0 + 14, 9, { fill: C.proL, stroke: C.pro, sw: 1.8 })
      b.ctext(1166, y0 + 44, '末端蛋白＝引物', { size: 10, fill: C.mute })
      b.ctext(1076, y0 - 6, 'TP', { size: 9.5, weight: 700, fill: C.proD })
    }
  })

  // ============ 三、环形基因组：θ 型与滚环复制 ============
  b.panel(30, 556, 660, 424, { title: '三、环形基因组：θ 型与滚环复制回避末端难题' })
  b.circle(195, 672, 46, { fill: '#ffffff', stroke: C.dna, sw: 2.2 })
  b.ellipse(195, 672, 21, 21, { fill: C.bg, stroke: C.dna, sw: 2 })
  b.arrow(214, 653, 230, 637, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(176, 691, 160, 707, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(195, 738, 'θ 型（双向复制叉）', { size: 11.5, weight: 700, fill: C.dnaD })
  b.circle(460, 666, 38, { fill: '#ffffff', stroke: C.dna, sw: 2.2 })
  b.path('M 460,704 C 500,704 520,690 560,668', { fill: 'none', stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.ctext(460, 738, '滚环复制（σ 型）', { size: 11.5, weight: 700, fill: C.rna })
  b.ctext(560, 640, '切口→延伸', { size: 10, fill: C.mute })
  // 乳头瘤与上皮分化耦合
  b.text(50, 778, '乳头瘤病毒：把基因组扩增与上皮分化耦合', { size: 12.5, weight: 700, fill: C.ink })
  const layers: [string, string][] = [
    ['颗粒层（表层）', '晚期基因表达、装配子代毒粒'],
    ['棘层（中间）', '基因组大量扩增'],
    ['基底层（底层）', '维持低拷贝、随细胞分裂分配'],
  ]
  layers.forEach(([nm, txt], i) => {
    const ly = 796 + i * 42
    b.rect(50, ly, 560, 36, { fill: i === 0 ? C.badL : i === 1 ? C.rnaL : C.dnaL, stroke: C.line, sw: 1.4 })
    b.ctext(150, ly + 23, nm, { size: 11.5, weight: 700, fill: C.sub })
    b.ctext(400, ly + 23, txt, { size: 11, fill: C.sub })
  })
  b.arrow(620, 906, 620, 800, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.ctext(646, 850, '分化上行', { size: 10, fill: C.mute })

  // ============ 四、两个特例：HBV 与 AAV ============
  b.panel(710, 556, 660, 424, { title: '四、两个特例：HBV 的逆转录复制与 AAV 的极限压缩' })
  const hbv: [string, string, number][] = [
    ['rcDNA', '不完全双链环状', 730],
    ['cccDNA', '入核修复为共价闭合环', 905],
    ['前基因组 RNA', '3.5 kb · 带 ε 茎环', 1080],
    ['rcDNA 子代', '经逆转录生成', 1255],
  ]
  hbv.forEach(([t, s, x]) => {
    b.rect(x, 608, 140, 50, { fill: C.dnaL, stroke: C.dna, sw: 1.7, rx: 8 })
    b.ctext(x + 70, 628, t, { size: 11.5, weight: 700, fill: C.dnaD })
    b.ctext(x + 70, 646, s, { size: 9, fill: C.sub })
  })
  b.arrow(872, 633, 901, 633, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.arrow(1047, 633, 1076, 633, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.arrow(1222, 633, 1251, 633, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(886, 596, '修复', { size: 9.5, fill: C.dnaD })
  b.ctext(1061, 596, '转录', { size: 9.5, fill: C.rna })
  b.ctext(1236, 596, '逆转录', { size: 9.5, fill: C.bad })
  b.path('M 1325,662 C 1240,730 830,730 795,662', { fill: 'none', stroke: C.dna, sw: 1.8, dash: '6 4', marker: 'dna' })
  b.ctext(1058, 722, '子代 rcDNA 再入核 → cccDNA 库扩容（巴尔的摩第七类：DNA 经 RNA 中介逆转录）', { size: 10, fill: C.sub })
  b.text(730, 768, 'AAV：4.7 kb 的极限压缩', { size: 12.5, weight: 700, fill: C.ink })
  b.genes(790, 856, 420, [
    { label: 'rep', frac: 0.52, fill: C.enzL, stroke: C.enz },
    { label: 'cap', frac: 0.48, fill: C.proL, stroke: C.pro },
  ])
  b.stemLoop(782, 856, { h: 26, r: 9, stroke: C.rna })
  b.stemLoop(1218, 856, { h: 26, r: 9, stroke: C.rna })
  b.ctext(782, 826, 'ITR', { size: 10, weight: 700, fill: C.rna })
  b.ctext(1218, 826, 'ITR', { size: 10, weight: 700, fill: C.rna })
  b.wtext(730, 900, '4.7 kb 基因组产出八种蛋白；约 145 nt 的反向末端重复（ITR）兼任复制起点、包装信号与整合元件——AAV 由此成为基因治疗的首选载体。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: 'DNA 病毒基因组：大小谱、末端解法与环形复制',
  subtitle: '环状病毒 1.7–2 kb 至痘病毒 130–300 kb 相差逾百倍；线性末端四解法（冗余切割／cos 环化／发夹／末端蛋白）；HBV 经 pgRNA 逆转录复制；AAV 4.7 kb 八种蛋白',
  draw,
})
