#!/bin/bash
# Task 24-a: download 4 remaining Commons files with 429 backoff (background loop)
UA="BioScholar/1.0 (educational project)"
S=/home/z/my-project/agent-ctx/tmp24a/staging
LOG=/home/z/my-project/agent-ctx/tmp24a/dl24a.log

declare -a T=(
"e/ef/Endospor.jpg|cand-endospor.jpg|Endospor.jpg"
"4/49/Endospore_Formation.png|cand-endospore-formation.png|Endospore_Formation.png"
"d/dd/Aspergillus_niger_in_LPCB_Tease_Mount_at_1600X.jpg|aspergillus-conidial-head.jpg|Aspergillus_niger_in_LPCB_Tease_Mount_at_1600X.jpg"
"3/3a/Complement_pathways.png|complement-pathways.png|Complement_pathways.png"
)

for row in "${T[@]}"; do
  IFS='|' read -r hash dest name <<< "$row"
  # skip if already a valid image
  if file "$S/$dest" 2>/dev/null | rg -q 'image data'; then
    echo "[skip] $dest already valid" >> "$LOG"
    continue
  fi
  ok=0
  for attempt in $(seq 1 40); do
    code=$(curl -s --max-time 120 --user-agent "$UA" -w '%{http_code}' -o "$S/$dest" "https://upload.wikimedia.org/wikipedia/commons/$hash")
    if [ "$code" = "200" ] && file "$S/$dest" | rg -q 'image data'; then
      echo "[$(date +%H:%M:%S)] OK $dest (attempt $attempt)" >> "$LOG"
      ok=1; break
    fi
    echo "[$(date +%H:%M:%S)] HTTP $code attempt $attempt for $dest" >> "$LOG"
    sleep 90
  done
  if [ "$ok" = "0" ]; then echo "[FAIL] $dest after 40 attempts" >> "$LOG"; fi
  sleep 8
done
echo "ALL-DONE $(date +%H:%M:%S)" >> "$LOG"
