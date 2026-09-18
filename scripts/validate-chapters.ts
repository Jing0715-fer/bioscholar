// ============================================================
// BioScholar 章节内容校验脚本
// 用法：bun run scripts/validate-chapters.ts <subjectId> <ch1.ts> <ch2.ts> ...
// 校验规则（与教材编写简报一致）：
//   每节 content 2600–3600 字符；≥4 个 ## H2；含表格；
//   正文禁反引号 / ${ / H3+ / HTML / emoji / 代码块 / 链接 / 制表符；
//   keyPoints 3–6；terms 3–8；summary ≥80 字；keywords ≥4。
// ============================================================

import * as path from 'node:path'

interface ChapterLike {
  id: string
  number: number
  title: string
  summary: string
  keywords: string[]
  sections: {
    id: string
    title: string
    content: string
    keyPoints: string[]
    terms: string[]
  }[]
}

const EMOJI_RE =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{1F1E6}-\u{1F1FF}]/u

function checkSection(content: string): string[] {
  const errs: string[] = []
  const len = content.length
  if (len < 2600) errs.push(`字数不足：${len} < 2600`)
  if (len > 3600) errs.push(`字数超限：${len} > 3600`)
  const h2 = (content.match(/^## /gm) || []).length
  if (h2 < 4) errs.push(`H2 数量不足：${h2} < 4`)
  const tableLines = (content.match(/^\|/gm) || []).length
  if (tableLines < 2) errs.push('缺少表格')
  if (content.includes('`')) errs.push('含反引号')
  if (content.includes('${')) errs.push('含模板插值')
  if (content.includes('###')) errs.push('含 H3 及以下标题')
  if (/<[A-Za-z/][^>]*>/.test(content)) errs.push('含 HTML 标签')
  if (/\t/.test(content)) errs.push('含制表符')
  if (/\[[^\]]*\]\([^)]*\)/.test(content)) errs.push('含 Markdown 链接')
  const emoji = content.match(EMOJI_RE)
  if (emoji) errs.push(`含 emoji：${emoji.join('')}`)
  if (/^```/m.test(content)) errs.push('含代码块')
  return errs
}

async function main() {
  const [subjectId, ...files] = process.argv.slice(2)
  if (!subjectId || files.length === 0) {
    console.error('用法：bun run scripts/validate-chapters.ts <subjectId> <chapter.ts> [...]')
    process.exit(1)
  }

  let total = 0
  let failed = 0

  for (const file of files) {
    const resolved = file.startsWith('/') ? file : path.resolve(process.cwd(), file)
    const mod: Record<string, unknown> = await import(resolved)
    const exportKeys = Object.keys(mod)
    const chapter = exportKeys
      .map((k) => mod[k] as ChapterLike)
      .find((v) => v && Array.isArray(v.sections) && typeof v.number === 'number')
    if (!chapter) {
      console.error(`✗ ${file}：未找到 Chapter 导出`)
      failed += 1
      continue
    }

    const chapterErrs: string[] = []
    if (chapter.id !== `${subjectId}-ch${chapter.number}`) {
      chapterErrs.push(`章节 id 不符：${chapter.id}`)
    }
    if (!chapter.summary || chapter.summary.length < 80) {
      chapterErrs.push(`summary 不足 80 字（${chapter.summary ? chapter.summary.length : 0}）`)
    }
    if (!chapter.keywords || chapter.keywords.length < 4) {
      chapterErrs.push('keywords 不足 4 个')
    }
    if (chapter.sections.length !== 4) {
      chapterErrs.push(`节数为 ${chapter.sections.length}，应为 4`)
    }

    let sectionFail = false
    for (const s of chapter.sections) {
      const errs = checkSection(s.content)
      if (!Array.isArray(s.keyPoints) || s.keyPoints.length < 3 || s.keyPoints.length > 6) {
        errs.push(`keyPoints 数量 ${s.keyPoints ? s.keyPoints.length : 0} 不在 3–6`)
      }
      if (!Array.isArray(s.terms) || s.terms.length < 3 || s.terms.length > 8) {
        errs.push(`terms 数量 ${s.terms ? s.terms.length : 0} 不在 3–8`)
      }
      if (errs.length > 0) {
        sectionFail = true
        failed += 1
        console.error(`  ✗ ${s.id}（${s.content.length} 字）：${errs.join('；')}`)
      } else {
        console.log(`  ✓ ${s.id}（${s.content.length} 字，H2 ${((s.content.match(/^## /gm) || []).length)}，含表格）`)
      }
      total += 1
    }

    if (chapterErrs.length > 0 || sectionFail) {
      for (const e of chapterErrs) console.error(`  ✗ ${chapter.id}：${e}`)
      console.error(`✗ ${file}：${chapter.id} 存在问题`)
    } else {
      console.log(`✓ ${file}：${chapter.id}《${chapter.title}》4 节全部通过`)
    }
  }

  if (failed > 0) {
    console.error(`✗ ${subjectId}：${total} 节中有 ${failed} 节未通过校验`)
    process.exit(1)
  }
  console.log(`✓ ${subjectId}：${files.length} 章共 ${total} 节全部通过`)
}

main()
