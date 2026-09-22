// im ch1-s2 免疫系统的组成概览（39-g 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三层次地图 ============
  b.panel(30, 132, 1340, 330, { title: '一、免疫系统的三层次地图：器官 — 细胞 — 分子（分布式，无「司令部」）' })

  const bands: Array<[string, string, string, Array<[string, string]>]> = [
    ['免疫器官', C.dna, C.dnaD, [
      ['中枢（育成）', '骨髓育 B 细胞 · 胸腺育 T 细胞 —— 淋巴细胞的「质检车间」'],
      ['外周（应答）', '淋巴结 · 脾 · MALT —— 免疫应答启动场所'],
    ]],
    ['免疫细胞', C.pro, C.proD, [
      ['淋巴系', 'T 细胞 · B 细胞 · NK 细胞'],
      ['髓系', '单核-巨噬细胞 · 树突状细胞 · 粒细胞'],
    ]],
    ['免疫分子', C.acc, C.accD, [
      ['可溶性（武器）', '抗体 · 补体 · 细胞因子'],
      ['膜型（信号）', 'MHC · CD 分子 · 各类抗原受体'],
    ]],
  ]
  bands.forEach(([name, col, colD, groups], i) => {
    const yy = 186 + i * 78
    const colL = [C.dnaL, C.proL, C.accL][i]
    b.rect(60, yy, 1280, 70, { fill: i % 2 === 0 ? C.panelB : C.bg, stroke: C.line, sw: 1.3, rx: 9 })
    b.tag(140, yy + 35, name, { fill: colL, stroke: col, tfill: colD, size: 14.5, weight: 700, pad: 12 })
    groups.forEach(([g, detail], gi) => {
      const gx = 320 + gi * 470
      b.tag(gx + 52, yy + 35, g, { fill: C.bg, stroke: col, tfill: colD, size: 11.5, weight: 700, pad: 8 })
      b.text(gx + 120, yy + 39, detail, { size: 11.5, fill: C.sub })
    })
  })
  b.ctext(700, 448, '主线：识别 — 应答 — 调节（应答的自限与负调控与效应本身同等重要）', { size: 13, weight: 700, fill: C.ink })

  // ============ 二、细胞谱系与白细胞分类 ============
  b.panel(30, 478, 1340, 372, { title: '二、免疫细胞：源于造血干细胞的两大谱系，外周血分类计数是免疫状态窗口' })

  // 左：HSC 谱系树
  b.tag(175, 545, '造血干细胞（HSC）', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 13.5, weight: 700, pad: 10 })
  b.arrow(140, 562, 110, 600, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(210, 562, 275, 600, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.tag(115, 614, '髓系', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 13, weight: 700, pad: 10 })
  b.tag(272, 614, '淋巴系', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 13, weight: 700, pad: 10 })
  const myelo = ['中性粒细胞', '单核-巨噬细胞', '树突状细胞（DC）', '嗜酸 / 嗜碱性粒细胞']
  myelo.forEach((s, i) => {
    b.rect(45, 650 + i * 34, 150, 26, { fill: C.bg, stroke: C.enz, sw: 1.2, rx: 13 })
    b.ctext(120, 667 + i * 34, s, { size: 11, fill: C.sub })
  })
  const lympho = ['T 细胞 · 60–70%', 'B 细胞 · 10–20%', 'NK 细胞 · 5–10%']
  lympho.forEach((s, i) => {
    b.rect(200, 650 + i * 34, 160, 26, { fill: C.bg, stroke: C.pro, sw: 1.2, rx: 13 })
    b.ctext(280, 667 + i * 34, s, { size: 11, fill: C.sub })
  })
  b.wtext(60, 800, '占比为占外周血淋巴细胞的比例。DC 在外周血单个核细胞中不足 1%，却是激活初始 T 细胞的最强抗原提呈细胞（APC）。', { size: 10.5, fill: C.mute, maxW: 330, lh: 15 })

  // 右：白细胞分类计数柱状图
  b.ctext(1000, 552, '外周血白细胞分类计数（参考区间）', { size: 13.5, weight: 700, fill: C.ink })
  b.bars(740, 756, 520, 180, [60, 30, 5.5, 2.75, 0.5], {
    max: 70,
    labels: ['中性粒细胞', '淋巴细胞', '单核细胞', '嗜酸性粒细胞', '嗜碱性粒细胞'],
    vlabels: ['50–70%', '20–40%', '3–8%', '0.5–5%', '0–1%'],
    fill: C.accL, stroke: C.acc,
  })
  b.ctext(1000, 830, '五类白细胞的比例区间是免疫学诊断的常用参考', { size: 11, fill: C.mute })

  // ============ 三、工作主线 ============
  b.panel(30, 866, 1340, 112, { title: '三、免疫系统的工作主线：识别 — 应答 — 调节' })
  const steps: Array<[number, number, string, string, string]> = [
    [80, 350, '① 识别', '抗原受体识别「非己」表位 / 肽', C.acc],
    [490, 350, '② 应答', '固有免疫先启动 · 适应性克隆扩增', C.dna],
    [900, 350, '③ 调节', '自限与负调控，回归内稳态', C.pro],
  ]
  steps.forEach(([x, w, t, s, col]) => {
    b.rect(x, 906, w, 50, { fill: col, fillOp: 0.1, stroke: col, sw: 1.6, rx: 8 })
    b.text(x + 18, 927, t, { size: 13.5, weight: 700, fill: col })
    b.text(x + 84, 927, s, { size: 11.5, fill: C.sub })
  })
  b.arrow(438, 931, 482, 931, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.arrow(848, 931, 892, 931, { stroke: C.mute, sw: 2, marker: 'mute' })
}

export default scene({
  title: '免疫系统的组成概览：器官、细胞与分子的三层防御网络',
  subtitle: '中枢器官（骨髓、胸腺）育成免疫细胞，外周器官（淋巴结、脾、MALT）启动应答；细胞源于造血干细胞的髓系与淋巴系两谱系；T 细胞约占外周血淋巴细胞 60–70%、B 细胞 10–20%、NK 5–10%；中性粒细胞占白细胞 50–70%',
  draw,
})
