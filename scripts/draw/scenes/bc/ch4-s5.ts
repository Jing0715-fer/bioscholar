// bc ch4-s5 免疫球蛋白、蛋白质折叠与朊病毒（39-a 批2）
// 2024-09 修订：修复原版三处文字/图形重叠——
//   ① 面板一左侧说明文字压住 VH+CDR 标签、轻链与重链臂 → Y 形整体右移、左列文字收窄（maxW 165）
//   ② 面板三流程框内说明文字溢出边框（wtext 对无标点长 token 不换行）→ 改为手动两行居中文本
//   ③ 面板四 PrPˢᶜ（致病）标签压面板标题、回环箭头竖线穿过"α 螺旋丰富 · 可溶"→ 重新布局，
//      CH1/CH2/CH3 改放主干左侧（原版直接叠在主干线上），β 三明治小图标签移出图形（原压在 β 片线条上）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、免疫球蛋白（IgG）Y 形结构 ============
  // 布局：左列文字 x∈[46,211]，Y 形图 x∈[247,612]（中轴 410），互不侵界
  b.panel(30, 132, 660, 430, { title: '一、免疫球蛋白：Y 形四链分子（以 IgG 为例）' })
  // 两条重链（紫）：主干 + 张开的臂；两条轻链（琥珀）：竖直，紧贴臂端下方
  b.path('M410,525 L410,432 Q410,368 352,336 L250,290', { stroke: C.pro, sw: 7 })
  b.path('M410,525 L410,432 Q410,368 468,336 L570,290', { stroke: C.pro, sw: 7 })
  b.path('M250,290 L250,390', { stroke: C.rna, sw: 5.5 })
  b.path('M570,290 L570,390', { stroke: C.rna, sw: 5.5 })
  // 链内二硫键（结构域内部，竖短线）
  b.line(258, 322, 258, 358, { stroke: C.bad, sw: 2 })
  b.line(562, 322, 562, 358, { stroke: C.bad, sw: 2 })
  // 链间二硫键（轻链 CL 与重链 CH1 之间，横短线）
  b.line(253, 378, 289, 378, { stroke: C.bad, sw: 2 })
  b.line(531, 378, 567, 378, { stroke: C.bad, sw: 2 })
  // 臂端可变区标签（臂端正上方，避开左列文字：文字最宽行右缘 211 < 标签左缘 223）
  b.tag(250, 258, 'VH + CDR', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 6 })
  b.tag(570, 258, 'VH + CDR', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 6 })
  // 轻链 V/C 区标注（轻链两侧，各留 ≥11px 间隙）
  b.ctext(226, 412, 'VL', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(274, 412, 'CL', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(546, 412, 'CL', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(594, 412, 'VL', { size: 11.5, weight: 700, fill: C.rnaD })
  // 重链恒定区标注（主干左侧右对齐，原版叠在主干线上）
  b.etext(392, 458, 'CH1', { size: 11, weight: 700, fill: C.proD })
  b.etext(392, 500, 'CH2 / CH3（Fc）', { size: 11, weight: 700, fill: C.proD })
  // 铰链区：酶切虚线穿过主干（CH1 与 CH2 之间），标签放右侧空白
  b.line(396, 466, 418, 444, { stroke: C.enz, sw: 2, dash: '4 3' })
  b.tag(450, 462, '铰链区', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 5 })
  // 左列说明文字（maxW 165，四段之间留行距，全部避开右侧图形区）
  b.text(46, 200, '重链 H ×2（~450 aa）', { size: 11.5, weight: 700, fill: C.proD })
  b.text(46, 224, '轻链 L ×2（~220 aa，κ / λ 型）', { size: 11.5, weight: 700, fill: C.rnaD })
  b.wtext(46, 258, 'V 区 CDR（3 段超变环）构成抗原结合位点：VH+VL 共同形成两个相同结合位点；C 区决定类别与效应功能。', { size: 10.5, fill: C.sub, maxW: 165, lh: 15 })
  b.text(46, 336, '木瓜蛋白酶切铰链 →', { size: 10.5, fill: C.sub })
  b.text(46, 351, '2 Fab + 1 Fc；', { size: 10.5, fill: C.sub })
  b.text(46, 366, '胃蛋白酶 → F(ab\')₂。', { size: 10.5, fill: C.sub })
  b.wtext(46, 384, '每条链由若干免疫球蛋白折叠结构域（β 三明治，两层反平行 β 片由二硫键锁定）串联而成。', { size: 10.5, fill: C.sub, maxW: 165, lh: 15 })
  // β 三明治小图（左下角；标签放图形下方，不再压在 β 片线条上）
  for (let i = 0; i < 3; i++) {
    b.line(64 + i * 24, 448, 64 + i * 24, 512, { stroke: C.acc, sw: 5 })
    b.line(76 + i * 24, 456, 76 + i * 24, 504, { stroke: C.acc, sw: 5 })
  }
  b.line(76, 472, 100, 472, { stroke: C.bad, sw: 1.8 })
  b.ctext(94, 532, 'β 三明治', { size: 10.5, weight: 700, fill: C.accD })

  // ============ 二、五类免疫球蛋白 ============
  b.panel(710, 132, 660, 430, { title: '二、五类免疫球蛋白（重链决定类别）' })
  b.table(726, 190, 628, {
    headers: ['类别', '特征与功能'],
    colW: [110, 518],
    rowH: 52,
    fontSize: 11,
    rows: [
      ['IgG', '血清主要抗体，唯一通过胎盘；激活补体、调理吞噬'],
      ['IgM', '五聚体（J 链连接），初次免疫应答、早期防御，激活补体最强'],
      ['IgA', '二聚体（分泌片），外分泌液（乳汁、黏膜）局部免疫'],
      ['IgD', 'B 细胞膜受体'],
      ['IgE', '结合肥大细胞，介导过敏反应与抗寄生虫'],
    ],
  })
  b.wtext(726, 500, '抗体多样性由 V(D)J 基因重排与体细胞超变产生，可识别 10⁸ 种以上抗原表位；Köhler 与 Milstein 的杂交瘤单克隆抗体技术使抗体成为诊疗核心工具。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })

  // ============ 三、Anfinsen 实验 ============
  b.panel(30, 574, 660, 406, { title: '三、Anfinsen 实验：一级结构决定天然构象' })
  // 三个流程框：框内说明改为手动两行居中（每行 ≤160px，均在 190px 框内，不溢出、不压框边）
  const anf: [number, string, string, string, 'ok' | 'bad'][] = [
    [56, '天然 RNase A', '正确折叠 · 4 个二硫键', '有活性', 'ok'],
    [280, '变性去折叠', '8 mol/L 尿素 + β-巯基乙醇', '切断二硫键 · 失活', 'bad'],
    [504, '透析复性', '去除变性剂后自发复性', '正确重配 4 个二硫键 · 活性恢复', 'ok'],
  ]
  anf.forEach(([x, t, s1, s2, kind]) => {
    b.rect(x, 620, 190, 92, { fill: kind === 'bad' ? C.badL : C.okL, fillOp: 0.5, stroke: kind === 'bad' ? C.bad : C.ok, sw: 1.5, rx: 8 })
    b.ctext(x + 95, 646, t, { size: 12.5, weight: 700, fill: kind === 'bad' ? C.bad : '#065f46' })
    b.ctext(x + 95, 670, s1, { size: 10.5, fill: C.sub })
    b.ctext(x + 95, 686, s2, { size: 10.5, fill: C.sub })
  })
  b.arrow(250, 666, 276, 666, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(474, 666, 500, 666, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.wtext(56, 744, '结论：一级结构包含全部折叠信息，天然构象是热力学最稳态（折叠自由能 ΔG 仅 −20~−60 kJ/mol 的「边际稳定」）。', { size: 11.5, fill: C.ink, maxW: 620, lh: 17 })
  b.text(56, 800, '体内折叠并非完全自发——分子伴侣体系：', { size: 12.5, weight: 700, fill: C.ink })
  const chap: [string, string][] = [
    ['Hsp70 家族', '识别暴露疏水区，阻断错误聚集'],
    ['Hsp60 / GroEL', '桶状结构提供隔离折叠环境'],
    ['PDI · PPIase', '二硫键异构酶与脯氨酰异构酶加速限速步骤'],
  ]
  chap.forEach(([t, s], i) => {
    const y = 828 + i * 30
    b.text(70, y, '· ' + t, { size: 11.5, weight: 700, fill: C.sub })
    b.text(200, y, s, { size: 11.5, fill: C.sub })
  })
  b.text(56, 930, '分子伴侣阻止错误聚集、提高折叠效率，但不改变最终构象。', { size: 11.5, fill: C.mute })

  // ============ 四、朊病毒 ============
  // 布局：PrPᶜ 圆 x∈[758,842]，PrPˢᶜ 框 x∈[922,1012]，回环箭头从框右侧绕到圆左下，
  // 完全避开两个 sub 标签（y≈743-755）与面板标题带（y≤637）
  b.panel(710, 574, 660, 406, { title: '四、朊病毒：PrPᶜ → PrPˢᶜ 的模板化传播' })
  // PrPᶜ：α 螺旋丰富（圆 (800,690) r42）
  b.circle(800, 690, 42, { fill: C.okL, stroke: C.ok, sw: 2 })
  for (let i = 0; i < 3; i++) {
    const a = -0.9 + i * 0.9
    b.path(`M${800 + 28 * Math.cos(a)},${690 + 28 * Math.sin(a)} q14,10 4,26`, { stroke: C.ok, sw: 2.6 })
  }
  b.ctext(800, 634, 'PrPᶜ（正常）', { size: 12.5, weight: 700, fill: '#065f46' })
  b.ctext(800, 752, 'α 螺旋丰富 · 可溶', { size: 10.5, fill: C.mute })
  b.arrow(852, 690, 906, 690, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(879, 672, '错误折叠', { size: 10.5, weight: 700, fill: C.bad })
  // PrPˢᶜ：β 折叠丰富、不溶（框 (922,646,90,88)）
  b.rect(922, 646, 90, 88, { fill: C.badL, stroke: C.bad, sw: 2, rx: 10 })
  for (let i = 0; i < 5; i++) b.line(936, 660 + i * 16, 1004, 660 + i * 16, { stroke: C.bad, sw: 3 })
  b.ctext(967, 634, 'PrPˢᶜ（致病）', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(967, 752, 'β 折叠丰富 · 不溶 · 抗蛋白酶', { size: 10.5, fill: C.mute })
  // 自我模板化循环：框右侧出 → 绕底部 → 回指圆左下缘（全部从两个 sub 标签下方/外方通过）
  b.path('M1012,690 L1044,690 Q1066,690 1066,712 L1066,756 Q1066,788 1030,788 L800,788 Q744,788 744,752 L750,724', { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(905, 812, '作为「模板」催化更多 PrPᶜ 错误折叠 → 淀粉样纤维沉积', { size: 10.5, fill: C.bad })
  b.wtext(726, 866, '只有蛋白质、不含核酸的感染因子；引起库鲁病、克雅氏病（CJD）、疯牛病（BSE）、羊瘙痒症；Prusiner 获 1997 年诺贝尔生理学或医学奖。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })
  b.wtext(726, 930, '类似的蛋白错误折叠/聚集机制亦见于阿尔茨海默病（Aβ、tau）与帕金森病（α-突触核蛋白）——统称蛋白质构象病。', { size: 11.5, fill: C.mute, maxW: 620, lh: 17 })
}

export default scene({
  title: '免疫球蛋白、蛋白质折叠与朊病毒',
  subtitle: 'Ig 的 Y 形四链与 β 三明治结构域、五类免疫球蛋白分工；Anfinsen 复性实验证明一级结构决定构象（ΔG −20~−60 kJ/mol）；PrPᶜ→PrPˢᶜ 模板化传播构象病',
  draw,
})
