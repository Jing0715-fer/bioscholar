// ============================================================
// 生理学自绘插图挂载 - 批次 P7（由绘图代理 44-e 系列编写）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP7: Record<string, Illustration[]> = {
  'physiology-ch9-s1': [
    {
      src: '/images/bio/drawn/ph-ch9-s1-ventilation-mechanics.svg',
      caption:
        '通气力学全景：呼吸泵以膈肌为主力（平静吸气约 70% 做功、膈神经 C3–C5 支配），胸膜腔浆液把胸廓扩张偶联给不含肌肉的肺——平静呼气末腔压约 −5 cmH₂O、吸气末约 −7.5 cmH₂O，气胸即偶联断裂、肺塌陷。肺压力-容积曲线呈充放气滞后环，顺应性约 200 ml/cmH₂O；von Neergaard 盐水实验证明约 2/3 回缩力来自气-液界面表面张力。DPPC 依 Laplace 定律逆向稳定大小肺泡（缺乏即新生儿呼吸窘迫综合征），等压点动态压缩解释肺气肿的呼气用力悖论与缩唇呼吸代偿。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch9-s2': [
    {
      src: '/images/bio/drawn/ph-ch9-s2-vq-matching.svg',
      caption:
        '肺换气的计量与匹配：四容积（TV 500、IRV 3000、ERV 1200、RV 1200 ml）组合出 VC≈4600、FRC≈2400–2500、TLC≈5800 ml，残气量须氦稀释或体描法测定。肺泡通气 VA=(TV−VD)×f 才是有效通气——同样 6 L/min 分钟通气量，浅快呼吸使 VA 由 4.2 腰斩至 2.4 L/min（解剖死腔 150 ml）。V/Q 三区模型：理想值 0.8（通气 4∶血流 5 L/min），死腔样 V/Q→∞ 见于肺栓塞、分流样 V/Q→0 见于肺不张，吸纯氧可鉴别。Fick 定律下 CO₂ 扩散能力约为 O₂ 的 20 倍，决定呼吸膜病变时低氧先于 CO₂ 潴留。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch9-s3': [
    {
      src: '/images/bio/drawn/ph-ch9-s3-oxygen-dissociation.svg',
      caption:
        '血液气体运输：氧解离曲线 S 形源自 Hb 四聚体协同（Hill 系数≈2.8），P50 26–27 mmHg——肺点 PO₂ 100 mmHg 对应 SaO₂ 98%、组织点 40 对应 75%，平台保装载、陡坡保卸载。右移因素（pH↓、CO₂、温度、2,3-DPG↑）即波尔效应，在代谢旺盛处就地促卸氧；CO 亲和力 200–250 倍且余曲线左移。CO₂ 以 HCO₃⁻ 70%、氨基甲酸 Hb 23%、溶解 7% 三形态运输，碳酸酐酶为限速阀门，氯转移扩展碳酸氢盐仓库；何尔登效应使氧合促成 CO₂ 卸载，与波尔效应互为镜像。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch9-s4': [
    {
      src: '/images/bio/drawn/ph-ch9-s4-respiratory-control.svg',
      caption:
        '呼吸调节的分层结构：节律源于延髓前包钦格复合体（起搏神经元＋网络振荡），DRG 为反射接线盒、VRG 司用力呼气，脑桥调整中枢定吸-呼切换，皮层随意通路与自动通路解剖分离（Ondine 呼吸诅咒）。中枢化学感受器位于延髓腹外侧、真正配体为脑内 H⁺，贡献 CO₂ 驱动的 70%–80%；外周颈动脉体 I 型细胞在 PaO₂<60 mmHg 后放电陡增且只感分压不感含量。CO₂-通气反应斜率约 2–3 L/(min·mmHg)；陈施呼吸＝心衰的循环延迟加增益过高所致负反馈失稳，睡眠呼吸暂停分阻塞型与中枢型。',
      credit: DRAWN_CREDIT,
    },
  ],
}
