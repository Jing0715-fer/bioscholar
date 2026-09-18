// mi ch6-s4 次级代谢及其产物（39-f 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、合成期与生长曲线对照 ============
  b.panel(30, 132, 1340, 330, { title: '一、合成期对照：初级代谢伴随对数期，次级代谢主要在稳定期' })

  const ax = 70, ay = 420, aw = 570, ah = 195
  // 分期底色
  b.rect(ax + 0.18 * aw, ay - ah, 0.37 * aw, ah, { fill: C.dnaL, fillOp: 0.5 })
  b.rect(ax + 0.55 * aw, ay - ah, 0.30 * aw, ah, { fill: C.enzL, fillOp: 0.5 })
  b.axis(ax, ay, aw, ah, {
    xlabel: '培养时间',
    xticks: [[0.09, '延滞期'], [0.36, '对数期'], [0.70, '稳定期'], [0.94, '衰亡期']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  // 轴 ylabel 手绘于绘图区左上空白（避开 y 轴中部刻度与左缘）
  b.text(80, 240, '菌数（对数）', { size: 13, weight: 600, fill: C.sub })
  b.curve(ax, ay, aw, ah, [
    [0, 0.05], [0.08, 0.06], [0.16, 0.10], [0.28, 0.32], [0.40, 0.68],
    [0.50, 0.88], [0.62, 0.95], [0.78, 0.94], [0.92, 0.88], [1, 0.74],
  ], { stroke: C.ink, sw: 3 })
  b.tag(300, 212, '初级代谢（生长必需）', { fill: C.dnaL, stroke: C.dna, size: 11, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(475, 212, '次级代谢（非必需）', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 8 })
  b.wtext(80, 260, '次级代谢产物由初级代谢的中间物衍生——营养受限、生长进入稳定期后方才大量涌现。', { size: 10.5, fill: C.mute, maxW: 300, lh: 16 })

  // 右：对照表
  b.table(680, 190, 670, {
    headers: ['比较项目', '初级代谢', '次级代谢'],
    colW: [150, 250, 270],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['发生时期', '对数期（旺盛生长）', '主要在稳定期'],
      ['与生长关系', '生长必需', '非必需'],
      ['产物来源', '共享的中间代谢体系', '由初级代谢中间物衍生'],
      ['典型产物', '氨基酸、核苷酸、维生素', '抗生素、毒素、色素等'],
      ['启动条件', '营养充足即进行', '常因营养受限而启动'],
    ],
  })

  // ============ 二、六大类产物 ============
  b.panel(30, 475, 1340, 210, { title: '二、次级代谢产物的六大类' })
  const cats: Array<[number, number, string, string, string, string]> = [
    [50, 542, '抗生素', '青霉素、链霉素——抑制或杀灭其他微生物', C.dna, C.dnaL],
    [495, 542, '毒素', '肉毒毒素等——对宿主或他菌有毒害作用', C.bad, C.badL],
    [940, 542, '色素', '灵菌红素等——菌落呈色、工业染色', C.warn, C.warnL],
    [50, 632, '生物碱', '麦角碱等——含氮碱性有机活性物', C.pro, C.proL],
    [495, 632, '植物生长素', '赤霉素等——促进或调节植物生长发育', C.ok, C.okL],
    [940, 632, '信息素', '群体感应信号分子——调控种群行为', C.acc, C.accL],
  ]
  cats.forEach(([x, y, t, s, c, cl]) => {
    b.rect(x, y - 32, 430, 76, { fill: C.bg, stroke: c, sw: 1.6, rx: 9 })
    b.tag(x + 78, y + 6, t, { fill: cl, stroke: c, size: 13.5, weight: 700, tfill: C.ink, pad: 10 })
    b.wtext(x + 150, y - 12, s, { size: 11, fill: C.sub, maxW: 264, lh: 15 })
  })

  // ============ 三、科学史 + 调节与工业育种 ============
  b.panel(30, 702, 1340, 278, { title: '三、青霉素与链霉素的科学史；次级代谢的调节与工业产量提升' })

  b.timelineH(70, 868, 620, [
    { at: 0.05, label: '1928', sub: '弗莱明发现抑菌环', above: true, c: C.dna },
    { at: 0.30, label: '1940', sub: '弗洛里与钱恩提纯验证', above: false, c: C.acc },
    { at: 0.52, label: '1943', sub: '沙茨分离链霉素', above: true, c: C.rna },
    { at: 0.74, label: '1945', sub: '三人共获诺奖', above: false, c: C.ok },
    { at: 0.96, label: '1952', sub: '瓦克斯曼诺奖', above: true, c: C.pro },
  ], { title: '从偶然发现到系统筛选' })
  b.wtext(70, 956, '1943 年沙茨从灰色链霉菌培养物中分离到链霉素——第一个抗革兰氏阴性菌与结核分枝杆菌的抗生素，使结核不再是不治之症；二战期间深层通气发酵把青霉素放大投产。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // 右：调节与育种
  b.rect(730, 745, 620, 108, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(750, 772, '次级代谢合成的多重调节', { size: 13, weight: 700, fill: C.ink })
  b.wtext(750, 796, '① 终产物反馈抑制　② 碳氮代谢调节（碳代谢物阻遏：速效碳源抑制次级合成）　③ 磷酸盐调节（高磷抑制多种抗生素合成）', { size: 11, fill: C.sub, maxW: 580, lh: 16 })
  b.rect(730, 868, 620, 96, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.4, rx: 9 })
  b.text(750, 894, '工业产量提升策略', { size: 13, weight: 700, fill: C.accD })
  b.wtext(750, 918, '抗反馈突变株（解除终产物抑制）· 前体添加（绕过限速步骤）· 互补发酵（两菌株中间物互补）', { size: 11, fill: C.sub, maxW: 580, lh: 16 })
}

export default scene({
  title: '次级代谢及其产物：合成期与生长曲线的对照',
  subtitle: '初级代谢对数期必需；次级代谢主在稳定期，分抗生素等六类，受反馈、碳氮与磷酸盐调节；青霉素 1928 年发现、1945 年诺奖，链霉素 1952 年诺奖',
  draw,
})
