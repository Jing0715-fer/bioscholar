// im ch7-s3 补体活化的调节：多重刹车与同源限制（39-g 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、调节总格局：四级关卡 ============
  b.panel(30, 132, 1340, 286, { title: '一、调节总格局：可溶性与膜型两类调节蛋白，对级联逐级设卡' })

  const gates: Array<[number, string, string, string, string, string]> = [
    [70, '关卡 ①', '启动阶段', 'C1r / C1s（及 MASP）', 'C1-INH（血清）', '共价灭活丝氨酸蛋白酶，把级联扼杀于起步'],
    [390, '关卡 ②', '转化酶阶段', 'C3/C5 转化酶（C4b2a · C3bBb）', 'C4bp · H 因子 · DAF · CR1', '竞争置换与加速衰变：C4bp 抢占 C4b、H 因子竞争 Bb，膜上 DAF/CR1 促解离'],
    [710, '关卡 ③', '游离片段命运', 'C3b 与 C4b', 'I 因子（血清）', '蛋白酶解灭活，需辅因子陪伴：H 因子 · C4bp · MCP · CR1'],
    [1030, '关卡 ④', '末端通路', 'MAC 组装（C5b-6-7-8-9n）', 'S 蛋白（SP-40/40）· CD59', 'S 蛋白阻止 C5b-7 插入膜磷脂；CD59 阻断 C9 聚合与 MAC 组装'],
  ]
  gates.forEach(([x, no, stage, target, reg, mech]) => {
    b.rect(x, 190, 280, 62, { fill: C.enzL, fillOp: 0.45, stroke: C.enz, sw: 1.7, rx: 8 })
    b.text(x + 14, 210, `${no} ${stage}`, { size: 10.5, weight: 700, fill: C.enz })
    b.text(x + 14, 230, target, { size: 12.5, weight: 700, fill: C.enzD })
    b.wtext(x + 14, 242, '级联靶标', { size: 9, fill: C.mute, maxW: 250, lh: 11 })
    b.arrow(x + 140, 254, x + 140, 272, { stroke: C.bad, sw: 2, marker: 'bad' })
    b.rect(x, 274, 280, 78, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.7, rx: 8 })
    b.text(x + 14, 296, '刹车', { size: 9.5, weight: 700, fill: C.bad, opacity: 0.85 })
    b.text(x + 52, 296, reg, { size: 11.5, weight: 700, fill: C.bad })
    b.wtext(x + 14, 316, mech, { size: 9.5, fill: C.sub, maxW: 254, lh: 13 })
  })
  b.arrow(352, 221, 388, 221, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(672, 221, 708, 221, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(992, 221, 1028, 221, { stroke: C.mute, sw: 2, marker: 'mute' })

  b.rect(70, 362, 1240, 40, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(90, 386, '可溶性（血清）：C1-INH · C4bp · H 因子 · I 因子 · S 蛋白', { size: 11, weight: 600, fill: C.ink })
  b.text(620, 386, '膜型（自身细胞）：DAF · MCP · CR1 · CD59', { size: 11, weight: 600, fill: C.ink })
  b.text(1010, 386, '同源限制：补体只攻「非我」', { size: 11, weight: 700, fill: C.bad })

  // ============ 二、液相调节三员大将 ============
  b.panel(30, 434, 1340, 270, { title: '二、液相调节三员大将：C1-INH · C4bp · H/I 因子轴' })

  const sols: Array<[number, number, string, string, string]> = [
    [60, 390, 'C1 抑制物（C1-INH）', '共价灭活 C1r/C1s 与 MASP——启动酶被拆械，经典与凝集素途径双双断电', C.acc],
    [475, 380, 'C4 结合蛋白（C4bp）', '高分子量可溶性糖蛋白：与 C2a 竞争 C4b 位点，加速经典 C3 转化酶 C4b2a 衰变解离，兼作 I 因子辅因子', C.pro],
    [875, 465, 'H 因子：自我与非我的分界线', '竞争 Bb、加速 C3bBb 衰变；借对宿主表面唾液酸等多阴离子结构的亲和识别「自己」——旁路途径核心负调轴', C.dna],
  ]
  sols.forEach(([x, w, t, s, col]) => {
    b.rect(x, 484, w, 96, { fill: col, fillOp: 0.08, stroke: col, sw: 1.6, rx: 9 })
    b.text(x + 16, 508, t, { size: 12.5, weight: 700, fill: col })
    b.wtext(x + 16, 526, s, { size: 10, fill: C.sub, maxW: w - 34, lh: 14 })
  })

  b.text(60, 600, 'I 因子：依赖辅因子的丝氨酸蛋白酶，把 C3b / C4b 逐段拆解为失活片段', { size: 12, weight: 700, fill: C.ink })
  const chain1: Array<[number, number, string]> = [
    [60, 66, 'C3b'], [166, 80, 'iC3b'], [286, 178, 'C3dg + C3c'],
  ]
  chain1.forEach(([x, w, s], i) => {
    b.rect(x, 614, w, 30, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.4, rx: 6 })
    b.ctext(x + w / 2, 633, s, { size: 11.5, weight: 700, fill: C.enzD })
    if (i < 2) b.arrow(x + w + 6, 629, x + w + 34, 629, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  })
  b.ctext(226, 672, 'I 因子 + 辅因子', { size: 9.5, weight: 700, fill: C.mute })
  const chain2: Array<[number, number, string]> = [
    [520, 66, 'C4b'], [626, 178, 'C4d + C4c'],
  ]
  chain2.forEach(([x, w, s], i) => {
    b.rect(x, 614, w, 30, { fill: C.enzL, fillOp: 0.5, stroke: C.enz, sw: 1.4, rx: 6 })
    b.ctext(x + w / 2, 633, s, { size: 11.5, weight: 700, fill: C.enzD })
    if (i < 1) b.arrow(x + w + 6, 629, x + w + 34, 629, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  })
  b.ctext(645, 672, 'I 因子 + 辅因子', { size: 9.5, weight: 700, fill: C.mute })
  b.wtext(860, 622, '辅因子军团：H 因子 · C4bp · MCP（CD46）· CR1（CD35）——没有辅因子，I 因子无从下剪。', { size: 10.5, fill: C.sub, maxW: 480, lh: 15 })
  b.wtext(860, 652, '裂解产物 iC3b、C3dg 仍可被 CR3/CR4 等受体识别，保留调理功能。', { size: 10, fill: C.mute, maxW: 480, lh: 14 })

  // ============ 三、膜型调节与疾病 ============
  b.panel(30, 720, 1340, 254, { title: '三、膜型调节与同源限制：自身细胞上的四重防线及其失守' })

  b.table(60, 768, 620, {
    headers: ['膜型蛋白', 'CD', '主要靶标', '作用机制'],
    colW: [150, 78, 152, 240],
    rowH: 31,
    fontSize: 10.5,
    rows: [
      ['DAF', 'CD55', 'C3/C5 转化酶', '竞争置换，加速衰变'],
      ['MCP', 'CD46', 'C3b、C4b', 'I 因子辅因子'],
      ['CR1', 'CD35', 'C3b、C4b', '加速衰变并兼辅因子'],
      ['CD59', '（GPI 锚）', 'C5b-8、C9', '阻断 C9 聚合与 MAC 组装'],
    ],
  })
  b.text(60, 948, 'DAF 与 CD59 均以 GPI 锚定于膜——这为 PNH 埋下伏笔。', { size: 10.5, weight: 600, fill: C.mute })

  b.rect(710, 768, 630, 82, { fill: C.warnL, fillOp: 0.5, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(728, 792, 'C1-INH 遗传缺陷 → 遗传性血管神经性水肿（HAE）', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(728, 812, '反复发作、不伴瘙痒的皮肤黏膜水肿——启动闸门失灵，缓激肽样效应放大。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  b.rect(710, 862, 630, 96, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(728, 886, 'PNH（阵发性睡眠性血红蛋白尿）：GPI 锚防线整体失守', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(728, 908, 'PIGA 基因突变 → GPI 锚合成障碍 → DAF 与 CD59 双缺失 → 红细胞对补体异常敏感 → 血管内溶血与血红蛋白尿。', { size: 10.5, fill: C.sub, maxW: 592, lh: 16 })
}

export default scene({
  title: '补体活化的调节：四级刹车与同源限制',
  subtitle: '补体调节蛋白分可溶性与膜型两类，对启动酶（C1-INH 灭活 C1r/C1s 及 MASP）、C3/C5 转化酶（C4bp 与 H 因子加速衰变）、C3b/C4b 命运（I 因子依赖辅因子裂解为 iC3b、C3dg 等失活片段）与 MAC 组装（S 蛋白、CD59）逐级设卡；H 因子借宿主表面唾液酸分辨自我与非我；C1-INH 缺陷致遗传性血管神经性水肿，PIGA 突变致 GPI 锚缺陷、DAF 与 CD59 缺失而发生 PNH',
  draw,
})
