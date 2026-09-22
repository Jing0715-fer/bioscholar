// em ch2-s4 真空系统与仪器稳定性（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、真空分级 ============
  b.panel(30, 132, 660, 300, { title: '一、真空分级：三个区，三种要求' })
  b.wtext(50, 170, '自由程的算术：气压 10^{5} Pa 时电子的平均自由程微不足道，束流刚出枪口便被散射成雾；抽到镜筒工作真空 10^{-5} Pa，平均自由程已达数百米量级——从枪到荧光屏的一米多路程才算「通畅」。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  const zone = (y: number, fill: string, stroke: string, t: string, p: string, desc: string) => {
    b.rect(50, y, 610, 60, { fill, fillOp: 0.55, stroke, sw: 1.6, rx: 8 })
    b.text(66, y + 24, t, { size: 13, weight: 700, fill: stroke })
    b.text(66, y + 44, p, { size: 12, weight: 700, fill: stroke })
    b.wtext(250, y + 22, desc, { size: 10.5, fill: C.sub, maxW: 396, lh: 15 })
  }
  zone(206, C.dnaL, C.dna, '电子枪区', '10^{-7}–10^{-8} Pa', '最苛刻：肖特基尖在 1800 K 工作，残余氧与水汽侵蚀发射面、离子回轰造成发射闪烁——枪区独享离子泵，并用差分孔与镜筒隔离。')
  zone(274, C.accL, C.acc, '镜筒主体', '约 10^{-5} Pa', '电子束沿程散射损失小，光阑与极靴不放电；直接电子探测相机腔体也要求 10^{-5}–10^{-7} Pa，避免背散射电子被气体「晕」开。')
  zone(342, C.warnL, C.warn, '样品室', '10^{-4}–10^{-5} Pa', '频繁换样牺牲部分真空换取可达性，靠差分抽气保护上游——真空链的每一环都对应一个物理损失机制。')
  b.tag(320, 416, '差分抽气衔接三区：分区达标、分段可独立放气维修', { fill: C.panelB, stroke: C.mute, tfill: C.sub, size: 11, weight: 700, pad: 9 })

  // ============ 二、泵的编队 ============
  b.panel(710, 132, 660, 300, { title: '二、泵的编队：从粗抽到终极真空' })
  b.ctext(1040, 178, '一支接力编队：压力由粗到细逐级交接，无油化是像质量要求', { size: 11, fill: C.mute })
  const pump = (x: number, name: string, range: string, desc: string, fill: string, stroke: string) => {
    b.rect(x, 196, 140, 96, { fill, fillOp: 0.5, stroke, sw: 1.6, rx: 8 })
    b.ctext(x + 70, 252, name, { size: 12.5, weight: 700, fill: stroke })
    b.ctext(x + 70, 274, range, { size: 10.5, weight: 600, fill: C.sub })
    b.wtext(x + 8, 312, desc, { size: 9.5, fill: C.sub, maxW: 128, lh: 13 })
  }
  pump(730, '机械（旋片）泵', '大气抽到几 Pa', '一切高真空泵的前级', C.warnL, C.warn)
  pump(882, '涡轮分子泵', '接力到 10^{-4} Pa', '动叶轮把分子打向排气口', C.accL, C.acc)
  pump(1034, '离子泵', '无油无振动维持', '电离残余气体，溅射钛膜捕获', C.dnaL, C.dna)
  pump(1186, '钛升华泵', '攻峰补刀', '周期升华新鲜钛膜，冷面大量吸气', C.proL, C.pro)
  b.circle(800, 222, 15, { fill: C.bg, stroke: C.sub, sw: 2 })
  b.circle(806, 222, 5.5, { fill: C.sub })
  b.line(788, 222, 800, 222, { stroke: C.sub, sw: 2 })
  for (let i = 0; i < 5; i++) b.line(942 + (i % 2) * 7, 208 + i * 7, 986 - (i % 2) * 7, 208 + i * 7, { stroke: C.acc, sw: 2.2 })
  b.rect(1104, 210, 60, 24, { fill: C.bg, stroke: C.dna, sw: 1.8 })
  b.line(1118, 214, 1118, 230, { stroke: C.dna, sw: 1.6 })
  b.line(1150, 214, 1150, 230, { stroke: C.dna, sw: 1.6 })
  b.circle(1126, 222, 2.2, { fill: C.dna }); b.circle(1136, 222, 2.2, { fill: C.dna }); b.circle(1144, 222, 2.2, { fill: C.dna })
  b.path('M 1236,228 l 9,-12 l 9,12 l 9,-12 l 9,12 l 9,-12 l 9,12', { stroke: C.pro, sw: 2 })
  b.line(1230, 240, 1292, 240, { stroke: C.pro, sw: 3 })
  b.arrow(872, 244, 880, 244, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(1024, 244, 1032, 244, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(1176, 244, 1184, 244, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.wtext(730, 356, '整机用闸阀分成可独立放气维修的段落：更换灯丝只放枪、不动镜筒，是二十年老机仍能保持分辨率的日常纪律；粗抽段改用干泵或隔膜泵，并配干燥氮气放气阀。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 392, '日常读表关注「抽气速率是否变慢」：一台抽到工作真空的时间明显拉长的机器，往往先在真空曲线上自报病情，随后才在像质上。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、残余气体的三宗罪 ============
  b.panel(30, 452, 660, 280, { title: '三、残余气体的三宗罪与对策' })
  const sin = (y: number, t: string, desc: string, c: string) => {
    b.rect(50, y, 400, 62, { fill: C.bg, stroke: c, sw: 1.5, rx: 8 })
    b.text(64, y + 22, t, { size: 12.5, weight: 700, fill: c })
    b.wtext(64, y + 40, desc, { size: 10.5, fill: C.sub, maxW: 372, lh: 14 })
  }
  sin(486, '一、散射损失', '残余分子把电子撞离光轴：束流沿程衰减、衬度整体变暗，且引入随机背景。', C.acc)
  sin(558, '二、碳氢污染（最难缠）', '泵油、密封脂与样品自带碳氢被束斑辐解聚合成非晶碳，束斑停留处越淀越厚——「孔洞越看越黑、光阑越用越脏」；冷表面像捕蝇纸，低温下更甚。', C.bad)
  sin(630, '三、放电与充电', '真空不良时高压电极间电离击穿：轻则束流抖动，重则损伤电源；绝缘件表面污染聚积静电，让像「游走」。', C.warn)
  b.text(478, 490, '对策', { size: 13, weight: 700, fill: C.dnaD })
  b.tag(560, 516, '冷指：比样品更冷，先截留污染物', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5, weight: 700, pad: 8 })
  b.tag(560, 556, '等离子清洗：载网、样品杆、光阑', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5, weight: 700, pad: 8 })
  b.tag(560, 596, '无油操作：干泵粗抽 + 氮气放气', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(478, 640, '三宗罪渐进而隐蔽：昨天的数据还干净，今天就莫名其妙脏了——排查清单里真空永远排在前三行。', { size: 10.5, fill: C.sub, maxW: 190, lh: 15 })

  // ============ 四、环境纪律与 cryo-EM 专属清单 ============
  b.panel(710, 452, 660, 280, { title: '四、环境纪律与 cryo-EM 专属清单' })
  b.table(730, 486, 620, {
    headers: ['项目', '要求或量级', '常见对策'],
    colW: [96, 240, 284], rowH: 26, fontSize: 10.5,
    rows: [
      ['地面振动', '敏感频段 nm 级（约 1–100 Hz）', '独立地基、隔振垫、夜间收数'],
      ['杂散磁场', '交变场低于约 1 mG（0.1 μT）', '选址测绘、远离电梯变压器'],
      ['电源', '高压/透镜电流稳定 10^{-6}', '独立稳压、专用地线、UPS'],
      ['温度', '冷却水约 ±0.1 °C，室温 ±1 °C', '专用冷水机组与恒温空调'],
      ['真空', '枪 10^{-7}–10^{-8} Pa、镜筒约 10^{-5} Pa', '干泵、离子泵、定期烘烤检漏'],
      ['污染控制', '束斑无可见碳淀积', '冷指、等离子清洗、无油操作'],
    ],
  })
  b.tag(838, 706, '液氮液位与自动补液', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11, weight: 700, pad: 9 })
  b.tag(1042, 706, '冷台热稳定 1–2 小时', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11, weight: 700, pad: 9 })
  b.tag(1252, 706, '防结霜与防辐照升华', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 11, weight: 700, pad: 9 })
}

export default scene({
  title: '真空系统与仪器稳定性：气路、泵编队与环境纪律',
  subtitle: '枪区 10^{-7}–10^{-8} Pa、镜筒约 10^{-5} Pa、样品室 10^{-4}–10^{-5} Pa 靠差分抽气衔接；泵编队机械-分子-离子-钛升华；振动 nm 级、磁场低于约 1 mG、电源 10^{-6}、冷却水 ±0.1 °C',
  draw,
})
