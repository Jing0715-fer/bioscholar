// ne ch3-s2 动作电位 / 电压门控钠通道与钾通道（39-h 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Nav 分子构造 ============
  b.panel(30, 132, 1340, 330, { title: '一、Nav 的分子构造：单链四结构域与球-链失活' })
  b.rect(70, 172, 660, 148, { fill: C.accL, fillOp: 0.25, stroke: 'none', rx: 8 })
  b.text(86, 196, '胞外', { size: 13, weight: 700, fill: C.accD })
  b.bilayer(70, 320, 660, { tint: C.dna })
  b.rect(70, 336, 660, 110, { fill: '#f1f5f9', fillOp: 0.8, stroke: 'none', rx: 8 })
  b.text(86, 360, '胞内', { size: 13, weight: 700, fill: C.sub })
  // 四个同源结构域（各 6 跨膜螺旋 S1–S6）
  const doms: Array<[number, string]> = [[100, 'DI'], [240, 'DII'], [380, 'DIII'], [520, 'DIV']]
  doms.forEach(([x, lab]) => {
    b.rect(x, 302, 110, 48, { fill: C.bg, stroke: C.faint, sw: 1.2, rx: 5 })
    for (let i = 0; i < 6; i++) {
      const hx = x + 12 + i * 18
      if (i === 3) {
        b.line(hx, 308, hx, 344, { stroke: C.bad, sw: 2.6 })
        b.text(hx, 299, '+', { size: 10, weight: 700, fill: C.bad, anchor: 'middle' })
      } else {
        b.line(hx, 308, hx, 344, { stroke: C.mute, sw: 1.8 })
      }
    }
    b.ctext(x + 55, 376, lab, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(x + 55, 394, '6 跨膜（S1–S6）', { size: 9.5, fill: C.mute })
  })
  b.ctext(365, 244, 'P 环拼成选择性滤器（DEKA 基序）', { size: 11.5, weight: 700, fill: C.enz })
  b.arrow(365, 252, 365, 296, { stroke: C.enz, sw: 1.5, marker: 'enz' })
  b.ctext(190, 216, 'S4：电压传感器（红色）', { size: 10.5, weight: 700, fill: C.bad })
  // 失活球（IFM）
  b.circle(450, 408, 13, { fill: C.enzL, stroke: C.enz, sw: 2.2 })
  b.ctext(450, 412, 'IFM', { size: 9, weight: 700, fill: C.enzD })
  b.path('M495,352 C480,380 465,390 452,396', { stroke: C.enz, sw: 1.6, dash: '4 3' })
  b.arrow(436, 400, 376, 360, { stroke: C.enz, sw: 1.6, dash: '4 3', marker: 'enz' })
  b.wtext(470, 428, '开放后约 1 ms 内塞住胞内侧孔口（DIII–DIV 连接环）', { size: 10.5, fill: C.enzD, maxW: 250, lh: 14 })
  b.wtext(86, 424, '激活（S4 外携）与失活（IFM 塞孔）是两把彼此独立的锁。', { size: 10.5, fill: C.sub, maxW: 240, lh: 14 })
  // 右侧说明卡
  b.rect(800, 180, 540, 120, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(820, 210, 'S4：电压传感器', { size: 14.5, weight: 700, fill: C.accD })
  b.wtext(820, 234, '每隔三个残基一个碱性氨基酸；去极化时正电残基外携，产生先于离子电流的门控电流——实测每钠通道约 12–16 个元电荷。', { size: 11.5, fill: C.sub, maxW: 505, lh: 16 })
  b.rect(800, 316, 540, 120, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(820, 346, '失活：球与链模型', { size: 14.5, weight: 700, fill: C.proD })
  b.wtext(820, 370, 'DIII–DIV 连接环的 IFM 基序像系在链上的球，开放后约 1 ms 内塞住胞内侧孔口——快进快退的「保险丝」。', { size: 11.5, fill: C.sub, maxW: 505, lh: 16 })

  // ============ 二、Nav vs Kv ============
  b.panel(30, 478, 1340, 240, { title: '二、Nav 与 Kv（延迟整流）：上升与回落的分工' })
  b.table(100, 524, 1240, {
    headers: ['项目', 'Nav（电压门控钠通道）', 'Kv（延迟整流钾通道）'],
    colW: [140, 550, 550],
    rowH: 36,
    fontSize: 12.5,
    rows: [
      ['结构', '约 2000 个氨基酸的单链，折成四个同源结构域（DI–DIV，各 6 跨膜）', '四聚体（每个亚基 6 跨膜）'],
      ['激活', '极快：S4 外携后孔口雪崩式开放', '四个 S4 逐一外翻 → 激活慢，构成延迟整流'],
      ['失活', '快：IFM 球塞孔（约 1 ms）', '慢（C 型失活）——去极化期间持续外流'],
      ['电位贡献', '上升支与超射（冲向 E_Na）', '下降支与后超极化（拉回 E_K 方向）'],
    ],
  })

  // ============ 三、毒素工具箱与通道病 ============
  b.panel(30, 732, 1340, 246, { title: '三、毒药即探针：毒素工具箱与通道病' })
  const cards: Array<[number, string, string, string, string]> = [
    [60, '河鲀毒素 TTX', '纳摩尔亲和力自胞外封住 Nav 滤器；心脏 Nav1.5 相对不敏感——心肌仍可放电。', C.enz, C.enzL],
    [390, '四乙基铵 TEA', '自孔口堵住 Kv：延迟整流被按下暂停键，动作电位时程延长。', C.acc, C.accL],
    [720, '利多卡因', '自胞内侧优先结合并稳定失活态 → 使用依赖性：越放电越被阻断（局麻 / 抗心律失常）。', C.warn, C.warnL],
    [1050, '通道病：临床回声', 'SCN1A → 癫痫；SCN4A → 周期性麻痹；KCNQ2/3 → 新生儿癫痫——结构-功能映射的临床级证据。', C.bad, C.badL],
  ]
  cards.forEach(([x, t, s, col, colL]) => {
    b.rect(x, 800, 300, 160, { fill: colL, fillOp: 0.45, stroke: col, sw: 1.6, rx: 9 })
    b.text(x + 150, 830, t, { size: 14.5, weight: 700, fill: col, anchor: 'middle' })
    b.wtext(x + 22, 858, s, { size: 11.5, fill: C.sub, maxW: 260, lh: 17 })
  })
}

export default scene({
  title: '电压门控钠通道与钾通道：S4 传感器、IFM 失活球与延迟整流',
  subtitle: 'Nav 为约 2000 个氨基酸的单链四同源结构域（各 6 跨膜），S4 每隔三个残基带碱性氨基酸构成电压传感器（每通道约 12–16 个元电荷的门控电流），P 环 DEKA 基序拼成滤器；DIII–DIV 连接环 IFM 基序约 1 ms 内塞孔失活；Kv 四聚体四 S4 逐一外翻故激活慢（延迟整流）；TTX 纳摩尔封 Nav、TEA 堵 Kv、利多卡因具使用依赖性；SCN1A/SCN4A/KCNQ2/3 突变构成通道病',
  draw,
})
