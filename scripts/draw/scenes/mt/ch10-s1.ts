// mt ch10-s1 钙的转运：动物／植物钙工具箱 · 数字标尺 · 解码器对照
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、动物钙工具箱：内质网／肌浆网为库 =================
  b.panel(30, 132, 660, 455, { title: '一、动物钙工具箱：内质网／肌浆网为库' })
  b.wtext(46, 184, '深谷与脉冲之间，信号才有分辨率又有终止：泵精修、交换体大流量清除、通道瞬时释放与补库内流——动物主力钙库在内质网／肌浆网', { size: 10, fill: C.sub, maxW: 615, lh: 18 })
  // 质膜三岗
  b.text(46, 226, '细胞外（Ca^{2+} 约 1–2 mmol/L）', { size: 9.5, fill: C.mute })
  b.bilayer(60, 268, 320)
  const pmProt = (x: number, w: number, name: string, sub: string, fill: string, stroke: string, tfill: string) => {
    b.rect(x, 244, w, 52, { fill, stroke, sw: 1.8, rx: 7 })
    b.ctext(x + w / 2, 266, name, { size: 10.5, weight: 700, fill: tfill })
    b.ctext(x + w / 2, 284, sub, { size: 7.5, fill: C.sub })
  }
  pmProt(84, 56, 'PMCA', 'CaM 调节', C.accL, C.acc, C.accD)
  pmProt(186, 60, 'NCX', '3Na^{+}:1Ca^{2+}', C.proL, C.pro, C.proD)
  pmProt(294, 84, 'CRAC', 'Orai1·STIM1', C.enzL, C.enz, C.enzD)
  // PMCA 排钙（ATP 驱动）
  b.ion(112, 204, 'Ca^{2+}', { r: 11, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.arrow(112, 240, 112, 218, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.tag(152, 208, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9.5, weight: 700 })
  // NCX：3 Na⁺ 入 / 1 Ca²⁺ 出
  ;[198, 218, 238].forEach(x => {
    b.ion(x, 204, 'Na^{+}', { r: 9, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7 })
    b.arrow(x, 214, x, 240, { stroke: C.bad, sw: 1.4, marker: 'bad' })
  })
  b.arrow(226, 308, 226, 298, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.ion(226, 320, 'Ca^{2+}', { r: 11, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  // CRAC 内流
  b.ion(322, 204, 'Ca^{2+}', { r: 11, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 7.5 })
  b.arrow(322, 218, 322, 240, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.etext(404, 226, '库容操控内流', { size: 8.5, weight: 600, fill: C.enzD })
  // 胞质标签
  b.text(46, 316, '细胞质', { size: 9.5, fill: C.mute })
  b.text(46, 338, '静息 [Ca^{2+}] ≈ 100 nM', { size: 9.5, fill: C.mute })
  // 内质网／肌浆网钙库
  b.rect(84, 356, 300, 96, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 10 })
  b.rect(104, 344, 62, 36, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 7 })
  b.ctext(135, 362, 'SERCA', { size: 10, weight: 700, fill: C.rnaD })
  b.rect(216, 344, 62, 36, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(247, 362, 'IP_{3}R', { size: 10, weight: 700, fill: C.dnaD })
  b.rect(316, 344, 62, 36, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 7 })
  b.ctext(347, 362, 'RyR', { size: 10, weight: 700, fill: C.warnD })
  b.text(100, 388, '内质网／肌浆网钙库', { size: 11, weight: 700, fill: C.ink })
  ;[140, 200, 260, 320].forEach(x => b.ion(x, 414, 'Ca^{2+}', { r: 8, fill: '#ffffff', stroke: C.sub, tfill: C.sub, size: 6 }))
  b.text(100, 442, '库内钙高出胞质约 4 个数量级', { size: 9, fill: C.sub })
  // SERCA 收钙 + ATP
  b.ion(120, 310, 'Ca^{2+}', { r: 10, fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 7 })
  b.arrow(120, 322, 120, 342, { stroke: C.rna, sw: 1.6, marker: 'rna' })
  b.tag(162, 308, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9, weight: 700 })
  // IP₃R 放钙
  b.arrow(247, 342, 247, 324, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.ion(247, 312, 'Ca^{2+}', { r: 10, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7 })
  b.tag(290, 312, 'IP_{3}', { fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 9, weight: 700 })
  // RyR 放钙
  b.arrow(347, 342, 347, 324, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  b.ion(347, 312, 'Ca^{2+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  // 右列岗位速查
  b.text(420, 212, '岗位速查', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(420, 236, 'PMCA（质膜 P 型泵）：高亲和·低容量，CaM 结合即解除自抑制——守静息附近的最后精修', { size: 9.5, fill: C.sub, maxW: 258, lh: 23 })
  b.wtext(420, 292, 'SERCA：每 ATP 泵回 2 Ca^{2+}；心肌受磷蛋白抑制、交感 PKA 磷酸化解除→泵速升·舒张加快', { size: 9.5, fill: C.sub, maxW: 258, lh: 23 })
  b.wtext(420, 348, 'NCX：3 Na^{+}:1 Ca^{2+} 大容量外排；缺血时 Na^{+} 积聚＋膜去极化可反转为钙内流——再灌注钙超载的危途', { size: 9.5, fill: C.sub, maxW: 258, lh: 23 })
  b.wtext(420, 428, 'IP_{3}R／RyR（各 3 个同工型）：PLC-IP_{3} 门控与钙诱导钙释放；咖啡因、兰尼碱为著名配体', { size: 9.5, fill: C.sub, maxW: 258, lh: 23 })
  b.wtext(420, 484, 'CRAC：STIM1 感库耗竭→聚合开门 Orai1＝库容操控钙内流；基因缺陷致重症联合免疫缺陷', { size: 9.5, fill: C.sub, maxW: 258, lh: 23 })
  b.wtext(420, 540, '线粒体钙单向体：趁瞬时峰收入基质——产能信号兼缓冲', { size: 9.5, fill: C.sub, maxW: 258, lh: 23 })
  // 底部小结
  b.wtext(46, 478, '泵精修、交换体大流量清除、通道瞬时释放、库耗竭即补——四岗把胞质钙摁在谷底、脉冲后迅速回落；电压门控 Cav 通道的高速内流详见第二章', { size: 10, fill: C.sub, maxW: 352, lh: 23 })
  b.text(46, 556, '钙库之别：动物→内质网／肌浆网；植物→液泡（右图）', { size: 9.5, fill: C.mute })

  // ================= 二、植物钙工具箱：液泡为库 =================
  b.panel(710, 132, 660, 455, { title: '二、植物钙工具箱：液泡为库' })
  b.wtext(726, 184, '主力钙库换成液泡——总钙 1–10 mmol/L 对胞质静息约 100 nM：四个数量级落差，由 CAX「刹车」与内流通道共同维持', { size: 10, fill: C.sub, maxW: 615, lh: 18 })
  b.text(726, 226, '质外体（mM 级）', { size: 9.5, fill: C.mute })
  b.bilayer(740, 268, 330)
  // 质膜三岗
  b.rect(764, 244, 88, 52, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 7 })
  b.ctext(808, 266, 'GLR·CNGC', { size: 9.5, weight: 700, fill: C.dnaD })
  b.ctext(808, 284, '钙内流通道', { size: 7.5, fill: C.sub })
  b.ion(800, 204, 'Ca^{2+}', { r: 11, fill: C.dnaL, stroke: C.dna, tfill: C.dnaD, size: 7.5 })
  b.arrow(800, 218, 800, 240, { stroke: C.dna, sw: 1.6, marker: 'dna' })
  b.rect(890, 244, 60, 52, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 7 })
  b.ctext(920, 266, 'ACA', { size: 10.5, weight: 700, fill: C.accD })
  b.ctext(920, 284, 'P2B 泵出', { size: 7.5, fill: C.sub })
  b.ion(920, 204, 'Ca^{2+}', { r: 11, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7.5 })
  b.arrow(920, 240, 920, 218, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.tag(958, 210, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 9, weight: 700 })
  // ZAR1 抗病小体（五聚体钙通道）
  b.ion(1032, 206, 'Ca^{2+}', { r: 11, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 7.5 })
  b.arrow(1032, 220, 1032, 242, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  ;[[1032, 254], [1018, 262], [1046, 262], [1024, 280], [1040, 280]].forEach(([cx, cy]) =>
    b.circle(cx, cy, 8, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  )
  b.ctext(1032, 314, 'ZAR1 抗病小体（五聚体）', { size: 8, weight: 600, fill: C.enzD })
  // 胞质
  b.text(726, 316, '细胞质·静息 [Ca^{2+}] ≈ 100 nM', { size: 9.5, fill: C.mute })
  // 液泡膜两岗
  b.bilayer(745, 386, 320)
  b.rect(775, 362, 84, 52, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 7 })
  b.ctext(817, 384, 'CAX1/3', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(817, 402, 'Ca^{2+}/H^{+} 反向', { size: 7, fill: C.sub })
  b.ion(830, 336, 'Ca^{2+}', { r: 10, fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 7 })
  b.arrow(830, 348, 830, 361, { stroke: C.enz, sw: 1.6, marker: 'enz' })
  b.rect(900, 362, 64, 52, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 7 })
  b.ctext(932, 384, 'TPC1', { size: 10.5, weight: 700, fill: C.warnD })
  b.ctext(932, 402, 'SV 通道', { size: 7.5, fill: C.sub })
  b.ion(932, 336, 'Ca^{2+}', { r: 10, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.arrow(932, 361, 932, 348, { stroke: C.warn, sw: 1.6, marker: 'warn' })
  // 液泡
  b.rect(755, 402, 310, 88, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 12 })
  b.text(775, 428, '液泡：总钙 1–10 mmol/L', { size: 11, weight: 700, fill: C.okD })
  ;[860, 900, 940, 980].forEach(x => b.ion(x, 452, 'Ca^{2+}', { r: 8, fill: '#ffffff', stroke: C.ok, tfill: C.okD, size: 6 }))
  b.text(775, 478, '（H^{+} 梯度驱动装填）', { size: 8.5, fill: C.okD })
  // 底部小结
  b.wtext(726, 516, 'ECA（P2A 型）守内质网；根尖 CNGC14 维持生长区钙振荡；免疫识别经 CNGC 与 ZAR1 双路进门——「钙激发钙释放」由 TPC1 承担（fou2 突变门控变宽、茉莉酸积累）', { size: 10, fill: C.sub, maxW: 355, lh: 23 })
  // 右列岗位速查
  b.text(1100, 212, '岗位速查', { size: 11.5, weight: 700, fill: C.sub })
  b.wtext(1100, 236, 'CAX 家族：拟南芥 11 个成员；CAX1/3 为液泡膜 Ca^{2+}/H^{+} 反向交换主力——钙信号的「刹车」', { size: 9.5, fill: C.sub, maxW: 250, lh: 23 })
  b.wtext(1100, 316, 'ACA／ECA：植物版 P2B／P2A 型钙泵，覆盖质膜与内体膜的精细回输', { size: 9.5, fill: C.sub, maxW: 250, lh: 23 })
  b.wtext(1100, 372, 'GLR／CNGC：质膜钙内流两大家族——GLR 谷氨酸样、CNGC 环核苷酸门控', { size: 9.5, fill: C.sub, maxW: 250, lh: 23 })
  b.wtext(1100, 428, 'TPC1：慢 vacuolar（SV）通道，钙激活后自液泡放钙＝「钙激发钙释放」；fou2 为经典材料', { size: 9.5, fill: C.sub, maxW: 250, lh: 23 })
  b.wtext(1100, 508, 'ZAR1 抗病小体（2019 年解析）：抗病蛋白感知效应子后组装五聚体插入质膜成钙通道，触发超敏反应性细胞死亡', { size: 9.5, fill: C.sub, maxW: 250, lh: 23 })
  b.wtext(1100, 568, '「通道由受体亲自组装」——范式级发现', { size: 9.5, fill: C.sub, maxW: 250, lh: 23 })

  // ================= 三、钙信号数字标尺：深谷与脉冲 =================
  b.panel(30, 600, 660, 385, { title: '三、钙信号数字标尺：深谷与脉冲' })
  b.text(62, 648, '纵轴 log_{10}[Ca^{2+}]（mol/L）', { size: 9, fill: C.mute })
  b.axis(60, 800, 310, 148, {
    grid: false,
    xticks: [[0, '刺激'], [1, '时间→']],
    yticks: [[0, '10^{-8}'], [0.167, '10^{-7}'], [0.333, '10^{-6}'], [0.5, '10^{-5}'], [0.667, '10^{-4}'], [0.833, '10^{-3}'], [1, '10^{-2}']],
  })
  ;[0.167, 0.333, 0.5, 0.667, 0.833].forEach(fy => {
    const ty = 800 - fy * 148
    b.line(60, ty, 370, ty, { stroke: C.faint, sw: 0.9, dash: '4 5', opacity: 0.55 })
  })
  b.curve(60, 800, 310, 148, [[0, 0.167], [0.05, 0.19], [0.1, 0.35], [0.14, 0.58], [0.22, 0.62], [0.32, 0.45], [0.5, 0.3], [0.75, 0.23], [1, 0.185]], { smooth: true, stroke: C.bad, sw: 2.6, label: '钙峰 1–10 μM', labelAt: [0.13, 0.75] })
  b.text(210, 792, '静息谷底 ≈ 100 nM', { size: 9.5, fill: C.mute })
  // 右侧浓度地形速查表
  b.ctext(530, 656, '浓度地形速查', { size: 14.5, weight: 700, fill: C.ink })
  b.table(390, 668, 280, {
    headers: ['隔室', '浓度', '对静息'],
    colW: [84, 118, 78], rowH: 33, fontSize: 9.5,
    rows: [
      ['胞质·静息', '≈10^{-7} M（100 nM）', '1×'],
      ['胞质·刺激峰', '1–10 μM', '10–100×'],
      ['ER／肌浆网腔', '高出 3–4 个数量级', '≈10^{4}×'],
      ['液泡（植物）', '总钙 1–10 mmol/L', '≈10^{4–5}×'],
      ['细胞外液', '1–2 mmol/L', '≈10^{4}×'],
    ],
  })
  b.wtext(46, 880, '四个数量级落差让钙信号既有分辨率（谷底灵敏）又有终止（回落迅速）：静息由泵与交换体持续清扫，脉冲由通道毫秒级开门，收尾交给 SERCA／PMCA（动物）与 CAX（植物）', { size: 9.5, fill: C.sub, maxW: 320, lh: 21 })
  b.wtext(390, 905, '「钙签名」：特定刺激诱发特定幅度、频率与空间形态的钙峰——根毛尖端梯度、免疫应答振荡、保卫细胞关闭气孔的钙反复，各有指纹；解码器见右下', { size: 9.5, fill: C.sub, maxW: 275, lh: 21 })

  // ================= 四、解码器对照：读钙的机器 =================
  b.panel(710, 600, 660, 385, { title: '四、解码器对照：读钙的机器' })
  b.wtext(726, 648, '钙尖峰只是电报，读报的机器两侧不同——动物以 CaM 为中心的单分子传感器，植物演化出 CDPK 与 CBL-CIPK 传感器组合', { size: 10, fill: C.sub, maxW: 615, lh: 18 })
  // 动物区
  b.rect(726, 664, 290, 232, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 10 })
  b.text(740, 690, '动物：CaM 中心', { size: 12, weight: 700, fill: C.accD })
  b.ellipse(800, 728, 26, 17, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ellipse(868, 728, 26, 17, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.line(826, 728, 842, 728, { stroke: C.acc, sw: 5, opacity: 0.6 })
  ;[778, 822, 866].forEach(x => b.ion(x, 704, 'Ca^{2+}', { r: 7, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 5.5 }))
  b.ctext(834, 762, 'CaM（钙调蛋白）', { size: 10.5, weight: 700, fill: C.accD })
  b.arrow(810, 747, 802, 788, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(858, 747, 866, 788, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.rect(740, 790, 128, 50, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 8 })
  b.ctext(804, 808, 'CaMKII', { size: 11, weight: 700, fill: C.ink })
  b.ctext(804, 826, '自磷酸化·频率解码', { size: 8, fill: C.sub })
  b.rect(884, 790, 118, 50, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 8 })
  b.ctext(943, 808, '钙神经素', { size: 11, weight: 700, fill: C.ink })
  b.ctext(943, 826, '磷酸酶·免疫应答', { size: 8, fill: C.sub })
  b.wtext(740, 856, 'CaM 感知钙后激活一大族效应器；CaMKII 以自磷酸化「记住」脉冲频率——频率编码的解码器', { size: 9, fill: C.sub, maxW: 262, lh: 20 })
  // 植物区
  b.rect(1030, 664, 325, 232, { fill: '#ffffff', stroke: C.line, sw: 1.5, rx: 10 })
  b.text(1044, 690, '植物：CDPK＋CBL-CIPK 网络', { size: 12, weight: 700, fill: C.okD })
  b.rect(1044, 706, 160, 46, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 8 })
  b.ctext(1124, 724, 'CDPK', { size: 11, weight: 700, fill: C.dnaD })
  b.ctext(1124, 742, '感受＋激酶同分子', { size: 8, fill: C.sub })
  b.rect(1224, 706, 118, 40, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(1283, 724, 'CBL 传感器', { size: 10, weight: 700, fill: C.okD })
  b.ctext(1283, 740, '解码钙签名', { size: 8, fill: C.sub })
  b.arrow(1283, 746, 1283, 758, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.rect(1224, 758, 118, 40, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(1283, 776, 'CIPK 激酶', { size: 10, weight: 700, fill: C.okD })
  b.ctext(1283, 792, '招募至膜上', { size: 8, fill: C.sub })
  b.arrow(1283, 798, 1283, 810, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.rect(1224, 810, 118, 40, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 8 })
  b.ctext(1283, 828, '转运蛋白', { size: 10, weight: 700, fill: C.okD })
  b.ctext(1283, 844, '磷酸化开关', { size: 8, fill: C.sub })
  b.wtext(1044, 776, '招牌案例：盐胁迫 SOS3（CBL）解码钙振荡→激活 SOS2（CIPK）→磷酸化 SOS1 Na^{+}/H^{+} 反向转运体（第十二章续写）', { size: 9, fill: C.sub, maxW: 168, lh: 20 })
  b.wtext(1044, 856, 'CBL 解码签名的幅度·频率·时长；根瘤菌识别的核钙振荡由核膜通道产生、CCaMK 解码', { size: 9, fill: C.sub, maxW: 168, lh: 20 })
  // 收束横幅
  b.rect(726, 912, 630, 56, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 9 })
  b.wtext(742, 934, '核心差异：动物的钙信号读「单分子传感器」（CaM 中心解码），植物的钙信号读「传感器组合」（CBL 分工解码＋CIPK 靶向膜上机器）——同一封信，两套密码本', { size: 9.5, fill: C.dnaD, maxW: 600, lh: 21 })
}

export default scene({
  title: '钙的转运：深谷、脉冲与两套密码本',
  subtitle: '胞质静息约 100 nM、刺激峰 1–10 μM；动物以 PMCA（CaM 调节）·SERCA（2 Ca^{2+}/ATP·受磷蛋白）·NCX（3Na^{+}:1Ca^{2+}）·IP_{3}R/RyR·CRAC（Orai1-STIM1 库容操控）守内质网／肌浆网钙库，植物以 CAX 家族 11 成员刹车、GLR/CNGC 内流、TPC1 钙释放与 ZAR1 抗病小体守液泡（1–10 mmol/L）；解码器分野：动物 CaM-CaMK 对植物 CBL-CIPK 与 CDPK',
  draw,
})
