// mt ch13-s2 叶绿体被膜：Toc/Tic 蛋白海关 · TPT/MEX1 碳流昼夜两本账 · 质体分化排班 · 镜像对照
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、被膜结构：外膜宽、内膜严 =================
  b.panel(30, 132, 660, 455, { title: '一、被膜结构：外膜宽，内膜严' })
  b.text(46, 180, '细胞质', { size: 10, fill: C.mute })
  b.tag(150, 172, '溶质 ≤约 10 kDa 宽松过', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10, weight: 700 })
  // 外被膜
  b.bilayer(46, 196, 610, { h: 12, tint: C.dna })
  b.text(46, 232, '外被膜', { size: 9.5, fill: C.mute })
  // OEP 孔道
  const oeps: [number, string][] = [[92, 'OEP24'], [146, 'OEP21'], [200, 'OEP16']]
  for (const [x, name] of oeps) {
    b.rect(x - 18, 188, 36, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
    b.ctext(x, 202, name, { size: 7.8, weight: 700, fill: C.dnaD })
  }
  b.wtext(76, 250, 'OEP24 广谱放行；OEP21 偏磷酸化中间物（ATP 逆压可闭）；OEP16 专司氨基酸——宽松也做出选择性', { size: 8.2, fill: C.sub, maxW: 300, lh: 15 })
  // Toc 复合体
  b.rect(268, 186, 40, 30, { fill: C.proL, stroke: C.pro, sw: 2.2 })
  b.ctext(288, 204, 'Toc75', { size: 8.4, weight: 700, fill: C.proD })
  b.rect(234, 190, 26, 22, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(247, 204, 'Toc34', { size: 6.8, weight: 700, fill: C.enzD })
  b.tag(247, 172, 'GTP 验货', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 7.5, weight: 700 })
  b.arrow(344, 176, 344, 216, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.wtext(350, 184, '前体蛋白（转位肽富 Ser/Thr）', { size: 7.8, fill: C.sub, maxW: 150, lh: 12 })
  b.text(390, 248, 'Toc75 与 VDAC 同为 β 桶——两次内共生各留门户', { size: 8, weight: 600, fill: C.proD })
  // 膜间隙
  b.text(46, 252, '膜间隙', { size: 8.5, fill: C.mute })
  // 内被膜
  b.bilayer(46, 262, 610, { h: 12, tint: C.rna })
  b.text(46, 300, '内被膜（严格选择海关）', { size: 9.5, fill: C.mute })
  // Tic + 内膜转运体
  b.rect(268, 254, 40, 28, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(288, 272, 'Tic', { size: 8.4, weight: 700, fill: C.proD })
  b.arrow(288, 282, 288, 306, { stroke: C.pro, sw: 1.5 })
  b.text(294, 302, 'Hsp93 接力', { size: 7.4, fill: C.proD })
  const ies: [number, string, string, string][] = [
    [400, 'TPT', 'TP⇄Pi 1:1', C.rna],
    [470, 'MEX1', '麦芽糖（夜）', C.warn],
    [542, 'DiT1/2', '二羧酸·氨基酸', C.acc],
    [612, 'KEA1/2', 'K⁺/H⁺', C.dna],
  ]
  for (const [x, name, note, col] of ies) {
    b.rect(x - 26, 254, 52, 28, { fill: C.panelB, stroke: col, sw: 2 })
    b.ctext(x, 268, name, { size: 8.2, weight: 700, fill: col })
    b.ctext(x, 300, note, { size: 7.2, fill: C.sub })
  }
  // 基质
  b.text(46, 336, '基质（pH 约 7.5–8.0）', { size: 10, fill: C.mute })
  b.tag(250, 330, '卡尔文循环', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8.5, weight: 700 })
  b.tag(330, 330, '淀粉粒', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8.5, weight: 700 })
  b.wtext(46, 368, '被膜兼为车间：类囊体半乳糖脂 MGDG/DGDG 与硫脂、质体醌流水线设在内被膜——砖瓦厂贴着城墙', { size: 8.6, fill: C.sub, maxW: 612, lh: 16 })
  b.wtext(46, 404, '分流靠化学口音：叶绿体转位肽富 Ser/Thr、线粒体导肽富 Arg——两套受体各认各的货，送错门的原路退回', { size: 8.6, fill: C.sub, maxW: 612, lh: 16 })
  b.wtext(46, 440, '被膜两侧永远横亘一条基因—蛋白输入线：质体只留百余个基因在内翻译，Toc/Tic 关一天，叶绿体停摆一天', { size: 8.6, weight: 600, fill: C.accD, maxW: 612, lh: 16 })
  b.wtext(46, 476, 'FtsZ 分裂环（细菌遗产）与基因上缴：质体仍以分裂增殖，海关吞吐量本身是植物生命节奏的一部分', { size: 8.6, fill: C.sub, maxW: 612, lh: 16 })

  // ================= 二、碳流昼夜两本账：TPT 与 MEX1 =================
  b.panel(710, 132, 660, 455, { title: '二、碳流的昼账与夜账：TPT 与 MEX1' })
  // 白天
  b.text(726, 186, '白天 · TPT 活期账', { size: 11, weight: 700, fill: C.rnaD })
  b.rect(726, 200, 190, 66, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(821, 222, '卡尔文循环', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(821, 240, '产出三糖磷酸 TP', { size: 8, fill: C.sub })
  b.rect(900, 200, 150, 66, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(975, 222, '胞质', { size: 9.5, weight: 700, fill: C.rnaD })
  b.ctext(975, 240, '合成蔗糖→筛分子', { size: 8, fill: C.sub })
  b.bilayer(880, 212, 20, { h: 42, tint: C.rna })
  b.arrow(916, 222, 898, 222, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.tag(908, 200, 'TP', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 8, weight: 700 })
  b.arrow(882, 244, 900, 244, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.tag(892, 268, 'Pi', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 8, weight: 700 })
  b.ctext(890, 186, 'TPT 严格 1:1', { size: 8, weight: 700, fill: C.rnaD })
  b.wtext(1070, 206, '与 ANT「ATP 换 ADP」同一套语法：出口产能物、带回原料；磷酸基团随货带走，Pi 回程补账', { size: 8.2, fill: C.sub, maxW: 286, lh: 15 })
  b.wtext(1070, 250, 'Pi 限制光合：胞质 Pi 不足（磷酸饥饿或蔗糖合成受阻）→ TP 出不去、Pi 回不来 → 循环物锁死为淀粉 → 光合回落——出口不通，工厂停工', { size: 8.2, weight: 600, fill: C.badD, maxW: 286, lh: 15 })
  // 夜里
  b.text(726, 320, '夜里 · MEX1 夜班账', { size: 11, weight: 700, fill: C.warnD })
  b.rect(726, 334, 190, 66, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 8 })
  b.ctext(821, 356, '淀粉降解', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(821, 374, '产物麦芽糖', { size: 8, fill: C.sub })
  b.rect(900, 334, 150, 66, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(975, 356, '胞质', { size: 9.5, weight: 700, fill: C.rnaD })
  b.ctext(975, 374, '蔗糖合成维持夜呼吸', { size: 8, fill: C.sub })
  b.bilayer(880, 346, 20, { h: 42, tint: C.warn })
  b.arrow(916, 366, 898, 366, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(908, 396, 'MEX1', { size: 8, weight: 700, fill: C.warnD })
  b.wtext(1070, 340, 'mex1 突变体：麦芽糖出不了门、在基质堆积中毒——一道闸门的换班表写错，整本碳账就崩', { size: 8.2, fill: C.sub, maxW: 286, lh: 15 })
  b.wtext(1070, 382, '同被膜上另有 DiT1/DiT2 摆渡光呼吸氮循环、KEA1/2 稳钾稳 pH、CLT1–3 补谷胱甘肽弹药库', { size: 8.2, fill: C.sub, maxW: 286, lh: 15 })
  b.wtext(726, 424, '光呼吸旺季，叶绿体—过氧化物酶体—线粒体三方被这几道闸门串成流水线：乙醇酸出、甘油酸回，氮碳骨架循环不息', { size: 8.6, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(726, 460, '质体排班：叶绿体（TPT 高表达）→ 淀粉体（灌浆调度）→ 白色体（脂肪酸、氨基酸）→ 有色体（类胡萝卜素）——同一套被膜基因，四种班次；动物无质体，整层界面植物独占', { size: 8.8, weight: 600, fill: C.accD, maxW: 620, lh: 17 })

  // ================= 三、被膜镜像对照表 =================
  b.panel(30, 592, 1340, 393, { title: '三、两套内共生界面的镜像对照：线粒体被膜 vs 叶绿体被膜' })
  b.table(46, 630, 1308, {
    headers: ['对照项', '线粒体被膜', '叶绿体被膜'],
    rows: [
      ['内共生来源', 'α-变形菌（先，约 18–20 亿年前）', '蓝藻（后，约 15 亿年前）'],
      ['蛋白输入受体', 'Tom20/Tom22（识酸性导肽·富 Arg）', 'Toc34（GTP 酶验货·富 Ser/Thr）'],
      ['跨膜通道', 'Tom40（β 桶）', 'Toc75（β 桶）——同源部件各守各门'],
      ['基质侧马达', 'mtHsp70 棘轮', 'Hsp93/Tic110 接力'],
      ['能量接口', 'ANT：ATP⁴⁻ 换 ADP³⁻（净移出一负电荷）', 'TPT：TP 换 Pi（1:1 磷账平衡）'],
      ['外膜孔道', 'VDAC（约 5 kDa 截留·电压门控）', 'OEP 家族（OEP16/21/24/37 各有口味）'],
      ['被膜车间', '磷脂心磷脂装配（膜的维修部）', 'MGDG/DGDG＋硫脂＋质体醌（类囊体砖瓦厂）'],
      ['两界分布', '动植物共有（配件差异：AOX）', '植物独占（动物无质体）'],
    ],
    fontSize: 8.6,
    rowH: 22,
    colW: [170, 560, 578],
  })
  b.wtext(46, 858, '四句诀的细胞器排演（其一）：同机制——两次内共生各自留下「受体验货＋β 桶通道＋基质马达」与「出口产能换回原料」的反向交换语法；不同命运——线粒体两界共有、叶绿体整层植物独占', { size: 9.5, weight: 600, fill: C.accD, maxW: 1308, lh: 20 })
  b.wtext(46, 890, '衔接：碳流出了被膜，能量还要在类囊体上「充电」——下一节看光驱动的 H⁺ 泵与 K⁺/Cl⁻ 电中性回路如何把质子动力势调成一块强劲又可卸载的电池', { size: 9, fill: C.sub, maxW: 1308, lh: 20 })
}

export default scene({
  title: '叶绿体被膜：Toc/Tic 海关与 TPT/MEX1 碳流昼夜账',
  subtitle:
    '约 15 亿年前蓝藻内共生留下的双层被膜：外膜 OEP 孔道宽松、Toc75（与 VDAC 同源的 β 桶）守蛋白海关、Toc34 以 GTP 验货；内膜 TPT 以三糖磷酸:Pi 严格 1:1 反向交换出口产能（白天活期账）、夜里 MEX1 换班出口麦芽糖（夜班账），Pi 限制光合与 mex1 突变体是两笔经典账；被膜兼为类囊体脂质车间，质体家族同一套被膜四种排班；两套内共生界面处处镜像、叶绿体整层植物独占',
  draw,
})
