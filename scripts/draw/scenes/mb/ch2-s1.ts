// mb ch2-s1 半保留复制的证实：Meselson-Stahl 实验（39-b2 批2）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、实验设计 ============
  b.panel(30, 132, 1340, 164, { title: '一、实验设计：¹⁵N → ¹⁴N 同位素转移 + CsCl 密度梯度离心（1958）' })
  const steps: [string, string][] = [
    ['① ¹⁵N 标记', '大肠杆菌在含 ¹⁵NH₄Cl（重氮）培养液中培养多代，DNA 双链均被 ¹⁵N 标记'],
    ['② 转入 ¹⁴N', '突然转入 ¹⁴N（轻氮）培养基，继续培养'],
    ['③ 分代取样', '在不同代数取样，提取 DNA'],
    ['④ 梯度离心', 'CsCl 平衡超速离心，重 / 轻 DNA 因浮力密度不同而分离成带'],
  ]
  steps.forEach(([t, s], i) => {
    const x = 56 + i * 330
    b.rect(x, 172, 300, 84, { fill: C.panelB, stroke: C.line, sw: 1.4, rx: 8 })
    b.text(x + 16, 196, t, { size: 13.5, weight: 700, fill: C.ink })
    b.wtext(x + 16, 218, s, { size: 11.5, fill: C.sub, maxW: 272, lh: 16 })
    if (i < 3) b.arrow(x + 302, 214, x + 328, 214, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  })
  b.text(56, 282, '被誉为「生物学最美实验」——实验结果同时排除全保留与分散两种假说。', { size: 12.5, weight: 700, fill: C.ink })

  // ============ 二、三种假说的判定 ============
  b.panel(30, 308, 420, 300, { title: '二、三种假说的预期与排除' })
  b.table(48, 362, 384, {
    headers: ['假说', '第 1 代', '第 2 代', '判定'],
    colW: [80, 96, 136, 72],
    rowH: 52,
    fontSize: 11,
    rows: [
      ['半保留', '全部中间带', '中间 + 轻（1:1）', '符合'],
      ['全保留', '重 + 轻两带', '重 + 轻两带', '排除'],
      ['分散', '一条弥散带', '一条弥散带', '排除'],
    ],
  })
  b.wtext(48, 584, '第 1 代即排除全保留；第 2 代 1:1 分离再排除分散——唯一符合半保留复制。', { size: 12, fill: C.sub, maxW: 384, lh: 17 })

  // ============ 三、离心管结果（核心图） ============
  b.panel(470, 308, 900, 392, { title: '三、CsCl 密度梯度离心结果：条带随代数的分布' })
  b.legend(880, 342, [['重 ¹⁵N/¹⁵N', C.enz], ['杂合 ¹⁵N/¹⁴N', C.dna], ['轻 ¹⁴N/¹⁴N', C.acc]], { size: 11.5 })
  const tubes: [string, [number, number][], string][] = [
    ['第 0 代（转移前）', [[0.20, 30]], '只有重带'],
    ['第 1 代', [[0.5, 30]], '全部为中间密度杂合带'],
    ['第 2 代', [[0.5, 26], [0.78, 26]], '中间 : 轻 ≈ 1 : 1'],
    ['第 3 代', [[0.5, 16], [0.78, 42]], '中间 : 轻 ≈ 1 : 3'],
  ]
  const tx = 500, tw = 560
  tubes.forEach(([label, bands, ratio], i) => {
    const y = 356 + i * 74
    b.text(tx, y - 8, label, { size: 12.5, weight: 700, fill: C.ink })
    b.rect(tx, y, tw, 46, { fill: '#f8fafc', stroke: C.sub, sw: 2, rx: 10 })
    bands.forEach(([fx, bw]) => {
      const bx = tx + fx * tw - bw / 2
      const col = fx === 0.20 ? C.enz : fx === 0.5 ? C.dna : C.acc
      b.rect(bx, y + 8, bw, 30, { fill: col, opacity: 0.85, rx: 4 })
    })
    b.text(tx + tw + 24, y + 30, ratio, { size: 12.5, fill: C.sub })
  })
  // 密度轴
  b.line(tx, 648, tx + tw, 648, { stroke: C.faint, sw: 1.6, marker: 'mute', markerStart: 'mute' })
  b.text(tx, 670, '← 浮力密度大（重侧）', { size: 11.5, fill: C.mute })
  b.etext(tx + tw, 670, '浮力密度小（轻侧）→', { size: 11.5, fill: C.mute })
  b.text(tx + tw + 24, 644, '杂合带按 (1/2)ⁿ 递减', { size: 12, fill: C.mute })

  // ============ 四、补强证据 ============
  b.panel(30, 620, 420, 350, { title: '四、两条补强证据' })
  b.text(48, 668, '第 1 代杂合 DNA 变性分离：', { size: 12.5, weight: 700, fill: C.ink })
  b.rect(70, 684, 40, 118, { fill: '#f8fafc', stroke: C.sub, sw: 2, rx: 8 })
  b.rect(72, 706, 36, 12, { fill: C.enz, opacity: 0.85, rx: 3 })
  b.rect(72, 756, 36, 12, { fill: C.acc, opacity: 0.85, rx: 3 })
  b.text(122, 715, '重单链（¹⁵N）', { size: 11.5, fill: C.enzD })
  b.text(122, 740, '≈ 等量', { size: 11.5, fill: C.mute })
  b.text(122, 765, '轻单链（¹⁴N）', { size: 11.5, fill: C.accD })
  b.wtext(48, 826, '得等量重 / 轻单链——每个子代双分子各含一条亲代链与一条新合成链。', { size: 12, fill: C.sub, maxW: 380, lh: 17 })
  b.text(48, 880, '1957 年 Taylor：蚕豆根尖细胞', { size: 12.5, weight: 700, fill: C.ink })
  b.wtext(48, 904, '³H-胸苷参入 + 放射自显影，证明真核染色体 DNA 同样半保留复制——一条染色单体含旧链、另一条含新链。', { size: 12, fill: C.sub, maxW: 380, lh: 17 })

  // ============ 五、半保留复制的分子谱系 ============
  b.panel(470, 720, 900, 250, { title: '五、半保留复制的分子谱系：杂合分子按 (1/2)ⁿ 递减' })
  b.legend(1180, 756, [['¹⁵N 旧链', C.enz], ['¹⁴N 新链', C.acc]], { size: 11.5 })
  const mol = (cx: number, cy: number, top: 'H' | 'L', bot: 'H' | 'L') => {
    b.rect(cx - 60, cy - 18, 120, 36, { fill: C.panel, stroke: C.line, sw: 1.4, rx: 6 })
    b.line(cx - 50, cy - 7, cx + 50, cy - 7, { stroke: top === 'H' ? C.enz : C.acc, sw: 4 })
    b.line(cx - 50, cy + 7, cx + 50, cy + 7, { stroke: bot === 'H' ? C.enz : C.acc, sw: 4 })
  }
  b.text(496, 792, '0 代', { size: 12, weight: 700, fill: C.mute })
  b.text(496, 872, '1 代', { size: 12, weight: 700, fill: C.mute })
  b.text(496, 946, '2 代', { size: 12, weight: 700, fill: C.mute })
  mol(680, 788, 'H', 'H')
  b.line(660, 806, 590, 850, { stroke: C.faint, sw: 1.6 })
  b.line(700, 806, 770, 850, { stroke: C.faint, sw: 1.6 })
  mol(580, 868, 'H', 'L')
  mol(780, 868, 'H', 'L')
  b.line(560, 886, 530, 924, { stroke: C.faint, sw: 1.6 })
  b.line(600, 886, 660, 924, { stroke: C.faint, sw: 1.6 })
  b.line(760, 886, 860, 924, { stroke: C.faint, sw: 1.6 })
  b.line(800, 886, 1080, 924, { stroke: C.faint, sw: 1.6 })
  mol(540, 942, 'H', 'L')
  mol(700, 942, 'L', 'L')
  mol(900, 942, 'H', 'L')
  mol(1100, 942, 'L', 'L')
  b.wtext(1180, 800, '每个杂合分子复制 → 1 杂合 + 1 轻；杂合占比逐代减半，与离心结果一致。', { size: 11.5, fill: C.sub, maxW: 170, lh: 16 })
}

export default scene({
  title: '半保留复制的证实：Meselson-Stahl 实验',
  subtitle: '¹⁵N→¹⁴N 转移培养 + CsCl 密度梯度离心——第 1 代全为中间密度杂合带、第 2 代中间带与轻带约 1:1，唯一符合半保留复制（1958）',
  draw,
})
