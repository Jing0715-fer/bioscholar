// ph ch4-s3 视觉：眼光学、视网膜换能与视觉通路
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  // ============ 一、眼光学与屈光矫正 ============
  b.panel(30, 132, 660, 420, { title: '一、眼光学与屈光矫正' })
  b.wtext(50, 176, '简化眼：角膜+晶状体合计折光力约 +59 D（角膜约 +43 D，占 2/3），房水/玻璃体折射率约 1.33；正视眼静息聚焦于视网膜，眼轴约 24 mm', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  // 三个小眼图
  const eye = (cx: number, mode: 'emmet' | 'myo' | 'hyper') => {
    b.circle(cx, 330, 52, { fill: '#ffffff', stroke: C.sub, sw: 1.8 })
    b.line(cx + 40, 298, cx + 40, 362, { stroke: C.enz, sw: 5 })
    b.ellipse(cx - 44, 330, 10, 26, { fill: C.accL, stroke: C.acc, sw: 1.5, opacity: 0.8 })
    b.ellipse(cx - 18, 330, 7, 20, { fill: C.accL, stroke: C.acc, sw: 1.5 })
    if (mode === 'emmet') {
      b.polyline([[cx - 95, 316], [cx - 25, 316], [cx + 40, 330]], { stroke: C.warn, sw: 1.6 })
      b.polyline([[cx - 95, 344], [cx - 25, 344], [cx + 40, 330]], { stroke: C.warn, sw: 1.6 })
      b.ctext(cx + 40, 288, '焦点在视网膜', { size: 9.5, fill: C.sub })
    } else if (mode === 'myo') {
      b.polyline([[cx - 95, 316], [cx - 25, 316], [cx + 22, 330], [cx + 40, 338]], { stroke: C.warn, sw: 1.6 })
      b.polyline([[cx - 95, 344], [cx - 25, 344], [cx + 22, 330], [cx + 40, 322]], { stroke: C.warn, sw: 1.6 })
      b.circle(cx + 22, 330, 3, { fill: C.bad })
      b.ellipse(cx - 70, 330, 5, 24, { fill: 'none', stroke: C.acc, sw: 2, dash: '4 3' })
      b.polyline([[cx - 95, 316], [cx - 70, 318], [cx + 40, 332]], { stroke: C.dna, sw: 1.4, dash: '5 4' })
      b.polyline([[cx - 95, 344], [cx - 70, 342], [cx + 40, 328]], { stroke: C.dna, sw: 1.4, dash: '5 4' })
      b.ctext(cx - 70, 296, '凹透镜', { size: 9.5, fill: C.accD })
      b.ctext(cx + 22, 288, '焦点在前', { size: 9.5, fill: C.badD })
    } else {
      b.polyline([[cx - 95, 316], [cx - 25, 316], [cx + 62, 330]], { stroke: C.warn, sw: 1.6 })
      b.polyline([[cx - 95, 344], [cx - 25, 344], [cx + 62, 330]], { stroke: C.warn, sw: 1.6 })
      b.circle(cx + 62, 330, 3, { fill: C.bad })
      b.ellipse(cx - 70, 330, 6, 24, { fill: C.accL, stroke: C.acc, sw: 2 })
      b.polyline([[cx - 95, 316], [cx - 70, 315], [cx + 40, 331]], { stroke: C.dna, sw: 1.4, dash: '5 4' })
      b.polyline([[cx - 95, 344], [cx - 70, 345], [cx + 40, 329]], { stroke: C.dna, sw: 1.4, dash: '5 4' })
      b.ctext(cx - 70, 296, '凸透镜', { size: 9.5, fill: C.accD })
      b.ctext(cx + 58, 288, '焦点在后', { size: 9.5, fill: C.badD })
    }
    b.ctext(cx - 18, 384, '晶状体', { size: 9, fill: C.mute })
    b.ctext(cx + 40, 384, '视网膜', { size: 9, fill: C.enzD })
  }
  eye(140, 'emmet'); eye(350, 'myo'); eye(560, 'hyper')
  b.ctext(140, 412, '正视眼', { size: 11, weight: 700, fill: C.ink })
  b.ctext(350, 412, '近视：眼轴过长/折光过强', { size: 10.5, weight: 700, fill: C.ink })
  b.ctext(560, 412, '远视：眼轴过短/折光过弱', { size: 10.5, weight: 700, fill: C.ink })
  b.wtext(50, 462, '老视：晶状体弹性随增龄下降，调节幅度由青年 >10 D 降至老年 <2 D，近点远移；散光因角膜各经线曲率不一需柱镜矫正', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })
  b.wtext(50, 512, '瞳孔光反射：视网膜 → 顶盖前区 → 双侧 E-W 核 → 动眼神经 → 睫状神经节 → 瞳孔括约肌（对光双侧同缩）', { size: 10.5, fill: C.sub, maxW: 620, lh: 18 })

  // ============ 二、视网膜分层 ============
  b.panel(710, 132, 660, 420, { title: '二、视网膜分层：光逆向穿过、信号正向传出' })
  b.arrow(822, 174, 822, 396, { stroke: C.warn, sw: 2, marker: 'warn' })
  b.ctext(822, 166, '光', { size: 11, weight: 700, fill: C.warnD })
  b.rect(800, 200, 380, 40, { fill: C.panelB, stroke: C.line, sw: 1.4 })
  b.text(1195, 224, '神经节细胞层（输出）', { size: 10.5, fill: C.sub })
  b.rect(800, 248, 380, 40, { fill: C.panel, stroke: C.line, sw: 1.4 })
  b.text(1195, 276, '双极细胞（+水平/无长突）', { size: 10.5, fill: C.sub })
  for (let i = 0; i < 9; i++) {
    const x = 830 + i * 40
    b.polygon([[x - 9, 400], [x + 9, 400], [x + 9, 362], [x, 318], [x - 9, 362]], { fill: C.warnL, stroke: C.warn, sw: 1.4 })
    b.rect(x + 16, 322, 8, 78, { fill: '#e0f2fe', stroke: C.acc, sw: 1.2, rx: 4 })
  }
  b.text(1195, 330, '光感受器外段', { size: 10.5, fill: C.sub })
  b.text(1195, 348, '（视杆/视锥，远端）', { size: 9.5, fill: C.mute })
  b.rect(800, 408, 380, 18, { fill: C.ink, fillOp: 0.82 })
  b.text(1195, 421, '色素上皮（吞噬膜盘）', { size: 10, fill: C.sub })
  b.rect(800, 432, 380, 14, { fill: C.bad, fillOp: 0.3 })
  b.text(1195, 443, '脉络膜（血供）', { size: 10, fill: C.sub })
  b.arrow(1160, 390, 1160, 220, { stroke: C.enz, sw: 2, marker: 'enz' })
  b.ctext(1160, 208, '信号流', { size: 11, weight: 700, fill: C.enzD })
  b.wtext(800, 470, '光必须先穿过透明的神经节与双极层才到达感受器——逆向设计；中心凹处内层被推向周边，光直接落在视锥上（视力最锐处，无视杆）', { size: 10.5, fill: C.sub, maxW: 540, lh: 18 })
  b.wtext(800, 516, '视杆会聚度高（数十至数百杆汇于 1 个神经节细胞）→ 高灵敏低分辨；中央凹视锥近 1:1 → 高分辨', { size: 10.5, fill: C.sub, maxW: 540, lh: 18 })

  // ============ 三、视杆与视锥对比 ============
  b.panel(30, 572, 660, 412, { title: '三、视杆与视锥：两种光感受器' })
  b.table(50, 626, 620, {
    headers: ['特征', '视杆', '视锥'],
    colW: [90, 260, 270], rowH: 40, fontSize: 11,
    rows: [
      ['数量', '约 1.2 亿/眼（>95%）', '约 600 万/眼'],
      ['分布', '视网膜周边部，中央凹无', '中央凹密集（纯视锥区）'],
      ['视色素', '视紫红质（视蛋白+11-顺视黄醛）单一型', 'L/M/S 三种视锥视蛋白（三色视觉基础）'],
      ['功能', '暗视：单光子敏感、无色觉、易饱和', '明视：三色觉、高时空分辨'],
      ['会聚', '高会聚（可达 100+ 杆 : 1 节细胞）', '中央凹近 1:1 → 高锐度'],
    ],
  })
  b.wtext(50, 938, '暗适应：视锥先恢复（约 5–10 分钟），视杆阈值继续下降至 20–30 分钟达坪；维生素 A 缺乏 → 夜盲', { size: 10.5, fill: C.sub, maxW: 610, lh: 18 })

  // ============ 四、视觉通路 ============
  b.panel(710, 572, 660, 412, { title: '四、视觉通路：视交叉半交叉 → LGN → V1' })
  b.ellipse(790, 672, 30, 38, { fill: '#ffffff', stroke: C.sub, sw: 2 })
  b.line(790, 638, 790, 706, { stroke: C.faint, sw: 1, dash: '3 3' })
  b.ctext(790, 628, '左眼', { size: 10.5, weight: 700, fill: C.ink })
  b.ellipse(790, 800, 30, 38, { fill: '#ffffff', stroke: C.sub, sw: 2 })
  b.line(790, 766, 790, 834, { stroke: C.faint, sw: 1, dash: '3 3' })
  b.ctext(790, 756, '右眼', { size: 10.5, weight: 700, fill: C.ink })
  b.polyline([[820, 678], [960, 725], [1086, 786]], { stroke: C.warn, sw: 2 })
  b.polyline([[820, 794], [960, 725], [1086, 668]], { stroke: C.warn, sw: 2 })
  b.polyline([[820, 654], [1086, 658]], { stroke: C.acc, sw: 2 })
  b.polyline([[820, 808], [1086, 800]], { stroke: C.acc, sw: 2 })
  b.circle(960, 725, 5, { fill: C.ink })
  b.ctext(928, 760, '视交叉', { size: 10.5, weight: 700, fill: C.ink })
  b.rect(1090, 640, 110, 44, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1145, 666, '左 LGN（6 层）', { size: 10.5, weight: 700, fill: C.proD })
  b.rect(1090, 776, 110, 44, { fill: C.proL, stroke: C.pro, sw: 1.8, rx: 8 })
  b.ctext(1145, 802, '右 LGN（6 层）', { size: 10.5, weight: 700, fill: C.proD })
  b.arrow(1200, 662, 1240, 700, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.arrow(1200, 798, 1240, 760, { stroke: C.pro, sw: 2, marker: 'pro' })
  b.ctext(1222, 626, '视辐射', { size: 9.5, fill: C.mute })
  b.rect(1240, 640, 110, 180, { fill: C.dnaL, stroke: C.dna, sw: 1.8, rx: 8 })
  b.ctext(1295, 724, 'V1', { size: 13, weight: 700, fill: C.dnaD })
  b.ctext(1295, 746, '距状沟', { size: 10, fill: C.dnaD })
  b.ctext(1295, 766, '（枕叶 17 区）', { size: 9, fill: C.mute })
  b.legend(730, 852, [['鼻侧纤维（交叉）', C.warn], ['颞侧纤维（不交叉）', C.acc]], { size: 12, gap: 26 })
  b.wtext(730, 884, '每侧半球承接对侧视野：鼻侧视网膜感受颞侧视野——交叉后左半球看右视野、右半球看左视野', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })
  b.wtext(730, 930, 'LGN 大细胞层（1–2）→ 背侧通路（运动/位置）；小细胞层（3–6）→ 腹侧通路（颜色/形状细节）', { size: 10.5, fill: C.sub, maxW: 600, lh: 18 })
}

export default scene({
  title: '视觉：眼光学、视网膜换能与视觉通路',
  subtitle: '视杆约 1.2 亿（视紫红质、暗视单色），视锥约 600 万（L/M/S 三色明视）；近视焦点在前用凹透镜、远视焦点在后用凸透镜矫正；鼻侧纤维在视交叉交叉',
  draw,
})
