// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P12（第 12 章逆境、疾病与演化，4 张）
// 场景源码：scripts/draw/scenes/mt/ch12-s1~s4.ts（46-c12 代理绘制 s1~s3、
// 主控 46-d 补 s4 压轴总结图与登记图注）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP12: Record<string, Illustration[]> = {
  'membrane-transport-ch12-s1': [
    {
      src: '/images/bio/drawn/mt-ch12-s1-transport-diseases.svg',
      caption:
        '动物转运病：囊性纤维化北欧裔携带率约 1/25、发病率约 1/2500，ΔF508 约占等位基因 70%、汗液 Cl⁻ >60 mmol/L 为诊断线——突变分类用药时代：G551D 门控缺陷用 ivacaftor、ΔF508 折叠缺陷用三联 Trikafta；长 QT 三型 KCNQ1/hERG/SCN5A（西沙必利因阻断 hERG 撤市）；Bartter 五型与 Gitelman 即「天然利尿剂表型」；胱氨酸尿、肾性尿崩、Menkes/Wilson、GLUT1 缺陷与 Hartnup 各有转运体归宿。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch12-s2': [
    {
      src: '/images/bio/drawn/mt-ch12-s2-plant-stress-transport.svg',
      caption:
        '植物逆境转运：盐胁迫 SOS 全链条——Na⁺ 经 NSCC 内流触发胞质钙波、SOS3/CBL4-SOS2/CIPK24 级联磷酸化 SOS1 质膜外排；NHX1 液泡隔离「以盐代钾」、HKT1;1 木质部回收护地上部（水稻 SKC1＝OsHKT1;5 耐盐 QTL）；干旱走 PYR-PP2C-OST1-SLAC1 关闭气孔并下调 PIP；低磷以 PHR1-miR399-PHO2-PHT1 调兵；AtNHX1 转基因番茄可耐 200 mmol/L NaCl——逆境感知、转运响应与农艺性状汇于一张表。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch12-s3': [
    {
      src: '/images/bio/drawn/mt-ch12-s3-biotic-interactions.svg',
      caption:
        '生物互作中的转运蛋白：结瘤因子经 LysM 受体识别、CNGC15 参与核周钙振荡、DMI1/2/3 共共生通路解码；类菌体周膜转运网络（苹果酸供给、氨出口、Fe/S/Mo 进口）与豆血红蛋白把自由氧缓冲在纳摩尔级；菌根以 PHT1 输入磷、RAM2-STR 输出脂质（脂肪酸交换新学说）；ZAR1 五聚体抗病小体（2019 年结构解析）组装成钙孔触发超敏反应；Bt Cry 成孔与昆虫 para 通道 KDR 突变互为攻防——离子通道是杀虫剂最大靶标族。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch12-s4': [
    {
      src: '/images/bio/drawn/mt-ch12-s4-evolution-summary.svg',
      caption:
        '全书总结：六次关键抉择塑造两界版图——LUCA 的 F/V 旋转马达分化、ABC 与 MFS 广布、P 型泵两次主引擎选择（动物 Na⁺/K⁺ 对植物 H⁺）、后生动物 Nav 从 Cav 祖先进化伴随神经起源、绿色植物 γ 全基因组三倍化（约 1.2–1.5 亿年前）驱动 ABC 约 130/NPF 53/CNGC 20/GLR 20 大扩编；异同四句诀——同超家族不同成员数、同机制不同驱动离子、同家族不同亚细胞定位、同屏障不同化学战场；十六行总结大表收拢通道、载体、泵三大家族在动物与植物中的代表与共有性。',
      credit: DRAWN_CREDIT,
    },
  ],
}
