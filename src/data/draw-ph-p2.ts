// ============================================================
// 生理学自绘插图挂载 - 批次 P2（由绘图代理 44-e1 编写）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// 覆盖小节：physiology-ch1-s3 / ch1-s4 / ch2-s1 / ch2-s2 / ch2-s3
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP2: Record<string, Illustration[]> = {
  'physiology-ch1-s3': [
    {
      src: '/images/bio/drawn/ph-ch1-s3-feedback-modes.svg',
      caption:
        '机体控制论的三种逻辑：负反馈以动脉血压骤升为例，经压力感受器→延髓中枢→效应器闭环「以偏差治偏差」，增益 = 校正量 ÷ 残余偏差 = (40-10)/10 = 3，残余偏差与时间滞后导致的振荡（Mayer 波）写在曲线上；正反馈（分娩宫缩、凝血级联、动作电位升支）是必须自带限终点的放大器，失去自限即恶性循环；前馈（条件反射性分泌、运动前中央命令）不等偏差出现即预先调整，快而无兜底，须与负反馈并行。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch1-s4': [
    {
      src: '/images/bio/drawn/ph-ch1-s4-three-regulations.svg',
      caption:
        '三种调节方式的分工与接力：神经调节经反射弧（感受器→传入→中枢→传出→效应器）以毫秒-秒级完成精确而短暂的纠正，膝反射约 50 ms；体液调节以激素经血液运输，秒-分钟起效、广泛持久（甲状腺激素以周计）；自身调节凭组织内在性质即时起效——脑血流在灌注压 60–160 mmHg 内近乎不变的平台由肌源性反应维持，心肌以 Starling 异长调节泵出多余回心血量。急性失血约 1 L 后三者按数秒-数分钟-数小时至日的时间常数层层设防，共同守护动脉血压稳态。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch2-s1': [
    {
      src: '/images/bio/drawn/ph-ch2-s1-membrane-passive.svg',
      caption:
        '细胞膜的流动镶嵌结构（约 7.5–10 nm）与被动转运：脂双层疏水核心构成选择性屏障，O₂/CO₂ 与类固醇激素顺梯度自由穿越（肺毛细血管气体交换前 0.25 s 即完成），离子与葡萄糖被拒之门外；水经 AQP 水通道单列快速通行，渗透压是溶质的依数性——正常细胞外液约 280–310 mOsm/kg，低渗肿胀、高渗皱缩；300 mOsm 尿素溶液等渗而不等张（溶血），0.9% NaCl 等渗且等张，输液张力谱的物理学在此先行推演。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch2-s2': [
    {
      src: '/images/bio/drawn/ph-ch2-s2-carriers-pumps.svg',
      caption:
        '载体与泵的三联机制：GLUT 家族易化扩散表现酶样饱和动力学（Vmax 上限、Km 反映亲和力，GLUT1/2/3/4 各守岗位）；Na⁺/K⁺-ATPase 每 1 分子 ATP 泵出 3 Na⁺、泵入 2 K⁺，净外移一个正电荷而成生电性泵，被乌本苷阻断，消耗静息全身 ATP 的 20%–30%；继发性主动转运搭 Na⁺ 梯度便车——SGLT1 以 2 Na⁺ 同向捎带 1 葡萄糖、NCX 以 3 Na⁺ 入换 1 Ca²⁺ 出。跨上皮吸收完成 ATP→Na⁺ 梯度→葡萄糖梯度的三级能量接力，口服补液盐即其临床应用。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch2-s3': [
    {
      src: '/images/bio/drawn/ph-ch2-s3-resting-action-potential.svg',
      caption:
        '生物电的两块基石：左侧 Nernst 平衡电位标尺给出 E_K ≈ -90 mV、E_Na ≈ +60 mV、E_Cl ≈ -70 mV，GHK 方程按通透性加权（P_K∶P_Na ≈ 1∶0.04）得静息膜电位约 -70 mV——直接作者是 K⁺ 外漏、间接作者是钠泵；右侧动作电位分期显示阈电位 -55 mV 触发 Na⁺ 通道再生性正反馈升支（超射约 +30 mV，逼近而不及 E_Na），Na⁺ 失活与 K⁺ 外流交替主导复极并留下后超极化；绝对不应期（约 0.5–2 ms）与相对不应期为频率编码封顶，全或无定律使强度信息以「节拍」而非「音量」表达。',
      credit: DRAWN_CREDIT,
    },
  ],
}
