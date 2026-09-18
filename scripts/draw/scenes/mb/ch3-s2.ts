// mb ch3-s2 DNA 修复途径：从光复活到 SOS 反应（39-b2 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、直接逆转 ============
  b.panel(30, 132, 420, 300, { title: '一、直接逆转：一步修复' })
  b.text(60, 186, '光复活（photoreactivation）', { size: 13.5, weight: 700, fill: C.ink })
  b.text(60, 208, '可见光 300～500 nm', { size: 11, fill: '#b45309' })
  b.arrow(66, 226, 110, 238, { stroke: '#b45309', sw: 1.8, marker: 'warn' })
  b.ellipse(170, 246, 52, 22, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(170, 251, '光裂合酶', { size: 12.5, weight: 700, fill: C.enzD })
  b.line(60, 286, 390, 286, { stroke: C.dna, sw: 2.4 })
  b.rect(150, 278, 18, 16, { fill: C.warnL, stroke: '#b45309', sw: 1.6 })
  b.rect(168, 278, 18, 16, { fill: C.warnL, stroke: '#b45309', sw: 1.6 })
  b.ctext(159, 310, 'CPD', { size: 10.5, fill: '#b45309' })
  b.wtext(60, 326, 'FADH⁻ / MTHF 辅基吸光断开环丁烷环——唯一不需切除合成的「一步逆转」；胎盘类（含人）缺失此酶，依赖 NER。', { size: 11, fill: C.sub, maxW: 360, lh: 15.5 })
  b.line(60, 372, 390, 372, { stroke: C.line, sw: 1, dash: '4 5' })
  b.text(60, 392, 'AGT / MGMT：自杀式逆转', { size: 13, weight: 700, fill: C.ink })
  b.wtext(60, 410, '将 O⁶-烷基鸟嘌呤的烷基夺回至自身活性位点半胱氨酸，一次转移后酶分子即失活。', { size: 11, fill: C.sub, maxW: 360, lh: 15.5 })

  // ============ 二、BER ============
  b.panel(450, 132, 460, 300, { title: '二、碱基切除修复（BER）：小型损伤' })
  const ber = [
    '① 特异 DNA 糖苷酶识别并切断 N-糖苷键，留下 AP 位点（UNG 切 U、OGG1 切 8-oxoG）',
    '② AP 内切核酸酶（如 APE1）在 AP 位点 5′ 侧切开骨架',
    '③ DNA pol β 填补 1 nt 缺口（短修补）；或 pol δ/ε + FEN1 长修补 2～10 nt',
    '④ 连接酶 III/XRCC1（短）或连接酶 I（长）封口',
  ]
  b.wtext(470, 192, ber.join(''), { size: 12, fill: C.sub, maxW: 420, lh: 34 })
  b.tag(500, 404, '底物：脱氨、氧化、烷基化小加合物', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 600, tfill: C.enzD, pad: 9 })

  // ============ 三、NER ============
  b.panel(910, 132, 460, 300, { title: '三、核苷酸切除修复（NER）：扭曲性大损伤' })
  b.text(930, 192, '大肠杆菌（UvrABC 系统）', { size: 13, weight: 700, fill: C.ink })
  b.wtext(930, 214, 'UvrA₂B 扫描识别 → UvrB 局部解链 → UvrC 在损伤两侧切开（3′ 侧 4～5 nt、5′ 侧 8 nt）→ UvrD 取出 12～13 nt 寡核苷酸片段 → pol I 填补、连接酶封口。', { size: 12, fill: C.sub, maxW: 420, lh: 17 })
  b.text(930, 306, '真核（XP 蛋白 + TFIIH）', { size: 13, weight: 700, fill: C.ink })
  b.wtext(930, 328, 'GG-NER 由 XPC-HR23B 识别损伤；TC-NER 由停滞的 RNA pol II 充当传感器（CSA/CSB 参与）。汇合后 TFIIH（XPB/XPD 解旋酶）解旋，XPF-ERCC1 与 XPG 内切酶在两侧切割，切除约 24～32 nt 片段，pol δ/ε 填补后连接。', { size: 12, fill: C.sub, maxW: 420, lh: 17 })
  b.text(930, 418, '着色性干皮病（XP）即 NER 缺陷所致。', { size: 11.5, fill: C.mute })

  // ============ 四、SOS 反应 ============
  b.panel(30, 452, 660, 270, { title: '四、SOS 反应：易错的最后防线' })
  const sos = [
    '损伤严重 / 复制叉停滞 → ssDNA 积累',
    'RecA-ssDNA 丝状体活化',
    '促进 LexA 阻遏蛋白自切降解',
    '解除对数十个损伤修复基因的抑制',
    '诱导 pol IV（DinB）/ pol V（UmuD′₂C）跨损伤合成（TLS）',
  ]
  sos.forEach((s, i) => {
    const y = 490 + i * 44
    b.rect(80, y, 600, 32, { fill: i === 4 ? C.badL : C.panelB, stroke: i === 4 ? C.bad : C.line, sw: 1.5, rx: 7 })
    b.ctext(380, y + 21, s, { size: 12.5, fill: i === 4 ? '#991b1b' : C.sub, weight: i === 4 ? 700 : 400 })
    if (i < 4) b.arrow(380, y + 34, 380, y + 42, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  b.text(80, 716, 'TLS 聚合酶活性位点宽松、无严格校对——易错修复，SOS 诱导期是诱变剂产生突变的主要窗口。', { size: 11.5, fill: C.mute })

  // ============ 五、BER 与 NER 比较 ============
  b.panel(690, 452, 680, 270, { title: '五、BER 与 NER 的比较' })
  b.table(710, 500, 640, {
    headers: ['项目', 'BER', 'NER'],
    colW: [130, 240, 270],
    rowH: 40,
    fontSize: 11.5,
    rows: [
      ['底物', '小碱基损伤（脱氨、氧化、甲基化）', '大体积扭曲损伤（二聚体、大加合物）'],
      ['识别', '各特异糖苷酶（UNG / OGG1）', 'UvrA / XPC 或 RNA pol II'],
      ['切除范围', '单个碱基至 ~10 nt', '12～13 nt（原核）/ 24～32 nt（真核）'],
      ['填补酶', 'pol β 或 δ/ε', 'pol I（原核）/ δ、ε（真核）'],
    ],
  })
  b.text(710, 716, '修复途径的选择取决于损伤的体积与对双螺旋的扭曲程度。', { size: 12, fill: C.mute })
}

export default scene({
  title: 'DNA 修复途径：从光复活到 SOS 反应',
  subtitle: '直接逆转（光裂合酶 / AGT）——BER 切小损伤（糖苷酶→AP 内切→填补→封口）、NER 切 12～32 nt 大片段（UvrABC / XP 蛋白 + TFIIH）——SOS 诱导易错跨损伤聚合酶',
  draw,
})
