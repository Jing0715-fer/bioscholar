// ph ch5-s3 皮层与随意运动：M1 矮人图·准备电位·锥体束下行
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、初级运动皮层躯体定位：运动矮人图 ============
  b.panel(30, 132, 660, 430, { title: '一、初级运动皮层（M1）躯体定位：运动矮人图' })
  b.ctext(253, 174, '中央前回躯体定位带（带宽 ∝ 代表区面积）', { size: 10.5, weight: 700, fill: C.sub })
  const segs: [string, number, boolean][] = [
    ['趾·足·踝', 36, false], ['腿', 38, false], ['躯干·肩', 44, false],
    ['臂·肘', 48, false], ['腕·手·指', 96, true], ['眼', 44, false],
    ['面', 58, false], ['唇·下颌', 82, true], ['舌·咽', 66, true],
  ]
  const bx = 205
  segs.forEach(([name, w, hot], i) => {
    const y = 186 + i * 38
    const cy = y + 18
    b.rect(bx, y, w, 36, { fill: hot ? C.badL : C.accL, stroke: hot ? C.bad : C.acc, sw: 1.6, rx: 5 })
    b.etext(bx - 8, y + 23, name, { size: 10, weight: 600, fill: hot ? C.badD : C.accD })
    b.line(bx + w + 3, cy, 322, cy, { stroke: C.faint, sw: 1, dash: '2 3' })
    const f = hot ? { fill: C.badL, stroke: C.bad } : { fill: C.panelB, stroke: C.sub }
    if (i === 0) {
      b.ellipse(341, cy, 13, 7, { ...f, sw: 1.5 })
      b.circle(356, cy - 3, 2.4, { fill: f.stroke })
      b.circle(359, cy, 2.4, { fill: f.stroke })
      b.circle(356, cy + 3, 2.4, { fill: f.stroke })
    } else if (i === 1) {
      b.rect(337, cy - 17, 11, 34, { ...f, sw: 1.5, rx: 5 })
    } else if (i === 2) {
      b.rect(331, cy - 13, 26, 26, { ...f, sw: 1.5, rx: 8 })
    } else if (i === 3) {
      b.rect(339, cy - 15, 10, 30, { ...f, sw: 1.5, rx: 5 })
    } else if (i === 4) {
      b.rect(326, cy - 36, 7, 22, { ...f, sw: 1.4, rx: 3.5 })
      b.rect(335, cy - 40, 7, 26, { ...f, sw: 1.4, rx: 3.5 })
      b.rect(344, cy - 42, 7, 28, { ...f, sw: 1.4, rx: 3.5 })
      b.rect(353, cy - 40, 7, 26, { ...f, sw: 1.4, rx: 3.5 })
      b.ellipse(345, cy + 6, 20, 18, { ...f, sw: 1.5 })
      b.rect(360, cy - 1, 7, 15, { ...f, sw: 1.4, rx: 3.5 })
    } else if (i === 5) {
      b.circle(345, cy, 8, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
      b.circle(347, cy, 2.6, { fill: C.ink })
    } else if (i === 6) {
      b.circle(345, cy, 13, { fill: 'none', stroke: C.sub, sw: 1.6 })
    } else if (i === 7) {
      b.ellipse(345, cy - 5, 21, 8, { ...f, sw: 1.5 })
      b.ellipse(345, cy + 6, 21, 10, { ...f, sw: 1.5 })
    } else {
      b.ellipse(345, cy, 14, 9, { ...f, sw: 1.5 })
      b.line(345, cy - 8, 345, cy + 8, { stroke: f.stroke, sw: 1.2 })
    }
  })
  b.text(416, 359, '手：投影最大', { size: 9.5, weight: 700, fill: C.badD })
  b.text(416, 473, '唇：投影特大', { size: 9.5, weight: 700, fill: C.badD })
  b.text(416, 511, '舌：投影大', { size: 9.5, weight: 700, fill: C.badD })
  b.wtext(500, 200, '失真的比例即信息：代表区面积按精细控制的分辨率分配，而非肌肉体积——手与唇远大于躯干与腿', { size: 10, fill: C.sub, maxW: 155, lh: 16 })
  b.wtext(500, 262, '排列倒置：下肢在内侧面顶部，头面部在下方（Penfield 电刺激清醒患者绘制）', { size: 10, fill: C.sub, maxW: 155, lh: 16 })
  b.wtext(500, 324, 'M1 刺激阈值全脑最低，诱发简单关节运动；运动方向由群体向量分布式编码', { size: 10, fill: C.sub, maxW: 155, lh: 16 })
  b.wtext(500, 386, '单侧 M1 局限损伤常仅致对侧轻瘫——多并行通路冗余兜底', { size: 10, fill: C.sub, maxW: 155, lh: 16 })
  b.wtext(500, 432, '乐器训练与卒中后代偿可重塑矮人图疆界（用进废退）', { size: 10, fill: C.sub, maxW: 155, lh: 16 })
  b.wtext(50, 545, 'M1（Brodmann 4 区）输出经皮层脊髓束直达脊髓，亦经脑干核团中继；它不存储完整动作程序，而以分布式方式编码运动参数', { size: 10, fill: C.mute, maxW: 620, lh: 15 })

  // ============ 二、辅助运动区与前运动区：计划先于动作 ============
  b.panel(710, 132, 660, 430, { title: '二、辅助运动区与前运动区：计划先于动作' })
  b.rect(730, 190, 165, 78, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 8 })
  b.ctext(812, 212, 'SMA 辅助运动区', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(812, 231, '半球内侧面（6 区）', { size: 9.5, fill: C.sub })
  b.ctext(812, 246, '内部引导的运动计划', { size: 9.5, fill: C.sub })
  b.ctext(812, 261, '复杂序列·双手协调', { size: 9.5, fill: C.sub })
  b.rect(910, 190, 150, 78, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(985, 212, '前运动区 PM', { size: 11.5, weight: 700, fill: C.accD })
  b.ctext(985, 231, '外侧（6 区）', { size: 9.5, fill: C.sub })
  b.ctext(985, 246, '外部线索引导动作', { size: 9.5, fill: C.sub })
  b.ctext(985, 261, 'F5 镜像神经元', { size: 9.5, fill: C.sub })
  b.arrow(812, 270, 862, 326, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(985, 270, 938, 326, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(800, 330, 200, 56, { fill: C.panelB, stroke: C.sub, sw: 2, rx: 8 })
  b.ctext(900, 352, 'M1 初级运动皮层（4 区）', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(900, 372, '执行：运动命令输出', { size: 9.5, fill: C.sub })
  b.arrow(900, 386, 900, 412, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(900, 432, '皮层脊髓束下行（见下）', { size: 10, fill: C.sub })
  b.wtext(730, 458, 'SMA 综合征：对侧肢体起动困难、双手协调障碍；优势半球前运动区受损 → 失用症——肌力与感觉俱全，却无法按指令组织熟悉的连续动作', { size: 10, fill: C.sub, maxW: 330, lh: 16 })
  b.wtext(730, 514, '镜像神经元（Rizzolatti）：执行抓握与观察他人抓握均放电——动作理解与模仿的候选基础', { size: 10, fill: C.sub, maxW: 330, lh: 15 })
  // 准备电位小图
  b.ctext(1215, 200, '准备电位 Bereitschaftspotential', { size: 12, weight: 700, fill: C.ink })
  b.arrow(1120, 460, 1120, 236, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.arrow(1120, 460, 1340, 460, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  b.line(1124, 280, 1330, 280, { stroke: C.faint, sw: 1, dash: '3 4' })
  b.etext(1112, 284, '0', { size: 10, fill: C.mute })
  b.polyline([[1124, 280], [1173, 280], [1263, 298], [1285, 388], [1330, 404]], { stroke: C.dna, sw: 2.4 })
  b.line(1173, 284, 1173, 460, { stroke: C.faint, sw: 1, dash: '3 4' })
  b.line(1263, 302, 1263, 460, { stroke: C.faint, sw: 1, dash: '3 4' })
  b.line(1285, 392, 1285, 460, { stroke: C.faint, sw: 1, dash: '3 4' })
  b.circle(1173, 280, 4, { fill: C.bad })
  b.circle(1263, 298, 4, { fill: C.enz })
  b.circle(1285, 388, 4, { fill: C.warn })
  b.ctext(1200, 252, '准备电位起点（约 -1 s）', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(1280, 230, '主观「想动」（-0.2 s）', { size: 9.5, weight: 700, fill: C.enzD })
  b.etext(1278, 424, '动作（EMG）t = 0', { size: 9.5, weight: 700, fill: C.warnD })
  b.text(1128, 240, '缓慢负电位 ↓', { size: 9.5, fill: C.dnaD })
  b.ctext(1124, 478, '-1.5', { size: 10, fill: C.mute })
  b.ctext(1179, 478, '-1.0', { size: 10, fill: C.mute })
  b.ctext(1234, 478, '-0.5', { size: 10, fill: C.mute })
  b.ctext(1289, 478, '0', { size: 10, fill: C.mute })
  b.ctext(1232, 502, '时间（s）', { size: 11, weight: 600, fill: C.sub })
  b.wtext(730, 544, 'Libet（1983）：准备电位起点早于被试报告的「想动」时刻数百毫秒——脑的无意识准备先于主观意图觉察', { size: 10, fill: C.mute, maxW: 330, lh: 14 })

  // ============ 三、皮层脊髓束：锥体交叉与两条下行束 ============
  b.panel(30, 584, 780, 400, { title: '三、皮层脊髓束：锥体交叉与两条下行束' })
  b.rect(110, 622, 280, 34, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
  b.ctext(250, 640, 'M1 · SMA · 前运动区 · 体感皮层（大锥体细胞）', { size: 10.5, weight: 600, fill: C.accD })
  b.arrow(250, 656, 250, 670, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(110, 674, 280, 34, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(250, 692, '放射冠 → 内囊后肢 → 大脑脚', { size: 10.5, weight: 600, fill: C.sub })
  b.arrow(250, 708, 250, 722, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(110, 726, 280, 34, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 7 })
  b.ctext(250, 744, '延髓锥体（锥体束）', { size: 10.5, weight: 600, fill: C.sub })
  b.arrow(250, 760, 250, 774, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  // 锥体交叉
  b.arrow(310, 780, 202, 846, { stroke: C.acc, sw: 2.2, marker: 'acc' })
  b.arrow(240, 780, 352, 846, { stroke: C.ok, sw: 2.2, marker: 'ok' })
  b.text(330, 796, '约 75–90% 纤维交叉', { size: 10, weight: 700, fill: C.accD })
  b.text(148, 796, '少数不交叉', { size: 10, weight: 700, fill: C.okD })
  b.rect(60, 868, 300, 66, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(210, 890, '皮层脊髓侧束（对侧·外侧索）', { size: 11, weight: 700, fill: C.accD })
  b.ctext(210, 912, '肢体远端精细：指对捏 · 写字 · 缝纫', { size: 9.5, fill: C.sub })
  b.rect(430, 868, 300, 66, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(580, 890, '皮层脊髓前束（同侧·前索）', { size: 11, weight: 700, fill: C.okD })
  b.ctext(580, 912, '节段性交叉 / 双侧终止：躯干近端 · 姿势', { size: 9.5, fill: C.sub })
  b.arrow(202, 848, 210, 864, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(352, 850, 552, 864, { stroke: C.ok, sw: 2, marker: 'ok' })
  // 脊髓横断面
  b.ellipse(650, 700, 55, 68, { fill: '#ffffff', stroke: C.sub, sw: 2.2 })
  b.ellipse(633, 700, 13, 30, { fill: C.panelB, stroke: C.sub, sw: 1.4 })
  b.ellipse(667, 700, 13, 30, { fill: C.panelB, stroke: C.sub, sw: 1.4 })
  b.rect(633, 692, 34, 16, { fill: C.panelB, stroke: C.sub, sw: 1.4 })
  b.circle(609, 700, 8, { fill: C.badL, stroke: C.bad, sw: 1.6 })
  b.circle(650, 744, 8, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.line(616, 696, 706, 668, { stroke: C.bad, sw: 1.2 })
  b.text(710, 664, '侧束（交叉·对侧）', { size: 9.5, weight: 600, fill: C.badD })
  b.line(657, 744, 706, 750, { stroke: C.acc, sw: 1.2 })
  b.text(710, 748, '前束（同侧下行）', { size: 9.5, weight: 600, fill: C.accD })
  b.ctext(650, 792, '脊髓横断面', { size: 10.5, fill: C.sub })
  b.wtext(50, 946, '皮质核束多双侧支配脑神经运动核，面神经核下半与舌下神经核只受对侧支配——中枢性面瘫仅对侧鼻唇沟变浅；锥体束髓鞘化持续至出生后约 2 年（婴儿期 Babinski 生理性阳性）', { size: 10, fill: C.sub, maxW: 730, lh: 15 })

  // ============ 四、上/下运动神经元综合征 ============
  b.panel(830, 584, 540, 400, { title: '四、上 / 下运动神经元综合征' })
  b.wtext(850, 624, '急性期可呈脊髓休克样弛缓与反射消失，数日至数周后才转为痉挛性——释放现象被暂时压抑', { size: 10, fill: C.mute, maxW: 480, lh: 15 })
  b.table(850, 648, 500, {
    headers: ['表现', '上运动神经元', '下运动神经元'],
    colW: [110, 200, 190], rowH: 36, fontSize: 10.5,
    rows: [
      ['肌张力', '增高·折刀样痉挛', '减低·弛缓'],
      ['腱反射', '亢进', '减弱或消失'],
      ['病理征', 'Babinski 征阳性', '阴性'],
      ['肌萎缩', '不明显（废用性）', '明显·失神经性'],
      ['束颤', '无', '可见（纤颤/束颤）'],
      ['损伤定位', '皮层·内囊·锥体束', '前角·前根·周围神经'],
    ],
  })
  b.wtext(850, 930, 'Jackson 释放定律：高位损毁释放低层反射（痉挛·反射亢进·Babinski 阳性）；低层损毁直接剥夺功能（弛缓·萎缩）', { size: 10, fill: C.sub, maxW: 490, lh: 15 })
  b.wtext(850, 962, '内囊（豆纹动脉出血好发处）一次切断运动·感觉·视觉纤维 → 对侧「三偏」', { size: 10, fill: C.sub, maxW: 490, lh: 14 })
}

export default scene({
  title: '皮层与随意运动：矮人图、运动计划与锥体束',
  subtitle: 'M1 矮人图手与唇投影最大（按精细控制分辨率分配）；准备电位早于「想动」觉察数百毫秒；约 75–90% 纤维经锥体交叉入对侧侧束司远端精细，前束司近端姿势',
  draw,
})
