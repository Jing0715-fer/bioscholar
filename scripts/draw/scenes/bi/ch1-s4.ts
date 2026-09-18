// bi ch1-s4 研究范式与方法（39-i 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、干湿循环 ============
  b.panel(30, 132, 640, 430, { title: '一、干实验与湿实验：交替的研究节奏' })
  const loop: Array<[number, number, string, string, string, string, string, string]> = [
    [80, 206, '湿实验', '设计并产生数据', '高通量产出 · 批次效应须控', C.dna, C.dnaL, C.dnaD],
    [350, 206, '数据与数据库', '版本冻结 · 受控访问', '原始数据是结论的地基', C.acc, C.accL, C.accD],
    [350, 340, '干实验（计算分析）', '统计推断 · 建模 · 预测', '量化不确定性', C.pro, C.proL, C.proD],
    [80, 340, '假设与模型', '标注证据等级', '回实验台验证才是终点', C.enz, C.enzL, C.enzD],
  ]
  loop.forEach(([x, y, t, s1, s2, st, fl, tf]) => {
    b.rect(x, y, 250, 92, { fill: fl, stroke: st, sw: 1.8, rx: 10, fillOp: 0.55 })
    b.ctext(x + 125, y + 26, t, { size: 15, weight: 700, fill: tf })
    b.ctext(x + 125, y + 50, s1, { size: 11.5, fill: C.sub })
    b.ctext(x + 125, y + 72, s2, { size: 11, fill: C.mute })
  })
  b.arrow(332, 252, 348, 252, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(475, 300, 475, 336, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(348, 386, 332, 386, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.arrow(205, 336, 205, 302, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(283, 316, '循环', { size: 12, weight: 700, fill: C.mute })
  b.wtext(60, 480, '健康的研究节奏是干湿交替的循环：计算结论须标注证据等级并量化不确定性——星号不是终点，回到实验台验证才是。', { size: 12, fill: C.sub, maxW: 580, lh: 18 })

  // ============ 二、P 值与多重检验 ============
  b.panel(690, 132, 680, 430, { title: '二、P 值正读与多重检验的两把闸门' })
  b.rect(720, 192, 620, 104, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(1030, 222, 'P 值 = 零假设为真时，出现当前或更极端结果的概率', { size: 13.5, weight: 700, fill: C.ink })
  b.ctext(1030, 250, '它不等于「零假设为真的概率」——报告效应量与置信区间比星号更规范', { size: 11.5, fill: C.sub })
  b.ctext(1030, 276, '高通量场景一次检验成千上万个假设 → 多重检验问题', { size: 11.5, weight: 600, fill: C.bad })
  b.table(720, 322, 620, {
    headers: ['策略', '控制目标', '阈值行为', '适合场景'],
    colW: [176, 148, 122, 174],
    rowH: 46,
    fontSize: 12,
    rows: [
      ['Bonferroni', '家族错误率 FWER', '极保守', '确证性检验'],
      ['Benjamini-Hochberg', '错误发现率 FDR', '较宽松', '探索性筛选'],
    ],
  })
  b.rect(720, 468, 620, 62, { fill: C.warnL, stroke: C.warn, sw: 1.4, rx: 8, fillOp: 0.6 })
  b.wtext(738, 490, 'FDR 5% 的数字感：若得 500 个显著基因，含义是「其中假阳性的期望比例约 5%」，而非「每个基因都有 95% 把握为真」。', { size: 11.5, fill: '#92400e', maxW: 588, lh: 16 })

  // ============ 三、可重复性 ============
  b.panel(30, 576, 1340, 384, { title: '三、可重复性：把分析变为公共资产的工程对策' })
  const flow: Array<[string, string, string, string]> = [
    ['原始数据', '版本冻结（快照 + 元数据）', C.dna, C.dnaL],
    ['分析环境', '容器化镜像（依赖打包）', C.acc, C.accL],
    ['分析流程', '工作流引擎（Snakemake / Nextflow）', C.pro, C.proL],
    ['使用门槛', 'Galaxy 等平台（图形化）', C.enz, C.enzL],
    ['公共资产', '他人可复现的完整分析', C.ok, C.okL],
  ]
  flow.forEach(([t, s, st, fl], i) => {
    const x = 60 + i * 258
    b.rect(x, 640, 236, 92, { fill: fl, stroke: st, sw: 1.8, rx: 10, fillOp: 0.55 })
    b.ctext(x + 118, 668, t, { size: 15, weight: 700, fill: st })
    b.wtext(x + 118, 694, s, { size: 11, fill: C.sub, maxW: 216, lh: 15, anchor: 'middle' })
    if (i < 4) b.arrow(x + 240, 686, x + 256, 686, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  b.table(60, 772, 1300, {
    headers: ['要素', '问题', '工程对策'],
    colW: [170, 470, 660],
    rowH: 42,
    fontSize: 12.5,
    rows: [
      ['数据', '版本漂移与「悄悄更新」', '版本冻结 + 持久标识（登录号.版本号）'],
      ['环境', '依赖与系统漂移', '容器化环境（同一镜像在任何机器复现）'],
      ['流程', '手工步骤不可复述', '工作流引擎 / Galaxy 平台代码化'],
    ],
  })
}

export default scene({
  title: '研究范式与方法：干湿循环、多重检验与可重复性',
  subtitle: '干湿实验交替构成研究闭环，计算结论须标注证据等级并量化不确定性；P 值是零假设为真时出现当前或更极端结果的概率；Bonferroni 控 FWER（极保守）、BH 控 FDR（探索性筛选），FDR 5% 即列表中假阳性期望比例约 5%；版本冻结、容器化与工作流引擎把分析变为公共资产',
  draw,
})
