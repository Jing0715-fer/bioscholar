// vi ch2-s2 毒粒的化学组成（39-j 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、化学账本：核酸占比跨度百倍 ============
  b.panel(30, 132, 660, 430, { title: '一、化学账本：核酸占干重 0.5%–50%，跨度百倍' })
  b.legend(50, 194, [['核酸', C.rna], ['其余组分（蛋白质、脂质、糖类）', C.proL]], { size: 11, gap: 14 })
  const comp: [string, number, string][] = [
    ['流感病毒', 1, '≈ 1%'],
    ['脊髓灰质炎病毒', 30, '≈ 30%'],
    ['T 偶数噬菌体', 50, '≈ 50%'],
    ['烟草花叶病毒', 5, '≈ 5%（蛋白约 95%）'],
  ]
  comp.forEach(([nm, pct, lab], i) => {
    const by = 216 + i * 46
    b.text(50, by + 17, nm, { size: 11.5, fill: C.sub })
    b.rect(190, by, 420, 26, { fill: C.proL, stroke: C.pro, sw: 1.4 })
    b.rect(190, by, Math.max((pct / 100) * 420, 4), 26, { fill: C.rna, stroke: C.rnaD, sw: 1.2 })
    b.text(618, by + 17, lab, { size: 11, weight: 700, fill: C.rna })
  })
  b.wtext(50, 424, '决定因素有二：① 包膜与基质等「配重」——流感毒粒的脂质、糖类与基质蛋白把 RNA 稀释到约 1%；② 衣壳内核酸的堆装密度——T 偶数噬菌体头部几乎被双链 DNA 塞满，占比约 50%，与细胞核内染色质的密度相当。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 500, '裸毒粒的蛋白质可逾九成：TMV 约 95% 蛋白质 + 5% 核糖核酸。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、有包膜毒粒的解剖（以流感为例） ============
  b.panel(710, 132, 660, 430, { title: '二、有包膜毒粒的解剖（以流感病毒为例）' })
  b.virion(1040, 322, 76, { shape: 'enveloped', stroke: C.bad, fill: '#fee2e2' })
  // 标注
  b.line(958, 322, 898, 292, { stroke: C.dna, sw: 1.5 })
  b.tag(822, 284, '脂质包膜', { fill: C.dnaL, stroke: C.dna, size: 11, tfill: C.dnaD, pad: 8 })
  b.ctext(822, 312, '出芽获得 · 保留膜印记', { size: 10, fill: C.mute })
  b.line(1062, 236, 1062, 208, { stroke: C.bad, sw: 1.5 })
  b.tag(1062, 194, '刺突糖蛋白（HA / NA）', { fill: C.badL, stroke: C.bad, size: 11, tfill: C.bad, pad: 8 })
  b.line(1126, 300, 1196, 268, { stroke: C.pro, sw: 1.5 })
  b.tag(1266, 260, '基质蛋白 M1', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 8 })
  b.ctext(1266, 288, '膜下骨架 · HIV 为 p17', { size: 10, fill: C.mute })
  b.line(1118, 366, 1196, 386, { stroke: C.enz, sw: 1.5 })
  b.tag(1268, 392, '毒粒相关酶（RdRp）', { fill: C.enzL, stroke: C.enz, size: 11, tfill: C.enzD, pad: 8 })
  b.ctext(1268, 420, '「非结构」命名并不绝对', { size: 10, fill: C.mute })
  b.line(1040, 404, 1040, 448, { stroke: C.rna, sw: 1.5 })
  b.tag(1040, 462, '核糖核蛋白（NP + vRNA 节段）', { fill: C.rnaL, stroke: C.rna, size: 11, tfill: C.rnaD, pad: 8 })
  b.wtext(730, 500, '「非结构」命名不绝对：RdRp、逆转录酶、整合酶、蛋白酶等随颗粒包装；HIV 毒粒还包装宿主成分——tRNA 作逆转录引物、亲环素 A 稳定衣壳。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、从组成看策略：小而精与大而全 ============
  b.panel(30, 586, 660, 394, { title: '三、从组成看策略：小而精与大而全' })
  b.rect(50, 634, 300, 262, { fill: '#ffffff', stroke: C.bad, sw: 1.7, rx: 9 })
  b.ctext(200, 658, '流感：小而精', { size: 13, weight: 700, fill: C.bad })
  b.virion(200, 716, 30, { shape: 'enveloped', stroke: C.bad })
  b.wtext(68, 782, '以约 1% 的核酸占比，换取包膜的可变形性与刺突的抗原多样性；一粒毒粒十余种组分各司其职、几乎无一冗余。', { size: 10.5, fill: C.sub, maxW: 264, lh: 15 })
  b.rect(370, 634, 300, 262, { fill: '#ffffff', stroke: C.enz, sw: 1.7, rx: 9 })
  b.ctext(520, 658, '痘病毒：大而全', { size: 13, weight: 700, fill: C.enzD })
  b.rect(462, 680, 116, 74, { fill: C.enzL, stroke: C.enz, sw: 2, rx: 14 })
  b.rect(486, 700, 68, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 6 })
  b.ctext(520, 722, '核心', { size: 10.5, weight: 700, fill: C.dnaD })
  b.rect(470, 702, 11, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.rect(559, 702, 11, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.wtext(388, 782, '130–300 kb 基因组；毒粒携带数十种酶，进入胞质即可开动转录——接近「自带转录工厂」，对宿主依赖最浅。', { size: 10.5, fill: C.sub, maxW: 264, lh: 15 })
  b.ctext(360, 940, '「经济」在毒粒身上，体现为化学层面的精打细算', { size: 12, weight: 700, fill: C.ink })

  // ============ 四、糖盾：gp120 的二十余个糖基化位点 ============
  b.panel(710, 586, 660, 394, { title: '四、糖盾：gp120 的二十余个糖基化位点' })
  b.bilayer(900, 856, 350, { tint: C.dna })
  b.ctext(1075, 892, '病毒包膜（脂质双层）', { size: 10.5, fill: C.mute })
  // 三聚体刺突
  b.rect(1058, 766, 14, 90, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ellipse(1014, 742, 26, 30, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ellipse(1075, 732, 27, 32, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ellipse(1136, 742, 26, 30, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(1075, 678, '刺突（gp120 三聚体）', { size: 12, weight: 700, fill: C.bad })
  // 糖基化位点（二十余个）
  const gly: [number, number][] = [
    [998, 720], [1014, 712], [1030, 720], [1006, 736], [1024, 736], [1014, 754],
    [1058, 708], [1075, 702], [1092, 708], [1058, 724], [1092, 724], [1066, 742], [1084, 742], [1075, 758],
    [1120, 720], [1136, 712], [1152, 720], [1128, 736], [1146, 736], [1136, 754],
    [1040, 762], [1110, 762],
  ]
  gly.forEach(([gx, gy]) => {
    b.circle(gx, gy, 4, { fill: '#fef3c7', stroke: C.warn, sw: 1.2 })
    b.line(gx - 4, gy - 4, gx - 8, gy - 8, { stroke: C.warn, sw: 1.2 })
    b.line(gx + 4, gy - 4, gx + 8, gy - 8, { stroke: C.warn, sw: 1.2 })
  })
  // 抗体被糖盾遮挡
  b.path('M 850,796 L 850,766 M 850,766 L 836,742 M 850,766 L 864,742', { stroke: C.pro, sw: 3 })
  b.ctext(850, 818, '抗体', { size: 11, weight: 700, fill: C.proD })
  b.line(868, 748, 984, 726, { stroke: C.pro, sw: 1.6, dash: '5 4' })
  b.ctext(926, 712, '表位被糖链遮蔽', { size: 10.5, weight: 700, fill: C.proD })
  b.wtext(730, 940, 'gp120 的二十余个糖基化位点构成「糖盾」——免疫逃逸的结构基础；脂质几乎全在包膜并保留出芽时的膜印记。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
}

export default scene({
  title: '毒粒的化学组成：核酸占比 0.5%–50% 的跨度与糖盾',
  subtitle: '流感约 1%、脊灰约 30%、T 偶数噬菌体约 50%、TMV 约 95% 为蛋白；基质蛋白与毒粒相关酶随颗粒包装；gp120 二十余个糖基化位点构成免疫逃逸的「糖盾」',
  draw,
})
