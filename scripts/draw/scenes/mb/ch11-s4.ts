// mb ch11-s4 转基因动物、iPS 与基因治疗（39-c 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、转基因与基因敲除动物（左上） ============
  b.panel(30, 132, 900, 430, { title: '一、转基因与基因敲除动物：从随机整合到定点改造' })
  const rows: [string, string, string][] = [
    ['原核显微注射', '1981–1982 建立：外源 DNA 注入受精卵雄原核，随机整合——首代「超级小鼠」为金属硫蛋白启动子驱动的生长激素基因；缺点：位置效应 · 嵌合体', '随机插入'],
    ['ES 细胞同源重组打靶', '小鼠胚胎干细胞中以正-负选择（neo 正选 + HSV-tk 负选）富集中靶克隆 → 囊胚注射 → 嵌合体配种获生殖系传递；Capecchi · Smithies 与 Evans 获 2007 年诺贝尔奖', '定点敲除'],
    ['条件性敲除（Cre-lox）', 'loxP 位点夹住关键外显子（flox）+ 组织 / 时序特异性 Cre——白蛋白启动子-Cre 限肝脏、CreER + 他莫昔芬诱导；克服全身敲除的胚胎致死，金标准', '限定组织时序'],
    ['iPS 诱导多能干细胞', 'Yamanaka（2006 / 2007）以四因子 OCT4 · SOX2 · KLF4 · c-MYC 将成纤维细胞重编程为多能干细胞（2012 年诺贝尔奖）——疾病建模与基因校正后自体移植', '重编程'],
  ]
  rows.forEach(([t, s, tag], i) => {
    const y = 170 + i * 94
    b.rect(46, y, 868, 84, { fill: i % 2 ? C.panel : '#ffffff', stroke: i % 2 ? C.line : C.dna, sw: 1.2, rx: 9 })
    b.text(62, y + 24, t, { size: 13.5, weight: 700, fill: C.dnaD })
    b.wtext(62, y + 46, s, { size: 11.5, fill: C.sub, maxW: 760, lh: 17 })
    b.tag(846, y + 24, tag, { fill: C.dnaL, stroke: C.dna, size: 10.5, weight: 700, tfill: C.dnaD, pad: 7 })
  })
  // 行内小图（叠加在右侧空白处）
  // 行1：显微注射针
  b.line(890, 196, 838, 222, { stroke: C.sub, sw: 2.2 })
  b.polygon([[838, 222], [830, 214], [834, 226]], { fill: C.sub })
  b.circle(816, 240, 22, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.circle(806, 232, 7, { fill: C.dna })
  // 行3：flox + Cre
  b.ctext(846, 340, 'loxP', { size: 9.5, fill: C.enzD })
  b.rect(820, 346, 14, 10, { fill: C.enzL, stroke: C.enz, sw: 1.2, rx: 2 })
  b.rect(838, 346, 30, 10, { fill: C.dnaL, stroke: C.dna, sw: 1.2, rx: 2 })
  b.rect(872, 346, 14, 10, { fill: C.enzL, stroke: C.enz, sw: 1.2, rx: 2 })
  b.ctext(846, 372, 'Cre', { size: 10, weight: 700, fill: C.enzD })
  // 行4：成纤维细胞 → iPS
  b.ellipse(822, 470, 18, 12, { fill: C.panelB, stroke: C.sub, sw: 1.4 })
  b.arrow(846, 470, 868, 470, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.circle(892, 470, 15, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.ctext(892, 474, 'iPS', { size: 9, weight: 700, fill: C.ok })

  // ============ 二、基因治疗载体（右上） ============
  b.panel(940, 132, 410, 430, { title: '二、基因治疗载体：按载体与策略分类' })
  const vecs: [string, string, string, string][] = [
    ['AAV 腺相关病毒', '非致病 · 血清型定组织向性（AAV2 视网膜 · AAV9 神经 / 心肌）· 载量约 4.7 kb · 附加体长期表达', 'Luxturna（RPE65 视网膜营养不良）· Zolgensma（SMA，SMN1 补充）', C.ok],
    ['慢病毒（HIV 改造）', '整合型 · 容量约 8 kb · 适合 ex vivo 造血干细胞 / 淋巴细胞', 'ADA-SCID 治疗', C.rna],
    ['腺病毒', '大容量 · 非整合 · 免疫原性强', '', C.bad],
    ['LNP-mRNA', '瞬时表达（疫苗范式）· 与体内编辑联用', 'NTLA-2001：LNP 递送 Cas9 mRNA + sgRNA 治疗转甲状腺素蛋白淀粉样变', C.acc],
  ]
  vecs.forEach(([t, s, ex, c], i) => {
    const y = 172 + i * 96
    b.rect(956, y, 378, 86, { fill: '#ffffff', stroke: c, sw: 1.4, rx: 9 })
    b.text(972, y + 24, t, { size: 13, weight: 700, fill: c })
    b.wtext(972, y + 44, s, { size: 10.5, fill: C.sub, maxW: 348, lh: 15 })
    if (ex) b.wtext(972, y + 72, ex, { size: 10, fill: C.mute, maxW: 348, lh: 14 })
  })

  // ============ 三、CAR-T：合成免疫受体（左下） ============
  b.panel(30, 578, 900, 382, { title: '三、CAR-T 嵌合抗原受体 T 细胞：合成免疫受体' })
  // 受体结构（跨膜示意）
  b.line(200, 620, 700, 620, { stroke: C.acc, sw: 5, opacity: 0.5 }) // 细胞膜
  b.ctext(120, 624, '细胞膜', { size: 10.5, fill: C.mute })
  // 胞外 scFv
  b.ellipse(300, 596, 40, 20, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(300, 601, 'scFv', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(300, 566, '单链抗体识别肿瘤抗原', { size: 10.5, fill: C.mute })
  b.line(300, 616, 300, 636, { stroke: C.sub, sw: 2 })
  b.ctext(300, 650, '铰链区', { size: 10, fill: C.mute })
  // 胞内：共刺激域 + CD3ζ
  b.rect(500, 636, 150, 30, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 5 })
  b.ctext(575, 656, '共刺激域 CD28 / 4-1BB', { size: 10.5, weight: 700, fill: C.rnaD })
  b.rect(500, 672, 150, 28, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 5 })
  b.ctext(575, 691, 'CD3ζ 信号域', { size: 10.5, weight: 700, fill: C.proD })
  b.line(575, 620, 575, 636, { stroke: C.sub, sw: 2 })
  b.ctext(575, 716, '胞内信号输出', { size: 10, fill: C.mute })
  b.ctext(420, 614, '（第二代 CAR：共刺激域是疗效关键）', { size: 10.5, fill: C.rnaD })
  // 流程
  const flow = ['分离患者 T 细胞', '慢病毒导入受体基因', '体外扩增', '回输患者']
  flow.forEach((s, i) => {
    const x = 56 + i * 216
    b.rect(x, 748, 200, 44, { fill: '#ffffff', stroke: C.acc, sw: 1.4, rx: 8 })
    b.ctext(x + 100, 774, s, { size: 12, weight: 600, fill: C.accD })
    if (i < 3) b.arrow(x + 202, 770, x + 214, 770, { stroke: C.acc, sw: 2, marker: 'acc' })
  })
  // 临床与毒性
  b.rect(56, 812, 858, 128, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 9 })
  b.text(72, 838, '临床与毒性管理', { size: 13, weight: 700, fill: C.ink })
  b.wtext(72, 862, '抗 CD19 CAR-T（Kymriah，2017）治疗 B 细胞白血病 / 淋巴瘤完全缓解率高；抗 BCMA 产品用于多发性骨髓瘤', { size: 11.5, fill: C.sub, maxW: 826, lh: 17 })
  b.wtext(72, 898, '主要毒性：细胞因子释放综合征（CRS）与神经毒性（ICANS）——托珠单抗与剂量分级管理已成熟', { size: 11.5, fill: C.sub, maxW: 826, lh: 17 })
  b.wtext(72, 926, '“合成生物学式”受体：识别域（抗体）与信号域（T 细胞）跨模块拼接', { size: 10.5, fill: C.mute, maxW: 826 })

  // ============ 四、伦理与治理（右下） ============
  b.panel(940, 578, 410, 382, { title: '四、伦理与治理：生殖系编辑的红线' })
  b.rect(956, 624, 378, 108, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 9, fillOp: 0.4 })
  b.text(972, 650, '贺建奎「基因编辑婴儿」事件', { size: 13, weight: 700, fill: C.bad })
  b.wtext(972, 674, '2018 年越过生殖系编辑的全球共识红线，被判刑并引发国际治理反思', { size: 11.5, fill: C.sub, maxW: 348, lh: 17 })
  b.text(972, 716, '当前共识：', { size: 13, weight: 700, fill: C.ink })
  const cons = [
    ['体细胞治疗', '经严格审批推进'],
    ['生殖系编辑', '暂缓'],
    ['增强性应用', '禁止'],
  ]
  cons.forEach(([t, s], i) => {
    const y = 736 + i * 52
    b.rect(956, y, 378, 42, { fill: i === 0 ? C.okL : i === 1 ? C.warnL : C.badL, stroke: i === 0 ? C.ok : i === 1 ? '#b45309' : C.bad, sw: 1.3, rx: 8, fillOp: 0.4 })
    b.text(972, y + 26, t, { size: 12.5, weight: 700, fill: C.ink })
    b.etext(1318, y + 26, s, { size: 11.5, fill: C.sub })
  })
  b.wtext(956, 906, '技术能力与伦理边界的张力将持续考验分子生物学——「能否做到」与「是否应当」必须同步回答', { size: 11, fill: C.mute, maxW: 378, lh: 17 })
}

export default scene({
  title: '转基因动物、iPS 与基因治疗',
  subtitle: '显微注射 → ES 打靶 → 条件性 Cre-lox → iPS 重编程——AAV / 慢病毒载体、CAR-T 合成受体与生殖系编辑的伦理红线',
  draw,
})
