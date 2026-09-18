// bi ch12-s3 大语言模型与蛋白质设计（39-i 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、蛋白质语言模型：掩码补全预训练 ============
  b.panel(30, 132, 660, 420, { title: '一、蛋白质语言模型：掩码残基补全的自监督预训练' })
  const seq3: Array<[string, boolean]> = [
    ['M', false], ['K', false], ['T', false], ['?', true], ['L', false], ['A', false], ['?', true],
  ]
  seq3.forEach(([ch, masked], c) => {
    b.rect(60 + c * 42, 198, 40, 44, {
      fill: masked ? C.badL : C.panelB, stroke: masked ? C.bad : C.line, sw: masked ? 1.8 : 1.2,
      dash: masked ? '5 4' : undefined, rx: 6,
    })
    b.ctext(80 + c * 42, 225, ch, { size: 14, weight: 700, fill: masked ? C.bad : C.sub })
  })
  b.ctext(160, 272, '输入：部分残基被掩码', { size: 10.5, fill: C.mute })
  b.ctext(108, 304, '注意力图', { size: 11.5, weight: 700, fill: C.proD })
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 6; r++) {
      b.rect(60 + c * 16, 320 + r * 16, 16, 16, { fill: C.pro, fillOp: 0.12 + (((c * 5 + r * 3 + 2) % 9) / 14) })
    }
  }
  b.arrow(162, 368, 214, 368, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ctext(268, 304, '接触图', { size: 11.5, weight: 700, fill: C.enzD })
  const contacts: Array<[number, number]> = [[1, 4], [4, 1], [2, 5], [5, 2]]
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 6; r++) {
      const on = c === r || contacts.some(([i, j]) => i === c && j === r)
      b.rect(220 + c * 16, 320 + r * 16, 16, 16, {
        fill: on ? C.enz : C.bg, fillOp: on ? 0.65 : 1, stroke: C.line, sw: 1,
      })
    }
  }
  b.wtext(400, 200, '在数亿条自然序列上预训练：掩码残基补全的自监督目标，让结构与功能约束以语言规律的形式被隐式编码。', { size: 11, fill: C.sub, maxW: 260, lh: 15 })
  b.wtext(400, 268, 'ESM 家族参数量至百亿量级；注意力图自发浮现残基接触。', { size: 11, fill: C.sub, maxW: 260, lh: 15 })
  b.wtext(400, 324, 'ESMFold 以单序列直出结构；ProtTrans 嵌入加轻量分类头，成注释标配。', { size: 11, fill: C.sub, maxW: 260, lh: 15 })
  b.wtext(400, 380, '序列即语言：残基 = 字符，进化约束 = 语法。', { size: 11, fill: C.sub, maxW: 260, lh: 15 })
  b.wtext(60, 448, '注意力头无需结构监督，就学会「哪些残基在空间上靠近」——接触图可从注意力图直接读出。', { size: 11, fill: C.sub, maxW: 330, lh: 15 })

  // ============ 二、结构搜索与复合物预测 ============
  b.panel(710, 132, 660, 420, { title: '二、结构搜索与复合物预测：foldseek 与 AlphaFold3' })
  b.text(740, 196, '结构 → 字母序列', { size: 12.5, weight: 700, fill: C.ink })
  b.spline([[760, 250], [800, 228], [840, 268], [880, 236], [910, 282], [950, 252], [980, 296]], { fill: 'none', stroke: C.pro, sw: 3 })
  b.arrow(860, 306, 860, 318, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  ;['A', 'B', 'C', 'A', 'D', 'B'].forEach((ch, c) => b.ctext(745 + c * 38, 336, ch, { size: 13, weight: 700, fill: C.enzD }))
  b.wtext(740, 366, 'foldseek：把结构线性化为字母序列，即可用文本搜索引擎做全库结构搜索——远缘功能注释的第二通道。', { size: 11, fill: C.sub, maxW: 340, lh: 15 })
  b.text(1120, 196, 'AlphaFold3：扩散模型', { size: 12.5, weight: 700, fill: C.ink })
  b.ellipse(1195, 285, 58, 45, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(1195, 290, '蛋白', { size: 12, weight: 700, fill: C.proD })
  b.circle(1285, 252, 18, { fill: C.enzL, stroke: C.enz, sw: 1.8 })
  b.ctext(1285, 256, '配体', { size: 10.5, weight: 700, fill: C.enzD })
  b.dna(1130, 355, 130, { amp: 10, period: 44, stroke: C.dna, sw: 2 })
  b.ctext(1195, 392, '核酸', { size: 10.5, weight: 700, fill: C.dnaD })
  b.wtext(1120, 425, '扩散模型把预测对象扩展到蛋白–配体、核酸等复合物：结构预测与互作预测合流。', { size: 11, fill: C.sub, maxW: 220, lh: 15 })

  // ============ 三、从头设计与定向进化：闭环 ============
  b.panel(30, 576, 660, 404, { title: '三、从头设计与定向进化：闭环的两半' })
  b.rect(80, 630, 200, 56, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(180, 652, '机器生成', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(180, 674, 'AI 设计 / 逆折叠', { size: 10.5, fill: C.sub })
  b.rect(80, 790, 200, 56, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.ctext(180, 812, '湿实验筛选', { size: 12.5, weight: 700, fill: C.enzD })
  b.ctext(180, 834, '表达 · 结构 · 功能', { size: 10.5, fill: C.sub })
  b.rect(400, 710, 200, 56, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(500, 732, '数据回流', { size: 12.5, weight: 700, fill: '#065f46' })
  b.ctext(500, 754, '成败都进训练集', { size: 10.5, fill: C.sub })
  b.arrow(180, 688, 180, 786, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(284, 812, 396, 748, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.arrow(396, 726, 284, 672, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.tag(500, 646, '2024 · 诺贝尔化学奖', { fill: C.warnL, stroke: C.warn, size: 11, weight: 700, tfill: '#92400e', pad: 9 })
  b.wtext(60, 880, '定向进化与从头设计缝合成「机器生成、湿实验筛选、数据回流」的闭环；2024 年诺贝尔化学奖把 Baker（设计）与 Hassabis、Jumper（预测）并列授奖——正是这一闭环的文化加冕。', { size: 11, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 四、生成序列的四关 ============
  b.panel(710, 576, 660, 404, { title: '四、生成序列的四关：验证义务随能力水涨船高' })
  b.text(740, 660, 'AI 生成的候选序列 →', { size: 11.5, weight: 700, fill: C.ink })
  const gates: Array<[number, string, string, string, string]> = [
    [740, '① 表达关', '可表达 / 可纯化', C.accL, C.acc],
    [896, '② 结构关', '折叠符合设计', C.dnaL, C.dna],
    [1052, '③ 功能关', '活性符合设计', C.proL, C.pro],
    [1208, '④ 体内关', '安全 · 药代', C.warnL, C.warn],
  ]
  gates.forEach(([x, t, s, f, st]) => {
    b.rect(x, 680, 132, 64, { fill: f, stroke: st, sw: 1.8, rx: 8 })
    b.ctext(x + 66, 706, t, { size: 12.5, weight: 700, fill: C.ink })
    b.ctext(x + 66, 728, s, { size: 10.5, fill: C.sub })
  })
  b.arrow(874, 712, 892, 712, { stroke: C.sub, sw: 1.8, marker: 'mute' })
  b.arrow(1030, 712, 1048, 712, { stroke: C.sub, sw: 1.8, marker: 'mute' })
  b.arrow(1186, 712, 1204, 712, { stroke: C.sub, sw: 1.8, marker: 'mute' })
  b.text(740, 778, '漏斗：候选序列逐关淘汰', { size: 11.5, weight: 700, fill: C.ink })
  b.polygon([[770, 800], [1310, 800], [1266, 824], [814, 824]], { fill: C.accL, stroke: C.acc, sw: 1.5 })
  b.polygon([[818, 828], [1262, 828], [1218, 852], [862, 852]], { fill: C.dnaL, stroke: C.dna, sw: 1.5 })
  b.polygon([[866, 856], [1214, 856], [1170, 880], [910, 880]], { fill: C.proL, stroke: C.pro, sw: 1.5 })
  b.polygon([[914, 884], [1162, 884], [1118, 908], [958, 908]], { fill: C.enzL, stroke: C.enz, sw: 1.5 })
  b.ctext(1040, 934, '逐关淘汰 · AI 提速、实验把关', { size: 11.5, weight: 700, fill: C.ink })
}

export default scene({
  title: '蛋白质语言模型与蛋白质设计：掩码预训练、结构搜索与设计闭环',
  subtitle: '掩码补全预训练于数亿序列；ESM 百亿参数、注意力浮现接触；foldseek 结构转字母；AF3 扩散预测复合物；闭环获 2024 诺奖',
  draw,
})
