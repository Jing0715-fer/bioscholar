// mt ch4-s2 动物水通道：人类 13 成员分工表、AQP2 五步调控链、集合管跨细胞水路、疾病标签
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、人类 13 个成员：器官分工总表 ============
  b.panel(30, 132, 660, 428, { title: '一、人类 13 个成员：器官分工总表' })
  b.table(42, 176, 636, {
    headers: ['成员', '亚类', '主要定位', '功能要点'],
    colW: [66, 54, 170, 346],
    rowH: 28,
    fontSize: 9.5,
    rows: [
      ['AQP0', '经典', '晶状体纤维细胞', '晶状体水平衡（低导度）；突变致先天性白内障'],
      ['AQP1', '经典', '红细胞·肾近端小管·髓襻降支', '近端约 2/3 滤液水等渗重吸收；Colton 血型抗原'],
      ['AQP2', '经典', '集合管主细胞顶膜', '尿浓缩终端开关；受 AVP 调控插入（右上图）'],
      ['AQP3', '水甘油', '集合管基底侧·皮肤表皮', '基侧水出口；角质层甘油天然保湿'],
      ['AQP4', '经典', '脑星形胶质细胞终足', '血脑屏障水与 K^{+} 平衡；视神经脊髓炎抗原'],
      ['AQP5', '经典', '唾液腺·泪腺腺泡顶膜', '腺体分泌；干燥综合征相关'],
      ['AQP7', '水甘油', '脂肪细胞·肾近端小管', '脂解释放甘油出胞（甘油经济）'],
      ['AQP9', '水甘油', '肝细胞·白细胞', '空腹摄甘油供糖异生；兼透尿素'],
      ['AQP6/8/10', '补遗', '闰细胞内体·肝结肠·小肠', 'AQP6 酸激活兼透 Cl^{−}；AQP8 见于线粒体内膜'],
      ['AQP11/12', '非典型', '内质网·胰腺腺泡', '胞内区室水稳态；AQP11 第二 NPA 突变为 NPC'],
    ],
  })
  b.wtext(42, 524, '三支分法：经典 7 个（AQP0/1/2/4/5/6/8）· 水甘油 4 个（AQP3/7/9/10）· 非典型 2 个（AQP11/12）——编制在哺乳动物高度保守，小鼠与人几乎一一对应', { size: 9.5, maxW: 630, lh: 18, fill: C.sub })

  // ============ 二、AQP2 调控链：五步编号链 ============
  b.panel(710, 132, 660, 428, { title: '二、AQP2 调控链：分钟级膜数量调节' })
  const steps: [string, string][] = [
    ['① AVP 加压素释入血', '血渗透↑／血容量↓时释放'],
    ['② 结合基底侧 V2 受体', 'Gs 耦联腺苷酸环化酶'],
    ['③ cAMP 升高', '第二信使级联放大'],
    ['④ PKA 磷酸化 AQP2', 'Ser256 获「上膜证」'],
    ['⑤ 囊泡向顶膜贩运插入', '分钟级·通道成倍增多'],
  ]
  steps.forEach(([t, s], i) => {
    const y = 178 + i * 62
    b.rect(730, y, 340, 46, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
    b.ctext(900, y + 19, t, { size: 11, weight: 700, fill: C.accD })
    b.ctext(900, y + 37, s, { size: 9, fill: C.sub })
    if (i < 4) b.arrow(900, y + 48, 900, y + 60, { stroke: C.sub, sw: 2 })
  })
  b.wtext(1090, 195, '撤除 AVP → AQP2 内吞回收、水导回落——插入／内吞动态平衡决定任意时刻膜上数量', { size: 9.5, maxW: 250, lh: 18, fill: C.sub })
  b.wtext(1090, 243, '慢档：持续 AVP 在数小时–数天上调 AQP2 转录（脱水、妊娠等慢适应）', { size: 9.5, maxW: 250, lh: 18, fill: C.sub })
  b.wtext(1090, 291, 'Ser261／Ser269 磷酸状态分别改写亚细胞定位与顶膜驻留时长', { size: 9.5, maxW: 250, lh: 18, fill: C.sub })
  b.wtext(1090, 339, '锂制剂下调 AQP2 表达 → 药物性肾性尿崩', { size: 9.5, maxW: 250, lh: 18, fill: C.sub })
  b.tag(1215, 402, '单孔速率不变，变的只是阀门个数', { size: 10, weight: 700, fill: C.proL, stroke: C.pro, tfill: C.proD })
  b.wtext(1090, 446, '集合管管腔膜原本近乎不通透——全部水导押在 AQP2 的「膜上数量」', { size: 9.5, maxW: 250, lh: 18, fill: C.sub })
  b.text(730, 500, '水经顶膜 AQP2 入胞 → 基侧 AQP3/AQP4 出胞入血（左下全景图）', { size: 10, fill: C.sub })
  b.text(730, 524, 'AQP5 走同类路径：自主神经调节其顶膜分布——唾液泪液随餐而至', { size: 10, fill: C.sub })

  // ============ 三、集合管跨细胞水路 ============
  b.panel(30, 572, 660, 413, { title: '三、集合管跨细胞水路：顶膜 AQP2 × 基侧 AQP3/4' })
  // 管腔
  b.rect(60, 606, 600, 46, { fill: '#e0f2fe', fillOp: 0.5, stroke: C.acc, sw: 1.2, rx: 8 })
  b.text(76, 634, '管腔（集合管原尿）', { size: 11, weight: 700, fill: C.accD })
  // 顶膜 + AQP2
  b.bilayer(90, 660, 540, { h: 11 })
  ;[230, 285, 340, 395, 450].forEach(x => b.rect(x, 653, 13, 25, { fill: C.enzL, stroke: C.enz, sw: 1.8 }))
  b.text(545, 645, 'AQP2（可调）', { size: 9.5, weight: 700, fill: C.enzD })
  b.line(541, 649, 462, 658, { stroke: C.faint, sw: 1 })
  // 细胞体
  b.rect(85, 676, 550, 190, { fill: C.panel, stroke: C.sub, sw: 2, rx: 10 })
  b.text(100, 700, '主细胞', { size: 10, weight: 700, fill: C.sub })
  b.ellipse(150, 760, 42, 30, { fill: C.proL, stroke: C.pro, sw: 2 })
  b.circle(160, 750, 8, { fill: C.pro, fillOp: 0.4 })
  // 储存囊泡 + 插入箭头
  ;[[350, 800], [420, 820], [300, 830]].forEach(([vx, vy]) => {
    b.circle(vx, vy, 15, { fill: C.enzL, stroke: C.enz, sw: 2 })
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * Math.PI * 2
      b.circle(vx + 7 * Math.cos(a), vy + 7 * Math.sin(a), 2.5, { fill: C.enz })
    }
  })
  b.arrow(350, 784, 345, 678, { stroke: C.enz, sw: 1.6, marker: 'enz', dash: '4 3' })
  b.arrow(420, 804, 400, 678, { stroke: C.enz, sw: 1.6, marker: 'enz', dash: '4 3' })
  b.arrow(300, 814, 288, 678, { stroke: C.enz, sw: 1.6, marker: 'enz', dash: '4 3' })
  b.tag(520, 726, 'AVP–V2–cAMP–PKA（详右上图）', { size: 9, fill: C.accL, stroke: C.acc, tfill: C.accD })
  b.line(578, 858, 548, 742, { stroke: C.acc, sw: 1.2, dash: '3 4' })
  // 基底侧膜 + AQP3/4 + V2
  b.bilayer(75, 872, 570, { h: 11 })
  ;[150, 210, 270, 330, 390, 450].forEach(x => b.rect(x, 865, 13, 25, { fill: C.okL, stroke: C.ok, sw: 1.8 }))
  b.text(470, 861, 'AQP3/AQP4（常驻出口）', { size: 9.5, weight: 700, fill: C.okD })
  b.rect(560, 864, 44, 18, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 4 })
  b.ctext(582, 876, 'V2', { size: 9, weight: 700, fill: C.accD })
  // 水通路箭头
  b.arrow(236, 616, 236, 700, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(401, 616, 401, 700, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(240, 715, 219, 848, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(401, 715, 340, 848, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(216, 856, 216, 900, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(336, 856, 336, 900, { stroke: C.acc, sw: 2, marker: 'acc' })
  // 高渗间质 + AVP
  b.rect(60, 892, 600, 42, { fill: '#fef3c7', fillOp: 0.5, stroke: C.warn, sw: 1.2, rx: 8 })
  b.text(76, 918, '高渗髓质间质（皮质→内髓约 300→1200 mOsm/kg）· 水顺梯度入血', { size: 10, weight: 700, fill: C.warnD })
  b.circle(622, 914, 13, { fill: C.accL, stroke: C.acc, sw: 2 })
  b.ctext(622, 917.5, 'AVP', { size: 8, weight: 700, fill: C.accD })
  b.arrow(610, 906, 590, 884, { stroke: C.acc, sw: 1.8, marker: 'acc' })
  b.text(60, 954, '近端小管 AQP1 恒定回收约 2/3 滤液水（等渗重吸收、不依赖 AVP）——「粗水管」常开', { size: 10, fill: C.sub })
  b.text(60, 976, '滤液水总回收 99% 以上，终尿约 1–1.5 L/日，渗透压 50–1200 mOsm/kg 连续可调', { size: 10, fill: C.sub })

  // ============ 四、疾病标签：同一开关的两类病 ============
  b.panel(710, 572, 660, 413, { title: '四、疾病标签：同一开关的两类病' })
  const cards: [number, number, string, string, string, string, string][] = [
    [730, 612, '肾性尿崩症', C.badL, C.bad, C.badD, 'AQP2 突变或 X 染色体 V2 受体缺陷：每日可排 10 L 以上稀释尿，终身依赖口渴感；去氨加压素可救 V2 完好者'],
    [1046, 612, '反向失调节', C.warnL, C.warn, C.warnD, '心衰／肝硬变／SIADH 时 AVP 持续过高：囊泡插入长期开着，水潴留成灾、稀释性低钠血症；V2 拮抗剂托伐普坦卸水'],
    [730, 702, '先天性白内障', C.proL, C.pro, C.proD, 'AQP0 突变致晶状体纤维细胞水平衡破坏、混浊——低导度的水通道也是不可缺的岗位'],
    [1046, 702, '干燥综合征', C.enzL, C.enz, C.enzD, 'Sjögren：腺泡顶膜 AQP5 表达与定位异常，口干眼干——分泌腺的水出口失灵'],
    [730, 792, '视神经脊髓炎', C.accL, C.acc, C.accD, 'AQP4-IgG 与补体联手损伤星形胶质终足：反复发作的失明与截瘫——水通道成为自身抗原'],
    [1046, 792, 'Colton 血型', C.okL, C.ok, C.okD, 'AQP1 多态即血型抗原；阴性纯合者日常几无症状，禁水后最大尿浓缩能力明显受损——人体自然「基因敲除」'],
  ]
  cards.forEach(([x, y, name, fill, stroke, tfill, desc]) => {
    b.rect(x, y, 300, 80, { fill, stroke, sw: 1.8, rx: 8 })
    b.text(x + 14, y + 22, name, { size: 11.5, weight: 700, fill: tfill })
    b.wtext(x + 14, y + 40, desc, { size: 9, maxW: 274, lh: 18, fill: C.sub })
  })
  b.wtext(730, 896, '脑水肿双面性：细胞毒性水肿（水中毒、缺血）水经 AQP4 涌入肿胀组织，敲除反减轻；血管源性水肿（肿瘤、外伤）的多余液体需经胶质 AQP4 清除，敲除则清除变慢', { size: 9.5, maxW: 610, lh: 18, fill: C.sub })
  b.wtext(730, 952, 'AQP3 缺陷小鼠皮肤干燥、屏障修复迟缓——外用甘油是最古老的对策；AQP7 缺陷则甘油外流受阻、脂滴渐大而趋胖', { size: 9.5, maxW: 610, lh: 18, fill: C.sub })
}

export default scene({
  title: '动物水通道：人类 13 个成员的分工',
  subtitle:
    '人类 13 个水通道按经典／水甘油／非典型三支分工：AQP1 常驻近端小管与髓襻降支承担约 2/3 滤液水重吸收，AQP2 经 AVP→V2→cAMP→PKA 链分钟级插入集合管顶膜，AQP4 守血脑屏障、AQP5 司腺体分泌、AQP7/9 构成跨器官甘油经济；突变与失调节分别对应肾性尿崩、白内障与干燥综合征',
  draw,
})
