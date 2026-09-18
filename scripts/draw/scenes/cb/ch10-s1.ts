// cb ch10-s1 细胞周期时相与周期时间（39-d 批B 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、周期时相划分（以典型 24 h 周期为例） ============
  b.panel(30, 132, 660, 430, { title: '一、周期时相：G1（含 R 点）→ S → G2 → M（典型 24 h）' })
  // 时相色带（按 24h 比例：G1 11 / S 8 / G2 4 / M 1）
  const phases: Array<[string, number, string, string, string]> = [
    ['G1', 11, '约 11 h', C.acc, C.accL],
    ['S', 8, '约 8 h', C.dna, C.dnaL],
    ['G2', 4, '约 4 h', C.rna, C.rnaL],
    ['M', 1, '约 1 h', C.pro, C.proL],
  ]
  const bx = 70; const bw = 560; const by = 260; const bh = 46
  let ox = bx
  phases.forEach(p => {
    const w = (p[1] / 24) * bw
    b.rect(ox, by, w, bh, { fill: p[4], stroke: p[2], sw: 2 })
    b.ctext(ox + w / 2, by + bh / 2 + 4, p[0], { size: 13, weight: 700, fill: p[3] === C.pro ? C.proD : p[3] })
    b.ctext(ox + w / 2, by + bh + 20, p[2], { size: 9.5, fill: C.mute })
    ox += w
  })
  // R 点标记（G1 末段）
  b.arrow(ox - (1 / 24) * bw - 10, 210, ox - (1 / 24) * bw - 10, 252, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(ox - (1 / 24) * bw - 4, 200, 'R 点（限制点）', { size: 10.5, weight: 700, fill: C.bad })
  // 起止
  b.ctext(bx, 230, '出生', { size: 9.5, fill: C.mute })
  b.ctext(bx + bw, 230, '分裂完成', { size: 9.5, fill: C.mute })
  // 各期事件注释
  const notes: Array<[number, string]> = [
    [bx + 60, 'G1：生长、RNA 与蛋白质合成、中心体开始复制'],
    [bx + 60 + (11 / 24) * bw * 0.4, 'S：基因组精确复制（一次且仅一次）·组蛋白同步组装核小体'],
    [bx + 380, 'G2：合成 cyclin B／MPF 组分，校验复制错误'],
    [bx + 470, 'M：有丝分裂＋胞质分裂'],
  ]
  notes.forEach((n, i) => {
    const y = 356 + i * 26
    b.wtext(n[0] > 500 ? bx + 250 : n[0] > 300 ? bx + 160 : n[0], y, n[1], { size: 9.5, fill: C.sub, maxW: 560, lh: 13 })
  })
  // G0 分支
  b.rect(70, 470, 250, 64, { fill: C.panelB, stroke: C.mute, sw: 1.8, dash: '6 4', rx: 10 })
  b.ctext(195, 492, 'G0 期（离开周期的静息态）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(195, 512, '永久性：神经元·肌细胞', { size: 9, fill: C.mute })
  b.ctext(195, 526, '可逆：肝细胞损伤后重返、淋巴细胞受抗原刺激', { size: 8.5, fill: C.mute })
  b.arrow(200, 466, 200, 306, { stroke: C.mute, sw: 1.6, marker: 'mute', dash: '4 4' })
  b.wtext(360, 480, '中心体复制始于 G1；S 期"一次且仅一次"由复制许可机制保证（见下）。', { size: 9.5, fill: C.mute, maxW: 280, lh: 13 })

  // ============ 二、CDK-cyclin 活性波动 ============
  b.panel(710, 132, 660, 430, { title: '二、CDK-cyclin 复合体活性随周期时相波动' })
  b.axis(760, 480, 560, 270, {
    xlabel: '周期进程', ylabel: '激酶活性', title: '四组核心复合体的时相峰',
    xticks: [[0.06, 'G1 早'], [0.42, 'G1/S'], [0.62, 'S'], [0.8, 'G2'], [0.94, 'M'], [0.99, '']],
    yticks: [[0.06, '低'], [0.55, ''], [0.95, '高']],
  })
  // cyclin D-CDK4/6（G1 低平台）
  b.curve(760, 480, 560, 270, [[0, 0.3], [0.1, 0.42], [0.2, 0.48], [0.32, 0.5], [0.42, 0.4], [0.55, 0.3], [0.75, 0.25], [1, 0.22]], { stroke: C.acc, sw: 2.6, smooth: true, label: 'cyclin D-CDK4/6', labelAt: [0.16, 0.62] })
  // cyclin E-CDK2（G1/S 峰）
  b.curve(760, 480, 560, 270, [[0, 0.05], [0.2, 0.08], [0.32, 0.2], [0.42, 0.78], [0.5, 0.62], [0.6, 0.3], [0.7, 0.12], [1, 0.05]], { stroke: C.dna, sw: 2.6, smooth: true, label: 'cyclin E-CDK2', labelAt: [0.34, 0.86] })
  // cyclin A-CDK2（S/G2 峰）
  b.curve(760, 480, 560, 270, [[0, 0.03], [0.35, 0.05], [0.5, 0.35], [0.62, 0.82], [0.75, 0.66], [0.85, 0.3], [1, 0.05]], { stroke: C.rna, sw: 2.6, smooth: true, label: 'cyclin A-CDK2', labelAt: [0.6, 0.95] })
  // cyclin B-CDK1（M 峰骤升骤降）
  b.curve(760, 480, 560, 270, [[0, 0.02], [0.5, 0.04], [0.7, 0.14], [0.82, 0.35], [0.9, 0.55], [0.94, 0.94], [0.97, 0.3], [1, 0.02]], { stroke: C.pro, sw: 2.8, smooth: true, label: 'cyclin B-CDK1', labelAt: [0.9, 1.0] })
  b.text(740, 540, 'cyclin D 受丝裂原持续诱导（半衰期短）＝"传感器"；E/A/B 由转录与定时降解塑造峰值。', { size: 9.5, fill: C.mute })

  // ============ 三、周期时间差异 · 复制许可 · 流式分析 ============
  b.panel(30, 576, 1340, 404, { title: '三、周期时间差异（主要在 G1）· S 期许可机制 · 流式 DNA 分析' })
  b.table(60, 630, 400, {
    headers: ['细胞类型', '周期时长'],
    colW: [240, 160],
    rowH: 30,
    fontSize: 10,
    rows: [
      ['早期胚胎卵裂（爪蟾、海胆）', '约 30 min（只有 S＋M）'],
      ['小肠隐窝干细胞', '约 12 h'],
      ['典型人培养细胞', '约 24 h'],
      ['肝细胞', '数月乃至不分裂'],
    ],
  })
  b.wtext(60, 800, '周期长短差异主要体现在 G1 期；早期卵裂由母源产物储备驱动、G1/G2 缺如。', { size: 9.5, fill: C.mute, maxW: 400, lh: 13 })
  b.wtext(60, 838, '酵母经典：芽殖酵母 START 点对应 R 点；裂殖酵母 wee1 突变揭示 CDK 磷酸化调控（Nurse）。', { size: 9.5, fill: C.sub, maxW: 400, lh: 13 })
  // pre-RC
  b.text(500, 630, '复制许可（licensing）：一次且仅一次', { size: 11.5, weight: 700, fill: C.ink })
  const rcSteps: Array<[string, string]> = [
    ['M 期末 / G1', 'ORC 识别复制起点 → 装载 Cdc6 与 Cdt1 → 加载 MCM2-7 解旋酶＝前复制复合体（pre-RC）'],
    ['S 期', 'CDK 活性升高：既启动复制，又抑制 pre-RC 再装配（磷酸化降解 Cdt1、出核 Cdc6）'],
    ['保险栓', 'Geminin 结合 Cdt1 阻止重复装载'],
  ]
  rcSteps.forEach((s, i) => {
    const y = 660 + i * 54
    b.tag(560, y, s[0], { fill: i === 1 ? C.badL : i === 2 ? C.warnL : C.okL, stroke: i === 1 ? C.bad : i === 2 ? C.warn : C.ok, size: 9.5, weight: 700, tfill: i === 1 ? C.bad : i === 2 ? '#78350f' : C.ok, pad: 5 })
    b.wtext(500, y + 20, s[1], { size: 9.5, fill: C.sub, maxW: 330, lh: 13 })
  })
  b.wtext(500, 838, '结果：每个 DNA 在单个周期内只复制一次。', { size: 9.5, weight: 700, fill: C.dnaD })
  // 流式
  b.axis(960, 800, 380, 180, {
    xlabel: 'DNA 含量', ylabel: '细胞数', title: '流式细胞术（BrdU / ³H-TdR 标记 S 期）',
    xticks: [[0.05, '2C'], [0.5, ''], [0.95, '4C']], yticks: [[0.08, ''], [0.9, '']],
    grid: false,
  })
  b.curve(960, 800, 380, 180, [[0.02, 0.04], [0.08, 0.5], [0.14, 0.92], [0.2, 0.5], [0.26, 0.22], [0.4, 0.13], [0.55, 0.1], [0.72, 0.12], [0.84, 0.2], [0.9, 0.38], [0.95, 0.56], [0.98, 0.4], [1, 0.1]], { stroke: C.dna, sw: 2.6, smooth: true })
  b.ctext(1078, 770, 'G1 峰（2C）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(1210, 760, 'G2/M 峰（4C）', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(1140, 752, 'S 期（2C—4C）', { size: 9, fill: C.mute })
  b.wtext(960, 862, '脉冲标记有丝分裂曲线法（PLM）测定各时相时长。', { size: 9.5, fill: C.mute, maxW: 380, lh: 13 })
}

export default scene({
  title: '细胞周期时相与周期时间：时相划分、CDK 波动与许可机制',
  subtitle: '人培养细胞 24 h：G1 约 11 h→S 8 h→G2 4 h→M 1 h；四组 CDK-cyclin 依次成峰；周期差异主要在 G1（早期卵裂仅 30 min）；pre-RC 保证复制一次',
  draw,
})
