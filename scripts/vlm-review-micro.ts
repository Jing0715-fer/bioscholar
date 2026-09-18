/** 微生物学插图 VLM 科学审校（逐图定制清单） */
import ZAI from 'z-ai-web-dev-sdk'
import { readFile } from 'node:fs/promises'

const CHECKS: Array<{ file: string; section: string; list: string }> = [
  { file: 'average-prokaryote-cell.png', section: 'ch2-s1 原核细胞总览', list: '1) 是否为原核(细菌)细胞结构示意图，含细胞壁/细胞膜/细胞质/核糖体/拟核等标注；2) 是否没有细胞核膜与细胞器(正确体现原核特征)；3) 标注文字是否清晰无乱码错字' },
  { file: 'gram-cell-wall-comparison.png', section: 'ch2-s2 细胞壁与革兰氏反应', list: '1) 是否对比革兰氏阳性与阴性细胞壁；2) G⁺ 是否为厚肽聚糖层、G⁻ 是否为薄肽聚糖+外膜(含LPS)；3) 各分层标注(Plasma Membrane/Peptidoglycan/Outer membrane等)是否科学正确；4) 有无乱码' },
  { file: 'flagellum-base-diagram.png', section: 'ch2-s5 鞭毛结构', list: '1) 是否展示鞭毛基体结构(基体MS环/C环、钩形鞘、丝状体)与细胞壁/膜的关系；2) 标注是否清晰；3) 有无科学错误' },
  { file: 'saccharomyces-cerevisiae-sem.jpg', section: 'ch3-s1 酵母菌', list: '1) 是否为酵母细胞SEM显微照片，可见出芽或芽痕；2) 是否有比例尺；3) 细胞形态是否典型卵圆' },
  { file: 'penicillium-conidiophore.jpg', section: 'ch3-s2 霉菌菌丝', list: '1) 是否为青霉显微图像(LPCB棉蓝染色)，可见帚状分生孢子梗结构(梗基/小梗/分生孢子链)；2) 图像是否清晰' },
  { file: 'rhizopus-sporangium.jpg', section: 'ch3-s3 真菌孢子', list: '1) 是否为根霉孢子囊显微照片，可见孢子囊/囊轴/孢子；2) 是否清晰' },
  { file: 'bacteriophage-t4-structure.png', section: 'ch4-s1 病毒形态', list: '1) 是否为T4噬菌体结构图(二十面体头部/尾部鞘/尾丝/基板)；2) 各部分标注是否正确；3) 有无乱码' },
  { file: 'phage-lytic-lysogenic-cycles.png', section: 'ch4-s3 溶原性', list: '1) 是否同时展示溶原循环(整合为前噬菌体)与裂解循环(复制-装配-裂解)；2) 流程箭头逻辑是否正确；3) 标注是否清晰' },
  { file: 'influenza-virus-structure.png', section: 'ch4-s4 动物病毒', list: '1) 是否为流感病毒结构图，含包膜、血凝素HA与神经氨酸NA刺突、基质蛋白M1、核糖核蛋白RNP(分段RNA)；2) 标注是否正确；3) 有无乱码' },
  { file: 'bacterial-growth-curve.png', section: 'ch7-s1 生长曲线', list: '1) 是否为细菌生长曲线(对数纵坐标-时间横坐标)；2) 四期(Lag/Exponential/Stationary/Death)标注是否齐全且顺序正确；3) 曲线形状是否科学' },
  { file: 'bacterial-conjugation.png', section: 'ch8-s2 接合', list: '1) 是否展示细菌接合过程(供体F质粒/性菌毛/DNA转移/受体变新供体)；2) 各步骤标注是否正确；3) 有无科学错误' },
  { file: 'nitrogen-cycle.png', section: 'ch9-s4 氮循环', list: '1) 是否为氮循环图，含大气N₂/固氮/氨化/硝化/反硝化/同化各环节；2) 各环节标注与箭头方向是否正确；3) 有无乱码' },
  { file: 'lps-structure.png', section: 'ch10-s2 内毒素', list: '1) 是否为LPS分子结构图(O抗原/核心多糖/脂质A三区域)；2) 化学结构示意是否合理；3) 标注是否清晰' },
  { file: 'complement-pathway.png', section: 'ch10-s3 补体', list: '1) 是否为补体激活通路图(经典/凝集素/旁路三途径汇聚C3/C5转化酶至攻膜复合物)；2) 补体成分编号是否正确合理；3) 有无乱码' },
  { file: 'three-domain-tree.png', section: 'ch11-s2 三域学说', list: '1) 是否为系统发育树且分为Bacteria/Archaea/Eukarya三域；2) 分支布局是否合理；3) 有无乱码' },
  { file: 'crispr-cas9-mechanism.png', section: 'ch12-s4 CRISPR', list: '1) 是否为CRISPR-Cas9机制图(Cas9蛋白/向导RNA/PAM/切割位点)；2) 是否标注RuvC与HNH结构域；3) 有无科学错误' },
]

async function main() {
  const zai = await ZAI.create()
  const results: Array<{ file: string; pass: boolean; note: string }> = []
  for (const c of CHECKS) {
    const buf = await readFile(`public/images/bio/commons/${c.file}`)
    const mime = c.file.endsWith('.jpg') ? 'image/jpeg' : 'image/png'
    const dataUrl = `data:${mime};base64,${buf.toString('base64')}`
    try {
      const completion = await zai.chat.completions.createVision({
        model: 'glm-5v-turbo',
        messages: [{
          role: 'user',
          content: [
            { type: 'text' as const, text: `你是微生物学教授，请对这张教学配图做科学审校（将用于中国大学微生物学教材 ${c.section} 小节）。逐项回答：${c.list}\n最后给出结论：通过 或 不通过（附理由）。` },
            { type: 'image_url' as const, image_url: { url: dataUrl } },
          ],
        }],
        thinking: { type: 'disabled' },
      })
      const content = completion.choices[0]?.message?.content ?? ''
      const pass = /通过/.test(content) && !/不通过/.test(content)
      console.log(`\n===== ${c.file} (${c.section}) => ${pass ? '✓ 通过' : '✗ 不通过'} =====`)
      console.log(content.slice(0, 500))
      results.push({ file: c.file, pass, note: content.slice(0, 300) })
    } catch (e) {
      console.log(`===== ${c.file} => VLM 失败: ${(e as Error).message}`)
      results.push({ file: c.file, pass: false, note: 'VLM error' })
    }
  }
  const { writeFileSync } = await import('node:fs')
  writeFileSync('/tmp/vlm-review-micro.json', JSON.stringify(results, null, 2))
  console.log('\n===== 汇总 =====')
  console.log(results.map(r => `${r.file}: ${r.pass ? 'PASS' : 'FAIL'}`).join('\n'))
}
main()
