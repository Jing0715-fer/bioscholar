// sb ch5-s2 成核与晶体生长动力学（Task SB-2）
import { scene, C, B } from '../../lib'

// 螺旋台阶：阿基米德螺线（BCF 螺旋位错生长）
function spiralD(cx: number, cy: number, turns: number, spacing: number, r0: number): string {
  const pts: string[] = []
  const thMax = turns * Math.PI * 2
  for (let th = 0; th <= thMax; th += 0.12) {
    const r = r0 + (spacing * th) / (Math.PI * 2)
    pts.push(`${(cx + r * Math.cos(th)).toFixed(1)},${(cy + r * Math.sin(th)).toFixed(1)}`)
  }
  return `M ${pts.join(' L ')}`
}

const draw = (b: B) => {
  // ============ 一、成核自由能曲线 ============
  b.panel(30, 132, 660, 420, { title: '一、成核自由能曲线：表面项与体项的竞争' })
  const ax = 100, ay = 360 // ΔG = 0 线（x 轴）
  b.line(ax, ay, 640, ay, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.line(ax, 470, ax, 200, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.etext(92, 200, 'ΔG', { size: 12, weight: 700, fill: C.sub })
  b.etext(642, 380, '核半径 r', { size: 11.5, weight: 600, fill: C.sub })
  // 表面项（正、随 r² 升）
  b.spline([[100, 360], [250, 340], [380, 300], [500, 262], [620, 225]], { stroke: C.warn, sw: 2, dash: '7 5' })
  // 体项（负、随 r³ 降）
  b.spline([[100, 360], [220, 372], [330, 400], [460, 440], [620, 488]], { stroke: C.acc, sw: 2, dash: '7 5' })
  // 总自由能：升过能垒后转跌
  b.spline([[100, 360], [180, 300], [240, 252], [300, 245], [360, 262], [410, 320], [435, 360], [470, 392], [530, 425], [620, 448]], { stroke: C.ink, sw: 3 })
  // 临界核 r* 竖线
  b.line(300, 245, 300, 360, { stroke: C.mute, sw: 1.5, dash: '4 4' })
  b.ctext(300, 382, 'r^{*}', { size: 12, weight: 700, fill: C.ink })
  // ΔG* 能垒标尺（水平虚线 + y 轴双侧箭头）
  b.line(100, 245, 300, 245, { stroke: C.mute, sw: 1.2, dash: '4 4' })
  b.line(104, 245, 104, 360, { stroke: C.mute, sw: 1.6, marker: 'mute', markerStart: 'mute' })
  b.etext(96, 305, 'ΔG^{*}', { size: 12.5, weight: 700, fill: C.ink })
  // 图例与区段判词
  b.legend(115, 208, [['总自由能 ΔG(r)', C.ink], ['表面项 +4πr^{2}γ', C.warn], ['体项 −(4/3)πr^{3}Δμρ', C.acc]], { size: 10.5, gap: 14 })
  b.text(512, 212, 'r > r^{*}：自发生长', { size: 10.5, weight: 700, fill: C.okD })
  b.arrow(560, 220, 428, 316, { stroke: C.ok, sw: 1.3, dash: '3 3', marker: 'ok' })
  b.text(122, 430, 'r < r^{*}：注定回溶', { size: 10.5, weight: 700, fill: C.badD })
  b.arrow(180, 418, 172, 315, { stroke: C.bad, sw: 1.3, dash: '3 3', marker: 'bad' })
  // 公式与解读
  b.wtext(70, 505, '峰值即临界核：r^{*} = 2γ/(Δμ·ρ)，能垒 ΔG^{*} = 16πγ^{3}/[3(Δμ)^{2}ρ^{2}]——过饱和度提高一倍，ΔG^{*} 可下降数个 kT。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })
  b.wtext(70, 538, '蛋白的 γ 远低于小分子晶体，r^{*} 仅数十个分子——成核是全有或全无的阈值事件。', { size: 10.5, fill: C.sub, maxW: 610, lh: 15 })

  // ============ 二、两步成核与三类路径 ============
  b.panel(710, 132, 660, 420, { title: '二、两步成核：先致密液滴、后有序成核' })
  // 三个阶段盒
  const boxes: Array<[number, string]> = [[730, '① 过饱和溶液'], [935, '② 致密无序液滴'], [1140, '③ 滴内有序化']]
  for (const [bx, t] of boxes) {
    b.rect(bx, 172, 180, 108, { fill: C.bg, stroke: C.line, sw: 1.6, rx: 8 })
    b.ctext(bx + 90, 194, t, { size: 11.5, weight: 700, fill: C.ink })
  }
  // ① 散布分子
  const scattered: Array<[number, number]> = [[752, 220], [780, 208], [812, 226], [844, 214], [872, 232], [760, 250], [792, 244], [822, 258], [852, 246], [880, 258], [770, 270], [835, 272], [866, 276], [800, 268]]
  for (const [px, py] of scattered) b.circle(px, py, 2.6, { fill: C.pro })
  // ② 致密液滴
  b.ellipse(1025, 244, 38, 28, { fill: C.rnaL, stroke: C.rna, sw: 2 })
  const dense: Array<[number, number]> = [[1000, 228], [1014, 222], [1030, 226], [1044, 232], [1052, 244], [1004, 242], [1018, 238], [1034, 244], [1048, 252], [1010, 256], [1026, 258], [1040, 262], [1030, 240], [1018, 252]]
  for (const [px, py] of dense) b.circle(px, py, 2.6, { fill: C.rnaD })
  // ③ 滴内晶格化
  b.ellipse(1230, 246, 40, 30, { fill: C.rnaL, stroke: C.rna, sw: 2, dash: '6 4' })
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) b.circle(1213 + i * 11.5, 229 + j * 11.5, 2.6, { fill: C.pro })
  b.polygon([[1230, 226], [1244, 240], [1230, 254], [1216, 240]], { fill: C.bg, stroke: C.pro, sw: 1.8 })
  b.arrow(913, 226, 930, 226, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(1118, 226, 1135, 226, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.ctext(820, 296, '溶质均匀分散', { size: 9.5, fill: C.mute })
  b.ctext(1025, 296, '亚微米级液滴 · 乳光可见', { size: 9.5, fill: C.rnaD, weight: 700 })
  b.ctext(1230, 296, '局部有序压倒表面混乱', { size: 9.5, fill: C.mute })
  b.wtext(730, 320, '过饱和溶液先分离出致密无序液滴（液-液相分离），晶体核再在滴内经局部有序化诞生——解释实验能垒普遍低于经典预测、「先乳光后出晶」，与 Ostwald 阶段规则（1897）一脉相承。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })
  // 三类成核对照表
  b.table(730, 380, 620, {
    headers: ['成核类型', '触发条件', '相对能垒', '实验识别'],
    colW: [110, 180, 110, 220],
    rowH: 29,
    fontSize: 10,
    rows: [
      ['均相成核', '过饱和自发', '最高', '液滴深处无异物成核'],
      ['异相成核', '尘埃、纤维、划痕表面', '明显降低', '核沿异物定向分布'],
      ['两步成核', '先致密液滴再有序化', '可低于经典预测', '先乳光后出晶'],
    ],
  })
  b.wtext(730, 528, '异相成核把能垒「打折」：无尘操作、蛋白溶液 0.22 μm 过滤、硅化盖片与洁净器皿，是把成核事件收归可控的纪律。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 三、BCF 螺旋生长与台阶机制 ============
  b.panel(30, 582, 660, 370, { title: '三、BCF 螺旋生长：永不下班的台阶' })
  // 晶面 + 螺旋台阶
  b.rect(75, 640, 190, 190, { fill: C.proL, stroke: C.pro, sw: 2.2, rx: 4, fillOp: 0.6 })
  b.path(spiralD(170, 735, 4.4, 17.5, 4), { fill: 'none', stroke: C.warn, sw: 2.4, marker: 'warn' })
  b.circle(170, 735, 3.5, { fill: C.bad })
  b.text(178, 838, '位错露头点', { size: 9.5, fill: C.badD })
  b.arrow(222, 830, 186, 758, { stroke: C.mute, sw: 1.2, dash: '3 3', marker: 'mute' })
  b.ctext(170, 862, '台阶前进方向沿螺旋外推', { size: 9.5, fill: C.warnD, weight: 700 })
  // 吸附分子
  for (const [px, py] of [[62, 668], [56, 700], [66, 760], [58, 790], [280, 690], [286, 745]]) b.circle(px, py, 3, { fill: C.pro })
  b.arrow(66, 712, 96, 722, { stroke: C.pro, sw: 1.4, marker: 'pro' })
  b.ctext(170, 632, '分子吸附晶面 · 二维扩散 · 并入台阶', { size: 9.5, fill: C.proD })
  // 右列：机理与限速
  b.tag(478, 624, 'BCF 理论（Burton · Cabrera · Frank，1951）', { fill: C.accL, stroke: C.acc, size: 11.5, weight: 700, tfill: C.accD, pad: 11 })
  b.wtext(300, 652, '螺旋位错在晶面蚀出一条「永不下班」的螺旋台阶，使低过饱和下也能匀速生长；近平衡区速率近似正比于过饱和度的平方。台阶推进速率 0.1–10 μm/min——100 μm 晶体约需数小时至数日长成。', { size: 10.5, fill: C.sub, maxW: 350, lh: 15 })
  // 限速两型
  b.rect(288, 742, 178, 108, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 8 })
  b.ctext(377, 762, '表面反应控制（低过饱和）', { size: 10.5, weight: 700, fill: C.okD })
  b.polygon([[362, 800], [392, 800], [392, 824], [362, 824]], { fill: C.bg, stroke: C.ok, sw: 2 })
  b.ctext(377, 840, '晶面平整 · 棱角饱满', { size: 9.5, fill: C.sub })
  b.rect(478, 742, 178, 108, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 8 })
  b.ctext(567, 762, '输运控制（高过饱和）', { size: 10.5, weight: 700, fill: C.warnD })
  b.line(567, 782, 567, 824, { stroke: C.warn, sw: 2.4 })
  b.line(547, 796, 587, 796, { stroke: C.warn, sw: 2 })
  b.line(551, 812, 583, 812, { stroke: C.warn, sw: 2 })
  b.line(543, 786, 551, 794, { stroke: C.warn, sw: 1.8 })
  b.line(591, 786, 583, 794, { stroke: C.warn, sw: 1.8 })
  b.ctext(567, 840, '供料不均 · 骸晶与枝晶', { size: 9.5, fill: C.sub })
  b.wtext(60, 884, '蛋白扩散系数仅约 10^{−6} cm^{2}/s，比小分子更早撞上输运限制——避免振动与其说是防震，不如说是防止边界层紊乱后出现过饱和局部尖峰。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 四、成核速率与操作窗口 ============
  b.panel(710, 582, 660, 370, { title: '四、成核速率：指数杠杆与操作窗口' })
  b.tag(930, 618, 'J ≈ A·exp(−ΔG^{*}/kT)', { fill: C.enzL, stroke: C.enz, size: 14, weight: 700, tfill: C.enzD, pad: 12 })
  // 小图：J vs S
  b.axis(1150, 748, 190, 130, {
    xticks: [[0, '1'], [0.5, '2'], [1, '3']],
    yticks: [[0.06, '10^{0}'], [0.5, '10^{3}'], [0.94, '10^{6}']],
    xlabel: '过饱和度 S', ylabel: 'J', title: 'J（对数）随 S 指数上升',
  })
  b.curve(1150, 748, 190, 130, [[0, 0.04], [0.25, 0.08], [0.5, 0.2], [0.7, 0.42], [0.85, 0.7], [1, 0.96]], { smooth: true, stroke: C.enz, sw: 2.6 })
  b.wtext(730, 645, '过饱和度的微小变化被放大为成核速率的数量级跳变：实验可操作的蛋白成核速率约为每微升每天 1 至 10^{3} 个核，比小分子体系（每秒每微升 10^{6} 以上）低 6–9 个数量级。', { size: 10.5, fill: C.sub, maxW: 350, lh: 15 })
  b.wtext(730, 725, '亚稳区宽度可达溶解度的 2–3 倍、孕育期以天计——晶种策略与缓慢蒸发才有从容的操作窗口；温度 ±1 °C 或浓度 ±5% 即可改写成核命运。', { size: 10.5, fill: C.sub, maxW: 350, lh: 15 })
  // 泊松分布液滴行
  b.ctext(1030, 800, '同批液滴的成核数呈泊松分布——「一孔三晶、一孔无晶」并排并不奇怪', { size: 10, weight: 600, fill: C.ink })
  const counts = [0, 1, 3, 0, 1, 0, 2, 1, 0]
  counts.forEach((n, i) => {
    const cx = 760 + i * 68
    b.circle(cx, 852, 21, { fill: C.bg, stroke: C.line, sw: 1.6 })
    for (let k = 0; k < n; k++) {
      const ox = cx - 8 + (k % 2) * 11, oy = 844 + Math.floor(k / 2) * 11
      b.polygon([[ox + 4.5, oy], [ox + 9, oy + 4.5], [ox + 4.5, oy + 9], [ox, oy + 4.5]], { fill: C.proL, stroke: C.pro, sw: 1.3 })
    }
  })
  b.wtext(730, 902, '质量守恒决定「核多则个体小、核少则个体大」——盼大晶体：低过饱和、限量晶种、低温慢长、避免振动。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // 底部收束
  b.ctext(700, 975, '理解成核的目的只有一句：把「多少颗核、何时成核」从概率事件变成实验设计变量——第 4 节的晶种技术是其工程化形态', { size: 11.5, weight: 600, fill: C.mute })
}

export default scene({
  title: '成核与晶体生长动力学：能垒、两步成核与螺旋生长',
  subtitle: 'ΔG = −(4/3)πr^{3}Δμρ + 4πr^{2}γ；r^{*} = 2γ/(Δμρ)；J ≈ A·exp(−ΔG^{*}/kT)；两步成核先致密液滴后有序化；BCF 螺旋台阶 0.1–10 μm/min',
  draw,
})
