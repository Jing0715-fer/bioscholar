// cb ch7-s4 着丝粒、动粒与端粒（39-d 批A 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、着丝粒与动粒：三层结构与微管附着 ============
  b.panel(30, 132, 660, 430, { title: '一、着丝粒与动粒：CENP-A 表观遗传标志＋三层动粒' })
  // -- 中期染色体（两条姐妹染色单体）--
  const arm = (x: number) => {
    b.rect(x, 196, 26, 84, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 10 })
    b.rect(x, 320, 26, 84, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 10 })
    b.rect(x + 3, 280, 20, 40, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 6 })
  }
  arm(108); arm(164)
  b.ctext(149, 428, '中期染色体', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(149, 446, '（主缢痕）', { size: 9, fill: C.mute })
  b.text(64, 180, '姐妹染色单体', { size: 9.5, fill: C.mute })
  // -- 放大框：动粒 --
  b.line(192, 300, 262, 300, { stroke: C.faint, sw: 1.4, dash: '4 4' })
  b.rect(266, 196, 400, 300, { fill: C.bg, stroke: C.faint, sw: 1.6, dash: '6 5', rx: 10 })
  b.ctext(466, 216, '动粒放大（主缢痕横断面）', { size: 10.5, weight: 700, fill: C.sub })
  // 微管
  for (let i = 0; i < 3; i++) {
    const tx = 396 + i * 70
    b.line(tx, 226, tx, 306, { stroke: C.acc, sw: 3.5 })
    b.arrow(tx - 5, 262, tx + 22, 262, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  }
  b.ctext(466, 240, '纺锤体微管（＋端）', { size: 9.5, weight: 700, fill: C.accD })
  // 外层 KMN
  b.rect(300, 308, 332, 34, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(466, 330, '外层 KMN 网络', { size: 11, weight: 700, fill: C.proD })
  b.text(306, 358, 'KNL1 · Mis12 复合体 · Ndc80 复合体', { size: 9.5, fill: C.proD })
  // 内层 CCAN
  b.rect(300, 384, 332, 30, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.ctext(466, 404, '内层 CCAN 网络（CENP-C · CENP-T）', { size: 10, weight: 700, fill: C.rnaD })
  // 着丝粒染色质
  b.rect(300, 430, 332, 44, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(466, 448, '着丝粒染色质：兆碱基级 α 卫星 DNA', { size: 9.5, weight: 700, fill: C.dnaD })
  for (let i = 0; i < 9; i++) {
    b.circle(322 + i * 36, 462, 6.5, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  }
  b.tag(500, 462, 'CENP-A 核小体', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.arrow(488, 462, 452, 462, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.wtext(64, 478, 'CENP-A（H3 变体）替换着丝粒核小体——身份由表观遗传决定，新着丝粒可出现在缺乏卫星 DNA 的位点；每个动粒可附着 1 至数十条微管（哺乳动物）。', { size: 10, fill: C.sub, maxW: 610, lh: 14 })
  b.wtext(64, 526, 'SAC 传感平台：未附着 / 缺乏张力的动粒募集 Mad2·BubR1 抑制 APC/C；CPC（Aurora B）纠错（见第 10 章）。', { size: 10, fill: C.mute, maxW: 610, lh: 14 })

  // ============ 二、端粒：T 环与 shelterin 保护帽 ============
  b.panel(710, 132, 660, 430, { title: '二、端粒：TTAGGG 重复、T 环与 shelterin 保护帽' })
  // 双链端粒 DNA
  b.dna(740, 250, 380, { amp: 11, period: 40, stroke: C.dna, sw: 2.8, rung: true, rungC: C.dnaD })
  b.ctext(930, 218, 'TTAGGG 串联重复（约 5—15 kb）', { size: 10.5, weight: 700, fill: C.dnaD })
  // 3' G 链突出 → T 环
  b.path('M 1120,250 C 1180,250 1200,300 1150,330 C 1100,360 1000,360 980,320', { stroke: C.ok, sw: 3, fill: 'none', marker: 'ok' })
  b.text(1150, 236, '3′ G 链突出', { size: 10, weight: 700, fill: C.ok })
  b.ellipse(1070, 330, 86, 26, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 2 })
  b.ctext(1070, 334, 'T 环', { size: 11.5, weight: 700, fill: C.ok })
  b.text(1070, 372, '3′ 突出入侵自身双链区（D 环）', { size: 9.5, fill: C.mute })
  b.ctext(1070, 388, '把天然末端"藏"起来', { size: 9.5, fill: C.mute })
  // shelterin
  b.tag(790, 292, 'TRF1', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 5 })
  b.tag(872, 292, 'TRF2（促 T 环）', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 5 })
  b.tag(992, 292, 'POT1（结合单链）', { fill: C.proL, stroke: C.pro, size: 9.5, weight: 700, tfill: C.proD, pad: 5 })
  b.ctext(930, 320, 'shelterin 复合体', { size: 11, weight: 700, fill: C.proD })
  b.wtext(740, 424, '保护机制：T 环＋shelterin 使染色体天然末端免被 DNA 损伤应答系统识别为双链断裂。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })
  b.wtext(740, 462, '人类由 TTAGGG 串联重复（约 5—15 kb）与 3′ 端 G 链突出构成。', { size: 10, fill: C.mute, maxW: 600, lh: 14 })

  // ============ 三、末端复制问题与端粒酶 ============
  b.panel(30, 576, 1340, 404, { title: '三、末端复制问题与端粒酶：缩短 50—200 bp / 代及其回补' })
  // -- 左：末端复制问题 --
  b.text(64, 616, '末端复制问题：后随链最末端 RNA 引物被切除后无法补齐', { size: 11.5, weight: 700, fill: C.ink })
  // 亲代双链
  b.line(90, 660, 330, 660, { stroke: C.dna, sw: 3.5 })
  b.line(90, 690, 330, 690, { stroke: C.dna, sw: 3.5 })
  b.ctext(210, 640, '亲代双链', { size: 9.5, fill: C.mute })
  // 复制箭头
  b.arrow(350, 675, 420, 675, { stroke: C.mute, sw: 2.4, marker: 'mute' })
  b.ctext(385, 660, '复制', { size: 10, weight: 700, fill: C.mute })
  // 子代双链 1：先导链全长
  b.line(440, 660, 700, 660, { stroke: C.dna, sw: 3.5 })
  b.line(440, 690, 700, 690, { stroke: C.ok, sw: 3.5 })
  b.ctext(570, 640, '子代 ①：先导链连续合成 → 全长', { size: 9.5, fill: C.ok })
  // 子代双链 2：后随链末端缺口
  b.line(440, 736, 700, 736, { stroke: C.dna, sw: 3.5 })
  b.line(440, 766, 640, 766, { stroke: C.rna, sw: 3.5 })
  b.line(640, 766, 700, 766, { stroke: C.rna, sw: 3.5, dash: '5 5' })
  b.rect(642, 756, 56, 20, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 3 })
  b.ctext(570, 716, '子代 ②：后随链（冈崎片段）末端 RNA 引物切除', { size: 9.5, fill: C.rnaD })
  b.arrow(616, 788, 690, 788, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(570, 808, '末端空缺无法补齐 → 每次复制缩短 50—200 bp', { size: 10, weight: 700, fill: C.bad })
  b.wtext(90, 836, '端粒酶在多数体细胞中被抑制——端粒逐次缩短最终触发复制性衰老（Hayflick 界限，第 11 章）。', { size: 10, fill: C.sub, maxW: 620, lh: 14 })
  // -- 右：端粒酶 --
  b.text(760, 616, '端粒酶：以自身 RNA 为模板的逆转录核糖核蛋白', { size: 11.5, weight: 700, fill: C.ink })
  // G 链突出
  b.line(780, 660, 1080, 660, { stroke: C.ok, sw: 3.5 })
  b.text(786, 646, '3′ G 链突出（延伸中）', { size: 9.5, weight: 700, fill: C.ok })
  // TERC RNA 模板（波浪）与配对
  b.rnaW(790, 688, 280, { amp: 9, stroke: C.rna })
  b.ctext(930, 672, 'TERC（RNA 模板）', { size: 9.5, weight: 700, fill: C.rnaD })
  for (let i = 0; i < 6; i++) {
    b.line(820 + i * 48, 660, 820 + i * 48, 688, { stroke: C.faint, sw: 1.4 })
  }
  // TERT
  b.rect(1060, 640, 96, 56, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 8 })
  b.ctext(1108, 662, 'TERT', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(1108, 680, '逆转录酶核心', { size: 8.5, fill: C.enzD })
  b.arrow(1056, 668, 1000, 668, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.arrow(1080, 648, 1080, 632, { stroke: C.ok, sw: 2.4, marker: 'ok' })
  b.ctext(1080, 620, '回补 TTAGGG 重复', { size: 9.5, weight: 700, fill: C.ok })
  b.wtext(760, 726, 'Blackburn、Greider 与 Szostak 因发现端粒酶获 2009 年诺贝尔生理学或医学奖。端粒酶在生殖细胞、干细胞与约 85%—90% 的肿瘤中活跃——肿瘤细胞经其重激活实现永生化，端粒酶因此成为抗癌药靶。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.tag(820, 828, '生殖细胞 · 干细胞：活跃', { fill: C.okL, stroke: C.ok, size: 10, tfill: C.ok, pad: 6 })
  b.tag(1030, 828, '多数体细胞：抑制', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.bad, pad: 6 })
  b.wtext(760, 866, '先天性角化不良等端粒病源于端粒维护缺陷。', { size: 10, fill: C.mute, maxW: 560, lh: 14 })
}

export default scene({
  title: '着丝粒、动粒与端粒：遗传忠实性的两大守护结构',
  subtitle: '着丝粒由 CENP-A 表观遗传决定，动粒 CCAN/KMN 捕捉微管兼 SAC 平台；端粒 TTAGGG 折成 T 环藏起末端，每代缩 50—200 bp，端粒酶（2009 诺奖）回补',
  draw,
})
