// cb ch11-s2 细胞全能性与干细胞（39-d 批C 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、发育潜能分级树 ============
  b.panel(30, 132, 660, 430, { title: '一、发育潜能的分级：全能 → 多能 → 多潜能 → 单能' })
  const lv: Array<[string, string, string, string]> = [
    ['全能性', '受精卵与卵裂早期卵裂球', '可发育为完整个体及胚外组织', C.bad],
    ['多能性', '囊胚内细胞团（ICM）', '三胚层所有细胞类型，但不能形成胚外组织', C.warn],
    ['多潜能性', '造血干细胞等成体干细胞', '限于某一谱系内的分化能力', C.dna],
    ['单能性', '表皮基底层干细胞', '仅一种终末分化方向', C.acc],
  ]
  lv.forEach((l, i) => {
    const y = 200 + i * 84
    b.rect(80, y - 26, 190, 62, { fill: i === 0 ? C.badL : i === 1 ? C.warnL : i === 2 ? C.dnaL : C.accL, stroke: l[3], sw: 2.2, rx: 10 })
    b.ctext(175, y - 4, l[0], { size: 13, weight: 700, fill: l[3] })
    b.ctext(175, y + 20, l[1], { size: 9, fill: C.sub })
    b.wtext(300, y - 12, l[2], { size: 10, fill: C.sub, maxW: 360, lh: 13.5 })
    if (i < 3) b.arrow(175, y + 38, 175, y + 54, { stroke: C.mute, sw: 2, marker: 'mute' })
  })
  b.ctext(330, 556, '体外对应：全能／多能标志 Oct4·Nanog·Sox2', { size: 9.5, weight: 700, fill: C.proD })

  // ============ 二、ESC 与成体干细胞 ============
  b.panel(710, 132, 660, 430, { title: '二、胚胎干细胞建系与五类成体干细胞' })
  b.text(740, 186, '胚胎干细胞（ESC）', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(740, 208, '1981 年 Evans 与 Kaufman 从小鼠囊胚 ICM 建系；1998 年 Thomson 建立人 ESC 系。特征：无限自我更新、正常核型、表达 Oct4／Nanog／Sox2、注射入囊胚产生嵌合体、体外形成含三胚层的畸胎瘤；与胚状体（EB）定向分化是细胞替代治疗的核心体系。', { size: 9.5, fill: C.sub, maxW: 600, lh: 13.5 })
  // 五类成体干细胞小卡
  const ascs: Array<[string, string, string]> = [
    ['造血干细胞 HSC', 'CD34⁺·骨髓移植', 'Till 与 McCulloch（1961）脾结节（CFU-S）实验首次证明'],
    ['间充质干细胞 MSC', '骨髓基质来源', '分化为骨、软骨、脂肪与基质'],
    ['神经干细胞 NSC', 'SVZ 与海马 SGZ', 'B1 细胞放射状胶质延续产生神经元与胶质；神经球培养'],
    ['肠道隐窝干细胞 ISC', 'Lgr5⁺ 隐窝基底柱状', 'Clevers 类器官培养'],
    ['角膜缘 / 毛囊隆突', 'Leu⁺ 等', '组织局部修复'],
  ]
  ascs.forEach((a, i) => {
    const col = i % 2; const row = Math.floor(i / 2)
    const x = 740 + col * 310; const y = 300 + row * 74
    b.rect(x, y, 290, 62, { fill: C.panel, stroke: C.faint, sw: 1.5, rx: 8 })
    b.text(x + 12, y + 20, a[0], { size: 10, weight: 700, fill: C.ink })
    b.text(x + 12, y + 38, a[1], { size: 9, weight: 700, fill: C.dnaD })
    b.wtext(x + 12, y + 48, a[2], { size: 8, fill: C.mute, maxW: 268, lh: 10.5 })
  })

  // ============ 三、干细胞巢：微环境决定命运 ============
  b.panel(30, 576, 1340, 404, { title: '三、干细胞巢（niche）：微环境信号决定静息或分裂（Schofield，1978）' })
  // HSC 巢场景
  b.rect(70, 626, 560, 240, { fill: C.panelB, fillOp: 0.5, stroke: C.faint, sw: 1.5, rx: 10 })
  b.ctext(350, 650, '骨髓 HSC 巢', { size: 11.5, weight: 700, fill: C.sub })
  b.circle(200, 730, 20, { fill: C.okL, stroke: C.ok, sw: 2.4 })
  b.ctext(200, 734, 'HSC', { size: 9.5, weight: 700, fill: C.ok })
  b.ctext(200, 762, '静息（G0）', { size: 9, fill: C.mute })
  const niche: Array<[string, number, number]> = [
    ['骨内膜成骨细胞', 320, 690], ['CAR 基质细胞（分泌 SCF）', 480, 690],
    ['交感神经', 320, 770], ['巨核细胞', 480, 770],
  ]
  niche.forEach(n => {
    b.tag(n[1], n[2], n[0], { fill: C.proL, stroke: C.pro, size: 8.5, tfill: C.proD, pad: 4 })
    b.arrow(n[1] < 350 ? n[1] + 90 : n[1] - 90, n[2], n[1] < 350 ? 222 : 240, n[2] < 730 ? 722 : 740, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  })
  b.wtext(70, 856, '维持信号：SCF/c-Kit、CXCL12/CXCR4（归巢）、Notch、Wnt 与 TGF-β；衰老与疾病状态下干细胞功能衰退（骨髓脂肪化、神经发生减少）是组织衰老的核心环节。', { size: 9.5, fill: C.sub, maxW: 560, lh: 13.5 })
  // 右：不对称分裂
  b.text(700, 626, '不对称分裂与群体不对称', { size: 11.5, weight: 700, fill: C.ink })
  b.circle(780, 700, 22, { fill: C.okL, stroke: C.ok, sw: 2.2 })
  b.ctext(780, 704, '干细胞', { size: 8.5, weight: 700, fill: C.ok })
  b.arrow(806, 690, 880, 660, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.arrow(806, 712, 880, 744, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.circle(905, 650, 20, { fill: C.okL, stroke: C.ok, sw: 2 })
  b.ctext(905, 654, '干细胞', { size: 8, weight: 700, fill: C.ok })
  b.circle(905, 754, 20, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(905, 758, '定向祖', { size: 8, weight: 700, fill: C.accD })
  b.tag(800, 792, 'Numb 不对称分配', { fill: C.rnaL, stroke: C.rna, size: 9, tfill: C.rnaD, pad: 4 })
  b.ctext(790, 822, '「一个干细胞、一个分化细胞」的稳态输出', { size: 9.5, fill: C.sub })
  b.wtext(1040, 640, '群体不对称：按巢信号在干细胞与定向祖细胞间取得平衡，与不对称分裂共同维持组织稳态——干细胞的行为由其所处的微环境决定。', { size: 10, fill: C.sub, maxW: 300, lh: 14 })
  b.wtext(1040, 730, 'HSC（CD34⁺）在骨髓中重建整个血液系统，是干细胞移植（骨髓移植）的基础。', { size: 9.5, fill: C.mute, maxW: 300, lh: 13 })
}

export default scene({
  title: '细胞全能性与干细胞：潜能分级、建系与干细胞巢',
  subtitle: '全能→多能（ICM/ESC）→多潜能（HSC）→单能；ESC 1981/1998 建系，Oct4/Nanog/Sox2 标志；成体干细胞 HSC/MSC/NSC/ISC；干细胞巢决定命运',
  draw,
})
