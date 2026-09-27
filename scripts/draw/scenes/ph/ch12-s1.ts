// ph ch12-s1 激素总论与下丘脑-垂体：化学三类、门脉与神经分泌、六激素对应与反馈
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、激素三大化学类与两种信号策略 ============
  b.panel(30, 132, 660, 400, { title: '一、激素三大化学类：两种信号策略' })
  const card = (x: number, fill: string, stroke: string, tfill: string, t1: string, t2: string, ex: string, t3: string) => {
    b.rect(x, 175, 190, 125, { fill, stroke, sw: 1.8, rx: 10 })
    b.ctext(x + 95, 199, t1, { size: 13.5, weight: 700, fill: tfill })
    b.ctext(x + 95, 220, t2, { size: 10.5, fill: C.sub })
    b.wtext(x + 24, 242, ex, { size: 10, fill: C.mute, maxW: 150, lh: 14 })
    b.ctext(x + 95, 288, t3, { size: 11, weight: 700, fill: tfill })
  }
  card(50, C.accL, C.acc, C.accD, '含氮类', '肽·蛋白·糖蛋白', '胰岛素·GH·PTH·LH/FSH/TSH', '→ 膜受体·速效')
  card(255, C.proL, C.pro, C.proD, '类固醇类', '胆固醇衍生物', '皮质醇·醛固酮·雌二醇·睾酮', '→ 胞内核受体')
  card(460, C.rnaL, C.rna, C.rnaD, '胺类', '酪氨酸衍生物', '儿茶酚胺→膜受体；甲状腺激素→核受体', '「两栖」')
  b.text(50, 328, '① 膜受体通路（速效）', { size: 11.5, weight: 700, fill: C.accD })
  const chip = (x: number, y: number, w: number, s: string, stroke: string) => {
    b.rect(x, y, w, 34, { fill: C.bg, stroke, sw: 1.6, rx: 6 })
    b.ctext(x + w / 2, y + 21, s, { size: 10.5, weight: 600, fill: C.ink })
  }
  chip(50, 338, 110, '亲水配体', C.acc)
  b.arrow(162, 355, 180, 355, { stroke: C.acc, sw: 2, marker: 'acc' })
  chip(184, 338, 150, '膜受体 G 蛋白/RTK', C.acc)
  b.arrow(336, 355, 354, 355, { stroke: C.acc, sw: 2, marker: 'acc' })
  chip(358, 338, 160, '级联放大数量级', C.acc)
  b.arrow(520, 355, 538, 355, { stroke: C.acc, sw: 2, marker: 'acc' })
  chip(542, 338, 118, '秒-分钟·速撤', C.acc)
  b.text(50, 398, '② 胞内受体通路（基因效应）', { size: 11.5, weight: 700, fill: C.proD })
  chip(50, 408, 110, '脂溶配体', C.pro)
  b.arrow(162, 425, 180, 425, { stroke: C.pro, sw: 2, marker: 'pro' })
  chip(184, 408, 150, '直接穿过质膜', C.pro)
  b.arrow(336, 425, 354, 425, { stroke: C.pro, sw: 2, marker: 'pro' })
  chip(358, 408, 160, '核受体·转录因子', C.pro)
  b.arrow(520, 425, 538, 425, { stroke: C.pro, sw: 2, marker: 'pro' })
  chip(542, 408, 118, '小时-天·绵长', C.pro)
  b.wtext(50, 470, '分秒应答（血糖·血压·应激即刻）交给膜受体快线；改写细胞表型的长期工程（发育·分化·代谢基线）交给核受体慢线——级联放大使 10^{-10}–10^{-8} mol/L 的激素即可发号施令。', { size: 11, fill: C.sub, maxW: 620, lh: 16.5 })

  // ============ 二、下丘脑-垂体解剖：门脉与神经分泌 ============
  b.panel(710, 132, 660, 400, { title: '二、下丘脑-垂体：门脉与神经分泌两套方案' })
  b.rect(890, 172, 280, 58, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 10 })
  b.ctext(1030, 195, '下丘脑', { size: 14, weight: 700, fill: C.ink })
  b.ctext(1030, 216, '正中隆起·视上核·室旁核', { size: 10.5, fill: C.mute })
  // 左路：垂体门脉
  b.arrow(960, 232, 960, 260, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.text(970, 252, '释放/抑制激素', { size: 10.5, fill: C.enzD })
  b.ellipse(960, 276, 62, 14, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.ctext(960, 280, '初级毛细血管网', { size: 9, fill: C.badD })
  b.line(960, 290, 960, 322, { stroke: C.bad, sw: 5 })
  b.text(972, 310, '长门静脉', { size: 10.5, weight: 700, fill: C.badD })
  b.rect(860, 324, 200, 60, { fill: C.accL, stroke: C.acc, sw: 2, rx: 10 })
  b.ctext(960, 346, '腺垂体（前叶）', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(960, 367, 'TSH·ACTH·LH·FSH·GH·PRL', { size: 10, fill: C.sub })
  b.arrow(960, 386, 960, 412, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.rect(850, 414, 220, 54, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 10 })
  b.ctext(960, 434, '靶腺与靶组织', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(960, 454, '甲状腺·肾上腺皮质·性腺·肝', { size: 10, fill: C.mute })
  // 右路：神经分泌
  b.ctext(1185, 240, '视上核', { size: 10, weight: 700, fill: C.rnaD })
  b.ctext(1245, 240, '室旁核', { size: 10, weight: 700, fill: C.rnaD })
  b.circle(1185, 258, 9, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.circle(1245, 258, 9, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  b.path('M1185,267 C1185,300 1205,320 1218,346', { stroke: C.rna, sw: 2.4, marker: 'rna', fill: 'none' })
  b.path('M1245,267 C1245,300 1252,320 1244,346', { stroke: C.rna, sw: 2.4, marker: 'rna', fill: 'none' })
  b.text(1262, 300, '轴浆运输', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(1140, 348, 200, 58, { fill: C.rnaL, stroke: C.rna, sw: 2, rx: 10 })
  b.ctext(1240, 369, '神经垂体（后叶）', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(1240, 389, '末梢贮存 ADH·催产素', { size: 10, fill: C.sub })
  b.arrow(1240, 408, 1240, 434, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(1240, 452, 'Ca^{2+} 依赖胞吐入血', { size: 10.5, fill: C.rnaD })
  b.tag(1240, 486, '后叶不合成激素·仅为释放码头', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700, pad: 10 })
  b.wtext(730, 512, '门脉＝血管专线：释放激素以远高于体循环的浓度直送腺垂体；神经分泌＝轴突延伸：激素沿途运输、末梢释放入血。', { size: 10.5, fill: C.sub, maxW: 620, lh: 14 })

  // ============ 三、下丘脑因子与腺垂体六激素 ============
  b.panel(30, 548, 660, 437, { title: '三、下丘脑因子与腺垂体六激素对应' })
  b.table(50, 598, 620, {
    headers: ['下丘脑因子', '腺垂体激素', '靶器官与反馈信号'],
    colW: [175, 145, 300],
    rowH: 46,
    fontSize: 11.5,
    rows: [
      ['TRH（促）', 'TSH', '甲状腺·T_{3}/T_{4} 反馈'],
      ['GnRH（脉冲促）', 'LH·FSH', '性腺·性激素与抑制素反馈'],
      ['CRH（促）', 'ACTH', '肾上腺皮质·皮质醇反馈'],
      ['GHRH 促 / SST 抑', 'GH', '肝与全身·IGF-1/GH 反馈'],
      ['多巴胺（抑制主导）', 'PRL', '乳腺·无经典靶腺激素'],
    ],
  })
  b.wtext(50, 900, 'GH 夜间慢波睡眠脉冲分泌、经肝 IGF-1 介导骺板软骨增殖，自身兼促脂解与升血糖；PRL 受多巴胺张力性抑制——切断垂体柄，唯 PRL 升高。', { size: 11, fill: C.sub, maxW: 620, lh: 16.5 })
  b.tag(210, 955, 'D_{2} 拮抗剂→高泌乳素血症（闭经-溢乳）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 10 })
  b.tag(510, 955, 'TSH·LH·FSH 共享 α 亚基', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 10 })

  // ============ 四、层级负反馈：长环·短环·超短环 ============
  b.panel(710, 548, 660, 437, { title: '四、层级负反馈：长环·短环·超短环' })
  const tier = (y: number, t1: string, t2: string, fill: string, stroke: string, tfill: string) => {
    b.rect(1050, y, 220, 50, { fill, stroke, sw: 2, rx: 10 })
    b.ctext(1160, y + 21, t1, { size: 12.5, weight: 700, fill: tfill })
    b.ctext(1160, y + 39, t2, { size: 9.5, fill: C.mute })
  }
  tier(600, '下丘脑', 'TRH·CRH·GnRH·GHRH/SST·DA', C.panelB, C.sub, C.ink)
  b.arrow(1160, 652, 1160, 686, { stroke: C.ink, sw: 2.2 })
  b.text(1170, 672, '释放激素', { size: 10.5, fill: C.sub })
  tier(688, '腺垂体', 'TSH·ACTH·LH/FSH·GH·PRL', C.accL, C.acc, C.accD)
  b.arrow(1160, 740, 1160, 774, { stroke: C.ink, sw: 2.2 })
  b.text(1170, 760, '促靶腺激素', { size: 10.5, fill: C.sub })
  tier(776, '靶腺', '甲状腺·肾上腺·性腺', C.panelB, C.sub, C.ink)
  b.arrow(1160, 828, 1160, 862, { stroke: C.ink, sw: 2.2 })
  b.text(1170, 848, '靶腺激素', { size: 10.5, fill: C.sub })
  tier(864, '靶细胞效应', 'T_{3}/T_{4}·皮质醇·性激素', C.okL, C.ok, C.okD)
  // 反馈弧
  b.path('M1050,612 C1015,612 1015,638 1050,638', { stroke: C.mute, sw: 1.8, fill: 'none' })
  b.etext(1008, 628, '超短环', { size: 9.5, fill: C.mute })
  b.path('M1050,713 C980,713 980,645 1048,645', { stroke: C.warn, sw: 2, dash: '6 4', marker: 'warn', fill: 'none' })
  b.etext(968, 684, '短环', { size: 10.5, weight: 700, fill: C.warnD })
  b.path('M1050,845 C880,845 880,627 1048,627', { stroke: C.bad, sw: 2.2, dash: '7 5', marker: 'bad', fill: 'none' })
  b.etext(868, 800, '长环', { size: 11, weight: 700, fill: C.badD })
  // 左侧注记
  b.wtext(730, 615, '反馈读的是游离激素浓度——结合蛋白缓冲使激素不随分泌瞬时而抖动', { size: 10.5, fill: C.sub, maxW: 170, lh: 16 })
  b.tag(860, 700, '脉冲频率编码信息', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 10.5, weight: 700, pad: 10 })
  b.wtext(730, 745, '快脉冲促 LH·慢脉冲促 FSH；GnRH 连续给药反致垂体脱敏（降调治疗）', { size: 10.5, fill: C.sub, maxW: 170, lh: 16 })
  b.tag(860, 830, '昼夜节律：皮质醇晨峰夜谷', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700, pad: 10 })
  b.wtext(730, 955, '负反馈层层设卡：长环（靶腺→下丘脑/垂体）、短环（垂体→下丘脑）、超短环（自抑制）——配脉冲与节律防减敏。', { size: 11, fill: C.sub, maxW: 620, lh: 16.5 })
}

export default scene({
  title: '激素总论与下丘脑-垂体系统：化学三类·两套解剖方案',
  subtitle: '含氮激素走膜受体秒-分钟速效线、类固醇走胞内核受体基因效应线（胺类「两栖」）；垂体门脉把释放激素高浓度直送腺垂体，神经垂体为下丘脑轴突延伸——五路因子对应腺垂体六激素',
  draw,
})
