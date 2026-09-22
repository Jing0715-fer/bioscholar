// sb ch4-s2 多步纯化流程的设计（Task SB-1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三步流程总览 ============
  b.panel(30, 132, 1340, 320, { title: '一、捕获—中间纯化—精纯：三步流程总览' })
  const flow = (x: number, fill: string, stroke: string, tfill: string, title: string, lines: string[]) => {
    b.rect(x, 184, 240, 128, { fill, stroke, sw: 1.8, rx: 9 })
    b.ctext(x + 120, 208, title, { size: 12, weight: 700, fill: tfill })
    lines.forEach((ln, i) => b.text(x + 14, 232 + i * 17.5, ln, { size: 9.8, fill: C.sub }))
  }
  flow(50, C.panelB, C.line, C.ink, '澄清粗提液', ['来自第 1 节裂解澄清', '体积数百毫升', 'A_{260}/A_{280} 监控核酸', '4 °C 上样'])
  flow(316, C.enzL, C.enz, C.enzD, '① 亲和捕获（Ni-NTA）', ['介质容量 5–10 mg/mL', '洗涤 20 mM 咪唑', '洗脱 20/40/250 mM 分步', '收率典型 60–90%'])
  flow(582, C.rnaL, C.rna, C.rnaD, '② TEV 切标签与逆亲和', ['TEV 1:50，4 °C 过夜', '识别 ENLYFQ/G 接口', '逆亲和一步三分离', 'S219V 耐突变体'])
  flow(848, C.accL, C.acc, C.accD, '③ 离子交换精纯', ['Q（pI 5–7）或 SP（碱性）', 'pH 偏离 pI 0.5–1 单位', '上样离子强度低于 50 mM', '目标峰 100–400 mM 洗出'])
  flow(1114, C.dnaL, C.dna, C.dnaD, '④ SEC 终纯', ['Superdex 200 Increase', '10/300 制备柱', '单体峰占比大于 95%', '同步置换终缓冲液'])
  b.arrow(292, 248, 314, 248, { stroke: C.sub, sw: 2.2 })
  b.arrow(558, 248, 580, 248, { stroke: C.sub, sw: 2.2 })
  b.arrow(824, 248, 846, 248, { stroke: C.sub, sw: 2.2 })
  b.arrow(1090, 248, 1112, 248, { stroke: C.sub, sw: 2.2 })
  b.tag(340, 344, '三步分工：亲和管「快」 · IEX 管「深」 · SEC 管「纯与匀」', { fill: C.panelB, stroke: C.line, size: 10.5, weight: 700, tfill: C.ink, pad: 9 })
  b.tag(1020, 344, '结晶级判据：纯度 >95% · 单体峰 >95% · 可溶可浓（5–20 mg/mL）', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.wtext(50, 382, '现场纪律：柱子以 5–10 个柱体积平衡；上样流速 0.5–1 mL/min（1 mL 柱）让结合接近平衡；冲洗不少于 10 个柱体积压低非特异背景；每步流出液留样走胶——「目标出现在流穿」是亲和最经典的失败，多源于咪唑竞争过强、pH 偏离或标签被降解。', { maxW: 1300, lh: 15, size: 10.5, fill: C.sub })
  b.wtext(50, 414, '变体路线：无标签蛋白改用底物类似物亲和柱或染料柱；Strep 标签以生物素洗脱避开咪唑；降解敏感者把 SEC 提前、IEX 收尾，或以两次 SEC 完成——「三步」是模板而非教条，任何重组都回检查点表逐项验证。', { maxW: 1300, lh: 15, size: 10.5, fill: C.mute })

  // ============ 二、收率的链式核算 ============
  b.panel(30, 470, 660, 240, { title: '二、收率的链式核算' })
  b.tag(250, 526, '总收率 = 70% × 80% × 85% ≈ 48%', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 9 })
  b.bars(70, 650, 300, 105, [100, 70, 56, 47.6], {
    labels: ['表达量', '亲和捕获', '切标签', 'IEX 加 SEC'],
    vlabels: ['100%', '70%', '56%', '约 48%'],
    max: 100, fill: C.accL, stroke: C.acc,
  })
  b.text(70, 692, '各级收率连乘，损耗只增不减', { size: 9.5, fill: C.mute })
  b.wtext(400, 516, '从 1 L 大肠杆菌表达（典型目标表达量 20–50 mg）出发，最终可得约 10–25 mg 纯蛋白——足够一轮稀疏矩阵筛选（约需 0.5–1 mg）。', { maxW: 270, lh: 14, size: 10, fill: C.sub })
  b.wtext(400, 580, '收率表逐批记录并求均值：连续三批波动超过 ±15%，提示上游表达或裂解存在不受控变量——诱导密度、诱导时长与裂解完全度是前三大嫌疑。', { maxW: 270, lh: 14, size: 10, fill: C.sub })

  // ============ 三、浓缩与缓冲液置换 ============
  b.panel(730, 470, 640, 240, { title: '三、浓缩与缓冲液置换' })
  b.tag(890, 524, '超滤浓缩目标 5–20 mg/mL', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 8 })
  b.tag(1160, 524, 'MWCO 取分子量 1/3 至 1/2', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 8 })
  b.tag(890, 556, '30 kDa 蛋白配 10 kDa 管', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.tag(1160, 556, '3,000–5,000 g 分次短旋 5–10 min', { fill: C.panelB, stroke: C.line, size: 10.5, tfill: C.ink, pad: 8 })
  b.wtext(746, 588, '缓冲液置换：PD-10 或 G-25 脱盐柱一步完成，也可在超滤管内反复稀释—浓缩 3–4 轮；顺序有讲究——先置换到低盐再浓缩，避免把高盐溶液直接带进结晶筛选。浓度测定首选 A_{280}（消光系数由序列计算），Bradford 与 BCA 受去垢剂与还原剂干扰须校正。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
  b.wtext(746, 660, '附加工序：治疗用途以 Triton X-114 相分离（高于约 20 °C 去垢剂相富集内毒素）加除内毒素介质，把内毒素压至 0.1 EU/mg 以下；膜蛋白全程维持去垢剂高于 CMC 的 5–10 倍（DDM、LMNG），浓缩后以 SEC 复核胶束单体峰。', { maxW: 600, lh: 13.5, size: 10, fill: C.sub })

  // ============ 四、每步检查点与典型失败模式 ============
  b.panel(30, 730, 1340, 220, { title: '四、每步检查点与典型失败模式' })
  b.table(50, 766, 1300, {
    headers: ['步骤', '核心任务', '关键参数', '检查点', '典型失败模式'],
    colW: [140, 170, 270, 260, 460],
    rowH: 34,
    fontSize: 10.5,
    rows: [
      ['亲和捕获', '富集与减体积', '咪唑 20/40/250 mM 分步梯度', 'SDS-PAGE、A_{280} 回收率', '标签折叠不良、介质容量超载'],
      ['TEV 切除与逆亲和', '去标签', 'TEV 1:50，4 °C 过夜或室温 2–3 h', '切点完整性（质谱验证）', '切除不完全、蛋白酶自降解'],
      ['离子交换精纯', '除核酸与降解片段', 'pH 偏离 pI 0.5–1 个单位', 'A_{260}/A_{280}、纯度走胶', '目的不挂柱或洗脱峰过宽'],
      ['SEC 终纯', '均一化与换液', 'Superdex 200 Increase 10/300', '单体峰占比大于 95%', '聚合体拖尾、上样体积超载'],
    ],
  })
}

export default scene({
  title: '多步纯化流程的设计：捕获、精纯与终纯',
  subtitle: '亲和捕获 60–90%、IEX 管深、SEC 管纯匀；TEV 1:50 去标签；总收率 70%×80%×85% 约 48%，1 L 表达 20–50 mg 终得 10–25 mg',
  draw,
})
