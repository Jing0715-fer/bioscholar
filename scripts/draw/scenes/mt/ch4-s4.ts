// mt ch4-s4 动植物 AQP 调控对照：共同逻辑（调数量）、两界调控链、底物谱大表（人 13 对拟南芥 35）、应用面板
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、共同逻辑与两界调控链对照 ============
  b.panel(30, 132, 1340, 352, { title: '一、共同逻辑：调数量而非调单孔——两界调控链对照' })
  b.rect(50, 154, 1300, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(700, 181, '单孔速率 ≈3×10^{9} 个水分子/(s·单体)——刻在结构里的出厂参数；两界殊途同归：调节「膜上通道数量」，旋钮只有囊泡贩运（插入/内吞）与转录（合成/停工），磷酸化兼任门控与贩运信号', { size: 12, weight: 700, fill: C.ink })
  // —— 左：动物链 ——
  b.text(60, 226, '动物范式：激素指挥的囊泡插入——快在「插膜」', { size: 12, weight: 700, fill: C.accD })
  const animal: [string, string][] = [
    ['AVP', '加压素'],
    ['V2 受体', 'Gs 耦联'],
    ['cAMP ↑', '第二信使'],
    ['PKA', '激酶级联'],
    ['pSer256', 'AQP2 获证'],
    ['插入顶膜', '分钟级'],
  ]
  animal.forEach(([t, s], i) => {
    const x = 60 + i * 96
    b.rect(x, 246, 84, 46, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
    b.ctext(x + 42, 265, t, { size: 10.5, weight: 700, fill: C.accD })
    b.ctext(x + 42, 283, s, { size: 8.5, fill: C.sub })
    if (i < 5) b.arrow(x + 86, 269, x + 94, 269, { stroke: C.sub, sw: 1.8 })
  })
  b.text(60, 320, '撤除信号 → 内吞回收，水导回落——插入/内吞动态平衡决定膜上数量', { size: 10, fill: C.sub })
  b.text(60, 342, '慢档：持续 AVP 于数小时–数天上调 AQP2 转录（脱水、妊娠等慢适应）', { size: 10, fill: C.sub })
  b.text(60, 364, '出口恒定：基侧 AQP3/AQP4 常驻——调节面压缩到顶膜一维，控制精度极高', { size: 10, fill: C.sub })
  b.text(60, 386, '药理入口：V2 拮抗剂托伐普坦令集合管「拒绝插膜」，卸载水潴留', { size: 10, fill: C.sub })
  // —— 右：植物链 ——
  b.text(710, 226, '植物范式：下调与胞吞为主的防御性水导——快在「撤膜」', { size: 12, weight: 700, fill: C.okD })
  const plant: [string, string][] = [
    ['干旱/ABA', '胁迫信号'],
    ['PIP 转录↓', 'mRNA 下调'],
    ['去磷酸化', '孔口关闭'],
    ['泛素化', '打上标签'],
    ['网格蛋白胞吞', '撤下质膜'],
    ['液泡降解', '水导压低'],
  ]
  plant.forEach(([t, s], i) => {
    const x = 710 + i * 96
    b.rect(x, 246, 84, 46, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
    b.ctext(x + 42, 265, t, { size: 10.5, weight: 700, fill: C.okD })
    b.ctext(x + 42, 283, s, { size: 8.5, fill: C.sub })
    if (i < 5) b.arrow(x + 86, 269, x + 94, 269, { stroke: C.sub, sw: 1.8 })
  })
  b.text(710, 320, '土壤水势低于细胞水势时，高水导＝被动失水——植物主力调节是「减法」', { size: 10, fill: C.sub })
  b.text(710, 342, '加法场合：伸长细胞、展开叶片与黎明前保卫细胞上调水路备水', { size: 10, fill: C.sub })
  b.text(710, 364, 'ABA 双端收紧：压低根叶 PIP 转录＋关闭气孔——进水管与出水口同拧', { size: 10, fill: C.sub })
  b.text(710, 386, '旱地保水需减通道、肾保水需加通道——方向相反、逻辑同构', { size: 10, fill: C.sub })
  // —— 磷酸开关的平行 ——
  b.rect(60, 408, 390, 56, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.text(75, 430, 'AQP2 · Ser256', { size: 12, weight: 700, fill: C.proD })
  b.text(75, 450, '磷酸化 → 管「膜上有多少」（贩运信号）', { size: 9.5, fill: C.sub })
  b.rect(890, 408, 390, 56, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.text(905, 430, 'SoPIP2;1 · Ser283', { size: 12, weight: 700, fill: C.okD })
  b.text(905, 450, '磷酸化 → 管「孔开不开」（门控开关）', { size: 9.5, fill: C.sub })
  b.line(470, 436, 870, 436, { stroke: C.mute, sw: 1.8, marker: 'mute', markerStart: 'mute', dash: '7 5' })
  b.ctext(670, 424, '同一枚磷酸旋钮', { size: 11, weight: 700, fill: C.ink })
  b.ctext(670, 456, '拧的是不同的螺母', { size: 10.5, fill: C.mute })

  // ============ 二、底物谱大表：人 13 对拟南芥 35 ============
  b.panel(30, 500, 810, 485, { title: '二、底物谱大表：人 13 对拟南芥 35' })
  b.text(46, 544, '单孔速率两界同为约 3×10^{9} 个水分子/(s·单体)（结构常数）——差异全在谱系、区室与调控', { size: 10.5, fill: C.sub })
  b.table(42, 558, 780, {
    headers: ['谱系', '成员', '代表底物', '组织/区室', '主要调控'],
    colW: [148, 120, 152, 152, 208],
    rowH: 34,
    fontSize: 9.5,
    rows: [
      ['人·经典水通道', 'AQP0/1/2/4/5/6/8', '水（个别兼 H_{2}O_{2}）', '肾、脑、晶状体、腺体', 'AQP2 囊泡插入；余多组成型'],
      ['人·水甘油通道', 'AQP3/7/9/10', '水、甘油、尿素', '皮肤、脂肪、肝、小肠', '转录与代谢信号'],
      ['人·非典型', 'AQP11/12', '水（NPA 偏离）', '内质网、胰腺', '组成型为主'],
      ['拟南芥·PIP', '13 个', '水（CO_{2} 通透有争议）', '全株质膜', '磷酸化、胞吞、转录下调'],
      ['拟南芥·TIP', '10 个', '水；TIP2;1 兼 NH_{3}', '液泡膜', '磷酸化'],
      ['拟南芥·NIP', '9 个', '硼酸、硅酸、甘油', '根与幼叶等', '缺素转录诱导'],
      ['拟南芥·SIP', '3 个', '水（低导度）', '内质网', '组成型'],
    ],
  })
  b.wtext(46, 862, '三条断层线：① 动物按器官切分、植物按膜区室切分；② 调节重心「插膜」对「撤膜」；③ 水甘油分支两套征募——动物征入脂代谢甘油流（AQP7 出脂肪、AQP9 入肝），植物征入类金属营养流（硼入根、硅入茎叶）', { size: 10, maxW: 770, lh: 18, fill: C.sub })
  b.text(46, 908, '核心水通道（AQP1、AQP2 与 PIP、TIP）严守纯水本行——底物谱宽窄是家族分化交给生态位的答卷', { size: 10, fill: C.sub })
  b.text(46, 934, '大肠杆菌 AqpZ 与 GlpF 早于动植物分家已分化水/甘油两支——两界亚科皆继承改写细菌模块', { size: 10, fill: C.sub })
  b.text(46, 960, '35 对 13 的编制差异无关先进，只关乎生存方式的形状', { size: 10, weight: 600, fill: C.ink })

  // ============ 三、应用面板：从田间到临床 ============
  b.panel(860, 500, 510, 485, { title: '三、应用面板：从田间到临床' })
  b.rect(872, 538, 486, 100, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.text(886, 560, '农学 · 水分利用效率（WUE）', { size: 11.5, weight: 700, fill: C.okD })
  b.wtext(886, 580, '转基因过表达 PIP（烟草、拟南芥）：水分充足时蒸腾与生长同步提升，干旱下却因「水管过大」失水更快；反向下调可节水却抑生长——适度水导、按需切换才是杠杆，育种界转而把 PIP 自然等位变异与气孔行为、根系构型打包评估', { size: 9.5, maxW: 458, lh: 18, fill: C.sub })
  b.rect(872, 648, 486, 88, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.text(886, 670, '医学 · 肿瘤迁移', { size: 11.5, weight: 700, fill: C.enzD })
  b.wtext(886, 690, '多种肿瘤高表达 AQP3/AQP5——迁移前沿的水快速进出被认为促进伪足伸展与侵袭；水通道因此成为肿瘤迁移能力与预后的候选标志物', { size: 9.5, maxW: 458, lh: 18, fill: C.sub })
  b.rect(872, 746, 486, 100, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.text(886, 768, '前沿 · CO_{2} 通透争议', { size: 11.5, weight: 700, fill: C.accD })
  b.wtext(886, 788, 'AQP1 与烟草 PIP1;2 曾被报道对 CO_{2} 具通透性、可能参与 CO_{2} 转运，但电生理与同位素证据长期互相矛盾、至今未有定论——「水通道是否兼职气体通道」是家族边界上最活跃的问号', { size: 9.5, maxW: 458, lh: 23, fill: C.sub })
  b.rect(872, 856, 486, 88, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 8 })
  b.text(886, 878, '工具 · 成药性难题', { size: 11.5, weight: 700, fill: C.warnD })
  b.wtext(886, 898, '孔道口袋小而深、胞外可及面窄——汞之外的特异性抑制剂久攻不下，靶向 AQP 的药物至今寥寥；前沿的另一半是工具的匮乏', { size: 9.5, maxW: 458, lh: 18, fill: C.sub })
  b.text(872, 968, '一个已成定论的家族，边界处仍有活跃的前沿', { size: 9.5, fill: C.mute })
}

export default scene({
  title: '动植物 AQP 调控对照：调数量而非调单孔',
  subtitle:
    '单孔速率约 3×10^{9} 个水分子/秒是刻在结构里的常数——动物以 AVP–cAMP–PKA 链分钟级插入 AQP2 囊泡并辅以转录慢档，植物以 ABA 转录下调与去磷酸化、泛素化胞吞快速撤膜；AQP2 Ser256 管膜上有多少、SoPIP2;1 Ser283 管孔开不开，同一枚磷酸旋钮拧不同螺母',
  draw,
})
