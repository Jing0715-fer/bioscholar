// 临时自检：文本是否溢出画布（XC-2 用后即删）
const CJK = /[\u2E80-\u9FFF\uF900-\uFAFF\u3000-\u303F\uFF00-\uFFEF]/
const WIDE = /[A-Z0-9]/
const THIN = /[·,.:;'"()[\]{}?!/|ilj I1]/
function rawW(s: string, size: number): number {
  let w = 0
  for (const ch of s) {
    if (CJK.test(ch)) w += size
    else if (WIDE.test(ch)) w += size * 0.62
    else if (THIN.test(ch)) w += size * 0.32
    else w += size * 0.52
  }
  return w
}
function textW(s: string, size: number, weight = 400): number {
  return rawW(s, size) * (weight >= 600 ? 1.03 : 1)
}

for (const f of ['ch11-s2', 'ch11-s3', 'ch11-s4']) {
  const svg = (await import(`../draw/scenes/xc/${f}.ts`)).default as string
  const issues: string[] = []
  const re = /<text x="([\d.]+)" y="([\d.]+)"([^>]*)>([^<]*)<\/text>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg))) {
    const x = +m[1], y = +m[2], attrs = m[3], body = m[4]
    if (body.includes('<tspan')) continue
    const size = +(attrs.match(/font-size="([\d.]+)"/)?.[1] ?? 18)
    const weight = +(attrs.match(/font-weight="(\d+)"/)?.[1] ?? 400)
    const anchor = attrs.match(/text-anchor="(\w+)"/)?.[1] ?? 'start'
    const w = textW(body, size, weight)
    let x0 = x, x1 = x + w
    if (anchor === 'middle') { x0 = x - w / 2; x1 = x + w / 2 }
    if (anchor === 'end') { x0 = x - w; x1 = x }
    if (x0 < 8 || x1 > 1392 || y > 996 || y < 20) {
      issues.push(`(${x0.toFixed(0)},${y})..${x1.toFixed(0)} [${anchor}] ${body.slice(0, 34)}`)
    }
  }
  console.log(f, 'canvas overflow issues:', issues.length ? '\n  ' + issues.join('\n  ') : 'none')
}
