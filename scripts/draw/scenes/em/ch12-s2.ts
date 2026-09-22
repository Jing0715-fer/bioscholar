// em ch12-s2 相位板与像差校正（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、离焦衬度的三笔代价 ============
  b.panel(30, 132, 660, 412, { title: '一、离焦相位衬度的三笔代价与 Zernike 思想' })
  const ax = 70, ay = 400, aw = 340, ah = 200
  b.axis(ax, ay, aw, ah, {
    grid: false,
    xticks: [[0, '0'], [1, '频率 g']],
    yticks: [[0.5, '+1'], [0.045, '0'], [0.95, '−1']],
    title: '离焦 CTF：低频缺失、振荡、零点环带',
  })
  const ctf: [number, number][] = []
  for (let i = 0; i <= 120; i++) {
    const t = i / 120
    ctf.push([t, (Math.sin(14 * t * t + 1.4) * 0.5 + 0.5)])
  }
  b.curve(ax, ay, aw, ah, ctf, { stroke: C.warn, sw: 2.2 })
  b.tag(600, 190, '代价一：低频衬度缺失', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(600, 224, '代价二：传递函数随欠焦振荡', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.tag(600, 258, '代价三：零点环带湮灭信息', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.wtext(450, 320, '光学显微学早在 1930 年代给过答案——Zernike 相衬法：给未散射的中央束单独加 π/2 相移，相位差直接转成强度差（1953 年诺贝尔物理学奖）。把板搬进电镜的尝试持续半个世纪：Boersch 1947 年静电环电极方案为首创，碳膜污染与充电长期困住这条路。', { size: 10, fill: C.sub, maxW: 210, lh: 14 })
  b.ctext(240, 470, '「欠焦＝天然泽尼克板」，但板本身带伤', { size: 10, fill: C.mute })

  // ============ 二、Volta 相位板 ============
  b.panel(710, 132, 660, 412, { title: '二、Volta 相位板：把漏电做成器件（Danev 2014）' })
  // 光路
  b.arrow(760, 190, 760, 420, { stroke: C.acc, sw: 2.4, marker: 'acc' })
  b.text(770, 212, '散射电子（弱）', { size: 9.5, fill: C.accD })
  b.arrow(790, 190, 790, 420, { stroke: C.ink, sw: 3.4, marker: 'ink' })
  b.text(800, 330, '中央束（强）', { size: 9.5, weight: 700, fill: C.ink })
  // 碳膜与荷电斑
  b.rect(742, 300, 96, 8, { fill: C.mute, fillOp: 0.35, stroke: C.sub, sw: 1.4 })
  b.ctext(790, 288, '约 10 nm 无定形碳膜（后焦面）', { size: 9, fill: C.sub })
  b.circle(790, 304, 9, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.ctext(790, 336, 'Volta 电位荷电斑', { size: 9, weight: 700, fill: C.badD })
  b.wtext(880, 190, '中央束在照射点把膜「充」出一个局部表面电位——荷电斑点恰好充当 π/2 相移器，且随束自动对准：与其对抗充电，不如收编充电。', { size: 10.5, fill: C.sub, maxW: 360, lh: 15 })
  // CTF with VPP
  const vx = 880, vy = 470, vw = 280, vh = 130
  b.axis(vx, vy, vw, vh, {
    grid: false, xticks: [[0, '0'], [1, 'g']], yticks: [[0.9, '+1'], [0.1, '−1']],
    title: '带相位板的 CTF：低频被救回',
  })
  const vp: [number, number][] = []
  for (let i = 0; i <= 80; i++) {
    const t = i / 80
    vp.push([t, 0.5 + 0.46 * Math.sin(10 * t * t + 0.9)])
  }
  b.curve(vx, vy, vw, vh, vp, { stroke: C.ok, sw: 2.2 })
  b.tag(1180, 240, '近焦即得高衬度', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 9 })
  b.tag(1180, 274, '小分子量样品的低频救命', { fill: C.okL, stroke: C.ok, size: 10.5, tfill: C.okD, pad: 9 })
  b.tag(1040, 520, '血红蛋白约 64 kDa 解析到 3 Å 级（Khoshouei 等 2017）', { fill: C.rnaL, stroke: C.rna, size: 10.5, weight: 700, tfill: C.rnaD, pad: 9 })
  b.ctext(1040, 480, '落在无相位板时公认「困难区」的样品（小于 100 kDa 地板线）', { size: 9.5, fill: C.mute })

  // ============ 三、Volta 账单与像差校正 ============
  b.panel(30, 572, 660, 398, { title: '三、Volta 的账单与像差校正的生物冷遇' })
  b.text(50, 618, 'Volta 的账单三项：', { size: 11.5, weight: 700, fill: C.ink })
  b.tag(190, 646, '相位随时长漂移（须逐张拟合相位偏移）', { fill: C.warnL, stroke: C.warn, size: 10, tfill: C.warnD, pad: 8 })
  b.tag(530, 646, '膜寿命有限', { fill: C.warnL, stroke: C.warn, size: 10, tfill: C.warnD, pad: 8 })
  b.tag(530, 678, '对准精度要求高', { fill: C.warnL, stroke: C.warn, size: 10, tfill: C.warnD, pad: 8 })
  b.wtext(50, 710, '球差校正的材料学军备：Haider 等 1998 年装机、Batson 等 2002 年达亚埃——生物侧却遇冷：CTF 形态被重写、低频衬度权衡、机电稳定性风险，三笔账都不好算。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.tag(240, 772, '材料学：亚埃分辨已成常规', { fill: C.accL, stroke: C.acc, size: 10.5, weight: 700, tfill: C.accD, pad: 9 })
  b.tag(540, 772, '生物侧：Cs 校正遇冷、相位板补位', { fill: C.badL, stroke: C.bad, size: 10.5, weight: 700, tfill: C.badD, pad: 9 })
  b.wtext(50, 812, '单色器加色差校正把能量分辨推到毫电子伏量级——低温生物应用仍在萌芽；激光相位板等新器件在研。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.ctext(360, 900, '「相位问题的另一条路」：不改透镜，改后焦面', { size: 10, fill: C.mute })

  // ============ 四、4D-STEM 与模式对照 ============
  b.panel(710, 572, 660, 398, { title: '四、4D-STEM、叠层成像与模式对照' })
  b.wtext(730, 618, '4D-STEM 以像素阵列探测器逐点记录完整衍射图（每个扫描位置一张二维图，故为四维）；叠层成像（ptychography）从中以迭代算法恢复相位——剂量效率高；微分相衬读内建电磁场；低温生物应用萌芽。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  b.table(730, 692, 620, {
    headers: ['模式', '机制', '主要优点', '主要局限'],
    colW: [150, 180, 150, 140], rowH: 30, fontSize: 9.5,
    rows: [
      ['离焦相位衬度', '欠焦 χ 相位差', '成熟普适', '低频缺失、零点环'],
      ['Volta 相位板', '荷电斑 π/2 相移', '近焦高衬度', '相位漂移、膜寿命'],
      ['球差校正', '多极场补偿 Cs', '亚埃（材料）', '生物冷遇、低频权衡'],
      ['叠层成像', '4D 衍射反演相位', '剂量效率高', '算力与稳定性'],
    ],
  })
  b.ctext(1040, 880, '共通命题：把「相位」从成像几何的负债变成资产', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(1040, 920, '第 7 章的 CTF 账本在此迎来改写', { size: 10, fill: C.mute })
}

export default scene({
  title: '相位板与像差校正：把漏电做成器件',
  subtitle: 'Zernike 相衬获 1953 年诺奖；Volta 相位板（Danev 2014）以约 10 nm 碳膜上的荷电斑作 π/2 相移器，近焦即得高衬度——血红蛋白约 64 kDa 解析到 3 Å 级；球差校正（Haider 1998、Batson 2002 亚埃）在生物侧遇冷；4D-STEM 叠层成像剂量效率高',
  draw,
})
