#!/usr/bin/env bash
# Capture desktop and mobile evidence of the running preview.
# Opens its own browser, writes final-desktop.png and final-mobile.png into
# CAPTURE_DIR, closes the browser and leaves the app running.
# Exit 75 = temporary navigation/browser infrastructure failure.
# Exit 1  = script or rendering defect.
set -euo pipefail

timed() { /usr/bin/time -p "$@"; }

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

if [[ -z "${CAPTURE_URL:-}" || -z "${CAPTURE_DIR:-}" ]]; then
  echo "capture.sh requires CAPTURE_URL and CAPTURE_DIR." >&2
  exit 1
fi
if [[ ! "$CAPTURE_URL" =~ ^https?:// ]]; then
  echo "CAPTURE_URL must be an http(s) URL (got '$CAPTURE_URL')." >&2
  exit 1
fi
if [[ -z "${RUNTIME_DIR:-}" || ! -f "$RUNTIME_DIR/scripts/default-capture.mjs" ]]; then
  echo "RUNTIME_DIR/scripts/default-capture.mjs is missing; cannot drive Playwright." >&2
  exit 1
fi

# Evidence must stay outside the source tree.
project_real="$(realpath -m "$PROJECT_DIR")"
capture_real="$(realpath -m "$CAPTURE_DIR")"
case "$capture_real/" in
  "$project_real"/*)
    echo "CAPTURE_DIR must be outside the project (got '$CAPTURE_DIR')." >&2
    exit 1
    ;;
esac

echo "==> Capturing $CAPTURE_URL into $CAPTURE_DIR"
timed mkdir -p "$CAPTURE_DIR"

# Keep only freshly captured evidence.
for name in final-desktop.png final-mobile.png; do
  if [[ -f "$CAPTURE_DIR/$name" ]]; then
    timed rm -f "$CAPTURE_DIR/$name"
  fi
done

# Wait for the game canvas instead of merely <body>, so a blank bootstrap page
# is never accepted as rendered content.
CAPTURE_READY_SELECTOR="${CAPTURE_READY_SELECTOR:-canvas}"
export CAPTURE_READY_SELECTOR

/usr/bin/time -p node "$RUNTIME_DIR/scripts/default-capture.mjs"

# Validate the evidence the controller will publish.
for name in final-desktop.png final-mobile.png; do
  file="$CAPTURE_DIR/$name"
  if [[ ! -f "$file" ]]; then
    echo "Capture did not produce $name." >&2
    exit 1
  fi
  signature="$(head -c 8 "$file" | od -An -tx1 | tr -d ' \n')"
  if [[ "$signature" != "89504e470d0a1a0a" ]]; then
    echo "$name is not a PNG image." >&2
    exit 1
  fi
  size="$(stat -c %s "$file")"
  if (( size <= 24 )); then
    echo "$name is empty ($size bytes)." >&2
    exit 1
  fi
  echo "==> $name: $size bytes"
done

echo "==> Capture complete"
