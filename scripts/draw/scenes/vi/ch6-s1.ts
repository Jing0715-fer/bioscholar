// vi ch6-s1 转录后加工与调控（39-j 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、帽子与尾巴的两种来源 ============
  b.panel(30, 132, 660, 430, { title: '一、帽子与尾巴：宿主全套 or 自营抢帽' })
  b.text(50, 196, 'A. 用宿主 Pol II 转录（SV40、腺病毒等）：', { size: 12, weight: 700, fill: C.ink })
  b.circle(66, 248, 8, { fill: C.warn })
  b.line(78, 248, 260, 248, { stroke: C.rna, sw: 3 })
  b.rect(262, 242, 40, 12, { fill: C.rnaL, stroke: C.rna, sw: 1.3 })
  b.ctext(282, 236, 'poly(A)', { size: 9, fill: C.rna })
  b.ctext(66, 274, '5′ 帽', { size: 9.5, fill: C.mute })
  b.ctext(180, 274, '宿主加帽加尾体系「一条龙」服务', { size: 10.5, fill: C.sub })
  b.text(50, 322, 'B. 自带聚合酶（流感、痘病毒等）：', { size: 12, weight: 700, fill: C.ink })
  b.tag(150, 356, '流感：抢宿主 mRNA 的帽（cap-snatching）', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.bad, pad: 8 })
  b.tag(430, 356, '痘病毒：自建加帽／聚腺苷体系', { fill: C.enzL, stroke: C.enz, size: 10.5, tfill: C.enzD, pad: 8 })
  b.wtext(50, 404, '用谁的聚合酶，就决定 mRNA 两端的「包装」由谁负责——这是巴尔的摩分类之外另一条隐性分界线。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 444, '自带聚合酶者要么抢帽、要么自营：两种都绕开了对宿主 Pol II CTD 加工机器的依赖。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 二、剪接的发现：腺病毒 R 环实验 ============
  b.panel(710, 132, 660, 430, { title: '二、剪接的发现：腺病毒的 R 环实验（1977）' })
  b.line(730, 220, 1000, 220, { stroke: C.dna, sw: 2.4 })
  b.ctext(865, 208, 'DNA（编码链）', { size: 10.5, fill: C.dnaD })
  b.line(730, 240, 1000, 240, { stroke: C.dna, sw: 2.4 })
  // RNA 与外显子杂交、内含子环出
  b.line(740, 230, 780, 230, { stroke: C.rna, sw: 3 })
  b.line(800, 230, 840, 230, { stroke: C.rna, sw: 3 })
  b.line(860, 230, 900, 230, { stroke: C.rna, sw: 3 })
  b.path('M 780,230 C 790,196 810,196 820,230', { fill: 'none', stroke: C.rna, sw: 2.4 })
  b.path('M 840,230 C 850,196 870,196 880,230', { fill: 'none', stroke: C.rna, sw: 2.4 })
  b.ctext(812, 184, '环出的单链 DNA 环（R 环）', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(900, 262, 'RNA 与外显子配对，内含子区段被顶出成环', { size: 10, fill: C.mute })
  b.wtext(1040, 210, '电镜下 RNA–DNA 杂交分子上出现单链环——基因是断裂的：外显子被内含子隔开。', { size: 11, fill: C.sub, maxW: 300, lh: 16 })
  b.tag(880, 330, 'Sharp 与 Roberts 同年各自发现 · 1993 年诺贝尔奖', { fill: C.okL, stroke: C.ok, size: 11, weight: 700, tfill: '#065f46', pad: 10 })
  b.wtext(730, 386, '断裂基因的概念由此确立——这是病毒学送给整个分子生物学的意外馈赠。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 426, 'mRNA 前体须剪去内含子、拼接外显子，才能作为可翻译的模板。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 三、病毒对剪接的利用 ============
  b.panel(30, 586, 660, 394, { title: '三、病毒对剪接的利用：一票多产' })
  b.rect(60, 646, 60, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.rect(160, 646, 90, 22, { fill: C.panelB, stroke: C.line, sw: 1.4 })
  b.rect(300, 646, 60, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.rect(400, 646, 110, 22, { fill: C.panelB, stroke: C.line, sw: 1.4 })
  b.rect(540, 646, 60, 22, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.ctext(90, 640, '外显子', { size: 9.5, fill: C.dnaD })
  b.ctext(205, 640, '内含子（可保留）', { size: 9.5, fill: C.mute })
  b.ctext(570, 640, '外显子', { size: 9.5, fill: C.dnaD })
  b.ctext(350, 690, '一条 pre-mRNA', { size: 10.5, weight: 700, fill: C.ink })
  b.arrow(180, 706, 180, 726, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.ctext(230, 722, '选择剪接 A', { size: 10, fill: C.accD })
  b.arrow(460, 706, 460, 726, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.ctext(510, 722, '选择剪接 B', { size: 10, fill: C.enzD })
  b.rect(90, 734, 240, 22, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(210, 749, 'mRNA 甲（跳过内含子）', { size: 10, fill: C.accD })
  b.rect(360, 734, 240, 22, { fill: C.enzL, stroke: C.enz, sw: 1.5 })
  b.ctext(480, 749, 'mRNA 乙（保留内含子）', { size: 10, fill: C.enzD })
  b.wtext(50, 800, 'SV40 与腺病毒 E1A 以选择剪接一票多产：同一转录本按保留 / 跳过内含子产出多种蛋白。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 844, '流感 M 与 NS 节段借宿主剪接机器，让一个节段的蛋白产出翻倍。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 四、不剪接的例外与多层调控 ============
  b.panel(710, 586, 660, 394, { title: '四、不剪接的例外与转录后的多层网络' })
  b.tag(810, 636, 'HSV：基因多无内含子', { fill: C.dnaL, stroke: C.dna, size: 11.5, tfill: C.dnaD, pad: 9 })
  b.tag(810, 678, 'ICP27 抑制宿主剪接', { fill: C.badL, stroke: C.bad, size: 11.5, tfill: C.bad, pad: 9 })
  b.wtext(1030, 630, '把宿主的剪接机器关掉，自己的「无内含子」基因照样表达——独占核糖体的第一步。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.tag(810, 726, '痘病毒：胞质自建加工体系', { fill: C.enzL, stroke: C.enz, size: 11.5, tfill: C.enzD, pad: 9 })
  b.wtext(1030, 720, '在胞质「工厂」里自备加帽、聚腺苷化全套装置，根本不进核、不碰剪接。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.text(730, 782, '转录后调控的多层网络：', { size: 12.5, weight: 700, fill: C.ink })
  b.tag(790, 812, '出核运输', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 8 })
  b.tag(936, 812, 'mRNA 稳定性（vhs 清场）', { fill: C.rnaL, stroke: C.rna, size: 11, tfill: C.rnaD, pad: 8 })
  b.tag(1136, 812, 'RNA 结构开关', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 8 })
  b.wtext(730, 856, 'HSV 的 vhs 核酸酶清空宿主 mRNA、腾出翻译机器——降解也是调控。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 896, '剪接与否、帽尾来源、出核配额、寿命长短——病毒在 RNA 离开 Pol II 之后的每一步都做了手脚。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '病毒 mRNA 的转录后加工：帽尾来源、剪接发现与多层调控',
  subtitle: '宿主 Pol II 者享受加帽加尾，自带聚合酶者抢帽（流感）或自营（痘）；1977 年腺病毒 R 环实验发现剪接（1993 诺奖）；选择剪接一票多产；vhs 清场',
  draw,
})
