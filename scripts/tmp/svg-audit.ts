import { readdirSync, readFileSync } from 'fs'

const slugs = new Set<string>()
for (const f of readdirSync('scripts/tmp').filter(x => x.startsWith('mount-'))) {
  for (const m of JSON.parse(readFileSync(`scripts/tmp/${f}`, 'utf-8'))) slugs.add(m.slug)
}

let ok = 0, bad = 0
const issues: string[] = []
const CTRL = /[\u0008\u000B\u000C\u000E-\u001F]/
for (const slug of slugs) {
  const p = `public/images/bio/drawn/${slug}.svg`
  let src: string
  try { src = readFileSync(p, 'utf-8') } catch { issues.push(`${slug}: 文件缺失`); bad++; continue }
  const checks: Array<[boolean, string]> = [
    [src.startsWith('<?xml'), '无 xml 声明'],
    [/viewBox="0 0 1400 1000"/.test(src), '画布尺寸异常'],
    [!src.includes('NaN'), '含 NaN'],
    [!src.includes('undefined'), '含 undefined'],
    [!CTRL.test(src), '含控制字符'],
    [!/[\u2190\u2191\u2192\u2193]/.test(src.replace(/<path[^>]*>/g, '')), '文本含 Unicode 箭头'],
    [!/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(src), '含 emoji'],
    [(src.match(/<text/g) ?? []).length >= 5, '文本元素过少'],
    [src.length >= 3000, '内容过短'],
  ]
  const fails = checks.filter(([pass]) => !pass).map(([, msg]) => msg)
  if (fails.length) { issues.push(`${slug}: ${fails.join('、')}`); bad++ } else ok++
}
console.log(`检查 ${slugs.size} 张：OK ${ok}，异常 ${bad}`)
issues.forEach(i => console.log('  ✗ ' + i))
