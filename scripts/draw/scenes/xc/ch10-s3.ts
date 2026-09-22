// xc ch10-s3 精修循环与 R 因子（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、R 与 Rfree 演化曲线 ============
  b.panel(30, 132, 660, 430, { title: '一、R 与 R_{free} 的演化：过拟合的现场' })
  const px = 80, pyTop = 220, pw = 360, pyBot = 540
  b.rect(px, pyTop, pw, pyBot - pyTop, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  const yOf = (v: number) => pyBot - ((v - 0.10) / 0.42) * (pyBot - pyTop)
  ;[[0.15, '0.15'], [0.25, '0.25'], [0.35, '0.35'], [0.45, '0.45']].forEach(([v, lab]) => {
    const ty = yOf(v as number)
    b.line(px, ty, px + pw, ty, { stroke: C.faint, sw: 0.8, dash: '4 5' })
    b.text(px - 8, ty + 4, lab as string, { size: 10, fill: C.mute, anchor: 'end' })
  })
  ;[[0, '0'], [0.25, '5'], [0.5, '10'], [0.75, '15'], [1, '20']].forEach(([f, lab]) => {
    b.ctext(px + (f as number) * pw, pyBot + 18, lab as string, { size: 10, fill: C.mute })
  })
  b.ctext(px + pw / 2, pyBot + 40, '精修循环轮数', { size: 11, weight: 600, fill: C.sub })
  b.ctext(px - 44, (pyTop + pyBot) / 2, 'R 值', { size: 11, weight: 600, fill: C.sub })
  // 健康组
  const hW: [number, number][] = [[0, 0.45], [0.12, 0.34], [0.25, 0.27], [0.38, 0.235], [0.5, 0.215], [0.65, 0.20], [0.8, 0.195], [1, 0.19]]
  const hF: [number, number][] = [[0, 0.48], [0.12, 0.41], [0.25, 0.35], [0.38, 0.31], [0.5, 0.28], [0.65, 0.26], [0.8, 0.245], [1, 0.235]]
  const pts = (arr: [number, number][]) => arr.map(([f, v]) => [px + f * pw, yOf(v)] as [number, number])
  b.spline(pts(hF), { stroke: C.ok, sw: 2.6, dash: '8 4' })
  b.spline(pts(hW), { stroke: C.ok, sw: 2.6 })
  // 过拟合组（后半程）
  const oW: [number, number][] = [[0.5, 0.215], [0.62, 0.19], [0.75, 0.17], [0.88, 0.16], [1, 0.15]]
  const oF: [number, number][] = [[0.5, 0.28], [0.62, 0.285], [0.75, 0.295], [0.88, 0.30], [1, 0.31]]
  b.spline(pts(oF), { stroke: C.bad, sw: 2.6, dash: '8 4' })
  b.spline(pts(oW), { stroke: C.bad, sw: 2.6 })
  b.legend(px + 14, pyTop + 22, [['健康 R_{work}', C.ok], ['健康 R_{free}（虚线）', C.ok], ['过拟合 R_{work}', C.bad], ['过拟合 R_{free} 上翘', C.bad]], { size: 9.5, gap: 10 })
  // gap 标注
  b.arrow(px + pw * 0.97, yOf(0.19), px + pw * 0.97, yOf(0.235), { stroke: C.mute, sw: 1.6, marker: 'mute', markerStart: 'mute' })
  b.ctext(px + pw * 0.80, yOf(0.212), 'gap 约 4', { size: 9.5, weight: 700, fill: C.mute })
  b.ctext(px + pw * 0.66, yOf(0.335), 'R_{free} 掉头向上：过拟合现场', { size: 10, weight: 700, fill: C.badD })
  b.wtext(470, 200, 'R_{work} 的致命弱点是单向讨好：任何往模型里塞参数的动作（原子、各向异性、占有率、交替构象）都会让 R 下降，无论真假。Brunger 1992 年在 Nature 提出自由 R：随机抽取约 5% 反射打入自由集，精修的目标函数、权重调整与策略选择一概不许沾它。', { size: 10.5, fill: C.sub, maxW: 196, lh: 15 })
  b.wtext(470, 300, '健康曲线双双缓降、gap 稳定；过拟合曲线 R_{work} 单降而 R_{free} 停滞甚至上行——先查最近加了什么。', { size: 10.5, fill: C.sub, maxW: 196, lh: 15 })
  b.wtext(470, 370, '参照系：小分子 R 常在 0.03 至 0.05，蛋白到不了那个量级——无序、溶剂与模型不完备是结构性差距；少数强反射主导 Σ|F_{obs}|，弱反射的误差几乎不上账。', { size: 10.5, fill: C.mute, maxW: 196, lh: 15 })
  b.wtext(470, 460, '「1.8 Å、R_{work} 0.21、R_{free} 0.25」才是合格的信息量——分辨率、R 双值一起报。', { size: 10.5, weight: 700, fill: C.ink, maxW: 196, lh: 15 })

  // ============ 二、不可见原则 ============
  b.panel(710, 132, 660, 430, { title: '二、交叉验证的哲学：自由集是考卷、不是习题册' })
  b.rect(730, 186, 600, 60, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 9 })
  b.ctext(1030, 212, '全部反射（数据还原交付，第 6 章）', { size: 12, weight: 700, fill: C.ink })
  b.arrow(880, 246, 880, 272, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1180, 246, 1180, 272, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(730, 276, 420, 64, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(940, 300, '工作集约 95%（小数据集可至 10%）', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(940, 322, '目标函数、权重调整、策略选择只许用它', { size: 9.5, fill: C.sub })
  b.rect(1180, 276, 150, 64, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(1255, 300, '自由集约 5%', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(1255, 322, '全程不可见', { size: 9.5, fill: C.sub })
  // 合规 vs 作弊
  b.rect(730, 366, 294, 74, { fill: C.okL, stroke: C.ok, sw: 1.7, rx: 8 })
  b.ctext(877, 388, '合规用法：宏观决策', { size: 11, weight: 700, fill: C.okD })
  b.wtext(746, 408, '选策略（加 TLS 值不值、NCS 放哪档、水加几批）、定收敛、比较两种建模方案。', { size: 9.5, fill: C.sub, maxW: 262, lh: 13 })
  b.rect(1046, 366, 284, 74, { fill: C.badL, stroke: C.bad, sw: 1.7, rx: 8 })
  b.ctext(1188, 388, '作弊：面向自由集优化', { size: 11, weight: 700, fill: C.badD })
  b.wtext(1062, 408, '把侧链朝 R_{free} 更低的方向拧、把水塞进压 R_{free} 的位置——R_{free} 退化成第二个 R_{work}。', { size: 9.5, fill: C.sub, maxW: 252, lh: 13 })
  b.wtext(730, 466, '执行细节两处易错：换策略或换程序时自由集构成必须原样继承（随机种子固定），否则前后 R_{free} 不可比；程序默认参数有时把全部反射放进工作集——5% 抽取须逐项核对。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 526, '自由集比例的权衡：抽 5% 对大数据集足够稳定；小数据集（反射数千以下）可至 10%，否则自由集只剩两三百个反射、R_{free} 涨落大到不可读。自由集一经选定须终身携带——同一份自由集文件在工具间传递，中途重抽等于换考卷。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、数值锚点与 gap 体温计 ============
  b.panel(30, 572, 660, 390, { title: '三、数值锚点与 gap 体温计' })
  b.table(56, 622, 616, {
    headers: ['分辨率', '典型 R_{work}', '典型 R_{free}', '常见陷阱'],
    colW: [128, 130, 130, 228],
    rowH: 27,
    fontSize: 10.5,
    rows: [
      ['优于 1.2 Å', '0.12 至 0.15', '0.15 至 0.19', '各向异性滥用'],
      ['1.8 至 2.0 Å', '0.18 至 0.22', '0.22 至 0.26', '水塞太多'],
      ['2.5 至 2.9 Å', '0.20 至 0.24', '0.25 至 0.30', '交替构象硬拆'],
      ['3.0 至 3.5 Å', '0.22 至 0.28', '0.28 至 0.35', 'NCS 解除过早'],
    ],
  })
  // gap 刻度
  const gx = 56, gw = 616
  b.rect(gx, 772, gw * 0.24, 28, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.rect(gx + gw * 0.24, 772, gw * 0.36, 28, { fill: C.okL, stroke: C.ok, sw: 1.3 })
  b.rect(gx + gw * 0.60, 772, gw * 0.16, 28, { fill: C.warnL, stroke: C.warn, sw: 1.3 })
  b.rect(gx + gw * 0.76, 772, gw * 0.24, 28, { fill: C.badL, stroke: C.bad, sw: 1.3 })
  b.ctext(gx + gw * 0.12, 787, '接近 0', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(gx + gw * 0.42, 787, '2 至 5 个百分点：健康带', { size: 10, weight: 700, fill: C.okD })
  b.ctext(gx + gw * 0.68, 787, '5–7', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(gx + gw * 0.88, 787, '高于 7：警报', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(gx + gw / 2, 818, 'gap ＝ R_{free} 与 R_{work} 之差（过拟合的体温计）', { size: 10.5, weight: 600, fill: C.sub })
  b.wtext(56, 850, 'gap 高于 7 个百分点即警报——模型里多半有无效率的参数在讨好噪声：塞满的水、滥用的各向异性、不该拆的交替构象、过松的 restraints。诊断从「最可疑的参数」查起：先删一批水再看 gap 反应，逐类排雷。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(56, 912, '反向的病同样存在：gap 接近零而两者都高，多半是 restraints 过紧或模型系统性残缺（缺配体、缺整段）。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 四、循环三步与 PDB_REDO ============
  b.panel(710, 572, 660, 390, { title: '四、循环三步 rebuild-refine-validate 与 PDB_REDO' })
  const cyc = (x: number, y: number, t: string, tool: string, chk: string, stroke: string, fill: string) => {
    b.rect(x, y, 186, 88, { fill, stroke, sw: 1.8, rx: 8 })
    b.ctext(x + 93, y + 22, t, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(x + 93, y + 44, tool, { size: 10, weight: 700, fill: stroke })
    b.wtext(x + 93, y + 64, chk, { size: 9, fill: C.sub, maxW: 164, lh: 11.5, anchor: 'middle' })
  }
  cyc(730, 620, 'rebuild', 'Coot（第 9 章）', '差值图新斑、验证红黄球', C.dna, C.dnaL)
  cyc(1024, 620, 'refine', 'phenix.refine／REFMAC5', '坐标、B、TLS、水', C.acc, C.accL)
  cyc(877, 748, 'validate', 'MolProbity 加双图巡检', 'R 双降、gap 稳定、几何归位', C.pro, C.proL)
  b.arrow(916, 664, 1022, 664, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(1117, 708, 1040, 762, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(877, 792, 823, 708, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(963, 742, '典型 5–20 轮', { size: 11, weight: 700, fill: C.mute })
  b.wtext(730, 862, '每轮回来看三样：R 与 R_{free} 是否双降；差值图是否清零（±3σ 斑块逐轮减少）；图是否整体改善。动手次序先大后小：整段重搭与 register 平移优先，侧链微调与水殿后。前期大刀阔斧，后期只剩零星侧链与水。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 930, 'PDB_REDO（Joosten 等，2009 年起）对全库历史条目系统再精修——重建侧链与氢、重放水、重调权重：平均 R_{free} 可再降约 2 个百分点，几何 outlier 大面积清零；「再优化不重建」，收益归因于方法与工具的进化。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '精修循环与 R 因子：交叉验证的记分牌',
  subtitle: 'Rfree（Brunger 1992）抽 5% 反射全程不可见；2 Å 锚点 Rwork 0.18–0.22、Rfree 0.22–0.26；gap 2–5 个百分点健康、高于 7 警报；循环三步典型 5–20 轮；PDB_REDO 平均再降约 2 个百分点',
  draw,
})
