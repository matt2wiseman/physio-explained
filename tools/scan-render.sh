#!/bin/bash
# Renders every compiled injury animation headlessly and prints any console errors or NaN geometry.
# Usage: tools/scan-render.sh   (run `node scripts/build.mjs` first so data/injuries/*.json is current)
cd "$(dirname "$0")/.." || exit 1
bad=0
for f in data/injuries/*.json; do
  id=$(basename "$f" .json)
  res=$(node tools/render-anim.mjs "$id" --sheet 6 2>&1 | grep -iE "error|NaN|warn" | sort | uniq -c | head -5)
  if [ -n "$res" ]; then echo "== $id"; echo "$res"; bad=$((bad+1)); fi
done
echo "render scan: $bad page(s) with console errors"
