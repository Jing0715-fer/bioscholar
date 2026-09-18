// mb ch4-s3 真核 RNA 聚合酶 I、II、III（39-b2 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三类聚合酶对照表 ============
  b.panel(30, 132, 1340, 296, { title: '一、三类细胞核 RNA 聚合酶的分工（各约 14 亚基）' })
  b.table(60, 186, 1280, {
    headers: ['聚合酶', '定位', '转录产物', 'α-鹅膏蕈碱敏感性'],
    colW: [170, 150, 620, 340],
    rowH: 46,
    fontSize: 13,
    rows: [
      ['RNA pol I', '核仁', '45S pre-rRNA（成熟为 18S、5.8S、28S，不含 5S）', '不敏感'],
      ['RNA pol II', '核质', 'mRNA 前体（pre-mRNA）、多数 snRNA、miRNA', '极敏感（1 μg/ml 即抑制）'],
      ['RNA pol III', '核质', 'tRNA、5S rRNA、U6 snRNA 及其他短 RNA', '中度敏感（高浓度抑制）'],
    ],
  })
  b.text(60, 384, '三者共有 12～17 个同源亚基；催化化学与原核相同，分工与敏感性不同。', { size: 12, fill: C.mute })

  // ============ 二、敏感性分级 ============
  b.panel(30, 448, 660, 280, { title: '二、α-鹅膏蕈碱敏感性：经典鉴定依据' })
  const bars: [string, string, number, string][] = [
    ['pol I', '不敏感', 1.0, C.acc],
    ['pol III', '中度敏感（高浓度抑制）', 2.4, C.warn],
    ['pol II', '极敏感（1 μg/ml 即抑制）', 4.4, C.bad],
  ]
  bars.forEach(([t, s, v, col], i) => {
    const y = 508 + i * 66
    b.text(80, y, t, { size: 13.5, weight: 700, fill: C.ink })
    b.rect(170, y - 14, 360 * (v / 4.4), 26, { fill: col, opacity: 0.75, rx: 4 })
    b.text(170 + 360 * (v / 4.4) + 12, y + 4, s, { size: 11.5, fill: C.sub })
  })
  b.text(80, 690, '敏感性分级示意（非定量刻度）', { size: 10, fill: C.mute })
  b.tag(180, 664, '误食毒鹅膏致死：肝细胞 pol II 被抑制', { fill: C.badL, stroke: C.bad, size: 11.5, weight: 700, tfill: '#991b1b', pad: 8 })

  // ============ 三、pol II 的 CTD ============
  b.panel(710, 448, 660, 280, { title: '三、pol II 最大亚基（RPB1）的 CTD' })
  // 酶体
  b.ellipse(860, 560, 84, 46, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(860, 566, 'pol II 酶体', { size: 13, weight: 700, fill: C.accD })
  b.ctext(860, 524, 'RPB1 最大亚基', { size: 11, fill: C.mute })
  // CTD 重复尾巴
  for (let i = 0; i < 7; i++) {
    b.rect(952 + i * 52, 552, 44, 18, { fill: i % 2 === 0 ? C.proL : C.rnaL, stroke: i % 2 === 0 ? C.pro : C.rna, sw: 1.4, rx: 3 })
    b.ctext(974 + i * 52, 565, 'YSPTSPS', { size: 7.5, weight: 700, fill: i % 2 === 0 ? C.proD : C.rnaD })
  }
  b.text(952, 596, '七肽重复单元 YSPTSPS：酵母 26 次重复 · 人 52 次重复', { size: 12, weight: 700, fill: C.ink })
  b.ctext(952, 616, '（图中仅示意 7 个重复）', { size: 10, fill: C.mute })
  // 磷酸化开关
  b.tag(1030, 656, 'Ser2 / Ser5 磷酸化＝分子开关', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.wtext(730, 694, 'CTD 磷酸化状态将转录阶段与 RNA 加工（加帽、剪接、加尾）在时空中偶联——详见本章第 5 节。', { size: 11.5, fill: C.sub, maxW: 620, lh: 16 })

  // ============ 四、其他 RNA 聚合酶 ============
  b.panel(30, 748, 1340, 222, { title: '四、其他 RNA 聚合酶与演化视角' })
  const others: [string, string, string][] = [
    ['植物 pol IV / pol V', '参与 siRNA 引导的转录水平基因沉默', 'RdDM 途径'],
    ['古菌 RNAP', '与真核 pol II（含 Rpo 亚基）结构高度相似', '支持真核转录机器起源于古菌'],
    ['线粒体 / 叶绿体', '噬菌体型 RNA 聚合酶（如哺乳动物 POLRMT）', '细胞器自主转录'],
    ['pol I 调控', '活性最高 · mTOR 通路调控 rRNA 合成；pol III 受 mTOR 与 Maf1 抑制', '「生长调控的输出阀门」'],
  ]
  others.forEach(([t, s, d], i) => {
    const x = 60 + (i % 2) * 650
    const y = 796 + Math.floor(i / 2) * 82
    b.rect(x, y, 620, 70, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
    b.text(x + 16, y + 24, t, { size: 13.5, weight: 700, fill: C.ink })
    b.wtext(x + 16, y + 44, s, { size: 11.5, fill: C.sub, maxW: 440, lh: 15 })
    b.wtext(x + 470, y + 32, d, { size: 10.5, fill: C.mute, maxW: 138, lh: 14 })
  })
}

export default scene({
  title: '真核 RNA 聚合酶 I、II、III',
  subtitle: '三类细胞核聚合酶（各约 14 亚基）按产物分工：pol I 核仁转录 45S pre-rRNA、pol II 转录 pre-mRNA 且具 YSPTSPS 重复 CTD、pol III 转录短 RNA——对 α-鹅膏蕈碱敏感性依次为不敏感 / 极敏感 / 中度敏感',
  draw,
})
