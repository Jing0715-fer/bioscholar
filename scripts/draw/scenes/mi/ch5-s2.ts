// mi ch5-s2 培养基的设计原则与类型（39-f 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、配制四原则 ============
  b.panel(30, 132, 1340, 150, { title: '一、配制培养基的四条原则' })
  const prin = (x: number, t: string, s: string) => {
    b.rect(x, 168, 310, 76, { fill: C.bg, stroke: C.acc, sw: 1.5, rx: 9 })
    b.text(x + 18, 194, t, { size: 13.5, weight: 700, fill: C.accD })
    b.wtext(x + 18, 216, s, { size: 11, fill: C.sub, maxW: 276, lh: 15 })
  }
  prin(50, '① 目的明确', '依培养对象与目标（长菌/产物）定方案')
  prin(384, '② 营养协调', '要素齐全、比例适宜（注意 C/N）')
  prin(718, '③ 理化条件适宜', '灭菌后校正 pH；兼顾氧化还原电位 Eh')
  prin(1052, '④ 经济节约', '大规模生产选廉价原料')

  // ============ 二、三个分类维度（分类树，三行布局） ============
  b.panel(30, 302, 1340, 330, { title: '二、培养基分类树：按物理状态、用途与化学成分' })

  // 根节点
  b.tag(110, 462, '培养基', { fill: C.panelB, stroke: C.sub, size: 15, weight: 700, tfill: C.ink, pad: 12 })
  // 三个一级分类标签 + 连线
  const lv1: Array<[number, string]> = [[379, '按物理状态'], [469, '按用途'], [559, '按化学成分']]
  lv1.forEach(([y, t]) => {
    b.line(155, 462, 200, y, { stroke: C.faint, sw: 1.4 })
    b.tag(250, y, t, { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 9 })
    b.line(300, y, 412, y, { stroke: C.faint, sw: 1.4 })
  })

  const leaf = (x: number, y: number, t: string, s: string, c: string, cd: string) => {
    b.rect(x, y - 31, 250, 62, { fill: C.bg, stroke: c, sw: 1.3, rx: 7 })
    b.text(x + 16, y - 8, t, { size: 11.5, weight: 700, fill: cd })
    b.text(x + 16, y + 11, s, { size: 10, fill: C.mute })
  }
  // 行 1：物理状态（琼脂用量）
  leaf(420, 379, '液体（0% 琼脂）', '深层发酵、菌体与代谢物生产', C.dna, C.dnaD)
  leaf(690, 379, '半固体（0.3%–0.5%）', '穿刺接种观察动力；短期保存', C.dna, C.dnaD)
  leaf(960, 379, '固体（1.5%–2%）', '菌落分离纯化、计数、鉴别培养', C.dna, C.dnaD)
  // 行 2：用途
  leaf(420, 469, '加富培养基', '加目的菌偏爱底物——富集目的菌', C.rna, C.rnaD)
  leaf(690, 469, '选择培养基', '加抑制剂——抑制非目的菌', C.rna, C.rnaD)
  leaf(960, 469, '鉴别培养基', '含底物与指示剂——菌落可辨', C.rna, C.rnaD)
  // 行 3：化学成分
  leaf(420, 559, '天然培养基', '成分不明确但营养丰富（牛肉膏）', C.pro, C.proD)
  leaf(690, 559, '合成培养基', '成分与含量完全明确（高氏一号）', C.pro, C.proD)

  // 琼脂注（行 3 右侧空位）
  b.rect(960, 528, 384, 62, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.4, rx: 9 })
  b.text(978, 551, '琼脂：熔点 ≈ 96 ℃ · 凝固点 ≈ 40 ℃', { size: 11.5, weight: 700, fill: C.ok })
  b.text(978, 572, '几乎不被微生物降解——只赋形不供能', { size: 10.5, fill: C.sub })

  // ============ 三、经典配方与选择/鉴别示例 ============
  b.panel(30, 652, 1340, 328, { title: '三、四大经典配方与选择 / 鉴别培养基实例' })
  b.table(50, 700, 620, {
    headers: ['经典培养基', '成分要点', '适用对象'],
    colW: [170, 250, 200],
    rowH: 44,
    fontSize: 12,
    rows: [
      ['牛肉膏蛋白胨', '天然培养基（动物性营养）', '细菌（多数异养菌）'],
      ['高氏一号', '合成培养基（可加淀粉）', '放线菌'],
      ['查氏 / PDA', '蔗糖-硝酸盐 / 土豆-葡萄糖', '真菌'],
      ['麦芽汁', '天然培养基（麦芽糖为主）', '酵母菌'],
    ],
  })
  b.ctext(360, 940, '——「细菌用肉汤、放线菌用高氏、真菌用查氏、酵母用麦芽汁」', { size: 11, fill: C.mute })

  // 右：三个实例卡
  const ex = (y: number, name: string, s: string, kind: string) => {
    b.rect(690, y, 650, 82, { fill: C.bg, stroke: C.line, sw: 1.4, rx: 9 })
    b.tag(760, y + 26, name, { fill: C.accL, stroke: C.acc, size: 12, weight: 700, tfill: C.accD, pad: 9 })
    b.text(900, y + 26, kind, { size: 10.5, weight: 700, fill: C.rnaD })
    b.wtext(710, y + 56, s, { size: 11, fill: C.sub, maxW: 610, lh: 15 })
  }
  ex(700, 'EMB 伊红美蓝', '抑制革兰氏阳性菌；大肠杆菌发酵乳糖产酸——形成紫黑色带金属光泽的菌落。', '鉴别')
  ex(790, '马丁培养基', '加入孟加拉红与链霉素等——抑制细菌、分离真菌。', '选择')
  ex(880, 'SS 琼脂', '抑制大肠杆菌与革兰氏阳性菌——分离肠道致病菌（沙门氏、志贺氏菌）。', '选择')

  // EMB 平板小图
  b.circle(1280, 738, 26, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.8 })
  b.circle(1272, 732, 6, { fill: C.ink })
  b.circle(1290, 744, 5, { fill: C.ink })
  b.ctext(1280, 776, '紫黑色菌落', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '培养基的设计原则与类型：琼脂物理状态、选择与鉴别体系',
  subtitle: '四原则：目的明确、营养协调、理化适宜、经济节约；琼脂熔点约 96 ℃、凝固点约 40 ℃——固体加 1.5%–2%；EMB 鉴别乳糖发酵（大肠杆菌紫黑色金属光泽菌落）',
  draw,
})
