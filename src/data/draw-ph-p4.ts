// ============================================================
// 生理学自绘插图挂载 - 批次 P4（由绘图代理 44-f3 编写）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP4: Record<string, Illustration[]> = {
  'physiology-ch12-s3': [
    {
      src: '/images/bio/drawn/ph-ch12-s3-calcium-glucose.svg',
      caption:
        '血钙 2.25–2.75 mmol/L 中仅游离钙（约 50%）具生理活性，由 CaSR–PTH–骨钙三醇双轴经骨、肾、肠三靶器官联动保钙，降钙素为作用微弱的第三备用；维生素 D 经皮肤 UVB 光解、肝 25-羟化与肾 1α-羟化两级活化为骨钙三醇，限速酶受 PTH 与低磷促进、FGF23 抑制；β 细胞经 GLUT2–葡萄糖激酶–K-ATP–Ca²⁺ 传感链胞吐胰岛素，磺脲类锚定 SUR1；胰岛素与胰高血糖素摩尔比决定肝脏入库或放粮，1 型为免疫性 β 损毁，2 型为抵抗伴疲惫。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch12-s4': [
    {
      src: '/images/bio/drawn/ph-ch12-s4-menstrual-cycle.svg',
      caption:
        '月经周期四条激素曲线展示反馈方向的两次翻转：晚卵泡期雌二醇越过约 200 pg/ml 持续 48 小时使负反馈翻转为正反馈、引爆 LH 峰，排卵发生于峰起始后约 36 小时；黄体功能性寿命固定约 14 天，分泌期孕酮与雌二醇强负反馈压制 GnRH 脉冲；受孕后 hCG 以 LH 样活性救援黄体，孕酮维持至妊娠 8–10 周由胎盘接管；分娩由胎儿皮质醇–胎盘 CRH 正反馈与宫颈扩张–缩宫素力学环发动；泌乳分催乳素生成与缩宫素–肌上皮射乳两环，吮吸抑制 GnRH 致哺乳期闭经。',
      credit: DRAWN_CREDIT,
    },
  ],
}
