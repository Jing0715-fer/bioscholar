#!/bin/bash
CF=/home/z/my-project/agent-ctx/tmp24a/cfetch.sh
declare -A Q=(
  [t1]="average prokaryote cell"
  [t2]="gram positive gram negative cell wall"
  [t3]="endospore structure"
  [t4]="bacterial flagellum"
)
for k in t1 t2 t3 t4; do
  ENC=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "${Q[$k]}")
  echo "=== $k: ${Q[$k]} ==="
  bash $CF "https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srsearch=${ENC}&format=json&srlimit=20" > search_$k.json
  jq -r '.query.search[].title' search_$k.json | head -20
done
