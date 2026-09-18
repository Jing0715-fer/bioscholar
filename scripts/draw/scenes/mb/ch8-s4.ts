// mb ch8-s4 中介复合物与信号诱导的转录调控（39-c）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 上：Mediator 总线 + 共调节因子 ============
  b.panel(30, 132, 1340, 428, { title: '一、Mediator（约 30 亚基）：激活域与 pol II 基础机器之间的「总线」' })
  const dy = 270 // DNA 基线
  b.line(70, dy, 1330, dy, { stroke: C.dna, sw: 3 })
  // 增强子 + 激活因子
  b.rect(100, dy - 15, 130, 30, { fill: C.proL, stroke: C.pro, sw: 2, rx: 4 })
  b.ctext(165, dy + 5, '增强子', { size: 13, weight: 700, fill: C.proD })
  b.ellipse(165, 218, 46, 22, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(165, 224, '激活因子', { size: 12.5, weight: 700, fill: C.proD })
  // Mediator 模块
  b.rect(300, 170, 92, 80, { fill: C.proL, stroke: C.pro, sw: 2, rx: 10 })
  b.ctext(346, 202, '尾模块', { size: 13.5, weight: 700, fill: C.proD })
  b.ctext(346, 224, '结合激活域', { size: 10.5, fill: C.mute })
  b.rect(398, 170, 92, 80, { fill: C.accL, stroke: C.acc, sw: 2, rx: 10 })
  b.ctext(444, 202, '中部', { size: 13.5, weight: 700, fill: C.accD })
  b.rect(496, 170, 92, 80, { fill: C.accL, stroke: C.acc, sw: 2, rx: 10 })
  b.ctext(542, 202, '头部', { size: 13.5, weight: 700, fill: C.accD })
  b.ctext(542, 224, '接触 pol II', { size: 10.5, fill: C.mute })
  b.ellipse(398, 140, 40, 18, { fill: C.panelB, stroke: C.mute, sw: 1.6, dash: '4 3' })
  b.ctext(398, 145, 'CDK8', { size: 11, weight: 600, fill: C.sub })
  b.ctext(444, 262, 'Mediator（头-中-尾 + CDK8 模块）', { size: 12.5, fill: C.sub })
  // 激活域 → 尾模块；头部 → Pol II
  b.arrow(211, 218, 296, 205, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(254, 198, '激活域', { size: 11.5, fill: C.proD })
  b.ellipse(680, 212, 54, 26, { fill: C.rnaL, stroke: C.rna, sw: 2.2 })
  b.ctext(680, 218, 'pol II', { size: 14, weight: 700, fill: C.rnaD })
  b.arrow(590, 210, 624, 211, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  // 启动子 + 基因
  b.rect(590, dy - 13, 60, 26, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 3 })
  b.ctext(620, dy + 4, 'TATA', { size: 11, weight: 700, fill: C.accD })
  b.rect(700, dy - 14, 80, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 3 })
  b.rect(820, dy - 14, 80, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 3 })
  b.rect(940, dy - 14, 90, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 3 })
  b.ctext(620, dy + 36, '启动子', { size: 11.5, fill: C.mute })
  b.ctext(865, dy + 36, '基因', { size: 11.5, fill: C.mute })
  b.ctext(680, dy + 60, '稳定 PIC、促进 CTD 磷酸化', { size: 12, fill: C.sub })
  // DNA 成环（下方弧）
  b.path('M165,288 C 300,362 500,362 620,288', { stroke: C.pro, sw: 2.4, dash: '8 6' })
  b.ctext(392, 332, 'DNA 成环：增强子-启动子沟通', { size: 12, fill: C.proD })
  // mRNA
  b.arrow(710, 322, 1310, 322, { stroke: C.rna, sw: 2.6, marker: 'rna' })
  b.ctext(1010, 308, '转录（启动频率由 Mediator 决定）', { size: 12, fill: C.rnaD })
  // —— 核小体与共调节因子 ——
  b.text(56, 400, '共调节因子在染色质层面执行正 / 负调节：', { size: 15, weight: 700, fill: C.ink })
  const nucY = 486
  b.line(180, nucY, 900, nucY, { stroke: C.dna, sw: 2.6 })
  for (const nx of [340, 500, 660, 820]) {
    b.circle(nx, nucY, 24, { fill: C.panelB, stroke: C.dna, sw: 2 })
    b.line(nx - 24, nucY, nx + 24, nucY, { stroke: C.dna, sw: 1.4 })
    b.line(nx, nucY - 24, nx, nucY - 42, { stroke: C.mute, sw: 1.6 })
  }
  // 左：共激活
  b.tag(170, 428, 'CBP / p300（HAT）', { fill: C.okL, stroke: C.ok, size: 12.5, weight: 600, tfill: C.ok })
  b.tag(170, 462, 'SWI/SNF 重塑子（BRG1）', { fill: C.okL, stroke: C.ok, size: 12.5, weight: 600, tfill: C.ok })
  b.arrow(268, 434, 316, 452, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.arrow(268, 466, 470, 462, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.tag(372, 428, '乙酰化 Ac', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.ok, pad: 7 })
  b.line(360, 436, 340, 448, { stroke: C.ok, sw: 1.4 })
  b.tag(532, 428, 'Ac', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.ok, pad: 6 })
  // 右：共抑制
  b.tag(1150, 428, 'NCoR / SMRT → HDAC3', { fill: C.badL, stroke: C.bad, size: 12.5, weight: 600, tfill: C.bad })
  b.tag(1150, 462, 'PRC1：H2AK119ub；PRC2：H3K27me3', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 600, tfill: C.bad })
  b.arrow(1030, 434, 850, 452, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(1030, 466, 690, 452, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(700, 524, '共激活：滑动/排出核小体 + 乙酰化 ｜ 共抑制：去乙酰化 + 沉默标记', { size: 12, fill: C.sub })
  b.ctext(700, 508, '核小体', { size: 11.5, fill: C.mute })

  // ============ 下：四条信号诱导通路 ============
  b.panel(30, 574, 1340, 390, { title: '二、四条经典信号诱导通路：殊途同归于 Mediator 总线' })
  const lanes: { label: string; color: string; fillL: string; steps: string[]; last?: boolean }[] = [
    {
      label: '类固醇受体', color: '#b45309', fillL: C.warnL,
      steps: ['脂溶性激素经胞内受体直接调控', '激素结合 → 与 Hsp90 解离、暴露 NLS 入核', '同源二聚体结合 GRE（AGAACAnnnTGTTCT）', '招募 SRC → CBP/p300 → Mediator'],
    },
    {
      label: 'JAK-STAT', color: C.acc, fillL: C.accL,
      steps: ['细胞因子（干扰素、白介素）结合膜受体', 'JAK 磷酸化受体 → STAT 经 SH2 募集并磷酸化', 'pSTAT 二聚体入核结合 GAS / ISRE（ISGF3）', 'SOCS 蛋白负反馈关闭通路'],
    },
    {
      label: 'NF-κB', color: C.bad, fillL: C.badL,
      steps: ['炎症信号（TNFα、LPS-TLR4）', 'IKK 复合体磷酸化 IκB → 泛素-蛋白酶体降解', 'p65/p50 入核结合 κB 位点（GGGRNNYYCC）', '启动炎症 / 存活基因'],
    },
    {
      label: 'MAPK', color: C.ok, fillL: C.okL,
      steps: ['生长因子经 RTK / GPCR 入胞', 'Ras → Raf → MEK → ERK 三级级联', 'ERK 磷酸化 Elk-1 等既存转录因子', '改变其 DNA 结合与激活活性'],
    },
  ]
  lanes.forEach((lane, li) => {
    const ly = 616 + li * 82
    b.tag(100, ly + 30, lane.label, { fill: lane.fillL, stroke: lane.color, size: 13.5, weight: 700, tfill: lane.color, pad: 10 })
    lane.steps.forEach((s, i) => {
      const bx = 180 + i * 302
      const isElement = i === 2 && li !== 3 && li !== 1 // DNA 元件步骤用绿系
      const fill = isElement ? C.dnaL : lane.fillL
      const stroke = isElement ? C.dna : lane.color
      b.rect(bx, ly + 4, 278, 56, { fill, stroke, sw: 1.6, rx: 8, fillOp: 0.55 })
      b.wtext(bx + 14, ly + 26, s, { size: 12, fill: C.sub, maxW: 252, lh: 19 })
      if (i < 3) b.arrow(bx + 282, ly + 32, bx + 298, ly + 32, { stroke: lane.color, sw: 2.2, marker: li === 0 ? 'rna' : li === 1 ? 'acc' : li === 2 ? 'bad' : 'ok' })
    })
  })
  // 殊途同归注
  b.rect(46, 930, 1308, 26, { fill: 'none' })
  b.ctext(700, 948, '四条通路殊途同归：把信号转化为特定转录因子在特定位点、特定时间的活性，再经 Mediator 桥接为 pol II 的启动频率——信号转导的终点即转录调控的起点', { size: 12.5, fill: C.sub })
}

export default scene({
  title: '中介复合物与信号诱导的转录调控',
  subtitle: 'Mediator 通用接头 + 共激活/共抑制因子——类固醇、JAK-STAT、NF-κB 与 MAPK 四路信号的汇聚',
  draw,
})
