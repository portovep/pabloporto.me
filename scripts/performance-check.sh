#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

target_url=${1:-http://localhost:3000}

unlighthouse-ci --site "${target_url}" --sitemaps "${target_url}/sitemap.xml"
