// ============================================================
// BioScholar 教材字数统计
// 计数口径（学术惯例）：CJK 字符逐字计数；英文单词与数字串按词计数
// ============================================================

/** 统计一段教材正文的字数（中文字 + 英文词） */
export function countWords(text: string): number {
  // CJK 统一表意文字、扩展 A、兼容表意、假名与谚文（防外字符漏计）
  const cjk = (
    text.match(
      /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3040-\u30ff\u31f0-\u31ff\uac00-\ud7af]/g
    ) || []
  ).length
  // 英文/数字词元（允许链式连字符、撇号与句点，如 β-oxidation、3.6）
  const words = (
    text.match(/[A-Za-z0-9]+(?:[.'’\-][A-Za-z0-9]+)*/g) || []
  ).length
  return cjk + words
}

/** 格式化字数（阅读向展示）：1.2 万字 / 3.4 千字 / 850 字 */
export function formatWordCount(n: number): string {
  if (n >= 10000) {
    const w = n / 10000
    return `${w >= 10 ? Math.round(w) : w.toFixed(1)} 万字`
  }
  if (n >= 1000) return `${(n / 1000).toFixed(1)} 千字`
  return `${n} 字`
}

/** 预计阅读时长（分钟）：中文教材精读约 400 字/分钟 */
export function readingMinutes(words: number): number {
  return Math.max(1, Math.round(words / 400))
}
