#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

target_url=${1:-http://localhost}

npx lhci autorun \
    --collect.numberOfRuns=3 \
    --collect.url="${target_url}"/posts \
    --collect.url="${target_url}"/stack \
    --collect.url="${target_url}"/traveling \
    --collect.url="${target_url}"/working \
    --collect.url="${target_url}"/ 