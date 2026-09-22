// xc ch7-s4 分子置换的陷阱与出路（Task 4-d）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、假解三检验 ============
  b.panel(30, 132, 660, 430, { title: '一、假解的三检验：判据、精修、图三者一致' })
  const chk = (y: number, t: string, lines: string[]) => {
    b.rect(56, y, 360, 84, { fill: C.panelB, stroke: C.sub, sw: 1.7, rx: 8 })
    b.text(72, y + 24, t, { size: 11.5, weight: 700, fill: C.ink })
    lines.forEach((s, i) => b.text(72, y + 44 + i * 16, s, { size: 10, fill: C.sub }))
  }
  chk(184, '① 判据分档', ['TFZ 大于 8 高概率／5–8 存疑／小于 5 不可信', '假解常停边缘区间，或多候选分数咬得极紧', '正确解通常一峰独秀'])
  chk(280, '② 精修表现', ['刚体精修后 R 应从约 0.45–0.50 明显回落', '典型降到 0.35–0.40 区间并继续下降', '假解 R 与 R_{free} 原地踏步、R_{free} 高悬 0.45 以上'])
  chk(376, '③ 图的样子', ['以模型相位算的图应「长成蛋白的样子」', '连续主链、可辨二级结构、独立出现的密度', '假解的图只剩零碎碎片或与模型完全重影'])
  // R 曲线小图
  const rx = 448, ry = 408, rw = 222, rh = 190
  b.axis(rx, ry, rw, rh, {
    title: '刚体精修后的 R 因子走势', xlabel: '精修轮数', grid: false,
    xticks: [[0, '0'], [0.5, '5'], [1, '10']],
    yticks: [[0.2, '0.25'], [0.5, '0.40'], [0.8, '0.55']],
  })
  const rwG: [number, number][] = [[0, 0.68], [0.1, 0.55], [0.2, 0.46], [0.3, 0.41], [0.5, 0.34], [0.7, 0.29], [1, 0.26]]
  const rfG: [number, number][] = [[0, 0.72], [0.1, 0.62], [0.2, 0.55], [0.3, 0.50], [0.5, 0.43], [0.7, 0.38], [1, 0.35]]
  const rwB: [number, number][] = [[0, 0.64], [0.3, 0.58], [0.7, 0.56], [1, 0.55]]
  const rfB: [number, number][] = [[0, 0.70], [0.3, 0.66], [0.7, 0.64], [1, 0.63]]
  b.curve(rx, ry, rw, rh, rfG, { stroke: C.ok, sw: 2.6, smooth: true, dash: '7 4' })
  b.curve(rx, ry, rw, rh, rwG, { stroke: C.ok, sw: 2.6, smooth: true })
  b.curve(rx, ry, rw, rh, rfB, { stroke: C.bad, sw: 2.2, smooth: true, dash: '7 4' })
  b.curve(rx, ry, rw, rh, rwB, { stroke: C.bad, sw: 2.2, smooth: true })
  b.legend(452, 432, [['正确解 R_{work}', C.ok], ['假解 R_{work}', C.bad]], { size: 9, gap: 14 })
  b.legend(452, 450, [['正确解 R_{free}（虚线）', C.ok], ['假解 R_{free}（虚线）', C.bad]], { size: 9, gap: 14 })
  b.wtext(56, 478, '排序更省力：TFZ 与 LLG 先分档，前两档各跑 10–20 轮刚体精修，R_{free} 纹丝不动者直接弃，幸存者才值得读图。更险的是「部分正确」：域取向对、铰链角错，TFZ 中等、图一半可读——处置是拆域两段式 MR（先搜大域、再按密度摆小域），而非整刚体硬精修。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })

  // ============ 二、索引歧义与空间群受审 ============
  b.panel(710, 132, 660, 430, { title: '二、重索引检验：让 MR 当空间群的试金石' })
  b.rect(740, 184, 220, 46, { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 8 })
  b.ctext(850, 212, '同一套衍射数据（指标化歧义）', { size: 11.5, weight: 700, fill: C.accD })
  b.arrow(850, 230, 850, 258, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  // 两套指派
  b.rect(740, 262, 220, 52, { fill: C.badL, stroke: C.bad, sw: 1.8, rx: 8 })
  b.ctext(850, 284, '指派 A：如 C 心格子', { size: 11, weight: 700, fill: C.badD })
  b.ctext(850, 304, '旋转平移空转、无解', { size: 10, fill: C.sub })
  b.rect(1050, 262, 290, 52, { fill: C.okL, stroke: C.ok, sw: 1.8, rx: 8 })
  b.ctext(1195, 284, '指派 B：重索引后（如 h 与 k 互换）', { size: 11, weight: 700, fill: C.okD })
  b.ctext(1195, 304, '显著出解且精修顺畅', { size: 10, fill: C.sub })
  b.arrow(905, 288, 1046, 288, { stroke: C.sub, sw: 1.6, dash: '5 4', marker: 'ink' })
  b.ctext(975, 278, '重索引变换逐一试验', { size: 9.5, weight: 700, fill: C.mute })
  b.wtext(730, 340, '典型歧义：C 心与 P 格子的双重解、四方 tP 与 tI 的度规巧合、伪对称让 Laue 对称升阶。常用重索引变换包括 h 与 k 互换（a、b 近等长）、指数取负（对映指派）与 C 心基矢另选；xtriage 一类工具能列出候选清单供逐一试验。空间群候选同理：P2_{1} 与 P2、I222 与 R3 之类手性群近邻，逐个试 MR 的成本远低于反复调模型。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  // 绝对构型核对
  b.rect(730, 440, 300, 82, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.text(746, 464, '绝对构型核对（手性空间群）', { size: 11, weight: 700, fill: C.ink })
  b.wtext(746, 484, '把 D 型搜索模型塞进 L 蛋白则图与模型系统性不符；蛋白天然全 L 不易踩雷，人工 D 蛋白或非天然配体体系必须核对（Flack 参数，第 6、11 章）。', { size: 9.5, fill: C.sub, maxW: 268, lh: 13.5 })
  b.rect(1050, 440, 290, 82, { fill: C.warnL, stroke: C.warn, sw: 1.5, rx: 8 })
  b.text(1066, 464, 'packing 闸门的盲区', { size: 11, weight: 700, fill: C.warnD })
  b.wtext(1066, 484, '伪对称环境下分子可能「恰好不穿模」却坐错位置——NCS 交叉向量与差值 Patterson（第 8 章同款技术）可作旁证。', { size: 9.5, fill: C.sub, maxW: 258, lh: 13.5 })

  // ============ 三、多拷贝与低分辨率 ============
  b.panel(30, 572, 660, 390, { title: '三、多拷贝递增与低分辨率的两件救生圈' })
  // packing 穿模示意
  b.rect(56, 616, 250, 170, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  b.ctext(181, 608, 'packing 检查（硬闸门）', { size: 10.5, weight: 700, fill: C.sub })
  // 分子 A（不规则形状）
  b.path('M 96,700 q 18,-38 52,-30 q 30,6 26,34 q -4,26 -34,30 q -34,4 -44,-34 z', { fill: C.accL, stroke: C.acc, sw: 2 })
  // 对称像 B 与 A 穿模
  b.path('M 216,738 q 22,-40 56,-32 q 28,8 24,34 q -4,24 -36,26 q -34,2 -44,-28 z', { fill: C.badL, stroke: C.bad, sw: 2, dash: '6 4' })
  b.ctext(181, 778, '分子与对称像原子级重叠（穿模）', { size: 9.5, weight: 700, fill: C.badD })
  b.ctext(181, 794, '物理不可能——按体积比量化、超阈值直接弃', { size: 9, fill: C.mute })
  // 递增搜索
  b.rect(330, 616, 340, 170, { fill: '#ffffff', stroke: C.sub, sw: 1.8, rx: 6 })
  b.ctext(500, 608, '递增搜索：先强后弱', { size: 10.5, weight: 700, fill: C.sub })
  const cp = (x: number, y: number, r: number, fill: string, stroke: string, lab: string) => {
    b.circle(x, y, r, { fill, stroke, sw: 2 })
    b.ctext(x, y + r + 16, lab, { size: 9.5, fill: C.sub })
  }
  cp(370, 668, 22, C.dnaL, C.dna, '拷贝 1（先定位）')
  b.arrow(398, 668, 428, 668, { stroke: C.sub, sw: 1.7, marker: 'ink' })
  cp(456, 668, 18, C.proL, C.pro, '拷贝 2')
  b.arrow(480, 668, 510, 668, { stroke: C.sub, sw: 1.7, marker: 'ink' })
  cp(538, 668, 15, C.rnaL, C.rna, '拷贝 3')
  b.wtext(346, 716, '每一步都借已完成拷贝的相位贡献增强下一个的信号；拷贝数先由马修斯系数框算（第 2 章），Z 估错一位、搜索预算全盘皆错。', { size: 9.5, fill: C.sub, maxW: 308, lh: 13.5 })
  b.wtext(56, 806, '分辨率低于 3.5 Å 时观测数与参数数之比恶化（第 10 章），两件救生圈：NCS 限制——多拷贝间施强约束（位置约束演进为参考模型精修），把参数量按拷贝数折叠；密度修饰与 NCS 平均（第 8 章第 3 节）——多拷贝密度互证平均既改善图又校正相位。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(56, 886, '纪律：先修相位再动原子，顺序反了模型偏差就会接管图（第 9 章）。低于 4 Å 连侧链 rotamer 都失去意义，建模退化为「主链管子加 B 因子」；所有新增参数都须有冗余数据背书，R_{free} 是唯一方向盘（第 10 章）。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 四、MR-SAD 与退路 ============
  b.panel(710, 572, 660, 390, { title: '四、MR-SAD 双弱互补与失败后的退路' })
  b.text(730, 620, '七步流水线（各步均有现成程序接力）：', { size: 11, weight: 700, fill: C.ink })
  const steps = ['MR 出解', '刚体精修', '反常差值图', '挑重原子峰', '亚结构精修', 'SAD 定相组合', '修饰与自动建模']
  steps.forEach((s, i) => {
    const col = i % 4, rowI = Math.floor(i / 4)
    const bx = 730 + col * 154, by = 636 + rowI * 58
    b.rect(bx, by, 138, 44, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 7 })
    b.ctext(bx + 69, by + 27, s, { size: 10.5, weight: 700, fill: C.accD })
    if (col < 3 && i < steps.length - 1) b.arrow(bx + 140, by + 22, bx + 152, by + 22, { stroke: C.acc, sw: 1.6, marker: 'acc' })
  })
  b.path('M 1261,680 L 1261,687 L 799,687 L 799,692', { fill: 'none', stroke: C.acc, sw: 1.6, marker: 'acc' })
  b.wtext(730, 752, '逻辑：模型相位虽不足以解读图，却足以把反常差值信号放大——以模型相位计算的反常差值图（系数 (|F_{+}|−|F_{−}|)·exp(iφ_{model})）把重原子位点直接点亮；亚结构定位后反常定相反哺相位，两弱相加成强。对 SeMet 或天然含金属、含硫充足的体系尤其划算。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.text(730, 816, '判成功三件套：', { size: 11, weight: 700, fill: C.ink })
  b.wtext(830, 816, '反常差值峰与序列中 Met（或金属）位置一一对应；组合相位经修饰后 FOM 跃升；自动建模沿主链走出数十残基的连续片段。', { size: 10, fill: C.sub, maxW: 516, lh: 14 })
  // 退路阶梯
  b.rect(730, 856, 200, 58, { fill: C.okL, stroke: C.ok, sw: 1.6, rx: 7 })
  b.wtext(742, 874, '退路一：纯实验相位', { size: 10, weight: 700, fill: C.okD, maxW: 180, lh: 13 })
  b.wtext(742, 890, 'SAD／MAD 接管（第 8 章）', { size: 9.5, fill: C.sub, maxW: 180, lh: 13 })
  b.rect(950, 856, 180, 58, { fill: C.warnL, stroke: C.warn, sw: 1.6, rx: 7 })
  b.wtext(962, 874, '退路二：重新结晶', { size: 10, weight: 700, fill: C.warnD, maxW: 160, lh: 13 })
  b.wtext(962, 890, '换晶型常换更高对称', { size: 9.5, fill: C.sub, maxW: 160, lh: 13 })
  b.rect(1150, 856, 190, 58, { fill: C.proL, stroke: C.pro, sw: 1.6, rx: 7 })
  b.wtext(1162, 874, '退路三：换构建', { size: 10, weight: 700, fill: C.proD, maxW: 170, lh: 13 })
  b.wtext(1162, 890, '截短柔性域、去糖基化', { size: 9.5, fill: C.sub, maxW: 170, lh: 13 })
  b.ctext(1055, 940, '唯一不建议的是在假解上反复精修——那是把沙子往沙堡上堆。', { size: 10.5, weight: 700, fill: C.bad })
}

export default scene({
  title: '分子置换的陷阱与出路：假解识别到退路决策',
  subtitle: '假解三检验：TFZ 边缘、Rfree 高悬 0.45 以上不降、图不成蛋白样；重索引检验审空间群；低于 3.5 Å 靠 NCS 限制与密度修饰；MR-SAD 双弱互补，退路依次实验相位、重新结晶、换构建',
  draw,
})
