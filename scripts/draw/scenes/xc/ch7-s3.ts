// xc ch7-s3 分子置换的现代实践（6-xc）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Patterson 两步搜索流程 ============
  b.panel(30, 132, 660, 420, { title: '一、Patterson 旋转／平移两步搜索' })
  b.rect(60, 178, 262, 44, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(191, 205, '晶体 Patterson（实验 |F|^{2}）', { size: 11, weight: 700, fill: C.accD })
  b.rect(398, 178, 262, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 7 })
  b.ctext(529, 205, '模型 Patterson（已知结构）', { size: 11, weight: 700, fill: C.dnaD })
  b.arrow(191, 222, 300, 252, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(529, 222, 420, 252, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(215, 256, 300, 56, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(365, 278, '① 旋转函数——定取向 Ω', { size: 12, weight: 700, fill: C.ink })
  b.ctext(365, 300, '分子内向量对齐（限定向径 10 Å 内）', { size: 10, fill: C.sub })
  b.arrow(365, 312, 365, 330, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(470, 326, '峰列表前 10–100 名', { size: 9.5, weight: 700, fill: C.mute })
  b.rect(215, 334, 300, 56, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(365, 356, '② 平移函数——定位置 x', { size: 12, weight: 700, fill: C.ink })
  b.ctext(365, 378, '交叉向量吻合（FFT 平移搜索提速）', { size: 10, fill: C.sub })
  b.arrow(365, 390, 365, 408, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(215, 412, 300, 48, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 8 })
  b.ctext(365, 434, '③ packing 检查（硬闸门）', { size: 12, weight: 700, fill: C.warnD })
  b.ctext(365, 452, '分子与对称像穿模即出局', { size: 10, fill: C.sub })
  b.arrow(515, 436, 560, 436, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.tag(588, 436, 'LLG／TFZ 裁决', { fill: C.enzL, stroke: C.enz, size: 11, weight: 700, tfill: C.enzD, pad: 9 })
  b.wtext(60, 494, '分诊：旋转都无峰→查模型质量与指标化；旋转有峰而平移失败→嫌疑 NCS 与伪平移；两步都成而精修不动→空间群受审。', { size: 10.5, fill: C.mute, maxW: 600, lh: 15 })
  b.wtext(60, 530, 'Patterson 峰对应原子间向量：约 3000 原子的蛋白对应近 900 万个向量峰，2–3 Å 下重叠成丘陵——但分子内向量（10 Å 内）的取向信息幸存，正是旋转函数的立足点（Rossmann 与 Blow 1962；快速旋转函数 Crowther 1972）。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })

  // ============ 二、Phaser 最大似然判据 ============
  b.panel(710, 132, 660, 420, { title: '二、Phaser 与最大似然判据：LLG／TFZ' })
  b.wtext(730, 182, '当代标准引擎 Phaser（McCoy 等 2007 年）：不问「模型与数据的乘积积分多高」，而问「假定此解为真，观测到这组数据的概率多大」——模型误差以 σ_{A} 概率模型显式吸收（Read 的 sigma-A 框架，亦是第 9 章 sigma-A 加权图的地基），弱信号不被系统误差淹没。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // TFZ 刻度条
  const t0 = 760, tw = 540
  b.rect(t0, 262, tw * 5 / 12, 30, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  b.rect(t0 + tw * 5 / 12, 262, tw * 3 / 12, 30, { fill: C.warnL, stroke: C.warn, sw: 1.4 })
  b.rect(t0 + tw * 8 / 12, 262, tw * 4 / 12, 30, { fill: C.okL, stroke: C.ok, sw: 1.4 })
  ;[0, 5, 8, 12].forEach(v => b.ctext(t0 + (v / 12) * tw, 312, String(v), { size: 10.5, fill: C.mute }))
  b.ctext(t0 + tw * 2.5 / 12, 281, '基本不可信', { size: 11, weight: 700, fill: C.bad })
  b.ctext(t0 + tw * 6.5 / 12, 281, '存疑·需复核', { size: 11, weight: 700, fill: C.warnD })
  b.ctext(t0 + tw * 10 / 12, 281, '大概率正确解', { size: 11, weight: 700, fill: C.okD })
  b.ctext(t0 + tw / 2, 336, 'TFZ（translation function Z-score，平移峰标准化分数）', { size: 10.5, fill: C.sub })
  b.wtext(730, 372, 'LLG（log-likelihood gain，对数似然增益）：衡量「解」比随机噪声假设好多少——正确解应显著为正且随精修上升。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.text(730, 414, '多拷贝递增搜索：', { size: 12, weight: 700, fill: C.ink })
  b.wtext(730, 436, '不对称单位含 n 个分子时先搜信号最强的第一拷贝，固定后在其相位贡献下搜第二个、依次递增——每一步都借已完成拷贝的力量增强下一个的信号，比一次性盲搜 n 个稳健得多。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 500, '分诊口径：TFZ 大于 8 为大概率正确；5–8 存疑需后续复核；小于 5 基本不可信。刚体精修后 R 因子应从约 0.45–0.50 明显回落，R_{free} 原地踏步者直接弃。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 三、模型来源决策树 ============
  b.panel(30, 572, 660, 390, { title: '三、模型来源决策树：同源结构还是 AlphaFold' })
  b.rect(170, 612, 320, 44, { fill: C.accL, stroke: C.acc, sw: 2, rx: 8 })
  b.ctext(330, 640, '与 PDB 已知结构的序列一致性？', { size: 12.5, weight: 700, fill: C.accD })
  const branch = (x: number, w: number, y: number, lines: string[], stroke: string, fill: string) => {
    b.rect(x, y, w, 84, { fill, stroke, sw: 1.8, rx: 8 })
    b.ctext(x + w / 2, y + 22, lines[0], { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(x + w / 2, y + 42, lines[1], { size: 10, fill: C.sub })
    b.ctext(x + w / 2, y + 60, lines[2], { size: 10, fill: C.sub })
  }
  branch(46, 190, 700, ['＞30%', 'PDB 同源结构直接用', '主链偏差＜1.5 Å', '通常一次成功'], C.dna, C.dnaL)
  branch(256, 190, 700, ['20%–30%', '按一致性修剪侧链', '常截到 CB、重置 B', '常需 ensemble'], C.warn, C.warnL)
  branch(466, 180, 700, ['＜20%', 'AlphaFold 模型', 'pLDDT＞90 主链约 1 Å', 'AF2 时代成功大增'], C.pro, C.proL)
  b.line(240, 656, 141, 700, { stroke: C.sub, sw: 1.6 })
  b.line(330, 656, 351, 700, { stroke: C.sub, sw: 1.6 })
  b.line(420, 656, 556, 700, { stroke: C.sub, sw: 1.6 })
  b.rect(186, 826, 340, 56, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 8 })
  b.ctext(356, 848, '无任何模型 → 第 8 章实验相位', { size: 12, weight: 700, fill: C.sub })
  b.ctext(356, 870, 'SAD／MAD 接管（重原子亚结构信号）', { size: 10.5, fill: C.mute })
  b.arrow(330, 784, 330, 824, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.wtext(536, 830, 'AF 模型入 MR 前按 pLDDT 裁剪：＞70 取用、30–70 只取主链、＜30 弃用。', { size: 10, fill: C.mute, maxW: 128, lh: 14 })

  // ============ 四、ensemble 与模型修剪 ============
  b.panel(710, 572, 660, 390, { title: '四、ensemble 降误差与模型修剪' })
  // ensemble 示意：两个略微错开的模型 → 平均
  b.path('M 740,668 C 770,640 830,640 860,668', { fill: 'none', stroke: C.dna, sw: 3, opacity: 0.5 })
  b.path('M 746,676 C 776,648 836,648 866,676', { fill: 'none', stroke: C.rna, sw: 3, opacity: 0.5 })
  b.arrow(880, 660, 930, 660, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.path('M 940,660 C 970,636 1030,636 1060,660', { fill: 'none', stroke: C.pro, sw: 4 })
  b.ctext(800, 700, '两个同源模型（各差约 1 Å）', { size: 10, fill: C.sub })
  b.ctext(1000, 700, '叠合平均（低通滤波）', { size: 10, fill: C.sub })
  b.wtext(730, 728, 'ensemble：成员按保守区叠合、逐原子平均，「摇晃」部分相互抵消——两个各自差约 1 Å 的模型组成的 ensemble，常把有效误差压到一半以下；成员间主链偏差 1–2 Å 为宜，差异过大则平均模型虚胖、旋转峰变钝。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 806, '修剪的哲学是「宁缺毋滥」：错误坐标贡献的错误相位比缺失更伤。Sculptor 与 CHAINSAW 按逐残基一致性决定侧链保留——一致残基保留全长、可变残基截到 CB；统一重置 B 因子 20–30 Å²（过低高估可靠性、过高无差别降权）。Molrep（Vagin 与 Teplyakov，1997 年起）为备用引擎：一个解不动时换引擎重跑是常规操作。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 886, '时代背景：PDB 超二十万条实验结构（2023 年破二十万）＋AlphaFold 数据库 2022 年公开约两亿条预测模型——「已知相似结构」从稀缺变为过剩，MR 成为当代第一路径（典型流程从 MTZ 到候选解常在半小时内）。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: '分子置换的现代实践：两步搜索、Phaser 判据与模型来源',
  subtitle: '旋转函数定取向＋平移函数定位置＋packing 闸门；TFZ＞8 大概率正确、5–8 存疑、LLG 显著为正；同源＞30% 直接用／20–30% 修剪／＜20% 用 AlphaFold（pLDDT＞90 主链约 1 Å）；ensemble 把约 1 Å 误差压到一半以下',
  draw,
})
