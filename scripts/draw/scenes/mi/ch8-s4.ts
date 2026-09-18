// mi ch8-s4 菌种选育、衰退与保藏（39-f 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、育种四路线 ============
  b.panel(30, 132, 1340, 280, { title: '一、菌种选育的四条路线：随机性递减、定向性递增' })

  const routes: Array<[number, string, string, string, string]> = [
    [50, '自然选育', C.mute, C.panelB, '从生产与自然界筛选自发突变——效率低，但青霉素早期产量提升即始于此'],
    [390, '诱变育种', C.warn, C.warnL, 'NTG 与 UV 诱变 + 筛选；产量提升靠多轮诱变-筛选累积——工业主力'],
    [730, '原生质体融合', C.dna, C.dnaL, '酶解壁 + PEG-Ca²⁺ 促融 + 高渗再生——打破种间杂交屏障实现远缘重组'],
    [1070, '基因工程', C.acc, C.accL, '体外定向装配并导回宿主——从随机到精准'],
  ]
  routes.forEach(([x, t, c, cl, s]) => {
    b.rect(x, 162, 320, 168, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.7, rx: 10 })
    b.tag(x + 160, 192, t, { fill: cl, stroke: c, size: 13.5, weight: 700, tfill: C.ink, pad: 10 })
    b.wtext(x + 16, 226, s, { size: 11, fill: C.sub, maxW: 288, lh: 16 })
  })
  b.arrow(60, 352, 1330, 352, { stroke: C.sub, sw: 1.8, marker: 'mute' })
  b.ctext(700, 342, '技术演进方向', { size: 10.5, fill: C.mute })

  // ============ 二、诱变育种 ============
  b.panel(30, 424, 660, 276, { title: '二、诱变育种要点：中等致死率区正突变比例常更高；营养缺陷型检出' })

  // 左：剂量曲线
  const ax = 60, ay = 640, aw = 280, ah = 150
  b.axis(ax, ay, aw, ah, {
    xlabel: '诱变剂量（UV 照射时间）',
    xticks: [[0.5, '中等剂量'], [0.9, '重剂量']],
    yticks: [[0.05, '低'], [0.5, '中'], [0.95, '高']],
  })
  // 轴 ylabel 手绘于绘图区右上空白（避开左缘与 y 轴刻度）
  b.text(270, 515, '相对比例', { size: 13, weight: 600, fill: C.sub })
  // 存活率（降）
  b.curve(ax, ay, aw, ah, [
    [0, 1], [0.2, 0.75], [0.4, 0.5], [0.55, 0.3], [0.7, 0.2], [0.85, 0.12], [1, 0.05],
  ], { stroke: C.dna, sw: 2.6 })
  // 正突变比例（峰）
  b.curve(ax, ay, aw, ah, [
    [0, 0.05], [0.2, 0.2], [0.4, 0.45], [0.62, 0.72], [0.8, 0.5], [1, 0.25],
  ], { stroke: C.warn, sw: 2.6 })
  b.legend(140, 616, [['存活率', C.dna], ['正突变比例', C.warn]], { size: 10, gap: 10 })
  b.wtext(50, 470, '中等致死率（约 70%–80%）区间正突变（增产）比例常更高；重剂量染色体损伤大、负突变与死亡占优。', { size: 10, fill: C.mute, maxW: 320, lh: 14 })

  // 右：营养缺陷型检出
  b.text(380, 464, '营养缺陷型的检出与浓缩', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(380, 470, 290, 172, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  const steps: Array<[string, string]> = [
    ['CM / MM 对照', '完全培养基全生长、基本培养基仅原养型生长——初步定位缺陷'],
    ['影印法鉴定', '影印平板比对，精确挑取缺陷菌落'],
    ['青霉素浓缩法', 'MM + 青霉素：野生型生长中被杀死，缺陷型不生长反而存活——浓度可提高数十倍'],
  ]
  steps.forEach(([t, s], i) => {
    b.circle(396, 492 + i * 52 - 4, 3.5, { fill: C.enz })
    b.text(408, 492 + i * 52, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(408, 508 + i * 52, s, { size: 10, fill: C.sub, maxW: 250, lh: 13 })
  })

  // ============ 三、基因工程育种 ============
  b.panel(710, 424, 660, 276, { title: '三、基因工程育种：载体演进与里程碑产品' })

  // pBR322 质粒
  b.plasmid(880, 540, 56, { stroke: C.acc, genes: ['ampR', 'tetR'] })
  b.text(946, 545, 'pBR322（4361 bp）', { size: 14, weight: 700, fill: C.acc })
  b.wtext(730, 636, '第一代通用载体 pBR322：由 pSC101 与 ColE1 片段拼装，带 ampR 与 tetR 双抗性标记与十余个单一切点，靠插入失活筛选重组子；此后演进至 pUC 系列与 Ti 双元载体。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })

  // 里程碑时间线
  b.timelineH(1090, 530, 240, [
    { at: 0.2, label: '1982', sub: '重组人胰岛素', above: true, c: C.dna },
    { at: 0.8, label: '1986', sub: '重组乙肝疫苗', above: false, c: C.rna },
  ], { title: '里程碑产品' })
  b.text(1090, 600, '胰岛素 A、B 链基因分别', { size: 10, fill: C.mute })
  b.text(1090, 614, '在大肠杆菌中表达后重折叠组装——', { size: 10, fill: C.mute })
  b.text(1090, 628, '首个获准临床的重组蛋白药物。', { size: 10, fill: C.mute })
  b.wtext(1090, 652, '酵母表达 HBsAg 自装配为亚单位颗粒——首个重组疫苗。', { size: 10, fill: C.mute, maxW: 260, lh: 14 })

  // ============ 四、衰退复壮与保藏 ============
  b.panel(30, 712, 1340, 268, { title: '四、菌种衰退与复壮；四大保藏方法对照' })

  b.rect(50, 742, 620, 88, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.4, rx: 9 })
  b.text(70, 766, '衰退与复壮', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(70, 788, '衰退源于负突变累积与群体漂移（产量滑坡、性状不齐）；复壮靠单菌落分离纯化与宿主轮回交替。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.rect(50, 842, 620, 56, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.4, rx: 9 })
  b.text(70, 864, '保藏总原理', { size: 12.5, weight: 700, fill: C.ok })
  b.text(70 + 78, 864, '干燥 · 低温 · 缺氧——使代谢停滞，突变与退化最小化。', { size: 10.5, fill: C.sub })

  b.table(690, 742, 650, {
    headers: ['方法', '手段要点', '温度', '评注'],
    colW: [140, 220, 120, 170],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['斜面冰箱保藏', '普通斜面加塞保存', '4 ℃', '数月（2–3 个月转接）；简便'],
      ['冷冻真空干燥', '悬液加保护剂冻干', '低温干燥', '存活期长——四法中最优之一'],
      ['液氮保藏', '甘油保护剂冻结', '超低温', '最优；设备要求高'],
      ['传代培养保藏', '定期转接', '室温/适温', '易退化，仅短期'],
    ],
  })
  b.ctext(1015, 946, '冻干与液氮为工业菌种库首选', { size: 11, weight: 700, fill: C.ink })
}

export default scene({
  title: '菌种选育、衰退与保藏：从自然选育到基因工程的四条路线',
  subtitle: '诱变育种中等致死率 70%–80% 正突变比例更高；营养缺陷型靠 CM/MM、影印与青霉素浓缩；PEG 30%–40% 促融；1982 胰岛素、1986 乙肝疫苗；保藏以冻干与液氮最优',
  draw,
})
