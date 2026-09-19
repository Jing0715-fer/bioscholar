// mb ch2-s5 复制的忠实性与真核 DNA 复制（39-b2 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三层校验 ============
  b.panel(30, 132, 700, 300, { title: '一、复制忠实性的三层校验（大肠杆菌）' })
  const layers: [string, string][] = [
    ['① 聚合酶碱基选择', '沃森-克里克几何构型选择正确 dNTP · 错误率约 10⁻⁵～10⁻⁶'],
    ['② 3′→5′ 校对（ε 亚基）', '错配使 3′ 端构型改变，被外切活性切除重合成 · 再降 10²～10³ 倍'],
    ['③ 错配修复（MMR）', 'MutS / MutL / MutH 修复错配 · 再降 10²～10³ 倍'],
  ]
  layers.forEach(([t, s], i) => {
    const y = 176 + i * 76
    b.rect(60, y, 600, 52, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
    b.text(80, y + 22, t, { size: 13.5, weight: 700, fill: C.ink })
    b.text(80, y + 42, s, { size: 11.5, fill: C.sub })
    if (i < 2) b.arrow(360, y + 54, 360, y + 74, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  b.tag(360, 400, '总错误率约 10⁻⁹～10⁻¹⁰ / 碱基对 / 代', { fill: C.okL, stroke: C.ok, size: 14, weight: 700, tfill: '#065f46', pad: 12 })

  // ============ 二、MMR 甲基化导向 ============
  b.panel(740, 132, 630, 300, { title: '二、错配修复：GATC 甲基化区分新旧链' })
  b.text(760, 186, '亲代链（GATC 已甲基化）', { size: 11.5, fill: C.dnaD })
  b.line(760, 206, 1330, 206, { stroke: C.dna, sw: 2.4 })
  ;[830, 990, 1150].forEach(x => b.circle(x, 206, 6, { fill: C.ok }))
  b.line(760, 256, 1330, 256, { stroke: C.acc, sw: 2.4 })
  ;[830, 990, 1150].forEach(x => b.circle(x, 256, 6, { fill: '#ffffff', stroke: C.acc, sw: 1.8 }))
  b.text(760, 280, '新合成链（GATC 未甲基化）', { size: 11.5, fill: C.accD })
  b.ellipse(826, 231, 28, 15, { fill: C.rnaL, stroke: C.rna, sw: 1.8 })
  b.ctext(826, 235, 'MutL', { size: 10.5, weight: 700, fill: C.rnaD })
  b.ellipse(900, 231, 36, 18, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(900, 236, 'MutS', { size: 11.5, weight: 700, fill: C.enzD })
  b.line(890, 220, 884, 208, { stroke: C.bad, sw: 1.8 })
  b.line(894, 220, 900, 208, { stroke: C.bad, sw: 1.8 })
  b.circle(990, 256, 13, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(990, 260, 'MutH', { size: 9.5, weight: 700, fill: '#991b1b' })
  b.wtext(760, 316, '① MutS 识别错配、MutL 协同；② MutH 在未甲基化 GATC 位点切开新合成链；③ 外切酶切除错误片段后由 pol III 与连接酶修复。', { size: 12.5, fill: C.sub, maxW: 590, lh: 18 })
  b.wtext(760, 372, '人类同源蛋白 MSH2/6、MLH1/PMS2 突变导致遗传性非息肉性结直肠癌（Lynch 综合征）。', { size: 12, fill: C.bad, maxW: 590, lh: 17 })

  // ============ 三、复制许可 ============
  b.panel(30, 452, 700, 270, { title: '三、复制许可：一个细胞周期只复制一次' })
  const lic = [
    'G₁ 期：ORC（起点识别复合体）结合复制起点',
    'Cdc6 与 Cdt1 加载 MCM2-7 解旋酶 → pre-RC（获得许可）',
    'S 期：CDK 与 DDK 激酶激活 MCM，起始复制',
    'Geminin 与降解机制清除许可因子 → 待下一 G₁ 期重新许可',
  ]
  lic.forEach((s, i) => {
    const y = 484 + i * 54
    b.rect(80, y, 560, 42, { fill: i === 2 ? C.accL : C.panelB, stroke: i === 2 ? C.acc : C.line, sw: 1.5, rx: 8 })
    b.ctext(360, y + 26, s, { size: 12.5, fill: C.sub })
    if (i < 3) b.arrow(360, y + 44, 360, y + 52, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.text(80, 700, '「许可因子一次性消耗」的逻辑防止重复复制。', { size: 12, fill: C.mute })

  // ============ 四、末端复制问题与端粒酶 ============
  b.panel(740, 452, 630, 270, { title: '四、末端复制问题与端粒酶（Blackburn 与 Greider，1985）' })
  b.ctext(1010, 490, '端粒酶：TERT（逆转录酶）+ TER（RNA 模板）', { size: 12, weight: 700, fill: C.enzD })
  b.ellipse(1010, 516, 74, 28, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(1010, 521, '端粒酶', { size: 14, weight: 700, fill: C.enzD })
  b.path('M1010,544 C 1010,562 1140,560 1160,580', { stroke: C.rna, sw: 2, dash: '4 3', fill: 'none' })
  b.ctext(1060, 566, '内置 RNA 模板', { size: 10.5, fill: C.rnaD })
  b.line(760, 580, 1180, 580, { stroke: C.dna, sw: 2.4 })
  b.line(760, 620, 1120, 620, { stroke: C.dna, sw: 2.4 })
  b.rect(1120, 612, 70, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.4 })
  b.ctext(1155, 624, 'RNA 引物', { size: 9.5, fill: C.rnaD })
  b.line(1148, 634, 1162, 646, { stroke: C.bad, sw: 2.2 })
  b.line(1148, 646, 1162, 634, { stroke: C.bad, sw: 2.2 })
  b.ctext(1155, 656, '引物切除', { size: 10.5, fill: C.bad })
  b.arrow(1184, 580, 1330, 580, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  b.ctext(1257, 566, 'TTAGGG 延伸', { size: 10.5, fill: C.dnaD })
  b.braceH(1120, 668, 60, { label: '末端复制问题', size: 10.5 })
  b.wtext(760, 712, '核糖核蛋白，以 3′ 端突出单链为引物反复回折延伸端粒重复序列（人端粒为 5′-TTAGGG-3′ 串联）。', { size: 11.5, fill: C.sub, maxW: 590, lh: 16.5 })

  // ============ 五、端粒的生理意义 ============
  b.panel(30, 732, 1340, 238, { title: '五、端粒的生理意义：衰老、干细胞与肿瘤' })
  const tel = [
    ['体细胞', '端粒酶活性低，端粒逐代缩短——Hayflick 极限（复制衰老，p53/p16 介导），与衰老相关', 56, 400, C.mute, C.panelB],
    ['生殖细胞 / 干细胞', '端粒酶活跃，维持端粒长度，保障持续分裂能力', 480, 400, C.ok, C.okL],
    ['肿瘤细胞（约 85%～90%）', '重新激活端粒酶获得永生化；其余肿瘤利用 ALT（重组机制）延长端粒', 904, 436, C.bad, C.badL],
  ]
  tel.forEach(([t, s, x, w, st, fl]) => {
    b.rect(x as number, 786, w as number, 100, { fill: fl as string, stroke: st as string, sw: 1.8, rx: 10, fillOp: 0.55 })
    b.ctext((x as number) + (w as number) / 2, 812, t as string, { size: 14.5, weight: 700, fill: st as string })
    b.wtext((x as number) + (w as number) / 2, 838, s as string, { size: 11.5, fill: C.sub, maxW: (w as number) - 36, lh: 17, anchor: 'middle' })
  })
  b.text(56, 926, '端粒末端以 D 环 / t 环结构（shelterin 复合体）保护，避免被识别为 DNA 断裂；端粒酶活性可经 TRAP 实验检测。', { size: 12, fill: C.mute })
}

export default scene({
  title: '复制的忠实性与真核 DNA 复制',
  subtitle: '碱基选择 → 3′→5′ 校对 → 错配修复三层叠加，总错误率低至 10⁻⁹～10⁻¹⁰；真核以 ORC-Cdc6-Cdt1 加载 MCM 的许可机制保证一周期一复制，端粒酶化解末端复制问题',
  draw,
})
