// ============================================================
// VLM 恢复监视器：每 150s 探测一次，连续 2 次成功后自动拉起
// 自绘 + commons 全量审校（detached），避免人工盯守
// 日志：/tmp/drawn-audit/recovery.log
// ============================================================
import ZAI from 'z-ai-web-dev-sdk'
import { appendFileSync, openSync } from 'node:fs'
import { spawn } from 'node:child_process'

const LOG = '/tmp/drawn-audit/recovery.log'
const log = (m: string) => appendFileSync(LOG, `[${new Date().toISOString().slice(11, 19)}] ${m}\n`)

async function probe(): Promise<boolean> {
  try {
    const zai = await ZAI.create()
    const c = await zai.chat.completions.createVision({
      model: 'glm-5v-turbo',
      messages: [{
        role: 'user',
        content: [
          { type: 'text' as const, text: '回复 OK' },
          { type: 'image_url' as const, image_url: { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' } },
        ],
      }],
      thinking: { type: 'disabled' },
    })
    return !!c.choices[0]?.message?.content
  } catch (e) {
    const s = String(e)
    if (!/429|Too many/i.test(s)) log(`探测异常（非 429）: ${s.slice(0, 150)}`)
    return false
  }
}

function launch(script: string, logFile: string, args: string[]) {
  const out = openSync(logFile, 'a')
  const p = spawn('bun', [script, ...args], { detached: true, stdio: ['ignore', out, out], cwd: process.cwd() })
  p.unref()
  log(`已拉起 ${script} PID ${p.pid} -> ${logFile}`)
}

async function main() {
  log('=== VLM 恢复监视器启动（每 150s 探测，连续 2 次成功触发审校）===')
  let streak = 0
  for (let i = 1; i <= 96; i++) { // 最多守望 4 小时
    const ok = await probe()
    streak = ok ? streak + 1 : 0
    log(`探测 #${i}: ${ok ? '✅ 成功' : '❌ 429'}（streak=${streak}）`)
    if (streak >= 2) {
      log('VLM 已恢复，拉起全量审校…')
      await launch('scripts/review/vlm-audit.ts', '/tmp/drawn-audit/run.log', ['--conc', '2'])
      await launch('scripts/review/vlm-audit-commons.ts', '/tmp/drawn-audit/run-commons.log', ['--conc', '2'])
      log('审校已全部拉起，监视器退出')
      return
    }
    await new Promise(r => setTimeout(r, 150000))
  }
  log('守望 4 小时仍未恢复，监视器退出')
}
main()
