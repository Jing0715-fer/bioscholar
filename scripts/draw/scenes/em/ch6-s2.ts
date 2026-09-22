// em ch6-s2 载网与支持膜类型（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、载网：mesh 与网材 ============
  b.panel(30, 132, 660, 296, { title: '一、载网：3.05 mm 金属圆网与 mesh 数' })
  const gcx = 150, gcy = 275, gr = 95
  b.circle(gcx, gcy, gr, { fill: '#ffffff', stroke: C.sub, sw: 2.4 })
  for (let i = -3; i <= 3; i++) {
    const dy = i * 26
    const hw = Math.sqrt(gr * gr - dy * dy)
    b.line(gcx - hw, gcy + dy, gcx + hw, gcy + dy, { stroke: C.faint, sw: 1.1 })
    b.line(gcx + dy, gcy - hw, gcx + dy, gcy + hw, { stroke: C.faint, sw: 1.1 })
  }
  b.ctext(gcx, 396, '直径 3.05 mm', { size: 10.5, fill: C.mute })
  // mesh 对比（孔阵示意）
  const holes = (x: number, y: number, n: number, cell: number) => {
    b.rect(x, y, 130, 130, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
    for (let j = 0; j < n; j++) for (let k = 0; k < n; k++)
      b.rect(x + 7 + j * cell, y + 7 + k * cell, cell - 7, cell - 7, { fill: C.panelB, stroke: C.line, sw: 0.9 })
  }
  holes(300, 185, 3, 38.7)
  holes(450, 185, 6, 19.3)
  b.ctext(365, 334, '200', { size: 11, weight: 700, fill: C.sub })
  b.ctext(515, 334, '400', { size: 11, weight: 700, fill: C.sub })
  b.ctext(430, 356, '200 mesh：孔宽约 100–120 μm（开孔约三至五成）', { size: 10, fill: C.sub })
  b.ctext(430, 374, '400 mesh：孔宽约 30–40 μm，膜跨度小、更稳定', { size: 10, fill: C.sub })
  b.text(300, 400, '铜：导热约 400 W/(m·K)，便宜——常规首选', { size: 10, fill: C.mute })
  b.text(300, 416, '金：约 310，束致运动小、不析出颗粒——高分辨', { size: 10, fill: C.mute })
  b.text(300, 432, '镍：约 90，铁磁性——坚硬平整的特殊场合', { size: 10, fill: C.mute })

  // ============ 二、支持膜三条路线 ============
  b.panel(710, 132, 660, 296, { title: '二、支持膜三条路线' })
  const film = (cx: number, t: string, s: string, fill: string, stroke: string) => {
    b.circle(cx, 250, 55, { fill, stroke, sw: 2 })
    b.ctext(cx, 338, t, { size: 11, weight: 700, fill: stroke === C.warn ? C.rna : C.sub })
    b.ctext(cx, 356, s, { size: 9.5, fill: C.mute })
  }
  film(820, '连续碳膜（约 10–20 nm）', '全覆盖；颗粒贴膜、取向偏置', '#e2e8f0', C.sub)
  // Quantifoil 规整孔阵
  b.circle(1030, 250, 55, { fill: '#ffffff', stroke: C.sub, sw: 2 })
  for (const dx of [-32, 0, 32]) for (const dy of [-32, 0, 32])
    b.circle(1030 + dx, 250 + dy, 11, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(1030, 338, 'Quantifoil R1.2/1.3', { size: 11, weight: 700, fill: C.sub })
  b.ctext(1030, 356, '孔径 1.2 μm / 间距 1.3 μm；冰悬孔中', { size: 9.5, fill: C.mute })
  // UltrAuFoil 金箔
  b.circle(1240, 250, 55, { fill: '#fef3c7', stroke: '#b45309', sw: 2 })
  for (const dx of [-32, 0, 32]) for (const dy of [-32, 0, 32])
    b.circle(1240 + dx, 250 + dy, 11, { fill: '#ffffff', stroke: '#b45309', sw: 1.5 })
  b.ctext(1240, 338, 'UltrAuFoil 金箔（约 25 nm）', { size: 11, weight: 700, fill: C.rna })
  b.ctext(1240, 356, '导电导热佳、束致运动低、污染少', { size: 9.5, fill: C.mute })
  b.ctext(1040, 384, '孔型谱系：R0.6/1（薄冰小孔）→ R1.2/1.3（单颗粒默认）→ R2/1、R2/2（断层大孔）', { size: 10, fill: C.sub })
  b.ctext(1040, 406, '石墨烯、硫化钼等单层膜：背景近乎为零的极限选项，制备与转移精细', { size: 10, fill: C.mute })

  // ============ 三、辉光放电 ============
  b.panel(30, 452, 660, 300, { title: '三、辉光放电：把疏水碳膜变成亲水界面' })
  b.line(60, 545, 290, 545, { stroke: C.sub, sw: 3 })
  b.path('M 130,545 A 45,45 0 0 1 220,545', { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(175, 572, '未处理：接触角 > 90°', { size: 10.5, weight: 600, fill: C.bad })
  b.ctext(175, 588, '（水滴缩成球、颗粒附不上）', { size: 9.5, fill: C.mute })
  b.arrow(175, 600, 175, 628, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.tag(175, 648, '空气等离子体 15–30 mA、30–60 s', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: C.warnD, pad: 9 })
  b.line(60, 680, 290, 680, { stroke: C.sub, sw: 3 })
  b.path('M 90,680 Q 175,648 260,680', { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(175, 702, '放电后：< 20°（铺展、带微弱负电）', { size: 10.5, weight: 600, fill: C.ok })
  b.tag(495, 522, '空气等离子 → 负电·亲水', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(495, 554, '戊胺气氛 → 正电（吸附核酸）', { fill: C.proL, stroke: C.pro, size: 11, tfill: C.proD, pad: 9 })
  b.tag(495, 586, '氢等离子 → 最温和（石墨烯）', { fill: C.dnaL, stroke: C.dna, size: 11, tfill: C.dnaD, pad: 9 })
  b.wtext(330, 624, '放电后载网宜数小时内用掉（表面能随时间衰减）；上机前 30–60 s 氧等离子清洗另除有机污染——两个步骤先后与目的都不同。', { size: 10.5, fill: C.sub, maxW: 320, lh: 15 })

  // ============ 四、载网选择速查 ============
  b.panel(710, 452, 660, 300, { title: '四、载网选择速查' })
  b.table(730, 496, 620, {
    headers: ['应用场景', '推荐配置'],
    colW: [240, 380], rowH: 30, fontSize: 11.5,
    rows: [
      ['负染筛查', '200–300 mesh 连续碳膜铜网'],
      ['常规冷冻单颗粒', 'Quantifoil R1.2/1.3 铜网'],
      ['高分辨单颗粒', 'UltrAuFoil 金箔网格'],
      ['核酸与酸性样品', '戊胺放电连续碳膜'],
      ['电子断层', '较大孔径规格（如 R2/1）'],
      ['微晶电子衍射', 'R2/1 大孔铜网'],
      ['小分子量蛋白', 'R0.6/1 或小孔金箔'],
    ],
  })

  // ============ 五、一张载网上的多重设计 ============
  b.zone(30, 776, 1340, 200, {
    label: '五、一张载网上的多重设计',
    sub: '冰的形态 × 颗粒界面命运 × 束的行为——每一项都直接写进第 7–8 章的数据质量',
  })
  const chain = (x: number, t: string, fill: string, stroke: string, tfill: string) => {
    b.rect(x, 852, 270, 46, { fill, stroke, sw: 1.6, rx: 8 })
    b.ctext(x + 135, 880, t, { size: 11.5, weight: 600, fill: tfill })
  }
  chain(60, '冰的形态：贴碳膜 vs 悬于孔中', C.dnaL, C.dna, C.dnaD)
  chain(370, '颗粒界面：碳界面 vs 空气-水界面', C.proL, C.pro, C.proD)
  chain(680, '束的行为：束致运动与污染强弱', C.rnaL, C.rna, C.rnaD)
  chain(990, '第 7–8 章：数据质量', C.okL, C.ok, C.okD)
  b.arrow(332, 875, 366, 875, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(642, 875, 676, 875, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(952, 875, 986, 875, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.wtext(60, 930, '批次管理：同一批 Quantifoil 的孔径一致性、辉光放电参数漂移、滤纸含湿量、乙烷纯度都会在数据里留下指纹——成熟实验室把放电参数与制备日期写进台账。', { size: 10.5, fill: C.sub, maxW: 1250, lh: 15 })
}

export default scene({
  title: '载网与支持膜：热学、束学与界面的隐形参与者',
  subtitle: '铜/金网 200–400 mesh（200 mesh 孔宽约 100–120 μm）；连续碳膜约 10–20 nm vs Quantifoil R1.2/1.3 vs UltrAuFoil 金箔约 25 nm；辉光放电 15–30 mA、30–60 s',
  draw,
})
