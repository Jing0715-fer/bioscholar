// cb ch8-s5 其他信号途径与信号的整合终止（39-d 批B 续作）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、信号整合：三路汇合 ============
  b.panel(30, 132, 1340, 384, { title: '一、信号整合：G 蛋白 / RTK / JAK 三路输入的汇合决策' })
  // 三条输入路径（左侧竖排）
  const paths: Array<[string, string, string, string]> = [
    ['GPCR 路径', 'cAMP→PKA', '肾上腺素·胰高血糖素', C.pro],
    ['RTK 路径', 'Ras-MAPK／PI3K-AKT', 'EGF·PDGF·胰岛素', C.dna],
    ['JAK 路径', 'JAK→STAT 二聚入核', '细胞因子·生长激素', C.rna],
  ]
  paths.forEach((p, i) => {
    const y = 208 + i * 88
    b.rect(70, y - 24, 210, 66, { fill: i === 0 ? C.proL : i === 1 ? C.dnaL : C.rnaL, stroke: p[3], sw: 2, rx: 10 })
    b.ctext(175, y - 4, p[0], { size: 11.5, weight: 700, fill: C.ink })
    b.ctext(175, y + 14, p[1], { size: 9.5, fill: C.sub })
    b.ctext(175, y + 32, p[2], { size: 8.5, fill: C.mute })
    b.arrow(284, y + 8, 400, y + 8, { stroke: p[3], sw: 2.4, marker: p[3] === C.pro ? 'pro' : p[3] === C.dna ? 'dna' : 'rna' })
  })
  // 汇合节点（转录网络 + 蛋白互作网络）
  b.rect(400, 240, 240, 130, { fill: C.accL, stroke: C.acc, sw: 2.4, rx: 12 })
  b.ctext(520, 272, '转录网络＋', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(520, 294, '蛋白互作网络', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(520, 318, '（网络整合）', { size: 10, fill: C.mute })
  b.arrow(524, 306, 524, 306, { stroke: C.acc, sw: 0.1 })
  // 输出命运
  b.arrow(644, 305, 760, 305, { stroke: C.acc, sw: 2.6, marker: 'acc' })
  const fates: Array<[string, string]> = [
    ['存活', C.ok], ['增殖', C.warn], ['分化', C.pro], ['死亡', C.bad],
  ]
  fates.forEach((f, i) => {
    const y = 210 + i * 68
    b.tag(830, y, f[0], { fill: i === 0 ? C.okL : i === 1 ? C.warnL : i === 2 ? C.proL : C.badL, stroke: f[1], size: 12, weight: 700, tfill: f[1], pad: 7 })
    b.arrow(766, 305, 788, y, { stroke: C.mute, sw: 1.6, marker: 'mute' })
  })
  b.ctext(830, 456, '综合命运决定', { size: 10.5, weight: 700, fill: C.sub })
  // TGF-β/Smad、Notch、Wnt 简条
  const others: Array<[string, string, string]> = [
    ['TGF-β/Smad', 'I/II 型受体→R-Smad＋Smad4 入核；抑癌（G1 阻滞）与晚期促 EMT 双重性', C.enz],
    ['Notch', '相邻细胞 DSL 配体→两次切割释放 NICD 入核，介导侧向抑制（接触依赖）', C.dna],
    ['Wnt-β-catenin', 'Frizzled＋LRP5/6→破坏复合体（APC-Axin-GSK3β-CK1）解体→β-catenin 入核；APC 缺失为结直肠癌限速事件', C.warn],
  ]
  others.forEach((o, i) => {
    const y = 200 + i * 76
    b.tag(1000, y, o[0], { fill: i === 0 ? C.enzL : i === 1 ? C.dnaL : C.warnL, stroke: o[2], size: 10.5, weight: 700, tfill: o[2], pad: 6 })
    b.wtext(1000, y + 18, o[1], { size: 9, fill: C.sub, maxW: 340, lh: 12.5 })
  })
  b.wtext(70, 452, '核受体：类固醇、甲状腺素、视黄酸等亲脂信号直接入核——受体（约 48 成员超家族）变构释放 Hsp90、二聚化识别 HRE 调控转录，是内分泌治疗（他莫昔芬）的药理基础。', { size: 9.5, fill: C.mute, maxW: 880, lh: 13.5 })

  // ============ 二、信号终止的机制 ============
  b.panel(30, 536, 700, 444, { title: '二、信号终止：五类刹车装置' })
  const stops: Array<[string, string, string]> = [
    ['受体下调', 'GRK 磷酸化＋β-arrestin 结合 → 脱敏并促内吞（至溶酶体降解或再循环）', C.bad],
    ['GTP 酶内定时器', 'Gα 与小 G 蛋白（Ras、Rab、Rho）水解 GTP 自我关断；GAP 加速、RGS 协助', C.warn],
    ['磷酸酶', '酪氨酸磷酸酶（PTP1B、SHP2）与丝/苏氨酸磷酸酶（PP2A）镜像逆转磷酸化', C.dna],
    ['脂磷酸酶', 'PTEN（PIP₃→PIP₂）与 SHIP 拆除脂质第二信使', C.pro],
    ['第二信使清除', 'PDE 降解 cAMP/cGMP；Ca²⁺ 泵（PMCA/SERCA）与缓冲系统收钙', C.rna],
  ]
  stops.forEach((s, i) => {
    const y = 590 + i * 76
    b.circle(80, y, 14, { fill: [C.badL, C.warnL, C.dnaL, C.proL, C.rnaL][i], stroke: s[2], sw: 2 })
    b.ctext(80, y + 4, `${i + 1}`, { size: 11, weight: 700, fill: s[2] })
    b.text(106, y - 6, s[0], { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(106, y + 10, s[1], { size: 9.5, fill: C.sub, maxW: 540, lh: 13.5 })
  })

  // ============ 三、第二信使总表 ============
  b.panel(760, 536, 610, 444, { title: '三、第二信使总表：生成—靶点—清除' })
  b.table(780, 590, 570, {
    headers: ['第二信使', '生成酶', '主要靶', '清除'],
    colW: [120, 150, 180, 120],
    rowH: 52,
    fontSize: 9.5,
    rows: [
      ['cAMP', '腺苷酸环化酶', 'PKA、EPAC、HCN', 'PDE'],
      ['cGMP', '鸟苷酸环化酶', 'PKG、cGMP 门控通道', 'PDE5 等'],
      ['IP₃', 'PLC', 'IP₃ 受体（ER）', '磷酸酶逐级去磷酸'],
      ['DAG', 'PLC', 'PKC', '代谢回收'],
      ['Ca²⁺', '通道 / 钙库', 'CaM、PKC、钙蛋白', 'PMCA/SERCA/缓冲'],
    ],
  })
  b.wtext(780, 946, '受体一旦激活即同步启动终止程序——"可终止性"是信号转导的基本特征之一。', { size: 10, fill: C.mute, maxW: 560, lh: 14 })
}

export default scene({
  title: '信号的整合与终止：多路输入的网络决策与刹车装置',
  subtitle: '三路输入经转录与蛋白互作网络整合为存活/增殖/分化/死亡；TGF-β/Smad、Notch、Wnt 与核受体各成一路；终止靠受体下调、GTP 酶、磷酸酶与 PTEN',
  draw,
})
