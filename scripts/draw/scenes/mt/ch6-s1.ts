// mt ch6-s1 P 型泵总论：Post-Albers 循环 · 共同拓扑 · 五大亚类 · 工具药箱
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、Post-Albers 循环：四态闭环 =================
  b.panel(30, 132, 660, 455, { title: '一、Post-Albers 循环：四态闭环与「P」的由来' })
  // 膜语境（虚线分界）
  b.line(55, 352, 665, 352, { stroke: C.faint, sw: 1.3, dash: '7 6' })
  b.text(58, 336, '细胞外（对侧）', { size: 10, fill: C.mute })
  b.text(58, 372, '细胞质', { size: 10, fill: C.mute })
  // 四态盒（含磷态以玫红高亮）
  const state = (x: number, y: number, name: string, sub: string, phos: boolean) => {
    b.rect(x, y, 150, 64, { fill: phos ? C.enzL : C.panelB, stroke: phos ? C.enz : C.sub, sw: phos ? 2.2 : 1.8, rx: 10 })
    b.ctext(x + 75, y + 30, name, { size: 16.5, weight: 700, fill: phos ? C.enzD : C.ink })
    b.ctext(x + 75, y + 50, sub, { size: 9.5, fill: phos ? C.enzD : C.mute })
  }
  state(140, 195, 'E2', '对侧 K^{+} 结合', false)
  state(390, 195, 'E2-P', '外向·低亲放手', true)
  state(140, 445, 'E1', '胞质侧·高亲认领', false)
  state(390, 445, 'E1~P', '封闭腔·离子锁入', true)
  // 循环箭头（顺时针）
  b.arrow(292, 477, 388, 477, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.arrow(465, 443, 465, 261, { stroke: C.enz, sw: 2.4, marker: 'enz' })
  b.arrow(388, 227, 292, 227, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  b.arrow(215, 261, 215, 443, { stroke: C.sub, sw: 2.4, marker: 'ink' })
  // 步骤标签
  b.ctext(340, 458, '① Asp 磷酸化', { size: 10, weight: 700, fill: C.enzD })
  b.text(478, 340, '② 构象翻转·位点转向对侧', { size: 10, weight: 700, fill: C.enzD })
  b.ctext(340, 248, '③ 脱磷酸', { size: 10, weight: 700, fill: C.sub })
  b.etext(208, 384, '④ 复位·离子再结合', { size: 10, weight: 700, fill: C.sub })
  // 中心：磷酸化中间体（「P」之名）
  b.circle(340, 352, 58, { fill: C.enzL, stroke: C.enz, sw: 2.4 })
  b.ctext(340, 340, 'Asp~P', { size: 14, weight: 700, fill: C.enzD })
  b.ctext(340, 360, 'β-天冬氨酰磷酸', { size: 11, weight: 600, fill: C.enzD })
  b.ctext(340, 378, '「P 型」之名由来', { size: 9.5, fill: C.sub })
  // 离子流示例（钠泵口径）：胞外释出 / 胞内结合
  b.arrow(542, 212, 560, 197, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.ion(575, 190, 'Na^{+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(612, 182, 'Na^{+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(649, 190, 'Na^{+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.text(556, 164, 'Na^{+} 外释（低亲放手）', { size: 9.5, weight: 600, fill: C.badD })
  b.arrow(215, 521, 215, 513, { stroke: C.bad, sw: 1.5, marker: 'bad' })
  b.ion(175, 524, 'Na^{+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(215, 531, 'Na^{+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(255, 524, 'Na^{+}', { r: 11, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.text(283, 534, '3 Na^{+} 结合', { size: 9.5, weight: 600, fill: C.badD })
  b.wtext(46, 556, '以钠泵为例：E1 于胞质侧高亲认领 3 Na^{+}，磷酸化锁入封闭腔，E2-P 于胞外低亲放手，复位后释 2 K^{+} 入胞质；每步皆可逆——陡峭离子梯度可倒转合成 ATP（Garrahan-Glynn 1967 红细胞实验）', { size: 9.5, fill: C.sub, maxW: 625, lh: 23 })

  // ================= 二、共同拓扑：10 TMS + A/N/P =================
  b.panel(710, 132, 660, 455, { title: '二、共同拓扑：10 TMS + A/N/P 三胞质域' })
  b.wtext(726, 185, '磷酸化后 N 域倒伏、A 域旋入——胞质三域的开合经杆状螺旋传至跨膜区，把结合位点从「面向胞液」翻成「面向对侧」：交替通路在主动转运体上的实现', { size: 10, fill: C.sub, maxW: 610, lh: 18 })
  b.text(750, 270, '细胞外', { size: 10, fill: C.mute })
  b.text(750, 380, '细胞质', { size: 10, fill: C.mute })
  // 膜 + 十个跨膜螺旋
  b.bilayer(750, 322, 585)
  const tmsX = [780, 840, 900, 960, 1020, 1080, 1140, 1200, 1260, 1320]
  tmsX.forEach((cx, i) => {
    b.rect(cx - 15, 302, 30, 53, { fill: C.proL, stroke: C.pro, sw: 1.5, rx: 6 })
    b.ctext(cx, 294, `M${i + 1}`, { size: 9, fill: C.mute })
  })
  // 离子结合位点（膜中部）
  b.ctext(1040, 268, '离子结合位点：M4/M5/M6/M8 残基在膜中部围成', { size: 10, weight: 600, fill: C.accD })
  b.arrow(1040, 274, 1040, 306, { stroke: C.mute, sw: 1.2, marker: 'mute' })
  b.rect(905, 314, 250, 32, { fill: 'none', stroke: C.acc, sw: 1.5, dash: '5 4', rx: 8 })
  b.ion(985, 330, 'Na^{+}', { r: 10, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7.5 })
  b.ion(1075, 330, 'Ca^{2+}', { r: 10, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  // 胞质三域（连接螺旋）
  b.line(840, 355, 850, 394, { stroke: C.mute, sw: 1.4 })
  b.line(930, 355, 990, 408, { stroke: C.mute, sw: 1.4 })
  b.line(1050, 355, 1145, 386, { stroke: C.mute, sw: 1.4 })
  b.ellipse(855, 435, 62, 42, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(855, 428, 'A 域', { size: 13, weight: 700, fill: C.accD })
  b.ctext(855, 449, 'TGES 模体', { size: 9.5, fill: C.sub })
  b.ctext(855, 468, '执行脱磷酸', { size: 9.5, fill: C.mute })
  b.ellipse(1000, 448, 65, 44, { fill: C.enzL, stroke: C.enz, sw: 2 })
  b.ctext(1000, 441, 'P 域', { size: 13, weight: 700, fill: C.enzD })
  b.ctext(1000, 462, 'DKTGT 模体', { size: 9.5, fill: C.sub })
  b.ctext(1000, 481, '天冬氨酸磷酸化', { size: 9.5, fill: C.mute })
  b.ellipse(1155, 425, 58, 40, { fill: C.dnaL, stroke: C.dna, sw: 2 })
  b.ctext(1155, 418, 'N 域', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(1155, 439, '结合 ATP', { size: 9.5, fill: C.sub })
  b.ctext(1155, 458, '核苷酸结合', { size: 9.5, fill: C.mute })
  b.tag(1270, 398, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700 })
  b.arrow(1246, 392, 1216, 406, { stroke: C.rna, sw: 1.5, marker: 'rna' })
  b.text(1318, 372, 'C 端', { size: 9, fill: C.mute })
  b.wtext(726, 536, '催化需 Mg^{2+}；结构学家用「冻帧剂」拍下循环每一帧：VO_{4}^{3-} 冒充磷酸根滞留 E2-P，BeF_{3}^{-} 与 AlF_{4}^{-} 分别模拟氟磷酸与 ADP·Pi 态', { size: 10, fill: C.sub, maxW: 615, lh: 23 })

  // ================= 三、五大亚类与工具药箱 =================
  b.panel(30, 602, 1340, 380, { title: '三、五大亚类分工与工具药箱' })
  b.table(46, 672, 630, {
    title: 'P1–P5 亚类分工（一个天冬氨酸账房，五次业务转型）',
    headers: ['亚类', '代表成员', '转运物', '特征备注'],
    colW: [60, 162, 122, 286], rowH: 36, fontSize: 11.5,
    rows: [
      ['P1', 'ATP7A/7B 铜泵（P1B）', 'Cu^{+} 等重金属', 'CPx 模体；Menkes/Wilson 病'],
      ['P2A', 'SERCA1–3', 'Ca^{2+}', '肌浆网/内质网钙回收；2 Ca^{2+}/ATP'],
      ['P2B', 'PMCA1–4', 'Ca^{2+}', '质膜排钙；钙调蛋白调节'],
      ['P2C', 'Na^{+}/K^{+}、H^{+}/K^{+} 泵', 'Na^{+}/K^{+}、H^{+}/K^{+}', 'αβ 组装；钠泵生电（胃泵电中性）'],
      ['P3A', '植物/真菌质膜 H^{+} 泵', 'H^{+}', '单亚基；14-3-3 调节（下节）'],
      ['P4', '磷脂翻转酶', '磷脂（PS/PE）', '维持膜脂不对称'],
      ['P5', 'ATP13A2 等', '阳离子（待定）', '与溶酶体功能相关'],
    ],
  })
  // 工具药卡片
  const drug = (x: number, y: number, name: string, target: string, mech: string) => {
    b.rect(x, y, 315, 130, { fill: '#ffffff', stroke: C.enz, sw: 1.6, rx: 9 })
    b.text(x + 14, y + 26, name, { size: 12.5, weight: 700, fill: C.enzD })
    b.text(x + 14, y + 50, target, { size: 10, weight: 600, fill: C.ink })
    b.wtext(x + 14, y + 74, mech, { size: 9.5, fill: C.sub, maxW: 288, lh: 23 })
  }
  drug(700, 652, '乌本苷（ouabain）', '靶：Na^{+}/K^{+} 泵 α 亚基胞外域', '堵住胞外 K^{+} 位点、把泵锁于 E2-P；洋地黄类同源，1953 年 Schatzmann 指认靶点')
  drug(1035, 652, '毒胡萝卜素（thapsigargin）', '靶：SERCA 跨膜疏水袋', '锁于无钙 E2 态——「可被特异性抑制」成为 SERCA 的身份证')
  drug(700, 792, '钒酸根（VO_{4}^{3-}）', '靶：P 型全族（广谱）', '磷酸根类似物、滞留 E2-P 态——广谱性提示全族共享该中间态')
  drug(1035, 792, '糠菌素（fusicoccin）', '靶：植物 H^{+} 泵的 14-3-3 复合体', '把 14-3-3 与 C 端焊死＝异常持续激活（下节的病原劫持）')
  // 结构里程碑横幅
  b.rect(700, 934, 650, 44, { fill: C.dnaL, stroke: C.dna, sw: 1.6, rx: 9 })
  b.wtext(712, 950, '2000 年 Toyoshima & Mizushima：兔肌浆网 SERCA1a 2.6 Å 晶体结构——史上第一个原子分辨率的 P 型泵；此后各步构象陆续捕获，Post-Albers 循环成为逐帧电影', { size: 9.5, weight: 600, fill: C.dnaD, maxW: 628, lh: 23 })
}

export default scene({
  title: 'P 型 ATPase 总论：循环、拓扑与亚类',
  subtitle: '一个磷酸化的天冬氨酸定义「P 型」：Post-Albers 循环 E1→E1~P→E2-P→E2 四态闭环；全族共用 10 TMS＋A/N/P 三胞质域；P1–P5 五大亚类从重金属、钙、钠钾到质子与磷脂——换业务不换账房；乌本苷、毒胡萝卜素、钒酸根、糠菌素四件工具药各守一个靶位',
  draw,
})
