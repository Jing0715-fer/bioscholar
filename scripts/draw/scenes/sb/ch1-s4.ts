// sb ch1-s4 从基因到结构的完整实验路线图（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、十步链路 ============
  b.panel(30, 132, 1340, 300, { title: '一、十步链路：从基因到 PDB 条目' })
  const step = (cx: number, y: number, name: string, time: string, hot: boolean) => {
    b.rect(cx - 95, y, 190, 62, { fill: hot ? C.warnL : C.accL, stroke: hot ? C.warn : C.acc, sw: hot ? 2 : 1.6, rx: 8 })
    b.ctext(cx, y + 26, name, { size: 12, weight: 700, fill: hot ? C.warnD : C.accD })
    b.ctext(cx, y + 45, time, { size: 10.5, fill: hot ? C.warnD : C.sub })
  }
  const xs = [170, 415, 660, 905, 1150]
  const names = [
    ['① 目标选择', '1–3 天'], ['② 基因克隆', '3–7 天'], ['③ 小试表达', '3–5 天'],
    ['④ 纯化', '1–2 天'], ['⑤ 稳定性筛选', '1–3 天'], ['⑥ 结晶或制样', '数天至数月'],
    ['⑦ 数据收集', '数小时至数天'], ['⑧ 结构解析', '数天'], ['⑨ 精修验证', '数天至数周'], ['⑩ 数据投递', '1–2 天'],
  ]
  names.forEach((n, i) => {
    const cx = xs[i % 5]
    const y = i < 5 ? 176 : 300
    step(cx, y, n[0], n[1], i === 5)
    if (i % 5 < 4) b.arrow(cx + 103, y + 31, cx + 147, y + 31, { stroke: C.acc, sw: 2, marker: 'acc' })
  })
  b.path('M 1150,242 L 1150,269 L 170,269 L 170,294', { fill: 'none', stroke: C.acc, sw: 2, marker: 'acc' })
  b.wtext(75, 386, '十步链路中⑥结晶或制样是最不可控的瓶颈（数天至数月）；缺陷沿链路逐级放大——构造边界设计错误往往到结晶环节才暴露，代价是数周工期，故「质量源于设计」要求把可溶性、均一性与稳定性评估前置到目标选择阶段。', { maxW: 1190, lh: 14, size: 10, fill: C.sub })

  // ============ 二、瓶颈统计与放行指标 ============
  b.panel(30, 444, 700, 514, { title: '二、瓶颈统计与放行指标' })
  b.rect(50, 482, 660, 104, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(66, 504, '结晶：历史性瓶颈', { size: 12.5, weight: 700, fill: C.badD })
  b.wtext(66, 522, '膜蛋白从纯化蛋白到可衍射晶体的成功率长期低于 5%，其结构条目在 PDB 占比徘徊于低个位数，而膜蛋白编码基因约占基因组三成——这一落差正是冷冻电镜崛起的直接动因。初筛以 96 孔板 0.1–2 μL 液滴对 50–500 μL 池液展开，4 °C 与 20 °C 双温度平台并行。', { maxW: 630, lh: 14, size: 10, fill: C.sub })
  b.rect(50, 600, 660, 108, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(66, 622, '放行指标（进入结晶或制样之前）', { size: 12.5, weight: 700, fill: C.okD })
  b.tag(230, 652, 'SDS-PAGE 纯度高于约 95%', { fill: '#ffffff', stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.tag(530, 652, '分析型 SEC 单体高于 90–95%', { fill: '#ffffff', stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.tag(330, 684, 'DSF：能把 Tm 提升数度的配体是共结晶稳定剂首选', { fill: '#ffffff', stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.rect(50, 724, 660, 214, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(66, 746, '实验节奏的数值锚点', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(66, 764, '构造面板并行 5–20 个截短体；密码子优化基因约 1–2 周交付；Gibson 等温装配 15–60 分钟一步反应；DSF 在 qPCR 仪上 25–95 °C 升温监测去折叠；冷冻电镜在 300 kV 场发射电镜 1–3 天采集百万量级颗粒；NMR 样品浓缩至 0.1–1 mM 并完成同位素标记；单张衍射 0.1–1°，一套完整数据数分钟到数小时。', { maxW: 630, lh: 14, size: 10, fill: C.sub })
  b.tag(340, 872, '经验法则：R 因子约等于分辨率数值的十倍（2 Å 结构 R 约 20%）', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 8 })
  b.wtext(66, 902, '模型验证依赖 MolProbity 拉氏图与 clashscore；终稿投递 PDB，电镜密度图同步投递 EMDB，NMR 化学位移归档 BMRB。', { maxW: 630, lh: 14, size: 10, fill: C.mute })

  // ============ 三、方法路线的决策表 ============
  b.panel(740, 444, 630, 514, { title: '三、方法路线的决策表' })
  b.table(755, 486, 600, {
    headers: ['提问', '答案指向的方法路线'],
    colW: [200, 400],
    rowH: 50,
    fontSize: 10.5,
    rows: [
      ['分子量多大？', '小于 30 kDa：X 射线或 NMR；大于 300 kDa：冷冻电镜优先'],
      ['能否结晶？', '结晶在握或家族有先例：X 射线；反复失败或膜蛋白：冷冻电镜'],
      ['构象异质性如何？', '高度异质：冷冻电镜分类解析，或先做稳定化改造'],
      ['要皮秒至秒动力学？', '是且分子量许可：NMR'],
      ['要配体、水与质子化细节？', '追求 1.2 Å 级分辨率：高分辨率 X 射线晶体学'],
    ],
  })
  b.wtext(755, 600, '常见失败模式沿链路分布：边界设计错误、序列差错或移码、不表达或全为包涵体、纯度或收率不足、低 Tm 易聚集、无晶或冰污染或颗粒优势取向、衍射弱与剂量损伤、分子置换失败、过拟合、验证报告警告——每一项都对应链路上一个可拦截的检查点。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
  b.wtext(755, 660, '三条路线殊途同归：大于 300 kDa 或难结晶交给冷冻电镜，动力学交给 NMR，极限分辨率交给 X 射线；预测模型又反过来成为分子置换的搜索模型，提高实验解析成功率（方法整合参见第 12 章）。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
  b.tag(1055, 740, '上游一毫米的差错，下游一公里的返工', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: C.warnD, pad: 10 })
  b.wtext(755, 780, '章节衔接：表达系统见第 2 章，裂解与纯化见第 3 至 4 章，结晶见第 5 章，数据收集见第 6 章，相位求解与精修验证见第 7 至 9 章，冷冻电镜与 NMR 见第 10 至 11 章。', { maxW: 600, lh: 14, size: 10, fill: C.mute })
}

export default scene({
  title: '从基因到结构：完整实验路线图',
  subtitle: '十步链路各环节耗时量级：表达约 1 周、纯化 1–2 天、结晶数天至数月；放行看 SDS-PAGE 高于约 95% 与 SEC 单体高于 90–95%；R 约为分辨率数值的十倍',
  draw,
})
