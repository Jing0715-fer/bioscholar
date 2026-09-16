# Task 24-a 任务简报：微生物学教材插图搜集（Wikimedia Commons 真实图，严禁 AI 生成）

你是 BioScholar 的插图搜集代理（micro-images）。项目根目录 /home/z/my-project。
任务：为新增的微生物学学科（12 章 46 节，src/data/subjects/micro/ch1.ts…ch12.ts）从 Wikimedia Commons 搜集 **12–16 张真实科学配图**，经 VLM 科学审校后挂载数据。

## 开工前置
1. 读 /home/z/my-project/worklog.md 中 Task 21-a/21-b/21-c 三个小节（rg -n "Task ID: 21" 定位），学习已验证的 Commons 搜图管线（API 检索、许可证白名单、下载规范、429 退避、VLM 审校）。
2. 读 src/data/illustrations.ts 的头部注释与前 120 行，学习插图数据格式（Illustration 类型：src/caption/credit）与图注写作风格。
3. 读 src/lib/types.ts 中 Illustration 类型。

## 严禁事项（红线）
- **严禁任何 AI 生成图片**（本项目上一阶段刚完成 100% 去 AI 化）。
- 只下载 Wikimedia Commons 上许可证为 CC0 / Public domain / CC BY / CC BY-SA 的文件。
- **不得修改** src/data/illustrations.ts、biology.ts、index.ts 及 subjects/ 下任何文件。你只产出新文件。

## 目标小节与主题（按优先级，搜到几张算几张，至少 12 张；每个主题最多试 3 个候选）
1. microbiology-ch2-s1：原核细胞整体结构（搜索 average prokaryote cell / bacterial cell structure；LadyofHats 的 Average prokaryote cell-en.svg 是已知经典候选，Mariana Ruiz Villarreal, PD）
2. microbiology-ch2-s2：革兰氏阳性/阴性细胞壁对比或革兰染色显微图（gram positive cell wall / gram negative cell wall / gram stain）
3. microbiology-ch2-s4：细菌芽孢结构（endospore structure / bacterial spore）
4. microbiology-ch2-s5：细菌鞭毛结构（bacterial flagellum / flagellum base）
5. microbiology-ch3-s1：酵母菌显微照片（Saccharomyces cerevisiae microscopy / budding yeast）
6. microbiology-ch3-s2：青霉分生孢子头显微照片（Penicillium conidiophore）
7. microbiology-ch3-s3：根霉孢子囊或曲霉分生孢子头（Rhizopus sporangium / Aspergillus conidial head）
8. microbiology-ch4-s1：病毒形态结构/对称类型（virus structure / virion types / bacteriophage T4 structure）
9. microbiology-ch4-s3：λ 噬菌体溶原/裂解循环（lambda phage lytic lysogenic / lysogenic cycle）
10. microbiology-ch4-s4：流感病毒结构（influenza virus structure / influenza diagram）
11. microbiology-ch7-s1：细菌生长曲线（bacterial growth curve）
12. microbiology-ch8-s2：细菌接合（bacterial conjugation）
13. microbiology-ch9-s4：氮循环（nitrogen cycle）
14. microbiology-ch10-s2：LPS/内毒素结构或外毒素机制图（lipopolysaccharide structure）
15. microbiology-ch10-s3：补体系统或吞噬过程（complement system / phagocytosis）
16. microbiology-ch11-s2：三域生命树（tree of life three domain / phylogenetic tree Woese）
17. microbiology-ch12-s4：CRISPR-Cas9 机制图（CRISPR Cas9 mechanism）

## 搜图管线（已在项目验证过，严格遵循）
- 检索：`curl 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srsearch={关键词}&format=json&srlimit=20'`（带 UA：`--user-agent "BioScholar/1.0 (educational project)"`）
- 详情：imageinfo `iiprop=url|size|mime|extmetadata` 核对许可证（License Short Name）与作者（Artist，去 HTML 标签）
- 下载：SVG 取 1920px PNG 缩略图（`https://thumb.wikimedia.org/...` 或 API thumburl；宽度白名单 960/1280/1920）；PNG/JPEG 直取原图；**文件名小写 kebab-case**（如 gram-stain-comparison.png）
- 遇 429/限流：等待 60 秒重试；请求间隔 3–5 秒
- 每个文件下载后用 `file` 命令校验为有效图片（非 HTML 错误页）且 <5MB
- 与 public/images/bio/commons/ 目录既有文件不得重名（先 LS 一下）

## VLM 科学审校（每图必做）
写一个 bun 脚本 /tmp/vlm-review.ts（参考 src/app/api/assistant/figure-explain/route.ts 第 112–140 行的调用方式）：
```ts
import ZAI from 'z-ai-web-dev-sdk'
import { readFile } from 'node:fs/promises'
// 读图片 → base64 dataUrl → zai.chat.completions.createVision({ model: 'glm-5v-turbo', messages: [{ role: 'user', content: [{ type: 'text', text: '审校清单…' }, { type: 'image_url', image_url: { url: dataUrl } }] }], thinking: { type: 'disabled' } })
```
每张图用中文定制审校清单（图中标注是否科学正确、有无乱码/错别字、结构是否完整），结论为「通过/不通过」。不通过的图淘汰换下一候选。审校结论记入 manifest。

## 产出文件（三件）
1. 图片本体：public/images/bio/commons/{kebab-case}.png（12–16 张）
2. 数据文件：/home/z/my-project/src/data/micro-illustrations.ts
```ts
import type { Illustration } from '@/lib/types'

/** 微生物学教材插图（Wikimedia Commons 真实图，VLM 审校通过） */
export const microIllustrations: Record<string, Illustration[]> = {
  'microbiology-ch2-s1': [
    {
      src: '/images/bio/commons/average-prokaryote-cell.png',
      caption: '（120–220 字学术中文图注：描述所绘结构、关键标注、与正文知识点的呼应、必要数值）',
      credit: '图片来源：Wikimedia Commons（作者，许可证）',
    },
  ],
  // ……
}
```
图注风格参照 src/data/illustrations.ts 既有条目（学术、具体、含数值细节）。挂载小节的图注必须与该节正文内容呼应（写图注前先读对应小节正文，micro/chN.ts）。
3. 清单：public/images/bio/commons/manifest-24a.json（数组，每条：topic/sectionId/commonsFile/author/license/sourceUrl/verified）

## 校验
- 写完后运行完整性自检：所有 src 路径的文件存在且为有效图片、全部许可证在白名单、manifest 与数据文件一致（写 /tmp/check-24a.ts 执行）。
- `bunx tsc -p tsconfig.json --noEmit 2>&1 | grep micro-illustrations || echo TSC-CLEAN`

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 24-a、Agent: micro-images、Task: 微生物学 Commons 插图搜集、Work Log、Stage Summary），汇报：每张图的 Commons 文件名/作者/许可证/挂载小节/VLM 结论、淘汰记录、最终张数。
