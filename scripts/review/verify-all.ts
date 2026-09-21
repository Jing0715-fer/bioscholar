// ============================================================
// 41 系列：全学科像素级真值验证（verify-subject 的全量包装）
// 用法：bun scripts/review/verify-all.ts
// 退出码 0 = 全部清零
// ============================================================
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const ABBRS = ['bc', 'mb', 'cb', 'bp', 'mi', 'im', 'ne', 'bi', 'vi', 'legacy']
const merged: Array<{ file: string; type: string; detail: string }> = []
let bad = 0
for (const a of ABBRS) {
  try {
    const out = execSync(`bun scripts/review/verify-subject.ts ${a} 2>&1`, { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'] })
    const m = /确认真问题 (\d+) 处/.exec(out)
    console.log(out.split('\n')[0])
    if (m && Number(m[1]) > 0) bad++
  } catch (e) {
    // verify-subject 退出码 1 = 有问题；stdout 仍有内容
    const out = String((e as { stdout?: string }).stdout ?? '')
    const m = /确认真问题 (\d+) 处/.exec(out)
    console.log(out.split('\n')[0])
    if (m && Number(m[1]) > 0) bad++
  }
  try {
    const t = JSON.parse(readFileSync(`/tmp/drawn-audit/truth-${a}.json`, 'utf-8'))
    merged.push(...t)
  } catch { /* 无文件则跳过 */ }
}
writeFileSync('/tmp/drawn-audit/truth.json', JSON.stringify(merged, null, 2))
console.log(`\n全学科合计确认真问题 ${merged.length} 处（退出码 ${bad ? 1 : 0}）`)
process.exit(bad ? 1 : 0)
