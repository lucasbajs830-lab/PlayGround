#!/usr/bin/env bash
# Build and serve the game in the foreground.
# The controller owns this process (tmux app-server) and reuses it while the
# local port answers, so everything here must stay inside PROJECT_DIR and the
# server must survive until it is stopped.
set -euo pipefail

timed() { /usr/bin/time -p "$@"; }

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

PORT="${PORT:-3000}"
if [[ ! "$PORT" =~ ^[0-9]+$ ]] || ((PORT < 1 || PORT > 65535)); then
  echo "PORT must be an integer between 1 and 65535 (got '$PORT')." >&2
  exit 1
fi
export PORT

DIST_DIR="$PROJECT_DIR/dist"
METADATA_DIR="${OPENCODE_WEB_DIR:-}"

echo "==> Project: $PROJECT_DIR"
echo "==> Port: $PORT"

# ---- dependencies (only when the lockfile is newer than the install) ----
install_needed=false
if [[ ! -d node_modules/vite ]]; then
  install_needed=true
fi
if [[ -f node_modules/.package-lock.json ]]; then
  if [[ package.json -nt node_modules/.package-lock.json || package-lock.json -nt node_modules/.package-lock.json ]]; then
    install_needed=true
  fi
else
  install_needed=true
fi

if [[ "$install_needed" == true ]]; then
  echo "==> Installing dependencies"
  if [[ -f package-lock.json ]]; then
    timed npm ci --no-audit --no-fund
  else
    timed npm install --no-audit --no-fund
  fi
else
  echo "==> Dependencies already installed"
fi

# ---- build (only when the sources are newer than the built index.html) ----
build_needed=false
if [[ ! -f "$DIST_DIR/index.html" ]]; then
  build_needed=true
elif [[ -n "$(find src index.html package.json -newer "$DIST_DIR/index.html" -print -quit 2>/dev/null)" ]]; then
  build_needed=true
fi

if [[ "$build_needed" == true ]]; then
  echo "==> Building static output"
  timed node node_modules/vite/bin/vite.js build --base ./
else
  echo "==> Build is up to date"
fi

if [[ ! -f "$DIST_DIR/index.html" ]]; then
  echo "Build produced no $DIST_DIR/index.html." >&2
  exit 1
fi

# ---- deployment metadata for the controller ----
if [[ -n "$METADATA_DIR" ]]; then
  echo "==> Writing deployment metadata"
  timed mkdir -p "$METADATA_DIR"
  timed node -e '
    const fs = require("node:fs");
    const path = require("node:path");
    const [project, directory, output] = process.argv.slice(1);
    fs.writeFileSync(
      path.join(output, "deployment-output.json"),
      JSON.stringify({ project, directory }) + "\n",
    );
  ' "$PROJECT_DIR" "$DIST_DIR" "$METADATA_DIR"
else
  echo "==> OPENCODE_WEB_DIR is unset; skipping deployment-output.json"
fi

# ---- serve in the foreground ----
echo "==> Serving $DIST_DIR"
exec /usr/bin/time -p node "$PROJECT_DIR/scripts/serve.mjs" "$DIST_DIR"
