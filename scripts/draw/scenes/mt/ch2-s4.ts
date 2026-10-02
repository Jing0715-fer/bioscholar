// mt ch2-s4 动物与植物通道家族对照（三栏法 + 动作电位双栏 + 成员数量条形图 + 功能语义大表——学科招牌对照图）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三栏对照 ============
  b.panel(30, 132, 1340, 280, { title: '一、三栏对照：动物独有 · 植物扩张 · 共有而用法不同' })
  // —— 栏 A：动物独有 ——
  b.zone(46, 168, 410, 240, { fill: '#e0f2fe', fillOp: 0.55, stroke: C.acc, sw: 1.2, label: '动物独有：为快信号而生', lfill: C.accD })
  b.text(62, 216, '神经系统 · 肌肉 · 感觉器官的毫秒级通讯', { size: 11, fill: C.mute })
  b.text(62, 240, 'Nav（9 个 SCN 基因）——动作电位升支的发动机', { size: 11.5, fill: C.sub })
  b.text(62, 263, 'Cav（10 个基因）——突触释放 · 心肌起搏 · 分级钙信号', { size: 11.5, fill: C.sub })
  b.text(62, 286, 'LGIC（数十个基因）——百微秒内把化学换成电', { size: 11.5, fill: C.sub })
  b.text(62, 309, '　nAChR · GABA_{A} · GlyR · 5-HT_{3} · P2X', { size: 11.5, fill: C.sub })
  b.text(62, 332, 'Piezo1/2（2 个基因）——触觉 · 血压 · 红细胞容量检查', { size: 11.5, fill: C.sub })
  b.text(62, 355, 'connexin（21 个基因）——电突触让细胞群同步放电', { size: 11.5, fill: C.sub })
  b.text(62, 378, '毫秒级装备库——植物一侧全部缺席', { size: 10.5, fill: C.mute })
  // —— 栏 B：植物独有或扩张 ——
  b.zone(466, 168, 410, 240, { fill: '#d1fae5', fillOp: 0.55, stroke: C.ok, sw: 1.2, label: '植物独有或扩张：钙工具箱', lfill: C.okD })
  b.text(482, 216, '防御与发育——无 Nav/Cav/TRP，钙内流靠 GLR 与 CNGC', { size: 11, fill: C.mute })
  b.text(482, 240, 'GLR（20 个）——GLR3.3/3.6 伤电信号 · 根尖 · 花粉管', { size: 11.5, fill: C.sub })
  b.text(482, 263, 'CNGC（20 个，动物仅约 6）——免疫钙尖峰主力', { size: 11.5, fill: C.sub })
  b.text(482, 286, 'MSL（10 个）——渗透冲击与膨压的机械保险阀', { size: 11.5, fill: C.sub })
  b.text(482, 309, 'OSCA——渗透骤降直译为 Ca^{2+} 信号：根尖高盐第一哨', { size: 11.5, fill: C.sub })
  b.text(482, 332, 'CNGC2/DND1 自发坏死与免疫 · CNGC14 根尖生长素响应', { size: 11.5, fill: C.sub })
  b.text(482, 355, '配体谱从谷氨酸放宽到多种氨基酸——GLR 再就业', { size: 11.5, fill: C.sub })
  b.text(482, 378, '扩张发生在哪一支，哪一支写满该界的生活方式', { size: 10.5, fill: C.mute })
  // —— 栏 C：共有而用法不同 ——
  b.zone(886, 168, 478, 240, { fill: C.panelB, fillOp: 0.7, stroke: C.line, sw: 1.2, label: '共有家族、用法不同：两本账', lfill: C.sub })
  b.text(902, 216, '同源部件，各表其用——Shaker · ClC · TPC1', { size: 11, fill: C.mute })
  b.text(902, 240, 'Shaker 型 K^{+} 通道：动物约 40 个 KCN vs 拟南芥 9 个', { size: 12, weight: 700, fill: C.dnaD })
  b.text(902, 263, '动物＝复极工具箱：Kv1–Kv12 神经元复极 · 心肌分层 · 锋形雕塑', { size: 11.5, fill: C.sub })
  b.text(902, 286, '植物＝K^{+} 物流学：AKT1 根吸收 · KAT1/2 气孔内向吸钾', { size: 11.5, fill: C.sub })
  b.text(902, 309, 'GORK 关气孔外排 · SKOR 木质部装载 · AKT2 韧皮部 · KC1 无孔调节', { size: 11.5, fill: C.sub })
  b.text(902, 330, 'ClC：动物 9 vs 植物 7——植物成员几乎全在液泡膜', { size: 11.5, fill: C.sub })
  b.text(902, 353, 'AtCLCa＝2NO_{3}^{-}/H^{+} 反向转运体：通道→转运体演化范例', { size: 11.5, fill: C.sub })
  b.text(902, 376, 'TPC1：动物溶酶体 Na^{+} vs 植物液泡 Ca^{2+} SV 通道', { size: 11.5, fill: C.sub })
  b.text(902, 399, '同源不同胞器不同离子——定位改写比序列改写更能定义用法', { size: 11.5, fill: C.sub })

  // ============ 二、两套动作电位 ============
  b.panel(30, 427, 660, 280, { title: '二、两套动作电位：Nav 内流升支 vs 阴离子外流升支' })
  // —— 左：动物 ——
  b.ctext(185, 473, '动物：Na^{+}/Ca^{2+} 内流', { size: 12.5, weight: 700, fill: C.accD })
  b.text(70, 496, '升支＝Na^{+} 内流（正反馈）', { size: 10.5, fill: C.badD })
  b.text(235, 496, '复极＝K^{+} 外流', { size: 10.5, fill: C.proD })
  b.arrow(110, 503, 138, 513, { stroke: C.bad, sw: 1.6, marker: 'bad' })
  b.arrow(255, 503, 205, 548, { stroke: C.pro, sw: 1.6, marker: 'pro' })
  b.axis(70, 615, 240, 108, {
    grid: false,
    yticks: [[0.083, '−70'], [0.667, '0'], [1, '+40']],
    xticks: [[0, '0 ms'], [1, '5 ms']],
  })
  b.curve(70, 615, 240, 108, [
    [0, 0.083], [0.08, 0.09], [0.15, 0.2], [0.22, 0.7], [0.28, 0.97], [0.35, 1],
    [0.45, 0.55], [0.55, 0.12], [0.65, 0], [0.8, 0.045], [1, 0.083],
  ], { smooth: true, stroke: C.bad, sw: 2.6 })
  b.text(70, 659, '毫秒时标；有髓纤维传播 70–120 m/s', { size: 11, fill: C.sub })
  b.text(70, 681, 'Nav 升支正反馈 · Kv 复极；Cav 司突触释放与起搏', { size: 11, fill: C.sub })
  // —— 右：植物 ——
  b.ctext(505, 473, '植物：阴离子外流升支', { size: 12.5, weight: 700, fill: C.okD })
  b.text(390, 496, '升支＝Cl^{-} · 苹果酸根外流', { size: 10.5, fill: C.badD })
  b.axis(390, 615, 240, 108, { grid: false, xticks: [[1, '秒级时标']] })
  b.curve(390, 615, 240, 108, [
    [0, 0.08], [0.1, 0.1], [0.22, 0.35], [0.32, 0.85], [0.5, 0.78], [0.65, 0.38], [0.8, 0.15], [1, 0.08],
  ], { smooth: true, stroke: C.ok, sw: 2.6 })
  b.text(398, 596, '复极＝K^{+} 外流＋H^{+} 泵', { size: 10.5, fill: C.proD })
  b.text(360, 659, '含羞草叶片依次闭合 · 捕蝇草 0.1–0.5 s 启动捕叶', { size: 11, fill: C.sub })
  b.text(360, 681, '时标秒级；传播以 cm/s 计——慢于有髓纤维约三个数量级', { size: 11, fill: C.sub })
  b.text(360, 703, 'GLR/CNGC 钙波接力放大，沿维管束传遍全株', { size: 11, fill: C.okD, weight: 600 })

  // ============ 三、成员数量对照条形图 ============
  b.panel(710, 427, 660, 280, { title: '三、成员数量对照：动物 vs 拟南芥（基因数）' })
  b.text(726, 472, '条长 ∝ 基因数（0–50 标尺）；Piezo 由 OSCA/MSL、connexin 由胞间连丝代行对应', { size: 10.5, fill: C.mute })
  b.legend(1150, 472, [['动物（人）', C.acc], ['拟南芥', C.ok]], { size: 11 })
  const fams: Array<[string, number, number, string, string]> = [
    ['Nav', 9, 0, '9', '无'],
    ['Cav', 10, 0, '10', '无'],
    ['LGIC', 45, 0, '数十', '无'],
    ['Piezo', 2, 0, '2', '无'],
    ['connexin', 21, 0, '21', '无'],
    ['Shaker 型 Kv', 40, 9, '约 40', '9'],
    ['CNGC', 6, 20, '约 6', '20'],
    ['iGluR/GLR', 16, 20, '约 16', '20'],
    ['ClC', 9, 7, '9', '7'],
    ['TPC', 2, 1, '2', '1'],
  ]
  fams.forEach(([name, av, pv, al, pl], i) => {
    const top = 490 + i * 21.5
    b.text(726, top + 13, name, { size: 11, weight: 600, fill: C.ink })
    if (av > 0) b.rect(830, top, av * 8.8, 8, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 3 })
    if (pv > 0) b.rect(830, top + 10, pv * 8.8, 8, { fill: C.okL, stroke: C.ok, sw: 1.5, rx: 3 })
    b.text(830 + av * 8.8 + 6, top + 7.5, al, { size: 10, weight: 600, fill: C.accD })
    b.text(830 + pv * 8.8 + 6, top + 17.5, pl, { size: 10, weight: 600, fill: C.okD })
  })

  // ============ 四、功能语义对照表 ============
  b.panel(30, 722, 1340, 263, { title: '四、功能语义对照：动物买毫秒的快，植物买多变环境的稳与钙' })
  b.table(46, 754, 1308, {
    headers: ['通道家族', '动物侧', '拟南芥侧', '共有性', '功能对照'],
    colW: [118, 192, 208, 168, 622],
    rowH: 18,
    fontSize: 11,
    rows: [
      ['Nav', '9 个 SCN 基因', '无', '动物独有', 'AP 升支；植物以阴离子外流代行'],
      ['Cav', '10 个基因', '无', '动物独有', '释放与起搏；植物以 GLR/CNGC 代行'],
      ['LGIC', '数十个基因', '无', '动物独有', '快突触化学；植物走 GLR 与电位波'],
      ['Piezo', '2 个基因', '无（OSCA/MSL 代行）', '动物独有', '触觉；植物感知渗透与膨压'],
      ['connexin', '21 个基因', '无（胞间连丝）', '结构不同源', '电突触 vs 细胞质桥'],
      ['Shaker 型 Kv', '约 40 个 KCN 基因', '9 个', '共有', '复极工具箱 vs K^{+} 物流学'],
      ['CNGC', '约 6 个', '20 个', '共有、植物扩张', '视觉嗅觉换能 vs 免疫钙信号'],
      ['iGluR/GLR', '约 16 个', '20 个', '同源分化', '突触可塑性 vs 防御与根发育'],
      ['ClC', '9 个', '7 个', '共有', '肾浓缩、骨肌 vs 液泡储备调运'],
      ['TPC', '2 个 TPCN', '1 个', '共有', '溶酶体 Na^{+} 通道 vs 液泡 SV 通道'],
    ],
  })
}

export default scene({
  title: '动物与植物通道家族对照：同源部件、两本职业账',
  subtitle: '动物独有 Nav（9 基因）、Cav（10）、LGIC、Piezo、connexin（21）为毫秒快信号；植物扩张 GLR 20、CNGC 20（动物仅约 6）、MSL 10 司防御与发育钙信号；共有而用法不同：Shaker 型动物约 40 个 KCN 基因司复极 vs 拟南芥 9 个司 K^{+} 物流（AKT1/KAT1/GORK/SKOR/AKT2/KC1），ClC 9 对 7 且 AtCLCa 演化为 2NO_{3}^{-}/H^{+} 反向转运体，TPC1 溶酶体 Na^{+} vs 液泡 Ca^{2+}；植物动作电位以 Cl^{-} 外流升支、K^{+} 外流＋H^{+}-ATPase 复极',
  draw,
})
