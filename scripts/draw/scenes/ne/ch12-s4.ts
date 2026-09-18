// ne ch12-s4 神经损伤的修复与前沿
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、CNS vs PNS 再生对照（左侧主体） ============
  b.panel(30, 132, 680, 430, { title: '一、中枢 vs 周围神经的再生命运' })
  // CNS 侧（上）
  b.ctext(200, 195, '中枢神经（CNS）——再生失败', { size: 15, weight: 700, fill: C.bad })
  // 断裂的轴突
  b.line(80, 240, 170, 240, { stroke: C.dna, sw: 4 })
  b.line(230, 240, 340, 240, { stroke: C.dna, sw: 4, dash: '10 6', opacity: 0.5 })
  // 断端球
  b.circle(175, 240, 9, { fill: C.bad })
  b.ctext(190, 225, '生长锥坍缩', { size: 11.5, fill: C.bad })
  // 髓鞘抑制物标签
  b.tag(230, 285, 'Nogo-A · MAG · OMgp（经 NgR1→RhoA-ROCK）', { fill: '#fee2e2', stroke: C.bad, size: 11, weight: 600, tfill: C.bad, pad: 6 })
  b.tag(230, 318, 'CSPG 胶质瘢痕（化学屏障）', { fill: '#fef3c7', stroke: C.warn, size: 11, weight: 600, tfill: '#78350f', pad: 6 })
  b.tag(230, 348, '生长因子缺乏 + 内在生长程序下调', { fill: '#f1f5f9', stroke: C.faint, size: 11, weight: 600, tfill: C.sub, pad: 6 })
  // PNS 侧（下）
  b.ctext(200, 400, '周围神经（PNS）——可再生', { size: 15, weight: 700, fill: C.ok })
  b.line(80, 445, 170, 445, { stroke: C.dna, sw: 4 })
  // 再生芽
  b.path('M 175,445 Q 200,425 225,445', { stroke: C.ok, sw: 3.4, marker: 'ok' })
  b.path('M 175,445 Q 200,465 225,445', { stroke: C.ok, sw: 3.4, marker: 'ok' })
  b.line(240, 445, 330, 445, { stroke: C.dna, sw: 4 })
  b.ctext(255, 495, 'Büngner 带（施万细胞基底膜管引导）· 约 1–3 mm/日', { size: 12.5, weight: 600, fill: C.sub })
  // Wallerian 变性注释
  b.ctext(255, 525, '远侧段 Wallerian 变性：施万细胞清碎片→去分化→再髓鞘化', { size: 12, fill: C.mute })
  // 分隔线
  b.line(60, 370, 680, 370, { stroke: C.faint, sw: 1.2, dash: '6 5' })

  // ============ 二、NGF 与神经营养因子（右上） ============
  b.panel(740, 132, 630, 200, { title: '二、NGF：靶源性营养与竞争生存（1986 诺奖）' })
  // 靶器官分泌 NGF
  b.rect(790, 175, 90, 50, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(835, 203, '靶器官', { size: 13.5, weight: 700, fill: C.ink })
  b.arrow(890, 200, 960, 200, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.ctext(925, 188, 'NGF 逆行运输', { size: 11.5, fill: C.mute })
  // 两个神经元竞争
  b.circle(1050, 165, 20, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.circle(1050, 240, 20, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.arrow(1070, 165, 1140, 195, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.arrow(1070, 240, 1140, 210, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.tag(1230, 180, '存活（获得 NGF）', { fill: C.okL, stroke: C.ok, size: 11.5, weight: 700, tfill: C.ink, pad: 6 })
  b.tag(1230, 245, '凋亡（竞争失败）', { fill: '#fee2e2', stroke: C.bad, size: 11.5, weight: 700, tfill: C.bad, pad: 6 })
  b.wtext(760, 310, '1950 年代 Levi-Montalcini 与 Cohen：小鼠肉瘤移植鸡胚后感觉/交感神经节向肿瘤长出「神经晕」——肿瘤分泌的可扩散因子即 NGF。临床教训：给药方式与剂量窗决定疗效（NGF/GDNF 试验受挫之因）。', { size: 12, fill: C.sub, maxW: 590, lh: 18 })

  // ============ 三、前沿技术（右下） ============
  b.panel(740, 352, 630, 210, { title: '三、前沿：干细胞、类脑器官与光遗传' })
  const items: [string, string][] = [
    ['成年神经发生', 'SGZ 与 SVZ 保留神经发生；胎儿中脑移植经验推动 ESC/iPSC 多巴胺前体进入 PD 临床试验'],
    ['类脑器官', 'Zika 感染放射状胶质→小头畸形的机制在类脑器官中确立'],
    ['光遗传基因治疗', 'ChR2 使视网膜色素变性患者临床试验中恢复部分视物能力'],
  ]
  items.forEach(([t, d], i) => {
    const y = 415 + i * 48
    b.circle(790, y - 5, 5, { fill: C.dna })
    b.ctext(870, y, t, { size: 13.5, weight: 700, fill: C.ink })
    b.wtext(950, y - 5, d, { size: 11.5, fill: C.sub, maxW: 400, lh: 16 })
  })

  // ============ 底部总结条 ============
  b.panel(30, 580, 1340, 60, { fill: '#f1f5f9' })
  b.ctext(700, 618, '再生医学的路线图：解除抑制（anti-Nogo 抗体/ROCK 抑制剂）+ 桥接引导（神经导管）+ 营养支持（因子缓释）+ 细胞替代（干细胞）+ 光控功能重建（光遗传）', { size: 13.5, weight: 600, fill: C.sub })
}

export default scene({
  title: '神经损伤的修复与前沿',
  subtitle: '中枢再生三重障碍（Nogo-A/MAG/OMgp 经 NgR-RhoA；CSPG 瘢痕）vs 周围神经 Büngner 带 1–3 mm/日 · NGF 靶源性营养（1986 诺奖）· 干细胞/类脑器官/光遗传',
  draw,
})
