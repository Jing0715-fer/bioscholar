#!/bin/bash
# 单流顺序生成全部插图（避免并发 API 失败）
cd /home/z/my-project
for g in covers biochemistry molecular-biology cell-biology biophysics; do
  bash scripts/gen-images-cli.sh "$g" >> /tmp/gen-all.log 2>&1
done
echo "ALL GROUPS DONE" >> /tmp/gen-all.log
