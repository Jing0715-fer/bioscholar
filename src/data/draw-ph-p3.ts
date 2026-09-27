// ============================================================
// 生理学自绘插图挂载 - 批次 P3（由绘图代理 44-e2 编写）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// 覆盖小节：physiology-ch2-s4 / ch3-s1 / ch3-s2 / ch3-s3 / ch3-s4
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP3: Record<string, Illustration[]> = {
  'physiology-ch2-s4': [
    {
      src: '/images/bio/drawn/ph-ch2-s4-saltatory-conduction.svg',
      caption:
        '兴奋传导的两种模式：无髓纤维依赖局部电流把邻近未兴奋区「抬」到阈电位、逐段接力再生，空间常数 λ 限定 C 纤维速度仅 0.5–2 m/s；有髓纤维以髓鞘升高跨膜电阻数十倍、压缩膜电容，兴奋在相隔 1–2 mm 的郎飞结间跳跃传导，Aα 纤维达 70–120 m/s（有髓 v≈6×d μm→m/s）——多发性硬化等脱髓鞘使局部电流漏入结间，表现为传导减慢、频率依赖性阻滞乃至完全中断。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch3-s1': [
    {
      src: '/images/bio/drawn/ph-ch3-s1-gpcr-pathways.svg',
      caption:
        '七次跨膜受体被配体激活后充当 GEF，驱动异三聚体 G 蛋白 α 亚基 GDP-GTP 开关并解离：Gs 升 cAMP 激活 PKA（β 受体），Gi 抑制 AC（M₂/α₂），Gq 经 PLC 水解 PIP₂ 生成 IP₃ 与 DAG 双信使开放钙释放与 PKC；信号终止依赖 α 内在 GTP 酶（RGS 加速）、PDE 清除环核苷酸与 GRK-β-arrestin 脱敏内吞三重刹车——霍乱毒素把 Gsα 锁死在「开」位致米泔水样腹泻，百日咳毒素锁死 Giα 于「关」位致痉挛性咳嗽。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch3-s2': [
    {
      src: '/images/bio/drawn/ph-ch3-s2-kinase-receptors.svg',
      caption:
        '酶联受体与第二信使网络：RTK 二聚化自磷酸化开出 SH2 码头，经 Grb2-SOS-RAS-RAF-MEK-ERK 三级激酶级联把生长信号送入细胞核（RAS 突变见于约三成人类肿瘤）；JAK-STAT 借「SH2 咬住对方磷酸酪氨酸」互锁成二聚体一跳直达 GAS 元件；内皮 eNOS 生成的 NO 自由扩散激活 sGC-cGMP-PKG 使血管舒张（西地那非抑制 PDE5 延长 cGMP）——cAMP、cGMP、IP₃、DAG、Ca²⁺ 五大第二信使以脉冲与振荡频率编码信息。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch3-s3': [
    {
      src: '/images/bio/drawn/ph-ch3-s3-skeletal-ec-coupling.svg',
      caption:
        '骨骼肌兴奋-收缩偶联：动作电位沿 T 管传入三联体，DHPR（L 型通道充当电压感受器）以构象直连拽开 RyR1，终池放钙使胞质 Ca²⁺ 由 10⁻⁷ 跃至 10⁻⁵ mol/L，结合肌钙蛋白 C 引发原肌球蛋白移位、横桥循环开闸（每圈耗 1 ATP，作功冲程划动约 10 nm）；舒张由 SERCA 泵回钙（每 ATP 泵 2 Ca²⁺、占回收 70–90%）完成；长度-张力关系示最适初长 2.0–2.2 μm 处横桥重叠最优、主动张力最大。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch3-s4': [
    {
      src: '/images/bio/drawn/ph-ch3-s4-muscle-comparison.svg',
      caption:
        '三种肌肉的差异化设计：骨骼肌快钠尖峰（1–5 ms）配 DHPR-RyR1 构象偶联与肌钙蛋白开关，可完全强直；心肌平台期（200–300 ms）由 L 型钙内流与 K⁺ 外流相抵形成，有效不应期延伸至舒张早期从根本上杜绝强直，外钙经 L 型通道触发钙致钙释放；平滑肌无肌钙蛋白，经 Ca²⁺-钙调蛋白-MLCK 磷酸化肌球蛋白调节轻链驱动横桥，latch 桥以极低 ATP 消耗维持张力——快、稳、省三种工况。',
      credit: DRAWN_CREDIT,
    },
  ],
}
