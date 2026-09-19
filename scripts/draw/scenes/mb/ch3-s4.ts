// mb ch3-s4 位点特异性重组与转座子（39-b2 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、λ 噬菌体的整合与切离 ============
  b.panel(30, 132, 660, 296, { title: '一、位点特异性重组：λ 噬菌体 attP × attB' })
  // 上排：游离噬菌体环 + 宿主染色体
  b.text(60, 192, '整合（需 Int + IHF）', { size: 13, weight: 700, fill: C.ink })
  b.line(60, 226, 340, 226, { stroke: C.dna, sw: 2.4 })
  b.text(60, 214, 'gal', { size: 11, fill: C.mute })
  b.text(316, 214, 'bio', { size: 11, fill: C.mute, anchor: 'end' })
  b.rect(196, 218, 44, 16, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.ctext(218, 230, 'attB', { size: 9, weight: 700, fill: C.accD })
  b.ctext(218, 250, '约 25 bp（gal-bio 间）', { size: 10.5, fill: C.mute })
  b.ctext(218, 196, '大肠杆菌染色体', { size: 11, fill: C.sub })
  b.circle(560, 226, 44, { stroke: C.pro, sw: 3 })
  b.rect(576, 218, 44, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(598, 230, 'attP', { size: 9, weight: 700, fill: C.rnaD })
  b.ctext(598, 282, 'λ 环状基因组 · attP 约 240 bp', { size: 10.5, fill: C.mute })
  b.tag(560, 170, '整合酶 Int', { fill: C.enzL, stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 8 })
  // 中间箭头（正逆两向）
  b.arrow(400, 210, 400, 268, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.text(412, 236, 'attP × attB', { size: 11, weight: 700, fill: C.enzD })
  b.arrow(470, 268, 470, 210, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.ctext(470, 290, '切离（还需 Xis）', { size: 11, fill: C.accD })
  // 下排：整合产物
  b.text(60, 330, '整合产物：attL 与 attR 夹持原噬菌体', { size: 13, weight: 700, fill: C.ink })
  b.line(60, 364, 640, 364, { stroke: C.dna, sw: 2.4 })
  b.rect(150, 356, 36, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(168, 368, 'attL', { size: 9, weight: 700, fill: C.rnaD })
  b.rect(190, 348, 240, 32, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 4 })
  b.ctext(310, 368, '原噬菌体（prophage）', { size: 12, weight: 700, fill: C.proD })
  b.rect(434, 356, 36, 16, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  b.ctext(452, 368, 'attR', { size: 9, weight: 700, fill: C.rnaD })
  b.text(60, 352, 'gal', { size: 11, fill: C.mute })
  b.text(640, 352, 'bio', { size: 11, fill: C.mute, anchor: 'end' })
  b.wtext(60, 398, '保守性重组：不依赖 RecA 与大范围同源、不伴随 DNA 净合成；能量来自磷酸二酯键的断裂-再连接转移，不需 ATP。', { size: 11.5, fill: C.sub, maxW: 610, lh: 16 })
  b.wtext(310, 318, 'Cre-loxP / FLP-FRT 系统即此类重组的工程化典范，用于条件性基因敲除（第 11 章）', { size: 10.5, fill: C.mute, maxW: 380, lh: 15 })

  // ============ 二、细菌转座子三类 ============
  b.panel(710, 132, 660, 296, { title: '二、细菌转座子的三种组织' })
  const seg = (x: number, y: number, w: number, s: string, fill: string, stroke: string, fs = 11) => {
    b.rect(x, y, w, 26, { fill, stroke, sw: 1.6, rx: 4 })
    b.ctext(x + w / 2, y + 17, s, { size: fs, weight: 700, fill: stroke })
  }
  // IS
  b.text(730, 190, '插入序列 IS（0.7～1.5 kb）', { size: 13, weight: 700, fill: C.ink })
  seg(730, 202, 42, 'IR', C.dnaL, C.dnaD, 10)
  seg(774, 202, 180, '转座酶 tnp', C.enzL, C.enzD)
  seg(958, 202, 42, 'IR', C.dnaL, C.dnaD, 10)
  b.wtext(1030, 206, '两端反向重复（IR）夹一个转座酶基因；复制型或非复制型转座。', { size: 10.5, fill: C.mute, maxW: 320, lh: 15 })
  // Tn10
  b.text(730, 252, '复合转座子（如 Tn10）', { size: 13, weight: 700, fill: C.ink })
  seg(730, 264, 90, 'IS10-L', C.dnaL, C.dnaD, 10)
  seg(822, 264, 150, 'tet 抗性基因', C.badL, '#991b1b')
  seg(974, 264, 90, 'IS10-R', C.dnaL, C.dnaD, 10)
  b.wtext(1080, 268, '两翼 IS 元件夹带抗性等基因，借 IS 的转座酶整体移动。', { size: 10.5, fill: C.mute, maxW: 276, lh: 15 })
  // Tn3
  b.text(730, 314, 'Tn3 家族（复制型）', { size: 13, weight: 700, fill: C.ink })
  seg(730, 326, 42, 'IR', C.dnaL, C.dnaD, 10)
  seg(774, 326, 120, 'tnpA 转座酶', C.enzL, C.enzD)
  seg(896, 326, 150, 'res + tnpR 解离酶', C.rnaL, C.rnaD)
  seg(1048, 326, 42, 'IR', C.dnaL, C.dnaD, 10)
  b.wtext(1100, 330, '复制型转座形成共整合体，由解离酶在 res 位点拆分。', { size: 10.5, fill: C.mute, maxW: 256, lh: 15 })
  // 靶点重复示意
  b.text(730, 380, '靶位点重复：插入后两侧各复制出一段短重复（5～9 bp）', { size: 12, weight: 700, fill: C.sub })
  b.line(760, 402, 900, 402, { stroke: C.dna, sw: 2.2 })
  b.rect(820, 394, 30, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.line(806, 392, 816, 412, { stroke: C.acc, sw: 2 })
  b.line(846, 392, 856, 412, { stroke: C.acc, sw: 2 })
  b.etext(920, 406, '斜线＝5～9 bp 靶点重复', { size: 10.5, fill: C.mute })

  // ============ 三、两种转座机制 ============
  b.panel(30, 448, 660, 260, { title: '三、非复制型与复制型转座' })
  b.text(60, 504, '非复制型（切下-粘贴）', { size: 13.5, weight: 700, fill: C.ink })
  b.line(60, 536, 300, 536, { stroke: C.dna, sw: 2.2 })
  b.rect(150, 528, 60, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(180, 540, 'Tn', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(180, 560, '供体（迁离后留下缺口）', { size: 10.5, fill: C.mute })
  b.arrow(310, 536, 370, 536, { stroke: C.enz, sw: 2.2, marker: 'enz' })
  b.line(370, 536, 640, 536, { stroke: C.dna, sw: 2.2 })
  b.rect(430, 528, 60, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(460, 540, 'Tn', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(460, 560, '靶 DNA（原位序列迁离，拷贝数不变）', { size: 10.5, fill: C.mute })
  b.line(60, 596, 640, 596, { stroke: C.line, sw: 1, dash: '4 5' })
  b.text(60, 622, '复制型（replicative）', { size: 13.5, weight: 700, fill: C.ink })
  b.line(60, 654, 250, 654, { stroke: C.dna, sw: 2.2 })
  b.rect(120, 646, 50, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(145, 658, 'Tn', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(155, 676, '供体', { size: 10.5, fill: C.mute })
  b.arrow(255, 654, 315, 654, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ellipse(380, 654, 78, 24, { fill: C.panelB, stroke: C.sub, sw: 1.8 })
  b.ctext(380, 658, '共整合体', { size: 11.5, weight: 700, fill: C.sub })
  b.arrow(445, 654, 505, 654, { stroke: C.rna, sw: 2, marker: 'rna' })
  b.ctext(475, 638, 'tnpR', { size: 10.5, weight: 700, fill: C.rnaD })
  b.line(505, 646, 640, 646, { stroke: C.dna, sw: 2.2 })
  b.rect(545, 638, 50, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(570, 650, 'Tn', { size: 10, weight: 700, fill: C.enzD })
  b.line(505, 678, 640, 678, { stroke: C.dna, sw: 2.2 })
  b.rect(545, 670, 50, 16, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(570, 682, 'Tn', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(575, 700, '转座伴随复制，拷贝数增加', { size: 10.5, fill: C.mute })

  // ============ 四、真核转座元件 ============
  b.panel(710, 448, 660, 260, { title: '四、真核转座元件：DNA 转座子与逆转座子' })
  b.text(730, 502, 'DNA 转座子（切下-粘贴）', { size: 13, weight: 700, fill: C.ink })
  seg(730, 514, 42, 'IR', C.dnaL, C.dnaD, 10)
  seg(774, 514, 120, '转座酶', C.enzL, C.enzD)
  seg(898, 514, 42, 'IR', C.dnaL, C.dnaD, 10)
  b.wtext(960, 512, '玉米 Ac（自主）/ Ds（非自主）、果蝇 P 元件；P × Q 杂交引发杂种不育。', { size: 10.5, fill: C.mute, maxW: 396, lh: 15 })
  b.line(730, 562, 1360, 562, { stroke: C.line, sw: 1, dash: '4 5' })
  b.text(730, 586, '逆转座子（经 RNA 中间体，复制-粘贴）', { size: 13, weight: 700, fill: C.ink })
  b.text(730, 608, 'LTR 逆转座子：酵母 Ty、果蝇 copia', { size: 11.5, fill: C.sub })
  seg(730, 620, 40, 'LTR', C.rnaL, C.rnaD, 9)
  seg(774, 620, 150, 'gag-pol', C.proL, C.proD, 10.5)
  seg(928, 620, 40, 'LTR', C.rnaL, C.rnaD, 9)
  b.text(990, 634, 'LINE-1（自主）：', { size: 11.5, weight: 700, fill: C.rnaD })
  seg(1100, 620, 100, 'ORF1', C.accL, C.accD, 10)
  seg(1204, 620, 140, 'ORF2', C.accL, C.accD, 10)
  b.wtext(1100, 660, 'ORF1 编码 RNA 结合蛋白；ORF2 具内切酶与逆转录酶活性，经 TPRT 插入新拷贝。Alu 等非自主 SINE 借用 LINE-1 酶系转座。', { size: 10.5, fill: C.mute, maxW: 400, lh: 15 })

  // ============ 五、发现史与基因组意义 ============
  b.panel(30, 732, 1340, 238, { title: '五、McClintock 的发现与转座的基因组意义' })
  b.arrow(70, 800, 660, 800, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  const miles: [number, string, string][] = [
    [130, '1950', 'McClintock 在玉米中发现 Ds / Ac 控制元件'],
    [350, '1983', '获诺贝尔奖——「移动的遗传元件」获公认'],
    [560, '现代', '转座元件占人基因组近半'],
  ]
  miles.forEach(([x, yr, desc]) => {
    b.circle(x, 800, 6, { fill: C.ink })
    b.ctext(x, 782, yr, { size: 14, weight: 700, fill: C.ink })
    b.wtext(x, 818, desc, { size: 10.5, fill: C.sub, maxW: 190, lh: 15, anchor: 'middle' })
  })
  const effs: [string, string][] = [
    ['插入突变', '如血友病 LINE-1 插入凝血因子基因'],
    ['非等位同源重组', '重复元件间错误配对致基因组重排'],
    ['外显子化', '转座序列经剪接进入编码区'],
    ['程序化重排同源', 'CRISPR 间隔序列、V(D)J 重排与转座逻辑一脉相承'],
  ]
  effs.forEach(([t, s], i) => {
    const x = 700 + (i % 2) * 320
    const y = 780 + Math.floor(i / 2) * 84
    b.rect(x, y, 300, 68, { fill: C.panelB, stroke: C.line, sw: 1.3, rx: 8 })
    b.text(x + 14, y + 26, t, { size: 13, weight: 700, fill: C.ink })
    b.wtext(x + 14, y + 44, s, { size: 11, fill: C.sub, maxW: 272, lh: 15 })
  })
  b.text(70, 920, '转座不依赖序列同源性与 RecA；转座元件是基因组进化与疾病的双重来源。', { size: 11.5, fill: C.mute })
}

export default scene({
  title: '位点特异性重组与转座子',
  subtitle: 'λ 噬菌体 attP×attB 保守性重组（Int/IHF/Xis）——细菌 IS / Tn10 / Tn3 与真核 DNA 转座子、LINE-1 / Alu 逆转座子：切下-粘贴与复制-粘贴两条路线',
  draw,
})
