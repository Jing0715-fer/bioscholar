// im ch11-s3 调节性 T 细胞与免疫调节网络：Foxp3 · 抑制手段 · 独特型网络（39-g 批C）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、Treg 的两支来源 ============
  b.panel(30, 132, 1340, 334, { title: '一、Treg 两支来源：胸腺 tTreg 守自身抗原，外周 iTreg 守环境抗原' })

  b.rect(70, 182, 1240, 44, { fill: C.proL, fillOp: 0.5, stroke: C.pro, sw: 1.5, rx: 8 })
  b.text(90, 210, 'Treg 常用表型：CD4⁺CD25⁺Foxp3⁺', { size: 12, weight: 700, fill: C.proD })
  b.text(640, 210, '人类外周血 CD4⁺ T 细胞中约占 5%–10%', { size: 12, weight: 700, fill: C.proD })

  b.table(60, 240, 1280, {
    headers: ['比较项目', 'tTreg（nTreg）', 'iTreg（pTreg）'],
    colW: [180, 550, 550],
    rowH: 34,
    fontSize: 11,
    rows: [
      ['产生场所', '胸腺', '外周（黏膜为主）'],
      ['诱导信号', '中等亲和力 TCR、CD28 与 IL-2', 'TGF-β 加 IL-2 或维 A 酸、无炎症环境'],
      ['特异性偏好', '自身抗原', '环境与共生抗原'],
      ['谱系稳定性', 'Foxp3 表观遗传稳定（TSDR 去甲基化）', '稳定性较低、可随环境波动'],
      ['主要职能', '防自身免疫', '黏膜耐受、口服耐受与母胎界面耐受'],
    ],
  })

  // ============ 二、Foxp3 与抑制手段 ============
  b.panel(30, 478, 1340, 250, { title: '二、Foxp3：命脉转录因子 · Treg 的四板斧抑制手段' })

  b.rect(60, 528, 560, 180, { fill: C.badL, fillOp: 0.3, stroke: C.bad, sw: 1.6, rx: 9 })
  b.text(78, 552, '两种「天然实验」证明 Foxp3 不可或缺', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(84, 578, 250, 50, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 8 })
  b.ctext(209, 598, 'Scurfy 小鼠', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(209, 616, 'Foxp3 缺陷 → 多器官自身免疫', { size: 9, fill: C.sub })
  b.rect(346, 578, 250, 50, { fill: C.bg, stroke: C.bad, sw: 1.4, rx: 8 })
  b.ctext(471, 598, '人类 IPEX 综合征', { size: 11.5, weight: 700, fill: C.ink })
  b.ctext(471, 616, 'Foxp3 突变 → X 连锁多器官自身免疫', { size: 9, fill: C.sub })
  b.wtext(78, 662, 'Foxp3 坍塌 = Treg 坍塌 = 免疫稳态坍塌。', { size: 11, weight: 600, fill: C.bad, maxW: 520, lh: 15 })

  b.rect(650, 528, 690, 180, { fill: C.dnaL, fillOp: 0.4, stroke: C.dna, sw: 1.6, rx: 9 })
  b.text(668, 552, '四板斧：因子压制 · 营养掳夺 · 配体掣肘 · 代谢剥夺', { size: 12.5, weight: 700, fill: C.dnaD })
  const tools: Array<[number, number, string, string]> = [
    [668, 576, '① 抑制性因子', '分泌 IL-10、TGF-β、IL-35 压抑效应 T'],
    [1010, 576, '② CD25 掳夺 IL-2', '高亲和受体吃光局部 IL-2，效应 T 饿馁'],
    [668, 646, '③ CTLA-4 掣夺 B7', '抢走 APC 的 B7，拆掉第二信号'],
    [1010, 646, '④ IDO 代谢剥夺', '色氨酸耗竭环境令效应 T 停摆'],
  ]
  tools.forEach(([x, y, t, s]) => {
    b.rect(x, y, 320, 62, { fill: C.bg, stroke: C.dna, sw: 1.4, rx: 8 })
    b.text(x + 14, y + 22, t, { size: 11, weight: 700, fill: C.dnaD })
    b.wtext(x + 14, y + 40, s, { size: 9.5, fill: C.sub, maxW: 296, lh: 12 })
  })

  // ============ 三、独特型网络与稳态环 ============
  b.panel(30, 740, 1340, 234, { title: '三、Jerne 独特型网络（1974）· 应答的稳态环' })

  b.rect(60, 790, 620, 152, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.6, rx: 9 })
  b.text(78, 814, '独特型-抗独特型网络：识别库内部的镜像之镜', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(78, 838, '针对抗原的抗体（Ab1）之独特位可诱生抗独特型抗体（Ab2），Ab2 又被 Ab3 识别——识别库内部镜像相生、自成网络，对外应答必在网内激起「回声」（内影像概念）。', { size: 10.5, fill: C.sub, maxW: 580, lh: 15 })
  b.wtext(78, 906, 'Jerne 因网络学说与单克隆抗体技术同获 1984 年诺贝尔生理学或医学奖。', { size: 10.5, weight: 600, fill: C.accD, maxW: 580, lh: 14 })

  b.rect(710, 790, 630, 152, { fill: C.proL, fillOp: 0.45, stroke: C.pro, sw: 1.6, rx: 9 })
  b.text(728, 814, '稳态环：正向放大与负向收敛的合围', { size: 12.5, weight: 700, fill: C.proD })
  b.wtext(728, 838, '免疫应答由正向放大（效应执行）与负向收敛（调节抑制）构成稳态环：过短致清除不力，过长致自身免疫。', { size: 10.5, fill: C.sub, maxW: 590, lh: 15 })
  b.wtext(728, 886, '多环节冗余的代价：疾病多需多环节联合薄弱才会显形。', { size: 10.5, weight: 600, fill: C.proD, maxW: 590, lh: 14 })
}

export default scene({
  title: '调节性 T 细胞与免疫调节网络：Foxp3、抑制手段与独特型网络',
  subtitle: 'Treg 分胸腺来源 tTreg（阴性选择中等亲和力分支分流，守护自身抗原耐受）与外周诱导 iTreg（TGF-β 等环境诱导，主黏膜与母胎耐受）；Foxp3 为命脉转录因子，Scurfy 小鼠与 IPEX 综合征证明其缺陷即多器官自身免疫；Treg 经 IL-10、TGF-β、IL-35，联合 CD25 掳夺 IL-2、CTLA-4 掣夺 B7 与 IDO 代谢剥夺执行抑制；Jerne 1974 年网络学说以 Ab1-Ab2-Ab3 与内影像刻画识别库镜像调节，1984 年与单抗技术同获诺贝尔奖；稳态环过长过短皆有代价',
  draw,
})
