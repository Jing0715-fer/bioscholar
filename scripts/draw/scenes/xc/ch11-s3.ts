// xc ch11-s3 全局指标与验证报告（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、wwPDB 验证报告：三层结构与两版分发 ============
  b.panel(30, 132, 660, 412, { title: '一、wwPDB 验证报告：三层结构与两版分发' })
  b.text(60, 200, '第一层 · 首页汇总表（绝对值＋百分位）', { size: 10.5, weight: 700, fill: C.ink })
  b.table(60, 210, 360, {
    headers: ['指标', '绝对值', '百分位'],
    colW: [168, 92, 100],
    rowH: 24,
    fontSize: 9.5,
    rows: [
      ['R_{work}／R_{free}', '0.19／0.23', '前 15%'],
      ['clashscore', '3.2', '前 5%'],
      ['Ramachandran outlier', '0.2%', '前 10%'],
      ['rotamer outlier', '0.8%', '前 20%'],
      ['配体 llgf', '＋85', '正区'],
    ],
  })
  b.text(60, 394, '第二层 · outlier 清单', { size: 10.5, weight: 700, fill: C.ink })
  b.rect(60, 402, 360, 44, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.wtext(70, 418, 'Ramachandran、rotamer、clash、RSRZ 各自点名到残基与原子', { size: 9, fill: C.sub, maxW: 246, lh: 12 })
  for (let i = 0; i < 3; i++) b.line(336 + i * 24, 438, 350 + i * 24, 410 + 2 * i, { stroke: C.bad, sw: 1.6 })
  b.text(60, 464, '第三层 · 数据质量节', { size: 10.5, weight: 700, fill: C.ink })
  b.rect(60, 472, 360, 30, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 7 })
  b.text(70, 491, '完整度 · 信噪比 · 异常反射比例', { size: 9, fill: C.sub })
  b.wtext(448, 200, '2011 年 Read 等代表 wwPDB 发表新一代晶体学验证工具体系；2012 年起 OneDep 投递流程强制自动生成验证报告——每项指标给绝对值与百分位排名。', { size: 9.5, fill: C.sub, maxW: 226, lh: 13 })
  b.wtext(448, 264, '两版分发：投递人自查的完整版（OneDep 下载）与随结构公开的精简版。', { size: 9.5, fill: C.sub, maxW: 226, lh: 13 })
  b.wtext(448, 302, 'IUCr 系刊与多数结构期刊已把「随附验证报告」写进投稿要求；审稿人对照红色条目逐一发问——报告是投稿时就站在案头的体检单，不是发表后的评语。', { size: 9.5, fill: C.sub, maxW: 226, lh: 13 })
  b.wtext(448, 366, '三层信息量递增、阅读成本也递增：审稿人看首页、作者看全部；要出问题的结构往往在第三层才露出马脚。', { size: 9.5, fill: C.sub, maxW: 226, lh: 13 })
  b.wtext(448, 417, '检索工具：按 clashscore、分辨率、配体适合度筛库，已是数据库使用的常规姿势。', { size: 9.5, fill: C.mute, maxW: 226, lh: 13 })

  // ============ 二、百分位的解读：同分辨率区间内的体检 ============
  b.panel(710, 132, 660, 412, { title: '二、百分位的解读：同分辨率区间内的体检' })
  b.rect(740, 196, 140, 26, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  b.rect(880, 196, 392, 26, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.rect(1272, 196, 28, 26, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.polygon([[1277, 194], [1289, 194], [1283, 183]], { fill: C.ok })
  b.etext(1270, 180, 'clashscore 好于 95% 的同期条目＝前 5%', { size: 9.5, weight: 700, fill: C.okD })
  ;[0, 0.25, 0.5, 0.75, 1].forEach(f => {
    const tx = 740 + f * 560
    b.line(tx, 222, tx, 230, { stroke: C.sub, sw: 1.6 })
    b.ctext(tx, 246, `${f * 100}%`, { size: 9, fill: C.mute })
  })
  b.text(740, 266, '0–25%：后四分之一', { size: 9.5, weight: 700, fill: C.bad })
  b.etext(1300, 266, '95–100%：前 5%', { size: 9.5, weight: 700, fill: C.okD })
  b.polygon([[756, 368], [796, 365], [836, 354], [871, 314], [906, 354], [946, 365], [986, 368]], { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 2 })
  b.ctext(871, 302, '1.2 Å 组', { size: 10, weight: 700, fill: C.accD })
  b.polygon([[1026, 368], [1066, 365], [1106, 354], [1141, 314], [1176, 354], [1216, 365], [1256, 368]], { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 2 })
  b.ctext(1141, 302, '3.5 Å 组', { size: 10, weight: 700, fill: C.dnaD })
  b.line(1000, 330, 1018, 348, { stroke: C.bad, sw: 2.2 })
  b.line(1018, 330, 1000, 348, { stroke: C.bad, sw: 2.2 })
  b.ctext(1010, 368, '不跨组', { size: 8.5, weight: 700, fill: C.bad })
  b.ctext(1030, 390, '3.5 Å 的结构与 3.5 Å 的比，不与 1.2 Å 的比——分辨率决定可达质量', { size: 9.5, fill: C.sub })
  b.wtext(726, 414, '两条纪律：其一，百分位按分辨率区间分组解读；其二，百分位是体检不是审判——一项落后查一项（多为可修复的局部），成片落后提示系统性问题（数据、精修或建模某一环）。红色条目是作者与读者共同的整改清单，不是给结构贴的封条。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(726, 452, '作者姿势：投稿前打印 outlier 清单，逐个修复可修的（几何、水、占有率）；修不了的（活性位点真实应变、局部无序）在正文预作说明、附上证据——审稿人发问之前先自答，是报告时代的写作礼仪。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(726, 490, '分辨率与 R_{free} 的规律曲线对一切指标同样成立——判读百分位先看分组、再看单项。', { size: 9.5, fill: C.mute, maxW: 616, lh: 13 })

  // ============ 三、PDB_REDO：全库的再精修运动 ============
  b.panel(30, 552, 660, 430, { title: '三、PDB_REDO：全库的再精修运动（Joosten 等，2009 年起）' })
  b.line(60, 745, 280, 745, { stroke: C.sub, sw: 1.8 })
  b.rect(80, 625, 60, 120, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.ctext(110, 618, '约 0.24', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(110, 768, '原条目', { size: 10, fill: C.sub })
  b.rect(180, 635, 60, 110, { fill: C.okL, stroke: C.ok, sw: 1.6 })
  b.ctext(210, 628, '约 0.22', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(210, 768, 'PDB_REDO', { size: 10, fill: C.sub })
  b.tag(170, 596, '平均 R_{free} 再降约 2 个百分点', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.okD, pad: 8 })
  b.text(320, 578, '全库规模的统计结论', { size: 10.5, weight: 700, fill: C.ink })
  const obox = (x: number, y: number, t: string, s: string) => {
    b.rect(x, y, 168, 54, { fill: C.panelB, stroke: C.sub, sw: 1.5, rx: 8 })
    b.ctext(x + 84, y + 22, t, { size: 10, weight: 700, fill: C.ink })
    b.ctext(x + 84, y + 42, s, { size: 9.5, weight: 700, fill: C.okD })
  }
  obox(320, 590, 'Ramachandran outlier', '大面积清零')
  obox(504, 590, 'rotamer outlier', '大面积清零')
  obox(320, 656, 'clashscore', '显著回落')
  obox(504, 656, '侧链·氢·水', '按现代参数集重建')
  b.wtext(46, 792, '对全库历史条目自动再精修：按现代参数集重建侧链与氢、重放水、重调权重，再以同一套验证指标前后对照——「行动队」补上验证时代的执行侧。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(46, 830, '方法学「再优化、不重建」：只在既有模型的参数与权重层面找便宜（重精修、重加氢与水、重挑 rotamer），不动大架构——收益可归因于方法与工具的进化；工程上是一棵决策树逐条目判断，历史条目的自由集未必在档，重抽自由集则前后 R_{free} 不可直接比较，须如实标注。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(46, 882, '两点启示：历史欠账是系统性的——「入库」不等于「定稿」；再精修必须与再验证同笼，个别条目也可能变差，逐条对照才是负责任的用法。结构是可以被后人持续再精修的活文档；PDB_REDO 条目与原条目并排可查，取哪个版本做后续研究，本身就是一道要过验证报告的选择题。', { size: 9.5, fill: C.mute, maxW: 616, lh: 13 })

  // ============ 四、跨技术统一与原始衍射图存档 ============
  b.panel(710, 552, 660, 430, { title: '四、跨技术统一与原始衍射图存档' })
  b.rect(726, 596, 628, 46, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 8 })
  b.ctext(1040, 614, '几何指标：Ramachandran · clashscore · rotamer', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(1040, 632, '只看模型——对 X 射线与 EM 结构一视同仁', { size: 9, fill: C.sub })
  b.rect(726, 650, 306, 44, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(879, 668, 'X 射线密度端', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(879, 684, 'RSRZ 与 R_{free} 为纲', { size: 9, fill: C.sub })
  b.rect(1048, 650, 306, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(1201, 668, 'EM 密度端', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(1201, 684, 'map-model FSC 与 Q-score 为纲', { size: 9, fill: C.sub })
  b.wtext(726, 712, '「模型对图的责任」跨技术成立、报告版式趋同：同一套几何指标给跨技术比较立了公共标尺——X 射线与 EM 结构的 clashscore 可直接并排，检索可按验证指标筛选而不问技术出身（NMR 一侧补构象系综一致性）。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.text(726, 762, '原始衍射图存档运动：结构基因组学中心带头、wwPDB 与 IUCr 推动图像库试点', { size: 10.5, weight: 700, fill: C.ink })
  const abox = (x: number, t: string, s: string) => {
    b.rect(x, 774, 148, 56, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.wtext(x + 74, 792, t, { size: 9.5, weight: 700, fill: C.accD, maxW: 132, lh: 11.5, anchor: 'middle' })
    b.wtext(x + 74, 812, s, { size: 8.5, fill: C.sub, maxW: 132, lh: 10.5, anchor: 'middle' })
  }
  abox(726, '衍射图＋参数归档', '连同处理参数入库')
  abox(886, '处理可重走', '指标化·积分·缩放逐步复核')
  abox(1046, '可疑结构重处理', '整体重跑数据管线')
  abox(1206, '历史问题暴露', '个别结构现建模问题')
  b.arrow(874, 802, 884, 802, { stroke: C.sub, sw: 1.7 })
  b.arrow(1034, 802, 1044, 802, { stroke: C.sub, sw: 1.7 })
  b.arrow(1194, 802, 1204, 802, { stroke: C.sub, sw: 1.7 })
  b.wtext(726, 852, 'R 因子依赖结构因子，结构因子由原始衍射图处理而来——没有图像，「重新处理」无从谈起；已有案例显示个别历史结构在重处理后暴露建模问题。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(726, 890, '存档不是怀旧，是验证链条的最后一环：几何可查、密度可查、数据处理亦可查——三环齐扣，验证报告的条目解读才有根基。', { size: 9.5, fill: C.sub, maxW: 616, lh: 13 })
  b.wtext(726, 928, '验证的可信度，最终落在可重复性上（第 6 章的每一步都可重走）。', { size: 9.5, fill: C.mute, maxW: 616, lh: 13 })
}

export default scene({
  title: '全局指标与验证报告：百分位、PDB_REDO 与可重复性',
  subtitle: 'wwPDB 报告（2012 起强制）：绝对值＋百分位，按分辨率分组解读；clashscore 好于 95% 即前 5%；PDB_REDO 平均 Rfree 再降约 2 个百分点',
  draw,
})
