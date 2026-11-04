#!/bin/sh

set -eu

cd "$(dirname "$0")"

for source in public/tmp-images/*; do
  [ -e "$source" ] || continue

  destination="images/${source##*/}"
  if [ -e "$destination" ]; then
    echo "Refusing to overwrite existing file: $destination" >&2
    exit 1
  fi
done

find src/content -type f -name '*.wly' \
  -exec perl -pi -e 's/src=tmp-images/src=images/g' {} +

for source in public/tmp-images/*; do
  [ -e "$source" ] || continue
  mv "$source" images/
done
