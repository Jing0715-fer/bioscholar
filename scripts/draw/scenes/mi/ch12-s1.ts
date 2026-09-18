// mi ch12-s1 工业发酵与代谢工程（39-f 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、发酵罐结构 ============
  b.panel(30, 132, 660, 430, { title: '一、深层通风发酵罐：四大构造与在线控制' })

  // 罐体
  b.rect(240, 230, 200, 300, { fill: C.panel, stroke: C.sub, sw: 2.5, rx: 26 })
  // 电机与轴
  b.rect(316, 196, 48, 26, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 4 })
  b.ctext(340, 213, '电机', { size: 9, fill: C.mute })
  b.line(340, 230, 340, 500, { stroke: C.sub, sw: 3 })
  // 搅拌桨
  b.rect(268, 320, 144, 12, { fill: C.acc, rx: 3 })
  b.rect(268, 400, 144, 12, { fill: C.acc, rx: 3 })
  b.ctext(340, 306, '搅拌桨', { size: 9.5, weight: 700, fill: C.accD })
  // 挡板
  b.rect(250, 250, 9, 260, { fill: C.dna, fillOp: 0.5, rx: 3 })
  b.rect(421, 250, 9, 260, { fill: C.dna, fillOp: 0.5, rx: 3 })
  // 空气分布器与气泡
  b.ellipse(340, 512, 46, 10, { fill: 'none', stroke: C.ok, sw: 2 })
  const bub: Array<[number, number, number]> = [[330, 490, 4], [352, 478, 5], [318, 462, 3.5], [340, 450, 4], [360, 436, 3], [326, 424, 4], [346, 408, 3], [332, 386, 3.5], [356, 370, 3]]
  bub.forEach(([x, y, r]) => b.circle(x, y, r, { fill: C.ok, fillOp: 0.5, stroke: C.ok, sw: 0.8 }))
  b.arrow(340, 556, 340, 524, { stroke: C.ok, sw: 2.6, marker: 'ok' })
  b.ctext(340, 570, '无菌空气', { size: 9.5, weight: 700, fill: C.ok })
  // 换热夹套
  b.rect(228, 222, 224, 316, { fill: 'none', stroke: C.warn, sw: 2, rx: 30, dash: '8 5' })
  b.tag(240, 200, '换热夹套（控温）', { fill: C.warnL, stroke: C.warn, size: 9.5, weight: 700, tfill: C.ink, pad: 6 })
  // 探针
  b.line(296, 230, 296, 286, { stroke: C.enz, sw: 2 })
  b.line(384, 230, 384, 286, { stroke: C.enz, sw: 2 })
  b.ctext(296, 300, 'pH', { size: 8.5, weight: 700, fill: C.enzD })
  b.ctext(384, 300, 'DO 溶氧', { size: 8.5, weight: 700, fill: C.enzD })
  // 补料
  b.arrow(500, 340, 446, 340, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.tag(548, 340, '补料流加', { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 6 })
  // 排气
  b.arrow(448, 240, 500, 214, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.ctext(508, 210, '排气', { size: 9.5, fill: C.mute })
  // 出料
  b.arrow(340, 530, 340, 556, { stroke: C.dna, sw: 2, marker: 'dna' })

  // 右侧构造清单
  b.text(600, 250, '四大构造', { size: 13.5, weight: 700, fill: C.ink })
  const parts: Array<[string, string]> = [
    ['搅拌桨', '混匀传质'],
    ['挡板', '打破漩涡'],
    ['空气分布器', '供氧'],
    ['换热器', '带走发酵热'],
  ]
  parts.forEach(([t, s], i) => {
    b.circle(612, 280 + i * 34 - 4, 3.5, { fill: C.acc })
    b.text(624, 280 + i * 34, t, { size: 11.5, weight: 700, fill: C.ink })
    b.text(624 + 84, 280 + i * 34, s, { size: 10.5, fill: C.sub })
  })
  b.rect(600, 430, 84, 110, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.4, rx: 8 })
  b.ctext(642, 470, '在线控制', { size: 12, weight: 700, fill: C.enzD })
  b.wtext(610, 488, 'pH · 溶氧 · 温度 · 补料', { size: 10, fill: C.sub, maxW: 64, lh: 14 })

  // ============ 二、全流程与三种操作方式 ============
  b.panel(710, 132, 660, 430, { title: '二、从菌种到产品：逐级扩种全流程；三种操作方式取舍' })

  const flow: Array<[number, number, string, string]> = [
    [770, 190, '菌种库（斜面）', '保藏原种'],
    [960, 190, '摇瓶', '振荡供氧'],
    [1150, 190, '一二级种子罐', '逐级放大'],
    [770, 280, '主发酵罐', '深层培养'],
    [990, 280, '下游提取精制', '产物到产品'],
  ]
  flow.forEach(([x, y, t, s]) => {
    b.tag(x + 60, y + 10, t, { fill: C.panelB, stroke: C.acc, size: 11, weight: 700, tfill: C.ink, pad: 8 })
    b.ctext(x + 60, y + 34, s, { size: 9.5, fill: C.mute })
  })
  b.arrow(846, 190, 892, 190, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.arrow(1036, 190, 1076, 190, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.arrow(1150, 214, 1150, 262, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.arrow(1076, 280, 914, 280, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.wtext(730, 326, '种子逐级扩大：接种量一般为主罐料液的 5%–20%——让主罐一经接种便获得数量充足、处于对数期、活力旺盛的菌群。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  b.table(730, 388, 620, {
    headers: ['比较项目', '分批', '补料分批', '连续'],
    colW: [110, 150, 190, 170],
    rowH: 28,
    fontSize: 10.5,
    rows: [
      ['周期', '短', '中', '长（持续流出）'],
      ['风险', '低', '中', '染菌与退化风险大'],
      ['效率', '低', '中', '最高'],
      ['代表', '小品种传统发酵', '青霉素（关键工艺）', '单细胞蛋白等'],
    ],
  })
  b.wtext(730, 548, '补料分批以限速流加控制底物浓度，突破碳代谢物阻遏——青霉素工业化的关键。', { size: 11, weight: 700, fill: C.ink })

  // ============ 三、典型产物的代谢逻辑 ============
  b.panel(30, 574, 1340, 406, { title: '三、四类典型产物的代谢逻辑；代谢工程与固定化细胞' })

  const prods: Array<[number, number, string, string, string, string]> = [
    [50, 620, '燃料乙醇', '同步糖化发酵（SSF）；成熟醪液乙醇浓度可达约 10%（v/v）', C.rna, C.rnaL],
    [495, 620, '柠檬酸', '限锰 + pH 控 2–3 抑制下游酶；对糖转化率达理论值的 80%–90%', C.ok, C.okL],
    [940, 620, '谷氨酸', '生物素亚适量→膜渗漏；糖酸转化率可达 50% 以上', C.dna, C.dnaL],
    [50, 730, '赖氨酸', '抗反馈育种解除终产物抑制', C.enz, C.enzL],
    [495, 730, '基因工程药物', '1982 年人胰岛素：A/B 链在大肠杆菌高表达；须面对包涵体的溶解与复性', C.pro, C.proL],
    [940, 730, '固定化细胞', '1973 年固定化大肠杆菌连续产 L-天冬氨酸，反应柱连续运转数月——「细胞即催化剂」', C.acc, C.accL],
  ]
  prods.forEach(([x, y, t, s, c, cl]) => {
    b.rect(x, y - 28, 420, 92, { fill: cl, fillOp: 0.45, stroke: c, sw: 1.5, rx: 9 })
    b.tag(x + 100, y - 4, t, { fill: cl, stroke: c, size: 12.5, weight: 700, tfill: C.ink, pad: 9 })
    b.wtext(x + 16, y + 24, s, { size: 10.5, fill: C.sub, maxW: 388, lh: 15 })
  })

  b.rect(50, 830, 1310, 60, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 9 })
  b.text(70, 854, '代谢工程', { size: 12.5, weight: 700, fill: C.ink })
  b.text(70 + 78, 854, '代谢通量分析与系统代谢工程把菌株改良从经验育种推向理性设计——测序与组学数据驱动的第二轮育种革命。', { size: 11, fill: C.sub })
  b.wtext(50, 924, '发酵工程 = 菌种（遗传）+ 培养基（营养）+ 工艺（传递与控制）三者耦合的系统工程。', { size: 11.5, weight: 700, fill: C.ink })
}

export default scene({
  title: '工业发酵与代谢工程：发酵罐构造、补料分批与产物代谢逻辑',
  subtitle: '发酵罐四大构造支撑 pH、溶氧、温度与补料在线控制；种子逐级扩大接种量 5%–20%；补料分批限速流加破碳代谢物阻遏（青霉素关键）；谷氨酸膜渗漏转化率 50%+',
  draw,
})
