// ph ch5-s4 自主神经与睡眠：双栏解剖·受体效应表·睡眠架构
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、交感与副交感的解剖架构（双栏对照） ============
  b.panel(30, 132, 660, 440, { title: '一、交感与副交感的解剖架构（双栏对照）' })
  b.tag(195, 186, '交感：胸腰段 T1–L2', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11.5, weight: 700, pad: 10 })
  b.tag(515, 186, '副交感：颅骶段 III/VII/IX/X + S2–4', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11.5, weight: 700, pad: 10 })
  // —— 交感柱 ——
  b.rect(105, 214, 180, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 7 })
  b.ctext(195, 238, '脊髓中间外侧柱（T1–L2）', { size: 10, weight: 600, fill: C.sub })
  b.arrow(195, 254, 195, 278, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(210, 272, '节前（短）· ACh → N', { size: 9.5, weight: 600, fill: C.badD })
  b.line(195, 303, 195, 350, { stroke: C.warn, sw: 1.6 })
  b.circle(195, 292, 11, { fill: C.warnL, stroke: C.warn, sw: 1.8 })
  b.circle(195, 322, 8, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.circle(195, 344, 8, { fill: C.warnL, stroke: C.warn, sw: 1.6 })
  b.text(212, 296, '椎旁交感链 · 椎前节', { size: 9.5, weight: 600, fill: C.warnD })
  b.arrow(195, 356, 195, 380, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(210, 374, '节后（长）· NE → α/β', { size: 9.5, weight: 600, fill: C.badD })
  b.rect(105, 384, 180, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 7 })
  b.ctext(195, 408, '效应器：心 · 支气管 · 血管 · 内脏', { size: 10, weight: 600, fill: C.sub })
  b.wtext(60, 452, '汗腺例外：节后纤维释放 ACh 作用于 M 受体（发汗）；骨骼肌的交感胆碱能舒血管纤维同理', { size: 10, fill: C.sub, maxW: 270, lh: 15 })
  b.wtext(60, 492, '肾上腺髓质 = 改良交感神经节：节前 ACh 直接支配嗜铬细胞，按约 8 : 2 分泌肾上腺素与 NE 入血', { size: 10, fill: C.sub, maxW: 270, lh: 15 })
  b.wtext(60, 532, '发散度大：一个节前对多个节后 → 全身性动员（战斗或逃跑）', { size: 10, fill: C.sub, maxW: 270, lh: 15 })
  // —— 副交感柱 ——
  b.rect(390, 214, 250, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 7 })
  b.ctext(515, 238, '脑神经核 III·VII·IX·X + 骶髓 S2–4', { size: 10, weight: 600, fill: C.sub })
  b.text(390, 264, 'X 迷走独挑大梁：胸腹腔脏器至横结肠左曲', { size: 9.5, fill: C.mute })
  b.arrow(515, 280, 515, 304, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(530, 298, '节前（长）· ACh → N', { size: 9.5, weight: 600, fill: C.accD })
  b.circle(515, 318, 10, { fill: C.okL, stroke: C.ok, sw: 1.8 })
  b.text(530, 322, '器官旁 / 壁内神经节', { size: 9.5, weight: 600, fill: C.okD })
  b.arrow(515, 332, 515, 356, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(530, 350, '节后（短）· ACh → M', { size: 9.5, weight: 600, fill: C.accD })
  b.rect(390, 360, 250, 40, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 7 })
  b.ctext(515, 384, '效应器：瞳孔括约肌 · 腺体 · 胃肠 · 膀胱', { size: 10, weight: 600, fill: C.sub })
  b.wtext(390, 428, '作用局限而精准：瞳孔缩小、心率减慢、消化推进、膀胱排空（休息与消化）', { size: 10, fill: C.sub, maxW: 265, lh: 15 })
  b.wtext(390, 468, '分布较局限：皮肤血管、汗腺、肾上腺髓质等无副交感分布', { size: 10, fill: C.sub, maxW: 265, lh: 15 })
  b.wtext(390, 508, '唾液腺双重支配互补：交感泌浓稠黏液、副交感泌大量稀薄浆液——互补而非对抗', { size: 10, fill: C.sub, maxW: 265, lh: 15 })

  // ============ 二、效应器官的受体与代表效应 ============
  b.panel(710, 132, 660, 440, { title: '二、效应器官的受体与代表效应' })
  b.table(730, 200, 620, {
    headers: ['效应器官', '交感效应（主要受体）', '副交感效应（M）'],
    colW: [110, 285, 225], rowH: 40, fontSize: 11,
    title: '节前一律 ACh（N 受体）；节后递质与效应如下',
    rows: [
      ['窦房结', '心率加快（β_{1}）', '心率减慢'],
      ['心肌', '收缩增强（β_{1}）', '收缩略减弱'],
      ['支气管', '平滑肌舒张（β_{2}）', '平滑肌收缩'],
      ['瞳孔', '散大（α_{1}·开大肌）', '缩小（括约肌）'],
      ['胃肠', '运动减弱·括约肌收紧', '运动增强·括约肌舒张'],
      ['汗腺', '发汗（胆碱能·M 受体）', '无分布'],
      ['骨骼肌血管', '舒张（β_{2} 与胆碱能）', '无分布'],
    ],
  })
  b.wtext(730, 548, 'α_{2} 为突触前自身受体（抑制 NE 释放）；β_{3} 促脂肪分解——同一递质经不同受体亚型在不同器官产生相反效应', { size: 10, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 三、睡眠架构：约 90 分钟周期的螺旋 ============
  b.panel(30, 592, 1340, 390, { title: '三、睡眠架构：约 90 分钟周期的螺旋下降与回升' })
  // —— 左：睡眠图（hypnogram） ——
  b.etext(142, 652, '睡眠分期', { size: 12.5, weight: 600, fill: C.sub })
  const stages: [string, number][] = [['清醒', 680], ['REM', 716], ['N1', 752], ['N2', 788], ['N3', 824]]
  stages.forEach(([nm, y]) => {
    b.line(150, y, 880, y, { stroke: C.faint, sw: 0.9, dash: '3 5', opacity: 0.5 })
    b.etext(142, y + 4, nm, { size: 11, weight: 600, fill: C.sub })
  })
  // REM 阴影带
  for (const [x1, x2] of [[280, 306], [412, 462], [560, 618], [690, 774], [820, 880]] as [number, number][]) {
    b.rect(x1, 700, x2 - x1, 32, { fill: C.enzL, fillOp: 0.5 })
  }
  b.polyline([[150, 680], [165, 680], [165, 752], [185, 752], [185, 788], [215, 788], [215, 824], [260, 824], [260, 788], [280, 788], [280, 716], [306, 716], [306, 752], [322, 752], [322, 788], [360, 788], [360, 824], [395, 824], [395, 788], [412, 788], [412, 716], [462, 716], [462, 752], [475, 752], [475, 788], [520, 788], [520, 824], [545, 824], [545, 788], [560, 788], [560, 716], [618, 716], [618, 680], [628, 680], [628, 752], [640, 752], [640, 788], [690, 788], [690, 716], [774, 716], [774, 752], [788, 752], [788, 788], [820, 788], [820, 716], [880, 716]], { stroke: C.acc, sw: 2.2 })
  b.ctext(515, 640, '每周期约 90 分钟（一夜 4–6 个周期）；后半夜 REM 递增、N3 递减', { size: 11, weight: 600, fill: C.ink })
  b.arrow(150, 860, 890, 860, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  for (let h = 0; h <= 7; h++) {
    const x = 150 + h * 104.3
    b.line(x, 860, x, 866, { stroke: C.sub, sw: 1.4 })
    b.ctext(x, 882, `${h}`, { size: 10.5, fill: C.mute })
  }
  b.ctext(515, 906, '睡眠时程（小时）', { size: 12, weight: 600, fill: C.sub })
  b.tag(838, 672, 'REM 期（阴影）', { fill: C.enzL, stroke: C.enz, tfill: C.enzD, size: 9.5, weight: 600, pad: 6 })
  // —— 右：各期脑电 ——
  b.ctext(1150, 640, '各期脑电（EEG）特征', { size: 12.5, weight: 700, fill: C.ink })
  const eeg: [string, string][] = [
    ['清醒闭眼：α 波 8–13 Hz（枕区显著·睁眼阻断）', C.acc],
    ['N1：θ 波 4–8 Hz（浅睡易醒）', C.dna],
    ['N2：纺锤波 12–14 Hz + K 复合波', C.pro],
    ['N3：δ 慢波 0.5–4 Hz（最深·GH 分泌峰值）', C.bad],
    ['REM：去同步 + 锯齿波（近似清醒）', C.enz],
  ]
  eeg.forEach(([label, color], i) => {
    const cy = 698 + i * 50
    b.text(950, cy - 20, label, { size: 10.5, weight: 600, fill: C.sub })
    const pts: [number, number][] = []
    for (let x = 1170; x <= 1340; x += 3) {
      const t = (x - 1170) / 170
      let yv = cy
      if (i === 0) yv = cy - 11 * Math.sin(t * Math.PI * 2 * 10)
      else if (i === 1) yv = cy - 10 * Math.sin(t * Math.PI * 2 * 6)
      else if (i === 2) {
        const spindle = x >= 1235 && x <= 1285 ? 13 : 6
        const per = x >= 1235 && x <= 1285 ? 8 : 24
        yv = cy - spindle * Math.sin(((x - 1170) / per) * Math.PI * 2)
        if (x >= 1195 && x <= 1215) yv = cy + (x - 1195) * 1.1
        else if (x > 1215 && x <= 1232) yv = cy + 22 - (x - 1215) * 2.2
      } else if (i === 3) yv = cy - 15 * Math.sin(t * Math.PI * 2 * 2)
      else {
        yv = cy - 5 * Math.sin(t * Math.PI * 2 * 9) - 4 * Math.sin(t * Math.PI * 2 * 2.3)
        if (x >= 1240 && x <= 1268) yv = cy + ((x - 1240) / 28) * 9
        else if (x > 1268 && x <= 1296) yv = cy + 9
        else if (x > 1296 && x <= 1320) yv = cy + 9 - ((x - 1296) / 24) * 9
      }
      pts.push([x, Math.round(yv * 10) / 10])
    }
    b.polyline(pts, { stroke: color, sw: 1.8 })
  })
  // —— 底部注记 ——
  b.wtext(60, 946, 'REM 失弛缓（atonia）：延髓下行通路主动抑制运动神经元、全身骨骼肌张力丧失——防止把梦境演成动作；梦境密集涌现于此期', { size: 10.5, fill: C.sub, maxW: 1280, lh: 15 })
  b.wtext(60, 968, '睡眠压力由腺苷随清醒时长累积（咖啡因拮抗腺苷受体）；觉醒维持依赖下丘脑食欲素能系统（缺失 → 发作性睡病）；上行网状激活系统（ARAS）为意识水平「总电源」', { size: 10.5, fill: C.sub, maxW: 1280, lh: 15 })
}

export default scene({
  title: '自主神经系统与睡眠架构',
  subtitle: '交感节前短/节后长（NE→α/β，汗腺为 ACh 例外），副交感节前长/节后短（ACh→M）；睡眠以约 90 分钟周期经 N1-N2-N3-REM 循环，REM 伴肌张力失弛缓与锯齿波',
  draw,
})
