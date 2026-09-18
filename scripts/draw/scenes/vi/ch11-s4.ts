// vi ch11-s4 宿主因素与免疫致病（39-j 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、年龄两端重塑疾病谱 ============
  b.panel(30, 132, 660, 430, { title: '一、年龄两端：不成熟与衰老的免疫' })
  b.axis(70, 460, 340, 240, {
    xticks: [[0, '出生'], [0.5, '青壮年'], [1, '老年']],
    yticks: [[0, '低'], [1, '高']], grid: false,
  })
  b.ctext(70 + 172, 196, '重症／感染风险（示意）', { size: 11, weight: 700, fill: C.ink })
  b.curve(70, 460, 340, 240, [[0, 0.92], [0.12, 0.55], [0.3, 0.18], [0.55, 0.12], [0.75, 0.3], [0.9, 0.68], [1, 0.9]], { stroke: C.bad, sw: 2.8, smooth: true })
  b.tag(150, 236, '先天性 CMV', { fill: C.badL, stroke: C.bad, size: 10, weight: 700, tfill: C.bad, pad: 6 })
  b.tag(330, 250, '免疫衰老', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: '#78350f', pad: 6 })
  b.wtext(440, 210, '先天性 CMV 感染为最常见先天感染，也是非遗传性耳聋的首因；免疫衰老使老年流感与带状疱疹风险陡升。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  b.wtext(440, 292, '同一病毒在生命两端换上两副面孔：宫内经胎盘的温和持续 vs 老年神经节的再激活。', { size: 10.5, fill: C.mute, maxW: 230, lh: 15 })
  b.wtext(46, 500, '年龄并非单纯的「免疫力刻度」，而是重塑病毒病表现谱的独立维度。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、登革 ADE 与疫苗教训 ============
  b.panel(710, 132, 660, 430, { title: '二、抗体依赖性增强（ADE）与疫苗教训' })
  b.virion(790, 260, 16, { shape: 'enveloped', stroke: C.bad })
  b.path('M 830,244 l -6,16 M 830,244 l 6,16 M 830,244 l 0,18', { stroke: C.enz, sw: 2.4 })
  b.path('M 852,240 l -6,16 M 852,240 l 6,16 M 852,240 l 0,18', { stroke: C.enz, sw: 2.4 })
  b.ctext(830, 296, '次中和抗体', { size: 9.5, weight: 700, fill: C.enzD })
  b.arrow(880, 260, 946, 260, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.ctext(912, 244, 'Fc 段', { size: 9.5, fill: C.enzD })
  b.cell(1010, 260, 52, 34, { stroke: C.acc })
  b.ctext(1010, 256, 'Fc 受体细胞', { size: 10, weight: 700, fill: C.accD })
  b.ctext(1010, 276, '（单核／巨噬细胞）', { size: 9, fill: C.mute })
  b.arrow(1074, 260, 1130, 260, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(1102, 244, '摄取↑', { size: 9.5, weight: 700, fill: C.bad })
  b.rect(1134, 236, 190, 48, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(1229, 256, '感染增强', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(1229, 274, '高病毒载量→重症', { size: 9.5, fill: C.sub })
  b.wtext(726, 330, 'Dengvaxia（黄热 17D 骨架、表达四型 prM/E）2015–2016 年在菲律宾接种约 83 万名学童；2017 年公布的分析显示：血清阴性接种者日后感染登革的重症风险反增——确立按血清状态分层评估疫苗的原则。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 392, '更早的教训：1960 年代中期福尔马林灭活 RSV 疫苗——接种组住院率高达八成、对照组仅约百分之五，并有幼儿死亡；机制指向 Th2 偏斜与非中和抗体。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
  b.wtext(726, 436, '同一机制（疫苗源性免疫偏斜）两度改写疫苗审评原则。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、HIV：CD4 耗竭与宿主遗传 ============
  b.panel(30, 586, 660, 394, { title: '三、HIV：CD4 耗竭的坡道与宿主遗传' })
  const ax = 70, ay = 850, aw = 330, ah = 170
  b.axis(ax, ay, aw, ah, {
    xticks: [[0, '感染'], [0.45, '4'], [0.75, '8'], [1, '10（年）']],
    yticks: [[0, '0'], [0.24, '200'], [1, '1000']], grid: true,
  })
  b.line(ax, ay - 0.24 * ah, ax + aw, ay - 0.24 * ah, { stroke: C.bad, sw: 1.6, dash: '6 4' })
  b.ctext(ax + 0.86 * aw, ay - 0.24 * ah - 10, '200/μL', { size: 10, weight: 700, fill: C.bad })
  b.curve(ax, ay, aw, ah, [[0, 0.95], [0.06, 0.32], [0.16, 0.5], [0.45, 0.42], [0.75, 0.3], [1, 0.2]], { stroke: C.acc, sw: 2.8, smooth: true })
  b.ctext(155, 700, '急性期：肠道 CD4 急性耗竭', { size: 9.5, weight: 700, fill: C.accD })
  b.ctext(274, 742, '慢性期：年均下滑约 50–100 个/μL', { size: 9.5, fill: C.sub })
  b.ctext(290, 836, '艾滋病期（约 8–10 年）', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(440, 650, 'CCR5Δ32 纯合子对 R5 型 HIV 高度抵抗、杂合子进展迟缓——「柏林病人」2008 年经 CCR5Δ32 纯合干细胞移植实现 HIV 治愈首例；HLA-B57/B27 关联慢进展。', { size: 10.5, fill: C.sub, maxW: 230, lh: 15 })
  b.wtext(440, 760, 'ART 重建免疫可诱发免疫重建炎症综合征（IRIS）——治愈的代价之一。', { size: 10.5, fill: C.mute, maxW: 230, lh: 15 })
  b.wtext(46, 890, '急性期病毒与免疫的拉锯先清空肠道 CD4；慢性免疫激活、旁观者凋亡与胸腺功能衰竭使外周 CD4 计数缓慢滑坡。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、免疫缺陷宿主与长新冠 ============
  b.panel(710, 586, 660, 394, { title: '四、免疫缺陷宿主与长新冠' })
  b.text(726, 644, '免疫控制的边界（移植／原发免疫缺陷）：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(790, 676, 'CMV 再激活', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  b.tag(960, 676, 'BK 病毒肾病', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  b.tag(1130, 676, 'EBV 移植后淋巴增殖', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 7 })
  b.wtext(726, 708, 'TLR3-UNC93B1 缺陷对应儿童重症疱疹脑炎——「谁的免疫缺哪块，哪种病毒就趁虚而入」。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.text(726, 756, '长新冠：多条假说并行：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(790, 788, '持续抗原假说', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
  b.tag(960, 788, '免疫失调', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
  b.tag(1100, 788, '微血栓', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
  b.tag(1210, 788, 'EBV 再激活', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 7 })
  b.wtext(726, 820, 'WHO 委托的模型估计：2020–2021 年间约 6% 的症状性感染者在三个月后仍带至少一种后遗症状，住院者中升至五成上下——女性与中年更高危。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(726, 874, '患病率不同口径从百分之几到百分之三十不等——定义与研究人群差异所致。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
  b.wtext(726, 920, '宿主因素与病毒结局互为镜像：免疫年龄、遗传与既有免疫史共同决定同一感染的不同命运。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '宿主因素与免疫致病：年龄、ADE、CD4 与长新冠',
  subtitle: '先天性 CMV 为最常见先天感染；Dengvaxia 约 83 万学童与灭活 RSV 住院率八成；HIV 年均 CD4 滑坡 50–100/μL、低于 200 进艾滋病期；柏林病人 2008；长新冠约 6%',
  draw,
})
