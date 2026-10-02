// mt ch3-s3 植物钾转运体（HAK/KUP 13 成员/浓度阶梯/双重吸收双曲线/KEA-CHX 内膜岗位/CCC 对照预告）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、浓度鸿沟与 HAK/KUP 家族 ============
  b.panel(30, 132, 1340, 285, { title: '一、浓度鸿沟：土壤 0.1–1 mM 对细胞 100–200 mM' })
  b.text(60, 176, '浓度阶梯（对数）：须逆一百到一千倍富集', { size: 12, weight: 700, fill: C.warnD })
  // 土壤带
  b.rect(70, 205, 100, 22, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.ctext(120, 220, '0.1–1', { size: 10, weight: 600, fill: C.warnD })
  b.ctext(120, 196, '土壤溶液 K^{+}', { size: 10.5, weight: 600, fill: C.warnD })
  // 细胞带
  b.rect(370, 305, 30, 22, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(430, 296, '植物细胞 100–200 mM', { size: 10.5, weight: 600, fill: C.okD })
  // 富集箭头
  b.arrow(175, 216, 365, 310, { stroke: C.dna, sw: 2.5, marker: 'dna' })
  b.text(330, 245, '100–1000 倍富集', { size: 12, weight: 700, fill: C.dnaD })
  // 对数轴
  b.line(55, 350, 505, 350, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const ticks: [number, string][] = [[70, '0.1'], [170, '1'], [270, '10'], [370, '100'], [470, '1000']]
  ticks.forEach(([tx, lb]) => {
    b.line(tx, 350, tx, 357, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 374, lb, { size: 10, fill: C.mute })
  })
  b.ctext(280, 396, 'K^{+} 浓度（mM，对数刻度）', { size: 10.5, fill: C.sub })
  b.text(60, 414, '土壤有效钾跨约四个数量级，雨水淋洗与季节波动使其持续摆动', { size: 9.5, fill: C.mute })
  // —— 右：HAK/KUP 家族 ——
  b.text(565, 176, 'HAK/KUP/KT 家族：拟南芥 13 成员（TRK-HAK 超家族）', { size: 12, weight: 700, fill: C.proD })
  b.bilayer(580, 258, 330)
  b.rect(690, 236, 64, 58, { fill: C.proL, stroke: C.pro, sw: 2, rx: 10 })
  b.ion(620, 226, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ion(655, 226, 'H^{+}', { r: 8, size: 8, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(628, 236, 692, 250, { stroke: C.ok, sw: 1.5, marker: 'ok' })
  b.arrow(663, 236, 700, 258, { stroke: C.rna, sw: 1.5, marker: 'rna' })
  b.ion(790, 285, 'K^{+}', { r: 8, size: 8, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ion(825, 285, 'H^{+}', { r: 8, size: 8, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(738, 272, 778, 282, { stroke: C.ok, sw: 1.5, marker: 'ok' })
  b.arrow(742, 280, 812, 284, { stroke: C.rna, sw: 1.5, marker: 'rna' })
  b.text(580, 330, 'HAK5：K^{+}/H^{+} 同向转运（借质子梯度驱动）', { size: 10.5, weight: 600, fill: C.proD })
  b.text(950, 210, '· Km 低至 μM 量级——高亲和吸收器', { size: 10.5, fill: C.sub })
  b.text(950, 228, '· 低钾数小时内转录诱导数十倍（快上岗）', { size: 10.5, fill: C.sub })
  b.text(950, 246, '· 速率随质子梯度增减——符合 K^{+}/H^{+} 同向转运', { size: 10.5, fill: C.sub })
  b.text(950, 264, '· trh1/kup4 突变体根毛失去极性生长（尖端 K^{+} 循环）', { size: 10.5, fill: C.sub })
  b.text(950, 282, '· 动物基因组无 HAK 对应物——食物钾以 mM 计', { size: 10.5, fill: C.sub })
  b.wtext(565, 355, '家族三套名字指向一家：HAK5 因真菌高亲和转运体 HAK 得名，KUP 与 KT 为同批基因别名——检索文献须心中有数；其余 KUP 成员在韧皮部与花药表达（装载·花粉发育）', { size: 10, fill: C.sub, maxW: 790, lh: 18 })

  // ============ 二、低钾双重吸收机制：两层开关的接力 ============
  b.panel(30, 429, 1340, 262, { title: '二、低钾双重吸收机制：两层开关的接力' })
  b.axis(90, 640, 540, 170, {
    xticks: [[0, '0.1'], [0.25, '1'], [0.5, '10'], [0.75, '100'], [1, '1000']],
    yticks: [[0.5, '½ Vmax']],
    xlabel: '胞外 K^{+} 浓度（μM，对数）· 纵轴为吸收速率',
  })
  b.curve(90, 640, 540, 170, [[0, 0.04], [0.06, 0.3], [0.13, 0.55], [0.22, 0.72], [0.33, 0.84], [0.5, 0.92], [0.75, 0.97], [1, 1]], { smooth: true, stroke: C.enz, sw: 2.6 })
  b.curve(90, 640, 540, 170, [[0, 0.02], [0.25, 0.04], [0.45, 0.12], [0.6, 0.3], [0.72, 0.55], [0.82, 0.78], [0.92, 0.9], [1, 0.96]], { smooth: true, stroke: C.acc, sw: 2.6 })
  b.text(300, 505, 'HAK5（高亲和）', { size: 10.5, weight: 700, fill: C.enzD })
  b.text(505, 590, 'AKT1（低亲和）', { size: 10.5, weight: 700, fill: C.accD })
  b.text(100, 480, '双层吸收合力覆盖土壤钾全部波动区间（跨约四个数量级）', { size: 10, fill: C.mute })
  b.text(720, 470, '两层开关接力：转录（慢档）＋翻译后（快档）', { size: 11, weight: 600, fill: C.sub })
  b.table(720, 490, 630, {
    headers: ['系统', '亲和力量级', '调控层次（快慢档）'],
    rows: [
      ['HAK5 高亲和转运体', 'Km μM 级', '低钾转录诱导——换装备（以小时计）'],
      ['AKT1 低亲和通道', 'mM 级', 'CBL-CIPK23 磷酸化——拨开关（数分钟）'],
      ['KEA/CHX 内膜交换体', '依区室而异', '组成型＋胁迫响应（区室 K^{+} 与 pH）'],
    ],
    rowH: 44, fontSize: 12, colW: [185, 120, 325],
  })
  b.wtext(720, 676, '时间上互补：磷酸化级联数分钟起效、转录诱导以小时计——恰如动物肾急性泌钾调节与醛固酮驱动的慢性通道重塑', { size: 10, fill: C.mute, maxW: 630, lh: 16 })

  // ============ 三、内膜岗位与动物对照预告 ============
  b.panel(30, 703, 1340, 282, { title: '三、内膜岗位（KEA/CHX）与动物对照预告（CCC 家族）' })
  b.text(48, 745, 'KEA 6 成员＋CHX：内膜上的钾搬家队', { size: 12, weight: 700, fill: C.dnaD })
  b.chloro(170, 810, 150, 80, { label: '叶绿体（类囊体）' })
  b.golgi(400, 775, 110, { label: '高尔基体' })
  b.circle(600, 815, 60, { fill: C.accL, stroke: C.acc, sw: 2.5 })
  b.ctext(600, 812, '液泡', { size: 14, weight: 700, fill: C.accD })
  b.ctext(600, 834, '（九成的钾）', { size: 10.5, fill: C.accD })
  b.circle(475, 795, 10, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.circle(500, 812, 8, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.tag(490, 845, '内体 CHX', { size: 10.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.tag(170, 895, '类囊体膜 KEA1/2/3', { size: 10.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.tag(400, 895, '高尔基 KEA4/5/6', { size: 10.5, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.tag(600, 900, '液泡膜 NHX·TPK', { size: 10.5, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.wtext(48, 935, 'KEA 借 H^{+} 梯度搬 K^{+}——类囊体腔的 pH 稳压器（调节 ΔpH/Δψ 分配；KEA3 影响光暗转换的 pH 回落速度）；高尔基 KEA4/5/6 缺陷致花粉与细胞壁分泌异常', { size: 10, fill: C.sub, maxW: 640, lh: 18 })
  b.wtext(48, 975, 'CHX 几乎全部驻留内膜（内体/高尔基 pH·极性生长）；液泡另配 NHX 型 Na^{+}(K^{+})/H^{+} 反向转运体管库存', { size: 10, fill: C.sub, maxW: 640, lh: 18 })
  // —— 右：动物 CCC 对照预告 ——
  b.text(725, 745, '动物对照预告：CCC 家族的氯耦联方案（SLC12）', { size: 12, weight: 700, fill: C.badD })
  b.bilayer(740, 800, 280)
  b.rect(840, 778, 56, 56, { fill: C.badL, stroke: C.bad, sw: 2, rx: 10 })
  b.ctext(868, 806, 'NKCC2', { size: 10, weight: 700, fill: C.badD })
  b.ion(780, 762, 'Na^{+}', { r: 7.5, size: 7.5, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.ion(812, 762, 'K^{+}', { r: 7.5, size: 7.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ion(844, 762, 'Cl^{-}', { r: 7.5, size: 7.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.ion(876, 762, 'Cl^{-}', { r: 7.5, size: 7.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(786, 772, 843, 786, { stroke: C.sub, sw: 1.3 })
  b.arrow(818, 772, 853, 786, { stroke: C.sub, sw: 1.3 })
  b.arrow(850, 772, 863, 786, { stroke: C.sub, sw: 1.3 })
  b.arrow(882, 772, 873, 786, { stroke: C.sub, sw: 1.3 })
  b.ctext(868, 850, 'NKCC2：1Na^{+}:1K^{+}:2Cl^{-}（呋塞米靶）', { size: 10, fill: C.badD })
  b.bilayer(1060, 800, 280)
  b.rect(1150, 778, 56, 56, { fill: C.badL, stroke: C.bad, sw: 2, rx: 10 })
  b.ctext(1178, 806, 'KCC2', { size: 10, weight: 700, fill: C.badD })
  b.ion(1120, 845, 'K^{+}', { r: 7.5, size: 7.5, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.ion(1148, 845, 'Cl^{-}', { r: 7.5, size: 7.5, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD })
  b.arrow(1122, 836, 1160, 792, { stroke: C.sub, sw: 1.3 })
  b.arrow(1150, 836, 1170, 792, { stroke: C.sub, sw: 1.3 })
  b.ctext(1178, 762, 'KCC2：K^{+}+Cl^{-} 外向（神经元压低 Cl^{-}）', { size: 10, fill: C.badD })
  b.rect(725, 890, 630, 70, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(740, 912, 'CCC 语法：借 Na^{+}/Cl^{-} 梯度，把 K^{+} 的搬运与氯捆绑', { size: 10.5, weight: 600, fill: C.sub })
  b.text(740, 934, 'HAK 语法：借 H^{+} 梯度，把 K^{+} 的搬运与质子捆绑——两套语法，第 8 章并排放置', { size: 10.5, weight: 600, fill: C.dnaD })
  b.text(740, 956, 'KCC2 表达异常与癫痫、神经痛相关；NKCC2 障碍是 Bartter 综合征的另一起点', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '植物钾转运体：HAK、KEA 与 CHX',
  subtitle:
    '土壤溶液 K^{+} 仅 0.1–1 mM 而植物细胞需 100–200 mM——百倍到千倍的富集鸿沟由双层吸收系统跨越：毫摩尔级 AKT1 通道管日常，微摩尔级 Km 的 HAK5 在低钾时经转录诱导上岗；内膜上 KEA（6 成员）与 CHX 再把钾搬进类囊体与高尔基，管好区室 K^{+} 与 pH 稳态',
  draw,
})
