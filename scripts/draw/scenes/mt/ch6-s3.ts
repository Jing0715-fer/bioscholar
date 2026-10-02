// mt ch6-s3 植物 P3A H⁺-ATPase：AHA 家族 · 14-3-3 总开关 · PMF 双组图 · 四大功能岗位
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、AHA 家族与 C 端 14-3-3 总开关 =================
  b.panel(30, 132, 700, 455, { title: '一、AHA 家族与 C 端 14-3-3 总开关' })
  b.text(60, 172, '拟南芥 H^{+}-ATPase 基因家族（AHA＝Arabidopsis H^{+}-ATPase）', { size: 10.5, weight: 600, fill: C.sub })
  // 11 个基因条
  for (let k = 0; k < 11; k++) {
    const gx = 60 + k * 58
    const main = k < 3
    b.rect(gx, 185, 52, 30, { fill: main ? C.okL : C.panelB, stroke: main ? C.ok : C.line, sw: main ? 1.8 : 1.2, rx: 6 })
    b.ctext(gx + 26, 204, `AHA${k + 1}`, { size: 9.5, weight: 600, fill: main ? C.okD : C.sub })
  }
  b.wtext(60, 240, '11 个成员：AHA1 偏根、AHA2 广谱（1/2/3 主力，双突变致死）；约 100 kDa 单亚基、10 TMS、每 ATP 泵出 1 个 H^{+}——化学计量 1:1、净外移一个正电荷', { size: 10, fill: C.sub, maxW: 630, lh: 23 })
  // 三阶段调控链
  const stage = (x: number, w: number, title: string) => {
    b.rect(x, 285, w, 185, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 9 })
    b.ctext(x + w / 2, 308, title, { size: 11.5, weight: 700, fill: C.ink })
  }
  stage(55, 170, '① 自抑制态')
  stage(265, 170, '② Thr947 磷酸化')
  stage(475, 235, '③ 14-3-3 二聚体桥连')
  b.arrow(227, 377, 263, 377, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(437, 377, 473, 377, { stroke: C.sub, sw: 2, marker: 'ink' })
  // 阶段一：R 域压住胞质域
  {
    b.bilayer(70, 345, 140)
    b.rect(105, 322, 48, 76, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
    b.ctext(129, 366, 'AHA', { size: 8.5, weight: 700, fill: C.proD })
    b.ellipse(129, 415, 26, 17, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.rect(98, 400, 64, 24, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 10 })
    b.ctext(130, 415, 'R 域', { size: 9, weight: 700, fill: C.warnD })
    b.wtext(66, 448, 'C 端 R 域搭在胞质域上，压低泵速', { size: 9, fill: C.mute, maxW: 155, lh: 18 })
  }
  // 阶段二：Thr947 打上 ~P
  {
    b.bilayer(280, 345, 140)
    b.rect(315, 322, 48, 76, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
    b.ctext(339, 366, 'AHA', { size: 8.5, weight: 700, fill: C.proD })
    b.ellipse(339, 415, 26, 17, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.rect(308, 398, 62, 22, { fill: C.warnL, stroke: C.warn, sw: 1.8, rx: 10 })
    b.ctext(339, 412, 'R 域', { size: 9, weight: 700, fill: C.warnD })
    b.circle(378, 392, 10, { fill: C.enz, stroke: C.enzD, sw: 1.5 })
    b.ctext(378, 396, 'P', { size: 9, weight: 700, fill: '#ffffff' })
    b.text(340, 380, 'Thr947', { size: 8, weight: 700, fill: C.enzD })
    b.wtext(276, 448, '激酶在 Thr947 打上 ~P，创建 14-3-3 结合位点', { size: 9, fill: C.mute, maxW: 155, lh: 18 })
  }
  // 阶段三：14-3-3 二聚体桥连两个泵
  {
    b.bilayer(490, 345, 190)
    b.rect(515, 322, 44, 76, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
    b.rect(615, 322, 44, 76, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
    b.ellipse(537, 412, 22, 15, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.ellipse(637, 412, 22, 15, { fill: C.proL, stroke: C.pro, sw: 1.8 })
    b.rect(505, 372, 190, 24, { fill: C.dnaL, stroke: C.dna, sw: 2, rx: 12 })
    b.line(600, 374, 600, 394, { stroke: C.dna, sw: 1.2, dash: '3 3' })
    b.ctext(552, 388, '14-3-3', { size: 8.5, weight: 700, fill: C.dnaD })
    b.ctext(648, 388, '14-3-3', { size: 8.5, weight: 700, fill: C.dnaD })
    b.circle(537, 404, 7, { fill: C.enz, stroke: C.enzD, sw: 1.2 })
    b.ctext(537, 407, 'P', { size: 7, weight: 700, fill: '#ffffff' })
    b.circle(637, 404, 7, { fill: C.enz, stroke: C.enzD, sw: 1.2 })
    b.ctext(637, 407, 'P', { size: 7, weight: 700, fill: '#ffffff' })
    b.wtext(486, 448, '一个二聚体同时绑两个泵：锁离 R 域＋促成二聚排列＝全激活', { size: 9, fill: C.mute, maxW: 215, lh: 18 })
  }
  b.text(46, 494, '糠菌素（fusicoccin）恰好焊死 14-3-3–C 端复合体：泵「油门卡死」在激活态——气孔失控开放、水分不可逆散失', { size: 10, weight: 600, fill: C.enzD })
  b.wtext(46, 520, '果园病理学趣闻：毒素源自意大利桃与扁桃园病原真菌 Fusicoccum amygdali（20 世纪 70 年代末查明）——一场病害让生理学家认识了泵的开关，毒素反成实验室最趁手的激活工具', { size: 9.5, fill: C.sub, maxW: 650, lh: 18 })
  b.wtext(46, 560, 'Thr947 之外尚有多个磷酸化位点：蓝光、蔗糖与病原分子模式都汇入同一节点（总线电机），磷酸酶随时把泵拉回自抑制态——拉锯决定实时功率', { size: 9.5, fill: C.sub, maxW: 650, lh: 18 })

  // ================= 二、一泵两得：PMF 双组图 =================
  b.panel(750, 132, 620, 455, { title: '二、一泵两得：PMF 双组图' })
  // —— ΔpH 化学项 ——
  b.text(766, 188, 'ΔpH：化学项', { size: 11.5, weight: 700, fill: C.warnD })
  b.rect(775, 202, 250, 92, { fill: C.warnL, fillOp: 0.45, stroke: C.warn, sw: 1.2, dash: '5 4', rx: 8 })
  b.ctext(900, 228, '质外体 pH 5.5', { size: 11, weight: 700, fill: C.warnD })
  for (const [dx, dy] of [[35, 48], [65, 42], [95, 50], [125, 44], [155, 50], [185, 44], [215, 50]] as [number, number][]) {
    b.circle(775 + dx, 202 + dy, 5, { fill: C.warn, fillOp: 0.7 })
  }
  b.bilayer(775, 300, 250)
  b.rect(868, 280, 64, 62, { fill: C.proL, stroke: C.pro, sw: 2, rx: 10 })
  b.ctext(900, 315, 'AHA', { size: 10, weight: 700, fill: C.proD })
  b.arrow(884, 278, 884, 258, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.arrow(916, 278, 916, 258, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(884, 246, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.ion(916, 246, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.rect(775, 322, 250, 92, { fill: C.accL, fillOp: 0.4, stroke: C.acc, sw: 1.2, dash: '5 4', rx: 8 })
  b.ctext(900, 350, '细胞质 pH 7.2', { size: 11, weight: 700, fill: C.accD })
  b.circle(850, 372, 5, { fill: C.acc, fillOp: 0.7 })
  b.circle(940, 368, 5, { fill: C.acc, fillOp: 0.7 })
  b.tag(900, 442, 'ΔpH ≈ 1.7（约 100 mV 电学当量）', { fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 10, weight: 700 })
  // —— Δψ 电学项 ——
  b.text(1055, 188, 'Δψ：电学项', { size: 11.5, weight: 700, fill: C.accD })
  b.bilayer(1070, 300, 250)
  b.rect(1163, 280, 64, 62, { fill: C.proL, stroke: C.pro, sw: 2, rx: 10 })
  b.ctext(1195, 315, 'AHA', { size: 10, weight: 700, fill: C.proD })
  b.arrow(1195, 278, 1195, 258, { stroke: C.warn, sw: 1.8, marker: 'warn' })
  b.ion(1195, 246, 'H^{+}', { r: 9, fill: C.warnL, stroke: C.warn, tfill: C.warnD, size: 7 })
  b.ctext(1150, 272, '＋', { size: 13, weight: 700, fill: C.bad })
  b.ctext(1195, 262, '＋', { size: 13, weight: 700, fill: C.bad })
  b.ctext(1240, 272, '＋', { size: 13, weight: 700, fill: C.bad })
  b.ctext(1150, 338, '−', { size: 13, weight: 700, fill: C.acc })
  b.ctext(1195, 348, '−', { size: 13, weight: 700, fill: C.acc })
  b.ctext(1240, 338, '−', { size: 13, weight: 700, fill: C.acc })
  // 电压表（半圆表盘）
  b.path('M1165,425 A30,30 0 0 1 1225,425', { fill: 'none', stroke: C.sub, sw: 2 })
  b.arrow(1195, 425, 1178, 407, { stroke: C.bad, sw: 2.2, marker: 'bad' })
  b.circle(1195, 425, 4, { fill: C.sub })
  b.ctext(1195, 452, '−120 ~ −250 mV', { size: 12, weight: 700, fill: C.ink })
  b.ctext(1195, 474, '（超极化，负值加深）', { size: 9.5, fill: C.mute })
  // —— PMF 公式条 ——
  b.rect(775, 480, 570, 90, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 10 })
  b.ctext(1060, 514, 'PMF ＝ ΔpH ＋ Δψ', { size: 17, weight: 700, fill: C.ink })
  b.wtext(790, 540, '两项同向：把 H^{+}「赶出」的能量以回流倾向储存于膜两侧，总势能坡折合约 −200 ~ −350 mV——第 8 章的上百个 H^{+} 同向体与反向体都从这道坡上取数', { size: 9.5, fill: C.sub, maxW: 545, lh: 18 })

  // ================= 三、四大功能岗位 =================
  b.panel(30, 602, 1340, 380, { title: '三、四大功能岗位：一台引擎，四路输出' })
  // 中心引擎
  b.circle(700, 795, 70, { fill: C.okL, stroke: C.ok, sw: 2.6 })
  b.ctext(700, 780, 'AHA', { size: 15, weight: 700, fill: C.okD })
  b.ctext(700, 801, '质子引擎', { size: 12.5, weight: 700, fill: C.okD })
  b.ctext(700, 822, '1 H^{+}/ATP·生电', { size: 9.5, fill: C.okD })
  // 四路辐条
  b.arrow(638, 762, 448, 716, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(762, 762, 952, 716, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(638, 828, 448, 874, { stroke: C.ok, sw: 2, marker: 'ok' })
  b.arrow(762, 828, 952, 874, { stroke: C.ok, sw: 2, marker: 'ok' })
  // 四张岗位卡
  const job = (x: number, y: number, title: string, chain: string, cf: string, detail: string) => {
    b.rect(x, y, 380, 158, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 9 })
    b.text(x + 16, y + 30, title, { size: 12.5, weight: 700, fill: C.ink })
    b.text(x + 16, y + 54, chain, { size: 10, weight: 600, fill: cf })
    b.wtext(x + 16, y + 80, detail, { size: 9.5, fill: C.sub, maxW: 350, lh: 23 })
  }
  job(60, 636, '① 养分吸收引擎', '泵 → PMF → H^{+} 同向体回流', C.accD, '根表皮吸收 NO_{3}^{-}、H_{2}PO_{4}^{-}、K^{+}、NH_{4}^{+}、SO_{4}^{2-} 与氨基酸的载体几乎全是 H^{+} 同向体：NRT、PHT、SULTR、AMT 共用这块电池（第 8 章逐一盘点）')
  job(960, 636, '② 气孔开放', '蓝光 phot1/2 → 泵激活 → 超极化 → KAT1 开启', C.proD, '电压门控内向 K^{+} 通道 KAT1 开启，K^{+} 与伴随阴离子涌入、渗透吸水、气孔张开——没有泵就没有气孔运动（保卫细胞全景见第 11 章）')
  job(60, 806, '③ 酸生长', '生长素 → 泵上调 → 壁 pH 约 4.5 → 扩张蛋白松弛', C.warnD, '扩张蛋白在酸性壁中打断纤维素-半纤维素间的氢键粘连、壁松弛，细胞在膨压下伸长——「生长素→泵→酸→壁松→伸长」把激素、膜与壁串成因果链')
  job(960, 806, '④ 韧皮部装载', '伴胞泵 → H^{+}/蔗糖梯度 → SUC2 同向转运', C.rnaD, '伴胞质膜的 AHA 为 SUC2 蔗糖/H^{+} 同向转运体供能，是糖物流的能量伴侣——Münch 压力流的第一推动力（第 5 章）')
  // 总线制说明（中心下方）
  b.wtext(470, 886, '总线制：任一岗位满负荷都会抬高 PMF 消耗，泵必须留有余量——11 个基因与诱导表达提供多机并联冗余；引擎停转（VO_{4}^{3-} 或糠菌素处理）则吸收、气孔、伸长、装载同时坍塌；第五战场：盐胁迫 SOS1 排 Na^{+}、NHX1 液泡隔离，能量全部出自 H^{+} 梯度（第 12 章）', { size: 10, fill: C.sub, maxW: 450, lh: 23 })
}

export default scene({
  title: '植物 P3A H^{+}-ATPase：电化学引擎与 14-3-3 总开关',
  subtitle: '拟南芥 11 个 AHA（AHA1/2/3 主力）单亚基引擎：C 端 R 域自抑制，Thr947 磷酸化后 14-3-3 二聚体桥连全激活，糠菌素锁死复合体＝病原劫持；一泵两得——PMF＝ΔpH（细胞质约 7.2 vs 质外体约 5.5）＋Δψ（−120~−250 mV 超极化）；养分吸收、气孔开放、酸生长、韧皮部装载四大岗位共用这台总电池',
  draw,
})
