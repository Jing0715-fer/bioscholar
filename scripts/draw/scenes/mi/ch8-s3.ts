// mi ch8-s3 质粒与转座因子（39-f 批4）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、质粒的共性与主要类群 ============
  b.panel(30, 132, 1340, 258, { title: '一、质粒的四大共性；F / R / Col / Ti 主要类群' })

  const commons: Array<[number, string, string]> = [
    [120, '自主复制', '各有复制起点；严紧型 1–2 拷贝（F、Ti），松弛型数十至上百（ColE1）'],
    [450, '不相容性', '同群质粒不能在同一细胞长期共存——据此分群'],
    [770, '非必需性', '非生长必需，决定附加性状'],
    [1080, '可转移性', '部分可经接合自主转移'],
  ]
  commons.forEach(([cx, t, s]) => {
    b.tag(cx, 190, t, { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 9 })
    b.wtext(Math.max(16, cx - 140), 214, s, { size: 10, fill: C.sub, maxW: 280, lh: 14 })
  })

  b.table(50, 262, 1300, {
    headers: ['质粒', '功能', '拷贝与转移', '代表'],
    colW: [140, 380, 380, 400],
    rowH: 26,
    fontSize: 11,
    rows: [
      ['F 质粒', '致育因子——介导接合转移染色体与质粒', '严紧型，每细胞 1–2 个拷贝', '大肠杆菌 F 因子'],
      ['R 质粒', '抗药性——携带多重耐药基因并传播', '可接合转移（传染性耐药）', 'R100 约 90 kb'],
      ['Col 质粒', '编码细菌素——抑制近缘菌', '松弛型（ColE1 数十至上百拷贝）', '大肠杆菌素 ColE1'],
      ['Ti 质粒', '致瘤——细菌到植物的天然跨界转移', '严紧型；约 200 kb', '根癌农杆菌'],
    ],
  })

  // ============ 二、R 质粒与多重耐药 ============
  b.panel(30, 402, 660, 300, { title: '二、R 质粒：传染性耐药的遗传核心' })

  // R100 结构
  b.text(50, 442, 'R100（约 90 kb）结构', { size: 12.5, weight: 700, fill: C.ink })
  b.genes(50, 478, 600, [
    { label: 'RTF（转移基因）', frac: 0.30, fill: C.accL, stroke: C.acc, size: 10 },
    { label: 'IS', frac: 0.06, fill: C.mute, stroke: C.sub, size: 9 },
    { label: 'tet', frac: 0.11, fill: C.badL, stroke: C.bad, size: 10 },
    { label: 'cm', frac: 0.11, fill: C.badL, stroke: C.bad, size: 10 },
    { label: 'sm', frac: 0.11, fill: C.badL, stroke: C.bad, size: 10 },
    { label: 'sul', frac: 0.11, fill: C.badL, stroke: C.bad, size: 10 },
    { label: 'mer', frac: 0.14, fill: C.badL, stroke: C.bad, size: 10 },
    { label: 'IS', frac: 0.06, fill: C.mute, stroke: C.sub, size: 9 },
  ])
  b.braceH(50, 516, 600, {})
  b.ctext(140, 538, 'RTF 区', { size: 10, weight: 700, fill: C.accD })
  b.ctext(430, 538, 'r 决定子（抗性串列）', { size: 10, weight: 700, fill: C.bad })
  b.ctext(350, 560, '四环素 · 氯霉素 · 链霉素 · 磺胺 · 汞离子抗性', { size: 10, fill: C.mute })

  b.rect(50, 582, 610, 106, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.4, rx: 9 })
  b.text(70, 606, '传染性耐药（Mitsuhashi，1950 年代日本痢疾暴发）', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(70, 628, '志贺菌同时对多种抗生素耐药，且耐药性能在大肠杆菌与志贺菌间经质粒接合高速传播。R 质粒由 RTF 与 r 决定子经 IS 拼接而成，转座子串列使多重耐药在菌种间播散——AMR 公共卫生问题的遗传核心。', { size: 10.5, fill: C.sub, maxW: 570, lh: 15 })

  // ============ 三、Ti 质粒跨界转移 ============
  b.panel(710, 402, 660, 300, { title: '三、Ti 质粒：细菌到植物核基因组的天然跨界转移' })

  // 农杆菌
  b.bacterium(790, 470, 120, 38, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  b.ctext(790, 448, '根癌农杆菌', { size: 11, weight: 700, fill: C.ink })
  // vir 区 + T-DNA 标注（细菌下方线性质粒示意）
  b.genes(726, 528, 130, [
    { label: 'vir 基因群', frac: 0.45, fill: C.enzL, stroke: C.enz, size: 9 },
    { label: 'T-DNA', frac: 0.55, fill: C.rnaL, stroke: C.rna, size: 9 },
  ])
  b.ctext(726, 508, 'Ti 质粒（约 200 kb）', { size: 10, fill: C.mute })

  // 植物细胞
  b.cell(1130, 470, 130, 78, { label: '植物细胞（伤口处）', double: true })
  b.nucleusU(1108, 462, 22)
  // T-DNA 箭头进入
  b.arrow(862, 470, 992, 470, { stroke: C.rna, sw: 3, marker: 'rna' })
  b.ctext(927, 452, 'T-DNA 单链转移', { size: 10, weight: 700, fill: C.rnaD })
  b.tag(927, 492, 'LB/RB 各 25 bp', { fill: C.rnaL, stroke: C.rna, size: 9, weight: 700, tfill: C.rnaD, pad: 6 })
  // 整合
  b.dna(1062, 540, 120, { amp: 6, period: 24, stroke: C.dna, sw: 1.6, rungC: C.rna })
  b.ctext(1122, 524, '整合进核基因组', { size: 10, weight: 700, fill: C.dnaD })
  b.arrow(1108, 486, 1118, 522, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.tag(1130, 570, '冠瘿瘤', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 7 })

  b.wtext(730, 606, '植物伤口分泌酚类（如乙酰丁香酮）激活 vir 操纵子；T-DNA（约 20 kb，两端各一段 25 bp 重复边界序列 LB 与 RB）被切下转移并整合，诱发冠瘿瘤。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 654, '改造后的 T-DNA（卸甲：去瘤基因、装目的基因）成为植物转基因主力载体。', { size: 10.5, weight: 700, fill: C.ink })

  // ============ 四、转座因子三级结构与机制 ============
  b.panel(30, 714, 1340, 266, { title: '四、转座因子三级：IS · 复合转座子 · Tn3 家族；两种转座机制' })

  b.genes(60, 760, 380, [
    { label: 'IR', frac: 0.13, fill: C.mute, stroke: C.sub, size: 10 },
    { label: '转座酶 tnp', frac: 0.74, fill: C.dnaL, stroke: C.dna, size: 11 },
    { label: 'IR', frac: 0.13, fill: C.mute, stroke: C.sub, size: 10 },
  ])
  b.ctext(250, 808, '插入序列 IS：0.7–1.5 kb（IS1 为 768 bp）', { size: 10, fill: C.mute })
  b.ctext(250, 824, 'IR 约 10–40 bp 反向重复', { size: 10, fill: C.mute })

  b.genes(480, 760, 380, [
    { label: 'IS', frac: 0.15, fill: C.mute, stroke: C.sub, size: 10 },
    { label: '中央基因（抗性等）', frac: 0.70, fill: C.badL, stroke: C.bad, size: 11 },
    { label: 'IS', frac: 0.15, fill: C.mute, stroke: C.sub, size: 10 },
  ])
  b.ctext(670, 808, '复合转座子 Tn5 / Tn10', { size: 10, fill: C.mute })
  b.ctext(670, 824, '两个 IS 夹住中央基因', { size: 10, fill: C.mute })

  b.genes(900, 760, 400, [
    { label: 'IR', frac: 0.09, fill: C.mute, stroke: C.sub, size: 9 },
    { label: 'tnpA 转座酶', frac: 0.33, fill: C.dnaL, stroke: C.dna, size: 9 },
    { label: 'res', frac: 0.22, fill: C.enzL, stroke: C.enz, size: 10 },
    { label: 'tnpR 解离酶', frac: 0.36, fill: C.enzL, stroke: C.enz, size: 9 },
  ])
  b.ctext(1100, 808, 'Tn3 家族：含 res 位点', { size: 10, fill: C.mute })
  b.ctext(1100, 824, '复制型转座经共整合体在 res 解离', { size: 10, fill: C.mute })

  // 两种机制卡
  b.rect(60, 848, 620, 58, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(80, 870, '复制型转座', { size: 12, weight: 700, fill: C.ink })
  b.text(80 + textW('复制型转座', 12, 700) + 14, 870, '转座子复制一份插入新位点，经共整合体在 res 解离——拷贝数 +1', { size: 10.5, fill: C.sub })
  b.rect(60, 916, 620, 46, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(80, 938, '非复制型转座', { size: 12, weight: 700, fill: C.ink })
  b.text(80 + textW('非复制型转座', 12, 700) + 14, 938, '剪切-粘贴：整体从原位搬至新位点', { size: 10.5, fill: C.sub })

  b.rect(700, 848, 640, 114, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.4, rx: 9 })
  b.text(720, 872, '基因组进化意义', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(720, 896, '驱动基因快递、插入失活、基因组重排与水平转移；McClintock 因玉米「控制因子」的发现获 1983 年诺贝尔奖。', { size: 11, fill: C.sub, maxW: 600, lh: 16 })
}

export default scene({
  title: '质粒与转座因子：F/R/Col/Ti 类群与 IS-Tn 三级结构',
  subtitle: '质粒共性：自主复制（严紧 1–2 拷贝如 F/Ti、松弛如 ColE1）、不相容、非必需、可转移；R100 约 90 kb 经 IS 拼接携五种抗性；Ti 经 T-DNA（约 20 kb）跨界转移；McClintock 1983 年诺奖',
  draw,
})
