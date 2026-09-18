// bc ch11-s5 核苷酸的分解代谢与抗代谢物（39-a 最终收尾）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、嘌呤分解：终产物尿酸与痛风 ============
  b.panel(30, 132, 700, 430, { title: '一、嘌呤分解：终产物尿酸与痛风' })
  b.text(56, 180, '核苷酸 →（核苷酸酶）→ 核苷 →（核苷磷酸化酶）→ 碱基：', { size: 10, fill: C.mute })
  // AMP 分解主链
  b.rect(56, 196, 100, 38, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(106, 220, 'AMP', { size: 12.5, weight: 700, fill: C.ink })
  b.arrow(156, 215, 190, 215, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(192, 196, 100, 38, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(242, 220, '腺嘌呤', { size: 11.5, weight: 600, fill: C.ink })
  b.arrow(292, 215, 326, 215, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(309, 190, '脱氨', { size: 9, fill: C.mute })
  b.rect(328, 196, 100, 38, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(378, 220, '次黄嘌呤', { size: 11.5, weight: 600, fill: C.ink })
  b.arrow(428, 215, 462, 215, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.rect(464, 196, 84, 38, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(506, 220, '黄嘌呤', { size: 11.5, weight: 600, fill: C.ink })
  b.arrow(548, 215, 582, 215, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.rect(584, 196, 106, 38, { fill: C.badL, fillOp: 0.65, stroke: C.bad, sw: 1.8, rx: 7 })
  b.ctext(637, 220, '尿酸', { size: 13, weight: 700, fill: C.bad })
  // 两步黄嘌呤氧化酶
  b.tag(446, 268, '黄嘌呤氧化酶', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
  b.tag(566, 268, '黄嘌呤氧化酶', { fill: C.enzL, stroke: C.enz, size: 9.5, weight: 700, tfill: C.enzD, pad: 5 })
  // 别嘌呤醇：自杀底物抑制
  b.line(490, 308, 456, 284, { stroke: C.bad, sw: 1.6, dash: '4 4' })
  b.line(522, 308, 556, 284, { stroke: C.bad, sw: 1.6, dash: '4 4' })
  b.ctext(506, 300, '自杀底物式抑制', { size: 8.5, weight: 700, fill: C.bad })
  b.tag(506, 324, '别嘌呤醇', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.bad, pad: 6 })
  b.wtext(430, 350, '被黄嘌呤氧化酶氧化为别黄嘌呤后与酶紧密结合；黄嘌呤 / 次黄嘌呤水溶性高，可经肾排出。', { size: 9, fill: C.sub, maxW: 258, lh: 13 })
  // 尿酸身份说明
  b.wtext(56, 300, '尿酸（2,6,8-三氧嘌呤）：人类嘌呤分解的终产物——缺尿酸酶，不再分解；本身是血浆重要抗氧化剂（进化的权衡）。', { size: 10.5, fill: C.ink, maxW: 360, lh: 15 })
  // 痛风
  b.rect(56, 396, 634, 84, { fill: C.badL, fillOp: 0.45, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(72, 420, '尿酸溶解度低（钠盐近饱和，pH 降低时更差）→ 尿酸盐结晶沉积 → 痛风', { size: 12, weight: 700, fill: C.bad })
  b.wtext(72, 444, '第一跖趾关节最常累：中性粒细胞吞噬结晶引发炎症风暴 → 急性关节炎 · 痛风石 · 肾病与尿路结石。', { size: 10.5, fill: C.sub, maxW: 600, lh: 15 })
  b.text(56, 500, '诱因：高嘌呤饮食 · 酒精（ATP 降解加速）· 果糖（AMP 脱氨增加）· Lesch-Nyhan · 肿瘤溶解综合征', { size: 9.5, fill: C.mute })
  b.wtext(56, 522, '治疗：别嘌呤醇 / 非布司他（抑制生成）· 丙磺舒 / 苯溴马隆（促排）· 急性期 NSAIDs / 秋水仙碱（抑制中性粒细胞微管）。', { size: 9.5, fill: C.sub, maxW: 640, lh: 13.5 })

  // ============ 二、嘧啶分解：环完全打开，产物水溶 ============
  b.panel(750, 132, 620, 430, { title: '二、嘧啶分解：环被完全打开，产物水溶' })
  b.rect(770, 200, 150, 42, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(845, 217, '胞嘧啶 / 尿嘧啶', { size: 11.5, weight: 600, fill: C.ink })
  b.ctext(845, 234, '（C · U）', { size: 9, fill: C.mute })
  b.arrow(920, 221, 966, 221, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(944, 206, '开环', { size: 9.5, fill: C.mute })
  b.rect(970, 200, 120, 42, { fill: C.okL, fillOp: 0.6, stroke: C.ok, sw: 1.6, rx: 7 })
  b.ctext(1030, 226, 'β-丙氨酸', { size: 12, weight: 700, fill: '#065f46' })
  b.text(1104, 226, '+ CO₂ + NH₃', { size: 11, fill: C.sub })
  b.rect(770, 268, 150, 42, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 7 })
  b.ctext(845, 285, 'T（胸腺嘧啶）', { size: 11.5, weight: 600, fill: C.ink })
  b.ctext(845, 302, '（T）', { size: 9, fill: C.mute })
  b.arrow(920, 289, 966, 289, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.ctext(944, 274, '开环', { size: 9.5, fill: C.mute })
  b.rect(970, 268, 120, 42, { fill: C.okL, fillOp: 0.6, stroke: C.ok, sw: 1.6, rx: 7 })
  b.ctext(1030, 294, 'β-氨基异丁酸', { size: 11, weight: 700, fill: '#065f46' })
  b.text(1104, 294, '+ CO₂ + NH₃', { size: 11, fill: C.sub })
  b.wtext(766, 344, '嘧啶环被完全打开：C / U → β-丙氨酸，T → β-氨基异丁酸（均伴 CO₂ 与 NH₃）——产物水溶性好，经尿排出或进一步代谢；放化疗后 DNA 大量降解，尿中 β-氨基异丁酸增多。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  // 嘌呤 vs 嘧啶命运对照
  b.rect(770, 400, 280, 96, { fill: C.badL, fillOp: 0.4, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(786, 426, '嘌呤：环保留', { size: 12.5, weight: 700, fill: C.bad })
  b.wtext(786, 450, '终产物尿酸溶解度低 → 结晶沉积 → 痛风', { size: 10.5, fill: C.sub, maxW: 248, lh: 15 })
  b.rect(1064, 400, 280, 96, { fill: C.okL, fillOp: 0.45, stroke: C.ok, sw: 1.6, rx: 9 })
  b.text(1080, 426, '嘧啶：环打开', { size: 12.5, weight: 700, fill: '#065f46' })
  b.wtext(1080, 450, 'β-氨基酸水溶性好 → 不形成结晶', { size: 10.5, fill: C.sub, maxW: 248, lh: 15 })
  b.wtext(766, 530, '嘌呤分解「止步于尿酸」正是痛风的生化根源；嘧啶分解彻底，无结晶之虞。', { size: 11, weight: 700, fill: C.ink, maxW: 580, lh: 15 })

  // ============ 三、抗代谢物对照 ============
  b.panel(30, 566, 1340, 414, { title: '三、抗代谢物：结构类似物「以假乱真」（竞争性抑制或掺入）' })
  b.table(60, 620, 1280, {
    headers: ['抗代谢物', '类似物', '靶点 / 机制', '临床应用'],
    colW: [200, 200, 560, 320],
    rowH: 42,
    fontSize: 13,
    rows: [
      ['磺胺', '对氨基苯甲酸（PABA）', '竞争性抑制细菌二氢叶酸合成酶', '抗菌（选择性毒性）'],
      ['氨甲蝶呤（MTX）', '叶酸', '抑制二氢叶酸还原酶 → dTMP 生成 ↓', '抗肿瘤 · 免疫抑制'],
      ['6-巯基嘌呤（6-MP）', '次黄嘌呤', '阻断 IMP 从头合成与 AMP / GMP 相互转变', '白血病'],
      ['5-氟尿嘧啶（5-FU）', '尿嘧啶', '转变为 FdUMP → 抑制胸苷酸合酶', '消化道肿瘤'],
      ['阿糖胞苷（Ara-C）', '胞苷', '掺入 DNA · 抑制 DNA 聚合酶', '白血病'],
    ],
  })
  b.rect(60, 890, 1280, 74, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(76, 914, '选择性毒性的教科书对照：磺胺 vs MTX', { size: 12, weight: 700, fill: C.accD })
  b.wtext(76, 936, '细菌需自 PABA 合成叶酸，人类直接从膳食获取叶酸 → 磺胺抑菌不伤人；MTX 抑制人二氢叶酸还原酶，杀伤快速增殖细胞——骨髓与肿瘤同样敏感，故大剂量化疗后以亚叶酸钙「救援」（叶酸 rescue）。', { size: 10.5, fill: C.sub, maxW: 1240, lh: 15 })
}

export default scene({
  title: '嘌呤止于尿酸，嘧啶开环水溶：分解命运与抗代谢物',
  subtitle: '嘌呤分解止于尿酸（缺尿酸酶）→ 溶解度低致痛风，别嘌呤醇自杀抑制黄嘌呤氧化酶；嘧啶开环水溶（β-丙氨酸）；抗代谢物：磺胺·MTX·6-MP·5-FU·Ara-C',
  draw,
})
