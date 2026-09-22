// sb ch4-s1 细胞裂解与样品粗提（Task SB-1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三种主流裂解方法对照 ============
  b.panel(30, 132, 680, 424, { title: '一、三种主流裂解方法对照' })
  b.tag(152, 180, '军规一 · 释放完全（上清 >90%）', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 8 })
  b.tag(372, 180, '军规二 · 条件温和（防变性聚集）', { fill: C.warnL, stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 8 })
  b.tag(592, 180, '军规三 · 参数可放大（1 L 至 20 L）', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 8 })
  b.table(50, 208, 640, {
    headers: ['方法', '作用机制', '典型条件', '优点', '主要局限'],
    colW: [92, 128, 186, 112, 122],
    rowH: 52,
    fontSize: 10,
    rows: [
      ['超声裂解', '空化气泡崩溃的机械剪切', '10 s 开/50 s 关脉冲，冰浴 10–20 min', '设备普及、释放率高', '局部过热与自由基氧化'],
      ['高压均质', '高压窄缝剪切与骤然泄压', '1,000–2,000 psi，2–3 遍', '温和通量高、易放大', '设备贵、清洗繁琐'],
      ['溶菌酶加渗透冲击', '酶解肽聚糖后低渗涨破', '0.2–1 mg/mL 加 1–5 mM EDTA', '最温和、免专用设备', '通量低、引入外源蛋白'],
    ],
  })
  b.wtext(50, 436, '收菌即计时：4 °C 下 4,000–6,000 g 离心 10–20 min 收集湿菌体，以预冷裂解液重悬，或分装冻存于 −80 °C——一次冻融即可释放约 30–50% 可溶性蛋白，常作为酶解路线的前置助力。', { maxW: 630, lh: 15, size: 10.5, fill: C.sub })
  b.wtext(50, 502, '组合路线：先以低浓度溶菌酶预孵 15–30 min 削弱细胞壁，再以超声或均质收官，所需机械强度约减半，对剪切敏感的蛋白尤其友好。', { maxW: 630, lh: 15, size: 10.5, fill: C.sub })

  // ============ 二、裂解液配方要素与全程低温 ============
  b.panel(730, 132, 640, 424, { title: '二、裂解液配方要素与全程低温' })
  b.tag(1040, 180, '通用模板：50 mM Tris-HCl pH 8.0 · 300 mM NaCl · 5% 甘油 · 0.5–1 mM TCEP', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 12 })
  b.table(746, 206, 610, {
    headers: ['组分', '浓度', '职责'],
    colW: [96, 118, 396],
    rowH: 34,
    fontSize: 10.5,
    rows: [
      ['Tris-HCl', '50 mM · pH 8.0', '维持缓冲能力；pKa 约 8.1 且随温度漂移，冷库读数须校正'],
      ['NaCl', '300 mM', '离子强度屏蔽静电驱动的聚集与核酸结合'],
      ['甘油', '5%', '降低溶剂极性、减缓聚集倾向'],
      ['TCEP', '0.5–1 mM', '膦类还原剂维持半胱氨酸还原态；不含巯基、对金属亲和介质友好'],
    ],
  })
  b.wtext(746, 410, '蛋白酶抑制剂临用前加：cocktail 常含 AEBSF（丝氨酸蛋白酶）、E-64（半胱氨酸）、bestatin（氨肽酶）与 EDTA（金属蛋白酶）；PMSF 0.1–1 mM 以不可逆酰化灭活丝氨酸蛋白酶，水相半衰期仅约 30–110 min 且随 pH 升高缩短，须经透析或脱盐去除。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
  b.tag(1042, 476, 'His_{6} 标签蛋白可预加 10–20 mM 咪唑，占据杂质弱结合位点', { fill: C.dnaL, stroke: C.dna, size: 10.5, tfill: C.dnaD, pad: 9 })
  b.text(746, 512, '全程 4 °C 低温链：', { size: 10.5, weight: 700, fill: C.ink })
  const steps = ['收菌', '重悬', '裂解', '离心', '上样']
  steps.forEach((s, i) => {
    const cx = 884 + i * 70
    b.tag(cx, 512, s, { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 6 })
    if (i < 4) b.arrow(cx + 26, 512, cx + 44, 512, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  })
  b.wtext(746, 540, '蛋白酶活性随温度下降而下降数倍，室温等待造成的降解事后无法补救。', { maxW: 600, lh: 13, size: 10, fill: C.mute })

  // ============ 三、核酸粘度与粗提物澄清 ============
  b.panel(30, 578, 680, 372, { title: '三、核酸粘度与粗提物澄清' })
  b.wtext(50, 620, '裂解完成后最直观的障碍是粘度：基因组 DNA 与 RNA 使裂解物呈胶状，直接上柱会把柱床压塌、流速归零。两条互补对策：', { maxW: 630, lh: 15, size: 10.5, fill: C.sub })
  b.rect(50, 660, 296, 112, { fill: C.bg, stroke: C.dna, sw: 1.6, rx: 8 })
  b.text(66, 684, '路线一 · DNase 酶解', { size: 11, weight: 700, fill: C.dnaD })
  b.wtext(66, 704, 'DNase I 约 5 μg/mL 加辅因子 5 mM MgCl_{2}，4 °C 作用 20–30 min，粘度即显著下降。', { maxW: 264, lh: 14, size: 10, fill: C.sub })
  b.rect(366, 660, 324, 112, { fill: C.bg, stroke: C.pro, sw: 1.6, rx: 8 })
  b.text(382, 684, '路线二 · PEI 絮凝', { size: 11, weight: 700, fill: C.proD })
  b.wtext(382, 704, '聚乙烯亚胺 pH 约 8 时为聚阳离子，0.1–0.5% 终浓度中和核酸磷酸骨架，连同部分杂蛋白与脂多糖一并沉降；碱性蛋白共沉淀风险上升时改硫酸鱼精蛋白，或把 NaCl 提到 500 mM 再絮凝。', { maxW: 292, lh: 12.5, size: 9.5, fill: C.sub })
  b.ctext(356, 720, '或', { size: 10, fill: C.mute })
  b.text(50, 796, '澄清标准流程（两级离心加两级过滤）：', { size: 10.5, weight: 700, fill: C.ink })
  b.tag(145, 822, '一级 10,000–15,000 g 弃大碎片', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.tag(330, 822, '二级 20,000–40,000 g · 30–60 min', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 7 })
  b.tag(470, 822, '0.45 μm 预滤', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 7 })
  b.tag(585, 822, '0.22 μm 精滤护柱', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.okD, pad: 7 })
  b.wtext(50, 856, '粗提液质量快判：A_{260}/A_{280} 比值大于 1 提示核酸残留；粘度以移液枪打液观察即可初判，必要时冰上补一轮 DNase。清亮可流动的粗提液就此交棒亲和捕获。', { maxW: 630, lh: 14, size: 10, fill: C.sub })
  b.wtext(50, 906, '故障速查：释放不全则延长超声或加均质遍数；降解条带呈涂抹状则加强低温与抑制剂组合；上清浑浊聚集则把 NaCl 提至 500 mM 并加 5–10% 甘油，并排查裂解浓度过高。', { maxW: 630, lh: 14, size: 10, fill: C.mute })

  // ============ 四、粗提工序时间表 ============
  b.panel(730, 578, 640, 372, { title: '四、粗提工序时间表（2 L 大肠杆菌例）' })
  b.ctext(1050, 624, '全程 4 °C，合计约 3 h（180 min）', { size: 11, weight: 700, fill: C.ink })
  b.rect(770, 640, 62, 34, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(801, 661, '20 min', { size: 9.5, weight: 700, fill: C.dnaD })
  b.rect(832, 640, 171, 34, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(917, 661, '45–60 min', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(1003, 640, 280, 34, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.ctext(1143, 661, '90 min', { size: 9.5, weight: 700, fill: C.warnD })
  b.rect(1283, 640, 47, 34, { fill: C.bg, stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.ctext(1306, 661, '机动', { size: 8.5, fill: C.mute })
  b.ctext(801, 694, '4 °C 收菌', { size: 10, fill: C.sub })
  b.ctext(917, 694, '重悬与裂解（含 DNase 消化）', { size: 10, fill: C.sub })
  b.ctext(1143, 694, '两级离心与过滤', { size: 10, fill: C.sub })
  b.tag(1040, 730, '每多一小时室温等待，降解风险上一档', { fill: C.warnL, stroke: C.warn, size: 10.5, tfill: C.warnD, pad: 9 })
  b.wtext(746, 758, '放大视角：超声与离心恰是最难平移的两个单元（前者发热、后者通量）；工业路线改用高压均质配碟片式离心机连续流处理，把粗提压缩进 1 h 以内。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
  b.wtext(746, 806, '复盘纪律：菌体、全样、上清、沉淀每步留样并全部走胶——三个月后追问「当时为什么收率低」，答案全在这些胶上；若目的蛋白以包涵体存在，上清几乎无目标条带，应转投变性复性路线而非反复加大裂解强度。', { maxW: 600, lh: 14, size: 10, fill: C.sub })
  b.tag(1030, 896, '超声空化的自由基会氧化 Met 与 Cys 侧链，金属中心敏感的酶优先均质或酶解', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.badD, pad: 9 })
}

export default scene({
  title: '细胞裂解与样品粗提：从湿菌体到清亮粗提液',
  subtitle: '全程 4 °C：超声 10 s/50 s 脉冲、均质 1,000–2,000 psi、溶菌酶 0.2–1 mg/mL；模板液加抑制剂，DNase 或 PEI 除核酸，3 h 粗提',
  draw,
})
