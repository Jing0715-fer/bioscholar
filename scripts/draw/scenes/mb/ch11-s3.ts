// mb ch11-s3 DSB 修复路线与精准编辑策略（39-c 批5）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、NHEJ vs HDR（左上） ============
  b.panel(30, 132, 700, 320, { title: '一、Cas9 造成的 DSB：两条细胞通路的竞争修复' })
  // DSB 图标
  b.dna(150, 190, 130, { amp: 7, period: 42, sw: 2.4 })
  b.line(300, 172, 300, 208, { stroke: C.bad, sw: 2.6, dash: '6 4' })
  b.dna(330, 190, 130, { amp: 7, period: 42, sw: 2.4 })
  b.ctext(305, 166, 'DSB', { size: 13, weight: 700, fill: C.bad })
  // 分叉箭头
  b.arrow(305, 212, 200, 248, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.arrow(305, 212, 490, 248, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  // NHEJ 卡
  b.rect(56, 252, 300, 122, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 9, fillOp: 0.4 })
  b.ctext(206, 276, 'NHEJ（非同源末端连接）', { size: 13.5, weight: 700, fill: C.bad })
  b.wtext(70, 298, 'Ku70/80 识别末端', { size: 11, fill: C.sub, maxW: 272, lh: 16 })
  b.wtext(70, 314, '→ DNA-PKcs / Artemis 加工 → XRCC4-LigIV 连接', { size: 11, fill: C.sub, maxW: 272, lh: 16 })
  b.text(70, 350, '快速 · 易错：indel → 移码基因敲除（全周期，G1 为主）', { size: 11, weight: 600, fill: C.bad })
  // HDR 卡
  b.rect(372, 252, 300, 122, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 9, fillOp: 0.4 })
  b.ctext(522, 276, 'HDR（同源定向修复）', { size: 13.5, weight: 700, fill: C.ok })
  b.wtext(386, 298, '切除成 3′ 突出 → 侵入带同源臂供体模板（ssODN / 质粒）→ 合成替换', { size: 11, fill: C.sub, maxW: 272, lh: 16 })
  b.text(386, 350, '精确：定点突变 · 插入 · 报告基因敲入（限 S/G2 期，效率常 <30%）', { size: 11, weight: 600, fill: C.ok })
  // 底条
  b.rect(56, 386, 616, 52, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 8 })
  b.wtext(72, 408, '基因敲除（KO）依赖 NHEJ 的 indel；敲入与点突变校正依赖 HDR + 供体模板——RS-1 / scr7 抑制 NHEJ 与细胞周期同步是常用增效策略', { size: 11.5, fill: C.sub, maxW: 588, lh: 17 })

  // ============ 二、碱基编辑（右上） ============
  b.panel(740, 132, 630, 320, { title: '二、碱基编辑（David Liu 实验室）：绕开 DSB 的化学转化' })
  // CBE 卡
  b.rect(756, 172, 298, 178, { fill: C.dnaL, stroke: C.dna, sw: 1.5, rx: 9, fillOp: 0.45 })
  b.ctext(905, 196, 'CBE 胞嘧啶碱基编辑器', { size: 13.5, weight: 700, fill: C.dnaD })
  b.wtext(772, 220, 'd/nCas9（D10A 切口酶）融合大鼠 APOBEC1 + UGI（尿嘧啶 DNA 糖苷酶抑制剂）', { size: 11, fill: C.sub, maxW: 266, lh: 16 })
  b.text(772, 274, '编辑窗口（约第 4–8 位）内：', { size: 11, fill: C.mute })
  b.ctext(905, 298, 'C → U → U·G 错配', { size: 12.5, weight: 700, fill: C.dnaD })
  b.ctext(905, 322, '经复制 / 缺口修复固定为 T·A', { size: 11, fill: C.sub })
  b.tag(905, 336, 'C·G → T·A', { fill: '#ffffff', stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 8 })
  // ABE 卡
  b.rect(1066, 172, 288, 178, { fill: C.rnaL, stroke: C.rna, sw: 1.5, rx: 9, fillOp: 0.45 })
  b.ctext(1210, 196, 'ABE 腺嘌呤碱基编辑器', { size: 13.5, weight: 700, fill: C.rnaD })
  b.wtext(1082, 220, '由大肠杆菌 tRNA 腺苷脱氨酶（TadA）经工程进化而来', { size: 11, fill: C.sub, maxW: 256, lh: 16 })
  b.text(1082, 274, '腺嘌呤脱氨为肌苷（I）：', { size: 11, fill: C.mute })
  b.ctext(1210, 298, 'A → I → 复制读作 G', { size: 12.5, weight: 700, fill: C.rnaD })
  b.ctext(1210, 322, '肌苷被聚合酶当作 G 配对', { size: 11, fill: C.sub })
  b.tag(1210, 336, 'A·T → G·C', { fill: '#ffffff', stroke: C.rna, size: 12.5, weight: 700, tfill: C.rnaD, pad: 8 })
  // 底条
  b.rect(756, 362, 598, 76, { fill: C.warnL, stroke: '#b45309', sw: 1.3, rx: 8, fillOp: 0.35 })
  b.wtext(772, 384, 'C→T 与 A→G 经反义链设计合起来可覆盖约 60% 的人类致病点突变，且无 DSB——大幅降低 indel 与易位风险', { size: 11.5, fill: C.sub, maxW: 568, lh: 17 })
  b.wtext(772, 420, '局限：编辑窗口内的旁观者效应 · 不能插入 / 缺失 · 序列上下文偏好', { size: 11, fill: C.rnaD, maxW: 568 })

  // ============ 三、先导编辑（中，全宽） ============
  b.panel(30, 466, 1340, 244, { title: '三、先导编辑（Prime Editing，2019）：Cas9-逆转录酶融合 + 自带模板的 pegRNA' })
  // 融合蛋白
  b.rect(56, 512, 250, 46, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(181, 530, 'Cas9（H840A 切口酶）', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(181, 548, '融合', { size: 10, fill: C.mute })
  b.rect(316, 512, 170, 46, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(401, 530, 'M-MLV', { size: 12, weight: 700, fill: C.proD })
  b.ctext(401, 548, '逆转录酶', { size: 10.5, fill: C.mute })
  // pegRNA 结构
  b.rect(56, 576, 130, 34, { fill: C.rnaL, stroke: C.rna, sw: 1.6, rx: 6 })
  b.ctext(121, 598, '间隔序列', { size: 11, weight: 600, fill: C.rnaD })
  b.rect(194, 576, 100, 34, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 6 })
  b.ctext(244, 598, 'sgRNA 骨架', { size: 11, fill: C.sub })
  b.rect(302, 576, 110, 34, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 6 })
  b.ctext(357, 598, 'PBS', { size: 11.5, weight: 700, fill: C.ok })
  b.rect(420, 576, 130, 34, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 6 })
  b.ctext(485, 598, 'RTT（模板）', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(56, 630, 'pegRNA＝向导 RNA 3′ 延伸出引物结合位点（PBS）与逆转录模板（RTT）', { size: 11, fill: C.mute, maxW: 480, lh: 16 })
  // 流程四步
  const peSteps = [
    '① pegRNA 引导切口靶标链',
    '② 游离 3′-OH 与 PBS 配对',
    '③ 逆转录酶按 RTT 合成含目标突变的「编辑翼」',
    '④ 编辑翼与原序列竞争置换（3′ flap vs 5′ flap）→ 错配修复固定',
  ]
  peSteps.forEach((s, i) => {
    const x = 560 + (i % 2) * 330, y = 506 + Math.floor(i / 2) * 90
    b.rect(x, y, 316, 74, { fill: '#ffffff', stroke: C.acc, sw: 1.4, rx: 8 })
    b.wtext(x + 158, y + 30, s, { size: 11.5, fill: C.sub, maxW: 288, lh: 17, anchor: 'middle' })
    if (i < 2) b.arrow(x + 158, y + 76, x + 158, y + 86, { stroke: C.acc, sw: 2, marker: 'acc' })
  })
  // PE3 与代价
  b.text(70, 678, '代价：pegRNA 设计复杂 · 效率因位点而异 · 编辑产物嵌合', { size: 11, fill: C.rnaD })
  b.wtext(560, 688, 'PE2 + 第二条引导链（PE3）可提高效率；无需外源供体即可实现全部 12 种碱基转换 + 小片段插入 / 删除，理论上覆盖约 89% 已知致病突变。', { size: 10.5, fill: C.ok, maxW: 646, lh: 15 })

  // ============ 四、脱靶与优化（下，全宽） ============
  b.panel(30, 726, 1340, 234, { title: '四、脱靶效应与优化：精准度与安全性步步推进' })
  b.wtext(56, 768, '脱靶根源：sgRNA 与非靶位点的部分互补（尤其种子区错配耐受）+ Cas9 停留时间决定脱靶概率', { size: 11.5, fill: C.sub, maxW: 900 })
  const opts: [string, string][] = [
    ['高保真变体', 'eSpCas9(1.0) · SpCas9-HF1（消除非特异性 DNA 接触）· HiFi Cas9'],
    ['二聚与截短', 'dCas9-FokI（需二聚体提高特异性）· 截短引导链 tru-gRNA（17–18 nt）'],
    ['递送时程控制', 'RNP（核糖核蛋白）直接递送——瞬时活性、快速降解'],
    ['全基因组脱靶检测', 'GUIDE-seq · CIRCLE-seq · Digenome-seq（体内 / 体外系统评估）'],
  ]
  opts.forEach(([t, s], i) => {
    const x = 56 + (i % 2) * 660, y = 778 + Math.floor(i / 2) * 62
    b.rect(x, y, 640, 52, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 8 })
    b.text(x + 16, y + 22, t, { size: 12.5, weight: 700, fill: C.ink })
    b.wtext(x + 16, y + 40, s, { size: 11, fill: C.sub, maxW: 608 })
  })
  b.rect(56, 906, 1288, 40, { fill: C.accL, stroke: C.acc, sw: 1.4, rx: 10, fillOp: 0.4 })
  b.ctext(700, 931, '技术栈演化主线：核酸酶 → 碱基编辑 → 先导编辑——「从制造断裂到不制造断裂、从依赖修复到自携修复模板」', { size: 13, weight: 600, fill: C.accD })
}

export default scene({
  title: 'DSB 修复路线与精准编辑策略',
  subtitle: 'NHEJ / HDR 竞争修复——CBE 与 ABE 免断裂碱基转化、先导编辑 pegRNA 自携模板与脱靶控制的完整技术栈',
  draw,
})
