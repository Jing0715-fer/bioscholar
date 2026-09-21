// vi ch8-s4 病毒转化与致瘤（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、检查站的沦陷 ============
  b.panel(30, 132, 660, 430, { title: '一、检查站的沦陷：Rb 与 p53 双双失守' })
  b.circle(200, 240, 30, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(200, 245, 'Rb', { size: 15, weight: 700, fill: C.dnaD })
  b.circle(440, 240, 30, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(440, 245, 'p53', { size: 15, weight: 700, fill: C.proD })
  b.ctext(200, 290, 'E2F 被 Rb 扣押 → 周期刹车', { size: 10, fill: C.sub })
  b.ctext(440, 290, 'DNA 损伤哨兵 → 凋亡／修复', { size: 10, fill: C.sub })
  b.tag(200, 356, 'E7（高危 HPV）降解 Rb', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.bad, pad: 8 })
  b.arrow(200, 334, 200, 274, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.tag(470, 356, 'E6 经 E6AP 降解 p53', { fill: C.badL, stroke: C.bad, size: 10.5, tfill: C.bad, pad: 8 })
  b.arrow(470, 334, 456, 272, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(470, 400, '并激活端粒酶 → 永生化', { size: 10, fill: C.sub })
  b.wtext(50, 452, 'SV40 大 T 抗原同时扣留 Rb 与 p53、小 t 解除 PP2A 刹车；腺病毒以 E1A（Rb）＋E1B-55K／19K（p53／凋亡）分工同一逻辑。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(50, 496, '宫颈癌几乎全部检出 HPV DNA——E6／E7 是高危型的「驾驶证」。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、癌基因的病毒之窗 ============
  b.panel(710, 132, 660, 430, { title: '二、癌基因的病毒之窗：v-src 的细胞起源' })
  b.rect(740, 200, 250, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(865, 224, '正常鸡基因组：c-src', { size: 11.5, weight: 700, fill: C.dnaD })
  b.arrow(1000, 220, 1060, 220, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(1030, 204, '偶然捕获', { size: 9.5, fill: C.enzD })
  b.rect(1064, 200, 270, 40, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(1199, 218, '禽肉瘤病毒：v-src', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(1199, 234, '失去调控的酪氨酸激酶', { size: 9.5, fill: C.sub })
  b.wtext(740, 286, '1976 年 Bishop 与 Varmus 的杂交实验证明 v-src 序列本就存在于正常鸡基因组——原癌基因概念确立：癌症的范式从「病毒带来什么」翻转为「细胞丢失了什么」（1989 年诺贝尔奖）。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.text(740, 372, '插入活化：', { size: 12, weight: 700, fill: C.ink })
  b.dna(840, 380, 330, { stroke: C.dna, amp: 8, period: 44 })
  b.rect(920, 372, 70, 16, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.ctext(955, 384, '前病毒', { size: 9.5, weight: 700, fill: C.bad })
  b.rect(1090, 372, 60, 16, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(1120, 384, 'c-myc', { size: 9.5, weight: 700, fill: C.dnaD })
  b.arrow(990, 360, 1090, 360, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(1040, 346, '顺式激活', { size: 9.5, fill: C.bad })
  b.wtext(740, 424, '禽白血病病毒把前病毒插到 c-myc 旁顺式激活——不带癌基因的逆转录病毒也能致癌。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(740, 464, '转导（带基因）与插入（插基因）是逆转录病毒致癌的两条路。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 三、以假乱真与炎症致癌 ============
  b.panel(30, 586, 660, 394, { title: '三、LMP1 以假乱真与炎症-再生循环' })
  b.circle(180, 700, 34, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(180, 704, 'LMP1', { size: 11, weight: 700, fill: C.proD })
  b.arrow(218, 700, 268, 700, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(243, 684, '模拟', { size: 9.5, fill: C.mute })
  b.circle(300, 700, 34, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(300, 704, 'CD40', { size: 11, weight: 700, fill: C.accD })
  b.arrow(336, 700, 400, 700, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.ctext(368, 684, '组成性', { size: 9.5, fill: C.bad })
  b.rect(404, 676, 210, 48, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(509, 696, 'NF-κB 持续点燃', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(509, 714, 'B 细胞增殖不刹车', { size: 9.5, fill: C.sub })
  b.wtext(50, 762, 'EB 病毒 LMP1 模拟「已收到 T 细胞救援信号」的 CD40——无需配体、永不断电的假开关。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.text(50, 810, 'HBV／HCV：慢性炎症—再生循环致癌', { size: 12, weight: 700, fill: C.ink })
  b.tag(120, 846, '慢性炎症', { fill: C.warnL, stroke: C.warn, size: 11, tfill: '#78350f', pad: 8 })
  b.arrow(190, 846, 230, 846, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.tag(296, 846, '肝细胞反复坏死再生', { fill: C.warnL, stroke: C.warn, size: 11, tfill: '#78350f', pad: 8 })
  b.arrow(396, 846, 436, 846, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.tag(516, 846, '突变累积成癌', { fill: C.badL, stroke: C.bad, size: 11, tfill: C.bad, pad: 8 })
  b.wtext(50, 892, '乙肝疫苗使儿童肝癌发病率下降约七成——防感染即防癌的最好例证。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、肿瘤病毒学简史 ============
  b.panel(710, 586, 660, 394, { title: '四、肿瘤病毒学简史与感染归因' })
  b.timelineH(740, 760, 600, [
    { at: 0.05, label: '1911 Rous', sub: '发现禽肉瘤病毒', c: C.dna },
    { at: 0.36, label: '1964 EB 病毒', sub: '伯基特淋巴瘤培养细胞电镜窥见', above: true, c: C.rna },
    { at: 0.68, label: '1976 v-src 细胞起源', sub: '原癌基因 · 1989 诺奖', c: C.bad },
    { at: 0.95, label: '疫苗防癌', sub: '儿童肝癌降约七成', above: true, c: C.ok },
  ])
  b.ctext(1160, 710, '（Rous 迟至 1966 年获诺贝尔奖）', { size: 10, fill: C.mute })
  b.text(730, 852, '感染归因：约一成二人类癌症', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(940, 836, 300, 22, { fill: C.panelB, stroke: C.line, sw: 1.3 })
  b.rect(940, 836, 36, 22, { fill: C.bad, stroke: C.bad, sw: 1.3 })
  b.ctext(1090, 851, '≈ 12%', { size: 11, weight: 700, fill: C.bad })
  b.wtext(730, 892, '主要病毒因子：高危 HPV、EB 病毒、HBV 与 HCV、HTLV-1、HHV-8。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })
  b.wtext(730, 928, '致癌不是病毒的「目的」——只是它劫持增殖机器的副产品被时间放大。', { size: 10.5, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '病毒转化与致瘤：检查站沦陷、原癌基因与炎症致癌',
  subtitle: 'E6 经 E6AP 降解 p53 并激活端粒酶、E7 降解 Rb；1976 年 Bishop 与 Varmus 证明 v-src 源自细胞（1989 诺奖）；LMP1 模拟 CD40 持续点燃 NF-κB；约 12% 人类癌症归因感染',
  draw,
})
