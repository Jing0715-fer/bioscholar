/**
 * 扩充层批次文件校验
 * 用法：bun run scripts/validate-expansion.ts <expansion-file.ts> <subjectId> [章节号...]
 * 校验：导出结构合法、key 与既有学科 sectionId 一一对应（且仅覆盖指定章节范围）、
 *       正文字数下限、H2 结构、不含非法标记
 */
import { subjects } from '../src/data/biology'

const MIN_WORDS = 2400 // 扩充后正文字符数下限
const MIN_H2 = 3

async function main() {
  const [file, subjectId, ...chapterNums] = process.argv.slice(2)
  if (!file || !subjectId) {
    console.error('用法: bun run scripts/validate-expansion.ts <file.ts> <subjectId> [章号...]')
    process.exit(1)
  }
  const subject = subjects.find((s) => s.id === subjectId)
  if (!subject) {
    console.error(`✗ 未知学科: ${subjectId}`)
    process.exit(1)
  }
  const allowed = new Set(
    subject.chapters
      .filter((c) => chapterNums.length === 0 || chapterNums.includes(String(c.number)))
      .flatMap((c) => c.sections.map((s) => s.id))
  )
  const missing = new Set(allowed)

  const mod = await import(file.startsWith('/') ? file : `${process.cwd()}/${file}`)
  const expansions = Object.entries(mod).find(
    ([, v]) => v && typeof v === 'object' && !Array.isArray(v)
  )?.[1] as Record<string, string> | undefined
  if (!expansions) {
    console.error(`✗ ${file}: 未找到导出的 Record<string, string>`)
    process.exit(1)
  }

  let allOk = true
  for (const [key, content] of Object.entries(expansions)) {
    if (!allowed.has(key)) {
      console.error(`✗ key 不在指定章节范围或不存在: ${key}`)
      allOk = false
      continue
    }
    missing.delete(key)
    const errs: string[] = []
    if (typeof content !== 'string' || content.length < MIN_WORDS)
      errs.push(`正文 ${content?.length ?? 0} 字 < ${MIN_WORDS}`)
    const h2 = (content.match(/^## /gm) || []).length
    if (h2 < MIN_H2) errs.push(`H2 标题 ${h2} 个 < ${MIN_H2}`)
    if (content.includes('{{')) errs.push('含非法 {{ 标记')
    if (content.includes('\t')) errs.push('含制表符')
    if (errs.length) {
      console.error(`✗ ${key}:`)
      for (const e of errs) console.error(`    - ${e}`)
      allOk = false
    }
  }
  if (missing.size > 0) {
    console.error(`✗ 指定章节内尚有小节未被扩充: ${[...missing].join(', ')}`)
    allOk = false
  }
  if (allOk) {
    const lens = Object.values(expansions).map((c) => c.length)
    console.log(
      `✓ ${file}: ${Object.keys(expansions).length} 节全部通过 · 字数区间 ${Math.min(
        ...lens
      )}–${Math.max(...lens)}`
    )
  }
  process.exit(allOk ? 0 : 1)
}

main()
