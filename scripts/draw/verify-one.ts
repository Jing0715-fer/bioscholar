// ============================================================
// 单图复核辅助：渲染 SVG → VLM 判定是否仍有文字重叠
// 用法：bun scripts/draw/verify-one.ts <svg相对路径> [prompt补充]
// 输出：PASS / FAIL + 描述（exit code 0/2）
// ============================================================
import { execSync } from 'node:child_process'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import sharp from 'sharp'

const rel = process.argv[2]
if (!rel) {
  console.error('用法: bun scripts/draw/verify-one.ts <svg相对路径> [prompt补充]')
  process.exit(1)
}
const abs = resolve(rel.startsWith('/') ? rel : join(process.cwd(), rel))
const extra = process.argv[3] ?? ''

const tmp = mkdtempSync(join(tmpdir(), 'svgcheck-'))
const png = join(tmp, 'render.png')
await sharp(abs, { density: 72 }).resize({ width: 900 }).png().toFile(png)

const prompt = `请检查这张教材插图是否存在排版缺陷：A) 文字与文字相互重叠压字；B) 文字压在线条/曲线/图形上导致难读；C) 文字超出画布被裁切。注意：图例标签紧邻但不遮挡不算缺陷。${extra}\n回答格式：第一行只写 PASS 或 FAIL；若 FAIL，第二行起用不超过 40 字描述具体位置。`

try {
  execSync(`z-ai vision -p "${prompt.replace(/"/g, '\\"')}" -i "${png}" -o "${tmp}/out.json"`, {
    timeout: 120000, stdio: ['ignore', 'ignore', 'ignore'],
  })
  const out = JSON.parse(readFileSyncSafe(join(tmp, 'out.json')))
  const content = (out.choices?.[0]?.message?.content ?? '').trim()
  console.log(content.split('\n').slice(0, 4).join('\n'))
  process.exit(content.startsWith('PASS') ? 0 : 2)
} catch (e) {
  console.log('VLM_CALL_ERROR')
  process.exit(3)
}

function readFileSyncSafe(p: string): string {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { readFileSync } = require('node:fs') as typeof import('node:fs')
  return readFileSync(p, 'utf8')
}
