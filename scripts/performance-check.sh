#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

target_url=${1:-http://localhost:3000}

npx lhci autorun \
    --collect.numberOfRuns=1 \
    --collect.url="${target_url}"/about \
    --collect.url="${target_url}"/blog \
    --collect.url="${target_url}"/blog/what-its-like-to-be-a-developer-in-a-modern-software-engineering-team \
    --collect.url="${target_url}"/stack \
    --collect.url="${target_url}"/traveling \
    --collect.url="${target_url}"/working \
    --collect.url="${target_url}"/making \
    --collect.url="${target_url}"/ 