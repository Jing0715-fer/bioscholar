// im ch10-s4 体液免疫应答的规律：初次/再次曲线 · 持久性 · 母传抗体（39-g 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、初次与再次应答 ============
  b.panel(30, 132, 1340, 304, { title: '一、初次与再次应答：潜伏期、平台、类别与亲和力的全面跃升' })

  const ax = 160, ay = 400, aw = 540, ah = 246
  b.line(ax + 0.05 * aw, ay - ah, ax + 0.05 * aw, ay, { stroke: C.bad, sw: 1.6, dash: '5 4', opacity: 0.7 })
  b.line(ax + 0.55 * aw, ay - ah, ax + 0.55 * aw, ay, { stroke: C.bad, sw: 1.6, dash: '5 4', opacity: 0.7 })
  b.axis(ax, ay, aw, ah, {
    xlabel: '时间（初次免疫 → 再次暴露同一抗原）',
    ylabel: '抗体滴度（对数坐标）',
    xticks: [[0.05, '初免'], [0.55, '再次暴露'], [0.95, '时间 →']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  b.curve(ax, ay, aw, ah, [
    [0.05, 0.02], [0.16, 0.03], [0.28, 0.12], [0.38, 0.30], [0.48, 0.38], [0.55, 0.33],
  ], { stroke: C.rna, sw: 2.2, dash: '7 5' })
  b.curve(ax, ay, aw, ah, [
    [0.13, 0.02], [0.25, 0.04], [0.36, 0.14], [0.46, 0.28], [0.55, 0.33],
  ], { stroke: C.acc, sw: 2.2 })
  b.curve(ax, ay, aw, ah, [
    [0.55, 0.33], [0.61, 0.60], [0.68, 0.86], [0.78, 0.95], [0.9, 0.97], [1, 0.97],
  ], { stroke: C.dna, sw: 3.4 })
  b.legend(ax + aw - 330, ay - ah + 26, [['再次 IgG', C.dna], ['初次 IgG', C.acc], ['初次 IgM', C.rna]], { size: 11, gap: 16 })
  b.ctext(ax + 0.26 * aw, ay - 0.46 * ah, '潜伏期约 5–10 天', { size: 10, weight: 700, fill: C.rnaD })
  b.ctext(ax + 0.56 * aw, ay - 0.14 * ah - 8, '潜伏期约 1–3 天', { size: 10, weight: 700, fill: C.dnaD })
  b.text(ax + 0.63 * aw, ay - 0.66 * ah, '平台高数倍至数十倍', { size: 10.5, weight: 700, fill: C.dnaD })
  b.text(ax + 0.63 * aw, ay - 0.66 * ah + 15, '亲和力显著增高且均一', { size: 10.5, fill: C.dnaD })

  b.table(750, 186, 590, {
    headers: ['比较项', '初次应答', '再次应答'],
    colW: [100, 230, 260],
    rowH: 29,
    fontSize: 10.5,
    rows: [
      ['潜伏期', '约 5–10 天或更长', '约 1–3 天'],
      ['抗体平台', '低，爬升缓慢', '高数倍至数十倍，升势陡峭'],
      ['抗体类别', '早期 IgM 为主，后见 IgG', '直接以 IgG 为主，可再转类'],
      ['平均亲和力', '低且不均一', '显著增高且均一'],
      ['维持时间', '较短，抗原清除后回落', '持久（长寿浆细胞供养）'],
      ['细胞学基础', '初始 B 细胞与初始 T 应答', '记忆 B 细胞与记忆 T 应答'],
    ],
  })

  // ============ 二、抗体的持久性 ============
  b.panel(30, 452, 1340, 252, { title: '二、抗体的持久性：FcRn 回收延寿 + 骨髓长寿浆细胞的细水长流' })

  b.rect(60, 502, 620, 182, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(78, 526, 'FcRn 回收循环：IgG 的长寿保险', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(78, 550, '组织细胞胞饮摄入的 IgG 在酸性内体中被 FcRn 拾起，护送至细胞表面、于中性 pH 释放回血——免于溶酶体降解的往返。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.rect(90, 580, 120, 46, { fill: C.bg, stroke: C.acc, sw: 1.4, rx: 7 })
  b.ctext(150, 606, '胞饮摄入', { size: 10, weight: 700, fill: C.accD })
  b.arrow(214, 603, 254, 603, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(258, 580, 130, 46, { fill: C.bg, stroke: C.acc, sw: 1.4, rx: 7 })
  b.ctext(323, 600, '酸性内体', { size: 10, weight: 700, fill: C.accD })
  b.ctext(323, 616, 'FcRn 结合', { size: 9, fill: C.mute })
  b.arrow(392, 603, 432, 603, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.rect(436, 580, 130, 46, { fill: C.bg, stroke: C.acc, sw: 1.4, rx: 7 })
  b.ctext(501, 600, '中性 pH 释放', { size: 10, weight: 700, fill: C.accD })
  b.ctext(501, 616, 'IgG 回血', { size: 9, fill: C.mute })
  b.wtext(78, 654, '治疗性单抗每数周给药一次的药理节律即由此而来。', { size: 10.5, weight: 600, fill: C.accD, maxW: 580, lh: 14 })

  b.rect(710, 502, 630, 182, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(728, 526, '半衰期账本与长寿浆细胞', { size: 12.5, weight: 700, fill: C.dnaD })
  const hl: Array<[string, string]> = [
    ['IgG', '约 23 天（IgG1/2/4 约三周，IgG3 约一周）'],
    ['IgM', '约 5 天'],
    ['IgA', '约数日'],
    ['IgE', '约 2 天'],
  ]
  hl.forEach(([t, s], i) => {
    b.rect(728 + i * 145, 544, 132, 40, { fill: C.bg, stroke: C.dna, sw: 1.3, rx: 7 })
    b.ctext(794 + i * 145, 560, t, { size: 10.5, weight: 700, fill: C.dnaD })
    b.ctext(794 + i * 145, 576, s.split('（')[0], { size: 9, fill: C.sub })
  })
  b.wtext(728, 610, '血清抗体的长期维持另有账本：骨髓生存龛中的长寿浆细胞持续供给——不依赖抗原存在，由 CXCL12⁺ 基质细胞与 APRIL（经 BCMA）、IL-6 等信号供养，可存活数月至数十年乃至终宿主一生。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、母传抗体与规律的运用 ============
  b.panel(30, 718, 1340, 256, { title: '三、母传抗体：「母传让位、自体接棒」的儿科免疫经典图景' })

  const ax2 = 150, ay2 = 940, aw2 = 500, ah2 = 190
  b.axis(ax2, ay2, aw2, ah2, {
    xlabel: '月龄（出生 → 自身免疫成熟）',
    ylabel: '血清 Ig 水平',
    xticks: [[0.03, '出生'], [0.32, '被动-主动交接低谷'], [0.72, '约 9 月龄（麻疹疫苗）'], [0.95, '→']],
    yticks: [[0.08, '低'], [0.92, '高']],
  })
  b.curve(ax2, ay2, aw2, ah2, [
    [0.03, 0.85], [0.16, 0.55], [0.32, 0.25], [0.48, 0.12], [0.64, 0.06], [0.82, 0.03], [1, 0.02],
  ], { stroke: C.rna, sw: 2.6, smooth: true })
  b.curve(ax2, ay2, aw2, ah2, [
    [0.03, 0.02], [0.2, 0.06], [0.36, 0.16], [0.52, 0.34], [0.68, 0.55], [0.85, 0.72], [1, 0.82],
  ], { stroke: C.dna, sw: 3, smooth: true })
  b.legend(ax2 + aw2 - 320, ay2 - ah2 + 26, [['自身 IgG（主动合成）', C.dna], ['母传 IgG（被动获得）', C.rna]], { size: 10.5, gap: 14 })
  b.ctext(ax2 + 0.7 * aw2, ay2 - 0.18 * ah2, '低谷窗：母传保护与自体免疫交接的脆弱期', { size: 10, weight: 700, fill: C.warn })
  b.ctext(1035, 840, 'IgM、IgA、IgE 均不能通过胎盘——脐血 IgM 升高提示宫内感染（TORCH 等）', { size: 10, fill: C.mute })

  b.rect(700, 768, 670, 90, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(718, 792, '被动免疫的两条馈赠', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(718, 814, '胎盘 FcRn 转运 IgG：孕晚期最活跃，足月新生儿血清 IgG 与母体相当甚至略高；母乳 sIgA 覆盖婴儿肠道黏膜、就地拦截病原。', { size: 10.5, fill: C.sub, maxW: 630, lh: 15 })

  b.rect(700, 872, 670, 92, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(718, 896, '规律的运用', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(718, 918, '基础-加强免疫程序（再次应答更快更高）· 多糖结合疫苗（把 TI-2 改造为 TD 应答）· 双份血清四倍升幅的回顾性诊断；母传 IgG 可干扰婴儿应答——麻疹疫苗因此推迟至约 9 月龄前后接种。', { size: 10.5, fill: C.sub, maxW: 630, lh: 15 })
}

export default scene({
  title: '体液免疫应答的规律：初次与再次应答、抗体持久性与母传抗体',
  subtitle: '初次应答潜伏期约 5–10 天、IgM 起步、平台低而亲和力低；再次应答约 1–3 天、IgG 为主、平台高数倍且维持更久；IgG 半衰期约 23 天，经 FcRn 酸性内体拾取-中性释放的回收循环延寿，长期维持赖骨髓长寿浆细胞不依赖抗原持续供给；母体 IgG 经胎盘 FcRn 转运、母乳 sIgA 覆盖黏膜构成被动免疫，脐血 IgM 升高提示宫内感染，母传 IgG 干扰应答故麻疹疫苗约 9 月龄接种',
  draw,
})
