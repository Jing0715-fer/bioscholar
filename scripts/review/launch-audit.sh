#!/usr/bin/env bash
# 审校任务守护启动器：spawn detached + unref，使子进程过继 init，跨工具调用存活
# 用法：bash scripts/review/launch-audit.sh [drawn_conc] [commons_conc]
set -euo pipefail
cd "$(dirname "$0")/../.."
DC=${1:-3}
CC=${2:-2}
bun -e "
const { spawn } = require('child_process')
const fs = require('fs')
function launch(script, log, args) {
  const out = fs.openSync(log, 'a')
  const p = spawn('bun', [script, ...args], { detached: true, stdio: ['ignore', out, out], cwd: process.cwd() })
  p.unref()
  console.log('launched', script, 'PID', p.pid, '-> log', log)
}
launch('scripts/review/vlm-audit.ts', '/tmp/drawn-audit/run.log', ['--conc', '${DC}'])
launch('scripts/review/vlm-audit-commons.ts', '/tmp/drawn-audit/run-commons.log', ['--conc', '${CC}'])
"
