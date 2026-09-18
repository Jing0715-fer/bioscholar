// vi ch12-s3 抗病毒药物（39-j 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、靶点图谱：选择性的第一性原理 ============
  b.panel(30, 132, 660, 430, { title: '一、选择性：抗病毒药物的第一性原理' })
  b.wtext(46, 190, '疱疹激酶、逆转录酶、蛋白酶、神经氨酸酶与 RdRp 等病毒特有靶点撑开治疗窗——获批药物集中于约十个病毒属。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  const stages: [string, string[]][] = [
    ['吸附·侵入·脱壳', []],
    ['基因复制与转录', ['阿昔洛韦（聚合酶）', 'AZT（逆转录酶）', '索非布韦（RdRp）']],
    ['翻译与蛋白加工', ['沙奎那韦（蛋白酶）', '玛巴洛沙韦（内切酶）']],
    ['装配与释放', ['奥司他韦（神经氨酸酶）']],
  ]
  stages.forEach(([t, drugs], i) => {
    const bx = 56 + i * 156
    b.rect(bx, 240, 142, 60, { fill: C.panelB, stroke: C.acc, sw: 1.8, rx: 9 })
    b.ctext(bx + 71, 274, t, { size: 11.5, weight: 700, fill: C.accD })
    if (i < 3) b.arrow(bx + 144, 270, bx + 154, 270, { stroke: C.acc, sw: 2.2, marker: 'acc' })
    drugs.forEach((d, j) => {
      b.tag(bx + 71, 330 + j * 34, d, { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 6 })
    })
  })
  b.wtext(46, 452, '干扰素等宿主侧广谱手段难逃全身毒性；真正的主力是「病毒有、宿主无」的酶与结构——靶点即治疗窗。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(46, 494, '高度依赖宿主机器的病毒几无独立靶点，构成广谱路线的结构困境。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、阿昔洛韦：双重闸门 ============
  b.panel(710, 132, 660, 430, { title: '二、阿昔洛韦：一举两得的双重闸门' })
  const acv: [string, string][] = [
    ['ACV 前药', '静默无活性'],
    ['ACV-MP', '仅病毒感染细胞内'],
    ['ACV-TP', '三磷酸活性形式'],
    ['掺入即终止', '病毒 DNA 链延伸停止'],
  ]
  acv.forEach(([t, s], i) => {
    const bx = 736 + i * 154
    b.rect(bx, 226, 122, 62, { fill: C.panelB, stroke: C.dna, sw: 1.8, rx: 9 })
    b.ctext(bx + 61, 252, t, { size: 12, weight: 700, fill: C.dnaD })
    b.ctext(bx + 61, 272, s, { size: 9, fill: C.mute })
    if (i < 3) b.arrow(bx + 124, 257, bx + 152, 257, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  })
  b.tag(872, 200, '① 病毒 TK 选择性磷酸化', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 7 })
  b.tag(1180, 200, '② 病毒聚合酶选择性掺入', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 7 })
  b.wtext(726, 330, '两道闸门都握在病毒自己的酶手里：未感染细胞既无 TK 也无病毒聚合酶——ACV 对其几乎不活化、不掺入，治疗指数以千倍计。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 372, '「前药经病毒酶活化」由此成为合理药物设计的教科书案例；Elion 与 Hitchings 因包括阿昔洛韦在内的系列成就获 1988 年诺贝尔奖。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
  b.wtext(726, 428, '同一逻辑的后续：更昔洛韦依赖 CMV 的 UL97 激酶——选择性始终来自病毒自己交出的钥匙。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、HIV 治疗时间线与 HAART ============
  b.panel(30, 586, 660, 394, { title: '三、HIV 治疗：从单药到 HAART' })
  b.timelineH(60, 706, 560, [
    { at: 0.08, label: 'AZT 获批', sub: '1987 首个抗 HIV 药', above: true, c: C.dna },
    { at: 0.36, label: '沙奎那韦', sub: '1995 蛋白酶抑制剂', c: C.rna },
    { at: 0.62, label: 'HAART', sub: '1996 何大一 · 三联疗法', above: true, c: C.bad },
    { at: 0.9, label: '整合酶抑制剂', sub: '2007 雷特格韦·多替拉韦', c: C.acc },
  ])
  b.wtext(46, 800, 'AZT 为 3′ 叠氮取代的胸苷类似物，三磷酸化后与底物竞争逆转录酶、掺入即终止；蛋白酶抑制剂以 C2 对称二聚体为靶，沙奎那韦以基于结构的过渡态拟肽设计率先上市。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.text(50, 848, 'HAART＝同时封锁多条耐药逃逸路径：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(130, 882, '两种 NRTI', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  b.tag(290, 882, '＋ 一种蛋白酶抑制剂', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 7 })
  b.tag(500, 882, '→ HIV 转为可管理慢病', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: '#065f46', pad: 7 })
  b.wtext(50, 920, 'U=U（检测不到＝不具传染性）使治疗兼具预防意义；整合酶链转移抑制剂以高效低毒成为当代骨架，单片三联复方进一步改善依从性。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、HCV 治愈与流感 48 小时窗 ============
  b.panel(710, 586, 660, 394, { title: '四、HCV 的口服治愈与流感 48 小时窗' })
  b.rect(730, 646, 300, 196, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 10, fillOp: 0.5 })
  b.ctext(880, 672, '丙肝：首个口服治愈的慢性感染', { size: 11.5, weight: 700, fill: C.rnaD })
  b.wtext(742, 696, '2011 年第一代 NS3/4A 蛋白酶抑制剂（波普瑞韦、替拉瑞韦）首破干扰素框架；索非布韦为基础的 DAA 方案口服八至十二周、治愈率逾 95%。', { size: 10, fill: C.sub, maxW: 276, lh: 14 })
  b.wtext(742, 776, '定价与可及性自此成为治疗学固有议题。', { size: 10, fill: C.mute, maxW: 276, lh: 14 })
  b.rect(1050, 646, 280, 196, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 10, fillOp: 0.5 })
  b.ctext(1190, 672, '流感：48 小时黄金窗口', { size: 11.5, weight: 700, fill: C.accD })
  b.line(1080, 716, 1300, 716, { stroke: C.sub, sw: 2.6, marker: 'ink' })
  ;[[1080, '0 h'], [1180, '24 h'], [1280, '48 h']].forEach(([tx, lab]) => {
    b.circle(tx, 716, 4, { fill: C.sub })
    b.ctext(tx, 736, lab, { size: 9, fill: C.mute })
  })
  b.line(1280, 700, 1280, 732, { stroke: C.bad, sw: 2, dash: '5 4' })
  b.wtext(1070, 762, '奥司他韦须在 48 小时内启用方显著获益；H275Y 耐药曾在季节性 H1N1 全球蔓延后被敏感毒株取代；玛巴洛沙韦以内切核酸酶为靶、单剂给药。', { size: 9.5, fill: C.sub, maxW: 250, lh: 13.5 })
  b.wtext(726, 872, '广谱路线的困境：瑞德西韦与法匹拉韦证明广谱与高效难以兼得——各病毒科 RdRp 几何互异，高度依赖宿主机器的病毒几无靶点。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 918, '抗病毒的版图由「选择性」划定：能治愈的越来越多，能广谱的依旧寥寥。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '抗病毒药物：选择性、双重闸门与治愈的版图',
  subtitle: '病毒特有靶点撑开治疗窗；阿昔洛韦双重闸门（治疗指数以千倍计、1988 诺奖）；1996 HAART 三联封锁耐药路径、U=U；索非布韦 8–12 周治愈率逾 95%；奥司他韦 48 小时窗口',
  draw,
})
