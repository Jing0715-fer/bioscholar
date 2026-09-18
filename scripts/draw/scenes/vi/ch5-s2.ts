// vi ch5-s2 DNA 病毒复制（39-j 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、SV40：大 T 抗原的极简范本 ============
  b.panel(30, 132, 660, 430, { title: '一、SV40：大 T 抗原主导的宿主机器借用' })
  b.circle(200, 330, 90, { fill: '#ffffff', stroke: C.dna, sw: 2.6 })
  b.ellipse(200, 330, 34, 34, { fill: C.bg, stroke: C.dna, sw: 2 })
  b.arrow(210, 312, 226, 296, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(190, 348, 174, 364, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(200, 452, '环状双链 DNA（约 5.2 kb）θ 复制', { size: 11, weight: 700, fill: C.dnaD })
  b.circle(258, 282, 26, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(258, 286, '大T', { size: 11, weight: 700, fill: C.proD })
  b.tag(390, 250, '起点识别', { fill: C.proL, stroke: C.pro, size: 11.5, tfill: C.proD, pad: 9 })
  b.tag(390, 292, '解旋酶', { fill: C.proL, stroke: C.pro, size: 11.5, tfill: C.proD, pad: 9 })
  b.tag(390, 334, '劫持 Rb 与 p53', { fill: C.badL, stroke: C.bad, size: 11.5, tfill: C.bad, pad: 9 })
  b.tag(390, 376, '强推细胞入 S 期', { fill: C.badL, stroke: C.bad, size: 11.5, tfill: C.bad, pad: 9 })
  b.wtext(50, 490, '「一个蛋白办三件事」的极简范本：识别起点、解开双链、再借宿主 Pol α/δ 复制——把细胞推入 S 期以获取充足原料。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 二、HSV 滚动环与腺病毒链置换 ============
  b.panel(710, 132, 660, 430, { title: '二、HSV 滚动环与腺病毒链置换' })
  b.text(730, 192, '疱疹病毒（HSV-1 约 152 kb）：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(730, 206, 130, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 8 })
  b.ctext(795, 218, '线性 dsDNA', { size: 9.5, fill: C.dnaD })
  b.arrow(866, 214, 896, 214, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.ctext(881, 200, '入核环化', { size: 9, fill: C.mute })
  b.circle(940, 214, 22, { fill: 'none', stroke: C.dna, sw: 2.2 })
  b.path('M 940,236 C 990,236 1030,258 1062,258', { fill: 'none', stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(990, 226, '滚动环', { size: 9.5, weight: 700, fill: C.dnaD })
  for (let k = 0; k < 4; k++) b.rect(1060 + k * 58, 250, 54, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.3, rx: 5 })
  b.ctext(1175, 286, '头尾连环体', { size: 10, fill: C.mute })
  b.wtext(730, 320, '末端酶复合体在包装时从连环体上切割单位长度；必需复制基因仅七个。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.text(730, 372, '腺病毒：蛋白引物与链置换', { size: 12.5, weight: 700, fill: C.ink })
  b.line(760, 396, 1000, 396, { stroke: C.dna, sw: 3 })
  b.circle(756, 396, 9, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(756, 420, 'pTP-dCMP', { size: 9, weight: 700, fill: C.proD })
  b.rnaW(1010, 390, 100, { stroke: C.bad, amp: 8 })
  b.ctext(1060, 424, '被置换的单链', { size: 9.5, fill: C.bad })
  b.rect(1120, 386, 90, 20, { fill: C.panelB, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(1165, 400, '锅柄结构', { size: 10, weight: 700, fill: C.bad })
  b.wtext(730, 456, '5′ 端 pTP-dCMP 蛋白引物起始；链置换复制中被置出的单链靠两端互补成「锅柄」，启动再合成。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 502, '线性末端各有解法，复制形式亦分道扬镳——但都绕开「线性末端越复制越短」的死结。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、痘病毒：胞质自营工厂 ============
  b.panel(30, 586, 660, 394, { title: '三、痘病毒：胞质中的全套自营体系' })
  b.zone(50, 626, 620, 190, { label: '病毒工厂（胞质）', fill: C.enzL })
  const enzs: [string, number, number][] = [
    ['DNA 依赖 RNA 聚合酶（八个亚基）', 230, 686],
    ['加帽甲基化酶系', 230, 724],
    ['poly(A) 聚合酶', 230, 762],
    ['DNA 聚合酶', 540, 686],
    ['解旋酶', 540, 724],
    ['拓扑异构酶 · 胸苷激酶', 540, 762],
  ]
  enzs.forEach(([nm, x, y]) => b.tag(x, y, nm, { fill: '#ffffff', stroke: C.enz, size: 10.5, tfill: C.enzD, pad: 8 }))
  b.wtext(70, 852, '130–300 kb 的基因组编码近二百种蛋白：自带整套转录复制酶系，不依赖宿主核机器——在胞质「工厂」内自营复制与早期转录。', { size: 11, fill: C.sub, maxW: 580, lh: 16 })
  b.wtext(70, 906, '自营度谱系：SV40（极简借用）→ 腺病毒／疱疹（部分自理）→ 痘病毒（全自营）。', { size: 11, fill: C.mute, maxW: 580, lh: 16 })

  // ============ 四、HBV：借 RNA 之轻，行 DNA 之稳 ============
  b.panel(710, 586, 660, 394, { title: '四、HBV：最小的 DNA 基因组借逆转录复制' })
  b.rect(730, 636, 150, 52, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(805, 658, 'cccDNA', { size: 12, weight: 700, fill: C.proD })
  b.ctext(805, 678, '细胞核内小池', { size: 9.5, fill: C.sub })
  b.arrow(886, 662, 936, 662, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ctext(911, 646, '转录', { size: 10, fill: C.rna })
  b.rect(940, 636, 160, 52, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(1020, 658, '前基因组 RNA', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(1020, 678, 'pgRNA（3.5 kb）', { size: 9.5, fill: C.sub })
  b.arrow(1106, 662, 1156, 662, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(1160, 636, 190, 52, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1255, 658, '核心颗粒内逆转录', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(1255, 678, '蛋白引发 · 衣壳中进行', { size: 9.5, fill: C.sub })
  b.path('M 1348,688 C 1390,780 820,800 805,692', { fill: 'none', stroke: C.bad, sw: 2.2, dash: '7 5', marker: 'bad' })
  b.rect(940, 760, 180, 46, { fill: '#ffffff', stroke: C.bad, sw: 1.7, rx: 8 })
  b.ctext(1030, 780, '部分双链 rcDNA', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(1030, 798, '毒粒基因组', { size: 9.5, fill: C.sub })
  b.arrow(1124, 782, 1160, 700, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(1100, 760, '包装出芽', { size: 9.5, fill: C.mute })
  b.arrow(936, 782, 886, 700, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(924, 758, '回补 cccDNA 池', { size: 10, weight: 700, fill: C.proD })
  b.wtext(730, 852, '约 3.2 kb 的最小 DNA 基因组：「借 RNA 之轻」——复制经 pgRNA 中介；「行 DNA 之稳」——rcDNA 修复回补 cccDNA，长期驻留。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 906, 'cccDNA 池的存在意味着：即便血清 DNA 转阴，肝内模板仍可重启感染——抗 HBV 须长期作战。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: 'DNA 病毒复制：从 SV40 极简借用到痘病毒全自营',
  subtitle: 'SV40 约 5.2 kb 大 T 抗原一蛋白三职并劫持 Rb/p53；HSV-1 约 152 kb 滚动环产头尾连环体；腺病毒 pTP-dCMP 蛋白引物链置换；HBV 约 3.2 kb 经 pgRNA 逆转录',
  draw,
})
