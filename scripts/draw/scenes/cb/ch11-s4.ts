// cb ch11-s4 细胞衰老：Hayflick 界限与机制（39-d 批C 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Hayflick 界限与端粒缩短曲线 ============
  b.panel(30, 132, 660, 430, { title: '一、Hayflick 界限（1961）：约 50 次群体倍增后的停滞' })
  b.wtext(64, 186, 'L. Hayflick 与 P. Moorhead 证明人胚肺成纤维细胞体外培养只能传代约 50 次（40—60 群体倍增）后进入增殖停滞——推翻 Carrel"细胞永生"旧教条；停滞细胞仍存活数月至数年（复制性衰老）。', { size: 10, fill: C.sub, maxW: 600, lh: 14 })
  // 端粒缩短曲线
  b.axis(80, 460, 560, 200, {
    xlabel: '群体倍增数', ylabel: '端粒长度', title: '端粒进行性缩短（Olovnikov 端粒学说）',
    xticks: [[0.05, '0'], [0.5, '25'], [0.95, '50（界限）']], yticks: [[0.05, '临界'], [0.9, '初始']],
  })
  b.curve(80, 460, 560, 200, [[0, 0.92], [0.25, 0.72], [0.5, 0.52], [0.75, 0.3], [0.88, 0.16], [0.95, 0.1], [1, 0.09]], { stroke: C.bad, sw: 3, smooth: true, label: '体细胞（端粒酶抑制）', labelAt: [0.8, 0.3] })
  b.curve(80, 460, 560, 200, [[0, 0.92], [0.3, 0.85], [0.6, 0.82], [0.95, 0.8], [1, 0.8]], { stroke: C.ok, sw: 3, dash: '7 5', smooth: true, label: '导入 hTERT（Bodnar，1998）', labelAt: [0.55, 0.55] })
  b.ctext(660, 270, '越过界限持续分裂', { size: 9.5, weight: 700, fill: C.ok })
  b.ctext(452, 428, '每次复制丢失 50—200 bp', { size: 9.5, weight: 700, fill: C.bad })
  b.wtext(64, 526, '转入端粒酶的成纤维细胞可越过 Hayflick 界限持续分裂——端粒学说的直接证明；端粒缩短同样见于体内实际测量（造血干细胞、血管内皮）。', { size: 9.5, fill: C.mute, maxW: 600, lh: 13 })

  // ============ 二、衰老诱因与机制 ============
  b.panel(710, 132, 660, 430, { title: '二、衰老的诱因与分子机制：DDR、ROS 与应激' })
  b.text(740, 186, '端粒临界缩短触发的损伤应答（DDR）', { size: 11, weight: 700, fill: C.ink })
  b.tag(820, 216, '端粒被识别为 DNA 损伤', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })
  b.arrow(920, 234, 920, 258, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.tag(920, 282, 'ATM/ATR → p53 → p21', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.ctext(1140, 282, '（同时 p16^INK4a-Rb 通路独立参与）', { size: 9, fill: C.mute })
  b.arrow(920, 300, 920, 322, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.tag(920, 346, '持久的增殖阻滞（衰老）', { fill: C.warnL, stroke: C.warn, size: 10, weight: 700, tfill: '#78350f', pad: 6 })
  b.text(740, 396, '其他诱因', { size: 11, weight: 700, fill: C.ink })
  const causes: Array<[string, string]> = [
    ['自由基学说（Harman，1956）', '线粒体呼吸链渗漏的 ROS 损伤 DNA（尤其 mtDNA）、脂质与蛋白质；SOD 与过氧化氢酶延迟但不能消除衰老；热量限制延寿并降低 ROS'],
    ['SIPS 应激诱导早衰', '亚致死氧化应激快速诱导衰老表型'],
    ['OIS 癌基因诱导衰老', 'Ras 过表达——癌基因激活本身是抑癌的屏障'],
  ]
  causes.forEach((c, i) => {
    const y = 422 + i * 40
    b.tag(860, y, c[0], { fill: i === 0 ? C.warnL : i === 1 ? C.accL : C.badL, stroke: i === 0 ? C.warn : i === 1 ? C.acc : C.bad, size: 9, weight: 700, tfill: i === 0 ? '#78350f' : i === 1 ? C.accD : C.bad, pad: 4 })
  })
  b.wtext(740, 546, '化疗损伤亦可快速诱导 SIPS。', { size: 9.5, fill: C.mute, maxW: 560, lh: 13 })

  // ============ 三、SASP 与抗衰干预 ============
  b.panel(30, 576, 1340, 404, { title: '三、SASP 衰老相关分泌表型与干预前沿' })
  // SASP 机制
  b.circle(180, 680, 40, { fill: C.warnL, stroke: C.warn, sw: 2.4 })
  b.ctext(180, 676, '衰老细胞', { size: 9.5, weight: 700, fill: '#78350f' })
  b.ctext(180, 692, '（p16⁺/p21⁺）', { size: 8, fill: C.mute })
  b.wtext(100, 744, '经 NF-κB 与 C/EBPβ 上调分泌', { size: 9.5, fill: C.sub, maxW: 170, lh: 13 })
  const sasp: Array<[string, string]> = [
    ['IL-6 / IL-8', '促炎因子'],
    ['MMP', '基质重塑'],
    ['生长因子', '促增殖'],
  ]
  sasp.forEach((s, i) => {
    b.tag(390, 650 + i * 44, s[0], { fill: C.rnaL, stroke: C.rna, size: 9.5, weight: 700, tfill: C.rnaD, pad: 5 })
    b.ctext(500, 654 + i * 44, s[1], { size: 9, fill: C.mute })
  })
  b.arrow(232, 680, 330, 680, { stroke: C.warn, sw: 2.2, marker: 'warn' })
  // 双面性
  b.tag(560, 640, '旁分泌促邻近肿瘤发生', { fill: C.badL, stroke: C.bad, size: 9.5, weight: 700, tfill: C.bad, pad: 5 })
  b.tag(600, 772, '也参与伤口修复与纤维化（两面性）', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 5 })
  b.wtext(560, 730, 'SASP 重塑微环境：既推动衰老蔓延与肿瘤促进，又在损伤修复中招募免疫与基质细胞。', { size: 9.5, fill: C.sub, maxW: 320, lh: 13.5 })
  // 衰老标志
  b.text(950, 626, '衰老标志（López-Otín 等，2013/2023）', { size: 11, weight: 700, fill: C.ink })
  const halls = ['基因组不稳定', '端粒损耗', '表观遗传改变', '蛋白质稳态丧失', '线粒体功能障碍', '细胞衰老', '干细胞耗竭', '细胞间通讯改变']
  halls.forEach((h, i) => {
    const col = i % 2; const row = Math.floor(i / 2)
    b.tag(1040 + col * 160, 656 + row * 36, h, { fill: C.panelB, stroke: C.mute, size: 8.5, tfill: C.sub, pad: 4 })
  })
  // 干预
  b.text(100, 800, '干预前沿：', { size: 11, weight: 700, fill: C.ink })
  b.tag(200, 814, 'senolytics：达沙替尼＋槲皮素清除 p16⁺/p21⁺ 衰老细胞', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 6 })
  b.tag(200, 840, '——改善小鼠健康寿命，已进入人体试验', { fill: C.okL, stroke: C.ok, size: 9.5, tfill: C.ok, pad: 6 })
  b.tag(840, 826, 'mTOR 抑制（雷帕霉素）与热量限制＝经典延寿通路', { fill: C.accL, stroke: C.acc, size: 9.5, tfill: C.accD, pad: 6 })
  b.wtext(100, 878, '清除衰老细胞与抑制 mTOR 分别从"去存量"与"降速率"两端延缓衰老。', { size: 10, fill: C.mute, maxW: 620, lh: 13.5 })
  b.wtext(950, 780, '自噬活性随年龄下降；热量限制延寿部分依赖自噬（详见第 12 章）。', { size: 9.5, fill: C.mute, maxW: 380, lh: 13 })
}

export default scene({
  title: '细胞衰老：Hayflick 界限、端粒学说与 SASP',
  subtitle: 'Hayflick 界限：约 50 次传代停滞（1961）；端粒每代缩 50—200 bp 触发 DDR；hTERT 越过界限（1998）；ROS 与 SIPS/OIS 促早衰；SASP 重塑微环境',
  draw,
})
