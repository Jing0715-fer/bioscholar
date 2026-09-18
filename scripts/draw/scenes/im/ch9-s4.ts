// im ch9-s4 T 细胞活化的双信号与免疫突触（39-g 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、免疫突触的三层结构 ============
  b.panel(30, 132, 1340, 282, { title: '一、免疫突触：T 细胞-APC 接触面的超分子重组（SMAC）' })

  b.circle(300, 300, 104, { fill: C.accL, fillOp: 0.5, stroke: C.acc, sw: 1.8 })
  b.circle(300, 300, 74, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.8 })
  b.circle(300, 300, 44, { fill: C.enzL, fillOp: 0.7, stroke: C.enz, sw: 1.8 })
  b.ctext(300, 296, 'cSMAC', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(300, 314, 'TCR-pMHC', { size: 8.5, fill: C.enzD })
  b.text(382, 232, 'pSMAC：LFA-1–ICAM-1 黏附环', { size: 11, weight: 700, fill: C.dnaD })
  b.line(376, 236, 322, 258, { stroke: C.dna, sw: 1.2, dash: '4 3' })
  b.text(382, 366, 'dSMAC：肌动蛋白外环', { size: 11, weight: 700, fill: C.accD })
  b.line(376, 370, 330, 380, { stroke: C.acc, sw: 1.2, dash: '4 3' })
  b.ctext(300, 428, '中央汇聚 · 外围黏附 · 动态重组', { size: 10, fill: C.mute })

  b.rect(560, 182, 780, 110, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(578, 206, '免疫突触的三重功能', { size: 12.5, weight: 700, fill: C.accD })
  const funcs = ['① 信号汇聚：放大微弱的 TCR 信号', '② 定向杀伤：CTL 把颗粒定向释入突触', '③ 受体降解：在 cSMAC 中终止应答']
  funcs.forEach((s, i) => b.text(578, 232 + i * 22, s, { size: 10.5, fill: C.sub }))

  b.rect(560, 306, 780, 90, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.6, rx: 9 })
  b.text(578, 330, '亲和力悖论：弱结合，强识别', { size: 12.5, weight: 700, fill: '#92400e' })
  b.wtext(578, 352, 'TCR 与 pMHC 的 Kd 约 1–100 μmol/L，比典型抗原-抗体亲和力低三至五个数量级——依靠动力校对、串联触发与受体动力重排实现敏感而特异的识别。', { size: 10.5, fill: C.sub, maxW: 745, lh: 15 })

  // ============ 二、双信号模型 ============
  b.panel(30, 430, 1340, 300, { title: '二、双信号模型：信号一给特异性，信号二给许可，信号三定方向' })

  b.cell(190, 600, 110, 82, { label: 'T 细胞', double: true })
  b.cell(590, 600, 120, 82, { label: 'APC', double: true })

  b.arrow(300, 548, 480, 548, { stroke: C.dna, sw: 2.4, marker: 'dna', markerStart: 'dna' })
  b.tag(390, 522, '信号一：TCR/CD3 识别 pMHC', { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 10 })
  b.ctext(390, 566, '特异性识别（MHC 限制）', { size: 9.5, fill: C.mute })

  b.arrow(300, 668, 480, 668, { stroke: C.pro, sw: 2.4, marker: 'pro', markerStart: 'pro' })
  b.tag(390, 642, '信号二：CD28 ↔ B7（CD80/86）', { fill: C.proL, stroke: C.pro, size: 10.5, weight: 700, tfill: C.proD, pad: 10 })
  b.ctext(390, 690, '共刺激许可（无则失能）', { size: 9.5, fill: C.mute })

  b.arrow(560, 728, 230, 728, { stroke: C.rna, sw: 2.2, marker: 'rna' })
  b.ctext(395, 714, '信号三：极化细胞因子（IL-12、IL-4 等）指定亚群方向', { size: 10.5, weight: 700, fill: C.rnaD })

  b.table(790, 486, 580, {
    headers: ['状态', '抗原与共刺激情境', '结局'],
    colW: [110, 230, 240],
    rowH: 46,
    fontSize: 10.5,
    rows: [
      ['有效活化', '抗原 + 充分共刺激', 'IL-2 高分泌、克隆扩增，效应与记忆生成'],
      ['克隆失能', '有抗原、缺第二信号', 'IL-2 转导受损且顽固，对再刺激无应答'],
      ['T 细胞耗竭', '抗原长期持续存在', 'PD-1 持续高表达，效应功能阶梯式丧失'],
    ],
  })
  b.wtext(790, 688, '缺 CD28-B7 第二信号的 T 细胞发生克隆失能——外周耐受的重要形式。', { size: 10.5, weight: 600, fill: C.ink, maxW: 560, lh: 15 })

  // ============ 三、共抑制、耗竭与检查点 ============
  b.panel(30, 744, 1340, 230, { title: '三、生理刹车、耗竭与检查点阻断：从刹车到抗癌兵器' })

  b.rect(60, 794, 620, 150, { fill: C.badL, fillOp: 0.3, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(78, 818, '生理刹车与 T 细胞耗竭', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(78, 842, 'CTLA-4 与 PD-1 构成生理刹车；慢性抗原刺激使 PD-1 持续高表达、效应功能阶梯式丧失——从「战斗」滑向「躺平」。', { size: 10.5, fill: C.sub, maxW: 580, lh: 16 })
  b.wtext(78, 894, '耗竭 T 细胞：TCR 信号仍在，增殖与杀伤却逐级退场。', { size: 10.5, fill: C.mute, maxW: 580, lh: 15 })

  b.rect(710, 794, 630, 150, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(728, 818, '检查点阻断抗体', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(728, 842, '抗 PD-1、抗 PD-L1、抗 CTLA-4 松开刹车，使耗竭 T 细胞部分「复苏」；在黑色素瘤、肺癌等多种恶性肿瘤治疗中取得突破。', { size: 10.5, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(728, 896, '——2018 年诺贝尔生理学或医学奖的主题。', { size: 11, weight: 700, fill: '#065f46', maxW: 590, lh: 15 })
}

export default scene({
  title: 'T 细胞活化的双信号与免疫突触：从亲和力悖论到检查点阻断',
  subtitle: 'TCR 与 pMHC 亲和力低（Kd 约 1–100 μmol/L，比抗原-抗体低三至五个数量级），靠动力校对与串联触发实现敏感特异识别；免疫突触以 cSMAC、pSMAC、dSMAC 三层超分子结构兼具信号汇聚、定向杀伤与受体降解终止三重功能；双信号模型中缺 CD28-B7 第二信号者克隆失能，信号三指定亚群方向；CTLA-4 与 PD-1 为生理刹车，慢性刺激致耗竭（PD-1 持续高表达、效应阶梯式丧失），检查点阻断抗体可部分逆转——2018 年诺贝尔奖主题',
  draw,
})
