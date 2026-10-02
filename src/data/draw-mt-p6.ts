// ============================================================
// 膜蛋白与物质转运自绘插图挂载 - 批次 P6（第 6 章 P 型 ATPase，4 张）
// 场景源码：scripts/draw/scenes/mt/ch6-s1~s4.ts（46-c6 代理绘制，
// 主控 46-d 补登记与图注）
// 生成管线：scripts/draw/scenes/mt/ → bun scripts/draw/gen.ts mt
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawMtP6: Record<string, Illustration[]> = {
  'membrane-transport-ch6-s1': [
    {
      src: '/images/bio/drawn/mt-ch6-s1-ptype-cycle.svg',
      caption:
        'P 型 ATPase 总论：一个被磷酸化的天冬氨酸定义「P 型」——Post-Albers 循环 E1→E1~P→E2-P→E2 四态闭环，自磷酸化中间体是全族命名与分类的锚点；共同拓扑为 10 TMS 加 A/N/P 三个胞质域；P1–P5 五大亚类从重金属（CPx 基序）、钙（SERCA/PMCA）、钠钾与胃酸（P2C）、植物真菌质子泵（P3A）到磷脂翻转酶（P4）——换业务不换账房；乌本苷、毒胡萝卜素、钒酸根、糠菌素四件工具药各守一个靶位，SERCA1a 于 2000 年成为首个原子级解析的离子泵。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch6-s2': [
    {
      src: '/images/bio/drawn/mt-ch6-s2-animal-p-pumps.svg',
      caption:
        '动物的 P 型泵全景：Na⁺/K⁺-ATPase 以 αβ（+FXYD 磷调节蛋白）组装，每水解一分子 ATP 泵出 3 Na⁺、泵入 2 K⁺（净电荷 −1、生电性），静息全身约 25% 的 ATP 供钠泵、肾高达 70%；地高辛三级级联「抑泵→胞内 Na⁺↑→NCX 排钙减弱→Ca²⁺↑→正性肌力」沿用两百年；SERCA2a-受磷蛋白调控心肌舒张、PMCA-CaM 高亲和细调、胃 H⁺/K⁺ 泵为奥美拉唑靶点、P4 翻转酶维持膜脂不对称、ATP7A/B 铜泵连接 Menkes 与 Wilson 病。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch6-s3': [
    {
      src: '/images/bio/drawn/mt-ch6-s3-plant-h-atpase.svg',
      caption:
        '植物 P3A H⁺-ATPase 是绿色界的电化学总引擎：拟南芥 11 个 AHA 基因（AHA1/2/3 为主力），约 100 kDa 单亚基、10 TMS；C 端 R 域自抑制，Thr947 被磷酸化后 14-3-3 二聚体桥连即全激活——糠菌素锁死该复合体造成 1979 年意大利桃园病害，是病原劫持植物主泵的经典案例；一泵两得：PMF＝ΔpH（细胞质约 7.2 vs 质外体约 5.5）＋Δψ（−120~−250 mV 超极化），养分吸收、蓝光气孔开放、酸生长（壁 pH 约 4.5 激活扩张蛋白）与韧皮部装载四大岗位共用这台电池。',
      credit: DRAWN_CREDIT,
    },
  ],
  'membrane-transport-ch6-s4': [
    {
      src: '/images/bio/drawn/mt-ch6-s4-primary-engine-compare.svg',
      caption:
        '动植物主引擎对照：同为 P 型泵、同 10 TMS、同生电性——动物以 3 Na⁺:2 K⁺/ATP 建起 Na⁺ 梯度（血浆 145 mM 对细胞内约 12 mM）与约 −90 mV 膜电位，乌本苷可抑；植物以 1 H⁺/ATP 铸出 ΔpH 约 1.7 与 −120~−250 mV 的 PMF，糠菌素可锁。动物继承海水丰钠（内环境 Na⁺ 现成、毒性低可作信号语言），植物选代谢易得的 H⁺（土壤 Na⁺ 稀缺且毒、一泵三得 pH+PMF+酸生长）；下游后果分别是 Na⁺ 驱动的 SGLT/NHE/NCX 与 Nav/Cav 电信号、H⁺ 驱动的 SUC/NRT/AMT 与 Cl⁻/K⁺ 门控加钙波——驱动离子的选择是环境化学的镜像。',
      credit: DRAWN_CREDIT,
    },
  ],
}
