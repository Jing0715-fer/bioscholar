// ============================================================
// 41 系列：自绘插图 VLM 全量审校
// 四维：文字重叠 / 乱码 / 截断溢出 / 科学性
// 用法：bun scripts/review/vlm-audit.ts [--limit N] [--only file1.svg,file2.svg] [--conc N]
// 断点续跑：结果增量写入 /tmp/drawn-audit/vlm.json，重跑自动跳过已审
// ============================================================
import ZAI from 'z-ai-web-dev-sdk'
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const PNG_DIR = '/tmp/drawn-png'
const REPORT = '/tmp/drawn-audit/vlm.json'

const args = process.argv.slice(2)
function argVal(flag: string): string | undefined {
  const i = args.indexOf(flag)
  return i >= 0 ? args[i + 1] : undefined
}
const LIMIT = Number(argVal('--limit') ?? Infinity)
const ONLY = argVal('--only')?.split(',').filter(Boolean)
const CONC = Number(argVal('--conc') ?? 4)

interface Result {
  file: string
  verdict: 'PASS' | 'FAIL' | 'ERROR'
  overlap?: boolean; garbled?: boolean; truncate?: boolean; science?: boolean
  issues?: string; fix_hint?: string; note?: string
}

const PROMPT = `你是出版级插图质检专家。这是一张代码绘制的 1400×1000 生物学科研教学矢量图。请逐项严格检查四类问题：

1. 文字重叠：文字与文字相互叠压导致难以阅读；文字被图形线条明显穿过（注意：文字放在色块/面板/细胞/色带内部属于正常设计，紧邻图形不算重叠）
2. 乱码异常：方框□、豆腐块、问号、字符缺失、明显显示异常的字形（注意：∝、⟨⟩、⇒、上下标字符 ₀₂⁺⁻ 等数学符号经字体回退显示可能略变形或偏大，属于正常渲染差异，不算乱码）
3. 截断溢出：文字超出画布边缘被裁剪、文字被容器边界明显裁剪遮挡、句子中途被截断
4. 科学性：标注与图形明显不符、数值/方向/结构关系错误（结合生物学专业知识判断）

判定标准：只有当问题实际影响教学可读性时才判 FAIL；轻微紧凑但可读的布局判 PASS。

只输出严格 JSON（无其他文字）：
{"verdict":"PASS或FAIL","overlap":true或false,"garbled":true或false,"truncate":true或false,"science":true或false,"issues":"具体列出每个问题的位置与内容，PASS 则为空串","fix_hint":"针对每个问题给出可执行的修复建议，PASS 则为空串"}`

async function auditOne(zai: Awaited<ReturnType<typeof ZAI.create>>, png: string): Promise<Result> {
  const buf = readFileSync(resolve(PNG_DIR, png))
  const dataUrl = `data:image/png;base64,${buf.toString('base64')}`
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const completion = await zai.chat.completions.createVision({
        model: 'glm-5v-turbo',
        messages: [{
          role: 'user',
          content: [
            { type: 'text' as const, text: PROMPT },
            { type: 'image_url' as const, image_url: { url: dataUrl } },
          ],
        }],
        thinking: { type: 'disabled' },
      })
      const content = completion.choices[0]?.message?.content ?? ''
      const jsonM = /\{[\s\S]*\}/.exec(content)
      if (!jsonM) throw new Error('无 JSON 输出')
      const parsed = JSON.parse(jsonM[0])
      return {
        file: png.replace('.png', '.svg'),
        verdict: parsed.verdict === 'FAIL' ? 'FAIL' : 'PASS',
        overlap: !!parsed.overlap, garbled: !!parsed.garbled, truncate: !!parsed.truncate, science: !!parsed.science,
        issues: String(parsed.issues ?? ''), fix_hint: String(parsed.fix_hint ?? ''),
        note: content.slice(0, 120),
      }
    } catch (e) {
      if (attempt === 3) return { file: png.replace('.png', '.svg'), verdict: 'ERROR', note: (e as Error).message.slice(0, 200) }
      await new Promise(r => setTimeout(r, 1500 * attempt))
    }
  }
  return { file: png.replace('.png', '.svg'), verdict: 'ERROR' }
}

async function main() {
  const zai = await ZAI.create()
  const all = readdirSync(PNG_DIR).filter(f => f.endsWith('.png')).sort()
  const existing: Result[] = existsSync(REPORT) ? JSON.parse(readFileSync(REPORT, 'utf-8')) : []
  const done = new Set(existing.map(r => r.file))
  let targets = all.map(f => f.replace('.png', '.svg')).filter(f => !done.has(f))
  if (ONLY) targets = targets.filter(f => ONLY.includes(f))
  targets = targets.slice(0, LIMIT)
  console.log(`待审 ${targets.length} 张（已完成 ${existing.length}，并发 ${CONC}）`)

  const results = [...existing]
  let idx = 0, n = 0
  async function worker(wid: number) {
    while (idx < targets.length) {
      const slug = targets[idx++]
      const r = await auditOne(zai, `${slug.replace(".svg", "")}.png`)
      results.push(r)
      n++
      const flag = r.verdict === 'PASS' ? '✓' : r.verdict === 'FAIL' ? '✗ FAIL' : '✗ ERR'
      console.log(`[w${wid}] ${n}/${targets.length} ${flag} ${slug}`)
      if (r.verdict === 'FAIL') console.log(`    → ${r.issues?.slice(0, 160)}`)
      if (n % 10 === 0) writeFileSync(REPORT, JSON.stringify(results, null, 1))
    }
  }
  await Promise.all(Array.from({ length: CONC }, (_, i) => worker(i)))
  writeFileSync(REPORT, JSON.stringify(results, null, 1))

  const fails = results.filter(r => r.verdict === 'FAIL')
  const errs = results.filter(r => r.verdict === 'ERROR')
  console.log(`\n===== 审校汇总：${results.length} 张，FAIL ${fails.length}，ERROR ${errs.length} =====`)
  writeFileSync('/tmp/drawn-audit/vlm-fails.json', JSON.stringify(fails, null, 2))
  for (const f of fails) console.log(`  ✗ ${f.file}\n    ${f.issues?.slice(0, 200)}`)
}
main()
