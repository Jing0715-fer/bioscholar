#!/bin/bash
S=/home/z/my-project/agent-ctx/tmp24a/staging
declare -a T=( \
"File:Phylogenetic tree.svg|three-domain-tree.png|1920" \
"File:202410 CRISPR-Cas9.svg|crispr-cas9-mechanism.png|1920" \
"File:Endospor.jpg|cand-endospor.jpg|0" \
"File:Endospore Formation.png|cand-endospore-formation.png|0" \
"File:Aspergillus niger in LPCB Tease Mount at 1600X.jpg|aspergillus-conidial-head.jpg|0" \
"File:Complement pathways.png|complement-pathways.png|0" \
)
for row in "${T[@]}"; do
  IFS='|' read -r title dest w <<< "$row"
  if [ "$w" = "0" ]; then
    python3 dlone.py "$title" "$S/$dest" 2>&1 | sed "s|^|[$dest] |"
  else
    python3 dlone.py "$title" "$S/$dest" "$w" 2>&1 | sed "s|^|[$dest] |"
  fi
  # validate: must be a real image, else retry loop inside dlone already tried; mark failures
  sleep 6
done
echo "ALL-DONE"
