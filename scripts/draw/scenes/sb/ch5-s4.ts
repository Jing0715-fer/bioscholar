// sb ch5-s4 结晶优化策略与特殊技术（Task SB-2）
import { scene, C, B } from '../../lib'

// 微晶菱形（小晶体/微晶种符号）
function crystal(b: B, cx: number, cy: number, r: number, o: { fill?: string; stroke?: string; sw?: number } = {}) {
  b.polygon([[cx, cy - r], [cx + r, cy], [cx, cy + r], [cx - r, cy]], { fill: o.fill ?? C.bg, stroke: o.stroke ?? C.pro, sw: o.sw ?? 1.4 })
}

const draw = (b: B) => {
  // ============ 一、梯度网格 ============
  b.panel(30, 132, 660, 420, { title: '一、梯度网格：围绕命中点三维展开' })
  // 6×6 网格（沉淀剂 × pH），颜色即析出物形态
  const kind: Record<string, { fill: string; stroke: string }> = {
    清: { fill: '#ffffff', stroke: C.line },
    微: { fill: C.warnL, stroke: C.warn },
    晶: { fill: C.okL, stroke: C.ok },
    沉: { fill: C.badL, stroke: C.bad },
  }
  const grid = [
    ['清', '清', '微', '晶', '微', '沉'],
    ['清', '清', '微', '晶', '晶', '沉'],
    ['清', '微', '晶', '晶', '微', '沉'],
    ['清', '微', '晶', '微', '沉', '沉'],
    ['清', '清', '微', '沉', '沉', '沉'],
    ['清', '清', '微', '沉', '沉', '沉'],
  ]
  const pegs = ['15%', '18%', '21%', '24%', '27%', '30%']
  const phs = ['5.5', '6.1', '6.7', '7.3', '7.9', '8.5']
  grid.forEach((row, j) => row.forEach((k, i) => {
    b.rect(90 + i * 62, 195 + j * 36, 62, 36, { fill: kind[k].fill, stroke: kind[k].stroke, sw: 1.2 })
  }))
  pegs.forEach((p, i) => b.ctext(121 + i * 62, 428, p, { size: 9.5, fill: C.mute }))
  phs.forEach((p, j) => b.etext(84, 217 + j * 36, p, { size: 9.5, fill: C.mute }))
  b.etext(84, 190, 'pH', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(276, 452, '沉淀剂 PEG 3350（%）· 步长 2–3%', { size: 10.5, weight: 600, fill: C.sub })
  // 命中点强调
  b.rect(276, 267, 62, 36, { fill: 'none', stroke: C.ok, sw: 2.6 })
  b.ctext(307, 289, '命中', { size: 10, weight: 700, fill: C.okD })
  // 形态序列箭头：沉淀经微晶到单晶
  b.arrow(420, 378, 330, 296, { stroke: C.ink, sw: 2, dash: '7 5', marker: 'ink' })
  b.ctext(432, 398, '形态序列', { size: 9.5, weight: 700, fill: C.ink })
  b.legend(96, 486, [['清亮', '#ffffff'], ['微晶', C.warnL], ['单晶', C.okL], ['沉淀', C.badL]], { size: 10, gap: 10 })
  // 右列文字
  b.text(476, 198, '三维展开', { size: 11, weight: 700, fill: C.ink })
  b.wtext(476, 218, '沉淀剂：PEG 3350 自 15% 至 30%，步长 2–3%。pH：5.5–8.5，步长 0.3。蛋白浓度：5/10/15/20 mg/mL。', { size: 10.5, fill: C.sub, maxW: 200, lh: 15 })
  b.text(476, 310, '判读要点', { size: 11, weight: 700, fill: C.ink })
  b.wtext(476, 330, '记录析出物形态随梯度的变化方向，沉淀经微晶到单晶的序列，说明正逼近亚稳区，下一轮网格朝该方向继续收敛。', { size: 10.5, fill: C.sub, maxW: 200, lh: 15 })
  b.wtext(70, 516, '初筛命中只是坐标，优化才是结晶真正的战场——项目的结晶工时大半耗在这里；网格的价值在于让形态序列自己指路。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 二、晶种技术 ============
  b.panel(710, 132, 660, 420, { title: '二、晶种技术：把成核与生长解耦' })
  // streak seeding 行
  crystal(b, 752, 200, 20, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(752, 240, '母晶', { size: 9.5, fill: C.mute })
  b.line(802, 172, 782, 204, { stroke: C.ink, sw: 1.2 })
  b.arrow(778, 200, 828, 200, { stroke: C.enz, sw: 1.6, dash: '5 4', marker: 'enz' })
  b.ellipse(856, 200, 20, 15, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  for (const [px, py] of [[850, 195], [860, 202], [852, 206]]) b.circle(px, py, 2, { fill: C.enz })
  b.ctext(856, 240, '新液滴', { size: 9.5, fill: C.mute })
  b.wtext(900, 186, 'streak seeding：睫毛或探针划过母晶粘附微晶，再划过新液滴——十秒完成、零设备，适合同条件微调。', { size: 10.5, fill: C.sub, maxW: 440, lh: 15 })
  // microseeding 稀释系列
  const tubeX = [758, 836, 914, 992, 1070, 1148, 1226, 1304]
  const counts = [10, 5, 3, 2, 1, 1, 0, 0]
  const offs: Array<[number, number]> = [[-10, -14], [9, -16], [-4, -8], [4, -4], [-9, 2], [9, 4], [0, -21], [0, 10], [-14, -4], [14, -7]]
  tubeX.forEach((cx, i) => {
    b.rect(cx - 17, 265, 34, 82, { fill: C.bg, stroke: C.sub, sw: 1.5, rx: 8 })
    b.rect(cx - 15, 300, 30, 45, { fill: C.proL, fillOp: 0.8, rx: 5 })
    const n = counts[i]
    const pts = n === 1 ? [[0, -8]] : offs.slice(0, n)
    for (const [dx, dy] of pts) b.circle(cx + dx, 322 + dy, 2.2, { fill: C.pro })
    b.ctext(cx, 364, `10^{−${i + 1}}`, { size: 10.5, fill: C.sub })
  })
  b.rect(971, 262, 120, 88, { fill: 'none', stroke: C.ok, sw: 2.2, dash: '6 4', rx: 10 })
  b.ctext(1031, 382, '目标稀释度', { size: 9.5, weight: 700, fill: C.okD })
  b.arrow(740, 390, 1330, 390, { stroke: C.mute, sw: 1.5, marker: 'mute' })
  b.ctext(1035, 410, '逐管稀释 10 倍 · 微晶核数递减（各取 0.1–0.5 μL 加入新液滴）', { size: 10, fill: C.sub })
  b.wtext(730, 432, 'microseeding：晶体捣碎制成悬液，作 10^{−1} 至 10^{−8} 的系列稀释——稀释度对应引入的微晶核数目，「核数」成为可调参数。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 476, '原理即把成核与生长解耦：晶种绕过均相成核能垒，亚稳区「只长不长核」提供纯净生长环境——成核区造核、亚稳区养晶；交叉播种可用同源蛋白的晶种破冰。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、添加剂屏幕 ============
  b.panel(30, 572, 660, 390, { title: '三、添加剂屏幕：按病因选药' })
  b.table(50, 620, 620, {
    headers: ['添加剂', '常用浓度', '作用机制'],
    colW: [168, 128, 324],
    rowH: 34,
    fontSize: 10.5,
    rows: [
      ['二价金属 Mg/Zn/Ca', '1–10 mM', '金属桥连接酸性侧链，稳定晶格接触'],
      ['去垢剂', '低于或近 CMC', '包裹疏水面，抑制界面聚集'],
      ['还原剂 TCEP/DTT', '0.5–2 mM', '维持巯基还原态，防二聚与失活'],
      ['精氨酸等氨基酸', '50–100 mM', '屏蔽聚集倾向、调控成核速率'],
      ['甘油', '5–10%', '微调过饱和、稳定折叠、兼作防冻剂'],
    ],
  })
  b.wtext(50, 856, '添加剂常以 1:1000 或 1:100 体积比加入命中条件，一板 96 孔即可扫完一座小型化合物库；谷氨酸与精氨酸配对可把某些抗体的可溶浓度提高数倍。机理多数不透明——或改变晶格接触、或稳定构象、或微调过饱和，但命中即赚到。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、LCP 脂立方相 ============
  b.panel(710, 572, 660, 390, { title: '四、LCP 脂立方相：膜蛋白的高速公路' })
  // 双注射器推混
  b.rect(738, 618, 52, 26, { fill: C.bg, stroke: C.sub, sw: 1.6, rx: 3 })
  b.line(740, 631, 720, 631, { stroke: C.sub, sw: 2.5 })
  b.rect(852, 618, 52, 26, { fill: C.bg, stroke: C.sub, sw: 1.6, rx: 3 })
  b.line(902, 631, 922, 631, { stroke: C.sub, sw: 2.5 })
  b.rect(790, 622, 62, 18, { fill: C.panelB, stroke: C.line, sw: 1.4 })
  b.ctext(764, 612, '单油酸甘油酯', { size: 9.5, fill: C.mute })
  b.ctext(878, 612, '蛋白溶液', { size: 9.5, fill: C.mute })
  b.arrow(821, 648, 821, 666, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.text(836, 662, '反复推混', { size: 9.5, fill: C.rnaD })
  // LCP 双连续立方相
  b.ellipse(821, 706, 60, 40, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.path('M 768,694 q 13,-8 26,0 t 26,0 t 26,0 t 26,0', { fill: 'none', stroke: C.rna, sw: 1.6, opacity: 0.6 })
  b.path('M 768,720 q 13,8 26,0 t 26,0 t 26,0 t 26,0', { fill: 'none', stroke: C.rna, sw: 1.6, opacity: 0.6 })
  for (const [px, py] of [[795, 684], [800, 708], [848, 689], [843, 714]]) b.rect(px, py, 7, 14, { fill: C.pro, rx: 3 })
  crystal(b, 823, 697, 9, { fill: C.bg, stroke: C.proD, sw: 1.8 })
  b.arrow(902, 696, 874, 703, { stroke: C.acc, sw: 1.5, dash: '4 3', marker: 'acc' })
  b.arrow(902, 720, 876, 714, { stroke: C.acc, sw: 1.5, dash: '4 3', marker: 'acc' })
  b.ctext(821, 760, '双连续立方相 · 水通道直径 4–10 nm', { size: 9.5, weight: 700, fill: C.rnaD })
  b.ctext(821, 778, '沉淀剂经水通道向内扩散', { size: 9.5, fill: C.accD })
  // 右列文字
  b.wtext(915, 614, 'monoolein 与蛋白溶液约 2:3 质量比，在双注射器中反复推混，自发形成双连续立方相——膜蛋白在脂相中保持天然取向。', { size: 10.5, fill: C.sub, maxW: 430, lh: 15 })
  b.wtext(915, 674, '脂质不是惰性载体：头部基团参与晶格接触——LCP 常产出高衍射质量晶体。约 20 °C、含水 20–50% 区间成立方相（Ia3d 转 Pn3m），筛选常以 Pn3m 区为目标。', { size: 10.5, fill: C.sub, maxW: 430, lh: 15 })
  b.wtext(915, 734, '2007 年 β2 肾上腺素受体与 Fab 复合物的里程碑结构即由 in meso 路线获得；机器人以 50–200 nL 液滴铺 96 孔玻璃板，成像须借助紫外（蛋白在脂相中不透可见光）。', { size: 10.5, fill: C.sub, maxW: 430, lh: 15 })
  // 蛋白工程（终局手段）
  b.wtext(730, 812, '终局手段是改造蛋白本身：SER 表面熵减把表面簇集的 Glu/Lys/Gln/Arg 改为 Ala/Ser，每次突变 2–4 个、并行数种组合，近半数「顽固蛋白」获改善；构建体截短去除柔性尾巴，共结晶伴侣（Fab、单域抗体）既固定构象又提供晶格接触。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // 底部收束
  b.ctext(700, 972, '四武器按成本排序：晶种极低、网格与添加剂低、LCP 居中、蛋白工程最高（须回到上游）——先便宜后昂贵，是结晶优化的经济学', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '结晶优化四武器：梯度网格、添加剂、晶种与 LCP',
  subtitle: '梯度网格 PEG 15–30%、pH 5.5–8.5、蛋白 5–20 mg/mL；添加剂 1–10 mM 二价金属与 5–10% 甘油；microseeding 10^{−1}–10^{−8}；LCP monoolein 比蛋白 2:3',
  draw,
})
