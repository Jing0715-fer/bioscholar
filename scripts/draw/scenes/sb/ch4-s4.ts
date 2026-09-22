// sb ch4-s4 稳定性筛选与蛋白保存（Task SB-1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、DSF 与 nanoDSF：熔解曲线与 Tm ============
  b.panel(30, 132, 660, 430, { title: '一、DSF 与 nanoDSF：熔解曲线与 Tm' })
  b.legend(60, 184, [['DSF：SYPRO Orange 荧光', C.pro], ['nanoDSF：330/350 nm 比值', C.acc]], { size: 11.5 })
  b.axis(96, 392, 544, 180, {
    xlabel: '温度（°C）', ylabel: '归一化信号',
    xticks: [[0, '25'], [0.343, '49'], [0.714, '75'], [1, '95']],
    yticks: [[0, '0'], [0.5, ''], [1, '1']],
  })
  b.line(283, 392, 283, 216, { stroke: C.mute, sw: 1.4, dash: '5 4' })
  b.curve(96, 392, 544, 180, [[0, 0.05], [0.08, 0.06], [0.16, 0.07], [0.24, 0.09], [0.3, 0.14], [0.343, 0.5], [0.4, 0.8], [0.46, 0.92], [0.56, 0.96], [0.68, 0.95], [0.8, 0.88], [1, 0.78]], { smooth: true, stroke: C.pro, sw: 2.8 })
  b.curve(96, 392, 544, 180, [[0, 0.94], [0.08, 0.92], [0.16, 0.88], [0.24, 0.8], [0.3, 0.66], [0.343, 0.5], [0.4, 0.32], [0.46, 0.2], [0.56, 0.12], [0.68, 0.08], [0.8, 0.06], [1, 0.05]], { smooth: true, stroke: C.acc, sw: 2.4, dash: '7 4' })
  b.tag(470, 250, 'Tm = 49 °C（一阶导数峰）', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 8 })
  b.tag(250, 464, '每孔 5 μL 蛋白加染料，qPCR 板分装', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.tag(548, 464, '约 1 °C/min 自 25 升至 95 °C', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 7 })
  b.tag(375, 494, '对照孔随行扣基线；矿物油或热封膜抑制边缘孔蒸发', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.wtext(50, 518, 'Tm 即一半分子解链的温度，越高越稳；两种方法 Tm 差值常在 2 °C 以内，严重不一致时优先怀疑染料干扰了蛋白本身——nanoDSF 免染料、不受 DTT、去垢剂与高浓度添加剂干扰、样品小于 10 μL，被设为仲裁手段，对去垢剂敏感的膜蛋白尤其实用。qPCR 仪一晚可完成两块 96 孔板全矩阵扫描。', { maxW: 630, lh: 13.5, size: 10, fill: C.sub })

  // ============ 二、缓冲液筛选矩阵与 ΔTm 决策 ============
  b.panel(730, 132, 640, 430, { title: '二、缓冲液筛选矩阵与 ΔTm 决策' })
  b.ctext(916, 170, '矩阵两维：pH 4–9（行）× NaCl 50–500 mM（列）', { size: 10.5, weight: 700, fill: C.sub })
  const phRows = ['9', '8 · Tris', '7 · HEPES', '6 · MES', '5 · 醋酸', '4 · 柠檬酸']
  const salts = ['50', '150', '300', '500']
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      const hi = r === 1
      b.rect(800 + c * 58, 198 + r * 36, 55, 33, { fill: hi ? C.okL : '#f1f5f9', stroke: hi ? C.ok : C.faint, sw: hi ? 1.8 : 1.1, rx: 4 })
      b.circle(827.5 + c * 58, 214.5 + r * 36, 3.4, { fill: '#ffffff', stroke: hi ? C.ok : C.faint, sw: 1.2 })
    }
    b.etext(792, 222 + r * 36, phRows[r], { size: 10, fill: r === 1 ? C.okD : C.mute, weight: r === 1 ? 700 : 400 })
  }
  salts.forEach((s, c) => b.ctext(827.5 + c * 58, 434, s, { size: 10, fill: C.mute }))
  b.ctext(916, 454, 'pH 自下而上 4 至 9：柠檬酸、醋酸、MES、HEPES、Tris 分段覆盖', { size: 9.5, fill: C.mute })
  b.ctext(1190, 218, '激酶实例：Tm 42 升至 49 °C', { size: 11, weight: 700, fill: C.ink })
  b.bars(1080, 412, 220, 118, [42, 49], { max: 55, fill: C.proL, stroke: C.pro })
  b.ctext(1135, 311, 'Tm 42 °C', { size: 11, weight: 700, fill: C.proD })
  b.ctext(1245, 296, 'Tm 49 °C', { size: 11, weight: 700, fill: C.okD })
  b.arrow(1160, 322, 1222, 308, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.ctext(1135, 436, 'pH 7.5', { size: 10.5, fill: C.sub })
  b.ctext(1135, 452, 'HEPES', { size: 9.5, fill: C.mute })
  b.ctext(1245, 436, 'pH 8.0 Tris', { size: 10.5, fill: C.sub })
  b.ctext(1245, 452, '加 200 mM 精氨酸', { size: 9.5, fill: C.warnD })
  b.tag(1190, 258, 'ΔTm = +7 °C，大于 5 °C 即显著改善', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: C.warnD, pad: 7 })
  b.tag(916, 486, '高亮行 pH 8 · Tris：激酶实例所处区间', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.okD, pad: 7 })
  b.wtext(746, 516, '第三维添加剂：甘油 5–10%、精氨酸 50–100 mM（作用浓度带 10–500 mM，以胍基与芳香侧链相互作用抑制聚集）、TCEP 0.5 mM、EDTA 1 mM。两块 96 孔板覆盖 pH 六点 × 盐四档 × 添加剂四类，先粗筛后细筛把消耗压到最低；Tm 高于 50 °C 的蛋白在稀疏矩阵中命中率显著更高。', { maxW: 600, lh: 13.5, size: 10, fill: C.sub })

  // ============ 三、浓缩上限验证与状态定型 ============
  b.panel(30, 578, 660, 372, { title: '三、浓缩上限验证与状态定型' })
  b.axis(70, 738, 280, 110, { title: '浓缩后合格：单体峰保持', xlabel: '洗脱体积' })
  b.curve(70, 738, 280, 110, [[0.15, 0.04], [0.3, 0.18], [0.42, 0.62], [0.5, 0.95], [0.58, 0.55], [0.68, 0.2], [0.82, 0.06]], { smooth: true, stroke: C.dna, sw: 2.4 })
  b.axis(390, 738, 280, 110, { title: '超过浓缩上限：聚合与拖尾', xlabel: '洗脱体积' })
  b.curve(390, 738, 280, 110, [[0.06, 0.03], [0.13, 0.3], [0.2, 0.1], [0.3, 0.16], [0.42, 0.9], [0.52, 0.5], [0.64, 0.3], [0.78, 0.22], [0.92, 0.14]], { smooth: true, stroke: C.bad, sw: 2.4 })
  b.ctext(427, 694, '空体积聚合', { size: 9, fill: C.badD })
  b.ctext(575, 712, '拖尾', { size: 9, fill: C.badD })
  b.tag(200, 772, '浓缩目标 5–20 mg/mL（结晶与上镜）', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 7 })
  b.tag(523, 772, '大于 10 mg/mL 后回查分析型 SEC', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.tag(240, 802, '预留 12–24 h 观察窗，4 °C 静置复查浊度与 SEC', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.tag(520, 802, 'A_{280} 对账差值超 10% 换低吸附膜', { fill: C.warnL, stroke: C.warn, size: 10, tfill: C.warnD, pad: 7 })
  b.wtext(50, 834, '送结晶前的状态定型：缓冲液定型（20 mM HEPES pH 7.5、150 mM NaCl 一类低背景配方，不携带高浓度咪唑、甘油与还原剂）、浓度定型（10 mg/mL 起步，随筛选反馈调整）、批次定型（同一批样品铺满一轮筛选，杜绝跨批次噪声混入条件空间）。', { maxW: 630, lh: 14, size: 10, fill: C.sub })
  b.tag(345, 918, '「临界可溶」假象：浓缩管中看似清亮，放置过夜即雾状沉降', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.badD, pad: 8 })

  // ============ 四、冻存纪律与批次放行三件套 ============
  b.panel(730, 578, 640, 372, { title: '四、冻存纪律与批次放行三件套' })
  b.text(746, 616, '长期保存标准动作：', { size: 10.5, weight: 700, fill: C.ink })
  const fz = (x: number, fill: string, stroke: string, tfill: string, s: string) => {
    b.rect(x, 632, 118, 46, { fill, stroke, sw: 1.6, rx: 8 })
    b.ctext(x + 59, 659, s, { size: 10, weight: 600, fill: tfill })
  }
  fz(760, C.dnaL, C.dna, C.dnaD, '分装 50–100 μL')
  fz(918, C.accL, C.acc, C.accD, '液氮速冻')
  fz(1076, C.proL, C.pro, C.proD, '−80 °C 存放')
  fz(1234, C.okL, C.ok, C.okD, '4 °C 融化一次用完')
  b.arrow(880, 655, 916, 655, { stroke: C.sub, sw: 2 })
  b.arrow(1038, 655, 1074, 655, { stroke: C.sub, sw: 2 })
  b.arrow(1196, 655, 1232, 655, { stroke: C.sub, sw: 2 })
  b.tag(940, 706, '10–20% 甘油防冻伤（氢键网络缓冲冰晶的机械与渗透损伤）', { fill: C.rnaL, stroke: C.rna, size: 10, tfill: C.rnaD, pad: 7 })
  b.tag(1010, 738, '甘油是双刃剑：结晶筛选与冷冻电镜制冰前须透析或脱盐去除', { fill: C.warnL, stroke: C.warn, size: 10, tfill: C.warnD, pad: 7 })
  b.wtext(746, 768, '标签五要素——蛋白、浓度、批号、冻存日期、解冻标记，取用随记；「每支管只解冻一次」的纪律比任何复苏技巧都可靠：4 °C 融化、轻柔混匀、离心除尘后尽快使用。', { maxW: 600, lh: 13.5, size: 10, fill: C.sub })
  b.text(746, 838, '批次放行三件套：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(920, 838, 'SEC 单体峰 >95%', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.okD, pad: 6 })
  b.tag(1080, 838, '完整质量与理论值一致', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
  b.tag(1268, 838, 'Tm 偏差不超 2 °C', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.wtext(746, 872, '达不到即复纯化，不带次品进入下游——「用最好的蛋白做最难的事」，因为下游每一步都比纯化昂贵。复苏后取 5 μL 走分析型 SEC 确认冻存前后峰形一致；「冻前合格、冻后聚合」者以新鲜制备为默认，冻存只作备份。', { maxW: 600, lh: 13.5, size: 10, fill: C.sub })
}

export default scene({
  title: '稳定性筛选与蛋白保存：Tm、矩阵与冻存纪律',
  subtitle: 'DSF 约 1 °C/min 测 Tm，nanoDSF 330/350 nm 免染料；pH 4–9 × 盐 50–500 mM，ΔTm 大于 5 °C 换液；−80 °C 冻存',
  draw,
})
