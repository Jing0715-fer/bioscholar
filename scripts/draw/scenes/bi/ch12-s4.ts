// bi ch12-s4 可重复性、伦理与数据治理（39-i 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三重链条与 FAIR ============
  b.panel(30, 132, 660, 420, { title: '一、可重复性三重链条与 FAIR 原则' })
  const chain: Array<[number, string, string, string, string]> = [
    [60, '数据', '原始 + 处理后', C.accL, C.acc],
    [280, '代码', '脚本 + 版本', C.dnaL, C.dna],
    [500, '环境', '依赖 + 容器', C.proL, C.pro],
  ]
  chain.forEach(([x, t, s, f, st]) => {
    b.rect(x, 200, 175, 64, { fill: f, stroke: st, sw: 1.8, rx: 8 })
    b.ctext(x + 87, 228, t, { size: 14, weight: 700, fill: C.ink })
    b.ctext(x + 87, 250, s, { size: 10.5, fill: C.sub })
  })
  ;[[250, 264], [470, 484]].forEach(([x1, x2]) => {
    b.circle(x1, 232, 8, { fill: 'none', stroke: C.mute, sw: 2 })
    b.circle(x2, 232, 8, { fill: 'none', stroke: C.mute, sw: 2 })
  })
  b.text(60, 310, 'FAIR 原则（操作纲领）：', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(115, 346, 'F · 可发现', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(255, 346, 'A · 可访问', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(395, 346, 'I · 可互操作', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(530, 346, 'R · 可重用', { fill: C.accL, stroke: C.acc, size: 11, weight: 700, tfill: C.accD, pad: 9 })
  b.ctext(115, 374, '持久标识（DOI）', { size: 10, fill: C.mute })
  b.ctext(255, 374, '受控开放访问', { size: 10, fill: C.mute })
  b.ctext(395, 374, '共用格式与本体', { size: 10, fill: C.mute })
  b.ctext(530, 374, '元数据 + 许可', { size: 10, fill: C.mute })
  b.wtext(60, 428, '可重复性依赖数据、代码、环境三重链条齐备——缺一环，他人便无法从你的论文走到你的数字。', { size: 11, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 二、三件套与 Excel 事故 ============
  b.panel(710, 132, 660, 420, { title: '二、可重复三件套与细节失守的代价' })
  const kit: Array<[number, string, string]> = [
    [730, 'git', '版本控制'],
    [940, '容器', '锁死软件环境'],
    [1150, '工作流管理器', 'Nextflow / Snakemake'],
  ]
  kit.forEach(([x, t, s]) => {
    b.rect(x, 196, 190, 70, { fill: C.panelB, stroke: C.sub, sw: 1.7, rx: 8 })
    b.ctext(x + 95, 224, t, { size: 13, weight: 700, fill: C.ink })
    b.ctext(x + 95, 248, s, { size: 10.5, fill: C.sub })
  })
  b.wtext(730, 294, '工作流管理器声明依赖、支持断点续跑，并记录 provenance（数据血缘）。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
  b.text(730, 344, '细节失守：Excel 基因名转日期', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(730, 364, 170, 44, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 7 })
  b.ctext(815, 391, 'SEPT2 · 基因名', { size: 11.5, fill: C.sub })
  b.arrow(904, 386, 944, 386, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.rect(948, 364, 170, 44, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(1033, 391, '2-Sep · 日期', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(924, 432, 'Excel 自动转成日期', { size: 10, fill: C.bad })
  b.ctext(1250, 386, '≈ 1/5', { size: 24, weight: 700, fill: C.bad })
  b.wtext(1150, 412, '已发表基因列表被此类事故污染', { size: 10.5, fill: C.sub, maxW: 200, lh: 14 })
  b.wtext(730, 462, '细节失守可瓦解文献地基——这正是「数据、代码、环境」要机器可执行的原因。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 三、基准测试社区：方法的考场 ============
  b.panel(30, 576, 660, 404, { title: '三、基准社区：方法的考场' })
  const halls: Array<[number, string, string]> = [
    [60, 'CASP', '结构预测（双盲）'],
    [260, 'CAFA', '功能注释'],
    [460, 'CAMDA', '数据挑战'],
  ]
  halls.forEach(([x, t, s]) => {
    b.rect(x, 640, 180, 70, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
    b.ctext(x + 90, 670, t, { size: 14, weight: 700, fill: C.accD })
    b.ctext(x + 90, 694, s, { size: 10.5, fill: C.sub })
  })
  b.text(60, 762, '免疫自建自评的三条规矩：', { size: 12, weight: 700, fill: C.ink })
  const rules = ['预测先于答案揭晓', '统一指标、统一口径', '公共题目、公共数据']
  rules.forEach((s, i) => {
    b.circle(78, 794 + i * 34, 11, { fill: C.acc, stroke: C.acc, sw: 1.6 })
    b.ctext(78, 798 + i * 34, `${i + 1}`, { size: 11, weight: 700, fill: '#ffffff' })
    b.text(100, 798 + i * 34, s, { size: 11.5, fill: C.sub })
  })
  b.wtext(330, 788, '组织者先收预测、后公布答案——任何人无法对着答案调方法；双盲基准由此驱动研发（CASP14 即一例）。', { size: 11, fill: C.sub, maxW: 320, lh: 15 })
  b.wtext(60, 908, '「自建自评」无法自证公平；基准社区把评价权交给中立的考场。', { size: 11, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 四、隐私、ELSI 与 AI 时代的作者责任 ============
  b.panel(710, 576, 660, 404, { title: '四、基因组隐私、ELSI 与 AI 时代的作者责任' })
  b.text(730, 648, '基因组匿名近乎幻觉', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(730, 672, 150, 48, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 7 })
  b.ctext(805, 700, '去标识队列', { size: 11.5, weight: 700, fill: C.accD })
  b.rect(730, 752, 150, 48, { fill: C.panelB, stroke: C.line, sw: 1.6, rx: 7 })
  b.ctext(805, 780, '系谱 / 公开数据库', { size: 11, fill: C.sub })
  b.line(884, 696, 908, 714, { stroke: C.mute, sw: 1.6 })
  b.line(884, 776, 908, 758, { stroke: C.mute, sw: 1.6 })
  b.circle(940, 736, 36, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(940, 741, '再识别', { size: 12, weight: 700, fill: C.bad })
  b.wtext(730, 830, '对策：受控访问、分层同意与 ELSI 治理框架；代表性偏差是统计与公平的双重问题。', { size: 11, fill: C.sub, maxW: 340, lh: 15 })
  b.text(1100, 648, '生成式 AI 的四条边界', { size: 12.5, weight: 700, fill: C.ink })
  const aiRules = ['· 不得署名作者', '· 使用须披露', '· 引用须核实', '· 机密数据不得投喂']
  aiRules.forEach((s, i) => b.text(1100, 680 + i * 26, s, { size: 11.5, fill: C.sub }))
  b.text(1100, 796, '工具半衰期以年计，', { size: 12, weight: 700, fill: C.mute })
  b.text(1100, 818, '原则半衰期以世纪计。', { size: 12, weight: 700, fill: C.mute })
  b.wtext(730, 884, '预印本加速交流，但不代表已完成同行评议。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
}

export default scene({
  title: '可重复性、伦理与数据治理：三重链条、三件套与三大考场',
  subtitle: '三重链条＋FAIR；git / 容器 / 工作流三件套；Excel 转日期污染约 1/5 已发表基因列表；三大考场免疫自建自评；AI 不署名、须披露',
  draw,
})
