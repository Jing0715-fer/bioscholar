// bi ch2-s4 标识符与数据互操作（39-i 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、版本号 ============
  b.panel(30, 132, 660, 420, { title: '一、登录号.版本号：小数点的分量' })
  b.text(60, 196, 'INSDC 与 UniProt 均以「登录号.版本号」标识内容级序列：', { size: 12.5, fill: C.sub })
  b.rect(80, 216, 200, 56, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(180, 250, 'AB000001.1', { size: 16, weight: 700, fill: C.dnaD })
  b.arrow(288, 244, 368, 244, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.rect(388, 216, 200, 56, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(488, 250, 'AB000001.2', { size: 16, weight: 700, fill: C.dnaD })
  b.ctext(328, 224, '序列实质修改', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(328, 288, '版本 +1', { size: 12, weight: 700, fill: C.mute })
  b.text(60, 318, '旧版本号仍可引用——小数点后的数字锁定序列内容。', { size: 12, fill: C.sub })
  b.rect(60, 340, 570, 100, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
  b.text(80, 368, 'GI 号：已退役的历史包袱', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(80, 392, 'NCBI 曾并行发放的无含义整数，随序列内容变化而更换；2016 年起逐步退役——老文献里的 GI 号都要翻译回「登录号.版本」。', { size: 11.5, fill: C.sub, maxW: 530, lh: 17 })
  b.text(60, 478, '记录主键的三元组：', { size: 13, weight: 700, fill: C.accD })
  b.tag(300, 492, '数据库', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(400, 492, '登录号', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(500, 492, '版本号', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 9 })

  // ============ 二、合并拆分改名 ============
  b.panel(710, 132, 660, 420, { title: '二、合并、拆分与改名：旧门牌的去向' })
  b.text(740, 194, '合并（merge）', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(740, 206, 140, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 6 })
  b.ctext(810, 232, 'A000001', { size: 13, weight: 700, fill: C.sub })
  b.rect(740, 266, 140, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 6 })
  b.ctext(810, 292, 'A000002', { size: 13, weight: 700, fill: C.sub })
  b.arrow(886, 230, 956, 244, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(886, 288, 956, 272, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(960, 216, 190, 84, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(1055, 250, 'A000003', { size: 14, weight: 700, fill: C.accD })
  b.ctext(1055, 278, '主登录号', { size: 11, fill: C.accD })
  b.wtext(1180, 240, '旧号转为次级登录号，保留旧门牌', { size: 11, fill: C.sub, maxW: 160, lh: 15 })
  b.text(740, 312, '拆分（split）', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(740, 326, 190, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 6 })
  b.ctext(835, 352, 'A000004', { size: 13, weight: 700, fill: C.sub })
  b.arrow(936, 344, 956, 320, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(936, 344, 956, 372, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(960, 300, 140, 44, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 6 })
  b.ctext(1030, 326, 'A000005', { size: 13, weight: 700, fill: C.accD })
  b.rect(960, 366, 140, 44, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 6 })
  b.ctext(1030, 392, 'A000006', { size: 13, weight: 700, fill: C.accD })
  b.wtext(1180, 330, '拆分同样以次级登录号保留旧门牌', { size: 11, fill: C.sub, maxW: 160, lh: 15 })
  b.rect(740, 440, 580, 72, { fill: C.warnL, stroke: C.warn, sw: 1.4, rx: 8, fillOp: 0.6 })
  b.wtext(758, 464, '基因改名：查命名变更史（改名记录、次级登录号），而非怀疑数据缺失。', { size: 11.5, fill: '#92400e', maxW: 548, lh: 16 })

  // ============ 三、交叉引用、映射与 FAIR ============
  b.panel(30, 576, 1340, 384, { title: '三、交叉引用、映射困境与 FAIR 原则' })
  b.rect(80, 652, 220, 60, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(190, 686, 'UniProt 命名空间', { size: 13, weight: 700, fill: C.proD })
  b.rect(420, 652, 220, 60, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(530, 686, 'RefSeq 命名空间', { size: 13, weight: 700, fill: C.dnaD })
  b.arrow(306, 682, 414, 682, { stroke: C.sub, sw: 2.2, marker: 'ink', markerStart: 'ink' })
  b.ctext(360, 660, 'dbXref', { size: 11.5, weight: 700, fill: C.mute })
  b.wtext(80, 744, '交叉引用：同一实体在多命名空间的双向登记——质量取决于同步频率，跳转可能隐含版本漂移。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
  b.rect(60, 788, 600, 110, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 8, fillOp: 0.45 })
  b.text(80, 814, '标识符映射的三重困境', { size: 13, weight: 700, fill: C.bad })
  b.wtext(80, 838, '一对多 · 版本错位 · 语义漂移（坐标转换 liftOver 同理）——解药是解析服务 + 主键三元组（库 / 登录号 / 版本）。', { size: 11.5, fill: C.sub, maxW: 560, lh: 16 })
  b.table(700, 660, 640, {
    headers: ['原则', '含义', '典型落实'],
    colW: [110, 200, 330],
    rowH: 42,
    fontSize: 12,
    rows: [
      ['F 可发现', '数据与元数据可被找到', '持久标识 + 富元数据登记'],
      ['A 可访问', '能以标准协议获取', '开放仓库 / 受控访问审批'],
      ['I 可互操作', '跨系统交换与整合', '共用词表 · dbXref · 格式标准'],
      ['R 可重用', '可复用于新问题', '机器可读元数据 + 许可规范'],
    ],
  })
  b.wtext(700, 910, 'FAIR 原则（2016 年提出）：核心是机器可读的元数据与许可规范——可视为本章内容的总结陈词。', { size: 11.5, fill: C.sub, maxW: 640, lh: 16 })
}

export default scene({
  title: '标识符与数据互操作：版本号、次级登录号与 FAIR',
  subtitle: '「登录号.版本号」标识内容级序列，实质修改版本加一、旧版仍可引用；GI 号 2016 年起退役；合并与拆分经次级登录号保留旧门牌；dbXref 质量取决于同步频率；FAIR（2016）要求可发现、可访问、可互操作、可重用',
  draw,
})
