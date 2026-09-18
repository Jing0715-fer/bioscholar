// cb ch3-s3 溶酶体与过氧化物酶体（39-d 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、溶酶体结构 ============
  b.panel(30, 132, 660, 460, { title: '一、溶酶体：酸性消化囊泡（de Duve，1955 命名）' })
  b.lysosome(185, 330, 78, { label: '' })
  // V 型质子泵（顶部跨膜）
  b.rect(171, 240, 28, 20, { fill: C.enzL, stroke: C.enz, sw: 1.6, rx: 4 })
  b.arrow(185, 224, 185, 238, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ion(185, 210, 'H⁺', { r: 11, size: 10.5 })
  b.line(203, 246, 234, 216, { stroke: C.faint, sw: 1.2 })
  b.text(238, 214, 'V 型 H⁺-ATPase 消耗 ATP 泵入 H⁺', { size: 10.5, fill: C.sub })
  // Cl⁻ 通道（右侧膜）
  b.rect(252, 314, 14, 12, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.line(268, 318, 274, 318, { stroke: C.faint, sw: 1.2 })
  b.text(278, 322, '与 Cl⁻ 通道协同维持腔内酸性', { size: 10.5, fill: C.sub })
  // pH 与直径标注
  b.tag(185, 322, 'pH ≈ 4.6', { fill: C.badL, stroke: C.bad, size: 12.5, weight: 700, tfill: C.bad, pad: 9 })
  b.ctext(185, 282, '直径 0.2–0.5 μm', { size: 10.5, fill: C.mute })
  // LAMP 标注
  b.line(130, 424, 150, 398, { stroke: C.faint, sw: 1.2 })
  b.wtext(56, 430, 'LAMP 膜蛋白高度糖基化（多糖被），抵抗自身酶消化', { size: 10.5, fill: C.sub, maxW: 200, lh: 14 })
  // 酶标注
  b.line(185, 452, 185, 412, { stroke: C.faint, sw: 1.2 })
  b.wtext(96, 470, '60 余种酸性水解酶：蛋白酶、核酸酶、糖苷酶、脂酶、磷脂酶、硫酸酯酶（最适 pH 约 4.6）', { size: 10.5, fill: C.sub, maxW: 320, lh: 14 })
  // 右侧要点
  b.wtext(430, 232, '单层膜包裹的酸性囊泡；由 C. de Duve 在差速离心追踪酸性磷酸酶活性时发现（1974 年诺贝尔奖）。', { size: 11.5, fill: C.sub, maxW: 240, lh: 16.5 })
  b.tag(548, 312, '异噬性溶酶体', { fill: C.accL, stroke: C.acc, size: 11.5, tfill: C.accD, pad: 9 })
  b.wtext(430, 338, '吞噬体／胞饮体与溶酶体融合，消化外源物质——防御与营养获取。', { size: 11, fill: C.sub, maxW: 240, lh: 15.5 })
  b.tag(548, 402, '自噬性溶酶体', { fill: C.dnaL, stroke: C.dna, size: 11.5, tfill: C.dnaD, pad: 9 })
  b.wtext(430, 428, '自噬体与溶酶体融合，消化自身衰老损伤的细胞器，实现周转更新（第 12 章）。', { size: 11, fill: C.sub, maxW: 240, lh: 15.5 })
  b.wtext(430, 492, '生理特化：精子顶体（特化溶酶体）释放水解酶溶解卵外被；蝌蚪变态尾部自溶；破骨细胞降解骨基质。', { size: 10.5, fill: C.mute, maxW: 240, lh: 14.5 })
  b.wtext(56, 548, '发生：溶酶体酶经 ER → 高尔基体 M6P 分选 → 晚期内体（前溶酶体）接受底物并酸化成熟为溶酶体；膜组分由 TGN 直接以囊泡形式补充（「内体成熟」途径）。', { size: 10.5, fill: C.mute, maxW: 620, lh: 14.5 })

  // ============ 二、溶酶体贮积病 ============
  b.panel(710, 132, 660, 460, { title: '二、溶酶体贮积病：单一酶缺陷 → 底物累积' })
  b.table(736, 190, 610, {
    headers: ['疾病', '缺陷酶', '累积底物与表现'],
    colW: [128, 168, 314],
    rowH: 56,
    fontSize: 10.5,
    rows: [
      ['Tay-Sachs 病', '氨基己糖苷酶 A', 'GM2 神经节苷脂累积于神经元——致盲与神经退行性变'],
      ['Gaucher 病', '葡萄糖脑苷脂酶', '肝脾肿大'],
      ['黏多糖贮积病', '糖胺聚糖降解酶系', '糖胺聚糖降解障碍'],
    ],
  })
  b.tag(900, 424, '酶替代疗法', { fill: C.okL, stroke: C.ok, size: 12, weight: 700, tfill: C.ok, pad: 9 })
  b.wtext(736, 456, '静脉输入重组酶，借助甘露糖受体被巨噬细胞摄取——已用于 Gaucher 病治疗。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(736, 500, '任何一种溶酶体酶的遗传缺陷，都使其底物在溶酶体内累积——这是「囊泡内消化」体系疾病的共同逻辑。', { size: 11, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 三、过氧化物酶体 ============
  b.panel(30, 612, 660, 368, { title: '三、过氧化物酶体（微体）：氧化解毒囊泡' })
  b.circle(190, 730, 70, { fill: '#e0f2fe', stroke: C.acc, sw: 2.4 })
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.4
    b.circle(190 + 40 * Math.cos(a), 730 + 40 * Math.sin(a), 4, { fill: C.acc, fillOp: 0.6 })
  }
  b.rect(176, 718, 28, 24, { fill: C.acc, fillOp: 0.35, stroke: C.acc, sw: 1.2 })
  b.line(206, 726, 268, 700, { stroke: C.faint, sw: 1.2 })
  b.text(272, 698, '尿酸氧化酶核心（类晶体结构）', { size: 10.5, fill: C.sub })
  b.line(232, 752, 268, 768, { stroke: C.faint, sw: 1.2 })
  b.text(272, 772, '多种氧化酶 + 过氧化氢酶（标志酶）', { size: 10.5, fill: C.sub })
  b.ctext(190, 826, '单层膜小泡（微体）', { size: 10.5, fill: C.mute })
  b.text(56, 862, '边产边清，防止氧化损伤：', { size: 12, weight: 700, fill: C.ink })
  b.text(56, 890, 'R-H₂ + O₂ —氧化酶→ R-O + H₂O₂', { size: 11.5, fill: C.sub })
  b.text(56, 916, '2 H₂O₂ —过氧化氢酶→ 2 H₂O + O₂', { size: 11.5, fill: C.sub })
  b.wtext(420, 862, '主要功能：极长链脂肪酸（VLCFA）β 氧化、缩醛磷脂合成、嘌呤与胆汁酸中间代谢、甲醇与甲酸等毒物解毒；植物中特化为乙醛酸循环体参与光呼吸。', { size: 11, fill: C.sub, maxW: 250, lh: 15 })

  // ============ 四、过氧化物酶体的发生 ============
  b.panel(710, 612, 660, 368, { title: '四、过氧化物酶体的发生：PTS1 信号输入折叠蛋白' })
  b.erU(740, 700, 150, 22, { ribo: false })
  b.ctext(815, 748, 'ER 出芽提供膜', { size: 10.5, weight: 600, fill: C.dnaD })
  b.arrow(900, 690, 950, 680, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.circle(1010, 690, 34, { fill: '#e0f2fe', stroke: C.acc, sw: 2 })
  b.ctext(1010, 694, 'Pex5', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(1048, 690, 1092, 690, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.circle(1140, 660, 14, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.text(1164, 656, '折叠状态输入（与线粒体不同）', { size: 10.5, fill: C.sub })
  b.rect(1150, 700, 16, 40, { fill: '#e0f2fe', stroke: C.acc, sw: 1.6, rx: 6 })
  b.ctext(1136, 766, 'PTS1（C 端 Ser-Lys-Leu）', { size: 10.5, weight: 600, fill: C.accD })
  b.wtext(736, 800, '基质蛋白翻译后经 PTS1（C 端 SKL）／PTS2（N 端）信号被 Pex5 受体识别输入；膜可由 ER 出芽生成。', { size: 11, fill: C.sub, maxW: 600, lh: 15.5 })
  b.tag(880, 848, 'Pex 基因突变 → Zellweger 综合征', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: C.bad, pad: 9 })
  b.wtext(736, 880, '过氧化物酶体装配缺陷：脑、肝、肾异常，VLCFA 累积。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
}

export default scene({
  title: '溶酶体与过氧化物酶体',
  subtitle: '溶酶体含 60 余种酸性水解酶、V 型质子泵维持 pH≈4.6，分异噬性与自噬性两类；酶缺陷致贮积病（Tay-Sachs、Gaucher）。过氧化物酶体以氧化酶＋过氧化氢酶「边产边清」，PTS1 输入折叠蛋白',
  draw,
})
