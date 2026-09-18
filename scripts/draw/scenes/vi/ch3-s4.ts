// vi ch3-s4 基因组的策略性组织（39-j 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、重叠基因：极限压缩 ============
  b.panel(30, 132, 660, 400, { title: '一、重叠基因：小基因组的极限压缩' })
  // φX174 环形基因图
  const arc = (cx: number, cy: number, r: number, a1: number, a2: number, stroke: string) => {
    const rad = (d: number) => (d * Math.PI) / 180
    const p1 = [cx + r * Math.cos(rad(a1)), cy + r * Math.sin(rad(a1))]
    const p2 = [cx + r * Math.cos(rad(a2)), cy + r * Math.sin(rad(a2))]
    b.path(`M ${p1[0].toFixed(1)},${p1[1].toFixed(1)} A ${r},${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`, { fill: 'none', stroke, sw: 11 })
  }
  const cx0 = 170, cy0 = 262, R = 72, R2 = 52
  arc(cx0, cy0, R, -90, 25, C.dna)      // A
  arc(cx0, cy0, R, 30, 70, C.dna)       // C
  arc(cx0, cy0, R, 75, 160, C.dna)      // D
  arc(cx0, cy0, R, 165, 205, C.dna)     // F
  arc(cx0, cy0, R, 210, 250, C.dna)     // G
  arc(cx0, cy0, R, 255, 268, C.dna)     // H
  arc(cx0, cy0, R2, -70, -25, C.rna)    // B 嵌于 A
  arc(cx0, cy0, R2, 95, 135, C.rna)     // E 嵌于 D
  arc(cx0, cy0, R2, 38, 58, C.rna)      // K
  b.ctext(cx0 - 52, cy0 - 62, 'A', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(cx0 + 86, cy0 - 24, 'C', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(cx0 + 62, cy0 + 66, 'D', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(cx0 - 78, cy0 + 34, 'F', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(cx0 - 52, cy0 - 6, 'G', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(cx0 + 52, cy0 - 58, 'H', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(cx0 + 2, cy0 - 2, 'B', { size: 11, weight: 700, fill: C.rna })
  b.ctext(cx0 + 8, cy0 + 42, 'E', { size: 11, weight: 700, fill: C.rna })
  b.ctext(cx0 + 46, cy0 + 6, 'K', { size: 11, weight: 700, fill: C.rna })
  b.ctext(cx0, cy0 + 108, 'φX174', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(290, 196, '1977 年桑格完成史上第一个基因组全序列：φX174 共 5,386 nt。', { size: 11, weight: 700, fill: C.ink, maxW: 370, lh: 16 })
  b.wtext(290, 236, '按已知蛋白数推算，基因总长超出基因组长度——答案是 B 嵌于 A、E 嵌于 D：5.4 kb 由此容纳 11 个基因，「一寸核酸两寸用」。', { size: 11, fill: C.sub, maxW: 370, lh: 16 })
  b.legend(290, 320, [['外圈基因', C.dna], ['嵌套基因（B／E／K）', C.rna]], { size: 10.5, gap: 12 })
  // HBV 四阅读框
  b.text(50, 372, 'HBV 约 3.2 kb：四个阅读框广泛重叠', { size: 12.5, weight: 700, fill: C.ink })
  const frames: [string, number, number, string][] = [
    ['X', 130, 290, C.acc], ['P（最长）', 210, 660, C.bad],
    ['S', 280, 470, C.dna], ['C', 500, 615, C.pro],
  ]
  b.rect(210, 388, 80, 88, { fill: C.badL, fillOp: 0.3 })
  b.rect(280, 388, 190, 88, { fill: C.badL, fillOp: 0.3 })
  b.rect(500, 388, 115, 88, { fill: C.badL, fillOp: 0.3 })
  frames.forEach(([nm, x1, x2, c], i) => {
    const by = 392 + i * 26
    b.etext(122, by + 13, nm, { size: 10.5, weight: 700, fill: c === C.bad ? C.bad : c })
    b.rect(x1, by, x2 - x1, 16, { fill: c + '22', stroke: c, sw: 1.5, rx: 4 })
  })
  b.ctext(400, 508, '阴影＝与 P 基因重叠：P 与 S、C、X 皆部分重叠', { size: 10.5, fill: C.mute })

  // ============ 二、基因排列＝表达时序的耦合 ============
  b.panel(710, 132, 660, 400, { title: '二、基因组的物理次序常即表达时序' })
  b.text(730, 184, '负链 RNA 病毒：3′ 起始的转录梯度', { size: 12.5, weight: 700, fill: C.ink })
  for (let i = 0; i < 5; i++) b.rect(730 + i * 124, 200, 116, 14, { fill: C.badL, stroke: C.bad, sw: 1.3, rx: 3 })
  b.ctext(730, 190 - 10, '3′', { size: 11, weight: 700, fill: C.bad })
  b.ctext(1345, 180, '5′', { size: 11, weight: 700, fill: C.bad })
  const lens = [110, 92, 74, 56, 38]
  lens.forEach((L, i) => {
    b.rect(730, 232 + i * 20, L, 12, { fill: C.rnaL, stroke: C.rna, sw: 1.2 })
    if (i < 4) b.arrow(730 + L + 4, 238 + i * 20, 730 + lens[i + 1] + 24, 238 + i * 20 + 16, { stroke: C.faint, sw: 1 })
  })
  b.ctext(730 + 124, 330, '基因排位靠 3′ → 转录本越多（转录梯度）', { size: 10.5, fill: C.mute })
  b.text(730, 360, 'T7 噬菌体：自左向右的时序分区', { size: 12.5, weight: 700, fill: C.ink })
  const zones: [string, string][] = [['早：接管宿主', C.dna], ['中：复制', C.rna], ['晚：结构与装配', C.pro]]
  zones.forEach(([nm, c], i) => {
    b.rect(730 + i * 207, 376, 199, 30, { fill: c + '22', stroke: c, sw: 1.5, rx: 6 })
    b.ctext(829 + i * 207, 396, nm, { size: 11.5, weight: 700, fill: c })
  })
  b.arrow(730, 428, 1350, 428, { stroke: C.mute, sw: 1.8, marker: 'mute' })
  b.ctext(1040, 448, '表达沿基因组自左向右推进', { size: 10.5, fill: C.mute })
  b.text(730, 480, '冠状病毒：复制酶基因排在最前', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(730, 492, 410, 20, { fill: C.rnaL, stroke: C.rna, sw: 1.5 })
  b.ctext(935, 506, '复制酶基因（约占 5′ 端三分之二）', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(1140, 492, 210, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.ctext(1245, 506, '结构与辅助基因', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(935, 530, '先造复制机器、再造结构部件', { size: 10.5, fill: C.mute })

  // ============ 三、IRES：不依赖帽的翻译开关 ============
  b.panel(30, 556, 660, 424, { title: '三、IRES：不依赖帽的翻译开关' })
  b.text(50, 616, '帽依赖翻译（宿主常规）：', { size: 12.5, weight: 700, fill: C.ink })
  b.circle(66, 664, 9, { fill: C.warn, stroke: C.warn, sw: 1 })
  b.ctext(66, 690, '5′ 帽', { size: 10, fill: C.mute })
  b.line(78, 664, 260, 664, { stroke: C.rna, sw: 3 })
  b.ctext(170, 690, 'mRNA', { size: 10, fill: C.rna })
  b.rect(250, 648, 60, 18, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 5 })
  b.ctext(280, 661, 'eIF4E', { size: 10, weight: 700, fill: C.proD })
  b.ribo(330, 664, { scale: 0.9 })
  b.arrow(300, 664, 312, 664, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.ctext(330, 700, '40S 扫描至 AUG', { size: 10, fill: C.mute })
  b.text(50, 748, 'IRES 起始（小 RNA 病毒等）：', { size: 12.5, weight: 700, fill: C.ink })
  b.stemLoop(90, 800, { h: 42, r: 14, stroke: C.rna })
  b.stemLoop(130, 800, { h: 30, r: 11, stroke: C.rna })
  b.line(150, 800, 300, 800, { stroke: C.rna, sw: 3 })
  b.ctext(200, 826, 'IRES（5′ 非翻译区结构）', { size: 10, fill: C.rna })
  b.ribo(240, 760, { scale: 0.9 })
  b.arrow(240, 744, 240, 726, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.ctext(240, 712, '直接募集 40S 亚基', { size: 10, weight: 700, fill: C.rna })
  b.text(360, 620, '无需帽、无需扫描：', { size: 12, weight: 700, fill: C.ink })
  b.wtext(360, 646, 'IRES 的发现（1988 年前后）改写了「帽为翻译必需」的教条。', { size: 11, fill: C.sub, maxW: 288, lh: 16 })
  b.wtext(360, 694, '宿主翻译被关闭后，病毒经 IRES 独享核糖体——关闭宿主、自己接着翻译。', { size: 11, fill: C.sub, maxW: 288, lh: 16 })
  b.wtext(360, 742, 'HCV 的 IRES 直接募集 40S 亚基，不经 eIF4E。', { size: 11, fill: C.sub, maxW: 288, lh: 16 })
  b.wtext(360, 790, '5′ 非翻译区由此成为基因组上信息密度最高的区段：复制起点、翻译开关、衣壳识别信号常在此叠床架屋。', { size: 11, fill: C.mute, maxW: 288, lh: 16 })
  b.wtext(50, 880, '含义：小基因组不止靠重叠基因省空间，还把「说明书」写进 RNA 的二级结构里。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、冠状病毒的嵌套亚基因组转录 ============
  b.panel(710, 556, 660, 424, { title: '四、冠状病毒：TRS 介导的嵌套亚基因组转录' })
  b.rect(730, 616, 26, 18, { fill: C.rna, stroke: C.rnaD, sw: 1 })
  b.ctext(743, 644, '前导', { size: 9.5, fill: C.rna })
  b.rect(756, 616, 414, 18, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.ctext(963, 629, '复制酶基因（约 30 kb 的三分之二）', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(1170, 616, 180, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
  b.ctext(1260, 629, '结构／辅助基因', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(730, 604, '5′', { size: 11, weight: 700, fill: C.ink })
  b.ctext(1350, 604, '3′', { size: 11, weight: 700, fill: C.ink })
  const sgs = [90, 150, 210, 270, 330]
  sgs.forEach((L, i) => {
    const ly = 676 + i * 26
    b.rect(760, ly, 26, 12, { fill: C.rna, stroke: C.rnaD, sw: 1 })
    b.rect(786, ly, L, 12, { fill: C.dnaL, stroke: C.dna, sw: 1.2 })
    b.line(786, ly - 4, 786, ly + 16, { stroke: C.enz, sw: 1.2, dash: '3 3' })
    b.ctext(800 + L, ly + 10, i === 0 ? '最短 sg mRNA' : i === 4 ? '最长 sg mRNA' : '', { size: 9.5, fill: C.mute })
  })
  b.tag(1010, 830, 'TRS（转录调节序列）介导不连续转录', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 10 })
  b.wtext(730, 880, '十余条嵌套亚基因组 mRNA 共享同一段 5′ 前导、3′ 端彼此嵌套；每条近单顺反子——先表达复制酶、再按需表达结构蛋白。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 924, 'LTR、ψ 与 DIS、cos、att、ITR、TRS、复制起点等顺式元件密集分布于基因组两端，构成复制、包装、整合与表达的全套指令。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '基因组的策略性组织：重叠基因、时序排布与嵌套转录',
  subtitle: 'φX174 以 5,386 nt 容纳 11 个基因（B 嵌于 A、E 嵌于 D）；HBV 四阅读框重叠；IRES 赋予帽独立性；冠状病毒经 TRS 产生共享前导的嵌套 sg mRNA',
  draw,
})
