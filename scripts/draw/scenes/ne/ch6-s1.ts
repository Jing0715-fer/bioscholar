// ne ch6-s1 突触可塑性与学习记忆 / Hebb 规则与短时程可塑性（39-h 批A）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Hebb 规则与海兔缩鳃反射回路 ============
  b.panel(30, 132, 700, 460, { title: '一、Hebb 规则与海兔缩鳃反射：可拆解的学习电路' })
  b.tag(360, 200, 'Hebb 1949：一起放电的细胞连在一起', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 10 })
  b.wtext(70, 244, '「若细胞 A 的轴突足以兴奋细胞 B，且反复持续地参与引发 B 的放电，则 A 到 B 之间将发生生长或代谢变化。」——因果与时序兼备，是 LTP 与 STDP 的理论源头。', { size: 11.5, fill: C.sub, maxW: 620, lh: 17 })
  // 海兔身体（简化）
  b.ellipse(148, 460, 82, 46, { fill: C.rnaL, fillOp: 0.5, stroke: C.rna, sw: 2 })
  b.ctext(148, 446, '海兔（Aplysia）', { size: 12, weight: 700, fill: C.rnaD })
  b.ctext(148, 464, '中枢神经节约 2 万个神经元', { size: 10, fill: C.mute })
  b.ctext(148, 479, '可对号入座、反复穿刺记录', { size: 10, fill: C.mute })
  // 电击 → 5-HT 中间神经元 → 感觉末梢
  b.ctext(240, 306, '尾部电击', { size: 11, weight: 700, fill: C.bad })
  b.arrow(262, 312, 316, 322, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ellipse(390, 330, 52, 26, { fill: C.proL, fillOp: 0.6, stroke: C.pro, sw: 2 })
  b.ellipse(390, 330, 44, 19, { fill: 'none', stroke: C.pro, sw: 1.1, opacity: 0.6 })
  b.ctext(390, 335, '5-HT 中间神经元', { size: 11, weight: 700, fill: C.proD })
  // 感觉神经元 → 运动神经元
  b.arrow(360, 350, 330, 380, { stroke: C.pro, sw: 2.2, marker: 'pro' })
  b.ctext(312, 375, '释放 5-HT', { size: 10.5, weight: 700, fill: C.proD })
  b.ctext(148, 330, '轻触喷水管', { size: 11, weight: 700, fill: C.warn })
  b.circle(148, 340, 5, { fill: C.warn })
  b.arrow(148, 348, 262, 386, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ellipse(308, 396, 46, 28, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(308, 392, '感觉', { size: 11, weight: 700, fill: C.sub })
  b.ctext(308, 406, '神经元', { size: 11, weight: 700, fill: C.sub })
  b.ellipse(468, 396, 46, 28, { fill: C.panelB, stroke: C.sub, sw: 2 })
  b.ctext(468, 392, '鳃运动', { size: 11, weight: 700, fill: C.sub })
  b.ctext(468, 406, '神经元', { size: 11, weight: 700, fill: C.sub })
  b.arrow(354, 396, 422, 396, { stroke: C.dna, sw: 2.6, marker: 'dna' })
  b.ctext(388, 372, '谷氨酸', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(388, 418, '感觉-运动突触', { size: 10, fill: C.mute })
  b.arrow(514, 396, 586, 396, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.ctext(556, 374, '缩鳃反射', { size: 11.5, weight: 700, fill: '#065f46' })
  // 两条学习注记
  b.rect(252, 448, 226, 66, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(266, 470, '习惯化：同突触变化', { size: 12, weight: 700, fill: C.ink })
  b.wtext(266, 488, '重复无害刺激 → 末梢钙内流↓ → 释放↓，学会「忽略」。', { size: 10.5, fill: C.sub, maxW: 200, lh: 14 })
  b.rect(492, 448, 226, 66, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
  b.text(506, 470, '敏化：异突触调制', { size: 12, weight: 700, fill: C.ink })
  b.wtext(506, 488, '伤害刺激经 5-HT 介入 → 释放↑，学会「警惕」。', { size: 10.5, fill: C.sub, maxW: 200, lh: 14 })

  // ============ 二、敏化的分子级联 ============
  b.panel(750, 132, 620, 460, { title: '二、5-HT–cAMP–PKA 级联：突触前易化一环不落' })
  const casc: Array<[string, string, string]> = [
    ['5-HT 受体（偶联 Gs）', C.pro, C.proL],
    ['腺苷酸环化酶激活 → cAMP 升高', C.acc, C.accL],
    ['PKA 磷酸化末梢钾通道（S 通道）', C.rna, C.rnaL],
    ['K⁺ 外流减少 → 动作电位增宽', C.enz, C.enzL],
    ['Ca²⁺ 内流增多 → 谷氨酸量子释放↑', C.dna, C.dnaL],
    ['运动神经元 EPSP 增大 → 缩鳃增强', C.ok, C.okL],
  ]
  casc.forEach(([label, stroke, fill], i) => {
    const y = 208 + i * 46
    b.rect(790, y, 330, 34, { fill, fillOp: 0.5, stroke, sw: 1.6, rx: 7 })
    b.text(806, y + 22, label, { size: 12, weight: 600, fill: C.ink })
    if (i < casc.length - 1) b.arrow(955, y + 34, 955, y + 46, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  // 长时分支
  b.rect(1150, 208, 196, 214, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(1166, 232, '长时敏化（数天）', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(1166, 254, '多次间隔 5-HT 脉冲 → PKA 催化亚基入核 → 磷酸化 CREB → 启动转录（C/EBP 等即刻早基因）→ 新突触生长，突触数近乎倍增。', { size: 10.5, fill: C.sub, maxW: 166, lh: 15 })
  b.wtext(1150, 452, '蛋白合成抑制剂或 CREB 阻断：取消长时成分而保留短时成分。', { size: 10.5, fill: C.mute, maxW: 200, lh: 15 })
  b.wtext(790, 540, '同一级联还实现联合性：感觉末梢的腺苷酸环化酶为钙-钙调蛋白敏感——「刚活动过、钙尚存」的末梢才被 5-HT 重点放大。', { size: 11, fill: C.sub, maxW: 540, lh: 16 })

  // ============ 三、分子时间连续谱 + 果蝇遗传学 ============
  b.panel(30, 612, 1340, 362, { title: '三、从毫秒到数天的连续谱与果蝇遗传学佐证' })
  // 时间轴（手工绘制避免重叠）
  b.ctext(360, 668, '学习记忆的分子时程连续谱（跨物种保守）', { size: 14.5, weight: 700, fill: C.ink })
  b.line(70, 700, 640, 700, { stroke: C.sub, sw: 3, marker: 'ink' })
  const nodes: Array<[number, string, string, string]> = [
    [106, '释放涨落（毫秒级）', '短时程可塑性', C.mute],
    [340, '磷酸化开关（分钟级）', 'PKA / CaMKII', C.rna],
    [574, '基因表达 · 结构改建', '数小时至数天', C.bad],
  ]
  nodes.forEach(([x, label, sub, c]) => {
    b.circle(x, 700, 6.5, { fill: c })
    b.ctext(x, 726, label, { size: 12, weight: 700, fill: C.ink })
    b.ctext(x, 744, sub, { size: 10.5, fill: C.mute })
  })
  b.ctext(648, 688, '时间 →', { size: 11, fill: C.mute })
  // 果蝇两卡
  b.rect(60, 782, 290, 92, { fill: C.enzL, fillOp: 0.4, stroke: C.enz, sw: 1.5, rx: 9 })
  b.text(76, 808, 'dunce 突变体', { size: 13, weight: 700, fill: C.enzD })
  b.wtext(76, 828, 'cAMP 磷酸二酯酶缺陷 → 降解失灵、浓度长期偏高 → 可塑性反而丧失、学不会任务。', { size: 10.5, fill: C.sub, maxW: 258, lh: 15 })
  b.rect(370, 782, 290, 92, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(386, 808, 'rutabaga 突变体', { size: 13, weight: 700, fill: C.accD })
  b.wtext(386, 828, '腺苷酸环化酶缺陷 → cAMP 生成不足 → 学习不良；该酶受钙-钙调蛋白激活。', { size: 10.5, fill: C.sub, maxW: 258, lh: 15 })
  b.wtext(60, 918, '一升一降两个方向把学习的分子通路锁死在 cAMP 上——「不同结构的脑、同一套分子语法」。', { size: 11, fill: C.mute, maxW: 600, lh: 15 })
  // 习惯化 vs 敏化对照表
  b.table(700, 682, 640, {
    headers: ['项目', '习惯化', '敏化'],
    colW: [110, 250, 280],
    rowH: 42,
    fontSize: 11.5,
    rows: [
      ['刺激性质', '重复无害刺激（轻触喷水管）', '伤害性刺激（尾部电击）'],
      ['突触范畴', '同突触性（突触自身）', '异突触性（5-HT 中间神经元介入）'],
      ['突触变化', '递质释放减少', '递质释放增多'],
      ['分子起点', '末梢钙内流进行性下降', '5-HT–Gs–cAMP–PKA 级联'],
      ['时程', '数分钟至数小时', '数分钟（短时）；数天（长时）'],
      ['行为含义', '学会忽略噪音', '学会记住威胁'],
    ],
  })
}

export default scene({
  title: 'Hebb 规则与短时程可塑性：海兔的习惯化与敏化',
  subtitle: '习惯化＝同突触的钙内流与释放下降；敏化＝异突触的 5-HT–cAMP–PKA 关闭 S 通道、增宽动作电位',
  draw,
})
