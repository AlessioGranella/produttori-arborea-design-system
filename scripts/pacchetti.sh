#!/usr/bin/env bash
# Costruisce gli archivi scaricabili a partire dagli asset in public/brand/.
# Gira prima del build (npm run prebuild) e in CI: così gli zip non stanno in
# repo e non possono andare fuori sincrono con i file che contengono.
set -euo pipefail
cd "$(dirname "$0")/.."
B=public/brand
OUT=$B/download
rm -rf "$OUT"; mkdir -p "$OUT"

pacchetto () {           # $1 = nome zip, resto = percorsi relativi a $B
  local nome=$1; shift
  ( cd "$B" && zip -q -r -X "download/$nome.zip" "$@" -x '*/anteprima/*' '.DS_Store' )
  printf '  %-28s %6s KB\n' "$nome.zip" "$(( $(wc -c < "$OUT/$nome.zip") / 1024 ))"
}

pacchetto icone-svg          $(cd $B && ls icone/*.svg)
pacchetto icone-png          $(cd $B && ls icone/*.png)
pacchetto illustrazioni-svg  illustrazioni --include '*.svg'
pacchetto illustrazioni-png  illustrazioni --include '*.png'
pacchetto loghi              loghi
pacchetto font               font
pacchetto texture            texture
pacchetto produttori-arborea-asset icone loghi texture illustrazioni font

echo "archivi pronti in $OUT"
