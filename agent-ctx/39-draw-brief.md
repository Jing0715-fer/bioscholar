# Task 39 —— Round 4 自绘插图批量扩充任务简报（v2）

## ⛔ 绝对禁令（违反即任务失败，最高优先级）

1. **禁止执行任何 git 命令**（git add/commit/push/reset/checkout/clean/stash/reflog/gc 全部禁止）。git 操作只由主控执行。
2. **禁止修改/删除共享文件**：`scripts/draw/lib.ts`、`scripts/draw/gen.ts`、`scripts/draw/digest.ts`、`scripts/check-ill.ts`、`scripts/coverage.ts`、`src/data/illustrations.ts`、`src/data/subjects/` 下任何文件、`src/components/` 下任何文件。
3. **禁止删除任何已有文件**（包括别人学科的场景文件与 SVG）。
4. **禁止重写/清空 worklog.md**——只允许在文件末尾追加。
5. 只写你自己的目录（`scripts/draw/scenes/<abbr>/`）与挂载文件（`src/data/draw-<abbr>-r4.ts`）。

背景：此前一个违规代理执行了 git reset 导致两天的成果被毁，靠远端备份才恢复。上述禁令是血的教训。

## 总目标

为教材尚未配图的小节补充**代码绘制矢量示意图**（依据教材参数，非 AI 生成），使每小节至少 1 张配图。

## 工作流程（严格按序）

### 第 1 步：读小节摘要（科学依据）

```bash
cd /home/z/my-project
bun scripts/draw/digest.ts <sectionId> [<sectionId> ...]
```

输出该节 keyPoints / terms / H2 结构 / 表格标题 / 定量语句。**图的内容忠实于这些要点**，数字（Km、残基数、百分比、年份、分子量）必须照抄，不得杜撰。

### 第 2 步：写场景文件

模板（`scene()` 直接返回 SVG 字符串）：

```ts
// scripts/draw/scenes/bc/ch1-s3.ts
import { scene, C, B } from '../../lib'

const draw = (b: B) => {
  b.panel(30, 132, 660, 400, { title: '一、XXX' })
  b.tag(220, 172, '关键概念', { fill: C.dnaL, stroke: C.dna, size: 13, weight: 700, tfill: C.dnaD, pad: 9 })
  b.arrow(100, 300, 400, 300, { stroke: C.dna, sw: 2.4, marker: 'dna' })
  // ... 见下方 API 速查
}

export default scene({
  title: '图主标题（名词性，含核心对比）',
  subtitle: '副标题（一句话概括机制/数值）',
  draw,
})
```

画布默认 **1400×1000**，标题区占顶部 122px（head 可调）——**正文从 y=132 起**，底部留 20px。

### 第 3 步：登记

- mb 学科分两个表：ch1–6 → `scenes/mb/index.ts`，ch7–12 → `scenes/mb/index-2.ts`（已存在，勿动 ch7–12 既有条目）
- 其他学科：`scenes/<abbr>/index.ts`（default 导出 `Record<string, string>`）

```ts
import ch1s3 from './ch1-s3'
export default { 'bc-ch1-s3-polysaccharides': ch1s3 } as Record<string, string>
```

**slug 规则**：`<abbr>-ch<章>-s<节>-<英文短语义>`（小写连字符）。

### 第 4 步：生成

```bash
bun scripts/draw/gen.ts <abbr>
```

每张应输出 `✓ xxx.svg (x KB)`。

### 第 5 步：挂载

```ts
// src/data/draw-<abbr>-r4.ts（在既有导出对象内追加）
'biochemistry-ch1-s3': [
  {
    src: '/images/bio/drawn/bc-ch1-s3-polysaccharides.svg',
    caption: '……（120–260 汉字：描述图中实际画出的结构/流程 + 深层机理与关键数值）',
    credit: DRAWN_CREDIT,   // 文件顶部已定义
  },
],
```

图注要求：句式参照 `src/data/draw-mb-r4.ts` 里已有 18 条（「XXX 的机制：……——……」结构）；不写「如图所示」；含具体数字与机理对照。

### 第 6 步：校验

```bash
bun scripts/check-ill.ts   # 文件缺失 0、无效节 0、新图注 120–260 汉字
bunx tsc --noEmit 2>&1 | grep "src/data/draw-<abbr>"   # 应为空
```

## 绘图库 API 速查（scripts/draw/lib.ts，B 类链式构建器）

配色 `C`：ink/sub/mute/faint/bg/panel/panelB/line｜dna(+L浅/D深, 青绿,核酸-基因)、rna(+L/D, 琥珀)、pro(+L/D, 紫,蛋白-因子)、enz(+L/D, 玫红,酶-工具)、acc(+L浅, 天蓝,技术-数据)、ok/warn/bad(+L, 状态色)。
语义约定：基因元件 dna、RNA rna、蛋白 pro、酶 enz、流程/数据 acc、正常 ok、警告 warn、病理 bad。

**箭头 marker 键**：'ink'|'dna'|'rna'|'pro'|'enz'|'acc'|'ok'|'warn'|'bad'|'mute'（LineOpt.marker / markerStart）。

