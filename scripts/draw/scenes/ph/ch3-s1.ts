// ph ch3-s1 GPCR 信号：七次跨膜受体与三大 G 蛋白分支
import { scene, C, B, textW } from '../../lib'

const draw = (b: B) => {
  // ============ 一、七次跨膜受体与异三聚体 G 蛋白开关 ============
  b.panel(30, 132, 660, 470, { title: '一、七次跨膜受体与异三聚体 G 蛋白开关' })
  b.bilayer(50, 300, 350, { h: 18 })
  b.text(56, 292, '胞外', { size: 9.5, fill: C.mute })
  b.text(56, 340, '胞内', { size: 9.5, fill: C.mute })
  // 七次跨膜螺旋
  for (let i = 0; i < 7; i++) {
    b.rect(204 + i * 11.5, 282, 9, 55, { fill: i % 2 === 0 ? C.proL : '#ffffff', stroke: C.pro, sw: 1.3, rx: 3 })
  }
  // 配体（菱形）
  b.polygon([[243, 252], [254, 262], [243, 272], [232, 262]], { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(243, 244, '配体', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(243, 354, 'GPCR（7 次跨膜）', { size: 11, weight: 700, fill: C.proD })
  b.arrow(240, 340, 208, 372, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  // 异三聚体 G 蛋白
  b.circle(190, 400, 24, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(190, 396, 'α', { size: 12, weight: 700, fill: C.accD })
  b.ctext(190, 412, 'GDP', { size: 9, weight: 700, fill: C.accD })
  b.circle(248, 394, 17, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(248, 398, 'β', { size: 11, weight: 700, fill: C.dnaD })
  b.circle(290, 394, 13, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(290, 398, 'γ', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(235, 444, '异三聚体 G 蛋白', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(56, 472, '受体被配体激活后充当鸟苷酸交换因子（GEF）：不催化任何化学反应，只催化 α 亚基以 GTP 换下 GDP——把「胞外有无配体」译成「开关开还是关」。人类基因组约 800 个 GPCR（近半司职嗅觉），临床约三成处方药以其为靶点', { maxW: 610, lh: 17, size: 10.5, fill: C.sub })
  b.wtext(56, 516, '静息时 α 结 GDP 并与 βγ 紧密结合；GTP 替换改变 α 构象 → 与 βγ 解离 → α-GTP 与游离 βγ 各赴膜上效应器；α 的内在 GTP 酶水解 GTP 后复位', { maxW: 610, lh: 17, size: 10.5, fill: C.sub })
  // 右：开关四步
  b.tag(550, 200, '① 配体结合 → 受体变构为 GEF', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 11, weight: 700, pad: 10 })
  b.arrow(550, 214, 550, 232, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(550, 246, '② GDP 换 GTP（α 亚基）', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 10 })
  b.arrow(550, 260, 550, 278, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(550, 292, '③ α·GTP 与 βγ 解离', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 11, weight: 700, pad: 10 })
  b.arrow(550, 306, 550, 324, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(550, 338, '④ GTP 水解 → 复位', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700, pad: 10 })
  b.wtext(430, 376, 'βγ 非旁观者：心脏 M_{2} 受体经 βγ 开 K^{+} 通道而减慢心率；RGS 蛋白把 α 的 GTP 酶加速数十倍', { maxW: 240, lh: 16, size: 10.5, fill: C.sub })

  // ============ 二、三大 G 蛋白家族与效应分支 ============
  b.panel(710, 132, 660, 470, { title: '二、三大 G 蛋白家族与效应分支' })
  const chainRow = (y: number, items: Array<[string, string, string, string]>) => {
    let x = 738
    for (let i = 0; i < items.length; i++) {
      const [s, fill, stroke, tfill] = items[i]
      const w = textW(s, 11, 700) + 24
      b.tag(x + w / 2, y, s, { fill, stroke, tfill, size: 11, weight: 700, pad: 12 })
      if (i < items.length - 1) b.arrow(x + w + 4, y, x + w + 26, y, { stroke: C.mute, sw: 1.4, marker: 'mute' })
      x += w + 30
    }
  }
  b.text(738, 180, 'Gs 家族', { size: 11, weight: 700, fill: C.okD })
  chainRow(200, [
    ['β_{1}/β_{2} 受体', C.okL, C.ok, C.okD], ['Gs', C.okL, C.ok, C.okD],
    ['AC ↑', C.okL, C.ok, C.okD], ['cAMP ↑', C.okL, C.ok, C.okD], ['PKA / Epac', C.okL, C.ok, C.okD],
  ])
  b.wtext(1176, 196, '糖原分解、脂肪动员、心肌正性变力', { maxW: 168, lh: 15, size: 10.5, fill: C.sub })
  b.text(738, 250, 'Gi 家族', { size: 11, weight: 700, fill: C.accD })
  chainRow(270, [
    ['M_{2}/α_{2} 受体', C.accL, C.acc, C.accD], ['Gi', C.accL, C.acc, C.accD],
    ['AC ↓', C.accL, C.acc, C.accD], ['cAMP ↓', C.accL, C.acc, C.accD],
  ])
  b.wtext(1072, 264, 'βγ 开 K^{+} 通道：心率减慢', { maxW: 168, lh: 15, size: 10.5, fill: C.sub })
  b.text(738, 320, 'Gq 家族', { size: 11, weight: 700, fill: C.enzD })
  chainRow(340, [
    ['M_{1}/M_{3}·AT_{1} 受体', C.enzL, C.enz, C.enzD], ['Gq', C.enzL, C.enz, C.enzD],
    ['PLC-β', C.enzL, C.enz, C.enzD], ['IP_{3} + DAG', C.enzL, C.enz, C.enzD],
  ])
  b.arrow(1035, 353, 940, 369, { stroke: C.enz, sw: 1.3, marker: 'enz' })
  b.arrow(1075, 353, 1090, 369, { stroke: C.enz, sw: 1.3, marker: 'enz' })
  b.tag(900, 384, 'IP_{3} → ER 钙释放', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 10.5, weight: 700, pad: 8 })
  b.tag(1060, 384, 'DAG → PKC', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(730, 424, '双信使系统：水溶性 IP_{3} 扩散至胞质开放内质网 IP_{3}R 释放 Ca^{2+}；DAG 留于膜内，与 Ca^{2+} 共同激活 PKC——血管紧张素 II 经 AT_{1}-Gq 使血管平滑肌收缩、血压升高', { maxW: 600, lh: 17, size: 10.5, fill: C.sub })
  b.wtext(730, 466, '第四家族 G12/13 经 RhoGEF-RhoA 调控细胞骨架重塑（血栓烷受体）。信号特异性不来自单个分子，而来自「受体-G 蛋白-效应器」组合与亚细胞定位', { maxW: 600, lh: 17, size: 10.5, fill: C.sub })
  b.wtext(730, 508, '级联放大：单个受体可连续激活多个 G 蛋白、每分子 AC 又催化大量 cAMP——从一分子肾上腺素到糖原磷酸化酶全速运转，总放大可达百万倍量级', { maxW: 600, lh: 17, size: 10.5, fill: C.sub })

  // ============ 三、信号终止的三重刹车 ============
  b.panel(30, 622, 660, 363, { title: '三、信号终止的三重刹车' })
  b.text(52, 684, '① G 蛋白复位', { size: 12, weight: 700, fill: C.ink })
  b.tag(130, 718, 'α·GTP', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 8 })
  b.arrow(158, 718, 204, 718, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.text(175, 704, 'RGS ↑', { size: 10, weight: 700, fill: C.enzD })
  b.tag(232, 718, 'α·GDP', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700, pad: 8 })
  b.wtext(330, 710, 'α 内在 GTP 酶数秒内水解 GTP；RGS 加速数十倍，把开关寿命压到亚秒级', { maxW: 320, lh: 16, size: 10.5, fill: C.sub })
  b.text(52, 756, '② 第二信使清除', { size: 12, weight: 700, fill: C.ink })
  b.tag(140, 790, 'cAMP / cGMP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700, pad: 8 })
  b.arrow(183, 790, 218, 790, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.text(192, 776, 'PDE 水解', { size: 10, weight: 700, fill: C.enzD })
  b.tag(280, 790, '5′-AMP / 5′-GMP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700, pad: 8 })
  b.wtext(400, 776, '磷酸二酯酶水解环核苷酸——咖啡因与茶碱的提神正源于抑制 PDE；Ca^{2+} 被泵回内质网或泵出细胞', { maxW: 250, lh: 16, size: 10.5, fill: C.sub })
  b.text(52, 828, '③ 受体脱敏与内吞', { size: 12, weight: 700, fill: C.ink })
  b.rect(62, 848, 44, 26, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 5 })
  b.ctext(84, 865, '受体', { size: 9.5, weight: 700, fill: C.proD })
  b.arrow(110, 861, 137, 861, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(180, 861, 'GRK 磷酸化', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 10.5, weight: 700, pad: 8 })
  b.arrow(224, 861, 246, 861, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(285, 861, 'β-arrestin', { fill: C.proL, stroke: C.pro, tfill: C.proD, size: 10.5, weight: 700, pad: 8 })
  b.arrow(326, 861, 346, 861, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(368, 861, '内吞', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 10.5, weight: 700, pad: 8 })
  b.wtext(400, 840, '持续暴露于激动剂 → GRK 磷酸化受体 C 端 → β-arrestin 遮挡 G 蛋白接触面（解偶联）→ 网格蛋白内吞 → 溶酶体降解（下调）或去磷酸化复敏', { maxW: 250, lh: 16, size: 10.5, fill: C.sub })
  b.wtext(52, 912, '脱敏分同源（GRK 只修饰结合了激动剂的受体）与异源（PKA/PKC 外溢到其他受体）；β-arrestin 兼任支架招募 Src/ERK，开辟不依赖 G 蛋白的第二条信号线——长期用 β_{2} 激动剂的哮喘患者药效减退正源于此', { maxW: 610, lh: 17, size: 10.5, fill: C.sub })

  // ============ 四、毒素的分子病理 ============
  b.panel(710, 622, 660, 363, { title: '四、毒素的分子病理：G 蛋白开关失灵' })
  b.tag(875, 672, '霍乱毒素（霍乱弧菌 AB_{5} 外毒素）', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11.5, weight: 700, pad: 10 })
  b.tag(875, 710, 'Gsα ADP-核糖基化', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11, weight: 700, pad: 8 })
  b.arrow(875, 722, 875, 742, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(875, 758, 'GTP 酶失活：锁死在「开」', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11, weight: 700, pad: 8 })
  b.wtext(1000, 700, 'AC 持续全速 → cAMP 飙升 → PKA 过度磷酸化 CFTR 氯通道 → Cl^{-} 与 Na^{+}、水涌入肠腔：每天数升米泔水样腹泻，脱水与循环衰竭才是真正杀招', { maxW: 340, lh: 16.5, size: 10.5, fill: C.sub })
  b.tag(875, 800, '百日咳毒素（鲍特菌）', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 11.5, weight: 700, pad: 10 })
  b.tag(875, 838, 'Giα ADP-核糖基化', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 11, weight: 700, pad: 8 })
  b.arrow(875, 850, 875, 870, { stroke: C.mute, sw: 1.4, marker: 'mute' })
  b.tag(875, 886, 'Gi 锁死「关」→ 解抑制', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 11, weight: 700, pad: 8 })
  b.wtext(1000, 830, 'Gi 无法与受体交换核苷酸 → 抑制性刹车失灵（M_{2} 减慢心率之本职被解除）→ 气道对组胺异常敏感、阵发性痉挛性咳嗽、外周血淋巴细胞增多', { maxW: 340, lh: 16.5, size: 10.5, fill: C.sub })
  b.wtext(730, 935, '两种毒素从正反两面证明同一个原理：G 蛋白通路的关键不在「开」，而在「何时关」——开关失灵本身就是疾病', { maxW: 600, lh: 17, size: 11, weight: 600, fill: C.ink })
}

export default scene({
  title: 'GPCR 信号：七次跨膜受体与三大 G 蛋白分支',
  subtitle: '配体结合使七次跨膜受体变构为 GEF，启动 α 亚基 GDP-GTP 开关：Gs 升 cAMP、Gi 降 cAMP、Gq 经 PLC 生成 IP₃ 与 DAG；终止靠 GTP 水解、PDE 清除与 GRK-β-arrestin 脱敏三重刹车——霍乱与百日咳毒素分别把 Gsα、Giα 焊死在开/关位',
  draw,
})
