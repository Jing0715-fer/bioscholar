// im ch4-s2 模式识别受体与 PAMP/DAMP（39-g 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、PAMP 与 DAMP ============
  b.panel(30, 132, 1340, 268, { title: '一、PAMP 与 DAMP：病原的「保守模式」与自身的「危险信号」' })

  b.rect(60, 180, 480, 140, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.7, rx: 9 })
  b.text(80, 208, 'PAMP（病原相关分子模式）', { size: 13.5, weight: 700, fill: C.bad })
  b.wtext(80, 232, '病原体上保守而必需的分子结构——突变即失去生存力，因而难以逃逸识别。', { size: 11.5, fill: C.sub, maxW: 440, lh: 17 })
  b.wtext(80, 268, '来源：细菌脂多糖、鞭毛、核酸，真菌甘露聚糖等病原体组分。', { size: 11.5, fill: C.sub, maxW: 440, lh: 17 })
  b.bacterium(150, 308, 60, 26, { shape: 'rod', fill: '#fee2e2', stroke: C.bad })
  b.text(210, 312, '病原体（外源信号）', { size: 10.5, fill: C.mute })

  b.rect(860, 180, 480, 140, { fill: C.warnL, fillOp: 0.55, stroke: C.warn, sw: 1.7, rx: 9 })
  b.text(880, 208, 'DAMP（损伤相关分子模式）', { size: 13.5, weight: 700, fill: '#92400e' })
  b.wtext(880, 232, '受损伤或应激的自身细胞释放的内源性警戒信号——「危险」而非「非己」也可拉响警报。', { size: 11.5, fill: C.sub, maxW: 440, lh: 17 })
  b.wtext(880, 268, '来源：损伤细胞释放的组分与异常定位的自身分子。', { size: 11.5, fill: C.sub, maxW: 440, lh: 17 })
  b.circle(950, 308, 20, { fill: '#fef3c7', stroke: C.warn, sw: 2 })
  b.path('M 943 301 L 957 315 M 957 301 L 943 315', { stroke: C.warn, sw: 2.2 })
  b.text(988, 312, '损伤的自身细胞（内源信号）', { size: 10.5, fill: C.mute })

  b.arrow(545, 250, 640, 288, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.arrow(855, 250, 760, 288, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  b.tag(700, 300, 'PRR 模式识别受体（种系基因编码）', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 13, weight: 700, pad: 11 })

  b.wtext(60, 372, '1989 年 Janeway 预言固有免疫必有先天设定的「非己识别」装置；1994 年 Matzinger 提出「危险模式」；1997 年 Medzhitov 与 Janeway 克隆第一个人类同源受体 TLR4（识别脂多糖）。', { size: 10.5, fill: C.mute, maxW: 1280, lh: 15 })

  // ============ 二、PRR 家族与 TLR 分工 ============
  b.panel(30, 416, 1340, 286, { title: '二、PRR 家族总览：膜型 · 胞质型 · 分泌型，与人 TLR 的定位分工' })

  const fams: Array<[string, string, string, string, string]> = [
    ['膜型 PRR', 'TLR · CLR', '识别细胞外 / 吞噬体中的配体', C.dna, C.dnaD],
    ['胞质型 PRR', 'NLR · RLR', '感知进入胞质的配体与核酸', C.pro, C.proD],
    ['分泌型 PRR', 'MBL · CRP', '循环中识别并启动级联', C.acc, C.accD],
  ]
  fams.forEach(([name, members, func, col, colD], i) => {
    const yy = 456 + i * 82
    b.rect(60, yy, 380, 74, { fill: col, fillOp: 0.09, stroke: col, sw: 1.7, rx: 9 })
    b.text(80, yy + 26, name, { size: 13.5, weight: 700, fill: colD })
    b.text(80, yy + 48, members, { size: 12.5, weight: 600, fill: colD })
    b.text(80, yy + 66, func, { size: 10.5, fill: C.sub })
  })

  // 细胞示意：表面 TLR 与内体 TLR
  b.rect(480, 470, 460, 200, { fill: C.bg, stroke: C.sub, sw: 2.2, rx: 20 })
  ;[540, 580, 620, 660, 700, 740, 780, 820, 860, 900].forEach(x => {
    b.line(x, 452, x, 469, { stroke: C.dna, sw: 3 })
    b.circle(x, 447, 5, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  })
  b.ctext(710, 502, '细胞表面 TLR：识别胞外病原体组分（如 TLR4 识别脂多糖）', { size: 11, weight: 600, fill: C.dnaD })
  b.vesicle(590, 556, 16, { fill: C.accL, stroke: C.acc })
  b.vesicle(830, 556, 16, { fill: C.accL, stroke: C.acc })
  b.ctext(710, 562, '内体', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(710, 600, '内体 TLR：吞噬后识别病原体核酸（如 TLR7 / TLR9）', { size: 11, weight: 600, fill: C.accD })
  b.tag(710, 646, '信号汇合：NF-κB 与 IRF 转录轴', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11.5, weight: 700, pad: 9 })
  b.ctext(710, 690, '细胞（示意）', { size: 9.5, fill: C.mute })

  b.wtext(970, 490, '人类共表达 10 种 TLR（小鼠 12–13 种，人无 TLR11–13），以同源或异源二聚体形式工作。', { size: 11.5, fill: C.sub, maxW: 370, lh: 17 })
  b.wtext(970, 546, '细胞表面的 TLR 识别病原体的胞外组分；内体中的 TLR 在吞噬之后识别核酸。', { size: 11.5, fill: C.sub, maxW: 370, lh: 17 })
  b.wtext(970, 600, '第 10 种 TLR10 的配体与功能尚未完全明确。', { size: 11.5, fill: C.sub, maxW: 370, lh: 17 })
  b.wtext(970, 636, 'Toll 基因最早因决定果蝇背腹轴发育而闻名，1996 年 Hoffmann 证明它同时是果蝇抗真菌免疫的关键。', { size: 10.5, fill: C.mute, maxW: 370, lh: 15 })

  // ============ 三、炎症小体与「许可证」 ============
  b.panel(30, 714, 1340, 264, { title: '三、NLRP3 炎症小体与适应性免疫的「许可证」' })

  b.rect(60, 754, 640, 198, { fill: C.bg, stroke: C.enz, sw: 1.6, rx: 9 })
  b.text(80, 780, 'NLRP3 炎症小体：「启动—活化」两信号', { size: 13.5, weight: 700, fill: C.enzD })
  b.rect(80, 796, 270, 56, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.ctext(215, 818, '① 启动信号', { size: 12, weight: 700, fill: C.ink })
  b.ctext(215, 840, 'NF-κB 上调 IL-1β 前体与 NLRP3', { size: 10, fill: C.sub })
  b.arrow(354, 824, 378, 824, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.rect(382, 796, 270, 56, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.4, rx: 7 })
  b.ctext(517, 818, '② 活化信号', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(517, 840, '组装 NLRP3–ASC–caspase-1 复合体', { size: 10, fill: C.sub })
  b.arrow(517, 856, 517, 880, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.rect(80, 884, 572, 56, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.4, rx: 7 })
  b.ctext(366, 906, 'caspase-1 成熟 IL-1β 与 IL-18，并经 gasdermin D 打孔诱发细胞焦亡', { size: 11.5, weight: 600, fill: C.bad })
  b.ctext(366, 928, '焦亡释放的 DAMP 进一步放大炎症', { size: 10.5, fill: C.sub })

  b.rect(740, 754, 580, 198, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(760, 780, 'PRR 为适应性免疫发放「许可证」', { size: 13.5, weight: 700, fill: C.accD })
  const lic: Array<[string, string]> = [
    ['PRR 活化', '识别 PAMP / DAMP 并传导信号'],
    ['共刺激分子上调', '为 T 细胞活化提供第二信号'],
    ['佐剂作用', '疫苗佐剂的分子基础即在于此'],
  ]
  lic.forEach(([t, s], i) => {
    b.circle(780, 808 + i * 44, 3.5, { fill: C.acc })
    b.text(792, 812 + i * 44, t, { size: 12.5, weight: 700, fill: C.ink })
    b.text(792 + 124, 812 + i * 44, s, { size: 11.5, fill: C.sub })
  })
  b.wtext(760, 926, '无 PRR 信号则无共刺激上调——抗原单独刺激倾向于耐受。', { size: 11, fill: C.mute, maxW: 540, lh: 15 })
}

export default scene({
  title: '模式识别受体与 PAMP/DAMP：固有免疫识别的核心逻辑',
  subtitle: 'PAMP 为病原体保守且必需的分子模式、DAMP 为损伤细胞释放的内源性危险信号，共同被种系基因编码的 PRR（膜型 TLR/CLR、胞质型 NLR/RLR、分泌型 MBL/CRP）识别；人 TLR 共 10 种，表面识别胞外组分、内体识别核酸，信号汇合于 NF-κB 与 IRF；NLRP3 炎症小体经两信号组装，caspase-1 成熟 IL-1β/IL-18 并经 gasdermin D 诱发焦亡；PRR 上调共刺激分子是佐剂作用的分子基础',
  draw,
})
