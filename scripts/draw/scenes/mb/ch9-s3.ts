// mb ch9-s3 分子克隆与基因文库（39-c 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、分子克隆基本流程（上，全宽） ============
  b.panel(30, 132, 1340, 338, { title: '一、分子克隆基本流程：酶切 → 连接 → 转化 → 筛选 → 鉴定' })
  const bx = [56, 318, 580, 842, 1104]
  const by = 174, bw = 240, bh = 138
  const heads = ['① 酶切', '② 连接', '③ 转化', '④ 筛选', '⑤ 鉴定']
  const subs = ['同一限制酶分别切割目的 DNA 与载体', 'T4 DNA 连接酶缝合（ATP 供能）', 'CaCl₂ 热激 / 电穿孔导入大肠杆菌', '抗生素平板 + 蓝白斑筛选', '酶切图谱 / 测序验证重组子']
  heads.forEach((h, i) => {
    b.rect(bx[i], by, bw, bh, { fill: '#ffffff', stroke: C.line, sw: 1.4, rx: 10 })
    b.ctext(bx[i] + bw / 2, by + 26, h, { size: 15, weight: 700, fill: C.ink })
    b.ctext(bx[i] + bw / 2, by + 126, subs[i], { size: 10.5, fill: C.mute })
    if (i < 4) b.arrow(bx[i] + bw + 3, by + 70, bx[i + 1] - 3, by + 70, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  })
  // ① 目的 DNA + 载体 + 切点
  b.dna(bx[0] + 36, by + 62, 82, { amp: 7, period: 40, sw: 2.2 })
  b.ctext(bx[0] + 77, by + 92, '目的 DNA', { size: 10, fill: C.sub })
  b.ellipse(bx[0] + 180, by + 60, 26, 17, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(bx[0] + 180, by + 92, '载体（质粒）', { size: 10, fill: C.sub })
  b.line(bx[0] + 86, by + 44, bx[0] + 86, by + 82, { stroke: C.enz, sw: 1.8, dash: '4 3' })
  b.line(bx[0] + 170, by + 44, bx[0] + 170, by + 78, { stroke: C.enz, sw: 1.8, dash: '4 3' })
  // ② 载体环 + 插入片段 + 连接酶
  b.ellipse(bx[1] + 108, by + 62, 44, 30, { fill: 'none', stroke: C.dna, sw: 2.6 })
  b.rect(bx[1] + 88, by + 54, 40, 16, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 3 })
  b.ctext(bx[1] + 108, by + 65, '插入', { size: 9.5, weight: 700, fill: C.enzD })
  b.circle(bx[1] + 178, by + 62, 17, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(bx[1] + 178, by + 67, 'T4', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(bx[1] + 178, by + 92, '连接酶 · ATP', { size: 10, fill: C.sub })
  // ③ 大肠杆菌 + 入内质粒
  b.ellipse(bx[2] + 116, by + 62, 48, 28, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ellipse(bx[2] + 96, by + 62, 13, 8, { fill: 'none', stroke: C.dna, sw: 1.8 })
  b.ellipse(bx[2] + 196, by + 40, 12, 8, { fill: 'none', stroke: C.dna, sw: 1.8 })
  b.arrow(bx[2] + 186, by + 46, bx[2] + 160, by + 56, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(bx[2] + 116, by + 92, '大肠杆菌', { size: 10, fill: C.sub })
  // ④ 培养皿：蓝白斑
  b.circle(bx[3] + 120, by + 62, 34, { fill: C.panel, stroke: C.sub, sw: 2 })
  const col4: [number, number, string][] = [[-16, -10, C.acc], [-4, -18, C.acc], [10, -8, '#ffffff'], [18, 10, C.acc], [2, 12, '#ffffff'], [-12, 14, C.acc], [22, -16, '#ffffff'], [-22, 6, '#ffffff']]
  for (const [dx, dy, f] of col4) b.circle(bx[3] + 120 + dx, by + 62 + dy, 4.6, { fill: f, stroke: C.sub, sw: 1 })
  // ⑤ 鉴定胶
  b.rect(bx[4] + 56, by + 38, 130, 56, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.rect(bx[4] + 84, by + 46, 30, 6, { fill: C.ink })
  b.rect(bx[4] + 132, by + 46, 30, 6, { fill: C.ink })
  b.rect(bx[4] + 86, by + 58, 26, 6, { fill: C.dna })
  b.rect(bx[4] + 134, by + 74, 26, 6, { fill: C.dna })
  b.ctext(bx[4] + 100, by + 108, '空载体', { size: 9.5, fill: C.mute })
  b.ctext(bx[4] + 148, by + 108, '重组子', { size: 9.5, fill: C.mute })

  // —— 蓝白斑原理（流程条下方） ——
  b.text(56, 344, '蓝白斑筛选（lacZα 互补）：重组子的经典正筛', { size: 15, weight: 700, fill: C.ink })
  // 卡A：空载体 → 蓝
  b.rect(56, 360, 400, 92, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 9, fillOp: 0.5 })
  b.text(70, 384, '空载体：MCS 未插入，α 肽完好', { size: 12.5, weight: 700, fill: C.accD })
  b.text(70, 412, '载体 lacZα + 宿主 ω 肽（Δ(lacZ)M15）→ α 互补', { size: 11.5, fill: C.sub })
  b.text(70, 436, 'β-半乳糖苷酶活性 → IPTG + X-gal 平板', { size: 11.5, fill: C.sub })
  b.tag(412, 398, '蓝色菌落', { fill: C.acc, stroke: C.accD, size: 13, weight: 700, tfill: '#ffffff', pad: 10 })
  // 卡B：插入 → 白
  b.rect(472, 360, 400, 92, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 9, fillOp: 0.5 })
  b.text(486, 384, '重组载体：插入片段破坏 α 肽读码', { size: 12.5, weight: 700, fill: C.bad })
  b.text(486, 412, 'α 肽失活 → 无法与 ω 肽互补', { size: 11.5, fill: C.sub })
  b.text(486, 436, 'X-gal 不显色 → 平板上呈白色', { size: 11.5, fill: C.sub })
  b.tag(800, 398, '白色菌落＝重组子', { fill: '#ffffff', stroke: C.bad, size: 13, weight: 700, tfill: C.bad, pad: 10 })
  // 卡C：要点
  b.rect(888, 360, 458, 92, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 9 })
  b.text(902, 384, '原理要点', { size: 12.5, weight: 700, fill: C.sub })
  b.wtext(902, 408, 'MCS（多克隆位点）位于 lacZα（α 肽）编码区内；宿主为 Δ(lacZ)M15 基因型，仅能提供 ω 肽；IPTG 诱导转录、X-gal 为生色底物。', { size: 11.5, fill: C.sub, maxW: 430, lh: 19 })

  // ============ 二、工具酶（左中） ============
  b.panel(30, 484, 660, 258, { title: '二、II 型限制酶与 T4 DNA 连接酶：克隆的「手术刀」与「缝线」' })
  // —— EcoRI 回文识别与交错切割 ——
  b.text(56, 526, 'EcoRI 识别 6 bp 回文序列，交错切割：', { size: 13, weight: 700, fill: C.ink })
  const seqT = ['G', 'A', 'A', 'T', 'T', 'C']
  const seqB = ['C', 'T', 'T', 'A', 'A', 'G']
  const sx = 100, sdx = 26
  b.line(60, 545, 94, 545, { stroke: C.sub, sw: 2 })
  b.line(240, 545, 274, 545, { stroke: C.sub, sw: 2 })
  b.line(60, 577, 94, 577, { stroke: C.sub, sw: 2 })
  b.line(240, 577, 274, 577, { stroke: C.sub, sw: 2 })
  seqT.forEach((c, i) => b.ctext(sx + i * sdx, 550, c, { size: 13, weight: 700, fill: C.dnaD }))
  seqB.forEach((c, i) => b.ctext(sx + i * sdx, 582, c, { size: 13, weight: 700, fill: C.dnaD }))
  b.text(48, 550, "5′", { size: 11, fill: C.mute })
  b.text(278, 550, "3′", { size: 11, fill: C.mute })
  b.text(48, 582, "3′", { size: 11, fill: C.mute })
  b.text(278, 582, "5′", { size: 11, fill: C.mute })
  b.line(113, 532, 113, 560, { stroke: C.enz, sw: 2, dash: '4 3' })
  b.polygon([[113, 562], [108, 554], [118, 554]], { fill: C.enz })
  b.line(217, 562, 217, 590, { stroke: C.enz, sw: 2, dash: '4 3' })
  b.polygon([[217, 560], [212, 568], [222, 568]], { fill: C.enz })
  b.text(56, 612, '切口错开 4 nt → 5′ 黏性末端（AATT）', { size: 11.5, weight: 700, fill: C.enzD })
  b.wtext(56, 634, 'II 型限制酶识别 4～8 bp 回文序列并于固定位置切割；来源自细菌的限制修饰系统（见第 11 章）。', { size: 11, fill: C.mute, maxW: 330, lh: 17 })
  // —— 切割产物（右半）与连接酶 ——
  b.text(400, 526, '同酶切产物末端互补：', { size: 13, weight: 700, fill: C.ink })
  // 左片段：5′—G / 3′—CTTAA
  b.line(400, 545, 436, 545, { stroke: C.sub, sw: 2 })
  b.ctext(448, 550, 'G', { size: 12, weight: 700, fill: C.dnaD })
  b.line(400, 577, 436, 577, { stroke: C.sub, sw: 2 })
  ;['C', 'T', 'T', 'A', 'A'].forEach((c, i) => b.ctext(448 + i * 20, 582, c, { size: 12, weight: 700, fill: C.dnaD }))
  b.etext(392, 550, "5′", { size: 10.5, fill: C.mute })
  b.etext(392, 582, "3′", { size: 10.5, fill: C.mute })
  // 右片段：AATTC—3′ / G—5′
  ;['A', 'A', 'T', 'T', 'C'].forEach((c, i) => b.ctext(500 + i * 20, 550, c, { size: 12, weight: 700, fill: C.dnaD }))
  b.line(588, 545, 622, 545, { stroke: C.sub, sw: 2 })
  b.ctext(552, 582, 'G', { size: 12, weight: 700, fill: C.dnaD })
  b.line(562, 577, 622, 577, { stroke: C.sub, sw: 2 })
  b.text(630, 550, "3′", { size: 10.5, fill: C.mute })
  b.text(630, 582, "5′", { size: 10.5, fill: C.mute })
  b.path('M500,594 Q540,612 570,590', { stroke: C.mute, sw: 1.4, dash: '4 3', fill: 'none' })
  b.ctext(536, 622, 'AATT 突出端彼此互补', { size: 10.5, fill: C.mute })
  b.text(56, 690, 'T4 DNA 连接酶缝合相邻 5′-磷酸与 3′-OH 成磷酸二酯键（ATP 供能）', { size: 11.5, fill: C.sub })
  b.tag(556, 664, '同尾酶：不同序列 → 相同末端', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.ok, pad: 8 })
  b.tag(556, 698, '平末端：直接连接或加接头', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.ok, pad: 8 })

  // ============ 三、载体家族容量阶梯（右中） ============
  b.panel(710, 484, 660, 258, { title: '三、载体按插入容量分级：克隆大片段的阶梯' })
  const vecs: [string, number, string, string, string, string][] = [
    ['质粒', 70, '＜10 kb', 'pUC / pBluescript：ori · 抗性标记 · MCS；常规克隆与表达', C.dna, C.dnaL],
    ['λ 噬菌体', 96, '5–23 kb（置换型）', '体外包装感染；基因组文库', C.rna, C.rnaL],
    ['粘粒 cosmid', 130, '35–45 kb', 'λ cos 位点 + 质粒骨架；大片段文库', C.pro, C.proL],
    ['BAC', 185, '100–300 kb', 'F 因子单拷贝、极稳定；HGP 主力载体', C.enz, C.enzL],
    ['YAC', 250, '100 kb–1 Mb', '酵母着丝粒 + 端粒 + ARS；早期大基因组作图', C.acc, C.accL],
  ]
  vecs.forEach(([name, w, cap, feat, st, fl], i) => {
    const y = 532 + i * 36
    b.rect(756, y, w, 21, { fill: fl, stroke: st, sw: 1.6, rx: 4 })
    b.ctext(756 + w / 2, y + 15, name, { size: 10.5, weight: 700, fill: C.ink })
    b.text(756 + w + 10, y + 9, cap, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(756 + w + 10, y + 26, feat, { size: 9.5, fill: C.mute, maxW: 1366 - (756 + w + 10), lh: 14 })
  })
  b.rect(756, 712, 590, 26, { fill: C.panelB, stroke: C.line, sw: 1, rx: 6 })
  b.text(766, 729, '表达载体：强启动子（T7 / lac / CMV）· 核糖体结合位 / Kozak 序 · 纯化标签（His₆ / GST）· 终止子', { size: 10.5, fill: C.sub })

  // ============ 四、两类文库（左下） ============
  b.panel(30, 756, 660, 204, { title: '四、基因组文库 vs cDNA 文库：全基因组 vs 表达谱' })
  const libs: [string, string, string, string[], string, string, string][] = [
    ['基因组文库', C.dnaD, C.dnaL, ['基因组 DNA', '机械剪切 / 部分酶切', '克隆入 λ / BAC 载体', '覆盖全基因组（含内含子·调控区）'], 'N = ln(1−P) / ln(1−f)（随机覆盖概率）', '基因组 DNA', C.dna],
    ['cDNA 文库', C.rnaD, C.rnaL, ['组织 / 时期特异 mRNA', '反转录 → 双链 cDNA', '加接头克隆', '反映表达谱（无内含子 / 调控区）'], '发现基因 · 克隆表达序列 · 差异筛选（消减杂交）', 'mRNA', C.rna],
  ]
  libs.forEach(([title, tc, fl, steps, note, , st], li) => {
    const x = 46 + li * 316
    b.tag(x + 60, 796, title, { fill: fl, stroke: st, size: 13, weight: 700, tfill: tc, pad: 9 })
    steps.forEach((s, i) => {
      const y = 810 + i * 32
      b.rect(x, y, 286, 26, { fill: '#ffffff', stroke: st, sw: 1.3, rx: 6 })
      b.ctext(x + 143, y + 17, s, { size: 11.5, fill: C.sub })
      if (i < 3) b.arrow(x + 143, y + 27, x + 143, y + 31, { stroke: st, sw: 1.6, marker: li === 0 ? 'dna' : 'rna' })
    })
    b.wtext(x, 946, note, { size: 10.5, fill: C.mute, maxW: 286 })
  })

  // ============ 五、表达系统（右下） ============
  b.panel(710, 756, 660, 204, { title: '五、表达系统：按翻译后修饰需求在原核至哺乳动物间选择' })
  const sys = [
    ['E. coli', '快 · 廉价；无翻译后修饰'],
    ['酵母', '部分糖基化'],
    ['昆虫杆状病毒', '高表达量'],
    ['哺乳动物细胞', '正确折叠与修饰'],
  ]
  sys.forEach(([name, feat], i) => {
    const x = 740 + i * 148
    const top = 882 - i * 26
    b.rect(x, top, 138, 934 - top, { fill: i % 2 ? C.accL : C.dnaL, stroke: i % 2 ? C.acc : C.dna, sw: 1.6, rx: 6 })
    b.ctext(x + 69, top + 20, name, { size: 12, weight: 700, fill: i % 2 ? C.accD : C.dnaD })
    b.ctext(x + 69, top + 38, feat, { size: 9.5, fill: C.sub })
  })
  b.text(740, 950, '翻译后修饰需求递增 →　重组人胰岛素（1982）· 生长激素等经「分子克隆 → 生物制药」路线产业化', { size: 10.5, fill: C.mute })
}

export default scene({
  title: '分子克隆与基因文库',
  subtitle: '酶切—连接—转化—筛选的克隆范式：EcoRI 黏性末端、载体容量阶梯、蓝白斑筛选与两类文库',
  draw,
})
