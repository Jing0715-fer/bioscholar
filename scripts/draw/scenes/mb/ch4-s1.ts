// mb ch4-s1 原核 RNA 聚合酶与启动子结构（39-b2 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RNAP 亚基组成 ============
  b.panel(30, 132, 660, 300, { title: '一、大肠杆菌 RNA 聚合酶：核心酶 + σ 因子' })
  // 核心酶亚基堆叠
  b.ellipse(210, 264, 140, 62, { fill: C.panelB, stroke: C.line, sw: 1.6 })
  b.rect(96, 240, 56, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(124, 261, 'α', { size: 16, weight: 700, fill: C.proD })
  b.rect(160, 240, 56, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  b.ctext(188, 261, 'α', { size: 16, weight: 700, fill: C.proD })
  b.rect(118, 286, 96, 40, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(166, 311, 'β', { size: 16, weight: 700, fill: C.accD })
  b.rect(224, 286, 96, 40, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 6 })
  b.ctext(272, 311, 'β′', { size: 16, weight: 700, fill: C.accD })
  b.rect(200, 336, 40, 22, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 5 })
  b.ctext(220, 351, 'ω', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(210, 192, '核心酶 α₂ββ′ω（约 400 kDa）', { size: 13.5, weight: 700, fill: C.ink })
  // σ 因子
  b.rect(380, 250, 96, 56, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 8 })
  b.ctext(428, 276, 'σ 因子', { size: 15, weight: 700, fill: C.enzD })
  b.ctext(428, 294, '（σ⁷⁰，rpoD）', { size: 10.5, fill: C.mute })
  b.arrow(352, 278, 376, 278, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.text(360, 262, '+', { size: 15, weight: 700, fill: C.enzD })
  b.ctext(428, 234, '全酶 α₂ββ′ωσ', { size: 13, weight: 700, fill: C.enzD })
  const roles = [
    ['α', '组装酶骨架；α-CTD 识别 UP 元件'],
    ['β / β′', '共同构成催化中心（活性中心含双 Mg²⁺）'],
    ['ω', '辅助 β′ 稳定折叠'],
    ['σ⁷⁰', '识别启动子、降低非特异结合；起始后释放'],
  ]
  roles.forEach(([t, s], i) => {
    b.text(486, 216 + i * 34, t, { size: 12, weight: 700, fill: C.ink })
    b.wtext(528, 216 + i * 34, s, { size: 10.5, fill: C.sub, maxW: 150, lh: 14 })
  })
  // 利福平
  b.tag(200, 386, '利福平结合 β 亚基——阻断起始后头几个核苷酸的合成', { fill: C.badL, stroke: C.bad, size: 11, weight: 700, tfill: '#991b1b', pad: 8 })
  b.ctext(478, 386, 'σ⁷⁰ 浓度远低于核心酶：可循环利用的起始因子', { size: 11, fill: C.mute })

  // ============ 二、启动子核心元件 ============
  b.panel(710, 132, 660, 300, { title: '二、启动子核心元件：分散的短保守序列' })
  // 位置刻度
  const px = 730, pw = 620
  b.arrow(px, 226, px + pw, 226, { stroke: C.sub, sw: 2, marker: 'ink' })
  const pos: [number, string][] = [[px + 60, '-60'], [px + 160, '-35'], [px + 330, '-10'], [px + 470, '+1']]
  pos.forEach(([x, s]) => {
    b.line(x, 218, x, 234, { stroke: C.sub, sw: 1.6 })
    b.ctext(x, 210, s, { size: 11.5, weight: 700, fill: C.sub })
  })
  // 元件盒
  b.rect(px + 10, 244, 110, 30, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
  b.ctext(px + 65, 264, 'UP 元件', { size: 11.5, weight: 700, fill: C.proD })
  b.rect(px + 130, 244, 100, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 5 })
  b.ctext(px + 180, 264, 'TTGACA', { size: 11.5, weight: 700, fill: C.dnaD })
  b.rect(px + 240, 244, 120, 30, { fill: C.panelB, stroke: C.faint, sw: 1.4, rx: 5 })
  b.ctext(px + 300, 264, '间隔 17 bp', { size: 11, weight: 700, fill: C.sub })
  b.rect(px + 370, 244, 100, 30, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 5 })
  b.ctext(px + 420, 264, 'TATAAT', { size: 11.5, weight: 700, fill: C.dnaD })
  b.circle(px + 470, 259, 5, { fill: C.ink })
  b.ctext(px + 470, 288, '起始点', { size: 10.5, fill: C.mute })
  // 功能标注
  const anno: [number, string, string][] = [
    [px + 65, 'α-CTD 结合', '-40～-60 · AT 富集'],
    [px + 180, 'σ 因子 4 结构域识别', '-35 区（Sextama 盒）'],
    [px + 300, '15～19 bp（最佳 17）', '两元件相位（螺旋转角）匹配'],
    [px + 420, 'AT 富集利于解链', '-10 区 Pribnow 盒 → 开放复合物'],
  ]
  anno.forEach(([x, t, s], i) => {
    const up = i % 2 === 0
    b.line(x, up ? 244 : 274, x, up ? 196 : 320, { stroke: C.faint, sw: 1.2 })
    b.ctext(x, up ? 188 : 332, t, { size: 11, weight: 700, fill: C.ink })
    b.ctext(x, up ? 172 : 350, s, { size: 10, fill: C.mute })
  })
  b.wtext(730, 396, '突变与足迹实验确立上述共有元件；-35 与 -10 越接近共有序列、间隔越接近 17 bp，启动子越强。-1 弱化嘌呤偏好与 +1 嘌呤也影响起始效率。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 三、σ 循环与化学逻辑 ============
  b.panel(30, 452, 660, 280, { title: '三、σ 因子循环与转录的化学逻辑' })
  // 循环
  const cyc: [number, number, string][] = [
    [110, 520, '全酶结合启动子'],
    [300, 520, '起始 · 开放复合物'],
    [300, 640, '核心酶延伸'],
    [110, 640, 'σ 再循环'],
  ]
  cyc.forEach(([x, y, s], i) => {
    b.rect(x - 70, y - 22, 140, 44, { fill: i === 3 ? C.enzL : C.panelB, stroke: i === 3 ? C.enz : C.line, sw: 1.6, rx: 8 })
    b.ctext(x, y + 5, s, { size: 12, weight: 600, fill: i === 3 ? C.enzD : C.sub })
  })
  b.arrow(182, 520, 228, 520, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.text(290, 584, '合成约 10 nt 后 σ 释放', { size: 10.5, weight: 700, fill: C.enzD, anchor: 'end' })
  b.arrow(300, 544, 300, 616, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(228, 640, 182, 640, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(110, 616, 110, 544, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 化学要点
  const chem = [
    '· 模板阅读方向 3′→5′，新生 RNA 5′→3′ 延伸',
    '· 底物为四种 NTP（ATP / GTP / CTP / UTP）',
    '· 首个核苷酸常保留 5′-三磷酸',
    '· RNA-DNA 杂交双链约 8～9 bp；转录泡约 12～14 bp',
  ]
  b.wtext(420, 500, chem.join(''), { size: 11.5, fill: C.sub, maxW: 250, lh: 26 })
  b.text(420, 620, '延伸由核心酶独立完成；化学逻辑与复制一致。', { size: 11, fill: C.mute })

  // ============ 四、元件表与足迹法 ============
  b.panel(710, 452, 660, 280, { title: '四、启动子元件速查与足迹法证据' })
  b.table(730, 496, 620, {
    headers: ['元件', '位置', '共有序列', '功能'],
    colW: [150, 110, 140, 220],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['-35 区', '-35', 'TTGACA', 'σ 区域 4 识别，闭合复合物'],
      ['-10 区', '-10', 'TATAAT', 'AT 富集，开放复合物'],
      ['间隔区', '两元件间', '15～19 bp', '相位匹配（最佳 17）'],
      ['UP 元件', '-40～-60', 'AT 富集', 'α-CTD 结合增强转录'],
    ],
  })
  b.text(730, 682, '足迹法（DNase I footprinting）：全酶结合范围约 -55～+20', { size: 12, weight: 700, fill: C.ink })
  b.wtext(730, 704, '启动子-down 突变削弱起始、up 突变增强起始——定量各元件贡献的遗传学证据。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 五、真核回望 ============
  b.panel(30, 752, 1340, 218, { title: '五、组织原则的普适性：从大肠杆菌到真核' })
  const comp: [string, string, string][] = [
    ['原核', '单个 RNAP + 替换 σ 因子', '识别不同启动子家族，实现转录程序切换'],
    ['真核', '三类 RNA pol 分工（pol I / II / III）', '机器分化替代 σ 替换，调控层叠加（第 4 节）'],
    ['共同原则', '「分散的短保守元件」组织启动子', '真核启动子结构远为多样，但该组织原则贯穿始终'],
  ]
  comp.forEach(([t, s, d], i) => {
    const x = 60 + i * 430
    b.rect(x, 800, 400, 100, { fill: i === 2 ? C.dnaL : C.panelB, stroke: i === 2 ? C.dna : C.line, sw: 1.6, rx: 10, fillOp: 0.6 })
    b.ctext(x + 200, 826, t, { size: 14.5, weight: 700, fill: i === 2 ? C.dnaD : C.ink })
    b.wtext(x + 200, 850, s, { size: 12, weight: 600, fill: C.sub, maxW: 372, lh: 17, anchor: 'middle' })
    b.wtext(x + 200, 884, d, { size: 11, fill: C.mute, maxW: 372, lh: 15, anchor: 'middle' })
  })
  b.text(60, 940, '核心酶通用而 σ 因子可替换——不同 σ 识别不同启动子家族，是原核转录程序切换的全局开关（详见第 7 章）。', { size: 11, fill: C.mute })
}

export default scene({
  title: '原核 RNA 聚合酶与启动子结构',
  subtitle: '核心酶 α₂ββ′ω（约 400 kDa）加入 σ⁷⁰ 组成全酶方具特异起始——启动子由 -35（TTGACA）、间隔约 17 bp 与 -10 Pribnow 盒（TATAAT）等分散短元件构成',
  draw,
})
