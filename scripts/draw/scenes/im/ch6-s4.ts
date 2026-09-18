// im ch6-s4 单克隆抗体与抗体工程（39-g 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、杂交瘤技术 ============
  b.panel(30, 132, 1340, 300, { title: '一、杂交瘤技术（1975，Köhler 与 Milstein，1984 年诺贝尔奖）：永生的特异性' })

  const flow: Array<[number, string, string, string, string, string]> = [
    [60, '免疫脾细胞', '绵羊红细胞免疫小鼠的 B 细胞', '有限寿命 · 特异分泌', C.dna, C.dnaD],
    [330, '骨髓瘤细胞', 'HGPRT 缺陷', '永生 · 不分泌抗体', C.bad, C.bad],
    [600, 'PEG 融合', '聚乙二醇介导', '产生杂交瘤细胞', C.pro, C.proD],
    [870, 'HAT 筛选', '培养基筛选', '仅杂交瘤存活', C.enz, C.enzD],
    [1140, '单克隆抗体', '克隆化后扩大培养', '结构均一 · 无限供应', C.ok, '#065f46'],
  ]
  flow.forEach(([x, t, s1, s2, col, colD], i) => {
    b.rect(x, 180, 220, 108, { fill: col, fillOp: 0.09, stroke: col, sw: 1.7, rx: 9 })
    b.ctext(x + 110, 204, t, { size: 13.5, weight: 700, fill: colD })
    b.ctext(x + 110, 228, s1, { size: 10.5, fill: C.sub })
    b.ctext(x + 110, 252, s2, { size: 10.5, fill: C.sub })
    if (i < 4) b.arrow(x + 222, 234, x + 264, 234, { stroke: C.mute, sw: 2.2, marker: 'mute' })
  })
  b.rect(60, 306, 620, 40, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 7 })
  b.ctext(370, 331, 'HAT 筛选原理：HGPRT 缺陷的骨髓瘤细胞不能利用补救途径合成核苷酸而死亡', { size: 11, fill: C.sub })
  b.rect(710, 306, 610, 40, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.3, rx: 7 })
  b.ctext(1015, 331, '首个上市治疗性单抗：1986 年鼠源抗 CD3 的 OKT3，用于防治移植排斥', { size: 11, weight: 600, fill: C.rnaD })

  // ============ 二、四代演进 ============
  b.panel(30, 448, 1340, 262, { title: '二、治疗性抗体四代演进：免疫原性逐代下降' })
  b.table(60, 494, 1280, {
    headers: ['演进阶段', '技术路线', '鼠源成分（约）', '免疫原性', '代表药物'],
    colW: [150, 330, 200, 240, 360],
    rowH: 40,
    fontSize: 12,
    rows: [
      ['鼠源', '杂交瘤直接制备', '100%', '高（HAMA 常见）', 'OKT3（1986）'],
      ['嵌合', '鼠 V 区拼接人 C 区', '约 33%', '中', '利妥昔单抗'],
      ['人源化', 'CDR 移植入人抗体框架', '约 5% 以下', '低', '曲妥珠单抗'],
      ['全人源', '噬菌体展示等体外淘选', '约 0', '极低', '—'],
    ],
  })
  b.wtext(60, 676, 'HAMA：人抗鼠抗体——鼠源成分诱发的人源抗抗体反应，是免疫原性问题所在。', { size: 10.5, fill: C.mute, maxW: 1280, lh: 15 })

  // ============ 三、噬菌体展示与新一代药物 ============
  b.panel(30, 724, 1340, 254, { title: '三、噬菌体展示与新一代抗体药物：双特异 · ADC · Fc 工程' })

  b.rect(60, 764, 400, 182, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(80, 790, '噬菌体展示（2018 诺贝尔化学奖）', { size: 13, weight: 700, fill: C.accD })
  b.wtext(80, 814, '将抗体片段展示于噬菌体表面，构成体外全人源抗体库，经「淘选—亲和力成熟」获得高亲和力全人源抗体。Smith 与 Winter 获 2018 年诺贝尔化学奖。', { size: 11, fill: C.sub, maxW: 360, lh: 16 })
  b.ctext(260, 926, '绕过免疫动物，体外进化抗体', { size: 11, weight: 600, fill: C.accD })

  b.rect(490, 764, 400, 182, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(510, 790, '双特异性抗体', { size: 13, weight: 700, fill: C.dnaD })
  b.line(620, 890, 620, 866, { stroke: C.mute, sw: 4 })
  b.line(620, 866, 606, 846, { stroke: C.dna, sw: 4 })
  b.line(620, 866, 634, 846, { stroke: C.pro, sw: 4 })
  b.text(660, 862, '一端桥接免疫细胞（如 T 细胞），另一端桥', { size: 10.5, fill: C.sub })
  b.text(660, 880, '接靶细胞——把效应细胞「牵」到肿瘤旁。', { size: 10.5, fill: C.sub })
  b.ctext(690, 926, '两个不同抗原结合臂', { size: 11, weight: 600, fill: C.dnaD })

  b.rect(920, 764, 420, 182, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(940, 790, 'ADC 与 Fc 工程', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(940, 814, 'ADC（抗体偶联药物）：以抗体递送细胞毒载荷，须平衡靶点、连接子与 DAR（药物抗体比）。', { size: 11, fill: C.sub, maxW: 380, lh: 16 })
  b.wtext(940, 862, 'Fc 工程化：去岩藻糖增强 ADCC；调节 FcRn 相互作用以延长半衰期——现代抗体药物成药性的关键。', { size: 11, fill: C.sub, maxW: 380, lh: 16 })
}

export default scene({
  title: '单克隆抗体与抗体工程：从杂交瘤到全人源与新一代药物',
  subtitle: '1975 年 Köhler 与 Milstein 以 PEG 融合免疫脾细胞与 HGPRT 缺陷骨髓瘤细胞、经 HAT 筛选建立杂交瘤技术（1984 年诺奖），获得结构均一、单一特异性、可无限供应的单克隆抗体；治疗性抗体经鼠源（OKT3，1986）、嵌合（约 33% 鼠源）、人源化（CDR 移植，5% 以下）与全人源四代演进；噬菌体展示（2018 年诺贝尔化学奖）实现体外全人源淘选；双特异抗体、ADC 与 Fc 工程拓展了抗体药物的边界',
  draw,
})
