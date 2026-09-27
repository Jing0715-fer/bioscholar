// ============================================================
// 生理学自绘插图挂载 - 批次 P6（ch6-s4 与 ch8 四张，由 44-e4 与
// 44-f1 代理绘制，主控 44-d 补记图注）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP6: Record<string, Illustration[]> = {
  'physiology-ch6-s4': [
    {
      src: '/images/bio/drawn/ph-ch6-s4-hemostasis-abo.svg',
      caption:
        '止血、凝血与血型的完整链条：一期止血依次经历血管收缩（即刻反射）、血小板经 vWF-GPIb 粘附、GPIIb/IIIa-纤维蛋白原交联聚集形成白色栓（数分钟）；二期凝血级联中内源途径（XII→XI→IX→VIII，APTT 监测）与外源途径（VII-组织因子，PT 监测）汇合于共同通路（X→凝血酶→纤维蛋白交联）。纤溶系统（t-PA→纤溶酶）与抗凝系统（抗凝血酶 III、蛋白 C/S）维持动态平衡；ABO 血型以天然抗体与抗原的互补关系决定输血相容性，Rh 阴性孕妇的抗 D 免疫球蛋白阻断新生儿溶血。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch8-s1': [
    {
      src: '/images/bio/drawn/ph-ch8-s1-baroreflex.svg',
      caption:
        '动脉血压的神经调节：MAP＝CO×SVR（安静约 120/80 mmHg、MAP 约 93 mmHg）；颈动脉窦与主动脉弓的压力感受器监测血管壁牵张程度，经舌咽神经（CN IX）与迷走神经（CN X）传入延髓孤束核，整合后调整迷走与交感输出——血压升高时迷走张力增强、交感缩血管与心输出抑制，秒级完成负反馈闭环。压力感受器在慢性高血压中发生重调定，长期血压控制让位于肾脏-体液机制；外周化学感受器（PaO₂<60 mmHg 驱动）与心肺容量感受器提供补充防线。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch8-s2': [
    {
      src: '/images/bio/drawn/ph-ch8-s2-raas-volume.svg',
      caption:
        'RAAS 级联与体液-容量调节：肾灌注下降、交感 β₁ 兴奋与致密斑 NaCl 减少三重信号驱动球旁颗粒细胞释放肾素，血管紧张素原经 ACE（肺为主）转化为 AngII，经 AT₁ 受体实现缩血管、醛固酮释放、ADH 促进与近端小管直接重吸收的多重效应；醛固酮在远端小管以基因组效应（小时-天级）保钠排钾。心房钠尿肽（ANP）以利钠利尿扩血管拮抗 RAAS；Guyton 肾脏排钠-压力曲线的右移是慢性高血压的核心环节——ACEI/ARB/螺内酯的药理锚点均在此图。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch8-s3': [
    {
      src: '/images/bio/drawn/ph-ch8-s3-regional-circulation.svg',
      caption:
        '五大器官循环的解剖-功能适配：冠脉在舒张期获得 70–80% 灌流、心肌摄氧率高达 65–70%（储备靠腺苷等代谢性扩张而非摄氧倍增），心内膜下为缺血易损区；脑血管在 MAP 60–160 mmHg 平台自身调节、对 CO₂ 分压极度敏感且有血脑屏障护持；肾循环占心输出 20–25% 以滤过优先；肺循环低压（25/8 mmHg）低阻、缺氧时血管收缩以匹配通气；皮肤循环经动静脉吻合参与体温调节。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch8-s4': [
    {
      src: '/images/bio/drawn/ph-ch8-s4-circulation-integration.svg',
      caption:
        '循环整合的三个教科书场景：剧烈运动时 CO 由 5 升至 20–25 L/min，血流经交感再分配流向肌肉（占 75%–80%）与皮肤，总外周阻力不升反降；急性失血依三时相代偿——压力反射等神经机制秒级升压、RAAS/ADH/儿茶酚胺分钟至小时级恢复容量、EPO 红系重建天级跟进，失血超 30%–40% 陷入休克恶性循环；直立位 500–700 ml 血液池滞下肢，心输出量一过性下降约 20%，压力感受器反射是直立耐受的生命线。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch10-s4': [
    {
      src: '/images/bio/drawn/ph-ch10-s4-thermoregulation.svg',
      caption:
        '体温的进出台账与调定点：产热四源（基础内脏、静息肌张力、寒战最大 4–5 倍、新生儿褐色脂肪 UCP1 解耦联产热）对散热四途（舒适环境下辐射约 60%、对流约 15%、传导与蒸发；环境温度高于皮肤时蒸发成唯一出路）经皮肤血流与汗腺双向调节，下丘脑 PO/AH 以约 37 ℃ 设定点整合温度感受信号。发热是 PGE₂ 上调设定点后的「重整旗鼓」（寒战升温-高温平台-出汗退热三相），运动与中暑则设定点未动——处置原则迥异。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch11-s1': [
    {
      src: '/images/bio/drawn/ph-ch11-s1-gfr-filtration.svg',
      caption:
        '肾小球滤过的结构与算术：皮质肾单位约 85% 短襻主司滤过、近髓约 15% 长襻构筑髓质渗透梯度；滤过屏障三层（有孔内皮-基膜-足细胞裂孔膜）兼具孔径与电荷选择性。净滤过压＝肾小球毛细血管压 60 − 血浆胶渗压 32 − 囊内压 18 ≈ 10 mmHg，GFR 125 ml/min（每日滤过 180 L，终尿仅 1.5 L，重吸收率 99%）；清除率 C=U×V/P 以菊粉标定 GFR、PAH 标定有效肾血浆流量；MAP 80–180 mmHg 内肌源性与管球反馈维持血流自身调节平台。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch11-s2': [
    {
      src: '/images/bio/drawn/ph-ch11-s2-tubular-map.svg',
      caption:
        '肾小管与集合管重吸收的分段地图：近端小管等渗回收 Na⁺ 与水各约 65%（NHE3/SGLT2 二级主动、Na⁺-K⁺ 泵统一驱动，肾糖阈约 180 mg/dl）；襻粗升支 NKCC2 抽盐不透水成「稀释段」（呋塞米靶点）；远曲 NCC（噻嗪类）；集合管 ENaC-醛固酮保钠、AQP2 受 ADH 调控插膜、闰细胞 H⁺ 泵司酸碱。葡萄糖滴定曲线呈阈值-扇形-Tmax 375 mg/min 三段式；球管平衡使 65% 份额不因 GFR 波动而变。',
      credit: DRAWN_CREDIT,
    },
  ],
}