| 原语 | 要点 |
|---|---|
| `b.text/ctext/etext(x,y,s,{size,fill,anchor,weight,ls,opacity})` | etext 自动按 textW 居中防溢出 |
| `b.wtext(x,y,s,{maxW,lh,size,...})` | 自动换行文本块，返回结束 y |
| `b.rect/panel/circle/ellipse(x,y,w,h,{fill,stroke,sw,rx,dash,fillOp})` | panel 带 title 选项 |
| `b.polygon(pts,opts)` `b.polyline(pts,{stroke,sw,marker,dash})` `b.line(x1,y1,x2,y2,opts)` | |
| `b.arrow(x1,y1,x2,y2,{stroke,sw,marker,dash})` `b.path(d,opts)` `b.spline(pts,opts)` | spline 平滑曲线 |
| `b.tag(cx,cy,label,{fill,stroke,size,weight,tfill,pad})` | 自适应宽度标签胶囊（用 textW 量宽） |
| `b.legend(x,y,[[label,color],...],{size,gap,stroke})` | 图例条 |
| `b.dna(x,y,w,{amp,period,stroke,sw,rung,rungC})` | DNA 波浪双链（rung 画碱基横档） |
| `b.genes(x,y,w,[{label,frac,fill,stroke,h,up,size}])` | 线性基因元件图（操纵子/基因座首选） |
| `b.gel(x,y,w,h,[{label,bands:[[fy,'浓度'],...]}],{size})` | 电泳胶 lane（迁移率自上而下） |
| `b.stairs(x,y,w,h,items,{fill,stroke,size})` | 阶梯流程 |
| `b.brace(x,y1,y2,label,{side})` | 垂直花括号 |
| `b.cell(cx,cy,rx,ry,{label,double})` | 细胞轮廓 |
| `b.stemLoop(x,y,{h,r,stroke,label,lsize})` | RNA 茎环（核糖开关/发夹） |
| `b.domains(x,y,h,[{label,frac,fill,stroke,sub}])` | 蛋白结构域条 |
| `b.zone(x,y,w,h,{label,sub,fill,fillOp,stroke,dash})` | 分区底色（label 占顶部 ~50px） |
| `b.axis(x,y,w,h,{xlabel,ylabel,title,xticks,yticks,grid})` | y 为轴底；ticks 归一化 [0..1] |
| `b.curve(ax,ay,aw,ah,pts,{stroke,sw,dash,smooth,label})` | pts 归一化 [0..1]²；动力学/生长曲线 |
| `b.bars(x,y,w,h,values,{labels,vlabels,fill,stroke,max})` | 柱状图 |
| `b.table(x,y,w,{headers,rows,colW,title,rowH,fontSize})` | 对照表，返回底边 y |
| `b.timelineH(x,y,w,[{at,label,sub,above,c}],{title})` | 时间线 |
| `b.ion(cx,cy,label,{r,fill,stroke,tfill})` | 离子球 |
| `b.bilayer(x,y,w,{h,tint})` `b.vesicle(cx,cy,r,{label,coat:'clathrin'/'cop'})` | 膜/囊泡 |
| `b.nucleusU(cx,cy,r)` `b.mito(cx,cy,w,h)` `b.erU(x,y,w,h)` `b.golgi(cx,y,w)` `b.lysosome(cx,cy,r)` `b.chloro(cx,cy,w,h)` `b.ribo(cx,cy)` | 细胞器 |
| `b.rnaW(x,y,w,{amp,stroke})` `b.plasmid(cx,cy,r,{genes})` | RNA 链/环状质粒 |
| `b.bacterium(cx,cy,w,h,{shape:'rod'/'coccus'/'spirillum'/'vibrio',flagella:'mono'/'lopho'/'peri'})` | 细菌 |
| `b.virion(cx,cy,r,{shape:'icosahedral'/'enveloped'/'helical'/'bullet'})` | 病毒颗粒 |
| `b.braceH(x,y,w,{label,flip})` | 水平花括号 |

## 质量红线（科学性优先）

1. **数字来自 digest**：不得编造 Km 值、残基数、尺寸、年份。
2. 概念史/抽象内容用**时间线 + 对照表 + 概念关系图**组合表达。
3. **文字不重叠**（VLM 审校红线）：
   - zone/panel 的 label 占顶部 ~50px，主体从 `zone.y + 90` 起
   - 文字与图形垂直净距 ≥ 18px；文字不跨 zone 边界
   - 长文本用 `b.wtext(..., {maxW})` 自动换行
   - 相邻 tag 的 x 间距 ≥ (前一个标签宽/2 + 后一个宽/2 + 16)
4. 一图一个核心对比/过程；复杂内容拆 2–3 个 panel()（带「一、二、三」编号标题）。
5. 曲线类用 `b.axis + b.curve` 画真实函数形状（如竞争抑制双曲线右移 Km↑Vmax 不变；别构 S 形；生长曲线各期斜率）。

## 参考范例（必读）

- `scripts/draw/scenes/mb/ch10-s1.ts`（HGP：时间轴+双战略+饼图，VLM 审校通过）
- `scripts/draw/scenes/mb/ch7-s2.ts`（与门真值表+分子机制）
- 挂载图注风格：`src/data/draw-mb-r4.ts` 18 条

## 完成标准（缺一不可）

- [ ] 分配列表每节 ≥1 张图
- [ ] `bun scripts/draw/gen.ts <abbr>` 全 ✓
- [ ] `bun scripts/check-ill.ts`：缺失 0、无效节 0、新图注 120–260 汉字
- [ ] `bunx tsc --noEmit` 对 src/data/draw-<abbr> 零错误
- [ ] agent-browser 截图 2–3 张 + `z-ai vision` 抽检通过（文字重叠/乱码/截断）
- [ ] worklog.md 末尾追加工作记录（只追加不覆盖）
