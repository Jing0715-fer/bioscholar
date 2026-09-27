// ============================================================
// 生理学自绘插图挂载 - 批次 P5（由绘图代理 44-e3 编写）
// 生成管线：scripts/draw/scenes/ph/ → bun scripts/draw/gen.ts ph
// 覆盖： physiology-ch5-s3 / ch5-s4 / ch6-s1 / ch6-s2 / ch6-s3
// ============================================================
import type { Illustration } from '@/lib/types'

const DRAWN_CREDIT = '依据教材参数自绘矢量示意图（代码绘制，非 AI 生成）'

export const drawPhP5: Record<string, Illustration[]> = {
  'physiology-ch5-s3': [
    {
      src: '/images/bio/drawn/ph-ch5-s3-cortical-motor.svg',
      caption:
        '大脑皮层与随意运动：初级运动皮层（M1）躯体定位呈倒置「运动矮人图」，手与唇的代表区按精细控制分辨率显著放大而非按肌肉体积分配；辅助运动区（SMA）司内部引导的运动计划，其准备电位早于主观「想动」觉察数百毫秒；皮层脊髓束约 75–90% 纤维经延髓锥体交叉入对侧外侧索、控制肢体远端精细运动，前束不交叉、司躯干近端与姿势；下表对比上/下运动神经元综合征（痉挛 vs 弛缓、Babinski 征、肌萎缩）。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch5-s4': [
    {
      src: '/images/bio/drawn/ph-ch5-s4-autonomic-sleep.svg',
      caption:
        '自主神经与睡眠：交感起自胸腰段 T1–L2、节前短节后长（NE 作用于 α/β 受体，汗腺为胆碱能例外），副交感起自颅骶段、节前长节后短（ACh 作用于 M 受体）；效应器官受体表列举心脏、支气管、瞳孔、胃肠等的代表效应。睡眠架构图显示约 90 分钟为一周期、一夜 4–6 个周期经 N1-N2-N3-REM 循环，附各期脑电特征（α/θ/纺锤波+K 复合波/δ/锯齿波）与 REM 期肌张力失弛缓的注记。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch6-s1': [
    {
      src: '/images/bio/drawn/ph-ch6-s1-plasma-composition.svg',
      caption:
        '血液组成与血浆：抗凝全血离心分三层——淡黄色血浆约 55%、白膜层（白细胞与血小板）不足 1%、红细胞约 45%，血细胞比容男 40–50%、女 37–48%；血浆含水 90–92%、蛋白 6–8 g/dL，白蛋白贡献 75–80% 胶体渗透压并担任载体，球蛋白司免疫与转运，纤维蛋白原备凝血之用（A/G 约 1.5–2.5）。晶体渗透压约 300 mOsm 因自由通透两侧抵消，胶体渗透压约 25 mmHg 经 Starling 力（动脉端滤过、静脉端重吸收、淋巴回收余额）决定血管内外水平衡。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch6-s2': [
    {
      src: '/images/bio/drawn/ph-ch6-s2-blood-cells.svg',
      caption:
        '血细胞生理：红细胞为直径 7–8 μm 的双凹圆盘，表面积/体积比较球形高 20–30%、扩散距离处处不超过 1 μm，具可变形性（挤过 3 μm 毛细血管）、寿命约 120 天，2,3-DPG 支路降低血红蛋白氧亲和力以利组织释氧；白细胞分类以中性粒 50–70%、淋巴 20–40%、单核 3–8%、嗜酸 0.5–5%、嗜碱 0–1% 为参考区间；血小板（100–300×10⁹/L，寿命 7–10 天）以 GPIb-vWF 粘附、GPIIb/IIIa-纤维蛋白原聚集；EPO 经肾间质细胞 HIF-2α 感受缺氧、负反馈调节红系生成。',
      credit: DRAWN_CREDIT,
    },
  ],
  'physiology-ch6-s3': [
    {
      src: '/images/bio/drawn/ph-ch6-s3-hematopoiesis-iron.svg',
      caption:
        '造血与铁代谢：造血干细胞（CD34⁺）兼具自我更新与多向分化，经 EPO、G/GM/M-CSF、TPO 等集落刺激因子分别定向红系、粒单系、巨核系与淋巴系；铁代谢闭环为十二指肠 DMT1 吸收（维 C 促进、植酸与单宁抑制）→血浆转铁蛋白（转运铁仅 3–4 mg、日吞吐约 20 mg）→骨髓造血→衰老红细胞经巨噬细胞回收约 90% 再利用，贮存于铁蛋白与含铁血黄素；肝合成的 hepcidin 结合 ferroportin 促其内吞降解、关闭唯一铁外排门，为铁稳态总开关；人体每日仅被动丢失约 1 mg。',
      credit: DRAWN_CREDIT,
    },
  ],
}
