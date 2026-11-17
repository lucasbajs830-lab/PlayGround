#!/usr/bin/env bash
# Once-per-worker prerequisites.
# The workflow configures Playwright/Xvfb before this hook runs, so the project
# itself needs no extra setup. Keep this script valid and fast: it runs on every
# worker start before OpenCode begins.
set -euo pipefail

/usr/bin/time -p bash -c 'command -v node >/dev/null'
/usr/bin/time -p bash -c 'command -v npm >/dev/null'
