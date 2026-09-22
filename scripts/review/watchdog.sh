#!/usr/bin/env bash
# 审校看门狗：每 5 分钟检查 vlm-audit 进程，死亡则重启（断点续跑）；全部完成则退出
# 用法：bash scripts/review/watchdog.sh [总时长分钟，默认 720]
set -uo pipefail
cd "$(dirname "$0")/../.."
TOTAL_MIN=${1:-720}
START=$(date +%s)
INTERVAL=300

while true; do
  NOW=$(date +%s)
  ELAPSED=$(( (NOW - START) / 60 ))
  if [ "$ELAPSED" -ge "$TOTAL_MIN" ]; then echo "[watchdog] 时间到（${ELAPSED}min），退出" >> /tmp/drawn-audit/watchdog.log; break; fi

  RUNNING=$(pgrep -fc "vlm-audit.ts" 2>/dev/null || echo 0)
  PROGRESS=$(bun -e "
try { const r = JSON.parse(require('fs').readFileSync('/tmp/drawn-audit/vlm.json','utf-8')); console.log(r.length) } catch { console.log(0) }
" 2>/dev/null || echo 0)
  ERRN=$(bun -e "
try { const r = JSON.parse(require('fs').readFileSync('/tmp/drawn-audit/vlm.json','utf-8')); console.log(r.filter(x=>x.verdict==='ERROR').length) } catch { console.log(0) }
" 2>/dev/null || echo 0)

  echo "[$(date '+%H:%M:%S')] running=$RUNNING progress=$PROGRESS errors=$ERRN elapsed=${ELAPSED}min" >> /tmp/drawn-audit/watchdog.log

  # 完成判定：307 张全部有非 ERROR 结论
  DONE=$(bun -e "
try { const r = JSON.parse(require('fs').readFileSync('/tmp/drawn-audit/vlm.json','utf-8')); const ok = r.filter(x=>x.verdict!=='ERROR'); console.log(ok.length >= 307 ? 'yes' : 'no') } catch { console.log('no') }
" 2>/dev/null || echo no)
  if [ "$DONE" = "yes" ]; then echo "[watchdog] drawn 审校全部完成，退出" >> /tmp/drawn-audit/watchdog.log; break; fi

  if [ "$RUNNING" -eq 0 ]; then
    echo "[watchdog] 进程死亡，重启审校" >> /tmp/drawn-audit/watchdog.log
    bun -e "
const { spawn } = require('child_process')
const fs = require('fs')
const out = fs.openSync('/tmp/drawn-audit/run.log', 'a')
const p = spawn('bun', ['scripts/review/vlm-audit.ts', '--conc', '1'], { detached: true, stdio: ['ignore', out, out] })
p.unref()
console.log('relaunched', p.pid)
" >> /tmp/drawn-audit/watchdog.log 2>&1
  fi
  sleep "$INTERVAL"
done
