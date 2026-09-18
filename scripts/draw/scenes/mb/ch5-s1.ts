// mb ch5-s1 mRNA 5′ 加帽与 3′ 多聚腺苷酸化（39-b2 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、5′ 加帽三步 ============
  b.panel(30, 132, 700, 300, { title: '一、5′ 加帽：新生 RNA 约 20～25 nt 时即启动' })
  // RNA 链
  b.rnaW(70, 196, 560, { amp: 9, stroke: C.rna })
  b.text(70, 172, '5′ 端（新生链）', { size: 11, fill: C.rnaD })
  b.etext(648, 172, '3′', { size: 11, fill: C.rnaD })
  // 三步酶
  const steps: [string, string, string][] = [
    ['① RNA 三磷酸酶（RTPase）', '去除新生链 5′-端 γ-磷酸基团', C.proL, C.proD],
    ['② 鸟苷酰转移酶', 'GMP 以 5′→5′ 三磷酸桥异常连接加入', C.accL, C.accD],
    ['③ 甲基转移酶', '修饰鸟嘌呤 N⁷ 位生成 m⁷G 帽（cap 0）', C.enzL, C.enzD],
  ]
  steps.forEach(([t, s, fl, st], i) => {
    const x = 60 + i * 214
    b.rect(x, 224, 200, 60, { fill: fl as string, stroke: C.line, sw: 1.4, rx: 8 })
    b.text(x + 12, 246, t, { size: 11, weight: 700, fill: st as string })
    b.wtext(x + 12, 264, s as string, { size: 10, fill: C.sub, maxW: 178, lh: 14 })
    if (i < 2) b.arrow(x + 202, 254, x + 212, 254, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  // 帽结构
  b.text(70, 320, '帽结构：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(150, 306, 44, 24, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 4 })
  b.ctext(172, 322, 'm⁷G', { size: 12, weight: 700, fill: C.enzD })
  b.text(198, 322, '—', { size: 13, fill: C.sub })
  b.text(212, 322, 'ppp', { size: 11, fill: C.sub })
  b.text(248, 322, '—', { size: 13, fill: C.sub })
  b.rect(262, 306, 36, 24, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
  b.ctext(280, 322, 'RNA', { size: 10.5, weight: 700, fill: C.rnaD })
  b.wtext(316, 314, '5′→5′ 三磷酸桥连接；cap 1 / cap 2 再由 2′-O-甲基转移酶甲基化首 1～2 个核苷酸核糖 2′-OH。', { size: 10.5, fill: C.sub, maxW: 400, lh: 15 })
  b.wtext(70, 366, '加帽酶由 CTD Ser5-P 招募，实现「合成与加工」零时差偶联；原核 mRNA 无帽结构。', { size: 11.5, fill: C.mute, maxW: 630, lh: 16 })

  // ============ 二、帽子功能 ============
  b.panel(750, 132, 620, 300, { title: '二、5′ 帽的四大功能' })
  const funcs: [string, string][] = [
    ['保护', '免遭 5′→3′ 外切酶降解'],
    ['翻译起始', '帽结合复合物 eIF4E 的识别标志（第 6 章）'],
    ['剪接促进', '促进第一个内含子的剪接与 mRNA 出核'],
    ['质量监控', '参与 mRNA 前体的正确加工与监视'],
  ]
  funcs.forEach(([t, s], i) => {
    const x = 770 + (i % 2) * 300
    const y = 186 + Math.floor(i / 2) * 84
    b.rect(x, y, 280, 68, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
    b.text(x + 14, y + 26, t, { size: 13.5, weight: 700, fill: C.ink })
    b.wtext(x + 14, y + 46, s, { size: 11, fill: C.sub, maxW: 252, lh: 15 })
  })
  b.wtext(770, 366, '加帽与加尾共同构成 mRNA 的「护照」，将其与转录副产品区别开来。', { size: 11.5, fill: C.mute, maxW: 580, lh: 16 })

  // ============ 三、3′ 加尾信号与切割 ============
  b.panel(30, 452, 700, 280, { title: '三、3′ 加尾：位点特异性切割 + poly(A) 聚合' })
  // RNA 与信号
  b.line(70, 520, 640, 520, { stroke: C.rna, sw: 2.4 })
  b.rect(90, 512, 90, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(135, 524, 'AAUAAA', { size: 9.5, weight: 700, fill: C.rnaD })
  b.rect(360, 512, 20, 16, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(370, 524, 'CA', { size: 9, weight: 700, fill: '#991b1b' })
  b.rect(430, 512, 130, 16, { fill: C.panelB, stroke: C.faint, sw: 1.4 })
  b.ctext(495, 524, 'GU-rich（DSE）', { size: 9.5, weight: 700, fill: C.sub })
  b.ctext(135, 546, '多聚腺苷酸化信号', { size: 10, fill: C.mute })
  b.ctext(370, 546, '切割位点', { size: 10, fill: C.bad })
  b.ctext(495, 546, '下游元件', { size: 10, fill: C.mute })
  b.ctext(135, 486, '上游 10～30 nt', { size: 10.5, weight: 700, fill: C.rnaD })
  b.line(100, 494, 170, 494, { stroke: C.faint, sw: 1.2, marker: 'mute', markerStart: 'mute' })
  // 因子
  b.ellipse(160, 576, 46, 18, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(160, 581, 'CPSF', { size: 10.5, weight: 700, fill: C.enzD })
  b.arrow(160, 558, 135, 530, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.ellipse(300, 576, 46, 18, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(300, 581, 'CstF', { size: 10.5, weight: 700, fill: C.proD })
  b.arrow(300, 558, 440, 530, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.wtext(396, 570, 'CPSF160/WDR33/CPSF30/Fip1 识别 AAUAAA；CstF64 结合 GU-rich 协助选择切割位点；CF I / CF II 参与组装与切割。', { size: 10.5, fill: C.sub, maxW: 256, lh: 15 })
  b.wtext(70, 644, '组蛋白 mRNA 例外：不以 poly(A) 结尾，而以茎环结构结尾。', { size: 11.5, fill: C.mute, maxW: 630, lh: 16 })

  // ============ 四、PAP 加尾动力学 ============
  b.panel(750, 452, 620, 280, { title: '四、PAP 加尾动力学与 poly(A) 功能' })
  const tsteps: [string, string][] = [
    ['切割后 PAP 缓慢加入约 10 个 A', ''],
    ['PABPN1 结合并刺激快速延伸', '至约 200 nt（200～250）'],
    ['胞质中 PABP 结合 poly(A)', '介导保护与翻译'],
  ]
  tsteps.forEach(([t, s], i) => {
    const y = 496 + i * 54
    b.rect(770, y, 400, 42, { fill: i === 1 ? C.rnaL : C.panelB, stroke: i === 1 ? C.rna : C.line, sw: 1.4, rx: 7 })
    b.text(784, y + 26, t, { size: 11.5, weight: 600, fill: C.sub })
    if (s) b.text(784 + 230, y + 26, s, { size: 11, fill: C.rnaD, weight: 700 })
    if (i < 2) b.arrow(970, y + 44, 970, y + 52, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.wtext(1190, 500, 'poly(A) 尾功能：稳定 mRNA；促进翻译起始（与 eIF4G 成环协同）；脱腺苷化是胞质 mRNA 降解的限速第一步。', { size: 10.5, fill: C.sub, maxW: 160, lh: 16 })
  b.wtext(770, 668, '末端借助 eIF4E-PABP 相互作用使 mRNA 环化，为高效翻译与质量监控奠定结构基础。', { size: 11, fill: C.mute, maxW: 580, lh: 15 })

  // ============ 五、机器速查表 ============
  b.panel(30, 752, 1340, 218, { title: '五、多聚腺苷酸化机器速查' })
  b.table(60, 796, 1280, {
    headers: ['因子', '亚基 / 组成', '功能'],
    colW: [220, 420, 640],
    rowH: 26,
    fontSize: 11,
    rows: [
      ['CPSF', 'CPSF160 / WDR33 / CPSF30 / Fip1', '识别 AAUAAA'],
      ['CstF', 'CstF64 等', '结合下游 GU-rich，协助选择切割位点'],
      ['CF I / CF II', '—', '切割因子，参与组装与切割'],
      ['PAP', '单体聚合酶', '切割后加 poly(A)'],
      ['PABPN1 / PABP', '—', '核内 / 胞质 poly(A) 结合蛋白，介导延伸至 200～250 nt 并保护尾巴'],
    ],
  })
}

export default scene({
  title: 'mRNA 5′ 加帽与 3′ 多聚腺苷酸化',
  subtitle: '三磷酸酶→鸟苷酰转移酶→甲基转移酶依次建成 5′→5′ 三磷酸桥的 m⁷G 帽（cap 0/1/2）；AAUAAA + GU-rich 指导 CPSF/CstF 在 CA 切割，PAP 经 PABPN1 刺激延伸至约 200 nt',
  draw,
})
