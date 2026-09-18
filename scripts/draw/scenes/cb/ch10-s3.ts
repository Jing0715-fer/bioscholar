// cb ch10-s3 检验点与 p53：忠实复制的保障（39-d 批C 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、R 点：cyclin D-CDK4/6-Rb-E2F 正反馈 ============
  b.panel(30, 132, 660, 430, { title: '一、G1/S 检验点：R 点＝Rb-E2F 正反馈的承诺点' })
  b.wtext(64, 186, 'Pardee（1974）提出限制点：此前细胞依赖丝裂原（生长因子经 Ras-MAPK 与 PI3K 通路诱导 cyclin D）持续刺激；一旦通过，即使撤除丝裂原也完成整轮周期。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })
  // 正反馈环
  b.tag(200, 262, '丝裂原 → cyclin D', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 6 })
  b.arrow(200, 284, 200, 312, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.rect(120, 316, 160, 42, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 8 })
  b.ctext(200, 341, 'cyclin D-CDK4/6', { size: 10.5, weight: 700, fill: C.enzD })
  b.arrow(288, 337, 356, 337, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.rect(358, 312, 84, 50, { fill: C.proL, stroke: C.pro, sw: 2, rx: 8 })
  b.ctext(400, 332, 'Rb', { size: 12, weight: 700, fill: C.proD })
  b.ctext(400, 350, '磷酸化', { size: 9, fill: C.proD })
  b.arrow(446, 337, 500, 337, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.rect(502, 312, 84, 50, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 8 })
  b.ctext(544, 332, 'E2F', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(544, 350, '释放', { size: 9, fill: C.dnaD })
  // 正反馈回环
  b.path('M 544,366 C 544,412 240,412 200,362', { stroke: C.dna, sw: 2.2, dash: '6 4', marker: 'dna', fill: 'none' })
  b.wtext(300, 404, '转录 cyclin E → cyclin E-CDK2 进一步磷酸化 Rb（正反馈）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.wtext(64, 436, '低磷酸化 Rb 结合并抑制 E2F；正反馈使 Rb 彻底失活后 S 期基因全面表达。', { size: 9.5, fill: C.sub, maxW: 600, lh: 13 })
  b.tag(200, 470, '接触抑制：E-钙粘蛋白接触上调 p27、下调 cyclin D/E（肿瘤细胞失去）', { fill: C.warnL, stroke: C.warn, size: 9.5, tfill: '#78350f', pad: 5 })
  b.tag(300, 518, 'p16-cyclin D-CDK4/6-Rb-E2F 轴：肿瘤最常扰动的通路之一', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })

  // ============ 二、DNA 损伤检验点与 p53 网络 ============
  b.panel(710, 132, 660, 430, { title: '二、DNA 损伤检验点：ATM/ATR-Chk-p53 网络（基因组卫士）' })
  b.tag(810, 190, 'DNA 损伤（复制胁迫 / 外源损伤）', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 6 })
  b.arrow(810, 212, 810, 240, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.rect(746, 242, 128, 44, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 8 })
  b.ctext(810, 268, 'ATM / ATR', { size: 11.5, weight: 700, fill: C.enzD })
  b.arrow(810, 286, 810, 312, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.rect(746, 314, 128, 44, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 8 })
  b.ctext(810, 340, 'Chk2 / Chk1', { size: 11.5, weight: 700, fill: C.rnaD })
  // 分支1：Cdc25
  b.arrow(874, 336, 990, 336, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.tag(1064, 336, '磷酸化并降解 Cdc25', { fill: C.panelB, stroke: C.mute, size: 9.5, tfill: C.mute, pad: 5 })
  b.wtext(960, 366, '阻止 CDK 激活 / 诱导 CKI → 周期停滞于 G1/S 或 G2/M，为修复争取时间', { size: 9.5, fill: C.sub, maxW: 380, lh: 13 })
  // 分支2：p53
  b.arrow(810, 358, 810, 386, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.rect(746, 388, 128, 46, { fill: C.badL, stroke: C.bad, sw: 2.4, rx: 8 })
  b.ctext(810, 408, 'p53 磷酸化', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(810, 426, '（不再被 Mdm2 降解）', { size: 8.5, fill: C.bad })
  // Mdm2 负反馈
  b.tag(1120, 396, 'Mdm2（正常时结合 p53 促其泛素化降解）', { fill: C.panelB, stroke: C.mute, size: 9, tfill: C.mute, pad: 5 })
  b.arrow(1024, 396, 878, 400, { stroke: C.mute, sw: 1.6, marker: 'mute', dash: '4 4' })
  // p53 下游四路
  const outs: Array<[string, string, string]> = [
    ['p21', '抑制多种 CDK → G1/S 阻滞', C.enz],
    ['GADD45·修复基因', 'DNA 修复', C.ok],
    ['14-3-3σ', '阻滞 G2/M', C.warn],
    ['PUMA·Bax', '损伤不可修复 → 凋亡', C.bad],
  ]
  outs.forEach((o, i) => {
    const x = 726 + i * 158
    b.arrow(810, 436, x + 60, 462, { stroke: C.mute, sw: 1.6, marker: 'mute' })
    b.tag(x + 60, 478, o[0], { fill: i === 0 ? C.enzL : i === 1 ? C.okL : i === 2 ? C.warnL : C.badL, stroke: o[2], size: 9, weight: 700, tfill: o[2], pad: 4 })
    b.wtext(x, 500, o[1], { size: 8.5, fill: C.sub, maxW: 130, lh: 11.5 })
  })
  b.tag(900, 546, '约 50% 人类肿瘤 p53 突变', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })
  b.wtext(1060, 538, 'Li-Fraumeni 综合征（胚系 p53 突变）多发早年肿瘤；MDM2 扩增与 HPV E6（降解 p53，宫颈癌）为旁路失活机制；MDM2 抑制剂与 p53 重激活是治疗热点。', { size: 9, fill: C.mute, maxW: 300, lh: 12.5 })

  // ============ 三、纺锤体组装检验点（SAC）与后期启动 ============
  b.panel(30, 576, 1340, 404, { title: '三、纺锤体组装检验点（SAC）与后期启动：双向定向的放行条件' })
  // 左：未附着 vs 双向定向
  b.text(64, 618, 'SAC 感受器：未附着 / 缺乏张力的动粒', { size: 11.5, weight: 700, fill: C.ink })
  // 未附着动粒
  b.line(150, 636, 150, 690, { stroke: C.dna, sw: 8 })
  b.rect(130, 692, 40, 18, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(150, 706, '', { size: 1 })
  b.ctext(150, 728, '动粒（未附着）', { size: 9, fill: C.bad })
  b.tag(150, 752, 'Mad2 构象激活＋BubR1-Bub3', { fill: C.badL, stroke: C.bad, size: 8.5, tfill: C.bad, pad: 4 })
  b.wtext(80, 782, '组成 MCC（有丝分裂检查点复合体）', { size: 9, fill: C.sub })
  // 双向定向
  b.line(390, 640, 360, 692, { stroke: C.acc, sw: 6 })
  b.line(390, 640, 420, 692, { stroke: C.acc, sw: 6 })
  b.rect(372, 692, 36, 18, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(390, 728, '双向定向（张力）', { size: 9, fill: C.ok })
  b.tag(390, 752, 'SAC 信号解除', { fill: C.okL, stroke: C.ok, size: 9, weight: 700, tfill: C.ok, pad: 4 })
  b.arrow(430, 752, 470, 752, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  // 中：APC/C 级联
  b.rect(480, 640, 120, 46, { fill: C.enzL, stroke: C.enz, sw: 2.2, rx: 8 })
  b.ctext(540, 660, 'APC/C', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(540, 678, '＋Cdc20 放行', { size: 9, fill: C.enzD })
  b.arrow(540, 686, 540, 712, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.tag(540, 738, '泛素化降解 securin', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 5 })
  b.arrow(540, 756, 540, 782, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.tag(540, 808, '释放分离酶 separase', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.arrow(540, 826, 540, 848, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.tag(540, 874, '切割 cohesin 的 Scc1', { fill: C.dnaL, stroke: C.dna, size: 9.5, weight: 700, tfill: C.dnaD, pad: 5 })
  b.arrow(540, 892, 540, 912, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.tag(540, 938, '姐妹染色单体分离（后期启动）', { fill: C.okL, stroke: C.ok, size: 10, weight: 700, tfill: C.ok, pad: 5 })
  // MCC 抑制箭头
  b.arrow(300, 666, 470, 666, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(385, 650, 'MCC 抑制 Cdc20', { size: 9, weight: 700, fill: C.bad })
  // 右：cyclin B 降解与药物
  b.text(700, 618, '退出与临床', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(700, 640, '同时 APC/C 降解 cyclin B → 细胞退出 M 期；SAC 失败导致染色体错误分配与非整倍体。', { size: 9.5, fill: C.sub, maxW: 300, lh: 13.5 })
  b.tag(790, 700, '长春碱 / 秋水仙类', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 5 })
  b.tag(960, 700, '紫杉醇', { fill: C.badL, stroke: C.bad, size: 9.5, tfill: C.bad, pad: 5 })
  b.wtext(700, 730, '激活 SAC 将细胞阻滞于 M 期并走向凋亡——抗癌机制的重要一环。', { size: 9.5, fill: C.sub, maxW: 340, lh: 13.5 })
  b.wtext(700, 782, '中期向后期的转换由 APC/C 驱动，但必须获得 SAC 的放行——"全或无"的质量控制。', { size: 9.5, fill: C.mute, maxW: 340, lh: 13.5 })
  b.wtext(1100, 640, '经典实验：Nicklas 显微操作证明张力稳定正确连接。', { size: 9.5, fill: C.mute, maxW: 240, lh: 13 })
  b.tag(1200, 760, '所有染色体实现双向定向', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 5 })
  b.ctext(1200, 800, '＝SAC 放行条件', { size: 9.5, weight: 700, fill: C.ok })
}

export default scene({
  title: '细胞周期检验点与 p53：R 点、DNA 损伤应答与纺锤体检查',
  subtitle: 'R 点＝Rb-E2F 正反馈承诺（Pardee 1974）；损伤经 ATM/ATR-Chk 降解 Cdc25，p53 四路应答（50% 肿瘤突变）；SAC 抑制 APC/C，放行后启动后期',
  draw,
})
