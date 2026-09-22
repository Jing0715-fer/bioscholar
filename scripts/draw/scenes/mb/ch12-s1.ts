// mb ch12-s1 癌基因的发现（39-c 批6）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、RSV：首个肿瘤病毒（上，全宽） ============
  b.panel(30, 132, 1340, 250, { title: '一、Rous 肉瘤病毒（1911）：逆转录病毒携带 v-src' })
  // RSV 粒子
  b.circle(140, 240, 46, { fill: C.rnaL, stroke: C.rna, sw: 2.4 })
  b.circle(140, 240, 30, { fill: '#ffffff', stroke: C.rnaD, sw: 1.4 })
  b.ctext(140, 236, 'RNA', { size: 11.5, weight: 700, fill: C.rnaD })
  b.ctext(140, 252, '基因组', { size: 10.5, fill: C.rnaD })
  b.ctext(140, 306, 'RSV 粒子（包膜）', { size: 11.5, fill: C.mute })
  // 反转录
  b.arrow(196, 240, 258, 240, { stroke: C.rna, sw: 2.4, marker: 'rna' })
  b.ctext(227, 224, '反转录', { size: 11, fill: C.rnaD })
  // 整合的前病毒
  b.dna(266, 240, 220, { amp: 7, period: 44, sw: 2.4 })
  b.rect(330, 226, 60, 28, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 4 })
  b.ctext(360, 244, 'v-src', { size: 12, weight: 700, fill: C.enzD })
  b.ctext(376, 306, '前病毒整合入宿主基因组', { size: 11.5, fill: C.mute })
  b.arrow(486, 240, 548, 240, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  // 转化的细胞
  b.ellipse(610, 240, 56, 40, { fill: C.badL, stroke: C.bad, sw: 2.2 })
  b.ctext(610, 236, '转化细胞', { size: 12.5, weight: 700, fill: C.bad })
  b.ctext(610, 254, '（肉瘤）', { size: 10.5, fill: C.bad })
  // 1911 / 1966
  b.rect(700, 176, 640, 130, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 9 })
  b.text(716, 204, '1911 年 Peyton Rous：无细胞滤过液诱发鸡肉瘤', { size: 13.5, weight: 700, fill: C.ink })
  b.wtext(716, 230, '首个肿瘤病毒——属逆转录病毒：基因组 RNA 经反转录整合入宿主基因组，携带病毒癌基因 v-src', { size: 11.5, fill: C.sub, maxW: 608, lh: 17 })
  b.wtext(716, 280, '1966 年获诺贝尔奖，距发现 55 年', { size: 12, weight: 600, fill: C.rnaD, maxW: 608 })
  b.ctext(360, 350, '「转化功能与复制功能」共存于同一病毒颗粒', { size: 11.5, fill: C.mute })

  // ============ 二、三个经典实验（左中） ============
  b.panel(30, 400, 700, 280, { title: '二、三个经典实验确立「癌基因」概念' })
  const exps: [string, string, string][] = [
    ['温度敏感突变体（Martin，1970）', 'ts 突变的 RSV 在允许温度转化细胞、非允许温度不转化但复制正常——转化功能与复制功能分离', '存在独立的转化基因'],
    ['转化缺陷突变体（Vogt）', '缺失约 20% 基因组的突变株正常复制却丧失转化能力——缺失片段即 src', 'src = 转化基因'],
    ['分子杂交（Stehelin / Varmus / Bishop，1976）', '用 v-src 探针在未感染的健康鸡细胞中也检出同源序列——src 是病毒从宿主「偷走」的细胞基因', '原癌基因概念（1989 年诺奖）'],
  ]
  exps.forEach(([t, s, tag], i) => {
    const y = 440 + i * 74
    b.rect(46, y, 668, 64, { fill: i === 2 ? C.okL : '#ffffff', stroke: i === 2 ? C.ok : C.line, sw: 1.3, rx: 8, fillOp: i === 2 ? 0.4 : 1 })
    b.text(62, y + 22, t, { size: 12, weight: 700, fill: C.ink })
    b.wtext(62, y + 42, s, { size: 10.5, fill: C.sub, maxW: 636, lh: 15 })
    b.etext(694, y + 22, tag, { size: 10.5, weight: 600, fill: i === 2 ? C.ok : C.mute })
  })
  b.wtext(46, 664, '结论：正常的细胞基因被劫持或激活即成癌基因——Varmus 与 Bishop 提出原癌基因（proto-oncogene, c-onc）概念', { size: 11.5, weight: 600, fill: C.ok, maxW: 668 })

  // ============ 三、病毒激活的两条路线（右中） ============
  b.panel(710, 400, 660, 280, { title: '三、病毒激活癌基因的两条路线' })
  // 路线 1：转导性
  b.rect(726, 440, 306, 218, { fill: C.enzL, stroke: C.enz, sw: 1.4, rx: 9, fillOp: 0.35 })
  b.ctext(879, 464, '转导性逆转录病毒（急性转化）', { size: 12.5, weight: 700, fill: C.enzD })
  b.wtext(742, 488, 'RSV 捕获 c-src 时 C 端缺失 Tyr527（c-Src 的负调控自抑制位点）——酪氨酸激酶活性组成性激活', { size: 11, fill: C.sub, maxW: 274, lh: 16 })
  b.tag(830, 578, '「去掉刹车」式激活', { fill: '#ffffff', stroke: C.enz, size: 11.5, weight: 700, tfill: C.enzD, pad: 8 })
  b.wtext(742, 608, '多数急性转化病毒（如携带 v-myc 的禽类成髓细胞瘤病毒）还伴随 LTR 强启动子的「过表达」', { size: 10.5, fill: C.mute, maxW: 274, lh: 15 })
  // 路线 2：插入性
  b.rect(1046, 440, 306, 218, { fill: C.badL, stroke: C.bad, sw: 1.4, rx: 9, fillOp: 0.35 })
  b.ctext(1199, 464, '插入性突变（慢性转化）', { size: 12.5, weight: 700, fill: C.bad })
  // 前病毒插入 c-myc 附近
  b.line(1062, 540, 1336, 540, { stroke: C.dna, sw: 2.6 })
  b.rect(1140, 526, 84, 28, { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 4 })
  b.ctext(1182, 544, 'ALV 前病毒', { size: 10, weight: 700, fill: C.rnaD })
  b.rect(1252, 526, 56, 28, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 4 })
  b.ctext(1280, 544, 'c-myc', { size: 11, weight: 700, fill: C.dnaD })
  b.arrow(1224, 566, 1252, 566, { stroke: C.bad, sw: 2, marker: 'bad' })
  b.ctext(1238, 588, '激活', { size: 10.5, weight: 700, fill: C.bad })
  b.wtext(1062, 608, '不含 onc 的逆转录病毒（如 ALV）随机整合，充当活跃「增强子 / 启动子」——插入诱变是发现新癌基因的遗传学工具', { size: 10.5, fill: C.sub, maxW: 274, lh: 15 })

  // ============ 四、DNA 肿瘤病毒的另一手（下，全宽） ============
  b.panel(30, 700, 1340, 260, { title: '四、DNA 肿瘤病毒的另一手：结合并失活抑癌蛋白' })
  const dnav: [string, string][] = [
    ['SV40 大 T 抗原', '结合并失活 p53 · Rb'],
    ['HPV E6 / E7', 'E6 降解 p53 · E7 失活 Rb'],
    ['腺病毒 E1A / E1B', 'E1A 结 Rb · E1B 结 p53'],
  ]
  dnav.forEach(([t, s], i) => {
    const x = 56 + i * 200
    b.rect(x, 744, 186, 56, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 8 })
    b.ctext(x + 93, 768, t, { size: 12, weight: 700, fill: C.proD })
    b.ctext(x + 93, 788, s, { size: 10.5, fill: C.mute })
    if (i < 2) b.arrow(x + 188, 772, x + 198, 772, { stroke: C.sub, sw: 2, marker: 'ink' })
  })
  // p53 / Rb
  b.rect(680, 744, 140, 56, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(750, 768, 'p53', { size: 13, weight: 700, fill: C.bad })
  b.ctext(750, 788, '抑癌蛋白', { size: 10.5, fill: C.bad })
  b.rect(840, 744, 140, 56, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(910, 768, 'Rb', { size: 13, weight: 700, fill: C.bad })
  b.ctext(910, 788, '抑癌蛋白', { size: 10.5, fill: C.bad })
  b.line(644, 772, 672, 772, { stroke: C.bad, sw: 2.4 })
  b.line(672, 764, 684, 780, { stroke: C.bad, sw: 2.4 })
  b.line(684, 764, 672, 780, { stroke: C.bad, sw: 2.4 })
  b.ctext(1020, 772, '→ 转化', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(56, 824, 1296, 60, { fill: C.panel, stroke: C.line, sw: 1.2, rx: 9 })
  b.wtext(72, 848, '与逆转录病毒「携带 / 激活正调控基因」相反，DNA 肿瘤病毒（SV40 · 多瘤 · HPV · 腺病毒）的致癌蛋白通过结合并失活宿主抑癌蛋白实现转化——两条路线殊途同归：', { size: 11.5, fill: C.sub, maxW: 1264, lh: 17 })
  b.wtext(72, 872, '癌症是细胞固有基因调控网络的疾病，病毒只是最早把「扳机」递到研究者手中的信使', { size: 12, weight: 600, fill: C.ink, maxW: 1264 })
  b.ctext(700, 926, '范式转移：从「癌症是否遗传」之争 → 「哪些基因 · 何种改变 · 怎样组合」的分子解剖学', { size: 12.5, weight: 600, fill: C.accD })
}

export default scene({
  title: '癌基因的发现：从 Rous 肉瘤病毒到原癌基因',
  subtitle: '1911 RSV → ts / 缺失 / 分子杂交三实验确立 v-src 源自 c-src——转导 / 插入两条激活路线与 DNA 肿瘤病毒的抑癌蛋白劫持',
  draw,
})
