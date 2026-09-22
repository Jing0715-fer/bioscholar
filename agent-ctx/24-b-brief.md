# Task 24-b 任务简报：自绘 SVG 学科封面替换 AI 封面

你是 BioScholar 的封面设计代理（cover-designer）。项目根目录 /home/z/my-project。
背景：项目已完成教材插图 100% 去 AI 化，但 4 张学科封面与 1 张仪表盘主视觉仍是早期 AI 生成图（public/images/bio/covers/cover-*.png、hero-bioscience.png）。本次用**手写 SVG 矢量封面**替换它们——代码绘制、学术编辑风格、与全站设计语言一致。

## 开工前置
1. 读 /home/z/my-project/src/app/globals.css 前 80 行，了解站内学术编辑风设计 token（bio-paper、bio-eyebrow、bio-rule、serif 字体栈）。
2. 读 /home/z/my-project/src/components/bio/subject-theme.ts 了解每个学科的配色（amber/violet/rose/cyan/emerald 四组 Tailwind 色系）。
3. 读 /home/z/my-project/public/images/bio/drawn/ 下任一 SVG 的头部（如 optical-tweezers.svg 前 40 行），学习既有自绘 SVG 的字体声明写法：`font-family="Noto Serif SC, LXGW WenKai, Georgia, serif"`（浏览器端渲染，需优雅回退）。

## 产出文件（6 个全新 SVG，放在 public/images/bio/covers/）
1. cover-biochemistry.svg —— 主色 amber（#d97706 系）
2. cover-molecular-biology.svg —— 主色 violet（#7c3aed 系）
3. cover-cell-biology.svg —— 主色 rose（#e11d48 系）
4. cover-biophysics.svg —— 主色 cyan（#0891b2 系）
5. cover-microbiology.svg —— 主色 emerald（#059669 系）
6. hero-bioscience.svg —— 象牙纸底 + 多学科元素淡彩拼贴（中性，主视觉横幅用）

**不得修改任何既有文件**（主控稍后统一切换引用路径并删除旧 PNG）。

## 设计规范
- 尺寸：封面 viewBox="0 0 800 500"（比例 1.6，匹配卡片位 h-20 w-32 / sm:h-24 sm:w-40 的 object-cover 裁切，重要内容居中留 8% 安全边距）；hero viewBox="0 0 1200 1000"（重要内容居中，四边可被裁）。
- 学术编辑风（与全站一致）：
  - 背景：象牙纸色 `#faf8f4`（封面）/ `#f5f2ec`（hero），可叠加极淡的纸纹网格或细点（opacity ≤0.04）
  - 排版：顶部小号字距拉开的英文 eyebrow（如 "BIOCHEMISTRY · 101 CORE CURRICULUM"），中部大号衬线中文书名（如 生物化学），下方细分隔线（bio-rule 风格：粗 2px + 细 1px 双线或单细线），再下一行小字副题（如 「王镜岩体系 · 12 章 53 节」——各学科真实章节数见下）
  - 章节数据（副题用）：生物化学 12 章 53 节 / 分子生物学 12 章 57 节 / 细胞生物学 12 章 53 节 / 生物物理学 10 章 40 节 / 微生物学 12 章 46 节
  - 色彩：主色只用于**科学元素线稿与细 accents**（线条、小色块、描边），文字主体用深墨色 `#1c1917`；学科色饱和度克制（用 600–700 档）
  - 字体：`font-family="Noto Serif SC, LXGW WenKai, Georgia, serif"`；中文书名 font-weight 700，字号 ≥64px（800 宽画布）；全部 text 要有明确 text-anchor 与居中坐标
- 各学科科学元素（纯矢量线稿，学术正确性优先，宁简勿错）：
  - 生物化学：苯环/吡喃糖环（六元环 + 取代基短线）、锯齿肽链、三角烧瓶轮廓、化学键点阵
  - 分子生物学：DNA 双螺旋（两条正弦带 + 横向碱基对短线，10–12 对）、mRNA 单链、核糖体小体
  - 细胞生物学：细胞剖面大圆（核 + 核仁、线粒体椭圆带嵴、内质网波浪带、高尔基堆叠弧）
  - 生物物理学：蛋白质卡通螺旋-线圈-螺旋、力矢量箭头 F、正弦波、光镊焦点示意
  - 微生物学：球菌串/簇、杆菌（含鞭毛曲线）、螺旋菌 S 形、琼脂平板圆形菌落点阵
  - hero：DNA 螺旋 + 细胞圆 + 分子环 + 杆菌轮廓的极淡多元素拼贴（opacity 0.5–0.8 的细线稿，象牙底上保持「干净的书卷气」），右下或中部可放衬线大字「生命科学研习堂」与小字「教育部 101 计划核心课程 · 五大基础学科」
- 工程要求：纯 SVG 元素（rect/circle/path/line/text/g），无嵌入位图、无外部依赖、无 script；每文件顶部 XML 注释标注「依据学科主题自绘矢量封面（代码绘制，非 AI 生成）」；文件 ≤15KB/张
- 文字不得溢出画布、不得重叠（自检每个 text 的 x/y 与字号）

## 校验
- 写 /tmp/render-check.ts：用 sharp 把 6 张 SVG 栅格化为 PNG（`sharp(svgBuffer).png().toFile()`），再用 VLM（参照 src/app/api/assistant/figure-explain/route.ts 的 createVision 用法，z-ai-web-dev-sdk，model glm-5v-turbo）逐张审查：①文字完整无截断无乱码；②科学元素正确（如碱基对为双螺旋横向短线、线粒体有嵴）；③构图居中协调；④无重叠。不通过则修改 SVG 重渲染重审，直至 6 张全过。
- 栅格化时若文字丢失：检查 font-family 是否用了系统未装字体（系统已装 Noto Serif SC / LXGW WenKai）。

## 收工
bash cat >> /home/z/my-project/worklog.md 追加记录（Task ID: 24-b、Agent: cover-designer、Task: 自绘 SVG 封面替换 AI 封面、Work Log、Stage Summary），汇报：6 个文件清单、每张 VLM 审查结论、设计取舍。
