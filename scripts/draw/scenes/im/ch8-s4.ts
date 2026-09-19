// im ch8-s4 外源性抗原的加工与提呈 + 交叉提呈（39-g 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、外源性途径总览 ============
  b.panel(30, 132, 1340, 292, { title: '一、外源性途径总览：内吞 → 酸化降解 → MHC II 提呈给 CD4⁺ T 细胞' })

  b.rect(250, 196, 860, 176, { fill: C.panelB, fillOp: 0.7, stroke: C.line, sw: 1.6, rx: 16 })
  b.text(270, 222, '抗原提呈细胞（APC：树突状细胞 · 巨噬细胞 · B 细胞）', { size: 11.5, weight: 700, fill: C.mute })

  b.bacterium(105, 288, 58, 30, { shape: 'rod' })
  b.ctext(105, 340, '外源性抗原', { size: 11, weight: 700, fill: C.ink })
  b.ctext(105, 358, '细菌 · 蛋白 · 毒素', { size: 9.5, fill: C.mute })
  b.arrow(140, 288, 296, 288, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(218, 274, '内吞 / 吞噬', { size: 9.5, weight: 700, fill: C.mute })

  // 内体系列
  b.circle(370, 296, 36, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 1.8 })
  b.ctext(370, 292, '早期', { size: 10.5, weight: 700, fill: C.rnaD })
  b.ctext(370, 308, '内体', { size: 10.5, weight: 700, fill: C.rnaD })
  b.arrow(410, 296, 500, 296, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.ctext(455, 282, '酸化递进', { size: 9, weight: 700, fill: C.rnaD })

  b.circle(548, 296, 46, { fill: C.rnaL, fillOp: 0.7, stroke: C.rna, sw: 1.8 })
  b.ctext(548, 292, '晚期内体', { size: 10.5, weight: 700, fill: C.rnaD })
  b.ctext(548, 310, 'pH ↓', { size: 9.5, weight: 700, fill: C.bad })
  b.arrow(598, 296, 688, 296, { stroke: C.rna, sw: 1.8, marker: 'rna' })
  b.ctext(643, 282, '组织蛋白酶', { size: 9, weight: 700, fill: C.rnaD })

  b.circle(736, 296, 56, { fill: C.enzL, fillOp: 0.6, stroke: C.enz, sw: 1.9 })
  b.ctext(736, 290, '溶酶体', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(736, 306, 'MIIC', { size: 10.5, weight: 700, fill: C.enzD })
  b.ctext(736, 366, '降解为肽段并与 MHC II 装载', { size: 9.5, fill: C.mute })

  b.arrow(794, 296, 848, 296, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.rect(852, 264, 190, 64, { fill: C.proL, fillOp: 0.55, stroke: C.pro, sw: 1.7, rx: 8 })
  b.ctext(947, 288, 'MHC II - 肽', { size: 12.5, weight: 700, fill: C.proD })
  b.ctext(947, 310, '运至细胞表面', { size: 9.5, fill: C.sub })
  b.arrow(1046, 296, 1100, 296, { stroke: C.pro, sw: 2, marker: 'pro' })

  b.cell(1230, 296, 100, 64, { label: 'CD4⁺ T', double: true })
  b.ctext(1230, 382, '识别并被活化', { size: 9.5, fill: C.mute })

  b.wtext(60, 398, '要旨：内体-溶酶体逐步酸化激活组织蛋白酶，将抗原降解为肽段；MHC II 类分子专司装载外源肽，提呈给 CD4⁺ T 细胞。', { size: 11, weight: 600, fill: C.ink, maxW: 1290, lh: 15 })

  // ============ 二、不变链与 CLIP ============
  b.panel(30, 440, 1340, 292, { title: '二、不变链与 CLIP：凹槽的占位保护与 HLA-DM 催化的肽交换' })

  const stages: Array<[number, number, string, string, string]> = [
    [60, 320, '① 内质网', 'MHC II α/β + 不变链三聚体组装', C.pro],
    [430, 340, '② 运输至 MIIC', '不变链逐步降解，仅余 CLIP 占槽', C.rna],
    [810, 250, '③ 肽交换后出胞', '稳定 MHC II-肽复合物上膜', C.dna],
    [1090, 250, '④ 提呈', 'CD4⁺ T 细胞识别 pMHC II', C.acc],
  ]
  stages.forEach(([x, w, t, s, col], i) => {
    b.rect(x, 494, w, 62, { fill: col, fillOp: 0.09, stroke: col, sw: 1.7, rx: 8 })
    b.text(x + 14, 518, t, { size: 12, weight: 700, fill: col })
    b.wtext(x + 14, 536, s, { size: 9.5, fill: C.sub, maxW: w - 28, lh: 13 })
    if (i < 3) b.arrow(x + w + 8, 525, stages[i + 1][0] - 10, 525, { stroke: C.mute, sw: 2, marker: 'mute' })
  })

  b.rect(60, 578, 620, 132, { fill: C.bg, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(78, 602, 'CLIP：凹槽的「占位锁」', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(78, 622, '不变链的 CLIP 段占据 II 类肽结合凹槽，防止内质网中错误装载自身肽或内源肽。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.rect(100, 654, 250, 30, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.4, rx: 5 })
  b.ctext(225, 700, 'MHC II 凹槽', { size: 10, weight: 700, fill: C.proD })
  b.rect(150, 660, 150, 18, { fill: C.rnaL, fillOp: 0.8, stroke: C.rna, sw: 1.2, rx: 4 })
  b.ctext(225, 673, 'CLIP', { size: 9.5, weight: 700, fill: C.rnaD })

  b.rect(710, 578, 630, 132, { fill: C.bg, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(728, 602, 'HLA-DM：换肽师与质检员', { size: 12.5, weight: 700, fill: C.rnaD })
  b.wtext(728, 622, 'MIIC 中 HLA-DM 催化 CLIP 与外源肽交换，并进行肽编辑——亲和力不足的肽被再次换下。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  b.rect(740, 654, 130, 30, { fill: C.rnaL, fillOp: 0.8, stroke: C.rna, sw: 1.4, rx: 5 })
  b.ctext(805, 673, 'CLIP 退出', { size: 10, weight: 700, fill: C.rnaD })
  b.arrow(876, 669, 940, 669, { stroke: C.dna, sw: 1.8, marker: 'dna' })
  b.rect(944, 654, 150, 30, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.4, rx: 5 })
  b.ctext(1019, 673, '外源肽装入', { size: 10, weight: 700, fill: C.dnaD })
  b.rect(1120, 640, 190, 26, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.3, rx: 5 })
  b.ctext(1215, 657, 'HLA-DO ⊣ DM', { size: 10, weight: 700, fill: C.bad })
  b.ctext(1215, 688, 'DO 负向调节 DM 活性', { size: 9, fill: C.mute })

  // ============ 三、交叉提呈 ============
  b.panel(30, 748, 1340, 226, { title: '三、交叉提呈：外源性抗原经 MHC I 提呈给 CD8⁺ T——「内外有别」的例外通道' })

  b.rect(60, 798, 560, 152, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.7, rx: 9 })
  b.wtext(78, 824, '交叉提呈由 Bevan 于 1976 年以「交叉致敏」实验首先证实：外源性抗原经 MHC I 类分子提呈给 CD8⁺ T 细胞，打破内源-I 类、外源-II 类的经典分工。', { size: 10.5, fill: C.sub, maxW: 525, lh: 16 })
  b.wtext(78, 886, '专职执行者：cDC1 型树突状细胞。', { size: 11, weight: 700, fill: C.accD, maxW: 525, lh: 15 })
  const chips = ['抗病毒 CD8 应答启动', '抗肿瘤免疫', '交叉耐受']
  chips.forEach((s, i) => {
    b.tag(170 + i * 158, 928, s, { fill: C.bg, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 10 })
  })

  b.table(650, 798, 690, {
    headers: ['比较项目', '胞质溶胶途径', '空泡途径'],
    colW: [190, 250, 250],
    rowH: 30,
    fontSize: 10,
    rows: [
      ['抗原处理部位', '逸出至胞浆，蛋白酶体降解', '特殊内体腔室内组织蛋白酶降解'],
      ['依赖蛋白酶体与 TAP', '依赖', '不依赖'],
      ['装载分子', '内质网中新的 MHC I 类分子', '再循环的成熟 MHC I 类分子'],
      ['代表底物情境', '可溶性蛋白、凋亡细胞相关抗原', '部分颗粒性与膜相关抗原'],
    ],
  })
}

export default scene({
  title: '外源性抗原的加工提呈与交叉提呈：不变链-CLIP 系统与两条交叉轨道',
  subtitle: '外源性抗原经内体-溶酶体逐步酸化与组织蛋白酶降解后由 MHC II 提呈给 CD4⁺ T；不变链 CLIP 段占据 II 类凹槽防止错误装载，HLA-DM 在 MIIC 中催化肽交换与肽编辑、HLA-DO 负向调节 DM；交叉提呈（Bevan 1976）指外源性抗原经 MHC I 提呈给 CD8⁺ T，经依赖蛋白酶体与 TAP 的胞质溶胶途径和不依赖 TAP 的空泡途径实现，专职执行者为 cDC1，是抗病毒、抗肿瘤与交叉耐受的共同枢纽',
  draw,
})
