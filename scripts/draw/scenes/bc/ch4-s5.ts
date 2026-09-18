// bc ch4-s5 免疫球蛋白、蛋白质折叠与朊病毒（39-a 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、免疫球蛋白（IgG）Y 形结构 ============
  b.panel(30, 132, 660, 430, { title: '一、免疫球蛋白：Y 形四链分子（以 IgG 为例）' })
  // 两条重链（紫）与两条轻链（琥珀）
  b.path('M300,520 L300,420 Q300,360 360,330 L470,282', { stroke: C.pro, sw: 7 })
  b.path('M300,520 L300,420 Q300,360 240,330 L130,282', { stroke: C.pro, sw: 7 })
  b.path('M130,282 L130,382', { stroke: C.rna, sw: 5.5 })
  b.path('M470,282 L470,382', { stroke: C.rna, sw: 5.5 })
  // 链内/链间二硫键
  b.line(138, 320, 138, 356, { stroke: C.bad, sw: 2 })
  b.line(462, 320, 462, 356, { stroke: C.bad, sw: 2 })
  b.line(150, 372, 186, 372, { stroke: C.bad, sw: 2 })
  b.line(414, 372, 450, 372, { stroke: C.bad, sw: 2 })
  b.line(284, 428, 316, 428, { stroke: C.bad, sw: 2 })
  // 结构域分段标记
  b.tag(130, 252, 'VH + CDR', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 6 })
  b.tag(470, 252, 'VH + CDR', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 6 })
  b.ctext(110, 412, 'VL', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(490, 412, 'VL', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(186, 412, 'CL', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(414, 412, 'CL', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(300, 456, 'CH1', { size: 11, weight: 700, fill: C.proD })
  b.ctext(300, 500, 'CH2 / CH3（Fc）', { size: 11, weight: 700, fill: C.proD })
  b.text(56, 200, '重链 H ×2（~450 aa）', { size: 11.5, weight: 700, fill: C.proD })
  b.text(56, 224, '轻链 L ×2（~220 aa，κ / λ 型）', { size: 11.5, weight: 700, fill: C.rnaD })
  b.wtext(56, 258, 'V 区 CDR（3 段超变环）构成抗原结合位点：VH+VL 共同形成两个相同结合位点；C 区决定类别与效应功能。', { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  // 木瓜蛋白酶 / 胃蛋白酶切点
  b.line(232, 316, 240, 300, { stroke: C.enz, sw: 2, dash: '4 3' })
  b.line(360, 300, 368, 316, { stroke: C.enz, sw: 2, dash: '4 3' })
  b.tag(300, 316, '铰链区', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 5 })
  b.wtext(56, 330, '木瓜蛋白酶切铰链 → 2 Fab + 1 Fc；胃蛋白酶 → F(ab\')₂。', { size: 10.5, fill: C.sub, maxW: 220, lh: 15 })
  b.wtext(56, 386, '每条链由若干免疫球蛋白折叠结构域（β 三明治，两层反平行 β 片由二硫键锁定）串联而成。', { size: 10.5, fill: C.sub, maxW: 220, lh: 15 })
  // β 三明治小图
  for (let i = 0; i < 3; i++) {
    b.line(560 + i * 24, 428, 560 + i * 24, 496, { stroke: C.acc, sw: 5 })
    b.line(572 + i * 24, 436, 572 + i * 24, 488, { stroke: C.acc, sw: 5 })
  }
  b.line(572, 452, 596, 452, { stroke: C.bad, sw: 1.8 })
  b.ctext(600, 462, 'β 三明治', { size: 10.5, weight: 700, fill: C.accD })

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
  b.wtext(726, 500, '抗体多样性由 V(D)J 基因重排与体细胞超变产生，可识别 10⁸ 种以上抗原表位；Köhler 与 Milstein 的杂交瘤单克隆抗体技术使抗体成为诊疗核心工具。', { size: 11.5, fill: C.sub, maxW: 628, lh: 17 })

  // ============ 三、Anfinsen 实验 ============
  b.panel(30, 574, 660, 406, { title: '三、Anfinsen 实验：一级结构决定天然构象' })
  const anf: [number, string, string][] = [
    [56, '天然 RNase A', '正确折叠 · 4 个二硫键 · 有活性'],
    [280, '变性去折叠', '8 mol/L 尿素 + β-巯基乙醇\n切断二硫键 · 失活'],
    [504, '透析复性', '去除变性剂后自发复性\n正确重配 4 个二硫键 · 活性恢复'],
  ]
  anf.forEach(([x, t, s], i) => {
    b.rect(x, 620, 190, 92, { fill: i === 0 ? C.okL : i === 1 ? C.badL : C.okL, fillOp: 0.5, stroke: i === 1 ? C.bad : C.ok, sw: 1.5, rx: 8 })
    b.ctext(x + 95, 644, t, { size: 12.5, weight: 700, fill: i === 1 ? C.bad : '#065f46' })
    b.wtext(x + 95, 668, s.replace('\n', ' '), { size: 10.5, fill: C.sub, maxW: 170, lh: 14, anchor: 'middle' })
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
  b.panel(710, 574, 660, 406, { title: '四、朊病毒：PrPᶜ → PrPˢᶜ 的模板化传播' })
  // PrPc：α 螺旋丰富
  b.circle(830, 680, 44, { fill: C.okL, stroke: C.ok, sw: 2 })
  for (let i = 0; i < 3; i++) {
    const a = -0.9 + i * 0.9
    b.path(`M${830 + 30 * Math.cos(a)},${680 + 30 * Math.sin(a)} q14,10 4,26`, { stroke: C.ok, sw: 2.6 })
  }
  b.ctext(830, 636, 'PrPᶜ（正常）', { size: 12.5, weight: 700, fill: '#065f46' })
  b.ctext(830, 740, 'α 螺旋丰富 · 可溶', { size: 10.5, fill: C.mute })
  b.arrow(886, 680, 950, 680, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(918, 660, '错误折叠', { size: 10.5, weight: 700, fill: C.bad })
  // PrPsc：β 折叠丰富、不溶
  b.rect(966, 636, 96, 88, { fill: C.badL, stroke: C.bad, sw: 2, rx: 10 })
  for (let i = 0; i < 5; i++) b.line(980, 650 + i * 16, 1048, 650 + i * 16, { stroke: C.bad, sw: 3 })
  b.ctext(1014, 600, 'PrPˢᶜ（致病）', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(1014, 744, 'β 折叠丰富 · 不溶 · 抗蛋白酶', { size: 10.5, fill: C.mute })
  // 自我模板化循环
  b.path('M1014,760 L1014,790 Q1014,806 990,806 L900,806', { stroke: C.bad, sw: 2, marker: 'bad' })
  b.path('M860,806 L830,806 Q812,806 812,788 L812,726', { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(920, 830, '作为「模板」催化更多 PrPᶜ 错误折叠 → 淀粉样纤维沉积', { size: 10.5, fill: C.bad })
  b.wtext(726, 866, '只有蛋白质、不含核酸的感染因子；引起库鲁病、克雅氏病（CJD）、疯牛病（BSE）、羊瘙痒症；Prusiner 获 1997 年诺贝尔生理学或医学奖。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })
  b.wtext(726, 930, '类似的蛋白错误折叠/聚集机制亦见于阿尔茨海默病（Aβ、tau）与帕金森病（α-突触核蛋白）——统称蛋白质构象病。', { size: 11.5, fill: C.mute, maxW: 620, lh: 17 })
}

export default scene({
  title: '免疫球蛋白、蛋白质折叠与朊病毒',
  subtitle: 'Ig 的 Y 形四链与 β 三明治结构域、五类免疫球蛋白分工；Anfinsen 复性实验证明一级结构决定构象（ΔG −20~−60 kJ/mol）；PrPᶜ→PrPˢᶜ 模板化传播构象病',
  draw,
})
