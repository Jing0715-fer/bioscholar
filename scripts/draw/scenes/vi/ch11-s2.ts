// vi ch11-s2 细胞与组织水平的致病（39-j 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、致病的一般图式 ============
  b.panel(30, 132, 660, 430, { title: '一、全身播散的一般图式：两次病毒血症' })
  const stages: [string, string][] = [
    ['局部增殖', '入侵门户原位复制'],
    ['第一次病毒血症', '少量入血播散'],
    ['网状内皮增殖', '肝脾淋巴结扩增'],
    ['第二次病毒血症', '大量入血'],
    ['靶器官定位', '皮肤／神经／肝等'],
  ]
  stages.forEach(([t, s], i) => {
    const bx = 56 + i * 124
    b.rect(bx, 226, 108, 70, { fill: C.panelB, stroke: C.acc, sw: 1.8, rx: 9 })
    b.ctext(bx + 54, 252, t, { size: 10.5, weight: 700, fill: C.accD })
    b.wtext(bx + 10, 272, s, { size: 9, fill: C.mute, maxW: 88, lh: 12 })
    if (i < 4) b.arrow(bx + 110, 261, bx + 122, 261, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  })
  b.arrow(110, 300, 110, 336, { stroke: C.mute, sw: 1.8, marker: 'mute', dash: '6 4' })
  b.rect(56, 340, 150, 46, { fill: 'none', stroke: C.mute, sw: 1.6, dash: '6 4', rx: 8 })
  b.ctext(131, 360, '局部感染即止', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(131, 378, '（流感、鼻病毒）', { size: 9.5, fill: C.mute })
  b.wtext(50, 416, '经典次序：先在入侵门户增殖，少量入血被网状内皮系统截获增殖，再大量入血突破到靶器官——「播」与「发」之间隔着两次扩增。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(50, 460, '病毒血症期间血中可检出病毒；组织亲嗜性由受体分布等共同决定。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、受体表达谱决定亲嗜性 ============
  b.panel(710, 132, 660, 430, { title: '二、受体在哪里，病毒就去哪里' })
  b.table(730, 210, 600, {
    headers: ['病毒', '受体', '主要分布', '疾病表现'],
    rows: [
      ['HIV', 'CD4（共受体 CCR5/CXCR4）', '辅助 T 细胞、单核巨噬细胞', '艾滋病'],
      ['HBV', 'NTCP', '肝细胞', '乙型肝炎'],
      ['麻疹病毒', 'SLAM 与 nectin-4', '免疫细胞、上皮细胞', '麻疹'],
      ['脊灰病毒', 'CD155', '脊髓前角神经元', '脊髓灰质炎'],
    ],
    colW: [85, 175, 170, 170], rowH: 48, fontSize: 11.5,
  })
  b.wtext(726, 470, '受体表达谱决定亲嗜性：CD4 之于 HIV、NTCP 之于 HBV、SLAM 与 nectin-4 之于麻疹、CD155 之于脊髓灰质炎——「靶器官」其实是受体地图。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 508, '受体的广谱或局限，同时决定病毒的传播效率与致病范围。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、直接损伤：纤毛上皮剥蚀与 1918 教训 ============
  b.panel(30, 586, 660, 394, { title: '三、直接损伤：纤毛上皮的剥蚀' })
  b.text(50, 644, '正常气管支气管上皮', { size: 11, weight: 700, fill: C.ok })
  for (let k = 0; k < 7; k++) {
    const cx = 60 + k * 88
    b.rect(cx, 664, 60, 34, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 4 })
    for (let j = 0; j < 6; j++) b.line(cx + 8 + j * 9, 664, cx + 8 + j * 9, 652, { stroke: C.ok, sw: 1.4 })
    b.circle(cx + 30, 680, 5, { fill: '#ffffff', stroke: C.ok, sw: 1.2 })
  }
  b.text(50, 742, '流感感染后：剥蚀裸露', { size: 11, weight: 700, fill: C.bad })
  b.line(56, 792, 664, 792, { stroke: C.sub, sw: 2.4 })
  b.ctext(360, 812, '基底膜裸露', { size: 9.5, fill: C.mute })
  ;[[90, 776], [250, 770], [430, 778], [590, 772]].forEach(([dx, dy]) => {
    b.circle(dx, dy, 11, { fill: C.badL, stroke: C.bad, sw: 1.8 })
    b.ctext(dx, dy + 3.5, '菌', { size: 9, weight: 700, fill: C.bad })
  })
  b.arrow(360, 716, 360, 756, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(445, 742, '继发细菌定植：肺炎链球菌、金黄色葡萄球菌', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(50, 856, '流感剥蚀纤毛上皮使细菌定植与继发性肺炎成为重症与死亡的主因——1918 年大流行死亡者多数死于细菌性肺炎，现代病原学研究已证实这一层次关系。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(200, 928, '溶细胞', { fill: C.panelB, stroke: C.sub, size: 10.5, weight: 700, tfill: C.sub, pad: 7 })
  b.tag(330, 928, '合胞体', { fill: C.panelB, stroke: C.sub, size: 10.5, weight: 700, tfill: C.sub, pad: 7 })
  b.tag(460, 928, '宿主合成关闭', { fill: C.panelB, stroke: C.sub, size: 10.5, weight: 700, tfill: C.sub, pad: 7 })
  b.ctext(610, 932, '＝直接损伤三型', { size: 10, fill: C.mute })

  // ============ 四、免疫病理与神经侵袭 ============
  b.panel(710, 586, 660, 394, { title: '四、免疫病理与狂犬的逆行公路' })
  b.ellipse(860, 706, 58, 32, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.circle(840, 700, 6, { fill: C.bad })
  b.circle(884, 712, 6, { fill: C.bad })
  b.ctext(860, 662, 'HBV 感染肝细胞', { size: 10.5, weight: 700, fill: C.rnaD })
  b.circle(860, 792, 20, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(860, 796, 'CTL', { size: 9.5, weight: 700, fill: C.proD })
  b.arrow(846, 774, 836, 742, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.arrow(874, 774, 884, 742, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(940, 760, '免疫攻击为主', { size: 10, weight: 700, fill: C.proD })
  // 右：逆行轴浆运输
  b.circle(1120, 706, 22, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.polygon([[1098, 690], [1082, 678], [1092, 698]], { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.polygon([[1098, 722], [1082, 734], [1092, 714]], { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(1120, 760, '中枢神经元', { size: 10, weight: 700, fill: C.dnaD })
  b.line(1142, 706, 1330, 706, { stroke: C.dna, sw: 3 })
  for (let k = 0; k < 5; k++) b.rect(1150 + k * 36, 698, 26, 16, { fill: 'none', stroke: C.acc, sw: 1.4, rx: 7 })
  b.virion(1300, 688, 7, { shape: 'bullet', stroke: C.bad })
  b.virion(1232, 688, 7, { shape: 'bullet', stroke: C.bad })
  b.arrow(1300, 712, 1262, 712, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.arrow(1232, 712, 1194, 712, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(1236, 664, '逆行轴浆运输（每天约 5–100 mm）', { size: 10, weight: 700, fill: C.bad })
  b.ctext(1330, 748, '外周侵入处', { size: 9.5, fill: C.mute })
  b.wtext(726, 836, 'HBV 的肝损伤以 CTL 免疫攻击为主；LCMV 小鼠模型确立免疫致病学。狂犬病毒经逆行轴浆运输抵达中枢，脑内病变以功能障碍为主——病死率近乎百分之百。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(880, 900, '免疫复合物病', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 7 })
  b.tag(1100, 900, '分子模拟：吉兰-巴雷综合征', { fill: C.warnL, stroke: C.warn, size: 10.5, weight: 700, tfill: '#78350f', pad: 7 })
  b.wtext(726, 936, '另两类免疫病理：抗原抗体复合物沉积与分子模拟诱导的自身免疫。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '细胞与组织水平的致病：播散、亲嗜性与损伤来源',
  subtitle: '两次病毒血症的经典图式；CD4／NTCP／SLAM 与 nectin-4／CD155 受体地图；流感剥蚀纤毛上皮、1918 年多数死亡源于细菌性肺炎；狂犬逆行轴浆运输每天约 5–100 mm',
  draw,
})
