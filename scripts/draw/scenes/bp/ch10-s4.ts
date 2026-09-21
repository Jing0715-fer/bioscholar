// bp ch10-s4 合成生物学展望
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、最小基因组（左上） ============
  b.panel(30, 132, 660, 400, { title: '一、JCVI-syn3.0：最小自复制基因组的定量基线' })
  // 对比柱
  b.bars(80, 440, 300, 240, [4377, 902, 473], {
    labels: ['大肠杆菌', 'JCVI-syn1.0', 'JCVI-syn3.0'],
    vlabels: ['4377', '902', '473'],
    fill: C.dnaL, stroke: C.dna, max: 5000,
  })
  b.ctext(230, 498, '基因组基因数（编码序列）', { size: 12.5, fill: C.mute })
  // 文字列手动拆行（wtext 遇无标点长 token 会整行溢出面板右缘；\n 在 SVG text 中会被折叠为空格）
  b.text(420, 250, 'syn3.0 的 473 基因', { size: 13.5, weight: 600, fill: C.ink })
  b.text(420, 272, '＝ 维持独立生命的最简基因集：', { size: 13.5, weight: 600, fill: C.ink })
  b.text(420, 300, '· DNA 复制/转录/翻译全套', { size: 13, fill: C.sub })
  b.text(420, 322, '· 代谢与 ATP 合成', { size: 13, fill: C.sub })
  b.text(420, 344, '· 膜与转运', { size: 13, fill: C.sub })
  b.text(420, 366, '· 149 个功能未知（约 1/3）', { size: 13, fill: C.sub })
  b.wtext(420, 430, 'TDT（移植-拼装-移植）设计-合成-测试循环：非必需基因逐轮敲除。', { size: 12.5, fill: C.mute, maxW: 250, lh: 19 })

  // ============ 二、基因线路两大开山作（右上） ============
  b.panel(720, 132, 650, 400, { title: '二、2000 年双里程碑：拨动开关与振荡子' })
  // 拨动开关
  b.tag(830, 230, 'LacI', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 8 })
  b.arrow(880, 230, 960, 260, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(920, 215, '抑制', { size: 12, fill: C.bad })
  b.tag(1030, 290, 'Ptet → λ cI', { fill: '#fef3c7', stroke: C.warn, size: 12.5, weight: 600, tfill: '#78350f', pad: 8 })
  b.arrow(1080, 290, 1160, 260, { stroke: C.bad, sw: 2.4, marker: 'bad' })
  b.ctext(1120, 245, '抑制', { size: 12, fill: C.bad })
  b.tag(1230, 230, 'λ cI', { fill: '#fef3c7', stroke: C.warn, size: 13, weight: 700, tfill: '#78350f', pad: 8 })
  b.arrow(1230, 205, 830, 205, { stroke: C.mute, sw: 1.8, dash: '6 5', marker: 'mute' })
  b.ctext(1030, 190, '互锁双稳态：两个记忆状态', { size: 12.5, weight: 600, fill: C.sub })
  b.ctext(1030, 340, '拨动开关（toggle switch）：双阻遏互锁 → 双稳态记忆', { size: 13.5, weight: 700, fill: C.ink })
  // 振荡子
  b.tag(850, 415, 'A ⊣ B', { fill: C.dnaL, stroke: C.dna, size: 14, weight: 700, tfill: C.dnaD, pad: 8 })
  b.tag(1000, 415, 'B ⊣ C', { fill: C.proL, stroke: C.pro, size: 14, weight: 700, tfill: C.proD, pad: 8 })
  b.tag(1150, 415, 'C ⊣ A', { fill: '#fef3c7', stroke: C.warn, size: 14, weight: 700, tfill: '#78350f', pad: 8 })
  b.ctext(1030, 460, '压缩振荡子（repressilator）：三阻遏环 → 周期性 GFP 波动', { size: 13.5, weight: 700, fill: C.ink })

  // ============ 三、噪声与稳健设计（左下） ============
  b.panel(30, 550, 660, 420, { title: '三、表达噪声：设计的挑战与资源' })
  // 噪声示意曲线
  b.axis(80, 880, 300, 220, { xlabel: '时间', ylabel: '表达量', grid: false })
  b.curve(80, 880, 300, 220, [[0, 0.5], [0.1, 0.62], [0.2, 0.45], [0.3, 0.58], [0.4, 0.5], [0.5, 0.4], [0.6, 0.55], [0.7, 0.48], [0.8, 0.52], [0.9, 0.44], [1, 0.5]], { stroke: C.dna, sw: 2.4, smooth: true })
  b.line(80, 880 - 0.5 * 220, 380, 880 - 0.5 * 220, { stroke: C.faint, sw: 1.5, dash: '7 5' })
  b.ctext(230, 610, '内在噪声（随机出生-死亡涨落）', { size: 13, weight: 600, fill: C.sub })
  b.wtext(420, 640, '挑战：低拷贝分子使噪声显著 → 稳健线路需负反馈、冗余与滤波。', { size: 13, fill: C.sub, maxW: 250, lh: 20 })
  // 手动拆行，避免长 token 溢出到右侧面板
  b.text(420, 730, '资源（bet-hedging）：', { size: 13, weight: 600, fill: C.dnaD })
  b.text(420, 752, '基因切换噪声产生表型多样性——', { size: 13, weight: 600, fill: C.dnaD })
  b.text(420, 774, '群体以「次优个体」对冲环境剧变', { size: 13, weight: 600, fill: C.dnaD })
  b.text(420, 796, '（持留菌抗药、营养应激预适应）。', { size: 13, weight: 600, fill: C.dnaD })
  b.text(420, 860, '噪声既是 bug 也是 feature——', { size: 12.5, weight: 600, fill: C.warn })
  b.text(420, 882, '合成生物学的「热力学-信息」视角。', { size: 12.5, weight: 600, fill: C.warn })

  // ============ 四、展望与边界（右下） ============
  b.panel(720, 550, 650, 420, { title: '四、从解释生命到重编生命：可控性与安全边界' })
  const stages: [string, string][] = [
    ['感 应', '生物/化学传感器输入'],
    ['线 路', '逻辑门·反馈·放大'],
    ['底 盘', '最小基因组宿主'],
    ['应 用', '生物制造·治疗·环境'],
  ]
  stages.forEach(([s, t], i) => {
    b.tag(830 + (i % 2) * 300, 640 + Math.floor(i / 2) * 90, s, { fill: C.accL, stroke: C.acc, size: 15, weight: 700, tfill: C.ink, pad: 10 })
    b.wtext(790 + (i % 2) * 300, 660 + Math.floor(i / 2) * 90 + 20, t, { size: 12.5, fill: C.sub, maxW: 240, lh: 18 })
  })
  b.wtext(760, 880, '生物物理的边界条件：可预测性（量化建模）、可控性（诱导开关/营养缺陷型自杀开关）与生物安全（合成基因组的水印、伦理审查）——重编生命的权限由物理定律与治理框架共同设定。', { size: 13, weight: 600, fill: C.dnaD, maxW: 570, lh: 20 })
}

export default scene({
  title: '合成生物学展望：最小基因组、基因线路与噪声工程',
  subtitle: 'JCVI-syn3.0 仅 473 基因的定量基线 · 拨动开关与压缩振荡子（2000）· 表达噪声的 bet-hedging 价值 · 可控性与生物安全边界',
  draw,
})
