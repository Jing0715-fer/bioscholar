// mb ch1-s1 基因概念的发展：从遗传因子到断裂基因（39-b2 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、概念演进时间线 ============
  b.panel(30, 132, 1340, 236, { title: '一、基因概念的演进：从「遗传因子」到断裂基因' })
  const miles: [number, string, string][] = [
    [150, '1865', '孟德尔提出「遗传因子」控制性状分离'],
    [355, '1910', '摩尔根：基因位于染色体上并呈线性排列（基因学说）'],
    [580, '1941', 'Beadle 与 Tatum：一个基因一种酶 → 后修正为一个基因一条多肽链（1958 诺奖）'],
    [810, '1957', 'Benzer 顺反测验：顺反子是不可再分的功能单位；突变子与重组子仅 1～2 个核苷酸对'],
    [1040, '1977', 'Roberts 与 Sharp 发现断裂基因：外显子与内含子相间（1993 诺奖）'],
    [1248, '现代', '基因＝编码功能 RNA 或多肽链的 DNA 片段单位'],
  ]
  b.arrow(70, 252, 1330, 252, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  miles.forEach(([x, yr, desc]) => {
    b.circle(x, 252, 6, { fill: C.ink })
    b.ctext(x, 232, yr, { size: 15, weight: 700, fill: C.ink })
    b.wtext(x, 274, desc, { size: 11, fill: C.sub, maxW: 196, lh: 16, anchor: 'middle' })
  })

  // ============ 二、断裂基因与 R 环 ============
  b.panel(30, 388, 720, 296, { title: '二、断裂基因与 R 环：mRNA–DNA 杂交的电镜证据（1977）' })
  const dy = 477 // DNA 基线
  b.text(84, 450, 'DNA（断裂基因）', { size: 12.5, fill: C.mute })
  const exons: [number, number][] = [[80, 210], [300, 430], [520, 650]]
  exons.forEach(([x0, x1], i) => {
    b.rect(x0, dy - 15, x1 - x0, 30, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 4 })
    b.ctext((x0 + x1) / 2, dy + 5, `外显子${i + 1}`, { size: 13.5, weight: 700, fill: C.dnaD })
  })
  // 内含子环出（虚线弧）
  b.path('M210,477 C 226,545 284,545 300,477', { stroke: C.dna, sw: 2, dash: '6 5' })
  b.path('M430,477 C 446,545 504,545 520,477', { stroke: C.dna, sw: 2, dash: '6 5' })
  b.ctext(255, 556, '内含子 1（环出）', { size: 11.5, fill: C.mute })
  b.ctext(475, 556, '内含子 2（环出）', { size: 11.5, fill: C.mute })
  // mRNA 与外显子区杂交（配对小竖线）
  exons.forEach(([x0, x1]) => {
    for (let x = x0 + 14; x < x1 - 8; x += 24) {
      b.line(x, dy + 17, x, 568, { stroke: C.rna, sw: 1.2, opacity: 0.4 })
    }
  })
  b.rnaW(80, 580, 570, { amp: 9, stroke: C.rna })
  b.ctext(365, 616, 'mRNA：外显子序列已连成一体，与模板链杂交', { size: 13, fill: C.rnaD })
  b.wtext(56, 648, '腺病毒晚期 mRNA 与模板 DNA 杂交后，内含子在电镜下形成环状突起（R 环）——编码序列不连续，内含子在 RNA 加工中被剪接去除。', { size: 12.5, fill: C.sub, maxW: 668, lh: 18 })

  // ============ 三、顺反测验 ============
  b.panel(770, 388, 600, 296, { title: '三、顺反测验（cis-trans test）：顺反子的操作性定义' })
  const chrom = (y: number, marks: number[]) => {
    b.rect(800, y, 440, 22, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 11 })
    marks.forEach(mx => {
      b.line(mx - 8, y + 4, mx + 8, y + 18, { stroke: C.bad, sw: 2.2 })
      b.line(mx - 8, y + 18, mx + 8, y + 4, { stroke: C.bad, sw: 2.2 })
    })
  }
  // 反式
  b.text(800, 450, '反式（trans）：两条染色体各带一个突变', { size: 13, weight: 700, fill: C.sub })
  chrom(462, [950])
  chrom(494, [1090])
  b.tag(1300, 480, '突变表型', { fill: C.badL, stroke: C.bad, size: 13.5, weight: 700, tfill: '#991b1b', pad: 10 })
  // 顺式
  b.text(800, 555, '顺式（cis）：两个突变位于同一条染色体', { size: 13, weight: 700, fill: C.sub })
  chrom(567, [950, 1090])
  chrom(599, [])
  b.tag(1300, 590, '表型正常', { fill: C.okL, stroke: C.ok, size: 13.5, weight: 700, tfill: '#065f46', pad: 10 })
  b.text(1140, 632, '✕＝突变位点', { size: 11, fill: C.bad })
  b.wtext(800, 652, '反式排列出现突变表型而顺式排列正常 → 两突变属于同一顺反子（功能单位不可再分）。', { size: 12.5, fill: C.sub, maxW: 540, lh: 18 })

  // ============ 四、现代基因类型表 ============
  b.panel(30, 704, 1340, 266, { title: '四、现代基因概念的类型学拓展' })
  b.table(60, 748, 1280, {
    headers: ['基因类型', '特征', '举例'],
    colW: [210, 460, 610],
    rowH: 30,
    fontSize: 13,
    rows: [
      ['结构基因', '编码蛋白质或 RNA 产物', 'lacZ、珠蛋白基因'],
      ['调控基因', '编码调节蛋白', 'lacI、p53'],
      ['重叠基因', '一段序列参与编码多个肽链', '噬菌体 φX174'],
      ['假基因', '与功能基因同源但已失活', '人 β-珠蛋白 ψ 基因'],
      ['转座基因', '可在基因组内移动', '果蝇 P 元件、人 LINE-1'],
    ],
  })
  b.text(60, 958, '从「一个基因一种酶」到「一个基因一条多肽链」：多种蛋白质由多条肽链组成，学说随之修正。', { size: 12, fill: C.mute })
}

export default scene({
  title: '基因概念的发展：从遗传因子到断裂基因',
  subtitle: '孟德尔遗传因子 → Morgan 基因学说 → Beadle-Tatum 一个基因一种酶 → Benzer 顺反子 → 1977 年断裂基因（外显子/内含子）——R 环电镜证据与顺反测验',
  draw,
})
