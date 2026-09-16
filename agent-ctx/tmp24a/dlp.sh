#!/bin/bash
# Download plan with proper args (fixes prior attempt's arg bug)
S=/home/z/my-project/agent-ctx/tmp24a/staging
declare -a T=( \
"File:Aspergillus niger in LPCB Tease Mount at 1600X.jpg|aspergillus-conidial-head.jpg|0" \
"File:PhageExterior.svg|bacteriophage-t4-structure.png|1920" \
"File:Lysogenic and lytic cycle.svg|phage-lytic-lysogenic-cycles.png|1920" \
"File:202204 Influenza virus.svg|influenza-virus-structure.png|1920" \
"File:Bacterial growth en.svg|bacterial-growth-curve.png|1920" \
"File:Conjugation.svg|bacterial-conjugation.png|1920" \
"File:Nitrogen Cycle.svg|nitrogen-cycle.png|1920" \
"File:LPS.svg|lps-structure.png|1280" \
"File:Complement pathways.png|complement-pathways.png|0" \
"File:Phylogenetic tree.svg|three-domain-tree.png|1920" \
"File:202410 CRISPR-Cas9.svg|crispr-cas9-mechanism.png|1920" \
"File:Endospor.jpg|cand-endospor.jpg|0" \
"File:Endospore Formation.png|cand-endospore-formation.png|0" \
)
for row in "${T[@]}"; do
  IFS='|' read -r title dest w <<< "$row"
  if [ "$w" = "0" ]; then
    python3 dlone.py "$title" "$S/$dest" 2>&1 | sed "s|^|[$dest] |"
  else
    python3 dlone.py "$title" "$S/$dest" "$w" 2>&1 | sed "s|^|[$dest] |"
  fi
  sleep 5
done
