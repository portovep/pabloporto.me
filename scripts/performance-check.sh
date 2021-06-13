#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

target_url=${1:-http://localhost}

npx lhci autorun \
    --collect.numberOfRuns=3 \
    --collect.url="${target_url}"/about \
    --collect.url="${target_url}"/blog \
    --collect.url="${target_url}"/blog/what-is-like-to-be-a-developer-at-thoughtworks \
    --collect.url="${target_url}"/stack \
    --collect.url="${target_url}"/traveling \
    --collect.url="${target_url}"/working \
    --collect.url="${target_url}"/making \
    --collect.url="${target_url}"/ 