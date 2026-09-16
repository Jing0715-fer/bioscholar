#!/bin/bash
declare -A Q=(
  [u03]="endospore"
  [u04]="flagellum base"
  [u06b]="Penicillium microscopy"
  [u07b]="Rhizopus sporangium"
  [u10b]="influenza virus"
  [u17b]="CRISPR"
  [u15b]="phagocytosis diagram"
  [u02b]="gram stain"
)
for k in u03 u04 u06b u07b u10b u17b u15b u02b; do
  echo "=== $k: ${Q[$k]} ==="
  python3 commons.py search "${Q[$k]}" 2>/dev/null | head -16 > s_$k.txt
  cat s_$k.txt
done
