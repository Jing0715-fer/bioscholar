// ne ch1-s4 神经生物学绪论 / 神经科学的研究方法（39-h 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、六个时代 ============
  b.panel(30, 132, 1340, 250, { title: '一、读脑工具的六个时代：从染色到连接组' })
  const eras: Array<[number, string, string, string, string]> = [
    [56, '解剖学时代', '高尔基 · 尼氏 · 髓鞘染色', 'HRP 逆行示踪通路', C.acc],
    [274, '电生理时代', '1949 玻璃微电极 <1 μm', '胞内记录 · 电压钳', C.dna],
    [492, '成像时代', '钙成像 · 双光子 1990', 'fMRI BOLD 1990', C.pro],
    [710, '干预时代', '光遗传 ChR2 · NpHR', 'DREADD 化学遗传', C.enz],
    [928, '理论与计算', 'Hodgkin-Huxley 类模型', '计算神经科学', C.rna],
    [1146, '全景时代', '透明脑 · 连接组学', '线虫 302 → 果蝇 14 万', C.ok],
  ]
  eras.forEach(([x, t, s1, s2, col]) => {
    b.rect(x, 190, 196, 122, { fill: col, fillOp: 0.08, stroke: col, sw: 1.6, rx: 9 })
    b.text(x + 98, 218, t, { size: 15, weight: 700, fill: col, anchor: 'middle' })
    b.ctext(x + 98, 252, s1, { size: 11.5, fill: C.sub })
    b.ctext(x + 98, 276, s2, { size: 11.5, fill: C.sub })
    b.ctext(x + 98, 300, '↓', { size: 12, fill: C.mute })
  })
  ;[252, 470, 688, 906, 1124].forEach(ax => b.arrow(ax + 2, 251, ax + 20, 251, { stroke: C.mute, sw: 2, marker: 'mute' }))

  // ============ 二、电生理时代里程碑 ============
  b.panel(30, 396, 780, 330, { title: '二、电生理的阶梯：把电流变成数字' })
  b.table(60, 456, 720, {
    headers: ['年代', '技术', '代表人物', '里程碑意义'],
    colW: [70, 140, 160, 350],
    rowH: 52,
    fontSize: 12.5,
    rows: [
      ['1929', '脑电图 EEG', 'Berger', '人头皮上无创记录脑的电活动'],
      ['1949', '玻璃微电极', 'Ling & Gerard', '尖端 <1 μm，实现单细胞胞内记录——静息电位与动作电位数值可直读'],
      ['1976', '膜片钳', 'Neher & Sakmann', '吉欧（10 GΩ）封接骤降噪声，皮安级单通道电流可辨（1991 诺奖）'],
    ],
  })
  b.rect(60, 668, 720, 40, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.4, rx: 7 })
  b.wtext(78, 692, '电压钳（Hodgkin & Huxley）先行分离离子电流，膜片钳再下探到单通道——电生理两级台阶。', { size: 11.5, fill: C.dnaD, maxW: 690, lh: 15 })

  // ============ 三、光遗传学 ============
  b.panel(830, 396, 540, 330, { title: '三、光遗传学：毫秒级、细胞类型特异的开关' })
  // 神经元
  b.circle(1080, 566, 26, { fill: C.bg, stroke: C.ink, sw: 2.4 })
  b.circle(1080, 566, 10, { fill: C.proL, stroke: C.pro, sw: 1.4 })
  b.line(1106, 566, 1180, 566, { stroke: C.ink, sw: 2.4 })
  b.path('M1180,566 q18,-10 34,-12', { stroke: C.ink, sw: 2, marker: 'ink' })
  b.path('M1180,566 q18,10 34,12', { stroke: C.ink, sw: 2, marker: 'ink' })
  b.tag(1080, 612, 'ChR2 / NpHR 表达于膜', { fill: C.proL, stroke: C.pro, size: 11.5, weight: 700, tfill: C.proD, pad: 9 })
  // 蓝光束
  b.arrow(946, 468, 1056, 540, { stroke: C.acc, sw: 3, marker: 'acc' })
  b.ctext(940, 452, '蓝光 ≈473 nm', { size: 12.5, weight: 700, fill: C.accD })
  b.tag(958, 500, 'ChR2', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 8 })
  // 黄光束
  b.arrow(946, 668, 1056, 596, { stroke: C.warn, sw: 3, marker: 'warn' })
  b.ctext(940, 690, '黄光 ≈590 nm', { size: 12.5, weight: 700, fill: '#92400e' })
  b.tag(958, 648, 'NpHR', { fill: C.warnL, stroke: C.warn, size: 12, weight: 700, tfill: '#92400e', pad: 8 })
  // 结果
  b.rect(1224, 500, 130, 44, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 1.4, rx: 7 })
  b.wtext(1236, 518, '毫秒级去极化放电', { size: 11, weight: 700, fill: C.accD, maxW: 108, lh: 14 })
  b.rect(1224, 592, 130, 44, { fill: C.warnL, fillOp: 0.6, stroke: C.warn, sw: 1.4, rx: 7 })
  b.wtext(1236, 610, '超极化 · 抑制放电', { size: 11, weight: 700, fill: '#92400e', maxW: 108, lh: 14 })
  b.ctext(1100, 712, 'DREADD 化学遗传学补足慢时间尺度（分钟级）', { size: 11.5, fill: C.sub })

  // ============ 四、成像与全景 ============
  b.panel(30, 740, 1340, 238, { title: '四、成像与全景时代：看见活动、看见全脑' })
  const cards: Array<[number, number, string, string, string, string]> = [
    [60, 806, '钙成像', '钙指示剂把放电翻译为荧光，', '群体活动可视化', C.pro],
    [390, 806, '双光子显微镜', '1990 Denk 确立；活体皮层深达', '数百 μm，追踪同一群树突棘数月', C.dna],
    [720, 806, 'fMRI（BOLD）', '1990 Ogawa；活跃脑区脱氧血红蛋白↓', '毫米级 · 秒级的代谢代偿指标', C.acc],
    [1050, 806, '连接组学', '1986 线虫 302 神经元完整图谱；', '2024 果蝇整脑约 14 万神经元', C.ok],
  ]
  cards.forEach(([x, y, t, s1, s2, col]) => {
    b.rect(x, y, 290, 130, { fill: col, fillOp: 0.07, stroke: col, sw: 1.6, rx: 9 })
    b.text(x + 145, y + 30, t, { size: 15.5, weight: 700, fill: col, anchor: 'middle' })
    b.wtext(x + 24, y + 60, s1, { size: 11.5, fill: C.sub, maxW: 246, lh: 17 })
    b.wtext(x + 24, y + 94, s2, { size: 11.5, fill: C.sub, maxW: 246, lh: 17 })
  })
}

export default scene({
  title: '神经科学的研究方法：染色 · 电生理 · 成像 · 干预 · 连接组',
  subtitle: '1929 EEG 无创读脑；1949 玻璃微电极（<1 μm）实现胞内记录；1976 膜片钳以 10 GΩ 封接记录皮安级单通道电流（1991 诺奖）；1990 双光子与 BOLD fMRI 开启成像时代；2005 光遗传学以 ChR2（蓝光约 473 nm）/NpHR（黄光约 590 nm）实现毫秒级操控；连接组学已绘线虫 302（1986）与果蝇约 14 万神经元（2024）',
  draw,
})
