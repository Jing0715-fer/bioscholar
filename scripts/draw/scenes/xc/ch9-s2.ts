// xc ch9-s2 Coot 与真实空间建模（Task 4-d）
import { scene, C, B } from '../../lib'

/** 嵌套等高线「密度斑」 */
const blob = (b: B, cx: number, cy: number, rx: number, ry: number, rot: number, stroke: string) => {
  const tf = `transform="rotate(${rot} ${cx} ${cy})"`
  b.els.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${stroke}" stroke-width="2" opacity="0.9" ${tf}/>`)
  b.els.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.72}" ry="${ry * 0.72}" fill="none" stroke="${stroke}" stroke-width="1.4" opacity="0.55" ${tf}/>`)
}

const draw = (b: B) => {
  // ============ 一、Coot 驾驶舱 ============
  b.panel(30, 132, 660, 430, { title: '一、Coot 驾驶舱：双图加载与渲染纪律' })
  // 屏幕示意
  b.rect(56, 186, 360, 300, { fill: '#ffffff', stroke: C.sub, sw: 2, rx: 8 })
  b.ctext(236, 176, '密度图与模型同屏（编辑即时反映）', { size: 10, weight: 700, fill: C.sub })
  blob(b, 150, 280, 70, 24, -12, C.dna)
  blob(b, 250, 330, 78, 25, -8, C.dna)
  blob(b, 320, 252, 40, 20, 18, C.dna)
  const ca: [number, number][] = [[92, 258], [128, 274], [164, 288], [200, 300], [236, 312], [272, 328], [308, 336], [344, 318]]
  b.polyline(ca, { stroke: C.ink, sw: 2.6 })
  ca.forEach(([x, y], i) => {
    const col = i === 4 ? C.bad : i === 5 ? C.warn : i === 6 ? C.warn : C.ok
    b.circle(x, y, 5.5, { fill: col, stroke: C.ink, sw: 1 })
    if (i >= 2 && i <= 6) b.line(x, y, x + 10, y - 22, { stroke: C.sub, sw: 1.8 })
  })
  b.circle(200, 278, 12, { fill: C.enzL, stroke: C.enz, sw: 2, dash: '4 3' })
  b.ctext(214, 268, '+3σ 差值峰', { size: 9, weight: 700, fill: C.enzD })
  b.ctext(236, 486, '主链走线＋验证双色球（红黄绿）＋差值斑', { size: 9.5, fill: C.mute })
  // 右侧纪律
  b.tag(542, 208, '双图加载', { fill: C.dnaL, stroke: C.dna, size: 12, weight: 700, tfill: C.dnaD, pad: 9 })
  b.wtext(440, 234, '2mFo−DFc 主图画约 1σ（有什么）＋mFo−DFc 差值图画 ±3σ（差在哪）——Coot（Emsley 与 Cowtan，2004 年）的标准开场；模型带着 Ramachandran 与 rotamer 着色进场，「哪里有问题」动手前一目了然。', { size: 10.5, fill: C.sub, maxW: 236, lh: 15 })
  b.wtext(440, 320, 'map radius 显示半径日常取 8–15 Å：过小则上下文断裂、走向误判，过大则图淹模型。', { size: 10.5, fill: C.sub, maxW: 236, lh: 15 })
  b.wtext(440, 372, 'sigma 滑条是诚实度旋钮：降到 0.8σ 密度胖一圈是图在讨好你；升到 1.3σ 仍贴得住才是真贴合。纪律：判读一律在标准 1σ 下进行，±0.3σ 的变幅只用于检验；差值图以 2σ 级小斑立原子永远是越权裁判。', { size: 10.5, fill: C.mute, maxW: 236, lh: 15 })

  // ============ 二、五件套与指纹 ============
  b.panel(710, 132, 660, 430, { title: '二、核心操作五件套与各自指纹' })
  const op = (y: number, t: string, s: string) => {
    b.rect(730, y, 300, 52, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 7 })
    b.text(746, y + 21, t, { size: 11, weight: 700, fill: C.ink })
    b.wtext(746, y + 38, s, { size: 9.5, fill: C.sub, maxW: 270, lh: 12.5 })
  }
  op(186, 'Mutate Residue', '残基换成序列正确类型（register 校正基本步）')
  op(244, 'Fit Rotamer to Density', '从 Lovell 完备库挑密度最优侧链构象，一键完成')
  op(302, 'Real Space Refine Zone', '密度梯度为势场、几何约束为弹簧；区段三到八个残基为佳')
  op(360, 'Peptide Flip', '指纹：ψ 孤悬禁区而主链密度完好——翻转 180° 即愈')
  op(418, 'Chiral 翻转', '指纹：侧链差半个身位、CB 呈镜像；Ile 与 Thr 最常中招')
  // 迷你 Ramachandran
  const rx = 1070, ry = 420, rw = 270, rh = 220
  b.rect(rx, ry - rh, rw, rh, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
  b.ctext(rx + rw / 2, ry - rh - 10, 'peptide flip 的 Ramachandran 指纹', { size: 10.5, weight: 700, fill: C.ink })
  // 允许区（示意）
  b.ellipse(rx + rw * 0.28, ry - rh * 0.62, 42, 34, { fill: C.okL, fillOp: 0.8, stroke: C.ok, sw: 1.4 })
  b.ellipse(rx + rw * 0.66, ry - rh * 0.30, 36, 30, { fill: C.okL, fillOp: 0.8, stroke: C.ok, sw: 1.4 })
  b.ctext(rx + rw * 0.28, ry - rh * 0.62, 'β', { size: 11, weight: 700, fill: C.okD })
  b.ctext(rx + rw * 0.66, ry - rh * 0.30, 'α_{R}', { size: 11, weight: 700, fill: C.okD })
  // 禁区坏点
  b.circle(rx + rw * 0.52, ry - rh * 0.78, 6, { fill: C.bad })
  b.ctext(rx + rw * 0.52 + 12, ry - rh * 0.78 + 4, 'ψ 禁区', { size: 9.5, weight: 700, fill: C.badD })
  b.arrow(rx + rw * 0.52, ry - rh * 0.74, rx + rw * 0.66, ry - rh * 0.38, { stroke: C.bad, sw: 1.8, marker: 'bad', dash: '5 4' })
  b.ctext(rx + rw * 0.78, ry - rh * 0.52, '翻转后', { size: 9.5, weight: 700, fill: C.okD })
  b.ctext(rx + rw / 2, ry + 20, 'φ（横）与 ψ（纵）：酰胺平面装反的典型落点', { size: 9.5, fill: C.mute })
  b.wtext(730, 490, '五件套之外：沿骨架自动伸链、片段拆分与合并、以及 Undo——建模是试错的事业，撤销键与保存键同等重要（每轮局部修正即另存版本）。', { size: 10, fill: C.mute, maxW: 616, lh: 14 })

  // ============ 三、round-trip 循环 ============
  b.panel(30, 572, 660, 390, { title: '三、round-trip：建模-精修循环（典型三五个循环收敛）' })
  const rt = (x: number, y: number, w: number, t: string, s: string, stroke: string, fill: string) => {
    b.rect(x, y, w, 64, { fill, stroke, sw: 1.8, rx: 8 })
    b.ctext(x + w / 2, y + 24, t, { size: 11.5, weight: 700, fill: C.ink })
    b.wtext(x + w / 2, y + 44, s, { size: 9.5, fill: C.sub, maxW: w - 24, lh: 12.5, anchor: 'middle' })
  }
  rt(70, 620, 280, 'Coot 手工建模', '清验证球、修 register、局部整形、配体与水', C.dna, C.dnaL)
  rt(350, 620, 270, '导出 PDB／mmCIF', '交给精修器，模型与图版本同步另存', C.sub, C.panelB)
  rt(350, 720, 270, 'phenix.refine／REFMAC', '坐标与 B 因子精修、自动水（第 10 章）', C.acc, C.accL)
  rt(70, 720, 280, '新模型配新图回 Coot', '正反馈：图越来越好、模型越来越顺', C.dna, C.dnaL)
  b.arrow(330, 646, 360, 646, { stroke: C.sub, sw: 2, marker: 'ink' })
  b.arrow(485, 684, 485, 716, { stroke: C.acc, sw: 2, marker: 'acc' })
  b.arrow(346, 752, 336, 752, { stroke: C.dna, sw: 2, marker: 'dna' })
  b.path('M 70,752 L 56,752 L 56,652 L 66,652', { fill: 'none', stroke: C.dna, sw: 2, marker: 'dna' })
  b.ctext(213, 700, '循环', { size: 13, weight: 700, fill: C.mute })
  b.wtext(60, 806, '每轮节奏：先看 R 与 R_{free} 走势（正常为双双缓降、差值稳定），再巡一遍差值图有无新的未解释斑块，然后才动手清验证球；动手次序先大后小——整段重搭、register 平移这类结构性修正优先，侧链微调殿后。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(60, 870, '收敛判据「三轮无新发现」：验证球清不出新货、差值图无新斑、R_{free} 停在平台，建模者的交付才算完成。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })

  // ============ 四、会话清单与配体字典 ============
  b.panel(710, 572, 660, 390, { title: '四、典型会话清单与配体字典纪律' })
  b.table(730, 622, 620, {
    headers: ['步骤', '工具或操作', '检查点'],
    colW: [170, 240, 210],
    rowH: 27,
    fontSize: 10,
    rows: [
      ['读入新图与模型', '双图加载、验证着色', '差值峰分布'],
      ['清验证图标', '双色球逐个跳转', '红球清零'],
      ['修 register 与侧链', 'Mutate、Fit rotamer', '大侧链锚定'],
      ['局部整形', 'Real Space Refine、peptide flip', '图形贴合'],
      ['配体与水', 'Find ligands、加水位', '字典就位'],
      ['导出精修', 'phenix.refine 或 REFMAC', 'R 与 R_{free} 走势'],
    ],
  })
  b.wtext(730, 838, '骨架化与蝙蝠：骨架化把图约化为棒状骨架网络（bones）帮助眼睛连出走向；蝙蝠工具以短棒（对应两三个残基的肽段）沿骨架跳出主链路径——先骨架走向、再序列嫁接、后侧链收拾，顺序颠倒会把精力耗在注定重来的细节上。', { size: 10.5, fill: C.sub, maxW: 616, lh: 15 })
  b.wtext(730, 902, '配体拟合：Find Ligands 在差值图里搜索孤立的 +3σ 峰簇并给出候选构象；配体字典（restraints：键长、键角、平面、手性参数）须先就位——GRADE 与 eLBOW 由 SMILES 自动生成，单体库已有的直接调用；库缺又无字典的配体绝不能「裸建」。', { size: 10.5, fill: C.mute, maxW: 616, lh: 15 })
}

export default scene({
  title: 'Coot 与真实空间建模：从图里长出模型',
  subtitle: 'Coot（Emsley 与 Cowtan 2004）双图加载：主图 1σ 判读、差值图 ±3σ；五件套 Mutate／Rotamer／RSR／Peptide Flip／Chiral；round-trip 三五个循环收敛、判据三轮无新发现；配体字典 GRADE／eLBOW',
  draw,
})
