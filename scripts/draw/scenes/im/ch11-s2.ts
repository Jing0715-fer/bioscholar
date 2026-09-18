// im ch11-s2 外周耐受的机制：失能 · 忽视 · AICD · 豁免 · 绥靖（39-g 批B）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、克隆失能与免疫忽视 ============
  b.panel(30, 132, 1340, 282, { title: '一、克隆失能：缺了第二信号的沉寂 · 免疫忽视与剂量依赖带' })

  b.rect(60, 184, 620, 210, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(78, 208, '半套信号的后果', { size: 12.5, weight: 700, fill: C.proD })
  b.cell(180, 300, 90, 66, { label: 'T 细胞', double: true })
  b.cell(500, 300, 100, 66, { label: 'APC', double: true })
  b.arrow(272, 276, 408, 276, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(340, 262, '信号一：pMHC ✓', { size: 10.5, weight: 700, fill: C.dnaD })
  b.line(272, 330, 408, 330, { stroke: C.faint, sw: 2, dash: '7 5' })
  b.ctext(340, 352, '信号二：B7 ✗（无共刺激）', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(78, 382, 'NFAT 单独驱动的抑制性回路固化无反应状态——「有抗原、无共刺激」的半套信号把细胞锁进失能。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(78, 240, '强共刺激 + IL-2 可部分逆转。', { size: 10.5, weight: 600, fill: C.proD, maxW: 560, lh: 14 })

  b.rect(710, 184, 630, 210, { fill: C.bg, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(728, 208, '免疫忽视与低带/高带耐受', { size: 12.5, weight: 700, fill: C.accD })
  const ax = 750, ay = 366, aw = 540, ah = 150
  b.axis(ax, ay, aw, ah, {
    xlabel: '抗原剂量（对数坐标）',
    ylabel: '应答强度',
    xticks: [[0.08, '低带耐受'], [0.5, '有效应答带'], [0.9, '高带耐受']],
    yticks: [[0.9, '高'], [0.1, '低']],
  })
  b.curve(ax, ay, aw, ah, [
    [0, 0.02], [0.12, 0.02], [0.22, 0.18], [0.35, 0.68], [0.5, 1], [0.65, 0.72], [0.8, 0.3], [0.9, 0.08], [1, 0.02],
  ], { stroke: C.acc, sw: 2.6, smooth: true })
  b.ctext(ax + 0.5 * aw, ay - ah - 10, '抗原剂量的两端效应：过低无人理睬，过高诱导麻痹', { size: 10, weight: 600, fill: C.sub })
  b.wtext(728, 246, '免疫忽视：抗原量低于阈值时细胞与抗原相互静默；炎症可随时打破忽视。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 二、AICD 与免疫豁免 ============
  b.panel(30, 424, 1340, 282, { title: '二、活化诱导的细胞死亡（AICD）· 免疫豁免与 ACAID · 细胞因子绥靖' })

  b.rect(60, 474, 620, 206, { fill: C.badL, fillOp: 0.25, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(78, 498, 'AICD：给反复活化者的死刑通知', { size: 12.5, weight: 700, fill: C.bad })
  const aicd: Array<[number, number, string]> = [
    [78, 150, 'FasL（活化 T 细胞）'], [248, 130, 'Fas（靶受体）'], [396, 130, 'FADD'], [544, 100, '胱天蛋白酶级联'],
  ]
  aicd.forEach(([x, w, t], i) => {
    b.rect(x, 520, w, 40, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 7 })
    b.ctext(x + w / 2, 545, t, { size: 10.5, weight: 700, fill: C.ink })
    if (i < 3) b.arrow(x + w + 6, 540, x + w + 24, 540, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  })
  b.wtext(78, 588, '反复活化的 T 细胞经此级联被删除——构成克隆收缩与外周删除。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.rect(78, 612, 560, 56, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.5, rx: 8 })
  b.wtext(94, 632, 'AICD 缺陷 → ALPS：淋巴细胞增殖、双阴性 T 堆积与自身免疫——「死刑通知」失灵的代价。', { size: 10.5, weight: 600, fill: C.bad, maxW: 530, lh: 15 })

  b.rect(710, 474, 630, 96, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(728, 498, '免疫豁免部位与 ACAID', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(728, 520, '屏障 + FasL + TGF-β + IDO 实现应答偏置；ACAID 把前房抗原应答改写为非炎症型；屏障破坏可致交感性眼炎。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  b.rect(710, 584, 630, 96, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(728, 608, '调节性细胞因子环境的绥靖', { size: 12.5, weight: 700, fill: C.dnaD })
  b.wtext(728, 630, 'IL-10、TGF-β 等抑制性细胞因子环境使黏膜等屏障组织默认耐受——口服耐受与菌群共生赖之。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })

  // ============ 三、机制总表 ============
  b.panel(30, 718, 1340, 254, { title: '三、外周耐受机制总表：核心分子 · 触发条件 · 失败后果' })
  b.table(60, 768, 1280, {
    headers: ['机制', '核心分子', '触发条件', '代表性失败后果'],
    colW: [180, 300, 320, 480],
    rowH: 30,
    fontSize: 10.5,
    rows: [
      ['克隆失能', 'NFAT 单独信号、Cbl-b', '有抗原、缺共刺激', '慢性感染与肿瘤中应答乏力'],
      ['免疫忽视', '低于活化阈值的抗原量', '抗原稀少、无炎症', '炎症破局后自身免疫点燃'],
      ['AICD', 'Fas-FasL-FADD-胱天蛋白酶 8', '抗原反复刺激', 'ALPS（淋巴细胞堆积与自身免疫）'],
      ['免疫豁免与 ACAID', 'FasL、TGF-β、IDO', '解剖隔离部位', '交感性眼炎等屏障破漏后炎症'],
      ['细胞因子绥靖', 'IL-10、TGF-β、IL-35', '屏障组织持续低危暴露', '黏膜炎症与失耐受倾向'],
    ],
  })
}

export default scene({
  title: '外周耐受的机制：失能、忽视、AICD、免疫豁免与细胞因子绥靖',
  subtitle: '克隆失能源于「有抗原、无共刺激」的半套信号，NFAT 单独驱动的抑制性回路固化无反应状态，强共刺激加 IL-2 可部分逆转；免疫忽视与低带/高带耐受描述抗原剂量两端效应，炎症可打破忽视；AICD 经 Fas-FasL-FADD-胱天蛋白酶级联删除反复活化的 T 细胞，缺陷致 ALPS；免疫豁免部位以屏障、FasL、TGF-β 与 IDO 偏置应答，ACAID 改写前房抗原应答、屏障破坏致交感性眼炎；IL-10 与 TGF-β 使黏膜组织默认耐受，支撑口服耐受与菌群共生',
  draw,
})
