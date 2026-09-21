// im ch11-s1 中枢耐受：阴性选择与 AIRE 的考卷（39-g 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、耐受的概念与源流 ============
  b.panel(30, 132, 1340, 282, { title: '一、免疫耐受：抗原特异性的无应答——克隆选择学说的预言' })

  b.rect(60, 186, 620, 206, { fill: C.dnaL, fillOp: 0.35, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(78, 210, '概念辨析：耐受 ≠ 瘫痪', { size: 12.5, weight: 700, fill: C.dnaD })
  b.rect(84, 232, 270, 68, { fill: C.bg, stroke: C.dna, sw: 1.5, rx: 8 })
  b.ctext(219, 254, '免疫耐受', { size: 12, weight: 700, fill: C.dnaD })
  b.ctext(219, 272, '抗原特异性无应答', { size: 10, fill: C.sub })
  b.ctext(219, 288, '只对特定抗原失明', { size: 9.5, fill: C.mute })
  b.rect(386, 232, 270, 68, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(521, 254, '免疫缺陷 / 免疫抑制', { size: 12, weight: 700, fill: C.bad })
  b.ctext(521, 272, '泛发性、非特异性瘫痪', { size: 10, fill: C.sub })
  b.ctext(521, 288, '对一切抗原全面减员', { size: 9.5, fill: C.mute })
  b.wtext(78, 328, '自身耐受由中枢与外周两道防线共同维护：中枢负责「出厂筛查」，外周负责「街头巡检」。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(78, 366, '本节聚焦中枢：T 在胸腺、B 在骨髓完成的发育期筛查。', { size: 10.5, weight: 600, fill: C.dnaD, maxW: 580, lh: 14 })

  b.rect(710, 186, 630, 206, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(728, 210, '学说源流：耐受亦可后天获得', { size: 12.5, weight: 700, fill: C.accD })
  b.timelineH(750, 320, 560, [
    { at: 0.08, label: '克隆选择学说', sub: 'Burnet：自身反应克隆在发育早期被删除', above: true, c: C.dna },
    { at: 0.58, label: '获得性耐受', sub: 'Medawar：新生期小鼠诱导同种移植耐受', above: false, c: C.acc },
    { at: 0.95, label: '1960 诺贝尔奖', sub: '两人分享', above: true, c: C.pro },
  ], { title: '' })
  b.wtext(728, 232, '「耐受亦可后天获得」——免疫系统能学会不攻击。', { size: 10.5, weight: 600, fill: C.accD, maxW: 590, lh: 15 })

  // ============ 二、T 与 B 的中枢耐受对照 ============
  b.panel(30, 428, 1340, 296, { title: '二、T 细胞（胸腺）与 B 细胞（骨髓）的中枢耐受对照' })
  b.table(60, 480, 1280, {
    headers: ['比较项目', 'T 细胞中枢耐受', 'B 细胞中枢耐受'],
    colW: [160, 560, 560],
    rowH: 38,
    fontSize: 11,
    rows: [
      ['执行场所', '胸腺皮髓交界与髓质', '骨髓'],
      ['自身抗原来源', 'mTEC（AIRE 驱动）与胸腺 DC', '骨髓微环境自身抗原'],
      ['处置手段', '高亲和力删除、中亲和力转轨 tTreg', '多价抗原删除、可溶性抗原失能、受体编辑'],
      ['独有特点', 'AIRE 异位表达扩展「考卷」', '受体编辑可返厂整改'],
      ['失败后果', 'APS-1/APECED 等器官特异性自身免疫', '自身抗体相关的体液自身免疫'],
    ],
  })

  // ============ 三、中枢耐受的局限 ============
  b.panel(30, 736, 1340, 238, { title: '三、中枢耐受的局限：筛查有天花板，外周耐受须接防' })

  const lims: Array<[number, number, string, string]> = [
    [60, 786, '空间限制', '抗原须能进入中枢器官'],
    [360, 786, '亲和力窗口', '过弱识别逃过阴性选择'],
    [660, 786, '时序限制', '发育晚期才表达的抗原错过筛查'],
    [960, 786, '年龄限制', '胸腺随年龄萎缩，考卷渐窄'],
  ]
  lims.forEach(([x, y, t, s]) => {
    b.rect(x, y, 290, 66, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.5, rx: 8 })
    b.text(x + 16, y + 24, t, { size: 11.5, weight: 700, fill: '#92400e' })
    b.wtext(x + 16, y + 44, s, { size: 9.5, fill: C.sub, maxW: 260, lh: 12 })
  })

  b.rect(60, 868, 1240, 86, { fill: C.okL, fillOp: 0.4, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(80, 892, '外周耐受接防', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(80, 916, '健康人外周可检出少量自身反应细胞而无病——正说明中枢筛查不可能穷尽，剩余的监管由外周耐受机制（失能、忽视、AICD、Treg 等）完成。', { size: 10.5, fill: C.sub, maxW: 1200, lh: 15 })
}

export default scene({
  title: '中枢耐受：免疫耐受的概念格局与胸腺、骨髓的出厂筛查',
  subtitle: '免疫耐受是抗原特异性无应答状态，区别于免疫缺陷与免疫抑制；Burnet 克隆选择学说与 Medawar 新生期小鼠获得性耐受同获 1960 年诺贝尔奖；T 细胞中枢耐受由胸腺阴性选择执行，AIRE 驱动 mTEC 异位表达组织特异性抗原扩展考卷，突变致 APS-1/APECED；B 细胞中枢耐受含删除、失能与受体编辑三手；中枢耐受受空间、亲和力窗口、时序与年龄四重限制，健康人外周可检出少量自身反应细胞，端赖外周耐受接防',
  draw,
})
