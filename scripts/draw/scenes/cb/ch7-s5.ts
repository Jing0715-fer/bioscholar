// cb ch7-s5 核型分析与巨大染色体（39-d 批A 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、丹佛体制：核型分组 ============
  b.panel(30, 132, 660, 430, { title: '一、核型（karyotype）：丹佛体制 A—G 七组（2n=46）' })
  // 中期染色体示意（p 短臂在上、q 长臂在下；两姐妹单体并排）
  const chromX = (cx: number, cy: number, pL: number, qL: number) => {
    for (const dx of [-5, 5]) {
      b.line(cx + dx, cy - pL, cx + dx, cy - 6, { stroke: C.dna, sw: 4.5 })
      b.line(cx + dx, cy + 6, cx + dx, cy + qL, { stroke: C.dna, sw: 4.5 })
    }
    b.line(cx - 7, cy, cx + 7, cy, { stroke: C.pro, sw: 5 })
  }
  const groups: Array<[string, string, number, number, string]> = [
    ['A', '1—3', 62, 62, '中着丝粒·最大'],
    ['B', '4—5', 40, 74, '亚中着丝粒'],
    ['C', '6—12＋X', 36, 78, '亚中着丝粒'],
    ['D', '13—15', 14, 82, '近端着丝粒'],
    ['E', '16—18', 30, 56, '16 中／17—18 亚中'],
    ['F', '19—20', 34, 34, '中着丝粒·小'],
    ['G', '21—22＋Y', 10, 40, '端着丝粒·最小'],
  ]
  groups.forEach((g, i) => {
    const cx = 92 + i * 84
    const cy = 330
    chromX(cx, cy, g[2], g[3])
    b.tag(cx, 208, g[0], { fill: C.proL, stroke: C.pro, size: 11, weight: 700, tfill: C.proD, pad: 5 })
    b.ctext(cx, 232, g[1], { size: 9, weight: 700, fill: C.sub })
    b.ctext(cx, 432, g[4], { size: 8.5, fill: C.mute })
  })
  b.wtext(64, 470, '1956 年 Tjio 与 Levan 确定人类二倍体为 46 条染色体；描述格式：染色体号-臂-区-带-亚带（如 7q31.2，p 短臂／q 长臂）。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })
  b.wtext(64, 512, 'G 显带：胰酶预处理后 Giemsa 染色，深带多为 AT 富集的晚复制区；另有 Q 带（喹吖因荧光）、R 带（深浅相反）、C 带（结构异染色质）；前中期高分辨显带可达 850 带以上。', { size: 10, fill: C.mute, maxW: 600, lh: 14 })

  // ============ 二、核型分析的应用：染色体病 ============
  b.panel(710, 132, 660, 430, { title: '二、核型分析的应用：21 三体与费城染色体' })
  // -- 唐氏综合征 --
  b.text(740, 186, '唐氏综合征（21 三体）', { size: 11.5, weight: 700, fill: C.ink })
  const ds = (cx: number) => {
    for (const dx of [-4, 4]) {
      b.line(cx + dx, 232, cx + dx, 242, { stroke: C.dna, sw: 4 })
      b.line(cx + dx, 250, cx + dx, 290, { stroke: C.dna, sw: 4 })
    }
    b.line(cx - 6, 246, cx + 6, 246, { stroke: C.pro, sw: 4.5 })
  }
  ds(770); ds(810); ds(850)
  b.ctext(810, 312, '47,XX/XY,+21', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(740, 344, 'Down 1866 年描述、Lejeune 1959 年确认为 21 三体；约 95% 源于减数分裂不分离，母亲高龄风险陡增。', { size: 9.5, fill: C.sub, maxW: 270, lh: 13.5 })
  // -- 费城染色体 --
  b.text(1050, 186, '费城染色体（Ph）：t(9;22) 易位', { size: 11.5, weight: 700, fill: C.ink })
  // 9 号（大，亚中）易位到 22 号（小）
  for (const dx of [-4, 4]) {
    b.line(1090 + dx, 220, 1090 + dx, 232, { stroke: C.dna, sw: 4 })
    b.line(1090 + dx, 244, 1090 + dx, 296, { stroke: C.dna, sw: 4 })
    b.line(1240 + dx, 248, 1240 + dx, 256, { stroke: C.dna, sw: 4 })
    b.line(1240 + dx, 262, 1240 + dx, 296, { stroke: C.dna, sw: 4 })
  }
  b.line(1082, 238, 1098, 238, { stroke: C.pro, sw: 4 })
  b.line(1232, 259, 1248, 259, { stroke: C.pro, sw: 4 })
  b.ctext(1090, 312, '9 号', { size: 9.5, fill: C.sub })
  b.ctext(1240, 312, '22 号', { size: 9.5, fill: C.sub })
  b.arrow(1122, 252, 1200, 252, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(1162, 238, 't(9;22)', { size: 10, weight: 700, fill: C.bad })
  b.tag(1330, 288, 'Ph', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 5 })
  b.wtext(1050, 344, 'Nowell 与 Hungerford 1960 年发现；产生 BCR-ABL 融合基因，是慢性髓系白血病的分子标志，也是首个被发现的人类肿瘤标志染色体。', { size: 9.5, fill: C.sub, maxW: 290, lh: 13.5 })
  // -- 其他应用 --
  b.tag(750, 430, '罗伯逊易位 rob(14;21)：携带者生育三体后代风险增高', { fill: C.warnL, stroke: C.warn, size: 9.5, tfill: '#78350f', pad: 6 })
  b.tag(1140, 430, '产前诊断：羊水 / 绒毛核型与 NIPT（母血浆游离胎儿 DNA）', { fill: C.accL, stroke: C.acc, size: 9.5, tfill: C.accD, pad: 6 })
  b.wtext(740, 486, '核型指将一个细胞中期染色体按大小与着丝粒位置系统排列的图像。', { size: 10, fill: C.mute, maxW: 600, lh: 14 })

  // ============ 三、巨大染色体：多线与灯刷 ============
  b.panel(30, 576, 1340, 404, { title: '三、巨大染色体：多线染色体与灯刷染色体的天然放大' })
  // -- 多线染色体 --
  b.text(64, 618, '多线染色体（果蝇等双翅目幼虫唾液腺）', { size: 11.5, weight: 700, fill: C.ink })
  b.rect(70, 650, 470, 52, { fill: C.dnaL, stroke: C.dna, sw: 2.2, rx: 22 })
  for (let i = 0; i < 34; i++) {
    const bx = 84 + i * 13.6
    const bw = i % 3 === 0 ? 5 : i % 3 === 1 ? 3 : 6.5
    b.rect(bx, 655, bw, 42, { fill: C.dna, fillOp: i % 2 === 0 ? 0.75 : 0.45, rx: 2 })
  }
  b.ctext(305, 722, '深浅相间的横带（band）与间带（interband）', { size: 9.5, fill: C.sub })
  // 胀泡
  b.ellipse(586, 676, 46, 32, { fill: C.warnL, stroke: C.warn, sw: 2.2 })
  b.ctext(586, 672, '胀泡', { size: 11, weight: 700, fill: '#78350f' })
  b.ctext(586, 688, '（puff）', { size: 9, fill: C.mute })
  b.wtext(64, 760, '间期染色体经历约 10 轮 DNA 复制而不分离、同源染色体体细胞配对，形成约 1024 条染色质丝并排的巨型染色体。', { size: 10, fill: C.sub, maxW: 540, lh: 14 })
  b.wtext(64, 808, '基因激活位点局部解螺旋形成胀泡：蜕皮激素（ecdysone）注射后特定位点依时序胀大；Balbiani 环（BR）上可见新生 mRNA 转录本。', { size: 10, fill: C.mute, maxW: 540, lh: 14 })
  b.tag(160, 868, '光镜直接可见基因表达调控', { fill: C.warnL, stroke: C.warn, size: 10, tfill: '#78350f', pad: 6 })
  b.tag(420, 868, '经典体系：染色体水平', { fill: C.panelB, stroke: C.mute, size: 10, tfill: C.mute, pad: 6 })
  // -- 灯刷染色体 --
  b.text(720, 618, '灯刷染色体（两栖类卵母细胞减数分裂双线期）', { size: 11.5, weight: 700, fill: C.ink })
  b.line(730, 700, 1290, 700, { stroke: C.dna, sw: 5 })
  b.ctext(1010, 684, '染色体轴（同源以交叉相连）', { size: 9.5, fill: C.sub })
  const loops = [770, 850, 930, 1010, 1090, 1170, 1250]
  loops.forEach((lx, i) => {
    const ly = i % 2 === 0 ? 660 : 740
    b.ellipse(lx, ly, 20, 26, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  })
  b.ctext(1010, 792, '数百个侧环（loop）：每个环是一个或数个高度活跃的转录单位', { size: 9.5, fill: C.sub })
  // 圣诞树小图
  b.path('M 760,840 q 10,-8 20,0 q 10,-8 20,0 q 10,-8 20,0 q 10,-8 20,0', { stroke: C.dna, sw: 3 })
  for (let i = 0; i < 9; i++) {
    const tx = 762 + i * 10
    b.line(tx, 838, tx - 8, 818, { stroke: C.rna, sw: 1.4 })
    b.line(tx, 842, tx + 8, 822, { stroke: C.rna, sw: 1.4 })
  }
  b.text(856, 828, '“圣诞树”样转录泡', { size: 10, weight: 700, fill: C.rnaD })
  b.text(856, 846, '（Miller 展铺法显示）', { size: 9, fill: C.mute })
  b.wtext(1000, 828, '电镜下直接可视基因转录与 RNA 加工，是研究真核基因表达与染色体高级结构的天然放大模型（放大数千倍）。', { size: 10, fill: C.sub, maxW: 330, lh: 14 })
}

export default scene({
  title: '核型分析与巨大染色体：从丹佛体制到天然放大系统',
  subtitle: '人类 2n=46，丹佛体制 A—G 七组、G 显带常规；21 三体与 t(9;22) BCR-ABL 为经典核型病；多线染色体 1024 条丝与胀泡、灯刷染色体侧环为天然放大体系',
  draw,
})
