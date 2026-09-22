// sb ch10-s1 衬度传输函数与图像校正（Task SB-3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、CTF 曲线族与 Thon 环 ============
  b.panel(30, 132, 660, 330, { title: '一、CTF 曲线族与 Thon 环（defocus 扫描）' })
  const ax = 70, ay = 340, aw = 280, ah = 160
  b.axis(ax, ay, aw, ah, {
    xticks: [[0.222, '30'], [0.333, '20'], [0.444, '15'], [0.667, '10'], [0.833, '8']],
    yticks: [[0, '−1'], [0.5, '0'], [1, '+1']],
    xlabel: '分辨率 d（Å，频率线性）',
  })
  b.text(64, 268, 'CTF', { size: 12, weight: 600, fill: C.sub, anchor: 'end' })
  // 弱相位物体：CTF≈sin(πλΔf s²)，300 kV 电子波长 λ≈0.02 Å
  const dfs: Array<[number, string, string]> = [[0.5, C.ok, C.okD], [1.5, C.acc, C.accD], [2.5, C.pro, C.proD]]
  for (const [df, col] of dfs) {
    const pts: Array<[number, number]> = []
    for (let i = 0; i <= 90; i++) {
      const s = (i / 90) * 0.15
      const ctf = Math.sin(Math.PI * 0.02 * df * 10000 * s * s)
      pts.push([s / 0.15, (ctf + 1) / 2])
    }
    b.curve(ax, ay, aw, ah, pts, { stroke: col, sw: 2 })
  }
  let ly = 208
  for (const [df, col, cold] of dfs) {
    b.line(356, ly - 4, 368, ly - 4, { stroke: col, sw: 2.6 })
    b.text(374, ly, `−${df} μm`, { size: 10, weight: 600, fill: cold })
    ly += 22
  }
  // Thon 环功率谱
  b.ctext(525, 177, '功率谱：Thon 环', { size: 10.5, weight: 700, fill: C.sub })
  b.rect(440, 185, 170, 170, { fill: C.panelB, stroke: C.sub, sw: 1.8, rx: 4 })
  for (const r of [13, 44, 76]) b.circle(525, 270, r, { fill: 'none', stroke: C.line, sw: 1.1, opacity: 0.9 })
  for (const r of [28, 60]) b.circle(525, 270, r, { fill: 'none', stroke: C.acc, sw: 2, opacity: 0.7 })
  b.ellipse(525, 270, 76, 66, { fill: 'none', stroke: C.warn, sw: 1.6, dash: '5 3' })
  b.ctext(525, 372, '极值处环亮、过零处死寂；虚线椭圆示像散', { size: 8.5, fill: C.mute })
  b.wtext(50, 400, '相位因子随空间频率振荡、过零处信号整段翻零，defocus 越深振荡越快——第一零点约为 1/√(λ·Δf)：−1.5 μm 档约 17 Å、−2.5 μm 档约 22 Å（第 9 章的 defocus 计划）。拟合程序沿半径追踪环间距与椭圆度，解出 defocus（−0.5 至 −3 μm）、像散（小于约 0.2–0.5 μm）与方位角；CTFFIND4 与 GCTF 为主力，拟合极限分辨率 3–5 Å 健康、大于 6–8 Å 剔除。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 二、预处理流水线 ============
  b.panel(710, 132, 660, 330, { title: '二、预处理流水线：三步备料' })
  const flow: Array<[string, string, string, string, string]> = [
    ['电影', '50–60 帧', C.panelB, C.line, C.sub],
    ['运动校正', 'MotionCor2：全局加 5×5 局部子块', C.accL, C.acc, C.accD],
    ['剂量加权', 'Grant 与 Grigorieff 2015', C.okL, C.ok, C.okD],
    ['CTF 拟合', 'CTFFIND4 / GCTF', C.warnL, C.warn, C.warnD],
    ['可挑选微图', '供第 2 节颗粒挑选', C.proL, C.pro, C.proD],
  ]
  let fx = 730
  for (const [t, s, f, st, tf] of flow) {
    b.rect(fx, 180, 112, 64, { fill: f, stroke: st, sw: 1.6, rx: 8 })
    b.ctext(fx + 56, 202, t, { size: 11, weight: 700, fill: tf })
    b.wtext(fx + 8, 222, s, { size: 8.5, fill: C.sub, maxW: 96, lh: 11 })
    if (fx < 1230) b.arrow(fx + 113, 212, fx + 125, 212, { stroke: C.mute, sw: 1.8, marker: 'ink' })
    fx += 126
  }
  b.ctext(865, 279, '临界曝光：高频「死得早」', { size: 10.5, weight: 700, fill: C.ink })
  b.axis(740, 385, 250, 100, {
    xticks: [[0.25, '低频'], [0.75, '高频']], yticks: [[0.08, '低'], [0.92, '高']],
    xlabel: '空间频率',
  })
  b.curve(740, 385, 250, 100, [[0, 0.95], [0.12, 0.8], [0.25, 0.62], [0.38, 0.45], [0.5, 0.32], [0.62, 0.22], [0.75, 0.15], [0.88, 0.1], [1, 0.07]], { stroke: C.enz, sw: 2.4 })
  b.wtext(1010, 295, '每帧按累积剂量与频率指数降权：晚期帧低频照用、高频自动降权。剂量加权图利于高分辨精修；挑选与低分辨初判宜留未加权版本——两者都留档。', { size: 9.5, fill: C.sub, maxW: 330, lh: 13 })
  b.wtext(730, 443, 'RELION 以抛物线轨迹描述首帧大位移、最早 2–3 帧分组对齐；RELION、cryoSPARC 与 cisTEM 三足鼎立、混搭已成常态。', { size: 9, fill: C.sub, maxW: 620, lh: 12.5 })

  // ============ 三、漂移图与束致运动物理 ============
  b.panel(30, 482, 660, 420, { title: '三、漂移图与束致运动的物理' })
  b.axis(80, 660, 310, 170, {
    xticks: [[0, '0'], [0.3, '15'], [0.6, '30'], [1, '50']],
    yticks: [[0, '0'], [0.5, '5'], [1, '10']],
    xlabel: '帧号（位移以 Å 计）',
  })
  b.text(74, 585, '位移', { size: 11, weight: 600, fill: C.sub, anchor: 'end' })
  b.curve(80, 660, 310, 170, [[0, 0], [0.02, 0.3], [0.05, 0.46], [0.08, 0.53], [0.12, 0.56], [0.18, 0.575], [0.3, 0.585], [0.45, 0.575], [0.6, 0.59], [0.75, 0.58], [0.9, 0.585], [1, 0.58]], { stroke: C.acc, sw: 2.2 })
  b.curve(80, 660, 310, 170, [[0, 0], [0.02, 0.14], [0.05, 0.26], [0.08, 0.31], [0.12, 0.335], [0.2, 0.345], [0.35, 0.34], [0.5, 0.348], [0.65, 0.342], [0.8, 0.35], [1, 0.345]], { stroke: C.ok, sw: 2.2 })
  b.line(126.5, 639.6, 374.5, 515.5, { stroke: C.bad, sw: 1.8, dash: '6 4' })
  b.text(200, 545, '持续单向漂移', { size: 9, weight: 600, fill: C.badD })
  b.polyline([[266, 602.2], [278.4, 507], [290.8, 512.1]], { stroke: C.bad, sw: 2.2 })
  b.text(300, 505, '尖跳：放电或膜破裂', { size: 9, weight: 600, fill: C.badD })
  b.text(396, 562, 'x', { size: 10, weight: 700, fill: C.acc })
  b.text(396, 604, 'y', { size: 10, weight: 700, fill: C.ok })
  b.wtext(70, 505, '漂移图「先冲后停」才健康：后段稳态帧间漂移约 1–2 Å 以内、轨迹平滑无尖跳', { size: 9, fill: C.sub, maxW: 160, lh: 12 })
  b.text(430, 505, '束致运动的三股力', { size: 11.5, weight: 700, fill: C.ink })
  const forces: Array<[string, string, string]> = [
    ['充电：电子束在绝缘的玻璃冰与碳膜上积累电荷，静电力牵引样品变形', C.enz],
    ['热应力：束流局部升温使冰层膨胀、与支持膜膨胀失配产生剪应力', C.warn],
    ['辐射损伤：辐照区蛋白与冰收缩，发生塑性形变', C.bad],
  ]
  let fy = 528
  for (const [t, c] of forces) {
    b.circle(436, fy - 4, 4, { fill: c, stroke: 'none' })
    b.wtext(448, fy, t, { size: 9.5, fill: C.sub, maxW: 216, lh: 13 })
    fy += 42
  }
  b.wtext(448, 645, '三者皆首帧最猛、随后趋稳——Brilot 等 2012 年在玻璃冰中对病毒颗粒的直接影像首次定量这幅「先冲后停」的轨迹。', { size: 9, fill: C.sub, maxW: 216, lh: 12.5 })
  b.tag(540, 730, 'UltrAuFoil 金网：束致运动约减半', { fill: C.okL, stroke: C.ok, size: 9.5, weight: 700, tfill: C.okD, pad: 7 })
  b.wtext(430, 756, 'Russo 与 Passmore 2014 年：金的高导电把电荷导走、高导热摊平温度梯度。', { size: 9, fill: C.sub, maxW: 220, lh: 12.5 })
  b.wtext(56, 800, '判读两条：斜率——持续单向线性漂移指向载网台不稳或液氮剧烈沸腾，这类微图整段皆糊；振幅——突发尖跳多为载网放电或支持膜破裂。算法缓解是逐帧对齐与第 3 节逐颗粒轨迹精修的两级接力。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // ============ 四、预处理检查点表 ============
  b.panel(710, 482, 660, 420, { title: '四、预处理检查点表' })
  b.wtext(730, 508, '每剔除一张坏微图，第 2 节就少一分噪声负债；检查点写入项目台账，与第 9 章 session 记录首尾相接。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })
  b.table(730, 528, 620, {
    headers: ['检查项', '健康判据', '越线处置'],
    colW: [180, 230, 210],
    rowH: 44,
    fontSize: 10,
    rows: [
      ['CTF 拟合极限分辨率', '3–5 Å 以内', '大于 6–8 Å 剔除并按方格统计'],
      ['defocus 分布', '直方图与收集计划多档吻合', '系统性偏差回查收集元数据'],
      ['像散', '小于约 0.2–0.5 μm', '大值提示收集期消像散失当'],
      ['漂移轨迹', '后段帧间约 1–2 Å、无尖跳', '持续斜率或尖跳者剔除'],
      ['冰厚与衬度', '颗粒清晰、Thon 环可辨', '过厚发暗微图降级或弃用'],
      ['可用微图比例', '大于约 70%（第 9 章交付线）', '低比例回收集端查方格分级'],
    ],
  })
  b.wtext(730, 852, '合格线一句话：CTF 参数可信、轨迹收敛、衬度可用——三者齐备，第 2 节的颗粒挑选才有可靠的舞台。', { size: 9.5, fill: C.sub, maxW: 620, lh: 13 })

  // 底部收束
  b.ctext(700, 940, 'CTF 拟错了，三维重构等于在错误的「透镜描述」上反卷积；运动校不齐，高频信号在叠加中被永久抹平', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '衬度传输函数与图像校正：从电影到可挑选的微图',
  subtitle: 'CTF 相位因子随频率振荡、过零翻零，Thon 环解出 defocus 与像散；MotionCor2 全局加 5×5 局部；剂量加权高频先死；漂移后段 1–2 Å；金网束致运动约减半',
  draw,
})
