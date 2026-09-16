#!/bin/bash
declare -A Q=(
  [t02]="gram negative cell wall diagram"
  [t03]="endospore structure diagram"
  [t04]="bacterial flagellum structure"
  [t05]="Saccharomyces cerevisiae microscopy"
  [t06]="Penicillium conidiophore microscopy"
  [t07]="Aspergillus conidial head microscopy"
  [t08]="bacteriophage T4 structure diagram"
  [t09]="lambda phage lytic lysogenic cycle"
  [t10]="influenza virus structure diagram"
  [t11]="bacterial growth curve"
  [t12]="bacterial conjugation diagram"
  [t13]="nitrogen cycle diagram"
  [t14]="lipopolysaccharide structure diagram"
  [t15]="complement system pathway"
  [t16]="tree of life three domain Woese"
  [t17]="CRISPR Cas9 mechanism diagram"
)
for k in t02 t03 t04 t05 t06 t07 t08 t09 t10 t11 t12 t13 t14 t15 t16 t17; do
  echo "=== $k: ${Q[$k]} ==="
  python3 commons.py search "${Q[$k]}" 2>/dev/null | head -14 > s_$k.txt
  cat s_$k.txt
done
