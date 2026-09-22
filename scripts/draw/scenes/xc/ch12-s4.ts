// xc ch12-s4 微晶电子衍射与互补技术（Task XC-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、MicroED 两面账本 ============
  b.panel(30, 132, 660, 430, { title: '一、MicroED：电子照亮微晶的两面账本' })
  b.wtext(56, 184, '2013 年 Gonen 组创立微晶电子衍射（MicroED）：把冷冻透射电镜当作衍射仪，对厚度数百纳米的蛋白微晶做连续旋进的电子衍射。', { size: 10, fill: C.sub, maxW: 604, lh: 14 })
  b.rect(56, 214, 296, 142, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 9 })
  b.text(72, 238, '有利的一面', { size: 11.5, weight: 700, fill: C.okD })
  b.wtext(72, 260, '① 弹性散射截面比 X 射线强约 10^{3} 倍——亚微米晶体也给出高信噪斑点；② 总剂量比冷冻电镜单颗粒成像低一至两个数量级，损伤顾虑大幅缓解；③ 电子波长极短（200 kV 下约 0.025 Å）。', { size: 9.5, fill: C.sub, maxW: 264, lh: 13.5 })
  b.rect(368, 214, 296, 142, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 9 })
  b.text(384, 238, '代价的一面：动力学散射', { size: 11.5, weight: 700, fill: C.badD })
  b.wtext(384, 260, '电子被强散射后还会被再次散射，观测强度不再简单正比于 |F|^{2}——运动学近似下结构通常可解，但小分子的 R 因子长期停在约 20%；动力学衍射精修（Palatinus 等 2017 年）把多重散射显式建模后，R 因子落回个位数，绝对构型可从电子衍射本身判定。', { size: 9.5, fill: C.sub, maxW: 264, lh: 13.5 })
  // Ewald 球对比
  b.rect(56, 368, 296, 100, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(204, 388, 'X 射线：Ewald 球面弯曲', { size: 9.5, weight: 700, fill: C.sub })
  b.arrow(70, 448, 148, 448, { stroke: C.acc, sw: 2, marker: 'acc' })
  for (let x = 168; x <= 336; x += 22) for (let y = 402; y <= 458; y += 19) b.circle(x, y, 2.2, { fill: C.faint })
  b.path('M150,450 Q240,388 338,462', { fill: 'none', stroke: C.acc, sw: 2.6 })
  ;[[186, 431], [233, 422], [290, 434]].forEach(([x, y]) => b.circle(x, y, 3.6, { fill: C.enz, stroke: C.rose, sw: 1 }))
  b.rect(368, 368, 296, 100, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(516, 388, '电子：Ewald 球近乎平面', { size: 9.5, weight: 700, fill: C.sub })
  b.arrow(382, 448, 460, 448, { stroke: C.acc, sw: 2, marker: 'acc' })
  for (let x = 480; x <= 648; x += 21) for (let y = 402; y <= 458; y += 19) b.circle(x, y, 2.2, { fill: C.faint })
  b.line(478, 444, 648, 438, { stroke: C.acc, sw: 2.6 })
  ;[[486, 443], [528, 441], [570, 440], [612, 439], [646, 438]].forEach(([x, y]) => b.circle(x, y, 3.6, { fill: C.enz, stroke: C.rose, sw: 1 }))
  b.wtext(56, 486, '小幅旋转即扫过大片倒易空间，完整度天然占优；蛋白 MicroED 的管线几乎全盘借用 X 射线晶体学：指标化、积分用惯用软件，精修照走第 10 章的机器——只是解读 R 与 B 时，须记得强度背后的物理学已然不同。', { size: 9.5, fill: C.mute, maxW: 604, lh: 13.5 })

  // ============ 二、工业爆发与三岔路 ============
  b.panel(710, 132, 660, 430, { title: '二、工业爆发与蛋白侧的三岔路' })
  const step = (x: number, t: string, s: string) => {
    b.rect(x, 188, 134, 62, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.ctext(x + 67, 210, t, { size: 10, weight: 700, fill: C.accD })
    b.wtext(x + 67, 230, s, { size: 8.5, fill: C.sub, maxW: 120, lh: 11, anchor: 'middle' })
  }
  step(736, '微克级粉末', '配方样品常只有微晶与粉末')
  step(886, '挑一颗晶体', '电镜里选亚微米单晶')
  step(1036, '几分钟收数', '即得可指标化衍射')
  step(1186, '晶型指认', '多晶型、盐与共晶、痕量杂晶')
  b.arrow(872, 219, 884, 219, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1022, 219, 1034, 219, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1172, 219, 1184, 219, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(736, 268, '自动化电镜整夜扫描载网、逐晶收数；样品无需溶解重结晶——历史留样与失效分析皆可回收，晶型管理的成本结构由此改写，制药界的电镜实验室成建制出现。', { size: 9.5, fill: C.sub, maxW: 596, lh: 13 })
  b.tag(890, 330, '2019 年前后进入 FDA 申报语境', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10, weight: 700, pad: 9 })
  b.tag(1160, 330, '绝对构型可从电子衍射本身判定', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 10, weight: 700, pad: 9 })
  b.rect(736, 352, 588, 52, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.wtext(752, 370, '蛋白侧定位「快筛与补位」：标杆体系（溶菌酶、蛋白酶 K）之外，已扩展到膜蛋白的 LCP 微晶（不离开脂相直接上电镜）与肽类小体系。', { size: 9.5, fill: C.sub, maxW: 556, lh: 13 })
  // 三岔路
  b.rect(736, 424, 132, 100, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 9 })
  b.ctext(802, 460, '结晶 hit', { size: 11.5, weight: 700, fill: C.enzD })
  b.wtext(802, 482, '见微晶先问晶体学前途', { size: 9, fill: C.sub, maxW: 112, lh: 11.5, anchor: 'middle' })
  const fork = (y: number, s: string) => {
    b.rect(912, y, 428, 34, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.text(928, y + 21, s, { size: 9.3, fill: C.sub })
  }
  fork(424, '① 微晶种放大（第 3 章）：长成 20 μm 以上常规晶体，走同步辐射成熟管线')
  fork(464, '② 晶体薄而小、生长不可放大：直接 MicroED，电镜立刻给数')
  fork(504, '③ 微晶数量庞大且均匀：转串晶（XFEL 或 SSX，第 1 节）')
  b.arrow(870, 446, 910, 441, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(870, 474, 910, 481, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(870, 502, 910, 521, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.wtext(736, 556, '三条转轨的公共前提：成熟的数据管线——MicroED 借用 X 射线全套基建（从指标化到精修），这是它扩张最快的制度性原因。', { size: 8.8, fill: C.mute, maxW: 596, lh: 11.5 })

  // ============ 三、互补决策表 ============
  b.panel(30, 572, 660, 390, { title: '三、互补决策：样品形态定路线' })
  const ask = (x: number, t: string, s: string) => {
    b.rect(x, 612, 192, 64, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.ctext(x + 96, 634, t, { size: 10.5, weight: 700, fill: C.accD })
    b.wtext(x + 96, 652, s, { size: 9, fill: C.sub, maxW: 172, lh: 11.5, anchor: 'middle' })
  }
  ask(56, '第一问：结晶性', '能否长出晶体？')
  ask(262, '第二问：尺寸与均一性', '微晶纳晶，还是均一大分子？')
  ask(468, '第三问：分辨率需求', '需要氢吗？要多快？')
  b.table(56, 700, 608, {
    headers: ['场景', '首选路线', '判据'],
    colW: [186, 210, 212],
    rowH: 26,
    fontSize: 9.3,
    rows: [
      ['可长常规晶体', '同步辐射旋转法', '分辨率与流程最优'],
      ['只有微晶纳晶', 'MicroED 或串晶', '电子强散射或每晶一发'],
      ['不结晶的均一大分子', 'cryo-EM 单颗粒', '无结晶门槛'],
      ['需要氢与质子化态', '中子衍射', '氢直接成像'],
      ['飞秒动力学', 'XFEL 时间分辨', '衍射先于破坏'],
      ['晶型与绝对构型', 'MicroED', '微克样品即可'],
    ],
  })
  b.wtext(56, 922, '三类技术在 2 至 3 Å 区间交火，真正的分水岭在样品形态而非装置名号——这是历史上第一次「不结晶也有原子分辨率」；晶体学的应答：把周期性带来的信噪与精确度延伸到微晶，同时坦然承认边界的重新划定。', { size: 9.5, fill: C.sub, maxW: 608, lh: 13 })

  // ============ 四、自动化、AI 与下一个百年 ============
  b.panel(710, 572, 660, 390, { title: '四、自动化、AI 与下一个百年' })
  b.rect(736, 606, 288, 84, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
  b.text(752, 628, '无人化线站', { size: 11, weight: 700, fill: C.accD })
  b.wtext(752, 646, '机器人换样、自动对光、视觉识别在载环上自动寻晶对中；「自动指标化-整合-精修」闭环把第 6 章与第 10 章串成无人值守流水线，远程操作成常态。', { size: 9, fill: C.sub, maxW: 256, lh: 12 })
  b.rect(1040, 606, 296, 84, { fill: C.proL, stroke: C.pro, sw: 1.7, rx: 8 })
  b.text(1056, 628, 'AlphaFold 加速分子置换', { size: 11, weight: 700, fill: C.proD })
  b.wtext(1056, 646, '预测模型作 MR 搜索模型大幅提高成功率（第 7 章），「先预测后实验」成默认起手式；但预测给不出配体、离子、水、交替构象与真实系综——验证（第 11 章）反而更吃重。', { size: 9, fill: C.sub, maxW: 264, lh: 12 })
  b.text(736, 714, '从劳厄到 XFEL 的 110 余年：光源-探测器-算法三线并进', { size: 10.5, weight: 700, fill: C.ink })
  const rowline = (y: number, lab: string, nodes: [number, string][]) => {
    b.etext(884, y + 5, lab, { size: 10, weight: 700, fill: C.sub })
    b.line(900, y, 1330, y, { stroke: C.faint, sw: 2.2, marker: 'mute' })
    nodes.forEach(([x, s]) => {
      b.circle(x, y, 5, { fill: C.acc })
      b.ctext(x, y - 12, s, { size: 8.8, weight: 600, fill: C.ink })
    })
  }
  rowline(738, '光源', [[916, 'X 射线管'], [1100, '同步辐射（1970 年代）'], [1290, 'XFEL（2009）']])
  rowline(772, '探测器', [[916, '胶片'], [1100, '影像板'], [1290, '像素阵列探测器']])
  rowline(806, '算法', [[916, 'Patterson（1934）'], [1100, '最大似然（1990 年代）'], [1290, 'AlphaFold（2021）']])
  const bound = (x: number, t: string, s: string) => {
    b.rect(x, 842, 142, 46, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.ctext(x + 71, 862, t, { size: 10, weight: 700, fill: C.ink })
    b.ctext(x + 71, 880, s, { size: 8.5, fill: C.sub })
  }
  bound(736, '剂量边界', '衍射先于破坏绕开')
  bound(888, '尺寸边界', 'MicroED 与串晶亚微米')
  bound(1040, '温度边界', '室温串晶回摆')
  bound(1192, '时间边界', '飞秒泵浦-探测')
  b.wtext(736, 908, '每一次革命都开一扇新门；第 11 章的结论在新技术上逐一复检——XFEL 图案的合并统计、MicroED 的动力学精修、预测模型的 MR 起点——「让数据说话、让验证审判」的纪律一以贯之，全书十二章至此收束。', { size: 9.5, fill: C.mute, maxW: 596, lh: 13 })
}

export default scene({
  title: '微晶电子衍射与互补技术',
  subtitle: '电子散射强约 10^{3} 倍、200 kV 下 λ 约 0.025 Å 的近平面 Ewald 球；动力学精修把 R 从约 20% 拉回个位数；微克粉末即可鉴定晶型，2019 年前后进入 FDA 语境；三问决策定路线',
  draw,
})
