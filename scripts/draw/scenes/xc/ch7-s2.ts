// xc ch7-s2 Patterson 函数与旋转-平移搜索（Task 4-d）
import { scene, C, B } from '../../lib'

// ---------- 五原子「分子」及其 Patterson 的真实计算 ----------
// 原子（0..1 归一化坐标，Z 为原子序数）：C N C O S
const AT: [number, number, number, string][] = [
  [0.18, 0.30, 6, 'C'], [0.42, 0.18, 7, 'N'], [0.62, 0.46, 6, 'C'], [0.78, 0.72, 8, 'O'], [0.30, 0.70, 16, 'S'],
]
const PAT: [number, number, number, boolean][] = [] // [u,v,峰高∝ZiZj, 是否含 S]
for (let i = 0; i < AT.length; i++) {
  for (let j = 0; j < AT.length; j++) {
    if (i === j) continue
    const u = (AT[i][0] - AT[j][0] + 1) % 1
    const v = (AT[i][1] - AT[j][1] + 1) % 1
    PAT.push([u, v, AT[i][2] * AT[j][2], AT[i][3] === 'S' || AT[j][3] === 'S'])
  }
}

const draw = (b: B) => {
  // ============ 一、五原子分子与其 Patterson ============
  b.panel(30, 132, 660, 430, { title: '一、Patterson 图：峰即原子间向量（五原子实算）' })
  // 分子框
  const mx = 62, my = 196, mw = 170, mh = 150
  b.rect(mx, my, mw, mh, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  b.ctext(mx + mw / 2, my - 8, '分子（5 个原子）', { size: 11, weight: 700, fill: C.sub })
  AT.forEach(([fx, fy, z, sym]) => {
    b.circle(mx + fx * mw, my + fy * mh, 4 + z / 9, { fill: z >= 16 ? C.enzL : C.accL, stroke: z >= 16 ? C.enz : C.acc, sw: 1.8 })
    b.ctext(mx + fx * mw, my + fy * mh - 10 - z / 9, sym, { size: 10, weight: 700, fill: z >= 16 ? C.enzD : C.accD })
  })
  // 示例向量箭头 O→S
  const oP = [mx + 0.78 * mw, my + 0.72 * mh], sP = [mx + 0.30 * mw, my + 0.70 * mh]
  b.arrow(oP[0], oP[1], sP[0], sP[1], { stroke: C.rose, sw: 2.2, marker: 'mute' })
  b.ctext((oP[0] + sP[0]) / 2, (oP[1] + sP[1]) / 2 - 10, '向量 S−O', { size: 9.5, weight: 700, fill: C.rose })
  // Patterson 框
  const pxx = 292, py = 196, pw = 364, ph = 300
  b.rect(pxx, py, pw, ph, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  b.ctext(pxx + pw / 2, py - 8, 'Patterson 图 P(u)：5×4 = 20 个向量峰', { size: 11, weight: 700, fill: C.sub })
  // 原点峰
  const oH = AT.reduce((s, a) => s + a[2] * a[2], 0)
  b.circle(pxx, py, 4 + Math.sqrt(oH) / 3.2, { fill: C.ink, fillOp: 0.9, stroke: C.ink, sw: 1.5 })
  b.ctext(pxx + 18, py + 20, '原点峰（全部原子自我对齐）', { size: 9.5, weight: 700, fill: C.ink })
  PAT.forEach(([u, v, h, hasS]) => {
    b.circle(pxx + u * pw, py + v * ph, 3 + Math.sqrt(h) / 8, { fill: hasS ? C.enz : C.acc, fillOp: 0.75, stroke: hasS ? C.enzD : C.accD, sw: 1.1 })
  })
  // 高亮 u = S − O 峰
  const uSO = (0.30 - 0.78 + 1) % 1, vSO = (0.70 - 0.72 + 1) % 1
  b.circle(pxx + uSO * pw, py + vSO * ph, 12, { fill: 'none', stroke: C.rose, sw: 2.2, dash: '5 4' })
  b.ctext(pxx + uSO * pw + 16, py + vSO * ph + 4, 'u = r_{S}−r_{O}', { size: 9.5, weight: 700, fill: C.rose })
  b.wtext(62, 528, 'P(u) = Σ_{h}|F(h)|^{2}·exp(−2πih·u)（Patterson，1934 年）——以 |F|^{2} 为系数做傅里叶综合，不需要任何相位；峰位给向量两端点的坐标差，峰高近似正比 Z_{1}Z_{2}，含重原子的对最亮眼（红圈与玫红示例）。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(62, 178, '几何意义是自相关：密度与其平移 u 的副本逐点相乘积分，u 恰为某对原子间距时两原子对齐、P(u) 出峰。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 二、峰海与幸存的秩序 ============
  b.panel(710, 132, 660, 430, { title: '二、峰海的账目：幸存的取向信息与 Harker 截面' })
  // 账目三行
  const acct = (y: number, head: string, val: string, note: string, color: string) => {
    b.rect(730, y, 300, 46, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.text(744, y + 19, head, { size: 10.5, weight: 700, fill: C.ink })
    b.text(744, y + 37, val, { size: 11, weight: 700, fill: color })
    b.wtext(1046, y + 16, note, { size: 10, fill: C.sub, maxW: 306, lh: 14 })
  }
  acct(190, '小分子 20 个原子', 'N(N−1) = 380 峰', '峰稀可辨，直接法的主场', C.okD)
  acct(246, '约 30 kDa 单体 2600 原子', '分子内向量约 340 万', '密集于半径约 20 Å 的分子尺度球内', C.accD)
  acct(302, '蛋白约 3000 个原子', '近 900 万个向量峰', '2–3 Å 分辨率下完全重叠成丘陵地带', C.badD)
  // 向量分区示意
  const zx = 760, zy = 400, zw = 250, zh = 130
  b.rect(zx, zy, zw, zh, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  b.circle(zx, zy, 34, { fill: C.accL, fillOp: 0.8, stroke: C.acc, sw: 1.6, dash: '5 4' })
  for (let i = 0; i < 26; i++) {
    const a = i * 2.4, r = 5 + (i % 5) * 6
    b.circle(zx + r * Math.cos(a), zy + r * Math.sin(a) * 0.82, 2.2, { fill: C.acc, fillOp: 0.7 })
  }
  for (let i = 0; i < 22; i++) {
    b.circle(zx + 60 + (i * 83) % 180, zy + 12 + (i * 47) % 106, 2, { fill: C.mute, fillOp: 0.6 })
  }
  b.ctext(zx + 92, zy - 8, '分子内向量：短（多在 10 Å 内）', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(zx + 175, zy + zh + 16, '交叉向量：长，由堆积与对称决定', { size: 9.5, weight: 700, fill: C.mute })
  // Harker 截面示意
  const hx = 1046, hy = 386, hw = 170, hh = 150
  b.rect(hx, hy, hw, hh, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  b.rect(hx, hy + hh * 0.42, hw, hh * 0.16, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  ;[[0.2, 0.47], [0.52, 0.5], [0.8, 0.45]].forEach(([fu, fv]) => {
    b.circle(hx + fu * hw, hy + fv * hh, 5.5, { fill: C.warn, fillOp: 0.8, stroke: C.warnD, sw: 1.2 })
  })
  b.ctext(hx + hw / 2, hy - 8, 'Harker 截面（C2 的 v = 0 面）', { size: 9.5, weight: 700, fill: C.warnD })
  b.ctext(hx + hw / 2, hy + hh + 16, '二重轴联系的对：向量 (2x, 0, 2z)', { size: 9, fill: C.mute })
  b.wtext(730, 566, '对称性的红利：特殊截面峰稀疏、信噪比高——C2 中经二重轴联系的原子对向量必落 v = 0 截面，沿 2_{1} 螺旋轴的对向量落在 Harker 线上；读蛋白 Patterson 从 Harker 截面入手，第 8 章定位重原子靠的正是它。取向信息在峰海里幸存：模型自向量集合与晶体分子内向量集合取向一致时高度重叠——旋转函数的全部本钱。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 三、旋转函数 ============
  b.panel(30, 572, 660, 390, { title: '三、旋转函数：在取向空间对暗号（Rossmann 与 Blow 1962）' })
  // 星座对照
  const cst = (x0: number, y0: number, rot: number, label: string, color: string) => {
    b.rect(x0, y0, 150, 130, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 6 })
    b.ctext(x0 + 75, y0 - 8, label, { size: 10, weight: 700, fill: color })
    const base: [number, number][] = [[-38, 8], [-14, -22], [10, -6], [30, 22], [-6, 34]]
    base.forEach(([bx, by]) => {
      const px = x0 + 75 + bx * Math.cos(rot) - by * Math.sin(rot) * 0.85
      const py = y0 + 65 + bx * Math.sin(rot) + by * Math.cos(rot) * 0.85
      b.circle(px, py, 4.4, { fill: color, fillOp: 0.85 })
    })
  }
  cst(60, 630, 0, '晶体 Patterson（分子内向量）', C.accD)
  cst(240, 630, 0.62, '模型 Patterson（待转向）', C.proD)
  b.arrow(214, 695, 236, 695, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(225, 718, 'Ω', { size: 12, weight: 700, fill: C.ink, italic: true })
  // R(Ω) 小图
  const rx = 440, ry = 700, rw = 230, rh = 92
  b.axis(rx, ry, rw, rh, {
    title: 'R(Ω)：互相关积分', xlabel: '取向 Ω', grid: false,
    xticks: [[0, ''], [0.5, '正确取向'], [1, '']],
  })
  const rf: [number, number][] = []
  for (let i = 0; i <= 60; i++) {
    const f = i / 60
    let v = 0.12 + 0.07 * Math.sin(i * 1.7) * Math.sin(i * 0.53) + 0.04 * Math.sin(i * 0.31)
    v += 0.88 * Math.exp(-Math.pow((f - 0.5) * 9, 2))
    rf.push([f, Math.min(1, v)])
  }
  b.curve(rx, ry, rw, rh, rf, { stroke: C.dna, sw: 2.4, smooth: true })
  b.ctext(rx + rw * 0.5 + 6, ry - rh * 0.88, '尖峰', { size: 10, weight: 700, fill: C.dnaD })
  b.wtext(60, 790, 'R(Ω) = ∫ P_xtal(r)·P_model(r, Ω) dr——模型绕原点转动 Ω，取两者在限定向量半径内（典型 10 Å 以内，聚焦分子内向量）的乘积积分；Ω 扫遍取向空间（三个欧拉角网格化），正确取向处向量对齐、乘积出现尖峰。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(60, 852, '快速旋转函数（Crowther 1972 年）：两个 Patterson 各按球谐函数展开，取向旋转对应球谐系数的维格纳旋转，互相关在谐波域逐阶相乘——计算量骤降数个数量级，全空间细网格搜索成为日常。网格须细于峰宽（取向峰宽约数度量级），步长常从 2–5° 起步、峰附近再加密。旋转函数输出按峰高排序的取向列表，前几名（常取前 10–100 个）交平移函数逐一甄别。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 四、平移函数与两步流程 ============
  b.panel(710, 572, 660, 390, { title: '四、平移函数：取向定了找座位（Crowther 与 Blow 1967）' })
  const flow = (x: number, w: number, t: string, s: string, stroke: string, fill: string) => {
    b.rect(x, 622, w, 54, { fill, stroke, sw: 1.7, rx: 8 })
    b.ctext(x + w / 2, 644, t, { size: 11, weight: 700, fill: C.ink })
    b.ctext(x + w / 2, 664, s, { size: 9.5, fill: C.sub })
  }
  flow(730, 130, '候选取向', '前 10–100 名', C.acc, C.accL)
  flow(886, 140, '平移函数', '交叉向量吻合', C.pro, C.proL)
  flow(1052, 130, 'packing 闸门', '穿模即出局', C.warn, C.warnL)
  flow(1206, 140, 'LLG／TFZ 裁决', '交第 3 节复核', C.enz, C.enzL)
  b.arrow(862, 649, 884, 649, { stroke: C.sub, sw: 1.7, marker: 'ink' })
  b.arrow(1028, 649, 1050, 649, { stroke: C.sub, sw: 1.7, marker: 'ink' })
  b.arrow(1184, 649, 1204, 649, { stroke: C.sub, sw: 1.7, marker: 'ink' })
  b.wtext(730, 700, '逻辑与旋转函数对偶：旋转只看分子内向量（与平移无关），平移专看交叉向量——分子落位正确时，它与其对称等效分子之间的向量由空间群对称操作唯一确定，计算的交叉向量图与晶体 Patterson 的长向量区吻合。现代程序用基于结构因子相关的 FFT 平移函数（TFFC、Phaser 的 MLTF），把三方向平移搜索压缩为一次倒易空间卷积。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.table(730, 790, 620, {
    headers: ['步骤', '输入', '搜索变量', '判据', '主要陷阱'],
    colW: [88, 118, 122, 122, 170],
    rowH: 30,
    fontSize: 10.5,
    headFill: C.panelB,
    rows: [
      ['旋转搜索', '两条 Patterson', '取向（三个欧拉角）', '旋转峰高排序', '柔性域使峰弥散'],
      ['平移搜索', '固定取向的模型', '平移（三个分量）', '平移峰高、TFZ', 'NCS 干扰出假峰'],
      ['packing 检查', '候选解', '无', '分子不穿模', '伪对称致漏检'],
      ['复核精修', '完整刚体解', '无', 'LLG／TFZ、R 因子', '边缘值假解'],
    ],
  })
  b.wtext(730, 942, '分诊口诀：旋转都无峰，先查模型质量与数据指标化；旋转有峰而平移失败，嫌疑落在 NCS 与伪平移；两步都成而精修不动，轮到空间群受审。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })
}

export default scene({
  title: 'Patterson 函数与旋转-平移两步搜索',
  subtitle: 'P(u)=Σ|F|^{2}exp(−2πihu) 免相位、峰即原子间向量且峰高∝Z_{1}Z_{2}；N 原子生 N(N−1) 峰、3000 原子近 900 万；旋转函数定取向（Crowther 1972 提速数个数量级）、平移函数定位置',
  draw,
})
