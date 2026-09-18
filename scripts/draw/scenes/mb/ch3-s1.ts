// mb ch3-s1 DNA 损伤的类型与后果（39-b2 批3）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、自发性损伤四类 ============
  b.panel(30, 132, 660, 300, { title: '一、自发性损伤：脱嘌呤 / 脱氨 / 氧化 / 烷基化' })
  const base = (x: number, y: number, s: string, col: string, fill: string, w = 34) => {
    b.rect(x, y, w, 30, { fill, stroke: col, sw: 1.8, rx: 5 })
    b.ctext(x + w / 2, y + 20, s, { size: 13, weight: 700, fill: col })
  }
  // 脱嘌呤
  b.tag(120, 186, '脱嘌呤', { fill: C.dnaL, stroke: C.dna, size: 12.5, weight: 700, tfill: C.dnaD, pad: 9 })
  base(80, 206, 'G', C.dna, C.dnaL)
  b.arrow(122, 221, 158, 221, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  b.rect(162, 206, 44, 30, { fill: '#ffffff', stroke: C.bad, sw: 1.8, rx: 5, dash: '5 4' })
  b.ctext(184, 226, 'AP', { size: 12.5, weight: 700, fill: C.bad })
  b.text(216, 226, '＝无碱基位点', { size: 10.5, fill: C.mute })
  b.wtext(60, 258, '嘌呤糖苷键自发水解；一个哺乳动物细胞每天可丢失数千个嘌呤碱基。', { size: 11, fill: C.sub, maxW: 280, lh: 15.5 })
  // 脱氨
  b.tag(430, 186, '脱氨', { fill: C.rnaL, stroke: C.rna, size: 12.5, weight: 700, tfill: C.rnaD, pad: 9 })
  base(370, 206, 'C', C.rna, C.rnaL)
  base(408, 206, 'G', C.rna, C.rnaL)
  b.arrow(452, 221, 488, 221, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  base(492, 206, 'U', C.bad, C.badL)
  base(530, 206, 'G', C.bad, C.badL)
  b.wtext(360, 258, 'C→U：未修复则复制后 C:G→T:A 转换；5mC→T 为 CpG 突变热点；A→次黄嘌呤。', { size: 11, fill: C.sub, maxW: 280, lh: 15.5 })
  b.line(60, 288, 650, 288, { stroke: C.line, sw: 1, dash: '4 5' })
  // 氧化
  b.tag(130, 308, '氧化', { fill: C.enzL, stroke: C.enz, size: 12.5, weight: 700, tfill: C.enzD, pad: 9 })
  base(80, 328, 'G', C.dna, C.dnaL)
  b.arrow(122, 343, 158, 343, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  base(162, 328, '8-oxoG', C.enz, C.enzL, 68)
  b.wtext(60, 380, '活性氧物种（ROS）攻击碱基；8-oxoG 与 A 错配 → G:C→T:A 颠换。', { size: 11, fill: C.sub, maxW: 280, lh: 15.5 })
  // 烷基化
  b.tag(450, 308, '烷基化', { fill: C.accL, stroke: C.acc, size: 12.5, weight: 700, tfill: C.accD, pad: 9 })
  base(370, 328, 'G', C.acc, C.accL)
  b.arrow(412, 343, 448, 343, { stroke: C.sub, sw: 1.8, marker: 'ink' })
  base(452, 328, 'O⁶-meG', C.acc, C.accL, 68)
  b.wtext(360, 380, '内源或外源烷化剂（亚硝胺、EMS、MMS）；O⁶-meG 与 T 错配，强致癌与细胞毒性。', { size: 11, fill: C.sub, maxW: 280, lh: 15.5 })

  // ============ 二、环境因素诱导的损伤 ============
  b.panel(690, 132, 680, 300, { title: '二、环境因素诱导的损伤' })
  b.table(710, 176, 640, {
    headers: ['损伤因素', '典型损伤', '特点'],
    colW: [170, 250, 220],
    rowH: 48,
    fontSize: 11.5,
    rows: [
      ['紫外线（260 nm）', '环丁烷嘧啶二聚体（CPD）、6-4 光产物', '相邻嘧啶共价联结'],
      ['电离辐射（X / γ）', '单 / 双链断裂（SSB / DSB）、碱基破坏', 'DSB 最致命'],
      ['嵌入剂（吖啶类）', '插入引起移码突变', '复制滑移'],
      ['交联剂（顺铂等）', '链间 / 链内交联', '完全阻断复制与转录'],
    ],
  })
  b.text(710, 430, '损伤是化学结构异常（可被酶直接识别逆转）；突变是序列信息的稳定改变。', { size: 12, fill: C.mute })

  // ============ 三、损伤经复制固定为突变 ============
  b.panel(30, 452, 700, 270, { title: '三、损伤 ≠ 突变：损伤经复制才固定为突变' })
  b.line(70, 520, 210, 520, { stroke: C.dna, sw: 2.4 })
  b.line(70, 552, 210, 552, { stroke: C.dna, sw: 2.4 })
  b.circle(140, 536, 11, { fill: C.badL, stroke: C.bad, sw: 2 })
  b.line(135, 531, 145, 541, { stroke: C.bad, sw: 1.8 })
  b.line(135, 541, 145, 531, { stroke: C.bad, sw: 1.8 })
  b.ctext(140, 496, '损伤（结构异常）', { size: 11.5, fill: C.bad })
  b.arrow(216, 536, 272, 536, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.line(290, 506, 450, 506, { stroke: C.dna, sw: 2 })
  b.line(290, 534, 450, 534, { stroke: C.acc, sw: 2 })
  b.circle(370, 520, 9, { fill: C.badL, stroke: C.bad, sw: 1.8 })
  b.rect(362, 528, 16, 12, { fill: C.accL, stroke: C.acc, sw: 1.4 })
  b.ctext(392, 548, '错配掺入', { size: 10.5, fill: C.accD })
  b.line(290, 570, 450, 570, { stroke: C.dna, sw: 2 })
  b.line(290, 598, 450, 598, { stroke: C.dna, sw: 2 })
  b.arrow(456, 536, 512, 536, { stroke: C.sub, sw: 2.2, marker: 'ink' })
  b.line(530, 520, 670, 520, { stroke: C.dna, sw: 2.4 })
  b.line(530, 552, 670, 552, { stroke: C.dna, sw: 2.4 })
  b.rect(588, 526, 24, 20, { fill: C.badL, stroke: C.bad, sw: 1.6, rx: 3 })
  b.rect(588, 548, 24, 4, { fill: C.bad, opacity: 0.7 })
  b.ctext(600, 594, '突变碱基对', { size: 10.5, fill: C.bad })
  b.ctext(140, 632, '① 含损伤的亲代 DNA', { size: 12, weight: 700, fill: C.sub })
  b.ctext(370, 632, '② 复制：损伤被「拷贝」', { size: 12, weight: 700, fill: C.sub })
  b.ctext(600, 632, '③ 突变固定（可遗传）', { size: 12, weight: 700, fill: C.sub })
  b.wtext(60, 668, '只有当损伤被拷贝进子链后才真正固定为突变——修复系统必须在复制前与复制时协同运作；后果包括转换、颠换、移码，及复制阻断与转录停滞。', { size: 12, fill: C.sub, maxW: 660, lh: 17.5 })

  // ============ 四、修复缺陷的遗传病 ============
  b.panel(740, 452, 630, 270, { title: '四、修复系统缺陷的遗传病' })
  const dis = [
    ['着色性干皮病（XP）', 'NER 缺陷——对 UV 极度敏感，皮肤癌高发', C.bad],
    ['共济失调毛细血管扩张症（AT）', 'DSB 感知缺陷', C.warn],
    ['BRCA1/2 突变', '同源重组修复缺陷（乳腺癌 / 卵巢癌）', C.pro],
  ]
  dis.forEach(([t, s, col], i) => {
    const y = 496 + i * 68
    b.rect(760, y, 590, 56, { fill: '#ffffff', stroke: col as string, sw: 1.8, rx: 8 })
    b.text(780, y + 24, t as string, { size: 13.5, weight: 700, fill: col as string })
    b.text(780, y + 44, s as string, { size: 12, fill: C.sub })
  })
  b.text(760, 706, '修复能力缺陷直接证明修复系统的生理重要性。', { size: 12, fill: C.mute })

  // ============ 五、CPD 与移码 ============
  b.panel(30, 732, 1340, 238, { title: '五、两类典型损伤的结构示意' })
  b.text(60, 782, 'UV 诱导的嘧啶二聚体', { size: 13.5, weight: 700, fill: C.ink })
  b.rect(80, 800, 44, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 5 })
  b.ctext(102, 826, 'T', { size: 15, weight: 700, fill: C.dnaD })
  b.rect(140, 800, 44, 40, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 5 })
  b.ctext(162, 826, 'T', { size: 15, weight: 700, fill: C.dnaD })
  b.rect(124, 806, 16, 28, { fill: C.warnL, stroke: '#b45309', sw: 1.8, dash: '4 3' })
  b.wtext(220, 812, '相邻嘧啶经环丁烷环共价联结（CPD），阻断复制与转录；另有 6-4 光产物。', { size: 12, fill: C.sub, maxW: 380, lh: 17.5 })
  b.text(700, 782, '移码突变（嵌入剂 / 复制滑移）', { size: 13.5, weight: 700, fill: C.ink })
  const cod = (x: number, y: number, s: string, fill: string, stroke: string, w = 72) => {
    b.rect(x, y, w, 32, { fill, stroke, sw: 1.6, rx: 4 })
    b.ctext(x + w / 2, y + 21, s, { size: 12.5, weight: 700, fill: stroke })
  }
  cod(700, 796, 'ATG', C.panelB, C.sub)
  cod(776, 796, 'CCA', C.panelB, C.sub)
  cod(852, 796, 'TGG', C.panelB, C.sub)
  b.text(950, 816, '← 正常读框', { size: 11.5, fill: C.mute })
  cod(700, 856, 'ATG', C.panelB, C.sub)
  cod(776, 856, 'T', C.badL, C.bad, 26)
  cod(806, 856, 'CCA', C.panelB, C.sub)
  cod(882, 856, 'TGG', C.panelB, C.sub)
  b.text(950, 876, '← 插入 1 个碱基，读框整体移位', { size: 11.5, fill: C.bad })
  b.text(700, 936, '插入 / 缺失非 3 倍数核苷酸引起移码；Brenner 等用 T4 rII 移码突变证明三联体阅读方式（见第 6 章）。', { size: 12, fill: C.mute })
}

export default scene({
  title: 'DNA 损伤的类型与后果',
  subtitle: '自发损伤（脱嘌呤、脱氨、8-oxoG、O⁶-meG）与环境因素（UV 二聚体、电离断裂、嵌入移码、交联）——损伤是结构异常，经复制拷贝才固定为突变',
  draw,
})
