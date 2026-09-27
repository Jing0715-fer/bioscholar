// ph ch6-s4 止血、凝血与血型：三幕止血剧、凝血瀑布与 ABO/Rh 免疫格局
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、止血三步纵向流程 ============
  b.panel(30, 132, 420, 430, { title: '一、止血三步：从血管痉挛到红色血栓' })
  // ① 血管收缩（虚线＝原管径，实线＝痉挛后）
  b.ctext(151, 178, '① 血管收缩', { size: 11, weight: 700, fill: C.warnD })
  b.rect(56, 182, 190, 46, { fill: 'none', stroke: C.faint, sw: 1.4, dash: '5 4', rx: 23 })
  b.rect(68, 192, 166, 26, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 13 })
  b.arrow(92, 205, 117, 205, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.arrow(210, 205, 185, 205, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.text(272, 196, '即刻–数秒', { size: 10, weight: 700, fill: C.warnD })
  b.wtext(272, 214, '神经轴突反射＋内皮素-1/TXA_{2} 使伤段痉挛，血流骤减', { size: 9.5, fill: C.sub, maxW: 158, lh: 14 })
  b.arrow(159, 234, 159, 254, { stroke: C.sub, sw: 1.8 })
  // ② 一期止血：白色血栓（血小板栓）
  b.ctext(159, 268, '② 一期止血：白色血栓', { size: 11, weight: 700, fill: C.enzD })
  b.rect(56, 282, 66, 36, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 18 })
  b.rect(196, 282, 66, 36, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 18 })
  for (const [px, py] of [[134, 295], [151, 291], [168, 295], [185, 299], [134, 307], [151, 303], [168, 307], [185, 303]] as [number, number][]) {
    b.circle(px, py, 6, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  }
  b.rect(126, 320, 66, 8, { fill: C.dnaL, stroke: C.dna, sw: 1 })
  for (const [x1, x2] of [[136, 148], [156, 168], [176, 188]] as [number, number][]) {
    b.line(x1, 320, x2, 328, { stroke: C.dna, sw: 0.9 })
  }
  b.text(272, 288, '数分钟', { size: 10, weight: 700, fill: C.enzD })
  b.wtext(272, 306, 'vWF 桥接胶原–GPIb 粘附；ADP/TXA_{2} 正反馈扩军；GPIIb/IIIa–纤维蛋白原聚集', { size: 9.5, fill: C.sub, maxW: 158, lh: 14 })
  b.arrow(159, 334, 159, 356, { stroke: C.sub, sw: 1.8 })
  // ③ 二期止血：红色血栓（纤维蛋白网加固）
  b.ctext(159, 372, '③ 二期止血：红色血栓', { size: 11, weight: 700, fill: C.badD })
  b.rect(56, 384, 66, 36, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 18 })
  b.rect(196, 384, 66, 36, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 18 })
  for (const [px, py] of [[134, 397], [151, 393], [168, 397], [185, 401], [134, 409], [151, 405], [168, 409], [185, 405]] as [number, number][]) {
    b.circle(px, py, 6, { fill: C.enzL, stroke: C.enz, sw: 1.4 })
  }
  for (const [x1, y1, x2, y2] of [[124, 390, 194, 416], [124, 416, 194, 390], [124, 403, 194, 403], [146, 386, 146, 418], [172, 386, 172, 418]] as [number, number, number, number][]) {
    b.line(x1, y1, x2, y2, { stroke: C.bad, sw: 1.1, opacity: 0.8 })
  }
  b.text(272, 388, '数十分钟', { size: 10, weight: 700, fill: C.badD })
  b.wtext(272, 406, '凝血瀑布在血小板磷脂表面生成纤维蛋白，XIIIa 交联成网加固白色栓', { size: 9.5, fill: C.sub, maxW: 158, lh: 14 })
  b.wtext(46, 452, '一期止血缺陷→皮肤黏膜出血（瘀点、瘀斑、鼻衄）；凝血因子缺陷→深部血肿（关节、肌肉）——出血分布是床旁鉴别的第一条线索。', { size: 9.5, fill: C.sub, maxW: 380, lh: 15 })
  b.wtext(46, 494, '三幕严丝合缝：过弱则出血不止、过强则血栓成疾——止血的本质是出血与血栓风险的精准平衡（纤溶再通见右图）。', { size: 9.5, fill: C.sub, maxW: 380, lh: 15 })

  // ============ 二、凝血级联瀑布 ============
  b.panel(470, 132, 900, 430, { title: '二、凝血级联瀑布：两路入水、共同通路' })
  // 内源性途径列
  b.ctext(580, 190, '内源性途径（接触激活）', { size: 10.5, weight: 700, fill: C.accD })
  b.line(522, 197, 638, 197, { stroke: C.acc, sw: 2 })
  b.tag(580, 222, 'XII', { size: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 600 })
  b.arrow(580, 233, 580, 254, { stroke: C.sub, sw: 1.6 })
  b.tag(580, 266, 'XI', { size: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 600 })
  b.arrow(580, 277, 580, 298, { stroke: C.sub, sw: 1.6 })
  b.tag(580, 310, 'IX', { size: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 600 })
  b.arrow(580, 321, 580, 338, { stroke: C.sub, sw: 1.6 })
  b.tag(580, 350, 'VIII', { size: 12, fill: C.accL, stroke: C.acc, tfill: C.accD, weight: 600 })
  b.ctext(580, 386, 'aPTT 监测（内源）', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(580, 406, '血友病 A/B 断链于此', { size: 9.5, fill: C.sub })
  // 外源性途径列
  b.ctext(745, 190, '外源性途径', { size: 10.5, weight: 700, fill: C.rnaD })
  b.line(716, 197, 774, 197, { stroke: C.rna, sw: 2 })
  b.tag(745, 240, 'TF·VIIa', { size: 12, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, weight: 600 })
  b.ctext(745, 272, '组织损伤释出 TF', { size: 9.5, fill: C.sub })
  b.ctext(745, 292, '（体内生理启动者）', { size: 9, fill: C.mute })
  b.ctext(745, 386, 'PT/INR 监测（外源）', { size: 10, weight: 700, fill: C.warnD })
  b.ctext(745, 406, '华法林·肝病延长', { size: 9.5, fill: C.sub })
  // 汇入共同通路
  b.path('M 782,246 C 850,262 900,300 918,323', { stroke: C.rna, sw: 2, marker: 'rna' })
  b.path('M 613,352 C 700,375 810,372 912,344', { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(760, 352, '＋磷脂·Ca^{2+}＝X 酶复合物', { size: 9, fill: C.accD })
  // 共同通路列
  b.ctext(935, 306, '共同通路', { size: 10.5, weight: 700, fill: C.badD })
  b.line(905, 314, 965, 314, { stroke: C.bad, sw: 2 })
  b.tag(935, 345, 'X', { size: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 600 })
  b.arrow(935, 357, 935, 388, { stroke: C.sub, sw: 1.6 })
  b.text(866, 378, 'Xa·Va', { size: 8.5, fill: C.mute })
  b.tag(935, 400, 'IIa 凝血酶', { size: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 600 })
  b.arrow(935, 412, 935, 440, { stroke: C.sub, sw: 1.6 })
  b.text(866, 430, '切去 A/B 肽', { size: 8.5, fill: C.mute })
  b.tag(935, 452, '纤维蛋白原', { size: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 600 })
  b.arrow(935, 464, 935, 488, { stroke: C.sub, sw: 1.6 })
  b.text(866, 480, 'XIIIa 交联', { size: 8.5, fill: C.mute })
  b.tag(935, 500, '交联纤维蛋白网', { size: 12, fill: C.badL, stroke: C.bad, tfill: C.badD, weight: 600 })
  b.ctext(935, 540, '共同通路损：PT 与 aPTT 皆延长', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(580, 430, '维生素 K 依赖因子：II·VII·IX·X', { size: 9, fill: C.mute })
  b.wtext(505, 452, '凝血酶本身是放大器：反馈激活 V·VIII·XI，并经血小板 PAR 受体召集血小板。', { size: 9.5, fill: C.sub, maxW: 330, lh: 15 })
  b.wtext(505, 496, '细胞模型（Hoffman & Monroe）：TF 承载细胞上小量凝血酶点火，转移到血小板磷脂面轰然放大——「内源/外源」只是体外分析的便利。', { size: 9.5, fill: C.sub, maxW: 330, lh: 15 })
  // 右侧栏：抗凝三道 + 纤溶
  b.text(1052, 196, '抗凝三道防线', { size: 12.5, weight: 700, fill: C.enzD })
  b.tag(1108, 224, '抗凝血酶 III', { size: 10, fill: C.enzL, stroke: C.enz, tfill: C.enzD })
  b.text(1166, 228, '灭活 IIa·IXa·Xa；肝素增效千倍', { size: 9.5, fill: C.sub })
  b.tag(1108, 254, '蛋白 C/S', { size: 10, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.text(1155, 258, 'APC 灭活 Va·VIIIa（血栓调节蛋白改行）', { size: 9.5, fill: C.sub })
  b.tag(1108, 284, 'TFPI', { size: 10, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.text(1149, 288, '封闭 TF-VIIa-Xa（掐灭外源点火）', { size: 9.5, fill: C.sub })
  b.line(1052, 306, 1348, 306, { stroke: C.line, sw: 1 })
  b.text(1052, 330, '纤溶：凝块的拆迁', { size: 12.5, weight: 700, fill: C.okD })
  b.tag(1108, 360, 't-PA（内皮）', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.text(1170, 378, 'PAI-1 随时刹车', { size: 9, fill: C.enzD })
  b.arrow(1168, 374, 1158, 366, { stroke: C.enz, sw: 1.3, dash: '4 3', marker: 'enz' })
  b.arrow(1108, 372, 1108, 392, { stroke: C.sub, sw: 1.6 })
  b.tag(1108, 406, '纤溶酶原', { size: 10, fill: C.panelB, stroke: C.sub, tfill: C.sub })
  b.text(1160, 410, '选择性结合于纤维蛋白', { size: 9, fill: C.mute })
  b.arrow(1108, 418, 1108, 438, { stroke: C.sub, sw: 1.6 })
  b.tag(1108, 452, '纤溶酶', { size: 10, fill: C.okL, stroke: C.ok, tfill: C.okD })
  b.arrow(1141, 452, 1215, 452, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.tag(1258, 452, 'D-二聚体', { size: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
  b.text(1052, 492, 'D-二聚体＝血栓形成与活跃降解的印记（DVT·DIC）', { size: 9.5, fill: C.warnD })
  b.text(1052, 520, '溶栓药（t-PA·尿激酶）＝借用拆迁队急救，时间窗为天花板', { size: 9.5, fill: C.sub })
  b.text(1052, 544, '肝素抗凝以 aPTT 监测，过量以鱼精蛋白拮抗', { size: 9, fill: C.mute })

  // ============ 三、ABO 与 Rh ============
  b.panel(30, 580, 1340, 400, { title: '三、ABO 血型与 Rh 血型：抗原-抗体互补与输血' })
  b.table(46, 630, 600, {
    headers: ['表型', '红细胞抗原', '血浆天然抗体', '红细胞可输给', '可接受红细胞'],
    colW: [64, 118, 138, 138, 142], rowH: 36, fontSize: 10,
    rows: [
      ['A', 'A', '抗 B', 'A、AB', 'A、O'],
      ['B', 'B', '抗 A', 'B、AB', 'B、O'],
      ['AB', 'A、B', '无', 'AB', 'A、B、AB、O'],
      ['O', 'H（无 A/B）', '抗 A 与抗 B', 'A、B、AB、O', 'O'],
    ],
  })
  b.wtext(46, 846, 'ABO 基因位于第 9 号染色体，A/B 共显性、O 隐性；O 型「万能供体」仅指红细胞——其全血与血浆含抗 A/抗 B 并不万能，现代成分输血恪守同型。', { size: 9.5, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(46, 872, '孟买型（hh）：H 抗原亦缺——红细胞不被任何抗血清凝集，血清却含抗 H，连 O 型也不能接受；极端个例反证糖链底物的层级逻辑。', { size: 9.5, fill: C.sub, maxW: 600, lh: 15 })
  b.text(46, 920, '血型鉴定：正定型查红细胞抗原、反定型查血清抗体，互为印证；Landsteiner 1901 年交叉凝集实验开山。', { size: 9.5, fill: C.sub })
  // Rh-D 新生儿溶血
  b.text(680, 624, 'Rh 血型与新生儿溶血病', { size: 13, weight: 700, fill: C.badD })
  b.text(680, 650, 'ABO 不合：常见而轻（天然 IgM·首胎即可）｜Rh：少见而重（IgG·二胎起）', { size: 10, fill: C.sub })
  b.tag(805, 682, '① 首胎分娩：Rh^{+} 胎血入母', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.text(900, 686, '初次免疫慢而弱——首胎常安然无恙', { size: 9.5, fill: C.sub })
  b.arrow(805, 694, 805, 712, { stroke: C.sub, sw: 1.6 })
  b.tag(805, 726, '② 记忆 B 细胞建档', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.text(900, 730, '再次妊娠仍为 Rh^{+} 胎儿时引爆', { size: 9.5, fill: C.sub })
  b.arrow(805, 738, 805, 756, { stroke: C.sub, sw: 1.6 })
  b.tag(805, 770, '③ IgG 抗 D 经胎盘入胎', { size: 10, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.text(900, 774, '二次应答快而猛——经胎盘攻击胎儿红细胞', { size: 9.5, fill: C.sub })
  b.arrow(805, 782, 805, 800, { stroke: C.sub, sw: 1.6 })
  b.tag(805, 814, '④ 新生儿溶血病', { size: 10.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
  b.text(900, 818, '胎儿贫血、黄疸，重者核黄疸或胎死宫内', { size: 9.5, fill: C.sub })
  b.rect(680, 844, 674, 72, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.5, rx: 8 })
  b.text(696, 868, '预防（被动免疫的教科书示范）：孕 28 周前后＋产后 72 h 内注射抗 D 免疫球蛋白——', { size: 10, weight: 700, fill: C.okD })
  b.text(696, 894, '被动 IgG 抢先清除闯入母体的胎儿红细胞，并经抗体反馈压低母体自身应答。', { size: 9.5, fill: C.sub })
  b.text(680, 948, '交叉配型：', { size: 11, weight: 700, fill: C.accD })
  b.text(745, 948, '主侧＝受者血清＋供者红细胞（必须无凝集·一票否决）；次侧＝供者血清＋受者红细胞', { size: 10, fill: C.sub })
  b.text(680, 972, '其他风险：', { size: 11, weight: 700, fill: C.warnD })
  b.text(745, 972, '发热（抗白细胞抗体）·过敏·输血相关急性肺损伤——输血从来不是无风险的液体置换。', { size: 10, fill: C.sub })
}

export default scene({
  title: '止血、凝血与血型：三幕止血剧与免疫学格局',
  subtitle: '止血三步：血管收缩（即刻）→血小板 vWF-GPIb 粘附、GPIIb/IIIa 聚集成白色栓（数分钟）→凝血瀑布交联纤维蛋白加固红色栓；内源 XII→XI→IX→VIII 由 aPTT、外源 TF-VII 由 PT 监测，纤溶 t-PA 再通；ABO 天然 IgM 即刻溶血、Rh-D 溶血重发于二胎、抗 D 于孕 28 周与产后 72 h 预防',
  draw,
})
