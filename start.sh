#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
cd "$DIR"

echo "======================================================"
echo " Starting Scan&Print Platform"
echo " Port: ${PORT:-5173}"
echo "======================================================"

node server.js
