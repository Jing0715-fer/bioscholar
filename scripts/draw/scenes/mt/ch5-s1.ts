// mt ch5-s1 载体的一般原理：交替通路三模式 | 米氏饱和动力学 | 速率与温度指纹 | 三种耦联谱系
import { scene, C, B } from '../../lib'

type Pt = [number, number]

/** 矩形绕中心旋转 → 多边形顶点（局部小构件） */
const rotRect = (cx: number, cy: number, w: number, h: number, deg: number): Pt[] => {
  const a = (deg * Math.PI) / 180
  const c = Math.cos(a)
  const s = Math.sin(a)
  const hw = w / 2
  const hh = h / 2
  return ([
    [-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh],
  ] as Pt[]).map(([px, py]) => [cx + px * c - py * s, cy + px * s + py * c] as Pt)
}

const draw = (b: B) => {
  // ============ 一、交替通路：三种构象模式 ============
  b.panel(30, 132, 1340, 428, { title: '一、交替通路：门永远只向一侧打开——三种构象模式' })

  const G = (cx: number, cy: number, r = 8) =>
    b.ion(cx, cy, 'G', { r, size: 9, fill: C.accL, stroke: C.acc, tfill: C.accD })

  // —— 模式① 摇摆开关（MFS）：N/C 两个六螺旋束对摆 ——
  const rocker = (cx: number, cy: number, open: 'out' | 'in' | 'occ') => {
    const off = 24, bw = 24, bh = 78, tilt = 14
    if (open === 'occ') {
      b.rect(cx - 29, cy - 39, 22, 78, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 3 })
      b.rect(cx + 7, cy - 39, 22, 78, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 3 })
      G(cx, cy, 7)
      b.line(cx - 8, cy - 42, cx + 8, cy - 42, { stroke: C.enz, sw: 2.6 })
      b.line(cx - 8, cy + 42, cx + 8, cy + 42, { stroke: C.enz, sw: 2.6 })
    } else {
      const s = open === 'out' ? 1 : -1
      const L = rotRect(cx - off, cy, bw, bh, -s * tilt)
      const R = rotRect(cx + off, cy, bw, bh, s * tilt)
      b.polygon([L[1], R[0], R[3], L[2]], { fill: C.accL, fillOp: 0.6 })
      b.polygon(L, { fill: C.proL, stroke: C.pro, sw: 1.8 })
      b.polygon(R, { fill: C.proL, stroke: C.pro, sw: 1.8 })
      G(cx, cy - s * 26)
      // 闭合侧的门（短粗线）
      b.line(cx - 9, cy + s * 41, cx + 9, cy + s * 41, { stroke: C.enz, sw: 2.6 })
    }
  }
  // —— 模式② 摇摆束（LeuT 折叠）：支架不动、核心束摆动 ——
  const rockB = (cx: number, cy: number, open: 'out' | 'in' | 'occ') => {
    b.rect(cx - 54, cy - 50, 108, 100, { fill: C.bg, fillOp: 0.88, stroke: C.sub, sw: 1.8, rx: 10 })
    if (open === 'out') b.polygon([[cx - 48, cy - 42], [cx - 6, cy - 48], [cx - 8, cy - 18]], { fill: C.accL, fillOp: 0.75 })
    if (open === 'in') b.polygon([[cx - 48, cy + 42], [cx - 6, cy + 48], [cx - 8, cy + 18]], { fill: C.accL, fillOp: 0.75 })
    const tilt = open === 'out' ? -16 : open === 'in' ? 16 : 0
    b.polygon(rotRect(cx + 2, cy, 30, 74, tilt), { fill: C.proL, stroke: C.pro, sw: 1.8 })
    if (open === 'out') G(cx - 30, cy - 34)
    else if (open === 'in') G(cx - 30, cy + 34)
    else G(cx - 24, cy, 7)
  }
  // —— 模式③ 滑梯式（elevator）：转运结构域沿膜法向滑移 ——
  const elev = (cx: number, cy: number, open: 'out' | 'in' | 'occ') => {
    b.line(cx, cy - 52, cx, cy + 52, { stroke: C.faint, sw: 1.2, dash: '3 4' })
    b.rect(cx - 58, cy - 50, 14, 100, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 4 })
    b.rect(cx + 44, cy - 50, 14, 100, { fill: C.panelB, stroke: C.sub, sw: 1.6, rx: 4 })
    const dy = open === 'out' ? -24 : open === 'in' ? 24 : 0
    b.rect(cx - 21, cy - 17 + dy, 42, 34, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 5 })
    if (open === 'out') G(cx, cy - 52)
    else if (open === 'in') G(cx, cy + 46)
    else G(cx, cy - 27, 7)
  }

  const cols: Array<{
    X: number; head: string; fam: string
    mode: (cx: number, cy: number, o: 'out' | 'in' | 'occ') => void
    motion: string; geo: string
  }> = [
    { X: 50, head: '① 摇摆开关（rocker-switch）', fam: '代表家族：MFS——GLUT、LacY 等', mode: rocker, motion: 'N / C 两束对摆', geo: 'N、C 两个六螺旋束绕中央伪对称轴相对摇摆，结合腔在束间界面开合' },
    { X: 490, head: '② 摇摆束（rocking bundle）', fam: '代表家族：LeuT 折叠——NSS、APC 等', mode: rockB, motion: '核心束相对支架摆动', geo: '外围支架岿然不动，中央核心束摆动开合两侧的门' },
    { X: 930, head: '③ 滑梯式（elevator）', fam: '代表家族：谷氨酸转运体——GltPh 等', mode: elev, motion: '结构域沿膜法向滑移', geo: '转运结构域携底物垂直滑移十余埃，支架域不动' },
  ]
  const cy = 330
  for (const c of cols) {
    b.text(c.X, 190, c.head, { size: 12.5, weight: 700, fill: C.ink })
    b.text(c.X, 212, c.fam, { size: 10, fill: C.mute })
    b.bilayer(c.X + 16, 323, 390)
    const xs = [c.X + 80, c.X + 210, c.X + 340]
    const st: Array<[string, string]> = [['外向开口', C.accD], ['封闭态', C.enzD], ['内向开口', C.proD]]
    st.forEach(([lb, col], i) => b.ctext(xs[i], 252, lb, { size: 10.5, weight: 700, fill: col }))
    ;(['out', 'occ', 'in'] as const).forEach((o, i) => c.mode(xs[i], cy, o))
    b.line(c.X + 56, 396, c.X + 384, 396, { stroke: C.faint, sw: 1.6, marker: 'mute', markerStart: 'mute' })
    b.ctext(c.X + 220, 418, c.motion, { size: 9.5, weight: 600, fill: C.mute })
    b.wtext(c.X, 442, c.geo, { size: 9.5, fill: C.sub, maxW: 400, lh: 18 })
  }
  b.text(52, 296, '胞外', { size: 9, fill: C.mute, weight: 600 })
  b.text(52, 384, '胞质', { size: 9, fill: C.mute, weight: 600 })
  b.line(72, 293, 84, 300, { stroke: C.faint, sw: 1 })
  b.line(72, 381, 84, 374, { stroke: C.faint, sw: 1 })

  b.text(50, 480, '殊途同归：三种几何都让结合位点永不同时暴露于膜两侧——载体从不形成连续漏道，辛苦建立的梯度绝不会被短路', { size: 10.5, weight: 600, fill: C.ink })
  b.text(50, 508, '封闭态（occluded）：底物已在腔内、双门紧锁的中间帧，已被结构生物学捕获——GltPh 外向-封闭-内向三帧连成逐段动画', { size: 10.5, fill: C.sub })
  b.text(50, 536, '空载蛋白多停在单侧开门构象；只有底物结合才把能量学拉向「全交替」——竞争抑制剂常锁定某一开门态，「冻帧」是通用战术', { size: 10.5, fill: C.sub })

  // ============ 二、饱和动力学：载体的米氏语言 ============
  b.panel(30, 572, 560, 413, { title: '二、饱和动力学：载体的米氏语言' })
  b.text(50, 622, '载体是嵌在膜上的酶：催化「位置」而非化学——初速率、K_{m}、抑制谱等酶学语言全套适用（SLC 家族命名）', { size: 10, fill: C.sub })
  // 坐标轴
  b.arrow(110, 800, 110, 648, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.arrow(110, 800, 560, 800, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.text(48, 660, 'v（初速率）', { size: 10, fill: C.sub, weight: 600 })
  b.ctext(335, 824, '[S] 底物浓度 →', { size: 10, fill: C.sub })
  b.text(104, 824, '0', { size: 9.5, fill: C.mute })
  // Vmax / Km 参考线
  b.line(110, 690, 545, 690, { stroke: C.faint, sw: 1.2, dash: '6 4' })
  b.text(360, 683, 'V_{max}（∝ 载体数目 × 周转率）', { size: 9.5, weight: 600, fill: C.sub })
  b.line(110, 745, 210, 745, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  b.line(210, 745, 210, 800, { stroke: C.faint, sw: 1.2, dash: '3 3' })
  b.text(218, 770, 'K_{m}（v = V_{max}/2）', { size: 9.5, weight: 700, fill: C.accD })
  // 三条曲线：M-M / 竞争抑制 / 简单扩散
  b.polyline([[110, 800], [140, 775], [180, 755], [210, 745], [250, 736], [300, 728], [360, 722], [430, 716], [500, 713], [545, 711]], { stroke: C.acc, sw: 3 })
  b.polyline([[110, 800], [230, 776], [280, 757], [320, 747], [380, 737], [440, 729], [500, 723], [555, 719]], { stroke: C.bad, sw: 2, dash: '6 4' })
  b.polyline([[110, 800], [545, 732]], { stroke: C.mute, sw: 1.8, dash: '4 4' })
  b.text(430, 704, '饱和双曲线', { size: 10, weight: 700, fill: C.accD })
  b.text(360, 770, '竞争抑制：表观 K_{m}↑、V_{max} 不变', { size: 9.5, weight: 600, fill: C.badD })
  b.text(430, 790, '简单扩散：线性、永不饱和', { size: 9.5, fill: C.mute })
  // 注记
  b.wtext(50, 850, '算例：K_{m} = 2 mM 的载体，[S] 由 5 升至 20 mM（增三倍），v 仅由 0.71 升至 0.91 V_{max}——这就是饱和的算术', { size: 10, fill: C.sub, maxW: 520, lh: 23 })
  b.wtext(50, 900, 'V_{max} 与 K_{m} 由初速率法测定：红细胞「零跨摄取」是经典设计——20 世纪中叶的饱和曲线与根皮素竞争抑制，构成「膜上存在可饱和载运系统」的经典证据链', { size: 10, fill: C.sub, maxW: 520, lh: 23 })
  b.wtext(50, 950, '竞争抑制（根皮素）使表观 K_{m} 增大而 V_{max} 不变；非竞争抑制降 V_{max}；根皮苷特异抑制 Na^{+} 耦联的 SGLT——一个糖基之差，分拣两类糖载体', { size: 10, fill: C.sub, maxW: 520, lh: 23 })

  // ============ 三、速率与温度指纹 ============
  b.panel(610, 572, 330, 413, { title: '三、速率与温度指纹' })
  const ax = 645, ay = 780
  const yFor = (n: number) => ay - n * 20
  b.arrow(ax, ay, ax, 612, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.line(ax, ay, 915, ay, { stroke: C.sub, sw: 1.8 })
  ;[0, 2, 4, 6, 8].forEach(n => {
    b.line(ax - 5, yFor(n), ax, yFor(n), { stroke: C.sub, sw: 1.5 })
    b.etext(ax - 9, yFor(n) + 3, `10^{${n}}`, { size: 8.5, fill: C.mute })
  })
  b.text(652, 616, '周转率 /s（对数）', { size: 8.5, fill: C.mute })
  // 载体与通道的量级柱
  b.rect(672, yFor(4), 36, yFor(2) - yFor(4), { fill: C.accL, stroke: C.acc, sw: 1.8, rx: 4 })
  b.ctext(690, 690, '10^{2}–10^{4}/s', { size: 9, weight: 700, fill: C.accD })
  b.rect(812, yFor(8), 36, yFor(7) - yFor(8), { fill: C.rnaL, stroke: C.rna, sw: 1.8, rx: 4 })
  b.ctext(830, 610, '10^{7}–10^{8}/s', { size: 9, weight: 700, fill: C.rnaD })
  b.ctext(690, 800, '载体（易化扩散）', { size: 10, weight: 600, fill: C.sub })
  b.ctext(830, 800, '离子通道', { size: 10, weight: 600, fill: C.sub })
  b.wtext(628, 826, '载体比通道慢约五个数量级——用严苛的选择性与可调控性换速度', { size: 9.5, fill: C.sub, maxW: 300, lh: 18 })
  // Q10 温度系数
  b.text(628, 872, 'Q_{10}（每升高 10 ℃ 的速率倍数）', { size: 10.5, weight: 700, fill: C.ink })
  b.text(628, 896, '载体（大构象挪移）：Q_{10} > 3，天然「怕冷」', { size: 10, weight: 600, fill: C.enzD })
  b.text(628, 920, '简单扩散（挤过脂双层）：仅 1.2–1.6', { size: 10, fill: C.mute })
  b.wtext(628, 946, '把红细胞置不同温度测葡萄糖摄取，Q_{10} 在 3 以上——鉴别「是否经载体」的经典判据', { size: 9.5, fill: C.sub, maxW: 300, lh: 18 })

  // ============ 四、三种耦联谱系（预告第 8 章） ============
  b.panel(960, 572, 410, 413, { title: '四、三种耦联谱系（预告第 8 章）' })
  const rows: Array<{ name: string; cy: number; desc: string; kind: 'uni' | 'sym' | 'anti' }> = [
    { name: '单转运（uniport）', cy: 653, desc: 'GLUT：只运一种底物、顺浓度下坡——易化扩散，不直接耗 ATP', kind: 'uni' },
    { name: '同向转运（symport）', cy: 781, desc: 'SGLT（Na^{+} 拖动）/ STP、SUC（H^{+} 拖动）：同向耦联上坡 = 次级主动转运', kind: 'sym' },
    { name: '反向转运（antiport）', cy: 909, desc: 'NCX：3 Na^{+} 入 ∶ 1 Ca^{2+} 出——动物惯用 Na^{+}、植物惯用 H^{+} 作驱动', kind: 'anti' },
  ]
  for (const r of rows) {
    b.text(980, r.cy - 31, r.name, { size: 11, weight: 700, fill: C.ink })
    b.bilayer(1005, r.cy - 6.5, 340)
    b.rect(1158, r.cy - 18, 44, 36, { fill: C.proL, stroke: C.pro, sw: 2, rx: 6 })
    if (r.kind === 'uni') {
      G(1180, r.cy - 27)
      b.arrow(1180, r.cy - 16, 1180, r.cy + 30, { stroke: C.acc, sw: 1.8, marker: 'acc' })
      G(1180, r.cy + 39)
    } else if (r.kind === 'sym') {
      b.ion(1165, r.cy - 26, 'Na^{+}', { r: 9, size: 8, fill: C.badL, stroke: C.bad, tfill: C.badD })
      G(1198, r.cy - 26)
      b.arrow(1165, r.cy - 15, 1165, r.cy + 28, { stroke: C.bad, sw: 1.8, marker: 'bad' })
      b.arrow(1198, r.cy - 15, 1198, r.cy + 28, { stroke: C.acc, sw: 1.8, marker: 'acc' })
      b.ion(1165, r.cy + 38, 'Na^{+}', { r: 8, size: 7.5, fill: C.badL, stroke: C.bad, tfill: C.badD })
      G(1198, r.cy + 38)
    } else {
      b.ion(1170, r.cy - 30, 'Na^{+}', { r: 9, size: 8, fill: C.badL, stroke: C.bad, tfill: C.badD })
      b.ion(1200, r.cy - 30, 'Ca^{2+}', { r: 10, size: 8, fill: C.warnL, stroke: C.warn, tfill: C.warnD })
      b.arrow(1170, r.cy - 19, 1170, r.cy + 26, { stroke: C.bad, sw: 1.8, marker: 'bad' })
      b.arrow(1200, r.cy + 26, 1200, r.cy - 19, { stroke: C.warn, sw: 1.8, marker: 'warn' })
    }
    b.wtext(980, r.cy + 61, r.desc, { size: 9.5, fill: C.sub, maxW: 360, lh: 18 })
  }
}

export default scene({
  title: '载体的一般原理：交替通路与酶学指纹',
  subtitle: '载体以交替通路搬运底物——结合位点永不同时暴露于膜两侧，三大构象模式殊途同归；饱和动力学、Q_{10} > 3 与竞争抑制构成其酶学指纹：周转 10^{2}–10^{4}/s 慢于通道约五个数量级，换来近苛刻的选择性',
  draw,
})
