// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P4（第 4 章水通道，4 张）
// 场景源码：scripts/draw/scenes/mt/ch4-s1~s4.ts（46-c4 代理绘制，
// 主控 46-d 补登记与图注）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP4: Record<string, Illustration[]> = {
  'membrane-transport-ch4-s1': [
    {
      src: '/images/bio/drawn/mt-ch4-s1-aqp-architecture.svg',
      caption:
        '水通道蛋白的结构总论：六跨膜 α 螺旋与两个折入膜心的 NPA 半环围成沙漏形孔道，四聚体中每个单体独立导水；ar/R 收缩环把孔径限定在约 2.8 Å 恰容单排水分子纵队，NPA 位点的氢键取向中断与静电排斥构成双重屏障使质子（H₃O⁺/Grotthuss 跳跃）无法穿越；导水速率约 3×10⁹ 个水分子/(s·单体)、Pf/Pd>5 为连续孔道提供动力学证据，汞以 Cys 位点封闭通道。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch4-s2': [
    {
      src: '/images/bio/drawn/mt-ch4-s2-animal-aqp.svg',
      caption:
        '人类 13 个水通道的分工版图：经典型 AQP1 常驻近端小管与髓襻降支承担约 2/3 滤液水重吸收，AQP2 经 AVP→V2→cAMP→PKA 链分钟级囊泡插入集合管顶膜（AQP3/4 把守基侧出口）构成肾浓缩水路；AQP4 驻星形胶质细胞终足守血脑屏障、AQP5 司腺体分泌、AQP7/9 构成脂肪-肝甘油经济，AQP11/12 为非经典亚族；AQP2/V2 突变致肾性尿崩、AQP0 致白内障、AQP5 失调与干燥综合征相关。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch4-s3': [
    {
      src: '/images/bio/drawn/mt-ch4-s3-plant-mip.svg',
      caption:
        '拟南芥 35 个 MIP 的四亚科版图：PIP 13 驻质膜（PIP1 需与 PIP2 异源四聚化方能高效上膜，菠菜 SoPIP2;1 以 Ser283 磷酸化为开关）、TIP 10 守液泡（液泡约占成熟细胞体积 90%，膨压的秒级调节系于 TIP 快车道）、NIP 9 司硼硅营养（NIP5;1 根硼吸收、NIP6;1 叶硼、水稻 Lsi1/NIP2;1 为硅通道——硅可达禾本科干重约 10%）、SIP 3 留内质网；调控有磷酸化、pH/ROS 关闭 Cys、泛素化胞吞与转录四条轨道。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch4-s4': [
    {
      src: '/images/bio/drawn/mt-ch4-s4-aqp-regulation-compare.svg',
      caption:
        '动植物水通道的调控哲学对照：单孔速率约 3×10⁹ 水分子/秒是刻在结构里的常数，两界都靠「调膜上通道数量」调节水导、都以磷酸化为核心旋钮——但动物以 AVP–cAMP–PKA 链分钟级把 AQP2 囊泡插入顶膜并辅以转录慢档（AQP2 Ser256 管膜上数量），植物以 ABA 转录下调 PIP 与去磷酸化、泛素化胞吞快速撤膜（SoPIP2;1 Ser283 管孔开闭）——同一枚磷酸旋钮拧不同螺母；转基因 AQP 调水分利用效率与肿瘤迁移研究一句带过。',
      credit: DRAWN_CREDIT,
    },
  ],
}
