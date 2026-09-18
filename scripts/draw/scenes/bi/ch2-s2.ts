// bi ch2-s2 RefSeq 与 UniProt 的注释层级（39-i 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RefSeq 前缀层级 ============
  b.panel(30, 132, 640, 430, { title: '一、RefSeq：给每个基因一位代表序列' })
  b.table(60, 216, 580, {
    headers: ['前缀', '对象', '层级'],
    colW: [110, 170, 300],
    rowH: 48,
    fontSize: 12.5,
    rows: [
      ['NM_', 'mRNA', '策展层（人工审阅）'],
      ['NP_', '蛋白', '策展层（人工审阅）'],
      ['XM_', '预测 mRNA', '预测层（随注释版本变动）'],
      ['XP_', '预测蛋白', '预测层（随注释版本变动）'],
    ],
  })
  b.rect(60, 462, 580, 74, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.wtext(78, 486, 'RefSeq 以策展为每个基因提供唯一代表序列：NM_/NP_ 稳定可靠；XM_/XP_ 属预测层，会随注释版本的更新而变动——引用前先看清前缀。', { size: 11.5, fill: C.sub, maxW: 548, lh: 17 })

  // ============ 二、UniProtKB 金字塔 ============
  b.panel(690, 132, 680, 430, { title: '二、UniProtKB：审阅层与自动层' })
  b.polygon([[900, 246], [1030, 246], [1062, 330], [868, 330]], { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(965, 282, 'Swiss-Prot 手工审阅', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(965, 308, '≈ 50 余万条', { size: 12.5, weight: 700, fill: C.proD })
  b.polygon([[868, 330], [1062, 330], [1100, 418], [830, 418]], { fill: C.panelB, stroke: C.line, sw: 1.8 })
  b.ctext(965, 364, 'TrEMBL 自动注释', { size: 12.5, weight: 700, fill: C.sub })
  b.ctext(965, 390, '数亿条量级', { size: 12.5, weight: 700, fill: C.sub })
  b.arrow(1150, 246, 1150, 418, { stroke: C.bad, sw: 1.8, marker: 'bad', markerStart: 'bad', dash: '5 4' })
  b.wtext(1166, 316, '相差约三个数量级', { size: 11.5, weight: 700, fill: C.bad, maxW: 96, lh: 16 })
  b.etext(852, 288, '准确优先', { size: 11.5, weight: 700, fill: C.proD })
  b.etext(818, 384, '覆盖优先', { size: 11.5, weight: 700, fill: C.mute })
  b.rect(720, 452, 620, 84, { fill: C.accL, stroke: C.acc, sw: 1.3, rx: 8, fillOp: 0.5 })
  b.wtext(738, 474, '每条注释带证据代码；蛋白存在性以五级等级（PE）显式编码——把「怎么知道的」写进条目，引用前应查看。', { size: 11.5, fill: C.sub, maxW: 588, lh: 17 })

  // ============ 三、注释传播链 ============
  b.panel(30, 576, 1340, 384, { title: '三、注释的传播链：放大覆盖，也放大错误与陈旧' })
  const chain: Array<[string, string, string, string]> = [
    ['原始文献', '实验证据 · 一次结论', C.ok, C.okL],
    ['审阅层', 'Swiss-Prot 人工整合', C.pro, C.proL],
    ['自动层', 'TrEMBL 计算推断 · 批量传播', C.acc, C.accL],
    ['下游', '数据库与论文引用', C.mute, C.panelB],
  ]
  chain.forEach(([t, s, st, fl], i) => {
    const x = 70 + i * 324
    b.rect(x, 652, 292, 84, { fill: fl, stroke: st, sw: 1.8, rx: 10, fillOp: 0.6 })
    b.ctext(x + 146, 682, t, { size: 15, weight: 700, fill: st })
    b.ctext(x + 146, 710, s, { size: 11.5, fill: C.sub })
    if (i < 3) {
      b.arrow(x + 296, 694, x + 318, 694, { stroke: C.sub, sw: 2.2, marker: 'ink' })
      b.ctext(x + 307, 676, ['人工审阅', '自动传播', '放大'][i], { size: 10.5, weight: 700, fill: C.mute })
    }
  })
  b.rect(70, 762, 1296, 64, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 8, fillOp: 0.5 })
  b.wtext(90, 786, '错误与陈旧沿链放大：一次误注会被自动层批量复制到下游——把数据库视为「带时间戳的假说集合」，关键结论须回溯原始证据。', { size: 12, fill: C.bad, maxW: 1256, lh: 17 })
  b.rect(70, 848, 628, 62, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(90, 872, '引用前自检三步', { size: 12.5, weight: 700, fill: C.ink })
  b.text(90, 894, '① 查证据代码（实验 / 电子）', { size: 11.5, fill: C.sub })
  b.rect(738, 848, 628, 62, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(758, 872, '选层级的本质', { size: 12.5, weight: 700, fill: C.ink })
  b.text(758, 894, '覆盖面（自动层）与可信度（审阅层）的取舍', { size: 11.5, fill: C.sub })
}

export default scene({
  title: '注释层级：RefSeq 代表序列与 UniProtKB 审阅层',
  subtitle: 'RefSeq 以 NM_/NP_（策展）与 XM_/XP_（预测，随注释版本变动）为每个基因提供唯一代表；UniProtKB 手工审阅约 50 余万条、自动注释数亿条，相差约三个数量级；注释沿「文献→审阅层→自动层」传播——视数据库为带时间戳的假说集合',
  draw,
})
