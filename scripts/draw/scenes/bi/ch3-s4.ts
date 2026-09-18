// bi ch3-s4 局部比对：Smith-Waterman 与仿射空位（39-i 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、NW vs SW ============
  b.panel(30, 132, 900, 500, { title: '一、从 NW 到 SW：两处「微小而深刻」的修改（1981）' })

  const grid = (gx: number, gy: number, mode: 'nw' | 'sw') => {
    const n = 6
    const cs = 38
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const x = gx + j * cs
        const y = gy + i * cs
        if (mode === 'nw') {
          const op = 0.1 + 0.055 * (i + j)
          b.rect(x, y, cs - 2, cs - 2, { fill: C.dna, fillOp: Math.min(op, 0.75), stroke: 'none' })
        } else {
          // SW：负分截断——矩阵边缘与远离对角带的区域归零（浅），对角带上出现高峰
          const d = Math.abs(i - j)
          let op: number
          if (d >= 3) op = 0.04
          else op = [0.5, 0.34, 0.16][d]
          b.rect(x, y, cs - 2, cs - 2, { fill: C.dna, fillOp: op, stroke: 'none' })
        }
      }
    }
    // 网格线
    for (let i = 0; i <= n; i++) {
      b.line(gx, gy + i * cs, gx + n * cs, gy + i * cs, { stroke: C.faint, sw: 1 })
      b.line(gx + i * cs, gy, gx + i * cs, gy + n * cs, { stroke: C.faint, sw: 1 })
    }
  }

  // 左：NW
  b.ctext(215, 196, 'Needleman-Wunsch（全局）', { size: 13.5, weight: 700, fill: C.sub })
  grid(95, 214, 'nw')
  b.rect(95 + 5 * 38 + 1, 214 + 5 * 38 + 1, 35, 35, { fill: 'none', stroke: C.ink, sw: 2.6, rx: 3 })
  b.polyline([[303, 422], [265, 384], [227, 346], [189, 308], [151, 270], [117, 236]], { stroke: C.bad, sw: 2.6, dash: '6 4' })
  b.arrow(117, 236, 110, 229, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.text(95, 480, 'H(i,j) = max{ H(i−1,j−1)+s, H(i−1,j)−d, H(i,j−1)−d }', { size: 12, weight: 700, fill: C.sub })
  b.text(95, 504, '回溯：右下角 → 左上角，强制整条路径', { size: 11.5, fill: C.mute })
  b.wtext(95, 540, '负分一路累积：整条序列必须全部参与比对。', { size: 11, fill: C.mute, maxW: 380, lh: 15 })

  // 右：SW
  b.ctext(665, 196, 'Smith-Waterman（局部）', { size: 13.5, weight: 700, fill: C.dnaD })
  grid(545, 214, 'sw')
  // 最大值单元（在对角带上）
  b.rect(545 + 4 * 38 + 1, 214 + 3 * 38 + 1, 35, 35, { fill: 'none', stroke: C.bad, sw: 2.8, rx: 3 })
  b.text(782, 340, '全矩阵最大值', { size: 11.5, weight: 700, fill: C.bad })
  b.polyline([[716, 347], [678, 309], [640, 271]], { stroke: C.bad, sw: 2.6, dash: '6 4' })
  b.arrow(640, 271, 633, 264, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.rect(545 + 2 * 38 + 1, 214 + 1 * 38 + 1, 35, 35, { fill: 'none', stroke: C.ok, sw: 2.2, rx: 3 })
  b.text(782, 372, '遇零即停', { size: 11.5, weight: 700, fill: C.ok })
  b.text(545, 480, 'H(i,j) = max{ 0, H(i−1,j−1)+s, H(i−1,j)−d, H(i,j−1)−d }', { size: 12, weight: 700, fill: C.dnaD })
  b.text(545, 504, '回溯：从最大值出发 → 遇零即停；负分被截断，零是新的起跑线', { size: 11.5, fill: C.mute })
  b.wtext(545, 540, '两处修改让比对可以只取各自内部最相似的片段对——适配域重组与嵌合情形。', { size: 11, fill: C.mute, maxW: 380, lh: 15 })

  // ============ 二、仿射空位 ============
  b.panel(960, 132, 410, 500, { title: '二、仿射空位：开与延的分账' })
  // 比对卡通：x 连续，y 中间断开
  b.rect(990, 196, 300, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.rect(990, 262, 110, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.rect(1180, 262, 110, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.line(1100, 272, 1180, 272, { stroke: C.warn, sw: 2.4, dash: '7 5' })
  b.text(984, 186, '序列 x', { size: 11, fill: C.mute })
  b.text(984, 252, '序列 y', { size: 11, fill: C.mute })
  ;[1006, 1030, 1054, 1078].forEach(x => b.line(x, 216, x, 262, { stroke: C.faint, sw: 1.2 }))
  ;[1196, 1220, 1244, 1268].forEach(x => b.line(x, 216, x, 262, { stroke: C.faint, sw: 1.2 }))
  b.braceH(1100, 300, 80, { label: '一个长空位（长度 L）', fill: '#92400e', size: 11 })
  b.wtext(990, 352, '空位罚分 = go + (L−1)·ge：新开（go）与延长（ge）分账——长空位不再按长度线性重罚。', { size: 11.5, fill: C.sub, maxW: 360, lh: 16 })
  // Gotoh 三矩阵
  b.text(990, 400, 'Gotoh（1982）三矩阵递推', { size: 13, weight: 700, fill: C.ink })
  const mats: Array<[number, string, string]> = [
    [990, 'M', '残基对残基'],
    [1123, 'Ix', 'x 对空位'],
    [1256, 'Iy', '空位对 y'],
  ]
  mats.forEach(([x, t, s]) => {
    b.rect(x, 416, 100, 56, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
    b.ctext(x + 50, 448, t, { size: 15, weight: 700, fill: C.accD })
    b.ctext(x + 50, 488, s, { size: 10.5, fill: C.mute })
  })
  b.arrow(1092, 444, 1119, 444, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1225, 444, 1252, 444, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.path('M 1306,476 L 1306,502 L 1040,502 L 1040,478', { stroke: C.sub, sw: 1.8, marker: 'ink', fill: 'none' })
  b.wtext(990, 530, '三矩阵互相递推，复杂度仍为 O(mn)——精确解与实用性的折中。', { size: 11, fill: C.sub, maxW: 360, lh: 15 })

  // ============ 三、实用化 ============
  b.panel(30, 656, 1340, 304, { title: '三、把精确算法推回实用区间' })
  const opts: Array<[string, string]> = [
    ['带状 DP', '只算对角带内的单元——牺牲远处换速度'],
    ['X-drop 截断', '延伸中分数跌到阈值以下即丢弃'],
    ['线性空间', '分治复用内存，行列只留当前与上一行'],
    ['向量化', '同一指令处理一排单元（SIMD 并行）'],
  ]
  opts.forEach(([t, s], i) => {
    const x = 60 + i * 328
    b.rect(x, 716, 300, 110, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 10, fillOp: 0.5 })
    b.ctext(x + 150, 748, t, { size: 15, weight: 700, fill: C.accD })
    b.wtext(x + 150, 780, s, { size: 11, fill: C.sub, maxW: 272, lh: 15, anchor: 'middle' })
  })
  b.rect(60, 852, 1280, 62, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 8, fillOp: 0.5 })
  b.wtext(80, 874, 'Smith-Waterman 是数据库搜索的理论金标准——其打分行为的统计理论（Karlin-Altschul）正是 BLAST 的基石。', { size: 12.5, weight: 600, fill: C.dnaD, maxW: 1240, lh: 17 })
}

export default scene({
  title: 'Smith-Waterman 局部比对：负分截断与仿射空位',
  subtitle: '在递推中加入零选项实现负分截断，回溯改从全矩阵最大值出发、遇零即停；仿射空位把「新开 go」与「延长 ge」分账，Gotoh（1982）用 M、Ix、Iy 三矩阵递推、复杂度仍 O(mn)；带状 DP、X-drop、线性空间与向量化把精确算法推回实用区间',
  draw,
})
