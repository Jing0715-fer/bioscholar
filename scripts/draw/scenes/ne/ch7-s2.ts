// ne ch7-s2 感觉系统总论与躯体感觉 / 躯体感觉的传入通路（39-h 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、初级传入纤维分类与入髓分流 ============
  b.panel(30, 132, 660, 430, { title: '一、三类初级传入纤维：内外分流入脊髓' })
  b.table(60, 190, 600, {
    headers: ['纤维', '直径（μm）', '髓鞘', '传导速度', '功能'],
    colW: [70, 110, 90, 130, 200],
    rowH: 42,
    fontSize: 11.5,
    rows: [
      ['Aβ', '6–12', '有髓', '30–70 m/s', '精细触觉、振动觉、静态位置觉'],
      ['Aδ', '2–5', '薄髓', '12–30 m/s', '快痛、冷觉'],
      ['C', '0.5–2', '无髓', '0.5–2 m/s', '慢痛、温觉、痒'],
    ],
  })
  // 入髓分流示意
  b.text(60, 398, '脊髓横断面（后角朝上）', { size: 11.5, weight: 700, fill: C.ink })
  b.ellipse(200, 480, 100, 52, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(200, 490, '中央管', { size: 10, fill: C.mute })
  b.path('M118,462 C136,434 164,420 200,432 C236,420 264,434 282,462', { stroke: C.line, sw: 1.4, dash: '4 4' })
  b.ctext(200, 422, '后角', { size: 10.5, weight: 700, fill: C.sub })
  // 粗纤维内侧入后索
  b.arrow(92, 404, 120, 440, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.wtext(62, 378, '粗纤维 → 后角内侧 → 后索', { size: 10.5, weight: 700, fill: C.dnaD, maxW: 130, lh: 14 })
  // 细纤维外侧入 Lissauer
  b.arrow(308, 404, 280, 440, { stroke: C.bad, sw: 2.6, marker: 'bad' })
  b.wtext(296, 378, '细纤维 → 后角外侧 → Lissauer 束', { size: 10.5, weight: 700, fill: C.bad, maxW: 150, lh: 14 })
  b.wtext(360, 448, '「内外分流」是两条上行通路分野的起点；C 纤维数量最多，末梢多为多型伤害性感受器，伴 P 物质与降钙素基因相关肽。', { size: 10.5, fill: C.sub, maxW: 300, lh: 15 })
  b.text(62, 552, '速度与直径近似线性源于轴突电缆性质；Aα（70–120 m/s）属运动系、Aγ（15–30 m/s）支配梭内肌。', { size: 9.5, fill: C.mute })

  // ============ 二、两条上行通路：交叉平面分野 ============
  b.panel(710, 132, 660, 430, { title: '二、背柱-内侧丘系 vs 脊髓丘脑束：三级传导对照' })
  b.ctext(880, 192, '背柱-内侧丘系（Aβ）', { size: 13.5, weight: 700, fill: C.dnaD })
  b.ctext(1210, 192, '脊髓丘脑束（Aδ / C）', { size: 13.5, weight: 700, fill: C.bad })
  const colA: Array<[string, boolean]> = [
    ['经后角内侧入同侧后索', false],
    ['薄束（下半身）/ 楔束（上半身）', false],
    ['延髓薄束核 / 楔束核换元', false],
    ['二级纤维经中央管腹侧交叉', true],
    ['内侧丘系 → 丘脑 VPL → 中央后回', false],
  ]
  const colB: Array<[string, boolean]> = [
    ['经后角外侧入 Lissauer 束', false],
    ['入髓 1–2 节段内后角换元', false],
    ['（第 I、V 层及胶状质）', false],
    ['经前连合交叉至对侧', true],
    ['外侧索（痛温）/ 前索（粗触）→ VPL', false],
  ]
  colA.forEach(([label, cross], i) => {
    const y = 208 + i * 58
    b.rect(740, y, 280, 48, { fill: cross ? C.dnaL : C.panelB, fillOp: cross ? 0.7 : 1, stroke: cross ? C.dna : C.line, sw: cross ? 2 : 1.4, rx: 7 })
    b.ctext(880, y + 21, label, { size: 10.5, weight: cross ? 700 : 500, fill: C.ink })
    if (cross) b.ctext(880, y + 37, '← 交叉平面在延髓', { size: 9.5, weight: 700, fill: C.dnaD })
    if (i < colA.length - 1) b.arrow(880, y + 48, 880, y + 58, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  colB.forEach(([label, cross], i) => {
    const y = 208 + i * 58
    b.rect(1070, y, 280, 48, { fill: cross ? C.badL : C.panelB, fillOp: cross ? 0.6 : 1, stroke: cross ? C.bad : C.line, sw: cross ? 2 : 1.4, rx: 7 })
    b.ctext(1210, y + 21, label, { size: 10.5, weight: cross ? 700 : 500, fill: C.ink })
    if (cross) b.ctext(1210, y + 37, '← 交叉在脊髓内完成', { size: 9.5, weight: 700, fill: C.bad })
    if (i < colB.length - 1) b.arrow(1210, y + 48, 1210, y + 58, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  })
  b.wtext(740, 522, '对照记忆两条通路的交叉平面，是解析分离性感觉障碍的钥匙：后索损伤（脊髓痨）→ 同侧损伤平面以下分辨性触觉与本体觉丧失，闭目难立征阳性。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、分离性感觉障碍 ============
  b.panel(30, 578, 660, 396, { title: '三、分离性感觉障碍：交叉平面不同的临床后果' })
  b.rect(60, 648, 300, 210, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(76, 674, 'Brown-Séquard 综合征', { size: 13, weight: 700, fill: C.bad })
  b.text(76, 694, '（一侧脊髓半切）', { size: 10.5, fill: C.mute })
  b.wtext(76, 720, '· 对侧：痛觉、温觉障碍（脊髓丘脑束已在脊髓内交叉）', { size: 11, fill: C.sub, maxW: 268, lh: 17 })
  b.wtext(76, 772, '· 同侧：分辨性触觉与本体觉障碍（后索交叉在延髓，半切时尚未交叉）', { size: 11, fill: C.sub, maxW: 268, lh: 17 })
  b.wtext(76, 824, '· 同侧运动麻痹（皮质脊髓束）', { size: 11, fill: C.sub, maxW: 268, lh: 17 })
  b.rect(390, 648, 300, 210, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.6, rx: 9 })
  b.text(406, 674, '脊髓空洞症', { size: 13, weight: 700, fill: C.enzD })
  b.text(406, 694, '（中央管扩大）', { size: 10.5, fill: C.mute })
  b.wtext(406, 720, '中央管扩大先破坏刚经前连合交叉的痛温纤维：出现节段性的痛温觉分离性丧失（痛温觉丧失、触觉保留），「不痛不烫却摸得着」。', { size: 11, fill: C.sub, maxW: 268, lh: 17 })
  b.ctext(390, 892, '交叉平面差一个节段，临床表现截然不同', { size: 12, weight: 700, fill: C.mute })

  // ============ 四、丘脑与体感皮层 ============
  b.panel(710, 578, 660, 396, { title: '四、最后驿站与皮层分工：体感小人' })
  b.rect(740, 648, 300, 96, { fill: C.accL, fillOp: 0.45, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(756, 674, '丘脑腹后核：门控驿站', { size: 13, weight: 700, fill: C.accD })
  b.wtext(756, 698, 'VPL 接躯干四肢、VPM 接头面部（三叉系）；具门控功能，是感觉进入意识的最后一道闸门。', { size: 11, fill: C.sub, maxW: 268, lh: 16 })
  b.rect(1070, 648, 270, 96, { fill: C.dnaL, fillOp: 0.45, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(1086, 674, 'S1 四分区（中央后回）', { size: 13, weight: 700, fill: C.dnaD })
  b.wtext(1086, 698, '3a 本体觉 · 3b 触压觉 · 1 快适应 · 2 关节觉与纹理，经内囊后肢投射。', { size: 11, fill: C.sub, maxW: 238, lh: 16 })
  // 体感小人示意（分区高度∝分辨力）
  b.ctext(980, 782, '体感小人：各区面积与感觉分辨力成正比', { size: 12.5, weight: 700, fill: C.ink })
  const homunc: Array<[string, number]> = [['手/唇', 96], ['舌', 60], ['面', 40], ['躯干', 24], ['腿/足', 34]]
  let hx = 770
  homunc.forEach(([label, h]) => {
    b.rect(hx, 906 - h, 52, h, { fill: C.dnaL, fillOp: 0.7, stroke: C.dna, sw: 1.6, rx: 5 })
    b.ctext(hx + 26, 926, label, { size: 10.5, fill: C.sub })
    hx += 86
  })
  b.line(740, 906, 1330, 906, { stroke: C.sub, sw: 2 })
  b.wtext(740, 952, '指尖两点辨别最锐、背部最钝——代表区可随经验与训练重塑（弦乐手的左手代表区扩大）。', { size: 10.5, fill: C.mute, maxW: 590, lh: 15 })
}

export default scene({
  title: '躯体感觉的传入通路：两条三级通路与交叉平面的分野',
  subtitle: 'Aβ 走背柱-内侧丘系（延髓交叉）；Aδ/C 走脊髓丘脑束（脊髓内交叉）——分离性感觉障碍的钥匙',
  draw,
})
