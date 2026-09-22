// sb ch2-s2 酵母与昆虫细胞表达系统（Task 4-a）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、毕赤酵母 ============
  b.panel(30, 132, 660, 430, { title: '一、毕赤酵母：甲醇驱动的表达工厂' })
  b.wtext(50, 170, '毕赤酵母（Komagataella phaffii）的王牌是 AOX1 启动子——控制醇氧化酶基因，甲醇诱导下可驱动外源基因表达至可溶蛋白的 30% 以上；载体线性化后整合进基因组（单或多拷贝串联），zeocin 筛选，遗传稳定、无质粒丢失。', { maxW: 620, lh: 14.5, size: 10.5, fill: C.sub })
  // 酵母细胞
  b.ellipse(210, 300, 120, 76, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ellipse(178, 285, 26, 18, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(178, 289, '核', { size: 9, weight: 700, fill: C.proD })
  b.rect(160, 318, 104, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 4 })
  b.ctext(212, 333, 'AOX1·目的基因', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(212, 356, '基因组整合', { size: 9, fill: C.mute })
  b.ion(58, 300, '甲醇', { r: 19, fill: C.warnL, stroke: C.warn, size: 10.5, tfill: '#78350f' })
  b.arrow(80, 300, 96, 300, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ctext(210, 392, 'α 交配因子前导肽引导分泌出胞', { size: 9.5, fill: C.mute })
  b.wtext(350, 248, '实验室以 0.5% 甲醇流加诱导 24–96 小时；发酵罐 pH 约 5.5、溶氧维持 30% 以上；补料分批高密度发酵干重可达约 100 g/L，毫克至克级收率屡见不鲜。', { maxW: 300, lh: 14, size: 10, fill: C.sub })
  b.wtext(350, 322, '蛋白酶敏感产物选 SMD1168（pep4/prb1 缺陷）；Mut+ 与 MutS 表型供诱导动力学调优；适用于 20–150 kDa 分泌型真核酶与激素类蛋白。', { maxW: 300, lh: 14, size: 10, fill: C.sub })
  b.wtext(50, 424, '短板：N-糖链为高甘露糖型，可延伸数十个甘露糖残基，与人体糖型差异大，可能影响结晶与活性；GlycoSwitch 等糖工程菌株可改造为人源化糖型。', { maxW: 620, lh: 14, size: 10, fill: C.sub })
  b.rect(50, 470, 610, 82, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 8 })
  b.text(66, 492, '酿酒酵母 Gal1 体系（备用平台）', { size: 12, weight: 700, fill: C.rnaD })
  b.wtext(66, 510, '半乳糖诱导、葡萄糖强阻遏；2 微米质粒每细胞约 20–50 拷贝但随代数波动；1986 年获批的 HBsAg 乙肝疫苗在此自组装为 22 nm 病毒样颗粒，成为首个上市的重组亚单位疫苗；收率通常低于毕赤，更多充当遗传筛选与 GPCR 小规模筛选平台。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })

  // ============ 二、杆状病毒表达载体系统 ============
  b.panel(710, 132, 660, 430, { title: '二、杆状病毒表达载体系统（BEVS）' })
  b.wtext(730, 170, '常用苜蓿银纹夜蛾核多角体病毒 AcMNPV：外源基因置于极晚期多角体蛋白启动子 polh 之下——多角体蛋白本可占感染晚期细胞总蛋白约 30%，强度冠绝昆虫体系；polh 被取代后不再形成多角体，蚀斑即可验证重组。', { maxW: 610, lh: 14.5, size: 10.5, fill: C.sub })
  const vbox = (x: number, y: number, t: string, sub: string) => {
    b.rect(x, y, 180, 58, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
    b.ctext(x + 90, y + 20, t, { size: 11, weight: 700, fill: C.accD })
    b.wtext(x + 12, y + 36, sub, { maxW: 160, lh: 11.5, size: 9.5, fill: C.sub })
  }
  vbox(730, 228, 'DH10Bac 转座', 'mini-Tn7 插入 lacZα，白斑筛重组 bacmid')
  vbox(946, 228, '转染 Sf9', '重组 bacmid 转染昆虫细胞，收 P1 代病毒')
  vbox(1162, 228, '扩增种子', 'P2/P3 滴度约 10^{8} pfu/mL')
  b.arrow(914, 257, 942, 257, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1130, 257, 1158, 257, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.path('M 1252,290 L 1252,306 L 820,306 L 820,316', { fill: 'none', stroke: C.acc, sw: 2, marker: 'acc' })
  vbox(730, 322, '感染表达', 'MOI 1–10 接种；高 MOI 同步感染使表达最大化')
  vbox(946, 322, '收获窗口', '感染后 48–96 小时；过晚收获遭蛋白酶与糖苷酶降解')
  b.arrow(914, 351, 942, 351, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.rect(730, 398, 610, 82, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 8 })
  b.text(746, 420, 'MultiBac 多基因表达（2004）', { size: 12, weight: 700, fill: C.proD })
  b.wtext(746, 438, 'bacmid 预置 Tn7 与 Cre-lox 两组接驳位点，多个表达盒先后装配进同一病毒基因组，一毒感染、等比表达各亚基；删除嵌合酶与半胱氨酸蛋白酶基因的骨架进一步降低降解——激酶、染色质调控与病毒复合物的主力平台。', { maxW: 580, lh: 13.5, size: 10, fill: C.sub })
  b.wtext(730, 494, '典型日程：第 0 天转染 Sf9 收 P1，第 4–5 天收 P2 并测滴度，第 7–10 天以 P2 大规模感染，第 10–13 天收获——从基因到蛋白约两周半，介于大肠杆菌与稳定细胞系之间。', { maxW: 610, lh: 13.5, size: 10, fill: C.sub })
  b.tag(880, 538, 'Sf9／Sf21：草地贪夜蛾，贴壁或悬浮', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })
  b.tag(1140, 538, 'High Five：粉纹夜蛾，分泌更强', { fill: C.panelB, stroke: C.line, size: 10, tfill: C.ink, pad: 8 })

  // ============ 三、四大表达系统对比 ============
  b.panel(30, 578, 1340, 380, { title: '三、四大表达系统对比与选型纪律' })
  b.table(50, 622, 1300, {
    headers: ['系统', '典型周期', '相对成本', '糖基化', '适用分子量与类型', '典型收率量级'],
    colW: [130, 120, 100, 210, 350, 190],
    rowH: 46,
    fontSize: 11,
    rows: [
      ['大肠杆菌', '3–7 天', '低', '无', '约 100 kDa 以下可溶蛋白', '数十 mg 至 g/L'],
      ['毕赤酵母', '1–2 周', '中低', '高甘露糖型', '20–150 kDa 分泌蛋白', '10–1000 mg/L'],
      ['昆虫细胞', '2–3 周', '中', '寡甘露糖型加核心岩藻糖', '复合物、激酶、胞外域', '1–100 mg/L'],
      ['哺乳动物', '3 天至数月', '高', '接近人源复杂糖型', '抗体、Fc 融合、膜蛋白', '瞬时 5–50 mg/L；稳定克级/L'],
    ],
  })
  b.tag(300, 880, '先试大肠杆菌：快而便宜，失败也快', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: C.okD, pad: 10 })
  b.tag(640, 880, '真核胞内复合物：昆虫或毕赤优先', { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 10 })
  b.tag(990, 880, '天然糖型与抗体类：直接哺乳动物', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 10 })
  b.wtext(50, 916, '读表按约束筛选：分泌型糖蛋白直接排除大肠杆菌；大于 300 kDa 且亚基单独不折叠的复合物，昆虫或哺乳动物共表达几乎是唯一选择；从摇瓶到 5 L 反应器，毕赤与 CHO 放大工艺最成熟——平行启动两三个体系小试，以数据而非习惯做决定。', { maxW: 1280, lh: 14, size: 10, fill: C.mute })
}

export default scene({
  title: '酵母与昆虫细胞表达系统',
  subtitle: 'AOX1 在甲醇诱导下驱动表达至可溶蛋白 30% 以上、发酵干重约 100 g/L；polh 启动子强度约达感染晚期细胞总蛋白 30%；MOI 1–10 感染、48–96 小时收获，四体系各司其职',
  draw,
})
