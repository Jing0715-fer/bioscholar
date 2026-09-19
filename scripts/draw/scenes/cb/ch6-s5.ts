// cb ch6-s5 细胞骨架与细胞运动（39-d 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、迁移循环 ============
  b.panel(30, 132, 1340, 340, { title: '一、迁移循环：前端伸展 → 新粘着 → 胞体牵引 → 尾部释放' })
  b.arrow(100, 172, 200, 172, { stroke: C.acc, sw: 3, marker: 'acc' })
  b.ctext(150, 192, '迁移方向', { size: 11, weight: 700, fill: C.accD })
  // 细胞体
  b.ellipse(450, 300, 190, 95, { fill: C.panel, stroke: C.sub, sw: 2.2 })
  b.ellipse(655, 300, 55, 85, { fill: C.accL, fillOp: 0.6, stroke: C.sub, sw: 2.2 })
  b.nucleusU(430, 290, 45, {})
  // 丝状伪足
  b.line(708, 270, 760, 255, { stroke: C.acc, sw: 2.5 })
  b.line(710, 290, 775, 285, { stroke: C.acc, sw: 2.5 })
  b.line(710, 315, 775, 325, { stroke: C.acc, sw: 2.5 })
  b.line(705, 335, 755, 355, { stroke: C.acc, sw: 2.5 })
  // 尾部
  b.path('M 262,265 L 160,282', { stroke: C.sub, sw: 2 })
  b.path('M 262,335 L 160,318', { stroke: C.sub, sw: 2 })
  b.path('M 160,282 Q 145,300 160,318', { stroke: C.sub, sw: 2, fill: 'none' })
  // 新粘着点
  b.circle(620, 393, 5, { fill: C.enz })
  b.circle(660, 396, 5, { fill: C.enz })
  b.circle(700, 393, 5, { fill: C.enz })
  // 四步标注
  b.circle(745, 230, 11, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(745, 234, '①', { size: 11, weight: 700, fill: C.accD })
  b.text(765, 235, '前端伸展（Arp2/3 分支网络推动板状伪足）', { size: 10.5, fill: C.ink })
  b.circle(645, 420, 11, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(645, 424, '②', { size: 11, weight: 700, fill: C.accD })
  b.text(665, 425, '新粘着形成（整联蛋白点状粘着与粘着斑）', { size: 10.5, fill: C.ink })
  b.circle(415, 420, 11, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(415, 424, '③', { size: 11, weight: 700, fill: C.accD })
  b.text(435, 425, '胞体牵引（应力纤维收缩）', { size: 10.5, fill: C.ink })
  b.circle(125, 235, 11, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(125, 239, '④', { size: 11, weight: 700, fill: C.accD })
  b.text(145, 240, '尾部释放（整联蛋白内吞与钙蛋白酶切断）', { size: 10.5, fill: C.ink })

  // ============ 二、Rho 家族 GTP 酶 ============
  b.panel(30, 494, 660, 240, { title: '二、Rho 家族 GTP 酶：运动的方向盘' })
  const rows: [string, string, string, string, string, string][] = [
    ['Rac1', C.dnaL, C.dnaD, 'dna', 'WAVE', '板状伪足广谱推进'],
    ['Cdc42', C.proL, C.proD, 'pro', 'WASP', '丝状伪足＋建立前端极性'],
    ['RhoA', C.rnaL, C.rnaD, 'rna', 'ROCK', '应力纤维收缩'],
  ]
  rows.forEach(([g, gl, gd, mk, e1, out], i) => {
    const y = 560 + i * 55
    const e2 = i < 2 ? 'Arp2/3' : 'MLC 磷酸化'
    b.tag(110, y, g, { fill: gl, stroke: gd, size: 10.5, weight: 700, tfill: gd, pad: 6 })
    b.arrow(145, y, 178, y, { stroke: gd, sw: 2, marker: mk as 'dna' | 'pro' | 'rna' })
    b.tag(212, y, e1, { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 6 })
    b.arrow(245, y, 278, y, { stroke: C.acc, sw: 2, marker: 'acc' })
    b.tag(322, y, e2, { fill: C.enzL, stroke: C.enz, size: 10.5, weight: 700, tfill: C.enzD, pad: 6 })
    b.text(395, y + 4, out, { size: 10.5, fill: C.ink })
  })
  b.text(60, 715, '三者构成相互制约的回路，在细胞内建立前后极性 → 运动具有持续方向。', { size: 10.5, fill: C.mute })

  // ============ 三、趋化作用 ============
  b.panel(710, 494, 660, 240, { title: '三、趋化作用：极化信号转导（细胞＝梯度比较器）' })
  // 梯度
  b.rect(1240, 545, 60, 145, { fill: C.rna, fillOp: 0.5 })
  b.rect(1180, 545, 60, 145, { fill: C.rna, fillOp: 0.35 })
  b.rect(1120, 545, 60, 145, { fill: C.rna, fillOp: 0.2 })
  b.rect(1060, 545, 60, 145, { fill: C.rna, fillOp: 0.1 })
  b.ctext(1180, 530, '趋化因子梯度（高 → 低）', { size: 10, weight: 700, fill: C.rnaD })
  // 细胞
  b.circle(900, 618, 60, { fill: C.panel, stroke: C.sub, sw: 2.2 })
  b.path('M 940,568 A 60,60 0 0 1 940,668', { stroke: C.ok, sw: 8, fill: 'none', opacity: 0.8 })
  b.line(958, 590, 985, 580, { stroke: C.acc, sw: 2 })
  b.line(962, 620, 992, 618, { stroke: C.acc, sw: 2 })
  b.line(958, 650, 985, 660, { stroke: C.acc, sw: 2 })
  b.text(975, 540, '前端 PIP₃ 浓集（PI3K 产生）', { size: 9.5, weight: 700, fill: C.ok })
  b.etext(826, 585, '后端 PTEN 清除', { size: 9.5, weight: 700, fill: C.bad })
  // GPCR 均匀分布
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2
    b.rect(900 + 60 * Math.cos(a) - 6, 618 + 60 * Math.sin(a) - 4, 12, 8, { fill: C.accL, stroke: C.acc, sw: 1.2, rx: 2 })
  }
  b.ctext(900, 700, '趋化因子受体（GPCR）均匀分布', { size: 9.5, fill: C.accD })
  b.text(726, 726, '中性粒细胞追杀细菌、单核细胞趋向炎症灶；盘基网柄菌为经典模式生物——Rac/Cdc42 招募至前端，局部启动肌动网络伸展。', { size: 10, fill: C.mute })

  // ============ 四、骨架协作与其他运动 ============
  b.panel(30, 754, 1340, 226, { title: '四、三类骨架的协作与其他运动形式' })
  const cards: [number, string, string, string][] = [
    [60, '微管', '探路并运送膜组分', '（微管马达长程运输）'],
    [270, '微丝', '产生推进与收缩力', '（皮层与应力纤维）'],
    [480, '中间丝', '保障整体完整性', '（抗张力网络）'],
  ]
  cards.forEach(([x, t, s, s2]) => {
    b.rect(x, 790, 190, 130, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
    b.ctext(x + 95, 830, t, { size: 14, weight: 700, fill: C.ink })
    b.ctext(x + 95, 862, s, { size: 11, weight: 600, fill: C.sub })
    b.ctext(x + 95, 886, s2, { size: 9.5, fill: C.mute })
  })
  b.ctext(260, 860, '＋', { size: 16, weight: 700, fill: C.mute })
  b.ctext(470, 860, '＋', { size: 16, weight: 700, fill: C.mute })
  b.text(740, 800, '其他运动形式：', { size: 11, weight: 700, fill: C.sub })
  b.tag(830, 832, '阿米巴运动（变形运动）', { fill: C.accL, stroke: C.acc, size: 10, tfill: C.accD, pad: 6 })
  b.tag(1030, 832, '肿瘤侵袭（EMT 重编程 Rho 开关）', { fill: C.badL, stroke: C.bad, size: 10, tfill: C.bad, pad: 6 })
  b.tag(820, 872, '白细胞渗出（第 9 章）', { fill: C.dnaL, stroke: C.dna, size: 10, tfill: C.dnaD, pad: 6 })
  b.tag(1000, 872, '形态发生（原肠作用群体迁移）', { fill: C.proL, stroke: C.pro, size: 10, tfill: C.proD, pad: 6 })
  b.wtext(740, 918, '力学转导：粘着斑处的张力经 talin、YAP/TAZ 转化为基因表达改变——机械生物学前沿；抗转移策略靶向整联蛋白与 ROCK。', { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })
}

export default scene({
  title: '细胞骨架与细胞运动',
  subtitle: '迁移四步循环（伸展→粘着→牵引→释放）；Rac1→板状伪足、Cdc42→丝状伪足与极性、RhoA→应力纤维收缩；趋化核心是 PIP₃ 胞内极化梯度（PI3K/PTEN）；微管探路、微丝产力、中间丝保完整性',
  draw,
})
