// sb ch9-s1 冷冻电镜总览与负染筛选（Task 4-b）
import { scene, C, B } from '../../lib'

/** 确定性伪随机 */
function mkRnd(seed: number) {
  let s = seed
  return () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296 }
}

const draw = (b: B) => {
  // ============ 一、单颗粒全流程鸟瞰 ============
  b.panel(30, 132, 660, 330, { title: '一、单颗粒冷冻电镜全流程鸟瞰' })
  const flow: Array<[string, string, string]> = [
    ['样品', '纯度与均一性', C.dna],
    ['载网玻璃化', '第 9 章第 2 节', C.acc],
    ['低剂量成像', '电影帧收集', C.accD],
    ['颗粒挑选', '模板或深度学习', C.pro],
    ['2D/3D 分类', '均一化与取向', C.proD],
    ['精修与结构', '第 10 章', C.enz],
  ]
  let fx = 56
  const bw2 = 92
  for (const [t, s, c] of flow) {
    b.rect(fx, 216, bw2, 74, { fill: `${c}14`, stroke: c, sw: 1.6, rx: 8 })
    b.ctext(fx + bw2 / 2, 244, t, { size: 11, weight: 700, fill: c })
    b.wtext(fx + 4, 264, s, { size: 9, fill: C.mute, maxW: bw2 - 8, lh: 11.5 })
    if (fx < 560) b.arrow(fx + bw2 + 2, 253, fx + bw2 + 16, 253, { stroke: C.mute, sw: 1.8, marker: 'ink' })
    fx += bw2 + 18
  }
  b.tag(180, 330, '无需晶体 · 分子量下限约 100 kDa · 大于 300 kDa 更可靠', { fill: C.okL, stroke: C.ok, size: 10.5, weight: 700, tfill: C.okD, pad: 8 })
  b.wtext(56, 372, '时间轴三个坐标：2013 年前后直接电子探测相机普及，2–3 Å 从「奇迹」变「常规」；2020 年代起 AlphaFold 预测为初始模型提供先验。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })
  b.wtext(56, 404, '本章节奏：先以负染「面试」样品，合格再上冷冻玻璃化与数据收集；图像处理与三维重构在第 10 章展开。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })

  // ============ 二、负染制样横截面 ============
  b.panel(710, 132, 660, 330, { title: '二、负染：两分钟的视频面试（横截面）' })
  // 横截面示意
  const sx = 740, sy = 236
  b.rect(sx, sy, 240, 150, { fill: C.bg, stroke: C.sub, sw: 1.8, rx: 4 })
  b.ctext(sx + 120, sy - 10, '干燥后的铀染料壳（剖面）', { size: 10.5, weight: 700, fill: C.sub })
  // 染料颗粒纹理（环绕蛋白、避开蛋白轮廓）
  const rnd = mkRnd(99)
  const px0 = sx + 120, py0 = sy + 84
  for (let i = 0; i < 128; i++) {
    const gx = sx + 6 + rnd() * 228, gy = sy + 6 + rnd() * 138
    const ddx = (gx - px0) / 52, ddy = (gy - py0) / 38
    if (ddx * ddx + ddy * ddy < 1.15) continue
    b.circle(gx, gy, 1.8 + rnd() * 1.8, { fill: C.warn, fillOp: 0.8, stroke: 'none' })
  }
  // 蛋白颗粒（浅色浮雕嵌在染料里）
  b.ellipse(px0, py0, 52, 38, { fill: '#ffffff', stroke: C.sub, sw: 1.6 })
  b.ellipse(px0 - 14, py0 - 8, 16, 12, { fill: C.panelB, stroke: C.mute, sw: 1.1 })
  b.ellipse(px0 + 16, py0 + 6, 14, 10, { fill: C.panelB, stroke: C.mute, sw: 1.1 })
  b.ctext(px0, py0 + 58, '蛋白呈「浅色镂空」：重原子染料环绕造负衬度', { size: 9.5, fill: C.mute })
  // 碳膜
  b.rect(sx - 4, sy + 146, 248, 10, { fill: C.ink, stroke: 'none' })
  b.ctext(sx + 120, sy + 174, '碳膜铜网（辉光放电亲水化）', { size: 9.5, fill: C.sub })
  // 顶视图（显微图样貌）
  b.rect(1010, sy, 340, 150, { fill: '#1e293b', stroke: C.sub, sw: 1.8, rx: 4 })
  b.ctext(1180, sy - 10, '显微图样貌（顶视）：暗底亮颗粒', { size: 10.5, weight: 700, fill: C.sub })
  const rnd2 = mkRnd(7)
  for (let i = 0; i < 150; i++) b.circle(1016 + rnd2() * 328, sy + 6 + rnd2() * 138, 1.4 + rnd2() * 1.5, { fill: C.warn, fillOp: 0.4, stroke: 'none' })
  for (const [gx, gy, r, rot] of [[1080, sy + 46, 22, 0.4], [1200, sy + 92, 26, -0.5], [1290, sy + 40, 20, 0.9], [1120, sy + 112, 18, 0.2]] as Array<[number, number, number, number]>) {
    b.ellipse(gx, gy, r, r * 0.62, { fill: '#f8fafc', fillOp: 0.92, stroke: 'none' })
    b.ellipse(gx - r * 0.25, gy - r * 0.1, r * 0.3, r * 0.2, { fill: C.mute, fillOp: 0.5, stroke: 'none' })
    void rot
  }
  // 操作步骤
  b.wtext(730, 412, '操作约 2–5 分钟：滴 3–5 μL 样品吸附 30–60 秒，滤纸吸干，滴 0.5–2% 醋酸铀或甲酸铀染色数十秒，吸干、可再染一次（两次染色衬度更匀）。它回答两个问题：样品均一吗？有哪些构象态？', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })

  // ============ 三、2D 分类的判读 ============
  b.panel(30, 482, 660, 400, { title: '三、2D 分类的判读：好样品长什么样' })
  // 好样品类平均
  b.rect(56, 528, 300, 176, { fill: '#d1fae5', fillOp: 0.25, stroke: C.ok, sw: 1.5, rx: 8 })
  b.ctext(206, 546, '好样品：类别清晰、视角多样', { size: 11, weight: 700, fill: C.okD })
  const good: Array<[number, number, number, number]> = [[92, 600, 26, 0.5], [160, 588, 24, -0.9], [228, 604, 25, 0.2], [296, 592, 22, -0.4], [106, 668, 23, 1.1], [178, 678, 25, -0.2], [248, 672, 22, 0.7], [316, 670, 20, -1.0]]
  for (const [gx, gy, r, rot] of good) {
    b.ellipse(gx, gy, r, r * 0.55, { fill: C.dnaL, stroke: C.dna, sw: 1.6 })
    for (let k = -1; k <= 1; k++) {
      const ox = Math.cos(rot) * k * r * 0.45, oy = Math.sin(rot) * k * r * 0.45
      b.line(gx - ox - Math.sin(rot) * 8, gy - oy + Math.cos(rot) * 8, gx + ox - Math.sin(rot) * 8, gy + oy + Math.cos(rot) * 8, { stroke: C.dnaD, sw: 1.6, opacity: 0.7 })
    }
  }
  b.ctext(206, 698, '内部条纹=二级结构迹象', { size: 9.5, fill: C.mute })
  // 坏样品
  b.rect(400, 528, 280, 176, { fill: '#fee2e2', fillOp: 0.25, stroke: C.bad, sw: 1.5, rx: 8 })
  b.ctext(540, 546, '坏信号：三类报警', { size: 11, weight: 700, fill: C.badD })
  b.ctext(462, 570, '聚集', { size: 9.5, weight: 700, fill: C.sub })
  for (const [gx, gy] of [[450, 606], [478, 596], [466, 626], [492, 618], [478, 646]] as Array<[number, number]>)
    b.circle(gx, gy, 9, { fill: C.badL, stroke: C.bad, sw: 1.4 })
  b.ctext(462, 672, '碎片', { size: 9.5, weight: 700, fill: C.sub })
  for (let i = 0; i < 10; i++) b.circle(430 + (i % 5) * 16, 694 + Math.floor(i / 5) * 14, 3.2, { fill: C.bad, fillOp: 0.7, stroke: 'none' })
  b.ctext(590, 570, '单一优势视角', { size: 9.5, weight: 700, fill: C.sub })
  for (const [gx, gy] of [[566, 606], [596, 610], [578, 634], [608, 640], [590, 660], [620, 664]] as Array<[number, number]>)
    b.ellipse(gx, gy, 20, 11, { fill: C.badL, stroke: C.bad, sw: 1.3 })
  b.wtext(56, 726, '负染的边界：分辨率上限约 15–20 Å——染料颗粒本身约 1 nm 粒度，干燥的表面张力还会把近球形蛋白压成「薄饼」（某一维尺寸可缩短两成）——高分辨细节不可外推，两个样品「看起来一样」不等于冷冻下也一样。', { size: 10, fill: C.sub, maxW: 615, lh: 14.5 })
  // 筛查决策
  const dec: Array<[string, string, string]> = [
    ['均一清晰', '直接上冷冻（第 2 节）', C.ok],
    ['聚集', '回第 4 章纯化：换柱、加还原剂', C.bad],
    ['取向单一', '调缓冲或换载网', C.warn],
    ['无颗粒', '查吸附：浓度与亲水化', C.acc],
  ]
  let dy2 = 806
  for (const [t, s, c] of dec) {
    b.circle(66, dy2 - 4, 4.5, { fill: c, stroke: 'none' })
    b.text(78, dy2, t + '：' + s, { size: 10, fill: C.sub, weight: 600 })
    dy2 += 22
  }
  b.ctext(520, 838, '值得上冷冻的三条判据：', { size: 10.5, weight: 700, fill: C.ink })
  b.wtext(400, 858, '均一性、浓度（0.5–5 mg/mL）、稳定性——三条全过再花机时。', { size: 9.5, fill: C.mute, maxW: 250, lh: 13 })

  // ============ 四、筛查决策表 ============
  b.panel(710, 482, 660, 400, { title: '四、筛查决策表与样品预算' })
  b.table(730, 528, 620, {
    headers: ['2D 分类所见', '诊断', '决策'],
    colW: [170, 210, 240],
    rowH: 38,
    fontSize: 10,
    rows: [
      ['类别清晰、视角多样', '样品均一、构象态可控', '直接上冷冻玻璃化'],
      ['少数大类、轮廓一致', '存在优势构象或寡聚', '记录比例，收集时留余量'],
      ['聚集为大团块', '纯度或缓冲问题', '回第 4 章：换柱/加还原剂'],
      ['碎片与低衬度', '降解或浓度过低', '查降解、浓缩或换负染方案'],
      ['单一优势视角', '颗粒取向被膜面锁定', '调缓冲、换支持膜或倾转'],
    ],
  })
  b.wtext(730, 764, '负染之后再花 2 分钟看「颗粒浓度与吸附」：正常应在显微图上数得出数百颗/视野。浓度不足 0.1 mg/mL 时优先浓缩；膜面吸附过强（颗粒贴膜、取向单一）预示 AWI 问题，收集期再以小角度倾转补救（第 4 节）。', { size: 10, fill: C.sub, maxW: 620, lh: 14.5 })
  b.tag(1040, 852, '面试通过才发冷冻「录取通知」——省下的是玻璃化与机时成本', { fill: C.accL, stroke: C.acc, size: 10, weight: 700, tfill: C.accD, pad: 8 })

  // 底部收束
  b.ctext(700, 946, '负染是低成本的高通量面试——它回答「值不值得冷冻」，而不是「结构长什么样」', { size: 12, weight: 600, fill: C.mute })
}

export default scene({
  title: '冷冻电镜总览与负染筛选：两分钟的视频面试',
  subtitle: '单颗粒无需晶体、分子量下限约 100 kDa；负染以 0.5–2% 醋酸铀环绕蛋白造负衬度，吸附 30–60 秒、约 2–5 分钟完成；分辨率上限约 15–20 Å 且有干燥压平假象；好 2D 分类类别清晰、视角多样，坏信号聚集/碎片/单一优势视角',
  draw,
})
