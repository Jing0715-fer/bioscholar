// xc ch9-s1 电子密度图的种类与解读（6-xc）
import { scene, C, B } from '../../lib'

/** 嵌套等高线「密度斑」 */
const blob = (b: B, cx: number, cy: number, rx: number, ry: number, rot: number, stroke: string) => {
  const tf = `transform="rotate(${rot} ${cx} ${cy})"`
  b.els.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${stroke}" stroke-width="2" opacity="0.9" ${tf}/>`)
  b.els.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.72}" ry="${ry * 0.72}" fill="none" stroke="${stroke}" stroke-width="1.4" opacity="0.55" ${tf}/>`)
  b.els.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.45}" ry="${ry * 0.45}" fill="none" stroke="${stroke}" stroke-width="1.1" opacity="0.35" ${tf}/>`)
}

const draw = (b: B) => {
  // ============ 一、主力图与差值图 ============
  b.panel(30, 132, 660, 400, { title: '一、2mFo−DFc 主力图 与 mFo−DFc 差值图' })
  b.tag(190, 182, '2mFo−DFc 画约 1σ：有什么', { fill: C.dnaL, stroke: C.dna, size: 11.5, weight: 700, tfill: C.dnaD, pad: 9 })
  // α 螺旋香肠管
  blob(b, 195, 268, 92, 26, -14, C.dna)
  blob(b, 150, 238, 24, 17, -20, C.dna)
  blob(b, 244, 300, 26, 18, -10, C.dna)
  const atomLine: [number, number][] = [[112, 250], [136, 262], [160, 273], [184, 283], [208, 292], [232, 299], [256, 304], [280, 307]]
  atomLine.forEach(([ax, ay]) => b.circle(ax, ay, 4, { fill: C.ink }))
  b.ctext(195, 340, 'α 螺旋的「香肠管」密度（直径约 5 Å）', { size: 10.5, weight: 700, fill: C.dnaD })
  b.ctext(195, 358, '侧链如齿轮从一侧咬出', { size: 10, fill: C.mute })
  b.wtext(60, 388, '主链侧链一图尽收，日常建模九成时间看它；系数 2|F_{obs}|−|F_{calc}|、相位取模型相位。', { size: 10, fill: C.sub, maxW: 286, lh: 14 })
  b.tag(510, 182, 'mFo−DFc 画 ±3σ：差在哪', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 9 })
  // 差值图示意
  blob(b, 470, 258, 34, 24, 12, C.ok)
  b.tag(470, 300, '＋3σ 缺失原子', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 7 })
  b.ctext(470, 322, '配体、水、替代构象', { size: 9.5, fill: C.mute })
  b.circle(600, 262, 4, { fill: C.ink })
  b.ellipse(600, 262, 22, 17, { fill: 'none', stroke: C.bad, sw: 2.2, dash: '5 4' })
  b.tag(600, 300, '−3σ 多余／占位错', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  b.wtext(370, 388, '铁律：差值峰高于 3σ 且位置化学合理才当真；1–2σ 的碎斑只是噪声的日常涨落——把每个小峰都当原子补，模型很快被噪声殖民。', { size: 10, fill: C.sub, maxW: 286, lh: 14 })
  b.wtext(60, 436, 'sigma-A 加权（Read 1986 年）：m 为反射相位的 figure of merit、D 为与 σ_{A} 挂钩的折扣因子——2mFo−DFc 与 mFo−DFc 图让可靠反射发言大、可疑反射发言小，图的噪声显著低于朴素版本。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 二、omit 与 polder ============
  b.panel(710, 132, 660, 400, { title: '二、omit 与 polder：防模型偏差的挖除术' })
  b.text(730, 184, 'omit 三步（顺序颠倒便前功尽弃）：', { size: 12, weight: 700, fill: C.ink })
  const omitStep = (x: number, t: string, s: string) => {
    b.rect(x, 200, 186, 56, { fill: C.accL, stroke: C.acc, sw: 1.7, rx: 8 })
    b.ctext(x + 93, 224, t, { size: 12, weight: 700, fill: C.accD })
    b.ctext(x + 93, 244, s, { size: 10, fill: C.sub })
  }
  omitStep(730, '① 挖区', '删除可疑区域原子')
  omitStep(948, '② 精修', '重算掩膜与体溶剂')
  omitStep(1166, '③ 重构图', '以新相位重新综合')
  b.arrow(920, 228, 944, 228, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.arrow(1138, 228, 1162, 228, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(730, 284, '模型偏差有自我实现的魔法：只要原子在模型里，它的密度就会被「画出来」（相位来自模型）。omit 把可疑区域整段挖除后重新综合——挖除后仍出现的密度才是真凭实据；只删原子而沿用旧相位，等于戴着有色眼镜做「验证」。挖区尺寸几 Å 到十几 Å 为宜。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // polder 对比
  b.circle(790, 402, 34, { fill: '#e2e8f0', fillOp: 0.85, stroke: C.sub, sw: 1.6 })
  b.wtext(776, 398, '溶剂', { size: 9, fill: C.mute, maxW: 30, lh: 11 })
  blob(b, 790, 402, 13, 10, 0, C.faint)
  b.ctext(790, 454, '传统 omit：体溶剂淹没弱配体', { size: 10, weight: 700, fill: C.sub })
  b.arrow(856, 402, 902, 402, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.circle(950, 402, 34, { fill: '#ffffff', stroke: C.sub, sw: 1.6, dash: '6 4' })
  blob(b, 950, 402, 16, 12, 0, C.ok)
  b.ctext(950, 454, 'polder：掩膜排除溶剂', { size: 10, weight: 700, fill: C.okD })
  b.wtext(1010, 380, 'polder omit（Liebschner 等 2017 年）：把目标区域与周围体溶剂一并从掩膜排除——小分子密度「裸露」成像；对低占位配体、糖链、脂质的无偏检验已成事实标准。实操纪律：配体验证须 polder 图与合理相互作用双证齐全。', { size: 10.5, fill: C.sub, maxW: 336, lh: 15 })

  // ============ 三、分辨率-可见细节阶梯 ============
  b.panel(30, 552, 1340, 410, { title: '三、分辨率决定可见细节：从氢原子到螺旋轮廓' })
  b.table(60, 618, 1000, {
    headers: ['分辨率', '图上可见', '建模口径'],
    colW: [110, 520, 370],
    rowH: 28,
    fontSize: 11.5,
    rows: [
      ['1.05 Å', '氢键中的氢原子可辨、各向异性 B 因子可精修', '近原子精度建模'],
      ['1.2 Å', '氢原子（清晰区）、交替构象、完整水网', '几乎照抄密度'],
      ['1.5 Å', '各向同性 B 因子可靠精修、水分子密集可见', '常规高分辨建模'],
      ['1.8 Å', '主链与羰基开始分叶、侧链构象明确', 'rotamer 挑选即可'],
      ['2.5 Å', '侧链清晰、多数水可见', '常规手工建模'],
      ['2.8 Å', '大侧链末端分叶消失、水的可靠性下降', '侧链与水均须保守'],
      ['3.2 Å', '主链清晰、侧链断续', '借序列与 rotamer 推断'],
      ['6 Å', '螺旋管状轮廓、结构域分区', '只搭骨架'],
    ],
  })
  // 三个迷你密度示意
  const mini = (y: number, label: string) => {
    b.rect(1096, y, 254, 78, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 8 })
    b.ctext(1223, y - 8, label, { size: 10.5, weight: 700, fill: C.sub })
  }
  mini(630, '1.2 Å：原子分立、氢可辨')
  b.circle(1150, 672, 11, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.circle(1186, 672, 9, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.circle(1168, 672, 3.4, { fill: C.ink })
  b.circle(1200, 660, 2.8, { fill: C.rna })
  b.ctext(1268, 676, 'H', { size: 10, fill: C.rna, weight: 700 })
  mini(724, '2.0 Å：键分叶、侧链可数')
  b.ellipse(1150, 766, 15, 10, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(1182, 766, 15, 10, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(1214, 760, 9, 7, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ellipse(1234, 748, 7, 6, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  mini(818, '3.0 Å：侧链断续、主链连续')
  blob(b, 1170, 858, 62, 14, -6, C.dna)
  b.ellipse(1214, 846, 7, 6, { fill: 'none', stroke: C.dna, sw: 1.4, dash: '3 3' })
  b.ellipse(1236, 866, 6, 5, { fill: 'none', stroke: C.dna, sw: 1.4, dash: '3 3' })
  b.wtext(60, 900, '读图技艺：α 螺旋呈直径约 5 Å 的香肠管（每圈 3.6 残基、每残基沿轴约 1.5 Å）；β 折叠链向残基间距约 3.3–3.5 Å、链间氢键方向约 4.7–4.8 Å；羰基凸起整齐指向 C 端——Met 与 Trp 等大侧链是 register 的天然路标，Gly-Gly 处主链最细。', { size: 10.5, fill: C.sub, maxW: 1000, lh: 15.5 })
}

export default scene({
  title: '电子密度图解读：主力图、差值图与分辨率阶梯',
  subtitle: '2mFo−DFc 主力图 1σ／mFo−DFc 差值图 ±3σ；omit 三步（挖区→精修→重构图）与 polder 无偏图（Liebschner 2017）；1.2 Å 见氢、1.8 Å 键分叶、3.2 Å 侧链断续、6 Å 只余螺旋轮廓',
  draw,
})
