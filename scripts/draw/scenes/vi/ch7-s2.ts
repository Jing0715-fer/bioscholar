// vi ch7-s2 核酸的识别与包装（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、顺式包装信号 ============
  b.panel(30, 132, 660, 430, { title: '一、顺式包装信号：基因组的身份标签' })
  b.line(60, 280, 620, 280, { stroke: C.rna, sw: 3 })
  b.ctext(60, 302, '5′', { size: 10, fill: C.rna })
  b.ctext(620, 302, '3′', { size: 10, fill: C.rna })
  b.stemLoop(180, 280, { h: 44, r: 15, stroke: C.enz })
  b.ctext(180, 214, 'ψ 包装信号（HIV）', { size: 11, weight: 700, fill: C.enzD })
  b.stemLoop(430, 280, { h: 36, r: 12, stroke: C.enz })
  b.ctext(430, 222, 'DIS 二聚化位点', { size: 10.5, fill: C.enzD })
  b.circle(180, 352, 20, { fill: C.proL, stroke: C.pro, sw: 1.8 })
  b.ctext(180, 356, 'Gag', { size: 9.5, weight: 700, fill: C.proD })
  b.arrow(180, 330, 180, 310, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(180, 396, '衣壳蛋白只认带标签的 RNA', { size: 10.5, fill: C.sub })
  b.wtext(50, 176, '包装特异性由两端答案合写：基因组上的顺式包装信号（茎环／位点）＋衣壳或核衣壳蛋白的识别——细胞 RNA 无标签，装不进去。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.text(50, 262, '基因组 RNA（单链）', { size: 10.5, weight: 700, fill: C.rnaD })
  b.wtext(50, 440, '包装信号常兼作复制／二聚化元件——「一物三用」是小基因组的常态。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、末端酶与门户：马达泵入 ============
  b.panel(710, 132, 660, 430, { title: '二、门户＋末端酶：分子马达强行泵入' })
  b.virion(880, 300, 46, { shape: 'icosahedral', stroke: C.bad })
  // 门户（唯一顶点）
  b.polygon([[858, 350], [902, 350], [894, 376], [866, 376]], { fill: C.proL, stroke: C.pro, sw: 2 })
  // 末端酶马达
  b.rect(838, 414, 84, 34, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(880, 436, '末端酶', { size: 11, weight: 700, fill: C.enzD })
  b.ctext(880, 468, 'ATPase 马达', { size: 9.5, fill: C.mute })
  b.arrow(880, 410, 880, 384, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.line(894, 374, 906, 392, { stroke: C.pro, sw: 1.2, opacity: 0.55 })
  b.ctext(945, 400, '12 聚体门户蛋白', { size: 10, weight: 700, fill: C.proD })
  b.dna(760, 431, 70, { stroke: C.dna, amp: 9, period: 44 })
  b.ctext(795, 458, ' concatenated', { size: 8.5, fill: C.mute })
  b.ctext(795, 470, 'DNA', { size: 9.5, fill: C.dnaD })
  b.arrow(834, 431, 836, 431, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(880, 214, '壳内浓度约 500 mg/mL', { size: 11, weight: 700, fill: C.bad })
  b.ctext(880, 232, '内压达数十个大气压', { size: 11, weight: 700, fill: C.bad })
  b.wtext(1000, 210, '双链 DNA 靠水解 ATP 逆压泵入——壳内 DNA 浓度可与脱水晶体比肩，内压把它变成「上膛的弹簧」。', { size: 11, fill: C.sub, maxW: 340, lh: 16 })
  b.wtext(1000, 290, '高压的另一用途：感染时基因组经尾管「喷射」注入——包装能量在下一轮感染中释放。', { size: 11, fill: C.mute, maxW: 340, lh: 16 })

  // ============ 三、位点切割 vs 头部满装 ============
  b.panel(30, 586, 660, 394, { title: '三、装多少、从哪装：两条决定方式' })
  b.text(50, 646, 'λ：位点特异性（cos 切割）：', { size: 12, weight: 700, fill: C.ink })
  for (let k = 0; k < 5; k++) {
    b.rect(60 + k * 120, 664, 112, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.4, rx: 5 })
    b.rect(168 + k * 120, 664, 12, 18, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  }
  b.ctext(318, 706, '连环体上的 cos 位点', { size: 10, fill: C.rna })
  b.arrow(258, 690, 258, 716, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.arrow(378, 690, 378, 716, { stroke: C.enz, sw: 1.8, marker: 'enz' })
  b.rect(230, 724, 176, 20, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 5 })
  b.ctext(318, 738, '单体基因组', { size: 10, weight: 700, fill: C.dnaD })
  b.wtext(60, 770, '末端酶在 cos 位点交错切割，产生带 12 个核苷酸 5′ 突出末端的单体——长度由位点写死。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.text(50, 826, 'T4 与 P22：头部满装（headful）：', { size: 12, weight: 700, fill: C.ink })
  b.rect(60, 844, 90, 34, { fill: C.badL, stroke: C.bad, sw: 2, rx: 8 })
  b.ctext(105, 866, '装满即切', { size: 11, weight: 700, fill: C.bad })
  b.arrow(158, 861, 208, 861, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.wtext(220, 848, '头有多大、装多长：由此产生末端冗余与环状排列基因组（比单体多装一段、首尾循环）。', { size: 10.5, fill: C.sub, maxW: 420, lh: 15 })

  // ============ 四、容积耦合与凝聚包装 ============
  b.panel(710, 586, 660, 394, { title: '四、容积耦合与 RNA 的凝聚包装' })
  b.text(730, 646, '衣壳内腔 ≈ 基因组体积的 1.5–2 倍：', { size: 12, weight: 700, fill: C.ink })
  b.rect(730, 664, 180, 26, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
  b.ctext(820, 682, '紧密堆积的基因组', { size: 10.5, weight: 700, fill: C.dnaD })
  b.rect(916, 656, 360, 42, { fill: 'none', stroke: C.bad, sw: 2, dash: '7 5' })
  b.ctext(1096, 680, '衣壳内腔（1.5–2 倍）', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(730, 726, '统计规律把 T 数与基因组大小耦合：既容得下基因组与内部蛋白、又不浪费空腔。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.text(730, 782, '单链 RNA：凝聚包装', { size: 12, weight: 700, fill: C.ink })
  b.circle(800, 830, 36, { fill: C.rnaL, stroke: C.rna, sw: 2, fillOp: 0.75 })
  b.rnaW(778, 830, 44, { stroke: C.rnaD, amp: 6 })
  b.circle(836, 838, 5, { fill: C.proL, stroke: C.pro, sw: 1.3 })
  b.circle(812, 846, 5, { fill: C.proL, stroke: C.pro, sw: 1.3 })
  b.ctext(800, 886, 'N 蛋白＋RNA 液-液相分离', { size: 10, weight: 700, fill: C.rnaD })
  b.wtext(920, 806, '冠状病毒 N 蛋白与基因组 RNA 经液-液相分离压缩成凝聚体滴——不靠压力、靠相变。', { size: 10.5, fill: C.sub, maxW: 400, lh: 15 })
  b.wtext(920, 862, '节段病毒另有「逐段分选」机制：每段各带信号，确保一粒毒粒配齐全套。', { size: 10.5, fill: C.mute, maxW: 400, lh: 15 })
  b.wtext(730, 934, 'DNA 靠马达硬泵、RNA 靠相变软缩——两条路线殊途同归：把基因组塞进最小的壳。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })
}

export default scene({
  title: '核酸的识别与包装：信号、马达、满装与相分离',
  subtitle: 'ψ 等顺式包装信号决定身份；12 聚体门户＋末端酶马达把 dsDNA 泵入（壳内约 500 mg/mL、数十大气压）；λ 按 cos 切割、T4 头部满装；内腔为基因组体积 1.5–2 倍',
  draw,
})
