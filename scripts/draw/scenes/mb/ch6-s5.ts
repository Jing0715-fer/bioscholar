// mb ch6-s5 蛋白质靶向转运与抗生素的作用靶点（39-b2 收尾轮）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、信号假说：ER 共翻译转运 ============
  b.panel(30, 132, 1340, 316, { title: '一、信号假说（Blobel，1999 年诺贝尔奖）：ER 共翻译转运' })
  const badge = (x: number, y: number, n: string) => {
    b.circle(x, y, 11, { fill: C.ink })
    b.ctext(x, y + 4, n, { size: 11, weight: 700, fill: '#ffffff' })
  }
  // —— 相 A：游离核糖体 + SRP 结合 ——
  b.ribo(150, 252, { scale: 1.4 })
  b.line(60, 296, 250, 296, { stroke: C.rna, sw: 2.5 })
  b.ctext(155, 312, 'mRNA', { size: 9.5, fill: C.rnaD })
  b.line(174, 254, 330, 254, { stroke: C.mute, sw: 4 })
  b.rect(178, 242, 56, 24, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 4 })
  b.ctext(206, 258, '信号肽', { size: 10, weight: 700, fill: '#991b1b' })
  b.rect(262, 192, 196, 40, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(360, 216, 'SRP（7SL RNA + 6 蛋白）', { size: 11, weight: 700, fill: C.rnaD })
  b.arrow(320, 232, 240, 246, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.tag(310, 290, '翻译暂停', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 7 })
  badge(84, 232, '1')
  badge(276, 176, '2')
  // —— 相 B：对接 SRP 受体 ——
  b.arrow(462, 212, 836, 212, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.wtext(470, 200, '③ 对接：双方各水解 1 分子 GTP', { size: 10.5, weight: 600, fill: C.sub, maxW: 350, lh: 14 })
  b.rect(838, 192, 96, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(886, 206, 'SRP 受体', { size: 11, weight: 700, fill: C.proD })
  b.ctext(886, 222, '（SRα / SRβ）', { size: 9.5, fill: C.sub })
  // —— 相 C：ER 膜 + Sec61 易位 ——
  b.rect(978, 180, 372, 216, { fill: C.panelB, stroke: C.line, sw: 1.2 })
  b.ctext(1164, 202, 'ER 腔（内质网腔）', { size: 12, weight: 700, fill: C.accD })
  b.line(952, 190, 952, 386, { stroke: C.dna, sw: 1.5, opacity: 0.7 })
  b.line(976, 190, 976, 386, { stroke: C.dna, sw: 1.5, opacity: 0.7 })
  for (let y = 190; y <= 386; y += 24) {
    b.circle(952, y, 5.5, { fill: C.dna, fillOp: 0.85 })
    b.circle(976, y, 5.5, { fill: C.dna, fillOp: 0.85 })
  }
  b.ctext(964, 408, 'ER 膜', { size: 10, fill: C.mute })
  b.rect(942, 256, 40, 100, { fill: '#ffffff', stroke: C.pro, sw: 2.2, rx: 5 })
  b.ctext(962, 248, 'Sec61', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(962, 372, '易位子', { size: 9.5, fill: C.proD })
  b.ribo(962, 228, { scale: 1.15 })
  b.arrow(886, 234, 938, 250, { stroke: C.pro, sw: 2, marker: 'pro' })
  badge(906, 252, '4')
  b.polyline([[948, 238], [962, 258], [962, 352], [1016, 366], [1104, 366]], { stroke: C.enz, sw: 3.5 })
  b.rect(950, 300, 24, 20, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 3 })
  b.ctext(962, 314, 'S', { size: 9, weight: 700, fill: '#991b1b' })
  badge(1010, 330, '5')
  b.tag(1075, 244, '信号肽酶（切除信号肽）', { fill: C.enzL, stroke: C.enz, size: 10, weight: 700, tfill: C.enzD, pad: 7 })
  b.arrow(1075, 258, 980, 300, { stroke: C.enz, sw: 1.8, marker: 'enz', dash: '5 4' })
  badge(1180, 244, '6')
  b.ellipse(1200, 340, 62, 36, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(1200, 336, '可溶性蛋白', { size: 11.5, weight: 700, fill: '#065f46' })
  b.ctext(1200, 354, '（折叠·后续分泌）', { size: 9.5, fill: C.mute })
  b.arrow(1104, 362, 1140, 354, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.wtext(996, 392, '跨膜蛋白：终止转移序列 + 易位子侧口 → 多次穿膜', { size: 9.5, fill: C.sub, maxW: 330, lh: 13 })
  // 流程图注（两栏）
  const cap1 = [
    '① 新生肽 N 端信号肽（15～30 aa：碱性 N 段·疏水核心·小氨基酸切割位）自核糖体露出',
    '② SRP（7SL RNA + 6 蛋白）识别信号肽，翻译暂停',
    '③ SRP 对接 ER 膜上的 SRP 受体（SRα / SRβ）——双方各水解 1 分子 GTP',
  ]
  const cap2 = [
    '④ 核糖体-新生肽转交 Sec61 易位子',
    '⑤ 翻译在 ER 腔面继续——肽链边合成边穿膜（共翻译转运）',
    '⑥ 信号肽酶切除信号肽：可溶性蛋白入腔；跨膜蛋白多次穿膜',
  ]
  cap1.forEach((s, i) => b.wtext(56, 396 + i * 16, s, { size: 10.5, fill: C.sub, maxW: 630, lh: 15 }))
  cap2.forEach((s, i) => b.wtext(716, 396 + i * 16, s, { size: 10.5, fill: C.sub, maxW: 630, lh: 15 }))

  // ============ 二、翻译后转运的三条路线 ============
  b.panel(30, 468, 1340, 214, { title: '二、翻译后转运：线粒体 · 过氧化物酶体 · 细胞核' })
  const box = (x: number, y: number, w: number, s: string, fill: string, stroke: string, size = 10.5) => {
    b.rect(x, y, w, 34, { fill, stroke, sw: 1.6, rx: 6 })
    b.ctext(x + w / 2, y + 21, s, { size, weight: 600, fill: stroke })
  }
  // ① 线粒体
  b.text(46, 516, '① 线粒体输入', { size: 12.5, weight: 700, fill: C.ink })
  box(46, 528, 186, '前导肽（N 端·富 Arg/Ser）', C.warnL, '#9a3412')
  b.arrow(232, 545, 254, 545, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  box(254, 528, 120, 'TOM 复合体', C.warnL, '#9a3412')
  b.arrow(314, 562, 151, 578, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  box(46, 578, 210, 'TIM23 + PAM（mtHsp70 电机）', C.warnL, '#9a3412', 9.5)
  b.arrow(256, 595, 280, 595, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  box(280, 578, 196, '基质：MPP 切除前导肽', C.okL, '#065f46')
  // ② 过氧化物酶体
  b.text(480, 516, '② 过氧化物酶体输入', { size: 12.5, weight: 700, fill: C.ink })
  box(480, 528, 170, 'C 端 PTS1（Ser-Lys-Leu）', C.accL, C.accD, 9.5)
  b.arrow(650, 545, 676, 545, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  box(676, 528, 160, 'Pex5 / Pex7 受体', C.accL, C.accD)
  b.arrow(756, 562, 575, 578, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  box(480, 578, 190, 'peroxin 复合体（受体可循环）', C.accL, C.accD, 9.5)
  b.arrow(670, 595, 696, 595, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  box(696, 578, 140, '催化酶等整体进入', C.okL, '#065f46', 9.5)
  // ③ 细胞核
  b.text(900, 516, '③ 细胞核输入', { size: 12.5, weight: 700, fill: C.ink })
  box(900, 528, 210, 'NLS 碱性簇（SV40 大 T：PKKRRKV）', C.proL, C.proD, 9.5)
  b.arrow(1110, 545, 1134, 545, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  box(1134, 528, 160, 'importin α / β', C.proL, C.proD)
  b.arrow(1214, 562, 1005, 578, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  box(900, 578, 210, '经核孔复合体（NPC）入核', C.proL, C.proD)
  b.arrow(1110, 595, 1134, 595, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  box(1134, 578, 160, 'Ran-GTP 供方向性', C.okL, '#065f46', 9.5)
  b.wtext(46, 652, '细菌输出：Sec（SRP–SecA 推动）与 Tat（已折叠蛋白跨膜）途径输出周质蛋白——与真核 ER 途径同源，显示分泌机器的演化保守性。', { size: 11, fill: C.sub, maxW: 1290, lh: 15 })

  // ============ 三、抗生素与毒素的选择性打击 ============
  b.panel(30, 702, 1340, 278, { title: '三、抗生素与毒素：翻译机器各环节的选择性抑制剂' })
  b.table(56, 750, 1000, {
    headers: ['药物 / 毒素', '靶点', '机制', '谱'],
    colW: [140, 200, 580, 80],
    rowH: 24,
    fontSize: 10.5,
    rows: [
      ['链霉素', '30S S12 / 16S', '高浓度诱导错读（初始校正失效）；低浓度抑制起始', '原核'],
      ['四环素', '30S A 位', '阻断氨酰-tRNA 进位', '原核'],
      ['氯霉素', '50S PTC', '抑制肽酰转移酶中心（肽键形成）', '原核'],
      ['红霉素', '50S 出口通道', '堵塞新生肽离开通道', '原核'],
      ['嘌呤霉素', 'A 位（氨酰-腺苷类似物）', '接受肽酰基后脱落——肽链提前释放', '原核 + 真核'],
      ['环己酰亚胺', '60S', '抑制真核转位步骤', '真核'],
      ['白喉毒素', 'eEF2（白喉酰胺残基）', 'ADP 核糖基化使延伸瘫痪', '真核'],
    ],
  })
  b.text(1080, 768, '机制旁注', { size: 12, weight: 700, fill: C.ink })
  b.wtext(1080, 788, '嘌呤霉素是 3′ 端「分子仿冒品」：氨酰-腺苷类似物接受肽酰基后脱落，证明肽键转移的化学本质——酯酰基向游离氨基转移。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
  b.wtext(1080, 852, '链霉素的耳毒性（结合线粒体核糖体）提示翻译机器同源性的另一面；白喉毒素把 NAD⁺ 的 ADP 核糖基转移到 eEF2——单分子毒素使延伸瘫痪，反证延伸因子的必需性。', { size: 10.5, fill: C.sub, maxW: 250, lh: 15 })
}

export default scene({
  title: '蛋白质靶向转运与抗生素的作用靶点',
  subtitle: '信号肽（15～30 aa）—SRP—SRP 受体（各水解 1 GTP）—Sec61 构成 ER 共翻译转运轴心（1999 年诺奖）；线粒体 TOM/TIM、过氧化物酶体 PTS1（SKL）、细胞核 NLS 三条翻译后路线；链霉素错读、四环素阻进位、氯霉素抑 PTC、红霉素堵通道、嘌呤霉素提前释放',
  draw,
})
