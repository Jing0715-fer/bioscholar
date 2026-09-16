/**
 * 微生物学章节文件结构校验
 * 用法：bun run scripts/validate-micro.ts src/data/subjects/micro/ch1.ts [ch2.ts ...]
 * 校验：章节/小节结构完整性、id 规范、正文字数下限、H2 结构、要点/术语条数
 */
import { Chapter } from '../src/lib/types'

const MIN_WORDS = 2400 // 正文字符数下限（教材级深度）
const MIN_H2 = 2

async function main() {
  const files = process.argv.slice(2)
  if (files.length === 0) {
    console.error('用法: bun run scripts/validate-micro.ts <chN.ts> [chN.ts ...]')
    process.exit(1)
  }
  let allOk = true
  for (const f of files) {
    const mod = await import(f.startsWith('/') ? f : `${process.cwd()}/${f}`)
    const chapters: Chapter[] = Object.values(mod).filter(
      (v) => v && typeof v === 'object' && 'sections' in (v as Record<string, unknown>)
    ) as Chapter[]
    if (chapters.length === 0) {
      console.error(`✗ ${f}: 未找到 Chapter 导出`)
      allOk = false
      continue
    }
    for (const ch of chapters) {
      const errs: string[] = []
      if (!/^microbiology-ch\d+$/.test(ch.id)) errs.push(`章 id 不规范: ${ch.id}`)
      if (typeof ch.number !== 'number' || ch.number < 1) errs.push('章号缺失')
      if (!ch.title || ch.title.length < 2) errs.push('章标题缺失')
      if (!ch.summary || ch.summary.length < 30) errs.push('章导言过短（<30 字）')
      if (!Array.isArray(ch.keywords) || ch.keywords.length < 3) errs.push('关键词 <3')
      if (!Array.isArray(ch.sections) || ch.sections.length === 0) errs.push('无小节')
      for (const s of ch.sections) {
        if (!/^microbiology-ch\d+-s\d+$/.test(s.id)) errs.push(`小节 id 不规范: ${s.id}`)
        if (!s.title) errs.push(`${s.id}: 标题缺失`)
        const len = s.content?.length ?? 0
        if (len < MIN_WORDS) errs.push(`${s.id}: 正文 ${len} 字 < ${MIN_WORDS}`)
        const h2 = (s.content?.match(/^## /gm) || []).length
        if (h2 < MIN_H2) errs.push(`${s.id}: H2 标题 ${h2} 个 < ${MIN_H2}`)
        if (!Array.isArray(s.keyPoints) || s.keyPoints.length < 3 || s.keyPoints.length > 6)
          errs.push(`${s.id}: keyPoints 应为 3-6 条`)
        if (!Array.isArray(s.terms) || s.terms.length < 3 || s.terms.length > 8)
          errs.push(`${s.id}: terms 应为 3-8 个`)
        if (s.content?.includes('{{')) errs.push(`${s.id}: 含非法 {{ 标记`)
      }
      if (errs.length) {
        allOk = false
        console.error(`✗ ${f} ${ch.id}（${ch.title}）:`)
        for (const e of errs) console.error(`    - ${e}`)
      } else {
        const words = ch.sections.reduce((a, s) => a + s.content.length, 0)
        console.log(
          `✓ ${f} ${ch.id}（${ch.title}）${ch.sections.length} 节 · 正文 ${words} 字 · 最短小节 ${Math.min(
            ...ch.sections.map((s) => s.content.length)
          )} 字`
        )
      }
    }
  }
  process.exit(allOk ? 0 : 1)
}

main()
