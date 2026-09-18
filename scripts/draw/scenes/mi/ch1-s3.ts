// mi ch1-s3 微生物与人类：从瘟疫到文明（39-f 批1）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、三大流行病时间轴 ============
  b.panel(30, 132, 1340, 316, { title: '一、改写人类历史的三大流行病（1347–1992）' })
  b.timelineH(110, 296, 1220, [
    { at: 0.03, label: '1347–1351 黑死病', sub: '鼠疫耶尔森氏菌·欧洲约 1/3 人口', above: true, c: C.bad },
    { at: 0.30, label: '1817 霍乱大流行开始', sub: 'O1 群霍乱弧菌·水路与贸易网络', above: false, c: C.bad },
    { at: 0.42, label: '1854 宽街水泵事件', sub: '斯诺统计地图锁定水源——流行病学开山之作', above: true, c: C.acc },
    { at: 0.55, label: '1894 香港分离鼠疫菌', sub: '北里柴三郎与耶尔森先后分离病原', above: false, c: C.dna },
    { at: 0.68, label: '1918 大流感（H1N1）', sub: '感染约 5 亿·死亡 5000 万–1 亿', above: true, c: C.bad },
    { at: 0.82, label: '1961 第七次霍乱', sub: '埃尔托生物型', above: false, c: C.bad },
    { at: 0.94, label: '1992 O139 新株', sub: '霍乱弧菌新血清群', above: true, c: '#d97706' },
  ])
  b.ctext(700, 418, '1918 大流感死亡数（5000 万–1 亿）远超第一次世界大战直接死于战火的总数；黑死病深刻重塑了欧洲的社会结构与经济关系', { size: 11.5, fill: C.mute })

  // ============ 二、四大支柱 + 工具箱 + 人体微生物组 ============
  b.panel(30, 468, 1340, 512, { title: '二、造福文明：发酵食品、抗生素、发酵工业与环境治理四大支柱' })

  const pillar = (x: number, y: number, title: string, body: string, tint: string, tcol: string) => {
    b.rect(x, y, 395, 150, { fill: C.bg, stroke: tint, sw: 1.6, rx: 9 })
    b.text(x + 18, y + 30, title, { size: 14.5, weight: 700, fill: tcol })
    b.wtext(x + 18, y + 58, body, { size: 12, fill: C.sub, maxW: 360, lh: 19 })
  }
  pillar(50, 516, '① 发酵食品文明', '数千年的酿酒、制酱与乳制品实践——史前期即已「知其然」的自觉应用，支撑起定居文明的餐桌。', C.rna, C.rnaD)
  pillar(465, 516, '② 抗生素时代', '1928 年弗莱明发现青霉素，开启抗生素时代——人类首次系统性地战胜细菌感染。', C.enz, C.enzD)
  pillar(50, 686, '③ 氨基酸·维生素·酶制剂工业', '工业发酵的三大产品线：氨基酸、维生素与酶制剂——医药与食品工业的重要支柱。', C.acc, C.accD)
  pillar(465, 686, '④ 环境治理', '活性污泥法净化污水；生物修复（bioremediation）降解土壤与水体中的污染物。', C.ok, C.ok)

  // 底部两条：基因工程工具箱 + 餐桌威胁
  b.rect(50, 856, 400, 108, { fill: C.accL, fillOp: 0.35, stroke: C.acc, sw: 1.5, rx: 9 })
  b.text(68, 884, '⑤ 基因工程工具箱', { size: 13.5, weight: 700, fill: C.accD })
  b.wtext(68, 906, '限制酶、Taq 聚合酶、载体与表达宿主皆取自微生物——1982 年重组人胰岛素为标志成果。', { size: 11.5, fill: C.sub, maxW: 364, lh: 17 })
  b.rect(460, 856, 400, 108, { fill: C.badL, fillOp: 0.35, stroke: C.bad, sw: 1.5, rx: 9 })
  b.text(478, 884, '有害面：餐桌上的威胁', { size: 13.5, weight: 700, fill: C.bad })
  b.wtext(478, 906, '沙门氏菌（禽蛋肉制品）· 金葡菌耐热肠毒素（久置糕点）· 肉毒毒素（厌氧罐头，已知毒性最强的生物毒素之一）', { size: 11, fill: C.sub, maxW: 364, lh: 16 })

  // 右：人体微生物组
  b.rect(880, 516, 460, 448, { fill: C.proL, fillOp: 0.3, stroke: C.pro, sw: 1.8, rx: 10 })
  b.text(898, 546, '人体微生物组：看不见的「器官」', { size: 15, weight: 700, fill: C.proD })
  // 人体示意
  b.circle(1010, 588, 22, { fill: C.panelB, stroke: C.sub, sw: 2.2 })
  b.rect(982, 614, 56, 92, { fill: C.panelB, stroke: C.sub, sw: 2.2, rx: 24 })
  b.ellipse(1010, 660, 17, 26, { fill: C.rnaL, stroke: C.rna, sw: 1.6 })
  const flora: Array<[number, number]> = [[975, 622], [1046, 636], [988, 694], [1032, 702], [967, 664], [1052, 672]]
  flora.forEach(([x, y]) => b.circle(x, y, 6, { fill: C.proL, stroke: C.pro, sw: 1.4 }))
  b.ctext(1145, 640, '皮肤·口腔·肠道等', { size: 11, weight: 600, fill: C.mute })
  b.ctext(1145, 660, '黏膜表面定殖菌群', { size: 11, weight: 600, fill: C.mute })
  // 三张数据卡
  const stat = (y: number, main: string, note: string) => {
    b.rect(900, y, 420, 54, { fill: C.bg, stroke: C.line, sw: 1.2, rx: 7 })
    b.text(916, y + 24, main, { size: 13.5, weight: 700, fill: C.proD })
    b.text(916, y + 43, note, { size: 10.5, fill: C.mute })
  }
  stat(756, '细菌数 : 人体自身细胞数 ≈ 1.3 : 1', '经重估两者为同一数量级（旧估「10:1」已被修正）')
  stat(818, '肠道宏基因组 ≈ 人基因组的 100 倍以上', '——人体的「第二基因组」')
  stat(880, '参与营养消化、免疫训练与代谢调节', '——被称为「看不见的器官」')
}

export default scene({
  title: '微生物与人类：从瘟疫到文明',
  subtitle: '黑死病（1347–1351）夺走欧洲约 1/3 人口；1918 大流感感染约 5 亿、死亡 5000 万–1 亿；而发酵食品、抗生素与环境治理反向造福文明',
  draw,
})
