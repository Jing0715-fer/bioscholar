// mb ch12-s5 端粒、肿瘤微环境与癌症治疗前沿（39-b2 收尾轮）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、端粒与复制永生化 ============
  b.panel(30, 132, 1340, 250, { title: '一、端粒与复制永生化：跨越衰老与危机两道屏障' })
  const stage = (x: number, fill: string, stroke: string, t: string, s1: string, s2: string) => {
    b.rect(x, 210, 270, 84, { fill, stroke, sw: 1.8, rx: 9, fillOp: 0.6 })
    b.ctext(x + 135, 234, t, { size: 12.5, weight: 700, fill: stroke })
    b.ctext(x + 135, 256, s1, { size: 9.5, fill: C.sub })
    b.ctext(x + 135, 276, s2, { size: 9.5, fill: C.mute })
  }
  stage(60, C.okL, '#065f46', '正常体细胞', '缺乏端粒酶活性', '每次分裂端粒缩短')
  stage(400, C.warnL, '#9a3412', '复制衰老（第一道屏障）', 'p53 / p16 介导', 'Hayflick 极限')
  stage(740, C.badL, '#991b1b', '危机 crisis（第二道屏障）', '端粒融合-断裂-桥（BFB）', '多数细胞死亡')
  stage(1080, C.dnaL, C.dnaD, '复制永生化', '约 85%～90% 重激活端粒酶', '（TERT 启动子突变常见）')
  b.arrow(334, 252, 396, 252, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(365, 234, '端粒逐次缩短', { size: 9.5, weight: 600, fill: C.mute })
  b.arrow(674, 252, 736, 252, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.ctext(705, 234, 'p53 / Rb 失活绕过', { size: 9.5, weight: 600, fill: C.mute })
  b.arrow(1014, 252, 1076, 252, { stroke: C.dna, sw: 2.2, marker: 'dna' })
  b.ctext(1045, 234, '端粒酶重新激活', { size: 9.5, weight: 600, fill: C.dnaD })
  b.ctext(1045, 312, '其余肿瘤经 ALT（重组机制）延长端粒', { size: 9.5, fill: C.mute })
  b.ctext(1215, 296, 'Hallmark 之一', { size: 9.5, weight: 700, fill: C.dnaD })
  b.wtext(60, 340, '端粒酶活性可经 TRAP 实验检测；端粒长度与 TERT 表达是预后与风险分层指标——靶向端粒酶的 imetelestat 已在骨髓增殖性疾病中显效。', { size: 10.5, fill: C.sub, maxW: 1290, lh: 15 })

  // ============ 二、肿瘤微环境 ============
  b.panel(30, 402, 660, 558, { title: '二、肿瘤微环境（TME）：一个「篡改的器官」' })
  // 癌细胞
  b.ellipse(350, 610, 115, 80, { fill: C.badL, stroke: C.bad, sw: 2.2, fillOp: 0.55 })
  b.circle(322, 596, 22, { fill: '#ffffff', stroke: C.pro, sw: 1.6 })
  b.circle(382, 626, 13, { fill: '#ffffff', stroke: C.pro, sw: 1.4 })
  b.ctext(350, 672, '癌细胞（克隆群体）', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(350, 566, '缺氧 · HIF-1α↑', { size: 9.5, weight: 700, fill: C.bad })
  // 血管生成（右上）
  b.ctext(535, 466, '血管生成：缺氧 → HIF-1α → VEGF（Folkman 假说）', { size: 9.5, weight: 600, fill: C.bad })
  b.rect(430, 478, 210, 26, { fill: '#ffffff', stroke: C.bad, sw: 2, rx: 13 })
  ;[460, 500, 540, 580].forEach((x) => b.circle(x, 491, 7, { fill: C.badL, stroke: C.bad, sw: 1.2 }))
  b.path('M480,504 q-10,26 -4,46', { stroke: C.bad, sw: 2, fill: 'none' })
  b.path('M560,504 q12,26 6,46', { stroke: C.bad, sw: 2, fill: 'none' })
  b.arrow(428, 560, 486, 508, { stroke: C.bad, sw: 1.8, marker: 'bad' })
  b.ctext(442, 534, 'VEGF↑', { size: 8.5, weight: 700, fill: C.bad })
  b.wtext(472, 574, '贝伐珠单抗（抗 VEGF）与多种 TKI 已用于临床', { size: 9, fill: C.sub, maxW: 190, lh: 13 })
  // CAF（左）
  b.ellipse(110, 540, 40, 22, { fill: C.accL, stroke: C.acc, sw: 1.8 })
  b.ctext(110, 536, 'CAF', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(110, 552, '癌症相关成纤维细胞', { size: 8, fill: C.accD })
  b.arrow(152, 548, 232, 580, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.wtext(56, 600, 'MMP 重塑胞外基质 → 促侵袭', { size: 9, weight: 600, fill: C.accD, maxW: 180, lh: 13 })
  // 免疫（右下）
  b.circle(560, 780, 26, { fill: '#ffffff', stroke: C.ok, sw: 2 })
  b.ctext(560, 776, 'T 细胞', { size: 10, weight: 700, fill: '#065f46' })
  b.rect(582, 762, 24, 15, { fill: C.okL, stroke: C.ok, sw: 1.2, rx: 3 })
  b.ctext(594, 773, 'PD-1', { size: 7, weight: 700, fill: '#065f46' })
  b.rect(448, 740, 26, 15, { fill: C.badL, stroke: C.bad, sw: 1.2, rx: 3 })
  b.ctext(461, 751, 'PD-L1', { size: 7, weight: 700, fill: '#991b1b' })
  b.line(578, 770, 478, 748, { stroke: C.mute, sw: 2, dash: '6 5' })
  b.line(520, 754, 540, 774, { stroke: C.bad, sw: 2.5 })
  b.line(540, 754, 520, 774, { stroke: C.bad, sw: 2.5 })
  b.wtext(468, 822, '免疫编辑与逃逸：PD-L1 表达 · 抗原丢失 · TGF-β 分泌', { size: 9.5, fill: C.sub, maxW: 200, lh: 14 })
  // 炎症（左下）
  b.rect(56, 780, 214, 60, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 8, fillOp: 0.6 })
  b.ctext(163, 802, '慢性炎症', { size: 11.5, weight: 700, fill: '#78350f' })
  b.wtext(68, 820, 'NF-κB / STAT3——胃炎→肠化→癌序列', { size: 9, fill: '#78350f', maxW: 190, lh: 13 })
  b.wtext(56, 900, '肿瘤是「篡改的器官」：癌细胞 + 基质 + 免疫 + 血管构成的生态系统——微环境的每个组分皆可成为治疗靶点。', { size: 10.5, weight: 600, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、Warburg 效应与免疫检查点 ============
  b.panel(710, 402, 660, 272, { title: '三、Warburg 效应与免疫检查点抑制剂' })
  b.ctext(905, 440, 'Warburg 效应（有氧糖酵解）', { size: 11.5, weight: 700, fill: C.bad })
  b.ion(756, 484, '葡萄糖', { r: 21, fill: C.okL, stroke: C.ok, tfill: '#065f46', size: 8.5 })
  b.arrow(780, 484, 826, 484, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.rect(830, 456, 150, 56, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 9, fillOp: 0.55 })
  b.ctext(905, 480, '癌细胞', { size: 11.5, weight: 700, fill: C.bad })
  b.ctext(905, 500, '糖酵解为主', { size: 9.5, fill: C.sub })
  b.arrow(982, 470, 1024, 470, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(1048, 470, '乳酸', { r: 19, fill: C.warnL, stroke: C.warn, tfill: '#78350f', size: 9 })
  b.arrow(982, 498, 1024, 498, { stroke: C.ok, sw: 1.8, marker: 'ok' })
  b.ctext(1064, 502, '少量 ATP（快速产能）', { size: 9.5, weight: 600, fill: '#065f46' })
  b.ion(756, 545, 'O₂', { r: 14, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 9 })
  b.ctext(800, 549, '氧存在（有氧条件）', { size: 9, fill: C.accD })
  b.wtext(726, 576, '即使在有氧条件下仍以糖酵解供能（葡萄糖→乳酸）——支撑快速增殖的合成前体需求；FDG-PET 正是利用葡萄糖类似物的摄取显像肿瘤。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.text(726, 628, '免疫检查点抑制剂：解除免疫刹车', { size: 11.5, weight: 700, fill: C.ink })
  b.wtext(726, 648, '抗 PD-1（纳武利尤单抗 / 帕博利珠单抗）与抗 CTLA-4（伊匹木单抗）解除刹车，实现晚期肿瘤长期缓解——2018 年诺贝尔生理学或医学奖。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、治疗范式的演进 ============
  b.panel(710, 694, 660, 266, { title: '四、治疗范式的演进：从细胞毒到精准预防' })
  b.stairs(740, 726, 580, 170, ['细胞毒', '靶向治疗', '免疫治疗', '精准预防'], { fill: C.accL, stroke: C.acc, size: 13 })
  const reps: [number, string][] = [
    [742, '烷化剂 · 抗代谢物（非特异杀伤增殖细胞）'],
    [887, '伊马替尼 · 赫赛汀 · 奥拉帕尼（抑制驱动基因）'],
    [1032, 'PD-1 / CTLA-4 抑制剂 · CAR-T（解除免疫刹车）'],
    [1177, 'BRCA 携带者预防性手术 · HPV 疫苗（遗传风险干预）'],
  ]
  reps.forEach(([x, s]) => b.wtext(x, 910, s, { size: 9.5, fill: C.sub, maxW: 135, lh: 13.5 }))
  b.ctext(1030, 952, '分子生物学把「不治之症」转化为一系列可管理的慢性分子疾病', { size: 10.5, weight: 600, fill: C.accD })
}

export default scene({
  title: '端粒、肿瘤微环境与癌症治疗前沿',
  subtitle: '端粒缩短触发衰老与危机两道屏障——约 85%～90% 肿瘤重激活端粒酶（TERT 启动子突变）获永生化，其余走 ALT；Warburg 有氧糖酵解支撑合成代谢（FDG-PET 显像）；VEGF-HIF 轴血管生成与 PD-1 / CTLA-4 检查点抑制剂（2018 诺奖）；治疗范式从细胞毒向靶向、免疫与精准预防逐级演进',
  draw,
})
