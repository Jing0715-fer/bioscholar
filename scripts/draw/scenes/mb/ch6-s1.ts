// mb ch6-s1 遗传密码的破译（39-b2 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、破译十年时间线 ============
  b.panel(30, 132, 1340, 236, { title: '一、破译密码的十年：1961–1966' })
  b.arrow(70, 252, 1330, 252, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  const miles: [number, string, string][] = [
    [150, '1958', 'Crick 提出接头假说：预言既识别密码子又携带氨基酸的接头分子（即 tRNA）'],
    [370, '1961', 'Nirenberg 与 Matthaei：poly(U) → UUU = Phe，首个密码子破译'],
    [610, '1964', 'Nirenberg 与 Leder：三核苷酸-核糖体结合实验，逐一检验 64 种组合'],
    [860, '1966', '全部 64 个密码子破译完成（Khorana 重复共聚物收尾）'],
    [1120, '1968', 'Nirenberg、Khorana 与 Holley（首个核酸序列：酵母丙氨酸 tRNA）获诺贝尔奖'],
  ]
  miles.forEach(([x, yr, desc]) => {
    b.circle(x, 252, 6, { fill: C.ink })
    b.ctext(x, 232, yr, { size: 15, weight: 700, fill: C.ink })
    b.wtext(x, 274, desc, { size: 10.5, fill: C.sub, maxW: 205, lh: 15, anchor: 'middle' })
  })
  b.text(70, 200, 'Zamecnik 的无细胞翻译体系（大肠杆菌核糖体 + 酶液 + 能量系统）与人工合成 RNA 模板技术共同奠定实验基础', { size: 11.5, fill: C.mute })

  // ============ 二、三个关键实验 ============
  b.panel(30, 392, 660, 300, { title: '二、三个关键实验的设计逻辑' })
  const exps: [string, string, string][] = [
    ['① poly(U)（1961）', '人工多聚尿苷酸加入无细胞体系', '得到仅含苯丙氨酸的肽链 → UUU = Phe；同法确定 CCC = Pro、AAA = Lys、GGG = Gly'],
    ['② 随机共聚物', 'U 与 G 按 5:1 等已知比例随机共聚', '按统计频率匹配氨基酸掺入量——定组成但无法区分组内排列（如 UUG / UGU / GUU）'],
    ['③ 重复共聚物', 'Khorana 合成 poly(UC)ₙ、poly(UUC)ₙ 等序列确定的模板', 'poly(UC)ₙ 读出 UCU CUC…→ Ser–Leu 交替；poly(UUC)ₙ 按三种读框周期性唯一确定密码子'],
  ]
  exps.forEach(([t, s, d], i) => {
    const y = 440 + i * 82
    b.rect(56, y, 610, 70, { fill: i === 2 ? C.accL : C.panelB, stroke: i === 2 ? C.acc : C.line, sw: 1.4, rx: 8 })
    b.text(72, y + 22, t, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(72, y + 40, s, { size: 10.5, weight: 600, fill: C.sub, maxW: 578, lh: 14 })
    b.wtext(72, y + 56, d, { size: 10, fill: C.mute, maxW: 578, lh: 13 })
  })
  b.wtext(56, 682, '三核苷酸 + 对应氨酰-tRNA + 核糖体形成被硝酸纤维素滤膜截留的复合物——「结合实验」直接读出三联体归属。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、密码子表组织规律 ============
  b.panel(710, 392, 660, 300, { title: '三、64 个密码子的组织规律' })
  const bullets = [
    '· 同一氨基酸的密码子多聚在第 1、2 位固定的一格内',
    '· 第 3 位「摆动」——简并性的结构基础（下节）',
    '· 破译把「核酸语言」逐字翻译为「蛋白质语言」',
  ]
  bullets.forEach((s, i) => b.wtext(740, 438 + i * 22, s, { size: 11, fill: C.sub, maxW: 600, lh: 16 }))
  // 堆叠比例条
  const bx = 740, by = 528, bw = 320, bh = 30
  b.rect(bx, by, (bw * 61) / 64, bh, { fill: C.dna, opacity: 0.85 })
  b.rect(bx + (bw * 61) / 64, by, (bw * 3) / 64, bh, { fill: C.bad })
  b.ctext(bx + bw / 2, by + 20, '64 个三联体密码子', { size: 12, weight: 700, fill: '#ffffff' })
  b.ctext(bx + 150, by + 52, '有义密码子 61 个', { size: 11.5, weight: 700, fill: C.dnaD })
  b.ctext(bx + bw, by + 52, '终止 3 个', { size: 11.5, weight: 700, fill: C.bad })
  b.tag(900, 610, 'AUG：起始密码子兼蛋氨酸（原核为 fMet）', { fill: C.rnaL, stroke: C.rna, size: 11, weight: 700, tfill: C.rnaD, pad: 8 })
  b.tag(900, 660, 'UAA（ochre）· UAG（amber）· UGA（opal）', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: '#991b1b', pad: 7 })

  // ============ 四、标准密码子表（4×4 网格） ============
  b.panel(30, 712, 1340, 258, { title: '四、标准遗传密码表（行＝第 1 位碱基，列＝第 2 位；格内为第 3 位四种密码子）' })
  const cells: [string, string, string][] = [
    ['UU', 'Phe（UUU·UUC）', 'Leu（UUA·UUG）'],
    ['UC', 'Ser（UCU·UCC·UCA·UCG）', ''],
    ['UA', 'Tyr（UAU·UAC）', '终止（UAA·UAG）'],
    ['UG', 'Cys（UGU·UGC）', '终止（UGA）· Trp（UGG）'],
    ['CU', 'Leu（CUU·CUC·CUA·CUG）', ''],
    ['CC', 'Pro（CCU·CCC·CCA·CCG）', ''],
    ['CA', 'His（CAU·CAC）', 'Gln（CAA·CAG）'],
    ['CG', 'Arg（CGU·CGC·CGA·CGG）', ''],
    ['AU', 'Ile（AUU·AUC·AUA）', 'Met / 起始（AUG）'],
    ['AC', 'Thr（ACU·ACC·ACA·ACG）', ''],
    ['AA', 'Asn（AAU·AAC）', 'Lys（AAA·AAG）'],
    ['AG', 'Ser（AGU·AGC）', 'Arg（AGA·AGG）'],
    ['GU', 'Val（GUU·GUC·GUA·GUG）', ''],
    ['GC', 'Ala（GCU·GCC·GCA·GCG）', ''],
    ['GA', 'Asp（GAU·GAC）', 'Glu（GAA·GAG）'],
    ['GG', 'Gly（GGU·GGC·GGA·GGG）', ''],
  ]
  const heads = ['U', 'C', 'A', 'G']
  // 表头（列）
  heads.forEach((h, j) => {
    b.rect(120 + j * 300, 752, 300, 24, { fill: C.panelB, stroke: C.faint, sw: 1.2 })
    b.ctext(270 + j * 300, 768, '第 2 位：' + h, { size: 11, weight: 700, fill: C.ink })
  })
  cells.forEach(([key, s1, s2], i) => {
    const row = Math.floor(i / 4), col = i % 4
    const x = 120 + col * 300, y = 776 + row * 42
    b.rect(x, y, 300, 42, { fill: s1.includes('终止') ? C.badL : '#ffffff', stroke: C.faint, sw: 1.2 })
    b.ctext(x + 26, y + 26, key, { size: 12, weight: 700, fill: C.dnaD })
    b.wtext(x + 62, y + 16, s1, { size: 10, fill: C.sub, maxW: 230, lh: 13 })
    if (s2) b.wtext(x + 62, y + 30, s2, { size: 10, fill: s2.includes('终止') ? '#991b1b' : C.sub, maxW: 230, lh: 13 })
  })
  // 行表头
  heads.forEach((h, i) => {
    b.rect(50, 776 + i * 42, 70, 42, { fill: C.dnaL, stroke: C.faint, sw: 1.2 })
    b.ctext(85, 776 + i * 42 + 18, '第 1 位', { size: 9.5, weight: 700, fill: C.dnaD })
    b.ctext(85, 776 + i * 42 + 34, h, { size: 12, weight: 700, fill: C.dnaD })
  })
}

export default scene({
  title: '遗传密码的破译',
  subtitle: 'poly(U) 确立 UUU=Phe（1961）→ 随机共聚物定组成 → Khorana 重复共聚物与三核苷酸结合实验收尾——1966 年全部 64 个密码子破译：61 个有义（AUG 兼起始）+ 3 个终止',
  draw,
})
