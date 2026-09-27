// ============================================================
// 生理学自绘插图挂载 - 批次 P8（由绘图代理 44-e 系列编写）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP8: Record<string, Illustration[]> = {
  'physiology-ch11-s3': [
    {
      src: '/images/bio/drawn/ph-ch11-s3-countercurrent-adh.svg',
      caption:
        '肾髓质渗透梯度与逆流倍增：襻升支粗段 NKCC2 单次「抽盐」形成约 200 mOsm 单效应，经发夹几何沿髓质纵深级联放大，间质渗透压自皮质 300 增至内髓乳头约 1200 mOsm/kg；直血管以发夹与极慢血流被动逆流交换而守护梯度，尿素经集合管 UT-A 再循环贡献内髓梯度近半；ADH 经 V₂-cAMP-AQP2 链把含水通道囊泡插入集合管顶膜，决定终尿 1200 与 50 mOsm/kg 两极——尿崩症分中枢性、肾性与精祏烦渴三类。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch11-s4': [
    {
      src: '/images/bio/drawn/ph-ch11-s4-acid-base-k.svg',
      caption:
        '酸碱与钾平衡：缓冲（秒级）、呼吸（分钟级）、肾脏（小时至天级）三道防线接力维护 pH 7.35–7.45，HH 方程分母归呼吸、分子归肾脏；近端小管经 NHE3-碳酸酐酶绕路回收滤过 HCO₃⁻ 的 80–85%，净酸排泄＝可滴定酸＋NH₄⁺−HCO₃⁻（可滴定酸受磷酸盐封顶约占 1/3，铵径约占 2/3 且慢性酸中毒可数倍上调）；四种酸碱紊乱代偿方向明确、Winter 公式校验，阴离子间隙将代酸分为新酸蓄积与丢碱两界；血钾 98% 居细胞内，胰岛素与 β₂ 促入胞、酸中毒促出胞，远端泌钾为最终出口。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch12-s1': [
    {
      src: '/images/bio/drawn/ph-ch12-s1-pituitary-axes.svg',
      caption:
        '激素总论与垂体：含氮激素亲水、走膜受体快线（秒-分钟速效速撤），类固醇脂溶、走胞内核受体基因效应线（小时-天），胺类「两栖」；下丘脑经垂体门脉系统的双重毛细血管网把释放/抑制激素高浓度直送腺垂体，神经垂体则是视上核与室旁核大细胞神经元轴突延伸的释放码头（ADH/催产素轴浆运输）；TRH-TSH、GnRH-LH/FSH、CRH-ACTH、GHRH·SST-GH 与多巴胺-PRL 五路对应，长环、短环、超短环负反馈层层设卡，辅以脉冲频率编码与昼夜节律。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch12-s2': [
    {
      src: '/images/bio/drawn/ph-ch12-s2-thyroid-adrenal.svg',
      caption:
        '甲状腺与肾上腺：滤泡六步合成——NIS 摄碘浓集 20–40 倍、pendrin 入腔、TPO+H₂O₂ 活化碘化偶联（硫脲类靶点）、胞吞水解释放；分泌 T₄ 约 93%、T₃ 约 7%，外周 5′-脱碘把 T₄ 转为活性约 5 倍的 T₃（转换率本身即调节位点），并上调 BMR、决定脑发育关键期（缺乏致克汀病）、允许儿茶酚胺效应放大；肾上腺三带分产醛固酮（血管紧张素 II/高钾驱动）、皮质醇（ACTH）与 DHEA；皮质醇晨 8 时峰可达夜间 2–3 倍，以允许作用维持血管反应性，应激由交感-髓质轴（秒级）与 HPA 轴（分钟-小时级）双轴接力。',
      credit: DRAWN_CREDIT,
    },
  ],
}
