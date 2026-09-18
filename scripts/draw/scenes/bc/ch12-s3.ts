// bc ch12-s3 激素调节与 cAMP 信号级联（39-a 最终收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、cAMP 级联：逐级放大 ============
  b.panel(30, 132, 700, 478, { title: '一、分解级联：Gs → AC → cAMP → PKA，放大 10⁶~10⁸ 倍' })
  const rows: [number, string, string, string, string][] = [
    [196, '激素（胰高血糖素 / 肾上腺素）', C.warnL, C.warn, '#78350f'],
    [248, '受体 → Gs 蛋白（GTP 开关）', C.proL, C.pro, C.proD],
    [300, '腺苷酸环化酶（AC）', C.proL, C.pro, C.proD],
    [352, 'cAMP ↑（第二信使）', C.rnaL, C.rna, C.rnaD],
    [404, 'PKA（蛋白激酶 A）', C.enzL, C.enz, C.enzD],
    [456, '磷酸化大量靶酶', C.dnaL, C.dna, C.dnaD],
  ]
  rows.forEach(([y, s, fill, stroke, tfill]) => {
    b.rect(80, y, 240, 34, { fill, fillOp: 0.55, stroke, sw: 1.6, rx: 7 })
    b.ctext(200, y + 22, s, { size: 11.5, weight: 600, fill: tfill })
  })
  for (let i = 0; i < rows.length - 1; i++) {
    b.arrow(200, rows[i][0] + 36, 200, rows[i + 1][0] - 4, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  }
  // 右侧放大阶梯
  b.ctext(510, 208, '逐级放大', { size: 13, weight: 700, fill: C.accD })
  b.ctext(510, 224, '（信号灵敏性的分子基础）', { size: 9.5, fill: C.mute })
  const bars: [number, number, string][] = [
    [80, 240, '1 个激素分子'],
    [140, 292, '多个 Gs · AC 被激活'],
    [200, 344, '催化生成大量 cAMP'],
    [260, 396, '大量 PKA 被活化'],
    [320, 448, '磷酸化大量靶酶'],
  ]
  bars.forEach(([w, y, label], i) => {
    b.rect(350, y, w, 24, { fill: C.accL, fillOp: 0.5 + i * 0.1, stroke: C.acc, sw: 1.5, rx: 4 })
    b.text(360, y + 16, label, { size: 9.5, weight: 600, fill: C.accD })
  })
  for (let i = 0; i < bars.length - 1; i++) {
    b.arrow(360, bars[i][1] + 26, 360, bars[i + 1][1] - 4, { stroke: C.acc, sw: 1.4, marker: 'acc' })
  }
  b.tag(510, 508, '级联放大 10⁶~10⁸ 倍', { fill: C.enzL, stroke: C.enz, size: 12.5, weight: 700, tfill: C.enzD, pad: 10 })
  b.wtext(56, 534, '靶器官差异：胰高血糖素主要作用于肝；肾上腺素作用于肝与肌肉（「战或逃」快速供能），并经 IP₃ / DAG-PKC 与 Ca²⁺ 协同；糖皮质激素为慢调节（诱导糖异生关键酶转录）。', { size: 10.5, fill: C.sub, maxW: 640, lh: 15 })

  // ============ 二、胰岛素（RTK）：唯一降糖激素 ============
  b.panel(750, 132, 620, 478, { title: '二、合成信号：胰岛素 RTK → IRS → PI3K → Akt' })
  b.text(770, 186, '血糖 ↑ → β 细胞分泌（唯一降糖激素）', { size: 9.5, fill: C.mute })
  b.rect(770, 196, 80, 36, { fill: C.okL, fillOp: 0.6, stroke: C.ok, sw: 1.6, rx: 7 })
  b.ctext(810, 219, '胰岛素', { size: 11.5, weight: 700, fill: '#065f46' })
  b.arrow(850, 214, 884, 214, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(886, 196, 150, 36, { fill: C.okL, fillOp: 0.6, stroke: C.ok, sw: 1.6, rx: 7 })
  b.ctext(961, 219, 'RTK（酪氨酸激酶）', { size: 11, weight: 600, fill: '#065f46' })
  b.arrow(1036, 214, 1068, 214, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1070, 196, 50, 36, { fill: C.panelB, stroke: C.sub, sw: 1.5, rx: 7 })
  b.ctext(1095, 219, 'IRS', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(1120, 214, 1154, 214, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1156, 196, 60, 36, { fill: C.panelB, stroke: C.sub, sw: 1.5, rx: 7 })
  b.ctext(1186, 219, 'PI3K', { size: 11.5, weight: 700, fill: C.ink })
  b.arrow(1216, 214, 1250, 214, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(1252, 196, 60, 36, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 1.6, rx: 7 })
  b.ctext(1282, 219, 'Akt', { size: 11.5, weight: 700, fill: C.proD })
  // Akt 下游效应
  b.arrow(1282, 234, 1282, 258, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.line(905, 258, 1282, 258, { stroke: C.pro, sw: 1.5 })
  b.arrow(905, 258, 905, 284, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.arrow(1205, 258, 1205, 284, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ctext(1055, 278, 'Akt 下游效应（合成代谢全开）', { size: 10.5, weight: 700, fill: C.proD })
  const fx: [number, number, string, string, string, string, string][] = [
    [770, 288, 'GLUT4 转位', '肌 / 脂肪摄糖 ↑', C.dnaL, C.dna, C.dnaD],
    [770, 352, '糖原合酶激活', '去磷酸化 · 糖原合成 ↑', C.okL, C.ok, '#065f46'],
    [770, 416, 'PFK-2 去磷酸化', 'F-2,6-BP ↑ → 糖酵解 ↑', C.accL, C.acc, C.accD],
    [1070, 288, 'ACC 活性 ↑', '脂肪酸合成 ↑', C.rnaL, C.rna, C.rnaD],
    [1070, 352, 'HSL 去磷酸化失活', '脂解 ↓', C.enzL, C.enz, C.enzD],
    [1070, 416, '蛋白合成 ↑ / 降解 ↓', '基因表达调控', C.proL, C.pro, C.proD],
  ]
  fx.forEach(([x, y, t, s, fill, stroke, tfill]) => {
    b.rect(x, y, 270, 52, { fill, fillOp: 0.5, stroke, sw: 1.5, rx: 8 })
    b.ctext(x + 135, y + 23, t, { size: 12, weight: 700, fill: tfill })
    b.ctext(x + 135, y + 43, s, { size: 10, fill: C.sub })
  })
  b.wtext(770, 492, '胰岛素（唯一降糖激素）受体为酪氨酸激酶型（RTK）：IRS-PI3K-Akt 促 GLUT4 转位与合成代谢；PKA 级联促分解——两套信号互为镜像，随血糖涨落切换。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })

  // ============ 三、PKA 靶点与整合总表 ============
  b.panel(30, 644, 1340, 336, { title: '三、PKA 磷酸化靶点与激素-代谢整合总表' })
  b.text(60, 688, 'PKA 磷酸化的关键靶点（分解代谢 ↑）', { size: 12.5, weight: 700, fill: C.ink })
  const targets: [number, string][] = [
    [714, '磷酸化酶 b 激酶活化 → 糖原分解 ↑'],
    [742, '糖原合酶磷酸化失活 → 糖原合成 ↓'],
    [770, 'PFK-2 / FBPase-2 磷酸化 → F-2,6-BP ↓ → 糖异生 ↑↑'],
    [798, 'ACC 磷酸化失活 → 丙二酰CoA ↓ → CPT-I 解抑 → β氧化 · 生酮 ↑'],
  ]
  targets.forEach(([y, s]) => {
    b.rect(60, y - 8, 8, 8, { fill: C.enz })
    b.text(76, y + 2, s, { size: 11, fill: C.sub })
  })
  b.rect(56, 830, 590, 118, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(72, 854, '第二信使与 G 蛋白开关', { size: 12, weight: 700, fill: C.accD })
  b.wtext(72, 878, '第二信使：cAMP · cGMP · IP₃ / DAG · Ca²⁺（PLC 水解 PIP₂ → IP₃ → 内质网 Ca²⁺ 释放）。G 蛋白为 GDP / GTP 开关；霍乱毒素使其 ADP 核糖基化 → Gs 持续激活 → 分泌性腹泻。', { size: 10.5, fill: C.sub, maxW: 550, lh: 15 })
  b.table(700, 690, 630, {
    headers: ['状态', '胰岛素 / 胰高血糖素', '代谢趋势'],
    colW: [130, 200, 300],
    rowH: 42,
    fontSize: 12,
    rows: [
      ['饱食', '↑', '糖原 / 脂 / 蛋白合成'],
      ['空腹', '↓', '糖原分解 · 糖异生 · 脂解'],
      ['饥饿', '↓↓', '糖异生 + 酮体'],
      ['应激 / 运动', '↓ + 肾上腺素 ↑', '快速升糖 · 脂解'],
    ],
  })
  b.wtext(700, 924, '调节三层次：细胞水平（秒级——别构 + 共价修饰）→ 激素水平（分钟~小时）→ 整体水平（神经-体液：低血糖 → 交感兴奋 + 升糖激素）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
}

export default scene({
  title: '激素调节与 cAMP 级联：分解放大 10⁶~10⁸ 倍 vs 胰岛素合成信号',
  subtitle: '胰高血糖素 / 肾上腺素经 Gs-AC-cAMP-PKA 促分解并放大 10⁶~10⁸ 倍；胰岛素经 RTK-IRS-PI3K-Akt 促合成（GLUT4 转位）——两套信号互为镜像',
  draw,
})
