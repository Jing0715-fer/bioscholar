// mb ch2-s2 复制起点、方向与三种复制方式（39-b2 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、oriC 与复制子 ============
  b.panel(30, 132, 640, 300, { title: '一、复制起点与复制子：大肠杆菌 oriC（约 245 bp）' })
  b.text(90, 212, 'DnaA 蛋白（起始因子）', { size: 12, weight: 700, fill: C.enzD })
  for (let i = 0; i < 5; i++) {
    b.circle(93 + i * 30, 240, 9, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  }
  b.ctext(315, 212, 'AT 富集 → 熔解能耗低', { size: 11.5, fill: C.accD })
  b.arrow(300, 246, 258, 220, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(330, 246, 372, 220, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.line(70, 272, 610, 272, { stroke: C.faint, sw: 1.6 })
  for (let i = 0; i < 5; i++) {
    b.rect(80 + i * 30, 259, 26, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 4 })
    b.ctext(93 + i * 30, 276, '9', { size: 10, fill: C.dnaD })
  }
  for (let i = 0; i < 3; i++) {
    b.rect(250 + i * 44, 259, 40, 26, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 4 })
    b.ctext(270 + i * 44, 276, '13 bp', { size: 9.5, fill: C.accD })
  }
  b.ctext(155, 306, 'DnaA 盒 ×5（9 bp）', { size: 12, fill: C.sub })
  b.ctext(315, 306, '解旋元件 DUE ×3（13 bp）', { size: 12, fill: C.sub })
  b.braceH(80, 328, 440, { label: '复制子（replicon）：起点与终止点之间的 DNA 单位', size: 12 })
  b.text(70, 378, '复制子模型（Jacob 与 Brenner，1963）：起点携带可被起始因子识别的信息。', { size: 12, fill: C.mute })

  // ============ 二、θ 型复制 ============
  b.panel(690, 132, 680, 300, { title: '二、θ 型复制（Cairns 型）：大肠杆菌环状染色体' })
  b.circle(870, 295, 80, { stroke: C.dna, sw: 3 })
  // 复制泡（两个子代双链环出）
  b.path('M830,226 C 820,170 920,170 910,226', { stroke: C.dna, sw: 2.6, fill: 'none' })
  b.path('M830,226 C 840,205 900,205 910,226', { stroke: C.dna, sw: 2.6, fill: 'none' })
  b.arrow(826, 244, 798, 262, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.arrow(914, 244, 942, 262, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(870, 165, '双向复制叉', { size: 12.5, weight: 700, fill: C.bad })
  b.circle(870, 375, 5, { fill: C.ink })
  b.ctext(870, 400, 'oriC', { size: 11.5, fill: C.sub })
  b.ctext(870, 295, '环状染色体', { size: 12, fill: C.sub })
  b.text(990, 185, '复制泡', { size: 11.5, fill: C.mute })
  b.text(1000, 216, '放射性自显影（Cairns）：', { size: 13, weight: 700, fill: C.ink })
  b.wtext(1000, 240, '大肠杆菌环状染色体形成 θ 形中间体，两个复制叉自起点反向移动，子代分子保持环状。多数原核与真核复制叉为双向复制；个别体系单向（如质粒 ColE1）。', { size: 12, fill: C.sub, maxW: 350, lh: 18 })

  // ============ 三、滚动环复制 ============
  b.panel(30, 452, 640, 270, { title: '三、滚动环复制：λ 后期、M13、φX174、F 质粒接合' })
  b.wtext(60, 505, '一条链切口产生 3′-OH，以另一条环状链为模板持续滚环合成，连续产生多基因组串联单链，切割后环化。', { size: 12, fill: C.sub, maxW: 590, lh: 17.5 })
  b.circle(130, 600, 50, { stroke: C.dna, sw: 3 })
  b.line(122, 542, 138, 558, { stroke: C.bad, sw: 2.2 })
  b.line(122, 558, 138, 542, { stroke: C.bad, sw: 2.2 })
  b.ctext(130, 526, '切口（3′-OH）', { size: 11, fill: C.bad })
  b.arrow(140, 548, 420, 548, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.ctext(290, 532, '5′ 链滚出（被置换）', { size: 11.5, fill: C.rnaD })
  b.path('M180,600 A50,50 0 0 1 130,650', { stroke: C.acc, sw: 2.6, marker: 'acc', fill: 'none' })
  b.ctext(130, 678, '以环状模板链持续合成', { size: 11.5, fill: C.accD })
  for (let i = 0; i < 3; i++) {
    b.circle(455 + i * 60, 548, 20, { stroke: C.pro, sw: 2.2 })
  }
  b.ctext(515, 588, '切割 → 环化', { size: 11.5, fill: C.sub })
  b.ctext(515, 608, '串联子代基因组拷贝', { size: 11.5, fill: C.sub })

  // ============ 四、D 环复制 ============
  b.panel(690, 452, 680, 270, { title: '四、D 环复制（置换环）：线粒体 DNA 与叶绿体' })
  b.wtext(1010, 508, '两条链起点错开：先合成重链（H）置换出亲代链形成 D 环；轻链起点暴露后再启动轻链合成。', { size: 12, fill: C.sub, maxW: 340, lh: 18 })
  b.circle(860, 610, 62, { stroke: C.dna, sw: 3 })
  b.ctext(860, 614, 'mtDNA', { size: 12, fill: C.sub })
  b.ctext(860, 530, 'H 链起点先启动', { size: 11.5, weight: 700, fill: C.accD })
  b.path('M892,572 A50,50 0 0 1 909,619', { stroke: C.acc, sw: 2.8, marker: 'acc', fill: 'none' })
  b.path('M900,562 C 962,578 952,630 921,621', { stroke: C.rna, sw: 2.4, fill: 'none' })
  b.text(985, 590, '被置换链形成 D 环', { size: 11.5, fill: C.rnaD })
  b.tag(752, 560, '① H 链先', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(752, 660, '② L 链后', { fill: C.rnaL, stroke: C.rna, size: 11.5, weight: 700, tfill: C.rnaD, pad: 8 })
  b.ctext(860, 700, 'L 链起点暴露后启动', { size: 11.5, fill: C.rnaD })

  // ============ 五、真核多起点复制 ============
  b.panel(30, 732, 1340, 238, { title: '五、真核多起点复制：复制泡形成与融合' })
  b.line(70, 840, 1330, 840, { stroke: C.faint, sw: 1.6 })
  const eyes = [260, 620, 980]
  eyes.forEach(x => {
    b.path(`M${x - 90},840 C ${x - 60},790 ${x + 60},790 ${x + 90},840`, { stroke: C.dna, sw: 2.2, fill: 'none' })
    b.path(`M${x - 90},840 C ${x - 60},812 ${x + 60},812 ${x + 90},840`, { stroke: C.acc, sw: 2.2, fill: 'none' })
    b.circle(x, 840, 5, { fill: C.ink })
    b.ctext(x, 874, '起点', { size: 11, fill: C.sub })
    b.arrow(x - 94, 840, x - 134, 840, { stroke: C.bad, sw: 2, marker: 'bad' })
    b.arrow(x + 94, 840, x + 134, 840, { stroke: C.bad, sw: 2, marker: 'bad' })
  })
  b.ctext(440, 800, '相向延伸 → 融合', { size: 11.5, fill: C.mute })
  b.ctext(800, 800, '复制眼', { size: 11.5, fill: C.mute })
  b.text(70, 906, '酿酒酵母：每个复制子约 36 kb，含自主复制序列 ARS（核心为 11 bp A/T 富集元件）；哺乳动物复制子平均约 100～150 kb。', { size: 12, fill: C.sub })
  b.text(70, 930, '一条染色体上数十至数百个复制起点同时活化；起点数目与活化时序受细胞周期与发育程序调控。', { size: 12, fill: C.sub })
  b.text(70, 954, '电镜下呈「复制眼」结构；DNA 纤维自显影可显示相邻起点双向延伸的轨迹。', { size: 12, fill: C.mute })
}

export default scene({
  title: '复制起点、方向与三种复制方式',
  subtitle: 'oriC（245 bp：5×DnaA 盒 + 3×AT 富集 DUE）起始双向复制——θ 型（大肠杆菌）、滚动环（λ/M13/F 质粒）与 D 环（线粒体）三种方式',
  draw,
})
