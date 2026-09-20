// mb ch5-s5 rRNA、tRNA 加工与 mRNA 出核转运（39-b2 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、原核 rRNA 加工 ============
  b.panel(30, 132, 700, 300, { title: '一、原核 rRNA 加工：30S 前 rRNA 的切分' })
  b.genes(60, 200, 600, [
    { label: '16S', frac: 0.22, fill: C.rnaL, stroke: C.rna },
    { label: 'tRNA', frac: 0.12, fill: C.proL, stroke: C.pro },
    { label: '23S', frac: 0.3, fill: C.rnaL, stroke: C.rna },
    { label: '5S', frac: 0.12, fill: C.rnaL, stroke: C.rna },
  ])
  b.ctext(360, 260, 'rrn 操纵子（大肠杆菌 7 个）→ 30S 前 rRNA', { size: 11, fill: C.sub })
  b.text(60, 288, '加工酶分工：', { size: 12.5, weight: 700, fill: C.ink })
  const enzs: [string, string][] = [
    ['RNase III', '识别茎环结构，在 16S / 23S 两端初步切分'],
    ['RNase E / G', '16S 5′ 端成熟'],
    ['RNase P', '参与 tRNA 部分 5′ 端成熟'],
  ]
  enzs.forEach(([t, s], i) => {
    b.text(80, 314 + i * 26, '· ' + t, { size: 11.5, weight: 600, fill: C.sub })
    b.text(180, 314 + i * 26, s, { size: 11.5, fill: C.mute })
  })
  b.wtext(60, 396, '成熟中间体还需碱基修饰（甲基化为主）方成功能 rRNA。', { size: 11, fill: C.mute, maxW: 640, lh: 15 })

  // ============ 二、真核 45S 加工 ============
  b.panel(750, 132, 620, 300, { title: '二、真核 45S 前体：核仁中的 snoRNP 修饰' })
  b.genes(770, 200, 580, [
    { label: '5′ ETS', frac: 0.1, fill: C.panelB, stroke: C.faint },
    { label: '18S', frac: 0.16, fill: C.rnaL, stroke: C.rna },
    { label: 'ITS1', frac: 0.08, fill: C.panelB, stroke: C.faint },
    { label: '5.8S', frac: 0.09, fill: C.rnaL, stroke: C.rna },
    { label: 'ITS2', frac: 0.08, fill: C.panelB, stroke: C.faint },
    { label: '28S', frac: 0.22, fill: C.rnaL, stroke: C.rna },
    { label: '3′ ETS', frac: 0.1, fill: C.panelB, stroke: C.faint },
  ])
  b.ctext(1060, 262, 'pol I 转录 45S 前体（核仁）', { size: 11, fill: C.sub })
  const snos: [string, string][] = [
    ['C/D box snoRNP（U3 等）', '指导特定位点 2′-O-甲基化（snoRNA 与靶位互补，D 盒附近提供甲基供体结合位点）'],
    ['H/ACA snoRNP', '指导假尿苷化（Ψ）'],
    ['Rnt1 / 外切酶体', '分段切割，ITS 逐步降解（中间经 32S 等阶段）'],
  ]
  snos.forEach(([t, s], i) => {
    b.text(770, 296 + i * 44, '· ' + t, { size: 11.5, weight: 600, fill: C.sub })
    b.wtext(770, 312 + i * 44, s, { size: 10.5, fill: C.mute, maxW: 580, lh: 14 })
  })
  b.wtext(770, 424, '5S rRNA 由 pol III 在核仁外转录并单独成熟；rRNA 加工与核糖体组装在核仁偶联进行。', { size: 11, fill: C.mute, maxW: 580, lh: 15 })

  // ============ 三、tRNA 加工五步 ============
  b.panel(30, 452, 660, 280, { title: '三、tRNA 前体的五步成熟' })
  const tsteps: [string, string][] = [
    ['① 5′ 端：RNase P（核酶）', '切除前导序列（必需的第一加工事件）'],
    ['② 3′ 端：RNase Z', '切除 3′ 尾部序列'],
    ['③ CCA 添加酶补尾', '无 CCA 基因者以 CTP/ATP 为底物补上 3′-CCA（不依赖模板）'],
    ['④ 碱基修饰', '约 10% 碱基被修饰：D、ψ、T 与摆动位肌苷 I（A 脱氨）'],
    ['⑤ 正确折叠为 L 形', '三叶草二级结构折叠为稳定的三级结构（倒 L 形）'],
  ]
  tsteps.forEach(([t, s], i) => {
    b.text(60, 500 + i * 44, t, { size: 12, weight: 700, fill: C.ink })
    b.wtext(60, 516 + i * 44, s, { size: 10.5, fill: C.sub, maxW: 600, lh: 14 })
  })
  b.text(60, 722, '注：约 1/5 真核 tRNA 基因还含内含子（反密码子环），另需剪接内切酶去除、连接酶封口。', { size: 10, fill: C.mute })

  // ============ 四、tRNA 结构 ============
  b.panel(710, 452, 660, 280, { title: '四、tRNA：三叶草二级结构与 L 形三级结构' })
  // 三叶草
  const arm = (x: number, y: number, w: number, h: number, label: string, vertical = false) => {
    b.rect(x, y, w, h, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 4 })
    if (vertical) {
      const parts = label.split('|')
      parts.forEach((p, i) => b.ctext(x + w / 2, y + h / 2 + (i - (parts.length - 1) / 2) * 13 + 4, p, { size: 9, weight: 700, fill: C.rnaD }))
    } else {
      b.ctext(x + w / 2, y + h / 2 + 5, label, { size: 9, weight: 700, fill: C.rnaD })
    }
  }
  b.text(730, 500, '三叶草形（二级结构，约 76～90 nt）', { size: 12, weight: 700, fill: C.ink })
  arm(760, 516, 44, 64, '氨基酸|接受臂', true)
  b.text(782, 596, '3′-CCA', { size: 9, fill: C.rnaD })
  arm(822, 548, 36, 32, 'D 臂')
  arm(870, 548, 52, 32, 'AC 臂')
  arm(934, 548, 40, 32, 'TψC 臂')
  ;[880, 896, 912].forEach(x => b.circle(x, 590, 5, { fill: C.badL, stroke: C.bad, sw: 1.4 }))
  b.ctext(896, 610, '反密码子', { size: 9, weight: 700, fill: C.bad })
  b.ctext(954, 610, '可变环', { size: 9, fill: C.mute })
  // L 形
  b.text(1000, 500, '倒 L 形（三级结构）', { size: 12, weight: 700, fill: C.ink })
  b.polyline([[1030, 540], [1030, 600], [1150, 600]], { stroke: C.rna, sw: 5 })
  b.line(1030, 540, 1022, 532, { stroke: C.rna, sw: 5 })
  b.ctext(1016, 524, '3′-CCA', { size: 9.5, weight: 700, fill: C.rnaD })
  b.ctext(1160, 596, '反密码子', { size: 9.5, weight: 700, fill: C.bad })
  b.line(1030, 540, 1150, 600, { stroke: C.faint, sw: 1, dash: '5 5' })
  b.ctext(1096, 560, '约 7 nm', { size: 10, fill: C.mute })
  b.wtext(730, 640, '氨基酸接受端 3′-CCA 与反密码子恰位于 L 的两端——距离约 7 nm，分别对接合成酶与核糖体。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
  b.wtext(730, 684, '修饰是密码子准确识别与框架维持的关键（见第 6 章摆动假说）。', { size: 11, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 五、mRNA 出核转运 ============
  b.panel(30, 752, 1340, 218, { title: '五、mRNP 出核转运：加工完成度是「通行证」' })
  // 核|质 分区
  b.zone(60, 792, 560, 120, { label: '细胞核', fill: C.dnaL, rx: 10 })
  b.zone(770, 792, 540, 120, { label: '细胞质', fill: C.accL, rx: 10 })
  // 核内：mRNA + TREX
  b.rect(100, 852, 200, 24, { fill: '#ffffff', stroke: C.rna, sw: 1.6, rx: 5 })
  b.ctext(200, 868, 'mRNA（已加帽 / 剪接 / 加尾）', { size: 9.5, fill: C.rnaD })
  b.rect(330, 844, 130, 40, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 6 })
  b.ctext(395, 860, 'TREX 复合体', { size: 10, weight: 700, fill: C.proD })
  b.ctext(395, 876, 'THO+UAP56+Aly', { size: 8.5, fill: C.mute })
  b.arrow(302, 864, 328, 864, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  // NPC
  b.rect(632, 820, 20, 64, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(642, 808, 'NPC（FG 重复通道）', { size: 9.5, weight: 700, fill: C.sub })
  // NXF1
  b.ellipse(700, 864, 34, 17, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(700, 869, 'NXF1', { size: 9.5, weight: 700, fill: C.enzD })
  b.arrow(460, 864, 666, 864, { stroke: C.enz, sw: 2, marker: 'enz' })
  // 胞质
  b.rect(810, 852, 150, 24, { fill: '#ffffff', stroke: C.rna, sw: 1.6, rx: 5 })
  b.ctext(885, 868, '翻译中的核糖体', { size: 9.5, fill: C.sub })
  b.ellipse(1000, 864, 30, 16, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(1000, 869, 'Dbp5', { size: 9.5, weight: 700, fill: C.accD })
  b.arrow(960, 864, 968, 864, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.wtext(1060, 850, 'Dbp5（NPC 胞质面 ATP 酶）在胞质侧 remodel mRNP 并单向化运输（防回流）；未完成剪接 / 加工的 RNA 被滞留或降解于核内（NMD 检查）。', { size: 10, fill: C.sub, maxW: 240, lh: 15 })
  b.ctext(642, 906, '加工-转运-翻译构成连续的 RNA 生命周期', { size: 10.5, fill: C.mute })
}

export default scene({
  title: 'rRNA、tRNA 加工与 mRNA 出核转运',
  subtitle: '原核 30S 前 rRNA 经 RNase III/E/G 切分；真核 45S 前体在核仁由 C/D box（2′-O-甲基化）与 H/ACA（假尿苷化）snoRNP 指导修饰——tRNA 五步成熟（RNase P→RNase Z→CCA→修饰→折叠 L 形）；mRNP 经 TREX/NXF1 过核孔输出',
  draw,
})
