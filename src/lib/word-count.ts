// ============================================================
// 字数统计：CJK 逐字计数 + 西文按词计数
// ============================================================

/** 统计正文字数（中文逐字、英文按词、数字串按一个单位） */
export function countWords(text: string): number {
  const cjk = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length
  const latin = (text.match(/[A-Za-z0-9]+(?:[-'’][A-Za-z0-9]+)*/g) || []).length
  return cjk + latin
}

/** 万字格式：1.2 万字 / 8,432 字 */
export function formatWordCount(n: number): string {
  if (n >= 10000) {
    const w = n / 10000
    return `${w >= 10 ? Math.round(w) : w.toFixed(1).replace(/\.0$/, '')} 万字`
  }
  return `${n.toLocaleString('zh-CN')} 字`
}

/** 预计阅读分钟（约 400 字/分钟） */
export function readingMinutes(n: number): number {
  return Math.max(1, Math.round(n / 400))
}
