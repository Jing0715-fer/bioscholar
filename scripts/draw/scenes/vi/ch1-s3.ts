// vi ch1-s3 病毒的起源与进化地位（39-j 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三大起源假说 ============
  b.panel(30, 132, 660, 400, { title: '一、三大起源假说（并不互斥，可能多系起源）' })
  const rows: { y0: number; name: string; c: string; claim: string; sup: string; dif: string }[] = [
    {
      y0: 176, name: '退化假说', c: C.enz,
      claim: '主张：寄生细胞逐步丢失基因，瘦身为专性寄生体。',
      sup: '支持：巨病毒仍保留翻译装置基因，似退化残迹。',
      dif: '困难：缺少现存的中间类型。',
    },
    {
      y0: 288, name: '逃逸基因假说', c: C.dna,
      claim: '主张：细胞基因组片段出走，获得自主复制与衣壳。',
      sup: '支持：转座子、质粒展示元件的半自主生活。',
      dif: '困难：衣壳等全新基因的来源难以追认。',
    },
    {
      y0: 400, name: '细胞前假说', c: C.warn,
      claim: '主张：RNA 世界的复制分子遗存，先于细胞存在。',
      sup: '支持：与 RNA 世界假说相容。',
      dif: '困难：难以留下直接的化石证据。',
    },
  ]
  rows.forEach(r => {
    const cy = r.y0 + 56
    b.tag(105, r.y0 + 18, r.name, { fill: r.c + '22', stroke: r.c, size: 12.5, weight: 700, tfill: r.c, pad: 10 })
    if (r.name === '退化假说') {
      b.cell(200, cy, 42, 25, { stroke: r.c })
      b.arrow(250, cy, 278, cy, { stroke: r.c, sw: 2, marker: 'mute' })
      b.cell(300, cy, 26, 17, { stroke: r.c })
      b.arrow(330, cy, 354, cy, { stroke: r.c, sw: 2, marker: 'mute' })
      b.virion(374, cy, 11, { shape: 'icosahedral', stroke: r.c })
      b.ctext(200, cy + 40, '寄生细胞', { size: 9.5, fill: C.mute })
      b.ctext(300, cy + 40, '瘦身', { size: 9.5, fill: C.mute })
      b.ctext(374, cy + 40, '毒粒', { size: 9.5, fill: C.mute })
    } else if (r.name === '逃逸基因假说') {
      b.cell(200, cy, 42, 25, { stroke: r.c })
      b.rect(184, cy - 5, 32, 10, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
      b.path(`M 235,${cy - 8} C 268,${cy - 34} 300,${cy - 32} 328,${cy - 10}`, { fill: 'none', stroke: C.dna, sw: 2, marker: 'dna' })
      b.rect(316, cy - 14, 34, 10, { fill: C.dnaL, stroke: C.dna, sw: 1.4 })
      b.virion(374, cy, 11, { shape: 'icosahedral', stroke: r.c })
      b.ctext(200, cy + 40, '细胞基因组', { size: 9.5, fill: C.mute })
      b.ctext(333, cy + 40, '出走元件', { size: 9.5, fill: C.mute })
      b.ctext(374, cy + 40, '获得衣壳', { size: 9.5, fill: C.mute })
    } else {
      b.ellipse(200, cy, 38, 27, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
      b.rnaW(178, cy, 44, { stroke: C.rna, amp: 5 })
      b.ctext(200, cy + 42, 'RNA 世界', { size: 9.5, fill: C.mute })
      b.arrow(244, cy, 272, cy, { stroke: r.c, sw: 2, marker: 'mute' })
      b.rnaW(284, cy - 4, 62, { stroke: C.rna, amp: 7 })
      b.virion(374, cy, 11, { shape: 'icosahedral', stroke: r.c })
      b.ctext(315, cy + 42, '复制分子', { size: 9.5, fill: C.mute })
      b.ctext(374, cy + 42, '自成一类', { size: 9.5, fill: C.mute })
    }
    b.text(420, r.y0 + 26, r.claim, { size: 11.5, weight: 700, fill: C.ink })
    b.text(420, r.y0 + 50, r.sup, { size: 10.5, fill: C.sub })
    b.text(420, r.y0 + 72, r.dif, { size: 10.5, fill: C.mute })
  })
  b.ctext(360, 522, '三说并不互斥——现有证据更支持病毒多系起源（不止一次诞生）', { size: 11.5, fill: C.sub })

  // ============ 二、巨病毒的冲击：「第四域」之辩 ============
  b.panel(710, 132, 660, 400, { title: '二、巨病毒的冲击：「第四域」之辩' })
  b.virion(778, 236, 12, { shape: 'icosahedral', stroke: C.bad })
  b.ctext(778, 288, '常规病毒', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(778, 306, '约 20–300 nm', { size: 10.5, fill: C.mute })
  b.virion(940, 236, 34, { shape: 'icosahedral', stroke: C.enz })
  b.ctext(940, 296, '拟菌病毒（2003）', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(940, 314, '衣壳约 400 nm · 1.2 Mb', { size: 10.5, fill: C.mute })
  b.ctext(940, 331, '编码近千个基因', { size: 10.5, fill: C.mute })
  b.rect(1080, 216, 66, 40, { fill: C.badL, stroke: C.bad, sw: 2, rx: 18 })
  b.rect(1092, 208, 42, 12, { fill: '#ffffff', stroke: C.bad, sw: 1.6, rx: 6 })
  b.ctext(1113, 316, '潘多拉病毒（2013）', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(1113, 334, '长约 1 μm · 1.9–2.5 Mb', { size: 10.5, fill: C.mute })
  b.ctext(1113, 351, '两千余个基因', { size: 10.5, fill: C.mute })
  b.bacterium(1280, 238, 96, 38, { shape: 'rod', stroke: C.accD, label: '' })
  b.ctext(1280, 316, '细菌（对照）', { size: 11.5, weight: 700, fill: C.sub })
  b.ctext(1280, 334, '基因组常为 Mb 级', { size: 10.5, fill: C.mute })
  b.ctext(1280, 351, '个头与巨病毒重叠', { size: 10.5, fill: C.mute })
  b.rect(730, 372, 300, 148, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.text(746, 396, '曾支持「第四域」', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(746, 420, '携带「本应由细胞独占」的翻译装置组分：氨酰 tRNA 合成酶、翻译因子与 tRNA；2018 年图邦病毒几乎囊括全部 20 种氨酰 tRNA 合成酶。', { size: 10.5, fill: C.sub, maxW: 268, lh: 15 })
  b.rect(1044, 372, 306, 148, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.text(1060, 396, '该说被削弱', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(1060, 420, '长枝吸引与基因水平获得的证据：这些基因可能陆续从宿主「捡来」，不能据此为巨病毒单立一域。', { size: 10.5, fill: C.sub, maxW: 276, lh: 15 })

  // ============ 三、演化的引擎：ERV 与基因水平转移 ============
  b.panel(30, 556, 660, 424, { title: '三、演化的引擎：内源性逆转录病毒与基因水平转移' })
  b.text(50, 616, '人类基因组的组成（约）：', { size: 12.5, weight: 700, fill: C.ink })
  b.text(50, 650, '内源性逆转录病毒（ERV）', { size: 11, fill: C.sub })
  b.rect(240, 634, 264, 22, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(528, 650, '约 8%', { size: 12, weight: 700, fill: C.rna })
  b.text(50, 686, '蛋白编码序列', { size: 11, fill: C.sub })
  b.rect(240, 670, 50, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(314, 686, '约 1.5%', { size: 12, weight: 700, fill: C.dna })
  b.ctext(360, 724, 'ERV 份额是蛋白编码序列的五倍余——数千万年间反复感染种系的逆转录病毒残迹', { size: 10.5, fill: C.mute })
  // 合胞素
  b.cell(150, 792, 52, 30, { stroke: C.rna })
  b.cell(216, 792, 52, 30, { stroke: C.rna })
  b.cell(183, 792, 52, 30, { stroke: C.rna, dash: '4 4' })
  b.tag(360, 792, '合胞素（syncytin）源于 ERV 包膜基因', { fill: C.rnaL, stroke: C.rna, size: 11, tfill: C.rnaD, pad: 10 })
  b.ctext(360, 820, '介导细胞融合——胎盘形成的分子基础之一', { size: 10.5, fill: C.sub })
  // 基因水平转移
  b.virion(120, 896, 13, { shape: 'enveloped', stroke: C.bad })
  b.arrow(150, 896, 210, 896, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.dna(220, 896, 300, { stroke: C.dna, amp: 8, period: 42 })
  b.rect(340, 888, 56, 16, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 4 })
  b.ctext(360, 938, '病毒介导的基因水平转移：把基因写进宿主基因组', { size: 10.5, fill: C.sub })

  // ============ 四、数量级：10³¹ 颗病毒的行星 ============
  b.panel(710, 556, 660, 424, { title: '四、数量级：10³¹ 颗病毒的行星' })
  b.text(730, 632, '10³¹', { size: 54, weight: 700, fill: C.bad })
  b.wtext(830, 618, '全球病毒颗粒约 10³¹ 个——数量级超过全部细胞生物的总和。', { size: 13, weight: 700, fill: C.ink, maxW: 300, lh: 20 })
  b.wtext(830, 666, '从深海到大气，病毒无处不在：它们是这颗行星上数量最多的生物实体。', { size: 11, fill: C.sub, maxW: 300, lh: 16 })
  b.text(730, 724, '每日约 20% 的海洋微生物生物量被病毒裂解：', { size: 12.5, weight: 700, fill: C.ink })
  for (let i = 0; i < 25; i++) {
    b.circle(748 + i * 24, 760, 8, i % 5 === 0 ? { fill: C.bad, stroke: C.bad, sw: 1 } : { fill: C.accL, stroke: C.acc, sw: 1 })
  }
  b.legend(748, 800, [['被裂解（约 20%）', C.bad], ['存活', C.accL]], { size: 10.5, gap: 14 })
  b.wtext(730, 852, '裂解释放有机物与营养盐，驱动全球生物地球化学循环；病毒由此成为演化与物质循环的重要引擎。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 896, '演化引擎的另一面：病毒持续搬运基因（水平转移）、留下残迹（ERV 约 8%）——生命的演化史里写满病毒的注脚。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
}

export default scene({
  title: '病毒的起源与进化地位：三大假说、巨病毒与演化引擎',
  subtitle: '退化／逃逸／细胞前三说并不互斥，可能多系起源；拟菌病毒 1.2 Mb、潘多拉病毒 1.9–2.5 Mb 曾支持「第四域」；人类基因组约 8% 为 ERV；全球约 10³¹ 颗病毒',
  draw,
})
