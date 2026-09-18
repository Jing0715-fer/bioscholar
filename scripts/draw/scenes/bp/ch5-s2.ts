// bp ch5-s2 吉布斯自由能、化学势与耦合反应（39-e 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、ΔG = ΔG°′ + RT lnQ ============
  b.panel(30, 132, 1340, 300, { title: '一、ΔG = ΔG°′ + RT·lnQ：反应的「方向感」来自反应商' })

  // -- 左：ΔG–Q 线图 --
  b.axis(110, 375, 560, 155, {
    xticks: [[0.02, 'Q 小'], [0.5, 'Q = Keq'], [0.98, 'Q 大']],
    yticks: [[0.08, '−'], [0.5, '0'], [0.92, '+']],
    ylabel: 'ΔG',
  })
  b.line(110, 297.5, 670, 297.5, { stroke: C.sub, sw: 1.4, dash: '6 5' })
  b.line(390, 220, 390, 375, { stroke: C.sub, sw: 1.4, dash: '6 5' })
  b.curve(110, 375, 560, 155, [[0, 0.2], [0.5, 0.5], [1, 0.8]], { stroke: C.acc, sw: 3 })
  b.circle(390, 297.5, 6, { fill: C.accD })
  b.ctext(390, 208, '平衡：ΔG = 0', { size: 11, weight: 700, fill: C.accD })
  b.ctext(240, 350, 'ΔG < 0：正向自发', { size: 11.5, weight: 700, fill: C.ok })
  b.etext(668, 245, 'ΔG > 0：逆向', { size: 11.5, weight: 700, fill: C.bad })
  b.wtext(110, 420, '抽走产物 / 补充底物 → Q 偏离平衡 → 反应持续正向（通量控制原理）', { size: 10.5, fill: C.mute, maxW: 560, lh: 14 })

  // -- 右：公式卡 --
  b.rect(740, 170, 600, 230, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.ctext(1040, 210, 'ΔG = ΔG°′ + RT·ln Q', { size: 22, weight: 700, fill: C.ink })
  b.ctext(1040, 244, 'Q = [C]^c·[D]^d / ([A]^a·[B]^b)', { size: 14, weight: 600, fill: C.sub })
  b.line(780, 264, 1300, 264, { stroke: C.line, sw: 1 })
  const items: Array<[string, string]> = [
    ['标准态：1 mol/L、pH 7、25 °C', 'R = 8.315 J·mol⁻¹·K⁻¹'],
    ['平衡时 Q = Keq、ΔG = 0', '→ ΔG°′ = −RT·ln Keq'],
    ['判据', 'Q < Keq 时 ΔG < 0，正向自发'],
  ]
  items.forEach(([t, d], i) => {
    const y = 296 + i * 34
    b.circle(798, y - 4, 4, { fill: C.acc })
    b.text(812, y, t, { size: 11.5, weight: 700, fill: C.ink })
    b.text(1120, y, d, { size: 11, fill: C.sub })
  })

  // ============ 二、磷酸化合物能量学 ============
  b.panel(30, 458, 1340, 262, { title: '二、磷酸化合物「能量阶梯」：ATP 居中，扮演能量通用货币' })

  // -- 左：水平条形图 --
  b.ctext(430, 492, '水解 ΔG°′（kJ/mol）', { size: 11.5, weight: 700, fill: C.sub })
  const ladder: Array<[string, number, boolean]> = [
    ['磷酸烯醇式丙酮酸（PEP）', 61.9, false],
    ['1,3-二磷酸甘油酸', 49.4, false],
    ['磷酸肌酸', 43.1, false],
    ['ATP → ADP + Pi', 30.5, true],
    ['葡萄糖-6-磷酸', 13.8, false],
  ]
  ladder.forEach(([name, v, hot], i) => {
    const y = 512 + i * 36
    b.etext(330, y + 16, name, { size: 11.5, weight: hot ? 700 : 600, fill: hot ? C.enzD : C.sub })
    b.rect(350, y, v * 5.6, 24, { fill: hot ? C.enz : C.accL, stroke: hot ? C.enzD : C.acc, sw: 1.6, rx: 4 })
    b.etext(350 + v * 5.6 + 10, y + 17, `−${v}`, { size: 11.5, weight: 700, fill: hot ? C.enzD : C.accD })
  })
  b.ctext(480, 706, '负值越大，磷酰基转移势越高（越「富」）', { size: 10.5, fill: C.mute })

  // -- 右：ATP 货币卡 --
  b.rect(820, 480, 520, 220, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(840, 508, 'ATP 的「中部」位置并非偶然', { size: 13, weight: 700, fill: C.enzD })
  const atp: Array<[string, string]> = [
    ['向低能化合物转移磷酰基', 'G-6-P（−13.8）等'],
    ['被高能化合物「充电」', 'PEP（−61.9）、磷酸肌酸（−43.1）'],
    ['细胞内 [ATP]/[ADP] ~10³', '实际水解 ΔG 达 −50 ~ −60 kJ/mol，比标准态更负'],
  ]
  atp.forEach(([t, d], i) => {
    const y = 540 + i * 52
    b.circle(848, y - 4, 4, { fill: C.enz })
    b.text(862, y, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(862, y + 20, d, { size: 10.5, fill: C.sub, maxW: 460, lh: 13 })
  })

  // ============ 三、耦合反应：谷氨酰胺的合成 ============
  b.panel(30, 754, 1340, 226, { title: '三、耦合反应范例：谷氨酰胺合成（共享中间体结算）' })

  // -- 左：加和账目 --
  b.rect(60, 792, 620, 52, { fill: C.badL, fillOp: 0.5, stroke: C.bad, sw: 1.4, rx: 8 })
  b.text(80, 812, '谷氨酸 + NH₄⁺ → 谷氨酰胺', { size: 12, weight: 700, fill: C.ink })
  b.etext(660, 812, 'ΔG°′ ≈ +14.2 kJ/mol（不可自发）', { size: 11.5, weight: 700, fill: C.bad, anchor: 'end' })
  b.text(80, 832, '酰胺键生物合成（吸能）', { size: 9.5, fill: C.mute })
  b.ctext(370, 870, '+', { size: 20, weight: 700, fill: C.sub })
  b.rect(60, 888, 620, 52, { fill: C.okL, fillOp: 0.5, stroke: C.ok, sw: 1.4, rx: 8 })
  b.text(80, 908, 'ATP → ADP + Pi', { size: 12, weight: 700, fill: C.ink })
  b.etext(660, 908, 'ΔG°′ = −30.5 kJ/mol', { size: 11.5, weight: 700, fill: C.ok, anchor: 'end' })
  b.text(80, 928, '放能反应「买单」', { size: 9.5, fill: C.mute })
  b.arrow(700, 866, 730, 866, { stroke: C.ink, sw: 2.6, marker: 'ink' })
  b.rect(744, 838, 200, 56, { fill: C.dnaL, fillOp: 0.6, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(844, 860, '总反应 ΔG°′ ≈ −16.3', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(844, 880, 'kJ/mol（净放能，可行）', { size: 10, fill: C.sub })

  // -- 右：机制卡 --
  b.rect(980, 792, 360, 168, { fill: C.panelB, stroke: C.line, sw: 1.2, rx: 8 })
  b.text(1000, 818, '机制：共享中间体', { size: 13, weight: 700, fill: C.ink })
  b.wtext(1000, 844, '① ATP 先磷酸化谷氨酸 γ-羧基，生成 γ-谷氨酰磷酸（高能混合酸酐）；② NH₃ 亲核进攻、释放 Pi。', { size: 10.5, fill: C.sub, maxW: 320, lh: 14 })
  b.wtext(1000, 902, '「花钱」与「购物」在分子内先后结算——生物合成与主动转运（离子泵）皆用此设计，ATP 是化学功的通用中介。', { size: 10.5, fill: C.mute, maxW: 320, lh: 14 })
}

export default scene({
  title: '吉布斯自由能与耦合反应：ΔG 加和与共享中间体',
  subtitle: 'ΔG = ΔG°′ + RT lnQ（平衡时 ΔG°′ = −RT lnKeq）；ATP 水解 ΔG°′ = −30.5 kJ/mol 居能量阶梯中部；谷氨酰胺合成 +14.2 与 ATP 水解 −30.5 耦合 → 净 −16.3 kJ/mol',
  draw,
})
