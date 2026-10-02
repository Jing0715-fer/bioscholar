// mt ch8-s2 动物 SLC 超家族：52 家族版图 · 肾糖双闸与恩格列净 · 利尿剂靶位 · 稳态骨干与疾病谱系
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ================= 一、SLC 版图：52 家族约 400 基因 =================
  b.panel(30, 132, 660, 453, { title: '一、SLC 版图：52 个家族、约 400 个基因' })
  b.table(46, 196, 630, {
    title: '代表家族速览（HUGO 命名体系）',
    headers: ['家族', '通俗名', '代表成员', '底物与方向'],
    colW: [56, 76, 112, 386], rowH: 24, fontSize: 10,
    rows: [
      ['SLC2', 'GLUT', 'GLUT1/2/4', '葡萄糖单向（易化扩散）'],
      ['SLC4', 'AE', '带 3 蛋白（AE1）', 'Cl^{-}/HCO_{3}^{-} 交换·红细胞运碳'],
      ['SLC5', 'SGLT', 'SGLT1/2', '葡萄糖:Na^{+} 同向'],
      ['SLC6', 'NSS', 'SERT/DAT/NET/GAT', '递质:Na^{+}（伴 Cl^{-}）同向'],
      ['SLC7', '氨基酸转运体', 'LAT1 等', '氨基酸交换（与 SLC3 重链二聚）'],
      ['SLC9', 'NHE', 'NHE1/3', 'Na^{+}:H^{+} 反向'],
      ['SLC11', '金属转运', 'DMT1', '二价金属:H^{+} 同向'],
      ['SLC12', 'CCC', 'NKCC2/NCC/KCC', 'Na^{+}/K^{+}/Cl^{-} 同向或反向'],
      ['SLC17', '囊泡转运体', 'VGLUT', '谷氨酸入囊泡（H^{+} 驱动）'],
      ['SLC22', 'OAT/OCT', 'OAT1、OCT2', '有机阴/阳离子:离子交换'],
      ['SLC26', '阴离子交换体', 'DRA 等', 'Cl^{-}/HCO_{3}^{-} 等交换'],
      ['SLC30/31', 'ZnT/CTR', 'ZnT1、CTR1', '锌外排·铜摄取'],
      ['SLC40', '铁外排体', 'ferroportin', 'Fe^{2+} 外排'],
    ],
  })
  b.wtext(46, 570, '以不足 2% 的蛋白编码基因，承担几乎全部跨膜营养摄取与废物外排；SLC34（NaPi-II）、SLC13（NaS1）等散见第四节对照表', { size: 9.5, fill: C.sub, maxW: 630, lh: 23 })

  // ================= 二、肾糖双闸与恩格列净 =================
  b.panel(710, 132, 660, 453, { title: '二、肾糖双闸：SGLT2 与 SGLT1 的「先通量、后亲和」' })
  b.text(726, 196, '肾脏每日滤过约 180 g 葡萄糖，须在近端小管全部收回', { size: 10, weight: 600, fill: C.sub })
  // 肾小球 + 小管分段
  b.circle(770, 240, 26, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.ctext(770, 244, '肾小球', { size: 9.5, weight: 700, fill: C.proD })
  b.line(796, 240, 804, 240, { stroke: C.sub, sw: 2 })
  b.rect(804, 232, 270, 16, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.rect(1084, 232, 90, 16, { fill: C.enzL, stroke: C.enz, sw: 1.8, rx: 8 })
  b.path('M1182,248 L1182,278 Q1194,290 1206,278 L1206,248', { fill: 'none', stroke: C.dna, sw: 4, opacity: 0.55 })
  b.rect(1216, 232, 118, 16, { fill: C.panelB, stroke: C.line, sw: 1.8, rx: 8 })
  b.ctext(939, 214, 'S1–S2 段 · SGLT2（SLC5A2）', { size: 10, weight: 600, fill: C.accD })
  b.ctext(1129, 214, 'S3 段 · SGLT1', { size: 10, weight: 600, fill: C.enzD })
  b.ctext(939, 270, '1 Na^{+}:1 葡萄糖 · 容量大而亲和低', { size: 9.5, fill: C.sub })
  b.ctext(1120, 270, '2 Na^{+}:1 葡萄糖 · 亲和更高', { size: 9.5, fill: C.sub })
  b.ctext(1275, 268, '远曲小管 → 集合管', { size: 8.5, fill: C.mute })
  // 百分比双闸
  b.rect(804, 300, 479, 22, { fill: C.accL, stroke: C.acc, sw: 1.6 })
  b.rect(1283, 300, 51, 22, { fill: C.enzL, stroke: C.enz, sw: 1.6 })
  b.ctext(1043, 315, 'SGLT2 ≈ 90% · 先通量', { size: 9.5, weight: 600, fill: C.accD })
  b.ctext(1309, 338, 'SGLT1 ≈ 10% · 后亲和', { size: 9.5, weight: 600, fill: C.enzD })
  // 恩格列净卡片
  b.rect(726, 352, 628, 130, { fill: '#ffffff', stroke: C.enz, sw: 1.6, rx: 9 })
  b.text(742, 376, '药物靶头：恩格列净 / 达格列净（SGLT2 抑制剂）', { size: 11.5, weight: 700, fill: C.enzD })
  b.wtext(742, 398, '阻断近端重吸收、促成尿糖排泄；临床收益远超降糖本身——管球反馈复位带来肾保护，心衰住院与心血管死亡下降，成为糖尿病心肾共管格局的支柱；代价是泌尿生殖道感染（尿糖滋菌）与罕见酮症', { size: 10, fill: C.sub, maxW: 596, lh: 23 })
  b.wtext(742, 452, '天然 SLC5A2 突变＝家族性肾性糖尿（多为良性）——「SGLT2 缺陷」的人体表型', { size: 10, fill: C.sub, maxW: 596, lh: 23 })
  // 三级接力
  b.ctext(1040, 506, '肠道分工同源：能量三级接力', { size: 11, weight: 700, fill: C.ink })
  b.tag(800, 540, 'ATP', { fill: C.rnaL, stroke: C.rna, tfill: C.rnaD, size: 11, weight: 700 })
  b.arrow(832, 540, 920, 540, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(876, 527, '钠泵', { size: 8.5, fill: C.mute })
  b.tag(970, 540, 'Na^{+} 梯度', { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 11, weight: 700 })
  b.arrow(1024, 540, 1100, 540, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(1062, 527, 'SGLT1', { size: 8.5, fill: C.mute })
  b.tag(1140, 540, '糖梯度', { fill: C.okL, stroke: C.ok, tfill: C.okD, size: 11, weight: 700 })
  b.arrow(1178, 540, 1256, 540, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.ctext(1218, 527, 'GLUT2', { size: 8.5, fill: C.mute })
  b.tag(1300, 540, '血液', { fill: C.accL, stroke: C.acc, tfill: C.accD, size: 11, weight: 700 })
  b.ctext(1040, 574, '顶膜 SGLT1 吸收膳食葡萄糖与半乳糖、基底侧 GLUT2 入血', { size: 9.5, fill: C.sub })

  // ================= 三、利尿剂靶位：NKCC2 与 NCC =================
  b.panel(30, 600, 660, 385, { title: '三、利尿剂靶位：SLC12 家族的岗位与开关' })
  const diu = (x: number, chip: string, name: string, sub: string, drug: string) => {
    b.rect(x, 640, 195, 218, { fill: C.panel, stroke: C.line, sw: 1.5, rx: 8 })
    b.rect(x + 12, 650, 66, 20, { fill: C.accL, stroke: C.acc, sw: 1.5, rx: 5 })
    b.ctext(x + 45, 664, chip, { size: 8.5, weight: 700, fill: C.accD })
    b.tag(x + 155, 660, drug, { fill: C.badL, stroke: C.bad, tfill: C.badD, size: 9.5, weight: 700 })
    b.text(x + 12, 692, name, { size: 13, weight: 700, fill: C.ink })
    b.text(x + 12, 710, sub, { size: 9.5, fill: C.sub })
    b.bilayer(x + 20, 742, 160)
  }
  diu(46, 'SLC12A1', 'NKCC2', '髓袢升支粗段·顶端膜', '呋塞米')
  // NKCC2 离子流（1 Na : 1 K : 2 Cl 内向）
  b.ion(85, 727, 'Na^{+}', { r: 8, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7 })
  b.ion(120, 727, 'K^{+}', { r: 8, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7 })
  b.ion(155, 727, 'Cl^{-}', { r: 8, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7 })
  b.ion(190, 727, 'Cl^{-}', { r: 8, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7 })
  ;[85, 120, 155, 190].forEach(x => b.arrow(x, 733, x, 762, { stroke: C.sub, sw: 1.4, marker: 'ink' }))
  b.ctext(143, 787, '1 Na^{+}:1 K^{+}:2 Cl^{-} · 电中性', { size: 9, weight: 600, fill: C.ink })
  b.wtext(58, 808, '此段水不通透：盐被抽走即形成髓质渗透梯度与稀释尿；呋塞米为效应最强的袢利尿剂', { size: 9, fill: C.sub, maxW: 172, lh: 21 })
  diu(256, 'SLC12A3', 'NCC', '远曲小管·顶端膜', '噻嗪类')
  b.ion(295, 727, 'Na^{+}', { r: 8, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7 })
  b.ion(340, 727, 'Cl^{-}', { r: 8, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7 })
  ;[295, 340].forEach(x => b.arrow(x, 733, x, 762, { stroke: C.sub, sw: 1.4, marker: 'ink' }))
  b.ctext(353, 787, '1 Na^{+}:1 Cl^{-} · 电中性', { size: 9, weight: 600, fill: C.ink })
  b.wtext(268, 808, '攫取远曲小管残余 NaCl——噻嗪类利尿剂在此设卡', { size: 9, fill: C.sub, maxW: 172, lh: 21 })
  diu(466, 'SLC12A4–7', 'KCC', '多组织·外排方向', '（生理岗）')
  b.ion(505, 768, 'K^{+}', { r: 8, fill: C.accL, stroke: C.acc, tfill: C.accD, size: 7 })
  b.ion(550, 768, 'Cl^{-}', { r: 8, fill: C.okL, stroke: C.ok, tfill: C.okD, size: 7 })
  ;[505, 550].forEach(x => b.arrow(x, 758, x, 733, { stroke: C.sub, sw: 1.4, marker: 'ink' }))
  b.ctext(563, 790, '1 K^{+}:1 Cl^{-} · 同向外排', { size: 9, weight: 600, fill: C.ink })
  b.wtext(478, 812, '红细胞 KCC1 参与体积调节；神经元 KCC2 抽走胞质 Cl^{-}，维持 GABA 的抑制性', { size: 9, fill: C.sub, maxW: 172, lh: 21 })
  // WNK 总开关
  b.rect(46, 874, 628, 44, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.wtext(60, 888, '家族总开关：WNK–SPAK/OSR1 激酶级联以磷酸化统一调度全家；WNK 突变＝Gordon 综合征（家族性高血压伴高血钾）——调控网络的失序直接写进血压', { size: 9.5, fill: C.sub, maxW: 600, lh: 21 })
  // 疾病标签
  b.rect(46, 926, 305, 52, { fill: '#ffffff', stroke: C.bad, sw: 1.5, rx: 8 })
  b.text(58, 946, 'Bartter 综合征（升支粗段）', { size: 10.5, weight: 700, fill: C.badD })
  b.text(58, 964, 'NKCC2/ROMK/ClC-Kb/barttin 缺陷 → 低钾碱中毒', { size: 9, fill: C.sub })
  b.rect(369, 926, 305, 52, { fill: '#ffffff', stroke: C.bad, sw: 1.5, rx: 8 })
  b.text(381, 946, 'Gitelman 综合征（远曲小管）', { size: 10.5, weight: 700, fill: C.badD })
  b.text(381, 964, 'NCC 缺陷 → 远端 NaCl 重吸收障碍', { size: 9, fill: C.sub })

  // ================= 四、稳态骨干与疾病谱系 =================
  b.panel(710, 600, 660, 385, { title: '四、稳态骨干与疾病谱系：NHE3、带 3 与 NCX' })
  // —— 左列：NCX 心肌图 + 缺血反转级联 ——
  b.text(726, 648, 'NCX1（SLC8A1）：心肌的钙出口', { size: 11.5, weight: 700, fill: C.proD })
  b.text(726, 672, '心肌细胞外', { size: 9, fill: C.mute })
  b.bilayer(740, 700, 250)
  b.rect(790, 686, 100, 42, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(840, 710, 'NCX1', { size: 10, weight: 700, fill: C.proD })
  ;[805, 835, 865].forEach(x => b.arrow(x, 680, x, 726, { stroke: C.bad, sw: 1.6, marker: 'bad' }))
  b.ion(805, 672, 'Na^{+}', { r: 9, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7 })
  b.ion(835, 672, 'Na^{+}', { r: 9, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7 })
  b.ion(865, 672, 'Na^{+}', { r: 9, fill: C.badL, stroke: C.bad, tfill: C.badD, size: 7 })
  b.arrow(940, 748, 940, 692, { stroke: C.pro, sw: 1.8, marker: 'pro' })
  b.ion(940, 762, 'Ca^{2+}', { r: 11, fill: C.proL, stroke: C.pro, tfill: C.proD, size: 7.5 })
  b.text(726, 768, '心肌细胞质', { size: 9, fill: C.mute })
  b.ctext(865, 782, '3 Na^{+} 入 : 1 Ca^{2+} 出 · 生电（净 +1）', { size: 10, weight: 600, fill: C.ink })
  b.wtext(726, 806, '舒张期大部分 Ca^{2+} 由 SERCA 泵回肌浆网，NCX1 承担剩余约 20%–30% 的钙外排；其生电性使方向取决于 Na^{+} 梯度与膜电位的合力', { size: 9.5, fill: C.sub, maxW: 285, lh: 23 })
  b.text(726, 872, '危险：缺血时的反向运转', { size: 11, weight: 700, fill: C.badD })
  const cas = (y: number, txt: string) => {
    b.rect(726, y, 290, 24, { fill: C.badL, stroke: C.bad, sw: 1.5, rx: 6 })
    b.ctext(871, y + 16, txt, { size: 9.5, weight: 600, fill: C.badD })
  }
  cas(882, '① ATP 枯竭 → 钠泵停转、Na^{+} 积聚')
  b.arrow(871, 908, 871, 916, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  cas(918, '② 膜去极化 · 电位差失守')
  b.arrow(871, 944, 871, 952, { stroke: C.sub, sw: 1.6, marker: 'ink' })
  cas(954, '③ NCX 反转：Ca^{2+} 涌入 → 心律失常')
  // —— 右列：NHE3 / AE1 / SLC6 卡片 ——
  b.rect(1036, 640, 324, 96, { fill: '#ffffff', stroke: C.acc, sw: 1.5, rx: 8 })
  b.text(1048, 662, 'NHE3（SLC9A3）：近端小管 Na^{+}/H^{+} 交换', { size: 11, weight: 700, fill: C.accD })
  b.wtext(1048, 684, '回收 Na^{+} 同时排出 H^{+}，与刷状缘碳酸酐酶协同把滤过的 HCO_{3}^{-} 以 CO_{2} 形式收回；近端 80%–85% 的碳酸氢盐重吸收走此通路', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  b.rect(1036, 748, 324, 112, { fill: '#ffffff', stroke: C.pro, sw: 1.5, rx: 8 })
  b.text(1048, 770, 'AE1（SLC4A1）＝红细胞「带 3 蛋白」', { size: 11, weight: 700, fill: C.proD })
  b.wtext(1048, 792, '含量最大的红细胞膜蛋白：约占膜蛋白 1/4、每细胞逾百万拷贝；Cl^{-}/HCO_{3}^{-} 交换把组织 CO_{2} 携带的碱基经血液运抵肺部；肾脏剪接体 kAE1 位于闰细胞基底侧，突变致远端肾小管酸中毒', { size: 9.5, fill: C.sub, maxW: 300, lh: 21 })
  b.rect(1036, 872, 324, 80, { fill: '#ffffff', stroke: C.enz, sw: 1.5, rx: 8 })
  b.text(1048, 892, 'SLC6（NSS）：精神药理的半壁江山', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(1048, 912, '约 2 Na^{+}:1 Cl^{-}:1 递质摄取；SSRI 阻断 SERT，可卡因阻断 DAT/NET，安非他明作为底物引发反向转运掏空囊泡', { size: 9.5, fill: C.sub, maxW: 300, lh: 20 })
  b.wtext(1048, 960, '疾病谱系：Hartnup（SLC6A19）· 胱氨酸尿（SLC3A1/SLC7A9）——一个基因、一台机器、一组表型的直线对应', { size: 9, fill: C.sub, maxW: 300, lh: 18 })
}

export default scene({
  title: '动物 SLC 超家族：从肾糖双闸到疾病谱系',
  subtitle: '52 个家族约 400 基因以不足 2% 的编码基因承包跨膜运输：SGLT2 约 90%＋SGLT1 约 10% 收回每日 180 g 滤过糖，恩格列净收获心肾获益；呋塞米卡 NKCC2（1Na^{+}:1K^{+}:2Cl^{-}）、噻嗪卡 NCC；NCX 3Na^{+}:1Ca^{2+} 司心肌舒张期 20%–30% 钙外排、缺血时反向成灾；带 3 运碳、SSRI 靶 SERT，Bartter / Gitelman / Hartnup / 胱氨酸尿钉牢「转运体即生理功能」',
  draw,
})
