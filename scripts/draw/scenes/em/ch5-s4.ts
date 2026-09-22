// em ch5-s4 免疫电镜与相关显微学（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、免疫金双标记 ============
  b.panel(30, 132, 700, 300, { title: '一、免疫金双标记：蛋白 A-金的方向性' })
  b.rect(60, 268, 580, 40, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 3 })
  b.ctext(350, 292, '树脂或蔗糖切片（约 70 nm，两侧切面暴露抗原）', { size: 10, fill: C.sub })
  // 抗原 A + IgG + 5 nm 金
  b.line(210, 232, 210, 214, { stroke: C.pro, sw: 2.4 })
  b.line(210, 230, 198, 262, { stroke: C.pro, sw: 2 })
  b.line(210, 230, 222, 262, { stroke: C.pro, sw: 2 })
  b.circle(210, 266, 7, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.circle(210, 194, 12, { fill: '#fef3c7', stroke: '#b45309', sw: 2 })
  b.ctext(210, 198, 'Au', { size: 9, weight: 700, fill: '#78350f' })
  b.text(150, 190, '5 nm 金', { size: 10, weight: 700, fill: '#78350f' })
  // 抗原 B + IgG + 10 nm 金
  b.line(430, 238, 430, 216, { stroke: C.pro, sw: 2.4 })
  b.line(430, 236, 414, 262, { stroke: C.pro, sw: 2 })
  b.line(430, 236, 446, 262, { stroke: C.pro, sw: 2 })
  b.circle(430, 266, 8, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.circle(430, 192, 22, { fill: '#fef3c7', stroke: '#b45309', sw: 2.4 })
  b.ctext(430, 197, 'Au', { size: 11, weight: 700, fill: '#78350f' })
  b.text(470, 186, '10 nm 金', { size: 10.5, weight: 700, fill: '#78350f' })
  b.tag(330, 224, '蛋白 A 结合 Fc 段', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 9.5, weight: 700, pad: 6 })
  b.arrow(272, 224, 220, 224, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.arrow(388, 224, 420, 224, { stroke: C.acc, sw: 1.5, marker: 'acc' })
  b.wtext(520, 200, 'Fab 两臂朝外，抗原结合位点全部外露', { size: 9.5, fill: C.sub, maxW: 115, lh: 13 })
  b.wtext(520, 240, '直接化学偶联 IgG 取向随机，半数结合臂等于白挂', { size: 9.5, fill: C.mute, maxW: 115, lh: 13 })
  b.tag(220, 348, '双标记：5 与 10 nm（或 10 与 15 nm），先小后大——小金穿透与位阻占优', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10, weight: 700, pad: 8 })
  b.tag(515, 348, '三重标记：加约 2 nm 超小金配银增强', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10, weight: 700, pad: 8 })
  b.wtext(60, 382, '金粒径分 5、10、15 nm 数档：小金标记效率高但辨识度低，大金醒目却空间定位粗；5 nm 金的标记中心与抗原位置差约几纳米。', { size: 10, fill: C.sub, maxW: 640, lh: 14 })
  b.wtext(60, 404, '源流：Turkevich 1951 柠檬酸钠还原氯金酸（柠檬酸盐相对越多、成核越密、粒径越小）；Faulk 与 Taylor 1971 引入胶体金；Slot 与 Geuze 确立蛋白 A-金体系。', { size: 10, fill: C.mute, maxW: 640, lh: 14 })

  // ============ 二、策略之争与效率账 ============
  b.panel(750, 132, 620, 300, { title: '二、策略之争与效率的清醒账' })
  b.table(770, 176, 580, {
    headers: ['策略', '抗体可达性', '结构保存', '典型效率', '适用场景'],
    colW: [108, 148, 118, 92, 114], rowH: 33, fontSize: 10,
    rows: [
      ['包埋前标记', '需通透化，深部难达', '受通透损伤', '较高', '表面与浅层抗原'],
      ['包埋后（树脂）', '仅切片表面', '好', '约 1–5%', '以定位为主的问题'],
      ['Tokuyasu 切片', '切面暴露充分', '好（无脱水树脂）', '相对最高', '免疫金标准平台'],
    ],
  })
  b.ctext(880, 336, '定位精度（示意）', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1110, 336, '灵敏度与标记率（示意）', { size: 11, weight: 700, fill: C.ink })
  b.line(790, 410, 950, 410, { stroke: C.sub, sw: 1.6 })
  b.rect(800, 396, 54, 14, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(827, 390, '几 nm', { size: 9.5, weight: 600, fill: C.accD })
  b.rect(874, 358, 54, 52, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ctext(901, 350, '约 200 nm', { size: 9.5, weight: 600, fill: C.proD })
  b.ctext(827, 424, '免疫金', { size: 9.5, fill: C.sub })
  b.ctext(901, 424, '免疫荧光', { size: 9.5, fill: C.sub })
  b.line(1020, 410, 1180, 410, { stroke: C.sub, sw: 1.6 })
  b.rect(1030, 401, 54, 9, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(1057, 395, '1–5%', { size: 9.5, weight: 600, fill: C.accD })
  b.rect(1104, 365, 54, 45, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ctext(1131, 357, '过半', { size: 9.5, weight: 600, fill: C.proD })
  b.ctext(1057, 424, '免疫金', { size: 9.5, fill: C.sub })
  b.ctext(1131, 424, '免疫荧光', { size: 9.5, fill: C.sub })
  b.wtext(1210, 360, '互补而非互替：荧光找事件、看动态；电镜看结构、定分子。', { size: 10, fill: C.sub, maxW: 145, lh: 14 })

  // ============ 三、CLEM 流程 ============
  b.panel(30, 456, 1340, 300, { title: '三、CLEM：把活细胞的光与电缝在同一个细胞上' })
  const stage = (x: number, t: string, lines: string[], fill: string, stroke: string, tfill: string) => {
    b.rect(x, 506, 360, 116, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 180, 532, t, { size: 13, weight: 700, fill: tfill })
    lines.forEach((s, i) => b.ctext(x + 180, 560 + i * 20, s, { size: 10.5, fill: C.sub }))
  }
  stage(60, '① 活细胞荧光时序成像', ['GFP-LC3 追踪自噬泡何时何地出现', '荧光报告 MAM 接触的动态', '（事件的光学档案：管「何时」）'], C.proL, C.pro, C.proD)
  stage(460, '② fiducial 基准点（缝合针脚）', ['荧光-电子双态纳米珠或量子点', '刻蚀坐标 finder 载网（网格寻址）', '光转化沉淀（DAB 产物）'], C.accL, C.acc, C.accD)
  stage(860, '③ 电镜超微结构加坐标对齐', ['同一细胞、同一坐标系回访', '电镜确认双层膜包裹与成熟度分期', '（结构的电镜档案：管「何形」）'], C.dnaL, C.dna, C.dnaD)
  b.arrow(424, 564, 456, 564, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.arrow(824, 564, 856, 564, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.rect(60, 640, 630, 84, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(76, 664, '应用一：囊泡运输与自噬体成熟', { size: 12, weight: 700, fill: C.ink })
  b.wtext(76, 686, '荧光里「何时出芽」对上电镜里「何处有出芽结构的超微形态」；光镜以 GFP-LC3 追踪自噬泡，电镜在同一细胞确认双层膜包裹与成熟度分期。', { size: 10, fill: C.sub, maxW: 598, lh: 14 })
  b.rect(710, 640, 630, 84, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(726, 664, '应用二：MAM 线粒体-内质网接触位点', { size: 12, weight: 700, fill: C.ink })
  b.wtext(726, 686, '荧光报告接触的动态，电镜量出约 10–30 nm 的膜间距与拴链结构——光管「何时」，电管「何形」。', { size: 10, fill: C.sub, maxW: 598, lh: 14 })
  b.wtext(60, 744, '方法论难点在「同一样品的两次世界」：荧光要薄要活、电镜要固定要衬度——fiducial 基准与低稀释的坐标系统是唯一的黏合剂，三类 fiducial 常可叠加使用。', { size: 10.5, fill: C.sub, maxW: 1290, lh: 14 })

  // ============ 四、定量纪律与选择口径 ============
  b.panel(30, 766, 1340, 212, { title: '四、定量纪律与选择口径' })
  b.rect(50, 796, 640, 168, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(66, 820, '归一化口径：跨实验可比（Mayhew 与 Lucocq 系统化）', { size: 12, weight: 700, fill: C.ink })
  b.wtext(66, 844, '每微米膜长度的金粒数、每平方微米截面的金粒密度；按结构面积分区清点金粒，以卡方检验与相对标记指数（RLI）判断分布偏离面积期望的方向与显著性——「哪些结构被显著富集标记」由统计说话而非肉眼印象。', { size: 10, fill: C.sub, maxW: 608, lh: 14 })
  b.wtext(66, 880, '把 1–5% 的抗原占有率诚实写进报告：看到的是少数派，下结论前须先排除表位可及性的偏好。', { size: 10, fill: C.sub, maxW: 608, lh: 14 })
  b.tag(350, 908, '免疫金：定位精确（几纳米）但灵敏度低', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10, weight: 700, pad: 8 })
  b.tag(350, 938, '免疫荧光：灵敏度高、定位约 200 nm 衍射极限', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10, weight: 700, pad: 8 })
  b.rect(710, 796, 630, 168, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(726, 820, '分诊台：先问问题在哪一层', { size: 12, weight: 700, fill: C.ink })
  b.wtext(726, 844, '问题在「哪里」选电镜标记；问题在「多少与何时」先做荧光；两者都要就上 CLEM。', { size: 10.5, fill: C.sub, maxW: 598, lh: 14 })
  b.wtext(726, 868, '表位能否扛住制样：构象表位、磷酸化表位扛不住热聚合——避开 60 °C 环氧，走 Tokuyasu 或包埋前路线。', { size: 10.5, fill: C.sub, maxW: 598, lh: 14 })
  b.wtext(726, 892, '要定位到多深：表面分子包埋后即可；全细胞分布交给 Tokuyasu 系列。', { size: 10.5, fill: C.sub, maxW: 598, lh: 14 })
  b.tag(1000, 930, '荧光负责「找事件、看动态」，电镜负责「看结构、定分子」', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10, weight: 700, pad: 8 })
}

export default scene({
  title: '免疫电镜与相关显微学：金标签与光电缝合',
  subtitle: '胶体金 5、10、15 nm 分档，双标先小后大，2 nm 超小金配银增强；包埋后效率约 1–5%、定位几纳米；CLEM 以 fiducial 缝合同一细胞的光与电',
  draw,
})
