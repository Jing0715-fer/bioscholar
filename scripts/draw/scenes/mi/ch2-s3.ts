// mi ch2-s3 细胞膜、中体与细胞内含物（39-f 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、流动镶嵌模型 ============
  b.panel(30, 132, 1340, 286, { title: '一、原核细胞膜：厚约 7–8 nm 的流动镶嵌模型（Singer 与 Nicolson，1972）' })

  // 膜双层
  b.bilayer(70, 258, 660, { h: 16, tint: C.dna })
  // 内在蛋白（α螺旋束）
  b.rect(150, 240, 36, 52, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  // 内在蛋白（β桶）
  b.rect(340, 240, 42, 52, { fill: C.proL, stroke: C.pro, sw: 2, rx: 5 })
  for (let i = 0; i < 4; i++) b.line(348 + i * 9, 246, 348 + i * 9, 286, { stroke: C.pro, sw: 1.2, opacity: 0.6 })
  // 外周蛋白（静电附着于膜表面）
  b.ellipse(560, 244, 24, 13, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(560, 214, '外周蛋白（静电附着）', { size: 11.5, weight: 600, fill: C.rnaD })

  // 膜厚标注
  b.line(740, 252, 740, 280, { stroke: C.sub, sw: 1.5, marker: 'mute', markerStart: 'mute' })
  b.ctext(740, 240, '7–8 nm', { size: 10.5, weight: 700, fill: C.sub })

  // 构件标注（引线 + 标签）
  b.line(168, 296, 168, 306, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  b.ctext(168, 322, 'α 螺旋束', { size: 11.5, weight: 600, fill: C.proD })
  b.line(361, 296, 361, 306, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  b.ctext(361, 322, 'β 桶', { size: 11.5, weight: 600, fill: C.proD })
  b.line(640, 284, 640, 304, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  b.ctext(640, 322, '磷脂双层（流动基质）', { size: 11.5, weight: 600, fill: C.dnaD })

  b.wtext(70, 348, '膜不含甾醇（支原体例外）；以不饱和/饱和脂肪酸比例调节流动性——脂双层是流动的基质，内在蛋白可在其中侧向漂移。', { size: 11.5, fill: C.mute, maxW: 740, lh: 18 })

  // 右：一专多能卡
  b.rect(850, 180, 500, 216, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(866, 208, '一专多能：原核膜的五重职能', { size: 14.5, weight: 700, fill: C.ink })
  const roles: Array<[string, string]> = [
    ['呼吸链与 ATP 合成——产能场所', C.enz],
    ['细胞壁前体（肽聚糖单体）的合成与输出', C.dna],
    ['营养物质的主动 / 协助运输', C.acc],
    ['鞭毛基体的锚定与运动传递', C.pro],
    ['趋化受体等信号的感知平台', C.rna],
  ]
  roles.forEach(([t, c], i) => {
    b.rect(866, 231 + i * 30, 10, 10, { fill: c, rx: 2.5 })
    b.text(886, 241 + i * 30, t, { size: 12.5, weight: 600, fill: C.sub })
  })

  // ============ 二、中体与拟核；气泡与磁小体 ============
  b.panel(30, 438, 1340, 260, { title: '二、中体与拟核；气泡与磁小体——膜衍生与非储藏性特化结构' })

  // 左：含中体与拟核的细菌
  b.bacterium(260, 548, 400, 138, { shape: 'rod', fill: '#f8fafc', stroke: C.sub })
  b.path('M 200 480 C 250 482, 258 540, 205 545 C 165 549, 165 590, 205 596', { stroke: C.dna, sw: 3.2 })
  b.path('M 218 480 C 268 484, 274 528, 220 532 C 182 536, 182 578, 220 586', { stroke: C.dna, sw: 3.2 })
  b.dna(300, 548, 150, { amp: 11, period: 44, stroke: C.rna, sw: 2.4, rungC: C.rna })
  b.circle(225, 540, 11, { fill: C.dna })
  b.ctext(225, 544, '①', { size: 12, weight: 700, fill: '#ffffff' })
  b.circle(365, 548, 11, { fill: C.rna })
  b.ctext(365, 552, '②', { size: 12, weight: 700, fill: '#ffffff' })
  b.wtext(70, 634, '① 中体（mesosome）：膜向内褶叠成的囊状结构——传统认为参与呼吸、染色体分配与横隔形成（存在制样假象的争议）；② 拟核附着于膜，协助子代基因组的均衡分配。', { size: 11, fill: C.sub, maxW: 580, lh: 16 })

  // 右上：气泡
  b.zone(690, 480, 320, 200, { label: '气泡（gas vesicle）', sub: '提供浮力的蛋白微管', fill: C.accL, stroke: C.acc, lfill: C.accD })
  for (let i = 0; i < 5; i++) b.ellipse(740 + i * 47, 585, 17, 5.5, { fill: C.bg, stroke: C.acc, sw: 1.8 })
  b.wtext(710, 626, '宽约 70 nm、长数百纳米；只允许气体自由扩散而拒斥水与溶质——气体进入即产生浮力。', { size: 10.5, fill: C.sub, maxW: 284, lh: 16 })

  // 右下：磁小体
  b.zone(1030, 480, 320, 200, { label: '磁小体（magnetosome）', sub: '趋磁细菌的「生物罗盘」', fill: C.dnaL, stroke: C.dna, lfill: C.dnaD })
  b.bacterium(1190, 568, 170, 40, { shape: 'rod', fill: C.bg, stroke: C.dna })
  for (let i = 0; i < 5; i++) {
    const x = 1120 + i * 35
    b.polygon([[x, 561], [x + 7, 568], [x, 575], [x - 7, 568]], { fill: C.ink })
  }
  b.arrow(1108, 606, 1272, 606, { stroke: C.sub, sw: 1.8, marker: 'mute' })
  b.ctext(1190, 624, '地磁场方向', { size: 10.5, weight: 600, fill: C.sub })
  b.wtext(1050, 644, 'Fe₃O₄ 晶体 30–120 nm（稳定单磁畴）· 脂膜包裹 · 沿长轴成链定向。', { size: 10.5, fill: C.sub, maxW: 288, lh: 15 })

  // ============ 三、储藏颗粒表 ============
  b.panel(30, 718, 1340, 262, { title: '三、储藏颗粒：看得见的「细胞粮仓」（种类随菌种而异，具鉴定价值）' })
  b.table(50, 752, 1300, {
    headers: ['颗粒种类', '化学本质', '储藏对象', '识别方法', '代表菌'],
    colW: [180, 270, 170, 340, 340],
    rowH: 36,
    fontSize: 12,
    rows: [
      ['PHB 颗粒', '聚-β-羟丁酸（聚酯）', '碳源与能源', '脂溶性染料（尼罗蓝等）', '根瘤菌、假单胞菌'],
      ['糖原', 'α-葡聚糖', '碳源与能源', '碘液染棕红色', '大肠杆菌'],
      ['异染粒', '多聚偏磷酸盐', '磷源与能量', '异染性（甲苯胺蓝变红紫）', '白喉棒状杆菌——辅助鉴定'],
      ['硫滴', '元素硫（S⁰）', '硫与还原力', '强折光、相差显微镜', '紫色硫细菌、丝状硫菌'],
      ['蓝藻素颗粒', '精氨酸–天冬氨酸多聚物', '氮源', '蓝细菌特征颗粒', '蓝细菌'],
    ],
  })
}

export default scene({
  title: '细菌细胞膜、中体与内含物：一专多能的膜与细胞粮仓',
  subtitle: '细胞膜厚约 7–8 nm（流动镶嵌模型，1972）；中体为膜内褶；储藏物含 PHB、糖原、异染粒与硫滴；气泡宽约 70 nm 产生浮力；磁小体 Fe₃O₄ 成链定向',
  draw,
})
