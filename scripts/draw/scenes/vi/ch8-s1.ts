// vi ch8-s1 致细胞病变效应（39-j 批4）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、CPE 指纹图鉴 ============
  b.panel(30, 132, 660, 430, { title: '一、CPE 指纹：各病毒的稳定形态学签名' })
  const cell = (cx: number, cy: number, mode: string) => {
    if (mode === 'normal') {
      b.cell(cx, cy, 24, 15, { stroke: C.ok })
      b.circle(cx, cy, 6, { fill: C.proL, stroke: C.pro, sw: 1.2 })
    } else if (mode === 'round') {
      b.circle(cx, cy, 14, { fill: C.badL, stroke: C.bad, sw: 1.8 })
      b.ctext(cx, cy + 3, '', { size: 1 })
    } else if (mode === 'cluster') {
      b.circle(cx - 10, cy - 8, 12, { fill: C.badL, stroke: C.bad, sw: 1.6 })
      b.circle(cx + 10, cy - 6, 12, { fill: C.badL, stroke: C.bad, sw: 1.6 })
      b.circle(cx, cy + 10, 12, { fill: C.badL, stroke: C.bad, sw: 1.6 })
    } else if (mode === 'syn') {
      b.cell(cx, cy, 52, 22, { stroke: C.bad })
      b.circle(cx - 26, cy - 4, 5, { fill: C.ink })
      b.circle(cx - 8, cy - 6, 5, { fill: C.ink })
      b.circle(cx + 12, cy - 5, 5, { fill: C.ink })
      b.circle(cx + 28, cy - 4, 5, { fill: C.ink })
    } else if (mode === 'vac') {
      b.cell(cx, cy, 30, 18, { stroke: C.warn })
      b.circle(cx - 12, cy, 7, { fill: '#ffffff', stroke: C.warn, sw: 1.5 })
      b.circle(cx + 4, cy - 4, 6, { fill: '#ffffff', stroke: C.warn, sw: 1.5 })
      b.circle(cx + 14, cy + 4, 5, { fill: '#ffffff', stroke: C.warn, sw: 1.5 })
    } else {
      b.line(cx - 12, cy - 10, cx + 12, cy + 10, { stroke: C.bad, sw: 2 })
      b.line(cx - 12, cy + 10, cx + 12, cy - 10, { stroke: C.bad, sw: 2 })
      b.line(cx + 18, cy - 14, cx + 30, cy - 2, { stroke: C.bad, sw: 2 })
      b.line(cx + 18, cy - 2, cx + 30, cy - 14, { stroke: C.bad, sw: 2 })
    }
  }
  const items: [string, string, string][] = [
    ['正常单层', 'normal', '对照'],
    ['变圆', 'round', '快速致病变'],
    ['成簇聚集', 'cluster', '吸附成团'],
    ['合胞体', 'syn', '融合病变'],
    ['空泡化', 'vac', '内质网肿胀'],
    ['脱落溶解', 'gone', '裂解释放'],
  ]
  items.forEach(([nm, mode, sub], i) => {
    const cx = 140 + (i % 3) * 200, cy = 230 + Math.floor(i / 3) * 130
    b.rect(cx - 90, cy - 48, 180, 118, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
    cell(cx, cy, mode)
    b.ctext(cx, cy + 48, nm, { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(cx, cy + 64, sub, { size: 9.5, fill: C.mute })
  })
  b.wtext(50, 496, 'CPE 是病毒在培养细胞中的形态学改变——每种病毒有稳定「指纹」，镜下一望可辨。', { size: 11, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 二、包涵体：显微镜下的病毒工厂 ============
  b.panel(710, 132, 660, 430, { title: '二、包涵体：从诊断坐标到病毒工厂' })
  b.cell(900, 300, 96, 62, { stroke: C.sub })
  b.circle(880, 290, 24, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.virion(880, 288, 8, { shape: 'bullet', stroke: C.bad })
  b.ctext(940, 322, '内基小体（胞质嗜酸性团块）', { size: 10.5, weight: 700, fill: C.bad })
  b.ctext(900, 388, '感染细胞', { size: 10.5, fill: C.mute })
  b.wtext(730, 200, '内基小体（狂犬）：海马锥体细胞与小脑浦肯野细胞胞质内的嗜酸性团块，1903 年由 Negri 描述——一个世纪以来是狂犬死后病理诊断的基石。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 432, '瓜尼里小体（痘）、考德里 A 型包涵体（疱疹）同样具诊断价值。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 470, '现代观点：多数包涵体是相分离组织的病毒复制工厂——「病变」其实是「车间」。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })

  // ============ 三、死亡的程序：凋亡与坏死性凋亡 ============
  b.panel(30, 586, 660, 394, { title: '三、死亡的程序：宿主断腕与病毒反制' })
  b.rect(60, 646, 170, 46, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(145, 666, '凋亡（caspase）', { size: 11.5, weight: 700, fill: '#065f46' })
  b.ctext(145, 684, '宿主的断腕防御', { size: 9.5, fill: C.sub })
  b.arrow(234, 668, 296, 668, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.rect(300, 646, 170, 46, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(385, 666, '病毒抗凋亡蛋白', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(385, 684, '把 caspase 拦下', { size: 9.5, fill: C.sub })
  b.arrow(474, 668, 536, 668, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.rect(540, 646, 120, 46, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 8 })
  b.ctext(600, 666, '坏死性凋亡', { size: 11.5, weight: 700, fill: '#78350f' })
  b.ctext(600, 684, '备份程序', { size: 9.5, fill: C.sub })
  b.wtext(70, 726, 'RIPK1–RIPK3–MLKL 轴在凋亡被封锁时接棒：细胞膜炸裂、拉响免疫警报——宿主留了后手。', { size: 11, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(70, 770, '攻防不断升级：病毒再进化出 RIPK3 / MLKL 抑制物——细胞死亡程序是免疫与免疫逃逸的拉锯前线。', { size: 11, fill: C.mute, maxW: 600, lh: 16 })
  b.wtext(70, 830, '死亡方式的选择（沉默凋亡 vs 高调坏死）同时决定炎症强度与传播效率。', { size: 11, fill: C.sub, maxW: 600, lh: 16 })
  b.wtext(70, 872, '注：1949 年恩德斯等以非神经组织培养脊灰并观察病变，拓宽培养疆界（1954 诺奖）。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 四、蚀斑定量 ============
  b.panel(710, 586, 660, 394, { title: '四、蚀斑：定量、中和与选育的操作平台' })
  b.text(730, 646, '蚀斑形成单位（PFU）：一斑＝一个可感染单位', { size: 12, weight: 700, fill: C.ink })
  const pfu: [number, string][] = [[3, '原倍'], [14, '10⁻¹'], [42, '10⁻²'], [120, '10⁻³']]
  pfu.forEach(([n, lab], i) => {
    const cx = 780 + i * 145
    b.circle(cx, 730, 52, { fill: C.accL, stroke: C.acc, sw: 2 })
    for (let k = 0; k < Math.min(n, 30); k++) {
      const a = (k / Math.min(n, 30)) * Math.PI * 2
      b.circle(cx + 30 * Math.cos(a), 730 + 30 * Math.sin(a), 6, { fill: '#ffffff', stroke: C.bad, sw: 1.4 })
    }
    b.ctext(cx, 798, lab, { size: 11, weight: 700, fill: C.sub })
    b.ctext(cx, 816, `${n} 斑`, { size: 10, fill: C.mute })
  })
  b.wtext(730, 856, '稀释梯度成比例衰减——数斑即得滴度；蚀斑减少中和试验：加抗体后斑数递减，计量中和能力。', { size: 11, fill: C.sub, maxW: 620, lh: 16 })
  b.wtext(730, 900, '克隆纯化、减毒选育都落在蚀斑上。但 CPE 强弱与毒力只是相关而非因果——药物筛选与疫苗评价不能唯 CPE 论。', { size: 11, fill: C.mute, maxW: 620, lh: 16 })
}

export default scene({
  title: '致细胞病变效应：CPE 指纹、包涵体与蚀斑定量',
  subtitle: '变圆／成簇／合胞体／空泡／脱落为稳定指纹；内基小体（1903 Negri）为狂犬诊断基石；凋亡被封时 RIPK1-RIPK3-MLKL 坏死性凋亡接棒；PFU 定量',
  draw,
})
