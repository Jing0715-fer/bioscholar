// vi ch6-s2 翻译策略与宿主翻译劫持（39-j 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、单顺反子铁律的五大破法 ============
  b.panel(30, 132, 660, 430, { title: '一、真核单顺反子铁律的五大破法' })
  const st: [string, string][] = [
    ['① 多聚蛋白', '一条 ORF 翻译后切割成多个蛋白'],
    ['② 嵌套亚基因组 mRNA', '多条 sg mRNA 各带一个 ORF'],
    ['③ 节段化', '每段基因组各产一条 mRNA'],
    ['④ 渗漏扫描', '核糖体漏过弱起始码、从下游起步'],
    ['⑤ −1 程序性移码', '按固定比率产出下游 ORF'],
  ]
  st.forEach(([nm, txt], i) => {
    const cx = 50 + (i % 2) * 316, cy = 196 + Math.floor(i / 2) * 88
    b.rect(cx, cy, 300, 72, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 8 })
    b.ctext(cx + 150, cy + 28, nm, { size: 12.5, weight: 700, fill: C.accD })
    b.ctext(cx + 150, cy + 52, txt, { size: 10, fill: C.sub })
  })
  b.wtext(50, 496, '一条 mRNA 只翻一个开放阅读框？病毒用五种方式把「一条」变成「多条」。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、多聚蛋白与 −1 移码的定量 ============
  b.panel(710, 132, 660, 430, { title: '二、多聚蛋白的紧凑与移码的定量' })
  b.text(730, 190, '脊髓灰质炎：约 7.5 kb 几乎一条 ORF', { size: 12, weight: 700, fill: C.ink })
  b.rect(730, 204, 560, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 6 })
  b.ctext(1010, 222, '多聚蛋白（约 247 kDa）', { size: 11, weight: 700, fill: C.rnaD })
  ;[820, 1040, 1230].forEach(x => b.line(x, 200, x, 234, { stroke: C.bad, sw: 2, dash: '4 3' }))
  b.ctext(820, 258, '2Apro', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(1040, 258, '3Cpro', { size: 9.5, weight: 700, fill: C.bad })
  b.ctext(1230, 258, '3Cpro', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(730, 288, '自内切割依序释放衣壳前体 P1 与复制加工蛋白——基因组紧凑、产物化学计量恒定。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.text(730, 336, '−1 程序性移码：滑动序列＋茎环＝定量电位器', { size: 12, weight: 700, fill: C.ink })
  b.line(760, 380, 900, 380, { stroke: C.rna, sw: 3 })
  b.ctext(830, 368, '滑动序列', { size: 9.5, weight: 700, fill: C.rnaD })
  b.stemLoop(930, 380, { h: 34, r: 12, stroke: C.rna })
  b.ctext(930, 356, '茎环', { size: 9.5, weight: 700, fill: C.rnaD })
  b.ribo(1060, 372, { scale: 0.9 })
  b.arrow(1024, 372, 1042, 372, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ctext(1060, 408, '核糖体回移一码', { size: 9.5, fill: C.proD })
  b.text(730, 440, '比率即剂量：', { size: 12, weight: 700, fill: C.ink })
  b.rect(830, 428, 320, 18, { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.ctext(990, 442, 'Gag（上游 ORF）', { size: 10, weight: 700, fill: C.proD })
  b.rect(1154, 428, 116, 18, { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.ctext(1212, 442, 'Gag-Pol', { size: 10, weight: 700, fill: C.dnaD })
  b.ctext(1060, 470, 'HIV：Gag ∶ Gag-Pol ≈ 20 ∶ 1（移码 5%–10%）', { size: 10.5, weight: 700, fill: C.sub })
  b.ctext(1060, 492, '冠状病毒 ORF1ab：移码效率约一至三成', { size: 10.5, fill: C.sub })
  b.wtext(730, 522, '', { size: 1, maxW: 10 })

  // ============ 三、2Apro 拆桥留墩 ============
  b.panel(30, 586, 660, 394, { title: '三、2Apro「拆桥留墩」：关闭宿主、自给翻译' })
  b.text(50, 636, '宿主帽依赖翻译的「闭环桥」：', { size: 11.5, weight: 700, fill: C.ink })
  b.circle(70, 690, 10, { fill: C.warn })
  b.ctext(70, 716, '帽', { size: 9.5, fill: C.mute })
  b.line(82, 690, 130, 690, { stroke: C.rna, sw: 2.6 })
  b.rect(134, 676, 60, 28, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 6 })
  b.ctext(164, 694, 'eIF4E', { size: 10, weight: 700, fill: C.proD })
  b.rect(214, 684, 120, 14, { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.ctext(274, 695, 'eIF4G（桥）', { size: 9.5, weight: 700, fill: C.accD })
  b.rect(348, 676, 60, 28, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 6 })
  b.ctext(378, 694, 'PABP', { size: 10, weight: 700, fill: C.proD })
  b.rect(412, 676, 40, 12, { fill: C.rnaL, stroke: C.rna, sw: 1.3 })
  b.ctext(432, 712, 'poly(A)', { size: 9, fill: C.rna })
  b.line(412, 690, 452, 690, { stroke: C.rna, sw: 2.6 })
  b.ctext(274, 744, '2Apro 一刀切断 eIF4G——宿主帽依赖翻译瘫痪', { size: 10.5, weight: 700, fill: C.bad })
  b.line(274, 672, 274, 700, { stroke: C.bad, sw: 2.4, dash: '5 4', marker: 'bad', markerStart: 'bad' })
  b.text(50, 790, '病毒自己的后路：', { size: 11.5, weight: 700, fill: C.ink })
  b.stemLoop(130, 838, { h: 30, r: 11, stroke: C.rna })
  b.line(150, 838, 240, 838, { stroke: C.rna, sw: 2.6 })
  b.ctext(200, 864, 'IRES', { size: 10.5, weight: 700, fill: C.rna })
  b.ribo(300, 830, { scale: 0.85 })
  b.ctext(340, 864, '无需 eIF4G 桥即可募集核糖体', { size: 10, fill: C.sub })
  b.wtext(50, 900, '「拆桥留墩」：拆掉宿主的桥，留下自己过河的墩——翻译劫持的经典范式。', { size: 11, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 四、劫持的深层逻辑 ============
  b.panel(710, 586, 660, 394, { title: '四、劫持的深层逻辑：资源与免疫' })
  b.tag(830, 640, '资源独占', { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 10 })
  b.wtext(950, 628, '宿主 mRNA 被清场、核糖体全部改产病毒蛋白——工厂一夜换招牌。', { size: 10.5, fill: C.sub, maxW: 390, lh: 15 })
  b.tag(830, 694, '压制先天免疫', { fill: C.badL, stroke: C.bad, size: 12, weight: 700, tfill: C.bad, pad: 10 })
  b.wtext(950, 682, '阻断 ISG（干扰素刺激基因）蛋白产出：翻译关闭本身就是免疫逃逸。', { size: 10.5, fill: C.sub, maxW: 390, lh: 15 })
  b.text(730, 748, '攻防焦点：eIF2α 磷酸化', { size: 12.5, weight: 700, fill: C.ink })
  b.circle(800, 790, 24, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(800, 794, 'eIF2α', { size: 9, weight: 700, fill: '#065f46' })
  b.arrow(830, 790, 900, 790, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.ctext(865, 774, '磷酸化', { size: 9.5, fill: '#065f46' })
  b.ctext(865, 808, '→ 全局翻译刹车', { size: 9.5, fill: C.mute })
  b.rect(910, 768, 130, 44, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 8 })
  b.ctext(975, 786, '病毒去磷酸化', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(975, 804, '／劫持复位', { size: 10, fill: C.sub })
  b.arrow(910, 790, 858, 790, { stroke: C.bad, sw: 2, marker: 'bad', dash: '5 4' })
  b.wtext(730, 856, '宿主以 eIF2α 磷酸化急刹全局翻译；病毒则以去磷酸化或劫持反转——这一攻防贯穿急慢性感染全程。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 900, '翻译劫持从来不只是「抢资源」：同时掐断干扰素系统的产出线，一石二鸟。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '病毒翻译策略与宿主翻译劫持：五大破法与拆桥留墩',
  subtitle: '脊灰约 7.5 kb 单 ORF 产约 247 kDa 多聚蛋白；HIV 移码 5%–10% 使 Gag∶Gag-Pol≈20∶1；2Apro 切 eIF4G 关宿主翻译、IRES 自给；eIF2α 磷酸化为攻防焦点',
  draw,
})
