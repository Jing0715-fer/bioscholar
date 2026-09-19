// vi ch1-s1 病毒的定义与生命边缘（39-j 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、吕夫 1957 定义与四条非细胞判据 ============
  b.panel(30, 132, 660, 420, { title: '一、吕夫 1957 年定义与四条非细胞判据' })
  b.rect(50, 176, 620, 70, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
  b.wtext(64, 199, '「病毒是只含一种核酸（DNA 或 RNA）、严格活细胞内寄生、以复制方式增殖并包裹于蛋白质衣壳之中的感染性实体。」——吕夫（André Lwoff），1957', { size: 11.5, fill: C.sub, maxW: 594, lh: 17 })
  const criteria: [string, string][] = [
    ['① 只含一种核酸', 'DNA 或 RNA 仅居其一'],
    ['② 无核糖体', '无独立翻译系统'],
    ['③ 无产能代谢', '不含产能代谢酶系'],
    ['④ 复制而非二分裂', '借宿主机器装配子代'],
  ]
  criteria.forEach(([t, s], i) => {
    const cx = 50 + (i % 2) * 316, cy = 266 + Math.floor(i / 2) * 86
    b.rect(cx, cy, 300, 72, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
    b.ctext(cx + 150, cy + 30, t, { size: 13.5, weight: 700, fill: C.dnaD })
    b.ctext(cx + 150, cy + 54, s, { size: 11.5, fill: C.sub })
  })
  b.wtext(50, 462, '四条判据环环相扣，把病毒与最小的细胞也划开界限：直径不足 0.3 μm、基因组仅约 580 kb 的支原体，也保有核糖体与产能代谢酶系。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、生命的边缘：结晶性与病毒细胞 ============
  b.panel(710, 132, 660, 420, { title: '二、生命的边缘：结晶的化学分子 vs 病毒细胞' })
  b.zone(730, 176, 280, 316, { label: '离体：化学大分子', fill: C.panelB })
  b.virion(870, 246, 26, { shape: 'helical', stroke: C.bad, fill: '#fee2e2' })
  b.ctext(870, 322, '毒粒（virion）', { size: 13, weight: 700, fill: C.ink })
  b.ctext(870, 342, '胞外完整感染颗粒', { size: 11, fill: C.sub })
  // 针状结晶（TMV）
  b.polygon([[800, 396], [940, 380], [946, 388], [806, 404]], { fill: '#f1f5f9', stroke: C.mute, sw: 1.4 })
  b.polygon([[812, 400], [952, 414], [950, 423], [810, 409]], { fill: '#f8fafc', stroke: C.mute, sw: 1.4 })
  b.polygon([[820, 404], [930, 442], [926, 451], [816, 413]], { fill: '#f1f5f9', stroke: C.mute, sw: 1.4 })
  b.wtext(748, 470, '1935 年斯坦利将 TMV 提纯为针状结晶，溶解后仍具感染性（1946 年诺贝尔化学奖）；1936 年鲍登与皮里证明颗粒约 95% 为蛋白质、5% 为核糖核酸。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
  b.zone(1050, 176, 300, 316, { label: '胞内：生命属性显现', fill: C.dnaL })
  b.cell(1200, 250, 108, 72, { stroke: C.dna })
  b.rnaW(1140, 250, 120, { stroke: C.rna })
  b.circle(1230, 232, 7, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  b.circle(1252, 262, 7, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  b.ctext(1200, 322, '病毒细胞（virocell）', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(1070, 346, '以感染细胞为病毒的生命形式：进入活细胞方表现复制、变异、演化与竞争。', { size: 11, fill: C.sub, maxW: 262, lh: 16 })
  b.arrow(1014, 230, 1042, 230, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(1028, 214, '感染', { size: 11.5, weight: 700, fill: C.bad })
  b.arrow(1042, 492, 1014, 492, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.ctext(1028, 514, '释放子代毒粒', { size: 11.5, weight: 700, fill: C.dnaD })

  // ============ 三、细胞生物与病毒：逐项对照 ============
  b.panel(30, 576, 660, 404, { title: '三、细胞生物与病毒：逐项对照' })
  b.table(50, 636, 620, {
    headers: ['比较项目', '细胞生物', '病毒'],
    colW: [170, 225, 225],
    rows: [
      ['核酸类型', 'DNA 与 RNA 并存', '仅一种（DNA 或 RNA）'],
      ['核糖体与翻译', '自有核糖体', '无，劫持宿主翻译'],
      ['产能代谢', '自有酶系', '无产能代谢'],
      ['增殖方式', '二分裂', '复制与装配'],
      ['对抗生素', '敏感（细胞壁、核糖体为靶）', '一律无效（缺乏靶结构）'],
    ],
    rowH: 44, fontSize: 12.5,
  })
  b.wtext(50, 940, '抗生素以细菌细胞壁、核糖体等为靶——病毒缺乏这些结构，故抗生素对病毒一律无效。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、三域之外：分类学的悬置 ============
  b.panel(710, 576, 660, 404, { title: '四、三域之外：分类学的悬置' })
  const doms: [string, number][] = [['细菌', 790], ['古菌', 950], ['真核生物', 1110]]
  doms.forEach(([nm, cx]) => {
    b.circle(cx, 668, 46, { fill: C.accL, stroke: C.acc, sw: 1.8 })
    b.ctext(cx, 673, nm, { size: 14, weight: 700, fill: C.accD })
  })
  b.braceH(744, 728, 412, { label: '共享 rRNA 分子标记——伍斯（Woese）1990 年三域系统', fill: C.acc, size: 11.5 })
  b.rect(1190, 630, 160, 82, { fill: '#ffffff', stroke: C.bad, sw: 1.8, rx: 8, dash: '7 5' })
  b.virion(1270, 660, 15, { shape: 'icosahedral', stroke: C.bad })
  b.wtext(1200, 700, '病毒：无 rRNA 等共享分子标记', { size: 10.5, weight: 700, fill: C.bad, maxW: 145, lh: 14 })
  b.line(1156, 668, 1182, 668, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(1169, 652, '排除', { size: 11, weight: 700, fill: C.bad })
  b.wtext(730, 762, '病毒被排除在三域系统之外：由 ICTV 另立分类体系命名；缺乏共同祖先的分子证据，可能多系起源。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  // 抗生素无效示意
  b.text(730, 820, '抗生素为何对病毒无效：', { size: 12.5, weight: 700, fill: C.ink })
  b.bacterium(790, 872, 84, 40, { shape: 'rod', stroke: C.accD, label: '细菌' })
  b.ctext(790, 844, '细胞壁 / 核糖体', { size: 10.5, fill: C.mute })
  b.virion(990, 868, 20, { shape: 'icosahedral', stroke: C.bad, label: '病毒' })
  b.tag(1150, 862, '抗生素命中靶点 ✓', { fill: C.okL, stroke: C.ok, size: 11.5, tfill: '#065f46', pad: 10 })
  b.tag(1150, 896, '无靶可击 → 无效 ✗', { fill: C.badL, stroke: C.bad, size: 11.5, tfill: C.bad, pad: 10 })
  b.arrow(880, 872, 930, 872, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(905, 856, '无对应结构', { size: 10.5, fill: C.mute })
  b.wtext(730, 952, '「病毒」指完整寄生周期实体，「毒粒」指胞外感染颗粒——概念的精确区分贯穿全书。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '病毒的定义与生命边缘：非细胞判据、结晶性与三域之外',
  subtitle: '吕夫 1957：只含一种核酸、严格胞内寄生、复制增殖、蛋白衣壳；TMV 可结晶（95% 蛋白+5% RNA）；无 rRNA 排除在三域之外；抗生素对病毒一律无效',
  draw,
})
