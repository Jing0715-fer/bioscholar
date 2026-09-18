// cb ch11-s3 细胞重编程：克隆羊 Dolly 与 iPS（39-d 批C 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、克隆羊 Dolly：体细胞核移植 ============
  b.panel(30, 132, 660, 430, { title: '一、克隆羊 Dolly（1996）：成体细胞核被卵质重编程' })
  // 流程：乳腺上皮细胞 → 取核 → 去核卵母细胞 → 电融合 → 胚胎移植 → Dolly
  const flow: Array<[string, string]> = [
    ['乳腺上皮细胞', '成年绵羊（终末分化）'],
    ['去核卵母细胞', '电融合注入细胞核'],
    ['胚胎移植', '代孕母羊'],
    ['Dolly（1996）', 'Roslin 研究所'],
  ]
  flow.forEach((f, i) => {
    const x = 70 + i * 160
    b.rect(x, 216, 136, 66, { fill: i === 3 ? C.okL : C.panel, stroke: i === 3 ? C.ok : C.faint, sw: 2, rx: 10 })
    b.ctext(x + 68, 240, f[0], { size: 10.5, weight: 700, fill: i === 3 ? C.ok : C.ink })
    b.ctext(x + 68, 260, f[1], { size: 8.5, fill: C.mute })
    if (i < 3) b.arrow(x + 138, 249, x + 156, 249, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  })
  b.wtext(70, 316, 'Wilmut 与 Campbell 等将成年绵羊乳腺上皮细胞的核移植入去核卵母细胞——首次证明哺乳动物终末分化细胞的细胞核可被卵母细胞质重编程恢复全能性。', { size: 10, fill: C.sub, maxW: 590, lh: 14 })
  b.tag(200, 372, '277 次核移植仅 1 例成功', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 6 })
  b.wtext(70, 408, '卵母细胞质中的因子（如今知道包括 Oct4、Klf4 等）足以抹去体细胞的分化记忆；随后克隆牛、鼠、犬等相继成功。', { size: 10, fill: C.sub, maxW: 590, lh: 14 })
  b.wtext(70, 456, '但克隆动物普遍存在胎盘异常、巨大后代综合征（LOS）等表观缺陷；Dolly 端粒偏短、早逝（2003 年安乐死）——揭示重编程的不完全性与表观屏障。', { size: 9.5, fill: C.mute, maxW: 590, lh: 13.5 })

  // ============ 二、iPS：山中因子 OSKM ============
  b.panel(710, 132, 660, 430, { title: '二、iPS 诱导多能干细胞：OSKM 四因子（2006/2007）' })
  b.wtext(740, 186, 'Takahashi 与 Yamanaka 从 24 个候选因子中筛选出四个转录因子，将小鼠成纤维细胞直接重编程为 iPS；2007 年实现人 iPS。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })
  // OSKM 四因子卡
  const oskm: Array<[string, string]> = [
    ['Oct4', '八聚体结合 TF'],
    ['Sox2', '干性维持'],
    ['Klf4', '上皮基因激活'],
    ['c-Myc', '增殖驱动（致瘤性）'],
  ]
  oskm.forEach((o, i) => {
    const x = 770 + i * 140
    b.rect(x, 216, 120, 58, { fill: i === 3 ? C.badL : C.proL, stroke: i === 3 ? C.bad : C.pro, sw: 2, rx: 10 })
    b.ctext(x + 60, 238, o[0], { size: 12.5, weight: 700, fill: i === 3 ? C.bad : C.proD })
    b.ctext(x + 60, 258, o[1], { size: 8, fill: C.mute })
    b.arrow(x + 60, 278, x + 60, 302, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  })
  b.rect(800, 304, 440, 48, { fill: C.okL, stroke: C.ok, sw: 2.2, rx: 10 })
  b.ctext(1020, 324, '诱导多能干细胞（iPS）', { size: 12, weight: 700, fill: C.ok })
  b.ctext(1020, 342, '标志基因·畸胎瘤·嵌合体贡献等指标上类似 ESC', { size: 9, fill: C.ok })
  b.wtext(740, 388, '重编程是渐进、多阶段的过程（间充质-上皮转化 MET 为关键步骤），存在表观记忆与遗传 / 表观残留障碍；c-Myc 的致瘤性促使其被替换为 L-Myc、Lin28 或小分子组合。', { size: 9.5, fill: C.sub, maxW: 600, lh: 13.5 })
  b.tag(880, 448, 'Yamanaka 与 Gurdon 获 2012 年诺贝尔生理学或医学奖', { fill: C.rnaL, stroke: C.rna, size: 10, weight: 700, tfill: C.rnaD, pad: 6 })
  b.wtext(740, 492, '应用：患者特异性疾病模型（帕金森病神经元）、药物筛选（毒性预测）与自体细胞治疗（iPS-RPE 治黄斑变性、多巴胺能神经元治帕金森的临床探索）。', { size: 9.5, fill: C.mute, maxW: 600, lh: 13.5 })

  // ============ 三、转分化与直接重编程 ============
  b.panel(30, 576, 1340, 404, { title: '三、转分化（直接重编程）：绕过多能性中间态' })
  const trans: Array<[string, string, string, string]> = [
    ['B 淋巴细胞', '巨噬细胞', 'C/EBPα', ''],
    ['成纤维细胞', '心肌样细胞', 'Gata4·Mef2c·Tbx5', 'GMT 三因子'],
    ['成纤维细胞', '神经元', 'Brn2·Ascl1·Myt1l', 'BAM 三因子'],
    ['胃窦上皮', '胰岛素分泌细胞', '体内重编程', '（绕开体外培养）'],
  ]
  trans.forEach((t, i) => {
    const y = 636 + i * 72
    b.rect(80, y - 24, 170, 48, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
    b.ctext(165, y - 2, t[0], { size: 10.5, weight: 700, fill: C.accD })
    b.arrow(258, y, 360, y, { stroke: C.pro, sw: 2.4, marker: 'pro' })
    b.tag(310, y - 26, t[2], { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 5 })
    b.rect(364, y - 24, 170, 48, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
    b.ctext(449, y - 2, t[1], { size: 10.5, weight: 700, fill: C.ok })
    if (t[3]) b.ctext(560, y - 2, t[3], { size: 9, fill: C.mute })
  })
  b.wtext(700, 636, '直接重编程避免了 iPS 的致瘤风险，是再生医学的新策略：', { size: 10.5, weight: 700, fill: C.ink })
  b.wtext(700, 662, '· 心肌梗死后的补心肌（GMT 因子）；', { size: 10, fill: C.sub, maxW: 500, lh: 14 })
  b.wtext(700, 688, '· 神经退行性疾病的神经补充（BAM 因子）；', { size: 10, fill: C.sub, maxW: 500, lh: 14 })
  b.wtext(700, 714, '· 损伤修复的局部原位转分化。', { size: 10, fill: C.sub, maxW: 500, lh: 14 })
  b.tag(780, 780, 'Dolly：核移植的重编程', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.ok, pad: 6 })
  b.tag(1010, 780, 'iPS：因子 cocktails 的重编程', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
  b.tag(1300, 780, '转分化：跨谱系直接转换', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.wtext(700, 830, '三条路线殊途同归：均证明分化状态可被改写——细胞命运是表观遗传程序而非不可逆的终局。', { size: 10.5, fill: C.mute, maxW: 620, lh: 14 })
}

export default scene({
  title: '细胞重编程：克隆羊 Dolly、iPS 与转分化',
  subtitle: 'Dolly（1996）277 次核移植 1 例成功：成体核可重编程但有表观屏障；OSKM 四因子诱导 iPS（2006/2007，2012 诺奖）；C/EBPα、GMT、BAM 直接重编程',
  draw,
})
