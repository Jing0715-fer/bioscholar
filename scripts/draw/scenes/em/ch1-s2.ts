// em ch1-s2 电子波长与分辨率极限（6-em）
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、相对论电子波长 ============
  b.panel(30, 132, 660, 290, { title: '一、相对论电子波长：比可见光短约十万倍' })
  b.text(50, 192, 'λ = h / √(2meV·(1 + eV/2mc^{2}))', { size: 16, weight: 700, fill: C.ink })
  b.text(50, 216, '非相对论近似 λ ≈ 12.27/√V（Å）：200 kV 时 0.0274 Å，再除以相对论因子 ≈1.09 → 0.0251 Å', { size: 10.5, fill: C.sub })
  b.table(50, 232, 620, {
    headers: ['加速电压', '电子波长', '与 550 nm 可见光之比'],
    colW: [180, 180, 260], rowH: 36, fontSize: 13,
    rows: [
      ['80 kV', '0.0418 Å', '约 1.3×10^{-5}'],
      ['100 kV', '0.0370 Å', '约 1.5×10^{-5}'],
      ['200 kV', '0.0251 Å', '约 2.2×10^{-5}'],
      ['300 kV', '0.0197 Å', '约 2.8×10^{-5}'],
    ],
  })

  // ============ 二、阿贝极限 ============
  b.panel(710, 132, 660, 290, { title: '二、阿贝极限：d = 0.61λ / (n·sinα)' })
  b.rect(730, 196, 300, 118, { fill: C.panelB, stroke: C.line, sw: 1.5, rx: 8 })
  b.ctext(880, 220, '光学显微镜（油浸）', { size: 12.5, weight: 700, fill: C.sub })
  b.ctext(880, 244, 'λ ≈ 550 nm，NA = n·sinα ≈ 1.4', { size: 11, fill: C.mute })
  b.ctext(880, 266, '玻璃透镜近完美', { size: 11, fill: C.mute })
  b.ctext(880, 294, '极限分辨率 ≈ 200 nm', { size: 12.5, weight: 700, fill: C.bad })
  b.rect(1050, 196, 300, 118, { fill: C.accL, stroke: C.acc, sw: 1.6, rx: 8 })
  b.ctext(1200, 220, '电子物镜（300 kV）', { size: 12.5, weight: 700, fill: C.accD })
  b.ctext(1200, 244, 'λ = 0.00197 nm，n = 1', { size: 11, fill: C.mute })
  b.ctext(1200, 266, 'α ≈ 10 mrad（像差随 α 急增）', { size: 11, fill: C.mute })
  b.ctext(1200, 294, 'd ≈ 0.61×0.00197/0.01 ≈ 0.12 nm', { size: 12.5, weight: 700, fill: C.accD })
  b.wtext(730, 338, '孔径角被砍小四个数量级，衍射极限仍在 1 Å 上下——波长已不是瓶颈，像差才是：球差 Cs 典型 0.5–2 mm、色差 Cc 约 1–2 mm（Scherzer 定理）。', { size: 10.5, fill: C.sub, maxW: 620, lh: 16 })
  b.ctext(1040, 396, '点分辨率（Cs 与 λ 决定）≠ 信息极限（相干性与稳定性决定）', { size: 10.5, weight: 600, fill: C.mute })

  // ============ 三、分辨率阶梯 ============
  b.panel(30, 448, 660, 300, { title: '三、分辨率阶梯（示意，非等比例）' })
  b.stairs(50, 505, 610, 185, ['可见光显微镜 约 200 nm', 'X 射线波带片 数十 nm', '电子未校正 0.5–2 Å', '球差校正 sub-Å'])
  b.ctext(335, 715, '1998 年六极校正器装机，材料电镜进入 sub-Å；生物电镜同期走离焦相位衬度 + 算法修正路线', { size: 10.5, fill: C.sub })

  // ============ 四、三种探针对比 ============
  b.panel(710, 448, 660, 300, { title: '四、三种成像探针对比' })
  b.table(730, 492, 620, {
    headers: ['探针', '波长', '透镜状况', '实际分辨率'],
    colW: [90, 130, 190, 210], rowH: 52, fontSize: 12,
    rows: [
      ['可见光', '400–700 nm', '玻璃近完美，NA ≈ 1.4', '约 200 nm'],
      ['X 射线', '约 0.1 nm', '无优质折射透镜（波带片）', '透镜成像数十 nm'],
      ['电子', '皮米级 0.02–0.04 Å', '磁透镜，α ≈ 10 mrad', '未校正 0.5–2 Å；校正后 sub-Å'],
    ],
  })
  b.wtext(730, 716, 'X 射线「有光无镜」，被波带片锁死在数十纳米；电子「镜不如光」但远远够用——皮米波长被毫米级像差削平到亚纳米。', { size: 10.5, fill: C.sub, maxW: 620, lh: 15 })

  // ============ 五、电压权衡（分区） ============
  b.zone(30, 772, 1340, 206, {
    label: '五、电压选择的权衡：生物 cryo-EM 主流 300 kV',
    sub: '高电压波长短、穿透厚、亮度高；低电压轻元素衬度高——取舍逻辑详见第 4、6 章',
  })
  b.text(60, 858, '高电压', { size: 12.5, weight: 700, fill: C.sub })
  b.tag(140, 886, '波长更短', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.okD, pad: 9 })
  b.tag(240, 886, '穿透更厚', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.okD, pad: 9 })
  b.tag(350, 886, '亮度提升', { fill: C.okL, stroke: C.ok, size: 11, tfill: C.okD, pad: 9 })
  b.tag(170, 920, 'knock-on 位移损伤上升', { fill: C.badL, stroke: C.bad, size: 11, tfill: C.badD, pad: 9 })
  b.tag(340, 920, '轻元素衬度下降', { fill: C.badL, stroke: C.bad, size: 11, tfill: C.badD, pad: 9 })
  b.tag(700, 886, '300 kV（Titan Krios 一类）：主流折中', { fill: C.warnL, stroke: C.warn, size: 12, weight: 700, tfill: C.warnD, pad: 10 })
  b.ctext(700, 922, '低剂量筛选与小分子敏感成像亦用 100–200 kV 机型', { size: 10.5, fill: C.sub })
  b.text(960, 858, '低电压（80–100 kV）', { size: 12.5, weight: 700, fill: C.sub })
  b.tag(1060, 886, '轻元素衬度更高', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(1185, 886, '剂量效率机制不同', { fill: C.accL, stroke: C.acc, size: 11, tfill: C.accD, pad: 9 })
  b.tag(1060, 920, '穿透变薄', { fill: C.badL, stroke: C.bad, size: 11, tfill: C.badD, pad: 9 })
  b.tag(1185, 920, '色差影响加重', { fill: C.badL, stroke: C.bad, size: 11, tfill: C.badD, pad: 9 })
}

export default scene({
  title: '电子波长与分辨率极限：短十万倍的光源',
  subtitle: 'λ = h/√(2meV·(1+eV/2mc²))：100 kV → 0.0370 Å、200 kV → 0.0251 Å、300 kV → 0.0197 Å；阿贝极限下光镜约 200 nm、电子衍射极限仍约 0.12 nm——像差才是瓶颈',
  draw,
})
