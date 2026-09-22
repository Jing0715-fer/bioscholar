// em ch1-s4 电子显微学的分支版图（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三大模式 ============
  b.panel(30, 132, 1340, 300, { title: '一、三大模式：透射、扫描与扫描透射' })
  // ---- TEM ----
  b.tag(250, 190, 'TEM 透射电子显微镜', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 14, weight: 700, pad: 10 })
  b.rect(235, 208, 30, 8, { fill: C.sub })
  ;[230, 250, 270].forEach(x => b.line(x, 218, x, 250, { stroke: C.warn, sw: 1.3 }))
  b.rect(200, 252, 100, 5, { fill: C.enz })
  b.rect(212, 262, 76, 22, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.circle(212, 273, 4, { fill: C.acc }); b.circle(288, 273, 4, { fill: C.acc })
  b.line(230, 259, 224, 264, { stroke: C.warn, sw: 1.2 })
  b.line(270, 259, 276, 264, { stroke: C.warn, sw: 1.2 })
  b.line(224, 284, 206, 310, { stroke: C.warn, sw: 1.2 })
  b.line(276, 284, 294, 310, { stroke: C.warn, sw: 1.2 })
  b.rect(203, 312, 94, 7, { fill: C.ok })
  b.ctext(250, 342, '样品', { size: 10.5, fill: C.mute })
  b.ctext(250, 340, '', { size: 10 })
  b.wtext(70, 356, '平行束穿透薄样品，一次性记录整幅像；同一台仪器可在成像与衍射模式间切换——分辨率最高的模式。', { size: 11.5, fill: C.sub, maxW: 360, lh: 17 })
  // ---- SEM ----
  b.tag(670, 190, 'SEM 扫描电子显微镜', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 14, weight: 700, pad: 10 })
  b.rect(655, 208, 30, 8, { fill: C.sub })
  b.line(670, 218, 670, 258, { stroke: C.warn, sw: 1.6 })
  b.line(630, 236, 710, 236, { stroke: C.mute, sw: 1.4, dash: '4 4', marker: 'mute', markerStart: 'mute' })
  b.rect(610, 260, 120, 7, { fill: C.enz })
  b.arrow(645, 258, 617, 222, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(695, 258, 723, 222, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(600, 214, '二次电子', { size: 10.5, fill: C.badD })
  b.ctext(742, 214, '背散射电子', { size: 10.5, fill: C.badD })
  b.wtext(490, 356, '聚焦探针在表面逐点扫描，收集二次电子与背散射电子重建形貌——景深大、制样相对简单，表面形貌主力。', { size: 11.5, fill: C.sub, maxW: 360, lh: 17 })
  // ---- STEM ----
  b.tag(1120, 190, 'STEM 扫描透射电子显微镜', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 14, weight: 700, pad: 10 })
  b.rect(1105, 208, 30, 8, { fill: C.sub })
  b.line(1100, 218, 1120, 254, { stroke: C.warn, sw: 1.4 })
  b.line(1140, 218, 1120, 254, { stroke: C.warn, sw: 1.4 })
  b.line(1080, 236, 1160, 236, { stroke: C.mute, sw: 1.4, dash: '4 4', marker: 'mute', markerStart: 'mute' })
  b.rect(1092, 256, 56, 5, { fill: C.enz })
  b.line(1120, 263, 1120, 296, { stroke: C.warn, sw: 1.4 })
  b.circle(1120, 312, 26, { stroke: C.enz, sw: 2.4 })
  b.circle(1120, 312, 10, { fill: C.acc })
  b.ctext(1120, 316, 'BF', { size: 9, fill: C.accD, weight: 700 })
  b.text(1152, 316, 'ADF/HAADF', { size: 9.5, fill: C.enzD, weight: 700 })
  b.wtext(940, 356, '探针逐点扫描、样品下方按散射角分区接收：兼得 Z 衬度成像与逐点谱学（EELS/EDS）的优势。', { size: 11.5, fill: C.sub, maxW: 360, lh: 17 })
  b.ctext(700, 424, '三大模式的区别，本质是从电子-样品相互作用的同一信号家族中各自挑选哪些信号来成像', { size: 11, weight: 600, fill: C.sub })

  // ============ 二、生物制样三大体系 ============
  b.panel(30, 456, 660, 250, { title: '二、生物制样三大体系与两大应用传统' })
  b.table(50, 516, 620, {
    headers: ['制样体系', '核心操作', '可达分辨率'],
    colW: [130, 290, 200], rowH: 34, fontSize: 11.5,
    rows: [
      ['负染', '重金属盐环绕干燥成壳', '约 15–20 Å，分钟级筛查'],
      ['树脂包埋切片', '戊二醛/锇酸固定、脱水、超薄切片', '约 2–10 nm，形态学金标准'],
      ['玻璃化冷冻', '液态乙烷 plunge-freezing', '1.2–4 Å（颗粒），近天然态'],
    ],
  })
  b.tag(210, 684, '材料传统：强束流原子分辨', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 11.5, weight: 700, pad: 9 })
  b.tag(500, 684, '生物传统：低剂量 数十 e^{-}/Å^{2} + 平均重构', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11.5, weight: 700, pad: 9 })

  // ============ 三、三维方法谱系与三角权衡 ============
  b.panel(710, 456, 660, 250, { title: '三、三维方法谱系：分辨率-通量-原位的三角权衡' })
  b.wtext(730, 510, '· 单颗粒分析（SPA）：相同颗粒的多视角投影靠平均与分类逼出高分辨，1.2–4 Å；要求可溶、均一', { size: 11.5, fill: C.sub, maxW: 250, lh: 17 })
  b.wtext(730, 560, '· 电子断层扫描（ET）：单次倾转序列直接反投影，唯一适合不可重复结构，2–10 nm；厚度须低于约 300 nm', { size: 11.5, fill: C.sub, maxW: 250, lh: 17 })
  b.wtext(730, 615, '· 电子晶体学（含 MicroED）：衍射相位外推获得原子参数，原子级；结晶是瓶颈', { size: 11.5, fill: C.sub, maxW: 250, lh: 17 })
  const tri: [number, number][] = [[1190, 505], [1060, 665], [1320, 665]]
  b.polygon(tri, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(1190, 492, '分辨率', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(1052, 686, '原位', { size: 12.5, weight: 700, fill: C.ink })
  b.ctext(1330, 686, '通量', { size: 12.5, weight: 700, fill: C.ink })
  b.circle(1190, 545, 5.5, { fill: C.bad })
  b.text(1200, 549, 'SPA', { size: 11, weight: 700, fill: C.badD })
  b.circle(1095, 625, 5.5, { fill: C.dna })
  b.text(1088, 612, 'ET', { size: 11, weight: 700, fill: C.dnaD })
  b.circle(1272, 588, 5.5, { fill: C.pro })
  b.text(1240, 574, '晶体学', { size: 11, weight: 700, fill: C.proD })

  // ============ 四、选型路线图 ============
  b.panel(30, 730, 1340, 248, { title: '四、选型路线图：样品形态、制样可能与目标精度的交点' })
  b.table(45, 778, 1310, {
    headers: ['问题类型', '首选方法', '典型分辨率', '关键限制'],
    colW: [330, 300, 220, 460], rowH: 30, fontSize: 12,
    rows: [
      ['可溶蛋白/复合物原子结构', '单颗粒分析', '1.2–4 Å', '需大量均一颗粒，分子量偏小时信噪比不足'],
      ['细胞器/细胞原位三维形态', '电子断层扫描', '2–10 nm', '厚度须低于约 300 nm，倾转致剂量累积'],
      ['病毒颗粒快速筛查', '负染 TEM', '15–20 Å', '染料掩盖表面细节'],
      ['表面形貌与断口', 'SEM', '约 1 nm（场发射）', '仅表面信息'],
      ['膜蛋白二维晶体/小分子晶体', '电子晶体学/MicroED', '原子级', '结晶是瓶颈'],
    ],
  })
}

export default scene({
  title: '电子显微学的分支版图：模式、传统与选型',
  subtitle: 'TEM 成像与衍射一体、SEM 收表面信号、STEM 兼得 Z 衬度与谱学；负染 15–20 Å、树脂切片 2–10 nm、玻璃化冷冻 1.2–4 Å；SPA-ET-电子晶体学三角权衡',
  draw,
})
