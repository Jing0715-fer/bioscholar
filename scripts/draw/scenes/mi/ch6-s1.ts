// mi ch6-s1 化能异养产能：发酵、有氧呼吸与无氧呼吸（39-f 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三种通用产能机制 ============
  b.panel(30, 132, 1340, 230, { title: '一、产能机制只有三种通用方式' })
  const mech = (x: number, t: string, s: string, c: string, cd: string) => {
    b.rect(x, 178, 410, 130, { fill: C.bg, stroke: c, sw: 1.6, rx: 9 })
    b.text(x + 20, 206, t, { size: 14.5, weight: 700, fill: cd })
    b.wtext(x + 20, 232, s, { size: 11.5, fill: C.sub, maxW: 372, lh: 18 })
  }
  mech(50, '① 底物水平磷酸化', '高能磷酸基团直接从中间物转移到 ADP——EMP 中 1,3-二磷酸甘油酸与磷酸烯醇式丙酮酸、TCA 中的琥珀酰辅酶 A。', C.acc, C.accD)
  mech(470, '② 氧化磷酸化', '电子经呼吸链传递把质子泵出膜外，形成跨膜质子梯度，由 ATP 合酶合成 ATP（化学渗透学说，Mitchell 1961）。', C.dna, C.dnaD)
  mech(890, '③ 光合磷酸化', '光能驱动电子传递，同样建立质子梯度产 ATP——与产能代谢的总纲（见自养代谢节）。', C.ok, C.ok)

  // ============ 二、三种分解代谢方式对照 ============
  b.panel(30, 382, 1340, 320, { title: '二、发酵 · 无氧呼吸 · 有氧呼吸：外源电子受体决定产能天花板' })
  b.table(50, 420, 1300, {
    headers: ['比较项目', '发酵', '无氧呼吸', '有氧呼吸'],
    colW: [180, 330, 370, 420],
    rowH: 44,
    fontSize: 12,
    rows: [
      ['外源电子受体', '无——NADH 经内部再循环再生 NAD⁺', '外源无机物（NO₃⁻、SO₄²⁻、CO₂）', '分子氧 O₂'],
      ['还原终产物', '乳酸、乙醇等有机产物', 'N₂、H₂S、CH₄ 等无机物', 'H₂O'],
      ['葡萄糖氧化程度', '部分氧化，能量滞留于产物', '不彻底', '彻底氧化为 CO₂ + H₂O'],
      ['ATP 得率（每分子葡萄糖）', '净得仅 1–3 个', '介于发酵与有氧呼吸之间', '经典口径约 38；修正口径约 32（真核 30–32）'],
      ['呼吸链', '无', '有（位于细胞膜）', '真细菌呼吸链位于细胞膜；大肠杆菌为分支链'],
    ],
  })
  b.ctext(700, 694, '同一分子葡萄糖：受体电位越正，电子下落的「落差」越大，可泵出的质子越多——ATP 产率也越高', { size: 11, fill: C.mute })

  // ============ 三、无氧呼吸三大类型 + 有氧呼吸三阶段 ============
  b.panel(30, 722, 1340, 258, { title: '三、无氧呼吸的类型与有氧呼吸的三阶段' })
  b.table(50, 762, 620, {
    headers: ['类型', '外源电子受体', '还原终产物'],
    colW: [140, 170, 310],
    rowH: 38,
    fontSize: 12,
    rows: [
      ['硝酸盐呼吸', 'NO₃⁻', 'N₂（经 NO₂⁻、N₂O 多步还原）'],
      ['硫酸盐呼吸', 'SO₄²⁻', 'H₂S'],
      ['碳酸盐呼吸', 'CO₂', 'CH₄（产甲烷古菌）'],
    ],
  })
  b.wtext(50, 930, '反硝化作用即硝酸盐呼吸的别名——N₂ 回归大气造成土壤氮素流失。', { size: 11, fill: C.mute, maxW: 600, lh: 16 })

  // 右：有氧呼吸三阶段
  const stage = (x: number, t: string, lines: string[]) => {
    b.rect(x, 762, 200, 168, { fill: C.bg, stroke: C.acc, sw: 1.5, rx: 9 })
    b.ctext(x + 100, 788, t, { size: 12.5, weight: 700, fill: C.accD })
    lines.forEach((ln, i) => b.ctext(x + 100, 816 + i * 24, ln, { size: 10.5, fill: C.sub }))
  }
  stage(700, '糖酵解（EMP）', ['葡萄糖 → 2 丙酮酸', '净得 2 ATP（底物水平）', '＋ 2 NADH'])
  stage(925, 'TCA 循环', ['每乙酰入环释 2 CO₂', '产 3 NADH + 1 FADH₂', '＋ 1 GTP'])
  stage(1150, '呼吸链＋氧化磷酸化', ['电子传给 O₂ → H₂O', '泵质子建梯度', 'ATP 合酶产出大头'])
  b.arrow(902, 800, 923, 800, { stroke: C.sub, sw: 2, marker: 'mute' })
  b.arrow(1127, 800, 1148, 800, { stroke: C.sub, sw: 2, marker: 'mute' })
}

export default scene({
  title: '化能异养产能：发酵、有氧呼吸与无氧呼吸的电子受体对照',
  subtitle: '发酵无外源电子受体、每分子葡萄糖仅净得 1–3 ATP；有氧呼吸彻底氧化、ATP 得率经典约 38 修正约 32；无氧呼吸以 NO₃⁻/SO₄²⁻/CO₂ 为受体',
  draw,
})
