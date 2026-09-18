// im ch10-s1 B 细胞的发育与中枢耐受：pre-BCR 检查点与三种裁决（39-g 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、骨髓发育阶梯 ============
  b.panel(30, 132, 1340, 300, { title: '一、骨髓阶梯：pro-B → pre-B → 未成熟 B → 成熟 B' })
  b.table(60, 184, 1280, {
    headers: ['发育阶段', '主要标志', 'Ig 基因状态', '关键事件'],
    colW: [140, 300, 320, 520],
    rowH: 40,
    fontSize: 11,
    rows: [
      ['pro-B', 'CD19⁺、CD43⁺、c-Kit⁺', '重链 D-J 与 V-DJ 重排', '依赖基质细胞 IL-7 增殖'],
      ['大 pre-B', '胞浆 μ 链、pre-BCR', '重链完成、轻链未启动', 'pre-BCR 检查点与克隆扩增'],
      ['未成熟 B', 'mIgM⁺', '轻链重排完成', '中枢耐受：删除、编辑、失能'],
      ['成熟 B', 'mIgM⁺ 与 mIgD⁺', '重排全部停止', '输出外周、定居滤泡与边缘区'],
    ],
  })
  b.wtext(60, 400, '重排时序：先重链（D-J 先于 V-DJ）、后轻链（κ 先于 λ）；轻链等位排斥保证每个 B 细胞单一特异性。', { size: 11, weight: 600, fill: C.ink, maxW: 1260, lh: 15 })

  // ============ 二、pre-BCR 检查点 ============
  b.panel(30, 446, 1340, 288, { title: '二、pre-BCR 检查点：无需抗原的自发信号，四项职能一次完成' })

  b.rect(60, 496, 560, 218, { fill: C.rnaL, fillOp: 0.35, stroke: C.rna, sw: 1.6, rx: 9 })
  b.text(80, 520, 'pre-BCR 的构造', { size: 12.5, weight: 700, fill: C.rnaD })
  b.bilayer(110, 676, 300)
  b.rect(150, 590, 120, 52, { fill: C.bg, stroke: C.rna, sw: 1.6, rx: 7 })
  b.ctext(210, 612, 'μ 重链', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(210, 630, '（已重排成功）', { size: 9, fill: C.mute })
  b.rect(290, 590, 130, 52, { fill: C.bg, stroke: C.enz, sw: 1.6, rx: 7 })
  b.ctext(355, 612, 'λ5 / VpreB', { size: 11.5, weight: 700, fill: C.enzD })
  b.ctext(355, 630, '（替代轻链）', { size: 9, fill: C.mute })
  b.line(210, 642, 210, 672, { stroke: C.rna, sw: 2 })
  b.line(355, 642, 355, 672, { stroke: C.enz, sw: 2 })
  b.wtext(80, 560, 'pre-BCR 组装成功即自发发出检查点信号——验证「重链可用」的出厂质检。', { size: 10.5, fill: C.sub, maxW: 520, lh: 15 })

  const jobs: Array<[number, number, string, string]> = [
    [650, 496, '① 验证重链可用性', '重链能否与替代轻链组装出受体'],
    [970, 496, '② 驱动克隆扩增', '大 pre-B 短暂增殖扩充库容'],
    [650, 570, '③ 锁定重链等位排斥', '一条重链成功即关停另一条'],
    [970, 570, '④ 转启轻链重排', '检查点通过后启动 κ / λ 重排'],
  ]
  jobs.forEach(([x, y, t, s]) => {
    b.rect(x, y, 300, 66, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.5, rx: 8 })
    b.text(x + 16, y + 24, t, { size: 11.5, weight: 700, fill: C.accD })
    b.wtext(x + 16, y + 44, s, { size: 9.5, fill: C.sub, maxW: 270, lh: 12 })
  })
  b.rect(650, 648, 620, 66, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(668, 672, 'BTK 突变 → X 连锁无丙种球蛋白血症（XLA）', { size: 12, weight: 700, fill: C.bad })
  b.wtext(668, 692, 'pre-BCR 信号传不下去：B 细胞发育受阻、成熟 B 几近缺如，抗体严重缺乏。', { size: 10.5, fill: C.sub, maxW: 585, lh: 14 })

  // ============ 三、中枢耐受裁决 ============
  b.panel(30, 748, 1340, 226, { title: '三、未成熟 B 的中枢耐受裁决：删除 · 失能 · 受体编辑' })

  const verdicts: Array<[number, string, string, string, string]> = [
    [798, '多价膜型自身抗原', '克隆删除', '强交联信号 → 凋亡出局', C.bad],
    [852, '低浓度可溶性自身抗原', '克隆失能', '弱信号长期拖垮应答能力', C.warn],
    [906, '受体编辑（B 系独有）', '返厂整改', '更换轻链重排出新特异性，减少删除的库容损耗', C.dna],
  ]
  verdicts.forEach(([y, t, verdict, s, col]) => {
    b.rect(60, y, 620, 46, { fill: col, fillOp: 0.08, stroke: col, sw: 1.5, rx: 8 })
    b.text(78, y + 20, t, { size: 11, weight: 700, fill: C.ink })
    b.text(78, y + 36, s, { size: 9, fill: C.sub })
    b.tag(560, y + 23, verdict, { fill: C.bg, stroke: col, size: 10.5, weight: 700, tfill: col, pad: 10 })
  })

  b.rect(710, 798, 630, 154, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(728, 822, '通过裁决：成熟 B 细胞', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(728, 846, '共表达 mIgM 与 mIgD（同一 V 区、不同恒定区），输出外周后定居于淋巴滤泡与边缘区，成为巡游的抗体预备队。', { size: 10.5, fill: C.sub, maxW: 590, lh: 16 })
  b.wtext(728, 906, '考过自身抗原这一关，才有资格拿到外周的「通行证」。', { size: 10.5, weight: 600, fill: '#065f46', maxW: 590, lh: 15 })
}

export default scene({
  title: 'B 细胞的发育与中枢耐受：pre-BCR 检查点与三种裁决',
  subtitle: 'B 细胞在骨髓经 pro-B、pre-B、未成熟 B 至成熟 B 推进，Ig 基因重排先重链（D-J 先于 V-DJ）后轻链（κ 先于 λ）；pre-BCR 由 μ 重链与 λ5/VpreB 替代轻链组装并自发发出检查点信号（验证重链、驱动克隆扩增、锁定等位排斥、转启轻链重排），BTK 突变致 XLA；未成熟 B 遇多价膜型自身抗原被克隆删除、遇低浓度可溶性抗原致克隆失能，受体编辑为 B 独有的「返厂整改」；成熟 B 共表达 mIgM 与 mIgD 输出外周定居滤泡与边缘区',
  draw,
})
