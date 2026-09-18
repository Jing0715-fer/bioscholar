// vi ch5-s4 逆转录与基因组整合（39-j 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、逆转录酶：一酶三役 ============
  b.panel(30, 132, 660, 430, { title: '一、逆转录酶：一酶三役、无校读' })
  b.ellipse(350, 300, 130, 92, { fill: C.enzL, stroke: C.enz, sw: 2.4 })
  b.ctext(350, 296, '逆转录酶 RT', { size: 15, weight: 700, fill: C.enzD })
  b.ctext(350, 320, '一个酶、三种活性', { size: 11, fill: C.sub })
  b.tag(180, 200, 'RNA 依赖 DNA 聚合酶', { fill: C.rnaL, stroke: C.rna, size: 10.5, tfill: C.rnaD, pad: 8 })
  b.line(210, 218, 270, 250, { stroke: C.rna, sw: 1.5 })
  b.tag(520, 200, 'RNase H', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.bad, pad: 8 })
  b.line(490, 218, 430, 250, { stroke: C.bad, sw: 1.5 })
  b.tag(350, 428, 'DNA 依赖 DNA 聚合酶', { fill: C.dnaL, stroke: C.dna, size: 10.5, tfill: C.dnaD, pad: 8 })
  b.line(350, 410, 350, 394, { stroke: C.dna, sw: 1.5 })
  b.wtext(50, 476, '三种活性接力：RNA →（−）DNA → 降解 RNA → 双链 DNA。无校读、高错误率——逆转录病毒的变异引擎。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 504, '负链由 tRNA 引发：禽类肉瘤病毒用宿主 tRNATrp，HIV-1 用 tRNALys3——tRNA 3′ 端约 18 nt 与 PBS 配对。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 二、两次链转移与 LTR 形成 ============
  b.panel(710, 132, 660, 430, { title: '二、两次链转移：把 U3-R-U5 复制成两端 LTR' })
  b.text(730, 190, '基因组 RNA 的地标：', { size: 11.5, weight: 700, fill: C.ink })
  const marks: [string, number, string][] = [
    ['R·U5', 730, C.rna], ['PBS', 830, C.pro], ['（基因区）', 900, C.mute], ['PPT', 1150, C.pro], ['U3·R', 1250, C.rna],
  ]
  b.line(730, 210, 1350, 210, { stroke: C.rna, sw: 3 })
  b.ctext(730, 232, '5′', { size: 10, weight: 700, fill: C.rna })
  b.ctext(1350, 232, '3′', { size: 10, weight: 700, fill: C.rna })
  marks.forEach(([nm, x, c]) => {
    b.ctext(x + 24, 196, nm, { size: 9.5, weight: 700, fill: c })
    b.line(x + 24, 202, x + 24, 210, { stroke: c, sw: 1.4 })
  })
  b.tag(830, 262, 'tRNA 结合', { fill: C.proL, stroke: C.pro, size: 9.5, tfill: C.proD, pad: 6 })
  b.tag(1180, 262, 'PPT 引正链', { fill: C.proL, stroke: C.pro, size: 9.5, tfill: C.proD, pad: 6 })
  b.text(730, 306, '两次链转移的接力：', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(730, 320, 170, 40, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 7 })
  b.ctext(815, 340, '（−）链强终止', { size: 10.5, weight: 700, fill: C.rnaD })
  b.ctext(815, 376, '第一次链转移：跳到 3′ 端', { size: 9.5, fill: C.mute })
  b.path('M 760,364 C 700,400 700,420 760,436', { fill: 'none', stroke: C.enz, sw: 1.8, dash: '5 4', marker: 'enz' })
  b.rect(790, 406, 170, 40, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 7 })
  b.ctext(875, 426, '（＋）链合成', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(875, 462, '第二次链转移：换模板到 5′ 端', { size: 9.5, fill: C.mute })
  b.path('M 960,426 C 990,426 990,336 960,336', { fill: 'none', stroke: C.enz, sw: 1.8, dash: '5 4', marker: 'enz' })
  b.rect(1010, 320, 130, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 7 })
  b.ctext(1075, 336, 'LTR', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(1075, 352, 'U3·R·U5', { size: 10, fill: C.dnaD })
  b.line(1010, 400, 1140, 400, { stroke: C.dna, sw: 3 })
  b.ctext(1075, 396, 'LTR', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(1075, 420, '（基因区）', { size: 9.5, fill: C.mute })
  b.ctext(1075, 444, 'LTR', { size: 9.5, weight: 700, fill: C.dnaD })
  b.line(1010, 424, 1140, 424, { stroke: C.dna, sw: 3 })
  b.wtext(1190, 336, '产物质病毒 DNA：两端 LTR 完整对称。', { size: 10.5, fill: C.sub, maxW: 160, lh: 15 })
  b.wtext(730, 504, '多嘌呤区（PPT）抗 RNase H 残留，充当正链引物；两次链转移使单拷贝的 U3-R-U5 复制成两端。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 三、整合酶的切割与连接 ============
  b.panel(30, 586, 660, 394, { title: '三、整合酶：两步转酯完成整合' })
  b.text(50, 646, '① 3′ 加工：', { size: 12, weight: 700, fill: C.ink })
  b.rect(130, 634, 200, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(230, 647, '病毒 DNA 末端（LTR）', { size: 9.5, fill: C.dnaD })
  b.rect(130, 634, 18, 18, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.ctext(139, 670, '切去 2 nt', { size: 9, fill: C.bad })
  b.text(380, 646, '② 链转移：', { size: 12, weight: 700, fill: C.ink })
  b.dna(380, 640, 260, { stroke: C.dna, amp: 8, period: 44 })
  b.ctext(510, 674, '宿主染色体 DNA', { size: 9.5, fill: C.mute })
  b.arrow(420, 620, 420, 632, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.arrow(600, 620, 600, 632, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(510, 612, '3′-OH 攻击相距 5 bp（HIV）的两处磷酸二酯键', { size: 9.5, weight: 700, fill: C.bad })
  b.text(50, 722, '③ 宿主修复缺口：', { size: 12, weight: 700, fill: C.ink })
  b.dna(170, 716, 380, { stroke: C.dna, amp: 9, period: 48 })
  b.rect(330, 706, 60, 20, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(360, 722, '原病毒', { size: 10, weight: 700, fill: C.bad })
  b.braceH(320, 756, 80, { label: '5 bp 缺口修复 → TSD', fill: C.mute, size: 10 })
  b.arrow(280, 756, 320, 756, { stroke: C.mute, sw: 1.4 })
  b.arrow(400, 756, 440, 756, { stroke: C.mute, sw: 1.4 })
  b.wtext(50, 800, '两侧遂留下宿主来源的靶位点重复（TSD）；LEDGF/p75 决定整合位点偏好。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 838, '整合后的原病毒随宿主染色体世代传递，LTR 支配其全部表达。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、原病毒、ERV 与药靶 ============
  b.panel(710, 586, 660, 394, { title: '四、原病毒的遗产：ERV、药靶与工具酶' })
  b.rect(730, 646, 600, 26, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 13 })
  b.ctext(1030, 664, '宿主染色体', { size: 11.5, weight: 700, fill: C.proD })
  b.rect(960, 640, 140, 38, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(1030, 656, '原病毒', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(915, 660, 'LTR', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(1145, 660, 'LTR', { size: 9.5, weight: 700, fill: C.dnaD })
  b.wtext(730, 716, '逆转录也镌刻于人类基因组：约 8% 由内源性逆转录病毒（HERV）构成；合胞素是 env 驯化的典范。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.tag(790, 768, '齐多夫定 1987（RT）', { fill: C.badL, stroke: C.bad, size: 11, tfill: C.bad, pad: 9 })
  b.tag(1000, 768, '拉替拉韦 2007（整合酶）', { fill: C.dnaL, stroke: C.dna, size: 11, tfill: C.dnaD, pad: 9 })
  b.ctext(920, 812, 'RT 与整合酶均为成熟药靶', { size: 10.5, fill: C.mute })
  b.wtext(730, 852, 'RT 亦是分子生物学核心工具酶——从 RNA 到 DNA 的那一步，如今每天都在实验室里被复制。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
}

export default scene({
  title: '逆转录与基因组整合：一酶三役、两次链转移与 LTR',
  subtitle: 'RT 兼 RNA 依赖 DNA 聚合酶、RNase H、DNA 依赖 DNA 聚合酶；tRNA 引负链（HIV 用 tRNALys3）；整合酶两步转酯、5 bp 缺口修复成 TSD；人类基因组约 8% 为 HERV',
  draw,
})
