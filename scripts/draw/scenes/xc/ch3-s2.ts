// xc ch3-s2 成核理论与结晶相图（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、相图四区 ============
  b.panel(30, 132, 660, 420, { title: '一、结晶相图四区：液滴的地形图' })
  const sol = [[110, 480], [250, 450], [400, 400], [530, 355], [640, 320]] as [number, number][]
  const off1 = [[110, 430], [250, 400], [400, 350], [530, 305], [640, 270]] as [number, number][]
  const off2 = [[110, 380], [250, 350], [400, 300], [530, 255], [640, 220]] as [number, number][]
  // 四区填充
  b.polygon([...sol, [640, 505], [110, 505]], { fill: C.accL, fillOp: 0.75 })
  b.polygon([...sol, ...[...off1].reverse()], { fill: C.okL, fillOp: 0.85 })
  b.polygon([...off1, ...[...off2].reverse()], { fill: C.warnL, fillOp: 0.9 })
  b.polygon([...off2, [640, 185], [110, 185]], { fill: C.badL, fillOp: 0.75 })
  // 边界曲线
  b.spline(sol, { stroke: C.ink, sw: 2.4 })
  b.spline(off1, { stroke: C.sub, sw: 1.6, dash: '7 5' })
  b.spline(off2, { stroke: C.sub, sw: 1.6, dash: '7 5' })
  // 坐标轴
  b.line(110, 505, 650, 505, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(110, 505, 110, 178, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(380, 530, '沉淀剂浓度 →', { size: 13, weight: 600, fill: C.sub })
  b.ctext(84, 172, '蛋白浓度 ↑', { size: 13, weight: 600, fill: C.sub })
  b.ctext(490, 478, '不饱和区', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(490, 497, '晶体溶解、变小', { size: 10, fill: C.mute })
  b.ctext(430, 428, '亚稳区', { size: 12.5, weight: 700, fill: C.okD })
  b.ctext(430, 447, '只长不生·养晶区', { size: 10, fill: C.mute })
  b.ctext(430, 378, '成核区', { size: 12.5, weight: 700, fill: C.warnD })
  b.ctext(430, 397, '新核不断冒出', { size: 10, fill: C.mute })
  b.ctext(300, 215, '沉淀区', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(300, 234, '絮状·油滴·聚集', { size: 10, fill: C.bad })
  b.ctext(500, 386, '溶解度曲线', { size: 10, weight: 600, fill: C.sub })
  // 蒸气扩散轨迹
  b.path('M 170,468 C 240,430 300,392 330,332', { fill: 'none', stroke: C.bad, sw: 2.4, dash: '6 4', marker: 'bad' })
  b.path('M 336,330 C 350,360 380,400 430,414', { fill: 'none', stroke: C.dna, sw: 2.4, dash: '6 4', marker: 'dna' })
  b.ctext(212, 380, '① 等比例浓缩', { size: 10, weight: 700, fill: C.bad })
  b.ctext(216, 396, '（蒸气扩散）', { size: 10, fill: C.bad })
  b.ctext(428, 380, '② 晶核消耗溶质', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(428, 396, '回落亚稳区养晶', { size: 10, fill: C.dnaD })
  b.ctext(300, 460, '亚稳区宽度因蛋白而异：宽者好养晶、窄者易跨入沉淀', { size: 10, fill: C.sub })

  // ============ 二、经典成核理论 ΔG(r) ============
  b.panel(710, 132, 660, 420, { title: '二、经典成核理论：表面惩罚与体积收益的竞争' })
  const ax = 780, ay = 480, aw = 520, ah = 280
  b.ctext(1040, 196, 'ΔG(r) = 4πr^{2}γ − (4/3)πr^{3}·ρΔμ', { size: 13, weight: 700, fill: C.ink })
  b.line(ax, ay, ax + aw + 14, ay, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(ax, ay, ax, ay - ah - 14, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(ax + aw / 2, ay + 26, '核半径 r →', { size: 12.5, weight: 600, fill: C.sub })
  b.etext(ax - 10, ay - ah + 6, 'ΔG', { size: 12.5, weight: 600, fill: C.sub })
  b.line(ax, 354, ax + aw, 354, { stroke: C.faint, sw: 1.2, dash: '4 4' })
  b.ctext(ax + aw - 44, 348, '0', { size: 10.5, fill: C.mute })
  const fx = (r: number) => ax + r * aw
  const fy = (v: number) => ay - v * ah
  b.polyline([[fx(0), fy(0.45)], [fx(0.25), fy(0.481)], [fx(0.5), fy(0.575)], [fx(0.75), fy(0.731)], [fx(1), fy(0.95)]], { stroke: C.warn, sw: 2, dash: '7 4' })
  b.polyline([[fx(0), fy(0.45)], [fx(0.25), fy(0.443)], [fx(0.5), fy(0.3975)], [fx(0.75), fy(0.273)], [fx(1), fy(0.03)]], { stroke: C.acc, sw: 2, dash: '7 4' })
  b.polyline([[fx(0), fy(0.45)], [fx(0.12), fy(0.472)], [fx(0.25), fy(0.492)], [fx(0.38), fy(0.51)], [fx(0.5), fy(0.545)], [fx(0.6), fy(0.56)], [fx(0.7), fy(0.545)], [fx(0.8), fy(0.485)], [fx(0.9), fy(0.4)], [fx(1), fy(0.3)]], { stroke: C.enz, sw: 3 })
  b.ctext(fx(0.78), fy(0.79), '表面项 4πr^{2}γ', { size: 11, weight: 700, fill: C.warn })
  b.ctext(fx(0.62), fy(0.2), '体积项 −(4/3)πr^{3}ρΔμ', { size: 11, weight: 700, fill: C.accD })
  b.ctext(fx(0.62), fy(0.62), 'ΔG 总曲线', { size: 11, weight: 700, fill: C.enzD })
  b.line(fx(0.6), ay, fx(0.6), fy(0.56), { stroke: C.mute, sw: 1.4, dash: '4 4' })
  b.ctext(fx(0.6), ay + 16, 'r*', { size: 12, weight: 700, fill: C.ink, italic: true })
  b.line(ax, fy(0.56), fx(0.6), fy(0.56), { stroke: C.mute, sw: 1.4, dash: '4 4' })
  b.ctext(ax + 30, fy(0.56) - 8, 'ΔG*', { size: 12, weight: 700, fill: C.ink, italic: true })
  b.wtext(730, 528, '临界核 r* = 2γ/(ρΔμ)；能垒 ΔG* = 16πγ^{3}/(3(Δμ)^{2}ρ^{2})。成核速率近似正比于 exp(−ΔG*/kT)——对过饱和度极其陡峭：S = c/c*，Δμ = kT·ln S，小幅提高 S 可使速率跨越数个数量级（「一夜满板微晶」与「三周无一核」的两极命运）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15.5 })

  // ============ 三、两步成核与异相成核 ============
  b.panel(30, 572, 660, 390, { title: '三、两步成核：液滴先行' })
  const step = (x: number, t1: string, t2: string) => {
    b.rect(x, 630, 130, 92, { fill: '#ffffff', stroke: C.line, sw: 1.6, rx: 8 })
    b.ctext(x + 65, 652, t1, { size: 11, weight: 700, fill: C.sub })
    b.ctext(x + 65, 670, t2, { size: 9.5, fill: C.mute })
  }
  step(55, '① 过饱和溶液', '分子散布')
  for (let i = 0; i < 16; i++) b.circle(75 + (i * 53) % 96, 700 + (i * 37) % 14, 2.2, { fill: C.mute })
  step(207, '② 致密液滴', '无序·可逆涨落')
  b.circle(272, 706, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2
    b.circle(272 + 15 * Math.cos(a), 706 + 11 * Math.sin(a), 2.2, { fill: C.rna })
  }
  step(359, '③ 滴内萌发晶核', '有序相出现')
  b.circle(424, 706, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.rect(414, 696, 20, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.8 })
  b.line(424, 696, 424, 716, { stroke: C.dna, sw: 1.2 })
  b.line(414, 706, 434, 706, { stroke: C.dna, sw: 1.2 })
  step(511, '④ 晶体', '逐层生长')
  b.polygon([[549, 688], [585, 682], [598, 702], [583, 726], [548, 722]], { fill: C.accL, stroke: C.acc, sw: 2 })
  b.arrow(186, 676, 204, 676, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(338, 676, 356, 676, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(490, 676, 508, 676, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.wtext(60, 756, '韦基洛夫与潘等用光学显微镜对溶菌酶等体系给出直接证据：晶核在致密液滴中出现、液滴本身可逆涨落——解释成核对蛋白浓度异常陡的依赖与「先浑浊后出晶」的肉眼时序；「沉淀」与「结晶」由此从对立变成前后相继。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15.5 })
  b.wtext(60, 826, '异相成核：尘埃、划痕、纤维、器壁与残晶充当现成界面——「半个核」已就位、能垒更低。无尘操作、0.22 μm 过滤与硅化盖片的物理理由正在于此。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15.5 })

  // ============ 四、亚稳区养晶与晶种 ============
  b.panel(710, 572, 660, 390, { title: '四、成核要快、生长要慢：晶种解耦' })
  b.tag(850, 636, '成核要快', { fill: C.badL, stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 10 })
  b.ctext(850, 668, '须高过饱和跨过能垒', { size: 10.5, fill: C.sub })
  b.arrow(960, 636, 1050, 636, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(1005, 620, '时间上切开', { size: 10, weight: 700, fill: C.ink })
  b.tag(1160, 636, '生长要慢', { fill: C.okL, stroke: C.ok, size: 12, weight: 700, tfill: C.okD, pad: 10 })
  b.ctext(1160, 668, '低过饱和逐层铺展、缺陷最少', { size: 10.5, fill: C.sub })
  b.text(730, 712, '晶种三法（种子已就位，液滴只管在亚稳区内生长）：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(790, 742, 'streak seeding 须晶划种', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 8 })
  b.tag(1000, 742, 'microseeding 梯度稀释 10^{-1}–10^{-8}', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 8 })
  b.tag(1250, 742, 'macro-seeding 大晶续长', { fill: C.accL, stroke: C.acc, size: 10.5, tfill: C.accD, pad: 8 })
  b.wtext(730, 782, '与晶种组合的 MMS（微晶种基质筛选）把「成核数目」变成可调参数——在整套面板上逐条件投送同一种子，常把「永不结晶」的蛋白拉出 hit。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15.5 })
  b.wtext(730, 838, '奥斯特瓦尔德阶段规则：体系常先析出与母相界面能最低的亚稳相——同一液滴先后两种晶型、第一波微晶被取代皆由此解释；最先出现的晶体未必是最终值得收集的那一个。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15.5 })
  b.ctext(1040, 920, '工业蛋白结晶（胰岛素量产纯化）与结构生物学结晶同遵此框架', { size: 11, weight: 700, fill: C.sub })
}

export default scene({
  title: '成核理论与结晶相图：四区、能垒与两步成核',
  subtitle: '相图四区（不饱和/亚稳/成核/沉淀）；ΔG(r)=4πr²γ−(4/3)πr³ρΔμ，r*=2γ/(ρΔμ)、ΔG*=16πγ³/(3(Δμ)²ρ²)；成核速率∝exp(−ΔG*/kT)；致密液滴先行；晶种解耦成核与生长',
  draw,
})
