// bc ch12-s4 代谢网络与代谢组学概览（39-a 最终收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三大代谢交汇网络 ============
  b.panel(30, 132, 700, 478, { title: '一、三大代谢的交汇网络：以节点互通' })
  // 顶部输入
  b.rect(100, 196, 70, 34, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(135, 218, '糖原', { size: 11.5, weight: 600, fill: C.ink })
  b.line(160, 232, 210, 276, { stroke: C.sub, sw: 1.8, marker: 'ink', markerStart: 'ink' })
  b.rect(225, 196, 125, 34, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(287, 218, '磷酸戊糖途径', { size: 10.5, weight: 600, fill: C.ink })
  b.arrow(300, 232, 265, 276, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(334, 196, 104, 34, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.6, rx: 7 })
  b.ctext(386, 218, '氨基酸碳架', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(386, 184, '→ 丙酮酸 · 乙酰CoA · OAA · α-KG', { size: 8.5, fill: C.mute })
  b.arrow(386, 232, 386, 276, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.rect(472, 196, 112, 34, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(528, 218, '脂肪酸', { size: 11.5, weight: 700, fill: C.rnaD })
  b.arrow(528, 232, 528, 276, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ctext(551, 258, 'β氧化', { size: 9.5, fill: C.rnaD })
  // 主干
  b.rect(56, 288, 90, 40, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(101, 313, '葡萄糖', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(146, 308, 178, 308, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(180, 280, 120, 56, { fill: C.accL, fillOp: 0.6, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(240, 303, 'G6P', { size: 13, weight: 700, fill: C.accD })
  b.ctext(240, 324, '糖代谢分配点', { size: 9, fill: C.sub })
  b.arrow(300, 308, 332, 308, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(334, 280, 104, 56, { fill: C.enzL, fillOp: 0.55, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(386, 303, '丙酮酸', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(386, 324, '糖·脂·AA 枢纽', { size: 8.5, fill: C.sub })
  b.arrow(438, 308, 470, 308, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(472, 280, 112, 56, { fill: C.rnaL, fillOp: 0.6, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(528, 303, '乙酰CoA', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(528, 324, '产能·合成共用入口', { size: 8.5, fill: C.sub })
  b.arrow(584, 308, 606, 308, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ellipse(650, 308, 40, 52, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.8 })
  b.ctext(650, 302, 'TCA', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(650, 320, '循环', { size: 10.5, fill: C.dnaD })
  // 底部输出
  b.rect(334, 400, 104, 34, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(386, 422, '乳酸', { size: 11.5, weight: 600, fill: C.ink })
  b.line(386, 396, 386, 342, { stroke: C.enz, sw: 1.8, marker: 'enz', markerStart: 'enz' })
  b.text(398, 374, 'Cori 循环', { size: 8.5, fill: C.mute })
  b.rect(440, 400, 100, 34, { fill: C.rnaL, fillOp: 0.55, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(490, 422, '酮体', { size: 11.5, weight: 700, fill: C.rnaD })
  b.arrow(500, 336, 500, 396, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.arrow(565, 336, 580, 394, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ctext(575, 416, '脂肪酸合成', { size: 10.5, weight: 700, fill: C.rnaD })
  b.tag(648, 380, '草酰乙酸 OAA', { fill: C.dnaL, stroke: C.dna, size: 9, weight: 700, tfill: C.dnaD, pad: 6 })
  b.ctext(648, 406, 'α-酮戊二酸', { size: 9, weight: 600, fill: C.dnaD })
  // 糖异生回路 + 甘油通道
  b.path('M610,388 C520,485 320,485 240,342', { stroke: C.dna, sw: 2, dash: '7 5', marker: 'dna', fill: 'none' })
  b.ctext(420, 474, '糖异生（OAA → 葡萄糖）', { size: 10, weight: 700, fill: C.dnaD })
  b.rect(56, 400, 90, 34, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(101, 422, '甘油', { size: 11.5, weight: 600, fill: C.ink })
  b.arrow(101, 396, 205, 344, { stroke: C.acc, sw: 1.8, dash: '5 4', marker: 'acc' })
  b.text(56, 452, '甘油 → 磷酸二羟丙酮 → 糖异生入糖', { size: 9, fill: C.mute })
  b.wtext(56, 505, '节点清单：G6P（糖代谢分配点）· 丙酮酸（糖↔脂 / 氨基酸枢纽）· 乙酰CoA（产能与合成共用入口）· 草酰乙酸（TCA 与糖异生交叉）· α-酮戊二酸（氨基酸与 TCA）· 甘油-3-磷酸 / 磷酸二羟丙酮（糖↔脂通道）。', { size: 10.5, fill: C.sub, maxW: 640, lh: 15 })
  b.text(56, 548, '三条原则贯穿全书：能量经济 · 互为倒数 · 分区与分工（见右图）。', { size: 10.5, weight: 600, fill: C.ink })

  // ============ 二、三原则与代谢组学定位 ============
  b.panel(750, 132, 620, 478, { title: '二、网络运行三原则与代谢组学定位' })
  b.rect(766, 196, 588, 70, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(782, 222, '① 能量经济', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(782, 246, 'ATP/ADP · NADH/NAD⁺ · NADPH/NADP⁺ 三对「能量货币」的状态决定通量方向', { size: 10.5, fill: C.sub, maxW: 540, lh: 14 })
  b.rect(766, 278, 588, 70, { fill: C.enzL, fillOp: 0.45, stroke: C.enz, sw: 1.6, rx: 9 })
  b.text(782, 304, '② 互为倒数', { size: 12.5, weight: 700, fill: C.enzD })
  b.wtext(782, 328, '合成与分解的限速酶受相反信号调节（F-2,6-BP；丙二酰CoA–CPT-I 互锁），避免无效循环', { size: 10.5, fill: C.sub, maxW: 540, lh: 14 })
  b.rect(766, 360, 588, 70, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(782, 386, '③ 分区与分工', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(782, 410, '亚细胞区室（胞质 / 线粒体 / 内质网）与器官分工（肝-脑-肌-脂）使矛盾反应并行不悖', { size: 10.5, fill: C.sub, maxW: 540, lh: 14 })
  b.text(766, 458, '代谢组学（metabolomics）', { size: 13, weight: 700, fill: C.ink })
  b.wtext(766, 482, '研究特定时空下全部小分子代谢物（< 1000 Da）的集合与动态变化——继基因组、转录组、蛋白质组学之后的「组学」成员；Nicholson 于 1999 年正式提出术语。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.text(766, 540, '分层：', { size: 10.5, weight: 700, fill: C.sub })
  b.tag(870, 536, '靶向：绝对定量', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 600, tfill: C.accD, pad: 6 })
  b.tag(1020, 536, '非靶向：相对定量', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 600, tfill: C.accD, pad: 6 })
  b.tag(1150, 536, '脂质组学', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 600, tfill: C.accD, pad: 6 })
  b.tag(1272, 536, '通量组学（¹³C）', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 600, tfill: C.accD, pad: 6 })

  // ============ 三、代谢组学技术路线 ============
  b.panel(30, 644, 1340, 336, { title: '三、代谢组学技术路线：平台 → 流程 → 统计 → 应用' })
  b.text(60, 690, '① 分析平台', { size: 11.5, weight: 700, fill: C.sub })
  b.rect(56, 700, 400, 46, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(72, 722, 'NMR（核磁共振）', { size: 13, weight: 700, fill: C.accD })
  b.text(72, 740, '无偏向 · 可定量 · 灵敏度低', { size: 10, fill: C.sub })
  b.rect(500, 700, 400, 46, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(516, 722, 'GC-MS（气相色谱-质谱）', { size: 13, weight: 700, fill: C.accD })
  b.text(516, 740, '需衍生化 · 适合挥发 / 极性物', { size: 10, fill: C.sub })
  b.rect(944, 700, 400, 46, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(960, 722, 'LC-MS/MS（液相色谱-质谱）', { size: 13, weight: 700, fill: C.accD })
  b.text(960, 740, '覆盖最广 · 代谢组学主力', { size: 10, fill: C.sub })
  b.text(60, 760, '② 流程', { size: 11.5, weight: 700, fill: C.sub })
  const steps: [number, string, string][] = [
    [60, '样本采集', '避免扰动'],
    [272, '代谢物提取', '保持稳态'],
    [484, '谱图采集', 'NMR / GC / LC'],
    [696, '峰提取 · 鉴定', 'HMDB · KEGG · MassBank'],
    [908, '多变量统计', 'PCA 无监督 · PLS-DA 有监督'],
    [1120, '通路富集 · 解释', '生物学意义'],
  ]
  steps.forEach(([x, t, s]) => {
    b.rect(x, 768, 186, 64, { fill: C.panelB, fillOp: 0.9, stroke: C.line, sw: 1.4, rx: 8 })
    b.ctext(x + 93, 794, t, { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(x + 93, 814, s, { size: 8.5, fill: C.mute })
  })
  for (let i = 0; i < steps.length - 1; i++) {
    b.arrow(steps[i][0] + 188, 800, steps[i + 1][0] - 4, 800, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  }
  b.text(60, 848, '③ 应用', { size: 11.5, weight: 700, fill: C.sub })
  const apps: [number, string, string][] = [
    [60, '疾病生物标志物', '糖尿病：支链 / 芳香族氨基酸升高早于血糖异常；产前串联质谱筛查遗传代谢病'],
    [388, '药物研发与毒理', '肝肾毒性早期代谢指纹 · 药物代谢酶多态性分型'],
    [716, '精准营养', '个体化膳食应答：肠道菌群-胆汁酸-短链脂肪酸轴'],
    [1044, '系统生物学', 'GEM 基因组尺度模型 + FBA 约束通量分析，预测细胞代谢行为'],
  ]
  apps.forEach(([x, t, s]) => {
    b.rect(x, 856, 300, 100, { fill: C.accL, fillOp: 0.35, stroke: C.acc, sw: 1.4, rx: 9 })
    b.text(x + 14, 880, t, { size: 12, weight: 700, fill: C.accD })
    b.wtext(x + 14, 902, s, { size: 9.5, fill: C.sub, maxW: 272, lh: 13.5 })
  })
}

export default scene({
  title: '代谢网络与代谢组学：交汇节点与小分子全局谱',
  subtitle: '三大代谢经 G6P/丙酮酸/乙酰CoA/OAA 节点互联（能量经济·互为倒数·分区分工）；代谢组学测 <1000 Da 小分子谱：NMR·GC-MS·LC-MS + PCA/PLS-DA',
  draw,
})
