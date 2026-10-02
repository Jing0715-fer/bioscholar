// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P11（第 11 章特化上皮与特化细胞，4 张）
// 场景源码：scripts/draw/scenes/mt/ch11-s1~s4.ts（46-c11 代理绘制，
// 主控 46-d 补登记与图注）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP11: Record<string, Illustration[]> = {
  'membrane-transport-ch11-s1': [
    {
      src: '/images/bio/drawn/mt-ch11-s1-epithelial-polarity.svg',
      caption:
        '上皮转运总论：顶端膜与基侧膜各持一套转运蛋白、微绒毛刷状缘扩面约 20 倍；紧密连接既是分子篱笆又是 claudin 编码的细胞旁滤器（claudin-16/19 缺陷致家族性低镁血症）；紧密上皮数百至数千 Ω·cm²、泄漏上皮约 5–10 Ω·cm²；钠耦联三步模型与 standing gradient 运水，WNK4-SPAK/OSR1 以 Cl⁻ 切换矢量方向；根内皮层凯氏带（木栓质+CASP 蛋白）是植物版紧密连接——强制质外体流走穿细胞路线。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch11-s2': [
    {
      src: '/images/bio/drawn/mt-ch11-s2-animal-epithelia.svg',
      caption:
        '动物的特化上皮：近端小管以 SGLT2 约 90%＋SGLT1 约 10% 接力回收滤过糖、GLUT2 基侧卸货；TAL 的 NKCC2＋ROMK＋ClC-Ka/b 只盐不水驱动逆流倍增；主细胞 ENaC＋ROMK 保钠泌钾、闰细胞 H⁺-ATPase＋AE1 司酸碱；霍乱经 cAMP 开 CFTR 致分泌性腹泻、ORS 借钠糖耦联吸水；壁细胞 H⁺/K⁺-ATPase 分泌 0.16 mol/L 盐酸；血脑屏障以 claudin-5＋P-gp＋GLUT1 成药理屏障。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch11-s3': [
    {
      src: '/images/bio/drawn/mt-ch11-s3-guard-cells.svg',
      caption:
        '保卫细胞——「植物的单细胞肾」：蓝光 phot1/2→H⁺-ATPase（Thr 磷酸化＋14-3-3）→超极化→KAT1/KAT2 摄钾＋苹果酸合成→吸水开孔；ABA→PYR/PYL/RCAR→OST1→SLAC1 阴离子外流去极化→GORK 排钾→关孔；CBL1/9-CIPK23 作钙校验；根吸收区分区带 AHA2/HAK5/AKT1/IRT1；盐腺泌盐与韧皮部 SUC2 质外体装载/聚合物陷阱共质体装载双模式；巨大液泡 TIP 为快开水闸。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch11-s4': [
    {
      src: '/images/bio/drawn/mt-ch11-s4-gas-exchange-compare.svg',
      caption:
        '气体交换的动植物汇流：人肺呼吸膜仅 0.2–0.6 μm、总面积约 70 m²，红细胞 0.75 s 过境而 0.25 s 即达扩散平衡、血红蛋白化学耦合使分压差不封顶；植物气孔承担蒸腾比约 400–800 mol H₂O/mol CO₂（C₃）的工程折衷；高 CO₂ 经 HT1/MPK12 使气孔部分关闭并写进化石「古气压计」；钾/阴离子通道为两界共同执行器、昆虫气管与气孔趋同演化；AQP1/PIP1;2 的 CO₂ 通透性悬而未决，内向/外向整流以「逆势不开门」收束。',
      credit: DRAWN_CREDIT,
    },
  ],
}
