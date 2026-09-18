// ne ch12-s3 脑的发育与神经疾病 / 神经退行性疾病（39-h 批D）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、AD：淀粉样级联 ============
  b.panel(30, 132, 700, 430, { title: '一、阿尔茨海默病：Aβ 与 tau 的双分子病理（1906）' })
  const casc: Array<[string, string, string]> = [
    ['APP / 早老素 PS1 / PS2 突变 → Aβ42 增高（家族性早发）', C.rna, C.rnaL],
    ['Aβ 寡聚体与斑块（淀粉样级联假说：上游启动）', C.bad, C.badL],
    ['tau 过度磷酸化 → 神经原纤维缠结（下游执行者，沿脑区播散）', C.pro, C.proL],
    ['突触失效 → 神经元退变 → 认知衰退', C.mute, C.panelB],
  ]
  casc.forEach(([label, c, cl], i) => {
    const y = 208 + i * 64
    b.rect(60, y, 640, 50, { fill: cl, fillOp: 0.5, stroke: c, sw: 1.8, rx: 8 })
    b.ctext(380, y + 30, label, { size: 11.5, weight: 600, fill: C.ink })
    if (i < casc.length - 1) b.arrow(380, y + 50, 380, y + 64, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  })
  b.wtext(60, 492, 'Alzheimer 1906 年首次报告患者 Auguste D. 的老年斑与神经原纤维缠结——两类损伤结构至今仍是病理双标志。', { size: 11, fill: C.sub, maxW: 660, lh: 16 })
  b.wtext(60, 536, '遗传学：APOE4 为散发性最重要风险等位基因、APOE2 具保护性——散发的遗传面。', { size: 11, weight: 700, fill: C.mute, maxW: 660, lh: 15 })

  // ============ 二、PD 与 ALS ============
  b.panel(750, 132, 620, 430, { title: '二、帕金森病与 ALS：路易体、激酶与兴奋性毒性' })
  b.rect(780, 200, 560, 120, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.8, rx: 9 })
  b.text(796, 226, '帕金森病（PD）', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(796, 250, '黑质致密部多巴胺能神经元退变 + α-突触核蛋白路易体；家族性约占 5–10%：LRRK2（G2019S 激酶功能增强，常显）与 Parkin（E3 泛素连接酶）/ PINK1（线粒体质量控制，常隐、早发）。', { size: 11, fill: C.sub, maxW: 530, lh: 16 })
  b.rect(780, 340, 560, 120, { fill: C.rnaL, fillOp: 0.4, stroke: C.rna, sw: 1.8, rx: 9 })
  b.text(796, 366, '肌萎缩侧索硬化（ALS）', { size: 13, weight: 700, fill: C.rnaD })
  b.wtext(796, 390, '家族性约 5–10%：SOD1（1993 年首个致病基因，毒性功能获得）、C9orf72 六核苷酸 GGGGCC 重复扩增（最常见家族性病因）、TDP-43 / FUS；散发的 TDP-43 胞质聚集为共同标志。', { size: 11, fill: C.sub, maxW: 530, lh: 16 })
  b.wtext(780, 490, '共同终末机制：兴奋性毒性 + 氧化应激 + 蛋白稳态崩溃——四类退行性疾病在此汇流。', { size: 11.5, weight: 700, fill: C.bad, maxW: 560, lh: 16 })

  // ============ 三、四病对照表 ============
  b.panel(30, 578, 1340, 396, { title: '三、四大神经退行性疾病对照：共同主题——蛋白聚集 + 选择性易损' })
  b.table(60, 650, 1280, {
    headers: ['疾病', '主要易损神经元', '标志蛋白病理', '代表基因', '主流对症治疗'],
    colW: [130, 300, 250, 290, 310],
    rowH: 46,
    fontSize: 11,
    rows: [
      ['阿尔茨海默病', '内嗅皮层、海马及广泛皮层神经元', 'Aβ 斑块与 tau 缠结', 'APP、PS1、PS2、APOE4', '胆碱酯酶抑制剂（多奈哌齐）、美金刚'],
      ['帕金森病', '黑质致密部多巴胺能神经元', 'α-突触核蛋白路易体', 'LRRK2、Parkin、PINK1、SNCA', 'L-DOPA、深部脑刺激（DBS）'],
      ['肌萎缩侧索硬化', '上与下运动神经元', 'TDP-43 胞质聚集', 'SOD1、C9orf72、TDP-43、FUS', 'Riluzole 等延缓病程药物'],
      ['亨廷顿病', '纹状体 D2 型中型多棘神经元', 'Huntingtin 聚集体', 'HTT 的 CAG 重复扩增', '对症与支持治疗'],
    ],
  })
  b.wtext(60, 928, '胆碱能假说导出胆碱酯酶抑制剂与美金刚的对症治疗——可改善症状但不能改变病程；对症与修饰病程的分野是当前药物研发的核心战场。', { size: 11, fill: C.sub, maxW: 1280, lh: 15 })
}

export default scene({
  title: '神经退行性疾病：AD 淀粉样级联、PD 路易体与共同终末机制',
  subtitle: 'Aβ 置于上游、tau 播散为下游执行者；家族性均占 5–10%；蛋白聚集与选择性易损是共同主题',
  draw,
})
