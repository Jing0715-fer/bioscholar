// cb ch1-s4 细胞培养、分离与组分分析技术（39-d 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、细胞培养 ============
  b.panel(30, 132, 660, 320, { title: '一、细胞培养：原代培养 → 细胞系 → 细胞株' })
  b.etext(664, 170, '37 ℃、5% CO₂、饱和湿度无菌培养（如 DMEM 培养基）', { size: 10.5, fill: C.mute })
  const flow = ['组织酶解制备', '原代培养', '传代＝细胞系', '克隆化＝细胞株']
  flow.forEach((s, i) => {
    const x = 56 + i * 150
    b.rect(x, 180, 126, 52, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
    b.ctext(x + 63, 211, s, { size: 12, weight: 700, fill: C.accD })
    if (i < 3) b.arrow(x + 128, 206, x + 148, 206, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  })
  b.wtext(56, 260, '1951 年自宫颈癌患者 Henrietta Lacks 肿瘤组织建立的 HeLa 是第一个人源连续细胞系，至今仍是使用最广的细胞模型。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.text(56, 300, '接触抑制对比', { size: 12.5, weight: 700, fill: C.ink })
  // 正常细胞：单层
  b.rect(56, 310, 280, 128, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(196, 334, '正常贴壁细胞', { size: 12, weight: 700, fill: C.ok })
  for (let i = 0; i < 5; i++) b.circle(95 + i * 40, 372, 15, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.line(70, 392, 322, 392, { stroke: C.faint, sw: 1.6 })
  b.ctext(196, 418, '相互接触即停止分裂（接触抑制）', { size: 10.5, fill: C.sub })
  // 肿瘤细胞：多层堆积
  b.rect(356, 310, 280, 128, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.ctext(496, 334, '肿瘤／转化细胞', { size: 12, weight: 700, fill: C.bad })
  for (let i = 0; i < 5; i++) b.circle(400 + i * 40, 362, 15, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  for (let i = 0; i < 4; i++) b.circle(420 + i * 40, 394, 15, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(496, 428, '失去接触抑制与贴壁依赖——多层堆积（恶性转化标志）', { size: 10.5, fill: C.sub })

  // ============ 二、流式细胞术与 FACS ============
  b.panel(710, 132, 660, 320, { title: '二、流式细胞术与 FACS：单细胞悬液逐个分析' })
  b.text(736, 196, '① 分析：细胞排队逐个通过激光检测点', { size: 12.5, weight: 700, fill: C.ink })
  for (let i = 0; i < 4; i++) {
    b.circle(770 + i * 38, 238, 8, { fill: i === 3 ? C.enzL : C.panel, stroke: i === 3 ? C.enz : C.sub, sw: 1.8 })
  }
  b.line(756, 210, 950, 230, { stroke: C.faint, sw: 1.5 })
  b.line(756, 266, 950, 246, { stroke: C.faint, sw: 1.5 })
  b.line(985, 186, 985, 290, { stroke: C.bad, sw: 3.5 })
  b.ctext(985, 178, '激光', { size: 11, weight: 600, fill: C.bad })
  b.arrow(995, 238, 1072, 238, { stroke: C.sub, sw: 2, marker: 'ink' })
  const det = ['FSC 前向散射→细胞大小', 'SSC 侧向散射→内部颗粒度', 'FL 多色荧光→表型分子']
  det.forEach((s, i) => {
    const y = 186 + i * 39
    b.rect(1080, y, 175, 25, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 5 })
    b.text(1088, y + 17, s, { size: 10.5, fill: C.sub })
    b.line(1074, 238, 1080, y + 12, { stroke: C.faint, sw: 1.3 })
  })
  b.text(736, 328, '② FACS 分选：液滴充电后经静电场偏转', { size: 12.5, weight: 700, fill: C.ink })
  b.line(760, 360, 960, 360, { stroke: C.sub, sw: 2 })
  for (let i = 0; i < 4; i++) b.circle(800 + i * 40, 360, 7, { fill: i === 1 ? C.enzL : C.panel, stroke: C.sub, sw: 1.6 })
  b.circle(978, 360, 7, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.circle(998, 356, 7, { fill: C.panel, stroke: C.sub, sw: 1.6 })
  b.ctext(988, 336, '充电液滴', { size: 10.5, fill: C.mute })
  b.rect(1040, 322, 8, 76, { fill: C.panelB, stroke: C.sub, sw: 1.4 })
  b.rect(1080, 322, 8, 76, { fill: C.panelB, stroke: C.sub, sw: 1.4 })
  b.ctext(1044, 312, '＋', { size: 12, weight: 700, fill: C.bad })
  b.ctext(1084, 312, '－', { size: 12, weight: 700, fill: C.acc })
  b.arrow(1092, 360, 1156, 328, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1092, 360, 1156, 360, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(1092, 360, 1156, 392, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  const tubes = [306, 346, 386]
  tubes.forEach((y, i) => {
    b.rect(1160, y, 42, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 6 })
    b.text(1210, y + 25, `分选亚群 ${i + 1}`, { size: 11, fill: C.sub })
  })
  b.wtext(736, 444, 'PI 染色测 DNA 含量（周期时相）；Annexin V／PI 双染测凋亡；多通道荧光分析表面分子表型。', { size: 11, fill: C.mute, maxW: 600, lh: 15 })

  // ============ 三、差速离心 ============
  b.panel(30, 470, 660, 510, { title: '三、细胞组分分离：差速离心（按沉降速度递增）' })
  const steps: [number, string, string, string][] = [
    [524, '600 g', '细胞核', ''],
    [622, '10 000–20 000 g', '线粒体 / 溶酶体 / 过氧化物酶体', ''],
    [720, '100 000 g', '微粒体（内质网碎片）', ''],
    [818, '上清', '可溶性酶类', ''],
  ]
  steps.forEach(([y, g, label], i) => {
    b.ctext(66, y + 36, `${i + 1}`, { size: 12, weight: 700, fill: C.mute })
    b.rect(80, y, 60, 62, { fill: '#f8fafc', stroke: C.sub, sw: 2, rx: 10 })
    b.rect(84, y + 6, 52, 50, { fill: C.accL, fillOp: 0.35 })
    if (i < 3) b.rect(84, y + 46, 52, 10, { fill: i === 0 ? C.pro : i === 1 ? C.warn : C.dna, fillOp: 0.8, rx: 3 })
    b.tag(225, y + 31, g, { fill: C.panelB, stroke: C.sub, size: 11.5, weight: 600, tfill: C.ink, pad: 10 })
    b.arrow(300, y + 31, 336, y + 31, { stroke: C.mute, sw: 2, marker: 'mute' })
    b.text(348, y + 36, label, { size: 12.5, weight: 600, fill: C.ink })
    if (i < 3) {
      b.arrow(110, y + 66, 110, y + 94, { stroke: C.faint, sw: 1.8, marker: 'mute' })
      b.text(126, y + 86, '上清继续离心', { size: 10, fill: C.mute })
    }
  })
  b.nucleusU(400, 552, 28, { label: '' })
  b.mito(390, 648, 76, 36, { label: '' })
  b.lysosome(500, 646, 24, { label: '' })
  b.circle(582, 646, 22, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.ctext(390, 608, '细胞核', { size: 11, weight: 600, fill: C.proD })
  b.ctext(390, 692, '线粒体', { size: 11, weight: 600, fill: C.warn })
  b.ctext(500, 692, '溶酶体', { size: 11, weight: 600, fill: C.bad })
  b.ctext(582, 692, '过氧化物酶体', { size: 11, weight: 600, fill: C.bad })
  b.erU(360, 756, 150, 22, { ribo: true, label: '' })
  b.ctext(435, 800, '微粒体（内质网碎片）', { size: 11, weight: 600, fill: C.dna })
  for (let i = 0; i < 6; i++) b.circle(384 + i * 32, 850, 5.5, { fill: C.enz, fillOp: 0.7 })
  b.ctext(600, 855, '可溶性酶（留在上清）', { size: 11, weight: 600, fill: C.enz })
  b.wtext(56, 916, 'de Duve 以差速离心结合酶标志物分析发现溶酶体与过氧化物酶体（1974 年诺贝尔奖）。密度梯度离心在蔗糖／CsCl 梯度中按浮力密度精细分离——Meselson 与 Stahl（1957）以此证明 DNA 半保留复制。', { size: 11, fill: C.sub, maxW: 600, lh: 15.5 })

  // ============ 四、放射自显影：分泌路线 ============
  b.panel(710, 470, 660, 510, { title: '四、放射自显影：Jamieson 与 Palade 的分泌途径实验' })
  b.wtext(736, 520, '以 ³H、¹⁴C、³⁵S 标记前体分子掺入细胞，贴敷感光乳胶显影——显示标记物的分布与动态去向。', { size: 11.5, fill: C.sub, maxW: 600, lh: 16 })
  b.tag(1040, 545, '³H-亮氨酸 脉冲—追踪', { fill: C.rnaL, stroke: C.rna, size: 12, weight: 700, tfill: C.rnaD, pad: 10 })
  b.cell(1040, 730, 280, 172, { fill: C.panel, stroke: C.sub, sw: 2.2 })
  b.erU(790, 640, 180, 24, { ribo: true })
  b.ctext(880, 688, '① 糙面内质网', { size: 12, weight: 700, fill: C.dna })
  b.arrow(975, 660, 1050, 695, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.golgi(1090, 700, 120, { label: '' })
  b.ctext(1090, 790, '② 高尔基体', { size: 12, weight: 700, fill: C.acc })
  b.arrow(1155, 740, 1185, 748, { stroke: C.mute, sw: 2, marker: 'mute' })
  b.vesicle(1215, 750, 26, { double: true })
  b.ctext(1215, 802, '③ 分泌颗粒', { size: 12, weight: 700, fill: C.dna })
  b.arrow(1245, 762, 1315, 815, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.etext(1352, 830, '④ 胞外（分泌）', { size: 12, weight: 700, fill: C.bad })
  // 银粒（显影黑点）
  const grains: [number, number][] = [
    [800, 655], [830, 645], [860, 662], [900, 652], [940, 662], [1000, 690], [1030, 706],
    [1060, 722], [1090, 730], [1120, 742], [1185, 756], [1215, 764], [1240, 780], [1268, 796], [1290, 812],
  ]
  grains.forEach(([gx, gy]) => b.circle(gx, gy, 2.3, { fill: C.ink }))
  b.text(860, 890, '胰腺腺泡细胞', { size: 11.5, weight: 600, fill: C.sub })
  b.wtext(736, 934, 'Jamieson 与 Palade 在胰腺腺泡细胞中以 ³H-亮氨酸脉冲—追踪实验，描绘出分泌蛋白「糙面内质网→高尔基体→浓缩分泌颗粒→胞外」的完整路线，奠定分泌途径研究的经典模型。', { size: 11, fill: C.sub, maxW: 600, lh: 15 })
}

export default scene({
  title: '细胞培养、分离与组分分析技术',
  subtitle: '原代培养传代即为细胞系（HeLa 1951 为首个人源连续细胞系）；流式细胞术逐个分析单细胞；差速离心按沉降速度分离细胞器（600 g 核 → 100 000 g 微粒体）；³H-亮氨酸放射自显影揭示分泌路线',
  draw,
})
