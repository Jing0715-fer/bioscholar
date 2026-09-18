// cb ch8-s1 细胞通讯与受体分类总论（39-d 批A 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、细胞通讯的五种方式 ============
  b.panel(30, 132, 660, 470, { title: '一、细胞通讯的五种方式' })
  // 1 内分泌
  b.text(64, 222, '内分泌', { size: 11.5, weight: 700, fill: C.ink })
  b.text(64, 240, '激素经血液远距离', { size: 9, fill: C.mute })
  b.cell(250, 218, 52, 24, {})
  b.ctext(250, 260, '内分泌细胞', { size: 9, fill: C.mute })
  b.arrow(316, 218, 560, 218, { stroke: C.acc, sw: 2.6, marker: 'acc' })
  b.ctext(438, 204, '血液（远距离）', { size: 9.5, weight: 700, fill: C.accD })
  b.cell(600, 218, 40, 22, {})
  b.ctext(600, 260, '靶细胞', { size: 9, fill: C.mute })
  b.ctext(438, 236, '胰岛素 · 甲状腺素', { size: 9, fill: C.mute })
  // 2 旁分泌
  b.text(64, 300, '旁分泌', { size: 11.5, weight: 700, fill: C.ink })
  b.text(64, 318, '组织液扩散至邻近', { size: 9, fill: C.mute })
  b.cell(260, 296, 44, 22, {})
  b.arrow(316, 296, 420, 296, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.cell(464, 296, 44, 22, {})
  b.ctext(390, 282, '邻近细胞', { size: 9, fill: C.mute })
  b.ctext(390, 316, '生长因子 · 神经递质（中枢）', { size: 9, fill: C.mute })
  // 3 自分泌
  b.text(64, 378, '自分泌', { size: 11.5, weight: 700, fill: C.ink })
  b.text(64, 396, '对自身分泌信号起反应', { size: 9, fill: C.mute })
  b.cell(300, 374, 46, 24, {})
  b.path('M 342,360 C 400,330 460,380 366,392', { stroke: C.warn, sw: 2.4, fill: 'none', marker: 'warn' })
  b.ctext(428, 352, '自身受体', { size: 9, weight: 700, fill: '#78350f' })
  b.ctext(428, 396, '肿瘤生长因子自给回路', { size: 9, fill: C.mute })
  // 4 突触
  b.text(64, 456, '突触信号', { size: 11.5, weight: 700, fill: C.ink })
  b.text(64, 474, '定向、毫秒级传递', { size: 9, fill: C.mute })
  b.rect(250, 444, 96, 34, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 6 })
  b.ctext(298, 465, '突触前末梢', { size: 9, weight: 700, fill: C.rnaD })
  b.arrow(356, 462, 420, 462, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.ctext(388, 448, '神经递质', { size: 9, weight: 700, fill: C.rnaD })
  b.cell(470, 462, 44, 24, {})
  b.ctext(470, 500, '突触间隙 20—40 nm', { size: 9, fill: C.mute })
  // 5 接触依赖
  b.text(64, 534, '接触依赖', { size: 11.5, weight: 700, fill: C.ink })
  b.text(64, 552, '膜结合信号直接接触', { size: 9, fill: C.mute })
  b.cell(280, 538, 46, 26, {})
  b.cell(392, 538, 46, 26, {})
  b.line(320, 532, 352, 532, { stroke: C.pro, sw: 3 })
  b.line(320, 544, 352, 544, { stroke: C.pro, sw: 3 })
  b.ctext(336, 516, '膜结合配体×受体', { size: 9, weight: 700, fill: C.proD })
  b.ctext(336, 580, 'Notch 途径：一个细胞的决定影响邻居', { size: 9, fill: C.mute })

  // ============ 二、信号分子与受体的匹配 ============
  b.panel(710, 132, 660, 470, { title: '二、按溶解性匹配：亲水受体在膜上，亲脂受体在胞内' })
  // 细胞截面
  b.cell(1030, 376, 290, 210, {})
  b.nucleusU(1060, 400, 62)
  b.ctext(1060, 404, '核', { size: 11, weight: 700, fill: C.proD })
  b.bilayer(752, 262, 560)
  b.ctext(1030, 244, '质膜（磷脂双层）', { size: 10, weight: 700, fill: C.dnaD })
  // 亲水性分子 → 膜受体
  b.ion(790, 216, '亲水', { r: 17, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10 })
  b.arrow(790, 236, 790, 252, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(770, 268, 40, 34, { fill: C.accL, stroke: C.acc, sw: 2, rx: 5 })
  b.arrow(838, 300, 960, 330, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.wtext(742, 352, '蛋白质 / 肽类激素、儿茶酚胺、生长因子：不能穿膜，受体位于细胞表面', { size: 9.5, fill: C.sub, maxW: 200, lh: 13.5 })
  // 亲脂性分子 → 核受体
  b.ion(1250, 216, '亲脂', { r: 17, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10 })
  b.arrow(1250, 236, 1250, 252, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.spline([[1250, 262], [1230, 300], [1150, 340], [1096, 372]], { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.wtext(1150, 320, '类固醇激素、甲状腺素、视黄酸：自由扩散穿膜，受体位于胞内（核受体）', { size: 9.5, fill: C.sub, maxW: 190, lh: 13.5 })
  b.tag(1064, 486, '核受体＝配体依赖的转录因子', { fill: C.proL, stroke: C.pro, size: 9.5, tfill: C.proD, pad: 5 })
  // 气体信使
  b.ion(890, 216, 'NO', { r: 13, fill: C.okL, stroke: C.ok, tfill: C.ok, size: 10 })
  b.ion(930, 216, 'CO', { r: 13, fill: C.okL, stroke: C.ok, tfill: C.ok, size: 10 })
  b.ctext(910, 244, '气体信使：高速扩散、作用范围极短', { size: 9, fill: C.ok })
  b.wtext(742, 548, '匹配原则：信号分子按溶解性与受体位置匹配——水溶性走膜受体级联，脂溶性直接进核调控转录。', { size: 10, fill: C.mute, maxW: 600, lh: 14 })

  // ============ 三、受体分类总表与基本特征 ============
  b.panel(30, 628, 1340, 352, { title: '三、受体分类总表（七类）与信号转导的基本特征' })
  b.table(60, 682, 1280, {
    headers: ['受体类别', '结构特征', '代表与配体', '主要通路'],
    colW: [260, 300, 420, 300],
    rowH: 29,
    fontSize: 10,
    rows: [
      ['离子通道偶联受体', '配体门控离子通道', 'nAChR（乙酰胆碱）、GABA_A', '膜电位改变'],
      ['G 蛋白偶联受体（GPCR）', '七次跨膜 α 螺旋', '肾上腺素、胰高血糖素、光（视紫红质）', 'cAMP、IP₃/DAG'],
      ['受体酪氨酸激酶（RTK）', '单次跨膜＋胞内 Tyr 激酶域', '胰岛素、EGF、PDGF', 'Ras-MAPK、PI3K-AKT'],
      ['酪氨酸激酶相关受体', '自身无激酶、募集 JAK', '细胞因子、生长激素、瘦素', 'JAK-STAT'],
      ['受体丝/苏氨酸激酶', '胞内 Ser/Thr 激酶域', 'TGF-β 超家族', 'Smad'],
      ['受体鸟苷酸环化酶', '胞内 GC 域', '心钠肽（ANP）', 'cGMP'],
      ['核受体', '配体依赖的转录因子', '糖皮质激素、雌激素、甲状腺素', '直接调控转录'],
    ],
  })
  b.text(60, 920, '基本特征：', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(140, 940, '特异性', { fill: C.dnaL, stroke: C.dna, size: 9.5, tfill: C.dnaD, pad: 5 })
  b.tag(240, 940, '级联放大', { fill: C.rnaL, stroke: C.rna, size: 9.5, tfill: C.rnaD, pad: 5 })
  b.tag(350, 940, '网络整合', { fill: C.proL, stroke: C.pro, size: 9.5, tfill: C.proD, pad: 5 })
  b.tag(460, 940, '可终止性', { fill: C.enzL, stroke: C.enz, size: 9.5, tfill: C.enzD, pad: 5 })
  b.tag(570, 940, '时空性（AKAP 锚定）', { fill: C.accL, stroke: C.acc, size: 9.5, tfill: C.accD, pad: 5 })
  b.wtext(740, 950, 'E. Sutherland 发现 cAMP（1971 年诺贝尔奖）开创第二信使研究；Gilman 与 Rodbell 因 G 蛋白获 1994 年诺贝尔奖——信号转导是细胞生物学的核心领域。', { size: 10, fill: C.mute, maxW: 580, lh: 14 })
}

export default scene({
  title: '细胞通讯与受体分类总论：五种方式、溶解性匹配与七类受体',
  subtitle: '内分泌/旁分泌/自分泌/突触/接触依赖五种通讯；亲水受体在膜、亲脂受体在胞内；七类受体总表；信号具特异性、级联放大、整合与可终止性（1971 诺奖）',
  draw,
})
