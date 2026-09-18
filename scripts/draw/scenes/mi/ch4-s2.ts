// mi ch4-s2 烈性噬菌体增殖与一步生长曲线（39-f 批2）
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、增殖五阶段 ============
  b.panel(30, 132, 1340, 290, { title: '一、烈性噬菌体增殖的五阶段：吸附 → 侵入 → 生物合成 → 装配 → 裂解释放' })

  const stages: Array<[number, string, string]> = [
    [180, '① 吸附', '尾丝识别表面受体（脂多糖、外膜蛋白等）——决定宿主特异性'],
    [440, '② 侵入', '注射器式注入：仅核酸进入，空衣壳留在胞外'],
    [700, '③ 生物合成', '早期表达复制酶与调控蛋白；晚期表达结构蛋白与裂解系统'],
    [960, '④ 装配', '结构蛋白自组装：头部、尾部与尾丝依次就位'],
    [1220, '⑤ 裂解释放', '穿孔素与裂解系统破壁，子代噬菌体释放'],
  ]
  stages.forEach(([cx, t, s]) => {
    b.ctext(cx, 185, t, { size: 14, weight: 700, fill: C.ink })
    b.wtext(cx, 300, s, { size: 10.5, fill: C.sub, maxW: 240, lh: 15 })
  })
  // 阶段间箭头
  for (let i = 0; i < 4; i++) b.arrow(180 + i * 260 + 110, 235, 440 + i * 260 - 110, 235, { stroke: C.faint, sw: 2, marker: 'mute' })

  // ① 吸附：细菌 + 结合的噬菌体
  b.bacterium(180, 248, 130, 40, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  b.virion(180, 197, 15, { shape: 'icosahedral' })
  b.line(180, 214, 180, 228, { stroke: C.bad, sw: 2 })
  // ② 侵入：核酸注入
  b.bacterium(440, 248, 130, 40, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  b.virion(440, 197, 15, { shape: 'icosahedral' })
  b.arrow(440, 214, 440, 246, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.ctext(508, 222, '核酸', { size: 9.5, weight: 700, fill: C.dnaD })
  // ③ 生物合成
  b.bacterium(700, 248, 130, 40, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  b.dna(665, 248, 70, { amp: 6, period: 26, stroke: C.rna, sw: 1.8, rungC: C.rna })
  b.circle(745, 242, 3.5, { fill: C.pro })
  b.circle(752, 254, 3.5, { fill: C.pro })
  b.circle(738, 256, 3, { fill: C.enz })
  // ④ 装配
  b.bacterium(960, 248, 130, 40, { shape: 'rod', fill: C.dnaL, stroke: C.dnaD })
  b.virion(935, 240, 9, { shape: 'icosahedral' })
  b.virion(965, 254, 9, { shape: 'icosahedral' })
  b.virion(990, 242, 9, { shape: 'icosahedral' })
  // ⑤ 裂解
  b.path('M 1155 228 Q 1180 248, 1155 268', { stroke: C.bad, sw: 3 })
  b.path('M 1285 228 Q 1260 248, 1285 268', { stroke: C.bad, sw: 3 })
  b.virion(1175, 238, 10, { shape: 'icosahedral' })
  b.virion(1220, 252, 10, { shape: 'icosahedral' })
  b.virion(1262, 236, 10, { shape: 'icosahedral' })

  // ============ 二、一步生长曲线 ============
  b.panel(30, 442, 1340, 300, { title: '二、一步生长曲线（Ellis 与 Delbrück，1939）：潜隐期 → 胞内累积期 → 裂解期 → 平顶期' })

  const ax = 140, ay = 680, aw = 620, ah = 190
  // 分期底色
  b.rect(ax + 0.30 * aw, ay - ah, 0.15 * aw, ah, { fill: C.badL, fillOp: 0.35 })
  b.rect(ax + 0.45 * aw, ay - ah, 0.55 * aw, ah, { fill: C.okL, fillOp: 0.3 })
  b.axis(ax, ay, aw, ah, {
    xlabel: '同步感染后的培养时间', ylabel: '噬菌体效价（对数坐标）',
    xticks: [[0.075, '潜隐期'], [0.375, '裂解期'], [0.72, '平顶期']],
    yticks: [[0.03, '低'], [0.5, '中'], [0.95, '高']],
  })
  // 总效价曲线（实线）
  b.curve(ax, ay, aw, ah, [
    [0, 0.03], [0.15, 0.03], [0.30, 0.03], [0.34, 0.10], [0.38, 0.38],
    [0.42, 0.72], [0.45, 0.92], [0.55, 0.93], [0.75, 0.94], [1, 0.94],
  ], { stroke: C.dna, sw: 3 })
  // 胞内累积曲线（虚线）
  b.curve(ax, ay, aw, ah, [
    [0.08, 0.03], [0.18, 0.22], [0.26, 0.45], [0.34, 0.72], [0.42, 0.90], [0.46, 0.92],
  ], { stroke: C.enz, sw: 2.2, dash: '7 5' })
  b.ctext(ax + 0.20 * aw, ay - 0.52 * ah, '胞内累积（提前裂解可检出）', { size: 10, weight: 700, fill: C.enzD })

  // 裂解量双箭头
  b.line(ax + 0.87 * aw, ay - 0.03 * ah, ax + 0.87 * aw, ay - 0.94 * ah, { stroke: C.bad, sw: 2.2, marker: 'bad', markerStart: 'bad' })
  b.text(ax + 0.87 * aw + 10, ay - 0.5 * ah, '平均裂解量 =', { size: 11, weight: 700, fill: C.bad })
  b.text(ax + 0.87 * aw + 10, ay - 0.5 * ah + 18, '平顶效价 ÷ 初始感染数', { size: 10, fill: C.bad })

  // 右侧要点卡
  b.rect(800, 470, 540, 250, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  const notes: Array<[string, string]> = [
    ['实验设计', '低感染复数同步吸附 → 稀释（或抗血清中和）终止吸附 → 定时取样测效价'],
    ['潜隐期', '胞内无可检出噬菌体（核酸已注入、子代未装配完）'],
    ['胞内累积期', '提前人为裂解可检出胞内子代噬菌体'],
    ['裂解期', '宿主细胞同步裂解，效价陡升'],
    ['平顶期', '裂解全部完成，效价不再变化'],
    ['裂解量（T4，37 ℃）', '每细胞平均释放约 100–200 个子代噬菌体'],
  ]
  notes.forEach(([t, s], i) => {
    b.circle(820, 502 + i * 36 - 4, 3.5, { fill: C.acc })
    b.text(832, 502 + i * 36, t, { size: 12, weight: 700, fill: C.ink })
    b.text(832 + textW(t, 12, 700) + 12, 502 + i * 36, s, { size: 11, fill: C.sub })
  })

  // ============ 三、噬菌斑与效价 ============
  b.panel(30, 762, 1340, 218, { title: '三、噬菌斑与效价测定：双层平板法以 PFU 计量' })

  // 平板示意
  b.circle(210, 890, 72, { fill: C.dnaL, fillOp: 0.35, stroke: C.dna, sw: 2.2 })
  const plaques: Array<[number, number, number]> = [
    [185, 862, 9], [230, 868, 7], [258, 895, 8], [195, 905, 6], [222, 922, 9],
    [170, 886, 5], [248, 858, 5], [240, 925, 6], [268, 878, 5], [180, 930, 6], [255, 912, 4],
  ]
  plaques.forEach(([x, y, r]) => b.circle(x, y, r, { fill: '#ffffff', stroke: C.bad, sw: 1.6 }))
  b.ctext(210, 980, '双层平板上的噬菌斑（每斑≈1 个噬菌体的后代）', { size: 10.5, fill: C.mute })

  // 中：计数原则
  b.rect(330, 800, 420, 160, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 9 })
  b.text(350, 828, '计数原则', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(350, 852, '选择每平板 30–300 个噬菌斑的稀释度计数——过密无法分辨、过疏统计误差大。', { size: 11.5, fill: C.sub, maxW: 380, lh: 18 })
  b.wtext(350, 906, '上层培养基混入敏感菌与样品，噬菌体裂解形成透明斑。', { size: 11.5, fill: C.sub, maxW: 380, lh: 18 })

  // 右：计算示例
  b.rect(780, 800, 550, 160, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(800, 828, '效价计算示例', { size: 13.5, weight: 700, fill: C.accD })
  b.wtext(800, 852, '样品稀释至 10⁻⁶，取 0.1 mL 与敏感菌及熔化的上层培养基混匀倾注平板，培养后计数 45 个噬菌斑。', { size: 11.5, fill: C.sub, maxW: 510, lh: 18 })
  b.text(800, 916, '效价 = 45 ÷ 0.1 mL × 10⁶ = 4.5×10⁸ PFU/mL', { size: 14, weight: 700, fill: C.ink })
}

export default scene({
  title: '烈性噬菌体的增殖与一步生长曲线：五阶段与裂解量',
  subtitle: '吸附-侵入-生物合成-装配-裂解五阶段；一步生长曲线分潜隐期、胞内累积期、裂解期与平顶期；T4 于 37 ℃ 平均裂解量约 100–200；噬菌斑计数选每平板 30–300 个斑',
  draw,
})
